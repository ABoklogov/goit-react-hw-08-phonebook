(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{100:function(t,e,n){t.exports={contactName:"ContactItem_contactName__3ekQD",contactNumber:"ContactItem_contactNumber__ldckE",contactBtn:"ContactItem_contactBtn__xBenN"}},101:function(t,e,n){t.exports={PhonebookView:"PhonebookView_PhonebookView__KwcqX",Spinner:"PhonebookView_Spinner__aIAQV"}},103:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return Q}));var c={};n.r(c),n.d(c,"getContacts",(function(){return u})),n.d(c,"getFilter",(function(){return b})),n.d(c,"getLoading",(function(){return l})),n.d(c,"getError",(function(){return d})),n.d(c,"getChangeListContacts",(function(){return j})),n.d(c,"getVisibleContacts",(function(){return f}));var a={};n.r(a),n.d(a,"fetchContacts",(function(){return C})),n.d(a,"postContact",(function(){return x})),n.d(a,"deletContacts",(function(){return _}));var r=n(10),o=n(0),s=n(3),i=n(33),u=function(t){return t.contacts.items},b=function(t){return t.contacts.filter},l=function(t){return t.contacts.isLoading},d=function(t){return t.contacts.error},j=function(t){return t.contacts.isChangeListContacts},f=Object(i.a)([b,u],(function(t,e){var n=t.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),m=n(6),h=n.n(m),p=n(15),O=n(25),C=function(){return function(){var t=Object(p.a)(h.a.mark((function t(e){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(s.fetchContactRequest)()),t.prev=1,t.next=4,O.a.fetchContacts();case 4:n=t.sent,c=n.data,e(Object(s.fetchContactSuccess)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(s.fetchContactError)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(p.a)(h.a.mark((function e(n){var c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.addContactRequest)()),e.prev=1,e.next=4,O.a.postContacts(t);case 4:c=e.sent,a=c.data,n(Object(s.addContactSuccess)(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(s.addContactError)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(p.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.deleteContactRequest)()),e.prev=1,e.next=4,O.a.deleteContacts(t);case 4:n(Object(s.deleteContactSuccess)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(s.deleteContactError)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},v=n(11),g=n(92),N=n(31),k=n(93),w=n(41),L=n(97),F=n.n(L),y=n(1),S=function(){var t=Object(o.useState)(""),e=Object(N.a)(t,2),n=e[0],s=e[1],i=Object(o.useState)(""),u=Object(N.a)(i,2),b=u[0],l=u[1],d=Object(r.b)(),j=Object(r.c)(c.getContacts),f=Object(r.c)(c.getChangeListContacts);Object(o.useEffect)((function(){f&&w.b.success("Contact ".concat(n," added"),{theme:"colored"})}),[f,n]);var m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":s(c);break;case"number":l(c)}};return Object(y.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var e={name:n,number:b};j.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?w.b.warn("".concat(n," is alreaby in contacts"),{theme:"colored"}):(d(a.postContact(e)),s(""),l(""))},children:[Object(y.jsx)("p",{className:F.a.text,children:"Name"}),Object(y.jsx)("input",{className:F.a.input,type:"text",name:"name",value:n,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(y.jsx)("p",{className:F.a.text,children:"Number"}),Object(y.jsx)("input",{className:F.a.input,type:"tel",name:"number",value:b,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(y.jsx)(k.a,{className:F.a.btn,type:"submit",children:"Add contact"})]})},V=n(98),E=n.n(V),A=function(){var t=Object(r.c)(c.getFilter),e=Object(r.b)();return Object(y.jsxs)("label",{className:E.a.sort,children:[Object(y.jsx)("span",{className:E.a.sortText,children:"Find contacts by name"}),Object(y.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(s.chengeFilter(t))}})]})},q=n(99),I=n.n(q),P=n(100),B=n.n(P),z=function(t){var e=t.id,n=t.name,o=t.number,s=Object(r.b)(),i=Object(r.c)(c.getChangeListContacts);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("p",{className:B.a.contactName,children:[n,":"]}),Object(y.jsx)("p",{className:B.a.contactNumber,children:o}),Object(y.jsx)(k.a,{className:B.a.contactBtn,onClick:function(){return function(t){s(a.deletContacts(t)),i&&w.b.success("Contact ".concat(n," deleted"),{theme:"colored"})}(e)},children:"delete"})]})},J=function(){var t=Object(r.c)(c.getVisibleContacts);return Object(y.jsx)("ul",{className:I.a.contactList,children:null===t||void 0===t?void 0:t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(y.jsx)("li",{className:I.a.contact,children:Object(y.jsx)(z,{id:e,name:n,number:c})},e)}))})},R=n(101),K=n.n(R),Q=function(){var t=Object(r.c)(c.getLoading),e=Object(r.c)(c.getError),n=Object(r.c)(v.c.getIsLoggedIn),s=Object(r.b)();return Object(o.useEffect)((function(){n&&s(a.fetchContacts())}),[s,n]),Object(y.jsxs)("div",{className:K.a.PhonebookView,children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsx)(S,{}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(A,{}),t&&Object(y.jsx)(g.a,{className:K.a.Spinner,animation:"border"}),!t&&Object(y.jsx)(J,{}),e&&w.b.error(e,{theme:"colored"})]})}},97:function(t,e,n){t.exports={form:"ContactForm_form__2mGJf",text:"ContactForm_text__3cWNK",input:"ContactForm_input__1QVGn",btn:"ContactForm_btn__1kNlg"}},98:function(t,e,n){t.exports={sort:"Filter_sort__3jN0K",sortText:"Filter_sortText__2jMkR"}},99:function(t,e,n){t.exports={contactList:"ContactList_contactList__1FbUO",contact:"ContactList_contact__fmnke"}}}]);
//# sourceMappingURL=3.1230df53.chunk.js.map