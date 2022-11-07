import{a as ge}from"./codemirror.es.f74c380b.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var he=Object.defineProperty,a=(D,ur)=>he(D,"name",{value:ur,configurable:!0});function me(D,ur){return ur.forEach(function(y){y&&typeof y!="string"&&!Array.isArray(y)&&Object.keys(y).forEach(function(B){if(B!=="default"&&!(B in D)){var h=Object.getOwnPropertyDescriptor(y,B);Object.defineProperty(D,B,h.get?h:{enumerable:!0,get:function(){return y[B]}})}})}),Object.freeze(Object.defineProperty(D,Symbol.toStringTag,{value:"Module"}))}a(me,"_mergeNamespaces");var de={exports:{}};(function(D,ur){(function(y){y(ge.exports)})(function(y){y.defineMode("javascript",function(B,h){var W=B.indentUnit,Br=h.statementIndent,sr=h.jsonld,q=h.json||sr,qr=h.trackScope!==!1,k=h.typescript,cr=h.wordCharacters||/[\w$\xa1-\uffff]/,Pr=function(){function r(v){return{type:v,style:"keyword"}}a(r,"kw");var e=r("keyword a"),n=r("keyword b"),f=r("keyword c"),s=r("keyword d"),p=r("operator"),d={type:"atom",style:"atom"};return{if:r("if"),while:e,with:e,else:n,do:n,try:n,finally:n,return:s,break:s,continue:s,new:r("new"),delete:f,void:f,throw:f,debugger:r("debugger"),var:r("var"),const:r("var"),let:r("var"),function:r("function"),catch:r("catch"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:p,typeof:p,instanceof:p,true:d,false:d,null:d,undefined:d,NaN:d,Infinity:d,this:r("this"),class:r("class"),super:r("atom"),yield:f,export:r("export"),import:r("import"),extends:f,await:f}}(),Fr=/[+\-*&%=<>!?|~^@]/,ke=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function Lr(r){for(var e=!1,n,f=!1;(n=r.next())!=null;){if(!e){if(n=="/"&&!f)return;n=="["?f=!0:f&&n=="]"&&(f=!1)}e=!e&&n=="\\"}}a(Lr,"readRegexp");var Z,lr;function x(r,e,n){return Z=r,lr=n,e}a(x,"ret");function z(r,e){var n=r.next();if(n=='"'||n=="'")return e.tokenize=Qr(n),e.tokenize(r,e);if(n=="."&&r.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return x("number","number");if(n=="."&&r.match(".."))return x("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return x(n);if(n=="="&&r.eat(">"))return x("=>","operator");if(n=="0"&&r.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return x("number","number");if(/\d/.test(n))return r.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),x("number","number");if(n=="/")return r.eat("*")?(e.tokenize=C,C(r,e)):r.eat("/")?(r.skipToEnd(),x("comment","comment")):$r(r,e,1)?(Lr(r),r.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),x("regexp","string-2")):(r.eat("="),x("operator","operator",r.current()));if(n=="`")return e.tokenize=K,K(r,e);if(n=="#"&&r.peek()=="!")return r.skipToEnd(),x("meta","meta");if(n=="#"&&r.eatWhile(cr))return x("variable","property");if(n=="<"&&r.match("!--")||n=="-"&&r.match("->")&&!/\S/.test(r.string.slice(0,r.start)))return r.skipToEnd(),x("comment","comment");if(Fr.test(n))return(n!=">"||!e.lexical||e.lexical.type!=">")&&(r.eat("=")?(n=="!"||n=="=")&&r.eat("="):/[<>*+\-|&?]/.test(n)&&(r.eat(n),n==">"&&r.eat(n))),n=="?"&&r.eat(".")?x("."):x("operator","operator",r.current());if(cr.test(n)){r.eatWhile(cr);var f=r.current();if(e.lastType!="."){if(Pr.propertyIsEnumerable(f)){var s=Pr[f];return x(s.type,s.style,f)}if(f=="async"&&r.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return x("async","keyword",f)}return x("variable","variable",f)}}a(z,"tokenBase");function Qr(r){return function(e,n){var f=!1,s;if(sr&&e.peek()=="@"&&e.match(ke))return n.tokenize=z,x("jsonld-keyword","meta");for(;(s=e.next())!=null&&!(s==r&&!f);)f=!f&&s=="\\";return f||(n.tokenize=z),x("string","string")}}a(Qr,"tokenString");function C(r,e){for(var n=!1,f;f=r.next();){if(f=="/"&&n){e.tokenize=z;break}n=f=="*"}return x("comment","comment")}a(C,"tokenComment");function K(r,e){for(var n=!1,f;(f=r.next())!=null;){if(!n&&(f=="`"||f=="$"&&r.eat("{"))){e.tokenize=z;break}n=!n&&f=="\\"}return x("quasi","string-2",r.current())}a(K,"tokenQuasi");var be="([{}])";function pr(r,e){e.fatArrowAt&&(e.fatArrowAt=null);var n=r.string.indexOf("=>",r.start);if(!(n<0)){if(k){var f=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(r.string.slice(r.start,n));f&&(n=f.index)}for(var s=0,p=!1,d=n-1;d>=0;--d){var v=r.string.charAt(d),_=be.indexOf(v);if(_>=0&&_<3){if(!s){++d;break}if(--s==0){v=="("&&(p=!0);break}}else if(_>=3&&_<6)++s;else if(cr.test(v))p=!0;else if(/["'\/`]/.test(v))for(;;--d){if(d==0)return;var we=r.string.charAt(d-1);if(we==v&&r.string.charAt(d-2)!="\\"){d--;break}}else if(p&&!s){++d;break}}p&&!s&&(e.fatArrowAt=d)}}a(pr,"findFatArrow");var ye={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function gr(r,e,n,f,s,p){this.indented=r,this.column=e,this.type=n,this.prev=s,this.info=p,f!=null&&(this.align=f)}a(gr,"JSLexical");function Jr(r,e){if(!qr)return!1;for(var n=r.localVars;n;n=n.next)if(n.name==e)return!0;for(var f=r.context;f;f=f.prev)for(var n=f.vars;n;n=n.next)if(n.name==e)return!0}a(Jr,"inScope");function hr(r,e,n,f,s){var p=r.cc;for(i.state=r,i.stream=s,i.marked=null,i.cc=p,i.style=e,r.lexical.hasOwnProperty("align")||(r.lexical.align=!0);;){var d=p.length?p.pop():q?b:w;if(d(n,f)){for(;p.length&&p[p.length-1].lex;)p.pop()();return i.marked?i.marked:n=="variable"&&Jr(r,f)?"variable-2":e}}}a(hr,"parseJS");var i={state:null,column:null,marked:null,cc:null};function u(){for(var r=arguments.length-1;r>=0;r--)i.cc.push(arguments[r])}a(u,"pass");function t(){return u.apply(null,arguments),!0}a(t,"cont");function mr(r,e){for(var n=e;n;n=n.next)if(n.name==r)return!0;return!1}a(mr,"inList");function P(r){var e=i.state;if(i.marked="def",!!qr){if(e.context){if(e.lexical.info=="var"&&e.context&&e.context.block){var n=vr(r,e.context);if(n!=null){e.context=n;return}}else if(!mr(r,e.localVars)){e.localVars=new H(r,e.localVars);return}}h.globalVars&&!mr(r,e.globalVars)&&(e.globalVars=new H(r,e.globalVars))}}a(P,"register");function vr(r,e){if(e)if(e.block){var n=vr(r,e.prev);return n?n==e.prev?e:new U(n,e.vars,!0):null}else return mr(r,e.vars)?e:new U(e.prev,new H(r,e.vars),!1);else return null}a(vr,"registerVarScoped");function rr(r){return r=="public"||r=="private"||r=="protected"||r=="abstract"||r=="readonly"}a(rr,"isModifier");function U(r,e,n){this.prev=r,this.vars=e,this.block=n}a(U,"Context");function H(r,e){this.name=r,this.next=e}a(H,"Var");var xe=new H("this",new H("arguments",null));function O(){i.state.context=new U(i.state.context,i.state.localVars,!1),i.state.localVars=xe}a(O,"pushcontext");function er(){i.state.context=new U(i.state.context,i.state.localVars,!0),i.state.localVars=null}a(er,"pushblockcontext"),O.lex=er.lex=!0;function T(){i.state.localVars=i.state.context.vars,i.state.context=i.state.context.prev}a(T,"popcontext"),T.lex=!0;function c(r,e){var n=a(function(){var f=i.state,s=f.indented;if(f.lexical.type=="stat")s=f.lexical.indented;else for(var p=f.lexical;p&&p.type==")"&&p.align;p=p.prev)s=p.indented;f.lexical=new gr(s,i.stream.column(),r,null,f.lexical,e)},"result");return n.lex=!0,n}a(c,"pushlex");function o(){var r=i.state;r.lexical.prev&&(r.lexical.type==")"&&(r.indented=r.lexical.indented),r.lexical=r.lexical.prev)}a(o,"poplex"),o.lex=!0;function l(r){function e(n){return n==r?t():r==";"||n=="}"||n==")"||n=="]"?u():t(e)}return a(e,"exp"),e}a(l,"expect");function w(r,e){return r=="var"?t(c("vardef",e),xr,l(";"),o):r=="keyword a"?t(c("form"),dr,w,o):r=="keyword b"?t(c("form"),w,o):r=="keyword d"?i.stream.match(/^\s*$/,!1)?t():t(c("stat"),F,l(";"),o):r=="debugger"?t(l(";")):r=="{"?t(c("}"),er,ir,o,T):r==";"?t():r=="if"?(i.state.lexical.info=="else"&&i.state.cc[i.state.cc.length-1]==o&&i.state.cc.pop()(),t(c("form"),dr,w,o,_r)):r=="function"?t(V):r=="for"?t(c("form"),er,Ir,w,T,o):r=="class"||k&&e=="interface"?(i.marked="keyword",t(c("form",r=="class"?r:e),zr,o)):r=="variable"?k&&e=="declare"?(i.marked="keyword",t(w)):k&&(e=="module"||e=="enum"||e=="type")&&i.stream.match(/^\s*\w/,!1)?(i.marked="keyword",e=="enum"?t(Nr):e=="type"?t(Vr,l("operator"),m,l(";")):t(c("form"),S,l("{"),c("}"),ir,o,o)):k&&e=="namespace"?(i.marked="keyword",t(c("form"),b,w,o)):k&&e=="abstract"?(i.marked="keyword",t(w)):t(c("stat"),Hr):r=="switch"?t(c("form"),dr,l("{"),c("}","switch"),er,ir,o,o,T):r=="case"?t(b,l(":")):r=="default"?t(l(":")):r=="catch"?t(c("form"),O,Rr,w,o,T):r=="export"?t(c("stat"),oe,o):r=="import"?t(c("stat"),ue,o):r=="async"?t(w):e=="@"?t(b,w):u(c("stat"),b,l(";"),o)}a(w,"statement");function Rr(r){if(r=="(")return t($,l(")"))}a(Rr,"maybeCatchBinding");function b(r,e){return jr(r,e,!1)}a(b,"expression");function j(r,e){return jr(r,e,!0)}a(j,"expressionNoComma");function dr(r){return r!="("?u():t(c(")"),F,l(")"),o)}a(dr,"parenExpr");function jr(r,e,n){if(i.state.fatArrowAt==i.stream.start){var f=n?Sr:Tr;if(r=="(")return t(O,c(")"),g($,")"),o,l("=>"),f,T);if(r=="variable")return u(O,S,l("=>"),f,T)}var s=n?L:M;return ye.hasOwnProperty(r)?t(s):r=="function"?t(V,s):r=="class"||k&&e=="interface"?(i.marked="keyword",t(c("form"),fe,o)):r=="keyword c"||r=="async"?t(n?j:b):r=="("?t(c(")"),F,l(")"),o,s):r=="operator"||r=="spread"?t(n?j:b):r=="["?t(c("]"),ce,o,s):r=="{"?G(nr,"}",null,s):r=="quasi"?u(tr,s):r=="new"?t(Wr(n)):t()}a(jr,"expressionInner");function F(r){return r.match(/[;\}\)\],]/)?u():u(b)}a(F,"maybeexpression");function M(r,e){return r==","?t(F):L(r,e,!1)}a(M,"maybeoperatorComma");function L(r,e,n){var f=n==!1?M:L,s=n==!1?b:j;if(r=="=>")return t(O,n?Sr:Tr,T);if(r=="operator")return/\+\+|--/.test(e)||k&&e=="!"?t(f):k&&e=="<"&&i.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?t(c(">"),g(m,">"),o,f):e=="?"?t(b,l(":"),s):t(s);if(r=="quasi")return u(tr,f);if(r!=";"){if(r=="(")return G(j,")","call",f);if(r==".")return t(Gr,f);if(r=="[")return t(c("]"),F,l("]"),o,f);if(k&&e=="as")return i.marked="keyword",t(m,f);if(r=="regexp")return i.state.lastType=i.marked="operator",i.stream.backUp(i.stream.pos-i.stream.start-1),t(s)}}a(L,"maybeoperatorNoComma");function tr(r,e){return r!="quasi"?u():e.slice(e.length-2)!="${"?t(tr):t(F,Dr)}a(tr,"quasi");function Dr(r){if(r=="}")return i.marked="string-2",i.state.tokenize=K,t(tr)}a(Dr,"continueQuasi");function Tr(r){return pr(i.stream,i.state),u(r=="{"?w:b)}a(Tr,"arrowBody");function Sr(r){return pr(i.stream,i.state),u(r=="{"?w:j)}a(Sr,"arrowBodyNoComma");function Wr(r){return function(e){return e=="."?t(r?Ur:Kr):e=="variable"&&k?t(ee,r?L:M):u(r?j:b)}}a(Wr,"maybeTarget");function Kr(r,e){if(e=="target")return i.marked="keyword",t(M)}a(Kr,"target");function Ur(r,e){if(e=="target")return i.marked="keyword",t(L)}a(Ur,"targetNoComma");function Hr(r){return r==":"?t(o,w):u(M,l(";"),o)}a(Hr,"maybelabel");function Gr(r){if(r=="variable")return i.marked="property",t()}a(Gr,"property");function nr(r,e){if(r=="async")return i.marked="property",t(nr);if(r=="variable"||i.style=="keyword"){if(i.marked="property",e=="get"||e=="set")return t(Xr);var n;return k&&i.state.fatArrowAt==i.stream.start&&(n=i.stream.match(/^\s*:\s*/,!1))&&(i.state.fatArrowAt=i.stream.pos+n[0].length),t(N)}else{if(r=="number"||r=="string")return i.marked=sr?"property":i.style+" property",t(N);if(r=="jsonld-keyword")return t(N);if(k&&rr(e))return i.marked="keyword",t(nr);if(r=="[")return t(b,Q,l("]"),N);if(r=="spread")return t(j,N);if(e=="*")return i.marked="keyword",t(nr);if(r==":")return u(N)}}a(nr,"objprop");function Xr(r){return r!="variable"?u(N):(i.marked="property",t(V))}a(Xr,"getterSetter");function N(r){if(r==":")return t(j);if(r=="(")return u(V)}a(N,"afterprop");function g(r,e,n){function f(s,p){if(n?n.indexOf(s)>-1:s==","){var d=i.state.lexical;return d.info=="call"&&(d.pos=(d.pos||0)+1),t(function(v,_){return v==e||_==e?u():u(r)},f)}return s==e||p==e?t():n&&n.indexOf(";")>-1?u(r):t(l(e))}return a(f,"proceed"),function(s,p){return s==e||p==e?t():u(r,f)}}a(g,"commasep");function G(r,e,n){for(var f=3;f<arguments.length;f++)i.cc.push(arguments[f]);return t(c(e,n),g(r,e),o)}a(G,"contCommasep");function ir(r){return r=="}"?t():u(w,ir)}a(ir,"block");function Q(r,e){if(k){if(r==":")return t(m);if(e=="?")return t(Q)}}a(Q,"maybetype");function Yr(r,e){if(k&&(r==":"||e=="in"))return t(m)}a(Yr,"maybetypeOrIn");function Er(r){if(k&&r==":")return i.stream.match(/^\s*\w+\s+is\b/,!1)?t(b,Zr,m):t(m)}a(Er,"mayberettype");function Zr(r,e){if(e=="is")return i.marked="keyword",t()}a(Zr,"isKW");function m(r,e){if(e=="keyof"||e=="typeof"||e=="infer"||e=="readonly")return i.marked="keyword",t(e=="typeof"?j:m);if(r=="variable"||e=="void")return i.marked="type",t(E);if(e=="|"||e=="&")return t(m);if(r=="string"||r=="number"||r=="atom")return t(E);if(r=="[")return t(c("]"),g(m,"]",","),o,E);if(r=="{")return t(c("}"),kr,o,E);if(r=="(")return t(g(yr,")"),Cr,E);if(r=="<")return t(g(m,">"),m);if(r=="quasi")return u(br,E)}a(m,"typeexpr");function Cr(r){if(r=="=>")return t(m)}a(Cr,"maybeReturnType");function kr(r){return r.match(/[\}\)\]]/)?t():r==","||r==";"?t(kr):u(X,kr)}a(kr,"typeprops");function X(r,e){if(r=="variable"||i.style=="keyword")return i.marked="property",t(X);if(e=="?"||r=="number"||r=="string")return t(X);if(r==":")return t(m);if(r=="[")return t(l("variable"),Yr,l("]"),X);if(r=="(")return u(R,X);if(!r.match(/[;\}\)\],]/))return t()}a(X,"typeprop");function br(r,e){return r!="quasi"?u():e.slice(e.length-2)!="${"?t(br):t(m,re)}a(br,"quasiType");function re(r){if(r=="}")return i.marked="string-2",i.state.tokenize=K,t(br)}a(re,"continueQuasiType");function yr(r,e){return r=="variable"&&i.stream.match(/^\s*[?:]/,!1)||e=="?"?t(yr):r==":"?t(m):r=="spread"?t(yr):u(m)}a(yr,"typearg");function E(r,e){if(e=="<")return t(c(">"),g(m,">"),o,E);if(e=="|"||r=="."||e=="&")return t(m);if(r=="[")return t(m,l("]"),E);if(e=="extends"||e=="implements")return i.marked="keyword",t(m);if(e=="?")return t(m,l(":"),m)}a(E,"afterType");function ee(r,e){if(e=="<")return t(c(">"),g(m,">"),o,E)}a(ee,"maybeTypeArgs");function ar(){return u(m,te)}a(ar,"typeparam");function te(r,e){if(e=="=")return t(m)}a(te,"maybeTypeDefault");function xr(r,e){return e=="enum"?(i.marked="keyword",t(Nr)):u(S,Q,I,ie)}a(xr,"vardef");function S(r,e){if(k&&rr(e))return i.marked="keyword",t(S);if(r=="variable")return P(e),t();if(r=="spread")return t(S);if(r=="[")return G(ne,"]");if(r=="{")return G(Ar,"}")}a(S,"pattern");function Ar(r,e){return r=="variable"&&!i.stream.match(/^\s*:/,!1)?(P(e),t(I)):(r=="variable"&&(i.marked="property"),r=="spread"?t(S):r=="}"?u():r=="["?t(b,l("]"),l(":"),Ar):t(l(":"),S,I))}a(Ar,"proppattern");function ne(){return u(S,I)}a(ne,"eltpattern");function I(r,e){if(e=="=")return t(j)}a(I,"maybeAssign");function ie(r){if(r==",")return t(xr)}a(ie,"vardefCont");function _r(r,e){if(r=="keyword b"&&e=="else")return t(c("form","else"),w,o)}a(_r,"maybeelse");function Ir(r,e){if(e=="await")return t(Ir);if(r=="(")return t(c(")"),ae,o)}a(Ir,"forspec");function ae(r){return r=="var"?t(xr,J):r=="variable"?t(J):u(J)}a(ae,"forspec1");function J(r,e){return r==")"?t():r==";"?t(J):e=="in"||e=="of"?(i.marked="keyword",t(b,J)):u(b,J)}a(J,"forspec2");function V(r,e){if(e=="*")return i.marked="keyword",t(V);if(r=="variable")return P(e),t(V);if(r=="(")return t(O,c(")"),g($,")"),o,Er,w,T);if(k&&e=="<")return t(c(">"),g(ar,">"),o,V)}a(V,"functiondef");function R(r,e){if(e=="*")return i.marked="keyword",t(R);if(r=="variable")return P(e),t(R);if(r=="(")return t(O,c(")"),g($,")"),o,Er,T);if(k&&e=="<")return t(c(">"),g(ar,">"),o,R)}a(R,"functiondecl");function Vr(r,e){if(r=="keyword"||r=="variable")return i.marked="type",t(Vr);if(e=="<")return t(c(">"),g(ar,">"),o)}a(Vr,"typename");function $(r,e){return e=="@"&&t(b,$),r=="spread"?t($):k&&rr(e)?(i.marked="keyword",t($)):k&&r=="this"?t(Q,I):u(S,Q,I)}a($,"funarg");function fe(r,e){return r=="variable"?zr(r,e):fr(r,e)}a(fe,"classExpression");function zr(r,e){if(r=="variable")return P(e),t(fr)}a(zr,"className");function fr(r,e){if(e=="<")return t(c(">"),g(ar,">"),o,fr);if(e=="extends"||e=="implements"||k&&r==",")return e=="implements"&&(i.marked="keyword"),t(k?m:b,fr);if(r=="{")return t(c("}"),A,o)}a(fr,"classNameAfter");function A(r,e){if(r=="async"||r=="variable"&&(e=="static"||e=="get"||e=="set"||k&&rr(e))&&i.stream.match(/^\s+[\w$\xa1-\uffff]/,!1))return i.marked="keyword",t(A);if(r=="variable"||i.style=="keyword")return i.marked="property",t(Y,A);if(r=="number"||r=="string")return t(Y,A);if(r=="[")return t(b,Q,l("]"),Y,A);if(e=="*")return i.marked="keyword",t(A);if(k&&r=="(")return u(R,A);if(r==";"||r==",")return t(A);if(r=="}")return t();if(e=="@")return t(b,A)}a(A,"classBody");function Y(r,e){if(e=="!"||e=="?")return t(Y);if(r==":")return t(m,I);if(e=="=")return t(j);var n=i.state.lexical.prev,f=n&&n.info=="interface";return u(f?R:V)}a(Y,"classfield");function oe(r,e){return e=="*"?(i.marked="keyword",t(wr,l(";"))):e=="default"?(i.marked="keyword",t(b,l(";"))):r=="{"?t(g(Or,"}"),wr,l(";")):u(w)}a(oe,"afterExport");function Or(r,e){if(e=="as")return i.marked="keyword",t(l("variable"));if(r=="variable")return u(j,Or)}a(Or,"exportField");function ue(r){return r=="string"?t():r=="("?u(b):r=="."?u(M):u(or,Mr,wr)}a(ue,"afterImport");function or(r,e){return r=="{"?G(or,"}"):(r=="variable"&&P(e),e=="*"&&(i.marked="keyword"),t(se))}a(or,"importSpec");function Mr(r){if(r==",")return t(or,Mr)}a(Mr,"maybeMoreImports");function se(r,e){if(e=="as")return i.marked="keyword",t(or)}a(se,"maybeAs");function wr(r,e){if(e=="from")return i.marked="keyword",t(b)}a(wr,"maybeFrom");function ce(r){return r=="]"?t():u(g(j,"]"))}a(ce,"arrayLiteral");function Nr(){return u(c("form"),S,l("{"),c("}"),g(le,"}"),o,o)}a(Nr,"enumdef");function le(){return u(S,I)}a(le,"enummember");function pe(r,e){return r.lastType=="operator"||r.lastType==","||Fr.test(e.charAt(0))||/[,.]/.test(e.charAt(0))}a(pe,"isContinuedStatement");function $r(r,e,n){return e.tokenize==z&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||e.lastType=="quasi"&&/\{\s*$/.test(r.string.slice(0,r.pos-(n||0)))}return a($r,"expressionAllowed"),{startState:function(r){var e={tokenize:z,lastType:"sof",cc:[],lexical:new gr((r||0)-W,0,"block",!1),localVars:h.localVars,context:h.localVars&&new U(null,null,!1),indented:r||0};return h.globalVars&&typeof h.globalVars=="object"&&(e.globalVars=h.globalVars),e},token:function(r,e){if(r.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=r.indentation(),pr(r,e)),e.tokenize!=C&&r.eatSpace())return null;var n=e.tokenize(r,e);return Z=="comment"?n:(e.lastType=Z=="operator"&&(lr=="++"||lr=="--")?"incdec":Z,hr(e,n,Z,lr,r))},indent:function(r,e){if(r.tokenize==C||r.tokenize==K)return y.Pass;if(r.tokenize!=z)return 0;var n=e&&e.charAt(0),f=r.lexical,s;if(!/^\s*else\b/.test(e))for(var p=r.cc.length-1;p>=0;--p){var d=r.cc[p];if(d==o)f=f.prev;else if(d!=_r&&d!=T)break}for(;(f.type=="stat"||f.type=="form")&&(n=="}"||(s=r.cc[r.cc.length-1])&&(s==M||s==L)&&!/^[,\.=+\-*:?[\(]/.test(e));)f=f.prev;Br&&f.type==")"&&f.prev.type=="stat"&&(f=f.prev);var v=f.type,_=n==v;return v=="vardef"?f.indented+(r.lastType=="operator"||r.lastType==","?f.info.length+1:0):v=="form"&&n=="{"?f.indented:v=="form"?f.indented+W:v=="stat"?f.indented+(pe(r,e)?Br||W:0):f.info=="switch"&&!_&&h.doubleIndentSwitch!=!1?f.indented+(/^(?:case|default)\b/.test(e)?W:2*W):f.align?f.column+(_?0:1):f.indented+(_?0:W)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:q?null:"/*",blockCommentEnd:q?null:"*/",blockCommentContinue:q?null:" * ",lineComment:q?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:q?"json":"javascript",jsonldMode:sr,jsonMode:q,expressionAllowed:$r,skipExpression:function(r){hr(r,"atom","atom","true",new y.StringStream("",2,null))}}}),y.registerHelper("wordChars","javascript",/[\w$]/),y.defineMIME("text/javascript","javascript"),y.defineMIME("text/ecmascript","javascript"),y.defineMIME("application/javascript","javascript"),y.defineMIME("application/x-javascript","javascript"),y.defineMIME("application/ecmascript","javascript"),y.defineMIME("application/json",{name:"javascript",json:!0}),y.defineMIME("application/x-json",{name:"javascript",json:!0}),y.defineMIME("application/manifest+json",{name:"javascript",json:!0}),y.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),y.defineMIME("text/typescript",{name:"javascript",typescript:!0}),y.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})();var ve=de.exports,ht=me({__proto__:null,default:ve},[de.exports]);export{ht as j};
