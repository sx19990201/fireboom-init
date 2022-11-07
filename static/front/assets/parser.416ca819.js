import{T as F,b as O,c as P,e as $,f as G,g as K,S as j,K as a,O as _,L as Y}from"./source.c7b92d0a.js";function z(n){return typeof n=="object"&&n!==null}function J(n,e){if(!Boolean(n))throw new Error(e!=null?e:"Unexpected invariant triggered.")}const Q=/\r\n|[\n\r]/g;function S(n,e){let t=0,i=1;for(const s of n.body.matchAll(Q)){if(typeof s.index=="number"||J(!1),s.index>=e)break;t=s.index+s[0].length,i+=1}return{line:i,column:e+1-t}}function q(n){return M(n.source,S(n.source,n.start))}function M(n,e){const t=n.locationOffset.column-1,i="".padStart(t)+n.body,s=e.line-1,o=n.locationOffset.line-1,c=e.line+o,h=e.line===1?t:0,l=e.column+h,E=`${n.name}:${c}:${l}
`,u=i.split(/\r\n|[\n\r]/g),N=u[s];if(N.length>120){const x=Math.floor(l/80),D=l%80,f=[];for(let m=0;m<N.length;m+=80)f.push(N.slice(m,m+80));return E+g([[`${c} |`,f[0]],...f.slice(1,x+1).map(m=>["|",m]),["|","^".padStart(D)],["|",f[x+1]]])}return E+g([[`${c-1} |`,u[s-1]],[`${c} |`,N],["|","^".padStart(l)],[`${c+1} |`,u[s+1]]])}function g(n){const e=n.filter(([i,s])=>s!==void 0),t=Math.max(...e.map(([i])=>i.length));return e.map(([i,s])=>i.padStart(t)+(s?" "+s:"")).join(`
`)}function X(n){const e=n[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:n[1],positions:n[2],path:n[3],originalError:n[4],extensions:n[5]}:e}class R extends Error{constructor(e,...t){var i,s,o;const{nodes:c,source:h,positions:l,path:E,originalError:u,extensions:N}=X(t);super(e),this.name="GraphQLError",this.path=E!=null?E:void 0,this.originalError=u!=null?u:void 0,this.nodes=b(Array.isArray(c)?c:c?[c]:void 0);const x=b((i=this.nodes)===null||i===void 0?void 0:i.map(f=>f.loc).filter(f=>f!=null));this.source=h!=null?h:x==null||(s=x[0])===null||s===void 0?void 0:s.source,this.positions=l!=null?l:x==null?void 0:x.map(f=>f.start),this.locations=l&&h?l.map(f=>S(h,f)):x==null?void 0:x.map(f=>S(f.source,f.start));const D=z(u==null?void 0:u.extensions)?u==null?void 0:u.extensions:void 0;this.extensions=(o=N!=null?N:D)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),u!=null&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,R):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+q(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+M(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function b(n){return n===void 0||n.length===0?void 0:n}function he(n){return n.toString()}function pe(n){return n.toJSON()}function d(n,e,t){return new R(`Syntax Error: ${t}`,{source:n,positions:[e]})}var L;(function(n){n.QUERY="QUERY",n.MUTATION="MUTATION",n.SUBSCRIPTION="SUBSCRIPTION",n.FIELD="FIELD",n.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",n.FRAGMENT_SPREAD="FRAGMENT_SPREAD",n.INLINE_FRAGMENT="INLINE_FRAGMENT",n.VARIABLE_DEFINITION="VARIABLE_DEFINITION",n.SCHEMA="SCHEMA",n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.FIELD_DEFINITION="FIELD_DEFINITION",n.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.ENUM_VALUE="ENUM_VALUE",n.INPUT_OBJECT="INPUT_OBJECT",n.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(L||(L={}));var r;(function(n){n.SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment"})(r||(r={}));class H{constructor(e){const t=new F(r.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==r.EOF)do if(e.next)e=e.next;else{const t=Z(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===r.COMMENT);return e}}function W(n){return n===r.BANG||n===r.DOLLAR||n===r.AMP||n===r.PAREN_L||n===r.PAREN_R||n===r.SPREAD||n===r.COLON||n===r.EQUALS||n===r.AT||n===r.BRACKET_L||n===r.BRACKET_R||n===r.BRACE_L||n===r.PIPE||n===r.BRACE_R}function A(n){return n>=0&&n<=55295||n>=57344&&n<=1114111}function y(n,e){return B(n.charCodeAt(e))&&U(n.charCodeAt(e+1))}function B(n){return n>=55296&&n<=56319}function U(n){return n>=56320&&n<=57343}function T(n,e){const t=n.source.body.codePointAt(e);if(t===void 0)return r.EOF;if(t>=32&&t<=126){const i=String.fromCodePoint(t);return i==='"'?`'"'`:`"${i}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function p(n,e,t,i,s){const o=n.line,c=1+t-n.lineStart;return new F(e,t,i,o,c,s)}function Z(n,e){const t=n.source.body,i=t.length;let s=e;for(;s<i;){const o=t.charCodeAt(s);switch(o){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++n.line,n.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++n.line,n.lineStart=s;continue;case 35:return ee(n,s);case 33:return p(n,r.BANG,s,s+1);case 36:return p(n,r.DOLLAR,s,s+1);case 38:return p(n,r.AMP,s,s+1);case 40:return p(n,r.PAREN_L,s,s+1);case 41:return p(n,r.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return p(n,r.SPREAD,s,s+3);break;case 58:return p(n,r.COLON,s,s+1);case 61:return p(n,r.EQUALS,s,s+1);case 64:return p(n,r.AT,s,s+1);case 91:return p(n,r.BRACKET_L,s,s+1);case 93:return p(n,r.BRACKET_R,s,s+1);case 123:return p(n,r.BRACE_L,s,s+1);case 124:return p(n,r.PIPE,s,s+1);case 125:return p(n,r.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?oe(n,s):ne(n,s)}if(O(o)||o===45)return te(n,s,o);if(P(o))return ae(n,s);throw d(n.source,s,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:A(o)||y(t,s)?`Unexpected character: ${T(n,s)}.`:`Invalid character: ${T(n,s)}.`)}return p(n,r.EOF,i,i)}function ee(n,e){const t=n.source.body,i=t.length;let s=e+1;for(;s<i;){const o=t.charCodeAt(s);if(o===10||o===13)break;if(A(o))++s;else if(y(t,s))s+=2;else break}return p(n,r.COMMENT,e,s,t.slice(e+1,s))}function te(n,e,t){const i=n.source.body;let s=e,o=t,c=!1;if(o===45&&(o=i.charCodeAt(++s)),o===48){if(o=i.charCodeAt(++s),O(o))throw d(n.source,s,`Invalid number, unexpected digit after 0: ${T(n,s)}.`)}else s=v(n,s,o),o=i.charCodeAt(s);if(o===46&&(c=!0,o=i.charCodeAt(++s),s=v(n,s,o),o=i.charCodeAt(s)),(o===69||o===101)&&(c=!0,o=i.charCodeAt(++s),(o===43||o===45)&&(o=i.charCodeAt(++s)),s=v(n,s,o),o=i.charCodeAt(s)),o===46||P(o))throw d(n.source,s,`Invalid number, expected digit but got: ${T(n,s)}.`);return p(n,c?r.FLOAT:r.INT,e,s,i.slice(e,s))}function v(n,e,t){if(!O(t))throw d(n.source,e,`Invalid number, expected digit but got: ${T(n,e)}.`);const i=n.source.body;let s=e+1;for(;O(i.charCodeAt(s));)++s;return s}function ne(n,e){const t=n.source.body,i=t.length;let s=e+1,o=s,c="";for(;s<i;){const h=t.charCodeAt(s);if(h===34)return c+=t.slice(o,s),p(n,r.STRING,e,s+1,c);if(h===92){c+=t.slice(o,s);const l=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?se(n,s):ie(n,s):re(n,s);c+=l.value,s+=l.size,o=s;continue}if(h===10||h===13)break;if(A(h))++s;else if(y(t,s))s+=2;else throw d(n.source,s,`Invalid character within String: ${T(n,s)}.`)}throw d(n.source,s,"Unterminated string.")}function se(n,e){const t=n.source.body;let i=0,s=3;for(;s<12;){const o=t.charCodeAt(e+s++);if(o===125){if(s<5||!A(i))break;return{value:String.fromCodePoint(i),size:s}}if(i=i<<4|I(o),i<0)break}throw d(n.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+s)}".`)}function ie(n,e){const t=n.source.body,i=w(t,e+2);if(A(i))return{value:String.fromCodePoint(i),size:6};if(B(i)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const s=w(t,e+8);if(U(s))return{value:String.fromCodePoint(i,s),size:12}}throw d(n.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function w(n,e){return I(n.charCodeAt(e))<<12|I(n.charCodeAt(e+1))<<8|I(n.charCodeAt(e+2))<<4|I(n.charCodeAt(e+3))}function I(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:-1}function re(n,e){const t=n.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw d(n.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function oe(n,e){const t=n.source.body,i=t.length;let s=n.lineStart,o=e+3,c=o,h="";const l=[];for(;o<i;){const E=t.charCodeAt(o);if(E===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){h+=t.slice(c,o),l.push(h);const u=p(n,r.BLOCK_STRING,e,o+3,$(l).join(`
`));return n.line+=l.length-1,n.lineStart=s,u}if(E===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){h+=t.slice(c,o),c=o+1,o+=4;continue}if(E===10||E===13){h+=t.slice(c,o),l.push(h),E===13&&t.charCodeAt(o+1)===10?o+=2:++o,h="",c=o,s=o;continue}if(A(E))++o;else if(y(t,o))o+=2;else throw d(n.source,o,`Invalid character within String: ${T(n,o)}.`)}throw d(n.source,o,"Unterminated string.")}function ae(n,e){const t=n.source.body,i=t.length;let s=e+1;for(;s<i;){const o=t.charCodeAt(s);if(G(o))++s;else break}return p(n,r.NAME,e,s,t.slice(e,s))}function ue(n,e){return new C(n,e).parseDocument()}function le(n,e){const t=new C(n,e);t.expectToken(r.SOF);const i=t.parseValueLiteral(!1);return t.expectToken(r.EOF),i}function de(n,e){const t=new C(n,e);t.expectToken(r.SOF);const i=t.parseConstValueLiteral();return t.expectToken(r.EOF),i}function fe(n,e){const t=new C(n,e);t.expectToken(r.SOF);const i=t.parseTypeReference();return t.expectToken(r.EOF),i}class C{constructor(e,t={}){const i=K(e)?e:new j(e);this._lexer=new H(i),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(r.NAME);return this.node(e,{kind:a.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:a.DOCUMENT,definitions:this.many(r.SOF,this.parseDefinition,r.EOF)})}parseDefinition(){if(this.peek(r.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===r.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw d(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(r.BRACE_L))return this.node(e,{kind:a.OPERATION_DEFINITION,operation:_.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let i;return this.peek(r.NAME)&&(i=this.parseName()),this.node(e,{kind:a.OPERATION_DEFINITION,operation:t,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(r.NAME);switch(e.value){case"query":return _.QUERY;case"mutation":return _.MUTATION;case"subscription":return _.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(r.PAREN_L,this.parseVariableDefinition,r.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:a.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(r.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(r.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(r.DOLLAR),this.node(e,{kind:a.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:a.SELECTION_SET,selections:this.many(r.BRACE_L,this.parseSelection,r.BRACE_R)})}parseSelection(){return this.peek(r.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let i,s;return this.expectOptionalToken(r.COLON)?(i=t,s=this.parseName()):s=t,this.node(e,{kind:a.FIELD,alias:i,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(r.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(r.PAREN_L,t,r.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,i=this.parseName();return this.expectToken(r.COLON),this.node(t,{kind:a.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(r.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(r.NAME)?this.node(e,{kind:a.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:a.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:a.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:a.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case r.BRACKET_L:return this.parseList(e);case r.BRACE_L:return this.parseObject(e);case r.INT:return this.advanceLexer(),this.node(t,{kind:a.INT,value:t.value});case r.FLOAT:return this.advanceLexer(),this.node(t,{kind:a.FLOAT,value:t.value});case r.STRING:case r.BLOCK_STRING:return this.parseStringLiteral();case r.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:a.BOOLEAN,value:!0});case"false":return this.node(t,{kind:a.BOOLEAN,value:!1});case"null":return this.node(t,{kind:a.NULL});default:return this.node(t,{kind:a.ENUM,value:t.value})}case r.DOLLAR:if(e)if(this.expectToken(r.DOLLAR),this._lexer.token.kind===r.NAME){const i=this._lexer.token.value;throw d(this._lexer.source,t.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:a.STRING,value:e.value,block:e.kind===r.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:a.LIST,values:this.any(r.BRACKET_L,t,r.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:a.OBJECT,fields:this.any(r.BRACE_L,t,r.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,i=this.parseName();return this.expectToken(r.COLON),this.node(t,{kind:a.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(r.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(r.AT),this.node(t,{kind:a.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(r.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(r.BRACKET_R),t=this.node(e,{kind:a.LIST_TYPE,type:i})}else t=this.parseNamedType();return this.expectOptionalToken(r.BANG)?this.node(e,{kind:a.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:a.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(r.STRING)||this.peek(r.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),s=this.many(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);return this.node(e,{kind:a.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:s})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(r.COLON);const i=this.parseNamedType();return this.node(e,{kind:a.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),s=this.parseConstDirectives();return this.node(e,{kind:a.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:s})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:a.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:s,directives:o,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(r.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseFieldDefinition,r.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),s=this.parseArgumentDefs();this.expectToken(r.COLON);const o=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(e,{kind:a.FIELD_DEFINITION,description:t,name:i,arguments:s,type:o,directives:c})}parseArgumentDefs(){return this.optionalMany(r.PAREN_L,this.parseInputValueDef,r.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(r.COLON);const s=this.parseTypeReference();let o;this.expectOptionalToken(r.EQUALS)&&(o=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(e,{kind:a.INPUT_VALUE_DEFINITION,description:t,name:i,type:s,defaultValue:o,directives:c})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:a.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:s,directives:o,fields:c})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(e,{kind:a.UNION_TYPE_DEFINITION,description:t,name:i,directives:s,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(r.EQUALS)?this.delimitedMany(r.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(e,{kind:a.ENUM_TYPE_DEFINITION,description:t,name:i,directives:s,values:o})}parseEnumValuesDefinition(){return this.optionalMany(r.BRACE_L,this.parseEnumValueDefinition,r.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(e,{kind:a.ENUM_VALUE_DEFINITION,description:t,name:i,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw d(this._lexer.source,this._lexer.token.start,`${k(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(e,{kind:a.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:s,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseInputValueDef,r.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===r.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),i=this.optionalMany(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);if(t.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:a.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:a.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:a.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:s,fields:o})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:a.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:s,fields:o})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),i=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:a.UNION_TYPE_EXTENSION,name:t,directives:i,types:s})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),i=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:a.ENUM_TYPE_EXTENSION,name:t,directives:i,values:s})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),i=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:a.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:s})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(r.AT);const i=this.parseName(),s=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(e,{kind:a.DIRECTIVE_DEFINITION,description:t,name:i,arguments:s,repeatable:o,locations:c})}parseDirectiveLocations(){return this.delimitedMany(r.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(L,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new Y(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw d(this._lexer.source,t.start,`Expected ${V(e)}, found ${k(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===r.NAME&&t.value===e)this.advanceLexer();else throw d(this._lexer.source,t.start,`Expected "${e}", found ${k(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===r.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e!=null?e:this._lexer.token;return d(this._lexer.source,t.start,`Unexpected ${k(t)}.`)}any(e,t,i){this.expectToken(e);const s=[];for(;!this.expectOptionalToken(i);)s.push(t.call(this));return s}optionalMany(e,t,i){if(this.expectOptionalToken(e)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(i));return s}return[]}many(e,t,i){this.expectToken(e);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(i));return s}delimitedMany(e,t){this.expectOptionalToken(e);const i=[];do i.push(t.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==r.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw d(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function k(n){const e=n.value;return V(n.kind)+(e!=null?` "${e}"`:"")}function V(n){return W(n)?`"${n}"`:n}export{L as D,R as G,H as L,r as T,J as a,le as b,W as c,q as d,M as e,de as f,S as g,fe as h,z as i,he as j,pe as k,ue as p,d as s};
