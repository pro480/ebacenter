"use strict";
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 7250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ MemberTableContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MemberTableToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7781);
/* harmony import */ var _hooks_useFirebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7920);
/* harmony import */ var _MemberTableHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3505);
/* harmony import */ var _MemberTableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MemberTableToggle__WEBPACK_IMPORTED_MODULE_2__, _hooks_useFirebase__WEBPACK_IMPORTED_MODULE_3__, _MemberTableHeader__WEBPACK_IMPORTED_MODULE_4__, _MemberTableBody__WEBPACK_IMPORTED_MODULE_5__]);
([_MemberTableToggle__WEBPACK_IMPORTED_MODULE_2__, _hooks_useFirebase__WEBPACK_IMPORTED_MODULE_3__, _MemberTableHeader__WEBPACK_IMPORTED_MODULE_4__, _MemberTableBody__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MemberTableContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function MemberTable({ organization  }) {
    const { collectionRef , collectionQuery , deleteDocument  } = (0,_hooks_useFirebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("externalMembers", [
        "externalMembers"
    ]);
    const { 0: selectedMember , 1: setSelectedMember  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedDocId , 1: setSelectedDocId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isEditing , 1: setIsEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedIndex , 1: setSelectedIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: memberList , 1: setMemberList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(collectionQuery.data?.docs);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        const newMemberList = collectionQuery.data?.docs.filter((docSnapshot)=>docSnapshot.data().organization === organization);
        setMemberList(newMemberList);
    }, [
        collectionQuery.isSuccess
    ]);
    const value = {
        isEditing,
        setIsEditing,
        selectedMember,
        setSelectedMember,
        collectionQuery,
        collectionRef,
        deleteDocument,
        selectedDocId,
        setSelectedDocId,
        selectedIndex,
        setSelectedIndex
    };
    if (collectionQuery.isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "로딩"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MemberTableContext.Provider, {
        value: value,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full table-auto border-t border-t-black",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        organization: organization
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableBody__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        organization: organization,
                        memberList: memberList
                    })
                ]
            }),
            isEditing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableToggle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                organization: organization
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4547:
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
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
/* harmony import */ var _MemberTableButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _MemberTableButton__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _MemberTableButton__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function MemberTableBody({ organization , memberList  }) {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        className: "text-sm font-light text-gray-600",
        children: memberList?.sort((a, b)=>{
            if (!!a.data().division && !!b.data().division) {
                return a.data().division > b.data().division ? 1 : -1;
            }
            return a.data().name > b.data().name ? 1 : -1;
        }).map((docSnapshot, index)=>{
            const data = docSnapshot.data();
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: "border-b border-gray-200 hover:bg-gray-100",
                children: [
                    organization === "연구 자문단" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-center",
                        children: data.division
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "py-3 text-center",
                        children: index + 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-center",
                        children: data.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-center",
                        children: data.department
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "relative flex justify-center text-center xs:flex xs:items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex h-12 w-fit items-center justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "w-fit justify-center self-center hover:underline hover:underline-offset-2 xs:flex",
                                    href: `mailto:${data.email}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hidden xs:flex",
                                            children: data.email
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImMail4, {
                                            className: "mx-1 xs:mx-0 xs:ml-2",
                                            size: 20
                                        })
                                    ]
                                })
                            }),
                            user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden lg:absolute lg:right-0 lg:flex lg:gap-x-2 lg:text-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableButton__WEBPACK_IMPORTED_MODULE_4__/* .MemberTableUpdateButton */ .ox, {
                                        index: index + 1,
                                        data: data,
                                        docID: docSnapshot.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableButton__WEBPACK_IMPORTED_MODULE_4__/* .MemberTableDeleteButton */ .Hb, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberTableBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ MemberTableAddButton),
/* harmony export */   "Hb": () => (/* binding */ MemberTableDeleteButton),
/* harmony export */   "gQ": () => (/* binding */ MemberTableCancelButton),
/* harmony export */   "ox": () => (/* binding */ MemberTableUpdateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MemberTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MemberTable__WEBPACK_IMPORTED_MODULE_2__]);
_MemberTable__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function MemberTableAddButton() {
    const { setIsEditing , isEditing , setSelectedMember  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MemberTable__WEBPACK_IMPORTED_MODULE_2__/* .MemberTableContext */ .K);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "hidden lg:absolute lg:right-3 lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:border lg:p-1",
        onClick: ()=>{
            setIsEditing((prev)=>!prev);
            isEditing ? setSelectedMember(null) : null;
        },
        children: isEditing ? "취소" : "추가"
    });
}
function MemberTableUpdateButton({ data , docID , index  }) {
    const { setIsEditing , setSelectedMember , setSelectedDocId , setSelectedIndex ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MemberTable__WEBPACK_IMPORTED_MODULE_2__/* .MemberTableContext */ .K);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "border p-1",
        onClick: ()=>{
            setIsEditing(false);
            setSelectedMember({
                ...data
            });
            setSelectedDocId(docID);
            setIsEditing(true);
            setSelectedIndex(index);
        },
        children: "수정"
    });
}
function MemberTableDeleteButton({ docID  }) {
    const { deleteDocument  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MemberTable__WEBPACK_IMPORTED_MODULE_2__/* .MemberTableContext */ .K);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: ()=>deleteDocument(docID),
        children: "삭제"
    });
}
function MemberTableCancelButton() {
    const { setIsEditing , setSelectedMember , setSelectedIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MemberTable__WEBPACK_IMPORTED_MODULE_2__/* .MemberTableContext */ .K);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "border p-1",
        onClick: ()=>{
            setIsEditing(false);
            setSelectedMember(null);
            setSelectedIndex(0);
        },
        children: "취소"
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MemberTableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9539);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MemberTableButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__]);
([_MemberTableButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function MemberTableHeader({ organization  }) {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: "bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600",
            children: [
                organization === "연구 자문단" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[10%] text-center",
                    children: "구분"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[5%] px-1 py-3 text-center xs:px-6",
                    children: "NO"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[20%] text-center",
                    children: "성명"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "w-[33%] text-center xs:w-[30%]",
                    children: "소속"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                    className: "relative h-12 w-fit",
                    children: [
                        "이메일",
                        user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableButton__WEBPACK_IMPORTED_MODULE_2__/* .MemberTableAddButton */ .$z, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberTableHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7781:
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
/* harmony import */ var _MemberTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7250);
/* harmony import */ var _MemberTableButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_5__, _MemberTable__WEBPACK_IMPORTED_MODULE_6__, _MemberTableButton__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_5__, _MemberTable__WEBPACK_IMPORTED_MODULE_6__, _MemberTableButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MemberTableToggle({ organization  }) {
    const { selectedMember , collectionRef , selectedDocId , selectedIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MemberTable__WEBPACK_IMPORTED_MODULE_6__/* .MemberTableContext */ .K);
    const { register , reset , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
            if (selectedMember) {
                return selectedMember;
            }
        }, [
            selectedMember
        ])
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedMember) {
            reset(selectedMember);
        }
    }, [
        selectedMember
    ]);
    const addMutation = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.useFirestoreCollectionMutation)(collectionRef);
    const updateMutation = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.useFirestoreDocumentMutation)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, "externalMembers"), `${selectedDocId}`), {
        merge: true
    });
    const onAddMember = (data)=>{
        addMutation.mutate({
            name: data.name,
            department: data.department,
            organization: organization,
            email: data.email ? data.email : null,
            division: data.division ? data.division : null
        });
    };
    const onUpdateMember = (data)=>{
        updateMutation.mutate({
            name: data.name,
            department: data.department,
            organization: organization,
            email: data.email ? data.email : null,
            division: data?.division ? data.division : null
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "relative flex w-full items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 ",
        onSubmit: selectedMember ? handleSubmit(onUpdateMember) : handleSubmit(onAddMember),
        children: [
            organization === "연구 자문단" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[10%] text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    className: "mx-2 h-8 border border-gray-700 pl-3",
                    placeholder: "구분",
                    ...register("division"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "대학",
                            children: "대학"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "연구 기관",
                            children: "연구 기관"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[5%] py-3 text-center",
                children: selectedIndex
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-[20%] text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: " mx-2 h-7 border border-gray-700 pl-3",
                    placeholder: "성명",
                    ...register("name", {
                        required: true
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-[30%] text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: " mx-2 w-60 border border-gray-700 pl-3",
                    placeholder: "소속",
                    ...register("department", {
                        required: true
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-[35%] items-center justify-center text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: " mx-2 h-7 w-44 border border-gray-700 pl-3",
                    type: "email",
                    placeholder: "이메일",
                    ...register("email")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "gapx-1 absolute right-0 flex text-xs desktop:right-2 desktop:gap-x-3 desktop:text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        className: " border p-1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberTableButton__WEBPACK_IMPORTED_MODULE_7__/* .MemberTableCancelButton */ .gQ, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberTableToggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;