(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{101:function(e,a,t){"use strict";var c=t(7),s=t(18),r=t(28),i=t.n(r),l=t(21),o=t.n(l),n=t(0),d=t(1),b=["as","className","type","tooltip"],j={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},m=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,l=e.className,o=e.type,n=void 0===o?"valid":o,j=e.tooltip,m=void 0!==j&&j,f=Object(s.a)(e,b);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},f),{},{ref:a,className:i()(l,"".concat(n,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=j;var f=m,u=n.createContext({}),O=t(29),v=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.className,o=e.type,b=void 0===o?"checkbox":o,j=e.isValid,m=void 0!==j&&j,f=e.isInvalid,p=void 0!==f&&f,x=e.as,h=void 0===x?"input":x,N=Object(s.a)(e,v),y=Object(n.useContext)(u).controlId;return r=Object(O.a)(r,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:b,id:t||y,className:i()(l,r,m&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,h=["bsPrefix","className","htmlFor"],N=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.htmlFor,o=Object(s.a)(e,h),b=Object(n.useContext)(u).controlId;return t=Object(O.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:l||b,className:i()(r,t)}))}));N.displayName="FormCheckLabel";var y=N,w=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],P=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,j=e.disabled,m=void 0!==j&&j,v=e.isValid,p=void 0!==v&&v,h=e.isInvalid,N=void 0!==h&&h,P=e.feedbackTooltip,g=void 0!==P&&P,I=e.feedback,F=e.className,C=e.style,R=e.title,k=void 0===R?"":R,S=e.type,L=void 0===S?"checkbox":S,z=e.label,V=e.children,T=e.as,E=void 0===T?"input":T,G=Object(s.a)(e,w);r=Object(O.a)(r,"form-check"),l=Object(O.a)(l,"form-switch");var _=Object(n.useContext)(u).controlId,H=Object(n.useMemo)((function(){return{controlId:t||_}}),[_,t]),U=null!=z&&!1!==z&&!V,B=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},G),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:p,isInvalid:N,disabled:m,as:E}));return Object(d.jsx)(u.Provider,{value:H,children:Object(d.jsx)("div",{style:C,className:i()(F,z&&r,b&&"".concat(r,"-inline"),"switch"===L&&l),children:V||Object(d.jsxs)(d.Fragment,{children:[B,U&&Object(d.jsx)(y,{title:k,children:z}),(p||N)&&Object(d.jsx)(f,{type:p?"valid":"invalid",tooltip:g,children:I})]})})})}));P.displayName="FormCheck";var g=Object.assign(P,{Input:x,Label:y}),I=t(2),F=(t(93),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=n.forwardRef((function(e,a){var t,r,l=e.bsPrefix,o=e.type,b=e.size,j=e.htmlSize,m=e.id,f=e.className,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,h=void 0!==x&&x,N=e.plaintext,y=e.readOnly,w=e.as,P=void 0===w?"input":w,g=Object(s.a)(e,F),C=Object(n.useContext)(u).controlId;(l=Object(O.a)(l,"form-control"),N)?t=Object(I.a)({},"".concat(l,"-plaintext"),!0):(r={},Object(I.a)(r,l,!0),Object(I.a)(r,"".concat(l,"-").concat(b),b),t=r);return Object(d.jsx)(P,Object(c.a)(Object(c.a)({},g),{},{type:o,size:j,ref:a,readOnly:y,id:m||C,className:i()(f,t,p&&"is-valid",h&&"is-invalid","color"===o&&"".concat(l,"-color"))}))}));C.displayName="FormControl";var R=Object.assign(C,{Feedback:f}),k=/-(.)/g;var S=["className","bsPrefix","as"],L=function(e){return e[0].toUpperCase()+(a=e,a.replace(k,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?L(e):t,l=a.Component,o=a.defaultProps,b=n.forwardRef((function(a,t){var r=a.className,o=a.bsPrefix,n=a.as,b=void 0===n?l||"div":n,j=Object(s.a)(a,S),m=Object(O.a)(o,e);return Object(d.jsx)(b,Object(c.a)({ref:t,className:i()(r,m)},j))}));return b.defaultProps=o,b.displayName=r,b}("form-floating"),V=["controlId","as"],T=n.forwardRef((function(e,a){var t=e.controlId,r=e.as,i=void 0===r?"div":r,l=Object(s.a)(e,V),o=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(u.Provider,{value:o,children:Object(d.jsx)(i,Object(c.a)(Object(c.a)({},l),{},{ref:a}))})}));T.displayName="FormGroup";var E=T,G=t(30),_=["as","bsPrefix","className"],H=["className"],U=["xxl","xl","lg","md","sm","xs"];var B=n.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,l=Object(s.a)(e,_);t=Object(O.a)(t,"col");var o=[],n=[];return U.forEach((function(e){var a,c,s,r=l[e];if(delete l[e],"object"===typeof r&&null!=r){var i=r.span;a=void 0===i||i,c=r.offset,s=r.order}else a=r;var d="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(d):"".concat(t).concat(d,"-").concat(a)),null!=s&&n.push("order".concat(d,"-").concat(s)),null!=c&&n.push("offset".concat(d,"-").concat(c))})),[Object(c.a)(Object(c.a)({},l),{},{className:i.a.apply(void 0,[r].concat(n,o))}),{as:a,bsPrefix:t,spans:o}]}(e),r=Object(G.a)(t,2),l=r[0],o=l.className,n=Object(s.a)(l,H),b=r[1],j=b.as,m=void 0===j?"div":j,f=b.bsPrefix,u=b.spans;return Object(d.jsx)(m,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(o,!u.length&&f)}))}));B.displayName="Col";var J=B,M=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],D=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,l=e.bsPrefix,o=e.column,b=e.visuallyHidden,j=e.className,m=e.htmlFor,f=Object(s.a)(e,M),v=Object(n.useContext)(u).controlId;l=Object(O.a)(l,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=i()(j,l,b&&"visually-hidden",o&&p);return m=m||v,o?Object(d.jsx)(J,Object(c.a)({ref:a,as:"label",className:x,htmlFor:m},f)):Object(d.jsx)(r,Object(c.a)({ref:a,className:x,htmlFor:m},f))}));D.displayName="FormLabel",D.defaultProps={column:!1,visuallyHidden:!1};var W=D,q=["bsPrefix","className","id"],A=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.id,o=Object(s.a)(e,q),b=Object(n.useContext)(u).controlId;return t=Object(O.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:i()(r,t),id:l||b}))}));A.displayName="FormRange";var K=A,Q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],X=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,l=e.htmlSize,o=e.className,b=e.isValid,j=void 0!==b&&b,m=e.isInvalid,f=void 0!==m&&m,v=e.id,p=Object(s.a)(e,Q),x=Object(n.useContext)(u).controlId;return t=Object(O.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:l,ref:a,className:i()(o,t,r&&"".concat(t,"-").concat(r),j&&"is-valid",f&&"is-invalid"),id:v||x}))}));X.displayName="FormSelect";var Y=X,Z=["bsPrefix","className","as","muted"],$=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,o=void 0===l?"small":l,n=e.muted,b=Object(s.a)(e,Z);return t=Object(O.a)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:i()(r,t,n&&"text-muted")}))}));$.displayName="FormText";var ee=$,ae=n.forwardRef((function(e,a){return Object(d.jsx)(g,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));ae.displayName="Switch";var te=Object.assign(ae,{Input:g.Input,Label:g.Label}),ce=["bsPrefix","className","children","controlId","label"],se=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,o=e.controlId,n=e.label,b=Object(s.a)(e,ce);return t=Object(O.a)(t,"form-floating"),Object(d.jsxs)(E,Object(c.a)(Object(c.a)({ref:a,className:i()(r,t),controlId:o},b),{},{children:[l,Object(d.jsx)("label",{htmlFor:o,children:n})]}))}));se.displayName="FloatingLabel";var re=se,ie=["className","validated","as"],le={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},oe=n.forwardRef((function(e,a){var t=e.className,r=e.validated,l=e.as,o=void 0===l?"form":l,n=Object(s.a)(e,ie);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(t,r&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=le;a.a=Object.assign(oe,{Group:E,Control:R,Floating:z,Check:g,Switch:te,Label:W,Text:ee,Range:K,Select:Y,FloatingLabel:re})},103:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var c=t(30),s=t(0),r=t(9),i=t(10),l=t(101),o=t(92),n=t(94),d=t.n(n),b=t(1),j=function(){var e=Object(r.b)(),a=Object(s.useState)(""),t=Object(c.a)(a,2),n=t[0],j=t[1],m=Object(s.useState)(""),f=Object(c.a)(m,2),u=f[0],O=f[1],v=Object(s.useState)(""),p=Object(c.a)(v,2),x=p[0],h=p[1],N=function(e){var a=e.target,t=a.name,c=a.value;switch(t){case"name":return j(c);case"email":return O(c);case"password":return h(c);default:return}};return Object(b.jsxs)(l.a,{className:d.a.RegisterForm,onSubmit:function(a){a.preventDefault(),e(i.a.register({name:n,email:u,password:x})),j(""),O(""),h("")},children:[Object(b.jsxs)(l.a.Group,{className:"mb-3",children:[Object(b.jsx)(l.a.Label,{children:"User Name"}),Object(b.jsx)(l.a.Control,{type:"text",name:"name",value:n,onChange:N,placeholder:"Enter name"})]}),Object(b.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(l.a.Label,{children:"Email address"}),Object(b.jsx)(l.a.Control,{type:"email",name:"email",value:u,onChange:N,placeholder:"Enter email"}),Object(b.jsx)(l.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(l.a.Label,{children:"Password"}),Object(b.jsx)(l.a.Control,{type:"password",name:"password",value:x,onChange:N,placeholder:"Password"})]}),Object(b.jsx)(o.a,{variant:"primary",type:"submit",children:"Register"})]})}},93:function(e,a,t){"use strict";var c=function(){};e.exports=c},94:function(e,a,t){e.exports={RegisterForm:"RegisterView_RegisterForm__2P3i6"}}}]);
//# sourceMappingURL=5.120e1da7.chunk.js.map