import{r as p}from"./index.bb86fbbf.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Oe(e,i,r,n){function a(t){return t instanceof r?t:new r(function(s){s(t)})}return new(r||(r=Promise))(function(t,s){function c(f){try{u(n.next(f))}catch(v){s(v)}}function d(f){try{u(n.throw(f))}catch(v){s(v)}}function u(f){f.done?t(f.value):a(f.value).then(c,d)}u((n=n.apply(e,i||[])).next())})}function De(e,i){var r={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},n,a,t,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(u){return function(f){return d([u,f])}}function d(u){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(t=u[0]&2?a.return:u[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,u[1])).done)return t;switch(a=0,t&&(u=[u[0]&2,t.value]),u[0]){case 0:case 1:t=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,a=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(t=r.trys,!(t=t.length>0&&t[t.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!t||u[1]>t[0]&&u[1]<t[3])){r.label=u[1];break}if(u[0]===6&&r.label<t[1]){r.label=t[1],t=u;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(u);break}t[2]&&r.ops.pop(),r.trys.pop();continue}u=i.call(e,r)}catch(f){u=[6,f],a=0}finally{n=t=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var D=function(){},w=D(),re=Object,R=function(e){return e===w},_=function(e){return typeof e=="function"},M=function(e,i){return re.assign({},e,i)},pe="undefined",be=function(){return typeof window!=pe},He=function(){return typeof document!=pe},qe=function(){return be()&&typeof window.requestAnimationFrame!=pe},ee=new WeakMap,Pe=0,Q=function(e){var i=typeof e,r=e&&e.constructor,n=r==Date,a,t;if(re(e)===e&&!n&&r!=RegExp){if(a=ee.get(e),a)return a;if(a=++Pe+"~",ee.set(e,a),r==Array){for(a="@",t=0;t<e.length;t++)a+=Q(e[t])+",";ee.set(e,a)}if(r==re){a="#";for(var s=re.keys(e).sort();!R(t=s.pop());)R(e[t])||(a+=t+":"+Q(e[t])+",");ee.set(e,a)}}else a=n?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;return a},ve=!0,ke=function(){return ve},Ie=be(),Re=He(),de=Ie&&window.addEventListener?window.addEventListener.bind(window):D,Je=Re?document.addEventListener.bind(document):D,he=Ie&&window.removeEventListener?window.removeEventListener.bind(window):D,Ke=Re?document.removeEventListener.bind(document):D,je=function(){var e=Re&&document.visibilityState;return R(e)||e!=="hidden"},ze=function(e){return Je("visibilitychange",e),de("focus",e),function(){Ke("visibilitychange",e),he("focus",e)}},Ge=function(e){var i=function(){ve=!0,e()},r=function(){ve=!1};return de("online",i),de("offline",r),function(){he("online",i),he("offline",r)}},$e={isOnline:ke,isVisible:je},Be={initFocus:ze,initReconnect:Ge},ne=!be()||"Deno"in window,Qe=function(e){return qe()?window.requestAnimationFrame(e):setTimeout(e,1)},te=ne?p.exports.useEffect:p.exports.useLayoutEffect,ce=typeof navigator<"u"&&navigator.connection,Te=!ne&&ce&&(["slow-2g","2g"].includes(ce.effectiveType)||ce.saveData),Ae=function(e){if(_(e))try{e=e()}catch{e=""}var i=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Q(e):"";var r=e?"$swr$"+e:"";return[e,i,r]},q=new WeakMap,Ve=0,We=1,Fe=2,B=function(e,i,r,n,a,t,s){s===void 0&&(s=!0);var c=q.get(e),d=c[0],u=c[1],f=c[3],v=d[i],l=u[i];if(s&&l)for(var I=0;I<l.length;++I)l[I](r,n,a);return t&&(delete f[i],v&&v[0])?v[0](Fe).then(function(){return e.get(i)}):e.get(i)},Xe=0,me=function(){return++Xe},_e=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return Oe(void 0,void 0,void 0,function(){var r,n,a,t,s,c,d,u,f,v,l,I,X,E,h,o,J,N,A,C,U;return De(this,function(W){switch(W.label){case 0:if(r=e[0],n=e[1],a=e[2],t=e[3],s=typeof t=="boolean"?{revalidate:t}:t||{},c=R(s.populateCache)?!0:s.populateCache,d=s.revalidate!==!1,u=s.rollbackOnError!==!1,f=s.optimisticData,v=Ae(n),l=v[0],I=v[2],!l)return[2];if(X=q.get(r),E=X[2],e.length<3)return[2,B(r,l,r.get(l),w,w,d,!0)];if(h=a,J=me(),E[l]=[J,0],N=!R(f),A=r.get(l),N&&(C=_(f)?f(A):f,r.set(l,C),B(r,l,C)),_(h))try{h=h(r.get(l))}catch(L){o=L}return h&&_(h.then)?[4,h.catch(function(L){o=L})]:[3,2];case 1:if(h=W.sent(),J!==E[l][0]){if(o)throw o;return[2,h]}else o&&N&&u&&(c=!0,h=A,r.set(l,A));W.label=2;case 2:return c&&(o||(_(c)&&(h=c(h,A)),r.set(l,h)),r.set(I,M(r.get(I),{error:o}))),E[l][1]=me(),[4,B(r,l,h,o,w,d,!!c)];case 3:if(U=W.sent(),o)throw o;return[2,c?U:h]}})})},Ce=function(e,i){for(var r in e)e[r][0]&&e[r][0](i)},Ye=function(e,i){if(!q.has(e)){var r=M(Be,i),n={},a=_e.bind(w,e),t=D;if(q.set(e,[n,{},{},{},a]),!ne){var s=r.initFocus(setTimeout.bind(w,Ce.bind(w,n,Ve))),c=r.initReconnect(setTimeout.bind(w,Ce.bind(w,n,We)));t=function(){s&&s(),c&&c(),q.delete(e)}}return[e,a,t]}return[e,q.get(e)[4]]},Ze=function(e,i,r,n,a){var t=r.errorRetryCount,s=a.retryCount,c=~~((Math.random()+.5)*(1<<(s<8?s:8)))*r.errorRetryInterval;!R(t)&&s>t||setTimeout(n,c,a)},Me=Ye(new Map),er=Me[0],rr=Me[1],tr=M({onLoadingSlow:D,onSuccess:D,onError:D,onErrorRetry:Ze,onDiscarded:D,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Te?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Te?5e3:3e3,compare:function(e,i){return Q(e)==Q(i)},isPaused:function(){return!1},cache:er,mutate:rr,fallback:{}},$e),nr=function(e,i){var r=M(e,i);if(i){var n=e.use,a=e.fallback,t=i.use,s=i.fallback;n&&t&&(r.use=n.concat(t)),a&&s&&(r.fallback=M(a,s))}return r},ar=p.exports.createContext({}),ir=function(e,i){var r=p.exports.useState({})[1],n=p.exports.useRef(e),a=p.exports.useRef({data:!1,error:!1,isValidating:!1}),t=p.exports.useCallback(function(s){var c=!1,d=n.current;for(var u in s){var f=u;d[f]!==s[f]&&(d[f]=s[f],a.current[f]&&(c=!0))}c&&!i.current&&r({})},[]);return te(function(){n.current=e}),[n,a.current,t]},ur=function(e){return _(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},or=function(){return M(tr,p.exports.useContext(ar))},sr=function(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var a=or(),t=ur(r),s=t[0],c=t[1],d=t[2],u=nr(a,d),f=e,v=u.use;if(v)for(var l=v.length;l-- >0;)f=v[l](f);return f(s,c||u.fetcher,u)}},xe=function(e,i,r){var n=i[e]||(i[e]=[]);return n.push(r),function(){var a=n.indexOf(r);a>=0&&(n[a]=n[n.length-1],n.pop())}},le={dedupe:!0},fr=function(e,i,r){var n=r.cache,a=r.compare,t=r.fallbackData,s=r.suspense,c=r.revalidateOnMount,d=r.refreshInterval,u=r.refreshWhenHidden,f=r.refreshWhenOffline,v=q.get(n),l=v[0],I=v[1],X=v[2],E=v[3],h=Ae(e),o=h[0],J=h[1],N=h[2],A=p.exports.useRef(!1),C=p.exports.useRef(!1),U=p.exports.useRef(o),W=p.exports.useRef(i),L=p.exports.useRef(r),m=function(){return L.current},ae=function(){return m().isVisible()&&m().isOnline()},Y=function(S){return n.set(N,M(n.get(N),S))},we=n.get(o),Ne=R(t)?r.fallback[o]:t,V=R(we)?Ne:we,Ee=n.get(N)||{},K=Ee.error,ye=!A.current,ge=function(){return ye&&!R(c)?c:m().isPaused()?!1:s?R(V)?!1:r.revalidateIfStale:R(V)||r.revalidateIfStale},Ue=function(){return!o||!i?!1:Ee.isValidating?!0:ye&&ge()},ie=Ue(),ue=ir({data:V,error:K,isValidating:ie},C),P=ue[0],oe=ue[1],Z=ue[2],H=p.exports.useCallback(function(S){return Oe(void 0,void 0,void 0,function(){var y,g,T,j,z,x,b,F,O,se,G,k,fe;return De(this,function($){switch($.label){case 0:if(y=W.current,!o||!y||C.current||m().isPaused())return[2,!1];j=!0,z=S||{},x=!E[o]||!z.dedupe,b=function(){return!C.current&&o===U.current&&A.current},F=function(){var Se=E[o];Se&&Se[1]===T&&delete E[o]},O={isValidating:!1},se=function(){Y({isValidating:!1}),b()&&Z(O)},Y({isValidating:!0}),Z({isValidating:!0}),$.label=1;case 1:return $.trys.push([1,3,,4]),x&&(B(n,o,P.current.data,P.current.error,!0),r.loadingTimeout&&!n.get(o)&&setTimeout(function(){j&&b()&&m().onLoadingSlow(o,r)},r.loadingTimeout),E[o]=[y.apply(void 0,J),me()]),fe=E[o],g=fe[0],T=fe[1],[4,g];case 2:return g=$.sent(),x&&setTimeout(F,r.dedupingInterval),!E[o]||E[o][1]!==T?(x&&b()&&m().onDiscarded(o),[2,!1]):(Y({error:w}),O.error=w,G=X[o],!R(G)&&(T<=G[0]||T<=G[1]||G[1]===0)?(se(),x&&b()&&m().onDiscarded(o),[2,!1]):(a(P.current.data,g)?O.data=P.current.data:O.data=g,a(n.get(o),g)||n.set(o,g),x&&b()&&m().onSuccess(g,o,r),[3,4]));case 3:return k=$.sent(),F(),m().isPaused()||(Y({error:k}),O.error=k,x&&b()&&(m().onError(k,o,r),(typeof r.shouldRetryOnError=="boolean"&&r.shouldRetryOnError||_(r.shouldRetryOnError)&&r.shouldRetryOnError(k))&&ae()&&m().onErrorRetry(k,o,r,H,{retryCount:(z.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return j=!1,se(),b()&&x&&B(n,o,O.data,O.error,!1),[2,!0]}})})},[o]),Le=p.exports.useCallback(_e.bind(w,n,function(){return U.current}),[]);if(te(function(){W.current=i,L.current=r}),te(function(){if(!!o){var S=o!==U.current,y=H.bind(w,le),g=function(b,F,O){Z(M({error:F,isValidating:O},a(P.current.data,b)?w:{data:b}))},T=0,j=function(b){if(b==Ve){var F=Date.now();m().revalidateOnFocus&&F>T&&ae()&&(T=F+m().focusThrottleInterval,y())}else if(b==We)m().revalidateOnReconnect&&ae()&&y();else if(b==Fe)return H()},z=xe(o,I,g),x=xe(o,l,j);return C.current=!1,U.current=o,A.current=!0,S&&Z({data:V,error:K,isValidating:ie}),ge()&&(R(V)||ne?y():Qe(y)),function(){C.current=!0,z(),x()}}},[o,H]),te(function(){var S;function y(){var T=_(d)?d(V):d;T&&S!==-1&&(S=setTimeout(g,T))}function g(){!P.current.error&&(u||m().isVisible())&&(f||m().isOnline())?H(le).then(y):y()}return y(),function(){S&&(clearTimeout(S),S=-1)}},[d,u,f,H]),p.exports.useDebugValue(V),s&&R(V)&&o)throw W.current=i,L.current=r,C.current=!1,R(K)?H(le):K;return{mutate:Le,get data(){return oe.data=!0,V},get error(){return oe.error=!0,K},get isValidating(){return oe.isValidating=!0,ie}}},lr=sr(fr);export{lr as u};