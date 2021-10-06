import{d as l,c as e,R as g,u as v,a as b,b as c,r as E,e as T,D as S,M as u,B as I,f as C,g as D,N as y,h as P,i as L}from"./vendor.9872ac3d.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};N();var V=l({name:"App",mounted(){{const t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?1563bc52cb27ffbc7b5b46cdfc327ce0",document.head.appendChild(t)}},render(){return e(g,null,null)}});const O="modulepreload",k={},A="https://imzbf.github.io/md-editor-v3/",d=function(n,a){return!a||a.length===0?n():Promise.all(a.map(i=>{if(i=`${A}${i}`,i in k)return;k[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":O,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((x,w)=>{s.addEventListener("load",x),s.addEventListener("error",w)})})).then(()=>n())};var R=l({setup(){const t=v(),n=b(()=>t.state.lang==="zh-CN"?{home:"\u9996\u9875",docs:"\u6587\u6863",demo:"\u793A\u4F8B",github:"\u6E90\u7801",about:"\u5173\u4E8E",lang:"English",langIcon:"#icon-d-en"}:{home:"Home",docs:"Docs",demo:"Demo",github:"Github",about:"About",lang:"\u4E2D\u6587",langIcon:"#icon-d-cn"});return()=>e("ul",{class:"nav-list"},[e("li",{class:"nav-item"},[e(c,{to:"/"},{default:()=>[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-d-online"},null)]),n.value.home]})]),e("li",{class:"nav-item"},[e(c,{to:"/docs"},{default:()=>[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-d-docs"},null)]),n.value.docs]})]),e("li",{class:"nav-item"},[e(c,{to:"/demo"},{default:()=>[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-d-demo"},null)]),n.value.demo]})]),e("li",{class:"nav-item"},[e("a",{href:"https://github.com/imzbf/md-editor-v3",target:"_blank"},[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-d-github"},null)]),n.value.github])]),e("li",{class:"nav-item"},[e(c,{to:"/about"},{default:()=>[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-d-about"},null)]),n.value.about]})]),e("li",{class:"nav-item",onClick:()=>{t.commit("changeLang")}},[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":n.value.langIcon},null)]),n.value.lang])])}}),j=l({props:{theme:String,onChange:{type:Function,default:()=>{}}},setup(){const t=v(),n=E({previewThemevisible:!1}),a=b(()=>t.state.lang==="zh-CN"?{desc:"Markdown\u7F16\u8F91\u5668Vue3\u7248\u672C\uFF0C\u4F7F\u7528jsx\u548Ctypescript\u8BED\u6CD5\u5F00\u53D1\uFF0C\u652F\u6301\u5207\u6362\u4E3B\u9898\u3001prettier\u7F8E\u5316\u6587\u672C\u7B49\u3002",defaultTheme:"\u9ED8\u8BA4\u6A21\u5F0F",darkTheme:"\u6697\u9ED1\u6A21\u5F0F",previewBtn:"\u5207\u6362\u9884\u89C8\u4E3B\u9898",previewDefaultTheme:"\u9ED8\u8BA4\u4E3B\u9898",previewVuepressTheme:"Vuepress\u4E3B\u9898",previewGithubTheme:"Github\u4E3B\u9898"}:{desc:"Markdown Editor for Vue3, developed by jsx and typescript, support different themes\u3001beautify content by prettier.",defaultTheme:"Default Theme",darkTheme:"Dark Theme",previewBtn:"Preview Style",previewDefaultTheme:"Default Style",previewVuepressTheme:"Vuepress Style",previewGithubTheme:"Github Style"});return()=>e("header",{class:"page-header"},[e("section",{class:"container"},[e("h1",{class:"project-name"},[T("md-editor-v3")]),e("p",{class:"project-desc"},[a.value.desc]),e(R,null,null),e("p",{class:"header-actions"},[e("button",{class:"btn btn-header",onClick:()=>t.commit("changeTheme","light")},[a.value.defaultTheme]),e("button",{class:"btn btn-header",onClick:()=>t.commit("changeTheme","dark")},[a.value.darkTheme]),e(S,{trigger:"click",placement:"bottomCenter",getPopupContainer:()=>document.querySelector(".docs-page"),overlay:e(u,{theme:t.state.theme},{default:()=>[e(u.Item,{onClick:()=>{t.commit("changePreviewTheme","default")}},{default:()=>[a.value.previewDefaultTheme]}),e(u.Item,{onClick:()=>{t.commit("changePreviewTheme","github")}},{default:()=>[a.value.previewGithubTheme]}),e(u.Item,{onClick:()=>{t.commit("changePreviewTheme","vuepress")}},{default:()=>[a.value.previewVuepressTheme]})]}),visible:n.previewThemevisible,onVisibleChange:i=>{n.previewThemevisible=i}},{default:()=>[e("button",{class:"btn btn-header"},[a.value.previewBtn])]})])])])}}),m=l({name:"Layout",setup(){const t=v();return()=>e("div",{class:["docs-page",t.state.theme==="dark"&&"theme-dark"]},[e(j,null,null),e(g,null,null),e(I,null,{default:()=>[T("UP")]})])}});const h="MdEditorV3",p="storaged_store_key",$=[{path:"/",name:"Index",redirect:"/index",component:m,children:[{path:"index",name:"IndexPage",component:()=>d(()=>import("./index.4216b082.js"),["assets/index.4216b082.js","assets/index.c985190c.css","assets/request.4828bd4b.js","assets/vendor.9872ac3d.js"]),meta:{title:`${h} \u7F16\u8F91\u5668\u5C55\u793A`}}]},{path:"/docs",name:"Docs",redirect:"/docs/index",component:m,children:[{path:"index",name:"DocsIndex",component:()=>d(()=>import("./index.b7b6573e.js"),["assets/index.b7b6573e.js","assets/request.4828bd4b.js","assets/vendor.9872ac3d.js","assets/package.a5d730d2.js","assets/index.b7b75ee9.js"]),meta:{title:`${h} \u6587\u6863`}}]},{path:"/demo",name:"Demo",redirect:"/demo/index",component:m,children:[{path:"index",name:"DemoIndex",component:()=>d(()=>import("./index.48090fa3.js"),["assets/index.48090fa3.js","assets/request.4828bd4b.js","assets/vendor.9872ac3d.js","assets/package.a5d730d2.js","assets/index.b7b75ee9.js"]),meta:{title:`${h} \u4EE3\u7801\u6F14\u793A`}}]},{path:"/about",name:"About",redirect:"/about/index",component:m,children:[{path:"index",name:"AboutIndex",component:()=>d(()=>import("./index.d364dd0e.js"),["assets/index.d364dd0e.js","assets/request.4828bd4b.js","assets/vendor.9872ac3d.js","assets/package.a5d730d2.js"]),meta:{title:`${h} \u5173\u4E8E`}}]}],f=C({history:D("/md-editor-v3/"),routes:$});f.beforeEach(async(t,n,a)=>{y.start(),document.title=t.meta.title,a()});f.afterEach(()=>{y.done()});const _=localStorage.getItem(p),G=_?JSON.parse(_):{theme:"light",previewTheme:"default",lang:"en-US"};var z=P({state:G,mutations:{changeTheme(t,n){t.theme=n,localStorage.setItem(p,JSON.stringify(t))},changePreviewTheme(t,n){t.previewTheme=n,localStorage.setItem(p,JSON.stringify(t))},changeLang(t){t.lang=t.lang==="zh-CN"?"en-US":"zh-CN",localStorage.setItem(p,JSON.stringify(t))}}});L(V).use(z).use(f).mount("#app");
