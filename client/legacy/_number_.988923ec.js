import{_ as t,a as n,b as e,c as a,i as c,s as r,d as o,e as i,S as u,A as s,p as f,f as l,t as d,P as h,k as m,q as v,g as p,h as g,j as D,l as E,m as w,n as b,r as $,u as T,v as y,w as A,x as R,y as S,z as x,Q as L,O,B as _,o as M,C,D as H,E as B,F as k,G as I,H as N}from"./client.52fe5c76.js";import{c as P,_ as U,h as F,a as V,L as j}from"./createOctokit.43e01771.js";function G(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var o=n(this).constructor;c=Reflect.construct(r,arguments,o)}else c=r.apply(this,arguments);return e(this,c)}}function q(t,n,e){var a=t.slice();return a[9]=n[e],a}function z(t){var n,e,a,c,r,o=t[4].title+"",i=("closed"===t[4].state?t[4].metadata.start?s.i18n.incidentCompleted:s.i18n.incidentFixed:t[4].metadata.start?s.i18n.incidentScheduled:s.i18n.incidentOngoing)+"";return{c:function(){n=d(o),e=f(),a=l("span"),c=d(i),this.h()},l:function(t){n=D(t,o),e=v(t),a=p(t,"SPAN",{class:!0});var r=g(a);c=D(r,i),r.forEach(m),this.h()},h:function(){E(a,"class",r=O("tag ".concat(t[4].state))+" svelte-4o16l6")},m:function(t,r){w(t,n,r),w(t,e,r),w(t,a,r),b(a,c)},p:function(t,e){16&e&&o!==(o=t[4].title+"")&&_(n,o),16&e&&i!==(i=("closed"===t[4].state?t[4].metadata.start?s.i18n.incidentCompleted:s.i18n.incidentFixed:t[4].metadata.start?s.i18n.incidentScheduled:s.i18n.incidentOngoing)+"")&&_(c,i),16&e&&r!==(r=O("tag ".concat(t[4].state))+" svelte-4o16l6")&&E(a,"class",r)},d:function(t){t&&m(n),t&&m(e),t&&m(a)}}}function Q(t){var n,e=s.i18n.incidentDetails+"";return{c:function(){n=d(e)},l:function(t){n=D(t,e)},m:function(t,e){w(t,n,e)},p:M,d:function(t){t&&m(n)}}}function J(t){var n,e,a,c,r,o,i,u,h,$,T,y,A,R,S,x,L=s.i18n.incidentSubscribe+"",O=s.i18n.incidentViewOnGitHub+"";function _(t,n){return t[4].metadata.start?X:W}var B=_(t),k=B(t);function I(t,n){return t[4].metadata.start&&t[4].metadata.end?Z:t[4].closed_at?Y:void 0}for(var N=I(t),P=N&&N(t),U=t[3],F=[],V=0;V<U.length;V+=1)F[V]=tt(q(t,U,V));return{c:function(){n=l("div"),e=l("dl"),k.c(),a=C(),P&&P.c(),c=f(),r=l("div"),o=l("p"),i=l("a"),u=d(L),$=f(),T=l("p"),y=l("a"),A=d(O),S=f();for(var t=0;t<F.length;t+=1)F[t].c();x=C(),this.h()},l:function(t){n=p(t,"DIV",{class:!0});var s=g(n);e=p(s,"DL",{});var f=g(e);k.l(f),a=C(),P&&P.l(f),f.forEach(m),c=v(s),r=p(s,"DIV",{class:!0});var l=g(r);o=p(l,"P",{class:!0});var d=g(o);i=p(d,"A",{href:!0});var h=g(i);u=D(h,L),h.forEach(m),d.forEach(m),$=v(l),T=p(l,"P",{class:!0});var E=g(T);y=p(E,"A",{href:!0});var w=g(y);A=D(w,O),w.forEach(m),E.forEach(m),l.forEach(m),s.forEach(m),S=v(t);for(var b=0;b<F.length;b+=1)F[b].l(t);x=C(),this.h()},h:function(){E(i,"href",h="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(t[0])),E(o,"class","svelte-4o16l6"),E(y,"href",R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(t[0])),E(T,"class","svelte-4o16l6"),E(r,"class","r svelte-4o16l6"),E(n,"class","f")},m:function(t,s){w(t,n,s),b(n,e),k.m(e,null),b(e,a),P&&P.m(e,null),b(n,c),b(n,r),b(r,o),b(o,i),b(i,u),b(r,$),b(r,T),b(T,y),b(y,A),w(t,S,s);for(var f=0;f<F.length;f+=1)F[f].m(t,s);w(t,x,s)},p:function(t,n){if(B===(B=_(t))&&k?k.p(t,n):(k.d(1),(k=B(t))&&(k.c(),k.m(e,a))),N===(N=I(t))&&P?P.p(t,n):(P&&P.d(1),(P=N&&N(t))&&(P.c(),P.m(e,null))),1&n&&h!==(h="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(t[0]))&&E(i,"href",h),1&n&&R!==(R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(t[0]))&&E(y,"href",R),40&n){var c;for(U=t[3],c=0;c<U.length;c+=1){var r=q(t,U,c);F[c]?F[c].p(r,n):(F[c]=tt(r),F[c].c(),F[c].m(x.parentNode,x))}for(;c<F.length;c+=1)F[c].d(1);F.length=U.length}},i:M,o:M,d:function(t){t&&m(n),k.d(),P&&P.d(),t&&m(S),H(F,t),t&&m(x)}}}function K(t){var n,e;return n=new j({}),{c:function(){B(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,a){I(n,t,a),e=!0},p:M,i:function(t){e||(R(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){N(n,t)}}}function W(t){var n,e,a,c,r=s.i18n.incidentOpenedAt+"",o=new Date(t[4].created_at).toLocaleString()+"";return{c:function(){n=l("dt"),e=d(r),a=l("dd"),c=d(o)},l:function(t){n=p(t,"DT",{});var i=g(n);e=D(i,r),i.forEach(m),a=p(t,"DD",{});var u=g(a);c=D(u,o),u.forEach(m)},m:function(t,r){w(t,n,r),b(n,e),w(t,a,r),b(a,c)},p:function(t,n){16&n&&o!==(o=new Date(t[4].created_at).toLocaleString()+"")&&_(c,o)},d:function(t){t&&m(n),t&&m(a)}}}function X(t){var n,e,a,c,r,o=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?s.i18n.startedAt:s.i18n.startsAt)+"",i=new Date(t[4].metadata.start).toLocaleString()+"";return{c:function(){n=l("dt"),e=d(o),a=f(),c=l("dd"),r=d(i)},l:function(t){n=p(t,"DT",{});var u=g(n);e=D(u,o),a=v(u),u.forEach(m),c=p(t,"DD",{});var s=g(c);r=D(s,i),s.forEach(m)},m:function(t,o){w(t,n,o),b(n,e),b(n,a),w(t,c,o),b(c,r)},p:function(t,n){16&n&&o!==(o=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?s.i18n.startedAt:s.i18n.startsAt)+"")&&_(e,o),16&n&&i!==(i=new Date(t[4].metadata.start).toLocaleString()+"")&&_(r,i)},d:function(t){t&&m(n),t&&m(c)}}}function Y(t){var n,e,a,c,r=s.i18n.incidentClosedAt+"",o=new Date(t[4].closed_at).toLocaleString()+"";return{c:function(){n=l("dt"),e=d(r),a=l("dd"),c=d(o)},l:function(t){n=p(t,"DT",{});var i=g(n);e=D(i,r),i.forEach(m),a=p(t,"DD",{});var u=g(a);c=D(u,o),u.forEach(m)},m:function(t,r){w(t,n,r),b(n,e),w(t,a,r),b(a,c)},p:function(t,n){16&n&&o!==(o=new Date(t[4].closed_at).toLocaleString()+"")&&_(c,o)},d:function(t){t&&m(n),t&&m(a)}}}function Z(t){var n,e,a,c,r=s.i18n.duration+"",o=s.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c:function(){n=l("dt"),e=d(r),a=l("dd"),c=d(o)},l:function(t){n=p(t,"DT",{});var i=g(n);e=D(i,r),i.forEach(m),a=p(t,"DD",{});var u=g(a);c=D(u,o),u.forEach(m)},m:function(t,r){w(t,n,r),b(n,e),w(t,a,r),b(a,c)},p:function(t,n){16&n&&o!==(o=s.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&_(c,o)},d:function(t){t&&m(n),t&&m(a)}}}function tt(t){var n,e,a,c,r,o=t[5](t[9].body)+"",i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"";return{c:function(){n=l("article"),e=l("p"),a=f(),c=l("div"),r=f(),this.h()},l:function(t){n=p(t,"ARTICLE",{});var o=g(n);e=p(o,"P",{class:!0}),g(e).forEach(m),a=v(o),c=p(o,"DIV",{}),g(c).forEach(m),r=v(o),o.forEach(m),this.h()},h:function(){E(e,"class","svelte-4o16l6")},m:function(t,u){w(t,n,u),b(n,e),e.innerHTML=o,b(n,a),b(n,c),c.innerHTML=i,b(n,r)},p:function(t,n){8&n&&o!==(o=t[5](t[9].body)+"")&&(e.innerHTML=o),8&n&&i!==(i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"")&&(c.innerHTML=i)},d:function(t){t&&m(n)}}}function nt(t){var n,e,a,c,r,o,i,u,S,x,L,O,_=s.i18n.incidentBack+"";function M(t,n){return t[2]?Q:z}document.title=n=s.i18n.incidentTitle.replace("$NUMBER",t[0]);var C=M(t),H=C(t),B=[K,J],k=[];function I(t,n){return t[1]?0:1}return o=I(t),i=k[o]=B[o](t),{c:function(){e=f(),a=l("h2"),H.c(),c=f(),r=l("section"),i.c(),u=f(),S=l("footer"),x=l("a"),L=d(_),this.h()},l:function(t){h('[data-svelte="svelte-slinv8"]',document.head).forEach(m),e=v(t),a=p(t,"H2",{class:!0});var n=g(a);H.l(n),n.forEach(m),c=v(t),r=p(t,"SECTION",{});var o=g(r);i.l(o),o.forEach(m),u=v(t),S=p(t,"FOOTER",{class:!0});var s=g(S);x=p(s,"A",{href:!0});var f=g(x);L=D(f,_),f.forEach(m),s.forEach(m),this.h()},h:function(){E(a,"class","svelte-4o16l6"),E(x,"href",s.path),E(S,"class","svelte-4o16l6")},m:function(t,n){w(t,e,n),w(t,a,n),H.m(a,null),w(t,c,n),w(t,r,n),k[o].m(r,null),w(t,u,n),w(t,S,n),b(S,x),b(x,L),O=!0},p:function(t,e){var c=$(e,1)[0];(!O||1&c)&&n!==(n=s.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=n),C===(C=M(t))&&H?H.p(t,c):(H.d(1),(H=C(t))&&(H.c(),H.m(a,null)));var u=o;(o=I(t))===u?k[o].p(t,c):(T(),y(k[u],1,1,(function(){k[u]=null})),A(),(i=k[o])?i.p(t,c):(i=k[o]=B[o](t)).c(),R(i,1),i.m(r,null))},i:function(t){O||(R(i),O=!0)},o:function(t){y(i),O=!1},d:function(t){t&&m(e),t&&m(a),H.d(),t&&m(c),t&&m(r),k[o].d(),t&&m(u),t&&m(S)}}}function et(t,n,e){var a=n.number,c=L,r=!0,o=!0,i=P(),u=s.owner,f=s.repo,l=[],d={};return S(U(x.mark((function t(){var n;return x.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,V("issue-".concat(u,"-").concat(f,"-").concat(a),(function(){return i.issues.get({owner:u,repo:f,issue_number:a,sort:"created",direction:"desc"})}));case 4:t.t1=d=t.sent.data,(0,t.t0)(4,t.t1),e(4,d.metadata={},d),d.body.includes("\x3c!--")&&(n=d.body.split("\x3c!--")[1].split("--\x3e")[0],n.split("\n").filter((function(t){return t.trim()})).filter((function(t){return t.includes(":")})).forEach((function(t){e(4,d.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),d)}))),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(0),F(t.t2);case 13:return e(2,o=!1),t.prev=14,t.t3=e,t.next=18,V("issue-comments-".concat(u,"-").concat(f,"-").concat(a),(function(){return i.issues.listComments({owner:u,repo:f,issue_number:a})}));case 18:t.t4=l=t.sent.data.reverse(),(0,t.t3)(3,t.t4),t.next=25;break;case 22:t.prev=22,t.t5=t.catch(14),F(t.t5);case 25:e(1,r=!1);case 26:case"end":return t.stop()}}),t,null,[[0,10],[14,22]])})))),t.$$set=function(t){"number"in t&&e(0,a=t.number)},[a,r,o,l,d,c]}var at=function(n){t(s,u);var e=G(s);function s(t){var n;return a(this,s),n=e.call(this),c(o(n),t,et,nt,r,{number:0}),n}return i(s)}();function ct(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var o=n(this).constructor;c=Reflect.construct(r,arguments,o)}else c=r.apply(this,arguments);return e(this,c)}}function rt(t){var n,e;return n=new at({props:{number:t[0]}}),{c:function(){B(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,a){I(n,t,a),e=!0},p:function(t,e){var a={};1&$(e,1)[0]&&(a.number=t[0]),n.$set(a)},i:function(t){e||(R(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){N(n,t)}}}function ot(t){return it.apply(this,arguments)}function it(){return(it=U(x.mark((function t(n){var e;return x.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params.number,t.abrupt("return",{number:e});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(t,n,e){var a=n.number;return t.$$set=function(t){"number"in t&&e(0,a=t.number)},[a]}var st=function(n){t(s,u);var e=ct(s);function s(t){var n;return a(this,s),n=e.call(this),c(o(n),t,ut,rt,r,{number:0}),n}return i(s)}();export{st as default,ot as preload};
