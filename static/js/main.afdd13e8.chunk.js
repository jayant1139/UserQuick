(this.webpackJsonphyperlearn=this.webpackJsonphyperlearn||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(21),r=c.n(n),a=(c(29),c(30),c(31),c(3));var i=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg nav-shadow",children:Object(a.jsxs)("div",{className:"container-fluid ",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsxs)("a",{className:"navbar-brand",href:"/",style:{color:"#fd7e31",fontWeight:"bold",fontSize:"1.3rem"},children:["<Hyper ",Object(a.jsx)("span",{style:{color:"rgb(140, 82, 255)"},children:"Learn"})," />"," "]})}),Object(a.jsx)("div",{className:"imgcon mx-5",children:Object(a.jsx)("img",{src:"https://i.pravatar.cc/",alt:""})})]})})})},l=c(13),j=c.n(l),o=c(14),b=c(9),d=c(15);var x=function(){var e,t=Object(s.useState)([]),c=Object(b.a)(t,2),n=c[0],r=c[1],i=Object(s.useState)(""),l=Object(b.a)(i,2),x=l[0],m=l[1],h=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://6171c3fac20f3a001705fecd.mockapi.io/api/users/");case 2:return t=e.sent,e.t0=r,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){h()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("form",{className:"d-flex my-2 width30 ",children:Object(a.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:x,onChange:function(e){return m(e.target.value)}})}),Object(a.jsxs)("table",{className:"table table-bordered",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Experience"}),Object(a.jsx)("th",{scope:"col",children:"See More"})]})}),Object(a.jsx)("tbody",{children:(e=n,e.filter((function(e){return e.name.toLowerCase().indexOf(x.toLowerCase())>-1||e.experience.toString().toLowerCase().indexOf(x.toLowerCase())>-1}))).map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"name-bold",children:e.name}),Object(a.jsx)("td",{children:e.experience}),Object(a.jsx)("td",{children:Object(a.jsx)(d.b,{to:{pathname:"/Profile",state:{ID:e.id}},children:"View Profile"})})]})})}))})]})]})},m=c(4);function h(e){return Object(a.jsxs)("div",{className:"d-flex flex-column align-items-start mx-2 ",children:[Object(a.jsx)("p",{className:"mx-3",children:Object(a.jsx)("b",{children:"Core Skills"})}),Object(a.jsxs)("div",{className:"coreskills ",children:[Object(a.jsx)("button",{type:"button",className:"btn-skills",children:e.skill2}),Object(a.jsx)("button",{type:"button",className:"btn-skills",children:e.skill3}),Object(a.jsx)("button",{type:"button",className:"btn-skills",children:e.skill4}),Object(a.jsx)("button",{type:"button",className:"btn-skills",children:e.skill5})]}),Object(a.jsx)("p",{className:"mx-2",children:Object(a.jsx)("b",{children:"Past Companies"})}),Object(a.jsxs)("div",{className:"coreskills",children:[Object(a.jsx)("img",{src:e.pastsrc1,alt:""}),Object(a.jsx)("img",{src:e.pastsrc2,alt:""})]})]})}var O=c(11);function u(e){var t={fontSize:"1rem"},c={fontSize:"0.95rem"},s={color:"rgb(161, 161, 161)",margin:"0px"},n={color:"rgb(161, 161, 161)",margin:"0px",fontSize:"0.95rem"},r={cursor:"pointer"};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"main-div my-4",children:[Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsxs)("h5",{children:[Object(a.jsx)("b",{children:e.name})," ",Object(a.jsx)(O.b,{style:{color:"rgb(140, 82, 255)",fontSize:"1.2rem",marginLeft:"1.5rem"}})]}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(O.a,{style:r}),Object(a.jsx)(O.c,{style:r})]})]}),Object(a.jsx)("h6",{style:{color:"gray",fontSize:"1rem"},children:e.shortbio}),Object(a.jsxs)("div",{className:"d-flex my-3",children:[Object(a.jsxs)("div",{className:"d-flex flex-column  ",children:[Object(a.jsx)("p",{style:s,children:"Experience"}),Object(a.jsx)("p",{style:c,children:e.experience})]}),Object(a.jsxs)("div",{className:"d-flex flex-column  mx-5 ",children:[Object(a.jsx)("p",{style:s,children:"Languages"}),Object(a.jsx)("p",{style:c,children:e.language})]})]}),Object(a.jsx)("div",{className:"bio",children:Object(a.jsx)("p",{style:c,children:e.description})}),Object(a.jsxs)("div",{className:"static-div my-4",children:[Object(a.jsx)("h6",{style:t,children:Object(a.jsx)("b",{children:"What is Data Engineering?"})}),Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsx)("p",{style:n,children:"Lean the basic of Data Engineering"}),Object(a.jsx)("button",{className:"btn outline-book",children:"Book"})]})]}),Object(a.jsxs)("div",{className:"static-div my-4",children:[Object(a.jsx)("h6",{style:t,children:Object(a.jsx)("b",{children:"What is Data Engineering?"})}),Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsx)("p",{style:n,children:"Lean the basic of Data Engineering"}),Object(a.jsx)("button",{className:"btn outline-book",children:"Book"})]})]})]})})}u.defaultProps={language:"English, Hindi, Telugu"};var f=c(12);function p(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"d-flex mr-auto my-3 ",children:Object(a.jsxs)("div",{className:"d-flex flex-column  align-items-center my-3",children:[Object(a.jsx)("img",{src:e.src,className:"left-img",alt:""}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f.b,{style:{cursor:"pointer",fontSize:"1.7rem",color:"#0073b1",margin:"1.7rem 0.7rem 0.7rem 0.7rem"}}),Object(a.jsx)(f.c,{style:{cursor:"pointer",fontSize:"1.7rem",color:"rgb(29, 155, 240)",margin:"1.7rem 0.7rem 0.7rem 0.7rem"}}),Object(a.jsx)(f.a,{style:{cursor:"pointer",fontSize:"1.7rem",color:"black",margin:"1.7rem 0.7rem 0.7rem 0.7rem"}})]})]})})})}var g=c(24);function v(){var e=Object(s.useState)(new Date),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"heading d-flex flex-column align-items-center my-3 ",children:[Object(a.jsx)("div",{className:"my-3 booksession",children:Object(a.jsx)("h6",{children:Object(a.jsx)("b",{children:"Book Your Session"})})}),Object(a.jsx)(g.a,{onChange:n,value:c}),Object(a.jsx)("button",{className:"btn my-4 request-demo",children:"Request Demo"})]})})})}function y(e){var t=e.location.state,c=Object(s.useState)([]),n=Object(b.a)(c,2),r=n[0],i=n[1],l=function(){var e=Object(o.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://6171c3fac20f3a001705fecd.mockapi.io/api/users/".concat(t.ID));case 2:return c=e.sent,e.t0=i,e.next=6,c.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)(p,{src:r.avatar}),Object(a.jsx)(h,{pastsrc1:r.pastCompanies,pastsrc2:r.pastCompanies})]}),Object(a.jsx)(u,{name:r.name,shortbio:r.shortBio,experience:r.experience,description:r.description}),Object(a.jsx)(v,{})]})})}var N=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{}),Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",component:x}),Object(a.jsx)(m.b,{exact:!0,path:"/Profile",component:y}),Object(a.jsx)(m.a,{to:"/"})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};r.a.render(Object(a.jsx)(d.a,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.afdd13e8.chunk.js.map