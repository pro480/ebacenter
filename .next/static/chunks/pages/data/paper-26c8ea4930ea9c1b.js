(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{8217:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data/paper",function(){return r(4734)}])},4734:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var s=r(5893),n=r(1163),c=r(7294),a=r(7920),o=r(3276),l=r(645),i=r(1446),d=r(1038),x=r(3045);function u(){var e=(0,c.useContext)(L),t=e.isEditing,r=e.setIsEditing,n=e.setSelectedResearch,a=e.setSelectedDocId;return(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"mx-3 my-3 h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-500 xl:h-[28px] xl:w-[50px] xl:text-base",onClick:function(){r((function(e){return!e})),n(null),a(null)},children:t?"\ucde8\uc18c":"\ucd94\uac00"})})}function h(e){var t=e.docId,r=(0,c.useContext)(L).deleteDocument;return(0,s.jsx)("div",{className:"h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-600 xl:h-[30px] xl:w-[40px] xl:text-base",onClick:function(){confirm("\ubcf4\uace0\uc11c\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&r(t)},children:"\uc0ad\uc81c"})}function m(e){var t=e.docId,r=e.data,n=(0,c.useContext)(L),a=n.setIsEditing,o=n.setSelectedDocId,l=n.setSelectedResearch;return(0,s.jsx)("div",{className:"mx-1 h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-600 xl:h-[30px] xl:w-[40px] xl:text-base",onClick:function(){a(!0),o(t),l(r)},children:"\uc218\uc815"})}function p(){var e=(0,c.useContext)(L),t=e.pageNumber,r=e.setPageNumber,n=e.researchList,a=Math.floor(Number(null===n||void 0===n?void 0:n.length)/8)+1,o=5*Math.floor(a/5)+1,u=5*Math.floor((Number(t)-1)/5)+1;return(0,s.jsx)("div",{className:" m-5 flex items-center justify-center p-10",children:(0,s.jsxs)("ul",{className:"inline-flex items-center -space-x-px ",children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){r(1)},children:(0,s.jsx)(l.Z,{className:"h-3 w-3"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){1==u?u=1:u-=5,r(u)},children:(0,s.jsx)(i.Z,{className:"h-3 w-3"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u)},children:t==u?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u})})}),u+1<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+1)},children:t==u+1?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+1}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+1})})}),u+2<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+2)},children:t==u+2?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+2}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+2})})}),u+3<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+3)},children:t==u+3?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+3}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+3})})}),u+4<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+4)},children:t==u+4?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+4}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+4})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){u<o?u+=5:u=o,r(u)},children:(0,s.jsx)(d.Z,{className:"h-3 w-3"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){u=o,r(a)},children:(0,s.jsx)(x.Z,{className:"h-3 w-3"})})})]})})}var R=r(5675),b=r.n(R);function O(){var e=(0,c.useContext)(L),t=e.researchList,r=e.pageNumber,n=(0,o.Z)().user;return(0,s.jsx)(c.Fragment,{children:(0,s.jsx)("div",{className:"my-5 grid grid-cols-2 items-center gap-y-16 gap-x-4 self-center sm:gap-x-12 lg:grid-cols-3 xl:grid-cols-4",children:null===t||void 0===t?void 0:t.sort((function(e,t){return Number(t.data().createdAt)-Number(e.data().createdAt)})).slice(8*(Number(r)-1),8*(Number(r)-1)+8).map((function(e){var t=e.data();return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"relative aspect-[1/1.414] w-full border border-gray-300 before:float-left before:pt-[141.4%] ",children:(0,s.jsx)(b(),{src:t.imgUrl,layout:"fill",alt:"\uc5f0\uad6c \ubcf4\uace0\uc11c",priority:!0,quality:50})}),(0,s.jsxs)("div",{className:"flex flex-col justify-around p-1",children:[(0,s.jsx)("div",{className:"py-1",children:(0,s.jsx)("div",{className:"overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs xs:text-sm sm:text-base",children:t.title})}),(0,s.jsx)("div",{className:"flex justify-between",children:(0,s.jsxs)("div",{className:"py-1",children:[(0,s.jsxs)("div",{className:" text-xs text-GRAY_COLOR-500 xl:text-sm",children:["\uc5f0\uad6c\ucc45\uc784\uc790 |"," ",(0,s.jsxs)("span",{children:[" ",t.researcher," "]})]}),(0,s.jsxs)("div",{className:"text-[11px] text-GRAY_COLOR-500 sm:text-[13px] xl:text-sm",children:["\ubc1c\ud589 \ub144\ub3c4 |"," ",(0,s.jsx)("span",{children:t.year})]})]})}),n&&(0,s.jsxs)("div",{className:"flex py-2",children:[(0,s.jsx)(m,{docId:e.id,data:e.data()}),(0,s.jsx)(h,{docId:e.id})]}),(0,s.jsx)("a",{className:"flex h-fit w-fit cursor-pointer bg-PRIMARY_COLOR-300 px-2 pb-1 text-center text-xs text-white hover:bg-PRIMARY_COLOR-600",href:t.fileUrl,children:(0,s.jsx)("span",{children:"pdf"})})]})]},e.id)}))})})}var f=r(1799),g=r(9396),j=r(774),y=r(4500),v=r(6257),C=r(381),N=r.n(C),w=r(7536),_=r(4219);function A(){var e=(0,w.cI)(),t=e.register,r=e.handleSubmit,n=(0,c.useContext)(L),a=n.collectionRef,o=n.setIsEditing,l=n.selectedDocId,i=n.selectedResearch,d=(0,y.b)(a),x=(0,y.AG)((0,v.JU)((0,v.hJ)(_.db,"researchReport"),"".concat(l)),{merge:!0});return(0,s.jsx)(c.Fragment,{children:(0,s.jsx)("div",{className:"flex flex-col justify-between border-4 border-gray-200 px-1 text-sm hover:border-4 sm:h-[290px] sm:w-[500px] md:text-base lg:h-[220px] lg:w-[750px]",children:(0,s.jsxs)("form",{onSubmit:r(i?function(e){var t=e.fileUrl[0],r=e.imgUrl[0],s=(0,j.iH)(_.tO,"documents/researchReport/".concat(t.name)),n=(0,j.iH)(_.tO,"images/researchReport/".concat(r.name)),c=(0,j.B0)(n,r),a=(0,j.B0)(s,t);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% now"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Uploading")}}),(function(e){switch(e.code){case"storage/unauthorized":case"storage/canceled":case"storage/unknown":console.log(e)}})),c.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% now"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Uploading")}}),(function(e){switch(e.code){case"storage/unauthorized":case"storage/canceled":case"storage/unknown":console.log(e)}}),(function(){(0,j.Jt)(c.snapshot.ref).then((function(t){(0,j.Jt)(a.snapshot.ref).then((function(r){x.mutate({fileUrl:r,imgUrl:t,researcher:e.researcher,title:e.title,year:e.year})}))}))})),o(!1)}:function(e){var t=e.fileUrl[0],r=e.imgUrl[0],s=(0,j.iH)(_.tO,"documents/researchReport/".concat(t.name)),n=(0,j.iH)(_.tO,"images/researchReport/".concat(r.name)),c=(0,j.B0)(n,r),a=(0,j.B0)(s,t);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% now"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Uploading")}}),(function(e){switch(e.code){case"storage/unauthorized":case"storage/canceled":case"storage/unknown":console.log(e)}})),c.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% now"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Uploading")}}),(function(e){switch(e.code){case"storage/unauthorized":case"storage/canceled":case"storage/unknown":console.log(e)}}),(function(){(0,j.Jt)(c.snapshot.ref).then((function(t){(0,j.Jt)(a.snapshot.ref).then((function(r){d.mutate({createdAt:N()().format("YYYYMMDDHHmmss"),fileUrl:r,imgUrl:t,researcher:e.researcher,title:e.title,year:e.year}),o(!1)}))}))}))}),className:"lg:flex",children:[(0,s.jsxs)("div",{className:" flex flex-col justify-around lg:w-[45%] lg:p-2",children:[(0,s.jsxs)("div",{className:"p-1",children:["\uc81c\ubaa9 :",(0,s.jsx)("input",(0,g.Z)((0,f.Z)({},t("title",{required:!0})),{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",className:"h-[25px] p-2 lg:h-[30px]"}))]}),(0,s.jsxs)("div",{className:"p-1",children:["\uc5f0\uad6c\ucc45\uc784\uc790 :",(0,s.jsx)("input",(0,g.Z)((0,f.Z)({},t("researcher",{required:!0})),{placeholder:"\uc5f0\uad6c\ucc45\uc784\uc790\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",className:"h-[25px] p-2 lg:h-[30px]"}))]}),(0,s.jsxs)("div",{className:"p-1",children:["\ubc1c\ud589 \ub144\ub3c4 :",(0,s.jsx)("input",(0,g.Z)((0,f.Z)({},t("year",{required:!0})),{placeholder:"\ubc1c\ud589 \ub144\ub3c4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",className:"h-[25px] p-2 lg:h-[30px]"}))]})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"px-1 lg:py-1",children:["pdf :",(0,s.jsx)("input",(0,g.Z)((0,f.Z)({type:"file"},t("fileUrl",{required:!0})),{className:" p-2"}))]}),(0,s.jsxs)("div",{className:"px-1 lg:py-1",children:["\uc774\ubbf8\uc9c0 :",(0,s.jsx)("input",(0,g.Z)((0,f.Z)({type:"file"},t("imgUrl",{required:!0})),{className:" p-2"}))]}),(0,s.jsx)("button",{className:"m-2 h-[30px] w-[50px] rounded-md bg-gray-400 font-bold text-white hover:bg-gray-500 lg:my-2",type:"submit",children:"\uc800\uc7a5"})]})]})})})}var L=(0,c.createContext)({});function Y(){var e,t=(0,a.Z)("researchReport",["researchReport"]),r=t.collectionRef,n=t.collectionQuery,l=t.deleteDocument,i=null===(e=n.data)||void 0===e?void 0:e.docs,d=(0,o.Z)().user,x=(0,c.useState)(!1),h=x[0],m=x[1],R=(0,c.useState)(null),b=R[0],f=R[1],g=(0,c.useState)(null),j=g[0],y=g[1],v=(0,c.useState)(1),C={researchList:i,collectionRef:r,collectionQuery:n,deleteDocument:l,isEditing:h,setIsEditing:m,selectedResearch:b,setSelectedResearch:f,selectedDocId:j,setSelectedDocId:y,pageNumber:v[0],setPageNumber:v[1]};return(0,s.jsx)(L.Provider,{value:C,children:(0,s.jsxs)("main",{children:[(0,s.jsxs)("h1",{className:"pb-5 pt-5",children:["\uc804\uccb4"," ",(0,s.jsx)("span",{className:"ml-3 text-2xl font-bold text-PRIMARY_COLOR-500",children:null===i||void 0===i?void 0:i.length})," ","\uac74"]}),d&&(0,s.jsx)(u,{}),h?(0,s.jsx)(A,{}):null,(0,s.jsx)(O,{}),(0,s.jsx)(p,{})]})})}function I(e){var t=e.data,r=e.docId,n=(0,c.useContext)(B),a=n.setIsEditing,o=n.setSelectedDocId,l=n.setSelectedThesis;return(0,s.jsx)("button",{className:"m-1 border border-gray-300 bg-white p-1",onClick:function(){a(!0),o(r),l(t)},children:"\uc218\uc815"})}function P(e){var t=e.docId,r=(0,c.useContext)(B).deleteDocument;return(0,s.jsx)("button",{className:"border border-gray-300 bg-white p-1",onClick:function(){confirm("\ub17c\ubb38\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&r(t)},children:"\uc0ad\uc81c"})}function M(){var e=(0,c.useContext)(B),t=e.setIsEditing,r=e.isEditing,n=e.setSelectedDocId,a=e.setSelectedThesis;return(0,s.jsx)("button",{className:"absolute right-3 top-1/2 hidden -translate-y-1/2 border bg-gray-100 p-1 lg:flex",onClick:function(){t((function(e){return!e})),n(""),a(null)},children:r?"\ucde8\uc18c":"\ucd94\uac00"})}function k(){var e=(0,c.useContext)(B),t=e.pageNumber,r=e.setPageNumber,n=e.thesisList,a=Math.floor(Number(null===n||void 0===n?void 0:n.length)/10)+1,o=5*Math.floor(a/5)+1,u=5*Math.floor((Number(t)-1)/5)+1;return(0,s.jsx)("div",{className:" m-5 flex items-center justify-center pt-4",children:(0,s.jsxs)("ul",{className:"inline-flex items-center -space-x-px ",children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){r(1)},children:(0,s.jsx)(l.Z,{className:"h-3 w-3"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){1==u?u=1:u-=5,r(u)},children:(0,s.jsx)(i.Z,{className:"h-3 w-3"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u)},children:t==u?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u})})}),u+1<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+1)},children:t==u+1?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+1}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+1})})}),u+2<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+2)},children:t==u+2?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+2}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+2})})}),u+3<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+3)},children:t==u+3?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+3}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+3})})}),u+4<=a&&(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:function(){r(u+4)},children:t==u+4?(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3",children:u+4}):(0,s.jsx)("span",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3",children:u+4})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){u<o?u+=5:u=o,r(u)},children:(0,s.jsx)(d.Z,{className:"h-3 w-3"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3",onClick:function(){u=o,r(a)},children:(0,s.jsx)(x.Z,{className:"h-3 w-3"})})})]})})}var Z=function(){var e=(0,o.Z)().user;return(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"h-12 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600",children:[(0,s.jsx)("th",{className:"w-[5%] text-center",children:"NO"}),(0,s.jsx)("th",{className:"w-[45%] text-center",children:"\uc81c\ubaa9"}),(0,s.jsx)("th",{className:"w-[15%] text-center",children:"\uc791\uc131\uc790"}),(0,s.jsx)("th",{className:"w-[15%] pr-4 text-center",children:"\ub4f1\ub85d\uc77c"}),e&&(0,s.jsx)("th",{className:"relative w-[7%]",children:(0,s.jsx)(M,{})})]})})},E=r(7568),G=r(655);function S(){var e=N()(),t=(0,w.cI)(),r=t.register,n=t.handleSubmit,a=(0,c.useContext)(B),o=a.collectionRef,l=a.selectedDocId,i=(a.selectedThesis,a.setIsEditing),d=function(){var t=(0,E.Z)((function(t){var r;return(0,G.__generator)(this,(function(s){switch(s.label){case 0:return r={createdAt:e.format("YYYYMMDDHHmmss"),type:t.type,researcher:t.researcher,title:t.title,year:t.year,writer:t.writer},[4,(0,v.ET)(o,r)];case 1:return s.sent(),[2]}}))}));return function(e){return t.apply(this,arguments)}}(),x=function(){var e=(0,E.Z)((function(e){var t,r;return(0,G.__generator)(this,(function(s){switch(s.label){case 0:return t=(0,v.JU)(o,l),r={type:e.type,researcher:e.researcher,title:e.title,year:e.year,writer:e.writer},[4,(0,v.r7)(t,r)];case 1:return s.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}();return(0,s.jsxs)("form",{className:"relative w-full flex-col items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 text-xs sm:text-sm ",onSubmit:n(""==l?d:x),children:[(0,s.jsxs)("div",{className:"flex h-10 items-center justify-around",children:[(0,s.jsx)("label",{className:"w-[60%] px-1",children:(0,s.jsx)("input",(0,f.Z)({className:" w-full border border-gray-700 text-center",placeholder:"\ub17c\ubb38 \uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"},r("title",{required:!0})))}),(0,s.jsx)("label",{className:"w-[18%] px-1",children:(0,s.jsx)("input",(0,f.Z)({className:"w-full border border-gray-700 text-center",placeholder:"\uc791\uc131\uc790\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"},r("writer",{required:!0})))}),(0,s.jsx)("label",{className:"w-[20%] px-1",children:(0,s.jsx)("input",(0,f.Z)({className:"w-full border border-gray-700 text-center",placeholder:"\ub17c\ubb38 \ubc1c\ud589\ub144\ub3c4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"},r("year",{required:!0})))})]}),(0,s.jsxs)("div",{className:"flex h-10 items-center justify-around",children:[(0,s.jsx)("label",{className:"w-[45%] px-1",children:(0,s.jsx)("input",(0,f.Z)({className:"w-full border border-gray-700 text-center",placeholder:"\ud559\ud68c\uc9c0\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"},r("type",{required:!0})))}),(0,s.jsx)("label",{className:"w-[45%] px-1",children:(0,s.jsx)("input",(0,f.Z)({className:"w-full border border-gray-700 text-center",placeholder:"\uc5f0\uad6c\uc790\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"},r("researcher",{required:!0})))}),(0,s.jsx)("button",{className:" border border-gray-400 bg-gray-100 p-1 lg:flex",onClick:function(){i((function(e){return!e}))},children:"\ucde8\uc18c"}),(0,s.jsx)("button",{className:" border border-gray-400 bg-gray-100 p-1 lg:flex",type:"submit",children:"\uc81c\ucd9c"})]})]})}var U=r(1664),D=r.n(U);function q(){var e=(0,o.Z)().user,t=(0,c.useContext)(B),r=t.pageNumber,n=t.thesisList,a=10*(Number(r)-1);return(0,s.jsx)("tbody",{className:"text-sm font-light text-gray-600",children:null===n||void 0===n?void 0:n.sort((function(e,t){return Number(t.data().createdAt)-Number(e.data().createdAt)})).slice(10*(Number(r)-1),10*(Number(r)-1)+10).map((function(t){var r=t.data();return a+=1,(0,s.jsxs)("tr",{className:"border-b border-gray-200 text-xs text-[11px] hover:bg-gray-100 sm:text-sm",children:[(0,s.jsx)("td",{className:"text-center",children:a}),(0,s.jsx)(D(),{href:{pathname:"/data/thesis".concat(a),query:{title:r.title,type:r.type,researcher:r.researcher,createdAt:N()(r.createdAt.slice(0,8)).format("YYYY-MM-DD"),year:r.year,writer:r.writer}},as:"/data/thesis".concat(a),children:(0,s.jsx)("td",{className:"cursor-pointer py-3 px-2 text-left hover:scale-105 ",children:(0,s.jsx)("a",{className:"font-bold",children:r.title})})}),(0,s.jsx)("td",{className:"text-center",children:r.writer}),(0,s.jsx)("td",{className:"text-center",children:(0,s.jsxs)("div",{children:[r.createdAt.slice(0,4),"-",r.createdAt.slice(4,6),"-",r.createdAt.slice(6,8)]})}),e&&(0,s.jsxs)("td",{className:"flex items-center text-center",children:[(0,s.jsx)(I,{data:r,docId:t.id}),(0,s.jsx)(P,{docId:t.id})]})]},t.id)}))})}var B=(0,c.createContext)({});function T(){var e,t=(0,a.Z)("thesis",["thesis"]),r=t.collectionRef,n=t.collectionQuery,o=t.deleteDocument,l=(0,c.useState)(!1),i=l[0],d=l[1],x=(0,c.useState)(null),u=x[0],h=x[1],m=(0,c.useState)(""),p=m[0],R=m[1],b=null===(e=n.data)||void 0===e?void 0:e.docs,O=(0,c.useState)(1),f={collectionRef:r,collectionQuery:n,deleteDocument:o,isEditing:i,setIsEditing:d,selectedThesis:u,setSelectedThesis:h,selectedDocId:p,setSelectedDocId:R,pageNumber:O[0],setPageNumber:O[1],thesisList:b};return(0,s.jsxs)(B.Provider,{value:f,children:[(0,s.jsxs)("table",{className:"w-full table-auto border-t border-t-black",children:[(0,s.jsx)(Z,{}),(0,s.jsx)(q,{})]}),i&&(0,s.jsx)(S,{}),(0,s.jsx)(k,{})]})}var H=r(9518);var J=function(){var e=(0,n.useRouter)(),t=e.query.tab||"thesis";return(0,s.jsxs)("div",{children:[(0,s.jsx)(H.Z,{title:"EBA | \ub17c\ubb38 \ubc0f \uc5f0\uad6c\ubcf4\uace0\uc11c",description:"EBA\uc13c\ud130\uc758 \ub17c\ubb38 \ubc0f \uc5f0\uad6c\ubcf4\uace0\uc11c \uc815\ubcf4 \uc544\uce74\uc774\ube0c"}),(0,s.jsxs)("div",{className:"flex pb-10 text-sm md:text-base",children:[(0,s.jsx)("div",{className:"w-24 cursor-pointer border px-3 py-3 text-center hover:border-t-2 hover:border-b-0 hover:border-t-black ",onClick:function(){e.replace({query:{tab:"thesis"}})},children:"\ub17c\ubb38"}),(0,s.jsx)("div",{className:"w-40 cursor-pointer border px-1 py-3 text-center hover:border-t-2 hover:border-b-0 hover:border-t-black",onClick:function(){e.replace({query:{tab:"report"}})},children:"\uc5f0\uad6c \ubcf4\uace0\uc11c"}),(0,s.jsx)("span",{className:"w-full border-b"})]}),(0,s.jsx)("div",{children:"thesis"===t?(0,s.jsx)(T,{}):(0,s.jsx)(Y,{})})]})}},9518:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(5893),n=r(9008),c=r.n(n),a={src:"/_next/static/media/logo(H)_symbol_text_tag(EN)_w.9d550bfd.svg",height:151,width:888},o=function(e){var t=e.title,r=e.description;return(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"description",content:r}),(0,s.jsx)("meta",{property:"og:title",content:t}),(0,s.jsx)("meta",{property:"og:description",content:r}),(0,s.jsx)("meta",{property:"og:image",content:a}),(0,s.jsx)("meta",{name:"keywords",content:"eba, \ube45\ub370\uc774\ud130 \uc5f0\uad6c, bigdata research, \ube45\ub370\uc774\ud130, bigdata, big data, education big data, \uad50\uc721 \ube45\ub370\uc774\ud130"}),(0,s.jsx)("meta",{charSet:"URF-8"}),(0,s.jsx)("meta",{name:"viewport",content:"user-scalable=no, width=device-width"})]})}},7920:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(9815),n=r(1294),c=r(4219),a=r(4500);function o(e,t){var r={toFirestore:function(e){return e},fromFirestore:function(e,t){return e.data(t)}},o=(0,n.hJ)(c.db,e).withConverter(r);return{converter:r,collectionRef:o,collectionQuery:(0,a.sQ)((0,s.Z)(t),o,{subscribe:!0}),deleteDocument:function(t){var r=(0,n.JU)(c.db,e,t);(0,n.oe)(r).then((function(){console.log("\ubb38\uc11c \uc0ad\uc81c!")})).catch((function(e){console.log(e)}))}}}},645:function(e,t,r){"use strict";var s=r(7294);const n=s.forwardRef((function({title:e,titleId:t,...r},n){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"}))}));t.Z=n},1446:function(e,t,r){"use strict";var s=r(7294);const n=s.forwardRef((function({title:e,titleId:t,...r},n){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))}));t.Z=n},1038:function(e,t,r){"use strict";var s=r(7294);const n=s.forwardRef((function({title:e,titleId:t,...r},n){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))}));t.Z=n},9396:function(e,t,r){"use strict";function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return s}})},9815:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(943);var n=r(3375);var c=r(1566);function a(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||(0,n.Z)(e)||(0,c.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[885,715,536,774,888,179],(function(){return t=8217,e(e.s=t);var t}));var t=e.O();_N_E=t}]);