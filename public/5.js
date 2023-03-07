(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/ManageProject.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/ManageProject.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ManageProject",
  components: {
    DeleteProject: function DeleteProject() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./ManageProject/DeleteProject */ "./resources/js/components/Project/ManageProject/DeleteProject.vue"));
    },
    EditProject: function EditProject() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./ManageProject/EditProject */ "./resources/js/components/Project/ManageProject/EditProject.vue"));
    }
  },
  data: function data() {
    return {
      selectedComponent: 'DeleteProject'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/ManageProject.vue?vue&type=template&id=772ad903&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/ManageProject.vue?vue&type=template&id=772ad903&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "flex mt-5" }, [
        _c("div", { staticClass: "flex-1" }, [
          _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.selectedComponent = "DeleteProject"
                }
              }
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
                  attrs: { type: "button" }
                },
                [
                  _vm._v(
                    "\n                        Delete Project\n                    "
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-1" }, [
          _c(
            "div",
            {
              staticClass: "helper",
              on: {
                click: function($event) {
                  _vm.selectedComponent = "EditProject"
                }
              }
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
                  attrs: { type: "button" }
                },
                [
                  _vm._v(
                    "\n                        Edit Project\n                    "
                  )
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          { staticClass: "mt-4" },
          [_c(_vm.selectedComponent, { tag: "component" })],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "font-bold mb-4 h1" }, [
      _c("p", [_vm._v("Alter the project")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Project/ManageProject.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Project/ManageProject.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageProject_vue_vue_type_template_id_772ad903_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageProject.vue?vue&type=template&id=772ad903&scoped=true& */ "./resources/js/components/Project/ManageProject.vue?vue&type=template&id=772ad903&scoped=true&");
/* harmony import */ var _ManageProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageProject.vue?vue&type=script&lang=js& */ "./resources/js/components/Project/ManageProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageProject_vue_vue_type_template_id_772ad903_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageProject_vue_vue_type_template_id_772ad903_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "772ad903",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Project/ManageProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Project/ManageProject.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Project/ManageProject.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/ManageProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Project/ManageProject.vue?vue&type=template&id=772ad903&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Project/ManageProject.vue?vue&type=template&id=772ad903&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProject_vue_vue_type_template_id_772ad903_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageProject.vue?vue&type=template&id=772ad903&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/ManageProject.vue?vue&type=template&id=772ad903&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProject_vue_vue_type_template_id_772ad903_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProject_vue_vue_type_template_id_772ad903_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);