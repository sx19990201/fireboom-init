import{u as p,j as u,a as s,O as c}from"./index.bb86fbbf.js";import{A as r}from"./index.20f4d44c.js";import{_ as h,a as i,b as g,c as y}from"./_createAggregator.0faee691.js";import{A}from"./Pannel.58781daf.js";import"./Sider.d20f3d2a.js";import"./RightOutlined.93d63f13.js";import"./omit.fd69d8d2.js";import"./identity.bf2ac13f.js";import"./_baseIsEqual.08bd8828.js";import"./isSymbol.5f361b44.js";/* empty css              */import"./use-immer.module.c8467ba8.js";var f=i,x=h,b=x(function(a,e,t){f(a,t,e)}),d=b,v=i,B=g,E=y;function _(a,e){var t={};return e=E(e),B(a,function(n,o,l){v(t,o,e(n,o,l))}),t}var w=_;const F=w,{Sider:V,Content:C}=r,m=[{name:"\u6982\u89C8",type:"outline"},{name:"\u7528\u6237",type:"title"},{name:"\u7528\u6237\u7BA1\u7406",type:"userManage"},{name:"\u901A\u7528",type:"title"},{name:"\u767B\u5165\u4F53\u9A8C",type:"login"},{name:"\u8FDE\u63A5\u5668",type:"connect"},{name:"\u8BBE\u7F6E",type:"title"},{name:"\u6570\u636E\u5E93",type:"db"}],N=F(d(m,"type"),a=>a.name);function G(){var t,n;const e=(n=((t=p().pathname.match(/\/auth\/(\w+)/))!=null?t:[])[1])!=null?n:"";return console.log(e),u(r,{className:"h-100vh",children:[s(V,{width:270,theme:"light",children:s(A,{typeList:m})}),u(C,{className:"h-100vh flex flex-col",children:[u("div",{className:"h-15 flex-0 bg-white text-[#222222] font-600 flex items-center pl-6 text-17px",children:["\u8EAB\u4EFD\u9A8C\u8BC1/",N[e]]}),s("div",{className:"flex-1 min-h-0 px-6 bg-white",children:s(c,{})})]})]})}export{G as default};