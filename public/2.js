(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
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
  name: "AddBlocksFloorsUnits",
  data: function data() {
    return {
      details: {
        project_id: '',
        name: '',
        floor_number: '',
        units: ''
      },
      show_create: true,
      show_results: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['projects', 'detailsh'])),
  methods: {
    postDetails: function postDetails(details) {
      this.$store.dispatch('createProjectDetails', details);
      this.show_create = false;
      this.show_results = true;
    }
  },
  created: function created() {
    this.$store.dispatch('fetchProjects');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "w-75 mx-auto" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.show_create
        ? _c("div", [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.postDetails(_vm.details)
                  }
                }
              },
              [
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass: "block text-gray-700 text-sm font-bold mb-2",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Project Name")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.details.project_id,
                          expression: "details.project_id"
                        }
                      ],
                      staticClass:
                        "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                      attrs: { id: "name" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.details,
                            "project_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.projects, function(project) {
                      return _c("option", { domProps: { value: project.id } }, [
                        _vm._v(_vm._s(project.name))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass: "block text-gray-700 text-sm font-bold mb-2",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Block Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.details.name,
                        expression: "details.name"
                      }
                    ],
                    staticClass:
                      "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                    attrs: { type: "text", id: "block" },
                    domProps: { value: _vm.details.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.details, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass: "block text-gray-700 text-sm font-bold mb-2",
                      attrs: { for: "floors" }
                    },
                    [
                      _vm._v(
                        "Number of Floors in\n                        Block"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.details.floor_number,
                        expression: "details.floor_number"
                      }
                    ],
                    staticClass:
                      "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                    attrs: { type: "number", id: "floors" },
                    domProps: { value: _vm.details.floor_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.details,
                          "floor_number",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass: "block text-gray-700 text-sm font-bold mb-2",
                      attrs: { for: "unit" }
                    },
                    [_vm._v("No of Units Per\n                        Floor:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.details.units,
                        expression: "details.units"
                      }
                    ],
                    staticClass:
                      "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                    attrs: { type: "number", id: "unit" },
                    domProps: { value: _vm.details.units },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.details, "units", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("\n                    Save\n                ")]
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.show_results
        ? _c("div", [
            _vm._v("\n            " + _vm._s(_vm.detailsh) + "\n        ")
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "font-bold h1 text-center" }, [
      _c("p", [_vm._v("Add details to the project")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Project/AddBlocksFloorsUnits.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Project/AddBlocksFloorsUnits.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBlocksFloorsUnits_vue_vue_type_template_id_8d8becfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true& */ "./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true&");
/* harmony import */ var _AddBlocksFloorsUnits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBlocksFloorsUnits.vue?vue&type=script&lang=js& */ "./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBlocksFloorsUnits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBlocksFloorsUnits_vue_vue_type_template_id_8d8becfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBlocksFloorsUnits_vue_vue_type_template_id_8d8becfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8d8becfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Project/AddBlocksFloorsUnits.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBlocksFloorsUnits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBlocksFloorsUnits.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBlocksFloorsUnits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBlocksFloorsUnits_vue_vue_type_template_id_8d8becfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/AddBlocksFloorsUnits.vue?vue&type=template&id=8d8becfc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBlocksFloorsUnits_vue_vue_type_template_id_8d8becfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBlocksFloorsUnits_vue_vue_type_template_id_8d8becfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);