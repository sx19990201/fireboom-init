import{r as c,C as x,a,j as d,F as P}from"./index.bb86fbbf.js";import{T as C}from"./styleChecker.d685456c.js";import{g as O}from"./Portal.a4c68d61.js";var v=function(t){if(!t)return null;var n=typeof t=="function";return n?t():t},b=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},p=c.exports.forwardRef(function(e,t){var n=e.prefixCls,r=e.title,o=e.content,u=e._overlay,i=b(e,["prefixCls","title","content","_overlay"]),m=c.exports.useContext(x),l=m.getPrefixCls,y=function(f){if(!(!r&&!o))return d(P,{children:[r&&a("div",{className:"".concat(f,"-title"),children:v(r)}),a("div",{className:"".concat(f,"-inner-content"),children:v(o)})]})},s=l("popover",n),g=l();return a(C,{...i,prefixCls:s,ref:t,overlay:u||y(s),transitionName:O(g,"zoom-big",i.transitionName)})});p.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};const T=p;export{T as P,v as g};
