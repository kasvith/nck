(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0047":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.sass
var css_app = __webpack_require__("0047");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 6 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {
    "notify": {}
  },
  plugins: {
    Notify: Notify["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=50216142&
var Appvue_type_template_id_50216142_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=50216142&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_50216142_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/index.js

 // import example from './module-example'

vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  var Store = new vuex_esm["a" /* default */].Store({
    modules: {// example
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  });
  return Store;
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js
var routes = [{
  path: '/',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("bb8293fa"), __webpack_require__.e("2d22c0ff")]).then(__webpack_require__.bind(null, "f241"));
  },
  children: [{
    path: '/',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("bb8293fa"), __webpack_require__.e("f73ee9c4")]).then(__webpack_require__.bind(null, "8b24"));
    }
  }, {
    path: 'addbatch',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("bb8293fa"), __webpack_require__.e("2d22ccc3")]).then(__webpack_require__.bind(null, "f586"));
    }
  }, {
    path: 'viewbatch',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("bb8293fa"), __webpack_require__.e("2d2299e2")]).then(__webpack_require__.bind(null, "dde1"));
    }
  }]
}]; // Always leave this as last one

if (true) {
  routes.push({
    path: '*',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("bb8293fa"), __webpack_require__.e("7089f5c5")]).then(__webpack_require__.bind(null, "e51e"));
    }
  });
}

/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

/* harmony default export */ var src_router = (function ()
/* { store, ssrContext } */
{
  var Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: function scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (function () {
  // create store and router instances
  var store = typeof src_store === 'function' ? src_store({
    Vue: vue_runtime_esm["a" /* default */]
  }) : src_store;
  var router = typeof src_router === 'function' ? src_router({
    Vue: vue_runtime_esm["a" /* default */],
    store: store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  var app = {
    el: '#q-app',
    router: router,
    store: store,
    render: function render(h) {
      return h(App);
    }
  }; // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app: app,
    store: store,
    router: router
  };
});
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["a" /* default */].prototype.$axios = axios_default.a;
// CONCATENATED MODULE: ./.quasar/client-entry.js





/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

 // We load Quasar stylesheet file







var _createApp = _quasar_app(),
    client_entry_app = _createApp.app,
    client_entry_store = _createApp.store,
    client_entry_router = _createApp.router;

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var routeUnchanged, redirect, urlPath, bootFiles, i;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            routeUnchanged = true;

            redirect = function redirect(url) {
              routeUnchanged = false;
              window.location.href = url;
            };

            urlPath = window.location.href.replace(window.location.origin, '');
            bootFiles = [/* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined];
            i = 0;

          case 5:
            if (!(routeUnchanged === true && i < bootFiles.length)) {
              _context.next = 23;
              break;
            }

            if (!(typeof bootFiles[i] !== 'function')) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("continue", 20);

          case 8:
            _context.prev = 8;
            _context.next = 11;
            return bootFiles[i]({
              app: client_entry_app,
              router: client_entry_router,
              store: client_entry_store,
              Vue: vue_runtime_esm["a" /* default */],
              ssrContext: null,
              redirect: redirect,
              urlPath: urlPath
            });

          case 11:
            _context.next = 20;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](8);

            if (!(_context.t0 && _context.t0.url)) {
              _context.next = 18;
              break;
            }

            window.location.href = _context.t0.url;
            return _context.abrupt("return");

          case 18:
            console.error('[Quasar] boot error:', _context.t0);
            return _context.abrupt("return");

          case 20:
            i++;
            _context.next = 5;
            break;

          case 23:
            if (!(routeUnchanged === false)) {
              _context.next = 25;
              break;
            }

            return _context.abrupt("return");

          case 25:
            new vue_runtime_esm["a" /* default */](client_entry_app);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 13]]);
  }));
  return _start.apply(this, arguments);
}

start();

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=app.a74063fa.js.map