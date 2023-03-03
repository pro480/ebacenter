"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 7920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useFirebase)
/* harmony export */ });
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1401);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192);
/* harmony import */ var _react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9239);
/* harmony import */ var _react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__]);
([_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useFirebase(path, queryKey) {
    const converter = {
        toFirestore (data) {
            return data;
        },
        fromFirestore: (snap, options)=>snap.data(options)
    };
    const collectionRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, path).withConverter(converter);
    const collectionQuery = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.useFirestoreQuery)([
        ...queryKey
    ], collectionRef, {
        subscribe: true
    });
    const deleteDocument = (docID)=>{
        const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, path, docID);
        (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(docRef).then(()=>{
            console.log("문서 삭제!");
        }).catch((error)=>{
            console.log(error);
        });
    };
    return {
        converter,
        collectionRef,
        collectionQuery,
        deleteDocument
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;