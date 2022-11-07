import{r as b,a as e,A as U,g as x,b as M,j as c,F as $}from"./index.bb86fbbf.js";import{T as k}from"./index.4a2fd767.js";import{S as d,E as N,a as S}from"./constant.83f5fa12.js";import{M as H,O as q,u as K}from"./OneToOneOutlined.eddb799a.js";import{B as W}from"./index.459a5958.js";import{B as O}from"./button.aa0bb50b.js";import{I as y}from"./index.da25c8fe.js";import{T as w}from"./Table.134cf6cf.js";import"./index.9ea41163.js";import"./index.837f2673.js";import"./index.61964446.js";import"./iconUtil.02bc4596.js";import"./Pagination.4574862b.js";import"./index.11df8be1.js";import"./Tree.4ceb5bc3.js";import{C as T}from"./ConnectorModal.ed8f28c3.js";const G="_title_47znq_2",J="_titlePlaceholder_47znq_5",Q="_tabStyle_47znq_10",B={title:G,titlePlaceholder:J,tabStyle:Q};var X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};const Y=X;var z=function(n,h){return e(U,{...x(x({},n),{},{ref:h,icon:Y})})};z.displayName="MailOutlined";const Z=b.exports.forwardRef(z),ee="_tableNotInUseWrapper_1fl2d_2",te="_icon_1fl2d_10",ae="_tableNameHeader_1fl2d_18",ne="_tableNameInUseWrapper_1fl2d_21",le="_tableNameEmailInUse_1fl2d_40",se="_tableWrapper_1fl2d_44",oe="_unused_1fl2d_57",re="_headerWidth_1fl2d_60",ce="_tableItemWidth_1fl2d_64",r={tableNotInUseWrapper:ee,icon:te,tableNameHeader:ae,tableNameInUseWrapper:ne,tableNameEmailInUse:le,tableWrapper:se,unused:oe,headerWidth:re,tableItemWidth:ce},ue=({data:p=[]})=>{const n=M(),[h,u]=b.exports.useState(!1),[l,f]=b.exports.useState(""),[C,D]=b.exports.useState(""),E=p.filter(t=>t.types===d),F=p.filter(t=>t.types===N),I=E.some(t=>!!t.enabled),A=F.some(t=>!!t.enabled),s=E.find(t=>!!t.enabled),o=F.find(t=>!!t.enabled),a=[{title:"\u8FDE\u63A5\u5668\u540D\u79F0",dataIndex:"name",render:(t,_)=>{const v=c("div",{className:r.tableNotInUseWrapper,children:[e("div",{className:r.icon,children:_.types===N?e(Z,{}):e(H,{})}),e("span",{className:r.tableNameHeader,children:t}),e(O,{size:"small",onClick:R(_.types),children:"\u914D\u7F6E"})]});return e("div",{children:_.types===d?I?c("div",{className:r.tableNameInUseWrapper,children:[e("div",{className:r.icon,children:e(y,{src:s==null?void 0:s.logo,alt:""})}),c("div",{children:[e("h2",{children:s==null?void 0:s.name}),e("h3",{children:s==null?void 0:s.id})]})]}):v:A?c("div",{className:r.tableNameEmailInUse,children:[e(y,{src:o==null?void 0:o.logo,alt:""}),c("div",{children:[e("h2",{children:o==null?void 0:o.name}),e("h3",{children:o==null?void 0:o.id})]})]}):v})}},{title:"\u7C7B\u578B",dataIndex:"name"},{title:"\u767B\u5F55\u4F53\u9A8C",dataIndex:"experience",render:t=>t?e(W,{color:"#1BDD8A",text:"\u4F7F\u7528\u4E2D"}):e("span",{className:r.unused,children:e(W,{color:"#AFB0B4",text:"\u672A\u4F7F\u7528"})})}],m=[{key:d,name:"\u77ED\u4FE1\u8FDE\u63A5\u5668",types:d,experience:I},{key:N,name:"\u90AE\u4EF6\u94FE\u63A5\u5668",types:N,experience:A}],R=t=>()=>{D(t),u(!0)},V=()=>{u(!1),n(`/auth/connectDetails/${l}`)},L=()=>{u(!1)},P=t=>{t.enabled||(l!==t.id?f(t.id):f(""))},j=t=>()=>{const _=t.types===d?s:o;if(!_)return!1;n(`/auth/connectDetails/${_.id}`)};return c($,{children:[e("div",{className:r.tableWrapper,children:e(w,{onHeaderRow:()=>({className:r.headerWidth}),onRow:t=>({className:r.tableItemWidth,onClick:j(t)}),pagination:!1,columns:a,dataSource:m,rowClassName:"cursor-pointer"})}),e(T,{title:C===d?"\u8BBE\u7F6E\u77ED\u4FE1\u8FDE\u63A5\u5668":"\u8BBE\u7F6E\u90AE\u4EF6\u8FDE\u63A5\u5668",handleModelOk:V,isModalVisible:h,handleModelCancel:L,data:C===d?E:F,onItemClickHandle:P,currentSelectedId:l})]})},ie="_socialContactConnectorWrapper_c4uut_2",de="_addSocialButton_c4uut_5",pe="_tableWrapper_c4uut_20",me="_tableNameHeader_c4uut_33",he="_unused_c4uut_36",be="_icon_c4uut_39",_e="_headerWidth_c4uut_47",fe="_tableItemWidth_c4uut_51",i={socialContactConnectorWrapper:ie,addSocialButton:de,"table-header-name":"_table-header-name_c4uut_13",tableWrapper:pe,tableNameHeader:me,unused:he,icon:be,headerWidth:_e,tableItemWidth:fe},Ee=({data:p=[]})=>{const n=M(),[h,u]=b.exports.useState(!1),[l,f]=b.exports.useState(""),C=a=>{switch(a){case"Native":return e(H,{});case"Web":return e(q,{});default:return null}},D=[{title:"\u8FDE\u63A5\u5668\u540D\u79F0",dataIndex:"name",render:(a,m)=>c("div",{className:i["table-header-name"],children:[e("div",{className:i.icon,children:e(y,{src:m==null?void 0:m.logo,alt:"",preview:!1})}),e("span",{className:i.tableNameHeader,children:a}),e("span",{children:C(m==null?void 0:m.platform)})]})},{title:"\u7C7B\u578B",dataIndex:"type",render:()=>e("span",{children:"\u793E\u4EA4\u8FDE\u63A5\u5668"})},{title:"\u767B\u5F55\u4F53\u9A8C",dataIndex:"experience",render:a=>a?e(W,{color:"#1BDD8A",text:"\u4F7F\u7528\u4E2D"}):e("span",{className:i.unused,children:e(W,{color:"#AFB0B4",text:"\u672A\u4F7F\u7528"})})}],E=p.filter(a=>!!a.enabled).map(a=>({key:a.id,name:a.name,type:a.types,experience:a.enabled,logo:a.logo,platform:a.platform})),F=()=>{u(!0)},I=()=>{u(!1)},A=a=>{a.enabled||(l!==a.id?f(a.id):f(""))},s=()=>{u(!1),n(`/auth/connectDetails/${l}`)},o=a=>()=>{n(`/auth/connectDetails/${a.key}`)};return c("div",{className:i.socialContactConnectorWrapper,children:[e(O,{className:i.addSocialButton,onClick:F,children:"\u6DFB\u52A0\u793E\u4EA4\u8FDE\u63A5\u5668"}),e("div",{className:i.tableWrapper,children:e(w,{onHeaderRow:()=>({className:i.headerWidth}),onRow:a=>({className:i.tableItemWidth,onClick:o(a)}),pagination:!1,columns:D,dataSource:E,rowClassName:"cursor-pointer"})}),e(T,{title:"\u6DFB\u52A0\u793E\u4EA4\u8FDE\u63A5\u5668",handleModelOk:s,isModalVisible:h,handleModelCancel:I,data:p,onItemClickHandle:A,currentSelectedId:l})]})},{TabPane:g}=k,Fe=()=>{const p=K(),{data:n}=p,h=n&&n.filter(l=>l.types===d||l.types===N),u=n&&n.filter(l=>l.types===S);return b.exports.useEffect(()=>{},[n]),c($,{children:[e("span",{className:B.title,children:"\u8FDE\u63A5\u5668"}),e("span",{className:B.titlePlaceholder,children:"\u8BBE\u7F6E\u8FDE\u63A5\u5668\uFF0C\u5F00\u542F\u65E0\u5BC6\u7801\u548C\u793E\u4EA4\u767B\u5F55"}),e("div",{className:B.tabStyle,children:c(k,{defaultActiveKey:"messageAndEmail",children:[e(g,{tab:"\u77ED\u4FE1\u548C\u90AE\u4EF6\u8FDE\u63A5\u5668",children:e(ue,{data:h})},d),e(g,{tab:"\u793E\u4EA4\u8FDE\u63A5\u5668",children:e(Ee,{data:u})},S)]})})]})},Oe=Fe;export{Oe as C};