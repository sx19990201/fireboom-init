import{C as P}from"./codemirror.es.f74c380b.js";import{D as B,q as H,o as J,G as U,F as z}from"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var K=Object.defineProperty,i=(r,e)=>K(r,"name",{value:e,configurable:!0});function G(r){f=r,w=r.length,s=c=N=-1,n(),y();const e=$();return d("EOF"),e}i(G,"jsonParse");let f,w,s,c,N,t,u;function $(){const r=s,e=[];if(d("{"),!E("}")){do e.push(Q());while(E(","));d("}")}return{kind:"Object",start:r,end:N,members:e}}i($,"parseObj");function Q(){const r=s,e=u==="String"?V():null;d("String"),d(":");const o=v();return{kind:"Member",start:r,end:N,key:e,value:o}}i(Q,"parseMember");function _(){const r=s,e=[];if(d("["),!E("]")){do e.push(v());while(E(","));d("]")}return{kind:"Array",start:r,end:N,values:e}}i(_,"parseArr");function v(){switch(u){case"[":return _();case"{":return $();case"String":case"Number":case"Boolean":case"Null":const r=V();return y(),r}d("Value")}i(v,"parseVal");function V(){return{kind:u,start:s,end:c,value:JSON.parse(f.slice(s,c))}}i(V,"curToken");function d(r){if(u===r){y();return}let e;if(u==="EOF")e="[end of file]";else if(c-s>1)e="`"+f.slice(s,c)+"`";else{const o=f.slice(s).match(/^.+?\b/);e="`"+(o?o[0]:f[s])+"`"}throw m(`Expected ${r} but found ${e}.`)}i(d,"expect");class L extends Error{constructor(e,o){super(e),this.position=o}}i(L,"JSONSyntaxError");function m(r){return new L(r,{start:s,end:c})}i(m,"syntaxError");function E(r){if(u===r)return y(),!0}i(E,"skip");function n(){return c<w&&(c++,t=c===w?0:f.charCodeAt(c)),t}i(n,"ch");function y(){for(N=c;t===9||t===10||t===13||t===32;)n();if(t===0){u="EOF";return}switch(s=c,t){case 34:return u="String",q();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return u="Number",C();case 102:if(f.slice(s,s+5)!=="false")break;c+=4,n(),u="Boolean";return;case 110:if(f.slice(s,s+4)!=="null")break;c+=3,n(),u="Null";return;case 116:if(f.slice(s,s+4)!=="true")break;c+=3,n(),u="Boolean";return}u=f[s],n()}i(y,"lex");function q(){for(n();t!==34&&t>31;)if(t===92)switch(t=n(),t){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:n();break;case 117:n(),g(),g(),g(),g();break;default:throw m("Bad character escape sequence.")}else{if(c===w)throw m("Unterminated string.");n()}if(t===34){n();return}throw m("Unterminated string.")}i(q,"readString");function g(){if(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)return n();throw m("Expected hexadecimal digit.")}i(g,"readHex");function C(){t===45&&n(),t===48?n():x(),t===46&&(n(),x()),(t===69||t===101)&&(t=n(),(t===43||t===45)&&n(),x())}i(C,"readNumber");function x(){if(t<48||t>57)throw m("Expected decimal digit.");do n();while(t>=48&&t<=57)}i(x,"readDigits");P.registerHelper("lint","graphql-variables",(r,e,o)=>{if(!r)return[];let l;try{l=G(r)}catch(p){if(p instanceof L)return[O(o,p.position,p.message)];throw p}const a=e.variableToType;return a?I(o,a,l):[]});function I(r,e,o){const l=[];return o.members.forEach(a=>{var p;if(a){const h=(p=a.key)===null||p===void 0?void 0:p.value,b=e[h];b?k(b,a.value).forEach(([j,M])=>{l.push(O(r,j,M))}):l.push(O(r,a.key,`Variable "$${h}" does not appear in any GraphQL query.`))}}),l}i(I,"validateVariables");function k(r,e){if(!r||!e)return[];if(r instanceof B)return e.kind==="Null"?[[e,`Type "${r}" is non-nullable and cannot be null.`]]:k(r.ofType,e);if(e.kind==="Null")return[];if(r instanceof H){const o=r.ofType;if(e.kind==="Array"){const l=e.values||[];return F(l,a=>k(o,a))}return k(o,e)}if(r instanceof J){if(e.kind!=="Object")return[[e,`Type "${r}" must be an Object.`]];const o=Object.create(null),l=F(e.members,a=>{var p;const h=(p=a==null?void 0:a.key)===null||p===void 0?void 0:p.value;o[h]=!0;const b=r.getFields()[h];if(!b)return[[a.key,`Type "${r}" does not have a field "${h}".`]];const j=b?b.type:void 0;return k(j,a.value)});return Object.keys(r.getFields()).forEach(a=>{o[a]||r.getFields()[a].type instanceof B&&l.push([e,`Object of type "${r}" is missing required field "${a}".`])}),l}return r.name==="Boolean"&&e.kind!=="Boolean"||r.name==="String"&&e.kind!=="String"||r.name==="ID"&&e.kind!=="Number"&&e.kind!=="String"||r.name==="Float"&&e.kind!=="Number"||r.name==="Int"&&(e.kind!=="Number"||(e.value|0)!==e.value)?[[e,`Expected value of type "${r}".`]]:(r instanceof U||r instanceof z)&&(e.kind!=="String"&&e.kind!=="Number"&&e.kind!=="Boolean"&&e.kind!=="Null"||D(r.parseValue(e.value)))?[[e,`Expected value of type "${r}".`]]:[]}i(k,"validateValue");function O(r,e,o){return{message:o,severity:"error",type:"validation",from:r.posFromIndex(e.start),to:r.posFromIndex(e.end)}}i(O,"lintError");function D(r){return r==null||r!==r}i(D,"isNullish");function F(r,e){return Array.prototype.concat.apply([],r.map(e))}i(F,"mapCat");
