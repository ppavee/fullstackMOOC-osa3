(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),l=t(14),o=t(2),i=function(e){var n=e.value,t=e.handleChange;return u.a.createElement("div",null,"filter shown with",u.a.createElement("input",{value:n,onChange:t}))},m=function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.nameValue,onChange:e.handleNameChange})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:e.numberValue,onChange:e.handleNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.person,t=e.handleRemove;return u.a.createElement("p",null,n.name," ",n.number,u.a.createElement("button",{onClick:function(){return t(n.id)}},"delete"))},d=function(e){var n=e.persons,t=e.handleRemove;return u.a.createElement(u.a.Fragment,null,n.map((function(e){return u.a.createElement(s,{key:e.name,person:e,handleRemove:t})})))},f=function(e){var n=e.cssClass,t=e.message;return null===t?null:u.a.createElement("div",{className:n},t)},h=t(3),b=t.n(h),v="/api/persons",p=function(){return b.a.get(v)},E=function(e){return b.a.post(v,e)},g=function(e){return b.a.delete("".concat(v,"/").concat(e))},C=function(e){return b.a.put("".concat(v,"/").concat(e.id),e)},O=(t(37),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),s=Object(o.a)(c,2),h=s[0],b=s[1],v=Object(a.useState)(""),O=Object(o.a)(v,2),j=O[0],w=O[1],S=Object(a.useState)(""),N=Object(o.a)(S,2),k=N[0],y=N[1],T=Object(a.useState)(null),R=Object(o.a)(T,2),V=R[0],D=R[1],x=Object(a.useState)(null),A=Object(o.a)(x,2),I=A[0],J=A[1];Object(a.useEffect)((function(){p().then((function(e){r(e.data)}))}),[]);var L=t.filter((function(e){return!k||e.name.toLowerCase().includes(k.toLowerCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(f,{cssClass:"success",message:V}),u.a.createElement(f,{cssClass:"error",message:I}),u.a.createElement(i,{value:k,handleChange:function(e){y(e.target.value)}}),u.a.createElement("h3",null,"Add a new"),u.a.createElement(m,{handleSubmit:function(e){e.preventDefault();var n=t.map((function(e){return e.name})).indexOf(h);if(-1!==n&&j){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var a=t[n],u=Object(l.a)({},a,{number:j});C(u).then((function(e){r(t.map((function(e){return e.id!==u.id?e:u}))),D("Number updated for contact ".concat(u.name)),setTimeout((function(){return D(null)}),5e3)})).catch((function(e){J("Information of ".concat(u.name," has already been removed from server")),setTimeout((function(){return J(null)}),5e3)}))}}else if(j){var c={name:h,number:j};E(c).then((function(e){c.id=e.data.id,r(t.concat(c)),b(""),w(""),D("Added ".concat(c.name)),setTimeout((function(){return D(null)}),5e3)}))}else J("Please provide a number"),setTimeout((function(){return J(null)}),5e3)},handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){w(e.target.value)},nameValue:h,numberValue:j}),u.a.createElement("h3",null,"Numbers"),u.a.createElement(d,{persons:L,handleRemove:function(e){var n=t.find((function(n){return n.id===e}));n.id&&window.confirm("Delete ".concat(n.name,"?"))&&g(e).then((function(a){r(t.filter((function(n){return n.id!==e}))),D("Deleted ".concat(n.name)),setTimeout((function(){return D(null)}),5e3)}))}}))});c.a.render(u.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f35ca7a4.chunk.js.map