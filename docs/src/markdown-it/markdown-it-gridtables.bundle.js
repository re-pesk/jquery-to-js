var Mt=Object.create,J=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyNames,Nt=Object.getPrototypeOf,xt=Object.prototype.hasOwnProperty,kt=h=>J(h,"__esModule",{value:!0}),Z=(h,s)=>()=>(s||h((s={exports:{}}).exports,s),s.exports),Dt=(h,s,l)=>{if(s&&typeof s=="object"||typeof s=="function")for(let c of $t(s))!xt.call(h,c)&&c!=="default"&&J(h,c,{get:()=>s[c],enumerable:!(l=Pt(s,c))||l.enumerable});return h},at=h=>Dt(kt(J(h!=null?Mt(Nt(h)):{},"default",h&&h.__esModule&&"default"in h?{get:()=>h.default,enumerable:!0}:{value:h,enumerable:!0})),h),Ft=Z(h=>{"use strict";h.byteLength=u,h.toByteArray=d,h.fromByteArray=A;var s=[],l=[],c=typeof Uint8Array<"u"?Uint8Array:Array,w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(B=0,y=w.length;B<y;++B)s[B]=w[B],l[w.charCodeAt(B)]=B;var B,y;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function o(b){var m=b.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var O=b.indexOf("=");O===-1&&(O=m);var I=O===m?0:4-O%4;return[O,I]}function u(b){var m=o(b),O=m[0],I=m[1];return(O+I)*3/4-I}function g(b,m,O){return(m+O)*3/4-O}function d(b){var m,O=o(b),I=O[0],v=O[1],U=new c(g(b,I,v)),_=0,T=v>0?I-4:I,S;for(S=0;S<T;S+=4)m=l[b.charCodeAt(S)]<<18|l[b.charCodeAt(S+1)]<<12|l[b.charCodeAt(S+2)]<<6|l[b.charCodeAt(S+3)],U[_++]=m>>16&255,U[_++]=m>>8&255,U[_++]=m&255;return v===2&&(m=l[b.charCodeAt(S)]<<2|l[b.charCodeAt(S+1)]>>4,U[_++]=m&255),v===1&&(m=l[b.charCodeAt(S)]<<10|l[b.charCodeAt(S+1)]<<4|l[b.charCodeAt(S+2)]>>2,U[_++]=m>>8&255,U[_++]=m&255),U}function E(b){return s[b>>18&63]+s[b>>12&63]+s[b>>6&63]+s[b&63]}function p(b,m,O){for(var I,v=[],U=m;U<O;U+=3)I=(b[U]<<16&16711680)+(b[U+1]<<8&65280)+(b[U+2]&255),v.push(E(I));return v.join("")}function A(b){for(var m,O=b.length,I=O%3,v=[],U=16383,_=0,T=O-I;_<T;_+=U)v.push(p(b,_,_+U>T?T:_+U));return I===1?(m=b[O-1],v.push(s[m>>2]+s[m<<4&63]+"==")):I===2&&(m=(b[O-2]<<8)+b[O-1],v.push(s[m>>10]+s[m>>4&63]+s[m<<2&63]+"=")),v.join("")}}),Ht=Z(h=>{h.read=function(s,l,c,w,B){var y,o,u=B*8-w-1,g=(1<<u)-1,d=g>>1,E=-7,p=c?B-1:0,A=c?-1:1,b=s[l+p];for(p+=A,y=b&(1<<-E)-1,b>>=-E,E+=u;E>0;y=y*256+s[l+p],p+=A,E-=8);for(o=y&(1<<-E)-1,y>>=-E,E+=w;E>0;o=o*256+s[l+p],p+=A,E-=8);if(y===0)y=1-d;else{if(y===g)return o?NaN:(b?-1:1)*(1/0);o=o+Math.pow(2,w),y=y-d}return(b?-1:1)*o*Math.pow(2,y-w)},h.write=function(s,l,c,w,B,y){var o,u,g,d=y*8-B-1,E=(1<<d)-1,p=E>>1,A=B===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=w?0:y-1,m=w?1:-1,O=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(u=isNaN(l)?1:0,o=E):(o=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-o))<1&&(o--,g*=2),o+p>=1?l+=A/g:l+=A*Math.pow(2,1-p),l*g>=2&&(o++,g/=2),o+p>=E?(u=0,o=E):o+p>=1?(u=(l*g-1)*Math.pow(2,B),o=o+p):(u=l*Math.pow(2,p-1)*Math.pow(2,B),o=0));B>=8;s[c+b]=u&255,b+=m,u/=256,B-=8);for(o=o<<B|u,d+=B;d>0;s[c+b]=o&255,b+=m,o/=256,d-=8);s[c+b-m]|=O*128}}),ht=Z(h=>{"use strict";var s=Ft(),l=Ht(),c=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;h.Buffer=o,h.SlowBuffer=v,h.INSPECT_MAX_BYTES=50;var w=2147483647;h.kMaxLength=w,o.TYPED_ARRAY_SUPPORT=B(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function B(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function y(t){if(t>w)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,o.prototype),e}function o(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return E(t)}return u(t,e,n)}o.poolSize=8192;function u(t,e,n){if(typeof t=="string")return p(t,e);if(ArrayBuffer.isView(t))return b(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(x(t,ArrayBuffer)||t&&x(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(x(t,SharedArrayBuffer)||t&&x(t.buffer,SharedArrayBuffer)))return m(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(r!=null&&r!==t)return o.from(r,e,n);let f=O(t);if(f)return f;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return o.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}o.from=function(t,e,n){return u(t,e,n)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function g(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function d(t,e,n){return g(t),t<=0?y(t):e!==void 0?typeof n=="string"?y(t).fill(e,n):y(t).fill(e):y(t)}o.alloc=function(t,e,n){return d(t,e,n)};function E(t){return g(t),y(t<0?0:I(t)|0)}o.allocUnsafe=function(t){return E(t)},o.allocUnsafeSlow=function(t){return E(t)};function p(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=U(t,e)|0,r=y(n),f=r.write(t,e);return f!==n&&(r=r.slice(0,f)),r}function A(t){let e=t.length<0?0:I(t.length)|0,n=y(e);for(let r=0;r<e;r+=1)n[r]=t[r]&255;return n}function b(t){if(x(t,Uint8Array)){let e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return A(t)}function m(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return e===void 0&&n===void 0?r=new Uint8Array(t):n===void 0?r=new Uint8Array(t,e):r=new Uint8Array(t,e,n),Object.setPrototypeOf(r,o.prototype),r}function O(t){if(o.isBuffer(t)){let e=I(t.length)|0,n=y(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||q(t.length)?y(0):A(t);if(t.type==="Buffer"&&Array.isArray(t.data))return A(t.data)}function I(t){if(t>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return t|0}function v(t){return+t!=t&&(t=0),o.alloc(+t)}o.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==o.prototype},o.compare=function(t,e){if(x(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),x(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let f=0,i=Math.min(n,r);f<i;++f)if(t[f]!==e[f]){n=t[f],r=e[f];break}return n<r?-1:r<n?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return o.alloc(0);let n;if(e===void 0)for(e=0,n=0;n<t.length;++n)e+=t[n].length;let r=o.allocUnsafe(e),f=0;for(n=0;n<t.length;++n){let i=t[n];if(x(i,Uint8Array))f+i.length>r.length?(o.isBuffer(i)||(i=o.from(i)),i.copy(r,f)):Uint8Array.prototype.set.call(r,i,f);else if(o.isBuffer(i))i.copy(r,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=i.length}return r};function U(t,e){if(o.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||x(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let f=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return X(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return lt(t).length;default:if(f)return r?-1:X(t).length;e=(""+e).toLowerCase(),f=!0}}o.byteLength=U;function _(t,e,n){let r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return _t(this,e,n);case"utf8":case"utf-8":return tt(this,e,n);case"ascii":return At(this,e,n);case"latin1":case"binary":return Ot(this,e,n);case"base64":return Et(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return It(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}o.prototype._isBuffer=!0;function T(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}o.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)T(this,e,e+1);return this},o.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)T(this,e,e+3),T(this,e+1,e+2);return this},o.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)T(this,e,e+7),T(this,e+1,e+6),T(this,e+2,e+5),T(this,e+3,e+4);return this},o.prototype.toString=function(){let t=this.length;return t===0?"":arguments.length===0?tt(this,0,t):_.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:o.compare(this,t)===0},o.prototype.inspect=function(){let t="",e=h.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},c&&(o.prototype[c]=o.prototype.inspect),o.prototype.compare=function(t,e,n,r,f){if(x(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),n===void 0&&(n=t?t.length:0),r===void 0&&(r=0),f===void 0&&(f=this.length),e<0||n>t.length||r<0||f>this.length)throw new RangeError("out of range index");if(r>=f&&e>=n)return 0;if(r>=f)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,f>>>=0,this===t)return 0;let i=f-r,a=n-e,L=Math.min(i,a),P=this.slice(r,f),C=t.slice(e,n);for(let R=0;R<L;++R)if(P[R]!==C[R]){i=P[R],a=C[R];break}return i<a?-1:a<i?1:0};function S(t,e,n,r,f){if(t.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,q(n)&&(n=f?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(f)return-1;n=t.length-1}else if(n<0)if(f)n=0;else return-1;if(typeof e=="string"&&(e=o.from(e,r)),o.isBuffer(e))return e.length===0?-1:D(t,e,n,r,f);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?f?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):D(t,[e],n,r,f);throw new TypeError("val must be string, number or Buffer")}function D(t,e,n,r,f){let i=1,a=t.length,L=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,a/=2,L/=2,n/=2}function P(R,j){return i===1?R[j]:R.readUInt16BE(j*i)}let C;if(f){let R=-1;for(C=n;C<a;C++)if(P(t,C)===P(e,R===-1?0:C-R)){if(R===-1&&(R=C),C-R+1===L)return R*i}else R!==-1&&(C-=C-R),R=-1}else for(n+L>a&&(n=a-L),C=n;C>=0;C--){let R=!0;for(let j=0;j<L;j++)if(P(t,C+j)!==P(e,j)){R=!1;break}if(R)return C}return-1}o.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},o.prototype.indexOf=function(t,e,n){return S(this,t,e,n,!0)},o.prototype.lastIndexOf=function(t,e,n){return S(this,t,e,n,!1)};function Y(t,e,n,r){n=Number(n)||0;let f=t.length-n;r?(r=Number(r),r>f&&(r=f)):r=f;let i=e.length;r>i/2&&(r=i/2);let a;for(a=0;a<r;++a){let L=parseInt(e.substr(a*2,2),16);if(q(L))return a;t[n+a]=L}return a}function bt(t,e,n,r){return G(X(e,t.length-n),t,n,r)}function wt(t,e,n,r){return G(Ct(e),t,n,r)}function mt(t,e,n,r){return G(lt(e),t,n,r)}function vt(t,e,n,r){return G(jt(e,t.length-n),t,n,r)}o.prototype.write=function(t,e,n,r){if(e===void 0)r="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")r=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-e;if((n===void 0||n>f)&&(n=f),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return Y(this,t,e,n);case"utf8":case"utf-8":return bt(this,t,e,n);case"ascii":case"latin1":case"binary":return wt(this,t,e,n);case"base64":return mt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vt(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Et(t,e,n){return e===0&&n===t.length?s.fromByteArray(t):s.fromByteArray(t.slice(e,n))}function tt(t,e,n){n=Math.min(t.length,n);let r=[],f=e;for(;f<n;){let i=t[f],a=null,L=i>239?4:i>223?3:i>191?2:1;if(f+L<=n){let P,C,R,j;switch(L){case 1:i<128&&(a=i);break;case 2:P=t[f+1],(P&192)==128&&(j=(i&31)<<6|P&63,j>127&&(a=j));break;case 3:P=t[f+1],C=t[f+2],(P&192)==128&&(C&192)==128&&(j=(i&15)<<12|(P&63)<<6|C&63,j>2047&&(j<55296||j>57343)&&(a=j));break;case 4:P=t[f+1],C=t[f+2],R=t[f+3],(P&192)==128&&(C&192)==128&&(R&192)==128&&(j=(i&15)<<18|(P&63)<<12|(C&63)<<6|R&63,j>65535&&j<1114112&&(a=j))}}a===null?(a=65533,L=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|a&1023),r.push(a),f+=L}return Bt(r)}var et=4096;function Bt(t){let e=t.length;if(e<=et)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=et));return n}function At(t,e,n){let r="";n=Math.min(t.length,n);for(let f=e;f<n;++f)r+=String.fromCharCode(t[f]&127);return r}function Ot(t,e,n){let r="";n=Math.min(t.length,n);for(let f=e;f<n;++f)r+=String.fromCharCode(t[f]);return r}function _t(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let f="";for(let i=e;i<n;++i)f+=Tt[t[i]];return f}function It(t,e,n){let r=t.slice(e,n),f="";for(let i=0;i<r.length-1;i+=2)f+=String.fromCharCode(r[i]+r[i+1]*256);return f}o.prototype.slice=function(t,e){let n=this.length;t=~~t,e=e===void 0?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);let r=this.subarray(t,e);return Object.setPrototypeOf(r,o.prototype),r};function M(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||M(t,e,this.length);let r=this[t],f=1,i=0;for(;++i<e&&(f*=256);)r+=this[t+i]*f;return r},o.prototype.readUintBE=o.prototype.readUIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||M(t,e,this.length);let r=this[t+--e],f=1;for(;e>0&&(f*=256);)r+=this[t+--e]*f;return r},o.prototype.readUint8=o.prototype.readUInt8=function(t,e){return t=t>>>0,e||M(t,1,this.length),this[t]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||M(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||M(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||M(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readBigUInt64LE=k(function(t){t=t>>>0,H(t,"offset");let e=this[t],n=this[t+7];(e===void 0||n===void 0)&&z(t,this.length-8);let r=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,f=this[++t]+this[++t]*2**8+this[++t]*2**16+n*2**24;return BigInt(r)+(BigInt(f)<<BigInt(32))}),o.prototype.readBigUInt64BE=k(function(t){t=t>>>0,H(t,"offset");let e=this[t],n=this[t+7];(e===void 0||n===void 0)&&z(t,this.length-8);let r=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],f=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n;return(BigInt(r)<<BigInt(32))+BigInt(f)}),o.prototype.readIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||M(t,e,this.length);let r=this[t],f=1,i=0;for(;++i<e&&(f*=256);)r+=this[t+i]*f;return f*=128,r>=f&&(r-=Math.pow(2,8*e)),r},o.prototype.readIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||M(t,e,this.length);let r=e,f=1,i=this[t+--r];for(;r>0&&(f*=256);)i+=this[t+--r]*f;return f*=128,i>=f&&(i-=Math.pow(2,8*e)),i},o.prototype.readInt8=function(t,e){return t=t>>>0,e||M(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},o.prototype.readInt16LE=function(t,e){t=t>>>0,e||M(t,2,this.length);let n=this[t]|this[t+1]<<8;return n&32768?n|4294901760:n},o.prototype.readInt16BE=function(t,e){t=t>>>0,e||M(t,2,this.length);let n=this[t+1]|this[t]<<8;return n&32768?n|4294901760:n},o.prototype.readInt32LE=function(t,e){return t=t>>>0,e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return t=t>>>0,e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readBigInt64LE=k(function(t){t=t>>>0,H(t,"offset");let e=this[t],n=this[t+7];(e===void 0||n===void 0)&&z(t,this.length-8);let r=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),o.prototype.readBigInt64BE=k(function(t){t=t>>>0,H(t,"offset");let e=this[t],n=this[t+7];(e===void 0||n===void 0)&&z(t,this.length-8);let r=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n)}),o.prototype.readFloatLE=function(t,e){return t=t>>>0,e||M(t,4,this.length),l.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return t=t>>>0,e||M(t,4,this.length),l.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||M(t,8,this.length),l.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||M(t,8,this.length),l.read(this,t,!1,52,8)};function $(t,e,n,r,f,i){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>f||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e=e>>>0,n=n>>>0,!r){let a=Math.pow(2,8*n)-1;$(this,t,e,n,a,0)}let f=1,i=0;for(this[e]=t&255;++i<n&&(f*=256);)this[e+i]=t/f&255;return e+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e=e>>>0,n=n>>>0,!r){let a=Math.pow(2,8*n)-1;$(this,t,e,n,a,0)}let f=n-1,i=1;for(this[e+f]=t&255;--f>=0&&(i*=256);)this[e+f]=t/i&255;return e+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,1,255,0),this[e]=t&255,e+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function nt(t,e,n,r,f){st(e,r,f,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=a,a=a>>8,t[n++]=a,a=a>>8,t[n++]=a,a=a>>8,t[n++]=a,n}function rt(t,e,n,r,f){st(e,r,f,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i=i>>8,t[n+6]=i,i=i>>8,t[n+5]=i,i=i>>8,t[n+4]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=a,a=a>>8,t[n+2]=a,a=a>>8,t[n+1]=a,a=a>>8,t[n]=a,n+8}o.prototype.writeBigUInt64LE=k(function(t,e=0){return nt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=k(function(t,e=0){return rt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e=e>>>0,!r){let L=Math.pow(2,8*n-1);$(this,t,e,n,L-1,-L)}let f=0,i=1,a=0;for(this[e]=t&255;++f<n&&(i*=256);)t<0&&a===0&&this[e+f-1]!==0&&(a=1),this[e+f]=(t/i>>0)-a&255;return e+n},o.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e=e>>>0,!r){let L=Math.pow(2,8*n-1);$(this,t,e,n,L-1,-L)}let f=n-1,i=1,a=0;for(this[e+f]=t&255;--f>=0&&(i*=256);)t<0&&a===0&&this[e+f+1]!==0&&(a=1),this[e+f]=(t/i>>0)-a&255;return e+n},o.prototype.writeInt8=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},o.prototype.writeInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},o.prototype.writeInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},o.prototype.writeInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},o.prototype.writeInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||$(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},o.prototype.writeBigInt64LE=k(function(t,e=0){return nt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=k(function(t,e=0){return rt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ot(t,e,n,r,f,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ft(t,e,n,r,f){return e=+e,n=n>>>0,f||ot(t,e,n,4,34028234663852886e22,-34028234663852886e22),l.write(t,e,n,r,23,4),n+4}o.prototype.writeFloatLE=function(t,e,n){return ft(this,t,e,!0,n)},o.prototype.writeFloatBE=function(t,e,n){return ft(this,t,e,!1,n)};function it(t,e,n,r,f){return e=+e,n=n>>>0,f||ot(t,e,n,8,17976931348623157e292,-17976931348623157e292),l.write(t,e,n,r,52,8),n+8}o.prototype.writeDoubleLE=function(t,e,n){return it(this,t,e,!0,n)},o.prototype.writeDoubleBE=function(t,e,n){return it(this,t,e,!1,n)},o.prototype.copy=function(t,e,n,r){if(!o.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);let f=r-n;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),f},o.prototype.fill=function(t,e,n,r){if(typeof t=="string"){if(typeof e=="string"?(r=e,e=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(t.length===1){let i=t.charCodeAt(0);(r==="utf8"&&i<128||r==="latin1")&&(t=i)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,t||(t=0);let f;if(typeof t=="number")for(f=e;f<n;++f)this[f]=t;else{let i=o.isBuffer(t)?t:o.from(t,r),a=i.length;if(a===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<n-e;++f)this[f+e]=i[f%a]}return this};var F={};function V(t,e,n){F[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(r){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:r,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}V("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),V("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),V("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,f=n;return Number.isInteger(n)&&Math.abs(n)>2**32?f=ut(String(n)):typeof n=="bigint"&&(f=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(f=ut(f)),f+="n"),r+=` It must be ${e}. Received ${f}`,r},RangeError);function ut(t){let e="",n=t.length,r=t[0]==="-"?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Ut(t,e,n){H(e,"offset"),(t[e]===void 0||t[e+n]===void 0)&&z(e,t.length-(n+1))}function st(t,e,n,r,f,i){if(t>n||t<e){let a=typeof e=="bigint"?"n":"",L;throw i>3?e===0||e===BigInt(0)?L=`>= 0${a} and < 2${a} ** ${(i+1)*8}${a}`:L=`>= -(2${a} ** ${(i+1)*8-1}${a}) and < 2 ** ${(i+1)*8-1}${a}`:L=`>= ${e}${a} and <= ${n}${a}`,new F.ERR_OUT_OF_RANGE("value",L,t)}Ut(r,f,i)}function H(t,e){if(typeof t!="number")throw new F.ERR_INVALID_ARG_TYPE(e,"number",t)}function z(t,e,n){throw Math.floor(t)!==t?(H(t,n),new F.ERR_OUT_OF_RANGE(n||"offset","an integer",t)):e<0?new F.ERR_BUFFER_OUT_OF_BOUNDS:new F.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}var Lt=/[^+/0-9A-Za-z-_]/g;function Rt(t){if(t=t.split("=")[0],t=t.trim().replace(Lt,""),t.length<2)return"";for(;t.length%4!=0;)t=t+"=";return t}function X(t,e){e=e||1/0;let n,r=t.length,f=null,i=[];for(let a=0;a<r;++a){if(n=t.charCodeAt(a),n>55295&&n<57344){if(!f){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(a+1===r){(e-=3)>-1&&i.push(239,191,189);continue}f=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),f=n;continue}n=(f-55296<<10|n-56320)+65536}else f&&(e-=3)>-1&&i.push(239,191,189);if(f=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function Ct(t){let e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function jt(t,e){let n,r,f,i=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)n=t.charCodeAt(a),r=n>>8,f=n%256,i.push(f),i.push(r);return i}function lt(t){return s.toByteArray(Rt(t))}function G(t,e,n,r){let f;for(f=0;f<r&&!(f+n>=e.length||f>=t.length);++f)e[f+n]=t[f];return f}function x(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function q(t){return t!==t}var Tt=function(){let t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let r=n*16;for(let f=0;f<16;++f)e[r+f]=t[n]+t[f]}return e}();function k(t){return typeof BigInt>"u"?St:t}function St(){throw new Error("BigInt not supported")}}),Wt=at(ht()),Yt=at(ht()),{Buffer:W,SlowBuffer:ge,INSPECT_MAX_BYTES:ye,kMaxLength:de}=Wt,be=Yt.default;var zt=Object.create,Q=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyNames,Xt=Object.getPrototypeOf,qt=Object.prototype.hasOwnProperty,N=(h,s)=>()=>(s||h((s={exports:{}}).exports,s),s.exports),Jt=(h,s)=>{for(var l in s)Q(h,l,{get:s[l],enumerable:!0})},K=(h,s,l,c)=>{if(s&&typeof s=="object"||typeof s=="function")for(let w of Vt(s))!qt.call(h,w)&&w!==l&&Q(h,w,{get:()=>s[w],enumerable:!(c=Gt(s,w))||c.enumerable});return h},Zt=(h,s,l)=>(K(h,s,"default"),l&&K(l,s,"default")),pt=(h,s,l)=>(l=h!=null?zt(Xt(h)):{},K(s||!h||!h.__esModule?Q(l,"default",{value:h,enumerable:!0}):l,h)),Kt=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});function s(c){let w=[];for(let B=0;B<c[0].length;B++){let y=[];for(let u=0;u<c.length;u++){let g=l(c[u][B]);g.length===0&&y.length===0||y.push(g)}let o=y.length-1;for(;o>=0&&!(y[o].length>0);o--);o<y.length-1&&(y=y.slice(0,o+1)),w.push(y)}return w}h.default=s;function l(c){let w=c.trim();return w.length===0?"":c.slice(0,c.indexOf(w)+w.length)}}),gt=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});var s;(function(l){l.None="",l.Left="left",l.Center="center",l.Right="right"})(s||(s={})),h.default=s}),Qt=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});var s=Kt(),l=gt();function c(B,y,o){let u=o.SeparatorLineOffsets,g=y.push("table_open","table",1);if(g.map=[u[0],u[u.length-1]],o.HeaderLines.length>0){let d=y.push("thead_open","thead",1);d.map=[u[0],u[1]];let E=(0,s.default)(o.HeaderLines);w(B,y,"th",o.ColumnAlignments,u[0],u[1],E),y.push("thead_close","thead",-1),u=u.slice(1)}g=y.push("tbody_open","tbody",1),g.map=[u[0],u[u.length-1]];for(let d=0;d<o.RowLines.length;d++){let E=(0,s.default)(o.RowLines[d]);w(B,y,"td",o.ColumnAlignments,u[d],u[d+1],E)}y.push("tbody_close","tbody",-1),y.push("table_close","table",-1)}h.default=c;function w(B,y,o,u,g,d,E){let p=y.push("tr_open","tr",1);p.map=[g,d];for(let A=0;A<E.length;A++){let b=y.push(o+"_open",o,1);if(b.map=[g+1,d-1],u[A]!==l.default.None&&b.attrSet("style",`text-align: ${u[A]};`),E[A].length!==0)if(E[A].length===1){let m=y.push("inline","",0);m.content=E[A][0].trim(),m.children=[]}else{let m=B.render(E[A].join(`\r
`)).trim();m.slice(0,3)==="<p>"&&m.slice(-4)==="</p>"&&m.indexOf("<p>",3)===-1&&(m=m.slice(3,m.length-4));let O=y.push("html_block","",0);O.content=m,O.children=[]}y.push(o+"_close",o,-1)}y.push("tr_close","tr",-1)}}),te=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});function s(l,c){let w=l.bMarks[c]+l.tShift[c];return w>=l.eMarks[c]?-1:l.src.charCodeAt(w)}h.default=s}),ee=N((h,s)=>{var l=function(){"use strict";function c(g,d,E,p){var A;typeof d=="object"&&(E=d.depth,p=d.prototype,A=d.filter,d=d.circular);var b=[],m=[],O=typeof W<"u";typeof d>"u"&&(d=!0),typeof E>"u"&&(E=1/0);function I(v,U){if(v===null)return null;if(U==0)return v;var _,T;if(typeof v!="object")return v;if(c.__isArray(v))_=[];else if(c.__isRegExp(v))_=new RegExp(v.source,u(v)),v.lastIndex&&(_.lastIndex=v.lastIndex);else if(c.__isDate(v))_=new Date(v.getTime());else{if(O&&W.isBuffer(v))return W.allocUnsafe?_=W.allocUnsafe(v.length):_=new W(v.length),v.copy(_),_;typeof p>"u"?(T=Object.getPrototypeOf(v),_=Object.create(T)):(_=Object.create(p),T=p)}if(d){var S=b.indexOf(v);if(S!=-1)return m[S];b.push(v),m.push(_)}for(var D in v){var Y;T&&(Y=Object.getOwnPropertyDescriptor(T,D)),!(Y&&Y.set==null)&&(_[D]=I(v[D],U-1))}return _}return I(g,E)}c.clonePrototype=function(g){if(g===null)return null;var d=function(){};return d.prototype=g,new d};function w(g){return Object.prototype.toString.call(g)}c.__objToStr=w;function B(g){return typeof g=="object"&&w(g)==="[object Date]"}c.__isDate=B;function y(g){return typeof g=="object"&&w(g)==="[object Array]"}c.__isArray=y;function o(g){return typeof g=="object"&&w(g)==="[object RegExp]"}c.__isRegExp=o;function u(g){var d="";return g.global&&(d+="g"),g.ignoreCase&&(d+="i"),g.multiline&&(d+="m"),d}return c.__getRegExpFlags=u,c}();typeof s=="object"&&s.exports&&(s.exports=l)}),ne=N((h,s)=>{var l=ee();s.exports=function(c,w){return c=c||{},Object.keys(w).forEach(function(B){typeof c[B]>"u"&&(c[B]=l(w[B]))}),c}}),re=N((h,s)=>{s.exports=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531],[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]]}),oe=N((h,s)=>{"use strict";var l=ne(),c=re(),w={nul:0,control:0};s.exports=function(u){return B(u,w)},s.exports.config=function(u){return u=l(u||{},w),function(g){return B(g,u)}};function B(u,g){if(typeof u!="string")return y(u,g);for(var d=0,E=0;E<u.length;E++){var p=y(u.charCodeAt(E),g);if(p<0)return-1;d+=p}return d}function y(u,g){return u===0?g.nul:u<32||u>=127&&u<160?g.control:o(u)?0:1+(u>=4352&&(u<=4447||u==9001||u==9002||u>=11904&&u<=42191&&u!=12351||u>=44032&&u<=55203||u>=63744&&u<=64255||u>=65040&&u<=65049||u>=65072&&u<=65135||u>=65280&&u<=65376||u>=65504&&u<=65510||u>=131072&&u<=196605||u>=196608&&u<=262141))}function o(u){var g=0,d=c.length-1,E;if(u<c[0][0]||u>c[d][1])return!1;for(;d>=g;)if(E=Math.floor((g+d)/2),u>c[E][1])g=E+1;else if(u<c[E][0])d=E-1;else return!0;return!1}}),fe=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});function s(l){let c=l.substr(1).match(/[:-][-]+[:-]\+/g);return c==null&&(c=l.substr(1).match(/[:=][=]+[:=]\+/g)),c==null?[]:c.map(w=>w.length)}h.default=s}),ie=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});function s(l,c){let w=l.bMarks[c]+l.blkIndent,B=l.eMarks[c];return l.src.substr(w,B-w)}h.default=s}),ue=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});var s=class{constructor(){this.Success=!1,this.ColumnWidths=[],this.ColumnOffsets=[],this.ColumnAlignments=[],this.HeaderLess=!1,this.HeaderLines=[],this.RowLines=[],this.SeparatorLineOffsets=[],this.CurrentLine=0}};h.default=s}),se=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});var s=oe(),l=fe(),c=gt(),w=ie(),B=ue();function y(g,d,E){let p=new B.default,A=(0,w.default)(g,d);if(A.charAt(0)!=="+"||(p.ColumnWidths=(0,l.default)(A),p.ColumnWidths.length===0))return p;p.ColumnAlignments=p.ColumnWidths.map(v=>c.default.None),A.indexOf(":")>=0&&(p.HeaderLess=!0,p.ColumnAlignments=o(A,p.ColumnWidths),A=A.replace(/[:]/g,"-"));let b=new RegExp("^\\+"+p.ColumnWidths.map(v=>`[=:][=]{${v-3}}[=:]\\+`).join("")+"$");p.ColumnOffsets=[0];for(let v=0;v<p.ColumnWidths.length-1;v++)p.ColumnOffsets.push(p.ColumnOffsets[v]+p.ColumnWidths[v]);let m=new RegExp("^\\|"+p.ColumnWidths.map(v=>`([^|]{${Math.ceil((v-1)/2)},${v-1}})\\|`).join("")+"$");p.SeparatorLineOffsets.push(d);let O=[],I=d+1;for(;I<=E;I++){let v=(0,w.default)(g,I);if(v.charCodeAt(0)===43){if(O.length===0)return p;if(p.SeparatorLineOffsets.push(I),v===A)p.RowLines.push(O),p.HeaderLines.length===0&&(p.HeaderLess=!0);else if(!p.HeaderLess&&v.match(b)){if(p.HeaderLines.length>0||p.RowLines.length>0)return p;p.HeaderLines=O,v.indexOf(":")>=0&&(p.ColumnAlignments=o(v,p.ColumnWidths))}else return p;O=[]}else if(v.charCodeAt(0)===124){let U=v.match(m);if(U===null)return p;let _=u(U,p.ColumnWidths);if(_===null)return p;O.push(_)}else{if(O.length===0&&(p.HeaderLines.length>0||p.RowLines.length>0))break;return p}}return p.CurrentLine=I,p.Success=!0,p}h.default=y;function o(g,d){let E=[],p=1,A=-1;for(let b=0;b<d.length;b++){A+=d[b];let m=c.default.None;g.charAt(A)===":"?g.charAt(p)===":"?m=c.default.Center:m=c.default.Right:g.charAt(p)===":"&&(m=c.default.Left),E.push(m),p+=d[b]}return E}function u(g,d){let E=[];for(var p=0;p<d.length;p++){let A=g[p+1];if(s(A)+1!==d[p])return null;E.push(A)}return E}}),le=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});var s=Qt(),l=te(),c=se();function w(B){return function(y,o,u,g){if((0,l.default)(y,o)!==43)return!1;let d=(0,c.default)(y,o,u);return d.Success?(g||((0,s.default)(B,y,d),y.line=d.CurrentLine),!0):!1}}h.default=w}),yt=N(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});var s=le();function l(c,w){c.block.ruler.before("table","gridtable",(0,s.default)(c))}h.default=l}),dt={};Jt(dt,{__esModule:()=>he,default:()=>pe});var ae=pt(yt());Zt(dt,pt(yt()));var he=!0,{default:ct,...ce}=ae,pe=ct!==void 0?ct:ce;export{he as __esModule,pe as default};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=markdown-it-gridtables.bundle.js.map