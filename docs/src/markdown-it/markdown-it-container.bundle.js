var J=Object.create,m=Object.defineProperty,N=Object.getOwnPropertyDescriptor,q=Object.getOwnPropertyNames,B=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,F=(a,r)=>()=>(r||a((r={exports:{}}).exports,r),r.exports),G=(a,r)=>{for(var n in r)m(a,n,{get:r[n],enumerable:!0})},_=(a,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of q(r))!E.call(a,l)&&l!==n&&m(a,l,{get:()=>r[l],enumerable:!(s=N(r,l))||s.enumerable});return a},H=(a,r,n)=>(_(a,r,"default"),n&&_(n,r,"default")),P=(a,r,n)=>(n=a!=null?J(B(a)):{},_(r||!a||!a.__esModule?m(n,"default",{value:a,enumerable:!0}):n,a)),T=F((a,r)=>{"use strict";r.exports=function(n,s,l){function A(e){return e.trim().split(" ",2)[0]===s}function S(e,i,d,k,t){return e[i].nesting===1&&e[i].attrJoin("class",s),t.renderToken(e,i,d,k,t)}l=l||{};var I=3,b=l.marker||":",O=b.charCodeAt(0),f=b.length,z=l.validate||A,M=l.render||S;function D(e,i,d,k){var t,c,v,h,y,p,g,x,j=!1,o=e.bMarks[i]+e.tShift[i],u=e.eMarks[i];if(O!==e.src.charCodeAt(o))return!1;for(t=o+1;t<=u&&b[(t-o)%f]===e.src[t];t++);if(v=Math.floor((t-o)/f),v<I||(t-=(t-o)%f,h=e.src.slice(o,t),y=e.src.slice(t,u),!z(y,h)))return!1;if(k)return!0;for(c=i;c++,!(c>=d||(o=e.bMarks[c]+e.tShift[c],u=e.eMarks[c],o<u&&e.sCount[c]<e.blkIndent));)if(O===e.src.charCodeAt(o)&&!(e.sCount[c]-e.blkIndent>=4)){for(t=o+1;t<=u&&b[(t-o)%f]===e.src[t];t++);if(!(Math.floor((t-o)/f)<v)&&(t-=(t-o)%f,t=e.skipSpaces(t),!(t<u))){j=!0;break}}return g=e.parentType,x=e.lineMax,e.parentType="container",e.lineMax=c,p=e.push("container_"+s+"_open","div",1),p.markup=h,p.block=!0,p.info=y,p.map=[i,c],e.md.block.tokenize(e,i+1,c),p=e.push("container_"+s+"_close","div",-1),p.markup=e.src.slice(o,t),p.block=!0,e.parentType=g,e.lineMax=x,e.line=c+(j?1:0),!0}n.block.ruler.before("fence","container_"+s,D,{alt:["paragraph","reference","blockquote","list"]}),n.renderer.rules["container_"+s+"_open"]=M,n.renderer.rules["container_"+s+"_close"]=M}}),w={};G(w,{default:()=>R});var K=P(T());H(w,P(T()));var{default:C,...Q}=K,R=C!==void 0?C:Q;export{R as default};
//# sourceMappingURL=markdown-it-container.bundle.js.map