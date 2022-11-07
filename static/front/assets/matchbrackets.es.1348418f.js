import{a as T}from"./codemirror.es.f74c380b.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var j=Object.defineProperty,h=(g,x)=>j(g,"name",{value:x,configurable:!0});function E(g,x){return x.forEach(function(o){o&&typeof o!="string"&&!Array.isArray(o)&&Object.keys(o).forEach(function(m){if(m!=="default"&&!(m in g)){var p=Object.getOwnPropertyDescriptor(o,m);Object.defineProperty(g,m,p.get?p:{enumerable:!0,get:function(){return o[m]}})}})}),Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}h(E,"_mergeNamespaces");var O={exports:{}};(function(g,x){(function(o){o(T.exports)})(function(o){var m=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),p=o.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function L(t){return t&&t.bracketRegex||/[(){}[\]]/}h(L,"bracketRegex");function A(t,e,r){var s=t.getLineHandle(e.line),i=e.ch-1,u=r&&r.afterCursor;u==null&&(u=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var l=L(r),c=!u&&i>=0&&l.test(s.text.charAt(i))&&b[s.text.charAt(i)]||l.test(s.text.charAt(i+1))&&b[s.text.charAt(++i)];if(!c)return null;var a=c.charAt(1)==">"?1:-1;if(r&&r.strict&&a>0!=(i==e.ch))return null;var v=t.getTokenTypeAt(p(e.line,i+1)),n=H(t,p(e.line,i+(a>0?1:0)),a,v,r);return n==null?null:{from:p(e.line,i),to:n&&n.pos,match:n&&n.ch==c.charAt(0),forward:a>0}}h(A,"findMatchingBracket");function H(t,e,r,s,i){for(var u=i&&i.maxScanLineLength||1e4,l=i&&i.maxScanLines||1e3,c=[],a=L(i),v=r>0?Math.min(e.line+l,t.lastLine()+1):Math.max(t.firstLine()-1,e.line-l),n=e.line;n!=v;n+=r){var f=t.getLine(n);if(!!f){var k=r>0?0:f.length-1,S=r>0?f.length:-1;if(!(f.length>u))for(n==e.line&&(k=e.ch-(r<0?1:0));k!=S;k+=r){var y=f.charAt(k);if(a.test(y)&&(s===void 0||(t.getTokenTypeAt(p(n,k+1))||"")==(s||""))){var M=b[y];if(M&&M.charAt(1)==">"==r>0)c.push(y);else if(c.length)c.pop();else return{pos:p(n,k),ch:y}}}}}return n-r==(r>0?t.lastLine():t.firstLine())?!1:null}h(H,"scanForBracket");function _(t,e,r){for(var s=t.state.matchBrackets.maxHighlightLineLength||1e3,i=r&&r.highlightNonMatching,u=[],l=t.listSelections(),c=0;c<l.length;c++){var a=l[c].empty()&&A(t,l[c].head,r);if(a&&(a.match||i!==!1)&&t.getLine(a.from.line).length<=s){var v=a.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";u.push(t.markText(a.from,p(a.from.line,a.from.ch+1),{className:v})),a.to&&t.getLine(a.to.line).length<=s&&u.push(t.markText(a.to,p(a.to.line,a.to.ch+1),{className:v}))}}if(u.length){m&&t.state.focused&&t.focus();var n=h(function(){t.operation(function(){for(var f=0;f<u.length;f++)u[f].clear()})},"clear");if(e)setTimeout(n,800);else return n}}h(_,"matchBrackets");function d(t){t.operation(function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=_(t,!1,t.state.matchBrackets)})}h(d,"doMatchBrackets");function B(t){t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)}h(B,"clearHighlighted"),o.defineOption("matchBrackets",!1,function(t,e,r){r&&r!=o.Init&&(t.off("cursorActivity",d),t.off("focus",d),t.off("blur",B),B(t)),e&&(t.state.matchBrackets=typeof e=="object"?e:{},t.on("cursorActivity",d),t.on("focus",d),t.on("blur",B))}),o.defineExtension("matchBrackets",function(){_(this,!0)}),o.defineExtension("findMatchingBracket",function(t,e,r){return(r||typeof e=="boolean")&&(r?(r.strict=e,e=r):e=e?{strict:!0}:null),A(this,t,e)}),o.defineExtension("scanForBracket",function(t,e,r,s){return H(this,t,e,r,s)})})})();var P=O.exports,jt=E({__proto__:null,default:P},[O.exports]);export{O as a,jt as m};
