var x=Object.create,l=Object.defineProperty,O=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,y=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,j=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),k=(a,t)=>{for(var o in t)l(a,o,{get:t[o],enumerable:!0})},c=(a,t,o,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of h(t))!g.call(a,e)&&e!==o&&l(a,e,{get:()=>t[e],enumerable:!(u=O(t,e))||u.enumerable});return a},M=(a,t,o)=>(c(a,t,"default"),o&&c(o,t,"default")),v=(a,t,o)=>(o=a!=null?x(y(a)):{},c(t||!a||!a.__esModule?l(o,"default",{value:a,enumerable:!0}):o,a)),b=j((a,t)=>{"use strict";var o=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function u(e,m){var f,r,p,n=e.posMax,s=e.pos;if(e.src.charCodeAt(s)!==94||m||s+2>=n)return!1;for(e.pos=s+1;e.pos<n;){if(e.src.charCodeAt(e.pos)===94){f=!0;break}e.md.inline.skipToken(e)}return!f||s+1===e.pos||(r=e.src.slice(s+1,e.pos),r.match(/(^|[^\\])(\\\\)*\s/))?(e.pos=s,!1):(e.posMax=e.pos,e.pos=s+1,p=e.push("sup_open","sup",1),p.markup="^",p=e.push("text","",0),p.content=r.replace(o,"$1"),p=e.push("sup_close","sup",-1),p.markup="^",e.pos=e.posMax+1,e.posMax=n,!0)}t.exports=function(e){e.inline.ruler.after("emphasis","sup",u)}}),d={};k(d,{default:()=>w});var P=v(b());M(d,v(b()));var{default:i,..._}=P,w=i!==void 0?i:_;export{w as default};
//# sourceMappingURL=markdown-it-sup.bundle.js.map