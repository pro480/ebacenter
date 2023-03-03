"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_common_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4781);
/* harmony import */ var _src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_common_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__]);
([_src_components_common_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.RecoilRoot, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* .AuthProvider */ .H, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
                    client: queryClient,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ languageState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const languageState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "languageState",
    default: false
});


/***/ }),

/***/ 4060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5150);





function Banner() {
    const path = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative mb-6 flex text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-fit w-full bg-black/50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative -z-10 flex h-48 md:h-60 lg:h-64 desktop:h-72",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `/images/banner/${firstDepth}Banner.jpg`,
                        layout: "fill",
                        objectFit: "cover",
                        objectPosition: "center",
                        alt: "로고",
                        priority: true,
                        quality: 75
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR-500 pb-3 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl",
                children: (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_4__/* .getSecondDepthTitle_EN */ .SO)(secondDepth)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 8579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/logo/logo_text_KR.png
/* harmony default export */ const logo_text_KR = ({"src":"/_next/static/media/logo_text_KR.efaa2622.png","height":151,"width":1895,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEX+/v7+/v7+/v7SsgwHAAAAA3RSTlNIPVJrcmDAAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAEUlEQVR4nGNgYGBgYGRgYgQAABIABa/wN2kAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./public/images/logo/logo_symbol_text_KR.png
/* harmony default export */ const logo_symbol_text_KR = ({"src":"/_next/static/media/logo_symbol_text_KR.c883f3be.png","height":519,"width":370,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAMFBMVEVMaXEBZ7QAY7EBZ7NiodAAYbEBZ7QBZrMAZrN3rdYAY7IAY7IAZrMAZrM9i8UAZrNrs5OBAAAAEHRSTlMAR5E2TnplUiZCw7QWqHMK5lyJFAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAC9JREFUeJwFwYUBADAIwLDizP//dgnU0oat9qSxpI6BnJkAvYHKMBHmCg3Fh/u4HxtWAP6EYUGFAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/logo_inha_symbol_blue.png
/* harmony default export */ const logo_inha_symbol_blue = ({"src":"/_next/static/media/logo_inha_symbol_blue.dc7fd906.png","height":190,"width":191,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXS4fDe6fQodLk/gsDK3O5MaXGWut22z+eCrta70+limcymxOHX5fKhwuCKstgweLszerzH2u32+Pzk7PZu905kAAAAEXRSTlP+/f4k6AD7rSXu/qzn/v39/YKCT7wAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAA9SURBVHicBcGJAcAgCACxU0FA7QPdf9cm6LAIG4pLtpbh7GwJuTk153XXQWr1vkow5vtMDI8PCEfdRMz1B0rSAgGI3PvEAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/common/Layout/Footer.tsx







function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-full flex-col items-center bg-GRAY_COLOR-900 text-GRAY_COLOR-200 xl:flex-wrap xl:text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative flex h-16 w-80 items-center justify-center sm:w-96 xl:hidden ",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo_text_KR,
                    objectFit: "contain",
                    objectPosition: "center",
                    alt: "로고"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "xl:border-b-1 flex w-full border border-gray-500 xl:w-1/3 xl:border-l-0 xl:border-r-0 xl:border-t-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-1 justify-center border-r border-gray-500 py-3 xl:border-r-0 xl:py-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/notice/recruit",
                            children: "연구원 모집"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-1 items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/location/location",
                            children: "찾아오는 길"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-y-2 gap-x-14 py-4 text-sm font-medium text-white xl:w-full xl:gap-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheon 22212, KOREA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Tel: +82-32-860-7873"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Mail: yong21c@gmail.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "basis-full text-center text-GRAY_COLOR-300",
                        children: "Copyright(C) 2022 by EBA Center.ALL RIGHTS RESERVED"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute right-12 hidden h-40 w-28 items-center xl:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo_symbol_text_KR,
                    objectFit: "contain",
                    objectPosition: "center",
                    alt: "로고"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute left-12 flex hidden h-40 w-32 items-center xl:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo_inha_symbol_blue,
                    objectFit: "contain",
                    objectPosition: "center",
                    alt: "로고"
                })
            })
        ]
    });
}
/* harmony default export */ const Layout_Footer = (Footer);


/***/ }),

/***/ 5691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2771);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3276);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_images_logo_logo_EN_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4989);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5150);
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4558);
/* harmony import */ var _public_locales_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5872);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _atoms_languageAtom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6265);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__, _public_locales_i18n__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__, _public_locales_i18n__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Header() {
    const { user , logout  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { 0: openHeader , 1: setOpenHeader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isEnglish, setIsEnglish] = (0,recoil__WEBPACK_IMPORTED_MODULE_12__.useRecoilState)(_atoms_languageAtom__WEBPACK_IMPORTED_MODULE_13__/* .languageState */ .b);
    const changeLanguage = (lang)=>{
        _public_locales_i18n__WEBPACK_IMPORTED_MODULE_11__/* ["default"].changeLanguage */ .Z.changeLanguage(lang);
    // sessionStorage.clear()
    // x        sessionStorage.setItem("isEnglish", isEnglish.toString())
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        sessionStorage.setItem("isEnglish", isEnglish.toString());
    }, [
        isEnglish
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sessionStorage.getItem("isEnglish") === "true") {
            // setIsEnglish(true);
            _public_locales_i18n__WEBPACK_IMPORTED_MODULE_11__/* ["default"].changeLanguage */ .Z.changeLanguage("en");
        } else if (sessionStorage.getItem("isEnglish") === "false") {
            _public_locales_i18n__WEBPACK_IMPORTED_MODULE_11__/* ["default"].changeLanguage */ .Z.changeLanguage("ko");
        // setIsEnglish(false);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "border-b px-2 md:h-[200px] md:px-2 desktop:h-[100px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col-reverse justify-center md:h-[100px] md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-20 border-t p-3 md:h-full md:w-96 md:border-none desktop:w-[500px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative block h-full cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: _public_images_logo_logo_EN_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        layout: "fill",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                        alt: "로고",
                                        priority: true
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col-reverse md:flex-row-reverse desktop:w-full desktop:flex-row desktop:items-center desktop:justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                    className: "absolute top-[100px] left-0 hidden h-[100px] justify-around border-t md:flex md:w-full desktop:static desktop:px-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            subMap: _utils_Utils__WEBPACK_IMPORTED_MODULE_9__/* .info */ .um
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            subMap: _utils_Utils__WEBPACK_IMPORTED_MODULE_9__/* .research */ .KK
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            subMap: _utils_Utils__WEBPACK_IMPORTED_MODULE_9__/* .major */ .cb
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            subMap: _utils_Utils__WEBPACK_IMPORTED_MODULE_9__/* .data */ .aT
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            subMap: _utils_Utils__WEBPACK_IMPORTED_MODULE_9__/* .notice */ .Iv
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-PRIMARY_FONT_COLOR flex h-12 items-center px-3 desktop:w-[500px] desktop:justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            // href='https://github.com/pro480/yong-web'
                                            rel: "noopener noreferrer",
                                            className: "mr-5 hover:scale-110",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImGithub, {
                                                size: "24"
                                            })
                                        }),
                                        isEnglish ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "fonts mr-5 hover:scale-110",
                                            onClick: ()=>{
                                                changeLanguage("ko");
                                                setIsEnglish(false);
                                            },
                                            children: "한글(KO)"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "fonts mr-5 hover:scale-110",
                                            onClick: ()=>{
                                                changeLanguage("en");
                                                setIsEnglish(true);
                                            },
                                            children: "영문(EN)"
                                        }),
                                        user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: logout,
                                            className: "mr-5 hidden hover:scale-110 md:flex",
                                            children: "Logout"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/Users/I/Desktop/ebacenter/pages/adminLogin",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "mr-5 hidden hover:scale-110 md:flex",
                                                children: "ADMIN"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Bars3CenterLeftIcon, {
                                            className: "ml-auto h-8 cursor-pointer hover:scale-110 desktop:ml-0",
                                            onClick: ()=>setOpenHeader((prev)=>!prev)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileHeader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                openHeader: openHeader,
                setOpenHeader: setOpenHeader
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Header));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_HeaderMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@heroicons/react/24/solid"
var solid_ = __webpack_require__(8802);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/logo/logo_white.png
/* harmony default export */ const logo_white = ({"src":"/_next/static/media/logo_white.7b59d575.png","height":151,"width":370,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAC3RSTlPER2YveoOhbgWri4TxT2QAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAAiSURBVHicBcGBAQAgCMOwbkxA/z/YhJKO1gWXMXp0O8nwAQRLAFfxU7rsAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/atoms/languageAtom.ts
var languageAtom = __webpack_require__(6265);
;// CONCATENATED MODULE: ./src/components/common/Layout/HeaderMenu.tsx









function HeaderMenu({ subMap  }) {
    const { 0: dropdownOpen , 1: setDropdownOpen  } = (0,external_react_.useState)(false);
    const showMenu = ()=>{
        setDropdownOpen(true);
        document.addEventListener("click", closeMenu);
    };
    const closeMenu = ()=>{
        setDropdownOpen(false);
        document.removeEventListener("click", closeMenu);
    };
    const language = (0,external_recoil_.useRecoilValue)(languageAtom/* languageState */.b);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex h-full items-center text-lg font-semibold hover:text-PRIMARY_COLOR-500 xl:text-xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: subMap.subMenu[0].href,
                    children: language ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onMouseOver: showMenu,
                        onMouseOut: closeMenu,
                        className: "group relative flex h-full w-full cursor-pointer items-center justify-center px-8 xl:px-12",
                        children: [
                            subMap.title_EN,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "absolute bottom-0 left-1/2 -z-50 flex h-1.5 w-0 -translate-x-1/2 content-center justify-center bg-PRIMARY_COLOR-500 group-hover:w-12 group-hover:transition-all"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onMouseOver: showMenu,
                        onMouseOut: closeMenu,
                        className: "group relative flex h-full w-full cursor-pointer items-center justify-center px-8 xl:px-12",
                        children: [
                            subMap.title_KO,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "absolute bottom-0 left-1/2 -z-50 flex h-1.5 w-0 -translate-x-1/2 content-center justify-center bg-PRIMARY_COLOR-500 group-hover:w-12 group-hover:transition-all"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onMouseOver: showMenu,
                onMouseOut: closeMenu,
                className: `absolute left-0 z-10 flex overflow-hidden w-full justify-between border-b-PRIMARY_COLOR-500 ${dropdownOpen ? "max-h-screen min-h-[350px] border-b-2" : "max-h-0"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "flex w-1/4 flex-col items-center justify-center border-t border-t-PRIMARY_COLOR-500 bg-PRIMARY_COLOR-500 text-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex h-52 flex-col items-center justify-around xl:h-60",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative w-44 xl:w-56",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo_white,
                                        objectFit: "contain"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.MinusIcon, {
                                            className: "h-10 xl:h-12"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.MinusIcon, {
                                            className: "h-10 text-white/70 xl:h-12 "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.MinusIcon, {
                                            className: "h-10 text-white/20 xl:h-12"
                                        })
                                    ]
                                }),
                                language ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-2xl font-bold 2xl:text-3xl",
                                    children: subMap.title_EN
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-2xl font-bold 2xl:text-3xl",
                                    children: subMap.title_KO
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "grid flex-1 gap-x-4 md:gap-x-8 xl:gap-x-12 xl:grid-cols-4 grid-cols-3 justify-start justify-items-stretch gap-y-6 border-t bg-white py-10 px-10 xl:gap-y-10 xl:py-20 xl:px-20",
                        children: subMap.subMenu.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "text-sm xl:text-base",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.href,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "z-20 flex w-full cursor-pointer justify-between border p-3 shadow-lg hover:scale-105 hover:font-semibold hover:text-PRIMARY_COLOR-500",
                                            children: [
                                                language ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    onClick: closeMenu,
                                                    className: "",
                                                    children: item.title_EN
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    onClick: closeMenu,
                                                    className: "",
                                                    children: item.title_KO
                                                }),
                                                item.subMenu.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronDownIcon, {
                                                    className: "h-6 text-PRIMARY_COLOR-500"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "bg-SUBMENU_COLOR border-r border-b border-l bg-opacity-50 text-sm",
                                        children: item.subMenu?.map((subMenu, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: " py-1 xl:px-4 pl-3 before:mr-2 before:text-PRIMARY_COLOR-500 before:content-['\\2022'] xl:py-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: subMenu.href,
                                                    children: language ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "cursor-pointer hover:font-semibold hover:text-PRIMARY_COLOR-500",
                                                        onClick: ()=>setDropdownOpen(false),
                                                        children: subMenu.title_EN
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "cursor-pointer hover:font-semibold hover:text-PRIMARY_COLOR-500",
                                                        onClick: ()=>setDropdownOpen(false),
                                                        children: subMenu.title_KO
                                                    })
                                                })
                                            }, index))
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Layout_HeaderMenu = (HeaderMenu);


/***/ }),

/***/ 4781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5691);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8579);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5797);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4060);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);
_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Layout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const SIDEBAR_HIDDEN = [
        "/",
        "/adminLogin"
    ];
    return SIDEBAR_HIDDEN.includes(router.pathname) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Banner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "mx-auto mb-32 flex min-h-[800px] max-w-[1536px] flex-col 2xl:flex-row 2xl:items-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full p-10 md:px-20 md:py-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageTitle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            children
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Layout));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_MobileHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/logo/logo_text_tag_EN.png
/* harmony default export */ const logo_text_tag_EN = ({"src":"/_next/static/media/logo_text_tag_EN.568726c9.png","height":782,"width":1480,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAALVBMVEUAQHEAZ7YAaLYADxsAZrQAZbIAZbIAaLcAZbIAZrQAZbIAZbEAJEAAZLEAZ7VbF+iCAAAAD3RSTlNEZ3QMhUDIoS26S6kjT5XLd+DPAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nBXChw0AMAgDsATC6vj/3aqW0SsUzkbuNM4VqmgmDg4c/wMMcwCUt+3RKQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
// EXTERNAL MODULE: ./src/utils/Utils.ts
var Utils = __webpack_require__(5150);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "usehooks-ts"
const external_usehooks_ts_namespaceObject = require("usehooks-ts");
;// CONCATENATED MODULE: ./src/components/common/Layout/MobileHeaderMenu.tsx





function MobileHeaderMenu({ subMap  }) {
    const { 0: dropdownOpen , 1: setDropdownOpen  } = (0,external_react_.useState)(false);
    const menuRef = (0,external_react_.useRef)(null);
    const handleClickOutside = ()=>{
        // Your custom logic here
        setDropdownOpen(false);
    };
    const handleClickInside = ()=>{
    // Your custom logic here
    };
    (0,external_usehooks_ts_namespaceObject.useOnClickOutside)(menuRef, handleClickOutside);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between border-b px-6 text-base font-semibold hover:text-PRIMARY_COLOR-500",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: subMap.subMenu[0].href,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "group relative flex h-full cursor-pointer items-center py-4 pr-12 text-lg",
                            children: subMap.title_KO
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.PlusIcon, {
                        className: `h-7 cursor-pointer text-GRAY_COLOR-800 ${dropdownOpen && "rotate-45"} transition-all duration-500`,
                        onClick: ()=>setDropdownOpen((prev)=>!prev)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: `left-0 z-10  flex w-full flex-col  justify-between overflow-hidden border-t border-b-PRIMARY_COLOR-500 bg-GRAY_COLOR-200/30 transition-all duration-500 ease-in-out  ${dropdownOpen ? "max-h-screen" : "max-h-0"}`,
                children: subMap.subMenu.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.href,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "flex w-full cursor-pointer justify-between p-3 hover:font-semibold hover:text-PRIMARY_COLOR-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "",
                                children: item.title_KO
                            })
                        })
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const Layout_MobileHeaderMenu = (MobileHeaderMenu);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/common/Layout/MobileHeader.tsx








function MobileHeader({ setOpenHeader , openHeader  }) {
    const { 0: dropdownOpen , 1: setDropdownOpen  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const showMenu = ()=>{
        setDropdownOpen(true);
        document.addEventListener("click", closeMenu);
    };
    const closeMenu = ()=>{
        setDropdownOpen(false);
        document.removeEventListener("click", closeMenu);
    };
    (0,external_react_.useEffect)(()=>{
        setOpenHeader(false);
    }, [
        router.pathname
    ]);
    (0,external_react_.useEffect)(()=>{
        document.body.style.cssText = `
      position: ${openHeader && "fixed"}; 
      top: -${window.scrollY}px;
      overflow-y : scroll;
      width: 100%;`;
        return ()=>{
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, [
        openHeader
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `absolute h-full ${openHeader ? "w-full" : "w-0 overflow-hidden"} z-50 bg-black/30`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `absolute right-0 top-0 z-50 flex h-[calc(100vh-200px)] overflow-y-scroll scrollbar-hide desktop:h-[calc(100vh-100px)] ${openHeader ? "w-96" : "w-0"} overflow-y flex-col bg-white transition-all duration-300 ease-linear`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex h-fit justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-36 p-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo_text_tag_EN,
                                objectFit: "contain"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.XMarkIcon, {
                            onClick: ()=>setOpenHeader(false),
                            className: "bg h-20 cursor-pointer bg-PRIMARY_COLOR-600 p-3 text-white"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout_MobileHeaderMenu, {
                    subMap: Utils/* info */.um
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout_MobileHeaderMenu, {
                    subMap: Utils/* research */.KK
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout_MobileHeaderMenu, {
                    subMap: Utils/* major */.cb
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout_MobileHeaderMenu, {
                    subMap: Utils/* data */.aT
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout_MobileHeaderMenu, {
                    subMap: Utils/* notice */.Iv
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1"
                })
            ]
        })
    });
}
/* harmony default export */ const Layout_MobileHeader = (MobileHeader);


/***/ }),

/***/ 7466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_PageTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/24/solid"
var solid_ = __webpack_require__(8802);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/Utils.ts
var Utils = __webpack_require__(5150);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
;// CONCATENATED MODULE: ./src/components/common/Layout/PageTitleComponent.tsx




function PageTitleComponent({ title , active , href  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronDoubleRightIcon, {
                className: "h-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `${active && "font-bold text-PRIMARY_COLOR-500 underline underline-offset-8"} cursor-pointer whitespace-nowrap`,
                    children: title
                })
            })
        ]
    });
}
/* harmony default export */ const Layout_PageTitleComponent = (PageTitleComponent);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/atoms/languageAtom.ts
var languageAtom = __webpack_require__(6265);
;// CONCATENATED MODULE: ./src/components/common/Layout/PageTitle.tsx









function PageTitle() {
    const language = (0,external_recoil_.useRecoilValue)(languageAtom/* languageState */.b);
    const path = (0,router_.useRouter)().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;
    const converter = {
        info: Utils/* info */.um,
        data: Utils/* data */.aT,
        research: Utils/* research */.KK,
        major: Utils/* major */.cb,
        notice: Utils/* notice */.Iv,
        location: location
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-10 flex h-32 flex-col justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: language ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-3xl font-bold text-PRIMARY_COLOR-500",
                    children: (0,Utils/* getSecondDepthTitle_EN */.SO)(secondDepth)
                }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-3xl font-bold text-PRIMARY_COLOR-500",
                    children: (0,Utils/* getSecondDepthTitle_KO */.Ej)(secondDepth)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-x-1 border-y py-3 text-xs xs:text-sm sm:gap-x-2 sm:text-base md:gap-x-3 md:text-lg ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.HomeIcon, {
                            className: "h-4 cursor-pointer text-PRIMARY_COLOR-500"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "cursor-pointer",
                            children: "HOME"
                        })
                    }),
                    path.map((item, index)=>{
                        if (index === 1) {
                            // @ts-ignore
                            // @ts-ignore
                            return /*#__PURE__*/ jsx_runtime_.jsx(Layout_PageTitleComponent, {
                                href: converter[firstDepth].href,
                                active: path.length - 1 === index,
                                title: (0,Utils/* getFirstDepthTitle_KO */.Hg)(item)
                            }, index);
                        } else if (index === 2) {
                            return /*#__PURE__*/ jsx_runtime_.jsx(Layout_PageTitleComponent, {
                                href: `/${firstDepth}/${secondDepth}`,
                                active: path.length - 1 === index,
                                title: (0,Utils/* getSecondDepthTitle_KO */.Ej)(item)
                            }, index);
                        } else if (index === 3) {
                            return /*#__PURE__*/ jsx_runtime_.jsx(Layout_PageTitleComponent, {
                                href: `/${firstDepth}/${secondDepth}/${thirdDepth}`,
                                active: path.length - 1 === index,
                                title: (0,Utils/* getThirdDepthTitle_KO */.my)(item)
                            }, index);
                        }
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Layout_PageTitle = (PageTitle);


/***/ }),

/***/ 5797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
// EXTERNAL MODULE: external "@heroicons/react/24/solid"
var solid_ = __webpack_require__(8802);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/atoms/languageAtom.ts
var languageAtom = __webpack_require__(6265);
;// CONCATENATED MODULE: ./src/components/common/Layout/SidebarMenu.tsx








function SideBarMenu({ subMenu  }) {
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const language = (0,external_recoil_.useRecoilValue)(languageAtom/* languageState */.b);
    const handleClickInside = ()=>{
        setIsOpen(!isOpen);
    };
    (0,external_react_.useEffect)(()=>{
        setIsOpen(false);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        children: [
            subMenu.subMenu.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "group flex h-14 cursor-pointer items-center justify-between px-3 font-semibold transition transition-colors delay-75 ease-in-out hover:bg-PRIMARY_COLOR-50",
                onClick: handleClickInside,
                children: [
                    language ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: subMenu.title_EN
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: subMenu.title_KO
                    }),
                    isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronUpIcon, {
                        className: "h-5 text-PRIMARY_COLOR-500 transition"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronDownIcon, {
                        className: "h-5 text-PRIMARY_COLOR-500 transition group-hover:-rotate-90"
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: subMenu.href,
                children: language ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex h-14 cursor-pointer items-center justify-between px-3 font-semibold transition transition-colors hover:bg-PRIMARY_COLOR-50",
                    children: subMenu.title_EN
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex h-14 cursor-pointer items-center justify-between px-3 font-semibold transition transition-colors hover:bg-PRIMARY_COLOR-50",
                    children: subMenu.title_KO
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "flex w-full border-t"
            }),
            isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex flex-col gap-y-2 bg-white p-5 text-sm font-semibold text-GRAY_COLOR-500",
                        children: subMenu.subMenu.map((subMenu, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: subMenu.href,
                                children: language ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "cursor-pointer before:mr-2 before:content-['\\2022'] hover:text-PRIMARY_COLOR-500",
                                    children: subMenu.title_EN
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "cursor-pointer before:mr-2 before:content-['\\2022'] hover:text-PRIMARY_COLOR-500",
                                    children: subMenu.title_KO
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "flex w-full border-b"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const SidebarMenu = (SideBarMenu);

// EXTERNAL MODULE: ./src/utils/Utils.ts
var Utils = __webpack_require__(5150);
;// CONCATENATED MODULE: ./public/images/logo/symbol_outline_quarter.png
/* harmony default export */ const symbol_outline_quarter = ({"src":"/_next/static/media/symbol_outline_quarter.d351d24c.png","height":151,"width":151,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEX////////////////1pQ5zAAAABHRSTlMcAxEpunGLmAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAACpJREFUeJwdi0EOADAQRDD//3OzvSGBagBabFCBxDl+hO3yaCj7g4Ln+gAKrgBKzD1AvAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/common/Layout/Sidebar.tsx










function Sidebar() {
    const { 0: currentMenu , 1: setCurrentMenu  } = (0,external_react_.useState)();
    const path = (0,router_.useRouter)().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;
    const { 0: menuOpen , 1: setMenuOpen  } = (0,external_react_.useState)(false);
    const { 0: isWide , 1: setIsWide  } = (0,external_react_.useState)(false);
    const language = (0,external_recoil_.useRecoilValue)(languageAtom/* languageState */.b);
    (0,external_react_.useEffect)(()=>{
        const handleScreen = ()=>{
            if (window.innerWidth > 1536) {
                setIsWide(true);
                setMenuOpen(true);
            } else {
                setIsWide(false);
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleScreen);
        if (window.innerWidth > 1536) {
            setIsWide(true);
        } else {
            setIsWide(false);
        }
        return ()=>{
            window.removeEventListener("resize", handleScreen);
        };
    }, []);
    (0,external_react_.useLayoutEffect)(()=>{
        if (firstDepth === "info") {
            setCurrentMenu(Utils/* info */.um);
        } else if (firstDepth === "research") {
            setCurrentMenu(Utils/* research */.KK);
        } else if (firstDepth === "major") {
            setCurrentMenu(Utils/* major */.cb);
        } else if (firstDepth === "data") {
            setCurrentMenu(Utils/* data */.aT);
        } else if (firstDepth === "notice") {
            setCurrentMenu(Utils/* notice */.Iv);
        } else if (firstDepth === "location") {
            setCurrentMenu(Utils/* location */.xh);
        }
    }, [
        firstDepth
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative mt-3 flex flex-col justify-center px-4 2xl:mt-0 2xl:w-[300px]",
        children: [
            language ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>setMenuOpen(!menuOpen),
                className: "relative flex w-full items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 py-3 text-2xl text-white 2xl:h-36 ",
                children: [
                    currentMenu?.title_EN,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute bottom-0 right-0 h-20 w-20",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: symbol_outline_quarter
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>setMenuOpen(!menuOpen),
                className: "relative flex w-full items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 py-3 text-2xl text-white 2xl:h-36 ",
                children: [
                    currentMenu?.title_KO,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute bottom-0 right-0 h-20 w-20",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: symbol_outline_quarter
                        })
                    })
                ]
            }),
            isWide ? null : menuOpen ? /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowUpCircleIcon, {
                className: "absolute right-8 top-3.5 inline-block h-6 text-white"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowDownCircleIcon, {
                className: "absolute right-8 top-3.5 inline-block h-6 text-white"
            }),
            (menuOpen || isWide) && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "flex flex-col border-l border-b border-r",
                children: currentMenu?.subMenu.map((subMenu, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarMenu, {
                        subMenu: subMenu
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const Layout_Sidebar = (/*#__PURE__*/(0,external_react_.memo)(Sidebar));


/***/ }),

/***/ 5150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ej": () => (/* binding */ getSecondDepthTitle_KO),
/* harmony export */   "Hg": () => (/* binding */ getFirstDepthTitle_KO),
/* harmony export */   "Iv": () => (/* binding */ notice),
/* harmony export */   "KK": () => (/* binding */ research),
/* harmony export */   "SO": () => (/* binding */ getSecondDepthTitle_EN),
/* harmony export */   "aT": () => (/* binding */ data),
/* harmony export */   "cb": () => (/* binding */ major),
/* harmony export */   "my": () => (/* binding */ getThirdDepthTitle_KO),
/* harmony export */   "um": () => (/* binding */ info),
/* harmony export */   "xh": () => (/* binding */ location)
/* harmony export */ });
/* unused harmony export getSecondDepthDescription_KO */
function getFirstDepthTitle_KO(path) {
    switch(path){
        case "info":
            return "센터 소개";
        case "research":
            return "연구 및 사업";
        case "major":
            return "전공 소개";
        case "data":
            return "자료실";
        case "notice":
            return "공지사항";
        case "location":
            return "오시는 길";
        default:
            return "상세 게시판";
    }
}
function getSecondDepthTitle_EN(path) {
    switch(path){
        case "gallery":
            return "Gallery";
        case "open_data":
            return "Open Data";
        case "paper":
            return "Paper & Report";
        case "study_material":
            return "Learning materials";
        case "organization":
            return "Organization";
        case "center_history":
            return "Center History";
        case "center_info":
            return "Center Info";
        case "center_member":
            return "Center Member";
        case "center_vision":
            return "Center Vision";
        case "main_task":
            return "Main Task";
        case "alumni":
            return "Alumni Member";
        case "career":
            return "Career After Graduation";
        case "edu_evaluation":
            return "Education Evaluation";
        case "edu_measurement":
            return "Education Measurement";
        case "edudata_science":
            return "Edudata Science";
        case "center_news":
            return "Center News";
        case "event_news":
            return "Event News";
        case "qna":
            return "Q & A";
        case "recruit":
            return "Researcher Recruitment";
        case "business":
            return "Research & Projects";
        case "mou_list":
            return "MOU Institution";
        case "location":
            return "Location";
        default:
            return "General Forum";
    }
}
function getSecondDepthTitle_KO(path) {
    switch(path){
        case "gallery":
            return "갤러리";
        case "open_data":
            return "오픈 데이터";
        case "paper":
            return "논문 및 연구보고서";
        case "study_material":
            return "학습 자료";
        case "organization":
            return "조직도";
        case "center_history":
            return "센터 연혁";
        case "center_info":
            return "센터장 소개";
        case "center_member":
            return "센터 멤버";
        case "center_vision":
            return "센터 비전";
        case "main_task":
            return "주요 업무";
        case "alumni":
            return "동문";
        case "career":
            return "졸업 후 진로";
        case "edu_evaluation":
            return "교육평가";
        case "edu_measurement":
            return "교육측정";
        case "edudata_science":
            return "에듀데이터사이언스";
        case "center_news":
            return "센터 소식";
        case "event_news":
            return "행사 소식";
        case "qna":
            return "Q & A";
        case "recruit":
            return "연구원 모집";
        case "business":
            return "연구 및 사업";
        case "mou_list":
            return "MOU 기관";
        case "location":
            return "오시는 길";
        default:
            return "상세 게시판";
    }
}
function getSecondDepthDescription_KO(path) {
    switch(path){
        case "gallery":
            return "메뉴에 대한 설명을 입력해주세요";
        case "open_data":
            return "메뉴에 대한 설명을 입력해주세요";
        case "paper":
            return "메뉴에 대한 설명을 입력해주세요";
        case "study_material":
            return "메뉴에 대한 설명을 입력해주세요";
        case "organization":
            return "메뉴에 대한 설명을 입력해주세요";
        case "center_history":
            return "메뉴에 대한 설명을 입력해주세요";
        case "center_info":
            return "메뉴에 대한 설명을 입력해주세요";
        case "center_member":
            return "메뉴에 대한 설명을 입력해주세요";
        case "center_vision":
            return "메뉴에 대한 설명을 입력해주세요";
        case "main_task":
            return "메뉴에 대한 설명을 입력해주세요";
        case "alumni":
            return "메뉴에 대한 설명을 입력해주세요";
        case "career":
            return "메뉴에 대한 설명을 입력해주세요";
        case "edu_evaluation":
            return "메뉴에 대한 설명을 입력해주세요";
        case "edu_measurement":
            return "메뉴에 대한 설명을 입력해주세요";
        case "edudata_science":
            return "메뉴에 대한 설명을 입력해주세요";
        case "center_news":
            return "메뉴에 대한 설명을 입력해주세요";
        case "event_news":
            return "메뉴에 대한 설명을 입력해주세요";
        case "qna":
            return "메뉴에 대한 설명을 입력해주세요";
        case "recruit":
            return "메뉴에 대한 설명을 입력해주세요";
        case "business":
            return "메뉴에 대한 설명을 입력해주세요";
        case "mou_list":
            return "메뉴에 대한 설명을 입력해주세요";
        case "location":
            return "메뉴에 대한 설명을 입력해주세요";
        default:
            return "메뉴에 대한 설명을 입력해주세요";
    }
}
function getThirdDepthTitle_KO(path) {
    switch(path){
        case "engineer":
            return "센터 연구원";
        case "ethics":
            return "연구 윤리 자문단";
        case "network":
            return "연구협력 네트워크";
        case "org_chart":
            return "조직도";
        case "research":
            return "연구 자문단";
        default:
            return "목록에 없는 케이스입니다";
    }
}
const info = {
    title_KO: "센터 소개",
    title_EN: "Center Info",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/info/center_info",
    subMenu: [
        {
            title_KO: "센터장 소개",
            title_EN: "CenterLeader",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_info"
        },
        {
            title_KO: "센터 비전",
            title_EN: "Center Career",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_vision"
        },
        {
            title_KO: "주요 수행 업무",
            title_EN: "Main Business",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/main_task"
        },
        {
            title_KO: "센터 조직",
            title_EN: "Center Organization",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/info/organization/org_chart",
            subMenu: [
                {
                    title_KO: "조직도",
                    title_EN: "Organization Chart",
                    description: "메뉴에 대한 설명을 써주세요",
                    href: "/info/organization/org_chart"
                },
                {
                    title_KO: "연구협력 네트워크",
                    title_EN: "Research Collaboration Network",
                    description: "메뉴에 대한 설명을 써주세요",
                    href: "/info/organization/network"
                },
                {
                    title_KO: "연구 자문단",
                    title_EN: "Research Advisory Group",
                    description: "메뉴에 대한 설명을 써주세요",
                    href: "/info/organization/research"
                },
                {
                    title_KO: "연구 윤리 자문단",
                    title_EN: "Research Ethics Advisory Group",
                    description: "메뉴에 대한 설명을 써주세요",
                    href: "/info/organization/ethics"
                },
                {
                    title_KO: "센터 연구원",
                    title_EN: "Center Research Engineer",
                    description: "메뉴에 대한 설명을 써주세요",
                    href: "/info/organization/engineer"
                }, 
            ]
        },
        {
            title_KO: "센터 연혁",
            title_EN: "Center History",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_history"
        },
        {
            title_KO: "센터 구성원",
            title_EN: "Center Member",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_member"
        }, 
    ]
};
const research = {
    title_KO: "연구 및 사업",
    title_EN: "Research & Projects",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/research/business",
    subMenu: [
        {
            title_KO: "연구 및 사업",
            title_EN: "Research & Projects",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/research/business"
        },
        {
            title_KO: "MOU 기관",
            title_EN: "MOU",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/research/mou_list"
        }, 
    ]
};
const major = {
    title_KO: "전공 소개",
    title_EN: "Major Info",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/major/edudata_science",
    subMenu: [
        {
            title_KO: "에듀데이터사이언스",
            title_EN: "Edudata Science",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/edudata_science"
        },
        {
            title_KO: "교육측정",
            title_EN: "Educational Measurement",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/edu_measurement"
        },
        {
            title_KO: "교육평가",
            title_EN: "Educational Evaluation",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/edu_evaluation"
        },
        {
            title_KO: "졸업 후 진로",
            title_EN: "After Graduation",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/career"
        },
        {
            title_KO: "동문",
            title_EN: "Alumni",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/alumni"
        }, 
    ]
};
const data = {
    title_KO: "자료실",
    title_EN: "Center Data",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/data/paper",
    subMenu: [
        {
            title_KO: "논문 및 연구 보고서",
            title_EN: "Paper & Report",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/paper"
        },
        {
            title_KO: "오픈 데이터",
            title_EN: "Open Data Source",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/open_data"
        },
        {
            title_KO: "학습 자료",
            title_EN: "Learning materials",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/study_material"
        },
        {
            title_KO: "갤러리",
            title_EN: "Gallery",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/gallery"
        }, 
    ]
};
const notice = {
    title_KO: "공지사항",
    title_EN: "Notice",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/notice/center_news",
    subMenu: [
        {
            title_KO: "센터 소식",
            title_EN: "Center News",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/center_news"
        },
        {
            title_KO: "행사 소식",
            title_EN: "Event News",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/event_news"
        },
        {
            title_KO: "Q&A",
            title_EN: "Q&A",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/qna"
        },
        {
            title_KO: "연구원 모집",
            title_EN: "Researcher Recruitment",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/recruit"
        }, 
    ]
};
const location = {
    title_KO: "오시는 길",
    title_EN: "Location",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/location/location",
    subMenu: [
        {
            title_KO: "오시는 길",
            title_EN: "Location",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/location/location"
        }, 
    ]
};


/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = import("@firebase/auth");;

/***/ }),

/***/ 1401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 5421:
/***/ ((module) => {

module.exports = import("@firebase/storage");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,676,664,192,276,190], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();