(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["2d22c0ff"],{

/***/ "f241":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MyLayout.vue?vue&type=template&id=ff6a63c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{attrs:{"view":"hHh lpR fFf"}},[_c('q-header',{staticClass:"bg-primary text-white",attrs:{"elevated":""}},[_c('q-toolbar',[_c('q-btn',{attrs:{"dense":"","flat":"","round":"","icon":"menu"},on:{"click":function($event){_vm.drawer = !_vm.drawer}}}),_c('q-toolbar-title',[_c('q-avatar',[_c('img',{attrs:{"src":"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]),_vm._v(" BlockNCK\n      ")],1)],1)],1),_c('q-drawer',{attrs:{"show-if-above":"","width":300,"breakpoint":500,"bordered":"","content-class":"bg-grey-3"},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('q-scroll-area',{staticClass:"fit"},_vm._l((_vm.menuList),function(menuItem,index){return _c('q-list',{key:index},[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":"","active":menuItem.label === 'Outbox',"to":menuItem.to}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":menuItem.icon}})],1),_c('q-item-section',[_vm._v("\n            "+_vm._s(menuItem.label)+"\n          ")])],1),(menuItem.separator)?_c('q-separator'):_vm._e()],1)}),1)],1),_c('q-page-container',[_c('router-view')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/MyLayout.vue?vue&type=template&id=ff6a63c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MyLayout.vue?vue&type=script&lang=js&
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
var menuList = [{
  icon: 'dashboard',
  label: 'Dashboard',
  separator: true,
  to: '/'
}, {
  icon: 'library_add',
  label: 'Add Batch',
  separator: false,
  to: '/addbatch'
}, {
  icon: 'assignment',
  label: 'View Batch',
  separator: true,
  to: '/viewbatch'
}, {
  icon: 'help',
  iconColor: 'primary',
  label: 'Help',
  separator: false,
  to: '/help'
}];
/* harmony default export */ var MyLayoutvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      drawer: false,
      menuList: menuList
    };
  }
});
// CONCATENATED MODULE: ./src/layouts/MyLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MyLayoutvue_type_script_lang_js_ = (MyLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/index.esm.js + 253 modules
var index_esm = __webpack_require__("fe09");

// CONCATENATED MODULE: ./src/layouts/MyLayout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_MyLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MyLayout = __webpack_exports__["default"] = (component.exports);

component.options.components = Object.assign({QLayout: index_esm["m" /* QLayout */],QHeader: index_esm["g" /* QHeader */],QToolbar: index_esm["u" /* QToolbar */],QBtn: index_esm["b" /* QBtn */],QToolbarTitle: index_esm["v" /* QToolbarTitle */],QAvatar: index_esm["a" /* QAvatar */],QDrawer: index_esm["f" /* QDrawer */],QScrollArea: index_esm["q" /* QScrollArea */],QList: index_esm["n" /* QList */],QItem: index_esm["j" /* QItem */],QItemSection: index_esm["l" /* QItemSection */],QIcon: index_esm["h" /* QIcon */],QSeparator: index_esm["r" /* QSeparator */],QPageContainer: index_esm["p" /* QPageContainer */]}, component.options.components || {})
component.options.directives = Object.assign({Ripple: index_esm["w" /* Ripple */]}, component.options.directives || {})


/***/ })

}]);
//# sourceMappingURL=2d22c0ff.b56543e7.js.map