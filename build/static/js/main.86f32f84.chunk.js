(this.webpackJsonpprojekt=this.webpackJsonpprojekt||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),c=n.n(r),s=n(8),u=n.n(s),a=(n(32),n(33),n(9)),o=n(3),j=n(16),l=n(11),d=function(e,t){return Object(o.a)(Object(o.a)({},t),e)},p=function(e,t){return Object(o.a)(Object(o.a)({},t),{},{kurseLaden:function(t){e({type:"READ_KURSE",item:t})},loeschenKurs:function(t){e({type:"DELETE_KURS",index:t})},addKurs:function(t){e({type:"ADD_KURSE",item:t})},editKurs:function(t){e({type:"EDIT_KURS",item:t})}})},x=n(6),h=n.n(x);var b=Object(l.b)(d,p)((function(e){var t="http://localhost:3001",n=Object(r.useRef)();function c(e){if(""===e)return[];var t=[];return e.split(/[,]+/).map((function(e){return t.push(e)})),t}function s(e){return 0===e.length?"":e.map((function(e){return"".concat(e)})).join(",")}Object(r.useEffect)((function(){h.a.get("".concat(t,"/posts")).then((function(t){e.kurseLaden(t.data)})).catch((function(e){console.log(e)}))}),[]);var u=Object(r.useState)({kursname:"",sitzungen:"",image:"",text:"",wirkungsweise:"",extra:"",audiotitle:"",preis:"",inappID:""}),l=Object(j.a)(u,2),d=l[0],p=l[1],x=function(e){p((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(a.a)({},e.target.name,e.target.value))}))},b=Object(r.useState)(!1),g=Object(j.a)(b,2),O=g[0],m=g[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{onSubmit:function(i){i.preventDefault(),O?h.a.put("".concat(t,"/posts/").concat(n.current),{kursname:d.kursname,sitzungen:d.sitzungen,image:d.image,text:d.text,wirkungsweise:c(d.wirkungsweise),extra:c(d.extra),audiotitle:c(d.audiotitle),preis:d.preis,inappID:d.inappID}).then((function(t){var i=e.kurse.map((function(e){return e.id===n.current?t.data:e}));e.editKurs(i),p({kursname:"",sitzungen:"",image:"",text:"",wirkungsweise:"",extra:"",audiotitle:"",preis:"",inappID:""}),m(!1)})):h.a.post("".concat(t,"/posts"),{kursname:d.kursname,sitzungen:d.sitzungen,image:d.image,text:d.text,wirkungsweise:c(d.wirkungsweise),extra:c(d.extra),audiotitle:c(d.audiotitle),preis:d.preis,inappID:d.inappID}).then((function(t){p({kursname:"",sitzungen:"",image:"",text:"",wirkungsweise:"",extra:"",audiotitle:"",preis:"",inappID:""}),e.addKurs(t.data)})).catch((function(e){return console.log("404")}))},children:[Object(i.jsx)("h3",{children:O?"Kurs bearbeiten":"Neuer Kurs"}),Object(i.jsx)("input",{type:"text",placeholder:"Kursname",name:"kursname",value:d.kursname,onChange:x}),Object(i.jsx)("textarea",{type:"text",placeholder:"Text",name:"text",value:d.text,onChange:x}),Object(i.jsx)("input",{type:"text",placeholder:"Sitzungen",name:"sitzungen",value:d.sitzungen,onChange:x}),Object(i.jsx)("input",{type:"text",placeholder:"Wirkungsweise",name:"wirkungsweise",value:d.wirkungsweise,onChange:x}),Object(i.jsx)("input",{type:"text",placeholder:"Extras",name:"extra",value:d.extra,onChange:x}),Object(i.jsx)("input",{type:"text",placeholder:"Audiotitel",name:"audiotitel",value:d.audiotitle,onChange:x}),Object(i.jsx)("input",{type:"text",placeholder:"Preis",name:"preis",value:d.preis,onChange:x}),Object(i.jsx)("input",{type:"text",placeholder:"In-App ID",name:"inappid",value:d.inappID,onChange:x}),Object(i.jsx)("button",{children:O?"Bearbeiten":"Hinzuf\xfcgen"})]}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Kursname"}),Object(i.jsx)("th",{children:"Sitzungen"}),Object(i.jsx)("th",{children:"Wirkungsweise"}),Object(i.jsx)("th",{children:"Extras"}),Object(i.jsx)("th",{children:"Audiotitel"}),Object(i.jsx)("th",{children:"Preis"}),Object(i.jsx)("th",{children:"In-App ID"}),Object(i.jsx)("th",{})]})}),Object(i.jsx)("tbody",{children:e.kurse.length>0&&Object(i.jsx)(i.Fragment,{children:e.kurse.map((function(r,c){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:r.id}),Object(i.jsx)("td",{children:r.kursname}),Object(i.jsx)("td",{children:r.sitzungen}),Object(i.jsx)("td",{children:Object(i.jsx)("ul",{children:r.wirkungsweise.map((function(e){return Object(i.jsx)("li",{children:e})}))})}),Object(i.jsx)("td",{children:Object(i.jsx)("ul",{children:r.extra.map((function(e){return Object(i.jsx)("li",{children:e})}))})}),Object(i.jsx)("td",{children:Object(i.jsx)("ul",{children:r.audiotitle.map((function(e){return Object(i.jsx)("li",{children:e})}))})}),Object(i.jsxs)("td",{children:[r.preis," EUR"]}),Object(i.jsx)("td",{children:r.inappID}),Object(i.jsxs)("td",{children:[Object(i.jsx)("button",{onClick:function(){return function(t){if(O)n.current=0,p({kursname:"",sitzungen:"",image:"",text:"",wirkungsweise:"",extra:"",audiotitle:"",preis:"",inappID:""}),m(!1);else{n.current=t;var i=e.kurse.find((function(e){return e.id===t}));console.log(i.extra),p({kursname:i.kursname,sitzungen:i.sitzungen,image:i.image,text:i.text,wirkungsweise:s(i.wirkungsweise),extra:s(i.extra),audiotitle:s(i.audiotitle),preis:i.preis,inappID:i.inappID}),m(!0)}}(r.id)},children:"Edit"}),Object(i.jsx)("button",{onClick:function(){return n=r.id,console.log(t),void h.a.delete("".concat(t,"/posts/").concat(n,"/")).then((function(){e.loeschenKurs(n)})).catch((function(e){console.log(e)}));var n},children:"L\xf6schen"})]})]},r.id)}))})})]})]})}));var g=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))},m=n(5),f=n(26),k=n(7),w={kurse:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ_KURSE":return{kurse:Object(k.a)(t.item)};case"DELETE_KURS":return{kurse:Object(k.a)(e.kurse.filter((function(e){return e.id!==t.index})))};case"ADD_KURSE":return{kurse:[].concat(Object(k.a)(e.kurse),[t.item])};case"EDIT_KURS":return{kurse:Object(k.a)(t.item)}}return e},v=Object(m.c)(D,Object(m.a)(f.a));u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(l.a,{store:v,children:Object(i.jsx)(g,{})})}),document.getElementById("root")),O()}},[[58,1,2]]]);
//# sourceMappingURL=main.86f32f84.chunk.js.map