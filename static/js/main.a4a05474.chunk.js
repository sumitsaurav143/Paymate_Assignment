(this.webpackJsonppaymate_assgn=this.webpackJsonppaymate_assgn||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),i=c.n(r),d=c(5),s=c(6),j=(c(12),c(0)),l=function(e){return e.data.map((function(e){return Object(j.jsxs)("tr",{id:"t_row",children:[Object(j.jsx)("td",{id:"t_data",children:e.id}),Object(j.jsx)("td",{id:"t_data",children:e.bal}),"Add"==e.action?Object(j.jsx)("td",{id:"t_added",children:e.action}):Object(j.jsx)("td",{id:"t_remove",children:e.action})]})}))};var o=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),o=i[0],u=i[1],b=Object(n.useRef)();return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("Trans")),t=Number(localStorage.getItem("Balance"));e&&(u(e),a(t))}),[]),Object(n.useEffect)((function(){localStorage.setItem("Trans",JSON.stringify(o)),localStorage.setItem("Balance",Number(c))}),[o]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{id:"inp_box",children:[Object(j.jsxs)("h2",{children:["\ud83d\udcb0 BALANCE: ",c]}),Object(j.jsx)("input",{ref:b,type:"number"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){if(""!==b.current.value){var e=""+(new Date).toJSON();a(c+Number(b.current.value)),u((function(t){return[].concat(Object(d.a)(t),[{id:e,bal:b.current.value,action:"Add"}])}))}else alert("Give some Input Balance.")},children:"ADD"}),Object(j.jsx)("button",{onClick:function(){var e=""+(new Date).toJSON();""!==b.current.value?c>=b.current.value?(a(c-b.current.value),u((function(t){return[].concat(Object(d.a)(t),[{id:e,bal:b.current.value,action:"Remove"}])}))):alert("Transaction Denied!! Low Balance."):alert("Give some Input Balance.")},children:"REMOVE"})]})]}),Object(j.jsxs)("div",{id:"transaction_box",children:[Object(j.jsx)("h2",{children:"\ud83c\udfaf Transaction Details:-"}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{id:"t_row",children:[Object(j.jsx)("th",{id:"t_data",children:" Date/Time "}),Object(j.jsx)("th",{id:"t_data",children:"Amount"}),Object(j.jsx)("th",{id:"t_data",children:"Action"})]}),Object(j.jsx)(l,{data:o})]})]})]})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a4a05474.chunk.js.map