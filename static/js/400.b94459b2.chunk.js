"use strict";(self.webpackChunkbuoi3=self.webpackChunkbuoi3||[]).push([[400],{9680:function(e,n,r){var t=r(184);n.Z=function(e){var n=e.onChangeInput,r=e.value,a=e.placeholder,s=e.label,u=e.id,c=e.reff;return(0,t.jsxs)("div",{children:[s&&(0,t.jsx)("label",{htmlFor:u,children:s}),(0,t.jsx)("input",{id:u,type:"text",placeholder:a,className:"h-[40px] px-2 w-full border-b-2 border-neutral-950 outline-0",value:r,ref:c,onChange:function(e){n&&n(e.target.value)}})]})}},7400:function(e,n,r){r.r(n);var t=r(7689),a=r(1087),s=r(9680),u=r(1129),c=r(2791),o=r(5717),l=r(184);n.default=function(){var e=(0,c.useRef)(),n=(0,c.useRef)(),r=(0,t.s0)(),i=(0,c.useContext)(o.Z).setUser;return(0,l.jsx)("div",{className:"flex justify-center items-center h-[100vh] overflow-auto",children:(0,l.jsx)("div",{className:"w-[500px] h-[500px] bg-gray-200 rounded-lg",children:(0,l.jsxs)("div",{className:"p-10",children:[(0,l.jsx)("h3",{className:"text-3xl text-center",children:"Login"}),(0,l.jsx)("div",{className:"my-5",children:(0,l.jsx)("form",{onSubmit:function(t){t.preventDefault(),""!=e.current.value&&""!=n.current.value?(0,u.P)(e.current.value,n.current.value).then((function(t){var a=t.data;a.length>0&&a[0].user_name===e.current.value&&a[0].password===n.current.value?(localStorage.setItem("user_token",a[0].id),i(a[0]),r("/")):console.error("Ten tai khoan hoac mat khau ko dung")})).catch((function(e){console.log("Loi he thong xay ra"+e)})):console.log("Khong dc bo trong")},children:(0,l.jsxs)("div",{className:"flex flex-col\tgap-y-[20px]",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.Z,{label:"User name",reff:e})}),(0,l.jsx)("div",{children:(0,l.jsx)(s.Z,{label:"Password",reff:n})}),(0,l.jsx)("button",{className:"p-3 w-full bg-[#fcba03]",children:"Dang nhap"})]})})}),(0,l.jsxs)("p",{children:["Neu ban chua co tai khoan? hay ",(0,l.jsx)(a.rU,{to:"/sign-up",children:"Dang ky"})]})]})})})}},1129:function(e,n,r){r.d(n,{P:function(){return o},r:function(){return c}});var t=r(4165),a=r(5861),s=r(7960),u="https://645ba40ca8f9e4d6e76e9095.mockapi.io/users",c=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(u,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u),{params:{user_name:n,password:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=400.b94459b2.chunk.js.map