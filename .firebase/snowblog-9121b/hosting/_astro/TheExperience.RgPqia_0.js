import{r as nt,w as cn,u as rt,i as lu,g as yf,o as xf,t as Io,c as og,a as cu,n as lg,b as wo,d as Mf,e as Pt,f as bi,h as cg,j as bf,k as $r,s as sr,l as wf,m as hr,p as Jr,q as ug,v as hg,x as uc,y as os,z as dg,A as gh,F as fg,B as pg,C as Sf,D as mg,E as wi,G as er,H as vh,I as pl,J as gg,K as vg,L as _g,S as yg,M as xg}from"./runtime-core.esm-bundler.MlPhw38J.js";import{r as Mg}from"./runtime-dom.esm-bundler.RFckeph1.js";/* empty css                             */import{_ as bg}from"./_plugin-vue_export-helper.x3n3nnut.js";const wg="modulepreload",Sg=function(s){return"/"+s},_h={},Eg=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link");i=Promise.all(t.map(a=>{if(a=Sg(a),a in _h)return;_h[a]=!0;const o=a.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!n)for(let h=r.length-1;h>=0;h--){const d=r[h];if(d.href===a&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":wg,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ls="162",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ef=0,hc=1,Tf=2,Tg=3,Af=0,uu=1,hu=2,Un=3,zn=0,Xt=1,on=2,ii=0,ar=1,So=2,dc=3,fc=4,Rf=5,Mi=100,Cf=101,Pf=102,pc=103,mc=104,Lf=200,If=201,Uf=202,Nf=203,Eo=204,To=205,Df=206,Of=207,Ff=208,Bf=209,zf=210,kf=211,Hf=212,Vf=213,Gf=214,Wf=0,Xf=1,Yf=2,Os=3,qf=4,jf=5,Zf=6,Kf=7,ea=0,$f=1,Jf=2,On=0,Qf=1,ep=2,tp=3,du=4,np=5,ip=6,rp=7,gc="attached",sp="detached",Uo=300,ri=301,Ai=302,Fs=303,Bs=304,cs=306,si=1e3,Ot=1001,dr=1002,bt=1003,Qr=1004,Ag=1004,$n=1005,Rg=1005,pt=1006,or=1007,Cg=1007,pn=1008,Pg=1008,Rn=1009,ap=1010,op=1011,No=1012,fu=1013,ei=1014,fn=1015,fr=1016,pu=1017,mu=1018,Si=1020,lp=1021,$t=1023,cp=1024,up=1025,Ei=1026,pr=1027,gu=1028,vu=1029,hp=1030,_u=1031,yu=1033,po=33776,mo=33777,go=33778,vo=33779,vc=35840,_c=35841,yc=35842,xc=35843,xu=36196,Mc=37492,bc=37496,wc=37808,Sc=37809,Ec=37810,Tc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Lc=37816,Ic=37817,Uc=37818,Nc=37819,Dc=37820,Oc=37821,_o=36492,Fc=36494,Bc=36495,dp=36283,zc=36284,kc=36285,Hc=36286,fp=2200,pp=2201,mp=2202,mr=2300,Ri=2301,yo=2302,tr=2400,nr=2401,zs=2402,Do=2500,Mu=2501,gp=0,bu=1,Ao=2,vp=3200,_p=3201,Pi=0,yp=1,Jn="",an="srgb",li="srgb-linear",Oo="display-p3",ta="display-p3-linear",ks="linear",ft="srgb",Hs="rec709",Vs="p3",Lg=0,$i=7680,Ig=7681,Ug=7682,Ng=7683,Dg=34055,Og=34056,Fg=5386,Bg=512,zg=513,kg=514,Hg=515,Vg=516,Gg=517,Wg=518,Vc=519,xp=512,Mp=513,bp=514,wu=515,wp=516,Sp=517,Ep=518,Tp=519,Gs=35044,Xg=35048,Yg=35040,qg=35045,jg=35049,Zg=35041,Kg=35046,$g=35050,Jg=35042,Qg="100",Gc="300 es",Ro=1035,Dn=2e3,Ws=2001;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const lr=Math.PI/180,es=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function e0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function t0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ls(s,e,t){return(1-t)*s+t*e}function n0(s,e,t,n){return Ls(s,e,1-Math.exp(-t*n))}function i0(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function r0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function s0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function a0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function o0(s,e){return s+Math.random()*(e-s)}function l0(s){return s*(.5-Math.random())}function c0(s){s!==void 0&&(yh=s);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(s){return s*lr}function h0(s){return s*es}function Wc(s){return(s&s-1)===0&&s!==0}function d0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Co(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function f0(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gr={DEG2RAD:lr,RAD2DEG:es,generateUUID:gn,clamp:Tt,euclideanModulo:Su,mapLinear:e0,inverseLerp:t0,lerp:Ls,damp:n0,pingpong:i0,smoothstep:r0,smootherstep:s0,randInt:a0,randFloat:o0,randFloatSpread:l0,seededRandom:c0,degToRad:u0,radToDeg:h0,isPowerOfTwo:Wc,ceilPowerOfTwo:d0,floorPowerOfTwo:Co,setQuaternionFromProperEuler:f0,normalize:Ye,denormalize:Jt};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],x=i[1],_=i[4],M=i[7],C=i[2],w=i[5],E=i[8];return r[0]=a*v+o*x+l*C,r[3]=a*p+o*_+l*w,r[6]=a*g+o*M+l*E,r[1]=c*v+u*x+h*C,r[4]=c*p+u*_+h*w,r[7]=c*g+u*M+h*E,r[2]=d*v+f*x+m*C,r[5]=d*p+f*_+m*w,r[8]=d*g+f*M+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new Xe;function Ap(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const p0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Wr(s,e){return new p0[s](e)}function Xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rp(){const s=Xs("canvas");return s.style.display="block",s}const xh={};function Cp(s){s in xh||(xh[s]=!0,console.warn(s))}const Mh=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bh=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[li]:{transfer:ks,primaries:Hs,toReference:s=>s,fromReference:s=>s},[an]:{transfer:ft,primaries:Hs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ta]:{transfer:ks,primaries:Vs,toReference:s=>s.applyMatrix3(bh),fromReference:s=>s.applyMatrix3(Mh)},[Oo]:{transfer:ft,primaries:Vs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(bh),fromReference:s=>s.applyMatrix3(Mh).convertLinearToSRGB()}},m0=new Set([li,ta]),lt={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!m0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ma[e].toReference,i=ma[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ma[s].primaries},getTransfer:function(s){return s===Jn?ks:ma[s].transfer}};function jr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mr;class Eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Xs("canvas")),Mr.width=e.width,Mr.height=e.height;const n=Mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=jr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g0=0;class ir{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vl(i[a].image)):r.push(vl(i[a]))}else r=vl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v0=0;class mt extends Hn{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Ot,i=Ot,r=pt,a=pn,o=$t,l=Rn,c=mt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=gn(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Uo;mt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(f+1)/2,C=(g+1)/2,w=(u+d)/4,E=(h+v)/4,b=(m+p)/4;return _>M&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=E/n):M>C?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=b/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=E/r,i=b/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-m)*(p-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pp extends Hn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ir(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fo extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _0 extends wn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Fo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Tu extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y0 extends wn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Tu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==m){let p=1-o;const g=l*d+c*f+u*m+h*v,x=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,g*x);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const M=o*x;if(l=l*p+d*M,c=c*p+f*M,u=u*p+m*M,h=h*p+v*M,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new I,wh=new Ft;class Bt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),va.subVectors(this.max,ms),br.subVectors(e.a,ms),wr.subVectors(e.b,ms),Sr.subVectors(e.c,ms),ui.subVectors(wr,br),hi.subVectors(Sr,wr),Fi.subVectors(br,Sr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Fi.y,Fi.x,0];return!yl(t,br,wr,Sr,va)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,br,wr,Sr,va))?!1:(_a.crossVectors(ui,hi),t=[_a.x,_a.y,_a.z],yl(t,br,wr,Sr,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,ga=new Bt,br=new I,wr=new I,Sr=new I,ui=new I,hi=new I,Fi=new I,ms=new I,va=new I,_a=new I,Bi=new I;function yl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bi.fromArray(s,r);const o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const x0=new Bt,gs=new I,xl=new I;class zt{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(xl)),this.expandByPoint(gs.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new I,Ml=new I,ya=new I,di=new I,bl=new I,xa=new I,wl=new I;class _r{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ml.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=di.dot(this.direction),l=-di.dot(ya),c=di.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ml).addScaledVector(ya,d),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){bl.subVectors(t,e),xa.subVectors(n,e),wl.crossVectors(bl,xa);let a=this.direction.dot(wl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(xa.crossVectors(di,xa));if(l<0)return null;const c=o*this.direction.dot(bl.cross(di));if(c<0||l+c>a)return null;const u=-o*di.dot(wl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,m,v,p){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,m,v,p)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,v=c*h;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,b0)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),fi.crossVectors(n,hn),fi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),fi.crossVectors(n,hn)),fi.normalize(),Ma.crossVectors(hn,fi),i[0]=fi.x,i[4]=Ma.x,i[8]=hn.x,i[1]=fi.y,i[5]=Ma.y,i[9]=hn.y,i[2]=fi.z,i[6]=Ma.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],x=n[3],_=n[7],M=n[11],C=n[15],w=i[0],E=i[4],b=i[8],T=i[12],y=i[1],S=i[5],O=i[9],W=i[13],L=i[2],G=i[6],B=i[10],Y=i[14],j=i[3],Z=i[7],oe=i[11],ce=i[15];return r[0]=a*w+o*y+l*L+c*j,r[4]=a*E+o*S+l*G+c*Z,r[8]=a*b+o*O+l*B+c*oe,r[12]=a*T+o*W+l*Y+c*ce,r[1]=u*w+h*y+d*L+f*j,r[5]=u*E+h*S+d*G+f*Z,r[9]=u*b+h*O+d*B+f*oe,r[13]=u*T+h*W+d*Y+f*ce,r[2]=m*w+v*y+p*L+g*j,r[6]=m*E+v*S+p*G+g*Z,r[10]=m*b+v*O+p*B+g*oe,r[14]=m*T+v*W+p*Y+g*ce,r[3]=x*w+_*y+M*L+C*j,r[7]=x*E+_*S+M*G+C*Z,r[11]=x*b+_*O+M*B+C*oe,r[15]=x*T+_*W+M*Y+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+p*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+g*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],x=h*p*c-v*d*c+v*l*f-o*p*f-h*l*g+o*d*g,_=m*d*c-u*p*c-m*l*f+a*p*f+u*l*g-a*d*g,M=u*v*c-m*h*c+m*o*f-a*v*f-u*o*g+a*h*g,C=m*h*l-u*v*l-m*o*d+a*v*d+u*o*p-a*h*p,w=t*x+n*_+i*M+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(v*d*r-h*p*r-v*i*f+n*p*f+h*i*g-n*d*g)*E,e[2]=(o*p*r-v*l*r+v*i*c-n*p*c-o*i*g+n*l*g)*E,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*E,e[4]=_*E,e[5]=(u*p*r-m*d*r+m*i*f-t*p*f-u*i*g+t*d*g)*E,e[6]=(m*l*r-a*p*r-m*i*c+t*p*c+a*i*g-t*l*g)*E,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=M*E,e[9]=(m*h*r-u*v*r-m*n*f+t*v*f+u*n*g-t*h*g)*E,e[10]=(a*v*r-m*o*r+m*n*c-t*v*c-a*n*g+t*o*g)*E,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*E,e[12]=C*E,e[13]=(u*v*i-m*h*i+m*n*d-t*v*d-u*n*p+t*h*p)*E,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*p-t*o*p)*E,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,v=a*u,p=a*h,g=o*h,x=l*c,_=l*u,M=l*h,C=n.x,w=n.y,E=n.z;return i[0]=(1-(v+g))*C,i[1]=(f+M)*C,i[2]=(m-_)*C,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(d+g))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(m+_)*E,i[9]=(p-x)*E,i[10]=(1-(d+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Er.set(i[0],i[1],i[2]).length();const a=Er.set(i[4],i[5],i[6]).length(),o=Er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,u=1/a,h=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Dn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===Dn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ws)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Dn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*c,f=(n+i)*u;let m,v;if(o===Dn)m=(a+r)*h,v=-2*h;else if(o===Ws)m=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Er=new I,En=new Pe,M0=new I(0,0,0),b0=new I(1,1,1),fi=new I,Ma=new I,hn=new I,Sh=new Pe,Eh=new Ft;class en{constructor(e=0,t=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w0=0;const Th=new I,Tr=new Ft,Yn=new Pe,ba=new I,vs=new I,S0=new I,E0=new Ft,Ah=new I(1,0,0),Rh=new I(0,1,0),Ch=new I(0,0,1),T0={type:"added"},A0={type:"removed"},Sl={type:"childadded",child:null},El={type:"childremoved",child:null};class at extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new I,t=new en,n=new Ft,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(vs,ba,this.up):Yn.lookAt(ba,vs,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),Tr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(T0),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new I(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new I,qn=new I,Tl=new I,jn=new I,Ar=new I,Rr=new I,Ph=new I,Al=new I,Rl=new I,Cl=new I;class ln{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),qn.subVectors(n,t),Tl.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(qn),l=Tn.dot(Tl),c=qn.dot(qn),u=qn.dot(Tl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),qn.subVectors(e,t),Tn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ar.subVectors(i,n),Rr.subVectors(r,n),Al.subVectors(e,n);const l=Ar.dot(Al),c=Rr.dot(Al);if(l<=0&&c<=0)return t.copy(n);Rl.subVectors(e,i);const u=Ar.dot(Rl),h=Rr.dot(Rl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ar,a);Cl.subVectors(e,r);const f=Ar.dot(Cl),m=Rr.dot(Cl);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Rr,o);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return Ph.subVectors(r,i),o=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Ph,o);const g=1/(p+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(Ar,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Pl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Su(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Pl(a,r,e+1/3),this.g=Pl(a,r,e),this.b=Pl(a,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return lt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Tt(Gt.r*255,0,255))*65536+Math.round(Tt(Gt.g*255,0,255))*256+Math.round(Tt(Gt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=an){lt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(wa);const n=Ls(pi.h,wa.h,t),i=Ls(pi.s,wa.s,t),r=Ls(pi.l,wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ve;ve.NAMES=Lp;let R0=0;class Lt extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=ar,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qt extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qn=C0();function C0(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function sn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Tt(s,-65504,65504),Qn.floatView[0]=s;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function Cs(s){const e=s>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(s&1023)]+Qn.exponentTable[e],Qn.floatView[0]}const P0={toHalfFloat:sn,fromHalfFloat:Cs},Ct=new I,Sa=new re;class et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gs&&(e.usage=this.usage),e}}class L0 extends et{constructor(e,t,n){super(new Int8Array(e),t,n)}}class I0 extends et{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class U0 extends et{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class N0 extends et{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Au extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class D0 extends et{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ru extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class O0 extends et{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Cs(this.array[e*this.itemSize]);return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=sn(t),this}getY(e){let t=Cs(this.array[e*this.itemSize+1]);return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=sn(t),this}getZ(e){let t=Cs(this.array[e*this.itemSize+2]);return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=sn(t),this}getW(e){let t=Cs(this.array[e*this.itemSize+3]);return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=sn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(i),this.array[e+3]=sn(r),this}}class Ce extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let F0=0;const yn=new Pe,Ll=new at,Cr=new I,dn=new Bt,_s=new Bt,Dt=new I;class Ve extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?Ru:Au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(dn.min,_s.min),dn.expandByPoint(Dt),Dt.addVectors(dn.max,_s.max),dn.expandByPoint(Dt)):(dn.expandByPoint(_s.min),dn.expandByPoint(_s.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),Dt.add(Cr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new I,l[b]=new I;const c=new I,u=new I,h=new I,d=new re,f=new re,m=new re,v=new I,p=new I;function g(b,T,y){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(S),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(S),o[b].add(v),o[T].add(v),o[y].add(v),l[b].add(p),l[T].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,T=x.length;b<T;++b){const y=x[b],S=y.start,O=y.count;for(let W=S,L=S+O;W<L;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const _=new I,M=new I,C=new I,w=new I;function E(b){C.fromBufferAttribute(i,b),w.copy(C);const T=o[b];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(w,T);const S=M.dot(l[b])<0?-1:1;a.setXYZW(b,_.x,_.y,_.z,S)}for(let b=0,T=x.length;b<T;++b){const y=x[b],S=y.start,O=y.count;for(let W=S,L=S+O;W<L;W+=3)E(e.getX(W+0)),E(e.getX(W+1)),E(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new et(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Pe,zi=new _r,Ea=new zt,Ih=new I,Pr=new I,Lr=new I,Ir=new I,Il=new I,Ta=new I,Aa=new re,Ra=new re,Ca=new re,Uh=new I,Nh=new I,Dh=new I,Pa=new I,La=new I;class ht extends at{constructor(e=new Ve,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),a?Ta.addScaledVector(Il,u):Ta.addScaledVector(Il.sub(t),u))}t.add(Ta)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(Ea.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Ea,Ih)===null||zi.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const w=o.getX(M),E=o.getX(M+1),b=o.getX(M+2);i=Ia(this,g,e,n,c,u,h,w,E,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const x=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);i=Ia(this,a,e,n,c,u,h,x,_,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const w=M,E=M+1,b=M+2;i=Ia(this,g,e,n,c,u,h,w,E,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const x=p,_=p+1,M=p+2;i=Ia(this,a,e,n,c,u,h,x,_,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function B0(s,e,t,n,i,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===zn,o),l===null)return null;La.copy(o),La.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:s}}function Ia(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Pr),s.getVertexPosition(l,Lr),s.getVertexPosition(c,Ir);const u=B0(s,e,t,n,Pr,Lr,Ir,Pa);if(u){i&&(Aa.fromBufferAttribute(i,o),Ra.fromBufferAttribute(i,l),Ca.fromBufferAttribute(i,c),u.uv=ln.getInterpolation(Pa,Pr,Lr,Ir,Aa,Ra,Ca,new re)),r&&(Aa.fromBufferAttribute(r,o),Ra.fromBufferAttribute(r,l),Ca.fromBufferAttribute(r,c),u.uv1=ln.getInterpolation(Pa,Pr,Lr,Ir,Aa,Ra,Ca,new re)),a&&(Uh.fromBufferAttribute(a,o),Nh.fromBufferAttribute(a,l),Dh.fromBufferAttribute(a,c),u.normal=ln.getInterpolation(Pa,Pr,Lr,Ir,Uh,Nh,Dh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};ln.getNormal(Pr,Lr,Ir,h.normal),u.face=h}return u}class Li extends Ve{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function m(v,p,g,x,_,M,C,w,E,b,T){const y=M/E,S=C/b,O=M/2,W=C/2,L=w/2,G=E+1,B=b+1;let Y=0,j=0;const Z=new I;for(let oe=0;oe<B;oe++){const ce=oe*S-W;for(let Ee=0;Ee<G;Ee++){const Ie=Ee*y-O;Z[v]=Ie*x,Z[p]=ce*_,Z[g]=L,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[p]=0,Z[g]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(Ee/E),h.push(1-oe/b),Y+=1}}for(let oe=0;oe<b;oe++)for(let ce=0;ce<E;ce++){const Ee=d+ce+G*oe,Ie=d+ce+G*(oe+1),q=d+(ce+1)+G*(oe+1),le=d+(ce+1)+G*oe;l.push(Ee,Ie,le),l.push(Ie,q,le),j+=6}o.addGroup(f,j,T),f+=j,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=ts(s[t]);for(const i in n)e[i]=n[i]}return e}function z0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ip(s){return s.getRenderTarget()===null?s.outputColorSpace:lt.workingColorSpace}const na={clone:ts,merge:Kt};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ia extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new I,Oh=new re,Fh=new re;class ct extends ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Fh),t.subVectors(Fh,Oh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Nr=1;class Up extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ct(Ur,Nr,e,t);i.layers=this.layers,this.add(i);const r=new ct(Ur,Nr,e,t);r.layers=this.layers,this.add(r);const a=new ct(Ur,Nr,e,t);a.layers=this.layers,this.add(a);const o=new ct(Ur,Nr,e,t);o.layers=this.layers,this.add(o);const l=new ct(Ur,Nr,e,t);l.layers=this.layers,this.add(l);const c=new ct(Ur,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ra extends mt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Np extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ra(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Li(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ii});r.uniforms.tEquirect.value=t;const a=new ht(i,r),o=t.minFilter;return t.minFilter===pn&&(t.minFilter=pt),new Up(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ul=new I,V0=new I,G0=new Xe;class Nn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ul.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ul),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G0.getNormalMatrix(e),i=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new zt,Ua=new I;class sa{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],v=i[10],p=i[11],g=i[12],x=i[13],_=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,p-f,M-g).normalize(),n[1].setComponents(l+r,d+c,p+f,M+g).normalize(),n[2].setComponents(l+a,d+u,p+m,M+x).normalize(),n[3].setComponents(l-a,d-u,p-m,M-x).normalize(),n[4].setComponents(l-o,d-h,p-v,M-_).normalize(),t===Dn)n[5].setComponents(l+o,d+h,p+v,M+_).normalize();else if(t===Ws)n[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ua.x=i.normal.x>0?e.max.x:e.min.x,Ua.y=i.normal.y>0?e.max.y:e.min.y,Ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function W0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,h){const d=u.array,f=u._updateRange,m=u.updateRanges;if(s.bindBuffer(h,c),f.count===-1&&m.length===0&&s.bufferSubData(h,0,d),m.length!==0){for(let v=0,p=m.length;v<p;v++){const g=m[v];t?s.bufferSubData(h,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count):s.bufferSubData(h,g.start*d.BYTES_PER_ELEMENT,d.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Ii extends Ve{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<u;g++){const x=g*d-a;for(let _=0;_<c;_++){const M=_*h-r;m.push(M,-x,0),v.push(0,0,1),p.push(_/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const _=x+c*g,M=x+c*(g+1),C=x+1+c*(g+1),w=x+1+c*g;f.push(_,M,w),f.push(M,C,w)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
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
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rv=`#ifdef USE_IRIDESCENCE
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
#endif`,sv=`#ifdef USE_BUMPMAP
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
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pv=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gv=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",bv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iv=`#ifdef USE_GRADIENTMAP
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
}`,Uv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Wv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t_=`#if defined( USE_POINTS_UV )
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
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,o_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
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
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,__=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,P_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,D_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q_=`#define DISTANCE
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
}`,ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
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
}`,ry=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ay=`uniform vec3 diffuse;
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
}`,oy=`#define LAMBERT
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
}`,ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cy=`#define MATCAP
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
}`,uy=`#define MATCAP
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
}`,hy=`#define NORMAL
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
}`,dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fy=`#define PHONG
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
}`,py=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,my=`#define STANDARD
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
}`,gy=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vy=`#define TOON
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
}`,_y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yy=`uniform float size;
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
}`,xy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,by=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Sy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:X0,alphahash_pars_fragment:Y0,alphamap_fragment:q0,alphamap_pars_fragment:j0,alphatest_fragment:Z0,alphatest_pars_fragment:K0,aomap_fragment:$0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:ev,begin_vertex:tv,beginnormal_vertex:nv,bsdfs:iv,iridescence_fragment:rv,bumpmap_pars_fragment:sv,clipping_planes_fragment:av,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:lv,clipping_planes_vertex:cv,color_fragment:uv,color_pars_fragment:hv,color_pars_vertex:dv,color_vertex:fv,common:pv,cube_uv_reflection_fragment:mv,defaultnormal_vertex:gv,displacementmap_pars_vertex:vv,displacementmap_vertex:_v,emissivemap_fragment:yv,emissivemap_pars_fragment:xv,colorspace_fragment:Mv,colorspace_pars_fragment:bv,envmap_fragment:wv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Ev,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Bv,envmap_vertex:Av,fog_vertex:Rv,fog_pars_vertex:Cv,fog_fragment:Pv,fog_pars_fragment:Lv,gradientmap_pars_fragment:Iv,lightmap_fragment:Uv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Fv,lights_toon_fragment:zv,lights_toon_pars_fragment:kv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Gv,lights_physical_pars_fragment:Wv,lights_fragment_begin:Xv,lights_fragment_maps:Yv,lights_fragment_end:qv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:$v,map_fragment:Jv,map_pars_fragment:Qv,map_particle_fragment:e_,map_particle_pars_fragment:t_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:r_,morphcolor_vertex:s_,morphnormal_vertex:a_,morphtarget_pars_vertex:o_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:u_,normal_pars_fragment:h_,normal_pars_vertex:d_,normal_vertex:f_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:v_,iridescence_pars_fragment:__,opaque_fragment:y_,packing:x_,premultiplied_alpha_fragment:M_,project_vertex:b_,dithering_fragment:w_,dithering_pars_fragment:S_,roughnessmap_fragment:E_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:R_,shadowmap_vertex:C_,shadowmask_pars_fragment:P_,skinbase_vertex:L_,skinning_pars_vertex:I_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:D_,specularmap_pars_fragment:O_,tonemapping_fragment:F_,tonemapping_pars_fragment:B_,transmission_fragment:z_,transmission_pars_fragment:k_,uv_pars_fragment:H_,uv_pars_vertex:V_,uv_vertex:G_,worldpos_vertex:W_,background_vert:X_,background_frag:Y_,backgroundCube_vert:q_,backgroundCube_frag:j_,cube_vert:Z_,cube_frag:K_,depth_vert:$_,depth_frag:J_,distanceRGBA_vert:Q_,distanceRGBA_frag:ey,equirect_vert:ty,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:ry,meshbasic_vert:sy,meshbasic_frag:ay,meshlambert_vert:oy,meshlambert_frag:ly,meshmatcap_vert:cy,meshmatcap_frag:uy,meshnormal_vert:hy,meshnormal_frag:dy,meshphong_vert:fy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:vy,meshtoon_frag:_y,points_vert:yy,points_frag:xy,shadow_vert:My,shadow_frag:by,sprite_vert:wy,sprite_frag:Sy},ge={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Mn={basic:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ve(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ve(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Kt([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Kt([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Kt([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Kt([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Kt([ge.lights,ge.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Mn.physical={uniforms:Kt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Na={r:0,b:0,g:0},Hi=new en,Ey=new Pe;function Ty(s,e,t,n,i,r,a){const o=new ve(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(p,g){let x=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===cs)?(u===void 0&&(u=new ht(new Li(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ts(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hi.copy(g.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(Hi)),u.material.toneMapped=lt.getTransfer(_.colorSpace)!==ft,(h!==_||d!==_.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ht(new Ii(2,2),new tn({name:"BackgroundMaterial",uniforms:ts(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,g){p.getRGB(Na,Ip(s)),n.buffers.color.setClear(Na.r,Na.g,Na.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(p,g=1){o.set(p),l=g,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:m}}function Ay(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(L,G,B,Y,j){let Z=!1;if(a){const oe=v(Y,B,G);c!==oe&&(c=oe,f(c.object)),Z=g(L,Y,B,j),Z&&x(L,Y,B,j)}else{const oe=G.wireframe===!0;(c.geometry!==Y.id||c.program!==B.id||c.wireframe!==oe)&&(c.geometry=Y.id,c.program=B.id,c.wireframe=oe,Z=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,b(L,G,B,Y),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function m(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,G,B){const Y=B.wireframe===!0;let j=o[L.id];j===void 0&&(j={},o[L.id]=j);let Z=j[G.id];Z===void 0&&(Z={},j[G.id]=Z);let oe=Z[Y];return oe===void 0&&(oe=p(d()),Z[Y]=oe),oe}function p(L){const G=[],B=[],Y=[];for(let j=0;j<i;j++)G[j]=0,B[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:B,attributeDivisors:Y,object:L,attributes:{},index:null}}function g(L,G,B,Y){const j=c.attributes,Z=G.attributes;let oe=0;const ce=B.getAttributes();for(const Ee in ce)if(ce[Ee].location>=0){const q=j[Ee];let le=Z[Ee];if(le===void 0&&(Ee==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),Ee==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;oe++}return c.attributesNum!==oe||c.index!==Y}function x(L,G,B,Y){const j={},Z=G.attributes;let oe=0;const ce=B.getAttributes();for(const Ee in ce)if(ce[Ee].location>=0){let q=Z[Ee];q===void 0&&(Ee==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Ee==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));const le={};le.attribute=q,q&&q.data&&(le.data=q.data),j[Ee]=le,oe++}c.attributes=j,c.attributesNum=oe,c.index=Y}function _(){const L=c.newAttributes;for(let G=0,B=L.length;G<B;G++)L[G]=0}function M(L){C(L,0)}function C(L,G){const B=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;B[L]=1,Y[L]===0&&(s.enableVertexAttribArray(L),Y[L]=1),j[L]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),j[L]=G)}function w(){const L=c.newAttributes,G=c.enabledAttributes;for(let B=0,Y=G.length;B<Y;B++)G[B]!==L[B]&&(s.disableVertexAttribArray(B),G[B]=0)}function E(L,G,B,Y,j,Z,oe){oe===!0?s.vertexAttribIPointer(L,G,B,j,Z):s.vertexAttribPointer(L,G,B,Y,j,Z)}function b(L,G,B,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=Y.attributes,Z=B.getAttributes(),oe=G.defaultAttributeValues;for(const ce in Z){const Ee=Z[ce];if(Ee.location>=0){let Ie=j[ce];if(Ie===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(Ie=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(Ie=L.instanceColor)),Ie!==void 0){const q=Ie.normalized,le=Ie.itemSize,be=t.get(Ie);if(be===void 0)continue;const Re=be.buffer,ee=be.type,A=be.bytesPerElement,D=n.isWebGL2===!0&&(ee===s.INT||ee===s.UNSIGNED_INT||Ie.gpuType===fu);if(Ie.isInterleavedBufferAttribute){const F=Ie.data,P=F.stride,V=Ie.offset;if(F.isInstancedInterleavedBuffer){for(let H=0;H<Ee.locationSize;H++)C(Ee.location+H,F.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let H=0;H<Ee.locationSize;H++)M(Ee.location+H);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let H=0;H<Ee.locationSize;H++)E(Ee.location+H,le/Ee.locationSize,ee,q,P*A,(V+le/Ee.locationSize*H)*A,D)}else{if(Ie.isInstancedBufferAttribute){for(let F=0;F<Ee.locationSize;F++)C(Ee.location+F,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let F=0;F<Ee.locationSize;F++)M(Ee.location+F);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let F=0;F<Ee.locationSize;F++)E(Ee.location+F,le/Ee.locationSize,ee,q,le*A,le/Ee.locationSize*F*A,D)}}else if(oe!==void 0){const q=oe[ce];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(Ee.location,q);break;case 3:s.vertexAttrib3fv(Ee.location,q);break;case 4:s.vertexAttrib4fv(Ee.location,q);break;default:s.vertexAttrib1fv(Ee.location,q)}}}}w()}function T(){O();for(const L in o){const G=o[L];for(const B in G){const Y=G[B];for(const j in Y)m(Y[j].object),delete Y[j];delete G[B]}delete o[L]}}function y(L){if(o[L.id]===void 0)return;const G=o[L.id];for(const B in G){const Y=G[B];for(const j in Y)m(Y[j].object),delete Y[j];delete G[B]}delete o[L.id]}function S(L){for(const G in o){const B=o[G];if(B[L.id]===void 0)continue;const Y=B[L.id];for(const j in Y)m(Y[j].object),delete Y[j];delete B[L.id]}}function O(){W(),u=!0,c!==l&&(c=l,f(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:W,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:M,disableUnusedAttributes:w}}function Ry(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(u[m],h[m]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Cy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=a||e.has("OES_texture_float"),C=_&&M,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:w}}function Py(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Nn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,_=x*4;let M=g.clippingState||null;l.value=M,M=u(m,d,_,f);for(let C=0;C!==_;++C)M[C]=t[C];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,M=f;_!==v;++_,M+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Ly(s){let e=new WeakMap;function t(a,o){return o===Fs?a.mapping=ri:o===Bs&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fs||o===Bs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Np(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class bn extends ia{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Bh=[.125,.215,.35,.446,.526,.582],Qi=20,Nl=new bn,zh=new ve;let Dl=null,Ol=0,Fl=0;const Ji=(1+Math.sqrt(5))/2,Dr=1/Ji,kh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ji,Dr),new I(0,Ji,-Dr),new I(Dr,0,Ji),new I(-Dr,0,Ji),new I(Ji,Dr,0),new I(-Ji,Dr,0)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Ol,Fl),e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:fr,format:$t,colorSpace:li,depthBuffer:!1},i=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Uy(r,e,t)}return i}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Nl)}_sceneToCubeUV(e,t,n,i){const o=new ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(zh),u.toneMapping=On,u.autoClear=!1;const f=new Qt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new ht(new Li,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(zh),v=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):x===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const _=this._cubeSize;Da(i,x*_,g>2?_:0,_,_),u.setRenderTarget(i),v&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Nl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=kh[(i-1)%kh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),v=r/m,p=isFinite(r)?1+Math.floor(u*v):Qi;p>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const g=[];let x=0;for(let E=0;E<Qi;++E){const b=E/v,T=Math.exp(-b*b/2);g.push(T),E===0?x+=T:E<p&&(x+=2*T)}for(let E=0;E<g.length;E++)g[E]=g[E]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const M=this._sizeLods[i],C=3*M*(i>_-Xr?i-_+Xr:0),w=4*(this._cubeSize-M);Da(t,C,w,3*M,2*M),l.setRenderTarget(t),l.render(h,Nl)}}function Iy(s){const e=[],t=[],n=[];let i=s;const r=s-Xr+1+Bh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Xr?l=Bh[a-s+Xr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,p=2,g=1,x=new Float32Array(v*m*f),_=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,b=w>2?0:-1,T=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];x.set(T,v*m*w),_.set(d,p*m*w);const y=[w,w,w,w,w,w];M.set(y,g*m*w)}const C=new Ve;C.setAttribute("position",new et(x,v)),C.setAttribute("uv",new et(_,p)),C.setAttribute("faceIndex",new et(M,g)),e.push(C),i>Xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(s,e,t){const n=new wn(s,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Uy(s,e,t){const n=new Float32Array(Qi),i=new I(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Gh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ny(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fs||l===Bs,u=l===ri||l===Ai;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Xc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Xc(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Oy(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const v=f[m];for(let p=0,g=v.length;p<g;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,M=x.length;_<M;_+=3){const C=x[_+0],w=x[_+1],E=x[_+2];d.push(C,w,w,E,E,C)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const C=_+0,w=_+1,E=_+2;d.push(C,w,w,E,E,C)}}else return;const p=new(Ap(d)?Ru:Au)(d,1);p.version=v;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fy(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){s.drawElements(r,m,o,f*l),t.update(m,r,1)}function h(f,m,v){if(v===0)return;let p,g;if(i)p=s,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,m,o,f*l,v),t.update(m,r,v)}function d(f,m,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<v;g++)this.render(f[g]/l,m[g]);else{p.multiDrawElementsWEBGL(r,m,0,o,f,0,v);let g=0;for(let x=0;x<v;x++)g+=m[x];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function By(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zy(s,e){return s[0]-e[0]}function ky(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hy(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new it,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let v=r.get(u);if(v===void 0||v.count!==m){let O=function(){y.dispose(),r.delete(u),u.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const p=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let E=u.attributes.position.count*w,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*b*4*m),y=new Fo(T,E,b,m);y.type=fn,y.needsUpdate=!0;const S=w*4;for(let W=0;W<m;W++){const L=_[W],G=M[W],B=C[W],Y=E*b*4*W;for(let j=0;j<L.count;j++){const Z=j*S;p===!0&&(a.fromBufferAttribute(L,j),T[Y+Z+0]=a.x,T[Y+Z+1]=a.y,T[Y+Z+2]=a.z,T[Y+Z+3]=0),g===!0&&(a.fromBufferAttribute(G,j),T[Y+Z+4]=a.x,T[Y+Z+5]=a.y,T[Y+Z+6]=a.z,T[Y+Z+7]=0),x===!0&&(a.fromBufferAttribute(B,j),T[Y+Z+8]=a.x,T[Y+Z+9]=a.y,T[Y+Z+10]=a.z,T[Y+Z+11]=B.itemSize===4?a.w:1)}}v={count:m,texture:y,size:new re(E,b)},r.set(u,v),u.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let p=0;for(let x=0;x<d.length;x++)p+=d[x];const g=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",g),h.getUniforms().setValue(s,"morphTargetInfluences",d)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const f=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let _=0;_<f;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<f;_++){const M=m[_];M[0]=_,M[1]=d[_]}m.sort(ky);for(let _=0;_<8;_++)_<f&&m[_][1]?(o[_][0]=m[_][0],o[_][1]=m[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(zy);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let _=0;_<8;_++){const M=o[_],C=M[0],w=M[1];C!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+_)!==v[C]&&u.setAttribute("morphTarget"+_,v[C]),p&&u.getAttribute("morphNormal"+_)!==p[C]&&u.setAttribute("morphNormal"+_,p[C]),i[_]=w,g+=w):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const x=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Vy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Pu extends mt{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=ei),n===void 0&&u===pr&&(n=Si),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Op=new mt,Fp=new Pu(1,1);Fp.compareFunction=wu;const Bp=new Fo,zp=new Tu,kp=new ra,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),jh=new Float32Array(4);function us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Wh[i];if(r===void 0&&(r=new Float32Array(i),Wh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zo(s,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Gy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function Xy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Yy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function qy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;jh.set(n),s.uniformMatrix2fv(this.addr,!1,jh),Ut(t,n)}}function jy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;qh.set(n),s.uniformMatrix3fv(this.addr,!1,qh),Ut(t,n)}}function Zy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Yh.set(n),s.uniformMatrix4fv(this.addr,!1,Yh),Ut(t,n)}}function Ky(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function Jy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function Qy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function ex(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Fp:Op;t.setTexture2D(e||r,i)}function sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zp,i)}function ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kp,i)}function ox(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bp,i)}function lx(s){switch(s){case 5126:return Gy;case 35664:return Wy;case 35665:return Xy;case 35666:return Yy;case 35674:return qy;case 35675:return jy;case 35676:return Zy;case 5124:case 35670:return Ky;case 35667:case 35671:return $y;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}function cx(s,e){s.uniform1fv(this.addr,e)}function ux(s,e){const t=us(e,this.size,2);s.uniform2fv(this.addr,t)}function hx(s,e){const t=us(e,this.size,3);s.uniform3fv(this.addr,t)}function dx(s,e){const t=us(e,this.size,4);s.uniform4fv(this.addr,t)}function fx(s,e){const t=us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function px(s,e){const t=us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mx(s,e){const t=us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gx(s,e){s.uniform1iv(this.addr,e)}function vx(s,e){s.uniform2iv(this.addr,e)}function _x(s,e){s.uniform3iv(this.addr,e)}function yx(s,e){s.uniform4iv(this.addr,e)}function xx(s,e){s.uniform1uiv(this.addr,e)}function Mx(s,e){s.uniform2uiv(this.addr,e)}function bx(s,e){s.uniform3uiv(this.addr,e)}function wx(s,e){s.uniform4uiv(this.addr,e)}function Sx(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Op,r[a])}function Ex(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zp,r[a])}function Tx(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kp,r[a])}function Ax(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bp,r[a])}function Rx(s){switch(s){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return vx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return xx;case 36294:return Mx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}}class Lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Zh(s,e){s.seq.push(e),s.map[e.id]=e}function Ix(s,e,t){const n=s.name,i=n.length;for(Bl.lastIndex=0;;){const r=Bl.exec(n),a=Bl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zh(t,c===void 0?new Cx(o,s,e):new Px(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Lx(o),Zh(t,h)),t=h}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Ix(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Kh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ux=37297;let Nx=0;function Dx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ox(s){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s);let n;switch(e===t?n="":e===Vs&&t===Hs?n="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Vs&&(n="LinearSRGBToLinearDisplayP3"),s){case li:case ta:return[n,"LinearTransferOETF"];case an:case Oo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function $h(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dx(s.getShaderSource(e),a)}else return i}function Fx(s,e){const t=Ox(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Bx(s,e){let t;switch(e){case Qf:t="Linear";break;case ep:t="Reinhard";break;case tp:t="OptimizedCineon";break;case du:t="ACESFilmic";break;case ip:t="AgX";break;case rp:t="Neutral";break;case np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function kx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Hx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Yr(s){return s!==""}function Jh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(s){return s.replace(Gx,Xx)}const Wx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xx(s,e){let t=je[e];if(t===void 0){const n=Wx.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(s){return s.replace(Yx,qx)}function qx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function td(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Zx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ri:case Ai:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function $x(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case $f:e="ENVMAP_BLENDING_MIX";break;case Jf:e="ENVMAP_BLENDING_ADD";break}return e}function Jx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jx(t),c=Zx(t),u=Kx(t),h=$x(t),d=Jx(t),f=t.isWebGL2?"":zx(t),m=kx(t),v=Hx(r),p=i.createProgram();let g,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Yr).join(`
`),g.length>0&&(g+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Yr).join(`
`),x.length>0&&(x+=`
`)):(g=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),x=[f,td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?je.tonemapping_pars_fragment:"",t.toneMapping!==On?Bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Fx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Yc(a),a=Jh(a,t),a=Qh(a,t),o=Yc(o),o=Jh(o,t),o=Qh(o,t),a=ed(a),o=ed(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=_+g+a,C=_+x+o,w=Kh(i,i.VERTEX_SHADER,M),E=Kh(i,i.FRAGMENT_SHADER,C);i.attachShader(p,w),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(O){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(E).trim();let B=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,E);else{const j=$h(i,w,"vertex"),Z=$h(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+j+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||G==="")&&(Y=!1);Y&&(O.diagnostics={runnable:B,programLog:W,vertexShader:{log:L,prefix:g},fragmentShader:{log:G,prefix:x}})}i.deleteShader(w),i.deleteShader(E),T=new xo(i,p),y=Vx(i,p)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(p,Ux)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}let eM=0;class tM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nM(e),t.set(e,n)),n}}class nM{constructor(e){this.id=eM++,this.code=e,this.usedTimes=0}}function iM(s,e,t,n,i,r,a){const o=new Bo,l=new tM,c=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,O,W,L){const G=W.fog,B=L.geometry,Y=y.isMeshStandardMaterial?W.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),Z=j&&j.mapping===cs?j.image.height:null,oe=v[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let Ie=0;B.morphAttributes.position!==void 0&&(Ie=1),B.morphAttributes.normal!==void 0&&(Ie=2),B.morphAttributes.color!==void 0&&(Ie=3);let q,le,be,Re;if(oe){const ot=Mn[oe];q=ot.vertexShader,le=ot.fragmentShader}else q=y.vertexShader,le=y.fragmentShader,l.update(y),be=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const ee=s.getRenderTarget(),A=L.isInstancedMesh===!0,D=L.isBatchedMesh===!0,F=!!y.map,P=!!y.matcap,V=!!j,H=!!y.aoMap,ae=!!y.lightMap,ie=!!y.bumpMap,de=!!y.normalMap,pe=!!y.displacementMap,xe=!!y.emissiveMap,Le=!!y.metalnessMap,N=!!y.roughnessMap,R=y.anisotropy>0,$=y.clearcoat>0,se=y.iridescence>0,he=y.sheen>0,ue=y.transmission>0,De=R&&!!y.anisotropyMap,Oe=$&&!!y.clearcoatMap,_e=$&&!!y.clearcoatNormalMap,Se=$&&!!y.clearcoatRoughnessMap,ze=se&&!!y.iridescenceMap,me=se&&!!y.iridescenceThicknessMap,yt=he&&!!y.sheenColorMap,Ze=he&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,z=!!y.specularColorMap,te=!!y.specularIntensityMap,ye=ue&&!!y.transmissionMap,Te=ue&&!!y.thicknessMap,Je=!!y.gradientMap,k=!!y.alphaMap,we=y.alphaTest>0,J=!!y.alphaHash,fe=!!y.extensions;let Me=On;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Ge={isWebGL2:h,shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:le,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:D,instancing:A,instancingColor:A&&L.instanceColor!==null,instancingMorph:A&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:li,alphaToCoverage:!!y.alphaToCoverage,map:F,matcap:P,envMap:V,envMapMode:V&&j.mapping,envMapCubeUVHeight:Z,aoMap:H,lightMap:ae,bumpMap:ie,normalMap:de,displacementMap:f&&pe,emissiveMap:xe,normalMapObjectSpace:de&&y.normalMapType===yp,normalMapTangentSpace:de&&y.normalMapType===Pi,metalnessMap:Le,roughnessMap:N,anisotropy:R,anisotropyMap:De,clearcoat:$,clearcoatMap:Oe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Se,iridescence:se,iridescenceMap:ze,iridescenceThicknessMap:me,sheen:he,sheenColorMap:yt,sheenRoughnessMap:Ze,specularMap:Ue,specularColorMap:z,specularIntensityMap:te,transmission:ue,transmissionMap:ye,thicknessMap:Te,gradientMap:Je,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:k,alphaTest:we,alphaHash:J,combine:y.combine,mapUv:F&&p(y.map.channel),aoMapUv:H&&p(y.aoMap.channel),lightMapUv:ae&&p(y.lightMap.channel),bumpMapUv:ie&&p(y.bumpMap.channel),normalMapUv:de&&p(y.normalMap.channel),displacementMapUv:pe&&p(y.displacementMap.channel),emissiveMapUv:xe&&p(y.emissiveMap.channel),metalnessMapUv:Le&&p(y.metalnessMap.channel),roughnessMapUv:N&&p(y.roughnessMap.channel),anisotropyMapUv:De&&p(y.anisotropyMap.channel),clearcoatMapUv:Oe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(y.sheenRoughnessMap.channel),specularMapUv:Ue&&p(y.specularMap.channel),specularColorMapUv:z&&p(y.specularColorMap.channel),specularIntensityMapUv:te&&p(y.specularIntensityMap.channel),transmissionMapUv:ye&&p(y.transmissionMap.channel),thicknessMapUv:Te&&p(y.thicknessMap.channel),alphaMapUv:k&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||R),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(F||k),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,useLegacyLights:s._useLegacyLights,decodeVideoTexture:F&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===Xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:fe&&y.extensions.derivatives===!0,extensionFragDepth:fe&&y.extensions.fragDepth===!0,extensionDrawBuffers:fe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:fe&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function x(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)S.push(O),S.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(_(S,y),M(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.instancingMorph&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.normalMapObjectSpace&&o.enable(7),S.normalMapTangentSpace&&o.enable(8),S.clearcoat&&o.enable(9),S.iridescence&&o.enable(10),S.alphaTest&&o.enable(11),S.vertexColors&&o.enable(12),S.vertexAlphas&&o.enable(13),S.vertexUv1s&&o.enable(14),S.vertexUv2s&&o.enable(15),S.vertexUv3s&&o.enable(16),S.vertexTangents&&o.enable(17),S.anisotropy&&o.enable(18),S.alphaHash&&o.enable(19),S.batching&&o.enable(20),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){const S=v[y.type];let O;if(S){const W=Mn[S];O=na.clone(W.uniforms)}else O=y.uniforms;return O}function w(y,S){let O;for(let W=0,L=u.length;W<L;W++){const G=u[W];if(G.cacheKey===S){O=G,++O.usedTimes;break}}return O===void 0&&(O=new Qx(s,S,y,r),u.push(O)),O}function E(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:C,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:T}}function rM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function sM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function id(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,m,v,p){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:p},s[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=v,g.group=p),e++,g}function o(h,d,f,m,v,p){const g=a(h,d,f,m,v,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(h,d,f,m,v,p){const g=a(h,d,f,m,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||sM),n.length>1&&n.sort(d||nd),i.length>1&&i.sort(d||nd)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function aM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new id,s.set(n,[a])):i>=r.length?(a=new id,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function oM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ve};break;case"SpotLight":t={position:new I,direction:new I,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function lM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cM=0;function uM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hM(s,e){const t=new oM,n=lM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,a=new Pe,o=new Pe;function l(u,h){let d=0,f=0,m=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let v=0,p=0,g=0,x=0,_=0,M=0,C=0,w=0,E=0,b=0,T=0;u.sort(uM);const y=h===!0?Math.PI:1;for(let O=0,W=u.length;O<W;O++){const L=u[O],G=L.color,B=L.intensity,Y=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*B*y,f+=G.g*B*y,m+=G.b*B*y;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],B);T++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const oe=L.shadow,ce=n.get(L);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,i.directionalShadow[v]=ce,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=L.shadow.matrix,M++}i.directional[v]=Z,v++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(G).multiplyScalar(B*y),Z.distance=Y,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[g]=Z;const oe=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,oe.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[g]=oe.matrix,L.castShadow){const ce=n.get(L);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,i.spotShadow[g]=ce,i.spotShadowMap[g]=j,w++}g++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(G).multiplyScalar(B),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=Z,x++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*y),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const oe=L.shadow,ce=n.get(L);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,ce.shadowCameraNear=oe.camera.near,ce.shadowCameraFar=oe.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=L.shadow.matrix,C++}i.point[p]=Z,p++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(B*y),Z.groundColor.copy(L.groundColor).multiplyScalar(B*y),i.hemi[_]=Z,_++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const S=i.hash;(S.directionalLength!==v||S.pointLength!==p||S.spotLength!==g||S.rectAreaLength!==x||S.hemiLength!==_||S.numDirectionalShadows!==M||S.numPointShadows!==C||S.numSpotShadows!==w||S.numSpotMaps!==E||S.numLightProbes!==T)&&(i.directional.length=v,i.spot.length=g,i.rectArea.length=x,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,S.directionalLength=v,S.pointLength=p,S.spotLength=g,S.rectAreaLength=x,S.hemiLength=_,S.numDirectionalShadows=M,S.numPointShadows=C,S.numSpotShadows=w,S.numSpotMaps=E,S.numLightProbes=T,i.version=cM++)}function c(u,h){let d=0,f=0,m=0,v=0,p=0;const g=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const M=u[x];if(M.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),d++}else if(M.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),o.identity(),a.copy(M.matrixWorld),a.premultiply(g),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function rd(s,e){const t=new hM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dM(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new rd(s,e),t.set(r,[l])):a>=o.length?(l=new rd(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Lu extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iu extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mM(s,e,t){let n=new sa;const i=new re,r=new re,a=new it,o=new Lu({depthPacking:_p}),l=new Iu,c={},u=t.maxTextureSize,h={[zn]:Xt,[Xt]:zn,[on]:on},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:fM,fragmentShader:pM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ve;m.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ht(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let g=this.type;this.render=function(w,E,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),y=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ii),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=g!==Un&&this.type===Un,L=g===Un&&this.type!==Un;for(let G=0,B=w.length;G<B;G++){const Y=w[G],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const Z=j.getFrameExtents();if(i.multiply(Z),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,j.mapSize.y=r.y)),j.map===null||W===!0||L===!0){const ce=this.type!==Un?{minFilter:bt,magFilter:bt}:{};j.map!==null&&j.map.dispose(),j.map=new wn(i.x,i.y,ce),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const oe=j.getViewportCount();for(let ce=0;ce<oe;ce++){const Ee=j.getViewport(ce);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),O.viewport(a),j.updateMatrices(Y,ce),n=j.getFrustum(),M(E,b,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Un&&x(j,b),j.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(T,y,S)};function x(w,E){const b=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,b,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,b,f,v,null)}function _(w,E,b,T){let y=null;const S=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)y=S;else if(y=b.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=y.uuid,W=E.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let G=L[W];G===void 0&&(G=y.clone(),L[W]=G,E.addEventListener("dispose",C)),y=G}if(y.visible=E.visible,y.wireframe=E.wireframe,T===Un?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=b}return y}function M(w,E,b,T,y){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const W=e.update(w),L=w.material;if(Array.isArray(L)){const G=W.groups;for(let B=0,Y=G.length;B<Y;B++){const j=G[B],Z=L[j.materialIndex];if(Z&&Z.visible){const oe=_(w,Z,T,y);w.onBeforeShadow(s,w,E,b,W,oe,j),s.renderBufferDirect(b,null,W,oe,w,j),w.onAfterShadow(s,w,E,b,W,oe,j)}}}else if(L.visible){const G=_(w,L,T,y);w.onBeforeShadow(s,w,E,b,W,G,null),s.renderBufferDirect(b,null,W,G,w,null),w.onAfterShadow(s,w,E,b,W,G,null)}}const O=w.children;for(let W=0,L=O.length;W<L;W++)M(O[W],E,b,T,y)}function C(w){w.target.removeEventListener("dispose",C);for(const b in c){const T=c[b],y=w.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function gM(s,e,t){const n=t.isWebGL2;function i(){let k=!1;const we=new it;let J=null;const fe=new it(0,0,0,0);return{setMask:function(Me){J!==Me&&!k&&(s.colorMask(Me,Me,Me,Me),J=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Ge,ot,xt,kt){kt===!0&&(Me*=xt,Ge*=xt,ot*=xt),we.set(Me,Ge,ot,xt),fe.equals(we)===!1&&(s.clearColor(Me,Ge,ot,xt),fe.copy(we))},reset:function(){k=!1,J=null,fe.set(-1,0,0,0)}}}function r(){let k=!1,we=null,J=null,fe=null;return{setTest:function(Me){Me?A(s.DEPTH_TEST):D(s.DEPTH_TEST)},setMask:function(Me){we!==Me&&!k&&(s.depthMask(Me),we=Me)},setFunc:function(Me){if(J!==Me){switch(Me){case Wf:s.depthFunc(s.NEVER);break;case Xf:s.depthFunc(s.ALWAYS);break;case Yf:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case qf:s.depthFunc(s.EQUAL);break;case jf:s.depthFunc(s.GEQUAL);break;case Zf:s.depthFunc(s.GREATER);break;case Kf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=Me}},setLocked:function(Me){k=Me},setClear:function(Me){fe!==Me&&(s.clearDepth(Me),fe=Me)},reset:function(){k=!1,we=null,J=null,fe=null}}}function a(){let k=!1,we=null,J=null,fe=null,Me=null,Ge=null,ot=null,xt=null,kt=null;return{setTest:function(dt){k||(dt?A(s.STENCIL_TEST):D(s.STENCIL_TEST))},setMask:function(dt){we!==dt&&!k&&(s.stencilMask(dt),we=dt)},setFunc:function(dt,jt,In){(J!==dt||fe!==jt||Me!==In)&&(s.stencilFunc(dt,jt,In),J=dt,fe=jt,Me=In)},setOp:function(dt,jt,In){(Ge!==dt||ot!==jt||xt!==In)&&(s.stencilOp(dt,jt,In),Ge=dt,ot=jt,xt=In)},setLocked:function(dt){k=dt},setClear:function(dt){kt!==dt&&(s.clearStencil(dt),kt=dt)},reset:function(){k=!1,we=null,J=null,fe=null,Me=null,Ge=null,ot=null,xt=null,kt=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,v=[],p=null,g=!1,x=null,_=null,M=null,C=null,w=null,E=null,b=null,T=new ve(0,0,0),y=0,S=!1,O=null,W=null,L=null,G=null,B=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Z=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(oe)[1]),j=Z>=1):oe.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),j=Z>=2);let ce=null,Ee={};const Ie=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),le=new it().fromArray(Ie),be=new it().fromArray(q);function Re(k,we,J,fe){const Me=new Uint8Array(4),Ge=s.createTexture();s.bindTexture(k,Ge),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<J;ot++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(we+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return Ge}const ee={};ee[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ee[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),A(s.DEPTH_TEST),l.setFunc(Os),pe(!1),xe(hc),A(s.CULL_FACE),ie(ii);function A(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function D(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function F(k,we){return f[k]!==we?(s.bindFramebuffer(k,we),f[k]=we,n&&(k===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=we),k===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function P(k,we){let J=v,fe=!1;if(k){J=m.get(we),J===void 0&&(J=[],m.set(we,J));const Me=k.textures;if(J.length!==Me.length||J[0]!==s.COLOR_ATTACHMENT0){for(let Ge=0,ot=Me.length;Ge<ot;Ge++)J[Ge]=s.COLOR_ATTACHMENT0+Ge;J.length=Me.length,fe=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,fe=!0);if(fe)if(t.isWebGL2)s.drawBuffers(J);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function V(k){return p!==k?(s.useProgram(k),p=k,!0):!1}const H={[Mi]:s.FUNC_ADD,[Cf]:s.FUNC_SUBTRACT,[Pf]:s.FUNC_REVERSE_SUBTRACT};if(n)H[pc]=s.MIN,H[mc]=s.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(H[pc]=k.MIN_EXT,H[mc]=k.MAX_EXT)}const ae={[Lf]:s.ZERO,[If]:s.ONE,[Uf]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[zf]:s.SRC_ALPHA_SATURATE,[Ff]:s.DST_COLOR,[Df]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[Bf]:s.ONE_MINUS_DST_COLOR,[Of]:s.ONE_MINUS_DST_ALPHA,[kf]:s.CONSTANT_COLOR,[Hf]:s.ONE_MINUS_CONSTANT_COLOR,[Vf]:s.CONSTANT_ALPHA,[Gf]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(k,we,J,fe,Me,Ge,ot,xt,kt,dt){if(k===ii){g===!0&&(D(s.BLEND),g=!1);return}if(g===!1&&(A(s.BLEND),g=!0),k!==Rf){if(k!==x||dt!==S){if((_!==Mi||w!==Mi)&&(s.blendEquation(s.FUNC_ADD),_=Mi,w=Mi),dt)switch(k){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,C=null,E=null,b=null,T.set(0,0,0),y=0,x=k,S=dt}return}Me=Me||we,Ge=Ge||J,ot=ot||fe,(we!==_||Me!==w)&&(s.blendEquationSeparate(H[we],H[Me]),_=we,w=Me),(J!==M||fe!==C||Ge!==E||ot!==b)&&(s.blendFuncSeparate(ae[J],ae[fe],ae[Ge],ae[ot]),M=J,C=fe,E=Ge,b=ot),(xt.equals(T)===!1||kt!==y)&&(s.blendColor(xt.r,xt.g,xt.b,kt),T.copy(xt),y=kt),x=k,S=!1}function de(k,we){k.side===on?D(s.CULL_FACE):A(s.CULL_FACE);let J=k.side===Xt;we&&(J=!J),pe(J),k.blending===ar&&k.transparent===!1?ie(ii):ie(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const fe=k.stencilWrite;c.setTest(fe),fe&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),N(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):D(s.SAMPLE_ALPHA_TO_COVERAGE)}function pe(k){O!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),O=k)}function xe(k){k!==Ef?(A(s.CULL_FACE),k!==W&&(k===hc?s.cullFace(s.BACK):k===Tf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):D(s.CULL_FACE),W=k}function Le(k){k!==L&&(j&&s.lineWidth(k),L=k)}function N(k,we,J){k?(A(s.POLYGON_OFFSET_FILL),(G!==we||B!==J)&&(s.polygonOffset(we,J),G=we,B=J)):D(s.POLYGON_OFFSET_FILL)}function R(k){k?A(s.SCISSOR_TEST):D(s.SCISSOR_TEST)}function $(k){k===void 0&&(k=s.TEXTURE0+Y-1),ce!==k&&(s.activeTexture(k),ce=k)}function se(k,we,J){J===void 0&&(ce===null?J=s.TEXTURE0+Y-1:J=ce);let fe=Ee[J];fe===void 0&&(fe={type:void 0,texture:void 0},Ee[J]=fe),(fe.type!==k||fe.texture!==we)&&(ce!==J&&(s.activeTexture(J),ce=J),s.bindTexture(k,we||ee[k]),fe.type=k,fe.texture=we)}function he(){const k=Ee[ce];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ue(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(k){le.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),le.copy(k))}function te(k){be.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),be.copy(k))}function ye(k,we){let J=h.get(we);J===void 0&&(J=new WeakMap,h.set(we,J));let fe=J.get(k);fe===void 0&&(fe=s.getUniformBlockIndex(we,k.name),J.set(k,fe))}function Te(k,we){const fe=h.get(we).get(k);u.get(we)!==fe&&(s.uniformBlockBinding(we,fe,k.__bindingPointIndex),u.set(we,fe))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ce=null,Ee={},f={},m=new WeakMap,v=[],p=null,g=!1,x=null,_=null,M=null,C=null,w=null,E=null,b=null,T=new ve(0,0,0),y=0,S=!1,O=null,W=null,L=null,G=null,B=null,le.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:A,disable:D,bindFramebuffer:F,drawBuffers:P,useProgram:V,setBlending:ie,setMaterial:de,setFlipSided:pe,setCullFace:xe,setLineWidth:Le,setPolygonOffset:N,setScissorTest:R,activeTexture:$,bindTexture:se,unbindTexture:he,compressedTexImage2D:ue,compressedTexImage3D:De,texImage2D:Ze,texImage3D:Ue,updateUBOMapping:ye,uniformBlockBinding:Te,texStorage2D:me,texStorage3D:yt,texSubImage2D:Oe,texSubImage3D:_e,compressedTexSubImage2D:Se,compressedTexSubImage3D:ze,scissor:z,viewport:te,reset:Je}}function vM(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new re,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,R){return m?new OffscreenCanvas(N,R):Xs("canvas")}function p(N,R,$,se){let he=1;const ue=Le(N);if((ue.width>se||ue.height>se)&&(he=se/Math.max(ue.width,ue.height)),he<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const De=R?Co:Math.floor,Oe=De(he*ue.width),_e=De(he*ue.height);d===void 0&&(d=v(Oe,_e));const Se=$?v(Oe,_e):d;return Se.width=Oe,Se.height=_e,Se.getContext("2d").drawImage(N,0,0,Oe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Oe+"x"+_e+")."),Se}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),N;return N}function g(N){const R=Le(N);return Wc(R.width)&&Wc(R.height)}function x(N){return o?!1:N.wrapS!==Ot||N.wrapT!==Ot||N.minFilter!==bt&&N.minFilter!==pt}function _(N,R){return N.generateMipmaps&&R&&N.minFilter!==bt&&N.minFilter!==pt}function M(N){s.generateMipmap(N)}function C(N,R,$,se,he=!1){if(o===!1)return R;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=R;if(R===s.RED&&($===s.FLOAT&&(ue=s.R32F),$===s.HALF_FLOAT&&(ue=s.R16F),$===s.UNSIGNED_BYTE&&(ue=s.R8)),R===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.R8UI),$===s.UNSIGNED_SHORT&&(ue=s.R16UI),$===s.UNSIGNED_INT&&(ue=s.R32UI),$===s.BYTE&&(ue=s.R8I),$===s.SHORT&&(ue=s.R16I),$===s.INT&&(ue=s.R32I)),R===s.RG&&($===s.FLOAT&&(ue=s.RG32F),$===s.HALF_FLOAT&&(ue=s.RG16F),$===s.UNSIGNED_BYTE&&(ue=s.RG8)),R===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RG8UI),$===s.UNSIGNED_SHORT&&(ue=s.RG16UI),$===s.UNSIGNED_INT&&(ue=s.RG32UI),$===s.BYTE&&(ue=s.RG8I),$===s.SHORT&&(ue=s.RG16I),$===s.INT&&(ue=s.RG32I)),R===s.RGBA){const De=he?ks:lt.getTransfer(se);$===s.FLOAT&&(ue=s.RGBA32F),$===s.HALF_FLOAT&&(ue=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ue=De===ft?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(N,R,$){return _(N,$)===!0||N.isFramebufferTexture&&N.minFilter!==bt&&N.minFilter!==pt?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function E(N){return N===bt||N===Qr||N===$n?s.NEAREST:s.LINEAR}function b(N){const R=N.target;R.removeEventListener("dispose",b),y(R),R.isVideoTexture&&h.delete(R)}function T(N){const R=N.target;R.removeEventListener("dispose",T),O(R)}function y(N){const R=n.get(N);if(R.__webglInit===void 0)return;const $=N.source,se=f.get($);if(se){const he=se[R.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(N),Object.keys(se).length===0&&f.delete($)}n.remove(N)}function S(N){const R=n.get(N);s.deleteTexture(R.__webglTexture);const $=N.source,se=f.get($);delete se[R.__cacheKey],a.memory.textures--}function O(N){const R=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(R.__webglFramebuffer[se]))for(let he=0;he<R.__webglFramebuffer[se].length;he++)s.deleteFramebuffer(R.__webglFramebuffer[se][he]);else s.deleteFramebuffer(R.__webglFramebuffer[se]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[se])}else{if(Array.isArray(R.__webglFramebuffer))for(let se=0;se<R.__webglFramebuffer.length;se++)s.deleteFramebuffer(R.__webglFramebuffer[se]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let se=0;se<R.__webglColorRenderbuffer.length;se++)R.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[se]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=N.textures;for(let se=0,he=$.length;se<he;se++){const ue=n.get($[se]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove($[se])}n.remove(N)}let W=0;function L(){W=0}function G(){const N=W;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),W+=1,N}function B(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function Y(N,R){const $=n.get(N);if(N.isVideoTexture&&pe(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const se=N.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be($,N,R);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+R)}function j(N,R){const $=n.get(N);if(N.version>0&&$.__version!==N.version){be($,N,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+R)}function Z(N,R){const $=n.get(N);if(N.version>0&&$.__version!==N.version){be($,N,R);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+R)}function oe(N,R){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Re($,N,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+R)}const ce={[si]:s.REPEAT,[Ot]:s.CLAMP_TO_EDGE,[dr]:s.MIRRORED_REPEAT},Ee={[bt]:s.NEAREST,[Qr]:s.NEAREST_MIPMAP_NEAREST,[$n]:s.NEAREST_MIPMAP_LINEAR,[pt]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[pn]:s.LINEAR_MIPMAP_LINEAR},Ie={[xp]:s.NEVER,[Tp]:s.ALWAYS,[Mp]:s.LESS,[wu]:s.LEQUAL,[bp]:s.EQUAL,[Ep]:s.GEQUAL,[wp]:s.GREATER,[Sp]:s.NOTEQUAL};function q(N,R,$){if(R.type===fn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===pt||R.magFilter===or||R.magFilter===$n||R.magFilter===pn||R.minFilter===pt||R.minFilter===or||R.minFilter===$n||R.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(s.texParameteri(N,s.TEXTURE_WRAP_S,ce[R.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ce[R.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ce[R.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Ee[R.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Ee[R.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(R.wrapS!==Ot||R.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,E(R.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,E(R.minFilter)),R.minFilter!==bt&&R.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ie[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===bt||R.minFilter!==$n&&R.minFilter!==pn||R.type===fn&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===fr&&e.has("OES_texture_half_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function le(N,R){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",b));const se=R.source;let he=f.get(se);he===void 0&&(he={},f.set(se,he));const ue=B(R);if(ue!==N.__cacheKey){he[ue]===void 0&&(he[ue]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),he[ue].usedTimes++;const De=he[N.__cacheKey];De!==void 0&&(he[N.__cacheKey].usedTimes--,De.usedTimes===0&&S(R)),N.__cacheKey=ue,N.__webglTexture=he[ue].texture}return $}function be(N,R,$){let se=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(se=s.TEXTURE_3D);const he=le(N,R),ue=R.source;t.bindTexture(se,N.__webglTexture,s.TEXTURE0+$);const De=n.get(ue);if(ue.version!==De.__version||he===!0){t.activeTexture(s.TEXTURE0+$);const Oe=lt.getPrimaries(lt.workingColorSpace),_e=R.colorSpace===Jn?null:lt.getPrimaries(R.colorSpace),Se=R.colorSpace===Jn||Oe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ze=x(R)&&g(R.image)===!1;let me=p(R.image,ze,!1,i.maxTextureSize);me=xe(R,me);const yt=g(me)||o,Ze=r.convert(R.format,R.colorSpace);let Ue=r.convert(R.type),z=C(R.internalFormat,Ze,Ue,R.colorSpace,R.isVideoTexture);q(se,R,yt);let te;const ye=R.mipmaps,Te=o&&R.isVideoTexture!==!0&&z!==xu,Je=De.__version===void 0||he===!0,k=ue.dataReady,we=w(R,me,yt);if(R.isDepthTexture)z=s.DEPTH_COMPONENT,o?R.type===fn?z=s.DEPTH_COMPONENT32F:R.type===ei?z=s.DEPTH_COMPONENT24:R.type===Si?z=s.DEPTH24_STENCIL8:z=s.DEPTH_COMPONENT16:R.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ei&&z===s.DEPTH_COMPONENT&&R.type!==No&&R.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=ei,Ue=r.convert(R.type)),R.format===pr&&z===s.DEPTH_COMPONENT&&(z=s.DEPTH_STENCIL,R.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Si,Ue=r.convert(R.type))),Je&&(Te?t.texStorage2D(s.TEXTURE_2D,1,z,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,z,me.width,me.height,0,Ze,Ue,null));else if(R.isDataTexture)if(ye.length>0&&yt){Te&&Je&&t.texStorage2D(s.TEXTURE_2D,we,z,ye[0].width,ye[0].height);for(let J=0,fe=ye.length;J<fe;J++)te=ye[J],Te?k&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,te.width,te.height,Ze,Ue,te.data):t.texImage2D(s.TEXTURE_2D,J,z,te.width,te.height,0,Ze,Ue,te.data);R.generateMipmaps=!1}else Te?(Je&&t.texStorage2D(s.TEXTURE_2D,we,z,me.width,me.height),k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ze,Ue,me.data)):t.texImage2D(s.TEXTURE_2D,0,z,me.width,me.height,0,Ze,Ue,me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Te&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,z,ye[0].width,ye[0].height,me.depth);for(let J=0,fe=ye.length;J<fe;J++)te=ye[J],R.format!==$t?Ze!==null?Te?k&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,te.width,te.height,me.depth,Ze,te.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,z,te.width,te.height,me.depth,0,te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,te.width,te.height,me.depth,Ze,Ue,te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,z,te.width,te.height,me.depth,0,Ze,Ue,te.data)}else{Te&&Je&&t.texStorage2D(s.TEXTURE_2D,we,z,ye[0].width,ye[0].height);for(let J=0,fe=ye.length;J<fe;J++)te=ye[J],R.format!==$t?Ze!==null?Te?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,te.width,te.height,Ze,te.data):t.compressedTexImage2D(s.TEXTURE_2D,J,z,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?k&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,te.width,te.height,Ze,Ue,te.data):t.texImage2D(s.TEXTURE_2D,J,z,te.width,te.height,0,Ze,Ue,te.data)}else if(R.isDataArrayTexture)Te?(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,z,me.width,me.height,me.depth),k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ze,Ue,me.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,z,me.width,me.height,me.depth,0,Ze,Ue,me.data);else if(R.isData3DTexture)Te?(Je&&t.texStorage3D(s.TEXTURE_3D,we,z,me.width,me.height,me.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ze,Ue,me.data)):t.texImage3D(s.TEXTURE_3D,0,z,me.width,me.height,me.depth,0,Ze,Ue,me.data);else if(R.isFramebufferTexture){if(Je)if(Te)t.texStorage2D(s.TEXTURE_2D,we,z,me.width,me.height);else{let J=me.width,fe=me.height;for(let Me=0;Me<we;Me++)t.texImage2D(s.TEXTURE_2D,Me,z,J,fe,0,Ze,Ue,null),J>>=1,fe>>=1}}else if(ye.length>0&&yt){if(Te&&Je){const J=Le(ye[0]);t.texStorage2D(s.TEXTURE_2D,we,z,J.width,J.height)}for(let J=0,fe=ye.length;J<fe;J++)te=ye[J],Te?k&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ze,Ue,te):t.texImage2D(s.TEXTURE_2D,J,z,Ze,Ue,te);R.generateMipmaps=!1}else if(Te){if(Je){const J=Le(me);t.texStorage2D(s.TEXTURE_2D,we,z,J.width,J.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ze,Ue,me)}else t.texImage2D(s.TEXTURE_2D,0,z,Ze,Ue,me);_(R,yt)&&M(se),De.__version=ue.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Re(N,R,$){if(R.image.length!==6)return;const se=le(N,R),he=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const ue=n.get(he);if(he.version!==ue.__version||se===!0){t.activeTexture(s.TEXTURE0+$);const De=lt.getPrimaries(lt.workingColorSpace),Oe=R.colorSpace===Jn?null:lt.getPrimaries(R.colorSpace),_e=R.colorSpace===Jn||De===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=R.isCompressedTexture||R.image[0].isCompressedTexture,ze=R.image[0]&&R.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Se&&!ze?me[J]=p(R.image[J],!1,!0,i.maxCubemapSize):me[J]=ze?R.image[J].image:R.image[J],me[J]=xe(R,me[J]);const yt=me[0],Ze=g(yt)||o,Ue=r.convert(R.format,R.colorSpace),z=r.convert(R.type),te=C(R.internalFormat,Ue,z,R.colorSpace),ye=o&&R.isVideoTexture!==!0,Te=ue.__version===void 0||se===!0,Je=he.dataReady;let k=w(R,yt,Ze);q(s.TEXTURE_CUBE_MAP,R,Ze);let we;if(Se){ye&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,k,te,yt.width,yt.height);for(let J=0;J<6;J++){we=me[J].mipmaps;for(let fe=0;fe<we.length;fe++){const Me=we[fe];R.format!==$t?Ue!==null?ye?Je&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Me.width,Me.height,Ue,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?Je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Me.width,Me.height,Ue,z,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,te,Me.width,Me.height,0,Ue,z,Me.data)}}}else{if(we=R.mipmaps,ye&&Te){we.length>0&&k++;const J=Le(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,k,te,J.width,J.height)}for(let J=0;J<6;J++)if(ze){ye?Je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Ue,z,me[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,me[J].width,me[J].height,0,Ue,z,me[J].data);for(let fe=0;fe<we.length;fe++){const Ge=we[fe].image[J].image;ye?Je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ge.width,Ge.height,Ue,z,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,te,Ge.width,Ge.height,0,Ue,z,Ge.data)}}else{ye?Je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,z,me[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,Ue,z,me[J]);for(let fe=0;fe<we.length;fe++){const Me=we[fe];ye?Je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ue,z,Me.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,te,Ue,z,Me.image[J])}}}_(R,Ze)&&M(s.TEXTURE_CUBE_MAP),ue.__version=he.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ee(N,R,$,se,he,ue){const De=r.convert($.format,$.colorSpace),Oe=r.convert($.type),_e=C($.internalFormat,De,Oe,$.colorSpace);if(!n.get(R).__hasExternalTextures){const ze=Math.max(1,R.width>>ue),me=Math.max(1,R.height>>ue);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,ue,_e,ze,me,R.depth,0,De,Oe,null):t.texImage2D(he,ue,_e,ze,me,0,De,Oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),de(R)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,he,n.get($).__webglTexture,0,ie(R)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,he,n.get($).__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function A(N,R,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),R.depthBuffer&&!R.stencilBuffer){let se=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||de(R)){const he=R.depthTexture;he&&he.isDepthTexture&&(he.type===fn?se=s.DEPTH_COMPONENT32F:he.type===ei&&(se=s.DEPTH_COMPONENT24));const ue=ie(R);de(R)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,se,R.width,R.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,se,R.width,R.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,R.width,R.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(R.depthBuffer&&R.stencilBuffer){const se=ie(R);$&&de(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,R.width,R.height):de(R)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const se=R.textures;for(let he=0;he<se.length;he++){const ue=se[he],De=r.convert(ue.format,ue.colorSpace),Oe=r.convert(ue.type),_e=C(ue.internalFormat,De,Oe,ue.colorSpace),Se=ie(R);$&&de(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,_e,R.width,R.height):de(R)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,_e,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,_e,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function D(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y(R.depthTexture,0);const se=n.get(R.depthTexture).__webglTexture,he=ie(R);if(R.depthTexture.format===Ei)de(R)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(R.depthTexture.format===pr)de(R)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function F(N){const R=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");D(R.__webglFramebuffer,N)}else if($){R.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[se]),R.__webglDepthbuffer[se]=s.createRenderbuffer(),A(R.__webglDepthbuffer[se],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=s.createRenderbuffer(),A(R.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function P(N,R,$){const se=n.get(N);R!==void 0&&ee(se.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&F(N)}function V(N){const R=N.texture,$=n.get(N),se=n.get(R);N.addEventListener("dispose",T);const he=N.textures,ue=N.isWebGLCubeRenderTarget===!0,De=he.length>1,Oe=g(N)||o;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=R.version,a.memory.textures++),ue){$.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[_e]=[];for(let Se=0;Se<R.mipmaps.length;Se++)$.__webglFramebuffer[_e][Se]=s.createFramebuffer()}else $.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(o&&R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let _e=0;_e<R.mipmaps.length;_e++)$.__webglFramebuffer[_e]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(De)if(i.drawBuffers)for(let _e=0,Se=he.length;_e<Se;_e++){const ze=n.get(he[_e]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&de(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const Se=he[_e];$.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);const ze=r.convert(Se.format,Se.colorSpace),me=r.convert(Se.type),yt=C(Se.internalFormat,ze,me,Se.colorSpace,N.isXRRenderTarget===!0),Ze=ie(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,yt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),A($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),q(s.TEXTURE_CUBE_MAP,R,Oe);for(let _e=0;_e<6;_e++)if(o&&R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)ee($.__webglFramebuffer[_e][Se],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Se);else ee($.__webglFramebuffer[_e],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(R,Oe)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let _e=0,Se=he.length;_e<Se;_e++){const ze=he[_e],me=n.get(ze);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),q(s.TEXTURE_2D,ze,Oe),ee($.__webglFramebuffer,N,ze,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,0),_(ze,Oe)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?_e=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,se.__webglTexture),q(_e,R,Oe),o&&R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)ee($.__webglFramebuffer[Se],N,R,s.COLOR_ATTACHMENT0,_e,Se);else ee($.__webglFramebuffer,N,R,s.COLOR_ATTACHMENT0,_e,0);_(R,Oe)&&M(_e),t.unbindTexture()}N.depthBuffer&&F(N)}function H(N){const R=g(N)||o,$=N.textures;for(let se=0,he=$.length;se<he;se++){const ue=$[se];if(_(ue,R)){const De=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Oe=n.get(ue).__webglTexture;t.bindTexture(De,Oe),M(De),t.unbindTexture()}}}function ae(N){if(o&&N.samples>0&&de(N)===!1){const R=N.textures,$=N.width,se=N.height;let he=s.COLOR_BUFFER_BIT;const ue=[],De=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=n.get(N),_e=R.length>1;if(_e)for(let Se=0;Se<R.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){ue.push(s.COLOR_ATTACHMENT0+Se),N.depthBuffer&&ue.push(De);const ze=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(ze===!1&&(N.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),_e&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Se]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[De]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[De])),_e){const me=n.get(R[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,$,se,0,0,$,se,he,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Se=0;Se<R.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Se]);const ze=n.get(R[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function ie(N){return Math.min(i.maxSamples,N.samples)}function de(N){const R=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function pe(N){const R=a.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function xe(N,R){const $=N.colorSpace,se=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Ro||$!==li&&$!==Jn&&(lt.getTransfer($)===ft?o===!1?e.has("EXT_sRGB")===!0&&se===$t?(N.format=Ro,N.minFilter=pt,N.generateMipmaps=!1):R=Eu.sRGBToLinear(R):(se!==$t||he!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function Le(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=oe,this.rebindTextures=P,this.setupRenderTarget=V,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=de}function Hp(s,e,t){const n=t.isWebGL2;function i(r,a=Jn){let o;const l=lt.getTransfer(a);if(r===Rn)return s.UNSIGNED_BYTE;if(r===pu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ap)return s.BYTE;if(r===op)return s.SHORT;if(r===No)return s.UNSIGNED_SHORT;if(r===fu)return s.INT;if(r===ei)return s.UNSIGNED_INT;if(r===fn)return s.FLOAT;if(r===fr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===lp)return s.ALPHA;if(r===$t)return s.RGBA;if(r===cp)return s.LUMINANCE;if(r===up)return s.LUMINANCE_ALPHA;if(r===Ei)return s.DEPTH_COMPONENT;if(r===pr)return s.DEPTH_STENCIL;if(r===Ro)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===gu)return s.RED;if(r===vu)return s.RED_INTEGER;if(r===hp)return s.RG;if(r===_u)return s.RG_INTEGER;if(r===yu)return s.RGBA_INTEGER;if(r===po||r===mo||r===go||r===vo)if(l===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vc||r===_c||r===yc||r===xc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_c)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mc||r===bc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Mc)return l===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===bc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wc||r===Sc||r===Ec||r===Tc||r===Ac||r===Rc||r===Cc||r===Pc||r===Lc||r===Ic||r===Uc||r===Nc||r===Dc||r===Oc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ec)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ac)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ic)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_o||r===Fc||r===Bc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===_o)return l===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dp||r===zc||r===kc||r===Hc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===_o)return o.COMPRESSED_RED_RGTC1_EXT;if(r===zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Si?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Vp extends ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ti extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new tn({extensions:{fragDepth:!0},vertexShader:yM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new Ii(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class bM extends Hn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const v=new MM,p=t.getContextAttributes();let g=null,x=null;const _=[],M=[],C=new re;let w=null;const E=new ct;E.layers.enable(1),E.viewport=new it;const b=new ct;b.layers.enable(2),b.viewport=new it;const T=[E,b],y=new Vp;y.layers.enable(1),y.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=_[q];return le===void 0&&(le=new zl,_[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=_[q];return le===void 0&&(le=new zl,_[q]=le),le.getGripSpace()},this.getHand=function(q){let le=_[q];return le===void 0&&(le=new zl,_[q]=le),le.getHandSpace()};function W(q){const le=M.indexOf(q.inputSource);if(le===-1)return;const be=_[le];be!==void 0&&(be.update(q.inputSource,q.frame,c||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",G);for(let q=0;q<_.length;q++){const le=M[q];le!==null&&(M[q]=null,_[q].disconnect(le))}S=null,O=null,v.reset(),e.setRenderTarget(g),f=null,d=null,h=null,i=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",L),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wn(f.framebufferWidth,f.framebufferHeight,{format:$t,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,be=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?pr:Ei,be=p.stencil?Si:ei);const ee={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new wn(d.textureWidth,d.textureHeight,{format:$t,type:Rn,depthTexture:new Pu(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const A=e.properties.get(x);A.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(q){for(let le=0;le<q.removed.length;le++){const be=q.removed[le],Re=M.indexOf(be);Re>=0&&(M[Re]=null,_[Re].disconnect(be))}for(let le=0;le<q.added.length;le++){const be=q.added[le];let Re=M.indexOf(be);if(Re===-1){for(let A=0;A<_.length;A++)if(A>=M.length){M.push(be),Re=A;break}else if(M[A]===null){M[A]=be,Re=A;break}if(Re===-1)break}const ee=_[Re];ee&&ee.connect(be)}}const B=new I,Y=new I;function j(q,le,be){B.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(be.matrixWorld);const Re=B.distanceTo(Y),ee=le.projectionMatrix.elements,A=be.projectionMatrix.elements,D=ee[14]/(ee[10]-1),F=ee[14]/(ee[10]+1),P=(ee[9]+1)/ee[5],V=(ee[9]-1)/ee[5],H=(ee[8]-1)/ee[0],ae=(A[8]+1)/A[0],ie=D*H,de=D*ae,pe=Re/(-H+ae),xe=pe*-H;le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xe),q.translateZ(pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Le=D+pe,N=F+pe,R=ie-xe,$=de+(Re-xe),se=P*F/N*Le,he=V*F/N*Le;q.projectionMatrix.makePerspective(R,$,se,he,Le,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),y.near=b.near=E.near=q.near,y.far=b.far=E.far=q.far,(S!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,O=y.far,E.near=S,E.far=O,b.near=S,b.far=O,E.updateProjectionMatrix(),b.updateProjectionMatrix(),q.updateProjectionMatrix());const le=q.parent,be=y.cameras;Z(y,le);for(let Re=0;Re<be.length;Re++)Z(be[Re],le);be.length===2?j(y,E,b):y.projectionMatrix.copy(E.projectionMatrix),oe(q,y,le)};function oe(q,le,be){be===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null};let ce=null;function Ee(q,le){if(u=le.getViewerPose(c||a),m=le,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Re=!1;be.length!==y.cameras.length&&(y.cameras.length=0,Re=!0);for(let A=0;A<be.length;A++){const D=be[A];let F=null;if(f!==null)F=f.getViewport(D);else{const V=h.getViewSubImage(d,D);F=V.viewport,A===0&&(e.setRenderTargetTextures(x,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(x))}let P=T[A];P===void 0&&(P=new ct,P.layers.enable(A),P.viewport=new it,T[A]=P),P.matrix.fromArray(D.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(D.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(F.x,F.y,F.width,F.height),A===0&&(y.matrix.copy(P.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Re===!0&&y.cameras.push(P)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const A=h.getDepthInformation(be[0]);A&&A.isValid&&A.texture&&v.init(e,A,i.renderState)}}for(let be=0;be<_.length;be++){const Re=M[be],ee=_[be];Re!==null&&ee!==void 0&&ee.update(Re,le,c||a)}v.render(e,y),ce&&ce(q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}const Ie=new Dp;Ie.setAnimationLoop(Ee),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const Vi=new en,wM=new Pe;function SM(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ip(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,_,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,_):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Xt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Xt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),_=x.envMap,M=x.envMapRotation;if(_&&(p.envMap.value=_,Vi.copy(M),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),p.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Vi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const C=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*C,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=_*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xt&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function EM(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=i[x.id];M===void 0&&(m(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",p));const C=_.program;n.updateUBOMapping(x,C);const w=e.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function u(x){const _=h();x.__bindingPointIndex=_;const M=s.createBuffer(),C=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],M=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,E=M.length;w<E;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,y=b.length;T<y;T++){const S=b[T];if(f(S,w,T,C)===!0){const O=S.__offset,W=Array.isArray(S.value)?S.value:[S.value];let L=0;for(let G=0;G<W.length;G++){const B=W[G],Y=v(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,O+L,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,M,C){const w=x.value,E=_+"_"+M;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const b=C[E];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[E]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function m(x){const _=x.uniforms;let M=0;const C=16;for(let E=0,b=_.length;E<b;E++){const T=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,S=T.length;y<S;y++){const O=T[y],W=Array.isArray(O.value)?O.value:[O.value];for(let L=0,G=W.length;L<G;L++){const B=W[L],Y=v(B),j=M%C;j!==0&&C-j<Y.boundary&&(M+=C-j),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Y.storage}}}const w=M%C;return w>0&&(M+=C-w),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}class Zr{constructor(e={}){const{canvas:t=Rp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const _=this;let M=!1,C=0,w=0,E=null,b=-1,T=null;const y=new it,S=new it;let O=null;const W=new ve(0);let L=0,G=t.width,B=t.height,Y=1,j=null,Z=null;const oe=new it(0,0,G,B),ce=new it(0,0,G,B);let Ee=!1;const Ie=new sa;let q=!1,le=!1,be=null;const Re=new Pe,ee=new re,A=new I,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return E===null?Y:1}let P=n;function V(U,X){for(let Q=0;Q<U.length;Q++){const ne=U[Q],K=t.getContext(ne,X);if(K!==null)return K}return null}try{const U={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ls}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",we,!1),P===null){const X=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&X.shift(),P=V(X,U),P===null)throw V(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let H,ae,ie,de,pe,xe,Le,N,R,$,se,he,ue,De,Oe,_e,Se,ze,me,yt,Ze,Ue,z,te;function ye(){H=new Dy(P),ae=new Cy(P,H,e),H.init(ae),Ue=new Hp(P,H,ae),ie=new gM(P,H,ae),de=new By(P),pe=new rM,xe=new vM(P,H,ie,pe,ae,Ue,de),Le=new Ly(_),N=new Ny(_),R=new W0(P,ae),z=new Ay(P,H,R,ae),$=new Oy(P,R,de,z),se=new Vy(P,$,R,de),me=new Hy(P,ae,xe),_e=new Py(pe),he=new iM(_,Le,N,H,ae,z,_e),ue=new SM(_,pe),De=new aM,Oe=new dM(H,ae),ze=new Ty(_,Le,N,ie,se,d,l),Se=new mM(_,se,ae),te=new EM(P,de,ae,ie),yt=new Ry(P,H,de,ae),Ze=new Fy(P,H,de,ae),de.programs=he.programs,_.capabilities=ae,_.extensions=H,_.properties=pe,_.renderLists=De,_.shadowMap=Se,_.state=ie,_.info=de}ye();const Te=new bM(_,P);this.xr=Te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const U=H.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=H.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(U){U!==void 0&&(Y=U,this.setSize(G,B,!1))},this.getSize=function(U){return U.set(G,B)},this.setSize=function(U,X,Q=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=U,B=X,t.width=Math.floor(U*Y),t.height=Math.floor(X*Y),Q===!0&&(t.style.width=U+"px",t.style.height=X+"px"),this.setViewport(0,0,U,X)},this.getDrawingBufferSize=function(U){return U.set(G*Y,B*Y).floor()},this.setDrawingBufferSize=function(U,X,Q){G=U,B=X,Y=Q,t.width=Math.floor(U*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,U,X)},this.getCurrentViewport=function(U){return U.copy(y)},this.getViewport=function(U){return U.copy(oe)},this.setViewport=function(U,X,Q,ne){U.isVector4?oe.set(U.x,U.y,U.z,U.w):oe.set(U,X,Q,ne),ie.viewport(y.copy(oe).multiplyScalar(Y).round())},this.getScissor=function(U){return U.copy(ce)},this.setScissor=function(U,X,Q,ne){U.isVector4?ce.set(U.x,U.y,U.z,U.w):ce.set(U,X,Q,ne),ie.scissor(S.copy(ce).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(U){ie.setScissorTest(Ee=U)},this.setOpaqueSort=function(U){j=U},this.setTransparentSort=function(U){Z=U},this.getClearColor=function(U){return U.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(U=!0,X=!0,Q=!0){let ne=0;if(U){let K=!1;if(E!==null){const Ae=E.texture.format;K=Ae===yu||Ae===_u||Ae===vu}if(K){const Ae=E.texture.type,Ne=Ae===Rn||Ae===ei||Ae===No||Ae===Si||Ae===pu||Ae===mu,Fe=ze.getClearColor(),He=ze.getClearAlpha(),$e=Fe.r,We=Fe.g,qe=Fe.b;Ne?(f[0]=$e,f[1]=We,f[2]=qe,f[3]=He,P.clearBufferuiv(P.COLOR,0,f)):(m[0]=$e,m[1]=We,m[2]=qe,m[3]=He,P.clearBufferiv(P.COLOR,0,m))}else ne|=P.COLOR_BUFFER_BIT}X&&(ne|=P.DEPTH_BUFFER_BIT),Q&&(ne|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",we,!1),De.dispose(),Oe.dispose(),pe.dispose(),Le.dispose(),N.dispose(),se.dispose(),z.dispose(),te.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",kt),Te.removeEventListener("sessionend",dt),be&&(be.dispose(),be=null),jt.stop()};function Je(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const U=de.autoReset,X=Se.enabled,Q=Se.autoUpdate,ne=Se.needsUpdate,K=Se.type;ye(),de.autoReset=U,Se.enabled=X,Se.autoUpdate=Q,Se.needsUpdate=ne,Se.type=K}function we(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function J(U){const X=U.target;X.removeEventListener("dispose",J),fe(X)}function fe(U){Me(U),pe.remove(U)}function Me(U){const X=pe.get(U).programs;X!==void 0&&(X.forEach(function(Q){he.releaseProgram(Q)}),U.isShaderMaterial&&he.releaseShaderCache(U))}this.renderBufferDirect=function(U,X,Q,ne,K,Ae){X===null&&(X=D);const Ne=K.isMesh&&K.matrixWorld.determinant()<0,Fe=ig(U,X,Q,ne,K);ie.setMaterial(ne,Ne);let He=Q.index,$e=1;if(ne.wireframe===!0){if(He=$.getWireframeAttribute(Q),He===void 0)return;$e=2}const We=Q.drawRange,qe=Q.attributes.position;let At=We.start*$e,un=(We.start+We.count)*$e;Ae!==null&&(At=Math.max(At,Ae.start*$e),un=Math.min(un,(Ae.start+Ae.count)*$e)),He!==null?(At=Math.max(At,0),un=Math.min(un,He.count)):qe!=null&&(At=Math.max(At,0),un=Math.min(un,qe.count));const Nt=un-At;if(Nt<0||Nt===1/0)return;z.setup(K,ne,Fe,Q,He);let Gn,Mt=yt;if(He!==null&&(Gn=R.get(He),Mt=Ze,Mt.setIndex(Gn)),K.isMesh)ne.wireframe===!0?(ie.setLineWidth(ne.wireframeLinewidth*F()),Mt.setMode(P.LINES)):Mt.setMode(P.TRIANGLES);else if(K.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),ie.setLineWidth(Ke*F()),K.isLineSegments?Mt.setMode(P.LINES):K.isLineLoop?Mt.setMode(P.LINE_LOOP):Mt.setMode(P.LINE_STRIP)}else K.isPoints?Mt.setMode(P.POINTS):K.isSprite&&Mt.setMode(P.TRIANGLES);if(K.isBatchedMesh)Mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Mt.renderInstances(At,Nt,K.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ul=Math.min(Q.instanceCount,Ke);Mt.renderInstances(At,Nt,ul)}else Mt.render(At,Nt)};function Ge(U,X,Q){U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=Xt,U.needsUpdate=!0,pa(U,X,Q),U.side=zn,U.needsUpdate=!0,pa(U,X,Q),U.side=on):pa(U,X,Q)}this.compile=function(U,X,Q=null){Q===null&&(Q=U),p=Oe.get(Q),p.init(),x.push(p),Q.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),U!==Q&&U.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(_._useLegacyLights);const ne=new Set;return U.traverse(function(K){const Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Fe=Ae[Ne];Ge(Fe,Q,K),ne.add(Fe)}else Ge(Ae,Q,K),ne.add(Ae)}),x.pop(),p=null,ne},this.compileAsync=function(U,X,Q=null){const ne=this.compile(U,X,Q);return new Promise(K=>{function Ae(){if(ne.forEach(function(Ne){pe.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){K(U);return}setTimeout(Ae,10)}H.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ot=null;function xt(U){ot&&ot(U)}function kt(){jt.stop()}function dt(){jt.start()}const jt=new Dp;jt.setAnimationLoop(xt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(U){ot=U,Te.setAnimationLoop(U),U===null?jt.stop():jt.start()},Te.addEventListener("sessionstart",kt),Te.addEventListener("sessionend",dt),this.render=function(U,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,X,E),p=Oe.get(U,x.length),p.init(),x.push(p),Re.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ie.setFromProjectionMatrix(Re),le=this.localClippingEnabled,q=_e.init(this.clippingPlanes,le),v=De.get(U,g.length),v.init(),g.push(v),In(U,X,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(j,Z),this.info.render.frame++,q===!0&&_e.beginShadows();const Q=p.state.shadowsArray;if(Se.render(Q,U,X),q===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&ze.render(v,U),p.setupLights(_._useLegacyLights),X.isArrayCamera){const ne=X.cameras;for(let K=0,Ae=ne.length;K<Ae;K++){const Ne=ne[K];uh(v,U,Ne,Ne.viewport)}}else uh(v,U,X);E!==null&&(xe.updateMultisampleRenderTarget(E),xe.updateRenderTargetMipmap(E)),U.isScene===!0&&U.onAfterRender(_,U,X),z.resetDefaultState(),b=-1,T=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function In(U,X,Q,ne){if(U.visible===!1)return;if(U.layers.test(X.layers)){if(U.isGroup)Q=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(X);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Ie.intersectsSprite(U)){ne&&A.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Re);const Ne=se.update(U),Fe=U.material;Fe.visible&&v.push(U,Ne,Fe,Q,A.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Ie.intersectsObject(U))){const Ne=se.update(U),Fe=U.material;if(ne&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),A.copy(U.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),A.copy(Ne.boundingSphere.center)),A.applyMatrix4(U.matrixWorld).applyMatrix4(Re)),Array.isArray(Fe)){const He=Ne.groups;for(let $e=0,We=He.length;$e<We;$e++){const qe=He[$e],At=Fe[qe.materialIndex];At&&At.visible&&v.push(U,Ne,At,Q,A.z,qe)}}else Fe.visible&&v.push(U,Ne,Fe,Q,A.z,null)}}const Ae=U.children;for(let Ne=0,Fe=Ae.length;Ne<Fe;Ne++)In(Ae[Ne],X,Q,ne)}function uh(U,X,Q,ne){const K=U.opaque,Ae=U.transmissive,Ne=U.transparent;p.setupLightsView(Q),q===!0&&_e.setGlobalState(_.clippingPlanes,Q),Ae.length>0&&ng(K,Ae,X,Q),ne&&ie.viewport(y.copy(ne)),K.length>0&&fa(K,X,Q),Ae.length>0&&fa(Ae,X,Q),Ne.length>0&&fa(Ne,X,Q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function ng(U,X,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Ae=ae.isWebGL2;be===null&&(be=new wn(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?fr:Rn,minFilter:pn,samples:Ae?4:0})),_.getDrawingBufferSize(ee),Ae?be.setSize(ee.x,ee.y):be.setSize(Co(ee.x),Co(ee.y));const Ne=_.getRenderTarget();_.setRenderTarget(be),_.getClearColor(W),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Fe=_.toneMapping;_.toneMapping=On,fa(U,Q,ne),xe.updateMultisampleRenderTarget(be),xe.updateRenderTargetMipmap(be);let He=!1;for(let $e=0,We=X.length;$e<We;$e++){const qe=X[$e],At=qe.object,un=qe.geometry,Nt=qe.material,Gn=qe.group;if(Nt.side===on&&At.layers.test(ne.layers)){const Mt=Nt.side;Nt.side=Xt,Nt.needsUpdate=!0,hh(At,Q,ne,un,Nt,Gn),Nt.side=Mt,Nt.needsUpdate=!0,He=!0}}He===!0&&(xe.updateMultisampleRenderTarget(be),xe.updateRenderTargetMipmap(be)),_.setRenderTarget(Ne),_.setClearColor(W,L),_.toneMapping=Fe}function fa(U,X,Q){const ne=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Ae=U.length;K<Ae;K++){const Ne=U[K],Fe=Ne.object,He=Ne.geometry,$e=ne===null?Ne.material:ne,We=Ne.group;Fe.layers.test(Q.layers)&&hh(Fe,X,Q,He,$e,We)}}function hh(U,X,Q,ne,K,Ae){U.onBeforeRender(_,X,Q,ne,K,Ae),U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),K.onBeforeRender(_,X,Q,ne,U,Ae),K.transparent===!0&&K.side===on&&K.forceSinglePass===!1?(K.side=Xt,K.needsUpdate=!0,_.renderBufferDirect(Q,X,ne,K,U,Ae),K.side=zn,K.needsUpdate=!0,_.renderBufferDirect(Q,X,ne,K,U,Ae),K.side=on):_.renderBufferDirect(Q,X,ne,K,U,Ae),U.onAfterRender(_,X,Q,ne,K,Ae)}function pa(U,X,Q){X.isScene!==!0&&(X=D);const ne=pe.get(U),K=p.state.lights,Ae=p.state.shadowsArray,Ne=K.state.version,Fe=he.getParameters(U,K.state,Ae,X,Q),He=he.getProgramCacheKey(Fe);let $e=ne.programs;ne.environment=U.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(U.isMeshStandardMaterial?N:Le).get(U.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&U.envMap===null?X.environmentRotation:U.envMapRotation,$e===void 0&&(U.addEventListener("dispose",J),$e=new Map,ne.programs=$e);let We=$e.get(He);if(We!==void 0){if(ne.currentProgram===We&&ne.lightsStateVersion===Ne)return fh(U,Fe),We}else Fe.uniforms=he.getUniforms(U),U.onBuild(Q,Fe,_),U.onBeforeCompile(Fe,_),We=he.acquireProgram(Fe,He),$e.set(He,We),ne.uniforms=Fe.uniforms;const qe=ne.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qe.clippingPlanes=_e.uniform),fh(U,Fe),ne.needsLights=sg(U),ne.lightsStateVersion=Ne,ne.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=We,ne.uniformsList=null,We}function dh(U){if(U.uniformsList===null){const X=U.currentProgram.getUniforms();U.uniformsList=xo.seqWithValue(X.seq,U.uniforms)}return U.uniformsList}function fh(U,X){const Q=pe.get(U);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function ig(U,X,Q,ne,K){X.isScene!==!0&&(X=D),xe.resetTextureUnits();const Ae=X.fog,Ne=ne.isMeshStandardMaterial?X.environment:null,Fe=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:li,He=(ne.isMeshStandardMaterial?N:Le).get(ne.envMap||Ne),$e=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!Q.morphAttributes.position,At=!!Q.morphAttributes.normal,un=!!Q.morphAttributes.color;let Nt=On;ne.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Nt=_.toneMapping);const Gn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mt=Gn!==void 0?Gn.length:0,Ke=pe.get(ne),ul=p.state.lights;if(q===!0&&(le===!0||U!==T)){const _n=U===T&&ne.id===b;_e.setState(ne,U,_n)}let _t=!1;ne.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ul.state.version||Ke.outputColorSpace!==Fe||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==He||ne.fog===!0&&Ke.fog!==Ae||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==_e.numPlanes||Ke.numIntersection!==_e.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==We||Ke.morphTargets!==qe||Ke.morphNormals!==At||Ke.morphColors!==un||Ke.toneMapping!==Nt||ae.isWebGL2===!0&&Ke.morphTargetsCount!==Mt)&&(_t=!0):(_t=!0,Ke.__version=ne.version);let Di=Ke.currentProgram;_t===!0&&(Di=pa(ne,X,K));let ph=!1,ps=!1,hl=!1;const Ht=Di.getUniforms(),Oi=Ke.uniforms;if(ie.useProgram(Di.program)&&(ph=!0,ps=!0,hl=!0),ne.id!==b&&(b=ne.id,ps=!0),ph||T!==U){Ht.setValue(P,"projectionMatrix",U.projectionMatrix),Ht.setValue(P,"viewMatrix",U.matrixWorldInverse);const _n=Ht.map.cameraPosition;_n!==void 0&&_n.setValue(P,A.setFromMatrixPosition(U.matrixWorld)),ae.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,ps=!0,hl=!0)}if(K.isSkinnedMesh){Ht.setOptional(P,K,"bindMatrix"),Ht.setOptional(P,K,"bindMatrixInverse");const _n=K.skeleton;_n&&(ae.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ht.setValue(P,"boneTexture",_n.boneTexture,xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Ht.setOptional(P,K,"batchingTexture"),Ht.setValue(P,"batchingTexture",K._matricesTexture,xe));const dl=Q.morphAttributes;if((dl.position!==void 0||dl.normal!==void 0||dl.color!==void 0&&ae.isWebGL2===!0)&&me.update(K,Q,Di),(ps||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Ht.setValue(P,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Oi.envMap.value=He,Oi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ps&&(Ht.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&rg(Oi,hl),Ae&&ne.fog===!0&&ue.refreshFogUniforms(Oi,Ae),ue.refreshMaterialUniforms(Oi,ne,Y,B,be),xo.upload(P,dh(Ke),Oi,xe)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(xo.upload(P,dh(Ke),Oi,xe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(P,"center",K.center),Ht.setValue(P,"modelViewMatrix",K.modelViewMatrix),Ht.setValue(P,"normalMatrix",K.normalMatrix),Ht.setValue(P,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const _n=ne.uniformsGroups;for(let fl=0,ag=_n.length;fl<ag;fl++)if(ae.isWebGL2){const mh=_n[fl];te.update(mh,Di),te.bind(mh,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function rg(U,X){U.ambientLightColor.needsUpdate=X,U.lightProbe.needsUpdate=X,U.directionalLights.needsUpdate=X,U.directionalLightShadows.needsUpdate=X,U.pointLights.needsUpdate=X,U.pointLightShadows.needsUpdate=X,U.spotLights.needsUpdate=X,U.spotLightShadows.needsUpdate=X,U.rectAreaLights.needsUpdate=X,U.hemisphereLights.needsUpdate=X}function sg(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(U,X,Q){pe.get(U.texture).__webglTexture=X,pe.get(U.depthTexture).__webglTexture=Q;const ne=pe.get(U);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=Q===void 0,ne.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,X){const Q=pe.get(U);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(U,X=0,Q=0){E=U,C=X,w=Q;let ne=!0,K=null,Ae=!1,Ne=!1;if(U){const He=pe.get(U);He.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(P.FRAMEBUFFER,null),ne=!1):He.__webglFramebuffer===void 0?xe.setupRenderTarget(U):He.__hasExternalTextures&&xe.rebindTextures(U,pe.get(U.texture).__webglTexture,pe.get(U.depthTexture).__webglTexture);const $e=U.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const We=pe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(We[X])?K=We[X][Q]:K=We[X],Ae=!0):ae.isWebGL2&&U.samples>0&&xe.useMultisampledRTT(U)===!1?K=pe.get(U).__webglMultisampledFramebuffer:Array.isArray(We)?K=We[Q]:K=We,y.copy(U.viewport),S.copy(U.scissor),O=U.scissorTest}else y.copy(oe).multiplyScalar(Y).floor(),S.copy(ce).multiplyScalar(Y).floor(),O=Ee;if(ie.bindFramebuffer(P.FRAMEBUFFER,K)&&ae.drawBuffers&&ne&&ie.drawBuffers(U,K),ie.viewport(y),ie.scissor(S),ie.setScissorTest(O),Ae){const He=pe.get(U.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,Q)}else if(Ne){const He=pe.get(U.texture),$e=X||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.__webglTexture,Q||0,$e)}b=-1},this.readRenderTargetPixels=function(U,X,Q,ne,K,Ae,Ne){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=pe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){ie.bindFramebuffer(P.FRAMEBUFFER,Fe);try{const He=U.texture,$e=He.format,We=He.type;if($e!==$t&&Ue.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===fr&&(H.has("EXT_color_buffer_half_float")||ae.isWebGL2&&H.has("EXT_color_buffer_float"));if(We!==Rn&&Ue.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===fn&&(ae.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=U.width-ne&&Q>=0&&Q<=U.height-K&&P.readPixels(X,Q,ne,K,Ue.convert($e),Ue.convert(We),Ae)}finally{const He=E!==null?pe.get(E).__webglFramebuffer:null;ie.bindFramebuffer(P.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(U,X,Q=0){const ne=Math.pow(2,-Q),K=Math.floor(X.image.width*ne),Ae=Math.floor(X.image.height*ne);xe.setTexture2D(X,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,U.x,U.y,K,Ae),ie.unbindTexture()},this.copyTextureToTexture=function(U,X,Q,ne=0){const K=X.image.width,Ae=X.image.height,Ne=Ue.convert(Q.format),Fe=Ue.convert(Q.type);xe.setTexture2D(Q,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment),X.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,U.x,U.y,K,Ae,Ne,Fe,X.image.data):X.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,U.x,U.y,X.mipmaps[0].width,X.mipmaps[0].height,Ne,X.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,ne,U.x,U.y,Ne,Fe,X.image),ne===0&&Q.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(U,X,Q,ne,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=Math.round(U.max.x-U.min.x),Ne=Math.round(U.max.y-U.min.y),Fe=U.max.z-U.min.z+1,He=Ue.convert(ne.format),$e=Ue.convert(ne.type);let We;if(ne.isData3DTexture)xe.setTexture3D(ne,0),We=P.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)xe.setTexture2DArray(ne,0),We=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ne.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ne.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),At=P.getParameter(P.UNPACK_IMAGE_HEIGHT),un=P.getParameter(P.UNPACK_SKIP_PIXELS),Nt=P.getParameter(P.UNPACK_SKIP_ROWS),Gn=P.getParameter(P.UNPACK_SKIP_IMAGES),Mt=Q.isCompressedTexture?Q.mipmaps[K]:Q.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,U.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,U.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,U.min.z),Q.isDataTexture||Q.isData3DTexture?P.texSubImage3D(We,K,X.x,X.y,X.z,Ae,Ne,Fe,He,$e,Mt.data):ne.isCompressedArrayTexture?P.compressedTexSubImage3D(We,K,X.x,X.y,X.z,Ae,Ne,Fe,He,Mt.data):P.texSubImage3D(We,K,X.x,X.y,X.z,Ae,Ne,Fe,He,$e,Mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At),P.pixelStorei(P.UNPACK_SKIP_PIXELS,un),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gn),K===0&&ne.generateMipmaps&&P.generateMipmap(We),ie.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?xe.setTextureCube(U,0):U.isData3DTexture?xe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?xe.setTexture2DArray(U,0):xe.setTexture2D(U,0),ie.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,ie.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oo?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===ta?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Gp extends Zr{}Gp.prototype.isWebGL1Renderer=!0;class ko{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new ko(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ho{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Ho(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ns extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hs{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new I;class kn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends Lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Or;const ys=new I,Fr=new I,Br=new I,zr=new re,xs=new re,Wp=new Pe,Oa=new I,Ms=new I,Fa=new I,sd=new re,kl=new re,ad=new re;class Xp extends at{constructor(e=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Ve;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hs(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new kn(n,3,0,!1)),Or.setAttribute("uv",new kn(n,2,3,!1))}this.geometry=Or,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Wp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Br.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ba(Oa.set(-.5,-.5,0),Br,a,Fr,i,r),Ba(Ms.set(.5,-.5,0),Br,a,Fr,i,r),Ba(Fa.set(.5,.5,0),Br,a,Fr,i,r),sd.set(0,0),kl.set(1,0),ad.set(1,1);let o=e.ray.intersectTriangle(Oa,Ms,Fa,!1,ys);if(o===null&&(Ba(Ms.set(-.5,.5,0),Br,a,Fr,i,r),kl.set(0,1),o=e.ray.intersectTriangle(Oa,Fa,Ms,!1,ys),o===null))return;const l=e.ray.origin.distanceTo(ys);l<e.near||l>e.far||t.push({distance:l,point:ys.clone(),uv:ln.getInterpolation(ys,Oa,Ms,Fa,sd,kl,ad,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(s,e,t,n,i,r){zr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(xs.x=r*zr.x-i*zr.y,xs.y=i*zr.x+r*zr.y):xs.copy(zr),s.copy(e),s.x+=xs.x,s.y+=xs.y,s.applyMatrix4(Wp)}const za=new I,od=new I;class Yp extends at{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){za.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(za);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){za.setFromMatrixPosition(e.matrixWorld),od.setFromMatrixPosition(this.matrixWorld);const n=za.distanceTo(od)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const ld=new I,cd=new it,ud=new it,TM=new I,hd=new Pe,ka=new I,Hl=new zt,dd=new Pe,Vl=new _r;class Nu extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hl.copy(this.boundingSphere),Hl.applyMatrix4(i),e.ray.intersectsSphere(Hl)!==!1&&(dd.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;cd.fromBufferAttribute(i.attributes.skinIndex,e),ud.fromBufferAttribute(i.attributes.skinWeight,e),ld.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=ud.getComponent(r);if(a!==0){const o=cd.getComponent(r);hd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(TM.copy(ld).applyMatrix4(hd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vo extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ti extends mt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=bt,u=bt,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new Pe,AM=new Pe;class aa{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:AM;fd.multiplyMatrices(o,t[r]),fd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new aa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ti(t,e,e,$t,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Vo),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class is extends et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kr=new Pe,pd=new Pe,Ha=[],md=new Bt,RM=new Pe,bs=new ht,ws=new zt;class Du extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,RM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),md.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(md)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),ws.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),e.ray.intersectsSphere(ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,kr),pd.multiplyMatrices(n,kr),bs.matrixWorld=pd,bs.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){const l=Ha[a];l.instanceId=r,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(i*this.count),i,this.count,gu,fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function CM(s,e){return s.z-e.z}function PM(s,e){return e.z-s.z}class LM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}}const Hr="batchId",gi=new Pe,gd=new Pe,IM=new Pe,vd=new Pe,Gl=new sa,Va=new Bt,Gi=new zt,Ss=new I,Wl=new LM,Wt=new ht,Ga=[];function UM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class qp extends ht{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Ve,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ti(t,e,e,$t,fn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const l=e.getAttribute(o),{array:c,itemSize:u,normalized:h}=l,d=new c.constructor(n*u),f=new l.constructor(d,u,h);f.setUsage(l.usage),t.setAttribute(o,f)}if(e.getIndex()!==null){const o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new et(o,1))}const a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Hr,new et(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Hr))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Hr}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Hr)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,gi),this.getBoundingBoxAt(i,Va).applyMatrix4(gi),t.union(Va))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,gi),this.getBoundingSphereAt(i,Gi).applyMatrix4(gi),t.union(Gi))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),u=c!==null;if(u&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,d=this._active,f=this._matricesTexture,m=this._matricesTexture.image.data;h.push(!0),d.push(!0);const v=this._geometryCount;this._geometryCount++,IM.toArray(m,v*16),f.needsUpdate=!0,a.push(i),o.push({start:u?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Bt,sphereInitialized:!1,sphere:new zt});const p=this.geometry.getAttribute(Hr);for(let g=0;g<i.vertexCount;g++)p.setX(i.vertexStart+g,v);return p.needsUpdate=!0,this.setGeometryAt(v,e),v}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const f in n.attributes){if(f===Hr)continue;const m=t.getAttribute(f),v=n.getAttribute(f);UM(m,v,l);const p=m.itemSize;for(let g=m.count,x=c;g<x;g++){const _=l+g;for(let M=0;M<p;M++)v.setComponent(_,M,0)}v.needsUpdate=!0}if(i){const f=o.indexStart;for(let m=0;m<a.count;m++)r.setX(f+m,l+a.getX(m));for(let m=a.count,v=o.indexCount;m<v;m++)r.setX(f+m,l);r.needsUpdate=!0}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],d=t.getAttribute("position");return h.count=i?a.count:d.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let u=c.start,h=c.start+c.count;u<h;u++){let d=u;o&&(d=o.getX(d)),r.expandByPoint(Ss.fromBufferAttribute(l,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Va),Va.getCenter(r.center);const o=a.index,l=a.attributes.position,c=this._drawRanges[e];let u=0;for(let h=c.start,d=c.start+c.count;h<d;h++){let f=h;o&&(f=o.getX(f)),Ss.fromBufferAttribute(l,f),u=Math.max(u,r.center.distanceToSquared(Ss))}r.radius=Math.sqrt(u),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Wt.material=this.material,Wt.geometry.index=l.index,Wt.geometry.attributes=l.attributes,Wt.geometry.boundingBox===null&&(Wt.geometry.boundingBox=new Bt),Wt.geometry.boundingSphere===null&&(Wt.geometry.boundingSphere=new zt);for(let c=0;c<a;c++){if(!n[c]||!i[c])continue;const u=r[c];Wt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(c,Wt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Wt.geometry.boundingBox),this.getBoundingSphereAt(c,Wt.geometry.boundingSphere),Wt.raycast(e,Ga);for(let h=0,d=Ga.length;h<d;h++){const f=Ga[h];f.object=this,f.batchId=c,t.push(f)}Ga.length=0}Wt.material=null,Wt.geometry.index=null,Wt.geometry.attributes={},Wt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,u=this._multiDrawStarts,h=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Gl.setFromProjectionMatrix(vd,e.coordinateSystem));let m=0;if(this.sortObjects){gd.copy(this.matrixWorld).invert(),Ss.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gd);for(let g=0,x=c.length;g<x;g++)if(c[g]&&l[g]){this.getMatrixAt(g,gi),this.getBoundingSphereAt(g,Gi).applyMatrix4(gi);let _=!1;if(f&&(_=!Gl.intersectsSphere(Gi)),!_){const M=Ss.distanceTo(Gi.center);Wl.push(d[g],M)}}const v=Wl.list,p=this.customSort;p===null?v.sort(r.transparent?PM:CM):p.call(this,v,n);for(let g=0,x=v.length;g<x;g++){const _=v[g];u[m]=_.start*o,h[m]=_.count,m++}Wl.reset()}else for(let v=0,p=c.length;v<p;v++)if(c[v]&&l[v]){let g=!1;if(f&&(this.getMatrixAt(v,gi),this.getBoundingSphereAt(v,Gi).applyMatrix4(gi),g=!Gl.intersectsSphere(Gi)),!g){const x=d[v];u[m]=x.start*o,h[m]=x.count,m++}}this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class Yt extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _d=new I,yd=new I,xd=new Pe,Xl=new _r,Wa=new zt;class ai extends at{constructor(e=new Ve,t=new Yt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_d.fromBufferAttribute(t,i-1),yd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_d.distanceTo(yd);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;xd.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(xd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,f=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const g=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let _=g,M=x-1;_<M;_+=f){const C=m.getX(_),w=m.getX(_+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,w),Xl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let _=g,M=x-1;_<M;_+=f){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Xl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Md=new I,bd=new I;class Cn extends ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Md.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Md.distanceTo(bd);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ou extends ai{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Go extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wd=new Pe,qc=new _r,Xa=new zt,Ya=new I;class Fu extends at{constructor(e=new Ve,t=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(i),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;wd.copy(i).invert(),qc.copy(e.ray).applyMatrix4(wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const p=c.getX(m);Ya.fromBufferAttribute(h,p),Sd(Ya,p,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Ya.fromBufferAttribute(h,m),Sd(Ya,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sd(s,e,t,n,i,r,a){const o=qc.distanceSqToPoint(s);if(o<t){const l=new I;qc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class NM extends mt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:pt,this.magFilter=r!==void 0?r:pt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class jc extends mt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}}class cr extends mt{constructor(e,t,n,i,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class DM extends cr{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ot}}class OM extends cr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ri),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class FM extends mt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,l=new Pe;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Tt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Tt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wo extends Pn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jp extends Wo{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const qa=new I,Yl=new Bu,ql=new Bu,jl=new Bu;class Zp extends Pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(qa.subVectors(i[0],i[1]).add(i[0]),c=qa);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(qa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=qa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Yl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,p),ql.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,p),jl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,p)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ql.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),jl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Yl.calc(l),ql.calc(l),jl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ed(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function BM(s,e){const t=1-s;return t*t*e}function zM(s,e){return 2*(1-s)*s*e}function kM(s,e){return s*s*e}function Is(s,e,t,n){return BM(s,e)+zM(s,t)+kM(s,n)}function HM(s,e){const t=1-s;return t*t*t*e}function VM(s,e){const t=1-s;return 3*t*t*s*e}function GM(s,e){return 3*(1-s)*s*s*e}function WM(s,e){return s*s*s*e}function Us(s,e,t,n,i){return HM(s,e)+VM(s,t)+GM(s,n)+WM(s,i)}class zu extends Pn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(e,i.x,r.x,a.x,o.x),Us(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kp extends Pn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(e,i.x,r.x,a.x,o.x),Us(e,i.y,r.y,a.y,o.y),Us(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ku extends Pn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $p extends Pn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends Pn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,i.x,r.x,a.x),Is(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vu extends Pn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,i.x,r.x,a.x),Is(e,i.y,r.y,a.y),Is(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Ed(o,l.x,c.x,u.x,h.x),Ed(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:jp,CatmullRomCurve3:Zp,CubicBezierCurve:zu,CubicBezierCurve3:Kp,EllipseCurve:Wo,LineCurve:ku,LineCurve3:$p,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:Vu,SplineCurve:Gu});class Jp extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Po[i.type]().fromJSON(i))}return this}}class Ys extends Jp{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ku(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Hu(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new zu(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Wo(e,t,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class oa extends Ve{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new I,d=new re,f=new I,m=new I,v=new I;let p=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:p=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-p,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:p=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=t;x++){const _=n+x*u*i,M=Math.sin(_),C=Math.cos(_);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*M,h.y=e[w].y,h.z=e[w].x*C,a.push(h.x,h.y,h.z),d.x=x/t,d.y=w/(e.length-1),o.push(d.x,d.y);const E=l[3*w+0]*M,b=l[3*w+1],T=l[3*w+0]*C;c.push(E,b,T)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const M=_+x*e.length,C=M,w=M+e.length,E=M+e.length+1,b=M+1;r.push(C,w,b),r.push(E,b,w)}this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.points,e.segments,e.phiStart,e.phiLength)}}class Xo extends oa{constructor(e=1,t=1,n=4,i=8){const r=new Ys;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Xo(e.radius,e.length,e.capSegments,e.radialSegments)}}class Yo extends Ve{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,u=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ds extends Ve{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const v=[],p=n/2;let g=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function x(){const M=new I,C=new I;let w=0;const E=(t-e)/n;for(let b=0;b<=r;b++){const T=[],y=b/r,S=y*(t-e)+e;for(let O=0;O<=i;O++){const W=O/i,L=W*l+o,G=Math.sin(L),B=Math.cos(L);C.x=S*G,C.y=-y*n+p,C.z=S*B,h.push(C.x,C.y,C.z),M.set(G,E,B).normalize(),d.push(M.x,M.y,M.z),f.push(W,1-y),T.push(m++)}v.push(T)}for(let b=0;b<i;b++)for(let T=0;T<r;T++){const y=v[T][b],S=v[T+1][b],O=v[T+1][b+1],W=v[T][b+1];u.push(y,S,W),u.push(S,O,W),w+=6}c.addGroup(g,w,0),g+=w}function _(M){const C=m,w=new re,E=new I;let b=0;const T=M===!0?e:t,y=M===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),m++;const S=m;for(let O=0;O<=i;O++){const L=O/i*l+o,G=Math.cos(L),B=Math.sin(L);E.x=T*B,E.y=p*y,E.z=T*G,h.push(E.x,E.y,E.z),d.push(0,y,0),w.x=G*.5+.5,w.y=B*.5*y+.5,f.push(w.x,w.y),m++}for(let O=0;O<i;O++){const W=C+O,L=S+O;M===!0?u.push(L,L+1,W):u.push(L+1,L,W),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qo extends ds{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ui extends Ve{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new I,M=new I,C=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],M),f(t[w+2],C),l(_,M,C,x)}function l(x,_,M,C){const w=C+1,E=[];for(let b=0;b<=w;b++){E[b]=[];const T=x.clone().lerp(M,b/w),y=_.clone().lerp(M,b/w),S=w-b;for(let O=0;O<=S;O++)O===0&&b===w?E[b][O]=T:E[b][O]=T.clone().lerp(y,O/S)}for(let b=0;b<w;b++)for(let T=0;T<2*(w-b)-1;T++){const y=Math.floor(T/2);T%2===0?(d(E[b][y+1]),d(E[b+1][y]),d(E[b][y])):(d(E[b][y+1]),d(E[b+1][y+1]),d(E[b+1][y]))}}function c(x){const _=new I;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(x),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function u(){const x=new I;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const M=p(x)/2/Math.PI+.5,C=g(x)/Math.PI+.5;a.push(M,1-C)}m(),h()}function h(){for(let x=0;x<a.length;x+=6){const _=a[x+0],M=a[x+2],C=a[x+4],w=Math.max(_,M,C),E=Math.min(_,M,C);w>.9&&E<.1&&(_<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){const M=x*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function m(){const x=new I,_=new I,M=new I,C=new I,w=new re,E=new re,b=new re;for(let T=0,y=0;T<r.length;T+=9,y+=6){x.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),w.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),b.set(a[y+4],a[y+5]),C.copy(x).add(_).add(M).divideScalar(3);const S=p(C);v(w,y+0,x,S),v(E,y+2,_,S),v(b,y+4,M,S)}}function v(x,_,M,C){C<0&&x.x===1&&(a[_]=x.x-1),M.x===0&&M.z===0&&(a[_]=C/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.vertices,e.indices,e.radius,e.details)}}class jo extends Ui{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}const ja=new I,Za=new I,Zl=new I,Ka=new ln;class Qp extends Ve{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(lr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:p,c:g}=Ka;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ka.getNormal(Zl),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const _=(x+1)%3,M=h[x],C=h[_],w=Ka[u[x]],E=Ka[u[_]],b=`${M}_${C}`,T=`${C}_${M}`;T in d&&d[T]?(Zl.dot(d[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),d[T]=null):b in d||(d[b]={index0:c[x],index1:c[_],normal:Zl.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:p}=d[m];ja.fromBufferAttribute(o,v),Za.fromBufferAttribute(o,p),f.push(ja.x,ja.y,ja.z),f.push(Za.x,Za.y,Za.z)}this.setAttribute("position",new Ce(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ur extends Ys{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ys().fromJSON(i))}return this}}const XM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=em(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(n&&(r=KM(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let m=t;m<i;m+=t)h=s[m],d=s[m+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return qs(r,a,t,o,l,f,0),a}};function em(s,e,t,n,i){let r,a;if(i===ob(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Td(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Td(r,s[r],s[r+1],a);return a&&Zo(a,a.next)&&(Zs(a),a=a.next),a}function vr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Zo(t,t.next)||wt(t.prev,t,t.next)===0)){if(Zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qs(s,e,t,n,i,r,a){if(!s)return;!a&&r&&tb(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qM(s,n,i,r):YM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Zs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=jM(vr(s),e,t),qs(s,e,t,n,i,r,2)):a===2&&ZM(s,e,t,n,i,r):qs(vr(s),e,t,n,i,r,1);break}}}function YM(s){const e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&qr(i,o,r,l,a,c,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qM(s,e,t,n){const i=s.prev,r=s,a=s.next;if(wt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,u=i.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,g=Zc(f,m,e,t,n),x=Zc(v,p,e,t,n);let _=s.prevZ,M=s.nextZ;for(;_&&_.z>=g&&M&&M.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=p&&_!==i&&_!==a&&qr(o,u,l,h,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&qr(o,u,l,h,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=p&&_!==i&&_!==a&&qr(o,u,l,h,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&qr(o,u,l,h,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function jM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Zo(i,r)&&tm(i,n,n.next,r)&&js(i,r)&&js(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zs(n),Zs(n.next),n=s=r),n=n.next}while(n!==s);return vr(n)}function ZM(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rb(a,o)){let l=nm(a,o);a=vr(a,a.next),l=vr(l,l.next),qs(a,e,t,n,i,r,0),qs(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function KM(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=em(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ib(c));for(i.sort($M),r=0;r<i.length;r++)t=JM(i[r],t);return t}function $M(s,e){return s.x-e.x}function JM(s,e){const t=QM(s,e);if(!t)return e;const n=nm(t,s);return vr(n,n.next),vr(t,t.next)}function QM(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&qr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),js(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&eb(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function eb(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function tb(s,e,t,n){let i=s;do i.z===0&&(i.z=Zc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,nb(i)}function nb(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Zc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ib(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function qr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function rb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!sb(s,e)&&(js(s,e)&&js(e,s)&&ab(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Zo(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Zo(s,e){return s.x===e.x&&s.y===e.y}function tm(s,e,t,n){const i=Ja(wt(s,e,t)),r=Ja(wt(s,e,n)),a=Ja(wt(t,n,s)),o=Ja(wt(t,n,e));return!!(i!==r&&a!==o||i===0&&$a(s,t,e)||r===0&&$a(s,n,e)||a===0&&$a(t,s,n)||o===0&&$a(t,e,n))}function $a(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ja(s){return s>0?1:s<0?-1:0}function sb(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&tm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function js(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function ab(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function nm(s,e){const t=new Kc(s.i,s.x,s.y),n=new Kc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Td(s,e,t,n){const i=new Kc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Kc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ob(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Fn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ad(e),Rd(n,e);let a=e.length;t.forEach(Ad);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Rd(n,t[l]);const o=XM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ad(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ko extends Ve{constructor(e=new ur([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:lb;let _,M=!1,C,w,E,b;g&&(_=g.getSpacedPoints(u),M=!0,d=!1,C=g.computeFrenetFrames(u,!1),w=new I,E=new I,b=new I),d||(p=0,f=0,m=0,v=0);const T=o.extractPoints(c);let y=T.shape;const S=T.holes;if(!Fn.isClockWise(y)){y=y.reverse();for(let P=0,V=S.length;P<V;P++){const H=S[P];Fn.isClockWise(H)&&(S[P]=H.reverse())}}const W=Fn.triangulateShape(y,S),L=y;for(let P=0,V=S.length;P<V;P++){const H=S[P];y=y.concat(H)}function G(P,V,H){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(V,H)}const B=y.length,Y=W.length;function j(P,V,H){let ae,ie,de;const pe=P.x-V.x,xe=P.y-V.y,Le=H.x-P.x,N=H.y-P.y,R=pe*pe+xe*xe,$=pe*N-xe*Le;if(Math.abs($)>Number.EPSILON){const se=Math.sqrt(R),he=Math.sqrt(Le*Le+N*N),ue=V.x-xe/se,De=V.y+pe/se,Oe=H.x-N/he,_e=H.y+Le/he,Se=((Oe-ue)*N-(_e-De)*Le)/(pe*N-xe*Le);ae=ue+pe*Se-P.x,ie=De+xe*Se-P.y;const ze=ae*ae+ie*ie;if(ze<=2)return new re(ae,ie);de=Math.sqrt(ze/2)}else{let se=!1;pe>Number.EPSILON?Le>Number.EPSILON&&(se=!0):pe<-Number.EPSILON?Le<-Number.EPSILON&&(se=!0):Math.sign(xe)===Math.sign(N)&&(se=!0),se?(ae=-xe,ie=pe,de=Math.sqrt(R)):(ae=pe,ie=xe,de=Math.sqrt(R/2))}return new re(ae/de,ie/de)}const Z=[];for(let P=0,V=L.length,H=V-1,ae=P+1;P<V;P++,H++,ae++)H===V&&(H=0),ae===V&&(ae=0),Z[P]=j(L[P],L[H],L[ae]);const oe=[];let ce,Ee=Z.concat();for(let P=0,V=S.length;P<V;P++){const H=S[P];ce=[];for(let ae=0,ie=H.length,de=ie-1,pe=ae+1;ae<ie;ae++,de++,pe++)de===ie&&(de=0),pe===ie&&(pe=0),ce[ae]=j(H[ae],H[de],H[pe]);oe.push(ce),Ee=Ee.concat(ce)}for(let P=0;P<p;P++){const V=P/p,H=f*Math.cos(V*Math.PI/2),ae=m*Math.sin(V*Math.PI/2)+v;for(let ie=0,de=L.length;ie<de;ie++){const pe=G(L[ie],Z[ie],ae);Re(pe.x,pe.y,-H)}for(let ie=0,de=S.length;ie<de;ie++){const pe=S[ie];ce=oe[ie];for(let xe=0,Le=pe.length;xe<Le;xe++){const N=G(pe[xe],ce[xe],ae);Re(N.x,N.y,-H)}}}const Ie=m+v;for(let P=0;P<B;P++){const V=d?G(y[P],Ee[P],Ie):y[P];M?(E.copy(C.normals[0]).multiplyScalar(V.x),w.copy(C.binormals[0]).multiplyScalar(V.y),b.copy(_[0]).add(E).add(w),Re(b.x,b.y,b.z)):Re(V.x,V.y,0)}for(let P=1;P<=u;P++)for(let V=0;V<B;V++){const H=d?G(y[V],Ee[V],Ie):y[V];M?(E.copy(C.normals[P]).multiplyScalar(H.x),w.copy(C.binormals[P]).multiplyScalar(H.y),b.copy(_[P]).add(E).add(w),Re(b.x,b.y,b.z)):Re(H.x,H.y,h/u*P)}for(let P=p-1;P>=0;P--){const V=P/p,H=f*Math.cos(V*Math.PI/2),ae=m*Math.sin(V*Math.PI/2)+v;for(let ie=0,de=L.length;ie<de;ie++){const pe=G(L[ie],Z[ie],ae);Re(pe.x,pe.y,h+H)}for(let ie=0,de=S.length;ie<de;ie++){const pe=S[ie];ce=oe[ie];for(let xe=0,Le=pe.length;xe<Le;xe++){const N=G(pe[xe],ce[xe],ae);M?Re(N.x,N.y+_[u-1].y,_[u-1].x+H):Re(N.x,N.y,h+H)}}}q(),le();function q(){const P=i.length/3;if(d){let V=0,H=B*V;for(let ae=0;ae<Y;ae++){const ie=W[ae];ee(ie[2]+H,ie[1]+H,ie[0]+H)}V=u+p*2,H=B*V;for(let ae=0;ae<Y;ae++){const ie=W[ae];ee(ie[0]+H,ie[1]+H,ie[2]+H)}}else{for(let V=0;V<Y;V++){const H=W[V];ee(H[2],H[1],H[0])}for(let V=0;V<Y;V++){const H=W[V];ee(H[0]+B*u,H[1]+B*u,H[2]+B*u)}}n.addGroup(P,i.length/3-P,0)}function le(){const P=i.length/3;let V=0;be(L,V),V+=L.length;for(let H=0,ae=S.length;H<ae;H++){const ie=S[H];be(ie,V),V+=ie.length}n.addGroup(P,i.length/3-P,1)}function be(P,V){let H=P.length;for(;--H>=0;){const ae=H;let ie=H-1;ie<0&&(ie=P.length-1);for(let de=0,pe=u+p*2;de<pe;de++){const xe=B*de,Le=B*(de+1),N=V+ae+xe,R=V+ie+xe,$=V+ie+Le,se=V+ae+Le;A(N,R,$,se)}}}function Re(P,V,H){l.push(P),l.push(V),l.push(H)}function ee(P,V,H){D(P),D(V),D(H);const ae=i.length/3,ie=x.generateTopUV(n,i,ae-3,ae-2,ae-1);F(ie[0]),F(ie[1]),F(ie[2])}function A(P,V,H,ae){D(P),D(V),D(ae),D(V),D(H),D(ae);const ie=i.length/3,de=x.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);F(de[0]),F(de[1]),F(de[3]),F(de[1]),F(de[2]),F(de[3])}function D(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function F(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cb(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Po[i.type]().fromJSON(i)),new Ko(n,e.options)}}const lb={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new re(r,a),new re(o,l),new re(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-h),new re(d,1-m),new re(v,1-g)]:[new re(o,1-l),new re(u,1-h),new re(f,1-m),new re(p,1-g)]}};function cb(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $o extends Ui{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $o(e.radius,e.detail)}}class la extends Ui{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new la(e.radius,e.detail)}}class Jo extends Ve{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new I,m=new re;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const g=r+p/n*a;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let v=0;v<i;v++){const p=v*(n+1);for(let g=0;g<n;g++){const x=g+p,_=x,M=x+n+1,C=x+n+2,w=x+1;o.push(_,M,w),o.push(M,C,w)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qo extends Ve{constructor(e=new ur([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;Fn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const x=m[p];Fn.isClockWise(x)===!0&&(m[p]=x.reverse())}const v=Fn.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const x=m[p];f=f.concat(x)}for(let p=0,g=f.length;p<g;p++){const x=f[p];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let p=0,g=v.length;p<g;p++){const x=v[p],_=x[0]+h,M=x[1]+h,C=x[2]+h;n.push(_,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ub(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Qo(n,e.curveSegments)}}function ub(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class ca extends Ve{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){const x=[],_=g/n;let M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(i+w*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(i+w*r)*Math.sin(a+_*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(w+M,1-_),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const _=u[g][x+1],M=u[g][x],C=u[g+1][x],w=u[g+1][x+1];(g!==0||a>0)&&f.push(_,M,w),(g!==n-1||l<Math.PI)&&f.push(M,C,w)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class el extends Ui{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new el(e.radius,e.detail)}}class tl extends Ve{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(v),h.y=(e+t*Math.cos(p))*Math.sin(v),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,x=(i+1)*f+m;a.push(v,p,x),a.push(p,g,x)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nl extends Ve{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],u=[],h=new I,d=new I,f=new I,m=new I,v=new I,p=new I,g=new I;for(let _=0;_<=n;++_){const M=_/n*r*Math.PI*2;x(M,r,a,e,f),x(M+.01,r,a,e,m),p.subVectors(m,f),g.addVectors(m,f),v.crossVectors(p,g),g.crossVectors(v,p),v.normalize(),g.normalize();for(let C=0;C<=i;++C){const w=C/i*Math.PI*2,E=-t*Math.cos(w),b=t*Math.sin(w);h.x=f.x+(E*g.x+b*v.x),h.y=f.y+(E*g.y+b*v.y),h.z=f.z+(E*g.z+b*v.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(_/n),u.push(C/i)}}for(let _=1;_<=n;_++)for(let M=1;M<=i;M++){const C=(i+1)*(_-1)+(M-1),w=(i+1)*_+(M-1),E=(i+1)*_+M,b=(i+1)*(_-1)+M;o.push(C,w,b),o.push(w,E,b)}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));function x(_,M,C,w,E){const b=Math.cos(_),T=Math.sin(_),y=C/M*_,S=Math.cos(y);E.x=w*(2+S)*.5*b,E.y=w*(2+S)*T*.5,E.z=w*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class il extends Ve{constructor(e=new Vu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new re;let u=new I;const h=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function v(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),x(),g()}function p(_){u=e.getPointAt(_/t,u);const M=a.normals[_],C=a.binormals[_];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,b=Math.sin(E),T=-Math.cos(E);l.x=T*M.x+b*C.x,l.y=T*M.y+b*C.y,l.z=T*M.z+b*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function g(){for(let _=1;_<=t;_++)for(let M=1;M<=i;M++){const C=(i+1)*(_-1)+(M-1),w=(i+1)*_+(M-1),E=(i+1)*_+M,b=(i+1)*(_-1)+M;m.push(C,w,b),m.push(w,E,b)}}function x(){for(let _=0;_<=t;_++)for(let M=0;M<=i;M++)c.x=_/t,c.y=M/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new il(new Po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class im extends Ve{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new I,r=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let m=d,v=d+f;m<v;m+=3)for(let p=0;p<3;p++){const g=o.getX(m+p),x=o.getX(m+(p+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,x),Cd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;i.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Cd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Cd(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Pd=Object.freeze({__proto__:null,BoxGeometry:Li,CapsuleGeometry:Xo,CircleGeometry:Yo,ConeGeometry:qo,CylinderGeometry:ds,DodecahedronGeometry:jo,EdgesGeometry:Qp,ExtrudeGeometry:Ko,IcosahedronGeometry:$o,LatheGeometry:oa,OctahedronGeometry:la,PlaneGeometry:Ii,PolyhedronGeometry:Ui,RingGeometry:Jo,ShapeGeometry:Qo,SphereGeometry:ca,TetrahedronGeometry:el,TorusGeometry:tl,TorusKnotGeometry:nl,TubeGeometry:il,WireframeGeometry:im});class rm extends Lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ns extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ua extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends ua{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sm extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class am extends Lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class om extends Lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class lm extends Lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cm extends Lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class um extends Yt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function rr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function hm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $c(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Wu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function hb(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=rr(h,c.times.constructor),c.values=rr(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function db(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let v;if(r<=o.times[0]){const g=u,x=h-u;v=o.values.slice(g,x)}else if(r>=o.times[m]){const g=m*h+u,x=g+h-u;v=o.values.slice(g,x)}else{const g=o.createInterpolant(),x=u,_=h-u;g.evaluate(r),v=g.resultBuffer.slice(x,_)}l==="quaternion"&&new Ft().fromArray(v).normalize().conjugate().toArray(v);const p=c.times.length;for(let g=0;g<p;++g){const x=g*f+d;if(l==="quaternion")Ft.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{const _=f-d*2;for(let M=0;M<_;++M)c.values[x+M]-=v[M]}}}return s.blendMode=Mu,s}const fb={convertArray:rr,isTypedArray:hm,getKeyframeOrder:dm,sortedArray:$c,flattenJSON:Wu,subclip:hb,makeClipAdditive:db};class fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fm extends fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tr,endingEnd:tr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case nr:r=e,o=2*t-n;break;case zs:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nr:a=e,l=2*n-t;break;case zs:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,x=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*p+(1.5+f)*v+.5*m,M=f*p-f*v;for(let C=0;C!==o;++C)r[C]=g*a[u+C]+x*a[c+C]+_*a[l+C]+M*a[h+C];return r}}class Xu extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class pm extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rr(t,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rr(e.times,Array),values:rr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case Ri:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Ri;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&hm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ri;class yr extends Ln{}yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=mr;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yu extends Ln{}Yu.prototype.ValueTypeName="color";class rs extends Ln{}rs.prototype.ValueTypeName="number";class mm extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ci extends Ln{InterpolantFactoryMethodLinear(e){return new mm(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion";Ci.prototype.DefaultInterpolation=Ri;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Ln{}xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=mr;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Ln{}ss.prototype.ValueTypeName="vector";class as{constructor(e,t=-1,n,i=Do){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mb(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=dm(l);l=$c(l,1,u),c=$c(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,v){if(f.length!==0){const p=[],g=[];Wu(f,p,g,m),p.length!==0&&v.push(new h(d,p,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];p.push(_.time),g.push(_.morphTarget===v?1:0)}i.push(new rs(".morphTargetInfluence["+v+"]",p,g))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(ss,f+".position",d,"pos",i),n(Ci,f+".quaternion",d,"rot",i),n(ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Yu;case"quaternion":return Ci;case"bool":case"boolean":return yr;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function mb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pb(s.type);if(s.times===void 0){const t=[],n=[];Wu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qu{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const gm=new qu;class qt{constructor(e){this.manager=e!==void 0?e:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qt.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class gb extends Error{constructor(e,t){super(e),this.response=t}}class vn extends qt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){x();function x(){h.read().then(({done:_,value:M})=>{if(_)g.close();else{v+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,E=u.length;w<E;w++){const b=u[w];b.onProgress&&b.onProgress(C)}g.enqueue(M),x()}})}}});return new Response(p)}else throw new gb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ni.add(e,c);const u=Zn[e];delete Zn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vb extends qt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new vn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=as.parse(e[n]);t.push(i)}return t}}class _b extends qt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new cr,l=new vn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=r.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=pt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=pt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Ks extends qt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ni.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Xs("img");function l(){u(),ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class yb extends qt{constructor(e){super(e)}load(e,t,n,i){const r=new ra;r.colorSpace=an;const a=new Ks(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class xb extends qt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ti,o=new vn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ot,a.wrapT=c.wrapT!==void 0?c.wrapT:Ot,a.magFilter=c.magFilter!==void 0?c.magFilter:pt,a.minFilter=c.minFilter!==void 0?c.minFilter:pt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=pn),c.mipmapCount===1&&(a.minFilter=pt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class vm extends qt{constructor(e){super(e)}load(e,t,n,i){const r=new mt,a=new Ks(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ni extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _m extends Ni{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kl=new Pe,Ld=new I,Id=new I;class ju{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mb extends ju{constructor(){super(new ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zu extends Ni{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ud=new Pe,Es=new I,$l=new I;class bb extends ju{constructor(){super(new ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),$l.copy(n.position),$l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($l),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),Ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud)}}class Ku extends Ni{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wb extends ju{constructor(){super(new bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $u extends Ni{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new wb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ym extends Ni{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xm extends Ni{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Mm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class bm extends Ni{constructor(e=new Mm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class rl extends qt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new vn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=rl.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ve().setHex(a.value);break;case"v2":i.uniforms[r].value=new re().fromArray(a.value);break;case"v3":i.uniforms[r].value=new I().fromArray(a.value);break;case"v4":i.uniforms[r].value=new it().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Xe().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Pe().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new re().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:rm,SpriteMaterial:Uu,RawShaderMaterial:Ns,ShaderMaterial:tn,PointsMaterial:Go,MeshPhysicalMaterial:Vn,MeshStandardMaterial:ua,MeshPhongMaterial:sm,MeshToonMaterial:am,MeshNormalMaterial:om,MeshLambertMaterial:lm,MeshDepthMaterial:Lu,MeshDistanceMaterial:Iu,MeshBasicMaterial:Qt,MeshMatcapMaterial:cm,LineDashedMaterial:um,LineBasicMaterial:Yt,Material:Lt};return new t[e]}}class Bn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wm extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Sm extends qt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new vn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const p=f.interleavedBuffers[m],g=r(f,p.buffer),x=Wr(p.type,g),_=new hs(x,p.stride);return _.uuid=p.uuid,t[m]=_,_}function r(f,m){if(n[m]!==void 0)return n[m];const p=f.arrayBuffers[m],g=new Uint32Array(p).buffer;return n[m]=g,g}const a=e.isInstancedBufferGeometry?new wm:new Ve,o=e.data.index;if(o!==void 0){const f=Wr(o.type,o.array);a.setIndex(new et(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let v;if(m.isInterleavedBufferAttribute){const p=i(e.data,m.data);v=new kn(p,m.itemSize,m.offset,m.normalized)}else{const p=Wr(m.type,m.array),g=m.isInstancedBufferAttribute?is:et;v=new g(p,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],v=[];for(let p=0,g=m.length;p<g;p++){const x=m[p];let _;if(x.isInterleavedBufferAttribute){const M=i(e.data,x.data);_=new kn(M,x.itemSize,x.offset,x.normalized)}else{const M=Wr(x.type,x.array);_=new et(M,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),v.push(_)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){const v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new I;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new zt(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Sb extends qt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Bn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new vn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Bn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new vn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let h=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new ur().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new aa().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Sm;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Pd?o=Pd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new rl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=as.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Wr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new qu(t);r=new Ks(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o(p);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new Ti(g.data,g.width,g.height)))}i[h.uuid]=new ir(f)}else{const f=o(h.url);i[h.uuid]=new ir(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Wr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Ks(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=await r(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Ti(m.data,m.width,m.height)))}n[l.uuid]=new ir(u)}else{const u=await r(l.url);n[l.uuid]=new ir(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new ra,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Ti:u=new mt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,Eb)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Nd),u.wrapT=n(o.wrap[1],Nd)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Dd)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Dd)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,v=d.length;m<v;m++){const p=d[m];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),f.push(n[p])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(e.type){case"Scene":a=new ns,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ve(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ho(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ko(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new ct(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new bn(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ym(e.color,e.intensity);break;case"DirectionalLight":a=new $u(e.color,e.intensity);break;case"PointLight":a=new Ku(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new xm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Zu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new _m(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new bm().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=l(e.material),a=new Nu(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=l(e.material),a=new ht(u,h);break;case"InstancedMesh":u=o(e.geometry),h=l(e.material);const d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Du(u,h,d),a.instanceMatrix=new is(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new is(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=l(e.material),a=new qp(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const p=new Bt;p.min.fromArray(v.boxMin),p.max.fromArray(v.boxMax);const g=new zt;return g.radius=v.sphereRadius,g.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:p,sphereInitialized:v.sphereInitialized,sphere:g}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new Yp;break;case"Line":a=new ai(o(e.geometry),l(e.material));break;case"LineLoop":a=new Ou(o(e.geometry),l(e.material));break;case"LineSegments":a=new Cn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Fu(o(e.geometry),l(e.material));break;case"Sprite":a=new Xp(l(e.material));break;case"Group":a=new ti;break;case"Bone":a=new Vo;break;default:a=new at}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const m=d[f];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const m=d[f],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const Eb={UVMapping:Uo,CubeReflectionMapping:ri,CubeRefractionMapping:Ai,EquirectangularReflectionMapping:Fs,EquirectangularRefractionMapping:Bs,CubeUVReflectionMapping:cs},Nd={RepeatWrapping:si,ClampToEdgeWrapping:Ot,MirroredRepeatWrapping:dr},Dd={NearestFilter:bt,NearestMipmapNearestFilter:Qr,NearestMipmapLinearFilter:$n,LinearFilter:pt,LinearMipmapNearestFilter:or,LinearMipmapLinearFilter:pn};class Em extends qt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ni.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(e,l),r.manager.itemStart(e)}}let Qa;class Ju{static getContext(){return Qa===void 0&&(Qa=new(window.AudioContext||window.webkitAudioContext)),Qa}static setContext(e){Qa=e}}class Tb extends qt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new vn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Ju.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const Od=new Pe,Fd=new Pe,Wi=new Pe;class Ab{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ct,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ct,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Wi.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(lr*t.fov*.5)/t.zoom;let o,l;Fd.elements[12]=-i,Od.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Wi.elements[0]=2*t.near/(l-o),Wi.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Wi),o=-a*t.aspect-r,l=a*t.aspect-r,Wi.elements[0]=2*t.near/(l-o),Wi.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Wi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Fd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Od)}}class Qu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bd(){return(typeof performance>"u"?Date:performance).now()}const Xi=new I,zd=new Ft,Rb=new I,Yi=new I;class Cb extends at{constructor(){super(),this.type="AudioListener",this.context=Ju.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Qu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Xi,zd,Rb),Yi.set(0,0,-1).applyQuaternion(zd),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Xi.x,i),t.positionY.linearRampToValueAtTime(Xi.y,i),t.positionZ.linearRampToValueAtTime(Xi.z,i),t.forwardX.linearRampToValueAtTime(Yi.x,i),t.forwardY.linearRampToValueAtTime(Yi.y,i),t.forwardZ.linearRampToValueAtTime(Yi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Xi.x,Xi.y,Xi.z),t.setOrientation(Yi.x,Yi.y,Yi.z,n.x,n.y,n.z)}}class Tm extends at{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const qi=new I,kd=new Ft,Pb=new I,ji=new I;class Lb extends Tm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(qi,kd,Pb),ji.set(0,0,1).applyQuaternion(kd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(qi.x,n),t.positionY.linearRampToValueAtTime(qi.y,n),t.positionZ.linearRampToValueAtTime(qi.z,n),t.orientationX.linearRampToValueAtTime(ji.x,n),t.orientationY.linearRampToValueAtTime(ji.y,n),t.orientationZ.linearRampToValueAtTime(ji.z,n)}else t.setPosition(qi.x,qi.y,qi.z),t.setOrientation(ji.x,ji.y,ji.z)}}class Ib{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Am{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const eh="\\[\\]\\.:\\/",Ub=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",Nb="[^"+eh.replace("\\.","")+"]",Db=/((?:WC+[\/:])*)/.source.replace("WC",th),Ob=/(WCOD+)?/.source.replace("WCOD",Nb),Fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Bb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),zb=new RegExp("^"+Db+Ob+Fb+Bb+"$"),kb=["material","materials","bones","map"];class Hb{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(e){const t=zb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Hb;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=gn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let v=0,p=a;v!==p;++v)r[v].push(new Qe(d,n[v],i[v]))}else if(m<c){o=e[m];const v=--c,p=e[v];t[p.uuid]=m,e[m]=p,t[f]=v,e[v]=d;for(let g=0,x=a;g!==x;++g){const _=r[g],M=_[v];let C=_[m];_[m]=M,C===void 0&&(C=new Qe(d,n[g],i[g])),_[v]=C}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const h=r++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,m=i;f!==m;++f){const v=n[f],p=v[h],g=v[u];v[u]=p,v[h]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<r){const d=--r,f=e[d],m=--a,v=e[m];t[f.uuid]=h,e[h]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let p=0,g=i;p!==g;++p){const x=n[p],_=x[d],M=x[m];x[h]=_,x[d]=M,x.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,v=i;m!==v;++m){const p=n[m];p[h]=p[d],p.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(h);for(let d=u,f=l.length;d!==f;++d){const m=l[d];h[d]=new Qe(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Rm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:tr,endingEnd:tr};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=pp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Mu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Do:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===mp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===fp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=nr,i.endingEnd=nr):(e?i.endingStart=this.zeroSlopeAtStart?nr:tr:i.endingStart=zs,t?i.endingEnd=this.zeroSlopeAtEnd?nr:tr:i.endingEnd=zs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Gb=new Float32Array(1);class Wb extends Hn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;m=new Am(Qe.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Xu(new Float32Array(2),new Float32Array(2),1,Gb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?as.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Do),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Rm(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?as.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class sl{constructor(e){this.value=e}clone(){return new sl(this.value.clone===void 0?this.value:this.value.clone())}}let Xb=0;class Yb extends Hn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Xb++}),this.name="",this.usage=Gs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class qb extends hs{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class jb{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Hd=new Pe;class Cm{constructor(e,t,n=0,i=1/0){this.ray=new _r(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(Vd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jc(e[i],this,n,t);return n.sort(Vd),n}}function Vd(s,e){return s.distance-e.distance}function Jc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Jc(i[r],e,t,!0)}}class Qc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Gd=new re;class Pm{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wd=new I,eo=new I;class Lm{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wd.subVectors(e,this.start),eo.subVectors(this.end,this.start);const n=eo.dot(eo);let r=eo.dot(Wd)/n;return t&&(r=Tt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Xd=new I;class Kb extends at{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ve,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ce(i,3));const r=new Yt({fog:!1,toneMapped:!1});this.cone=new Cn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Xd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Xd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const vi=new I,to=new Pe,Jl=new Pe;class $b extends Cn{constructor(e){const t=Im(e),n=new Ve,i=[],r=[],a=new ve(0,0,1),o=new ve(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ce(i,3)),n.setAttribute("color",new Ce(r,3));const l=new Yt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Jl.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(to.multiplyMatrices(Jl,o.matrixWorld),vi.setFromMatrixPosition(to),i.setXYZ(a,vi.x,vi.y,vi.z),to.multiplyMatrices(Jl,o.parent.matrixWorld),vi.setFromMatrixPosition(to),i.setXYZ(a+1,vi.x,vi.y,vi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Im(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Im(s.children[t]));return e}class Jb extends ht{constructor(e,t,n){const i=new ca(t,4,2),r=new Qt({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Qb=new I,Yd=new ve,qd=new ve;class ew extends at{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new la(t);i.rotateY(Math.PI*.5),this.material=new Qt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new et(a,3)),this.add(new ht(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Yd.copy(this.light.color),qd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Yd:qd;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Qb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class tw extends Cn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new Ve;u.setAttribute("position",new Ce(l,3)),u.setAttribute("color",new Ce(c,3));const h=new Yt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nw extends Cn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new ve(r),a=new ve(a);const o=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);const v=h&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){const d=h&1?r:a,f=e-e/n*h;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),p=Math.sin(v)*f,g=Math.cos(v)*f;o.push(p,0,g),l.push(d.r,d.g,d.b),v=(m+1)/i*(Math.PI*2),p=Math.sin(v)*f,g=Math.cos(v)*f,o.push(p,0,g),l.push(d.r,d.g,d.b)}}const c=new Ve;c.setAttribute("position",new Ce(o,3)),c.setAttribute("color",new Ce(l,3));const u=new Yt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const jd=new I,no=new I,Zd=new I;class iw extends at{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ve;i.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Yt({fog:!1,toneMapped:!1});this.lightPlane=new ai(i,r),this.add(this.lightPlane),i=new Ve,i.setAttribute("position",new Ce([0,0,0,0,0,1],3)),this.targetLine=new ai(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),jd.setFromMatrixPosition(this.light.matrixWorld),no.setFromMatrixPosition(this.light.target.matrixWorld),Zd.subVectors(no,jd),this.lightPlane.lookAt(no),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(no),this.targetLine.scale.z=Zd.length()}}const io=new I,St=new ia;class rw extends Cn{constructor(e){const t=new Ve,n=new Yt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){l(m),l(v)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Ce(i,3)),t.setAttribute("color",new Ce(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ve(16755200),u=new ve(16711680),h=new ve(43775),d=new ve(16777215),f=new ve(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;St.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Rt("c",t,e,St,0,0,-1),Rt("t",t,e,St,0,0,1),Rt("n1",t,e,St,-n,-i,-1),Rt("n2",t,e,St,n,-i,-1),Rt("n3",t,e,St,-n,i,-1),Rt("n4",t,e,St,n,i,-1),Rt("f1",t,e,St,-n,-i,1),Rt("f2",t,e,St,n,-i,1),Rt("f3",t,e,St,-n,i,1),Rt("f4",t,e,St,n,i,1),Rt("u1",t,e,St,n*.7,i*1.1,-1),Rt("u2",t,e,St,-n*.7,i*1.1,-1),Rt("u3",t,e,St,0,i*2,-1),Rt("cf1",t,e,St,-n,0,1),Rt("cf2",t,e,St,n,0,1),Rt("cf3",t,e,St,0,-i,1),Rt("cf4",t,e,St,0,i,1),Rt("cn1",t,e,St,-n,0,-1),Rt("cn2",t,e,St,n,0,-1),Rt("cn3",t,e,St,0,-i,-1),Rt("cn4",t,e,St,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rt(s,e,t,n,i,r,a){io.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],io.x,io.y,io.z)}}const ro=new Bt;class sw extends Cn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ve;r.setIndex(new et(n,1)),r.setAttribute("position",new et(i,3)),super(r,new Yt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ro.setFromObject(this.object),ro.isEmpty())return;const t=ro.min,n=ro.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aw extends Cn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ve;r.setIndex(new et(n,1)),r.setAttribute("position",new Ce(i,3)),super(r,new Yt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class ow extends ai{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ve;a.setAttribute("position",new Ce(r,3)),a.computeBoundingSphere(),super(a,new Yt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ve;l.setAttribute("position",new Ce(o,3)),l.computeBoundingSphere(),this.add(new ht(l,new Qt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Kd=new I;let so,Ql;class lw extends at{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",so===void 0&&(so=new Ve,so.setAttribute("position",new Ce([0,0,0,0,1,0],3)),Ql=new ds(0,.5,1,5,1),Ql.translate(0,-.5,0)),this.position.copy(t),this.line=new ai(so,new Yt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ht(Ql,new Qt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Kd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Kd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class cw extends Cn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ve;i.setAttribute("position",new Ce(t,3)),i.setAttribute("color",new Ce(n,3));const r=new Yt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ve,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Um{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ys,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const x=[];for(let _=0,M=g.length;_<M;_++){const C=g[_],w=new ur;w.curves=C.curves,x.push(w)}return x}function n(g,x){const _=x.length;let M=!1;for(let C=_-1,w=0;w<_;C=w++){let E=x[C],b=x[w],T=b.x-E.x,y=b.y-E.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(E=x[w],T=-T,b=x[C],y=-y),g.y<E.y||g.y>b.y)continue;if(g.y===E.y){if(g.x===E.x)return!0}else{const S=y*(g.x-E.x)-T*(g.y-E.y);if(S===0)return!0;if(S<0)continue;M=!M}}else{if(g.y!==E.y)continue;if(b.x<=g.x&&g.x<=E.x||E.x<=g.x&&g.x<=b.x)return!0}}return M}const i=Fn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ur,l.curves=o.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],m=0,v;d[m]=void 0,f[m]=[];for(let g=0,x=r.length;g<x;g++)o=r[g],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!u&&d[m]&&m++,d[m]={s:new ur,p:v},d[m].s.curves=o.curves,u&&m++,f[m]=[]):f[m].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let g=!1,x=0;for(let _=0,M=d.length;_<M;_++)h[_]=[];for(let _=0,M=d.length;_<M;_++){const C=f[_];for(let w=0;w<C.length;w++){const E=C[w];let b=!0;for(let T=0;T<d.length;T++)n(E.p,d[T].p)&&(_!==T&&x++,b?(b=!1,h[T].push(E)):g=!0);b&&h[_].push(E)}}x>0&&g===!1&&(f=h)}let p;for(let g=0,x=d.length;g<x;g++){l=d[g].s,c.push(l),p=f[g];for(let _=0,M=p.length;_<M;_++)l.holes.push(p[_].h)}return c}}class uw extends wn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ls);const hw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:du,AddEquation:Mi,AddOperation:Jf,AdditiveAnimationBlendMode:Mu,AdditiveBlending:So,AgXToneMapping:ip,AlphaFormat:lp,AlwaysCompare:Tp,AlwaysDepth:Xf,AlwaysStencilFunc:Vc,AmbientLight:ym,AnimationAction:Rm,AnimationClip:as,AnimationLoader:vb,AnimationMixer:Wb,AnimationObjectGroup:Vb,AnimationUtils:fb,ArcCurve:jp,ArrayCamera:Vp,ArrowHelper:lw,AttachedBindMode:gc,Audio:Tm,AudioAnalyser:Ib,AudioContext:Ju,AudioListener:Cb,AudioLoader:Tb,AxesHelper:cw,BackSide:Xt,BasicDepthPacking:vp,BasicShadowMap:Af,BatchedMesh:qp,Bone:Vo,BooleanKeyframeTrack:yr,Box2:Pm,Box3:Bt,Box3Helper:aw,BoxGeometry:Li,BoxHelper:sw,BufferAttribute:et,BufferGeometry:Ve,BufferGeometryLoader:Sm,ByteType:ap,Cache:ni,Camera:ia,CameraHelper:rw,CanvasTexture:FM,CapsuleGeometry:Xo,CatmullRomCurve3:Zp,CineonToneMapping:tp,CircleGeometry:Yo,ClampToEdgeWrapping:Ot,Clock:Qu,Color:ve,ColorKeyframeTrack:Yu,ColorManagement:lt,CompressedArrayTexture:DM,CompressedCubeTexture:OM,CompressedTexture:cr,CompressedTextureLoader:_b,ConeGeometry:qo,ConstantAlphaFactor:Vf,ConstantColorFactor:kf,CubeCamera:Up,CubeReflectionMapping:ri,CubeRefractionMapping:Ai,CubeTexture:ra,CubeTextureLoader:yb,CubeUVReflectionMapping:cs,CubicBezierCurve:zu,CubicBezierCurve3:Kp,CubicInterpolant:fm,CullFaceBack:hc,CullFaceFront:Tf,CullFaceFrontBack:Tg,CullFaceNone:Ef,Curve:Pn,CurvePath:Jp,CustomBlending:Rf,CustomToneMapping:np,CylinderGeometry:ds,Cylindrical:Zb,Data3DTexture:Tu,DataArrayTexture:Fo,DataTexture:Ti,DataTextureLoader:xb,DataUtils:P0,DecrementStencilOp:Ng,DecrementWrapStencilOp:Og,DefaultLoadingManager:gm,DepthFormat:Ei,DepthStencilFormat:pr,DepthTexture:Pu,DetachedBindMode:sp,DirectionalLight:$u,DirectionalLightHelper:iw,DiscreteInterpolant:pm,DisplayP3ColorSpace:Oo,DodecahedronGeometry:jo,DoubleSide:on,DstAlphaFactor:Df,DstColorFactor:Ff,DynamicCopyUsage:$g,DynamicDrawUsage:Xg,DynamicReadUsage:jg,EdgesGeometry:Qp,EllipseCurve:Wo,EqualCompare:bp,EqualDepth:qf,EqualStencilFunc:kg,EquirectangularReflectionMapping:Fs,EquirectangularRefractionMapping:Bs,Euler:en,EventDispatcher:Hn,ExtrudeGeometry:Ko,FileLoader:vn,Float16BufferAttribute:O0,Float32BufferAttribute:Ce,FloatType:fn,Fog:Ho,FogExp2:ko,FramebufferTexture:jc,FrontSide:zn,Frustum:sa,GLBufferAttribute:jb,GLSL1:Qg,GLSL3:Gc,GreaterCompare:wp,GreaterDepth:Zf,GreaterEqualCompare:Ep,GreaterEqualDepth:jf,GreaterEqualStencilFunc:Wg,GreaterStencilFunc:Vg,GridHelper:tw,Group:ti,HalfFloatType:fr,HemisphereLight:_m,HemisphereLightHelper:ew,IcosahedronGeometry:$o,ImageBitmapLoader:Em,ImageLoader:Ks,ImageUtils:Eu,IncrementStencilOp:Ug,IncrementWrapStencilOp:Dg,InstancedBufferAttribute:is,InstancedBufferGeometry:wm,InstancedInterleavedBuffer:qb,InstancedMesh:Du,Int16BufferAttribute:N0,Int32BufferAttribute:D0,Int8BufferAttribute:L0,IntType:fu,InterleavedBuffer:hs,InterleavedBufferAttribute:kn,Interpolant:fs,InterpolateDiscrete:mr,InterpolateLinear:Ri,InterpolateSmooth:yo,InvertStencilOp:Fg,KeepStencilOp:$i,KeyframeTrack:Ln,LOD:Yp,LatheGeometry:oa,Layers:Bo,LessCompare:Mp,LessDepth:Yf,LessEqualCompare:wu,LessEqualDepth:Os,LessEqualStencilFunc:Hg,LessStencilFunc:zg,Light:Ni,LightProbe:bm,Line:ai,Line3:Lm,LineBasicMaterial:Yt,LineCurve:ku,LineCurve3:$p,LineDashedMaterial:um,LineLoop:Ou,LineSegments:Cn,LinearDisplayP3ColorSpace:ta,LinearFilter:pt,LinearInterpolant:Xu,LinearMipMapLinearFilter:Pg,LinearMipMapNearestFilter:Cg,LinearMipmapLinearFilter:pn,LinearMipmapNearestFilter:or,LinearSRGBColorSpace:li,LinearToneMapping:Qf,LinearTransfer:ks,Loader:qt,LoaderUtils:Bn,LoadingManager:qu,LoopOnce:fp,LoopPingPong:mp,LoopRepeat:pp,LuminanceAlphaFormat:up,LuminanceFormat:cp,MOUSE:Ki,Material:Lt,MaterialLoader:rl,MathUtils:gr,Matrix3:Xe,Matrix4:Pe,MaxEquation:mc,Mesh:ht,MeshBasicMaterial:Qt,MeshDepthMaterial:Lu,MeshDistanceMaterial:Iu,MeshLambertMaterial:lm,MeshMatcapMaterial:cm,MeshNormalMaterial:om,MeshPhongMaterial:sm,MeshPhysicalMaterial:Vn,MeshStandardMaterial:ua,MeshToonMaterial:am,MinEquation:pc,MirroredRepeatWrapping:dr,MixOperation:$f,MultiplyBlending:fc,MultiplyOperation:ea,NearestFilter:bt,NearestMipMapLinearFilter:Rg,NearestMipMapNearestFilter:Ag,NearestMipmapLinearFilter:$n,NearestMipmapNearestFilter:Qr,NeutralToneMapping:rp,NeverCompare:xp,NeverDepth:Wf,NeverStencilFunc:Bg,NoBlending:ii,NoColorSpace:Jn,NoToneMapping:On,NormalAnimationBlendMode:Do,NormalBlending:ar,NotEqualCompare:Sp,NotEqualDepth:Kf,NotEqualStencilFunc:Gg,NumberKeyframeTrack:rs,Object3D:at,ObjectLoader:Sb,ObjectSpaceNormalMap:yp,OctahedronGeometry:la,OneFactor:If,OneMinusConstantAlphaFactor:Gf,OneMinusConstantColorFactor:Hf,OneMinusDstAlphaFactor:Of,OneMinusDstColorFactor:Bf,OneMinusSrcAlphaFactor:To,OneMinusSrcColorFactor:Nf,OrthographicCamera:bn,P3Primaries:Vs,PCFShadowMap:uu,PCFSoftShadowMap:hu,PMREMGenerator:Xc,Path:Ys,PerspectiveCamera:ct,Plane:Nn,PlaneGeometry:Ii,PlaneHelper:ow,PointLight:Ku,PointLightHelper:Jb,Points:Fu,PointsMaterial:Go,PolarGridHelper:nw,PolyhedronGeometry:Ui,PositionalAudio:Lb,PropertyBinding:Qe,PropertyMixer:Am,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:Vu,Quaternion:Ft,QuaternionKeyframeTrack:Ci,QuaternionLinearInterpolant:mm,RED_GREEN_RGTC2_Format:kc,RED_RGTC1_Format:dp,REVISION:ls,RGBADepthPacking:_p,RGBAFormat:$t,RGBAIntegerFormat:yu,RGBA_ASTC_10x10_Format:Nc,RGBA_ASTC_10x5_Format:Lc,RGBA_ASTC_10x6_Format:Ic,RGBA_ASTC_10x8_Format:Uc,RGBA_ASTC_12x10_Format:Dc,RGBA_ASTC_12x12_Format:Oc,RGBA_ASTC_4x4_Format:wc,RGBA_ASTC_5x4_Format:Sc,RGBA_ASTC_5x5_Format:Ec,RGBA_ASTC_6x5_Format:Tc,RGBA_ASTC_6x6_Format:Ac,RGBA_ASTC_8x5_Format:Rc,RGBA_ASTC_8x6_Format:Cc,RGBA_ASTC_8x8_Format:Pc,RGBA_BPTC_Format:_o,RGBA_ETC2_EAC_Format:bc,RGBA_PVRTC_2BPPV1_Format:xc,RGBA_PVRTC_4BPPV1_Format:yc,RGBA_S3TC_DXT1_Format:mo,RGBA_S3TC_DXT3_Format:go,RGBA_S3TC_DXT5_Format:vo,RGB_BPTC_SIGNED_Format:Fc,RGB_BPTC_UNSIGNED_Format:Bc,RGB_ETC1_Format:xu,RGB_ETC2_Format:Mc,RGB_PVRTC_2BPPV1_Format:_c,RGB_PVRTC_4BPPV1_Format:vc,RGB_S3TC_DXT1_Format:po,RGFormat:hp,RGIntegerFormat:_u,RawShaderMaterial:Ns,Ray:_r,Raycaster:Cm,Rec709Primaries:Hs,RectAreaLight:xm,RedFormat:gu,RedIntegerFormat:vu,ReinhardToneMapping:ep,RenderTarget:Pp,RepeatWrapping:si,ReplaceStencilOp:Ig,ReverseSubtractEquation:Pf,RingGeometry:Jo,SIGNED_RED_GREEN_RGTC2_Format:Hc,SIGNED_RED_RGTC1_Format:zc,SRGBColorSpace:an,SRGBTransfer:ft,Scene:ns,ShaderChunk:je,ShaderLib:Mn,ShaderMaterial:tn,ShadowMaterial:rm,Shape:ur,ShapeGeometry:Qo,ShapePath:Um,ShapeUtils:Fn,ShortType:op,Skeleton:aa,SkeletonHelper:$b,SkinnedMesh:Nu,Source:ir,Sphere:zt,SphereGeometry:ca,Spherical:Qc,SphericalHarmonics3:Mm,SplineCurve:Gu,SpotLight:Zu,SpotLightHelper:Kb,Sprite:Xp,SpriteMaterial:Uu,SrcAlphaFactor:Eo,SrcAlphaSaturateFactor:zf,SrcColorFactor:Uf,StaticCopyUsage:Kg,StaticDrawUsage:Gs,StaticReadUsage:qg,StereoCamera:Ab,StreamCopyUsage:Jg,StreamDrawUsage:Yg,StreamReadUsage:Zg,StringKeyframeTrack:xr,SubtractEquation:Cf,SubtractiveBlending:dc,TOUCH:Kn,TangentSpaceNormalMap:Pi,TetrahedronGeometry:el,Texture:mt,TextureLoader:vm,TorusGeometry:tl,TorusKnotGeometry:nl,Triangle:ln,TriangleFanDrawMode:Ao,TriangleStripDrawMode:bu,TrianglesDrawMode:gp,TubeGeometry:il,UVMapping:Uo,Uint16BufferAttribute:Au,Uint32BufferAttribute:Ru,Uint8BufferAttribute:I0,Uint8ClampedBufferAttribute:U0,Uniform:sl,UniformsGroup:Yb,UniformsLib:ge,UniformsUtils:na,UnsignedByteType:Rn,UnsignedInt248Type:Si,UnsignedIntType:ei,UnsignedShort4444Type:pu,UnsignedShort5551Type:mu,UnsignedShortType:No,VSMShadowMap:Un,Vector2:re,Vector3:I,Vector4:it,VectorKeyframeTrack:ss,VideoTexture:NM,WebGL1Renderer:Gp,WebGL3DRenderTarget:y0,WebGLArrayRenderTarget:_0,WebGLCoordinateSystem:Dn,WebGLCubeRenderTarget:Np,WebGLMultipleRenderTargets:uw,WebGLRenderTarget:wn,WebGLRenderer:Zr,WebGLUtils:Hp,WebGPUCoordinateSystem:Ws,WireframeGeometry:im,WrapAroundEnding:zs,ZeroCurvatureEnding:tr,ZeroFactor:Lf,ZeroSlopeEnding:nr,ZeroStencilOp:Lg,_SRGBAFormat:Ro,createCanvasElement:Rp},Symbol.toStringTag,{value:"Module"}));function oi(s){return yf()?(xf(s),!0):!1}function $s(){const s=new Set,e=i=>{s.delete(i)};return{on:i=>{s.add(i);const r=()=>e(i);return oi(r),{off:r}},off:e,trigger:(...i)=>Promise.all(Array.from(s).map(r=>r(...i)))}}function gt(s){return typeof s=="function"?s():rt(s)}const eu=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dw=s=>s!=null,fw=Object.prototype.toString,pw=s=>fw.call(s)==="[object Object]",tu=()=>{};function mw(s,e){function t(...n){return new Promise((i,r)=>{Promise.resolve(s(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(i).catch(r)})}return t}function gw(s,e={}){let t,n,i=tu;const r=o=>{clearTimeout(o),i(),i=tu};return o=>{const l=gt(s),c=gt(e.maxWait);return t&&r(t),l<=0||c!==void 0&&c<=0?(n&&(r(n),n=null),Promise.resolve(o())):new Promise((u,h)=>{i=e.rejectOnCancel?h:u,c&&!n&&(n=setTimeout(()=>{t&&r(t),n=null,u(o())},c)),t=setTimeout(()=>{n&&r(n),n=null,u(o())},l)})}}function vw(s,e,t=!1){return e.reduce((n,i)=>(i in s&&(!t||s[i]!==void 0)&&(n[i]=s[i]),n),{})}function _w(s){return s||wo()}function yw(s,e=200,t={}){return mw(gw(e,t),s)}function xw(s,e=200,t={}){const n=nt(s.value),i=yw(()=>{n.value=s.value},e,t);return cn(s,()=>i()),n}function Mw(s,e={}){if(!lu(s))return Io(s);const t=Array.isArray(s.value)?Array.from({length:s.value.length}):{};for(const n in s.value)t[n]=og(()=>({get(){return s.value[n]},set(i){var r;if((r=gt(e.replaceRef))!=null?r:!0)if(Array.isArray(s.value)){const o=[...s.value];o[n]=i,s.value=o}else{const o={...s.value,[n]:i};Object.setPrototypeOf(o,Object.getPrototypeOf(s.value)),s.value=o}else s.value[n]=i}}));return t}function nh(s,e=!0,t){_w()?cu(s,t):e?s():lg(s)}function bw(s,e=1e3,t={}){const{immediate:n=!0,immediateCallback:i=!1}=t;let r=null;const a=nt(!1);function o(){r&&(clearInterval(r),r=null)}function l(){a.value=!1,o()}function c(){const u=gt(e);u<=0||(a.value=!0,i&&s(),o(),r=setInterval(s,u))}if(n&&eu&&c(),lu(e)||typeof e=="function"){const u=cn(e,()=>{a.value&&eu&&c()});oi(u)}return oi(l),{isActive:a,pause:l,resume:c}}function An(s){var e;const t=gt(s);return(e=t?.$el)!=null?e:t}const ci=eu?window:void 0;function Js(...s){let e,t,n,i;if(typeof s[0]=="string"||Array.isArray(s[0])?([t,n,i]=s,e=ci):[e,t,n,i]=s,!e)return tu;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const r=[],a=()=>{r.forEach(u=>u()),r.length=0},o=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=cn(()=>[An(e),gt(i)],([u,h])=>{if(a(),!u)return;const d=pw(h)?{...h}:h;r.push(...t.flatMap(f=>n.map(m=>o(u,f,m,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return oi(c),c}function ww(){const s=nt(!1),e=wo();return e&&cu(()=>{s.value=!0},e),s}function al(s){const e=ww();return Pt(()=>(e.value,!!s()))}function ih(s,e={}){const{immediate:t=!0,fpsLimit:n=void 0,window:i=ci}=e,r=nt(!1),a=n?1e3/n:null;let o=0,l=null;function c(d){if(!r.value||!i)return;o||(o=d);const f=d-o;if(a&&f<a){l=i.requestAnimationFrame(c);return}o=d,s({delta:f,timestamp:d}),l=i.requestAnimationFrame(c)}function u(){!r.value&&i&&(r.value=!0,o=0,l=i.requestAnimationFrame(c))}function h(){r.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return t&&u(),oi(h),{isActive:Mf(r),pause:h,resume:u}}function Sw(s,e={}){const{window:t=ci}=e,n=al(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let i;const r=nt(!1),a=c=>{r.value=c.matches},o=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a))},l=bi(()=>{n.value&&(o(),i=t.matchMedia(gt(s)),"addEventListener"in i?i.addEventListener("change",a):i.addListener(a),r.value=i.matches)});return oi(()=>{l(),o(),i=void 0}),r}function Ew(s,e,t={}){const{window:n=ci,...i}=t;let r;const a=al(()=>n&&"MutationObserver"in n),o=()=>{r&&(r.disconnect(),r=void 0)},l=Pt(()=>{const d=gt(s),f=(Array.isArray(d)?d:[d]).map(An).filter(dw);return new Set(f)}),c=cn(()=>l.value,d=>{o(),a.value&&n&&d.size&&(r=new MutationObserver(e),d.forEach(f=>r.observe(f,i)))},{immediate:!0,flush:"post"}),u=()=>r?.takeRecords(),h=()=>{o(),c()};return oi(h),{isSupported:a,stop:h,takeRecords:u}}function Tw(s={}){const{window:e=ci}=s,t=nt(1);if(e){let n=function(){t.value=e.devicePixelRatio,i(),r=e.matchMedia(`(resolution: ${t.value}dppx)`),r.addEventListener("change",n,{once:!0})},i=function(){r?.removeEventListener("change",n)},r;n(),oi(i)}return{pixelRatio:t}}function Nm(s,e,t={}){const{window:n=ci,...i}=t;let r;const a=al(()=>n&&"ResizeObserver"in n),o=()=>{r&&(r.disconnect(),r=void 0)},l=Pt(()=>Array.isArray(s)?s.map(h=>An(h)):[An(s)]),c=cn(l,h=>{if(o(),a.value&&n){r=new ResizeObserver(e);for(const d of h)d&&r.observe(d,i)}},{immediate:!0,flush:"post"}),u=()=>{o(),c()};return oi(u),{isSupported:a,stop:u}}function Aw(s,e={}){const{reset:t=!0,windowResize:n=!0,windowScroll:i=!0,immediate:r=!0}=e,a=nt(0),o=nt(0),l=nt(0),c=nt(0),u=nt(0),h=nt(0),d=nt(0),f=nt(0);function m(){const v=An(s);if(!v){t&&(a.value=0,o.value=0,l.value=0,c.value=0,u.value=0,h.value=0,d.value=0,f.value=0);return}const p=v.getBoundingClientRect();a.value=p.height,o.value=p.bottom,l.value=p.left,c.value=p.right,u.value=p.top,h.value=p.width,d.value=p.x,f.value=p.y}return Nm(s,m),cn(()=>An(s),v=>!v&&m()),Ew(s,m,{attributeFilter:["style","class"]}),i&&Js("scroll",m,{capture:!0,passive:!0}),n&&Js("resize",m,{passive:!0}),nh(()=>{r&&m()}),{height:a,bottom:o,left:l,right:c,top:u,width:h,x:d,y:f,update:m}}function Rw(s,e={width:0,height:0},t={}){const{window:n=ci,box:i="content-box"}=t,r=Pt(()=>{var h,d;return(d=(h=An(s))==null?void 0:h.namespaceURI)==null?void 0:d.includes("svg")}),a=nt(e.width),o=nt(e.height),{stop:l}=Nm(s,([h])=>{const d=i==="border-box"?h.borderBoxSize:i==="content-box"?h.contentBoxSize:h.devicePixelContentBoxSize;if(n&&r.value){const f=An(s);if(f){const m=n.getComputedStyle(f);a.value=Number.parseFloat(m.width),o.value=Number.parseFloat(m.height)}}else if(d){const f=Array.isArray(d)?d:[d];a.value=f.reduce((m,{inlineSize:v})=>m+v,0),o.value=f.reduce((m,{blockSize:v})=>m+v,0)}else a.value=h.contentRect.width,o.value=h.contentRect.height},t);nh(()=>{const h=An(s);h&&(a.value="offsetWidth"in h?h.offsetWidth:e.width,o.value="offsetHeight"in h?h.offsetHeight:e.height)});const c=cn(()=>An(s),h=>{a.value=h?e.width:0,o.value=h?e.height:0});function u(){l(),c()}return{width:a,height:o,stop:u}}function Cw(s){var e;const t=nt(0);if(typeof performance>"u")return t;const n=(e=s?.every)!=null?e:10;let i=performance.now(),r=0;return ih(()=>{if(r+=1,r>=n){const a=performance.now(),o=a-i;t.value=Math.round(1e3/(o/r)),i=a,r=0}}),t}function Pw(s={}){const e=nt(),t=al(()=>typeof performance<"u"&&"memory"in performance);if(t.value){const{interval:n=1e3}=s;bw(()=>{e.value=performance.memory},n,{immediate:s.immediate,immediateCallback:s.immediateCallback})}return{isSupported:t,memory:e}}const Dm={x:0,y:0,pointerId:0,pressure:0,tiltX:0,tiltY:0,width:0,height:0,twist:0,pointerType:null},Lw=Object.keys(Dm);function Iw(s={}){const{target:e=ci}=s,t=nt(!1),n=nt(s.initialValue||{});Object.assign(n.value,Dm,n.value);const i=r=>{t.value=!0,!(s.pointerTypes&&!s.pointerTypes.includes(r.pointerType))&&(n.value=vw(r,Lw,!1))};if(e){const r={passive:!0};Js(e,["pointerdown","pointermove","pointerup"],i,r),Js(e,"pointerleave",()=>t.value=!1,r)}return{...Mw(n),isInside:t}}function Uw(s={}){const{window:e=ci,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:r=!0}=s,a=nt(t),o=nt(n),l=()=>{e&&(r?(a.value=e.innerWidth,o.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,o.value=e.document.documentElement.clientHeight))};if(l(),nh(l),Js("resize",l,{passive:!0}),i){const c=Sw("(orientation: portrait)");cn(c,()=>l())}return{width:a,height:o}}var Nw=Object.defineProperty,Dw=(s,e,t)=>e in s?Nw(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,$d=(s,e,t)=>(Dw(s,typeof e!="symbol"?e+"":e,t),t);const Ow="@tresjs/core",Fw="module",Bw="3.7.0",zw="pnpm@8.10.2",kw="Declarative ThreeJS using Vue Components",Hw="Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)",Vw="MIT",Gw=["vue","3d","threejs","three","threejs-vue"],Ww=!1,Xw={".":{types:"./dist/index.d.ts",require:"./dist/tres.umd.cjs",import:"./dist/tres.js"},"./components":{types:"./dist/components/index.d.ts"},"./composables":{types:"./dist/composables/index.d.ts"},"./types":{types:"./dist/types/index.d.ts"},"./utils":{types:"./dist/utils/index.d.ts"},"./*":"./*"},Yw="./dist/tres.js",qw="./dist/tres.js",jw="./dist/index.d.ts",Zw=["dist","*.d.ts"],Kw={access:"public"},$w={dev:"cd playground && npm run dev",build:"vite build",playground:"cd playground && npm run dev",test:"vitest","test:ci":"vitest run","test:ui":"vitest --ui",release:"release-it",coverage:"vitest run --coverage",lint:"eslint . --ext .js,.jsx,.ts,.tsx,.vue","docs:dev":"vitepress dev docs","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs","docs:preview":"vitepress preview docs","docs:contributors":"esno scripts/update-contributors.ts"},Jw={three:">=0.133",vue:">=3.3"},Qw={"@alvarosabu/utils":"^3.1.1","@vueuse/core":"^10.7.0"},eS={"@release-it/conventional-changelog":"^8.0.1","@stackblitz/sdk":"^1.9.0","@tresjs/cientos":"3.6.0","@tresjs/eslint-config-vue":"^0.2.1","@types/three":"^0.159.0","@typescript-eslint/eslint-plugin":"^6.14.0","@typescript-eslint/parser":"^6.14.0","@vitejs/plugin-vue":"^4.5.2","@vitest/coverage-c8":"^0.33.0","@vitest/ui":"^1.0.4","@vue/test-utils":"^2.4.3",eslint:"^8.55.0","eslint-plugin-vue":"^9.19.2",esno:"^4.0.0",gsap:"^3.12.3",jsdom:"^23.0.1",kolorist:"^1.8.0",ohmyfetch:"^0.4.21",pathe:"^1.1.1","release-it":"^17.0.1","rollup-plugin-analyzer":"^4.0.0","rollup-plugin-copy":"^3.5.0","rollup-plugin-visualizer":"^5.11.0",three:"^0.159.0",unocss:"^0.58.0",unplugin:"^1.5.1","unplugin-vue-components":"^0.26.0",vite:"^5.0.8","vite-plugin-banner":"^0.7.1","vite-plugin-dts":"3.6.4","vite-plugin-inspect":"^0.8.1","vite-plugin-require-transform":"^1.0.21","vite-svg-loader":"^5.1.0",vitepress:"1.0.0-rc.31",vitest:"^1.0.4",vue:"^3.3.11","vue-demi":"^0.14.6"},tS={name:Ow,type:Fw,version:Bw,packageManager:zw,description:kw,author:Hw,license:Vw,keywords:Gw,sideEffects:Ww,exports:Xw,main:Yw,module:qw,types:jw,files:Zw,publishConfig:Kw,scripts:$w,peerDependencies:Jw,dependencies:Qw,devDependencies:eS},nS=({sizes:s,scene:e})=>{const t=nt([]),n=Pt(()=>t.value[0]),i=(o,l=!1)=>{t.value.some(({uuid:c})=>c===o.uuid)||(l?a(o):t.value.push(o))},r=o=>{t.value=t.value.filter(({uuid:l})=>l!==o.uuid)},a=o=>{const l=o instanceof ia?o:t.value.find(u=>u.uuid===o);if(!l)return;const c=t.value.filter(({uuid:u})=>u!==l.uuid);t.value=[l,...c]};return bi(()=>{s.aspectRatio.value&&t.value.forEach(o=>{o instanceof ct&&(o.aspect=s.aspectRatio.value),(o instanceof ct||o instanceof bn)&&o.updateProjectionMatrix()})}),e.userData.tres__registerCamera=i,e.userData.tres__deregisterCamera=r,os(()=>{t.value=[]}),{camera:n,cameras:t,registerCamera:i,deregisterCamera:r,setCameraActive:a}},Om=$s(),Fm=$s(),rh=$s(),Ds=new Qu;let Mo=0,bo=0;const{pause:iS,resume:rS,isActive:sS}=ih(()=>{Om.trigger({delta:Mo,elapsed:bo,clock:Ds}),Fm.trigger({delta:Mo,elapsed:bo,clock:Ds}),rh.trigger({delta:Mo,elapsed:bo,clock:Ds})},{immediate:!1});rh.on(()=>{Mo=Ds.getDelta(),bo=Ds.getElapsedTime()});const ol=()=>({onBeforeLoop:Om.on,onLoop:Fm.on,onAfterLoop:rh.on,pause:iS,resume:rS,isActive:sS}),Jd="[TresJS ▲ ■ ●] ";function ll(){function s(n,i){console.error(`${Jd} ${n}`,i||"")}function e(n){console.warn(`${Jd} ${n}`)}function t(n,i){}return{logError:s,logWarning:e,logMessage:t}}function aS(s){return s instanceof ve?s:Array.isArray(s)?new ve(...s):new ve(s)}class oS extends ht{constructor(...e){super(...e),$d(this,"type","HightlightMesh"),$d(this,"createTime"),this.createTime=Date.now()}onBeforeRender(){const e=(Date.now()-this.createTime)/1e3,t=1+.07*Math.sin(2.5*e);this.scale.set(t,t,t)}}const Bm=(s,e)=>{for(const t of Object.keys(e))e[t]instanceof Object&&Object.assign(e[t],Bm(s[t],e[t]));return Object.assign(s||{},e),s},lS="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",cS=uS(lS);function Qd(s){return s&&s.nodeType===1}function ao(s){return s.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function uS(s,e){const t=Object.create(null),n=s.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const hS=(s,e)=>{const t=new Set,n=[];for(const i of s){const r=e(i);t.has(r)||(t.add(r),n.push(i))}return n},ef=(s,e)=>{if(!e)return;const t=Array.isArray(e)?e:e.match(/([^[.\]])+/g);return t?.reduce((n,i)=>n&&n[i],s)},dS=(s,e,t)=>{const n=Array.isArray(e)?e:e.match(/([^[.\]])+/g);n&&n.reduce((i,r,a)=>(i[r]===void 0&&(i[r]={}),a===n.length-1&&(i[r]=t),i[r]),s)};function zm(s,e){if(Qd(s)&&Qd(e)){const i=s.attributes,r=e.attributes;return i.length!==r.length?!1:Array.from(i).every(({name:a,value:o})=>e.getAttribute(a)===o)}if(s===e)return!0;if(s===null||typeof s!="object"||e===null||typeof e!="object")return!1;const t=Object.keys(s),n=Object.keys(e);if(t.length!==n.length)return!1;for(const i of t)if(!n.includes(i)||!zm(s[i],e[i]))return!1;return!0}function fS(s,e){if(!Array.isArray(s)||!Array.isArray(e)||s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(!zm(s[t],e[t]))return!1;return!0}function pS(s,e,t,n){const i=l=>{if(l.uuid===e)return l;for(const c of l.children){const u=i(c);if(u)return u}},r=i(s);if(!r){console.warn("Object with UUID not found in the scene.");return}let a=r;for(let l=0;l<t.length-1;l++)if(a[t[l]]!==void 0)a=a[t[l]];else{console.warn(`Property path is not valid: ${t.join(".")}`);return}const o=t[t.length-1];a[o]!==void 0?a[o]=n:console.warn(`Property path is not valid: ${t.join(".")}`)}function mS(s){const e=new Qt({color:11003607,transparent:!0,opacity:.2,depthTest:!1,side:on});return new oS(s.geometry.clone(),e)}const gS=Number.parseInt(ls.replace("dev","")),oo={realistic:{shadows:!0,physicallyCorrectLights:!0,outputColorSpace:an,toneMapping:du,toneMappingExposure:3,shadowMap:{enabled:!0,type:hu}}};function vS({scene:s,canvas:e,options:t,disableRender:n,contextParts:{sizes:i,camera:r}}){const a=Pt(()=>({alpha:gt(t.alpha),depth:gt(t.depth),canvas:An(e),context:gt(t.context),stencil:gt(t.stencil),antialias:gt(t.antialias)===void 0?!0:gt(t.antialias),precision:gt(t.precision),powerPreference:gt(t.powerPreference),premultipliedAlpha:gt(t.premultipliedAlpha),preserveDrawingBuffer:gt(t.preserveDrawingBuffer),logarithmicDepthBuffer:gt(t.logarithmicDepthBuffer),failIfMajorPerformanceCaveat:gt(t.failIfMajorPerformanceCaveat)})),o=sr(new Zr(a.value));cn(a,()=>{o.value.dispose(),o.value=new Zr(a.value)}),bi(()=>{o.value.setSize(i.width.value,i.height.value)});const{pixelRatio:l}=Tw();bi(()=>{o.value.setPixelRatio(l.value)});const{logError:c}=ll(),u=(()=>{const m=new Zr,v={shadowMap:{enabled:m.shadowMap.enabled,type:m.shadowMap.type},toneMapping:m.toneMapping,toneMappingExposure:m.toneMappingExposure,outputColorSpace:m.outputColorSpace};return m.dispose(),v})();bi(()=>{const m=gt(t.preset);m&&(m in oo||c(`Renderer Preset must be one of these: ${Object.keys(oo).join(", ")}`),Bm(o.value,oo[m]));const v=(x,_)=>{const M=gt(x),C=()=>{if(m)return ef(oo[m],_)};if(M!==void 0)return M;const w=C();return w!==void 0?w:ef(u,_)},p=(x,_)=>dS(o.value,_,v(x,_));p(t.shadows,"shadowMap.enabled"),p(t.toneMapping,"toneMapping"),p(t.shadowMapType,"shadowMap.type"),gS<150&&p(!t.useLegacyLights,"physicallyCorrectLights"),p(t.outputColorSpace,"outputColorSpace"),p(t.toneMappingExposure,"toneMappingExposure");const g=v(t.clearColor,"clearColor");g&&o.value.setClearColor(g?aS(g):new ve(0))});const{pause:h,resume:d,onLoop:f}=ol();return f(()=>{r.value&&!gt(n)&&o.value.render(s,r.value)}),d(),os(()=>{h(),o.value.dispose(),o.value.forceContextLoss()}),{renderer:o}}const tf=s=>typeof s=="function",_S=s=>!!s&&s.constructor===Array;function yS(s){const e={nodes:{},materials:{}};return s&&s.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}async function xS(s,e,t,n,i){const{logError:r}=ll(),a=new s;i&&i(a),t&&t(a);const o=(Array.isArray(e)?e:[e]).map(l=>new Promise((c,u)=>{a.load(l,h=>{h.scene&&Object.assign(h,yS(h.scene)),c(h)},n,h=>u(r("[useLoader] - Failed to load resource",h)))}));return _S(e)?await Promise.all(o):await o[0]}const MS=(s,{renderer:e,camera:t,raycaster:n})=>{const i=Pt(()=>e.value.domElement),{x:r,y:a}=Iw({target:i}),{width:o,height:l,top:c,left:u}=Aw(i),h=({x:E,y:b})=>{if(i.value)return{x:(E-u.value)/o.value*2-1,y:-((b-c.value)/l.value)*2+1}},d=({x:E,y:b})=>{if(t.value)return n.value.setFromCamera(new re(E,b),t.value),n.value.intersectObjects(s.value,!1)},f=E=>{const b=h({x:E?.clientX??r.value,y:E?.clientY??a.value});return b?d(b)||[]:[]},m=Pt(()=>f()),v=$s(),p=$s(),g=(E,b)=>{E.trigger({event:b,intersects:f(b)})},x=E=>{g(p,E)};let _;const M=E=>{var b;_=(b=f(E)[0])==null?void 0:b.object},C=E=>{var b;E instanceof PointerEvent&&_===((b=f(E)[0])==null?void 0:b.object)&&g(v,E)},w=E=>p.trigger({event:E,intersects:[]});return i.value.addEventListener("pointerup",C),i.value.addEventListener("pointerdown",M),i.value.addEventListener("pointermove",x),i.value.addEventListener("pointerleave",w),os(()=>{i!=null&&i.value&&(i.value.removeEventListener("pointerup",C),i.value.removeEventListener("pointerdown",M),i.value.removeEventListener("pointermove",x),i.value.removeEventListener("pointerleave",w))}),{intersects:m,onClick:E=>v.on(E).off,onPointerMove:E=>p.on(E).off}},bS=({scene:s,contextParts:e})=>{const t=bf({click:new Map,pointerMove:new Map,pointerEnter:new Map,pointerLeave:new Map}),n=nt(new Set),i=d=>{n.value.add(d)},r=d=>{n.value.delete(d)},a=d=>{Object.values(t).forEach(f=>f.delete(d)),r(d)},o=d=>{const{onClick:f,onPointerMove:m,onPointerEnter:v,onPointerLeave:p}=d;f&&t.click.set(d,f),m&&t.pointerMove.set(d,m),v&&t.pointerEnter.set(d,v),p&&t.pointerLeave.set(d,p)};s.userData.tres__registerAtPointerEventHandler=o,s.userData.tres__deregisterAtPointerEventHandler=a,s.userData.tres__registerBlockingObjectAtPointerEventHandler=i,s.userData.tres__deregisterBlockingObjectAtPointerEventHandler=r;const l=Pt(()=>hS([...Array.from(n.value),...Object.values(t).map(d=>Array.from(d.keys())).flat()],({uuid:d})=>d)),{onClick:c,onPointerMove:u}=MS(l,e);c(({intersects:d,event:f})=>{var m;d.length&&((m=t.click.get(d[0].object))==null||m(d[0],f))});let h;return u(({intersects:d,event:f})=>{var m,v,p,g;const x=(m=d?.[0])==null?void 0:m.object,{pointerLeave:_,pointerEnter:M,pointerMove:C}=t;h&&h!==x&&((v=_.get(h))==null||v(h,f)),x&&(h!==x&&((p=M.get(x))==null||p(d[0],f)),(g=C.get(x))==null||g(d[0],f)),h=x||null}),{registerObject:o,deregisterObject:a}};function km(s){let e=0;return s.traverse(t=>{if(t.isMesh&&t.geometry){const n=t.geometry,i=n.attributes.position.count*3*Float32Array.BYTES_PER_ELEMENT,r=n.index?n.index.count*Uint32Array.BYTES_PER_ELEMENT:0,a=n.attributes.normal?n.attributes.normal.count*3*Float32Array.BYTES_PER_ELEMENT:0,o=n.attributes.uv?n.attributes.uv.count*2*Float32Array.BYTES_PER_ELEMENT:0,l=i+r+a+o;e+=l}}),e}function wS(s){return(s/1024).toFixed(2)}const nu=nt({}),sh=s=>Object.assign(nu.value,s);function SS({scene:s,canvas:e,windowSize:t,disableRender:n,rendererOptions:i}){const r=Pt(()=>gt(t)?Uw():Rw(gt(e).parentElement)),a=sr({width:0,height:0}),o=xw(a,10),l=bi(()=>{a.value={width:r.value.width.value,height:r.value.height.value}}),c=Pt(()=>o.value.width/o.value.height),u={height:Pt(()=>o.value.height),width:Pt(()=>o.value.width),aspectRatio:c},h=sr(s),{camera:d,cameras:f,registerCamera:m,deregisterCamera:v,setCameraActive:p}=nS({sizes:u,scene:s}),{renderer:g}=vS({scene:s,canvas:e,options:i,contextParts:{sizes:u,camera:d},disableRender:n}),x={sizes:u,scene:h,camera:d,cameras:Mf(f),renderer:g,raycaster:sr(new Cm),controls:nt(null),perf:{maxFrames:160,fps:{value:0,accumulator:[]},memory:{currentMem:0,allocatedMem:0,accumulator:[]}},extend:sh,registerCamera:m,setCameraActive:p,deregisterCamera:v};uc("useTres",x);const _=100,M=Cw({every:_}),{isSupported:C,memory:w}=Pw({interval:_}),E=160;let b=performance.now();const T=({timestamp:L})=>{x.scene.value&&(x.perf.memory.allocatedMem=km(x.scene.value)),L-b>=_&&(b=L,x.perf.fps.accumulator.push(M.value),x.perf.fps.accumulator.length>E&&x.perf.fps.accumulator.shift(),x.perf.fps.value=M.value,C.value&&w.value&&(x.perf.memory.accumulator.push(w.value.usedJSHeapSize/1024/1024),x.perf.memory.accumulator.length>E&&x.perf.memory.accumulator.shift(),x.perf.memory.currentMem=x.perf.memory.accumulator.reduce((G,B)=>G+B,0)/x.perf.memory.accumulator.length))};let y=0;const S=1,{pause:O,resume:W}=ih(({delta:L})=>{window.__TRES__DEVTOOLS__&&(T({timestamp:performance.now()}),y+=L,y>=S&&(window.__TRES__DEVTOOLS__.cb(x),y=0))},{immediate:!0});return os(()=>{l(),O()}),x}function ah(){const s=dg("useTres");if(!s)throw new Error("useTresContext must be used together with useTresContextProvider");return s}let Et=null;const{logError:nf}=ll(),ec=["onClick","onPointerMove","onPointerEnter","onPointerLeave"],ES={createElement(s,e,t,n){var i,r;if(n||(n={}),n.args||(n.args=[]),s==="template"||cS(s))return null;let a=s.replace("Tres",""),o;if(s==="primitive"){n?.object===void 0&&nf("Tres primitives need a prop 'object'");const l=n.object;a=l.type,o=Object.assign(l,{type:a,attach:n.attach,primitive:!0})}else{const l=nu.value[a];l||nf(`${a} is not defined on the THREE namespace. Use extend to add it to the catalog.`),o=new l(...n.args)}return o.isCamera&&(n!=null&&n.position||o.position.set(3,3,3),n!=null&&n.lookAt||o.lookAt(0,0,0)),n?.attach===void 0&&(o.isMaterial?o.attach="material":o.isBufferGeometry&&(o.attach="geometry")),o.isObject3D&&((i=n?.material)!=null&&i.isMaterial&&(o.userData.tres__materialViaProp=!0),(r=n?.geometry)!=null&&r.isBufferGeometry&&(o.userData.tres__geometryViaProp=!0)),o.userData={...o.userData,tres__name:a},o},insert(s,e){var t,n,i,r;e&&e.isScene&&(Et=e);const a=e||Et;if(s!=null&&s.isObject3D){if(s!=null&&s.isCamera){if(!(Et!=null&&Et.userData.tres__registerCamera))throw"could not find tres__registerCamera on scene's userData";(n=Et==null?void 0:(t=Et.userData).tres__registerCamera)==null||n.call(t,s)}if(s&&ec.some(o=>s[o])){if(!(Et!=null&&Et.userData.tres__registerAtPointerEventHandler))throw"could not find tres__registerAtPointerEventHandler on scene's userData";(r=Et==null?void 0:(i=Et.userData).tres__registerAtPointerEventHandler)==null||r.call(i,s)}}s!=null&&s.isObject3D&&a!=null&&a.isObject3D?(a.add(s),s.dispatchEvent({type:"added"})):s!=null&&s.isFog?a.fog=s:typeof s?.attach=="string"&&(s.__previousAttach=s[a?.attach],a&&(a[s.attach]=s))},remove(s){var e,t;if(s){if(s.isObject3D){const n=s,i=c=>{var u,h;const d=c;c.userData.tres__materialViaProp||((u=d.material)==null||u.dispose(),d.material=void 0),c.userData.tres__geometryViaProp||((h=d.geometry)==null||h.dispose(),d.geometry=void 0)},r=Et?.userData.tres__deregisterAtPointerEventHandler,a=Et?.userData.tres__deregisterBlockingObjectAtPointerEventHandler,o=c=>{var u,h;if(!a)throw"could not find tres__deregisterBlockingObjectAtPointerEventHandler on scene's userData";if((h=Et==null?void 0:(u=Et.userData).tres__deregisterBlockingObjectAtPointerEventHandler)==null||h.call(u,c),!r)throw"could not find tres__deregisterAtPointerEventHandler on scene's userData";c&&ec.some(d=>c[d])&&r?.(c)},l=c=>{const u=Et?.userData.tres__deregisterCamera;if(!u)throw"could not find tres__deregisterCamera on scene's userData";c.isCamera&&u?.(c)};(e=s.removeFromParent)==null||e.call(s),n.traverse(c=>{i(c),l(c),o?.(c)}),i(n),l(n),o?.(n)}(t=s.dispose)==null||t.call(s)}},patchProp(s,e,t,n){var i,r,a,o;if(s){let l=s,c=e;if(s.isObject3D&&c==="blocks-pointer-events"){n||n===""?(r=Et==null?void 0:(i=Et.userData).tres__registerBlockingObjectAtPointerEventHandler)==null||r.call(i,s):(o=Et==null?void 0:(a=Et.userData).tres__deregisterBlockingObjectAtPointerEventHandler)==null||o.call(a,s);return}let u=ao(c),h=l?.[u];if(c==="args"){const f=s,m=t??[],v=n??[],p=s.userData.tres__name||s.type;p&&m.length&&!fS(m,v)&&(l=Object.assign(f,new nu.value[p](...n)));return}if(l.type==="BufferGeometry"){if(c==="args")return;l.setAttribute(ao(c),new et(...n));return}if(c.includes("-")&&h===void 0){const f=c.split("-");h=f.reduce((m,v)=>m[ao(v)],l),c=f.pop(),u=c.toLowerCase(),h!=null&&h.set||(l=f.reduce((m,v)=>m[ao(v)],l))}let d=n;if(d===""&&(d=!0),tf(h)){ec.includes(e)||(Array.isArray(d)?s[u](...d):s[u](d));return}!(h!=null&&h.set)&&!tf(h)?l[u]=d:h.constructor===d.constructor&&h!=null&&h.copy?h?.copy(d):Array.isArray(d)?h.set(...d):!h.isColor&&h.setScalar?h.setScalar(d):h.set(d)}},parentNode(s){return s?.parent||null},createText:()=>{},createComment:()=>{},setText:()=>{},setElementText:()=>{},nextSibling:()=>{},querySelector:()=>{},setScopeId:()=>{},cloneNode:()=>{},insertStaticContent:()=>{}},{render:TS}=cg(ES);sh(hw);function AS(){return Hm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Hm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const RS=typeof Proxy=="function",CS="devtools-plugin:setup",PS="plugin:settings:set";let Ts,iu;function LS(){var s;return Ts!==void 0||(typeof window<"u"&&window.performance?(Ts=!0,iu=window.performance):typeof global<"u"&&!((s=global.perf_hooks)===null||s===void 0)&&s.performance?(Ts=!0,iu=global.perf_hooks.performance):Ts=!1),Ts}function IS(){return LS()?iu.now():Date.now()}let US=class{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const o=e.settings[a];n[a]=o.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const a=localStorage.getItem(i),o=JSON.parse(a);Object.assign(r,o)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}r=a},now(){return IS()}},t&&t.on(PS,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}};function NS(s,e){const t=s,n=Hm(),i=AS(),r=RS&&t.enableEarlyProxy;if(i&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(CS,s,e);else{const a=r?new US(t,i):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:a}),a&&e(a.proxiedTarget)}}function DS(s,e){const t=`▲ ■ ●${s}`;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(t,e):e==="error"?console.error(t):e==="warn"?console.warn(t):console.log(t)}const Vm=s=>{const e={id:s.uuid,label:s.type,children:[],tags:[]};s.name!==""&&e.tags.push({label:s.name,textColor:5750629,backgroundColor:15793395});const t=km(s);return t>0&&e.tags.push({label:`${wS(t)} KB`,textColor:15707189,backgroundColor:16775644,tooltip:"Memory usage"}),s.type.includes("Light")&&(e.tags.push({label:`${s.intensity}`,textColor:9738662,backgroundColor:16316922,tooltip:"Intensity"}),e.tags.push({label:`#${s.color.getHexString()}`,textColor:9738662,backgroundColor:16316922,tooltip:"Color"})),s.type.includes("Camera")&&(e.tags.push({label:`${s.fov}°`,textColor:9738662,backgroundColor:16316922,tooltip:"Field of view"}),e.tags.push({label:`x: ${Math.round(s.position.x)} y: ${Math.round(s.position.y)} z: ${Math.round(s.position.z)}`,textColor:9738662,backgroundColor:16316922,tooltip:"Position"})),e};function Gm(s,e){s.children.forEach(t=>{if(t.type==="HightlightMesh")return;const n=Vm(t);e.children.push(n),Gm(t,n)})}const OS=[],As="tres:inspector",FS=bf({sceneGraph:null});function BS(s,e){NS({id:"dev.esm.tres",label:"TresJS 🪐",logo:"https://raw.githubusercontent.com/Tresjs/tres/main/public/favicon.svg",packageName:"tresjs",homepage:"https://tresjs.org",componentStateTypes:OS,app:s},t=>{typeof t.now!="function"&&DS("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),t.addInspector({id:As,label:"TresJS 🪐",icon:"account_tree",treeFilterPlaceholder:"Search instances"}),setInterval(()=>{t.sendInspectorTree(As)},1e3),setInterval(()=>{t.notifyComponentUpdate()},5e3),t.on.getInspectorTree(r=>{if(r.inspectorId===As){const a=Vm(e.scene.value);Gm(e.scene.value,a),FS.sceneGraph=a,r.rootNodes=[a]}});let n=null,i=null;t.on.getInspectorState(r=>{if(r.inspectorId===As){const[a]=e.scene.value.getObjectsByProperty("uuid",r.nodeId);if(!a)return;if(i&&n&&n.parent&&i.remove(n),a.isMesh){const o=mS(a);a.add(o),n=o,i=a}r.state={object:[{key:"uuid",editable:!0,value:a.uuid},{key:"name",editable:!0,value:a.name},{key:"type",editable:!0,value:a.type},{key:"position",editable:!0,value:a.position},{key:"rotation",editable:!0,value:a.rotation},{key:"scale",editable:!0,value:a.scale},{key:"geometry",value:a.geometry},{key:"material",value:a.material},{key:"color",editable:!0,value:a.color},{key:"intensity",editable:!0,value:a.intensity},{key:"castShadow",editable:!0,value:a.castShadow},{key:"receiveShadow",editable:!0,value:a.receiveShadow},{key:"frustumCulled",editable:!0,value:a.frustumCulled},{key:"matrixAutoUpdate",editable:!0,value:a.matrixAutoUpdate},{key:"matrixWorldNeedsUpdate",editable:!0,value:a.matrixWorldNeedsUpdate},{key:"matrixWorld",value:a.matrixWorld},{key:"visible",editable:!0,value:a.visible}]}}}),t.on.editInspectorState(r=>{r.inspectorId===As&&pS(e.scene.value,r.nodeId,r.path,r.state.value)})})}const zS=["data-scene","data-tres"],kS=$r({__name:"TresCanvas",props:{shadows:{type:Boolean,default:void 0},clearColor:{},toneMapping:{},shadowMapType:{},useLegacyLights:{type:Boolean,default:void 0},outputColorSpace:{},toneMappingExposure:{},camera:{},preset:{},windowSize:{type:Boolean,default:void 0},disableRender:{type:Boolean,default:void 0},context:{},precision:{},alpha:{type:Boolean,default:void 0},premultipliedAlpha:{type:Boolean},antialias:{type:Boolean,default:void 0},stencil:{type:Boolean,default:void 0},preserveDrawingBuffer:{type:Boolean,default:void 0},powerPreference:{},depth:{type:Boolean,default:void 0},logarithmicDepthBuffer:{type:Boolean,default:void 0},failIfMajorPerformanceCaveat:{type:Boolean,default:void 0}},setup(s,{expose:e}){var t;const n=s,{logWarning:i}=ll(),r=nt(),a=sr(new ns),{resume:o}=ol(),l=wf(),c=(t=wo())==null?void 0:t.appContext.app,u=v=>$r({setup(){var p;const g=(p=wo())==null?void 0:p.appContext;return g&&(g.app=c),uc("useTres",v),uc("extend",sh),typeof window<"u"&&BS(g.app,v),()=>gh(fg,null,l!=null&&l.default?l.default():[])}}),h=v=>{const p=u(v);TS(gh(p),a.value)},d=(v,p=!1)=>{a.value.children=[],p&&(v.renderer.value.dispose(),v.renderer.value.renderLists.dispose(),v.renderer.value.forceContextLoss()),h(v),o()},f=Pt(()=>n.disableRender),m=sr(null);return e({context:m,dispose:()=>d(m.value,!0)}),cu(()=>{const v=r;m.value=SS({scene:a.value,canvas:v,windowSize:n.windowSize,disableRender:f,rendererOptions:n}),bS({scene:a.value,contextParts:m.value});const{registerCamera:p,camera:g,cameras:x,deregisterCamera:_}=m.value;h(m.value);const M=()=>{const C=new ct(45,window.innerWidth/window.innerHeight,.1,1e3);C.position.set(3,3,3),C.lookAt(0,0,0),p(C);const w=bi(()=>{x.value.length>=2&&(C.removeFromParent(),_(C),w?.())})};cn(()=>n.camera,(C,w)=>{C&&p(C),w&&(w.removeFromParent(),_(w))},{immediate:!0}),g.value||(i("No camera found. Creating a default perspective camera. To have full control over a camera, please add one to the scene."),M())}),(v,p)=>(hr(),Jr("canvas",{ref_key:"canvas",ref:r,"data-scene":a.value.uuid,class:ug(v.$attrs.class),"data-tres":`tresjs ${rt(tS).version}`,style:hg({display:"block",width:"100%",height:"100%",position:v.windowSize?"fixed":"relative",top:0,left:0,pointerEvents:"auto",touchAction:"none",...v.$attrs.style})},null,14,zS))}});function rf(s,e){if(e===gp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ao||e===bu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(t)if(e===Ao)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const Wm=parseInt(ls.replace(/\D+/g,""));var HS=Object.defineProperty,VS=(s,e,t)=>e in s?HS(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,GS=(s,e,t)=>(VS(s,typeof e!="symbol"?e+"":e,t),t);async function sf(s){const e=await s.arrayBuffer(),t=btoa(String.fromCharCode(...new Uint8Array(e)));return`data:${s.type||""};base64,${t}`}let lo,tc,Vr,co;function nc(s,e=1/0,t=null){tc||(tc=new Ii(2,2,1,1)),Vr||(Vr=new tn({uniforms:{blitTexture:new sl(s)},vertexShader:`
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = vec4(position.xy * 1.0,0.,.999999);
        }
      `,fragmentShader:`
          uniform sampler2D blitTexture; 
          varying vec2 vUv;

          void main(){ 
              gl_FragColor = vec4(vUv.xy, 0, 1);
              
              #ifdef IS_SRGB
              gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
              #else
              gl_FragColor = texture2D( blitTexture, vUv);
              #endif
          }
      `})),Vr.uniforms.blitTexture.value=s,Vr.defines.IS_SRGB="colorSpace"in s?s.colorSpace==="srgb":s.encoding===3001,Vr.needsUpdate=!0,co||(co=new ht(tc,Vr),co.frustrumCulled=!1);const n=new ct,i=new ns;i.add(co),t||(t=lo=new Zr({antialias:!1})),t.setSize(Math.min(s.image.width,e),Math.min(s.image.height,e)),t.clear(),t.render(i,n);const r=new mt(t.domElement);return r.minFilter=s.minFilter,r.magFilter=s.magFilter,r.wrapS=s.wrapS,r.wrapT=s.wrapT,r.name=s.name,lo&&(lo.dispose(),lo=null),r}const af={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Xm{constructor(){this.pluginCallbacks=[],this.register(function(e){return new QS(e)}),this.register(function(e){return new eE(e)}),this.register(function(e){return new iE(e)}),this.register(function(e){return new rE(e)}),this.register(function(e){return new sE(e)}),this.register(function(e){return new aE(e)}),this.register(function(e){return new tE(e)}),this.register(function(e){return new nE(e)}),this.register(function(e){return new oE(e)}),this.register(function(e){return new lE(e)}),this.register(function(e){return new cE(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const r=new JS,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}GS(Xm,"Utils",{insertKeyframe:function(s,e){const t=s.getValueSize(),n=new s.TimeBufferType(s.times.length+1),i=new s.ValueBufferType(s.values.length+t),r=s.createInterpolant(new s.ValueBufferType(t));let a;if(s.times.length===0){n[0]=e;for(let o=0;o<t;o++)i[o]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;n[0]=e,n.set(s.times,1),i.set(r.evaluate(e),0),i.set(s.values,t),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;n[n.length-1]=e,n.set(s.times,0),i.set(s.values,0),i.set(r.evaluate(e),s.values.length),a=n.length-1}else for(let o=0;o<s.times.length;o++){if(Math.abs(s.times[o]-e)<.001)return o;if(s.times[o]<e&&s.times[o+1]>e){n.set(s.times.slice(0,o+1),0),n[o+1]=e,n.set(s.times.slice(o+1),o+2),i.set(s.values.slice(0,(o+1)*t),0),i.set(r.evaluate(e),(o+1)*t),i.set(s.values.slice((o+1)*t),(o+2)*t),a=o+1;break}}return s.times=n,s.values=i,a},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=Qe.parseTrackName(a.name),l=Qe.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Ri)}const c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[o.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let h;if(n[l.uuid]===void 0){h=a.clone();const f=new h.ValueBufferType(c*h.times.length);for(let m=0;m<h.times.length;m++)f[m*c+u]=h.values[m];h.name=(o.nodeName||"")+".morphTargetInfluences",h.values=f,n[l.uuid]=h,t.push(h);continue}const d=a.createInterpolant(new a.ValueBufferType(1));h=n[l.uuid];for(let f=0;f<h.times.length;f++)h.values[f*c+u]=d.evaluate(h.times[f]);for(let f=0;f<a.times.length;f++){const m=this.insertKeyframe(h,a.times[f]);h.values[m*c+u]=a.values[f]}}return s.tracks=t,s}});const tt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ic="KHR_mesh_quantization",mn={};mn[bt]=tt.NEAREST;mn[Qr]=tt.NEAREST_MIPMAP_NEAREST;mn[$n]=tt.NEAREST_MIPMAP_LINEAR;mn[pt]=tt.LINEAR;mn[or]=tt.LINEAR_MIPMAP_NEAREST;mn[pn]=tt.LINEAR_MIPMAP_LINEAR;mn[Ot]=tt.CLAMP_TO_EDGE;mn[si]=tt.REPEAT;mn[dr]=tt.MIRRORED_REPEAT;const of={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},WS=new ve,lf=12,XS=1179937895,YS=2,cf=8,qS=1313821514,jS=5130562;function Ps(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function ZS(s){return new TextEncoder().encode(s).buffer}function KS(s){return Ps(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function $S(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=gr.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Ym(s){return Math.ceil(s/4)*4}function rc(s,e=0){const t=Ym(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function uf(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function hf(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class JS{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(o),h=Object.keys(l);u.length>0&&(a.extensionsUsed=u),h.length>0&&(a.extensionsRequired=h),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0?c.arrayBuffer().then(d=>{const f=rc(d),m=new DataView(new ArrayBuffer(cf));m.setUint32(0,f.byteLength,!0),m.setUint32(4,jS,!0);const v=rc(ZS(JSON.stringify(a)),32),p=new DataView(new ArrayBuffer(cf));p.setUint32(0,v.byteLength,!0),p.setUint32(4,qS,!0);const g=new ArrayBuffer(lf),x=new DataView(g);x.setUint32(0,XS,!0),x.setUint32(4,YS,!0);const _=lf+p.byteLength+v.byteLength+m.byteLength+f.byteLength;x.setUint32(8,_,!0),new Blob([g,p,v,m,f],{type:"application/octet-stream"}).arrayBuffer().then(t)}):a.buffers&&a.buffers.length>0?sf(c).then(d=>{a.buffers[0].uri=d,t(a)}):t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const n=new Map;n.set(!0,this.uid++),n.set(!1,this.uid++),this.uids.set(e,n)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const t=new I;for(let n=0,i=e.count;n<i;n++)if(Math.abs(t.fromBufferAttribute(e,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new I;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(d){return("colorSpace"in d?d.colorSpace==="srgb":d.encoding===3001)?function(f){return f<.04045?f*.0773993808:Math.pow(f*.9478672986+.0521327014,2.4)}:function(f){return f}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof cr&&(e=nc(e)),t instanceof cr&&(t=nc(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=uf();l.width=a,l.height=o;const c=l.getContext("2d");c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const u=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const d=n(e),f=c.getImageData(0,0,a,o).data;for(let m=2;m<f.length;m+=4)u.data[m]=d(f[m]/256)*256}if(r){c.drawImage(r,0,0,a,o);const d=n(t),f=c.getImageData(0,0,a,o).data;for(let m=1;m<f.length;m+=4)u.data[m]=d(f[m]/256)*256}c.putImageData(u,0,0);const h=(e||t).clone();return h.source=new mt(l).source,"colorSpace"in h?h.colorSpace="":h.encoding=3e3,h.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),h}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case tt.BYTE:case tt.UNSIGNED_BYTE:o=1;break;case tt.SHORT:case tt.UNSIGNED_SHORT:o=2;break;default:o=4}const l=Ym(i*e.itemSize*o),c=new DataView(new ArrayBuffer(l));let u=0;for(let d=n;d<n+i;d++)for(let f=0;f<e.itemSize;f++){let m;e.itemSize>4?m=e.array[d*e.itemSize+f]:(f===0?m=e.getX(d):f===1?m=e.getY(d):f===2?m=e.getZ(d):f===3&&(m=e.getW(d)),e.normalized===!0&&(m=gr.normalize(m,e.array))),t===tt.FLOAT?c.setFloat32(u,m,!0):t===tt.INT?c.setInt32(u,m,!0):t===tt.UNSIGNED_INT?c.setUint32(u,m,!0):t===tt.SHORT?c.setInt16(u,m,!0):t===tt.UNSIGNED_SHORT?c.setUint16(u,m,!0):t===tt.BYTE?c.setInt8(u,m):t===tt.UNSIGNED_BYTE&&c.setUint8(u,m),u+=o}const h={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(h.target=r),r===tt.ARRAY_BUFFER&&(h.byteStride=e.itemSize*o),this.byteOffset+=l,a.bufferViews.push(h),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),e.arrayBuffer().then(i=>{const r=rc(i),a={buffer:t.processBuffer(r),byteOffset:t.byteOffset,byteLength:r.byteLength};return t.byteOffset+=r.byteLength,n.bufferViews.push(a)-1})}processAccessor(e,t,n,i){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=tt.FLOAT;else if(e.array.constructor===Int32Array)o=tt.INT;else if(e.array.constructor===Uint32Array)o=tt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=tt.SHORT;else if(e.array.constructor===Uint16Array)o=tt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=tt.BYTE;else if(e.array.constructor===Uint8Array)o=tt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),i===void 0&&(i=e.count),i===0)return null;const l=$S(e,n,i);let c;t!==void 0&&(c=e===t.index?tt.ELEMENT_ARRAY_BUFFER:tt.ARRAY_BUFFER);const u=this.processBufferView(e,o,n,i,c),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});const u=a.images.get(e),h=i+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];o.images||(o.images=[]);const d={mimeType:i},f=uf();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const m=f.getContext("2d");if(n===!0&&(m.translate(0,f.height),m.scale(1,-1)),e.data!==void 0){t!==$t&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const p=new Uint8ClampedArray(e.height*e.width*4);for(let g=0;g<p.length;g+=4)p[g+0]=e.data[g+0],p[g+1]=e.data[g+1],p[g+2]=e.data[g+2],p[g+3]=e.data[g+3];m.putImageData(new ImageData(p,e.width,e.height),0,0)}else m.drawImage(e,0,0,f.width,f.height);l.binary===!0?c.push(hf(f,i).then(p=>r.processBufferViewImage(p)).then(p=>{d.bufferView=p})):f.toDataURL!==void 0?d.uri=f.toDataURL(i):c.push(hf(f,i).then(sf).then(p=>{d.uri=p}));const v=o.images.push(d)-1;return u[h]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:mn[e.magFilter],minFilter:mn[e.minFilter],wrapS:mn[e.wrapS],wrapT:mn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.options,n=this.cache,i=this.json;if(n.textures.has(e))return n.textures.get(e);i.textures||(i.textures=[]),e instanceof cr&&(e=nc(e,t.maxTextureSize));let r=e.userData.mimeType;r==="image/webp"&&(r="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,r)};e.name&&(a.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,a)});const o=i.textures.push(a)-1;return n.textures.set(e,o),o}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Ps(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),i.emissiveTexture=l}}if(e.normalMap){const o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===on&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,M=e.material.length;_<M;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;e.isLineSegments?o=tt.LINES:e.isLineLoop?o=tt.LINE_LOOP:e.isLine?o=tt.LINE_STRIP:e.isPoints?o=tt.POINTS:o=e.material.wireframe?tt.LINES:tt.TRIANGLES;const l={},c={},u=[],h=[],d={...Wm>=152?{uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3"}:{uv:"TEXCOORD_0",uv2:"TEXCOORD_1"},color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let m=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;const M=a.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(M))){c[_]=t.attributes.get(this.getUID(M));continue}m=null;const C=M.array;_==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new et(new Uint16Array(C),M.itemSize,M.normalized));const w=this.processAccessor(m||M,a);w!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,M),c[_]=w,t.attributes.set(this.getUID(M),w))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const _=[],M=[],C={};if(e.morphTargetDictionary!==void 0)for(const w in e.morphTargetDictionary)C[e.morphTargetDictionary[w]]=w;for(let w=0;w<e.morphTargetInfluences.length;++w){const E={};let b=!1;for(const T in a.morphAttributes){if(T!=="position"&&T!=="normal"){b||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),b=!0);continue}const y=a.morphAttributes[T][w],S=T.toUpperCase(),O=a.attributes[T];if(t.attributes.has(this.getUID(y,!0))){E[S]=t.attributes.get(this.getUID(y,!0));continue}const W=y.clone();if(!a.morphTargetsRelative)for(let L=0,G=y.count;L<G;L++)for(let B=0;B<y.itemSize;B++)B===0&&W.setX(L,y.getX(L)-O.getX(L)),B===1&&W.setY(L,y.getY(L)-O.getY(L)),B===2&&W.setZ(L,y.getZ(L)-O.getZ(L)),B===3&&W.setW(L,y.getW(L)-O.getW(L));E[S]=this.processAccessor(W,a),t.attributes.set(this.getUID(O,!0),E[S])}h.push(E),_.push(e.morphTargetInfluences[w]),e.morphTargetDictionary!==void 0&&M.push(C[w])}l.weights=_,M.length>0&&(l.extras={},l.extras.targetNames=M)}const v=Array.isArray(e.material);if(v&&a.groups.length===0)return null;const p=v?e.material:[e.material],g=v?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,M=g.length;_<M;_++){const C={mode:o,attributes:c};if(this.serializeUserData(a,C),h.length>0&&(C.targets=h),a.index!==null){let E=this.getUID(a.index);(g[_].start!==void 0||g[_].count!==void 0)&&(E+=":"+g[_].start+":"+g[_].count),t.attributes.has(E)?C.indices=t.attributes.get(E):(C.indices=this.processAccessor(a.index,a,g[_].start,g[_].count),t.attributes.set(E,C.indices)),C.indices===null&&delete C.indices}const w=this.processMaterial(p[g[_].materialIndex]);w!==null&&(C.material=w),u.push(C)}l.primitives=u,n.meshes||(n.meshes=[]),this._invokeAll(function(_){_.writeMesh&&_.writeMesh(e,l)});const x=n.meshes.push(l)-1;return t.meshes.set(r,x),x}detectMeshQuantization(e,t){if(this.extensionsUsed[ic])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];af[i]&&af[i].includes(n)&&(this.extensionsUsed[ic]=!0,this.extensionsRequired[ic]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:gr.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Xm.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],o=[];for(let l=0;l<r.length;++l){const c=r[l],u=Qe.parseTrackName(c.name);let h=Qe.findNode(t,u.nodeName);const d=of[u.propertyName];if(u.objectName==="bones"&&(h.isSkinnedMesh===!0?h=h.skeleton.getBoneByName(u.objectIndex):h=void 0),!h||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const f=1;let m=c.values.length/c.times.length;d===of.morphTargetInfluences&&(m/=h.morphTargetInfluences.length);let v;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(v="CUBICSPLINE",m/=3):c.getInterpolation()===mr?v="STEP":v="LINEAR",o.push({input:this.processAccessor(new et(c.times,f)),output:this.processAccessor(new et(c.values,m)),interpolation:v}),a.push({sampler:o.length-1,target:{node:i.get(h),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(r.bones.length*16),c=new Pe;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new et(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Ps(o,[0,0,0,1])||(r.rotation=o),Ps(l,[0,0,0])||(r.translation=l),Ps(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),KS(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const u=e.children[l];if(u.visible||n.onlyVisible===!1){const h=this.processNode(u);h!==null&&o.push(h)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});const a=t.nodes.push(r)-1;return i.set(e,a),a}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}processObjects(e){const t=new ns;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof ns?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class QS{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}let eE=class{constructor(s){this.writer=s,this.name="KHR_materials_unlit"}writeMaterial(s,e){if(!s.isMeshBasicMaterial)return;const t=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},t[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}},tE=class{constructor(s){this.writer=s,this.name="KHR_materials_clearcoat"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.clearcoat===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.clearcoatFactor=s.clearcoat,s.clearcoatMap){const r={index:t.processTexture(s.clearcoatMap),texCoord:s.clearcoatMap.channel};t.applyTextureTransform(r,s.clearcoatMap),i.clearcoatTexture=r}if(i.clearcoatRoughnessFactor=s.clearcoatRoughness,s.clearcoatRoughnessMap){const r={index:t.processTexture(s.clearcoatRoughnessMap),texCoord:s.clearcoatRoughnessMap.channel};t.applyTextureTransform(r,s.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=r}if(s.clearcoatNormalMap){const r={index:t.processTexture(s.clearcoatNormalMap),texCoord:s.clearcoatNormalMap.channel};t.applyTextureTransform(r,s.clearcoatNormalMap),i.clearcoatNormalTexture=r}e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},nE=class{constructor(s){this.writer=s,this.name="KHR_materials_iridescence"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.iridescence===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.iridescenceFactor=s.iridescence,s.iridescenceMap){const r={index:t.processTexture(s.iridescenceMap),texCoord:s.iridescenceMap.channel};t.applyTextureTransform(r,s.iridescenceMap),i.iridescenceTexture=r}if(i.iridescenceIor=s.iridescenceIOR,i.iridescenceThicknessMinimum=s.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=s.iridescenceThicknessRange[1],s.iridescenceThicknessMap){const r={index:t.processTexture(s.iridescenceThicknessMap),texCoord:s.iridescenceThicknessMap.channel};t.applyTextureTransform(r,s.iridescenceThicknessMap),i.iridescenceThicknessTexture=r}e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},iE=class{constructor(s){this.writer=s,this.name="KHR_materials_transmission"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.transmission===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.transmissionFactor=s.transmission,s.transmissionMap){const r={index:t.processTexture(s.transmissionMap),texCoord:s.transmissionMap.channel};t.applyTextureTransform(r,s.transmissionMap),i.transmissionTexture=r}e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},rE=class{constructor(s){this.writer=s,this.name="KHR_materials_volume"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.transmission===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.thicknessFactor=s.thickness,s.thicknessMap){const r={index:t.processTexture(s.thicknessMap),texCoord:s.thicknessMap.channel};t.applyTextureTransform(r,s.thicknessMap),i.thicknessTexture=r}i.attenuationDistance=s.attenuationDistance,i.attenuationColor=s.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},sE=class{constructor(s){this.writer=s,this.name="KHR_materials_ior"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.ior===1.5)return;const t=this.writer.extensionsUsed,n={};n.ior=s.ior,e.extensions=e.extensions||{},e.extensions[this.name]=n,t[this.name]=!0}},aE=class{constructor(s){this.writer=s,this.name="KHR_materials_specular"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.specularIntensity===1&&s.specularColor.equals(WS)&&!s.specularIntensityMap&&!s.specularColorTexture)return;const t=this.writer,n=t.extensionsUsed,i={};if(s.specularIntensityMap){const r={index:t.processTexture(s.specularIntensityMap),texCoord:s.specularIntensityMap.channel};t.applyTextureTransform(r,s.specularIntensityMap),i.specularTexture=r}if(s.specularColorMap){const r={index:t.processTexture(s.specularColorMap),texCoord:s.specularColorMap.channel};t.applyTextureTransform(r,s.specularColorMap),i.specularColorTexture=r}i.specularFactor=s.specularIntensity,i.specularColorFactor=s.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},oE=class{constructor(s){this.writer=s,this.name="KHR_materials_sheen"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.sheen==0)return;const t=this.writer,n=t.extensionsUsed,i={};if(s.sheenRoughnessMap){const r={index:t.processTexture(s.sheenRoughnessMap),texCoord:s.sheenRoughnessMap.channel};t.applyTextureTransform(r,s.sheenRoughnessMap),i.sheenRoughnessTexture=r}if(s.sheenColorMap){const r={index:t.processTexture(s.sheenColorMap),texCoord:s.sheenColorMap.channel};t.applyTextureTransform(r,s.sheenColorMap),i.sheenColorTexture=r}i.sheenRoughnessFactor=s.sheenRoughness,i.sheenColorFactor=s.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},lE=class{constructor(s){this.writer=s,this.name="KHR_materials_anisotropy"}writeMaterial(s,e){if(!s.isMeshPhysicalMaterial||s.anisotropy==0)return;const t=this.writer,n=t.extensionsUsed,i={};if(s.anisotropyMap){const r={index:t.processTexture(s.anisotropyMap)};t.applyTextureTransform(r,s.anisotropyMap),i.anisotropyTexture=r}i.anisotropyStrength=s.anisotropy,i.anisotropyRotation=s.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},cE=class{constructor(s){this.writer=s,this.name="KHR_materials_emissive_strength"}writeMaterial(s,e){if(!s.isMeshStandardMaterial||s.emissiveIntensity===1)return;const t=this.writer.extensionsUsed,n={};n.emissiveStrength=s.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=n,t[this.name]=!0}};var ha=Uint8Array,qm=Uint16Array,uE=Uint32Array,hE=new ha([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dE=new ha([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jm=function(s,e){for(var t=new qm(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new uE(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Zm=jm(hE,2),fE=Zm[0],pE=Zm[1];fE[28]=258,pE[258]=28;jm(dE,0);var mE=new qm(32768);for(var vt=0;vt<32768;++vt){var _i=(vt&43690)>>>1|(vt&21845)<<1;_i=(_i&52428)>>>2|(_i&13107)<<2,_i=(_i&61680)>>>4|(_i&3855)<<4,mE[vt]=((_i&65280)>>>8|(_i&255)<<8)>>>1}var cl=new ha(288);for(var vt=0;vt<144;++vt)cl[vt]=8;for(var vt=144;vt<256;++vt)cl[vt]=9;for(var vt=256;vt<280;++vt)cl[vt]=7;for(var vt=280;vt<288;++vt)cl[vt]=8;var gE=new ha(32);for(var vt=0;vt<32;++vt)gE[vt]=5;var vE=new ha(0),_E=typeof TextDecoder<"u"&&new TextDecoder,yE=0;try{_E.decode(vE,{stream:!0}),yE=1}catch{}new ln;new I;new en(0,0,0,"YXZ");new I;var xE=Object.defineProperty,ME=(s,e,t)=>e in s?xE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Be=(s,e,t)=>(ME(s,typeof e!="symbol"?e+"":e,t),t);const uo=new _r,df=new Nn,bE=Math.cos(70*(Math.PI/180)),ff=(s,e)=>(s%e+e)%e;class wE extends Hn{constructor(e,t){super(),Be(this,"object"),Be(this,"domElement"),Be(this,"enabled",!0),Be(this,"target",new I),Be(this,"minDistance",0),Be(this,"maxDistance",1/0),Be(this,"minZoom",0),Be(this,"maxZoom",1/0),Be(this,"minPolarAngle",0),Be(this,"maxPolarAngle",Math.PI),Be(this,"minAzimuthAngle",-1/0),Be(this,"maxAzimuthAngle",1/0),Be(this,"enableDamping",!1),Be(this,"dampingFactor",.05),Be(this,"enableZoom",!0),Be(this,"zoomSpeed",1),Be(this,"enableRotate",!0),Be(this,"rotateSpeed",1),Be(this,"enablePan",!0),Be(this,"panSpeed",1),Be(this,"screenSpacePanning",!0),Be(this,"keyPanSpeed",7),Be(this,"zoomToCursor",!1),Be(this,"autoRotate",!1),Be(this,"autoRotateSpeed",2),Be(this,"reverseOrbit",!1),Be(this,"reverseHorizontalOrbit",!1),Be(this,"reverseVerticalOrbit",!1),Be(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Be(this,"mouseButtons",{LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN}),Be(this,"touches",{ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN}),Be(this,"target0"),Be(this,"position0"),Be(this,"zoom0"),Be(this,"_domElementKeyEvents",null),Be(this,"getPolarAngle"),Be(this,"getAzimuthalAngle"),Be(this,"setPolarAngle"),Be(this,"setAzimuthalAngle"),Be(this,"getDistance"),Be(this,"listenToKeyEvents"),Be(this,"stopListenToKeyEvents"),Be(this,"saveState"),Be(this,"reset"),Be(this,"update"),Be(this,"connect"),Be(this,"dispose"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=z=>{let te=ff(z,2*Math.PI),ye=u.phi;ye<0&&(ye+=2*Math.PI),te<0&&(te+=2*Math.PI);let Te=Math.abs(te-ye);2*Math.PI-Te<Te&&(te<ye?te+=2*Math.PI:ye+=2*Math.PI),h.phi=te-ye,n.update()},this.setAzimuthalAngle=z=>{let te=ff(z,2*Math.PI),ye=u.theta;ye<0&&(ye+=2*Math.PI),te<0&&(te+=2*Math.PI);let Te=Math.abs(te-ye);2*Math.PI-Te<Te&&(te<ye?te+=2*Math.PI:ye+=2*Math.PI),h.theta=te-ye,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=z=>{z.addEventListener("keydown",Oe),this._domElementKeyEvents=z},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=o.NONE},this.update=(()=>{const z=new I,te=new I(0,1,0),ye=new Ft().setFromUnitVectors(e.up,te),Te=ye.clone().invert(),Je=new I,k=new Ft,we=2*Math.PI;return function(){const J=n.object.position;ye.setFromUnitVectors(e.up,te),Te.copy(ye).invert(),z.copy(J).sub(n.target),z.applyQuaternion(ye),u.setFromVector3(z),n.autoRotate&&l===o.NONE&&L(O()),n.enableDamping?(u.theta+=h.theta*n.dampingFactor,u.phi+=h.phi*n.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let fe=n.minAzimuthAngle,Me=n.maxAzimuthAngle;isFinite(fe)&&isFinite(Me)&&(fe<-Math.PI?fe+=we:fe>Math.PI&&(fe-=we),Me<-Math.PI?Me+=we:Me>Math.PI&&(Me-=we),fe<=Me?u.theta=Math.max(fe,Math.min(Me,u.theta)):u.theta=u.theta>(fe+Me)/2?Math.max(fe,u.theta):Math.min(Me,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.zoomToCursor&&T||n.object.isOrthographicCamera?u.radius=Ee(u.radius):u.radius=Ee(u.radius*d),z.setFromSpherical(u),z.applyQuaternion(Te),J.copy(n.target).add(z),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),f.set(0,0,0));let Ge=!1;if(n.zoomToCursor&&T){let ot=null;if(n.object instanceof ct&&n.object.isPerspectiveCamera){const xt=z.length();ot=Ee(xt*d);const kt=xt-ot;n.object.position.addScaledVector(E,kt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const xt=new I(b.x,b.y,0);xt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Ge=!0;const kt=new I(b.x,b.y,0);kt.unproject(n.object),n.object.position.sub(kt).add(xt),n.object.updateMatrixWorld(),ot=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(uo.origin.copy(n.object.position),uo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(uo.direction))<bE?e.lookAt(n.target):(df.setFromNormalAndCoplanarPoint(n.object.up,n.target),uo.intersectPlane(df,n.target))))}else n.object instanceof bn&&n.object.isOrthographicCamera&&(Ge=d!==1,Ge&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix()));return d=1,T=!1,Ge||Je.distanceToSquared(n.object.position)>c||8*(1-k.dot(n.object.quaternion))>c?(n.dispatchEvent(i),Je.copy(n.object.position),k.copy(n.object.quaternion),Ge=!1,!0):!1}})(),this.connect=z=>{z===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=z,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",ze),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",De)},this.dispose=()=>{var z,te,ye,Te,Je,k;(z=n.domElement)==null||z.removeEventListener("contextmenu",ze),(te=n.domElement)==null||te.removeEventListener("pointerdown",N),(ye=n.domElement)==null||ye.removeEventListener("pointercancel",se),(Te=n.domElement)==null||Te.removeEventListener("wheel",De),(Je=n.domElement)==null||Je.ownerDocument.removeEventListener("pointermove",R),(k=n.domElement)==null||k.ownerDocument.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Oe)};const n=this,i={type:"change"},r={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const c=1e-6,u=new Qc,h=new Qc;let d=1;const f=new I,m=new re,v=new re,p=new re,g=new re,x=new re,_=new re,M=new re,C=new re,w=new re,E=new I,b=new re;let T=!1;const y=[],S={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function W(){return Math.pow(.95,n.zoomSpeed)}function L(z){n.reverseOrbit||n.reverseHorizontalOrbit?h.theta+=z:h.theta-=z}function G(z){n.reverseOrbit||n.reverseVerticalOrbit?h.phi+=z:h.phi-=z}const B=(()=>{const z=new I;return function(te,ye){z.setFromMatrixColumn(ye,0),z.multiplyScalar(-te),f.add(z)}})(),Y=(()=>{const z=new I;return function(te,ye){n.screenSpacePanning===!0?z.setFromMatrixColumn(ye,1):(z.setFromMatrixColumn(ye,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(te),f.add(z)}})(),j=(()=>{const z=new I;return function(te,ye){const Te=n.domElement;if(Te&&n.object instanceof ct&&n.object.isPerspectiveCamera){const Je=n.object.position;z.copy(Je).sub(n.target);let k=z.length();k*=Math.tan(n.object.fov/2*Math.PI/180),B(2*te*k/Te.clientHeight,n.object.matrix),Y(2*ye*k/Te.clientHeight,n.object.matrix)}else Te&&n.object instanceof bn&&n.object.isOrthographicCamera?(B(te*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),Y(ye*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function Z(z){n.object instanceof ct&&n.object.isPerspectiveCamera||n.object instanceof bn&&n.object.isOrthographicCamera?d/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(z){n.object instanceof ct&&n.object.isPerspectiveCamera||n.object instanceof bn&&n.object.isOrthographicCamera?d*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(z){if(!n.zoomToCursor||!n.domElement)return;T=!0;const te=n.domElement.getBoundingClientRect(),ye=z.clientX-te.left,Te=z.clientY-te.top,Je=te.width,k=te.height;b.x=ye/Je*2-1,b.y=-(Te/k)*2+1,E.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ee(z){return Math.max(n.minDistance,Math.min(n.maxDistance,z))}function Ie(z){m.set(z.clientX,z.clientY)}function q(z){ce(z),M.set(z.clientX,z.clientY)}function le(z){g.set(z.clientX,z.clientY)}function be(z){v.set(z.clientX,z.clientY),p.subVectors(v,m).multiplyScalar(n.rotateSpeed);const te=n.domElement;te&&(L(2*Math.PI*p.x/te.clientHeight),G(2*Math.PI*p.y/te.clientHeight)),m.copy(v),n.update()}function Re(z){C.set(z.clientX,z.clientY),w.subVectors(C,M),w.y>0?Z(W()):w.y<0&&oe(W()),M.copy(C),n.update()}function ee(z){x.set(z.clientX,z.clientY),_.subVectors(x,g).multiplyScalar(n.panSpeed),j(_.x,_.y),g.copy(x),n.update()}function A(z){ce(z),z.deltaY<0?oe(W()):z.deltaY>0&&Z(W()),n.update()}function D(z){let te=!1;switch(z.code){case n.keys.UP:j(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:j(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:j(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:j(-n.keyPanSpeed,0),te=!0;break}te&&(z.preventDefault(),n.update())}function F(){if(y.length==1)m.set(y[0].pageX,y[0].pageY);else{const z=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);m.set(z,te)}}function P(){if(y.length==1)g.set(y[0].pageX,y[0].pageY);else{const z=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);g.set(z,te)}}function V(){const z=y[0].pageX-y[1].pageX,te=y[0].pageY-y[1].pageY,ye=Math.sqrt(z*z+te*te);M.set(0,ye)}function H(){n.enableZoom&&V(),n.enablePan&&P()}function ae(){n.enableZoom&&V(),n.enableRotate&&F()}function ie(z){if(y.length==1)v.set(z.pageX,z.pageY);else{const ye=Ue(z),Te=.5*(z.pageX+ye.x),Je=.5*(z.pageY+ye.y);v.set(Te,Je)}p.subVectors(v,m).multiplyScalar(n.rotateSpeed);const te=n.domElement;te&&(L(2*Math.PI*p.x/te.clientHeight),G(2*Math.PI*p.y/te.clientHeight)),m.copy(v)}function de(z){if(y.length==1)x.set(z.pageX,z.pageY);else{const te=Ue(z),ye=.5*(z.pageX+te.x),Te=.5*(z.pageY+te.y);x.set(ye,Te)}_.subVectors(x,g).multiplyScalar(n.panSpeed),j(_.x,_.y),g.copy(x)}function pe(z){const te=Ue(z),ye=z.pageX-te.x,Te=z.pageY-te.y,Je=Math.sqrt(ye*ye+Te*Te);C.set(0,Je),w.set(0,Math.pow(C.y/M.y,n.zoomSpeed)),Z(w.y),M.copy(C)}function xe(z){n.enableZoom&&pe(z),n.enablePan&&de(z)}function Le(z){n.enableZoom&&pe(z),n.enableRotate&&ie(z)}function N(z){var te,ye;n.enabled!==!1&&(y.length===0&&((te=n.domElement)==null||te.ownerDocument.addEventListener("pointermove",R),(ye=n.domElement)==null||ye.ownerDocument.addEventListener("pointerup",$)),me(z),z.pointerType==="touch"?_e(z):he(z))}function R(z){n.enabled!==!1&&(z.pointerType==="touch"?Se(z):ue(z))}function $(z){var te,ye,Te;yt(z),y.length===0&&((te=n.domElement)==null||te.releasePointerCapture(z.pointerId),(ye=n.domElement)==null||ye.ownerDocument.removeEventListener("pointermove",R),(Te=n.domElement)==null||Te.ownerDocument.removeEventListener("pointerup",$)),n.dispatchEvent(a),l=o.NONE}function se(z){yt(z)}function he(z){let te;switch(z.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Ki.DOLLY:if(n.enableZoom===!1)return;q(z),l=o.DOLLY;break;case Ki.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;le(z),l=o.PAN}else{if(n.enableRotate===!1)return;Ie(z),l=o.ROTATE}break;case Ki.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;Ie(z),l=o.ROTATE}else{if(n.enablePan===!1)return;le(z),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&n.dispatchEvent(r)}function ue(z){if(n.enabled!==!1)switch(l){case o.ROTATE:if(n.enableRotate===!1)return;be(z);break;case o.DOLLY:if(n.enableZoom===!1)return;Re(z);break;case o.PAN:if(n.enablePan===!1)return;ee(z);break}}function De(z){n.enabled===!1||n.enableZoom===!1||l!==o.NONE&&l!==o.ROTATE||(z.preventDefault(),n.dispatchEvent(r),A(z),n.dispatchEvent(a))}function Oe(z){n.enabled===!1||n.enablePan===!1||D(z)}function _e(z){switch(Ze(z),y.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;F(),l=o.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;P(),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(),l=o.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&n.dispatchEvent(r)}function Se(z){switch(Ze(z),l){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;ie(z),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;de(z),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(z),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(z),n.update();break;default:l=o.NONE}}function ze(z){n.enabled!==!1&&z.preventDefault()}function me(z){y.push(z)}function yt(z){delete S[z.pointerId];for(let te=0;te<y.length;te++)if(y[te].pointerId==z.pointerId){y.splice(te,1);return}}function Ze(z){let te=S[z.pointerId];te===void 0&&(te=new re,S[z.pointerId]=te),te.set(z.pageX,z.pageY)}function Ue(z){const te=z.pointerId===y[0].pointerId?y[1]:y[0];return S[te.pointerId]}t!==void 0&&this.connect(t),this.update()}}class SE extends qt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new HE(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Bn.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new vn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Bn.decodeText(new Uint8Array(e.slice(0,4)))===Km){try{a[st.KHR_BINARY_GLTF]=new VE(e)}catch(c){i&&i(c);return}r=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(Bn.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new t1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new AE;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new GE(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new WE;break;case st.KHR_MESH_QUANTIZATION:a[u]=new XE;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function EE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TE{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let o;const l=new ve(16777215);a.color!==void 0&&l.fromArray(a.color);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new $u(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Ku(l),o.distance=c;break;case"spot":o=new Zu(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,xi(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(o),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],r=(i.extensions&&i.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(a){return n._getNodeRef(t.cache,r,a)})}}class AE{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,3001))}return Promise.all(i)}}class RE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class CE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}}class PE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,3001)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class IE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ve(o[0],o[1],o[2]),Promise.all(r)}}class NE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class DE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ve(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,3001)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class BE{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zE{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kE{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class HE{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],o={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),u=c.isGroup?c.children:[c],h=l[0].count,d=[];for(const f of u){const m=new Pe,v=new I,p=new Ft,g=new I(1,1,1),x=new Du(f.geometry,f.material,h);for(let _=0;_<h;_++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,_),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,_),o.SCALE&&g.fromBufferAttribute(o.SCALE,_),x.setMatrixAt(_,m.compose(v,p,g));for(const _ in o)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&f.geometry.setAttribute(_,o[_]);at.prototype.copy.call(x,f),this.parser.assignFinalMaterial(x),d.push(x)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const Km="glTF",Rs=12,pf={JSON:1313821514,BIN:5130562};class VE{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs);if(this.header={magic:Bn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Km)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Rs,i=new DataView(e,Rs);let r=0;for(;r<n;){const a=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===pf.JSON){const l=new Uint8Array(e,Rs+r,a);this.content=Bn.decodeText(l)}else if(o===pf.BIN){const l=Rs+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=ru[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ru[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Kr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const m=d.attributes[f],v=l[f];v!==void 0&&(m.normalized=v)}h(d)},o,c)})})}}class WE{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XE{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class $m extends fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,v=m-c,p=-2*f+3*d,g=f-d,x=1-p,_=g-d+h;for(let M=0;M!==o;M++){const C=a[v+M+o],w=a[v+M+l]*u,E=a[m+M+o],b=a[m+M]*u;r[M]=x*C+_*w+p*E+g*b}return r}}const YE=new Ft;class qE extends $m{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return YE.fromArray(r).normalize().toArray(r),r}}const xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mf={9728:bt,9729:pt,9984:Qr,9985:or,9986:$n,9987:pn},gf={33071:Ot,33648:dr,10497:si},sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...Wm>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jE={CUBICSPLINE:void 0,LINEAR:Ri,STEP:mr},ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ua({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function Zi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function $E(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JE(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oc(t.attributes):e=s.indices+":"+oc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+oc(s.targets[n]);return e}function oc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const e1=new Pe;class t1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new EE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new vm(this.options.manager):this.textureLoader=new Em(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Zi(r,o,i),xi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Bn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=sc[i.type],o=Kr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new et(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=sc[i.type],c=Kr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,p;if(f&&f!==h){const g=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let _=t.cache.get(x);_||(v=new c(o,g*f,i.count*f/u),_=new hs(v,f/u),t.cache.add(x,_)),p=new kn(_,l,d%f/u,m)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),p=new et(v,l,m);if(i.sparse!==void 0){const g=sc.SCALAR,x=Kr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,C=new x(a[1],_,i.sparse.count*g),w=new c(a[2],M,i.sparse.count*l);o!==null&&(p=new et(p.array.slice(),p.itemSize,p.normalized));for(let E=0,b=C.length;E<b;E++){const T=C[E];if(p.setX(T,w[E*l]),l>=2&&p.setY(T,w[E*l+1]),l>=3&&p.setZ(T,w[E*l+2]),l>=4&&p.setW(T,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,r=t.images[i];let a=this.textureLoader;if(r.uri){const o=n.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(e,i,a)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=mf[h.magFilter]||pt,u.minFilter=mf[h.minFilter]||pn,u.wrapS=gf[h.wrapS]||si,u.wrapT=gf[h.wrapT]||si,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const p=new mt(v);p.needsUpdate=!0,d(p)}),t.load(Bn.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||QE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&("colorSpace"in a?a.colorSpace=i===3001?"srgb":"srgb-linear":a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Go,Lt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Yt,Lt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ua}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,3001)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);const u=r.alphaMode||ac.OPAQUE;if(u===ac.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ac.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==Qt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qt&&(o.emissive=new ve().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Qt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,3001)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),xi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zi(i,h,r),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return vf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=JE(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vf(new Ve,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?ZE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const v=u[f],p=a[f];let g;const x=c[f];if(p.mode===xn.TRIANGLES||p.mode===xn.TRIANGLE_STRIP||p.mode===xn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Nu(v,x):new ht(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===xn.TRIANGLE_STRIP?g.geometry=rf(g.geometry,bu):p.mode===xn.TRIANGLE_FAN&&(g.geometry=rf(g.geometry,Ao));else if(p.mode===xn.LINES)g=new Cn(v,x);else if(p.mode===xn.LINE_STRIP)g=new ai(v,x);else if(p.mode===xn.LINE_LOOP)g=new Ou(v,x);else if(p.mode===xn.POINTS)g=new Fu(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&$E(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),xi(g,r),p.extensions&&Zi(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zi(i,h[0],r),h[0];const d=new ti;r.extensions&&Zi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ct(gr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Pe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new aa(o,l)})}loadAnimation(e){const t=this.json.animations[e],n=t.name?t.name:"animation_"+e,i=[],r=[],a=[],o=[],l=[];for(let c=0,u=t.channels.length;c<u;c++){const h=t.channels[c],d=t.samplers[h.sampler],f=h.target,m=f.node,v=t.parameters!==void 0?t.parameters[d.input]:d.input,p=t.parameters!==void 0?t.parameters[d.output]:d.output;f.node!==void 0&&(i.push(this.getDependency("node",m)),r.push(this.getDependency("accessor",v)),a.push(this.getDependency("accessor",p)),o.push(d),l.push(f))}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],f=c[3],m=c[4],v=[];for(let p=0,g=u.length;p<g;p++){const x=u[p],_=h[p],M=d[p],C=f[p],w=m[p];if(x===void 0)continue;x.updateMatrix();let E;switch(yi[w.path]){case yi.weights:E=rs;break;case yi.rotation:E=Ci;break;case yi.position:case yi.scale:default:E=ss;break}const b=x.name?x.name:x.uuid,T=C.interpolation!==void 0?jE[C.interpolation]:Ri,y=[];yi[w.path]===yi.weights?x.traverse(function(O){O.morphTargetInfluences&&y.push(O.name?O.name:O.uuid)}):y.push(b);let S=M.array;if(M.normalized){const O=su(S.constructor),W=new Float32Array(S.length);for(let L=0,G=S.length;L<G;L++)W[L]=S[L]*O;S=W}for(let O=0,W=y.length;O<W;O++){const L=new E(y[O]+"."+yi[w.path],_.array,S,T);C.interpolation==="CUBICSPLINE"&&(L.createInterpolant=function(G){const B=this instanceof Ci?qE:$m;return new B(this.times,this.values,this.getValueSize()/3,G)},L.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(L)}}return new as(n,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,e1)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Vo:c.length>1?u=new ti:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),xi(u,r),r.extensions&&Zi(n,u,r),r.matrix!==void 0){const h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ti;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&Zi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Lt||d instanceof mt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}}function n1(s,e,t){const n=e.attributes,i=new Bt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const u=su(Kr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=su(Kr[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new zt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function vf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=ru[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return xi(s,e),n1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KE(s,e.targets,t):s})}new en;new I;var i1=Object.defineProperty,r1=(s,e,t)=>e in s?i1(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,oh=(s,e,t)=>(r1(s,typeof e!="symbol"?e+"":e,t),t);class Jm{constructor(e){oh(this,"data"),this.data=e}generateShapes(e,t=100,n){const i=[],r={letterSpacing:0,lineHeight:1,...n},a=s1(e,t,this.data,r);for(let o=0,l=a.length;o<l;o++)Array.prototype.push.apply(i,a[o].toShapes(!1));return i}}oh(Jm,"isFont");oh(Jm,"type");function s1(s,e,t,n){const i=Array.from(s),r=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let l=0,c=0;for(let u=0;u<i.length;u++){const h=i[u];if(h===`
`)l=0,c-=a*n.lineHeight;else{const d=a1(h,r,l,c,t);d&&(l+=d.offsetX+n.letterSpacing,o.push(d.path))}}return o}function a1(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const a=new Um;let o,l,c,u,h,d,f,m;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,g=v.length;p<g;)switch(v[p++]){case"m":o=parseInt(v[p++])*e+t,l=parseInt(v[p++])*e+n,a.moveTo(o,l);break;case"l":o=parseInt(v[p++])*e+t,l=parseInt(v[p++])*e+n,a.lineTo(o,l);break;case"q":c=parseInt(v[p++])*e+t,u=parseInt(v[p++])*e+n,h=parseInt(v[p++])*e+t,d=parseInt(v[p++])*e+n,a.quadraticCurveTo(h,d,c,u);break;case"b":c=parseInt(v[p++])*e+t,u=parseInt(v[p++])*e+n,h=parseInt(v[p++])*e+t,d=parseInt(v[p++])*e+n,f=parseInt(v[p++])*e+t,m=parseInt(v[p++])*e+n,a.bezierCurveTo(h,d,f,m,c,u);break}}return{offsetX:r.ha*e,path:a}}const lc=new WeakMap;class o1 extends qt{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new vn(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{const o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(a,o).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const c=t.attributeTypes[l];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=c.name)}const n=JSON.stringify(t);if(lc.has(e)){const l=lc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),lc.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Ve;e.index&&t.setIndex(new et(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize;t.setAttribute(r,new et(a,o))}return t}_loadLibrary(e,t){const n=new vn(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=l1.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function l1(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder,f=new h.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const m=t(h,d,f,c),v=m.attributes.map(p=>p.array.buffer);m.index&&v.push(m.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:m},v)}catch(m){console.error(m),self.postMessage({type:"error",id:o.id,error:m.message})}finally{h.destroy(f),h.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeBufferToMesh(l,d);else if(m===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const p in u){const g=self[h[p]];let x,_;if(c.useUniqueIDs)_=u[p],x=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[p]]),_===-1)continue;x=o.GetAttribute(d,_)}v.attributes.push(i(a,o,d,p,g,x))}return m===a.TRIANGULAR_MESH&&(v.index=n(a,o,d)),a.destroy(d),v}function n(a,o,l){const c=l.num_faces()*3,u=c*4,h=a._malloc(u);o.GetTrianglesUInt32Array(l,u,h);const d=new Uint32Array(a.HEAPF32.buffer,h,c).slice();return a._free(h),{array:d,itemSize:1}}function i(a,o,l,c,u,h){const d=h.num_components(),f=l.num_points()*d,m=f*u.BYTES_PER_ELEMENT,v=r(a,u),p=a._malloc(m);o.GetAttributeDataArrayForAllPoints(l,h,v,m,p);const g=new u(a.HEAPF32.buffer,p,f).slice();return a._free(p),{name:c,array:g,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class Qs extends ht{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new ct;const n=this,i=t.color!==void 0?new ve(t.color):new ve(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||Qs.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Nn,h=new I,d=new I,f=new I,m=new Pe,v=new I(0,0,-1),p=new it,g=new I,x=new I,_=new it,M=new Pe,C=this.camera,w=new wn(r,a,{samples:c,type:fr}),E=new tn({name:l.name!==void 0?l.name:"unspecified",uniforms:na.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=w.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=M,this.material=E,this.onBeforeRender=function(b,T,y){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),m.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),g.subVectors(d,f),g.dot(h)>0)return;g.reflect(h).negate(),g.add(d),m.extractRotation(y.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(f),x.subVectors(d,v),x.reflect(h).negate(),x.add(d),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(m),C.up.reflect(h),C.lookAt(x),C.far=y.far,C.updateMatrixWorld(),C.projectionMatrix.copy(y.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(C.projectionMatrix),M.multiply(C.matrixWorldInverse),M.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(C.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const S=C.projectionMatrix;_.x=(Math.sign(p.x)+S.elements[8])/S.elements[0],_.y=(Math.sign(p.y)+S.elements[9])/S.elements[5],_.z=-1,_.w=(1+S.elements[10])/S.elements[14],p.multiplyScalar(2/p.dot(_)),S.elements[2]=p.x,S.elements[6]=p.y,S.elements[10]=p.z+1-o,S.elements[14]=p.w,n.visible=!1;const O=b.getRenderTarget(),W=b.xr.enabled,L=b.shadowMap.autoUpdate;b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.setRenderTarget(w),b.state.buffers.depth.setMask(!0),b.autoClear===!1&&b.clear(),b.render(T,C),b.xr.enabled=W,b.shadowMap.autoUpdate=L,b.setRenderTarget(O);const G=y.viewport;G!==void 0&&b.state.viewport(G),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}Qs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const c1=["args","material-uniforms-color-value"],u1=wi("TresPlaneGeometry",{args:[5,5]},null,-1);Qs.ReflectorShader;function h1(s){return yf()?(xf(s),!0):!1}function Qm(s){return typeof s=="function"?s():rt(s)}const d1=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const f1=Object.prototype.toString,p1=s=>f1.call(s)==="[object Object]",m1=()=>{};function g1(s){var e;const t=Qm(s);return(e=t?.$el)!=null?e:t}const v1=d1?window:void 0;function cc(...s){let e,t,n,i;if(typeof s[0]=="string"||Array.isArray(s[0])?([t,n,i]=s,e=v1):[e,t,n,i]=s,!e)return m1;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const r=[],a=()=>{r.forEach(u=>u()),r.length=0},o=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=cn(()=>[g1(e),Qm(i)],([u,h])=>{if(a(),!u)return;const d=p1(h)?{...h}:h;r.push(...t.flatMap(f=>n.map(m=>o(u,f,m,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return h1(c),c}class Lo extends ht{constructor(){super(Lo.Geometry,new Qt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new I,t=new I,n=new jc(16,16),i=new jc(16,16);let r=Rn;const a=Lo.Geometry,o=new Ns({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new Ns({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new ht(a,o),u=[],h=eg.Shader,d=new Ns({name:h.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new ve(16777215)},scale:{value:new re},screenPosition:{value:new I}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:So,transparent:!0,depthWrite:!1}),f=new ht(a,d);this.addElement=function(x){u.push(x)};const m=new re,v=new re,p=new Pm,g=new it;this.onBeforeRender=function(x,_,M){x.getCurrentViewport(g);const C=x.getRenderTarget(),w=C!==null?C.texture.type:Rn;r!==w&&(n.dispose(),i.dispose(),n.type=i.type=w,r=w);const E=g.w/g.z,b=g.z/2,T=g.w/2;let y=16/g.w;if(m.set(y*E,y),p.min.set(g.x,g.y),p.max.set(g.x+(g.z-16),g.y+(g.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),v.x=g.x+e.x*b+b-8,v.y=g.y+e.y*T+T-8,p.containsPoint(v))){x.copyFramebufferToTexture(v,n);let S=o.uniforms;S.scale.value=m,S.screenPosition.value=e,x.renderBufferDirect(M,null,a,o,c,null),x.copyFramebufferToTexture(v,i),S=l.uniforms,S.scale.value=m,S.screenPosition.value=e,x.renderBufferDirect(M,null,a,l,c,null);const O=-e.x*2,W=-e.y*2;for(let L=0,G=u.length;L<G;L++){const B=u[L],Y=d.uniforms;Y.color.value.copy(B.color),Y.map.value=B.texture,Y.screenPosition.value.x=e.x+O*B.distance,Y.screenPosition.value.y=e.y+W*B.distance,y=B.size/g.w;const j=g.w/g.z;Y.scale.value.set(y*j,y),d.uniformsNeedUpdate=!0,x.renderBufferDirect(M,null,a,d,f,null)}}},this.dispose=function(){o.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let x=0,_=u.length;x<_;x++)u[x].texture.dispose()}}}class eg{constructor(e,t=1,n=0,i=new ve(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}eg.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Lo.Geometry=function(){const s=new Ve,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new hs(e,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new kn(t,3,0,!1)),s.setAttribute("uv",new kn(t,2,3,!1)),s}();gr.clamp;gr.lerp;let ho=null;function _1(s,e){return t=>{e&&e(t),s.draco&&(ho||(ho=new o1),ho.setDecoderPath(s.decoderPath||"https://www.gstatic.com/draco/versioned/decoders/1.4.3/"),t.setDRACOLoader(ho))}}async function K1(s,e={draco:!1},t){return await xS(SE,s,_1(e,t))}const y1=["target","auto-rotate","auto-rotate-speed","enable-damping","damping-factor","enable-pan","key-pan-speed","keys","max-azimuth-angle","min-azimuth-angle","max-polar-angle","min-polar-angle","min-distance","max-distance","min-zoom","max-zoom","touches","enable-zoom","zoom-speed","enable-rotate","rotate-speed","args"],x1=$r({__name:"OrbitControls",props:{makeDefault:{type:Boolean,default:!1},camera:{},domElement:{},target:{default:()=>[0,0,0]},enableDamping:{type:Boolean,default:!0},dampingFactor:{default:.05},autoRotate:{type:Boolean,default:!1},autoRotateSpeed:{default:2},enablePan:{type:Boolean,default:!0},keyPanSpeed:{default:7},keys:{},maxAzimuthAngle:{default:1/0},minAzimuthAngle:{default:-1/0},maxPolarAngle:{default:Math.PI},minPolarAngle:{default:0},minDistance:{default:0},maxDistance:{default:1/0},minZoom:{default:0},maxZoom:{default:1/0},touches:{default:()=>({ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN})},enableZoom:{type:Boolean,default:!0},zoomSpeed:{default:1},enableRotate:{type:Boolean,default:!0},rotateSpeed:{default:1}},emits:["change","start","end"],setup(s,{expose:e,emit:t}){const n=s,i=t,{makeDefault:r,autoRotate:a,autoRotateSpeed:o,enableDamping:l,dampingFactor:c,enablePan:u,keyPanSpeed:h,maxAzimuthAngle:d,minAzimuthAngle:f,maxPolarAngle:m,minPolarAngle:v,minDistance:p,maxDistance:g,minZoom:x,maxZoom:_,enableZoom:M,zoomSpeed:C,enableRotate:w,touches:E,rotateSpeed:b,target:T}=Io(n),{camera:y,renderer:S,extend:O,controls:W}=ah(),L=nt(null);O({OrbitControls:wE}),cn(L,Y=>{G(),Y&&r.value?W.value=Y:W.value=null});function G(){cc(L.value,"change",()=>i("change",L.value)),cc(L.value,"start",()=>i("start",L.value)),cc(L.value,"end",()=>i("end",L.value))}const{onLoop:B}=ol();return B(()=>{L.value&&(l.value||a.value)&&L.value.update()}),os(()=>{L.value&&L.value.dispose()}),e({value:L}),(Y,j)=>(Y.camera||rt(y))&&(Y.domElement||rt(S))?(hr(),Jr("TresOrbitControls",{key:0,ref_key:"controlsRef",ref:L,target:rt(T),"auto-rotate":rt(a),"auto-rotate-speed":rt(o),"enable-damping":rt(l),"damping-factor":rt(c),"enable-pan":rt(u),"key-pan-speed":rt(h),keys:Y.keys,"max-azimuth-angle":rt(d),"min-azimuth-angle":rt(f),"max-polar-angle":rt(m),"min-polar-angle":rt(v),"min-distance":rt(p),"max-distance":rt(g),"min-zoom":rt(x),"max-zoom":rt(_),touches:rt(E),"enable-zoom":rt(M),"zoom-speed":rt(C),"enable-rotate":rt(w),"rotate-speed":rt(b),args:[Y.camera||rt(y),Y.domElement||rt(S).domElement]},null,8,y1)):Sf("",!0)}});var M1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fo(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var b1={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function a(c,u){if(!i[c]){if(!n[c]){var h=typeof fo=="function"&&fo;if(!u&&h)return h(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}u=i[c]={exports:{}},n[c][0].call(u.exports,function(d){var f=n[c][1][d];return a(f||d)},u,u.exports,t,n,i,r)}return i[c].exports}for(var o=typeof fo=="function"&&fo,l=0;l<r.length;l++)a(r[l]);return a}({1:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){var m=t("crypto");function v(w,E){E=x(w,E);var b;return(b=E.algorithm!=="passthrough"?m.createHash(E.algorithm):new C).write===void 0&&(b.write=b.update,b.end=b.update),M(E,b).dispatch(w),b.update||b.end(""),b.digest?b.digest(E.encoding==="buffer"?void 0:E.encoding):(w=b.read(),E.encoding!=="buffer"?w.toString(E.encoding):w)}(i=n.exports=v).sha1=function(w){return v(w)},i.keys=function(w){return v(w,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(w){return v(w,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(w){return v(w,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=m.getHashes?m.getHashes().slice():["sha1","md5"],g=(p.push("passthrough"),["buffer","hex","binary","base64"]);function x(w,E){var b={};if(b.algorithm=(E=E||{}).algorithm||"sha1",b.encoding=E.encoding||"hex",b.excludeValues=!!E.excludeValues,b.algorithm=b.algorithm.toLowerCase(),b.encoding=b.encoding.toLowerCase(),b.ignoreUnknown=E.ignoreUnknown===!0,b.respectType=E.respectType!==!1,b.respectFunctionNames=E.respectFunctionNames!==!1,b.respectFunctionProperties=E.respectFunctionProperties!==!1,b.unorderedArrays=E.unorderedArrays===!0,b.unorderedSets=E.unorderedSets!==!1,b.unorderedObjects=E.unorderedObjects!==!1,b.replacer=E.replacer||void 0,b.excludeKeys=E.excludeKeys||void 0,w===void 0)throw new Error("Object argument required.");for(var T=0;T<p.length;++T)p[T].toLowerCase()===b.algorithm.toLowerCase()&&(b.algorithm=p[T]);if(p.indexOf(b.algorithm)===-1)throw new Error('Algorithm "'+b.algorithm+'"  not supported. supported values: '+p.join(", "));if(g.indexOf(b.encoding)===-1&&b.algorithm!=="passthrough")throw new Error('Encoding "'+b.encoding+'"  not supported. supported values: '+g.join(", "));return b}function _(w){if(typeof w=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w))!=null}function M(w,E,b){b=b||[];function T(y){return E.update?E.update(y,"utf8"):E.write(y,"utf8")}return{dispatch:function(y){return this["_"+((y=w.replacer?w.replacer(y):y)===null?"null":typeof y)](y)},_object:function(y){var S,O=Object.prototype.toString.call(y),W=/\[object (.*)\]/i.exec(O);if(W=(W=W?W[1]:"unknown:["+O+"]").toLowerCase(),0<=(O=b.indexOf(y)))return this.dispatch("[CIRCULAR:"+O+"]");if(b.push(y),o!==void 0&&o.isBuffer&&o.isBuffer(y))return T("buffer:"),T(y);if(W==="object"||W==="function"||W==="asyncfunction")return O=Object.keys(y),w.unorderedObjects&&(O=O.sort()),w.respectType===!1||_(y)||O.splice(0,0,"prototype","__proto__","constructor"),w.excludeKeys&&(O=O.filter(function(L){return!w.excludeKeys(L)})),T("object:"+O.length+":"),S=this,O.forEach(function(L){S.dispatch(L),T(":"),w.excludeValues||S.dispatch(y[L]),T(",")});if(!this["_"+W]){if(w.ignoreUnknown)return T("["+W+"]");throw new Error('Unknown object type "'+W+'"')}this["_"+W](y)},_array:function(y,L){L=L!==void 0?L:w.unorderedArrays!==!1;var O=this;if(T("array:"+y.length+":"),!L||y.length<=1)return y.forEach(function(G){return O.dispatch(G)});var W=[],L=y.map(function(G){var B=new C,Y=b.slice();return M(w,B,Y).dispatch(G),W=W.concat(Y.slice(b.length)),B.read().toString()});return b=b.concat(W),L.sort(),this._array(L,!1)},_date:function(y){return T("date:"+y.toJSON())},_symbol:function(y){return T("symbol:"+y.toString())},_error:function(y){return T("error:"+y.toString())},_boolean:function(y){return T("bool:"+y.toString())},_string:function(y){T("string:"+y.length+":"),T(y.toString())},_function:function(y){T("fn:"),_(y)?this.dispatch("[native]"):this.dispatch(y.toString()),w.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(y.name)),w.respectFunctionProperties&&this._object(y)},_number:function(y){return T("number:"+y.toString())},_xml:function(y){return T("xml:"+y.toString())},_null:function(){return T("Null")},_undefined:function(){return T("Undefined")},_regexp:function(y){return T("regex:"+y.toString())},_uint8array:function(y){return T("uint8array:"),this.dispatch(Array.prototype.slice.call(y))},_uint8clampedarray:function(y){return T("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(y))},_int8array:function(y){return T("int8array:"),this.dispatch(Array.prototype.slice.call(y))},_uint16array:function(y){return T("uint16array:"),this.dispatch(Array.prototype.slice.call(y))},_int16array:function(y){return T("int16array:"),this.dispatch(Array.prototype.slice.call(y))},_uint32array:function(y){return T("uint32array:"),this.dispatch(Array.prototype.slice.call(y))},_int32array:function(y){return T("int32array:"),this.dispatch(Array.prototype.slice.call(y))},_float32array:function(y){return T("float32array:"),this.dispatch(Array.prototype.slice.call(y))},_float64array:function(y){return T("float64array:"),this.dispatch(Array.prototype.slice.call(y))},_arraybuffer:function(y){return T("arraybuffer:"),this.dispatch(new Uint8Array(y))},_url:function(y){return T("url:"+y.toString())},_map:function(y){return T("map:"),y=Array.from(y),this._array(y,w.unorderedSets!==!1)},_set:function(y){return T("set:"),y=Array.from(y),this._array(y,w.unorderedSets!==!1)},_file:function(y){return T("file:"),this.dispatch([y.name,y.size,y.type,y.lastModfied])},_blob:function(){if(w.ignoreUnknown)return T("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return T("domwindow")},_bigint:function(y){return T("bigint:"+y.toString())},_process:function(){return T("process")},_timer:function(){return T("timer")},_pipe:function(){return T("pipe")},_tcp:function(){return T("tcp")},_udp:function(){return T("udp")},_tty:function(){return T("tty")},_statwatcher:function(){return T("statwatcher")},_securecontext:function(){return T("securecontext")},_connection:function(){return T("connection")},_zlib:function(){return T("zlib")},_context:function(){return T("context")},_nodescript:function(){return T("nodescript")},_httpparser:function(){return T("httpparser")},_dataview:function(){return T("dataview")},_signal:function(){return T("signal")},_fsevent:function(){return T("fsevent")},_tlswrap:function(){return T("tlswrap")}}}function C(){return{buf:"",write:function(w){this.buf+=w},end:function(w){this.buf+=w},read:function(){return this.buf}}}i.writeToStream=function(w,E,b){return b===void 0&&(b=E,E={}),M(E=x(w,E),b).dispatch(w)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){(function(m){var v=typeof Uint8Array<"u"?Uint8Array:Array,p=43,g=47,x=48,_=97,M=65,C=45,w=95;function E(b){return b=b.charCodeAt(0),b===p||b===C?62:b===g||b===w?63:b<x?-1:b<x+10?b-x+26+26:b<M+26?b-M:b<_+26?b-_+26:void 0}m.toByteArray=function(b){var T,y;if(0<b.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var S=b.length,S=b.charAt(S-2)==="="?2:b.charAt(S-1)==="="?1:0,O=new v(3*b.length/4-S),W=0<S?b.length-4:b.length,L=0;function G(B){O[L++]=B}for(T=0;T<W;T+=4,0)G((16711680&(y=E(b.charAt(T))<<18|E(b.charAt(T+1))<<12|E(b.charAt(T+2))<<6|E(b.charAt(T+3))))>>16),G((65280&y)>>8),G(255&y);return S==2?G(255&(y=E(b.charAt(T))<<2|E(b.charAt(T+1))>>4)):S==1&&(G((y=E(b.charAt(T))<<10|E(b.charAt(T+1))<<4|E(b.charAt(T+2))>>2)>>8&255),G(255&y)),O},m.fromByteArray=function(b){var T,y,S,O,W=b.length%3,L="";function G(B){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(B)}for(T=0,S=b.length-W;T<S;T+=3)y=(b[T]<<16)+(b[T+1]<<8)+b[T+2],L+=G((O=y)>>18&63)+G(O>>12&63)+G(O>>6&63)+G(63&O);switch(W){case 1:L=(L+=G((y=b[b.length-1])>>2))+G(y<<4&63)+"==";break;case 2:L=(L=(L+=G((y=(b[b.length-2]<<8)+b[b.length-1])>>10))+G(y>>4&63))+G(y<<2&63)+"="}return L}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(r,a,p,l,c,u,h,d,f){var m=t("base64-js"),v=t("ieee754");function p(A,D,F){if(!(this instanceof p))return new p(A,D,F);var P,V,H,ae,ie=typeof A;if(D==="base64"&&ie=="string")for(A=(ae=A).trim?ae.trim():ae.replace(/^\s+|\s+$/g,"");A.length%4!=0;)A+="=";if(ie=="number")P=j(A);else if(ie=="string")P=p.byteLength(A,D);else{if(ie!="object")throw new Error("First argument needs to be a number, array or string.");P=j(A.length)}if(p._useTypedArrays?V=p._augment(new Uint8Array(P)):((V=this).length=P,V._isBuffer=!0),p._useTypedArrays&&typeof A.byteLength=="number")V._set(A);else if(Z(ae=A)||p.isBuffer(ae)||ae&&typeof ae=="object"&&typeof ae.length=="number")for(H=0;H<P;H++)p.isBuffer(A)?V[H]=A.readUInt8(H):V[H]=A[H];else if(ie=="string")V.write(A,0,D);else if(ie=="number"&&!p._useTypedArrays&&!F)for(H=0;H<P;H++)V[H]=0;return V}function g(A,D,F,P){return p._charsWritten=Ie(function(V){for(var H=[],ae=0;ae<V.length;ae++)H.push(255&V.charCodeAt(ae));return H}(D),A,F,P)}function x(A,D,F,P){return p._charsWritten=Ie(function(V){for(var H,ae,ie=[],de=0;de<V.length;de++)ae=V.charCodeAt(de),H=ae>>8,ae=ae%256,ie.push(ae),ie.push(H);return ie}(D),A,F,P)}function _(A,D,F){var P="";F=Math.min(A.length,F);for(var V=D;V<F;V++)P+=String.fromCharCode(A[V]);return P}function M(A,D,F,H){H||(ee(typeof F=="boolean","missing or invalid endian"),ee(D!=null,"missing offset"),ee(D+1<A.length,"Trying to read beyond buffer length"));var V,H=A.length;if(!(H<=D))return F?(V=A[D],D+1<H&&(V|=A[D+1]<<8)):(V=A[D]<<8,D+1<H&&(V|=A[D+1])),V}function C(A,D,F,H){H||(ee(typeof F=="boolean","missing or invalid endian"),ee(D!=null,"missing offset"),ee(D+3<A.length,"Trying to read beyond buffer length"));var V,H=A.length;if(!(H<=D))return F?(D+2<H&&(V=A[D+2]<<16),D+1<H&&(V|=A[D+1]<<8),V|=A[D],D+3<H&&(V+=A[D+3]<<24>>>0)):(D+1<H&&(V=A[D+1]<<16),D+2<H&&(V|=A[D+2]<<8),D+3<H&&(V|=A[D+3]),V+=A[D]<<24>>>0),V}function w(A,D,F,P){if(P||(ee(typeof F=="boolean","missing or invalid endian"),ee(D!=null,"missing offset"),ee(D+1<A.length,"Trying to read beyond buffer length")),!(A.length<=D))return P=M(A,D,F,!0),32768&P?-1*(65535-P+1):P}function E(A,D,F,P){if(P||(ee(typeof F=="boolean","missing or invalid endian"),ee(D!=null,"missing offset"),ee(D+3<A.length,"Trying to read beyond buffer length")),!(A.length<=D))return P=C(A,D,F,!0),2147483648&P?-1*(4294967295-P+1):P}function b(A,D,F,P){return P||(ee(typeof F=="boolean","missing or invalid endian"),ee(D+3<A.length,"Trying to read beyond buffer length")),v.read(A,D,F,23,4)}function T(A,D,F,P){return P||(ee(typeof F=="boolean","missing or invalid endian"),ee(D+7<A.length,"Trying to read beyond buffer length")),v.read(A,D,F,52,8)}function y(A,D,F,P,V){if(V||(ee(D!=null,"missing value"),ee(typeof P=="boolean","missing or invalid endian"),ee(F!=null,"missing offset"),ee(F+1<A.length,"trying to write beyond buffer length"),le(D,65535)),V=A.length,!(V<=F))for(var H=0,ae=Math.min(V-F,2);H<ae;H++)A[F+H]=(D&255<<8*(P?H:1-H))>>>8*(P?H:1-H)}function S(A,D,F,P,V){if(V||(ee(D!=null,"missing value"),ee(typeof P=="boolean","missing or invalid endian"),ee(F!=null,"missing offset"),ee(F+3<A.length,"trying to write beyond buffer length"),le(D,4294967295)),V=A.length,!(V<=F))for(var H=0,ae=Math.min(V-F,4);H<ae;H++)A[F+H]=D>>>8*(P?H:3-H)&255}function O(A,D,F,P,V){V||(ee(D!=null,"missing value"),ee(typeof P=="boolean","missing or invalid endian"),ee(F!=null,"missing offset"),ee(F+1<A.length,"Trying to write beyond buffer length"),be(D,32767,-32768)),A.length<=F||y(A,0<=D?D:65535+D+1,F,P,V)}function W(A,D,F,P,V){V||(ee(D!=null,"missing value"),ee(typeof P=="boolean","missing or invalid endian"),ee(F!=null,"missing offset"),ee(F+3<A.length,"Trying to write beyond buffer length"),be(D,2147483647,-2147483648)),A.length<=F||S(A,0<=D?D:4294967295+D+1,F,P,V)}function L(A,D,F,P,V){V||(ee(D!=null,"missing value"),ee(typeof P=="boolean","missing or invalid endian"),ee(F!=null,"missing offset"),ee(F+3<A.length,"Trying to write beyond buffer length"),Re(D,34028234663852886e22,-34028234663852886e22)),A.length<=F||v.write(A,D,F,P,23,4)}function G(A,D,F,P,V){V||(ee(D!=null,"missing value"),ee(typeof P=="boolean","missing or invalid endian"),ee(F!=null,"missing offset"),ee(F+7<A.length,"Trying to write beyond buffer length"),Re(D,17976931348623157e292,-17976931348623157e292)),A.length<=F||v.write(A,D,F,P,52,8)}i.Buffer=p,i.SlowBuffer=p,i.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var A=new ArrayBuffer(0),D=new Uint8Array(A);return D.foo=function(){return 42},D.foo()===42&&typeof D.subarray=="function"}catch{return!1}}(),p.isEncoding=function(A){switch(String(A).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(A){return!(A==null||!A._isBuffer)},p.byteLength=function(A,D){var F;switch(A+="",D||"utf8"){case"hex":F=A.length/2;break;case"utf8":case"utf-8":F=ce(A).length;break;case"ascii":case"binary":case"raw":F=A.length;break;case"base64":F=Ee(A).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":F=2*A.length;break;default:throw new Error("Unknown encoding")}return F},p.concat=function(A,D){if(ee(Z(A),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),A.length===0)return new p(0);if(A.length===1)return A[0];if(typeof D!="number")for(V=D=0;V<A.length;V++)D+=A[V].length;for(var F=new p(D),P=0,V=0;V<A.length;V++){var H=A[V];H.copy(F,P),P+=H.length}return F},p.prototype.write=function(A,D,F,P){isFinite(D)?isFinite(F)||(P=F,F=void 0):(de=P,P=D,D=F,F=de),D=Number(D)||0;var V,H,ae,ie,de=this.length-D;switch((!F||de<(F=Number(F)))&&(F=de),P=String(P||"utf8").toLowerCase()){case"hex":V=function(pe,xe,Le,N){Le=Number(Le)||0;var R=pe.length-Le;(!N||R<(N=Number(N)))&&(N=R),ee((R=xe.length)%2==0,"Invalid hex string"),R/2<N&&(N=R/2);for(var $=0;$<N;$++){var se=parseInt(xe.substr(2*$,2),16);ee(!isNaN(se),"Invalid hex string"),pe[Le+$]=se}return p._charsWritten=2*$,$}(this,A,D,F);break;case"utf8":case"utf-8":H=this,ae=D,ie=F,V=p._charsWritten=Ie(ce(A),H,ae,ie);break;case"ascii":case"binary":V=g(this,A,D,F);break;case"base64":H=this,ae=D,ie=F,V=p._charsWritten=Ie(Ee(A),H,ae,ie);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":V=x(this,A,D,F);break;default:throw new Error("Unknown encoding")}return V},p.prototype.toString=function(A,D,F){var P,V,H,ae,ie=this;if(A=String(A||"utf8").toLowerCase(),D=Number(D)||0,(F=F!==void 0?Number(F):ie.length)===D)return"";switch(A){case"hex":P=function(de,pe,xe){var Le=de.length;(!pe||pe<0)&&(pe=0),(!xe||xe<0||Le<xe)&&(xe=Le);for(var N="",R=pe;R<xe;R++)N+=oe(de[R]);return N}(ie,D,F);break;case"utf8":case"utf-8":P=function(de,pe,xe){var Le="",N="";xe=Math.min(de.length,xe);for(var R=pe;R<xe;R++)de[R]<=127?(Le+=q(N)+String.fromCharCode(de[R]),N=""):N+="%"+de[R].toString(16);return Le+q(N)}(ie,D,F);break;case"ascii":case"binary":P=_(ie,D,F);break;case"base64":V=ie,ae=F,P=(H=D)===0&&ae===V.length?m.fromByteArray(V):m.fromByteArray(V.slice(H,ae));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":P=function(de,pe,xe){for(var Le=de.slice(pe,xe),N="",R=0;R<Le.length;R+=2)N+=String.fromCharCode(Le[R]+256*Le[R+1]);return N}(ie,D,F);break;default:throw new Error("Unknown encoding")}return P},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(A,D,F,P){if(D=D||0,(P=P||P===0?P:this.length)!==(F=F||0)&&A.length!==0&&this.length!==0){ee(F<=P,"sourceEnd < sourceStart"),ee(0<=D&&D<A.length,"targetStart out of bounds"),ee(0<=F&&F<this.length,"sourceStart out of bounds"),ee(0<=P&&P<=this.length,"sourceEnd out of bounds"),P>this.length&&(P=this.length);var V=(P=A.length-D<P-F?A.length-D+F:P)-F;if(V<100||!p._useTypedArrays)for(var H=0;H<V;H++)A[H+D]=this[H+F];else A._set(this.subarray(F,F+V),D)}},p.prototype.slice=function(A,D){var F=this.length;if(A=Y(A,F,0),D=Y(D,F,F),p._useTypedArrays)return p._augment(this.subarray(A,D));for(var P=D-A,V=new p(P,void 0,!0),H=0;H<P;H++)V[H]=this[H+A];return V},p.prototype.get=function(A){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(A)},p.prototype.set=function(A,D){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(A,D)},p.prototype.readUInt8=function(A,D){if(D||(ee(A!=null,"missing offset"),ee(A<this.length,"Trying to read beyond buffer length")),!(A>=this.length))return this[A]},p.prototype.readUInt16LE=function(A,D){return M(this,A,!0,D)},p.prototype.readUInt16BE=function(A,D){return M(this,A,!1,D)},p.prototype.readUInt32LE=function(A,D){return C(this,A,!0,D)},p.prototype.readUInt32BE=function(A,D){return C(this,A,!1,D)},p.prototype.readInt8=function(A,D){if(D||(ee(A!=null,"missing offset"),ee(A<this.length,"Trying to read beyond buffer length")),!(A>=this.length))return 128&this[A]?-1*(255-this[A]+1):this[A]},p.prototype.readInt16LE=function(A,D){return w(this,A,!0,D)},p.prototype.readInt16BE=function(A,D){return w(this,A,!1,D)},p.prototype.readInt32LE=function(A,D){return E(this,A,!0,D)},p.prototype.readInt32BE=function(A,D){return E(this,A,!1,D)},p.prototype.readFloatLE=function(A,D){return b(this,A,!0,D)},p.prototype.readFloatBE=function(A,D){return b(this,A,!1,D)},p.prototype.readDoubleLE=function(A,D){return T(this,A,!0,D)},p.prototype.readDoubleBE=function(A,D){return T(this,A,!1,D)},p.prototype.writeUInt8=function(A,D,F){F||(ee(A!=null,"missing value"),ee(D!=null,"missing offset"),ee(D<this.length,"trying to write beyond buffer length"),le(A,255)),D>=this.length||(this[D]=A)},p.prototype.writeUInt16LE=function(A,D,F){y(this,A,D,!0,F)},p.prototype.writeUInt16BE=function(A,D,F){y(this,A,D,!1,F)},p.prototype.writeUInt32LE=function(A,D,F){S(this,A,D,!0,F)},p.prototype.writeUInt32BE=function(A,D,F){S(this,A,D,!1,F)},p.prototype.writeInt8=function(A,D,F){F||(ee(A!=null,"missing value"),ee(D!=null,"missing offset"),ee(D<this.length,"Trying to write beyond buffer length"),be(A,127,-128)),D>=this.length||(0<=A?this.writeUInt8(A,D,F):this.writeUInt8(255+A+1,D,F))},p.prototype.writeInt16LE=function(A,D,F){O(this,A,D,!0,F)},p.prototype.writeInt16BE=function(A,D,F){O(this,A,D,!1,F)},p.prototype.writeInt32LE=function(A,D,F){W(this,A,D,!0,F)},p.prototype.writeInt32BE=function(A,D,F){W(this,A,D,!1,F)},p.prototype.writeFloatLE=function(A,D,F){L(this,A,D,!0,F)},p.prototype.writeFloatBE=function(A,D,F){L(this,A,D,!1,F)},p.prototype.writeDoubleLE=function(A,D,F){G(this,A,D,!0,F)},p.prototype.writeDoubleBE=function(A,D,F){G(this,A,D,!1,F)},p.prototype.fill=function(A,D,F){if(D=D||0,F=F||this.length,ee(typeof(A=typeof(A=A||0)=="string"?A.charCodeAt(0):A)=="number"&&!isNaN(A),"value is not a number"),ee(D<=F,"end < start"),F!==D&&this.length!==0){ee(0<=D&&D<this.length,"start out of bounds"),ee(0<=F&&F<=this.length,"end out of bounds");for(var P=D;P<F;P++)this[P]=A}},p.prototype.inspect=function(){for(var A=[],D=this.length,F=0;F<D;F++)if(A[F]=oe(this[F]),F===i.INSPECT_MAX_BYTES){A[F+1]="...";break}return"<Buffer "+A.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var A=new Uint8Array(this.length),D=0,F=A.length;D<F;D+=1)A[D]=this[D];return A.buffer};var B=p.prototype;function Y(A,D,F){return typeof A!="number"?F:D<=(A=~~A)?D:0<=A||0<=(A+=D)?A:0}function j(A){return(A=~~Math.ceil(+A))<0?0:A}function Z(A){return(Array.isArray||function(D){return Object.prototype.toString.call(D)==="[object Array]"})(A)}function oe(A){return A<16?"0"+A.toString(16):A.toString(16)}function ce(A){for(var D=[],F=0;F<A.length;F++){var P=A.charCodeAt(F);if(P<=127)D.push(A.charCodeAt(F));else for(var V=F,H=(55296<=P&&P<=57343&&F++,encodeURIComponent(A.slice(V,F+1)).substr(1).split("%")),ae=0;ae<H.length;ae++)D.push(parseInt(H[ae],16))}return D}function Ee(A){return m.toByteArray(A)}function Ie(A,D,F,P){for(var V=0;V<P&&!(V+F>=D.length||V>=A.length);V++)D[V+F]=A[V];return V}function q(A){try{return decodeURIComponent(A)}catch{return"�"}}function le(A,D){ee(typeof A=="number","cannot write a non-number as a number"),ee(0<=A,"specified a negative value for writing an unsigned value"),ee(A<=D,"value is larger than maximum value for type"),ee(Math.floor(A)===A,"value has a fractional component")}function be(A,D,F){ee(typeof A=="number","cannot write a non-number as a number"),ee(A<=D,"value larger than maximum allowed value"),ee(F<=A,"value smaller than minimum allowed value"),ee(Math.floor(A)===A,"value has a fractional component")}function Re(A,D,F){ee(typeof A=="number","cannot write a non-number as a number"),ee(A<=D,"value larger than maximum allowed value"),ee(F<=A,"value smaller than minimum allowed value")}function ee(A,D){if(!A)throw new Error(D||"Failed assertion")}p._augment=function(A){return A._isBuffer=!0,A._get=A.get,A._set=A.set,A.get=B.get,A.set=B.set,A.write=B.write,A.toString=B.toString,A.toLocaleString=B.toString,A.toJSON=B.toJSON,A.copy=B.copy,A.slice=B.slice,A.readUInt8=B.readUInt8,A.readUInt16LE=B.readUInt16LE,A.readUInt16BE=B.readUInt16BE,A.readUInt32LE=B.readUInt32LE,A.readUInt32BE=B.readUInt32BE,A.readInt8=B.readInt8,A.readInt16LE=B.readInt16LE,A.readInt16BE=B.readInt16BE,A.readInt32LE=B.readInt32LE,A.readInt32BE=B.readInt32BE,A.readFloatLE=B.readFloatLE,A.readFloatBE=B.readFloatBE,A.readDoubleLE=B.readDoubleLE,A.readDoubleBE=B.readDoubleBE,A.writeUInt8=B.writeUInt8,A.writeUInt16LE=B.writeUInt16LE,A.writeUInt16BE=B.writeUInt16BE,A.writeUInt32LE=B.writeUInt32LE,A.writeUInt32BE=B.writeUInt32BE,A.writeInt8=B.writeInt8,A.writeInt16LE=B.writeInt16LE,A.writeInt16BE=B.writeInt16BE,A.writeInt32LE=B.writeInt32LE,A.writeInt32BE=B.writeInt32BE,A.writeFloatLE=B.writeFloatLE,A.writeFloatBE=B.writeFloatBE,A.writeDoubleLE=B.writeDoubleLE,A.writeDoubleBE=B.writeDoubleBE,A.fill=B.fill,A.inspect=B.inspect,A.toArrayBuffer=B.toArrayBuffer,A}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(r,a,m,l,c,u,h,d,f){var m=t("buffer").Buffer,v=4,p=new m(v);p.fill(0),n.exports={hash:function(g,x,_,M){for(var C=x(function(y,S){y.length%v!=0&&(O=y.length+(v-y.length%v),y=m.concat([y,p],O));for(var O,W=[],L=S?y.readInt32BE:y.readInt32LE,G=0;G<y.length;G+=v)W.push(L.call(y,G));return W}(g=m.isBuffer(g)?g:new m(g),M),8*g.length),x=M,w=new m(_),E=x?w.writeInt32BE:w.writeInt32LE,b=0;b<C.length;b++)E.call(w,C[b],4*b,!0);return w}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(r,a,m,l,c,u,h,d,f){var m=t("buffer").Buffer,v=t("./sha"),p=t("./sha256"),g=t("./rng"),x={sha1:v,sha256:p,md5:t("./md5")},_=64,M=new m(_);function C(y,S){var O=x[y=y||"sha1"],W=[];return O||w("algorithm:",y,"is not yet supported"),{update:function(L){return m.isBuffer(L)||(L=new m(L)),W.push(L),L.length,this},digest:function(L){var G=m.concat(W),G=S?function(B,Y,j){m.isBuffer(Y)||(Y=new m(Y)),m.isBuffer(j)||(j=new m(j)),Y.length>_?Y=B(Y):Y.length<_&&(Y=m.concat([Y,M],_));for(var Z=new m(_),oe=new m(_),ce=0;ce<_;ce++)Z[ce]=54^Y[ce],oe[ce]=92^Y[ce];return j=B(m.concat([Z,j])),B(m.concat([oe,j]))}(O,S,G):O(G);return W=null,L?G.toString(L):G}}}function w(){var y=[].slice.call(arguments).join(" ");throw new Error([y,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}M.fill(0),i.createHash=function(y){return C(y)},i.createHmac=C,i.randomBytes=function(y,S){if(!S||!S.call)return new m(g(y));try{S.call(this,void 0,new m(g(y)))}catch(O){S(O)}};var E,b=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],T=function(y){i[y]=function(){w("sorry,",y,"is not implemented yet")}};for(E in b)T(b[E])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){var m=t("./helpers");function v(w,E){w[E>>5]|=128<<E%32,w[14+(E+64>>>9<<4)]=E;for(var b=1732584193,T=-271733879,y=-1732584194,S=271733878,O=0;O<w.length;O+=16){var W=b,L=T,G=y,B=S,b=g(b,T,y,S,w[O+0],7,-680876936),S=g(S,b,T,y,w[O+1],12,-389564586),y=g(y,S,b,T,w[O+2],17,606105819),T=g(T,y,S,b,w[O+3],22,-1044525330);b=g(b,T,y,S,w[O+4],7,-176418897),S=g(S,b,T,y,w[O+5],12,1200080426),y=g(y,S,b,T,w[O+6],17,-1473231341),T=g(T,y,S,b,w[O+7],22,-45705983),b=g(b,T,y,S,w[O+8],7,1770035416),S=g(S,b,T,y,w[O+9],12,-1958414417),y=g(y,S,b,T,w[O+10],17,-42063),T=g(T,y,S,b,w[O+11],22,-1990404162),b=g(b,T,y,S,w[O+12],7,1804603682),S=g(S,b,T,y,w[O+13],12,-40341101),y=g(y,S,b,T,w[O+14],17,-1502002290),b=x(b,T=g(T,y,S,b,w[O+15],22,1236535329),y,S,w[O+1],5,-165796510),S=x(S,b,T,y,w[O+6],9,-1069501632),y=x(y,S,b,T,w[O+11],14,643717713),T=x(T,y,S,b,w[O+0],20,-373897302),b=x(b,T,y,S,w[O+5],5,-701558691),S=x(S,b,T,y,w[O+10],9,38016083),y=x(y,S,b,T,w[O+15],14,-660478335),T=x(T,y,S,b,w[O+4],20,-405537848),b=x(b,T,y,S,w[O+9],5,568446438),S=x(S,b,T,y,w[O+14],9,-1019803690),y=x(y,S,b,T,w[O+3],14,-187363961),T=x(T,y,S,b,w[O+8],20,1163531501),b=x(b,T,y,S,w[O+13],5,-1444681467),S=x(S,b,T,y,w[O+2],9,-51403784),y=x(y,S,b,T,w[O+7],14,1735328473),b=_(b,T=x(T,y,S,b,w[O+12],20,-1926607734),y,S,w[O+5],4,-378558),S=_(S,b,T,y,w[O+8],11,-2022574463),y=_(y,S,b,T,w[O+11],16,1839030562),T=_(T,y,S,b,w[O+14],23,-35309556),b=_(b,T,y,S,w[O+1],4,-1530992060),S=_(S,b,T,y,w[O+4],11,1272893353),y=_(y,S,b,T,w[O+7],16,-155497632),T=_(T,y,S,b,w[O+10],23,-1094730640),b=_(b,T,y,S,w[O+13],4,681279174),S=_(S,b,T,y,w[O+0],11,-358537222),y=_(y,S,b,T,w[O+3],16,-722521979),T=_(T,y,S,b,w[O+6],23,76029189),b=_(b,T,y,S,w[O+9],4,-640364487),S=_(S,b,T,y,w[O+12],11,-421815835),y=_(y,S,b,T,w[O+15],16,530742520),b=M(b,T=_(T,y,S,b,w[O+2],23,-995338651),y,S,w[O+0],6,-198630844),S=M(S,b,T,y,w[O+7],10,1126891415),y=M(y,S,b,T,w[O+14],15,-1416354905),T=M(T,y,S,b,w[O+5],21,-57434055),b=M(b,T,y,S,w[O+12],6,1700485571),S=M(S,b,T,y,w[O+3],10,-1894986606),y=M(y,S,b,T,w[O+10],15,-1051523),T=M(T,y,S,b,w[O+1],21,-2054922799),b=M(b,T,y,S,w[O+8],6,1873313359),S=M(S,b,T,y,w[O+15],10,-30611744),y=M(y,S,b,T,w[O+6],15,-1560198380),T=M(T,y,S,b,w[O+13],21,1309151649),b=M(b,T,y,S,w[O+4],6,-145523070),S=M(S,b,T,y,w[O+11],10,-1120210379),y=M(y,S,b,T,w[O+2],15,718787259),T=M(T,y,S,b,w[O+9],21,-343485551),b=C(b,W),T=C(T,L),y=C(y,G),S=C(S,B)}return Array(b,T,y,S)}function p(w,E,b,T,y,S){return C((E=C(C(E,w),C(T,S)))<<y|E>>>32-y,b)}function g(w,E,b,T,y,S,O){return p(E&b|~E&T,w,E,y,S,O)}function x(w,E,b,T,y,S,O){return p(E&T|b&~T,w,E,y,S,O)}function _(w,E,b,T,y,S,O){return p(E^b^T,w,E,y,S,O)}function M(w,E,b,T,y,S,O){return p(b^(E|~T),w,E,y,S,O)}function C(w,E){var b=(65535&w)+(65535&E);return(w>>16)+(E>>16)+(b>>16)<<16|65535&b}n.exports=function(w){return m.hash(w,v,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){n.exports=function(m){for(var v,p=new Array(m),g=0;g<m;g++)!(3&g)&&(v=4294967296*Math.random()),p[g]=v>>>((3&g)<<3)&255;return p}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){var m=t("./helpers");function v(x,_){x[_>>5]|=128<<24-_%32,x[15+(_+64>>9<<4)]=_;for(var M,C,w,E=Array(80),b=1732584193,T=-271733879,y=-1732584194,S=271733878,O=-1009589776,W=0;W<x.length;W+=16){for(var L=b,G=T,B=y,Y=S,j=O,Z=0;Z<80;Z++){E[Z]=Z<16?x[W+Z]:g(E[Z-3]^E[Z-8]^E[Z-14]^E[Z-16],1);var oe=p(p(g(b,5),(oe=T,C=y,w=S,(M=Z)<20?oe&C|~oe&w:!(M<40)&&M<60?oe&C|oe&w|C&w:oe^C^w)),p(p(O,E[Z]),(M=Z)<20?1518500249:M<40?1859775393:M<60?-1894007588:-899497514)),O=S,S=y,y=g(T,30),T=b,b=oe}b=p(b,L),T=p(T,G),y=p(y,B),S=p(S,Y),O=p(O,j)}return Array(b,T,y,S,O)}function p(x,_){var M=(65535&x)+(65535&_);return(x>>16)+(_>>16)+(M>>16)<<16|65535&M}function g(x,_){return x<<_|x>>>32-_}n.exports=function(x){return m.hash(x,v,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){function m(_,M){var C=(65535&_)+(65535&M);return(_>>16)+(M>>16)+(C>>16)<<16|65535&C}function v(_,M){var C,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),E=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),b=new Array(64);_[M>>5]|=128<<24-M%32,_[15+(M+64>>9<<4)]=M;for(var T,y,S=0;S<_.length;S+=16){for(var O=E[0],W=E[1],L=E[2],G=E[3],B=E[4],Y=E[5],j=E[6],Z=E[7],oe=0;oe<64;oe++)b[oe]=oe<16?_[oe+S]:m(m(m((y=b[oe-2],g(y,17)^g(y,19)^x(y,10)),b[oe-7]),(y=b[oe-15],g(y,7)^g(y,18)^x(y,3))),b[oe-16]),C=m(m(m(m(Z,g(y=B,6)^g(y,11)^g(y,25)),B&Y^~B&j),w[oe]),b[oe]),T=m(g(T=O,2)^g(T,13)^g(T,22),O&W^O&L^W&L),Z=j,j=Y,Y=B,B=m(G,C),G=L,L=W,W=O,O=m(C,T);E[0]=m(O,E[0]),E[1]=m(W,E[1]),E[2]=m(L,E[2]),E[3]=m(G,E[3]),E[4]=m(B,E[4]),E[5]=m(Y,E[5]),E[6]=m(j,E[6]),E[7]=m(Z,E[7])}return E}var p=t("./helpers"),g=function(_,M){return _>>>M|_<<32-M},x=function(_,M){return _>>>M};n.exports=function(_){return p.hash(_,v,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){i.read=function(m,v,p,g,S){var _,M,C=8*S-g-1,w=(1<<C)-1,E=w>>1,b=-7,T=p?S-1:0,y=p?-1:1,S=m[v+T];for(T+=y,_=S&(1<<-b)-1,S>>=-b,b+=C;0<b;_=256*_+m[v+T],T+=y,b-=8);for(M=_&(1<<-b)-1,_>>=-b,b+=g;0<b;M=256*M+m[v+T],T+=y,b-=8);if(_===0)_=1-E;else{if(_===w)return M?NaN:1/0*(S?-1:1);M+=Math.pow(2,g),_-=E}return(S?-1:1)*M*Math.pow(2,_-g)},i.write=function(m,v,p,g,x,O){var M,C,w=8*O-x-1,E=(1<<w)-1,b=E>>1,T=x===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=g?0:O-1,S=g?1:-1,O=v<0||v===0&&1/v<0?1:0;for(v=Math.abs(v),isNaN(v)||v===1/0?(C=isNaN(v)?1:0,M=E):(M=Math.floor(Math.log(v)/Math.LN2),v*(g=Math.pow(2,-M))<1&&(M--,g*=2),2<=(v+=1<=M+b?T/g:T*Math.pow(2,1-b))*g&&(M++,g/=2),E<=M+b?(C=0,M=E):1<=M+b?(C=(v*g-1)*Math.pow(2,x),M+=b):(C=v*Math.pow(2,b-1)*Math.pow(2,x),M=0));8<=x;m[p+y]=255&C,y+=S,C/=256,x-=8);for(M=M<<x|C,w+=x;0<w;m[p+y]=255&M,y+=S,M/=256,w-=8);m[p+y-S]|=128*O}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(r,a,o,l,c,u,h,d,f){var m,v,p;function g(){}(r=n.exports={}).nextTick=(v=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,v?function(x){return window.setImmediate(x)}:p?(m=[],window.addEventListener("message",function(x){var _=x.source;_!==window&&_!==null||x.data!=="process-tick"||(x.stopPropagation(),0<m.length&&m.shift()())},!0),function(x){m.push(x),window.postMessage("process-tick","*")}):function(x){setTimeout(x,0)}),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.binding=function(x){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(x){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(b1);var w1=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],au=w1;au=au.slice().filter(function(s){return!/^(gl\_|texture)/.test(s)});au.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]);function S1(s,e){if(typeof s!="object"||s===null)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function E1(s){var e=S1(s,"string");return typeof e=="symbol"?e:String(e)}function ut(s,e,t){return e=E1(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var ke={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},nn,Gr;nn={},ut(nn,"".concat(ke.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(ke.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),ut(nn,"".concat(ke.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(ke.position,`;
  `)}),ut(nn,"".concat(ke.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(ke.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),ut(nn,"".concat(ke.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(ke.pointSize,`;
    `)}),ut(nn,"".concat(ke.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(ke.diffuseColor,`;
  `)}),ut(nn,"".concat(ke.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(ke.fragColor,`;
  `)}),ut(nn,"".concat(ke.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(ke.emissive,`;
    `)}),ut(nn,"".concat(ke.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(ke.roughness,`;
    `)}),ut(nn,"".concat(ke.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(ke.metalness,`;
    `)}),ut(nn,"".concat(ke.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(ke.ao,`;
    `)}),ut(nn,"".concat(ke.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(ke.bump," - (dot(").concat(ke.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),ut(nn,"".concat(ke.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(ke.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(ke.depthAlpha,`;
    `)});Gr={},ut(Gr,"".concat(ke.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(ke.position,`, 1.0 );
  `)}),ut(Gr,"".concat(ke.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(ke.position,`;
  `)}),ut(Gr,"".concat(ke.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(ke.diffuseColor,`;
  `)}),ut(Gr,"".concat(ke.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(ke.fragColor,`;
  `)});var rn;rn={},ut(rn,"".concat(ke.position),"*"),ut(rn,"".concat(ke.positionRaw),"*"),ut(rn,"".concat(ke.normal),"*"),ut(rn,"".concat(ke.pointSize),["PointsMaterial"]),ut(rn,"".concat(ke.diffuseColor),"*"),ut(rn,"".concat(ke.fragColor),"*"),ut(rn,"".concat(ke.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),ut(rn,"".concat(ke.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),ut(rn,"".concat(ke.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),ut(rn,"".concat(ke.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),ut(rn,"".concat(ke.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),ut(rn,"".concat(ke.depthAlpha),"*");new Bt;new I;ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Mn.line={uniforms:na.merge([ge.common,ge.fog,ge.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new I;new I;new it;new it;new it;new I;new Pe;new Lm;new I;new Bt;new zt;new it;class lh extends ht{constructor(){const e=lh.SkyShader,t=new tn({name:e.name,uniforms:na.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Xt,depthWrite:!1});super(new Li(1,1,1),t),this.isSky=!0}}lh.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var T1={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(M1,function(){var t=function(){function n(f){return a.appendChild(f.dom),f}function i(f){for(var m=0;m<a.children.length;m++)a.children[m].style.display=m===f?"block":"none";r=f}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(f){f.preventDefault(),i(++r%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-o,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:a,setMode:i}};return t.Panel=function(n,i,r){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,m=3*c,v=15*c,p=74*c,g=30*c,x=document.createElement("canvas");x.width=u,x.height=h,x.style.cssText="width:80px;height:48px";var _=x.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=r,_.fillRect(0,0,u,h),_.fillStyle=i,_.fillText(n,d,f),_.fillRect(m,v,p,g),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(m,v,p,g),{dom:x,update:function(M,C){a=Math.min(a,M),o=Math.max(o,M),_.fillStyle=r,_.globalAlpha=1,_.fillRect(0,0,u,v),_.fillStyle=i,_.fillText(l(M)+" "+n+" ("+l(a)+"-"+l(o)+")",d,f),_.drawImage(x,m+c,v,p-c,g,m,v,p-c,g),_.fillRect(m+p-c,v,c,g),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(m+p-c,v,c,l((1-M/C)*g))}}},t})})(T1);var A1=`#include <common>

void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;

  
  
  float size = 0.03;

  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;

  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;

  gl_Position = projectionMatrix * mvPosition;
}`,R1=`void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}`;const da=new I(0,0,0),ch=new I(0,0,0),C1=new I(0,0,0);function _f(s,e,t){const n=da.setFromMatrixPosition(s.matrixWorld);n.project(e);const i=t.width/2,r=t.height/2;return[(Number.isNaN(n.x)?0:n.x)*i+i,-(n.y*r)+r]}function P1(s,e){const t=da.setFromMatrixPosition(s.matrixWorld),n=ch.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),r=e.getWorldDirection(C1);return i.angleTo(r)>Math.PI/2}function L1(s,e,t,n){const i=da.setFromMatrixPosition(s.matrixWorld),r=i.clone();r.project(e),t.setFromCamera(new re(r.x,r.y),e);const a=t.intersectObjects(n,!0);if(a.length>0){const o=a[0].distance;return i.distanceTo(t.ray.origin)<o}return!0}function I1(s,e){if(e instanceof bn)return e.zoom;if(e instanceof ct){const t=da.setFromMatrixPosition(s.matrixWorld),n=ch.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,r=t.distanceTo(n);return 1/(2*Math.tan(i/2)*r)}else return 1}function U1(s,e,t){if(e instanceof ct||e instanceof bn){const n=da.setFromMatrixPosition(s.matrixWorld),i=ch.setFromMatrixPosition(e.matrixWorld),r=n.distanceTo(i),a=(t[1]-t[0])/(e.far-e.near),o=t[1]-a*e.far;return Math.round(a*r+o)}}const ou=s=>Math.abs(s)<1e-10?0:s;function tg(s,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=ou(e[i]*s.elements[i])+(i!==15?",":")");return t+n}const N1=(s=>e=>tg(e,s))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),D1=(s=>(e,t)=>tg(e,s(t),"translate(-50%,-50%)"))(s=>[1/s,1/s,1/s,1,-1/s,-1/s,-1/s,-1,1/s,1/s,1/s,1,1,1,1,1]),O1=["geometry","material"];new Ii;const F1=$r({__name:"TheExperience",setup(s,{expose:e}){e();const i={CatSkull:xg(()=>Eg(()=>import("./Catskull.vCZbm1yf.js"),__vite__mapDeps([0,1,2,3,4]))),gl:{clearColor:"#181C3E",shadows:!0,alpha:!1,shadowMapType:Af,outputColorSpace:an,toneMapping:On},get TresCanvas(){return kS},get OrbitControls(){return x1}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),B1={class:"tres-container"},z1=wi("TresPerspectiveCamera",{position:[190,0,50],fov:45,"look-at":[0,0,0]},null,-1),k1=wi("TresMesh",null,[wi("TresTorusGeometry",{args:[1,.5,16,32]}),wi("TresMeshBasicMaterial",{color:"orange"})],-1),H1=wi("TresAmbientLight",{intensity:1.4,color:16777113},null,-1),V1=wi("TresDirectionalLight",{color:6711039,intensity:1.8,position:[0,0,5]},null,-1),G1=wi("div",null,"Loading model...",-1);function W1(s,e,t,n,i,r){return hr(),Jr("div",B1,[vh(" TheExperience.vue - Element "),er(n.TresCanvas,gg(vg(n.gl)),{default:pl(()=>[z1,k1,H1,V1,er(n.OrbitControls),(hr(),_g(yg,null,{default:pl(()=>[er(n.CatSkull)]),fallback:pl(()=>[G1]),_:1}))]),_:1},16),vh(" TheExperience.vue - Element ")])}const $1=bg(F1,[["render",W1]]);export{lw as A,ct as P,$1 as T,re as V,ah as g,K1 as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/Catskull.vCZbm1yf.js","_astro/_plugin-vue_export-helper.x3n3nnut.js","_astro/runtime-core.esm-bundler.MlPhw38J.js","_astro/runtime-dom.esm-bundler.RFckeph1.js","_astro/bread-simul.IlC817g3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}