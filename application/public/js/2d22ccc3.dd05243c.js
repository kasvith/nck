(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22ccc3"],{f586:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"q-gutter-md",staticStyle:{width:"700px",padding:"10px"}},[e("q-input",{attrs:{outlined:"",label:"RFID"},model:{value:a.rfid,callback:function(t){a.rfid=t},expression:"rfid"}}),e("q-input",{attrs:{outlined:"",label:"Drug Name"},model:{value:a.drugname,callback:function(t){a.drugname=t},expression:"drugname"}}),e("q-input",{attrs:{outlined:"",label:"Dosage"},model:{value:a.dosage,callback:function(t){a.dosage=t},expression:"dosage"}}),e("q-input",{attrs:{outlined:"",label:"Amount"},model:{value:a.amount,callback:function(t){a.amount=t},expression:"amount"}}),e("q-input",{attrs:{outlined:"",label:"Organization"},model:{value:a.organization,callback:function(t){a.organization=t},expression:"organization"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",[a._v("Manufactured Date:")]),e("q-date",{attrs:{"today-btn":""},model:{value:a.manufacture_date,callback:function(t){a.manufacture_date=t},expression:"manufacture_date"}})],1),e("div",{staticClass:"col"},[e("p",[a._v("Expire Date:")]),e("q-date",{attrs:{"today-btn":""},model:{value:a.exprie_date,callback:function(t){a.exprie_date=t},expression:"exprie_date"}})],1)]),e("q-btn",{attrs:{color:"primary",icon:"done_outline",label:"Add Batch"},on:{click:a.addBatch}}),e("q-btn",{attrs:{color:"red",icon:"mail",label:"Clear"},on:{click:a.clear}})],1)])},i=[],o={name:"AddBatch",methods:{clear:function(){this.rfid="",this.drugname="",this.dosage="",this.amount="",this.organization="",this.manufacture_date="",this.exprie_date=""},addBatch:function(){var a=this;this.$axios.post("/api/addbatch",{rfid:this.rfid,drugname:this.drugname,dosage:this.dosage,amount:this.amount,organization:this.organization,manufacture_date:this.manufacture_date,exprie_date:this.exprie_date}).then((function(t){console.log(t),a.$q.notify({message:"Batch added successfully",color:"green"})})).catch((function(t){console.log(t),a.$q.notify({message:"Failed to add batch",color:"red"})}))}},data:function(){return{rfid:"",drugname:"",dosage:"",amount:"",organization:"",manufacture_date:"",exprie_date:""}}},s=o,d=e("2877"),l=e("fe09"),c=Object(d["a"])(s,n,i,!1,null,null,null);t["default"]=c.exports;c.options.components=Object.assign({QPage:l["o"],QInput:l["i"],QDate:l["e"],QBtn:l["b"]},c.options.components||{})}}]);