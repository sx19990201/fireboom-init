import{r as p,C as w,c as I,e as f,a as d,d as G,_ as H,j as $,m as J,F as K}from"./index.bb86fbbf.js";import{o as L}from"./omit.fd69d8d2.js";import{P as M,a as Q}from"./styleChecker.d685456c.js";import{W as U}from"./button.aa0bb50b.js";var X=globalThis&&globalThis.__rest||function(r,o){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&o.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)o.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a},Y=function(o){var a,e=o.prefixCls,t=o.className,u=o.checked,C=o.onChange,s=o.onClick,h=X(o,["prefixCls","className","checked","onChange","onClick"]),l=p.exports.useContext(w),v=l.getPrefixCls,g=function(b){C==null||C(!u),s==null||s(b)},i=v("tag",e),x=I(i,(a={},f(a,"".concat(i,"-checkable"),!0),f(a,"".concat(i,"-checkable-checked"),u),a),t);return d("span",{...h,className:x,onClick:g})};const Z=Y;var ee=globalThis&&globalThis.__rest||function(r,o){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&o.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)o.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a},oe=new RegExp("^(".concat(M.join("|"),")(-inverse)?$")),re=new RegExp("^(".concat(Q.join("|"),")$")),te=function(o,a){var e,t=o.prefixCls,u=o.className,C=o.style,s=o.children,h=o.icon,l=o.color,v=o.onClose,g=o.closeIcon,i=o.closable,x=i===void 0?!1:i,n=ee(o,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),b=p.exports.useContext(w),E=b.getPrefixCls,_=b.direction,W=p.exports.useState(!0),y=G(W,2),z=y[0],P=y[1];p.exports.useEffect(function(){"visible"in n&&P(n.visible)},[n.visible]);var k=function(){return l?oe.test(l)||re.test(l):!1},F=H({backgroundColor:l&&!k()?l:void 0},C),O=k(),c=E("tag",t),A=I(c,(e={},f(e,"".concat(c,"-").concat(l),O),f(e,"".concat(c,"-has-color"),l&&!O),f(e,"".concat(c,"-hidden"),!z),f(e,"".concat(c,"-rtl"),_==="rtl"),e),u),N=function(m){m.stopPropagation(),v==null||v(m),!m.defaultPrevented&&("visible"in n||P(!1))},V=function(){return x?g?d("span",{className:"".concat(c,"-close-icon"),onClick:N,children:g}):d(J,{className:"".concat(c,"-close-icon"),onClick:N}):null},q="onClick"in n||s&&s.type==="a",B=L(n,["visible"]),T=h||null,D=T?$(K,{children:[T,d("span",{children:s})]}):s,j=$("span",{...B,ref:a,className:A,style:F,children:[D,V()]});return q?d(U,{children:j}):j},R=p.exports.forwardRef(te);R.CheckableTag=Z;const ce=R;export{ce as T};
