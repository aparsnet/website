import{g as t}from"./p-87f0c668.js";import{c as e,D as i}from"./p-185b2ebc.js";import{d as n,c as s}from"./p-a5fc534d.js";function o(o){return function(r,c){const{connectedCallback:p,render:f,componentWillLoad:a,componentDidLoad:l}=r;r.componentWillLoad=function(){if(!t(this).hasAttribute(e))return a&&a.call(this)},r.componentDidLoad=function(){if(!t(this).hasAttribute(e))return l&&l.call(this)},r.connectedCallback=function(){let s=this,r=t(s),f=n(String(c));if(r.hasAttribute(e)){if(!s.componentDefinitions)return s.componentDefinitions={definedProperties:[Object.assign(Object.assign({},o),{propertyName:f})]},p&&p.call(s);let t=s.componentDefinitions;const e=Object.assign(Object.assign({},o),{propertyName:f});if(t&&t.hasOwnProperty(i)){let n=[...t[i]];n.push(e),t[i]=[...n]}else t[i]=[e];s.componentDefinitions=Object.assign({},t)}return p&&p.call(s)},r.render=function(){const e=t(this).tagName.toLowerCase();if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[i])return f&&f.call(this);let n=this.componentDefinitions[i];n&&(n=n.reverse()),s("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:{tag:e,props:n}},!0)}}}export{o as T}