"use strict";
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5421);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need




// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvATSTU-FTx9K02XAbiLYdKC_1oFnNYnk",
    authDomain: "yongsang-web.firebaseapp.com",
    projectId: "yongsang-web",
    storageBucket: "yongsang-web.appspot.com",
    messagingSenderId: "818038973517",
    appId: "1:818038973517:web:a275933025111047656804",
    measurementId: "G-7NRXRVTSPZ"
};
// Initialize Firebase
const app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
const storage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (app)));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;