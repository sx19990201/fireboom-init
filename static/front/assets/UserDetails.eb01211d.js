import{r as B,aw as $,b as j,n as N,a as e,j as t,a9 as g}from"./index.bb86fbbf.js";import{B as m}from"./button.aa0bb50b.js";import{R as d,C as s}from"./row.b57345b2.js";import{D as S}from"./index.7a7dbb1b.js";import"./index.d80e831a.js";import{F as l}from"./index.2f0a4123.js";import"./index.61964446.js";import{I as u}from"./index.837f2673.js";import{M as O}from"./index.bb824a09.js";import"./iconUtil.02bc4596.js";import{T as v}from"./Table.134cf6cf.js";import"./index.9ea41163.js";import"./Pagination.4574862b.js";import"./index.11df8be1.js";import"./Tree.4ceb5bc3.js";import{T as y}from"./index.4a2fd767.js";import{S as o}from"./index.4c04c22e.js";import{l as R}from"./Editor.6c4f1911.js";import{E as K}from"./index.db465a01.js";import{i as p}from"./use-immer.module.c8467ba8.js";import{I as M}from"./index.34a54fb6.js";import{s as n}from"./subs.module.7d96a7ba.js";R.config({paths:{vs:"/modules/monaco-editor/min/vs"}});const{TabPane:C}=y,{Option:P}=o;function oe(){const[F]=l.useForm(),[E,h]=p(!1),[f,I]=p([]),[r,b]=B.exports.useState(),[D,A]=p(!1),{id:c}=$(),k=j(),w=a=>{g.put(`/oauth/${c}`,{...a})};if(B.exports.useEffect(()=>{N(`/oauth/role/${c}`).then(a=>I(a)),N(`/oauth/${c}`).then(a=>{a.birthday="",b(a)})},[c,D]),!r)return e("div",{});const x=[{title:"\u89D2\u8272",dataIndex:"code",key:"code"},{title:"\u89D2\u8272\u63CF\u8FF0",dataIndex:"remark",key:"remark"},{title:"\u64CD\u4F5C",key:4,render:(a,{id:i})=>e("span",{className:"pl-0 text-red-500 cursor-pointer",onClick:()=>void T(i),children:"\u64A4\u9500\u89D2\u8272"})}],T=a=>{g.post(`/oauth/role/${a}`).then(()=>A(!D))};function V(a,i){b({...i,...r})}return t(y,{defaultActiveKey:"1",children:[t(C,{tab:"\u7528\u6237\u4FE1\u606F",children:[e("div",{className:n["user-info"],children:"\u4E2A\u4EBA\u4FE1\u606F"}),t(l,{name:"basic",labelCol:{span:6},wrapperCol:{span:20},initialValues:r,onFinish:a=>void w(a),autoComplete:"off",labelAlign:"left",className:n["form-style"],onValuesChange:V,children:[t(d,{children:[e(s,{span:8,children:e(l.Item,{label:"\u7528\u6237\u540D",name:"userName",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u6635\u79F0",name:"nickName",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u59D3\u540D",name:"realname",initialValue:r==null?void 0:r.realname,children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})})]}),t(d,{children:[e(s,{span:8,children:e(l.Item,{label:"\u6027\u522B",name:"gender",children:t(o,{placeholder:"\u8BF7\u8F93\u5165",children:[e(o.Option,{value:"\u7537",children:"\u7537"}),e(o.Option,{value:"\u5973",children:"\u5973"})]})})}),e(s,{span:8,children:e(l.Item,{label:"\u751F\u65E5",name:"birthday",children:e(S,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u624B\u673A\u53F7",name:"mobile",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})})]}),t(d,{children:[e(s,{span:8,children:e(l.Item,{label:"\u90AE\u7BB1",name:"email",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u90AE\u653F\u7F16\u7801",name:"postCode",initialValue:r==null?void 0:r.postalCode,children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u539F\u7CFB\u7EDFID",name:"originID",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})})]}),e(d,{children:e(s,{span:24,style:{textAlign:"center"},children:t(l.Item,{wrapperCol:{span:24},children:[e(m,{className:`${n["connect-check-btn-common"]} w-15 ml-4`,children:e("span",{className:"text-sm text-gray",onClick:()=>k(-1),children:"\u8FD4\u56DE"})}),e(m,{className:`${n["save-btn"]} ml-4`,htmlType:"submit",children:"\u4FDD\u5B58"})]})})})]}),t("div",{className:`${n["mid-word"]} flex justify-between items-center`,children:[e("span",{children:"\u539F\u59CBjson\u6570\u636E"}),t("div",{className:n["right-word"],children:[e(M,{type:"icon-fuzhi",className:"text-[10px] text-[#E92E5E]"}),e("span",{children:"\u590D\u5236"})]})]}),e(K,{height:"90vh",defaultLanguage:"json",defaultValue:"",value:JSON.stringify(r,null,2),className:`mt-4 ${n.monaco}`})]},"1"),t(C,{tab:"\u89D2\u8272\u6743\u9650",children:[t("div",{className:"flex justify-between items-center mb-4",children:[e("span",{className:"text-base text-[#AFB0B4FF]",children:"\u7528\u6237\u89D2\u8272"}),e(m,{className:"px-4 py-0 h-7.5",onClick:()=>{h(!0)},children:e("span",{className:"text-sm text-gray",children:"\u6DFB\u52A0"})})]}),e(O,{mask:!1,title:"\u7528\u6237\u89D2\u8272",width:549,style:{top:"300px"},transitionName:"",open:E,onOk:()=>h(!1),onCancel:()=>h(!1),okText:e(m,{className:n["save-btn"],onClick:()=>F.submit(),children:e("span",{children:"\u786E\u5B9A"})}),okType:"text",cancelText:"\u53D6\u6D88",children:e(l,{name:"roleList",form:F,labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:a=>{},autoComplete:"off",labelAlign:"left",className:"h-30 mt-8 ml-8",children:e(l.Item,{label:"\u9009\u62E9\u89D2\u8272",name:"code",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4F60\u7684\u89D2\u8272"}],children:e(o,{children:t(P,{value:"1",children:[e("span",{className:"mr-2 text-lg ",children:"user"}),e("span",{className:"text-[#AFB0B4] text-xs ",children:"\u666E\u901A\u7528\u6237"})]})})})})}),e("div",{className:n["role-container-table"],children:f.length>0?e(v,{columns:x,dataSource:f,rowKey:a=>a.id,rowClassName:(a,i)=>i%2===1?n["role-table"]:"",pagination:!1}):e(v,{columns:x,dataSource:[],rowKey:a=>a.id,rowClassName:(a,i)=>i%2===1?n["role-table"]:"",pagination:!1})})]},"2")]})}export{oe as A};