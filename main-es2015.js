(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main-dashboard/main-dashboard.component */ "./src/app/modules/main-dashboard/main-dashboard.component.ts");






const routes = [{
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        children: [{
                path: '',
                component: _modules_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MainDashboardComponent"]
            }]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'kings-game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_4__["DefaultModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_4__["DefaultModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_4__["DefaultModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DefaultComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 2, vars: 0, template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/main-dashboard/main-dashboard.component */ "./src/app/modules/main-dashboard/main-dashboard.component.ts");







class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        src_app_modules_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MainDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
                    src_app_modules_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MainDashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/main-dashboard/main-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/main-dashboard/main-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/card-picker/card-picker.component */ "./src/app/shared/components/card-picker/card-picker.component.ts");




function MainDashboardComponent_app_card_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-picker", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardType", function MainDashboardComponent_app_card_picker_3_Template_app_card_picker_cardType_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.cardTypeCatcher($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainDashboardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainDashboardComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.gameStarted = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "start game"));
} }
class MainDashboardComponent {
    constructor() {
        this.gameStarted = false;
    }
    ngOnInit() {
    }
    cardTypeCatcher(ev) {
        this.cardType = ev.split(' - ', 1);
    }
}
MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) { return new (t || MainDashboardComponent)(); };
MainDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainDashboardComponent, selectors: [["app-main-dashboard"]], decls: 5, vars: 2, consts: [[1, "bg-img"], [1, "main-container"], [1, "column"], [3, "cardType", 4, "ngIf"], ["class", "main-button-container", 4, "ngIf"], [3, "cardType"], [1, "main-button-container"], [1, "start-button", 3, "click"]], template: function MainDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainDashboardComponent_app_card_picker_3_Template, 1, 0, "app-card-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainDashboardComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_2__["CardPickerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".start-button[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-color: black;\n  border-style: dashed;\n  border-radius: 30px;\n  background-color: black;\n  box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.56);\n  width: 276px;\n  height: 65px;\n  z-index: 6;\n  color: white;\n}\n\n.main-button-container[_ngcontent-%COMP%] {\n  margin: 150px;\n}\n\n.main-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluLWRhc2hib2FyZC9EOlxcUHJvZ3JhbW93YW5pZVxca2luZ3MtZ2FtZS9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpbi1kYXNoYm9hcmRcXG1haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4tZGFzaGJvYXJkL21haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREVFO0VBQ0UsZUFBQTtBQ0FKOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4tZGFzaGJvYXJkL21haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYm94LXNoYWRvdzogMCA5cHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC41Nik7XHJcblxyXG4gIHdpZHRoOiAyNzZweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgei1pbmRleDogNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTUwcHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5zdGFydC1idXR0b24ge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAwIDlweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjU2KTtcbiAgd2lkdGg6IDI3NnB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIHotaW5kZXg6IDY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTUwcHg7XG59XG4ubWFpbi1idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-dashboard',
                templateUrl: './main-dashboard.component.html',
                styleUrls: ['./main-dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/card-picker/card-options.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/card-picker/card-options.ts ***!
  \***************************************************************/
/*! exports provided: CardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOptions", function() { return CardOptions; });
const CardOptions = {
    cardTypes: [
        { id: 1, name: '2', type: 'hearts' },
        { id: 2, name: '3', type: 'hearts' },
        { id: 3, name: '4', type: 'hearts' },
        { id: 4, name: '4', type: 'hearts' },
        { id: 5, name: '5', type: 'hearts' },
        { id: 6, name: '6', type: 'hearts' },
        { id: 7, name: '7', type: 'hearts' },
        { id: 8, name: '8', type: 'hearts' },
        { id: 9, name: '9', type: 'hearts' },
        { id: 10, name: '10', type: 'hearts' },
        { id: 11, name: 'jack', type: 'hearts' },
        { id: 12, name: 'queen', type: 'hearts' },
        { id: 13, name: 'king', type: 'hearts' },
        { id: 14, name: 'ace', type: 'hearts' },
        { id: 15, name: '2', type: 'tiles' },
        { id: 16, name: '3', type: 'tiles' },
        { id: 17, name: '4', type: 'tiles' },
        { id: 18, name: '4', type: 'tiles' },
        { id: 19, name: '5', type: 'tiles' },
        { id: 20, name: '6', type: 'tiles' },
        { id: 21, name: '7', type: 'tiles' },
        { id: 22, name: '8', type: 'tiles' },
        { id: 23, name: '9', type: 'tiles' },
        { id: 24, name: '10', type: 'tiles' },
        { id: 25, name: 'jack', type: 'tiles' },
        { id: 26, name: 'queen', type: 'tiles' },
        { id: 27, name: 'king', type: 'tiles' },
        { id: 28, name: 'ace', type: 'tiles' },
        { id: 29, name: '2', type: 'pikes' },
        { id: 30, name: '3', type: 'pikes' },
        { id: 31, name: '4', type: 'pikes' },
        { id: 32, name: '4', type: 'pikes' },
        { id: 33, name: '5', type: 'pikes' },
        { id: 34, name: '6', type: 'pikes' },
        { id: 35, name: '7', type: 'pikes' },
        { id: 36, name: '8', type: 'pikes' },
        { id: 37, name: '9', type: 'pikes' },
        { id: 38, name: '10', type: 'pikes' },
        { id: 39, name: 'jack', type: 'pikes' },
        { id: 40, name: 'queen', type: 'pikes' },
        { id: 41, name: 'king', type: 'pikes' },
        { id: 42, name: 'ace', type: 'pikes' },
        { id: 43, name: '2', type: 'clovers' },
        { id: 44, name: '3', type: 'clovers' },
        { id: 45, name: '4', type: 'clovers' },
        { id: 46, name: '4', type: 'clovers' },
        { id: 47, name: '5', type: 'clovers' },
        { id: 48, name: '6', type: 'clovers' },
        { id: 49, name: '7', type: 'clovers' },
        { id: 50, name: '8', type: 'clovers' },
        { id: 51, name: '9', type: 'clovers' },
        { id: 52, name: '10', type: 'clovers' },
        { id: 53, name: 'jack', type: 'clovers' },
        { id: 54, name: 'queen', type: 'clovers' },
        { id: 55, name: 'king', type: 'clovers' },
        { id: 56, name: 'ace', type: 'clovers' }
    ],
    cardRules: [
        { number: '2', rule: 'Choose the one person who have to drink!' },
        { number: '3', rule: 'You are drinking!' },
        { number: '4', rule: 'All the girls drink!' },
        { number: '5', rule: 'Five is tap master!' },
        { number: '6', rule: 'All the guys drink!' },
        { number: '7', rule: 'Seven is heaven!' },
        { number: '8', rule: 'Eight is mate!' },
        { number: '9', rule: 'Nine is rime' },
        { number: '10', rule: 'Ten is category' },
        { number: 'jack', rule: 'Choose a rule' },
        { number: 'queen', rule: 'Question master!' },
        { number: 'king', rule: 'Crown on the head!' },
        { number: 'ace', rule: 'Everyone has to drink!' }
    ]
};


/***/ }),

/***/ "./src/app/shared/components/card-picker/card-picker.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/card-picker/card-picker.component.ts ***!
  \************************************************************************/
/*! exports provided: CardPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPickerComponent", function() { return CardPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _card_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-options */ "./src/app/shared/components/card-picker/card-options.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CardPickerComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your card is: ", ctx_r6.card, "");
} }
function CardPickerComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.imageIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CardPickerComponent {
    constructor() {
        this.cardOptions = _card_options__WEBPACK_IMPORTED_MODULE_1__["CardOptions"];
        this.tempCardList = this.cardOptions;
    }
    ngOnInit() {
        this.chooseRandomCard();
    }
    chooseRandomCard() {
        if (this.tempCardList.cardTypes.length === 0) {
            this.card = 'no more cards';
        }
        else {
            const index = Math.floor(Math.random() * this.cardOptions.cardTypes.length);
            this.card = this.tempCardList.cardTypes[index].name + '-' + this.tempCardList.cardTypes[index].type;
            this.imageIndex = '../../../../assets/img/cards/' + this.card + '.png';
            this.tempCardList.cardTypes.splice(index, 1);
            this.getRule(this.card);
        }
    }
    getRule(card) {
        const ruleIndex = card.split('-', 1);
        this.rule = this.cardOptions.cardRules.find(el => el.number === ruleIndex[0]).rule;
    }
}
CardPickerComponent.ɵfac = function CardPickerComponent_Factory(t) { return new (t || CardPickerComponent)(); };
CardPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardPickerComponent, selectors: [["app-card-picker"]], decls: 12, vars: 3, consts: [[1, "main-container"], [1, "card-picker-container"], [4, "ngIf"], [1, "rule-description"], [1, "card"], ["class", "", "alt", "card image", 3, "src", 4, "ngIf"], [1, "next-button", 3, "click"], ["alt", "card image", 1, "", 3, "src"]], template: function CardPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardPickerComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your task is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardPickerComponent_img_9_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardPickerComponent_Template_button_click_10_listener() { return ctx.chooseRandomCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".start-button[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n  border-color: rgb(0, 0, 0);\r\n  border-style: solid;\r\n  border-radius: 30px;\r\n  background: linear-gradient(90deg, rgba(121, 65, 9, 1) 35%, rgba(193, 125, 7, 1) 100%);\r\n  box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.56);\r\n  cursor: pointer;\r\n\r\n  width: 276px;\r\n  height: 65px;\r\n  z-index: 6;\r\n  color: white;\r\n}\n.card-picker-container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%] {\n  height: 480px;\n  width: 320px;\n  margin: 15px 0;\n}\n.card-border[_ngcontent-%COMP%] {\n  width: 481px;\n  height: 321px;\n  border: 1px solid black;\n}\n.rule-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.next-button[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 30px;\n  background: linear-gradient(90deg, #794109 35%, #c17d07 100%);\n  box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.56);\n  cursor: pointer;\n  font-weight: bold;\n  width: 230px;\n  height: 50px;\n  z-index: 6;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2hhcmVkLmNzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC1waWNrZXIvRDpcXFByb2dyYW1vd2FuaWVcXGtpbmdzLWdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY2FyZC1waWNrZXJcXGNhcmQtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkLXBpY2tlci9jYXJkLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzRkFBc0Y7RUFDdEYsNENBQTRDO0VBQzVDLGVBQWU7O0VBRWYsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQtcGlja2VyL2NhcmQtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjEsIDY1LCA5LCAxKSAzNSUsIHJnYmEoMTkzLCAxMjUsIDcsIDEpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgOXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuNTYpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgd2lkdGg6IDI3NnB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICB6LWluZGV4OiA2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uL3NoYXJlZC5jc3NcIik7XHJcblxyXG4uY2FyZC1waWNrZXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJvcmRlciB7XHJcbiAgd2lkdGg6IDQ4MXB4O1xyXG4gIGhlaWdodDogMzIxcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5ydWxlLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtYnV0dG9uIHtcclxuXHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjEsIDY1LCA5LCAxKSAzNSUsIHJnYmEoMTkzLCAxMjUsIDcsIDEpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgOXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuNTYpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiA2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcblxyXG4iLCJAaW1wb3J0IHVybChcIi4uL3NoYXJlZC5jc3NcIik7XG4uY2FyZC1waWNrZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDQ4MHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uY2FyZC1ib3JkZXIge1xuICB3aWR0aDogNDgxcHg7XG4gIGhlaWdodDogMzIxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucnVsZS1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXh0LWJ1dHRvbiB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3OTQxMDkgMzUlLCAjYzE3ZDA3IDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDlweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjU2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDY7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-picker',
                templateUrl: './card-picker.component.html',
                styleUrls: ['./card-picker.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        document.body.classList.add('bg-img-header');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 3, consts: [[1, "bg-img-header"], [1, "header-title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "kings game"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".bg-img-header[_ngcontent-%COMP%] {\n  background: #794109;\n  background: linear-gradient(90deg, #794109 35%, #c17d07 100%);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  padding: 0;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Roboto;\n  color: white;\n  font-weight: bold;\n  line-height: 1.2;\n  z-index: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxQcm9ncmFtb3dhbmllXFxraW5ncy1nYW1lL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFLQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBR0EsdUVBQUE7QUNERjs7QURJQTtFQUVFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTIxLCA2NSwgOSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEyMSwgNjUsIDksIDEpIDM1JSwgcmdiYSgxOTMsIDEyNSwgNywgMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLCA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLCA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG5cclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB6LWluZGV4OiA0O1xyXG5cclxufVxyXG4iLCIuYmctaW1nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM3OTQxMDk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc5NDEwOSAzNSUsICNjMTdkMDcgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMTNweCAtN3B4ICMwMDAwMDAsIDVweCA1cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLCA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHotaW5kZXg6IDQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-picker/card-picker.component */ "./src/app/shared/components/card-picker/card-picker.component.ts");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_3__["CardPickerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_3__["CardPickerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_3__["CardPickerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_card_picker_card_picker_component__WEBPACK_IMPORTED_MODULE_3__["CardPickerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programowanie\kings-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map