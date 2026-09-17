(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Bm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pu={exports:{}},Ea={},mu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function sx(){if(ep)return pt;ep=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function _(M,O,B){this.props=M,this.context=O,this.refs=T,this.updater=B||E}_.prototype.isReactComponent={},_.prototype.setState=function(M,O){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,O,"setState")},_.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function v(){}v.prototype=_.prototype;function U(M,O,B){this.props=M,this.context=O,this.refs=T,this.updater=B||E}var C=U.prototype=new v;C.constructor=U,A(C,_.prototype),C.isPureReactComponent=!0;var L=Array.isArray,W=Object.prototype.hasOwnProperty,z={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function ue(M,O,B){var V,Q={},de=null,ae=null;if(O!=null)for(V in O.ref!==void 0&&(ae=O.ref),O.key!==void 0&&(de=""+O.key),O)W.call(O,V)&&!k.hasOwnProperty(V)&&(Q[V]=O[V]);var pe=arguments.length-2;if(pe===1)Q.children=B;else if(1<pe){for(var ve=Array(pe),be=0;be<pe;be++)ve[be]=arguments[be+2];Q.children=ve}if(M&&M.defaultProps)for(V in pe=M.defaultProps,pe)Q[V]===void 0&&(Q[V]=pe[V]);return{$$typeof:s,type:M,key:de,ref:ae,props:Q,_owner:z.current}}function R(M,O){return{$$typeof:s,type:M.type,key:O,ref:M.ref,props:M.props,_owner:M._owner}}function I(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function ce(M){var O={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(B){return O[B]})}var he=/\/+/g;function Me(M,O){return typeof M=="object"&&M!==null&&M.key!=null?ce(""+M.key):O.toString(36)}function X(M,O,B,V,Q){var de=typeof M;(de==="undefined"||de==="boolean")&&(M=null);var ae=!1;if(M===null)ae=!0;else switch(de){case"string":case"number":ae=!0;break;case"object":switch(M.$$typeof){case s:case e:ae=!0}}if(ae)return ae=M,Q=Q(ae),M=V===""?"."+Me(ae,0):V,L(Q)?(B="",M!=null&&(B=M.replace(he,"$&/")+"/"),X(Q,O,B,"",function(be){return be})):Q!=null&&(I(Q)&&(Q=R(Q,B+(!Q.key||ae&&ae.key===Q.key?"":(""+Q.key).replace(he,"$&/")+"/")+M)),O.push(Q)),1;if(ae=0,V=V===""?".":V+":",L(M))for(var pe=0;pe<M.length;pe++){de=M[pe];var ve=V+Me(de,pe);ae+=X(de,O,B,ve,Q)}else if(ve=S(M),typeof ve=="function")for(M=ve.call(M),pe=0;!(de=M.next()).done;)de=de.value,ve=V+Me(de,pe++),ae+=X(de,O,B,ve,Q);else if(de==="object")throw O=String(M),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ae}function te(M,O,B){if(M==null)return M;var V=[],Q=0;return X(M,V,"","",function(de){return O.call(B,de,Q++)}),V}function le(M){if(M._status===-1){var O=M._result;O=O(),O.then(function(B){(M._status===0||M._status===-1)&&(M._status=1,M._result=B)},function(B){(M._status===0||M._status===-1)&&(M._status=2,M._result=B)}),M._status===-1&&(M._status=0,M._result=O)}if(M._status===1)return M._result.default;throw M._result}var fe={current:null},q={transition:null},ee={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:q,ReactCurrentOwner:z};function P(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:te,forEach:function(M,O,B){te(M,function(){O.apply(this,arguments)},B)},count:function(M){var O=0;return te(M,function(){O++}),O},toArray:function(M){return te(M,function(O){return O})||[]},only:function(M){if(!I(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},pt.Component=_,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=U,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,pt.act=P,pt.cloneElement=function(M,O,B){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var V=A({},M.props),Q=M.key,de=M.ref,ae=M._owner;if(O!=null){if(O.ref!==void 0&&(de=O.ref,ae=z.current),O.key!==void 0&&(Q=""+O.key),M.type&&M.type.defaultProps)var pe=M.type.defaultProps;for(ve in O)W.call(O,ve)&&!k.hasOwnProperty(ve)&&(V[ve]=O[ve]===void 0&&pe!==void 0?pe[ve]:O[ve])}var ve=arguments.length-2;if(ve===1)V.children=B;else if(1<ve){pe=Array(ve);for(var be=0;be<ve;be++)pe[be]=arguments[be+2];V.children=pe}return{$$typeof:s,type:M.type,key:Q,ref:de,props:V,_owner:ae}},pt.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:c,_context:M},M.Consumer=M},pt.createElement=ue,pt.createFactory=function(M){var O=ue.bind(null,M);return O.type=M,O},pt.createRef=function(){return{current:null}},pt.forwardRef=function(M){return{$$typeof:u,render:M}},pt.isValidElement=I,pt.lazy=function(M){return{$$typeof:x,_payload:{_status:-1,_result:M},_init:le}},pt.memo=function(M,O){return{$$typeof:m,type:M,compare:O===void 0?null:O}},pt.startTransition=function(M){var O=q.transition;q.transition={};try{M()}finally{q.transition=O}},pt.unstable_act=P,pt.useCallback=function(M,O){return fe.current.useCallback(M,O)},pt.useContext=function(M){return fe.current.useContext(M)},pt.useDebugValue=function(){},pt.useDeferredValue=function(M){return fe.current.useDeferredValue(M)},pt.useEffect=function(M,O){return fe.current.useEffect(M,O)},pt.useId=function(){return fe.current.useId()},pt.useImperativeHandle=function(M,O,B){return fe.current.useImperativeHandle(M,O,B)},pt.useInsertionEffect=function(M,O){return fe.current.useInsertionEffect(M,O)},pt.useLayoutEffect=function(M,O){return fe.current.useLayoutEffect(M,O)},pt.useMemo=function(M,O){return fe.current.useMemo(M,O)},pt.useReducer=function(M,O,B){return fe.current.useReducer(M,O,B)},pt.useRef=function(M){return fe.current.useRef(M)},pt.useState=function(M){return fe.current.useState(M)},pt.useSyncExternalStore=function(M,O,B){return fe.current.useSyncExternalStore(M,O,B)},pt.useTransition=function(){return fe.current.useTransition()},pt.version="18.3.1",pt}var tp;function xd(){return tp||(tp=1,mu.exports=sx()),mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function ax(){if(np)return Ea;np=1;var s=xd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(u,h,m){var x,y={},S=null,E=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(E=h.ref);for(x in h)r.call(h,x)&&!c.hasOwnProperty(x)&&(y[x]=h[x]);if(u&&u.defaultProps)for(x in h=u.defaultProps,h)y[x]===void 0&&(y[x]=h[x]);return{$$typeof:e,type:u,key:S,ref:E,props:y,_owner:o.current}}return Ea.Fragment=n,Ea.jsx=f,Ea.jsxs=f,Ea}var ip;function ox(){return ip||(ip=1,pu.exports=ax()),pu.exports}var g=ox(),Ct=xd();const lx=Bm(Ct);var $o={},gu={exports:{}},Rn={},xu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function cx(){return rp||(rp=1,(function(s){function e(q,ee){var P=q.length;q.push(ee);e:for(;0<P;){var M=P-1>>>1,O=q[M];if(0<o(O,ee))q[M]=ee,q[P]=O,P=M;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],P=q.pop();if(P!==ee){q[0]=P;e:for(var M=0,O=q.length,B=O>>>1;M<B;){var V=2*(M+1)-1,Q=q[V],de=V+1,ae=q[de];if(0>o(Q,P))de<O&&0>o(ae,Q)?(q[M]=ae,q[de]=P,M=de):(q[M]=Q,q[V]=P,M=V);else if(de<O&&0>o(ae,P))q[M]=ae,q[de]=P,M=de;else break e}}return ee}function o(q,ee){var P=q.sortIndex-ee.sortIndex;return P!==0?P:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,u=f.now();s.unstable_now=function(){return f.now()-u}}var h=[],m=[],x=1,y=null,S=3,E=!1,A=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(q){for(var ee=n(m);ee!==null;){if(ee.callback===null)r(m);else if(ee.startTime<=q)r(m),ee.sortIndex=ee.expirationTime,e(h,ee);else break;ee=n(m)}}function L(q){if(T=!1,C(q),!A)if(n(h)!==null)A=!0,le(W);else{var ee=n(m);ee!==null&&fe(L,ee.startTime-q)}}function W(q,ee){A=!1,T&&(T=!1,v(ue),ue=-1),E=!0;var P=S;try{for(C(ee),y=n(h);y!==null&&(!(y.expirationTime>ee)||q&&!ce());){var M=y.callback;if(typeof M=="function"){y.callback=null,S=y.priorityLevel;var O=M(y.expirationTime<=ee);ee=s.unstable_now(),typeof O=="function"?y.callback=O:y===n(h)&&r(h),C(ee)}else r(h);y=n(h)}if(y!==null)var B=!0;else{var V=n(m);V!==null&&fe(L,V.startTime-ee),B=!1}return B}finally{y=null,S=P,E=!1}}var z=!1,k=null,ue=-1,R=5,I=-1;function ce(){return!(s.unstable_now()-I<R)}function he(){if(k!==null){var q=s.unstable_now();I=q;var ee=!0;try{ee=k(!0,q)}finally{ee?Me():(z=!1,k=null)}}else z=!1}var Me;if(typeof U=="function")Me=function(){U(he)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,te=X.port2;X.port1.onmessage=he,Me=function(){te.postMessage(null)}}else Me=function(){_(he,0)};function le(q){k=q,z||(z=!0,Me())}function fe(q,ee){ue=_(function(){q(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){A||E||(A=!0,le(W))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(q){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var P=S;S=ee;try{return q()}finally{S=P}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var P=S;S=q;try{return ee()}finally{S=P}},s.unstable_scheduleCallback=function(q,ee,P){var M=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=P+O,q={id:x++,callback:ee,priorityLevel:q,startTime:P,expirationTime:O,sortIndex:-1},P>M?(q.sortIndex=P,e(m,q),n(h)===null&&q===n(m)&&(T?(v(ue),ue=-1):T=!0,fe(L,P-M))):(q.sortIndex=O,e(h,q),A||E||(A=!0,le(W))),q},s.unstable_shouldYield=ce,s.unstable_wrapCallback=function(q){var ee=S;return function(){var P=S;S=ee;try{return q.apply(this,arguments)}finally{S=P}}}})(vu)),vu}var sp;function ux(){return sp||(sp=1,xu.exports=cx()),xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function dx(){if(ap)return Rn;ap=1;var s=xd(),e=ux();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function S(t){return h.call(y,t)?!0:h.call(x,t)?!1:m.test(t)?y[t]=!0:(x[t]=!0,!1)}function E(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,l){if(i===null||typeof i>"u"||E(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,d,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,U);_[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,U);_[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,U);_[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,i,a,l){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,l)&&(a=null),l||d===null?S(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),ce=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),q=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var P=Object.assign,M;function O(t){if(M===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||""}return`
`+M+t}var B=!1;function V(t,i){if(!t||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),p=l.stack.split(`
`),w=d.length-1,F=p.length-1;1<=w&&0<=F&&d[w]!==p[F];)F--;for(;1<=w&&0<=F;w--,F--)if(d[w]!==p[F]){if(w!==1||F!==1)do if(w--,F--,0>F||d[w]!==p[F]){var H=`
`+d[w].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=w&&0<=F);break}}}finally{B=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?O(t):""}function Q(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=V(t.type,!1),t;case 11:return t=V(t.type.render,!1),t;case 1:return t=V(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case z:return"Portal";case R:return"Profiler";case ue:return"StrictMode";case Me:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ce:return(t.displayName||"Context")+".Consumer";case I:return(t._context.displayName||"Context")+".Provider";case he:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(t){var i=ve(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ke(t){t._valueTracker||(t._valueTracker=be(t))}function Y(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ve(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Te(t,i){var a=i.checked;return P({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Ge(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Le(t,i){i=i.checked,i!=null&&C(t,"checked",i,!1)}function dt(t,i){Le(t,i);var a=pe(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?D(t,i.type,a):i.hasOwnProperty("defaultValue")&&D(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function D(t,i,a){(i!=="number"||ft(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var b=Array.isArray;function ne(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ye(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return P({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(b(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:pe(a)}}function Ee(t,i){var a=pe(i.value),l=pe(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xe,it=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Xe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];Object.keys(ht).forEach(function(t){ot.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ht[i]=ht[t]})});function et(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ht.hasOwnProperty(t)&&ht[t]?(""+i).trim():i+"px"}function qe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=et(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var Be=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function _t(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function at(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,G=null,Ce=null;function Ne(t){if(t=la(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=co(i),Ae(t.stateNode,t.type,i))}}function Je(t){G?Ce?Ce.push(t):Ce=[t]:G=t}function $e(){if(G){var t=G,i=Ce;if(Ce=G=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function wt(t,i){return t(i)}function Tt(){}var Bt=!1;function Jt(t,i,a){if(Bt)return t(i,a);Bt=!0;try{return wt(t,i,a)}finally{Bt=!1,(G!==null||Ce!==null)&&(Tt(),$e())}}function Mt(t,i){var a=t.stateNode;if(a===null)return null;var l=co(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Yt=!1;if(u)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){Yt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{Yt=!1}function Ga(t,i,a,l,d,p,w,F,H){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(xe){this.onError(xe)}}var vr=!1,_i=null,_r=!1,Bi=null,Va={onError:function(t){vr=!0,_i=t}};function ja(t,i,a,l,d,p,w,F,H){vr=!1,_i=null,Ga.apply(Va,arguments)}function Fl(t,i,a,l,d,p,w,F,H){if(ja.apply(this,arguments),vr){if(vr){var ie=_i;vr=!1,_i=null}else throw Error(n(198));_r||(_r=!0,Bi=ie)}}function yi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Wa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function N(t){if(yi(t)!==t)throw Error(n(188))}function Z(t){var i=t.alternate;if(!i){if(i=yi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return N(d),t;if(p===l)return N(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=p;else{for(var w=!1,F=d.child;F;){if(F===a){w=!0,a=d,l=p;break}if(F===l){w=!0,l=d,a=p;break}F=F.sibling}if(!w){for(F=p.child;F;){if(F===a){w=!0,a=p,l=d;break}if(F===l){w=!0,l=p,a=d;break}F=F.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function se(t){return t=Z(t),t!==null?oe(t):null}function oe(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=oe(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,De=e.unstable_cancelCallback,We=e.unstable_shouldYield,Qe=e.unstable_requestPaint,Fe=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,nt=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,mn=e.unstable_LowPriority,Vt=e.unstable_IdlePriority,Mn=null,xt=null;function ct(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Mn,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:Xa,It=Math.log,Si=Math.LN2;function Xa(t){return t>>>=0,t===0?32:31-(It(t)/Si|0)|0}var hi=64,Hi=4194304;function Ht(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,w=a&268435455;if(w!==0){var F=w&~d;F!==0?l=Ht(F):(p&=w,p!==0&&(l=Ht(p)))}else w=a&~d,w!==0?l=Ht(w):p!==0&&(l=Ht(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-gn(i),d=1<<a,l|=t[a],i&=~d;return l}function js(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-gn(p),F=1<<w,H=d[w];H===-1?((F&a)===0||(F&l)!==0)&&(d[w]=js(F,i)):H<=i&&(t.expiredLanes|=F),p&=~F}}function yr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qa(){var t=hi;return hi<<=1,(hi&4194240)===0&&(hi=64),t}function Xr(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Ws(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-gn(i),t[i]=a}function bg(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-gn(a),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~p}}function Ol(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-gn(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var bt=0;function Nd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ld,kl,Dd,Ud,Id,zl=!1,Ya=[],Gi=null,Vi=null,ji=null,Xs=new Map,qs=new Map,Wi=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Xs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function Ys(t,i,a,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=la(i),i!==null&&kl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Cg(t,i,a,l,d){switch(i){case"focusin":return Gi=Ys(Gi,t,i,a,l,d),!0;case"dragenter":return Vi=Ys(Vi,t,i,a,l,d),!0;case"mouseover":return ji=Ys(ji,t,i,a,l,d),!0;case"pointerover":var p=d.pointerId;return Xs.set(p,Ys(Xs.get(p)||null,t,i,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,qs.set(p,Ys(qs.get(p)||null,t,i,a,l,d)),!0}return!1}function Od(t){var i=Sr(t.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=Wa(a),i!==null){t.blockedOn=i,Id(t.priority,function(){Dd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Hl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Rt=l,a.target.dispatchEvent(l),Rt=null}else return i=la(a),i!==null&&kl(i),t.blockedOn=a,!1;i.shift()}return!0}function kd(t,i,a){$a(t)&&a.delete(i)}function Rg(){zl=!1,Gi!==null&&$a(Gi)&&(Gi=null),Vi!==null&&$a(Vi)&&(Vi=null),ji!==null&&$a(ji)&&(ji=null),Xs.forEach(kd),qs.forEach(kd)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,zl||(zl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rg)))}function Ks(t){function i(d){return $s(d,t)}if(0<Ya.length){$s(Ya[0],t);for(var a=1;a<Ya.length;a++){var l=Ya[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&$s(Gi,t),Vi!==null&&$s(Vi,t),ji!==null&&$s(ji,t),Xs.forEach(i),qs.forEach(i),a=0;a<Wi.length;a++)l=Wi[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wi.length&&(a=Wi[0],a.blockedOn===null);)Od(a),a.blockedOn===null&&Wi.shift()}var qr=L.ReactCurrentBatchConfig,Ka=!0;function Pg(t,i,a,l){var d=bt,p=qr.transition;qr.transition=null;try{bt=1,Bl(t,i,a,l)}finally{bt=d,qr.transition=p}}function Ng(t,i,a,l){var d=bt,p=qr.transition;qr.transition=null;try{bt=4,Bl(t,i,a,l)}finally{bt=d,qr.transition=p}}function Bl(t,i,a,l){if(Ka){var d=Hl(t,i,a,l);if(d===null)rc(t,i,l,Za,a),Fd(t,l);else if(Cg(d,t,i,a,l))l.stopPropagation();else if(Fd(t,l),i&4&&-1<Ag.indexOf(t)){for(;d!==null;){var p=la(d);if(p!==null&&Ld(p),p=Hl(t,i,a,l),p===null&&rc(t,i,l,Za,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else rc(t,i,l,null,a)}}var Za=null;function Hl(t,i,a,l){if(Za=null,t=at(l),t=Sr(t),t!==null)if(i=yi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Wa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Za=t,null}function zd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case nt:return 1;case st:return 4;case Pt:case mn:return 16;case Vt:return 536870912;default:return 16}default:return 16}}var Xi=null,Gl=null,Qa=null;function Bd(){if(Qa)return Qa;var t,i=Gl,a=i.length,l,d="value"in Xi?Xi.value:Xi.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===d[p-l];l++);return Qa=d.slice(t,1<l?1-l:void 0)}function Ja(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function Hd(){return!1}function Dn(t){function i(a,l,d,p,w){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?eo:Hd,this.isPropagationStopped=Hd,this}return P(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),i}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Dn(Yr),Zs=P({},Yr,{view:0,detail:0}),Lg=Dn(Zs),jl,Wl,Qs,to=P({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(jl=t.screenX-Qs.screenX,Wl=t.screenY-Qs.screenY):Wl=jl=0,Qs=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),Gd=Dn(to),Dg=P({},to,{dataTransfer:0}),Ug=Dn(Dg),Ig=P({},Zs,{relatedTarget:0}),Xl=Dn(Ig),Fg=P({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=Dn(Fg),kg=P({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=Dn(kg),Bg=P({},Yr,{data:0}),Vd=Dn(Bg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vg[t])?!!i[t]:!1}function ql(){return jg}var Wg=P({},Zs,{key:function(t){if(t.key){var i=Hg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xg=Dn(Wg),qg=P({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Dn(qg),Yg=P({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),$g=Dn(Yg),Kg=P({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=Dn(Kg),Qg=P({},to,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=Dn(Qg),e0=[9,13,27,32],Yl=u&&"CompositionEvent"in window,Js=null;u&&"documentMode"in document&&(Js=document.documentMode);var t0=u&&"TextEvent"in window&&!Js,Wd=u&&(!Yl||Js&&8<Js&&11>=Js),Xd=" ",qd=!1;function Yd(t,i){switch(t){case"keyup":return e0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function n0(t,i){switch(t){case"compositionend":return $d(i);case"keypress":return i.which!==32?null:(qd=!0,Xd);case"textInput":return t=i.data,t===Xd&&qd?null:t;default:return null}}function i0(t,i){if($r)return t==="compositionend"||!Yl&&Yd(t,i)?(t=Bd(),Qa=Gl=Xi=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wd&&i.locale!=="ko"?null:i.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!r0[t.type]:i==="textarea"}function Zd(t,i,a,l){Je(l),i=ao(i,"onChange"),0<i.length&&(a=new Vl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ea=null,ta=null;function s0(t){gf(t,0)}function no(t){var i=es(t);if(Y(i))return t}function a0(t,i){if(t==="change")return i}var Qd=!1;if(u){var $l;if(u){var Kl="oninput"in document;if(!Kl){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Kl=typeof Jd.oninput=="function"}$l=Kl}else $l=!1;Qd=$l&&(!document.documentMode||9<document.documentMode)}function ef(){ea&&(ea.detachEvent("onpropertychange",tf),ta=ea=null)}function tf(t){if(t.propertyName==="value"&&no(ta)){var i=[];Zd(i,ta,t,at(t)),Jt(s0,i)}}function o0(t,i,a){t==="focusin"?(ef(),ea=i,ta=a,ea.attachEvent("onpropertychange",tf)):t==="focusout"&&ef()}function l0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return no(ta)}function c0(t,i){if(t==="click")return no(i)}function u0(t,i){if(t==="input"||t==="change")return no(i)}function d0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:d0;function na(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(i,d)||!ei(t[d],i[d]))return!1}return!0}function nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rf(t,i){var a=nf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=nf(a)}}function sf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?sf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function af(){for(var t=window,i=ft();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ft(t.document)}return i}function Zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function f0(t){var i=af(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&sf(a.ownerDocument.documentElement,a)){if(l!==null&&Zl(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=rf(a,p);var w=rf(a,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var h0=u&&"documentMode"in document&&11>=document.documentMode,Kr=null,Ql=null,ia=null,Jl=!1;function of(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jl||Kr==null||Kr!==ft(l)||(l=Kr,"selectionStart"in l&&Zl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ia&&na(ia,l)||(ia=l,l=ao(Ql,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Kr)))}function io(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Zr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},ec={},lf={};u&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function ro(t){if(ec[t])return ec[t];if(!Zr[t])return t;var i=Zr[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in lf)return ec[t]=i[a];return t}var cf=ro("animationend"),uf=ro("animationiteration"),df=ro("animationstart"),ff=ro("transitionend"),hf=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){hf.set(t,i),c(i,[t])}for(var tc=0;tc<pf.length;tc++){var nc=pf[tc],p0=nc.toLowerCase(),m0=nc[0].toUpperCase()+nc.slice(1);qi(p0,"on"+m0)}qi(cf,"onAnimationEnd"),qi(uf,"onAnimationIteration"),qi(df,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(ff,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function mf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Fl(l,i,void 0,t),t.currentTarget=null}function gf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var F=l[w],H=F.instance,ie=F.currentTarget;if(F=F.listener,H!==p&&d.isPropagationStopped())break e;mf(d,F,ie),p=H}else for(w=0;w<l.length;w++){if(F=l[w],H=F.instance,ie=F.currentTarget,F=F.listener,H!==p&&d.isPropagationStopped())break e;mf(d,F,ie),p=H}}}if(_r)throw t=Bi,_r=!1,Bi=null,t}function Lt(t,i){var a=i[uc];a===void 0&&(a=i[uc]=new Set);var l=t+"__bubble";a.has(l)||(xf(i,t,2,!1),a.add(l))}function ic(t,i,a){var l=0;i&&(l|=4),xf(a,t,l,i)}var so="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[so]){t[so]=!0,r.forEach(function(a){a!=="selectionchange"&&(g0.has(a)||ic(a,!1,t),ic(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[so]||(i[so]=!0,ic("selectionchange",!1,i))}}function xf(t,i,a,l){switch(zd(i)){case 1:var d=Pg;break;case 4:d=Ng;break;default:d=Bl}a=d.bind(null,i,a,t),d=void 0,!Yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function rc(t,i,a,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var F=l.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;w=w.return}for(;F!==null;){if(w=Sr(F),w===null)return;if(H=w.tag,H===5||H===6){l=p=w;continue e}F=F.parentNode}}l=l.return}Jt(function(){var ie=p,xe=at(a),Se=[];e:{var ge=hf.get(t);if(ge!==void 0){var Ue=Vl,ze=t;switch(t){case"keypress":if(Ja(a)===0)break e;case"keydown":case"keyup":Ue=Xg;break;case"focusin":ze="focus",Ue=Xl;break;case"focusout":ze="blur",Ue=Xl;break;case"beforeblur":case"afterblur":Ue=Xl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=$g;break;case cf:case uf:case df:Ue=Og;break;case ff:Ue=Zg;break;case"scroll":Ue=Lg;break;case"wheel":Ue=Jg;break;case"copy":case"cut":case"paste":Ue=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=jd}var He=(i&4)!==0,jt=!He&&t==="scroll",K=He?ge!==null?ge+"Capture":null:ge;He=[];for(var j=ie,J;j!==null;){J=j;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,K!==null&&(we=Mt(j,K),we!=null&&He.push(aa(j,we,J)))),jt)break;j=j.return}0<He.length&&(ge=new Ue(ge,ze,null,a,xe),Se.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ge&&a!==Rt&&(ze=a.relatedTarget||a.fromElement)&&(Sr(ze)||ze[Mi]))break e;if((Ue||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(ze=a.relatedTarget||a.toElement,Ue=ie,ze=ze?Sr(ze):null,ze!==null&&(jt=yi(ze),ze!==jt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=ie),Ue!==ze)){if(He=Gd,we="onMouseLeave",K="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(He=jd,we="onPointerLeave",K="onPointerEnter",j="pointer"),jt=Ue==null?ge:es(Ue),J=ze==null?ge:es(ze),ge=new He(we,j+"leave",Ue,a,xe),ge.target=jt,ge.relatedTarget=J,we=null,Sr(xe)===ie&&(He=new He(K,j+"enter",ze,a,xe),He.target=J,He.relatedTarget=jt,we=He),jt=we,Ue&&ze)t:{for(He=Ue,K=ze,j=0,J=He;J;J=Qr(J))j++;for(J=0,we=K;we;we=Qr(we))J++;for(;0<j-J;)He=Qr(He),j--;for(;0<J-j;)K=Qr(K),J--;for(;j--;){if(He===K||K!==null&&He===K.alternate)break t;He=Qr(He),K=Qr(K)}He=null}else He=null;Ue!==null&&vf(Se,ge,Ue,He,!1),ze!==null&&jt!==null&&vf(Se,jt,ze,He,!0)}}e:{if(ge=ie?es(ie):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var je=a0;else if(Kd(ge))if(Qd)je=u0;else{je=l0;var Ke=o0}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=c0);if(je&&(je=je(t,ie))){Zd(Se,je,a,xe);break e}Ke&&Ke(t,ge,ie),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&D(ge,"number",ge.value)}switch(Ke=ie?es(ie):window,t){case"focusin":(Kd(Ke)||Ke.contentEditable==="true")&&(Kr=Ke,Ql=ie,ia=null);break;case"focusout":ia=Ql=Kr=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,of(Se,a,xe);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":of(Se,a,xe)}var Ze;if(Yl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else $r?Yd(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Wd&&a.locale!=="ko"&&($r||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&$r&&(Ze=Bd()):(Xi=xe,Gl="value"in Xi?Xi.value:Xi.textContent,$r=!0)),Ke=ao(ie,tt),0<Ke.length&&(tt=new Vd(tt,t,null,a,xe),Se.push({event:tt,listeners:Ke}),Ze?tt.data=Ze:(Ze=$d(a),Ze!==null&&(tt.data=Ze)))),(Ze=t0?n0(t,a):i0(t,a))&&(ie=ao(ie,"onBeforeInput"),0<ie.length&&(xe=new Vd("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:ie}),xe.data=Ze))}gf(Se,i)})}function aa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function ao(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Mt(t,a),p!=null&&l.unshift(aa(t,p,d)),p=Mt(t,i),p!=null&&l.push(aa(t,p,d))),t=t.return}return l}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vf(t,i,a,l,d){for(var p=i._reactName,w=[];a!==null&&a!==l;){var F=a,H=F.alternate,ie=F.stateNode;if(H!==null&&H===l)break;F.tag===5&&ie!==null&&(F=ie,d?(H=Mt(a,p),H!=null&&w.unshift(aa(a,H,F))):d||(H=Mt(a,p),H!=null&&w.push(aa(a,H,F)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var x0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(x0,`
`).replace(v0,"")}function oo(t,i,a){if(i=_f(i),_f(t)!==i&&a)throw Error(n(425))}function lo(){}var sc=null,ac=null;function oc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(t){return yf.resolve(null).then(t).catch(S0)}:lc;function S0(t){setTimeout(function(){throw t})}function cc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),Ks(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);Ks(i)}function Yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Sf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),pi="__reactFiber$"+Jr,oa="__reactProps$"+Jr,Mi="__reactContainer$"+Jr,uc="__reactEvents$"+Jr,M0="__reactListeners$"+Jr,E0="__reactHandles$"+Jr;function Sr(t){var i=t[pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Mi]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Sf(t);t!==null;){if(a=t[pi])return a;t=Sf(t)}return i}t=a,a=t.parentNode}return null}function la(t){return t=t[pi]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function co(t){return t[oa]||null}var dc=[],ts=-1;function $i(t){return{current:t}}function Dt(t){0>ts||(t.current=dc[ts],dc[ts]=null,ts--)}function Nt(t,i){ts++,dc[ts]=t.current,t.current=i}var Ki={},cn=$i(Ki),wn=$i(!1),Mr=Ki;function ns(t,i){var a=t.type.contextTypes;if(!a)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(t){return t=t.childContextTypes,t!=null}function uo(){Dt(wn),Dt(cn)}function Mf(t,i,a){if(cn.current!==Ki)throw Error(n(168));Nt(cn,i),Nt(wn,a)}function Ef(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ae(t)||"Unknown",d));return P({},a,l)}function fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Mr=cn.current,Nt(cn,t),Nt(wn,wn.current),!0}function wf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Ef(t,i,Mr),l.__reactInternalMemoizedMergedChildContext=t,Dt(wn),Dt(cn),Nt(cn,t)):Dt(wn),Nt(wn,a)}var Ei=null,ho=!1,fc=!1;function Tf(t){Ei===null?Ei=[t]:Ei.push(t)}function w0(t){ho=!0,Tf(t)}function Zi(){if(!fc&&Ei!==null){fc=!0;var t=0,i=bt;try{var a=Ei;for(bt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ei=null,ho=!1}catch(d){throw Ei!==null&&(Ei=Ei.slice(t+1)),re(nt,Zi),d}finally{bt=i,fc=!1}}return null}var is=[],rs=0,po=null,mo=0,jn=[],Wn=0,Er=null,wi=1,Ti="";function wr(t,i){is[rs++]=mo,is[rs++]=po,po=t,mo=i}function bf(t,i,a){jn[Wn++]=wi,jn[Wn++]=Ti,jn[Wn++]=Er,Er=t;var l=wi;t=Ti;var d=32-gn(l)-1;l&=~(1<<d),a+=1;var p=32-gn(i)+d;if(30<p){var w=d-d%5;p=(l&(1<<w)-1).toString(32),l>>=w,d-=w,wi=1<<32-gn(i)+d|a<<d|l,Ti=p+t}else wi=1<<p|a<<d|l,Ti=t}function hc(t){t.return!==null&&(wr(t,1),bf(t,1,0))}function pc(t){for(;t===po;)po=is[--rs],is[rs]=null,mo=is[--rs],is[rs]=null;for(;t===Er;)Er=jn[--Wn],jn[Wn]=null,Ti=jn[--Wn],jn[Wn]=null,wi=jn[--Wn],jn[Wn]=null}var Un=null,In=null,Ft=!1,ti=null;function Af(t,i){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Cf(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=Yi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Er!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Un=t,In=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(Ft){var i=In;if(i){var a=i;if(!Cf(t,i)){if(mc(t))throw Error(n(418));i=Yi(a.nextSibling);var l=Un;i&&Cf(t,i)?Af(l,a):(t.flags=t.flags&-4097|2,Ft=!1,Un=t)}}else{if(mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Un=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function go(t){if(t!==Un)return!1;if(!Ft)return Rf(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!oc(t.type,t.memoizedProps)),i&&(i=In)){if(mc(t))throw Pf(),Error(n(418));for(;i;)Af(t,i),i=Yi(i.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){In=Yi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?Yi(t.stateNode.nextSibling):null;return!0}function Pf(){for(var t=In;t;)t=Yi(t.nextSibling)}function ss(){In=Un=null,Ft=!1}function xc(t){ti===null?ti=[t]:ti.push(t)}var T0=L.ReactCurrentBatchConfig;function ca(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var F=d.refs;w===null?delete F[p]:F[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function xo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Nf(t){var i=t._init;return i(t._payload)}function Lf(t){function i(K,j){if(t){var J=K.deletions;J===null?(K.deletions=[j],K.flags|=16):J.push(j)}}function a(K,j){if(!t)return null;for(;j!==null;)i(K,j),j=j.sibling;return null}function l(K,j){for(K=new Map;j!==null;)j.key!==null?K.set(j.key,j):K.set(j.index,j),j=j.sibling;return K}function d(K,j){return K=sr(K,j),K.index=0,K.sibling=null,K}function p(K,j,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<j?(K.flags|=2,j):J):(K.flags|=2,j)):(K.flags|=1048576,j)}function w(K){return t&&K.alternate===null&&(K.flags|=2),K}function F(K,j,J,we){return j===null||j.tag!==6?(j=lu(J,K.mode,we),j.return=K,j):(j=d(j,J),j.return=K,j)}function H(K,j,J,we){var je=J.type;return je===k?xe(K,j,J.props.children,we,J.key):j!==null&&(j.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&Nf(je)===j.type)?(we=d(j,J.props),we.ref=ca(K,j,J),we.return=K,we):(we=Ho(J.type,J.key,J.props,null,K.mode,we),we.ref=ca(K,j,J),we.return=K,we)}function ie(K,j,J,we){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=cu(J,K.mode,we),j.return=K,j):(j=d(j,J.children||[]),j.return=K,j)}function xe(K,j,J,we,je){return j===null||j.tag!==7?(j=Lr(J,K.mode,we,je),j.return=K,j):(j=d(j,J),j.return=K,j)}function Se(K,j,J){if(typeof j=="string"&&j!==""||typeof j=="number")return j=lu(""+j,K.mode,J),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case W:return J=Ho(j.type,j.key,j.props,null,K.mode,J),J.ref=ca(K,null,j),J.return=K,J;case z:return j=cu(j,K.mode,J),j.return=K,j;case le:var we=j._init;return Se(K,we(j._payload),J)}if(b(j)||ee(j))return j=Lr(j,K.mode,J,null),j.return=K,j;xo(K,j)}return null}function ge(K,j,J,we){var je=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:F(K,j,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case W:return J.key===je?H(K,j,J,we):null;case z:return J.key===je?ie(K,j,J,we):null;case le:return je=J._init,ge(K,j,je(J._payload),we)}if(b(J)||ee(J))return je!==null?null:xe(K,j,J,we,null);xo(K,J)}return null}function Ue(K,j,J,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get(J)||null,F(j,K,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case W:return K=K.get(we.key===null?J:we.key)||null,H(j,K,we,je);case z:return K=K.get(we.key===null?J:we.key)||null,ie(j,K,we,je);case le:var Ke=we._init;return Ue(K,j,J,Ke(we._payload),je)}if(b(we)||ee(we))return K=K.get(J)||null,xe(j,K,we,je,null);xo(j,we)}return null}function ze(K,j,J,we){for(var je=null,Ke=null,Ze=j,tt=j=0,nn=null;Ze!==null&&tt<J.length;tt++){Ze.index>tt?(nn=Ze,Ze=null):nn=Ze.sibling;var Et=ge(K,Ze,J[tt],we);if(Et===null){Ze===null&&(Ze=nn);break}t&&Ze&&Et.alternate===null&&i(K,Ze),j=p(Et,j,tt),Ke===null?je=Et:Ke.sibling=Et,Ke=Et,Ze=nn}if(tt===J.length)return a(K,Ze),Ft&&wr(K,tt),je;if(Ze===null){for(;tt<J.length;tt++)Ze=Se(K,J[tt],we),Ze!==null&&(j=p(Ze,j,tt),Ke===null?je=Ze:Ke.sibling=Ze,Ke=Ze);return Ft&&wr(K,tt),je}for(Ze=l(K,Ze);tt<J.length;tt++)nn=Ue(Ze,K,tt,J[tt],we),nn!==null&&(t&&nn.alternate!==null&&Ze.delete(nn.key===null?tt:nn.key),j=p(nn,j,tt),Ke===null?je=nn:Ke.sibling=nn,Ke=nn);return t&&Ze.forEach(function(ar){return i(K,ar)}),Ft&&wr(K,tt),je}function He(K,j,J,we){var je=ee(J);if(typeof je!="function")throw Error(n(150));if(J=je.call(J),J==null)throw Error(n(151));for(var Ke=je=null,Ze=j,tt=j=0,nn=null,Et=J.next();Ze!==null&&!Et.done;tt++,Et=J.next()){Ze.index>tt?(nn=Ze,Ze=null):nn=Ze.sibling;var ar=ge(K,Ze,Et.value,we);if(ar===null){Ze===null&&(Ze=nn);break}t&&Ze&&ar.alternate===null&&i(K,Ze),j=p(ar,j,tt),Ke===null?je=ar:Ke.sibling=ar,Ke=ar,Ze=nn}if(Et.done)return a(K,Ze),Ft&&wr(K,tt),je;if(Ze===null){for(;!Et.done;tt++,Et=J.next())Et=Se(K,Et.value,we),Et!==null&&(j=p(Et,j,tt),Ke===null?je=Et:Ke.sibling=Et,Ke=Et);return Ft&&wr(K,tt),je}for(Ze=l(K,Ze);!Et.done;tt++,Et=J.next())Et=Ue(Ze,K,tt,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&Ze.delete(Et.key===null?tt:Et.key),j=p(Et,j,tt),Ke===null?je=Et:Ke.sibling=Et,Ke=Et);return t&&Ze.forEach(function(rx){return i(K,rx)}),Ft&&wr(K,tt),je}function jt(K,j,J,we){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case W:e:{for(var je=J.key,Ke=j;Ke!==null;){if(Ke.key===je){if(je=J.type,je===k){if(Ke.tag===7){a(K,Ke.sibling),j=d(Ke,J.props.children),j.return=K,K=j;break e}}else if(Ke.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&Nf(je)===Ke.type){a(K,Ke.sibling),j=d(Ke,J.props),j.ref=ca(K,Ke,J),j.return=K,K=j;break e}a(K,Ke);break}else i(K,Ke);Ke=Ke.sibling}J.type===k?(j=Lr(J.props.children,K.mode,we,J.key),j.return=K,K=j):(we=Ho(J.type,J.key,J.props,null,K.mode,we),we.ref=ca(K,j,J),we.return=K,K=we)}return w(K);case z:e:{for(Ke=J.key;j!==null;){if(j.key===Ke)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){a(K,j.sibling),j=d(j,J.children||[]),j.return=K,K=j;break e}else{a(K,j);break}else i(K,j);j=j.sibling}j=cu(J,K.mode,we),j.return=K,K=j}return w(K);case le:return Ke=J._init,jt(K,j,Ke(J._payload),we)}if(b(J))return ze(K,j,J,we);if(ee(J))return He(K,j,J,we);xo(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,j!==null&&j.tag===6?(a(K,j.sibling),j=d(j,J),j.return=K,K=j):(a(K,j),j=lu(J,K.mode,we),j.return=K,K=j),w(K)):a(K,j)}return jt}var as=Lf(!0),Df=Lf(!1),vo=$i(null),_o=null,os=null,vc=null;function _c(){vc=os=_o=null}function yc(t){var i=vo.current;Dt(vo),t._currentValue=i}function Sc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ls(t,i){_o=t,vc=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(vc!==t)if(t={context:t,memoizedValue:i,next:null},os===null){if(_o===null)throw Error(n(308));os=t,_o.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return i}var Tr=null;function Mc(t){Tr===null?Tr=[t]:Tr.push(t)}function Uf(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Mc(i)):(a.next=d.next,d.next=a),i.interleaved=a,bi(t,l)}function bi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,bi(t,a)}return d=l.interleaved,d===null?(i.next=i,Mc(l)):(i.next=d.next,d.next=i),l.interleaved=i,bi(t,a)}function yo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ol(t,a)}}function Ff(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function So(t,i,a,l){var d=t.updateQueue;Qi=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var H=F,ie=H.next;H.next=null,w===null?p=ie:w.next=ie,w=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==w&&(F===null?xe.firstBaseUpdate=ie:F.next=ie,xe.lastBaseUpdate=H))}if(p!==null){var Se=d.baseState;w=0,xe=ie=H=null,F=p;do{var ge=F.lane,Ue=F.eventTime;if((l&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var ze=t,He=F;switch(ge=i,Ue=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){Se=ze.call(Ue,Se,ge);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(Ue,Se,ge):ze,ge==null)break e;Se=P({},Se,ge);break e;case 2:Qi=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[F]:ge.push(F))}else Ue={eventTime:Ue,lane:ge,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(ie=xe=Ue,H=Se):xe=xe.next=Ue,w|=ge;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;ge=F,F=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(H=Se),d.baseState=H,d.firstBaseUpdate=ie,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Cr|=w,t.lanes=w,t.memoizedState=Se}}function Of(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var ua={},mi=$i(ua),da=$i(ua),fa=$i(ua);function br(t){if(t===ua)throw Error(n(174));return t}function wc(t,i){switch(Nt(fa,i),Nt(da,t),Nt(mi,ua),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ie(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ie(i,t)}Dt(mi),Nt(mi,i)}function cs(){Dt(mi),Dt(da),Dt(fa)}function kf(t){br(fa.current);var i=br(mi.current),a=Ie(i,t.type);i!==a&&(Nt(da,t),Nt(mi,a))}function Tc(t){da.current===t&&(Dt(mi),Dt(da))}var kt=$i(0);function Mo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Ac(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Eo=L.ReactCurrentDispatcher,Cc=L.ReactCurrentBatchConfig,Ar=0,zt=null,$t=null,en=null,wo=!1,ha=!1,pa=0,b0=0;function un(){throw Error(n(321))}function Rc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ei(t[a],i[a]))return!1;return!0}function Pc(t,i,a,l,d,p){if(Ar=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Eo.current=t===null||t.memoizedState===null?P0:N0,t=a(l,d),ha){p=0;do{if(ha=!1,pa=0,25<=p)throw Error(n(301));p+=1,en=$t=null,i.updateQueue=null,Eo.current=L0,t=a(l,d)}while(ha)}if(Eo.current=Ao,i=$t!==null&&$t.next!==null,Ar=0,en=$t=zt=null,wo=!1,i)throw Error(n(300));return t}function Nc(){var t=pa!==0;return pa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function qn(){if($t===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function ma(t,i){return typeof i=="function"?i(t):i}function Lc(t){var i=qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=$t,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var F=w=null,H=null,ie=p;do{var xe=ie.lane;if((Ar&xe)===xe)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var Se={lane:xe,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(F=H=Se,w=l):H=H.next=Se,zt.lanes|=xe,Cr|=xe}ie=ie.next}while(ie!==null&&ie!==p);H===null?w=l:H.next=F,ei(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=H,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do p=d.lane,zt.lanes|=p,Cr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Dc(t){var i=qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=t(p,w.action),w=w.next;while(w!==d);ei(p,i.memoizedState)||(bn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function zf(){}function Bf(t,i){var a=zt,l=qn(),d=i(),p=!ei(l.memoizedState,d);if(p&&(l.memoizedState=d,bn=!0),l=l.queue,Uc(Vf.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,ga(9,Gf.bind(null,a,l,d,i),void 0,null),tn===null)throw Error(n(349));(Ar&30)!==0||Hf(a,i,d)}return d}function Hf(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Gf(t,i,a,l){i.value=a,i.getSnapshot=l,jf(i)&&Wf(t)}function Vf(t,i,a){return a(function(){jf(i)&&Wf(t)})}function jf(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ei(t,a)}catch{return!0}}function Wf(t){var i=bi(t,1);i!==null&&si(i,t,1,-1)}function Xf(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},i.queue=t,t=t.dispatch=R0.bind(null,zt,t),[i.memoizedState,t]}function ga(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function qf(){return qn().memoizedState}function To(t,i,a,l){var d=gi();zt.flags|=t,d.memoizedState=ga(1|i,a,void 0,l===void 0?null:l)}function bo(t,i,a,l){var d=qn();l=l===void 0?null:l;var p=void 0;if($t!==null){var w=$t.memoizedState;if(p=w.destroy,l!==null&&Rc(l,w.deps)){d.memoizedState=ga(i,a,p,l);return}}zt.flags|=t,d.memoizedState=ga(1|i,a,p,l)}function Yf(t,i){return To(8390656,8,t,i)}function Uc(t,i){return bo(2048,8,t,i)}function $f(t,i){return bo(4,2,t,i)}function Kf(t,i){return bo(4,4,t,i)}function Zf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Qf(t,i,a){return a=a!=null?a.concat([t]):null,bo(4,4,Zf.bind(null,i,t),a)}function Ic(){}function Jf(t,i){var a=qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Rc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function eh(t,i){var a=qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Rc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function th(t,i,a){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=a):(ei(a,i)||(a=qa(),zt.lanes|=a,Cr|=a,t.baseState=!0),i)}function A0(t,i){var a=bt;bt=a!==0&&4>a?a:4,t(!0);var l=Cc.transition;Cc.transition={};try{t(!1),i()}finally{bt=a,Cc.transition=l}}function nh(){return qn().memoizedState}function C0(t,i,a){var l=ir(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},ih(t))rh(i,a);else if(a=Uf(t,i,a,l),a!==null){var d=vn();si(a,t,l,d),sh(a,i,l)}}function R0(t,i,a){var l=ir(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(ih(t))rh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,F=p(w,a);if(d.hasEagerState=!0,d.eagerState=F,ei(F,w)){var H=i.interleaved;H===null?(d.next=d,Mc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}a=Uf(t,i,d,l),a!==null&&(d=vn(),si(a,t,l,d),sh(a,i,l))}}function ih(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function rh(t,i){ha=wo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function sh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ol(t,a)}}var Ao={readContext:Xn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},P0={readContext:Xn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:Yf,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,To(4194308,4,Zf.bind(null,i,t),a)},useLayoutEffect:function(t,i){return To(4194308,4,t,i)},useInsertionEffect:function(t,i){return To(4,2,t,i)},useMemo:function(t,i){var a=gi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=gi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=C0.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:Xf,useDebugValue:Ic,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Xf(!1),i=t[0];return t=A0.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,d=gi();if(Ft){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),tn===null)throw Error(n(349));(Ar&30)!==0||Hf(l,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Yf(Vf.bind(null,l,p,t),[t]),l.flags|=2048,ga(9,Gf.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=gi(),i=tn.identifierPrefix;if(Ft){var a=Ti,l=wi;a=(l&~(1<<32-gn(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=pa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=b0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},N0={readContext:Xn,useCallback:Jf,useContext:Xn,useEffect:Uc,useImperativeHandle:Qf,useInsertionEffect:$f,useLayoutEffect:Kf,useMemo:eh,useReducer:Lc,useRef:qf,useState:function(){return Lc(ma)},useDebugValue:Ic,useDeferredValue:function(t){var i=qn();return th(i,$t.memoizedState,t)},useTransition:function(){var t=Lc(ma)[0],i=qn().memoizedState;return[t,i]},useMutableSource:zf,useSyncExternalStore:Bf,useId:nh,unstable_isNewReconciler:!1},L0={readContext:Xn,useCallback:Jf,useContext:Xn,useEffect:Uc,useImperativeHandle:Qf,useInsertionEffect:$f,useLayoutEffect:Kf,useMemo:eh,useReducer:Dc,useRef:qf,useState:function(){return Dc(ma)},useDebugValue:Ic,useDeferredValue:function(t){var i=qn();return $t===null?i.memoizedState=t:th(i,$t.memoizedState,t)},useTransition:function(){var t=Dc(ma)[0],i=qn().memoizedState;return[t,i]},useMutableSource:zf,useSyncExternalStore:Bf,useId:nh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=P({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Fc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:P({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Co={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),d=ir(t),p=Ai(l,d);p.payload=i,a!=null&&(p.callback=a),i=Ji(t,p,d),i!==null&&(si(i,t,d,l),yo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),d=ir(t),p=Ai(l,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Ji(t,p,d),i!==null&&(si(i,t,d,l),yo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=ir(t),d=Ai(a,l);d.tag=2,i!=null&&(d.callback=i),i=Ji(t,d,l),i!==null&&(si(i,t,l,a),yo(i,t,l))}};function ah(t,i,a,l,d,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!na(a,l)||!na(d,p):!0}function oh(t,i,a){var l=!1,d=Ki,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(d=Tn(i)?Mr:cn.current,l=i.contextTypes,p=(l=l!=null)?ns(t,d):Ki),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Co,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function lh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Co.enqueueReplaceState(i,i.state,null)}function Oc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Ec(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Xn(p):(p=Tn(i)?Mr:cn.current,d.context=ns(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Fc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Co.enqueueReplaceState(d,d.state,null),So(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function us(t,i){try{var a="",l=i;do a+=Q(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function kc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function zc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function ch(t,i,a){a=Ai(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Io||(Io=!0,eu=l),zc(t,i)},a}function uh(t,i,a){a=Ai(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){zc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){zc(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function dh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new D0;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=q0.bind(null,t,i,a),i.then(t,t))}function fh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function hh(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ai(-1,1),i.tag=2,Ji(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var U0=L.ReactCurrentOwner,bn=!1;function xn(t,i,a,l){i.child=t===null?Df(i,null,a,l):as(i,t.child,a,l)}function ph(t,i,a,l,d){a=a.render;var p=i.ref;return ls(i,d),l=Pc(t,i,a,l,p,d),a=Nc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(Ft&&a&&hc(i),i.flags|=1,xn(t,i,l,d),i.child)}function mh(t,i,a,l,d){if(t===null){var p=a.type;return typeof p=="function"&&!ou(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,gh(t,i,p,l,d)):(t=Ho(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:na,a(w,l)&&t.ref===i.ref)return Ci(t,i,d)}return i.flags|=1,t=sr(p,l),t.ref=i.ref,t.return=i,i.child=t}function gh(t,i,a,l,d){if(t!==null){var p=t.memoizedProps;if(na(p,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,Ci(t,i,d)}return Bc(t,i,a,l,d)}function xh(t,i,a){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(fs,Fn),Fn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(fs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Nt(fs,Fn),Fn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Nt(fs,Fn),Fn|=l;return xn(t,i,d,a),i.child}function vh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Bc(t,i,a,l,d){var p=Tn(a)?Mr:cn.current;return p=ns(i,p),ls(i,d),a=Pc(t,i,a,l,p,d),l=Nc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(Ft&&l&&hc(i),i.flags|=1,xn(t,i,a,d),i.child)}function _h(t,i,a,l,d){if(Tn(a)){var p=!0;fo(i)}else p=!1;if(ls(i,d),i.stateNode===null)Po(t,i),oh(i,a,l),Oc(i,a,l,d),l=!0;else if(t===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var H=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Xn(ie):(ie=Tn(a)?Mr:cn.current,ie=ns(i,ie));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==l||H!==ie)&&lh(i,w,l,ie),Qi=!1;var ge=i.memoizedState;w.state=ge,So(i,l,w,d),H=i.memoizedState,F!==l||ge!==H||wn.current||Qi?(typeof xe=="function"&&(Fc(i,a,xe,l),H=i.memoizedState),(F=Qi||ah(i,a,F,l,ge,H,ie))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),w.props=l,w.state=H,w.context=ie,l=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,If(t,i),F=i.memoizedProps,ie=i.type===i.elementType?F:ni(i.type,F),w.props=ie,Se=i.pendingProps,ge=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Xn(H):(H=Tn(a)?Mr:cn.current,H=ns(i,H));var Ue=a.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Se||ge!==H)&&lh(i,w,l,H),Qi=!1,ge=i.memoizedState,w.state=ge,So(i,l,w,d);var ze=i.memoizedState;F!==Se||ge!==ze||wn.current||Qi?(typeof Ue=="function"&&(Fc(i,a,Ue,l),ze=i.memoizedState),(ie=Qi||ah(i,a,ie,l,ge,ze,H)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,ze,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,ze,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),w.props=l,w.state=ze,w.context=H,l=ie):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Hc(t,i,a,l,p,d)}function Hc(t,i,a,l,d,p){vh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return d&&wf(i,a,!1),Ci(t,i,p);l=i.stateNode,U0.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=as(i,t.child,null,p),i.child=as(i,null,F,p)):xn(t,i,F,p),i.memoizedState=l.state,d&&wf(i,a,!0),i.child}function yh(t){var i=t.stateNode;i.pendingContext?Mf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Mf(t,i.context,!1),wc(t,i.containerInfo)}function Sh(t,i,a,l,d){return ss(),xc(d),i.flags|=256,xn(t,i,a,l),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mh(t,i,a){var l=i.pendingProps,d=kt.current,p=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=t!==null&&t.memoizedState===null?!1:(d&2)!==0),F?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(kt,d&1),t===null)return gc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=Go(w,l,0,null),t=Lr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Vc(a),i.memoizedState=Gc,t):jc(i,w));if(d=t.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return I0(t,i,w,l,F,d,a);if(p){p=l.fallback,w=i.mode,d=t.child,F=d.sibling;var H={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=sr(d,H),l.subtreeFlags=d.subtreeFlags&14680064),F!==null?p=sr(F,p):(p=Lr(p,w,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?Vc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~a,i.memoizedState=Gc,l}return p=t.child,t=p.sibling,l=sr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function jc(t,i){return i=Go({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ro(t,i,a,l){return l!==null&&xc(l),as(i,t.child,null,a),t=jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function I0(t,i,a,l,d,p,w){if(a)return i.flags&256?(i.flags&=-257,l=kc(Error(n(422))),Ro(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Go({mode:"visible",children:l.children},d,0,null),p=Lr(p,d,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&as(i,t.child,null,w),i.child.memoizedState=Vc(w),i.memoizedState=Gc,p);if((i.mode&1)===0)return Ro(t,i,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var F=l.dgst;return l=F,p=Error(n(419)),l=kc(p,l,void 0),Ro(t,i,w,l)}if(F=(w&t.childLanes)!==0,bn||F){if(l=tn,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,bi(t,d),si(l,t,d,-1))}return au(),l=kc(Error(n(421))),Ro(t,i,w,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Y0.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,In=Yi(d.nextSibling),Un=i,Ft=!0,ti=null,t!==null&&(jn[Wn++]=wi,jn[Wn++]=Ti,jn[Wn++]=Er,wi=t.id,Ti=t.overflow,Er=i),i=jc(i,l.children),i.flags|=4096,i)}function Eh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sc(t.return,i,a)}function Wc(t,i,a,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function wh(t,i,a){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(xn(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eh(t,a,i);else if(t.tag===19)Eh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Mo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Wc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Mo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Wc(i,!0,a,null,p);break;case"together":Wc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Po(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function F0(t,i,a){switch(i.tag){case 3:yh(i),ss();break;case 5:kf(i);break;case 1:Tn(i.type)&&fo(i);break;case 4:wc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Nt(vo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mh(t,i,a):(Nt(kt,kt.current&1),t=Ci(t,i,a),t!==null?t.sibling:null);Nt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return wh(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,xh(t,i,a)}return Ci(t,i,a)}var Th,Xc,bh,Ah;Th=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xc=function(){},bh=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,br(mi.current);var p=null;switch(a){case"input":d=Te(t,d),l=Te(t,l),p=[];break;case"select":d=P({},d,{value:void 0}),l=P({},l,{value:void 0}),p=[];break;case"textarea":d=ye(t,d),l=ye(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=lo)}rt(a,l);var w;a=null;for(ie in d)if(!l.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var F=d[ie];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in l){var H=l[ie];if(F=d!=null?d[ie]:void 0,l.hasOwnProperty(ie)&&H!==F&&(H!=null||F!=null))if(ie==="style")if(F){for(w in F)!F.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&F[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(p||(p=[]),p.push(ie,a)),a=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(p=p||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&Lt("scroll",t),p||F===H||(p=[])):(p=p||[]).push(ie,H))}a&&(p=p||[]).push("style",a);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},Ah=function(t,i,a,l){a!==l&&(i.flags|=4)};function xa(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function O0(t,i,a){var l=i.pendingProps;switch(pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Tn(i.type)&&uo(),dn(i),null;case 3:return l=i.stateNode,cs(),Dt(wn),Dt(cn),Ac(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(go(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(iu(ti),ti=null))),Xc(t,i),dn(i),null;case 5:Tc(i);var d=br(fa.current);if(a=i.type,t!==null&&i.stateNode!=null)bh(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=br(mi.current),go(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[pi]=i,l[oa]=p,t=(i.mode&1)!==0,a){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(d=0;d<ra.length;d++)Lt(ra[d],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":Ge(l,p),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Lt("invalid",l);break;case"textarea":_e(l,p),Lt("invalid",l)}rt(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var F=p[w];w==="children"?typeof F=="string"?l.textContent!==F&&(p.suppressHydrationWarning!==!0&&oo(l.textContent,F,t),d=["children",F]):typeof F=="number"&&l.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&oo(l.textContent,F,t),d=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Lt("scroll",l)}switch(a){case"input":ke(l),Ye(l,p,!0);break;case"textarea":ke(l),Ve(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=lo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[pi]=i,t[oa]=l,Th(t,i,!1,!1),i.stateNode=t;e:{switch(w=_t(a,l),a){case"dialog":Lt("cancel",t),Lt("close",t),d=l;break;case"iframe":case"object":case"embed":Lt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ra.length;d++)Lt(ra[d],t);d=l;break;case"source":Lt("error",t),d=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),d=l;break;case"details":Lt("toggle",t),d=l;break;case"input":Ge(t,l),d=Te(t,l),Lt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=P({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":_e(t,l),d=ye(t,l),Lt("invalid",t);break;default:d=l}rt(a,d),F=d;for(p in F)if(F.hasOwnProperty(p)){var H=F[p];p==="style"?qe(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&it(t,H)):p==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&me(t,H):typeof H=="number"&&me(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Lt("scroll",t):H!=null&&C(t,p,H,w))}switch(a){case"input":ke(t),Ye(t,l,!1);break;case"textarea":ke(t),Ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?ne(t,!!l.multiple,p,!1):l.defaultValue!=null&&ne(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=lo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Ah(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=br(fa.current),br(mi.current),go(i)){if(l=i.stateNode,a=i.memoizedProps,l[pi]=i,(p=l.nodeValue!==a)&&(t=Un,t!==null))switch(t.tag){case 3:oo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return dn(i),null;case 13:if(Dt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Pf(),ss(),i.flags|=98560,p=!1;else if(p=go(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else ti!==null&&(iu(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Kt===0&&(Kt=3):au())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return cs(),Xc(t,i),t===null&&sa(i.stateNode.containerInfo),dn(i),null;case 10:return yc(i.type._context),dn(i),null;case 17:return Tn(i.type)&&uo(),dn(i),null;case 19:if(Dt(kt),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)xa(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Mo(t),w!==null){for(i.flags|=128,xa(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Nt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Fe()>hs&&(i.flags|=128,l=!0,xa(p,!1),i.lanes=4194304)}else{if(!l)if(t=Mo(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),xa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ft)return dn(i),null}else 2*Fe()-p.renderingStartTime>hs&&a!==1073741824&&(i.flags|=128,l=!0,xa(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Fe(),i.sibling=null,a=kt.current,Nt(kt,l?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return su(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function k0(t,i){switch(pc(i),i.tag){case 1:return Tn(i.type)&&uo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return cs(),Dt(wn),Dt(cn),Ac(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tc(i),null;case 13:if(Dt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(kt),null;case 4:return cs(),null;case 10:return yc(i.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var No=!1,fn=!1,z0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ds(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Gt(t,i,l)}else a.current=null}function qc(t,i,a){try{a()}catch(l){Gt(t,i,l)}}var Ch=!1;function B0(t,i){if(sc=Ka,t=af(),Zl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,F=-1,H=-1,ie=0,xe=0,Se=t,ge=null;t:for(;;){for(var Ue;Se!==a||d!==0&&Se.nodeType!==3||(F=w+d),Se!==p||l!==0&&Se.nodeType!==3||(H=w+l),Se.nodeType===3&&(w+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ge=Se,Se=Ue;for(;;){if(Se===t)break t;if(ge===a&&++ie===d&&(F=w),ge===p&&++xe===l&&(H=w),(Ue=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ue}a=F===-1||H===-1?null:{start:F,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ac={focusedElem:t,selectionRange:a},Ka=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,jt=ze.memoizedState,K=i.stateNode,j=K.getSnapshotBeforeUpdate(i.elementType===i.type?He:ni(i.type,He),jt);K.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Gt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ze=Ch,Ch=!1,ze}function va(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&qc(i,a,p)}d=d.next}while(d!==l)}}function Lo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Yc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Rh(t){var i=t.alternate;i!==null&&(t.alternate=null,Rh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[oa],delete i[uc],delete i[M0],delete i[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ph(t){return t.tag===5||t.tag===3||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ph(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $c(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=lo));else if(l!==4&&(t=t.child,t!==null))for($c(t,i,a),t=t.sibling;t!==null;)$c(t,i,a),t=t.sibling}function Kc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Kc(t,i,a),t=t.sibling;t!==null;)Kc(t,i,a),t=t.sibling}var sn=null,ii=!1;function er(t,i,a){for(a=a.child;a!==null;)Lh(t,i,a),a=a.sibling}function Lh(t,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Mn,a)}catch{}switch(a.tag){case 5:fn||ds(a,i);case 6:var l=sn,d=ii;sn=null,er(t,i,a),sn=l,ii=d,sn!==null&&(ii?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ii?(t=sn,a=a.stateNode,t.nodeType===8?cc(t.parentNode,a):t.nodeType===1&&cc(t,a),Ks(t)):cc(sn,a.stateNode));break;case 4:l=sn,d=ii,sn=a.stateNode.containerInfo,ii=!0,er(t,i,a),sn=l,ii=d;break;case 0:case 11:case 14:case 15:if(!fn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&qc(a,i,w),d=d.next}while(d!==l)}er(t,i,a);break;case 1:if(!fn&&(ds(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(F){Gt(a,i,F)}er(t,i,a);break;case 21:er(t,i,a);break;case 22:a.mode&1?(fn=(l=fn)||a.memoizedState!==null,er(t,i,a),fn=l):er(t,i,a);break;default:er(t,i,a)}}function Dh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new z0),i.forEach(function(l){var d=$0.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ri(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=t,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:sn=F.stateNode,ii=!1;break e;case 3:sn=F.stateNode.containerInfo,ii=!0;break e;case 4:sn=F.stateNode.containerInfo,ii=!0;break e}F=F.return}if(sn===null)throw Error(n(160));Lh(p,w,d),sn=null,ii=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ie){Gt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Uh(i,t),i=i.sibling}function Uh(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),xi(t),l&4){try{va(3,t,t.return),Lo(3,t)}catch(He){Gt(t,t.return,He)}try{va(5,t,t.return)}catch(He){Gt(t,t.return,He)}}break;case 1:ri(i,t),xi(t),l&512&&a!==null&&ds(a,a.return);break;case 5:if(ri(i,t),xi(t),l&512&&a!==null&&ds(a,a.return),t.flags&32){var d=t.stateNode;try{me(d,"")}catch(He){Gt(t,t.return,He)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,w=a!==null?a.memoizedProps:p,F=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&Le(d,p),_t(F,w);var ie=_t(F,p);for(w=0;w<H.length;w+=2){var xe=H[w],Se=H[w+1];xe==="style"?qe(d,Se):xe==="dangerouslySetInnerHTML"?it(d,Se):xe==="children"?me(d,Se):C(d,xe,Se,ie)}switch(F){case"input":dt(d,p);break;case"textarea":Ee(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?ne(d,!!p.multiple,Ue,!1):ge!==!!p.multiple&&(p.defaultValue!=null?ne(d,!!p.multiple,p.defaultValue,!0):ne(d,!!p.multiple,p.multiple?[]:"",!1))}d[oa]=p}catch(He){Gt(t,t.return,He)}}break;case 6:if(ri(i,t),xi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(He){Gt(t,t.return,He)}}break;case 3:if(ri(i,t),xi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ks(i.containerInfo)}catch(He){Gt(t,t.return,He)}break;case 4:ri(i,t),xi(t);break;case 13:ri(i,t),xi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Jc=Fe())),l&4&&Dh(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(fn=(ie=fn)||xe,ri(i,t),fn=ie):ri(i,t),xi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!xe&&(t.mode&1)!==0)for(Oe=t,xe=t.child;xe!==null;){for(Se=Oe=xe;Oe!==null;){switch(ge=Oe,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:va(4,ge,ge.return);break;case 1:ds(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Gt(l,a,He)}}break;case 5:ds(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Oh(Se);continue}}Ue!==null?(Ue.return=ge,Oe=Ue):Oh(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ie?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=Se.stateNode,H=Se.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=et("display",w))}catch(He){Gt(t,t.return,He)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(He){Gt(t,t.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ri(i,t),xi(t),l&4&&Dh(t);break;case 21:break;default:ri(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Ph(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(me(d,""),l.flags&=-33);var p=Nh(t);Kc(t,p,d);break;case 3:case 4:var w=l.stateNode.containerInfo,F=Nh(t);$c(t,F,w);break;default:throw Error(n(161))}}catch(H){Gt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function H0(t,i,a){Oe=t,Ih(t)}function Ih(t,i,a){for(var l=(t.mode&1)!==0;Oe!==null;){var d=Oe,p=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||No;if(!w){var F=d.alternate,H=F!==null&&F.memoizedState!==null||fn;F=No;var ie=fn;if(No=w,(fn=H)&&!ie)for(Oe=d;Oe!==null;)w=Oe,H=w.child,w.tag===22&&w.memoizedState!==null?kh(d):H!==null?(H.return=w,Oe=H):kh(d);for(;p!==null;)Oe=p,Ih(p),p=p.sibling;Oe=d,No=F,fn=ie}Fh(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Oe=p):Fh(t)}}function Fh(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Lo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Of(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Of(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var xe=ie.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&Ks(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Yc(i)}catch(ge){Gt(i,i.return,ge)}}if(i===t){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Oh(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function kh(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Lo(4,i)}catch(H){Gt(i,a,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(H){Gt(i,d,H)}}var p=i.return;try{Yc(i)}catch(H){Gt(i,p,H)}break;case 5:var w=i.return;try{Yc(i)}catch(H){Gt(i,w,H)}}}catch(H){Gt(i,i.return,H)}if(i===t){Oe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Oe=F;break}Oe=i.return}}var G0=Math.ceil,Do=L.ReactCurrentDispatcher,Zc=L.ReactCurrentOwner,Yn=L.ReactCurrentBatchConfig,yt=0,tn=null,Xt=null,an=0,Fn=0,fs=$i(0),Kt=0,_a=null,Cr=0,Uo=0,Qc=0,ya=null,An=null,Jc=0,hs=1/0,Ri=null,Io=!1,eu=null,tr=null,Fo=!1,nr=null,Oo=0,Sa=0,tu=null,ko=-1,zo=0;function vn(){return(yt&6)!==0?Fe():ko!==-1?ko:ko=Fe()}function ir(t){return(t.mode&1)===0?1:(yt&2)!==0&&an!==0?an&-an:T0.transition!==null?(zo===0&&(zo=qa()),zo):(t=bt,t!==0||(t=window.event,t=t===void 0?16:zd(t.type)),t)}function si(t,i,a,l){if(50<Sa)throw Sa=0,tu=null,Error(n(185));Ws(t,a,l),((yt&2)===0||t!==tn)&&(t===tn&&((yt&2)===0&&(Uo|=a),Kt===4&&rr(t,an)),Cn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(hs=Fe()+500,ho&&Zi()))}function Cn(t,i){var a=t.callbackNode;En(t,i);var l=Vn(t,t===tn?an:0);if(l===0)a!==null&&De(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&De(a),i===1)t.tag===0?w0(Bh.bind(null,t)):Tf(Bh.bind(null,t)),y0(function(){(yt&6)===0&&Zi()}),a=null;else{switch(Nd(l)){case 1:a=nt;break;case 4:a=st;break;case 16:a=Pt;break;case 536870912:a=Vt;break;default:a=Pt}a=Yh(a,zh.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function zh(t,i){if(ko=-1,zo=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ps()&&t.callbackNode!==a)return null;var l=Vn(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Bo(t,l);else{i=l;var d=yt;yt|=2;var p=Gh();(tn!==t||an!==i)&&(Ri=null,hs=Fe()+500,Pr(t,i));do try{W0();break}catch(F){Hh(t,F)}while(!0);_c(),Do.current=p,yt=d,Xt!==null?i=0:(tn=null,an=0,i=Kt)}if(i!==0){if(i===2&&(d=yr(t),d!==0&&(l=d,i=nu(t,d))),i===1)throw a=_a,Pr(t,0),rr(t,l),Cn(t,Fe()),a;if(i===6)rr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!V0(d)&&(i=Bo(t,l),i===2&&(p=yr(t),p!==0&&(l=p,i=nu(t,p))),i===1))throw a=_a,Pr(t,0),rr(t,l),Cn(t,Fe()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,An,Ri);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=Jc+500-Fe(),10<i)){if(Vn(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=lc(Nr.bind(null,t,An,Ri),i);break}Nr(t,An,Ri);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var w=31-gn(l);p=1<<w,w=i[w],w>d&&(d=w),l&=~p}if(l=d,l=Fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*G0(l/1960))-l,10<l){t.timeoutHandle=lc(Nr.bind(null,t,An,Ri),l);break}Nr(t,An,Ri);break;case 5:Nr(t,An,Ri);break;default:throw Error(n(329))}}}return Cn(t,Fe()),t.callbackNode===a?zh.bind(null,t):null}function nu(t,i){var a=ya;return t.current.memoizedState.isDehydrated&&(Pr(t,i).flags|=256),t=Bo(t,i),t!==2&&(i=An,An=a,i!==null&&iu(i)),t}function iu(t){An===null?An=t:An.push.apply(An,t)}function V0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!ei(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~Qc,i&=~Uo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-gn(i),l=1<<a;t[a]=-1,i&=~l}}function Bh(t){if((yt&6)!==0)throw Error(n(327));ps();var i=Vn(t,0);if((i&1)===0)return Cn(t,Fe()),null;var a=Bo(t,i);if(t.tag!==0&&a===2){var l=yr(t);l!==0&&(i=l,a=nu(t,l))}if(a===1)throw a=_a,Pr(t,0),rr(t,i),Cn(t,Fe()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,An,Ri),Cn(t,Fe()),null}function ru(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(hs=Fe()+500,ho&&Zi())}}function Rr(t){nr!==null&&nr.tag===0&&(yt&6)===0&&ps();var i=yt;yt|=1;var a=Yn.transition,l=bt;try{if(Yn.transition=null,bt=1,t)return t()}finally{bt=l,Yn.transition=a,yt=i,(yt&6)===0&&Zi()}}function su(){Fn=fs.current,Dt(fs)}function Pr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,_0(a)),Xt!==null)for(a=Xt.return;a!==null;){var l=a;switch(pc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&uo();break;case 3:cs(),Dt(wn),Dt(cn),Ac();break;case 5:Tc(l);break;case 4:cs();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:yc(l.type._context);break;case 22:case 23:su()}a=a.return}if(tn=t,Xt=t=sr(t.current,null),an=Fn=i,Kt=0,_a=null,Qc=Uo=Cr=0,An=ya=null,Tr!==null){for(i=0;i<Tr.length;i++)if(a=Tr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,l.next=w}a.pending=l}Tr=null}return t}function Hh(t,i){do{var a=Xt;try{if(_c(),Eo.current=Ao,wo){for(var l=zt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}wo=!1}if(Ar=0,en=$t=zt=null,ha=!1,pa=0,Zc.current=null,a===null||a.return===null){Kt=1,_a=i,Xt=null;break}e:{var p=t,w=a.return,F=a,H=i;if(i=an,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,xe=F,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=fh(w);if(Ue!==null){Ue.flags&=-257,hh(Ue,w,F,p,i),Ue.mode&1&&dh(p,ie,i),i=Ue,H=ie;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(H),i.updateQueue=He}else ze.add(H);break e}else{if((i&1)===0){dh(p,ie,i),au();break e}H=Error(n(426))}}else if(Ft&&F.mode&1){var jt=fh(w);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),hh(jt,w,F,p,i),xc(us(H,F));break e}}p=H=us(H,F),Kt!==4&&(Kt=2),ya===null?ya=[p]:ya.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=ch(p,H,i);Ff(p,K);break e;case 1:F=H;var j=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(tr===null||!tr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=uh(p,F,i);Ff(p,we);break e}}p=p.return}while(p!==null)}jh(a)}catch(je){i=je,Xt===a&&a!==null&&(Xt=a=a.return);continue}break}while(!0)}function Gh(){var t=Do.current;return Do.current=Ao,t===null?Ao:t}function au(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),tn===null||(Cr&268435455)===0&&(Uo&268435455)===0||rr(tn,an)}function Bo(t,i){var a=yt;yt|=2;var l=Gh();(tn!==t||an!==i)&&(Ri=null,Pr(t,i));do try{j0();break}catch(d){Hh(t,d)}while(!0);if(_c(),yt=a,Do.current=l,Xt!==null)throw Error(n(261));return tn=null,an=0,Kt}function j0(){for(;Xt!==null;)Vh(Xt)}function W0(){for(;Xt!==null&&!We();)Vh(Xt)}function Vh(t){var i=qh(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?jh(t):Xt=i,Zc.current=null}function jh(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=O0(a,i,Fn),a!==null){Xt=a;return}}else{if(a=k0(a,i),a!==null){a.flags&=32767,Xt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Nr(t,i,a){var l=bt,d=Yn.transition;try{Yn.transition=null,bt=1,X0(t,i,a,l)}finally{Yn.transition=d,bt=l}return null}function X0(t,i,a,l){do ps();while(nr!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(bg(t,p),t===tn&&(Xt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fo||(Fo=!0,Yh(Pt,function(){return ps(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var w=bt;bt=1;var F=yt;yt|=4,Zc.current=null,B0(t,a),Uh(a,t),f0(ac),Ka=!!sc,ac=sc=null,t.current=a,H0(a),Qe(),yt=F,bt=w,Yn.transition=p}else t.current=a;if(Fo&&(Fo=!1,nr=t,Oo=d),p=t.pendingLanes,p===0&&(tr=null),ct(a.stateNode),Cn(t,Fe()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Io)throw Io=!1,t=eu,eu=null,t;return(Oo&1)!==0&&t.tag!==0&&ps(),p=t.pendingLanes,(p&1)!==0?t===tu?Sa++:(Sa=0,tu=t):Sa=0,Zi(),null}function ps(){if(nr!==null){var t=Nd(Oo),i=Yn.transition,a=bt;try{if(Yn.transition=null,bt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Oo=0,(yt&6)!==0)throw Error(n(331));var d=yt;for(yt|=4,Oe=t.current;Oe!==null;){var p=Oe,w=p.child;if((Oe.flags&16)!==0){var F=p.deletions;if(F!==null){for(var H=0;H<F.length;H++){var ie=F[H];for(Oe=ie;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:va(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,Oe=Se;else for(;Oe!==null;){xe=Oe;var ge=xe.sibling,Ue=xe.return;if(Rh(xe),xe===ie){Oe=null;break}if(ge!==null){ge.return=Ue,Oe=ge;break}Oe=Ue}}}var ze=p.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var jt=He.sibling;He.sibling=null,He=jt}while(He!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Oe=w;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:va(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Oe=K;break e}Oe=p.return}}var j=t.current;for(Oe=j;Oe!==null;){w=Oe;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,Oe=J;else e:for(w=j;Oe!==null;){if(F=Oe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Lo(9,F)}}catch(je){Gt(F,F.return,je)}if(F===w){Oe=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,Oe=we;break e}Oe=F.return}}if(yt=d,Zi(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Mn,t)}catch{}l=!0}return l}finally{bt=a,Yn.transition=i}}return!1}function Wh(t,i,a){i=us(a,i),i=ch(t,i,1),t=Ji(t,i,1),i=vn(),t!==null&&(Ws(t,1,i),Cn(t,i))}function Gt(t,i,a){if(t.tag===3)Wh(t,t,a);else for(;i!==null;){if(i.tag===3){Wh(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=us(a,t),t=uh(i,t,1),i=Ji(i,t,1),t=vn(),i!==null&&(Ws(i,1,t),Cn(i,t));break}}i=i.return}}function q0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&a,tn===t&&(an&a)===a&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Fe()-Jc?Pr(t,0):Qc|=a),Cn(t,i)}function Xh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var a=vn();t=bi(t,i),t!==null&&(Ws(t,i,a),Cn(t,a))}function Y0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Xh(t,a)}function $0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Xh(t,a)}var qh;qh=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)bn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return bn=!1,F0(t,i,a);bn=(t.flags&131072)!==0}else bn=!1,Ft&&(i.flags&1048576)!==0&&bf(i,mo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Po(t,i),t=i.pendingProps;var d=ns(i,cn.current);ls(i,a),d=Pc(null,i,l,t,d,a);var p=Nc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(p=!0,fo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ec(i),d.updater=Co,i.stateNode=d,d._reactInternals=i,Oc(i,l,t,a),i=Hc(null,i,l,!0,p,a)):(i.tag=0,Ft&&p&&hc(i),xn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Po(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Z0(l),t=ni(l,t),d){case 0:i=Bc(null,i,l,t,a);break e;case 1:i=_h(null,i,l,t,a);break e;case 11:i=ph(null,i,l,t,a);break e;case 14:i=mh(null,i,l,ni(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Bc(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),_h(t,i,l,d,a);case 3:e:{if(yh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,If(t,i),So(i,l,null,a);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=us(Error(n(423)),i),i=Sh(t,i,l,a,d);break e}else if(l!==d){d=us(Error(n(424)),i),i=Sh(t,i,l,a,d);break e}else for(In=Yi(i.stateNode.containerInfo.firstChild),Un=i,Ft=!0,ti=null,a=Df(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ss(),l===d){i=Ci(t,i,a);break e}xn(t,i,l,a)}i=i.child}return i;case 5:return kf(i),t===null&&gc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,w=d.children,oc(l,d)?w=null:p!==null&&oc(l,p)&&(i.flags|=32),vh(t,i),xn(t,i,w,a),i.child;case 6:return t===null&&gc(i),null;case 13:return Mh(t,i,a);case 4:return wc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=as(i,null,l,a):xn(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),ph(t,i,l,d,a);case 7:return xn(t,i,i.pendingProps,a),i.child;case 8:return xn(t,i,i.pendingProps.children,a),i.child;case 12:return xn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,w=d.value,Nt(vo,l._currentValue),l._currentValue=w,p!==null)if(ei(p.value,w)){if(p.children===d.children&&!wn.current){i=Ci(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){w=p.child;for(var H=F.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Ai(-1,a&-a),H.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var xe=ie.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),ie.pending=H}}p.lanes|=a,H=p.alternate,H!==null&&(H.lanes|=a),Sc(p.return,a,i),F.lanes|=a;break}H=H.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),Sc(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}xn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ls(i,a),d=Xn(d),l=l(d),i.flags|=1,xn(t,i,l,a),i.child;case 14:return l=i.type,d=ni(l,i.pendingProps),d=ni(l.type,d),mh(t,i,l,d,a);case 15:return gh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Po(t,i),i.tag=1,Tn(l)?(t=!0,fo(i)):t=!1,ls(i,a),oh(i,l,d),Oc(i,l,d,a),Hc(null,i,l,!0,t,a);case 19:return wh(t,i,a);case 22:return xh(t,i,a)}throw Error(n(156,i.tag))};function Yh(t,i){return re(t,i)}function K0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,i,a,l){return new K0(t,i,a,l)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z0(t){if(typeof t=="function")return ou(t)?1:0;if(t!=null){if(t=t.$$typeof,t===he)return 11;if(t===te)return 14}return 2}function sr(t,i){var a=t.alternate;return a===null?(a=$n(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ho(t,i,a,l,d,p){var w=2;if(l=t,typeof t=="function")ou(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case k:return Lr(a.children,d,p,i);case ue:w=8,d|=8;break;case R:return t=$n(12,a,i,d|2),t.elementType=R,t.lanes=p,t;case Me:return t=$n(13,a,i,d),t.elementType=Me,t.lanes=p,t;case X:return t=$n(19,a,i,d),t.elementType=X,t.lanes=p,t;case fe:return Go(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:w=10;break e;case ce:w=9;break e;case he:w=11;break e;case te:w=14;break e;case le:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=$n(w,a,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Lr(t,i,a,l){return t=$n(7,t,l,i),t.lanes=a,t}function Go(t,i,a,l){return t=$n(22,t,l,i),t.elementType=fe,t.lanes=a,t.stateNode={isHidden:!1},t}function lu(t,i,a){return t=$n(6,t,null,i),t.lanes=a,t}function cu(t,i,a){return i=$n(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Q0(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function uu(t,i,a,l,d,p,w,F,H){return t=new Q0(t,i,a,F,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=$n(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(p),t}function J0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function $h(t){if(!t)return Ki;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Tn(a))return Ef(t,a,i)}return i}function Kh(t,i,a,l,d,p,w,F,H){return t=uu(a,l,!0,t,d,p,w,F,H),t.context=$h(null),a=t.current,l=vn(),d=ir(a),p=Ai(l,d),p.callback=i??null,Ji(a,p,d),t.current.lanes=d,Ws(t,d,l),Cn(t,l),t}function Vo(t,i,a,l){var d=i.current,p=vn(),w=ir(d);return a=$h(a),i.context===null?i.context=a:i.pendingContext=a,i=Ai(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(d,i,w),t!==null&&(si(t,d,w,p),yo(t,d,w)),w}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function du(t,i){Zh(t,i),(t=t.alternate)&&Zh(t,i)}function ex(){return null}var Qh=typeof reportError=="function"?reportError:function(t){console.error(t)};function fu(t){this._internalRoot=t}Wo.prototype.render=fu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Vo(t,i,null,null)},Wo.prototype.unmount=fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Vo(null,t,null,null)}),i[Mi]=null}};function Wo(t){this._internalRoot=t}Wo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ud();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Wi.length&&i!==0&&i<Wi[a].priority;a++);Wi.splice(a,0,t),a===0&&Od(t)}};function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jh(){}function tx(t,i,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ie=jo(w);p.call(ie)}}var w=Kh(i,l,t,0,null,!1,!1,"",Jh);return t._reactRootContainer=w,t[Mi]=w.current,sa(t.nodeType===8?t.parentNode:t),Rr(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var F=l;l=function(){var ie=jo(H);F.call(ie)}}var H=uu(t,0,!1,null,null,!1,!1,"",Jh);return t._reactRootContainer=H,t[Mi]=H.current,sa(t.nodeType===8?t.parentNode:t),Rr(function(){Vo(i,H,a,l)}),H}function qo(t,i,a,l,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var F=d;d=function(){var H=jo(w);F.call(H)}}Vo(i,w,t,d)}else w=tx(a,i,t,d,l);return jo(w)}Ld=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ht(i.pendingLanes);a!==0&&(Ol(i,a|1),Cn(i,Fe()),(yt&6)===0&&(hs=Fe()+500,Zi()))}break;case 13:Rr(function(){var l=bi(t,1);if(l!==null){var d=vn();si(l,t,1,d)}}),du(t,1)}},kl=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var a=vn();si(i,t,134217728,a)}du(t,134217728)}},Dd=function(t){if(t.tag===13){var i=ir(t),a=bi(t,i);if(a!==null){var l=vn();si(a,t,i,l)}du(t,i)}},Ud=function(){return bt},Id=function(t,i){var a=bt;try{return bt=t,i()}finally{bt=a}},Ae=function(t,i,a){switch(i){case"input":if(dt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=co(l);if(!d)throw Error(n(90));Y(l),dt(l,d)}}}break;case"textarea":Ee(t,a);break;case"select":i=a.value,i!=null&&ne(t,!!a.multiple,i,!1)}},wt=ru,Tt=Rr;var nx={usingClientEntryPoint:!1,Events:[la,es,co,Je,$e,ru]},Ma={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ix={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=se(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Mn=Yo.inject(ix),xt=Yo}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(i))throw Error(n(200));return J0(t,i,null,a)},Rn.createRoot=function(t,i){if(!hu(t))throw Error(n(299));var a=!1,l="",d=Qh;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=uu(t,1,!1,null,null,a,!1,l,d),t[Mi]=i.current,sa(t.nodeType===8?t.parentNode:t),new fu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=se(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Rr(t)},Rn.hydrate=function(t,i,a){if(!Xo(i))throw Error(n(200));return qo(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!hu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",w=Qh;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Kh(i,null,t,1,a??null,d,!1,p,w),t[Mi]=i.current,sa(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Wo(i)},Rn.render=function(t,i,a){if(!Xo(i))throw Error(n(200));return qo(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Rn.unstable_batchedUpdates=ru,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Xo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qo(t,i,a,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var op;function fx(){if(op)return gu.exports;op=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),gu.exports=dx(),gu.exports}var lp;function hx(){if(lp)return $o;lp=1;var s=fx();return $o.createRoot=s.createRoot,$o.hydrateRoot=s.hydrateRoot,$o}var px=hx();const mx=Bm(px),gx=()=>{const[s,e]=Ct.useState({x:-100,y:-100});return Ct.useEffect(()=>{const n=r=>{e({x:r.clientX,y:r.clientY})};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),g.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true",children:[g.jsx("div",{className:"absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-transform duration-300 ease-out",style:{background:"radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)",left:`${s.x-300}px`,top:`${s.y-300}px`,transform:"translate3d(0,0,0)"}}),g.jsx("div",{className:"absolute inset-0 bg-cyber-grid opacity-30"}),g.jsx("div",{className:"absolute -top-40 -left-40 w-[650px] h-[650px] bg-brand-cyan/10 rounded-full blur-[160px] animate-ambient-1"}),g.jsx("div",{className:"absolute top-1/3 -right-40 w-[700px] h-[700px] bg-brand-indigo/15 rounded-full blur-[180px] animate-ambient-2"}),g.jsx("div",{className:"absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-emerald/10 rounded-full blur-[170px] animate-ambient-1"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#07090E]/40 to-[#07090E]"})]})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Ct.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...u},h)=>Ct.createElement("svg",{ref:h,...vx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Hm("lucide",o),...u},[...f.map(([m,x])=>Ct.createElement(m,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(s,e)=>{const n=Ct.forwardRef(({className:r,...o},c)=>Ct.createElement(_x,{ref:c,iconNode:e,className:Hm(`lucide-${xx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Gm=gt("Activity",yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ds=gt("ArrowRight",Sx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],td=gt("ArrowUpRight",Mx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],wx=gt("ArrowUp",Ex);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],bx=gt("Bot",Tx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Cx=gt("Calendar",Ax);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_u=gt("Check",Rx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yu=gt("CircleCheckBig",Px);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vd=gt("CircleCheck",Nx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Dx=gt("Clock",Lx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ia=gt("CodeXml",Ux);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Fx=gt("Code",Ix);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],_d=gt("Compass",Ox);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],cp=gt("Copy",kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Hs=gt("Cpu",zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Hx=gt("Database",Bx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],nd=gt("ExternalLink",Gx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],jx=gt("Flame",Vx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xx=gt("Globe",Wx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Vm=gt("Layers",qx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],jm=gt("Mail",Yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Kx=gt("Menu",$x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Wm=gt("MessageSquare",Zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Jx=gt("PanelsTopLeft",Qx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Sl=gt("Phone",ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],nv=gt("Play",tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],up=gt("RefreshCw",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],sv=gt("RotateCcw",rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ov=gt("Send",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],cv=gt("Server",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Fa=gt("ShieldCheck",uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],fv=gt("Shield",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ml=gt("Sparkles",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],yd=gt("Terminal",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gv=gt("X",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],vv=gt("Zap",xv),id="Codecraft",Xm="The Art of Intelligent Software",Fi="codecraftventures@gmail.com",Us="8301053212",El="+91 83010 53212",dp=[{id:"autonomous-agents",category:"agentic",title:"Autonomous Agent Swarms",subtitle:"Self-coordinating Multi-Agent Systems",description:"Architect specialized agent networks that collaborate, reason across complex business logic, call enterprise tools, and execute multi-step objectives with deterministic accuracy.",iconName:"Bot",capabilities:["Hierarchical agent orchestration & routing","Dynamic tool-calling & external API action loop","Long-term vector memory & cognitive state persistence","Human-in-the-loop governance & audit trails"],metrics:"10x Operational Velocity",accentColor:"from-cyan-500/20 to-indigo-500/10"},{id:"cognitive-automation",category:"agentic",title:"Cognitive Process Automation",subtitle:"End-to-End Enterprise Workflow Autonomy",description:"Transform manual operational bottlenecks into autonomous pipelines. Ingest unstructured documents, perform contextual validation, and trigger system-wide state changes.",iconName:"Cpu",capabilities:["Multimodal document & invoice intelligence","Automated cross-system reconciliation","Adaptive RPA with self-healing selectors","Real-time anomaly & compliance detection"],metrics:"94% Human Labor Reduction",accentColor:"from-emerald-500/20 to-cyan-500/10"},{id:"enterprise-rag-tooling",category:"agentic",title:"Domain LLMs & Custom Tooling",subtitle:"Secure Enterprise Intelligence Layer",description:"Deploy private, fine-tuned agentic models tailored to your internal knowledge graph. Zero data leaks, enterprise RBAC integration, and verifiable citation chains.",iconName:"Sparkles",capabilities:["Hybrid dense/sparse hybrid vector search (RAG)","Role-based knowledge access isolation","Sub-second semantic search & graph indexing","Custom function execution sandboxes"],metrics:"Sub-150ms Semantic Lookups",accentColor:"from-violet-500/20 to-cyan-500/10"},{id:"autonomous-devops-qa",category:"agentic",title:"Self-Healing DevOps & QA",subtitle:"Continuous Autonomous Observability",description:"Agentic sentinels that execute continuous synthetic user journeys, detect regressions before users do, and automatically generate pull requests with corrective patches.",iconName:"Terminal",capabilities:["Autonomous synthetic user journey simulation","Automated root-cause telemetry diagnosis","Self-generating test suite adaptation","Intelligent rollback & canary governance"],metrics:"99.99% Autonomous Defense",accentColor:"from-blue-500/20 to-emerald-500/10"},{id:"bespoke-web-platforms",category:"engineering",title:"Next-Gen Web Applications",subtitle:"High-Performance Modern Frontend Architecture",description:"Handcrafted, ultra-responsive digital applications built on modern React, Next.js, and TypeScript. Designed for instantaneous load speeds, fluid interactions, and conversion.",iconName:"Globe",capabilities:["Server-side rendering & edge computing optimization","Fluid 60fps micro-interactions & WebGL/3D integration","Comprehensive accessibility (WCAG 2.1 AA compliant)","Scalable atomic design systems & UI components"],metrics:"Sub-500ms First Contentful Paint",accentColor:"from-indigo-500/20 to-blue-500/10"},{id:"distributed-backends",category:"engineering",title:"Distributed Cloud Backends",subtitle:"Low-Latency & Resilient System Architecture",description:"Fault-tolerant, distributed cloud systems engineered to process massive concurrent throughput. Powered by modern Go, Node.js, Rust, and event-driven architectures.",iconName:"Server",capabilities:["High-throughput WebSocket & gRPC streaming","Event-driven architecture with Kafka & Redis","Relational & NoSQL database sharding & caching","Zero-downtime rolling deployment strategies"],metrics:"50,000+ Concurrent Req/Sec",accentColor:"from-cyan-500/20 to-teal-500/10"},{id:"cloud-infrastructure",category:"engineering",title:"Cloud Native & DevOps",subtitle:"Infrastructure as Code & Zero-Trust Security",description:"Enterprise cloud orchestration built on AWS, GCP, and Kubernetes. Immutable infrastructure, automated scaling, and military-grade encryption in transit and at rest.",iconName:"ShieldCheck",capabilities:["Kubernetes & containerized microservices","Terraform & Pulumi declarative IaaC","SOC-2 compliant secrets & identity federation","Global CDN edge distribution & WAF protection"],metrics:"99.99% Availability SLA",accentColor:"from-emerald-500/20 to-indigo-500/10"},{id:"bespoke-software-apis",category:"engineering",title:"Custom APIs & Integrations",subtitle:"Seamless Data Pipelines & Partner Gateways",description:"Secure, developer-delighting public and internal APIs built with OpenAPI 3.0 standards, rate-limiting algorithms, robust idempotency keys, and real-time webhooks.",iconName:"Layers",capabilities:["RESTful & GraphQL federation gateways","Deterministic idempotency & distributed locks","Automated SDK generation (TypeScript, Python, Go)","Granular developer telemetry & analytics"],metrics:"Zero-Downtime Migration",accentColor:"from-purple-500/20 to-cyan-500/10"}],fp=[{id:"plusone",title:"PlusOne — Social Discovery & Live Event Companion",subtitle:"Find your plus one for the night",category:"In-House Product",pillar:"Hybrid Architecture",isFlagship:!0,url:"http://www.plusone.today",badge:"Flagship Product",summary:"Built and operated by Codecraft, PlusOne is a next-generation real-time social discovery platform that connects people for events, nightlife, and spontaneous plans. Engineered with low-latency intent-matching, verified member onboarding, and reactive real-time messaging.",techStack:["Next.js","React","TypeScript","Real-Time WebSockets","Tailwind CSS","Location Intelligence","Edge API"],metrics:[{label:"Intent Matching Latency",value:"< 90ms"},{label:"Uptime Reliability",value:"99.98%"},{label:"Member Onboarding Flow",value:"Under 60s"}],accentColor:"from-cyan-500 via-indigo-500 to-emerald-400"},{id:"aetherflow",title:"AetherFlow — Autonomous Supply Chain Agent Hub",subtitle:"Enterprise Document Intelligence & Cross-System Actions",category:"Enterprise Client",pillar:"Agentic System",summary:"A multi-agent autonomous system that parses thousands of customs declarations, invoices, and manifests every hour. Agents independently flag discrepancies, reconcile ERP databases, and draft vendor notices with zero human latency.",techStack:["Autonomous Agents","Python","FastAPI","Vector Store","PostgreSQL","Kafka","Docker"],metrics:[{label:"Processing Speedup",value:"14x"},{label:"Manual Review Needed",value:"< 4.2%"},{label:"Audit Accuracy",value:"99.94%"}],accentColor:"from-emerald-500 via-teal-400 to-cyan-500"},{id:"synthetix",title:"Synthetix — High-Frequency Financial Intelligence Platform",subtitle:"Real-Time Algorithmic Execution Dashboard",category:"Fintech System",pillar:"Web Platform",summary:"A bespoke institutional trading and portfolio surveillance dashboard. Features 60fps canvas charts, sub-millisecond market feed ingestion, and role-based portfolio risk alerts.",techStack:["React","TypeScript","Go Backplane","WebSockets","TimescaleDB","Tailwind"],metrics:[{label:"Live Tick Throughput",value:"85K/sec"},{label:"UI Frame Rate",value:"Solid 60fps"},{label:"Data Pipeline Delay",value:"< 12ms"}],accentColor:"from-indigo-500 via-purple-500 to-cyan-400"}],_v=[{step:"01",phase:"Architecture & Blueprint",title:"Deep Cognitive & Technical Mapping",description:"We deconstruct your operational bottlenecks and system architecture. We define data boundaries, interface contracts, and determine where deterministic software vs autonomous agents deliver maximum impact.",deliverables:["System Architecture RFC","Agent Capability Spec","Security & Data Governance Blueprint"],icon:"Compass"},{step:"02",phase:"Autonomous Prototyping",title:"Sandboxed Agents & UI Prototypes",description:"Rapid iteration in isolated sandbox environments. We validate multi-agent decision chains against synthetic scenarios while crafting high-fidelity reactive UI components.",deliverables:["Interactive Prototype","Agent Verification Logs","Latency & Cost Projections"],icon:"Code2"},{step:"03",phase:"Precision Engineering",title:"Production-Grade Full-Stack Construction",description:"We build with strict software craftsmanship: type-safe schemas, automated regression tests, fault-tolerant retries, rate-limiting safeguards, and polished design systems.",deliverables:["Production Web & API Codebase","Zero-Trust Infrastructure as Code","Full CI/CD Pipeline"],icon:"Cpu"},{step:"04",phase:"Autonomous Evolution",title:"Deployment, Telemetry & Self-Optimization",description:"Seamless cutover with zero downtime. Automated telemetry agents monitor system health, latency, and model drift, continuously optimizing queries and prompt efficacy.",deliverables:["Live Production Cutover","Real-Time Telemetry Dashboard","Ongoing Autonomous Health Audits"],icon:"Activity"}],yv=()=>{const[s,e]=Ct.useState(!1),[n,r]=Ct.useState(!1);Ct.useEffect(()=>{const c=()=>{e(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const o=[{name:"Services",href:"#services"},{name:"Architecture",href:"#architecture"},{name:"Selected Works",href:"#works"},{name:"Process",href:"#process"},{name:"About",href:"#about"},{name:"Contact",href:"#contact"}];return g.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"bg-[#07090E]/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/40":"bg-transparent py-5"}`,children:[g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[g.jsxs("a",{href:"#",className:"flex items-center gap-3 group",children:[g.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100 border border-white/15 overflow-hidden group-hover:border-brand-cyan/50 transition-colors",children:[g.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-brand-indigo/20 to-brand-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity"}),g.jsx(Hs,{className:"w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform"})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("span",{className:"text-lg font-bold tracking-tight text-white flex items-center gap-1.5",children:["Codecraft",g.jsx("span",{className:"inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"})]}),g.jsx("span",{className:"text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-1",children:"Intelligent Software"})]})]}),g.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-surface-200/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md",children:o.map(c=>g.jsx("a",{href:c.href,className:"text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all",children:c.name},c.name))}),g.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[g.jsxs("a",{href:`tel:${Us}`,className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-emerald transition-colors px-3 py-2 rounded-lg bg-surface-100/50 border border-white/5 hover:border-brand-emerald/30 font-mono",title:"Direct Engineering Line",children:[g.jsx(Sl,{className:"w-3.5 h-3.5 text-brand-emerald"}),g.jsx("span",{children:El})]}),g.jsxs("a",{href:"#contact",className:"relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 bg-surface-100 hover:bg-surface-50 border border-brand-cyan/40 hover:border-brand-cyan rounded-lg shadow-sm hover:shadow-brand-cyan/20 hover:shadow-lg group overflow-hidden",children:[g.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-brand-indigo/10 to-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity"}),g.jsx("span",{children:"Start Project"}),g.jsx(td,{className:"w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]}),g.jsx("button",{onClick:()=>r(!n),className:"md:hidden p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white focus:outline-none","aria-label":"Toggle menu",children:n?g.jsx(gv,{className:"w-5 h-5"}):g.jsx(Kx,{className:"w-5 h-5"})})]}),n&&g.jsxs("div",{className:"md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0C0F17]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-3",children:[o.map(c=>g.jsx("a",{href:c.href,onClick:()=>r(!1),className:"text-sm font-medium text-slate-300 hover:text-brand-cyan py-2 px-3 rounded-lg hover:bg-white/5 transition-all",children:c.name},c.name)),g.jsxs("div",{className:"pt-3 border-t border-white/10 flex flex-col gap-2.5",children:[g.jsxs("a",{href:`tel:${Us}`,className:"flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-slate-300 hover:text-brand-emerald",children:[g.jsx(Sl,{className:"w-3.5 h-3.5 text-brand-emerald"}),El]}),g.jsxs("a",{href:"#contact",onClick:()=>r(!1),className:"flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-indigo text-slate-950 font-bold text-xs shadow-lg shadow-brand-cyan/20",children:[g.jsx("span",{children:"Schedule Architecture Review"}),g.jsx(td,{className:"w-4 h-4"})]})]})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="160",Sv=0,hp=1,Mv=2,qm=1,Ev=2,Ii=3,xr=0,Ln=1,Oi=2,pr=0,Is=1,rd=2,pp=3,mp=4,wv=5,zr=100,Tv=101,bv=102,gp=103,xp=104,Av=200,Cv=201,Rv=202,Pv=203,sd=204,ad=205,Nv=206,Lv=207,Dv=208,Uv=209,Iv=210,Fv=211,Ov=212,kv=213,zv=214,Bv=0,Hv=1,Gv=2,wl=3,Vv=4,jv=5,Wv=6,Xv=7,Ym=0,qv=1,Yv=2,mr=0,$v=1,Kv=2,Zv=3,Qv=4,Jv=5,e_=6,$m=300,Os=301,ks=302,od=303,ld=304,Pl=306,cd=1e3,ui=1001,ud=1002,yn=1003,vp=1004,Su=1005,Zn=1006,t_=1007,Da=1008,gr=1009,n_=1010,i_=1011,Md=1012,Km=1013,fr=1014,hr=1015,Ua=1016,Zm=1017,Qm=1018,Hr=1020,r_=1021,di=1023,s_=1024,a_=1025,Gr=1026,zs=1027,o_=1028,Jm=1029,l_=1030,eg=1031,tg=1033,Mu=33776,Eu=33777,wu=33778,Tu=33779,_p=35840,yp=35841,Sp=35842,Mp=35843,ng=36196,Ep=37492,wp=37496,Tp=37808,bp=37809,Ap=37810,Cp=37811,Rp=37812,Pp=37813,Np=37814,Lp=37815,Dp=37816,Up=37817,Ip=37818,Fp=37819,Op=37820,kp=37821,bu=36492,zp=36494,Bp=36495,c_=36283,Hp=36284,Gp=36285,Vp=36286,ig=3e3,Vr=3001,u_=3200,d_=3201,f_=0,h_=1,Qn="",on="srgb",zi="srgb-linear",Ed="display-p3",Nl="display-p3-linear",Tl="linear",Ut="srgb",bl="rec709",Al="p3",ms=7680,jp=519,p_=512,m_=513,g_=514,rg=515,x_=516,v_=517,__=518,y_=519,Wp=35044,Xp="300 es",dd=1035,ki=2e3,Cl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,fd=180/Math.PI;function Oa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Nn(s,e,n){return Math.max(e,Math.min(n,s))}function S_(s,e){return(s%e+e)%e}function Cu(s,e,n){return(1-n)*s+n*e}function qp(s){return(s&s-1)===0&&s!==0}function hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,n=0){vt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,n,r,o,c,f,u,h,m){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,u,h,m)}set(e,n,r,o,c,f,u,h,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=u,x[3]=n,x[4]=c,x[5]=h,x[6]=r,x[7]=f,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],u=r[3],h=r[6],m=r[1],x=r[4],y=r[7],S=r[2],E=r[5],A=r[8],T=o[0],_=o[3],v=o[6],U=o[1],C=o[4],L=o[7],W=o[2],z=o[5],k=o[8];return c[0]=f*T+u*U+h*W,c[3]=f*_+u*C+h*z,c[6]=f*v+u*L+h*k,c[1]=m*T+x*U+y*W,c[4]=m*_+x*C+y*z,c[7]=m*v+x*L+y*k,c[2]=S*T+E*U+A*W,c[5]=S*_+E*C+A*z,c[8]=S*v+E*L+A*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],u=e[5],h=e[6],m=e[7],x=e[8];return n*f*x-n*u*m-r*c*x+r*u*h+o*c*m-o*f*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],u=e[5],h=e[6],m=e[7],x=e[8],y=x*f-u*m,S=u*h-x*c,E=m*c-f*h,A=n*y+r*S+o*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(o*m-x*r)*T,e[2]=(u*r-o*f)*T,e[3]=S*T,e[4]=(x*n-o*h)*T,e[5]=(o*c-u*n)*T,e[6]=E*T,e[7]=(r*h-m*n)*T,e[8]=(f*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,u){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*f+m*u)+f+e,-o*m,o*h,-o*(-m*f+h*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new mt;function sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function M_(){const s=Rl("canvas");return s.style.display="block",s}const Yp={};function Na(s){s in Yp||(Yp[s]=!0,console.warn(s))}const $p=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[zi]:{transfer:Tl,primaries:bl,toReference:s=>s,fromReference:s=>s},[on]:{transfer:Ut,primaries:bl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Nl]:{transfer:Tl,primaries:Al,toReference:s=>s.applyMatrix3(Kp),fromReference:s=>s.applyMatrix3($p)},[Ed]:{transfer:Ut,primaries:Al,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Kp),fromReference:s=>s.applyMatrix3($p).convertLinearToSRGB()}},E_=new Set([zi,Nl]),At={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!E_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Ko[e].toReference,o=Ko[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ko[s].primaries},getTransfer:function(s){return s===Qn?Tl:Ko[s].transfer}};function Fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class ag{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Rl("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Fs(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fs(n[r]/255)*255):n[r]=Fs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w_=0;class og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Oa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,u=o.length;f<u;f++)o[f].isDataTexture?c.push(Nu(o[f].image)):c.push(Nu(o[f]))}else c=Nu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ag.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T_=0;class Bn extends Gs{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,r=ui,o=ui,c=Zn,f=Da,u=di,h=gr,m=Bn.DEFAULT_ANISOTROPY,x=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Oa(),this.name="",this.source=new og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=u,this.internalFormat=null,this.type=h,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof x=="string"?this.colorSpace=x:(Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=x===Vr?on:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?Vr:ig}set encoding(e){Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vr?on:Qn}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=$m;Bn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,r=0,o=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],x=h[4],y=h[8],S=h[1],E=h[5],A=h[9],T=h[2],_=h[6],v=h[10];if(Math.abs(x-S)<.01&&Math.abs(y-T)<.01&&Math.abs(A-_)<.01){if(Math.abs(x+S)<.1&&Math.abs(y+T)<.1&&Math.abs(A+_)<.1&&Math.abs(m+E+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(m+1)/2,L=(E+1)/2,W=(v+1)/2,z=(x+S)/4,k=(y+T)/4,ue=(A+_)/4;return C>L&&C>W?C<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(C),o=z/r,c=k/r):L>W?L<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),r=z/o,c=ue/o):W<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(W),r=k/c,o=ue/c),this.set(r,o,c,n),this}let U=Math.sqrt((_-A)*(_-A)+(y-T)*(y-T)+(S-x)*(S-x));return Math.abs(U)<.001&&(U=1),this.x=(_-A)/U,this.y=(y-T)/U,this.z=(S-x)/U,this.w=Math.acos((m+E+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b_ extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const o={width:e,height:n,depth:1};r.encoding!==void 0&&(Na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Vr?on:Qn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new og(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends b_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class lg extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A_ extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,u){let h=r[o+0],m=r[o+1],x=r[o+2],y=r[o+3];const S=c[f+0],E=c[f+1],A=c[f+2],T=c[f+3];if(u===0){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(u===1){e[n+0]=S,e[n+1]=E,e[n+2]=A,e[n+3]=T;return}if(y!==T||h!==S||m!==E||x!==A){let _=1-u;const v=h*S+m*E+x*A+y*T,U=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const W=Math.sqrt(C),z=Math.atan2(W,v*U);_=Math.sin(_*z)/W,u=Math.sin(u*z)/W}const L=u*U;if(h=h*_+S*L,m=m*_+E*L,x=x*_+A*L,y=y*_+T*L,_===1-u){const W=1/Math.sqrt(h*h+m*m+x*x+y*y);h*=W,m*=W,x*=W,y*=W}}e[n]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,c,f){const u=r[o],h=r[o+1],m=r[o+2],x=r[o+3],y=c[f],S=c[f+1],E=c[f+2],A=c[f+3];return e[n]=u*A+x*y+h*E-m*S,e[n+1]=h*A+x*S+m*y-u*E,e[n+2]=m*A+x*E+u*S-h*y,e[n+3]=x*A-u*y-h*S-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,u=Math.cos,h=Math.sin,m=u(r/2),x=u(o/2),y=u(c/2),S=h(r/2),E=h(o/2),A=h(c/2);switch(f){case"XYZ":this._x=S*x*y+m*E*A,this._y=m*E*y-S*x*A,this._z=m*x*A+S*E*y,this._w=m*x*y-S*E*A;break;case"YXZ":this._x=S*x*y+m*E*A,this._y=m*E*y-S*x*A,this._z=m*x*A-S*E*y,this._w=m*x*y+S*E*A;break;case"ZXY":this._x=S*x*y-m*E*A,this._y=m*E*y+S*x*A,this._z=m*x*A+S*E*y,this._w=m*x*y-S*E*A;break;case"ZYX":this._x=S*x*y-m*E*A,this._y=m*E*y+S*x*A,this._z=m*x*A-S*E*y,this._w=m*x*y+S*E*A;break;case"YZX":this._x=S*x*y+m*E*A,this._y=m*E*y+S*x*A,this._z=m*x*A-S*E*y,this._w=m*x*y-S*E*A;break;case"XZY":this._x=S*x*y-m*E*A,this._y=m*E*y-S*x*A,this._z=m*x*A+S*E*y,this._w=m*x*y+S*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],u=n[5],h=n[9],m=n[2],x=n[6],y=n[10],S=r+u+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-h)*E,this._y=(c-m)*E,this._z=(f-o)*E}else if(r>u&&r>y){const E=2*Math.sqrt(1+r-u-y);this._w=(x-h)/E,this._x=.25*E,this._y=(o+f)/E,this._z=(c+m)/E}else if(u>y){const E=2*Math.sqrt(1+u-r-y);this._w=(c-m)/E,this._x=(o+f)/E,this._y=.25*E,this._z=(h+x)/E}else{const E=2*Math.sqrt(1+y-r-u);this._w=(f-o)/E,this._x=(c+m)/E,this._y=(h+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,u=n._x,h=n._y,m=n._z,x=n._w;return this._x=r*x+f*u+o*m-c*h,this._y=o*x+f*h+c*u-r*m,this._z=c*x+f*m+r*h-o*u,this._w=f*x-r*u-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,f=this._w;let u=f*e._w+r*e._x+o*e._y+c*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=r,this._y=o,this._z=c,this;const h=1-u*u;if(h<=Number.EPSILON){const E=1-n;return this._w=E*f+n*this._w,this._x=E*r+n*this._x,this._y=E*o+n*this._y,this._z=E*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),x=Math.atan2(m,u),y=Math.sin((1-n)*x)/m,S=Math.sin(n*x)/m;return this._w=f*y+this._w*S,this._x=r*y+this._x*S,this._y=o*y+this._y*S,this._z=c*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(n*Math.cos(o),r*Math.sin(c),r*Math.cos(c),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,u=e.z,h=e.w,m=2*(f*o-u*r),x=2*(u*n-c*o),y=2*(c*r-f*n);return this.x=n+h*m+f*y-u*x,this.y=r+h*x+u*m-c*y,this.z=o+h*y+c*x-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,u=n.y,h=n.z;return this.x=o*h-c*u,this.y=c*f-r*h,this.z=r*u-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new $,Zp=new ka;class za{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=c.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,ai):ai.fromBufferAttribute(c,f),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zo.copy(r.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Qo.subVectors(this.max,Ta),xs.subVectors(e.a,Ta),vs.subVectors(e.b,Ta),_s.subVectors(e.c,Ta),or.subVectors(vs,xs),lr.subVectors(_s,vs),Dr.subVectors(xs,_s);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Dr.z,Dr.y,or.z,0,-or.x,lr.z,0,-lr.x,Dr.z,0,-Dr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Dr.y,Dr.x,0];return!Du(n,xs,vs,_s,Qo)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,xs,vs,_s,Qo))?!1:(Jo.crossVectors(or,lr),n=[Jo.x,Jo.y,Jo.z],Du(n,xs,vs,_s,Qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new $,new $,new $,new $,new $,new $,new $,new $],ai=new $,Zo=new za,xs=new $,vs=new $,_s=new $,or=new $,lr=new $,Dr=new $,Ta=new $,Qo=new $,Jo=new $,Ur=new $;function Du(s,e,n,r,o){for(let c=0,f=s.length-3;c<=f;c+=3){Ur.fromArray(s,c);const u=o.x*Math.abs(Ur.x)+o.y*Math.abs(Ur.y)+o.z*Math.abs(Ur.z),h=e.dot(Ur),m=n.dot(Ur),x=r.dot(Ur);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>u)return!1}return!0}const C_=new za,ba=new $,Uu=new $;class Ll{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):C_.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Uu)),this.expandByPoint(ba.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new $,Iu=new $,el=new $,cr=new $,Fu=new $,tl=new $,Ou=new $;class cg{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Iu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,f=-this.direction.dot(el),u=cr.dot(this.direction),h=-cr.dot(el),m=cr.lengthSq(),x=Math.abs(1-f*f);let y,S,E,A;if(x>0)if(y=f*h-u,S=f*u-h,A=c*x,y>=0)if(S>=-A)if(S<=A){const T=1/x;y*=T,S*=T,E=y*(y+f*S+2*u)+S*(f*y+S+2*h)+m}else S=c,y=Math.max(0,-(f*S+u)),E=-y*y+S*(S+2*h)+m;else S=-c,y=Math.max(0,-(f*S+u)),E=-y*y+S*(S+2*h)+m;else S<=-A?(y=Math.max(0,-(-f*c+u)),S=y>0?-c:Math.min(Math.max(-c,-h),c),E=-y*y+S*(S+2*h)+m):S<=A?(y=0,S=Math.min(Math.max(-c,-h),c),E=S*(S+2*h)+m):(y=Math.max(0,-(f*c+u)),S=y>0?c:Math.min(Math.max(-c,-h),c),E=-y*y+S*(S+2*h)+m);else S=f>0?-c:c,y=Math.max(0,-(f*S+u)),E=-y*y+S*(S+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Iu).addScaledVector(el,S),E}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),o=Ni.dot(Ni)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),u=r-f,h=r+f;return h<0?null:u<0?this.at(h,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,u,h;const m=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(c=(e.min.y-S.y)*x,f=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,f=(e.min.y-S.y)*x),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),y>=0?(u=(e.min.z-S.z)*y,h=(e.max.z-S.z)*y):(u=(e.max.z-S.z)*y,h=(e.min.z-S.z)*y),r>h||u>o)||((u>r||r!==r)&&(r=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,o,c){Fu.subVectors(n,e),tl.subVectors(r,e),Ou.crossVectors(Fu,tl);let f=this.direction.dot(Ou),u;if(f>0){if(o)return null;u=1}else if(f<0)u=-1,f=-f;else return null;cr.subVectors(this.origin,e);const h=u*this.direction.dot(tl.crossVectors(cr,tl));if(h<0)return null;const m=u*this.direction.dot(Fu.cross(cr));if(m<0||h+m>f)return null;const x=-u*cr.dot(Ou);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,o,c,f,u,h,m,x,y,S,E,A,T,_){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,u,h,m,x,y,S,E,A,T,_)}set(e,n,r,o,c,f,u,h,m,x,y,S,E,A,T,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=f,v[9]=u,v[13]=h,v[2]=m,v[6]=x,v[10]=y,v[14]=S,v[3]=E,v[7]=A,v[11]=T,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),u=Math.sin(r),h=Math.cos(o),m=Math.sin(o),x=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const S=f*x,E=f*y,A=u*x,T=u*y;n[0]=h*x,n[4]=-h*y,n[8]=m,n[1]=E+A*m,n[5]=S-T*m,n[9]=-u*h,n[2]=T-S*m,n[6]=A+E*m,n[10]=f*h}else if(e.order==="YXZ"){const S=h*x,E=h*y,A=m*x,T=m*y;n[0]=S+T*u,n[4]=A*u-E,n[8]=f*m,n[1]=f*y,n[5]=f*x,n[9]=-u,n[2]=E*u-A,n[6]=T+S*u,n[10]=f*h}else if(e.order==="ZXY"){const S=h*x,E=h*y,A=m*x,T=m*y;n[0]=S-T*u,n[4]=-f*y,n[8]=A+E*u,n[1]=E+A*u,n[5]=f*x,n[9]=T-S*u,n[2]=-f*m,n[6]=u,n[10]=f*h}else if(e.order==="ZYX"){const S=f*x,E=f*y,A=u*x,T=u*y;n[0]=h*x,n[4]=A*m-E,n[8]=S*m+T,n[1]=h*y,n[5]=T*m+S,n[9]=E*m-A,n[2]=-m,n[6]=u*h,n[10]=f*h}else if(e.order==="YZX"){const S=f*h,E=f*m,A=u*h,T=u*m;n[0]=h*x,n[4]=T-S*y,n[8]=A*y+E,n[1]=y,n[5]=f*x,n[9]=-u*x,n[2]=-m*x,n[6]=E*y+A,n[10]=S-T*y}else if(e.order==="XZY"){const S=f*h,E=f*m,A=u*h,T=u*m;n[0]=h*x,n[4]=-y,n[8]=m*x,n[1]=S*y+T,n[5]=f*x,n[9]=E*y-A,n[2]=A*y-E,n[6]=u*x,n[10]=T*y+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,P_)}lookAt(e,n,r){const o=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),ur.crossVectors(r,On),ur.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ur.crossVectors(r,On)),ur.normalize(),nl.crossVectors(On,ur),o[0]=ur.x,o[4]=nl.x,o[8]=On.x,o[1]=ur.y,o[5]=nl.y,o[9]=On.y,o[2]=ur.z,o[6]=nl.z,o[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],u=r[4],h=r[8],m=r[12],x=r[1],y=r[5],S=r[9],E=r[13],A=r[2],T=r[6],_=r[10],v=r[14],U=r[3],C=r[7],L=r[11],W=r[15],z=o[0],k=o[4],ue=o[8],R=o[12],I=o[1],ce=o[5],he=o[9],Me=o[13],X=o[2],te=o[6],le=o[10],fe=o[14],q=o[3],ee=o[7],P=o[11],M=o[15];return c[0]=f*z+u*I+h*X+m*q,c[4]=f*k+u*ce+h*te+m*ee,c[8]=f*ue+u*he+h*le+m*P,c[12]=f*R+u*Me+h*fe+m*M,c[1]=x*z+y*I+S*X+E*q,c[5]=x*k+y*ce+S*te+E*ee,c[9]=x*ue+y*he+S*le+E*P,c[13]=x*R+y*Me+S*fe+E*M,c[2]=A*z+T*I+_*X+v*q,c[6]=A*k+T*ce+_*te+v*ee,c[10]=A*ue+T*he+_*le+v*P,c[14]=A*R+T*Me+_*fe+v*M,c[3]=U*z+C*I+L*X+W*q,c[7]=U*k+C*ce+L*te+W*ee,c[11]=U*ue+C*he+L*le+W*P,c[15]=U*R+C*Me+L*fe+W*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],u=e[5],h=e[9],m=e[13],x=e[2],y=e[6],S=e[10],E=e[14],A=e[3],T=e[7],_=e[11],v=e[15];return A*(+c*h*y-o*m*y-c*u*S+r*m*S+o*u*E-r*h*E)+T*(+n*h*E-n*m*S+c*f*S-o*f*E+o*m*x-c*h*x)+_*(+n*m*y-n*u*E-c*f*y+r*f*E+c*u*x-r*m*x)+v*(-o*u*x-n*h*y+n*u*S+o*f*y-r*f*S+r*h*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],u=e[5],h=e[6],m=e[7],x=e[8],y=e[9],S=e[10],E=e[11],A=e[12],T=e[13],_=e[14],v=e[15],U=y*_*m-T*S*m+T*h*E-u*_*E-y*h*v+u*S*v,C=A*S*m-x*_*m-A*h*E+f*_*E+x*h*v-f*S*v,L=x*T*m-A*y*m+A*u*E-f*T*E-x*u*v+f*y*v,W=A*y*h-x*T*h-A*u*S+f*T*S+x*u*_-f*y*_,z=n*U+r*C+o*L+c*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=U*k,e[1]=(T*S*c-y*_*c-T*o*E+r*_*E+y*o*v-r*S*v)*k,e[2]=(u*_*c-T*h*c+T*o*m-r*_*m-u*o*v+r*h*v)*k,e[3]=(y*h*c-u*S*c-y*o*m+r*S*m+u*o*E-r*h*E)*k,e[4]=C*k,e[5]=(x*_*c-A*S*c+A*o*E-n*_*E-x*o*v+n*S*v)*k,e[6]=(A*h*c-f*_*c-A*o*m+n*_*m+f*o*v-n*h*v)*k,e[7]=(f*S*c-x*h*c+x*o*m-n*S*m-f*o*E+n*h*E)*k,e[8]=L*k,e[9]=(A*y*c-x*T*c-A*r*E+n*T*E+x*r*v-n*y*v)*k,e[10]=(f*T*c-A*u*c+A*r*m-n*T*m-f*r*v+n*u*v)*k,e[11]=(x*u*c-f*y*c-x*r*m+n*y*m+f*r*E-n*u*E)*k,e[12]=W*k,e[13]=(x*T*o-A*y*o+A*r*S-n*T*S-x*r*_+n*y*_)*k,e[14]=(A*u*o-f*T*o-A*r*h+n*T*h+f*r*_-n*u*_)*k,e[15]=(f*y*o-x*u*o+x*r*h-n*y*h-f*r*S+n*u*S)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,u=e.y,h=e.z,m=c*f,x=c*u;return this.set(m*f+r,m*u-o*h,m*h+o*u,0,m*u+o*h,x*u+r,x*h-o*f,0,m*h-o*u,x*h+o*f,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,u=n._z,h=n._w,m=c+c,x=f+f,y=u+u,S=c*m,E=c*x,A=c*y,T=f*x,_=f*y,v=u*y,U=h*m,C=h*x,L=h*y,W=r.x,z=r.y,k=r.z;return o[0]=(1-(T+v))*W,o[1]=(E+L)*W,o[2]=(A-C)*W,o[3]=0,o[4]=(E-L)*z,o[5]=(1-(S+v))*z,o[6]=(_+U)*z,o[7]=0,o[8]=(A+C)*k,o[9]=(_-U)*k,o[10]=(1-(S+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=ys.set(o[0],o[1],o[2]).length();const f=ys.set(o[4],o[5],o[6]).length(),u=ys.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const m=1/c,x=1/f,y=1/u;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=x,oi.elements[5]*=x,oi.elements[6]*=x,oi.elements[8]*=y,oi.elements[9]*=y,oi.elements[10]*=y,n.setFromRotationMatrix(oi),r.x=c,r.y=f,r.z=u,this}makePerspective(e,n,r,o,c,f,u=ki){const h=this.elements,m=2*c/(n-e),x=2*c/(r-o),y=(n+e)/(n-e),S=(r+o)/(r-o);let E,A;if(u===ki)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(u===Cl)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=x,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,f,u=ki){const h=this.elements,m=1/(n-e),x=1/(r-o),y=1/(f-c),S=(n+e)*m,E=(r+o)*x;let A,T;if(u===ki)A=(f+c)*y,T=-2*y;else if(u===Cl)A=c*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*x,h[9]=0,h[13]=-E,h[2]=0,h[6]=0,h[10]=T,h[14]=-A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ys=new $,oi=new Wt,R_=new $(0,0,0),P_=new $(1,1,1),ur=new $,nl=new $,On=new $,Qp=new Wt,Jp=new ka;class Dl{constructor(e=0,n=0,r=0,o=Dl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],u=o[8],h=o[1],m=o[5],x=o[9],y=o[2],S=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(Nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(u,E),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Nn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(u,E));break;case"XZY":this._z=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(u,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dl.DEFAULT_ORDER="XYZ";class ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const em=new $,Ss=new ka,Li=new Wt,il=new $,Aa=new $,L_=new $,D_=new ka,tm=new $(1,0,0),nm=new $(0,1,0),im=new $(0,0,1),U_={type:"added"},I_={type:"removed"};class Sn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new $,n=new Dl,r=new ka,o=new $(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new mt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Aa,il,this.up):Li.lookAt(il,Aa,this.up),this.quaternion.setFromRotationMatrix(Li),o&&(Li.extractRotation(o.matrixWorld),Ss.setFromRotationMatrix(Li),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(U_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++){const c=n[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++){const u=o[c];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const y=h[m];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,m=this.material.length;h<m;h++)u.push(c(e.materials,this.material[h]));o.material=u}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(c(e.animations,h))}}if(n){const u=f(e.geometries),h=f(e.materials),m=f(e.textures),x=f(e.images),y=f(e.shapes),S=f(e.skeletons),E=f(e.animations),A=f(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=o,r;function f(u){const h=[];for(const m in u){const x=u[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new $(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new $,Di=new $,ku=new $,Ui=new $,Ms=new $,Es=new $,rm=new $,zu=new $,Bu=new $,Hu=new $;let rl=!1;class ci{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),li.subVectors(e,n),o.cross(li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){li.subVectors(o,n),Di.subVectors(r,n),ku.subVectors(e,n);const f=li.dot(li),u=li.dot(Di),h=li.dot(ku),m=Di.dot(Di),x=Di.dot(ku),y=f*m-u*u;if(y===0)return c.set(0,0,0),null;const S=1/y,E=(m*h-u*x)*S,A=(f*x-u*h)*S;return c.set(1-E-A,A,E)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,n,r,o,c,f,u,h){return rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rl=!0),this.getInterpolation(e,n,r,o,c,f,u,h)}static getInterpolation(e,n,r,o,c,f,u,h){return this.getBarycoord(e,n,r,o,Ui)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Ui.x),h.addScaledVector(f,Ui.y),h.addScaledVector(u,Ui.z),h)}static isFrontFacing(e,n,r,o){return li.subVectors(r,n),Di.subVectors(e,n),li.cross(Di).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),li.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,o,c){return rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rl=!0),ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}getInterpolation(e,n,r,o,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,u;Ms.subVectors(o,r),Es.subVectors(c,r),zu.subVectors(e,r);const h=Ms.dot(zu),m=Es.dot(zu);if(h<=0&&m<=0)return n.copy(r);Bu.subVectors(e,o);const x=Ms.dot(Bu),y=Es.dot(Bu);if(x>=0&&y<=x)return n.copy(o);const S=h*y-x*m;if(S<=0&&h>=0&&x<=0)return f=h/(h-x),n.copy(r).addScaledVector(Ms,f);Hu.subVectors(e,c);const E=Ms.dot(Hu),A=Es.dot(Hu);if(A>=0&&E<=A)return n.copy(c);const T=E*m-h*A;if(T<=0&&m>=0&&A<=0)return u=m/(m-A),n.copy(r).addScaledVector(Es,u);const _=x*A-E*y;if(_<=0&&y-x>=0&&E-A>=0)return rm.subVectors(c,o),u=(y-x)/(y-x+(E-A)),n.copy(o).addScaledVector(rm,u);const v=1/(_+T+S);return f=T*v,u=S*v,n.copy(r).addScaledVector(Ms,f).addScaledVector(Es,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Gu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=S_(e,1),n=Nn(n,0,1),r=Nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Gu(f,c,e+1/3),this.g=Gu(f,c,e),this.b=Gu(f,c,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,n=on){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],u=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=on){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=Pu(e.r),this.g=Pu(e.g),this.b=Pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return At.fromWorkingColorSpace(pn.copy(this),e),Math.round(Nn(pn.r*255,0,255))*65536+Math.round(Nn(pn.g*255,0,255))*256+Math.round(Nn(pn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,o=pn.g,c=pn.b,f=Math.max(r,o,c),u=Math.min(r,o,c);let h,m;const x=(u+f)/2;if(u===f)h=0,m=0;else{const y=f-u;switch(m=x<=.5?y/(f+u):y/(2-f-u),f){case r:h=(o-c)/y+(o<c?6:0);break;case o:h=(c-r)/y+2;break;case c:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=on){At.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,o=pn.b;return e!==on?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(sl);const r=Cu(dr.h,sl.h,n),o=Cu(dr.s,sl.s,n),c=Cu(dr.l,sl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new St;St.NAMES=dg;let F_=0;class Ba extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=Is,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sd&&(r.blendSrc=this.blendSrc),this.blendDst!==ad&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const u in c){const h=c[u];delete h.metadata,f.push(h)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class La extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new $,al=new vt;class Hn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Wp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class fg extends Hn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class hg extends Hn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Gn extends Hn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let O_=0;const Kn=new Wt,Vu=new Sn,ws=new $,kn=new za,Ca=new za,rn=new $;class Jn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?hg:fg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,r){return Kn.makeTranslation(e,n,r),this.applyMatrix4(Kn),this}scale(e,n,r){return Kn.makeScale(e,n,r),this.applyMatrix4(Kn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];kn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const u=n[c];Ca.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(kn.min,Ca.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Ca.max),kn.expandByPoint(rn)):(kn.expandByPoint(Ca.min),kn.expandByPoint(Ca.max))}kn.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)rn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(rn));if(n)for(let c=0,f=n.length;c<f;c++){const u=n[c],h=this.morphTargetsRelative;for(let m=0,x=u.count;m<x;m++)rn.fromBufferAttribute(u,m),h&&(ws.fromBufferAttribute(e,m),rn.add(ws)),o=Math.max(o,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=n.position.array,c=n.normal.array,f=n.uv.array,u=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,m=[],x=[];for(let I=0;I<u;I++)m[I]=new $,x[I]=new $;const y=new $,S=new $,E=new $,A=new vt,T=new vt,_=new vt,v=new $,U=new $;function C(I,ce,he){y.fromArray(o,I*3),S.fromArray(o,ce*3),E.fromArray(o,he*3),A.fromArray(f,I*2),T.fromArray(f,ce*2),_.fromArray(f,he*2),S.sub(y),E.sub(y),T.sub(A),_.sub(A);const Me=1/(T.x*_.y-_.x*T.y);isFinite(Me)&&(v.copy(S).multiplyScalar(_.y).addScaledVector(E,-T.y).multiplyScalar(Me),U.copy(E).multiplyScalar(T.x).addScaledVector(S,-_.x).multiplyScalar(Me),m[I].add(v),m[ce].add(v),m[he].add(v),x[I].add(U),x[ce].add(U),x[he].add(U))}let L=this.groups;L.length===0&&(L=[{start:0,count:r.length}]);for(let I=0,ce=L.length;I<ce;++I){const he=L[I],Me=he.start,X=he.count;for(let te=Me,le=Me+X;te<le;te+=3)C(r[te+0],r[te+1],r[te+2])}const W=new $,z=new $,k=new $,ue=new $;function R(I){k.fromArray(c,I*3),ue.copy(k);const ce=m[I];W.copy(ce),W.sub(k.multiplyScalar(k.dot(ce))).normalize(),z.crossVectors(ue,ce);const Me=z.dot(x[I])<0?-1:1;h[I*4]=W.x,h[I*4+1]=W.y,h[I*4+2]=W.z,h[I*4+3]=Me}for(let I=0,ce=L.length;I<ce;++I){const he=L[I],Me=he.start,X=he.count;for(let te=Me,le=Me+X;te<le;te+=3)R(r[te+0]),R(r[te+1]),R(r[te+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const o=new $,c=new $,f=new $,u=new $,h=new $,m=new $,x=new $,y=new $;if(e)for(let S=0,E=e.count;S<E;S+=3){const A=e.getX(S+0),T=e.getX(S+1),_=e.getX(S+2);o.fromBufferAttribute(n,A),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),x.subVectors(f,c),y.subVectors(o,c),x.cross(y),u.fromBufferAttribute(r,A),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,_),u.add(x),h.add(x),m.add(x),r.setXYZ(A,u.x,u.y,u.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let S=0,E=n.count;S<E;S+=3)o.fromBufferAttribute(n,S+0),c.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),x.subVectors(f,c),y.subVectors(o,c),x.cross(y),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(u,h){const m=u.array,x=u.itemSize,y=u.normalized,S=new m.constructor(h.length*x);let E=0,A=0;for(let T=0,_=h.length;T<_;T++){u.isInterleavedBufferAttribute?E=h[T]*u.data.stride+u.offset:E=h[T]*x;for(let v=0;v<x;v++)S[A++]=m[E++]}return new Hn(S,x,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,r=this.index.array,o=this.attributes;for(const u in o){const h=o[u],m=e(h,r);n.setAttribute(u,m)}const c=this.morphAttributes;for(const u in c){const h=[],m=c[u];for(let x=0,y=m.length;x<y;x++){const S=m[x],E=e(S,r);h.push(E)}n.morphAttributes[u]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,h=f.length;u<h;u++){const m=f[u];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let y=0,S=m.length;y<S;y++){const E=m[y];x.push(E.toJSON(e.data))}x.length>0&&(o[h]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],y=c[m];for(let S=0,E=y.length;S<E;S++)x.push(y[S].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,x=f.length;m<x;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sm=new Wt,Ir=new cg,ol=new Ll,am=new $,Ts=new $,bs=new $,As=new $,ju=new $,ll=new $,cl=new vt,ul=new vt,dl=new vt,om=new $,lm=new $,cm=new $,fl=new $,hl=new $;class fi extends Sn{constructor(e=new Jn,n=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const u=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(c&&u){ll.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const x=u[h],y=c[h];x!==0&&(ju.fromBufferAttribute(y,e),f?ll.addScaledVector(ju,x):ll.addScaledVector(ju.sub(n),x))}n.add(ll)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(ol.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(ol,am)===null||Ir.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(sm.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(sm),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,u=c.index,h=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,y=c.attributes.normal,S=c.groups,E=c.drawRange;if(u!==null)if(Array.isArray(f))for(let A=0,T=S.length;A<T;A++){const _=S[A],v=f[_.materialIndex],U=Math.max(_.start,E.start),C=Math.min(u.count,Math.min(_.start+_.count,E.start+E.count));for(let L=U,W=C;L<W;L+=3){const z=u.getX(L),k=u.getX(L+1),ue=u.getX(L+2);o=pl(this,v,e,r,m,x,y,z,k,ue),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const A=Math.max(0,E.start),T=Math.min(u.count,E.start+E.count);for(let _=A,v=T;_<v;_+=3){const U=u.getX(_),C=u.getX(_+1),L=u.getX(_+2);o=pl(this,f,e,r,m,x,y,U,C,L),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(f))for(let A=0,T=S.length;A<T;A++){const _=S[A],v=f[_.materialIndex],U=Math.max(_.start,E.start),C=Math.min(h.count,Math.min(_.start+_.count,E.start+E.count));for(let L=U,W=C;L<W;L+=3){const z=L,k=L+1,ue=L+2;o=pl(this,v,e,r,m,x,y,z,k,ue),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const A=Math.max(0,E.start),T=Math.min(h.count,E.start+E.count);for(let _=A,v=T;_<v;_+=3){const U=_,C=_+1,L=_+2;o=pl(this,f,e,r,m,x,y,U,C,L),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function k_(s,e,n,r,o,c,f,u){let h;if(e.side===Ln?h=r.intersectTriangle(f,c,o,!0,u):h=r.intersectTriangle(o,c,f,e.side===xr,u),h===null)return null;hl.copy(u),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,o,c,f,u,h,m){s.getVertexPosition(u,Ts),s.getVertexPosition(h,bs),s.getVertexPosition(m,As);const x=k_(s,e,n,r,Ts,bs,As,fl);if(x){o&&(cl.fromBufferAttribute(o,u),ul.fromBufferAttribute(o,h),dl.fromBufferAttribute(o,m),x.uv=ci.getInterpolation(fl,Ts,bs,As,cl,ul,dl,new vt)),c&&(cl.fromBufferAttribute(c,u),ul.fromBufferAttribute(c,h),dl.fromBufferAttribute(c,m),x.uv1=ci.getInterpolation(fl,Ts,bs,As,cl,ul,dl,new vt),x.uv2=x.uv1),f&&(om.fromBufferAttribute(f,u),lm.fromBufferAttribute(f,h),cm.fromBufferAttribute(f,m),x.normal=ci.getInterpolation(fl,Ts,bs,As,om,lm,cm,new $),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:u,b:h,c:m,normal:new $,materialIndex:0};ci.getNormal(Ts,bs,As,y.normal),x.face=y}return x}class Ha extends Jn{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const u=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const h=[],m=[],x=[],y=[];let S=0,E=0;A("z","y","x",-1,-1,r,n,e,f,c,0),A("z","y","x",1,-1,r,n,-e,f,c,1),A("x","z","y",1,1,e,r,n,o,f,2),A("x","z","y",1,-1,e,r,-n,o,f,3),A("x","y","z",1,-1,e,n,r,o,c,4),A("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(y,2));function A(T,_,v,U,C,L,W,z,k,ue,R){const I=L/k,ce=W/ue,he=L/2,Me=W/2,X=z/2,te=k+1,le=ue+1;let fe=0,q=0;const ee=new $;for(let P=0;P<le;P++){const M=P*ce-Me;for(let O=0;O<te;O++){const B=O*I-he;ee[T]=B*U,ee[_]=M*C,ee[v]=X,m.push(ee.x,ee.y,ee.z),ee[T]=0,ee[_]=0,ee[v]=z>0?1:-1,x.push(ee.x,ee.y,ee.z),y.push(O/k),y.push(1-P/ue),fe+=1}}for(let P=0;P<ue;P++)for(let M=0;M<k;M++){const O=S+M+te*P,B=S+M+te*(P+1),V=S+(M+1)+te*(P+1),Q=S+(M+1)+te*P;h.push(O,B,Q),h.push(B,V,Q),q+=6}u.addGroup(E,q,R),E+=q,S+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=Bs(s[n]);for(const o in r)e[o]=r[o]}return e}function z_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function pg(s){return s.getRenderTarget()===null?s.outputColorSpace:At.workingColorSpace}const B_={clone:Bs,merge:_n};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class mg extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends mg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/h,n-=f.offsetY*r/m,o*=f.width/h,r*=f.height/m}const u=this.filmOffset;u!==0&&(c+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Rs=1;class V_ extends Sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const c=new zn(Cs,Rs,e,n);c.layers=this.layers,this.add(c);const f=new zn(Cs,Rs,e,n);f.layers=this.layers,this.add(f);const u=new zn(Cs,Rs,e,n);u.layers=this.layers,this.add(u);const h=new zn(Cs,Rs,e,n);h.layers=this.layers,this.add(h);const m=new zn(Cs,Rs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,u,h]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,u,h,m,x]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,u),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(y,S,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class gg extends Bn{constructor(e,n,r,o,c,f,u,h,m,x){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,r,o,c,f,u,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j_ extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];n.encoding!==void 0&&(Na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vr?on:Qn),this.texture=new gg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ha(5,5,5),c=new Wr({name:"CubemapFromEquirect",uniforms:Bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:pr});c.uniforms.tEquirect.value=n;const f=new fi(o,c),u=n.minFilter;return n.minFilter===Da&&(n.minFilter=Zn),new V_(1,10,this).update(e,f),n.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}const Wu=new $,W_=new $,X_=new mt;class Or{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Wu.subVectors(r,n).cross(W_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||X_.getNormalMatrix(e),o=this.coplanarPoint(Wu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Ll,ml=new $;class wd{constructor(e=new Or,n=new Or,r=new Or,o=new Or,c=new Or,f=new Or){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(o),u[4].copy(c),u[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,o=e.elements,c=o[0],f=o[1],u=o[2],h=o[3],m=o[4],x=o[5],y=o[6],S=o[7],E=o[8],A=o[9],T=o[10],_=o[11],v=o[12],U=o[13],C=o[14],L=o[15];if(r[0].setComponents(h-c,S-m,_-E,L-v).normalize(),r[1].setComponents(h+c,S+m,_+E,L+v).normalize(),r[2].setComponents(h+f,S+x,_+A,L+U).normalize(),r[3].setComponents(h-f,S-x,_-A,L-U).normalize(),r[4].setComponents(h-u,S-y,_-T,L-C).normalize(),n===ki)r[5].setComponents(h+u,S+y,_+T,L+C).normalize();else if(n===Cl)r[5].setComponents(u,y,T,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ml.x=o.normal.x>0?e.max.x:e.min.x,ml.y=o.normal.y>0?e.max.y:e.min.y,ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xg(){let s=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function q_(s,e){const n=e.isWebGL2,r=new WeakMap;function o(m,x){const y=m.array,S=m.usage,E=y.byteLength,A=s.createBuffer();s.bindBuffer(x,A),s.bufferData(x,y,S),m.onUploadCallback();let T;if(y instanceof Float32Array)T=s.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)T=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=s.UNSIGNED_SHORT;else if(y instanceof Int16Array)T=s.SHORT;else if(y instanceof Uint32Array)T=s.UNSIGNED_INT;else if(y instanceof Int32Array)T=s.INT;else if(y instanceof Int8Array)T=s.BYTE;else if(y instanceof Uint8Array)T=s.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)T=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:A,type:T,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:E}}function c(m,x,y){const S=x.array,E=x._updateRange,A=x.updateRanges;if(s.bindBuffer(y,m),E.count===-1&&A.length===0&&s.bufferSubData(y,0,S),A.length!==0){for(let T=0,_=A.length;T<_;T++){const v=A[T];n?s.bufferSubData(y,v.start*S.BYTES_PER_ELEMENT,S,v.start,v.count):s.bufferSubData(y,v.start*S.BYTES_PER_ELEMENT,S.subarray(v.start,v.start+v.count))}x.clearUpdateRanges()}E.count!==-1&&(n?s.bufferSubData(y,E.offset*S.BYTES_PER_ELEMENT,S,E.offset,E.count):s.bufferSubData(y,E.offset*S.BYTES_PER_ELEMENT,S.subarray(E.offset,E.offset+E.count)),E.count=-1),x.onUploadCallback()}function f(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);x&&(s.deleteBuffer(x.buffer),r.delete(m))}function h(m,x){if(m.isGLBufferAttribute){const S=r.get(m);(!S||S.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,o(m,x));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(y.buffer,m,x),y.version=m.version}}return{get:f,remove:u,update:h}}class Td extends Jn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,u=Math.floor(r),h=Math.floor(o),m=u+1,x=h+1,y=e/u,S=n/h,E=[],A=[],T=[],_=[];for(let v=0;v<x;v++){const U=v*S-f;for(let C=0;C<m;C++){const L=C*y-c;A.push(L,-U,0),T.push(0,0,1),_.push(C/u),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<u;U++){const C=U+m*v,L=U+m*(v+1),W=U+1+m*(v+1),z=U+1+m*v;E.push(C,L,z),E.push(L,W,z)}this.setIndex(E),this.setAttribute("position",new Gn(A,3)),this.setAttribute("normal",new Gn(T,3)),this.setAttribute("uv",new Gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
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
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
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
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oy=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xy=`#define PI 3.141592653589793
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
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_y=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`
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
}`,by=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,By=`uniform bool receiveShadow;
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
#endif`,Hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#endif`,qy=`struct PhysicalMaterial {
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
}`,Yy=`
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rS=`#if defined( USE_POINTS_UV )
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
#endif`,sS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
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
#endif`,cS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
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
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
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
#endif`,xS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LS=`float getShadowMask() {
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
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,US=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,eM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,tM=`#define DISTANCE
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
}`,nM=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`#include <common>
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
}`,lM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cM=`#define LAMBERT
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
}`,uM=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hM=`#define NORMAL
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
}`,pM=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
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
}`,gM=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xM=`#define STANDARD
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
}`,vM=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_M=`#define TOON
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
}`,yM=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,SM=`uniform float size;
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
}`,MM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,wM=`uniform vec3 color;
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
}`,TM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ut={alphahash_fragment:Y_,alphahash_pars_fragment:$_,alphamap_fragment:K_,alphamap_pars_fragment:Z_,alphatest_fragment:Q_,alphatest_pars_fragment:J_,aomap_fragment:ey,aomap_pars_fragment:ty,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:ry,beginnormal_vertex:sy,bsdfs:ay,iridescence_fragment:oy,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:hy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:xy,cube_uv_reflection_fragment:vy,defaultnormal_vertex:_y,displacementmap_pars_vertex:yy,displacementmap_vertex:Sy,emissivemap_fragment:My,emissivemap_pars_fragment:Ey,colorspace_fragment:wy,colorspace_pars_fragment:Ty,envmap_fragment:by,envmap_common_pars_fragment:Ay,envmap_pars_fragment:Cy,envmap_pars_vertex:Ry,envmap_physical_pars_fragment:Hy,envmap_vertex:Py,fog_vertex:Ny,fog_pars_vertex:Ly,fog_fragment:Dy,fog_pars_fragment:Uy,gradientmap_pars_fragment:Iy,lightmap_fragment:Fy,lightmap_pars_fragment:Oy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:zy,lights_pars_begin:By,lights_toon_fragment:Gy,lights_toon_pars_fragment:Vy,lights_phong_fragment:jy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Xy,lights_physical_pars_fragment:qy,lights_fragment_begin:Yy,lights_fragment_maps:$y,lights_fragment_end:Ky,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:Jy,logdepthbuf_vertex:eS,map_fragment:tS,map_pars_fragment:nS,map_particle_fragment:iS,map_particle_pars_fragment:rS,metalnessmap_fragment:sS,metalnessmap_pars_fragment:aS,morphcolor_vertex:oS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:xS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:yS,opaque_fragment:SS,packing:MS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:bS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:PS,shadowmap_vertex:NS,shadowmask_pars_fragment:LS,skinbase_vertex:DS,skinning_pars_vertex:US,skinning_vertex:IS,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:kS,tonemapping_fragment:zS,tonemapping_pars_fragment:BS,transmission_fragment:HS,transmission_pars_fragment:GS,uv_pars_fragment:VS,uv_pars_vertex:jS,uv_vertex:WS,worldpos_vertex:XS,background_vert:qS,background_frag:YS,backgroundCube_vert:$S,backgroundCube_frag:KS,cube_vert:ZS,cube_frag:QS,depth_vert:JS,depth_frag:eM,distanceRGBA_vert:tM,distanceRGBA_frag:nM,equirect_vert:iM,equirect_frag:rM,linedashed_vert:sM,linedashed_frag:aM,meshbasic_vert:oM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:uM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:hM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:xM,meshphysical_frag:vM,meshtoon_vert:_M,meshtoon_frag:yM,points_vert:SM,points_frag:MM,shadow_vert:EM,shadow_frag:wM,sprite_vert:TM,sprite_frag:bM},Re={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},vi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new St(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new St(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};vi.physical={uniforms:_n([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const gl={r:0,b:0,g:0};function AM(s,e,n,r,o,c,f){const u=new St(0);let h=c===!0?0:1,m,x,y=null,S=0,E=null;function A(_,v){let U=!1,C=v.isScene===!0?v.background:null;C&&C.isTexture&&(C=(v.backgroundBlurriness>0?n:e).get(C)),C===null?T(u,h):C&&C.isColor&&(T(C,1),U=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Pl)?(x===void 0&&(x=new fi(new Ha(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Bs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(W,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),x.material.uniforms.envMap.value=C,x.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,x.material.toneMapped=At.getTransfer(C.colorSpace)!==Ut,(y!==C||S!==C.version||E!==s.toneMapping)&&(x.material.needsUpdate=!0,y=C,S=C.version,E=s.toneMapping),x.layers.enableAll(),_.unshift(x,x.geometry,x.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new fi(new Td(2,2),new Wr({name:"BackgroundMaterial",uniforms:Bs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=At.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||S!==C.version||E!==s.toneMapping)&&(m.material.needsUpdate=!0,y=C,S=C.version,E=s.toneMapping),m.layers.enableAll(),_.unshift(m,m.geometry,m.material,0,0,null))}function T(_,v){_.getRGB(gl,pg(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,v,f)}return{getClearColor:function(){return u},setClearColor:function(_,v=1){u.set(_),h=v,T(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,T(u,h)},render:A}}function CM(s,e,n,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||c!==null,u={},h=_(null);let m=h,x=!1;function y(X,te,le,fe,q){let ee=!1;if(f){const P=T(fe,le,te);m!==P&&(m=P,E(m.object)),ee=v(X,fe,le,q),ee&&U(X,fe,le,q)}else{const P=te.wireframe===!0;(m.geometry!==fe.id||m.program!==le.id||m.wireframe!==P)&&(m.geometry=fe.id,m.program=le.id,m.wireframe=P,ee=!0)}q!==null&&n.update(q,s.ELEMENT_ARRAY_BUFFER),(ee||x)&&(x=!1,ue(X,te,le,fe),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function S(){return r.isWebGL2?s.createVertexArray():c.createVertexArrayOES()}function E(X){return r.isWebGL2?s.bindVertexArray(X):c.bindVertexArrayOES(X)}function A(X){return r.isWebGL2?s.deleteVertexArray(X):c.deleteVertexArrayOES(X)}function T(X,te,le){const fe=le.wireframe===!0;let q=u[X.id];q===void 0&&(q={},u[X.id]=q);let ee=q[te.id];ee===void 0&&(ee={},q[te.id]=ee);let P=ee[fe];return P===void 0&&(P=_(S()),ee[fe]=P),P}function _(X){const te=[],le=[],fe=[];for(let q=0;q<o;q++)te[q]=0,le[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:le,attributeDivisors:fe,object:X,attributes:{},index:null}}function v(X,te,le,fe){const q=m.attributes,ee=te.attributes;let P=0;const M=le.getAttributes();for(const O in M)if(M[O].location>=0){const V=q[O];let Q=ee[O];if(Q===void 0&&(O==="instanceMatrix"&&X.instanceMatrix&&(Q=X.instanceMatrix),O==="instanceColor"&&X.instanceColor&&(Q=X.instanceColor)),V===void 0||V.attribute!==Q||Q&&V.data!==Q.data)return!0;P++}return m.attributesNum!==P||m.index!==fe}function U(X,te,le,fe){const q={},ee=te.attributes;let P=0;const M=le.getAttributes();for(const O in M)if(M[O].location>=0){let V=ee[O];V===void 0&&(O==="instanceMatrix"&&X.instanceMatrix&&(V=X.instanceMatrix),O==="instanceColor"&&X.instanceColor&&(V=X.instanceColor));const Q={};Q.attribute=V,V&&V.data&&(Q.data=V.data),q[O]=Q,P++}m.attributes=q,m.attributesNum=P,m.index=fe}function C(){const X=m.newAttributes;for(let te=0,le=X.length;te<le;te++)X[te]=0}function L(X){W(X,0)}function W(X,te){const le=m.newAttributes,fe=m.enabledAttributes,q=m.attributeDivisors;le[X]=1,fe[X]===0&&(s.enableVertexAttribArray(X),fe[X]=1),q[X]!==te&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,te),q[X]=te)}function z(){const X=m.newAttributes,te=m.enabledAttributes;for(let le=0,fe=te.length;le<fe;le++)te[le]!==X[le]&&(s.disableVertexAttribArray(le),te[le]=0)}function k(X,te,le,fe,q,ee,P){P===!0?s.vertexAttribIPointer(X,te,le,q,ee):s.vertexAttribPointer(X,te,le,fe,q,ee)}function ue(X,te,le,fe){if(r.isWebGL2===!1&&(X.isInstancedMesh||fe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const q=fe.attributes,ee=le.getAttributes(),P=te.defaultAttributeValues;for(const M in ee){const O=ee[M];if(O.location>=0){let B=q[M];if(B===void 0&&(M==="instanceMatrix"&&X.instanceMatrix&&(B=X.instanceMatrix),M==="instanceColor"&&X.instanceColor&&(B=X.instanceColor)),B!==void 0){const V=B.normalized,Q=B.itemSize,de=n.get(B);if(de===void 0)continue;const ae=de.buffer,pe=de.type,ve=de.bytesPerElement,be=r.isWebGL2===!0&&(pe===s.INT||pe===s.UNSIGNED_INT||B.gpuType===Km);if(B.isInterleavedBufferAttribute){const ke=B.data,Y=ke.stride,ft=B.offset;if(ke.isInstancedInterleavedBuffer){for(let Te=0;Te<O.locationSize;Te++)W(O.location+Te,ke.meshPerAttribute);X.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Te=0;Te<O.locationSize;Te++)L(O.location+Te);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Te=0;Te<O.locationSize;Te++)k(O.location+Te,Q/O.locationSize,pe,V,Y*ve,(ft+Q/O.locationSize*Te)*ve,be)}else{if(B.isInstancedBufferAttribute){for(let ke=0;ke<O.locationSize;ke++)W(O.location+ke,B.meshPerAttribute);X.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ke=0;ke<O.locationSize;ke++)L(O.location+ke);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let ke=0;ke<O.locationSize;ke++)k(O.location+ke,Q/O.locationSize,pe,V,Q*ve,Q/O.locationSize*ke*ve,be)}}else if(P!==void 0){const V=P[M];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(O.location,V);break;case 3:s.vertexAttrib3fv(O.location,V);break;case 4:s.vertexAttrib4fv(O.location,V);break;default:s.vertexAttrib1fv(O.location,V)}}}}z()}function R(){he();for(const X in u){const te=u[X];for(const le in te){const fe=te[le];for(const q in fe)A(fe[q].object),delete fe[q];delete te[le]}delete u[X]}}function I(X){if(u[X.id]===void 0)return;const te=u[X.id];for(const le in te){const fe=te[le];for(const q in fe)A(fe[q].object),delete fe[q];delete te[le]}delete u[X.id]}function ce(X){for(const te in u){const le=u[te];if(le[X.id]===void 0)continue;const fe=le[X.id];for(const q in fe)A(fe[q].object),delete fe[q];delete le[X.id]}}function he(){Me(),x=!0,m!==h&&(m=h,E(m.object))}function Me(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:y,reset:he,resetDefaultState:Me,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:ce,initAttributes:C,enableAttribute:L,disableUnusedAttributes:z}}function RM(s,e,n,r){const o=r.isWebGL2;let c;function f(x){c=x}function u(x,y){s.drawArrays(c,x,y),n.update(y,c,1)}function h(x,y,S){if(S===0)return;let E,A;if(o)E=s,A="drawArraysInstanced";else if(E=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[A](c,x,y,S),n.update(y,c,S)}function m(x,y,S){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<S;A++)this.render(x[A],y[A]);else{E.multiDrawArraysWEBGL(c,x,0,y,0,S);let A=0;for(let T=0;T<S;T++)A+=y[T];n.update(A,c,1)}}this.setMode=f,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function PM(s,e,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=f||e.has("WEBGL_draw_buffers"),x=n.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),A=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),T=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,L=f||e.has("OES_texture_float"),W=C&&L,z=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:c,precision:u,logarithmicDepthBuffer:x,maxTextures:y,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:A,maxAttributes:T,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:U,vertexTextures:C,floatFragmentTextures:L,floatVertexTextures:W,maxSamples:z}}function NM(s){const e=this;let n=null,r=0,o=!1,c=!1;const f=new Or,u=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||r!==0||o;return o=S,r=y.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,S){n=x(y,S,0)},this.setState=function(y,S,E){const A=y.clippingPlanes,T=y.clipIntersection,_=y.clipShadows,v=s.get(y);if(!o||A===null||A.length===0||c&&!_)c?x(null):m();else{const U=c?0:r,C=U*4;let L=v.clippingState||null;h.value=L,L=x(A,S,C,E);for(let W=0;W!==C;++W)L[W]=n[W];v.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(y,S,E,A){const T=y!==null?y.length:0;let _=null;if(T!==0){if(_=h.value,A!==!0||_===null){const v=E+T*4,U=S.matrixWorldInverse;u.getNormalMatrix(U),(_===null||_.length<v)&&(_=new Float32Array(v));for(let C=0,L=E;C!==T;++C,L+=4)f.copy(y[C]).applyMatrix4(U,u),f.normal.toArray(_,L),_[L+3]=f.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function LM(s){let e=new WeakMap;function n(f,u){return u===od?f.mapping=Os:u===ld&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===od||u===ld)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new j_(h.height/2);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",o),n(m.texture,f.mapping)}else return null}}return f}function o(f){const u=f.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class DM extends mg{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,u=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,u-=x*this.view.offsetY,h=u-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,um=[.125,.215,.35,.446,.526,.582],Br=20,Xu=new DM,dm=new St;let qu=null,Yu=0,$u=0;const kr=(1+Math.sqrt(5))/2,Ps=1/kr,fm=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,kr,Ps),new $(0,kr,-Ps),new $(Ps,0,kr),new $(-Ps,0,kr),new $(kr,Ps,0),new $(-kr,Ps,0)];class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Yu,$u),e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ua,format:di,colorSpace:zi,depthBuffer:!1},o=pm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(c)),this._blurMaterial=IM(c,e,n)}return o}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,Xu)}_sceneToCubeUV(e,n,r,o){const u=new zn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(dm),x.toneMapping=mr,x.autoClear=!1;const E=new La({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),A=new fi(new Ha,E);let T=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,T=!0):(E.color.copy(dm),T=!0);for(let v=0;v<6;v++){const U=v%3;U===0?(u.up.set(0,h[v],0),u.lookAt(m[v],0,0)):U===1?(u.up.set(0,0,h[v]),u.lookAt(0,m[v],0)):(u.up.set(0,h[v],0),u.lookAt(0,0,m[v]));const C=this._cubeSize;xl(o,U*C,v>2?C:0,C,C),x.setRenderTarget(o),T&&x.render(A,u),x.render(e,u)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=S,x.autoClear=y,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Os||e.mapping===ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new fi(this._lodPlanes[0],c),u=c.uniforms;u.envMap.value=e;const h=this._cubeSize;xl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,Xu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=fm[(o-1)%fm.length];this._blur(e,o-1,o,c,f)}n.autoClear=r}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,u){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,y=new fi(this._lodPlanes[o],m),S=m.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Br-1),T=c/A,_=isFinite(c)?1+Math.floor(x*T):Br;_>Br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Br}`);const v=[];let U=0;for(let k=0;k<Br;++k){const ue=k/T,R=Math.exp(-ue*ue/2);v.push(R),k===0?U+=R:k<_&&(U+=2*R)}for(let k=0;k<v.length;k++)v[k]=v[k]/U;S.envMap.value=e.texture,S.samples.value=_,S.weights.value=v,S.latitudinal.value=f==="latitudinal",u&&(S.poleAxis.value=u);const{_lodMax:C}=this;S.dTheta.value=A,S.mipInt.value=C-r;const L=this._sizeLods[o],W=3*L*(o>C-Ns?o-C+Ns:0),z=4*(this._cubeSize-L);xl(n,W,z,3*L,2*L),h.setRenderTarget(n),h.render(y,Xu)}}function UM(s){const e=[],n=[],r=[];let o=s;const c=s-Ns+1+um.length;for(let f=0;f<c;f++){const u=Math.pow(2,o);n.push(u);let h=1/u;f>s-Ns?h=um[f-s+Ns-1]:f===0&&(h=0),r.push(h);const m=1/(u-2),x=-m,y=1+m,S=[x,x,y,x,y,y,x,x,y,y,x,y],E=6,A=6,T=3,_=2,v=1,U=new Float32Array(T*A*E),C=new Float32Array(_*A*E),L=new Float32Array(v*A*E);for(let z=0;z<E;z++){const k=z%3*2/3-1,ue=z>2?0:-1,R=[k,ue,0,k+2/3,ue,0,k+2/3,ue+1,0,k,ue,0,k+2/3,ue+1,0,k,ue+1,0];U.set(R,T*A*z),C.set(S,_*A*z);const I=[z,z,z,z,z,z];L.set(I,v*A*z)}const W=new Jn;W.setAttribute("position",new Hn(U,T)),W.setAttribute("uv",new Hn(C,_)),W.setAttribute("faceIndex",new Hn(L,v)),e.push(W),o>Ns&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function pm(s,e,n){const r=new jr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function IM(s,e,n){const r=new Float32Array(Br),o=new $(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:bd(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function mm(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function gm(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function FM(s){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const h=u.mapping,m=h===od||h===ld,x=h===Os||h===ks;if(m||x)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let y=e.get(u);return n===null&&(n=new hm(s)),y=m?n.fromEquirectangular(u,y):n.fromCubemap(u,y),e.set(u,y),y.texture}else{if(e.has(u))return e.get(u).texture;{const y=u.image;if(m&&y&&y.height>0||x&&y&&o(y)){n===null&&(n=new hm(s));const S=m?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,S),u.addEventListener("dispose",c),S.texture}else return null}}}return u}function o(u){let h=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&h++;return h===m}function c(u){const h=u.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function OM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const o=n(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function kM(s,e,n,r){const o={},c=new WeakMap;function f(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);for(const A in S.morphAttributes){const T=S.morphAttributes[A];for(let _=0,v=T.length;_<v;_++)e.remove(T[_])}S.removeEventListener("dispose",f),delete o[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function u(y,S){return o[S.id]===!0||(S.addEventListener("dispose",f),o[S.id]=!0,n.memory.geometries++),S}function h(y){const S=y.attributes;for(const A in S)e.update(S[A],s.ARRAY_BUFFER);const E=y.morphAttributes;for(const A in E){const T=E[A];for(let _=0,v=T.length;_<v;_++)e.update(T[_],s.ARRAY_BUFFER)}}function m(y){const S=[],E=y.index,A=y.attributes.position;let T=0;if(E!==null){const U=E.array;T=E.version;for(let C=0,L=U.length;C<L;C+=3){const W=U[C+0],z=U[C+1],k=U[C+2];S.push(W,z,z,k,k,W)}}else if(A!==void 0){const U=A.array;T=A.version;for(let C=0,L=U.length/3-1;C<L;C+=3){const W=C+0,z=C+1,k=C+2;S.push(W,z,z,k,k,W)}}else return;const _=new(sg(S)?hg:fg)(S,1);_.version=T;const v=c.get(y);v&&e.remove(v),c.set(y,_)}function x(y){const S=c.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&m(y)}else m(y);return c.get(y)}return{get:u,update:h,getWireframeAttribute:x}}function zM(s,e,n,r){const o=r.isWebGL2;let c;function f(E){c=E}let u,h;function m(E){u=E.type,h=E.bytesPerElement}function x(E,A){s.drawElements(c,A,u,E*h),n.update(A,c,1)}function y(E,A,T){if(T===0)return;let _,v;if(o)_=s,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](c,A,u,E*h,T),n.update(A,c,T)}function S(E,A,T){if(T===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<T;v++)this.render(E[v]/h,A[v]);else{_.multiDrawElementsWEBGL(c,A,0,u,E,0,T);let v=0;for(let U=0;U<T;U++)v+=A[U];n.update(v,c,1)}}this.setMode=f,this.setIndex=m,this.render=x,this.renderInstances=y,this.renderMultiDraw=S}function BM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,u){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=u*(c/3);break;case s.LINES:n.lines+=u*(c/2);break;case s.LINE_STRIP:n.lines+=u*(c-1);break;case s.LINE_LOOP:n.lines+=u*c;break;case s.POINTS:n.points+=u*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function HM(s,e){return s[0]-e[0]}function GM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function VM(s,e,n){const r={},o=new Float32Array(8),c=new WeakMap,f=new Ot,u=[];for(let m=0;m<8;m++)u[m]=[m,0];function h(m,x,y){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,T=A!==void 0?A.length:0;let _=c.get(x);if(_===void 0||_.count!==T){let te=function(){Me.dispose(),c.delete(x),x.removeEventListener("dispose",te)};var E=te;_!==void 0&&_.texture.dispose();const C=x.morphAttributes.position!==void 0,L=x.morphAttributes.normal!==void 0,W=x.morphAttributes.color!==void 0,z=x.morphAttributes.position||[],k=x.morphAttributes.normal||[],ue=x.morphAttributes.color||[];let R=0;C===!0&&(R=1),L===!0&&(R=2),W===!0&&(R=3);let I=x.attributes.position.count*R,ce=1;I>e.maxTextureSize&&(ce=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const he=new Float32Array(I*ce*4*T),Me=new lg(he,I,ce,T);Me.type=hr,Me.needsUpdate=!0;const X=R*4;for(let le=0;le<T;le++){const fe=z[le],q=k[le],ee=ue[le],P=I*ce*4*le;for(let M=0;M<fe.count;M++){const O=M*X;C===!0&&(f.fromBufferAttribute(fe,M),he[P+O+0]=f.x,he[P+O+1]=f.y,he[P+O+2]=f.z,he[P+O+3]=0),L===!0&&(f.fromBufferAttribute(q,M),he[P+O+4]=f.x,he[P+O+5]=f.y,he[P+O+6]=f.z,he[P+O+7]=0),W===!0&&(f.fromBufferAttribute(ee,M),he[P+O+8]=f.x,he[P+O+9]=f.y,he[P+O+10]=f.z,he[P+O+11]=ee.itemSize===4?f.w:1)}}_={count:T,texture:Me,size:new vt(I,ce)},c.set(x,_),x.addEventListener("dispose",te)}let v=0;for(let C=0;C<S.length;C++)v+=S[C];const U=x.morphTargetsRelative?1:1-v;y.getUniforms().setValue(s,"morphTargetBaseInfluence",U),y.getUniforms().setValue(s,"morphTargetInfluences",S),y.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),y.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const A=S===void 0?0:S.length;let T=r[x.id];if(T===void 0||T.length!==A){T=[];for(let L=0;L<A;L++)T[L]=[L,0];r[x.id]=T}for(let L=0;L<A;L++){const W=T[L];W[0]=L,W[1]=S[L]}T.sort(GM);for(let L=0;L<8;L++)L<A&&T[L][1]?(u[L][0]=T[L][0],u[L][1]=T[L][1]):(u[L][0]=Number.MAX_SAFE_INTEGER,u[L][1]=0);u.sort(HM);const _=x.morphAttributes.position,v=x.morphAttributes.normal;let U=0;for(let L=0;L<8;L++){const W=u[L],z=W[0],k=W[1];z!==Number.MAX_SAFE_INTEGER&&k?(_&&x.getAttribute("morphTarget"+L)!==_[z]&&x.setAttribute("morphTarget"+L,_[z]),v&&x.getAttribute("morphNormal"+L)!==v[z]&&x.setAttribute("morphNormal"+L,v[z]),o[L]=k,U+=k):(_&&x.hasAttribute("morphTarget"+L)===!0&&x.deleteAttribute("morphTarget"+L),v&&x.hasAttribute("morphNormal"+L)===!0&&x.deleteAttribute("morphNormal"+L),o[L]=0)}const C=x.morphTargetsRelative?1:1-U;y.getUniforms().setValue(s,"morphTargetBaseInfluence",C),y.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:h}}function jM(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,x=h.geometry,y=e.get(h,x);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return y}function f(){o=new WeakMap}function u(h){const m=h.target;m.removeEventListener("dispose",u),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class vg extends Bn{constructor(e,n,r,o,c,f,u,h,m,x){if(x=x!==void 0?x:Gr,x!==Gr&&x!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Gr&&(r=fr),r===void 0&&x===zs&&(r=Hr),super(null,o,c,f,u,h,x,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _g=new Bn,yg=new vg(1,1);yg.compareFunction=rg;const Sg=new lg,Mg=new A_,Eg=new gg,xm=[],vm=[],_m=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Vs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=xm[o];if(c===void 0&&(c=new Float32Array(o),xm[o]=c),e!==0){r.toArray(c,0);for(let f=1,u=0;f!==e;++f)u+=n,s[f].toArray(c,u)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ul(s,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function WM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function $M(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Qt(n,r)}}function KM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;ym.set(r),s.uniformMatrix3fv(this.addr,!1,ym),Qt(n,r)}}function ZM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;_m.set(r),s.uniformMatrix4fv(this.addr,!1,_m),Qt(n,r)}}function QM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function e1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function t1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function n1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function i1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function r1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function s1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function a1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);const c=this.type===s.SAMPLER_2D_SHADOW?yg:_g;n.setTexture2D(e||c,o)}function o1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Mg,o)}function l1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Eg,o)}function c1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Sg,o)}function u1(s){switch(s){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return r1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function d1(s,e){s.uniform1fv(this.addr,e)}function f1(s,e){const n=Vs(e,this.size,2);s.uniform2fv(this.addr,n)}function h1(s,e){const n=Vs(e,this.size,3);s.uniform3fv(this.addr,n)}function p1(s,e){const n=Vs(e,this.size,4);s.uniform4fv(this.addr,n)}function m1(s,e){const n=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function g1(s,e){const n=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function x1(s,e){const n=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function v1(s,e){s.uniform1iv(this.addr,e)}function _1(s,e){s.uniform2iv(this.addr,e)}function y1(s,e){s.uniform3iv(this.addr,e)}function S1(s,e){s.uniform4iv(this.addr,e)}function M1(s,e){s.uniform1uiv(this.addr,e)}function E1(s,e){s.uniform2uiv(this.addr,e)}function w1(s,e){s.uniform3uiv(this.addr,e)}function T1(s,e){s.uniform4uiv(this.addr,e)}function b1(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==o;++f)n.setTexture2D(e[f]||_g,c[f])}function A1(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||Mg,c[f])}function C1(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||Eg,c[f])}function R1(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||Sg,c[f])}function P1(s){switch(s){case 5126:return d1;case 35664:return f1;case 35665:return h1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return x1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return y1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return E1;case 36295:return w1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return R1}}class N1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=u1(n.type)}}class L1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=P1(n.type)}}class D1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const u=o[c];u.setValue(e,n[u.id],r)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function U1(s,e,n){const r=s.name,o=r.length;for(Ku.lastIndex=0;;){const c=Ku.exec(r),f=Ku.lastIndex;let u=c[1];const h=c[2]==="]",m=c[3];if(h&&(u=u|0),m===void 0||m==="["&&f+2===o){Mm(n,m===void 0?new N1(u,s,e):new L1(u,s,e));break}else{let y=n.map[u];y===void 0&&(y=new D1(u),Mm(n,y)),n=y}}}class yl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),f=e.getUniformLocation(n,c.name);U1(c,f,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const u=n[c],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const I1=37297;let F1=0;function O1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${n[f]}`)}return r.join(`
`)}function k1(s){const e=At.getPrimaries(At.workingColorSpace),n=At.getPrimaries(s);let r;switch(e===n?r="":e===Al&&n===bl?r="LinearDisplayP3ToLinearSRGB":e===bl&&n===Al&&(r="LinearSRGBToLinearDisplayP3"),s){case zi:case Nl:return[r,"LinearTransferOETF"];case on:case Ed:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function wm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+O1(s.getShaderSource(e),f)}else return o}function z1(s,e){const n=k1(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function B1(s,e){let n;switch(e){case $v:n="Linear";break;case Kv:n="Reinhard";break;case Zv:n="OptimizedCineon";break;case Qv:n="ACESFilmic";break;case e_:n="AgX";break;case Jv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function H1(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function G1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function V1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function j1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),f=c.name;let u=1;c.type===s.FLOAT_MAT2&&(u=2),c.type===s.FLOAT_MAT3&&(u=3),c.type===s.FLOAT_MAT4&&(u=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:u}}return n}function Ls(s){return s!==""}function Tm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(s){return s.replace(W1,q1)}const X1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function q1(s,e){let n=ut[e];if(n===void 0){const r=X1.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return pd(n)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(s){return s.replace(Y1,$1)}function $1(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Cm(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Z1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ym:e="ENVMAP_BLENDING_MULTIPLY";break;case qv:e="ENVMAP_BLENDING_MIX";break;case Yv:e="ENVMAP_BLENDING_ADD";break}return e}function eE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function tE(s,e,n,r){const o=s.getContext(),c=n.defines;let f=n.vertexShader,u=n.fragmentShader;const h=K1(n),m=Z1(n),x=Q1(n),y=J1(n),S=eE(n),E=n.isWebGL2?"":H1(n),A=G1(n),T=V1(c),_=o.createProgram();let v,U,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ls).join(`
`),v.length>0&&(v+=`
`),U=[E,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ls).join(`
`),U.length>0&&(U+=`
`)):(v=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),U=[E,Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?ut.tonemapping_pars_fragment:"",n.toneMapping!==mr?B1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,z1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),f=pd(f),f=Tm(f,n),f=bm(f,n),u=pd(u),u=Tm(u,n),u=bm(u,n),f=Am(f),u=Am(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,v=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,U=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const L=C+v+f,W=C+U+u,z=Em(o,o.VERTEX_SHADER,L),k=Em(o,o.FRAGMENT_SHADER,W);o.attachShader(_,z),o.attachShader(_,k),n.index0AttributeName!==void 0?o.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function ue(he){if(s.debug.checkShaderErrors){const Me=o.getProgramInfoLog(_).trim(),X=o.getShaderInfoLog(z).trim(),te=o.getShaderInfoLog(k).trim();let le=!0,fe=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,_,z,k);else{const q=wm(o,z,"vertex"),ee=wm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+q+`
`+ee)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(X===""||te==="")&&(fe=!1);fe&&(he.diagnostics={runnable:le,programLog:Me,vertexShader:{log:X,prefix:v},fragmentShader:{log:te,prefix:U}})}o.deleteShader(z),o.deleteShader(k),R=new yl(o,_),I=j1(o,_)}let R;this.getUniforms=function(){return R===void 0&&ue(this),R};let I;this.getAttributes=function(){return I===void 0&&ue(this),I};let ce=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=o.getProgramParameter(_,I1)),ce},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=F1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=z,this.fragmentShader=k,this}let nE=0;class iE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new rE(e),n.set(e,r)),r}}class rE{constructor(e){this.id=nE++,this.code=e,this.usedTimes=0}}function sE(s,e,n,r,o,c,f){const u=new ug,h=new iE,m=[],x=o.isWebGL2,y=o.logarithmicDepthBuffer,S=o.vertexTextures;let E=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===0?"uv":`uv${R}`}function _(R,I,ce,he,Me){const X=he.fog,te=Me.geometry,le=R.isMeshStandardMaterial?he.environment:null,fe=(R.isMeshStandardMaterial?n:e).get(R.envMap||le),q=fe&&fe.mapping===Pl?fe.image.height:null,ee=A[R.type];R.precision!==null&&(E=o.getMaxPrecision(R.precision),E!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const P=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,M=P!==void 0?P.length:0;let O=0;te.morphAttributes.position!==void 0&&(O=1),te.morphAttributes.normal!==void 0&&(O=2),te.morphAttributes.color!==void 0&&(O=3);let B,V,Q,de;if(ee){const Jt=vi[ee];B=Jt.vertexShader,V=Jt.fragmentShader}else B=R.vertexShader,V=R.fragmentShader,h.update(R),Q=h.getVertexShaderID(R),de=h.getFragmentShaderID(R);const ae=s.getRenderTarget(),pe=Me.isInstancedMesh===!0,ve=Me.isBatchedMesh===!0,be=!!R.map,ke=!!R.matcap,Y=!!fe,ft=!!R.aoMap,Te=!!R.lightMap,Ge=!!R.bumpMap,Le=!!R.normalMap,dt=!!R.displacementMap,Ye=!!R.emissiveMap,D=!!R.metalnessMap,b=!!R.roughnessMap,ne=R.anisotropy>0,ye=R.clearcoat>0,_e=R.iridescence>0,Ee=R.sheen>0,Ve=R.transmission>0,Pe=ne&&!!R.anisotropyMap,Ie=ye&&!!R.clearcoatMap,Xe=ye&&!!R.clearcoatNormalMap,it=ye&&!!R.clearcoatRoughnessMap,me=_e&&!!R.iridescenceMap,ht=_e&&!!R.iridescenceThicknessMap,ot=Ee&&!!R.sheenColorMap,et=Ee&&!!R.sheenRoughnessMap,qe=!!R.specularMap,Be=!!R.specularColorMap,rt=!!R.specularIntensityMap,_t=Ve&&!!R.transmissionMap,Rt=Ve&&!!R.thicknessMap,at=!!R.gradientMap,Ae=!!R.alphaMap,G=R.alphaTest>0,Ce=!!R.alphaHash,Ne=!!R.extensions,Je=!!te.attributes.uv1,$e=!!te.attributes.uv2,wt=!!te.attributes.uv3;let Tt=mr;return R.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Tt=s.toneMapping),{isWebGL2:x,shaderID:ee,shaderType:R.type,shaderName:R.name,vertexShader:B,fragmentShader:V,defines:R.defines,customVertexShaderID:Q,customFragmentShaderID:de,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:ve,instancing:pe,instancingColor:pe&&Me.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:zi,map:be,matcap:ke,envMap:Y,envMapMode:Y&&fe.mapping,envMapCubeUVHeight:q,aoMap:ft,lightMap:Te,bumpMap:Ge,normalMap:Le,displacementMap:S&&dt,emissiveMap:Ye,normalMapObjectSpace:Le&&R.normalMapType===h_,normalMapTangentSpace:Le&&R.normalMapType===f_,metalnessMap:D,roughnessMap:b,anisotropy:ne,anisotropyMap:Pe,clearcoat:ye,clearcoatMap:Ie,clearcoatNormalMap:Xe,clearcoatRoughnessMap:it,iridescence:_e,iridescenceMap:me,iridescenceThicknessMap:ht,sheen:Ee,sheenColorMap:ot,sheenRoughnessMap:et,specularMap:qe,specularColorMap:Be,specularIntensityMap:rt,transmission:Ve,transmissionMap:_t,thicknessMap:Rt,gradientMap:at,opaque:R.transparent===!1&&R.blending===Is,alphaMap:Ae,alphaTest:G,alphaHash:Ce,combine:R.combine,mapUv:be&&T(R.map.channel),aoMapUv:ft&&T(R.aoMap.channel),lightMapUv:Te&&T(R.lightMap.channel),bumpMapUv:Ge&&T(R.bumpMap.channel),normalMapUv:Le&&T(R.normalMap.channel),displacementMapUv:dt&&T(R.displacementMap.channel),emissiveMapUv:Ye&&T(R.emissiveMap.channel),metalnessMapUv:D&&T(R.metalnessMap.channel),roughnessMapUv:b&&T(R.roughnessMap.channel),anisotropyMapUv:Pe&&T(R.anisotropyMap.channel),clearcoatMapUv:Ie&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:et&&T(R.sheenRoughnessMap.channel),specularMapUv:qe&&T(R.specularMap.channel),specularColorMapUv:Be&&T(R.specularColorMap.channel),specularIntensityMapUv:rt&&T(R.specularIntensityMap.channel),transmissionMapUv:_t&&T(R.transmissionMap.channel),thicknessMapUv:Rt&&T(R.thicknessMap.channel),alphaMapUv:Ae&&T(R.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Le||ne),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUv1s:Je,vertexUv2s:$e,vertexUv3s:wt,pointsUvs:Me.isPoints===!0&&!!te.attributes.uv&&(be||Ae),fog:!!X,useFog:R.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:Me.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:O,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&ce.length>0,shadowMapType:s.shadowMap.type,toneMapping:Tt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:be&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===Ut,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Oi,flipSided:R.side===Ln,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Ne&&R.extensions.derivatives===!0,extensionFragDepth:Ne&&R.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:x||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function v(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ce in R.defines)I.push(ce),I.push(R.defines[ce]);return R.isRawShaderMaterial===!1&&(U(I,R),C(I,R),I.push(s.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function U(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.numLightProbes),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function C(R,I){u.disableAll(),I.isWebGL2&&u.enable(0),I.supportsVertexTextures&&u.enable(1),I.instancing&&u.enable(2),I.instancingColor&&u.enable(3),I.matcap&&u.enable(4),I.envMap&&u.enable(5),I.normalMapObjectSpace&&u.enable(6),I.normalMapTangentSpace&&u.enable(7),I.clearcoat&&u.enable(8),I.iridescence&&u.enable(9),I.alphaTest&&u.enable(10),I.vertexColors&&u.enable(11),I.vertexAlphas&&u.enable(12),I.vertexUv1s&&u.enable(13),I.vertexUv2s&&u.enable(14),I.vertexUv3s&&u.enable(15),I.vertexTangents&&u.enable(16),I.anisotropy&&u.enable(17),I.alphaHash&&u.enable(18),I.batching&&u.enable(19),R.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.skinning&&u.enable(4),I.morphTargets&&u.enable(5),I.morphNormals&&u.enable(6),I.morphColors&&u.enable(7),I.premultipliedAlpha&&u.enable(8),I.shadowMapEnabled&&u.enable(9),I.useLegacyLights&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),R.push(u.mask)}function L(R){const I=A[R.type];let ce;if(I){const he=vi[I];ce=B_.clone(he.uniforms)}else ce=R.uniforms;return ce}function W(R,I){let ce;for(let he=0,Me=m.length;he<Me;he++){const X=m[he];if(X.cacheKey===I){ce=X,++ce.usedTimes;break}}return ce===void 0&&(ce=new tE(s,I,R,c),m.push(ce)),ce}function z(R){if(--R.usedTimes===0){const I=m.indexOf(R);m[I]=m[m.length-1],m.pop(),R.destroy()}}function k(R){h.remove(R)}function ue(){h.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:L,acquireProgram:W,releaseProgram:z,releaseShaderCache:k,programs:m,dispose:ue}}function aE(){let s=new WeakMap;function e(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function n(c){s.delete(c)}function r(c,f,u){s.get(c)[f]=u}function o(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function oE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(y,S,E,A,T,_){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:S,material:E,groupOrder:A,renderOrder:y.renderOrder,z:T,group:_},s[e]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=E,v.groupOrder=A,v.renderOrder=y.renderOrder,v.z=T,v.group=_),e++,v}function u(y,S,E,A,T,_){const v=f(y,S,E,A,T,_);E.transmission>0?r.push(v):E.transparent===!0?o.push(v):n.push(v)}function h(y,S,E,A,T,_){const v=f(y,S,E,A,T,_);E.transmission>0?r.unshift(v):E.transparent===!0?o.unshift(v):n.unshift(v)}function m(y,S){n.length>1&&n.sort(y||oE),r.length>1&&r.sort(S||Rm),o.length>1&&o.sort(S||Rm)}function x(){for(let y=e,S=s.length;y<S;y++){const E=s[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:u,unshift:h,finish:x,sort:m}}function lE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let f;return c===void 0?(f=new Pm,s.set(r,[f])):o>=c.length?(f=new Pm,c.push(f)):f=c[o],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function cE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new St};break;case"SpotLight":n={position:new $,direction:new $,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let dE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hE(s,e){const n=new cE,r=uE(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)o.probe.push(new $);const c=new $,f=new Wt,u=new Wt;function h(x,y){let S=0,E=0,A=0;for(let he=0;he<9;he++)o.probe[he].set(0,0,0);let T=0,_=0,v=0,U=0,C=0,L=0,W=0,z=0,k=0,ue=0,R=0;x.sort(fE);const I=y===!0?Math.PI:1;for(let he=0,Me=x.length;he<Me;he++){const X=x[he],te=X.color,le=X.intensity,fe=X.distance,q=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)S+=te.r*le*I,E+=te.g*le*I,A+=te.b*le*I;else if(X.isLightProbe){for(let ee=0;ee<9;ee++)o.probe[ee].addScaledVector(X.sh.coefficients[ee],le);R++}else if(X.isDirectionalLight){const ee=n.get(X);if(ee.color.copy(X.color).multiplyScalar(X.intensity*I),X.castShadow){const P=X.shadow,M=r.get(X);M.shadowBias=P.bias,M.shadowNormalBias=P.normalBias,M.shadowRadius=P.radius,M.shadowMapSize=P.mapSize,o.directionalShadow[T]=M,o.directionalShadowMap[T]=q,o.directionalShadowMatrix[T]=X.shadow.matrix,L++}o.directional[T]=ee,T++}else if(X.isSpotLight){const ee=n.get(X);ee.position.setFromMatrixPosition(X.matrixWorld),ee.color.copy(te).multiplyScalar(le*I),ee.distance=fe,ee.coneCos=Math.cos(X.angle),ee.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ee.decay=X.decay,o.spot[v]=ee;const P=X.shadow;if(X.map&&(o.spotLightMap[k]=X.map,k++,P.updateMatrices(X),X.castShadow&&ue++),o.spotLightMatrix[v]=P.matrix,X.castShadow){const M=r.get(X);M.shadowBias=P.bias,M.shadowNormalBias=P.normalBias,M.shadowRadius=P.radius,M.shadowMapSize=P.mapSize,o.spotShadow[v]=M,o.spotShadowMap[v]=q,z++}v++}else if(X.isRectAreaLight){const ee=n.get(X);ee.color.copy(te).multiplyScalar(le),ee.halfWidth.set(X.width*.5,0,0),ee.halfHeight.set(0,X.height*.5,0),o.rectArea[U]=ee,U++}else if(X.isPointLight){const ee=n.get(X);if(ee.color.copy(X.color).multiplyScalar(X.intensity*I),ee.distance=X.distance,ee.decay=X.decay,X.castShadow){const P=X.shadow,M=r.get(X);M.shadowBias=P.bias,M.shadowNormalBias=P.normalBias,M.shadowRadius=P.radius,M.shadowMapSize=P.mapSize,M.shadowCameraNear=P.camera.near,M.shadowCameraFar=P.camera.far,o.pointShadow[_]=M,o.pointShadowMap[_]=q,o.pointShadowMatrix[_]=X.shadow.matrix,W++}o.point[_]=ee,_++}else if(X.isHemisphereLight){const ee=n.get(X);ee.skyColor.copy(X.color).multiplyScalar(le*I),ee.groundColor.copy(X.groundColor).multiplyScalar(le*I),o.hemi[C]=ee,C++}}U>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_FLOAT_1,o.rectAreaLTC2=Re.LTC_FLOAT_2):(o.rectAreaLTC1=Re.LTC_HALF_1,o.rectAreaLTC2=Re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_FLOAT_1,o.rectAreaLTC2=Re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_HALF_1,o.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=S,o.ambient[1]=E,o.ambient[2]=A;const ce=o.hash;(ce.directionalLength!==T||ce.pointLength!==_||ce.spotLength!==v||ce.rectAreaLength!==U||ce.hemiLength!==C||ce.numDirectionalShadows!==L||ce.numPointShadows!==W||ce.numSpotShadows!==z||ce.numSpotMaps!==k||ce.numLightProbes!==R)&&(o.directional.length=T,o.spot.length=v,o.rectArea.length=U,o.point.length=_,o.hemi.length=C,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=W,o.pointShadowMap.length=W,o.spotShadow.length=z,o.spotShadowMap.length=z,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=W,o.spotLightMatrix.length=z+k-ue,o.spotLightMap.length=k,o.numSpotLightShadowsWithMaps=ue,o.numLightProbes=R,ce.directionalLength=T,ce.pointLength=_,ce.spotLength=v,ce.rectAreaLength=U,ce.hemiLength=C,ce.numDirectionalShadows=L,ce.numPointShadows=W,ce.numSpotShadows=z,ce.numSpotMaps=k,ce.numLightProbes=R,o.version=dE++)}function m(x,y){let S=0,E=0,A=0,T=0,_=0;const v=y.matrixWorldInverse;for(let U=0,C=x.length;U<C;U++){const L=x[U];if(L.isDirectionalLight){const W=o.directional[S];W.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),W.direction.sub(c),W.direction.transformDirection(v),S++}else if(L.isSpotLight){const W=o.spot[A];W.position.setFromMatrixPosition(L.matrixWorld),W.position.applyMatrix4(v),W.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),W.direction.sub(c),W.direction.transformDirection(v),A++}else if(L.isRectAreaLight){const W=o.rectArea[T];W.position.setFromMatrixPosition(L.matrixWorld),W.position.applyMatrix4(v),u.identity(),f.copy(L.matrixWorld),f.premultiply(v),u.extractRotation(f),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),W.halfWidth.applyMatrix4(u),W.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const W=o.point[E];W.position.setFromMatrixPosition(L.matrixWorld),W.position.applyMatrix4(v),E++}else if(L.isHemisphereLight){const W=o.hemi[_];W.direction.setFromMatrixPosition(L.matrixWorld),W.direction.transformDirection(v),_++}}}return{setup:h,setupView:m,state:o}}function Nm(s,e){const n=new hE(s,e),r=[],o=[];function c(){r.length=0,o.length=0}function f(y){r.push(y)}function u(y){o.push(y)}function h(y){n.setup(r,y)}function m(y){n.setupView(r,y)}return{init:c,state:{lightsArray:r,shadowsArray:o,lights:n},setupLights:h,setupLightsView:m,pushLight:f,pushShadow:u}}function pE(s,e){let n=new WeakMap;function r(c,f=0){const u=n.get(c);let h;return u===void 0?(h=new Nm(s,e),n.set(c,[h])):f>=u.length?(h=new Nm(s,e),u.push(h)):h=u[f],h}function o(){n=new WeakMap}return{get:r,dispose:o}}class mE extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gE extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`;function _E(s,e,n){let r=new wd;const o=new vt,c=new vt,f=new Ot,u=new mE({depthPacking:d_}),h=new gE,m={},x=n.maxTextureSize,y={[xr]:Ln,[Ln]:xr,[Oi]:Oi},S=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:xE,fragmentShader:vE}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Jn;A.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fi(A,S),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let v=this.type;this.render=function(z,k,ue){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||z.length===0)return;const R=s.getRenderTarget(),I=s.getActiveCubeFace(),ce=s.getActiveMipmapLevel(),he=s.state;he.setBlending(pr),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const Me=v!==Ii&&this.type===Ii,X=v===Ii&&this.type!==Ii;for(let te=0,le=z.length;te<le;te++){const fe=z[te],q=fe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ee=q.getFrameExtents();if(o.multiply(ee),c.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/ee.x),o.x=c.x*ee.x,q.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/ee.y),o.y=c.y*ee.y,q.mapSize.y=c.y)),q.map===null||Me===!0||X===!0){const M=this.type!==Ii?{minFilter:yn,magFilter:yn}:{};q.map!==null&&q.map.dispose(),q.map=new jr(o.x,o.y,M),q.map.texture.name=fe.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const P=q.getViewportCount();for(let M=0;M<P;M++){const O=q.getViewport(M);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),he.viewport(f),q.updateMatrices(fe,M),r=q.getFrustum(),L(k,ue,q.camera,fe,this.type)}q.isPointLightShadow!==!0&&this.type===Ii&&U(q,ue),q.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(R,I,ce)};function U(z,k){const ue=e.update(T);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new jr(o.x,o.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(k,null,ue,S,T,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(k,null,ue,E,T,null)}function C(z,k,ue,R){let I=null;const ce=ue.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(ce!==void 0)I=ce;else if(I=ue.isPointLight===!0?h:u,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const he=I.uuid,Me=k.uuid;let X=m[he];X===void 0&&(X={},m[he]=X);let te=X[Me];te===void 0&&(te=I.clone(),X[Me]=te,k.addEventListener("dispose",W)),I=te}if(I.visible=k.visible,I.wireframe=k.wireframe,R===Ii?I.side=k.shadowSide!==null?k.shadowSide:k.side:I.side=k.shadowSide!==null?k.shadowSide:y[k.side],I.alphaMap=k.alphaMap,I.alphaTest=k.alphaTest,I.map=k.map,I.clipShadows=k.clipShadows,I.clippingPlanes=k.clippingPlanes,I.clipIntersection=k.clipIntersection,I.displacementMap=k.displacementMap,I.displacementScale=k.displacementScale,I.displacementBias=k.displacementBias,I.wireframeLinewidth=k.wireframeLinewidth,I.linewidth=k.linewidth,ue.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const he=s.properties.get(I);he.light=ue}return I}function L(z,k,ue,R,I){if(z.visible===!1)return;if(z.layers.test(k.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&I===Ii)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,z.matrixWorld);const Me=e.update(z),X=z.material;if(Array.isArray(X)){const te=Me.groups;for(let le=0,fe=te.length;le<fe;le++){const q=te[le],ee=X[q.materialIndex];if(ee&&ee.visible){const P=C(z,ee,R,I);z.onBeforeShadow(s,z,k,ue,Me,P,q),s.renderBufferDirect(ue,null,Me,P,z,q),z.onAfterShadow(s,z,k,ue,Me,P,q)}}}else if(X.visible){const te=C(z,X,R,I);z.onBeforeShadow(s,z,k,ue,Me,te,null),s.renderBufferDirect(ue,null,Me,te,z,null),z.onAfterShadow(s,z,k,ue,Me,te,null)}}const he=z.children;for(let Me=0,X=he.length;Me<X;Me++)L(he[Me],k,ue,R,I)}function W(z){z.target.removeEventListener("dispose",W);for(const ue in m){const R=m[ue],I=z.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function yE(s,e,n){const r=n.isWebGL2;function o(){let G=!1;const Ce=new Ot;let Ne=null;const Je=new Ot(0,0,0,0);return{setMask:function($e){Ne!==$e&&!G&&(s.colorMask($e,$e,$e,$e),Ne=$e)},setLocked:function($e){G=$e},setClear:function($e,wt,Tt,Bt,Jt){Jt===!0&&($e*=Bt,wt*=Bt,Tt*=Bt),Ce.set($e,wt,Tt,Bt),Je.equals(Ce)===!1&&(s.clearColor($e,wt,Tt,Bt),Je.copy(Ce))},reset:function(){G=!1,Ne=null,Je.set(-1,0,0,0)}}}function c(){let G=!1,Ce=null,Ne=null,Je=null;return{setTest:function($e){$e?ve(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function($e){Ce!==$e&&!G&&(s.depthMask($e),Ce=$e)},setFunc:function($e){if(Ne!==$e){switch($e){case Bv:s.depthFunc(s.NEVER);break;case Hv:s.depthFunc(s.ALWAYS);break;case Gv:s.depthFunc(s.LESS);break;case wl:s.depthFunc(s.LEQUAL);break;case Vv:s.depthFunc(s.EQUAL);break;case jv:s.depthFunc(s.GEQUAL);break;case Wv:s.depthFunc(s.GREATER);break;case Xv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=$e}},setLocked:function($e){G=$e},setClear:function($e){Je!==$e&&(s.clearDepth($e),Je=$e)},reset:function(){G=!1,Ce=null,Ne=null,Je=null}}}function f(){let G=!1,Ce=null,Ne=null,Je=null,$e=null,wt=null,Tt=null,Bt=null,Jt=null;return{setTest:function(Mt){G||(Mt?ve(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Mt){Ce!==Mt&&!G&&(s.stencilMask(Mt),Ce=Mt)},setFunc:function(Mt,Yt,ln){(Ne!==Mt||Je!==Yt||$e!==ln)&&(s.stencilFunc(Mt,Yt,ln),Ne=Mt,Je=Yt,$e=ln)},setOp:function(Mt,Yt,ln){(wt!==Mt||Tt!==Yt||Bt!==ln)&&(s.stencilOp(Mt,Yt,ln),wt=Mt,Tt=Yt,Bt=ln)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Jt!==Mt&&(s.clearStencil(Mt),Jt=Mt)},reset:function(){G=!1,Ce=null,Ne=null,Je=null,$e=null,wt=null,Tt=null,Bt=null,Jt=null}}}const u=new o,h=new c,m=new f,x=new WeakMap,y=new WeakMap;let S={},E={},A=new WeakMap,T=[],_=null,v=!1,U=null,C=null,L=null,W=null,z=null,k=null,ue=null,R=new St(0,0,0),I=0,ce=!1,he=null,Me=null,X=null,te=null,le=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const P=s.getParameter(s.VERSION);P.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),q=ee>=1):P.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),q=ee>=2);let M=null,O={};const B=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),Q=new Ot().fromArray(B),de=new Ot().fromArray(V);function ae(G,Ce,Ne,Je){const $e=new Uint8Array(4),wt=s.createTexture();s.bindTexture(G,wt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Tt=0;Tt<Ne;Tt++)r&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ce,0,s.RGBA,1,1,Je,0,s.RGBA,s.UNSIGNED_BYTE,$e):s.texImage2D(Ce+Tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$e);return wt}const pe={};pe[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(pe[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),m.setClear(0),ve(s.DEPTH_TEST),h.setFunc(wl),Ye(!1),D(hp),ve(s.CULL_FACE),Le(pr);function ve(G){S[G]!==!0&&(s.enable(G),S[G]=!0)}function be(G){S[G]!==!1&&(s.disable(G),S[G]=!1)}function ke(G,Ce){return E[G]!==Ce?(s.bindFramebuffer(G,Ce),E[G]=Ce,r&&(G===s.DRAW_FRAMEBUFFER&&(E[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(E[s.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function Y(G,Ce){let Ne=T,Je=!1;if(G)if(Ne=A.get(Ce),Ne===void 0&&(Ne=[],A.set(Ce,Ne)),G.isWebGLMultipleRenderTargets){const $e=G.texture;if(Ne.length!==$e.length||Ne[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,Tt=$e.length;wt<Tt;wt++)Ne[wt]=s.COLOR_ATTACHMENT0+wt;Ne.length=$e.length,Je=!0}}else Ne[0]!==s.COLOR_ATTACHMENT0&&(Ne[0]=s.COLOR_ATTACHMENT0,Je=!0);else Ne[0]!==s.BACK&&(Ne[0]=s.BACK,Je=!0);Je&&(n.isWebGL2?s.drawBuffers(Ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ne))}function ft(G){return _!==G?(s.useProgram(G),_=G,!0):!1}const Te={[zr]:s.FUNC_ADD,[Tv]:s.FUNC_SUBTRACT,[bv]:s.FUNC_REVERSE_SUBTRACT};if(r)Te[gp]=s.MIN,Te[xp]=s.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Te[gp]=G.MIN_EXT,Te[xp]=G.MAX_EXT)}const Ge={[Av]:s.ZERO,[Cv]:s.ONE,[Rv]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[Iv]:s.SRC_ALPHA_SATURATE,[Dv]:s.DST_COLOR,[Nv]:s.DST_ALPHA,[Pv]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Lv]:s.ONE_MINUS_DST_ALPHA,[Fv]:s.CONSTANT_COLOR,[Ov]:s.ONE_MINUS_CONSTANT_COLOR,[kv]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(G,Ce,Ne,Je,$e,wt,Tt,Bt,Jt,Mt){if(G===pr){v===!0&&(be(s.BLEND),v=!1);return}if(v===!1&&(ve(s.BLEND),v=!0),G!==wv){if(G!==U||Mt!==ce){if((C!==zr||z!==zr)&&(s.blendEquation(s.FUNC_ADD),C=zr,z=zr),Mt)switch(G){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.ONE,s.ONE);break;case pp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,W=null,k=null,ue=null,R.set(0,0,0),I=0,U=G,ce=Mt}return}$e=$e||Ce,wt=wt||Ne,Tt=Tt||Je,(Ce!==C||$e!==z)&&(s.blendEquationSeparate(Te[Ce],Te[$e]),C=Ce,z=$e),(Ne!==L||Je!==W||wt!==k||Tt!==ue)&&(s.blendFuncSeparate(Ge[Ne],Ge[Je],Ge[wt],Ge[Tt]),L=Ne,W=Je,k=wt,ue=Tt),(Bt.equals(R)===!1||Jt!==I)&&(s.blendColor(Bt.r,Bt.g,Bt.b,Jt),R.copy(Bt),I=Jt),U=G,ce=!1}function dt(G,Ce){G.side===Oi?be(s.CULL_FACE):ve(s.CULL_FACE);let Ne=G.side===Ln;Ce&&(Ne=!Ne),Ye(Ne),G.blending===Is&&G.transparent===!1?Le(pr):Le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const Je=G.stencilWrite;m.setTest(Je),Je&&(m.setMask(G.stencilWriteMask),m.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),m.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ne(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(G){he!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),he=G)}function D(G){G!==Sv?(ve(s.CULL_FACE),G!==Me&&(G===hp?s.cullFace(s.BACK):G===Mv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),Me=G}function b(G){G!==X&&(q&&s.lineWidth(G),X=G)}function ne(G,Ce,Ne){G?(ve(s.POLYGON_OFFSET_FILL),(te!==Ce||le!==Ne)&&(s.polygonOffset(Ce,Ne),te=Ce,le=Ne)):be(s.POLYGON_OFFSET_FILL)}function ye(G){G?ve(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function _e(G){G===void 0&&(G=s.TEXTURE0+fe-1),M!==G&&(s.activeTexture(G),M=G)}function Ee(G,Ce,Ne){Ne===void 0&&(M===null?Ne=s.TEXTURE0+fe-1:Ne=M);let Je=O[Ne];Je===void 0&&(Je={type:void 0,texture:void 0},O[Ne]=Je),(Je.type!==G||Je.texture!==Ce)&&(M!==Ne&&(s.activeTexture(Ne),M=Ne),s.bindTexture(G,Ce||pe[G]),Je.type=G,Je.texture=Ce)}function Ve(){const G=O[M];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(G){Q.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Q.copy(G))}function _t(G){de.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),de.copy(G))}function Rt(G,Ce){let Ne=y.get(Ce);Ne===void 0&&(Ne=new WeakMap,y.set(Ce,Ne));let Je=Ne.get(G);Je===void 0&&(Je=s.getUniformBlockIndex(Ce,G.name),Ne.set(G,Je))}function at(G,Ce){const Je=y.get(Ce).get(G);x.get(Ce)!==Je&&(s.uniformBlockBinding(Ce,Je,G.__bindingPointIndex),x.set(Ce,Je))}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),S={},M=null,O={},E={},A=new WeakMap,T=[],_=null,v=!1,U=null,C=null,L=null,W=null,z=null,k=null,ue=null,R=new St(0,0,0),I=0,ce=!1,he=null,Me=null,X=null,te=null,le=null,Q.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),m.reset()}return{buffers:{color:u,depth:h,stencil:m},enable:ve,disable:be,bindFramebuffer:ke,drawBuffers:Y,useProgram:ft,setBlending:Le,setMaterial:dt,setFlipSided:Ye,setCullFace:D,setLineWidth:b,setPolygonOffset:ne,setScissorTest:ye,activeTexture:_e,bindTexture:Ee,unbindTexture:Ve,compressedTexImage2D:Pe,compressedTexImage3D:Ie,texImage2D:qe,texImage3D:Be,updateUBOMapping:Rt,uniformBlockBinding:at,texStorage2D:ot,texStorage3D:et,texSubImage2D:Xe,texSubImage3D:it,compressedTexSubImage2D:me,compressedTexSubImage3D:ht,scissor:rt,viewport:_t,reset:Ae}}function SE(s,e,n,r,o,c,f){const u=o.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,b){return E?new OffscreenCanvas(D,b):Rl("canvas")}function T(D,b,ne,ye){let _e=1;if((D.width>ye||D.height>ye)&&(_e=ye/Math.max(D.width,D.height)),_e<1||b===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ee=b?hd:Math.floor,Ve=Ee(_e*D.width),Pe=Ee(_e*D.height);y===void 0&&(y=A(Ve,Pe));const Ie=ne?A(Ve,Pe):y;return Ie.width=Ve,Ie.height=Pe,Ie.getContext("2d").drawImage(D,0,0,Ve,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ve+"x"+Pe+")."),Ie}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function _(D){return qp(D.width)&&qp(D.height)}function v(D){return u?!1:D.wrapS!==ui||D.wrapT!==ui||D.minFilter!==yn&&D.minFilter!==Zn}function U(D,b){return D.generateMipmaps&&b&&D.minFilter!==yn&&D.minFilter!==Zn}function C(D){s.generateMipmap(D)}function L(D,b,ne,ye,_e=!1){if(u===!1)return b;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ee=b;if(b===s.RED&&(ne===s.FLOAT&&(Ee=s.R32F),ne===s.HALF_FLOAT&&(Ee=s.R16F),ne===s.UNSIGNED_BYTE&&(Ee=s.R8)),b===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(Ee=s.R8UI),ne===s.UNSIGNED_SHORT&&(Ee=s.R16UI),ne===s.UNSIGNED_INT&&(Ee=s.R32UI),ne===s.BYTE&&(Ee=s.R8I),ne===s.SHORT&&(Ee=s.R16I),ne===s.INT&&(Ee=s.R32I)),b===s.RG&&(ne===s.FLOAT&&(Ee=s.RG32F),ne===s.HALF_FLOAT&&(Ee=s.RG16F),ne===s.UNSIGNED_BYTE&&(Ee=s.RG8)),b===s.RGBA){const Ve=_e?Tl:At.getTransfer(ye);ne===s.FLOAT&&(Ee=s.RGBA32F),ne===s.HALF_FLOAT&&(Ee=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(Ee=Ve===Ut?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(Ee=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(Ee=s.RGB5_A1)}return(Ee===s.R16F||Ee===s.R32F||Ee===s.RG16F||Ee===s.RG32F||Ee===s.RGBA16F||Ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function W(D,b,ne){return U(D,ne)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function z(D){return D===yn||D===vp||D===Su?s.NEAREST:s.LINEAR}function k(D){const b=D.target;b.removeEventListener("dispose",k),R(b),b.isVideoTexture&&x.delete(b)}function ue(D){const b=D.target;b.removeEventListener("dispose",ue),ce(b)}function R(D){const b=r.get(D);if(b.__webglInit===void 0)return;const ne=D.source,ye=S.get(ne);if(ye){const _e=ye[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&I(D),Object.keys(ye).length===0&&S.delete(ne)}r.remove(D)}function I(D){const b=r.get(D);s.deleteTexture(b.__webglTexture);const ne=D.source,ye=S.get(ne);delete ye[b.__cacheKey],f.memory.textures--}function ce(D){const b=D.texture,ne=r.get(D),ye=r.get(b);if(ye.__webglTexture!==void 0&&(s.deleteTexture(ye.__webglTexture),f.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(ne.__webglFramebuffer[_e]))for(let Ee=0;Ee<ne.__webglFramebuffer[_e].length;Ee++)s.deleteFramebuffer(ne.__webglFramebuffer[_e][Ee]);else s.deleteFramebuffer(ne.__webglFramebuffer[_e]);ne.__webglDepthbuffer&&s.deleteRenderbuffer(ne.__webglDepthbuffer[_e])}else{if(Array.isArray(ne.__webglFramebuffer))for(let _e=0;_e<ne.__webglFramebuffer.length;_e++)s.deleteFramebuffer(ne.__webglFramebuffer[_e]);else s.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&s.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let _e=0;_e<ne.__webglColorRenderbuffer.length;_e++)ne.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(ne.__webglColorRenderbuffer[_e]);ne.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let _e=0,Ee=b.length;_e<Ee;_e++){const Ve=r.get(b[_e]);Ve.__webglTexture&&(s.deleteTexture(Ve.__webglTexture),f.memory.textures--),r.remove(b[_e])}r.remove(b),r.remove(D)}let he=0;function Me(){he=0}function X(){const D=he;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),he+=1,D}function te(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function le(D,b){const ne=r.get(D);if(D.isVideoTexture&&dt(D),D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){const ye=D.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ne,D,b);return}}n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+b)}function fe(D,b){const ne=r.get(D);if(D.version>0&&ne.__version!==D.version){Q(ne,D,b);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+b)}function q(D,b){const ne=r.get(D);if(D.version>0&&ne.__version!==D.version){Q(ne,D,b);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+b)}function ee(D,b){const ne=r.get(D);if(D.version>0&&ne.__version!==D.version){de(ne,D,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+b)}const P={[cd]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[ud]:s.MIRRORED_REPEAT},M={[yn]:s.NEAREST,[vp]:s.NEAREST_MIPMAP_NEAREST,[Su]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[t_]:s.LINEAR_MIPMAP_NEAREST,[Da]:s.LINEAR_MIPMAP_LINEAR},O={[p_]:s.NEVER,[y_]:s.ALWAYS,[m_]:s.LESS,[rg]:s.LEQUAL,[g_]:s.EQUAL,[__]:s.GEQUAL,[x_]:s.GREATER,[v_]:s.NOTEQUAL};function B(D,b,ne){if(ne?(s.texParameteri(D,s.TEXTURE_WRAP_S,P[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,P[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,P[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,M[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,M[b.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==ui||b.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,z(b.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,z(b.minFilter)),b.minFilter!==yn&&b.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===yn||b.minFilter!==Su&&b.minFilter!==Da||b.type===hr&&e.has("OES_texture_float_linear")===!1||u===!1&&b.type===Ua&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||r.get(b).__currentAnisotropy)&&(s.texParameterf(D,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy)}}function V(D,b){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",k));const ye=b.source;let _e=S.get(ye);_e===void 0&&(_e={},S.set(ye,_e));const Ee=te(b);if(Ee!==D.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),_e[Ee].usedTimes++;const Ve=_e[D.__cacheKey];Ve!==void 0&&(_e[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&I(b)),D.__cacheKey=Ee,D.__webglTexture=_e[Ee].texture}return ne}function Q(D,b,ne){let ye=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ye=s.TEXTURE_3D);const _e=V(D,b),Ee=b.source;n.bindTexture(ye,D.__webglTexture,s.TEXTURE0+ne);const Ve=r.get(Ee);if(Ee.version!==Ve.__version||_e===!0){n.activeTexture(s.TEXTURE0+ne);const Pe=At.getPrimaries(At.workingColorSpace),Ie=b.colorSpace===Qn?null:At.getPrimaries(b.colorSpace),Xe=b.colorSpace===Qn||Pe===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const it=v(b)&&_(b.image)===!1;let me=T(b.image,it,!1,o.maxTextureSize);me=Ye(b,me);const ht=_(me)||u,ot=c.convert(b.format,b.colorSpace);let et=c.convert(b.type),qe=L(b.internalFormat,ot,et,b.colorSpace,b.isVideoTexture);B(ye,b,ht);let Be;const rt=b.mipmaps,_t=u&&b.isVideoTexture!==!0&&qe!==ng,Rt=Ve.__version===void 0||_e===!0,at=W(b,me,ht);if(b.isDepthTexture)qe=s.DEPTH_COMPONENT,u?b.type===hr?qe=s.DEPTH_COMPONENT32F:b.type===fr?qe=s.DEPTH_COMPONENT24:b.type===Hr?qe=s.DEPTH24_STENCIL8:qe=s.DEPTH_COMPONENT16:b.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Gr&&qe===s.DEPTH_COMPONENT&&b.type!==Md&&b.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fr,et=c.convert(b.type)),b.format===zs&&qe===s.DEPTH_COMPONENT&&(qe=s.DEPTH_STENCIL,b.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hr,et=c.convert(b.type))),Rt&&(_t?n.texStorage2D(s.TEXTURE_2D,1,qe,me.width,me.height):n.texImage2D(s.TEXTURE_2D,0,qe,me.width,me.height,0,ot,et,null));else if(b.isDataTexture)if(rt.length>0&&ht){_t&&Rt&&n.texStorage2D(s.TEXTURE_2D,at,qe,rt[0].width,rt[0].height);for(let Ae=0,G=rt.length;Ae<G;Ae++)Be=rt[Ae],_t?n.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ot,et,Be.data):n.texImage2D(s.TEXTURE_2D,Ae,qe,Be.width,Be.height,0,ot,et,Be.data);b.generateMipmaps=!1}else _t?(Rt&&n.texStorage2D(s.TEXTURE_2D,at,qe,me.width,me.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,ot,et,me.data)):n.texImage2D(s.TEXTURE_2D,0,qe,me.width,me.height,0,ot,et,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){_t&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,at,qe,rt[0].width,rt[0].height,me.depth);for(let Ae=0,G=rt.length;Ae<G;Ae++)Be=rt[Ae],b.format!==di?ot!==null?_t?n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,me.depth,ot,Be.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,qe,Be.width,Be.height,me.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,me.depth,ot,et,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Ae,qe,Be.width,Be.height,me.depth,0,ot,et,Be.data)}else{_t&&Rt&&n.texStorage2D(s.TEXTURE_2D,at,qe,rt[0].width,rt[0].height);for(let Ae=0,G=rt.length;Ae<G;Ae++)Be=rt[Ae],b.format!==di?ot!==null?_t?n.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ot,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,Ae,qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ot,et,Be.data):n.texImage2D(s.TEXTURE_2D,Ae,qe,Be.width,Be.height,0,ot,et,Be.data)}else if(b.isDataArrayTexture)_t?(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,at,qe,me.width,me.height,me.depth),n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ot,et,me.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,me.width,me.height,me.depth,0,ot,et,me.data);else if(b.isData3DTexture)_t?(Rt&&n.texStorage3D(s.TEXTURE_3D,at,qe,me.width,me.height,me.depth),n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ot,et,me.data)):n.texImage3D(s.TEXTURE_3D,0,qe,me.width,me.height,me.depth,0,ot,et,me.data);else if(b.isFramebufferTexture){if(Rt)if(_t)n.texStorage2D(s.TEXTURE_2D,at,qe,me.width,me.height);else{let Ae=me.width,G=me.height;for(let Ce=0;Ce<at;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,qe,Ae,G,0,ot,et,null),Ae>>=1,G>>=1}}else if(rt.length>0&&ht){_t&&Rt&&n.texStorage2D(s.TEXTURE_2D,at,qe,rt[0].width,rt[0].height);for(let Ae=0,G=rt.length;Ae<G;Ae++)Be=rt[Ae],_t?n.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ot,et,Be):n.texImage2D(s.TEXTURE_2D,Ae,qe,ot,et,Be);b.generateMipmaps=!1}else _t?(Rt&&n.texStorage2D(s.TEXTURE_2D,at,qe,me.width,me.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,et,me)):n.texImage2D(s.TEXTURE_2D,0,qe,ot,et,me);U(b,ht)&&C(ye),Ve.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function de(D,b,ne){if(b.image.length!==6)return;const ye=V(D,b),_e=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+ne);const Ee=r.get(_e);if(_e.version!==Ee.__version||ye===!0){n.activeTexture(s.TEXTURE0+ne);const Ve=At.getPrimaries(At.workingColorSpace),Pe=b.colorSpace===Qn?null:At.getPrimaries(b.colorSpace),Ie=b.colorSpace===Qn||Ve===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,me=[];for(let Ae=0;Ae<6;Ae++)!Xe&&!it?me[Ae]=T(b.image[Ae],!1,!0,o.maxCubemapSize):me[Ae]=it?b.image[Ae].image:b.image[Ae],me[Ae]=Ye(b,me[Ae]);const ht=me[0],ot=_(ht)||u,et=c.convert(b.format,b.colorSpace),qe=c.convert(b.type),Be=L(b.internalFormat,et,qe,b.colorSpace),rt=u&&b.isVideoTexture!==!0,_t=Ee.__version===void 0||ye===!0;let Rt=W(b,ht,ot);B(s.TEXTURE_CUBE_MAP,b,ot);let at;if(Xe){rt&&_t&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Be,ht.width,ht.height);for(let Ae=0;Ae<6;Ae++){at=me[Ae].mipmaps;for(let G=0;G<at.length;G++){const Ce=at[G];b.format!==di?et!==null?rt?n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,0,0,Ce.width,Ce.height,et,Ce.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,0,0,Ce.width,Ce.height,et,qe,Ce.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,Be,Ce.width,Ce.height,0,et,qe,Ce.data)}}}else{at=b.mipmaps,rt&&_t&&(at.length>0&&Rt++,n.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Be,me[0].width,me[0].height));for(let Ae=0;Ae<6;Ae++)if(it){rt?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,me[Ae].width,me[Ae].height,et,qe,me[Ae].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Be,me[Ae].width,me[Ae].height,0,et,qe,me[Ae].data);for(let G=0;G<at.length;G++){const Ne=at[G].image[Ae].image;rt?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,0,0,Ne.width,Ne.height,et,qe,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,Be,Ne.width,Ne.height,0,et,qe,Ne.data)}}else{rt?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,et,qe,me[Ae]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Be,et,qe,me[Ae]);for(let G=0;G<at.length;G++){const Ce=at[G];rt?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,0,0,et,qe,Ce.image[Ae]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,Be,et,qe,Ce.image[Ae])}}}U(b,ot)&&C(s.TEXTURE_CUBE_MAP),Ee.__version=_e.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ae(D,b,ne,ye,_e,Ee){const Ve=c.convert(ne.format,ne.colorSpace),Pe=c.convert(ne.type),Ie=L(ne.internalFormat,Ve,Pe,ne.colorSpace);if(!r.get(b).__hasExternalTextures){const it=Math.max(1,b.width>>Ee),me=Math.max(1,b.height>>Ee);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,Ee,Ie,it,me,b.depth,0,Ve,Pe,null):n.texImage2D(_e,Ee,Ie,it,me,0,Ve,Pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),Le(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,_e,r.get(ne).__webglTexture,0,Ge(b)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,_e,r.get(ne).__webglTexture,Ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(D,b,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer&&!b.stencilBuffer){let ye=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ne||Le(b)){const _e=b.depthTexture;_e&&_e.isDepthTexture&&(_e.type===hr?ye=s.DEPTH_COMPONENT32F:_e.type===fr&&(ye=s.DEPTH_COMPONENT24));const Ee=Ge(b);Le(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,ye,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ye,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ye,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(b.depthBuffer&&b.stencilBuffer){const ye=Ge(b);ne&&Le(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,s.DEPTH24_STENCIL8,b.width,b.height):Le(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const ye=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let _e=0;_e<ye.length;_e++){const Ee=ye[_e],Ve=c.convert(Ee.format,Ee.colorSpace),Pe=c.convert(Ee.type),Ie=L(Ee.internalFormat,Ve,Pe,Ee.colorSpace),Xe=Ge(b);ne&&Le(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ie,b.width,b.height):Le(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),le(b.depthTexture,0);const ye=r.get(b.depthTexture).__webglTexture,_e=Ge(b);if(b.depthTexture.format===Gr)Le(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(b.depthTexture.format===zs)Le(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function be(D){const b=r.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ve(b.__webglFramebuffer,D)}else if(ne){b.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ye]),b.__webglDepthbuffer[ye]=s.createRenderbuffer(),pe(b.__webglDepthbuffer[ye],D,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),pe(b.__webglDepthbuffer,D,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(D,b,ne){const ye=r.get(D);b!==void 0&&ae(ye.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&be(D)}function Y(D){const b=D.texture,ne=r.get(D),ye=r.get(b);D.addEventListener("dispose",ue),D.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=b.version,f.memory.textures++);const _e=D.isWebGLCubeRenderTarget===!0,Ee=D.isWebGLMultipleRenderTargets===!0,Ve=_(D)||u;if(_e){ne.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(u&&b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Pe]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)ne.__webglFramebuffer[Pe][Ie]=s.createFramebuffer()}else ne.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(u&&b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)ne.__webglFramebuffer[Pe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Ee)if(o.drawBuffers){const Pe=D.texture;for(let Ie=0,Xe=Pe.length;Ie<Xe;Ie++){const it=r.get(Pe[Ie]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&Le(D)===!1){const Pe=Ee?b:[b];ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Pe.length;Ie++){const Xe=Pe[Ie];ne.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie]);const it=c.convert(Xe.format,Xe.colorSpace),me=c.convert(Xe.type),ht=L(Xe.internalFormat,it,me,Xe.colorSpace,D.isXRRenderTarget===!0),ot=Ge(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,ht,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(ne.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){n.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),B(s.TEXTURE_CUBE_MAP,b,Ve);for(let Pe=0;Pe<6;Pe++)if(u&&b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)ae(ne.__webglFramebuffer[Pe][Ie],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ie);else ae(ne.__webglFramebuffer[Pe],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);U(b,Ve)&&C(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){const Pe=D.texture;for(let Ie=0,Xe=Pe.length;Ie<Xe;Ie++){const it=Pe[Ie],me=r.get(it);n.bindTexture(s.TEXTURE_2D,me.__webglTexture),B(s.TEXTURE_2D,it,Ve),ae(ne.__webglFramebuffer,D,it,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),U(it,Ve)&&C(s.TEXTURE_2D)}n.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Pe,ye.__webglTexture),B(Pe,b,Ve),u&&b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)ae(ne.__webglFramebuffer[Ie],D,b,s.COLOR_ATTACHMENT0,Pe,Ie);else ae(ne.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,Pe,0);U(b,Ve)&&C(Pe),n.unbindTexture()}D.depthBuffer&&be(D)}function ft(D){const b=_(D)||u,ne=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ye=0,_e=ne.length;ye<_e;ye++){const Ee=ne[ye];if(U(Ee,b)){const Ve=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Pe=r.get(Ee).__webglTexture;n.bindTexture(Ve,Pe),C(Ve),n.unbindTexture()}}}function Te(D){if(u&&D.samples>0&&Le(D)===!1){const b=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ne=D.width,ye=D.height;let _e=s.COLOR_BUFFER_BIT;const Ee=[],Ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(D),Ie=D.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Xe=0;Xe<b.length;Xe++)n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Xe=0;Xe<b.length;Xe++){Ee.push(s.COLOR_ATTACHMENT0+Xe),D.depthBuffer&&Ee.push(Ve);const it=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(it===!1&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ie&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Xe]),it===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ve])),Ie){const me=r.get(b[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,_e,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee)}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Xe=0;Xe<b.length;Xe++){n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Xe]);const it=r.get(b[Xe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,it,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function Ge(D){return Math.min(o.maxSamples,D.samples)}function Le(D){const b=r.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(D){const b=f.render.frame;x.get(D)!==b&&(x.set(D,b),D.update())}function Ye(D,b){const ne=D.colorSpace,ye=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===dd||ne!==zi&&ne!==Qn&&(At.getTransfer(ne)===Ut?u===!1?e.has("EXT_sRGB")===!0&&ye===di?(D.format=dd,D.minFilter=Zn,D.generateMipmaps=!1):b=ag.sRGBToLinear(b):(ye!==di||_e!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}this.allocateTextureUnit=X,this.resetTextureUnits=Me,this.setTexture2D=le,this.setTexture2DArray=fe,this.setTexture3D=q,this.setTextureCube=ee,this.rebindTextures=ke,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Le}function ME(s,e,n){const r=n.isWebGL2;function o(c,f=Qn){let u;const h=At.getTransfer(f);if(c===gr)return s.UNSIGNED_BYTE;if(c===Zm)return s.UNSIGNED_SHORT_4_4_4_4;if(c===Qm)return s.UNSIGNED_SHORT_5_5_5_1;if(c===n_)return s.BYTE;if(c===i_)return s.SHORT;if(c===Md)return s.UNSIGNED_SHORT;if(c===Km)return s.INT;if(c===fr)return s.UNSIGNED_INT;if(c===hr)return s.FLOAT;if(c===Ua)return r?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(c===r_)return s.ALPHA;if(c===di)return s.RGBA;if(c===s_)return s.LUMINANCE;if(c===a_)return s.LUMINANCE_ALPHA;if(c===Gr)return s.DEPTH_COMPONENT;if(c===zs)return s.DEPTH_STENCIL;if(c===dd)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(c===o_)return s.RED;if(c===Jm)return s.RED_INTEGER;if(c===l_)return s.RG;if(c===eg)return s.RG_INTEGER;if(c===tg)return s.RGBA_INTEGER;if(c===Mu||c===Eu||c===wu||c===Tu)if(h===Ut)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(c===Mu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Eu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===wu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===Tu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(c===Mu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Eu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===wu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===Tu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===_p||c===yp||c===Sp||c===Mp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(c===_p)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===yp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===Sp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===Mp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===ng)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Ep||c===wp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(c===Ep)return h===Ut?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(c===wp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===Tp||c===bp||c===Ap||c===Cp||c===Rp||c===Pp||c===Np||c===Lp||c===Dp||c===Up||c===Ip||c===Fp||c===Op||c===kp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(c===Tp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===bp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===Ap)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===Cp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===Rp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===Pp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Np)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Lp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Dp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Up)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Ip)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===Fp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Op)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===kp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===bu||c===zp||c===Bp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(c===bu)return h===Ut?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===zp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===Bp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===c_||c===Hp||c===Gp||c===Vp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(c===bu)return u.COMPRESSED_RED_RGTC1_EXT;if(c===Hp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Gp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===Vp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===Hr?r?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[c]!==void 0?s[c]:null}return{convert:o}}class EE extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pa extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const u=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,r),v=this._getHandJoint(m,T);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=x.position.distanceTo(y.position),E=.02,A=.005;m.inputState.pinching&&S>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Pa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class TE extends Gs{constructor(e,n){super();const r=this;let o=null,c=1,f=null,u="local-floor",h=1,m=null,x=null,y=null,S=null,E=null,A=null;const T=n.getContextAttributes();let _=null,v=null;const U=[],C=[],L=new vt;let W=null;const z=new zn;z.layers.enable(1),z.viewport=new Ot;const k=new zn;k.layers.enable(2),k.viewport=new Ot;const ue=[z,k],R=new EE;R.layers.enable(1),R.layers.enable(2);let I=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=U[B];return V===void 0&&(V=new Zu,U[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=U[B];return V===void 0&&(V=new Zu,U[B]=V),V.getGripSpace()},this.getHand=function(B){let V=U[B];return V===void 0&&(V=new Zu,U[B]=V),V.getHandSpace()};function he(B){const V=C.indexOf(B.inputSource);if(V===-1)return;const Q=U[V];Q!==void 0&&(Q.update(B.inputSource,B.frame,m||f),Q.dispatchEvent({type:B.type,data:B.inputSource}))}function Me(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",Me),o.removeEventListener("inputsourceschange",X);for(let B=0;B<U.length;B++){const V=C[B];V!==null&&(C[B]=null,U[B].disconnect(V))}I=null,ce=null,e.setRenderTarget(_),E=null,S=null,y=null,o=null,v=null,O.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){c=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){u=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(B){m=B},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(B){if(o=B,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",Me),o.addEventListener("inputsourceschange",X),T.xrCompatible!==!0&&await n.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(L),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:o.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(o,n,V),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),v=new jr(E.framebufferWidth,E.framebufferHeight,{format:di,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let V=null,Q=null,de=null;T.depth&&(de=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=T.stencil?zs:Gr,Q=T.stencil?Hr:fr);const ae={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:c};y=new XRWebGLBinding(o,n),S=y.createProjectionLayer(ae),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),v=new jr(S.textureWidth,S.textureHeight,{format:di,type:gr,depthTexture:new vg(S.textureWidth,S.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const pe=e.properties.get(v);pe.__ignoreDepthValues=S.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await o.requestReferenceSpace(u),O.setContext(o),O.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function X(B){for(let V=0;V<B.removed.length;V++){const Q=B.removed[V],de=C.indexOf(Q);de>=0&&(C[de]=null,U[de].disconnect(Q))}for(let V=0;V<B.added.length;V++){const Q=B.added[V];let de=C.indexOf(Q);if(de===-1){for(let pe=0;pe<U.length;pe++)if(pe>=C.length){C.push(Q),de=pe;break}else if(C[pe]===null){C[pe]=Q,de=pe;break}if(de===-1)break}const ae=U[de];ae&&ae.connect(Q)}}const te=new $,le=new $;function fe(B,V,Q){te.setFromMatrixPosition(V.matrixWorld),le.setFromMatrixPosition(Q.matrixWorld);const de=te.distanceTo(le),ae=V.projectionMatrix.elements,pe=Q.projectionMatrix.elements,ve=ae[14]/(ae[10]-1),be=ae[14]/(ae[10]+1),ke=(ae[9]+1)/ae[5],Y=(ae[9]-1)/ae[5],ft=(ae[8]-1)/ae[0],Te=(pe[8]+1)/pe[0],Ge=ve*ft,Le=ve*Te,dt=de/(-ft+Te),Ye=dt*-ft;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ye),B.translateZ(dt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const D=ve+dt,b=be+dt,ne=Ge-Ye,ye=Le+(de-Ye),_e=ke*be/b*D,Ee=Y*be/b*D;B.projectionMatrix.makePerspective(ne,ye,_e,Ee,D,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(o===null)return;R.near=k.near=z.near=B.near,R.far=k.far=z.far=B.far,(I!==R.near||ce!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,ce=R.far);const V=B.parent,Q=R.cameras;q(R,V);for(let de=0;de<Q.length;de++)q(Q[de],V);Q.length===2?fe(R,z,k):R.projectionMatrix.copy(z.projectionMatrix),ee(B,R,V)};function ee(B,V,Q){Q===null?B.matrix.copy(V.matrixWorld):(B.matrix.copy(Q.matrixWorld),B.matrix.invert(),B.matrix.multiply(V.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(V.projectionMatrix),B.projectionMatrixInverse.copy(V.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=fd*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&E===null))return h},this.setFoveation=function(B){h=B,S!==null&&(S.fixedFoveation=B),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=B)};let P=null;function M(B,V){if(x=V.getViewerPose(m||f),A=V,x!==null){const Q=x.views;E!==null&&(e.setRenderTargetFramebuffer(v,E.framebuffer),e.setRenderTarget(v));let de=!1;Q.length!==R.cameras.length&&(R.cameras.length=0,de=!0);for(let ae=0;ae<Q.length;ae++){const pe=Q[ae];let ve=null;if(E!==null)ve=E.getViewport(pe);else{const ke=y.getViewSubImage(S,pe);ve=ke.viewport,ae===0&&(e.setRenderTargetTextures(v,ke.colorTexture,S.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(v))}let be=ue[ae];be===void 0&&(be=new zn,be.layers.enable(ae),be.viewport=new Ot,ue[ae]=be),be.matrix.fromArray(pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ve.x,ve.y,ve.width,ve.height),ae===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),de===!0&&R.cameras.push(be)}}for(let Q=0;Q<U.length;Q++){const de=C[Q],ae=U[Q];de!==null&&ae!==void 0&&ae.update(de,V,m||f)}P&&P(B,V),V.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:V}),A=null}const O=new xg;O.setAnimationLoop(M),this.setAnimationLoop=function(B){P=B},this.dispose=function(){}}}function bE(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,pg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,U,C,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(_,v):v.isMeshToonMaterial?(c(_,v),y(_,v)):v.isMeshPhongMaterial?(c(_,v),x(_,v)):v.isMeshStandardMaterial?(c(_,v),S(_,v),v.isMeshPhysicalMaterial&&E(_,v,L)):v.isMeshMatcapMaterial?(c(_,v),A(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),T(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(f(_,v),v.isLineDashedMaterial&&u(_,v)):v.isPointsMaterial?h(_,v,U,C):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Ln&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Ln&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const U=e.get(v).envMap;if(U&&(_.envMap.value=U,_.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap){_.lightMap.value=v.lightMap;const C=s._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=v.lightMapIntensity*C,n(v.lightMap,_.lightMapTransform)}v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function f(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function u(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,U,C){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*U,_.scale.value=C*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function S(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),e.get(v).envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function E(_,v,U){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ln&&_.clearcoatNormalScale.value.negate())),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function A(_,v){v.matcap&&(_.matcap.value=v.matcap)}function T(_,v){const U=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function AE(s,e,n,r){let o={},c={},f=[];const u=n.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(U,C){const L=C.program;r.uniformBlockBinding(U,L)}function m(U,C){let L=o[U.id];L===void 0&&(A(U),L=x(U),o[U.id]=L,U.addEventListener("dispose",_));const W=C.program;r.updateUBOMapping(U,W);const z=e.render.frame;c[U.id]!==z&&(S(U),c[U.id]=z)}function x(U){const C=y();U.__bindingPointIndex=C;const L=s.createBuffer(),W=U.__size,z=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,W,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,L),L}function y(){for(let U=0;U<u;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const C=o[U.id],L=U.uniforms,W=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let z=0,k=L.length;z<k;z++){const ue=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,I=ue.length;R<I;R++){const ce=ue[R];if(E(ce,z,R,W)===!0){const he=ce.__offset,Me=Array.isArray(ce.value)?ce.value:[ce.value];let X=0;for(let te=0;te<Me.length;te++){const le=Me[te],fe=T(le);typeof le=="number"||typeof le=="boolean"?(ce.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,he+X,ce.__data)):le.isMatrix3?(ce.__data[0]=le.elements[0],ce.__data[1]=le.elements[1],ce.__data[2]=le.elements[2],ce.__data[3]=0,ce.__data[4]=le.elements[3],ce.__data[5]=le.elements[4],ce.__data[6]=le.elements[5],ce.__data[7]=0,ce.__data[8]=le.elements[6],ce.__data[9]=le.elements[7],ce.__data[10]=le.elements[8],ce.__data[11]=0):(le.toArray(ce.__data,X),X+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,he,ce.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(U,C,L,W){const z=U.value,k=C+"_"+L;if(W[k]===void 0)return typeof z=="number"||typeof z=="boolean"?W[k]=z:W[k]=z.clone(),!0;{const ue=W[k];if(typeof z=="number"||typeof z=="boolean"){if(ue!==z)return W[k]=z,!0}else if(ue.equals(z)===!1)return ue.copy(z),!0}return!1}function A(U){const C=U.uniforms;let L=0;const W=16;for(let k=0,ue=C.length;k<ue;k++){const R=Array.isArray(C[k])?C[k]:[C[k]];for(let I=0,ce=R.length;I<ce;I++){const he=R[I],Me=Array.isArray(he.value)?he.value:[he.value];for(let X=0,te=Me.length;X<te;X++){const le=Me[X],fe=T(le),q=L%W;q!==0&&W-q<fe.boundary&&(L+=W-q),he.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=L,L+=fe.storage}}}const z=L%W;return z>0&&(L+=W-z),U.__size=L,U.__cache={},this}function T(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function _(U){const C=U.target;C.removeEventListener("dispose",_);const L=f.indexOf(C.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete c[C.id]}function v(){for(const U in o)s.deleteBuffer(o[U]);f=[],o={},c={}}return{bind:h,update:m,dispose:v}}class wg{constructor(e={}){const{canvas:n=M_(),context:r=null,depth:o=!0,stencil:c=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=f;const E=new Uint32Array(4),A=new Int32Array(4);let T=null,_=null;const v=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const C=this;let L=!1,W=0,z=0,k=null,ue=-1,R=null;const I=new Ot,ce=new Ot;let he=null;const Me=new St(0);let X=0,te=n.width,le=n.height,fe=1,q=null,ee=null;const P=new Ot(0,0,te,le),M=new Ot(0,0,te,le);let O=!1;const B=new wd;let V=!1,Q=!1,de=null;const ae=new Wt,pe=new vt,ve=new $,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return k===null?fe:1}let Y=r;function ft(N,Z){for(let se=0;se<N.length;se++){const oe=N[se],re=n.getContext(oe,Z);if(re!==null)return re}return null}try{const N={alpha:!0,depth:o,stencil:c,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sd}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),Y===null){const Z=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&Z.shift(),Y=ft(Z,N),Y===null)throw ft(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Te,Ge,Le,dt,Ye,D,b,ne,ye,_e,Ee,Ve,Pe,Ie,Xe,it,me,ht,ot,et,qe,Be,rt,_t;function Rt(){Te=new OM(Y),Ge=new PM(Y,Te,e),Te.init(Ge),Be=new ME(Y,Te,Ge),Le=new yE(Y,Te,Ge),dt=new BM(Y),Ye=new aE,D=new SE(Y,Te,Le,Ye,Ge,Be,dt),b=new LM(C),ne=new FM(C),ye=new q_(Y,Ge),rt=new CM(Y,Te,ye,Ge),_e=new kM(Y,ye,dt,rt),Ee=new jM(Y,_e,ye,dt),ot=new VM(Y,Ge,D),it=new NM(Ye),Ve=new sE(C,b,ne,Te,Ge,rt,it),Pe=new bE(C,Ye),Ie=new lE,Xe=new pE(Te,Ge),ht=new AM(C,b,ne,Le,Ee,S,h),me=new _E(C,Ee,Ge),_t=new AE(Y,dt,Ge,Le),et=new RM(Y,Te,dt,Ge),qe=new zM(Y,Te,dt,Ge),dt.programs=Ve.programs,C.capabilities=Ge,C.extensions=Te,C.properties=Ye,C.renderLists=Ie,C.shadowMap=me,C.state=Le,C.info=dt}Rt();const at=new TE(C,Y);this.xr=at,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const N=Te.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Te.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(N){N!==void 0&&(fe=N,this.setSize(te,le,!1))},this.getSize=function(N){return N.set(te,le)},this.setSize=function(N,Z,se=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=N,le=Z,n.width=Math.floor(N*fe),n.height=Math.floor(Z*fe),se===!0&&(n.style.width=N+"px",n.style.height=Z+"px"),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(te*fe,le*fe).floor()},this.setDrawingBufferSize=function(N,Z,se){te=N,le=Z,fe=se,n.width=Math.floor(N*se),n.height=Math.floor(Z*se),this.setViewport(0,0,N,Z)},this.getCurrentViewport=function(N){return N.copy(I)},this.getViewport=function(N){return N.copy(P)},this.setViewport=function(N,Z,se,oe){N.isVector4?P.set(N.x,N.y,N.z,N.w):P.set(N,Z,se,oe),Le.viewport(I.copy(P).multiplyScalar(fe).floor())},this.getScissor=function(N){return N.copy(M)},this.setScissor=function(N,Z,se,oe){N.isVector4?M.set(N.x,N.y,N.z,N.w):M.set(N,Z,se,oe),Le.scissor(ce.copy(M).multiplyScalar(fe).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(N){Le.setScissorTest(O=N)},this.setOpaqueSort=function(N){q=N},this.setTransparentSort=function(N){ee=N},this.getClearColor=function(N){return N.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(N=!0,Z=!0,se=!0){let oe=0;if(N){let re=!1;if(k!==null){const De=k.texture.format;re=De===tg||De===eg||De===Jm}if(re){const De=k.texture.type,We=De===gr||De===fr||De===Md||De===Hr||De===Zm||De===Qm,Qe=ht.getClearColor(),Fe=ht.getClearAlpha(),lt=Qe.r,nt=Qe.g,st=Qe.b;We?(E[0]=lt,E[1]=nt,E[2]=st,E[3]=Fe,Y.clearBufferuiv(Y.COLOR,0,E)):(A[0]=lt,A[1]=nt,A[2]=st,A[3]=Fe,Y.clearBufferiv(Y.COLOR,0,A))}else oe|=Y.COLOR_BUFFER_BIT}Z&&(oe|=Y.DEPTH_BUFFER_BIT),se&&(oe|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Ie.dispose(),Xe.dispose(),Ye.dispose(),b.dispose(),ne.dispose(),Ee.dispose(),rt.dispose(),_t.dispose(),Ve.dispose(),at.dispose(),at.removeEventListener("sessionstart",Jt),at.removeEventListener("sessionend",Mt),de&&(de.dispose(),de=null),Yt.stop()};function Ae(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const N=dt.autoReset,Z=me.enabled,se=me.autoUpdate,oe=me.needsUpdate,re=me.type;Rt(),dt.autoReset=N,me.enabled=Z,me.autoUpdate=se,me.needsUpdate=oe,me.type=re}function Ce(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ne(N){const Z=N.target;Z.removeEventListener("dispose",Ne),Je(Z)}function Je(N){$e(N),Ye.remove(N)}function $e(N){const Z=Ye.get(N).programs;Z!==void 0&&(Z.forEach(function(se){Ve.releaseProgram(se)}),N.isShaderMaterial&&Ve.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,se,oe,re,De){Z===null&&(Z=be);const We=re.isMesh&&re.matrixWorld.determinant()<0,Qe=Fl(N,Z,se,oe,re);Le.setMaterial(oe,We);let Fe=se.index,lt=1;if(oe.wireframe===!0){if(Fe=_e.getWireframeAttribute(se),Fe===void 0)return;lt=2}const nt=se.drawRange,st=se.attributes.position;let Pt=nt.start*lt,mn=(nt.start+nt.count)*lt;De!==null&&(Pt=Math.max(Pt,De.start*lt),mn=Math.min(mn,(De.start+De.count)*lt)),Fe!==null?(Pt=Math.max(Pt,0),mn=Math.min(mn,Fe.count)):st!=null&&(Pt=Math.max(Pt,0),mn=Math.min(mn,st.count));const Vt=mn-Pt;if(Vt<0||Vt===1/0)return;rt.setup(re,oe,Qe,se,Fe);let Mn,xt=et;if(Fe!==null&&(Mn=ye.get(Fe),xt=qe,xt.setIndex(Mn)),re.isMesh)oe.wireframe===!0?(Le.setLineWidth(oe.wireframeLinewidth*ke()),xt.setMode(Y.LINES)):xt.setMode(Y.TRIANGLES);else if(re.isLine){let ct=oe.linewidth;ct===void 0&&(ct=1),Le.setLineWidth(ct*ke()),re.isLineSegments?xt.setMode(Y.LINES):re.isLineLoop?xt.setMode(Y.LINE_LOOP):xt.setMode(Y.LINE_STRIP)}else re.isPoints?xt.setMode(Y.POINTS):re.isSprite&&xt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)xt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)xt.renderInstances(Pt,Vt,re.count);else if(se.isInstancedBufferGeometry){const ct=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,gn=Math.min(se.instanceCount,ct);xt.renderInstances(Pt,Vt,gn)}else xt.render(Pt,Vt)};function wt(N,Z,se){N.transparent===!0&&N.side===Oi&&N.forceSinglePass===!1?(N.side=Ln,N.needsUpdate=!0,Bi(N,Z,se),N.side=xr,N.needsUpdate=!0,Bi(N,Z,se),N.side=Oi):Bi(N,Z,se)}this.compile=function(N,Z,se=null){se===null&&(se=N),_=Xe.get(se),_.init(),U.push(_),se.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(_.pushLight(re),re.castShadow&&_.pushShadow(re))}),N!==se&&N.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(_.pushLight(re),re.castShadow&&_.pushShadow(re))}),_.setupLights(C._useLegacyLights);const oe=new Set;return N.traverse(function(re){const De=re.material;if(De)if(Array.isArray(De))for(let We=0;We<De.length;We++){const Qe=De[We];wt(Qe,se,re),oe.add(Qe)}else wt(De,se,re),oe.add(De)}),U.pop(),_=null,oe},this.compileAsync=function(N,Z,se=null){const oe=this.compile(N,Z,se);return new Promise(re=>{function De(){if(oe.forEach(function(We){Ye.get(We).currentProgram.isReady()&&oe.delete(We)}),oe.size===0){re(N);return}setTimeout(De,10)}Te.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Tt=null;function Bt(N){Tt&&Tt(N)}function Jt(){Yt.stop()}function Mt(){Yt.start()}const Yt=new xg;Yt.setAnimationLoop(Bt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(N){Tt=N,at.setAnimationLoop(N),N===null?Yt.stop():Yt.start()},at.addEventListener("sessionstart",Jt),at.addEventListener("sessionend",Mt),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(Z),Z=at.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,Z,k),_=Xe.get(N,U.length),_.init(),U.push(_),ae.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B.setFromProjectionMatrix(ae),Q=this.localClippingEnabled,V=it.init(this.clippingPlanes,Q),T=Ie.get(N,v.length),T.init(),v.push(T),ln(N,Z,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(q,ee),this.info.render.frame++,V===!0&&it.beginShadows();const se=_.state.shadowsArray;if(me.render(se,N,Z),V===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(T,N),_.setupLights(C._useLegacyLights),Z.isArrayCamera){const oe=Z.cameras;for(let re=0,De=oe.length;re<De;re++){const We=oe[re];Ga(T,N,We,We.viewport)}}else Ga(T,N,Z);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),N.isScene===!0&&N.onAfterRender(C,N,Z),rt.resetDefaultState(),ue=-1,R=null,U.pop(),U.length>0?_=U[U.length-1]:_=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function ln(N,Z,se,oe){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)se=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)_.pushLight(N),N.castShadow&&_.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||B.intersectsSprite(N)){oe&&ve.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ae);const We=Ee.update(N),Qe=N.material;Qe.visible&&T.push(N,We,Qe,se,ve.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||B.intersectsObject(N))){const We=Ee.update(N),Qe=N.material;if(oe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ve.copy(N.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),ve.copy(We.boundingSphere.center)),ve.applyMatrix4(N.matrixWorld).applyMatrix4(ae)),Array.isArray(Qe)){const Fe=We.groups;for(let lt=0,nt=Fe.length;lt<nt;lt++){const st=Fe[lt],Pt=Qe[st.materialIndex];Pt&&Pt.visible&&T.push(N,We,Pt,se,ve.z,st)}}else Qe.visible&&T.push(N,We,Qe,se,ve.z,null)}}const De=N.children;for(let We=0,Qe=De.length;We<Qe;We++)ln(De[We],Z,se,oe)}function Ga(N,Z,se,oe){const re=N.opaque,De=N.transmissive,We=N.transparent;_.setupLightsView(se),V===!0&&it.setGlobalState(C.clippingPlanes,se),De.length>0&&vr(re,De,Z,se),oe&&Le.viewport(I.copy(oe)),re.length>0&&_i(re,Z,se),De.length>0&&_i(De,Z,se),We.length>0&&_i(We,Z,se),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function vr(N,Z,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const De=Ge.isWebGL2;de===null&&(de=new jr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Ua:gr,minFilter:Da,samples:De?4:0})),C.getDrawingBufferSize(pe),De?de.setSize(pe.x,pe.y):de.setSize(hd(pe.x),hd(pe.y));const We=C.getRenderTarget();C.setRenderTarget(de),C.getClearColor(Me),X=C.getClearAlpha(),X<1&&C.setClearColor(16777215,.5),C.clear();const Qe=C.toneMapping;C.toneMapping=mr,_i(N,se,oe),D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de);let Fe=!1;for(let lt=0,nt=Z.length;lt<nt;lt++){const st=Z[lt],Pt=st.object,mn=st.geometry,Vt=st.material,Mn=st.group;if(Vt.side===Oi&&Pt.layers.test(oe.layers)){const xt=Vt.side;Vt.side=Ln,Vt.needsUpdate=!0,_r(Pt,se,oe,mn,Vt,Mn),Vt.side=xt,Vt.needsUpdate=!0,Fe=!0}}Fe===!0&&(D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de)),C.setRenderTarget(We),C.setClearColor(Me,X),C.toneMapping=Qe}function _i(N,Z,se){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,De=N.length;re<De;re++){const We=N[re],Qe=We.object,Fe=We.geometry,lt=oe===null?We.material:oe,nt=We.group;Qe.layers.test(se.layers)&&_r(Qe,Z,se,Fe,lt,nt)}}function _r(N,Z,se,oe,re,De){N.onBeforeRender(C,Z,se,oe,re,De),N.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(C,Z,se,oe,N,De),re.transparent===!0&&re.side===Oi&&re.forceSinglePass===!1?(re.side=Ln,re.needsUpdate=!0,C.renderBufferDirect(se,Z,oe,re,N,De),re.side=xr,re.needsUpdate=!0,C.renderBufferDirect(se,Z,oe,re,N,De),re.side=Oi):C.renderBufferDirect(se,Z,oe,re,N,De),N.onAfterRender(C,Z,se,oe,re,De)}function Bi(N,Z,se){Z.isScene!==!0&&(Z=be);const oe=Ye.get(N),re=_.state.lights,De=_.state.shadowsArray,We=re.state.version,Qe=Ve.getParameters(N,re.state,De,Z,se),Fe=Ve.getProgramCacheKey(Qe);let lt=oe.programs;oe.environment=N.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(N.isMeshStandardMaterial?ne:b).get(N.envMap||oe.environment),lt===void 0&&(N.addEventListener("dispose",Ne),lt=new Map,oe.programs=lt);let nt=lt.get(Fe);if(nt!==void 0){if(oe.currentProgram===nt&&oe.lightsStateVersion===We)return ja(N,Qe),nt}else Qe.uniforms=Ve.getUniforms(N),N.onBuild(se,Qe,C),N.onBeforeCompile(Qe,C),nt=Ve.acquireProgram(Qe,Fe),lt.set(Fe,nt),oe.uniforms=Qe.uniforms;const st=oe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(st.clippingPlanes=it.uniform),ja(N,Qe),oe.needsLights=Wa(N),oe.lightsStateVersion=We,oe.needsLights&&(st.ambientLightColor.value=re.state.ambient,st.lightProbe.value=re.state.probe,st.directionalLights.value=re.state.directional,st.directionalLightShadows.value=re.state.directionalShadow,st.spotLights.value=re.state.spot,st.spotLightShadows.value=re.state.spotShadow,st.rectAreaLights.value=re.state.rectArea,st.ltc_1.value=re.state.rectAreaLTC1,st.ltc_2.value=re.state.rectAreaLTC2,st.pointLights.value=re.state.point,st.pointLightShadows.value=re.state.pointShadow,st.hemisphereLights.value=re.state.hemi,st.directionalShadowMap.value=re.state.directionalShadowMap,st.directionalShadowMatrix.value=re.state.directionalShadowMatrix,st.spotShadowMap.value=re.state.spotShadowMap,st.spotLightMatrix.value=re.state.spotLightMatrix,st.spotLightMap.value=re.state.spotLightMap,st.pointShadowMap.value=re.state.pointShadowMap,st.pointShadowMatrix.value=re.state.pointShadowMatrix),oe.currentProgram=nt,oe.uniformsList=null,nt}function Va(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=yl.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function ja(N,Z){const se=Ye.get(N);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Fl(N,Z,se,oe,re){Z.isScene!==!0&&(Z=be),D.resetTextureUnits();const De=Z.fog,We=oe.isMeshStandardMaterial?Z.environment:null,Qe=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:zi,Fe=(oe.isMeshStandardMaterial?ne:b).get(oe.envMap||We),lt=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),st=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,mn=!!se.morphAttributes.color;let Vt=mr;oe.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const Mn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,xt=Mn!==void 0?Mn.length:0,ct=Ye.get(oe),gn=_.state.lights;if(V===!0&&(Q===!0||N!==R)){const En=N===R&&oe.id===ue;it.setState(oe,N,En)}let It=!1;oe.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==gn.state.version||ct.outputColorSpace!==Qe||re.isBatchedMesh&&ct.batching===!1||!re.isBatchedMesh&&ct.batching===!0||re.isInstancedMesh&&ct.instancing===!1||!re.isInstancedMesh&&ct.instancing===!0||re.isSkinnedMesh&&ct.skinning===!1||!re.isSkinnedMesh&&ct.skinning===!0||re.isInstancedMesh&&ct.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ct.instancingColor===!1&&re.instanceColor!==null||ct.envMap!==Fe||oe.fog===!0&&ct.fog!==De||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==it.numPlanes||ct.numIntersection!==it.numIntersection)||ct.vertexAlphas!==lt||ct.vertexTangents!==nt||ct.morphTargets!==st||ct.morphNormals!==Pt||ct.morphColors!==mn||ct.toneMapping!==Vt||Ge.isWebGL2===!0&&ct.morphTargetsCount!==xt)&&(It=!0):(It=!0,ct.__version=oe.version);let Si=ct.currentProgram;It===!0&&(Si=Bi(oe,Z,re));let Xa=!1,hi=!1,Hi=!1;const Ht=Si.getUniforms(),Vn=ct.uniforms;if(Le.useProgram(Si.program)&&(Xa=!0,hi=!0,Hi=!0),oe.id!==ue&&(ue=oe.id,hi=!0),Xa||R!==N){Ht.setValue(Y,"projectionMatrix",N.projectionMatrix),Ht.setValue(Y,"viewMatrix",N.matrixWorldInverse);const En=Ht.map.cameraPosition;En!==void 0&&En.setValue(Y,ve.setFromMatrixPosition(N.matrixWorld)),Ge.logarithmicDepthBuffer&&Ht.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ht.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,hi=!0,Hi=!0)}if(re.isSkinnedMesh){Ht.setOptional(Y,re,"bindMatrix"),Ht.setOptional(Y,re,"bindMatrixInverse");const En=re.skeleton;En&&(Ge.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Ht.setValue(Y,"boneTexture",En.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Ht.setOptional(Y,re,"batchingTexture"),Ht.setValue(Y,"batchingTexture",re._matricesTexture,D));const js=se.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0&&Ge.isWebGL2===!0)&&ot.update(re,se,Si),(hi||ct.receiveShadow!==re.receiveShadow)&&(ct.receiveShadow=re.receiveShadow,Ht.setValue(Y,"receiveShadow",re.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Vn.envMap.value=Fe,Vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),hi&&(Ht.setValue(Y,"toneMappingExposure",C.toneMappingExposure),ct.needsLights&&yi(Vn,Hi),De&&oe.fog===!0&&Pe.refreshFogUniforms(Vn,De),Pe.refreshMaterialUniforms(Vn,oe,fe,le,de),yl.upload(Y,Va(ct),Vn,D)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(yl.upload(Y,Va(ct),Vn,D),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ht.setValue(Y,"center",re.center),Ht.setValue(Y,"modelViewMatrix",re.modelViewMatrix),Ht.setValue(Y,"normalMatrix",re.normalMatrix),Ht.setValue(Y,"modelMatrix",re.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const En=oe.uniformsGroups;for(let yr=0,qa=En.length;yr<qa;yr++)if(Ge.isWebGL2){const Xr=En[yr];_t.update(Xr,Si),_t.bind(Xr,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function yi(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function Wa(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(N,Z,se){Ye.get(N.texture).__webglTexture=Z,Ye.get(N.depthTexture).__webglTexture=se;const oe=Ye.get(N);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,Z){const se=Ye.get(N);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,se=0){k=N,W=Z,z=se;let oe=!0,re=null,De=!1,We=!1;if(N){const Fe=Ye.get(N);Fe.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(Y.FRAMEBUFFER,null),oe=!1):Fe.__webglFramebuffer===void 0?D.setupRenderTarget(N):Fe.__hasExternalTextures&&D.rebindTextures(N,Ye.get(N.texture).__webglTexture,Ye.get(N.depthTexture).__webglTexture);const lt=N.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(We=!0);const nt=Ye.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(nt[Z])?re=nt[Z][se]:re=nt[Z],De=!0):Ge.isWebGL2&&N.samples>0&&D.useMultisampledRTT(N)===!1?re=Ye.get(N).__webglMultisampledFramebuffer:Array.isArray(nt)?re=nt[se]:re=nt,I.copy(N.viewport),ce.copy(N.scissor),he=N.scissorTest}else I.copy(P).multiplyScalar(fe).floor(),ce.copy(M).multiplyScalar(fe).floor(),he=O;if(Le.bindFramebuffer(Y.FRAMEBUFFER,re)&&Ge.drawBuffers&&oe&&Le.drawBuffers(N,re),Le.viewport(I),Le.scissor(ce),Le.setScissorTest(he),De){const Fe=Ye.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,se)}else if(We){const Fe=Ye.get(N.texture),lt=Z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Fe.__webglTexture,se||0,lt)}ue=-1},this.readRenderTargetPixels=function(N,Z,se,oe,re,De,We){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Ye.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe){Le.bindFramebuffer(Y.FRAMEBUFFER,Qe);try{const Fe=N.texture,lt=Fe.format,nt=Fe.type;if(lt!==di&&Be.convert(lt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===Ua&&(Te.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Te.has("EXT_color_buffer_float"));if(nt!==gr&&Be.convert(nt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===hr&&(Ge.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-oe&&se>=0&&se<=N.height-re&&Y.readPixels(Z,se,oe,re,Be.convert(lt),Be.convert(nt),De)}finally{const Fe=k!==null?Ye.get(k).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(N,Z,se=0){const oe=Math.pow(2,-se),re=Math.floor(Z.image.width*oe),De=Math.floor(Z.image.height*oe);D.setTexture2D(Z,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,N.x,N.y,re,De),Le.unbindTexture()},this.copyTextureToTexture=function(N,Z,se,oe=0){const re=Z.image.width,De=Z.image.height,We=Be.convert(se.format),Qe=Be.convert(se.type);D.setTexture2D(se,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,se.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,oe,N.x,N.y,re,De,We,Qe,Z.image.data):Z.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,oe,N.x,N.y,Z.mipmaps[0].width,Z.mipmaps[0].height,We,Z.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,oe,N.x,N.y,We,Qe,Z.image),oe===0&&se.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(N,Z,se,oe,re=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=N.max.x-N.min.x+1,We=N.max.y-N.min.y+1,Qe=N.max.z-N.min.z+1,Fe=Be.convert(oe.format),lt=Be.convert(oe.type);let nt;if(oe.isData3DTexture)D.setTexture3D(oe,0),nt=Y.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)D.setTexture2DArray(oe,0),nt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,oe.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,oe.unpackAlignment);const st=Y.getParameter(Y.UNPACK_ROW_LENGTH),Pt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),mn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Vt=Y.getParameter(Y.UNPACK_SKIP_ROWS),Mn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),xt=se.isCompressedTexture?se.mipmaps[re]:se.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,N.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,N.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,N.min.z),se.isDataTexture||se.isData3DTexture?Y.texSubImage3D(nt,re,Z.x,Z.y,Z.z,De,We,Qe,Fe,lt,xt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(nt,re,Z.x,Z.y,Z.z,De,We,Qe,Fe,xt.data)):Y.texSubImage3D(nt,re,Z.x,Z.y,Z.z,De,We,Qe,Fe,lt,xt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,st),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Pt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,mn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Vt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Mn),re===0&&oe.generateMipmaps&&Y.generateMipmap(nt),Le.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?D.setTextureCube(N,0):N.isData3DTexture?D.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?D.setTexture2DArray(N,0):D.setTexture2D(N,0),Le.unbindTexture()},this.resetState=function(){W=0,z=0,k=null,Le.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ed?"display-p3":"srgb",n.unpackColorSpace=At.workingColorSpace===Nl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?Vr:ig}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vr?on:zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CE extends wg{}CE.prototype.isWebGL1Renderer=!0;class RE extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class md extends Ba{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lm=new Wt,gd=new cg,vl=new Ll,_l=new $;class Dm extends Sn{constructor(e=new Jn,n=new md){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(o),vl.radius+=c,e.ray.intersectsSphere(vl)===!1)return;Lm.copy(o).invert(),gd.copy(e.ray).applyMatrix4(Lm);const u=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,m=r.index,y=r.attributes.position;if(m!==null){const S=Math.max(0,f.start),E=Math.min(m.count,f.start+f.count);for(let A=S,T=E;A<T;A++){const _=m.getX(A);_l.fromBufferAttribute(y,_),Um(_l,_,h,o,e,n,this)}}else{const S=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let A=S,T=E;A<T;A++)_l.fromBufferAttribute(y,A),Um(_l,A,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const u=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}}function Um(s,e,n,r,o,c,f){const u=gd.distanceSqToPoint(s);if(u<n){const h=new $;gd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,object:f})}}class Il extends Jn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],f=[];u(o),m(r),x(),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(c.slice(),3)),this.setAttribute("uv",new Gn(f,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(U){const C=new $,L=new $,W=new $;for(let z=0;z<n.length;z+=3)E(n[z+0],C),E(n[z+1],L),E(n[z+2],W),h(C,L,W,U)}function h(U,C,L,W){const z=W+1,k=[];for(let ue=0;ue<=z;ue++){k[ue]=[];const R=U.clone().lerp(L,ue/z),I=C.clone().lerp(L,ue/z),ce=z-ue;for(let he=0;he<=ce;he++)he===0&&ue===z?k[ue][he]=R:k[ue][he]=R.clone().lerp(I,he/ce)}for(let ue=0;ue<z;ue++)for(let R=0;R<2*(z-ue)-1;R++){const I=Math.floor(R/2);R%2===0?(S(k[ue][I+1]),S(k[ue+1][I]),S(k[ue][I])):(S(k[ue][I+1]),S(k[ue+1][I+1]),S(k[ue+1][I]))}}function m(U){const C=new $;for(let L=0;L<c.length;L+=3)C.x=c[L+0],C.y=c[L+1],C.z=c[L+2],C.normalize().multiplyScalar(U),c[L+0]=C.x,c[L+1]=C.y,c[L+2]=C.z}function x(){const U=new $;for(let C=0;C<c.length;C+=3){U.x=c[C+0],U.y=c[C+1],U.z=c[C+2];const L=_(U)/2/Math.PI+.5,W=v(U)/Math.PI+.5;f.push(L,1-W)}A(),y()}function y(){for(let U=0;U<f.length;U+=6){const C=f[U+0],L=f[U+2],W=f[U+4],z=Math.max(C,L,W),k=Math.min(C,L,W);z>.9&&k<.1&&(C<.2&&(f[U+0]+=1),L<.2&&(f[U+2]+=1),W<.2&&(f[U+4]+=1))}}function S(U){c.push(U.x,U.y,U.z)}function E(U,C){const L=U*3;C.x=e[L+0],C.y=e[L+1],C.z=e[L+2]}function A(){const U=new $,C=new $,L=new $,W=new $,z=new vt,k=new vt,ue=new vt;for(let R=0,I=0;R<c.length;R+=9,I+=6){U.set(c[R+0],c[R+1],c[R+2]),C.set(c[R+3],c[R+4],c[R+5]),L.set(c[R+6],c[R+7],c[R+8]),z.set(f[I+0],f[I+1]),k.set(f[I+2],f[I+3]),ue.set(f[I+4],f[I+5]),W.copy(U).add(C).add(L).divideScalar(3);const ce=_(W);T(z,I+0,U,ce),T(k,I+2,C,ce),T(ue,I+4,L,ce)}}function T(U,C,L,W){W<0&&U.x===1&&(f[C]=U.x-1),L.x===0&&L.z===0&&(f[C]=W/2/Math.PI+.5)}function _(U){return Math.atan2(U.z,-U.x)}function v(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.vertices,e.indices,e.radius,e.details)}}class Ad extends Il{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ad(e.radius,e.detail)}}class Cd extends Il{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Cd(e.radius,e.detail)}}class Rd extends Jn{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const f=[],u=[],h=[],m=[],x=new $,y=new $,S=new $;for(let E=0;E<=r;E++)for(let A=0;A<=o;A++){const T=A/o*c,_=E/r*Math.PI*2;y.x=(e+n*Math.cos(_))*Math.cos(T),y.y=(e+n*Math.cos(_))*Math.sin(T),y.z=n*Math.sin(_),u.push(y.x,y.y,y.z),x.x=e*Math.cos(T),x.y=e*Math.sin(T),S.subVectors(y,x).normalize(),h.push(S.x,S.y,S.z),m.push(A/o),m.push(E/r)}for(let E=1;E<=r;E++)for(let A=1;A<=o;A++){const T=(o+1)*E+A-1,_=(o+1)*(E-1)+A-1,v=(o+1)*(E-1)+A,U=(o+1)*E+A;f.push(T,_,U),f.push(_,v,U)}this.setIndex(f),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(h,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tg extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Qu=new Wt,Im=new $,Fm=new $;class PE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),n.position.copy(Im),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Om=new Wt,Ra=new $,Ju=new $;class NE extends PE{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ra),Ju.copy(r.position),Ju.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Ju),r.updateMatrixWorld(),o.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Om.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Om)}}class km extends Tg{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new NE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LE extends Tg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class DE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);const UE=()=>{const s=Ct.useRef(null),e=Ct.useRef({x:0,y:0,targetX:0,targetY:0});return Ct.useEffect(()=>{if(!s.current)return;const n=s.current,r=n.clientWidth,o=n.clientHeight,c=new RE,f=new zn(50,r/o,.1,1e3);f.position.z=24;const u=new wg({alpha:!0,antialias:!0,powerPreference:"high-performance"});u.setSize(r,o),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(u.domElement);const h=new Pa;c.add(h);const m=new Ad(5.2,1),x=new La({color:61695,wireframe:!0,transparent:!0,opacity:.28}),y=new fi(m,x);h.add(y);const S=new Cd(2.8,0),E=new La({color:6514417,wireframe:!0,transparent:!0,opacity:.6}),A=new fi(S,E);h.add(A);const T=new Jn,_=m.attributes.position.array;T.setAttribute("position",new Hn(_,3));const v=new md({color:61695,size:.35,transparent:!0,opacity:.85}),U=new Dm(T,v);h.add(U);const C=(V,Q,de,ae)=>{const pe=new Rd(V,Q,16,100),ve=new La({color:de,wireframe:!0,transparent:!0,opacity:ae});return new fi(pe,ve)},L=C(7.8,.04,6514417,.45);L.rotation.x=Math.PI/3,h.add(L);const W=C(9.2,.04,1096065,.35);W.rotation.y=Math.PI/4,W.rotation.x=-Math.PI/6,h.add(W);const z=C(11,.03,61695,.25);z.rotation.z=Math.PI/5,h.add(z);const k=280,ue=new Jn,R=new Float32Array(k*3),I=new Float32Array(k*3),ce=new St(61695),he=new St(6514417),Me=new St(1096065);for(let V=0;V<k;V++){const Q=6+Math.random()*9,de=Math.random()*Math.PI*2,ae=Math.acos(Math.random()*2-1);R[V*3]=Q*Math.sin(ae)*Math.cos(de),R[V*3+1]=Q*Math.sin(ae)*Math.sin(de),R[V*3+2]=Q*Math.cos(ae);const pe=Math.random(),ve=pe<.4?ce:pe<.7?he:Me;I[V*3]=ve.r,I[V*3+1]=ve.g,I[V*3+2]=ve.b}ue.setAttribute("position",new Hn(R,3)),ue.setAttribute("color",new Hn(I,3));const X=new md({size:.22,vertexColors:!0,transparent:!0,opacity:.7,blending:rd}),te=new Dm(ue,X);h.add(te);const le=new LE(16777215,.8);c.add(le);const fe=new km(61695,2,50);fe.position.set(10,10,15),c.add(fe);const q=new km(6514417,2,50);q.position.set(-10,-10,10),c.add(q);const ee=V=>{const Q=n.getBoundingClientRect(),de=(V.clientX-Q.left)/Q.width*2-1,ae=-((V.clientY-Q.top)/Q.height*2-1);e.current.targetX=de*.7,e.current.targetY=ae*.7};window.addEventListener("mousemove",ee);const P=()=>{if(!n)return;const V=n.clientWidth,Q=n.clientHeight;f.aspect=V/Q,f.updateProjectionMatrix(),u.setSize(V,Q)};window.addEventListener("resize",P);let M,O=new DE;const B=()=>{M=requestAnimationFrame(B);const V=O.getElapsedTime();e.current.x+=(e.current.targetX-e.current.x)*.05,e.current.y+=(e.current.targetY-e.current.y)*.05,h.rotation.y=e.current.x*.8+V*.08,h.rotation.x=-e.current.y*.6+Math.sin(V*.2)*.05,y.rotation.y=V*.12,y.rotation.z=V*.07,A.rotation.x=-V*.18,A.rotation.y=V*.15,L.rotation.z=V*.14,W.rotation.x=V*.11,z.rotation.y=-V*.09;const Q=1+Math.sin(V*.8)*.04;te.scale.set(Q,Q,Q),u.render(c,f)};return B(),()=>{cancelAnimationFrame(M),window.removeEventListener("mousemove",ee),window.removeEventListener("resize",P),n&&u.domElement&&n.removeChild(u.domElement),u.dispose(),m.dispose(),x.dispose(),S.dispose(),E.dispose(),T.dispose(),v.dispose(),ue.dispose(),X.dispose()}},[]),g.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})},IE=()=>g.jsxs("section",{className:"relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden",children:[g.jsx(UE,{}),g.jsx("div",{className:"absolute inset-0 bg-radial-vignette pointer-events-none"}),g.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/80 border border-white/10 backdrop-blur-md mb-8 shadow-inner hover:border-brand-cyan/40 transition-colors",children:[g.jsxs("span",{className:"flex h-2 w-2 relative",children:[g.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"}),g.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"})]}),g.jsx("span",{className:"text-xs font-mono tracking-wider text-slate-300 uppercase",children:"50% Full-Stack Engineering • 50% Agentic Intelligence"})]}),g.jsxs("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]",children:[g.jsx("span",{className:"block text-slate-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 font-mono tracking-normal",children:"Codecraft"}),g.jsx("span",{className:"text-gradient-silver",children:"The Art of "}),g.jsx("span",{className:"text-gradient-cyan-indigo",children:"Intelligent Software"})]}),g.jsx("p",{className:"max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light",children:"We architect mission-critical web platforms and engineer self-governing autonomous agents. Where classical software precision meets the frontier of machine cognition."}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14",children:[g.jsxs("a",{href:"#contact",className:"w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-emerald text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.02] active:scale-[0.99] transition-all group",children:[g.jsx("span",{children:"Initiate Project Consultation"}),g.jsx(Ds,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),g.jsxs("a",{href:"#services",className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100/80 hover:bg-surface-50/90 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all shadow-sm",children:[g.jsx(Vm,{className:"w-4 h-4 text-brand-cyan"}),g.jsx("span",{children:"Explore Dual Engine"})]})]}),g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left",children:[g.jsxs("div",{className:"glass-panel rounded-xl p-3.5 border border-white/5 hover:border-brand-cyan/30 transition-all",children:[g.jsxs("div",{className:"flex items-center gap-2 text-brand-cyan mb-1 font-mono text-xs",children:[g.jsx(Fx,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Full-Stack Web"})]}),g.jsx("div",{className:"text-white font-semibold text-sm sm:text-base",children:"Modern React & Next.js"}),g.jsx("div",{className:"text-slate-400 text-xs mt-0.5",children:"Ultra-responsive platforms"})]}),g.jsxs("div",{className:"glass-panel rounded-xl p-3.5 border border-white/5 hover:border-brand-emerald/30 transition-all",children:[g.jsxs("div",{className:"flex items-center gap-2 text-brand-emerald mb-1 font-mono text-xs",children:[g.jsx(Ml,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Agentic Systems"})]}),g.jsx("div",{className:"text-white font-semibold text-sm sm:text-base",children:"Autonomous Swarms"}),g.jsx("div",{className:"text-slate-400 text-xs mt-0.5",children:"Goal-seeking tool callers"})]}),g.jsxs("div",{className:"glass-panel rounded-xl p-3.5 border border-white/5 hover:border-brand-indigo/30 transition-all",children:[g.jsxs("div",{className:"flex items-center gap-2 text-brand-indigo mb-1 font-mono text-xs",children:[g.jsx(yd,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Distributed APIs"})]}),g.jsx("div",{className:"text-white font-semibold text-sm sm:text-base",children:"< 90ms Latency"}),g.jsx("div",{className:"text-slate-400 text-xs mt-0.5",children:"Real-time event streams"})]}),g.jsxs("div",{className:"glass-panel rounded-xl p-3.5 border border-white/5 hover:border-purple-400/30 transition-all",children:[g.jsxs("div",{className:"flex items-center gap-2 text-purple-400 mb-1 font-mono text-xs",children:[g.jsx(fv,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Architecture"})]}),g.jsx("div",{className:"text-white font-semibold text-sm sm:text-base",children:"99.99% Reliability"}),g.jsx("div",{className:"text-slate-400 text-xs mt-0.5",children:"Zero-trust cloud infrastructure"})]})]}),g.jsxs("div",{className:"mt-8 flex items-center gap-2 text-[11px] font-mono text-slate-400",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan/60 inline-block animate-pulse"}),g.jsx("span",{children:"Interactive 3D Core: Move cursor or drag viewport to rotate model"})]})]})]}),FE={Bot:bx,Cpu:Hs,Sparkles:Ml,Terminal:yd,Globe:Xx,Server:cv,ShieldCheck:Fa,Layers:Vm},OE=({service:s})=>{const[e,n]=Ct.useState({x:0,y:0}),[r,o]=Ct.useState(!1),c=h=>{const m=h.currentTarget.getBoundingClientRect();n({x:h.clientX-m.left,y:h.clientY-m.top})},f=FE[s.iconName]||Ia,u=s.category==="agentic";return g.jsxs("div",{onMouseMove:c,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"relative rounded-2xl p-6 sm:p-8 bg-[#0D111A]/80 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between shadow-xl",children:[g.jsx("div",{className:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{background:r?`radial-gradient(400px circle at ${e.x}px ${e.y}px, ${u?"rgba(0, 240, 255, 0.15)":"rgba(99, 102, 241, 0.15)"}, transparent 80%)`:""}}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-5",children:[g.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${u?"bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan":"bg-brand-indigo/10 border-brand-indigo/30 text-brand-indigo"}`,children:g.jsx(f,{className:"w-6 h-6"})}),g.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${u?"bg-brand-cyan/5 border-brand-cyan/20 text-brand-cyan":"bg-brand-indigo/5 border-brand-indigo/20 text-brand-indigo"}`,children:u?"Agentic Systems":"Web Engineering"})]}),g.jsx("h3",{className:"text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors",children:s.title}),g.jsx("p",{className:"text-xs font-mono text-slate-400 mb-3",children:s.subtitle}),g.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6",children:s.description}),g.jsx("div",{className:"space-y-2 mb-6 border-t border-white/5 pt-4",children:s.capabilities.map((h,m)=>g.jsxs("div",{className:"flex items-start gap-2 text-xs text-slate-300",children:[g.jsx(vd,{className:`w-3.5 h-3.5 mt-0.5 shrink-0 ${u?"text-brand-emerald":"text-brand-cyan"}`}),g.jsx("span",{children:h})]},m))})]}),g.jsxs("div",{className:"pt-4 border-t border-white/5 flex items-center justify-between",children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider",children:"Benchmark"}),g.jsx("span",{className:"text-xs font-bold text-white font-mono",children:s.metrics})]}),g.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white group/btn",children:[g.jsx("span",{children:"Scope This"}),g.jsx(Ds,{className:"w-3.5 h-3.5 group-hover/btn:translate-x-1 text-brand-cyan transition-transform"})]})]})]})},kE=()=>{const[s,e]=Ct.useState("all"),n=dp.filter(r=>s==="all"?!0:r.category===s);return g.jsxs("section",{id:"services",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[g.jsxs("div",{className:"flex flex-col items-center text-center mb-14",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-cyan mb-4",children:[g.jsx(Ia,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Equally Balanced Architecture"})]}),g.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5",children:"50% Web Engineering • 50% Agentic Intelligence"}),g.jsx("p",{className:"max-w-3xl text-base sm:text-lg text-slate-300 font-light leading-relaxed",children:"High-performing AI agents require rock-solid web infrastructure to thrive. At Codecraft, we bridge front-end beauty, cloud microservices, and self-governing autonomous agents into unified, production-grade solutions."}),g.jsxs("div",{className:"mt-8 inline-flex p-1 rounded-xl bg-surface-200 border border-white/10 backdrop-blur-md",children:[g.jsxs("button",{onClick:()=>e("all"),className:`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${s==="all"?"bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-white border border-brand-cyan/30 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:["All Disciplines (",dp.length,")"]}),g.jsx("button",{onClick:()=>e("engineering"),className:`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${s==="engineering"?"bg-gradient-to-r from-brand-indigo/20 to-brand-cyan/20 text-brand-indigo border border-brand-indigo/30 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:"Web & Cloud Platforms (4)"}),g.jsx("button",{onClick:()=>e("agentic"),className:`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${s==="agentic"?"bg-gradient-to-r from-brand-cyan/20 to-brand-emerald/20 text-brand-cyan border border-brand-cyan/30 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:"Agentic Automations (4)"})]})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6",children:n.map(r=>g.jsx(OE,{service:r},r.id))})]})},ed=[{id:1,title:"Client & Web Tier",category:"Web Engineering",icon:Jx,description:"Modern responsive web applications with sub-second page loads, real-time client state, and encrypted WebSocket streams.",specs:["Next.js App Router / React 19","Optimistic UI Updates","End-to-End Type Safety"],color:"cyan"},{id:2,title:"Edge & API Gateway",category:"Cloud Infrastructure",icon:Fa,description:"Ultra-low latency edge compute gateway enforcing zero-trust authentication, token rate limiting, and request telemetry.",specs:["Global Edge Workers (< 15ms)","Distributed JWT Validation","DDoS Mitigation & WAF"],color:"indigo"},{id:3,title:"Agentic Orchestrator",category:"Agentic Intelligence",icon:Hs,description:"Autonomous multi-agent swarms evaluating complex objectives, planning tool executions, and synthesizing answers with citation validation.",specs:["Hierarchical Swarm Routing","Dynamic Tool Invocation Loop","Self-Correcting Reasoning"],color:"emerald"},{id:4,title:"Data & Tool Execution",category:"Enterprise Systems",icon:Hx,description:"High-throughput database mutations, vector memory retrieval, third-party ERP webhooks, and audit logging.",specs:["PostgreSQL & pgvector Hybrid","Atomic Transaction Guarantees","Immutable Audit Ledger"],color:"violet"}],zE=()=>{const[s,e]=Ct.useState(1),[n,r]=Ct.useState(!1),[o,c]=Ct.useState(0),[f,u]=Ct.useState(["System standby. Click 'Trigger Pipeline Simulation' to trace an end-to-end request."]),h=()=>{if(n)return;r(!0),c(1),u(["[00:00.000] >> Inbound user action initiated from Web Platform UI."]),[{step:1,delay:600,log:"[00:00.024] [Web Tier] Optimistic state set, WebSocket packet serialized (Payload: 1.2KB)."},{step:2,delay:1300,log:"[00:00.051] [API Gateway] Edge worker authorized JWT signature. Inbound rate limit ok."},{step:3,delay:2100,log:"[00:00.098] [Agent Swarm] Agent Core decomposed intent into 2 sub-tasks: [VectorSearch, ToolCall]."},{step:4,delay:3e3,log:"[00:00.142] [Execution Engine] Hybrid vector lookup completed (4 docs). Database state committed."},{step:0,delay:3800,log:"[00:00.185] << Cycle completed in 185ms. Reactive WebSocket broadcast dispatched to client UI."}].forEach(({step:y,delay:S,log:E})=>{setTimeout(()=>{c(y),y>0&&e(y),u(A=>[...A,E]),y===0&&r(!1)},S)})},m=ed.find(x=>x.id===s)||ed[0];return g.jsx("section",{id:"architecture",className:"relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:g.jsxs("div",{className:"rounded-3xl bg-[#0B0E17]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"}),g.jsx("div",{className:"absolute -bottom-24 -left-24 w-96 h-96 bg-brand-indigo/15 rounded-full blur-[120px] pointer-events-none"}),g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-white/10 gap-6",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-emerald mb-3",children:[g.jsx(Gm,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Interactive Architecture Pipeline"})]}),g.jsx("h2",{className:"text-2xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Where Web Frontends Converge With Autonomous Agents"})]}),g.jsx("button",{onClick:h,disabled:n,className:`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-lg ${n?"bg-surface-100 text-slate-400 border border-white/10 cursor-not-allowed":"bg-brand-cyan hover:bg-cyan-300 text-slate-950 shadow-brand-cyan/20 hover:scale-105 active:scale-95"}`,children:n?g.jsxs(g.Fragment,{children:[g.jsx(sv,{className:"w-4 h-4 animate-spin text-brand-cyan"}),g.jsx("span",{children:"Simulating Request Loop..."})]}):g.jsxs(g.Fragment,{children:[g.jsx(nv,{className:"w-4 h-4 fill-current"}),g.jsx("span",{children:"Trigger Pipeline Simulation"})]})})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative",children:ed.map(x=>{const y=s===x.id,S=o===x.id,E=x.icon;return g.jsxs("button",{onClick:()=>e(x.id),className:`text-left p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${y?"bg-surface-50/90 border-brand-cyan shadow-xl shadow-brand-cyan/10":"bg-surface-200/50 border-white/5 hover:border-white/20"} ${S?"ring-2 ring-brand-emerald animate-pulse":""}`,children:[S&&g.jsxs("span",{className:"absolute top-3 right-3 flex h-2.5 w-2.5",children:[g.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"}),g.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"})]}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsxs("span",{className:"text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5",children:["Node 0",x.id]}),g.jsx(E,{className:`w-5 h-5 ${x.id===1?"text-brand-cyan":x.id===2?"text-brand-indigo":x.id===3?"text-brand-emerald":"text-purple-400"}`})]}),g.jsx("h3",{className:"text-base font-bold text-white mb-1",children:x.title}),g.jsx("span",{className:"text-[11px] font-mono text-slate-400 block mb-3",children:x.category})]}),g.jsxs("div",{className:"pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400",children:[g.jsx("span",{children:y?"Inspecting Specs":"Click to View"}),g.jsx(Ds,{className:"w-3 h-3 text-slate-400"})]})]},x.id)})}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[g.jsxs("div",{className:"lg:col-span-6 p-6 rounded-2xl bg-surface-200/70 border border-white/10 flex flex-col justify-between",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan inline-block"}),g.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider text-brand-cyan",children:["Node 0",m.id," Specification"]})]}),g.jsx("h4",{className:"text-xl font-bold text-white mb-3",children:m.title}),g.jsx("p",{className:"text-sm text-slate-300 mb-6 leading-relaxed",children:m.description}),g.jsxs("div",{className:"space-y-2.5",children:[g.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider block",children:"Core Engineering Capabilities:"}),m.specs.map((x,y)=>g.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-200",children:[g.jsx(vd,{className:"w-4 h-4 text-brand-emerald shrink-0"}),g.jsx("span",{children:x})]},y))]})]}),g.jsxs("div",{className:"mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400",children:[g.jsx("span",{children:"Security: Zero-Trust Encrypted"}),g.jsx("span",{className:"text-brand-emerald",children:"Status: Healthy"})]})]}),g.jsxs("div",{className:"lg:col-span-6 rounded-2xl bg-[#07090E] border border-white/10 p-4 font-mono flex flex-col justify-between shadow-inner",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between pb-3 mb-3 border-b border-white/10",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(yd,{className:"w-4 h-4 text-brand-cyan"}),g.jsx("span",{className:"text-xs text-slate-300 font-semibold",children:"Live Trace Stream"})]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500/80"}),g.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500/80"}),g.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-emerald/80"})]})]}),g.jsx("div",{className:"space-y-2 text-xs max-h-56 overflow-y-auto pr-1",children:f.map((x,y)=>g.jsx("div",{className:`leading-relaxed ${y===f.length-1?"text-brand-cyan font-bold":"text-slate-400"}`,children:x},y))})]}),g.jsxs("div",{className:"pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400",children:[g.jsx("span",{children:"Target Pipeline SLA: < 200ms"}),g.jsx("span",{className:"text-brand-cyan",children:"Streaming Active"})]})]})]})]})})},BE=()=>{const s=fp.find(n=>n.isFlagship),e=fp.filter(n=>!n.isFlagship);return g.jsxs("section",{id:"works",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[g.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-cyan mb-4",children:[g.jsx(Ml,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Proven Production Deployments"})]}),g.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:"Selected Works & Digital Products"}),g.jsx("p",{className:"max-w-2xl text-base sm:text-lg text-slate-300 font-light",children:"From our own proprietary digital ventures to enterprise client platforms, explore how Codecraft blends craftsmanship with autonomous systems."})]}),s&&g.jsxs("div",{className:"relative rounded-3xl bg-gradient-to-b from-surface-100/90 to-[#0C0F17]/90 border-2 border-brand-cyan/40 p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl shadow-brand-cyan/10 overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"}),g.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none"}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10",children:[g.jsxs("div",{className:"lg:col-span-7",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 mb-4",children:[g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan font-mono text-xs font-semibold",children:[g.jsx(Ml,{className:"w-3 h-3"}),"Codecraft Product"]}),g.jsx("span",{className:"text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300",children:"Social Discovery & Event Matching"})]}),g.jsx("h3",{className:"text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight",children:"PlusOne"}),g.jsx("p",{className:"text-lg font-medium text-gradient-cyan-indigo mb-5 font-mono",children:'"Find your plus one for the night"'}),g.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-6",children:["Designed, architected, and engineered from the ground up by Codecraft.",g.jsx("strong",{children:" PlusOne"})," empowers members to discover local nightlife, spontaneous social events, and connect with verified companions in real time. Engineered with high-speed intent routing, instant messaging streams, and seamless mobile-first PWA responsiveness."]}),g.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8",children:[g.jsxs("div",{className:"p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center",children:[g.jsx(_d,{className:"w-5 h-5 text-brand-cyan mb-1"}),g.jsx("span",{className:"text-xs font-bold text-white",children:"Discover"}),g.jsx("span",{className:"text-[10px] text-slate-400",children:"Nightlife Events"})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center",children:[g.jsx(vv,{className:"w-5 h-5 text-brand-emerald mb-1"}),g.jsx("span",{className:"text-xs font-bold text-white",children:"Intents"}),g.jsx("span",{className:"text-[10px] text-slate-400",children:"Instant Matching"})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center",children:[g.jsx(Wm,{className:"w-5 h-5 text-brand-indigo mb-1"}),g.jsx("span",{className:"text-xs font-bold text-white",children:"Messages"}),g.jsx("span",{className:"text-[10px] text-slate-400",children:"Real-Time Chat"})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center",children:[g.jsx(Cx,{className:"w-5 h-5 text-purple-400 mb-1"}),g.jsx("span",{className:"text-xs font-bold text-white",children:"Plans"}),g.jsx("span",{className:"text-[10px] text-slate-400",children:"Verified Members"})]})]}),g.jsx("div",{className:"grid grid-cols-3 gap-4 pb-8 mb-8 border-b border-white/10",children:s.metrics.map((n,r)=>g.jsxs("div",{children:[g.jsx("div",{className:"text-xl sm:text-2xl font-extrabold text-white font-mono",children:n.value}),g.jsx("div",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:n.label})]},r))}),g.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[g.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-brand-cyan/25 transition-all hover:scale-105 active:scale-95",children:[g.jsx("span",{children:"Visit PlusOne Live"}),g.jsx(nd,{className:"w-4 h-4"})]}),g.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-200/80 hover:bg-surface-100 text-slate-200 text-xs sm:text-sm border border-white/10 transition-colors",children:[g.jsx("span",{children:"Build A Product Like This"}),g.jsx(td,{className:"w-4 h-4 text-brand-cyan"})]})]})]}),g.jsx("div",{className:"lg:col-span-5",children:g.jsxs("div",{className:"relative rounded-2xl bg-[#090C13] border border-white/15 p-5 shadow-2xl overflow-hidden group-hover:border-brand-cyan/50 transition-colors",children:[g.jsxs("div",{className:"flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"font-bold text-white font-mono tracking-wide",children:"+1 plusone"}),g.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan font-mono",children:"Live"})]}),g.jsxs("a",{href:"http://www.plusone.today",target:"_blank",rel:"noreferrer",className:"text-slate-400 hover:text-brand-cyan transition-colors text-[11px] font-mono flex items-center gap-1",children:["plusone.today",g.jsx(nd,{className:"w-3 h-3"})]})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"p-3.5 rounded-xl bg-surface-200/80 border border-white/5 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center font-bold text-slate-950 text-xs",children:"+1"}),g.jsxs("div",{children:[g.jsx("div",{className:"text-xs font-bold text-white",children:"Rooftop Lounge & Jazz Night"}),g.jsx("div",{className:"text-[10px] text-slate-400",children:"Looking for 1 companion • Tonight 9 PM"})]})]}),g.jsx("span",{className:"px-2 py-1 rounded bg-brand-emerald/10 border border-brand-emerald/20 text-[10px] font-mono text-brand-emerald",children:"Active"})]}),g.jsxs("div",{className:"p-3.5 rounded-xl bg-surface-200/80 border border-white/5 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-brand-indigo to-purple-500 flex items-center justify-center font-bold text-white text-xs",children:"LIVE"}),g.jsxs("div",{children:[g.jsx("div",{className:"text-xs font-bold text-white",children:"Techno & Warehouse Sessions"}),g.jsx("div",{className:"text-[10px] text-slate-400",children:"Match radius: 5km • 4 intents pending"})]})]}),g.jsx("span",{className:"px-2 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan",children:"Matching"})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-surface-300/90 border border-white/5 mt-4",children:[g.jsxs("div",{className:"text-[11px] font-mono text-slate-300 mb-2 flex items-center justify-between",children:[g.jsx("span",{children:"Engineered by Codecraft"}),g.jsx("span",{className:"text-brand-emerald",children:"99.98% SLA"})]}),g.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.techStack.map((n,r)=>g.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5",children:n},r))})]})]})]})})]})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:e.map(n=>g.jsxs("div",{className:"rounded-2xl bg-surface-100/70 border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all flex flex-col justify-between group shadow-xl",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("span",{className:"text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300",children:n.category}),g.jsx("span",{className:"text-xs font-mono text-brand-cyan",children:n.pillar})]}),g.jsx("h3",{className:"text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors",children:n.title}),g.jsx("p",{className:"text-xs font-mono text-slate-400 mb-3",children:n.subtitle}),g.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6",children:n.summary}),g.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:n.techStack.map((r,o)=>g.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5",children:r},o))})]}),g.jsx("div",{className:"pt-4 border-t border-white/5 grid grid-cols-3 gap-3",children:n.metrics.map((r,o)=>g.jsxs("div",{children:[g.jsx("div",{className:"text-base font-bold text-white font-mono",children:r.value}),g.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:r.label})]},o))})]},n.id))})]})},HE={Compass:_d,Code2:Ia,Cpu:Hs,Activity:Gm},GE=()=>g.jsxs("section",{id:"process",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[g.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-emerald mb-4",children:[g.jsx(_d,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Deterministic Delivery"})]}),g.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:"How We Engineer"}),g.jsx("p",{className:"max-w-2xl text-base sm:text-lg text-slate-300 font-light",children:"A disciplined, 4-stage engineering lifecycle transforming complex business challenges into production-hardened web platforms and autonomous systems."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:_v.map(s=>{const e=HE[s.icon]||Ia;return g.jsxs("div",{className:"rounded-2xl bg-surface-100/60 border border-white/10 p-6 sm:p-7 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group shadow-lg hover:shadow-brand-cyan/5",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-6",children:[g.jsx("span",{className:"text-3xl font-extrabold font-mono text-slate-400 group-hover:text-brand-cyan transition-colors",children:s.step}),g.jsx("div",{className:"w-10 h-10 rounded-xl bg-surface-200 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform",children:g.jsx(e,{className:"w-5 h-5"})})]}),g.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-brand-emerald mb-1 block",children:s.phase}),g.jsx("h3",{className:"text-lg font-bold text-white mb-3",children:s.title}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-6",children:s.description})]}),g.jsxs("div",{className:"pt-4 border-t border-white/5 space-y-2",children:[g.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider block",children:"Key Artifacts:"}),s.deliverables.map((n,r)=>g.jsxs("div",{className:"flex items-start gap-2 text-xs text-slate-300",children:[g.jsx(vd,{className:"w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5"}),g.jsx("span",{children:n})]},r))]})]},s.step)})})]}),VE=()=>g.jsx("section",{id:"about",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:g.jsxs("div",{className:"rounded-3xl bg-surface-100/50 border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl",children:[g.jsx("div",{className:"absolute -bottom-20 -right-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[g.jsxs("div",{className:"lg:col-span-7",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200 border border-white/10 text-xs font-mono text-brand-indigo mb-5",children:[g.jsx(jx,{className:"w-3.5 h-3.5 text-brand-cyan"}),g.jsx("span",{children:"The Codecraft Standard"})]}),g.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:"Classical Rigor Meets Machine Agency"}),g.jsx("p",{className:"text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6",children:"Modern software has splintered into two extremes: flashy AI prototypes that fail under production stress, and legacy web platforms that cannot adapt to autonomous workflows."}),g.jsxs("p",{className:"text-sm sm:text-base text-slate-400 leading-relaxed mb-8",children:["At ",g.jsx("strong",{children:id}),", we close that divide. We believe the future belongs to software that is ",g.jsx("strong",{children:"50% robust engineering foundation"})," and ",g.jsx("strong",{children:"50% autonomous intelligence"}),". We write clean, type-safe, resilient code and embed agentic autonomy where it drives exponential leverage."]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"p-4 rounded-xl bg-surface-200/60 border border-white/5",children:[g.jsxs("div",{className:"flex items-center gap-2.5 font-bold text-white text-sm mb-1.5",children:[g.jsx(Ia,{className:"w-4 h-4 text-brand-cyan"}),g.jsx("span",{children:"Deterministic Craft"})]}),g.jsx("p",{className:"text-xs text-slate-400",children:"Zero sloppy wrappers. Handcrafted components, strict type schemas, and predictable runtime behavior."})]}),g.jsxs("div",{className:"p-4 rounded-xl bg-surface-200/60 border border-white/5",children:[g.jsxs("div",{className:"flex items-center gap-2.5 font-bold text-white text-sm mb-1.5",children:[g.jsx(Hs,{className:"w-4 h-4 text-brand-emerald"}),g.jsx("span",{children:"Agentic Autonomy"})]}),g.jsx("p",{className:"text-xs text-slate-400",children:"Purpose-built autonomous agents that plan, call tools, self-heal, and deliver tangible business outcomes."})]})]})]}),g.jsx("div",{className:"lg:col-span-5 flex flex-col gap-4",children:g.jsxs("div",{className:"p-6 rounded-2xl bg-[#080B12] border border-white/10 shadow-xl",children:[g.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between",children:[g.jsx("span",{children:"Codecraft Philosophy"}),g.jsx(Fa,{className:"w-4 h-4 text-brand-emerald"})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(yu,{className:"w-4 h-4 text-brand-cyan shrink-0 mt-1"}),g.jsxs("div",{children:[g.jsx("div",{className:"text-sm font-semibold text-white",children:"Full-Stack Ownership"}),g.jsx("div",{className:"text-xs text-slate-400",children:"From front-end design to low-level distributed pipelines."})]})]}),g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(yu,{className:"w-4 h-4 text-brand-indigo shrink-0 mt-1"}),g.jsxs("div",{children:[g.jsx("div",{className:"text-sm font-semibold text-white",children:"Operator-in-the-Loop"}),g.jsx("div",{className:"text-xs text-slate-400",children:"Autonomous systems guarded by verifiable human approval boundaries."})]})]}),g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(yu,{className:"w-4 h-4 text-brand-emerald shrink-0 mt-1"}),g.jsxs("div",{children:[g.jsx("div",{className:"text-sm font-semibold text-white",children:"Enterprise Scalability"}),g.jsx("div",{className:"text-xs text-slate-400",children:"Architectures proven in real-world products like PlusOne."})]})]})]}),g.jsx("div",{className:"mt-6 pt-5 border-t border-white/10 text-center",children:g.jsx("div",{className:"text-xs font-mono text-slate-400",children:Xm})})]})})]})]})});var Pd={};(function s(e,n,r,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",u=(function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),M=P.getContext("2d");M.fillRect(0,0,1,1);var O=P.transferToImageBitmap();M.createPattern(O,"no-repeat")}catch{return!1}return!0})();function h(){}function m(P){var M=n.exports.Promise,O=M!==void 0?M:e.Promise;return typeof O=="function"?new O(P):(P(h,h),null)}var x=(function(P,M){return{transform:function(O){if(P)return O;if(M.has(O))return M.get(O);var B=new OffscreenCanvas(O.width,O.height),V=B.getContext("2d");return V.drawImage(O,0,0),M.set(O,B),B},clear:function(){M.clear()}}})(u,new Map),y=(function(){var P=Math.floor(16.666666666666668),M,O,B={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(Q){var de=Math.random();return B[de]=requestAnimationFrame(function ae(pe){V===pe||V+P-1<pe?(V=pe,delete B[de],Q()):B[de]=requestAnimationFrame(ae)}),de},O=function(Q){B[Q]&&cancelAnimationFrame(B[Q])}):(M=function(Q){return setTimeout(Q,P)},O=function(Q){return clearTimeout(Q)}),{frame:M,cancel:O}})(),S=(function(){var P,M,O={};function B(V){function Q(de,ae){V.postMessage({options:de||{},callback:ae})}V.init=function(ae){var pe=ae.transferControlToOffscreen();V.postMessage({canvas:pe},[pe])},V.fire=function(ae,pe,ve){if(M)return Q(ae,null),M;var be=Math.random().toString(36).slice(2);return M=m(function(ke){function Y(ft){ft.data.callback===be&&(delete O[be],V.removeEventListener("message",Y),M=null,x.clear(),ve(),ke())}V.addEventListener("message",Y),Q(ae,be),O[be]=Y.bind(null,{data:{callback:be}})}),M},V.reset=function(){V.postMessage({reset:!0});for(var ae in O)O[ae](),delete O[ae]}}return function(){if(P)return P;if(!r&&c){var V=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([V])))}catch(Q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Q),null}B(P)}return P}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(P,M){return M?M(P):P}function T(P){return P!=null}function _(P,M,O){return A(P&&T(P[M])?P[M]:E[M],O)}function v(P){return P<0?0:Math.floor(P)}function U(P,M){return Math.floor(Math.random()*(M-P))+P}function C(P){return parseInt(P,16)}function L(P){return P.map(W)}function W(P){var M=String(P).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:C(M.substring(0,2)),g:C(M.substring(2,4)),b:C(M.substring(4,6))}}function z(P){var M=_(P,"origin",Object);return M.x=_(M,"x",Number),M.y=_(M,"y",Number),M}function k(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function ue(P){var M=P.getBoundingClientRect();P.width=M.width,P.height=M.height}function R(P){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=P,M}function I(P,M,O,B,V,Q,de,ae,pe){P.save(),P.translate(M,O),P.rotate(Q),P.scale(B,V),P.arc(0,0,1,de,ae,pe),P.restore()}function ce(P){var M=P.angle*(Math.PI/180),O=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-M+(.5*O-Math.random()*O),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function he(P,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var O=M.tick++/M.totalTicks,B=M.x+M.random*M.tiltCos,V=M.y+M.random*M.tiltSin,Q=M.wobbleX+M.random*M.tiltCos,de=M.wobbleY+M.random*M.tiltSin;if(P.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-O)+")",P.beginPath(),f&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))P.fill(fe(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(Q-B)*.1,Math.abs(de-V)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var ae=Math.PI/10*M.wobble,pe=Math.abs(Q-B)*.1,ve=Math.abs(de-V)*.1,be=M.shape.bitmap.width*M.scalar,ke=M.shape.bitmap.height*M.scalar,Y=new DOMMatrix([Math.cos(ae)*pe,Math.sin(ae)*pe,-Math.sin(ae)*ve,Math.cos(ae)*ve,M.x,M.y]);Y.multiplySelf(new DOMMatrix(M.shape.matrix));var ft=P.createPattern(x.transform(M.shape.bitmap),"no-repeat");ft.setTransform(Y),P.globalAlpha=1-O,P.fillStyle=ft,P.fillRect(M.x-be/2,M.y-ke/2,be,ke),P.globalAlpha=1}else if(M.shape==="circle")P.ellipse?P.ellipse(M.x,M.y,Math.abs(Q-B)*M.ovalScalar,Math.abs(de-V)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):I(P,M.x,M.y,Math.abs(Q-B)*M.ovalScalar,Math.abs(de-V)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var Te=Math.PI/2*3,Ge=4*M.scalar,Le=8*M.scalar,dt=M.x,Ye=M.y,D=5,b=Math.PI/D;D--;)dt=M.x+Math.cos(Te)*Le,Ye=M.y+Math.sin(Te)*Le,P.lineTo(dt,Ye),Te+=b,dt=M.x+Math.cos(Te)*Ge,Ye=M.y+Math.sin(Te)*Ge,P.lineTo(dt,Ye),Te+=b;else P.moveTo(Math.floor(M.x),Math.floor(M.y)),P.lineTo(Math.floor(M.wobbleX),Math.floor(V)),P.lineTo(Math.floor(Q),Math.floor(de)),P.lineTo(Math.floor(B),Math.floor(M.wobbleY));return P.closePath(),P.fill(),M.tick<M.totalTicks}function Me(P,M,O,B,V){var Q=M.slice(),de=P.getContext("2d"),ae,pe,ve=m(function(be){function ke(){ae=pe=null,de.clearRect(0,0,B.width,B.height),x.clear(),V(),be()}function Y(){r&&!(B.width===o.width&&B.height===o.height)&&(B.width=P.width=o.width,B.height=P.height=o.height),!B.width&&!B.height&&(O(P),B.width=P.width,B.height=P.height),de.clearRect(0,0,B.width,B.height),Q=Q.filter(function(ft){return he(de,ft)}),Q.length?ae=y.frame(Y):ke()}ae=y.frame(Y),pe=ke});return{addFettis:function(be){return Q=Q.concat(be),ve},canvas:P,promise:ve,reset:function(){ae&&y.cancel(ae),pe&&pe()}}}function X(P,M){var O=!P,B=!!_(M||{},"resize"),V=!1,Q=_(M,"disableForReducedMotion",Boolean),de=c&&!!_(M||{},"useWorker"),ae=de?S():null,pe=O?k:ue,ve=P&&ae?!!P.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ke;function Y(Te,Ge,Le){for(var dt=_(Te,"particleCount",v),Ye=_(Te,"angle",Number),D=_(Te,"spread",Number),b=_(Te,"startVelocity",Number),ne=_(Te,"decay",Number),ye=_(Te,"gravity",Number),_e=_(Te,"drift",Number),Ee=_(Te,"colors",L),Ve=_(Te,"ticks",Number),Pe=_(Te,"shapes"),Ie=_(Te,"scalar"),Xe=!!_(Te,"flat"),it=z(Te),me=dt,ht=[],ot=P.width*it.x,et=P.height*it.y;me--;)ht.push(ce({x:ot,y:et,angle:Ye,spread:D,startVelocity:b,color:Ee[me%Ee.length],shape:Pe[U(0,Pe.length)],ticks:Ve,decay:ne,gravity:ye,drift:_e,scalar:Ie,flat:Xe}));return ke?ke.addFettis(ht):(ke=Me(P,ht,pe,Ge,Le),ke.promise)}function ft(Te){var Ge=Q||_(Te,"disableForReducedMotion",Boolean),Le=_(Te,"zIndex",Number);if(Ge&&be)return m(function(b){b()});O&&ke?P=ke.canvas:O&&!P&&(P=R(Le),document.body.appendChild(P)),B&&!ve&&pe(P);var dt={width:P.width,height:P.height};ae&&!ve&&ae.init(P),ve=!0,ae&&(P.__confetti_initialized=!0);function Ye(){if(ae){var b={getBoundingClientRect:function(){if(!O)return P.getBoundingClientRect()}};pe(b),ae.postMessage({resize:{width:b.width,height:b.height}});return}dt.width=dt.height=null}function D(){ke=null,B&&(V=!1,e.removeEventListener("resize",Ye)),O&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,ve=!1)}return B&&!V&&(V=!0,e.addEventListener("resize",Ye,!1)),ae?ae.fire(Te,dt,D):Y(Te,dt,D)}return ft.reset=function(){ae&&ae.reset(),ke&&ke.reset()},ft}var te;function le(){return te||(te=X(null,{useWorker:!0,resize:!0})),te}function fe(P,M,O,B,V,Q,de){var ae=new Path2D(P),pe=new Path2D;pe.addPath(ae,new DOMMatrix(M));var ve=new Path2D;return ve.addPath(pe,new DOMMatrix([Math.cos(de)*V,Math.sin(de)*V,-Math.sin(de)*Q,Math.cos(de)*Q,O,B])),ve}function q(P){if(!f)throw new Error("path confetti are not supported in this browser");var M,O;typeof P=="string"?M=P:(M=P.path,O=P.matrix);var B=new Path2D(M),V=document.createElement("canvas"),Q=V.getContext("2d");if(!O){for(var de=1e3,ae=de,pe=de,ve=0,be=0,ke,Y,ft=0;ft<de;ft+=2)for(var Te=0;Te<de;Te+=2)Q.isPointInPath(B,ft,Te,"nonzero")&&(ae=Math.min(ae,ft),pe=Math.min(pe,Te),ve=Math.max(ve,ft),be=Math.max(be,Te));ke=ve-ae,Y=be-pe;var Ge=10,Le=Math.min(Ge/ke,Ge/Y);O=[Le,0,0,Le,-Math.round(ke/2+ae)*Le,-Math.round(Y/2+pe)*Le]}return{type:"path",path:M,matrix:O}}function ee(P){var M,O=1,B="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?M=P:(M=P.text,O="scalar"in P?P.scalar:O,V="fontFamily"in P?P.fontFamily:V,B="color"in P?P.color:B);var Q=10*O,de=""+Q+"px "+V,ae=new OffscreenCanvas(Q,Q),pe=ae.getContext("2d");pe.font=de;var ve=pe.measureText(M),be=Math.ceil(ve.actualBoundingBoxRight+ve.actualBoundingBoxLeft),ke=Math.ceil(ve.actualBoundingBoxAscent+ve.actualBoundingBoxDescent),Y=2,ft=ve.actualBoundingBoxLeft+Y,Te=ve.actualBoundingBoxAscent+Y;be+=Y+Y,ke+=Y+Y,ae=new OffscreenCanvas(be,ke),pe=ae.getContext("2d"),pe.font=de,pe.fillStyle=B,pe.fillText(M,ft,Te);var Ge=1/O;return{type:"bitmap",bitmap:ae.transferToImageBitmap(),matrix:[Ge,0,0,Ge,-be*Ge/2,-ke*Ge/2]}}n.exports=function(){return le().apply(this,arguments)},n.exports.reset=function(){le().reset()},n.exports.create=X,n.exports.shapeFromPath=q,n.exports.shapeFromText=ee})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Pd,!1);const jE=Pd.exports;Pd.exports.create;const WE=()=>{const[s,e]=Ct.useState({name:"",email:"",phone:"",projectType:"Both (Web Engineering + Agentic AI)",budgetRange:"$10k - $25k",message:""}),[n,r]=Ct.useState(!1),[o,c]=Ct.useState(!1),[f,u]=Ct.useState(!1),[h,m]=Ct.useState(!1),[x,y]=Ct.useState(""),S=["Both (Web Engineering + Agentic AI)","Full-Stack Web Platform","Agentic AI & Automations","Cloud Architecture & Consulting"],E=["< $10k","$10k - $25k","$25k - $50k","$50k+"],A=()=>{navigator.clipboard.writeText(Fi),r(!0),setTimeout(()=>r(!1),2e3)},T=()=>{navigator.clipboard.writeText(Us),c(!0),setTimeout(()=>c(!1),2e3)},_=L=>{if(L.preventDefault(),y(""),!s.name.trim()){y("Please enter your name.");return}if(!s.email.trim()||!s.email.includes("@")){y("Please enter a valid work email address.");return}if(!s.message.trim()){y("Please tell us a bit about your project or technical challenge.");return}u(!0),setTimeout(()=>{u(!1),m(!0);try{jE({particleCount:80,spread:70,origin:{y:.6},colors:["#00F0FF","#6366F1","#10B981"]})}catch{}},600)},v=encodeURIComponent(`Project Inquiry: ${s.projectType} — ${s.name}`),U=encodeURIComponent(`Hello Codecraft Team,

My Name: ${s.name}
Email: ${s.email}
Phone: ${s.phone||"N/A"}
Project Type: ${s.projectType}
Estimated Budget: ${s.budgetRange}

Project Overview:
${s.message}

Looking forward to hearing from you!`),C=`mailto:${Fi}?subject=${v}&body=${U}`;return g.jsxs("section",{id:"contact",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[g.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-cyan mb-4",children:[g.jsx(Wm,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Direct Engineering Consultation"})]}),g.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:"Let's Build Something Exceptional"}),g.jsx("p",{className:"max-w-2xl text-base sm:text-lg text-slate-300 font-light",children:"Whether you need a high-concurrency web platform, autonomous agentic workflows, or an end-to-end digital product like PlusOne, we are ready."})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[g.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between space-y-6",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"p-6 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-brand-cyan/40 transition-all shadow-xl group",children:[g.jsxs("div",{className:"flex items-center justify-between mb-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan",children:g.jsx(jm,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Direct Email"}),g.jsx("a",{href:`mailto:${Fi}`,className:"text-sm sm:text-base font-bold text-white hover:text-brand-cyan transition-colors",children:Fi})]})]}),g.jsx("button",{onClick:A,className:"p-2 rounded-lg bg-surface-200 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1",title:"Copy email to clipboard",children:n?g.jsx(_u,{className:"w-4 h-4 text-brand-emerald"}):g.jsx(cp,{className:"w-4 h-4 text-slate-400"})})]}),g.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400 font-mono",children:[g.jsx("span",{children:"Response Time: < 24h"}),g.jsxs("a",{href:`mailto:${Fi}`,className:"text-brand-cyan hover:underline inline-flex items-center gap-1",children:["Open Mail Client ",g.jsx(Ds,{className:"w-3 h-3"})]})]})]}),g.jsxs("div",{className:"p-6 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-brand-emerald/40 transition-all shadow-xl group",children:[g.jsxs("div",{className:"flex items-center justify-between mb-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald",children:g.jsx(Sl,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Direct Phone / WhatsApp"}),g.jsx("a",{href:`tel:${Us}`,className:"text-sm sm:text-base font-bold text-white hover:text-brand-emerald transition-colors font-mono",children:El})]})]}),g.jsx("button",{onClick:T,className:"p-2 rounded-lg bg-surface-200 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1",title:"Copy phone number",children:o?g.jsx(_u,{className:"w-4 h-4 text-brand-emerald"}):g.jsx(cp,{className:"w-4 h-4 text-slate-400"})})]}),g.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400 font-mono",children:[g.jsx("span",{children:"Available for Direct Calling"}),g.jsxs("a",{href:`tel:${Us}`,className:"text-brand-emerald hover:underline inline-flex items-center gap-1",children:["Call Now ",g.jsx(Ds,{className:"w-3 h-3"})]})]})]}),g.jsxs("div",{className:"p-6 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-3",children:[g.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-brand-indigo",children:[g.jsx(Fa,{className:"w-4 h-4"}),g.jsx("span",{children:"Confidentiality & Security"})]}),g.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Every technical engagement begins under standard bilateral NDA protection. Your intellectual property, workflows, and proprietary algorithms remain strictly yours."}),g.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5",children:[g.jsx(Dx,{className:"w-3.5 h-3.5 text-brand-cyan"}),g.jsx("span",{children:"Founding partners review every inbound inquiry personally."})]})]})]}),g.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Codecraft Ventures • Kochi / Global Remote"})]}),g.jsx("div",{className:"lg:col-span-7",children:g.jsx("div",{className:"rounded-3xl bg-surface-100/90 border border-white/10 p-6 sm:p-10 shadow-2xl relative",children:h?g.jsxs("div",{className:"py-8 text-center flex flex-col items-center",children:[g.jsx("div",{className:"w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-brand-emerald flex items-center justify-center mb-6",children:g.jsx(_u,{className:"w-8 h-8"})}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Inquiry Dispatched Successfully"}),g.jsxs("p",{className:"text-sm text-slate-300 max-w-md mb-6 leading-relaxed",children:["Thank you, ",g.jsx("strong",{children:s.name}),"! Your technical brief has been received. Our engineering lead will review your scope and follow up within 24 hours."]}),g.jsxs("div",{className:"p-4 rounded-xl bg-surface-200/80 border border-white/5 mb-6 w-full max-w-md text-left",children:[g.jsx("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider mb-2",children:"Inquiry Summary"}),g.jsxs("div",{className:"text-xs text-slate-200 space-y-1 font-mono",children:[g.jsxs("div",{children:["Email: ",g.jsx("span",{className:"text-white",children:s.email})]}),g.jsxs("div",{children:["Discipline: ",g.jsx("span",{className:"text-brand-cyan",children:s.projectType})]}),g.jsxs("div",{children:["Budget: ",g.jsx("span",{className:"text-brand-emerald",children:s.budgetRange})]})]})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[g.jsxs("a",{href:C,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-slate-950 font-bold text-xs shadow-lg",children:[g.jsx("span",{children:"Send via Email Client"}),g.jsx(Ds,{className:"w-3.5 h-3.5"})]}),g.jsxs("button",{onClick:()=>{m(!1),e({name:"",email:"",phone:"",projectType:"Both (Web Engineering + Agentic AI)",budgetRange:"$10k - $25k",message:""})},className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-200 text-slate-300 hover:text-white text-xs border border-white/10",children:[g.jsx(up,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Submit Another Inquiry"})]})]})]}):g.jsxs("form",{onSubmit:_,className:"space-y-6",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[g.jsx("h3",{className:"text-xl font-bold text-white",children:"Project Inquiry Form"}),g.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Step 1 of 1"})]}),x&&g.jsx("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono",children:x}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:"Your Name *"}),g.jsx("input",{type:"text",required:!0,placeholder:"Jane Doe",value:s.name,onChange:L=>e({...s,name:L.target.value}),className:"w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:"Work Email *"}),g.jsx("input",{type:"email",required:!0,placeholder:"jane@company.com",value:s.email,onChange:L=>e({...s,email:L.target.value}),className:"w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:"Phone / WhatsApp (Optional)"}),g.jsx("input",{type:"tel",placeholder:"+1 (555) 000-0000",value:s.phone,onChange:L=>e({...s,phone:L.target.value}),className:"w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors font-mono"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:"Estimated Budget"}),g.jsx("select",{value:s.budgetRange,onChange:L=>e({...s,budgetRange:L.target.value}),className:"w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm transition-colors",children:E.map(L=>g.jsx("option",{value:L,className:"bg-[#080B12] text-white",children:L},L))})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-2.5",children:"What discipline does your project involve?"}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:S.map(L=>{const W=s.projectType===L;return g.jsx("button",{type:"button",onClick:()=>e({...s,projectType:L}),className:`p-3 rounded-xl text-left text-xs font-medium border transition-all ${W?"bg-brand-cyan/15 border-brand-cyan text-white shadow-sm":"bg-[#080B12] border-white/5 text-slate-400 hover:text-white hover:border-white/20"}`,children:L},L)})})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:"Project Overview / Technical Requirements *"}),g.jsx("textarea",{rows:4,required:!0,placeholder:"Describe what you want to build, current bottlenecks, target deadlines, or technical stack preferences...",value:s.message,onChange:L=>e({...s,message:L.target.value}),className:"w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors resize-none"})]}),g.jsx("button",{type:"submit",disabled:f,className:"w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-emerald text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-brand-cyan/20 hover:shadow-brand-cyan/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group",children:f?g.jsxs(g.Fragment,{children:[g.jsx(up,{className:"w-4 h-4 animate-spin"}),g.jsx("span",{children:"Transmitting Inquiry..."})]}):g.jsxs(g.Fragment,{children:[g.jsx("span",{children:"Transmit Project Brief"}),g.jsx(ov,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})}),g.jsx("div",{className:"text-center",children:g.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Prefer direct email? Write to"," ",g.jsx("a",{href:`mailto:${Fi}`,className:"text-brand-cyan underline hover:text-white",children:Fi})]})})]})})})]})]})},XE=()=>{const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return g.jsx("footer",{className:"relative border-t border-white/10 bg-[#06080D] pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10",children:[g.jsxs("div",{className:"lg:col-span-2",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-surface-100 border border-white/15 flex items-center justify-center text-brand-cyan",children:g.jsx(Hs,{className:"w-5 h-5"})}),g.jsx("span",{className:"text-xl font-bold tracking-tight text-white",children:id})]}),g.jsx("p",{className:"text-xs font-mono text-brand-cyan mb-3",children:Xm}),g.jsx("p",{className:"text-xs text-slate-400 leading-relaxed max-w-sm mb-6",children:"Engineering bespoke full-stack web platforms and autonomous agentic workflows. Crafting high-leverage software architectures for modern digital pioneers."}),g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-[11px] font-mono text-slate-300",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-emerald animate-pulse"}),g.jsx("span",{children:"All Systems Operational • 99.99% Uptime"})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 mb-4",children:"Navigation"}),g.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-400",children:[g.jsx("li",{children:g.jsx("a",{href:"#services",className:"hover:text-brand-cyan transition-colors",children:"Dual-Engine Services"})}),g.jsx("li",{children:g.jsx("a",{href:"#architecture",className:"hover:text-brand-cyan transition-colors",children:"System Architecture"})}),g.jsx("li",{children:g.jsx("a",{href:"#works",className:"hover:text-brand-cyan transition-colors",children:"Selected Works"})}),g.jsx("li",{children:g.jsx("a",{href:"#process",className:"hover:text-brand-cyan transition-colors",children:"Engineering Lifecycle"})}),g.jsx("li",{children:g.jsx("a",{href:"#about",className:"hover:text-brand-cyan transition-colors",children:"About & Standards"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 mb-4",children:"Featured Products"}),g.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-400",children:[g.jsx("li",{children:g.jsxs("a",{href:"http://www.plusone.today",target:"_blank",rel:"noreferrer",className:"hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5",children:[g.jsx("span",{children:"PlusOne (plusone.today)"}),g.jsx(nd,{className:"w-3 h-3 text-brand-cyan"})]})}),g.jsx("li",{children:g.jsx("a",{href:"#works",className:"hover:text-brand-cyan transition-colors",children:"AetherFlow Agent Hub"})}),g.jsx("li",{children:g.jsx("a",{href:"#works",className:"hover:text-brand-cyan transition-colors",children:"Synthetix Trading Engine"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 mb-4",children:"Direct Contact"}),g.jsxs("ul",{className:"space-y-3 text-xs text-slate-400",children:[g.jsx("li",{children:g.jsxs("a",{href:`mailto:${Fi}`,className:"hover:text-white transition-colors flex items-center gap-2",children:[g.jsx(jm,{className:"w-3.5 h-3.5 text-brand-cyan"}),g.jsx("span",{className:"truncate",children:Fi})]})}),g.jsx("li",{children:g.jsxs("a",{href:`tel:${Us}`,className:"hover:text-brand-emerald transition-colors flex items-center gap-2 font-mono",children:[g.jsx(Sl,{className:"w-3.5 h-3.5 text-brand-emerald"}),g.jsx("span",{children:El})]})}),g.jsx("li",{className:"pt-2",children:g.jsx("div",{className:"text-[11px] font-mono text-slate-400",children:"Kochi, India • Serving Global Clients"})})]})]})]}),g.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400",children:[g.jsxs("div",{children:["© ",new Date().getFullYear()," ",id,". All rights reserved. The Art of Intelligent Software."]}),g.jsxs("div",{className:"flex items-center gap-6",children:[g.jsxs("span",{className:"flex items-center gap-1.5 text-slate-400",children:[g.jsx(Fa,{className:"w-3.5 h-3.5 text-brand-cyan"}),g.jsx("span",{children:"Enterprise Grade Security"})]}),g.jsxs("button",{onClick:s,className:"p-2 rounded-lg bg-surface-100 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1",title:"Return to top",children:[g.jsx(wx,{className:"w-3.5 h-3.5"}),g.jsx("span",{className:"text-[11px]",children:"Top"})]})]})]})]})})};function qE(){return g.jsxs("div",{className:"relative min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-brand-cyan/25 selection:text-brand-cyan",children:[g.jsx(gx,{}),g.jsx(yv,{}),g.jsxs("main",{className:"relative z-10",children:[g.jsx(IE,{}),g.jsx(kE,{}),g.jsx(zE,{}),g.jsx(BE,{}),g.jsx(GE,{}),g.jsx(VE,{}),g.jsx(WE,{})]}),g.jsx(XE,{})]})}mx.createRoot(document.getElementById("root")).render(g.jsx(lx.StrictMode,{children:g.jsx(qE,{})}));
