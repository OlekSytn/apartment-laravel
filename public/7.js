(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/Reservations.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/Reservations.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Reservations",
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['reservations'])),
  created: function created() {
    this.$store.dispatch('fetchAllReservations');
  },
  methods: {
    deleteReservation: function deleteReservation(reservation) {
      this.$store.dispatch('deleteReservation', reservation);
      swal("Reservation deleted");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/Reservations.vue?vue&type=template&id=7b226be8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/Reservations.vue?vue&type=template&id=7b226be8& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.reservations.length > 0
      ? _c("div", [
          _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.reservations, function(reservation) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(reservation.client_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reservation.client_email))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reservation.unit_number))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reservation.floor_number))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reservation.block))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reservation.project))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-danger btn",
                      on: {
                        click: function($event) {
                          return _vm.deleteReservation(reservation)
                        }
                      }
                    },
                    [_vm._v("Remove unit")]
                  )
                ])
              }),
              0
            )
          ])
        ])
      : _c("div", [_c("h6", [_vm._v("No booked apartment units")])])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "font-bold h1 text-center" }, [
      _c("p", [_vm._v("Current Reservations")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Client Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Client Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Unit Number")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Floor Number")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Block")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Project")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opt Out")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Project/Reservations.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Project/Reservations.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservations_vue_vue_type_template_id_7b226be8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservations.vue?vue&type=template&id=7b226be8& */ "./resources/js/components/Project/Reservations.vue?vue&type=template&id=7b226be8&");
/* harmony import */ var _Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservations.vue?vue&type=script&lang=js& */ "./resources/js/components/Project/Reservations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservations_vue_vue_type_template_id_7b226be8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservations_vue_vue_type_template_id_7b226be8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Project/Reservations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Project/Reservations.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Project/Reservations.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/Reservations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Project/Reservations.vue?vue&type=template&id=7b226be8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Project/Reservations.vue?vue&type=template&id=7b226be8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_template_id_7b226be8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservations.vue?vue&type=template&id=7b226be8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/Reservations.vue?vue&type=template&id=7b226be8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_template_id_7b226be8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_template_id_7b226be8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);