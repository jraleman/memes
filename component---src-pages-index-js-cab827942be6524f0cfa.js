(self.webpackChunkmemes=self.webpackChunkmemes||[]).push([[293],{2808:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6643:function(e,t,n){"use strict";var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},7905:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ie}});var r=n(6540),o=n(1015),i=n(7859);const a=i.Ay.header`
  background: #afdde9;
  margin-bottom: 1.45rem;
`,c=i.Ay.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`,u=i.Ay.h1`
  margin: 0; 
`,l=(0,i.Ay)(o.Link)`
  color: white;
  text-decoration: none;
`;var s=e=>{let{siteTitle:t}=e;return r.createElement(a,null,r.createElement(c,null,r.createElement(u,null,r.createElement(l,{to:"/"},t))))};const f=i.Ay.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`,p=i.Ay.footer`
  margin-top: 2rem;
`,d=i.Ay.div``;var y,m,h,b,g=e=>{var t;let{children:n}=e;const i=(0,o.useStaticQuery)("3649515864"),a=`© ${(new Date).getFullYear()} Built with Gatsby`;return r.createElement(d,null,r.createElement(s,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement(f,null,r.createElement("main",null,n),r.createElement(p,null,a)))},v=n(5556),T=n.n(v),w=n(6643),A=n.n(w),E=n(2808),O=n.n(E),C=n(7325),S=n.n(C),j="bodyAttributes",k="htmlAttributes",P="titleAttributes",x={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},L=(Object.keys(x).map((function(e){return x[e]})),"charset"),I="cssText",M="href",N="http-equiv",R="innerHTML",_="itemprop",B="name",D="property",H="rel",q="src",Y="target",F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},U="defaultTitle",z="defer",K="encodeSpecialCharacters",$="onChangeClientState",V="titleTemplate",W=Object.keys(F).reduce((function(e,t){return e[F[t]]=t,e}),{}),Q=[x.NOSCRIPT,x.SCRIPT,x.STYLE],G="data-react-helmet",J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},te=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ne=function(e){var t=ce(e,x.TITLE),n=ce(e,V);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ce(e,U);return t||r||void 0},re=function(e){return ce(e,$)||function(){}},oe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},ie=function(e,t){return t.filter((function(e){return void 0!==e[x.BASE]})).map((function(e){return e[x.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ae=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&pe("Helmet: "+e+' should be of type "Array". Instead found type "'+J(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===H&&"canonical"===e[n].toLowerCase()||u===H&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==R&&c!==I&&c!==_||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=S()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ce=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ue=(y=Date.now(),function(e){var t=Date.now();t-y>16?(y=t,e(t)):setTimeout((function(){ue(e)}),0)}),le=function(e){return clearTimeout(e)},se="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ue:n.g.requestAnimationFrame||ue,fe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||le:n.g.cancelAnimationFrame||le,pe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},de=null,ye=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;be(x.BODY,r),be(x.HTML,o),he(f,p);var d={baseTag:ge(x.BASE,n),linkTags:ge(x.LINK,i),metaTags:ge(x.META,a),noscriptTags:ge(x.NOSCRIPT,c),scriptTags:ge(x.SCRIPT,l),styleTags:ge(x.STYLE,s)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,y,m)},me=function(e){return Array.isArray(e)?e.join(""):e},he=function(e,t){void 0!==e&&document.title!==e&&(document.title=me(e)),be(x.TITLE,t)},be=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(G),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(G):n.getAttribute(G)!==a.join(",")&&n.setAttribute(G,a.join(","))}},ge=function(e,t){var n=document.head||document.querySelector(x.HEAD),r=n.querySelectorAll(e+"["+G+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===R)n.innerHTML=t.innerHTML;else if(r===I)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(G,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ve=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)},we=function(e,t,n){switch(e){case x.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[G]=!0,i=Te(n,o),[r.createElement(x.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=ve(n),i=me(t);return o?"<"+e+" "+G+'="true" '+o+">"+te(i,r)+"</"+e+">":"<"+e+" "+G+'="true">'+te(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case j:case k:return{toComponent:function(){return Te(t)},toString:function(){return ve(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[G]=!0,o);return Object.keys(t).forEach((function(e){var n=F[e]||e;if(n===R||n===I){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===R||e===I)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+te(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Q.indexOf(e);return t+"<"+e+" "+G+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ae=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:we(x.BASE,t,r),bodyAttributes:we(j,n,r),htmlAttributes:we(k,o,r),link:we(x.LINK,i,r),meta:we(x.META,a,r),noscript:we(x.NOSCRIPT,c,r),script:we(x.SCRIPT,u,r),style:we(x.STYLE,l,r),title:we(x.TITLE,{title:f,titleAttributes:p},r)}},Ee=A()((function(e){return{baseTag:ie([M,Y],e),bodyAttributes:oe(j,e),defer:ce(e,z),encode:ce(e,K),htmlAttributes:oe(k,e),linkTags:ae(x.LINK,[H,M],e),metaTags:ae(x.META,[B,L,N,D,_],e),noscriptTags:ae(x.NOSCRIPT,[R],e),onChangeClientState:re(e),scriptTags:ae(x.SCRIPT,[q,R],e),styleTags:ae(x.STYLE,[I],e),title:ne(e),titleAttributes:oe(P,e)}}),(function(e){de&&fe(de),e.defer?de=se((function(){ye(e,(function(){de=null}))})):(ye(e),de=null)}),Ae)((function(){return null})),Oe=(m=Ee,b=h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!O()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case x.SCRIPT:case x.NOSCRIPT:return{innerHTML:t};case x.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case x.TITLE:return Z({},o,((t={})[r.type]=a,t.titleAttributes=Z({},i),t));case x.BODY:return Z({},o,{bodyAttributes:Z({},i)});case x.HTML:return Z({},o,{htmlAttributes:Z({},i)})}return Z({},o,((n={})[r.type]=Z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[W[n]||n]=e[n],t}),t)}(ee(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case x.LINK:case x.META:case x.NOSCRIPT:case x.SCRIPT:case x.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ee(e,["children"]),o=Z({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(m,o)},X(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(r.Component),h.propTypes={base:T().object,bodyAttributes:T().object,children:T().oneOfType([T().arrayOf(T().node),T().node]),defaultTitle:T().string,defer:T().bool,encodeSpecialCharacters:T().bool,htmlAttributes:T().object,link:T().arrayOf(T().object),meta:T().arrayOf(T().object),noscript:T().arrayOf(T().object),onChangeClientState:T().func,script:T().arrayOf(T().object),style:T().arrayOf(T().object),title:T().string,titleAttributes:T().object,titleTemplate:T().string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=m.peek,h.rewind=function(){var e=m.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},b);Oe.renderStatic=Oe.rewind;function Ce(e){var t,n;let{description:i,lang:a,meta:c,title:u}=e;const{site:l}=(0,o.useStaticQuery)("63159454"),s=i||l.siteMetadata.description,f=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(Oe,{htmlAttributes:{lang:a},title:u,titleTemplate:f?`%s | ${f}`:null,meta:[{name:"description",content:s},{property:"og:title",content:u},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:s}].concat(c)})}Ce.defaultProps={lang:"en",meta:[],description:""};var Se=Ce,je=n.p+"static/logo-8bf9ef3940525333de6b84ca3958de82.jpeg";const ke=i.Ay.div`
    background-color: white;
    text-align: center;
`,Pe=i.Ay.img`
    margin: 0 auto;
`;var xe=()=>r.createElement(ke,null,r.createElement(Pe,{src:je,alt:"logo"})),Le=n(3984);var Ie=()=>r.createElement(g,null,r.createElement(Se,{title:"Memes"}),r.createElement(xe,null),r.createElement("hr",null),r.createElement(Le.default,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-cab827942be6524f0cfa.js.map