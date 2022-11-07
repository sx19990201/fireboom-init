import{a as T,j as de,r as c}from"./index.bb86fbbf.js";import{p as o}from"./index.10921ee9.js";import{i as ge}from"./state-local.735e622b.js";function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(r),!0).forEach(function(n){xe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ve(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function me(e,t){if(e==null)return{};var r=ve(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function he(e,t){return Me(e)||be(e,t)||ye(e,t)||we()}function Me(e){if(Array.isArray(e))return e}function be(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,s=void 0;try{for(var l=e[Symbol.iterator](),M;!(n=(M=l.next()).done)&&(r.push(M.value),!(t&&r.length===t));n=!0);}catch(y){i=!0,s=y}finally{try{!n&&l.return!=null&&l.return()}finally{if(i)throw s}}return r}}function ye(e,t){if(!!e){if(typeof e=="string")return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}}function $(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function we(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Oe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function je(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,M=new Array(l),y=0;y<l;y++)M[y]=arguments[y];return t.apply(r,[].concat(i,M))}}}function Ee(e){return{}.toString.call(e).includes("Object")}function Re(e){return e||ee("configIsRequired"),Ee(e)||ee("configType"),e.urls?(Pe(),{paths:{vs:e.urls.monacoBase}}):e}function Pe(){console.warn(te.deprecation)}function Se(e,t){throw new Error(e[t]||e.default)}var te={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ee=je(Se)(te),Ce={config:Re},Ie=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(i){return r.reduceRight(function(s,l){return l(s)},i)}};function re(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],re(e[r],t[r]))}),_(_({},e),t)}var Te={type:"cancelation",msg:"operation is manually canceled"};function Y(e){var t=!1,r=new Promise(function(n,i){e.then(function(s){return t?i(Te):n(s)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var Ae=ge.create({config:Oe,isInitialized:!1,resolve:null,reject:null,monaco:null}),ne=he(Ae,2),A=ne[0],N=ne[1];function ke(e){var t=Ce.config(e),r=t.monaco,n=me(t,["monaco"]);N(function(i){return{config:re(i.config,n),monaco:r}})}function De(){var e=A(function(t){var r=t.monaco,n=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:n,resolve:i}});if(!e.isInitialized){if(N({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Y(J);if(window.monaco&&window.monaco.editor)return oe(window.monaco),e.resolve(window.monaco),Y(J);Ie(Le,ze)(Ne)}return Y(J)}function Le(e){return document.body.appendChild(e)}function qe(e){var t=document.createElement("script");return e&&(t.src=e),t}function ze(e){var t=A(function(n){var i=n.config,s=n.reject;return{config:i,reject:s}}),r=qe("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function Ne(){var e=A(function(r){var n=r.config,i=r.resolve,s=r.reject;return{config:n,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){oe(r),e.resolve(r)},function(r){e.reject(r)})}function oe(e){A().monaco||N({monaco:e})}function Ue(){return A(function(e){var t=e.monaco;return t})}var J=new Promise(function(e,t){return N({resolve:e,reject:t})}),ie={config:ke,init:De,__getMonacoInstance:Ue};const Ve={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function We({content:e}){return T("div",{style:Ve,children:e})}const Q={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function se({width:e,height:t,isEditorReady:r,loading:n,_ref:i,className:s,wrapperProps:l}){return de("section",{style:{...Q.wrapper,width:e,height:t},...l,children:[!r&&T(We,{content:n}),T("div",{ref:i,style:{...Q.fullWidth,...!r&&Q.hide},className:s})]})}se.propTypes={width:o.exports.oneOfType([o.exports.number,o.exports.string]).isRequired,height:o.exports.oneOfType([o.exports.number,o.exports.string]).isRequired,loading:o.exports.oneOfType([o.exports.element,o.exports.string]).isRequired,isEditorReady:o.exports.bool.isRequired,className:o.exports.string,wrapperProps:o.exports.object};var ce=c.exports.memo(se);function ue(e){c.exports.useEffect(e,[])}function b(e,t,r=!0){const n=c.exports.useRef(!0);c.exports.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}function I(){}function z(e,t,r,n){return He(e,n)||Fe(e,t,r,n)}function He(e,t){return e.editor.getModel(ae(e,t))}function Fe(e,t,r,n){return e.editor.createModel(t,r,n&&ae(e,n))}function ae(e,t){return e.Uri.parse(t)}function Be(e){return e===void 0}function fe({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:l,keepCurrentOriginalModel:M,keepCurrentModifiedModel:y,theme:O,loading:k,options:w,height:U,width:V,className:W,wrapperProps:H,beforeMount:F,onMount:B}){const[m,R]=c.exports.useState(!1),[j,d]=c.exports.useState(!0),h=c.exports.useRef(null),x=c.exports.useRef(null),D=c.exports.useRef(null),v=c.exports.useRef(B),u=c.exports.useRef(F);ue(()=>{const a=ie.init();return a.then(g=>(x.current=g)&&d(!1)).catch(g=>(g==null?void 0:g.type)!=="cancelation"&&console.error("Monaco initialization: error:",g)),()=>h.current?G():a.cancel()}),b(()=>{const a=h.current.getModifiedEditor();a.getOption(x.current.editor.EditorOption.readOnly)?a.setValue(t):t!==a.getValue()&&(a.executeEdits("",[{range:a.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),a.pushUndoStop())},[t],m),b(()=>{h.current.getModel().original.setValue(e)},[e],m),b(()=>{const{original:a,modified:g}=h.current.getModel();x.current.editor.setModelLanguage(a,n||r),x.current.editor.setModelLanguage(g,i||r)},[r,n,i],m),b(()=>{x.current.editor.setTheme(O)},[O],m),b(()=>{h.current.updateOptions(w)},[w],m);const P=c.exports.useCallback(()=>{u.current(x.current);const a=z(x.current,e,n||r,s),g=z(x.current,t,i||r,l);h.current.setModel({original:a,modified:g})},[r,t,i,e,n,s,l]),L=c.exports.useCallback(()=>{h.current=x.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...w}),P(),x.current.editor.setTheme(O),R(!0)},[w,O,P]);c.exports.useEffect(()=>{m&&v.current(h.current,x.current)},[m]),c.exports.useEffect(()=>{!j&&!m&&L()},[j,m,L]);function G(){const a=h.current.getModel();if(!M){var g;(g=a.original)===null||g===void 0||g.dispose()}if(!y){var S;(S=a.modified)===null||S===void 0||S.dispose()}h.current.dispose()}return T(ce,{width:V,height:U,isEditorReady:m,loading:k,_ref:D,className:W,wrapperProps:H})}fe.propTypes={original:o.exports.string,modified:o.exports.string,language:o.exports.string,originalLanguage:o.exports.string,modifiedLanguage:o.exports.string,originalModelPath:o.exports.string,modifiedModelPath:o.exports.string,keepCurrentOriginalModel:o.exports.bool,keepCurrentModifiedModel:o.exports.bool,theme:o.exports.string,loading:o.exports.oneOfType([o.exports.element,o.exports.string]),options:o.exports.object,width:o.exports.oneOfType([o.exports.number,o.exports.string]),height:o.exports.oneOfType([o.exports.number,o.exports.string]),className:o.exports.string,wrapperProps:o.exports.object,beforeMount:o.exports.func,onMount:o.exports.func};fe.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:I,onMount:I};function Ge(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{t.current=e},[e]),t.current}const q=new Map;function le({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:i,path:s,theme:l,line:M,loading:y,options:O,overrideServices:k,saveViewState:w,keepCurrentModel:U,width:V,height:W,className:H,wrapperProps:F,beforeMount:B,onMount:m,onChange:R,onValidate:j}){const[d,h]=c.exports.useState(!1),[x,D]=c.exports.useState(!0),v=c.exports.useRef(null),u=c.exports.useRef(null),P=c.exports.useRef(null),L=c.exports.useRef(m),G=c.exports.useRef(B),a=c.exports.useRef(null),g=c.exports.useRef(n),S=Ge(s);ue(()=>{const f=ie.init();return f.then(p=>(v.current=p)&&D(!1)).catch(p=>(p==null?void 0:p.type)!=="cancelation"&&console.error("Monaco initialization: error:",p)),()=>u.current?pe():f.cancel()}),b(()=>{const f=z(v.current,e||n,t||i,s);f!==u.current.getModel()&&(w&&q.set(S,u.current.saveViewState()),u.current.setModel(f),w&&u.current.restoreViewState(q.get(s)))},[s],d),b(()=>{u.current.updateOptions(O)},[O],d),b(()=>{u.current.getOption(v.current.editor.EditorOption.readOnly)?u.current.setValue(n):n!==u.current.getValue()&&(u.current.executeEdits("",[{range:u.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),u.current.pushUndoStop())},[n],d),b(()=>{v.current.editor.setModelLanguage(u.current.getModel(),i)},[i],d),b(()=>{Be(M)||u.current.revealLine(M)},[M],d),b(()=>{v.current.editor.setTheme(l)},[l],d);const X=c.exports.useCallback(()=>{G.current(v.current);const f=s||r,p=z(v.current,n||e,t||i,f);u.current=v.current.editor.create(P.current,{model:p,automaticLayout:!0,...O},k),w&&u.current.restoreViewState(q.get(f)),v.current.editor.setTheme(l),h(!0)},[e,t,r,n,i,s,O,k,w,l]);c.exports.useEffect(()=>{d&&L.current(u.current,v.current)},[d]),c.exports.useEffect(()=>{!x&&!d&&X()},[x,d,X]),g.current=n,c.exports.useEffect(()=>{if(d&&R){var f,p;(f=a.current)===null||f===void 0||f.dispose(),a.current=(p=u.current)===null||p===void 0?void 0:p.onDidChangeModelContent(C=>{const E=u.current.getValue();g.current!==E&&R(E,C)})}},[d,R]),c.exports.useEffect(()=>{if(d){const f=v.current.editor.onDidChangeMarkers(p=>{var C;const E=(C=u.current.getModel())===null||C===void 0?void 0:C.uri;if(E&&p.find(K=>K.path===E.path)){const K=v.current.editor.getModelMarkers({resource:E});j==null||j(K)}});return()=>{f==null||f.dispose()}}},[d,j]);function pe(){var f;if((f=a.current)===null||f===void 0||f.dispose(),U)w&&q.set(s,u.current.saveViewState());else{var p;(p=u.current.getModel())===null||p===void 0||p.dispose()}u.current.dispose()}return T(ce,{width:V,height:W,isEditorReady:d,loading:y,_ref:P,className:H,wrapperProps:F})}le.propTypes={defaultValue:o.exports.string,defaultPath:o.exports.string,defaultLanguage:o.exports.string,value:o.exports.string,language:o.exports.string,path:o.exports.string,theme:o.exports.string,line:o.exports.number,loading:o.exports.oneOfType([o.exports.element,o.exports.string]),options:o.exports.object,overrideServices:o.exports.object,saveViewState:o.exports.bool,keepCurrentModel:o.exports.bool,width:o.exports.oneOfType([o.exports.number,o.exports.string]),height:o.exports.oneOfType([o.exports.number,o.exports.string]),className:o.exports.string,wrapperProps:o.exports.object,beforeMount:o.exports.func,onMount:o.exports.func,onChange:o.exports.func,onValidate:o.exports.func};le.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:I,onMount:I,onValidate:I};export{le as E,ie as l};
