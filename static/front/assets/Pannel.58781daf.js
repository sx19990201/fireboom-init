import{b as i,j as l,a as t}from"./index.bb86fbbf.js";/* empty css              */import{i as p}from"./use-immer.module.c8467ba8.js";function o({typeList:a}){const[n,s]=p("userManage"),r=i();return l("div",{className:"bg-[#FDFDFD] h-full pl-6 pt-6",children:[t("div",{className:"border-gray border-b pb-6",children:t("div",{className:"text-17px leading-17px font-600",children:"\u8EAB\u4EFD\u9A8C\u8BC1"})}),a.map(e=>e.type==="title"?t("h2",{className:"pt-4 text-[#99A0B1] text-12px leading-38px",children:e.name},e.name):t("div",{className:`h-38px flex items-center cursor-pointer ${e.type===n?"bg-[#F8F8F9] font-600":""}`,onClick:()=>{s(e.type),r(`/auth/${e.type}`)},children:t("div",{className:"text-[#222222] h-4 leading-4",children:e.name})},e.name))]})}export{o as A};