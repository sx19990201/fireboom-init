import{C as g}from"./codemirror.es.f74c380b.js";import{g as y,a as M,b as V,c as _,d as x,e as u}from"./SchemaReference.es.d83e1380.js";import"./info-addon.es.b86f5600.js";import{D as f,q as v}from"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./introspection.es.abd5dc76.js";import"./forEachState.es.d8431927.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var A=Object.defineProperty,o=(i,e)=>A(i,"name",{value:e,configurable:!0});g.registerHelper("info","graphql",(i,e)=>{if(!e.schema||!i.state)return;const d=i.state,r=d.kind,n=d.step,a=y(e.schema,i.state);if(r==="Field"&&n===0&&a.fieldDef||r==="AliasedField"&&n===2&&a.fieldDef){const t=document.createElement("div");t.className="CodeMirror-info-header",h(t,a,e);const m=document.createElement("div");return m.appendChild(t),p(m,e,a.fieldDef),m}else if(r==="Directive"&&n===1&&a.directiveDef){const t=document.createElement("div");t.className="CodeMirror-info-header",C(t,a,e);const m=document.createElement("div");return m.appendChild(t),p(m,e,a.directiveDef),m}else if(r==="Argument"&&n===0&&a.argDef){const t=document.createElement("div");t.className="CodeMirror-info-header",E(t,a,e);const m=document.createElement("div");return m.appendChild(t),p(m,e,a.argDef),m}else if(r==="EnumValue"&&a.enumValue&&a.enumValue.description){const t=document.createElement("div");t.className="CodeMirror-info-header",T(t,a,e);const m=document.createElement("div");return m.appendChild(t),p(m,e,a.enumValue),m}else if(r==="NamedType"&&a.type&&a.type.description){const t=document.createElement("div");t.className="CodeMirror-info-header",l(t,a,e,a.type);const m=document.createElement("div");return m.appendChild(t),p(m,e,a.type),m}});function h(i,e,d){D(i,e,d),s(i,e,d,e.type)}o(h,"renderField");function D(i,e,d){var r;const n=((r=e.fieldDef)===null||r===void 0?void 0:r.name)||"";c(i,n,"field-name",d,M(e))}o(D,"renderQualifiedField");function C(i,e,d){var r;const n="@"+(((r=e.directiveDef)===null||r===void 0?void 0:r.name)||"");c(i,n,"directive-name",d,V(e))}o(C,"renderDirective");function E(i,e,d){var r;const n=((r=e.argDef)===null||r===void 0?void 0:r.name)||"";c(i,n,"arg-name",d,_(e)),s(i,e,d,e.inputType)}o(E,"renderArg");function T(i,e,d){var r;const n=((r=e.enumValue)===null||r===void 0?void 0:r.name)||"";l(i,e,d,e.inputType),c(i,"."),c(i,n,"enum-value",d,x(e))}o(T,"renderEnumValue");function s(i,e,d,r){const n=document.createElement("span");n.className="type-name-pill",r instanceof f?(l(n,e,d,r.ofType),c(n,"!")):r instanceof v?(c(n,"["),l(n,e,d,r.ofType),c(n,"]")):c(n,(r==null?void 0:r.name)||"","type-name",d,u(e,r)),i.appendChild(n)}o(s,"renderTypeAnnotation");function l(i,e,d,r){r instanceof f?(l(i,e,d,r.ofType),c(i,"!")):r instanceof v?(c(i,"["),l(i,e,d,r.ofType),c(i,"]")):c(i,(r==null?void 0:r.name)||"","type-name",d,u(e,r))}o(l,"renderType");function p(i,e,d){const r=d.description;if(r){const n=document.createElement("div");n.className="info-description",e.renderDescription?n.innerHTML=e.renderDescription(r):n.appendChild(document.createTextNode(r)),i.appendChild(n)}N(i,e,d)}o(p,"renderDescription");function N(i,e,d){const r=d.deprecationReason;if(r){const n=document.createElement("div");n.className="info-deprecation",i.appendChild(n);const a=document.createElement("span");a.className="info-deprecation-label",a.appendChild(document.createTextNode("Deprecated")),n.appendChild(a);const t=document.createElement("div");t.className="info-deprecation-reason",e.renderDescription?t.innerHTML=e.renderDescription(r):t.appendChild(document.createTextNode(r)),n.appendChild(t)}}o(N,"renderDeprecation");function c(i,e,d="",r={onClick:null},n=null){if(d){const a=r.onClick;let t;a?(t=document.createElement("a"),t.href="javascript:void 0",t.addEventListener("click",m=>{a(n,m)})):t=document.createElement("span"),t.className=d,t.appendChild(document.createTextNode(e)),i.appendChild(t)}else i.appendChild(document.createTextNode(e))}o(c,"text");