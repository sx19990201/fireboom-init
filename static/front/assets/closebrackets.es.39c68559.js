import{a as q}from"./codemirror.es.f74c380b.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var G=Object.defineProperty,f=(S,A)=>G(S,"name",{value:A,configurable:!0});function z(S,A){return A.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(d){if(d!=="default"&&!(d in S)){var l=Object.getOwnPropertyDescriptor(r,d);Object.defineProperty(S,d,l.get?l:{enumerable:!0,get:function(){return r[d]}})}})}),Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}f(z,"_mergeNamespaces");var D={exports:{}};(function(S,A){(function(r){r(q.exports)})(function(r){var d={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},l=r.Pos;r.defineOption("autoCloseBrackets",!1,function(e,t,n){n&&n!=r.Init&&(e.removeKeyMap(y),e.state.closeBrackets=null),t&&(x(m(t,"pairs")),e.state.closeBrackets=t,e.addKeyMap(y))});function m(e,t){return t=="pairs"&&typeof e=="string"?e:typeof e=="object"&&e[t]!=null?e[t]:d[t]}f(m,"getOption");var y={Backspace:I,Enter:$};function x(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),a="'"+n+"'";y[a]||(y[a]=w(n))}}f(x,"ensureBound"),x(d.pairs+"`");function w(e){return function(t){return K(t,e)}}f(w,"handler");function B(e){var t=e.state.closeBrackets;if(!t||t.override)return t;var n=e.getModeAt(e.getCursor());return n.closeBrackets||t}f(B,"getConfig");function I(e){var t=B(e);if(!t||e.getOption("disableInput"))return r.Pass;for(var n=m(t,"pairs"),a=e.listSelections(),i=0;i<a.length;i++){if(!a[i].empty())return r.Pass;var p=_(e,a[i].head);if(!p||n.indexOf(p)%2!=0)return r.Pass}for(var i=a.length-1;i>=0;i--){var s=a[i].head;e.replaceRange("",l(s.line,s.ch-1),l(s.line,s.ch+1),"+delete")}}f(I,"handleBackspace");function $(e){var t=B(e),n=t&&m(t,"explode");if(!n||e.getOption("disableInput"))return r.Pass;for(var a=e.listSelections(),i=0;i<a.length;i++){if(!a[i].empty())return r.Pass;var p=_(e,a[i].head);if(!p||n.indexOf(p)%2!=0)return r.Pass}e.operation(function(){var s=e.lineSeparator()||`
`;e.replaceSelection(s+s,null),P(e,-1),a=e.listSelections();for(var h=0;h<a.length;h++){var O=a[h].head.line;e.indentLine(O,null,!0),e.indentLine(O+1,null,!0)}})}f($,"handleEnter");function P(e,t){for(var n=[],a=e.listSelections(),i=0,p=0;p<a.length;p++){var s=a[p];s.head==e.getCursor()&&(i=p);var h=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};n.push({anchor:h,head:h})}e.setSelections(n,i)}f(P,"moveSel");function F(e){var t=r.cmpPos(e.anchor,e.head)>0;return{anchor:new l(e.anchor.line,e.anchor.ch+(t?-1:1)),head:new l(e.head.line,e.head.ch+(t?1:-1))}}f(F,"contractSelection");function K(e,t){var n=B(e);if(!n||e.getOption("disableInput"))return r.Pass;var a=m(n,"pairs"),i=a.indexOf(t);if(i==-1)return r.Pass;for(var p=m(n,"closeBefore"),s=m(n,"triples"),h=a.charAt(i+1)==t,O=e.listSelections(),j=i%2==0,c,R=0;R<O.length;R++){var N=O[R],o=N.head,g,k=e.getRange(o,l(o.line,o.ch+1));if(j&&!N.empty())g="surround";else if((h||!j)&&k==t)h&&L(e,o)?g="both":s.indexOf(t)>=0&&e.getRange(o,l(o.line,o.ch+3))==t+t+t?g="skipThree":g="skip";else if(h&&o.ch>1&&s.indexOf(t)>=0&&e.getRange(l(o.line,o.ch-2),o)==t+t){if(o.ch>2&&/\bstring/.test(e.getTokenTypeAt(l(o.line,o.ch-2))))return r.Pass;g="addFour"}else if(h){var W=o.ch==0?" ":e.getRange(l(o.line,o.ch-1),o);if(!r.isWordChar(k)&&W!=t&&!r.isWordChar(W))g="both";else return r.Pass}else if(j&&(k.length===0||/\s/.test(k)||p.indexOf(k)>-1))g="both";else return r.Pass;if(!c)c=g;else if(c!=g)return r.Pass}var b=i%2?a.charAt(i-1):t,E=i%2?t:a.charAt(i+1);e.operation(function(){if(c=="skip")P(e,1);else if(c=="skipThree")P(e,3);else if(c=="surround"){for(var u=e.getSelections(),v=0;v<u.length;v++)u[v]=b+u[v]+E;e.replaceSelections(u,"around"),u=e.listSelections().slice();for(var v=0;v<u.length;v++)u[v]=F(u[v]);e.setSelections(u)}else c=="both"?(e.replaceSelection(b+E,null),e.triggerElectric(b+E),P(e,-1)):c=="addFour"&&(e.replaceSelection(b+b+b+b,"before"),P(e,1))})}f(K,"handleChar");function _(e,t){var n=e.getRange(l(t.line,t.ch-1),l(t.line,t.ch+1));return n.length==2?n:null}f(_,"charsAround");function L(e,t){var n=e.getTokenAt(l(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(t.ch==0||!/\bstring/.test(e.getTokenTypeAt(t)))}f(L,"stringStartsAfter")})})();var H=D.exports,Ge=z({__proto__:null,default:H},[D.exports]);export{Ge as c};