import{C as c}from"./codemirror.es.f74c380b.js";import{o as d,p as t,l as n,t as a,a as m}from"./types.es.1cfada6d.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var b=Object.defineProperty,u=(e,r)=>b(e,"name",{value:r,configurable:!0});c.defineMode("graphql-variables",e=>{const r=d({eatWhitespace:i=>i.eatSpace(),lexRules:V,parseRules:v,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:r.startState,token:r.token,indent:s,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});function s(e,r){var i,l;const o=e.levels;return((!o||o.length===0?e.indentLevel:o[o.length-1]-(!((i=this.electricInput)===null||i===void 0)&&i.test(r)?1:0))||0)*(((l=this.config)===null||l===void 0?void 0:l.indentUnit)||0)}u(s,"indent");const V={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},v={Document:[t("{"),n("Variable",m(t(","))),t("}")],Variable:[p("variable"),t(":"),"Value"],Value(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[a("Number","number")],StringValue:[a("String","string")],BooleanValue:[a("Keyword","builtin")],NullValue:[a("Keyword","keyword")],ListValue:[t("["),n("Value",m(t(","))),t("]")],ObjectValue:[t("{"),n("ObjectField",m(t(","))),t("}")],ObjectField:[p("attribute"),t(":"),"Value"]};function p(e){return{style:e,match:r=>r.kind==="String",update(r,i){r.name=i.value.slice(1,-1)}}}u(p,"namedKey");
