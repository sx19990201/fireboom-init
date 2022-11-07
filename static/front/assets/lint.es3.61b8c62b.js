import{a as B}from"./codemirror.es.f74c380b.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var W=Object.defineProperty,p=(h,d)=>W(h,"name",{value:d,configurable:!0});function H(h,d){return d.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(f){if(f!=="default"&&!(f in h)){var v=Object.getOwnPropertyDescriptor(s,f);Object.defineProperty(h,f,v.get?v:{enumerable:!0,get:function(){return s[f]}})}})}),Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}p(H,"_mergeNamespaces");var U={exports:{}};(function(h,d){(function(s){s(B.exports)})(function(s){var f="CodeMirror-lint-markers",v="CodeMirror-lint-line-";function E(t,e,o){var r=document.createElement("div");r.className="CodeMirror-lint-tooltip cm-s-"+t.options.theme,r.appendChild(o.cloneNode(!0)),t.state.lint.options.selfContain?t.getWrapperElement().appendChild(r):document.body.appendChild(r);function i(n){if(!r.parentNode)return s.off(document,"mousemove",i);r.style.top=Math.max(0,n.clientY-r.offsetHeight-5)+"px",r.style.left=n.clientX+5+"px"}return p(i,"position"),s.on(document,"mousemove",i),i(e),r.style.opacity!=null&&(r.style.opacity=1),r}p(E,"showTooltip");function C(t){t.parentNode&&t.parentNode.removeChild(t)}p(C,"rm");function N(t){!t.parentNode||(t.style.opacity==null&&C(t),t.style.opacity=0,setTimeout(function(){C(t)},600))}p(N,"hideTooltip");function L(t,e,o,r){var i=E(t,e,o);function n(){s.off(r,"mouseout",n),i&&(N(i),i=null)}p(n,"hide");var a=setInterval(function(){if(i)for(var l=r;;l=l.parentNode){if(l&&l.nodeType==11&&(l=l.host),l==document.body)return;if(!l){n();break}}if(!i)return clearInterval(a)},400);s.on(r,"mouseout",n)}p(L,"showTooltipFor");function w(t,e,o){this.marked=[],e instanceof Function&&(e={getAnnotations:e}),(!e||e===!0)&&(e={}),this.options={},this.linterOptions=e.options||{};for(var r in O)this.options[r]=O[r];for(var r in e)O.hasOwnProperty(r)?e[r]!=null&&(this.options[r]=e[r]):e.options||(this.linterOptions[r]=e[r]);this.timeout=null,this.hasGutter=o,this.onMouseOver=function(i){j(t,i)},this.waitingFor=0}p(w,"LintState");var O={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function k(t){var e=t.state.lint;e.hasGutter&&t.clearGutter(f),e.options.highlightLines&&x(t);for(var o=0;o<e.marked.length;++o)e.marked[o].clear();e.marked.length=0}p(k,"clearMarks");function x(t){t.eachLine(function(e){var o=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);o&&t.removeLineClass(e,"wrap",o[0])})}p(x,"clearErrorLines");function A(t,e,o,r,i){var n=document.createElement("div"),a=n;return n.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+o,r&&(a=n.appendChild(document.createElement("div")),a.className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),i!=!1&&s.on(a,"mouseover",function(l){L(t,l,e,a)}),n}p(A,"makeMarker");function F(t,e){return t=="error"?t:e}p(F,"getMaxSeverity");function G(t){for(var e=[],o=0;o<t.length;++o){var r=t[o],i=r.from.line;(e[i]||(e[i]=[])).push(r)}return e}p(G,"groupByLine");function M(t){var e=t.severity;e||(e="error");var o=document.createElement("div");return o.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,typeof t.messageHTML<"u"?o.innerHTML=t.messageHTML:o.appendChild(document.createTextNode(t.message)),o}p(M,"annotationTooltip");function I(t,e){var o=t.state.lint,r=++o.waitingFor;function i(){r=-1,t.off("change",i)}p(i,"abort"),t.on("change",i),e(t.getValue(),function(n,a){t.off("change",i),o.waitingFor==r&&(a&&n instanceof s&&(n=a),t.operation(function(){y(t,n)}))},o.linterOptions,t)}p(I,"lintAsync");function c(t){var e=t.state.lint;if(!!e){var o=e.options,r=o.getAnnotations||t.getHelper(s.Pos(0,0),"lint");if(!!r)if(o.async||r.async)I(t,r);else{var i=r(t.getValue(),e.linterOptions,t);if(!i)return;i.then?i.then(function(n){t.operation(function(){y(t,n)})}):t.operation(function(){y(t,i)})}}}p(c,"startLinting");function y(t,e){var o=t.state.lint;if(!!o){var r=o.options;k(t);for(var i=G(e),n=0;n<i.length;++n){var a=i[n];if(!!a){var l=[];a=a.filter(function(D){return l.indexOf(D.message)>-1?!1:l.push(D.message)});for(var u=null,g=o.hasGutter&&document.createDocumentFragment(),_=0;_<a.length;++_){var m=a[_],T=m.severity;T||(T="error"),u=F(u,T),r.formatAnnotation&&(m=r.formatAnnotation(m)),o.hasGutter&&g.appendChild(M(m)),m.to&&o.marked.push(t.markText(m.from,m.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+T,__annotation:m}))}o.hasGutter&&t.setGutterMarker(n,f,A(t,g,u,i[n].length>1,r.tooltips)),r.highlightLines&&t.addLineClass(n,"wrap",v+u)}}r.onUpdateLinting&&r.onUpdateLinting(e,i,t)}}p(y,"updateLinting");function b(t){var e=t.state.lint;!e||(clearTimeout(e.timeout),e.timeout=setTimeout(function(){c(t)},e.options.delay))}p(b,"onChange");function P(t,e,o){for(var r=o.target||o.srcElement,i=document.createDocumentFragment(),n=0;n<e.length;n++){var a=e[n];i.appendChild(M(a))}L(t,o,i,r)}p(P,"popupTooltips");function j(t,e){var o=e.target||e.srcElement;if(!!/\bCodeMirror-lint-mark-/.test(o.className)){for(var r=o.getBoundingClientRect(),i=(r.left+r.right)/2,n=(r.top+r.bottom)/2,a=t.findMarksAt(t.coordsChar({left:i,top:n},"client")),l=[],u=0;u<a.length;++u){var g=a[u].__annotation;g&&l.push(g)}l.length&&P(t,l,e)}}p(j,"onMouseOver"),s.defineOption("lint",!1,function(t,e,o){if(o&&o!=s.Init&&(k(t),t.state.lint.options.lintOnChange!==!1&&t.off("change",b),s.off(t.getWrapperElement(),"mouseover",t.state.lint.onMouseOver),clearTimeout(t.state.lint.timeout),delete t.state.lint),e){for(var r=t.getOption("gutters"),i=!1,n=0;n<r.length;++n)r[n]==f&&(i=!0);var a=t.state.lint=new w(t,e,i);a.options.lintOnChange&&t.on("change",b),a.options.tooltips!=!1&&a.options.tooltips!="gutter"&&s.on(t.getWrapperElement(),"mouseover",a.onMouseOver),c(t)}}),s.defineExtension("performLint",function(){c(this)})})})();var $=U.exports,Wt=H({__proto__:null,default:$},[U.exports]);export{Wt as l};
