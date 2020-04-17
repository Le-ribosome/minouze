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

/***/ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Formulaire de création-->\n<app-formulaire-etiquette></app-formulaire-etiquette>\n<!--Aperçu 1 étiquette recto-->\n<div class=\"conteneurApercu\">\n    <app-etiquette [recto]=\"true\" [apercu]=\"true\"></app-etiquette>\n    <!--Aperçu 1 étiquette verso-->\n    <app-etiquette [verso]=\"true\" [apercu]=\"true\"></app-etiquette>\n</div>"

/***/ }),

/***/ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conteneurApercu {\n  display: flex;\n  margin-top: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4aXMvRGV2L01pbm91emVFdGlxdWV0dGVHZW5lcmF0b3Ivc3JjL2FwcC9Ob3V2ZWxsZS1FdGlxdWV0dGUvbm91dmVsbGUtZXRpcXVldHRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvTm91dmVsbGUtRXRpcXVldHRlL25vdXZlbGxlLWV0aXF1ZXR0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5ldXJBcGVyY3V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.ts ***!
  \********************************************************************/
/*! exports provided: NouvelleEtiquetteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleEtiquetteComponent", function() { return NouvelleEtiquetteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NouvelleEtiquetteComponent = /** @class */ (function () {
    function NouvelleEtiquetteComponent() {
    }
    NouvelleEtiquetteComponent.prototype.ngOnInit = function () {
    };
    NouvelleEtiquetteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nouvelle-etiquette',
            template: __webpack_require__(/*! ./nouvelle-etiquette.component.html */ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.html"),
            styles: [__webpack_require__(/*! ./nouvelle-etiquette.component.scss */ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NouvelleEtiquetteComponent);
    return NouvelleEtiquetteComponent;
}());



/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"\" (click)=\"impression()\">Imprimer</button>\n\n<div class=\"position-relative\">\n  <section (click)=\"oiwjeoifjwe()\" id=\"impression\" class=\"position-absolute\">\n    <!-- Planche étiquettes recto: Logo + Nom de la bière -->\n    <app-planche-recto></app-planche-recto>\n    <!-- Planche étiquettes verso: Titre + -->\n    <app-planche-verso></app-planche-verso>\n  </section>\n  <section id=\"hideImpression\" class=\"position-absolute\">\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hideImpression {\n  background-color: white;\n  z-index: 999999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4aXMvRGV2L01pbm91emVFdGlxdWV0dGVHZW5lcmF0b3Ivc3JjL2FwcC9hcGVyY3UtcGxhbmNoZS1ldGlxdWV0dGVzL2FwZXJjdS1wbGFuY2hlLWV0aXF1ZXR0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBlcmN1LXBsYW5jaGUtZXRpcXVldHRlcy9hcGVyY3UtcGxhbmNoZS1ldGlxdWV0dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hpZGVJbXByZXNzaW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ApercuPlancheEtiquettesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApercuPlancheEtiquettesComponent", function() { return ApercuPlancheEtiquettesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApercuPlancheEtiquettesComponent = /** @class */ (function () {
    function ApercuPlancheEtiquettesComponent() {
    }
    ApercuPlancheEtiquettesComponent.prototype.onafterprint = function () {
        console.log('CANCELPRINT');
        //TODO: FIX DE LA FOIREUSERIE DU IMPRIMER QUI IMPRIME PAS
        document.body.innerHTML = this.originalContents;
    };
    ApercuPlancheEtiquettesComponent.prototype.ngOnInit = function () {
        //this.impression();
    };
    // /**Bidouille pour cacher la planche mais l'avoir quand 
    //  * même à l'impression
    //  */
    // ngAfterViewInit() {
    //   console.log('impression w = ' + $('#impression').width());
    //   console.log('impression h= ' + $('#impression').height());
    //   $('#hideImpression').css({ width: $('#impression').width() });
    //   $('#hideImpression').css({ height: $('#impression').height() });
    //   this.originalContents = document.body.innerHTML;
    // }
    // oiwjeoifjwe() {
    //   console.log('impression w = ' + $('#impression').width());
    //   console.log('impression h= ' + $('#impression').height());
    //   $('#hideImpression').css({ width: $('#impression').width() });
    //   $('#hideImpression').css({ height: $('#impression').height() });
    // }
    ApercuPlancheEtiquettesComponent.prototype.impression = function () {
        console.log('HEYEYEYEYEYYE');
        var printContents = document.getElementById("impression").innerHTML;
        document.body.innerHTML = printContents;
        window.print();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:afterprint'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ApercuPlancheEtiquettesComponent.prototype, "onafterprint", null);
    ApercuPlancheEtiquettesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apercu-planche-etiquettes',
            template: __webpack_require__(/*! ./apercu-planche-etiquettes.component.html */ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.html"),
            styles: [__webpack_require__(/*! ./apercu-planche-etiquettes.component.scss */ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApercuPlancheEtiquettesComponent);
    return ApercuPlancheEtiquettesComponent;
}());



/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let ligne of lignes\">\n  <div class=\"d-flex flex-row\">\n    <div *ngFor=\"let col of colonnes\">\n      <app-etiquette [recto]=\"true\" [apercu]=\"false\"></app-etiquette>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwZXJjdS1wbGFuY2hlLWV0aXF1ZXR0ZXMvcGxhbmNoZS1yZWN0by9wbGFuY2hlLXJlY3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.ts ***!
  \************************************************************************************/
/*! exports provided: PlancheRectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlancheRectoComponent", function() { return PlancheRectoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlancheRectoComponent = /** @class */ (function () {
    function PlancheRectoComponent() {
        /**
         * Nombre de lignes du tableau d'étiquettes
         */
        this.lignes = new Array(5);
        /**
        Nombre d'étiquettes par ligne
        */
        this.colonnes = new Array(2);
    }
    PlancheRectoComponent.prototype.ngOnInit = function () {
    };
    PlancheRectoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planche-recto',
            template: __webpack_require__(/*! ./planche-recto.component.html */ "./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.html"),
            styles: [__webpack_require__(/*! ./planche-recto.component.scss */ "./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlancheRectoComponent);
    return PlancheRectoComponent;
}());



/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let ligne of lignes\">\n  <div class=\"d-flex flex-row\">\n    <div *ngFor=\"let col of colonnes\">\n      <app-etiquette [recto]=\"false\" [apercu]=\"false\"></app-etiquette>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwZXJjdS1wbGFuY2hlLWV0aXF1ZXR0ZXMvcGxhbmNoZS12ZXJzby9wbGFuY2hlLXZlcnNvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.ts ***!
  \************************************************************************************/
/*! exports provided: PlancheVersoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlancheVersoComponent", function() { return PlancheVersoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlancheVersoComponent = /** @class */ (function () {
    function PlancheVersoComponent() {
    }
    PlancheVersoComponent.prototype.ngOnInit = function () {
    };
    PlancheVersoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planche-verso',
            template: __webpack_require__(/*! ./planche-verso.component.html */ "./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.html"),
            styles: [__webpack_require__(/*! ./planche-verso.component.scss */ "./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlancheVersoComponent);
    return PlancheVersoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liste_etiquettes_liste_etiquettes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-etiquettes/liste-etiquettes.component */ "./src/app/liste-etiquettes/liste-etiquettes.component.ts");
/* harmony import */ var _Nouvelle_Etiquette_nouvelle_etiquette_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nouvelle-Etiquette/nouvelle-etiquette.component */ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.ts");
/* harmony import */ var _apercu_planche_etiquettes_apercu_planche_etiquettes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apercu-planche-etiquettes/apercu-planche-etiquettes.component */ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.ts");






var routes = [
    { path: '', redirectTo: 'formulaireEtiquette', pathMatch: 'full' },
    { path: 'formulaireEtiquette', component: _Nouvelle_Etiquette_nouvelle_etiquette_component__WEBPACK_IMPORTED_MODULE_4__["NouvelleEtiquetteComponent"] },
    { path: 'listeEtiquettes/:idNewEtiquette', component: _liste_etiquettes_liste_etiquettes_component__WEBPACK_IMPORTED_MODULE_3__["ListeEtiquettesComponent"] },
    { path: 'listeEtiquettes', component: _liste_etiquettes_liste_etiquettes_component__WEBPACK_IMPORTED_MODULE_3__["ListeEtiquettesComponent"] },
    { path: 'impression', component: _apercu_planche_etiquettes_apercu_planche_etiquettes_component__WEBPACK_IMPORTED_MODULE_5__["ApercuPlancheEtiquettesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!-- Navbar -->\n<app-navbar></app-navbar>\n<!-- Injection composants -->\n<router-outlet></router-outlet>"

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
        this.title = 'MinouzeEtiquetteGenerator';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/fesm5/ngx-color-picker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _formulaire_etiquette_formulaire_etiquette_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formulaire-etiquette/formulaire-etiquette.component */ "./src/app/formulaire-etiquette/formulaire-etiquette.component.ts");
/* harmony import */ var _etiquette_shape_etiquette_shape_etiquette_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./etiquette/shape-etiquette/shape-etiquette.component */ "./src/app/etiquette/shape-etiquette/shape-etiquette.component.ts");
/* harmony import */ var _etiquette_etiquette_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./etiquette/etiquette.component */ "./src/app/etiquette/etiquette.component.ts");
/* harmony import */ var _apercu_planche_etiquettes_apercu_planche_etiquettes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apercu-planche-etiquettes/apercu-planche-etiquettes.component */ "./src/app/apercu-planche-etiquettes/apercu-planche-etiquettes.component.ts");
/* harmony import */ var _apercu_planche_etiquettes_planche_recto_planche_recto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apercu-planche-etiquettes/planche-recto/planche-recto.component */ "./src/app/apercu-planche-etiquettes/planche-recto/planche-recto.component.ts");
/* harmony import */ var _apercu_planche_etiquettes_planche_verso_planche_verso_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apercu-planche-etiquettes/planche-verso/planche-verso.component */ "./src/app/apercu-planche-etiquettes/planche-verso/planche-verso.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _liste_etiquettes_liste_etiquettes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./liste-etiquettes/liste-etiquettes.component */ "./src/app/liste-etiquettes/liste-etiquettes.component.ts");
/* harmony import */ var _Nouvelle_Etiquette_nouvelle_etiquette_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Nouvelle-Etiquette/nouvelle-etiquette.component */ "./src/app/Nouvelle-Etiquette/nouvelle-etiquette.component.ts");
/* harmony import */ var _encart_encart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./encart/encart.component */ "./src/app/encart/encart.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _formulaire_etiquette_formulaire_etiquette_component__WEBPACK_IMPORTED_MODULE_7__["FormulaireEtiquetteComponent"],
                _etiquette_shape_etiquette_shape_etiquette_component__WEBPACK_IMPORTED_MODULE_8__["ShapeEtiquetteComponent"],
                _etiquette_etiquette_component__WEBPACK_IMPORTED_MODULE_9__["EtiquetteComponent"],
                _apercu_planche_etiquettes_apercu_planche_etiquettes_component__WEBPACK_IMPORTED_MODULE_10__["ApercuPlancheEtiquettesComponent"],
                _apercu_planche_etiquettes_planche_recto_planche_recto_component__WEBPACK_IMPORTED_MODULE_11__["PlancheRectoComponent"],
                _apercu_planche_etiquettes_planche_verso_planche_verso_component__WEBPACK_IMPORTED_MODULE_12__["PlancheVersoComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _liste_etiquettes_liste_etiquettes_component__WEBPACK_IMPORTED_MODULE_14__["ListeEtiquettesComponent"],
                _Nouvelle_Etiquette_nouvelle_etiquette_component__WEBPACK_IMPORTED_MODULE_15__["NouvelleEtiquetteComponent"],
                _encart_encart_component__WEBPACK_IMPORTED_MODULE_16__["EncartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/encart/encart.component.html":
/*!**********************************************!*\
  !*** ./src/app/encart/encart.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"typeEncart === 'SUCCESS'\">\n  <input class=\"alert-state\" id=\"alert-3\" type=\"checkbox\">\n  <div class=\"alert alert-success dismissible\">\n    {{texteEncart}}\n  </div>\n</div>\n\n<div *ngIf=\"typeEncart === 'WARNING'\">\n  <input class=\"alert-state\" id=\"alert-4\" type=\"checkbox\">\n  <div class=\"alert alert-warning dismissible\">\n    {{texteEncart}}\n  </div>\n</div>\n\n<div *ngIf=\"typeEncart ==='ERROR'\">\n  <input class=\"alert-state\" id=\"alert-5\" type=\"checkbox\">\n  <div class=\"alert alert-danger dismissible\">\n    {{texteEncart}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/encart/encart.component.scss":
/*!**********************************************!*\
  !*** ./src/app/encart/encart.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuY2FydC9lbmNhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/encart/encart.component.ts":
/*!********************************************!*\
  !*** ./src/app/encart/encart.component.ts ***!
  \********************************************/
/*! exports provided: EncartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncartComponent", function() { return EncartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_encart_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/encart-enum */ "./src/app/model/encart-enum.ts");



var EncartComponent = /** @class */ (function () {
    function EncartComponent() {
    }
    EncartComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EncartComponent.prototype, "typeEncart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EncartComponent.prototype, "texteEncart", void 0);
    EncartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encart',
            template: __webpack_require__(/*! ./encart.component.html */ "./src/app/encart/encart.component.html"),
            styles: [__webpack_require__(/*! ./encart.component.scss */ "./src/app/encart/encart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EncartComponent);
    return EncartComponent;
}());



/***/ }),

/***/ "./src/app/etiquette/etiquette.component.html":
/*!****************************************************!*\
  !*** ./src/app/etiquette/etiquette.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Recto: Log + Nom de la bière-->\n<section id=\"recto\" *ngIf=\"recto\">\n  <div class=\"tailleEtiquette\">\n    <div class=\"logoMinouze\">\n      <img src=\"../../assets/img/carlos1.png\" alt=\"LogoMinouze\">\n      <h1>La Minouze</h1>\n    </div>\n    <div id=\"beerName\">\n      <h2>{{etiquette._titre}}</h2>\n    </div>\n    <div class=\"shape\">\n      <app-shape-etiquette></app-shape-etiquette>\n    </div>\n  </div>\n</section>\n<!--Verso: Texte + Ingrédients + Alc + Message légal-->\n<section id=\"verso\" *ngIf=\"verso\">\n  <div class=\"tailleEtiquette\">\n    <div id=\"texteDescriptif\">\n      <p>{{etiquette._texte}}</p>\n    </div>\n    <div id=\"alc\">\n      <p>-&nbsp;&nbsp;&nbsp;{{etiquette._alc}}%&nbsp;&nbsp;&nbsp;-</p>\n    </div>\n    <div id=\"ingredients\">\n      <p>{{etiquette._ingredients}}</p>\n    </div>\n    <div id=\"warning\">\n      <p>{{etiquette._texteAvertissement}}</p>\n    </div>\n    <div class=\"shape\">\n      <app-shape-etiquette></app-shape-etiquette>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/etiquette/etiquette.component.scss":
/*!****************************************************!*\
  !*** ./src/app/etiquette/etiquette.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n/* Variables contenant valeurs taille différents elmts\n*/\n/*Page*/\n/*Facteur bidouille, pour avoir les étiquettes de la bonne taille sur \nl'impression A4 */\n/*Etiquette*/\n/*Option de l'étiquette*/\n/*Marge entre les étiquettes*/\n/*Font La Minouze*/\n/*Position du logo*/\n/*Font texte + ingrédiens + alc + txtWarning*/\n/**taille conteneur étiquette: fait 8.59cm par 5.03\n/* => soit 594 large / 1015 haut \n*/\n.tailleEtiquette {\n  width: calc(8.59cm*1.5);\n  height: calc(5.03cm*1.5);\n  position: relative;\n  margin: 5px;\n  /*Partie verso*/\n  /*Caractéristiques générales des textes */\n  /*div parente du texte*/ }\n.tailleEtiquette .logoMinouze {\n    position: absolute;\n    width: inherit;\n    height: inherit;\n    font-family: \"minouzeFont\";\n    padding: 5px;\n    display: flex;\n    align-items: center; }\n.tailleEtiquette .logoMinouze img, .tailleEtiquette .logoMinouze h1 {\n      transform: rotate(-90deg); }\n.tailleEtiquette .logoMinouze h1 {\n      font-size: calc(68px*1.5);\n      position: absolute;\n      /*position de \"LA MINOUZE\" -> modifier en // de la position de Carlos */\n      right: calc(88px*1.5);\n      z-index: 1; }\n.tailleEtiquette .logoMinouze img {\n      width: 40%;\n      position: absolute;\n      /*position de Carlos -> modifier en // de la position de \"LA MINOUZE\" */\n      right: calc(179px*1.5);\n      z-index: 10; }\n.tailleEtiquette #beerName {\n    position: absolute;\n    width: 45%;\n    height: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    right: 0;\n    color: black; }\n.tailleEtiquette #beerName h2 {\n      transform: rotate(-90deg);\n      font-family: \"beerName\";\n      /*TODO: DONNER LA MAIN SUR CES VALEURS DEPUIS IHM*/\n      font-size: calc(24px*1.5);\n      margin-left: 18px;\n      position: fixed;\n      /*TODO: VARIABILISER CES VALEURS POUR RESPONSIVE AVEC CALC ET TOUT */\n      right: -50px;\n      height: 160px;\n      width: 280px;\n      margin: 0;\n      padding: 15px;\n      text-align: center;\n      /* vertical-align: middle; */\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n.tailleEtiquette .shape {\n    z-index: -9999;\n    position: absolute;\n    width: inherit;\n    height: inherit; }\n.tailleEtiquette p {\n    font-family: \"avenir\";\n    height: calc(8.59cm*1.5);\n    width: calc(5.03cm*1.5);\n    top: -100px;\n    right: 100px;\n    transform: rotate(-90deg);\n    margin: 0 !important;\n    position: absolute;\n    text-align: justify; }\n.tailleEtiquette #texteDescriptif #ingredients #alc #warning {\n    position: absolute;\n    width: inherit;\n    height: inherit; }\n.tailleEtiquette #texteDescriptif {\n    /*Texte descriptif - TODO: variabiliser les valeurs et rendre responsive parceque ca va péter en autre orientation*/ }\n.tailleEtiquette #texteDescriptif p {\n      /*Texte descriptif police avenir taille 10.5 */\n      font-size: 16px;\n      padding: 15% 5% 35% 5%; }\n.tailleEtiquette #ingredients p {\n    /*Ingrédients police avenir taille 5  */\n    font-size: 10px;\n    padding: 80% 5% 0% 5%; }\n.tailleEtiquette #alc p {\n    /* % Alc 12 et gras police avenir taille 12*/\n    font-family: \"avenirBold\";\n    text-align: center;\n    font-size: 20px;\n    padding: 70% 5% 0% 5%; }\n.tailleEtiquette #warning p {\n    /* Avertissement abus d'alcool police avenir taille 4 avenir  */\n    font-size: 7px;\n    padding: 97% 2% 0% 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXRpcXVldHRlL2V0aXF1ZXR0ZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4aXMvRGV2L01pbm91emVFdGlxdWV0dGVHZW5lcmF0b3Ivc3JjL2Fzc2V0cy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvYWxleGlzL0Rldi9NaW5vdXplRXRpcXVldHRlR2VuZXJhdG9yL3NyYy9hcHAvZXRpcXVldHRlL2V0aXF1ZXR0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0NER0M7QUNBRCxPQUFBO0FBS0E7aUJERmlCO0FDTWpCLFlBQUE7QUFJQSx3QkFBQTtBQUNJLDZCQUFBO0FBRUEsa0JBQUE7QUFLQSxtQkFBQTtBQUdBLDZDQUFBO0FDekJKOztDRmFDO0FFVkQ7RUFDSSx1QkRRMEM7RUNQMUMsd0JETTBDO0VDTDFDLGtCQUFrQjtFQUNsQixXRFMwQjtFQ3NEMUIsZUFBQTtFQUVBLHlDQUFBO0VBWUEsdUJBQUEsRUFBd0I7QUFqRjVCO0lBTVEsa0JBQWtCO0lBQ2xCLGNBQWE7SUFDYixlQUFjO0lBQ2QsMEJETTBCO0lDTDFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7QUFaM0I7TUFjWSx5QkFBeUIsRUFBQTtBQWRyQztNQWlCWSx5QkRENEM7TUNFNUMsa0JBQWtCO01BQ2xCLHVFQUFBO01BQ0EscUJEQWtDO01DQ2xDLFVBQVUsRUFBQTtBQXJCdEI7TUF3QlksVUFBVTtNQUNWLGtCQUFrQjtNQUNsQix1RUFBQTtNQUNBLHNCRE5vQztNQ09wQyxXQUFXLEVBQUE7QUE1QnZCO0lBZ0NRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFFBQVE7SUFDUixZQUFZLEVBQUE7QUF2Q3BCO01BeUNZLHlCQUF5QjtNQUN6Qix1QkR6QmlCO01DMEJqQixrREFBQTtNQUNBLHlCRDFCNEM7TUMyQjVDLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysb0VBQUE7TUFDUixZQUFZO01BQ1osYUFBYTtNQUNiLFlBQVk7TUFDWixTQUFTO01BQ1QsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQiw0QkFBQTtNQUNBLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7QUF6RHZCO0lBNkRRLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGVBQWMsRUFBQTtBQWhFdEI7SUF1RVEscUJEaERpQjtJQ2lEakIsd0JEL0RzQztJQ2dFdEMsdUJEakVzQztJQ2tFdEMsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtBQS9FM0I7SUFtRlEsa0JBQWtCO0lBQ2xCLGNBQWE7SUFDYixlQUFjLEVBQUE7QUFyRnRCO0lBd0ZRLG1IQUFBLEVBQW9IO0FBeEY1SDtNQTBGWSw4Q0FBQTtNQUNBLGVEbEVvQjtNQ21FcEIsc0JBQXNCLEVBQUE7QUE1RmxDO0lBaUdZLHVDQUFBO0lBQ0EsZUR4RWU7SUN5RWYscUJBQXFCLEVBQUE7QUFuR2pDO0lBd0dZLDRDQUFBO0lBQ0EseUJEakZzQjtJQ2tGdEIsa0JBQWtCO0lBQ2xCLGVEaEZPO0lDaUZQLHFCQUFxQixFQUFBO0FBNUdqQztJQWtIWSwrREFBQTtJQUNBLGNEdkZPO0lDd0ZQLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZXRpcXVldHRlL2V0aXF1ZXR0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuLyogVmFyaWFibGVzIGNvbnRlbmFudCB2YWxldXJzIHRhaWxsZSBkaWZmw6lyZW50cyBlbG10c1xuKi9cbi8qUGFnZSovXG4vKkZhY3RldXIgYmlkb3VpbGxlLCBwb3VyIGF2b2lyIGxlcyDDqXRpcXVldHRlcyBkZSBsYSBib25uZSB0YWlsbGUgc3VyIFxubCdpbXByZXNzaW9uIEE0ICovXG4vKkV0aXF1ZXR0ZSovXG4vKk9wdGlvbiBkZSBsJ8OpdGlxdWV0dGUqL1xuLypNYXJnZSBlbnRyZSBsZXMgw6l0aXF1ZXR0ZXMqL1xuLypGb250IExhIE1pbm91emUqL1xuLypQb3NpdGlvbiBkdSBsb2dvKi9cbi8qRm9udCB0ZXh0ZSArIGluZ3LDqWRpZW5zICsgYWxjICsgdHh0V2FybmluZyovXG4vKip0YWlsbGUgY29udGVuZXVyIMOpdGlxdWV0dGU6IGZhaXQgOC41OWNtIHBhciA1LjAzXG4vKiA9PiBzb2l0IDU5NCBsYXJnZSAvIDEwMTUgaGF1dCBcbiovXG4udGFpbGxlRXRpcXVldHRlIHtcbiAgd2lkdGg6IGNhbGMoOC41OWNtKjEuNSk7XG4gIGhlaWdodDogY2FsYyg1LjAzY20qMS41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbiAgLypQYXJ0aWUgdmVyc28qL1xuICAvKkNhcmFjdMOpcmlzdGlxdWVzIGfDqW7DqXJhbGVzIGRlcyB0ZXh0ZXMgKi9cbiAgLypkaXYgcGFyZW50ZSBkdSB0ZXh0ZSovIH1cbiAgLnRhaWxsZUV0aXF1ZXR0ZSAubG9nb01pbm91emUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IFwibWlub3V6ZUZvbnRcIjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLnRhaWxsZUV0aXF1ZXR0ZSAubG9nb01pbm91emUgaW1nLCAudGFpbGxlRXRpcXVldHRlIC5sb2dvTWlub3V6ZSBoMSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XG4gICAgLnRhaWxsZUV0aXF1ZXR0ZSAubG9nb01pbm91emUgaDEge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDY4cHgqMS41KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8qcG9zaXRpb24gZGUgXCJMQSBNSU5PVVpFXCIgLT4gbW9kaWZpZXIgZW4gLy8gZGUgbGEgcG9zaXRpb24gZGUgQ2FybG9zICovXG4gICAgICByaWdodDogY2FsYyg4OHB4KjEuNSk7XG4gICAgICB6LWluZGV4OiAxOyB9XG4gICAgLnRhaWxsZUV0aXF1ZXR0ZSAubG9nb01pbm91emUgaW1nIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvKnBvc2l0aW9uIGRlIENhcmxvcyAtPiBtb2RpZmllciBlbiAvLyBkZSBsYSBwb3NpdGlvbiBkZSBcIkxBIE1JTk9VWkVcIiAqL1xuICAgICAgcmlnaHQ6IGNhbGMoMTc5cHgqMS41KTtcbiAgICAgIHotaW5kZXg6IDEwOyB9XG4gIC50YWlsbGVFdGlxdWV0dGUgI2JlZXJOYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICAgIC50YWlsbGVFdGlxdWV0dGUgI2JlZXJOYW1lIGgyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICBmb250LWZhbWlseTogXCJiZWVyTmFtZVwiO1xuICAgICAgLypUT0RPOiBET05ORVIgTEEgTUFJTiBTVVIgQ0VTIFZBTEVVUlMgREVQVUlTIElITSovXG4gICAgICBmb250LXNpemU6IGNhbGMoMjRweCoxLjUpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAvKlRPRE86IFZBUklBQklMSVNFUiBDRVMgVkFMRVVSUyBQT1VSIFJFU1BPTlNJVkUgQVZFQyBDQUxDIEVUIFRPVVQgKi9cbiAgICAgIHJpZ2h0OiAtNTBweDtcbiAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICB3aWR0aDogMjgwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnRhaWxsZUV0aXF1ZXR0ZSAuc2hhcGUge1xuICAgIHotaW5kZXg6IC05OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLnRhaWxsZUV0aXF1ZXR0ZSBwIHtcbiAgICBmb250LWZhbWlseTogXCJhdmVuaXJcIjtcbiAgICBoZWlnaHQ6IGNhbGMoOC41OWNtKjEuNSk7XG4gICAgd2lkdGg6IGNhbGMoNS4wM2NtKjEuNSk7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cbiAgLnRhaWxsZUV0aXF1ZXR0ZSAjdGV4dGVEZXNjcmlwdGlmICNpbmdyZWRpZW50cyAjYWxjICN3YXJuaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC50YWlsbGVFdGlxdWV0dGUgI3RleHRlRGVzY3JpcHRpZiB7XG4gICAgLypUZXh0ZSBkZXNjcmlwdGlmIC0gVE9ETzogdmFyaWFiaWxpc2VyIGxlcyB2YWxldXJzIGV0IHJlbmRyZSByZXNwb25zaXZlIHBhcmNlcXVlIGNhIHZhIHDDqXRlciBlbiBhdXRyZSBvcmllbnRhdGlvbiovIH1cbiAgICAudGFpbGxlRXRpcXVldHRlICN0ZXh0ZURlc2NyaXB0aWYgcCB7XG4gICAgICAvKlRleHRlIGRlc2NyaXB0aWYgcG9saWNlIGF2ZW5pciB0YWlsbGUgMTAuNSAqL1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTUlIDUlIDM1JSA1JTsgfVxuICAudGFpbGxlRXRpcXVldHRlICNpbmdyZWRpZW50cyBwIHtcbiAgICAvKkluZ3LDqWRpZW50cyBwb2xpY2UgYXZlbmlyIHRhaWxsZSA1ICAqL1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiA4MCUgNSUgMCUgNSU7IH1cbiAgLnRhaWxsZUV0aXF1ZXR0ZSAjYWxjIHAge1xuICAgIC8qICUgQWxjIDEyIGV0IGdyYXMgcG9saWNlIGF2ZW5pciB0YWlsbGUgMTIqL1xuICAgIGZvbnQtZmFtaWx5OiBcImF2ZW5pckJvbGRcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDcwJSA1JSAwJSA1JTsgfVxuICAudGFpbGxlRXRpcXVldHRlICN3YXJuaW5nIHAge1xuICAgIC8qIEF2ZXJ0aXNzZW1lbnQgYWJ1cyBkJ2FsY29vbCBwb2xpY2UgYXZlbmlyIHRhaWxsZSA0IGF2ZW5pciAgKi9cbiAgICBmb250LXNpemU6IDdweDtcbiAgICBwYWRkaW5nOiA5NyUgMiUgMCUgMyU7IH1cbiIsIi8qKlxuLyogVmFyaWFibGVzIGNvbnRlbmFudCB2YWxldXJzIHRhaWxsZSBkaWZmw6lyZW50cyBlbG10c1xuKi9cbi8qUGFnZSovXG4kcGFnZS13OiAyMWNtO1xuJHBhZ2UtaDogMjkuN2NtO1xuJHBhZ2UtbWFyZ2luOiAxLjI1Y207XG5cbi8qRmFjdGV1ciBiaWRvdWlsbGUsIHBvdXIgYXZvaXIgbGVzIMOpdGlxdWV0dGVzIGRlIGxhIGJvbm5lIHRhaWxsZSBzdXIgXG5sJ2ltcHJlc3Npb24gQTQgKi9cbiRiaWRvdWlsbGVGYWN0b3I6IDEuNTA7XG5cbi8qRXRpcXVldHRlKi9cbiRldGlxdWV0dGUtaDogY2FsYyg1LjAzY20qI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4kZXRpcXVldHRlLXc6IGNhbGMoOC41OWNtKiN7JGJpZG91aWxsZUZhY3Rvcn0pO1xuXG4vKk9wdGlvbiBkZSBsJ8OpdGlxdWV0dGUqL1xuICAgIC8qTWFyZ2UgZW50cmUgbGVzIMOpdGlxdWV0dGVzKi9cbiAgICAkbWFyZ2luLXZzLWV0aXF1ZXR0ZXM6IDVweDtcbiAgICAvKkZvbnQgTGEgTWlub3V6ZSovXG4gICAgJGZvbnQtTGFNaW5vdXplOiBcIm1pbm91emVGb250XCI7XG4gICAgJGZvbnQtc2l6ZS1MYU1pbm91emUgOmNhbGMoNjhweCojeyRiaWRvdWlsbGVGYWN0b3J9KSA7XG4gICAgJGZvbnQtYmVlck5hbWU6XCJiZWVyTmFtZVwiO1xuICAgICRmb250LXNpemUtYmVlck5hbWUgOiBjYWxjKDI0cHgqI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4gICAgLypQb3NpdGlvbiBkdSBsb2dvKi9cbiAgICAkcG9zLXRpdHJlOiBjYWxjKDg4cHgqI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4gICAgJHBvcy1jYXJsb3M6IGNhbGMoMTc5cHgqI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4gICAgLypGb250IHRleHRlICsgaW5ncsOpZGllbnMgKyBhbGMgKyB0eHRXYXJuaW5nKi9cbiAgICAkZm9udC10ZXh0ZTogXCJhdmVuaXJcIjtcbiAgICAkZm9udC10ZXh0ZS1ib2xkOiBcImF2ZW5pckJvbGRcIjtcbiAgICAkc2l6ZS10ZXh0ZS1kZXNjcmlwdGlmOiAxNnB4O1xuICAgICRzaXplLWluZ3JlZGllbnRzOiAxMHB4O1xuICAgICRzaXplLWFsYzogMjBweDtcbiAgICAkc2l6ZS13YXJuOiA3cHg7XG4iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdmFyaWFibGVzJztcblxuLyoqdGFpbGxlIGNvbnRlbmV1ciDDqXRpcXVldHRlOiBmYWl0IDguNTljbSBwYXIgNS4wM1xuLyogPT4gc29pdCA1OTQgbGFyZ2UgLyAxMDE1IGhhdXQgXG4qL1xuLnRhaWxsZUV0aXF1ZXR0ZXtcbiAgICB3aWR0aDokZXRpcXVldHRlLXc7XG4gICAgaGVpZ2h0OiRldGlxdWV0dGUtaDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAkbWFyZ2luLXZzLWV0aXF1ZXR0ZXM7XG4gICAgLmxvZ29NaW5vdXple1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOmluaGVyaXQ7XG4gICAgICAgIGhlaWdodDppbmhlcml0O1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtTGFNaW5vdXplO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGltZywgaDEge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1MYU1pbm91emU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvKnBvc2l0aW9uIGRlIFwiTEEgTUlOT1VaRVwiIC0+IG1vZGlmaWVyIGVuIC8vIGRlIGxhIHBvc2l0aW9uIGRlIENhcmxvcyAqL1xuICAgICAgICAgICAgcmlnaHQ6ICRwb3MtdGl0cmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvKnBvc2l0aW9uIGRlIENhcmxvcyAtPiBtb2RpZmllciBlbiAvLyBkZSBsYSBwb3NpdGlvbiBkZSBcIkxBIE1JTk9VWkVcIiAqL1xuICAgICAgICAgICAgcmlnaHQ6ICRwb3MtY2FybG9zO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2JlZXJOYW1le1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIGhlaWdodDppbmhlcml0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaDJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWJlZXJOYW1lO1xuICAgICAgICAgICAgLypUT0RPOiBET05ORVIgTEEgTUFJTiBTVVIgQ0VTIFZBTEVVUlMgREVQVUlTIElITSovXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmVlck5hbWU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIC8qVE9ETzogVkFSSUFCSUxJU0VSIENFUyBWQUxFVVJTIFBPVVIgUkVTUE9OU0lWRSBBVkVDIENBTEMgRVQgVE9VVCAqL1xuICAgIHJpZ2h0OiAtNTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNoYXBle1xuICAgICAgICB6LWluZGV4OiAtOTk5OTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDppbmhlcml0O1xuICAgICAgICBoZWlnaHQ6aW5oZXJpdDtcbiAgICB9XG5cbiAgICAvKlBhcnRpZSB2ZXJzbyovXG5cbiAgICAvKkNhcmFjdMOpcmlzdGlxdWVzIGfDqW7DqXJhbGVzIGRlcyB0ZXh0ZXMgKi9cbiAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXRleHRlO1xuICAgICAgICBoZWlnaHQ6JGV0aXF1ZXR0ZS13O1xuICAgICAgICB3aWR0aDokZXRpcXVldHRlLWg7XG4gICAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgICByaWdodDogMTAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIC8qZGl2IHBhcmVudGUgZHUgdGV4dGUqL1xuICAgICN0ZXh0ZURlc2NyaXB0aWYgI2luZ3JlZGllbnRzICNhbGMgI3dhcm5pbmd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6aW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OmluaGVyaXQ7XG4gICAgfVxuICAgICN0ZXh0ZURlc2NyaXB0aWZ7XG4gICAgICAgIC8qVGV4dGUgZGVzY3JpcHRpZiAtIFRPRE86IHZhcmlhYmlsaXNlciBsZXMgdmFsZXVycyBldCByZW5kcmUgcmVzcG9uc2l2ZSBwYXJjZXF1ZSBjYSB2YSBww6l0ZXIgZW4gYXV0cmUgb3JpZW50YXRpb24qL1xuICAgICAgICBwe1xuICAgICAgICAgICAgLypUZXh0ZSBkZXNjcmlwdGlmIHBvbGljZSBhdmVuaXIgdGFpbGxlIDEwLjUgKi9cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHNpemUtdGV4dGUtZGVzY3JpcHRpZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1JSA1JSAzNSUgNSU7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgI2luZ3JlZGllbnRze1xuICAgICAgICBwe1xuICAgICAgICAgICAgLypJbmdyw6lkaWVudHMgcG9saWNlIGF2ZW5pciB0YWlsbGUgNSAgKi9cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHNpemUtaW5ncmVkaWVudHM7XG4gICAgICAgICAgICBwYWRkaW5nOiA4MCUgNSUgMCUgNSU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2FsY3tcbiAgICAgICAgcHtcbiAgICAgICAgICAgIC8qICUgQWxjIDEyIGV0IGdyYXMgcG9saWNlIGF2ZW5pciB0YWlsbGUgMTIqL1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXRleHRlLWJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6ICRzaXplLWFsYztcbiAgICAgICAgICAgIHBhZGRpbmc6IDcwJSA1JSAwJSA1JTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICN3YXJuaW5ne1xuICAgICAgICBwe1xuICAgICAgICAgICAgLyogQXZlcnRpc3NlbWVudCBhYnVzIGQnYWxjb29sIHBvbGljZSBhdmVuaXIgdGFpbGxlIDQgYXZlbmlyICAqL1xuICAgICAgICAgICAgZm9udC1zaXplOiAkc2l6ZS13YXJuO1xuICAgICAgICAgICAgcGFkZGluZzogOTclIDIlIDAlIDMlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/etiquette/etiquette.component.ts":
/*!**************************************************!*\
  !*** ./src/app/etiquette/etiquette.component.ts ***!
  \**************************************************/
/*! exports provided: EtiquetteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetteComponent", function() { return EtiquetteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_etiquette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/etiquette */ "./src/app/model/etiquette.ts");
/* harmony import */ var _services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/etiquette-service/etiquette.service */ "./src/app/services/etiquette-service/etiquette.service.ts");




var EtiquetteComponent = /** @class */ (function () {
    function EtiquetteComponent(etiquetteService) {
        this.etiquetteService = etiquetteService;
        /**Etiquette */
        this.etiquette = new _model_etiquette__WEBPACK_IMPORTED_MODULE_2__["Etiquette"]();
    }
    EtiquetteComponent.prototype.ngOnInit = function () {
        /**Subscribe to changes to have an updated etiquette
         * si apercu alors on va chercher l'étiquette etiquette dans le
         * service - sinon on va chercher toPrint dans ce meme service
        */
        if (this.apercu) {
            console.log('subscribe à etiquette en construction');
            this.etiquetteEnConstruction();
        }
        else {
            this.etiquetteAImprimer();
        }
    };
    /**Subscibe à l'étiquette en construction */
    EtiquetteComponent.prototype.etiquetteEnConstruction = function () {
        var _this = this;
        this.etiquetteService.changeEtiquette.subscribe(function (val) {
            _this.etiquette = val;
            console.log("Réception d'une nouvelle étiquette dans le composant étiquette: " + JSON.stringify(_this.etiquette));
            /** Update de la couleur du texte */
            _this.changeTextColor(_this.etiquette._couleurLiseret);
        });
    };
    /**Subscibe à l'étiquette à imprimer */
    EtiquetteComponent.prototype.etiquetteAImprimer = function () {
        this.etiquette = this.etiquetteService.toPrint;
    };
    EtiquetteComponent.prototype.ngAfterViewInit = function () {
        /**Tourne l'aperçu dans le bon sens */
        if (this.apercu) {
            this.rotation();
        }
    };
    /** Change la couleur du texte */
    EtiquetteComponent.prototype.changeTextColor = function (newColor) {
        document.getElementById("beerName").style.color = newColor;
        document.getElementById("alc").style.color = newColor;
    };
    /** Tourne les étiquettes recto et verso de 90*/
    EtiquetteComponent.prototype.rotation = function () {
        document.getElementById('recto').style.transform = 'rotate(90deg)';
        document.getElementById('verso').style.transform = 'rotate(90deg)';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EtiquetteComponent.prototype, "apercu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EtiquetteComponent.prototype, "recto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EtiquetteComponent.prototype, "verso", void 0);
    EtiquetteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-etiquette',
            template: __webpack_require__(/*! ./etiquette.component.html */ "./src/app/etiquette/etiquette.component.html"),
            styles: [__webpack_require__(/*! ./etiquette.component.scss */ "./src/app/etiquette/etiquette.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_3__["EtiquetteService"]])
    ], EtiquetteComponent);
    return EtiquetteComponent;
}());



/***/ }),

/***/ "./src/app/etiquette/shape-etiquette/shape-etiquette.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/etiquette/shape-etiquette/shape-etiquette.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\n  <svg class=\"svg-content\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 515 304.00000000000006\">\n    <g>\n      <rect x=\"-1\" y=\"-1\" width=\"517\" height=\"306\" id=\"canvas_background\" fill=\"#ffffff\" />\n      <g id=\"canvasGrid\" display=\"none\">\n        <rect id=\"svg_1\" width=\"640\" height=\"480\" x=\"1\" y=\"1\" stroke-width=\"0\" fill=\"url(#gridpattern)\" />\n      </g>\n    </g>\n    <g>\n      <path class=\"svg_15\" d=\"m51.832708,2.168571l459.225511,0.5\" stroke-opacity=\"null\" stroke-linecap=\"undefined\"\n        stroke-linejoin=\"undefined\" stroke-width=\"5\" stroke=\"#000\" fill-opacity=\"null\" fill=\"none\" />\n      <path class=\"svg_16\" d=\"m50.196679,301.131465l459.81372,0\" stroke-opacity=\"null\" stroke-linecap=\"undefined\"\n        stroke-linejoin=\"undefined\" stroke-width=\"5\" stroke=\"#000\" fill-opacity=\"null\" fill=\"none\" />\n      <path class=\"svg_17\" d=\"m1.878523,250.708651l50.073521,51.014697\" stroke-opacity=\"null\" stroke-linecap=\"undefined\"\n        stroke-linejoin=\"undefined\" stroke-width=\"5\" stroke=\"#000\" fill-opacity=\"null\" fill=\"none\" />\n      <path class=\"svg_18\" d=\"m53.41176,2.103224l-51.470585,50.588232\"\n        transform=\"rotate(-0.35386937856674194 27.676469802853664,27.3972549438473) \" stroke-opacity=\"null\"\n        stroke-linecap=\"undefined\" stroke-linejoin=\"undefined\" stroke-width=\"5\" stroke=\"#000\" fill-opacity=\"null\"\n        fill=\"none\" />\n      <path class=\"svg_21\" d=\"m1.823527,51.206306l0.588235,201.176457\" stroke-opacity=\"null\" stroke-linecap=\"undefined\"\n        stroke-linejoin=\"undefined\" stroke-width=\"5\" stroke=\"#000\" fill-opacity=\"null\" fill=\"none\" />\n      <path stroke=\"#000\" class=\"svg_22\" d=\"m512.597794,0.160299l-0.294176,303.465462\" stroke-opacity=\"null\"\n        stroke-linecap=\"undefined\" stroke-linejoin=\"undefined\" stroke-width=\"5\" fill-opacity=\"null\" fill=\"none\" />\n    </g>\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/etiquette/shape-etiquette/shape-etiquette.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/etiquette/shape-etiquette/shape-etiquette.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V0aXF1ZXR0ZS9zaGFwZS1ldGlxdWV0dGUvc2hhcGUtZXRpcXVldHRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/etiquette/shape-etiquette/shape-etiquette.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/etiquette/shape-etiquette/shape-etiquette.component.ts ***!
  \************************************************************************/
/*! exports provided: ShapeEtiquetteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeEtiquetteComponent", function() { return ShapeEtiquetteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/etiquette-service/etiquette.service */ "./src/app/services/etiquette-service/etiquette.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var ShapeEtiquetteComponent = /** @class */ (function () {
    function ShapeEtiquetteComponent(etiquetteService) {
        this.etiquetteService = etiquetteService;
        /**Array contenant les ids des paths du svg pour
         * changement de couleur
         */
        this.paths = [".svg_15", ".svg_16", ".svg_17", ".svg_18", ".svg_21", ".svg_22"];
    }
    ShapeEtiquetteComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**Subscribe to changes to have an updated etiquette */
        this.etiquetteService.changeEtiquette.subscribe(function (val) {
            _this.couleurLiseret = val.couleurLiseret;
            console.log('réception nouvelle couleur' + _this.couleurLiseret);
            /** On applique la nouvelle couleur au svg */
            _this.newColortoPath(_this.couleurLiseret);
        });
    };
    /**jQuery pour appliquer une nouvelle couleur aux paths
     * du svg
     *
     * @param newColor la nouvelle couleur au format #hex
     *
     * TODO: attention le form permet d'envoyer une couleur rgba ca va péter si on en reçoit
     */
    ShapeEtiquetteComponent.prototype.newColortoPath = function (newColor) {
        /** On parcours la liste des paths pour leur appliquer
         *  la nouvelle couleur */
        for (var i = 0; i < this.paths.length; i++) {
            console.log('On aplique la couleur ' + this.couleurLiseret + ' au path numero ' + i);
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.paths[i]).attr('stroke', newColor);
        }
    };
    ShapeEtiquetteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shape-etiquette',
            template: __webpack_require__(/*! ./shape-etiquette.component.html */ "./src/app/etiquette/shape-etiquette/shape-etiquette.component.html"),
            styles: [__webpack_require__(/*! ./shape-etiquette.component.scss */ "./src/app/etiquette/shape-etiquette/shape-etiquette.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_2__["EtiquetteService"]])
    ], ShapeEtiquetteComponent);
    return ShapeEtiquetteComponent;
}());



/***/ }),

/***/ "./src/app/formulaire-etiquette/formulaire-etiquette.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/formulaire-etiquette/formulaire-etiquette.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Formulaire construction étiquette -->\n<div class=\"card m-3\">\n  <span class=\"card-header text-center\">Nouvelle étiquette</span>\n  <div class=\"card-body\">\n    <form [formGroup]=\"etiquetteForm\" (ngSubmit)=\"onSubmit()\">\n      <!--Première colone du form: Titre+Texte+Ingrédients-->\n      <div class=\"form-row\">\n        <!--Titre-->\n        <div class=\"form-group col-2\">\n          <label>Titre</label>\n          <input type=\"text\" formControlName=\"titre\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.titre.errors }\" />\n          <div *ngIf=\"submitted && f.titre.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.titre.errors.required\">Pas de titre !?</div>\n          </div>\n        </div>\n        <!--Texte descriptif-->\n        <div class=\"form-group col-5\">\n          <label>Texte descriptif</label>\n          <input type=\"text\" maxlength=\"200\" formControlName=\"texte\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.texte.errors }\" />\n          <div *ngIf=\"submitted && f.texte.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.texte.errors.required\">Pas de description !?</div>\n          </div>\n        </div>\n        <!--Ingrédients-->\n        <div class=\"form-group col-5\">\n          <label>Ingrédients</label>\n          <input type=\"text\" formControlName=\"ingredients\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.ingredients.errors }\" />\n          <div *ngIf=\"submitted && f.ingredients.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.ingredients.errors.required\">Pas d'ingrédients !?</div>\n          </div>\n        </div>\n      </div>\n      <!--Deuxième colone: %Alc + message avertissement-->\n      <div class=\"form-row d-flex justify-content-center\">\n        <!--%Alc-->\n        <div class=\"form-group col-4\">\n          <label>%Alc</label>\n          <input type=\"number\" formControlName=\"alc\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.alc.errors }\" />\n          <div *ngIf=\"submitted && f.alc.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.alc.errors.required\">Pas d'alcool !?!? </div>\n          </div>\n        </div>\n        <!--ModerationTxt-->\n        <div class=\"form-group col-4\">\n          <label>Message avertissement</label>\n          <input type=\"text\" formControlName=\"moderationTxt\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.moderationTxt.errors }\" />\n          <div *ngIf=\"submitted && f.moderationTxt.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.moderationTxt.errors.required\">Pas de modération !?</div>\n          </div>\n        </div>\n      </div>\n      <!--Troisième colone: couleur du liseret-->\n      <div class=\"form-row d-flex justify-content-center\">\n        <!--Couleur Liseret-->\n        <div class=\"form-group col-4 \">\n          <label>Couleur du liseret</label>\n          <input (colorPickerChange)=\"onChangeColor($event)\" [(colorPicker)]=\"color\" [style.background]=\"color\"\n            formControlName=\"couleurLiseret\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.couleurLiseret.errors }\" />\n          <div *ngIf=\"submitted && f.couleurLiseret.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.couleurLiseret.errors.required\">Pas de couleur !?</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button class=\"\">Générer l'étiquette !</button>\n        <button class=\"\" type=\"reset\" (click)=\"onReset()\">Réinitialiser le formulaire</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/formulaire-etiquette/formulaire-etiquette.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/formulaire-etiquette/formulaire-etiquette.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n/* Variables contenant valeurs taille différents elmts\n*/\n/*Page*/\n/*Facteur bidouille, pour avoir les étiquettes de la bonne taille sur \nl'impression A4 */\n/*Etiquette*/\n/*Option de l'étiquette*/\n/*Marge entre les étiquettes*/\n/*Font La Minouze*/\n/*Position du logo*/\n/*Font texte + ingrédiens + alc + txtWarning*/\n@font-face {\n  font-family: \"minouzeFont\";\n  src: url('BLASTIMO_SANS.ttf'); }\n@font-face {\n  font-family: \"beerName\";\n  src: url('COPPERPLATE.ttf'); }\n@font-face {\n  font-family: \"avenir\";\n  src: url('avenir.otf'); }\n@font-face {\n  font-family: \"avenirBold\";\n  src: url('avenirBold.ttf'); }\n#apercu {\n  width: 21cm;\n  height: 29.7cm;\n  border: 1px solid darkblue;\n  padding-bottom: 1.25cm;\n  padding-top: 1.25cm;\n  display: flex;\n  justify-content: center; }\n/* css tricks pour avoir la bordure ne biais \n/* Même forme polygone que div parent mais fond blanc\n/* un peu moins large pour faire apparaître le bkg-color\n/* qui fait la bordure.\n*/\n.logo {\n  transform: rotate(-90deg);\n  margin: 0 !important;\n  height: calc(5.03cm*1.5);\n  width: calc(5.03cm*1.5);\n  padding: 5px;\n  display: flex;\n  align-items: flex-end; }\n.logo span {\n    font-size: 60px;\n    vertical-align: bottom; }\n.shapesLigne {\n  margin-bottom: -60px; }\n.shapeEtiquette {\n  position: absolute; }\n.insideEtiquette {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYWlyZS1ldGlxdWV0dGUvZm9ybXVsYWlyZS1ldGlxdWV0dGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleGlzL0Rldi9NaW5vdXplRXRpcXVldHRlR2VuZXJhdG9yL3NyYy9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2FsZXhpcy9EZXYvTWlub3V6ZUV0aXF1ZXR0ZUdlbmVyYXRvci9zcmMvYXNzZXRzL19mb250cy5zY3NzIiwiL1VzZXJzL2FsZXhpcy9EZXYvTWlub3V6ZUV0aXF1ZXR0ZUdlbmVyYXRvci9zcmMvYXBwL2Zvcm11bGFpcmUtZXRpcXVldHRlL2Zvcm11bGFpcmUtZXRpcXVldHRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Q0RHQztBQ0FELE9BQUE7QUFLQTtpQkRGaUI7QUNNakIsWUFBQTtBQUlBLHdCQUFBO0FBQ0ksNkJBQUE7QUFFQSxrQkFBQTtBQUtBLG1CQUFBO0FBR0EsNkNBQUE7QUMzQko7RUFDQywwQkFBMEI7RUFDMUIsNkJBQThELEVBQUE7QUFHL0Q7RUFDQyx1QkFBdUI7RUFDdkIsMkJBQWlFLEVBQUE7QUFHbEU7RUFDQyxxQkFBcUI7RUFDckIsc0JBQWdELEVBQUE7QUFHakQ7RUFDQyx5QkFBeUI7RUFDekIsMEJBQW9ELEVBQUE7QUNickQ7RUFDSSxXRkRTO0VFRVQsY0ZEVztFRUVYLDBCQUEwQjtFQUMxQixzQkZGZ0I7RUVHaEIsbUJGSGdCO0VFSWhCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtBQUczQjs7OztDSDRCQztBR3ZCRDtFQUNJLHlCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsd0JGVDBDO0VFVTFDLHVCRlYwQztFRVcxQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFvQixFQUFBO0FBUHhCO0lBU1EsZUFBZTtJQUNmLHNCQUFzQixFQUFBO0FBRzlCO0VBQ0ksb0JBQW9CLEVBQUE7QUFFeEI7RUFDQSxrQkFBa0IsRUFBQTtBQUVsQjtFQUNBLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9ybXVsYWlyZS1ldGlxdWV0dGUvZm9ybXVsYWlyZS1ldGlxdWV0dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbi8qIFZhcmlhYmxlcyBjb250ZW5hbnQgdmFsZXVycyB0YWlsbGUgZGlmZsOpcmVudHMgZWxtdHNcbiovXG4vKlBhZ2UqL1xuLypGYWN0ZXVyIGJpZG91aWxsZSwgcG91ciBhdm9pciBsZXMgw6l0aXF1ZXR0ZXMgZGUgbGEgYm9ubmUgdGFpbGxlIHN1ciBcbmwnaW1wcmVzc2lvbiBBNCAqL1xuLypFdGlxdWV0dGUqL1xuLypPcHRpb24gZGUgbCfDqXRpcXVldHRlKi9cbi8qTWFyZ2UgZW50cmUgbGVzIMOpdGlxdWV0dGVzKi9cbi8qRm9udCBMYSBNaW5vdXplKi9cbi8qUG9zaXRpb24gZHUgbG9nbyovXG4vKkZvbnQgdGV4dGUgKyBpbmdyw6lkaWVucyArIGFsYyArIHR4dFdhcm5pbmcqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1pbm91emVGb250XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2JsYXN0aW1vX3NhbnMvQkxBU1RJTU9fU0FOUy50dGZcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJlZXJOYW1lXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2NvcHBlcnBsYXRlX2dvdGhpYy9DT1BQRVJQTEFURS50dGZcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImF2ZW5pclwiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9hdmVuaXIvYXZlbmlyLm90ZlwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiYXZlbmlyQm9sZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9hdmVuaXIvYXZlbmlyQm9sZC50dGZcIik7IH1cblxuI2FwZXJjdSB7XG4gIHdpZHRoOiAyMWNtO1xuICBoZWlnaHQ6IDI5LjdjbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWU7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1Y207XG4gIHBhZGRpbmctdG9wOiAxLjI1Y207XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qIGNzcyB0cmlja3MgcG91ciBhdm9pciBsYSBib3JkdXJlIG5lIGJpYWlzIFxuLyogTcOqbWUgZm9ybWUgcG9seWdvbmUgcXVlIGRpdiBwYXJlbnQgbWFpcyBmb25kIGJsYW5jXG4vKiB1biBwZXUgbW9pbnMgbGFyZ2UgcG91ciBmYWlyZSBhcHBhcmHDrnRyZSBsZSBia2ctY29sb3Jcbi8qIHF1aSBmYWl0IGxhIGJvcmR1cmUuXG4qL1xuLmxvZ28ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDUuMDNjbSoxLjUpO1xuICB3aWR0aDogY2FsYyg1LjAzY20qMS41KTtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgLmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cblxuLnNoYXBlc0xpZ25lIHtcbiAgbWFyZ2luLWJvdHRvbTogLTYwcHg7IH1cblxuLnNoYXBlRXRpcXVldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5pbnNpZGVFdGlxdWV0dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiIsIi8qKlxuLyogVmFyaWFibGVzIGNvbnRlbmFudCB2YWxldXJzIHRhaWxsZSBkaWZmw6lyZW50cyBlbG10c1xuKi9cbi8qUGFnZSovXG4kcGFnZS13OiAyMWNtO1xuJHBhZ2UtaDogMjkuN2NtO1xuJHBhZ2UtbWFyZ2luOiAxLjI1Y207XG5cbi8qRmFjdGV1ciBiaWRvdWlsbGUsIHBvdXIgYXZvaXIgbGVzIMOpdGlxdWV0dGVzIGRlIGxhIGJvbm5lIHRhaWxsZSBzdXIgXG5sJ2ltcHJlc3Npb24gQTQgKi9cbiRiaWRvdWlsbGVGYWN0b3I6IDEuNTA7XG5cbi8qRXRpcXVldHRlKi9cbiRldGlxdWV0dGUtaDogY2FsYyg1LjAzY20qI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4kZXRpcXVldHRlLXc6IGNhbGMoOC41OWNtKiN7JGJpZG91aWxsZUZhY3Rvcn0pO1xuXG4vKk9wdGlvbiBkZSBsJ8OpdGlxdWV0dGUqL1xuICAgIC8qTWFyZ2UgZW50cmUgbGVzIMOpdGlxdWV0dGVzKi9cbiAgICAkbWFyZ2luLXZzLWV0aXF1ZXR0ZXM6IDVweDtcbiAgICAvKkZvbnQgTGEgTWlub3V6ZSovXG4gICAgJGZvbnQtTGFNaW5vdXplOiBcIm1pbm91emVGb250XCI7XG4gICAgJGZvbnQtc2l6ZS1MYU1pbm91emUgOmNhbGMoNjhweCojeyRiaWRvdWlsbGVGYWN0b3J9KSA7XG4gICAgJGZvbnQtYmVlck5hbWU6XCJiZWVyTmFtZVwiO1xuICAgICRmb250LXNpemUtYmVlck5hbWUgOiBjYWxjKDI0cHgqI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4gICAgLypQb3NpdGlvbiBkdSBsb2dvKi9cbiAgICAkcG9zLXRpdHJlOiBjYWxjKDg4cHgqI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4gICAgJHBvcy1jYXJsb3M6IGNhbGMoMTc5cHgqI3skYmlkb3VpbGxlRmFjdG9yfSk7XG4gICAgLypGb250IHRleHRlICsgaW5ncsOpZGllbnMgKyBhbGMgKyB0eHRXYXJuaW5nKi9cbiAgICAkZm9udC10ZXh0ZTogXCJhdmVuaXJcIjtcbiAgICAkZm9udC10ZXh0ZS1ib2xkOiBcImF2ZW5pckJvbGRcIjtcbiAgICAkc2l6ZS10ZXh0ZS1kZXNjcmlwdGlmOiAxNnB4O1xuICAgICRzaXplLWluZ3JlZGllbnRzOiAxMHB4O1xuICAgICRzaXplLWFsYzogMjBweDtcbiAgICAkc2l6ZS13YXJuOiA3cHg7XG4iLCJAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwibWlub3V6ZUZvbnRcIjtcblx0c3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9ibGFzdGltb19zYW5zL0JMQVNUSU1PX1NBTlMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJiZWVyTmFtZVwiO1xuXHRzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2NvcHBlcnBsYXRlX2dvdGhpYy9DT1BQRVJQTEFURS50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcImF2ZW5pclwiO1xuXHRzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2F2ZW5pci9hdmVuaXIub3RmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJhdmVuaXJCb2xkXCI7XG5cdHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvYXZlbmlyL2F2ZW5pckJvbGQudHRmJyk7XG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvZm9udHMnO1xuXG4vL0FwZXLDp3Ugw6AgbCfDqWNoZWxsZSAxOiRkaXZpZGUtZmFjdG9yXG4jYXBlcmN1e1xuICAgIHdpZHRoOiAkcGFnZS13O1xuICAgIGhlaWdodDogJHBhZ2UtaDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZ2UtbWFyZ2luO1xuICAgIHBhZGRpbmctdG9wOiAkcGFnZS1tYXJnaW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogY3NzIHRyaWNrcyBwb3VyIGF2b2lyIGxhIGJvcmR1cmUgbmUgYmlhaXMgXG4vKiBNw6ptZSBmb3JtZSBwb2x5Z29uZSBxdWUgZGl2IHBhcmVudCBtYWlzIGZvbmQgYmxhbmNcbi8qIHVuIHBldSBtb2lucyBsYXJnZSBwb3VyIGZhaXJlIGFwcGFyYcOudHJlIGxlIGJrZy1jb2xvclxuLyogcXVpIGZhaXQgbGEgYm9yZHVyZS5cbiovXG4ubG9nb3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiRldGlxdWV0dGUtaDtcbiAgICB3aWR0aDogJGV0aXF1ZXR0ZS1oO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG59XG4uc2hhcGVzTGlnbmV7XG4gICAgbWFyZ2luLWJvdHRvbTogLTYwcHg7XG59XG4uc2hhcGVFdGlxdWV0dGV7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaW5zaWRlRXRpcXVldHRle1xucG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/formulaire-etiquette/formulaire-etiquette.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/formulaire-etiquette/formulaire-etiquette.component.ts ***!
  \************************************************************************/
/*! exports provided: FormulaireEtiquetteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireEtiquetteComponent", function() { return FormulaireEtiquetteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/etiquette-service/etiquette.service */ "./src/app/services/etiquette-service/etiquette.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_etiquette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/etiquette */ "./src/app/model/etiquette.ts");






var FormulaireEtiquetteComponent = /** @class */ (function () {
    function FormulaireEtiquetteComponent(fb, etiquetteService, router) {
        this.fb = fb;
        this.etiquetteService = etiquetteService;
        this.router = router;
        /** Dto étiquette */
        this.etiquette = new _model_etiquette__WEBPACK_IMPORTED_MODULE_5__["Etiquette"]();
        /**
         * Le formulaire de l'étiquette
         */
        this.etiquetteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            titre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            texte: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            alc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            moderationTxt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            couleurLiseret: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        /** Flag indiquant si le form est submit */
        this.submitted = false;
    }
    FormulaireEtiquetteComponent.prototype.ngOnInit = function () {
        /** Initialisation de l'objet form avec ses validateurs
         * Une étiquette a:
         *  -Le nom de la bière: titre
         *  -Un texte descriptif => texte
         *  -Des ingrédients  => ingredients
         *  -Un %alc  => alc
         *  -Un message avertissement => moderationTxt
         *  -Une couleur de liseret => couleurLiseret
         */
        this.etiquetteForm = this.fb.group({
            titre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            texte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ingredients: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            alc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            moderationTxt: [this.etiquette._texteAvertissement, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            couleurLiseret: ['#000000', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        //Subscribe to form changes to send new etiquette
        this.onChanges();
    };
    /**Émission de la nouvelle étiquette à chaque
     * changement du formulaire pour avoir aperçu
     */
    FormulaireEtiquetteComponent.prototype.onChanges = function () {
        var _this = this;
        this.etiquetteForm.valueChanges.subscribe(function (val) {
            _this.etiquetteService.mapFormToEtiquette(_this.etiquetteForm);
        });
    };
    Object.defineProperty(FormulaireEtiquetteComponent.prototype, "f", {
        // Permet d'accéder plus facilement aux inputs du formulaire
        get: function () { return this.etiquetteForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaireEtiquetteComponent.prototype, "formValue", {
        get: function () {
            return this.etiquetteForm.value;
        },
        enumerable: true,
        configurable: true
    });
    FormulaireEtiquetteComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submit : erreur = ' + this.etiquetteForm.invalid);
        // stop here if form is invalid
        if (!this.etiquetteForm.invalid) {
            var etiquetteId = this.saveEtiquette()._id;
            /**TODO: transformer ce save étiquette en promise pour gérer les erreurs ici */
            console.log('Étiquette sauvée: redirection ... id = ' + etiquetteId);
            this.router.navigateByUrl('/listeEtiquettes/' + etiquetteId);
        }
    };
    /** Enregistre l'étiquette en base après mapping
     * des valeurs du formulaire dans une étiquette */
    FormulaireEtiquetteComponent.prototype.saveEtiquette = function () {
        this.refreshEtiquette();
        return this.etiquetteService.saveEtiquette(this.etiquette);
    };
    /** Reset form values */
    FormulaireEtiquetteComponent.prototype.onReset = function () {
        this.submitted = false;
        this.etiquetteForm.reset();
    };
    /**
     * Set la couleur du liseret au changement de couleur de l'input
     * @param color envoyé automatiquement par l'évennement onPickerChange de l'input
     */
    FormulaireEtiquetteComponent.prototype.onChangeColor = function (color) {
        console.log(color);
        this.etiquetteForm.patchValue({ couleurLiseret: color });
    };
    /** Refresh stored étiquette in service */
    FormulaireEtiquetteComponent.prototype.refreshEtiquette = function () {
        this.etiquette = this.etiquetteService.mapFormToEtiquette(this.etiquetteForm);
    };
    FormulaireEtiquetteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulaire-etiquette',
            template: __webpack_require__(/*! ./formulaire-etiquette.component.html */ "./src/app/formulaire-etiquette/formulaire-etiquette.component.html"),
            styles: [__webpack_require__(/*! ./formulaire-etiquette.component.scss */ "./src/app/formulaire-etiquette/formulaire-etiquette.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_3__["EtiquetteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FormulaireEtiquetteComponent);
    return FormulaireEtiquetteComponent;
}());



/***/ }),

/***/ "./src/app/liste-etiquettes/liste-etiquettes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/liste-etiquettes/liste-etiquettes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encart *ngIf=\"isEncart\" [typeEncart]=\"typeEncart\" [texteEncart]=\"texteEncart\"></app-encart>\n<table>\n  <!-- En tête du tableau -->\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Nom</th>\n      <th>Aperçu</th>\n      <th>Impression</th>\n      <th></th>\n    </tr>\n  </thead>\n  <!-- Le corps du tableau -->\n  <tbody>\n    <!-- Une ligne du tableau -->\n    <tr *ngFor=\"let etiquette of listeEtiquettes; index as i;\">\n      <!-- Si on arrive sur cette page suite à la création d'une nouvelle étiquette:\n      alors l'id de cette étiquette est en url param et le chat qui tourne remplace\n      le numéro  -->\n      <div *ngIf=\"nouvelleEtiquette(etiquette); then thenBlock else elseBlock\"></div>\n      <ng-template #thenBlock>\n        <td class=\"newEtiquette\"><img src=\"../../assets/img/carlos1.png\" width=\"30\" height=\"30\"\n            class=\"d-inline-block align-top rotating\" alt=\"\"></td>\n      </ng-template>\n      <ng-template #elseBlock>\n        <td>{{i+1}}</td>\n      </ng-template>\n      <td>{{etiquette._titre}}</td>\n      <td>\n        <button (click)=\"apercu(etiquette)\" class=\"btn-primary\">Aperçu</button>\n      </td>\n      <td>\n        <button (click)=\"impression(etiquette)\" class=\"btn-secondary\">Imprimer</button>\n      </td>\n      <td id=\"boutonsModSup\">\n        <button (click)=\"modification(etiquette)\" class=\"btn-small btn-warning\">Modifier</button>\n        <button (click)=\"suppression(etiquette)\" class=\"btn-small btn-danger\">Supprimer</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/liste-etiquettes/liste-etiquettes.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/liste-etiquettes/liste-etiquettes.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#boutonsModSup {\n  vertical-align: middle;\n  text-align: center;\n  /*Bouton modifier*/\n  /*Bouton supprimer*/ }\n  #boutonsModSup .btn-warning {\n    margin-right: 5px;\n    font-size: 0.5em; }\n  #boutonsModSup .btn-danger {\n    margin-left: 5px;\n    font-size: 0.5em; }\n  .newEtiquette {\n  vertical-align: middle;\n  text-align: center; }\n  @-webkit-keyframes rotating /* Safari and Chrome */ {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n  @keyframes rotating {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n  .rotating {\n  -webkit-animation: rotating 900ms linear infinite;\n  animation: rotating 900ms linear infinite; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4aXMvRGV2L01pbm91emVFdGlxdWV0dGVHZW5lcmF0b3Ivc3JjL2FwcC9saXN0ZS1ldGlxdWV0dGVzL2xpc3RlLWV0aXF1ZXR0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFBO0VBS0EsbUJBQUEsRUFBb0I7RUFSeEI7SUFLQSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFOaEI7SUFVQSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFJaEI7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7RUFFdEI7RUFDSTtJQUdFLHVCQUF1QixFQUFBO0VBRXpCO0lBR0UseUJBQXlCLEVBQUEsRUFBQTtFQUc3QjtFQUNFO0lBS0UsdUJBQXVCLEVBQUE7RUFFekI7SUFLRSx5QkFBeUIsRUFBQSxFQUFBO0VBRzdCO0VBQ0UsaURBQWlEO0VBSWpELHlDQUF5QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdGUtZXRpcXVldHRlcy9saXN0ZS1ldGlxdWV0dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvdXRvbnNNb2RTdXB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLypCb3V0b24gbW9kaWZpZXIqL1xuLmJ0bi13YXJuaW5ne1xubWFyZ2luLXJpZ2h0OiA1cHg7XG5mb250LXNpemU6IDAuNWVtO1xufVxuICAgIC8qQm91dG9uIHN1cHByaW1lciovXG4uYnRuLWRhbmdlcntcbm1hcmdpbi1sZWZ0OiA1cHg7XG5mb250LXNpemU6IDAuNWVtO1xufVxufVxuXG4ubmV3RXRpcXVldHRle1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW5nIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovIHtcbiAgICBmcm9tIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyByb3RhdGluZyB7XG4gICAgZnJvbSB7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIC5yb3RhdGluZyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW5nIDkwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogcm90YXRpbmcgOTAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tcy1hbmltYXRpb246IHJvdGF0aW5nIDkwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtby1hbmltYXRpb246IHJvdGF0aW5nIDkwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHJvdGF0aW5nIDkwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/liste-etiquettes/liste-etiquettes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/liste-etiquettes/liste-etiquettes.component.ts ***!
  \****************************************************************/
/*! exports provided: ListeEtiquettesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeEtiquettesComponent", function() { return ListeEtiquettesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/etiquette-service/etiquette.service */ "./src/app/services/etiquette-service/etiquette.service.ts");
/* harmony import */ var _model_encart_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/encart-enum */ "./src/app/model/encart-enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ListeEtiquettesComponent = /** @class */ (function () {
    function ListeEtiquettesComponent(etiquetteService, route, router) {
        this.etiquetteService = etiquetteService;
        this.route = route;
        this.router = router;
        /** Affichage encart
         * type de l'encart défini par EncartEnum
         * flag isEncart pour l'afficher ou non
         * texte de l'encart
        */
        this.typeEncart = _model_encart_enum__WEBPACK_IMPORTED_MODULE_3__["EncartEnum"].NULL;
        /** Dans le cas de la création d'une nouvelle étiquette,
         * l'id de cette étiquette suite à la redirection lors de
         * sa création pour mise en surbrillance.
         */
        this.idNewEtiquette = 'null';
        this.idNewEtiquette = this.route.snapshot.paramMap.get('idNewEtiquette');
        console.log(this.idNewEtiquette + ' id nouvelle etiquette');
    }
    ListeEtiquettesComponent.prototype.ngOnInit = function () {
        this.refreshListe();
    };
    ListeEtiquettesComponent.prototype.ngAfterViewInit = function () {
        this.refreshListe();
    };
    /**Initialisation de la liste d'étiquette en faisant un fetchAll dans
     * la base
     */
    ListeEtiquettesComponent.prototype.refreshListe = function () {
        this.listeEtiquettes = this.etiquetteService.getAllEtiquettes();
    };
    ListeEtiquettesComponent.prototype.apercu = function (etiquette) {
        console.log("apercu()");
    };
    /**Stocke l'étiquette à imprimer dans le service étiquette pour construire
     * la planche
     */
    ListeEtiquettesComponent.prototype.impression = function (etiquette) {
        console.log("impression()");
        this.etiquetteService.toPrint = etiquette;
        console.log('etiquette à imprimer = ' + JSON.stringify(this.etiquetteService.toPrint));
        this.router.navigateByUrl('/impression');
    };
    ListeEtiquettesComponent.prototype.modification = function (etiquette) {
        console.log("modification()");
    };
    ListeEtiquettesComponent.prototype.suppression = function (etiquette) {
        var _this = this;
        console.log("suppression() de l'étiquette : " + etiquette._titre);
        var error = false;
        error = this.etiquetteService.removeEtiquette(etiquette._id);
        if (error) {
            this.isEncart = true;
            this.texteEncart = 'Erreur';
            this.typeEncart = _model_encart_enum__WEBPACK_IMPORTED_MODULE_3__["EncartEnum"].ERROR;
        }
        else {
            this.isEncart = true;
            this.texteEncart = 'Suppression effectuée';
            this.typeEncart = _model_encart_enum__WEBPACK_IMPORTED_MODULE_3__["EncartEnum"].SUCCESS;
            this.refreshListe();
        }
        setTimeout(function () { return _this.reinitEncartFactors(); }, 2000);
    };
    /**Réinitialise les valeurs de l'encart */
    ListeEtiquettesComponent.prototype.reinitEncartFactors = function () {
        this.isEncart = false;
        this.texteEncart = "";
        this.typeEncart = _model_encart_enum__WEBPACK_IMPORTED_MODULE_3__["EncartEnum"].NULL;
    };
    /** Affiche l'image pour la ligne correspondant à l'étiquette nouvellement créée */
    ListeEtiquettesComponent.prototype.nouvelleEtiquette = function (etiquette) {
        var result = false;
        if (etiquette._id === this.idNewEtiquette) {
            result = true;
        }
        return result;
    };
    ListeEtiquettesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liste-etiquettes',
            template: __webpack_require__(/*! ./liste-etiquettes.component.html */ "./src/app/liste-etiquettes/liste-etiquettes.component.html"),
            styles: [__webpack_require__(/*! ./liste-etiquettes.component.scss */ "./src/app/liste-etiquettes/liste-etiquettes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_etiquette_service_etiquette_service__WEBPACK_IMPORTED_MODULE_2__["EtiquetteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListeEtiquettesComponent);
    return ListeEtiquettesComponent;
}());



/***/ }),

/***/ "./src/app/model/encart-enum.ts":
/*!**************************************!*\
  !*** ./src/app/model/encart-enum.ts ***!
  \**************************************/
/*! exports provided: EncartEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncartEnum", function() { return EncartEnum; });
var EncartEnum;
(function (EncartEnum) {
    EncartEnum["SUCCESS"] = "SUCCESS";
    EncartEnum["WARNING"] = "WARNING";
    EncartEnum["ERROR"] = "ERROR";
    EncartEnum["NULL"] = "NULL";
})(EncartEnum || (EncartEnum = {}));


/***/ }),

/***/ "./src/app/model/etiquette.ts":
/*!************************************!*\
  !*** ./src/app/model/etiquette.ts ***!
  \************************************/
/*! exports provided: Etiquette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Etiquette", function() { return Etiquette; });
/** DTO étiquette */
var Etiquette = /** @class */ (function () {
    function Etiquette(id, titre, texte, ingredients, alc, texteAvertissement, couleurLiseret, dateCreation) {
        this.id = id;
        this.titre = titre;
        this.texte = texte;
        this.ingredients = ingredients;
        this.alc = alc;
        this.texteAvertissement = texteAvertissement;
        this.couleurLiseret = couleurLiseret;
        this.dateCreation = dateCreation;
        /**Message d'avertissement par défaut: TODO: A VARIABILISER */
        this.msg = 'L\'abus d\'alcool est dangereux pour la santé, à consommer avec modération.';
        this._texteAvertissement = this.msg;
    }
    Object.defineProperty(Etiquette.prototype, "_id", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_titre", {
        get: function () {
            return this.titre;
        },
        set: function (value) {
            this.titre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_texte", {
        get: function () {
            return this.texte;
        },
        set: function (value) {
            this.texte = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_ingredients", {
        get: function () {
            return this.ingredients;
        },
        set: function (value) {
            this.ingredients = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_texteAvertissement", {
        get: function () {
            return this.texteAvertissement;
        },
        set: function (value) {
            this.texteAvertissement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_couleurLiseret", {
        get: function () {
            return this.couleurLiseret;
        },
        set: function (value) {
            this.couleurLiseret = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_alc", {
        get: function () {
            return this.alc;
        },
        set: function (value) {
            this.alc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etiquette.prototype, "_dateCreation", {
        get: function () {
            return this.dateCreation;
        },
        set: function (value) {
            this.dateCreation = value;
        },
        enumerable: true,
        configurable: true
    });
    return Etiquette;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../assets/img/carlos1.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\">\n    Générateur d'étiquettes\n  </a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/formulaireEtiquette\"> Nouvelle<img\n            src=\"../../assets/img/label-svgrepo-com.svg\" width=\"15\" height=\"15\" class=\"d-inline-block align-top\" alt=\"\">\n          <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/listeEtiquettes\">Imprimer<img\n            src=\"../../assets/img/print-button-svgrepo-com.svg\" width=\"15\" height=\"15\" class=\"d-inline-block align-top\"\n            alt=\"\"></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/etiquette-service/etiquette.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/etiquette-service/etiquette.service.ts ***!
  \*****************************************************************/
/*! exports provided: EtiquetteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetteService", function() { return EtiquetteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_etiquette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/etiquette */ "./src/app/model/etiquette.ts");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_3__);





var EtiquetteService = /** @class */ (function () {
    function EtiquetteService() {
        /**Étiquette et son eventEmiter qui sert à
         * refresh l'étiquette à chaque changement
        */
        this.etiquette = new src_app_model_etiquette__WEBPACK_IMPORTED_MODULE_2__["Etiquette"]();
        this.changeEtiquette = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Store l'étiquette à imprimer (change à chaque click sur le
         * bouton imprimer dans la liste d'étiquette)*/
        this.toPrint = new src_app_model_etiquette__WEBPACK_IMPORTED_MODULE_2__["Etiquette"]();
    }
    /** Enregistre l'étiquette en base */
    EtiquetteService.prototype.saveEtiquette = function (etiquette) {
        /**id generation */
        etiquette._id = this.makeid();
        console.log('etiquette save id = ' + etiquette._id);
        /**Store object in db */
        localforage__WEBPACK_IMPORTED_MODULE_3__["setItem"](etiquette._id, etiquette).then(function () {
            console.log('etiquette saved in base : ' + JSON.stringify(etiquette));
        }).catch(function (err) {
            console.log('ERREUR setItem()' + err);
            // we got an error
        });
        return etiquette;
    };
    /**Fait un getAll de la base et push chaque Étiquette mappée
     * dans la liste d'étiquette retournée
     */
    EtiquetteService.prototype.getAllEtiquettes = function () {
        console.log('getAllEtiquettes()');
        /**Liste étiquette retour de base */
        var listeEtiquette = [];
        // Resulting key/value pair -- this callback
        // will be executed for every item in the
        // database.
        localforage__WEBPACK_IMPORTED_MODULE_3__["iterate"](function (value, key, iterationNumber) {
            /**Transformation du retour string de la base en objet étiquette
             * qui sera inséré dans la liste retournée:
            */
            var etiquetteTmp = new src_app_model_etiquette__WEBPACK_IMPORTED_MODULE_2__["Etiquette"]();
            Object.assign(etiquetteTmp, value);
            console.log('Résultat du assign ' + JSON.stringify(etiquetteTmp));
            listeEtiquette.push(etiquetteTmp);
        }).then(function () {
            console.log('Iteration has completed');
        }).catch(function (err) {
            // This code runs if there were any errors
            console.log(err);
        });
        return listeEtiquette;
    };
    /**Supprime une étiquette de la base
     * @param id l'id de l'étiquette
     * @returns un booléen qui indique si erreur ou non
     */
    EtiquetteService.prototype.removeEtiquette = function (key) {
        var error = false;
        /**Store object in db */
        localforage__WEBPACK_IMPORTED_MODULE_3__["removeItem"](key).then(function (value) {
            console.log('VALUE = ' + JSON.stringify(value));
            error = true;
            // we got our value
        }).catch(function (err) {
            console.log('ERREUR setItem()' + err);
            // we got an error
            error = true;
        });
        return error;
    };
    /** Fonction créant un id (presque) unique à la nouvelle entrée */
    EtiquetteService.prototype.makeid = function () {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 100; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    /** Fait le mapping entre le formulaire et un Dto étiquette
    * qui sera envoyé au service - émettre la nouvelle étiquette
    * à chaque fois pour avoir un aperçu à jour */
    EtiquetteService.prototype.mapFormToEtiquette = function (f) {
        /**Mapping */
        this.etiquette._alc = f.value['alc'];
        this.etiquette._titre = f.value['titre'];
        this.etiquette._texte = f.value['texte'];
        this.etiquette._ingredients = f.value['ingredients'];
        this.etiquette._texteAvertissement = f.value['moderationTxt'];
        this.etiquette._couleurLiseret = f.value['couleurLiseret'];
        /**Émission */
        this.refreshEtiquette();
        return this.etiquette;
    };
    /**Émission de l'étiquette en cours de construction
     * pour sa prévisualitation
    */
    EtiquetteService.prototype.refreshEtiquette = function () {
        console.log("Émission depuis service d'une étiquette mise à jour" + JSON.stringify(this.etiquette));
        this.changeEtiquette.emit(this.etiquette);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EtiquetteService.prototype, "changeEtiquette", void 0);
    EtiquetteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EtiquetteService);
    return EtiquetteService;
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

module.exports = __webpack_require__(/*! /Users/alexis/Dev/MinouzeEtiquetteGenerator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map