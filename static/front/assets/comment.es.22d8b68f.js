import{a as G}from"./codemirror.es.f74c380b.js";import"./index.5bf4d2ac.js";import"./index.bb86fbbf.js";import"./index.4a2fd767.js";import"./Dropdown.6fe64b76.js";import"./index.61964446.js";import"./Portal.a4c68d61.js";import"./type.4482a080.js";import"./Overflow.7a0e3cac.js";import"./statusUtils.077f8a48.js";import"./context.24d2ae58.js";import"./_baseIsEqual.08bd8828.js";import"./omit.fd69d8d2.js";import"./PlusOutlined.c73517e2.js";import"./styleChecker.d685456c.js";import"./button.aa0bb50b.js";import"./index.11df8be1.js";import"./isSymbol.5f361b44.js";import"./index.9ea41163.js";import"./source.c7b92d0a.js";import"./parser.416ca819.js";import"./printer.6dfbd086.js";import"./Helmet.0418c866.js";import"./index.10921ee9.js";import"./index.ef4e31c1.js";import"./identity.bf2ac13f.js";import"./index.2f0a4123.js";import"./row.b57345b2.js";import"./responsiveObserve.57a0a6d3.js";import"./index.4f67b986.js";import"./iconUtil.02bc4596.js";import"./pickAttrs.38f17648.js";import"./SearchOutlined.7a88f9ff.js";import"./index.445b6a21.js";import"./workbenchContext.3d2abc29.js";import"./parameter.aff251c0.js";import"./utils.c9742588.js";import"./PortalWrapper.eb4c9ec4.js";import"./index.6d8ed736.js";import"./state-local.735e622b.js";import"./index.4c04c22e.js";import"./dayjs.min.bdeb7890.js";import"./DoubleRightOutlined.3d4f0e16.js";import"./getDefaultCode.40c4b411.js";import"./Breadcrumb.9423f423.js";import"./index.c0722274.js";import"./RightOutlined.93d63f13.js";import"./Sider.d20f3d2a.js";import"./index.837f2673.js";import"./EyeOutlined.7a3a19f7.js";import"./index.cf3f625b.js";import"./main.6fe01a4a.js";var H=Object.defineProperty,M=(O,A)=>H(O,"name",{value:A,configurable:!0});function q(O,A){return A.forEach(function(g){g&&typeof g!="string"&&!Array.isArray(g)&&Object.keys(g).forEach(function(h){if(h!=="default"&&!(h in O)){var u=Object.getOwnPropertyDescriptor(g,h);Object.defineProperty(O,h,u.get?u:{enumerable:!0,get:function(){return g[h]}})}})}),Object.freeze(Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}))}M(q,"_mergeNamespaces");var w={exports:{}};(function(O,A){(function(g){g(G.exports)})(function(g){var h={},u=/[^\s\u00a0]/,c=g.Pos,F=g.cmpPos;function N(n){var r=n.search(u);return r==-1?0:r}M(N,"firstNonWS"),g.commands.toggleComment=function(n){n.toggleComment()},g.defineExtension("toggleComment",function(n){n||(n=h);for(var r=this,t=1/0,e=this.listSelections(),f=null,m=e.length-1;m>=0;m--){var i=e[m].from(),a=e[m].to();i.line>=t||(a.line>=t&&(a=c(t,0)),t=i.line,f==null?r.uncomment(i,a,n)?f="un":(r.lineComment(i,a,n),f="line"):f=="un"?r.uncomment(i,a,n):r.lineComment(i,a,n))}});function $(n,r,t){return/\bstring\b/.test(n.getTokenTypeAt(c(r.line,0)))&&!/^[\'\"\`]/.test(t)}M($,"probablyInsideString");function j(n,r){var t=n.getMode();return t.useInnerComments===!1||!t.innerMode?t:n.getModeAt(r)}M(j,"getMode"),g.defineExtension("lineComment",function(n,r,t){t||(t=h);var e=this,f=j(e,n),m=e.getLine(n.line);if(!(m==null||$(e,n,m))){var i=t.lineComment||f.lineComment;if(!i){(t.blockCommentStart||f.blockCommentStart)&&(t.fullLines=!0,e.blockComment(n,r,t));return}var a=Math.min(r.ch!=0||r.line==n.line?r.line+1:r.line,e.lastLine()+1),L=t.padding==null?" ":t.padding,o=t.commentBlankLines||n.line==r.line;e.operation(function(){if(t.indent){for(var s=null,l=n.line;l<a;++l){var p=e.getLine(l),v=p.slice(0,N(p));(s==null||s.length>v.length)&&(s=v)}for(var l=n.line;l<a;++l){var p=e.getLine(l),d=s.length;!o&&!u.test(p)||(p.slice(0,d)!=s&&(d=N(p)),e.replaceRange(s+i+L,c(l,0),c(l,d)))}}else for(var l=n.line;l<a;++l)(o||u.test(e.getLine(l)))&&e.replaceRange(i+L,c(l,0))})}}),g.defineExtension("blockComment",function(n,r,t){t||(t=h);var e=this,f=j(e,n),m=t.blockCommentStart||f.blockCommentStart,i=t.blockCommentEnd||f.blockCommentEnd;if(!m||!i){(t.lineComment||f.lineComment)&&t.fullLines!=!1&&e.lineComment(n,r,t);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(c(n.line,0)))){var a=Math.min(r.line,e.lastLine());a!=n.line&&r.ch==0&&u.test(e.getLine(a))&&--a;var L=t.padding==null?" ":t.padding;n.line>a||e.operation(function(){if(t.fullLines!=!1){var o=u.test(e.getLine(a));e.replaceRange(L+i,c(a)),e.replaceRange(m+L,c(n.line,0));var s=t.blockCommentLead||f.blockCommentLead;if(s!=null)for(var l=n.line+1;l<=a;++l)(l!=a||o)&&e.replaceRange(s+L,c(l,0))}else{var p=F(e.getCursor("to"),r)==0,v=!e.somethingSelected();e.replaceRange(i,r),p&&e.setSelection(v?r:e.getCursor("from"),r),e.replaceRange(m,n)}})}}),g.defineExtension("uncomment",function(n,r,t){t||(t=h);var e=this,f=j(e,n),m=Math.min(r.ch!=0||r.line==n.line?r.line:r.line-1,e.lastLine()),i=Math.min(n.line,m),a=t.lineComment||f.lineComment,L=[],o=t.padding==null?" ":t.padding,s;e:{if(!a)break e;for(var l=i;l<=m;++l){var p=e.getLine(l),v=p.indexOf(a);if(v>-1&&!/comment/.test(e.getTokenTypeAt(c(l,v+1)))&&(v=-1),v==-1&&u.test(p)||v>-1&&u.test(p.slice(0,v)))break e;L.push(p)}if(e.operation(function(){for(var b=i;b<=m;++b){var k=L[b-i],x=k.indexOf(a),C=x+a.length;x<0||(k.slice(C,C+o.length)==o&&(C+=o.length),s=!0,e.replaceRange("",c(b,x),c(b,C)))}}),s)return!0}var d=t.blockCommentStart||f.blockCommentStart,S=t.blockCommentEnd||f.blockCommentEnd;if(!d||!S)return!1;var W=t.blockCommentLead||f.blockCommentLead,E=e.getLine(i),_=E.indexOf(d);if(_==-1)return!1;var I=m==i?E:e.getLine(m),y=I.indexOf(S,m==i?_+d.length:0),z=c(i,_+1),B=c(m,y+1);if(y==-1||!/comment/.test(e.getTokenTypeAt(z))||!/comment/.test(e.getTokenTypeAt(B))||e.getRange(z,B,`
`).indexOf(S)>-1)return!1;var R=E.lastIndexOf(d,n.ch),T=R==-1?-1:E.slice(0,n.ch).indexOf(S,R+d.length);if(R!=-1&&T!=-1&&T+S.length!=n.ch)return!1;T=I.indexOf(S,r.ch);var D=I.slice(r.ch).lastIndexOf(d,T-r.ch);return R=T==-1||D==-1?-1:r.ch+D,T!=-1&&R!=-1&&R!=r.ch?!1:(e.operation(function(){e.replaceRange("",c(m,y-(o&&I.slice(y-o.length,y)==o?o.length:0)),c(m,y+S.length));var b=_+d.length;if(o&&E.slice(b,b+o.length)==o&&(b+=o.length),e.replaceRange("",c(i,_),c(i,b)),W)for(var k=i+1;k<=m;++k){var x=e.getLine(k),C=x.indexOf(W);if(!(C==-1||u.test(x.slice(0,C)))){var P=C+W.length;o&&x.slice(P,P+o.length)==o&&(P+=o.length),e.replaceRange("",c(k,C),c(k,P))}}}),!0)})})})();var J=w.exports,He=q({__proto__:null,default:J},[w.exports]);export{He as c};
