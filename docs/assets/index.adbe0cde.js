import{d as $,u as w,r as b,M,o as r,c as l,a as c,w as h,b as u,F as f,e as g,E as N,f as D,g as z,t as x,h as B,i as P,j as L,k as S,l as F,m as V,n as C,v as k,p as O,q as W,s as j,x as q,y as R,z as H,A as K}from"./vendor.28da9764.js";const U=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}};U();var y=(e,o)=>{for(const[a,t]of o)e[a]=t;return e};const G=$({setup(){const e=w(),o=[{id:1,name:"\u9996\u9875",path:"/home",disabled:!1},{id:2,name:"\u5C0F\u8BF4",path:"/story",disabled:!1}],a=b(!1);return{drawer:a,Menu:M,menuArr:o,handleClose:s=>{s()},handleSwitch:s=>{a.value=!1,e.push(s.path)}}}}),J={id:"menuList"};function Q(e,o,a,t,n,s){const i=N,v=D,_=z;return r(),l(f,null,[c(v,{offset:20},{default:h(()=>[c(i,{type:"primary",size:"small",icon:e.Menu,onClick:o[0]||(o[0]=d=>e.drawer=!0),id:"menuBtn"},null,8,["icon"])]),_:1}),c(_,{modelValue:e.drawer,"onUpdate:modelValue":o[1]||(o[1]=d=>e.drawer=d),title:"\u83DC\u5355","with-header":!1,direction:"ltr",size:"88","before-close":e.handleClose},{default:h(()=>[u("ul",J,[(r(!0),l(f,null,g(e.menuArr,d=>(r(),l("li",{key:d.id},[c(i,{type:"text",textContent:x(d.name),onClick:m=>e.handleSwitch(d),disabled:d.disabled},null,8,["textContent","onClick","disabled"])]))),128))])]),_:1},8,["modelValue","before-close"])],64)}var T=y(G,[["render",Q],["__scopeId","data-v-05d884be"]]);const X={setup(e){return(o,a)=>{const t=B("router-view");return r(),l(f,null,[c(T),c(t)],64)}}};const Y={},Z={id:"bg"};function ee(e,o){return r(),l("div",Z)}var te=y(Y,[["render",ee],["__scopeId","data-v-55e3d98a"]]),oe="/assets/bookImg.393520da.png";const ne=$({setup(){const e=w();return{bookList:[{id:1,name:"\u4F55\u529B\u4F20",path:"/heli",disabled:!1},{id:2,name:"\u9AD8\u8FDC\u4F20",path:"/gaoyuan",disabled:!0},{id:3,name:"\u5F85\u5B9A",path:"/",disabled:!0}],handleClick:t=>{t.disabled?P.error("\u8FD8\u6CA1\u5F00\u59CB\u5199"):e.push(t.path)}}}}),se={id:"storyWrap"},re=["onClick"];function ae(e,o,a,t,n,s){const i=L,v=S;return r(),l("div",se,[c(v,{interval:4e3,type:"card",height:"700px"},{default:h(()=>[(r(!0),l(f,null,g(e.bookList,_=>(r(),F(i,{key:_.id},{default:h(()=>[u("img",{src:oe,onClick:d=>e.handleClick(_)},null,8,re)]),_:2},1024))),128))]),_:1})])}var le=y(ne,[["render",ae],["__scopeId","data-v-7c18ce5f"]]);const ie={setup(){const e=b(2),o=Math.ceil(e.value/35),a=w(),t=s=>{a.push("/heliPage?page="+s)},n=b(!0);return{total:e,tabNumber:o,handleClick:t,openStatus:n}},mounted(){}},E=e=>(W("data-v-0d896cf0"),e=e(),j(),e),de={id:"heli"},ce={class:"storyWrap"},ue={class:"left"},_e={style:{"margin-top":"170px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","data-v-394d1fd8":""},pe=E(()=>u("path",{fill:"currentColor",d:"M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"},null,-1)),he=[pe],fe={style:{"margin-top":"170px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","data-v-394d1fd8":""},ve=E(()=>u("path",{fill:"currentColor",d:"M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"},null,-1)),me=[ve],ye={class:"btnBox"},ge=["onClick"];function we(e,o,a,t,n,s){const i=V,v=B("router-view"),_=L,d=S;return r(),l("div",de,[c(i,{bottom:100}),u("div",ce,[u("div",ue,[c(v),u("div",{class:"opeartionBtn",onClick:o[0]||(o[0]=m=>t.openStatus=!t.openStatus)},[C((r(),l("svg",_e,he,512)),[[k,!t.openStatus]]),C((r(),l("svg",fe,me,512)),[[k,t.openStatus]])])]),u("div",{class:O(t.openStatus?"right":"close right")},[c(d,{height:"360px",autoplay:!1,interval:0,"indicator-position":"none",arrow:t.tabNumber>1?"always":"never"},{default:h(()=>[(r(!0),l(f,null,g(t.tabNumber,(m,A)=>(r(),F(_,{key:A},{default:h(()=>[u("div",ye,[(r(!0),l(f,null,g(m*35,p=>C((r(),l("div",{class:"pageItems",key:p,onClick:Se=>t.handleClick(p)},x(p),9,ge)),[[k,(m-1)*35<p&&p<=m*35&&p<=t.total]])),128))])]),_:2},1024))),128))]),_:1},8,["arrow"])],2)])])}var be=y(ie,[["render",we],["__scopeId","data-v-0d896cf0"]]);const Ce={setup(){}},ke={id:"heli"};function $e(e,o,a,t,n,s){return r(),l("div",ke," \u5C0F\u8BF4\u5468\u4E94\u5199 ")}var xe=y(Ce,[["render",$e]]);const Be=[{path:"/",redirect:"/home"},{path:"/home",component:te},{path:"/story",component:le},{path:"/heli",component:be,children:[{path:"/heliPage",component:xe}]}],Le=q({history:R(),routes:Be});const I=H(X).use(Le);I.use(K);I.mount("#app");