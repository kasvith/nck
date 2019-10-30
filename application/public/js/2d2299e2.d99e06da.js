(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["2d2299e2"],{

/***/ "dde1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ViewBatch.vue?vue&type=template&id=0d651666&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex flex-center"},[_c('div',{staticClass:"q-gutter-md",staticStyle:{"width":"700px","padding":"10px"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('q-input',{attrs:{"outlined":"","label":"BatchID"},model:{value:(_vm.batchID),callback:function ($$v) {_vm.batchID=$$v},expression:"batchID"}})],1),_c('div',{staticClass:"col-3"},[_c('q-btn',{attrs:{"color":"primary","icon":"search","label":"Search"},on:{"click":_vm.search}})],1)]),_c('div',{staticClass:"q-px-lg q-pb-md"},[_c('q-timeline',{attrs:{"color":"secondary"}},[(_vm.transactions !== null && _vm.transactions.length > 0)?_c('q-timeline-entry',{attrs:{"heading":""}},[_vm._v("\n          Product History\n        ")]):_vm._e(),_c('div',_vm._l((_vm.transactions),function(transaction,i){return _c('q-timeline-entry',{key:transaction.TxId,attrs:{"title":transaction.Value.organization,"subtitle":_vm.getTitle(i)}},[_c('div',[_vm._v("\n              TXID: "+_vm._s(transaction.TxId)+"\n            ")]),_c('div',[_vm._v("\n              MinTemp: "+_vm._s(transaction.Value.minTemp)+"\n            ")]),_c('div',[_vm._v("\n              MaxTemp: "+_vm._s(transaction.Value.maxTemp)+"\n            ")])])}),1)],1)],1),(_vm.transactions !== null && _vm.transactions.length > 0)?_c('div',{staticStyle:{"padding":"15px"}},[_c('div',{staticClass:"items-start q-gutter-md",staticStyle:{"padding":"5px"}},[_c('q-card',{staticClass:"my-card"},[_c('q-card-section',[_c('div',{staticClass:"text-h6"},[_vm._v("\n              Product Details\n            ")])]),_c('q-card-section',[_c('q-list',[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',{attrs:{"overline":""}},[_vm._v("Drug Name")]),_c('q-item-label',[_vm._v(_vm._s(_vm.transactions[0].Value.drugName))])],1)],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',{attrs:{"overline":""}},[_vm._v("Amount")]),_c('q-item-label',[_vm._v(_vm._s(_vm.transactions[0].Value.amount))])],1)],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',{attrs:{"overline":""}},[_vm._v("Date Manufactured")]),_c('q-item-label',[_vm._v(_vm._s(_vm.transactions[0].Value.dateManufactured))])],1)],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',{attrs:{"overline":""}},[_vm._v("Date Expired")]),_c('q-item-label',[_vm._v(_vm._s(_vm.transactions[0].Value.dateExpired))])],1)],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',{attrs:{"overline":""}},[_vm._v("Min Temperature")]),_c('q-item-label',[_vm._v(_vm._s(_vm.transactions[0].Value.minTemp))])],1)],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',{attrs:{"overline":""}},[_vm._v("Max Temperature")]),_c('q-item-label',[_vm._v(_vm._s(_vm.transactions[0].Value.maxTemp))])],1)],1)],1)],1)],1)],1)]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/ViewBatch.vue?vue&type=template&id=0d651666&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ViewBatch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ViewBatchvue_type_script_lang_js_ = ({
  name: 'ViewBatch',
  methods: {
    getTitle: function getTitle(idx) {
      return this.prefixes[idx];
    },
    search: function search() {
      var _this = this;

      this.$axios.get("/api/find?batchId=".concat(this.batchID)).then(function (resp) {
        console.log(resp);
        _this.transactions = JSON.parse(resp.data);

        if (_this.transactions.length === 0) {
          _this.$q.notify({
            message: "Failed to find ".concat(_this.batchID),
            color: 'red'
          });
        }
      }).catch(function (err) {
        console.log(err.response);

        _this.$q.notify({
          message: "Failed to find ".concat(_this.batchID),
          color: 'red'
        });

        _this.transactions = [];
      });
    }
  },
  data: function data() {
    return {
      batchID: '',
      prefixes: ['Manufactured by', 'Supplied by', 'Stored at', 'Pharmacy'],
      transactions: []
    };
  }
});
// CONCATENATED MODULE: ./src/pages/ViewBatch.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ViewBatchvue_type_script_lang_js_ = (ViewBatchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/index.esm.js + 253 modules
var index_esm = __webpack_require__("fe09");

// CONCATENATED MODULE: ./src/pages/ViewBatch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ViewBatchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ViewBatch = __webpack_exports__["default"] = (component.exports);

component.options.components = Object.assign({QPage: index_esm["o" /* QPage */],QInput: index_esm["i" /* QInput */],QBtn: index_esm["b" /* QBtn */],QTimeline: index_esm["s" /* QTimeline */],QTimelineEntry: index_esm["t" /* QTimelineEntry */],QCard: index_esm["c" /* QCard */],QCardSection: index_esm["d" /* QCardSection */],QList: index_esm["n" /* QList */],QItem: index_esm["j" /* QItem */],QItemSection: index_esm["l" /* QItemSection */],QItemLabel: index_esm["k" /* QItemLabel */]}, component.options.components || {})
component.options.directives = Object.assign({Ripple: index_esm["w" /* Ripple */]}, component.options.directives || {})


/***/ })

}]);
//# sourceMappingURL=2d2299e2.d99e06da.js.map