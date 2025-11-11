(function(O,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],T):(O=typeof globalThis<"u"?globalThis:O||self,T(O.DataShell={},O.React))})(this,(function(O,T){"use strict";var U={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function ke(){if(re)return L;re=1;var l=T,d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(f,y,v){var _,g={},D=null,$=null;v!==void 0&&(D=""+v),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&($=y.ref);for(_ in y)t.call(y,_)&&!s.hasOwnProperty(_)&&(g[_]=y[_]);if(f&&f.defaultProps)for(_ in y=f.defaultProps,y)g[_]===void 0&&(g[_]=y[_]);return{$$typeof:d,type:f,key:D,ref:$,props:g,_owner:o.current}}return L.Fragment=n,L.jsx=i,L.jsxs=i,L}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function Fe(){return te||(te=1,process.env.NODE_ENV!=="production"&&(function(){var l=T,d=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),ie=Symbol.iterator,$e="@@iterator";function ze(e){if(e===null||typeof e!="object")return null;var r=ie&&e[ie]||e[$e];return typeof r=="function"?r:null}var I=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,a=new Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];Be("error",e,a)}}function Be(e,r,a){{var u=I.ReactDebugCurrentFrame,b=u.getStackAddendum();b!==""&&(r+="%s",a=a.concat([b]));var x=a.map(function(h){return String(h)});x.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,x)}}var Je=!1,Ke=!1,qe=!1,Ge=!1,Xe=!1,oe;oe=Symbol.for("react.module.reference");function He(e){return!!(typeof e=="string"||typeof e=="function"||e===t||e===s||Xe||e===o||e===v||e===_||Ge||e===$||Je||Ke||qe||typeof e=="object"&&e!==null&&(e.$$typeof===D||e.$$typeof===g||e.$$typeof===i||e.$$typeof===f||e.$$typeof===y||e.$$typeof===oe||e.getModuleId!==void 0))}function Qe(e,r,a){var u=e.displayName;if(u)return u;var b=r.displayName||r.name||"";return b!==""?a+"("+b+")":a}function se(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case t:return"Fragment";case n:return"Portal";case s:return"Profiler";case o:return"StrictMode";case v:return"Suspense";case _:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case f:var r=e;return se(r)+".Consumer";case i:var a=e;return se(a._context)+".Provider";case y:return Qe(e,e.render,"ForwardRef");case g:var u=e.displayName||null;return u!==null?u:P(e.type)||"Memo";case D:{var b=e,x=b._payload,h=b._init;try{return P(h(x))}catch{return null}}}return null}var k=Object.assign,Y=0,le,ue,fe,ce,de,pe,ve;function he(){}he.__reactDisabledLog=!0;function Ze(){{if(Y===0){le=console.log,ue=console.info,fe=console.warn,ce=console.error,de=console.group,pe=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:he,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Ne(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:le}),info:k({},e,{value:ue}),warn:k({},e,{value:fe}),error:k({},e,{value:ce}),group:k({},e,{value:de}),groupCollapsed:k({},e,{value:pe}),groupEnd:k({},e,{value:ve})})}Y<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=I.ReactCurrentDispatcher,G;function z(e,r,a){{if(G===void 0)try{throw Error()}catch(b){var u=b.stack.trim().match(/\n( *(at )?)/);G=u&&u[1]||""}return`
`+G+e}}var X=!1,B;{var er=typeof WeakMap=="function"?WeakMap:Map;B=new er}function be(e,r){if(!e||X)return"";{var a=B.get(e);if(a!==void 0)return a}var u;X=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=q.current,q.current=null,Ze();try{if(r){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(S){u=S}Reflect.construct(e,[],h)}else{try{h.call()}catch(S){u=S}e.call(h.prototype)}}else{try{throw Error()}catch(S){u=S}e()}}catch(S){if(S&&u&&typeof S.stack=="string"){for(var c=S.stack.split(`
`),j=u.stack.split(`
`),E=c.length-1,R=j.length-1;E>=1&&R>=0&&c[E]!==j[R];)R--;for(;E>=1&&R>=0;E--,R--)if(c[E]!==j[R]){if(E!==1||R!==1)do if(E--,R--,R<0||c[E]!==j[R]){var w=`
`+c[E].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,w),w}while(E>=1&&R>=0);break}}}finally{X=!1,q.current=x,Ne(),Error.prepareStackTrace=b}var C=e?e.displayName||e.name:"",F=C?z(C):"";return typeof e=="function"&&B.set(e,F),F}function rr(e,r,a){return be(e,!1)}function tr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function J(e,r,a){if(e==null)return"";if(typeof e=="function")return be(e,tr(e));if(typeof e=="string")return z(e);switch(e){case v:return z("Suspense");case _:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case y:return rr(e.render);case g:return J(e.type,r,a);case D:{var u=e,b=u._payload,x=u._init;try{return J(x(b),r,a)}catch{}}}return""}var M=Object.prototype.hasOwnProperty,xe={},ge=I.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,a=J(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(a)}else ge.setExtraStackFrame(null)}function nr(e,r,a,u,b){{var x=Function.call.bind(M);for(var h in e)if(x(e,h)){var c=void 0;try{if(typeof e[h]!="function"){var j=Error((u||"React class")+": "+a+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}c=e[h](r,h,u,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(E){c=E}c&&!(c instanceof Error)&&(K(b),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",a,h,typeof c),K(null)),c instanceof Error&&!(c.message in xe)&&(xe[c.message]=!0,K(b),m("Failed %s type: %s",a,c.message),K(null))}}}var ar=Array.isArray;function H(e){return ar(e)}function ir(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,a=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return a}}function or(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function _e(e){if(or(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ir(e)),ye(e)}var Ee=I.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0},Re,me;function lr(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ur(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function fr(e,r){typeof e.ref=="string"&&Ee.current}function cr(e,r){{var a=function(){Re||(Re=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"key",{get:a,configurable:!0})}}function dr(e,r){{var a=function(){me||(me=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"ref",{get:a,configurable:!0})}}var pr=function(e,r,a,u,b,x,h){var c={$$typeof:d,type:e,key:r,ref:a,props:h,_owner:x};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function vr(e,r,a,u,b){{var x,h={},c=null,j=null;a!==void 0&&(_e(a),c=""+a),ur(r)&&(_e(r.key),c=""+r.key),lr(r)&&(j=r.ref,fr(r,b));for(x in r)M.call(r,x)&&!sr.hasOwnProperty(x)&&(h[x]=r[x]);if(e&&e.defaultProps){var E=e.defaultProps;for(x in E)h[x]===void 0&&(h[x]=E[x])}if(c||j){var R=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&cr(h,R),j&&dr(h,R)}return pr(e,c,j,b,u,Ee.current,h)}}var Q=I.ReactCurrentOwner,je=I.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,a=J(e.type,e._source,r?r.type:null);je.setExtraStackFrame(a)}else je.setExtraStackFrame(null)}var Z;Z=!1;function N(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Se(){{if(Q.current){var e=P(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function hr(e){return""}var we={};function br(e){{var r=Se();if(!r){var a=typeof e=="string"?e:e.displayName||e.name;a&&(r=`

Check the top-level render call using <`+a+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var a=br(r);if(we[a])return;we[a]=!0;var u="";e&&e._owner&&e._owner!==Q.current&&(u=" It was passed a child from "+P(e._owner.type)+"."),A(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,u),A(null)}}function Oe(e,r){{if(typeof e!="object")return;if(H(e))for(var a=0;a<e.length;a++){var u=e[a];N(u)&&Te(u,r)}else if(N(e))e._store&&(e._store.validated=!0);else if(e){var b=ze(e);if(typeof b=="function"&&b!==e.entries)for(var x=b.call(e),h;!(h=x.next()).done;)N(h.value)&&Te(h.value,r)}}}function xr(e){{var r=e.type;if(r==null||typeof r=="string")return;var a;if(typeof r=="function")a=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===y||r.$$typeof===g))a=r.propTypes;else return;if(a){var u=P(r);nr(a,e.props,"prop",u,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var b=P(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gr(e){{for(var r=Object.keys(e.props),a=0;a<r.length;a++){var u=r[a];if(u!=="children"&&u!=="key"){A(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u),A(null);break}}e.ref!==null&&(A(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}var Pe={};function De(e,r,a,u,b,x){{var h=He(e);if(!h){var c="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=hr();j?c+=j:c+=Se();var E;e===null?E="null":H(e)?E="array":e!==void 0&&e.$$typeof===d?(E="<"+(P(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,c)}var R=vr(e,r,a,b,x);if(R==null)return R;if(h){var w=r.children;if(w!==void 0)if(u)if(H(w)){for(var C=0;C<w.length;C++)Oe(w[C],e);Object.freeze&&Object.freeze(w)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(w,e)}if(M.call(r,"key")){var F=P(e),S=Object.keys(r).filter(function(jr){return jr!=="key"}),ee=S.length>0?"{key: someKey, "+S.join(": ..., ")+": ...}":"{key: someKey}";if(!Pe[F+ee]){var mr=S.length>0?"{"+S.join(": ..., ")+": ...}":"{}";m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,F,mr,F),Pe[F+ee]=!0}}return e===t?gr(R):xr(R),R}}function yr(e,r,a){return De(e,r,a,!0)}function _r(e,r,a){return De(e,r,a,!1)}var Er=_r,Rr=yr;W.Fragment=t,W.jsx=Er,W.jsxs=Rr})()),W}var ne;function Ie(){return ne||(ne=1,process.env.NODE_ENV==="production"?U.exports=ke():U.exports=Fe()),U.exports}var p=Ie();const Ae="#212121ff";function Ce(l){const d="9566ec883cfc66c1d8e693110ee4290f1b6476864";let n=document.getElementById(d);n&&n.remove();const t=document.createElement("style");t.id=d;let o="";for(const s in l)console.log(s),o+=l[s].innerStyle;t.textContent=o,document.head.appendChild(t)}function Le(l){return l.replace("/;"," __$emi_col__ ").replace(`
`," ").split(";").map(d=>d.trim().split(/\s+/).filter(n=>n.length))}function We(l){for(var d="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=n.length,o=0;o<l;o++)d+=n.charAt(Math.floor(Math.random()*t));return d}function V(l){return typeof l!="string"?!1:!isNaN(l)&&!isNaN(parseFloat(l))}function Ye(l){let d="x1";const n=We(14);let t="40px",o="71.6px",s="3px",i=Ae,f="1000ms",y=null,v=1;for(;l[v]!==void 0;)if(l[v][0]==="$")y=l[v].replace(/^\$/,""),v++;else if(l[v][0]==="-"){let g=!0;switch(l[v]){case"-w":case"--width":g=V(l[v+1][l[v+1].length-1]),t=g?l[v+1]+"px":l[v+1];break;case"-h":case"--height":g=V(l[v+1][l[v+1].length-1]),o=g?l[v+1]+"px":l[v+1];break;case"-b":case"--border":g=V(l[v+1][l[v+1].length-1]),s=g?l[v+1]+"px":l[v+1];break;case"-c":case"--color":i=l[v+1];break;case"-s":case"--speed":g=V(l[v+1][l[v+1].length-1]),f=g?l[v+1]+"ms":l[v+1];break;default:v--;break}v+=2}else{switch(l[v]){case"large":t="60px",o="107.5px",s="7px";break;case"normal":t="40px",o="71.6px",s="4px";break;case"thin":t="48px",o="86px",s="2px";break;case"small":t="30px",o="53.7px",s="2px";break;case"spinner":case"spin":case"t1":case"type-1":d="x1";break;case"growing":case"grow":case"t2":case"type-2":d="x2",f="2000ms";break;case"dottedspinner":case"dotspin":case"t3":case"type-3":d="x3",f="3000ms";break;case"loading":case"load":case"t4":case"type-4":d="x4",f="2000ms";break;case"moon":case"t5":case"type-5":d="x5",f="2000ms";break;case"scroll":case"t6":case"type-6":d="x6",f="2000ms";break}v++}let _={};if(d==="x1")_={__DID:n,node:"span",id:y,class:["loader-spinner-x0000-"+n],innerStyle:`
      .loader-spinner-x0000-`+n+` {
          width:`+t+";height:"+t+`;
          border-radius: 50%;
          border: `+s+" solid "+i+`;
          border-bottom-color: transparent;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation-loader-snpinner-x0000 `+f+` linear infinite;
      }
      @keyframes rotation-loader-snpinner-x0000 {
          0% {
              transform: rotate(0deg);
          }

          100% {
              transform: rotate(360deg);
          }
      }`,children:[]};else if(d==="x2"){const g=f[f.length-2]==="m"?String(parseFloat(f)/2)+"ms":String(parseFloat(f)/2)+"s";_={__DID:n,node:"span",id:y,class:["loader-spinner-x0001-"+n],innerStyle:".loader-spinner-x0001-"+n+` {
          width:`+t+`;
          height:`+t+`;
          display: inline-block;
          position: relative;
      }
      .loader-spinner-x0001-`+n+`::after,
      .loader-spinner-x0001-`+n+`::before{
        content: '';
        box-sizing: border-box;
        width: `+t+`;
        height: `+t+`;
        border-radius: 50%;
        border: `+s+" solid "+i+`;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0001 `+f+` linear infinite;
      }
      .loader-spinner-x0001-`+n+`::after {
          animation-delay: `+g+`;
      }
      @keyframes animloader-loader-spinner-x0001 {
          0% {
              transform: scale(0);
              opacity: 1;
          }
          100% {
              transform: scale(1);
              opacity: 0;
          }
        }
      
      `,children:[]}}else if(d==="x3")_={__DID:n,node:"span",id:y,class:["loader-spinner-x0003-"+n],children:[],innerStyle:`
      .loader-spinner-x0003-`+n+` {
        width: `+t+`;
        height: `+t+`;
        border: `+s+" dotted "+i+`;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation-loader-spinner-x0003 `+f+` linear infinite;
      }
      @keyframes rotation-loader-spinner-x0003 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      } 
      `};else if(d==="x4"){const g=f[f.length-2]==="m"?String(parseFloat(f)/2)+"ms":String(parseFloat(f)/2)+"s";_={__DID:n,node:"span",id:y,class:["loader-spinner-x0004-"+n],children:[],innerStyle:`
           .loader-spinner-x0004-`+n+` {
        width: `+t+`;
        height: `+t+`;
        display: inline-block;
        position: relative;
      }
      .loader-spinner-x0004-`+n+`::after,
      .loader-spinner-x0004-`+n+`::before {
        content: '';  
        box-sizing: border-box;
        width: `+t+`;
        height: `+t+`;
        border-radius: 50%;
        background: `+i+`;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0004 `+f+` linear infinite;
      }
      .loader-spinner-x0004-`+n+`::after {
        animation-delay: `+g+`;
      }
      @keyframes animloader-loader-spinner-x0004 {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
       
      `}}else if(d==="x5")_={__DID:n,node:"span",id:y,class:["loader-spinner-x0005-"+n],children:[],innerStyle:`
      .loader-spinner-x0005-`+n+` {
        width: `+t+`;
        height: `+t+`;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: animloader-loader-spinner-x0005 `+f+` linear infinite;
      }

      @keyframes animloader-loader-spinner-x0005 {
        0% {
          box-shadow: -`+String(parseFloat(t)*1.5)+"px 0 "+i+` inset;
        }
        100% {
          box-shadow: `+t+" 0 "+i+` inset;
        }
      }  
      `};else if(d==="x6"){const g=t[t.length]==="%"?"%":t[t.length]==="m"?"em":"px";_={__DID:n,node:"span",id:y,class:["loader-spinner-x0006-"+n],children:[],innerStyle:`
      .loader-spinner-x0006-`+n+` {
        width: `+t+`;
        height: `+o+`;
        position: absolute;
      }

      .loader-spinner-x0006-`+n+`::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50% , 50%);
        width: `+String(parseFloat(t)*.2083333333)+g+`;
        height: `+String(parseFloat(t)*.2083333333)+g+`;
        background: `+i+`;
        border-radius: 50%;
        animation: bounce-loader-spinner-x0006 1s ease-in infinite alternate;
      }
      .loader-spinner-x0006-`+n+`::after {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        width: `+t+`;
        height: `+o+`;
        box-sizing: border-box;
        border: `+s+" solid "+i+`;
        border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
        animation: kick-loader-spinner-x0006-`+n+` 1s ease-in infinite alternate;
      }
      @keyframes bounce-loader-spinner-x0006 {
        0% {
          top: 0%;
          opacity: 1;
        }
        100% {
          top: 75%;
          opacity: 0.2;
        }
      }
      @keyframes kick-loader-spinner-x0006-`+n+` {
        0% , 75% {
          height: `+o+`
        }
        100% {
          height: `+String(parseFloat(o)*.9)+g+`
        }
      }
      `}}return _}function Me(l){let d=[];if(l){const n=Le(l);for(const t of n)t[0]==="loader"&&d.push(Ye(t))}return d}function ae({type:l="div",src:d,children:n,className:t,id:o,onClick:s=()=>{},dsi:i,style:f}){switch(l){case"span":return p.jsx("span",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"h1":return p.jsx("h1",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"h2":return p.jsx("h2",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"h3":return p.jsx("h3",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"h4":return p.jsx("h4",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"h5":return p.jsx("h5",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"h6":return p.jsx("h6",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"section":return p.jsx("section",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"blockquote":return p.jsx("blockquote",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"dd":return p.jsx("dd",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"dt":return p.jsx("dt",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"dl":return p.jsx("dl",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"hr":return p.jsx("hr",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"li":return p.jsx("li",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"ol":return p.jsx("ol",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"p":return p.jsx("p",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"ul":return p.jsx("ul",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"a":return p.jsx("a",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"<button":return p.jsx("button",{style:f,"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"datalist":return p.jsx("datalist",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"form":return p.jsx("form",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"input":return p.jsx("input",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"label":return p.jsx("label",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"option":return p.jsx("option",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"select":return p.jsx("select",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"textarea":return p.jsx("textarea",{"data-shell-id":i,onClick:s,id:o,className:t,children:n});case"img":return p.jsx("img",{"data-shell-id":i,src:d,onClick:s,id:o,className:t});case"video":return p.jsx("video",{"data-shell-id":i,src:d,onClick:s,id:o,className:t});case"audio":return p.jsx("audio",{"data-shell-id":i,src:d,onClick:s,id:o,className:t});case"div":return p.jsx("div",{"data-shell-id":i,style:f,onClick:s,id:o,className:t,children:n});default:return p.jsx(T.Fragment,{children:n})}}const Ue=({shell:l,style:d,className:n,type:t="div"})=>{const[o,s]=T.useState(null);return T.useEffect(()=>{const i=Me(l);s(i),Ce(i)},[l]),p.jsx(T.Fragment,{children:p.jsx(ae,{type:t,style:d,className:n,children:o===null?null:o.map((i,f)=>p.jsx(ae,{type:i.node,className:i.class.join(" "),id:i.id===null?"":'id="'+i.id+'"',dsi:i.__DID},f))})})};function Ve(){run_data_shell_replacer()}run_data_shell_replacer(),O.DataShellEnv=Ue,O.useDataShell=Ve,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})}));
