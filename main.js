"use strict";
(self["webpackChunke_commerce"] = self["webpackChunke_commerce"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [{
  path: '',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 9238)).then(m => m.PagesModule)
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 4788)).then(m => m.AuthModule)
}, {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _utils_script_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/script.service */ 8058);
/* harmony import */ var _utils_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/firebase.service */ 2889);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/header/header.component */ 6909);
/* harmony import */ var _common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/mobile-menu/mobile-menu.component */ 5015);
/* harmony import */ var _common_header_banner_header_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/header-banner/header-banner.component */ 6022);
var _class;







class AppComponent {
  constructor(scriptLoad, firebase) {
    this.scriptLoad = scriptLoad;
    this.firebase = firebase;
    this.scriptLoad.loadScript();
    this.firebase.initFirebase();
  }
  ngOnInit() {}
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_script_service__WEBPACK_IMPORTED_MODULE_0__.ScriptService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_firebase_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 7,
  vars: 0,
  consts: [[1, "page-wrapper"], ["id", "scroll-top", "href", "#top", "title", "Top", "role", "button"], [1, "icon-angle-up"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header-banner")(2, "app-header")(3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-mobile-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__.MobileMenuComponent, _common_header_banner_header_banner_component__WEBPACK_IMPORTED_MODULE_4__.HeaderBannerComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 9238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule]
  });
})();

/***/ }),

/***/ 6022:
/*!*****************************************************************!*\
  !*** ./src/app/common/header-banner/header-banner.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBannerComponent: () => (/* binding */ HeaderBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HeaderBannerComponent {}
_class = HeaderBannerComponent;
_class.ɵfac = function HeaderBannerComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header-banner"]],
  decls: 13,
  vars: 0,
  consts: [[1, "top-notice", "font2"], [1, "container-fluid", "text-center", "text-dark"], [1, "icon-shipping", "align-middle"], [1, "text-uppercase"], ["href", "demo23.html", 1, "text-dark"], ["title", "Close (Esc)", "type", "button", 1, "mfp-close"]],
  template: function HeaderBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Free Shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0on orders of $80 or more! Code:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PortoMagic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0| Restrictions Apply.\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "See All Offers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6909:
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ 2421);
var _class;



class HeaderComponent {}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 133,
  vars: 0,
  consts: [[1, "header"], ["data-sticky-options", "{'mobile': true}", 1, "header-middle", "sticky-header"], [1, "container-fluid"], [1, "header-center", "ml-0", "ml-lg-auto"], ["type", "button", 1, "mobile-menu-toggler"], [1, "fas", "fa-bars"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/brands/logo_main.png", "alt", "HarSiddhi", "width", "113", "height", "48"], [1, "header-right"], [1, "header-icon", "d-lg-block", "d-none"], [1, "header-user"], [1, "icon-user-2"], [1, "header-userinfo"], [1, "d-inline-block", "font2", "line-height-1"], [1, "mb-0"], ["href", "wishlist.html", 1, "header-icon"], [1, "icon-wishlist-2"], [1, "dropdown", "cart-dropdown"], ["href", "#", "title", "Cart", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "data-display", "static", 1, "dropdown-toggle", "cart-toggle"], [1, "minicart-icon"], [1, "cart-count", "badge-circle"], [1, "cart-overlay"], [1, "dropdown-menu", "mobile-cart"], ["href", "#", "title", "Close (Esc)", 1, "btn-close"], [1, "dropdownmenu-wrapper", "custom-scrollbar"], [1, "dropdown-cart-header"], [1, "dropdown-cart-products"], [1, "product"], [1, "product-details"], [1, "product-title"], ["href", "demo23-product.html"], [1, "cart-product-info"], [1, "cart-product-qty"], [1, "product-image-container"], ["href", "demo23-product.html", 1, "product-image"], ["src", "assets/images/products/product-1.jpg", "alt", "product", "width", "80", "height", "80"], ["href", "#", "title", "Remove Product", 1, "btn-remove"], ["src", "assets/images/products/product-2.jpg", "alt", "product", "width", "80", "height", "80"], ["src", "assets/images/products/product-3.jpg", "alt", "product", "width", "80", "height", "80"], [1, "dropdown-cart-total"], [1, "cart-total-price", "float-right"], [1, "dropdown-cart-action"], ["href", "cart.html", 1, "btn", "btn-gray", "btn-block", "view-cart"], ["href", "checkout.html", 1, "btn", "btn-dark", "btn-block"], [1, "header-search", "header-search-popup", "header-search-category", "text-right", "d-flex", "d-lg-none"], ["href", "#", "role", "button", 1, "search-toggle"], [1, "icon-magnifier"], ["action", "#", "method", "get"], [1, "header-search-wrapper"], ["type", "search", "name", "q", "id", "q", "placeholder", "I'm searching for...", "required", "", 1, "form-control"], [1, "select-custom"], ["id", "cat", "name", "cat"], ["value", ""], ["value", "4"], ["value", "12"], ["value", "13"], ["value", "66"], ["value", "67"], ["value", "5"], ["value", "21"], ["value", "22"], ["value", "63"], ["value", "7"], ["value", "11"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "57"], ["title", "search", "type", "submit", 1, "btn", "icon-magnifier", "p-0"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "a", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12)(13, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Hello!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "My Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17)(20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 22)(26, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 24)(29, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Shopping Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 26)(32, "div", 27)(33, "div", 28)(34, "h4", 29)(35, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Ultimate 3D Bluetooth Speaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 31)(38, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " \u00D7 $99.00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "figure", 33)(42, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 36)(45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 27)(48, "div", 28)(49, "h4", 29)(50, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Brown Women Casual HandBag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 31)(53, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " \u00D7 $35.00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "figure", 33)(57, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 36)(60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27)(63, "div", 28)(64, "h4", 29)(65, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Circled Ultimate 3D Speaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 31)(68, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " \u00D7 $35.00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "figure", 33)(72, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 36)(75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39)(78, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "SUBTOTAL:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "$134.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 41)(83, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "View Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Checkout");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 44)(88, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "form", 47)(93, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 50)(96, "select", 51)(97, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "All Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "option", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "- Women");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "- Men");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "- Jewellery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "- Kids Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "- Smart TVs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "option", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "- Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "option", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "- Games");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "option", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Home & Garden");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Motors");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "- Cars and Trucks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "- Motorcycles & Powersports");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "- Parts & Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "option", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "- Boats");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "option", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "- Auto Tools & Supplies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2421:
/*!***********************************************!*\
  !*** ./src/app/common/menu/menu.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class MenuComponent {}
_class = MenuComponent;
_class.ɵfac = function MenuComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-menu"]],
  decls: 202,
  vars: 0,
  consts: [["data-sticky-options", "{'mobile': false}", 1, "header-bottom", "sticky-header"], [1, "container-fluid"], [1, "header-center", "w-auto"], [1, "main-nav"], [1, "menu"], [1, "active"], ["href", "#", 1, "nolink"], [1, "megamenu", "megamenu-fixed-width", "megamenu-3cols"], [1, "row"], [1, "col-lg-4"], [1, "submenu"], ["href", "category.html"], ["href", "category-banner-boxed-slider.html"], ["href", "category-banner-boxed-image.html"], ["href", "category-sidebar-right.html"], ["href", "category-off-canvas.html"], ["href", "category-horizontal-filter1.html"], ["href", "category-horizontal-filter2.html"], ["href", "category-list.html"], ["href", "category-infinite-scroll.html"], ["href", "category-4col.html"], ["href", "category-5col.html"], ["href", "category-6col.html"], ["href", "category-7col.html"], ["href", "category-8col.html"], [1, "col-lg-4", "p-0"], [1, "menu-banner"], ["src", "assets/images/menu-banner.jpg", "alt", "Menu banner", "width", "300", "height", "300"], [1, "banner-content"], [1, ""], ["href", "category.html", 1, "btn", "btn-sm", "btn-dark"], [1, "megamenu", "megamenu-fixed-width"], ["href", "demo23-product.html"], ["href", "product-variable.html"], ["href", "product-custom-tab.html"], ["href", "product-sidebar-left.html"], ["href", "product-sidebar-right.html"], ["href", "product-addcart-sticky.html"], ["href", "product-extended-layout.html"], ["href", "product-grid-layout.html"], ["href", "product-full-width.html"], ["href", "product-sticky-info.html"], ["href", "product-sticky-both.html"], ["href", "product-transparent-image.html"], ["href", "product-center-vertical.html"], ["href", "#"], [1, "menu-banner", "menu-banner-2"], ["src", "assets/images/menu-banner-1.jpg", "alt", "Menu banner", "width", "380", "height", "790", 1, "product-promo"], ["href", "#", 1, "btn", "btn-sm", "btn-dark", "nolink"], [1, "header-right", "d-flex", "pr-0"], [1, "header-search", "header-search-popup", "header-search-category", "text-right"], ["action", "#", "method", "get"], [1, "header-search-wrapper"], ["type", "search", "name", "q", "id", "q1", "placeholder", "I'm searching for...", "required", "", 1, "form-control"], [1, "select-custom"], ["id", "cat1", "name", "cat"], ["value", ""], ["value", "4"], ["value", "12"], ["value", "13"], ["value", "66"], ["value", "67"], ["value", "5"], ["value", "21"], ["value", "22"], ["value", "63"], ["value", "7"], ["value", "11"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "57"], ["title", "search", "type", "submit", 1, "btn", "icon-magnifier", "p-0"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "VARIATION 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10)(17, "li")(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fullwidth Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Boxed Slider Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Boxed Image Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Left Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Off Canvas Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Horizontal Filter1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Horizontal Filter2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9)(42, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "VARIATION 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 10)(45, "li")(46, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "List Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li")(49, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ajax Infinite Scroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li")(52, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li")(58, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "5 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li")(61, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "6 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li")(64, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "7 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25)(70, "div", 26)(71, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28)(74, "h4")(75, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "UP TO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "50%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "OFF");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "SHOP NOW");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li")(85, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31)(88, "div", 8)(89, "div", 9)(90, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "PRODUCT PAGES");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul", 10)(93, "li")(94, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "SIMPLE PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li")(97, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "VARIABLE PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li")(100, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "SALE PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li")(103, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "FEATURED & ON SALE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li")(106, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "WITH CUSTOM TAB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li")(109, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "WITH LEFT SIDEBAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li")(112, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "WITH RIGHT SIDEBAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li")(115, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ADD CART STICKY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9)(118, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "PRODUCT LAYOUTS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 10)(121, "li")(122, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "EXTENDED LAYOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li")(125, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "GRID IMAGE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li")(128, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "FULL WIDTH LAYOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li")(131, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "STICKY INFO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li")(134, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "LEFT & RIGHT STICKY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li")(137, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "TRANSPARENT IMAGE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li")(140, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "CENTER VERTICAL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li")(143, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "BUILD YOUR OWN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 25)(146, "div", 46)(147, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "OFF");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 28)(152, "h4")(153, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "UP TO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "50%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "SHOP NOW");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 49)(161, "div", 50)(162, "form", 51)(163, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 54)(166, "select", 55)(167, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "All Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "- Women");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "- Men");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "- Jewellery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "- Kids Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "- Smart TVs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "- Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "- Games");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Home & Garden");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Motors");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "- Cars and Trucks");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "- Motorcycles & Powersports");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "- Parts & Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "- Boats");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "- Auto Tools & Supplies");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "button", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5015:
/*!*************************************************************!*\
  !*** ./src/app/common/mobile-menu/mobile-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileMenuComponent: () => (/* binding */ MobileMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class MobileMenuComponent {}
_class = MobileMenuComponent;
_class.ɵfac = function MobileMenuComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mobile-menu"]],
  decls: 130,
  vars: 0,
  consts: [[1, "mobile-menu-overlay"], [1, "mobile-menu-container"], [1, "mobile-menu-wrapper"], [1, "mobile-menu-close"], [1, "fa", "fa-times"], [1, "mobile-nav"], [1, "mobile-menu"], ["href", "demo23.html"], ["href", "demo23-shop.html"], ["href", "category.html"], ["href", "category-banner-boxed-slider.html"], ["href", "category-banner-boxed-image.html"], ["href", "https://www.portotheme.com/html/porto_ecommerce/category-sidebar-left.html"], ["href", "category-sidebar-right.html"], ["href", "category-off-canvas.html"], ["href", "category-horizontal-filter1.html"], ["href", "category-horizontal-filter2.html"], ["href", "#"], ["href", "category-infinite-scroll.html"], [1, "tip", "tip-new"], ["href", "category-4col.html"], ["href", "category-5col.html"], ["href", "category-6col.html"], ["href", "category-7col.html"], ["href", "category-8col.html"], [1, "tip", "tip-hot"], ["href", "#", 1, "nolink"], ["href", "demo23-product.html"], ["href", "product-variable.html"], ["href", "product-sticky-info.html"], ["href", "product-sidebar-left.html"], ["href", "product-sidebar-right.html"], ["href", "product-addcart-sticky.html"], ["href", "product-extended-layout.html"], ["href", "product-grid-layout.html"], ["href", "product-full-width.html"], ["href", "product-sticky-both.html"], ["href", "product-transparent-image.html"], ["href", "product-center-vertical.html"], [1, "social-icons"], ["href", "#", "target", "_blank", 1, "social-icon", "social-facebook", "icon-facebook"], ["href", "#", "target", "_blank", 1, "social-icon", "social-twitter", "icon-twitter"], ["href", "#", "target", "_blank", 1, "social-icon", "social-instagram", "icon-instagram"]],
  template: function MobileMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul")(14, "li")(15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full Width Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Boxed Slider Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Boxed Image Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Left Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Off Canvas Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Horizontal Filter 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Horizontal Filter 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "List Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ajax Infinite Scroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "3 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "4 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "5 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "6 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "7 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "8 Columns Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Hot!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul")(70, "li")(71, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "PRODUCT PAGES");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul")(74, "li")(75, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "SIMPLE PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li")(78, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "VARIABLE PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li")(81, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "SALE PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li")(84, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "FEATURED & ON SALE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li")(87, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "WIDTH CUSTOM TAB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "WITH LEFT SIDEBAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li")(93, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "WITH RIGHT SIDEBAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li")(96, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "ADD CART STICKY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li")(99, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "PRODUCT LAYOUTS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul")(102, "li")(103, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "EXTENDED LAYOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li")(106, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "GRID IMAGE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li")(109, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "FULL WIDTH LAYOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li")(112, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "STICKY INFO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li")(115, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "LEFT & RIGHT STICKY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li")(118, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "TRANSPARENT IMAGE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li")(121, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "CENTER VERTICAL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li")(124, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "BUILD YOUR OWN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "a", 40)(128, "a", 41)(129, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1938:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class DashboardComponent {}
_class = DashboardComponent;
_class.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dashboard"]],
  decls: 412,
  vars: 0,
  consts: [[1, "main"], [1, "intro-section", "mb-3"], ["data-owl-options", "{\n                        'nav': false,\n                        'responsive': {\n                            '1440': {\n                                'nav': true\n                            }\n                        }\n                    }", 1, "home-slider", "slide-animate", "owl-carousel", "owl-theme"], [1, "home-slide", "home-slide-1", "banner"], ["src", "assets/images/demoes/demo23/slider/slide-1.jpg", "alt", "slider image", "width", "1200", "height", "575", 1, "slide-bg"], [1, "banner-layer", "banner-layer-middle", "banner-layer-left"], [1, "container-fluid"], ["data-animation-name", "fadeInLeftShorter", "data-animation-delay", "200", 1, "appear-animate"], [1, "font-weight-light", "ls-10", "text-primary"], ["href", "demo23-shop.html", 1, "btn", "btn-link"], [1, "icon-right-open-big"], [1, "home-slide", "home-slide-2", "banner"], ["src", "assets/images/demoes/demo23/slider/slide-2.jpg", "alt", "slider image", "width", "1200", "height", "575", 1, "slide-bg"], [1, "banner-layer", "banner-layer-middle", "banner-layer-right", "w-100"], ["data-animation-name", "fadeInRightShorter", "data-animation-delay", "200", 1, "col-6", "offset-6", "appear-animate"], [1, "welcome-section"], [1, "container"], ["data-animation-name", "fadeInUpShorter", "data-animation-delay", "200", 1, "section-title", "text-center", "text-uppercase", "appear-animate"], ["data-animation-name", "fadeInUpShorter", "data-animation-delay", "400", 1, "section-description", "text-center", "mb-3", "appear-animate"], [1, "row", "mb-2"], [1, "col-md-8", "col-lg-6"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "banner", "banner1", "mb-2", "appear-animate", 2, "background-color", "#d8d8d8"], ["src", "assets/images/demoes/demo23/banners/banner-1.jpg", "alt", "banner", "width", "580", "height", "374"], [1, "banner-layer", "d-flex", "flex-column", "align-items-end", "justify-content-center"], [1, "text-justify"], [1, "font4", "font-weight-bold", "ls-n-25", "text-uppercase", "mb-0"], [1, "ls-n-25", "text-uppercase"], [1, "col-md-4", "col-lg-3"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "banner", "banner2", "mb-2", "appear-animate", 2, "background-color", "#f0f5f8"], ["src", "assets/images/demoes/demo23/banners/banner-2.jpg", "alt", "banner", "width", "280", "height", "374"], [1, "banner-layer", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "col-md-6", "col-lg-3"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "banner", "banner3", "mb-2", "appear-animate", 2, "background-color", "#ededed"], ["src", "assets/images/demoes/demo23/banners/banner-3.jpg", "alt", "banner", "width", "280", "height", "374"], [1, "banner-layer", "d-flex", "flex-column", "align-items-center", "justify-content-between"], [1, "font-weight-bold", "ls-n-25", "text-center", "text-uppercase"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "banner", "banner4", "mb-2", "appear-animate", 2, "background-color", "#f5f6f8"], ["src", "assets/images/demoes/demo23/banners/banner-4.jpg", "alt", "banner", "width", "560", "height", "374"], [1, "banner-layer", "d-flex", "flex-column", "align-items-center"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "banner", "banner5", "mb-2", "appear-animate", 2, "background-color", "#f5ecef"], ["src", "assets/images/demoes/demo23/banners/banner-5.jpg", "alt", "banner", "width", "280", "height", "374"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "banner", "banner6", "mb-2", "appear-animate", 2, "background-color", "#e2e2e2"], ["src", "assets/images/demoes/demo23/banners/banner-6.jpg", "alt", "banner", "width", "280", "height", "374"], ["data-animation-name", "fadeInUpShorter", "data-animation-delay", "200", 1, "info-boxes-container", "appear-animate"], [1, "row", "m-0"], [1, "info-box", "info-box-icon-left", "col-md-4"], [1, "icon-shipping"], [1, "info-box-content"], [1, "ls-n-25"], [1, "font2", "font-weight-light"], [1, "icon-money"], [1, "icon-support"], ["data-animation-name", "fadeInUpShorter", "data-animation-delay", "400", 1, "row", "appear-animate"], [1, "col-6", "col-md-4", "col-xl-3"], [1, "product-default", "inner-quickview", "inner-icon"], ["href", "demo23-product.html"], ["src", "assets/images/demoes/demo23/products/product-1.jpg", "width", "217", "height", "217", "alt", "product"], ["src", "assets/images/demoes/demo23/products/product-7.jpg", "width", "217", "height", "217", "alt", "product"], [1, "label-group"], [1, "product-label", "label-hot"], [1, "btn-icon-group"], ["href", "demo23-product.html", 1, "btn-icon", "btn-add-cart"], [1, "fa", "fa-arrow-right"], ["href", "ajax/product-quick-view.html", "title", "Quick View", 1, "btn-quickview"], [1, "product-details"], [1, "category-wrap"], [1, "category-list"], ["href", "demo23-shop.html", 1, "product-category"], ["href", "wishlist.html", "title", "Add to Wishlist", 1, "btn-icon-wish"], [1, "icon-heart"], [1, "product-title"], [1, "ratings-container"], [1, "product-ratings"], [1, "ratings", 2, "width", "80%"], [1, "tooltiptext", "tooltip-top"], [1, "price-box"], [1, "product-price"], ["src", "assets/images/demoes/demo23/products/product-2.jpg", "width", "217", "height", "217", "alt", "product"], [1, "ratings", 2, "width", "0%"], ["src", "assets/images/demoes/demo23/products/product-3.jpg", "width", "217", "height", "217", "alt", "product"], ["src", "assets/images/demoes/demo23/products/product-4.jpg", "width", "217", "height", "217", "alt", "product"], [1, "product-label", "label-sale"], ["href", "#", "title", "Add To Cart", 1, "btn-icon", "btn-add-cart", "product-type-simple"], [1, "icon-shopping-cart"], [1, "old-price"], [1, "cats-banner-section", "mb-3"], [1, "row", "m-0", "no-gutters"], [1, "col-lg-3"], [1, "cat-banner", "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100"], [1, "font4", "line-height-1", "ls-0", "text-primary", "mb-0"], [1, "font2", "line-height-1", "mb-0"], [1, "col-lg-9"], ["data-owl-options", "{\n                            'margin': 0,\n                            'nav': false,\n                            'items': 1,\n                            'responsive': {\n                                '576': {\n                                    'items': 2\n                                },\n                                '768': {\n                                    'items': 3\n                                },\n                                '992': {\n                                    'items': 3\n                                }\n                            }\n                        }", 1, "categories-slider", "owl-carousel", "owl-theme"], [1, "product-category", 2, "background-color", "#d8dfe1"], ["href", "demo23-shop.html"], ["src", "assets/images/demoes/demo23/products/cats/cat-1.jpg", "alt", "cat banner", "width", "500", "height", "400"], [1, "category-content"], [1, "product-category", 2, "background-color", "#ebeae9"], ["src", "assets/images/demoes/demo23/products/cats/cat-2.jpg", "alt", "cat banner", "width", "500", "height", "400"], [1, "product-category", 2, "background-color", "#ead7d5"], ["src", "assets/images/demoes/demo23/products/cats/cat-3.jpg", "alt", "cat banner", "width", "500", "height", "400"], ["data-animation-name", "fadeIn", "data-animation-delay", "200", 1, "products-container", "appear-animate"], [1, "row"], ["src", "assets/images/demoes/demo23/products/product-5.jpg", "width", "217", "height", "217", "alt", "product"], ["src", "assets/images/demoes/demo23/products/product-6.jpg", "width", "217", "height", "217", "alt", "product"], ["src", "assets/images/demoes/demo23/products/product-9.jpg", "width", "217", "height", "217", "alt", "product"], [1, "ratings", 2, "width", "100%"], [1, "brands-section"], ["data-animation-name", "fadeIn", "data-animation-delay", "400", "data-owl-options", "{\n                    'margin': 30,\n                    'responsive': {\n                        '991': {\n                            'items': 4\n                        },\n                        '1200': {\n                            'items': 5\n                        }\n                    }\n                }", 1, "brands-slider", "owl-carousel", "owl-theme", "images-center", "appear-animate"], ["src", "assets/images/demoes/demo23/brands/brand1.png", "width", "200", "height", "50", "alt", "brand"], ["src", "assets/images/demoes/demo23/brands/brand2.png", "width", "200", "height", "50", "alt", "brand"], ["src", "assets/images/demoes/demo23/brands/brand3.png", "width", "200", "height", "50", "alt", "brand"], ["src", "assets/images/demoes/demo23/brands/brand4.png", "width", "200", "height", "50", "alt", "brand"], ["src", "assets/images/demoes/demo23/brands/brand5.png", "width", "200", "height", "50", "alt", "brand"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Discover our Arrivals!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9)(11, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View our Dresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "div", 6)(18, "div", 14)(19, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Trendy Collections!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9)(22, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "View our Specials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 15)(26, "div", 16)(27, "h2", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Welcome to little Porto\u2019s world");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Enjoy the exceptional quality in all our products ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Discounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Up to 70%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9)(43, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "View our Deals");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27)(47, "div", 28)(48, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30)(51, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Summer classics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 9)(54, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "View our Classics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31)(58, "div", 32)(59, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34)(62, "h2", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Mother & Daughter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 9)(65, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View our Outfits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31)(69, "div", 36)(70, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38)(73, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Babies Outfits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 9)(76, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "View our Outfits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27)(80, "div", 39)(81, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34)(84, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Babies dresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 9)(87, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "View our Dresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20)(91, "div", 41)(92, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34)(95, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Shoes for Babies");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 9)(98, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "View our Deals");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 43)(102, "div", 44)(103, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 47)(106, "h4", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "FREE SHIPPING & RETURN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Free shipping on all orders over $99.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 47)(113, "h4", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "MONEY BACK GUARANTEE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "100% money back guarantee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 47)(120, "h4", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "ONLINE SUPPORT 24/7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Lorem ipsum dolor sit amet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 52)(125, "div", 53)(126, "div", 54)(127, "figure")(128, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 56)(130, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 58)(132, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "HOT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 60)(135, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 64)(140, "div", 65)(141, "div", 66)(142, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h3", 70)(147, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Pink Winter Girl Shoes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 71)(150, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "span", 73)(152, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 75)(154, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "$101.00 \u2013 $111.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 53)(157, "div", 54)(158, "figure")(159, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 58)(162, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "HOT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 60)(165, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 64)(170, "div", 65)(171, "div", 66)(172, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h3", 70)(177, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Porto Extended Camera");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 71)(180, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "span", 78)(182, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 75)(184, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "$599.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 53)(187, "div", 54)(188, "figure")(189, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 79)(191, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 58)(193, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "HOT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 60)(196, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 64)(201, "div", 65)(202, "div", 66)(203, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h3", 70)(208, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Blue Child Overshoes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 71)(211, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "span", 73)(213, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 75)(215, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "$39.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 53)(218, "div", 54)(219, "figure")(220, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 58)(223, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "HOT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "-13%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 60)(228, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 64)(233, "div", 65)(234, "div", 66)(235, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h3", 70)(240, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Baby Summer Underclothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 71)(243, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "span", 78)(245, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 75)(247, "span", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "$299.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "$259.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 85)(252, "div", 86)(253, "div", 87)(254, "div", 88)(255, "h4", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Best Collections");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Selected Products From Famous Brands");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 91)(260, "div", 92)(261, "div", 93)(262, "a", 94)(263, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 96)(266, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Boys");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 97)(269, "a", 94)(270, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "img", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 96)(273, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Babies");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 99)(276, "a", 94)(277, "figure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 96)(280, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Girls");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 101)(283, "div", 16)(284, "div", 102)(285, "div", 53)(286, "div", 54)(287, "figure")(288, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "img", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 58)(291, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "HOT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 60)(294, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 64)(299, "div", 65)(300, "div", 66)(301, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h3", 70)(306, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Smart Watches");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 71)(309, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "span", 73)(311, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 75)(313, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "$299.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 53)(316, "div", 54)(317, "figure")(318, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "img", 104)(320, "img", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 60)(322, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 64)(327, "div", 65)(328, "div", 66)(329, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "h3", 70)(334, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "White Girl Shoes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 71)(337, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "span", 106)(339, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 75)(341, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "$299.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 53)(344, "div", 54)(345, "figure")(346, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 60)(349, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 64)(354, "div", 65)(355, "div", 66)(356, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "h3", 70)(361, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Rag baby doll");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 71)(364, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "span", 73)(366, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 75)(368, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "$55.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 53)(371, "div", 54)(372, "figure")(373, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "img", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 58)(376, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "HOT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "-13%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 60)(381, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "i", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Quick View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 64)(386, "div", 65)(387, "div", 66)(388, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "h3", 70)(393, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Baby Summer Underclothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 71)(396, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "span", 78)(398, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 75)(400, "span", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "$299.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "$259.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 107)(405, "div", 16)(406, "div", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "img", 109)(408, "img", 110)(409, "img", 111)(410, "img", 112)(411, "img", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4701:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 1938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'product',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 486)).then(m => m.ProductModule)
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}];
class PagesRoutingModule {}
_class = PagesRoutingModule;
_class.ɵfac = function PagesRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9238:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 4701);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 1938);
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/header/header.component */ 6909);
/* harmony import */ var _common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/mobile-menu/mobile-menu.component */ 5015);
/* harmony import */ var _common_header_banner_header_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/header-banner/header-banner.component */ 6022);
/* harmony import */ var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/menu/menu.component */ 2421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








class PagesModule {}
_class = PagesModule;
_class.ɵfac = function PagesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__.MobileMenuComponent, _common_header_banner_header_banner_component__WEBPACK_IMPORTED_MODULE_4__.HeaderBannerComponent, _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule],
    exports: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__.MobileMenuComponent, _common_header_banner_header_banner_component__WEBPACK_IMPORTED_MODULE_4__.HeaderBannerComponent, _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent]
  });
})();

/***/ }),

/***/ 2889:
/*!*******************************************!*\
  !*** ./src/app/utils/firebase.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseService: () => (/* binding */ FirebaseService)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 5152);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ 8720);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 9193);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class FirebaseService {
  constructor() {}
  initFirebase() {
    const firebaseConfig = {
      apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.apiKey,
      authDomain: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.authDomain,
      projectId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.projectId,
      storageBucket: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.storageBucket,
      messagingSenderId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.messagingSenderId,
      appId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.appId,
      measurementId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase.measurementId
    };
    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
    const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, 'roxef72687@viicard.com', '1234567890').then(userCredential => {
      if (userCredential.user) {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification)(userCredential.user, {
          url: 'http://localhost:4200.'
        }).then(data => {
          console.log(data);
        });
      }
    }).catch(error => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
}
_class = FirebaseService;
_class.ɵfac = function FirebaseService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8058:
/*!*****************************************!*\
  !*** ./src/app/utils/script.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptService: () => (/* binding */ ScriptService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ScriptService {
  constructor() {
    this.url = ['assets/js/jquery.min.js', 'assets/js/bootstrap.bundle.min.js', 'assets/js/plugins.min.js', 'assets/js/optional/isotope.pkgd.min.js', 'assets/js/jquery.appear.min.js', 'assets/js/jquery.plugin.min.js', 'assets/js/main.min.js'];
  }
  loadScript() {
    for (const nodeElement of this.url) {
      let node = document.createElement('script');
      node.src = nodeElement;
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
_class = ScriptService;
_class.ɵfac = function ScriptService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  firebase: {
    apiKey: 'AIzaSyD5nMoQEzk1hxcK9ZTYx46BciRvxbpF2SE',
    authDomain: 'e-commerce-53f13.firebaseapp.com',
    projectId: 'e-commerce-53f13',
    storageBucket: 'e-commerce-53f13.appspot.com',
    messagingSenderId: '129986948070',
    appId: '1:129986948070:web:2f322f32c65b9d817ac427',
    measurementId: 'G-XZKMCX0L2S'
  }
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map