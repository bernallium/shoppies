(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(0),i=n.n(a),s=n(7),o=n.n(s),r=(n(32),n(25)),l=n(17),m=n.n(l),u=n(20),j=n(11),h=(n(34),n(21)),b=function(e){var t=e.movies,n=e.handleNominateClick,a=e.NominateComponent,i=e.nominations;return Object(c.jsx)(c.Fragment,{children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"movie ".concat(0===t&&i?"first-movie":""),children:[Object(c.jsx)(h.a,{src:e.Poster,alt:"movie",className:"poster"}),Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-between m-2",children:[Object(c.jsxs)("h6",{className:"movie-title",children:[e.Title," (",e.Year,")"]}),Object(c.jsx)(a,{movie:e,handleNominateClick:n,nominations:i})]})]},e.imdbID)}))})},d=n(22),f=function(e){var t=e.movie,n=e.handleNominateClick,a=e.nominations;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d.a,{variant:a?"primary":"danger",disabled:a&&a.some((function(e){return e.imdbID===t.imdbID})),onClick:function(){return n(t)},children:a?"Add to Nominations":"Remove"})})},p=n(23),O=n(8),v=n(18),x=n(24),N=n(26);var g=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)([]),o=Object(j.a)(s,2),l=o[0],h=o[1],d=Object(a.useState)([]),g=Object(j.a)(d,2),C=g[0],S=g[1],y=Object(a.useState)(!1),k=Object(j.a)(y,2),w=k[0],F=k[1];Object(a.useEffect)((function(){I(n)}),[n]),Object(a.useEffect)((function(){D(C)}),[C]);var I=function(){var e=Object(u.a)(m.a.mark((function e(t){var n,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?type=movie&s=".concat(t,"&apikey=e5181cf5"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(a=e.sent).Search?h(a.Search):h([]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){e.length>=5?F(!0):F(!1)};return Object(c.jsxs)(p.a,{className:"App",fluid:!0,children:[Object(c.jsx)("h1",{className:"app-header",children:"The Shoppies \ud83c\udfc6"}),Object(c.jsx)(O.a,{onSubmit:function(e){return e.preventDefault()},className:"SearchForm",children:Object(c.jsxs)(O.a.Group,{controlId:"searchForm",children:[Object(c.jsx)(O.a.Label,{children:"Search and nominate your favorite movies!"}),Object(c.jsx)(O.a.Control,{type:"text",placeholder:"Search by title",size:"lg",value:n,onChange:function(e){i(e.target.value)}}),Object(c.jsx)(O.a.Text,{children:l.length&&n?"".concat(l.length,' results for "').concat(n,'"'):""})]})}),function(){if(w)return Object(c.jsxs)(x.a,{variant:"primary",dismissible:!0,size:"sm",className:"alert",onClose:function(){return F(!1)},children:["Thank you! ",5," movies have successfully been nominated! \ud83e\udd73"]})}(),Object(c.jsx)(v.a,{children:Object(c.jsx)(b,{movies:l,handleNominateClick:function(e){S([].concat(Object(r.a)(C),[e]))},NominateComponent:f,nominations:C,className:"row"})}),Object(c.jsxs)("h2",{children:["Your Nominations (",C.length,"/5)"]}),Object(c.jsx)(N.a,{now:C.length,max:5,variant:"success",striped:!0,animated:!0}),Object(c.jsx)(v.a,{children:Object(c.jsx)(b,{movies:C,handleNominateClick:function(e){var t=C.filter((function(t){return t.imdbID!==e.imdbID}));S(t)},NominateComponent:f,className:"row"})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.9cede465.chunk.js.map