"use strict";
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 6315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ MemberListContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info_NameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9908);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
/* harmony import */ var _info_MemberToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5971);
/* harmony import */ var _info_MemberButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_info_NameCard__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _info_MemberToggle__WEBPACK_IMPORTED_MODULE_4__, _info_MemberButton__WEBPACK_IMPORTED_MODULE_5__]);
([_info_NameCard__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _info_MemberToggle__WEBPACK_IMPORTED_MODULE_4__, _info_MemberButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MemberListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function MemberList({ memberList , collectionRef , collectionQuery , isBig , team , deleteDocument  }) {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedMember , 1: setSelectedMember  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedDocId , 1: setSelectedDocId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const value = {
        modalOpen,
        setModalOpen,
        selectedMember,
        collectionRef,
        collectionQuery,
        selectedDocId,
        setSelectedMember,
        setSelectedDocId,
        deleteDocument
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MemberListContext.Provider, {
        value: value,
        children: [
            user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_info_MemberButton__WEBPACK_IMPORTED_MODULE_5__/* .MemberAddButton */ .Vh, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-5 mb-10 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: `xs:w-full ${isBig ? "" : "grid grid-cols-2 gap-y-6 gap-x-12 px-2 sm:gap-x-2"}
                    `,
                        children: memberList?.map((docSnapshot)=>{
                            const member = docSnapshot.data();
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` h-fit xs:p-2 ${isBig ? "" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_info_NameCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    isEditable: true,
                                    isBig: isBig,
                                    member: member,
                                    documentID: docSnapshot.id
                                })
                            }, docSnapshot.id);
                        })
                    }),
                    modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_info_MemberToggle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        team: team
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vh": () => (/* binding */ MemberAddButton),
/* harmony export */   "ZB": () => (/* binding */ MemberDeleteButton),
/* harmony export */   "rM": () => (/* binding */ MemberUpdateButton),
/* harmony export */   "x8": () => (/* binding */ MemberCancelButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_MemberList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_MemberList__WEBPACK_IMPORTED_MODULE_2__]);
_common_MemberList__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function MemberAddButton() {
    const { modalOpen , setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_common_MemberList__WEBPACK_IMPORTED_MODULE_2__/* .MemberListContext */ .e);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "w-16 border bg-PRIMARY_COLOR-100 text-white",
        onClick: ()=>setModalOpen((prev)=>!prev),
        children: modalOpen ? "??????" : "??????"
    });
}
function MemberUpdateButton({ member , documentID  }) {
    const { setSelectedMember , setSelectedDocId , setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_common_MemberList__WEBPACK_IMPORTED_MODULE_2__/* .MemberListContext */ .e);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "rounded-sm border bg-SUB_COLOR-400",
        onClick: ()=>{
            setSelectedMember(member);
            setSelectedDocId(documentID);
            setModalOpen(true);
        },
        children: "??????"
    });
}
function MemberDeleteButton({ documentID  }) {
    const { deleteDocument  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_common_MemberList__WEBPACK_IMPORTED_MODULE_2__/* .MemberListContext */ .e);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "rounded-sm border",
        onClick: ()=>deleteDocument(documentID),
        children: "??????"
    });
}
function MemberCancelButton() {
    const { setModalOpen , setSelectedMember  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_common_MemberList__WEBPACK_IMPORTED_MODULE_2__/* .MemberListContext */ .e);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: ()=>{
            setModalOpen(false);
            setSelectedMember(null);
        },
        className: "w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1",
        children: "??????"
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5971:
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
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1401);
/* harmony import */ var _react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9239);
/* harmony import */ var _react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5421);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_MemberList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6315);
/* harmony import */ var _MemberButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_6__, _common_MemberList__WEBPACK_IMPORTED_MODULE_8__, _MemberButton__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_6__, _common_MemberList__WEBPACK_IMPORTED_MODULE_8__, _MemberButton__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function MemberToggle({ team  }) {
    const { 0: historyList , 1: setHistoryList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        ""
    ]);
    const { 0: editImage , 1: setEditImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { selectedMember , collectionRef , selectedDocId , setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_common_MemberList__WEBPACK_IMPORTED_MODULE_8__/* .MemberListContext */ .e);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedMember) {
            let newHistoryList = [
                ...selectedMember.history
            ];
            setHistoryList(newHistoryList);
            reset(selectedMember);
        }
    }, [
        selectedMember
    ]);
    const { register , handleSubmit , reset , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
            if (selectedMember) {
                return selectedMember;
            }
        }, [
            selectedMember
        ])
    });
    // firebase members ???????????? ?????? ???????????? ?????? ??????
    const addMutation = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.useFirestoreCollectionMutation)(collectionRef);
    // firebase members ???????????? ?????? ?????? ????????? ???????????? ?????? ??????
    const updateMutation = (0,_react_query_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.useFirestoreDocumentMutation)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, team === "??????" ? "graduateMembers" : "internalMembers"), `${selectedDocId}`), {
        merge: true
    });
    const onAddMember = (data)=>{
        uploadImageAndAddDoc(data, addMutation);
    };
    function uploadImageAndAddDoc(data, mutation) {
        let file = data.imageFile[0];
        const storageRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_6__/* .storage */ .tO, data.team ? "images/internalMembers/" + file.name : "images/alumni/" + file.name);
        const uploadImage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytesResumable)(storageRef, file);
        uploadImage.on("state_changed", (snapshot)=>{
            // ????????? ???????????? ????????? ??????????????? ???????????? ??????
            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log("Upload is " + progress + "% done");
            switch(snapshot.state){
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
            }
        }, (error)=>{
            // ????????? ?????? ?????? ??????, ???????????? 3?????? ????????? ????????? ?????? ???????????? ???????????? ?????? ????????? ??? ??? ??????.
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch(error.code){
                case "storage/unauthorized":
                    // ???????????? ????????? ????????? ?????? ??????, firebase storage ??? Rules ??? ????????????
                    console.log(error);
                    break;
                case "storage/canceled":
                    // ????????? ???????????? ????????? ??????
                    console.log(error);
                    break;
                case "storage/unknown":
                    // ?????? ?????? ??????, ????????? ????????? ???????
                    console.log(error);
                    break;
            }
        }, ()=>{
            // ???????????? ???????????? ????????? ????????? ???????????? addMutation.mutate ????????? ????????? ????????? ????????????
            (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(uploadImage.snapshot.ref).then((downloadURL)=>{
                mutation.mutate({
                    name: data.name,
                    email: data.email ? data.email : null,
                    major: data.major,
                    imageUrl: downloadURL,
                    department: data.department,
                    history: data.history.slice(0, historyList.length),
                    team: data.team,
                    course: data.course ? data.course : null
                });
            });
            setModalOpen(false);
        });
    }
    const onUpdateMember = (data)=>{
        if (editImage) {
            uploadImageAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                name: data.name,
                email: data.email ? data.email : null,
                major: data.major,
                department: data.department,
                course: data.course,
                team: data.team,
                history: data.history.slice(0, historyList.length)
            });
            setModalOpen(false);
        }
    };
    // ?????? ????????? ??????
    const addHistory = ()=>{
        if (historyList.length < 8) {
            let newHistoryList = [
                ...historyList
            ];
            newHistoryList.push("");
            setHistoryList(newHistoryList);
        }
    };
    // ?????? ????????? ??????
    const deleteHistory = ()=>{
        if (historyList.length > 1) {
            let newHistoryList = [
                ...historyList
            ];
            newHistoryList.pop();
            setHistoryList(newHistoryList);
        }
    };
    return(// Props??? ?????? member??? ????????? ?????? ????????? ???????????? ??????, ????????? ?????? ????????????.
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: selectedMember ? handleSubmit(onUpdateMember) : handleSubmit(onAddMember),
        className: "min-h-44 relative flex w-full flex-wrap bg-gray-300 p-4",
        children: [
            selectedMember && !editImage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative h-80 w-1/4 flex-col border p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                        src: selectedMember.imageUrl,
                        layout: "fill",
                        objectFit: "cover",
                        alt: "???????????????"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute right-2 bottom-2 z-50 border bg-GRAY_COLOR-600 text-sm",
                        onClick: ()=>setEditImage(true),
                        children: "????????? ??????"
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full w-1/4 flex-col border p-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: [
                        "????????? ????????? ????????? ????????? ???????????? ????????????(ex. ?????????)",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            ...register("imageFile", {
                                required: true
                            })
                        }),
                        errors.imageFile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-SUB_COLOR-500",
                            children: "????????? ????????? ??????????????????"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-3/4 flex-col gap-y-2 p-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "??????",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: " mx-2 h-7 border border-gray-700 pl-3",
                                        type: "name",
                                        placeholder: "??????",
                                        ...register("name", {
                                            required: true
                                        })
                                    }),
                                    errors.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm text-SUB_COLOR-500",
                                        children: "????????? ????????? ???????????????."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "????????????",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: " mx-2 h-7 border border-gray-700 pl-3",
                                        type: "major",
                                        placeholder: "?????? ??????",
                                        ...register("major")
                                    }),
                                    errors.major && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm text-SUB_COLOR-500",
                                        children: "????????? ??????????????? ???????????????."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "?????????",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "h-8 border border-gray-700 pl-3",
                                        type: "email",
                                        placeholder: "E-mail",
                                        ...register("email")
                                    }),
                                    errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm text-SUB_COLOR-500",
                                        children: "????????? ???????????? ???????????????."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-1/6 flex-col gap-y-2",
                                        children: [
                                            "?????? (?????? 8???)",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "flex w-fit border bg-PRIMARY_COLOR-50 px-2",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    addHistory();
                                                },
                                                children: "?????? ??????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "flex w-fit border bg-PRIMARY_COLOR-50 px-2",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    deleteHistory();
                                                },
                                                children: "?????? ??????"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-5/6",
                                        children: historyList.map((history, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "m-1 h-7 w-[30%] border border-gray-700 pl-3",
                                                type: "history",
                                                placeholder: "??????",
                                                ...register(`history.${index}`, {
                                                    required: true
                                                })
                                            }, index))
                                    })
                                ]
                            }),
                            " ",
                            errors.history && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-SUB_COLOR-500",
                                children: "????????? ????????? ???????????????."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "??????",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: " mx-2 h-7 w-96 border border-gray-700 pl-3",
                                        placeholder: "??????(ex. ??????????????? ???????????? ??????)",
                                        ...register("department", {
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "?????? ??????",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: " mx-2 h-7 border border-gray-700 bg-gray-300 pl-3",
                                        placeholder: "?????????",
                                        value: team,
                                        ...register("team", {
                                            required: true
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            children: [
                                "?????? ??????",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "mx-2 h-8 border border-gray-700 pl-3",
                                    placeholder: "?????? ??????",
                                    ...register("course", {
                                        required: true
                                    }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "???????????????",
                                            children: "???????????????"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "?????? ??????",
                                            children: "?????? ??????"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "?????? ??????",
                                            children: "?????? ??????"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "??????",
                                            children: "??????"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " self-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "mr-10 w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1",
                                type: "submit",
                                value: selectedMember ? "??????" : "??????"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberButton__WEBPACK_IMPORTED_MODULE_9__/* .MemberCancelButton */ .x8, {})
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberToggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
/* harmony import */ var _MemberButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _MemberButton__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _MemberButton__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 




function NameCard({ isEditable , member , documentID , isBig  }) {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `flex flex-col pb-1 xs:justify-between sm:flex-row sm:gap-x-4`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `relative before:float-left before:pt-[128.57%]   ${isBig ? "sm:w-1/3 md:w-1/4 lg:w-1/5" : "sm:w-1/3 md:w-1/4"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: member.imageUrl,
                    alt: "????????????",
                    layout: "fill",
                    objectFit: "contain",
                    priority: isBig
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: `sm:flex-1 ${isBig ? "text-base lg:text-lg" : "text-xs lg:text-sm "} text-PRIMARY_COLOR-500`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: `flex w-full flex-wrap items-center xs:items-center ${isBig ? "gap-x-4 py-2" : "gap-x-2 py-1"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: `font-semibold text-PRIMARY_COLOR-800 ${isBig ? "text-lg lg:text-xl" : "text-sm lg:text-lg"}`,
                                children: member.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: member.major
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `mailto:${member.email}`,
                                className: "w-full text-PRIMARY_COLOR-800 hover:underline",
                                children: member.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `hidden flex-col xs:flex ${isBig ? "text-sm sm:gap-y-2 sm:text-xs md:gap-y-1 md:text-sm lg:text-base" : "text-xs lg:text-sm"}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: ` hidden justify-between text-base sm:flex ${isBig ? "lg:text-lg" : ""}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "??????"
                                    }),
                                    isEditable && user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-x-5 pl-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberButton__WEBPACK_IMPORTED_MODULE_4__/* .MemberUpdateButton */ .rM, {
                                                member: member,
                                                documentID: documentID
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemberButton__WEBPACK_IMPORTED_MODULE_4__/* .MemberDeleteButton */ .ZB, {
                                                documentID: documentID
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                className: `flex w-full flex-wrap ${isBig ? "gap-y-2 gap-x-3 sm:gap-y-3 md:gap-y-2 " : "gap-y-1 gap-x-1.5 "}`,
                                children: member.history.map((history, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: ` h-fit min-w-[47%] break-keep border-l-2 border-l-PRIMARY_COLOR-200 lg:min-w-[40%] ${isBig ? "pl-1" : "pl-1"}`,
                                        children: history
                                    }, index))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;