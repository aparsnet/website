import{r as t,h as o,g as s}from"./p-87f0c668.js";import"./p-012de76a.js";import{i as n}from"./p-7c10a633.js";const e=class{constructor(o){t(this,o),this.routes={},this.redirectTo=""}componentWillLoad(){let t={},o=function(s){return s.forEach(s=>{if(s.children&&"known"===s.children.type)o(s.children.items);else{let{path:o,component:n,componentProps:e}=s;t[o]={component:n,componentProps:e}}}),t};this.routes=o(this.pages)}locationChanged(t){if(this.currentRoute=t,new URL(window.basePath).pathname.includes(this.currentRoute.pathname)&&""===this.currentRoute.search)this.redirectTo=this.pages[0].path;else{let t=this.pages.map((t,o)=>"404"==t.name?o:null).filter(t=>null!==t)[0];this.redirectTo=t?this.pages[t].path:this.pages[0].path}}render(){let t=this.currentRoute.pathname+this.currentRoute.search;-1!==t.indexOf("&")&&(t=t.substring(0,t.indexOf("&")));let s=this.routes[t],n="psk-page-not-found",e={urlDestination:this.redirectTo};return s&&(n=s.component,e=s.componentProps),o("stencil-route",{component:n,componentProps:e})}get el(){return s(this)}static get watchers(){return{location:["locationChanged"]}}};n(e);export{e as query_pages_router}