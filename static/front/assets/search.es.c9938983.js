import{a as z}from"./codemirror.es.f74c380b.js";import{a as K}from"./searchcursor.es.2469f9b6.js";import{a as U}from"./dialog.es.a993032a.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var k=Object.defineProperty,a=(v,w)=>k(v,"name",{value:w,configurable:!0});function V(v,w){return w.forEach(function(i){i&&typeof i!="string"&&!Array.isArray(i)&&Object.keys(i).forEach(function(h){if(h!=="default"&&!(h in v)){var O=Object.getOwnPropertyDescriptor(i,h);Object.defineProperty(v,h,O.get?O:{enumerable:!0,get:function(){return i[h]}})}})}),Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}a(V,"_mergeNamespaces");var L={exports:{}};(function(v,w){(function(i){i(z.exports,K.exports,U.exports)})(function(i){i.defineOption("search",{bottom:!1});function h(e,t){return typeof e=="string"?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(r){e.lastIndex=r.pos;var n=e.exec(r.string);if(n&&n.index==r.pos)return r.pos+=n[0].length||1,"searching";n?r.pos=n.index:r.skipToEnd()}}}a(h,"searchOverlay");function O(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}a(O,"SearchState");function x(e){return e.state.search||(e.state.search=new O)}a(x,"getSearchState");function N(e){return typeof e=="string"&&e==e.toLowerCase()}a(N,"queryCaseInsensitive");function S(e,t,r){return e.getSearchCursor(t,r,{caseFold:N(t),multiline:!0})}a(S,"getSearchCursor");function $(e,t,r,n,o){e.openDialog(t,n,{value:r,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){b(e)},onKeyDown:o,bottom:e.options.search.bottom})}a($,"persistentDialog");function P(e,t,r,n,o){e.openDialog?e.openDialog(t,o,{value:n,selectValueOnOpen:!0,bottom:e.options.search.bottom}):o(prompt(r,n))}a(P,"dialog");function F(e,t,r,n){e.openConfirm?e.openConfirm(t,n):confirm(r)&&n[0]()}a(F,"confirmDialog");function _(e){return e.replace(/\\([nrt\\])/g,function(t,r){return r=="n"?`
`:r=="r"?"\r":r=="t"?"	":r=="\\"?"\\":t})}a(_,"parseString");function C(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);if(t)try{e=new RegExp(t[1],t[2].indexOf("i")==-1?"":"i")}catch{}else e=_(e);return(typeof e=="string"?e=="":e.test(""))&&(e=/x^/),e}a(C,"parseQuery");function R(e,t,r){t.queryText=r,t.query=C(r),e.removeOverlay(t.overlay,N(t.query)),t.overlay=h(t.query,N(t.query)),e.addOverlay(t.overlay),e.showMatchesOnScrollbar&&(t.annotate&&(t.annotate.clear(),t.annotate=null),t.annotate=e.showMatchesOnScrollbar(t.query,N(t.query)))}a(R,"startSearch");function d(e,t,r,n){var o=x(e);if(o.query)return D(e,t);var s=e.getSelection()||o.lastQuery;if(s instanceof RegExp&&s.source=="x^"&&(s=null),r&&e.openDialog){var c=null,f=a(function(l,y){i.e_stop(y),l&&(l!=o.queryText&&(R(e,o,l),o.posFrom=o.posTo=e.getCursor()),c&&(c.style.opacity=1),D(e,y.shiftKey,function(m,g){var u;g.line<3&&document.querySelector&&(u=e.display.wrapper.querySelector(".CodeMirror-dialog"))&&u.getBoundingClientRect().bottom-4>e.cursorCoords(g,"window").top&&((c=u).style.opacity=.4)}))},"searchNext");$(e,Q(e),s,f,function(l,y){var m=i.keyName(l),g=e.getOption("extraKeys"),u=g&&g[m]||i.keyMap[e.getOption("keyMap")][m];u=="findNext"||u=="findPrev"||u=="findPersistentNext"||u=="findPersistentPrev"?(i.e_stop(l),R(e,x(e),y),e.execCommand(u)):(u=="find"||u=="findPersistent")&&(i.e_stop(l),f(y,l))}),n&&s&&(R(e,o,s),D(e,t))}else P(e,Q(e),"Search for:",s,function(l){l&&!o.query&&e.operation(function(){R(e,o,l),o.posFrom=o.posTo=e.getCursor(),D(e,t)})})}a(d,"doSearch");function D(e,t,r){e.operation(function(){var n=x(e),o=S(e,n.query,t?n.posFrom:n.posTo);!o.find(t)&&(o=S(e,n.query,t?i.Pos(e.lastLine()):i.Pos(e.firstLine(),0)),!o.find(t))||(e.setSelection(o.from(),o.to()),e.scrollIntoView({from:o.from(),to:o.to()},20),n.posFrom=o.from(),n.posTo=o.to(),r&&r(o.from(),o.to()))})}a(D,"findNext");function b(e){e.operation(function(){var t=x(e);t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))})}a(b,"clearSearch");function p(e,t){var r=e?document.createElement(e):document.createDocumentFragment();for(var n in t)r[n]=t[n];for(var o=2;o<arguments.length;o++){var s=arguments[o];r.appendChild(typeof s=="string"?document.createTextNode(s):s)}return r}a(p,"el");function Q(e){return p("",null,p("span",{className:"CodeMirror-search-label"},e.phrase("Search:"))," ",p("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",p("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}a(Q,"getQueryDialog");function j(e){return p("",null," ",p("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",p("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}a(j,"getReplaceQueryDialog");function A(e){return p("",null,p("span",{className:"CodeMirror-search-label"},e.phrase("With:"))," ",p("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}a(A,"getReplacementQueryDialog");function I(e){return p("",null,p("span",{className:"CodeMirror-search-label"},e.phrase("Replace?"))," ",p("button",{},e.phrase("Yes"))," ",p("button",{},e.phrase("No"))," ",p("button",{},e.phrase("All"))," ",p("button",{},e.phrase("Stop")))}a(I,"getDoReplaceConfirm");function T(e,t,r){e.operation(function(){for(var n=S(e,t);n.findNext();)if(typeof t!="string"){var o=e.getRange(n.from(),n.to()).match(t);n.replace(r.replace(/\$(\d)/g,function(s,c){return o[c]}))}else n.replace(r)})}a(T,"replaceAll");function E(e,t){if(!e.getOption("readOnly")){var r=e.getSelection()||x(e).lastQuery,n=t?e.phrase("Replace all:"):e.phrase("Replace:"),o=p("",null,p("span",{className:"CodeMirror-search-label"},n),j(e));P(e,o,n,r,function(s){!s||(s=C(s),P(e,A(e),e.phrase("Replace with:"),"",function(c){if(c=_(c),t)T(e,s,c);else{b(e);var f=S(e,s,e.getCursor("from")),l=a(function(){var m=f.from(),g;!(g=f.findNext())&&(f=S(e,s),!(g=f.findNext())||m&&f.from().line==m.line&&f.from().ch==m.ch)||(e.setSelection(f.from(),f.to()),e.scrollIntoView({from:f.from(),to:f.to()}),F(e,I(e),e.phrase("Replace?"),[function(){y(g)},l,function(){T(e,s,c)}]))},"advance"),y=a(function(m){f.replace(typeof s=="string"?c:c.replace(/\$(\d)/g,function(g,u){return m[u]})),l()},"doReplace");l()}}))})}}a(E,"replace"),i.commands.find=function(e){b(e),d(e)},i.commands.findPersistent=function(e){b(e),d(e,!1,!0)},i.commands.findPersistentNext=function(e){d(e,!1,!0,!0)},i.commands.findPersistentPrev=function(e){d(e,!0,!0,!0)},i.commands.findNext=d,i.commands.findPrev=function(e){d(e,!0)},i.commands.clearSearch=b,i.commands.replace=E,i.commands.replaceAll=function(e){E(e,!0)}})})();var B=L.exports,We=V({__proto__:null,default:B},[L.exports]);export{We as s};