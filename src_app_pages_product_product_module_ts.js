"use strict";
(self["webpackChunke_commerce"] = self["webpackChunke_commerce"] || []).push([["src_app_pages_product_product_module_ts"],{

/***/ 5463:
/*!****************************************************************************!*\
  !*** ./src/app/pages/product/product-details/product-details.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsComponent: () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ProductDetailsComponent {}
_class = ProductDetailsComponent;
_class.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-product-details"]],
  decls: 2,
  vars: 0,
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-details works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1768:
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ProductListComponent {}
_class = ProductListComponent;
_class.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-product-list"]],
  decls: 2,
  vars: 0,
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-list works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 897:
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductRoutingModule: () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list/product-list.component */ 1768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: 'list',
  component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent
}, {
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}];
class ProductRoutingModule {}
_class = ProductRoutingModule;
_class.ɵfac = function ProductRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 486:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModule: () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 897);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ 1768);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ 5463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class ProductModule {}
_class = ProductModule;
_class.ɵfac = function ProductModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_product_module_ts.js.map