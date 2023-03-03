"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 3276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    user: null,
    signIn: async ()=>{},
    error: null,
    loading: false,
    logout: async ()=>{}
});
const AuthProvider = ({ children  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: initialLoading , 1: setInitialLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // Persisting the user
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, (user)=>{
            if (user) {
                setUser(user);
                setLoading(false);
            }
            setInitialLoading(false);
        }), [
        _firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8
    ]);
    const signIn = async (email, password)=>{
        setLoading(true);
        await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, email, password).then((userCredential)=>{
            setUser(userCredential.user);
            router.push("/");
            setLoading(false);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    const logout = async ()=>{
        setLoading(true);
        (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8).then(()=>{
            setUser(null);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            user,
            signIn,
            loading,
            error,
            logout
        }), [
        user,
        loading
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: memoedValue,
        children: !initialLoading && children
    });
};
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;