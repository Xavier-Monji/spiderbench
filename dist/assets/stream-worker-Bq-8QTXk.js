(function(){var e=Object.defineProperty,t=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function r(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function i(e,t){return new Qr[e](t)}function a(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function o(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function s(){let e=o(`canvas`);return e.style.display=`block`,e}function c(e){ei=e}function l(){return ei}function u(...e){let t=`THREE.`+e.shift();ei?ei(`log`,t,...e):console.log(t,...e)}function d(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function f(...e){e=d(e);let t=`THREE.`+e.shift();if(ei)ei(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function p(...e){e=d(e);let t=`THREE.`+e.shift();if(ei)ei(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function m(...e){let t=e.join(` `);t in $r||($r[t]=!0,f(...e))}function h(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function g(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ri[e&255]+ri[e>>8&255]+ri[e>>16&255]+ri[e>>24&255]+`-`+ri[t&255]+ri[t>>8&255]+`-`+ri[t>>16&15|64]+ri[t>>24&255]+`-`+ri[n&63|128]+ri[n>>8&255]+`-`+ri[n>>16&255]+ri[n>>24&255]+ri[r&255]+ri[r>>8&255]+ri[r>>16&255]+ri[r>>24&255]).toLowerCase()}function _(e,t,n){return Math.max(t,Math.min(n,e))}function v(e,t){return(e%t+t)%t}function y(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function b(e,t,n){return e===t?0:(n-e)/(t-e)}function x(e,t,n){return(1-n)*e+n*t}function S(e,t,n,r){return x(e,t,1-Math.exp(-n*r))}function C(e,t=1){return t-Math.abs(v(e,t*2)-t)}function w(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function T(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function E(e,t){return e+Math.floor(Math.random()*(t-e+1))}function D(e,t){return e+Math.random()*(t-e)}function O(e){return e*(.5-Math.random())}function k(e){e!==void 0&&(ii=e);let t=ii+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A(e){return e*ai}function j(e){return e*oi}function M(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ee(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function N(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function te(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),p=o((t-r)/2),m=a((r-t)/2),h=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*p,s*l);break;case`YZY`:e.set(c*p,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*p,s*u,s*l);break;case`XZX`:e.set(s*u,c*h,c*m,s*l);break;case`YXY`:e.set(c*m,s*u,c*h,s*l);break;case`ZYZ`:e.set(c*h,c*m,s*u,s*l);break;default:f(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ne(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function P(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function re(){let e={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=F(e.r),e.g=F(e.g),e.b=F(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ie(e.r),e.g=ie(e.g),e.b=ie(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Er:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return m(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return m(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Tr]:{primaries:t,whitePoint:r,transfer:Er,toXYZ:pi,fromXYZ:mi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wr},outputColorSpaceConfig:{drawingBufferColorSpace:wr}},[wr]:{primaries:t,whitePoint:r,transfer:Dr,toXYZ:pi,fromXYZ:mi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wr}}}),e}function F(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ie(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?_i.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(f(`Texture: Unable to serialize Texture.`),{})}function I(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function oe(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ha.fromArray(e,a);let o=i.x*Math.abs(Ha.x)+i.y*Math.abs(Ha.y)+i.z*Math.abs(Ha.z),s=t.dot(Ha),c=n.dot(Ha),l=r.dot(Ha);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function se(){let e=/* @__PURE__ */ new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=/* @__PURE__ */ new Uint32Array(512),i=/* @__PURE__ */ new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=/* @__PURE__ */ new Uint32Array(2048),o=/* @__PURE__ */ new Uint32Array(64),s=/* @__PURE__ */ new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function L(e){Math.abs(e)>65504&&f(`DataUtils.toHalfFloat(): Value out of range.`),e=_(e,-65504,65504),Ua.floatView[0]=e;let t=Ua.uint32View[0],n=t>>23&511;return Ua.baseTable[n]+((t&8388607)>>Ua.shiftTable[n])}function ce(e){let t=e>>10;return Ua.uint32View[0]=Ua.mantissaTable[Ua.offsetTable[t]+(e&1023)]+Ua.exponentTable[t],Ua.floatView[0]}function le(e,t,n,r,i,a){ko.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ao.copy(ko):(Ao.x=a*ko.x-i*ko.y,Ao.y=i*ko.x+a*ko.y),e.copy(t),e.x+=Ao.x,e.y+=Ao.y,e.applyMatrix4(jo)}function ue(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;is.copy(s),is.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(is);return l<n.near||l>n.far?null:{distance:l,point:is.clone(),object:e}}function R(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Qo),e.getVertexPosition(c,$o),e.getVertexPosition(l,es);let u=ue(e,t,n,r,Qo,$o,es,rs);if(u){let e=new W;Oa.getBarycoord(rs,Qo,$o,es,e),i&&(u.uv=Oa.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Oa.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Oa.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Oa.getNormal(Qo,$o,es,t.normal),u.face=t,u.barycoord=e}return u}function de(e,t){return e-t}function fe(e,t){return e.z-t.z}function pe(e,t){return t.z-e.z}function me(e,t,n=0){let r=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){let i=e.count;for(let a=0;a<i;a++)for(let i=0;i<r;i++)t.setComponent(a+n,i,e.getComponent(a,i))}else t.array.set(e.array,n*r);t.needsUpdate=!0}function he(e,t){if(e.constructor!==t.constructor){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)t[r]=e[r]}else{let n=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,n))}}function ge(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Zs.fromBufferAttribute(s,i),Qs.fromBufferAttribute(s,a),n.distanceSqToSegment(Zs,Qs,nc,rc)>r)return;nc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(nc);if(!(c<t.near||c>t.far))return{distance:c,point:rc.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}function _e(e,t,n,r,i,a,o){let s=dc.distanceSqToPoint(e);if(s<n){let n=new W;dc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function ve(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function ye(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function be(e,t){let n=1-e;return n*n*t}function xe(e,t){return 2*(1-e)*e*t}function Se(e,t){return e*e*t}function Ce(e,t,n,r){return be(e,t)+xe(e,n)+Se(e,r)}function z(e,t){let n=1-e;return n*n*n*t}function we(e,t){let n=1-e;return 3*n*n*e*t}function Te(e,t){return 3*(1-e)*e*e*t}function Ee(e,t){return e*e*e*t}function B(e,t,n,r,i){return z(e,t)+we(e,n)+Te(e,r)+Ee(e,i)}function De(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Oe(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Pe(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ke(a,o,n,s,c,l,0),o}function Oe(e,t,n,r,i){let a;if(i===rt(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=et(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=et(i/r|0,e[i],e[i+1],a);return a&&Ke(a,a.next)&&(tt(a),a=a.next),a}function V(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ke(n,n.next)||Ge(n.prev,n,n.next)===0)){if(tt(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ke(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Re(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?je(e,r,i,a):Ae(e)){t.push(c.i,e.i,l.i),tt(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Me(V(e),t),ke(e,t,n,r,i,a,2)):o===2&&Ne(e,t,n,r,i,a):ke(V(e),t,n,r,i,a,1);break}}}function Ae(e){let t=e.prev,n=e,r=e.next;if(Ge(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ue(i,s,a,c,o,l,m.x,m.y)&&Ge(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function je(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ge(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Be(p,m,t,n,r),v=Be(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ue(s,u,c,d,l,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ue(s,u,c,d,l,f,b.x,b.y)&&Ge(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ue(s,u,c,d,l,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ue(s,u,c,d,l,f,b.x,b.y)&&Ge(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Me(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ke(r,i)&&qe(r,n,n.next,i)&&Ze(r,i)&&Ze(i,r)&&(t.push(r.i,n.i,i.i),tt(n),tt(n.next),n=e=i),n=n.next}while(n!==e);return V(n)}function Ne(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&We(o,e)){let s=$e(o,e);o=V(o,o.next),s=V(s,s.next),ke(o,t,n,r,i,a,0),ke(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Pe(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Oe(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ve(o))}i.sort(Fe);for(let e=0;e<i.length;e++)n=H(i[e],n);return n}function Fe(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function H(e,t){let n=Ie(e,t);if(!n)return t;let r=$e(n,e);return V(r,r.next),V(n,n.next)}function Ie(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ke(e,n))return n;do{if(Ke(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&He(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ze(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Le(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Le(e,t){return Ge(e.prev,e,t.prev)<0&&Ge(t.next,e,e.next)<0}function Re(e,t,n,r){let i=e;do i.z===0&&(i.z=Be(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ze(i)}function ze(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Be(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ve(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function He(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ue(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&He(e,t,n,r,i,a,o,s)}function We(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Xe(e,t)&&(Ze(e,t)&&Ze(t,e)&&Qe(e,t)&&(Ge(e.prev,e,t.prev)||Ge(e,t.prev,t))||Ke(e,t)&&Ge(e.prev,e,e.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ke(e,t){return e.x===t.x&&e.y===t.y}function qe(e,t,n,r){let i=Ye(Ge(e,t,n)),a=Ye(Ge(e,t,r)),o=Ye(Ge(n,r,e)),s=Ye(Ge(n,r,t));return!!(i!==a&&o!==s||i===0&&Je(e,n,t)||a===0&&Je(e,r,t)||o===0&&Je(n,e,r)||s===0&&Je(n,t,r))}function Je(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ye(e){return e>0?1:e<0?-1:0}function Xe(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&qe(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ze(e,t){return Ge(e.prev,e,e.next)<0?Ge(e,t,e.next)>=0&&Ge(e,e.prev,t)>=0:Ge(e,t,e.prev)<0||Ge(e,e.next,t)<0}function Qe(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function $e(e,t){let n=nt(e.i,e.x,e.y),r=nt(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function et(e,t,n,r){let i=nt(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function tt(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function nt(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rt(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function it(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function at(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function ot(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function st(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function ct(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function lt(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(dt(i))i.isRenderTargetTexture?(f(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(dt(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ut(e){let t={};for(let n=0;n<e.length;n++){let r=lt(e[n]);for(let e in r)t[e]=r[e]}return t}function dt(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ft(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function pt(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:hi.workingColorSpace}function mt(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ht(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function gt(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function _t(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function vt(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}function yt(e,t,n,r,i=30){let a=e.clone();a.name=t;let o=[];for(let e=0;e<a.tracks.length;++e){let t=a.tracks[e],s=t.getValueSize(),c=[],l=[];for(let e=0;e<t.times.length;++e){let a=t.times[e]*i;if(!(a<n||a>=r)){c.push(t.times[e]);for(let n=0;n<s;++n)l.push(t.values[e*s+n])}}c.length!==0&&(t.times=mt(c,t.times.constructor),t.values=mt(l,t.values.constructor),o.push(t))}a.tracks=o;let s=1/0;for(let e=0;e<a.tracks.length;++e)s>a.tracks[e].times[0]&&(s=a.tracks[e].times[0]);for(let e=0;e<a.tracks.length;++e)a.tracks[e].shift(-1*s);return a.resetDuration(),a}function bt(e,t=0,n=e,r=30){r<=0&&(r=30);let i=n.tracks.length,a=t/r;for(let t=0;t<i;++t){let r=n.tracks[t],i=r.ValueTypeName;if(i===`bool`||i===`string`)continue;let o=e.tracks.find(function(e){return e.name===r.name&&e.ValueTypeName===i});if(o===void 0)continue;let s=0,c=r.getValueSize();r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(s=c/3);let l=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(l=u/3);let d=r.times.length-1,f;if(a<=r.times[0]){let e=s,t=c-s;f=r.values.slice(e,t)}else if(a>=r.times[d]){let e=d*c+s,t=e+c-s;f=r.values.slice(e,t)}else{let e=r.createInterpolant(),t=s,n=c-s;e.evaluate(a),f=e.resultBuffer.slice(t,n)}i===`quaternion`&&new ci().fromArray(f).normalize().conjugate().toArray(f);let p=o.times.length;for(let e=0;e<p;++e){let t=e*u+l;if(i===`quaternion`)ci.multiplyQuaternionsFlat(o.values,t,f,0,o.values,t);else{let e=u-l*2;for(let n=0;n<e;++n)o.values[t+n]-=f[n]}}}return e.blendMode=yr,e}function xt(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function St(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ct(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=xt(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=St(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}function wt(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}function Tt(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return ql;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Zl;case`color`:return Kl;case`quaternion`:return Yl;case`bool`:case`boolean`:return Gl;case`string`:return Xl}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Et(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Tt(e.type);if(e.times===void 0){let t=[],n=[];vt(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),ht(e.settings)&&(n.settings={inTangents:mt(e.settings.inTangents,Float32Array),outTangents:mt(e.settings.outTangents,Float32Array)}),n}function Dt(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}function Ot(){this._document.hidden===!1&&this.reset()}function kt(e,t){return e.distance-t.distance}function At(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)At(r[e],t,n,!0)}}function jt(e){let t=[];e.isBone===!0&&t.push(e);for(let n=0;n<e.children.length;n++)t.push(...jt(e.children[n]));return t}function Mt(e,t,n,r,i,a,o){wf.set(i,a,o).unproject(r);let s=t[e];if(s!==void 0){let e=n.getAttribute(`position`);for(let t=0,n=s.length;t<n;t++)e.setXYZ(s[t],wf.x,wf.y,wf.z)}}function Nt(e,t){let n=e.image&&e.image.width?e.image.width/e.image.height:1;return n>t?(e.repeat.x=1,e.repeat.y=n/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/n,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function Pt(e,t){let n=e.image&&e.image.width?e.image.width/e.image.height:1;return n>t?(e.repeat.x=t/n,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=n/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function Ft(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function It(e,t,n,r){let i=Lt(r);switch(n){case hn:return e*t;case bn:return e*t/i.components*i.byteLength;case xn:return e*t/i.components*i.byteLength;case Sn:return e*t*2/i.components*i.byteLength;case Cn:return e*t*2/i.components*i.byteLength;case gn:return e*t*3/i.components*i.byteLength;case _n:return e*t*4/i.components*i.byteLength;case Tn:return e*t*4/i.components*i.byteLength;case En:case Dn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case On:case kn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jn:case Nn:return Math.max(e,16)*Math.max(t,8)/4;case An:case Mn:return Math.max(e,8)*Math.max(t,8)/2;case Pn:case Fn:case Ln:case Rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case In:case zn:case Bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Un:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Wn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Gn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Kn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case qn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Jn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Yn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Zn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Qn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case $n:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case er:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case tr:case nr:case rr:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ir:case ar:return Math.ceil(e/4)*Math.ceil(t/4)*8;case or:case sr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Lt(e){switch(e){case tn:case nn:return{byteLength:1,components:1};case an:case rn:case ln:return{byteLength:2,components:1};case un:case dn:return{byteLength:2,components:4};case sn:case on:case cn:return{byteLength:4,components:1};case pn:case mn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,U,ci,W,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,G,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,K,Ja,Ya,Xa,Za,Qa,$a,eo,to,q,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf=t((()=>{Rt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bt=`attached`,Vt=`detached`,Ht=1e3,Ut=1001,Wt=1002,Gt=1003,Kt=1004,qt=1004,Jt=1005,Yt=1005,Xt=1006,Zt=1007,Qt=1007,$t=1008,en=1008,tn=1009,nn=1010,rn=1011,an=1012,on=1013,sn=1014,cn=1015,ln=1016,un=1017,dn=1018,fn=1020,pn=35902,mn=35899,hn=1021,gn=1022,_n=1023,vn=1026,yn=1027,bn=1028,xn=1029,Sn=1030,Cn=1031,wn=1032,Tn=1033,En=33776,Dn=33777,On=33778,kn=33779,An=35840,jn=35841,Mn=35842,Nn=35843,Pn=36196,Fn=37492,In=37496,Ln=37488,Rn=37489,zn=37490,Bn=37491,Vn=37808,Hn=37809,Un=37810,Wn=37811,Gn=37812,Kn=37813,qn=37814,Jn=37815,Yn=37816,Xn=37817,Zn=37818,Qn=37819,$n=37820,er=37821,tr=36492,nr=36494,rr=36495,ir=36283,ar=36284,or=36285,sr=36286,cr=2200,lr=2201,ur=2202,dr=2300,fr=2301,pr=2302,mr=2303,hr=2400,gr=2401,_r=2402,vr=2500,yr=2501,br=3200,xr=3201,Sr=3202,Cr=3203,wr=`srgb`,Tr=`srgb-linear`,Er=`linear`,Dr=`srgb`,Or=7680,kr=7681,Ar=7682,jr=7683,Mr=34055,Nr=34056,Pr=5386,Fr=35044,Ir=35048,Lr=35040,Rr=35045,zr=35049,Br=35041,Vr=35046,Hr=35050,Ur=35042,Wr=`300 es`,Gr=2e3,Kr=2001,qr={COMPUTE:`compute`,RENDER:`render`},Jr={PERSPECTIVE:`perspective`,LINEAR:`linear`,FLAT:`flat`},Yr={NORMAL:`normal`,CENTROID:`centroid`,SAMPLE:`sample`,FIRST:`first`,EITHER:`either`},Xr={TEXTURE_COMPARE:`depthTextureCompare`},Zr={NONE:0,SHARED:1,FULL:2},Qr={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array},$r={},ei=null,ti={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ri=/* @__PURE__ */ `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ii=1234567,ai=Math.PI/180,oi=180/Math.PI,si={DEG2RAD:ai,RAD2DEG:oi,generateUUID:g,clamp:_,euclideanModulo:v,mapLinear:y,inverseLerp:b,lerp:x,damp:S,pingpong:C,smoothstep:w,smootherstep:T,randInt:E,randFloat:D,randFloatSpread:O,seededRandom:k,degToRad:A,radToDeg:j,isPowerOfTwo:M,ceilPowerOfTwo:ee,floorPowerOfTwo:N,setQuaternionFromProperEuler:te,normalize:P,denormalize:ne},U=class e{static#e=e.prototype.isVector2=!0;constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_(this.x,e.x,t.x),this.y=_(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_(this.x,e,t),this.y=_(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),p=s(r/2),m=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*p*m,this._y=c*p*u-d*l*m,this._z=c*l*m+d*p*u,this._w=c*l*u-d*p*m;break;case`YXZ`:this._x=d*l*u+c*p*m,this._y=c*p*u-d*l*m,this._z=c*l*m-d*p*u,this._w=c*l*u+d*p*m;break;case`ZXY`:this._x=d*l*u-c*p*m,this._y=c*p*u+d*l*m,this._z=c*l*m+d*p*u,this._w=c*l*u-d*p*m;break;case`ZYX`:this._x=d*l*u-c*p*m,this._y=c*p*u+d*l*m,this._z=c*l*m-d*p*u,this._w=c*l*u+d*p*m;break;case`YZX`:this._x=d*l*u+c*p*m,this._y=c*p*u+d*l*m,this._z=c*l*m-d*p*u,this._w=c*l*u-d*p*m;break;case`XZY`:this._x=d*l*u-c*p*m,this._y=c*p*u-d*l*m,this._z=c*l*m+d*p*u,this._w=c*l*u+d*p*m;break;default:f(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static#e=e.prototype.isVector3=!0;constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ui.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ui.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_(this.x,e.x,t.x),this.y=_(this.y,e.y,t.y),this.z=_(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_(this.x,e,t),this.y=_(this.y,e,t),this.z=_(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return li.copy(this).projectOnVector(e),this.sub(li)}reflect(e){return this.sub(li.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},li=/*@__PURE__*/ new W,ui=/*@__PURE__*/ new ci,di=class e{static#e=e.prototype.isMatrix3=!0;constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return m(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(fi.makeScale(e,t)),this}rotate(e){return m(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(fi.makeRotation(-e)),this}translate(e,t){return m(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(fi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fi=/*@__PURE__*/ new di,pi=/*@__PURE__*/ new di().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mi=/*@__PURE__*/ new di().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),hi=/*@__PURE__*/ re(),_i=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=o(`canvas`)),gi.width=e.width,gi.height=e.height;let t=gi.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=o(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=F(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(F(t[e]/255)*255):t[e]=F(t[e]);return{data:t,width:e.width,height:e.height}}return f(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},vi=0,yi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vi++}),this.uuid=g(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ae(r[t].image)):e.push(ae(r[t]))}else e=ae(r);n.url=e}return t||(e.images[this.uuid]=n),n}},bi=class extends yi{constructor(e=null){m(`Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.`),super(e),this.isSource=!0}},xi=0,Si=/*@__PURE__*/ new W,Ci=class e extends ni{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ut,i=Ut,a=Xt,o=$t,s=_n,c=tn,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xi++}),this.uuid=g(),this.name=``,this.source=new yi(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new di,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Si).x}get height(){return this.source.getSize(Si).y}get depth(){return this.source.getSize(Si).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){f(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){f(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ht:e.x-=Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Wt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ht:e.y-=Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Wt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},Ci.DEFAULT_IMAGE=null,Ci.DEFAULT_MAPPING=300,Ci.DEFAULT_ANISOTROPY=1,wi=class e{static#e=e.prototype.isVector4=!0;constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_(this.x,e.x,t.x),this.y=_(this.y,e.y,t.y),this.z=_(this.z,e.z,t.z),this.w=_(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_(this.x,e,t),this.y=_(this.y,e,t),this.z=_(this.z,e,t),this.w=_(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ti=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wi(0,0,e,t),this.scissorTest=!1,this.viewport=new wi(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},i=new Ci(r),a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new yi(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ei=class extends Ti{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Di=class extends Ci{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=/* @__PURE__ */ new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oi=class extends Ei{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Di(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},ki=class extends Ci{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ai=class extends Ei{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ki(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},ji=class e{static#e=e.prototype.isMatrix4=!0;constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),i=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pi,e,Fi)}lookAt(e,t,n){let r=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Ii.crossVectors(n,Ri),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Ii.crossVectors(n,Ri)),Ii.normalize(),Li.crossVectors(Ri,Ii),r[0]=Ii.x,r[4]=Li.x,r[8]=Ri.x,r[1]=Ii.y,r[5]=Li.y,r[9]=Ri.y,r[2]=Ii.z,r[6]=Li.z,r[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Mi.set(r[0],r[1],r[2]).length(),o=Mi.set(r[4],r[5],r[6]).length(),s=Mi.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ni.copy(this);let c=1/a,l=1/o,u=1/s;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=l,Ni.elements[5]*=l,Ni.elements[6]*=l,Ni.elements[8]*=u,Ni.elements[9]*=u,Ni.elements[10]*=u,t.setFromRotationMatrix(Ni),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Gr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Gr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mi=/*@__PURE__*/ new W,Ni=/*@__PURE__*/ new ji,Pi=/*@__PURE__*/ new W(0,0,0),Fi=/*@__PURE__*/ new W(1,1,1),Ii=/*@__PURE__*/ new W,Li=/*@__PURE__*/ new W,Ri=/*@__PURE__*/ new W,zi=/*@__PURE__*/ new ji,Bi=/*@__PURE__*/ new ci,Vi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],p=r[10];switch(t){case`XYZ`:this._y=Math.asin(_(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-_(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(_(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-_(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(_(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,p));break;case`XZY`:this._z=Math.asin(-_(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,p),this._y=0);break;default:f(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bi.setFromEuler(this),this.setFromQuaternion(Bi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Vi.DEFAULT_ORDER=`XYZ`,Hi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Ui=0,Wi=/*@__PURE__*/ new W,Gi=/*@__PURE__*/ new ci,Ki=/*@__PURE__*/ new ji,qi=/*@__PURE__*/ new W,Ji=/*@__PURE__*/ new W,Yi=/*@__PURE__*/ new W,Xi=/*@__PURE__*/ new ci,Zi=/*@__PURE__*/ new W(1,0,0),Qi=/*@__PURE__*/ new W(0,1,0),$i=/*@__PURE__*/ new W(0,0,1),ea={type:`added`},ta={type:`removed`},na={type:`childadded`,child:null},ra={type:`childremoved`,child:null},ia=class e extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ui++}),this.uuid=g(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Vi,r=new ci,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ji},normalMatrix:{value:new di}}),this.matrix=new ji,this.matrixWorld=new ji,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Zi,e)}rotateY(e){return this.rotateOnAxis(Qi,e)}rotateZ(e){return this.rotateOnAxis($i,e)}translateOnAxis(e,t){return Wi.copy(e).applyQuaternion(this.quaternion),this.position.add(Wi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zi,e)}translateY(e){return this.translateOnAxis(Qi,e)}translateZ(e){return this.translateOnAxis($i,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ji,qi,this.up):Ki.lookAt(qi,Ji,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Ki),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(p(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ea),na.child=e,this.dispatchEvent(na),na.child=null):p(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ta),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ea),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Yi),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Xi,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}},ia.DEFAULT_UP=/*@__PURE__*/ new W(0,1,0),ia.DEFAULT_MATRIX_AUTO_UPDATE=!0,ia.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,aa=class extends ia{constructor(){super(),this.isGroup=!0,this.type=`Group`}},oa={type:`move`},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oa)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new aa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ca={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},la={h:0,s:0,l:0},ua={h:0,s:0,l:0},G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hi.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=hi.workingColorSpace){return this.r=e,this.g=t,this.b=n,hi.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=hi.workingColorSpace){if(e=v(e,1),t=_(t,0,1),n=_(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=I(i,r,e+1/3),this.g=I(i,r,e),this.b=I(i,r,e-1/3)}return hi.colorSpaceToWorking(this,r),this}setStyle(e,t=wr){function n(t){t!==void 0&&parseFloat(t)<1&&f(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:f(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);f(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wr){let n=ca[e.toLowerCase()];return n===void 0?f(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=F(e.r),this.g=F(e.g),this.b=F(e.b),this}copyLinearToSRGB(e){return this.r=ie(e.r),this.g=ie(e.g),this.b=ie(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wr){return hi.workingToColorSpace(da.copy(this),e),Math.round(_(da.r*255,0,255))*65536+Math.round(_(da.g*255,0,255))*256+Math.round(_(da.b*255,0,255))}getHexString(e=wr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hi.workingColorSpace){hi.workingToColorSpace(da.copy(this),t);let n=da.r,r=da.g,i=da.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=hi.workingColorSpace){return hi.workingToColorSpace(da.copy(this),t),e.r=da.r,e.g=da.g,e.b=da.b,e}getStyle(e=wr){hi.workingToColorSpace(da.copy(this),e);let t=da.r,n=da.g,r=da.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(la),this.setHSL(la.h+e,la.s+t,la.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(la),e.getHSL(ua);let n=x(la.h,ua.h,t),r=x(la.s,ua.s,t),i=x(la.l,ua.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},da=/*@__PURE__*/ new G,G.NAMES=ca,fa=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},pa=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new G(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ma=class extends ia{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ha=/*@__PURE__*/ new W,ga=/*@__PURE__*/ new W,_a=/*@__PURE__*/ new W,va=/*@__PURE__*/ new W,ya=/*@__PURE__*/ new W,ba=/*@__PURE__*/ new W,xa=/*@__PURE__*/ new W,Sa=/*@__PURE__*/ new W,Ca=/*@__PURE__*/ new W,wa=/*@__PURE__*/ new W,Ta=/*@__PURE__*/ new wi,Ea=/*@__PURE__*/ new wi,Da=/*@__PURE__*/ new wi,Oa=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ha.subVectors(e,t),r.cross(ha);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ha.subVectors(r,t),ga.subVectors(n,t),_a.subVectors(e,t);let a=ha.dot(ha),o=ha.dot(ga),s=ha.dot(_a),c=ga.dot(ga),l=ga.dot(_a),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,va)!==null&&va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,va)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,va.x),s.addScaledVector(a,va.y),s.addScaledVector(o,va.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ta.setScalar(0),Ea.setScalar(0),Da.setScalar(0),Ta.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ta,i.x),a.addScaledVector(Ea,i.y),a.addScaledVector(Da,i.z),a}static isFrontFacing(e,t,n,r){return ha.subVectors(n,t),ga.subVectors(e,t),ha.cross(ga).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ha.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),ha.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ya.subVectors(r,n),ba.subVectors(i,n),Sa.subVectors(e,n);let s=ya.dot(Sa),c=ba.dot(Sa);if(s<=0&&c<=0)return t.copy(n);Ca.subVectors(e,r);let l=ya.dot(Ca),u=ba.dot(Ca);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ya,a);wa.subVectors(e,i);let f=ya.dot(wa),p=ba.dot(wa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ba,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return xa.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(xa,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ya,a).addScaledVector(ba,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ka=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ja.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ja.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ja.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ja):ja.fromBufferAttribute(r,t),ja.applyMatrix4(e.matrixWorld),this.expandByPoint(ja);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ja),ja.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),Ba.subVectors(this.max,za),Na.subVectors(e.a,za),Pa.subVectors(e.b,za),Fa.subVectors(e.c,za),Ia.subVectors(Pa,Na),La.subVectors(Fa,Pa),Ra.subVectors(Na,Fa);let t=[0,-Ia.z,Ia.y,0,-La.z,La.y,0,-Ra.z,Ra.y,Ia.z,0,-Ia.x,La.z,0,-La.x,Ra.z,0,-Ra.x,-Ia.y,Ia.x,0,-La.y,La.x,0,-Ra.y,Ra.x,0];return!oe(t,Na,Pa,Fa,Ba)||(t=[1,0,0,0,1,0,0,0,1],!oe(t,Na,Pa,Fa,Ba))?!1:(Va.crossVectors(Ia,La),t=[Va.x,Va.y,Va.z],oe(t,Na,Pa,Fa,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ja).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ja).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Aa=[/*@__PURE__*/ new W,/*@__PURE__*/ new W,/*@__PURE__*/ new W,/*@__PURE__*/ new W,/*@__PURE__*/ new W,/*@__PURE__*/ new W,/*@__PURE__*/ new W,/*@__PURE__*/ new W],ja=/*@__PURE__*/ new W,Ma=/*@__PURE__*/ new ka,Na=/*@__PURE__*/ new W,Pa=/*@__PURE__*/ new W,Fa=/*@__PURE__*/ new W,Ia=/*@__PURE__*/ new W,La=/*@__PURE__*/ new W,Ra=/*@__PURE__*/ new W,za=/*@__PURE__*/ new W,Ba=/*@__PURE__*/ new W,Va=/*@__PURE__*/ new W,Ha=/*@__PURE__*/ new W,Ua=/*@__PURE__*/ se(),Wa=class{static toHalfFloat(e){return L(e)}static fromHalfFloat(e){return ce(e)}},Ga=/*@__PURE__*/ new W,Ka=/*@__PURE__*/ new U,qa=0,K=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Fr,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXYZ(t,Ga.x,Ga.y,Ga.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix4(e),this.setXYZ(t,Ga.x,Ga.y,Ga.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyNormalMatrix(e),this.setXYZ(t,Ga.x,Ga.y,Ga.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.transformDirection(e),this.setXYZ(t,Ga.x,Ga.y,Ga.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ne(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=P(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ne(t,this.array)),t}setX(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ne(t,this.array)),t}setY(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ne(t,this.array)),t}setZ(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ne(t,this.array)),t}setW(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array),i=P(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Ja=class extends K{constructor(e,t,n){super(new Int8Array(e),t,n)}},Ya=class extends K{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Xa=class extends K{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Za=class extends K{constructor(e,t,n){super(new Int16Array(e),t,n)}},Qa=class extends K{constructor(e,t,n){super(new Uint16Array(e),t,n)}},$a=class extends K{constructor(e,t,n){super(new Int32Array(e),t,n)}},eo=class extends K{constructor(e,t,n){super(new Uint32Array(e),t,n)}},to=class extends K{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ce(this.array[e*this.itemSize]);return this.normalized&&(t=ne(t,this.array)),t}setX(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize]=L(t),this}getY(e){let t=ce(this.array[e*this.itemSize+1]);return this.normalized&&(t=ne(t,this.array)),t}setY(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+1]=L(t),this}getZ(e){let t=ce(this.array[e*this.itemSize+2]);return this.normalized&&(t=ne(t,this.array)),t}setZ(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+2]=L(t),this}getW(e){let t=ce(this.array[e*this.itemSize+3]);return this.normalized&&(t=ne(t,this.array)),t}setW(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+3]=L(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array)),this.array[e+0]=L(t),this.array[e+1]=L(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array)),this.array[e+0]=L(t),this.array[e+1]=L(n),this.array[e+2]=L(r),this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array),i=P(i,this.array)),this.array[e+0]=L(t),this.array[e+1]=L(n),this.array[e+2]=L(r),this.array[e+3]=L(i),this}},q=class extends K{constructor(e,t,n){super(new Float32Array(e),t,n)}},no=/*@__PURE__*/ new ka,ro=/*@__PURE__*/ new W,io=/*@__PURE__*/ new W,ao=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?no.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ro,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(io)),this.expandByPoint(ro.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},oo=0,so=/*@__PURE__*/ new ji,co=/*@__PURE__*/ new ia,lo=/*@__PURE__*/ new W,uo=/*@__PURE__*/ new ka,fo=/*@__PURE__*/ new ka,po=/*@__PURE__*/ new W,mo=class e extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oo++}),this.uuid=g(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(r(e)?eo:Qa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new di().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return so.makeRotationFromQuaternion(e),this.applyMatrix4(so),this}rotateX(e){return so.makeRotationX(e),this.applyMatrix4(so),this}rotateY(e){return so.makeRotationY(e),this.applyMatrix4(so),this}rotateZ(e){return so.makeRotationZ(e),this.applyMatrix4(so),this}translate(e,t,n){return so.makeTranslation(e,t,n),this.applyMatrix4(so),this}scale(e,t,n){return so.makeScale(e,t,n),this.applyMatrix4(so),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&f(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){p(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];uo.setFromBufferAttribute(n),this.morphTargetsRelative?(po.addVectors(this.boundingBox.min,uo.min),this.boundingBox.expandByPoint(po),po.addVectors(this.boundingBox.max,uo.max),this.boundingBox.expandByPoint(po)):(this.boundingBox.expandByPoint(uo.min),this.boundingBox.expandByPoint(uo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&p(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){p(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(uo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fo.setFromBufferAttribute(n),this.morphTargetsRelative?(po.addVectors(uo.min,fo.min),uo.expandByPoint(po),po.addVectors(uo.max,fo.max),uo.expandByPoint(po)):(uo.expandByPoint(fo.min),uo.expandByPoint(fo.max))}uo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)po.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(po));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)po.fromBufferAttribute(a,t),o&&(lo.fromBufferAttribute(e,t),po.add(lo)),r=Math.max(r,n.distanceToSquared(po))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&p(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){p(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new K(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,m=new U,h=new W,g=new W;function _(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),m.sub(d);let a=1/(f.x*m.y-m.x*f.y);isFinite(a)&&(h.copy(l).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(a),g.copy(u).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)C(e.getX(t+0)),C(e.getX(t+1)),C(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new K(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)po.fromBufferAttribute(e,t),po.normalize(),e.setXYZ(t,po.x,po.y,po.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new K(a,r,i)}if(this.index===null)return f(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ho=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Fr,this.updateRanges=[],this.version=0,this.uuid=g()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=g()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=g()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},go=/*@__PURE__*/ new W,_o=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix4(e),this.setXYZ(t,go.x,go.y,go.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyNormalMatrix(e),this.setXYZ(t,go.x,go.y,go.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.transformDirection(e),this.setXYZ(t,go.x,go.y,go.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ne(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=P(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ne(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ne(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ne(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ne(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=P(t,this.array),n=P(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array),i=P(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){u(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new K(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){u(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vo=/*@__PURE__*/ new W,yo=/*@__PURE__*/ new W,bo=/*@__PURE__*/ new di,xo=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vo.subVectors(n,t).cross(yo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(vo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bo.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},So=0,Co=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:So++}),this.uuid=g(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){f(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){f(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new xo().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},wo=class extends Co{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eo=/*@__PURE__*/ new W,Do=/*@__PURE__*/ new W,Oo=/*@__PURE__*/ new W,ko=/*@__PURE__*/ new U,Ao=/*@__PURE__*/ new U,jo=/*@__PURE__*/ new ji,Mo=/*@__PURE__*/ new W,No=/*@__PURE__*/ new W,Po=/*@__PURE__*/ new W,Fo=/*@__PURE__*/ new U,Io=/*@__PURE__*/ new U,Lo=/*@__PURE__*/ new U,Ro=class extends ia{constructor(e=new wo){if(super(),this.isSprite=!0,this.type=`Sprite`,To===void 0){To=new mo;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new ho(e,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute(`position`,new _o(t,3,0,!1)),To.setAttribute(`uv`,new _o(t,2,3,!1))}this.geometry=To,this.material=e,this.center=new U(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&p(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Do.setFromMatrixScale(this.matrixWorld),jo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Do.multiplyScalar(-Oo.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;le(Mo.set(-.5,-.5,0),Oo,a,Do,r,i),le(No.set(.5,-.5,0),Oo,a,Do,r,i),le(Po.set(.5,.5,0),Oo,a,Do,r,i),Fo.set(0,0),Io.set(1,0),Lo.set(1,1);let o=e.ray.intersectTriangle(Mo,No,Po,!1,Eo);if(o===null&&(le(No.set(-.5,.5,0),Oo,a,Do,r,i),Io.set(0,1),o=e.ray.intersectTriangle(Mo,Po,No,!1,Eo),o===null))return;let s=e.ray.origin.distanceTo(Eo);s<e.near||s>e.far||t.push({distance:s,point:Eo.clone(),uv:Oa.getInterpolation(Eo,Mo,No,Po,Fo,Io,Lo,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}},zo=/*@__PURE__*/ new W,Bo=/*@__PURE__*/ new W,Vo=class extends ia{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type=`LOD`,Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,i=0;for(;i<r.length&&!(t<r[i].distance);i++);return r.splice(i,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let e=t.splice(n,1);return this.remove(e[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){zo.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo(zo);this.getObjectForDistance(n).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){zo.setFromMatrixPosition(e.matrixWorld),Bo.setFromMatrixPosition(this.matrixWorld);let n=zo.distanceTo(Bo)/e.zoom;t[0].object.visible=!0;let r,i;for(r=1,i=t.length;r<i;r++){let e=t[r].distance;if(t[r].object.visible&&(e-=e*t[r].hysteresis),n>=e)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<i;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let e=0,r=n.length;e<r;e++){let r=n[e];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}},Ho=/*@__PURE__*/ new W,Uo=/*@__PURE__*/ new W,Wo=/*@__PURE__*/ new W,Go=/*@__PURE__*/ new W,Ko=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ho)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ho.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ho.copy(this.origin).addScaledVector(this.direction,t),Ho.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uo.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Go.copy(this.origin).sub(Uo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Wo),o=Go.dot(this.direction),s=-Go.dot(Wo),c=Go.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uo).addScaledVector(Wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ho.subVectors(e.center,this.origin);let n=Ho.dot(this.direction),r=Ho.dot(Ho)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ho)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,ee;if(y>=b&&y>=x?(w=s,D=u,A=p,ee=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,ee=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,ee=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let N=S/w,te=C/w,ne=1/w,P=T-N*D,re=E-te*D,F=O-N*A,ie=k-te*A,ae=j-N*ee,I=M-te*ee,oe=ae*ie-I*F,se=P*I-re*ae,L=F*re-ie*P;if(r){if(oe<0||se<0||L<0)return null}else if((oe<0||se<0||L<0)&&(oe>0||se>0||L>0))return null;let ce=oe+se+L;if(ce===0)return null;let le=ne*(oe*D+se*A+L*ee);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qo=class extends Co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jo=/*@__PURE__*/ new ji,Yo=/*@__PURE__*/ new Ko,Xo=/*@__PURE__*/ new ao,Zo=/*@__PURE__*/ new W,Qo=/*@__PURE__*/ new W,$o=/*@__PURE__*/ new W,es=/*@__PURE__*/ new W,ts=/*@__PURE__*/ new W,ns=/*@__PURE__*/ new W,rs=/*@__PURE__*/ new W,is=/*@__PURE__*/ new W,as=class extends ia{constructor(e=new mo,t=new qo){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ns.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ts.fromBufferAttribute(s,e),a?ns.addScaledVector(ts,r):ns.addScaledVector(ts.sub(t),r))}t.add(ns)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Yo.copy(e.ray).recast(e.near),!(Xo.containsPoint(Yo.origin)===!1&&(Yo.intersectSphere(Xo,Zo)===null||Yo.origin.distanceToSquared(Zo)>(e.far-e.near)**2))&&(Jo.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(Jo),(n.boundingBox===null||Yo.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Yo)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=R(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=R(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=R(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=R(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}},os=/*@__PURE__*/ new wi,ss=/*@__PURE__*/ new wi,cs=/*@__PURE__*/ new wi,ls=/*@__PURE__*/ new wi,us=/*@__PURE__*/ new ji,ds=/*@__PURE__*/ new W,fs=/*@__PURE__*/ new ao,ps=/*@__PURE__*/ new ji,ms=/*@__PURE__*/ new Ko,hs=class extends as{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=Bt,this.bindMatrix=new ji,this.bindMatrixInverse=new ji,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ka),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ds),this.boundingBox.expandByPoint(ds)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ao),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ds),this.boundingSphere.expandByPoint(ds)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(r),e.ray.intersectsSphere(fs)!==!1&&(ps.copy(r).invert(),ms.copy(e.ray).applyMatrix4(ps),(this.boundingBox===null||ms.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ms)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wi,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():f(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;ss.fromBufferAttribute(r.attributes.skinIndex,e),cs.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(os.copy(t),t.set(0,0,0,0)):(os.set(...t,1),t.set(0,0,0)),os.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=cs.getComponent(e);if(r!==0){let i=ss.getComponent(e);us.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(ls.copy(os).applyMatrix4(us),r)}}return t.isVector4&&(t.w=os.w),t.applyMatrix4(this.bindMatrixInverse)}},gs=class extends ia{constructor(){super(),this.isBone=!0,this.type=`Bone`}},_s=class extends Ci{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Gt,l=Gt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vs=/*@__PURE__*/ new ji,ys=/*@__PURE__*/ new ji,bs=class e{constructor(e=[],t=[]){this.uuid=g(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){f(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new ji)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new ji;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:ys;vs.multiplyMatrices(i,t[r]),vs.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _s(t,e,e,_n,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(f(`Skeleton: No bone found with UUID:`,r),i=new gs),this.bones.push(i),this.boneInverses.push(new ji().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},xs=class extends K{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=/*@__PURE__*/ new ji,Cs=/*@__PURE__*/ new ji,ws=[],Ts=/*@__PURE__*/ new ka,Es=/*@__PURE__*/ new ji,Ds=/*@__PURE__*/ new as,Os=/*@__PURE__*/ new ao,ks=class extends as{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Es)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ka),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Ts.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Ts)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ao),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Os.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ss),Cs.multiplyMatrices(n,Ss),Ds.matrixWorld=Cs,Ds.raycast(e,ws);for(let e=0,n=ws.length;e<n;e++){let n=ws[e];n.instanceId=i,n.object=this,t.push(n)}ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(r*this.count),r,this.count,bn,cn));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=/*@__PURE__*/ new ao,js=/*@__PURE__*/ new U(.5,.5),Ms=/*@__PURE__*/ new W,Ns=class{constructor(e=new xo,t=new xo,n=new xo,r=new xo,i=new xo,a=new xo){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=js.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ms.x=r.normal.x>0?e.max.x:e.min.x,Ms.y=r.normal.y>0?e.max.y:e.min.y,Ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ps=/*@__PURE__*/ new ji,Fs=class e{constructor(){this.coordinateSystem=Gr,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Ps.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ns),n[e].setFromProjectionMatrix(Ps,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ns),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Is=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});let o=i[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Ls=/*@__PURE__*/ new ji,Rs=/*@__PURE__*/ new G(1,1,1),zs=/*@__PURE__*/ new Ns,Bs=/*@__PURE__*/ new Fs,Vs=/*@__PURE__*/ new ka,Hs=/*@__PURE__*/ new ao,Us=/*@__PURE__*/ new W,Ws=/*@__PURE__*/ new W,Gs=/*@__PURE__*/ new W,Ks=/*@__PURE__*/ new Is,qs=/*@__PURE__*/ new as,Js=[],Ys=class extends as{constructor(e,t,n=t*2,r){super(new mo,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new _s(t,e,e,_n,cn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new _s(t,e,e,xn,sn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new _s(t,e,e,_n,cn);n.colorSpace=hi.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let{array:i,itemSize:a,normalized:o}=e.getAttribute(r),s=new i.constructor(n*a),c=new K(s,a,o);t.setAttribute(r,c)}if(e.getIndex()!==null){let e=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new K(e,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw Error(`THREE.BatchedMesh: All geometries must consistently have "index".`);for(let n in t.attributes){if(!e.hasAttribute(n))throw Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=e.getAttribute(n),i=t.getAttribute(n);if(r.itemSize!==i.itemSize||r.normalized!==i.normalized)throw Error(`THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Ls),this.getBoundingBoxAt(r,Vs).applyMatrix4(Ls),e.union(Vs)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Ls),this.getBoundingSphereAt(r,Hs).applyMatrix4(Ls),e.union(Hs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw Error(`THREE.BatchedMesh: Maximum item count reached.`);let t={visible:!0,active:!0,geometryIndex:e},n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(de),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=t):(n=this._instanceInfo.length,this._instanceInfo.push(t));let r=this._matricesTexture;Ls.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;let i=this._colorsTexture;return i&&(Rs.toArray(i.image.data,n*4),i.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},i=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute(`position`).count:t;let a=e.getIndex();if(a!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?a.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw Error(`THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.`);let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(de),o=this._availableGeometryIds.shift(),i[o]=r):(o=this._geometryCount,this._geometryCount++,i.push(r)),this.setGeometryAt(o,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw Error(`THREE.BatchedMesh: Maximum geometry count reached.`);this._validateGeometry(t);let n=this.geometry,r=n.getIndex()!==null,i=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(r&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw Error(`THREE.BatchedMesh: Reserved space not large enough for provided geometry.`);let s=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute(`position`).count;for(let e in n.attributes){let r=t.getAttribute(e),i=n.getAttribute(e);me(r,i,s);let a=r.itemSize;for(let e=r.count,t=c;e<t;e++){let t=s+e;for(let e=0;e<a;e++)i.setComponent(t,e,0)}i.needsUpdate=!0,i.addUpdateRange(s*a,c*a)}if(r){let e=o.indexStart,n=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let t=0;t<a.count;t++)i.setX(e+t,s+a.getX(t));for(let t=a.count,r=n;t<r;t++)i.setX(e+t,s);i.needsUpdate=!0,i.addUpdateRange(e,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let t=0,r=n.length;t<r;t++)n[t].active&&n[t].geometryIndex===e&&this.deleteInstance(t);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,r=n.map((e,t)=>t).sort((e,t)=>n[e].vertexStart-n[t].vertexStart),i=this.geometry;for(let a=0,o=n.length;a<o;a++){let o=n[r[a]];if(o.active!==!1){if(i.index!==null){if(o.indexStart!==t){let{indexStart:n,vertexStart:r,reservedIndexCount:a}=o,s=i.index,c=s.array,l=e-r;for(let e=n;e<n+a;e++)c[e]=c[e]+l;s.array.copyWithin(t,n,n+a),s.addUpdateRange(t,a),s.needsUpdate=!0,o.indexStart=t}t+=o.reservedIndexCount}if(o.vertexStart!==e){let{vertexStart:t,reservedVertexCount:n}=o,r=i.attributes;for(let i in r){let a=r[i],{array:o,itemSize:s}=a;o.copyWithin(e*s,t*s,(t+n)*s),a.addUpdateRange(e*s,n*s),a.needsUpdate=!0}o.vertexStart=e}e+=o.reservedVertexCount,o.start=i.index?o.indexStart:o.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){let e=new ka,t=n.index,i=n.attributes.position;for(let n=r.start,a=r.start+r.count;n<a;n++){let r=n;t&&(r=t.getX(r)),e.expandByPoint(Us.fromBufferAttribute(i,r))}r.boundingBox=e}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){let t=new ao;this.getBoundingBoxAt(e,Vs),Vs.getCenter(t.center);let i=n.index,a=n.attributes.position,o=0;for(let e=r.start,n=r.start+r.count;e<n;e++){let n=e;i&&(n=i.getX(n)),Us.fromBufferAttribute(a,n),o=Math.max(o,t.center.distanceToSquared(Us))}t.radius=Math.sqrt(o),r.boundingSphere=t}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(de);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let r=new Int32Array(e),i=new Int32Array(e);he(this._multiDrawCounts,r),he(this._multiDrawStarts,i),this._multiDrawCounts=r,this._multiDrawStarts=i,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,s=this._colorsTexture;a.dispose(),this._initIndirectTexture(),he(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),he(o.image.data,this._matricesTexture.image.data),s&&(s.dispose(),this._initColorsTexture(),he(s.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(e=>e.active);if(Math.max(...n.map(e=>e.vertexStart+e.reservedVertexCount))>e)throw Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(e=>e.indexStart+e.reservedIndexCount))>t)throw Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new mo,this._initializeGeometry(r));let i=this.geometry;r.index&&he(r.index.array,i.index.array);for(let e in r.attributes)he(r.attributes[e].array,i.attributes[e].array)}raycast(e,t){let n=this._instanceInfo,r=this._geometryInfo,i=this.matrixWorld,a=this.geometry;qs.material=this.material,qs.geometry.index=a.index,qs.geometry.attributes=a.attributes,qs.geometry.boundingBox===null&&(qs.geometry.boundingBox=new ka),qs.geometry.boundingSphere===null&&(qs.geometry.boundingSphere=new ao);for(let a=0,o=n.length;a<o;a++){if(!n[a].visible||!n[a].active)continue;let o=n[a].geometryIndex,s=r[o];qs.geometry.setDrawRange(s.start,s.count),this.getMatrixAt(a,qs.matrixWorld).premultiply(i),this.getBoundingBoxAt(o,qs.geometry.boundingBox),this.getBoundingSphereAt(o,qs.geometry.boundingSphere),qs.raycast(e,Js);for(let e=0,n=Js.length;e<n;e++){let n=Js[e];n.object=this,n.batchId=a,t.push(n)}Js.length=0}qs.material=null,qs.geometry.index=null,qs.geometry.attributes={},qs.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this._geometryInfo=e._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox===null?null:e.boundingBox.clone(),boundingSphere:e.boundingSphere===null?null:e.boundingSphere.clone()})),this._instanceInfo=e._instanceInfo.map(e=>({...e})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,r,i){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,s=1;i.wireframe&&(s=2,o=r.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,m=p.image.data,h=n.isArrayCamera?Bs:zs;f&&(n.isArrayCamera?h.setFromArrayCamera(n):(Ls.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),h.setFromProjectionMatrix(Ls,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){Ls.copy(this.matrixWorld).invert(),Us.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ls),Ws.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ls);for(let e=0,t=c.length;e<t;e++)if(c[e].visible&&c[e].active){let t=c[e].geometryIndex;this.getMatrixAt(e,Ls),this.getBoundingSphereAt(t,Hs).applyMatrix4(Ls);let n=!1;if(f&&(n=!h.intersectsSphere(Hs)),!n){let n=d[t],r=Gs.subVectors(Hs.center,Us).dot(Ws);Ks.push(n.start,n.count,r,e)}}let e=Ks.list,t=this.customSort;t===null?e.sort(i.transparent?pe:fe):t.call(this,e,n);for(let t=0,n=e.length;t<n;t++){let n=e[t];l[g]=n.start*o*s,u[g]=n.count*s,m[g]=n.index,g++}Ks.reset()}else for(let e=0,t=c.length;e<t;e++)if(c[e].visible&&c[e].active){let t=c[e].geometryIndex,n=!1;if(f&&(this.getMatrixAt(e,Ls),this.getBoundingSphereAt(t,Hs).applyMatrix4(Ls),n=!h.intersectsSphere(Hs)),!n){let n=d[t];l[g]=n.start*o*s,u[g]=n.count*s,m[g]=e,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,i,a){this.onBeforeRender(e,null,r,i,a)}},Xs=class extends Co{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zs=/*@__PURE__*/ new W,Qs=/*@__PURE__*/ new W,$s=/*@__PURE__*/ new ji,ec=/*@__PURE__*/ new Ko,tc=/*@__PURE__*/ new ao,nc=/*@__PURE__*/ new W,rc=/*@__PURE__*/ new W,ic=class extends ia{constructor(e=new mo,t=new Xs){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Zs.fromBufferAttribute(t,e-1),Qs.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Zs.distanceTo(Qs);e.setAttribute(`lineDistance`,new q(n,1))}else f(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(r),tc.radius+=i,e.ray.intersectsSphere(tc)===!1)return;$s.copy(r).invert(),ec.copy(e.ray).applyMatrix4($s);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ge(this,e,ec,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ge(this,e,ec,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ge(this,e,ec,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ge(this,e,ec,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},ac=/*@__PURE__*/ new W,oc=/*@__PURE__*/ new W,sc=class extends ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ac.distanceTo(oc);e.setAttribute(`lineDistance`,new q(n,1))}else f(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},cc=class extends ic{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},lc=class extends Co{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uc=/*@__PURE__*/ new ji,dc=/*@__PURE__*/ new Ko,fc=/*@__PURE__*/ new ao,pc=/*@__PURE__*/ new W,mc=class extends ia{constructor(e=new mo,t=new lc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(r),fc.radius+=i,e.ray.intersectsSphere(fc)===!1)return;uc.copy(r).invert(),dc.copy(e.ray).applyMatrix4(uc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);pc.fromBufferAttribute(l,n),_e(pc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)pc.fromBufferAttribute(l,a),_e(pc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},hc=class extends Ci{constructor(e,t,n,r,i=Xt,a=Xt,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let l=this;function u(){l.needsUpdate=!0,l._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}`requestVideoFrameCallback`in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!(`requestVideoFrameCallback`in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},gc=class extends hc{constructor(e,t,n,r,i,a,o,s){super({},e,t,n,r,i,a,o,s),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},_c=class extends Ci{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Gt,this.minFilter=Gt,this.generateMipmaps=!1,this.needsUpdate=!0}},vc=class extends Ci{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},yc=class extends vc{constructor(e,t,n,r,i,a){super(e,t,n,i,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Ut,this.layerUpdates=/* @__PURE__ */ new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bc=class extends vc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},xc=class extends Ci{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends Ci{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cc=class extends Ci{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let l=e?e.parentNode:null;l!==null&&`requestPaint`in l&&(l.onpaint=()=>{this.needsUpdate=!0},l.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&`onpaint`in e&&(e.onpaint=null),super.dispose()}},wc=class extends Ci{constructor(e,t,n=sn,r,i,a,o=Gt,s=Gt,c,l=vn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Tc=class extends wc{constructor(e,t=sn,n=301,r,i,a=Gt,o=Gt,s,c=vn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ec=class extends Ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dc=class e extends mo{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oc=class e extends mo{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new W,g=new W;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new q(o,3)),this.setAttribute(`normal`,new q(s,3)),this.setAttribute(`uv`,new q(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},kc=class e extends mo{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`normal`,new q(o,3)),this.setAttribute(`uv`,new q(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ac=class e extends mo{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jc=class e extends Ac{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mc=class e extends mo{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new q(i,3)),this.setAttribute(`normal`,new q(i.slice(),3)),this.setAttribute(`uv`,new q(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Nc=class e extends Mc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Pc=/*@__PURE__*/ new W,Fc=/*@__PURE__*/ new W,Ic=/*@__PURE__*/ new W,Lc=/*@__PURE__*/ new Oa,Rc=class extends mo{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ai*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Lc;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Lc.getNormal(Ic),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Lc[c[e]],o=Lc[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ic.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ic.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Pc.fromBufferAttribute(a,t),Fc.fromBufferAttribute(a,n),d.push(Pc.x,Pc.y,Pc.z),d.push(Fc.x,Fc.y,Fc.z)}this.setAttribute(`position`,new q(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},zc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){f(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new ji;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(_(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(_(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bc=class extends zc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vc=class extends Bc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}},Hc=/*@__PURE__*/ new W,Uc=/*@__PURE__*/ new W,Wc=/*@__PURE__*/ new ve,Gc=/*@__PURE__*/ new ve,Kc=/*@__PURE__*/ new ve,qc=class extends zc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Uc.subVectors(r[0],r[1]).add(r[0]),c=Uc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Hc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Hc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Wc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Gc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Kc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Wc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Gc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Kc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Wc.calc(s),Gc.calc(s),Kc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},Jc=class extends zc{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(B(e,r.x,i.x,a.x,o.x),B(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends zc{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(B(e,r.x,i.x,a.x,o.x),B(e,r.y,i.y,a.y,o.y),B(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xc=class extends zc{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends zc{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends zc{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ce(e,r.x,i.x,a.x),Ce(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends zc{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ce(e,r.x,i.x,a.x),Ce(e,r.y,i.y,a.y),Ce(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends zc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ye(o,s.x,c.x,l.x,u.x),ye(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},tl=/*#__PURE__*/ Object.freeze({__proto__:null,ArcCurve:Vc,CatmullRomCurve3:qc,CubicBezierCurve:Jc,CubicBezierCurve3:Yc,EllipseCurve:Bc,LineCurve:Xc,LineCurve3:Zc,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:$c,SplineCurve:el}),nl=class extends zc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new tl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new tl[n.type]().fromJSON(n))}return this}},rl=class extends nl{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xc(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Qc(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Jc(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new el(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Bc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},il=class extends rl{constructor(e){super(e),this.uuid=g(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new rl().fromJSON(n))}return this}},al=class{static triangulate(e,t,n=2){return De(e,t,n)}},ol=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];it(e),at(n,e);let a=e.length;t.forEach(it);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,at(n,t[e]);let o=al.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}},sl=class e extends mo{constructor(e=new il([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new q(r,3)),this.setAttribute(`uv`,new q(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,m=t.bevelSegments===void 0?3:t.bevelSegments,h=t.extrudePath,g=t.UVGenerator===void 0?cl:t.UVGenerator,_,v=!1,y,b,x,S;if(h){_=h.getSpacedPoints(s),v=!0,l=!1;let e=h.isCatmullRomCurve3?h.closed:!1;y=h.computeFrenetFrames(s,e),b=new W,x=new W,S=new W}l||(m=0,u=0,d=0,f=0);let C=e.extractPoints(o),w=C.shape,T=C.holes;if(!ol.isClockWise(w)){w=w.reverse();for(let e=0,t=T.length;e<t;e++){let t=T[e];ol.isClockWise(t)&&(T[e]=t.reverse())}}function E(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}E(w),T.forEach(E);let D=T.length,O=w;for(let e=0;e<D;e++){let t=T[e];w=w.concat(t)}function k(e,t,n){return t||p(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let A=w.length;function j(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let M=[];for(let e=0,t=O.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),M[e]=j(O[e],O[n],O[r]);let ee=[],N,te=M.concat();for(let e=0,t=D;e<t;e++){let t=T[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=j(t[e],t[r],t[i]);ee.push(N),te=te.concat(N)}let ne;if(m===0)ne=ol.triangulateShape(O,T);else{let e=[],t=[];for(let n=0;n<m;n++){let r=n/m,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=O.length;t<n;t++){let n=k(O[t],M[t],a);I(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=D;e<n;e++){let n=T[e];N=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=k(n[e],N[e],a);I(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ne=ol.triangulateShape(e,t)}let P=ne.length,re=d+f;for(let e=0;e<A;e++){let t=l?k(w[e],te[e],re):w[e];v?(x.copy(y.normals[0]).multiplyScalar(t.x),b.copy(y.binormals[0]).multiplyScalar(t.y),S.copy(_[0]).add(x).add(b),I(S.x,S.y,S.z)):I(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<A;t++){let n=l?k(w[t],te[t],re):w[t];v?(x.copy(y.normals[e]).multiplyScalar(n.x),b.copy(y.binormals[e]).multiplyScalar(n.y),S.copy(_[e]).add(x).add(b),I(S.x,S.y,S.z)):I(n.x,n.y,c/s*e)}for(let e=m-1;e>=0;e--){let t=e/m,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=O.length;e<t;e++){let t=k(O[e],M[e],r);I(t.x,t.y,c+n)}for(let e=0,t=T.length;e<t;e++){let t=T[e];N=ee[e];for(let e=0,i=t.length;e<i;e++){let i=k(t[e],N[e],r);v?I(i.x,i.y+_[s-1].y,_[s-1].x+n):I(i.x,i.y,c+n)}}}F(),ie();function F(){let e=r.length/3;if(l){let e=0,t=A*e;for(let e=0;e<P;e++){let n=ne[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+m*2,t=A*e;for(let e=0;e<P;e++){let n=ne[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=ne[e];oe(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=ne[e];oe(t[0]+A*s,t[1]+A*s,t[2]+A*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(O,t),t+=O.length;for(let e=0,n=T.length;e<n;e++){let n=T[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+m*2;e<n;e++){let n=A*e,a=A*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function I(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){L(e),L(t),L(i);let a=r.length/3,o=g.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function se(e,t,i,a){L(e),L(t),L(a),L(t),L(i),L(a);let o=r.length/3,s=g.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function L(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ot(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new tl[i.type]().fromJSON(i)),new e(r,t.options)}},cl={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}},ll=class e extends Mc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ul=class e extends mo{constructor(e=[new U(0,-.5),new U(.5,0),new U(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=_(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new W,d=new U,f=new W,p=new W,m=new W,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`uv`,new q(o,2)),this.setAttribute(`normal`,new q(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},dl=class e extends Mc{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},fl=class e extends mo{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},pl=class e extends mo{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new q(s,3)),this.setAttribute(`normal`,new q(c,3)),this.setAttribute(`uv`,new q(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ml=class e extends mo{constructor(e=new il([new U(0,.5),new U(-.5,-.5),new U(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new q(r,3)),this.setAttribute(`normal`,new q(i,3)),this.setAttribute(`uv`,new q(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;ol.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];ol.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=ol.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return st(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}},hl=class e extends mo{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},gl=class e extends Mc{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},_l=class e extends mo{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new W,f=new W,p=new W;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},vl=class e extends mo{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type=`TorusKnotGeometry`,this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],s=[],c=[],l=[],u=new W,d=new W,f=new W,p=new W,m=new W,h=new W,g=new W;for(let o=0;o<=n;++o){let v=o/n*i*Math.PI*2;_(v,i,a,e,f),_(v+.01,i,a,e,p),h.subVectors(p,f),g.addVectors(p,f),m.crossVectors(h,g),g.crossVectors(m,h),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let i=e/r*Math.PI*2,a=-t*Math.cos(i),p=t*Math.sin(i);u.x=f.x+(a*g.x+p*m.x),u.y=f.y+(a*g.y+p*m.y),u.z=f.z+(a*g.z+p*m.z),s.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(o/n),l.push(e/r)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,s=(r+1)*(e-1)+t;o.push(n,i,s),o.push(i,a,s)}this.setIndex(o),this.setAttribute(`position`,new q(s,3)),this.setAttribute(`normal`,new q(c,3)),this.setAttribute(`uv`,new q(l,2));function _(e,t,n,r,i){let a=Math.cos(e),o=Math.sin(e),s=n/t*e,c=Math.cos(s);i.x=r*(2+c)*.5*a,i.y=r*(2+c)*o*.5,i.z=r*Math.sin(s)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},yl=class e extends mo{constructor(e=new $c(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new W,s=new W,c=new U,l=new W,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new tl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},bl=class extends mo{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=/* @__PURE__ */ new Set,r=new W,i=new W;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),ct(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),ct(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new q(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},xl=/*#__PURE__*/ Object.freeze({__proto__:null,BoxGeometry:Dc,CapsuleGeometry:Oc,CircleGeometry:kc,ConeGeometry:jc,CylinderGeometry:Ac,DodecahedronGeometry:Nc,EdgesGeometry:Rc,ExtrudeGeometry:sl,IcosahedronGeometry:ll,LatheGeometry:ul,OctahedronGeometry:dl,PlaneGeometry:fl,PolyhedronGeometry:Mc,RingGeometry:pl,ShapeGeometry:ml,SphereGeometry:hl,TetrahedronGeometry:gl,TorusGeometry:_l,TorusKnotGeometry:vl,TubeGeometry:yl,WireframeGeometry:bl}),Sl=class extends Co{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new G(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Cl={clone:lt,merge:ut},wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,El=class extends Co{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wl,this.fragmentShader=Tl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lt(e.uniforms),this.uniformsGroups=ft(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new wi().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new di().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new ji().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dl=class extends El{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ol=class extends Co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kl=class extends Ol{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new U(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new G(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new G(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new G(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Al=class extends Co{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new G(16777215),this.specular=new G(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jl=class extends Co{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new G(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ml=class extends Co{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Nl=class extends Co{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pl=class extends Co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=br,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends Co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Il=class extends Co{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:``},this.type=`MeshMatcapMaterial`,this.color=new G(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:``},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ll=class extends Xs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}},Rl=class{static convertArray(e,t){return mt(e,t)}static isTypedArray(e){return a(e)}static hasTangents(e){return ht(e)}static getKeyframeOrder(e){return gt(e)}static sortedArray(e,t,n){return _t(e,t,n)}static flattenJSON(e,t,n,r){vt(e,t,n,r)}static subclip(e,t,n,r,i=30){return yt(e,t,n,r,i)}static makeClipAdditive(e,t=0,n=e,r=30){return bt(e,t,n,r)}},zl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Bl=class extends zl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hr,endingEnd:hr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case gr:i=e,o=2*t-n;break;case _r:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case gr:a=e,s=2*n-t;break;case _r:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Vl=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Hl=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends zl{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ct(n,t,g,y,r);i[p]=xt(x,o,_,b,m)}return i}},Wl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=mt(t,this.TimeBufferType),this.values=mt(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mt(e.times,Array),values:mt(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ht(e.settings)&&(n.settings={inTangents:mt(e.settings.inTangents,Array),outTangents:mt(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case pr:t=this.InterpolantFactoryMethodSmooth;break;case mr:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return f(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return pr;case this.InterpolantFactoryMethodBezier:return mr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ht(this.settings)&&(wt(this.settings.inTangents,e),wt(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(p(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(p(`KeyframeTrack: Track is empty.`,this),e=!1);let o=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){p(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(o!==null&&o>r){p(`KeyframeTrack: Out of order keys.`,this,t,r,o),e=!1;break}o=r}if(r!==void 0&&a(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){p(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===pr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ht(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}},Wl.prototype.ValueTypeName=``,Wl.prototype.TimeBufferType=Float32Array,Wl.prototype.ValueBufferType=Float32Array,Wl.prototype.DefaultInterpolation=fr,Gl=class extends Wl{constructor(e,t,n){super(e,t,n)}},Gl.prototype.ValueTypeName=`bool`,Gl.prototype.ValueBufferType=Array,Gl.prototype.DefaultInterpolation=dr,Gl.prototype.InterpolantFactoryMethodLinear=void 0,Gl.prototype.InterpolantFactoryMethodSmooth=void 0,Kl=class extends Wl{constructor(e,t,n,r){super(e,t,n,r)}},Kl.prototype.ValueTypeName=`color`,ql=class extends Wl{constructor(e,t,n,r){super(e,t,n,r)}},ql.prototype.ValueTypeName=`number`,Jl=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ci.slerpFlat(i,0,a,c-o,a,c,s);return i}},Yl=class extends Wl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}},Yl.prototype.ValueTypeName=`quaternion`,Yl.prototype.InterpolantFactoryMethodSmooth=void 0,Xl=class extends Wl{constructor(e,t,n){super(e,t,n)}},Xl.prototype.ValueTypeName=`string`,Xl.prototype.ValueBufferType=Array,Xl.prototype.DefaultInterpolation=dr,Xl.prototype.InterpolantFactoryMethodLinear=void 0,Xl.prototype.InterpolantFactoryMethodSmooth=void 0,Zl=class extends Wl{constructor(e,t,n,r){super(e,t,n,r)}},Zl.prototype.ValueTypeName=`vector`,Ql=class{constructor(e=``,t=-1,n=[],r=vr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=g(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Et(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Wl.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=gt(o);o=_t(o,1,c),s=_t(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new ql(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}},$l={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Dt(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Dt(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},eu=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},tu=/*@__PURE__*/ new eu,nu=class{constructor(e){this.manager=e===void 0?tu:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}},nu.DEFAULT_MATERIAL_NAME=`__DEFAULT`,ru={},iu=class extends Error{constructor(e,t){super(e),this.response=t}},au=class extends nu{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=$l.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(ru[e]!==void 0){ru[e].push({onLoad:t,onProgress:n,onError:r});return}ru[e]=[],ru[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&f(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=ru[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new iu(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{$l.add(`file:${e}`,t);let n=ru[e];delete ru[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=ru[e];if(n===void 0)throw this.manager.itemError(e),t;delete ru[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ou=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new au(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(JSON.parse(n)))}catch(t){r?r(t):p(t),i.manager.itemError(e)}},n,r)}parse(e){let t=[];for(let n=0;n<e.length;n++){let r=Ql.parse(e[n]);t.push(r)}return t}},su=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=this,a=[],o=new vc,s=new au(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(i.withCredentials);let c=0;function l(l){s.load(e[l],function(e){let n=i.parse(e,!0);a[l]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},c+=1,c===6&&(n.mipmapCount===1&&(o.minFilter=Xt),o.image=a,o.format=n.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(let t=0,n=e.length;t<n;++t)l(t);else s.load(e,function(e){let n=i.parse(e,!0);if(n.isCubemap){let e=n.mipmaps.length/n.mipmapCount;for(let t=0;t<e;t++){a[t]={mipmaps:[]};for(let e=0;e<n.mipmapCount;e++)a[t].mipmaps.push(n.mipmaps[t*n.mipmapCount+e]),a[t].format=n.format,a[t].width=n.width,a[t].height=n.height}o.image=a}else o.image.width=n.width,o.image.height=n.height,o.mipmaps=n.mipmaps;n.mipmapCount===1&&(o.minFilter=Xt),o.format=n.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}},cu=/* @__PURE__ */ new WeakMap,lu=class extends nu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=$l.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=cu.get(a);e===void 0&&(e=[],cu.set(a,e)),e.push({onLoad:t,onError:r})}return a}let s=o(`img`);function c(){u(),t&&t(this);let n=cu.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}cu.delete(this),i.manager.itemEnd(e)}function l(t){u(),r&&r(t),$l.remove(`image:${e}`);let n=cu.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}cu.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){s.removeEventListener(`load`,c,!1),s.removeEventListener(`error`,l,!1)}return s.addEventListener(`load`,c,!1),s.addEventListener(`error`,l,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),$l.add(`image:${e}`,s),i.manager.itemStart(e),s.src=e,s}},uu=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=new xc;i.colorSpace=wr;let a=new lu(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function s(n){a.load(e[n],function(e){i.images[n]=e,o++,o===6&&(i.needsUpdate=!0,t&&t(i))},void 0,r)}for(let t=0;t<e.length;++t)s(t);return i}},du=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new _s,o=new au(this.manager);return o.setResponseType(`arraybuffer`),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(e){let n;try{n=i.parse(e)}catch(e){r===void 0?p(e):r(e);return}i._applyTexData(a,n),t&&t(a,n)},n,r),a}createDataTexture(e){let t=new _s;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image===void 0?t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data):e.image=t.image,e.wrapS=t.wrapS===void 0?Ut:t.wrapS,e.wrapT=t.wrapT===void 0?Ut:t.wrapT,e.magFilter=t.magFilter===void 0?Xt:t.magFilter,e.minFilter=t.minFilter===void 0?Xt:t.minFilter,e.anisotropy=t.anisotropy===void 0?1:t.anisotropy,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=$t),t.mipmapCount===1&&(e.minFilter=Xt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},fu=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=new Ci,a=new lu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},pu=class extends ia{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mu=class extends pu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ia.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hu=/*@__PURE__*/ new ji,gu=/*@__PURE__*/ new W,_u=/*@__PURE__*/ new W,vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ji,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new wi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){hu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yu=/*@__PURE__*/ new W,bu=/*@__PURE__*/ new ci,xu=/*@__PURE__*/ new W,Su=class extends ia{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ji,this.projectionMatrix=new ji,this.projectionMatrixInverse=new ji,this.coordinateSystem=Gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yu,bu,xu),xu.x===1&&xu.y===1&&xu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yu,bu,xu.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yu,bu,xu),xu.x===1&&xu.y===1&&xu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yu,bu,xu.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cu=/*@__PURE__*/ new W,wu=/*@__PURE__*/ new U,Tu=/*@__PURE__*/ new U,Eu=class extends Su{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ai*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oi*2*Math.atan(Math.tan(ai*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cu.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cu.x,Cu.y).multiplyScalar(-e/Cu.z),Cu.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cu.x,Cu.y).multiplyScalar(-e/Cu.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Tu),t.subVectors(Tu,wu)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ai*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Du=class extends vu{constructor(){super(new Eu(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=oi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ou=class extends pu{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(ia.DEFAULT_UP),this.updateMatrix(),this.target=new ia,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ku=class extends vu{constructor(){super(new Eu(90,1,.5,500)),this.isPointLightShadow=!0}},Au=class extends pu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ju=class extends Su{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mu=class extends vu{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nu=class extends pu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ia.DEFAULT_UP),this.updateMatrix(),this.target=new ia,this.shadow=new Mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Pu=class extends pu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Fu=class extends pu{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type=`RectAreaLight`,this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Iu=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new W)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*i),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*r*1.092548),t.addScaledVector(a[5],r*i*1.092548),t.addScaledVector(a[6],.315392*(3*i*i-1)),t.addScaledVector(a[7],n*i*1.092548),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){let n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*r),t.addScaledVector(a[2],1.023328*i),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*r),t.addScaledVector(a[5],.858086*r*i),t.addScaledVector(a[6],.743125*i*i-.247708),t.addScaledVector(a[7],.858086*n*i),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let n=e.x,r=e.y,i=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*i,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*n*i,t[8]=.546274*(n*n-r*r)}},Lu=class extends pu{constructor(e=new Iu,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Ru={},zu=class e extends nu{constructor(e){super(e),this.textures={}}load(e,t,n,r){let i=this,a=new au(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(n){try{t(i.parse(JSON.parse(n)))}catch(t){r?r(t):p(t),i.manager.itemError(e)}},n,r)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(t){return e.createMaterialFromType(t)}static createMaterialFromType(e){let t={ShadowMaterial:Sl,SpriteMaterial:wo,RawShaderMaterial:Dl,ShaderMaterial:El,PointsMaterial:lc,MeshPhysicalMaterial:kl,MeshStandardMaterial:Ol,MeshPhongMaterial:Al,MeshToonMaterial:jl,MeshNormalMaterial:Ml,MeshLambertMaterial:Nl,MeshDepthMaterial:Pl,MeshDistanceMaterial:Fl,MeshBasicMaterial:qo,MeshMatcapMaterial:Il,LineDashedMaterial:Ll,LineBasicMaterial:Xs,Material:Co,...Ru}[e],n;return t===void 0?(m(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),n=new Co):n=new t,n}static registerMaterial(e,t){Ru[e]=t}},Bu=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Vu=class extends mo{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Hu=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new au(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(n){try{t(i.parse(JSON.parse(n)))}catch(t){r?r(t):p(t),i.manager.itemError(e)}},n,r)}parse(e){let t={},n={};function r(e,n){if(t[n]!==void 0)return t[n];let r=e.interleavedBuffers[n],o=a(e,r.buffer),s=i(r.type,o),c=new ho(s,r.stride);return c.uuid=r.uuid,r.usage!==void 0&&c.setUsage(r.usage),t[n]=c,c}function a(e,t){if(n[t]!==void 0)return n[t];let r=e.arrayBuffers[t],i=new Uint32Array(r).buffer;return n[t]=i,i}let o=e.isInstancedBufferGeometry?new Vu:new mo,s=e.data.index;if(s!==void 0){let e=i(s.type,s.array);o.setIndex(new K(e,1))}let c=e.data.attributes;for(let t in c){let n=c[t],a;if(n.isInterleavedBufferAttribute){let t=r(e.data,n.data);a=new _o(t,n.itemSize,n.offset,n.normalized)}else{let e=i(n.type,n.array);a=new(n.isInstancedBufferAttribute?xs:K)(e,n.itemSize,n.normalized)}n.name!==void 0&&(a.name=n.name),n.usage!==void 0&&a.setUsage(n.usage),n.gpuType!==void 0&&(a.gpuType=n.gpuType),o.setAttribute(t,a)}let l=e.data.morphAttributes;if(l)for(let t in l){let n=l[t],a=[];for(let t=0,o=n.length;t<o;t++){let o=n[t],s;if(o.isInterleavedBufferAttribute){let t=r(e.data,o.data);s=new _o(t,o.itemSize,o.offset,o.normalized)}else{let e=i(o.type,o.array);s=new K(e,o.itemSize,o.normalized)}o.name!==void 0&&(s.name=o.name),o.usage!==void 0&&s.setUsage(o.usage),o.gpuType!==void 0&&(s.gpuType=o.gpuType),a.push(s)}o.morphAttributes[t]=a}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let e=0,t=u.length;e!==t;++e){let t=u[e];o.addGroup(t.start,t.count,t.materialIndex)}let d=e.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new ao().fromJSON(d)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},Uu={},Wu=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=this,a=this.path===``?Bu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new au(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){let a=null;try{a=JSON.parse(n)}catch(t){r!==void 0&&r(t),p(`ObjectLoader: Can't parse `+e+`.`,t.message);return}let o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()===`geometry`){r!==void 0&&r(/* @__PURE__ */ Error(`THREE.ObjectLoader: Can't load `+e)),p(`ObjectLoader: Can't load `+e);return}i.parse(a,t)},n,r)}async loadAsync(e,t){let n=this,r=this.path===``?Bu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let i=new au(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);let a=await i.loadAsync(e,t),o;try{o=JSON.parse(a)}catch(t){throw Error(`THREE.ObjectLoader: Can't parse `+e+`. `+t.message)}let s=o.metadata;if(s===void 0||s.type===void 0||s.type.toLowerCase()===`geometry`)throw Error(`THREE.ObjectLoader: Can't load `+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),s=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,s,o,n),l=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,l),this.bindLightTargets(c),t!==void 0){let e=!1;for(let t in a)if(a[t].data instanceof HTMLImageElement){e=!0;break}e===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),i=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,i),o=this.parseMaterials(e.materials,a),s=this.parseObject(e.object,r,o,a,t),c=this.parseSkeletons(e.skeletons,s);return this.bindSkeletons(s,c),this.bindLightTargets(s),s}static registerGeometry(e,t){Uu[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){let r=new il().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},r={};if(t.traverse(function(e){e.isBone&&(r[e.uuid]=e)}),e!==void 0)for(let t=0,i=e.length;t<i;t++){let i=new bs().fromJSON(e[t],r);n[i.uuid]=i}return n}parseGeometries(e,t){let n={};if(e!==void 0){let r=new Hu;for(let i=0,a=e.length;i<a;i++){let a,o=e[i];switch(o.type){case`BufferGeometry`:case`InstancedBufferGeometry`:a=r.parse(o);break;default:o.type in xl?a=xl[o.type].fromJSON(o,t):o.type in Uu?a=Uu[o.type].fromJSON(o,t):f(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.userData!==void 0&&(a.userData=o.userData),n[o.uuid]=a}}return n}parseMaterials(e,t){let n={},r={};if(e!==void 0){let i=new zu;i.setTextures(t);for(let t=0,a=e.length;t<a;t++){let a=e[t];n[a.uuid]===void 0&&(n[a.uuid]=i.parse(a)),r[a.uuid]=n[a.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let r=e[n],i=Ql.parse(r);t[i.uuid]=i}return t}parseImages(e,t){let n=this,r={},a;function o(e){return e=n.manager.resolveURL(e),n.manager.itemStart(e),a.load(e,function(){n.manager.itemEnd(e)},void 0,function(){n.manager.itemError(e),n.manager.itemEnd(e)})}function s(e){if(typeof e==`string`){let t=e;return o(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(t)?t:n.resourcePath+t)}return e.data?{data:i(e.type,e.data),width:e.width,height:e.height}:null}if(e!==void 0&&e.length>0){let n=new eu(t);a=new lu(n),a.setCrossOrigin(this.crossOrigin);for(let t=0,n=e.length;t<n;t++){let n=e[t],i=n.url;if(Array.isArray(i)){let e=[];for(let t=0,n=i.length;t<n;t++){let n=i[t],r=s(n);r!==null&&(r instanceof HTMLImageElement?e.push(r):e.push(new _s(r.data,r.width,r.height)))}r[n.uuid]=new yi(e)}else{let e=s(n.url);r[n.uuid]=new yi(e)}}}return r}async parseImagesAsync(e){let t=this,n={},r;async function a(e){if(typeof e==`string`){let n=e,i=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:t.resourcePath+n;return await r.loadAsync(i)}return e.data?{data:i(e.type,e.data),width:e.width,height:e.height}:null}if(e!==void 0&&e.length>0){r=new lu(this.manager),r.setCrossOrigin(this.crossOrigin);for(let t=0,r=e.length;t<r;t++){let r=e[t],i=r.url;if(Array.isArray(i)){let e=[];for(let t=0,n=i.length;t<n;t++){let n=i[t],r=await a(n);r!==null&&(r instanceof HTMLImageElement?e.push(r):e.push(new _s(r.data,r.width,r.height)))}n[r.uuid]=new yi(e)}else{let e=await a(r.url);n[r.uuid]=new yi(e)}}}return n}parseTextures(e,t){function n(e,t){return typeof e==`number`?e:(f(`ObjectLoader.parseTexture: Constant should be in numeric form.`,e),t[e])}let r={};if(e!==void 0)for(let i=0,a=e.length;i<a;i++){let a=e[i];a.image===void 0&&f(`ObjectLoader: No "image" specified for`,a.uuid),t[a.image]===void 0&&f(`ObjectLoader: Undefined image`,a.image);let o=t[a.image],s=o.data,c;Array.isArray(s)?(c=new xc,s.length===6&&(c.needsUpdate=!0)):(c=s&&s.data?new _s:new Ci,s&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=n(a.mapping,Gu)),a.channel!==void 0&&(c.channel=a.channel),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=n(a.wrap[0],Ku),c.wrapT=n(a.wrap[1],Ku)),a.format!==void 0&&(c.format=a.format),a.internalFormat!==void 0&&(c.internalFormat=a.internalFormat),a.type!==void 0&&(c.type=a.type),a.colorSpace!==void 0&&(c.colorSpace=a.colorSpace),a.minFilter!==void 0&&(c.minFilter=n(a.minFilter,qu)),a.magFilter!==void 0&&(c.magFilter=n(a.magFilter,qu)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.generateMipmaps!==void 0&&(c.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(c.compareFunction=a.compareFunction),a.normalized!==void 0&&(c.normalized=a.normalized),a.userData!==void 0&&(c.userData=a.userData),r[a.uuid]=c}return r}parseObject(e,t,n,r,i){let a;function o(e){return t[e]===void 0&&f(`ObjectLoader: Undefined geometry`,e),t[e]}function s(e){if(e!==void 0){if(Array.isArray(e)){let t=[];for(let r=0,i=e.length;r<i;r++){let i=e[r];n[i]===void 0&&f(`ObjectLoader: Undefined material`,i),t.push(n[i])}return t}return n[e]===void 0&&f(`ObjectLoader: Undefined material`,e),n[e]}}function c(e){return r[e]===void 0&&f(`ObjectLoader: Undefined texture`,e),r[e]}let l,u;switch(e.type){case`Scene`:a=new ma,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new G(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type===`Fog`?a.fog=new pa(e.fog.color,e.fog.near,e.fog.far):e.fog.type===`FogExp2`&&(a.fog=new fa(e.fog.color,e.fog.density)),e.fog.name!==``&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case`PerspectiveCamera`:a=new Eu(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case`OrthographicCamera`:a=new ju(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case`AmbientLight`:a=new Pu(e.color,e.intensity);break;case`DirectionalLight`:a=new Nu(e.color,e.intensity),a.target=e.target||``;break;case`PointLight`:a=new Au(e.color,e.intensity,e.distance,e.decay);break;case`RectAreaLight`:a=new Fu(e.color,e.intensity,e.width,e.height);break;case`SpotLight`:a=new Ou(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||``;break;case`HemisphereLight`:a=new mu(e.color,e.groundColor,e.intensity);break;case`LightProbe`:let t=new Iu().fromArray(e.sh);a=new Lu(t,e.intensity);break;case`SkinnedMesh`:l=o(e.geometry),u=s(e.material),a=new hs(l,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case`Mesh`:l=o(e.geometry),u=s(e.material),a=new as(l,u);break;case`InstancedMesh`:l=o(e.geometry),u=s(e.material);let n=e.count,r=e.instanceMatrix,i=e.instanceColor;a=new ks(l,u,n),a.instanceMatrix=new xs(new Float32Array(r.array),16),i!==void 0&&(a.instanceColor=new xs(new Float32Array(i.array),i.itemSize));break;case`BatchedMesh`:l=o(e.geometry),u=s(e.material),a=new Ys(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=l,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(e=>{let t=null,n=null;return e.boundingBox!==void 0&&(t=new ka().fromJSON(e.boundingBox)),e.boundingSphere!==void 0&&(n=new ao().fromJSON(e.boundingSphere)),{...e,boundingBox:t,boundingSphere:n}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new ao().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new ka().fromJSON(e.boundingBox));break;case`LOD`:a=new Vo;break;case`Line`:a=new ic(o(e.geometry),s(e.material));break;case`LineLoop`:a=new cc(o(e.geometry),s(e.material));break;case`LineSegments`:a=new sc(o(e.geometry),s(e.material));break;case`PointCloud`:case`Points`:a=new mc(o(e.geometry),s(e.material));break;case`Sprite`:a=new Ro(s(e.material));break;case`Group`:a=new aa;break;case`Bone`:a=new gs;break;default:a=new ia}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix===void 0?(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)):(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new W().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let o=e.children;for(let e=0;e<o.length;e++)a.add(this.parseObject(o[e],t,n,r,i))}if(e.animations!==void 0){let t=e.animations;for(let e=0;e<t.length;e++){let n=t[e];a.animations.push(i[n])}}if(e.type===`LOD`){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let t=e.levels;for(let e=0;e<t.length;e++){let n=t[e],r=a.getObjectByProperty(`uuid`,n.object);r!==void 0&&a.addLevel(r,n.distance,n.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(e){if(e.isSkinnedMesh===!0&&e.skeleton!==void 0){let n=t[e.skeleton];n===void 0?f(`ObjectLoader: No skeleton found with UUID:`,e.skeleton):e.bind(n,e.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,r=e.getObjectByProperty(`uuid`,n);t.target=r===void 0?new ia:r}})}},Gu={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},Ku={RepeatWrapping:Ht,ClampToEdgeWrapping:Ut,MirroredRepeatWrapping:Wt},qu={NearestFilter:Gt,NearestMipmapNearestFilter:Kt,NearestMipmapLinearFilter:Jt,LinearFilter:Xt,LinearMipmapNearestFilter:Zt,LinearMipmapLinearFilter:$t},Ju=/* @__PURE__ */ new WeakMap,Yu=class extends nu{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&f(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&f(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=$l.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Ju.has(a)===!0?(r&&r(Ju.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return $l.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Ju.set(s,t),$l.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});$l.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Zu=class{static getContext(){return Xu===void 0&&(Xu=new(window.AudioContext||window.webkitAudioContext)),Xu}static setContext(e){Xu=e}},Qu=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new au(this.manager);a.setResponseType(`arraybuffer`),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{let r=n.slice(0),a=Zu.getContext(),s=e+`#decode`;i.manager.itemStart(s),a.decodeAudioData(r,function(e){t(e),i.manager.itemEnd(s)}).catch(function(e){o(e),i.manager.itemEnd(s)})}catch(e){o(e)}},n,r);function o(t){r?r(t):p(t),i.manager.itemError(e)}}},$u=/*@__PURE__*/ new ji,ed=/*@__PURE__*/ new ji,td=/*@__PURE__*/ new ji,nd=class{constructor(){this.type=`StereoCamera`,this.aspect=1,this.eyeSep=.064,this.cameraL=new Eu,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Eu,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,td.copy(e.projectionMatrix);let n=t.eyeSep/2,r=n*t.near/t.focus,i=t.near*Math.tan(ai*t.fov*.5)/t.zoom,a,o;ed.elements[12]=-n,$u.elements[12]=n,a=-i*t.aspect+r,o=i*t.aspect+r,td.elements[0]=2*t.near/(o-a),td.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(td),a=-i*t.aspect-r,o=i*t.aspect-r,td.elements[0]=2*t.near/(o-a),td.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(td)}this.cameraL.matrix.copy(e.matrixWorld).multiply(ed),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply($u),this.cameraR.matrixWorldNeedsUpdate=!0}},rd=-90,id=1,ad=class extends ia{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Eu(rd,id,e,t);r.layers=this.layers,this.add(r);let i=new Eu(rd,id,e,t);i.layers=this.layers,this.add(i);let a=new Eu(rd,id,e,t);a.layers=this.layers,this.add(a);let o=new Eu(rd,id,e,t);o.layers=this.layers,this.add(o);let s=new Eu(rd,id,e,t);s.layers=this.layers,this.add(s);let c=new Eu(rd,id,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},od=class extends Eu{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},sd=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ot.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}},cd=/*@__PURE__*/ new W,ld=/*@__PURE__*/ new ci,ud=/*@__PURE__*/ new W,dd=/*@__PURE__*/ new W,fd=/*@__PURE__*/ new W,pd=class extends ia{constructor(){super(),this.type=`AudioListener`,this.context=Zu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new sd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter===null?this.gain.disconnect(this.context.destination):(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(cd,ld,ud),dd.set(0,0,-1).applyQuaternion(ld),fd.set(0,1,0).applyQuaternion(ld),t.positionX){let e=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(cd.x,e),t.positionY.linearRampToValueAtTime(cd.y,e),t.positionZ.linearRampToValueAtTime(cd.z,e),t.forwardX.linearRampToValueAtTime(dd.x,e),t.forwardY.linearRampToValueAtTime(dd.y,e),t.forwardZ.linearRampToValueAtTime(dd.z,e),t.upX.linearRampToValueAtTime(fd.x,e),t.upY.linearRampToValueAtTime(fd.y,e),t.upZ.linearRampToValueAtTime(fd.z,e)}else t.setPosition(cd.x,cd.y,cd.z),t.setOrientation(dd.x,dd.y,dd.z,fd.x,fd.y,fd.z)}},md=class extends ia{constructor(e){super(),this.type=`Audio`,this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType=`empty`,this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType=`audioNode`,this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType=`mediaNode`,this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType=`mediaStreamNode`,this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType=`buffer`,this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){f(`Audio: Audio is already playing.`);return}if(this.hasPlaybackControl===!1){f(`Audio: this Audio has no playback control.`);return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){f(`Audio: this Audio has no playback control.`);return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress%=this.duration||this.buffer.duration),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){f(`Audio: this Audio has no playback control.`);return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||=[],this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){f(`Audio: this Audio has no playback control.`);return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(f(`Audio: this Audio has no playback control.`),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){f(`Audio: this Audio has no playback control.`);return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType===`buffer`?(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this):(f(`Audio: Audio source type cannot be copied.`),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},hd=/*@__PURE__*/ new W,gd=/*@__PURE__*/ new ci,_d=/*@__PURE__*/ new W,vd=/*@__PURE__*/ new W,yd=class extends md{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel=`HRTF`,this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(hd,gd,_d),vd.set(0,0,1).applyQuaternion(gd);let t=this.panner;if(t.positionX){let e=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(hd.x,e),t.positionY.linearRampToValueAtTime(hd.y,e),t.positionZ.linearRampToValueAtTime(hd.z,e),t.orientationX.linearRampToValueAtTime(vd.x,e),t.orientationY.linearRampToValueAtTime(vd.y,e),t.orientationZ.linearRampToValueAtTime(vd.z,e)}else t.setPosition(hd.x,hd.y,hd.z),t.setOrientation(vd.x,vd.y,vd.z)}},bd=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},xd=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){ci.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;ci.multiplyQuaternionsFlat(e,a,e,t,e,n),ci.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Sd=`\\[\\]\\.:\\/`,Cd=/* @__PURE__ */ RegExp(`[\\[\\]\\.:\\/]`,`g`),wd=`[^\\[\\]\\.:\\/]`,Td=`[^`+Sd.replace(`\\.`,``)+`]`,Ed=/*@__PURE__*/ `((?:WC+[\\/:])*)`.replace(`WC`,wd),Dd=/*@__PURE__*/ `(WCOD+)?`.replace(`WCOD`,Td),Od=/*@__PURE__*/ `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,wd),kd=/*@__PURE__*/ `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,wd),Ad=RegExp(`^`+Ed+Dd+Od+kd+`$`),jd=[`material`,`materials`,`bones`,`map`],Md=class{constructor(e,t,n){let r=n||Nd.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nd=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Cd,``)}static parseTrackName(e){let t=Ad.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);jd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){f(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){p(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){p(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){p(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){p(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){p(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){p(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){p(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;p(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){p(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){p(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},Nd.Composite=Md,Nd.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Nd.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Nd.prototype.GetterByBindingType=[Nd.prototype._getValue_direct,Nd.prototype._getValue_array,Nd.prototype._getValue_arrayElement,Nd.prototype._getValue_toArray],Nd.prototype.SetterByBindingTypeAndVersioning=[[Nd.prototype._setValue_direct,Nd.prototype._setValue_direct_setNeedsUpdate,Nd.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nd.prototype._setValue_array,Nd.prototype._setValue_array_setNeedsUpdate,Nd.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nd.prototype._setValue_arrayElement,Nd.prototype._setValue_arrayElement_setNeedsUpdate,Nd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nd.prototype._setValue_fromArray,Nd.prototype._setValue_fromArray_setNeedsUpdate,Nd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],Pd=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=g(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let t=0,n=arguments.length;t!==n;++t)e[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,i=this._bindings,a=i.length,o,s=e.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){let u=arguments[l],d=u.uuid,f=t[d];if(f===void 0){f=s++,t[d]=f,e.push(u);for(let e=0,t=a;e!==t;++e)i[e].push(new Nd(u,n[e],r[e]))}else if(f<c){o=e[f];let s=--c,l=e[s];t[l.uuid]=f,e[f]=l,t[d]=s,e[s]=u;for(let e=0,t=a;e!==t;++e){let t=i[e],a=t[s],o=t[f];t[f]=a,o===void 0&&(o=new Nd(u,n[e],r[e])),t[s]=o}}else e[f]!==o&&p(`AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.`)}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let o=arguments[a],s=o.uuid,c=t[s];if(c!==void 0&&c>=i){let a=i++,l=e[a];t[l.uuid]=c,e[c]=l,t[s]=a,e[a]=o;for(let e=0,t=r;e!==t;++e){let t=n[e],r=t[a],i=t[c];t[c]=r,t[a]=i}}}this.nCachedObjects_=i}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_,a=e.length;for(let o=0,s=arguments.length;o!==s;++o){let s=arguments[o].uuid,c=t[s];if(c!==void 0){if(delete t[s],c<i){let o=--i,s=e[o],l=--a,u=e[l];c!==o&&(t[s.uuid]=c),e[c]=s,o!==l&&(t[u.uuid]=o),e[o]=u,e.pop();for(let e=0,t=r;e!==t;++e){let t=n[e],r=t[o],i=t[l];t[c]=r,t[o]=i,t.pop()}}else{let i=--a,o=e[i];c!==i&&(t[o.uuid]=c),e[c]=o,e.pop();for(let e=0,t=r;e!==t;++e){let t=n[e];t[c]=t[i],t.pop()}}}}this.nCachedObjects_=i}subscribe_(e,t){let n=this._bindingsIndicesByPath,r=n[e],i=this._bindings;if(r!==void 0)return i[r];let a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,l=this.nCachedObjects_,u=Array(c);r=i.length,n[e]=r,a.push(e),o.push(t),i.push(u);for(let n=l,r=s.length;n!==r;++n){let r=s[n];u[n]=new Nd(r,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let e=this._paths,r=this._parsedPaths,i=this._bindings,a=i.length-1,o=i[a],s=e[a];t[s]=n,i[n]=o,i.pop(),r[n]=r[a],r.pop(),e[n]=e[a],e.pop()}}},Fd=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:hr,endingEnd:hr};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=lr,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case yr:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case vr:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===ur;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=gr,r.endingEnd=gr):(r.endingStart=e?this.zeroSlopeAtStart?gr:hr:_r,r.endingEnd=t?this.zeroSlopeAtEnd?gr:hr:_r)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},Id=/* @__PURE__ */ new Float32Array(1),Ld=class extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new xd(Nd.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Vl(/* @__PURE__ */ new Float32Array(2),/* @__PURE__ */ new Float32Array(2),1,Id),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Ql.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?vr:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Fd(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Ql.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Rd=class extends Ti{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let i=new ki(null,e,t,n);i.isRenderTargetTexture=!0,i.renderTarget=this,this.textures[r]=i}this._setTextureOptions(r)}},zd=class e{constructor(e){this.value=e}clone(){return new e(this.value.clone===void 0?this.value:this.value.clone())}},Bd=0,Vd=class extends ni{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name=``,this.usage=Fr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:`dispose`})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let e=0,n=t.length;e<n;e++){let n=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0;e<n.length;e++)this.uniforms.push(n[e].clone())}return this}clone(){return new this.constructor().copy(this)}},Hd=class extends ho{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Ud=class{constructor(e,t,n,r,i,a=!1){this.isGLBufferAttribute=!0,this.name=``,this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=i,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Wd=/*@__PURE__*/ new ji,Gd=class{constructor(e,t,n=0,r=1/0){this.ray=new Ko(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Hi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):p(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wd),this}intersectObject(e,t=!0,n=[]){return At(e,this,n,t),n.sort(kt),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)At(e[r],this,n,t);return n.sort(kt),n}},Kd=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,f(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},qd=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=_(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Jd=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Yd=class e{static#e=e.prototype.isMatrix2=!0;constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},Xd=/*@__PURE__*/ new U,Zd=class{constructor(e=new U(1/0,1/0),t=new U(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qd=/*@__PURE__*/ new W,$d=/*@__PURE__*/ new W,ef=/*@__PURE__*/ new W,tf=/*@__PURE__*/ new W,nf=/*@__PURE__*/ new W,rf=/*@__PURE__*/ new W,af=/*@__PURE__*/ new W,of=class{constructor(e=new W,t=new W){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qd.subVectors(e,this.start),$d.subVectors(this.end,this.start);let n=$d.dot($d);if(n===0)return 0;let r=$d.dot(Qd)/n;return t&&(r=_(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=rf,n=af){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;ef.subVectors(c,o),tf.subVectors(l,s),nf.subVectors(o,s);let u=ef.dot(ef),d=tf.dot(tf),f=tf.dot(nf);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=_(a,0,1);else{let e=ef.dot(nf);if(d<=r)a=0,i=_(-e/u,0,1);else{let t=ef.dot(tf),n=u*d-t*t;i=n===0?0:_((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=_(-e/u,0,1)):a>1&&(a=1,i=_((t-e)/u,0,1))}}return t.copy(o).addScaledVector(ef,i),n.copy(s).addScaledVector(tf,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},sf=/*@__PURE__*/ new W,cf=class extends ia{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type=`SpotLightHelper`;let n=new mo,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let e=0,t=1;e<32;e++,t++){let n=e/32*Math.PI*2,i=t/32*Math.PI*2;r.push(Math.cos(n),Math.sin(n),1,Math.cos(i),Math.sin(i),1)}n.setAttribute(`position`,new q(r,3));let i=new Xs({fog:!1,toneMapped:!1});this.cone=new sc(n,i),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),sf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(sf),this.color===void 0?this.cone.material.color.copy(this.light.color):this.cone.material.color.set(this.color)}},lf=/*@__PURE__*/ new W,uf=/*@__PURE__*/ new ji,df=/*@__PURE__*/ new ji,ff=class extends sc{constructor(e){let t=jt(e),n=new mo,r=[],i=[];for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(0,0,0),i.push(0,0,0))}n.setAttribute(`position`,new q(r,3)),n.setAttribute(`color`,new q(i,3));let a=new Xs({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type=`SkeletonHelper`,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new G(255),s=new G(65280);this.setColors(o,s)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);df.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(uf.multiplyMatrices(df,i.matrixWorld),lf.setFromMatrixPosition(uf),r.setXYZ(n,lf.x,lf.y,lf.z),uf.multiplyMatrices(df,i.parent.matrixWorld),lf.setFromMatrixPosition(uf),r.setXYZ(n+1,lf.x,lf.y,lf.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let n=this.geometry.getAttribute(`color`);for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},pf=class extends as{constructor(e,t,n){let r=new hl(t,4,2),i=new qo({wireframe:!0,fog:!1,toneMapped:!1});super(r,i),this.light=e,this.color=n,this.type=`PointLightHelper`,this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color===void 0?this.material.color.copy(this.light.color):this.material.color.set(this.color)}},mf=/*@__PURE__*/ new W,hf=/*@__PURE__*/ new G,gf=/*@__PURE__*/ new G,_f=class extends ia{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type=`HemisphereLightHelper`;let r=new dl(t);r.rotateY(Math.PI*.5),this.material=new qo({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let i=r.getAttribute(`position`),a=new Float32Array(i.count*3);r.setAttribute(`color`,new K(a,3)),this.add(new as(r,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute(`color`);hf.copy(this.light.color),gf.copy(this.light.groundColor);for(let e=0,n=t.count;e<n;e++){let r=e<n/2?hf:gf;t.setXYZ(e,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(mf.setFromMatrixPosition(this.light.matrixWorld).negate())}},vf=class extends sc{constructor(e=10,t=10,n=4473924,r=8947848){n=new G(n),r=new G(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new mo;l.setAttribute(`position`,new q(s,3)),l.setAttribute(`color`,new q(c,3));let u=new Xs({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},yf=class extends sc{constructor(e=10,t=16,n=8,r=64,i=4473924,a=8947848){i=new G(i),a=new G(a);let o=[],s=[];if(t>1)for(let n=0;n<t;n++){let r=n/t*(Math.PI*2),c=Math.sin(r)*e,l=Math.cos(r)*e;o.push(0,0,0),o.push(c,0,l);let u=n&1?i:a;s.push(u.r,u.g,u.b),s.push(u.r,u.g,u.b)}for(let t=0;t<n;t++){let c=t&1?i:a,l=e-e/n*t;for(let e=0;e<r;e++){let t=e/r*(Math.PI*2),n=Math.sin(t)*l,i=Math.cos(t)*l;o.push(n,0,i),s.push(c.r,c.g,c.b),t=(e+1)/r*(Math.PI*2),n=Math.sin(t)*l,i=Math.cos(t)*l,o.push(n,0,i),s.push(c.r,c.g,c.b)}}let c=new mo;c.setAttribute(`position`,new q(o,3)),c.setAttribute(`color`,new q(s,3));let l=new Xs({vertexColors:!0,toneMapped:!1});super(c,l),this.type=`PolarGridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},bf=/*@__PURE__*/ new W,xf=/*@__PURE__*/ new W,Sf=/*@__PURE__*/ new W,Cf=class extends ia{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type=`DirectionalLightHelper`,t===void 0&&(t=1);let r=new mo;r.setAttribute(`position`,new q([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let i=new Xs({fog:!1,toneMapped:!1});this.lightPlane=new ic(r,i),this.add(this.lightPlane),r=new mo,r.setAttribute(`position`,new q([0,0,0,0,0,1],3)),this.targetLine=new ic(r,i),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),bf.setFromMatrixPosition(this.light.matrixWorld),xf.setFromMatrixPosition(this.light.target.matrixWorld),Sf.subVectors(xf,bf),this.lightPlane.lookAt(xf),this.color===void 0?(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)):(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)),this.targetLine.lookAt(xf),this.targetLine.scale.z=Sf.length()}},wf=/*@__PURE__*/ new W,Tf=/*@__PURE__*/ new Su,Ef=class extends sc{constructor(e){let t=new mo,n=new Xs({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],i=[],a={};o(`n1`,`n2`),o(`n2`,`n4`),o(`n4`,`n3`),o(`n3`,`n1`),o(`f1`,`f2`),o(`f2`,`f4`),o(`f4`,`f3`),o(`f3`,`f1`),o(`n1`,`f1`),o(`n2`,`f2`),o(`n3`,`f3`),o(`n4`,`f4`),o(`p`,`n1`),o(`p`,`n2`),o(`p`,`n3`),o(`p`,`n4`),o(`u1`,`u2`),o(`u2`,`u3`),o(`u3`,`u1`),o(`c`,`t`),o(`p`,`c`),o(`cn1`,`cn2`),o(`cn3`,`cn4`),o(`cf1`,`cf2`),o(`cf3`,`cf4`);function o(e,t){s(e),s(t)}function s(e){r.push(0,0,0),i.push(0,0,0),a[e]===void 0&&(a[e]=[]),a[e].push(r.length/3-1)}t.setAttribute(`position`,new q(r,3)),t.setAttribute(`color`,new q(i,3)),super(t,n),this.type=`CameraHelper`,this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new G(16755200),l=new G(16711680),u=new G(43775),d=new G(16777215),f=new G(3355443);this.setColors(c,l,u,d,f)}setColors(e,t,n,r,i){let a=this.geometry.getAttribute(`color`);return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,i.r,i.g,i.b),a.setXYZ(41,i.r,i.g,i.b),a.setXYZ(42,i.r,i.g,i.b),a.setXYZ(43,i.r,i.g,i.b),a.setXYZ(44,i.r,i.g,i.b),a.setXYZ(45,i.r,i.g,i.b),a.setXYZ(46,i.r,i.g,i.b),a.setXYZ(47,i.r,i.g,i.b),a.setXYZ(48,i.r,i.g,i.b),a.setXYZ(49,i.r,i.g,i.b),a.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n,r;if(Tf.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)n=1,r=0;else if(this.camera.coordinateSystem===2e3)n=-1,r=1;else if(this.camera.coordinateSystem===2001)n=0,r=1;else throw Error(`THREE.CameraHelper.update(): Invalid coordinate system: `+this.camera.coordinateSystem);Mt(`c`,t,e,Tf,0,0,n),Mt(`t`,t,e,Tf,0,0,r),Mt(`n1`,t,e,Tf,-1,-1,n),Mt(`n2`,t,e,Tf,1,-1,n),Mt(`n3`,t,e,Tf,-1,1,n),Mt(`n4`,t,e,Tf,1,1,n),Mt(`f1`,t,e,Tf,-1,-1,r),Mt(`f2`,t,e,Tf,1,-1,r),Mt(`f3`,t,e,Tf,-1,1,r),Mt(`f4`,t,e,Tf,1,1,r),Mt(`u1`,t,e,Tf,.7,1.1,n),Mt(`u2`,t,e,Tf,-.7,1.1,n),Mt(`u3`,t,e,Tf,0,2,n),Mt(`cf1`,t,e,Tf,-1,0,r),Mt(`cf2`,t,e,Tf,1,0,r),Mt(`cf3`,t,e,Tf,0,-1,r),Mt(`cf4`,t,e,Tf,0,1,r),Mt(`cn1`,t,e,Tf,-1,0,n),Mt(`cn2`,t,e,Tf,1,0,n),Mt(`cn3`,t,e,Tf,0,-1,n),Mt(`cn4`,t,e,Tf,0,1,n),e.getAttribute(`position`).needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Df=/*@__PURE__*/ new ka,Of=class extends sc{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=/* @__PURE__ */ new Float32Array(24),i=new mo;i.setIndex(new K(n,1)),i.setAttribute(`position`,new K(r,3)),super(i,new Xs({color:t,toneMapped:!1})),this.object=e,this.type=`BoxHelper`,this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Df.setFromObject(this.object),Df.isEmpty())return;let e=Df.min,t=Df.max,n=this.geometry.attributes.position,r=n.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},kf=class extends sc{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],i=new mo;i.setIndex(new K(n,1)),i.setAttribute(`position`,new q(r,3)),super(i,new Xs({color:t,toneMapped:!1})),this.box=e,this.type=`Box3Helper`,this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Af=class extends ic{constructor(e,t=1,n=16776960){let r=n,i=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new mo;a.setAttribute(`position`,new q(i,3)),a.computeBoundingSphere(),super(a,new Xs({color:r,toneMapped:!1})),this.type=`PlaneHelper`,this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],s=new mo;s.setAttribute(`position`,new q(o,3)),s.computeBoundingSphere(),this.add(new as(s,new qo({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},jf=/*@__PURE__*/ new W,Pf=class extends ia{constructor(e=new W(0,0,1),t=new W(0,0,0),n=1,r=16776960,i=n*.2,a=i*.2){super(),this.type=`ArrowHelper`,Mf===void 0&&(Mf=new mo,Mf.setAttribute(`position`,new q([0,0,0,0,1,0],3)),Nf=new jc(.5,1,5,1),Nf.translate(0,-.5,0)),this.position.copy(t),this.line=new ic(Mf,new Xs({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new as(Nf,new qo({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,i,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{jf.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(jf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Ff=class extends sc{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new mo;r.setAttribute(`position`,new q(t,3)),r.setAttribute(`color`,new q(n,3));let i=new Xs({vertexColors:!0,toneMapped:!1});super(r,i),this.type=`AxesHelper`}setColors(e,t,n){let r=new G,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},If=class{constructor(){this.type=`ShapePath`,this.color=new G,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new rl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(e,t){let n=!1,r=t.length;for(let i=0,a=r-1;i<r;a=i++){let r=t[i],o=t[a];r.y>e.y!=o.y>e.y&&e.x<(o.x-r.x)*(e.y-r.y)/(o.y-r.y)+r.x&&(n=!n)}return n}function t(t,n){let r=n.getCenter(new U);if(e(r,t))return r;let i=r.y,a=[],o=t.length;for(let e=0;e<o;e++){let n=t[e],r=t[(e+1)%o];if(n.y>i!=r.y>i){let e=n.x+(i-n.y)*(r.x-n.x)/(r.y-n.y);a.push(e)}}return a.length>1&&(a.sort((e,t)=>e-t),r.x=(a[0]+a[1])/2),r}let n=this.userData.style&&this.userData.style.fillRule||`nonzero`;n!==`nonzero`&&n!==`evenodd`&&(f(`Fill-rule "`+n+`" is not supported, falling back to "nonzero".`),n=`nonzero`);let r=n===`nonzero`?(e=>e!==0):(e=>!!(e&1)),i=[];for(let e of this.subPaths){let n=e.getPoints();if(n.length<3)continue;let r=ol.area(n);if(r===0)continue;let a=new Zd;for(let e=0;e<n.length;e++)a.expandByPoint(n[e]);i.push({subPath:e,points:n,boundingBox:a,interiorPoint:t(n,a),absArea:Math.abs(r),winding:r<0?-1:1,container:null,exclude:!1,role:null})}i.sort((e,t)=>t.absArea-e.absArea);for(let t=0;t<i.length;t++){let n=i[t],a=0;for(let r=t-1;r>=0;r--){let t=i[r];if(t.boundingBox.containsBox(n.boundingBox)&&e(n.interiorPoint,t.points)){n.container=t.exclude?t.container:t,a=t.winding,n.winding+=a;break}}r(n.winding)===r(a)&&(n.exclude=!0)}for(let e of i)e.exclude||(e.role=e.container===null||e.container.role===`hole`?`outer`:`hole`);let a=[],o=/* @__PURE__ */ new Map;for(let e of i){if(e.exclude||e.role!==`outer`)continue;let t=new il;t.curves=e.subPath.curves,a.push(t),o.set(e,t)}for(let e of i){if(e.exclude||e.role!==`hole`)continue;let t=o.get(e.container);if(!t)continue;let n=new rl;n.curves=e.subPath.curves,t.holes.push(n)}return a}},Lf=class extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}},Rf=class{static contain(e,t){return Nt(e,t)}static cover(e,t){return Pt(e,t)}static fill(e){return Ft(e)}static getByteLength(e,t,n,r){return It(e,t,n,r)}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?f(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`)})),Bf=/* @__PURE__ */ n({ACESFilmicToneMapping:()=>4,AddEquation:()=>100,AddOperation:()=>2,AdditiveAnimationBlendMode:()=>yr,AdditiveBlending:()=>2,AgXToneMapping:()=>6,AlphaFormat:()=>hn,AlwaysCompare:()=>519,AlwaysDepth:()=>1,AlwaysStencilFunc:()=>519,AmbientLight:()=>Pu,AnimationAction:()=>Fd,AnimationClip:()=>Ql,AnimationLoader:()=>ou,AnimationMixer:()=>Ld,AnimationObjectGroup:()=>Pd,AnimationUtils:()=>Rl,ArcCurve:()=>Vc,ArrayCamera:()=>od,ArrowHelper:()=>Pf,AttachedBindMode:()=>Bt,Audio:()=>md,AudioAnalyser:()=>bd,AudioContext:()=>Zu,AudioListener:()=>pd,AudioLoader:()=>Qu,AxesHelper:()=>Ff,BackSide:()=>1,BasicDepthPacking:()=>br,BasicShadowMap:()=>0,BatchedMesh:()=>Ys,BezierInterpolant:()=>Ul,Bone:()=>gs,BooleanKeyframeTrack:()=>Gl,Box2:()=>Zd,Box3:()=>ka,Box3Helper:()=>kf,BoxGeometry:()=>Dc,BoxHelper:()=>Of,BufferAttribute:()=>K,BufferGeometry:()=>mo,BufferGeometryLoader:()=>Hu,ByteType:()=>nn,Cache:()=>$l,Camera:()=>Su,CameraHelper:()=>Ef,CanvasTexture:()=>Sc,CapsuleGeometry:()=>Oc,CatmullRomCurve3:()=>qc,CineonToneMapping:()=>3,CircleGeometry:()=>kc,ClampToEdgeWrapping:()=>Ut,Clock:()=>Kd,Color:()=>G,ColorKeyframeTrack:()=>Kl,ColorManagement:()=>hi,Compatibility:()=>Xr,CompressedArrayTexture:()=>yc,CompressedCubeTexture:()=>bc,CompressedTexture:()=>vc,CompressedTextureLoader:()=>su,ConeGeometry:()=>jc,ConstantAlphaFactor:()=>213,ConstantColorFactor:()=>211,Controls:()=>Lf,CubeCamera:()=>ad,CubeDepthTexture:()=>Tc,CubeReflectionMapping:()=>301,CubeRefractionMapping:()=>302,CubeTexture:()=>xc,CubeTextureLoader:()=>uu,CubeUVReflectionMapping:()=>306,CubicBezierCurve:()=>Jc,CubicBezierCurve3:()=>Yc,CubicInterpolant:()=>Bl,CullFaceBack:()=>1,CullFaceFront:()=>2,CullFaceFrontBack:()=>3,CullFaceNone:()=>0,Curve:()=>zc,CurvePath:()=>nl,CustomBlending:()=>5,CustomToneMapping:()=>5,CylinderGeometry:()=>Ac,Cylindrical:()=>Jd,Data3DTexture:()=>ki,DataArrayTexture:()=>Di,DataTexture:()=>_s,DataTextureLoader:()=>du,DataUtils:()=>Wa,DecrementStencilOp:()=>jr,DecrementWrapStencilOp:()=>Nr,DefaultLoadingManager:()=>tu,DepthFormat:()=>vn,DepthStencilFormat:()=>yn,DepthTexture:()=>wc,DetachedBindMode:()=>Vt,DirectionalLight:()=>Nu,DirectionalLightHelper:()=>Cf,DiscreteInterpolant:()=>Hl,DodecahedronGeometry:()=>Nc,DoubleSide:()=>2,DstAlphaFactor:()=>206,DstColorFactor:()=>208,DynamicCopyUsage:()=>Hr,DynamicDrawUsage:()=>Ir,DynamicReadUsage:()=>zr,EdgesGeometry:()=>Rc,EllipseCurve:()=>Bc,EqualCompare:()=>514,EqualDepth:()=>4,EqualStencilFunc:()=>514,EquirectangularReflectionMapping:()=>303,EquirectangularRefractionMapping:()=>304,Euler:()=>Vi,EventDispatcher:()=>ni,ExternalTexture:()=>Ec,ExtrudeGeometry:()=>sl,FileLoader:()=>au,Float16BufferAttribute:()=>to,Float32BufferAttribute:()=>q,FloatType:()=>cn,Fog:()=>pa,FogExp2:()=>fa,FramebufferTexture:()=>_c,FrontSide:()=>0,Frustum:()=>Ns,FrustumArray:()=>Fs,GLBufferAttribute:()=>Ud,GLSL1:()=>`100`,GLSL3:()=>Wr,GreaterCompare:()=>516,GreaterDepth:()=>6,GreaterEqualCompare:()=>518,GreaterEqualDepth:()=>5,GreaterEqualStencilFunc:()=>518,GreaterStencilFunc:()=>516,GridHelper:()=>vf,Group:()=>aa,HTMLTexture:()=>Cc,HalfFloatType:()=>ln,HemisphereLight:()=>mu,HemisphereLightHelper:()=>_f,IcosahedronGeometry:()=>ll,ImageBitmapLoader:()=>Yu,ImageLoader:()=>lu,ImageUtils:()=>_i,IncrementStencilOp:()=>Ar,IncrementWrapStencilOp:()=>Mr,InstancedBufferAttribute:()=>xs,InstancedBufferGeometry:()=>Vu,InstancedInterleavedBuffer:()=>Hd,InstancedMesh:()=>ks,Int16BufferAttribute:()=>Za,Int32BufferAttribute:()=>$a,Int8BufferAttribute:()=>Ja,IntType:()=>on,InterleavedBuffer:()=>ho,InterleavedBufferAttribute:()=>_o,Interpolant:()=>zl,InterpolateBezier:()=>mr,InterpolateDiscrete:()=>dr,InterpolateLinear:()=>fr,InterpolateSmooth:()=>pr,InterpolationSamplingMode:()=>Yr,InterpolationSamplingType:()=>Jr,InvertStencilOp:()=>Pr,KeepStencilOp:()=>Or,KeyframeTrack:()=>Wl,LOD:()=>Vo,LatheGeometry:()=>ul,Layers:()=>Hi,LessCompare:()=>513,LessDepth:()=>2,LessEqualCompare:()=>515,LessEqualDepth:()=>3,LessEqualStencilFunc:()=>515,LessStencilFunc:()=>513,Light:()=>pu,LightProbe:()=>Lu,LightShadow:()=>vu,Line:()=>ic,Line3:()=>of,LineBasicMaterial:()=>Xs,LineCurve:()=>Xc,LineCurve3:()=>Zc,LineDashedMaterial:()=>Ll,LineLoop:()=>cc,LineSegments:()=>sc,LinearFilter:()=>Xt,LinearInterpolant:()=>Vl,LinearMipMapLinearFilter:()=>en,LinearMipMapNearestFilter:()=>Qt,LinearMipmapLinearFilter:()=>$t,LinearMipmapNearestFilter:()=>Zt,LinearSRGBColorSpace:()=>Tr,LinearToneMapping:()=>1,LinearTransfer:()=>Er,Loader:()=>nu,LoaderUtils:()=>Bu,LoadingManager:()=>eu,LoopOnce:()=>cr,LoopPingPong:()=>ur,LoopRepeat:()=>lr,MOUSE:()=>Rt,Material:()=>Co,MaterialBlending:()=>6,MaterialLoader:()=>zu,MathUtils:()=>si,Matrix2:()=>Yd,Matrix3:()=>di,Matrix4:()=>ji,MaxEquation:()=>104,Mesh:()=>as,MeshBasicMaterial:()=>qo,MeshDepthMaterial:()=>Pl,MeshDistanceMaterial:()=>Fl,MeshLambertMaterial:()=>Nl,MeshMatcapMaterial:()=>Il,MeshNormalMaterial:()=>Ml,MeshPhongMaterial:()=>Al,MeshPhysicalMaterial:()=>kl,MeshStandardMaterial:()=>Ol,MeshToonMaterial:()=>jl,MinEquation:()=>103,MirroredRepeatWrapping:()=>Wt,MixOperation:()=>1,MultiplyBlending:()=>4,MultiplyOperation:()=>0,NearestFilter:()=>Gt,NearestMipMapLinearFilter:()=>Yt,NearestMipMapNearestFilter:()=>qt,NearestMipmapLinearFilter:()=>Jt,NearestMipmapNearestFilter:()=>Kt,NeutralToneMapping:()=>7,NeverCompare:()=>512,NeverDepth:()=>0,NeverStencilFunc:()=>512,NoBlending:()=>0,NoColorSpace:()=>``,NoNormalPacking:()=>``,NoToneMapping:()=>0,NormalAnimationBlendMode:()=>vr,NormalBlending:()=>1,NormalGAPacking:()=>`ga`,NormalRGPacking:()=>`rg`,NotEqualCompare:()=>517,NotEqualDepth:()=>7,NotEqualStencilFunc:()=>517,NumberKeyframeTrack:()=>ql,Object3D:()=>ia,ObjectLoader:()=>Wu,ObjectSpaceNormalMap:()=>1,OctahedronGeometry:()=>dl,OneFactor:()=>201,OneMinusConstantAlphaFactor:()=>214,OneMinusConstantColorFactor:()=>212,OneMinusDstAlphaFactor:()=>207,OneMinusDstColorFactor:()=>209,OneMinusSrcAlphaFactor:()=>205,OneMinusSrcColorFactor:()=>203,OrthographicCamera:()=>ju,PCFShadowMap:()=>1,PCFSoftShadowMap:()=>2,PMREMGenerator:()=>lh,Path:()=>rl,PerspectiveCamera:()=>Eu,Plane:()=>xo,PlaneGeometry:()=>fl,PlaneHelper:()=>Af,PointLight:()=>Au,PointLightHelper:()=>pf,Points:()=>mc,PointsMaterial:()=>lc,PolarGridHelper:()=>yf,PolyhedronGeometry:()=>Mc,PositionalAudio:()=>yd,PropertyBinding:()=>Nd,PropertyMixer:()=>xd,QuadraticBezierCurve:()=>Qc,QuadraticBezierCurve3:()=>$c,Quaternion:()=>ci,QuaternionKeyframeTrack:()=>Yl,QuaternionLinearInterpolant:()=>Jl,R11_EAC_Format:()=>Ln,RED_GREEN_RGTC2_Format:()=>or,RED_RGTC1_Format:()=>ir,REVISION:()=>`186`,RG11_EAC_Format:()=>zn,RGBADepthPacking:()=>xr,RGBAFormat:()=>_n,RGBAIntegerFormat:()=>Tn,RGBA_ASTC_10x10_Format:()=>Qn,RGBA_ASTC_10x5_Format:()=>Yn,RGBA_ASTC_10x6_Format:()=>Xn,RGBA_ASTC_10x8_Format:()=>Zn,RGBA_ASTC_12x10_Format:()=>$n,RGBA_ASTC_12x12_Format:()=>er,RGBA_ASTC_4x4_Format:()=>Vn,RGBA_ASTC_5x4_Format:()=>Hn,RGBA_ASTC_5x5_Format:()=>Un,RGBA_ASTC_6x5_Format:()=>Wn,RGBA_ASTC_6x6_Format:()=>Gn,RGBA_ASTC_8x5_Format:()=>Kn,RGBA_ASTC_8x6_Format:()=>qn,RGBA_ASTC_8x8_Format:()=>Jn,RGBA_BPTC_Format:()=>tr,RGBA_ETC2_EAC_Format:()=>In,RGBA_PVRTC_2BPPV1_Format:()=>Nn,RGBA_PVRTC_4BPPV1_Format:()=>Mn,RGBA_S3TC_DXT1_Format:()=>Dn,RGBA_S3TC_DXT3_Format:()=>On,RGBA_S3TC_DXT5_Format:()=>kn,RGBDepthPacking:()=>Sr,RGBFormat:()=>gn,RGBIntegerFormat:()=>wn,RGB_BPTC_SIGNED_Format:()=>nr,RGB_BPTC_UNSIGNED_Format:()=>rr,RGB_ETC1_Format:()=>Pn,RGB_ETC2_Format:()=>Fn,RGB_PVRTC_2BPPV1_Format:()=>jn,RGB_PVRTC_4BPPV1_Format:()=>An,RGB_S3TC_DXT1_Format:()=>En,RGDepthPacking:()=>Cr,RGFormat:()=>Sn,RGIntegerFormat:()=>Cn,RawShaderMaterial:()=>Dl,Ray:()=>Ko,Raycaster:()=>Gd,RectAreaLight:()=>Fu,RedFormat:()=>bn,RedIntegerFormat:()=>xn,ReinhardToneMapping:()=>2,RenderObjectRefreshType:()=>Zr,RenderTarget:()=>Ti,RenderTarget3D:()=>Rd,RepeatWrapping:()=>Ht,ReplaceStencilOp:()=>kr,ReverseSubtractEquation:()=>102,RingGeometry:()=>pl,SIGNED_R11_EAC_Format:()=>Rn,SIGNED_RED_GREEN_RGTC2_Format:()=>sr,SIGNED_RED_RGTC1_Format:()=>ar,SIGNED_RG11_EAC_Format:()=>Bn,SRGBColorSpace:()=>wr,SRGBTransfer:()=>Dr,Scene:()=>ma,ShaderChunk:()=>Km,ShaderLib:()=>qm,ShaderMaterial:()=>El,ShadowMaterial:()=>Sl,Shape:()=>il,ShapeGeometry:()=>ml,ShapePath:()=>If,ShapeUtils:()=>ol,ShortType:()=>rn,Skeleton:()=>bs,SkeletonHelper:()=>ff,SkinnedMesh:()=>hs,Source:()=>bi,Sphere:()=>ao,SphereGeometry:()=>hl,Spherical:()=>qd,SphericalHarmonics3:()=>Iu,SplineCurve:()=>el,SpotLight:()=>Ou,SpotLightHelper:()=>cf,Sprite:()=>Ro,SpriteMaterial:()=>wo,SrcAlphaFactor:()=>204,SrcAlphaSaturateFactor:()=>210,SrcColorFactor:()=>202,StaticCopyUsage:()=>Vr,StaticDrawUsage:()=>Fr,StaticReadUsage:()=>Rr,StereoCamera:()=>nd,StreamCopyUsage:()=>Ur,StreamDrawUsage:()=>Lr,StreamReadUsage:()=>Br,StringKeyframeTrack:()=>Xl,SubtractEquation:()=>101,SubtractiveBlending:()=>3,TOUCH:()=>zt,TangentSpaceNormalMap:()=>0,TetrahedronGeometry:()=>gl,Texture:()=>Ci,TextureLoader:()=>fu,TextureSource:()=>yi,TextureUtils:()=>Rf,Timer:()=>sd,TimestampQuery:()=>qr,TorusGeometry:()=>_l,TorusKnotGeometry:()=>vl,Triangle:()=>Oa,TriangleFanDrawMode:()=>2,TriangleStripDrawMode:()=>1,TrianglesDrawMode:()=>0,TubeGeometry:()=>yl,UVMapping:()=>300,Uint16BufferAttribute:()=>Qa,Uint32BufferAttribute:()=>eo,Uint8BufferAttribute:()=>Ya,Uint8ClampedBufferAttribute:()=>Xa,Uniform:()=>zd,UniformsGroup:()=>Vd,UniformsLib:()=>J,UniformsUtils:()=>Cl,UnsignedByteType:()=>tn,UnsignedInt101111Type:()=>mn,UnsignedInt248Type:()=>fn,UnsignedInt5999Type:()=>pn,UnsignedIntType:()=>sn,UnsignedShort4444Type:()=>un,UnsignedShort5551Type:()=>dn,UnsignedShortType:()=>an,VSMShadowMap:()=>3,Vector2:()=>U,Vector3:()=>W,Vector4:()=>wi,VectorKeyframeTrack:()=>Zl,VideoFrameTexture:()=>gc,VideoTexture:()=>hc,WebGL3DRenderTarget:()=>Ai,WebGLArrayRenderTarget:()=>Oi,WebGLCoordinateSystem:()=>Gr,WebGLCubeRenderTarget:()=>uh,WebGLRenderTarget:()=>Ei,WebGLRenderer:()=>ig,WebGLUtils:()=>Hm,WebGPUCoordinateSystem:()=>Kr,WebXRController:()=>sa,WireframeGeometry:()=>bl,WrapAroundEnding:()=>_r,ZeroCurvatureEnding:()=>hr,ZeroFactor:()=>200,ZeroSlopeEnding:()=>gr,ZeroStencilOp:()=>0,createCanvasElement:()=>s,error:()=>p,getConsoleFunction:()=>l,log:()=>u,setConsoleFunction:()=>c,warn:()=>f,warnOnce:()=>m});
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Vf(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Hf(e){let t=/* @__PURE__ */ new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}function Uf(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new as(new Dc(1,1,1),new El({name:`BackgroundCubeMaterial`,uniforms:lt(qm.backgroundCube.uniforms),vertexShader:qm.backgroundCube.vertexShader,fragmentShader:qm.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xm),l.material.toneMapped=hi.getTransfer(i.colorSpace)!==Dr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new as(new fl(2,2),new El({name:`BackgroundMaterial`,uniforms:lt(qm.background.uniforms),vertexShader:qm.background.vertexShader,fragmentShader:qm.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=hi.getTransfer(i.colorSpace)!==Dr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Jm,pt(e)),n.buffers.color.setClear(Jm.r,Jm.g,Jm.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Wf(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Gf(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Kf(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(f(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&f(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function qf(e){let t=this,n=null,r=0,i=!1,a=!1,o=new xo,s=new di,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Jf(e){let t=[],n=[],r=e,i=e-Zm+1+Qm;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=/* @__PURE__ */ new Float32Array(108),l=/* @__PURE__ */ new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ch.set(1,r,n):e===1?ch.set(-n,1,-r):e===2?ch.set(-n,r,1):e===3?ch.set(-1,r,-n):e===4?ch.set(-n,-1,r):ch.set(n,r,-1),ch.toArray(l,(e*6+t)*3)}}let u=new mo;u.setAttribute(`position`,new K(c,3)),u.setAttribute(`outputDirection`,new K(l,3)),n.push(new as(u,null)),r>Zm&&r--}return{lodMeshes:n,sizeLods:t}}function Yf(e,t,n){let r=new Ei(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Xf(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Zf(e,t,n){return new El({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:eh,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qf(e,t,n){return new El({name:`SphericalGaussianBlur`,defines:{SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $f(){return new El({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ep(){return new El({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function np(e){let t=/* @__PURE__ */ new WeakMap,n=/* @__PURE__ */ new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new uh(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new lh(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new lh(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=/* @__PURE__ */ new WeakMap,n=/* @__PURE__ */ new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function rp(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&m(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ip(e,t,n,r){let i={},a=/* @__PURE__ */ new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?eo:Qa)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ap(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function op(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:p(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function sp(e,t,n){let r=/* @__PURE__ */ new WeakMap,i=new wi;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),_=new Di(g,m,h,u);_.type=cn,_.needsUpdate=!0;let v=p*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new U(m,h)},r.set(o,d);function f(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,f)}o.addEventListener(`dispose`,f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function cp(e,t,n,r,i){let a=/* @__PURE__ */ new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=/* @__PURE__ */ new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}function lp(e,t,n,r,i,a){let o=new Ei(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new mo;l.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let u=new Dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new as(l,u),f=new ju(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ei(t,n,{type:ln,depthBuffer:!1,stencilBuffer:!1}),c=new Ei(t,n,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},hi.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=dh[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}function up(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=_h[i];if(a===void 0&&(a=new Float32Array(i),_h[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function dp(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function fp(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function pp(e,t){let n=vh[t];n===void 0&&(n=new Int32Array(t),vh[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function mp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function hp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dp(n,t))return;e.uniform2fv(this.addr,t),fp(n,t)}}function gp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dp(n,t))return;e.uniform3fv(this.addr,t),fp(n,t)}}function _p(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dp(n,t))return;e.uniform4fv(this.addr,t),fp(n,t)}}function vp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dp(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fp(n,t)}else{if(dp(n,r))return;xh.set(r),e.uniformMatrix2fv(this.addr,!1,xh),fp(n,r)}}function yp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dp(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fp(n,t)}else{if(dp(n,r))return;bh.set(r),e.uniformMatrix3fv(this.addr,!1,bh),fp(n,r)}}function bp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dp(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fp(n,t)}else{if(dp(n,r))return;yh.set(r),e.uniformMatrix4fv(this.addr,!1,yh),fp(n,r)}}function xp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Sp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dp(n,t))return;e.uniform2iv(this.addr,t),fp(n,t)}}function Cp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dp(n,t))return;e.uniform3iv(this.addr,t),fp(n,t)}}function wp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dp(n,t))return;e.uniform4iv(this.addr,t),fp(n,t)}}function Tp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ep(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dp(n,t))return;e.uniform2uiv(this.addr,t),fp(n,t)}}function Dp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dp(n,t))return;e.uniform3uiv(this.addr,t),fp(n,t)}}function Op(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dp(n,t))return;e.uniform4uiv(this.addr,t),fp(n,t)}}function kp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ph.compareFunction=n.isReversedDepthBuffer()?518:515,a=ph):a=fh,n.setTexture2D(t||a,i)}function Ap(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||hh,i)}function jp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||gh,i)}function Mp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||mh,i)}function Np(e){switch(e){case 5126:return mp;case 35664:return hp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return yp;case 35676:return bp;case 5124:case 35670:return xp;case 35667:case 35671:return Sp;case 35668:case 35672:return Cp;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return Ep;case 36295:return Dp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Mp}}function Pp(e,t){e.uniform1fv(this.addr,t)}function Fp(e,t){let n=up(t,this.size,2);e.uniform2fv(this.addr,n)}function Ip(e,t){let n=up(t,this.size,3);e.uniform3fv(this.addr,n)}function Lp(e,t){let n=up(t,this.size,4);e.uniform4fv(this.addr,n)}function Rp(e,t){let n=up(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zp(e,t){let n=up(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Bp(e,t){let n=up(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Vp(e,t){e.uniform1iv(this.addr,t)}function Hp(e,t){e.uniform2iv(this.addr,t)}function Up(e,t){e.uniform3iv(this.addr,t)}function Wp(e,t){e.uniform4iv(this.addr,t)}function Gp(e,t){e.uniform1uiv(this.addr,t)}function Kp(e,t){e.uniform2uiv(this.addr,t)}function qp(e,t){e.uniform3uiv(this.addr,t)}function Jp(e,t){e.uniform4uiv(this.addr,t)}function Yp(e,t,n){let r=this.cache,i=t.length,a=pp(n,i);dp(r,a)||(e.uniform1iv(this.addr,a),fp(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ph:fh;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Xp(e,t,n){let r=this.cache,i=t.length,a=pp(n,i);dp(r,a)||(e.uniform1iv(this.addr,a),fp(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||hh,a[e])}function Zp(e,t,n){let r=this.cache,i=t.length,a=pp(n,i);dp(r,a)||(e.uniform1iv(this.addr,a),fp(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||gh,a[e])}function Qp(e,t,n){let r=this.cache,i=t.length,a=pp(n,i);dp(r,a)||(e.uniform1iv(this.addr,a),fp(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||mh,a[e])}function $p(e){switch(e){case 5126:return Pp;case 35664:return Fp;case 35665:return Ip;case 35666:return Lp;case 35674:return Rp;case 35675:return zp;case 35676:return Bp;case 5124:case 35670:return Vp;case 35667:case 35671:return Hp;case 35668:case 35672:return Up;case 35669:case 35673:return Wp;case 5125:return Gp;case 36294:return Kp;case 36295:return qp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(e,t){e.seq.push(t),e.map[t.id]=t}function tm(e,t,n){let r=e.name,i=r.length;for(Th.lastIndex=0;;){let a=Th.exec(r),o=Th.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){em(n,l===void 0?new Sh(s,e,t):new Ch(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new wh(s),em(n,e)),n=e}}}function nm(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function rm(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function im(e){hi._getMatrix(kh,hi.workingColorSpace,e);let t=`mat3( ${kh.elements.map(e=>e.toFixed(4))} )`;switch(hi.getTransfer(e)){case Er:return[t,`LinearTransferOETF`];case Dr:return[t,`sRGBTransferOETF`];default:return f(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function am(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+rm(e.getShaderSource(t),r)}return i}function om(e,t){let n=im(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function sm(e,t){let n=Ah[t];return n===void 0?(f(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function cm(){return hi.getLuminanceCoefficients(jh),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${jh.x.toFixed(4)}, ${jh.y.toFixed(4)}, ${jh.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function lm(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(fm).join(`
`)}function um(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function dm(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function fm(e){return e!==``}function pm(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function hm(e){return e.replace(Mh,gm)}function gm(e,t){let n=Km[t];if(n===void 0){let e=Nh.get(t);if(e!==void 0)n=Km[e],f(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return hm(n)}function _m(e){return e.replace(Ph,vm)}function vm(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ym(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function bm(e){return Fh[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}function xm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ih[e.envMapMode]||`ENVMAP_TYPE_CUBE`}function Sm(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Lh[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}function Cm(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rh[e.combine]||`ENVMAP_BLENDING_NONE`}function wm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Tm(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=bm(n),l=xm(n),u=Sm(n),d=Cm(n),m=wm(n),h=lm(n),g=um(a),_=i.createProgram(),v,y,b=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g].filter(fm).join(`
`),v.length>0&&(v+=`
`),y=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g].filter(fm).join(`
`),y.length>0&&(y+=`
`)):(v=[ym(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(fm).join(`
`),y=[ym(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,m?`#define CUBEUV_TEXEL_WIDTH `+m.texelWidth:``,m?`#define CUBEUV_TEXEL_HEIGHT `+m.texelHeight:``,m?`#define CUBEUV_MAX_MIP `+m.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Km.tonemapping_pars_fragment,n.toneMapping===0?``:sm(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Km.colorspace_pars_fragment,om(`linearToOutputTexel`,n.outputColorSpace),cm(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(fm).join(`
`)),o=hm(o),o=pm(o,n),o=mm(o,n),s=hm(s),s=pm(s,n),s=mm(s,n),o=_m(o),s=_m(s),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[h,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+v,y=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+y);let x=b+v+o,S=b+y+s,C=nm(i,i.VERTEX_SHADER,x),w=nm(i,i.FRAGMENT_SHADER,S);i.attachShader(_,C),i.attachShader(_,w),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,`position`):i.bindAttribLocation(_,0,n.index0AttributeName),i.linkProgram(_);function T(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(_)||``,r=i.getShaderInfoLog(C)||``,a=i.getShaderInfoLog(w)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,_,C,w);else{let e=am(i,C,`vertex`),n=am(i,w,`fragment`);p(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):f(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:v},fragmentShader:{log:c,prefix:y}})}i.deleteShader(C),i.deleteShader(w),E=new Eh(i,_),D=dm(i,_)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(_,Dh)),O},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Oh++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}function Em(e){return e===1030||e===37490||e===36285}function Dm(e,t,n,r,i,a){let o=new Hi,s=new Bh,c=/* @__PURE__ */ new Set,l=[],u=/* @__PURE__ */ new Map,d=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return c.add(e),e===0?`uv`:`uv${e}`}function g(i,o,l,u,g,_){let v=u.fog,y=g.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&f(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=qm[w];O=e.vertexShader,k=e.fragmentShader}else{O=i.vertexShader,k=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),A=e.id,j=t.id}let M=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),N=g.isInstancedMesh===!0,te=g.isBatchedMesh===!0,ne=!!i.map,P=!!i.matcap,re=!!S,F=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,I=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,L=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,R=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=le&&!!i.anisotropyMap,ge=ue&&!!i.clearcoatMap,_e=ue&&!!i.clearcoatNormalMap,ve=ue&&!!i.clearcoatRoughnessMap,ye=fe&&!!i.iridescenceMap,be=fe&&!!i.iridescenceThicknessMap,xe=pe&&!!i.sheenColorMap,Se=pe&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,z=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=me&&!!i.transmissionMap,Ee=me&&!!i.thicknessMap,B=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,V=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:k,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:te,batchingColor:te&&g._colorsTexture!==null,instancing:N,instancingColor:N&&g.instanceColor!==null,instancingMorph:N&&g.morphTexture!==null,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:hi.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:P,envMap:re,envMapMode:re&&S.mapping,envMapCubeUVHeight:C,aoMap:F,lightMap:ie,bumpMap:ae,normalMap:I,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:I&&i.normalMapType===1,normalMapTangentSpace:I&&i.normalMapType===0,packedNormalMap:I&&i.normalMapType===0&&Em(i.normalMap.format),metalnessMap:L,roughnessMap:ce,anisotropy:le,anisotropyMap:he,clearcoat:ue,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:R,retroreflection:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:z,specularIntensityMap:we,transmission:me,transmissionMap:Te,thicknessMap:Ee,gradientMap:B,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:V,combine:i.combine,mapUv:ne&&h(i.map.channel),aoMapUv:F&&h(i.aoMap.channel),lightMapUv:ie&&h(i.lightMap.channel),bumpMapUv:ae&&h(i.bumpMap.channel),normalMapUv:I&&h(i.normalMap.channel),displacementMapUv:oe&&h(i.displacementMap.channel),emissiveMapUv:se&&h(i.emissiveMap.channel),metalnessMapUv:L&&h(i.metalnessMap.channel),roughnessMapUv:ce&&h(i.roughnessMap.channel),anisotropyMapUv:he&&h(i.anisotropyMap.channel),clearcoatMapUv:ge&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&h(i.sheenRoughnessMap.channel),specularMapUv:Ce&&h(i.specularMap.channel),specularColorMapUv:z&&h(i.specularColorMap.channel),specularIntensityMapUv:we&&h(i.specularIntensityMap.channel),transmissionMapUv:Te&&h(i.transmissionMap.channel),thicknessMapUv:Ee&&h(i.thicknessMap.channel),alphaMapUv:De&&h(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(I||le),vertexNormals:!!y.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(ne||De),fog:!!v,useFog:i.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||y.attributes.normal===void 0&&I===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&hi.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&hi.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function b(e){let t=m[e.type],n;if(t){let e=qm[t];n=Cl.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=u.get(n);return r===void 0?(r=new Tm(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function C(e){s.remove(e)}function w(){s.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function Om(){let e=/* @__PURE__ */ new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=/* @__PURE__ */ new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function km(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Am(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||km),r.length>1&&r.sort(t||Am),i.length>1&&i.sort(t||Am)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Mm(){let e=/* @__PURE__ */ new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new jm,e.set(t,[i])):n>=r.length?(i=new jm,r.push(i)):i=r[n],i}function n(){e=/* @__PURE__ */ new WeakMap}return{get:t,dispose:n}}function Nm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new G};break;case`SpotLight`:n={position:new W,direction:new W,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Pm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}function Fm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Im(e){let t=new Nm,n=Pm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new ji,o=new ji;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fm);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Hh++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Lm(e){let t=new Im(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Rm(e){let t=/* @__PURE__ */ new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Lm(e),t.set(n,[a])):r>=i.length?(a=new Lm(e),i.push(a)):a=i[r],a}function r(){t=/* @__PURE__ */ new WeakMap}return{get:n,dispose:r}}function zm(e,t,n){let r=new Ns,i=new U,a=new U,o=new wi,s=new Pl,c=new Fl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new El({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Uh,fragmentShader:Wh}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new mo;h.setAttribute(`position`,new K(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new as(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(f(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){f(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){f(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ei(i.x,i.y,{format:Sn,type:ln,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new wc(i.x,i.y,cn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=vn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Gt,d.map.depthTexture.magFilter=Gt}else l.isPointLight?(d.map=new uh(i.x),d.map.depthTexture=new Tc(i.x,sn)):(d.map=new Ei(i.x,i.y),d.map.depthTexture=new wc(i.x,i.y,sn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=vn,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=Xt,d.map.depthTexture.magFilter=Xt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Gt,d.map.depthTexture.magFilter=Gt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let _=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<_;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Jh.setFromMatrixPosition(l.matrixWorld),e.position.copy(Jh),Yh.copy(e.position),Yh.add(Gh[t]),e.up.copy(Kh[t]),e.lookAt(Yh),e.updateMatrixWorld(),n.makeTranslation(-Jh.x,-Jh.y,-Jh.z),qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(qh,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),x(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ei(i.x,i.y,{format:Sn,type:ln}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bm(e,t){function n(){let t=!1,n=new wi,r=null,i=new wi(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ti[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=/* @__PURE__ */ new WeakMap,l=/* @__PURE__ */ new WeakMap,u={},d={},f={},m=/* @__PURE__ */ new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new G(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),N=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),N=te>=1);let P=null,re={},F=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new wi().fromArray(F),I=new wi().fromArray(ie);function oe(t,n,r,i){let a=/* @__PURE__ */ new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function R(t){return g!==t&&(e.useProgram(t),g=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(ce(e.BLEND),_=!1);return}if(_===!1&&(L(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:p(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:p(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:p(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:p(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(de[n],de[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function me(t,n){t.side===2?ce(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ge(t){t===0?ce(e.CULL_FACE):(L(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function _e(t){t!==A&&(N&&e.lineWidth(t),A=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(j=n,M=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function ye(t){t?L(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=re[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){p(`WebGLState:`,e)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(e){p(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){p(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){p(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){p(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage3D(...arguments)}catch(e){p(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){p(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){p(`WebGLState:`,e)}}function V(){try{e.texImage2D(...arguments)}catch(e){p(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){p(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ne(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=/* @__PURE__ */ new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function H(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,re={},f={},m=/* @__PURE__ */ new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new G(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ae.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:R,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:z,texImage2D:V,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:B,scissor:Me,viewport:Ne,reset:H}}function Vm(e,t,n,r,i,a,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new U,d=/* @__PURE__ */ new WeakMap,m=/* @__PURE__ */ new Set,h,g=/* @__PURE__ */ new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):o(`canvas`)}function y(e,t,n){let r=1,i=we(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);h===void 0&&(h=v(n,a));let o=t?v(n,a):h;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),f(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&f(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];f(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||f(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Er:hi.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,f(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&m.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),A(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=g.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&g.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=g.get(i);delete a[n.__cacheKey],s.memory.textures--}function A(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(t)}let j=0;function M(){j=0}function ee(){return j}function N(e){j=e}function te(){let e=j;return e>=i.maxTextures&&f(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),j+=1,e}function ne(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&Ce(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)f(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)f(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){R(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[Ht]:e.REPEAT,[Ut]:e.CLAMP_TO_EDGE,[Wt]:e.MIRRORED_REPEAT},I={[Gt]:e.NEAREST,[Kt]:e.NEAREST_MIPMAP_NEAREST,[Jt]:e.NEAREST_MIPMAP_LINEAR,[Xt]:e.LINEAR,[Zt]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&f(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,I[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,I[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function L(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let o=ne(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function le(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ce(n.start,r.width,4),c=ce(t.start,r.width,4);n.start<=i+1&&a===c&&ce(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ue(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=L(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=hi.getPrimaries(hi.workingColorSpace),r=o.colorSpace===``?null:hi.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=y(o.image,!1,i.maxTextureSize);t=z(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),h=C(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);se(c,o);let g,_=o.mipmaps,v=o.isVideoTexture!==!0,S=d.__version===void 0||l===!0,E=u.dataReady,D=T(o,t);if(o.isDepthTexture)h=w(o.format===yn,o.type),S&&(v?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(_.length>0){v&&S&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data);o.generateMipmaps=!1}else v?(S&&n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height),E&&le(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){v&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(g=_[i],o.format!==1023){if(r!==null){if(v){if(E){if(o.layerUpdates.size>0){let t=It(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,g.data,0,0)}else f(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,p,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,r,p,g.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{v&&S&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],o.format===1023?v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data):r===null?f(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(o.isDataArrayTexture){if(v){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,t.width,t.height,t.depth),E){if(o.layerUpdates.size>0){let i=It(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)v?(S&&n.texStorage3D(e.TEXTURE_3D,D,h,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(S){if(v)n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),m.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&S){let t=we(_[0]);n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,g):n.texImage2D(e.TEXTURE_2D,t,h,r,p,g);o.generateMipmaps=!1}else if(v){if(S){let r=we(t);n.texStorage2D(e.TEXTURE_2D,D,h,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,p,t);b(o)&&x(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function R(t,o,s){if(o.image.length!==6)return;let c=L(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=hi.getPrimaries(hi.workingColorSpace),r=o.colorSpace===``?null:hi.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=y(o.image[e],!0,i.maxCubemapSize):h[e]=m?o.image[e].image:o.image[e],h[e]=z(o,h[e]);let g=h[0],_=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=C(o.internalFormat,_,v,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=T(o,g);se(e.TEXTURE_CUBE_MAP,o);let k;if(p){w&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,S,g.width,g.height);for(let t=0;t<6;t++){k=h[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,_,v,i.data):_===null?f(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,w&&E){k.length>0&&O++;let t=we(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,S,t.width,t.height)}for(let t=0;t<6;t++)if(m){w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,v,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,h[t].width,h[t].height,0,_,v,h[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,_,v,i.data)}}else{w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,_,v,h[t]);for(let r=0;r<k.length;r++){let i=k[r];w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,_,v,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,_,v,i.image[t])}}}b(o)&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=C(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Se(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,xe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Se(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=C(o.internalFormat,s,l,o.normalized,o.colorSpace);Se(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pe(t,i,o){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),se(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=xe(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Se(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Se(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)pe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?pe(i.__webglFramebuffer[0],t,0):pe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),fe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),fe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,i){let a=r.get(t);n!==void 0&&de(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&me(t)}function ge(t){let i=t.texture,o=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){o.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)o.__webglFramebuffer[t][n]=e.createFramebuffer()}else o.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)o.__webglFramebuffer[t]=e.createFramebuffer()}else o.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Se(t)===!1){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];o.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),s=a.convert(r.type),c=C(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=xe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,o.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(o.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)de(o.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else de(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)&&x(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],s=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),se(c,a),de(o.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),b(a)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)de(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else de(o.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)&&x(r),n.unbindTexture()}t.depthBuffer&&me(t)}function _e(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)){let t=S(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let ve=[],ye=[];function be(t){if(t.samples>0){if(Se(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(ve.length=0,ye.length=0,ve.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ve.push(c),ye.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ve))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function xe(e){return Math.min(i.maxSamples,e.samples)}function Se(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ce(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function z(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(hi.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&f(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):p(`WebGLTextures: Unsupported texture color space:`,n)),t}function we(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=te,this.resetTextureUnits=M,this.getTextureUnits=ee,this.setTextureUnits=N,this.setTexture2D=P,this.setTexture2DArray=re,this.setTexture3D=F,this.setTextureCube=ie,this.rebindTextures=he,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Hm(e,t){function n(n,r=``){let i,a=hi.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}function Um(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,pt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(tg),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wm(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(v(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,b));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(m(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return p(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function m(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)h(t[n],e,n,a);else h(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(t,n,r,i){if(_(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=y(i);g(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function g(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function _(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function v(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=y(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function y(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?f(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):f(`WebGLRenderer: Unsupported uniform value type.`,e),t}function b(t){let n=t.target;n.removeEventListener(`dispose`,b);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function x(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:x}}function Gm(){return rg===null&&(rg=new _s(ng,16,16,Sn,ln),rg.name=`DFG_LUT`,rg.minFilter=Xt,rg.magFilter=Xt,rg.wrapS=Ut,rg.wrapT=Ut,rg.generateMipmaps=!1,rg.needsUpdate=!0),rg}var Km,J,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag=t((()=>{zf(),Km={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:/*@__PURE__*/ new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:/*@__PURE__*/ new di},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new di},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:/*@__PURE__*/ new di}},envmap:{envMap:{value:null},envMapRotation:{value:/*@__PURE__*/ new di},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:/*@__PURE__*/ new di}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:/*@__PURE__*/ new di}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:/*@__PURE__*/ new di},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:/*@__PURE__*/ new di},normalScale:{value:/*@__PURE__*/ new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:/*@__PURE__*/ new di},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:/*@__PURE__*/ new di}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:/*@__PURE__*/ new di}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:/*@__PURE__*/ new di}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:/*@__PURE__*/ new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:/*@__PURE__*/ new W},probesMax:{value:/*@__PURE__*/ new W},probesResolution:{value:/*@__PURE__*/ new W}},points:{diffuse:{value:/*@__PURE__*/ new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new di},alphaTest:{value:0},uvTransform:{value:/*@__PURE__*/ new di}},sprite:{diffuse:{value:/*@__PURE__*/ new G(16777215)},opacity:{value:1},center:{value:/*@__PURE__*/ new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:/*@__PURE__*/ new di},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new di},alphaTest:{value:0}}},qm={basic:{uniforms:/*@__PURE__*/ ut([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Km.meshbasic_vert,fragmentShader:Km.meshbasic_frag},lambert:{uniforms:/*@__PURE__*/ ut([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:/*@__PURE__*/ new G(0)},envMapIntensity:{value:1}}]),vertexShader:Km.meshlambert_vert,fragmentShader:Km.meshlambert_frag},phong:{uniforms:/*@__PURE__*/ ut([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:/*@__PURE__*/ new G(0)},specular:{value:/*@__PURE__*/ new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Km.meshphong_vert,fragmentShader:Km.meshphong_frag},standard:{uniforms:/*@__PURE__*/ ut([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:/*@__PURE__*/ new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Km.meshphysical_vert,fragmentShader:Km.meshphysical_frag},toon:{uniforms:/*@__PURE__*/ ut([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:/*@__PURE__*/ new G(0)}}]),vertexShader:Km.meshtoon_vert,fragmentShader:Km.meshtoon_frag},matcap:{uniforms:/*@__PURE__*/ ut([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Km.meshmatcap_vert,fragmentShader:Km.meshmatcap_frag},points:{uniforms:/*@__PURE__*/ ut([J.points,J.fog]),vertexShader:Km.points_vert,fragmentShader:Km.points_frag},dashed:{uniforms:/*@__PURE__*/ ut([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Km.linedashed_vert,fragmentShader:Km.linedashed_frag},depth:{uniforms:/*@__PURE__*/ ut([J.common,J.displacementmap]),vertexShader:Km.depth_vert,fragmentShader:Km.depth_frag},normal:{uniforms:/*@__PURE__*/ ut([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Km.meshnormal_vert,fragmentShader:Km.meshnormal_frag},sprite:{uniforms:/*@__PURE__*/ ut([J.sprite,J.fog]),vertexShader:Km.sprite_vert,fragmentShader:Km.sprite_frag},background:{uniforms:{uvTransform:{value:/*@__PURE__*/ new di},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Km.background_vert,fragmentShader:Km.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:/*@__PURE__*/ new di}},vertexShader:Km.backgroundCube_vert,fragmentShader:Km.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Km.cube_vert,fragmentShader:Km.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Km.equirect_vert,fragmentShader:Km.equirect_frag},distance:{uniforms:/*@__PURE__*/ ut([J.common,J.displacementmap,{referencePosition:{value:/*@__PURE__*/ new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Km.distance_vert,fragmentShader:Km.distance_frag},shadow:{uniforms:/*@__PURE__*/ ut([J.lights,J.fog,{color:{value:/*@__PURE__*/ new G(0)},opacity:{value:1}}]),vertexShader:Km.shadow_vert,fragmentShader:Km.shadow_frag}},qm.physical={uniforms:/*@__PURE__*/ ut([qm.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:/*@__PURE__*/ new di},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:/*@__PURE__*/ new di},clearcoatNormalScale:{value:/*@__PURE__*/ new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:/*@__PURE__*/ new di},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:/*@__PURE__*/ new di},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:/*@__PURE__*/ new di},sheen:{value:0},sheenColor:{value:/*@__PURE__*/ new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:/*@__PURE__*/ new di},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:/*@__PURE__*/ new di},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:/*@__PURE__*/ new di},transmissionSamplerSize:{value:/*@__PURE__*/ new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:/*@__PURE__*/ new di},attenuationDistance:{value:0},attenuationColor:{value:/*@__PURE__*/ new G(0)},specularColor:{value:/*@__PURE__*/ new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:/*@__PURE__*/ new di},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:/*@__PURE__*/ new di},anisotropyVector:{value:/*@__PURE__*/ new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:/*@__PURE__*/ new di}}]),vertexShader:Km.meshphysical_vert,fragmentShader:Km.meshphysical_frag},Jm={r:0,b:0,g:0},Ym=/*@__PURE__*/ new ji,Xm=/*@__PURE__*/ new di,Xm.set(-1,0,0,0,1,0,0,0,1),Zm=4,Qm=6,$m=20,eh=256,th=/*@__PURE__*/ new ju,nh=/*@__PURE__*/ new G,rh=null,ih=0,ah=0,oh=!1,sh=/*@__PURE__*/ new W,ch=/*@__PURE__*/ new W,lh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=sh}=i;rh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,ih,ah),this._renderer.xr.enabled=oh,e.scissorTest=!1,Xf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ln,format:_n,colorSpace:Tr,depthBuffer:!1},r=Yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jf(r)),this._blurMaterial=Qf(r,e,t),this._ggxMaterial=Zf(r,e,t)}return r}_compileMaterial(e){let t=new as(new mo,e);this._renderer.compile(t,th)}_sceneToCubeUV(e,t,n,r,i){let a=new Eu(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(nh),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new as(new Dc,new qo({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(nh),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Xf(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Xf(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,th)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Zm?n-d+Zm:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Xf(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,th),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Xf(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,th)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Xf(t,3*l*(r>this._lodMax-Zm?r-this._lodMax+Zm:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,th)}},uh=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dc(5,5,5),i=new El({name:`CubemapFromEquirect`,uniforms:lt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new as(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Xt),new ad(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},dh={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`},fh=/*@__PURE__*/ new Ci,ph=/*@__PURE__*/ new wc(1,1),mh=/*@__PURE__*/ new Di,hh=/*@__PURE__*/ new ki,gh=/*@__PURE__*/ new xc,_h=[],vh=[],yh=/* @__PURE__ */ new Float32Array(16),bh=/* @__PURE__ */ new Float32Array(9),xh=/* @__PURE__ */ new Float32Array(4),Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Np(t.type)}},Ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$p(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Th=/(\w+)(\])?(\[|\.)?/g,Eh=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);tm(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},Dh=37297,Oh=0,kh=/*@__PURE__*/ new di,Ah={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`},jh=/*@__PURE__*/ new W,Mh=/^[ \t]*#include +<([\w\d./]+)>/gm,Nh=/* @__PURE__ */ new Map,Ph=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Fh={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`},Ih={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`},Lh={302:`ENVMAP_MODE_REFRACTION`},Rh={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`},zh=0,Bh=class{constructor(){this.shaderCache=/* @__PURE__ */ new Map,this.materialCache=/* @__PURE__ */ new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=/* @__PURE__ */ new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vh(e),t.set(e,n)),n}},Vh=class{constructor(e){this.id=zh++,this.code=e,this.usedTimes=0}},Hh=0,Uh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gh=[/*@__PURE__*/ new W(1,0,0),/*@__PURE__*/ new W(-1,0,0),/*@__PURE__*/ new W(0,1,0),/*@__PURE__*/ new W(0,-1,0),/*@__PURE__*/ new W(0,0,1),/*@__PURE__*/ new W(0,0,-1)],Kh=[/*@__PURE__*/ new W(0,-1,0),/*@__PURE__*/ new W(0,-1,0),/*@__PURE__*/ new W(0,0,1),/*@__PURE__*/ new W(0,0,-1),/*@__PURE__*/ new W(0,-1,0),/*@__PURE__*/ new W(0,-1,0)],qh=/*@__PURE__*/ new ji,Jh=/*@__PURE__*/ new W,Yh=/*@__PURE__*/ new W,Xh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new El({vertexShader:Xh,fragmentShader:Zh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new as(new fl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends ni{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Qh,_={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new U,w=null,T=null,E=new Eu;E.viewport=new wi;let D=new Eu;D.viewport=new wi;let O=[E,D],k=new od,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new sa,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new sa,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new sa,x[e]=t),t.getHandSpace()};function M(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}A=null,j=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(y),p=null,d=null,u=null,r=null,b=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&f(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&f(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,N),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?yn:vn,a=v.stencil?fn:sn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ei(d.textureWidth,d.textureHeight,{format:_n,type:tn,depthTexture:new wc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ei(p.framebufferWidth,p.framebufferHeight,{format:_n,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let te=new W,ne=new W;function P(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;re(k,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?P(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),F(e,k,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=oi*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(e){return _[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new Eu,o.layers.enable(n),o.viewport=new wi,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Ec,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let I=new Vf;I.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},eg=/*@__PURE__*/ new ji,tg=/*@__PURE__*/ new di,tg.set(-1,0,0,0,1,0,0,0,1),ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rg=null,ig=class{constructor(e={}){let{canvas:t=s(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:_=tn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);v=n.getContextAttributes().alpha}else v=a;let y=_,b=/* @__PURE__ */ new Set([Tn,Cn,xn]),x=/* @__PURE__ */ new Set([tn,sn,an,fn,un,dn]),S=/* @__PURE__ */ new Uint32Array(4),C=/* @__PURE__ */ new Int32Array(4),w=new W,T=null,E=null,D=[],O=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,j=!1,M=null,ee=null,N=null,te=null;this._outputColorSpace=wr;let ne=0,P=0,re=null,F=-1,ie=null,ae=new wi,I=new wi,oe=null,se=new G(0),L=0,ce=t.width,le=t.height,ue=1,R=null,de=null,fe=new wi(0,0,ce,le),pe=new wi(0,0,ce,le),me=!1,he=new Ns,ge=!1,_e=!1,ve=new ji,ye=new W,be=new wi,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return re===null?ue:1}let z=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,B,De,Oe,V,ke,Ae,je,Me,Ne,Pe,Fe,H,Ie,Le,Re,ze,Be,Ve,He,Ue,We;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,qe,!1),t.addEventListener(`webglcontextrestored`,Je,!1),t.addEventListener(`webglcontextcreationerror`,Ye,!1),z===null){let t=`webgl2`;if(z=we(t,e),z===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ge()}catch(e){throw t.removeEventListener(`webglcontextlost`,qe,!1),t.removeEventListener(`webglcontextrestored`,Je,!1),t.removeEventListener(`webglcontextcreationerror`,Ye,!1),p(`WebGLRenderer: `+e.message),e}function Ge(){Te=new rp(z),Te.init(),He=new Hm(z,Te),Ee=new Kf(z,Te,e,He),B=new Bm(z,Te),Ee.reversedDepthBuffer&&g&&B.buffers.depth.setReversed(!0),ee=z.createFramebuffer(),N=z.createFramebuffer(),te=z.createFramebuffer(),De=new op(z),Oe=new Om,V=new Vm(z,Te,B,Oe,Ee,He,De),ke=new np(A),Ae=new Hf(z),Ue=new Wf(z,Ae),je=new ip(z,Ae,De,Ue),Me=new cp(z,je,Ae,Ue,De),ze=new sp(z,Ee,V),Ie=new qf(Oe),Ne=new Dm(A,ke,Te,Ee,Ue,Ie),Pe=new Um(A,Oe),Fe=new Mm,H=new Rm(Te),Re=new Uf(A,ke,B,Me,v,c),Le=new zm(A,Me,Ee),We=new Wm(z,De,Ee,B),Be=new Gf(z,Te,De),Ve=new ap(z,Te,De),De.programs=Ne.programs,A.capabilities=Ee,A.extensions=Te,A.properties=Oe,A.renderLists=Fe,A.shadowMap=Le,A.state=B,A.info=De}y!==1009&&(k=new lp(y,t.width,t.height,o,r,i));let Ke=new $h(A,z);this.xr=Ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){if(Ke.isPresenting){f(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(y===1009){p(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){f(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}k.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),B.viewport(ae.copy(fe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),B.scissor(I.copy(pe).multiplyScalar(ue).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){B.setScissorTest(me=e)},this.setOpaqueSort=function(e){R=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(re!==null){let t=re.texture.format;e=b.has(t)}if(e){let e=re.texture.type,t=x.has(e),n=Re.getClearColor(),r=Re.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(S[0]=i,S[1]=a,S[2]=o,S[3]=r,z.clearBufferuiv(z.COLOR,0,S)):(C[0]=i,C[1]=a,C[2]=o,C[3]=r,z.clearBufferiv(z.COLOR,0,C))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,qe,!1),t.removeEventListener(`webglcontextrestored`,Je,!1),t.removeEventListener(`webglcontextcreationerror`,Ye,!1),Re.dispose(),Fe.dispose(),H.dispose(),Oe.dispose(),ke.dispose(),Me.dispose(),Ue.dispose(),We.dispose(),Ne.dispose(),Ke.dispose(),Ke.removeEventListener(`sessionstart`,nt),Ke.removeEventListener(`sessionend`,rt),it.stop()};function qe(e){e.preventDefault(),u(`WebGLRenderer: Context Lost.`),j=!0}function Je(){u(`WebGLRenderer: Context Restored.`),j=!1;let e=De.autoReset,t=Le.enabled,n=Le.autoUpdate,r=Le.needsUpdate,i=Le.type;Ge(),De.autoReset=e,Le.enabled=t,Le.autoUpdate=n,Le.needsUpdate=r,Le.type=i}function Ye(e){p(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Xe(e){let t=e.target;t.removeEventListener(`dispose`,Xe),Ze(t)}function Ze(e){Qe(e),Oe.remove(e)}function Qe(e){let t=Oe.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ue.setup(i,r,s,n,c);let h,g=Be;if(c!==null&&(h=Ae.get(c),g=Ve,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=Oe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function $e(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),ge===!0&&Ie.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),E=H.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights(),M!==null&&M.updateLights(E.state.lightsArray),_e=this.localClippingEnabled,ge=Ie.init(this.clippingPlanes,_e),ge===!0&&Ie.setGlobalState(this.clippingPlanes,t),M!==null&&Le.render(E.state.shadowsArray,n,t);let r=/* @__PURE__ */ new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];$e(o,n,t,e),r.add(o)}else $e(i,n,t,e),r.add(i)}}),E=O.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Oe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let et=null;function tt(e){et&&et(e)}function nt(){it.stop()}function rt(){it.start()}let it=new Vf;it.setAnimationLoop(tt),typeof self<`u`&&it.setContext(self),this.setAnimationLoop=function(e){et=e,Ke.setAnimationLoop(e),e===null?it.stop():it.start()},Ke.addEventListener(`sessionstart`,nt),Ke.addEventListener(`sessionend`,rt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){p(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(j===!0)return;M!==null&&M.renderStart(e,t);let n=Ke.enabled===!0&&Ke.isPresenting===!0,r=k!==null&&(re===null||n)&&k.begin(A,re);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(t),t=Ke.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,re),E=H.get(e,O.length),E.init(t),E.state.textureUnits=V.getTextureUnits(),O.push(E),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(ve,Gr,t.reversedDepth),_e=this.localClippingEnabled,ge=Ie.init(this.clippingPlanes,_e),T=Fe.get(e,D.length),T.init(),D.push(T),Ke.enabled===!0&&Ke.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&at(e,t,-1/0,A.sortObjects)}at(e,t,0,A.sortObjects),T.finish(),M!==null&&M.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(R,de),Se=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Se&&Re.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Ie.beginShadows();let i=E.state.shadowsArray;if(Le.render(i,e,t),ge===!0&&Ie.endShadows(),(r&&k.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];st(n,r,e,a)}Se&&Re.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ot(T,e,n,n.viewport)}}else r.length>0&&st(n,r,e,t),Se&&Re.render(e),ot(T,e,t)}re!==null&&P===0&&(V.updateMultisampleRenderTarget(re),V.updateRenderTargetMipmap(re)),r&&k.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),Ue.resetDefaultState(),F=-1,ie=null,O.pop(),O.length>0?(E=O[O.length-1],V.setTextureUnits(E.state.textureUnits),ge===!0&&Ie.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null,M!==null&&M.renderEnd()};function at(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)E.pushLightProbeGrid(e);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(he)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Me.update(e),a=e.material;a.visible&&T.push(e,i,a,n,be.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(he))){let i=Me.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&T.push(e,i,c,n,be.z,s,t)}}else a.visible&&T.push(e,i,a,n,be.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)at(i[e],t,n,r)}function ot(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),ge===!0&&Ie.setGlobalState(A.clippingPlanes,n),r&&B.viewport(ae.copy(r)),i.length>0&&ct(i,t,n),a.length>0&&ct(a,t,n),o.length>0&&ct(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function st(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[r.id]=new Ei(1,1,{generateMipmaps:!0,type:e?ln:tn,minFilter:$t,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:hi.workingColorSpace})}let a=E.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(se),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear(),Se&&Re.render(n);let u=A.toneMapping;A.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),ge===!0&&Ie.setGlobalState(A.clippingPlanes,r),ct(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,lt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,l),A.setClearColor(se,L),d!==void 0&&(r.viewport=d),A.toneMapping=u}function ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&lt(o,t,n,s,l,c)}}function lt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function ut(e,t,n){t.isScene!==!0&&(t=xe);let r=Oe.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n,E.state.lightProbeGridArray),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Xe),l=/* @__PURE__ */ new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ft(e,s),d}else s.uniforms=Ne.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,A),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ie.uniform),ft(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=E.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Eh.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ft(e,t){let n=Oe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function pt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function mt(e,t,n,r,i){t.isScene!==!0&&(t=xe),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=re===null?A.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:hi.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Oe.get(r),y=E.state.lights;if(ge===!0&&(_e===!0||e!==ie)){let t=e===ie&&r.id===F;Ie.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ie.numPlanes||v.numIntersection!==Ie.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=ut(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),D=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==F&&(F=r.id,C=!0),v.needsLights){let e=pt(E.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ie!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(z,`projectionMatrix`,e.projectionMatrix),T.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(z,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&T.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(z,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&T.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&T.setValue(z,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&T.setValue(z,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){T.setOptional(z,i,`bindMatrix`),T.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(z,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(T.setOptional(z,i,`batchingTexture`),T.setValue(z,`batchingTexture`,i._matricesTexture,V),T.setOptional(z,i,`batchingIdTexture`),T.setValue(z,`batchingIdTexture`,i._indirectTexture,V),T.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(z,`batchingColorTexture`,i._colorsTexture,V));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Gm()),C){if(T.setValue(z,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&ht(D,w),a&&r.fog===!0&&Pe.refreshFogUniforms(D,a),Pe.refreshMaterialUniforms(D,r,ue,le,E.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Eh.upload(z,dt(v),D,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Eh.upload(z,dt(v),D,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(z,`center`,i.center),T.setValue(z,`modelViewMatrix`,i.modelViewMatrix),T.setValue(z,`normalMatrix`,i.normalMatrix),T.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];We.update(n,x),We.bind(n,x)}}return x}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(e,t,n){let r=Oe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Oe.get(e.texture).__webglTexture=t,Oe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Oe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){re=e,ne=t,P=n;let r=null,i=!1,a=!1;if(e){let o=Oe.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),I.copy(e.scissor),oe=e.scissorTest,B.viewport(ae),B.scissor(I),B.setScissorTest(oe),F=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,Oe.get(e.texture).__webglTexture,Oe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Oe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Oe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?Oe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),I.copy(e.scissor),oe=e.scissorTest}else ae.copy(fe).multiplyScalar(ue).floor(),I.copy(pe).multiplyScalar(ue).floor(),oe=me;if(n!==0&&(r=ee),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ae),B.scissor(I),B.setScissorTest(oe),i){let r=Oe.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Oe.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Oe.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}F=-1};function _t(e){let t=Oe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){p(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Oe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){p(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){p(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,He.convert(c),He.convert(l),a)}finally{let e=re===null?null:Oe.get(re).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Oe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,He.convert(l),He.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=re===null?null:Oe.get(re).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await h(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=He.convert(t.format),_=He.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Oe.get(e),r=Oe.get(t),h=Oe.get(n.__renderTarget),g=Oe.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Oe.has(e)){let n=Oe.get(e),r=Oe.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,N),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){Oe.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ne=0,P=0,re=null,B.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=hi._getDrawingBufferColorSpace(e),t.unpackColorSpace=hi._getUnpackColorSpace()}}})),og,sg=t((()=>{og=class{constructor(e=Float32Array,t=256){this.Type=e,this.a=new e(t),this.length=0}push(...e){let t=this.length+e.length;if(t>this.a.length){let e=new this.Type(Math.max(t,Math.ceil(this.a.length*1.5),256));e.set(this.a.subarray(0,this.length)),this.a=e}this.a.set(e,this.length),this.length=t}get(e){return this.a[e]}set(e,t){this.a[e]=t}take(e=this.Type){return e.from(this.a.subarray(0,this.length))}*[Symbol.iterator](){for(let e=0;e<this.length;e++)yield this.a[e]}}})),cg=/* @__PURE__ */ n({M4:()=>pg,MB:()=>fg,hexLin:()=>mg}),lg,ug,dg,fg,pg,mg,hg=t((()=>{ag(),sg(),new ji,lg=new W,ug=new W,dg=new di,fg=class{static workerId=`MB`;constructor(){this.p=new og,this.n=new og,this.c=new og,this.uv=new og,this.part=new og,this.i=new og(Uint32Array),this.v=0,this.color=[1,1,1],this.curPart=0,this.xf=null}setColor(e){return this.color=Array.isArray(e)?e:[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255].map(e=>e**2.2),this}setPart(e){return this.curPart=e,this}setXf(e){return this.xf=e,this}vert(e,t,n,r,i,a,o=0,s=0){return this.xf&&(lg.set(e,t,n).applyMatrix4(this.xf),e=lg.x,t=lg.y,n=lg.z,dg.getNormalMatrix(this.xf),ug.set(r,i,a).applyMatrix3(dg).normalize(),r=ug.x,i=ug.y,a=ug.z),this.p.push(e,t,n),this.n.push(r,i,a),this.c.push(...this.color),this.uv.push(o,s),this.part.push(this.curPart),this.v++}tri(e,t,n){this.i.push(e,t,n)}quad(e,t,n,r){this.i.push(e,t,n,e,n,r)}box(e,t,n,r,i,a,o=63){return[[[1,0,0],[[r,t,a],[r,t,n],[r,i,n],[r,i,a]]],[[-1,0,0],[[e,t,n],[e,t,a],[e,i,a],[e,i,n]]],[[0,1,0],[[e,i,a],[r,i,a],[r,i,n],[e,i,n]]],[[0,-1,0],[[e,t,n],[r,t,n],[r,t,a],[e,t,a]]],[[0,0,1],[[e,t,a],[r,t,a],[r,i,a],[e,i,a]]],[[0,0,-1],[[r,t,n],[e,t,n],[e,i,n],[r,i,n]]]].forEach(([e,t],n)=>{if(!(o&1<<n))return;let r=t.map(([t,n,r],i)=>this.vert(t,n,r,e[0],e[1],e[2],+(i===1||i===2),+(i>=2)));this.quad(r[0],r[1],r[2],r[3])}),this}boxC(e,t,n,r,i,a,o){return this.box(e-r/2,t-i/2,n-a/2,e+r/2,t+i/2,n+a/2,o)}cyl(e,t,n,r,i,a,o=8,s=!0,c=!0){let l=[],u=[],d=(r-i)/a;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,f=Math.cos(c),p=Math.sin(c),m=Math.hypot(1,d);l.push(this.vert(e+f*r,t,n+p*r,f/m,d/m,p/m,s/o,0)),u.push(this.vert(e+f*i,t+a,n+p*i,f/m,d/m,p/m,s/o,1))}for(let e=0;e<o;e++)this.quad(l[e+1],l[e],u[e],u[e+1]);if(s){if(i>0){let r=this.vert(e,t+a,n,0,1,0),s=[];for(let r=0;r<=o;r++){let c=r/o*Math.PI*2;s.push(this.vert(e+Math.cos(c)*i,t+a,n+Math.sin(c)*i,0,1,0))}for(let e=0;e<o;e++)this.tri(r,s[e+1],s[e])}if(r>0){let i=this.vert(e,t,n,0,-1,0),a=[];for(let i=0;i<=o;i++){let s=i/o*Math.PI*2;a.push(this.vert(e+Math.cos(s)*r,t,n+Math.sin(s)*r,0,-1,0))}for(let e=0;e<o;e++)this.tri(i,a[e],a[e+1])}}return this}tube(e,t,n,r=6,i=!1){let a=new W(...e),o=new W(...t).clone().sub(a),s=o.length(),c=new ci().setFromUnitVectors(new W(0,1,0),o.normalize()),l=new ji().compose(a,c,new W(1,1,1)),u=this.xf;return this.xf=u?u.clone().multiply(l):l,this.cyl(0,0,0,n,n,s,r,i),this.xf=u,this}with(e,t){let n=this.xf;return this.xf=n?n.clone().multiply(e):e,t(this),this.xf=n,this}merge(e){let t=this.v;for(let t of[`p`,`n`,`c`,`uv`,`part`])for(let n of e[t])this[t].push(n);for(let n of e.i)this.i.push(n+t);return this.v+=e.v,this}release(){for(let e of[`p`,`n`,`c`,`uv`,`part`,`i`])this[e].a=new this[e].Type(0),this[e].length=0;this.v=0}build({part:e=!1,consume:t=!1}={}){let n=new mo;return n.setAttribute(`position`,new K(this.p.take(),3)),n.setAttribute(`normal`,new K(this.n.take(),3)),n.setAttribute(`color`,new K(this.c.take(),3)),n.setAttribute(`uv`,new K(this.uv.take(),2)),e&&n.setAttribute(`aPart`,new K(this.part.take(),1)),n.setIndex(new K(this.i.take(this.v>65535?Uint32Array:Uint16Array),1)),n.computeBoundingSphere(),n.computeBoundingBox(),t&&this.release(),n}},pg=(e=0,t=0,n=0,r=0,i=1)=>new ji().compose(new W(e,t,n),new ci().setFromAxisAngle(new W(0,1,0),r),new W(i,i,i)),mg=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255].map(e=>e**2.2)})),gg,_g,vg=t((()=>{gg={value:0},_g={value:0}})),yg,bg,xg=t((()=>{ag(),yg={tGM:{value:null},uGMMat:{value:new ji},uGMPlane:{value:new wi(0,1,0,-1e6)},uGMOn:{value:0}},bg=`
uniform sampler2D tGM; uniform mat4 uGMMat; uniform vec4 uGMPlane; uniform float uGMOn;
// mirror image (rgb) + coverage (a) at this facade point, or 0 when it is not on the mirrored plane
vec4 glassMirror(vec3 wp, vec3 wn) {
  if (uGMOn < 0.5) return vec4(0.0);
  float pd = dot(wp, uGMPlane.xyz) - uGMPlane.w;
  float pm = smoothstep(0.96, 0.99, dot(wn, uGMPlane.xyz)) * (1.0 - smoothstep(0.2, 0.45, abs(pd)));
  if (pm <= 0.0) return vec4(0.0);
  vec4 rp = uGMMat * vec4(wp, 1.0);
  if (rp.w <= 0.0) return vec4(0.0);
  vec2 ruv = rp.xy / rp.w;
  vec2 e = smoothstep(0.0, 0.03, ruv) * smoothstep(1.0, 0.97, ruv);
  vec4 m = texture(tGM, ruv);
  return vec4(m.rgb, clamp(m.a, 0.0, 1.0) * pm * e.x * e.y);
}
`})),Sg=/* @__PURE__ */ n({FacadeBuilder:()=>Dg,LAYER:()=>Tg,STYLE:()=>wg,createFacadeMaterial:()=>Cg});function Cg(e){let t=new Ol({color:16777215,roughness:.8,metalness:0}),n={tWallC:{value:e.wallsCol},tWallN:{value:e.wallsNrm},tWallH:{value:e.wallsHao},tDetail:{value:e.detailNrm},tInterior:{value:e.interiors},tSigns:{value:e.signs},tNoise:{value:e.noise},uInteriorGain:{value:.5},uShopGain:{value:.7},uNightK:gg,uDnTime:_g,...yg};return t.userData.uniforms=n,t.userData.noSSR=!0,t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
`+Og).replace(`#include <fog_vertex>`,`#include <fog_vertex>
`+kg),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+Ag+bg).replace(`#include <map_fragment>`,`Surf FS = facade(); diffuseColor.rgb = FS.alb;`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = FS.rough;`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = FS.metal;`).replace(`#include <normal_fragment_maps>`,`
        {
          vec3 Nw = normalize(vWN);
          vec3 Tw = Nw.y > 0.5 ? vec3(1.0, 0.0, 0.0) : (Nw.y < -0.5 ? vec3(1.0, 0.0, 0.0) : normalize(cross(vec3(0.0, 1.0, 0.0), Nw)));
          vec3 Bw = Nw.y > 0.5 ? vec3(0.0, 0.0, -1.0) : (Nw.y < -0.5 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0));
          vec3 nw = normalize(Tw * FS.n.x + Bw * FS.n.y + Nw * FS.n.z);
          normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += FS.emis;`).replace(`#include <lights_physical_fragment>`,`#include <lights_physical_fragment>
material.specularColor = mix(material.specularColor, vec3(gF0) * gSpecTint, clamp(gGlass, 0.0, 1.0));
material.specularF90 = mix(material.specularF90, 0.55, clamp(gGlass, 0.0, 1.0) * gSash); // (textures r4) 0.3 -> 0.55`).replace(`#include <lights_fragment_maps>`,`#include <lights_fragment_maps>
      #if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV ) && defined( RE_IndirectSpecular )
      {
        float cg = clamp(gGlass, 0.0, 1.0);
        // (render r-refl) the player / web / near peds mirrored about this glass plane (render/glassmirror.js), laid over the
        // glass's own (procedural city) reflection below, before the sash dimming and the Fresnel / specular BRDF
        vec4 gmS = cg > 0.001 ? glassMirror(vWPos, normalize(vWN)) : vec4(0.0);
        if (cg > 0.001 && vWPos.y <= 2.0) radiance = mix(radiance, gmS.rgb, gmS.a);
        if (cg > 0.001 && vWPos.y > 2.0) {
          vec3 Rw = inverseTransformDirection(reflect(-geometryViewDir, normal), viewMatrix);
          float az = atan(Rw.z, Rw.x) * 7.0 + vS.y * 3.1;
          float bk = floor(az), fa = fract(az);
          float h1 = fh1(vec2(bk, 3.7)), h2 = fh1(vec2(bk, 9.1)), h3 = fh1(vec2(bk + 0.5, 1.3));
          // skyline elevation seen from this window: lower windows see taller neighbours
          float hsky = mix(0.03, 0.36, h1 * h1) * (1.0 + 0.8 * (1.0 - smoothstep(20.0, 260.0, vWPos.y))); // (skyline r4) more sky in mid-height glass
          hsky *= step(0.12, h3) * (0.85 + 0.3 * step(abs(fa - 0.5), 0.3 * h2)); // gaps + narrower upper shafts
          if (vX.z > 3.5 && vX.z < 4.5) hsky *= 0.35; // (skyline r3) the supertall low-iron glass stands above its neighbours: mostly sky
          float fwR = fwidth(Rw.y) + 0.004;
          float bldg = 1.0 - smoothstep(hsky - fwR, hsky + fwR, Rw.y);
          vec3 hz = textureCubeUV(envMap, envMapRotation * normalize(vec3(Rw.x, 0.06, Rw.z)), 0.7).rgb * envMapIntensity;
          float sunF = h2 > 0.55 ? 0.58 : 0.27;                          // sunlit vs shaded neighbour face
          float rows = 0.8 + 0.2 * step(0.5, fract(Rw.y * 180.0 / max(0.4, 1.0 + 60.0 * fwR)));
          vec3 cityC = hz * mix(vec3(0.95, 0.9, 0.82), vec3(0.75, 0.82, 0.95), h3) * sunF * rows;
          vec3 streetC = hz * vec3(0.16, 0.17, 0.19);
          // (skyline r7) critic: 'right-edge tower is a flat black checkerboard, no reflection'. A high window's steep
          // downward ray does not reach the street: it sees the roofscape / lower facades (mid grey, broken up into
          // sunlit roofs, shaded canyons and pale parapets) -> dark-but-structured glass instead of a black grid
          {
            vec2 rq = Rw.xz / max(-Rw.y, 0.2) * (0.6 + 0.5 * vS.y) * 9.0;
            float rb = fh1(floor(rq)), rb2 = fh1(floor(rq * 0.37) + 4.1);
            vec3 roofC = hz * mix(vec3(0.34, 0.36, 0.39), vec3(0.6, 0.6, 0.59), rb) * (0.75 + 0.35 * rb2); // (skyline r10) lighter: glass seen from above picks up the pale city
            streetC = mix(streetC, roofC, smoothstep(35.0, 160.0, vWPos.y));
          }
          // (skyline r6) critic: 'glass is a matte dark grid, no reflections'. A shallow downward ray (tower seen from above
          // or from far away) mirrors the hazy far city / horizon, not the street: bright, cool, with the neighbours'
          // lit / shaded faces; only steep rays reach the dark street floor
          vec3 farC = hz * mix(vec3(0.62, 0.66, 0.72), vec3(0.9, 0.92, 0.96), h2) * (0.9 + 0.1 * rows);
          float dn = smoothstep(0.0, -0.06, Rw.y);
          cityC = mix(cityC, farC, dn * (1.0 - smoothstep(-0.12, -0.4, Rw.y)));
          cityC = mix(cityC, streetC, smoothstep(-0.4, -0.85, Rw.y));
          cityC = mix(cityC, radiance, 0.24); // keep a hint of sky / haze in the reflected city (stylised, like the refs)
          radiance = mix(radiance, cityC, bldg * cg * (1.0 - 0.5 * smoothstep(0.35, 0.8, material.roughness)));
          radiance = mix(radiance, gmS.rgb, gmS.a); // (render r-refl)
          radiance *= (1.0 - 0.4 * cg * gSash) /* (textures r4) 0.72 -> 0.4 */ * mix(1.0, gSashV, cg * gSash); // (street r11) per-window reflectance // (street r10) old sash glass in a canyon: dim, dusty reflections (dark holes, not pale panes)
        }
      }
      #endif`)},t.customProgramCacheKey=()=>`city-facade-v18`,t}var wg,Tg,Eg,Dg,Og,kg,Ag,jg=t((()=>{vg(),xg(),ag(),wg={BLANK:0,PUNCHED:1,CURTAIN:2,RIBBON:3,DECO:4,PARTY:5,ARCH:6},Tg={RED:0,BROWN:1,BUFF:2,LIME:3,CONCRETE:4,METAL:5,GRANITE:6,WHITE:7,ROOF:8,ROOF_GRAVEL:9,ROOF_MEMBRANE:10,ROOF_PAVERS:11,ROOF_GREEN:12,TERRA:13,STUCCO:14,RED2:15},Eg=class{constructor(e=Float32Array,t=2048){this.T=e,this.a=new e(t),this.length=0}push(...e){let t=this.length+e.length;if(t>this.a.length){let e=new this.T(Math.max(Math.ceil(this.a.length*1.5),t));e.set(this.a.subarray(0,this.length)),this.a=e}for(let t=0;t<e.length;t++)this.a[this.length+t]=e[t];this.length=t}take(){return this.a.slice(0,this.length)}},Dg=class{static workerId=`FacadeBuilder`;constructor(){this.pos=new Eg,this.nrm=new Eg,this.uv=new Eg,this.aF=new Eg,this.aS=new Eg,this.aW=new Eg,this.aX=new Eg,this.tint=new Eg,this.idx=new Eg(Uint32Array),this.n=0}quad(e,t,n,r,i,a,o,s,c,l=0){let u=this.n,d=[[0,r],[n,r],[n,i],[0,i]];for(let[r,i]of d)this.pos.push(e[0]+t[0]*r,i,e[2]+t[2]*r),this.nrm.push(a[0],a[1],a[2]),this.uv.push(r+l,i),this.pushAttrs(o,s,c,n);this.idx.push(u,u+1,u+2,u,u+2,u+3),this.n+=4}pushAttrs(e,t,n,r){this.aF.push(e.floorH??3.3,e.bayW??2.4,e.winW??.5,e.winH??.55),this.aS.push((e.layer??0)+16*(e.base??3)+256*Math.max(0,Math.min(2e3,Math.round(e.tierY??0))),e.seed??0,n,t),this.aW.push(r,e.topY??100,e.baseY??0,e.margin??.6),this.aX.push(e.resid??0,e.lintel??0,e.glass??0,e.depth??.22);let i=e.tint??[1,1,1];this.tint.push(i[0],i[1],i[2])}horiz(e,t,n,r,i,a,o=!1){let s=this.n,c=o?[[e,t],[n,t],[n,r],[e,r]]:[[e,r],[n,r],[n,t],[e,t]];for(let[e,t]of c)this.pos.push(e,i,t),this.nrm.push(0,o?-1:1,0),this.uv.push(e,-t),this.pushAttrs(a,0,0,1);this.idx.push(s,s+1,s+2,s,s+2,s+3),this.n+=4}box(e,t,n,r,i,a,o,s={},c=!0,l=!1,u=null){let d={style:wg.BLANK,gH:0},f=e=>s[e]===null?null:s[e]??s.all??d,p=e=>{let n=f(e);return n&&n.y0!=null&&Math.max(t,n.y0)>=i-1e-4?null:n},m;(m=p(`pz`))&&this.quad([e,0,a],[1,0,0],r-e,Math.max(t,m.y0??t),i,[0,0,1],o,m.style,m.gH),(m=p(`nz`))&&this.quad([r,0,n],[-1,0,0],r-e,Math.max(t,m.y0??t),i,[0,0,-1],o,m.style,m.gH),(m=p(`px`))&&this.quad([r,0,a],[0,0,-1],a-n,Math.max(t,m.y0??t),i,[1,0,0],o,m.style,m.gH),(m=p(`nx`))&&this.quad([e,0,n],[0,0,1],a-n,Math.max(t,m.y0??t),i,[-1,0,0],o,m.style,m.gH),c&&this.horiz(e,n,r,a,i,u??o),l&&this.horiz(e,n,r,a,t,o,!0)}fan(e,t,n,r=!1){let i=this.n;for(let[i,a]of e)this.pos.push(i,t,a),this.nrm.push(0,r?-1:1,0),this.uv.push(i,-a),this.pushAttrs(n,0,0,1);for(let t=1;t+1<e.length;t++){let[n,a]=e[0],[o,s]=e[t],[c,l]=e[t+1];(s-a)*(c-n)-(o-n)*(l-a)>0===r?this.idx.push(i,i+t+1,i+t):this.idx.push(i,i+t,i+t+1)}this.n+=e.length}ring(e,t,n,r,i,a,o,s=!1){for(let c=0;c<a;c++){let l=c/a*Math.PI*2,u=(c+1)/a*Math.PI*2,d=this.n;for(let[a,c]of[[Math.cos(l)*n,Math.sin(l)*n],[Math.cos(l)*r,Math.sin(l)*r],[Math.cos(u)*r,Math.sin(u)*r],[Math.cos(u)*n,Math.sin(u)*n]])this.pos.push(e+a,i,t+c),this.nrm.push(0,s?-1:1,0),this.uv.push(e+a,-(t+c)),this.pushAttrs(o,0,0,1);s?this.idx.push(d,d+1,d+2,d,d+2,d+3):this.idx.push(d,d+2,d+1,d,d+3,d+2),this.n+=4}}cyl(e,t,n,r,i,a,o,s=0,c=!0,l=n){let u=[];for(let e=0;e<a;e++){let t=e/a*Math.PI*2;u.push([Math.cos(t),Math.sin(t)])}for(let c=0;c<a;c++){let[d,f]=u[c],[p,m]=u[(c+1)%a];if(l===n&&o.wrap){let l=this.n,u=Math.hypot(d-p,f-m)*n,h=u*a,g=[[p,0,r],[d,u,r],[d,u,i],[p,0,i]];for(let[r,i,l]of g){let d=r===p?m:f;this.pos.push(e+r*n,l,t+d*n),this.nrm.push(r,0,d),this.uv.push((a-1-c)*u+i,l),this.pushAttrs(o,s,-.02,h)}this.idx.push(l,l+1,l+2,l,l+2,l+3),this.n+=4}else if(l===n){let a=e+p*n,c=t+m*n,l=e+d*n,u=t+f*n,h=Math.hypot(l-a,u-c),g=[(l-a)/h,0,(u-c)/h],_=(d+p)/2,v=(f+m)/2,y=Math.hypot(_,v);this.quad([a,0,c],g,h,r,i,[_/y,0,v/y],o,s,-.01)}else{let a=this.n,c=(d+p)/2,u=(f+m)/2,h=Math.hypot(c,u),g=(n-l)/(i-r),_=Math.hypot(1,g),v=[c/h/_,g/_,u/h/_],y=[[e+p*n,r,t+m*n,0],[e+d*n,r,t+f*n,1],[e+d*l,i,t+f*l,1],[e+p*l,i,t+m*l,0]],b=Math.hypot(d-p,f-m)*n;for(let[e,t,n,r]of y)this.pos.push(e,t,n),this.nrm.push(...v),this.uv.push(r*b,t),this.pushAttrs(o,s,-.01,b);this.idx.push(a,a+1,a+2,a,a+2,a+3),this.n+=4}}c&&l>.01&&this.fan(u.map(([n,r])=>[e+n*l,t+r*l]),i,o)}innerRing(e,t,n,r,i,a,o){this.quad([e,0,t],[1,0,0],n-e,i,a,[0,0,1],o,0,0),this.quad([n,0,r],[-1,0,0],n-e,i,a,[0,0,-1],o,0,0),this.quad([e,0,r],[0,0,-1],r-t,i,a,[1,0,0],o,0,0),this.quad([n,0,t],[0,0,1],r-t,i,a,[-1,0,0],o,0,0)}release(){for(let e of[`pos`,`nrm`,`uv`,`aF`,`aS`,`aW`,`aX`,`tint`,`idx`]){let t=this[e];t.a=new t.T(0),t.length=0}this.n=0}build({consume:e=!1}={}){if(!this.n)return null;let t=new mo,n=(e,t)=>new K(e.take(),t);t.setAttribute(`position`,n(this.pos,3)),t.setAttribute(`normal`,n(this.nrm,3)),t.setAttribute(`uv`,n(this.uv,2)),t.setAttribute(`aF`,n(this.aF,4)),t.setAttribute(`aS`,n(this.aS,4)),t.setAttribute(`aW`,n(this.aW,4)),t.setAttribute(`aX`,n(this.aX,4)),t.setAttribute(`aTint`,n(this.tint,3));let r=this.idx.take();return t.setIndex(this.n>65535?new K(r,1):new K(Uint16Array.from(r),1)),t.computeBoundingSphere(),t.computeBoundingBox(),e&&this.release(),t}},Og=`
attribute vec4 aF; attribute vec4 aS; attribute vec4 aW; attribute vec4 aX; attribute vec3 aTint;
varying vec2 vFac; flat varying vec4 vF; flat varying vec4 vS; flat varying vec4 vW; flat varying vec4 vX; flat varying vec3 vTint;
varying vec3 vWPos; varying vec3 vWN;
`,kg=`
vFac = uv; vF = aF; vS = aS; vW = aW; vX = aX; vTint = aTint;
vec4 fwp = modelMatrix * vec4(transformed, 1.0);
vWPos = fwp.xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);
`,Ag=`
uniform highp sampler2DArray tWallC; uniform highp sampler2DArray tWallN; uniform highp sampler2DArray tWallH; uniform sampler2D tDetail;
uniform sampler2D tInterior; uniform sampler2D tSigns; uniform sampler2D tNoise;
uniform float uInteriorGain; uniform float uShopGain; uniform float uNightK; uniform float uDnTime; // (daynight)
varying vec2 vFac; flat varying vec4 vF; flat varying vec4 vS; flat varying vec4 vW; flat varying vec4 vX; flat varying vec3 vTint;
varying vec3 vWPos; varying vec3 vWN;

float fh1(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float fh1b(vec3 p) { return fh1(p.xy + p.z * 17.13); }
float layerScale(float L) {
  if (L > 12.5) return L < 13.5 ? 3.0 : (L < 14.5 ? 3.0 : 1.8); // (textures r2) terracotta 8 rows / 3 m, stucco, red brick 2 (24 courses)
  return L < 2.5 ? 1.8 /* (street r10) 2.4 -> 1.8: finer brick (director: 'brick texel scale reads too big') */ : (L < 3.5 ? 3.0 : (L < 4.5 ? 4.0 : (L < 5.5 ? 3.0 : (L < 6.5 ? 2.0 : (L < 7.5 ? 2.4 : (L < 8.5 ? 8.0 : (L < 9.5 ? 4.0 : (L < 10.5 ? 8.0 : (L < 11.5 ? 8.0 : 4.0)))))))));
}
// relief depth (m) of each layer's height map, for parallax
float layerDepth(float L) { if (L > 12.5) return L < 13.5 ? 0.008 : (L < 14.5 ? 0.004 : 0.014); /* (textures r2) */ return L < 2.5 ? 0.014 : (L < 3.5 ? 0.01 : (L < 4.5 ? 0.008 : (L < 7.5 ? 0.004 : (L < 8.5 ? 0.006 : (L < 9.5 ? 0.02 : (L < 10.5 ? 0.004 : (L < 11.5 ? 0.008 : 0.02))))))); }
vec3 gVt = vec3(0.0, 0.0, 1.0); float gPar = 0.0; float gDet = 0.0; vec2 gOff = vec2(0.0);
struct Surf { vec3 alb; float rough; float metal; vec3 n; vec3 emis; };
vec2 gDx, gDy; float gLodI; float gGlass = 0.0; float gF0 = 0.04; // coated-glass reflectance weight/value // screen-space UV gradients (computed in uniform control flow)
float gWeather = 0.0;
Surf wallSurf(vec2 uvm, float L, vec3 tint) {
  float s = layerScale(L);
  vec2 uv = (uvm + gOff) / s;
  vec2 dx = gDx / s, dy = gDy / s;
  // (textures r3) limestone ashlar (L3): the 3 m tile's 6 courses repeat block-for-block on close walls. Each course
  // (bed joints measured in walls_col layer 3: v' = fract(v - 0.1455) at 0/.1694/.3398/.5097/.6797/.8301) gets its own
  // random slide along the wall (the seam hides in the bed joint) and each block (head joints: even courses 0.6367, odd
  // 0.3174 / 0.955) its own tone, so no two courses or blocks line up across tiles. Pure UV math, no texture tap.
  float lsTone = 1.0; vec3 lsHue = vec3(1.0);
  if (L > 2.5 && L < 3.5) {
    float vp = uv.y - 0.1455, fy = fract(vp);
    float ri = fy < 0.1694 ? 0.0 : (fy < 0.3398 ? 1.0 : (fy < 0.5097 ? 2.0 : (fy < 0.6797 ? 3.0 : (fy < 0.8301 ? 4.0 : 5.0))));
    float g = floor(vp) * 6.0 + ri;
    vec2 bs = gOff * 3.17 + vec2(g * 0.713, g * 1.37);
    uv.x += fh1(bs);
    float odd = mod(ri, 2.0);
    float tx = uv.x - (odd > 0.5 ? 0.3174 : 0.6367);
    float bk = odd > 0.5 ? floor(tx) * 2.0 + step(0.6376, fract(tx)) : floor(tx);
    float h1 = fh1(bs + vec2(bk * 0.917, 3.3)), h2 = fh1(bs + vec2(5.1, bk * 1.31));
    lsTone = 0.86 + 0.2 * h1;
    lsHue = mix(vec3(1.0), h2 > 0.5 ? vec3(1.04, 1.0, 0.93) : vec3(0.95, 0.97, 1.0), abs(h2 - 0.5) * 1.6);
  }
  // parallax offset from the baked height (close range only; 2 taps: coarse + refine)
  vec3 hao = textureGrad(tWallH, vec3(uv, L), dx, dy).rgb;
  if (gPar > 0.0) {
    vec2 pv = gVt.xy / max(gVt.z, 0.35) * layerDepth(L) / s * gPar;
    vec2 uv1 = uv + pv * (hao.r - 0.55);
    hao = textureGrad(tWallH, vec3(uv1, L), dx, dy).rgb;
    uv = uv + pv * (hao.r - 0.55);
  }
  // footprint (texels per pixel): when the mortar / gravel period nears 2-4 px, pre-filter a little harder, lower the
  // pattern contrast toward the layer average and convert lost normal variance into roughness (Toksvig-style)
  float tpp = min(length(dx), length(dy)) * 1024.0; // minor footprint axis: the major axis at grazing angles is anisotropic filtering's job
  float fl = smoothstep(3.0, 10.0, tpp);
  dx *= 1.0 + 0.3 * fl; dy *= 1.0 + 0.3 * fl;
  vec3 c = textureGrad(tWallC, vec3(uv, L), dx, dy).rgb;
  vec3 d = textureGrad(tWallN, vec3(uv, L), dx, dy).rgb;
  vec3 cAvg = textureLod(tWallC, vec3(0.5, 0.5, L), 10.0).rgb;
  c = mix(c, cAvg, 0.15 * fl); // light touch: the mips already average the mortar
  // one coherent, weathered-muted palette (user feedback): pull every layer toward its own average (-15 % contrast)
  // and desaturate 18 %, keeping the layer's brightness
  c = mix(cAvg, c, 0.85);
  c = mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, 0.82);
  c *= lsTone * lsHue; // (textures r3) per-block limestone tone
  // (textures) building-scale weathering the 1.8 m brick tile cannot carry without repeating (refs/city3 street_curvedcurb):
  // peeling whitewash / old paint left on the brick faces (mortar shows through), darker re-pointed / patched brick areas,
  // and blotchy stains on stone + concrete. World-space macro noise per building (gOff), no extra texture fetch but two
  // lod-0 noise taps.
  if (L < 4.5 || L > 12.5 || (L > 6.5 && L < 7.5)) { // (textures r2) + terracotta / stucco / red brick 2 / white brick (critic: 'white brick clean')
    vec2 wq = uvm + gOff * 13.0;
    vec3 n1 = textureLod(tNoise, wq / vec2(17.0, 11.0), 0.0).rgb;
    vec3 n2 = textureLod(tNoise, wq / vec2(2.3, 1.7) + 0.37, 0.0).rgb;
    float face = smoothstep(0.3, 0.62, hao.r);
    if (L < 2.5 || L > 14.5) {
      float bsel = fract(gOff.x * 7.13 + gOff.y * 3.1); // only ~1 in 3 brick buildings carries old paint
      float pAmt = (L < 0.5 || L > 14.5 ? 1.0 : (L < 1.5 ? 0.6 : 0.4)) * step(bsel, 0.25); // (textures r2) 0.35 -> 0.25 of brick buildings
      float paint = smoothstep(0.76, 0.86, n1.r + 0.05 * (n2.g - 0.5)) * pAmt; // (textures r5) softer, fewer: 'noisy white speckle' // (textures r2) 0.7 -> 0.74: read as leprous speckle
      vec3 pc = vec3(0.68, 0.66, 0.62) * (0.88 + 0.16 * n2.b);
      c = mix(c, mix(pc, c, 0.3), paint * mix(0.5, 1.0, face) * 0.42); // (textures r5) 0.6 -> 0.42
      float rep = smoothstep(0.7, 0.76, n1.g + 0.15 * (n2.r - 0.5));
      c *= mix(vec3(1.0), vec3(1.02, 0.9, 0.86) * 0.86, rep * face);
      c *= 1.0 - 0.1 * smoothstep(0.55, 0.8, n1.b) * (1.0 - face * 0.5); // dirty mortar patches
    } else {
      float st = smoothstep(0.55, 0.85, n1.g * 0.8 + n2.r * 0.35);
      c *= 1.0 - 0.16 * st;
      c = mix(c, c * vec3(1.03, 1.0, 0.94), smoothstep(0.6, 0.8, n1.r) * 0.6);
    }
  }
  // (textures r4) critic: 'brick washed out, too much sheen, weak mortar'. Brick: darker recessed mortar (height-driven,
  // fades once the joints are sub-pixel), matte faces with per-brick roughness breakup; all masonry gets a stronger relief
  // normal at close / mid range so walls stop reading as printed images
  bool brickL = L < 2.5 || L > 14.5 || (L > 6.5 && L < 7.5);
  bool masonL = L < 4.5 || L > 5.5 && L < 8.0 || L > 12.5;
  if (brickL) c *= mix(mix(0.62, 0.8, fl), 1.0, smoothstep(0.28, 0.55, hao.r));
  float rbk = textureLod(tNoise, uv * vec2(9.0, 22.0) + 0.3, 0.0).g; // per-brick-ish roughness breakup
  Surf o; o.alb = c * tint * mix(1.0, hao.g, 0.7 * (1.0 - 0.3 * fl)); o.rough = min(1.0, d.b + 0.12 * fl); o.metal = (L > 4.5 && L < 5.5) ? 0.6 : 0.0;
  if (masonL) o.rough = clamp(max(o.rough, 0.74) + 0.18 * (rbk - 0.5), 0.6, 1.0);
  vec2 nxy = (d.rg * 2.0 - 1.0) * (1.0 - 0.5 * fl) * (masonL ? 1.0 + 0.7 * (1.0 - fl) : 1.0); // (textures r4) x1.7 relief
  if (gDet > 0.0) { // micro detail normal (0.5 m tile) close to the camera
    vec2 dn = textureGrad(tDetail, uvm * 2.0, gDx * 2.0, gDy * 2.0).rg * 2.0 - 1.0;
    nxy += dn * gDet * (L > 4.5 && L < 7.5 ? 0.25 : 0.6);
  }
  o.n = normalize(vec3(nxy, sqrt(max(0.0, 1.0 - dot(nxy, nxy)))));
  o.emis = vec3(0.0);
  gWeather = hao.b;
  return o;
}
// (textures r2) grime / leak decal sheet ($imagegen, walls_hao layer 16): R, G, B each hold 8 columns of vertical
// streak masks (1 = soot) whose source is at the top. q.x 0..1 across the decal, q.y 0 (source) .. 1 (fade end); g = dq
// per unit of vFac (screen gradients come from gDx / gDy, computed in uniform control flow)
float grimeDecal(vec2 q, vec2 g, float id) {
  if (q.x <= 0.0 || q.x >= 1.0 || q.y <= 0.0 || q.y >= 1.0) return 0.0;
  float col = mod(id, 8.0), ch = floor(id / 8.0);
  vec2 k = vec2(g.x / 8.0, -g.y);
  vec3 m = textureGrad(tWallH, vec3((col + clamp(q.x, 0.02, 0.98)) / 8.0, 1.0 - q.y, 16.0), gDx * k, gDy * k).rgb;
  return ch < 0.5 ? m.r : (ch < 1.5 ? m.g : m.b);
}
// AA box mask: 1 inside [a,b] with filter width w
// box-filtered coverage of [a,b] over the pixel footprint [x - w/2, x + w/2]: features thinner than a pixel fade to
// their true coverage instead of popping between 0 and >= 0.5 (mullion / frame crawl)
float boxAA(float x, float a, float b, float w) { w *= 1.2; return clamp((min(b, x + 0.5 * w) - max(a, x - 0.5 * w)) / w, 0.0, 1.0); }
// skyline: box-filtered coverage of the PERIODIC interval [a,b] + k*p over [x - w/2, x + w/2] (exact integral of the
// periodic step). Resolves window rows / piers at any distance and converges to the true average (b-a)/p once the
// period is sub-pixel -> distant towers keep their floor bands and pier lines instead of turning into flat boxes.
float pInt(float x, float p, float a, float b) { float k = floor(x / p); return k * (b - a) + clamp(x - k * p - a, 0.0, b - a); }
float pbox(float x, float p, float a, float b, float w) { w = max(w, 1e-4); return clamp((pInt(x + 0.5 * w, p, a, b) - pInt(x - 0.5 * w, p, a, b)) / w, 0.0, 1.0); }
vec3 gSpecTint = vec3(1.0); // coated-glass reflection tint (curtain walls)
float gSash = 0.0; // (street r9) old masonry sash glass: lower grazing (F90) reflectance
float gSashV = 1.0; // (street r11) per-window reflection strength of old sash glass (wavy / dusty / cleaned panes)
vec2 gWob = vec2(0.0); // (skyline r5) low-frequency curtain-wall panel deflection (wavy, broken reflections at any range)

// Interior mapping into a room box [0,rw]x[0,rh]x[-rd,0], entering at p (z=0) along dir (dir.z<0)
vec3 interior(vec2 p, vec3 dir, float rw, float rh, float rd, float tile, float lit, float shop) {
  vec3 invd = 1.0 / dir;
  float tx = dir.x > 0.0 ? (rw - p.x) * invd.x : -p.x * invd.x;
  float ty = dir.y > 0.0 ? (rh - p.y) * invd.y : -p.y * invd.y;
  float tz = -rd * invd.z;
  float t = min(min(tx, ty), tz);
  vec3 h = vec3(p, 0.0) + dir * t;
  float depth = clamp(-h.z / rd, 0.0, 1.0);
  vec2 tileUV = vec2(mod(tile, 4.0), floor(tile / 4.0));
  vec3 col;
  if (t == tz) {
    vec2 q = vec2(h.x / rw, h.y / rh);
    q = clamp(q, 0.01, 0.99);
    col = textureLod(tInterior, vec2((tileUV.x + q.x) / 4.0, 1.0 - (tileUV.y + 1.0 - q.y) / 4.0), gLodI).rgb;
  } else if (t == ty) {
    if (dir.y > 0.0) { // ceiling
      vec2 c = vec2(h.x / rw, -h.z / rd);
      float panel = step(abs(c.x - 0.5), 0.22) * step(abs(fract(c.y * 2.0) - 0.5), 0.18);
      // ceiling tiles + recessed troffers (dim in daylight, soft-edged, fading with room depth so they sit on the ceiling)
      float pe = smoothstep(0.26, 0.2, abs(c.x - 0.5)) * smoothstep(0.22, 0.15, abs(fract(c.y * 2.0) - 0.5));
      col = vec3(0.72, 0.72, 0.7) * (0.75 + 0.25 * lit) + pe * lit * vec3(0.55, 0.53, 0.48) * (1.0 + shop) * (1.0 - 0.6 * c.y);
    } else { // floor
      col = shop > 0.5 ? vec3(0.55, 0.52, 0.48) : (tile < 5.5 ? vec3(0.23, 0.24, 0.26) : vec3(0.36, 0.25, 0.17));
    }
  } else {
    col = textureLod(tInterior, vec2((tileUV.x + 0.5) / 4.0, 1.0 - (tileUV.y + 0.6) / 4.0), 7.0).rgb * (dir.x > 0.0 ? 0.8 : 0.7);
    col *= mix(0.7, 1.0, clamp(h.y / rh, 0.0, 1.0));
  }
  col *= mix(1.0, 0.55, depth);
  return col * mix(0.55, 1.0, lit);
}

Surf facade() {
  vec3 N = normalize(vWN);
  gDx = dFdx(vFac); gDy = dFdy(vFac);
  Surf o;
  float roofL = 8.0;
  float Lw = mod(vS.x, 16.0);
  float Lb = mod(floor(vS.x / 16.0 + 0.01), 16.0);
  float tierY = floor(vS.x / 256.0 + 0.001); // (skyline r12) base height of this set-back tier (0 = street mass)
  float style = vS.w + 0.01;
  float seed = vS.y;
  vec3 tint = vTint;
  // (textures r2) extra wall materials without touching the zoning code: a per-building hash re-skins some walls
  // (texture layer only; Lw keeps driving the zoning logic): ~45 % of red brick -> orange-red common-bond tenement brick,
  // the warm 'ochre' limestone + some buff brick -> terracotta ashlar, some low concrete / white-brick walls -> stucco
  float LwT = Lw;
  {
    float vq = fract(seed * 9.271 + 0.137);
    if (Lw < 0.5 && vq < 0.45) LwT = 15.0;
    else if ((Lw > 2.5 && Lw < 3.5 && vTint.r - vTint.b > 0.18 && vq < 0.8) || (Lw > 1.5 && Lw < 2.5 && vq < 0.18)) LwT = 13.0;
    else if (((Lw > 3.5 && Lw < 4.5) || (Lw > 6.5 && Lw < 7.5)) && vW.y - vW.z < 30.0 && vq < 0.4) LwT = 14.0;
    // (textures r4) critic: 'pale buff brick on every building; push brick reds / browns'. Some buff walls become
    // sooty brown or orange-red common brick (texture only; the zoning family / tint is kept)
    else if (Lw > 1.5 && Lw < 2.5 && vq >= 0.18 && vq < 0.36) LwT = 1.0;
    else if (Lw > 1.5 && Lw < 2.5 && vq >= 0.36 && vq < 0.5) LwT = 15.0;
  }
  // large-scale grime/tone variation
  vec3 nz = textureLod(tNoise, vWPos.xz / 180.0 + vWPos.y / 300.0, 0.0).rgb;
  vec3 nz2 = textureLod(tNoise, vWPos.xz / 23.0 + vWPos.y / 41.0 + 0.5, 0.0).rgb; // mid-scale macro variation (kills tiling)
  float camD = length(cameraPosition - vWPos);
  gPar = 1.0 - smoothstep(12.0, 35.0, camD);
  gDet = 1.0 - smoothstep(6.0, 22.0, camD);
  gOff = vec2(fract(seed * 0.618), fract(seed * 0.377)) * 8.0; // per-building texture offset: neighbours never tile in lockstep
  vec3 V = normalize(cameraPosition - vWPos);
  if (N.y > 0.5) {
    gVt = vec3(V.x, -V.z, V.y);
    vec3 rt = tint * (0.8 + 0.4 * nz.r) * (0.9 + 0.2 * nz2.g);
    // (textures r5) critic: 'flat pale-grey roof slabs' (uncovered roofs on the membrane layer 10: mean 0.71, almost no
    // detail) and 'untextured black box' (metal-panel bulkhead tops, layer 5). Per-building roof family: seamed dark
    // mod-bit, warm gravel ballast, buff pavers, or a dirtier grey membrane; metal bulkhead tops get rolled roofing.
    {
      float rq = fract(seed * 7.13 + 0.41);
      if (Lw > 9.5 && Lw < 10.5) {
        if (rq < 0.3) { Lw = 8.0; rt *= 1.3; }
        else if (rq < 0.52) { Lw = 9.0; rt *= vec3(1.08, 0.98, 0.86); }
        else if (rq < 0.64) { Lw = 11.0; rt *= vec3(1.02, 0.93, 0.84); }
        else rt *= 0.66 * vec3(1.0, 0.97, 0.93);
      } else if (Lw > 4.5 && Lw < 5.5) { Lw = 8.0; rt = vec3(1.25, 1.24, 1.2) * (0.9 + 0.2 * nz2.g); }
    }
    o = wallSurf(vFac, Lw, rt);
    // roofs: dirt collects near parapets/edges is handled by AO; add broad wet/dirty patches
    if (Lw > 7.5) { o.alb *= 1.0 - 0.25 * smoothstep(0.55, 0.85, nz2.b); o.rough = mix(o.rough, 0.55, smoothstep(0.6, 0.9, nz2.b) * gWeather); }
    if (Lw > 7.5 && gDet > 0.0) { // close range: 3.7x rotated re-sample of the same roof layer sharpens granules / gravel
      float sc = layerScale(Lw) / 3.7;
      mat2 R = mat2(0.8, -0.6, 0.6, 0.8);
      vec3 dcol = textureGrad(tWallC, vec3(R * vFac / sc + 0.31, Lw), R * gDx / sc, R * gDy / sc).rgb;
      float la = dot(textureLod(tWallC, vec3(0.5, 0.5, Lw), 10.0).rgb, vec3(0.333));
      o.alb *= mix(1.0, clamp(dot(dcol, vec3(0.333)) / max(la, 0.02), 0.6, 1.5), 0.45 * gDet);
    }
    // (textures r3) critic: 'flat roofs uniform dark grey with fine noise, no seams, tar patches, flashing, drains'.
    // World-space roof wear, all analytic (no texture tap), box-filtered by the pixel footprint so it resolves from the
    // rooftops to the aerial view: rolled-roofing lap seams (bitumen / membrane, 0.95 m strips, staggered end laps),
    // sharp-edged glossy tar repairs, roof drains with a dark silt ring, and ponding tide-lines in the low spots.
    if (Lw > 7.5 && Lw < 11.5) {
      vec2 rp = vFac + gOff * 7.0;
      float fw = max(length(gDx), length(gDy)) + 1e-4;
      bool rot = fract(seed * 3.71) > 0.5;
      vec2 sp = rot ? rp.yx : rp;
      if (Lw < 8.5 || (Lw > 9.5 && Lw < 10.5)) {
        float sw = 0.95, si = floor(sp.y / sw), sf = sp.y - si * sw;
        float lap = pbox(sp.y, sw, 0.0, 0.05, fw) ;
        float bleed = pbox(sp.y, sw, 0.05, 0.13, fw);
        float endL = 9.0 + 3.0 * fh1(vec2(si, seed)), ex = sp.x + fh1(vec2(seed, si)) * endL;
        float endLap = pbox(ex, endL, 0.0, 0.06, fw) * boxAA(sf, 0.05, sw, fw);
        float stripT = 0.94 + 0.12 * fh1(vec2(si, floor(ex / endL) + seed));
        float fade = 1.0 - smoothstep(0.06, 0.25, fw); // seams dissolve into the average once sub-pixel
        o.alb *= mix(1.0, stripT, fade);
        o.alb *= 1.0 - (Lw < 8.5 ? 0.3 : 0.2) * max(lap, endLap) * fade;
        o.alb *= 1.0 + (Lw < 8.5 ? 0.12 : -0.06) * bleed * fade;
        o.rough = mix(o.rough, 0.45, lap * fade * 0.6);
      }
      // tar repairs: ~1 per 3 cells of 6 x 7 m, 0.5-2.4 m, jagged-ish edges from the noise
      vec2 cg = vec2(6.0, 7.0), ci = floor(rp / cg), cf = rp - ci * cg;
      float h1 = fh1(ci + seed * 0.13), h2 = fract(h1 * 71.3 + 0.2), h3 = fract(h1 * 13.7 + 0.6);
      if (h1 < 0.36) {
        vec2 hs = vec2(0.25 + 1.0 * h2, 0.25 + 0.9 * h3), cc = vec2(1.3 + 3.4 * h3, 1.3 + 4.4 * h2);
        vec2 dq = abs(cf - cc) - hs;
        float dd = max(dq.x, dq.y) + 0.12 * (nz2.r - 0.5);
        float inT = 1.0 - smoothstep(-fw, fw, dd);
        o.alb = mix(o.alb, vec3(0.055, 0.052, 0.05) * (0.8 + 0.4 * nz2.g), inT * 0.85);
        o.rough = mix(o.rough, 0.32, inT);
      }
      // drains: one per 12 x 11 m cell (inset from the cell edge), dark grate + silt ring
      vec2 dg = vec2(12.0, 11.0), di = floor(rp / dg), df = rp - di * dg;
      vec2 dc = vec2(3.0, 3.0) + vec2(fh1(di + 7.1), fh1(di + 3.3)) * vec2(6.0, 5.0);
      float dr = length(df - dc);
      float silt = 1.0 - smoothstep(0.15, 1.1 + 0.4 * nz2.b, dr);
      o.alb *= 1.0 - 0.3 * silt;
      o.alb = mix(o.alb, vec3(0.03), 1.0 - smoothstep(0.13 - fw, 0.13 + fw, dr));
      o.rough = mix(o.rough, 0.4, silt * 0.7);
      // ponding: darker damp low spots with a pale dried tide-line at their edge
      float pn = textureLod(tNoise, rp / 9.0 + 0.71, 0.0).g * 0.7 + nz2.b * 0.3;
      float pond = smoothstep(0.62, 0.7, pn);
      float tide = (1.0 - smoothstep(0.0, 0.012 + fw * 0.05, abs(pn - 0.62))) * (1.0 - smoothstep(0.1, 0.4, fw));
      o.alb *= (1.0 - 0.18 * pond) * (1.0 + 0.25 * tide);
      o.rough = mix(o.rough, 0.5, pond * 0.5);
    }
    return o;
  }
  if (N.y < -0.5) { o = wallSurf(vFac, LwT, tint * 0.6); return o; } // (textures r2) LwT
  vec3 T = normalize(cross(vec3(0.0, 1.0, 0.0), N));
  vec3 Vt = vec3(dot(V, T), V.y, max(dot(V, N), 0.06));
  gVt = vec3(Vt.x, Vt.y, dot(V, N));
  vec3 dirIn = vec3(-Vt.x, -Vt.y, -Vt.z);
  float u = vFac.x;
  float y = vFac.y - vW.z;
  float faceW = vW.x;
  float topY = vW.y - vW.z;
  float aw = max(fwidth(u), 1e-4);
  float ah = max(fwidth(vFac.y), 1e-4);
  gLodI = clamp(log2(max(aw, ah) * 512.0 / max(vF.y, 2.0)) + 0.5, 0.0, 9.0);
  float gHs = vS.z;
  float gH = abs(gHs);
  // base wall
  // (skyline r5) per-building colour identity (value +-9 %, warm / cool shift) + broad soot blotches, so neighbouring
  // blocks of the same layer never read as one repeated atlas
  float bv = fract(seed * 13.73 + 0.29), bh = fract(seed * 5.91 + 0.61) * 2.0 - 1.0;
  vec3 bTone = (0.91 + 0.18 * bv) * vec3(1.0 + 0.045 * bh, 1.0 + 0.008 * bh, 1.0 - 0.05 * bh);
  // (textures r4) per-building masonry identity: brick walls get one of cream / buff / grey / tan / red-brown casts and a
  // -10..-25 % value drop (critic: 'brick bright, washed-out, the same on every building')
  bool brickW = LwT < 2.5 || LwT > 14.5 || (LwT > 6.5 && LwT < 7.5);
  if (brickW) {
    float pq = fract(seed * 17.31 + 0.53);
    vec3 bCast = pq < 0.2 ? vec3(0.9, 0.9, 0.92) : (pq < 0.4 ? vec3(1.04, 0.95, 0.84) : (pq < 0.55 ? vec3(1.08, 0.9, 0.8) : (pq < 0.7 ? vec3(0.96, 0.97, 0.98) * 0.92 : vec3(1.0))));
    bTone *= bCast * (0.95 - 0.13 * fract(seed * 29.7));
  } else if (LwT < 4.5 || LwT > 12.5) bTone *= 0.93 - 0.08 * fract(seed * 29.7);
  o = wallSurf(vec2(u, vFac.y), LwT /* (textures r2) */, tint * bTone * (0.88 + 0.24 * nz.g) * (0.93 + 0.14 * nz2.r) * (1.0 - 0.14 * smoothstep(0.5, 0.85, nz.b)));
  // ground grime & soot, dark drip band under the coping / cornice, wet-looking streak roughness
  o.alb *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));
  if (style < 1.5 || style > 2.5) {
    // (textures r4) heavy large-scale weathering (critic: 'repeating AO smudges, clean facades'):
    //  - street grime: sooty value + desaturation rising 4-12 m from the pavement, ragged top edge
    //  - water staining under the coping / cornice: long dark streak columns 3-14 m, some greenish
    //  - soot: per-building amount; big blotches weighted to the upper floors and the building corners
    vec3 wn = textureGrad(tNoise, vec2(u * 0.08 + seed * 0.71, y * 0.05), gDx * vec2(0.08, 0.0), gDy * vec2(0.0, 0.05)).rgb;
    float gTop = 4.0 + 8.0 * fract(seed * 3.77) + 3.0 * (wn.r - 0.5);
    float sg = (1.0 - smoothstep(0.0, gTop, y)) * (0.6 + 0.4 * wn.g);
    vec3 sootC = vec3(0.34, 0.32, 0.3);
    o.alb = mix(o.alb, o.alb * sootC * 1.5, 0.55 * sg);
    float colN = textureGrad(tNoise, vec2(u * 0.55 + seed * 1.3, 0.37), gDx * vec2(0.55, 0.0), gDy * vec2(0.55, 0.0)).b;
    float runL = 3.0 + 11.0 * colN;
    float dTop = topY - y;
    float stain = smoothstep(0.45, 0.75, colN) * (1.0 - smoothstep(0.0, runL, dTop)) * (0.65 + 0.35 * wn.b);
    vec3 stC = mix(vec3(0.5, 0.48, 0.46), vec3(0.46, 0.5, 0.45), step(0.7, fract(seed * 5.5)));
    o.alb = mix(o.alb, o.alb * stC, stain * 0.8);
    o.rough = mix(o.rough, 0.55, stain * 0.5);
    float sootAmt = fract(seed * 41.3); sootAmt = sootAmt * sootAmt;
    vec3 sn = textureGrad(tNoise, vec2(u, y) * 0.035 + seed * 0.19, gDx * 0.035, gDy * 0.035).rgb;
    float corner = 1.0 - smoothstep(0.0, 3.0, min(u, faceW - u));
    float soot = smoothstep(0.45, 0.8, sn.r + 0.25 * corner + 0.2 * smoothstep(0.3, 1.0, y / max(topY, 1.0))) * (0.3 + 0.7 * sootAmt);
    o.alb *= 1.0 - 0.24 * soot; // (textures r5) 0.38 -> 0.24: under lighting2 r3's contrast the blotches read as camouflage
  }
  if (style < 1.5 || style > 2.5) { // (textures r2) decal-sheet splash grime rising from the pavement + leaks from the coping
    float gs = 2.6, gi = floor(u / gs), gr = fh1(vec2(gi + seed * 1.7, seed * 5.3));
    float gSp = grimeDecal(vec2(u / gs - gi, y / (0.9 + 1.6 * gr)), vec2(1.0 / gs, 1.0 / (0.9 + 1.6 * gr)), floor(gr * 24.0));
    o.alb *= 1.0 - 0.3 * gSp;
    float gLen = 3.0 + 10.0 * fract(gr * 7.3);
    float gCo = grimeDecal(vec2(u / gs - gi, (topY - 0.2 - y) / gLen), vec2(1.0 / gs, 1.0 / gLen), floor(fract(gr * 3.7) * 24.0));
    o.alb *= 1.0 - 0.34 * gCo * step(0.3, fract(gr * 11.1));
  }
  float drip = (1.0 - smoothstep(0.0, 3.0, topY - y)) * (0.5 + 0.5 * textureGrad(tNoise, vec2(u * 0.35, 0.3 * seed), gDx * vec2(0.35, 0.0), gDy * vec2(0.35, 0.0)).g);
  o.alb *= 1.0 - 0.22 * drip;
  o.rough = clamp(o.rough - 0.08 * gWeather, 0.05, 1.0);
  // (skyline r2) long vertical rain / soot streaks (0.5-3 m wide, tens of metres long), strongest under the coping and
  // setback ledges, plus a soft value gradient (tall walls darken toward the street, the top floors wash out slightly)
  if (style < 1.5 || style > 2.5) {
    vec2 sq = vec2(u * 0.0045 + seed * 0.37, vFac.y * 0.0009);
    float stk = textureGrad(tNoise, sq, gDx * vec2(0.0045, 0.0009), gDy * vec2(0.0045, 0.0009)).g;
    float stk2 = textureGrad(tNoise, sq * vec2(3.1, 1.3) + 0.21, gDx * vec2(0.014, 0.0012), gDy * vec2(0.014, 0.0012)).b;
    float under = 0.45 + 0.55 * (1.0 - smoothstep(0.0, 26.0, topY - y));
    o.alb *= 1.0 - (0.2 * smoothstep(0.52, 0.8, stk) + 0.1 * smoothstep(0.55, 0.85, stk2)) * under;
    o.alb *= mix(0.86, 1.04, smoothstep(0.0, 70.0, y)) ;
    // (skyline r9) critic: 'hero tower reads as a clean smooth extrusion, no weathering / grime streaks'. Pier-scale soot
    // runs (2-6 m wide, 60-200 m long) washing down from every coping / setback, and a sooty band just under each ledge
    if (topY > 40.0) {
      vec2 gq9 = vec2(u * 0.19 + seed * 0.53, vFac.y * 0.006);
      vec2 gd9 = vec2(0.19, 0.006);
      float g1 = textureGrad(tNoise, gq9, gDx * gd9, gDy * gd9).r;
      float g2 = textureGrad(tNoise, gq9 * vec2(2.3, 0.6) + 0.37, gDx * gd9 * vec2(2.3, 0.6), gDy * gd9 * vec2(2.3, 0.6)).g;
      float under2 = 0.35 + 0.65 * (1.0 - smoothstep(0.0, 45.0, topY - y));
      o.alb *= 1.0 - 0.2 * smoothstep(0.42, 0.78, 0.6 * g1 + 0.4 * g2) * under2;
      o.alb *= 1.0 - 0.14 * (1.0 - smoothstep(0.0, 5.0, topY - y));
    }
  }
  if (style > 5.5) { // ---- skyline: stainless crown tier with a sunburst arch of triangular windows (Chrysler-like)
    float h = max(topY, 1.0);
    float ex = (u - 0.5 * faceW) / (0.5 * faceW), ey = (y + 0.3 * h) / (1.25 * h);
    float e = length(vec2(ex, ey)), fw = fwidth(e) + 1e-4;
    float ray = fract(atan(max(ey, 0.0), ex) / 3.14159265 * 9.0);
    float band = smoothstep(0.6 - fw, 0.6 + fw, e) * (1.0 - smoothstep(0.98 - fw, 0.98 + fw, e));
    float tw = clamp((0.95 - e) / 0.32, 0.0, 1.0) * 0.75;
    float tri = band * (1.0 - smoothstep(tw - 0.06, tw + 0.06, abs(ray - 0.5) * 2.0)) * smoothstep(0.62, 0.66, e);
    float rim = 1.0 - smoothstep(0.0, 2.5 * fw, abs(e - 0.99));
    Surf s = o;
    // (skyline r2) true stainless (Nirosta) reflectance: bright F0 ~0.55, brushed, so the crown flashes sky / sun
    vec3 ss = vec3(0.56, 0.575, 0.6) * (0.9 + 0.2 * nz2.r);
    s.alb = ss * mix(0.82, 1.1, band) * (1.0 - 0.35 * rim); s.metal = 0.95; s.rough = 0.2 + 0.1 * nz2.g;
    s.alb = mix(s.alb, vec3(0.03, 0.034, 0.04), tri); s.rough = mix(s.rough, 0.08, tri); s.metal = mix(s.metal, 0.0, tri);
    s.emis = vec3(0.0);
    s.n = normalize(vec3(0.0, 0.3 * band - 0.4 * rim, 1.0));
    s.emis = vec3(0.0); gGlass = tri; gF0 = 0.1;
    return s;
  }
  if (style > 4.5) { // ---- party wall: common brick (whatever the street face is), weathering, demolished-neighbour
    // parge coat + flashing line, faded ghost-sign paint
    float r1 = fract(seed * 3.713), r2 = fract(seed * 7.137), r3 = fract(seed * 11.31);
    float Lp = r3 < 0.3 ? 0.0 : (r3 < 0.6 ? 15.0 : 1.0); // (textures r2) + common-bond red brick 2
    o = wallSurf(vec2(u, vFac.y), Lp, vec3(0.9, 0.88, 0.86) * (0.86 + 0.28 * nz.g) * (0.92 + 0.16 * nz2.r));
    vec3 st = textureGrad(tNoise, vec2(u * 0.23 + seed, vFac.y * 0.021), gDx * vec2(0.23, 0.0), gDy * vec2(0.0, 0.021)).rgb;
    o.alb *= 1.0 - 0.28 * smoothstep(0.5, 0.85, st.g) * (0.4 + 0.6 * (1.0 - smoothstep(0.0, 30.0, topY - y)));   // rain streaks from the top
    { // (textures r2) leak decals from the coping, 3.5 m apart, 4-16 m runs
      float gs = 3.5, gi = floor(u / gs), gr = fh1(vec2(gi + seed * 2.9, seed * 1.9)), gL = 4.0 + 12.0 * gr;
      o.alb *= 1.0 - 0.4 * grimeDecal(vec2(u / gs - gi, (topY - 0.3 - y) / gL), vec2(1.0 / gs, 1.0 / gL), floor(fract(gr * 5.3) * 24.0)) * step(0.25, fract(gr * 9.7));
    }
    o.alb *= mix(0.72, 1.0, smoothstep(0.0, 3.0, y));                                                              // street grime
    if (r1 < 0.6 && topY > 14.0) { // former low neighbour: parged (cement-rendered) area below its roof line, stepped profile
      float hN = 5.0 + r2 * min(topY - 9.0, 18.0);
      float stepU = faceW * (0.35 + 0.3 * r3);
      float hL = u < stepU ? hN : hN - 2.5 - 2.0 * r1;
      float parge = boxAA(y, -1.0, hL, ah) * boxAA(u, 0.4, faceW - 0.4, aw);
      vec3 pc = vec3(0.56, 0.54, 0.5) * (0.8 + 0.35 * st.b) * (0.85 + 0.2 * nz2.g);
      float flash = boxAA(y, hL - 0.08, hL + 0.05, ah) * boxAA(u, 0.4, faceW - 0.4, aw);
      o.alb = mix(o.alb, pc, parge * (0.75 + 0.25 * st.r)); o.rough = mix(o.rough, 0.92, parge);
      o.n = normalize(mix(o.n, vec3(0.0, 0.0, 1.0), parge * 0.8));
      o.alb = mix(o.alb, vec3(0.08, 0.08, 0.085), flash); o.metal = mix(o.metal, 0.4, flash);
    }
    if (r2 > 0.5 && faceW > 9.0 && topY > 16.0) { // ghost sign painted on the brick, high on the wall
      float y1 = topY - 2.0 - 2.0 * r1, u0 = faceW * 0.12, u1 = faceW * 0.88, y0 = y1 - min(min(8.0, (topY - 6.0) * 0.35), (u1 - u0) * 0.25); // (billboards r3) one 4:1 sign cell, unstretched
      float inS = boxAA(u, u0, u1, aw) * boxAA(y, y0, y1, ah);
      if (inS > 0.0) {
        vec2 suv = vec2((u - u0) / (u1 - u0), (y - y0) / (y1 - y0));
        float row = floor(r3 * 16.0), col = floor(r1 * 4.0); // (billboards r3) one cell (was: the whole 4-cell atlas row squeezed in)
        vec2 suv2 = vec2((col + clamp(suv.x, 0.01, 0.99)) / 4.0, 1.0 - (row + 1.0 - clamp(suv.y, 0.04, 0.96)) / 16.0);
        vec3 sc = textureGrad(tSigns, suv2, gDx / (u1 - u0) / 4.0, gDy / (y1 - y0) / 16.0).rgb;
        vec3 bd = textureGrad(tSigns, suv2, vec2(0.06, 0.0), vec2(0.0, 0.03)).rgb; // blurred cell ~ board colour
        float lum = dot(sc, vec3(0.3, 0.55, 0.15)), let = smoothstep(0.1, 0.24, abs(lum - dot(bd, vec3(0.3, 0.55, 0.15))));
        vec3 paint = mix(vec3(0.2, 0.19, 0.2), vec3(0.74, 0.68, 0.55), let); // (billboards r3) cream lettering, the dark board mostly weathered off
        float wear = smoothstep(0.25, 0.75, st.r + 0.3 * nz2.b) * (1.0 - 0.6 * (1.0 - smoothstep(0.0, 0.3, fract(vFac.y / 0.075)))); // paint gone at mortar / worn
        o.alb = mix(o.alb, paint * (0.9 + 0.2 * nz.g), inS * mix(0.12, 0.5, let) * wear);
      }
    }
    // (street r11) critic: 'a completely flat, windowless brown slab'. Tall exposed lot-line walls get a few columns of
    // small lot-line windows (dark glass, stone sill, some bricked-up) above the old neighbour's roof line
    if (r1 > 0.3 && topY > 22.0 && faceW > 8.0) {
      float pfh = 3.2, pfl = floor(y / pfh), pfy = y - pfl * pfh;
      float nC = faceW > 24.0 ? 4.0 : (faceW > 14.0 ? 3.0 : 2.0), cwid = faceW / nC;
      float ci = floor(u / cwid), cu = u - (ci + 0.5) * cwid;
      float hMin = 8.0 + 10.0 * r2;
      float colOn = step(0.28, fract(sin(ci * 12.9 + seed * 3.1) * 437.5)) * step(hMin, y) * step(y, topY - 2.5);
      float wm = boxAA(cu, -0.55, 0.55, aw) * boxAA(pfy, 0.9, 2.5, ah) * colOn;
      float brk = step(0.8, fract(sin(ci * 7.1 + pfl * 3.7 + seed) * 911.3));             // bricked-up
      float sillM = boxAA(cu, -0.7, 0.7, aw) * boxAA(pfy, 0.75, 0.9, ah) * colOn;
      vec3 wc = mix(vec3(0.035, 0.04, 0.045) * (0.8 + 0.5 * fract(pfl * 0.37 + ci)), o.alb * 0.8, brk);
      o.alb = mix(o.alb, wc, wm); o.rough = mix(o.rough, mix(0.2, o.rough, brk), wm); o.metal = mix(o.metal, 0.0, wm);
      o.alb = mix(o.alb, vec3(0.62, 0.6, 0.55) * (0.85 + 0.2 * nz2.r), sillM); o.n = normalize(mix(o.n, vec3(0.0, 0.6, 1.0), sillM));
    }
    return o;
  }
  if (style < 0.5) return o;

  bool curtain = abs(style - 2.0) < 0.5;
  bool ribbon = abs(style - 3.0) < 0.5;
  bool deco = abs(style - 4.0) < 0.5;

  // ----------------------------------------------------------- storefront zone
  if (y < gH && gHs > 0.0) {
    float nb2 = max(1.0, floor(faceW / 6.5 + 0.5));
    float bw2 = faceW / nb2;
    float bi2 = floor(u / bw2);
    float fx2 = u - bi2 * bw2;
    float rnd = fh1(vec2(bi2 + seed * 13.1, seed * 7.7 + faceW));
    Surf base = wallSurf(vec2(u, vFac.y), Lb, Lb > 5.5 && Lb < 6.5 ? vec3(1.0) : tint * 0.0 + vec3(1.0));
    float pier = 0.35;
    float signY0 = gH - 1.55, signY1 = gH - 0.55;
    float inner = boxAA(fx2, pier, bw2 - pier, aw);
    o = base;
    if (inner <= 0.0) return o;
    Surf s;
    float glassY0 = 0.55;
    if (y > signY1) { // cornice band
      s = base; s.alb *= 1.12; s.n = vec3(0.0, 0.45, 0.9);
    } else if (y > signY0) { // sign band
      float row = floor(fh1(vec2(rnd * 91.0, seed)) * 16.0);
      vec2 suv = vec2((fx2 - pier) / (bw2 - 2.0 * pier), (y - signY0) / (signY1 - signY0));
      vec3 sc = textureLod(tSigns, vec2(suv.x, 1.0 - (row + 1.0 - suv.y) / 16.0), clamp(log2(max(aw * 1024.0 / (bw2 - 2.0 * pier), ah * 128.0 / 1.0)), 0.0, 9.0)).rgb;
      s.alb = sc; s.rough = 0.45; s.metal = 0.0; s.n = vec3(0.0, 0.0, 1.0); s.emis = sc * 0.25 * uShopGain;
      if (rnd > 0.8) { s = base; s.alb *= 0.8; } // no sign
    } else if (y < glassY0) { // bulkhead
      s = base; s.alb *= 0.55; s.rough = 0.4;
    } else {
      float shutter = step(0.78, rnd);
      float gx = fx2 - pier, gw = bw2 - 2.0 * pier;
      if (shutter > 0.5 && y > signY0 - 0.24) { // shutter box (coil housing) closes the shutter up to the sign band
        float lip = boxAA(y, signY0 - 0.24, signY0 - 0.2, ah);
        s.alb = vec3(0.3, 0.31, 0.32) * (0.85 + 0.15 * nz.b) * (1.0 - 0.35 * lip); s.rough = 0.45; s.metal = 0.6;
        s.n = normalize(vec3(0.0, 0.35 * (1.0 - lip) - 0.6 * lip, 1.0)); s.emis = vec3(0.0);
      } else if (shutter > 0.5) {
        // roll-down shutter: 7.5 cm curved slats with dark interlock grooves; the relief fades out once a slat spans
        // < ~3 px (no stripe aliasing), bottom rail, grime rising from the pavement
        float P = 0.075, sy = y / P, fs = fract(sy);
        float amp = 1.0 - smoothstep(0.012, 0.03, ah);
        float slope = cos(fs * 6.2831) * amp;                               // convex slat profile
        float groove = (1.0 - boxAA(fs, 0.08, 0.92, ah / P)) * amp;           // interlock gap
        float rail = boxAA(y, glassY0 - 0.02, glassY0 + 0.1, ah);
        vec3 sc = vec3(0.58, 0.59, 0.6) * (0.85 + 0.15 * nz.b) * (1.0 - 0.45 * groove) * mix(0.6, 1.0, smoothstep(0.0, 1.2, y));
        float graf = smoothstep(0.58, 0.66, textureGrad(tNoise, vec2(u, y) / 3.0 + seed, gDx / 3.0, gDy / 3.0).g) * step(y, 2.2);
        sc = mix(sc, vec3(0.25 + 0.5 * rnd, 0.2, 0.6 - 0.4 * rnd), graf * 0.7);
        sc = mix(sc, vec3(0.2, 0.21, 0.22), rail);
        s.alb = sc; s.rough = 0.5 + 0.2 * groove; s.metal = 0.5 * (1.0 - graf); s.n = normalize(vec3(0.0, slope * 0.45, 1.0)); s.emis = vec3(0.0);
      } else {
        // recessed shop glass with mullions
        float d = 0.18;
        vec2 gp = vec2(gx, y) + vec2(-Vt.x, -Vt.y) / Vt.z * d;
        float inG = boxAA(gp.x, 0.0, gw, aw) * boxAA(gp.y, glassY0, signY0, ah);
        float nm = max(1.0, floor(gw / 1.8 + 0.5)); float mw = gw / nm;
        float mx = mod(gp.x, mw);
        float mull = max(1.0 - boxAA(mx, 0.05, mw - 0.05, aw), 1.0 - boxAA(gp.y, glassY0 + 0.06, signY0 - 0.06, ah));
        mull = max(mull, 1.0 - boxAA(abs(gp.y - (signY0 - 0.9)), 0.04, 9.0, ah));
        float door = step(rnd, 0.5) * boxAA(gp.x, 0.4, 1.5, aw) * step(gp.y, 2.6);
        vec3 room = interior(vec2(mod(gp.x, mw), gp.y - glassY0), dirIn, mw, signY0 - glassY0 + 0.6, 5.0,
                             12.0 + floor(rnd * 4.0), 1.0, 1.0);
        float F = 0.04 + 0.96 * pow(1.0 - Vt.z, 5.0);
        Surf gl; gl.alb = vec3(0.02); gl.rough = 0.04; gl.metal = 0.0; gl.n = vec3(0.0, 0.0, 1.0);
        gl.emis = room * uShopGain * (1.0 - F);
        Surf fr; fr.alb = rnd > 0.4 ? vec3(0.05, 0.05, 0.055) : vec3(0.35, 0.28, 0.18); fr.rough = 0.35; fr.metal = 0.8; fr.n = vec3(0, 0, 1); fr.emis = vec3(0.0);
        float fm = max(mull, door * 0.0);
        Surf rv = base; rv.alb *= 0.6; rv.n = vec3(gp.x < 0.0 ? 1.0 : (gp.x > gw ? -1.0 : 0.0), gp.y < glassY0 ? 1.0 : (gp.y > signY0 ? -1.0 : 0.0), 0.3);
        rv.n = normalize(rv.n);
        s.alb = mix(gl.alb, fr.alb, fm); s.rough = mix(gl.rough, fr.rough, fm); s.metal = mix(gl.metal, fr.metal, fm);
        s.n = vec3(0, 0, 1); s.emis = gl.emis * (1.0 - fm);
        // reveal where the glass point falls outside the opening
        s.alb = mix(rv.alb, s.alb, inG); s.rough = mix(rv.rough, s.rough, inG); s.metal = mix(0.0, s.metal, inG);
        s.n = normalize(mix(rv.n, s.n, inG)); s.emis *= inG;
        gGlass = inG * (1.0 - fm); gF0 = 0.07;
      }
    }
    o.alb = mix(o.alb, s.alb, inner); o.rough = mix(o.rough, s.rough, inner); o.metal = mix(o.metal, s.metal, inner);
    o.n = normalize(mix(o.n, s.n, inner)); o.emis = s.emis * inner;
    gGlass *= inner;
    return o;
  }

  // ----------------------------------------------------------- upper floors
  float fh = vF.x;
  float yy = y - gH;
  float fl = floor(yy / fh);
  float fy = yy - fl * fh;
  float margin = vW.w;
  float usable = faceW - 2.0 * margin;
  float nb = max(1.0, floor(usable / vF.y + 0.5));
  float bw = usable / nb;
  float ux = u - margin;
  float bi = floor(ux / bw);
  float fx = ux - bi * bw;
  float ww = bw * vF.z;
  float wh = fh * vF.w;
  float wx0 = (bw - ww) * 0.5;
  float wy0 = (fh - wh) * (curtain ? 0.72 : 0.42);
  // ==================== (street r9) STREET-LEVEL ZONING of punched masonry facades (street agent, additive) ====================
  // critic: 'one tiled brick texture with identical window modules, no base / belt courses / cornice zone / bays / AC units'.
  // Classic NYC tripartite facade: a rusticated stone BASE (1-2 floors over the shops), a brick SHAFT broken into bays
  // (pilasters every K windows, paired sash windows on some buildings, continuous sill courses every N floors, stone
  // quoins), a CAP zone (1-2 floors, stone or brick with arched heads) under the cornice, belt courses between zones.
  // All per-building choices hash the building seed; buildings.js emits real projecting belt ledges at the same heights.
  bool zOK = !curtain && !ribbon && !deco && style < 1.5 && Lw < 3.5; // masonry (brick / limestone) walls only
  bool pOK = !curtain && !ribbon && !deco && style < 1.5; // (street r10) every punched wall: dark window treatment
  float zH1 = fract(seed * 2.37 + 0.11), zH2 = fract(seed * 4.73 + 0.59), zH3 = fract(seed * 8.19 + 0.27), zH4 = fract(seed * 1.61 + 0.83);
  float zNf = floor((topY - gH) / fh + 0.01);
  float zBase = (zOK && zNf >= 5.0) ? 1.0 + step(0.55, zH1) * step(9.0, zNf) : 0.0;
  float zCap = (zOK && zNf >= 6.0) ? 1.0 + step(0.6, zH2) * step(11.0, zNf) : 0.0;
  float zCapY = (zNf - zCap) * fh;                       // yy where the cap zone starts
  bool zInBase = zOK && fl < zBase;
  bool zInCap = zOK && zCap > 0.0 && yy >= zCapY;
  bool zPaired = zOK && bw > 2.15 && zH4 < 0.42 && !zInBase && !zInCap;
  float zBayK = 3.0 + floor(zH4 * 3.0);                    // pilaster every K windows
  float zH5 = fract(seed * 3.31 + 0.47);                     // (street r11) mid-shaft belt courses every zMidK floors
  float zMidK = (pOK && zNf - zBase - zCap >= 11.0) ? 6.0 + floor(zH5 * 3.0) : 0.0; // zOK: + projecting ledges (buildings.js); other punched walls: shader belt only
  bool zMidF = zMidK > 0.5 && !zInCap && fl > zBase + 0.5 && mod(fl - zBase, zMidK) < 0.5 && fl <= zNf - zCap - 3.0; // floor just above a mid belt
  if (zPaired) { // two sash windows share one masonry opening group, a narrow brick mullion between them
    float hb = bw * 0.5; float bi2 = floor(ux / hb); float par = mod(bi2, 2.0);
    bw = hb; bi = bi2; fx = ux - bi2 * hb;
    ww = min(hb * 0.8, ww * 0.62); wx0 = par < 0.5 ? hb - ww - 0.09 : 0.09;
  }
  if (zInBase) { wh = min(fh - 0.5, wh * 1.14); wy0 = (fh - wh) * 0.5; }
  if (zInCap && zH2 > 0.3) { wh = min(fh - 0.45, wh * 1.08); wy0 = (fh - wh) * 0.4; }
  // ==================== end street r9 zoning (window geometry); wall treatment below ====================
  float valid = boxAA(ux, 0.0, usable, aw) * boxAA(yy, 0.0, topY - gH - (curtain ? 0.2 : 1.2), ah);
  float cellR = fh1(vec2(bi + seed * 3.7, fl + seed * 1.3));
  float cellR2 = fh1(vec2(fl * 1.7 + seed, bi * 2.3 - seed));
  float lod = clamp(max(aw / bw, ah / fh) * 3.0 - 0.6, 0.0, 1.0);
  // (skyline r8) per-window variation survives into the far LOD while a window cell still spans >= ~1.5 px
  // (critic: 'one tiled window pattern per tower, no per-window light / blind variation, reads as wallpaper')
  float wv = 1.0 - smoothstep(0.5, 0.9, max(aw / bw, ah / fh));
  float cBl = step(0.72, cellR2) * min(1.0, (cellR2 - 0.72) * 4.0); // curtain wall: blinds drawn (fraction of the pane)
  // (skyline r12) critic: 'glass slab = one even grid top to bottom'. Tenant zones of 8-15 floors: each zone gets its own
  // glass body tone / reflectance and its own share of drawn blinds (different tenants, re-glazed floors)
  float zR = 0.5;
  if (curtain) {
    float zF = 8.0 + floor(fract(seed * 3.91 + 0.13) * 8.0);
    zR = fh1(vec2(floor(fl / zF) + seed * 0.37, seed * 5.1 + 0.7));
    float bt = 0.58 + 0.3 * zR;
    cBl = step(bt, cellR2) * min(1.0, (cellR2 - bt) * 4.0);
  }
  float depth = vX.w;
  if (zOK) depth = max(depth, 0.16) * 1.3; // (street r9) deeper masonry reveals (critic: 'windows read as flat decals')
  if (pOK && !zOK) o.alb *= 0.955 + 0.09 * fh1(vec2(fl * 0.37 + seed, floor(bi / 3.0) + seed * 2.1)); // (street r11) per-floor / per-bay-group panel tone (critic: 'uniform grids, identical spacing top to bottom')
  if (pOK) { // (street r10) large-scale brick tonal patches (street r11: all punched walls) (re-pointing, replaced brick, soot washes) so the fine
    // pattern never reads as one tile: 3-10 m mottling +-14 %, a slight hue drift
    vec2 mq = vec2(u * 0.085 + seed * 0.71, vFac.y * 0.11);
    float m1 = textureGrad(tNoise, mq, gDx * 0.085, gDy * 0.11).r, m2 = textureGrad(tNoise, mq * 2.7 + 0.43, gDx * 0.23, gDy * 0.3).g;
    float mt = 0.62 * m1 + 0.38 * m2;
    o.alb *= (0.86 + 0.28 * smoothstep(0.2, 0.8, mt)) * mix(vec3(1.0), vec3(1.04, 0.99, 0.95), smoothstep(0.55, 0.8, m2));
  }
  if (zOK) { // (street r9) zone walls: rusticated stone base, stone (or lighter brick) cap
    if (zInBase) {
      float Lz = Lb < 5.5 && Lb > 2.5 ? Lb : 3.0;
      Surf bs = wallSurf(vec2(u, vFac.y), Lz, vec3(0.9, 0.88, 0.84) * (0.9 + 0.2 * nz2.r) * mix(0.72, 1.0, smoothstep(0.0, 2.5, y)));
      float rH = 0.56, ry = mod(y, rH), row = floor(y / rH);
      float jy = 1.0 - boxAA(ry, 0.035, rH, ah);                                   // deep horizontal rustication joint
      float jx = 1.0 - boxAA(mod(u + mod(row, 2.0) * 0.6, 1.2), 0.02, 1.2, aw);     // staggered head joints
      bs.alb *= (1.0 - 0.55 * jy) * (1.0 - 0.3 * jx) * (0.94 + 0.12 * fh1(vec2(floor((u + mod(row, 2.0) * 0.6) / 1.2), row + seed)));
      bs.n = normalize(vec3(0.0, jy * (ry < 0.02 ? -0.8 : 0.8), 1.0));
      o = bs;
    } else if (zInCap) {
      if (zH2 > 0.5) { Surf cs = wallSurf(vec2(u, vFac.y), 3.0, vec3(0.86, 0.84, 0.79) * (0.9 + 0.2 * nz2.g)); cs.alb *= 1.0 - 0.18 * smoothstep(0.5, 0.85, nz.b); o = cs; }
      else o.alb *= vec3(1.06, 1.04, 1.02);
    }
    // stone quoins at the face corners (alternating long / short blocks)
    if (zH1 > 0.4 && !zInBase && faceW > 6.0) {
      float qr = floor(y / 0.62), qw = mod(qr, 2.0) < 0.5 ? 0.95 : 0.55;
      float qm = max(1.0 - boxAA(u, qw, faceW - qw, aw), 0.0) * step(0.0, yy);
      if (qm > 0.0) {
        Surf qs = wallSurf(vec2(u, vFac.y), 3.0, vec3(0.84, 0.82, 0.77) * (0.9 + 0.2 * nz2.b));
        float qj = 1.0 - boxAA(mod(y, 0.62), 0.03, 0.62, ah);
        qs.alb *= 1.0 - 0.45 * qj; qs.n = normalize(vec3(0.0, 0.5 * qj, 1.0));
        o.alb = mix(o.alb, qs.alb, qm); o.n = normalize(mix(o.n, qs.n, qm)); o.rough = mix(o.rough, qs.rough, qm);
      }
    }
    // bay pilasters in the shaft: the pier between window groups is a slightly proud strip with a lit / shaded edge
    if (!zPaired && !zInBase && !zInCap && zH3 > 0.25) {
      bool pR = mod(bi + 1.0, zBayK) < 0.5 && fx > wx0 + ww, pL = mod(bi, zBayK) < 0.5 && bi > 0.5 && fx < wx0;
      if (pR || pL) {
        float e0 = pR ? fx - (wx0 + ww) : fx + (bw - wx0 - ww), pw2 = bw - ww;       // position across the pier
        float edgeL = 1.0 - boxAA(e0, 0.07, 99.0, aw), edgeR = 1.0 - boxAA(e0, -99.0, pw2 - 0.07, aw);
        if (zH3 > 0.62) { // stone pilaster (light, jointed every 0.62 m)
          Surf ps = wallSurf(vec2(u, vFac.y), 3.0, vec3(0.84, 0.82, 0.77) * (0.9 + 0.2 * nz2.b));
          ps.alb *= 1.0 - 0.4 * (1.0 - boxAA(mod(y, 0.62), 0.03, 0.62, ah));
          o.alb = ps.alb; o.rough = ps.rough;
        } else o.alb *= 0.8 + 0.07 * fract(seed * 3.3); // brick pier in a darker header bond
        o.alb *= 1.0 + 0.3 * edgeL - 0.4 * edgeR;
        o.n = normalize(o.n + vec3(0.8 * edgeL - 0.8 * edgeR, 0.0, 0.0));
      }
    }
  }

  // window opening mask (at facade plane)
  float inWx = boxAA(fx, wx0, wx0 + ww, aw);
  float inWy = boxAA(fy, wy0, wy0 + wh, ah);
  // (street r9) arched heads on cap-zone windows of some buildings
  float zArch = zInCap && zH2 > 0.3 && zH2 < 0.8 ? 1.0 : 0.0;
  float archO = 1.0;
  if (zArch > 0.5) { float ar = ww * 0.5, acy = wy0 + wh - ar; vec2 dq = vec2(fx - wx0 - ar, max(fy - acy, 0.0)); archO = 1.0 - smoothstep(ar - aw, ar + aw, length(dq)); }
  float open = inWx * inWy * valid * archO;
  // glass plane point (parallax into recess)
  vec2 off = vec2(-Vt.x, -Vt.y) / Vt.z * depth;
  vec2 gp = vec2(fx, fy) + off;
  float inG = boxAA(gp.x, wx0, wx0 + ww, aw) * boxAA(gp.y, wy0, wy0 + wh, ah);
  if (zArch > 0.5) { float ar = ww * 0.5, acy = wy0 + wh - ar; vec2 dq = vec2(gp.x - wx0 - ar, max(gp.y - acy, 0.0)); inG *= 1.0 - smoothstep(ar - aw, ar + aw, length(dq)); }
  vec2 gq = vec2((gp.x - wx0) / ww, (gp.y - wy0) / wh);

  // glass & interior
  bool resid = vX.x > 0.5;
  float tile = resid ? 6.0 + floor(cellR2 * 6.0) : floor(cellR2 * 6.0);
  float lit = step(0.55, fract(cellR * 7.13));
  vec3 room = interior(vec2(gp.x, gp.y), dirIn, bw, fh, curtain ? 6.0 : 4.0, tile, lit, 0.0);
  float F = 0.04 + 0.96 * pow(1.0 - Vt.z, 5.0);
  Surf gl;
  float gsel = vX.z;
  vec3 gt = gsel < 0.5 ? vec3(0.5, 0.61, 0.72) : (gsel < 1.5 ? vec3(0.4, 0.57, 0.58) : (gsel < 2.5 ? vec3(0.5, 0.56, 0.6) : (gsel < 3.5 ? vec3(0.55, 0.5, 0.42) : vec3(0.66, 0.74, 0.82))));
  // (skyline r12) critic: 'no reflective glass / green / dark-glass towers'. 5 = deep green-grey (Lever / Seagram-era
  // tinted glass), 6 = high-reflectance silver-blue mirror coating, 7 = gold-bronze reflective coating
  bool lowIron = gsel > 3.5 && gsel < 4.5;
  if (gsel > 4.5) gt = gsel < 5.5 ? vec3(0.36, 0.55, 0.46) : (gsel < 6.5 ? vec3(0.6, 0.72, 0.86) : vec3(0.78, 0.64, 0.42));
  // skyline: per-tower spandrel treatment (dark shadow-box glass / light metal panel / stone band) -> floor banding
  float sv = fract(seed * 5.31 + 0.17);
  vec3 spC = sv < 0.25 ? gt * 0.08 : (sv < 0.72 ? vec3(0.27, 0.285, 0.3) * (0.8 + 0.4 * fract(seed * 2.71)) : vec3(0.42, 0.405, 0.37) * (0.85 + 0.3 * fract(seed * 1.93)));
  float spGl = sv < 0.25 ? 1.0 : 0.2; // (skyline r10) dark shadow-box spandrels 40 -> 25 % (director: city reads too dark)
  if (sv > 0.88) spC = vec3(0.3, 0.24, 0.17) * (0.8 + 0.4 * fract(seed * 2.71)); // (skyline r3) bronze-anodised panels
  if (curtain) spC *= 0.88 + 0.24 * zR; // (skyline r12) per-zone spandrel tone
  // (skyline r3) per-tower mullion cap width (4-13 cm) and finish: silver / dark bronze / black / white-painted
  float cw = 0.04 + 0.09 * fract(seed * 7.77);
  float cq = fract(seed * 4.39 + 0.5);
  vec3 capC = cq < 0.4 ? vec3(0.42, 0.44, 0.46) : (cq < 0.62 ? vec3(0.13, 0.11, 0.09) : (cq < 0.82 ? vec3(0.05, 0.055, 0.06) : vec3(0.68, 0.69, 0.68)));
  if (lowIron) capC = vec3(0.56, 0.58, 0.61); // (skyline r7) low-iron supertalls: bright stainless caps (One WTC / CPT, not a black grid)
  if (curtain) { float glum = dot(gt, vec3(0.2126, 0.7152, 0.0722)); gSpecTint = pow(gt / glum, vec3(1.7)); gSpecTint *= mix(0.86 + 0.28 * cellR2, 1.0, 1.0 - wv); /* (skyline r9) +-26 % -> +-14 %: read as a pixel mosaic */ } // (r8) per-IGU reflectance held to the far LOD (wv) // per-IGU reflectance variation (fades before it can shimmer)
  if (curtain) {
    vec3 sm = textureGrad(tNoise, vWPos.xz * 0.05 + vec2(u, y) * 0.11, gDx * 0.11, gDy * 0.11).rgb;
    gl.alb = gt * (0.035 + 0.02 * cellR); // (user r-glass) deeper tint: darker glass body
    if (lowIron) gl.alb = gt * (0.13 + 0.03 * cellR); // (skyline r7) low-iron glass: pale ceilings / blinds lift the body tone
    if (vX.y > 2.5) gl.alb = vec3(0.05, 0.052, 0.055) * (0.75 + 0.5 * step(0.5, fract(gq.y * 6.0))); // (street r11) louvre band: dark blades
    gl.alb = mix(gl.alb, vec3(0.3, 0.3, 0.28), 0.75 * cBl * step(1.0 - cBl, gq.y)); // (skyline r8) roller blinds behind some panes
    gl.metal = 0.0;
    // (user r-glass) "remove the frosted effect, keep it deep tinted but reflective": the smudge speckle (noise texture
    // sampled at ~5 cm texel scale in roughness + albedo) read as frosted / crumpled foil -> clean polished glass, only a
    // faint per-IGU roughness difference
    gl.rough = 0.02 + 0.025 * cellR2 * (1.0 - lod);

    // slight per-panel tilt -> broken reflections like real IGUs
    gl.n = normalize(vec3(vec2(cellR - 0.5, cellR2 - 0.5) * 0.016 * (1.0 - smoothstep(0.02, 0.12, max(aw / bw, ah / fh))), 1.0)); // per-IGU tilt fades before panels get sub-10px (reflection moire)
    gl.emis = room * uInteriorGain * 0.3 * (1.0 - F);
    // (skyline r5) panel deflection / heat-strengthened glass roller wave: ~10 m-scale normal wobble + reflectance
    // mottling. Low frequency, box-filtered by the mips -> it survives to the far LOD, where the per-IGU jitter is gone
    vec2 ws = vec2(0.07, 0.16);
    vec3 wob = textureGrad(tNoise, vec2(u, y) * ws + fract(seed * 0.73) * 7.0, gDx * ws, gDy * ws).rgb;
    // (user r-glass) the wobble texture is noise at texel scale (~5 cm at this frequency), which crinkled every
    // reflection like frosted glass. Panels stay flat mirrors; only the per-IGU tilt above breaks the reflection
    gWob = vec2(0.0);
    gSpecTint *= 0.94 + 0.12 * zR;
    gl.alb *= 0.75 + 0.5 * zR; gSpecTint *= 0.86 + 0.28 * zR; // (skyline r12) per-zone glass tone / reflectance
  } else {
    gl.alb = vec3(0.015); gl.metal = 0.0; gl.rough = 0.05 + 0.05 * cellR;
    gl.n = normalize(vec3(vec2(cellR - 0.5, cellR2 - 0.5) * 0.02 * (1.0 - smoothstep(0.02, 0.12, max(aw / bw, ah / fh))), 1.0));
    // daylit rooms seen through clear sash glass: furniture / back walls readable (not a flat dark pane), the
    // Fresnel sky reflection takes over at grazing angles
    gl.emis = room * uInteriorGain * 2.0 * (1.0 - F);
    if (deco) gl.emis *= 0.5; // (skyline r11) deco towers: darker window stripes -> the light stone piers read (ESB, ref 01)
    // (street r10) director: 'masonry windows read as pale panes in a crisp grid; the ref's are DARK holes'. Old sash
    // windows: deep dim rooms (most unlit), only the occasional lit room; blinds on ~20 % of windows, drawn partway
    float bThr = deco ? 0.86 : (pOK ? 0.7 : 0.55); // (street r11) pOK 0.8 -> 0.7: ~30 % of sash windows have a blind down
    if (pOK) gl.emis *= (0.42 + 0.6 * lit * step(0.55, cellR2)) * (0.7 + 0.6 * cellR2); // (textures r4) 0.26 -> 0.42: rooms read through the glass (critic: 'flat black holes')
    { float hs = smoothstep(0.55, 1.0, gq.y); gl.emis *= 1.0 - 0.5 * hs; } // (textures r4) lintel / soffit shadow over the upper glass: the opening reads recessed
    // blinds / curtains
    float blind = cellR > bThr ? (cellR - bThr) * (pOK ? 2.6 : 1.8) : 0.0;
    float bl = step(1.0 - blind, gq.y);
    vec3 bc = resid ? mix(vec3(0.85, 0.8, 0.7), vec3(0.6, 0.35, 0.3), step(0.8, cellR2)) : vec3(0.82, 0.82, 0.8);
    float slats = 0.85 + 0.15 * step(0.5, fract(gp.y * 25.0));
    if (pOK) bc *= 0.5; // (street r10) dusty blinds in shade, not glowing white
    // (street r11) critic: 'window + AC module stamped identically; vary blinds, curtains and interior lighting per
    // window'. Masonry sash windows: blind colour per window (paper white / cream / tan / grey-green / dark roller),
    // side curtains on ~20 % (one or both sides, muted fabric colours), per-window glass reflectance (gSashV)
    float cR4 = fh1(vec2(bi * 5.3 + seed * 1.9, fl * 3.1 + seed * 0.37));
    if (pOK) {
      float bq = fract(cellR * 23.7);
      bc = (bq < 0.3 ? vec3(0.8, 0.78, 0.72) : (bq < 0.55 ? vec3(0.78, 0.7, 0.55) : (bq < 0.72 ? vec3(0.55, 0.58, 0.54) : (bq < 0.86 ? vec3(0.2, 0.2, 0.21) : vec3(0.7, 0.66, 0.6))))) * 0.55;
      float cSide = cR4 < 0.2 ? (cR4 < 0.08 ? 2.0 : 1.0) : 0.0;           // 1: one side (left / right by hash), 2: both
      float cw2 = 0.18 + 0.2 * fract(cR4 * 41.0);
      float onL = gq.x < cw2 ? 1.0 : 0.0, onR = gq.x > 1.0 - cw2 ? 1.0 : 0.0;
      float cur = cSide > 1.5 ? max(onL, onR) : (cSide > 0.5 ? (fract(cR4 * 13.0) < 0.5 ? onL : onR) : 0.0);
      vec3 cc = fract(cR4 * 7.7) < 0.35 ? vec3(0.62, 0.52, 0.4) : (fract(cR4 * 7.7) < 0.6 ? vec3(0.5, 0.22, 0.18) : (fract(cR4 * 7.7) < 0.8 ? vec3(0.3, 0.36, 0.42) : vec3(0.75, 0.72, 0.64)));
      float fold = 0.8 + 0.2 * sin(gp.x * 38.0);
      gl.alb = mix(gl.alb, cc * 0.5 * fold, cur); gl.rough = mix(gl.rough, 0.9, cur); gl.emis *= 1.0 - cur;
      gl.emis += cur * cc * 0.1 * lit * uInteriorGain;
      gSashV = 0.45 + 1.15 * fract(cR4 * 3.3 + cellR2);
    }
    gl.alb = mix(gl.alb, bc * slats * 0.8, bl); gl.rough = mix(gl.rough, 0.8, bl); gl.emis *= (1.0 - bl);
    gl.emis += bl * bc * 0.12 * lit * uInteriorGain;
    // reflection floor: real sash glass always mirrors some sky / opposite facade (brighter toward the head, where it
    // sees more sky); keeps unlit windows from reading as black holes at mid range
    gl.emis += (1.0 - bl) * vec3(0.035, 0.042, 0.052) * (0.55 + 0.45 * gq.y) * (0.8 + 0.4 * cellR2) * (pOK ? 0.8 : 1.0); // (textures r4) pOK 0.45 -> 0.8
  }
  // mullions / sash
  float mullW = curtain ? 0.0 : 0.05;
  float frame = 0.0;
  if (!curtain) {
    float fwm = mullW;
    frame = 1.0 - boxAA(gp.x, wx0 + fwm, wx0 + ww - fwm, aw) * boxAA(gp.y, wy0 + fwm, wy0 + wh - fwm, ah);
    if (!ribbon) frame = max(frame, 1.0 - boxAA(abs(gq.y - 0.52) * wh, 0.03, 99.0, ah));
    if (ww > 1.5 || ribbon) {
      float nmx = max(2.0, floor(ww / 1.2 + 0.5));
      frame = max(frame, 1.0 - boxAA(abs(fract(gq.x * nmx + 0.5) - 0.5) * ww / nmx, 0.025, 99.0, aw));
    }
  }
  vec3 frameC = vX.y > 1.5 ? vec3(0.9, 0.9, 0.87) : (vX.y > 0.5 ? vec3(0.1, 0.1, 0.1) : vec3(0.28, 0.2, 0.14));
  if (zOK) { // (street r9) per-building sash paint (muted: no glowing white grid) + ~18 % replacement aluminium windows
    float fq = fract(seed * 3.97 + 0.41);
    frameC = fq < 0.3 ? vec3(0.66, 0.65, 0.61) : (fq < 0.5 ? vec3(0.1, 0.15, 0.12) : (fq < 0.7 ? vec3(0.07, 0.07, 0.075) : (fq < 0.85 ? vec3(0.3, 0.21, 0.15) : vec3(0.55, 0.52, 0.45))));
    if (fract(cellR * 17.3) < 0.18) frameC = vec3(0.42, 0.43, 0.44);
  }
  Surf win;
  win.alb = mix(gl.alb, frameC, frame); win.rough = mix(gl.rough, 0.45, frame); win.metal = mix(gl.metal, 0.3, frame);
  win.n = normalize(mix(gl.n, vec3(0, 0, 1), frame)); win.emis = gl.emis * (1.0 - frame);
  // reveal (jambs, head, sill) when the glass point leaves the opening
  Surf rv = o;
  vec3 rn = vec3(0.0);
  if (gp.x < wx0) rn.x = 1.0; else if (gp.x > wx0 + ww) rn.x = -1.0;
  if (gp.y < wy0) rn.y = 1.0; else if (gp.y > wy0 + wh) rn.y = -1.0;
  rv.n = normalize(rn + vec3(0.0, 0.0, 0.15));
  rv.alb *= curtain ? 0.9 : 0.72;
  if (curtain) { rv.alb = vec3(0.62, 0.64, 0.66); rv.metal = 0.9; rv.rough = 0.3; }
  win.alb = mix(rv.alb, win.alb, inG); win.rough = mix(rv.rough, win.rough, inG); win.metal = mix(rv.metal, win.metal, inG);
  win.n = normalize(mix(rv.n, win.n, inG)); win.emis *= inG;

  // wall decoration between openings
  Surf wall = o;
  if (curtain) {
    // spandrel panels + aluminium mullions (protruding caps)
    float capX = 1.0 - boxAA(fx, cw, bw - cw, aw);
    float capY = 1.0 - boxAA(fy, cw, fh - cw, ah);
    float cap = max(capX, capY);
    Surf sp = o; sp.alb = spC; sp.metal = spGl > 0.5 ? 0.3 : 0.5; sp.rough = spGl > 0.5 ? 0.12 : 0.38;
    sp.n = vec3(0.0, 0.0, 1.0); // (user r-glass) flat panel: the inherited masonry bump read as frosted speckle on reflective spandrels
    Surf al; al.alb = capC * (0.9 + 0.2 * nz2.r); al.metal = 0.85; al.rough = 0.42; // anodised aluminium: mid grey, satin
    // rounded cap profile: normal follows the position across the 6 cm cap (shading gradient, not a flat bright strip)
    float cxp = fx < bw * 0.5 ? fx / cw : (bw - fx) / cw, cyp = fy < fh * 0.5 ? fy / cw : (fh - fy) / cw;
    al.n = normalize(vec3(capX > 0.5 ? (fx < bw * 0.5 ? -1.0 : 1.0) * (1.0 - clamp(cxp, 0.0, 1.0)) * 0.7 : 0.0, capY > 0.5 ? (fy < fh * 0.5 ? -1.0 : 1.0) * (1.0 - clamp(cyp, 0.0, 1.0)) * 0.35 : 0.0, 1.0));
    al.rough = capY > 0.5 && capX < 0.5 ? 0.5 : al.rough; // transoms face the sky/sun: brushed, no blown highlight band
    al.emis = vec3(0.0);
    wall.alb = mix(sp.alb, al.alb, cap); wall.metal = mix(sp.metal, al.metal, cap); wall.rough = mix(sp.rough, al.rough, cap);
    wall.n = normalize(mix(sp.n, al.n, cap));
    // also cap over glass
    win.alb = mix(win.alb, al.alb, cap); win.metal = mix(win.metal, al.metal, cap); win.rough = mix(win.rough, al.rough, cap);
    win.n = normalize(mix(win.n, al.n, cap)); win.emis *= 1.0 - cap;
  } else if (deco) {
    // dark recessed spandrels between stacked windows -> vertical pier emphasis
    // (skyline r2) cast-aluminium / dark-painted spandrel panels (ESB-like): with the dark glass they read as continuous
    // recessed vertical stripes between the light stone piers; a raised chevron rib every panel catches the light
    float sp = inWx * (1.0 - inWy) * valid;
    float spRib = boxAA(abs(fy - (fy < wy0 ? wy0 * 0.5 : (wy0 + wh + fh) * 0.5)), 0.0, 0.07, ah);
    Surf sps = o; sps.alb = mix(vec3(0.075, 0.078, 0.082), vec3(0.2, 0.2, 0.19), 0.35 * fract(seed * 3.3)) * (0.85 + 0.3 * nz2.r) * (1.0 + 0.9 * spRib);
    sps.metal = 0.22; sps.rough = 0.62; sps.n = normalize(vec3(0.0, -0.18, 1.0)); // (skyline r9) was metal 0.55 + up-tilt: mirrored the sky as blue louvre bands from the street
    wall.alb = mix(o.alb, sps.alb, sp); wall.n = normalize(mix(o.n, sps.n, sp)); wall.metal = mix(o.metal, sps.metal, sp); wall.rough = mix(o.rough, sps.rough, sp);
    // pier edge shading: piers read as proud of the recessed window/spandrel stripe (light edge / dark edge)
    float pe = boxAA(fx, wx0 - 0.12, wx0, aw) - boxAA(fx, wx0 + ww, wx0 + ww + 0.12, aw);
    wall.alb *= 1.0 + 0.12 * pe * valid;
  } else {
    // sills & lintels (stone), belt courses, rain streaks
    vec3 stone = vec3(0.78, 0.75, 0.68);
    float lint = vX.y;
    float ext = 0.1;
    float inX = boxAA(fx, wx0 - ext, wx0 + ww + ext, aw) * valid;
    float sill = inX * boxAA(fy, wy0 - 0.12, wy0, ah);
    float head = inX * boxAA(fy, wy0 + wh, wy0 + wh + (lint > 1.5 ? 0.35 : 0.22), ah);
    if (zArch > 0.5) { // (street r9) arched head: stone voussoir ring + keystone instead of a flat lintel
      float ar = ww * 0.5, acy = wy0 + wh - ar; vec2 dq = vec2(fx - wx0 - ar, fy - acy);
      float rr = length(dq);
      head = step(0.0, dq.y) * (smoothstep(ar - aw, ar + aw, rr) - smoothstep(ar + 0.26 - aw, ar + 0.26 + aw, rr));
      head = max(head, boxAA(abs(dq.x), -1.0, 0.13, aw) * boxAA(fy, wy0 + wh - 0.05, wy0 + wh + 0.36, ah));
      head *= valid;
      lint = max(lint, 1.0);
    }
    if (zMidF) { head = inX * boxAA(fy, wy0 + wh, wy0 + wh + 0.42, ah); sill = inX * boxAA(fy, wy0 - 0.2, wy0, ah); lint = max(lint, 2.0); } // (street r11) dressed floor over a mid belt
    if (zInBase) head = 0.0; // rusticated base: the stone joints frame the openings
    // (textures r2) under-sill soot / rain runs from the $imagegen grime decal sheet (was a 1.4 m gradient box): each window
    // picks one of 24 streak shapes and a 0.8-3 m run; above the window head the run of the floor above continues
    float gdy = wy0 - 0.12 - fy, gcr = cellR;
    if (gdy < 0.0) { gdy += fh; gcr = fh1(vec2(bi + seed * 3.7, fl + 1.0 + seed * 1.3)); }
    float gLn = 0.8 + 2.2 * fract(gcr * 3.3), gWd = ww + 0.35;
    float streak = grimeDecal(vec2((fx - wx0 + 0.175) / gWd, gdy / gLn), vec2(1.0 / gWd, 1.0 / gLn), floor(fract(gcr * 5.1) * 24.0)) * valid * 0.42;
    if (pOK) streak *= 0.45 + 1.1 * fract(gcr * 5.1); // (street r11) grime under sills varies per window (some heavy runs)
    wall.alb *= 1.0 - streak;
    float belt = 0.0;
    if (fl < 0.5) belt = boxAA(fy, -0.01, 0.35, ah); // belt course above storefront
    belt = max(belt, boxAA(yy - (topY - gH - 1.2), 0.0, 0.4, ah)) * boxAA(ux, -margin - 1.0, usable + margin + 1.0, aw);
    if (zOK) { // (street r9) zone belt courses (base top / cap bottom) with a shadow line under each, sill courses every N floors
      float zb = 0.0, zs = 0.0;
      if (zBase > 0.0) { zb = max(zb, boxAA(yy, zBase * fh - 0.02, zBase * fh + 0.46, ah)); zs = max(zs, boxAA(yy, zBase * fh - 0.2, zBase * fh - 0.02, ah)); }
      if (zCap > 0.0) { zb = max(zb, boxAA(yy, zCapY - 0.38, zCapY + 0.02, ah)); zs = max(zs, boxAA(yy, zCapY - 0.52, zCapY - 0.38, ah)); }
      float strN = zH3 < 0.3 ? 0.0 : 2.0 + floor(zH3 * 4.0);
      if (strN > 0.5 && !zInBase && !zInCap && mod(fl, strN) < 0.5) zb = max(zb, boxAA(fy, wy0 - 0.15, wy0, ah));
      // (street r11) critic: 'a single window module tiled over 15+ floors, no mid-cornice'. Tall shafts get a heavy
      // stone belt course every zMidK (6-8) floors (buildings.js zoneBelts emits the matching projecting ledge), with a
      // cast shadow under it and the floor above it in stone-dressed windows (lintel + sill, see zMidF)
      if (zMidK > 0.5 && !zInBase && !zInCap) {
        float bj = floor((yy / fh - zBase) / zMidK + 0.5), bF = zBase + bj * zMidK;
        if (bj >= 1.0 && bF <= zNf - zCap - 3.0) {
          zb = max(zb, boxAA(yy, bF * fh - 0.02, bF * fh + 0.5, ah));
          zs = max(zs, boxAA(yy, bF * fh - 0.34, bF * fh - 0.02, ah));
        }
      }
      wall.alb *= 1.0 - 0.45 * zs * (1.0 - zb);
      belt = max(belt, zb);
    } else if (zMidK > 0.5) { // (street r11) mid-shaft belt courses on the other punched walls (concrete / granite / white)
      float bj = floor(yy / fh / zMidK + 0.5), bF = bj * zMidK, zb = 0.0, zs = 0.0;
      if (bj >= 1.0 && bF <= zNf - 3.0) { zb = boxAA(yy, bF * fh - 0.02, bF * fh + 0.5, ah); zs = boxAA(yy, bF * fh - 0.34, bF * fh - 0.02, ah); }
      wall.alb *= 1.0 - 0.45 * zs * (1.0 - zb);
      belt = max(belt, zb);
    }
    float st = max(max(sill, head), belt);
    Surf ss = wallSurf(vec2(u, vFac.y), 3.0, vec3(1.0));
    ss.alb *= stone * 1.25;
    ss.n = normalize(vec3(0.0, sill > 0.5 ? 0.7 : (head > 0.5 ? -0.25 : 0.2), 1.0));
    if (lint > 0.5 || belt > 0.5) {
      wall.alb = mix(wall.alb, ss.alb, st); wall.n = normalize(mix(wall.n, ss.n, st)); wall.rough = mix(wall.rough, 0.8, st);
    } else { // soldier course (darker brick header)
      wall.alb *= 1.0 - 0.18 * head;
      wall.alb = mix(wall.alb, ss.alb, sill);
    }
  }
  // AO-ish darkening around openings
  wall.alb *= 1.0 - 0.1 * (inWx * boxAA(fy, wy0 - 0.3, wy0 + wh + 0.3, ah)) * (1.0 - open);

  Surf r;
  r.alb = mix(wall.alb, win.alb, open); r.rough = mix(wall.rough, win.rough, open); r.metal = mix(wall.metal, win.metal, open);
  r.n = normalize(mix(wall.n, win.n, open)); r.emis = win.emis * open;
  float capW = 0.0;
  if (curtain) capW = max(1.0 - boxAA(fx, cw, bw - cw, aw), 1.0 - boxAA(fy, cw, fh - cw, ah));
  gGlass = open * inG * (1.0 - frame) * (1.0 - capW);
  if (curtain) gGlass = max(gGlass, (1.0 - open) * (1.0 - capW) * spGl * 0.8); // shadow-box spandrel glass reflects too
  gF0 = curtain ? (lowIron ? 0.46 : (gsel > 5.5 ? 0.62 : (gsel > 4.5 ? 0.2 : 0.25))) * (0.85 + 0.3 * fract(seed * 6.83 + 0.37)) : 0.12; // (skyline r12) per-tower coating: mirror 0.62, tinted 0.2, +-15 % per tower // (skyline r7) low-iron supertall glass 0.34 -> 0.46 (One WTC reads bright) // (skyline r6) 0.2 -> 0.25: glass reads as glass
  if (pOK && !zOK) { gF0 = 0.085; gSash = 1.0; } // (textures r4) 0.05 -> 0.085: sash glass mirrors the sky / street opposite // (street r10) all punched walls: dusty, dim sash glass
  if (curtain && vX.y > 2.5) { gF0 = 0.03; gSash = 1.0; gSashV = 0.5; } // (street r11) lintel 3 on a curtain wall = dark mechanical louvre band (MetLife plant floors)
  if (zOK) {
    // (street r9) old sash glass: dusty, lower grazing reflectance (critic: 'windows read as flat bright white-grey planes')
    gF0 = 0.085; gSash = 1.0; // (street r10) 0.07 -> 0.05 // (textures r4) -> 0.085 (critic r3: 'windows flat black holes, no glass')
    // (street r9) through-window AC units: a 0.28 m deep box sitting on the sill (front face / top / side by ray-marching
    // the view segment through the box at 3 depths), a shadow + condensate drip stain on the wall below
    float acRate = (resid ? 0.2 : 0.09) * (zInBase ? 0.3 : 1.0) * step(0.15, fract(seed * 6.61));
    float cR3 = fh1(vec2(bi * 3.1 + seed * 0.71, fl * 5.7 - seed * 0.3));
    if (cR3 < acRate && valid > 0.5 && lod < 0.99) {
      float acW = min(0.72, ww - 0.1), acH = 0.42, acD = 0.3, cx = wx0 + 0.5 * ww + (fract(cR3 * 37.0) - 0.5) * max(ww - acW - 0.1, 0.0);
      vec2 sh = vec2(Vt.x, Vt.y) / Vt.z * acD;
      vec2 p0 = vec2(fx, fy), p1 = p0 + sh, pm = p0 + 0.5 * sh;
      float m0 = boxAA(p0.x, cx - 0.5 * acW, cx + 0.5 * acW, aw) * boxAA(p0.y, wy0, wy0 + acH, ah);
      float mm = boxAA(pm.x, cx - 0.5 * acW, cx + 0.5 * acW, aw) * boxAA(pm.y, wy0, wy0 + acH, ah);
      float m1 = boxAA(p1.x, cx - 0.5 * acW, cx + 0.5 * acW, aw) * boxAA(p1.y, wy0, wy0 + acH, ah);
      float hit = max(max(m0, mm), m1);
      if (hit > 0.0) {
        float gy = (p1.y - wy0) / acH;
        vec3 acC = mix(vec3(0.62, 0.61, 0.57), vec3(0.5, 0.52, 0.52), step(0.5, fract(cR3 * 91.0))) * (0.85 + 0.2 * nz2.r);
        float gr = step(0.5, fract(gy * 7.0)) * step(0.35, gy) * step(gy, 0.92);   // front grille slots
        Surf ac; ac.metal = 0.3; ac.rough = 0.55; ac.emis = vec3(0.0);
        if (m1 > 0.5) { ac.alb = acC * (1.0 - 0.3 * gr); ac.n = vec3(0.0, 0.0, 1.0); }
        else if (p1.y > wy0 + acH) { ac.alb = acC * 1.1; ac.n = vec3(0.0, 1.0, 0.15); }           // top face
        else if (p1.y < wy0) { ac.alb = acC * 0.4; ac.n = vec3(0.0, -1.0, 0.15); }                // underside
        else { ac.alb = acC * 0.8; ac.n = vec3(p1.x < cx ? -1.0 : 1.0, 0.0, 0.2); }               // side
        ac.n = normalize(ac.n);
        float k = hit * (1.0 - lod);
        r.alb = mix(r.alb, ac.alb, k); r.rough = mix(r.rough, ac.rough, k); r.metal = mix(r.metal, ac.metal, k);
        r.n = normalize(mix(r.n, ac.n, k)); r.emis *= 1.0 - k; gGlass *= 1.0 - k;
      }
      // cast shadow on the sill / wall below and a thin condensate stain
      float shd = boxAA(fx, cx - 0.5 * acW, cx + 0.5 * acW + 0.1, aw) * boxAA(fy, wy0 - 0.45, wy0, ah) * (1.0 - hit);
      float drip = boxAA(fx, cx + 0.12, cx + 0.2, aw) * step(fy, wy0) * (1.0 - smoothstep(0.0, 2.2, wy0 - fy));
      r.alb *= (1.0 - 0.45 * shd * (1.0 - smoothstep(0.0, 0.45, wy0 - fy))) * (1.0 - 0.3 * drip);
    }
  }
  // far LOD (skyline): exactly box-filtered window pattern (pbox) instead of a flat average: floor bands, deco pier
  // lines, spandrel stripes and mullion grids stay readable on distant towers and fade to the true mean (no moire)
  if (lod > 0.0) {
    float wf = 1.8; // (skyline r4) wider box filter: kills the micro-grid moire seen from altitude
    float cxw = pbox(ux, bw, wx0, wx0 + ww, aw * wf);
    float cyw = pbox(yy, fh, wy0, wy0 + wh, ah * wf);
    float cov = cxw * cyw * valid;
    vec3 roomAvg = textureLod(tInterior, vec2((mod(tile, 4.0) + 0.5) / 4.0, 1.0 - (floor(tile / 4.0) + 0.5) / 4.0), 9.0).rgb;
    Surf a;
    a.n = vec3(0, 0, 1); a.metal = 0.0;
    if (curtain) {
      float capx = 1.0 - pbox(fx, bw, cw, bw - cw, aw * wf);
      float capy = 1.0 - pbox(yy, fh, cw, fh - cw, ah * wf);
      float cap = clamp(capx + capy - capx * capy, 0.0, 1.0);
      vec3 glc = gt * ((lowIron ? 0.13 : 0.05) + 0.03 * cellR); // (skyline r7) low-iron glass body tone (as near LOD)
      glc *= 0.75 + 0.5 * zR; // (skyline r12) per-zone tone (as near LOD)
      if (vX.y > 2.5) glc = vec3(0.05, 0.052, 0.055); // (street r11) louvre band
      glc = mix(glc, vec3(0.3, 0.3, 0.28), 0.75 * cBl * cBl * mix(0.5, 1.0, wv)); // (skyline r8) blinds (pane-average of the near LOD)
      vec3 capc = capC * (0.9 + 0.2 * nz2.r);
      float vis = cyw * valid;
      a.alb = mix(mix(spC, glc, vis), capc, cap);
      a.rough = mix(mix(spGl > 0.5 ? 0.1 : 0.38, 0.06, vis), 0.42, cap);
      a.metal = cap * 0.85 + (1.0 - cap) * (1.0 - vis) * (spGl > 0.5 ? 0.3 : 0.5);
      gGlass = mix(gGlass, (1.0 - cap) * mix(spGl * 0.8, 1.0, vis), lod);
      a.emis = roomAvg * uInteriorGain * 0.25 * vis * (1.0 - cap) * (0.6 + 0.8 * lit);
    } else {
      vec3 avgGlass = vec3(0.035, 0.038, 0.042);
      { // (skyline r8) per-window variation in the far LOD: blinds / curtains (same cellR rule as the near LOD), lit vs
        // dark rooms, pane tone; fades to the mean once a window cell is sub-1.5 px
        float thr = deco ? 0.86 : (pOK ? 0.8 : 0.55), bf = cellR > thr ? min(1.0, (cellR - thr) * 1.8) : 0.0; // (street r10) zOK: fewer blinds
        vec3 bcF = resid ? mix(vec3(0.85, 0.8, 0.7), vec3(0.6, 0.35, 0.3), step(0.8, cellR2)) : vec3(0.82, 0.82, 0.8);
        vec3 wvC = avgGlass * (0.55 + 0.9 * cellR2) + roomAvg * 0.08 * lit;
        wvC = mix(wvC, bcF * 0.55, bf);
        float meanB = deco ? 0.02 : (pOK ? 0.06 : 0.2); // (street r10) masonry: fewer blinds -> darker window mean
        avgGlass = mix(mix(avgGlass, bcF * 0.55, meanB), wvC, wv);
      }
      vec3 wallC = o.alb;
      if (deco) { // recessed dark spandrels stacked between the windows: vertical pier lines
        vec3 spd = mix(vec3(0.075, 0.078, 0.082), vec3(0.2, 0.2, 0.19), 0.35 * fract(seed * 3.3)) * (0.85 + 0.3 * nz2.r);
        wallC = mix(o.alb, mix(spd, avgGlass, cyw), cxw * valid);
        a.alb = wallC;
        a.metal = 0.2 * cxw * valid * (1.0 - cyw);
      } else {
        a.alb = mix(wallC, avgGlass, cov);
      }
      a.alb *= 1.0 - 0.1 * cxw * valid * (1.0 - cyw); // reveals / sills shading
      a.rough = mix(o.rough, 0.12, cov);
      gGlass = mix(gGlass, cov, lod);
      a.emis = (roomAvg * 0.25 * (0.4 + 1.2 * lit) + vec3(0.03, 0.036, 0.045)) * uInteriorGain * cov * (pOK ? 0.7 : (deco ? 0.5 : 1.0)); // (textures r4) pOK 0.45 -> 0.7 // (street r10) darker masonry windows; (skyline r11) deco too
    }
    r.alb = mix(r.alb, a.alb, lod); r.rough = mix(r.rough, a.rough, lod); r.metal = mix(r.metal, a.metal, lod);
    r.n = normalize(mix(r.n, a.n, lod)); r.emis = mix(r.emis, a.emis, lod);
  }
  // (daynight) at night only a random fraction of the rooms is lit (warm tungsten / some cool LED), the rest go dim
  if (uNightK > 0.0 && vWPos.y > 7.0) {
    float nr = fract(cellR * 13.7 + cellR2 * 5.3);
    float nsw = fract(sin(floor(uDnTime / (45.0 + 60.0 * cellR2) + cellR * 17.0) * 91.7 + cellR * 311.0) * 4375.5); // rooms switch on / off every ~1-2 min
    vec3 nt = nr > 0.86 ? vec3(0.72, 0.88, 1.2) : vec3(1.15, 0.88, 0.6);
    // (lighting2 r3) per-floor bands (night refs): office towers have whole floors lit (cool fluorescent) or dark,
    // homes / masonry a denser random scatter (~60 % lit)
    float flR = fh1(vec2(fl * 3.1 + seed * 7.7, seed * 2.9 + 0.37));
    bool officeT = curtain || ribbon;
    float nThr = officeT ? (flR > 0.9 ? -1.0 : (flR < 0.45 ? 0.95 : 0.62)) : (flR > 0.92 ? 0.2 : 0.6); // (lighting2 r4) critic: 70-80 % lit -> ~35-40 %
    if (officeT && flR > 0.9) nt = mix(vec3(0.85, 0.95, 1.12), vec3(1.1, 0.95, 0.75), step(0.96, flR));
    nt *= mix(vec3(1.0), vec3(1.12, 0.9, 0.7), step(0.6, fract(flR * 5.3))); // (lighting2 r4) colour temperature varies per floor
    r.emis *= mix(vec3(1.0), (nr > nThr) != (nsw < 0.1) ? nt * (0.8 + 0.9 * fract(nr * 7.3)) : vec3(0.06), uNightK);
  }
  if (uNightK > 0.0 && abs(vWN.y) > 0.6) r.emis *= 1.0 - uNightK; // (lighting2 r3) no 'windows' on roofs / flat tops (far-shore roofs glowed as a pale band at night)
  // (skyline r4) large-scale facade breakup on towers (not deco: those carry piers + tier cornices): a louvred
  // mechanical floor every M floors, a louvred plant band under the top of every mass (reads as a mechanical crown /
  // penthouse at each setback) and, on curtain walls, a heavier vertical pier / fin every K bays. All terms are
  // box-filtered (pbox) so they survive at any distance and never shimmer.
  if (!deco && topY - gH > 36.0) {
    float hM = fract(seed * 2.93 + 0.41), hK = fract(seed * 6.17 + 0.23);
    float M = 9.0 + floor(hM * 5.0) * 4.0; // 9..25 floors
    float mech = pbox(yy + 0.5 * fh, M * fh, (M - 1.0) * fh, M * fh, ah * 1.3) * step(0.5, hK) * step(3.0 * fh, topY - gH - yy) * (curtain && lowIron ? 0.0 : 1.0); // (skyline r5) 50 % of towers (was 72 %)
    float crownH = (curtain ? 1.0 : 1.4) * fh + (hM > 0.55 ? fh : 0.0);
    float crownB = boxAA(yy, topY - gH - crownH, topY - gH + 2.0, ah) * step(0.2, fract(seed * 3.17)) * ((curtain || ribbon || topY - gH > 70.0) ? 1.0 : 0.0) /* (skyline r9) not on masonry mid-rises (bands under cornices) */ * (curtain && lowIron ? 0.0 : 1.0); // (skyline r6) no plant band per tier on the low-iron supertalls (One WTC read as striped)
    float band = max(mech, crownB) * boxAA(ux, -0.05, usable + 0.05, aw) * step(0.0, yy);
    if (zOK) band = 0.0; // (street r9) masonry walls: no louvred plant floors mid-shaft (read as translucent stripes on brick); the cap zone crowns them
    float pierM = 0.0, finN = 0.0;
    bool roundT = gHs < -0.015 && gHs > -0.03; // (skyline r9) round tower tiers (FacadeBuilder.cyl wrap)
    if ((curtain && hK > 0.45) || roundT) { // vertical pier fin every K bays (0.3-0.5 m), lit / shaded edge
      float K = roundT ? 1.0 + floor(fract(seed * 9.31) * 2.0) : 2.0 + floor(fract(seed * 9.31) * 4.0), pw = (roundT ? 0.34 : 0.3) + 0.2 * fract(seed * 1.77);
      pierM = pbox(ux + 0.5 * pw, K * bw, 0.0, pw, aw * 1.3) * valid;
      float ft = mod(ux + 0.5 * pw, K * bw) / pw; // across the fin: rounded profile -> lit / shaded edges (near range)
      finN = step(ft, 1.0) * (ft * 2.0 - 1.0) * 0.85 * (1.0 - lod);
    }
    if (band > 0.001 || pierM > 0.001) {
      float sl = pbox(yy, 0.32, 0.0, 0.13, ah * 1.2); // louvre blades: converge to their mean when sub-pixel
      vec3 louv = (curtain ? mix(capC, vec3(0.2, 0.21, 0.22), 0.78) : mix(o.alb * 0.55, vec3(0.2, 0.21, 0.22), 0.6)) * (1.0 - 0.45 * sl) * (0.9 + 0.2 * nz2.g);
      // louvre floors keep the pier / mullion rhythm (thin stiles every bay)
      float stile = 1.0 - pbox(fx, bw, cw + 0.03, bw - cw - 0.03, aw * 1.3);
      louv = mix(louv, curtain ? capC : o.alb * 1.05, stile * 0.8);
      r.alb = mix(r.alb, louv, band); r.rough = mix(r.rough, 0.55, band); r.metal = mix(r.metal, curtain ? 0.6 : 0.2, band);
      r.n = normalize(mix(r.n, vec3(0.0, -0.3 * (1.0 - lod), 1.0), band)); // (skyline r9) blades slope down-out: no sky-blue glint from the street r.emis *= 1.0 - band; gGlass *= 1.0 - band;
      vec3 pc = mix(capC, vec3(0.62, 0.63, 0.63), step(0.62, fract(seed * 4.39 + 0.5)) * 0.4) * (0.85 + 0.3 * nz2.r);
      if (roundT && !curtain) pc = o.alb * vec3(1.1, 1.09, 1.07); // (skyline r9) cast-stone / concrete fins on masonry drums
      float pm = pierM * (1.0 - band);
      r.n = normalize(mix(r.n, vec3(finN, 0.0, 1.0), pm * (1.0 - lod)));
      r.alb = mix(r.alb, pc, pm); r.rough = mix(r.rough, 0.38, pm); r.metal = mix(r.metal, 0.8, pm); r.emis *= 1.0 - pm; gGlass *= 1.0 - pm;
    }
  }
  if (curtain) r.n = normalize(r.n + vec3(gWob, 0.0) * clamp(gGlass, 0.0, 1.0));
  // (skyline r12) critic: 'no ambient occlusion at setback ledges'. Contact shade at the foot of every set-back tier
  // (the terrace roof + parapet occlude the lower wall), plus a long soft falloff; box-filtered by construction (no tex)
  if (tierY > 1.0) {
    float dyT = vFac.y - tierY;
    float aoT = 0.36 * (1.0 - smoothstep(0.0, 4.5, dyT)) + 0.14 * (1.0 - smoothstep(0.0, 20.0, dyT));
    r.alb *= 1.0 - aoT; r.emis *= 1.0 - 0.6 * aoT; gGlass *= 1.0 - 0.5 * aoT;
  }
  return r;
}
`}));function Mg({userAgent:e=``,platform:t=``,maxTouchPoints:n=0,deviceMemory:r,coarsePointer:i=!1}={}){let a=/iPad/i.test(e)||/Mac/i.test(t||e)&&n>1,o=a||/Android|iPhone|iPod|Mobile/i.test(e)||i&&n>0;return{ipad:a,mobile:o,touch:n>0||i,constrained:o||Number.isFinite(r)&&r<=4}}function Ng(){let e=globalThis.navigator??{};return Mg({userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints,deviceMemory:e.deviceMemory,coarsePointer:globalThis.matchMedia?.(`(pointer: coarse)`).matches??!1})}var Pg=t((()=>{}));function Fg({search:e=``,device:t=Ng(),launchQuality:n}={}){let r=new URLSearchParams(e),i=r.get(`q`)||n||(t.constrained?`mobile`:`high`);i===`medium`&&(i=`med`),Object.hasOwn(Lg,i)||(i=t.constrained?`mobile`:`high`);let a={...Lg[i],splits:[...Lg[i].splits],perf:!r.has(`perfoff`)};if(!a.mobile&&r.get(`qset`))for(let e of r.get(`qset`).split(`,`)){let[t,n]=e.split(`:`);Object.hasOwn(a,t)&&![`name`,`mobile`,`splits`].includes(t)&&(a[t]=n===`true`?!0:n===`false`?!1:isNaN(+n)?n:+n)}return a}function Ig(){return Rg??=Fg({search:globalThis.location?.search??``,launchQuality:globalThis.__spiderbenchQuality})}var Lg,Rg,zg=t((()=>{Pg(),Lg={mobile:{name:`mobile`,mobile:!0,cascades:1,shadowMapSize:1024,shadowFar:140,splits:[.1,140],shadowTaps:3,charShadow:0,ao:!1,aoHalfRes:!0,aoQuality:`Performance`,ssr:!1,ssgi:!1,taa:!1,shafts:!1,wet:!1,planarReflections:!1,cloudSteps:10,cloudLightSteps:2,cloudNoiseSize:64,envSize:64,bloomLevels:3,dofTaps:0,mbSamples:0,sharpen:.15,pixelRatioCap:1.25,renderScale:.75,minRenderScale:.5,maxBufferPixels:65e4,targetFps:30,cameraFar:6e3,facadeNear:420,detailFar:240,worldFar:2400,propFar:1e3,textureAnisotropy:4,collisionCell:.05,streamResidentBytes:67108864,streamBootBytes:25165824,streamBootTiles:12},low:{name:`low`,cascades:2,shadowMapSize:1024,shadowFar:500,splits:[.1,30,500],shadowTaps:5,ao:!1,aoHalfRes:!0,aoQuality:`Performance`,cloudSteps:10,cloudLightSteps:2,envSize:64,taa:!0,bloomLevels:5,dofTaps:16,mbSamples:6,sharpen:.25,charShadow:0,ssr:!1,shafts:!1,shaftSteps:0,ssgi:!1,wet:!1},med:{name:`med`,cascades:3,shadowMapSize:2048,shadowFar:900,splits:[.1,18,90,900],shadowTaps:8,ao:!0,aoHalfRes:!0,aoQuality:`Low`,cloudSteps:16,cloudLightSteps:3,envSize:128,taa:!0,bloomLevels:6,dofTaps:22,mbSamples:8,sharpen:.3,charShadow:1024,ssr:!0,ssrSteps:20,shafts:!0,shaftSteps:12,ssgi:!0,ssgiDirs:4,ssgiSteps:4,wet:!0},high:{name:`high`,cascades:5,shadowMapSize:2048,shadowFar:3e3,splits:[.1,14,50,200,800,3e3],shadowTaps:10,ao:!0,aoHalfRes:!1,aoQuality:`Medium`,cloudSteps:22,cloudLightSteps:3,envSize:128,taa:!0,bloomLevels:6,dofTaps:43,mbSamples:10,sharpen:.35,charShadow:2048,ssr:!0,ssrSteps:28,shafts:!0,shaftSteps:16,ssgi:!0,ssgiDirs:6,ssgiSteps:4,wet:!0}}}));function Bg(e){return Object.hasOwn(Vg,e)||Object.hasOwn(Hg,e)}var Vg,Hg,Ug=t((()=>{Vg={"city/tex/asphalt_col.png":{width:1024},"city/tex/asphalt_nrm.png":{width:1024},"city/tex/sidewalk_nrm.png":{width:512},"city/tex/walls_col.jpg":{width:512},"city/tex/walls_nrm.webp":{width:256},"city/tex/walls_hao.jpg":{width:256},"city/tex/roof_col.png":{width:256},"city/tex/interiors.png":{width:1024},"city/tex/grass_nrm.png":{width:512},"city/tex/ts_ads.webp":{width:2048},"city/tex/ts_pavers.webp":{width:1024},"city/tex/ts_pavers_n.webp":{width:1024},"city/tex/ts_pavers_r.webp":{width:1024},"city/tex/ts_signs.webp":{width:1024},"city/tex/ts_shops.webp":{width:1024},"city/tex/vehicles_atlas2.webp":{width:1024},"city/tex/coast_atlas.webp":{width:1024},"city/npc/people_bake.webp":{width:960},"city/props/leaves_nrm.png":{width:512},"enemies/brute_basecolor.webp":{width:1024},"tex/thug_basecolor_b.webp":{width:1024},"tex/thug_basecolor_c.webp":{width:1024},"tex/suit_normal.png":{width:1024},"tex/thug_basecolor.png":{width:1024},"tex/thug_basecolor_b.png":{width:1024},"tex/thug_basecolor_c.png":{width:1024}},Hg={"spiderman.glb":{normal:1024,orm:512,basecolor:2048},"thug.glb":{normal:512,orm:512,basecolor:1024}}}));function Wg(e,{base:t=`/`,mobile:n=!1,mobileOnly:r=!1}={}){if(typeof e!=`string`||/^(data:|blob:)/i.test(e))return e;t=t.endsWith(`/`)?t:t+`/`;let i=t+`assets/`,a;if(e.startsWith(i))a=e.slice(i.length);else if(e.startsWith(`/assets/`))a=e.slice(8);else if(e.startsWith(`assets/`))a=e.slice(7);else return e;return n&&!r&&Bg(a)&&(a=`mobile/`+a),i+a}function Gg(e=`/`,t=globalThis.__spiderbenchWorkerModuleUrl||self.location.href){return e===`./`?new URL(`../`,t).href:e}function Kg(e){return Wg(e,{base:Gg(`./`),mobile:!!Ig().mobile,mobileOnly:!0})}var qg=t((()=>{zg(),Ug()}));function Jg(e,t){return B_(e,t||{},0,0)}function Yg(e,t){return O_(e,{i:2},t&&t.out,t&&t.dictionary)}function Xg(e,t){if(t){for(var n=new Qg(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(V_)return V_.encode(e);for(var i=e.length,a=new Qg(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new Qg(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return T_(a,0,o)}function Zg(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(H_)return H_.decode(e);var i=U_(e),a=i.s,n=i.r;return n.length&&D_(8),a}var Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_,V_,H_,U_,W_=t((()=>{for(Qg=Uint8Array,$g=Uint16Array,e_=Int32Array,t_=new Qg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n_=new Qg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),r_=new Qg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i_=function(e,t){for(var n=new $g(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new e_(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},a_=i_(t_,2),o_=a_.b,s_=a_.r,o_[28]=258,s_[258]=28,c_=i_(n_,0),l_=c_.b,u_=c_.r,d_=new $g(32768),f_=0;f_<32768;++f_)p_=(f_&43690)>>1|(f_&21845)<<1,p_=(p_&52428)>>2|(p_&13107)<<2,p_=(p_&61680)>>4|(p_&3855)<<4,d_[f_]=((p_&65280)>>8|(p_&255)<<8)>>1;for(m_=(function(e,t,n){for(var r=e.length,i=0,a=new $g(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new $g(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new $g(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[d_[d]>>c]=l}else for(s=new $g(r),i=0;i<r;++i)e[i]&&(s[i]=d_[o[e[i]-1]++]>>15-e[i]);return s}),h_=new Qg(288),f_=0;f_<144;++f_)h_[f_]=8;for(f_=144;f_<256;++f_)h_[f_]=9;for(f_=256;f_<280;++f_)h_[f_]=7;for(f_=280;f_<288;++f_)h_[f_]=8;for(g_=new Qg(32),f_=0;f_<32;++f_)g_[f_]=5;__=/*#__PURE__*/ m_(h_,9,0),v_=/*#__PURE__*/ m_(h_,9,1),y_=/*#__PURE__*/ m_(g_,5,0),b_=/*#__PURE__*/ m_(g_,5,1),x_=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},S_=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},C_=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},w_=function(e){return(e+7)/8|0},T_=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Qg(e.subarray(t,n))},E_=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],D_=function(e,t,n){var r=Error(t||E_[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,D_),!n)throw r;return r},O_=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new Qg(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new Qg(i*3));var l=function(e){var t=n.length;if(e>t){var r=new Qg(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=S_(e,d,1);var v=S_(e,d+1,3);if(d+=3,!v){var y=w_(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&D_(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=v_,m=b_,h=9,g=5;else if(v==2){var S=S_(e,d,31)+257,C=S_(e,d+10,15)+4,w=S+S_(e,d+5,31)+1;d+=14;for(var T=new Qg(w),E=new Qg(19),D=0;D<C;++D)E[r_[D]]=S_(e,d+D*3,7);d+=C*3;for(var O=x_(E),k=(1<<O)-1,A=m_(E,O,1),D=0;D<w;){var j=A[S_(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,ee=0;for(y==16?(ee=3+S_(e,d,3),d+=2,M=T[D-1]):y==17?(ee=3+S_(e,d,7),d+=3):y==18&&(ee=11+S_(e,d,127),d+=7);ee--;)T[D++]=M}}var N=T.subarray(0,S),te=T.subarray(S);h=x_(N),g=x_(te),p=m_(N,h,1),m=m_(te,g,1)}else D_(1);if(d>_){c&&D_(0);break}}s&&l(f+131072);for(var ne=(1<<h)-1,P=(1<<g)-1,re=d;;re=d){var M=p[C_(e,d)&ne],F=M>>4;if(d+=M&15,d>_){c&&D_(0);break}if(M||D_(2),F<256)n[f++]=F;else if(F==256){re=d,p=null;break}else{var ie=F-254;if(F>264){var D=F-257,ae=t_[D];ie=S_(e,d,(1<<ae)-1)+o_[D],d+=ae}var I=m[C_(e,d)&P],oe=I>>4;I||D_(3),d+=I&15;var te=l_[oe];if(oe>3){var ae=n_[oe];te+=C_(e,d)&(1<<ae)-1,d+=ae}if(d>_){c&&D_(0);break}s&&l(f+131072);var se=f+ie;if(f<te){var L=a-te,ce=Math.min(te,se);for(L+f<0&&D_(3);f<ce;++f)n[f]=r[L+f]}for(;f<se;++f)n[f]=n[f-te]}}t.l=p,t.p=re,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?T_(n,0,f):n.subarray(0,f)},k_=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},A_=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},j_=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:R_,l:0};if(i==1){var o=new Qg(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new $g(f+1),m=M_(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new Qg(p),l:m}},M_=function(e,t,n){return e.s==-1?Math.max(M_(e.l,t,n+1),M_(e.r,t,n+1)):t[e.s]=n},N_=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new $g(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},P_=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},F_=function(e,t,n){var r=n.length,i=w_(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},I_=function(e,t,n,r,i,a,o,s,c,l,u){k_(t,u++,n),++i[256];for(var d=j_(i,15),f=d.t,p=d.l,m=j_(a,15),h=m.t,g=m.l,_=N_(f),v=_.c,y=_.n,b=N_(h),x=b.c,S=b.n,C=new $g(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=j_(C,7),E=T.t,D=T.l,O=19;O>4&&!E[r_[O-1]];--O);var k=l+5<<3,A=P_(i,h_)+P_(a,g_)+o,j=P_(i,f)+P_(a,h)+o+14+3*O+P_(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return F_(t,u,e.subarray(c,c+l));var M,ee,N,te;if(k_(t,u,1+(j<A)),u+=2,j<A){M=m_(f,p,0),ee=f,N=m_(h,g,0),te=h;var ne=m_(E,D,0);k_(t,u,y-257),k_(t,u+5,S-1),k_(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)k_(t,u+3*w,E[r_[w]]);u+=3*O;for(var P=[v,x],re=0;re<2;++re)for(var F=P[re],w=0;w<F.length;++w){var ie=F[w]&31;k_(t,u,ne[ie]),u+=E[ie],ie>15&&(k_(t,u,F[w]>>5&127),u+=F[w]>>12)}}else M=__,ee=h_,N=y_,te=g_;for(var w=0;w<s;++w){var ae=r[w];if(ae>255){var ie=ae>>18&31;A_(t,u,M[ie+257]),u+=ee[ie+257],ie>7&&(k_(t,u,ae>>23&31),u+=t_[ie]);var I=ae&31;A_(t,u,N[I]),u+=te[I],I>3&&(A_(t,u,ae>>5&8191),u+=n_[I])}else A_(t,u,M[ae]),u+=ee[ae]}return A_(t,u,M[256]),u+ee[256]},L_=/*#__PURE__*/ new e_([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),R_=/*#__PURE__*/ new Qg(0),z_=function(e,t,n,r,i,a){var o=a.z||e.length,s=new Qg(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=L_[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new $g(32768),g=a.h||new $g(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new e_(25e3),x=new $g(288),S=new $g(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var M=o-T;if((C>7e3||E>24576)&&(M>423||!l)){u=I_(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var ee=0;ee<286;++ee)x[ee]=0;for(var ee=0;ee<30;++ee)S[ee]=0}var N=2,te=0,ne=p,P=A-j&32767;if(M>2&&k==y(T-P))for(var re=Math.min(f,M)-1,F=Math.min(32767,T),ie=Math.min(258,M);P<=F&&--ne&&A!=j;){if(e[T+N]==e[T+N-P]){for(var ae=0;ae<ie&&e[T+ae]==e[T+ae-P];++ae);if(ae>N){if(N=ae,te=P,ae>re)break;for(var I=Math.min(P,ae-2),oe=0,ee=0;ee<I;++ee){var se=T-P+ee&32767,L=se-h[se]&32767;L>oe&&(oe=L,j=se)}}}A=j,j=h[A],P+=A-j&32767}if(te){b[E++]=268435456|s_[N]<<18|u_[te];var ce=s_[N]&31,le=u_[te]&31;w+=t_[ce]+n_[le],++x[257+ce],++S[le],D=T+N,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=I_(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var ue=T+65535;ue>=o&&(c[u/8|0]=l,ue=o),u=F_(c,u+1,e.subarray(T,ue))}a.i=o}return T_(s,0,r+w_(u)+i)},B_=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new Qg(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return z_(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},V_=typeof TextEncoder<`u`&&/*#__PURE__*/ new TextEncoder,H_=typeof TextDecoder<`u`&&/*#__PURE__*/ new TextDecoder;try{H_.decode(R_,{stream:!0})}catch{}U_=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:T_(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}}})),G_=/* @__PURE__ */ n({expandPacket:()=>q_,keyOf:()=>X_,restoreSnapshot:()=>K_});function K_(e,t){let n=e=>{if(!e||typeof e!=`object`)return e;if(e.$sb){let[r,i]=e.$sb;return r===`undefined`?void 0:r===`hole`?Z_:r===`number`?Number(i):r===`reference`?t[i]:r===`object`?Object.fromEntries(i.map(([e,t])=>[e,n(t)])):new Bf[r]().fromArray(i.map(n))}for(let t of Object.keys(e)){let r=n(e[t]);r===Z_?delete e[t]:e[t]=r}return e};return n(JSON.parse(e))}function*q_(e,t,n={},r=[]){let i=new e;for(let e of t.chunks){let n=Yg(e.data),a=0,o=0,s=(e,t)=>{let r=n.slice(a,a+e);return a+=e,new t(r.buffer)},c=e.lengths,l={codes:s(c[0],Uint8Array),arities:s(c[1],Uint8Array),args:s(c[2],Uint8Array),numbers:s(c[3],Float64Array)},u=JSON.parse(Zg(Yg(e.snapshots))),d=/* @__PURE__ */ new Map,f=e=>(d.has(e)||d.set(e,K_(u[e],r)),d.get(e)),p=()=>{let e=0,t=1,n;do n=l.args[o++],e+=(n&127)*t,t*=128;while(n&128);return e};for(let e=0;e<l.codes.length;e++){let n=[];for(let t=0;t<l.arities[e];t++){let e=p();n.push(e>=8?e&1?f((e-9)/2):l.numbers[(e-8)/2]:e===0?void 0:e===1?!0:e===2?!1:e===3?null:-0)}i[t.names[l.codes[e]]](...n),(e&63)==63&&(yield)}}return i.build({...n,consume:!0})}var J_,Y_,X_,Z_,Q_=t((()=>{ag(),W_(),J_=[`Matrix4`,`Matrix3`,`Color`,`Vector2`,`Vector3`,`Quaternion`],Y_=(e,t)=>({$sb:t===void 0?[e]:[e,t]}),X_=(e,t,n)=>JSON.stringify(e,function(e,r){let i=this[e];if(i===void 0)return Y_(Array.isArray(this)&&!Object.hasOwn(this,e)?`hole`:`undefined`);if(typeof i==`number`&&(!Number.isFinite(i)||Object.is(i,-0)))return Y_(`number`,String(Object.is(i,-0)?`-0`:i));if(typeof i==`function`){let e=n.get(i);return e===void 0&&(e=t.length,n.set(i,e),t.push(i)),Y_(`reference`,e)}if(i&&typeof i==`object`){for(let e of J_)if(i?.[`is`+e])return Y_(e,i.toArray())}return i&&typeof i==`object`&&Object.hasOwn(i,`$sb`)?Y_(`object`,Object.entries(i)):r}),Z_=Symbol(`recipe array hole`)})),$_=/* @__PURE__ */ n({geometryTransferables:()=>tv,packGeometry:()=>ev,unpackGeometry:()=>nv});function ev(e){if(!e)return null;let t={};for(let[n,r]of Object.entries(e.attributes)){if(r.isInterleavedBufferAttribute||r.isInstancedBufferAttribute)throw Error(`Streaming worker expects independent vertex attributes`);t[n]={array:r.array,itemSize:r.itemSize,normalized:r.normalized,half:!!r.isFloat16BufferAttribute}}return{attributes:t,index:e.index?.array??null,groups:e.groups,box:e.boundingBox?[...e.boundingBox.min.toArray(),...e.boundingBox.max.toArray()]:null,sphere:e.boundingSphere?[...e.boundingSphere.center.toArray(),e.boundingSphere.radius]:null,drawRange:e.drawRange}}function tv(e){if(!e)return[];let t=new Set(Object.values(e.attributes).map(e=>e.array.buffer));return e.index&&t.add(e.index.buffer),[...t]}function nv(e){if(!e)return null;let t=new mo;for(let[n,r]of Object.entries(e.attributes)){let e;r.half?(e=new to([],r.itemSize),e.array=r.array,e.count=r.array.length/r.itemSize):e=new K(r.array,r.itemSize,r.normalized),t.setAttribute(n,e)}return e.index&&t.setIndex(new K(e.index,1)),t.groups=e.groups,t.drawRange=e.drawRange,e.box&&(t.boundingBox=new ka(new W().fromArray(e.box),new W().fromArray(e.box,3))),e.sphere&&(t.boundingSphere=new ao(new W().fromArray(e.sphere),e.sphere[3])),t}var rv=t((()=>{ag()})),iv=/* @__PURE__ */ n({compactGeometry:()=>ov,compactGeometrySteps:()=>av});function*av(e,t=/* @__PURE__ */ new WeakMap,n=8192){n=Math.max(256,Math.floor(n)||8192);for(let r of[`normal`,`color`,`aTint`,`aM`,`aPart`]){let i=e.attributes[r];if(!(i?.array instanceof Float32Array)||[`color`,`aTint`,`aM`].includes(r)&&i.isInstancedBufferAttribute)continue;if(t.has(i)){e.setAttribute(r,t.get(i));continue}let a=r===`normal`?Int16Array:r===`aPart`?Uint8Array:Uint16Array,o=r===`normal`?e=>Math.round(Math.max(-1,Math.min(1,e))*32767):r===`aPart`?e=>e:Wa.toHalfFloat,s=new a(i.array.length);for(let e=0;e<s.length;){let t=Math.min(s.length,e+n);for(;e<t;e++)s[e]=o(i.array[e]);e<s.length&&(yield)}let c=r===`normal`?new K(s,i.itemSize,!0):r===`aPart`?new K(s,1):new to(s,i.itemSize);t.set(i,c),e.setAttribute(r,c)}return e}function ov(e,t=/* @__PURE__ */ new WeakMap){let n=av(e,t),r;do r=n.next();while(!r.done);return r.value}var sv=t((()=>{ag()}));function cv(e,t){if(e===`vert`)return 1;if(e===`box`||e===`boxC`)return uv(t[6]??63)*4;if(e===`cyl`){let e=t[6]??8,n=t[7]??!0;return 2*(e+1)+(n?(t[3]>0?e+2:0)+(t[4]>0?e+2:0):0)}if(e===`tube`){let e=t[3]??6;return 2*(e+1)+(t[4]&&t[2]>0?2*(e+2):0)}return 0}function lv(e,{methods:t,role:n,cx:r,cz:i,range:a,returns:o={}}){let s=[...t,`setColor`,`setPart`,`setXf`],c=new og(Uint8Array),l=new og(Uint8Array),u=new og(Uint8Array),d=new og(Float64Array),f=[],p=/* @__PURE__ */ new Map,m=/* @__PURE__ */ new Map,h=!1,g=0,_=[],v=()=>{if(!c.length)return;let e=[c,l,u,d].map(e=>e.take()),t=e.map(e=>e.byteLength),n=new Uint8Array(t.reduce((e,t)=>e+t,0)),r=0;for(let t of e)n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),r),r+=t.byteLength;_.push({data:Jg(n,{level:1}),snapshots:Jg(Xg(JSON.stringify(f)),{level:1}),lengths:t});for(let e of[c,l,u,d])e.a=new e.Type(0),e.length=0;f=[],p=/* @__PURE__ */ new Map,m=/* @__PURE__ */ new Map},y=[],b=/* @__PURE__ */ new Map,x=e=>{do{let t=e%128;e=Math.floor(e/128),u.push(t|(e?128:0))}while(e)},S={v:0,n:0,color:[1,1,1],curPart:0,xf:null},C=(e,t)=>{if(h)throw Error(`Cannot append to a sealed tile recipe`);c.push(s.indexOf(e)),l.push(t.length),g++;for(let e of t)if(typeof e==`number`){if(Object.is(e,-0)){x(4);continue}let t=m.get(e);t===void 0&&(t=d.length,d.push(e),m.size<1024&&m.set(e,t)),x(8+t*2)}else if(e===void 0)x(0);else if(e===!0)x(1);else if(e===!1)x(2);else if(e===null)x(3);else{let t=X_(e,y,b),n=p.get(t);n===void 0&&(n=f.length,f.push(t),p.set(t,n)),x(9+n*2)}c.length>=512&&v()},w=()=>{if(!h){v(),h=!0,p=m=null,f=null,b.clear();for(let e of[c,l,u,d])e.a=null}},T={role:n,cx:r,cz:i,range:a,compress:w,get bytes(){return w(),_.reduce((e,t)=>e+t.data.byteLength+t.snapshots.byteLength,0)},get commands(){return g},packet(){return w(),y.length||![`MB`,`FacadeBuilder`,`RB`].includes(e.workerId)?null:{version:1,builder:e.workerId,names:s,chunks:_,role:n}},*expand(t={}){return w(),yield*q_(e,{names:s,chunks:_},t,y)}},E;return E=new Proxy(S,{get(a,s){return s===`recipe`?T:s===`build`?(e={})=>{if(w(),!a.n&&!a.v)return null;let t=new mo;return t.setAttribute(`position`,new K(/* @__PURE__ */ new Float32Array,3)),t.setIndex(new K(/* @__PURE__ */ new Uint16Array,1)),t.boundingBox=new ka(new W(r-128,0,i-128),new W(r+128,450,i+128)),t.boundingSphere=new ao(new W(r,225,i),320),t.userData.streaming={recipe:T,options:e,ready:!1,gpuReady:!1},t}:s===`with`?(e,t)=>{let n=a.xf;return E.setXf(n?n.clone().multiply(e):e),t(E),E.setXf(n),E}:[`setColor`,`setPart`,`setXf`].includes(s)?(...t)=>(C(s,t),e.prototype[s].apply(a,t),E):t.includes(s)?(...e)=>{let t=a.v;return C(s,e),a.n++,n===`detail`&&(a.v+=cv(s,e)),o[s]?o[s](...e):s===`vert`?t:E}:a[s]},set(e,t,n){return t===`xf`&&C(`setXf`,[n]),e[t]=n,!0}}),E}var uv,dv=t((()=>{ag(),W_(),Q_(),sg(),uv=e=>{let t=0;for(let n=0;n<6;n++)t+=!!(e&1<<n);return t}}));function fv(e){let t=e>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pv(e,t){let n=Math.imul(e|0,374761393)+Math.imul(t|0,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function mv(e){let t=0,n=Gv.length-1;for(;n-t>1;){let r=t+n>>1;Gv[r]<=e?t=r:n=r}return t}function hv(e){if(e<Y.Z_MIN||e>Y.Z_MAX)return[1,0];let t=mv(e),n=Gv[t],r=Gv[t+1],i=(e-n)/(r-n);return[Yv[t]+(Yv[t+1]-Yv[t])*i,Xv[t]+(Xv[t+1]-Xv[t])*i]}function gv(e,t){if(e<Y.Z_MIN||t>Y.Z_MAX)return[1,0];let n=(e,t)=>{let n=mv(t),r=(t-Gv[n])/(Gv[n+1]-Gv[n]);return e[n]+(e[n+1]-e[n])*r},r=Math.max(n(qv,Math.max(Y.Z_MIN,e)),n(qv,Math.min(Y.Z_MAX-1e-6,t))),i=Math.min(n(Jv,Math.max(Y.Z_MIN,e)),n(Jv,Math.min(Y.Z_MAX-1e-6,t)));for(let n=0;n<Gv.length;n++)Gv[n]>e&&Gv[n]<t&&(r=Math.max(r,qv[n]),i=Math.min(i,Jv[n]));return[r,i]}function _v(e,t){return Zv.some(n=>Math.abs(n.z-e)<1&&t>n.x0&&t<n.x1)}function vv(e,t,n=0){let r=Y.PARK;return e>r.x0-n&&e<r.x1+n&&t>r.z0-n&&t<r.z1+n}function yv(e){let t=0;for(;t<ty.length&&e>=ty[t];)t++;return t}function bv(e){let t=Math.max(0,Math.min(Iv-1,Math.round((e-Lv)/Y.ST_SP))),n=e-Pv[t],r=Vv[t];return n>=-r&&n<r?2*t+1:n<0?2*t:t+1>=Iv?2*Iv:2*t+2}function xv(e){return[e===0?-1e5:ty[e-1],e===ty.length?1e5:ty[e]]}function Sv(e,t,n,r,i,a){let o=(e.ax+e.bx)/2,s=(e.az+e.bz)/2,c=e.len/2,l=(i-n)/2,u=(a-r)/2,d=(n+i)/2-o,f=(r+a)/2-s;return!(Math.abs(d)>l+Math.abs(e.ux)*c+Math.abs(e.nx)*t||Math.abs(f)>u+Math.abs(e.uz)*c+Math.abs(e.nz)*t||Math.abs(d*e.ux+f*e.uz)>c+l*Math.abs(e.ux)+u*Math.abs(e.uz)||Math.abs(d*e.nx+f*e.nz)>t+l*Math.abs(e.nx)+u*Math.abs(e.nz))}function Cv(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length],o=t(i[0],i[1]),s=t(a[0],a[1]);if(o>=0&&n.push(i),o>=0!=s>=0){let e=o/(o-s);n.push([i[0]+(a[0]-i[0])*e,i[1]+(a[1]-i[1])*e])}}return n}function wv(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return Math.abs(t)/2}function Tv(e,t){for(let n=1;n<e.length;n++)if(t<=e[n][0]+1e-6)return e[n-1][1]+(e[n][1]-e[n-1][1])*(t-e[n-1][0])/(e[n][0]-e[n-1][0]);return e[e.length-1][1]}function Ev(e){let t=(e,t)=>Tv(e.pts,t),n=(e,t,n)=>e.pts[0][0]<=t+1e-6&&e.pts[e.pts.length-1][0]>=n-1e-6,r=[.../* @__PURE__ */ new Set([e.z0,e.z1,...e.xst.map(e=>e[0])])].sort((e,t)=>e-t);for(let t of[e.left,e.right])t.auto&&(t.pts=r.map(e=>[e,t.auto(e)]));let i=[e.left,...e.lines,e.right],a=new Map(i.map(e=>[e.name,e]));e.zs=r,e.lx=t,e.bands=r.slice(1).map(()=>[]),e.cells=[],e.segs=[],e.nodes=[];let o=(e,n)=>[e[4]?t(a.get(e[4]),n):-1/0,e[5]?t(a.get(e[5]),n):1/0],s=(t,n,r)=>{if(Math.abs(t-e.z0)<1e-6)return e.top;if(Math.abs(t-e.z1)<1e-6)return e.bot;if(r-n<.01)return{hw:0,walk:0};for(let i of e.xst){if(Math.abs(i[0]-t)>1e-6)continue;let[e,a]=o(i,t);if(n>=e-.01&&r<=a+.01)return{hw:i[1]/2,walk:i[2]}}return null},c=[];for(let e=0;e+1<r.length;e++){let a=r[e],o=r[e+1],l=(a+o)/2,u=i.filter(e=>n(e,a,o)).sort((e,n)=>t(e,l)-t(n,l));c[e]=[];for(let n=0;n+1<u.length;n++){let r=u[n],i=u[n+1],l=t(r,a),d=t(r,o),f=t(i,a),p=t(i,o);f-l<.01&&p-d<.01||c[e].push({k:e,A:r,B:i,top:s(a,l,f),bot:s(o,d,p),prev:null,next:null})}}for(let t=1;t<c.length;t++)for(let n of c[t]){if(n.top)continue;let i=c[t-1].find(e=>e.A===n.A&&e.B===n.B&&!e.bot);i?(i.next=n,n.prev=i):(n.top={hw:0,walk:0},console.warn(`[layout] map`,e.name,`uncovered edge without partner at`,r[t]))}for(let e=0;e<c.length;e++)for(let t of c[e])!t.bot&&!t.next&&(t.bot={hw:0,walk:0});let l=e=>({x0:Math.min(...e.map(e=>e[0])),x1:Math.max(...e.map(e=>e[0])),z0:Math.min(...e.map(e=>e[1])),z1:Math.max(...e.map(e=>e[1]))});for(let n=0;n<c.length;n++)for(let i of c[n]){if(i.prev)continue;let n=[];for(let e=i;e;e=e.next)n.push(e);let a=n[n.length-1],o=i.A,s=i.B,c=[r[i.k],...n.map(e=>r[e.k+1])],u=[[t(o,c[0]),c[0],`top`]];for(let e=0;e<c.length;e++)u.push([t(s,c[e]),c[e],e===c.length-1?`bot`:`B`]);for(let e=c.length-1;e>=1;e--)u.push([t(o,c[e]),c[e],`A`]);for(let e=0;e<2;e++){let e=[];for(let t=0;t<u.length;t++){let n=u[t],r=u[(t+1)%u.length];Math.hypot(r[0]-n[0],r[1]-n[1])>1e-6&&e.push(n)}u=e.filter((t,n)=>{let r=e[(n+e.length-1)%e.length],i=e[(n+1)%e.length];return!(r[2]===t[2]&&Math.abs((t[0]-r[0])*(i[1]-t[1])-(t[1]-r[1])*(i[0]-t[0]))<1e-6)})}let d=u.map(e=>[e[0],e[1]]),f=0,p=!0;for(let e=0;e<d.length;e++){let t=d[(e+d.length-1)%d.length],n=d[e],r=d[(e+1)%d.length],i=(n[0]-t[0])*(r[1]-n[1])-(n[1]-t[1])*(r[0]-n[0]);Math.abs(i)<1e-6||(f&&Math.sign(i)!==f&&(p=!1),f=Math.sign(i))}p||console.warn(`[layout] map`,e.name,`non-convex cell at`,d[0]);let m=(e,t)=>{let n=e===`top`?i.top:e===`bot`?a.bot:e===`A`?{hw:o.w/2,walk:o.walk}:{hw:s.w/2,walk:s.walk};return n.hw+(t?n.walk:0)},h=0,g=0;for(let[e,t]of d)h+=e,g+=t;h/=d.length,g/=d.length;let _=e=>{let t=d;for(let n=0;n<d.length&&t.length>=3;n++){let r=d[n],i=d[(n+1)%d.length],a=Math.hypot(i[0]-r[0],i[1]-r[1]),o=-(i[1]-r[1])/a,s=(i[0]-r[0])/a;(h-r[0])*o+(g-r[1])*s<0&&(o=-o,s=-s);let c=m(u[n][2],e);t=Cv(t,(e,t)=>(e-r[0])*o+(t-r[1])*s-c)}return t.length>=3&&wv(t)>.5?t:null},v=_(!1);if(!v)continue;let y=_(!0),b=l(v),x=y?l(y):null,S=(e.parks||[]).find(e=>Dv(d,e.x,e.z))??null,C={id:e.cells.length,k:i.k,ks:n.map(e=>e.k),poly:d,curb:v,prop:y,A:o,B:s,za:c[0],zb:c[c.length-1],map:e,park:S,block:{...b,px0:x?.x0??b.x0,px1:x?.x1??b.x0,pz0:x?.z0??b.z0,pz1:x?.z1??b.z0,poly:y,curb:v,vmap:!0,core:!0,diag:[],park:!!S,id:e.idBase+e.cells.length,dist:Ov((b.x0+b.x1)/2,(b.z0+b.z1)/2)}};e.cells.push(C);for(let t of n)e.bands[t.k].push(C)}let u=e.lines;for(let i of u){let a=i.pts[0][0],s=i.pts[i.pts.length-1][0],c=[a];for(let n of r){if(n<=a+1e-6||n>=s-1e-6)continue;let r=t(i,n),l=i.pts.some(e=>Math.abs(e[0]-n)<1e-6),d=e.xst.some(e=>Math.abs(e[0]-n)<1e-6&&(()=>{let[t,i]=o(e,n);return r>=t-.01&&r<=i+.01})()),f=u.some(e=>e!==i&&[e.pts[0],e.pts[e.pts.length-1]].some(e=>Math.abs(e[0]-n)<1e-6&&Math.abs(e[1]-r)<.01));(l||d||f)&&c.push(n)}c.push(s);for(let r=0;r+1<c.length;r++){let a=c[r],o=c[r+1];u.some(e=>e!==i&&u.indexOf(e)<u.indexOf(i)&&n(e,a,o)&&Math.abs(t(e,a)-t(i,a))<.01&&Math.abs(t(e,o)-t(i,o))<.01)||e.segs.push({name:i.name,w:i.w,walk:i.walk,ax:t(i,a),az:a,bx:t(i,o),bz:o,line:i,oneway:i.oneway===`S`?1:i.oneway===`N`?-1:0})}}for(let n of e.xst){let[r,a,s,c]=n,[l,u]=o(n,r),d=[...new Set(i.filter(e=>e.pts[0][0]<=r+1e-6&&e.pts[e.pts.length-1][0]>=r-1e-6).map(e=>Math.round(t(e,r)*1e3)/1e3))].filter(e=>e>=l-.01&&e<=u+.01).sort((e,t)=>e-t);for(let t=0;t+1<d.length;t++)e.segs.push({name:c,w:a,walk:s,ax:d[t],az:r,bx:d[t+1],bz:r,cross:!0,oneway:n[6]===`E`?1:n[6]===`W`?-1:0})}for(let t of e.segs){let n=Math.hypot(t.bx-t.ax,t.bz-t.az);t.len=n,t.ux=(t.bx-t.ax)/n,t.uz=(t.bz-t.az)/n,t.nx=-t.uz,t.nz=t.ux,t.hw=t.w/2,t.map=e}e.boundary=(n,r)=>{for(let i of[e.left,e.right])if(r>=i.pts[0][0]-.5&&r<=i.pts[i.pts.length-1][0]+.5&&Math.abs(t(i,r)-n)<.5)return i.edge?{edge:!0,hw:0}:{hw:i.w/2,ux:0,uz:1};return Math.abs(r-e.z0)<.5?e.top.hw?{hw:e.top.hw,ux:1,uz:0}:{edge:!0,hw:0}:Math.abs(r-e.z1)<.5?e.bot.hw?{hw:e.bot.hw,ux:1,uz:0}:{edge:!0,hw:0}:null},e.asphalt=[];for(let n=0;n+1<r.length;n++){let i=n===0?r[0]+e.top.hw:r[n],a=n+2===r.length?r[n+1]-e.bot.hw:r[n+1],o=n=>t(e.left,n)+e.left.w/2,s=n=>t(e.right,n)-e.right.w/2;e.asphalt.push([[o(i),i],[s(i),i],[s(a),a],[o(a),a]])}for(let t of e.segs)t.oneway&&(e.boundary(t.ax,t.az)||e.boundary(t.bx,t.bz))&&(t.oneway=0);let d=Math.min(...e.left.pts.map(e=>e[1])),f=Math.max(...e.right.pts.map(e=>e[1]));return e.bx0=d,e.bx1=f,e}function Dv(e,t,n){let r=0;for(let i=0;i<e.length;i++){let[a,o]=e[i],[s,c]=e[(i+1)%e.length],l=(s-a)*(n-o)-(c-o)*(t-a);if(Math.abs(l)<1e-9)continue;let u=Math.sign(l);if(r&&u!==r)return!1;r=u}return!0}function Ov(e,t){let n=Math.exp(-(((t+130)/360)**2))*Math.exp(-(((e-120)/640)**2)),r=.34*Math.exp(-(((t-620)/330)**2))+.26*Math.exp(-(((t-1900)/260)**2))+(t<Y.PARK.z1&&t>Y.PARK.z0-300?.2:0)+.16*Math.exp(-(((t+700)/260)**2)),i=Math.min(1,n+r*(1-n)),a=Math.exp(-(((t-2760)/380)**2))*Math.exp(-(((e+120)/560)**2)),o=+(t>Y.PARK.z0-40&&t<Y.PARK.z1+60&&Math.abs(Math.abs(e)-250)<200),s=t<Y.PARK.z0-20?Math.min(1,(Y.PARK.z0-20-t)/200):0,c=Math.exp(-(((t-1300)/380)**2)),l=+(t<Y.PARK.z1&&t>Y.PARK.z0),[u,d]=hv(t),f=+(e<u+120||e>d-120),p=t>330?Math.min(1,(t-330)/250):0,m=`mid`;return m=t>2250?`fd`:t>1500?`ct`:t>350?e<0?`gv`:`ct`:t>Y.PARK.z1?e<-125?`hk`:`mid`:t>Y.PARK.z0?e<Y.PARK.x0?`uws`:e>Y.PARK.x1?`ues`:`park`:`harlem`,{midtown:i,fidi:a,parkEdge:o,harlem:s,village:c,upper:l,water:f,south:p,id:m}}function kv(){let e=[];for(let t=0;t<ny;t+=2)for(let n=0;n+1<Iv;n++){let r=oy[n*ny+t];if(!r)continue;let{x0:i,x1:a,z0:o,z1:s}=r,c=null;if(n+2<Iv&&_v(Pv[n+1],(i+a)/2)){let e=oy[(n+1)*ny+t];e&&(c=Pv[n+1],s=e.z1,i=Math.max(i,e.x0),a=Math.min(a,e.x1))}let l=(i+a)/2,u=(o+s)/2;e.push({x0:i,x1:a,z0:o,z1:s,core:!0,ci:t/2-1,rj:n,col:t,px0:i+Y.AV_WALK,px1:a-Y.AV_WALK,pz0:o+Y.ST_WALK,pz1:s-Y.ST_WALK,id:e.length,split:c,dist:Ov(l,u),diag:r.diag||[]}),c&&n++}return e}function Av(){if(vy)return vy;vy=Array(Iv*ny).fill(null);for(let e of kv())vy[e.rj*ny+e.col]=e,e.split&&(vy[(e.rj+1)*ny+e.col]=e);return vy}function jv(e,t){let n=yv(e);if(n&1)return null;let r=bv(t),i=r&1?(r-1>>1)-1:r/2-1;if(i<0||i+1>=Pv.length)return null;let a=Av()[i*ny+n];return a&&e>=a.x0&&e<=a.x1&&t>=a.z0&&t<=a.z1?a:null}var Mv,Y,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,Uv,Wv,Gv,Kv,qv,Jv,Yv,Xv,Zv,Qv,$v,ey,ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,py,my,hy,gy,_y,vy,yy=t((()=>{Mv=!(typeof location<`u`&&/[?&]nozfix\b/.test(location.search)),Y={AV_ROAD:22,AV_WALK:5,ST_SP:80,ST_ROAD:10,ST_WALK:4,PROM:16,X_MIN:-790,X_MAX:870,Z_MIN:-3480,Z_MAX:3330,CORE:{x0:-640,x1:640,z0:-820,z1:820},PARK:{x0:-234,x1:234,z0:-2151,z1:-569},DRIVE_X0:1e9,DRIVE_X1:1e9,SEAWALL_X:1e9,RIVER_X1:1e9,WATER_Y:-1.6,CURB_H:.15},Y.AV_HALF=Y.AV_ROAD/2,Y.ST_HALF=Y.ST_ROAD/2,Y.AV_LANE=3.6,Y.AV_SP=200,Nv=[-610,-430,-250,0,250,430,610],Pv=[];for(let e=-3440;e<=3280;e+=Y.ST_SP)Pv.push(e);Fv=Nv.length,Iv=Pv.length,Lv=Pv[0],Rv=3.75,zv=[-480,-1200,-1680,-2480,-2800],Bv=[-3280,-3040,-2720,-2320,-1920,-1760,-1440,80,1600,1760],Vv=Pv.map(e=>zv.includes(e)?9:Bv.includes(e)?Rv:Y.ST_HALF),Hv=[[-3480,-100],[-3380,-300],[-3200,-440],[-2800,-545],[-2200,-620],[-1400,-665],[-600,-700],[0,-718],[600,-725],[1200,-708],[1800,-665],[2300,-595],[2700,-490],[3e3,-360],[3200,-215],[3330,-60]],Uv=[[-3480,-100],[-3380,110],[-3200,320],[-2800,555],[-2200,660],[-1400,690],[-600,700],[0,708],[600,722],[1200,772],[1650,812],[2050,775],[2450,620],[2780,430],[3050,205],[3250,25],[3330,-60]],Wv=(e,t)=>{if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0]){let[r,i]=e[n-1],[a,o]=e[n];return i+(o-i)*(t-r)/(a-r)}return e[e.length-1][1]},Gv=[];{let e=/* @__PURE__ */ new Set([Y.Z_MIN,Y.Z_MAX]);Pv.forEach((t,n)=>{for(let r of[t-Vv[n],t+Vv[n]])r>Y.Z_MIN&&r<Y.Z_MAX&&e.add(r)}),Gv.push(...[...e].sort((e,t)=>e-t))}Kv=e=>30*Math.max(0,Math.min(1,(e-Y.Z_MIN)/450,(Y.Z_MAX-e)/450)),qv=Gv.map(e=>Wv(Hv,e)),Jv=Gv.map(e=>Wv(Uv,e)),Yv=Gv.map((e,t)=>qv[t]-Kv(e)),Xv=Gv.map((e,t)=>Jv[t]+Kv(e)),[...Gv.map((e,t)=>[Yv[t],e]),...Gv.map((e,t)=>[Xv[t],e]).reverse().slice(1,-1)],Zv=[{z:560,x0:-250,x1:0}],Qv=[{x:430,z0:-160,z1:-80},{x:0,z0:-80,z1:0}],$v={x0:Y.PARK.x0-Y.AV_WALK,x1:Y.PARK.x1+Y.AV_WALK,z0:Y.PARK.z0-Y.ST_WALK,z1:Y.PARK.z1+Y.ST_WALK},ey=(e,t,n,r)=>e>=$v.x0-.01&&n<=$v.x1+.01&&t>=$v.z0-.01&&r<=$v.z1+.01,Y.PARK.z1-Y.PARK.z0,[{name:`pond`,cx:150,cz:-620,rx:58,rz:27,a:.35,h:[.16,.12,0,.06],q:.05,n:120,y:Y.CURB_H-.55},{name:`lake`,cx:-62,cz:-1030,rx:116,rz:56,a:-.22,h:[.1,.24,.06,.13],q:.06,n:200,y:Y.CURB_H-.55},{name:`turtle`,cx:40,cz:-1150,rx:50,rz:15,a:.04,h:[.06,.1,0,.05],q:.04,n:90,y:Y.CURB_H-.5},{name:`reservoir`,cx:0,cz:-1515,rx:170,rz:120,a:.05,h:[.03,.04,.09,.02],q:.012,n:144,y:Y.CURB_H-.7},{name:`meer`,cx:140,cz:-2080,rx:74,rz:36,a:-.15,h:[.12,.15,0,.07],q:.05,n:120,y:Y.CURB_H-.55}].map(e=>{let t=t=>1+.08*Math.sin(t*3+e.cx)+.05*Math.sin(t*5+e.cz*.1)+e.h[0]*Math.sin(t*2+.7)+e.h[1]*Math.sin(t*3+2.1)+e.h[2]*Math.cos(t*4)+e.h[3]*Math.sin(t*5+4.2)+e.q*(Math.sin(t*7+e.cx*.05)+.7*Math.sin(t*11+e.cz*.03)+.45*Math.sin(t*17+1.9)),n=0;for(let e=0;e<360;e++)n=Math.max(n,t(e/360*Math.PI*2));let r=Math.min(1,1.1/n),i=e.rx*r,a=e.rz*r,o=[];for(let n=0;n<e.n;n++){let r=n/e.n*Math.PI*2,s=t(r),c=Math.cos(r)*i*s,l=Math.sin(r)*a*s,u=Math.cos(e.a),d=Math.sin(e.a);o.push([e.cx+c*u+l*d,e.cz-c*d+l*u])}return{...e,rx:i,rz:a,pts:o,R:Math.max(i,a)*1.15}}),ty=[];for(let e of Nv)ty.push(e-Y.AV_HALF,e+Y.AV_HALF);ny=2*Fv+1,2*Iv+1,ry=new Uint8Array(Fv*Iv),iy=new Uint8Array(Fv*Iv),ay=Array(Iv*ny).fill(null),oy=Array(Iv*ny).fill(null),sy={x0:-610,x1:0,z0:640,z1:1360},cy={z0:2400},ly=(e,t,n,r)=>e>=sy.x0-1e-6&&n<=sy.x1+1e-6&&t>=sy.z0-1e-6&&r<=sy.z1+1e-6;{let e=Y.PROM,t=(e,t)=>Qv.some(n=>Math.abs(n.x-Nv[e])<1&&Pv[t]>=n.z0-1&&Pv[t+1]<=n.z1+1);for(let n=0;n<Fv;n++)for(let r=0;r+1<Iv;r++){let i=Nv[n],[a,o]=gv(Pv[r]-Vv[r],Pv[r+1]+Vv[r+1]);i-Y.AV_HALF-Y.AV_WALK<a+e||i+Y.AV_HALF+Y.AV_WALK>o-e||vv(i,(Pv[r]+Pv[r+1])/2)||t(n,r)||i>sy.x0&&i<sy.x1&&ly(i,Pv[r],i,Pv[r+1])||Pv[r]>=cy.z0-1e-6||(ry[n*Iv+r]=1)}for(let t=0;t+1<Iv;t++)for(let n=0;n<ny;n+=2){let r=Pv[t]+Vv[t],i=Pv[t+1]-Vv[t+1],[a,o]=xv(n),[s,c]=gv(r,i);a=Math.max(a,s+e),o=Math.min(o,c-e),!(o-a<26)&&(ey(a,r,o,i)||ly(a,r,o,i)||r>=cy.z0||(oy[t*ny+n]={x0:a,x1:o,z0:r,z1:i,k:t,c:n}))}for(let t=0;t<Iv;t++)for(let n=0;n<ny;n+=2){let r=Pv[t],[i,a]=xv(n),o=Vv[t],[s,c]=gv(r-o-Y.ST_WALK,r+o+Y.ST_WALK),l=i,u=a;if(i=Math.max(i,s+e),a=Math.min(a,c-e),a-i<18)continue;let d=t>0?oy[(t-1)*ny+n]:null,f=oy[t*ny+n];if(!d&&!f||ey(i,r-o,a,r+o)||_v(r,(i+a)/2)||r>sy.z0&&r<sy.z1&&ly(i,r,a,r)||r>cy.z0+1e-6)continue;let p=e=>e>=0&&e<Fv&&(t>0&&ry[e*Iv+t-1]||ry[e*Iv+t]),m=Math.abs(i-l)<1e-6&&p(n/2-1),h=Math.abs(a-u)<1e-6&&p(n/2);if(m||h){if(!m){let e=Math.min(d?d.x0:1/0,f?f.x0:1/0);i=Math.max(i,e)}if(!h){let e=Math.max(d?d.x1:-1/0,f?f.x1:-1/0);a=Math.min(a,e)}a-i<18||(ay[t*ny+n]=[i,a])}}for(let e=0;e<Fv;e++)for(let t=0;t<Iv;t++){let n=2*e+1,r=r=>{let i=r>=0&&r<ny?ay[t*ny+r]:null;return i&&(r===n-1?Math.abs(i[1]-(Nv[e]-Y.AV_HALF))<1e-6:Math.abs(i[0]-(Nv[e]+Y.AV_HALF))<1e-6)};if(t>0&&ry[e*Iv+t-1]||ry[e*Iv+t]||r(n-1)||r(n+1)){let[n,r]=gv(Pv[t]-Vv[t],Pv[t]+Vv[t]);Nv[e]-Y.AV_HALF>n+4&&Nv[e]+Y.AV_HALF<r-4&&!vv(Nv[e],Pv[t])&&(iy[e*Iv+t]=1)}}}uy=[{name:`BROADWAY`,kind:`broadway`,w:16,walk:5,pts:[[-520,-2160],[-520,-1360],[-430,-880],[-250,-560]]},{name:`BROADWAY`,kind:`broadway`,w:16,walk:5,pts:[[-250,-560],[0,-320]]},{name:`BROADWAY`,kind:`broadway`,w:16,walk:5,pts:[[0,320],[250,720],[430,1040]]},{name:`BROADWAY`,kind:`broadway`,w:16,walk:5,pts:[[430,1040],[250,1360],[0,2160]]}],dy=[];for(let e of uy)for(let t=0;t+1<e.pts.length;t++){let[n,r]=e.pts[t],[i,a]=e.pts[t+1],o=Math.hypot(i-n,a-r),s=(i-n)/o,c=(a-r)/o;dy.push({id:dy.length,name:e.name,kind:e.kind,ax:n,az:r,bx:i,bz:a,len:o,ux:s,uz:c,nx:-c,nz:s,hw:e.w/2,walk:e.walk})}for(let e=0;e+1<Iv;e++)for(let t=0;t<ny;t+=2){let n=oy[e*ny+t];n&&(n.diag=dy.filter(e=>Sv(e,e.hw+e.walk,n.x0,n.z0,n.x1,n.z1)))}fy=e=>-250-150*(e-640)/720,py={name:`village`,...sy,idBase:1e5,seamX:[{x:sy.x0,hw:Y.AV_HALF,walk:Y.AV_WALK},{x:sy.x1,hw:Y.AV_HALF,walk:Y.AV_WALK}],xst:[[720,10,4,`W 12TH ST`],[790,6,3.5,`JANE ST`,null,null,`W`],[880,12,4.5,`W 4TH ST`],[955,7,3.5,`PERRY ST`,null,null,`E`],[1040,13,5,`CHRISTOPHER ST`],[1110,6,3.5,`GROVE ST`,null,null,`W`],[1200,10,4,`BARROW ST`],[1290,7,3.5,`MORTON ST`,null,null,`E`]],lines:[{name:`WASHINGTON ST`,w:7,walk:3.5,oneway:`N`,pts:[[640,-520],[1360,-545]]},{name:`HUDSON ST`,w:12,walk:4.5,pts:[[640,-430],[880,-422],[1040,-440],[1360,-472]]},{name:`BLEECKER ST`,w:10,walk:4,pts:[[640,-250],[1360,fy(1360)]]},{name:`7TH AV S`,w:14,walk:5,pts:[[640,-160],[1040,fy(1040)]]},{name:`MACDOUGAL ST`,w:7,walk:3.5,oneway:`S`,pts:[[1040,-240],[1200,-262],[1360,-300]]},{name:`GREENWICH AV`,w:12,walk:4.5,pts:[[640,-60],[1360,-200]]}],left:{name:`12TH AV`,w:2*Y.AV_HALF,walk:Y.AV_WALK,seam:!0,pts:[[sy.z0,sy.x0],[sy.z1,sy.x0]]},right:{name:`6TH AV`,w:2*Y.AV_HALF,walk:Y.AV_WALK,seam:!0,pts:[[sy.z0,sy.x1],[sy.z1,sy.x1]]},top:{hw:Y.ST_HALF,walk:Y.ST_WALK},bot:{hw:Y.ST_HALF,walk:Y.ST_WALK}},Ev(py),my=[[2400,0],[2721,-10],[2880,-25],[3040,-45]],hy=e=>Tv(my,e),gy={name:`fidi`,z0:cy.z0,z1:3052,x0:-600,x1:660,idBase:2e5,top:{hw:Y.ST_HALF,walk:Y.ST_WALK},bot:{hw:0,walk:0},left:{name:`W EDGE`,w:0,walk:4,edge:!0,auto:e=>Wv(Hv,e)+Y.PROM},right:{name:`E EDGE`,w:0,walk:4,edge:!0,auto:e=>Wv(Uv,e)-Y.PROM},xst:[[2480,9,3.5,`MURRAY ST`,`W EDGE`,`BROADWAY`],[2490,9,3.5,`FRANKFORT ST`,`PARK ROW`,`E EDGE`],[2560,10,4,`PARK PL`,`W EDGE`,`BROADWAY`],[2560,10,4,`SPRUCE ST`,`PARK ROW`,`E EDGE`],[2640,11,4,`BARCLAY ST`,`W EDGE`,`BROADWAY`],[2640,10,4,`ANN ST`,`BROADWAY`,`E EDGE`],[2721,10,4,`VESEY ST`,`W EDGE`,`BROADWAY`],[2721,12,4.5,`FULTON ST`,`BROADWAY`,`E EDGE`],[2765,7,3,`JOHN ST`,`NASSAU ST`,`E EDGE`,`E`],[2799,10,4,`LIBERTY ST`,`W EDGE`,`BROADWAY`],[2799,9,3.5,`MAIDEN LN`,`BROADWAY`,`E EDGE`],[2840,7,3,`PINE ST`,`NASSAU ST`,`WATER ST`,`W`],[2865,9,3.5,`RECTOR ST`,`W EDGE`,`BROADWAY`],[2880,11,5,`WALL ST`,`BROADWAY`,`E EDGE`],[2920,6,3,`EXCHANGE PL`,`BROADWAY`,`WILLIAM ST`,`E`],[2950,9,3.5,`MORRIS ST`,`W EDGE`,`BROADWAY`],[2960,10,4,`BEAVER ST`,`BROADWAY`,`PEARL ST`],[2960,9,3.5,`OLD SLIP`,`PEARL ST`,`E EDGE`],[3e3,6,3,`STONE ST`,`WHITEHALL ST`,`PEARL ST`,`E`],[3040,12,5,`BATTERY PL`,`W EDGE`,`E EDGE`]],lines:[{name:`SOUTH END AV`,w:10,walk:4,pts:[[2640,-400],[2799,-340],[2950,-300],[3040,-265]]},{name:`GREENWICH ST`,w:10,walk:5,pts:[[2400,-430],[2560,-320],[2721,-186],[2799,-186],[2950,-215],[3040,-220]]},{name:`CHURCH ST`,w:10,walk:5,pts:[[2400,-250],[2560,-165],[2721,-100],[2799,-100],[2950,-85],[3040,-95]]},{name:`BROADWAY`,w:18,walk:5,pts:my},{name:`WHITEHALL ST`,w:12,walk:4.5,pts:[[2960,hy(2960)],[3040,22]]},{name:`NASSAU ST`,w:6,walk:3.5,oneway:`S`,pts:[[2640,38],[2721,42],[2880,50]]},{name:`BROAD ST`,w:14,walk:5,pts:[[2880,50],[2960,60],[3040,76]]},{name:`PARK ROW`,w:12,walk:4.5,pts:[[2400,250],[2560,120],[2640,hy(2640)]]},{name:`WILLIAM ST`,w:9,walk:3.5,pts:[[2400,430],[2560,300],[2721,190],[2880,118],[2960,95]]},{name:`PEARL ST`,w:10,walk:4,pts:[[2400,545],[2560,445],[2721,335],[2880,215],[2960,150],[3040,120]]},{name:`WATER ST`,w:12,walk:4.5,pts:[[2721,400],[2880,290],[2960,235]]}],parks:[{name:`CITY HALL PARK`,x:60,z:2470},{name:`BOWLING GREEN`,x:-25,z:3022}]},Ev(gy),(()=>{let e=gy.z1,t=[],n=[];for(let r of[e,...Gv.filter(t=>t>e)]){let[e,i]=hv(r);if(i-e<30)break;t.push([e+12,r]),n.push([i-12,r])}let r=[...t,...n.reverse()],i={x:-205,z:3140,r:20,h:8.5};[[[-20,e],[i.x,i.z]],[[128,e],[-60,3290]],[[i.x,i.z],[60,3236]],[[-150,e],[-240,3200]]].map(([e,t])=>{let n=Math.hypot(t[0]-e[0],t[1]-e[1]);return{ax:e[0],az:e[1],nx:-(t[1]-e[1])/n,nz:(t[0]-e[0])/n,hw:2.8}});let a=r;{let t=0,n=0;for(let[e,i]of r)t+=e,n+=i;t/=r.length,n/=r.length;for(let e=0;e<r.length&&a.length>=3;e++){let i=r[e],o=r[(e+1)%r.length],s=Math.hypot(o[0]-i[0],o[1]-i[1]);if(s<1e-6)continue;let c=-(o[1]-i[1])/s,l=(o[0]-i[0])/s;(t-i[0])*c+(n-i[1])*l<0&&(c=-c,l=-l),a=Cv(a,(e,t)=>(e-i[0])*c+(t-i[1])*l-4)}a=Cv(a,(t,n)=>n-e-4)}let o=[],s=i.r+9;o=o.filter(e=>wv(e)>120);let c=r.map(e=>e[0]),l=r.map(e=>e[1]);return{poly:r,inner:a,plazaR:s,lawns:o,castle:i,paths:[],x0:Math.min(...c),x1:Math.max(...c),z0:e,z1:Math.max(...l),lawnBB:o.map(e=>({x0:Math.min(...e.map(e=>e[0])),x1:Math.max(...e.map(e=>e[0])),z0:Math.min(...e.map(e=>e[1])),z1:Math.max(...e.map(e=>e[1]))}))}})(),_y={x:-250,z:-560,R:16,r:5.5,lane:10.4,n:32};{let e=_y,t=(t,n)=>Array.from({length:n},(r,i)=>{let a=i/n*Math.PI*2;return[e.x+Math.cos(a)*t,e.z+Math.sin(a)*t]});e.poly=t(e.R,e.n),e.islandPoly=t(e.r,20)}vy=null,{...Y.PARK}})),by,xy=t((()=>{by=[`wall`,`roof`,`parapet`,`coping`,`cornice`,`ledge`,`equipment`,`bulkhead`,`watertower`,`awning`,`fireescape`,`skylight`,`antenna`,`spire`,`hero`,`park`,`pier`,`glass`,`pole`,`trunk`],Object.fromEntries(by.map((e,t)=>[e,t]))})),Sy,Cy,wy=t((()=>{zg(),ag(),yy(),Sy=[[.13,.16,.085],[.15,.18,.1],[.11,.145,.08],[.17,.19,.11],[.13,.165,.11],[.25,.2,.09],[.28,.17,.08],[.2,.19,.1]],Cy=class e{constructor(e=1,t={}){this.rnd=fv(e),this.M=[],this.C=[],this.pal=t.palette??Sy,this.fade=t.fade??null,this.squash=t.squash??1,this.shape=t.shape??`blob`}add(e,t,n,r,i=.25,a=null){let o=this.rnd,s=this.pal,c=s[o()<i?5+Math.floor(o()*(s.length-5)):Math.floor(o()*5)],l=.8+o()*.4,u=(.75+o()*.3)*(a??this.squash),d=r*(.9+o()*.2),f=r*(.9+o()*.2),p=new ji().compose(new W(e,t+r*u*.9+r*.35,n),new ci().setFromAxisAngle(new W(0,1,0),o()*6.28),new W(d,r*u,f));this.M.push(p),this.C.push(c[0]*l,c[1]*l,c[2]*l)}clump(e,t,n,r,i,a=3,o=6,s=.25){for(let c=0;c<i;c++){let i=this.rnd()*Math.PI*2,c=r*Math.sqrt(this.rnd());this.add(e+Math.cos(i)*c,t,n+Math.sin(i)*c,a+this.rnd()*(o-a),s)}}get count(){return(this.releasedCount||0)+this.M.length}build(t,n=`canopy`,r=!0,i={}){if(!this.M.length)return null;if(i.tile){let a=/* @__PURE__ */ new Map,o=new W;this.M.forEach((e,t)=>{o.setFromMatrixPosition(e);let n=Math.floor(o.x/i.tile)+`,`+Math.floor(o.z/i.tile);a.has(n)||a.set(n,[]),a.get(n).push(t)});let s=null;for(let o of a.values()){let a=new e(1,{palette:this.pal,fade:this.fade,squash:this.squash,shape:this.shape});a.M=o.map(e=>this.M[e]),a.C=o.flatMap(e=>[this.C[e*3],this.C[e*3+1],this.C[e*3+2]]),a._geo=this._geo,a._mat=this._mat;let c=a.build(t,n,r,{smallCasters:i.smallCasters});this._geo=a._geo,this._mat=a._mat,s??=c}return Ig().mobile&&(this.releasedCount=(this.releasedCount||0)+this.M.length,this.M=[],this.C=[]),s}let a=this._geo??(this.shape===`cone`?new jc(.62,2.3,7,3).translate(0,.25,0):new ll(1,0));if(!this._geo){let e=a.attributes.position,t=fv(3),n=/* @__PURE__ */ new Map;for(let r=0;r<e.count;r++){let i=`${e.getX(r).toFixed(3)},${e.getY(r).toFixed(3)},${e.getZ(r).toFixed(3)}`;n.has(i)||n.set(i,.85+t()*.3);let a=n.get(i);e.setXYZ(r,e.getX(r)*a,e.getY(r)*a,e.getZ(r)*a)}let r=a.attributes.normal;for(let t=0;t<e.count;t++){let n=Math.hypot(e.getX(t),e.getY(t),e.getZ(t));r.setXYZ(t,e.getX(t)/n,e.getY(t)/n,e.getZ(t)/n)}this._geo=a}if(this._mat)return this._inst(t,n,r,a,this._mat,i);let o=new Ol({color:16777215,roughness:.95,metalness:0,flatShading:!1});this._mat=o;let s=this.fade;return o.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vCy; varying vec3 vCn; varying vec3 vCi;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
          vCy = position.y; vCn = normal; vCi = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          ${s?`{ vec3 ic = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
            float fs = smoothstep(${s[0].toFixed(1)}, ${s[1].toFixed(1)}, length(ic - cameraPosition)); transformed *= max(fs, 1e-3); }`:``}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
          varying float vCy; varying vec3 vCn; varying vec3 vCi; float cClump;
          float cH3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
          float cVn(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(cH3(i), cH3(i + vec3(1, 0, 0)), f.x), mix(cH3(i + vec3(0, 1, 0)), cH3(i + vec3(1, 1, 0)), f.x), f.y),
                       mix(mix(cH3(i + vec3(0, 0, 1)), cH3(i + vec3(1, 0, 1)), f.x), mix(cH3(i + vec3(0, 1, 1)), cH3(i + vec3(1, 1, 1)), f.x), f.y), f.z); }`).replace(`#include <color_fragment>`,`#include <color_fragment>
          diffuseColor.rgb *= mix(0.45, 1.05, smoothstep(-0.9, 0.7, vCy));   // dark underside / inner crown
          diffuseColor.rgb *= 0.92 + 0.16 * fract(sin(dot(floor(vCn * 2.0 + 0.5), vec3(12.9, 78.2, 37.7))) * 4375.5); // clump tone breakup
          // (round 7) cauliflower foliage clusters: leaf-mass lumps with dark gaps between them (per-crown phase), so the
          // crowns read as trees, not smooth cotton balls / lollipops
          cClump = cVn(vCn * 3.3 + vCi * 0.137) * 0.62 + cVn(vCn * 7.9 + vCi * 0.291) * 0.38;
          diffuseColor.rgb *= mix(0.58, 1.1, smoothstep(0.28, 0.72, cClump));`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
          { vec3 sx = normalize(dFdx(-vViewPosition)), sy = normalize(dFdy(-vViewPosition));
            vec2 dh = vec2(dFdx(cClump), dFdy(cClump)) * 2.2;
            vec3 r1 = cross(sy, normal), r2 = cross(normal, sx); float det = dot(sx, r1);
            vec3 bn = normalize(abs(det) * normal - sign(det) * (dh.x * r1 + dh.y * r2));
            if (det != 0.0) normal = bn; }`)},o.customProgramCacheKey=()=>`far-canopy-v2`+(s?s.join(`,`):``)+this.shape,this._inst(t,n,r,a,o,i)}_inst(e,t,n,r,i,a){let o=new ks(r,i,this.M.length),s=new G;for(let e=0;e<this.M.length;e++)o.setMatrixAt(e,this.M[e]),o.setColorAt(e,s.setRGB(this.C[e*3],this.C[e*3+1],this.C[e*3+2]));return o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.userData.staticBounds=!0,o.computeBoundingSphere(),o.castShadow=n&&!this.fade,o.receiveShadow=!0,o.name=t,a.smallCasters&&(o.userData.smallCasters=!0),e.add(o),Ig().mobile&&(this.releasedCount=(this.releasedCount||0)+this.M.length,this.M=[],this.C=[]),o}}})),Ty,Ey=t((()=>{ag(),Ty={params:new wi(0,.1,1,0)}}));function Dy(e){if(Oy.has(e))return;Oy.add(e);let t=e.updateMatrix,n=(/* @__PURE__ */ new Float64Array(10)).fill(NaN);e.updateMatrix=function(){let e=this.position,r=this.quaternion,i=this.scale;(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==r.x||n[4]!==r.y||n[5]!==r.z||n[6]!==r.w||n[7]!==i.x||n[8]!==i.y||n[9]!==i.z)&&(t.call(this),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=r.x,n[4]=r.y,n[5]=r.z,n[6]=r.w,n[7]=i.x,n[8]=i.y,n[9]=i.z)}}var Oy,ky=t((()=>{Oy=/* @__PURE__ */ new WeakSet}));function Ay(e,{maxBytesPerFrame:t=262144}={}){if(jy.has(e))return jy.get(e);let n=e.getContext(),r=/* @__PURE__ */ new WeakMap,i=/* @__PURE__ */ new WeakSet,a={bytes:0,completed:0,cancelled:0,releases:0,frameBytes:0,frameAllocations:0,maxFrameBytes:0},o=t,s={},c=null,l=0,u={facade:.5,roof:.375,detail:.125};function d(e){let t=r.get(e);if(t&&!t.released){if(t.released=!0,t.generation===l)for(let e of t.items)e.buffer&&n.deleteBuffer(e.buffer);r.delete(e),a.releases++,t.cursor<t.items.length&&a.cancelled++}}let f={beginFrame(){o=t,a.frameBytes=a.frameAllocations=0,s=Object.fromEntries(Object.entries(u).map(([e,n])=>[e,Math.floor(t*n)]))},get stats(){return{...a,maxBytesPerFrame:t}},release:d,warm(e){if(e.userData.streaming?.gpuReady||!e.userData.streaming?.ready)return!1;let t=r.get(e);if(!t){e.boundingBox||e.computeBoundingBox(),e.boundingSphere||e.computeBoundingSphere();let n=Object.entries(e.attributes).map(([e,t])=>({key:e,a:t,offset:0,buffer:null,attribute:null}));e.index&&n.push({key:`#index`,a:e.index,offset:0,buffer:null,attribute:null}),t={items:n,cursor:0,released:!1,generation:l},r.set(e,t),i.has(e)||(e.addEventListener(`dispose`,()=>d(e)),i.add(e))}let u=e.userData.streaming.recipe?.role??`facade`,f=s[u]??o;if(o<=0||f<=0)return!0;let p=t.items[t.cursor];if(!p)return!1;if(p.buffer)n.bindBuffer(n.COPY_WRITE_BUFFER,p.buffer);else{if(a.frameAllocations)return!0;if(p.buffer=n.createBuffer(),p.key===`#index`){let e=n.getParameter(n.VERTEX_ARRAY_BINDING);c??=n.createVertexArray(),n.bindVertexArray(c),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p.buffer),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null),n.bindVertexArray(e)}n.bindBuffer(n.COPY_WRITE_BUFFER,p.buffer),n.bufferData(n.COPY_WRITE_BUFFER,p.a.array.byteLength,n.STATIC_DRAW),a.frameAllocations++}let m=p.a.array,h=Math.min(o,f,m.byteLength-p.offset);if(h&&n.bufferSubData(n.COPY_WRITE_BUFFER,p.offset,new Uint8Array(m.buffer,m.byteOffset+p.offset,h)),n.bindBuffer(n.COPY_WRITE_BUFFER,null),p.offset+=h,o-=h,s[u]=f-h,a.bytes+=h,a.frameBytes+=h,a.maxFrameBytes=Math.max(a.maxFrameBytes,a.frameBytes),p.offset===m.byteLength&&(p.attribute=new Ud(p.buffer,My(n,p.a),p.a.itemSize,m.BYTES_PER_ELEMENT,p.a.count,p.a.normalized),p.attribute.gpuType=p.a.gpuType,t.cursor++),t.cursor===t.items.length){for(let n of t.items)n.key===`#index`?e.setIndex(n.attribute):e.setAttribute(n.key,n.attribute),n.a=null;e.userData.streaming.gpuReady=!0,a.completed++}return!0}};return e.domElement?.addEventListener(`webglcontextrestored`,()=>{l++,c=null,f.beginFrame()}),jy.set(e,f),f}var jy,My,Ny=t((()=>{ag(),jy=/* @__PURE__ */ new WeakMap,My=(e,t)=>{if(t.isFloat16BufferAttribute)return e.HALF_FLOAT;if(t.array instanceof Float32Array)return e.FLOAT;if(t.array instanceof Int16Array)return e.SHORT;if(t.array instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t.array instanceof Uint32Array)return e.UNSIGNED_INT;if(t.array instanceof Int32Array)return e.INT;if(t.array instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t.array instanceof Int8Array)return e.BYTE;throw Error(`Unsupported streamed VBO type`)}}));function Py(e,t,n,r){let i=new as(e,t);return i.name=n,i.castShadow=!!r.castShadow,i.receiveShadow=!!r.receiveShadow,r.smallCasters&&(i.userData.smallCasters=!0),r.renderOrder&&(i.renderOrder=r.renderOrder),i}function Fy(e,t,n,r={},i=[]){let a=e.length,o=r.renderer&&!Ly(`nostreamchunks`)?Ay(r.renderer):null,s=Array(a).fill(null),c=[],l=[],u=/* @__PURE__ */ new Map;for(let t=0;t<a;t++){let n=e[t];if(!n)continue;let a=i[t]||[0,0],o=(Ry||r.merge===!1?`i`+t:Math.floor(a[0]/By)+`,`+Math.floor(a[1]/By))+`|`+(n.index?Hy(n):`noindex`+t);u.has(o)||u.set(o,[]),u.get(o).push(t)}for(let i of u.values()){let a={tiles:i,sup:null,nVis:0};if(i.length===1){let o=i[0],u=Py(e[o],t,n+` `+o,r);s[o]={m:u,grp:a,vis:!0,sh:!0},l.push(u),e[o]=null,a.nVis=1,c.push(a);continue}let o=0,u=0;for(let t of i)o+=e[t].attributes.position.count,u+=e[t].index.count;let d=new mo,f=e[i[0]];for(let[t,n]of Object.entries(f.attributes)){let r=new n.array.constructor(o*n.itemSize),a=0;for(let n of i){let i=e[n].attributes[t].array;r.set(i,a),a+=i.length}d.setAttribute(t,new K(r,n.itemSize,n.normalized))}let p=new(o>65535?Uint32Array:Uint16Array)(u),m=[],h=0,g=0;for(let t of i){let n=e[t],r=n.index.array;for(let e=0;e<r.length;e++)p[g+e]=r[e]+h;n.boundingSphere||n.computeBoundingSphere(),n.boundingBox||n.computeBoundingBox(),m.push([g,r.length,n.boundingSphere,n.boundingBox]),h+=n.attributes.position.count,g+=r.length,n.dispose(),e[t]=null}let _=new K(p,1);d.setIndex(_),d.computeBoundingSphere(),d.computeBoundingBox();let v=Py(d,t,n+` super`,r);v.visible=!1,l.push(v),a.sup=v,i.forEach((e,i)=>{let[o,c,u,f]=m[i],p=new mo;for(let[e,t]of Object.entries(d.attributes))p.setAttribute(e,t);p.setIndex(_),p.setDrawRange(o,c),p.boundingSphere=u,p.boundingBox=f,p.userData.sharedRange=!0;let h=Py(p,t,n+` `+e,r);s[e]={m:h,grp:a,vis:!0,sh:!0},l.push(h)}),a.nVis=i.length,c.push(a)}let d=e=>{if(!e.sup){let t=s[e.tiles[0]];t.m.visible=t.vis,t.m.castShadow=t.sh&&!!r.castShadow;return}let t=!0,n=null,i=!0;for(let r of e.tiles){let e=s[r];if(!e.vis){t=!1;break}n===null?n=e.sh:e.sh!==n&&(i=!1)}let a=t&&i;e.sup.visible=a,e.sup.castShadow=a&&n&&!!r.castShadow;for(let t of e.tiles){let e=s[t];e.m.visible=!a&&e.vis,e.m.castShadow=e.sh&&!!r.castShadow}};for(let e of c)d(e);let f=new mo;f.setDrawRange(0,0);let p=new as(f,Vy);return p.name=n+` upload`,p.frustumCulled=!1,p.visible=!1,l.push(p),{mesh:l[0]??null,meshes:l,warm(e){let t=s[e];if(!t||zy)return!1;let n=t.m.geometry;if(o&&n.userData.streaming)return o.warm(n);if(n.userData.streaming&&!n.userData.streaming.ready)return t.wq=null,!1;if(n.userData.streaming&&t.wver!==n.userData.streaming.version&&(t.wq=null,t.wver=n.userData.streaming.version),t.wq||=[...Object.keys(n.attributes),n.index?`#index`:null].filter(Boolean),!t.wq.length)return n.userData.streaming&&(n.userData.streaming.gpuReady=!0),!1;let r=t.wq.shift();for(let e of Object.keys(f.attributes))f.deleteAttribute(e);return f.setIndex(null),r===`#index`?(f.setAttribute(`position`,n.attributes.position),f.setIndex(n.index)):f.setAttribute(r===`position`?r:`position`,n.attributes[r]),p.visible=!0,!0},endWarm:()=>{p.visible=!1},releaseGpu(e){let t=s[e];t&&t.grp.tiles.length===1&&(t.m.geometry.dispose(),t.wq=null)},sphere:e=>s[e]?.m.geometry.boundingSphere,hasDrawReady:e=>{let t=s[e]?.m.geometry.userData.streaming;return!!s[e]&&(!t||t.ready&&t.gpuReady)},hasReady:e=>!!s[e]&&(s[e].m.geometry.userData.streaming?.ready??!0),has:e=>!!s[e],setVisible(e,t){let n=s[e];n&&n.vis!==t&&(n.vis=t,d(n.grp))},setShadow(e,t){let n=s[e];n&&n.sh!==t&&(n.sh=t,d(n.grp))}}}var Iy,Ly,Ry,zy,By,Vy,Hy,Uy=t((()=>{ag(),Ny(),Iy=typeof location<`u`?new URLSearchParams(location.search):new URLSearchParams,Ly=e=>Iy.has(`perf2off`)||Iy.has(e),Ry=Ly(`nobatch`),zy=Ly(`nowarm`),By=512,Vy=new qo({colorWrite:!1,depthWrite:!1,depthTest:!1}),Hy=e=>Object.keys(e.attributes).sort().map(t=>t+e.attributes[t].itemSize+(e.attributes[t].normalized?`n`:``)+e.attributes[t].array.constructor.name).join(`,`)+(e.index?`|i`:``)}));function Wy(e){if(!e||e.userData.lodFade)return e;e.userData.lodFade=!0;let t=e.onBeforeCompile,n=e.customProgramCacheKey;return e.onBeforeCompile=(n,r)=>{t?.call(e,n,r),n.uniforms.uLodFrame={value:Ty.params},n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
`+Jy).replace(`#include <project_vertex>`,`#include <project_vertex>
`+Yy),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
`+Xy).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
`+Zy)},e.customProgramCacheKey=()=>(n?n.call(e):``)+`|lodfade1`,e.needsUpdate=!0,e}function Gy(e,t,n){if(e+2>ib.length){let e=new Float64Array(ib.length*2);e.set(ib),ib=e}return ib[e]=t,ib[e+1]=n,e+2}var Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb=t((()=>{ag(),zg(),Ey(),ky(),Uy(),Ky=Ly(`nowedge`),qy=!Ly(`noruntimecache`),Jy=`attribute vec4 aLod; varying float vLodIn; varying float vLodOut;`,Yy=`
  #ifdef USE_INSTANCING
  {
    vec3 lodP = (modelMatrix * vec4(instanceMatrix[3].xyz, 1.0)).xyz;
    float lodD = length(lodP.xz - cameraPosition.xz);
    vLodIn = aLod.y > aLod.x ? clamp((lodD - aLod.x) / (aLod.y - aLod.x), 0.0, 1.0) : 1.0;
    vLodOut = aLod.w > aLod.z ? clamp((aLod.w - lodD) / (aLod.w - aLod.z), 0.0, 1.0) : 1.0;
  }
  #else
  vLodIn = 1.0; vLodOut = 1.0;
  #endif`,Xy=`varying float vLodIn; varying float vLodOut; uniform vec4 uLodFrame;
  float lodIGN(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }`,Zy=`{
    float lodN = fract(lodIGN(gl_FragCoord.xy) + uLodFrame.x * 1.618034);
    if (lodN >= vLodOut || lodN < 1.0 - vLodIn) discard;
  }`,Qy=new ji,$y=new ci,eb=new W,tb=new W,nb=new Vi,rb=/* @__PURE__ */ new WeakMap,ib=/* @__PURE__ */ new Float64Array(8192),ab=/* @__PURE__ */ new Uint32Array(4096),ob=class e{static sortF2B=!new URLSearchParams(globalThis.location?.search??``).has(`nof2b`);static sortMax=2e4;constructor(e,t,{max:n=1024,near:r=0,far:i=400,castShadow:a=!0,receiveShadow:o=!0,extra:s={},color:c=!1,name:l=``,fadeIn:u=0,fadeOut:d=null,isStatic:f=!1,shadowFar:p=null,smallCasters:m=!1}={}){let h=Ig();h.mobile&&!f&&(i=Math.min(i,h.propFar),n=Math.max(64,Math.ceil(n*.75)),r>=i&&(n=1)),this.geo=e,this.mat=t,this.max=n,this.near=r,this.far=i,this.fadeIn=r>0?u||Math.max(10,r*.08):0,this.fadeOut=d??Math.max(10,i*.08),this.isStatic=f,this.shadowFar=Math.min(i,p??160,h.mobile?55:1/0),this.nShadow=0,s={...s,aLod:4},Wy(t),this.items=[],this.extraDefs=s,this.mesh=new ks(e,t,n),this.mesh.name=l,h.mobile&&Dy(this.mesh),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=a,this.mesh.receiveShadow=o,m&&(this.mesh.userData.smallCasters=!0);let g=0;this.mesh.onBeforeShadow=()=>{g=this.mesh.count,this.mesh.count=Math.min(g,this.nShadow)},this.mesh.onAfterShadow=()=>{this.mesh.count=g},this.mesh.instanceMatrix.setUsage(Ir),c&&(this.mesh.instanceColor=new xs(new Float32Array(n*3),3),this.mesh.instanceColor.setUsage(Ir)),this.extra={};for(let[t,r]of Object.entries(s)){let i=new xs(new Float32Array(n*r),r);i.setUsage(Ir),e.setAttribute(t,i),this.extra[t]=i}this.last=new W(1e9,0,0),this.sel=new Int32Array(n)}add(e,t,n,r=0,i=1,a=null,o=null,s=null){let c={x:e,y:t,z:n,ry:r,s:i,color:a,extra:o,scale3:s};return this.items.push(c),c}itemAt(e){return this.items.record?this.items.record(e):this.items[e]}hide(e){e.hidden=!0,this.last.set(1e9,0,0),this.written=-1}show(e){e.hidden=!1,this.last.set(1e9,0,0),this.written=-1}write(e,t){let n=this.extra.aLod;if(n&&n.setXYZW(e,this.near-this.fadeIn,this.near,this.far-this.fadeOut,this.far),eb.set(t.x,t.y,t.z),$y.setFromAxisAngle(ia.DEFAULT_UP,t.ry),(t.rx||t.rz)&&(nb.set(t.rx||0,t.ry,t.rz||0,`YXZ`),$y.setFromEuler(nb)),t.scale3?tb.set(t.scale3[0]*t.s,t.scale3[1]*t.s,t.scale3[2]*t.s):tb.set(t.s,t.s,t.s),t.hidden&&tb.set(0,0,0),Qy.compose(eb,$y,tb),this.mesh.setMatrixAt(e,Qy),t.color&&this.mesh.instanceColor&&this.mesh.instanceColor.setXYZ(e,t.color[0],t.color[1],t.color[2]),t.extra)for(let n in t.extra){let r=this.extra[n];if(!r)continue;let i=t.extra[n];r.itemSize===1?r.setX(e,i):r.array.set(i,e*r.itemSize)}}buildGrid(){let e=rb.get(this.items);if(e&&e.n===this.items.length&&!this.dirty){this.grid=e.g,this.gridN=e.n;return}let t=/* @__PURE__ */ new Map;for(let e=0;e<this.items.length;e++){let n=this.items.xAt?this.items.xAt(e):this.items[e].x,r=this.items.zAt?this.items.zAt(e):this.items[e].z,i=Math.floor(n/64)*100003+Math.floor(r/64),a=t.get(i);a||t.set(i,a=[]),a.push(e)}this.grid=t,this.gridN=this.items.length,this.dirty=!1,rb.set(this.items,{g:t,n:this.items.length})}due(e){return this.isStatic?this.written!==this.items.length||this.dirty:e.distanceToSquared(this.last)>=this.thresh()**2||this.viewDue()}viewDue(){let e=Ty.view;if(Ky||!e||!this.far||this.far<=this.shadowFar)return!1;let t=e.cos>-1;return t!==!!this.vOn||t&&e.x*this.vx+e.z*this.vz<.94}thresh(){return Math.max(6,Math.min(40,this.far*.02))}update(t,n=!1,r=this.thresh()){if(this.isStatic){if(this.written===this.items.length&&!n&&!this.dirty)return;let e=Math.min(this.max,this.items.length);for(let t=0;t<e;t++)this.write(t,this.itemAt(t));this.mesh.count=e,this.nShadow=this.shadowFar>=this.far?e:0,this.written=this.items.length,this.dirty=!1,this.mesh.visible=e>0,this.upload(e);return}if(!n&&t.distanceToSquared(this.last)<r*r&&!this.viewDue())return;this.last.copy(t);let i=Ty.view,a=!Ky&&!!i&&i.cos>-1&&this.far>this.shadowFar;this.vOn=a,a&&(this.vx=i.x,this.vz=i.z);let o=a?i.cos:-2,s=a?i.x:0,c=a?i.z:0,l=(this.shadowFar+r)**2;(!this.grid||this.dirty||this.gridN!==this.items.length)&&this.buildGrid();let u=Math.max(0,this.near-this.fadeIn-r),d=this.far+r,f=u*u,p=d*d,m=0,h=this.items,g=0,_=qy?null:[],v=Math.ceil(d/64),y=Math.floor(t.x/64),b=Math.floor(t.z/64);for(let e=y-v;e<=y+v;e++)for(let n=b-v;n<=b+v;n++){let r=this.grid.get(e*100003+n);if(r)for(let e of r){let n=h.xAt?h.xAt(e):h[e].x,r=h.zAt?h.zAt(e):h[e].z,i=n-t.x,a=r-t.z,u=i*i+a*a;u>=f&&u<p&&(u<l||i*s+a*c>=o*Math.sqrt(u))&&(_?_.push(e,u):g=Gy(g,e,u))}}let x=_||ib.subarray(0,g),S=(this.shadowFar+r)**2;if(x.length/2>this.max){let e=x.length>>1;ab.length<e&&(ab=new Uint32Array(Math.max(e,ab.length*2)));let t=qy?ab.subarray(0,e):Array(e);for(let n=0;n<e;n++)t[n]=n*2;t.sort((e,t)=>x[e+1]-x[t+1]);let n=0;for(let e=0;e<this.max;e++)x[t[e]+1]<S&&(n=e+1),this.write(m++,this.itemAt(x[t[e]]));this.nShadow=n}else if(e.sortF2B&&x.length/2<=e.sortMax){let t=x.length>>1,n=e._key&&e._key.length>=t?e._key:e._key=new Float64Array(Math.max(t,4096)),r=0;for(let e=0;e<t;e++){let t=x[2*e+1],i=t<S;i&&r++,n[e]=(Math.floor(t)*2+ +!i)*1048576+e}let i=n.subarray(0,t).sort();for(let e=0;e<t;e++)this.write(m++,this.itemAt(x[2*(i[e]%1048576)]));this.nShadow=r}else{for(let e=0;e<x.length;e+=2)x[e+1]<S&&this.write(m++,this.itemAt(x[e]));this.nShadow=m;for(let e=0;e<x.length;e+=2)x[e+1]>=S&&this.write(m++,this.itemAt(x[e]))}this.mesh.count=m,this.mesh.visible=m>0,this.upload(m)}upload(e){if(!e)return;let t=(t,n)=>{t.clearUpdateRanges(),t.addUpdateRange(0,e*n),t.needsUpdate=!0};t(this.mesh.instanceMatrix,16),this.mesh.instanceColor&&t(this.mesh.instanceColor,3);for(let e of Object.values(this.extra))t(e,e.itemSize)}}}));function cb(e,t,n,r,i,a,o,s,c,l=.65){let u=e.length/3,[d,f]=mb(s),p=new W().crossVectors(a,o).normalize();for(let[r,s]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let u=i.clone().addScaledVector(a,r).addScaledVector(o,s);e.push(u.x,u.y,u.z);let m=u.clone().sub(c).normalize().multiplyScalar(l).addScaledVector(p,(1-l)*Math.sign(p.dot(u.clone().sub(c))||1)).normalize();t.push(m.x,m.y,m.z),n.push(d+hb+(r+1)/2*(.5-2*hb),f+hb+(s+1)/2*(.5-2*hb))}r.push(u,u+1,u+2,u,u+2,u+3)}function lb(e,t,n,r){let i=new mo;return i.setAttribute(`position`,new q(e,3)),i.setAttribute(`normal`,new q(t,3)),i.setAttribute(`uv`,new q(n,2)),i.setIndex(r),i.computeBoundingSphere(),i}function ub(){let e=[],t=[],n=[],r=[],i=(e,t,n)=>new W(e,t,n),a=i(0,.15,0);for(let o=0;o<3;o++){let s=o/3*Math.PI+.3;cb(e,t,n,r,i(0,.42,0),i(Math.cos(s),0,Math.sin(s)),i(0,.62,0),0,a)}cb(e,t,n,r,i(0,.72,0),i(.95,.06,0),i(0,.08,.95),0,a,.8);for(let o=0;o<6;o++){let s=o/6*Math.PI*2+.5,c=Math.cos(s),l=Math.sin(s),u=i(c*.55,.38+o%2*.1,l*.55),d=i(c,.9,l).normalize(),f=i(-l,0,c),p=new W().crossVectors(d,f).normalize();cb(e,t,n,r,u,f.multiplyScalar(.5),p.multiplyScalar(-.5),0,a)}return lb(e,t,n,r)}function db(){let e=[],t=[],n=[],r=[],i=(e,t,n)=>new W(e,t,n);for(let a=0;a<4;a++){let o=a/4*Math.PI+.2,s=a%2?.08:-.08;cb(e,t,n,r,i(Math.sin(o)*s,.5,-Math.cos(o)*s),i(Math.cos(o)*.5,0,Math.sin(o)*.5),i(0,.5,0),1,i(0,-.2,0),.5)}return lb(e,t,n,r)}function fb(e){let t=new Ol({map:e,alphaTest:.5,side:2,roughness:.85,metalness:0});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
      attribute vec4 aPlant; varying vec3 vPTint; varying float vPY;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
      #ifdef USE_INSTANCING
        { float t = floor(aPlant.x + 0.5), d = floor(aPlant.x / 4.0 + 0.001); // aPlant.x = tile + 4 * geometry default tile
          t = t - d * 4.0;
          vec2 off = vec2(mod(t, 2.0), floor(t / 2.0)) * 0.5 - vec2(mod(d, 2.0), floor(d / 2.0)) * 0.5;
          vMapUv += off; }
      #endif
      vPTint = aPlant.yzw; vPY = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
      varying vec3 vPTint; varying float vPY;`).replace(`#include <map_fragment>`,`#include <map_fragment>
      diffuseColor.rgb *= vPTint * mix(0.55, 1.0, smoothstep(0.0, 0.6, vPY)); // tint + darker at the soil (self-shade)`)},t.customProgramCacheKey=()=>`roofplant-v1`,t}var pb,mb,hb,gb,_b,vb=t((()=>{zg(),sg(),qg(),ag(),sb(),pb={SHRUB:0,GRASS:1,FLOWER:2,BROAD:3},mb=e=>[e%2*.5,Math.floor(e/2)*.5],hb=.006,gb=class{constructor(){this.data=new og(Float64Array)}add(e,t,n,r,i,a,o,s,c,l,u){this.data.push(e,t,n,r,i,a,o,s,c,l,u)}get length(){return this.data.length/11}xAt(e){return this.data.a[e*11]}zAt(e){return this.data.a[e*11+2]}record(e){let t=this.data.a,n=e*11;return{x:t[n],y:t[n+1],z:t[n+2],ry:t[n+3],s:1,scale3:[t[n+4],t[n+5],t[n+6]],extra:{aPlant:[t[n+7],t[n+8],t[n+9],t[n+10]]}}}seal(){this.data.a=this.data.take()}},_b=class{constructor(){this.items=Ig().mobile?[new gb,new gb]:[[],[]]}add(e,t,n,r,i,a,o,s){let c=+(a===pb.GRASS),l=+!!c;if(this.items[c].record){let u=c?r*2:r;this.items[c].add(e,t,n,s,u,i,u,a+4*l,...o);return}this.items[c].push({x:e,y:t,z:n,ry:s,s:1,scale3:c?[r*2,i,r*2]:[r,i,r],extra:{aPlant:[a+4*l,...o]}})}get count(){return this.items[0].length+this.items[1].length}build(e){if(!this.count)return;for(let e of this.items)e.seal?.();let t=new fu().load(Kg(`/assets/city/tex/roofplants.webp`));t.colorSpace=wr,t.anisotropy=4;let n=fb(t);this.pools=[ub(),db()].map((t,r)=>{let i=new ob(t,n,{max:9e3,far:210,shadowFar:55,extra:{aPlant:4},name:`roofplants-`+(r?`grass`:`mound`)});return i.items=this.items[r],i.mesh.userData.maxCascade=0,i.mesh.userData.smallCasters=!0,e.add(i.mesh),i})}update(e){if(this.pools)for(let t of this.pools)t.due(e)&&t.update(e)}}})),yb=t((()=>{yy(),Bb()})),bb=t((()=>{yy(),Bb(),yb()})),xb=t((()=>{bb(),yy()})),Sb,Cb=t((()=>{xb(),globalThis.__jxDbg,Sb=2.9,Sb*Sb})),wb,Tb,Eb=t((()=>{zg(),yy(),xb(),Cb(),Ey(),Uy(),Ig().mobile,wb=[921103,1381655,1776671,1053720,14869215,14211284,13619146,15131610,11120049,10264483,12040635,9343638,7172212,5593180,4474699,1780298,2243171,3099770,5902870,7215642,9051935,11774351,10194805,2899246,4478527,7046816,4864556,3884112,8161935,2764083],Tb=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255].map(e=>e**2.2),Tb(16099584),Tb(10137164),[14079698,13618372,13224391,14276560].map(Tb),wb.map(Tb),[723724,921104,1184533,856084].map(Tb),[14474456,13816524,13157044,14868698,2772874,9051164,3951162,12104874].map(Tb)})),Db=t((()=>{hg(),xb(),Eb()})),Ob,kb=t((()=>{Db(),Ob=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255].map(e=>e**2.2),[921103,1381655,1776671,1053720,14869215,14211284,13619146,15131610,11120049,10264483,12040635,9343638,7172212,5593180,4474699,1780298,2243171,3099770,5902870,7215642,9051935,11774351,10194805,2899246,4478527,7046816,4864556,3884112,8161935,2764083].map(Ob),Ob(16099584),[14079698,13618372,13224391,14276560].map(Ob),[723724,921104,1184533,856084].map(Ob)})),Ab,jb,Mb=t((()=>{yy(),kb(),Ab={INSET:12.5,SH:1.2,LANE:3.5,MED:3},Ab.W=Ab.SH*2+Ab.LANE*6+Ab.MED,jb=Y.CURB_H,jb+(Mv?.015:0)}));function Nb(e,t=5){return new Promise((n,r)=>{let i=0,a=()=>{let o=new Image;o.crossOrigin=`anonymous`,o.onload=()=>n(o),o.onerror=()=>++i<t?setTimeout(a,250*2**i):r(/* @__PURE__ */ Error(`texture failed to load: `+e)),o.src=Kg(e)};a()})}var Pb=t((()=>{qg(),Kg(`/assets/city/tex/`)})),Fb,Ib=t((()=>{ag(),yy(),Jb(),jg(),bb(),Mb(),Bb(),Pb(),Y.CURB_H,Y.WATER_Y,Fb=e=>{let t=[];for(let n=0;n<6;n++){let r=new ll(1,e);r.index&&(r=r.toNonIndexed());let i=r.attributes.position,a=[],o=(e,t,r)=>.78+.36*pv(Math.round(e*100)+n*977,Math.round(t*100)*31+Math.round(r*100));for(let e=0;e<i.count;e+=3){let t=[];for(let n=0;n<3;n++){let r=i.getX(e+n),a=i.getY(e+n),s=i.getZ(e+n),c=o(r,a,s);t.push([r*c*1.1,a*c*.62,s*c*.9])}a.push(t)}t.push(a)}return t},Fb(1),Fb(0)})),Lb,Rb,zb,Bb=t((()=>{yy(),jg(),bb(),yb(),wy(),Ib(),Lb=[{name:`nj`,pts:[[-14e4,-14e4],[-1520,-14e4],[-1500,-12e3],[-1480,-5e3],[-1510,-3500],[-1610,-2e3],[-1690,-600],[-1735,600],[-1760,1600],[-1860,2400],[-1935,3e3],[-2010,3480],[-2130,4080],[-2230,4800],[-2330,5550],[-2480,6250],[-2700,6800],[-3300,6980],[-4300,6960],[-9600,6960],[-10400,12e3],[-13e3,17e3],[-14e4,6e4]]},{name:`east`,pts:[[-950,-14e4],[14e4,-14e4],[14e4,2e4],[4e4,14500],[21e3,13800],[12e3,12900],[6800,12600],[4200,11800],[3350,9e3],[2900,6200],[2150,4300],[1600,3500],[1330,2800],[1275,2150],[1265,1700],[1225,1150],[1160,600],[1135,0],[1125,-800],[1115,-1600],[1070,-2400],[920,-3e3],[560,-3480],[180,-3800],[-280,-3960],[-950,-4150],[-970,-12e3]]},{name:`si`,pts:[[-8800,7400],[-2600,7700],[800,7900],[2600,9100],[2300,10600],[600,12400],[-2400,14200],[-6200,15200],[-8800,14600]]},{name:`gov`,pts:[[380,3700],[760,3610],[980,3860],[880,4180],[520,4230],[340,3990]]},{name:`lib`,pts:[[-1560,3890],[-1500,3905],[-1470,3960],[-1490,4020],[-1560,4040],[-1615,4e3],[-1618,3935]]},{name:`roos`,pts:[[905,-1760],[935,-1700],[952,-1300],[950,-800],[930,-420],[905,-380],[880,-420],[866,-800],[862,-1300],[878,-1700]]}],Rb=[[-1880,-5200],[-1885,-3400],[-1905,-2300],[-1945,-1300],[-1985,-350],[-2030,450],[-2120,900],[-2330,1150]],zb=[];for(let e=0;e+1<Rb.length;e++){let[t,n]=Rb[e],[r,i]=Rb[e+1],a=Math.max(1,Math.round(Math.hypot(r-t,i-n)/80));for(let o=0;o<a;o++){let s=o/a,c=n+(i-n)*s,l=e===0&&o===0?0:30*Math.sin(c*.0093+.6)+17*Math.sin(c*.031+2.3)+9*Math.sin(c*.087+4.1);zb.push([t+(r-t)*s+l-20,c])}}zb.push(Rb[Rb.length-1]),zb.length,[...zb],Math.max(...zb.map(e=>e[0]));for(let e of Lb){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let[a,o]of e.pts)t=Math.min(t,a),r=Math.max(r,a),n=Math.min(n,o),i=Math.max(i,o);e.bb=[t,n,r,i]}})),Vb=t((()=>{yy(),jg(),hg(),Kb(),Y.CURB_H+.02,Y.CURB_H+.02})),Hb=t((()=>{ag(),yy(),new W,new W,new W,new W,new ci})),Ub,Wb,Gb,Kb=t((()=>{yy(),Vb(),sb(),Ey(),Hb(),Ub=(e,t=.15)=>{let n=e[0]*.2126+e[1]*.7152+e[2]*.0722;return e.map(e=>e+(n-e)*t)},[[[.3,.3,.08],[.17,.19,.05]],[[.2,.23,.07],[.12,.15,.05]],[[.5,.38,.08],[.32,.25,.06]],[[.52,.29,.06],[.34,.17,.04]],[[.4,.33,.08],[.23,.21,.06]],[[.26,.27,.08],[.15,.17,.05]],[[.36,.14,.04],[.24,.09,.03]]].map(e=>e.map(e=>Ub(e,.15).map(e=>e*1.2))),[[[.4,.13,.04],[.26,.08,.03]],[[.28,.06,.04],[.17,.04,.03]],[[.46,.34,.07],[.3,.22,.05]],[[.18,.21,.07],[.11,.14,.05]],[[.24,.25,.08],[.14,.16,.05]]].map(e=>e.map(e=>Ub(e,.15))),[[[.1,.13,.045],[.065,.085,.035],.19],[[.16,.19,.06],[.1,.13,.045],.2],[[.24,.26,.07],[.14,.17,.05],.17],[[.12,.15,.085],[.08,.1,.06],.11],[[.3,.28,.07],[.15,.17,.05],.14],[[.44,.33,.07],[.28,.22,.05],.09],[[.46,.22,.045],[.3,.13,.03],.06],[[.33,.1,.03],[.21,.07,.025],.04]].map(([e,t,n])=>[Ub(e,.1).map(e=>e*1.28),Ub(t,.1).map(e=>e*1.28),n]),[[[.075,.1,.06],[.04,.058,.04]],[[.09,.115,.07],[.05,.068,.045]],[[.065,.085,.07],[.035,.05,.042]]].map(e=>e.map(e=>e.map((e,t)=>e*2.05*[1.08,1.02,.9][t]))),[[[.44,.32,.075],[.26,.19,.05]],[[.43,.215,.055],[.26,.125,.04]],[[.4,.165,.07],[.25,.105,.05]]].map((e,t)=>(t?e.map(e=>Ub(e,.2).map((e,t)=>e*[1,1.06,1.1][t])):e).map(e=>Ub(e,.22).map(e=>e*.94))),Wb=Y.PARK,Gb=(e,t,n,r,i)=>({x:Wb.x0+e*(Wb.x1-Wb.x0),z:Wb.z1-t*(Wb.z1-Wb.z0),rx:n,rz:r,a:i}),Gb(.36,.12,100,58,.1),Gb(.52,.44,95,80,-.15),Gb(.6,.8,110,75,.2),Gb(.8,.1,45,32,.5),Gb(.16,.2,42,30,-.4),Gb(.84,.36,40,36,.3),Gb(.2,.47,38,50,.2),Gb(.25,.72,55,36,-.3),Gb(.82,.22,34,26,0),Gb(.3,.9,50,34,.1),Gb(.82,.68,40,50,-.2)})),qb,Jb=t((()=>{yy(),Bb(),Ib(),jg(),xy(),yb(),Kb(),Vb(),wy(),qb={ROAD:0,WALK:Y.CURB_H,GRASS:Y.CURB_H+.02,PATH:Y.CURB_H+.02,OUTER:-.05,FAR_SHORE:1.2,WATER:Y.WATER_Y}})),Yb=/* @__PURE__ */ n({CELL:()=>X,RB:()=>gx,buildRooftops:()=>ex});function Xb(e){return Nb(e)}function Zb(e,t,n){let r=e.width,i=Math.round(e.height/e.width),a=document.createElement(`canvas`);a.width=r,a.height=e.height;let o=a.getContext(`2d`,{willReadFrequently:!0});o.drawImage(e,0,0);let s=o.getImageData(0,0,r,e.height).data,c=new Uint8Array(r*r*4*i);for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=(e*r+(r-1-t))*r*4;c.set(s.subarray(n,n+r*4),(e*r*r+t*r)*4)}let l=new Di(c,r,r,i);return l.colorSpace=t?wr:``,l.wrapS=l.wrapT=Ht,l.generateMipmaps=!0,l.minFilter=$t,l.magFilter=Xt,l.anisotropy=n,l.needsUpdate=!0,l}function Qb(e,t,n){let r=new Ol({vertexColors:!0,roughness:.9,metalness:0}),i={tRoofC:{value:e},tRoofN:{value:t},tNoiseR:{value:n}};return r.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
      attribute vec4 aM; attribute vec4 aE; varying vec2 vRUv; flat varying vec4 vM; flat varying vec4 vE; varying vec3 vRWP; varying vec3 vRWN;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
      vRUv = uv; vM = aM; vE = aE; vRWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vRWN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
      uniform highp sampler2DArray tRoofC; uniform highp sampler2DArray tRoofN; uniform sampler2D tNoiseR;
      varying vec2 vRUv; flat varying vec4 vM; flat varying vec4 vE; varying vec3 vRWP; varying vec3 vRWN;
      float rR; float rM; vec3 rN;
      const float ROUGH[${ux.length}] = float[${ux.length}](${ux.map(e=>e.toFixed(2)).join(`, `)});
      const float PONDS[${dx.length}] = float[${dx.length}](${dx.map(e=>e.toFixed(1)).join(`, `)});
      const float SEAM[${fx.length}] = float[${fx.length}](${fx.map(e=>e.toFixed(1)).join(`, `)});
      const float TARP[${px.length}] = float[${px.length}](${px.map(e=>e.toFixed(1)).join(`, `)});
      float rHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace(`#include <color_fragment>`,`#include <color_fragment>
      {
        vec3 N = normalize(vRWN);
        rR = 0.85; rM = 0.0; rN = vec3(0.0, 0.0, 1.0);
        float cell = vM.x;
        vec2 tuv = vRUv * vM.y;
        vec3 nz = texture(tNoiseR, vRWP.xz / 70.0 + vRWP.y / 130.0).rgb;
        vec3 nz2 = texture(tNoiseR, vRWP.xz / 13.0 + 0.37).rgb;
        int ci = int(cell + 0.5);
        if (cell > -0.5) {
          vec3 tc = texture(tRoofC, vec3(tuv, cell)).rgb;
          diffuseColor.rgb *= tc;
          rR = ROUGH[ci];
          rN = texture(tRoofN, vec3(tuv, cell)).xyz * 2.0 - 1.0;
          rN.xy *= 0.8;
        }
        if (vM.w > 0.5) { // rooftop pool water: dark teal, glossy, gentle ripples
          float rip = texture(tNoiseR, vRWP.xz / 3.0).g;
          diffuseColor.rgb = vec3(0.09, 0.3, 0.34) * (0.85 + 0.3 * rip); rR = 0.08; // r4: lighter pool blue (ref 02 / 03) rN = normalize(vec3((rip - 0.5) * 0.15, 0.0, 1.0));
        }
        if (ci == ${X.EPDM}) diffuseColor.rgb *= 1.5; // r4: dusty, weathered rubber (pure black read as holes)
        // macro tone variation (kills repetition across a roof)
        diffuseColor.rgb *= (0.86 + 0.26 * nz.r) * (0.94 + 0.12 * nz2.g);
        if (vM.z > 0.0) { // roof skin
          // parapet grime: dark wet band at the base of the parapet, streaky, fading into the field
          float d = min(min(vRUv.x - vE.x, vE.z - vRUv.x), min(vRUv.y - vE.y, vE.w - vRUv.y));
          float ed = d + (nz2.b - 0.5) * 0.9;
          diffuseColor.rgb *= mix(0.4, 1.0, smoothstep(0.0, vM.z * 2.2, ed)); // r4: deeper soot band
          diffuseColor.rgb *= mix(vec3(0.93, 0.9, 0.84), vec3(1.0), smoothstep(0.0, vM.z * 4.0, ed)); // dust / rust-brown drift toward the walls
          // r6: per-roof dirt gradient (roofs drain / collect soot toward one side) + drain sumps: dark wet blotches
          {
            vec2 rsz = max(vE.zw - vE.xy, vec2(1.0)), rc = (vRUv - vE.xy) / rsz;
            float ang = rHash(floor(vE.xy * 0.37)) * 6.2832;
            float gdt = dot(rc - 0.5, vec2(cos(ang), sin(ang)));
            diffuseColor.rgb *= 1.0 - (0.08 + 0.12 * rHash(floor(vE.zw))) * smoothstep(-0.55, 0.55, gdt);
            vec2 dp = vE.xy + rsz * vec2(0.25 + 0.5 * rHash(floor(vE.xy) + 1.7), 0.25 + 0.5 * rHash(floor(vE.zw) + 2.9));
            float dd = length(vRUv - dp) + (nz2.r - 0.5) * 1.6;
            float sump = 1.0 - smoothstep(0.4, 2.6 + 1.5 * rHash(floor(vE.xy) + 4.1), dd);
            diffuseColor.rgb *= 1.0 - 0.3 * sump; rR = mix(rR, 0.35, sump * 0.6);
          }
          // r4: sheets / rolls: per-sheet tone + dark lap seams (antialiased), end laps every ~12 m
          if (ci >= 0 && ci < ${fx.length} && SEAM[ci] > 0.0) {
            float su = vRUv.x / SEAM[ci], sid = floor(su);
            diffuseColor.rgb *= 0.92 + 0.16 * rHash(vec2(sid, floor(vE.x * 0.7)));
            float fu = fract(su), fwu = max(fwidth(su), 1e-4);
            float seam = 1.0 - smoothstep(0.0, fwu * 1.2 + 0.02, min(fu, 1.0 - fu));
            float sv = (vRUv.y + rHash(vec2(sid, 3.7)) * 12.0) / 12.0, fv = fract(sv), fwv = max(fwidth(sv), 1e-4);
            seam = max(seam, 0.7 * (1.0 - smoothstep(0.0, fwv * 1.2 + 0.004, min(fv, 1.0 - fv))));
            diffuseColor.rgb *= 1.0 - 0.3 * seam * smoothstep(0.6, 0.15, fwu);
          }
          // r4: hot-mopped tar patches (dark, semi-glossy blotches with crisp edges)
          if (ci >= 0 && ci < ${px.length} && TARP[ci] > 0.5) {
            float tpn = texture(tNoiseR, vRWP.xz / 7.0 + vec2(0.23, 0.71)).r * 0.65 + texture(tNoiseR, vRWP.zx / 29.0 + 0.5).g * 0.35;
            float tp = smoothstep(0.64, 0.66, tpn);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.28 + vec3(0.012), tp * 0.85); rR = mix(rR, 0.5, tp);
          }
          // world-space stains at three scales (non-repeating) : soot / algae / dust drifts
          vec3 w1 = texture(tNoiseR, vRWP.xz / 41.0 + 0.13).rgb;
          vec3 w2 = texture(tNoiseR, vRWP.zx / 17.0 + 0.71).rgb;
          float stain = smoothstep(0.52, 0.8, w1.g * 0.55 + w2.r * 0.45);
          diffuseColor.rgb *= 1.0 - 0.26 * stain;
          diffuseColor.rgb *= mix(vec3(1.0), vec3(1.03, 1.0, 0.95), smoothstep(0.55, 0.85, w2.b)); // rust / tannin tinge (r4: weaker, read green on grey)
          // repair patches: rectangles on a per-roof grid (uv already carries a per-roof random offset)
          // r4: only on membranes / coatings (not ballast or pavers), rarer and bigger (the small ones read as camo squares)
          vec2 pg = vec2(6.0 + 3.0 * rHash(floor(vE.xy)), 4.5 + 3.0 * rHash(floor(vE.zw)));
          vec2 pc = floor(vRUv / pg), pf = fract(vRUv / pg);
          float ph = fract(sin(dot(pc, vec2(12.9898, 78.233)) + dot(floor(vE.xy), vec2(0.0137, 0.0291))) * 43758.5453);
          vec2 pa = vec2(0.05 + 0.3 * rHash(pc + 3.1), 0.05 + 0.3 * rHash(pc + 7.7)), pb = vec2(0.6 + 0.35 * rHash(pc + 1.3), 0.55 + 0.4 * rHash(pc + 5.9));
          if (ci >= 0 && ci < ${px.length} && TARP[ci] > 0.5 && ph < 0.07 && pf.x > pa.x && pf.y > pa.y && pf.x < pb.x && pf.y < pb.y) { diffuseColor.rgb *= 0.7 + ph * 5.0; rR = min(1.0, rR + 0.05); }
          // ponding on flat membranes: dark, glossy puddle stains with a dried rim
          if (ci >= 0 && ci < ${dx.length} && PONDS[ci] > 0.5) {
            float pw = texture(tNoiseR, vRWP.xz / 9.0 + vec2(0.61, 0.27)).b * 0.7 + w1.r * 0.3;
            float pond = smoothstep(0.66, 0.72, pw), rim = smoothstep(0.6, 0.66, pw) - pond;
            diffuseColor.rgb *= (1.0 - 0.32 * pond) * (1.0 + 0.1 * rim);
            rR = mix(rR, 0.18, pond); rN = normalize(mix(rN, vec3(0.0, 0.0, 1.0), pond));
          }
        } else { // clutter: grime + contact darkening near the base, rain streaks on the sides
          float hb = vRWP.y - vE.x;
          diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.0, 0.45, hb));
          if (abs(N.y) < 0.5) {
            diffuseColor.rgb *= 1.0 - 0.22 * smoothstep(0.55, 0.9, texture(tNoiseR, vec2((vRWP.x + vRWP.z) * 0.7, vRWP.y * 0.06)).g);
            // r8: rust runs + weathering on sheet-metal housings (critic: "boxes look like primitive cubes, add rust")
            if (ci == ${X.METAL} || ci == ${X.LOUVRE}) {
              float rn = texture(tNoiseR, vec2((vRWP.x - vRWP.z) * 1.7 + 0.13, vRWP.y * 0.09 + 0.41)).r * 0.7 + nz2.b * 0.3;
              diffuseColor.rgb *= mix(vec3(1.0), vec3(0.86, 0.7, 0.55), smoothstep(0.58, 0.82, rn) * 0.75);
            }
          } else if (vM.w < 0.5) { // tops: dusty, blotchy, a rust bloom here and there (sun-lit clean tops read as white dice)
            float tb = texture(tNoiseR, vRWP.xz / 2.3 + 0.57).g;
            diffuseColor.rgb *= (0.9 + 0.16 * tb) * mix(vec3(1.0), vec3(0.9, 0.8, 0.68), smoothstep(0.66, 0.86, nz2.r) * 0.6);
          }
          if (ci == ${X.SOLAR} || ci == ${X.GLASS}) rM = 0.2;
        }
        diffuseColor.rgb = mix(vec3(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722))), diffuseColor.rgb, 0.64); // muted (r3: 0.82 -> 0.64, critic: saturated colour cards)
      }`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = rR;`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = rM;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
      { vec3 Nw = normalize(vRWN); vec3 Tw, Bw;
        if (abs(Nw.y) > 0.5) { Tw = vec3(1.0, 0.0, 0.0); Bw = vec3(0.0, 0.0, -1.0); } else { Tw = normalize(cross(vec3(0.0, 1.0, 0.0), Nw)); Bw = vec3(0.0, 1.0, 0.0); }
        vec3 nw = normalize(Tw * rN.x + Bw * rN.y + Nw * rN.z);
        if (rN.z < 0.9999) normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz); }`)},r.customProgramCacheKey=()=>`city-rooftops-v8`,r}function $b(e){let t=new qo({color:16777215,blending:4,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1,side:2});return t.onBeforeCompile=t=>{t.uniforms.tNoiseS={value:e},t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aS; attribute vec4 aT; varying vec4 vS; varying vec4 vT; varying float vSD;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vS = aS; vT = aT; vSD = length((modelViewMatrix * vec4(transformed, 1.0)).xyz);`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D tNoiseS; varying vec4 vS; varying vec4 vT; varying float vSD;`).replace(`#include <color_fragment>`,`#include <color_fragment>
      {
        float u = vS.x, d = vS.y, H = vS.z, k = vS.w;
        float n1 = texture(tNoiseS, vec2(u / 11.0, 0.37)).r * 0.6 + texture(tNoiseS, vec2(u / 3.1, 0.71)).g * 0.4; // per-column run length
        float n2 = texture(tNoiseS, vec2(u / 0.9, d / 70.0 + 0.13)).b * 0.7 + texture(tNoiseS, vec2(u / 0.37, d / 30.0 + 0.61)).r * 0.3; // fine streak columns
        float len = H * (0.2 + 1.1 * smoothstep(0.3, 0.75, n1));
        float fall = 1.0 - smoothstep(0.0, len, d);
        float streak = smoothstep(0.44, 0.62, n2) * fall;
        float band = (1.0 - smoothstep(0.0, 0.3 + 0.6 * n1, d));                                                  // drip line under the cap
        float wash = (1.0 - smoothstep(0.0, H * 0.8, d));                                                          // general soiling under the cap
        float dark = k * clamp(streak * 0.75 + band * 0.5 + wash * 0.2, 0.0, 0.8) * smoothstep(820.0, 450.0, vSD)
          * mix(0.35, 1.0, smoothstep(45.0, 200.0, vSD)); // (park r10) near walls: soot was crushing shaded facades to black at swing range
        diffuseColor.rgb = vec3(1.0) - dark * vec3(0.8, 0.85, 0.93);                                               // brownish soot (multiplied)
        // r7: blank party walls (the big salmon brick slabs seen from above): per-wall hue, big weathering blotches,
        // patched / repointed brick rectangles and old tar roof-lines of demolished neighbours
        if (vT.w > 0.0) {
          float fd = smoothstep(900.0, 500.0, vSD);
          vec3 tint = mix(vec3(1.0), vT.rgb, fd);
          float b1 = texture(tNoiseS, vec2(u / 19.0 + 0.21, d / 23.0 + 0.47)).g, b2 = texture(tNoiseS, vec2(u / 6.0 + 0.6, d / 7.5 + 0.1)).r;
          float blot = smoothstep(0.45, 0.8, b1 * 0.7 + b2 * 0.3);
          vec2 pc = floor(vec2(u / 4.3, d / 3.1)), pf = fract(vec2(u / 4.3, d / 3.1));
          float ph = fract(sin(dot(pc, vec2(12.9898, 78.233)) + vT.w * 17.0) * 43758.5453);
          float patchv = (ph < 0.12 && pf.x > 0.1 && pf.y > 0.15 && pf.x < 0.9 && pf.y < 0.85) ? (0.8 + ph * 1.2) : 1.0;
          float gl = fract(sin(vT.w * 91.7) * 4375.5) * H * 0.7 + 2.0;
          float ghost = (1.0 - smoothstep(0.0, 0.25, abs(d - gl))) * step(0.5, fract(vT.w * 7.3));
          diffuseColor.rgb *= tint * (1.0 - vT.w * fd * (0.28 * blot + 0.3 * ghost)) * mix(1.0, patchv, fd);
        }
        // r8: canyon occlusion at the foot of street walls (vT.w < 0: quad from the ground up H metres): sky and bounce
        // light fall off toward the street, so the street gaps read as deep canyons from swinging altitude
        if (vT.w < 0.0) {
          float g = clamp(d / max(H, 1.0), 0.0, 1.0);
          float wn = texture(tNoiseS, vec2(u / 9.0 + 0.3, d / 5.0 + 0.8)).g;
          diffuseColor.rgb = vec3(1.0) - k * g * g * (0.85 + 0.3 * wn) * vec3(0.52, 0.54, 0.58) * smoothstep(1100.0, 500.0, vSD) * mix(0.45, 1.0, smoothstep(45.0, 200.0, vSD)); // (park r10) softer up close
        }
      }`)},t.customProgramCacheKey=()=>`city-roof-streaks-v3`,t}async function ex({scene:e,gen:t,facadeMat:n,T:r,renderer:i,extraRoofs:a=[]}){let o=Ig(),s=o.facadeNear??650,c=Math.min(o.textureAnisotropy??8,i?.capabilities?.getMaxAnisotropy?.()??4),[l,u]=await Promise.all([Xb(Kg(`/assets/city/tex/roof_col.png`)),Xb(Kg(`/assets/city/tex/roof_nrm.png`))]),d=Qb(Zb(l,!0,c),Zb(u,!1,c),r.noise),f=new qo({vertexColors:!0,blending:4,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}),p=$b(r.noise),m=t.solids,h=t.zips,g=new Sx(m),_=/* @__PURE__ */ new Map,v=(e,t)=>{let n=`${Math.floor(e/cx)},${Math.floor(t/cx)}`,r=_.get(n);if(!r){let i=(Math.floor(e/cx)+.5)*cx,a=(Math.floor(t/cx)+.5)*cx;r={rb:o.mobile?lv(gx,{methods:[`skin`,`box`,`obox`,`disc`,`cyl`,`lathe`],role:`roof`,cx:i,cz:a,range:s,returns:{skin:(...e)=>gx.prototype.skin.call({_v:()=>0,i:{push(){}}},...e)}}):new gx,ao:o.mobile?lv(_x,{methods:[`ring`,`band`],role:`roofAO`,cx:i,cz:a,range:320}):new _x,sk:o.mobile?lv(vx,{methods:[`wall`],role:`roofStreaks`,cx:i,cz:a,range:460}):new vx,key:n,cx:i,cz:a},_.set(n,r)}return r},y=new Cy(4242,{squash:.8}),b=new _b,x=[],S=fv(9133),C=[.085,.062,.045],w={[pb.SHRUB]:[.32,.6,.55,1.05],[pb.GRASS]:[.28,.45,.8,1.4],[pb.FLOWER]:[.28,.45,.45,.75],[pb.BROAD]:[.3,.5,.35,.65]},T=(e,t,n,r,i=1)=>{let a=w[r],o=.82+S()*.3;b.add(e,t,n,(a[0]+S()*(a[1]-a[0]))*i,(a[2]+S()*(a[3]-a[2]))*i,r,[o*(.95+S()*.1),o*(.95+S()*.1),o*(.9+S()*.1)],S()*Math.PI*2)},E=e=>{let t=S()*e.reduce((e,t)=>e+t,0);for(let n=0;n<e.length;n++)if(t-=e[n],t<=0)return n;return 0},D=(e,t,n,r,i,a,o=1.9,s=1)=>{let c=n-e,l=r-t,u=Math.max(1,Math.min(18,Math.round(c*l*o))),d=Math.max(1,Math.round(Math.sqrt(u*c/l))),f=Math.max(1,Math.ceil(u/d));for(let n=0;n<d;n++)for(let r=0;r<f;r++){let o=e+(n+.2+S()*.6)/d*c,u=t+(r+.2+S()*.6)/f*l;T(o,i-.04,u,E(a),s*Math.min(1,.55+.5*Math.min(c/d,l/f)))}},O={roofs:0,pent:0,mech:0,hvac:0,sky:0,chim:0,terr:0,pool:0,ct:0,wt:0,dish:0,ant:0,solar:0,garden:0,green:0,yard:0,clad:0,rail:0,arch:{}},k=/* @__PURE__ */ new Map,A=a.map(({rect:e,H:t})=>({hero:!0,H:t,A:{type:`postwar`,floorH:4},lot:{x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,cx:(e.x0+e.x1)/2,cz:(e.z0+e.z1)/2,sides:{}},masses:[{x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,y0:0,y1:t,parapet:0,p:{floorH:4,bayW:1.55,winW:.97,winH:.74,layer:Tg.CONCRETE,base:Tg.GRANITE,seed:42,margin:0,depth:.04,tint:[1,1,1],style:wg.BLANK}}]})),j=performance.now();for(let e of[...t.buildings,...A]){o.mobile&&performance.now()-j>5&&(await new Promise(e=>setTimeout(e,0)),j=performance.now());let n=e.A,r=e.masses;if(!r?.length)continue;e.roofKit=!0;let i=e.lot,a=fv(Math.floor(Math.abs(i.x0*73.1+i.z0*19.7+i.x1*3.3))+11),s=t.tile(i.cx,i.cz),c=v(i.cx,i.cz),l=c.rb,u=r.filter(e=>!e.crown),d=(u.length?u:r).reduce((e,t)=>t.y1>e.y1?t:e,(u.length?u:r)[0]),f=Ov(i.cx,i.cz),p=n.type,_=p===`apt`||p===`walkup`,y=e.H>85,b=sx(p,a,f,e.H),w=a()<.3?Ux:a()<.4?Wx:Gx,E=Q(w,a,.13).map((e,t,n)=>e*(t===0?n.k=.66+a()*.4:n.k)),A=a()*50,M=a()*50,ee=a()<.5,N=i.sides||{},te=N.px===`street`&&N.nx!==`street`?-1:N.nx===`street`&&N.px!==`street`?1:a()<.5?-1:1,ne=N.pz===`street`&&N.nz!==`street`?-1:N.nz===`street`&&N.pz!==`street`?1:a()<.5?-1:1,P=fv(Math.floor(Math.abs(i.x0*17.3+i.z0*41.9+i.z1*5.1))+977),re=(p===`glass`?.4:p===`walkup`||p===`loft`?1:p===`apt`?.9:.8)*(.6+P()*.5),F=fv(Math.floor(Math.abs(i.x0*29.3+i.z1*61.7+i.x1*7.9))+4049),ie=`svc`;if(!e.hero&&e.H>12&&e.H<=85&&p!==`glass`){let t=p===`postwar`||p===`deco`?[[`garden`,.13],[`pool`,.13],[`tank`,.1],[`tar`,.17],[`sign`,.05]]:[[`garden`,.17],[`pool`,.09],[`tank`,.22],[`tar`,.2],[`sign`,.07]],n=()=>{let e=F();for(let[n,r]of t){if(e<r)return n;e-=r}return`svc`},r=jv(i.cx,i.cz),a=r?`${r.x0.toFixed(0)},${r.z0.toFixed(0)}`:``;ie=n(),a&&k.get(a)===ie&&(ie=n()),a&&k.set(a,ie),ie===`sign`&&e.H>55&&(ie=`tar`)}O.arch[ie]=(O.arch[ie]??0)+1;let ae=e=>e===d&&ie!==`svc`;for(let o of r){if(o.crown){let e=o.p?.tint;if(e&&o.p.layer===Tg.CONCRETE&&e[1]>e[0]*1.25&&o.y1-o.y0<2.5){let e=.78+P()*.22,t=.012,n=Q(Z(5201750),P,.05).map(t=>t*e),i=Q(Z(7043440),P,.05).map(t=>t*e);if(l.box(o.x0-t,o.y0,o.z0-t,o.x1+t,o.y1+t,o.z1+t,X.METAL,n,i),o.y1>=Math.max(...r.map(e=>e.y1))-.01){let e=(o.x0+o.x1)/2,t=(o.z0+o.z1)/2,r=3+P()*5;l.box(e-.8,o.y1,t-.8,e+.8,o.y1+1.2,t+.8,X.METAL,n,i),l.cyl(e,t,.09,o.y1+1.2,o.y1+1.2+r,Z(5921884),6),m.box(e-.8,o.y1,t-.8,e+.8,o.y1+1.2,t+.8,`equipment`),m.cyl(e,t,o.y1+1.2,o.y1+1.2+r,.09,.09,`antenna`)}O.copper=(O.copper??0)+1}else if(o.y1-o.y0>2.5&&o.x1-o.x0>3&&o.z1-o.z0>3&&!o.round&&!o.pyr&&!r.some(e=>e!==o&&e.y0>=o.y1-.1&&e.x0<o.x1&&e.x1>o.x0&&e.z0<o.z1&&e.z1>o.z0)){let e=Q($(Rx,P),P,.06),t=.03;for(let[n,r,i,a]of[[o.x0-t,o.z0-t,o.x1+t,o.z0+.35],[o.x0-t,o.z1-.35,o.x1+t,o.z1+t],[o.x0-t,o.z0+.35,o.x0+.35,o.z1-.35],[o.x1-.35,o.z0+.35,o.x1+t,o.z1-.35]])l.box(n,o.y1-.45,r,i,o.y1+.35,a,X.METAL,e.map(e=>e*.8),e),m.box(n,o.y1-.45,r,i,o.y1+.35,a,`coping`);l.skin(o.x0+.35,o.z0+.35,o.x1-.35,o.z1-.35,o.y1+.006,P()<.5?X.TAR:X.GRAVEL,Q([.8,.8,.8],P,.08),0,0,!1,.4);let n=(o.x0+o.x1)/2,r=(o.z0+o.z1)/2,i=P();if(i<.45&&Math.min(o.x1-o.x0,o.z1-o.z0)>4)ix(l,m,h,n,o.y1,r,5+P()*8,P);else if(i<.8){let e=Math.min(3,(o.x1-o.x0)*.4),t=Math.min(3,(o.z1-o.z0)*.4),i=1.6+P()*1.2,a=$(Fx,P);l.box(n-e/2,o.y1,r-t/2,n+e/2,o.y1+i,r+t/2,X.LOUVRE,a,a.map(e=>e*.6),X.METAL),m.box(n-e/2,o.y1,r-t/2,n+e/2,o.y1+i,r+t/2,`equipment`),l.cyl(n+e/2+.5,r,.3,o.y1,o.y1+i+1.5,Z(6974572),8),m.cyl(n+e/2+.5,r,o.y1,o.y1+i+1.5,.3,.3,`equipment`)}O.crownDress=(O.crownDress??0)+1}continue}if(o.y0<.5&&o.y1>6&&i.sides){let e=Bx(o,i),t=qb.WALK,n=Math.min(o.y1-1,9+Math.min(12,o.y1*.12)),r=(e,r,i,a,o,s)=>c.sk.wall(e,r,i,a,o,s,t+n,n,.55,(e+r)*.37,[1,1,1],-1);e.nz!==`party`&&r(o.x0,o.z0,o.x1,o.z0,0,-1),e.pz!==`party`&&r(o.x1,o.z1,o.x0,o.z1,0,1),e.nx!==`party`&&r(o.x0,o.z1,o.x0,o.z0,-1,0),e.px!==`party`&&r(o.x1,o.z0,o.x1,o.z1,1,0),c.ao.ring(t,o.x0,o.z0,o.x1,o.z1,2.4,.62)}if(r.some(e=>e!==o&&e.x0<=o.x0+.2&&e.x1>=o.x1-.2&&e.z0<=o.z0+.2&&e.z1>=o.z1-.2&&e.y0<=o.y1+.1&&e.y1>o.y1+.1))continue;let u=o.x1-o.x0,v=o.z1-o.z0;if(u<3||v<3)continue;let w=o.parapet>0?.3:0,k={x0:o.x0+w,z0:o.z0+w,x1:o.x1-w,z1:o.z1-w},j=o.y1,I=o.y1+o.parapet,oe=o===d,se=p===`glass`||p===`postwar`&&e.H>70?g.on(o.x0,o.z0,o.x1,o.z1,o.y1).find(e=>e[6]===xx&&e[7]===0&&e[3]-e[0]>5&&e[5]-e[2]>5&&e[4]-e[1]>4):null,L=p===`glass`&&oe&&o.parapet===0||!!se,ce=!oe;O.roofs++,O.roofs%1e3==0&&new URLSearchParams(location.search).has(`memlog`)&&console.log(`[roof:progress]`,O.roofs,m.count,performance.memory?.usedJSHeapSize);let le=[],ue=null,R=null,de=ae(o)?ie:``,fe=de===`garden`||de===`pool`||!L&&(ce?a()<.6:p===`apt`&&a()<.45||(p===`walkup`||p===`loft`)&&a()<.22),pe=a(),me=y||(k.x1-k.x0)*(k.z1-k.z0)>380,he=pe<.42?X.DECK:pe<.84?X.PAVERS:me?pe<.92?X.PAVERS:X.DECK:pe<.94?X.GREEN:X.LAWN;de===`garden`&&(he=F()<.55?X.PAVERS:X.DECK),de===`pool`&&(he=F()<.7?X.DECK:X.PAVERS);let ge=b;if(ce){let e=a();ge=_||f.upper>.5||f.harlem>.5?e<.3?X.TAR:e<.5?X.BITUMEN:e<.68?X.GRAVEL:e<.8?X.EPDM:e<.9?X.PAVERS:X.SILVER:e<.32?X.GRAVEL:e<.52?X.PAVERS:e<.66?X.TAN:e<.8?X.BITUMEN:e<.9?X.EPDM:X.SILVER}L&&(ge=a()<.5?X.GRAVEL:a()<.6?X.PAVERS:X.BITUMEN),de===`tar`&&(ge=$([X.TAR,X.TAR,X.EPDM,X.BITUMEN],F));let _e=1;if(!L&&r.length>1&&o!==d){let e=fv(Math.floor(Math.abs(o.x0*13.7+o.z0*71.3+o.y1*3.1))+61);e()<.7&&(ge=$(Hx[ge]??[X.GRAVEL,X.BITUMEN,X.TAR],e)),_e=.74+e()*.34}let ve=!L&&!y&&!ce&&(p===`loft`||p===`apt`||p===`postwar`)&&a()<.06&&!1;ve&&(ge=X.GREEN,O.green++);let ye=E.map(e=>e*_e*(ce?.97:1)*(ge===X.MEMBRANE?.76:1)*(y?.86:1));if(fe&&!ve&&Math.min(k.x1-k.x0,k.z1-k.z0)>6){let e=k.x1-k.x0>=k.z1-k.z0,t=a(),n=de?.55+F()*.25:.3+t*.25,r=e?te<0:ne<0;if(e){let e=r?k.x1-(k.x1-k.x0)*n:k.x0+(k.x1-k.x0)*n;R=r?{x0:e,z0:k.z0,x1:k.x1,z1:k.z1}:{x0:k.x0,z0:k.z0,x1:e,z1:k.z1}}else{let e=r?k.z1-(k.z1-k.z0)*n:k.z0+(k.z1-k.z0)*n;R=r?{x0:k.x0,z0:e,x1:k.x1,z1:k.z1}:{x0:k.x0,z0:k.z0,x1:k.x1,z1:e}}let i=e?r?{...k,x1:R.x0}:{...k,x0:R.x1}:r?{...k,z1:R.z0}:{...k,z0:R.z1},o=Q(he===X.GREEN||he===X.LAWN?[.86,.86,.8]:he===X.PAVERS?[.84,.83,.81]:[1,1,1],a,.07);le.push(l.skin(R.x0,R.z0,R.x1,R.z1,j+.006,he,o,A,M,ee,.8)),le.push(l.skin(i.x0,i.z0,i.x1,i.z1,j+.006,ge,ye,A,M,ee)),R.cell=he,O.terr++}else if(!ce&&!L&&(k.x1-k.x0)*(k.z1-k.z0)>320&&Math.min(k.x1-k.x0,k.z1-k.z0)>12&&a()<.75){let e=k.x1-k.x0>=k.z1-k.z0,t=e?k.x0:k.z0,n=e?k.x1:k.z1,r=n-t>45&&a()<.5?3:2,i=[t];for(let e=1;e<r;e++)i.push(t+(n-t)*(e/r+(a()-.5)*.18));i.push(n);let o=Hx[ge]??[X.GRAVEL,X.BITUMEN];for(let t=0;t<r;t++){let n=t===0||a()<.3?ge:$(o,a),r=ye.map(e=>e*(.86+a()*.24)*(n===X.MEMBRANE?.86:1)),[s,c]=[i[t],i[t+1]];if(le.push(e?l.skin(s,k.z0,c,k.z1,j+.006,n,r,A,M,ee):l.skin(k.x0,s,k.x1,c,j+.006,n,r,A,M,ee)),t>0){let[t,n,r,i]=e?[s-.14,k.z0,s+.14,k.z1]:[k.x0,s-.14,k.x1,s+.14];g.hit(t,n,r,i,j,.4)||(l.box(t,j,n,r,j+.2,i,X.METAL,Q(Z(7237742),a,.08)),m.box(t,j,n,r,j+.2,i,`equipment`),g.add(t,j,n,r,j+.2,i))}}O.zoned=(O.zoned??0)+1}else le.push(l.skin(k.x0,k.z0,k.x1,k.z1,j+.006,ge,ye,A,M,ee));if(!L&&(de===`tar`||(ge===X.TAR||ge===X.BITUMEN||ge===X.EPDM||ge===X.MEMBRANE)&&F()<.3)){let e=(k.x1-k.x0)*(k.z1-k.z0),t=Math.min(de===`tar`?14:5,1+Math.floor(e/(de===`tar`?45:110)));for(let e=0;e<t;e++){let t=Math.min(k.x1-k.x0-.4,1.2+F()*5.5),n=Math.min(k.z1-k.z0-.4,.8+F()*4);if(t<.8||n<.6)break;let r=k.x0+.2+F()*(k.x1-k.x0-.4-t),i=k.z0+.2+F()*(k.z1-k.z0-.4-n);if(R&&r+t>R.x0&&r<R.x1&&i+n>R.z0&&i<R.z1)continue;let a=F(),o=a<.62?X.TAR:a<.85?X.EPDM:X.SILVER,s=o===X.SILVER?Q([.85,.85,.83],F,.06):Q([.5,.49,.47],F,.2);l.skin(r,i,r+t,i+n,j+.009+e*4e-4,o,s,F()*30,F()*30,F()<.5,.18)}O.patched=(O.patched??0)+1}if(o.parapet>0&&a()<.97){let e=n.cornice&&o.y0<.1?.1:.08,t=I+e+.015,r=w+.03+.018,s=Q($(Rx,a),a,.07),c={nx:Math.abs(o.x0-i.x0)<.1&&N.nx===`party`,px:Math.abs(o.x1-i.x1)<.1&&N.px===`party`,nz:Math.abs(o.z0-i.z0)<.1&&N.nz===`party`,pz:Math.abs(o.z1-i.z1)<.1&&N.pz===`party`},u=e=>c[e]?.018:.04+.018,d=o.x0-u(`nx`),f=o.x1+u(`px`),p=o.z0-u(`nz`),m=o.z1+u(`pz`);for(let[n,i,a,c]of[[d,p,f,o.z0+r],[d,o.z1-r,f,m],[d,o.z0+r,o.x0+r,o.z1-r],[o.x1-r,o.z0+r,f,o.z1-r]]){let r=a-n>=c-i,o=r?n:i,u=r?a:c;for(let d=o;d<u-.01;){let o=Math.min(u,d+1.2+P()*2.8),f=P();if(f>.06){let u=f<.16?Q(Z(3026219),P,.1):f<.22?Q(Z(6965814),P,.1):s.map(e=>e*(.84+P()*.3));P();let p=t-.015-e-.012;r?l.box(d,p,i,o,t,c,X.METAL,u.map(e=>e*.85),u):l.box(n,p,d,a,t,o,X.METAL,u.map(e=>e*.85),u)}d=o}}O.cope=(O.cope??0)+1}if(o.parapet>0&&i.sides){let e=Bx(o,i),t=(e,t,n,r)=>{let i=Q($(zx,P),P,.08),a;a=e===`nz`?[o.x0-r.nx,o.z0-t,o.x1+r.px,o.z0]:e===`pz`?[o.x0-r.nx,o.z1,o.x1+r.px,o.z1+t]:e===`nx`?[o.x0-t,o.z0,o.x0,o.z1]:[o.x1,o.z0,o.x1+t,o.z1];let s=.018,c=e===`nz`||e===`pz`,u=(c?a[0]:a[1])-s,d=(c?a[2]:a[3])+s;for(let t=u;t<d-.01;){let r=Math.min(d,t+2+P()*5),o=i.map(e=>e*(.82+P()*.3));c?l.box(t,n-.03,a[1]-(e===`nz`?s:0),r,n+s,a[3]+(e===`pz`?s:0),X.METAL,o.map(e=>e*.8),o):l.box(a[0]-(e===`nx`?s:0),n-.03,t,a[2]+(e===`px`?s:0),n+s,r,X.METAL,o.map(e=>e*.8),o),t=r}};if(n.cornice&&o.y0<.1){let n={};for(let t of[`nx`,`px`,`nz`,`pz`])n[t]=e[t]===`street`?.55:0;for(let r of[`nz`,`pz`,`nx`,`px`])e[r]===`street`&&t(r,.55,I+.1,n);O.ledge=(O.ledge??0)+1}else if(!o.crown&&I>28&&Vx[p]&&Math.min(o.x1-o.x0,o.z1-o.z0)>8){let n=.34*(I>110?1.45:I>60?1:.7),r={};for(let t of[`nx`,`px`,`nz`,`pz`])r[t]=e[t]===`party`?0:n;for(let i of[`nz`,`pz`,`nx`,`px`])e[i]!==`party`&&t(i,n,I-.12,r);O.ledge=(O.ledge??0)+1}}if(oe&&o.parapet>0&&(p===`walkup`||p===`loft`||p===`apt`)&&a()<.35){let e=[`nz`,`pz`,`nx`,`px`].filter(e=>N[e]===`street`&&Math.abs(e===`nx`?o.x0-i.x0:e===`px`?i.x1-o.x1:e===`nz`?o.z0-i.z0:i.z1-o.z1)<.1);if(e.length){let t=$(e,a),r=t===`nz`||t===`pz`,i=r?o.x1-o.x0:o.z1-o.z0,c=Math.min(i*.55,3.5+a()*6),u=.7+a()*.9,d=I+(n.cornice&&o.y0<.1?.1:.08),f=d+u,p=(r?o.x0+o.x1:o.z0+o.z1)/2+(a()<.3?(a()-.5)*(i-c)*.6:0),[h,_,v,y]=r?[p-c/2,t===`nz`?o.z0:o.z1-w,p+c/2,t===`nz`?o.z0+w:o.z1]:[t===`nx`?o.x0:o.x1-w,p-c/2,t===`nx`?o.x0+w:o.x1,p+c/2];if(c>2.5&&!g.hit(h,_,v,y,d-.04,u)){let e={...o.p,style:wg.BLANK,topY:f};s.fac.box(h,d,_,v,f,y,e,{},!1);let t=Q($(Rx,a),a,.06);l.box(h-.04,f,_-.04,v+.04,f+.08,y+.04,X.METAL,t.map(e=>e*.85),t),m.box(h,d,_,v,f,y,`parapet`),m.box(h-.04,f,_-.04,v+.04,f+.08,y+.04,`coping`),g.add(h,d,_,v,f+.08,y),O.ppanel=(O.ppanel??0)+1}}}if(o.y1-o.y0>3){let e=I+.1,t=Math.min(o.y1-o.y0,(ce?2.5:3.5)+P()*(y?30:10)),n=()=>re*(.7+P()*.5),r=()=>P()*200;if(c.sk.wall(o.x0,o.z0,o.x1,o.z0,0,-1,e,t*(.7+P()*.5),n(),r()),c.sk.wall(o.x1,o.z1,o.x0,o.z1,0,1,e,t*(.7+P()*.5),n(),r()),c.sk.wall(o.x0,o.z1,o.x0,o.z0,-1,0,e,t*(.7+P()*.5),n(),r()),c.sk.wall(o.x1,o.z0,o.x1,o.z1,1,0,e,t*(.7+P()*.5),n(),r()),i.sides){let t=Bx(o,i),a=e-o.y0,s=[[.8,.84,.9],[.86,.84,.82],[.74,.73,.72],[.9,.9,.92],[.82,.86,.86],[.7,.72,.76]],l=(t,i,o,l,u,d)=>c.sk.wall(t,i,o,l,u,d,e,a,n()*.8,r(),$(s,P),.55+P()*.45);t.nz===`party`&&l(o.x0,o.z0,o.x1,o.z0,0,-1),t.pz===`party`&&l(o.x1,o.z1,o.x0,o.z1,0,1),t.nx===`party`&&l(o.x0,o.z1,o.x0,o.z0,-1,0),t.px===`party`&&l(o.x1,o.z0,o.x1,o.z1,1,0)}}let be=mx[ge]??mx[X.TAR];s.lod.horiz(o.x0,o.z0,o.x1,o.z1,I+.01,{...o.p,style:wg.BLANK,layer:be[0],tint:be[1].map((e,t)=>e*ye[t]*.95),topY:I});let xe={...o.p,style:wg.BLANK,layer:Tg.METAL,tint:[2,2.05,2.1],topY:I+6},Se=(e,t,n,r,i,a=I)=>{i>a+.25&&s.lod.box(e,a,t,n,i,r,xe,{},!0,!1,{...xe,layer:Tg.ROOF,tint:[.62,.62,.6]})};if(o.y1<3)continue;let Ce=w+.7,z={x0:o.x0+Ce,z0:o.z0+Ce,x1:o.x1-Ce,z1:o.z1-Ce},we=(e,t,n,r)=>R&&n>R.x0-.4&&e<R.x1+.4&&r>R.z0-.4&&t<R.z1+.4,Te=(e,t,n,r,i,a=!1,o=j,s=z)=>{let c=e+n,l=t+r;return!(e<s.x0||t<s.z0||c>s.x1||l>s.z1||!a&&we(e,t,c,l)||g.hit(e-.35,t-.35,c+.35,l+.35,o,i))},Ee=(e,t,n,r=10,i=z,o=!1)=>{for(let s=0;s<r;s++){let r=i.x1-i.x0-e,s=i.z1-i.z0-t;if(r<0||s<0)return null;let c=i.x0+a()*r,l=i.z0+a()*s;if(Te(c,l,e,t,n,o,j,i))return[c,l]}return null},B=[te>0?z.x1-3:z.x0+3,ne>0?z.z1-3:z.z0+3],De=(e,t,n,r=5,i=12)=>{for(let o=0;o<i;o++){let i=(a()+a()+a()-1.5)*r*1.2,o=(a()+a()+a()-1.5)*r*1.2,s=Math.min(Math.max(B[0]+i-e/2,z.x0),z.x1-e),c=Math.min(Math.max(B[1]+o-t/2,z.z0),z.z1-t);if(Te(s,c,e,t,n))return[s,c]}return null},Oe=(e,t,n,r,i,a)=>{if(a<.25)return;let o=Math.abs(i-j)<.05?k:ue&&Math.abs(i-ue.y)<.05?ue:null;o&&c.ao.ring(i,e,t,n,r,Math.min(2.4,.35+a*.32),a>3?.42:a>1.2?.52:.62,o)},V=(e,t,n,r,i,a,o=`equipment`)=>{m.box(e,t,n,r,i,a,o),g.add(e,t,n,r,i,a),Oe(e,n,r,a,t,i-t)},ke=(e,t,n,r,i)=>{for(let[a,o,s,c]of[[e,t,-1,-1],[n,t,1,-1],[e,r,-1,1],[n,r,1,1]])h.add(a-s*.15,i,o-c*.15,s*Math.SQRT1_2,0,c*Math.SQRT1_2,`roofCorner`)},Ae=z.x1-z.x0,je=z.z1-z.z0,Me=Math.max(0,Ae*je);if(Ae<2||je<2)continue;let Ne=g.on(o.x0,o.z0,o.x1,o.z1,j),Pe=Ne.find(e=>e[6]===bx&&e[3]-e[0]>1.8&&e[5]-e[2]>1.8);Pe&&(B=[(Pe[0]+Pe[3])/2,(Pe[2]+Pe[5])/2]);let Fe=Ne.some(e=>e[6]===yx);o.parapet>.3&&c.ao.band(j,k.x0,k.z0,k.x1,k.z1,Math.min(1.4,.5+o.parapet),.62);for(let e of Ne)e[4]-e[1]>.3&&e[3]-e[0]<Ae+1&&e[5]-e[2]<je+1&&Oe(e[0],e[2],e[3],e[5],j,e[4]-e[1]);for(let e of Ne){if(e[6]!==bx||e[3]-e[0]<1.8||e[5]-e[2]<1.8||e[4]-e[1]<2)continue;let t=.012,n=e[4],r=Q($(Rx,P),P,.06);l.skin(e[0],e[2],e[3],e[5],n+.006,$([X.TAR,X.BITUMEN,X.EPDM,X.SILVER],P),Q([.78,.78,.78],P,.08),A,M,ee,.4);for(let[i,a,o,s]of[[e[0]-t,e[2]-t,e[3]+t,e[2]+.2],[e[0]-t,e[5]-.2,e[3]+t,e[5]+t],[e[0]-t,e[2]+.2,e[0]+.2,e[5]-.2],[e[3]-.2,e[2]+.2,e[3]+t,e[5]-.2]])l.box(i,n-.2,a,o,n+.012,s,X.METAL,r.map(e=>e*.8),r);let i=e[4]-e[1];c.sk.wall(e[0],e[2],e[3],e[2],0,-1,n,i,.9,P()*99),c.sk.wall(e[3],e[5],e[0],e[5],0,1,n,i,.9,P()*99),c.sk.wall(e[0],e[5],e[0],e[2],-1,0,n,i,.9,P()*99),c.sk.wall(e[3],e[2],e[3],e[5],1,0,n,i,.9,P()*99),O.bhDress=(O.bhDress??0)+1}if(L){let e=se;if(O.scrMiss=(O.scrMiss??0)+ +!e,e){let t=.015,n=$(Fx,a);l.box(e[0]-t,e[1],e[2]-t,e[3]+t,e[4]-.05,e[5]+t,X.LOUVRE,n,!1),l.box(e[0]-t-.04,e[4]-.35,e[2]-t-.04,e[3]+t+.04,e[4]+.012,e[5]+t+.04,X.METAL,Z(7106416),!1),l.skin(e[0],e[2],e[3],e[5],e[4]+.021,a()<.5?X.GRAVEL:X.EPDM,Q([.85,.85,.85],a,.06),A,M,ee,.6),Se(e[0],e[2],e[3],e[5],e[4],j),O.clad++;for(let n of g.on(e[0],e[2],e[3],e[5],e[4]))if(!(n[6]!==xx||n[7]!==0||n[4]-n[1]<2.3||n[3]-n[0]<3.5||n[5]-n[2]<2.8)){{let e=Q($(Fx,a),a,.06);l.box(n[0]-t,n[1],n[2]-t,n[3]+t,n[4]+.012,n[5]+t,X.LOUVRE,e,e.map(e=>e*.62),X.METAL)}Se(n[0],n[2],n[3],n[5],n[4],n[1])}let r=e[4]+.012,i={x0:e[0]+.7,z0:e[2]+.7,x1:e[3]-.7,z1:e[5]-.7},o=(i.x1-i.x0)*(i.z1-i.z0);for(let e=0,t=Math.min(22,Math.floor(o/28));e<t;e++){let e=a(),t=a()<.5;if(e>.82){let e=5+a()*4,n=2.1+a()*.4,o=1.9+a()*.4,s=t?e:n,u=t?n:e,d=null;for(let e=0;e<8&&!d;e++){let e=i.x0+a()*Math.max(0,i.x1-i.x0-s),t=i.z0+a()*Math.max(0,i.z1-i.z0-u);Te(e,t,s,u,o+.6,!0,r,i)&&(d=[e,t])}if(!d)continue;let f=Q($(Cx,a),a,.06);nx(l,m,d[0],d[1],d[0]+s,d[1]+u,r,o,t,f,f.map(e=>e*.72)),m.box(d[0],r,d[1],d[0]+s,r+o,d[1]+u,`equipment`),g.add(d[0],r,d[1],d[0]+s,r+o+.3,d[1]+u),c.ao.ring(r,d[0],d[1],d[0]+s,d[1]+u,Math.min(2,.35+o*.32),.5,i);continue}let n=e<.5?1.8+a()*2:e<.75?1.2+a()*.8:1.2+a()*1.2,o=e<.5?1.1+a()*.6:e<.75?1.2+a()*.8:.5,s=t?n:o,u=t?o:n,d=e<.5?.9+a()*.6:e<.75?1.4+a()*1.2:1.6,f=null;for(let e=0;e<8&&!f;e++){let e=i.x0+a()*Math.max(0,i.x1-i.x0-s),t=i.z0+a()*Math.max(0,i.z1-i.z0-u);Te(e,t,s,u,d+.4,!0,r,i)&&(f=[e,t])}if(!f)continue;let[p,h]=f,_=p+s,v=h+u,y=Q($(Cx,a),a,.06),b=y.map(e=>e*.72);if(e<.5){l.box(p,r,h,_,r+d,v,X.METAL,y,b);let e=Math.max(1,Math.floor(n/1.6));for(let i=0;i<e;i++){let a=(i+.5)/e,c=t?p+s*a:(p+_)/2,f=t?(h+v)/2:h+u*a;l.cyl(c,f,Math.min(o*.34,n/e*.36),r+d,r+d+.1,b,10,X.METAL,wx)}m.box(p,r,h,_,r+d,v,`equipment`)}else if(e<.75){let e=Math.min(s,u)/2*.9,t=(p+_)/2,n=(h+v)/2,i=Q($(Mx,a),a,.05).map(e=>e*.75);l.lathe([t,r,n],[0,1,0],[[e,0],[e,d],[e*.3,d+e*.3]],12,i,X.METAL,{cap:i}),m.cyl(t,n,r,r+d,e,e,`equipment`),m.cyl(t,n,r+d,r+d+e*.3,e,e*.3,`equipment`)}else l.box(p,r,h,_,r+d,v,X.METAL,Q(Z(9080456),a,.05),Q(Z(6974824),a,.05)),m.box(p,r,h,_,r+d,v,`equipment`);g.add(p,r,h,_,r+d+.3,v),c.ao.ring(r,p,h,_,v,Math.min(2,.35+d*.32),.5,i)}}if(o.parapet===0&&Math.min(u,v)>8){let e=fv(Math.floor(Math.abs(o.x0*11.3+o.z0*23.9+o.y1))+313),t=.9+e()*.5,n=.35,r=.08,i=Q($([Z(6120036),Z(7237746),Z(5001555),Z(8026740)],e),e,.05),a=i.map(e=>e*1.35);for(let[e,s,c,u]of[[o.x0,o.z0,o.x1,o.z0+n],[o.x0,o.z1-n,o.x1,o.z1],[o.x0,o.z0+n,o.x0+n,o.z1-n],[o.x1-n,o.z0+n,o.x1,o.z1-n]])g.hit(e+.05,s+.05,c-.05,u-.05,j+.02,t)||(l.box(e,j,s,c,j+t-.12,u,X.METAL,i,!1),l.box(e-(e===o.x0?r:0),j+t-.12,s-(s===o.z0?r:0),c+(c===o.x1?r:0),j+t,u+(u===o.z1?r:0),X.METAL,i.map(e=>e*.8),a),m.box(e,j,s,c,j+t,u,`parapet`),g.add(e,j,s,c,j+t,u));c.ao.band(j,o.x0+n,o.z0+n,o.x1-n,o.z1-n,1.1,.6),c.sk.wall(o.x0,o.z0,o.x1,o.z0,0,-1,j+t,3+e()*6,.5,e()*99),c.sk.wall(o.x1,o.z1,o.x0,o.z1,0,1,j+t,3+e()*6,.5,e()*99),c.sk.wall(o.x0,o.z1,o.x0,o.z0,-1,0,j+t,3+e()*6,.5,e()*99),c.sk.wall(o.x1,o.z0,o.x1,o.z1,1,0,j+t,3+e()*6,.5,e()*99),O.gpar=(O.gpar??0)+1}tx(l,m,g,Te,a,z,j,2+Math.floor(a()*3),O);continue}if(oe&&y&&Me>650&&(e.hero||a()<.13)){let e=Math.min(15,Math.min(Ae,je)*.55),t=1.4,n=Ee(e+2*t,e+2*t,3,12),r=n&&[n[0]+t,n[1]+t];if(r){let[n,i]=r,a=n+e,o=i+e,s=(n+a)/2,c=(i+o)/2,u=j+.6,d=Z(3093042),f=u-.18;for(let[e,r,s,c]of[[n-t,i-t,a+t,i],[n-t,o,a+t,o+t],[n-t,i,n,o],[a,i,a+t,o]])l.box(e,f-.03,r,s,f,c,X.LOUVRE,d,d.map(e=>e*1.3)),m.box(e,f-.03,r,s,f,c,`awning`,1);for(let[e,r]of[[n-t,i-t],[a+t-.08,i-t],[n-t,o+t-.08],[a+t-.08,o+t-.08]])l.box(e,j,r,e+.08,f-.03,r+.08,X.METAL,Ex,!1),m.box(e,j,r,e+.08,f-.03,r+.08,`pole`);for(let t=1.5;t<e-1;t+=3)for(let[e,r]of[[n+t,i+.25],[n+t,o-.25],[n+.25,i+t],[a-.25,i+t]])l.cyl(e,r,.07,u,u+.1,Z(9083504),6),m.cyl(e,r,u,u+.1,.07,.07,`equipment`);l.box(n,j,i,a,u,o,X.METAL,Z(5922143),Z(6974571),X.EPDM);let p=Z(11051136),h=e*.42;l.lathe([s,u+.006,c],[0,1,0],[[h,0],[h-.45,0]],28,p,X.METAL,{back:!0,base:j});let g=Z(12894386),_=e*.22,v=e*.13;l.box(s-v-.25,u,c-_,s-v+.25,u+.008,c+_,X.METAL,g,null,null),l.box(s+v-.25,u,c-_,s+v+.25,u+.008,c+_,X.METAL,g,null,null),l.box(s-v+.25,u,c-.25,s+v-.25,u+.008,c+.25,X.METAL,g,null,null);for(let[e,t]of[[n+.3,i+.3],[a-.3,i+.3],[n+.3,o-.3],[a-.3,o-.3]])l.cyl(e,t,.1,u,u+.18,Z(10130528),6),m.cyl(e,t,u,u+.18,.1,.1,`equipment`);V(n,j,i,a,u,o,`roof`),ke(n,i,a,o,u),O.heli=(O.heli??0)+1}}if(oe&&e.H>40&&Math.max(Ae,je)>24&&Math.max(Ae,je)/Math.min(Ae,je)>3&&Math.min(Ae,je)<16){let e=Ae>=je,t=e?z.x0:z.z0,n=e?z.x1:z.z1,r=e?z.z0:z.x0,i=e?z.z1:z.x1,a=Math.min(.6,(i-r)*.08),c=t+1+P()*4,u=0;for(;c<n-5;){let t=Math.min(n-c,7+P()*14),d=P(),f=d<.35?5+P()*4:d<.8?3.2+P()*2.5:2.4+P()*1.2,p=r+a+(P()<.3?(i-r)*.2:0),h=i-a-(P()<.3?(i-r)*.2:0),[_,v,y,b]=e?[c,p,c+t,h]:[p,c,h,c+t];if(t>3.5&&h-p>2.5&&!g.hit(_-.3,v-.3,y+.3,b+.3,j,f+1)){let n=j+f;if(d<.35){let r={...o.p,style:wg.BLANK,tint:(o.p.tint??[1,1,1]).map(e=>e*(.82+P()*.14)),topY:n};s.fac.box(_,j,v,y,n,b,r,{},!0,!1,{...r,layer:Tg.ROOF,tint:[.62,.62,.6]}),s.lod.box(_,I,v,y,n,b,r,{},!0,!1,{...r,layer:Tg.ROOF,tint:[.62,.62,.6]}),l.skin(_,v,y,b,n+.006,P()<.5?X.BITUMEN:X.GRAVEL,Q([.85,.85,.85],P,.06),A,M,ee,.5),l.box(_-.04,n-.25,v-.04,y+.04,n+.05,b+.04,X.METAL,Q($(Rx,P),P,.06),!1);let i=$(Fx,P);e?l.box(_+1,j+1,v-.03,Math.min(y-1,_+1+t*.5),j+f*.6,v,X.LOUVRE,i,!1):l.box(_-.03,j+1,v+1,_,j+f*.6,Math.min(b-1,v+1+t*.5),X.LOUVRE,i,!1)}else if(d<.8){let e=.9+P()*.8,t=$(Fx,P),r=Q(Z(9341570),P,.06);l.box(_,j,v,y,j+e,b,X.PAVERS,r,!1),l.box(_,j+e,v,y,n,b,X.LOUVRE,t,!1),l.box(_-.05,n-.3,v-.05,y+.05,n+.012,b+.05,X.METAL,Z(6645864),!1),l.skin(_-.05,v-.05,y+.05,b+.05,n+.021,P()<.5?X.EPDM:X.GRAVEL,Q([.9,.9,.9],P,.06),A,M,ee,.5),Se(_,v,y,b,n)}else{let r=Q($(Cx,P),P,.06);l.box(_,j,v,y,n,b,X.LOUVRE,r,r.map(e=>e*.7),X.METAL);let i=Math.max(1,Math.floor(t/3.2)),a=Math.min(1.3,(h-p)*.36,t/i*.4);for(let o=0;o<i;o++){let s=c+t*(o+.5)/i,u=(p+h)/2;l.cyl(e?s:u,e?u:s,a,n,n+.5,r.map(e=>e*.8),12,X.METAL,wx),m.cyl(e?s:u,e?u:s,n,n+.5,a,a,`equipment`)}Se(_,v,y,b,n)}V(_,j,v,y,n,b,`bulkhead`),ke(_,v,y,b,n),u++}c+=t+2.5+P()*6}if(u&&P()<.6){let t=e?n-2:(r+i)/2,a=e?(r+i)/2:n-2;g.hit(t-.8,a-.8,t+.8,a+.8,j,4)||(ix(l,m,h,t,j,a,8+P()*10,P),g.add(t-.8,j,a-.8,t+.8,j+10,a+.8))}O.spine=(O.spine??0)+u}let H=null;if(oe&&Me>110&&e.H>22){let t=(p===`apt`||p===`loft`||p===`walkup`)&&e.H<95&&a()<.3,r=!t&&(y||(p===`postwar`||p===`loft`||p===`deco`||p===`apt`)&&a()<(p===`postwar`?.85:.6));if(t||r){let e=t?.45+a()*.3:y?.3+a()*.16:.28+a()*.22,i=t?.45+a()*.3:y?.3+a()*.16:.28+a()*.22,c=Math.max(4,Ae*e),u=Math.max(4,je*i),d=t?1+ +(a()<.45):1,f=n.floorH??3.4,p=t?d*f:y?5.5+a()*3.5:4+a()*2.6,m=null,h=c,g=u;for(let e=0;e<5&&!m;e++)m=t?Ee(h,g,p+1,12):De(h,g,p+1,3,8)??Ee(h,g,p+1,10),m||(h=Math.max(3.5,h*.8),g=Math.max(3.5,g*.8));if(m){let[e,i]=m,c=e+h,u=i+g,d=j+p;if(t){let t=a()<.4,r=t?{...o.p,style:wg.CURTAIN,layer:Tg.METAL,bayW:1.6,winW:.95,winH:.8,floorH:f,margin:0,depth:.04,tint:[1,1,1],topY:d}:{...o.p,topY:d},p={all:{style:t?wg.CURTAIN:o.p.style??n.style??wg.PUNCHED,gH:-(n.gH??4)}};s.fac.box(e,j,i,c,d,u,r,p,!1),s.lod.box(e,I,i,c,d,u,r,p,!0,!1,{...r,style:wg.BLANK,layer:Tg.ROOF,tint:[.85,.85,.85]}),s.fac.horiz(e,i,c,u,d,{...r,style:wg.BLANK,layer:Tg.ROOF,tint:[.8,.8,.8]}),l.skin(e,i,c,u,d+.006,a()<.5?X.BITUMEN:X.SILVER,Q([1,1,1],a,.06),A,M,ee,.6),O.pent++}else{let t=Math.min(1.2+a()*1.4,p*.4),n=$(Fx,a),r=a()<.5?Q(Z(10130827),a,.06):Q(Nx,a,.1);l.box(e,j,i,c,j+t,u,X.PAVERS,r,!1),l.box(e,j+t,i,c,d,u,X.LOUVRE,n,!1),l.box(e-.05,d-.3,i-.05,c+.05,d+.012,u+.05,X.METAL,Z(7369586),!1),l.skin(e-.05,i-.05,c+.05,u+.05,d+.021,a()<.5?X.EPDM:X.GRAVEL,Q([.9,.9,.9],a,.06),A,M,ee,.5),Se(e,i,c,u,d),O.mech++}if(V(e,j,i,c,d,u,`bulkhead`),ke(e,i,c,u,d),Pe||(B=[(e+c)/2,(i+u)/2]),Math.min(h,g)>3&&(H={x0:e+.5,z0:i+.5,x1:c-.5,z1:u-.5,y:d}),ue={x0:e,z0:i,x1:c,z1:u,y:d},t&&!R&&(R={x0:k.x0,z0:k.z0,x1:k.x1,z1:k.z1,cell:X.DECK}),r&&a()<.65){let e=2.6+a()*1.4,t=2.6+a()*1.4,n=p+1.6+a()*1.8,r=De(e,t,n+1,4,10);if(r){let[i,c]=r,l=j+n,u={...o.p,style:wg.BLANK,layer:a()<.5?o.p.layer??Tg.CONCRETE:Tg.CONCRETE,tint:(o.p.tint??[1,1,1]).map(e=>e*.9),topY:l};s.fac.box(i,j,c,i+e,l,c+t,u,{},!0,!1,{...u,layer:Tg.ROOF,tint:[.7,.7,.7]}),s.lod.box(i,I,c,i+e,l,c+t,u,{},!0,!1,{...u,layer:Tg.ROOF,tint:[.7,.7,.7]}),V(i,j,c,i+e,l,c+t,`bulkhead`),ke(i,c,i+e,c+t,l)}}}}}if(oe&&!ve&&de!==`garden`&&de!==`pool`&&Me>380&&(y||e.hero||(p===`postwar`||p===`deco`||p===`loft`)&&Me>700)){let e=fv(Math.floor(Math.abs(o.x0*31.7+o.z1*13.1+o.y1*7.3))+9091),t=(t,n,r)=>{for(let i=0;i<14;i++){let i=z.x1-z.x0-t,a=z.z1-z.z0-n;if(i<0||a<0)return null;let o=z.x0+e()*i,s=z.z0+e()*a;if(Te(o,s,t,n,r))return[o,s]}return null},n=Math.min(3,+!!y+(Me>900?2:1));for(let r=0;r<n;r++)if(r===0?!(e()<.65):!(e()<.5)){let n=Math.min(Ae*.5,7+e()*9),r=Math.min(je*.5,5+e()*7),i=4.5+e()*4,a=t(n,r,i+1);if(!a)continue;let[u,d]=a,f=u+n,p=d+r,h=j+i,_={...o.p,style:wg.BLANK,tint:(o.p.tint??[1,1,1]).map(t=>t*(.78+e()*.16)),topY:h};s.fac.box(u,j,d,f,h,p,_,{},!0,!1,{..._,layer:Tg.ROOF,tint:[.6,.6,.58]}),s.lod.box(u,I,d,f,h,p,_,{},!0,!1,{..._,layer:Tg.ROOF,tint:[.6,.6,.58]}),l.skin(u,d,f,p,h+.006,e()<.5?X.GRAVEL:X.BITUMEN,Q([.82,.82,.82],e,.06),A,M,ee,.5);let v=Q($(Rx,e),e,.06);l.box(u-.05,h-.3,d-.05,f+.05,h+.05,p+.05,X.METAL,v.map(e=>e*.85),v);let y=$(Fx,e),b=1+e()*1.5;l.box(u+.8,j+b,d-.03,f-.8,j+b+(i-b)*.55,d,X.LOUVRE,y,!1),l.box(f,j+b,d+.8,f+.03,j+b+(i-b)*.55,p-.8,X.LOUVRE,y,!1),c.sk.wall(u,d,f,d,0,-1,h,i,.9,e()*99),c.sk.wall(f,p,u,p,0,1,h,i,.9,e()*99),c.sk.wall(u,p,u,d,-1,0,h,i,.9,e()*99),c.sk.wall(f,d,f,p,1,0,h,i,.9,e()*99),V(u,j,d,f,h,p,`bulkhead`),ke(u,d,f,p,h);for(let t=0,i=1+Math.floor(e()*3);t<i;t++){let t=1.6+e()*1.6,i=1.1+e()*.9,a=.9+e()*.8,o=u+.5+e()*Math.max(0,n-t-1),s=d+.5+e()*Math.max(0,r-i-1);if(o+t>f-.4||s+i>p-.4||g.hit(o,s,o+t,s+i,h,a))continue;let c=$(Cx,e);l.box(o,h,s,o+t,h+a,s+i,X.METAL,c),l.cyl(o+t/2,s+i/2,Math.min(t,i)*.33,h+a,h+a+.1,c.map(e=>e*.8),10,X.METAL,wx),m.box(o,h,s,o+t,h+a,s+i,`equipment`),g.add(o,h,s,o+t,h+a,s+i)}if(e()<.6){let t=u+.8,n=p-.8,r=2+e()*3;l.cyl(t,n,.35,h,h+r,Z(6185056),8,X.METAL,wx),m.cyl(t,n,h,h+r,.35,.35,`equipment`)}O.pent9=(O.pent9??0)+1}else{let n=3.4+e()*1.2,r=1+Math.floor(e()*(Me>900?4:3)),i=e()<.45?2:1,a=e()<.5,o=(a?r:i)*n,s=(a?i:r)*n,c=.8+e()*.5,u=3.6+e()*2.4,d=1+e()*.9,f=t(o+1.2,s+1.2,c+u+d+.5);if(!f)continue;let p=f[0]+.6,h=f[1]+.6,_=p+o,v=h+s,y=j+c,b=y+u,x=Q($(Ax,e),e,.06);for(let e=0;e<=(a?r:i);e++){let t=(a?p:h)+e*n-(e?.15:0);a?l.box(t,y-.35,h-.3,t+.15,y,v+.3,X.METAL,x):l.box(p-.3,y-.35,t,_+.3,y,t+.15,X.METAL,x);for(let e of[0,1]){let n=a?t:e?_+.1:p-.3,r=a?e?v+.1:h-.3:t;l.box(n,j,r,n+.2,y-.35,r+.2,X.METAL,x.map(e=>e*.85),!1),m.box(n,j,r,n+.2,y-.35,r+.2,`pole`)}a?m.box(t,y-.35,h-.3,t+.15,y,v+.3,`equipment`):m.box(p-.3,y-.35,t,_+.3,y,t+.15,`equipment`)}let S=Q($([Z(9278096),Z(8357764),Z(10131084),Z(7305077)],e),e,.06);l.box(p,y,h,_,y+u*.5,v,X.LOUVRE,S.map(e=>e*.92),!1),l.box(p,y+u*.5,h,_,b,v,X.METAL,S,S.map(e=>e*.7));for(let e=1;e<r;e++){let t=(a?p:h)+e*n;a?l.box(t-.06,y,h-.05,t+.06,b+.05,v+.05,X.METAL,S.map(e=>e*.75),!1):l.box(p-.05,y,t-.06,_+.05,b+.05,t+.06,X.METAL,S.map(e=>e*.75),!1)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let r=a?p+(e+.5)*n:p+(t+.5)*n,i=a?h+(t+.5)*n:h+(e+.5)*n,o=n*.4;l.lathe([r,b,i],[0,1,0],[[o,0],[o*1.02,d*.6],[o*1.1,d]],12,S.map(e=>e*.86),X.METAL,{back:!0}),l.disc(r,b+d*.45,i,o*1.01,wx,12),m.cyl(r,i,b,b+d,o,o*1.1,`equipment`)}let C=Z(11052122).map(e=>e*.8);l.box(p,b+1,h,_,b+1.06,h+.05,X.METAL,C,!1),l.box(p,b+1,v-.05,_,b+1.06,v,X.METAL,C,!1);for(let e=p;e<=_+.01;e+=Math.max(1.5,o/Math.ceil(o/2)))for(let t of[h,v-.05])l.box(Math.min(e,_-.05),b,t,Math.min(e,_-.05)+.05,b+1,t+.05,X.METAL,C,!1);l.box(_,j,h+.4,_+.12,b+1,h+1,X.METAL,C,!1);let w=4+e()*10,T=Q($(Ix,e),e,.06),E=a?ne>0?-1:1:te>0?-1:1;for(let e of[.5,1.3]){let[t,n,r,i]=a?[p+e,E>0?v+.3:h-.3-w,p+e+.4,E>0?v+.3+w:h-.3]:[E>0?_+.3:p-.3-w,h+e,E>0?_+.3+w:p-.3,h+e+.4];t<z.x0||n<z.z0||r>z.x1||i>z.z1||g.hit(t,n,r,i,j,1.2)||(l.box(t,j+.55,n,r,j+.95,i,X.METAL,T,T.map(e=>e*1.08)),m.box(t,j+.55,n,r,j+.95,i,`equipment`),g.add(t,j,n,r,j+.95,i))}m.box(p,y,h,_,b,v,`equipment`),m.box(_,j,h+.4,_+.12,b+1,h+1,`pole`),g.add(p-.3,j,h-.3,_+.3,b+d,v+.3),Oe(p-.3,h-.3,_+.3,v+.3,j,b-j),Se(p,h,_,v,b+d*.6),ke(p,h,_,v,b),O.ct9=(O.ct9??0)+1}for(let t=0,n=3+Math.floor(e()*6);t<n;t++){let n=Math.min(k.x1-k.x0-.4,2+e()*9),r=Math.min(k.z1-k.z0-.4,1.5+e()*7);if(n<1||r<1)break;let i=k.x0+.2+e()*(k.x1-k.x0-.4-n),a=k.z0+.2+e()*(k.z1-k.z0-.4-r);if(we(i,a,i+n,a+r))continue;let o=e(),s=o<.5?X.TAR:o<.8?X.EPDM:X.BITUMEN;l.skin(i,a,i+n,a+r,j+.0105+t*4e-4,s,Q([.46,.45,.43],e,.25),e()*30,e()*30,e()<.5,.18)}}if(oe&&(y||Me>500&&(p===`postwar`||p===`loft`))&&a()<(y?.75:.35)){let e=6+a()*7,t=5+a()*5,n=2.4+a()*1,r=.15,i=Ee(e,t,n+.5,12);if(i){let[o,s]=i,u=o+e,d=s+t,f=Q($(Fx,a),a,.05),p=[[o,s,u,s+r],[o,d-r,u,d],[o,s+r,o+r,d-r],[u-r,s+r,u,d-r]];for(let[e,t,r,i]of p){l.box(e,j+.1,t,r,j+n,i,X.LOUVRE,f,f.map(e=>e*.7),X.METAL);for(let a=(r-e>i-t?e:t)+.05;a<(r-e>i-t?r:i);a+=2.4)r-e>i-t?l.box(a,j,t-.03,a+.1,j+n,i+.03,X.METAL,Ex,null):l.box(e-.03,j,a,r+.03,j+n,a+.1,X.METAL,Ex,null);m.box(e-.03,j,t-.03,r+.03,j+n,i+.03,`equipment`),Oe(e,t,r,i,j,n*.6)}g.add(o,j,s,u,j+n,d);let h=[];for(let i=0,f=Math.floor(e*t/14);i<f;i++){let i=1.4+a()*1.6,f=1.1+a()*.9,p=Math.min(n-.4,1.1+a()*.8),g=o+.5+a()*Math.max(0,e-1-i),_=s+.5+a()*Math.max(0,t-1-f);if(h.some(e=>g<e[2]+.4&&g+i>e[0]-.4&&_<e[3]+.4&&_+f>e[1]-.4))continue;h.push([g,_,g+i,_+f]);let v=Q($(Cx,a),a,.06),y=v.map(e=>e*.72);l.box(g,j,_,g+i,j+p,_+f,X.METAL,v,y),l.cyl(g+i/2,_+f/2,Math.min(i,f)*.34,j+p,j+p+.1,y,10,X.METAL,wx),m.box(g,j,_,g+i,j+p,_+f,`equipment`),c.ao.ring(j,g,_,g+i,_+f,.6,.55,{x0:o+r,z0:s+r,x1:u-r,z1:d-r})}Se(o,s,u,d,j+n),ke(o,s,u,d,j+n),O.screen=(O.screen??0)+1}}if(!Pe&&!H&&oe&&Me>40&&e.H>12&&a()<.75){let e=2.4+a()*1.4,t=3.2+a()*1.4,n=2.8+a()*.6,r=a()<.5,i=De(r?t:e,r?e:t,n+.5,2,10);if(i){let[c,u]=i,d=c+(r?t:e),f=u+(r?e:t),p=j+n,m={...o.p,style:wg.BLANK,layer:a()<.6?o.p.layer??Tg.RED:Tg.RED,tint:(o.p.tint??[1,1,1]).map(e=>e*.88),topY:p};s.fac.box(c,j,u,d,p,f,m,{},!0,!1,{...m,layer:Tg.ROOF,tint:[.7,.7,.7]}),s.lod.box(c,I,u,d,p,f,m,{},!0,!1,{...m,layer:Tg.ROOF,tint:[.7,.7,.7]}),l.skin(c,u,d,f,p+.006,a()<.5?X.TAR:X.SILVER,Q([1,1,1],a,.06),A,M,ee,.4),(z.x0+z.x1)/2,(u+f)/2<(z.z0+z.z1)/2?l.box((c+d)/2-.45,j,f,(c+d)/2+.45,j+2.05,f+.03,X.METAL,Z(4014662)):l.box((c+d)/2-.45,j,u-.03,(c+d)/2+.45,j+2.05,u,X.METAL,Z(4014662)),V(c,j,u,d,p,f,`bulkhead`),ke(c,u,d,f,p),B=[(c+d)/2,(u+f)/2]}}if(!ve&&!y&&Me>380&&(ce||p===`loft`||p===`postwar`||p===`apt`)&&a()<.14){let e=11+a()*6,t=7+a()*3,n=Ae>je,r=n?e:t,i=n?t:e,o=Ee(r,i,3.4,10,z,!0);if(o){let[e,t]=o,s=e+r,c=t+i,u=j+.012,d=$([Z(5073500),Z(5925498),Z(9067080),Z(5599326)],a),f=Z(14210764);l.skin(e,t,s,c,u,X.EPDM,d.map(e=>e*1.1),0,0,!1,.25);let p=(e,t,n,r)=>l.skin(e,t,n,r,u+.003,X.METAL,f,0,0,!1,.01),h=.6,_=.07;p(e+h,t+h,s-h,t+h+_),p(e+h,c-h-_,s-h,c-h),p(e+h,t+h,e+h+_,c-h),p(s-h-_,t+h,s-h,c-h),n?p((e+s)/2-_/2,t+h,(e+s)/2+_/2,c-h):p(e+h,(t+c)/2-_/2,s-h,(t+c)/2+_/2);let v=Z(5922142);for(let[n,r,i,a]of[[e,t,s,t+.05],[e,c-.05,s,c],[e,t,e+.05,c],[s-.05,t,s,c]]){l.box(n,j+3-.06,r,i,j+3,a,X.METAL,v),m.box(n,j+3-.06,r,i,j+3,a,`pole`),l.box(n,j,r,i,j+.25,a,X.METAL,v.map(e=>e*.8)),m.box(n,j,r,i,j+.25,a,`wall`);let e=Math.max(i-n,a-r),t=i-n>a-r;for(let o=0;o<=e;o+=2.5){let e=t?Math.min(n+o,i-.05):n,s=t?r:Math.min(r+o,a-.05);l.box(e,j,s,e+.05,j+3,s+.05,X.METAL,v,!1),m.box(e,j,s,e+.05,j+3,s+.05,`pole`)}}g.add(e,j,t,s,j+3,c),O.court2=(O.court2??0)+1}}let Ie=oe&&!L&&!y&&Me>150&&Ae>9&&je>9&&(_||p===`loft`||p===`postwar`||p===`deco`)&&a()<(_||p===`loft`?.72:.45)?Me>520&&a()<.5?2:1:0;for(let e=0;e<Ie;e++){let e=a()<.7,t=e?3.2+a()*3:2.8+a()*2.4,n=e?4+a()*5.5:3.5+a()*4.5,r=a()<.5,i=r?n:t,u=r?t:n,d=null;if(a()<.5&&(d=Ee(i,u,1.6,8,ne>0?{x0:z.x0,z0:z.z1-u,x1:z.x1,z1:z.z1}:{x0:z.x0,z0:z.z0,x1:z.x1,z1:z.z0+u})),d??=Ee(i,u,1.6,10),!d)continue;let[f,p]=d,h=f+i,_=p+u;if(e){let e=.3,t=1+a()*.5,n={...o.p,style:wg.BLANK,layer:o.p.layer===Tg.RED||o.p.layer===Tg.BROWN?o.p.layer:a()<.6?Tg.RED:Tg.BROWN,tint:(o.p.tint??[1,1,1]).map(e=>e*.8),topY:j+t,baseY:j};s.fac.box(f,j,p,h,j+t,_,n,{},!1),s.fac.innerRing(f+e,p+e,h-e,_-e,j,j+t,{...n,tint:n.tint.map(e=>e*.55)});let r=Q($(Rx,a),a,.06);for(let[n,i,a,o]of[[f,p,h,p+e],[f,_-e,h,_],[f,p+e,f+e,_-e],[h-e,p+e,h,_-e]])l.box(n-.03,j+t,i-.03,a+.03,j+t+.07,o+.03,X.METAL,r.map(e=>e*.85),r),m.box(n,j,i,a,j+t,o,`parapet`),m.box(n-.03,j+t,i-.03,a+.03,j+t+.07,o+.03,`coping`);l.skin(f+e,p+e,h-e,_-e,j+.01,X.TAR,[.07,.068,.065],0,0,!1,1.5),c.ao.band(j+.01,f+e,p+e,h-e,_-e,Math.min(1.6,(Math.min(i,u)-2*e)*.45),.25),c.ao.ring(j,f,p,h,_,.9,.5,k),Se(f,p,h,_,j+t),g.add(f,j,p,h,j+t+.1,_),O.shaft=(O.shaft??0)+1}else{let e=.55+a()*.3;l.box(f,j,p,h,j+e,_,X.PAVERS,Q(Nx,a,.08),!1),l.box(f-.04,j+e,p-.04,h+.04,j+e+.06,_+.04,X.METAL,Z(6974570),!1),l.box(f+.06,j+e-.1,p+.06,h-.06,j+e+.02,_-.06,X.GLASS,[.4,.43,.45]);for(let t=f+1.1;t<h-.5;t+=1.1)l.box(t-.03,j+e+.02,p+.06,t+.03,j+e+.05,_-.06,X.METAL,Ex,!1);V(f-.04,j,p-.04,h+.04,j+e+.06,_+.04,`skylight`),O.court=(O.court??0)+1}}for(let t=0,n=de===`tank`?Fe?+(Me>250):Me>220&&F()<.55?2:1:!Fe&&oe&&!ve&&e.H>16&&e.H<130&&(_||p===`loft`||p===`postwar`||p===`deco`)&&a()<(_||p===`loft`?e.H<60?.64:.46:.3)?Me>450&&a()<.35?2:1:0;t<n;t++){let e=1.5+a()*1.3,t=De(e*2+.6,e*2+.6,9,5,12)??Ee(e*2+.6,e*2+.6,9,8);if(t){let n=t[0]+e+.3,r=t[1]+e+.3;ax(l,m,h,g,n,j,r,e,a);let i={...o.p,style:wg.BLANK,layer:Tg.BROWN,tint:[.85,.72,.6],baseY:j};s.lod.box(n-e*.7,I,r-e*.7,n+e*.7,j+e*1.3,r+e*.7,{...xe,topY:j+e*1.3},{},!1),s.lod.cyl(n,r,e,j+e*1.3,j+e*3.2,8,{...i,topY:j+e*3.2},wg.BLANK,!1),s.lod.cyl(n,r,e*1.04,j+e*3.2,j+e*3.8,8,{...i,layer:Tg.ROOF,tint:[.55,.52,.5],topY:j+e*3.8},wg.BLANK,!1,.05),O.wt++}}if(de===`sign`){let e=[`nz`,`pz`,`nx`,`px`].filter(e=>N[e]===`street`&&Math.abs(e===`nx`?o.x0-i.x0:e===`px`?i.x1-o.x1:e===`nz`?o.z0-i.z0:i.z1-o.z1)<.1);if(e.length){let n=$(e,F),r=n===`nz`||n===`pz`,i=n===`nz`||n===`nx`?-1:1,a=r?z.x0:z.z0,o=r?z.x1:z.z1,s=o-a,c=Math.min(s-1,8+F()*7),u=3.2+F()*2.6,d=2+F()*2,f=2.4,p=(a+o)/2+(F()-.5)*Math.max(0,s-c)*.7,h=p-c/2,_=p+c/2,v=n===`nz`?z.z0:n===`pz`?z.z1:n===`nx`?z.x0:z.x1,y=e=>v-i*e,b=(e,t,n,i,a,o,s,c,u=null,d=`equipment`)=>{let f=y(n),p=y(i),[h,g,_,v]=r?[e,t,Math.min(f,p),Math.max(f,p)]:[Math.min(f,p),Math.max(f,p),e,t];return l.box(h,a,_,g,o,v,s,c,u),d&&m.box(h,a,_,g,o,v,d),[h,_,g,v]},x=r?[h,Math.min(y(0),y(f)),_,Math.max(y(0),y(f))]:[Math.min(y(0),y(f)),h,Math.max(y(0),y(f)),_];if(c>5&&!g.hit(x[0],x[1],x[2],x[3],j,d+u+.3)){let e=Q($(Ax,F),F,.06),i=j+d,a=i+u;b(h,_,.02,.4,i,a,X.METAL,e,e.map(e=>e*.8));let o=[9058864,3099242,12625e3,3824192,13946044,2763308,10115626,5913178].map(Z),s=2+Math.floor(F()*2),l=[i+.15];for(let e=1;e<s;e++)l.push(i+.15+(u-.3)*(e/s+(F()-.5)*.2));l.push(a-.15);let p=typeof location<`u`&&!location.search.includes(`nosignage`);p&&(t.roofSignPanels??=[]).push({k:n,alx:r,a0:h+.12,a1:_-.12,y0:i+.12,y1:a-.12,plane:y(-.004)});for(let e=0;e<s;e++){let t=Q($(o,F),F,.08).map(e=>e*.8);p||b(h+.15,_-.15,.008,.03,l[e],l[e+1],X.MEMBRANE,t,null,null)}b(h-.08,_+.08,-.03,.43,a,a+.12,X.METAL,e.map(e=>e*.7),null,`coping`);let m=Math.max(2,Math.ceil(c/3.2)+1);for(let t=0;t<m;t++){let n=h+.2+(c-.4-.22)*(t/(m-1));b(n,n+.22,.4,.62,j,a,X.METAL,e,null,`pole`),b(n+.03,n+.19,2.2199999999999998,f,j,i+u*.55,X.METAL,e,null,`pole`),b(n+.05,n+.17,.62,2.2199999999999998,i+u*.55-.16,i+u*.55,X.METAL,e,null,`pole`)}b(h,_,.62,1.5,i-.08,i,X.LOUVRE,Z(4869196),Z(5921884),`awning`);for(let e=h+.6;e<_-.3;e+=2.4)b(e,e+.12,.5,.62,a+.12,a+.5,X.METAL,Z(3816508),null,`equipment`);g.add(x[0],j,x[1],x[2],a+.5,x[3]),Oe(x[0],x[1],x[2],x[3],j,1.2),Se(...r?[h,Math.min(y(0),y(.4)),_,Math.max(y(0),y(.4))]:[Math.min(y(0),y(.4)),h,Math.max(y(0),y(.4)),_],a,i),O.sign=(O.sign??0)+1}}}if(!L&&!ve&&Me>320&&(y||e.hero||p===`postwar`||p===`deco`||p===`loft`||ce&&Me>500)){let e=Math.min(4,1+Math.floor(Me/520+a()*1.5));for(let t=0;t<e;t++){let e=3.5+a()*4,n=3+a()*3,r=2.2+a()*1.5,i=a()<.5,o=i?e:n,s=i?n:e,c=(t===0?De(o,s,r+.8,7,10):null)??Ee(o,s,r+.8,10);if(!c)continue;let[u,d]=c,f=u+o,p=d+s,h=Q($(Fx,a),a,.06);if(a()<.55){l.box(u,j,d,f,j+.3,p,X.PAVERS,Q(Z(9209725),a,.06),!1),l.box(u,j+.3,d,f,j+r,p,X.LOUVRE,h,!1),l.box(u-.04,j+r-.25,d-.04,f+.04,j+r+.012,p+.04,X.METAL,h.map(e=>e*.8),!1),l.skin(u-.04,d-.04,f+.04,p+.04,j+r+.021,a()<.5?X.EPDM:X.BITUMEN,Q([.8,.8,.8],a,.08),A,M,ee,.4);for(let e=0,t=1+Math.floor(a()*2);e<t;e++){let e=u+o*(.3+.4*a()),t=d+s*(.3+.4*a()),n=.35+a()*.3;l.lathe([e,j+r,t],[0,1,0],[[n*.6,0],[n*.6,.3],[n,.4],[n*.9,.55],[n*.2,.7]],10,h.map(e=>e*.75),X.METAL),m.cyl(e,t,j+r,j+r+.7,n*.6,n*.2,`equipment`)}}else{let e=Math.max(1,Math.round((i?o:s)/3)),t=(i?o:s)/e,n=Q(Z(9278096),a,.06);l.box(u,j,d,f,j+.5,p,X.METAL,Ex,!1),l.box(u,j+.5,d,f,j+.5+(r-.5)*.55,p,X.LOUVRE,n,!1),l.box(u,j+.5+(r-.5)*.55,d,f,j+r,p,X.METAL,n,n.map(e=>e*.78));for(let a=0;a<e;a++){let e=i?u+(a+.5)*t:(u+f)/2,c=i?(d+p)/2:d+(a+.5)*t,h=Math.min(t,i?s:o)*.38;l.lathe([e,j+r,c],[0,1,0],[[h,0],[h*1.06,.45],[h*1.1,.7]],10,n.map(e=>e*.9),X.METAL,{back:!0}),l.disc(e,j+r+.28,c,h*1.02,wx,12),m.cyl(e,c,j+r,j+r+.7,h*.985,h*1.09,`equipment`)}O.ct++}V(u,j,d,f,j+r,p),Se(u,d,f,p,j+r),ke(u,d,f,p,j+r),O.encl=(O.encl??0)+1}for(let e=0,t=1+Math.floor(a()*Math.min(3,Me/400));e<t;e++){let e=7+a()*Math.min(16,Math.max(Ae,je)*.5),t=.8+a()*.5,n=.7+a()*.4,r=a()<.5,i=j+.35+a()*.3,o=r?e:t,s=r?t:e,c=Ee(o,s,n+1,8);if(!c)continue;let[u,d]=c,f=u+o,p=d+s,h=Q(a()<.6?Tx:Z(9079942),a,.05);l.box(u,i,d,f,i+n,p,X.METAL,h,h.map(e=>e*.9));for(let t=.4;t<e-.2;t+=2.2){let[e,n]=r?[u+t,(d+p)/2]:[(u+f)/2,d+t];l.box(e-.05,j,n-.05,e+.05,i,n+.05,X.METAL,Ex,!1),m.box(e-.05,j,n-.05,e+.05,i,n+.05,`pole`)}for(let t=1.5;t<e-.3;t+=1.5)r?l.box(u+t-.03,i-.02,d-.02,u+t+.03,i+n+.02,p+.02,X.METAL,h.map(e=>e*.8),!1):l.box(u-.02,i-.02,d+t-.03,f+.02,i+n+.02,d+t+.03,X.METAL,h.map(e=>e*.8),!1);let[_,v,y,b]=r?[f-t,d,f,p]:[u,p-t,f,p];l.box(_,j,v,y,i,b,X.METAL,h.map(e=>e*.9),!1),m.box(u,i,d,f,i+n,p,`equipment`),m.box(_,j,v,y,i,b,`equipment`),g.add(u,j,d,f,i+n,p),Oe(u,d,f,p,j,.8),O.duct=(O.duct??0)+1}}if(Me>200&&(p===`postwar`||p===`loft`||p===`deco`||ce||y)&&a()<.75)for(let e=0,t=1+Math.floor(a()*Math.min(3,Me/300));e<t;e++){let e=4+a()*5,t=1.8+a()*.9,n=1.6+a()*.9,r=a()<.5,i=De(r?e:t,r?t:e,n+.4,6);if(!i)continue;let[o,s]=i,c=o+(r?e:t),u=s+(r?t:e),d=Q($(Cx,a),a,.05);l.box(o,j,s,c,j+n,u,X.METAL,d),r?l.box(o-.02,j+.2,s+.1,o,j+n-.2,u-.1,X.LOUVRE,d.map(e=>e*.9),!1):l.box(o+.1,j+.2,s-.02,c-.1,j+n-.2,s,X.LOUVRE,d.map(e=>e*.9),!1);for(let i=0,a=Math.max(1,Math.floor(e/2.4));i<a;i++){let e=(i+.5)/a,f=r?o+(c-o)*e:(o+c)/2,p=r?(s+u)/2:s+(u-s)*e;l.cyl(f,p,t*.32,j+n,j+n+.25,d.map(e=>e*.85),10,X.METAL,wx)}if(V(o,j,s,c,j+n,u),Se(o,s,c,u,j+n),a()<.8){let e=.7+a()*.4,t=3+a()*8,n=j+.5,[i,d,f,p]=r?te>0?[c,(s+u)/2-e/2,c+t,(s+u)/2+e/2]:[o-t,(s+u)/2-e/2,o,(s+u)/2+e/2]:ne>0?[(o+c)/2-e/2,u,(o+c)/2+e/2,u+t]:[(o+c)/2-e/2,s-t,(o+c)/2+e/2,s];if(Te(i-0,d,f-i,p-d,e+.8)){l.box(i,n,d,f,n+e,p,X.METAL,Tx);for(let e=.5;e<t;e+=2.5){let[t,a]=r?[i+e,(d+p)/2]:[(i+f)/2,d+e];l.box(t-.05,j,a-.05,t+.05,n,a+.05,X.METAL,Ex,!1)}V(i,n,d,f,n+e,p)}}O.ahu=(O.ahu??0)+1}let Le=[],Re=ve?0:(de===`garden`||de===`pool`?.5:1)*Math.min(y?22:Me>600?12:6,Math.floor(Me/(ce?y?110:_?130:200:_?150:85)+a()*1.6));for(let e=0;e<Re;e++){let t=a(),n=t<.12?0:t<.2?1:t<.28?2:t<.39?3:t<.47?4:t<.54?5:t<.62?6:t<.69?7:t<.8?8:t<.89?9:t<.94?10:11;_&&(n===8||n===10)&&(n=a()<.5?4:11);let[r,i,o]=[[1.3+a()*1.5,1+a()*1,.9+a()*.9],[.9+a()*.6,1+a()*.8,1.3+a()*.6],[1+a()*.5,1+a()*.5,1],[3.2+a()*2.8,1.7+a()*.6,1.2+a()*.5],[.9+a()*.3,.45+a()*.15,.75+a()*.2],[1+a()*.6,1+a()*.5,1.2+a()*.8],[1.6+a()*1,1.4+a()*.8,1.2+a()*.8],[.7+a()*.3,.45+a()*.1,1.5+a()*.4],[5+a()*4,2.1+a()*.5,1.9+a()*.5],[6+a()*8,1.1+a()*.6,.8+a()*.6],[3+a()*1.8,1.5+a()*.5,2+a()*.4],[.9+a()*.4,.9+a()*.4,.45+a()*.2]][n],s=[4,4,3,2,6,3,1,5,2,1,1,4][n],c=1+Math.floor(a()*(_?Math.min(2,s):s)),u=n===7?.05:n===4?.35+a()*.3:.5+a()*.7,d=a()<.5,f=c*r*1.1+(c-1)*u,p=i*1.25,h=null;if((n===4||n===7||n===0&&a()<.3)&&a()<.7){let e=Math.floor(a()*4),t=d?f:p,n=d?p:f;for(let r=0;r<5&&!h;r++){let r=e===0?z.x0:e===1?z.x1-t:z.x0+a()*Math.max(0,Ae-t),i=e===2?z.z0:e===3?z.z1-n:z.z0+a()*Math.max(0,je-n);Te(r,i,t,n,o+.5)&&(h=[r,i])}}if(h??=De(d?f:p,d?p:f,o+.5,_?4:e>5?11:7,10)??(_?null:Ee(d?f:p,d?p:f,o+.5,8)),!h)continue;let v=Q($(Cx,a),a,.06),y=0;for(let e=0;e<c;e++){let e=r*(.9+a()*.2),t=i*(.92+a()*.16),s=o*(.9+a()*.2),c=(p-t)*a(),f=a()<.15?Q($(Cx,a),a,.06):Q(v,a,.04),_=f.map(e=>e*.72),b=h[0]+(d?y:c),x=h[1]+(d?c:y),S=b+(d?e:t),C=x+(d?t:e);if(y+=e+u,S>z.x1||C>z.z1)break;let w=(b+S)/2,T=(x+C)/2,E=Math.min(S-b,C-x);if(n===0){l.box(b,j,x,S,j+s,C,X.METAL,f,_);let t=e>2.2?2:1;for(let e=0;e<t;e++){let n=(e+.5)/t,r=d?b+(S-b)*n:w,i=d?T:x+(C-x)*n,a=Math.min(E*.36,(d?S-b:C-x)/t*.38);l.cyl(r,i,a,j+s,j+s+.1,_,10,X.METAL,wx)}V(b,j,x,S,j+s,C)}else if(n===1)l.box(b,j,x,S,j+s,C,X.LOUVRE,f,_,X.METAL),l.box(b-.05,j+s,x-.05,S+.05,j+s+.1,C+.05,X.METAL,_),V(b,j,x,S,j+s,C),m.box(b-.05,j+s,x-.05,S+.05,j+s+.1,C+.05,`equipment`);else if(n===2){let e=E*.45;l.box(b+.05,j,x+.05,S-.05,j+.35,C-.05,X.METAL,f.map(e=>e*.85)),l.lathe([w,j+.35,T],[0,1,0],[[e*.55,0],[e*.55,.35],[e,.45],[e*.9,.62],[e*.2,.78]],10,_,X.METAL),V(b+.05,j,x+.05,S-.05,j+.35,C-.05),m.cyl(w,T,j+.35,j+.8,e*.55,e*.2,`equipment`)}else if(n===3){let e=d?b+(S-b)*.42:x+(C-x)*.42,t=s*.72,[n,r,i,a]=d?[b,x,e,C]:[b,x,S,e],[o,c,u,p]=d?[e,x,S,C]:[b,e,S,C];l.box(n,j,r,i,j+s,a,X.METAL,f,_),l.box(o,j,c,u,j+t,p,X.LOUVRE,f.map(e=>e*.95),_,X.METAL);for(let e=0;e<2;e++){let n=(e+.5)/2,r=d?o+(u-o)*n:(o+u)/2,i=d?(c+p)/2:c+(p-c)*n,a=Math.min(E*.34,(d?u-o:p-c)*.2);l.cyl(r,i,a,j+t,j+t+.12,_,10,X.METAL,wx)}let h=d?n+.35:i-.35,g=d?a-.35:r+.35;l.cyl(h,g,.045,j+s,j+s+.55,Z(4869197),6),m.cyl(h,g,j+s,j+s+.55,.044,.044,`equipment`),V(n,j,r,i,j+s,a),V(o,j,c,u,j+t,p)}else if(n===4){l.box(b,j+.15,x,S,j+s,C,X.METAL,Q(Z(11776166),a,.05),Q(Z(9342085),a,.05)),l.box(b+.05,j,x+.05,S-.05,j+.15,C-.05,X.METAL,Ex,!1);let t=Math.min(s*.36,e*.3),n=j+.15+(s-.15)/2;d?l.lathe([b+(S-b)*.4,n,C],[0,0,1],[[t,0],[.001,.005]],10,wx,X.METAL):l.lathe([S,n,x+(C-x)*.4],[1,0,0],[[t,0],[.001,.005]],10,wx,X.METAL),V(b,j+.15,x,S,j+s,C),m.box(b+.05,j,x+.05,S-.05,j+.15,C-.05,`equipment`)}else if(n===5){let n=Math.min(t,e)/2*.9,r=Q($(Mx,a),a,.05).map(e=>e*.8),i=s+a()*.6;l.box(b,j,x,S,j+.2,C,X.PAVERS,Z(9078139)),V(b,j,x,S,j+.2,C),l.lathe([w,j+.2,T],[0,1,0],[[n,0],[n,i],[n*.3,i+n*.3]],12,r,X.METAL,{cap:r.map(e=>e*.8)}),m.cyl(w,T,j+.2,j+.2+i,n,n,`equipment`),m.cyl(w,T,j+.2+i,j+.2+i+n*.3,n,n*.3,`equipment`),g.add(b,j,x,S,j+.2+i+n*.3,C),Oe(b,x,S,C,j,i)}else if(n===6){let e=a()<.5?Q(Z(9209466),a,.06):Q(Nx,a,.08);l.box(b,j,x,S,j+s,C,X.PAVERS,e,!1);let t=.35,n=[w,j+s+t/2,T],r=(d?S-b:C-x)/2,i=(d?C-x:S-b)/2,o=Math.atan2(t,2*i),c=d?[1,0,0]:[0,0,1],u=d?[0,0,1]:[1,0,0];l.obox(n,[r+.05,.03,Math.hypot(i,t/2)+.05],c,[u[0]*-Math.sin(o),Math.cos(o),u[2]*-Math.sin(o)],[u[0]*Math.cos(o),Math.sin(o),u[2]*Math.cos(o)],X.METAL,Z(5593435),null,j),V(b,j,x,S,j+s,C),m.ramp(b-.05,j+s-.05,x-.05,S+.05,C+.05,d?2:0,j+s+.03,j+s+t+.03,`equipment`,0,.06)}else if(n===8)nx(l,m,b,x,S,C,j,s,d,f,_),V(b,j,x,S,j+s,C);else if(n===9){let e=d?S-b:C-x,t=d?C-x:S-b,n=2+Math.floor(a()*3),r=(e,t)=>d?[b+e,x+t]:[b+t,x+e];for(let n=.3;n<e-.1;n+=2.4){for(let i of[.1,t-.1]){let[t,a]=r(Math.min(n,e-.1),i);l.box(t-.05,j,a-.05,t+.05,j+s,a+.05,X.METAL,Ex,!1),m.box(t-.05,j,a-.05,t+.05,j+s,a+.05,`pole`)}let[i,a]=r(Math.min(n,e-.1)-.05,.05),[o,c]=r(Math.min(n,e-.1)+.05,t-.05);l.box(i,j+s-.1,a,o,j+s,c,X.METAL,Ex),m.box(i,j+s-.1,a,o,j+s,c,`pole`)}let i=.2;for(let r=0;r<n;r++){let n=.07+a()*.13;if(i+2*n>t-.15)break;let r=Q($(Ix,a),a,.06),o=i+n,c=j+s+n,u=d?[b,c,x+o]:[b+o,c,x];l.lathe(u,d?[1,0,0]:[0,0,1],[[n,0],[n,e]],8,r,X.METAL,{cap:r,base:j});let f=n*.92;d?m.box(b,c-f,x+o-f,S,c+f,x+o+f,`pole`):m.box(b+o-f,c-f,x,b+o+f,c+f,C,`pole`),i+=2*n+.08+a()*.15}g.add(b,j,x,S,j+s+.5,C),Oe(b,x,S,C,j,.4)}else if(n===10){let e=Q($(Lx,a),a,.05);l.box(b,j,x,S,j+s,C,X.LOUVRE,e,e.map(e=>e*.74),X.METAL);let t=d?S-.5:w,n=d?T:C-.5;l.cyl(t,n,.13,j+s,j+s+1.4,Z(4144442),8),m.cyl(t,n,j+s,j+s+1.4,.13,.13,`equipment`);let[r,i,o,c]=d?[b+.4,T-.28,b+1.8,T+.28]:[w-.28,x+.4,w+.28,x+1.8];l.box(r,j+s,i,o,j+s+.5,c,X.METAL,Z(5920596),Z(4867908)),m.box(r,j+s,i,o,j+s+.5,c,`equipment`),V(b,j,x,S,j+s,C)}else if(n===11){let e=Q(Z(10132632),a,.08);l.box(b+.1,j,x+.1,S-.1,j+s,C-.1,X.METAL,e.map(e=>e*.85)),l.box(w-.18,j+s,T-.18,w+.18,j+s+.3,T+.18,X.METAL,Ex,!1),l.box(b,j+s+.3,x,S,j+s+.38,C,X.METAL,e,e.map(e=>e*.78)),V(b+.1,j,x+.1,S-.1,j+s,C-.1),m.box(w-.18,j+s,T-.18,w+.18,j+s+.3,T+.18,`equipment`),m.box(b,j+s+.3,x,S,j+s+.38,C,`equipment`),g.add(b,j,x,S,j+s+.4,C)}else{let e=a()<.5?Q(Z(9080456),a,.05):Q(Z(10656908),a,.05);l.box(b,j,x,S,j+s,C,X.METAL,e,e.map(e=>e*.78)),V(b,j,x,S,j+s,C)}O.hvac++}let b=Math.min(h[0]+(d?y:p),z.x1),x=Math.min(h[1]+(d?p:y),z.z1);if(Le.push([(h[0]+b)/2,(h[1]+x)/2,h[0],h[1],b,x]),Se(h[0],h[1],b,x,j+o),a()<.45){let e=.18+a()*.2,t=.12,n=j+.18,r=(h[0]+b)/2,i=(h[1]+x)/2,o=(r,i,a,o)=>{let s=Math.min(r,a)-e/2,c=Math.max(r,a)+e/2,u=Math.min(i,o)-e/2,d=Math.max(i,o)+e/2;if(Math.max(c-s,d-u)<1.5||s<z.x0||u<z.z0||c>z.x1||d>z.z1||g.hit(s+.05,u+.05,c-.05,d-.05,j,.4))return;l.box(s,n,u,c,n+t,d,X.METAL,Z(7829882)),m.box(s,n,u,c,n+t,d,`equipment`);let f=Math.max(c-s,d-u);for(let e=.4;e<f;e+=2.2){let t=c-s>d-u?s+e:(s+c)/2,r=c-s>d-u?(u+d)/2:u+e;l.box(t-.04,j,r-.04,t+.04,n,r+.04,X.METAL,Ex,!1),m.box(t-.04,j,r-.04,t+.04,n,r+.04,`equipment`)}g.add(s,j,u,c,n+t,d)};d?o(r,i+(i<B[1]?p/2+.3:-p/2-.3),r,B[1]):o(r+(r<B[0]?p/2+.3:-p/2-.3),i,B[0],i)}}if(H){let e=(H.x1-H.x0)*(H.z1-H.z0);if(e>40&&(y||a()<.45)){let t=1+Math.floor(a()*(e>120?3:2)),n=3+a()*.6,r=H.x1-H.x0>H.z1-H.z0,i=r?t*n:n,o=r?n:t*n,s=2.4+a()*1,c=0,u=0,d=!1;for(let e=0;e<6&&!d;e++)c=H.x0+a()*Math.max(0,H.x1-H.x0-i),u=H.z0+a()*Math.max(0,H.z1-H.z0-o),d=c+i<=H.x1+.01&&u+o<=H.z1+.01&&!g.hit(c-.3,u-.3,c+i+.3,u+o+.3,H.y,s+.6);if(d){let e=Q(Z(9278096),a,.06);l.box(c,H.y,u,c+i,H.y+s*.55,u+o,X.LOUVRE,e,!1),l.box(c,H.y+s*.55,u,c+i,H.y+s,u+o,X.METAL,e,e.map(e=>e*.8));for(let a=0;a<t;a++){let t=r?c+(a+.5)*n:c+i/2,d=r?u+o/2:u+(a+.5)*n,f=n*.4;l.lathe([t,H.y+s,d],[0,1,0],[[f,0],[f*1.06,.5],[f*1.1,.75]],10,e.map(e=>e*.9),X.METAL,{back:!0}),l.disc(t,H.y+s+.3,d,f*1.02,wx,12),m.cyl(t,d,H.y+s,H.y+s+.75,f*.985,f*1.09,`equipment`)}V(c,H.y,u,c+i,H.y+s,u+o),Se(c,u,c+i,u+o,H.y+s,H.y),O.ct++}}for(let e=0,t=1+Math.floor(a()*3);e<t;e++){let e=1.4+a()*1.4,t=1+a()*.9,n=.9+a()*.7,r=H.x1-H.x0-e,i=H.z1-H.z0-t;if(r<0||i<0)break;let o=H.x0+a()*r,s=H.z0+a()*i;if(g.hit(o-.3,s-.3,o+e+.3,s+t+.3,H.y,n+.3))continue;let c=$(Cx,a);l.box(o,H.y,s,o+e,H.y+n,s+t,X.METAL,c),l.cyl(o+e/2,s+t/2,Math.min(e,t)*.33,H.y+n,H.y+n+.1,c.map(e=>e*.8),10,X.METAL,wx),V(o,H.y,s,o+e,H.y+n,s+t)}if(y&&a()<.6){let e=H.x0+(H.x1-H.x0)*(.2+a()*.6),t=H.z0+(H.z1-H.z0)*(.2+a()*.6);g.hit(e-.8,t-.8,e+.8,t+.8,H.y,12)||(ix(l,m,h,e,H.y,t,7+a()*10,a),g.add(e-.6,H.y,t-.6,e+.6,H.y+17,t+.6),O.ant++)}}!ve&&(_?a()<.42:a()<.3)&&tx(l,m,g,Te,a,z,j,1+Math.floor(a()*3),O);for(let e=0,t=_&&oe&&a()<.6?1+ +(a()<.3):0;e<t;e++){let e=a()<.5?De(.4,.4,5,5,8):Ee(.4,.4,5,6);e&&(rx(l,m,e[0]+.2,j,e[1]+.2,2.5+a()*2.5,a),g.add(e[0],j,e[1],e[0]+.4,j+5,e[1]+.4),O.ant++)}if(!ve&&!y&&Me>110&&(_||p===`loft`||ce)&&a()<.2){let e=2+Math.floor(a()*4),t=Math.min(Ae*.6,4+a()*8),n=1.7,r=.35,i=2.4,o=t,s=e*i,c=Ee(o,s,1.4,10);if(c){for(let a=0;a<e;a++){let e=c[1]+a*i,o=e+n*Math.cos(r)/2,s=j+.35,u=s+n*Math.sin(r),d=[c[0]+t/2,(s+u)/2+.03,o],f=[1,0,0],p=[0,Math.cos(r),-Math.sin(r)],h=[0,Math.sin(r),Math.cos(r)];l.obox(d,[t/2,.03,n/2],f,p,h,X.SOLAR,[1,1,1],null,j);for(let e of[c[0]+.3,c[0]+t-.3])l.box(e-.04,j,o+.3,e+.04,u-.1,o+.38,X.METAL,Ex,!1);m.ramp(c[0],s-.05,e,c[0]+t,e+n*Math.cos(r),2,s+.06,u+.06,`equipment`,0,.12)}g.add(c[0],j,c[1],c[0]+o,j+1.4,c[1]+s),O.solar++}}if(!ve&&(p===`loft`||p===`walkup`||p===`apt`||ce)&&a()<.6){let e=a()<.4,t=1+Math.floor(a()*(Me>200?4:2)),n=1.6+a()*2.2,r=1.4+a()*1.2,i=null;for(let o=0;o<t;o++){let t=e?r:n,o=r,s=.35+a()*.2,c=i?[i[0]+t+1.2,i[1]]:Ee(t,o,s+.9,8);if(i&&!Te(c[0],c[1],t,o,s+.9)||!c)break;i=c;let[u,d]=c;if(l.box(u,j,d,u+t,j+s,d+o,X.METAL,Ex,!1),e){let e=Math.min(t,o)/2*Math.SQRT2,n=Math.min(t,o)*.4;l.lathe([u+t/2,j+s,d+o/2],[0,1,0],[[e,0],[.001,n]],4,[1,1,1],X.GLASS,{rot0:Math.PI/4}),m.box(u,j,d,u+t,j+s,d+o,`skylight`)}else l.box(u+.08,j+s,d+.08,u+t-.08,j+s+.02,d+o-.08,X.GLASS,[1,1,1]),m.box(u,j,d,u+t,j+s+.02,d+o,`skylight`);g.add(u,j,d,u+t,j+s+.5,d+o),O.sky++}}if(oe&&(p===`walkup`||p===`apt`||p===`loft`&&a()<.4)){let e=i.sides||{},t=[`nx`,`px`,`nz`,`pz`].filter(t=>e[t]===`party`&&Math.abs(t===`nx`?o.x0-i.x0:t===`px`?i.x1-o.x1:t===`nz`?o.z0-i.z0:i.z1-o.z1)<.3),n=a()<.6?Tg.RED:Tg.BROWN;for(let e of t)if(!(a()<.35))for(let t=0,r=1+Math.floor(a()*3);t<r;t++){let r=.7+a()*.8,i=.5+a()*.4,c=1.2+a()*1.4,u=e===`nx`||e===`px`?`z`:`x`,d=a(),f,p,m,h;if(u===`z`?(m=i,h=r,f=e===`nx`?o.x0+w+.02:o.x1-w-.02-i,p=z.z0+d*Math.max(0,je-r)):(m=r,h=i,p=e===`nz`?o.z0+w+.02:o.z1-w-.02-i,f=z.x0+d*Math.max(0,Ae-r)),g.hit(f+.01,p+.01,f+m-.01,p+h-.01,j,c))continue;let _={...o.p,style:wg.BLANK,layer:n,tint:[.85,.8,.78],topY:j+c};s.fac.box(f,j,p,f+m,j+c,p+h,_,{},!0,!1,{..._,layer:Tg.CONCRETE,tint:[.45,.44,.42]}),V(f,j,p,f+m,j+c,p+h,`bulkhead`),t===0&&l.cyl(f+m/2,p+h/2,Math.min(m,h)*.22,j+c,j+c+.3,Z(6969936),5,X.METAL,wx),O.chim++}}if(R){let e=R.x1-R.x0,t=R.z1-R.z0,r=.25,i={x0:Math.max(R.x0,z.x0-.45),z0:Math.max(R.z0,z.z0-.45),x1:Math.min(R.x1,z.x1+.45),z1:Math.min(R.z1,z.z1+.45)},s=[];Math.abs(R.x0-k.x0)<.1&&s.push([`x`,i.x0+r,i.z0+r,i.z1-r]),Math.abs(R.x1-k.x1)<.1&&s.push([`x`,i.x1-r-.8,i.z0+r,i.z1-r]),Math.abs(R.z0-k.z0)<.1&&s.push([`z`,i.z0+r,i.x0+r,i.x1-r]),Math.abs(R.z1-k.z1)<.1&&s.push([`z`,i.z1-r-.8,i.x0+r,i.x1-r]);for(let[e,t,n,r]of s){let i=n+a()*1.5;for(;i<r-1.2;){let n=Math.min(r-i,1.6+a()*2.2);if(a()<.75){let r=.55+a()*.2,o=r+.35+a()*.5,[s,c,u,d]=e===`x`?[t,i,t+.8,i+n]:[i,t,i+n,t+.8];if(!g.hit(s,c,u,d,j,o)){l.box(s,j,c,u,j+r,d,X.PAVERS,Dx,Q(C,a,.15),X.GRAVEL);let e=S(),t=e<.4?[1,0,0,.12]:e<.65?[0,1,.15,0]:[.3,.35,.5,.4];D(s+.1,c+.1,u-.1,d-.1,j+r,t,2.4,.9),a(),V(s,j,c,u,j+r,d)}}i+=n+.4+a()*1.2}}let c=a();if(de===`pool`&&e*t>40||e*t>70&&c<.36&&(p===`apt`||p===`glass`||p===`postwar`||ce)){let n=de===`pool`,r=Math.min(e-3,n?6+a()*7:4+a()*5),i=Math.min(t-3,n?3.5+a()*2.5:3+a()*3),o=R.x0+(e-r)/2,s=R.z0+(t-i)/2;if(r>2.5&&i>2&&!g.hit(o-.3,s-.3,o+r+.3,s+i+.3,j,1)){l.box(o-.3,j,s-.3,o+r+.3,j+.45,s+i+.3,X.PAVERS,Z(13223096),Z(16777215),-1,1),V(o-.3,j,s-.3,o+r+.3,j+.45,s+i+.3,`roof`),l.skin(o-1.4,s-1.4,o+r+1.4,s+i+1.4,j+.009,X.DECK,Q([.95,.9,.85],a,.06),0,0,!1,.2);for(let e=o+.2;e<o+r-.6;e+=1.1){let t=s+i+.45;if(t+1.8>R.z1-.2||g.hit(e,t,e+.65,t+1.8,j,.5))break;l.box(e,j,t,e+.65,j+.35,t+1.8,X.METAL,Q($(kx,a),a,.05).map(e=>e*.9)),V(e,j,t,e+.65,j+.35,t+1.8)}if(n){for(let e=o+.4;e<o+r-.6;e+=1.3){let t=s-.45-1.8;if(t<R.z0+.2||g.hit(e,t,e+.65,t+1.8,j,.5))break;l.box(e,j,t,e+.65,j+.35,t+1.8,X.METAL,Q($(kx,F),F,.05).map(e=>e*.9)),V(e,j,t,e+.65,j+.35,t+1.8)}let e={x0:R.x0+1.2,z0:R.z0+1.2,x1:R.x1-1.2,z1:R.z1-1.2};for(let t=0,n=2+Math.floor(F()*3);t<n;t++){let t=Ee(2.2,2.2,2.6,6,e,!0);if(!t)break;let n=t[0]+1.1,r=t[1]+1.1,i=Q($(kx,F),F,.05);l.cyl(n,r,.03,j,j+2.2,Ex,5),l.lathe([n,j+2.05,r],[0,1,0],[[1.05,0],[.05,.38]],8,i,X.METAL,{back:!0,base:j}),m.cyl(n,r,j,j+2.05,.03,.03,`pole`),m.cyl(n,r,j+2.05,j+2.43,1.05,.05,`awning`),g.add(n-1.05,j,r-1.05,n+1.05,j+2.45,r+1.05)}let t=Ee(3.2,2.2,3,8,e,!0);if(t){let[e,n]=t,r=Q($(kx,F),F,.05);l.box(e,j,n,e+3.2,j+2.3,n+2.2,X.DECK,Q(Ox,F,.1),!1),l.box(e-.25,j+2.3,n-.25,e+3.45,j+2.45,n+2.45,X.METAL,r.map(e=>e*.85),r),V(e,j,n,e+3.2,j+2.3,n+2.2),m.box(e-.25,j+2.3,n-.25,e+3.45,j+2.45,n+2.45,`awning`,1)}}O.pool++}}if(de===`garden`){let n={x0:R.x0+.9,z0:R.z0+.9,x1:R.x1-.9,z1:R.z1-.9};for(let r=0,i=Math.min(10,2+Math.floor(e*t/20));r<i;r++){let e=1.6+F()*3.6,t=1.4+F()*2.8,r=.35+F()*.35,i=Ee(e,t,2.5,6,n,!0);if(!i)continue;let[a,o]=i,s=a+e,c=o+t,u=F()<.5?Q(Ox,F,.1):Q(Dx,F,.08);l.box(a,j,o,s,j+r,c,F()<.5?X.DECK:X.PAVERS,u,Q(C,F,.15),X.GRAVEL),V(a,j,o,s,j+r,c),F(),F();for(let n=0,r=Math.min(10,3+Math.floor(e*t/1.8));n<r*3;n++)F();let d=[[1,.3,.3,.4],[.3,1,.5,.1],[.3,.4,1,.3],[.6,.1,.3,1]][Math.floor(S()*4)],f=e*t>6&&F()<.5;if(D(a+.15,o+.15,s-.15,c-.15,j+r,d,f?1.5:1.9),f){let e=(a+s)/2,t=(o+c)/2;1.4+F()*1.2;let n=1+F()*.8;x.push({x:e,z:t,y:j+r-.02,kind:`small`,sc:n/2.6})}g.add(a,j,o,s,j+r+1.5,c)}O.gardenArch=(O.gardenArch??0)+1}if(!de&&e*t>50&&a()<.4&&!n.noBedGrid){let e=1.4+a()*.8,t=2.5+a()*2.5,n=e+1,r=t+1;for(let i=R.x0+1.4;i+e<R.x1-1.2;i+=n)for(let n=R.z0+1.4;n+t<R.z1-1.2;n+=r){if(a()<.4)continue;let r=t*(.5+a()*.5),o=n+a()*(t-r);if(g.hit(i-.2,o-.2,i+e+.2,o+r+.2,j,1))continue;let s=.4+a()*.2;l.box(i,j,o,i+e,j+s,o+r,X.DECK,Q(Ox,a,.1),Q(a()<.5?C:C.map(e=>e*1.25),a,.12),X.GRAVEL),V(i,j,o,i+e,j+s,o+r),D(i+.12,o+.12,i+e-.12,o+r-.12,j+s,S()<.5?[.1,.1,.5,1]:[.2,.3,1,.5],1.6,.8)}O.garden++}if(R.cell===X.DECK&&e*t>40&&a()<.35){let e=3+a()*2,t=2.5+a()*1.5,n=2.5,r=Ee(e,t,2.8,6,{x0:R.x0+.8,z0:R.z0+.8,x1:R.x1-.8,z1:R.z1-.8},!0);if(r){let[i,a]=r,o=i+e,s=a+t;for(let[e,t]of[[i,a],[o-.12,a],[i,s-.12],[o-.12,s-.12]])l.box(e,j,t,e+.12,j+n,t+.12,X.DECK,Ox),m.box(e,j,t,e+.12,j+n,t+.12,`pole`);for(let e=i;e<o;e+=.5)l.box(e,j+n,a-.1,e+.07,j+n+.14,s+.1,X.DECK,Ox);m.box(i,j+n,a-.1,o,j+n+.14,s+.1,`awning`,1),g.add(i,j,a,o,j+n+.2,s)}}for(let n=0,r=Math.floor(e*t/30);n<Math.min(r,12);n++){let e=Ee(1.8,1.8,2.6,5,{x0:R.x0+1.3,z0:R.z0+1.3,x1:R.x1-1.3,z1:R.z1-1.3},!0);if(!e)break;let t=e[0]+.9,n=e[1]+.9,r=a();if(r<.4){l.box(t-.45,j,n-.45,t+.45,j+.7,n+.45,X.PAVERS,Dx);let e=.8+a()*.4;x.push({x:t,z:n,y:j+.68,kind:`small`,sc:e/2.9}),S()<.5&&T(t+.18,j+.68,n-.15,S()<.5?pb.BROAD:pb.FLOWER,.7),V(t-.45,j,n-.45,t+.45,j+.7,n+.45),g.add(t-e,j,n-e,t+e,j+3.2,n+e)}else r<.7?(l.box(t-.03,j,n-.03,t+.03,j+2.2,n+.03,X.METAL,Ex),l.box(t-1,j+2.2,n-1,t+1,j+2.32,n+1,X.METAL,Q($(kx,a),a,.05)),m.box(t-.03,j,n-.03,t+.03,j+2.2,n+.03,`pole`),m.box(t-1,j+2.2,n-1,t+1,j+2.32,n+1,`awning`,1),g.add(t-1,j,n-1,t+1,j+2.32,n+1)):(l.box(t-.9,j,n-.35,t+.9,j+.35,n+.35,X.DECK,Ox),V(t-.9,j,n-.35,t+.9,j+.35,n+.35))}if(o.parapet<.5){let e=(e,t,n,r)=>{let i=Math.hypot(n-e,r-t),a=Math.abs(n-e)>Math.abs(r-t),o=1.05;if(i<2)return;let[s,c]=a?[Math.min(e,n),t]:[e,Math.min(t,r)];a?(l.box(s,j+o-.05,c-.03,s+i,j+o,c+.03,X.METAL,Ex),m.box(s,j+o-.05,c-.03,s+i,j+o,c+.03,`pole`)):(l.box(s-.03,j+o-.05,c,s+.03,j+o,c+i,X.METAL,Ex),m.box(s-.03,j+o-.05,c,s+.03,j+o,c+i,`pole`));for(let e=0;e<=i;e+=1.5){let t=a?s+Math.min(e,i-.04):s,n=a?c:c+Math.min(e,i-.04);l.box(t-.02,j,n-.02,t+.02,j+o-.05,n+.02,X.METAL,Ex,!1)}O.rail++},t=.15;Math.abs(R.x0-o.x0)<.2&&e(o.x0+t,R.z0+t,o.x0+t,R.z1-t),Math.abs(R.x1-o.x1)<.2&&e(o.x1-t,R.z0+t,o.x1-t,R.z1-t),Math.abs(R.z0-o.z0)<.2&&e(R.x0+t,o.z0+t,R.x1-t,o.z0+t),Math.abs(R.z1-o.z1)<.2&&e(R.x0+t,o.z1-t,R.x1-t,o.z1-t)}}if(!ve&&!y&&oe&&(p===`loft`||p===`apt`)&&Me>150&&a()<.08){let e=4+a()*4,t=3+a()*2,n=2.4,r=Ee(e,t,2.9,8);if(r){let[i,a]=r,o=i+e,s=a+t;l.box(i,j,a,o,j+.5,s,X.PAVERS,Dx,!1),l.box(i,j+.5,a,o,j+n,s,X.GLASS,[1,1,1]),V(i,j,a,o,j+n,s,`skylight`),Se(i,a,o,s,j+n)}}if(!ve&&!y&&oe&&(_||p===`loft`)&&Me>45){if(a()<.32){let e=1.8+a()*2.2,t=1.5+a()*1.4,n=2+a()*.5,r=.35,i=a()<.5,o=i?e:t,s=i?t:e,c=a()<.5?De(o,s,n+r+.3,6,8):Ee(o,s,n+r+.3,8);if(c){let[e,t]=c,u=e+o,d=t+s,f=a()<.5,p=f?Q($(Px,a),a,.1):Q($([Z(9080458),Z(8022616),Z(7042160)],a),a,.08);l.box(e,j,t,u,j+n,d,f?X.DECK:X.METAL,p,!1);let h=(i?o:s)/2+.12,g=(i?s:o)/2+.12,_=Math.atan2(r,2*g),v=i?[1,0,0]:[0,0,1],y=i?[0,0,1]:[1,0,0];l.obox([(e+u)/2,j+n+r/2,(t+d)/2],[h,.03,Math.hypot(g,r/2)],v,[y[0]*-Math.sin(_),Math.cos(_),y[2]*-Math.sin(_)],[y[0]*Math.cos(_),Math.sin(_),y[2]*Math.cos(_)],X.METAL,Q($([Z(5922142),Z(7232072),Z(4869192),Z(8157810)],a),a,.08),null,j),V(e,j,t,u,j+n,d),m.ramp(e-.12,j+n-.05,t-.12,u+.12,d+.12,i?2:0,j+n+.03,j+n+r+.03,`equipment`,0,.06),O.shed=(O.shed??0)+1}}if(a()<.1){let e=Ee(3.2,2.2,2.6,6);if(e){let[t,n]=e,r=t+3.2,i=n+2.2;for(let[e,a]of[[t,n],[r-.1,n],[t,i-.1],[r-.1,i-.1]])l.box(e,j,a,e+.1,j+.7,a+.1,X.DECK,Ox,!1),m.box(e,j,a,e+.1,j+.7,a+.1,`pole`);l.box(t,j+.7,n,t+1.8,j+2.2,i,X.DECK,Q([.85,.8,.72],a,.1),Z(4868680),X.EPDM),l.box(t+1.8,j+.7,n+.1,r,j+2,i-.1,X.LOUVRE,Z(5593178),Z(5922142),X.LOUVRE),m.box(t,j+.7,n,r,j+2.2,i,`equipment`),g.add(t,j,n,r,j+2.2,i),Oe(t,n,r,i,j,1.2)}}if(a()<.25)for(let e=0,t=2+Math.floor(a()*3);e<t;e++){let e=.5+a()*.9,t=.5+a()*.9,n=.15+a()*.7,r=De(e,t,n+.2,3,5);if(!r)continue;let i=Q($([Ox,Z(9079944),Z(5922142),Z(8020040),Z(7238760)],a),a,.1);l.box(r[0],j,r[1],r[0]+e,j+n,r[1]+t,n<.3?X.DECK:X.METAL,i),V(r[0],j,r[1],r[0]+e,j+n,r[1]+t)}if(o.parapet>.3&&a()<.45){let e=[`nz`,`pz`,`nx`,`px`].filter(e=>N[e]===`street`&&Math.abs(e===`nx`?o.x0-i.x0:e===`px`?i.x1-o.x1:e===`nz`?o.z0-i.z0:i.z1-o.z1)<.1);if(e.length){let t=$(e,a),n=t===`nz`||t===`pz`,r=n?o.x1-o.x0:o.z1-o.z0,i=(n?o.x0:o.z0)+r*(.15+a()*.7),s=Z(3026736),c=I+1,u=w+.9,d=t===`nz`||t===`nx`?-1:1,f=t===`nz`?o.z0:t===`pz`?o.z1:t===`nx`?o.x0:o.x1;for(let e of[-.25,.25]){let t=i+e,r=(e,r,i,a)=>{let[o,c,u,d]=n?[t-.025,Math.min(e,r),t+.025,Math.max(e,r)]:[Math.min(e,r),t-.025,Math.max(e,r),t+.025];l.box(o,i,c,u,a,d,X.METAL,s),m.box(o,i,c,u,a,d,`fireescape`)};r(f+d*.35,f+d*.4,I-1.5,c),r(f+d*.4,f-d*u,c-.05,c),r(f-d*(u-.05),f-d*u,j,c)}O.goose=(O.goose??0)+1}}}if(a()<.5){let e=De(.9,.9,.7,4,6);e&&(l.box(e[0],j,e[1],e[0]+.9,j+.55,e[1]+.9,X.METAL,Z(9079946)),V(e[0],j,e[1],e[0]+.9,j+.55,e[1]+.9))}for(let e=0,t=Math.floor(a()*(_?5:4));e<t;e++){let e=De(.4,.4,1.4,6,4);if(!e)continue;let t=.08+a()*.1,n=.5+a()*.8,r=e[0]+.2,i=e[1]+.2,o=a()<.5?Z(9409172):Z(3816252);a()<.5?(l.lathe([r,j,i],[0,1,0],[[t,0],[t,n],[t*2.2,n+.02],[t*2,n+.12],[.01,n+.2]],7,o,X.METAL),m.cyl(r,i,j+n,j+n+.12,t*2.2,t*2,`equipment`)):l.cyl(r,i,t,j,j+n,o,7),m.cyl(r,i,j,j+n,t*.95,t*.95,`equipment`),g.add(e[0],j,e[1],e[0]+.4,j+n+.2,e[1]+.4)}if(oe&&y&&(o.parapet>.3||e.hero)&&Ae>10&&je>10){let e=1.3,t=.14,n=.12,r=Z(7172210),i=[[z.x0+e,z.z0+e,z.x1-e,z.z0+e+t],[z.x0+e,z.z1-e-t,z.x1-e,z.z1-e],[z.x0+e,z.z0+e+t,z.x0+e+t,z.z1-e-t],[z.x1-e-t,z.z0+e+t,z.x1-e,z.z1-e-t]];for(let[e,t,a,o]of i)g.hit(e,t,a,o,j,.5)||(l.box(e,j,t,a,j+n,o,X.METAL,r),m.box(e,j,t,a,j+n,o,`equipment`),g.add(e,j,t,a,j+n,o));O.davit=(O.davit??0)+1}if(oe&&y&&o.parapet>.3&&o.parapet<1.3&&P()<.55){let e=j,t=I-j+1,n=Q(Z(9211532),P,.05),r=w+.5,i=[[o.x0+r,o.z0+r,o.x1-r,o.z0+r],[o.x0+r,o.z1-r,o.x1-r,o.z1-r],[o.x0+r,o.z0+r,o.x0+r,o.z1-r],[o.x1-r,o.z0+r,o.x1-r,o.z1-r]];for(let[r,a,o,s]of i){let i=Math.abs(o-r)>Math.abs(s-a),c=i?o-r:s-a;if(!(c<2||g.hit(Math.min(r,o)-.05,Math.min(a,s)-.05,Math.max(r,o)+.05,Math.max(a,s)+.05,e,t))){g.add(Math.min(r,o)-.03,e,Math.min(a,s)-.03,Math.max(r,o)+.03,e+t,Math.max(a,s)+.03);for(let c of[e+t-.05,I+.45]){let e=i?[r,c,a-.025,o,c+.05,a+.025]:[r-.025,c,a,r+.025,c+.05,s];l.box(...e,X.METAL,n),m.box(...e,`pole`)}for(let o=0;o<=c;o+=2.4){let s=i?r+Math.min(o,c-.03):r,u=i?a:a+Math.min(o,c-.03);l.box(s-.025,e,u-.025,s+.025,e+t-.05,u+.025,X.METAL,n,!1),m.box(s-.025,e,u-.025,s+.025,e+t-.05,u+.025,`pole`)}}}O.grail=(O.grail??0)+1}if(Me>60)for(let e=0,t=Math.min(4,1+Math.floor(Me/300));e<t;e++){let e=z.x0+1+P()*Math.max(0,Ae-2),t=z.z0+1+P()*Math.max(0,je-2);g.hit(e-.5,t-.5,e+.5,t+.5,j,.3)||we(e-.3,t-.3,e+.3,t+.3)||(l.disc(e,j+.012,t,.42,Z(2763304),8),l.cyl(e,t,.16,j,j+.11,Z(4868678),8),m.cyl(e,t,j,j+.11,.16,.16,`equipment`))}if(Le.length&&!ve&&Me>90){let e=.75,t=Q([1.25,1.22,1.15],a,.05),n=j+.015,r=[],i=(e,t)=>{if(t[0]>=e[2]||t[2]<=e[0]||t[1]>=e[3]||t[3]<=e[1])return[e];let n=[],r=Math.max(e[1],t[1]),i=Math.min(e[3],t[3]);return t[1]>e[1]&&n.push([e[0],e[1],e[2],t[1]]),t[3]<e[3]&&n.push([e[0],t[3],e[2],e[3]]),t[0]>e[0]&&n.push([e[0],r,t[0],i]),t[2]<e[2]&&n.push([t[2],r,e[2],i]),n},o=(a,o,s,c,u)=>{let d=u?Math.min(a,s):a-e/2,f=u?Math.max(a,s):a+e/2,p=u?o-e/2:Math.min(o,c),m=u?o+e/2:Math.max(o,c);if(d=Math.max(d,z.x0-.3),p=Math.max(p,z.z0-.3),f=Math.min(f,z.x1+.3),m=Math.min(m,z.z1+.3),(u?f-d:m-p)<1.2||f<=d||m<=p)return;let h=[[d,p,f,m]];if(Mv)for(let e of r)h=h.flatMap(t=>i(t,e));r.push([d,p,f,m]);for(let[e,r,i,a]of h)i-e>.05&&a-r>.05&&l.skin(e,r,i,a,n,X.PAVERS,t,0,0,!1,.12)},[s,c]=B;for(let[e,t,n,r,i,a]of Le.slice(0,6)){let n=t<c?a+.5:r-.5;o(s,c,e,c,!0),o(e,c,e,n,!1)}O.pads=(O.pads??0)+1}}}ox(t,g,m,v,y,O),o.mobile&&g.h.clear();let M=[],ee=[],N=[],te=[],ne=0;for(let e of _.values()){let t=e.rb.build();if(!t)continue;let n=M.length;ee[n]=t,ne+=t.index.count/3,N[n]=e.ao.build(),te[n]=e.sk.build(),e.rb=e.ao=e.sk=null,te[n]&&(O.streakTris=(O.streakTris??0)+te[n].index.count/3),M.push({i:n,ao:!!N[n],sk:!!te[n],cx:e.cx,cz:e.cz,near:!0}),o.mobile&&await new Promise(e=>setTimeout(e,0))}let P=M.map(e=>[e.cx,e.cz]),re=Fy(ee,d,`roofs`,{castShadow:!0,receiveShadow:!0,smallCasters:!0,merge:!1,renderer:o.mobile?i:null},P),F=Fy(N,f,`roofAO`,{renderOrder:1,merge:!o.mobile},P),ie=Fy(te,p,`roofStreaks`,{renderOrder:1,merge:!o.mobile},P);for(let t of[re,F,ie])for(let n of t.meshes)e.add(n);y.count&&y.build(e,`roof-trees`,!0,{tile:cx*2,smallCasters:!0}),b.build(e),O.plants=b.count,O.roofTrees=x.length,typeof window<`u`&&(window.__roofPlants=b);let ae={...O,tiles:M.length,crowns:y.count,tris:ne};console.log(`[rooftops]`,JSON.stringify(ae)),typeof window<`u`&&(window.__roofAt=(e,n)=>t.buildings.filter(t=>t.masses?.some(t=>e>=t.x0&&e<=t.x1&&n>=t.z0&&n<=t.z1)).map(e=>({type:e.A.type,H:e.H,lot:[e.lot.x0,e.lot.z0,e.lot.x1,e.lot.z1].map(Math.round),sides:e.lot.sides,masses:e.masses.map(e=>[e.x0,e.z0,e.x1,e.z1,e.y0,e.y1,e.parapet,e.crown?`C`:``,e.p?.layer].map(e=>typeof e==`number`?+e.toFixed(1):e))})));let I=null,oe=null,se=null;return{stats:ae,roofTrees:x,update(e){if(!e)return;let t=e.position;b.update(t),re.endWarm();let n=!1;I||(I=new Ns,oe=new ji,se=new ao),oe.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),I.setFromProjectionMatrix(oe);for(let e of M){let r=Math.hypot(Math.max(0,Math.abs(t.x-e.cx)-128),Math.max(0,Math.abs(t.z-e.cz)-128)),i=e.near?r<s+40:r<s;e.near=i,re.setVisible(e.i,i&&re.hasDrawReady(e.i)),re.setShadow(e.i,!o.mobile&&r<230),o.mobile&&!re.hasReady(e.i)&&(e.warm=!1),!n&&(o.mobile||!i)&&!e.warm&&r<s+200&&(se.center.set(e.cx,60,e.cz),se.radius=200,I.intersectsSphere(re.sphere(e.i)||se)&&(re.hasReady(e.i)&&re.warm(e.i)?(n=!0,e.gpu=!0):re.hasReady(e.i)&&(e.warm=!0))),e.ao&&F.setVisible(e.i,r<(o.mobile?320:520)&&(!o.mobile||re.hasDrawReady(e.i))),e.sk&&ie.setVisible(e.i,r<(o.mobile?460:690))}}}}function tx(e,t,n,r,i,a,o,s,c){let l=Math.floor(i()*4),u=i(),d=l<2?a.x1-a.x0:a.z1-a.z0;for(let f=0;f<s;f++){let p=.35+i()*(i()<.2?.8:.3),m=2*p+.4,h=u*(d-m*s)+f*(m+.3+i()*.8);if(h<0||h+m>d)continue;let g=l<2?a.x0+h:l===2?a.x0:a.x1-m,_=l<2?l===0?a.z0:a.z1-m:a.z0+h;if(!r(g,_,m,m,2.2))continue;let v=g+m/2,y=_+m/2,b=.55+i()*.25,x=o+.5+p*.8,S=[0,Math.sin(b),-Math.cos(b)];e.box(v-.35,o,y-.35,v+.35,o+.12,y+.35,X.METAL,Z(5593178)),e.box(v-.04,o+.12,y-.04,v+.04,x,y+.04,X.METAL,Z(6974832),!1);let C=i()<.7?Z(13158080):Z(9211534),w=p*.28;e.lathe([v,x,y],S,[[.001,0],[p*.5,w*.25],[p,w]],8,C,X.METAL,{back:!0,base:o});let T=p*.9;e.obox([v+S[0]*T*.5,x+S[1]*T*.5,y+S[2]*T*.5],[.015,T*.5,.015],[1,0,0],S,[0,-S[2],S[1]],X.METAL,Z(4474440),null,o),t.box(v-.35,o,y-.35,v+.35,o+.12,y+.35,`equipment`),t.box(v-.04,o+.12,y-.04,v+.04,x,y+.04,`antenna`);let E=p*.7,D=y-E*Math.sin(b)+S[2]*w*.5,O=y+E*Math.sin(b)+S[2]*w*.5;t.ramp(v-E,x-E*Math.cos(b)-.05,Math.min(D,O),v+E,Math.max(D,O),2,x+E*Math.cos(b)+S[1]*w*.5,x-E*Math.cos(b)+S[1]*w*.5,`antenna`,0,.06),n.add(g,o,_,g+m,x+p,_+m),c.dish++}}function nx(e,t,n,r,i,a,o,s,c,l,u){e.box(n,o,r,i,o+s*.8,a,X.LOUVRE,l,!1),e.box(n,o+s*.8,r,i,o+s,a,X.METAL,l.map(e=>e*.92),u);let d=c?i-n:a-r,f=c?a-r:i-n,p=Math.max(2,Math.floor(d/1.3)),m=f>2.3?2:1;for(let i=0;i<p;i++)for(let a=0;a<m;a++){let l=(i+.5)/p*d,h=(a+.5)/m*f,g=Math.min(d/p,f/m)*.4,_=c?n+l:n+h,v=c?r+h:r+l;e.lathe([_,o+s,v],[0,1,0],[[g,0],[g,.26]],10,u.map(e=>e*.85),X.METAL,{back:!0}),e.disc(_,o+s+.1,v,g*.98,wx,10),t.cyl(_,v,o+s,o+s+.26,g,g,`equipment`)}}function rx(e,t,n,r,i,a,o){let s=Z(6119522);e.box(n-.025,r,i-.025,n+.025,r+a,i+.025,X.METAL,s);let c=o()*Math.PI;for(let t=0;t<3;t++){let o=r+a-.2-t*.35,l=.9-t*.15;e.obox([n,o,i],[l,.012,.012],[Math.cos(c),0,Math.sin(c)],[0,1,0],[-Math.sin(c),0,Math.cos(c)],X.METAL,s,null,r)}t.box(n-.025,r,i-.025,n+.025,r+a,i+.025,`antenna`)}function ix(e,t,n,r,i,a,o,s){let c=s()<.5?Z(10395808):Z(9062970),l=.5,u=[0,1,2].map(e=>[r+Math.cos(e*2.094)*l,a+Math.sin(e*2.094)*l]);for(let[n,r]of u)e.box(n-.04,i,r-.04,n+.04,i+o,r+.04,X.METAL,c),t.box(n-.04,i,r-.04,n+.04,i+o,r+.04,`antenna`);for(let t=i+1.2;t<i+o;t+=1.2)e.lathe([r,t,a],[0,1,0],[[l,0],[l,.05]],3,c,X.METAL,{back:!0,rot0:0});let d=3+s()*3;e.cyl(r,a,.05,i+o,i+o+d,c,5),t.cyl(r,a,i+o,i+o+d,.05,.05,`antenna`),n.add(r,i+o,a,0,1,0,`pole`)}function ax(e,t,n,r,i,a,o,s,c){let l=c()<.3,u=l?.8+c()*1.2:2.6+c()*2.2,d=s*(l?1.8:2+c()*.4),f=$(Ax,c),p=s*.72;for(let[n,r]of[[i-p,o-p],[i+p,o-p],[i-p,o+p],[i+p,o+p]])e.box(n-.1,a,r-.1,n+.1,a+u,r+.1,X.METAL,f),t.box(n-.1,a,r-.1,n+.1,a+u,r+.1,`watertower`);if(u>1.5){let t=a+u*.5;e.box(i-p,t-.04,o-p-.03,i+p,t+.04,o-p+.03,X.METAL,f,!1),e.box(i-p,t-.04,o+p-.03,i+p,t+.04,o+p+.03,X.METAL,f,!1),e.box(i-p-.03,t-.04,o-p,i-p+.03,t+.04,o+p,X.METAL,f,!1),e.box(i+p-.03,t-.04,o-p,i+p+.03,t+.04,o+p,X.METAL,f,!1)}let m=a+u;if(e.box(i-s*1.05,m-.25,o-s*1.05,i+s*1.05,m,o+s*1.05,X.DECK,f.map(e=>e*1.1)),t.box(i-s*1.05,m-.25,o-s*1.05,i+s*1.05,m,o+s*1.05,`watertower`,1),l){let n=$(Mx,c);e.lathe([i,m,o],[0,1,0],[[s,0],[s,d],[s*.97,d+.05],[s*.3,d+s*.3],[.01,d+s*.34]],12,n,X.METAL),t.cyl(i,o,m,m+d,s*.99,s*.99,`watertower`),t.cyl(i,o,m+d,m+d+s*.3,s*.97*.98,s*.3,`watertower`)}else{let n=Q([1,1,1],c,.12),r=$(jx,c);e.lathe([i,m,o],[0,1,0],[[s,0],[s*.96,d]],12,n,X.STAVES),e.lathe([i,m+d,o],[0,1,0],[[s*1.04,0],[s*.12,s*.7],[.01,s*.75]],12,r,X.METAL,{back:!0}),e.cyl(i,o,.06,m+d+s*.7,m+d+s*.7+.5,Z(3815994),5),t.cyl(i,o,m,m+d,s*.99,s*.96*.99,`watertower`),t.cyl(i,o,m+d,m+d+s*.7,s*1.02,s*.12,`watertower`,1)}let h=m+d+(l?s*.3:s*.7);n.add(i,h,o,0,1,0,`waterTower`);for(let e=0;e<4;e++){let t=e*Math.PI/2+.4;n.add(i+Math.cos(t)*(s+.05),m+d*.6,o+Math.sin(t)*(s+.05),Math.cos(t),0,Math.sin(t),`waterTower`)}r.add(i-s*1.1,a,o-s*1.1,i+s*1.1,h+.5,o+s*1.1,yx)}function ox(e,t,n,r,i,a){let o=new Sx(n,.6),s=qb.WALK;for(let t of e.buildings){let e=t.lot,c=e.sides||{},l=c.pz===`rear`?1:c.nz===`rear`?-1:0;if(!l)continue;let u=jv(e.cx,e.cz);if(!u)continue;let d=fv(Math.floor(Math.abs(e.x0*31.7+e.z0*7.3))+5),f=l>0?e.z1:e.z0,p=0,m=l>0?u.pz1-f:f-u.pz0;for(;p<m&&!o.hit(e.x0+.5,l>0?f+p:f-p-.5,e.x1-.5,l>0?f+p+.5:f-p,s-.5,3);)p+=.5;if(p<2)continue;let h=p>=m-.1?p:p/2,g=e.x0+.05,_=e.x1-.05,v=l>0?f+.05:f-h+.02,y=l>0?f+h-.02:f-.05;if(_-g<2||y-v<1.5||o.hit(g+.1,v+.1,_-.1,y-.1,s-.5,3))continue;let b=r(e.cx,e.cz).rb,x=d(),S=x<.45?X.LAWN:x<.7?X.PAVERS:x<.85?X.GRAVEL:X.TAR;b.skin(g,v,_,y,s+.012,S,Q(S===X.LAWN?[.95,.95,.9]:[.92,.92,.9],d,.1),d()*40,d()*40,!1,.6);let C=$(Px,d),w=1.6+d()*.4,T=.05,E=(e,t,r,i)=>{if(Math.abs(r-e)<.3&&Math.abs(i-t)<.3)return;let a=Math.min(e,r)-T/2,c=Math.max(e,r)+T/2,l=Math.min(t,i)-T/2,u=Math.max(t,i)+T/2;o.hit(a+.06,l+.06,c-.06,u-.06,s-.5,2)||(b.box(a,s,l,c,s+w,u,X.DECK,C,C),n.box(a,s,l,c,s+w,u,`wall`))};E(e.x0+.03,v,e.x0+.03,y),E(e.x1-.03,v,e.x1-.03,y),(h<p-.2||p>=m-.1)&&E(g,l>0?y:v,_,l>0?y:v);let D={x0:g+.5,z0:v+.5,x1:_-.5,z1:y-.5};if(d()<.25&&D.x1-D.x0>2.5&&D.z1-D.z0>2.2){let e=1.8+d()*.8,t=1.6+d()*.6,r=2.1,i=d()<.5?D.x0:D.x1-e,a=l>0?D.z1-t:D.z0,o=$(Px,d).map(e=>e*1.1);b.box(i,s,a,i+e,s+r,a+t,X.DECK,o,Z(4868680),X.EPDM),n.box(i,s,a,i+e,s+r,a+t,`equipment`)}for(let e=0,t=d()<.8?(_-g)*(y-v)>90&&d()<.5?2:1:0;e<t&&!(D.x1-D.x0<2||D.z1-D.z0<2);e++){let e=D.x0+d()*(D.x1-D.x0),t=D.z0+d()*(D.z1-D.z0),r=Math.min(e-g,_-e,t-v,y-t)+1.6,a=Math.min(r,2.4+d()*2.4),o=3+d()*4;b.cyl(e,t,.15,s,s+o,Z(4865588),6,X.DECK),n.cyl(e,t,s,s+o,.14,.14,`pole`),i.add(e,s+o-a*.55,t,a,.3)}a.yard++}}function sx(e,t,n,r){let i=t();return e===`glass`?i<.5?X.GRAVEL:i<.75?X.BITUMEN:X.PAVERS:r>85?i<.42?X.GRAVEL:i<.62?X.BITUMEN:i<.74?X.EPDM:i<.84?X.PAVERS:X.TAN:e===`postwar`?i<.3?X.GRAVEL:i<.5?X.BITUMEN:i<.65?X.MEMBRANE:i<.8?X.EPDM:i<.9?X.SILVER:X.TAR:e===`deco`?i<.45?X.GRAVEL:i<.7?X.TAN:i<.92?X.PAVERS:X.RED:e===`walkup`||n.harlem>.5?i<.32?X.TAR:i<.56?X.SILVER:i<.74?X.BITUMEN:i<.8?X.RED:i<.92?X.GRAVEL:X.EPDM:e===`apt`?i<.26?X.TAR:i<.48?X.GRAVEL:i<.62?X.SILVER:i<.76?X.TAN:i<.81?X.RED:X.BITUMEN:i<.25?X.TAR:i<.45?X.BITUMEN:i<.6?X.GRAVEL:i<.7?X.MEMBRANE:i<.82?X.SILVER:i<.87?X.RED:X.TAN}var cx,X,lx,ux,dx,fx,px,mx,Z,Q,$,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx=t((()=>{qg(),ag(),zg(),dv(),yy(),jg(),xy(),wy(),vb(),Jb(),Uy(),Pb(),cx=256,X={TAR:0,GRAVEL:1,TAN:2,MEMBRANE:3,BITUMEN:4,PAVERS:5,DECK:6,GREEN:7,METAL:8,PADS:9,RED:10,SILVER:11,EPDM:12,LAWN:13,LOUVRE:14,SOLAR:15,STAVES:16,GLASS:17,FAN:18},lx=[12,8,8,18,10,4.8,4.2,10,3,3.6,10,12,15,6,3,2,3,3,1],ux=[.92,.95,.95,.6,.85,.85,.8,.95,.55,.9,.8,.5,.75,.95,.6,.22,.85,.12,.6],dx=[1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0],fx=[0,0,0,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],px=[1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0],mx={[X.TAR]:[Tg.ROOF,[.95,.95,.93]],[X.GRAVEL]:[Tg.ROOF_GRAVEL,[1,.98,.95]],[X.TAN]:[Tg.ROOF_GRAVEL,[1,.85,.7]],[X.MEMBRANE]:[Tg.ROOF_MEMBRANE,[.92,.92,.9]],[X.BITUMEN]:[Tg.ROOF,[1.1,1.1,1.08]],[X.PAVERS]:[Tg.ROOF_PAVERS,[1,.98,.94]],[X.DECK]:[Tg.ROOF_PAVERS,[.8,.62,.48]],[X.GREEN]:[Tg.ROOF_GREEN,[.8,.85,.75]],[X.RED]:[Tg.ROOF,[1.35,.85,.72]],[X.SILVER]:[Tg.ROOF_MEMBRANE,[.8,.8,.8]],[X.EPDM]:[Tg.ROOF,[.62,.62,.62]],[X.LAWN]:[Tg.ROOF_GREEN,[.85,.95,.8]]},Z=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255].map(e=>e**2.2),Q=(e,t,n=.08)=>{let r=1+(t()-.5)*2*n;return e.map(e=>e*r)},$=(e,t)=>e[Math.floor(t()*e.length)],hx=class{constructor(e=Float32Array,t=1024){this.T=e,this.a=new e(t),this.length=0}push(...e){if(this.length+e.length>this.a.length){let t=new this.T(Math.max(Math.ceil(this.a.length*1.5),this.length+e.length));t.set(this.a),this.a=t}for(let t=0;t<e.length;t++)this.a[this.length++]=e[t]}out(e=this.T){return e===this.T?this.a.slice(0,this.length):e.from(this.a.subarray(0,this.length))}},gx=class{static workerId=`RB`;constructor(){this.p=new hx,this.n=new hx,this.uv=new hx,this.c=new hx,this.m=new hx,this.e=new hx,this.i=new hx(Uint32Array),this.v=0}_v(e,t,n,r,i,a,o,s,c,l,u){return this.p.push(e,t,n),this.n.push(r,i,a),this.uv.push(o,s),this.c.push(c[0],c[1],c[2]),this.m.push(l[0],l[1],l[2],l[3]),this.e.push(u[0],u[1],u[2],u[3]),this.v++}skin(e,t,n,r,i,a,o,s,c,l,u=1.2){let d=1/lx[a],f=(e,t)=>l?[-t+s,-e+c]:[e+s,-t+c],p=f(e,t),m=f(n,r),h=[Math.min(p[0],m[0]),Math.min(p[1],m[1]),Math.max(p[0],m[0]),Math.max(p[1],m[1])],g=[a,d,u,0],_=[[e,r],[n,r],[n,t],[e,t]].map(([e,t])=>{let[n,r]=f(e,t);return this._v(e,i,t,0,1,0,n,r,o,g,h)});return this.i.push(_[0],_[1],_[2],_[0],_[2],_[3]),{x0:e,z0:t,x1:n,z1:r,y:i,U:f,M:g,E:h,col:o}}box(e,t,n,r,i,a,o,s,c=null,l=null,u=0){let d=[o,1/lx[o>=0?o:8],0,0],f=[t,0,0,0],p=[[[1,0,0],[[r,t,a],[r,t,n],[r,i,n],[r,i,a]],(e,t,n)=>[-n,t]],[[-1,0,0],[[e,t,n],[e,t,a],[e,i,a],[e,i,n]],(e,t,n)=>[n,t]],[[0,0,1],[[e,t,a],[r,t,a],[r,i,a],[e,i,a]],(e,t,n)=>[e,t]],[[0,0,-1],[[r,t,n],[e,t,n],[e,i,n],[r,i,n]],(e,t,n)=>[-e,t]]];for(let[e,t,n]of p){let r=t.map(([t,r,i])=>{let[a,o]=n(t,r,i);return this._v(t,r,i,e[0],e[1],e[2],a,o,s,d,f)});this.i.push(r[0],r[1],r[2],r[0],r[2],r[3])}if(c===!1)return;let m=l??o,h=[m,1/lx[m>=0?m:8],0,u],g=[[e,a],[r,a],[r,n],[e,n]].map(([e,t])=>this._v(e,i,t,0,1,0,e,-t,c??s,h,f));this.i.push(g[0],g[1],g[2],g[0],g[2],g[3])}obox(e,t,n,r,i,a,o,s=null,c=null){let l=[a,1/lx[a>=0?a:8],0,0],u=[c??e[1]-Math.abs(t[1]*r[1])-Math.abs(t[0]*n[1])-Math.abs(t[2]*i[1]),0,0,0],d=(a,o,s)=>[e[0]+n[0]*a*t[0]+r[0]*o*t[1]+i[0]*s*t[2],e[1]+n[1]*a*t[0]+r[1]*o*t[1]+i[1]*s*t[2],e[2]+n[2]*a*t[0]+r[2]*o*t[1]+i[2]*s*t[2]],f=[[n,1,`yz`],[n,-1,`yz`],[r,1,`xz`],[r,-1,`xz`],[i,1,`xy`],[i,-1,`xy`]];for(let[e,n,r]of f){let i;i=r===`yz`?[[n,-1,n],[n,-1,-n],[n,1,-n],[n,1,n]]:r===`xz`?[[-1,n,n],[1,n,n],[1,n,-n],[-1,n,-n]]:[[-n,-1,n],[n,-1,n],[n,1,n],[-n,1,n]];let a=r===`xz`&&n>0&&s?s:o,c=i.map(([i,o,s])=>{let c=d(i,o,s),f=r===`yz`?s*t[2]:i*t[0],p=r===`xz`?s*t[2]:o*t[1];return this._v(c[0],c[1],c[2],e[0]*n,e[1]*n,e[2]*n,f,p,a,l,u)});this.i.push(c[0],c[1],c[2],c[0],c[2],c[3])}}disc(e,t,n,r,i,a=10){let o=i===wx,s=o?[X.FAN,1,0,0]:[-1,1,0,0],c=[t-1,0,0,0],l=o?[.42,.42,.42]:i;o&&(a=Math.max(a,12));let u=this._v(e,t,n,0,1,0,.5,.5,l,s,c),d=[];for(let i=0;i<=a;i++){let o=i/a*Math.PI*2;d.push(this._v(e+Math.cos(o)*r,t,n+Math.sin(o)*r,0,1,0,.5+Math.cos(o)*.5,.5-Math.sin(o)*.5,l,s,c))}for(let e=0;e<a;e++)this.i.push(u,d[e+1],d[e])}cyl(e,t,n,r,i,a,o=10,s=X.METAL,c=null){if(c===wx&&o>=6){let o=i-r;this.lathe([e,r,t],[0,1,0],[[n,0],[n,o+.08],[n*.9,o+.08],[n*.9,o*.5]],12,a,s,{base:r-.5}),this.disc(e,r+o*.5,t,n*.9,wx,12);return}this.lathe([e,r,t],[0,1,0],[[n,0],[n,i-r]],o,a,s,{cap:c??a,base:r})}lathe(e,t,n,r,i,a,o={}){let s=[a,1/lx[a>=0?a:8],0,0],c=[o.base??e[1],0,0,0],l=new W(...t).normalize(),u=Math.abs(l.y)<.9?new W(0,1,0):new W(1,0,0),d=new W().crossVectors(l,u).normalize(),f=new W().crossVectors(d,l),p=[];for(let t=0;t<n.length;t++){let[a,u]=n[t],m=n[Math.max(0,t-1)],h=n[Math.min(n.length-1,t+1)],g=h[0]-m[0],_=h[1]-m[1],v=Math.hypot(g,_)||1,y=_/v,b=-g/v,x=[];for(let t=0;t<=r;t++){let n=(o.rot0??0)+t/r*Math.PI*2,p=Math.cos(n),m=Math.sin(n),h=d.x*p+f.x*m,g=d.y*p+f.y*m,_=d.z*p+f.z*m,v=[e[0]+h*a+l.x*u,e[1]+g*a+l.y*u,e[2]+_*a+l.z*u],S=[h*y+l.x*b,g*y+l.y*b,_*y+l.z*b];x.push(this._v(v[0],v[1],v[2],S[0],S[1],S[2],n*Math.max(a,.3),u,i,s,c))}p.push(x)}for(let e=0;e+1<p.length;e++)for(let t=0;t<r;t++){let n=p[e][t],r=p[e][t+1],i=p[e+1][t],a=p[e+1][t+1];this.i.push(r,n,i,r,i,a),o.back&&this.i.push(r,i,n,r,a,i)}if(o.back,o.cap){let[t,i]=n[n.length-1];if(t>.001){let n=[e[0]+l.x*i,e[1]+l.y*i,e[2]+l.z*i],a=this._v(n[0],n[1],n[2],l.x,l.y,l.z,n[0],-n[2],o.cap,s,c),u=[];for(let e=0;e<=r;e++){let i=(o.rot0??0)+e/r*Math.PI*2,a=Math.cos(i),p=Math.sin(i),m=[n[0]+(d.x*a+f.x*p)*t,n[1]+(d.y*a+f.y*p)*t,n[2]+(d.z*a+f.z*p)*t];u.push(this._v(m[0],m[1],m[2],l.x,l.y,l.z,m[0],-m[2],o.cap,s,c))}for(let e=0;e<r;e++)this.i.push(a,u[e+1],u[e])}}}build(){if(!this.v)return null;let e=new mo;return e.setAttribute(`position`,new K(this.p.out(),3)),e.setAttribute(`normal`,new K(this.n.out(),3)),e.setAttribute(`uv`,new K(this.uv.out(),2)),e.setAttribute(`color`,new K(this.c.out(),3)),e.setAttribute(`aM`,new K(this.m.out(),4)),e.setAttribute(`aE`,new K(this.e.out(),4)),e.setIndex(new K(this.i.out(this.v>65535?Uint32Array:Uint16Array),1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},_x=class{constructor(){this.p=new hx,this.c=new hx,this.i=new hx(Uint32Array),this.v=0}_v(e,t,n,r){return this.p.push(e,t,n),this.c.push(r**.92,r,r**1.12),this.v++}ring(e,t,n,r,i,a,o,s=null){let c=t-a,l=n-a,u=r+a,d=i+a;s&&(c=Math.max(c,s.x0),l=Math.max(l,s.z0),u=Math.min(u,s.x1),d=Math.min(d,s.z1));let f=e+.02,p=this._v(t,f,n,o),m=this._v(r,f,n,o),h=this._v(r,f,i,o),g=this._v(t,f,i,o),_=this._v(c,f,l,1),v=this._v(u,f,l,1),y=this._v(u,f,d,1),b=this._v(c,f,d,1);this.i.push(_,p,m,_,m,v,v,m,h,v,h,y,y,h,g,y,g,b,b,g,p,b,p,_)}band(e,t,n,r,i,a,o){(r-t<2*a+.5||i-n<2*a+.5)&&(a=Math.min(r-t,i-n)*.3);let s=e+.02,c=this._v(t,s,n,o),l=this._v(r,s,n,o),u=this._v(r,s,i,o),d=this._v(t,s,i,o),f=this._v(t+a,s,n+a,1),p=this._v(r-a,s,n+a,1),m=this._v(r-a,s,i-a,1),h=this._v(t+a,s,i-a,1);this.i.push(c,f,p,c,p,l,l,p,m,l,m,u,u,m,h,u,h,d,d,h,f,d,f,c)}build(){if(!this.v)return null;let e=new mo;return e.setAttribute(`position`,new K(this.p.out(),3)),e.setAttribute(`color`,new K(this.c.out(),3)),e.setIndex(new K(this.i.out(this.v>65535?Uint32Array:Uint16Array),1)),e.computeBoundingSphere(),e}},vx=class{constructor(){this.p=new hx,this.s=new hx,this.t=new hx,this.i=new hx(Uint32Array),this.v=0}wall(e,t,n,r,i,a,o,s,c,l,u=[1,1,1],d=0){let f=.03,p=Math.hypot(n-e,r-t);if(p<1||s<1)return;let m=e+i*f,h=t+a*f,g=n+i*f,_=r+a*f,v=[[m,o,h,l,0],[g,o,_,l+p,0],[g,o-s,_,l+p,s],[m,o-s,h,l,s]],y=this.v;for(let[e,t,n,r,i]of v)this.p.push(e,t,n),this.s.push(r,i,s,c),this.t.push(u[0],u[1],u[2],d),this.v++;this.i.push(y,y+1,y+2,y,y+2,y+3)}build(){if(!this.v)return null;let e=new mo;return e.setAttribute(`position`,new K(this.p.out(),3)),e.setAttribute(`aS`,new K(this.s.out(),4)),e.setAttribute(`aT`,new K(this.t.out(),4)),e.setIndex(new K(this.i.out(this.v>65535?Uint32Array:Uint16Array),1)),e.computeBoundingSphere(),e}},yx=by.indexOf(`watertower`),bx=by.indexOf(`bulkhead`),xx=by.indexOf(`equipment`),Sx=class{constructor(e,t=2.5){this.C=16,this.h=/* @__PURE__ */ new Map;let n=e.b;for(let r=0;r<e.t.length;r++){let i=r*6;n[i+4]<t||this._ins(n[i],n[i+1],n[i+2],n[i+3],n[i+4],n[i+5],e.k[r],e.t[r])}}_ins(e,t,n,r,i,a,o=-1,s=0){let c=this.C,l=[e,t,n,r,i,a,o,s];for(let t=Math.floor(e/c);t<=Math.floor(r/c);t++)for(let e=Math.floor(n/c);e<=Math.floor(a/c);e++){let n=t*100003+e,r=this.h.get(n);r||this.h.set(n,r=[]),r.push(l)}}hit(e,t,n,r,i,a=4){let o=this.C;for(let s=Math.floor(e/o);s<=Math.floor(n/o);s++)for(let c=Math.floor(t/o);c<=Math.floor(r/o);c++){let o=this.h.get(s*100003+c);if(o){for(let s of o)if(s[4]>i+.05&&s[1]<i+a&&n>s[0]&&e<s[3]&&r>s[2]&&t<s[5])return!0}}return!1}on(e,t,n,r,i){let a=this.C,o=/* @__PURE__ */ new Set;for(let s=Math.floor(e/a);s<=Math.floor(n/a);s++)for(let c=Math.floor(t/a);c<=Math.floor(r/a);c++){let a=this.h.get(s*100003+c);if(a)for(let s of a)Math.abs(s[1]-i)<.3&&s[0]>=e-.5&&s[3]<=n+.5&&s[2]>=t-.5&&s[5]<=r+.5&&o.add(s)}return[...o]}add(e,t,n,r,i,a,o=-1){this._ins(e,t,n,r,i,a,o)}},Cx=[9079687,8159101,9868171,7633530,9209462,7172724,10395288,8357759,10787978,6252136,8622218,9076592].map(Z),wx=Z(3948096),Tx=Z(11053737),Z(2831416),Ex=Z(7303535),[5069363,6055480,7035444,4543537,7757882].map(Z),Dx=Z(9077881),Ox=Z(8020040),kx=[14209730,3099196,8203813,2898514].map(Z),Ax=[5922400,4869455,7038560,4146246].map(Z),jx=[3947064,4867392,5991010,7232072].map(Z),Mx=[12105390,10396834,9344652,12894130].map(Z),Nx=Z(7227964),Px=[6968384,5918792,8022616,9079430].map(Z),Fx=[8751239,7633272,9407362,6778479].map(Z),Ix=[9079948,8014390,11048008,11842218,6122354,7040624].map(Z),Lx=[10262664,7238760,9080716,11906710,8224632].map(Z),Rx=[5198934,3947836,7226934,8016962,6709852,6185568,5662814,7236194,4736063].map(Z),zx=[6052180,5131336,6709594,5723472,6973024,4867908].map(Z),Bx=(e,t)=>{let n=.3,r={nx:Math.abs(e.x0-t.x0)<n?t.sides.nx:`setback`,px:Math.abs(e.x1-t.x1)<n?t.sides.px:`setback`,nz:Math.abs(e.z0-t.z0)<n?t.sides.nz:`setback`,pz:Math.abs(e.z1-t.z1)<n?t.sides.pz:`setback`};return e.sides&&Object.assign(r,e.sides),r},Vx={deco:1,postwar:1,apt:1,loft:1},Hx={[X.GRAVEL]:[X.MEMBRANE,X.BITUMEN,X.EPDM,X.SILVER],[X.PAVERS]:[X.GRAVEL,X.BITUMEN,X.MEMBRANE],[X.TAN]:[X.GRAVEL,X.BITUMEN,X.SILVER],[X.BITUMEN]:[X.GRAVEL,X.SILVER,X.MEMBRANE,X.TAR],[X.MEMBRANE]:[X.GRAVEL,X.BITUMEN,X.EPDM],[X.EPDM]:[X.MEMBRANE,X.GRAVEL,X.BITUMEN],[X.TAR]:[X.SILVER,X.BITUMEN,X.GRAVEL],[X.SILVER]:[X.TAR,X.BITUMEN,X.MEMBRANE],[X.RED]:[X.TAR,X.SILVER]},Ux=[1.02,.99,.94],Wx=[.92,.96,1],Gx=[1,1,1]}));globalThis.__spiderbenchQuality=`mobile`;let qx=Promise.all([Promise.resolve().then(()=>(hg(),cg)),Promise.resolve().then(()=>(jg(),Sg)),Promise.resolve().then(()=>(Kx(),Yb)),Promise.resolve().then(()=>(Q_(),G_)),Promise.resolve().then(()=>(sv(),iv)),Promise.resolve().then(()=>(rv(),$_))]);qx.then(()=>self.postMessage({type:`ready`})).catch(e=>self.postMessage({type:`init-error`,message:String(e.message)})),self.onmessage=async({data:e})=>{if(e.type===`build`)try{let[t,n,r,i,a,o]=await qx;if(e.recipe.version!==1)throw Error(`Unsupported recipe codec`);let s={MB:t.MB,FacadeBuilder:n.FacadeBuilder,RB:r.RB}[e.recipe.builder];if(!s)throw Error(`Unknown geometry builder`);let c=i.expandPacket(s,e.recipe,e.options),l;do l=c.next();while(!l.done);let u=l.value;u&&a.compactGeometry(u);let d=o.packGeometry(u);self.postMessage({type:`result`,id:e.id,geometry:d},o.geometryTransferables(d))}catch(t){self.postMessage({type:`error`,id:e.id,message:String(t.message)})}}})();