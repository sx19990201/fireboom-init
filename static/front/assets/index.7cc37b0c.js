import{r as x,a as t,A as We,g as ke,n as Se,a9 as be,j as p,aa as Fe,_ as T,c as le,e as U,N as De,H as Ke,q as Ce,s as xe,v as we,x as Ie,F as ne,l as Ue,f as ie,E as ze,b as Ve,a3 as He}from"./index.bb86fbbf.js";import{R as je}from"./index.682dcb84.js";import{O as qe,M as Ge,u as Je}from"./OneToOneOutlined.eddb799a.js";import{u as Qe}from"./index.esm.ac9005b0.js";import{B as re,i as Xe}from"./button.aa0bb50b.js";import{F}from"./index.2f0a4123.js";import"./row.b57345b2.js";import"./index.61964446.js";import{I as ae}from"./index.837f2673.js";import{E as Ye}from"./404.4247b5cd.js";import{I as pe}from"./index.da25c8fe.js";import{D as Ze,d as et}from"./iconUtil.02bc4596.js";import{T as Re}from"./index.4a2fd767.js";import{S as se}from"./index.4c04c22e.js";import{C as te}from"./index.9ea41163.js";import{S as Oe}from"./index.445b6a21.js";import{_ as tt,a as nt}from"./_createAggregator.0faee691.js";import{S as rt,E as it,a as at}from"./constant.83f5fa12.js";import{P as lt}from"./Pagination.4574862b.js";import{F as st}from"./context.24d2ae58.js";import{g as ot,a as ct}from"./statusUtils.077f8a48.js";import{o as ut}from"./omit.fd69d8d2.js";import{D as dt,M as Ae}from"./index.c0722274.js";import{t as ht}from"./type.4482a080.js";import{D as mt}from"./DeleteOutlined.71bf1760.js";import{K as Be}from"./Portal.a4c68d61.js";import{S as pt}from"./SearchOutlined.7a88f9ff.js";import{R as _e,L as Ne}from"./RightOutlined.93d63f13.js";import{P as ft}from"./PlusCircleOutlined.5451847d.js";import{E as vt}from"./50x.88c69611.js";var gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};const yt=gt;var Pe=function(c,m){return t(We,{...ke(ke({},c),{},{ref:m,icon:yt})})};Pe.displayName="MinusCircleOutlined";const St=x.exports.forwardRef(Pe),bt=()=>Qe("/auth/loginConfig",Se),Ft=l=>be.post("/auth/loginConfig",l),Ct=({data:l})=>{const[c,m]=x.exports.useState(l),[u]=F.useForm();x.exports.useEffect(()=>{m(l)},[l]);function e(i){be.post("/auth/brand",{branding:{logoUrl:i==null?void 0:i.logo,slogan:i==null?void 0:i.slogan},color:{isDarkModeEnabled:i==null?void 0:i.darkMode,primaryColor:i==null?void 0:i.color}}).then(()=>Fe.success("\u4FDD\u5B58\u6210\u529F"))}return c?t("div",{className:"w-1/2 pr-6",children:p(F,{form:u,name:"basic",initialValues:c,onFinish:e,children:[t("div",{className:"text-xs text-[#AFB0B4] mb-4.5",children:"\u989C\u8272"}),p("div",{className:"text-sm mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u54C1\u724C\u989C\u8272"]}),t(F.Item,{name:"color",children:t(ae,{})}),t("div",{className:"text-xs text-[#AFB0B4] mb-4.5 mt-8",children:"\u54C1\u724C\u8BA2\u5236\u533A"}),p("div",{className:"text-sm mt-4 mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," logo\u56FE\u7247URL"]}),t(F.Item,{name:"logo",children:t(ae,{})}),p("div",{className:"text-sm mt-4 mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u6807\u8BED"]}),t(F.Item,{name:"slogan",children:t(ae,{})}),t(re,{className:"float-right mt-10",type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})]})}):t(Ye,{})},xt="_experiencePreviewWrapper_1kt09_2",wt="_experiencePreviewTitle_1kt09_8",It="_experiencePreviewTitleLeft_1kt09_12",Lt="_experiencePreviewTitleRight_1kt09_21",kt="_experiencePreviewDetailContent_1kt09_27",At="_tabStyle_1kt09_32",Z={experiencePreviewWrapper:xt,experiencePreviewTitle:wt,experiencePreviewTitleLeft:It,experiencePreviewTitleRight:Lt,experiencePreviewDetailContent:kt,tabStyle:At},{Option:he}=se,{TabPane:ge}=Re,Bt=()=>p("div",{className:Z.experiencePreviewWrapper,children:[p("div",{className:Z.experiencePreviewTitle,children:[p("div",{className:Z.experiencePreviewTitleLeft,children:[t("span",{children:"//"}),t("span",{children:"\u767B\u5F55\u9884\u89C8"})]}),p("div",{className:Z.experiencePreviewTitleRight,children:[p(se,{defaultValue:"\u82F1\u6587",style:{width:120},children:[t(he,{value:"\u82F1\u6587",children:"\u82F1\u6587"}),t(he,{value:"\u4E2D\u6587",children:"\u4E2D\u6587"})]}),p(se,{defaultValue:"\u6D45\u8272",style:{width:120},children:[t(he,{value:"\u6D45\u8272",children:"\u6D45\u8272"}),t(he,{value:"\u6DF1\u8272",children:"\u6DF1\u8272"})]})]})]}),t("div",{className:Z.experiencePreviewDetailContent,children:p(Re,{tabPosition:"top",animated:!1,className:Z.tabStyle,centered:!0,type:"card",defaultActiveKey:"\u684C\u9762\u7F51\u9875",children:[t(ge,{tab:"\u684C\u9762\u7F51\u9875",children:t(pe,{width:"100%",height:"100%",src:"/assets/experience-preview.png",alt:"FireBoom",preview:!1})},"\u684C\u9762\u7F51\u9875"),t(ge,{tab:"\u79FB\u52A8\u7F51\u9875",children:t(pe,{width:"100%",height:"100%",src:"/assets/mobile-preview.png",alt:"FireBoom",preview:!1})},"\u79FB\u52A8\u7F51\u9875"),t(ge,{tab:"\u79FB\u52A8\u539F\u751F",children:t(pe,{width:"100%",height:"100%",src:"/assets/mobile-preview.png",alt:"FireBoom",preview:!1})},"\u79FB\u52A8\u539F\u751F")]})})]});var _t=nt,Nt=tt,Et=Object.prototype,Tt=Et.hasOwnProperty,Dt=Nt(function(l,c,m){Tt.call(l,m)?l[m].push(c):_t(l,m,[c])}),Kt=Dt;const Rt="_experienceSettingWrapper_a7bwn_2",Ot="_title_a7bwn_8",Pt="_mainLogin_a7bwn_17",Mt="_mainLoginTitle_a7bwn_22",$t="_otherLogin_a7bwn_34",Wt="_otherLoginTitle_a7bwn_39",Ut="_otherLoginExplain_a7bwn_51",zt="_passwordLogin_a7bwn_67",Vt="_checkboxLabel_a7bwn_73",Ht="_loginItemWrapper_a7bwn_76",jt="_passwordLoginSubHeading_a7bwn_79",qt="_loginItemSubHeading_a7bwn_83",Gt="_mainLoginHint_a7bwn_99",Jt="_saveWrapper_a7bwn_105",Qt="_save_a7bwn_105",C={experienceSettingWrapper:Rt,title:Ot,mainLogin:Pt,mainLoginTitle:Mt,otherLogin:$t,otherLoginTitle:Wt,otherLoginExplain:Ut,passwordLogin:zt,checkboxLabel:Vt,loginItemWrapper:Ht,passwordLoginSubHeading:jt,loginItemSubHeading:qt,mainLoginHint:Gt,saveWrapper:Jt,save:Qt};var Xt=globalThis&&globalThis.__rest||function(l,c){var m={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&c.indexOf(u)<0&&(m[u]=l[u]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,u=Object.getOwnPropertySymbols(l);e<u.length;e++)c.indexOf(u[e])<0&&Object.prototype.propertyIsEnumerable.call(l,u[e])&&(m[u[e]]=l[u[e]]);return m},Yt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Zt=x.exports.forwardRef(function(l,c){var m=function(r){var d=r.keyCode;d===Be.ENTER&&r.preventDefault()},u=function(r){var d=r.keyCode,h=l.onClick;d===Be.ENTER&&h&&h()},e=l.style,i=l.noStyle,o=l.disabled,n=Xt(l,["style","noStyle","disabled"]),s={};return i||(s=T({},Yt)),o&&(s.pointerEvents="none"),s=T(T({},s),e),t("div",{role:"button",tabIndex:0,ref:c,...n,onKeyDown:m,onKeyUp:u,style:s})});const en=Zt;var tn=function(c){var m,u=c.renderedText,e=c.renderedEl,i=c.item,o=c.checked,n=c.disabled,s=c.prefixCls,a=c.onClick,r=c.onRemove,d=c.showRemove,h=le((m={},U(m,"".concat(s,"-content-item"),!0),U(m,"".concat(s,"-content-item-disabled"),n||i.disabled),U(m,"".concat(s,"-content-item-checked"),o),m)),f;return(typeof u=="string"||typeof u=="number")&&(f=String(u)),t(De,{componentName:"Transfer",defaultLocale:Ke.Transfer,children:function(g){var S={className:h,title:f},w=t("span",{className:"".concat(s,"-content-item-text"),children:e});return d?p("li",{...S,children:[w,t(en,{disabled:n||i.disabled,className:"".concat(s,"-content-item-remove"),"aria-label":g.remove,onClick:function(){r==null||r(i)},children:t(mt,{})})]}):(S.onClick=n||i.disabled?void 0:function(){return a(i)},p("li",{...S,children:[t(te,{className:"".concat(s,"-checkbox"),checked:o,disabled:n||i.disabled}),w]}))}})};const nn=x.exports.memo(tn);var rn=ht("handleFilter","handleClear","checkedKeys");function ye(l){if(!l)return null;var c={pageSize:10,simple:!0,showSizeChanger:!1,showLessItems:!1};return Ue(l)==="object"?T(T({},c),l):c}var an=function(l){Ce(m,l);var c=xe(m);function m(){var u;return we(this,m),u=c.apply(this,arguments),u.state={current:1},u.onItemSelect=function(e){var i=u.props,o=i.onItemSelect,n=i.selectedKeys,s=n.indexOf(e.key)>=0;o(e.key,!s)},u.onItemRemove=function(e){var i=u.props.onItemRemove;i==null||i([e.key])},u.onPageChange=function(e){u.setState({current:e})},u.getItems=function(){var e=u.state.current,i=u.props,o=i.pagination,n=i.filteredRenderItems,s=ye(o),a=n;return s&&(a=n.slice((e-1)*s.pageSize,e*s.pageSize)),a},u}return Ie(m,[{key:"render",value:function(){var e=this,i=this.state.current,o=this.props,n=o.prefixCls,s=o.onScroll,a=o.filteredRenderItems,r=o.selectedKeys,d=o.disabled,h=o.showRemove,f=o.pagination,g=ye(f),S=null;return g&&(S=t(lt,{simple:g.simple,showSizeChanger:g.showSizeChanger,showLessItems:g.showLessItems,size:"small",disabled:d,className:"".concat(n,"-pagination"),total:a.length,pageSize:g.pageSize,current:i,onChange:this.onPageChange})),p(ne,{children:[t("ul",{className:le("".concat(n,"-content"),U({},"".concat(n,"-content-show-remove"),h)),onScroll:s,children:this.getItems().map(function(w){var B=w.renderedEl,y=w.renderedText,k=w.item,b=k.disabled,A=r.indexOf(k.key)>=0;return t(nn,{disabled:d||b,item:k,renderedText:y,renderedEl:B,checked:A,prefixCls:n,onClick:e.onItemSelect,onRemove:e.onItemRemove,showRemove:h},k.key)})}),S]})}}],[{key:"getDerivedStateFromProps",value:function(e,i){var o=e.filteredRenderItems,n=e.pagination,s=i.current,a=ye(n);if(a){var r=Math.ceil(o.length/a.pageSize);if(s>r)return{current:r}}return null}}]),m}(x.exports.Component);const ln=an;function Me(l){var c=l.placeholder,m=c===void 0?"":c,u=l.value,e=l.prefixCls,i=l.disabled,o=l.onChange,n=l.handleClear,s=x.exports.useCallback(function(a){o==null||o(a),a.target.value===""&&(n==null||n())},[o]);return t(ae,{placeholder:m,className:e,value:u,onChange:s,disabled:i,allowClear:!0,prefix:t(pt,{})})}var sn=function(){return null};function on(l){return!!(l&&!Xe(l)&&Object.prototype.toString.call(l)==="[object Object]")}function ee(l){return l.filter(function(c){return!c.disabled}).map(function(c){return c.key})}var fe=function(l){Ce(m,l);var c=xe(m);function m(u){var e;return we(this,m),e=c.call(this,u),e.defaultListBodyRef=x.exports.createRef(),e.handleFilter=function(i){var o=e.props.handleFilter,n=i.target.value;e.setState({filterValue:n}),o(i)},e.handleClear=function(){var i=e.props.handleClear;e.setState({filterValue:""}),i()},e.matchFilter=function(i,o){var n=e.state.filterValue,s=e.props.filterOption;return s?s(n,o):i.indexOf(n)>=0},e.renderListBody=function(i,o){var n=i?i(o):null,s=!!n;return s||(n=t(ln,{ref:e.defaultListBodyRef,...o})),{customize:s,bodyContent:n}},e.renderItem=function(i){var o=e.props.render,n=o===void 0?sn:o,s=n(i),a=on(s);return{renderedText:a?s.value:s,renderedEl:a?s.label:s,item:i}},e.getSelectAllLabel=function(i,o){var n=e.props,s=n.itemsUnit,a=n.itemUnit,r=n.selectAllLabel;if(r)return typeof r=="function"?r({selectedCount:i,totalCount:o}):r;var d=o>1?s:a;return p(ne,{children:[(i>0?"".concat(i,"/"):"")+o," ",d]})},e.state={filterValue:""},e}return Ie(m,[{key:"componentWillUnmount",value:function(){clearTimeout(this.triggerScrollTimer)}},{key:"getCheckStatus",value:function(e){var i=this.props.checkedKeys;return i.length===0?"none":e.every(function(o){return i.indexOf(o.key)>=0||!!o.disabled})?"all":"part"}},{key:"getFilteredItems",value:function(e,i){var o=this,n=[],s=[];return e.forEach(function(a){var r=o.renderItem(a),d=r.renderedText;if(i&&!o.matchFilter(d,a))return null;n.push(a),s.push(r)}),{filteredItems:n,filteredRenderItems:s}}},{key:"getListBody",value:function(e,i,o,n,s,a,r,d,h,f){var g=this,S=h?t("div",{className:"".concat(e,"-body-search-wrapper"),children:t(Me,{prefixCls:"".concat(e,"-search"),onChange:this.handleFilter,handleClear:this.handleClear,placeholder:i,value:o,disabled:f})}):null,w=this.renderListBody(d,T(T({},ut(this.props,rn)),{filteredItems:n,filteredRenderItems:a,selectedKeys:r})),B=w.bodyContent,y=w.customize,k=function(){var N=g.props.direction==="left"?0:1;return Array.isArray(s)?s[N]:s},b;return y?b=t("div",{className:"".concat(e,"-body-customize-wrapper"),children:B}):b=n.length?B:t("div",{className:"".concat(e,"-body-not-found"),children:k()}),p("div",{className:le(h?"".concat(e,"-body ").concat(e,"-body-with-search"):"".concat(e,"-body")),children:[S,b]})}},{key:"getCheckBox",value:function(e){var i=e.filteredItems,o=e.onItemSelectAll,n=e.disabled,s=e.prefixCls,a=this.getCheckStatus(i),r=a==="all",d=t(te,{disabled:n,checked:r,indeterminate:a==="part",className:"".concat(s,"-checkbox"),onChange:function(){o(i.filter(function(f){return!f.disabled}).map(function(f){var g=f.key;return g}),!r)}});return d}},{key:"render",value:function(){var e,i=this,o=this.state.filterValue,n=this.props,s=n.prefixCls,a=n.dataSource,r=n.titleText,d=n.checkedKeys,h=n.disabled,f=n.footer,g=n.showSearch,S=n.style,w=n.searchPlaceholder,B=n.notFoundContent,y=n.selectAll,k=n.selectCurrent,b=n.selectInvert,A=n.removeAll,N=n.removeCurrent,D=n.renderList,_=n.onItemSelectAll,E=n.onItemRemove,J=n.showSelectAll,K=J===void 0?!0:J,Q=n.showRemove,R=n.pagination,j=n.direction,O=f&&(f.length<2?f(this.props):f(this.props,{direction:j})),q=le(s,(e={},U(e,"".concat(s,"-with-pagination"),!!R),U(e,"".concat(s,"-with-footer"),!!O),e)),z=this.getFilteredItems(a,o),P=z.filteredItems,v=z.filteredRenderItems,I=this.getListBody(s,w,o,P,B,v,d,D,g,h),M=O?t("div",{className:"".concat(s,"-footer"),children:O}):null,X=!Q&&!R&&this.getCheckBox({filteredItems:P,onItemSelectAll:_,disabled:h,prefixCls:s}),V=null;if(Q){var Y=[R?{key:"removeCurrent",onClick:function(){var L,W=ee((((L=i.defaultListBodyRef.current)===null||L===void 0?void 0:L.getItems())||[]).map(function(G){return G.item}));E==null||E(W)},label:N}:null,{key:"removeAll",onClick:function(){E==null||E(ee(P))},label:A}].filter(function($){return $});V=t(Ae,{items:Y})}else{var ve=[{key:"selectAll",onClick:function(){var L=ee(P);_(L,L.length!==d.length)},label:y},R?{key:"selectCurrent",onClick:function(){var L,W=((L=i.defaultListBodyRef.current)===null||L===void 0?void 0:L.getItems())||[];_(ee(W.map(function(G){return G.item})),!0)},label:k}:null,{key:"selectInvert",onClick:function(){var L,W;R?W=ee((((L=i.defaultListBodyRef.current)===null||L===void 0?void 0:L.getItems())||[]).map(function(H){return H.item})):W=ee(P);var G=new Set(d),ue=[],de=[];W.forEach(function(H){G.has(H)?de.push(H):ue.push(H)}),_(ue,!0),_(de,!1)},label:b}];V=t(Ae,{items:ve})}var ce=t(dt,{className:"".concat(s,"-header-dropdown"),overlay:V,disabled:h,children:t(Ze,{})});return p("div",{className:q,style:S,children:[p("div",{className:"".concat(s,"-header"),children:[K?p(ne,{children:[X,ce]}):null,t("span",{className:"".concat(s,"-header-selected"),children:this.getSelectAllLabel(d.length,P.length)}),t("span",{className:"".concat(s,"-header-title"),children:r})]}),I,M]})}}]),m}(x.exports.PureComponent);fe.defaultProps={dataSource:[],titleText:"",showSearch:!1};var cn=function(c){var m=c.disabled,u=c.moveToLeft,e=c.moveToRight,i=c.leftArrowText,o=i===void 0?"":i,n=c.rightArrowText,s=n===void 0?"":n,a=c.leftActive,r=c.rightActive,d=c.className,h=c.style,f=c.direction,g=c.oneWay;return p("div",{className:d,style:h,children:[t(re,{type:"primary",size:"small",disabled:m||!r,onClick:e,icon:f!=="rtl"?t(_e,{}):t(Ne,{}),children:s}),!g&&t(re,{type:"primary",size:"small",disabled:m||!a,onClick:u,icon:f!=="rtl"?t(Ne,{}):t(_e,{}),children:o})]})};const $e=cn;var oe=function(l){Ce(m,l);var c=xe(m);function m(u){var e;we(this,m),e=c.call(this,u),e.separatedDataSource=null,e.setStateKeys=function(a,r){a==="left"?e.setState(function(d){var h=d.sourceSelectedKeys;return{sourceSelectedKeys:typeof r=="function"?r(h||[]):r}}):e.setState(function(d){var h=d.targetSelectedKeys;return{targetSelectedKeys:typeof r=="function"?r(h||[]):r}})},e.getLocale=function(a,r){return T(T(T({},a),{notFoundContent:r("Transfer")}),e.props.locale)},e.moveTo=function(a){var r=e.props,d=r.targetKeys,h=d===void 0?[]:d,f=r.dataSource,g=f===void 0?[]:f,S=r.onChange,w=e.state,B=w.sourceSelectedKeys,y=w.targetSelectedKeys,k=a==="right"?B:y,b=k.filter(function(D){return!g.some(function(_){return!!(D===_.key&&_.disabled)})}),A=a==="right"?b.concat(h):h.filter(function(D){return b.indexOf(D)===-1}),N=a==="right"?"left":"right";e.setStateKeys(N,[]),e.handleSelectChange(N,[]),S==null||S(A,a,b)},e.moveToLeft=function(){return e.moveTo("left")},e.moveToRight=function(){return e.moveTo("right")},e.onItemSelectAll=function(a,r,d){e.setStateKeys(a,function(h){var f=[];return d?f=Array.from(new Set([].concat(ie(h),ie(r)))):f=h.filter(function(g){return r.indexOf(g)===-1}),e.handleSelectChange(a,f),f})},e.onLeftItemSelectAll=function(a,r){return e.onItemSelectAll("left",a,r)},e.onRightItemSelectAll=function(a,r){return e.onItemSelectAll("right",a,r)},e.handleFilter=function(a,r){var d=e.props.onSearch,h=r.target.value;d==null||d(a,h)},e.handleLeftFilter=function(a){return e.handleFilter("left",a)},e.handleRightFilter=function(a){return e.handleFilter("right",a)},e.handleClear=function(a){var r=e.props.onSearch;r==null||r(a,"")},e.handleLeftClear=function(){return e.handleClear("left")},e.handleRightClear=function(){return e.handleClear("right")},e.onItemSelect=function(a,r,d){var h=e.state,f=h.sourceSelectedKeys,g=h.targetSelectedKeys,S=a==="left"?ie(f):ie(g),w=S.indexOf(r);w>-1&&S.splice(w,1),d&&S.push(r),e.handleSelectChange(a,S),e.props.selectedKeys||e.setStateKeys(a,S)},e.onLeftItemSelect=function(a,r){return e.onItemSelect("left",a,r)},e.onRightItemSelect=function(a,r){return e.onItemSelect("right",a,r)},e.onRightItemRemove=function(a){var r=e.props,d=r.targetKeys,h=d===void 0?[]:d,f=r.onChange;e.setStateKeys("right",[]),f==null||f(h.filter(function(g){return!a.includes(g)}),"left",ie(a))},e.handleScroll=function(a,r){var d=e.props.onScroll;d==null||d(a,r)},e.handleLeftScroll=function(a){return e.handleScroll("left",a)},e.handleRightScroll=function(a){return e.handleScroll("right",a)},e.handleListStyle=function(a,r){return typeof a=="function"?a({direction:r}):a},e.renderTransfer=function(a){return t(ze,{children:function(r){var d=r.getPrefixCls,h=r.renderEmpty,f=r.direction;return t(st.Consumer,{children:function(g){var S,w=g.hasFeedback,B=g.status,y=e.props,k=y.prefixCls,b=y.className,A=y.disabled,N=y.operations,D=N===void 0?[]:N,_=y.showSearch,E=y.footer,J=y.style,K=y.listStyle,Q=y.operationStyle,R=y.filterOption,j=y.render,O=y.children,q=y.showSelectAll,z=y.oneWay,P=y.pagination,v=y.status,I=d("transfer",k),M=e.getLocale(a,h||et),X=e.state,V=X.sourceSelectedKeys,Y=X.targetSelectedKeys,ve=ct(B,v),ce=!O&&P,$=e.separateDataSource(),L=$.leftDataSource,W=$.rightDataSource,G=Y.length>0,ue=V.length>0,de=le(I,(S={},U(S,"".concat(I,"-disabled"),A),U(S,"".concat(I,"-customize-list"),!!O),U(S,"".concat(I,"-rtl"),f==="rtl"),S),ot(I,ve,w),b),H=e.getTitles(M),Le=e.props.selectAllLabels||[];return p("div",{className:de,style:J,children:[t(fe,{prefixCls:"".concat(I,"-list"),titleText:H[0],dataSource:L,filterOption:R,style:e.handleListStyle(K,"left"),checkedKeys:V,handleFilter:e.handleLeftFilter,handleClear:e.handleLeftClear,onItemSelect:e.onLeftItemSelect,onItemSelectAll:e.onLeftItemSelectAll,render:j,showSearch:_,renderList:O,footer:E,onScroll:e.handleLeftScroll,disabled:A,direction:f==="rtl"?"right":"left",showSelectAll:q,selectAllLabel:Le[0],pagination:ce,...M}),t($e,{className:"".concat(I,"-operation"),rightActive:ue,rightArrowText:D[0],moveToRight:e.moveToRight,leftActive:G,leftArrowText:D[1],moveToLeft:e.moveToLeft,style:Q,disabled:A,direction:f,oneWay:z}),t(fe,{prefixCls:"".concat(I,"-list"),titleText:H[1],dataSource:W,filterOption:R,style:e.handleListStyle(K,"right"),checkedKeys:Y,handleFilter:e.handleRightFilter,handleClear:e.handleRightClear,onItemSelect:e.onRightItemSelect,onItemSelectAll:e.onRightItemSelectAll,onItemRemove:e.onRightItemRemove,render:j,showSearch:_,renderList:O,footer:E,onScroll:e.handleRightScroll,disabled:A,direction:f==="rtl"?"left":"right",showSelectAll:q,selectAllLabel:Le[1],showRemove:z,pagination:ce,...M})]})}})}})};var i=u.selectedKeys,o=i===void 0?[]:i,n=u.targetKeys,s=n===void 0?[]:n;return e.state={sourceSelectedKeys:o.filter(function(a){return s.indexOf(a)===-1}),targetSelectedKeys:o.filter(function(a){return s.indexOf(a)>-1})},e}return Ie(m,[{key:"getTitles",value:function(e){var i;return(i=this.props.titles)!==null&&i!==void 0?i:e.titles}},{key:"handleSelectChange",value:function(e,i){var o=this.state,n=o.sourceSelectedKeys,s=o.targetSelectedKeys,a=this.props.onSelectChange;!a||(e==="left"?a(i,s):a(n,i))}},{key:"separateDataSource",value:function(){var e=this.props,i=e.dataSource,o=e.rowKey,n=e.targetKeys,s=n===void 0?[]:n,a=[],r=new Array(s.length);return i.forEach(function(d){o&&(d=T(T({},d),{key:o(d)}));var h=s.indexOf(d.key);h!==-1?r[h]=d:a.push(d)}),{leftDataSource:a,rightDataSource:r}}},{key:"render",value:function(){return t(De,{componentName:"Transfer",defaultLocale:Ke.Transfer,children:this.renderTransfer})}}],[{key:"getDerivedStateFromProps",value:function(e){var i=e.selectedKeys,o=e.targetKeys;if(e.pagination,e.children,i){var n=o||[];return{sourceSelectedKeys:i.filter(function(s){return!n.includes(s)}),targetSelectedKeys:i.filter(function(s){return n.includes(s)})}}return null}}]),m}(x.exports.Component);oe.List=fe;oe.Operation=$e;oe.Search=Me;oe.defaultProps={dataSource:[],locale:{},showSearch:!1,listStyle:function(){}};const un=oe,dn="_transferWrapper_xm0g9_2",hn="_transferItem_xm0g9_8",Ee={transferWrapper:dn,transferItem:hn},Te=({data:l,selectedData:c,onChange:m})=>{const[u,e]=x.exports.useState(c),i=l.map(r=>({key:r.type,title:r.name,platform:r.platform,list:r.list,logo:r.logo}));x.exports.useEffect(()=>{e(c)},[c]);const[o]=x.exports.useState([]),n=(r,d)=>{if(r.length!==0){const h=[...u,...r];e(h),m(h)}else{const h=d[0],f=u.findIndex(S=>S===h),g=u;g.splice(f,1),e([...g]),m([...g])}},s=r=>{switch(r){case"Native":return t(Ge,{});case"Web":return t(qe,{});default:return null}},a=r=>{const d=u.find(f=>f===r.key);return{label:p("div",{className:Ee.transferItem,children:[p("div",{children:[t(pe,{className:"mr-2",height:14,src:r.logo,alt:""}),t("span",{className:"custom-item",children:r.title}),r.platform.map(f=>t("span",{children:s(f)},f))]}),t("span",{children:d?t(St,{}):t(ft,{})})]}),value:r.title}};return t("div",{className:Ee.transferWrapper,children:t(un,{selectAllLabels:[t("div",{style:{color:"#5F6269"},children:"\u793E\u4EA4\u8FDE\u63A5\u5668"},"1"),t("div",{style:{color:"#5F6269"},children:"\u5DF2\u6DFB\u52A0"},"2")],operationStyle:{display:"none"},listStyle:{border:"1px solid rgba(0,0,0,0.1)"},selectedKeys:o,showSelectAll:!1,dataSource:i,targetKeys:u,onSelectChange:n,render:a})})},{Option:me}=se,mn=({data:l,connectorsData:c=[]})=>{var R,j,O,q,z,P;const m=Ve(),u=l!=null&&l.signInMethods?Object.keys(l.signInMethods).find(v=>l.signInMethods[v]==="primary"):"username",e=Object.values(l).filter(v=>v==="disabled").length!==3,i=(R=l==null?void 0:l.signInMethods)==null?void 0:R.username,o=(j=l==null?void 0:l.signInMethods)==null?void 0:j.email,n=(O=l==null?void 0:l.signInMethods)==null?void 0:O.sms,s=(q=l==null?void 0:l.signInMethods)==null?void 0:q.social,a={mainLoginMethod:u,otherMethodAvailable:e,socialValue:l==null?void 0:l.socialSignInConnectorTargets,username:i&&i!=="disabled",email:o&&o!=="disabled",sms:n&&n!=="disabled",social:s&&s!=="disabled"},r=c.filter(v=>v.types===rt),d=c.filter(v=>v.types===it),h=c.filter(v=>v.types===at),f=Kt(h,v=>v.target),g=Object.keys(f).map(v=>{const I=f[v];return{type:v,name:I[0].name,platform:I.map(M=>M.platform),logo:I[0].logo,list:I}}),S=r.some(v=>v.enabled),w=d.some(v=>v.enabled),B=h.some(v=>v.enabled),[y]=F.useForm(),k=F.useWatch("otherMethodAvailable",y),b=F.useWatch("mainLoginMethod",y),A=F.useWatch("social",y),N=F.useWatch("email",y),D=F.useWatch("sms",y);x.exports.useEffect(()=>{A||N||D?y.setFieldValue("otherMethodAvailable",!0):y.setFieldValue("otherMethodAvailable",!1)},[]);const _=v=>{const I=b=="sms"?"primary":v.sms?"secondary":"disabled",M=b=="email"?"primary":v.email?"secondary":"disabled",X=b=="social"?"primary":v.social?"secondary":"disabled",V=b=="username"?"primary":v.username?"secondary":"disabled",Y={signInMode:"SignInAndRegister",socialSignInConnectorTargets:v.socialValue,signInMethods:{sms:I,email:M,social:X,username:V}};Ft(Y).then(()=>Fe.success("\u4FDD\u5B58\u6210\u529F"))},E=v=>{},J=()=>{m("/auth/connect")},K=v=>p("div",{className:C.loginItemSubHeading,children:[t(He,{}),p("span",{children:["\u4F60\u8FD8\u6CA1\u6709\u8BBE\u7F6E",v,"\u8FDE\u63A5\u5668\uFF0C\u4F60\u9700\u5B8C\u6210\u8BBE\u7F6E\u540E\u767B\u5F55\u4F53\u9A8C\u624D\u4F1A\u751F\u6548"]}),t(re,{onClick:J,children:"\u914D\u7F6E"})]}),Q=v=>{switch(v){case"email":return!w&&t("div",{className:C.mainLoginHint,children:K("\u90AE\u7BB1")});case"sms":return!S&&t("div",{className:C.mainLoginHint,children:K("SMS")});case"social":return!B&&t("div",{className:C.mainLoginHint,children:K("\u793E\u4EA4")});default:return null}};return t("div",{className:C.experienceSettingWrapper,children:p(F,{form:y,initialValues:a,onFinish:_,children:[p("div",{className:C.title,children:[t("h1",{children:"\u767B\u5F55\u4F53\u9A8C\u8BBE\u7F6E"}),t("h2",{children:"\u81EA\u5B9A\u4E49\u767B\u5F55\u754C\u9762\uFF0C\u5E76\u5B9E\u65F6\u9884\u89C8\u771F\u5B9E\u6548\u679C"})]}),p("div",{className:C.mainLogin,children:[p("div",{className:C.mainLoginTitle,children:[t("span",{children:"//"}),t("span",{children:"\u4E3B\u8981\u767B\u5F55\u65B9\u5F0F"})]}),t(F.Item,{style:{width:"100%"},name:"mainLoginMethod",children:p(se,{style:{width:"100%"},children:[t(me,{value:"username",children:"\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55"}),t(me,{value:"email",children:"\u90AE\u7BB1\u767B\u5F55"}),t(me,{value:"sms",children:"\u624B\u673A\u53F7\u767B\u5F55"}),t(me,{value:"social",children:"\u793E\u4EA4\u8D26\u53F7\u767B\u5F55"})]})}),Q(b)]}),b==="social"&&!k&&t(F.Item,{name:"socialValue",children:t(Te,{data:g,onChange:E,selectedData:(z=l==null?void 0:l.socialSignInConnectorTargets)!=null?z:[]})}),p("div",{className:C.otherLogin,children:[p("div",{className:C.otherLoginTitle,children:[t("span",{children:"//"}),t("span",{children:"\u542F\u7528\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})]}),p("div",{className:C.otherLoginExplain,children:[t("span",{children:"\u5F00\u542F\u540E\uFF0C\u9664\u4E86\u4E3B\u8981\u767B\u5F55\u65B9\u5F0F\uFF0C\u4F60\u7684app\u5C06\u4F1A\u652F\u6301\u66F4\u591A\u5176\u4ED6\u7684\u767B\u5F55\u65B9\u5F0F"}),t(F.Item,{name:"otherMethodAvailable",valuePropName:"checked",children:t(Oe,{size:"small"})})]})]}),k&&p(ne,{children:[t("div",{className:C.passwordLogin,children:t(F.Item,{name:"username",valuePropName:"checked",children:t(te,{disabled:b==="username",children:p("div",{className:C.checkboxLabel,children:[t("span",{children:"\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55"}),b==="username"&&t("div",{className:C.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})})}),p("div",{className:C.loginItemWrapper,children:[t(F.Item,{name:"email",valuePropName:"checked",children:t(te,{disabled:b==="email",children:p("div",{className:C.checkboxLabel,children:[t("span",{children:"\u90AE\u7BB1\u767B\u5F55"}),b==="email"&&t("div",{className:C.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})}),N&&b!=="email"&&!w&&K("\u90AE\u7BB1")]}),p("div",{className:C.loginItemWrapper,children:[t(F.Item,{name:"sms",valuePropName:"checked",children:t(te,{disabled:b==="sms",children:p("div",{className:C.checkboxLabel,children:[t("span",{children:"\u624B\u673A\u53F7\u767B\u5F55"}),b==="sms"&&t("div",{className:C.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})}),D&&b!=="sms"&&!S&&K("SMS")]}),p("div",{className:C.loginItemWrapper,children:[t(F.Item,{name:"social",valuePropName:"checked",children:t(te,{disabled:b==="social",children:p("div",{className:C.checkboxLabel,children:[t("span",{children:"\u793E\u4EA4\u8D26\u53F7\u767B\u5F55"}),b==="social"&&t("div",{className:C.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})}),A&&b!=="social"&&!B&&K("\u793E\u4EA4")]}),A&&t("div",{children:t(F.Item,{name:"socialValue",children:t(Te,{data:g,onChange:E,selectedData:(P=l==null?void 0:l.socialSignInConnectorTargets)!=null?P:[]})})})]}),t("div",{children:t(F.Item,{children:t("div",{className:C.saveWrapper,children:t(re,{className:C.save,type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})})})})]})})},pn=({data:l})=>{const[c,m]=x.exports.useState(l),[u]=F.useForm();x.exports.useEffect(()=>m(l),[l]);const e=x.exports.useMemo(()=>{var n;return(n=c==null?void 0:c.enabled)!=null?n:!0},[c]);function i(n){be.post("/auth/otherConfig",{enabled:n==null?void 0:n.enabled,contentUrl:n!=null&&n.enabled?n==null?void 0:n.contractUrl:""}).then(()=>Fe.success("\u66F4\u65B0\u6210\u529F"))}function o(n){var s;m(n?{enabled:n,contractUrl:(s=c==null?void 0:c.contractUrl)!=null?s:""}:{enabled:n,contractUrl:""})}return c?t("div",{className:"w-1/2 pr-6",children:p(F,{form:u,name:"basic",initialValues:c,onFinish:i,children:[t("div",{className:"text-xs text-[#AFB0B4] mb-4.5",children:"\u4F7F\u7528\u6761\u6B3E"}),p("div",{className:"text-sm mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u5F00\u542F\u4F7F\u7528\u6761\u6B3E"]}),p("div",{className:"flex justify-between items-center py-10px px-3 bg-[#F8F9FB]",children:[t("span",{className:"pr-8 text-sm text-[#5F6269]",children:"\u6DFB\u52A0\u4F7F\u7528\u4EA7\u54C1\u7684\u6CD5\u5F8B\u534F\u8BAE"}),t(F.Item,{className:"!mb-0",valuePropName:"checked",name:"enabled",children:t(Oe,{className:"ml-8",size:"small",onChange:o})})]}),p("div",{className:e?"visible":"invisible",children:[p("div",{className:"text-sm mt-4 mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u4F7F\u7528\u6761\u6B3E"]}),t(F.Item,{name:"contractUrl",children:t(ae,{})})]}),t(F.Item,{children:t(re,{className:"float-right mt-10",type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})})]})}):t(vt,{})},fn=[{title:"\u54C1\u724C",key:"0"},{title:"\u767B\u5F55\u65B9\u5F0F",key:"1"},{title:"\u5176\u4ED6",key:"2"}],vn=()=>{const l=bt(),c=Je(),{data:m}=l,{data:u}=c,[e,i]=x.exports.useState("0"),[o,n]=x.exports.useState(),[s,a]=x.exports.useState(),[r,d]=x.exports.useState(!1);return x.exports.useEffect(()=>{},[u]),x.exports.useEffect(()=>{Se("/auth/brand").then(h=>{n({darkMode:h.color.isDarkModeEnabled,color:h.color.primaryColor,logo:h.branding.logoUrl,slogan:h.branding.slogan})})},[r]),x.exports.useEffect(()=>{Se("/auth/otherConfig").then(h=>{a({enabled:h.enabled,contractUrl:h.contentUrl})})},[r]),p(ne,{children:[t(je,{tabs:fn,onTabClick:h=>{d(!r),i(h)},activeKey:e}),p("div",{className:"flex",children:[e==="0"?t(Ct,{data:o}):e==="1"?t(ne,{children:m&&t(mn,{data:m,connectorsData:u})}):t(pn,{data:s}),t(Bt,{})]})]})},qn=vn;export{qn as E};