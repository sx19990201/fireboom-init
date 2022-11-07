import{r as R,a as K,c as L,e as N,g as $,p as H,t as de,i as J,f as j,l as Q,q as ce,s as se,v as le,y as I,j as X,x as pe}from"./index.bb86fbbf.js";import{p as fe}from"./pickAttrs.38f17648.js";import{o as ue}from"./omit.fd69d8d2.js";var ve=R.exports.createContext(null),he=function(t){for(var s=t.prefixCls,e=t.level,o=t.isStart,i=t.isEnd,f="".concat(s,"-indent-unit"),r=[],n=0;n<e;n+=1){var d;r.push(K("span",{className:L(f,(d={},N(d,"".concat(f,"-start"),o[n]),N(d,"".concat(f,"-end"),i[n]),d))},n))}return K("span",{"aria-hidden":"true",className:"".concat(s,"-indent"),children:r})};const ge=R.exports.memo(he);var ye=["children"];function W(a,t){return a!=null?a:t}function V(a){var t=a||{},s=t.title,e=t._title,o=t.key,i=t.children,f=s||"title";return{title:f,_title:e||[f],key:o||"key",children:i||"children"}}function Te(a){function t(s){var e=de(s);return e.map(function(o){if(!be(o))return H(!o,"Tree/TreeNode can only accept TreeNode as children."),null;var i=o.key,f=o.props,r=f.children,n=J(f,ye),d=$({key:i},n),c=t(r);return c.length&&(d.children=c),d}).filter(function(o){return o})}return t(a)}function Le(a,t,s){var e=V(s),o=e._title,i=e.key,f=e.children,r=new Set(t===!0?[]:t),n=[];function d(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return c.map(function(p,u){for(var v=ee(l?l.pos:"0",u),h=W(p[i],v),g,k=0;k<o.length;k+=1){var y=o[k];if(p[y]!==void 0){g=p[y];break}}var x=$($({},ue(p,[].concat(j(o),[i,f]))),{},{title:g,key:h,parent:l,pos:v,children:null,data:p,isStart:[].concat(j(l?l.isStart:[]),[u===0]),isEnd:[].concat(j(l?l.isEnd:[]),[u===c.length-1])});return n.push(x),t===!0||r.has(h)?x.children=d(p[f]||[],x):x.children=[],x})}return d(a),n}function ke(a,t,s){var e={};Q(s)==="object"?e=s:e={externalGetKey:s},e=e||{};var o=e,i=o.childrenPropName,f=o.externalGetKey,r=o.fieldNames,n=V(r),d=n.key,c=n.children,l=i||c,p;f?typeof f=="string"?p=function(h){return h[f]}:typeof f=="function"&&(p=function(h){return f(h)}):p=function(h,g){return W(h[d],g)};function u(v,h,g,k){var y=v?v[l]:a,x=v?ee(g.pos,h):"0",D=v?[].concat(j(k),[v]):[];if(v){var C=p(v,x),S={node:v,index:h,pos:x,key:C,parentPos:g.node?g.pos:null,level:g.level+1,nodes:D};t(S)}y&&y.forEach(function(E,O){u(E,O,{node:v,pos:x,level:g?g.level+1:-1},D)})}u(null)}function _e(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.initWrapper,e=t.processEntity,o=t.onProcessFinished,i=t.externalGetKey,f=t.childrenPropName,r=t.fieldNames,n=arguments.length>2?arguments[2]:void 0,d=i||n,c={},l={},p={posEntities:c,keyEntities:l};return s&&(p=s(p)||p),ke(a,function(u){var v=u.node,h=u.index,g=u.pos,k=u.key,y=u.parentPos,x=u.level,D=u.nodes,C={node:v,nodes:D,index:h,key:k,pos:g,level:x},S=W(k,g);c[g]=C,l[S]=C,C.parent=c[y],C.parent&&(C.parent.children=C.parent.children||[],C.parent.children.push(C)),e&&e(C,p)},{externalGetKey:d,childrenPropName:f,fieldNames:r}),o&&o(p),p}function $e(a,t){var s=t.expandedKeys,e=t.selectedKeys,o=t.loadedKeys,i=t.loadingKeys,f=t.checkedKeys,r=t.halfCheckedKeys,n=t.dragOverNodeKey,d=t.dropPosition,c=t.keyEntities,l=c[a],p={eventKey:a,expanded:s.indexOf(a)!==-1,selected:e.indexOf(a)!==-1,loaded:o.indexOf(a)!==-1,loading:i.indexOf(a)!==-1,checked:f.indexOf(a)!==-1,halfChecked:r.indexOf(a)!==-1,pos:String(l?l.pos:""),dragOver:n===a&&d===0,dragOverGapTop:n===a&&d===-1,dragOverGapBottom:n===a&&d===1};return p}function P(a){var t=a.data,s=a.expanded,e=a.selected,o=a.checked,i=a.loaded,f=a.loading,r=a.halfChecked,n=a.dragOver,d=a.dragOverGapTop,c=a.dragOverGapBottom,l=a.pos,p=a.active,u=a.eventKey,v=$($({},t),{},{expanded:s,selected:e,checked:o,loaded:i,loading:f,halfChecked:r,dragOver:n,dragOverGapTop:d,dragOverGapBottom:c,pos:l,active:p,key:u});return"props"in v||Object.defineProperty(v,"props",{get:function(){return H(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),a}}),v}var xe=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],Y="open",q="close",Ce="---",Ne=function(a){ce(s,a);var t=se(s);function s(){var e;le(this,s);for(var o=arguments.length,i=new Array(o),f=0;f<o;f++)i[f]=arguments[f];return e=t.call.apply(t,[this].concat(i)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(r){var n=e.props.context.onNodeClick;n(r,P(e.props)),e.isSelectable()?e.onSelect(r):e.onCheck(r)},e.onSelectorDoubleClick=function(r){var n=e.props.context.onNodeDoubleClick;n(r,P(e.props))},e.onSelect=function(r){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;r.preventDefault(),n(r,P(e.props))}},e.onCheck=function(r){if(!e.isDisabled()){var n=e.props,d=n.disableCheckbox,c=n.checked,l=e.props.context.onNodeCheck;if(!(!e.isCheckable()||d)){r.preventDefault();var p=!c;l(r,P(e.props),p)}}},e.onMouseEnter=function(r){var n=e.props.context.onNodeMouseEnter;n(r,P(e.props))},e.onMouseLeave=function(r){var n=e.props.context.onNodeMouseLeave;n(r,P(e.props))},e.onContextMenu=function(r){var n=e.props.context.onNodeContextMenu;n(r,P(e.props))},e.onDragStart=function(r){var n=e.props.context.onNodeDragStart;r.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(r,I(e));try{r.dataTransfer.setData("text/plain","")}catch{}},e.onDragEnter=function(r){var n=e.props.context.onNodeDragEnter;r.preventDefault(),r.stopPropagation(),n(r,I(e))},e.onDragOver=function(r){var n=e.props.context.onNodeDragOver;r.preventDefault(),r.stopPropagation(),n(r,I(e))},e.onDragLeave=function(r){var n=e.props.context.onNodeDragLeave;r.stopPropagation(),n(r,I(e))},e.onDragEnd=function(r){var n=e.props.context.onNodeDragEnd;r.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(r,I(e))},e.onDrop=function(r){var n=e.props.context.onNodeDrop;r.preventDefault(),r.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(r,I(e))},e.onExpand=function(r){var n=e.props,d=n.loading,c=n.context.onNodeExpand;d||c(r,P(e.props))},e.setSelectHandle=function(r){e.selectHandle=r},e.getNodeState=function(){var r=e.props.expanded;return e.isLeaf()?null:r?Y:q},e.hasChildren=function(){var r=e.props.eventKey,n=e.props.context.keyEntities,d=n[r]||{},c=d.children;return!!(c||[]).length},e.isLeaf=function(){var r=e.props,n=r.isLeaf,d=r.loaded,c=e.props.context.loadData,l=e.hasChildren();return n===!1?!1:n||!c&&!l||c&&d&&!l},e.isDisabled=function(){var r=e.props.disabled,n=e.props.context.disabled;return!!(n||r)},e.isCheckable=function(){var r=e.props.checkable,n=e.props.context.checkable;return!n||r===!1?!1:n},e.syncLoadData=function(r){var n=r.expanded,d=r.loading,c=r.loaded,l=e.props.context,p=l.loadData,u=l.onNodeLoad;d||p&&n&&!e.isLeaf()&&!e.hasChildren()&&!c&&u(P(e.props))},e.isDraggable=function(){var r=e.props,n=r.data,d=r.context.draggable;return!!(d&&(!d.nodeDraggable||d.nodeDraggable(n)))},e.renderDragHandler=function(){var r=e.props.context,n=r.draggable,d=r.prefixCls;return n!=null&&n.icon?K("span",{className:"".concat(d,"-draggable-icon"),children:n.icon}):null},e.renderSwitcherIconDom=function(r){var n=e.props.switcherIcon,d=e.props.context.switcherIcon,c=n||d;return typeof c=="function"?c($($({},e.props),{},{isLeaf:r})):c},e.renderSwitcher=function(){var r=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var d=e.renderSwitcherIconDom(!0);return d!==!1?K("span",{className:L("".concat(n,"-switcher"),"".concat(n,"-switcher-noop")),children:d}):null}var c=L("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(r?Y:q)),l=e.renderSwitcherIconDom(!1);return l!==!1?K("span",{onClick:e.onExpand,className:c,children:l}):null},e.renderCheckbox=function(){var r=e.props,n=r.checked,d=r.halfChecked,c=r.disableCheckbox,l=e.props.context.prefixCls,p=e.isDisabled(),u=e.isCheckable();if(!u)return null;var v=typeof u!="boolean"?u:null;return K("span",{className:L("".concat(l,"-checkbox"),n&&"".concat(l,"-checkbox-checked"),!n&&d&&"".concat(l,"-checkbox-indeterminate"),(p||c)&&"".concat(l,"-checkbox-disabled")),onClick:e.onCheck,children:v})},e.renderIcon=function(){var r=e.props.loading,n=e.props.context.prefixCls;return K("span",{className:L("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),r&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var r=e.state.dragNodeHighlight,n=e.props,d=n.title,c=n.selected,l=n.icon,p=n.loading,u=n.data,v=e.props.context,h=v.prefixCls,g=v.showIcon,k=v.icon,y=v.loadData,x=v.titleRender,D=e.isDisabled(),C="".concat(h,"-node-content-wrapper"),S;if(g){var E=l||k;S=E?K("span",{className:L("".concat(h,"-iconEle"),"".concat(h,"-icon__customize")),children:typeof E=="function"?E(e.props):E}):e.renderIcon()}else y&&p&&(S=e.renderIcon());var O;typeof d=="function"?O=d(u):x?O=x(u):O=d;var b=K("span",{className:"".concat(h,"-title"),children:O});return X("span",{ref:e.setSelectHandle,title:typeof d=="string"?d:"",className:L("".concat(C),"".concat(C,"-").concat(e.getNodeState()||"normal"),!D&&(c||r)&&"".concat(h,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick,children:[S,b,e.renderDropIndicator()]})},e.renderDropIndicator=function(){var r=e.props,n=r.disabled,d=r.eventKey,c=e.props.context,l=c.draggable,p=c.dropLevelOffset,u=c.dropPosition,v=c.prefixCls,h=c.indent,g=c.dropIndicatorRender,k=c.dragOverNodeKey,y=c.direction,x=l!==!1,D=!n&&x&&k===d;return D?g({dropPosition:u,dropLevelOffset:p,indent:h,prefixCls:v,direction:y}):null},e}return pe(s,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var o=this.props.selectable,i=this.props.context.selectable;return typeof o=="boolean"?o:i}},{key:"render",value:function(){var o,i=this.props,f=i.eventKey,r=i.className,n=i.style,d=i.dragOver,c=i.dragOverGapTop,l=i.dragOverGapBottom,p=i.isLeaf,u=i.isStart,v=i.isEnd,h=i.expanded,g=i.selected,k=i.checked,y=i.halfChecked,x=i.loading,D=i.domRef,C=i.active;i.data;var S=i.onMouseMove,E=i.selectable,O=J(i,xe),b=this.props.context,m=b.prefixCls,G=b.filterTreeNode,w=b.keyEntities,T=b.dropContainerKey,_=b.dropTargetKey,B=b.draggingNodeKey,A=this.isDisabled(),ne=fe(O,{aria:!0,data:!0}),ae=w[f]||{},te=ae.level,oe=v[v.length-1],M=this.isDraggable(),F=!A&&M,U=B===f,ie=E!==void 0?{"aria-selected":!!E}:void 0;return X("div",{ref:D,className:L(r,"".concat(m,"-treenode"),(o={},N(o,"".concat(m,"-treenode-disabled"),A),N(o,"".concat(m,"-treenode-switcher-").concat(h?"open":"close"),!p),N(o,"".concat(m,"-treenode-checkbox-checked"),k),N(o,"".concat(m,"-treenode-checkbox-indeterminate"),y),N(o,"".concat(m,"-treenode-selected"),g),N(o,"".concat(m,"-treenode-loading"),x),N(o,"".concat(m,"-treenode-active"),C),N(o,"".concat(m,"-treenode-leaf-last"),oe),N(o,"".concat(m,"-treenode-draggable"),F),N(o,"dragging",U),N(o,"drop-target",_===f),N(o,"drop-container",T===f),N(o,"drag-over",!A&&d),N(o,"drag-over-gap-top",!A&&c),N(o,"drag-over-gap-bottom",!A&&l),N(o,"filter-node",G&&G(P(this.props))),o)),style:n,draggable:F,"aria-grabbed":U,onDragStart:F?this.onDragStart:void 0,onDragEnter:M?this.onDragEnter:void 0,onDragOver:M?this.onDragOver:void 0,onDragLeave:M?this.onDragLeave:void 0,onDrop:M?this.onDrop:void 0,onDragEnd:M?this.onDragEnd:void 0,onMouseMove:S,...ie,...ne,children:[K(ge,{prefixCls:m,level:te,isStart:u,isEnd:v}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector()]})}}]),s}(R.exports.Component),z=function(t){return K(ve.Consumer,{children:function(s){return K(Ne,{...t,context:s})}})};z.displayName="TreeNode";z.defaultProps={title:Ce};z.isTreeNode=1;function Me(a,t){if(!a)return[];var s=a.slice(),e=s.indexOf(t);return e>=0&&s.splice(e,1),s}function Ie(a,t){var s=(a||[]).slice();return s.indexOf(t)===-1&&s.push(t),s}function Z(a){return a.split("-")}function ee(a,t){return"".concat(a,"-").concat(t)}function be(a){return a&&a.type&&a.type.isTreeNode}function Ge(a,t){var s=[],e=t[a];function o(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];i.forEach(function(f){var r=f.key,n=f.children;s.push(r),o(n)})}return o(e.children),s}function me(a){if(a.parent){var t=Z(a.pos);return Number(t[t.length-1])===a.parent.children.length-1}return!1}function De(a){var t=Z(a.pos);return Number(t[t.length-1])===0}function Ae(a,t,s,e,o,i,f,r,n,d){var c,l=a.clientX,p=a.clientY,u=a.target.getBoundingClientRect(),v=u.top,h=u.height,g=(d==="rtl"?-1:1)*(((o==null?void 0:o.x)||0)-l),k=(g-12)/e,y=r[s.props.eventKey];if(p<v+h/2){var x=f.findIndex(function(B){return B.key===y.key}),D=x<=0?0:x-1,C=f[D].key;y=r[C]}var S=y.key,E=y,O=y.key,b=0,m=0;if(!n.includes(S))for(var G=0;G<k&&me(y);G+=1)y=y.parent,m+=1;var w=t.props.data,T=y.node,_=!0;return De(y)&&y.level===0&&p<v+h/2&&i({dragNode:w,dropNode:T,dropPosition:-1})&&y.key===s.props.eventKey?b=-1:(E.children||[]).length&&n.includes(O)?i({dragNode:w,dropNode:T,dropPosition:0})?b=0:_=!1:m===0?k>-1.5?i({dragNode:w,dropNode:T,dropPosition:1})?b=1:_=!1:i({dragNode:w,dropNode:T,dropPosition:0})?b=0:i({dragNode:w,dropNode:T,dropPosition:1})?b=1:_=!1:i({dragNode:w,dropNode:T,dropPosition:1})?b=1:_=!1,{dropPosition:b,dropLevelOffset:m,dropTargetKey:y.key,dropTargetPos:y.pos,dragOverNodeKey:O,dropContainerKey:b===0?null:((c=y.parent)===null||c===void 0?void 0:c.key)||null,dropAllowed:_}}function je(a,t){if(!!a){var s=t.multiple;return s?a.slice():a.length?[a[0]]:a}}function He(a){if(!a)return null;var t;if(Array.isArray(a))t={checkedKeys:a,halfCheckedKeys:void 0};else if(Q(a)==="object")t={checkedKeys:a.checked||void 0,halfCheckedKeys:a.halfChecked||void 0};else return H(!1,"`checkedKeys` is not an array or an object"),null;return t}function Be(a,t){var s=new Set;function e(o){if(!s.has(o)){var i=t[o];if(!!i){s.add(o);var f=i.parent,r=i.node;r.disabled||f&&e(f.key)}}}return(a||[]).forEach(function(o){e(o)}),j(s)}function re(a,t){var s=new Set;return a.forEach(function(e){t.has(e)||s.add(e)}),s}function Ke(a){var t=a||{},s=t.disabled,e=t.disableCheckbox,o=t.checkable;return!!(s||e)||o===!1}function Se(a,t,s,e){for(var o=new Set(a),i=new Set,f=0;f<=s;f+=1){var r=t.get(f)||new Set;r.forEach(function(l){var p=l.key,u=l.node,v=l.children,h=v===void 0?[]:v;o.has(p)&&!e(u)&&h.filter(function(g){return!e(g.node)}).forEach(function(g){o.add(g.key)})})}for(var n=new Set,d=s;d>=0;d-=1){var c=t.get(d)||new Set;c.forEach(function(l){var p=l.parent,u=l.node;if(!(e(u)||!l.parent||n.has(l.parent.key))){if(e(l.parent.node)){n.add(p.key);return}var v=!0,h=!1;(p.children||[]).filter(function(g){return!e(g.node)}).forEach(function(g){var k=g.key,y=o.has(k);v&&!y&&(v=!1),!h&&(y||i.has(k))&&(h=!0)}),v&&o.add(p.key),h&&i.add(p.key),n.add(p.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(re(i,o))}}function Ee(a,t,s,e,o){for(var i=new Set(a),f=new Set(t),r=0;r<=e;r+=1){var n=s.get(r)||new Set;n.forEach(function(p){var u=p.key,v=p.node,h=p.children,g=h===void 0?[]:h;!i.has(u)&&!f.has(u)&&!o(v)&&g.filter(function(k){return!o(k.node)}).forEach(function(k){i.delete(k.key)})})}f=new Set;for(var d=new Set,c=e;c>=0;c-=1){var l=s.get(c)||new Set;l.forEach(function(p){var u=p.parent,v=p.node;if(!(o(v)||!p.parent||d.has(p.parent.key))){if(o(p.parent.node)){d.add(u.key);return}var h=!0,g=!1;(u.children||[]).filter(function(k){return!o(k.node)}).forEach(function(k){var y=k.key,x=i.has(y);h&&!x&&(h=!1),!g&&(x||f.has(y))&&(g=!0)}),h||i.delete(u.key),g&&f.add(u.key),d.add(u.key)}})}return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(re(f,i))}}function Fe(a,t,s,e){var o=[],i;e?i=e:i=Ke;var f=new Set(a.filter(function(c){var l=!!s[c];return l||o.push(c),l})),r=new Map,n=0;Object.keys(s).forEach(function(c){var l=s[c],p=l.level,u=r.get(p);u||(u=new Set,r.set(p,u)),u.add(l),n=Math.max(n,p)}),H(!o.length,"Tree missing follow keys: ".concat(o.slice(0,100).map(function(c){return"'".concat(c,"'")}).join(", ")));var d;return t===!0?d=Se(f,r,n,i):d=Ee(f,t.halfCheckedKeys,r,n,i),d}export{z as C,ve as T,Fe as a,Me as b,_e as c,Ie as d,W as e,V as f,$e as g,Ge as h,P as i,Ae as j,Le as k,Te as l,Be as m,je as n,He as o,Z as p};