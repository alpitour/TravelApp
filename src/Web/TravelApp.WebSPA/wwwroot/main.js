(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'travel-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\n        <ul class=\"list-inline mb-2\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">About</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Contact</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Terms of Use</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Privacy Policy</a>\n          </li>\n        </ul>\n        <p class=\"text-muted small mb-4 mb-lg-0\">&copy; Your Website 2018. All Rights Reserved.</p>\n      </div>\n      <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto\">\n        <ul class=\"list-inline mb-0\">\n          <li class=\"list-inline-item mr-3\">\n            <a href=\"#\">\n              <i class=\"fab fa-facebook fa-2x fa-fw\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item mr-3\">\n            <a href=\"#\">\n              <i class=\"fab fa-twitter-square fa-2x fa-fw\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-instagram fa-2x fa-fw\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light static-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Start Bootstrap</a>\n    <a class=\"btn btn-primary\" href=\"#\">Sign In</a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Masthead -->\n<header class=\"masthead text-white text-center\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 mx-auto\">\n        <h1 class=\"mb-5\">Build a landing page for your business or project and generate more leads!</h1>\n      </div>\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <form>\n          <div class=\"form-row\">\n            <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\n              <input type=\"email\" class=\"form-control form-control-lg\" placeholder=\"Enter your email...\">\n            </div>\n            <div class=\"col-12 col-md-3\">\n              <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\">Sign up!</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Icons Grid -->\n<section class=\"features-icons bg-light text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-screen-desktop m-auto text-primary\"></i>\n          </div>\n          <h3>Fully Responsive</h3>\n          <p class=\"lead mb-0\">This theme will look great on any device, no matter the size!</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-layers m-auto text-primary\"></i>\n          </div>\n          <h3>Bootstrap 4 Ready</h3>\n          <p class=\"lead mb-0\">Featuring the latest build of the new Bootstrap 4 framework!</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-check m-auto text-primary\"></i>\n          </div>\n          <h3>Easy to Use</h3>\n          <p class=\"lead mb-0\">Ready to use with your own content, or customize the source files!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Image Showcases -->\n<section class=\"showcase\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row no-gutters\">\n\n      <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-image: url('assets/theme/bg-showcase-1.jpg');\"></div>\n      <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\n        <h2>Fully Responsive Design</h2>\n        <p class=\"lead mb-0\">When you use a theme created by Start Bootstrap, you know that the theme will look great\n          on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"col-lg-6 text-white showcase-img\" style=\"background-image: url('assets/theme/bg-showcase-2.jpg');\"></div>\n      <div class=\"col-lg-6 my-auto showcase-text\">\n        <h2>Updated For Bootstrap 4</h2>\n        <p class=\"lead mb-0\">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in\n          mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-image: url('assets/theme/bg-showcase-3.jpg');\"></div>\n      <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\n        <h2>Easy to Use &amp; Customize</h2>\n        <p class=\"lead mb-0\">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper\n          customization options. Out of the box, just add your content and images, and your new landing page will be\n          ready to go!</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Testimonials -->\n<section class=\"testimonials text-center bg-light\">\n  <div class=\"container\">\n    <h2 class=\"mb-5\">What people are saying...</h2>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/theme/testimonials-1.jpg\" alt=\"\">\n          <h5>Margaret E.</h5>\n          <p class=\"font-weight-light mb-0\">\"This is fantastic! Thanks so much guys!\"</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/theme/testimonials-2.jpg\" alt=\"\">\n          <h5>Fred S.</h5>\n          <p class=\"font-weight-light mb-0\">\"Bootstrap is amazing. I've been using it to create lots of super nice\n            landing pages.\"</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/theme/testimonials-3.jpg\" alt=\"\">\n          <h5>Sarah W.</h5>\n          <p class=\"font-weight-light mb-0\">\"Thanks so much for making these free resources available to us!\"</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Call to Action -->\n<section class=\"call-to-action text-white text-center\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 mx-auto\">\n        <h2 class=\"mb-4\">Ready to get started? Sign up now!</h2>\n      </div>\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <form>\n          <div class=\"form-row\">\n            <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\n              <input type=\"email\" class=\"form-control form-control-lg\" placeholder=\"Enter your email...\">\n            </div>\n            <div class=\"col-12 col-md-3\">\n              <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\">Sign up!</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Simone\source\repos\TravelApp\src\Web\TravelApp.WebSPA\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map