(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2299e2"],{dde1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-gutter-md",staticStyle:{width:"700px",padding:"10px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-input",{attrs:{outlined:"",label:"BatchID"},model:{value:t.batchID,callback:function(e){t.batchID=e},expression:"batchID"}})],1),a("div",{staticClass:"col-3"},[a("q-btn",{attrs:{color:"primary",icon:"search",label:"Search"},on:{click:t.search}})],1)]),a("div",{staticClass:"q-px-lg q-pb-md"},[a("q-timeline",{attrs:{color:"secondary"}},[null!==t.transactions&&t.transactions.length>0?a("q-timeline-entry",{attrs:{heading:""}},[t._v("\n          Product History\n        ")]):t._e(),a("div",t._l(t.transactions,(function(e,i){return a("q-timeline-entry",{key:e.TxId,attrs:{title:e.Value.organization,subtitle:t.getTitle(i)}},[a("div",[t._v("\n              TXID: "+t._s(e.TxId)+"\n            ")]),a("div",[t._v("\n              MinTemp: "+t._s(e.Value.minTemp)+"\n            ")]),a("div",[t._v("\n              MaxTemp: "+t._s(e.Value.maxTemp)+"\n            ")])])})),1)],1)],1),null!==t.transactions&&t.transactions.length>0?a("div",{staticStyle:{padding:"15px"}},[a("div",{staticClass:"items-start q-gutter-md",staticStyle:{padding:"5px"}},[a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n              Product Details\n            ")])]),a("q-card-section",[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Drug Name")]),a("q-item-label",[t._v(t._s(t.transactions[0].Value.drugName))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Amount")]),a("q-item-label",[t._v(t._s(t.transactions[0].Value.amount))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Date Manufactured")]),a("q-item-label",[t._v(t._s(t.transactions[0].Value.dateManufactured))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Date Expired")]),a("q-item-label",[t._v(t._s(t.transactions[0].Value.dateExpired))])],1)],1)],1)],1)],1)],1)]):t._e()])])},n=[],s={name:"ViewBatch",methods:{getTitle:function(t){return this.prefixes[t]},search:function(){var t=this;this.$axios.get("/api/find?batchId=".concat(this.batchID)).then((function(e){console.log(e),t.transactions=JSON.parse(e.data),0===t.transactions.length&&t.$q.notify({message:"Failed to find ".concat(t.batchID),color:"red"})})).catch((function(e){console.log(e.response),t.$q.notify({message:"Failed to find ".concat(t.batchID),color:"red"}),t.transactions=[]}))}},data:function(){return{batchID:"",prefixes:["Manufactured by","Supplied by","Stored at","Pharmacy"],transactions:[]}}},c=s,l=a("2877"),r=a("fe09"),o=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=o.exports;o.options.components=Object.assign({QPage:r["o"],QInput:r["i"],QBtn:r["b"],QTimeline:r["t"],QTimelineEntry:r["u"],QCard:r["c"],QCardSection:r["d"],QList:r["n"],QItem:r["j"],QItemSection:r["l"],QItemLabel:r["k"]},o.options.components||{}),o.options.directives=Object.assign({Ripple:r["x"]},o.options.directives||{})}}]);