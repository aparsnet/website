import{r as t,h as o,H as e,g as r}from"./p-87f0c668.js";import"./p-ff3b654f.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{C as n}from"./p-b4c074e0.js";import{T as i}from"./p-9a6ac7e0.js";var a=function(t,o,e,r){var n,i=arguments.length,a=i<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,o,e,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(o,e,a):n(o,e))||a);return i>3&&a&&Object.defineProperty(o,e,a),a};const s=class{constructor(o){t(this,o),this.title="",this.opened=!1,this.layout="default"}toggleAccordionItem(t){t.preventDefault(),t.stopImmediatePropagation(),this.__host.dispatchEvent(new Event("psk-accordion-item:toggle"))}render(){return o(e,{opened:this.opened},o("div",{class:"title",tabindex:0,onClick:t=>this.toggleAccordionItem(t)},o("psk-icon",{icon:"chevron-right",class:{rotated:this.opened}}),o("span",null,this.title)),o("div",{class:"content"},o("slot",null)))}get __host(){return r(this)}};a([n()],s.prototype,"__host",void 0),a([i({description:"This property is used as title or summary for collapsable section.",isMandatory:!0,propertyType:"string"})],s.prototype,"title",void 0),a([i({description:"This property decides if the content of the component is visible / hidden.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],s.prototype,"opened",void 0),s.style={default:":host{display:block}:host .title{display:flex;align-items:center;outline:none;cursor:pointer;border:2px solid transparent;background-color:transparent}:host .content{transform-origin:top;transition-duration:0.3s;transition-property:transform, padding, height, opacity;transition-timing-function:ease-in}:host .content,:host([opened='false']) .content{overflow:hidden;height:0;opacity:0;padding-top:0;padding-bottom:0;transform:translateY(-0.15em)}:host([opened]) .content,:host([opened='true']) .content{height:100%;opacity:1;padding-top:0.75em;padding-bottom:0.5em;transform:translateY(0)}:host([layout='default']) .title{border-radius:5px}:host([layout='default'][opened]) .title,:host([layout='default'][opened='true']) .title{border-bottom-right-radius:0;border-bottom-left-radius:0}:host([layout='default']) .title .icon{padding:0.45em 0.25em;transition:transform 0.2s ease-in-out}:host([layout='default']) .title .rotated .icon{transform:rotate(90deg)}:host([layout='default']) .content{border:2px solid transparent;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;margin-bottom:1em;padding-left:0.5em;padding-right:0.5em}:host .title .icon,:host .title span{color:#5E7FE2}:host .title:hover{background-color:#5E7FE225}:host([layout='default']) .title:focus{border-color:#5E7FE2}:host([layout='default'][opened]) .title,:host([layout='default'][opened='true']) .title{background-color:#5E7FE225}:host([layout='default']) .content{border-color:#5E7FE225}",layout:":host{display:block}:host .title{display:flex;align-items:center;outline:none;cursor:pointer;border:2px solid transparent;background-color:transparent}:host .content{transform-origin:top;transition-duration:0.3s;transition-property:transform, padding, height, opacity;transition-timing-function:ease-in}:host .content,:host([opened='false']) .content{overflow:hidden;height:0;opacity:0;padding-top:0;padding-bottom:0;transform:translateY(-0.15em)}:host([opened]) .content,:host([opened='true']) .content{height:100%;opacity:1;padding-top:0.75em;padding-bottom:0.5em;transform:translateY(0)}:host([layout='default']) .title{border-radius:5px}:host([layout='default'][opened]) .title,:host([layout='default'][opened='true']) .title{border-bottom-right-radius:0;border-bottom-left-radius:0}:host([layout='default']) .title .icon{padding:0.45em 0.25em;transition:transform 0.2s ease-in-out}:host([layout='default']) .title .rotated .icon{transform:rotate(90deg)}:host([layout='default']) .content{border:2px solid transparent;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;margin-bottom:1em;padding-left:0.5em;padding-right:0.5em}"};export{s as psk_accordion_item}