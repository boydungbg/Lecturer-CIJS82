"use strict";(self.webpackChunkbuoi3=self.webpackChunkbuoi3||[]).push([[884],{9680:function(e,n,t){var l=t(184);n.Z=function(e){var n=e.onChangeInput,t=e.value,s=e.placeholder,o=e.label,i=e.id,a=e.reff;return(0,l.jsxs)("div",{children:[o&&(0,l.jsx)("label",{htmlFor:i,children:o}),(0,l.jsx)("input",{id:i,type:"text",placeholder:s,className:"h-[40px] px-2 w-full border-b-2 border-neutral-950 outline-0",value:t,ref:a,onChange:function(e){n&&n(e.target.value)}})]})}},5884:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var l=t(9439),s=t(2791),o=t(5717),i=t(184),a=function(){return(0,i.jsx)(o.Z.Consumer,{children:function(e){var n,t=e.todos;return(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[(0,i.jsxs)("div",{className:"text-2xl",children:[null!==(n=t.length)&&void 0!==n?n:0," Tasks"]}),(0,i.jsx)("div",{className:"text-2xl",children:"Todo app"})]})}})},r=t(9680),u=function(e){var n=e.status,t=e.title,a=e.id,u=(0,s.useContext)(o.Z),c=u.onCompleteTodo,d=u.onDeleteTodo,x=u.onEditTodo,h=(0,s.useState)(!1),f=(0,l.Z)(h,2),v=f[0],m=f[1],p=(0,s.useState)(t),j=(0,l.Z)(p,2),b=j[0],g=j[1];return(0,i.jsxs)("div",{className:"flex justify-start items-center my-4",children:[(0,i.jsx)("div",{className:"rounded-full w-[20px] h-[20px] overflow-hidden border border-neutral-400",children:(0,i.jsx)("input",{type:"checkbox",className:"appearance-none w-[20px] h-[20px] checked:bg-blue-500",value:n,onClick:function(e){e.stopPropagation()},onChange:function(e){c(a)}})}),(0,i.jsxs)("div",{className:"flex justify-between w-full",children:[v?(0,i.jsx)("div",{className:"w-full ml-5",children:(0,i.jsx)("form",{action:"",onSubmit:function(){x(a,b),m(!1)},children:(0,i.jsx)(r.Z,{value:b,onChangeInput:function(e){g(e)}})})}):(0,i.jsx)("div",{className:"pl-6 text-lg text-stone-950 ".concat(n?"line-through decoration-4":""),children:t}),v?null:(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"mr-5",onClick:function(){m(!0)},children:"c\u1eadp nh\u1eadt"}),(0,i.jsx)("button",{onClick:function(){d(a)},children:"x\xf3a"})]})]})]})},c=function(){var e=(0,s.useContext)(o.Z).todos;return(0,i.jsx)("div",{className:"flex flex-col h-[500px] overflow-auto mt-4 mb-8",children:null===e||void 0===e?void 0:e.map((function(e,n){return(0,i.jsx)(u,{id:e.id,status:e.status,title:e.title},n)}))})},d=t(7689);var x=function(){var e=(0,s.useContext)(o.Z).onAddTodo,n=(0,s.useState)(""),t=(0,l.Z)(n,2),u=t[0],x=t[1],h=(0,d.s0)();return(0,i.jsxs)("div",{className:"flex h-[100vh] justify-center items-center",children:[(0,i.jsx)("button",{className:"absolute top-5 right-5",onClick:function(){localStorage.clear(),h("/sign-in")},children:"Logout"}),(0,i.jsxs)("div",{className:"mx-auto w-2/4 bg-white  p-6",children:[(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("form",{onSubmit:function(n){n.preventDefault(),e(u),x("")},children:(0,i.jsx)(r.Z,{onChangeInput:function(e){x(e)},value:u,placeholder:"Enter your task here..."})})}),(0,i.jsx)(c,{}),(0,i.jsx)(a,{})]})]})}}}]);
//# sourceMappingURL=884.1cc054fe.chunk.js.map