(this["webpackJsonpcrash-course"]=this["webpackJsonpcrash-course"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),l=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"black",backgroundColor:"#FF8A65",text:"test"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(j,{onClick:n,color:c?"red":"green",text:c?"close":"open"})]})};b.defaultProps={title:"task tracker"};var h=b,O=n(8),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""," "),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},m=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?u?(t({text:a,day:u,reminder:O}),o(""),j(""),x(!1)):alert("please enter a date and time"):alert("please enter a name")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:" task "}),Object(d.jsx)("input",{type:"text",placeholder:"add task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control ",children:[Object(d.jsx)("label",{children:" day & time "}),Object(d.jsx)("input",{type:"text",placeholder:"add day & time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:" Set reminder "}),Object(d.jsx)("input",{type:"checkbox",value:O,checked:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{className:"btn btn-block",type:"submit",value:"safe task"})]})},g=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"breakfast",day:"18 aug 10:00",reminder:!0},{id:2,text:"workout",day:"18 aug 12:00",reminder:!0},{id:3,text:"lunch",day:"18 aug 13:00",reminder:!1}]),o=Object(l.a)(a,2),u=o[0],j=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(m,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);j([].concat(Object(s.a)(u),[n]))}}),u.length>0?Object(d.jsx)(f,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"no tasks"]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.79821f78.chunk.js.map