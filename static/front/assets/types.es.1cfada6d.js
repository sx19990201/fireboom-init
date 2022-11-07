import"./index.5bf4d2ac.js";import{K as re}from"./source.c7b92d0a.js";var at=Object.defineProperty,u=(e,r)=>at(e,"name",{value:r,configurable:!0}),ie;(function(e){function r(i){return typeof i=="string"}u(r,"is"),e.is=r})(ie||(ie={}));var Y;(function(e){function r(i){return typeof i=="string"}u(r,"is"),e.is=r})(Y||(Y={}));var ae;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647;function r(i){return typeof i=="number"&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}u(r,"is"),e.is=r})(ae||(ae={}));var k;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647;function r(i){return typeof i=="number"&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}u(r,"is"),e.is=r})(k||(k={}));var A;(function(e){function r(n,t){return n===Number.MAX_VALUE&&(n=k.MAX_VALUE),t===Number.MAX_VALUE&&(t=k.MAX_VALUE),{line:n,character:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&c.uinteger(t.line)&&c.uinteger(t.character)}u(i,"is"),e.is=i})(A||(A={}));var m;(function(e){function r(n,t,a,o){if(c.uinteger(n)&&c.uinteger(t)&&c.uinteger(a)&&c.uinteger(o))return{start:A.create(n,t),end:A.create(a,o)};if(A.is(n)&&A.is(t))return{start:n,end:t};throw new Error("Range#create called with invalid arguments[".concat(n,", ").concat(t,", ").concat(a,", ").concat(o,"]"))}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&A.is(t.start)&&A.is(t.end)}u(i,"is"),e.is=i})(m||(m={}));var C;(function(e){function r(n,t){return{uri:n,range:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&m.is(t.range)&&(c.string(t.uri)||c.undefined(t.uri))}u(i,"is"),e.is=i})(C||(C={}));var ce;(function(e){function r(n,t,a,o){return{targetUri:n,targetRange:t,targetSelectionRange:a,originSelectionRange:o}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&m.is(t.targetRange)&&c.string(t.targetUri)&&m.is(t.targetSelectionRange)&&(m.is(t.originSelectionRange)||c.undefined(t.originSelectionRange))}u(i,"is"),e.is=i})(ce||(ce={}));var q;(function(e){function r(n,t,a,o){return{red:n,green:t,blue:a,alpha:o}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&c.numberRange(t.red,0,1)&&c.numberRange(t.green,0,1)&&c.numberRange(t.blue,0,1)&&c.numberRange(t.alpha,0,1)}u(i,"is"),e.is=i})(q||(q={}));var ue;(function(e){function r(n,t){return{range:n,color:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&m.is(t.range)&&q.is(t.color)}u(i,"is"),e.is=i})(ue||(ue={}));var oe;(function(e){function r(n,t,a){return{label:n,textEdit:t,additionalTextEdits:a}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&c.string(t.label)&&(c.undefined(t.textEdit)||L.is(t))&&(c.undefined(t.additionalTextEdits)||c.typedArray(t.additionalTextEdits,L.is))}u(i,"is"),e.is=i})(oe||(oe={}));var se;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(se||(se={}));var fe;(function(e){function r(n,t,a,o,s,g){var h={startLine:n,endLine:t};return c.defined(a)&&(h.startCharacter=a),c.defined(o)&&(h.endCharacter=o),c.defined(s)&&(h.kind=s),c.defined(g)&&(h.collapsedText=g),h}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&c.uinteger(t.startLine)&&c.uinteger(t.startLine)&&(c.undefined(t.startCharacter)||c.uinteger(t.startCharacter))&&(c.undefined(t.endCharacter)||c.uinteger(t.endCharacter))&&(c.undefined(t.kind)||c.string(t.kind))}u(i,"is"),e.is=i})(fe||(fe={}));var G;(function(e){function r(n,t){return{location:n,message:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&C.is(t.location)&&c.string(t.message)}u(i,"is"),e.is=i})(G||(G={}));var de;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(de||(de={}));var le;(function(e){e.Unnecessary=1,e.Deprecated=2})(le||(le={}));var ve;(function(e){function r(i){var n=i;return c.objectLiteral(n)&&c.string(n.href)}u(r,"is"),e.is=r})(ve||(ve={}));var O;(function(e){function r(n,t,a,o,s,g){var h={range:n,message:t};return c.defined(a)&&(h.severity=a),c.defined(o)&&(h.code=o),c.defined(s)&&(h.source=s),c.defined(g)&&(h.relatedInformation=g),h}u(r,"create"),e.create=r;function i(n){var t,a=n;return c.defined(a)&&m.is(a.range)&&c.string(a.message)&&(c.number(a.severity)||c.undefined(a.severity))&&(c.integer(a.code)||c.string(a.code)||c.undefined(a.code))&&(c.undefined(a.codeDescription)||c.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(c.string(a.source)||c.undefined(a.source))&&(c.undefined(a.relatedInformation)||c.typedArray(a.relatedInformation,G.is))}u(i,"is"),e.is=i})(O||(O={}));var F;(function(e){function r(n,t){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];var s={title:n,command:t};return c.defined(a)&&a.length>0&&(s.arguments=a),s}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.string(t.title)&&c.string(t.command)}u(i,"is"),e.is=i})(F||(F={}));var L;(function(e){function r(a,o){return{range:a,newText:o}}u(r,"replace"),e.replace=r;function i(a,o){return{range:{start:a,end:a},newText:o}}u(i,"insert"),e.insert=i;function n(a){return{range:a,newText:""}}u(n,"del"),e.del=n;function t(a){var o=a;return c.objectLiteral(o)&&c.string(o.newText)&&m.is(o.range)}u(t,"is"),e.is=t})(L||(L={}));var V;(function(e){function r(n,t,a){var o={label:n};return t!==void 0&&(o.needsConfirmation=t),a!==void 0&&(o.description=a),o}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&c.string(t.label)&&(c.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(c.string(t.description)||t.description===void 0)}u(i,"is"),e.is=i})(V||(V={}));var y;(function(e){function r(i){var n=i;return c.string(n)}u(r,"is"),e.is=r})(y||(y={}));var w;(function(e){function r(a,o,s){return{range:a,newText:o,annotationId:s}}u(r,"replace"),e.replace=r;function i(a,o,s){return{range:{start:a,end:a},newText:o,annotationId:s}}u(i,"insert"),e.insert=i;function n(a,o){return{range:a,newText:"",annotationId:o}}u(n,"del"),e.del=n;function t(a){var o=a;return L.is(o)&&(V.is(o.annotationId)||y.is(o.annotationId))}u(t,"is"),e.is=t})(w||(w={}));var T;(function(e){function r(n,t){return{textDocument:n,edits:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&W.is(t.textDocument)&&Array.isArray(t.edits)}u(i,"is"),e.is=i})(T||(T={}));var I;(function(e){function r(n,t,a){var o={kind:"create",uri:n};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}u(r,"create"),e.create=r;function i(n){var t=n;return t&&t.kind==="create"&&c.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||c.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||c.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||y.is(t.annotationId))}u(i,"is"),e.is=i})(I||(I={}));var j;(function(e){function r(n,t,a,o){var s={kind:"rename",oldUri:n,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(s.options=a),o!==void 0&&(s.annotationId=o),s}u(r,"create"),e.create=r;function i(n){var t=n;return t&&t.kind==="rename"&&c.string(t.oldUri)&&c.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||c.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||c.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||y.is(t.annotationId))}u(i,"is"),e.is=i})(j||(j={}));var S;(function(e){function r(n,t,a){var o={kind:"delete",uri:n};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}u(r,"create"),e.create=r;function i(n){var t=n;return t&&t.kind==="delete"&&c.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||c.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||c.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||y.is(t.annotationId))}u(i,"is"),e.is=i})(S||(S={}));var H;(function(e){function r(i){var n=i;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(function(t){return c.string(t.kind)?I.is(t)||j.is(t)||S.is(t):T.is(t)}))}u(r,"is"),e.is=r})(H||(H={}));var M=function(){function e(r,i){this.edits=r,this.changeAnnotations=i}return u(e,"TextEditChangeImpl"),e.prototype.insert=function(r,i,n){var t,a;if(n===void 0?t=L.insert(r,i):y.is(n)?(a=n,t=w.insert(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(n),t=w.insert(r,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(r,i,n){var t,a;if(n===void 0?t=L.replace(r,i):y.is(n)?(a=n,t=w.replace(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(n),t=w.replace(r,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(r,i){var n,t;if(i===void 0?n=L.del(r):y.is(i)?(t=i,n=w.del(r,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),n=w.del(r,t)),this.edits.push(n),t!==void 0)return t},e.prototype.add=function(r){this.edits.push(r)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(r){if(r===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ge=function(){function e(r){this._annotations=r===void 0?Object.create(null):r,this._counter=0,this._size=0}return u(e,"ChangeAnnotations"),e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(r,i){var n;if(y.is(r)?n=r:(n=this.nextId(),i=r),this._annotations[n]!==void 0)throw new Error("Id ".concat(n," is already in use."));if(i===void 0)throw new Error("No annotation provided for id ".concat(n));return this._annotations[n]=i,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(r){var i=this;this._textEditChanges=Object.create(null),r!==void 0?(this._workspaceEdit=r,r.documentChanges?(this._changeAnnotations=new ge(r.changeAnnotations),r.changeAnnotations=this._changeAnnotations.all(),r.documentChanges.forEach(function(n){if(T.is(n)){var t=new M(n.edits,i._changeAnnotations);i._textEditChanges[n.textDocument.uri]=t}})):r.changes&&Object.keys(r.changes).forEach(function(n){var t=new M(r.changes[n]);i._textEditChanges[n]=t})):this._workspaceEdit={}}return u(e,"WorkspaceChange"),Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(r){if(W.is(r)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:r.uri,version:r.version},n=this._textEditChanges[i.uri];if(!n){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),n=new M(t,this._changeAnnotations),this._textEditChanges[i.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[r];if(!n){var t=[];this._workspaceEdit.changes[r]=t,n=new M(t),this._textEditChanges[r]=n}return n}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ge,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;V.is(i)||y.is(i)?t=i:n=i;var a,o;if(t===void 0?a=I.create(r,n):(o=y.is(t)?t:this._changeAnnotations.manage(t),a=I.create(r,n,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e.prototype.renameFile=function(r,i,n,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;V.is(n)||y.is(n)?a=n:t=n;var o,s;if(a===void 0?o=j.create(r,i,t):(s=y.is(a)?a:this._changeAnnotations.manage(a),o=j.create(r,i,t,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s},e.prototype.deleteFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;V.is(i)||y.is(i)?t=i:n=i;var a,o;if(t===void 0?a=S.create(r,n):(o=y.is(t)?t:this._changeAnnotations.manage(t),a=S.create(r,n,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e})();var he;(function(e){function r(n){return{uri:n}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.string(t.uri)}u(i,"is"),e.is=i})(he||(he={}));var pe;(function(e){function r(n,t){return{uri:n,version:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.string(t.uri)&&c.integer(t.version)}u(i,"is"),e.is=i})(pe||(pe={}));var W;(function(e){function r(n,t){return{uri:n,version:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.string(t.uri)&&(t.version===null||c.integer(t.version))}u(i,"is"),e.is=i})(W||(W={}));var be;(function(e){function r(n,t,a,o){return{uri:n,languageId:t,version:a,text:o}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.string(t.uri)&&c.string(t.languageId)&&c.integer(t.version)&&c.string(t.text)}u(i,"is"),e.is=i})(be||(be={}));var J;(function(e){e.PlainText="plaintext",e.Markdown="markdown";function r(i){var n=i;return n===e.PlainText||n===e.Markdown}u(r,"is"),e.is=r})(J||(J={}));var R;(function(e){function r(i){var n=i;return c.objectLiteral(i)&&J.is(n.kind)&&c.string(n.value)}u(r,"is"),e.is=r})(R||(R={}));var me;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(me||(me={}));var Ee;(function(e){e.PlainText=1,e.Snippet=2})(Ee||(Ee={}));var ye;(function(e){e.Deprecated=1})(ye||(ye={}));var De;(function(e){function r(n,t,a){return{newText:n,insert:t,replace:a}}u(r,"create"),e.create=r;function i(n){var t=n;return t&&c.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)}u(i,"is"),e.is=i})(De||(De={}));var Ae;(function(e){e.asIs=1,e.adjustIndentation=2})(Ae||(Ae={}));var _e;(function(e){function r(i){var n=i;return n&&(c.string(n.detail)||n.detail===void 0)&&(c.string(n.description)||n.description===void 0)}u(r,"is"),e.is=r})(_e||(_e={}));var Le;(function(e){function r(i){return{label:i}}u(r,"create"),e.create=r})(Le||(Le={}));var we;(function(e){function r(i,n){return{items:i||[],isIncomplete:!!n}}u(r,"create"),e.create=r})(we||(we={}));var z;(function(e){function r(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}u(r,"fromPlainText"),e.fromPlainText=r;function i(n){var t=n;return c.string(t)||c.objectLiteral(t)&&c.string(t.language)&&c.string(t.value)}u(i,"is"),e.is=i})(z||(z={}));var Ne;(function(e){function r(i){var n=i;return!!n&&c.objectLiteral(n)&&(R.is(n.contents)||z.is(n.contents)||c.typedArray(n.contents,z.is))&&(i.range===void 0||m.is(i.range))}u(r,"is"),e.is=r})(Ne||(Ne={}));var xe;(function(e){function r(i,n){return n?{label:i,documentation:n}:{label:i}}u(r,"create"),e.create=r})(xe||(xe={}));var Ve;(function(e){function r(i,n){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var o={label:i};return c.defined(n)&&(o.documentation=n),c.defined(t)?o.parameters=t:o.parameters=[],o}u(r,"create"),e.create=r})(Ve||(Ve={}));var Fe;(function(e){e.Text=1,e.Read=2,e.Write=3})(Fe||(Fe={}));var Ie;(function(e){function r(i,n){var t={range:i};return c.number(n)&&(t.kind=n),t}u(r,"create"),e.create=r})(Ie||(Ie={}));var je;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(je||(je={}));var Se;(function(e){e.Deprecated=1})(Se||(Se={}));var Re;(function(e){function r(i,n,t,a,o){var s={name:i,kind:n,location:{uri:a,range:t}};return o&&(s.containerName=o),s}u(r,"create"),e.create=r})(Re||(Re={}));var Pe;(function(e){function r(i,n,t,a){return a!==void 0?{name:i,kind:n,location:{uri:t,range:a}}:{name:i,kind:n,location:{uri:t}}}u(r,"create"),e.create=r})(Pe||(Pe={}));var Me;(function(e){function r(n,t,a,o,s,g){var h={name:n,detail:t,kind:a,range:o,selectionRange:s};return g!==void 0&&(h.children=g),h}u(r,"create"),e.create=r;function i(n){var t=n;return t&&c.string(t.name)&&c.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(t.detail===void 0||c.string(t.detail))&&(t.deprecated===void 0||c.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}u(i,"is"),e.is=i})(Me||(Me={}));var Ue;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Ue||(Ue={}));var B;(function(e){e.Invoked=1,e.Automatic=2})(B||(B={}));var ke;(function(e){function r(n,t,a){var o={diagnostics:n};return t!=null&&(o.only=t),a!=null&&(o.triggerKind=a),o}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.typedArray(t.diagnostics,O.is)&&(t.only===void 0||c.typedArray(t.only,c.string))&&(t.triggerKind===void 0||t.triggerKind===B.Invoked||t.triggerKind===B.Automatic)}u(i,"is"),e.is=i})(ke||(ke={}));var Ce;(function(e){function r(n,t,a){var o={title:n},s=!0;return typeof t=="string"?(s=!1,o.kind=t):F.is(t)?o.command=t:o.edit=t,s&&a!==void 0&&(o.kind=a),o}u(r,"create"),e.create=r;function i(n){var t=n;return t&&c.string(t.title)&&(t.diagnostics===void 0||c.typedArray(t.diagnostics,O.is))&&(t.kind===void 0||c.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||F.is(t.command))&&(t.isPreferred===void 0||c.boolean(t.isPreferred))&&(t.edit===void 0||H.is(t.edit))}u(i,"is"),e.is=i})(Ce||(Ce={}));var Oe;(function(e){function r(n,t){var a={range:n};return c.defined(t)&&(a.data=t),a}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&m.is(t.range)&&(c.undefined(t.command)||F.is(t.command))}u(i,"is"),e.is=i})(Oe||(Oe={}));var Te;(function(e){function r(n,t){return{tabSize:n,insertSpaces:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&c.uinteger(t.tabSize)&&c.boolean(t.insertSpaces)}u(i,"is"),e.is=i})(Te||(Te={}));var We;(function(e){function r(n,t,a){return{range:n,target:t,data:a}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&m.is(t.range)&&(c.undefined(t.target)||c.string(t.target))}u(i,"is"),e.is=i})(We||(We={}));var ze;(function(e){function r(n,t){return{range:n,parent:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&m.is(t.range)&&(t.parent===void 0||e.is(t.parent))}u(i,"is"),e.is=i})(ze||(ze={}));var Be;(function(e){e.namespace="namespace",e.type="type",e.class="class",e.enum="enum",e.interface="interface",e.struct="struct",e.typeParameter="typeParameter",e.parameter="parameter",e.variable="variable",e.property="property",e.enumMember="enumMember",e.event="event",e.function="function",e.method="method",e.macro="macro",e.keyword="keyword",e.modifier="modifier",e.comment="comment",e.string="string",e.number="number",e.regexp="regexp",e.operator="operator",e.decorator="decorator"})(Be||(Be={}));var Qe;(function(e){e.declaration="declaration",e.definition="definition",e.readonly="readonly",e.static="static",e.deprecated="deprecated",e.abstract="abstract",e.async="async",e.modification="modification",e.documentation="documentation",e.defaultLibrary="defaultLibrary"})(Qe||(Qe={}));var Xe;(function(e){function r(i){var n=i;return c.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}u(r,"is"),e.is=r})(Xe||(Xe={}));var $e;(function(e){function r(n,t){return{range:n,text:t}}u(r,"create"),e.create=r;function i(n){var t=n;return t!=null&&m.is(t.range)&&c.string(t.text)}u(i,"is"),e.is=i})($e||($e={}));var Ye;(function(e){function r(n,t,a){return{range:n,variableName:t,caseSensitiveLookup:a}}u(r,"create"),e.create=r;function i(n){var t=n;return t!=null&&m.is(t.range)&&c.boolean(t.caseSensitiveLookup)&&(c.string(t.variableName)||t.variableName===void 0)}u(i,"is"),e.is=i})(Ye||(Ye={}));var qe;(function(e){function r(n,t){return{range:n,expression:t}}u(r,"create"),e.create=r;function i(n){var t=n;return t!=null&&m.is(t.range)&&(c.string(t.expression)||t.expression===void 0)}u(i,"is"),e.is=i})(qe||(qe={}));var Ge;(function(e){function r(n,t){return{frameId:n,stoppedLocation:t}}u(r,"create"),e.create=r;function i(n){var t=n;return c.defined(t)&&m.is(n.stoppedLocation)}u(i,"is"),e.is=i})(Ge||(Ge={}));var Z;(function(e){e.Type=1,e.Parameter=2;function r(i){return i===1||i===2}u(r,"is"),e.is=r})(Z||(Z={}));var K;(function(e){function r(n){return{value:n}}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&(t.tooltip===void 0||c.string(t.tooltip)||R.is(t.tooltip))&&(t.location===void 0||C.is(t.location))&&(t.command===void 0||F.is(t.command))}u(i,"is"),e.is=i})(K||(K={}));var He;(function(e){function r(n,t,a){var o={position:n,label:t};return a!==void 0&&(o.kind=a),o}u(r,"create"),e.create=r;function i(n){var t=n;return c.objectLiteral(t)&&A.is(t.position)&&(c.string(t.label)||c.typedArray(t.label,K.is))&&(t.kind===void 0||Z.is(t.kind))&&t.textEdits===void 0||c.typedArray(t.textEdits,L.is)&&(t.tooltip===void 0||c.string(t.tooltip)||R.is(t.tooltip))&&(t.paddingLeft===void 0||c.boolean(t.paddingLeft))&&(t.paddingRight===void 0||c.boolean(t.paddingRight))}u(i,"is"),e.is=i})(He||(He={}));var Je;(function(e){function r(i){var n=i;return c.objectLiteral(n)&&Y.is(n.uri)&&c.string(n.name)}u(r,"is"),e.is=r})(Je||(Je={}));var Ze;(function(e){function r(a,o,s,g){return new ct(a,o,s,g)}u(r,"create"),e.create=r;function i(a){var o=a;return!!(c.defined(o)&&c.string(o.uri)&&(c.undefined(o.languageId)||c.string(o.languageId))&&c.uinteger(o.lineCount)&&c.func(o.getText)&&c.func(o.positionAt)&&c.func(o.offsetAt))}u(i,"is"),e.is=i;function n(a,o){for(var s=a.getText(),g=t(o,function(N,P){var ne=N.range.start.line-P.range.start.line;return ne===0?N.range.start.character-P.range.start.character:ne}),h=s.length,d=g.length-1;d>=0;d--){var D=g[d],_=a.offsetAt(D.range.start),l=a.offsetAt(D.range.end);if(l<=h)s=s.substring(0,_)+D.newText+s.substring(l,s.length);else throw new Error("Overlapping edit");h=_}return s}u(n,"applyEdits"),e.applyEdits=n;function t(a,o){if(a.length<=1)return a;var s=a.length/2|0,g=a.slice(0,s),h=a.slice(s);t(g,o),t(h,o);for(var d=0,D=0,_=0;d<g.length&&D<h.length;){var l=o(g[d],h[D]);l<=0?a[_++]=g[d++]:a[_++]=h[D++]}for(;d<g.length;)a[_++]=g[d++];for(;D<h.length;)a[_++]=h[D++];return a}u(t,"mergeSort")})(Ze||(Ze={}));var ct=function(){function e(r,i,n,t){this._uri=r,this._languageId=i,this._version=n,this._content=t,this._lineOffsets=void 0}return u(e,"FullTextDocument"),Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(r){if(r){var i=this.offsetAt(r.start),n=this.offsetAt(r.end);return this._content.substring(i,n)}return this._content},e.prototype.update=function(r,i){this._content=r.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var r=[],i=this._content,n=!0,t=0;t<i.length;t++){n&&(r.push(t),n=!1);var a=i.charAt(t);n=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}n&&i.length>0&&r.push(i.length),this._lineOffsets=r}return this._lineOffsets},e.prototype.positionAt=function(r){r=Math.max(Math.min(r,this._content.length),0);var i=this.getLineOffsets(),n=0,t=i.length;if(t===0)return A.create(0,r);for(;n<t;){var a=Math.floor((n+t)/2);i[a]>r?t=a:n=a+1}var o=n-1;return A.create(o,r-i[o])},e.prototype.offsetAt=function(r){var i=this.getLineOffsets();if(r.line>=i.length)return this._content.length;if(r.line<0)return 0;var n=i[r.line],t=r.line+1<i.length?i[r.line+1]:this._content.length;return Math.max(Math.min(n+r.character,t),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),c;(function(e){var r=Object.prototype.toString;function i(l){return typeof l<"u"}u(i,"defined"),e.defined=i;function n(l){return typeof l>"u"}u(n,"undefined$1"),e.undefined=n;function t(l){return l===!0||l===!1}u(t,"boolean"),e.boolean=t;function a(l){return r.call(l)==="[object String]"}u(a,"string"),e.string=a;function o(l){return r.call(l)==="[object Number]"}u(o,"number"),e.number=o;function s(l,N,P){return r.call(l)==="[object Number]"&&N<=l&&l<=P}u(s,"numberRange"),e.numberRange=s;function g(l){return r.call(l)==="[object Number]"&&-2147483648<=l&&l<=2147483647}u(g,"integer"),e.integer=g;function h(l){return r.call(l)==="[object Number]"&&0<=l&&l<=2147483647}u(h,"uinteger"),e.uinteger=h;function d(l){return r.call(l)==="[object Function]"}u(d,"func"),e.func=d;function D(l){return l!==null&&typeof l=="object"}u(D,"objectLiteral"),e.objectLiteral=D;function _(l,N){return Array.isArray(l)&&l.every(N)}u(_,"typedArray"),e.typedArray=_})(c||(c={}));function b(e){return{ofRule:e}}u(b,"opt");function v(e,r){return{ofRule:e,isList:!0,separator:r}}u(v,"list");function et(e,r){const i=e.match;return e.match=n=>{let t=!1;return i&&(t=i(n)),t&&r.every(a=>a.match&&!a.match(n))},e}u(et,"butNot");function U(e,r){return{style:r,match:i=>i.kind===e}}u(U,"t");function f(e,r){return{style:r||"punctuation",match:i=>i.kind==="Punctuation"&&i.value===e}}u(f,"p");const ut=u(e=>e===" "||e==="	"||e===","||e===`
`||e==="\r"||e==="\uFEFF"||e==="\xA0","isIgnored"),ot={Name:/^[_A-Za-z][_0-9A-Za-z]*/,Punctuation:/^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,Comment:/^#.*/},st={Document:[v("Definition")],Definition(e){switch(e.value){case"{":return"ShortQuery";case"query":return"Query";case"mutation":return"Mutation";case"subscription":return"Subscription";case"fragment":return re.FRAGMENT_DEFINITION;case"schema":return"SchemaDef";case"scalar":return"ScalarDef";case"type":return"ObjectTypeDef";case"interface":return"InterfaceDef";case"union":return"UnionDef";case"enum":return"EnumDef";case"input":return"InputDef";case"extend":return"ExtendDef";case"directive":return"DirectiveDef"}},ShortQuery:["SelectionSet"],Query:[E("query"),b(p("def")),b("VariableDefinitions"),v("Directive"),"SelectionSet"],Mutation:[E("mutation"),b(p("def")),b("VariableDefinitions"),v("Directive"),"SelectionSet"],Subscription:[E("subscription"),b(p("def")),b("VariableDefinitions"),v("Directive"),"SelectionSet"],VariableDefinitions:[f("("),v("VariableDefinition"),f(")")],VariableDefinition:["Variable",f(":"),"Type",b("DefaultValue")],Variable:[f("$","variable"),p("variable")],DefaultValue:[f("="),"Value"],SelectionSet:[f("{"),v("Selection"),f("}")],Selection(e,r){return e.value==="..."?r.match(/[\s\u00a0,]*(on\b|@|{)/,!1)?"InlineFragment":"FragmentSpread":r.match(/[\s\u00a0,]*:/,!1)?"AliasedField":"Field"},AliasedField:[p("property"),f(":"),p("qualifier"),b("Arguments"),v("Directive"),b("SelectionSet")],Field:[p("property"),b("Arguments"),v("Directive"),b("SelectionSet")],Arguments:[f("("),v("Argument"),f(")")],Argument:[p("attribute"),f(":"),"Value"],FragmentSpread:[f("..."),p("def"),v("Directive")],InlineFragment:[f("..."),b("TypeCondition"),v("Directive"),"SelectionSet"],FragmentDefinition:[E("fragment"),b(et(p("def"),[E("on")])),"TypeCondition",v("Directive"),"SelectionSet"],TypeCondition:[E("on"),"NamedType"],Value(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue";case"$":return"Variable";case"&":return"NamedType"}return null;case"Name":switch(e.value){case"true":case"false":return"BooleanValue"}return e.value==="null"?"NullValue":"EnumValue"}},NumberValue:[U("Number","number")],StringValue:[{style:"string",match:e=>e.kind==="String",update(e,r){r.value.startsWith('"""')&&(e.inBlockstring=!r.value.slice(3).endsWith('"""'))}}],BooleanValue:[U("Name","builtin")],NullValue:[U("Name","keyword")],EnumValue:[p("string-2")],ListValue:[f("["),v("Value"),f("]")],ObjectValue:[f("{"),v("ObjectField"),f("}")],ObjectField:[p("attribute"),f(":"),"Value"],Type(e){return e.value==="["?"ListType":"NonNullType"},ListType:[f("["),"Type",f("]"),b(f("!"))],NonNullType:["NamedType",b(f("!"))],NamedType:[tt("atom")],Directive:[f("@","meta"),p("meta"),b("Arguments")],DirectiveDef:[E("directive"),f("@","meta"),p("meta"),b("ArgumentsDef"),E("on"),v("DirectiveLocation",f("|"))],InterfaceDef:[E("interface"),p("atom"),b("Implements"),v("Directive"),f("{"),v("FieldDef"),f("}")],Implements:[E("implements"),v("NamedType",f("&"))],DirectiveLocation:[p("string-2")],SchemaDef:[E("schema"),v("Directive"),f("{"),v("OperationTypeDef"),f("}")],OperationTypeDef:[p("keyword"),f(":"),p("atom")],ScalarDef:[E("scalar"),p("atom"),v("Directive")],ObjectTypeDef:[E("type"),p("atom"),b("Implements"),v("Directive"),f("{"),v("FieldDef"),f("}")],FieldDef:[p("property"),b("ArgumentsDef"),f(":"),"Type",v("Directive")],ArgumentsDef:[f("("),v("InputValueDef"),f(")")],InputValueDef:[p("attribute"),f(":"),"Type",b("DefaultValue"),v("Directive")],UnionDef:[E("union"),p("atom"),v("Directive"),f("="),v("UnionMember",f("|"))],UnionMember:["NamedType"],EnumDef:[E("enum"),p("atom"),v("Directive"),f("{"),v("EnumValueDef"),f("}")],EnumValueDef:[p("string-2"),v("Directive")],InputDef:[E("input"),p("atom"),v("Directive"),f("{"),v("InputValueDef"),f("}")],ExtendDef:[E("extend"),"ObjectTypeDef"]};function E(e){return{style:"keyword",match:r=>r.kind==="Name"&&r.value===e}}u(E,"word");function p(e){return{style:e,match:r=>r.kind==="Name",update(r,i){r.name=i.value}}}u(p,"name");function tt(e){return{style:e,match:r=>r.kind==="Name",update(r,i){var n;!((n=r.prevState)===null||n===void 0)&&n.prevState&&(r.name=i.value,r.prevState.prevState.type=i.value)}}}u(tt,"type");function ft(e={eatWhitespace:r=>r.eatWhile(ut),lexRules:ot,parseRules:st,editorConfig:{}}){return{startState(){const r={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeperator:!1,prevState:null};return x(e.parseRules,r,re.DOCUMENT),r},token(r,i){return rt(r,i,e)}}}u(ft,"onlineParser");function rt(e,r,i){var n;if(r.inBlockstring)return e.match(/.*"""/)?(r.inBlockstring=!1,"string"):(e.skipToEnd(),"string");const{lexRules:t,parseRules:a,eatWhitespace:o,editorConfig:s}=i;if(r.rule&&r.rule.length===0?X(r):r.needsAdvance&&(r.needsAdvance=!1,Q(r,!0)),e.sol()){const d=(s==null?void 0:s.tabSize)||2;r.indentLevel=Math.floor(e.indentation()/d)}if(o(e))return"ws";const g=it(t,e);if(!g)return e.match(/\S+/)||e.match(/\s/),x($,r,"Invalid"),"invalidchar";if(g.kind==="Comment")return x($,r,"Comment"),"comment";const h=ee({},r);if(g.kind==="Punctuation"){if(/^[{([]/.test(g.value))r.indentLevel!==void 0&&(r.levels=(r.levels||[]).concat(r.indentLevel+1));else if(/^[})\]]/.test(g.value)){const d=r.levels=(r.levels||[]).slice(0,-1);r.indentLevel&&d.length>0&&d[d.length-1]<r.indentLevel&&(r.indentLevel=d[d.length-1])}}for(;r.rule;){let d=typeof r.rule=="function"?r.step===0?r.rule(g,e):null:r.rule[r.step];if(r.needsSeperator&&(d=d==null?void 0:d.separator),d){if(d.ofRule&&(d=d.ofRule),typeof d=="string"){x(a,r,d);continue}if(!((n=d.match)===null||n===void 0)&&n.call(d,g))return d.update&&d.update(r,g),g.kind==="Punctuation"?Q(r,!0):r.needsAdvance=!0,d.style}nt(r)}return ee(r,h),x($,r,"Invalid"),"invalidchar"}u(rt,"getToken");function ee(e,r){const i=Object.keys(r);for(let n=0;n<i.length;n++)e[i[n]]=r[i[n]];return e}u(ee,"assign");const $={Invalid:[],Comment:[]};function x(e,r,i){if(!e[i])throw new TypeError("Unknown rule: "+i);r.prevState=Object.assign({},r),r.kind=i,r.name=null,r.type=null,r.rule=e[i],r.step=0,r.needsSeperator=!1}u(x,"pushRule");function X(e){!e.prevState||(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeperator=e.prevState.needsSeperator,e.prevState=e.prevState.prevState)}u(X,"popRule");function Q(e,r){var i;if(te(e)&&e.rule){const n=e.rule[e.step];if(n.separator){const t=n.separator;if(e.needsSeperator=!e.needsSeperator,!e.needsSeperator&&t.ofRule)return}if(r)return}for(e.needsSeperator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)X(e),e.rule&&(te(e)?!((i=e.rule)===null||i===void 0)&&i[e.step].separator&&(e.needsSeperator=!e.needsSeperator):(e.needsSeperator=!1,e.step++))}u(Q,"advanceRule");function te(e){const r=Array.isArray(e.rule)&&typeof e.rule[e.step]!="string"&&e.rule[e.step];return r&&r.isList}u(te,"isList");function nt(e){for(;e.rule&&!(Array.isArray(e.rule)&&e.rule[e.step].ofRule);)X(e);e.rule&&Q(e,!1)}u(nt,"unsuccessful");function it(e,r){const i=Object.keys(e);for(let n=0;n<i.length;n++){const t=r.match(e[i[n]]);if(t&&t instanceof Array)return{kind:i[n],value:t[0]}}}u(it,"lex");const dt={ALIASED_FIELD:"AliasedField",ARGUMENTS:"Arguments",SHORT_QUERY:"ShortQuery",QUERY:"Query",MUTATION:"Mutation",SUBSCRIPTION:"Subscription",TYPE_CONDITION:"TypeCondition",INVALID:"Invalid",COMMENT:"Comment",SCHEMA_DEF:"SchemaDef",SCALAR_DEF:"ScalarDef",OBJECT_TYPE_DEF:"ObjectTypeDef",OBJECT_VALUE:"ObjectValue",LIST_VALUE:"ListValue",INTERFACE_DEF:"InterfaceDef",UNION_DEF:"UnionDef",ENUM_DEF:"EnumDef",ENUM_VALUE:"EnumValue",FIELD_DEF:"FieldDef",INPUT_DEF:"InputDef",INPUT_VALUE_DEF:"InputValueDef",ARGUMENTS_DEF:"ArgumentsDef",EXTEND_DEF:"ExtendDef",DIRECTIVE_DEF:"DirectiveDef",IMPLEMENTS:"Implements",VARIABLE_DEFINITIONS:"VariableDefinitions",TYPE:"Type"},gt=Object.assign(Object.assign({},re),dt);var Ke;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(Ke||(Ke={}));export{me as C,Ee as I,ot as L,st as P,gt as R,b as a,ut as i,v as l,ft as o,f as p,U as t};
