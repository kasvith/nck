'use strict';

const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Bring key classes into scope, most importantly Fabric SDK network class
const fs = require('fs');
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('../identity/user/nick/wallet');

app.use(express.static('../public'));

app.post('/api/deliverBatch', async (req, res) => {
    const { rfid, organization } = req.body;

    if (rfid === '' || organization === '') {
        res.status(500)
        return
    }

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        const userName = 'Admin@warehouse.nck.com';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('./gateway/networkConnection.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled: false, asLocalhost: true }

        };

        await gateway.connect(connectionProfile, connectionOptions);
        const network = await gateway.getNetwork('nckchannel');
        const contract = await network.getContract('nckcc');
        const buyResponse = await contract.submitTransaction('transferBatch', rfid, organization);

        res.status(200).json({ message: `delivered batch ${rfid}` })
    } catch (error) {

        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
        res.status(400).json({error: error})

    } finally {

        // Disconnect from the gateway
        console.log('Disconnect from Fabric gateway.');
        gateway.disconnect();

    }
});

app.listen(port, () => console.log(`Warehouse app listening on port ${port}!`))
