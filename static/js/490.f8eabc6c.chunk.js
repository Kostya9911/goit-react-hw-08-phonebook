"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{6490:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(2791),a=n(9434),o=n(6907),c=n(9439),u="ContactForm_contact_form__MxVfX",i="ContactForm_contact_form_label__5R0kL",s="ContactForm_contact_form_input__b81kb",l="ContactForm_btn_add__Xc9Xe",f=n(972),m="NOT_FOUND";var p=function(t,e){return t===e};function d(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?p:r,o=n.maxSize,c=void 0===o?1:o,u=n.resultEqualityCheck,i=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),s=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:m},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(i):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return m}return{get:r,put:function(e,a){r(e)===m&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,i);function l(){var e=s.get(arguments);if(e===m){if(e=t.apply(null,arguments),u){var n=s.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function _(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function h(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,c=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=u,l=s.memoizeOptions,f=void 0===l?n:l,m=Array.isArray(f)?f:[f],p=_(r),d=t.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(m)),h=t((function(){for(var t=[],e=p.length,n=0;n<e;n++)t.push(p[n].apply(null,arguments));return o=d.apply(null,t)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:d,dependencies:p,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return a}var v=h(d),C=function(t){return t.contacts.items},b=v([C,function(t){return t.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),x=n(5995),y=n(6365),j=n(184),N=function(){var t=(0,a.v9)(C),e=(0,a.I0)(),n=(0,x.Z)(y,{volume:.5}),r=(0,c.Z)(n,2),o=r[0],m=r[1].stop;return(0,j.jsxs)("form",{className:u,autoComplete:"off",onSubmit:function(n){n.preventDefault(),function(n,r){var a=t.find((function(t){return t.name===n}));if(a)alert("".concat(n," is already in contacts!"));else{var o={name:n,number:r};e((0,f.uK)(o))}}(n.currentTarget.name.value,n.currentTarget.number.value),n.currentTarget.reset()},children:[(0,j.jsxs)("label",{className:i,children:["Name",(0,j.jsx)("input",{className:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)("label",{className:i,children:["Number",(0,j.jsx)("input",{className:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)("button",{type:"submit",onMouseEnter:function(){o()},onMouseLeave:function(){m()},className:l,children:"Add contact"})]})},g={inputListContact:"ContactItem_inputListContact__GvRnX",inputListContactEdit:"ContactItem_inputListContactEdit__K1HhO ContactItem_inputListContact__GvRnX",widthName:"ContactItem_widthName__T-yeR",widthNumber:"ContactItem_widthNumber__7sSHx",btn:"ContactItem_btn__1h5dG"},w=function(t){var e=t.onDelete,n=t.name,o=t.number,u=t.id,i=(0,r.useState)(!1),s=(0,c.Z)(i,2),l=s[0],m=s[1],p=(0,r.useState)(n),d=(0,c.Z)(p,2),_=d[0],h=d[1],v=(0,r.useState)(o),C=(0,c.Z)(v,2),b=C[0],N=C[1],w=(0,a.I0)(),L=(0,x.Z)(y,{volume:.5}),k=(0,c.Z)(L,2),E=k[0],F=k[1].stop;return(0,j.jsxs)("form",{className:g.formListContact,autoComplete:"off",onSubmit:function(t){t.preventDefault();var e={name:_,number:b,id:u};w((0,f._n)(e))},children:[(0,j.jsx)("input",{className:"".concat(l?g.inputListContactEdit:g.inputListContact," ").concat(g.widthName),type:"text",name:"name",onChange:function(t){return h(t.currentTarget.value)},value:_,disabled:!l,size:"300px"}),(0,j.jsx)("input",{className:"".concat(l?g.inputListContactEdit:g.inputListContact," ").concat(g.widthNumber),type:"tel",name:"number",size:"300px",onChange:function(t){return N(t.currentTarget.value)},value:b,disabled:!l}),(0,j.jsx)("button",{className:g.btn,type:l?"button":"submit",onClick:function(){return m(!l)},onMouseEnter:function(){E()},onMouseLeave:function(){F()},children:l?"Save":"Edit"}),(0,j.jsx)("button",{className:g.btn,type:"button",onClick:l?function(){h(n),N(o),m(!l)}:e,onMouseEnter:function(){E()},onMouseLeave:function(){F()},children:l?"Cancel":"Delete"})]})},L="ContactList_counterVisibleContacts__MS3UT",k="ContactList_wrapper_contactList__qE8PP",E="ContactList_oll__RD43n",F="ContactList_contactListItem__3th7-",A=function(){var t=(0,a.v9)(C),e=(0,a.v9)(b),n=(0,a.I0)();return(0,j.jsxs)("div",{className:k,children:[(0,j.jsxs)("p",{className:L,children:[e.length,"\xa0of\xa0",t.length]}),(0,j.jsx)("ol",{className:E,children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return(0,j.jsx)("li",{className:F,children:(0,j.jsx)(w,{onDelete:function(){!function(t){n((0,f.GK)(t))}(e)},name:r,number:a,id:e})},e)}))})]})},I={app:"Contacts_app__Q1T68",wrapper_cotacts_forms:"Contacts_wrapper_cotacts_forms__UcAFC"},S="Filter_label_filter__-5ECC",z="Filter_input_filter__o87tO",M=n(2034),T=function(){var t=(0,a.I0)();return(0,j.jsxs)("label",{className:S,children:["Find contact by name",(0,j.jsx)("input",{className:z,autoComplete:"off",type:"text",name:"filter",onChange:function(e){t((0,M.M)(e.currentTarget.value))}})]})};function Z(){var t=(0,a.I0)();return(0,r.useEffect)((function(){t((0,f.yF)())}),[t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.B6,{children:(0,j.jsx)(o.ql,{children:(0,j.jsx)("title",{children:"Your contacts"})})}),(0,j.jsxs)("div",{className:I.app,children:[(0,j.jsxs)("div",{className:I.wrapper_cotacts_forms,children:[(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(N,{}),(0,j.jsx)("h2",{className:I.title_contacts,children:"Contacts"}),(0,j.jsx)(T,{})]}),(0,j.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=490.f8eabc6c.chunk.js.map