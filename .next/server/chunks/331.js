"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 5054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ NewsTableContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewsTableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5870);
/* harmony import */ var _NewsTableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5151);
/* harmony import */ var _NewsTableToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3599);
/* harmony import */ var _hooks_useFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7920);
/* harmony import */ var _NewsTableButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsTableHeader__WEBPACK_IMPORTED_MODULE_2__, _NewsTableBody__WEBPACK_IMPORTED_MODULE_3__, _NewsTableToggle__WEBPACK_IMPORTED_MODULE_4__, _hooks_useFirebase__WEBPACK_IMPORTED_MODULE_5__, _NewsTableButton__WEBPACK_IMPORTED_MODULE_6__]);
([_NewsTableHeader__WEBPACK_IMPORTED_MODULE_2__, _NewsTableBody__WEBPACK_IMPORTED_MODULE_3__, _NewsTableToggle__WEBPACK_IMPORTED_MODULE_4__, _hooks_useFirebase__WEBPACK_IMPORTED_MODULE_5__, _NewsTableButton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const NewsTableContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function NewsTable({ news  }) {
    const { collectionRef , collectionQuery , deleteDocument  } = (0,_hooks_useFirebase__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(news, [
        news
    ]);
    const { 0: isEditing , 1: setIsEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedNews , 1: setSelectedNews  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedDocId , 1: setSelectedDocId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: newsList , 1: setNewsList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(collectionQuery.data?.docs);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        const newnewsList = collectionQuery.data?.docs.filter((docSnapshot)=>docSnapshot.data().news = news);
        setNewsList(newnewsList);
    }, [
        collectionQuery.isSuccess
    ]);
    const { 0: pageNumber , 1: setPageNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const value = {
        isEditing,
        setIsEditing,
        selectedNews,
        collectionRef,
        collectionQuery,
        selectedDocId,
        setSelectedNews,
        setSelectedDocId,
        deleteDocument,
        pageNumber,
        setPageNumber,
        newsList
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NewsTableContext.Provider, {
        value: value,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full table-auto border-t border-t-black",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableBody__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        news: news,
                        newsList: newsList
                    })
                ]
            }),
            isEditing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableToggle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                news: news
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableButton__WEBPACK_IMPORTED_MODULE_6__/* .NewsTablePageButton */ .wJ, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NewsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5054);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3276);
/* harmony import */ var _NewsTableButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3331);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsTable__WEBPACK_IMPORTED_MODULE_3__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__, _NewsTableButton__WEBPACK_IMPORTED_MODULE_5__]);
([_NewsTable__WEBPACK_IMPORTED_MODULE_3__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__, _NewsTableButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function NewsTableBody({ news , newsList  }) {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { pageNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_3__/* .NewsTableContext */ .a);
    const pageOffset = (Number(pageNumber) - 1) * 10;
    let No = pageOffset;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        className: "text-sm font-light text-gray-600",
        children: newsList?.sort((a, b)=>Number(b.data().createdAt) - Number(a.data().createdAt)).slice((Number(pageNumber) - 1) * 10, (Number(pageNumber) - 1) * 10 + 10).map((docSnapshot, index)=>{
            const data = docSnapshot.data();
            No = No + 1;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: "border-b border-gray-200 text-xs hover:bg-gray-100 sm:text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-center",
                        children: No
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: {
                            pathname: `/notice/${news}${No}`,
                            query: {
                                title: data.title,
                                type: data.news,
                                writer: data.writer,
                                createdAt: moment__WEBPACK_IMPORTED_MODULE_7___default()(data.createdAt.slice(0, 8)).format("YYYY-MM-DD"),
                                fileUrl: data.fileUrl,
                                content: data.content
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                            className: "cursor-pointer text-center hover:scale-105",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "font-bold",
                                    children: data.title
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-center",
                        children: data.writer
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "text-right",
                        children: [
                            data.createdAt.slice(0, 4),
                            "-",
                            data.createdAt.slice(4, 6),
                            "-",
                            data.createdAt.slice(6, 8)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "relative flex items-center text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex h-12 w-full items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "flex hover:underline hover:underline-offset-2",
                                    href: data.fileUrl,
                                    children: data.fileUrl == "empty" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImFileText2, {
                                        className: "ml-2 cursor-pointer hover:scale-110",
                                        size: 20
                                    })
                                })
                            }),
                            user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-15 absolute right-2 hidden text-sm lg:flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableButton__WEBPACK_IMPORTED_MODULE_5__/* .NewsTableUpdateButton */ .zq, {
                                        data: data,
                                        docID: docSnapshot.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableButton__WEBPACK_IMPORTED_MODULE_5__/* .NewsTableDeleteButton */ ._5, {
                                        docID: docSnapshot.id
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, docSnapshot.id);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsTableBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nd": () => (/* binding */ NewsTableCancelButton),
/* harmony export */   "Yg": () => (/* binding */ NewsTableAddButton),
/* harmony export */   "_5": () => (/* binding */ NewsTableDeleteButton),
/* harmony export */   "wJ": () => (/* binding */ NewsTablePageButton),
/* harmony export */   "zq": () => (/* binding */ NewsTableUpdateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5054);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsTable__WEBPACK_IMPORTED_MODULE_2__]);
_NewsTable__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function NewsTableAddButton() {
    const { setIsEditing , isEditing , setSelectedNews  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_2__/* .NewsTableContext */ .a);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "absolute right-3 top-1/2 hidden -translate-y-1/2 border bg-gray-100 p-1 lg:flex",
        onClick: ()=>{
            setIsEditing((prev)=>!prev);
            isEditing ? setSelectedNews(null) : null;
        },
        children: isEditing ? "취소" : "추가"
    });
}
function NewsTableUpdateButton({ data , docID  }) {
    const { setIsEditing , setSelectedNews , setSelectedDocId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_2__/* .NewsTableContext */ .a);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "border bg-white p-1",
        onClick: ()=>{
            setIsEditing(false);
            setSelectedNews({
                ...data
            });
            setSelectedDocId(docID);
            setIsEditing(true);
        },
        children: "수정"
    });
}
function NewsTableDeleteButton({ docID  }) {
    const { deleteDocument  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_2__/* .NewsTableContext */ .a);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "border bg-white p-0.5",
        onClick: ()=>deleteDocument(docID),
        children: "삭제"
    });
}
function NewsTableCancelButton() {
    const { setIsEditing , setSelectedNews  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_2__/* .NewsTableContext */ .a);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "border p-0.5",
        onClick: ()=>{
            setIsEditing(false);
            setSelectedNews(null);
        },
        children: "취소"
    });
}
function NewsTablePageButton() {
    const { pageNumber , setPageNumber , newsList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_2__/* .NewsTableContext */ .a);
    const newsLength = Math.floor(Number(newsList?.length) / 10) + 1; // 한 페이지당 원하는 자료 수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(newsLength / 5) * 5 + 1;
    let buttonOffset = Math.floor((Number(pageNumber) - 1) / 5) * 5 + 1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " m-5 flex items-center justify-center p-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "inline-flex items-center -space-x-px ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",
                        onClick: ()=>{
                            setPageNumber(1);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronDoubleLeftIcon, {
                            className: "h-3 w-3"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",
                        onClick: ()=>{
                            buttonOffset == 1 ? buttonOffset = 1 : buttonOffset = buttonOffset - 5;
                            setPageNumber(buttonOffset);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {
                            className: "h-3 w-3"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageNumber(buttonOffset);
                        },
                        children: pageNumber == buttonOffset ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset
                        })
                    })
                }),
                buttonOffset + 1 <= newsLength && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageNumber(buttonOffset + 1);
                        },
                        children: pageNumber == buttonOffset + 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 1
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 1
                        })
                    })
                }),
                buttonOffset + 2 <= newsLength && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageNumber(buttonOffset + 2);
                        },
                        children: pageNumber == buttonOffset + 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 2
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 2
                        })
                    })
                }),
                buttonOffset + 3 <= newsLength && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageNumber(buttonOffset + 3);
                        },
                        children: pageNumber == buttonOffset + 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 3
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 3
                        })
                    })
                }),
                buttonOffset + 4 <= newsLength && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageNumber(buttonOffset + 4);
                        },
                        children: pageNumber == buttonOffset + 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 4
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",
                            children: buttonOffset + 4
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",
                        onClick: ()=>{
                            buttonOffset < maxOffset ? buttonOffset = buttonOffset + 5 : buttonOffset = maxOffset;
                            setPageNumber(buttonOffset);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {
                            className: "h-3 w-3"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",
                        onClick: ()=>{
                            buttonOffset = maxOffset;
                            setPageNumber(newsLength);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronDoubleRightIcon, {
                            className: "h-3 w-3"
                        })
                    })
                })
            ]
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewsTableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3331);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsTableButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__]);
([_NewsTableButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function NewsTableHeader() {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: "h-12 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[5%] text-center",
                    children: "NO"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[45%] text-center",
                    children: "제목"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[15%] text-center",
                    children: "작성자"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[15%] pr-4 text-right",
                    children: "등록일"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                    className: "relative w-[20%]",
                    children: [
                        "첨부파일",
                        user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableButton__WEBPACK_IMPORTED_MODULE_2__/* .NewsTableAddButton */ .Yg, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsTableHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9239);
/* harmony import */ var _react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1401);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(192);
/* harmony import */ var _NewsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5054);
/* harmony import */ var _NewsTableButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3331);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5421);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_5__, _NewsTable__WEBPACK_IMPORTED_MODULE_6__, _NewsTableButton__WEBPACK_IMPORTED_MODULE_7__, _firebase_storage__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_5__, _NewsTable__WEBPACK_IMPORTED_MODULE_6__, _NewsTableButton__WEBPACK_IMPORTED_MODULE_7__, _firebase_storage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function NewsTableToggle({ news  }) {
    const today = moment__WEBPACK_IMPORTED_MODULE_9___default()();
    const { selectedNews , collectionRef , selectedDocId , setIsEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NewsTable__WEBPACK_IMPORTED_MODULE_6__/* .NewsTableContext */ .a);
    const { 0: editFile , 1: setEditFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { register , reset , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
            if (selectedNews) {
                return selectedNews;
            }
        }, [
            selectedNews
        ])
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedNews) {
            reset(selectedNews);
        }
    }, [
        selectedNews
    ]);
    const addMutation = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.useFirestoreCollectionMutation)(collectionRef);
    const updateMutation = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.useFirestoreDocumentMutation)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, news), `${selectedDocId}`), {
        merge: true
    });
    const onAddNews = (data)=>{
        uploadFileAndAddDoc(data, addMutation);
    };
    function uploadFileAndAddDoc(data, mutation) {
        let file = data.newsFile[0];
        if (file) {
            const storageRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_5__/* .storage */ .tO, news === "센터 소식" ? "documents/centerNews/" + file.name : "documents/eventNews/" + file.name);
            const uploadFile = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_8__.uploadBytesResumable)(storageRef, file);
            uploadFile.on("state_changed", (snapshot)=>{
                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log("Upload is " + progress + "% now");
                switch(snapshot.state){
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Uploading");
                        break;
                }
            }, (error)=>{
                switch(error.code){
                    case "storage/unauthorized":
                        console.log(error);
                        break;
                    case "storage/canceled":
                        console.log(error);
                        break;
                    case "storage/unknown":
                        console.log(error);
                        break;
                }
            }, ()=>{
                (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getDownloadURL)(uploadFile.snapshot.ref).then((downloadURL)=>{
                    addMutation.mutate({
                        title: data.title,
                        writer: data.writer,
                        createdAt: today.format("YYYYMMDDHHmmss"),
                        content: data.content,
                        fileUrl: downloadURL,
                        news: news
                    });
                });
            });
        } else {
            addMutation.mutate({
                title: data.title,
                writer: data.writer,
                createdAt: today.format("YYYYMMDDHHmmss"),
                content: data.content,
                fileUrl: "empty",
                news: news
            });
        }
        setIsEditing(false);
    }
    const onUpdateNews = (data)=>{
        if (editFile) {
            uploadFileAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                title: data.title,
                writer: data.writer,
                content: data.content
            });
        }
        setIsEditing(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "relative w-full flex-col items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 text-xs sm:text-sm ",
        onSubmit: selectedNews ? handleSubmit(onUpdateNews) : handleSubmit(onAddNews),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-10 items-center justify-around",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "w-[45%] p-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: " w-full border border-gray-700 text-center",
                            placeholder: "자료명",
                            ...register("title", {
                                required: true
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "w-[15%] p-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "w-full border border-gray-700 text-center",
                            placeholder: "작성자",
                            ...register("writer", {
                                required: true
                            })
                        })
                    }),
                    selectedNews ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "w-[15%] text-right",
                        children: `${selectedNews.createdAt.slice(0, 4)}-${selectedNews.createdAt.slice(4, 6)}-${selectedNews.createdAt.slice(6, 8)}`
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "w-[15%] text-right",
                        children: today.format("YYYY-MM-DD")
                    }),
                    selectedNews && !editFile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-[20%] items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "items-left flex h-12 w-full justify-center self-center",
                                children: selectedNews.fileUrl == "empty" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "w-full self-center pl-5 text-xs",
                                    type: "file",
                                    ...register("newsFile", {
                                        // required: selectedNews ? false : true
                                        required: false
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, {
                                    className: "flex self-center text-black hover:underline hover:underline-offset-2",
                                    onClick: ()=>setEditFile(true),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_10__.ImFileText2, {
                                        className: "ml-2",
                                        size: 20
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "w-15 absolute right-2 z-50 hidden bg-gray-100 text-sm lg:flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "submit",
                                        className: " border p-1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsTableButton__WEBPACK_IMPORTED_MODULE_7__/* .NewsTableCancelButton */ .Nd, {})
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex w-[20%] items-center text-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "w-full pl-5 text-xs",
                                    type: "file",
                                    ...register("newsFile", {
                                        // required: selectedNews ? false : true
                                        required: false
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "w-15 absolute right-2 hidden bg-gray-100 text-sm lg:flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "submit",
                                        className: " border p-1"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    placeholder: "게시글 본문 내용을 작성해주세요.",
                    className: "w-full border-gray-700 pl-5 text-sm",
                    ...register("content", {
                        required: true
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsTableToggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;