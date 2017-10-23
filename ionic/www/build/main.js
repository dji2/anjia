webpackJsonp([5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_houses_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HouseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HouseDetailPage = (function () {
    function HouseDetailPage(navCtrl, navParams, hoSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hoSer = hoSer;
    }
    HouseDetailPage.prototype.ionViewDidEnter = function () {
        var id = this.navParams.get('id');
        // this.house = this.hoSer.getHouseById(id);
        console.log(id);
    };
    HouseDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return HouseDetailPage;
}());
HouseDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-house-detail',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\house-detail\house-detail.html"*/'<!--\n  Generated template for the HouseDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button  (click)="back()">back</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\house-detail\house-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_houses_service__["a" /* HousesService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_houses_service__["a" /* HousesService */]])
], HouseDetailPage);

//# sourceMappingURL=house-detail.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MePage = (function () {
    function MePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MePage');
    };
    MePage.prototype.ionViewWillEnter = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__personal_personal__["a" /* PersonalPage */], { userId: 8675309 });
        profileModal.present();
        // this.navCtrl.push(PersonalPage);
    };
    return MePage;
}());
MePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-me',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\me\me.html"*/'<!--\n  Generated template for the MePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>me</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\me\me.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], MePage);

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    PersonalPage.prototype.back = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PersonalPage.prototype.toSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */]);
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="arrow-back" style="font-size: 30px; color:red;" (click)="back()"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label>个人中心</ion-label>\n      </ion-col>\n      <ion-col col-4 align-self-end>\n        <ion-icon name="more"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/marty-avatar.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n\n    <img src="img/advance-card-bttf.png">\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <ion-list>\n    <ion-item>\n        <ion-icon name="albums" item-start></ion-icon>\n          我的简历\n        <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n    <ion-item (click)="toSetting()">\n        <ion-icon name="settings" item-start></ion-icon>\n          设置\n        <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\personal\personal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.loginout = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.remove('token');
        });
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button color="danger" (click)="loginout()">Danger Clear</button>\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/house-detail/house-detail.module": [
		286,
		4
	],
	"../pages/login/login.module": [
		283,
		3
	],
	"../pages/me/me.module": [
		284,
		2
	],
	"../pages/personal/personal.module": [
		287,
		1
	],
	"../pages/setting/setting.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__house_detail_house_detail__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_houses_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, navParams, hoSer, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.hoSer = hoSer;
        this.toastCtrl = toastCtrl;
        this.imgs = ['1.jpg', '2.jpg', '3.jpg'];
        this.pageNum = 0;
        this.pageSize = 5;
        this.noMore = false;
    }
    HomePage.prototype.trackByHouses = function (index, house) { return house.houseId; };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.hoSer.getAllHouses().then(function (data) {
            _this.all_houses = data;
            _this.houses = _this.all_houses.slice(_this.pageNum * _this.pageSize, (_this.pageNum + 1) * _this.pageSize);
            _this.pageNum = _this.pageNum + 1;
        });
    };
    HomePage.prototype.slideChanged = function () {
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
        this.slides.startAutoplay();
    };
    HomePage.prototype.toDetail = function (house) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__house_detail_house_detail__["a" /* HouseDetailPage */], { 'id': house.id });
    };
    HomePage.prototype.showImg = function (img) {
        console.log(img);
    };
    HomePage.prototype.delete = function (houseId) {
        for (var i = 0; i < this.houses.length; i++) {
            if (houseId === this.houses[i].houseId) {
                this.houses.splice(i, 1);
            }
        }
    };
    //下拉刷新
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.hoSer.getAllHouses().then(function (data) {
                _this.all_houses = data;
                _this.houses = _this.all_houses.slice(0, (_this.pageNum) * _this.pageSize);
            });
            refresher.complete();
        }, 2000);
    };
    //上滑加载更多
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log(_this.all_houses);
                (_a = _this.houses).push.apply(_a, _this.all_houses.slice(_this.pageNum * _this.pageSize, (_this.pageNum + 1) * _this.pageSize));
                _this.pageNum = _this.pageNum + 1;
                if ((_this.all_houses.length / _this.pageSize) <= _this.pageNum - 1) {
                    _this.noMore = true;
                    infiniteScroll.enable(false);
                }
                // console.log(this.houses);
                resolve();
                var _a;
            }, 500);
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>苏州</ion-col>\n        <ion-col col-4>猎聘</ion-col>\n        <ion-col col-4 align-self-end>...</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-slides loop="true" autoplay="2000"  (ionSlideDidChange)="slideChanged()" #slides>\n    <ion-slide *ngFor="let item of imgs">\n      <img src="assets/images/{{item}}" alt="" (click)="showImg(item)">\n    </ion-slide>\n  </ion-slides>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="下拉刷新"\n      refreshingSpinner="circles"\n      refreshingText="小蜜正在为您加载哦...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item-sliding *ngFor="let house of houses;trackBy: trackByHouses">\n\n      <ion-item (click)="toDetail(house)">\n        <ion-avatar item-start>\n          <img src="http://owhah4u2f.bkt.clouddn.com/images/houses/{{house.houseId}}/1.jpg">\n        </ion-avatar>\n        <h2>{{house.houseName}}</h2>\n        <h3>{{house.areaName}}</h3>\n        <p>{{house.address}}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="delete(house.houseId)">Delete\n          <ion-icon name="delete"></ion-icon>\n\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <!--下拉加载-->\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite($event))">\n    <ion-infinite-scroll-content\n      oadingSpinner="bubbles"\n      loadingText="Loading more data...">\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-item *ngIf="noMore">\n    没有更多房源了哦~~\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_houses_service__["a" /* HousesService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_houses_service__["a" /* HousesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'http://115.159.104.128:3000/users';
    }
    UsersService.prototype.login = function (user) {
        return this.http.post(this.url + '/login', user).toPromise().then(function (data) { return data; });
    };
    // login(user,callback){
    //   this.http.post(this.url+'/login',user).subscribe(
    //     function (result) {
    //       callback(result);
    //     function (error) {
    //     },
    //       console.log(error.message);
    //     }
    //   )
    // }
    UsersService.prototype.getFocusHouses = function (user, callback) {
        this.http.post(this.url + '/getFocusHouses', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.getRecord = function (user, callback) {
        this.http.post(this.url + '/getRecord', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //获取看房信息（用户）
    UsersService.prototype.getMyRecord = function (user, callback) {
        this.http.post(this.url + '/getMyRecord', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //删除信息
    UsersService.prototype.delRecord = function (arrInfo, callback) {
        this.http.post(this.url + '/delRecord', arrInfo).subscribe(function (result) {
            console.log(result);
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //按照arrangeId删除信息
    UsersService.prototype.delRecordByarrId = function (arrInfo, callback) {
        this.http.post(this.url + '/delRecordByarrId', arrInfo).subscribe(function (result) {
            console.log(result);
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.getMyHouses = function (user, callback) {
        this.http.post(this.url + '/getMyHouses', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.register = function (user, callback) {
        this.http.post(this.url + '/regist', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.getCodeByphone = function (user, callback) {
        var that = this;
        // alert(that.url);
        /////////////////////////'/check'//////////////
        that.http.post(this.url + '/check', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.addUser = function () {
    };
    UsersService.prototype.getUserInfo = function (user, callback) {
        this.http.post(this.url + '/getUserInfo', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.editUser = function (user, callback) {
        this.http.post(this.url + '/editUser', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    UsersService.prototype.editPass = function (user, callback) {
        console.log(user);
        this.http.post(this.url + '/editPass', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_me_me__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_house_detail_house_detail__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_users_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_houses_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//service



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_me_me__["a" /* MePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_house_detail_house_detail__["a" /* HouseDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/me/me.module#MePageModule', name: 'MePage', segment: 'me', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/house-detail/house-detail.module#HouseDetailPageModule', name: 'HouseDetailPage', segment: 'house-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_me_me__["a" /* MePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_house_detail_house_detail__["a" /* HouseDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_houses_service__["a" /* HousesService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.ready().then(function () {
                _this.storage.get('token').then(function (val) {
                    console.log(val);
                    if (val) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                    }
                });
            });
            // let isLogin = this.storage.get('isLogin');
            // console.log(isLogin);
            // if(isLogin){
            //   this.rootPage = TabsPage;
            // }else{
            //   this.rootPage = LoginPage;
            // }
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\app\app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__me_me__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__me_me__["a" /* MePage */];
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        var id = this.navParams.get('userId');
        console.log(id);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\tabs\tabs.html"*/'<ion-tabs #rootTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Me" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, toastCtrl, 
        // private viewCtrl: ViewController,
        // private appCtrl: App,
        storage, userSer, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.userSer = userSer;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            telephone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)])]
        });
        this.username = this.loginForm.controls['telephone'];
        this.password = this.loginForm.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        var _this = this;
        this.userSer.login(user).then(function (result) {
            console.log(result);
            if (result) {
                if (result.stateCode === 1) {
                    _this.storage.ready().then(function () {
                        console.log(result);
                        _this.storage.set('userName', result.userName);
                        _this.storage.set('userId', result.userId);
                        _this.storage.set('token', result.token);
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '用户名或密码错误',
                        duration: 3000
                    });
                    toast.present();
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: '服务器异常',
                    duration: 3000
                });
                toast.present();
            }
        });
        //alert
        // let alert = this.alertCtrl.create({
        //   title: 'New Friend!',
        //   subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        //   buttons: ['OK']
        // });
        // alert.present();
        // let toast = this.toastCtrl.create({
        //   message: 'User was added successfully',
        //   duration: 3000
        // });
        // toast.present();
        // this.storage.set('isLogin', true);
        // this.storage.ready().then(() =>{
        //   this.storage.set('isLogin',true);
        // })
        //
        // this.navCtrl.push(TabsPage,{userId:'001'});
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\HTML5\ionic\liepin\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="login-title">\n        猎聘同道\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <form  [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)" novalidate>\n          <ion-item [class.error]="!username.valid && username.touched">\n            <ion-input type="tel" placeholder="请输入用户名"  [formControl]="username" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="username.hasError(\'required\') && username.touched" class="error-message">* 请输入用户名</ion-label>\n          <ion-label *ngIf="(username.hasError(\'minlength\')||username.hasError(\'maxlength\')||username.hasError(\'pattern\')) && username.touched" class="error-message">* 请输入正确的电话号码</ion-label>\n          <ion-item>\n            <ion-input type="password" placeholder="请输入密码"  [formControl]="password" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="password.hasError(\'required\') && password.touched" class="error-message">* 请输入密码</ion-label>\n          <ion-label *ngIf="(password.hasError(\'minlength\')) && password.touched" class="error-message">* 密码长度最少为六位</ion-label>\n          <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.valid">登录</button>\n        </form>\n\n      </ion-col>\n      <!--end form-->\n      <ion-col col-6>\n        <a href="#">忘记密码 ？</a>\n      </ion-col>\n      <ion-col col-6 style="text-align: right">\n        <a href="#">通过验证码登录</a>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n  <ion-footer >\n    <ion-toolbar style="background-color: white !important;">\n      <p style="text-align: center;">\n        没有账号 ？ <a href="#">立即注册</a>\n      </p>\n\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"E:\HTML5\ionic\liepin\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HousesService = (function () {
    function HousesService(http) {
        this.http = http;
        this.url = 'http://115.159.104.128:3000/houses';
    }
    //获取所有房源信息
    HousesService.prototype.getAllHouses = function () {
        return this.http.get(this.url).toPromise().then(function (data) { return data; });
        // this.http.get(this.url).subscribe(function (result) {
        //   callback(result);
        // })
    };
    HousesService.prototype.getHouseById = function (houseId) {
        // return this.getAllHouses(function (houses) {
        //   let ho=houses.filter(function (item,index) {
        //     if(item.houseId==houseId){
        //        item;
        //     }
        //   });
        //
        // })
    };
    HousesService.prototype.addHouse = function (user, callback) {
        this.http.post(this.url + '/addHouse', user).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //查询看房信息
    HousesService.prototype.getArrInfo = function (house, callback) {
        this.http.post(this.url + '/getArrInfo', house).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //修改看房信息
    HousesService.prototype.editHouse = function (house, callback) {
        this.http.post(this.url + '/editHouse', house).subscribe(function (result) {
            console.log(result);
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //业主同意看房
    HousesService.prototype.agreeWatch = function (arrange, callback) {
        this.http.post(this.url + '/agreeWatch', arrange).subscribe(function (result) {
            console.log(result);
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //添加看房信息
    HousesService.prototype.addArrInfo = function (arrInfo, callback) {
        this.http.post(this.url + '/addArrInfo', arrInfo).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //提出看房申请
    HousesService.prototype.askWatch = function (arrInfo, callback) {
        this.http.post(this.url + '/askWatch', arrInfo).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //是否看房申请
    HousesService.prototype.isAsk = function (arrInfo, callback) {
        this.http.post(this.url + '/isAsk', arrInfo).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //是否关注
    HousesService.prototype.isFocus = function (focusInfo, callback) {
        this.http.post(this.url + '/isFocus', focusInfo).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //关注
    HousesService.prototype.focus = function (focusInfo, callback) {
        this.http.post(this.url + '/focus', focusInfo).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //取消关注
    HousesService.prototype.unFocus = function (focusInfo, callback) {
        this.http.post(this.url + '/unFocus', focusInfo).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //删除我的房源
    HousesService.prototype.delHouse = function (houseInfo, callback) {
        this.http.post(this.url + '/delHouse', houseInfo).subscribe(function (result) {
            console.log("服务" + result[0]);
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    HousesService.prototype.agree = function (arrange, callback) {
        this.http.post(this.url + '/agree', arrange).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    HousesService.prototype.getFocusNum = function (houseid, callback) {
        this.http.post(this.url + '/getFocusNum', houseid).subscribe(function (result) {
            callback(result);
        }, function (error) {
            console.log(error.message);
        });
    };
    //获取头条信息
    HousesService.prototype.getNews = function (callback) {
        this.http.get(this.url + '/getNews').subscribe(function (result) {
            callback(result);
        });
    };
    //通过id获取头条信息
    HousesService.prototype.getNewsById = function (news, callback) {
        this.http.post(this.url + '/getNewsById', news).subscribe(function (result) {
            callback(result);
        });
    };
    return HousesService;
}());
HousesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], HousesService);

//# sourceMappingURL=houses.service.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map