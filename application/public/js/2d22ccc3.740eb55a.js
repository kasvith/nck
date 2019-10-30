(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["2d22ccc3"],{

/***/ "f586":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/AddBatch.vue?vue&type=template&id=6154cc1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex flex-center"},[_c('div',{staticClass:"q-gutter-md",staticStyle:{"width":"700px","padding":"10px"}},[_c('q-input',{attrs:{"outlined":"","label":"RFID"},model:{value:(_vm.rfid),callback:function ($$v) {_vm.rfid=$$v},expression:"rfid"}}),_c('q-input',{attrs:{"outlined":"","label":"Drug Name"},model:{value:(_vm.drugname),callback:function ($$v) {_vm.drugname=$$v},expression:"drugname"}}),_c('q-input',{attrs:{"outlined":"","label":"Dosage"},model:{value:(_vm.dosage),callback:function ($$v) {_vm.dosage=$$v},expression:"dosage"}}),_c('q-input',{attrs:{"outlined":"","label":"Amount"},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}}),_c('q-input',{attrs:{"outlined":"","label":"Organization"},model:{value:(_vm.organization),callback:function ($$v) {_vm.organization=$$v},expression:"organization"}}),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('p',[_vm._v("Manufactured Date:")]),_c('q-date',{attrs:{"today-btn":""},model:{value:(_vm.manufacture_date),callback:function ($$v) {_vm.manufacture_date=$$v},expression:"manufacture_date"}})],1),_c('div',{staticClass:"col"},[_c('p',[_vm._v("Expire Date:")]),_c('q-date',{attrs:{"today-btn":""},model:{value:(_vm.exprie_date),callback:function ($$v) {_vm.exprie_date=$$v},expression:"exprie_date"}})],1)]),_c('q-btn',{attrs:{"color":"primary","icon":"done_outline","label":"Add Batch"},on:{"click":_vm.addBatch}}),_c('q-btn',{attrs:{"color":"red","icon":"mail","label":"Clear"},on:{"click":_vm.clear}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/AddBatch.vue?vue&type=template&id=6154cc1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/AddBatch.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AddBatchvue_type_script_lang_js_ = ({
  name: 'AddBatch',
  methods: {
    clear: function clear() {
      this.rfid = '';
      this.drugname = '';
      this.dosage = '';
      this.amount = '';
      this.organization = '';
      this.manufacture_date = '';
      this.exprie_date = '';
    },
    addBatch: function addBatch() {
      var _this = this;

      this.$axios.post("/api/addbatch", {
        rfid: this.rfid,
        drugname: this.drugname,
        dosage: this.dosage,
        amount: this.amount,
        organization: this.organization,
        manufacture_date: this.manufacture_date,
        exprie_date: this.exprie_date
      }).then(function (resp) {
        console.log(resp);

        _this.$q.notify({
          message: 'Batch added successfully',
          color: 'green'
        });
      }).catch(function (err) {
        console.log(err);

        _this.$q.notify({
          message: 'Failed to add batch',
          color: 'red'
        });
      });
    }
  },
  data: function data() {
    return {
      rfid: '',
      drugname: '',
      dosage: '',
      amount: '',
      organization: '',
      manufacture_date: '',
      exprie_date: ''
    };
  }
});
// CONCATENATED MODULE: ./src/pages/AddBatch.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_AddBatchvue_type_script_lang_js_ = (AddBatchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/index.esm.js + 253 modules
var index_esm = __webpack_require__("fe09");

// CONCATENATED MODULE: ./src/pages/AddBatch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_AddBatchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddBatch = __webpack_exports__["default"] = (component.exports);

component.options.components = Object.assign({QPage: index_esm["o" /* QPage */],QInput: index_esm["i" /* QInput */],QDate: index_esm["e" /* QDate */],QBtn: index_esm["b" /* QBtn */]}, component.options.components || {})


/***/ })

}]);
//# sourceMappingURL=2d22ccc3.740eb55a.js.map