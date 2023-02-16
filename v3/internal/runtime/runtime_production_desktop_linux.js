(()=>{var q=Object.defineProperty;var m=(e,t)=>{for(var n in t)q(e,n,{get:t[n],enumerable:!0})};var x={};m(x,{SetText:()=>_,Text:()=>X});var J=window.location.origin+"/wails/runtime";function E(e,t){let n=new URL(J);return n.searchParams.append("method",e),t&&n.searchParams.append("args",JSON.stringify(t)),new Promise((r,i)=>{fetch(n).then(o=>{if(o.ok)return o.headers.get("Content-Type")&&o.headers.get("Content-Type").indexOf("application/json")!==-1?o.json():o.text();i(Error(o.statusText))}).then(o=>r(o)).catch(o=>i(o))})}function l(e,t){return!t||t===-1?function(n,r){return E(e+"."+n,r)}:function(n,r){return r=r||{},r.windowID=t,E(e+"."+n,r)}}var L=l("clipboard");function _(e){return L("SetText",{text:e})}function X(){return L("Text")}var h={};m(h,{Hide:()=>j,Quit:()=>V,Show:()=>K});var g=l("application");function j(){return g("Hide")}function K(){return g("Show")}function V(){return g("Quit")}var C={};m(C,{Log:()=>$});var Z=l("log");function $(e){return Z("Log",e)}var M={};m(M,{GetAll:()=>ee,GetCurrent:()=>ne,GetPrimary:()=>te});var S=l("screens");function ee(){return S("GetAll")}function te(){return S("GetPrimary")}function ne(){return S("GetCurrent")}function O(e){let t=l("window",e);return{Center:()=>t("Center"),SetTitle:n=>t("SetTitle",{title:n}),Fullscreen:()=>t("Fullscreen"),UnFullscreen:()=>t("UnFullscreen"),SetSize:(n,r)=>t("SetSize",{width:n,height:r}),Size:()=>t("Size"),SetMaxSize:(n,r)=>t("SetMaxSize",{width:n,height:r}),SetMinSize:(n,r)=>t("SetMinSize",{width:n,height:r}),SetAlwaysOnTop:n=>t("SetAlwaysOnTop",{alwaysOnTop:n}),SetPosition:(n,r)=>t("SetPosition",{x:n,y:r}),Position:()=>t("Position"),Screen:()=>t("Screen"),Hide:()=>t("Hide"),Maximise:()=>t("Maximise"),Show:()=>t("Show"),Close:()=>t("Close"),ToggleMaximise:()=>t("ToggleMaximise"),UnMaximise:()=>t("UnMaximise"),Minimise:()=>t("Minimise"),UnMinimise:()=>t("UnMinimise"),SetBackgroundColour:(n,r,i,o)=>t("SetBackgroundColour",{r:n,g:r,b:i,a:o})}}var re=l("events"),b=class{constructor(t,n,r){this.eventName=t,this.maxCallbacks=r||-1,this.Callback=i=>(n(i),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}};var a=new Map;function d(e,t,n){let r=a.get(e)||[],i=new b(e,t,n);return r.push(i),a.set(e,r),()=>ie(i)}function A(e,t){return d(e,t,-1)}function T(e,t){return d(e,t,1)}function ie(e){let t=e.eventName,n=a.get(t).filter(r=>r!==e);n.length===0?a.delete(t):a.set(t,n)}function k(e){console.log("dispatching event: ",{event:e});let t=a.get(e.name);if(t){let n=[];t.forEach(r=>{r.Callback(e)&&n.push(r)}),n.length>0&&(t=t.filter(r=>!n.includes(r)),t.length===0?a.delete(e.name):a.set(e.name,t))}}function R(e,...t){[e,...t].forEach(r=>{a.delete(r)})}function W(){a.clear()}function p(e){return re("Emit",e)}var oe="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var y=(e=21)=>{let t="",n=e;for(;n--;)t+=oe[Math.random()*64|0];return t};var le=l("dialog"),u=new Map;function ae(){let e;do e=y();while(u.has(e));return e}function F(e,t,n){let r=u.get(e);r&&(n?r.resolve(JSON.parse(t)):r.resolve(t),u.delete(e))}function P(e,t){let n=u.get(e);n&&(n.reject(t),u.delete(e))}function c(e,t){return new Promise((n,r)=>{let i=ae();t=t||{},t["dialog-id"]=i,u.set(i,{resolve:n,reject:r}),le(e,t).catch(o=>{r(o),u.delete(i)})})}function D(e){return c("Info",e)}function U(e){return c("Warning",e)}function z(e){return c("Error",e)}function f(e){return c("Question",e)}function G(e){return c("OpenFile",e)}function I(e){return c("SaveFile",e)}var ue=l("contextmenu");function ce(e,t,n,r){return ue("OpenContextMenu",{id:e,x:t,y:n,data:r})}function Q(e){e?window.addEventListener("contextmenu",N):window.removeEventListener("contextmenu",N)}function N(e){B(e.target,e)}function B(e,t){let n=e.getAttribute("data-contextmenu");if(n)t.preventDefault(),ce(n,t.clientX,t.clientY,e.getAttribute("data-contextmenu-data"));else{let r=e.parentElement;r&&B(r,t)}}function H(e){let t=p({name:e})}function se(){let e=document.querySelectorAll("[data-wml-event]");for(let t=0;t<e.length;t++){let n=e[t],r=n.getAttribute("data-wml-event"),i=n.getAttribute("data-wml-confirm"),o=n.getAttribute("data-wml-trigger")||"click",s=function(){if(i){f({Title:"Confirm",Message:i,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(w){w!=="No"&&H(r)});return}H(r)};n.removeEventListener(o,s),n.addEventListener(o,s)}}function Y(e){wails.Window[e]===void 0&&console.log("Window method "+e+" not found"),wails.Window[e]()}function fe(){let e=document.querySelectorAll("[data-wml-window]");for(let t=0;t<e.length;t++){let n=e[t],r=n.getAttribute("data-wml-window"),i=n.getAttribute("data-wml-confirm"),o=n.getAttribute("data-wml-trigger")||"click",s=function(){if(i){f({Title:"Confirm",Message:i,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(w){w!=="No"&&Y(r)});return}Y(r)};n.removeEventListener(o,s),n.addEventListener(o,s)}}function v(){se(),fe()}window.wails={...me(-1)};window._wails={dialogCallback:F,dialogErrorCallback:P,dispatchCustomEvent:k};function me(e){return{Clipboard:{...x},Application:{...h},Log:C,Screens:M,WML:{Refresh:v},Dialog:{Info:D,Warning:U,Error:z,Question:f,OpenFile:G,SaveFile:I},Events:{Emit:p,On:A,Once:T,OnMultiple:d,Off:R,OffAll:W},Window:O(e)}}console.log("Wails v3.0.0 Debug Mode Enabled");Q(!0);document.addEventListener("DOMContentLoaded",function(e){v()});})();