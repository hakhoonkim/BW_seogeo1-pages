(function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))m(j);new MutationObserver(j=>{for(const E of j)if(E.type==="childList")for(const ne of E.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&m(ne)}).observe(document,{childList:!0,subtree:!0});function P(j){const E={};return j.integrity&&(E.integrity=j.integrity),j.referrerPolicy&&(E.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?E.credentials="include":j.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function m(j){if(j.ep)return;j.ep=!0;const E=P(j);fetch(j.href,E)}})();var rc={exports:{}},_n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function om(){if(bu)return _n;bu=1;var v=Symbol.for("react.transitional.element"),I=Symbol.for("react.fragment");function P(m,j,E){var ne=null;if(E!==void 0&&(ne=""+E),j.key!==void 0&&(ne=""+j.key),"key"in j){E={};for(var ve in j)ve!=="key"&&(E[ve]=j[ve])}else E=j;return j=E.ref,{$$typeof:v,type:m,key:ne,ref:j!==void 0?j:null,props:E}}return _n.Fragment=I,_n.jsx=P,_n.jsxs=P,_n}var Su;function lm(){return Su||(Su=1,rc.exports=om()),rc.exports}var u=lm(),dc={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function am(){if(Lu)return q;Lu=1;var v=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),te=Symbol.iterator;function ze(d){return d===null||typeof d!="object"?null:(d=te&&d[te]||d["@@iterator"],typeof d=="function"?d:null)}var we={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},be=Object.assign,it={};function xe(d,H,O){this.props=d,this.context=H,this.refs=it,this.updater=O||we}xe.prototype.isReactComponent={},xe.prototype.setState=function(d,H){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,H,"setState")},xe.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function kt(){}kt.prototype=xe.prototype;function De(d,H,O){this.props=d,this.context=H,this.refs=it,this.updater=O||we}var Ge=De.prototype=new kt;Ge.constructor=De,be(Ge,xe.prototype),Ge.isPureReactComponent=!0;var wt=Array.isArray;function Ae(){}var Z={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function st(d,H,O){var N=O.ref;return{$$typeof:v,type:d,key:H,ref:N!==void 0?N:null,props:O}}function Wt(d,H){return st(d.type,H,d.props)}function mt(d){return typeof d=="object"&&d!==null&&d.$$typeof===v}function Ke(d){var H={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(O){return H[O]})}var T=/\/+/g;function B(d,H){return typeof d=="object"&&d!==null&&d.key!=null?Ke(""+d.key):H.toString(36)}function pe(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Ae,Ae):(d.status="pending",d.then(function(H){d.status==="pending"&&(d.status="fulfilled",d.value=H)},function(H){d.status==="pending"&&(d.status="rejected",d.reason=H)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function S(d,H,O,N,A){var G=typeof d;(G==="undefined"||G==="boolean")&&(d=null);var se=!1;if(d===null)se=!0;else switch(G){case"bigint":case"string":case"number":se=!0;break;case"object":switch(d.$$typeof){case v:case I:se=!0;break;case F:return se=d._init,S(se(d._payload),H,O,N,A)}}if(se)return A=A(d),se=N===""?"."+B(d,0):N,wt(A)?(O="",se!=null&&(O=se.replace(T,"$&/")+"/"),S(A,H,O,"",function(Os){return Os})):A!=null&&(mt(A)&&(A=Wt(A,O+(A.key==null||d&&d.key===A.key?"":(""+A.key).replace(T,"$&/")+"/")+se)),H.push(A)),1;se=0;var Ze=N===""?".":N+":";if(wt(d))for(var He=0;He<d.length;He++)N=d[He],G=Ze+B(N,He),se+=S(N,H,O,G,A);else if(He=ze(d),typeof He=="function")for(d=He.call(d),He=0;!(N=d.next()).done;)N=N.value,G=Ze+B(N,He++),se+=S(N,H,O,G,A);else if(G==="object"){if(typeof d.then=="function")return S(pe(d),H,O,N,A);throw H=String(d),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return se}function k(d,H,O){if(d==null)return d;var N=[],A=0;return S(d,N,"","",function(G){return H.call(O,G,A++)}),N}function R(d){if(d._status===-1){var H=d._result;H=H(),H.then(function(O){(d._status===0||d._status===-1)&&(d._status=1,d._result=O)},function(O){(d._status===0||d._status===-1)&&(d._status=2,d._result=O)}),d._status===-1&&(d._status=0,d._result=H)}if(d._status===1)return d._result.default;throw d._result}var ae=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},ue={map:k,forEach:function(d,H,O){k(d,function(){H.apply(this,arguments)},O)},count:function(d){var H=0;return k(d,function(){H++}),H},toArray:function(d){return k(d,function(H){return H})||[]},only:function(d){if(!mt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return q.Activity=M,q.Children=ue,q.Component=xe,q.Fragment=P,q.Profiler=j,q.PureComponent=De,q.StrictMode=m,q.Suspense=x,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,q.__COMPILER_RUNTIME={__proto__:null,c:function(d){return Z.H.useMemoCache(d)}},q.cache=function(d){return function(){return d.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(d,H,O){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var N=be({},d.props),A=d.key;if(H!=null)for(G in H.key!==void 0&&(A=""+H.key),H)!_e.call(H,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&H.ref===void 0||(N[G]=H[G]);var G=arguments.length-2;if(G===1)N.children=O;else if(1<G){for(var se=Array(G),Ze=0;Ze<G;Ze++)se[Ze]=arguments[Ze+2];N.children=se}return st(d.type,A,N)},q.createContext=function(d){return d={$$typeof:ne,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:E,_context:d},d},q.createElement=function(d,H,O){var N,A={},G=null;if(H!=null)for(N in H.key!==void 0&&(G=""+H.key),H)_e.call(H,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(A[N]=H[N]);var se=arguments.length-2;if(se===1)A.children=O;else if(1<se){for(var Ze=Array(se),He=0;He<se;He++)Ze[He]=arguments[He+2];A.children=Ze}if(d&&d.defaultProps)for(N in se=d.defaultProps,se)A[N]===void 0&&(A[N]=se[N]);return st(d,G,A)},q.createRef=function(){return{current:null}},q.forwardRef=function(d){return{$$typeof:ve,render:d}},q.isValidElement=mt,q.lazy=function(d){return{$$typeof:F,_payload:{_status:-1,_result:d},_init:R}},q.memo=function(d,H){return{$$typeof:y,type:d,compare:H===void 0?null:H}},q.startTransition=function(d){var H=Z.T,O={};Z.T=O;try{var N=d(),A=Z.S;A!==null&&A(O,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Ae,ae)}catch(G){ae(G)}finally{H!==null&&O.types!==null&&(H.types=O.types),Z.T=H}},q.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},q.use=function(d){return Z.H.use(d)},q.useActionState=function(d,H,O){return Z.H.useActionState(d,H,O)},q.useCallback=function(d,H){return Z.H.useCallback(d,H)},q.useContext=function(d){return Z.H.useContext(d)},q.useDebugValue=function(){},q.useDeferredValue=function(d,H){return Z.H.useDeferredValue(d,H)},q.useEffect=function(d,H){return Z.H.useEffect(d,H)},q.useEffectEvent=function(d){return Z.H.useEffectEvent(d)},q.useId=function(){return Z.H.useId()},q.useImperativeHandle=function(d,H,O){return Z.H.useImperativeHandle(d,H,O)},q.useInsertionEffect=function(d,H){return Z.H.useInsertionEffect(d,H)},q.useLayoutEffect=function(d,H){return Z.H.useLayoutEffect(d,H)},q.useMemo=function(d,H){return Z.H.useMemo(d,H)},q.useOptimistic=function(d,H){return Z.H.useOptimistic(d,H)},q.useReducer=function(d,H,O){return Z.H.useReducer(d,H,O)},q.useRef=function(d){return Z.H.useRef(d)},q.useState=function(d){return Z.H.useState(d)},q.useSyncExternalStore=function(d,H,O){return Z.H.useSyncExternalStore(d,H,O)},q.useTransition=function(){return Z.H.useTransition()},q.version="19.2.4",q}var _u;function gc(){return _u||(_u=1,dc.exports=am()),dc.exports}var Ne=gc(),pc={exports:{}},Hn={},uc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu;function cm(){return Hu||(Hu=1,(function(v){function I(S,k){var R=S.length;S.push(k);e:for(;0<R;){var ae=R-1>>>1,ue=S[ae];if(0<j(ue,k))S[ae]=k,S[R]=ue,R=ae;else break e}}function P(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var k=S[0],R=S.pop();if(R!==k){S[0]=R;e:for(var ae=0,ue=S.length,d=ue>>>1;ae<d;){var H=2*(ae+1)-1,O=S[H],N=H+1,A=S[N];if(0>j(O,R))N<ue&&0>j(A,O)?(S[ae]=A,S[N]=R,ae=N):(S[ae]=O,S[H]=R,ae=H);else if(N<ue&&0>j(A,R))S[ae]=A,S[N]=R,ae=N;else break e}}return k}function j(S,k){var R=S.sortIndex-k.sortIndex;return R!==0?R:S.id-k.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;v.unstable_now=function(){return E.now()}}else{var ne=Date,ve=ne.now();v.unstable_now=function(){return ne.now()-ve}}var x=[],y=[],F=1,M=null,te=3,ze=!1,we=!1,be=!1,it=!1,xe=typeof setTimeout=="function"?setTimeout:null,kt=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function Ge(S){for(var k=P(y);k!==null;){if(k.callback===null)m(y);else if(k.startTime<=S)m(y),k.sortIndex=k.expirationTime,I(x,k);else break;k=P(y)}}function wt(S){if(be=!1,Ge(S),!we)if(P(x)!==null)we=!0,Ae||(Ae=!0,Ke());else{var k=P(y);k!==null&&pe(wt,k.startTime-S)}}var Ae=!1,Z=-1,_e=5,st=-1;function Wt(){return it?!0:!(v.unstable_now()-st<_e)}function mt(){if(it=!1,Ae){var S=v.unstable_now();st=S;var k=!0;try{e:{we=!1,be&&(be=!1,kt(Z),Z=-1),ze=!0;var R=te;try{t:{for(Ge(S),M=P(x);M!==null&&!(M.expirationTime>S&&Wt());){var ae=M.callback;if(typeof ae=="function"){M.callback=null,te=M.priorityLevel;var ue=ae(M.expirationTime<=S);if(S=v.unstable_now(),typeof ue=="function"){M.callback=ue,Ge(S),k=!0;break t}M===P(x)&&m(x),Ge(S)}else m(x);M=P(x)}if(M!==null)k=!0;else{var d=P(y);d!==null&&pe(wt,d.startTime-S),k=!1}}break e}finally{M=null,te=R,ze=!1}k=void 0}}finally{k?Ke():Ae=!1}}}var Ke;if(typeof De=="function")Ke=function(){De(mt)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,B=T.port2;T.port1.onmessage=mt,Ke=function(){B.postMessage(null)}}else Ke=function(){xe(mt,0)};function pe(S,k){Z=xe(function(){S(v.unstable_now())},k)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(S){S.callback=null},v.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<S?Math.floor(1e3/S):5},v.unstable_getCurrentPriorityLevel=function(){return te},v.unstable_next=function(S){switch(te){case 1:case 2:case 3:var k=3;break;default:k=te}var R=te;te=k;try{return S()}finally{te=R}},v.unstable_requestPaint=function(){it=!0},v.unstable_runWithPriority=function(S,k){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var R=te;te=S;try{return k()}finally{te=R}},v.unstable_scheduleCallback=function(S,k,R){var ae=v.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ae+R:ae):R=ae,S){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=R+ue,S={id:F++,callback:k,priorityLevel:S,startTime:R,expirationTime:ue,sortIndex:-1},R>ae?(S.sortIndex=R,I(y,S),P(x)===null&&S===P(y)&&(be?(kt(Z),Z=-1):be=!0,pe(wt,R-ae))):(S.sortIndex=ue,I(x,S),we||ze||(we=!0,Ae||(Ae=!0,Ke()))),S},v.unstable_shouldYield=Wt,v.unstable_wrapCallback=function(S){var k=te;return function(){var R=te;te=k;try{return S.apply(this,arguments)}finally{te=R}}}})(hc)),hc}var Tu;function rm(){return Tu||(Tu=1,uc.exports=cm()),uc.exports}var wc={exports:{}},Ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu;function dm(){if(yu)return Ee;yu=1;var v=gc();function I(x){var y="https://react.dev/errors/"+x;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)y+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+x+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function P(){}var m={d:{f:P,r:function(){throw Error(I(522))},D:P,C:P,L:P,m:P,X:P,S:P,M:P},p:0,findDOMNode:null},j=Symbol.for("react.portal");function E(x,y,F){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:M==null?null:""+M,children:x,containerInfo:y,implementation:F}}var ne=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ve(x,y){if(x==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Ee.createPortal=function(x,y){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(I(299));return E(x,y,null,F)},Ee.flushSync=function(x){var y=ne.T,F=m.p;try{if(ne.T=null,m.p=2,x)return x()}finally{ne.T=y,m.p=F,m.d.f()}},Ee.preconnect=function(x,y){typeof x=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,m.d.C(x,y))},Ee.prefetchDNS=function(x){typeof x=="string"&&m.d.D(x)},Ee.preinit=function(x,y){if(typeof x=="string"&&y&&typeof y.as=="string"){var F=y.as,M=ve(F,y.crossOrigin),te=typeof y.integrity=="string"?y.integrity:void 0,ze=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;F==="style"?m.d.S(x,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:M,integrity:te,fetchPriority:ze}):F==="script"&&m.d.X(x,{crossOrigin:M,integrity:te,fetchPriority:ze,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ee.preinitModule=function(x,y){if(typeof x=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var F=ve(y.as,y.crossOrigin);m.d.M(x,{crossOrigin:F,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&m.d.M(x)},Ee.preload=function(x,y){if(typeof x=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var F=y.as,M=ve(F,y.crossOrigin);m.d.L(x,F,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ee.preloadModule=function(x,y){if(typeof x=="string")if(y){var F=ve(y.as,y.crossOrigin);m.d.m(x,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:F,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else m.d.m(x)},Ee.requestFormReset=function(x){m.d.r(x)},Ee.unstable_batchedUpdates=function(x,y){return x(y)},Ee.useFormState=function(x,y,F){return ne.H.useFormState(x,y,F)},Ee.useFormStatus=function(){return ne.H.useHostTransitionStatus()},Ee.version="19.2.4",Ee}var vu;function pm(){if(vu)return wc.exports;vu=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(I){console.error(I)}}return v(),wc.exports=dm(),wc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku;function um(){if(ku)return Hn;ku=1;var v=rm(),I=gc(),P=pm();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function E(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function ne(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ve(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(E(e)!==e)throw Error(m(188))}function y(e){var t=e.alternate;if(!t){if(t=E(e),t===null)throw Error(m(188));return t!==e?null:e}for(var i=e,s=t;;){var n=i.return;if(n===null)break;var o=n.alternate;if(o===null){if(s=n.return,s!==null){i=s;continue}break}if(n.child===o.child){for(o=n.child;o;){if(o===i)return x(n),e;if(o===s)return x(n),t;o=o.sibling}throw Error(m(188))}if(i.return!==s.return)i=n,s=o;else{for(var l=!1,a=n.child;a;){if(a===i){l=!0,i=n,s=o;break}if(a===s){l=!0,s=n,i=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===i){l=!0,i=o,s=n;break}if(a===s){l=!0,s=o,i=n;break}a=a.sibling}if(!l)throw Error(m(189))}}if(i.alternate!==s)throw Error(m(190))}if(i.tag!==3)throw Error(m(188));return i.stateNode.current===i?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,te=Symbol.for("react.element"),ze=Symbol.for("react.transitional.element"),we=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),kt=Symbol.for("react.consumer"),De=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),st=Symbol.for("react.activity"),Wt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var T=Symbol.for("react.client.reference");function B(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===T?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case be:return"Fragment";case xe:return"Profiler";case it:return"StrictMode";case wt:return"Suspense";case Ae:return"SuspenseList";case st:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case we:return"Portal";case De:return e.displayName||"Context";case kt:return(e._context.displayName||"Context")+".Consumer";case Ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:B(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return B(e(t))}catch{}}return null}var pe=Array.isArray,S=I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},ae=[],ue=-1;function d(e){return{current:e}}function H(e){0>ue||(e.current=ae[ue],ae[ue]=null,ue--)}function O(e,t){ue++,ae[ue]=e.current,e.current=t}var N=d(null),A=d(null),G=d(null),se=d(null);function Ze(e,t){switch(O(G,t),O(A,e),O(N,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ap(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ap(t),e=Kp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(N),O(N,e)}function He(){H(N),H(A),H(G)}function Os(e){e.memoizedState!==null&&O(se,e);var t=N.current,i=Kp(t,e.type);t!==i&&(O(A,e),O(N,i))}function yn(e){A.current===e&&(H(N),H(A)),se.current===e&&(H(se),fn._currentValue=R)}var Zo,fc;function yi(e){if(Zo===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||"",fc=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zo+e+fc}var Fo=!1;function Go(e,t){if(!e||Fo)return"";Fo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(f){var g=f}Reflect.construct(e,[],_)}else{try{_.call()}catch(f){g=f}e.call(_.prototype)}}else{try{throw Error()}catch(f){g=f}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(f){if(f&&g&&typeof f.stack=="string")return[f.stack,g.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=s.DetermineComponentFrameRoot(),l=o[0],a=o[1];if(l&&a){var c=l.split(`
`),w=a.split(`
`);for(n=s=0;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(s===c.length||n===w.length)for(s=c.length-1,n=w.length-1;1<=s&&0<=n&&c[s]!==w[n];)n--;for(;1<=s&&0<=n;s--,n--)if(c[s]!==w[n]){if(s!==1||n!==1)do if(s--,n--,0>n||c[s]!==w[n]){var b=`
`+c[s].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=s&&0<=n);break}}}finally{Fo=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?yi(i):""}function Mu(e,t){switch(e.tag){case 26:case 27:case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return e.child!==t&&t!==null?yi("Suspense Fallback"):yi("Suspense");case 19:return yi("SuspenseList");case 0:case 15:return Go(e.type,!1);case 11:return Go(e.type.render,!1);case 1:return Go(e.type,!0);case 31:return yi("Activity");default:return""}}function bc(e){try{var t="",i=null;do t+=Mu(e,i),i=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Vo=Object.prototype.hasOwnProperty,Qo=v.unstable_scheduleCallback,Yo=v.unstable_cancelCallback,Bu=v.unstable_shouldYield,ju=v.unstable_requestPaint,nt=v.unstable_now,qu=v.unstable_getCurrentPriorityLevel,Sc=v.unstable_ImmediatePriority,Lc=v.unstable_UserBlockingPriority,vn=v.unstable_NormalPriority,Iu=v.unstable_LowPriority,_c=v.unstable_IdlePriority,Au=v.log,Ku=v.unstable_setDisableYieldValue,Ps=null,ot=null;function $t(e){if(typeof Au=="function"&&Ku(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ps,e)}catch{}}var lt=Math.clz32?Math.clz32:Zu,Eu=Math.log,zu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Eu(e)/zu|0)|0}var kn=256,On=262144,Pn=4194304;function vi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Un(e,t,i){var s=e.pendingLanes;if(s===0)return 0;var n=0,o=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var a=s&134217727;return a!==0?(s=a&~o,s!==0?n=vi(s):(l&=a,l!==0?n=vi(l):i||(i=a&~e,i!==0&&(n=vi(i))))):(a=s&~o,a!==0?n=vi(a):l!==0?n=vi(l):i||(i=s&~e,i!==0&&(n=vi(i)))),n===0?0:t!==0&&t!==n&&(t&o)===0&&(o=n&-n,i=t&-t,o>=i||o===32&&(i&4194048)!==0)?t:n}function Us(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hc(){var e=Pn;return Pn<<=1,(Pn&62914560)===0&&(Pn=4194304),e}function Xo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Ns(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gu(e,t,i,s,n,o){var l=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var a=e.entanglements,c=e.expirationTimes,w=e.hiddenUpdates;for(i=l&~i;0<i;){var b=31-lt(i),_=1<<b;a[b]=0,c[b]=-1;var g=w[b];if(g!==null)for(w[b]=null,b=0;b<g.length;b++){var f=g[b];f!==null&&(f.lane&=-536870913)}i&=~_}s!==0&&Tc(e,s,0),o!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=o&~(l&~t))}function Tc(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-lt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|i&261930}function yc(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-lt(i),n=1<<s;n&t|e[s]&t&&(e[s]|=t),i&=~n}}function vc(e,t){var i=t&-t;return i=(i&42)!==0?1:Wo(i),(i&(e.suspendedLanes|t))!==0?0:i}function Wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kc(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:pu(e.type))}function Oc(e,t){var i=k.p;try{return k.p=e,t()}finally{k.p=i}}var ei=Math.random().toString(36).slice(2),Me="__reactFiber$"+ei,Ve="__reactProps$"+ei,Ei="__reactContainer$"+ei,el="__reactEvents$"+ei,Vu="__reactListeners$"+ei,Qu="__reactHandles$"+ei,Pc="__reactResources$"+ei,xs="__reactMarker$"+ei;function tl(e){delete e[Me],delete e[Ve],delete e[el],delete e[Vu],delete e[Qu]}function zi(e){var t=e[Me];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ei]||i[Me]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Qp(e);e!==null;){if(i=e[Me])return i;e=Qp(e)}return t}e=i,i=e.parentNode}return null}function Zi(e){if(e=e[Me]||e[Ei]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Fi(e){var t=e[Pc];return t||(t=e[Pc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[xs]=!0}var Uc=new Set,Nc={};function ki(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(Nc[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var Yu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xc={},Cc={};function Xu(e){return Vo.call(Cc,e)?!0:Vo.call(xc,e)?!1:Yu.test(e)?Cc[e]=!0:(xc[e]=!0,!1)}function Nn(e,t,i){if(Xu(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function xn(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Rt(e,t,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+s)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wu(e,t,i){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,o=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function il(e){if(!e._valueTracker){var t=Dc(e)?"checked":"value";e._valueTracker=Wu(e,t,""+e[t])}}function Rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Dc(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $u=/[\n"\\]/g;function ft(e){return e.replace($u,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function sl(e,t,i,s,n,o,l,a){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?nl(e,l,gt(t)):i!=null?nl(e,l,gt(i)):s!=null&&e.removeAttribute("value"),n==null&&o!=null&&(e.defaultChecked=!!o),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.name=""+gt(a):e.removeAttribute("name")}function Jc(e,t,i,s,n,o,l,a){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||i!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){il(e);return}i=i!=null?""+gt(i):"",t=t!=null?""+gt(t):i,a||t===e.value||(e.value=t),e.defaultValue=t}s=s??n,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=a?e.checked:!!s,e.defaultChecked=!!s,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),il(e)}function nl(e,t,i){t==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Vi(e,t,i,s){if(e=e.options,t){t={};for(var n=0;n<i.length;n++)t["$"+i[n]]=!0;for(i=0;i<e.length;i++)n=t.hasOwnProperty("$"+e[i].value),e[i].selected!==n&&(e[i].selected=n),n&&s&&(e[i].defaultSelected=!0)}else{for(i=""+gt(i),t=null,n=0;n<e.length;n++){if(e[n].value===i){e[n].selected=!0,s&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Mc(e,t,i){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+gt(i):""}function Bc(e,t,i,s){if(t==null){if(s!=null){if(i!=null)throw Error(m(92));if(pe(s)){if(1<s.length)throw Error(m(93));s=s[0]}i=s}i==null&&(i=""),t=i}i=gt(t),e.defaultValue=i,s=e.textContent,s===i&&s!==""&&s!==null&&(e.value=s),il(e)}function Qi(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(e,t,i){var s=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,i):typeof i!="number"||i===0||eh.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function qc(e,t,i){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var n in t)s=t[n],t.hasOwnProperty(n)&&i[n]!==s&&jc(e,n,s)}else for(var o in t)t.hasOwnProperty(o)&&jc(e,o,t[o])}function ol(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(e){return ih.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jt(){}var ll=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yi=null,Xi=null;function Ic(e){var t=Zi(e);if(t&&(e=t.stateNode)){var i=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(sl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var n=s[Ve]||null;if(!n)throw Error(m(90));sl(s,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<i.length;t++)s=i[t],s.form===e.form&&Rc(s)}break e;case"textarea":Mc(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Vi(e,!!i.multiple,t,!1)}}}var cl=!1;function Ac(e,t,i){if(cl)return e(t,i);cl=!0;try{var s=e(t);return s}finally{if(cl=!1,(Yi!==null||Xi!==null)&&(_o(),Yi&&(t=Yi,e=Xi,Xi=Yi=null,Ic(t),e)))for(t=0;t<e.length;t++)Ic(e[t])}}function Ds(e,t){var i=e.stateNode;if(i===null)return null;var s=i[Ve]||null;if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(m(231,t,typeof i));return i}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=!1;if(Mt)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){rl=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{rl=!1}var ti=null,dl=null,Rn=null;function Kc(){if(Rn)return Rn;var e,t=dl,i=t.length,s,n="value"in ti?ti.value:ti.textContent,o=n.length;for(e=0;e<i&&t[e]===n[e];e++);var l=i-e;for(s=1;s<=l&&t[i-s]===n[o-s];s++);return Rn=n.slice(e,1<s?1-s:void 0)}function Jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function Ec(){return!1}function Qe(e){function t(i,s,n,o,l){this._reactName=i,this._targetInst=n,this.type=s,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(i=e[a],this[a]=i?i(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mn:Ec,this.isPropagationStopped=Ec,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Qe(Oi),Js=M({},Oi,{view:0,detail:0}),sh=Qe(Js),pl,ul,Ms,jn=M({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ms&&(Ms&&e.type==="mousemove"?(pl=e.screenX-Ms.screenX,ul=e.screenY-Ms.screenY):ul=pl=0,Ms=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),zc=Qe(jn),nh=M({},jn,{dataTransfer:0}),oh=Qe(nh),lh=M({},Js,{relatedTarget:0}),hl=Qe(lh),ah=M({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=Qe(ah),rh=M({},Oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=Qe(rh),ph=M({},Oi,{data:0}),Zc=Qe(ph),uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wh[e])?!!t[e]:!1}function wl(){return mh}var gh=M({},Js,{key:function(e){if(e.key){var t=uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fh=Qe(gh),bh=M({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=Qe(bh),Sh=M({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),Lh=Qe(Sh),_h=M({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=Qe(_h),Th=M({},jn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=Qe(Th),vh=M({},Oi,{newState:0,oldState:0}),kh=Qe(vh),Oh=[9,13,27,32],ml=Mt&&"CompositionEvent"in window,Bs=null;Mt&&"documentMode"in document&&(Bs=document.documentMode);var Ph=Mt&&"TextEvent"in window&&!Bs,Gc=Mt&&(!ml||Bs&&8<Bs&&11>=Bs),Vc=" ",Qc=!1;function Yc(e,t){switch(e){case"keyup":return Oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function Uh(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Qc=!0,Vc);case"textInput":return e=t.data,e===Vc&&Qc?null:e;default:return null}}function Nh(e,t){if(Wi)return e==="compositionend"||!ml&&Yc(e,t)?(e=Kc(),Rn=dl=ti=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xh[e.type]:t==="textarea"}function $c(e,t,i,s){Yi?Xi?Xi.push(s):Xi=[s]:Yi=s,t=Po(t,"onChange"),0<t.length&&(i=new Bn("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var js=null,qs=null;function Ch(e){Jp(e,0)}function qn(e){var t=Cs(e);if(Rc(t))return e}function er(e,t){if(e==="change")return t}var tr=!1;if(Mt){var gl;if(Mt){var fl="oninput"in document;if(!fl){var ir=document.createElement("div");ir.setAttribute("oninput","return;"),fl=typeof ir.oninput=="function"}gl=fl}else gl=!1;tr=gl&&(!document.documentMode||9<document.documentMode)}function sr(){js&&(js.detachEvent("onpropertychange",nr),qs=js=null)}function nr(e){if(e.propertyName==="value"&&qn(qs)){var t=[];$c(t,qs,e,al(e)),Ac(Ch,t)}}function Dh(e,t,i){e==="focusin"?(sr(),js=t,qs=i,js.attachEvent("onpropertychange",nr)):e==="focusout"&&sr()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(qs)}function Jh(e,t){if(e==="click")return qn(t)}function Mh(e,t){if(e==="input"||e==="change")return qn(t)}function Bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Bh;function Is(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var n=i[s];if(!Vo.call(t,n)||!at(e[n],t[n]))return!1}return!0}function or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lr(e,t){var i=or(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=or(i)}}function ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ar(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cn(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Cn(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jh=Mt&&"documentMode"in document&&11>=document.documentMode,$i=null,Sl=null,As=null,Ll=!1;function rr(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ll||$i==null||$i!==Cn(s)||(s=$i,"selectionStart"in s&&bl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),As&&Is(As,s)||(As=s,s=Po(Sl,"onSelect"),0<s.length&&(t=new Bn("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=$i)))}function Pi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var es={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionrun:Pi("Transition","TransitionRun"),transitionstart:Pi("Transition","TransitionStart"),transitioncancel:Pi("Transition","TransitionCancel"),transitionend:Pi("Transition","TransitionEnd")},_l={},dr={};Mt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Ui(e){if(_l[e])return _l[e];if(!es[e])return e;var t=es[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in dr)return _l[e]=t[i];return e}var pr=Ui("animationend"),ur=Ui("animationiteration"),hr=Ui("animationstart"),qh=Ui("transitionrun"),Ih=Ui("transitionstart"),Ah=Ui("transitioncancel"),wr=Ui("transitionend"),mr=new Map,Hl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hl.push("scrollEnd");function Ot(e,t){mr.set(e,t),ki(t,[e])}var In=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],ts=0,Tl=0;function An(){for(var e=ts,t=Tl=ts=0;t<e;){var i=bt[t];bt[t++]=null;var s=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var o=bt[t];if(bt[t++]=null,s!==null&&n!==null){var l=s.pending;l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n}o!==0&&gr(i,n,o)}}function Kn(e,t,i,s){bt[ts++]=e,bt[ts++]=t,bt[ts++]=i,bt[ts++]=s,Tl|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function yl(e,t,i,s){return Kn(e,t,i,s),En(e)}function Ni(e,t){return Kn(e,null,null,t),En(e)}function gr(e,t,i){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i);for(var n=!1,o=e.return;o!==null;)o.childLanes|=i,s=o.alternate,s!==null&&(s.childLanes|=i),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(n=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,n&&t!==null&&(n=31-lt(i),e=o.hiddenUpdates,s=e[n],s===null?e[n]=[t]:s.push(t),t.lane=i|536870912),o):null}function En(e){if(50<dn)throw dn=0,Da=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var is={};function Kh(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,i,s){return new Kh(e,t,i,s)}function vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var i=e.alternate;return i===null?(i=ct(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function fr(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zn(e,t,i,s,n,o){var l=0;if(s=e,typeof e=="function")vl(e)&&(l=1);else if(typeof e=="string")l=Gw(e,i,N.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case st:return e=ct(31,i,t,n),e.elementType=st,e.lanes=o,e;case be:return xi(i.children,n,o,t);case it:l=8,n|=24;break;case xe:return e=ct(12,i,t,n|2),e.elementType=xe,e.lanes=o,e;case wt:return e=ct(13,i,t,n),e.elementType=wt,e.lanes=o,e;case Ae:return e=ct(19,i,t,n),e.elementType=Ae,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:l=10;break e;case kt:l=9;break e;case Ge:l=11;break e;case Z:l=14;break e;case _e:l=16,s=null;break e}l=29,i=Error(m(130,e===null?"null":typeof e,"")),s=null}return t=ct(l,i,t,n),t.elementType=e,t.type=s,t.lanes=o,t}function xi(e,t,i,s){return e=ct(7,e,s,t),e.lanes=i,e}function kl(e,t,i){return e=ct(6,e,null,t),e.lanes=i,e}function br(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Ol(e,t,i){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sr=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var i=Sr.get(e);return i!==void 0?i:(t={value:e,source:t,stack:bc(t)},Sr.set(e,t),t)}return{value:e,source:t,stack:bc(t)}}var ss=[],ns=0,Zn=null,Ks=0,Lt=[],_t=0,ii=null,Nt=1,xt="";function jt(e,t){ss[ns++]=Ks,ss[ns++]=Zn,Zn=e,Ks=t}function Lr(e,t,i){Lt[_t++]=Nt,Lt[_t++]=xt,Lt[_t++]=ii,ii=e;var s=Nt;e=xt;var n=32-lt(s)-1;s&=~(1<<n),i+=1;var o=32-lt(t)+n;if(30<o){var l=n-n%5;o=(s&(1<<l)-1).toString(32),s>>=l,n-=l,Nt=1<<32-lt(t)+n|i<<n|s,xt=o+e}else Nt=1<<o|i<<n|s,xt=e}function Pl(e){e.return!==null&&(jt(e,1),Lr(e,1,0))}function Ul(e){for(;e===Zn;)Zn=ss[--ns],ss[ns]=null,Ks=ss[--ns],ss[ns]=null;for(;e===ii;)ii=Lt[--_t],Lt[_t]=null,xt=Lt[--_t],Lt[_t]=null,Nt=Lt[--_t],Lt[_t]=null}function _r(e,t){Lt[_t++]=Nt,Lt[_t++]=xt,Lt[_t++]=ii,Nt=t.id,xt=t.overflow,ii=e}var Be=null,me=null,W=!1,si=null,Ht=!1,Nl=Error(m(519));function ni(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Es(St(t,e)),Nl}function Hr(e){var t=e.stateNode,i=e.type,s=e.memoizedProps;switch(t[Me]=e,t[Ve]=s,i){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(i=0;i<un.length;i++)Q(un[i],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Jc(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),Bc(t,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||s.suppressHydrationWarning===!0||qp(t.textContent,i)?(s.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),s.onScroll!=null&&Q("scroll",t),s.onScrollEnd!=null&&Q("scrollend",t),s.onClick!=null&&(t.onclick=Jt),t=!0):t=!1,t||ni(e,!0)}function Tr(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:Be=Be.return}}function os(e){if(e!==Be)return!1;if(!W)return Tr(e),W=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Va(e.type,e.memoizedProps)),i=!i),i&&me&&ni(e),Tr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));me=Vp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));me=Vp(e)}else t===27?(t=me,bi(e.type)?(e=$a,$a=null,me=e):me=t):me=Be?yt(e.stateNode.nextSibling):null;return!0}function Ci(){me=Be=null,W=!1}function xl(){var e=si;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),si=null),e}function Es(e){si===null?si=[e]:si.push(e)}var Cl=d(null),Di=null,qt=null;function oi(e,t,i){O(Cl,t._currentValue),t._currentValue=i}function It(e){e._currentValue=Cl.current,H(Cl)}function Dl(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function Rl(e,t,i,s){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var o=n.dependencies;if(o!==null){var l=n.child;o=o.firstContext;e:for(;o!==null;){var a=o;o=n;for(var c=0;c<t.length;c++)if(a.context===t[c]){o.lanes|=i,a=o.alternate,a!==null&&(a.lanes|=i),Dl(o.return,i,e),s||(l=null);break e}o=a.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(m(341));l.lanes|=i,o=l.alternate,o!==null&&(o.lanes|=i),Dl(l,i,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function ls(e,t,i,s){e=null;for(var n=t,o=!1;n!==null;){if(!o){if((n.flags&524288)!==0)o=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(m(387));if(l=l.memoizedProps,l!==null){var a=n.type;at(n.pendingProps.value,l.value)||(e!==null?e.push(a):e=[a])}}else if(n===se.current){if(l=n.alternate,l===null)throw Error(m(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(fn):e=[fn])}n=n.return}e!==null&&Rl(t,e,i,s),t.flags|=262144}function Fn(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ri(e){Di=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function je(e){return yr(Di,e)}function Gn(e,t){return Di===null&&Ri(e),yr(e,t)}function yr(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},qt===null){if(e===null)throw Error(m(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return i}var Eh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},zh=v.unstable_scheduleCallback,Zh=v.unstable_NormalPriority,ke={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jl(){return{controller:new Eh,data:new Map,refCount:0}}function zs(e){e.refCount--,e.refCount===0&&zh(Zh,function(){e.controller.abort()})}var Zs=null,Ml=0,as=0,cs=null;function Fh(e,t){if(Zs===null){var i=Zs=[];Ml=0,as=qa(),cs={status:"pending",value:void 0,then:function(s){i.push(s)}}}return Ml++,t.then(vr,vr),t}function vr(){if(--Ml===0&&Zs!==null){cs!==null&&(cs.status="fulfilled");var e=Zs;Zs=null,as=0,cs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gh(e,t){var i=[],s={status:"pending",value:null,reason:null,then:function(n){i.push(n)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var n=0;n<i.length;n++)(0,i[n])(t)},function(n){for(s.status="rejected",s.reason=n,n=0;n<i.length;n++)(0,i[n])(void 0)}),s}var kr=S.S;S.S=function(e,t){rp=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fh(e,t),kr!==null&&kr(e,t)};var Ji=d(null);function Bl(){var e=Ji.current;return e!==null?e:he.pooledCache}function Vn(e,t){t===null?O(Ji,Ji.current):O(Ji,t.pool)}function Or(){var e=Bl();return e===null?null:{parent:ke._currentValue,pool:e}}var rs=Error(m(460)),jl=Error(m(474)),Qn=Error(m(542)),Yn={then:function(){}};function Pr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ur(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(Jt,Jt),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xr(e),e;default:if(typeof t.status=="string")t.then(Jt,Jt);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=s}},function(s){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xr(e),e}throw Bi=t,rs}}function Mi(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Bi=i,rs):i}}var Bi=null;function Nr(){if(Bi===null)throw Error(m(459));var e=Bi;return Bi=null,e}function xr(e){if(e===rs||e===Qn)throw Error(m(483))}var ds=null,Fs=0;function Xn(e){var t=Fs;return Fs+=1,ds===null&&(ds=[]),Ur(ds,e,t)}function Gs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wn(e,t){throw t.$$typeof===te?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cr(e){function t(p,r){if(e){var h=p.deletions;h===null?(p.deletions=[r],p.flags|=16):h.push(r)}}function i(p,r){if(!e)return null;for(;r!==null;)t(p,r),r=r.sibling;return null}function s(p){for(var r=new Map;p!==null;)p.key!==null?r.set(p.key,p):r.set(p.index,p),p=p.sibling;return r}function n(p,r){return p=Bt(p,r),p.index=0,p.sibling=null,p}function o(p,r,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<r?(p.flags|=67108866,r):h):(p.flags|=67108866,r)):(p.flags|=1048576,r)}function l(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function a(p,r,h,L){return r===null||r.tag!==6?(r=kl(h,p.mode,L),r.return=p,r):(r=n(r,h),r.return=p,r)}function c(p,r,h,L){var D=h.type;return D===be?b(p,r,h.props.children,L,h.key):r!==null&&(r.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===_e&&Mi(D)===r.type)?(r=n(r,h.props),Gs(r,h),r.return=p,r):(r=zn(h.type,h.key,h.props,null,p.mode,L),Gs(r,h),r.return=p,r)}function w(p,r,h,L){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=Ol(h,p.mode,L),r.return=p,r):(r=n(r,h.children||[]),r.return=p,r)}function b(p,r,h,L,D){return r===null||r.tag!==7?(r=xi(h,p.mode,L,D),r.return=p,r):(r=n(r,h),r.return=p,r)}function _(p,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=kl(""+r,p.mode,h),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case ze:return h=zn(r.type,r.key,r.props,null,p.mode,h),Gs(h,r),h.return=p,h;case we:return r=Ol(r,p.mode,h),r.return=p,r;case _e:return r=Mi(r),_(p,r,h)}if(pe(r)||Ke(r))return r=xi(r,p.mode,h,null),r.return=p,r;if(typeof r.then=="function")return _(p,Xn(r),h);if(r.$$typeof===De)return _(p,Gn(p,r),h);Wn(p,r)}return null}function g(p,r,h,L){var D=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return D!==null?null:a(p,r,""+h,L);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ze:return h.key===D?c(p,r,h,L):null;case we:return h.key===D?w(p,r,h,L):null;case _e:return h=Mi(h),g(p,r,h,L)}if(pe(h)||Ke(h))return D!==null?null:b(p,r,h,L,null);if(typeof h.then=="function")return g(p,r,Xn(h),L);if(h.$$typeof===De)return g(p,r,Gn(p,h),L);Wn(p,h)}return null}function f(p,r,h,L,D){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return p=p.get(h)||null,a(r,p,""+L,D);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ze:return p=p.get(L.key===null?h:L.key)||null,c(r,p,L,D);case we:return p=p.get(L.key===null?h:L.key)||null,w(r,p,L,D);case _e:return L=Mi(L),f(p,r,h,L,D)}if(pe(L)||Ke(L))return p=p.get(h)||null,b(r,p,L,D,null);if(typeof L.then=="function")return f(p,r,h,Xn(L),D);if(L.$$typeof===De)return f(p,r,h,Gn(r,L),D);Wn(r,L)}return null}function U(p,r,h,L){for(var D=null,$=null,C=r,z=r=0,X=null;C!==null&&z<h.length;z++){C.index>z?(X=C,C=null):X=C.sibling;var ee=g(p,C,h[z],L);if(ee===null){C===null&&(C=X);break}e&&C&&ee.alternate===null&&t(p,C),r=o(ee,r,z),$===null?D=ee:$.sibling=ee,$=ee,C=X}if(z===h.length)return i(p,C),W&&jt(p,z),D;if(C===null){for(;z<h.length;z++)C=_(p,h[z],L),C!==null&&(r=o(C,r,z),$===null?D=C:$.sibling=C,$=C);return W&&jt(p,z),D}for(C=s(C);z<h.length;z++)X=f(C,p,z,h[z],L),X!==null&&(e&&X.alternate!==null&&C.delete(X.key===null?z:X.key),r=o(X,r,z),$===null?D=X:$.sibling=X,$=X);return e&&C.forEach(function(Ti){return t(p,Ti)}),W&&jt(p,z),D}function J(p,r,h,L){if(h==null)throw Error(m(151));for(var D=null,$=null,C=r,z=r=0,X=null,ee=h.next();C!==null&&!ee.done;z++,ee=h.next()){C.index>z?(X=C,C=null):X=C.sibling;var Ti=g(p,C,ee.value,L);if(Ti===null){C===null&&(C=X);break}e&&C&&Ti.alternate===null&&t(p,C),r=o(Ti,r,z),$===null?D=Ti:$.sibling=Ti,$=Ti,C=X}if(ee.done)return i(p,C),W&&jt(p,z),D;if(C===null){for(;!ee.done;z++,ee=h.next())ee=_(p,ee.value,L),ee!==null&&(r=o(ee,r,z),$===null?D=ee:$.sibling=ee,$=ee);return W&&jt(p,z),D}for(C=s(C);!ee.done;z++,ee=h.next())ee=f(C,p,z,ee.value,L),ee!==null&&(e&&ee.alternate!==null&&C.delete(ee.key===null?z:ee.key),r=o(ee,r,z),$===null?D=ee:$.sibling=ee,$=ee);return e&&C.forEach(function(nm){return t(p,nm)}),W&&jt(p,z),D}function de(p,r,h,L){if(typeof h=="object"&&h!==null&&h.type===be&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ze:e:{for(var D=h.key;r!==null;){if(r.key===D){if(D=h.type,D===be){if(r.tag===7){i(p,r.sibling),L=n(r,h.props.children),L.return=p,p=L;break e}}else if(r.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===_e&&Mi(D)===r.type){i(p,r.sibling),L=n(r,h.props),Gs(L,h),L.return=p,p=L;break e}i(p,r);break}else t(p,r);r=r.sibling}h.type===be?(L=xi(h.props.children,p.mode,L,h.key),L.return=p,p=L):(L=zn(h.type,h.key,h.props,null,p.mode,L),Gs(L,h),L.return=p,p=L)}return l(p);case we:e:{for(D=h.key;r!==null;){if(r.key===D)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){i(p,r.sibling),L=n(r,h.children||[]),L.return=p,p=L;break e}else{i(p,r);break}else t(p,r);r=r.sibling}L=Ol(h,p.mode,L),L.return=p,p=L}return l(p);case _e:return h=Mi(h),de(p,r,h,L)}if(pe(h))return U(p,r,h,L);if(Ke(h)){if(D=Ke(h),typeof D!="function")throw Error(m(150));return h=D.call(h),J(p,r,h,L)}if(typeof h.then=="function")return de(p,r,Xn(h),L);if(h.$$typeof===De)return de(p,r,Gn(p,h),L);Wn(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(i(p,r.sibling),L=n(r,h),L.return=p,p=L):(i(p,r),L=kl(h,p.mode,L),L.return=p,p=L),l(p)):i(p,r)}return function(p,r,h,L){try{Fs=0;var D=de(p,r,h,L);return ds=null,D}catch(C){if(C===rs||C===Qn)throw C;var $=ct(29,C,null,p.mode);return $.lanes=L,$.return=p,$}finally{}}}var ji=Cr(!0),Dr=Cr(!1),li=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Il(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ai(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ci(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ie&2)!==0){var n=s.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),s.pending=t,t=En(e),gr(e,null,i),t}return Kn(e,s,t,i),En(e)}function Vs(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,yc(e,i)}}function Al(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var n=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var l={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};o===null?n=o=l:o=o.next=l,i=i.next}while(i!==null);o===null?n=o=t:o=o.next=t}else n=o=t;i={baseState:s.baseState,firstBaseUpdate:n,lastBaseUpdate:o,shared:s.shared,callbacks:s.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var Kl=!1;function Qs(){if(Kl){var e=cs;if(e!==null)throw e}}function Ys(e,t,i,s){Kl=!1;var n=e.updateQueue;li=!1;var o=n.firstBaseUpdate,l=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var c=a,w=c.next;c.next=null,l===null?o=w:l.next=w,l=c;var b=e.alternate;b!==null&&(b=b.updateQueue,a=b.lastBaseUpdate,a!==l&&(a===null?b.firstBaseUpdate=w:a.next=w,b.lastBaseUpdate=c))}if(o!==null){var _=n.baseState;l=0,b=w=c=null,a=o;do{var g=a.lane&-536870913,f=g!==a.lane;if(f?(Y&g)===g:(s&g)===g){g!==0&&g===as&&(Kl=!0),b!==null&&(b=b.next={lane:0,tag:a.tag,payload:a.payload,callback:null,next:null});e:{var U=e,J=a;g=t;var de=i;switch(J.tag){case 1:if(U=J.payload,typeof U=="function"){_=U.call(de,_,g);break e}_=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=J.payload,g=typeof U=="function"?U.call(de,_,g):U,g==null)break e;_=M({},_,g);break e;case 2:li=!0}}g=a.callback,g!==null&&(e.flags|=64,f&&(e.flags|=8192),f=n.callbacks,f===null?n.callbacks=[g]:f.push(g))}else f={lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},b===null?(w=b=f,c=_):b=b.next=f,l|=g;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;f=a,a=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);b===null&&(c=_),n.baseState=c,n.firstBaseUpdate=w,n.lastBaseUpdate=b,o===null&&(n.shared.lanes=0),hi|=l,e.lanes=l,e.memoizedState=_}}function Rr(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function Jr(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Rr(i[e],t)}var ps=d(null),$n=d(0);function Mr(e,t){e=Qt,O($n,e),O(ps,t),Qt=e|t.baseLanes}function El(){O($n,Qt),O(ps,ps.current)}function zl(){Qt=$n.current,H(ps),H($n)}var rt=d(null),Tt=null;function ri(e){var t=e.alternate;O(Te,Te.current&1),O(rt,e),Tt===null&&(t===null||ps.current!==null||t.memoizedState!==null)&&(Tt=e)}function Zl(e){O(Te,Te.current),O(rt,e),Tt===null&&(Tt=e)}function Br(e){e.tag===22?(O(Te,Te.current),O(rt,e),Tt===null&&(Tt=e)):di()}function di(){O(Te,Te.current),O(rt,rt.current)}function dt(e){H(rt),Tt===e&&(Tt=null),H(Te)}var Te=d(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Xa(i)||Wa(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var At=0,K=null,ce=null,Oe=null,to=!1,us=!1,qi=!1,io=0,Xs=0,hs=null,Vh=0;function Se(){throw Error(m(321))}function Fl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!at(e[i],t[i]))return!1;return!0}function Gl(e,t,i,s,n,o){return At=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?Ld:ca,qi=!1,o=i(s,n),qi=!1,us&&(o=qr(t,i,s,n)),jr(e),o}function jr(e){S.H=en;var t=ce!==null&&ce.next!==null;if(At=0,Oe=ce=K=null,to=!1,Xs=0,hs=null,t)throw Error(m(300));e===null||Pe||(e=e.dependencies,e!==null&&Fn(e)&&(Pe=!0))}function qr(e,t,i,s){K=e;var n=0;do{if(us&&(hs=null),Xs=0,us=!1,25<=n)throw Error(m(301));if(n+=1,Oe=ce=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}S.H=_d,o=t(i,s)}while(us);return o}function Qh(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Ws(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(K.flags|=1024),t}function Vl(){var e=io!==0;return io=0,e}function Ql(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Yl(e){if(to){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}to=!1}At=0,Oe=ce=K=null,us=!1,Xs=io=0,hs=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?K.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function ye(){if(ce===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Oe===null?K.memoizedState:Oe.next;if(t!==null)Oe=t,ce=e;else{if(e===null)throw K.alternate===null?Error(m(467)):Error(m(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Oe===null?K.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(e){var t=Xs;return Xs+=1,hs===null&&(hs=[]),e=Ur(hs,e,t),t=K,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?Ld:ca),e}function no(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ws(e);if(e.$$typeof===De)return je(e)}throw Error(m(438,String(e)))}function Xl(e){var t=null,i=K.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var s=K.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=so(),K.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),s=0;s<e;s++)i[s]=Wt;return t.index++,i}function Kt(e,t){return typeof t=="function"?t(e):t}function oo(e){var t=ye();return Wl(t,ce,e)}function Wl(e,t,i){var s=e.queue;if(s===null)throw Error(m(311));s.lastRenderedReducer=i;var n=e.baseQueue,o=s.pending;if(o!==null){if(n!==null){var l=n.next;n.next=o.next,o.next=l}t.baseQueue=n=o,s.pending=null}if(o=e.baseState,n===null)e.memoizedState=o;else{t=n.next;var a=l=null,c=null,w=t,b=!1;do{var _=w.lane&-536870913;if(_!==w.lane?(Y&_)===_:(At&_)===_){var g=w.revertLane;if(g===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),_===as&&(b=!0);else if((At&g)===g){w=w.next,g===as&&(b=!0);continue}else _={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},c===null?(a=c=_,l=o):c=c.next=_,K.lanes|=g,hi|=g;_=w.action,qi&&i(o,_),o=w.hasEagerState?w.eagerState:i(o,_)}else g={lane:_,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},c===null?(a=c=g,l=o):c=c.next=g,K.lanes|=_,hi|=_;w=w.next}while(w!==null&&w!==t);if(c===null?l=o:c.next=a,!at(o,e.memoizedState)&&(Pe=!0,b&&(i=cs,i!==null)))throw i;e.memoizedState=o,e.baseState=l,e.baseQueue=c,s.lastRenderedState=o}return n===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function $l(e){var t=ye(),i=t.queue;if(i===null)throw Error(m(311));i.lastRenderedReducer=e;var s=i.dispatch,n=i.pending,o=t.memoizedState;if(n!==null){i.pending=null;var l=n=n.next;do o=e(o,l.action),l=l.next;while(l!==n);at(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),i.lastRenderedState=o}return[o,s]}function Ir(e,t,i){var s=K,n=ye(),o=W;if(o){if(i===void 0)throw Error(m(407));i=i()}else i=t();var l=!at((ce||n).memoizedState,i);if(l&&(n.memoizedState=i,Pe=!0),n=n.queue,ia(Er.bind(null,s,n,e),[e]),n.getSnapshot!==t||l||Oe!==null&&Oe.memoizedState.tag&1){if(s.flags|=2048,ws(9,{destroy:void 0},Kr.bind(null,s,n,i,t),null),he===null)throw Error(m(349));o||(At&127)!==0||Ar(s,t,i)}return i}function Ar(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=K.updateQueue,t===null?(t=so(),K.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Kr(e,t,i,s){t.value=i,t.getSnapshot=s,zr(t)&&Zr(e)}function Er(e,t,i){return i(function(){zr(t)&&Zr(e)})}function zr(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!at(e,i)}catch{return!0}}function Zr(e){var t=Ni(e,2);t!==null&&et(t,e,2)}function ea(e){var t=Fe();if(typeof e=="function"){var i=e;if(e=i(),qi){$t(!0);try{i()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Fr(e,t,i,s){return e.baseState=i,Wl(e,ce,typeof s=="function"?s:Kt)}function Yh(e,t,i,s,n){if(co(e))throw Error(m(485));if(e=t.action,e!==null){var o={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){o.listeners.push(l)}};S.T!==null?i(!0):o.isTransition=!1,s(o),i=t.pending,i===null?(o.next=t.pending=o,Gr(t,o)):(o.next=i.next,t.pending=i.next=o)}}function Gr(e,t){var i=t.action,s=t.payload,n=e.state;if(t.isTransition){var o=S.T,l={};S.T=l;try{var a=i(n,s),c=S.S;c!==null&&c(l,a),Vr(e,t,a)}catch(w){ta(e,t,w)}finally{o!==null&&l.types!==null&&(o.types=l.types),S.T=o}}else try{o=i(n,s),Vr(e,t,o)}catch(w){ta(e,t,w)}}function Vr(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){Qr(e,t,s)},function(s){return ta(e,t,s)}):Qr(e,t,i)}function Qr(e,t,i){t.status="fulfilled",t.value=i,Yr(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Gr(e,i)))}function ta(e,t,i){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=i,Yr(t),t=t.next;while(t!==s)}e.action=null}function Yr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xr(e,t){return t}function Wr(e,t){if(W){var i=he.formState;if(i!==null){e:{var s=K;if(W){if(me){t:{for(var n=me,o=Ht;n.nodeType!==8;){if(!o){n=null;break t}if(n=yt(n.nextSibling),n===null){n=null;break t}}o=n.data,n=o==="F!"||o==="F"?n:null}if(n){me=yt(n.nextSibling),s=n.data==="F!";break e}}ni(s)}s=!1}s&&(t=i[0])}}return i=Fe(),i.memoizedState=i.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},i.queue=s,i=fd.bind(null,K,s),s.dispatch=i,s=ea(!1),o=aa.bind(null,K,!1,s.queue),s=Fe(),n={state:t,dispatch:null,action:e,pending:null},s.queue=n,i=Yh.bind(null,K,n,o,i),n.dispatch=i,s.memoizedState=e,[t,i,!1]}function $r(e){var t=ye();return ed(t,ce,e)}function ed(e,t,i){if(t=Wl(e,t,Xr)[0],e=oo(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Ws(t)}catch(l){throw l===rs?Qn:l}else s=t;t=ye();var n=t.queue,o=n.dispatch;return i!==t.memoizedState&&(K.flags|=2048,ws(9,{destroy:void 0},Xh.bind(null,n,i),null)),[s,o,e]}function Xh(e,t){e.action=t}function td(e){var t=ye(),i=ce;if(i!==null)return ed(t,i,e);ye(),t=t.memoizedState,i=ye();var s=i.queue.dispatch;return i.memoizedState=e,[t,s,!1]}function ws(e,t,i,s){return e={tag:e,create:i,deps:s,inst:t,next:null},t=K.updateQueue,t===null&&(t=so(),K.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e),e}function id(){return ye().memoizedState}function lo(e,t,i,s){var n=Fe();K.flags|=e,n.memoizedState=ws(1|t,{destroy:void 0},i,s===void 0?null:s)}function ao(e,t,i,s){var n=ye();s=s===void 0?null:s;var o=n.memoizedState.inst;ce!==null&&s!==null&&Fl(s,ce.memoizedState.deps)?n.memoizedState=ws(t,o,i,s):(K.flags|=e,n.memoizedState=ws(1|t,o,i,s))}function sd(e,t){lo(8390656,8,e,t)}function ia(e,t){ao(2048,8,e,t)}function Wh(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=so(),K.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function nd(e){var t=ye().memoizedState;return Wh({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function od(e,t){return ao(4,2,e,t)}function ld(e,t){return ao(4,4,e,t)}function ad(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,i){i=i!=null?i.concat([e]):null,ao(4,4,ad.bind(null,t,e),i)}function sa(){}function rd(e,t){var i=ye();t=t===void 0?null:t;var s=i.memoizedState;return t!==null&&Fl(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function dd(e,t){var i=ye();t=t===void 0?null:t;var s=i.memoizedState;if(t!==null&&Fl(t,s[1]))return s[0];if(s=e(),qi){$t(!0);try{e()}finally{$t(!1)}}return i.memoizedState=[s,t],s}function na(e,t,i){return i===void 0||(At&1073741824)!==0&&(Y&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=pp(),K.lanes|=e,hi|=e,i)}function pd(e,t,i,s){return at(i,t)?i:ps.current!==null?(e=na(e,i,s),at(e,t)||(Pe=!0),e):(At&42)===0||(At&1073741824)!==0&&(Y&261930)===0?(Pe=!0,e.memoizedState=i):(e=pp(),K.lanes|=e,hi|=e,t)}function ud(e,t,i,s,n){var o=k.p;k.p=o!==0&&8>o?o:8;var l=S.T,a={};S.T=a,aa(e,!1,t,i);try{var c=n(),w=S.S;if(w!==null&&w(a,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=Gh(c,s);$s(e,t,b,ht(e))}else $s(e,t,s,ht(e))}catch(_){$s(e,t,{then:function(){},status:"rejected",reason:_},ht())}finally{k.p=o,l!==null&&a.types!==null&&(l.types=a.types),S.T=l}}function $h(){}function oa(e,t,i,s){if(e.tag!==5)throw Error(m(476));var n=hd(e).queue;ud(e,n,t,R,i===null?$h:function(){return wd(e),i(s)})}function hd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:R},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wd(e){var t=hd(e);t.next===null&&(t=e.alternate.memoizedState),$s(e,t.next.queue,{},ht())}function la(){return je(fn)}function md(){return ye().memoizedState}function gd(){return ye().memoizedState}function ew(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=ht();e=ai(i);var s=ci(t,e,i);s!==null&&(et(s,t,i),Vs(s,t,i)),t={cache:Jl()},e.payload=t;return}t=t.return}}function tw(e,t,i){var s=ht();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},co(e)?bd(t,i):(i=yl(e,t,i,s),i!==null&&(et(i,e,s),Sd(i,t,s)))}function fd(e,t,i){var s=ht();$s(e,t,i,s)}function $s(e,t,i,s){var n={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(co(e))bd(t,n);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,i);if(n.hasEagerState=!0,n.eagerState=a,at(a,l))return Kn(e,t,n,0),he===null&&An(),!1}catch{}finally{}if(i=yl(e,t,n,s),i!==null)return et(i,e,s),Sd(i,t,s),!0}return!1}function aa(e,t,i,s){if(s={lane:2,revertLane:qa(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},co(e)){if(t)throw Error(m(479))}else t=yl(e,i,s,2),t!==null&&et(t,e,2)}function co(e){var t=e.alternate;return e===K||t!==null&&t===K}function bd(e,t){us=to=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Sd(e,t,i){if((i&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,yc(e,i)}}var en={readContext:je,use:no,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};en.useEffectEvent=Se;var Ld={readContext:je,use:no,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:sd,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,lo(4194308,4,ad.bind(null,t,e),i)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){lo(4,2,e,t)},useMemo:function(e,t){var i=Fe();t=t===void 0?null:t;var s=e();if(qi){$t(!0);try{e()}finally{$t(!1)}}return i.memoizedState=[s,t],s},useReducer:function(e,t,i){var s=Fe();if(i!==void 0){var n=i(t);if(qi){$t(!0);try{i(t)}finally{$t(!1)}}}else n=t;return s.memoizedState=s.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=tw.bind(null,K,e),[s.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=ea(e);var t=e.queue,i=fd.bind(null,K,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:sa,useDeferredValue:function(e,t){var i=Fe();return na(i,e,t)},useTransition:function(){var e=ea(!1);return e=ud.bind(null,K,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var s=K,n=Fe();if(W){if(i===void 0)throw Error(m(407));i=i()}else{if(i=t(),he===null)throw Error(m(349));(Y&127)!==0||Ar(s,t,i)}n.memoizedState=i;var o={value:i,getSnapshot:t};return n.queue=o,sd(Er.bind(null,s,o,e),[e]),s.flags|=2048,ws(9,{destroy:void 0},Kr.bind(null,s,o,i,t),null),i},useId:function(){var e=Fe(),t=he.identifierPrefix;if(W){var i=xt,s=Nt;i=(s&~(1<<32-lt(s)-1)).toString(32)+i,t="_"+t+"R_"+i,i=io++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Vh++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:la,useFormState:Wr,useActionState:Wr,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=aa.bind(null,K,!0,i),i.dispatch=t,[e,t]},useMemoCache:Xl,useCacheRefresh:function(){return Fe().memoizedState=ew.bind(null,K)},useEffectEvent:function(e){var t=Fe(),i={impl:e};return t.memoizedState=i,function(){if((ie&2)!==0)throw Error(m(440));return i.impl.apply(void 0,arguments)}}},ca={readContext:je,use:no,useCallback:rd,useContext:je,useEffect:ia,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:ld,useMemo:dd,useReducer:oo,useRef:id,useState:function(){return oo(Kt)},useDebugValue:sa,useDeferredValue:function(e,t){var i=ye();return pd(i,ce.memoizedState,e,t)},useTransition:function(){var e=oo(Kt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Ws(e),t]},useSyncExternalStore:Ir,useId:md,useHostTransitionStatus:la,useFormState:$r,useActionState:$r,useOptimistic:function(e,t){var i=ye();return Fr(i,ce,e,t)},useMemoCache:Xl,useCacheRefresh:gd};ca.useEffectEvent=nd;var _d={readContext:je,use:no,useCallback:rd,useContext:je,useEffect:ia,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:ld,useMemo:dd,useReducer:$l,useRef:id,useState:function(){return $l(Kt)},useDebugValue:sa,useDeferredValue:function(e,t){var i=ye();return ce===null?na(i,e,t):pd(i,ce.memoizedState,e,t)},useTransition:function(){var e=$l(Kt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Ws(e),t]},useSyncExternalStore:Ir,useId:md,useHostTransitionStatus:la,useFormState:td,useActionState:td,useOptimistic:function(e,t){var i=ye();return ce!==null?Fr(i,ce,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Xl,useCacheRefresh:gd};_d.useEffectEvent=nd;function ra(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:M({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var da={enqueueSetState:function(e,t,i){e=e._reactInternals;var s=ht(),n=ai(s);n.payload=t,i!=null&&(n.callback=i),t=ci(e,n,s),t!==null&&(et(t,e,s),Vs(t,e,s))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=ht(),n=ai(s);n.tag=1,n.payload=t,i!=null&&(n.callback=i),t=ci(e,n,s),t!==null&&(et(t,e,s),Vs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=ht(),s=ai(i);s.tag=2,t!=null&&(s.callback=t),t=ci(e,s,i),t!==null&&(et(t,e,i),Vs(t,e,i))}};function Hd(e,t,i,s,n,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,l):t.prototype&&t.prototype.isPureReactComponent?!Is(i,s)||!Is(n,o):!0}function Td(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&da.enqueueReplaceState(t,t.state,null)}function Ii(e,t){var i=t;if("ref"in t){i={};for(var s in t)s!=="ref"&&(i[s]=t[s])}if(e=e.defaultProps){i===t&&(i=M({},i));for(var n in e)i[n]===void 0&&(i[n]=e[n])}return i}function yd(e){In(e)}function vd(e){console.error(e)}function kd(e){In(e)}function ro(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Od(e,t,i){try{var s=e.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function pa(e,t,i){return i=ai(i),i.tag=3,i.payload={element:null},i.callback=function(){ro(e,t)},i}function Pd(e){return e=ai(e),e.tag=3,e}function Ud(e,t,i,s){var n=i.type.getDerivedStateFromError;if(typeof n=="function"){var o=s.value;e.payload=function(){return n(o)},e.callback=function(){Od(t,i,s)}}var l=i.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Od(t,i,s),typeof n!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var a=s.stack;this.componentDidCatch(s.value,{componentStack:a!==null?a:""})})}function iw(e,t,i,s,n){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=i.alternate,t!==null&&ls(t,i,n,!0),i=rt.current,i!==null){switch(i.tag){case 31:case 13:return Tt===null?Ho():i.alternate===null&&Le===0&&(Le=3),i.flags&=-257,i.flags|=65536,i.lanes=n,s===Yn?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([s]):t.add(s),Ma(e,s,n)),!1;case 22:return i.flags|=65536,s===Yn?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([s]):i.add(s)),Ma(e,s,n)),!1}throw Error(m(435,i.tag))}return Ma(e,s,n),Ho(),!1}if(W)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,s!==Nl&&(e=Error(m(422),{cause:s}),Es(St(e,i)))):(s!==Nl&&(t=Error(m(423),{cause:s}),Es(St(t,i))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,s=St(s,i),n=pa(e.stateNode,s,n),Al(e,n),Le!==4&&(Le=2)),!1;var o=Error(m(520),{cause:s});if(o=St(o,i),rn===null?rn=[o]:rn.push(o),Le!==4&&(Le=2),t===null)return!0;s=St(s,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=n&-n,i.lanes|=e,e=pa(i.stateNode,s,e),Al(i,e),!1;case 1:if(t=i.type,o=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(wi===null||!wi.has(o))))return i.flags|=65536,n&=-n,i.lanes|=n,n=Pd(n),Ud(n,e,i,s),Al(i,n),!1}i=i.return}while(i!==null);return!1}var ua=Error(m(461)),Pe=!1;function qe(e,t,i,s){t.child=e===null?Dr(t,null,i,s):ji(t,e.child,i,s)}function Nd(e,t,i,s,n){i=i.render;var o=t.ref;if("ref"in s){var l={};for(var a in s)a!=="ref"&&(l[a]=s[a])}else l=s;return Ri(t),s=Gl(e,t,i,l,o,n),a=Vl(),e!==null&&!Pe?(Ql(e,t,n),Et(e,t,n)):(W&&a&&Pl(t),t.flags|=1,qe(e,t,s,n),t.child)}function xd(e,t,i,s,n){if(e===null){var o=i.type;return typeof o=="function"&&!vl(o)&&o.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=o,Cd(e,t,o,s,n)):(e=zn(i.type,null,s,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!La(e,n)){var l=o.memoizedProps;if(i=i.compare,i=i!==null?i:Is,i(l,s)&&e.ref===t.ref)return Et(e,t,n)}return t.flags|=1,e=Bt(o,s),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,i,s,n){if(e!==null){var o=e.memoizedProps;if(Is(o,s)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=s=o,La(e,n))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Et(e,t,n)}return ha(e,t,i,s,n)}function Dd(e,t,i,s){var n=s.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|i:i,e!==null){for(s=t.child=e.child,n=0;s!==null;)n=n|s.lanes|s.childLanes,s=s.sibling;s=n&~o}else s=0,t.child=null;return Rd(e,t,o,i,s)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,o!==null?o.cachePool:null),o!==null?Mr(t,o):El(),Br(t);else return s=t.lanes=536870912,Rd(e,t,o!==null?o.baseLanes|i:i,i,s)}else o!==null?(Vn(t,o.cachePool),Mr(t,o),di(),t.memoizedState=null):(e!==null&&Vn(t,null),El(),di());return qe(e,t,n,i),t.child}function tn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,i,s,n){var o=Bl();return o=o===null?null:{parent:ke._currentValue,pool:o},t.memoizedState={baseLanes:i,cachePool:o},e!==null&&Vn(t,null),El(),Br(t),e!==null&&ls(e,t,s,!0),t.childLanes=n,null}function po(e,t){return t=ho({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jd(e,t,i){return ji(t,e.child,null,i),e=po(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function sw(e,t,i){var s=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(W){if(s.mode==="hidden")return e=po(t,s),t.lanes=536870912,tn(null,e);if(Zl(t),(e=me)?(e=Gp(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ii!==null?{id:Nt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},i=br(e),i.return=t,t.child=i,Be=t,me=null)):e=null,e===null)throw ni(t);return t.lanes=536870912,null}return po(t,s)}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(Zl(t),n)if(t.flags&256)t.flags&=-257,t=Jd(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Pe||ls(e,t,i,!1),n=(i&e.childLanes)!==0,Pe||n){if(s=he,s!==null&&(l=vc(s,i),l!==0&&l!==o.retryLane))throw o.retryLane=l,Ni(e,l),et(s,e,l),ua;Ho(),t=Jd(e,t,i)}else e=o.treeContext,me=yt(l.nextSibling),Be=t,W=!0,si=null,Ht=!1,e!==null&&_r(t,e),t=po(t,s),t.flags|=4096;return t}return e=Bt(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uo(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(m(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function ha(e,t,i,s,n){return Ri(t),i=Gl(e,t,i,s,void 0,n),s=Vl(),e!==null&&!Pe?(Ql(e,t,n),Et(e,t,n)):(W&&s&&Pl(t),t.flags|=1,qe(e,t,i,n),t.child)}function Md(e,t,i,s,n,o){return Ri(t),t.updateQueue=null,i=qr(t,s,i,n),jr(e),s=Vl(),e!==null&&!Pe?(Ql(e,t,o),Et(e,t,o)):(W&&s&&Pl(t),t.flags|=1,qe(e,t,i,o),t.child)}function Bd(e,t,i,s,n){if(Ri(t),t.stateNode===null){var o=is,l=i.contextType;typeof l=="object"&&l!==null&&(o=je(l)),o=new i(s,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=da,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=s,o.state=t.memoizedState,o.refs={},ql(t),l=i.contextType,o.context=typeof l=="object"&&l!==null?je(l):is,o.state=t.memoizedState,l=i.getDerivedStateFromProps,typeof l=="function"&&(ra(t,i,l,s),o.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(l=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),l!==o.state&&da.enqueueReplaceState(o,o.state,null),Ys(t,s,o,n),Qs(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){o=t.stateNode;var a=t.memoizedProps,c=Ii(i,a);o.props=c;var w=o.context,b=i.contextType;l=is,typeof b=="object"&&b!==null&&(l=je(b));var _=i.getDerivedStateFromProps;b=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function",a=t.pendingProps!==a,b||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a||w!==l)&&Td(t,o,s,l),li=!1;var g=t.memoizedState;o.state=g,Ys(t,s,o,n),Qs(),w=t.memoizedState,a||g!==w||li?(typeof _=="function"&&(ra(t,i,_,s),w=t.memoizedState),(c=li||Hd(t,i,c,s,g,w,l))?(b||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=w),o.props=s,o.state=w,o.context=l,s=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,Il(e,t),l=t.memoizedProps,b=Ii(i,l),o.props=b,_=t.pendingProps,g=o.context,w=i.contextType,c=is,typeof w=="object"&&w!==null&&(c=je(w)),a=i.getDerivedStateFromProps,(w=typeof a=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==_||g!==c)&&Td(t,o,s,c),li=!1,g=t.memoizedState,o.state=g,Ys(t,s,o,n),Qs();var f=t.memoizedState;l!==_||g!==f||li||e!==null&&e.dependencies!==null&&Fn(e.dependencies)?(typeof a=="function"&&(ra(t,i,a,s),f=t.memoizedState),(b=li||Hd(t,i,b,s,g,f,c)||e!==null&&e.dependencies!==null&&Fn(e.dependencies))?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,f,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,f,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=f),o.props=s,o.state=f,o.context=c,s=b):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),s=!1)}return o=s,uo(e,t),s=(t.flags&128)!==0,o||s?(o=t.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&s?(t.child=ji(t,e.child,null,n),t.child=ji(t,null,i,n)):qe(e,t,i,n),t.memoizedState=o.state,e=t.child):e=Et(e,t,n),e}function jd(e,t,i,s){return Ci(),t.flags|=256,qe(e,t,i,s),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ma(e){return{baseLanes:e,cachePool:Or()}}function ga(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=ut),e}function qd(e,t,i){var s=t.pendingProps,n=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(W){if(n?ri(t):di(),(e=me)?(e=Gp(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ii!==null?{id:Nt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},i=br(e),i.return=t,t.child=i,Be=t,me=null)):e=null,e===null)throw ni(t);return Wa(e)?t.lanes=32:t.lanes=536870912,null}var a=s.children;return s=s.fallback,n?(di(),n=t.mode,a=ho({mode:"hidden",children:a},n),s=xi(s,n,i,null),a.return=t,s.return=t,a.sibling=s,t.child=a,s=t.child,s.memoizedState=ma(i),s.childLanes=ga(e,l,i),t.memoizedState=wa,tn(null,s)):(ri(t),fa(t,a))}var c=e.memoizedState;if(c!==null&&(a=c.dehydrated,a!==null)){if(o)t.flags&256?(ri(t),t.flags&=-257,t=ba(e,t,i)):t.memoizedState!==null?(di(),t.child=e.child,t.flags|=128,t=null):(di(),a=s.fallback,n=t.mode,s=ho({mode:"visible",children:s.children},n),a=xi(a,n,i,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,ji(t,e.child,null,i),s=t.child,s.memoizedState=ma(i),s.childLanes=ga(e,l,i),t.memoizedState=wa,t=tn(null,s));else if(ri(t),Wa(a)){if(l=a.nextSibling&&a.nextSibling.dataset,l)var w=l.dgst;l=w,s=Error(m(419)),s.stack="",s.digest=l,Es({value:s,source:null,stack:null}),t=ba(e,t,i)}else if(Pe||ls(e,t,i,!1),l=(i&e.childLanes)!==0,Pe||l){if(l=he,l!==null&&(s=vc(l,i),s!==0&&s!==c.retryLane))throw c.retryLane=s,Ni(e,s),et(l,e,s),ua;Xa(a)||Ho(),t=ba(e,t,i)}else Xa(a)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,me=yt(a.nextSibling),Be=t,W=!0,si=null,Ht=!1,e!==null&&_r(t,e),t=fa(t,s.children),t.flags|=4096);return t}return n?(di(),a=s.fallback,n=t.mode,c=e.child,w=c.sibling,s=Bt(c,{mode:"hidden",children:s.children}),s.subtreeFlags=c.subtreeFlags&65011712,w!==null?a=Bt(w,a):(a=xi(a,n,i,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,tn(null,s),s=t.child,a=e.child.memoizedState,a===null?a=ma(i):(n=a.cachePool,n!==null?(c=ke._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Or(),a={baseLanes:a.baseLanes|i,cachePool:n}),s.memoizedState=a,s.childLanes=ga(e,l,i),t.memoizedState=wa,tn(e.child,s)):(ri(t),i=e.child,e=i.sibling,i=Bt(i,{mode:"visible",children:s.children}),i.return=t,i.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=i,t.memoizedState=null,i)}function fa(e,t){return t=ho({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ho(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function ba(e,t,i){return ji(t,e.child,null,i),e=fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Id(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Dl(e.return,t,i)}function Sa(e,t,i,s,n,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:n,treeForkCount:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=i,l.tailMode=n,l.treeForkCount=o)}function Ad(e,t,i){var s=t.pendingProps,n=s.revealOrder,o=s.tail;s=s.children;var l=Te.current,a=(l&2)!==0;if(a?(l=l&1|2,t.flags|=128):l&=1,O(Te,l),qe(e,t,s,i),s=W?Ks:0,!a&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,i,t);else if(e.tag===19)Id(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(i=t.child,n=null;i!==null;)e=i.alternate,e!==null&&eo(e)===null&&(n=i),i=i.sibling;i=n,i===null?(n=t.child,t.child=null):(n=i.sibling,i.sibling=null),Sa(t,!1,n,i,o,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&eo(e)===null){t.child=n;break}e=n.sibling,n.sibling=i,i=n,n=e}Sa(t,!0,i,null,o,s);break;case"together":Sa(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Et(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),hi|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(ls(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,i=Bt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Bt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function La(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fn(e)))}function nw(e,t,i){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),oi(t,ke,e.memoizedState.cache),Ci();break;case 27:case 5:Os(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:oi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zl(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(ri(t),t.flags|=128,null):(i&t.child.childLanes)!==0?qd(e,t,i):(ri(t),e=Et(e,t,i),e!==null?e.sibling:null);ri(t);break;case 19:var n=(e.flags&128)!==0;if(s=(i&t.childLanes)!==0,s||(ls(e,t,i,!1),s=(i&t.childLanes)!==0),n){if(s)return Ad(e,t,i);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(Te,Te.current),s)break;return null;case 22:return t.lanes=0,Dd(e,t,i,t.pendingProps);case 24:oi(t,ke,e.memoizedState.cache)}return Et(e,t,i)}function Kd(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!La(e,i)&&(t.flags&128)===0)return Pe=!1,nw(e,t,i);Pe=(e.flags&131072)!==0}else Pe=!1,W&&(t.flags&1048576)!==0&&Lr(t,Ks,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Mi(t.elementType),t.type=e,typeof e=="function")vl(e)?(s=Ii(e,s),t.tag=1,t=Bd(null,t,e,s,i)):(t.tag=0,t=ha(null,t,e,s,i));else{if(e!=null){var n=e.$$typeof;if(n===Ge){t.tag=11,t=Nd(null,t,e,s,i);break e}else if(n===Z){t.tag=14,t=xd(null,t,e,s,i);break e}}throw t=B(e)||e,Error(m(306,t,""))}}return t;case 0:return ha(e,t,t.type,t.pendingProps,i);case 1:return s=t.type,n=Ii(s,t.pendingProps),Bd(e,t,s,n,i);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(m(387));s=t.pendingProps;var o=t.memoizedState;n=o.element,Il(e,t),Ys(t,s,null,i);var l=t.memoizedState;if(s=l.cache,oi(t,ke,s),s!==o.cache&&Rl(t,[ke],i,!0),Qs(),s=l.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=jd(e,t,s,i);break e}else if(s!==n){n=St(Error(m(424)),t),Es(n),t=jd(e,t,s,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(me=yt(e.firstChild),Be=t,W=!0,si=null,Ht=!0,i=Dr(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ci(),s===n){t=Et(e,t,i);break e}qe(e,t,s,i)}t=t.child}return t;case 26:return uo(e,t),e===null?(i=$p(t.type,null,t.pendingProps,null))?t.memoizedState=i:W||(i=t.type,e=t.pendingProps,s=Uo(G.current).createElement(i),s[Me]=t,s[Ve]=e,Ie(s,i,e),Re(s),t.stateNode=s):t.memoizedState=$p(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Os(t),e===null&&W&&(s=t.stateNode=Yp(t.type,t.pendingProps,G.current),Be=t,Ht=!0,n=me,bi(t.type)?($a=n,me=yt(s.firstChild)):me=n),qe(e,t,t.pendingProps.children,i),uo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((n=s=me)&&(s=Rw(s,t.type,t.pendingProps,Ht),s!==null?(t.stateNode=s,Be=t,me=yt(s.firstChild),Ht=!1,n=!0):n=!1),n||ni(t)),Os(t),n=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,Va(n,o)?s=null:l!==null&&Va(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=Gl(e,t,Qh,null,null,i),fn._currentValue=n),uo(e,t),qe(e,t,s,i),t.child;case 6:return e===null&&W&&((e=i=me)&&(i=Jw(i,t.pendingProps,Ht),i!==null?(t.stateNode=i,Be=t,me=null,e=!0):e=!1),e||ni(t)),null;case 13:return qd(e,t,i);case 4:return Ze(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ji(t,null,s,i):qe(e,t,s,i),t.child;case 11:return Nd(e,t,t.type,t.pendingProps,i);case 7:return qe(e,t,t.pendingProps,i),t.child;case 8:return qe(e,t,t.pendingProps.children,i),t.child;case 12:return qe(e,t,t.pendingProps.children,i),t.child;case 10:return s=t.pendingProps,oi(t,t.type,s.value),qe(e,t,s.children,i),t.child;case 9:return n=t.type._context,s=t.pendingProps.children,Ri(t),n=je(n),s=s(n),t.flags|=1,qe(e,t,s,i),t.child;case 14:return xd(e,t,t.type,t.pendingProps,i);case 15:return Cd(e,t,t.type,t.pendingProps,i);case 19:return Ad(e,t,i);case 31:return sw(e,t,i);case 22:return Dd(e,t,i,t.pendingProps);case 24:return Ri(t),s=je(ke),e===null?(n=Bl(),n===null&&(n=he,o=Jl(),n.pooledCache=o,o.refCount++,o!==null&&(n.pooledCacheLanes|=i),n=o),t.memoizedState={parent:s,cache:n},ql(t),oi(t,ke,n)):((e.lanes&i)!==0&&(Il(e,t),Ys(t,null,null,i),Qs()),n=e.memoizedState,o=t.memoizedState,n.parent!==s?(n={parent:s,cache:s},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),oi(t,ke,s)):(s=o.cache,oi(t,ke,s),s!==n.cache&&Rl(t,[ke],i,!0))),qe(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function zt(e){e.flags|=4}function _a(e,t,i,s,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(mp())e.flags|=8192;else throw Bi=Yn,jl}else e.flags&=-16777217}function Ed(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nu(t))if(mp())e.flags|=8192;else throw Bi=Yn,jl}function wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hc():536870912,e.lanes|=t,bs|=t)}function sn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var n=e.child;n!==null;)i|=n.lanes|n.childLanes,s|=n.subtreeFlags&65011712,s|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)i|=n.lanes|n.childLanes,s|=n.subtreeFlags,s|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function ow(e,t,i){var s=t.pendingProps;switch(Ul(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return i=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),It(ke),He(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(os(t)?zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xl())),ge(t),null;case 26:var n=t.type,o=t.memoizedState;return e===null?(zt(t),o!==null?(ge(t),Ed(t,o)):(ge(t),_a(t,n,null,s,i))):o?o!==e.memoizedState?(zt(t),ge(t),Ed(t,o)):(ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&zt(t),ge(t),_a(t,n,e,s,i)),null;case 27:if(yn(t),i=G.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&zt(t);else{if(!s){if(t.stateNode===null)throw Error(m(166));return ge(t),null}e=N.current,os(t)?Hr(t):(e=Yp(n,s,i),t.stateNode=e,zt(t))}return ge(t),null;case 5:if(yn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&zt(t);else{if(!s){if(t.stateNode===null)throw Error(m(166));return ge(t),null}if(o=N.current,os(t))Hr(t);else{var l=Uo(G.current);switch(o){case 1:o=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:o=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":o=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":o=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":o=l.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof s.is=="string"?l.createElement("select",{is:s.is}):l.createElement("select"),s.multiple?o.multiple=!0:s.size&&(o.size=s.size);break;default:o=typeof s.is=="string"?l.createElement(n,{is:s.is}):l.createElement(n)}}o[Me]=t,o[Ve]=s;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=o;e:switch(Ie(o,n,s),n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&zt(t)}}return ge(t),_a(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&zt(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(m(166));if(e=G.current,os(t)){if(e=t.stateNode,i=t.memoizedProps,s=null,n=Be,n!==null)switch(n.tag){case 27:case 5:s=n.memoizedProps}e[Me]=t,e=!!(e.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||qp(e.nodeValue,i)),e||ni(t,!0)}else e=Uo(e).createTextNode(s),e[Me]=t,t.stateNode=e}return ge(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(s=os(t),i!==null){if(e===null){if(!s)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Me]=t}else Ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),e=!1}else i=xl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return ge(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=os(t),s!==null&&s.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Me]=t}else Ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),n=!1}else n=xl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=i,t):(i=s!==null,e=e!==null&&e.memoizedState!==null,i&&(s=t.child,n=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(n=s.alternate.memoizedState.cachePool.pool),o=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),o!==n&&(s.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),wo(t,t.updateQueue),ge(t),null);case 4:return He(),e===null&&Ea(t.stateNode.containerInfo),ge(t),null;case 10:return It(t.type),ge(t),null;case 19:if(H(Te),s=t.memoizedState,s===null)return ge(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)sn(s,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=eo(e),o!==null){for(t.flags|=128,sn(s,!1),e=o.updateQueue,t.updateQueue=e,wo(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)fr(i,e),i=i.sibling;return O(Te,Te.current&1|2),W&&jt(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&nt()>So&&(t.flags|=128,n=!0,sn(s,!1),t.lanes=4194304)}else{if(!n)if(e=eo(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wo(t,e),sn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return ge(t),null}else 2*nt()-s.renderingStartTime>So&&i!==536870912&&(t.flags|=128,n=!0,sn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(e=s.last,e!==null?e.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,i=Te.current,O(Te,n?i&1|2:i&1),W&&jt(t,s.treeForkCount),e):(ge(t),null);case 22:case 23:return dt(t),zl(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(i&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),i=t.updateQueue,i!==null&&wo(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==i&&(t.flags|=2048),e!==null&&H(Ji),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),It(ke),ge(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function lw(e,t){switch(Ul(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(ke),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yn(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(m(340));Ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Te),null;case 4:return He(),null;case 10:return It(t.type),null;case 22:case 23:return dt(t),zl(),e!==null&&H(Ji),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(ke),null;case 25:return null;default:return null}}function zd(e,t){switch(Ul(t),t.tag){case 3:It(ke),He();break;case 26:case 27:case 5:yn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:H(Te);break;case 10:It(t.type);break;case 22:case 23:dt(t),zl(),e!==null&&H(Ji);break;case 24:It(ke)}}function nn(e,t){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var n=s.next;i=n;do{if((i.tag&e)===e){s=void 0;var o=i.create,l=i.inst;s=o(),l.destroy=s}i=i.next}while(i!==n)}}catch(a){le(t,t.return,a)}}function pi(e,t,i){try{var s=t.updateQueue,n=s!==null?s.lastEffect:null;if(n!==null){var o=n.next;s=o;do{if((s.tag&e)===e){var l=s.inst,a=l.destroy;if(a!==void 0){l.destroy=void 0,n=t;var c=i,w=a;try{w()}catch(b){le(n,c,b)}}}s=s.next}while(s!==o)}}catch(b){le(t,t.return,b)}}function Zd(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{Jr(t,i)}catch(s){le(e,e.return,s)}}}function Fd(e,t,i){i.props=Ii(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(s){le(e,t,s)}}function on(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof i=="function"?e.refCleanup=i(s):i.current=s}}catch(n){le(e,t,n)}}function Ct(e,t){var i=e.ref,s=e.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(n){le(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(n){le(e,t,n)}else i.current=null}function Gd(e){var t=e.type,i=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(n){le(e,e.return,n)}}function Ha(e,t,i){try{var s=e.stateNode;Pw(s,e.type,i,t),s[Ve]=t}catch(n){le(e,e.return,n)}}function Vd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bi(e.type)||e.tag===4}function Ta(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ya(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Jt));else if(s!==4&&(s===27&&bi(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(ya(e,t,i),e=e.sibling;e!==null;)ya(e,t,i),e=e.sibling}function mo(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(s===27&&bi(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(mo(e,t,i),e=e.sibling;e!==null;)mo(e,t,i),e=e.sibling}function Qd(e){var t=e.stateNode,i=e.memoizedProps;try{for(var s=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ie(t,s,i),t[Me]=e,t[Ve]=i}catch(o){le(e,e.return,o)}}var Zt=!1,Ue=!1,va=!1,Yd=typeof WeakSet=="function"?WeakSet:Set,Je=null;function aw(e,t){if(e=e.containerInfo,Fa=Mo,e=cr(e),bl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var n=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var l=0,a=-1,c=-1,w=0,b=0,_=e,g=null;t:for(;;){for(var f;_!==i||n!==0&&_.nodeType!==3||(a=l+n),_!==o||s!==0&&_.nodeType!==3||(c=l+s),_.nodeType===3&&(l+=_.nodeValue.length),(f=_.firstChild)!==null;)g=_,_=f;for(;;){if(_===e)break t;if(g===i&&++w===n&&(a=l),g===o&&++b===s&&(c=l),(f=_.nextSibling)!==null)break;_=g,g=_.parentNode}_=f}i=a===-1||c===-1?null:{start:a,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ga={focusedElem:e,selectionRange:i},Mo=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)n=e[i],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,i=t,n=o.memoizedProps,o=o.memoizedState,s=i.stateNode;try{var U=Ii(i.type,n);e=s.getSnapshotBeforeUpdate(U,o),s.__reactInternalSnapshotBeforeUpdate=e}catch(J){le(i,i.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)Ya(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ya(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Xd(e,t,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Gt(e,i),s&4&&nn(5,i);break;case 1:if(Gt(e,i),s&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(l){le(i,i.return,l)}else{var n=Ii(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){le(i,i.return,l)}}s&64&&Zd(i),s&512&&on(i,i.return);break;case 3:if(Gt(e,i),s&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Jr(e,t)}catch(l){le(i,i.return,l)}}break;case 27:t===null&&s&4&&Qd(i);case 26:case 5:Gt(e,i),t===null&&s&4&&Gd(i),s&512&&on(i,i.return);break;case 12:Gt(e,i);break;case 31:Gt(e,i),s&4&&ep(e,i);break;case 13:Gt(e,i),s&4&&tp(e,i),s&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=gw.bind(null,i),Mw(e,i))));break;case 22:if(s=i.memoizedState!==null||Zt,!s){t=t!==null&&t.memoizedState!==null||Ue,n=Zt;var o=Ue;Zt=s,(Ue=t)&&!o?Vt(e,i,(i.subtreeFlags&8772)!==0):Gt(e,i),Zt=n,Ue=o}break;case 30:break;default:Gt(e,i)}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,Ye=!1;function Ft(e,t,i){for(i=i.child;i!==null;)$d(e,t,i),i=i.sibling}function $d(e,t,i){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ps,i)}catch{}switch(i.tag){case 26:Ue||Ct(i,t),Ft(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ue||Ct(i,t);var s=fe,n=Ye;bi(i.type)&&(fe=i.stateNode,Ye=!1),Ft(e,t,i),wn(i.stateNode),fe=s,Ye=n;break;case 5:Ue||Ct(i,t);case 6:if(s=fe,n=Ye,fe=null,Ft(e,t,i),fe=s,Ye=n,fe!==null)if(Ye)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(i.stateNode)}catch(o){le(i,t,o)}else try{fe.removeChild(i.stateNode)}catch(o){le(i,t,o)}break;case 18:fe!==null&&(Ye?(e=fe,Zp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),ks(e)):Zp(fe,i.stateNode));break;case 4:s=fe,n=Ye,fe=i.stateNode.containerInfo,Ye=!0,Ft(e,t,i),fe=s,Ye=n;break;case 0:case 11:case 14:case 15:pi(2,i,t),Ue||pi(4,i,t),Ft(e,t,i);break;case 1:Ue||(Ct(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"&&Fd(i,t,s)),Ft(e,t,i);break;case 21:Ft(e,t,i);break;case 22:Ue=(s=Ue)||i.memoizedState!==null,Ft(e,t,i),Ue=s;break;default:Ft(e,t,i)}}function ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ks(e)}catch(i){le(t,t.return,i)}}}function tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ks(e)}catch(i){le(t,t.return,i)}}function cw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yd),t;default:throw Error(m(435,e.tag))}}function go(e,t){var i=cw(e);t.forEach(function(s){if(!i.has(s)){i.add(s);var n=fw.bind(null,e,s);s.then(n,n)}})}function Xe(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var n=i[s],o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 27:if(bi(a.type)){fe=a.stateNode,Ye=!1;break e}break;case 5:fe=a.stateNode,Ye=!1;break e;case 3:case 4:fe=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(fe===null)throw Error(m(160));$d(o,l,n),fe=null,Ye=!1,o=n.alternate,o!==null&&(o.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ip(t,e),t=t.sibling}var Pt=null;function ip(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),We(e),s&4&&(pi(3,e,e.return),nn(3,e),pi(5,e,e.return));break;case 1:Xe(t,e),We(e),s&512&&(Ue||i===null||Ct(i,i.return)),s&64&&Zt&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var n=Pt;if(Xe(t,e),We(e),s&512&&(Ue||i===null||Ct(i,i.return)),s&4){var o=i!==null?i.memoizedState:null;if(s=e.memoizedState,i===null)if(s===null)if(e.stateNode===null){e:{s=e.type,i=e.memoizedProps,n=n.ownerDocument||n;t:switch(s){case"title":o=n.getElementsByTagName("title")[0],(!o||o[xs]||o[Me]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(s),n.head.insertBefore(o,n.querySelector("head > title"))),Ie(o,s,i),o[Me]=e,Re(o),s=o;break e;case"link":var l=iu("link","href",n).get(s+(i.href||""));if(l){for(var a=0;a<l.length;a++)if(o=l[a],o.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&o.getAttribute("rel")===(i.rel==null?null:i.rel)&&o.getAttribute("title")===(i.title==null?null:i.title)&&o.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){l.splice(a,1);break t}}o=n.createElement(s),Ie(o,s,i),n.head.appendChild(o);break;case"meta":if(l=iu("meta","content",n).get(s+(i.content||""))){for(a=0;a<l.length;a++)if(o=l[a],o.getAttribute("content")===(i.content==null?null:""+i.content)&&o.getAttribute("name")===(i.name==null?null:i.name)&&o.getAttribute("property")===(i.property==null?null:i.property)&&o.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&o.getAttribute("charset")===(i.charSet==null?null:i.charSet)){l.splice(a,1);break t}}o=n.createElement(s),Ie(o,s,i),n.head.appendChild(o);break;default:throw Error(m(468,s))}o[Me]=e,Re(o),s=o}e.stateNode=s}else su(n,e.type,e.stateNode);else e.stateNode=tu(n,s,e.memoizedProps);else o!==s?(o===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):o.count--,s===null?su(n,e.type,e.stateNode):tu(n,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ha(e,e.memoizedProps,i.memoizedProps)}break;case 27:Xe(t,e),We(e),s&512&&(Ue||i===null||Ct(i,i.return)),i!==null&&s&4&&Ha(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Xe(t,e),We(e),s&512&&(Ue||i===null||Ct(i,i.return)),e.flags&32){n=e.stateNode;try{Qi(n,"")}catch(U){le(e,e.return,U)}}s&4&&e.stateNode!=null&&(n=e.memoizedProps,Ha(e,n,i!==null?i.memoizedProps:n)),s&1024&&(va=!0);break;case 6:if(Xe(t,e),We(e),s&4){if(e.stateNode===null)throw Error(m(162));s=e.memoizedProps,i=e.stateNode;try{i.nodeValue=s}catch(U){le(e,e.return,U)}}break;case 3:if(Co=null,n=Pt,Pt=No(t.containerInfo),Xe(t,e),Pt=n,We(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{ks(t.containerInfo)}catch(U){le(e,e.return,U)}va&&(va=!1,sp(e));break;case 4:s=Pt,Pt=No(e.stateNode.containerInfo),Xe(t,e),We(e),Pt=s;break;case 12:Xe(t,e),We(e);break;case 31:Xe(t,e),We(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,go(e,s)));break;case 13:Xe(t,e),We(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(bo=nt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,go(e,s)));break;case 22:n=e.memoizedState!==null;var c=i!==null&&i.memoizedState!==null,w=Zt,b=Ue;if(Zt=w||n,Ue=b||c,Xe(t,e),Ue=b,Zt=w,We(e),s&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(i===null||c||Zt||Ue||Ai(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){c=i=t;try{if(o=c.stateNode,n)l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{a=c.stateNode;var _=c.memoizedProps.style,g=_!=null&&_.hasOwnProperty("display")?_.display:null;a.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(U){le(c,c.return,U)}}}else if(t.tag===6){if(i===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(U){le(c,c.return,U)}}}else if(t.tag===18){if(i===null){c=t;try{var f=c.stateNode;n?Fp(f,!0):Fp(c.stateNode,!1)}catch(U){le(c,c.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,go(e,i))));break;case 19:Xe(t,e),We(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,go(e,s)));break;case 30:break;case 21:break;default:Xe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{for(var i,s=e.return;s!==null;){if(Vd(s)){i=s;break}s=s.return}if(i==null)throw Error(m(160));switch(i.tag){case 27:var n=i.stateNode,o=Ta(e);mo(e,o,n);break;case 5:var l=i.stateNode;i.flags&32&&(Qi(l,""),i.flags&=-33);var a=Ta(e);mo(e,a,l);break;case 3:case 4:var c=i.stateNode.containerInfo,w=Ta(e);ya(e,w,c);break;default:throw Error(m(161))}}catch(b){le(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xd(e,t.alternate,t),t=t.sibling}function Ai(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pi(4,t,t.return),Ai(t);break;case 1:Ct(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Fd(t,t.return,i),Ai(t);break;case 27:wn(t.stateNode);case 26:case 5:Ct(t,t.return),Ai(t);break;case 22:t.memoizedState===null&&Ai(t);break;case 30:Ai(t);break;default:Ai(t)}e=e.sibling}}function Vt(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,n=e,o=t,l=o.flags;switch(o.tag){case 0:case 11:case 15:Vt(n,o,i),nn(4,o);break;case 1:if(Vt(n,o,i),s=o,n=s.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){le(s,s.return,w)}if(s=o,n=s.updateQueue,n!==null){var a=s.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Rr(c[n],a)}catch(w){le(s,s.return,w)}}i&&l&64&&Zd(o),on(o,o.return);break;case 27:Qd(o);case 26:case 5:Vt(n,o,i),i&&s===null&&l&4&&Gd(o),on(o,o.return);break;case 12:Vt(n,o,i);break;case 31:Vt(n,o,i),i&&l&4&&ep(n,o);break;case 13:Vt(n,o,i),i&&l&4&&tp(n,o);break;case 22:o.memoizedState===null&&Vt(n,o,i),on(o,o.return);break;case 30:break;default:Vt(n,o,i)}t=t.sibling}}function ka(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&zs(i))}function Oa(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zs(e))}function Ut(e,t,i,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)np(e,t,i,s),t=t.sibling}function np(e,t,i,s){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,i,s),n&2048&&nn(9,t);break;case 1:Ut(e,t,i,s);break;case 3:Ut(e,t,i,s),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zs(e)));break;case 12:if(n&2048){Ut(e,t,i,s),e=t.stateNode;try{var o=t.memoizedProps,l=o.id,a=o.onPostCommit;typeof a=="function"&&a(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){le(t,t.return,c)}}else Ut(e,t,i,s);break;case 31:Ut(e,t,i,s);break;case 13:Ut(e,t,i,s);break;case 23:break;case 22:o=t.stateNode,l=t.alternate,t.memoizedState!==null?o._visibility&2?Ut(e,t,i,s):ln(e,t):o._visibility&2?Ut(e,t,i,s):(o._visibility|=2,ms(e,t,i,s,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ka(l,t);break;case 24:Ut(e,t,i,s),n&2048&&Oa(t.alternate,t);break;default:Ut(e,t,i,s)}}function ms(e,t,i,s,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,l=t,a=i,c=s,w=l.flags;switch(l.tag){case 0:case 11:case 15:ms(o,l,a,c,n),nn(8,l);break;case 23:break;case 22:var b=l.stateNode;l.memoizedState!==null?b._visibility&2?ms(o,l,a,c,n):ln(o,l):(b._visibility|=2,ms(o,l,a,c,n)),n&&w&2048&&ka(l.alternate,l);break;case 24:ms(o,l,a,c,n),n&&w&2048&&Oa(l.alternate,l);break;default:ms(o,l,a,c,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,s=t,n=s.flags;switch(s.tag){case 22:ln(i,s),n&2048&&ka(s.alternate,s);break;case 24:ln(i,s),n&2048&&Oa(s.alternate,s);break;default:ln(i,s)}t=t.sibling}}var an=8192;function gs(e,t,i){if(e.subtreeFlags&an)for(e=e.child;e!==null;)op(e,t,i),e=e.sibling}function op(e,t,i){switch(e.tag){case 26:gs(e,t,i),e.flags&an&&e.memoizedState!==null&&Vw(i,Pt,e.memoizedState,e.memoizedProps);break;case 5:gs(e,t,i);break;case 3:case 4:var s=Pt;Pt=No(e.stateNode.containerInfo),gs(e,t,i),Pt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=an,an=16777216,gs(e,t,i),an=s):gs(e,t,i));break;default:gs(e,t,i)}}function lp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];Je=s,cp(s,e)}lp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ap(e),e=e.sibling}function ap(e){switch(e.tag){case 0:case 11:case 15:cn(e),e.flags&2048&&pi(9,e,e.return);break;case 3:cn(e);break;case 12:cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fo(e)):cn(e);break;default:cn(e)}}function fo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];Je=s,cp(s,e)}lp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pi(8,t,t.return),fo(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,fo(t));break;default:fo(t)}e=e.sibling}}function cp(e,t){for(;Je!==null;){var i=Je;switch(i.tag){case 0:case 11:case 15:pi(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zs(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Je=s;else e:for(i=e;Je!==null;){s=Je;var n=s.sibling,o=s.return;if(Wd(s),s===i){Je=null;break e}if(n!==null){n.return=o,Je=n;break e}Je=o}}}var rw={getCacheForType:function(e){var t=je(ke),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return je(ke).controller.signal}},dw=typeof WeakMap=="function"?WeakMap:Map,ie=0,he=null,V=null,Y=0,oe=0,pt=null,ui=!1,fs=!1,Pa=!1,Qt=0,Le=0,hi=0,Ki=0,Ua=0,ut=0,bs=0,rn=null,$e=null,Na=!1,bo=0,rp=0,So=1/0,Lo=null,wi=null,Ce=0,mi=null,Ss=null,Yt=0,xa=0,Ca=null,dp=null,dn=0,Da=null;function ht(){return(ie&2)!==0&&Y!==0?Y&-Y:S.T!==null?qa():kc()}function pp(){if(ut===0)if((Y&536870912)===0||W){var e=On;On<<=1,(On&3932160)===0&&(On=262144),ut=e}else ut=536870912;return e=rt.current,e!==null&&(e.flags|=32),ut}function et(e,t,i){(e===he&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),gi(e,Y,ut,!1)),Ns(e,i),((ie&2)===0||e!==he)&&(e===he&&((ie&2)===0&&(Ki|=i),Le===4&&gi(e,Y,ut,!1)),Dt(e))}function up(e,t,i){if((ie&6)!==0)throw Error(m(327));var s=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Us(e,t),n=s?hw(e,t):Ja(e,t,!0),o=s;do{if(n===0){fs&&!s&&gi(e,t,0,!1);break}else{if(i=e.current.alternate,o&&!pw(i)){n=Ja(e,t,!1),o=!1;continue}if(n===2){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var a=e;n=rn;var c=a.current.memoizedState.isDehydrated;if(c&&(Ls(a,l).flags|=256),l=Ja(a,l,!1),l!==2){if(Pa&&!c){a.errorRecoveryDisabledLanes|=o,Ki|=o,n=4;break e}o=$e,$e=n,o!==null&&($e===null?$e=o:$e.push.apply($e,o))}n=l}if(o=!1,n!==2)continue}}if(n===1){Ls(e,0),gi(e,t,0,!0);break}e:{switch(s=e,o=n,o){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:gi(s,t,ut,!ui);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=bo+300-nt(),10<n)){if(gi(s,t,ut,!ui),Un(s,0,!0)!==0)break e;Yt=t,s.timeoutHandle=Ep(hp.bind(null,s,i,$e,Lo,Na,t,ut,Ki,bs,ui,o,"Throttled",-0,0),n);break e}hp(s,i,$e,Lo,Na,t,ut,Ki,bs,ui,o,null,-0,0)}}break}while(!0);Dt(e)}function hp(e,t,i,s,n,o,l,a,c,w,b,_,g,f){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jt},op(t,o,_);var U=(o&62914560)===o?bo-nt():(o&4194048)===o?rp-nt():0;if(U=Qw(_,U),U!==null){Yt=o,e.cancelPendingCommit=U(_p.bind(null,e,t,o,i,s,n,l,a,c,b,_,null,g,f)),gi(e,o,l,!w);return}}_p(e,t,o,i,s,n,l,a,c)}function pw(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var n=i[s],o=n.getSnapshot;n=n.value;try{if(!at(o(),n))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gi(e,t,i,s){t&=~Ua,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var n=t;0<n;){var o=31-lt(n),l=1<<o;s[o]=-1,n&=~l}i!==0&&Tc(e,i,t)}function _o(){return(ie&6)===0?(pn(0),!1):!0}function Ra(){if(V!==null){if(oe===0)var e=V.return;else e=V,qt=Di=null,Yl(e),ds=null,Fs=0,e=V;for(;e!==null;)zd(e.alternate,e),e=e.return;V=null}}function Ls(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,xw(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Yt=0,Ra(),he=e,V=i=Bt(e.current,null),Y=t,oe=0,pt=null,ui=!1,fs=Us(e,t),Pa=!1,bs=ut=Ua=Ki=hi=Le=0,$e=rn=null,Na=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var n=31-lt(s),o=1<<n;t|=e[n],s&=~o}return Qt=t,An(),i}function wp(e,t){K=null,S.H=en,t===rs||t===Qn?(t=Nr(),oe=3):t===jl?(t=Nr(),oe=4):oe=t===ua?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,V===null&&(Le=1,ro(e,St(t,e.current)))}function mp(){var e=rt.current;return e===null?!0:(Y&4194048)===Y?Tt===null:(Y&62914560)===Y||(Y&536870912)!==0?e===Tt:!1}function gp(){var e=S.H;return S.H=en,e===null?en:e}function fp(){var e=S.A;return S.A=rw,e}function Ho(){Le=4,ui||(Y&4194048)!==Y&&rt.current!==null||(fs=!0),(hi&134217727)===0&&(Ki&134217727)===0||he===null||gi(he,Y,ut,!1)}function Ja(e,t,i){var s=ie;ie|=2;var n=gp(),o=fp();(he!==e||Y!==t)&&(Lo=null,Ls(e,t)),t=!1;var l=Le;e:do try{if(oe!==0&&V!==null){var a=V,c=pt;switch(oe){case 8:Ra(),l=6;break e;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var w=oe;if(oe=0,pt=null,_s(e,a,c,w),i&&fs){l=0;break e}break;default:w=oe,oe=0,pt=null,_s(e,a,c,w)}}uw(),l=Le;break}catch(b){wp(e,b)}while(!0);return t&&e.shellSuspendCounter++,qt=Di=null,ie=s,S.H=n,S.A=o,V===null&&(he=null,Y=0,An()),l}function uw(){for(;V!==null;)bp(V)}function hw(e,t){var i=ie;ie|=2;var s=gp(),n=fp();he!==e||Y!==t?(Lo=null,So=nt()+500,Ls(e,t)):fs=Us(e,t);e:do try{if(oe!==0&&V!==null){t=V;var o=pt;t:switch(oe){case 1:oe=0,pt=null,_s(e,t,o,1);break;case 2:case 9:if(Pr(o)){oe=0,pt=null,Sp(t);break}t=function(){oe!==2&&oe!==9||he!==e||(oe=7),Dt(e)},o.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:Pr(o)?(oe=0,pt=null,Sp(t)):(oe=0,pt=null,_s(e,t,o,7));break;case 5:var l=null;switch(V.tag){case 26:l=V.memoizedState;case 5:case 27:var a=V;if(l?nu(l):a.stateNode.complete){oe=0,pt=null;var c=a.sibling;if(c!==null)V=c;else{var w=a.return;w!==null?(V=w,To(w)):V=null}break t}}oe=0,pt=null,_s(e,t,o,5);break;case 6:oe=0,pt=null,_s(e,t,o,6);break;case 8:Ra(),Le=6;break e;default:throw Error(m(462))}}ww();break}catch(b){wp(e,b)}while(!0);return qt=Di=null,S.H=s,S.A=n,ie=i,V!==null?0:(he=null,Y=0,An(),Le)}function ww(){for(;V!==null&&!Bu();)bp(V)}function bp(e){var t=Kd(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?To(e):V=t}function Sp(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=Md(i,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Md(i,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Yl(t);default:zd(i,t),t=V=fr(t,Qt),t=Kd(i,t,Qt)}e.memoizedProps=e.pendingProps,t===null?To(e):V=t}function _s(e,t,i,s){qt=Di=null,Yl(t),ds=null,Fs=0;var n=t.return;try{if(iw(e,n,t,i,Y)){Le=1,ro(e,St(i,e.current)),V=null;return}}catch(o){if(n!==null)throw V=n,o;Le=1,ro(e,St(i,e.current)),V=null;return}t.flags&32768?(W||s===1?e=!0:fs||(Y&536870912)!==0?e=!1:(ui=e=!0,(s===2||s===9||s===3||s===6)&&(s=rt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Lp(t,e)):To(t)}function To(e){var t=e;do{if((t.flags&32768)!==0){Lp(t,ui);return}e=t.return;var i=ow(t.alternate,t,Qt);if(i!==null){V=i;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);Le===0&&(Le=5)}function Lp(e,t){do{var i=lw(e.alternate,e);if(i!==null){i.flags&=32767,V=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=i}while(e!==null);Le=6,V=null}function _p(e,t,i,s,n,o,l,a,c){e.cancelPendingCommit=null;do yo();while(Ce!==0);if((ie&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(o=t.lanes|t.childLanes,o|=Tl,Gu(e,i,o,l,a,c),e===he&&(V=he=null,Y=0),Ss=t,mi=e,Yt=i,xa=o,Ca=n,dp=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bw(vn,function(){return kp(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=S.T,S.T=null,n=k.p,k.p=2,l=ie,ie|=4;try{aw(e,t,i)}finally{ie=l,k.p=n,S.T=s}}Ce=1,Hp(),Tp(),yp()}}function Hp(){if(Ce===1){Ce=0;var e=mi,t=Ss,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=S.T,S.T=null;var s=k.p;k.p=2;var n=ie;ie|=4;try{ip(t,e);var o=Ga,l=cr(e.containerInfo),a=o.focusedElem,c=o.selectionRange;if(l!==a&&a&&a.ownerDocument&&ar(a.ownerDocument.documentElement,a)){if(c!==null&&bl(a)){var w=c.start,b=c.end;if(b===void 0&&(b=w),"selectionStart"in a)a.selectionStart=w,a.selectionEnd=Math.min(b,a.value.length);else{var _=a.ownerDocument||document,g=_&&_.defaultView||window;if(g.getSelection){var f=g.getSelection(),U=a.textContent.length,J=Math.min(c.start,U),de=c.end===void 0?J:Math.min(c.end,U);!f.extend&&J>de&&(l=de,de=J,J=l);var p=lr(a,J),r=lr(a,de);if(p&&r&&(f.rangeCount!==1||f.anchorNode!==p.node||f.anchorOffset!==p.offset||f.focusNode!==r.node||f.focusOffset!==r.offset)){var h=_.createRange();h.setStart(p.node,p.offset),f.removeAllRanges(),J>de?(f.addRange(h),f.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),f.addRange(h))}}}}for(_=[],f=a;f=f.parentNode;)f.nodeType===1&&_.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<_.length;a++){var L=_[a];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Mo=!!Fa,Ga=Fa=null}finally{ie=n,k.p=s,S.T=i}}e.current=t,Ce=2}}function Tp(){if(Ce===2){Ce=0;var e=mi,t=Ss,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=S.T,S.T=null;var s=k.p;k.p=2;var n=ie;ie|=4;try{Xd(e,t.alternate,t)}finally{ie=n,k.p=s,S.T=i}}Ce=3}}function yp(){if(Ce===4||Ce===3){Ce=0,ju();var e=mi,t=Ss,i=Yt,s=dp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ce=5:(Ce=0,Ss=mi=null,vp(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wi=null),$o(i),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ps,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=S.T,n=k.p,k.p=2,S.T=null;try{for(var o=e.onRecoverableError,l=0;l<s.length;l++){var a=s[l];o(a.value,{componentStack:a.stack})}}finally{S.T=t,k.p=n}}(Yt&3)!==0&&yo(),Dt(e),n=e.pendingLanes,(i&261930)!==0&&(n&42)!==0?e===Da?dn++:(dn=0,Da=e):dn=0,pn(0)}}function vp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zs(t)))}function yo(){return Hp(),Tp(),yp(),kp()}function kp(){if(Ce!==5)return!1;var e=mi,t=xa;xa=0;var i=$o(Yt),s=S.T,n=k.p;try{k.p=32>i?32:i,S.T=null,i=Ca,Ca=null;var o=mi,l=Yt;if(Ce=0,Ss=mi=null,Yt=0,(ie&6)!==0)throw Error(m(331));var a=ie;if(ie|=4,ap(o.current),np(o,o.current,l,i),ie=a,pn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ps,o)}catch{}return!0}finally{k.p=n,S.T=s,vp(e,t)}}function Op(e,t,i){t=St(i,t),t=pa(e.stateNode,t,2),e=ci(e,t,2),e!==null&&(Ns(e,2),Dt(e))}function le(e,t,i){if(e.tag===3)Op(e,e,i);else for(;t!==null;){if(t.tag===3){Op(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wi===null||!wi.has(s))){e=St(i,e),i=Pd(2),s=ci(t,i,2),s!==null&&(Ud(i,s,t,e),Ns(s,2),Dt(s));break}}t=t.return}}function Ma(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new dw;var n=new Set;s.set(t,n)}else n=s.get(t),n===void 0&&(n=new Set,s.set(t,n));n.has(i)||(Pa=!0,n.add(i),e=mw.bind(null,e,t,i),t.then(e,e))}function mw(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,he===e&&(Y&i)===i&&(Le===4||Le===3&&(Y&62914560)===Y&&300>nt()-bo?(ie&2)===0&&Ls(e,0):Ua|=i,bs===Y&&(bs=0)),Dt(e)}function Pp(e,t){t===0&&(t=Hc()),e=Ni(e,t),e!==null&&(Ns(e,t),Dt(e))}function gw(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Pp(e,i)}function fw(e,t){var i=0;switch(e.tag){case 31:case 13:var s=e.stateNode,n=e.memoizedState;n!==null&&(i=n.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(m(314))}s!==null&&s.delete(t),Pp(e,i)}function bw(e,t){return Qo(e,t)}var vo=null,Hs=null,Ba=!1,ko=!1,ja=!1,fi=0;function Dt(e){e!==Hs&&e.next===null&&(Hs===null?vo=Hs=e:Hs=Hs.next=e),ko=!0,Ba||(Ba=!0,Lw())}function pn(e,t){if(!ja&&ko){ja=!0;do for(var i=!1,s=vo;s!==null;){if(e!==0){var n=s.pendingLanes;if(n===0)var o=0;else{var l=s.suspendedLanes,a=s.pingedLanes;o=(1<<31-lt(42|e)+1)-1,o&=n&~(l&~a),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(i=!0,Cp(s,o))}else o=Y,o=Un(s,s===he?o:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(o&3)===0||Us(s,o)||(i=!0,Cp(s,o));s=s.next}while(i);ja=!1}}function Sw(){Up()}function Up(){ko=Ba=!1;var e=0;fi!==0&&Nw()&&(e=fi);for(var t=nt(),i=null,s=vo;s!==null;){var n=s.next,o=Np(s,t);o===0?(s.next=null,i===null?vo=n:i.next=n,n===null&&(Hs=i)):(i=s,(e!==0||(o&3)!==0)&&(ko=!0)),s=n}Ce!==0&&Ce!==5||pn(e),fi!==0&&(fi=0)}function Np(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,n=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var l=31-lt(o),a=1<<l,c=n[l];c===-1?((a&i)===0||(a&s)!==0)&&(n[l]=Fu(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}if(t=he,i=Y,i=Un(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,i===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Yo(s),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Us(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(s!==null&&Yo(s),$o(i)){case 2:case 8:i=Lc;break;case 32:i=vn;break;case 268435456:i=_c;break;default:i=vn}return s=xp.bind(null,e),i=Qo(i,s),e.callbackPriority=t,e.callbackNode=i,t}return s!==null&&s!==null&&Yo(s),e.callbackPriority=2,e.callbackNode=null,2}function xp(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(yo()&&e.callbackNode!==i)return null;var s=Y;return s=Un(e,e===he?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(up(e,s,t),Np(e,nt()),e.callbackNode!=null&&e.callbackNode===i?xp.bind(null,e):null)}function Cp(e,t){if(yo())return null;up(e,t,!0)}function Lw(){Cw(function(){(ie&6)!==0?Qo(Sc,Sw):Up()})}function qa(){if(fi===0){var e=as;e===0&&(e=kn,kn<<=1,(kn&261888)===0&&(kn=256)),fi=e}return fi}function Dp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dn(""+e)}function Rp(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function _w(e,t,i,s,n){if(t==="submit"&&i&&i.stateNode===n){var o=Dp((n[Ve]||null).action),l=s.submitter;l&&(t=(t=l[Ve]||null)?Dp(t.formAction):l.getAttribute("formAction"),t!==null&&(o=t,l=null));var a=new Bn("action","action",null,s,n);e.push({event:a,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(fi!==0){var c=l?Rp(n,l):new FormData(n);oa(i,{pending:!0,data:c,method:n.method,action:o},null,c)}}else typeof o=="function"&&(a.preventDefault(),c=l?Rp(n,l):new FormData(n),oa(i,{pending:!0,data:c,method:n.method,action:o},o,c))},currentTarget:n}]})}}for(var Ia=0;Ia<Hl.length;Ia++){var Aa=Hl[Ia],Hw=Aa.toLowerCase(),Tw=Aa[0].toUpperCase()+Aa.slice(1);Ot(Hw,"on"+Tw)}Ot(pr,"onAnimationEnd"),Ot(ur,"onAnimationIteration"),Ot(hr,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(qh,"onTransitionRun"),Ot(Ih,"onTransitionStart"),Ot(Ah,"onTransitionCancel"),Ot(wr,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(un));function Jp(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],n=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var l=s.length-1;0<=l;l--){var a=s[l],c=a.instance,w=a.currentTarget;if(a=a.listener,c!==o&&n.isPropagationStopped())break e;o=a,n.currentTarget=w;try{o(n)}catch(b){In(b)}n.currentTarget=null,o=c}else for(l=0;l<s.length;l++){if(a=s[l],c=a.instance,w=a.currentTarget,a=a.listener,c!==o&&n.isPropagationStopped())break e;o=a,n.currentTarget=w;try{o(n)}catch(b){In(b)}n.currentTarget=null,o=c}}}}function Q(e,t){var i=t[el];i===void 0&&(i=t[el]=new Set);var s=e+"__bubble";i.has(s)||(Mp(t,e,2,!1),i.add(s))}function Ka(e,t,i){var s=0;t&&(s|=4),Mp(i,e,s,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ea(e){if(!e[Oo]){e[Oo]=!0,Uc.forEach(function(i){i!=="selectionchange"&&(yw.has(i)||Ka(i,!1,e),Ka(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,Ka("selectionchange",!1,t))}}function Mp(e,t,i,s){switch(pu(t)){case 2:var n=Ww;break;case 8:n=$w;break;default:n=nc}i=n.bind(null,t,i,e),n=void 0,!rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),s?n!==void 0?e.addEventListener(t,i,{capture:!0,passive:n}):e.addEventListener(t,i,!0):n!==void 0?e.addEventListener(t,i,{passive:n}):e.addEventListener(t,i,!1)}function za(e,t,i,s,n){var o=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var a=s.stateNode.containerInfo;if(a===n)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;a!==null;){if(l=zi(a),l===null)return;if(c=l.tag,c===5||c===6||c===26||c===27){s=o=l;continue e}a=a.parentNode}}s=s.return}Ac(function(){var w=o,b=al(i),_=[];e:{var g=mr.get(e);if(g!==void 0){var f=Bn,U=e;switch(e){case"keypress":if(Jn(i)===0)break e;case"keydown":case"keyup":f=fh;break;case"focusin":U="focus",f=hl;break;case"focusout":U="blur",f=hl;break;case"beforeblur":case"afterblur":f=hl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Lh;break;case pr:case ur:case hr:f=ch;break;case wr:f=Hh;break;case"scroll":case"scrollend":f=sh;break;case"wheel":f=yh;break;case"copy":case"cut":case"paste":f=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Fc;break;case"toggle":case"beforetoggle":f=kh}var J=(t&4)!==0,de=!J&&(e==="scroll"||e==="scrollend"),p=J?g!==null?g+"Capture":null:g;J=[];for(var r=w,h;r!==null;){var L=r;if(h=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||h===null||p===null||(L=Ds(r,p),L!=null&&J.push(hn(r,L,h))),de)break;r=r.return}0<J.length&&(g=new f(g,U,null,i,b),_.push({event:g,listeners:J}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",g&&i!==ll&&(U=i.relatedTarget||i.fromElement)&&(zi(U)||U[Ei]))break e;if((f||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,f?(U=i.relatedTarget||i.toElement,f=w,U=U?zi(U):null,U!==null&&(de=E(U),J=U.tag,U!==de||J!==5&&J!==27&&J!==6)&&(U=null)):(f=null,U=w),f!==U)){if(J=zc,L="onMouseLeave",p="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(J=Fc,L="onPointerLeave",p="onPointerEnter",r="pointer"),de=f==null?g:Cs(f),h=U==null?g:Cs(U),g=new J(L,r+"leave",f,i,b),g.target=de,g.relatedTarget=h,L=null,zi(b)===w&&(J=new J(p,r+"enter",U,i,b),J.target=h,J.relatedTarget=de,L=J),de=L,f&&U)t:{for(J=vw,p=f,r=U,h=0,L=p;L;L=J(L))h++;L=0;for(var D=r;D;D=J(D))L++;for(;0<h-L;)p=J(p),h--;for(;0<L-h;)r=J(r),L--;for(;h--;){if(p===r||r!==null&&p===r.alternate){J=p;break t}p=J(p),r=J(r)}J=null}else J=null;f!==null&&Bp(_,g,f,J,!1),U!==null&&de!==null&&Bp(_,de,U,J,!0)}}e:{if(g=w?Cs(w):window,f=g.nodeName&&g.nodeName.toLowerCase(),f==="select"||f==="input"&&g.type==="file")var $=er;else if(Wc(g))if(tr)$=Mh;else{$=Rh;var C=Dh}else f=g.nodeName,!f||f.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?w&&ol(w.elementType)&&($=er):$=Jh;if($&&($=$(e,w))){$c(_,$,i,b);break e}C&&C(e,g,w),e==="focusout"&&w&&g.type==="number"&&w.memoizedProps.value!=null&&nl(g,"number",g.value)}switch(C=w?Cs(w):window,e){case"focusin":(Wc(C)||C.contentEditable==="true")&&($i=C,Sl=w,As=null);break;case"focusout":As=Sl=$i=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,rr(_,i,b);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":rr(_,i,b)}var z;if(ml)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Wi?Yc(e,i)&&(X="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(X="onCompositionStart");X&&(Gc&&i.locale!=="ko"&&(Wi||X!=="onCompositionStart"?X==="onCompositionEnd"&&Wi&&(z=Kc()):(ti=b,dl="value"in ti?ti.value:ti.textContent,Wi=!0)),C=Po(w,X),0<C.length&&(X=new Zc(X,e,null,i,b),_.push({event:X,listeners:C}),z?X.data=z:(z=Xc(i),z!==null&&(X.data=z)))),(z=Ph?Uh(e,i):Nh(e,i))&&(X=Po(w,"onBeforeInput"),0<X.length&&(C=new Zc("onBeforeInput","beforeinput",null,i,b),_.push({event:C,listeners:X}),C.data=z)),_w(_,e,w,i,b)}Jp(_,t)})}function hn(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Po(e,t){for(var i=t+"Capture",s=[];e!==null;){var n=e,o=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||o===null||(n=Ds(e,i),n!=null&&s.unshift(hn(e,n,o)),n=Ds(e,t),n!=null&&s.push(hn(e,n,o))),e.tag===3)return s;e=e.return}return[]}function vw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bp(e,t,i,s,n){for(var o=t._reactName,l=[];i!==null&&i!==s;){var a=i,c=a.alternate,w=a.stateNode;if(a=a.tag,c!==null&&c===s)break;a!==5&&a!==26&&a!==27||w===null||(c=w,n?(w=Ds(i,o),w!=null&&l.unshift(hn(i,w,c))):n||(w=Ds(i,o),w!=null&&l.push(hn(i,w,c)))),i=i.return}l.length!==0&&e.push({event:t,listeners:l})}var kw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function jp(e){return(typeof e=="string"?e:""+e).replace(kw,`
`).replace(Ow,"")}function qp(e,t){return t=jp(t),jp(e)===t}function re(e,t,i,s,n,o){switch(i){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Qi(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Qi(e,""+s);break;case"className":xn(e,"class",s);break;case"tabIndex":xn(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(e,i,s);break;case"style":qc(e,s,o);break;case"data":if(t!=="object"){xn(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Dn(""+s),e.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(i==="formAction"?(t!=="input"&&re(e,t,"name",n.name,n,null),re(e,t,"formEncType",n.formEncType,n,null),re(e,t,"formMethod",n.formMethod,n,null),re(e,t,"formTarget",n.formTarget,n,null)):(re(e,t,"encType",n.encType,n,null),re(e,t,"method",n.method,n,null),re(e,t,"target",n.target,n,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Dn(""+s),e.setAttribute(i,s);break;case"onClick":s!=null&&(e.onclick=Jt);break;case"onScroll":s!=null&&Q("scroll",e);break;case"onScrollEnd":s!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(m(61));if(i=s.__html,i!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=i}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}i=Dn(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""+s):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":s===!0?e.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(i,s):e.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(i):e.setAttribute(i,s);break;case"popover":Q("beforetoggle",e),Q("toggle",e),Nn(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Nn(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=th.get(i)||i,Nn(e,i,s))}}function Za(e,t,i,s,n,o){switch(i){case"style":qc(e,s,o);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(m(61));if(i=s.__html,i!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=i}}break;case"children":typeof s=="string"?Qi(e,s):(typeof s=="number"||typeof s=="bigint")&&Qi(e,""+s);break;case"onScroll":s!=null&&Q("scroll",e);break;case"onScrollEnd":s!=null&&Q("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(n=i.endsWith("Capture"),t=i.slice(2,n?i.length-7:void 0),o=e[Ve]||null,o=o!=null?o[i]:null,typeof o=="function"&&e.removeEventListener(t,o,n),typeof s=="function")){typeof o!="function"&&o!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,s,n);break e}i in e?e[i]=s:s===!0?e.setAttribute(i,""):Nn(e,i,s)}}}function Ie(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var s=!1,n=!1,o;for(o in i)if(i.hasOwnProperty(o)){var l=i[o];if(l!=null)switch(o){case"src":s=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:re(e,t,o,l,i,null)}}n&&re(e,t,"srcSet",i.srcSet,i,null),s&&re(e,t,"src",i.src,i,null);return;case"input":Q("invalid",e);var a=o=l=n=null,c=null,w=null;for(s in i)if(i.hasOwnProperty(s)){var b=i[s];if(b!=null)switch(s){case"name":n=b;break;case"type":l=b;break;case"checked":c=b;break;case"defaultChecked":w=b;break;case"value":o=b;break;case"defaultValue":a=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,t));break;default:re(e,t,s,b,i,null)}}Jc(e,o,a,c,w,l,n,!1);return;case"select":Q("invalid",e),s=l=o=null;for(n in i)if(i.hasOwnProperty(n)&&(a=i[n],a!=null))switch(n){case"value":o=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:re(e,t,n,a,i,null)}t=o,i=l,e.multiple=!!s,t!=null?Vi(e,!!s,t,!1):i!=null&&Vi(e,!!s,i,!0);return;case"textarea":Q("invalid",e),o=n=s=null;for(l in i)if(i.hasOwnProperty(l)&&(a=i[l],a!=null))switch(l){case"value":s=a;break;case"defaultValue":n=a;break;case"children":o=a;break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(m(91));break;default:re(e,t,l,a,i,null)}Bc(e,s,n,o);return;case"option":for(c in i)if(i.hasOwnProperty(c)&&(s=i[c],s!=null))switch(c){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:re(e,t,c,s,i,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(s=0;s<un.length;s++)Q(un[s],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in i)if(i.hasOwnProperty(w)&&(s=i[w],s!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:re(e,t,w,s,i,null)}return;default:if(ol(t)){for(b in i)i.hasOwnProperty(b)&&(s=i[b],s!==void 0&&Za(e,t,b,s,i,void 0));return}}for(a in i)i.hasOwnProperty(a)&&(s=i[a],s!=null&&re(e,t,a,s,i,null))}function Pw(e,t,i,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,o=null,l=null,a=null,c=null,w=null,b=null;for(f in i){var _=i[f];if(i.hasOwnProperty(f)&&_!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":c=_;default:s.hasOwnProperty(f)||re(e,t,f,null,s,_)}}for(var g in s){var f=s[g];if(_=i[g],s.hasOwnProperty(g)&&(f!=null||_!=null))switch(g){case"type":o=f;break;case"name":n=f;break;case"checked":w=f;break;case"defaultChecked":b=f;break;case"value":l=f;break;case"defaultValue":a=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,t));break;default:f!==_&&re(e,t,g,f,s,_)}}sl(e,l,a,c,w,b,o,n);return;case"select":f=l=a=g=null;for(o in i)if(c=i[o],i.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":f=c;default:s.hasOwnProperty(o)||re(e,t,o,null,s,c)}for(n in s)if(o=s[n],c=i[n],s.hasOwnProperty(n)&&(o!=null||c!=null))switch(n){case"value":g=o;break;case"defaultValue":a=o;break;case"multiple":l=o;default:o!==c&&re(e,t,n,o,s,c)}t=a,i=l,s=f,g!=null?Vi(e,!!i,g,!1):!!s!=!!i&&(t!=null?Vi(e,!!i,t,!0):Vi(e,!!i,i?[]:"",!1));return;case"textarea":f=g=null;for(a in i)if(n=i[a],i.hasOwnProperty(a)&&n!=null&&!s.hasOwnProperty(a))switch(a){case"value":break;case"children":break;default:re(e,t,a,null,s,n)}for(l in s)if(n=s[l],o=i[l],s.hasOwnProperty(l)&&(n!=null||o!=null))switch(l){case"value":g=n;break;case"defaultValue":f=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==o&&re(e,t,l,n,s,o)}Mc(e,g,f);return;case"option":for(var U in i)if(g=i[U],i.hasOwnProperty(U)&&g!=null&&!s.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:re(e,t,U,null,s,g)}for(c in s)if(g=s[c],f=i[c],s.hasOwnProperty(c)&&g!==f&&(g!=null||f!=null))switch(c){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:re(e,t,c,g,s,f)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in i)g=i[J],i.hasOwnProperty(J)&&g!=null&&!s.hasOwnProperty(J)&&re(e,t,J,null,s,g);for(w in s)if(g=s[w],f=i[w],s.hasOwnProperty(w)&&g!==f&&(g!=null||f!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:re(e,t,w,g,s,f)}return;default:if(ol(t)){for(var de in i)g=i[de],i.hasOwnProperty(de)&&g!==void 0&&!s.hasOwnProperty(de)&&Za(e,t,de,void 0,s,g);for(b in s)g=s[b],f=i[b],!s.hasOwnProperty(b)||g===f||g===void 0&&f===void 0||Za(e,t,b,g,s,f);return}}for(var p in i)g=i[p],i.hasOwnProperty(p)&&g!=null&&!s.hasOwnProperty(p)&&re(e,t,p,null,s,g);for(_ in s)g=s[_],f=i[_],!s.hasOwnProperty(_)||g===f||g==null&&f==null||re(e,t,_,g,s,f)}function Ip(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var n=i[s],o=n.transferSize,l=n.initiatorType,a=n.duration;if(o&&a&&Ip(l)){for(l=0,a=n.responseEnd,s+=1;s<i.length;s++){var c=i[s],w=c.startTime;if(w>a)break;var b=c.transferSize,_=c.initiatorType;b&&Ip(_)&&(c=c.responseEnd,l+=b*(c<a?1:(a-w)/(c-w)))}if(--s,t+=8*(o+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fa=null,Ga=null;function Uo(e){return e.nodeType===9?e:e.ownerDocument}function Ap(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qa=null;function Nw(){var e=window.event;return e&&e.type==="popstate"?e===Qa?!1:(Qa=e,!0):(Qa=null,!1)}var Ep=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,Cw=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(e){return zp.resolve(null).then(e).catch(Dw)}:Ep;function Dw(e){setTimeout(function(){throw e})}function bi(e){return e==="head"}function Zp(e,t){var i=t,s=0;do{var n=i.nextSibling;if(e.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"||i==="/&"){if(s===0){e.removeChild(n),ks(t);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")wn(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,wn(i);for(var o=i.firstChild;o;){var l=o.nextSibling,a=o.nodeName;o[xs]||a==="SCRIPT"||a==="STYLE"||a==="LINK"&&o.rel.toLowerCase()==="stylesheet"||i.removeChild(o),o=l}}else i==="body"&&wn(e.ownerDocument.body);i=n}while(i);ks(t)}function Fp(e,t){var i=e;e=0;do{var s=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=s}while(i)}function Ya(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ya(i),tl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Rw(e,t,i,s){for(;e.nodeType===1;){var n=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[xs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=yt(e.nextSibling),e===null)break}return null}function Jw(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=yt(e.nextSibling),e===null))return null;return e}function Gp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=yt(e.nextSibling),e===null))return null;return e}function Xa(e){return e.data==="$?"||e.data==="$~"}function Wa(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mw(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var s=function(){t(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $a=null;function Vp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return yt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Qp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Yp(e,t,i){switch(t=Uo(i),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tl(e)}var vt=new Map,Xp=new Set;function No(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xt=k.d;k.d={f:Bw,r:jw,D:qw,C:Iw,L:Aw,m:Kw,X:zw,S:Ew,M:Zw};function Bw(){var e=Xt.f(),t=_o();return e||t}function jw(e){var t=Zi(e);t!==null&&t.tag===5&&t.type==="form"?wd(t):Xt.r(e)}var Ts=typeof document>"u"?null:document;function Wp(e,t,i){var s=Ts;if(s&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof i=="string"&&(n+='[crossorigin="'+i+'"]'),Xp.has(n)||(Xp.add(n),e={rel:e,crossOrigin:i,href:t},s.querySelector(n)===null&&(t=s.createElement("link"),Ie(t,"link",e),Re(t),s.head.appendChild(t)))}}function qw(e){Xt.D(e),Wp("dns-prefetch",e,null)}function Iw(e,t){Xt.C(e,t),Wp("preconnect",e,t)}function Aw(e,t,i){Xt.L(e,t,i);var s=Ts;if(s&&e&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&i&&i.imageSrcSet?(n+='[imagesrcset="'+ft(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(n+='[imagesizes="'+ft(i.imageSizes)+'"]')):n+='[href="'+ft(e)+'"]';var o=n;switch(t){case"style":o=ys(e);break;case"script":o=vs(e)}vt.has(o)||(e=M({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),vt.set(o,e),s.querySelector(n)!==null||t==="style"&&s.querySelector(mn(o))||t==="script"&&s.querySelector(gn(o))||(t=s.createElement("link"),Ie(t,"link",e),Re(t),s.head.appendChild(t)))}}function Kw(e,t){Xt.m(e,t);var i=Ts;if(i&&e){var s=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(s)+'"][href="'+ft(e)+'"]',o=n;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=vs(e)}if(!vt.has(o)&&(e=M({rel:"modulepreload",href:e},t),vt.set(o,e),i.querySelector(n)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(gn(o)))return}s=i.createElement("link"),Ie(s,"link",e),Re(s),i.head.appendChild(s)}}}function Ew(e,t,i){Xt.S(e,t,i);var s=Ts;if(s&&e){var n=Fi(s).hoistableStyles,o=ys(e);t=t||"default";var l=n.get(o);if(!l){var a={loading:0,preload:null};if(l=s.querySelector(mn(o)))a.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},i),(i=vt.get(o))&&ec(e,i);var c=l=s.createElement("link");Re(c),Ie(c,"link",e),c._p=new Promise(function(w,b){c.onload=w,c.onerror=b}),c.addEventListener("load",function(){a.loading|=1}),c.addEventListener("error",function(){a.loading|=2}),a.loading|=4,xo(l,t,s)}l={type:"stylesheet",instance:l,count:1,state:a},n.set(o,l)}}}function zw(e,t){Xt.X(e,t);var i=Ts;if(i&&e){var s=Fi(i).hoistableScripts,n=vs(e),o=s.get(n);o||(o=i.querySelector(gn(n)),o||(e=M({src:e,async:!0},t),(t=vt.get(n))&&tc(e,t),o=i.createElement("script"),Re(o),Ie(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},s.set(n,o))}}function Zw(e,t){Xt.M(e,t);var i=Ts;if(i&&e){var s=Fi(i).hoistableScripts,n=vs(e),o=s.get(n);o||(o=i.querySelector(gn(n)),o||(e=M({src:e,async:!0,type:"module"},t),(t=vt.get(n))&&tc(e,t),o=i.createElement("script"),Re(o),Ie(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},s.set(n,o))}}function $p(e,t,i,s){var n=(n=G.current)?No(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=ys(i.href),i=Fi(n).hoistableStyles,s=i.get(t),s||(s={type:"style",instance:null,count:0,state:null},i.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=ys(i.href);var o=Fi(n).hoistableStyles,l=o.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,l),(o=n.querySelector(mn(e)))&&!o._p&&(l.instance=o,l.state.loading=5),vt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},vt.set(e,i),o||Fw(n,e,i,l.state))),t&&s===null)throw Error(m(528,""));return l}if(t&&s!==null)throw Error(m(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vs(i),i=Fi(n).hoistableScripts,s=i.get(t),s||(s={type:"script",instance:null,count:0,state:null},i.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function ys(e){return'href="'+ft(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function eu(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Fw(e,t,i,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),Ie(t,"link",i),Re(t),e.head.appendChild(t))}function vs(e){return'[src="'+ft(e)+'"]'}function gn(e){return"script[async]"+e}function tu(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+ft(i.href)+'"]');if(s)return t.instance=s,Re(s),s;var n=M({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Re(s),Ie(s,"style",n),xo(s,i.precedence,e),t.instance=s;case"stylesheet":n=ys(i.href);var o=e.querySelector(mn(n));if(o)return t.state.loading|=4,t.instance=o,Re(o),o;s=eu(i),(n=vt.get(n))&&ec(s,n),o=(e.ownerDocument||e).createElement("link"),Re(o);var l=o;return l._p=new Promise(function(a,c){l.onload=a,l.onerror=c}),Ie(o,"link",s),t.state.loading|=4,xo(o,i.precedence,e),t.instance=o;case"script":return o=vs(i.src),(n=e.querySelector(gn(o)))?(t.instance=n,Re(n),n):(s=i,(n=vt.get(o))&&(s=M({},i),tc(s,n)),e=e.ownerDocument||e,n=e.createElement("script"),Re(n),Ie(n,"link",s),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,xo(s,i.precedence,e));return t.instance}function xo(e,t,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=s.length?s[s.length-1]:null,o=n,l=0;l<s.length;l++){var a=s[l];if(a.dataset.precedence===t)o=a;else if(o!==n)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Co=null;function iu(e,t,i){if(Co===null){var s=new Map,n=Co=new Map;n.set(i,s)}else n=Co,s=n.get(i),s||(s=new Map,n.set(i,s));if(s.has(e))return s;for(s.set(e,null),i=i.getElementsByTagName(e),n=0;n<i.length;n++){var o=i[n];if(!(o[xs]||o[Me]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var l=o.getAttribute(t)||"";l=e+l;var a=s.get(l);a?a.push(o):s.set(l,[o])}}return s}function su(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Gw(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vw(e,t,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var n=ys(s.href),o=t.querySelector(mn(n));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Do.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=o,Re(o);return}o=t.ownerDocument||t,s=eu(s),(n=vt.get(n))&&ec(s,n),o=o.createElement("link"),Re(o);var l=o;l._p=new Promise(function(a,c){l.onload=a,l.onerror=c}),Ie(o,"link",s),i.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Do.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var ic=0;function Qw(e,t){return e.stylesheets&&e.count===0&&Jo(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var s=setTimeout(function(){if(e.stylesheets&&Jo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&ic===0&&(ic=62500*Uw());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>ic?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(n)}}:null}function Do(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ro=null;function Jo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ro=new Map,t.forEach(Yw,e),Ro=null,Do.call(e))}function Yw(e,t){if(!(t.state.loading&4)){var i=Ro.get(e);if(i)var s=i.get(null);else{i=new Map,Ro.set(e,i);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<n.length;o++){var l=n[o];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(i.set(l.dataset.precedence,l),s=l)}s&&i.set(null,s)}n=t.instance,l=n.getAttribute("data-precedence"),o=i.get(l)||s,o===s&&i.set(null,n),i.set(l,n),this.count++,s=Do.bind(this),n.addEventListener("load",s),n.addEventListener("error",s),o?o.parentNode.insertBefore(n,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var fn={$$typeof:De,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Xw(e,t,i,s,n,o,l,a,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=s,this.onUncaughtError=n,this.onCaughtError=o,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ou(e,t,i,s,n,o,l,a,c,w,b,_){return e=new Xw(e,t,i,l,c,w,b,_,a),t=1,o===!0&&(t|=24),o=ct(3,null,null,t),e.current=o,o.stateNode=e,t=Jl(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:s,isDehydrated:i,cache:t},ql(o),e}function lu(e){return e?(e=is,e):is}function au(e,t,i,s,n,o){n=lu(n),s.context===null?s.context=n:s.pendingContext=n,s=ai(t),s.payload={element:i},o=o===void 0?null:o,o!==null&&(s.callback=o),i=ci(e,s,t),i!==null&&(et(i,e,t),Vs(i,e,t))}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function sc(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function ru(e){if(e.tag===13||e.tag===31){var t=Ni(e,67108864);t!==null&&et(t,e,67108864),sc(e,67108864)}}function du(e){if(e.tag===13||e.tag===31){var t=ht();t=Wo(t);var i=Ni(e,t);i!==null&&et(i,e,t),sc(e,t)}}var Mo=!0;function Ww(e,t,i,s){var n=S.T;S.T=null;var o=k.p;try{k.p=2,nc(e,t,i,s)}finally{k.p=o,S.T=n}}function $w(e,t,i,s){var n=S.T;S.T=null;var o=k.p;try{k.p=8,nc(e,t,i,s)}finally{k.p=o,S.T=n}}function nc(e,t,i,s){if(Mo){var n=oc(s);if(n===null)za(e,t,s,Bo,i),uu(e,s);else if(tm(n,e,t,i,s))s.stopPropagation();else if(uu(e,s),t&4&&-1<em.indexOf(e)){for(;n!==null;){var o=Zi(n);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var l=vi(o.pendingLanes);if(l!==0){var a=o;for(a.pendingLanes|=2,a.entangledLanes|=2;l;){var c=1<<31-lt(l);a.entanglements[1]|=c,l&=~c}Dt(o),(ie&6)===0&&(So=nt()+500,pn(0))}}break;case 31:case 13:a=Ni(o,2),a!==null&&et(a,o,2),_o(),sc(o,2)}if(o=oc(s),o===null&&za(e,t,s,Bo,i),o===n)break;n=o}n!==null&&s.stopPropagation()}else za(e,t,s,null,i)}}function oc(e){return e=al(e),lc(e)}var Bo=null;function lc(e){if(Bo=null,e=zi(e),e!==null){var t=E(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=ne(t),e!==null)return e;e=null}else if(i===31){if(e=ve(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bo=e,null}function pu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qu()){case Sc:return 2;case Lc:return 8;case vn:case Iu:return 32;case _c:return 268435456;default:return 32}default:return 32}}var ac=!1,Si=null,Li=null,_i=null,bn=new Map,Sn=new Map,Hi=[],em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function Ln(e,t,i,s,n,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:o,targetContainers:[n]},t!==null&&(t=Zi(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function tm(e,t,i,s,n){switch(t){case"focusin":return Si=Ln(Si,e,t,i,s,n),!0;case"dragenter":return Li=Ln(Li,e,t,i,s,n),!0;case"mouseover":return _i=Ln(_i,e,t,i,s,n),!0;case"pointerover":var o=n.pointerId;return bn.set(o,Ln(bn.get(o)||null,e,t,i,s,n)),!0;case"gotpointercapture":return o=n.pointerId,Sn.set(o,Ln(Sn.get(o)||null,e,t,i,s,n)),!0}return!1}function hu(e){var t=zi(e.target);if(t!==null){var i=E(t);if(i!==null){if(t=i.tag,t===13){if(t=ne(i),t!==null){e.blockedOn=t,Oc(e.priority,function(){du(i)});return}}else if(t===31){if(t=ve(i),t!==null){e.blockedOn=t,Oc(e.priority,function(){du(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=oc(e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);ll=s,i.target.dispatchEvent(s),ll=null}else return t=Zi(i),t!==null&&ru(t),e.blockedOn=i,!1;t.shift()}return!0}function wu(e,t,i){jo(e)&&i.delete(t)}function im(){ac=!1,Si!==null&&jo(Si)&&(Si=null),Li!==null&&jo(Li)&&(Li=null),_i!==null&&jo(_i)&&(_i=null),bn.forEach(wu),Sn.forEach(wu)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,ac||(ac=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,im)))}var Io=null;function mu(e){Io!==e&&(Io=e,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Io===e&&(Io=null);for(var t=0;t<e.length;t+=3){var i=e[t],s=e[t+1],n=e[t+2];if(typeof s!="function"){if(lc(s||i)===null)continue;break}var o=Zi(i);o!==null&&(e.splice(t,3),t-=3,oa(o,{pending:!0,data:n,method:i.method,action:s},s,n))}}))}function ks(e){function t(c){return qo(c,e)}Si!==null&&qo(Si,e),Li!==null&&qo(Li,e),_i!==null&&qo(_i,e),bn.forEach(t),Sn.forEach(t);for(var i=0;i<Hi.length;i++){var s=Hi[i];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Hi.length&&(i=Hi[0],i.blockedOn===null);)hu(i),i.blockedOn===null&&Hi.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var n=i[s],o=i[s+1],l=n[Ve]||null;if(typeof o=="function")l||mu(i);else if(l){var a=null;if(o&&o.hasAttribute("formAction")){if(n=o,l=o[Ve]||null)a=l.formAction;else if(lc(n)!==null)continue}else a=l.action;typeof a=="function"?i[s+1]=a:(i.splice(s,3),s-=3),mu(i)}}}function gu(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cc(e){this._internalRoot=e}Ao.prototype.render=cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var i=t.current,s=ht();au(i,s,e,t,null,null)},Ao.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;au(e.current,2,null,e,null,null),_o(),t[Ei]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Hi.length&&t!==0&&t<Hi[i].priority;i++);Hi.splice(i,0,e),i===0&&hu(e)}};var fu=I.version;if(fu!=="19.2.4")throw Error(m(527,fu,"19.2.4"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=y(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var sm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Ps=Ko.inject(sm),ot=Ko}catch{}}return Hn.createRoot=function(e,t){if(!j(e))throw Error(m(299));var i=!1,s="",n=yd,o=vd,l=kd;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ou(e,1,!1,null,null,i,s,null,n,o,l,gu),e[Ei]=t.current,Ea(e),new cc(t)},Hn.hydrateRoot=function(e,t,i){if(!j(e))throw Error(m(299));var s=!1,n="",o=yd,l=vd,a=kd,c=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(n=i.identifierPrefix),i.onUncaughtError!==void 0&&(o=i.onUncaughtError),i.onCaughtError!==void 0&&(l=i.onCaughtError),i.onRecoverableError!==void 0&&(a=i.onRecoverableError),i.formState!==void 0&&(c=i.formState)),t=ou(e,1,!0,t,i??null,s,n,c,o,l,a,gu),t.context=lu(null),i=t.current,s=ht(),s=Wo(s),n=ai(s),n.callback=null,ci(i,n,s),i=s,t.current.lanes=i,Ns(t,i),Dt(t),e[Ei]=t.current,Ea(e),new Ao(t)},Hn.version="19.2.4",Hn}var Ou;function hm(){if(Ou)return pc.exports;Ou=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(I){console.error(I)}}return v(),pc.exports=um(),pc.exports}var wm=hm();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(I,P,m)=>m?m.toUpperCase():P.toLowerCase()),Pu=v=>{const I=gm(v);return I.charAt(0).toUpperCase()+I.slice(1)},Ju=(...v)=>v.filter((I,P,m)=>!!I&&I.trim()!==""&&m.indexOf(I)===P).join(" ").trim(),fm=v=>{for(const I in v)if(I.startsWith("aria-")||I==="role"||I==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=Ne.forwardRef(({color:v="currentColor",size:I=24,strokeWidth:P=2,absoluteStrokeWidth:m,className:j="",children:E,iconNode:ne,...ve},x)=>Ne.createElement("svg",{ref:x,...bm,width:I,height:I,stroke:v,strokeWidth:m?Number(P)*24/Number(I):P,className:Ju("lucide",j),...!E&&!fm(ve)&&{"aria-hidden":"true"},...ve},[...ne.map(([y,F])=>Ne.createElement(y,F)),...Array.isArray(E)?E:[E]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(v,I)=>{const P=Ne.forwardRef(({className:m,...j},E)=>Ne.createElement(Sm,{ref:E,iconNode:I,className:Ju(`lucide-${mm(Pu(v))}`,`lucide-${v}`,m),...j}));return P.displayName=Pu(v),P};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uu=tt("arrow-right",Lm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Hm=tt("arrow-up-down",_m);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Nu=tt("chevron-left",Tm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vm=tt("chevron-right",ym);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Om=tt("chevrons-left",km);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],Um=tt("chevrons-right",Pm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],xu=tt("circle-alert",Nm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Cu=tt("circle-check",xm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],mc=tt("external-link",Cm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Rm=tt("funnel",Dm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Mm=tt("globe",Jm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],jm=tt("info",Bm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Im=tt("refresh-cw",qm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Km=tt("search",Am),Tn={totalUrls:476,normal:0,warning:77,needsImprovement:399,excluded:0},Du=[{id:"row-0",url:"https://www.bworld.co.kr/main.do",pageType:"MAIN",title:"미디어 세상의 리더 SK브로드밴드",checkedAt:"2026-02-24T16:46:24.341Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | 스키마 필수 누락: Organization:@context, WebSite:@context",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"MAIN",pageTypeHint:"main",notes:"-",finalUrl:"https://www.bworld.co.kr/main.do",redirectChainFinal:"https://www.bworld.co.kr/main.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Organization|WebSite|BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":["Organization:@context","WebSite:@context"],"warnings":[]}',jsonLdSample:`[{"@type":"Organization","@id":"https://www.bworld.co.kr/#organization","name":"SK브로드밴드","url":"https://www.bworld.co.kr","logo":{"@type":"ImageObject","url":"https://cdn.bworld.co.kr/shop/assets/mobile/images/svg/newlogo.svg","width":"180","height":"60"},"description":"SK브로드밴드는인터넷과 IPTV 서비스를 제공하는 통신기업으로, 광대역 네트워크와 풍부한 미디어 콘텐츠를 통해 일상 속 편리함과 새로운 즐거움을지원합니다.","slogan":"SK브로드밴드는 빠르고 안정적인 초고속 인터넷과 다양한 콘텐츠를 즐길 수 있는 IPTV 서비스를제공합니다.","taxID":"214-86-18758","vatID":"KR2148618758","founder":{"@type":"Person","name":"박진효"},"brand":[{"@type":"Brand","name":"Bworld","alternateName":"B 월드"},{"@type":"Brand","name":"B directshop","alternateName":"B 다이렉트샵"},{"@type":"Brand","name":"Btv"},{"@type":"Brand","name":"B tv pop"},{"@type":"Brand","name":"B tvcable"},{"@type":"Brand","name":"SK브로드밴드인터넷"}],"subOrganization":{"@type":"Organization","name":"B world(B월드)","alternateName":"B월드","url":"https://www.bworld.co.kr/shop"},"contactPoint":[{"@type":"ContactPoint","telephone":"+82-1600-0106","contactType":"customerservice","areaServed":"KR","availableLanguage":"Korean"},{"@type":"ContactPoint","telephone":"+82-1877-5300","contactType":"customerservice","areaServed":"KR","availableLanguage":"Korean"}],"sameAs":["https://blog.bworld.co.kr","https://www.facebook.com/SKBworld","https://www.youtube.com/skbroadbandBtv","https://www.instagram.com/skbroadband_btv_official/","https://pf.kakao.com/_vxbbXxl"],"award":["국가고객만족도(NCSI)IPTV, 초고속 인터넷 부문 14년 연속 1위","한국서비스품질지수(KS-SQI) 초고속 인터넷 10년 연속, IPTV 6년 연속1위"]},{"@type":"WebSite","@id":"https://www.bworld.co.kr/#website","url":"https://www.bworld.co.kr","name":"Bworld","alternateName":"B월드","publisher":{"@id":"https://www.bworld.co.kr/#organization"},"copyrightHolder":{"@id":"https://www.bworld.co.kr/#organization"},"inLanguage":"ko-KR","description":"SK브로드밴드의공식 온라인 플랫폼. 초고속 인터넷, IPTV, 결합상품 가입 및 고객 서비스를 제공합니다.","keywords":"인터넷, IPTV, Btv, 초고속 인터넷, 결합상품, 통신, SK브로드밴드, 기가인터넷","audience":{"@type":"Audience","audienceType":"개인 고객, 가정,소상공인","geographicAre
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@graph\\":[{\\"@type\\":\\"Organization\\",\\"@id\\":\\"https://www.bworld.co.kr/#organization\\",\\"name\\":\\"SK브로드밴드\\",\\"url\\":\\"https://www.bworld.co.kr\\",\\"logo\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"https://cdn.bworld.co.kr/shop/assets/mobile/images/svg/newlogo.svg\\",\\"width\\":\\"180\\",\\"height\\":\\"60\\"},\\"description\\":\\"SK브로드밴드는인터넷과 IPTV 서비스를 제공하는 통신기업으로, 광대역 네트워크와 풍부한 미디어 콘텐츠를 통해 일상 속 편리함과 새로운 즐거움을지원합니다.\\",\\"slogan\\":\\"SK브로드밴드는 빠르고 안정적인 초고속 인터넷과 다양한 콘텐츠를 즐길 수 있는 IPTV 서비스를제공합니다.\\",\\"taxID\\":\\"214-86-18758\\",\\"vatID\\":\\"KR2148618758\\",\\"founder\\":{\\"@type\\":\\"Person\\",\\"name\\":\\"박진효\\"},\\"brand\\":[{\\"@type\\":\\"Brand\\",\\"name\\":\\"Bworld\\",\\"alternateName\\":\\"B 월드\\"},{\\"@type\\":\\"Brand\\",\\"name\\":\\"B directshop\\",\\"alternateName\\":\\"B 다이렉트샵\\"},{\\"@type\\":\\"Brand\\",\\"name\\":\\"Btv\\"},{\\"@type\\":\\"Brand\\",\\"name\\":\\"B tv pop\\"},{\\"@type\\":\\"Brand\\",\\"name\\":\\"B tvcable\\"},{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드인터넷\\"}],\\"subOrganization\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"B world(B월드)\\",\\"alternateName\\":\\"B월드\\",\\"url\\":\\"https://www.bworld.co.kr/shop\\"},\\"contactPoint\\":[{\\"@type\\":\\"ContactPoint\\",\\"telephone\\":\\"+82-1600-0106\\",\\"contactType\\":\\"customerservice\\",\\"areaServed\\":\\"KR\\",\\"availableLanguage\\":\\"Korean\\"},{\\"@type\\":\\"ContactPoint\\",\\"telephone\\":\\"+82-1877-5300\\",\\"contactType\\":\\"customerservice\\",\\"areaServed\\":\\"KR\\",\\"availableLanguage\\":\\"Korean\\"}],\\"sameAs\\":[\\"https://blog.bworld.co.kr\\",\\"https://www.facebook.com/SKBworld\\",\\"https://www.youtube.com/skbroadbandBtv\\",\\"https://www.instagram.com/skbroadband_btv_official/\\",\\"https://pf.kakao.com/_vxbbXxl\\"],\\"award\\":[\\"국가고객만족도(NCSI)IPTV, 초고속 인터넷 부문 14년 연속 1위\\",\\"한국서비스품질지수(KS-SQI) 초고속 인터넷 10년 연속, IPTV 6년 연속1위\\"]},{\\"@type\\":\\"WebSite\\",\\"@id\\":\\"https://www.bworld.co.kr/#website\\",\\"url\\":\\"https://www.bworld.co.kr\\",\\"name\\":\\"Bworld\\",\\"alternateName\\":\\"B월드\\",\\"publisher\\":{\\"@id\\":\\"https://www.bworld.co.kr/#organization\\"},\\"copyrigh`,issues:[{id:"issue-0-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-0-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-0-2",title:"스키마 필수 누락: Organization:@context, WebSite:@context",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-1",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000",pageType:"PRODUCT",title:"요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:24.345Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"ItemList|BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"ItemList","name":"인터넷 + B tv요금제","description":"SK브로드밴드의 인터넷과 B tv의 결합상품 요금제목록입니다.","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000","numberOfItems":6,"itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100","name":"안심기가 윙즈 + B tvAll+","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100","description":"보안,속도, 커버리지를 한 번에 해결하는 인터넷과 압도적인 가성비, B tv요금제의 만남! 이거 하나면완벽!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":37400,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":2,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200","name":"더안심기가 윙즈 + B tv All넷플릭스","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200","description":"3중보안, 기가급 속도, 넓어진 커버리지의 인터넷과 넷플릭스 이용권과 B tv 실시간 채널까지마음껏!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":43400,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":3,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300","name":"기가와이파이 + B tvAll+","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300","description":"집안어디서나 빠르고 끊김없는 기가와이파이와 영화, 방송, 키즈 모든 장르의 콘텐츠까지무제한으로!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":34100,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":4,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400","name":"기가와이파이 + B tv All넷플릭스","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400","description":"OTT를보고싶다면, 와이파이 인터넷에 넷플릭스 이용권과 B tv 채널까지알차게!","brand":{"@type":"Brand"
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"ItemList\\",\\"name\\":\\"인터넷 + B tv요금제\\",\\"description\\":\\"SK브로드밴드의 인터넷과 B tv의 결합상품 요금제목록입니다.\\",\\"url\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\",\\"numberOfItems\\":6,\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100\\",\\"name\\":\\"안심기가 윙즈 + B tvAll+\\",\\"url\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100\\",\\"description\\":\\"보안,속도, 커버리지를 한 번에 해결하는 인터넷과 압도적인 가성비, B tv요금제의 만남! 이거 하나면완벽!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":37400,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200\\",\\"name\\":\\"더안심기가 윙즈 + B tv All넷플릭스\\",\\"url\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200\\",\\"description\\":\\"3중보안, 기가급 속도, 넓어진 커버리지의 인터넷과 넷플릭스 이용권과 B tv 실시간 채널까지마음껏!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":43400,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300\\",\\"name\\":\\"기가와이파이 + B tvAll+\\",\\"url\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300\\",\\"description\\":\\"집안어디서나 빠르고 끊김없는 기가와이파이와 영화, 방송, 키즈 모든 장르의 콘텐츠까지무제한으로!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":34100,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/bund`,issues:[{id:"issue-1-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-2",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000",pageType:"PRODUCT",title:"요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:24.347Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"ItemList|BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"ItemList","name":"인터넷요금제","description":"SK브로드밴드의 인터넷 요금제목록입니다.","url":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000","numberOfItems":8,"itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100","name":"안심기가윙즈","url":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100","description":"3중보안, 기가급 속도, 집안 어디서나 와이파이 이 완벽한 조합을 한 번에누려요!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":38500,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":2,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200","name":"더안심기가윙즈","url":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200","description":"빈틈없는 3중 보안에 보상, 그리고 집안 어디서나 끊김 없는 기가 와이파이까지 이게 바로 '완성형인터넷'","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":39600,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":3,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300","name":"기가윙즈","url":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300","description":"기가와이파이2대로 집 안 어디든 끊김 없는커버리지","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":36850,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":4,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400","name":"기가와이파이","url":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400","description":"집안어디서나 와이파이로 데이터 걱정없이!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":35200,"availability":"https://s
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"ItemList\\",\\"name\\":\\"인터넷요금제\\",\\"description\\":\\"SK브로드밴드의 인터넷 요금제목록입니다.\\",\\"url\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\",\\"numberOfItems\\":8,\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100\\",\\"name\\":\\"안심기가윙즈\\",\\"url\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100\\",\\"description\\":\\"3중보안, 기가급 속도, 집안 어디서나 와이파이 이 완벽한 조합을 한 번에누려요!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":38500,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200\\",\\"name\\":\\"더안심기가윙즈\\",\\"url\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200\\",\\"description\\":\\"빈틈없는 3중 보안에 보상, 그리고 집안 어디서나 끊김 없는 기가 와이파이까지 이게 바로 '완성형인터넷'\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":39600,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300\\",\\"name\\":\\"기가윙즈\\",\\"url\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300\\",\\"description\\":\\"기가와이파이2대로 집 안 어디든 끊김 없는커버리지\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":36850,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400\\",\\"name\\":\\"기가와이파이\\",\\"url\\":\\"https://www.bworld.c`,issues:[{id:"issue-2-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-3",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100",pageType:"PRODUCT",title:"안심 기가 윙즈 + B tv All+ < 요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:24.350Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Product|BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"Product","@id":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100","sku":"P09010100","name":"안심기가 윙즈 + B tvAll+","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100","image":["https://cdn.bworld.co.kr/home/static/pc/img/image/BW_logo.png"],"description":"모든콘텐츠와 모든 채널을 편하게 유해사이트 차단, 백신, 원격점검 최신형 와이파이 공유기와윙즈","brand":{"@type":"Brand","name":"SK브로드밴드"},"category":"통신서비스 > 결합상품 > 인터넷+Btv","offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":37400,"highPrice":60500,"offerCount":2,"priceValidUntil":"2026-12-31","availability":"https://schema.org/InStock","seller":{"@type":"Organization","name":"SK브로드밴드"}}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷+ Btv","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":5,"name":"안심기가 윙즈 + B tvAll+","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100\\",\\"sku\\":\\"P09010100\\",\\"name\\":\\"안심기가 윙즈 + B tvAll+\\",\\"url\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100\\",\\"image\\":[\\"https://cdn.bworld.co.kr/home/static/pc/img/image/BW_logo.png\\"],\\"description\\":\\"모든콘텐츠와 모든 채널을 편하게 유해사이트 차단, 백신, 원격점검 최신형 와이파이 공유기와윙즈\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"category\\":\\"통신서비스 > 결합상품 > 인터넷+Btv\\",\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":37400,\\"highPrice\\":60500,\\"offerCount\\":2,\\"priceValidUntil\\":\\"2026-12-31\\",\\"availability\\":\\"https://schema.org/InStock\\",\\"seller\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"SK브로드밴드\\"}}}","{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷+ Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"안심기가 윙즈 + B tvAll+\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010100\\"}]}"]}`,issues:[{id:"issue-3-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-3-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-4",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000",pageType:"PRODUCT",title:"요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:24.353Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"ItemList|BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"ItemList","name":"B tv요금제","description":"SK브로드밴드의 B tv 요금제목록입니다.","url":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000","numberOfItems":6,"itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100","name":"BtvAll+","url":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100","description":"영화,방송, 애니, 키즈까지 전 장르 콘텐츠와 채널로 압도적인 가성비, 한 번에 다 되는요금제!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":22000,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":2,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200","name":"Btv All 넷플릭스프리미엄","url":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200","description":"지금가장 핫한 넷플릭스 오리지널 콘텐츠와 B tv 실시간 채널까지다양하게!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":31000,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":3,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300","name":"BtvAll","url":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300","description":"Btv 모든 채널을마음껏!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":16500,"availability":"https://schema.org/InStock"}}},{"@type":"ListItem","position":4,"item":{"@type":"Product","@id":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400","name":"BtvAll+캐치온","url":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400","description":"원하는콘텐츠가 명확하다면, B tv 채널과 함께!스마트하게!","brand":{"@type":"Brand","name":"SK브로드밴드"},"offers":{"@type":"AggregateOffer","priceCurrency":"KRW","lowPrice":25300,"availability":"https://schema.org/InStock"}}},{"@type":"ListIt
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"ItemList\\",\\"name\\":\\"B tv요금제\\",\\"description\\":\\"SK브로드밴드의 B tv 요금제목록입니다.\\",\\"url\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\",\\"numberOfItems\\":6,\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100\\",\\"name\\":\\"BtvAll+\\",\\"url\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100\\",\\"description\\":\\"영화,방송, 애니, 키즈까지 전 장르 콘텐츠와 채널로 압도적인 가성비, 한 번에 다 되는요금제!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":22000,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200\\",\\"name\\":\\"Btv All 넷플릭스프리미엄\\",\\"url\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200\\",\\"description\\":\\"지금가장 핫한 넷플릭스 오리지널 콘텐츠와 B tv 실시간 채널까지다양하게!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":31000,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300\\",\\"name\\":\\"BtvAll\\",\\"url\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300\\",\\"description\\":\\"Btv 모든 채널을마음껏!\\",\\"brand\\":{\\"@type\\":\\"Brand\\",\\"name\\":\\"SK브로드밴드\\"},\\"offers\\":{\\"@type\\":\\"AggregateOffer\\",\\"priceCurrency\\":\\"KRW\\",\\"lowPrice\\":16500,\\"availability\\":\\"https://schema.org/InStock\\"}}},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"item\\":{\\"@type\\":\\"Product\\",\\"@id\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400\\",\\"name\\":\\"BtvAll+캐치온\\",\\"url\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400`,issues:[{id:"issue-4-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-5",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02030000",pageType:"PRODUCT",title:"와이파이/윙즈 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:24.355Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02030000",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"와이파이/윙즈","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"와이파이/윙즈\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02030000\\"}]}"]}`,issues:[{id:"issue-5-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-5-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-6",url:"https://www.bworld.co.kr/shop/main.do",pageType:"SHOP",title:"B 다이렉트샵 | B world",checkedAt:"2026-02-24T16:46:24.357Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/main.do",redirectChainFinal:"https://www.bworld.co.kr/shop/main.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Service",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"Service","@id":"https://www.bworld.co.kr/shop#service","name":"B 다이렉트샵","alternateName":["B direct shop","B 다이렉트샵","비다이렉트샵","B다샵","비다샵"],"description":"SK브로드밴드의온라인 가입 서비스로, 인터넷·B tv·결합상품 가입, 매월 최대 30% 할인(바로할인), 상품권 또는 사은품 등 다양한 혜택을 제공합니다.","url":"https://www.bworld.co.kr/shop","image":"https://cdn.bworld.co.kr/shop/assets/mobile/images/svg/newlogo.svg","serviceType":"인터넷·IPTV 온라인 바로 가입 플랫폼","provider":{"@id":"https://www.bworld.co.kr/#organization"},"areaServed":{"@type":"Country","name":"대한민국"},"availableChannel":{"@type":"ServiceChannel","serviceUrl":"https://www.bworld.co.kr/shop","servicePhone":"+82-1600-0106"},"offers":{"@type":"Offer","description":"신���가입 최대 330만 원 혜택, SK브로드밴드 공식 온라인샵 전용 할인혜택(바로할인 or 온라인전용할인), 만 18~39세 고객 대상 전용 1년 약정 '2030 다이렉트 할인', 바로가입(온라인 셀프 가입),365설치"},"hasOfferCatalog":[{"@type":"OfferCatalog","name":"인터넷 요금제","url":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"OfferCatalog","name":"B tv 요금제","url":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"OfferCatalog","name":"인터넷 + B tv 요금제","url":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"}]}]
---
{"raw_jsonld_scripts":["{ \\"@context\\": \\"https://schema.org\\", \\"@type\\": \\"Service\\", \\"@id\\":\\"https://www.bworld.co.kr/shop#service\\", \\"name\\": \\"B 다이렉트샵\\", \\"alternateName\\": [\\"B direct shop\\", \\"B 다이렉트샵\\", \\"비다이렉트샵\\", \\"B다샵\\", \\"비다샵\\" ], \\"description\\": \\"SK브로드밴드의온라인 가입 서비스로, 인터넷·B tv·결합상품 가입, 매월 최대 30% 할인(바로할인), 상품권 또는 사은품 등 다양한 혜택을 제공합니다.\\",\\"url\\": \\"https://www.bworld.co.kr/shop\\", \\"image\\":\\"https://cdn.bworld.co.kr/shop/assets/mobile/images/svg/newlogo.svg\\",\\"serviceType\\": \\"인터넷·IPTV 온라인 바로 가입 플랫폼\\", \\"provider\\": { \\"@id\\":\\"https://www.bworld.co.kr/#organization\\" }, \\"areaServed\\": { \\"@type\\": \\"Country\\",\\"name\\": \\"대한민국\\" }, \\"availableChannel\\": { \\"@type\\": \\"ServiceChannel\\", \\"serviceUrl\\":\\"https://www.bworld.co.kr/shop\\", \\"servicePhone\\": \\"+82-1600-0106\\" }, \\"offers\\": {\\"@type\\": \\"Offer\\", \\"description\\": \\"신규가입 최대 330만 원 혜택, SK브로드밴드 공식 온라인샵 전용 할인혜택(바로할인 or 온라인전용할인), 만 18~39세 고객 대상 전용 1년 약정 '2030 다이렉트 할인', 바로가입(온라인 셀프 가입),365설치\\" }, \\"hasOfferCatalog\\": [ { \\"@type\\": \\"OfferCatalog\\", \\"name\\": \\"인터넷 요금제\\",\\"url\\": \\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"}, { \\"@type\\": \\"OfferCatalog\\", \\"name\\": \\"B tv 요금제\\", \\"url\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\" }, { \\"@type\\":\\"OfferCatalog\\", \\"name\\": \\"인터넷 + B tv 요금제\\", \\"url\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\" } ] }"]}`,issues:[{id:"issue-6-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-6-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-6-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"}]},{id:"row-7",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531",pageType:"SHOP",title:"인터넷+B tv 신규가입 이벤트 오직 B 다이렉트샵 초강력 혜택! 최대 330만원 | SK브로드밴드",checkedAt:"2026-02-24T16:46:24.359Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Event|FAQPage",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"Event","@id":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531#event","name":"인터넷+B tv 신규가입 이벤트","description":"오직 B 다이렉트샵 초강력 혜택! 최대 330만원. B 다이렉트샵 인터넷 TV결합 신규가입 혜택 8가지. 믿을 수 있는 SK브로드밴드 공식 채널에서 역대급 혜택을 만나세요!","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531","image":"https://cdn.bworld.co.kr/shop/fronta/event/531/20251223/e6fef533-7c73-4e6c-b6c1-a85b0b5b11bf/asset/visual.png","startDate":"2025-12-22","endDate":"2026-12-31","eventStatus":"https://schema.org/EventScheduled","eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode","location":{"@type":"VirtualLocation","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531"},"organizer":{"@id":"https://www.bworld.co.kr/#organization"},"isPartOf":{"@type":"CollectionPage","@id":"https://www.bworld.co.kr/shop/event/event.do#collection"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"인터넷 가입 은 어떻게 하나요?","acceptedAnswer":{"@type":"Answer","text":"24시간 온라인 바로가입 또는 콜센터 1600-0106(09:00-18:00) 가입 가능. 15시 이전 신청시 당일 설치 가능."}},{"@type":"Question","name":"대리점 가입과 B다이렉트샵 가입은 어떤 차이가있나요?","acceptedAnswer":{"@type":"Answer","text":"본사 직영 온라인 채널로 온라인할인(월2,200원), 바로할인(월 14,300원), 365설치 등 전용 혜택 제공. 사은품 최대 47만�� 정확 지급."}},{"@type":"Question","name":"바로가입과 바로할인은 어떤 차이가 있나요?","acceptedAnswer":{"@type":"Answer","text":"바로가입은 24시간 온라인 셀프 가입 절차. 바로할인은 사은품 대신 매월 최대 14,300원 요금 할인혜택."}},{"@type":"Question","name":"가족 구성원에 맞춰 인터넷 TV 결합상품 추천 조합도 있나요?","acceptedAnswer":{"@type":"Answer","text":"요즘가족결합으로 1인 가구, 동거부부(주소지 동일)도 결합할인 가능."}},{"@type":"Question","name":"제휴카드 할인은 어떻게 받을 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"SK브로드밴드 제휴 카드로 자동이체 신청 시 월 최대2만원 할인."}},{"@type":"Question","name":"인터넷 가입 시 현금 지원 받는 방법이 있나요?","acceptedAnswer":{"@type":"Answer","text":"바로할인 요금제 선택 시 사은품 대신 매월 최대14,300원씩 3년간 요금 할인."}},{"@type":"Question","name":"인터넷 tv 가입, 결합 최저가 요금은얼마인가요?","acceptedAnswer":{"@type":"Answer","text":
---
{"raw_jsonld_scripts":["{ \\"@context\\": \\"https://schema.org\\", \\"@type\\": \\"Event\\", \\"@id\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531#event\\", \\"name\\":\\"인터넷+B tv 신규가입 이벤트\\", \\"description\\": \\"오직 B 다이렉트샵 초강력 혜택! 최대 330만원. B 다이렉트샵 인터넷 TV결합 신규가입 혜택 8가지. 믿을 수 있는 SK브로드밴드 공식 채널에서 역대급 혜택을 만나세요!\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531\\", \\"image\\":\\"https://cdn.bworld.co.kr/shop/fronta/event/531/20251223/e6fef533-7c73-4e6c-b6c1-a85b0b5b11bf/asset/visual.png\\",\\"startDate\\": \\"2025-12-22\\", \\"endDate\\": \\"2026-12-31\\", \\"eventStatus\\":\\"https://schema.org/EventScheduled\\", \\"eventAttendanceMode\\":\\"https://schema.org/OnlineEventAttendanceMode\\", \\"location\\": { \\"@type\\":\\"VirtualLocation\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=531\\" }, \\"organizer\\": {\\"@id\\": \\"https://www.bworld.co.kr/#organization\\" }, \\"isPartOf\\": { \\"@type\\":\\"CollectionPage\\", \\"@id\\":\\"https://www.bworld.co.kr/shop/event/event.do#collection\\" } }","{ \\"@context\\": \\"https://schema.org\\", \\"@type\\": \\"FAQPage\\", \\"mainEntity\\": [ {\\"@type\\": \\"Question\\", \\"name\\": \\"인터넷 가입 은 어떻게 하나요?\\", \\"acceptedAnswer\\": { \\"@type\\":\\"Answer\\", \\"text\\": \\"24시간 온라인 바로가입 또는 콜센터 1600-0106(09:00-18:00) 가입 가능. 15시 이전 신청시 당일 설치 가능.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"대리점 가입과 B다이렉트샵 가입은 어떤 차이가있나요?\\", \\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"본사 직영 온라인 채널로 온라인할인(월2,200원), 바로할인(월 14,300원), 365설치 등 전용 혜택 제공. 사은품 최대 47만원 정확 지급.\\" } }, { \\"@type\\":\\"Question\\", \\"name\\": \\"바로가입과 바로할인은 어떤 차이가 있나요?\\", \\"acceptedAnswer\\": { \\"@type\\":\\"Answer\\", \\"text\\": \\"바로가입은 24시간 온라인 셀프 가입 절차. 바로할인은 사은품 대신 매월 최대 14,300원 요금 할인혜택.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"가족 구성원에 맞춰 인터넷 TV 결합상품 추천 조합도 있나요?\\",\\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"요즘가족결합으로 1인 가구, 동거부부(주소지 동일)도 결합할인 가능.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"제휴카드 할인은 어떻게 받을 수 있나요?\\",\\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"`,issues:[{id:"issue-7-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-7-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-8",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533",pageType:"SHOP",title:"오직 B 다이렉트샵! 2030 맞춤 1년 약정 인터넷",checkedAt:"2026-02-24T16:46:24.360Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"H1 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Event|FAQPage",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@type":"Event","@id":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533#event","name":"2030 맞춤 1년 약정 인터넷","description":"이제 오피스텔 인터넷 설치 걱정 끝! 집 계약은 1~2년인데 인터넷은 3년약정이라니 고민되시죠? 2030 다이렉트 요금제로 1년 약정 인터넷을 저렴하게 가입하세요!","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533","image":"https://cdn.bworld.co.kr/shop/fronta/event/20260109/25bc6f7d-1b00-4b86-821e-5558b1cbbcf8.png","startDate":"2026-01-05","endDate":"2026-12-31","eventStatus":"https://schema.org/EventScheduled","eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode","location":{"@type":"VirtualLocation","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533"},"organizer":{"@id":"https://www.bworld.co.kr/#organization"}},{"@type":"FAQPage","@id":"https://www.bworld.co.kr/shop/event/event.do?menu_id=2030-event#faq","mainEntity":[{"@type":"Question","name":"100M, 500M, 1G 인터넷 어떤 차이가 있나요?","acceptedAnswer":{"@type":"Answer","text":"주로 이용하는 ��비스, 동시 접속 인원 등에 따라 선택.100M는 웹 서핑, 500M는 업무, 1G는 동시 사용 인원이 많거나 게임 등 이용 시 사용."}},{"@type":"Question","name":"1년 약정인데 3년 약정보다 저렴한 게 맞나요?","acceptedAnswer":{"@type":"Answer","text":"맞음. 500M+Wifi 기준, SKT 휴대폰 결합 없이 3년 약정보다 2030 다이렉트 요금제가 매월2,200원 더 저렴."}},{"@type":"Question","name":"신청하면 인터넷 설치까지 얼마나 걸리나요?","acceptedAnswer":{"@type":"Answer","text":"365일 당일/야간/주말 설치 가능한 빠른 설치 서비스.평일 오후 3시 이전 신청 시 당일 설치 가능."}},{"@type":"Question","name":"Wifi 공유기도 따로구매해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"아님. 2030 다이렉트 요금제는별도의 공유기 구매 없이 이용 가능."}},{"@type":"Question","name":"SKT 휴대폰 없이 결합 할인 받을 수있나요?","acceptedAnswer":{"@type":"Answer","text":"불가능. SKT 휴대폰과 함께 이용 시 결합할인. 타 통신사 이용 중이라면 SKT 유심 변경 후, 사은품과 결합 할인 혜택 수혜 가능."}},{"@type":"Question","name":"제휴카드 할인은 어떻게 받나요?","acceptedAnswer":{"@type":"Answer","text":"제휴된카드를 사용하면 월 최대 2만 원까지 할인 적용."}},{"@type":"Question","name":"바로가입, 상담신청의차이는 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"바로가입은 24시간 온라인 셀프가입 절차. 상담신청 시에는 전문 상담사의 자세한 안내를 받을 수 있음."}},{"@type":"Question","name":"타사 약정 남아 있는데, 해지 
---
{"raw_jsonld_scripts":["{ \\"@context\\": \\"https://schema.org\\", \\"@graph\\": [ { \\"@type\\": \\"Event\\", \\"@id\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533#event\\", \\"name\\":\\"2030 맞춤 1년 약정 인터넷\\", \\"description\\": \\"이제 오피스텔 인터넷 설치 걱정 끝! 집 계약은 1~2년인데 인터넷은 3년약정이라니 고민되시죠? 2030 다이렉트 요금제로 1년 약정 인터넷을 저렴하게 가입하세요!\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533\\", \\"image\\":\\"https://cdn.bworld.co.kr/shop/fronta/event/20260109/25bc6f7d-1b00-4b86-821e-5558b1cbbcf8.png\\",\\"startDate\\": \\"2026-01-05\\", \\"endDate\\": \\"2026-12-31\\", \\"eventStatus\\":\\"https://schema.org/EventScheduled\\", \\"eventAttendanceMode\\":\\"https://schema.org/OnlineEventAttendanceMode\\", \\"location\\": { \\"@type\\":\\"VirtualLocation\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=533\\" }, \\"organizer\\": {\\"@id\\": \\"https://www.bworld.co.kr/#organization\\" } }, { \\"@type\\": \\"FAQPage\\",\\"@id\\": \\"https://www.bworld.co.kr/shop/event/event.do?menu_id=2030-event#faq\\",\\"mainEntity\\": [ { \\"@type\\": \\"Question\\", \\"name\\": \\"100M, 500M, 1G 인터넷 어떤 차이가 있나요?\\",\\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"주로 이용하는 서비스, 동시 접속 인원 등에 따라 선택.100M는 웹 서핑, 500M는 업무, 1G는 동시 사용 인원이 많거나 게임 등 이용 시 사용.\\" } }, { \\"@type\\":\\"Question\\", \\"name\\": \\"1년 약정인데 3년 약정보다 저렴한 게 맞나요?\\", \\"acceptedAnswer\\": { \\"@type\\":\\"Answer\\", \\"text\\": \\"맞음. 500M+Wifi 기준, SKT 휴대폰 결합 없이 3년 약정보다 2030 다이렉트 요금제가 매월2,200원 더 저렴.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"신청하면 인터넷 설치까지 얼마나 걸리나요?\\",\\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"365일 당일/야간/주말 설치 가능한 빠른 설치 서비스.평일 오후 3시 이전 신청 시 당일 설치 가능.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"Wifi 공유기도 따로구매해야 하나요?\\", \\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"아님. 2030 다이렉트 요금제는별도의 공유기 구매 없이 이용 가능.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"SKT 휴대폰 없이 결합 할인 받을 수있나요?\\", \\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"불가능. SKT 휴대폰과 함께 이용 시 결합할인. 타 통신사 이용 중이라면 SKT 유심 변경 후, 사은품과 결합 할인 혜택 수혜 가능.\\" } }, {`,issues:[{id:"issue-8-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"}]},{id:"row-9",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568",pageType:"SHOP",title:"이사 체크리스트(인터넷/IPTV) ｜ SK브로드밴드 신규가입 혜택",checkedAt:"2026-02-24T16:46:24.362Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"H1 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Event|FAQPage",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":["Event","FAQPage"],"@id":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568#event","name":"이사준비로 바쁜 당신을 위한 초간단 인터넷 설치법 - SK브로드밴드 이사 기획전","description":"인터넷 만큼은 B 다이렉트샵에서간편하게 끝내세요. 전화 없이 빠른 온라인 가입, 이사 당일 설치 가능, 온라인 단독 혜택까지.","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568","image":"https://cdn.bworld.co.kr/shop/fronta/event/20260206/6487ac09-e64c-44d8-a29a-82f87acaee93.png","startDate":"2026-02-11","endDate":"2028-12-31","eventStatus":"https://schema.org/EventScheduled","eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode","location":{"@type":"VirtualLocation","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568"},"organizer":{"@id":"https://www.bworld.co.kr/#organization"},"mainEntity":[{"@type":"Question","name":"다음 주에 이사 가는데 지금 신청해도 제 날짜에 맞춰서 설치해주시나요?","acceptedAnswer":{"@type":"Answer","text":"B 다이렉트샵을 통해 신규 가입 신청(상담, 바로가입) 시, 원하시는 날짜에 설치(365설치)를 제공."}},{"@type":"Question","name":"비 오는 날 이사하면 인터넷 설치 어렵나요?","acceptedAnswer":{"@type":"Answer","text":"안전상의 이유로 기상 및 지역 상황(강릉, 태안 등)에따라 설치 일정 조정을 위해 담당자가 개별 안내. 최대한 원하시는 일정에 제공."}},{"@type":"Question","name":"인터넷 속도 1G, 500M, 100M 어떤 데이터 요금제를 선택해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"주로 이용하는 서비스, 동��� 접속 인원 등에 따라 선택. 100M는 웹 서핑용, 500M는업무용, 1G는 동시 사용 인원이 많거나 게임 등 이용 시 사용."}},{"@type":"Question","name":"설치비와출동비는 다른 건가요?","acceptedAnswer":{"@type":"Answer","text":"동일한 의미. 이전/변경/신규설치에 대한 모든 것을 출동비로 통일하여 안내."}},{"@type":"Question","name":"이미 이동형 TV(삼성무빙스타일, LG 스탠바이미)가 있으면 어떤 혜택을 선택하는 게 좋을까요?","acceptedAnswer":{"@type":"Answer","text":"다른 상품권, 사은품 혜택으로 대체 가능. 혹은 온라인 공식샵 전용 할인 혜택 '바로할인'을 통해 통신비절약도 가능."}},{"@type":"Question","name":"타사 인터넷 약정이 남아 있는데, 해지 시 할인반환금(일명위약금)을 내야 하나요?","acceptedAnswer":{"@type":"Answer","text":"약정이 남아 있으면 할인반환금발생. 그럼에도 바꾸고 싶으시다면 32개월 후로 추천, B 다이렉트샵 전문 상담원이 최적의 요금/혜택을 안내드림."}},{"@type":"Question","name":"SKT 휴대폰이 없어도 결합 할인을 받을 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"불가능. SKT 휴대폰과 함께
---
{"raw_jsonld_scripts":["{ \\"@context\\": \\"https://schema.org\\", \\"@type\\": [\\"Event\\", \\"FAQPage\\"], \\"@id\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568#event\\", \\"name\\": \\"이사준비로 바쁜 당신을 위한 초간단 인터넷 설치법 - SK브로드밴드 이사 기획전\\", \\"description\\": \\"인터넷 만큼은 B 다이렉트샵에서간편하게 끝내세요. 전화 없이 빠른 온라인 가입, 이사 당일 설치 가능, 온라인 단독 혜택까지.\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568\\", \\"image\\":\\"https://cdn.bworld.co.kr/shop/fronta/event/20260206/6487ac09-e64c-44d8-a29a-82f87acaee93.png\\",\\"startDate\\": \\"2026-02-11\\", \\"endDate\\": \\"2028-12-31\\", \\"eventStatus\\":\\"https://schema.org/EventScheduled\\", \\"eventAttendanceMode\\":\\"https://schema.org/OnlineEventAttendanceMode\\", \\"location\\": { \\"@type\\":\\"VirtualLocation\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=568\\" }, \\"organizer\\": {\\"@id\\": \\"https://www.bworld.co.kr/#organization\\" }, \\"mainEntity\\": [ { \\"@type\\":\\"Question\\", \\"name\\": \\"다음 주에 이사 가는데 지금 신청해도 제 날짜에 맞춰서 설치해주시나요?\\", \\"acceptedAnswer\\":{ \\"@type\\": \\"Answer\\", \\"text\\": \\"B 다이렉트샵을 통해 신규 가입 신청(상담, 바로가입) 시, 원하시는 날짜에 설치(365설치)를 제공.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"비 오는 날 이사하면 인터넷 설치 어렵나요?\\",\\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"안전상의 이유로 기상 및 지역 상황(강릉, 태안 등)에따라 설치 일정 조정을 위해 담당자가 개별 안내. 최대한 원하시는 일정에 제공.\\" } }, { \\"@type\\": \\"Question\\",\\"name\\": \\"인터넷 속도 1G, 500M, 100M 어떤 데이터 요금제를 선택해야 하나요?\\", \\"acceptedAnswer\\": {\\"@type\\": \\"Answer\\", \\"text\\": \\"주로 이용하는 서비스, 동시 접속 인원 등에 따라 선택. 100M는 웹 서핑용, 500M는업무용, 1G는 동시 사용 인원이 많거나 ���임 등 이용 시 사용.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"설치비와출동비는 다른 건가요?\\", \\"acceptedAnswer\\": { \\"@type\\": \\"Answer\\", \\"text\\": \\"동일한 의미. 이전/변경/신규설치에 대한 모든 것을 출동비로 통일하여 안내.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"이미 이동형 TV(삼성무빙스타일, LG 스탠바이미)가 있으면 어떤 혜택을 선택하는 게 좋을까요?\\", \\"acceptedAnswer\\": { \\"@type\\":\\"Answer\\", \\"text\\": \\"다른 상품권, 사은품 혜택으로 대체 가능. 혹은 온라인 공식샵 전용 할인 혜택 '바로할인'을 통해 통신비절약도 가능.\\" } }, { \\"@type\\": \\"Question\\", \\"name\\": \\"타사 인터넷 약정이 남아 있`,issues:[{id:"issue-9-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"}]},{id:"row-10",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=565",pageType:"SHOP",title:"AI 5 셋톱박스와 기가 와이파이 7 ｜ 웰컴! TV테리어 프로모션",checkedAt:"2026-02-24T16:46:32.420Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=565",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=565",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-10-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-10-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-10-2",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-10-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-11",url:"https://www.bworld.co.kr/myb/my/submain.do",pageType:"MYB",title:"마이 B | B world",checkedAt:"2026-02-24T16:46:32.422Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"타이틀 누락 | 메타 디스크립션 누락 | H1 누락 | canonical 누락 | 스키마 필수 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"MYB",pageTypeHint:"myb",notes:"-",finalUrl:"https://www.bworld.co.kr/myb/my/submain.do",redirectChainFinal:"https://www.bworld.co.kr/myb/my/submain.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-11-0",title:"타이틀 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-11-1",title:"메타 디스크립션 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-11-2",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-11-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-11-4",title:"스키마 필수 누락",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-12",url:"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100",pageType:"PAGE",title:"B tv < 요금제별 채널 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:32.423Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PAGE",pageTypeHint:"page",notes:"-",finalUrl:"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100",redirectChainFinal:"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제별채널","item":"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100"},{"@type":"ListItem","position":5,"name":"Btv","item":"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제별채널\\",\\"item\\":\\"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100\\"}]}"]}`,issues:[{id:"issue-12-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-12-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-13",url:"https://www.bworld.co.kr/customer/center/service.do?menu_id=C02000000",pageType:"CUSTOMER",title:"바로 고객센터 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.425Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/center/service.do?menu_id=C02000000",redirectChainFinal:"https://www.bworld.co.kr/customer/center/service.do?menu_id=C02000000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"바로고객센터","item":"https://www.bworld.co.kr/customer/center/service.do?menu_id=C02000000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"바로고객센터\\",\\"item\\":\\"https://www.bworld.co.kr/customer/center/service.do?menu_id=C02000000\\"}]}"]}`,issues:[{id:"issue-13-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-13-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-14",url:"https://www.bworld.co.kr/customer/guide/application_list.do?menu_id=C03030000",pageType:"CUSTOMER",title:"신청서 다운로드 < 서비스 이용안내 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.427Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/guide/application_list.do?menu_id=C03030000",redirectChainFinal:"https://www.bworld.co.kr/customer/guide/application_list.do?menu_id=C03030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"서비스이용안내","item":"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000"},{"@type":"ListItem","position":4,"name":"신청서다운로드","item":"https://www.bworld.co.kr/customer/guide/application_list.do?menu_id=C03030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"서비스이용안내\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"신청서다운로드\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/application_list.do?menu_id=C03030000\\"}]}"]}`,issues:[{id:"issue-14-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-14-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-15",url:"https://www.bworld.co.kr/customer/guide/btv_guide_list.do?menu_id=C03020000",pageType:"CUSTOMER",title:"이용가이드 다운로드 < 서비스 이용안내 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.430Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/guide/btv_guide_list.do?menu_id=C03020000",redirectChainFinal:"https://www.bworld.co.kr/customer/guide/btv_guide_list.do?menu_id=C03020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"서비스이용안내","item":"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000"},{"@type":"ListItem","position":4,"name":"이용가이드다운로드","item":"https://www.bworld.co.kr/customer/guide/btv_guide_list.do?menu_id=C03020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"서비스이용안내\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"이용가이드다운로드\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/btv_guide_list.do?menu_id=C03020000\\"}]}"]}`,issues:[{id:"issue-15-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-15-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-16",url:"https://www.bworld.co.kr/customer/guide/handicapped_guide_list.do?menu_id=C03040000",pageType:"CUSTOMER",title:"장��인 고객 이용가이드 < 공지사항 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.431Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/guide/handicapped_guide_list.do?menu_id=C03040000",redirectChainFinal:"https://www.bworld.co.kr/customer/guide/handicapped_guide_list.do?menu_id=C03040000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"공지사항","item":"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000"},{"@type":"ListItem","position":4,"name":"장애인고객이용가이드","item":"https://www.bworld.co.kr/customer/guide/handicapped_guide_list.do?menu_id=C03040000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"공지사항\\",\\"item\\":\\"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"장애인고객이용가이드\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/handicapped_guide_list.do?menu_id=C03040000\\"}]}"]}`,issues:[{id:"issue-16-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-16-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-17",url:"https://www.bworld.co.kr/customer/guide/page.do?menu_id=C03080000",pageType:"CUSTOMER",title:"B world 앱 이용안내 < 서비스 이용안내 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.433Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/guide/page.do?menu_id=C03080000",redirectChainFinal:"https://www.bworld.co.kr/customer/guide/page.do?menu_id=C03080000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"서비스이용안내","item":"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000"},{"@type":"ListItem","position":4,"name":"Bworld 앱이용안내","item":"https://www.bworld.co.kr/customer/guide/page.do?menu_id=C03080000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"서비스이용안내\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Bworld 앱이용안내\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/page.do?menu_id=C03080000\\"}]}"]}`,issues:[{id:"issue-17-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-17-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-18",url:"https://www.bworld.co.kr/customer/guide/reward.do?menu_id=C03050000",pageType:"CUSTOMER",title:"장애 손해 배상 안내 < 공지사항 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.434Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/guide/reward.do?menu_id=C03050000",redirectChainFinal:"https://www.bworld.co.kr/customer/guide/reward.do?menu_id=C03050000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"공지사항","item":"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000"},{"@type":"ListItem","position":4,"name":"장애손해 배상안내","item":"https://www.bworld.co.kr/customer/guide/reward.do?menu_id=C03050000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"공지사항\\",\\"item\\":\\"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"장애손해 배상안내\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/reward.do?menu_id=C03050000\\"}]}"]}`,issues:[{id:"issue-18-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-18-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-19",url:"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000",pageType:"CUSTOMER",title:"간편해결 동영상 가이드 < 서비스 이용안내 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:32.436Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000",redirectChainFinal:"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"서비스이용안내","item":"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000"},{"@type":"ListItem","position":4,"name":"간편해결동영상가이��","item":"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"서비스이용안내\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"간편해결동영상가이드\\",\\"item\\":\\"https://www.bworld.co.kr/customer/guide/video_guide_list.do?menu_id=C03010000\\"}]}"]}`,issues:[{id:"issue-19-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-19-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-20",url:"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000",pageType:"CUSTOMER",title:"공지사항 < 공지사항 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:40.083Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000",redirectChainFinal:"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"공지사항","item":"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000"},{"@type":"ListItem","position":4,"name":"공지사항","item":"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"공지사항\\",\\"item\\":\\"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"공지사항\\",\\"item\\":\\"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000\\"}]}"]}`,issues:[{id:"issue-20-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-20-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-21",url:"https://www.bworld.co.kr/customer/notice/service_notice.do?menu_id=C05020000",pageType:"CUSTOMER",title:"서비스 작업/장애 공지 < 공지사항 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:40.085Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/notice/service_notice.do?menu_id=C05020000",redirectChainFinal:"https://www.bworld.co.kr/customer/notice/service_notice.do?menu_id=C05020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"공지사항","item":"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000"},{"@type":"ListItem","position":4,"name":"서비스작업/장애공지","item":"https://www.bworld.co.kr/customer/notice/service_notice.do?menu_id=C05020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"공지사항\\",\\"item\\":\\"https://www.bworld.co.kr/customer/notice/list.do?menu_id=C05010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"서비스작업/장애공지\\",\\"item\\":\\"https://www.bworld.co.kr/customer/notice/service_notice.do?menu_id=C05020000\\"}]}"]}`,issues:[{id:"issue-21-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-21-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-22",url:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2337",pageType:"CUSTOMER",title:"SK브로드밴드",checkedAt:"2026-02-24T16:46:40.087Z",issueCount:6,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:title 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2337",redirectChainFinal:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2337",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-22-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-22-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-22-2",title:"og:title 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-22-3",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-22-4",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-22-5",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-23",url:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2359",pageType:"CUSTOMER",title:"SK브로드밴드",checkedAt:"2026-02-24T16:46:40.089Z",issueCount:6,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:title 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2359",redirectChainFinal:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2359",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-23-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-23-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-23-2",title:"og:title 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-23-3",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-23-4",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-23-5",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-24",url:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2499",pageType:"CUSTOMER",title:"SK브로드밴드",checkedAt:"2026-02-24T16:46:40.091Z",issueCount:6,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:title 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2499",redirectChainFinal:"https://www.bworld.co.kr/customer/notice/view.do?menu_id=C05010000&amp;nt_keynum=2499",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-24-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-24-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-24-2",title:"og:title 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-24-3",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-24-4",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-24-5",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-25",url:"https://www.bworld.co.kr/customer/search/mart_list.do?menu_id=C01050000",pageType:"CUSTOMER",title:"가까운 매장 찾기 < 서비스 문의 < 고객지원 | B world",checkedAt:"2026-02-24T16:46:40.093Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"CUSTOMER",pageTypeHint:"customer",notes:"-",finalUrl:"https://www.bworld.co.kr/customer/search/mart_list.do?menu_id=C01050000",redirectChainFinal:"https://www.bworld.co.kr/customer/search/mart_list.do?menu_id=C01050000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"고객지원","item":"https://www.bworld.co.kr/page.do?menu_id=C00000000"},{"@type":"ListItem","position":3,"name":"서비스문의","item":"https://www.bworld.co.kr/myb/center/counsel/onlineCounsel_fwd.do"},{"@type":"ListItem","position":4,"name":"가까운매장찾기","item":"https://www.bworld.co.kr/customer/search/mart_list.do?menu_id=C01050000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"고객지원\\",\\"item\\":\\"https://www.bworld.co.kr/page.do?menu_id=C00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"서비스문의\\",\\"item\\":\\"https://www.bworld.co.kr/myb/center/counsel/onlineCounsel_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"가까운매장찾기\\",\\"item\\":\\"https://www.bworld.co.kr/customer/search/mart_list.do?menu_id=C01050000\\"}]}"]}`,issues:[{id:"issue-25-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-25-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-26",url:"https://www.bworld.co.kr/event/benefit/event/event_end_list.do?menu_id=B08030000",pageType:"EVENT",title:"지난 이벤트 < 이벤트 < 혜택 | B world",checkedAt:"2026-02-24T16:46:40.094Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/benefit/event/event_end_list.do?menu_id=B08030000",redirectChainFinal:"https://www.bworld.co.kr/event/benefit/event/event_end_list.do?menu_id=B08030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"이벤트","item":"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000"},{"@type":"ListItem","position":4,"name":"지난이벤트","item":"https://www.bworld.co.kr/event/benefit/event/event_end_list.do?menu_id=B08030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"이벤트\\",\\"item\\":\\"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"지난이벤트\\",\\"item\\":\\"https://www.bworld.co.kr/event/benefit/event/event_end_list.do?menu_id=B08030000\\"}]}"]}`,issues:[{id:"issue-26-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-26-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-27",url:"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000",pageType:"EVENT",title:"진행중인 이벤트 < 이벤트 < 혜택 | B world",checkedAt:"2026-02-24T16:46:40.096Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000",redirectChainFinal:"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"이벤트","item":"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000"},{"@type":"ListItem","position":4,"name":"진행중인이벤트","item":"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"이벤트\\",\\"item\\":\\"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"진행중인이벤트\\",\\"item\\":\\"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000\\"}]}"]}`,issues:[{id:"issue-27-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-27-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-28",url:"https://www.bworld.co.kr/event/benefit/event/event_winner_list.do?menu_id=B08020000",pageType:"EVENT",title:"당첨자 발표 < 이벤트 < 혜택 | B world",checkedAt:"2026-02-24T16:46:40.098Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/benefit/event/event_winner_list.do?menu_id=B08020000",redirectChainFinal:"https://www.bworld.co.kr/event/benefit/event/event_winner_list.do?menu_id=B08020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"이벤트","item":"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000"},{"@type":"ListItem","position":4,"name":"당첨자발표","item":"https://www.bworld.co.kr/event/benefit/event/event_winner_list.do?menu_id=B08020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"이벤트\\",\\"item\\":\\"https://www.bworld.co.kr/event/benefit/event/event_list.do?menu_id=B08010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"당첨자발표\\",\\"item\\":\\"https://www.bworld.co.kr/event/benefit/event/event_winner_list.do?menu_id=B08020000\\"}]}"]}`,issues:[{id:"issue-28-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-28-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-29",url:"https://www.bworld.co.kr/event/page.do?menu_id=B01010000",pageType:"EVENT",title:"결합 할인 < 요금 할인 혜택 < 혜택 | B world",checkedAt:"2026-02-24T16:46:40.099Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/page.do?menu_id=B01010000",redirectChainFinal:"https://www.bworld.co.kr/event/page.do?menu_id=B01010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"요금할��혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01010000"},{"@type":"ListItem","position":4,"name":"결합할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"요금할인혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"결합할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01010000\\"}]}"]}`,issues:[{id:"issue-29-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-29-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-30",url:"https://www.bworld.co.kr/event/page.do?menu_id=B01010000&amp;section=familyCombine",pageType:"EVENT",title:"결합 할인 < 요금 할인 혜택 < 혜택 | B world",checkedAt:"2026-02-24T16:46:46.870Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/page.do?menu_id=B01010000&amp;section=familyCombine",redirectChainFinal:"https://www.bworld.co.kr/event/page.do?menu_id=B01010000&amp;section=familyCombine",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"요금할인혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01010000"},{"@type":"ListItem","position":4,"name":"결합할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"요금할인혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"결합할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01010000\\"}]}"]}`,issues:[{id:"issue-30-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-30-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-31",url:"https://www.bworld.co.kr/event/page.do?menu_id=B01020000",pageType:"EVENT",title:"요금 할인 < 요금 할인 혜택 < 혜택 | B world",checkedAt:"2026-02-24T16:46:46.872Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/page.do?menu_id=B01020000",redirectChainFinal:"https://www.bworld.co.kr/event/page.do?menu_id=B01020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"요금할인혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01010000"},{"@type":"ListItem","position":4,"name":"요금할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"요금할인혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01020000\\"}]}"]}`,issues:[{id:"issue-31-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-31-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-32",url:"https://www.bworld.co.kr/event/page.do?menu_id=B01030000",pageType:"EVENT",title:"B&캡스 할인 < 제휴 할인 < 혜택 | B world",checkedAt:"2026-02-24T16:46:46.874Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/page.do?menu_id=B01030000",redirectChainFinal:"https://www.bworld.co.kr/event/page.do?menu_id=B01030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"제휴할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B06000000"},{"@type":"ListItem","position":4,"name":"B&캡스할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"제휴할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B06000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"B&캡스할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01030000\\"}]}"]}`,issues:[{id:"issue-32-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-32-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-33",url:"https://www.bworld.co.kr/event/page.do?menu_id=B06000000",pageType:"EVENT",title:"제휴카드 할인 < 제휴 할인 < 혜택 | B world",checkedAt:"2026-02-24T16:46:46.877Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/page.do?menu_id=B06000000",redirectChainFinal:"https://www.bworld.co.kr/event/page.do?menu_id=B06000000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"제휴할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B06000000"},{"@type":"ListItem","position":4,"name":"제휴카드할인","item":"https://www.bworld.co.kr/event/page.do?menu_id=B06000000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"제휴할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B06000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"제휴카드할인\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B06000000\\"}]}"]}`,issues:[{id:"issue-33-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-33-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-34",url:"https://www.bworld.co.kr/event/page.do?menu_id=B07000000",pageType:"EVENT",title:"TV 할부 < 혜택 | B world",checkedAt:"2026-02-24T16:46:46.879Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"EVENT",pageTypeHint:"event",notes:"-",finalUrl:"https://www.bworld.co.kr/event/page.do?menu_id=B07000000",redirectChainFinal:"https://www.bworld.co.kr/event/page.do?menu_id=B07000000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"혜택","item":"https://www.bworld.co.kr/event/page.do?menu_id=B01000000"},{"@type":"ListItem","position":3,"name":"TV할부","item":"https://www.bworld.co.kr/event/page.do?menu_id=B07000000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"혜택\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B01000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"TV할부\\",\\"item\\":\\"https://www.bworld.co.kr/event/page.do?menu_id=B07000000\\"}]}"]}`,issues:[{id:"issue-34-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-34-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-35",url:"https://www.bworld.co.kr/footer/ars.do?menu_id=F10000000",pageType:"FOOTER",title:"106 ARS 안내 | B world",checkedAt:"2026-02-24T16:46:46.881Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/ars.do?menu_id=F10000000",redirectChainFinal:"https://www.bworld.co.kr/footer/ars.do?menu_id=F10000000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"106ARS 안내","item":"https://www.bworld.co.kr/footer/ars.do?menu_id=F10000000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"106ARS 안내\\",\\"item\\":\\"https://www.bworld.co.kr/footer/ars.do?menu_id=F10000000\\"}]}"]}`,issues:[{id:"issue-35-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-35-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-36",url:"https://www.bworld.co.kr/footer/btvad.do?menu_id=F06000000",pageType:"FOOTER",title:"B tv 광고안내 | B world",checkedAt:"2026-02-24T16:46:46.883Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/btvad.do?menu_id=F06000000",redirectChainFinal:"https://www.bworld.co.kr/footer/btvad.do?menu_id=F06000000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"Btv 광고안내","item":"https://www.bworld.co.kr/footer/btvad.do?menu_id=F06000000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv 광고안내\\",\\"item\\":\\"https://www.bworld.co.kr/footer/btvad.do?menu_id=F06000000\\"}]}"]}`,issues:[{id:"issue-36-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-36-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-37",url:"https://www.bworld.co.kr/footer/legalnotice.do?menu_id=F01020000",pageType:"FOOTER",title:"법적고지 < 약관 및 정책 | B world",checkedAt:"2026-02-24T16:46:46.885Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/legalnotice.do?menu_id=F01020000",redirectChainFinal:"https://www.bworld.co.kr/footer/legalnotice.do?menu_id=F01020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"약관및정책","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":4,"name":"법적고지","item":"https://www.bworld.co.kr/footer/legalnotice.do?menu_id=F01020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"약관및정책\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"법적고지\\",\\"item\\":\\"https://www.bworld.co.kr/footer/legalnotice.do?menu_id=F01020000\\"}]}"]}`,issues:[{id:"issue-37-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-37-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-38",url:"https://www.bworld.co.kr/footer/policy.do?menu_id=F02000000",pageType:"FOOTER",title:"청소년 보호정책 | B world",checkedAt:"2026-02-24T16:46:46.886Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/policy.do?menu_id=F02000000",redirectChainFinal:"https://www.bworld.co.kr/footer/policy.do?menu_id=F02000000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"���소년보호정책","item":"https://www.bworld.co.kr/footer/policy.do?menu_id=F02000000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"청소년보호정책\\",\\"item\\":\\"https://www.bworld.co.kr/footer/policy.do?menu_id=F02000000\\"}]}"]}`,issues:[{id:"issue-38-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-38-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-39",url:"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000",pageType:"FOOTER",title:"최신 이용자 피해 예방 정보 < 이용자 피해 예방가이드 | B world",checkedAt:"2026-02-24T16:46:46.889Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000",redirectChainFinal:"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"이용자피해예방가이드","item":"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000"},{"@type":"ListItem","position":4,"name":"최신이용자 피해 예방정보","item":"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"이용자피해예방가이드\\",\\"item\\":\\"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"최신이용자 피해 예방정보\\",\\"item\\":\\"https://www.bworld.co.kr/footer/prevention.do?menu_id=F04010000\\"}]}"]}`,issues:[{id:"issue-39-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-39-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-40",url:"https://www.bworld.co.kr/footer/protect.do?menu_id=F01030000",pageType:"FOOTER",title:"개인정보 처리방침 < 개인정보보호 | B world",checkedAt:"2026-02-24T16:46:57.736Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/protect.do?menu_id=F01030000",redirectChainFinal:"https://www.bworld.co.kr/footer/protect.do?menu_id=F01030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"개인정보보호","item":"https://www.bworld.co.kr/footer/page.do?menu_id=F11010000"},{"@type":"ListItem","position":4,"name":"개인정보처리방침","item":"https://www.bworld.co.kr/footer/protect.do?menu_id=F01030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"개인정보보호\\",\\"item\\":\\"https://www.bworld.co.kr/footer/page.do?menu_id=F11010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"개인정보처리방침\\",\\"item\\":\\"https://www.bworld.co.kr/footer/protect.do?menu_id=F01030000\\"}]}"]}`,issues:[{id:"issue-40-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-40-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-41",url:"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000",pageType:"FOOTER",title:"이용약관 < 약관 및 정책 | B world",checkedAt:"2026-02-24T16:46:57.738Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"FOOTER",pageTypeHint:"footer",notes:"-",finalUrl:"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000",redirectChainFinal:"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"FOOTER","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":3,"name":"약관및정책","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"},{"@type":"ListItem","position":4,"name":"이용약관","item":"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"FOOTER\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"약관및정책\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"이용약관\\",\\"item\\":\\"https://www.bworld.co.kr/footer/terms.do?menu_id=F01010000\\"}]}"]}`,issues:[{id:"issue-41-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-41-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-42",url:"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain.do",pageType:"MYB",title:"B tv plus | B world",checkedAt:"2026-02-24T16:46:57.741Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"타이틀 누락 | 메타 디스크립션 누락 | H1 누락 | canonical 누락 | 스키마 필수 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"MYB",pageTypeHint:"myb",notes:"-",finalUrl:"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain.do",redirectChainFinal:"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-42-0",title:"타이틀 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-42-1",title:"메타 디스크립션 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-42-2",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-42-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-42-4",title:"스키마 필수 누락",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-43",url:"https://www.bworld.co.kr/myb/btv/link/pages/popMain.do",pageType:"MYB",title:"B tv pop | B world",checkedAt:"2026-02-24T16:46:57.742Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"타이틀 누락 | 메타 디스크립션 누락 | H1 누락 | canonical 누락 | 스키마 필수 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"MYB",pageTypeHint:"myb",notes:"-",finalUrl:"https://www.bworld.co.kr/myb/btv/link/pages/popMain.do",redirectChainFinal:"https://www.bworld.co.kr/myb/btv/link/pages/popMain.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-43-0",title:"타이틀 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-43-1",title:"메타 디스크립션 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-43-2",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-43-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-43-4",title:"스키마 필수 누락",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-44",url:"https://www.bworld.co.kr/myb/btv/link/pages/vodMain.do",pageType:"MYB",title:"VOD | B world",checkedAt:"2026-02-24T16:46:57.743Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"타이틀 누락 | 메타 디스크립션 누락 | H1 누락 | canonical 누락 | 스키마 필수 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"MYB",pageTypeHint:"myb",notes:"-",finalUrl:"https://www.bworld.co.kr/myb/btv/link/pages/vodMain.do",redirectChainFinal:"https://www.bworld.co.kr/myb/btv/link/pages/vodMain.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-44-0",title:"타이틀 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-44-1",title:"메타 디스크립션 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-44-2",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-44-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-44-4",title:"스키마 필수 누락",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-45",url:"https://www.bworld.co.kr/myb/product/btv-chnl/chnl-frmt-list.do",pageType:"PRODUCT",title:"B tv 채널 편성표 | B world",checkedAt:"2026-02-24T16:46:57.745Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"타이틀 누락 | 메타 디스크립션 누락 | H1 누락 | canonical 누락 | 스키마 필수 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/myb/product/btv-chnl/chnl-frmt-list.do",redirectChainFinal:"https://www.bworld.co.kr/myb/product/btv-chnl/chnl-frmt-list.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-45-0",title:"타이틀 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-45-1",title:"메타 디스크립션 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-45-2",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-45-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-45-4",title:"스키마 필수 누락",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-46",url:"https://www.bworld.co.kr/myb/product/btvpop-chnl/chnl-frmt-list.do",pageType:"PRODUCT",title:"B tv pop 채널 편성표 | B world",checkedAt:"2026-02-24T16:46:57.746Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"타이틀 누락 | 메타 디스크립션 누락 | H1 누락 | canonical 누락 | 스키마 필수 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/myb/product/btvpop-chnl/chnl-frmt-list.do",redirectChainFinal:"https://www.bworld.co.kr/myb/product/btvpop-chnl/chnl-frmt-list.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-46-0",title:"타이틀 누락",description:`💡 [왜 수정해야 할까요?]
타이틀(<title>)은 검색 결과 화면에서 가장 크고 파랗게 보이는 "제목 링크"입니다. 사용자가 클릭을 결정하는 가장 중요한 요소이며, 검색엔진도 이 타이틀을 매우 중요하게 평가합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 <title>페이지의 핵심 키워드를 포함한 매력적인 제목</title> 형식으로 추가해 주세요. (권장 길이: 공백 포함 30~60자 내외)`,level:"개선 필요"},{id:"issue-46-1",title:"메타 디스크립션 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-46-2",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-46-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-46-4",title:"스키마 필수 누락",description:`💡 [왜 수정해야 할까요?]
스키마(Schema) 마크업은 검색엔진에게 페이지의 정보를 떠먹여 주는 "요약 노트"와 같습니다. 이 정보가 잘 입력되어 있으면, 구글 검색 결과에서 별점, 가격, FAQ 등 훨씬 눈에 띄고 풍부한 형태(리치 스니펫)로 노출될 확률이 높아져 클릭률이 크게 상승합니다.

🛠️ [이렇게 수정해 보세요!]
페이지의 <head> 또는 <body>에 JSON-LD 형식의 스크립트를 추가해야 합니다. 누락된 필수 항목(@context, @type, name, url 등)을 포함하여 구조화된 데이터를 작성해 주세요. (개발자 가이드: https://schema.org 참조)`,level:"개선 필요"}]},{id:"row-47",url:"https://www.bworld.co.kr/product/btv/btv_adot.do?menu_id=P03050600",pageType:"PRODUCT",title:"B tv with A.(에이닷) < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:57.747Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/btv_adot.do?menu_id=P03050600",redirectChainFinal:"https://www.bworld.co.kr/product/btv/btv_adot.do?menu_id=P03050600",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"Btv withA.(에이닷)","item":"https://www.bworld.co.kr/product/btv/btv_adot.do?menu_id=P03050600"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv withA.(에이닷)\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/btv_adot.do?menu_id=P03050600\\"}]}"]}`,issues:[{id:"issue-47-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-47-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-48",url:"https://www.bworld.co.kr/product/btv/btv_moving.do?menu_id=P03050800",pageType:"PRODUCT",title:"B tv 무빙 < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:57.749Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/btv_moving.do?menu_id=P03050800",redirectChainFinal:"https://www.bworld.co.kr/product/btv/btv_moving.do?menu_id=P03050800",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"Btv무빙","item":"https://www.bworld.co.kr/product/btv/btv_moving.do?menu_id=P03050800"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv무빙\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/btv_moving.do?menu_id=P03050800\\"}]}"]}`,issues:[{id:"issue-48-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-48-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-49",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100",pageType:"PRODUCT",title:"B tv All+ < 요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:46:57.751Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":5,"name":"BtvAll+","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"BtvAll+\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010100\\"}]}"]}`,issues:[{id:"issue-49-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-50",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200",pageType:"PRODUCT",title:"B tv All 넷플릭스 프리미엄 < 요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.147Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":5,"name":"Btv All 넷플릭스프리미엄","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv All 넷플릭스프리미엄\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010200\\"}]}"]}`,issues:[{id:"issue-50-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-51",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300",pageType:"PRODUCT",title:"B tv All < 요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.150Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":5,"name":"BtvAll","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"BtvAll\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010300\\"}]}"]}`,issues:[{id:"issue-51-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-52",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400",pageType:"PRODUCT",title:"B tv All + 캐치온 < 요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.153Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":5,"name":"Btv All +캐치온","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv All +캐치온\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010400\\"}]}"]}`,issues:[{id:"issue-52-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-53",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010500",pageType:"PRODUCT",title:"B tv pop 230+ < 요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.155Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010500",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010500",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":5,"name":"Btv pop230+","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010500"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv pop230+\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010500\\"}]}"]}`,issues:[{id:"issue-53-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-54",url:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010600",pageType:"PRODUCT",title:"B tv cable 200 < 요금제 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.157Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010600",redirectChainFinal:"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010600",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":5,"name":"Btv cable200","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010600"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv cable200\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010600\\"}]}"]}`,issues:[{id:"issue-54-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-55",url:"https://www.bworld.co.kr/product/btv/disney.do?menu_id=P03050900",pageType:"PRODUCT",title:"디즈니+ < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.159Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/disney.do?menu_id=P03050900",redirectChainFinal:"https://www.bworld.co.kr/product/btv/disney.do?menu_id=P03050900",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"디즈니+","item":"https://www.bworld.co.kr/product/btv/disney.do?menu_id=P03050900"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"디즈니+\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/disney.do?menu_id=P03050900\\"}]}"]}`,issues:[{id:"issue-55-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-55-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-56",url:"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000",pageType:"PRODUCT",title:"B tv < 부가서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.162Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000",redirectChainFinal:"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"부가서비스","item":"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000"},{"@type":"ListItem","position":5,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"부가서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000\\"}]}"]}`,issues:[{id:"issue-56-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-56-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-57",url:"https://www.bworld.co.kr/product/btv/mobile_btv.do?menu_id=P03050200",pageType:"PRODUCT",title:"모바일 B tv < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.165Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/mobile_btv.do?menu_id=P03050200",redirectChainFinal:"https://www.bworld.co.kr/product/btv/mobile_btv.do?menu_id=P03050200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"모바일Btv","item":"https://www.bworld.co.kr/product/btv/mobile_btv.do?menu_id=P03050200"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"모바일Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/mobile_btv.do?menu_id=P03050200\\"}]}"]}`,issues:[{id:"issue-57-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-57-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-58",url:"https://www.bworld.co.kr/product/btv/netflix.do?menu_id=P03050500",pageType:"PRODUCT",title:"넷플릭스 < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.167Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/netflix.do?menu_id=P03050500",redirectChainFinal:"https://www.bworld.co.kr/product/btv/netflix.do?menu_id=P03050500",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"넷플릭스","item":"https://www.bworld.co.kr/product/btv/netflix.do?menu_id=P03050500"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"넷플릭스\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/netflix.do?menu_id=P03050500\\"}]}"]}`,issues:[{id:"issue-58-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-58-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-59",url:"https://www.bworld.co.kr/product/btv/tvgameapp.do?menu_id=P03050400",pageType:"PRODUCT",title:"TV게임&앱 < B tv 주요서비�� < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:47:06.168Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누�� | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/tvgameapp.do?menu_id=P03050400",redirectChainFinal:"https://www.bworld.co.kr/product/btv/tvgameapp.do?menu_id=P03050400",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"TV��임&앱","item":"https://www.bworld.co.kr/product/btv/tvgameapp.do?menu_id=P03050400"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"TV게임&앱\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/tvgameapp.do?menu_id=P03050400\\"}]}"]}`,issues:[{id:"issue-59-0",title:"H1 누��",description:"H1 누��",level:"주의"},{id:"issue-59-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-60",url:"https://www.bworld.co.kr/product/btv/ytp.do?menu_id=P03050700",pageType:"PRODUCT",title:"유튜브 프리미엄 < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.236Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/ytp.do?menu_id=P03050700",redirectChainFinal:"https://www.bworld.co.kr/product/btv/ytp.do?menu_id=P03050700",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"유튜브프리미엄","item":"https://www.bworld.co.kr/product/btv/ytp.do?menu_id=P03050700"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"유튜브프리미엄\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/ytp.do?menu_id=P03050700\\"}]}"]}`,issues:[{id:"issue-60-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-60-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-61",url:"https://www.bworld.co.kr/product/btv/zem.do?menu_id=P03050300",pageType:"PRODUCT",title:"ZEM < B tv 주요서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.238Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btv/zem.do?menu_id=P03050300",redirectChainFinal:"https://www.bworld.co.kr/product/btv/zem.do?menu_id=P03050300",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"Btv주요서비스","item":"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do"},{"@type":"ListItem","position":5,"name":"ZEM","item":"https://www.bworld.co.kr/product/btv/zem.do?menu_id=P03050300"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"Btv주요서비스\\",\\"item\\":\\"https://www.bworld.co.kr/myb/btv/link/pages/btvPlusMain_fwd.do\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"ZEM\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/zem.do?menu_id=P03050300\\"}]}"]}`,issues:[{id:"issue-61-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-61-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-62",url:"https://www.bworld.co.kr/product/btvcable/extra_service.do?menu_id=P05020000",pageType:"PRODUCT",title:"B tv cable < 부가서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.238Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btvcable/extra_service.do?menu_id=P05020000",redirectChainFinal:"https://www.bworld.co.kr/product/btvcable/extra_service.do?menu_id=P05020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"부가서비스","item":"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000"},{"@type":"ListItem","position":5,"name":"Btvcable","item":"https://www.bworld.co.kr/product/btvcable/extra_service.do?menu_id=P05020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"부가서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btvcable\\",\\"item\\":\\"https://www.bworld.co.kr/product/btvcable/extra_service.do?menu_id=P05020000\\"}]}"]}`,issues:[{id:"issue-62-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-62-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-63",url:"https://www.bworld.co.kr/product/btvpop/extra_service.do?menu_id=P08030000",pageType:"PRODUCT",title:"B tv pop < 부가서비스 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.239Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btvpop/extra_service.do?menu_id=P08030000",redirectChainFinal:"https://www.bworld.co.kr/product/btvpop/extra_service.do?menu_id=P08030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"부가서비스","item":"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000"},{"@type":"ListItem","position":5,"name":"Btvpop","item":"https://www.bworld.co.kr/product/btvpop/extra_service.do?menu_id=P08030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"부가서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/extra_service.do?menu_id=P03020000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btvpop\\",\\"item\\":\\"https://www.bworld.co.kr/product/btvpop/extra_service.do?menu_id=P08030000\\"}]}"]}`,issues:[{id:"issue-63-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-63-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-64",url:"https://www.bworld.co.kr/product/btvpop/realtime_list.do?menu_id=P08020100",pageType:"PRODUCT",title:"B tv pop < 요금제별 채널 < B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.240Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/btvpop/realtime_list.do?menu_id=P08020100",redirectChainFinal:"https://www.bworld.co.kr/product/btvpop/realtime_list.do?menu_id=P08020100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"Btv","item":"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000"},{"@type":"ListItem","position":4,"name":"요금제별채널","item":"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100"},{"@type":"ListItem","position":5,"name":"Btvpop","item":"https://www.bworld.co.kr/product/btvpop/realtime_list.do?menu_id=P08020100"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/btv/charge.do?menu_id=P03010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제별채널\\",\\"item\\":\\"https://www.bworld.co.kr/content/realtime/realtime_list.do?menu_id=P03030100\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"Btvpop\\",\\"item\\":\\"https://www.bworld.co.kr/product/btvpop/realtime_list.do?menu_id=P08020100\\"}]}"]}`,issues:[{id:"issue-64-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-64-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-65",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200",pageType:"PRODUCT",title:"안심 기가 윙즈 + B tv All 넷플릭스 < 요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.240Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷+ Btv","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":5,"name":"안심기가 윙즈 + B tv All넷플릭스","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷+ Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"안심기가 윙즈 + B tv All넷플릭스\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010200\\"}]}"]}`,issues:[{id:"issue-65-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-66",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300",pageType:"PRODUCT",title:"기가 와이파이 + B tv All+ < 요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.241Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷+ Btv","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":5,"name":"기가와이파이 + B tvAll+","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷+ Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가와이파이 + B tvAll+\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010300\\"}]}"]}`,issues:[{id:"issue-66-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-66-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-67",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400",pageType:"PRODUCT",title:"���가 와이파이 + B tv All 넷플릭스 < 요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.243Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷+ Btv","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":5,"name":"기가와이파이 + B tv All넷플릭스","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷+ Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가와이파이 + B tv All넷플릭스\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010400\\"}]}"]}`,issues:[{id:"issue-67-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-68",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010500",pageType:"PRODUCT",title:"기가 와이파이 + B tv All < 요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.243Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010500",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010500",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷+ Btv","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":5,"name":"기가와이파이 + B tvAll","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010500"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷+ Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가와이파이 + B tvAll\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010500\\"}]}"]}`,issues:[{id:"issue-68-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-68-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-69",url:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010600",pageType:"PRODUCT",title:"기가 와이파이 + B tv pop 180+ < 요금제 < 인터넷 + B tv < 상품 서비스 | B world",checkedAt:"2026-02-24T16:57:57.244Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010600",redirectChainFinal:"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010600",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷+ Btv","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000"},{"@type":"ListItem","position":5,"name":"기가와이파이 + B tv pop180+","item":"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010600"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷+ Btv\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가와이파이 + B tv pop180+\\",\\"item\\":\\"https://www.bworld.co.kr/product/bundle/charge.do?menu_id=P09010600\\"}]}"]}`,issues:[{id:"issue-69-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-69-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-70",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100",pageType:"PRODUCT",title:"안심 기가 윙즈 < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.765Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"안심기가윙즈","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"안심기가윙즈\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010100\\"}]}"]}`,issues:[{id:"issue-70-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-71",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200",pageType:"PRODUCT",title:"더안심 기가 윙즈 < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.766Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"더안심기가윙즈","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"더안심기가윙즈\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010200\\"}]}"]}`,issues:[{id:"issue-71-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-72",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300",pageType:"PRODUCT",title:"기가 윙즈 < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.767Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"기가윙즈","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가윙��\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010300\\"}]}"]}`,issues:[{id:"issue-72-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-73",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400",pageType:"PRODUCT",title:"기가 와이파이 < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.768Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"기가와이파이","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가와이파이\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010400\\"}]}"]}`,issues:[{id:"issue-73-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-74",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010500",pageType:"PRODUCT",title:"기가 인터넷 < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.768Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010500",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010500",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"기가인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010500"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010500\\"}]}"]}`,issues:[{id:"issue-74-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-75",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010600",pageType:"PRODUCT",title:"2030 다이렉트 기가(1년 약정) < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.769Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010600",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010600",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"2030다이렉트 기가(1년약정)","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010600"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"2030다이렉트 기가(1년약정)\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010600\\"}]}"]}`,issues:[{id:"issue-75-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-76",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010700",pageType:"PRODUCT",title:"기가프리미엄X10G < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.770Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010700",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010700",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"기가프리미엄X10G","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010700"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"기가프리미엄X10G\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010700\\"}]}"]}`,issues:[{id:"issue-76-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-77",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010800",pageType:"PRODUCT",title:"케이블 스마트 100M 와이파이 < 요금제 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.771Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010800",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010800",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":5,"name":"케이블스마트 100M와이파이","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010800"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"케이블스마트 100M와이파이\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010800\\"}]}"]}`,issues:[{id:"issue-77-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-78",url:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02040000",pageType:"PRODUCT",title:"안심서비스 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.771Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02040000",redirectChainFinal:"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02040000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"안심서비스","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02040000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"안심서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02040000\\"}]}"]}`,issues:[{id:"issue-78-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-78-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-79",url:"https://www.bworld.co.kr/product/internet/extra_service.do?menu_id=P02020000",pageType:"PRODUCT",title:"부가서비스 < 인터넷 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:03.772Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/internet/extra_service.do?menu_id=P02020000",redirectChainFinal:"https://www.bworld.co.kr/product/internet/extra_service.do?menu_id=P02020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"인터넷","item":"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000"},{"@type":"ListItem","position":4,"name":"부가서비스","item":"https://www.bworld.co.kr/product/internet/extra_service.do?menu_id=P02020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"인터넷\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/charge.do?menu_id=P02010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"부가서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/internet/extra_service.do?menu_id=P02020000\\"}]}"]}`,issues:[{id:"issue-79-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-79-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-80",url:"https://www.bworld.co.kr/product/phone/international.do?menu_id=P06010200",pageType:"PRODUCT",title:"국제전화 < 요금제 < 전화 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:10.235Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/phone/international.do?menu_id=P06010200",redirectChainFinal:"https://www.bworld.co.kr/product/phone/international.do?menu_id=P06010200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"전화","item":"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":5,"name":"국제전화","item":"https://www.bworld.co.kr/product/phone/international.do?menu_id=P06010200"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"전화\\",\\"item\\":\\"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"국제전화\\",\\"item\\":\\"https://www.bworld.co.kr/product/phone/international.do?menu_id=P06010200\\"}]}"]}`,issues:[{id:"issue-80-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-80-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-81",url:"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100",pageType:"PRODUCT",title:"일반전화 < 요금제 < 전화 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:10.235Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100",redirectChainFinal:"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"전화","item":"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":5,"name":"일반전화","item":"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"전화\\",\\"item\\":\\"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":5,\\"name\\":\\"일반전화\\",\\"item\\":\\"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100\\"}]}"]}`,issues:[{id:"issue-81-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-81-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-82",url:"https://www.bworld.co.kr/product/phone/phone_extra_service.do?menu_id=P06020000",pageType:"PRODUCT",title:"부가서비스 < 전화 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:10.242Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/phone/phone_extra_service.do?menu_id=P06020000",redirectChainFinal:"https://www.bworld.co.kr/product/phone/phone_extra_service.do?menu_id=P06020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"전화","item":"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100"},{"@type":"ListItem","position":4,"name":"부가서비스","item":"https://www.bworld.co.kr/product/phone/phone_extra_service.do?menu_id=P06020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"전화\\",\\"item\\":\\"https://www.bworld.co.kr/product/phone/normal.do?menu_id=P06010100\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"부가서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/phone/phone_extra_service.do?menu_id=P06020000\\"}]}"]}`,issues:[{id:"issue-82-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"주의"},{id:"issue-82-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"}]},{id:"row-83",url:"https://www.bworld.co.kr/product/smallbiz/charge.do?menu_id=P07020000",pageType:"PRODUCT",title:"요금제 < 소상공인 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:10.242Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/smallbiz/charge.do?menu_id=P07020000",redirectChainFinal:"https://www.bworld.co.kr/product/smallbiz/charge.do?menu_id=P07020000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"소상공인","item":"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000"},{"@type":"ListItem","position":4,"name":"요금제","item":"https://www.bworld.co.kr/product/smallbiz/charge.do?menu_id=P07020000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"소상공인\\",\\"item\\":\\"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"요금제\\",\\"item\\":\\"https://www.bworld.co.kr/product/smallbiz/charge.do?menu_id=P07020000\\"}]}"]}`,issues:[{id:"issue-83-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-83-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-83-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"}]},{id:"row-84",url:"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000",pageType:"PRODUCT",title:"소상공인 홈 < 소상공인 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:10.243Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000",redirectChainFinal:"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"소상공인","item":"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000"},{"@type":"ListItem","position":4,"name":"소상공인홈","item":"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"소상공인\\",\\"item\\":\\"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"소상공인홈\\",\\"item\\":\\"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000\\"}]}"]}`,issues:[{id:"issue-84-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-84-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-84-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"}]},{id:"row-85",url:"https://www.bworld.co.kr/product/smallbiz/package.do?menu_id=P07030000",pageType:"PRODUCT",title:"매장 솔루션 < 소상공인 < 상품 서비스 | B world",checkedAt:"2026-02-24T16:58:10.245Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/product/smallbiz/package.do?menu_id=P07030000",redirectChainFinal:"https://www.bworld.co.kr/product/smallbiz/package.do?menu_id=P07030000",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"BreadcrumbList",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"https://www.bworld.co.kr"},{"@type":"ListItem","position":2,"name":"상품서비스","item":"https://www.bworld.co.kr/product/main.do?menu_id=P00000000"},{"@type":"ListItem","position":3,"name":"소상공인","item":"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000"},{"@type":"ListItem","position":4,"name":"매장솔루션","item":"https://www.bworld.co.kr/product/smallbiz/package.do?menu_id=P07030000"}]}]
---
{"raw_jsonld_scripts":["{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"홈\\",\\"item\\":\\"https://www.bworld.co.kr\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"상품서비스\\",\\"item\\":\\"https://www.bworld.co.kr/product/main.do?menu_id=P00000000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"소상공인\\",\\"item\\":\\"https://www.bworld.co.kr/product/smallbiz/main.do?menu_id=P07010000\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":4,\\"name\\":\\"매장솔루션\\",\\"item\\":\\"https://www.bworld.co.kr/product/smallbiz/package.do?menu_id=P07030000\\"}]}"]}`,issues:[{id:"issue-85-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-85-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-85-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"}]},{id:"row-86",url:"https://www.bworld.co.kr/shop/bdable.do",pageType:"SHOP",title:"B다샵 가능 혜택 < B 다이렉트샵 | B world",checkedAt:"2026-02-24T16:58:10.245Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/bdable.do",redirectChainFinal:"https://www.bworld.co.kr/shop/bdable.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-86-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-86-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-86-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-86-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-86-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-87",url:"https://www.bworld.co.kr/shop/bdmall/bdapack.do",pageType:"SHOP",title:"B 다이렉트샵 고객만의 특별한 서비스 바로팩",checkedAt:"2026-02-24T16:58:10.246Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없���",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/bdmall/bdapack.do",redirectChainFinal:"https://www.bworld.co.kr/shop/bdmall/bdapack.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-87-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-87-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-87-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-87-3",title:"JSON-LD 스키마 없���",description:"JSON-LD 스키마 없���",level:"개선 필요"}]},{id:"row-88",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=160",pageType:"SHOP",title:"월 8천원대로 즐기는 SK 인터넷 + B tv pop 신규가입 이벤트",checkedAt:"2026-02-24T16:58:10.246Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=160",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=160",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-88-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-88-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-88-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-88-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-88-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-89",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=161",pageType:"SHOP",title:"인터넷 가입 없이 B tv 실시간 방송 즐기자! SK브로드밴드 B tv 월 1만 원대",checkedAt:"2026-02-24T16:58:10.247Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=161",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=161",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-89-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-89-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-89-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-89-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-89-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-90",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=162",pageType:"SHOP",title:"SKT고객은 월 2천원으로 SK 인터넷과 B tv를 마음껏!",checkedAt:"2026-02-24T16:58:17.243Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=162",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=162",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-90-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-90-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-90-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-90-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-90-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-91",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=163",pageType:"SHOP",title:"월 1만원대로 B tv 보고, 무료 사은품까지! B tv pop 단품 이벤트",checkedAt:"2026-02-24T16:58:17.244Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=163",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=163",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-91-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-91-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-91-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-91-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-91-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-92",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=164",pageType:"SHOP",title:"한국에 사는 외국인을 위한 외국인 전용 인터넷 (국문)",checkedAt:"2026-02-24T16:58:17.245Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=164",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=164",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-92-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-92-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-92-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-92-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-92-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-93",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=168",pageType:"SHOP",title:"Apple TV와 B tv의 만남! Apple TV 4K 3세대 이벤트",checkedAt:"2026-02-24T16:58:17.246Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=168",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=168",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-93-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-93-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-93-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-93-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-93-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-94",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=170",pageType:"SHOP",title:"SK브로드밴드 B tv cable 60｜약정·결합·셋톱박스 없이 초특가 이벤트",checkedAt:"2026-02-24T16:58:17.246Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=170",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=170",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-94-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-94-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-94-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-94-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-94-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-95",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=172",pageType:"SHOP",title:"우리집 두번째 TV는 반값 50% 할인! SK브로드밴드 B tv 추가가입 이벤트",checkedAt:"2026-02-24T16:58:17.247Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=172",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=172",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-95-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-95-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-95-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-95-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-95-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-96",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=173",pageType:"SHOP",title:"SK브로드밴드 1년 약정 인터넷 요금제｜2030·대학생·가족 할인 이벤트 총정리",checkedAt:"2026-02-24T16:58:17.248Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=173",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=173",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-96-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-96-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-96-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-96-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-96-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-97",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174",pageType:"SHOP",title:"주말도 야간도 오늘도 온라인 셀프 바로가입｜SK브로드밴드 인터넷 365 설치",checkedAt:"2026-02-24T16:58:17.248Z",issueCount:1,level:"주의",access:"PUBLIC",issueSummary:"schema_match=false",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!0,schemaTypes:"Product",sccIssues:'{"violations":[],"missing_fields":[],"warnings":[]}',jsonLdSample:`[{"@context":"https://schema.org","@type":"Product","name":"SK브로드밴드 바로가입기획전","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174","image":"https://cdn.bworld.co.kr/shop/fronta/event/174/20250714/5c385604-db98-4ee8-8b95-3d37ca60d01e/asset/visual.png","description":"주말도 야간도 오늘도 온라인 Self 바로가입 365 설치","brand":{"@type":"Brand","name":"SK Broadband"},"offers":{"@type":"Offer","url":"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174","priceCurrency":"KRW","price":"29700","availability":"https://schema.org/InStock","itemCondition":"https://schema.org/NewCondition","priceValidUntil":"2028-01-31"}}]
---
{"raw_jsonld_scripts":["{ \\"@context\\": \\"https://schema.org\\", \\"@type\\": \\"Product\\", \\"name\\": \\"SK브로드밴드 바로가입기획전\\", \\"url\\": \\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174\\",\\"image\\":\\"https://cdn.bworld.co.kr/shop/fronta/event/174/20250714/5c385604-db98-4ee8-8b95-3d37ca60d01e/asset/visual.png\\",\\"description\\": \\"주말도 야간도 오늘도 온라인 Self 바로가입 365 설치\\", \\"brand\\": { \\"@type\\": \\"Brand\\",\\"name\\": \\"SK Broadband\\" }, \\"offers\\": { \\"@type\\": \\"Offer\\", \\"url\\":\\"https://www.bworld.co.kr/shop/event/event_detail.do?idx=174\\", \\"priceCurrency\\":\\"KRW\\", \\"price\\": \\"29700\\", \\"availability\\": \\"https://schema.org/InStock\\",\\"itemCondition\\": \\"https://schema.org/NewCondition\\", \\"priceValidUntil\\":\\"2028-01-31\\" } }"]}`,issues:[{id:"issue-97-0",title:"schema_match=false",description:"schema_match=false",level:"주의"}]},{id:"row-98",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=176",pageType:"SHOP",title:"SK브로드밴드 1년 약정 다이렉트 요금제｜2030 저렴한 단기약정 인터넷",checkedAt:"2026-02-24T16:58:17.249Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=176",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=176",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-98-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-98-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-98-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-98-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-98-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-99",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=185",pageType:"SHOP",title:"SK브로드밴드 인터넷+TV｜한 명부터 할인받는 요즘가족결합",checkedAt:"2026-02-24T16:58:17.250Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=185",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=185",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-99-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-99-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-99-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-99-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-99-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-100",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=187",pageType:"SHOP",title:"SK브로드밴드 인터넷+TV 최저가 비교｜통신비 절약은 바로할인 요금제로",checkedAt:"2026-02-24T16:58:25.141Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=187",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=187",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-100-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-100-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-100-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-100-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-100-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-101",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=200",pageType:"SHOP",title:"인터넷만 저렴하게! 월 1만원대 SK인터넷 + WiFi 요금제",checkedAt:"2026-02-24T16:58:25.142Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=200",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-101-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-101-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-101-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-101-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-101-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-102",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=251",pageType:"SHOP",title:"B 다이렉트샵 회원 혜택｜온라인 회원은 웰컴 쿠폰 추가 증정",checkedAt:"2026-02-24T16:58:25.143Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=251",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=251",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-102-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-102-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-102-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-102-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-102-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-103",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=365",pageType:"SHOP",title:"빠른 기가 인터넷 추천｜게임·영상 최적화 SK 1G 인터넷 이벤트",checkedAt:"2026-02-24T16:58:25.143Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=365",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=365",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-103-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-103-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-103-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-103-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-103-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-104",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=371",pageType:"SHOP",title:"알뜰폰과 인터넷 B tv+결합 최대 14,300원 할인｜ SK브로드밴드 알뜰한 결합",checkedAt:"2026-02-24T16:58:25.144Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=371",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=371",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-104-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-104-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-104-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-104-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-104-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-105",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=392",pageType:"SHOP",title:"SK브로드밴드 가입도 해지도 바로 다이렉트｜원스톱 전환서비스",checkedAt:"2026-02-24T16:58:25.144Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=392",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=392",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-105-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-105-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-105-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-105-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-105-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-106",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=400",pageType:"SHOP",title:"B tv 하나로 OTT·실시간 채널 모두 즐기기｜셋톱박스 지원 OTT 안내",checkedAt:"2026-02-24T16:58:25.145Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=400",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=400",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-106-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-106-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-106-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-106-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-106-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-107",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=403",pageType:"SHOP",title:"넷플릭스 어디서 보지? SK브로드밴드 B tv 넷플릭스 요금제 하나로 해결",checkedAt:"2026-02-24T16:58:25.145Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=403",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=403",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-107-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-107-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-107-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-107-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-107-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-108",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=417",pageType:"SHOP",title:"소상공인 전용 인터넷｜매장·사무실용 SK브로드밴드 든든인터넷 요금제",checkedAt:"2026-02-24T16:58:25.145Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=417",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=417",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-108-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-108-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-108-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-108-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-108-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-109",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=434",pageType:"SHOP",title:"캡스홈XSK브로드밴드 제휴 ｜우리집 안전 지킴이 도어가드",checkedAt:"2026-02-24T16:58:25.146Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=434",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=434",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-109-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-109-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-109-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-109-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-109-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-110",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=436",pageType:"SHOP",title:"SK브로드밴드 B tv All+｜모든 장르·모든 OTT를 하나의 요금제로",checkedAt:"2026-02-24T16:58:34.134Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=436",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=436",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-110-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-110-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-110-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-110-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-110-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-111",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=498",pageType:"SHOP",title:"SK브로드밴드 패밀리 요금제｜우리 가족 따로 살아도 인터넷 최대 32% 할인",checkedAt:"2026-02-24T16:58:34.135Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=498",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=498",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-111-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-111-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-111-2",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-111-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-112",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=511",pageType:"SHOP",title:"SK브로드밴드 B tv 무빙｜무선 셋톱박스 & 이동식 TV, 선없이 즐기는 인터넷+TV",checkedAt:"2026-02-24T16:58:34.136Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=511",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=511",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-112-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-112-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-112-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-112-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-112-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-113",url:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=527",pageType:"SHOP",title:"인터넷 보급, 기가급 속도, 집안곳곳 WiFi까지! 안심기가윙즈",checkedAt:"2026-02-24T16:58:34.136Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | schema_match=false | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=527",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event_detail.do?idx=527",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-113-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-113-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-113-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-113-3",title:"schema_match=false",description:"schema_match=false",level:"개선 필요"},{id:"issue-113-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-114",url:"https://www.bworld.co.kr/shop/event/event.do",pageType:"SHOP",title:"기획전 < B 다이렉트샵 | B world",checkedAt:"2026-02-24T16:58:34.137Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/event/event.do",redirectChainFinal:"https://www.bworld.co.kr/shop/event/event.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-114-0",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-114-1",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-114-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-114-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-115",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=1",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T16:58:34.137Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=1",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=1",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-115-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"},{id:"issue-115-1",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"주의"}]},{id:"row-116",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=10",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T16:58:34.138Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=10",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=10",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-116-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"},{id:"issue-116-1",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"주의"}]},{id:"row-117",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=100",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T16:58:34.138Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=100",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=100",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-117-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"},{id:"issue-117-1",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"주의"}]},{id:"row-118",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=101",pageType:"SHOP",title:"삼성 갤럭시 A16",checkedAt:"2026-02-24T16:58:34.139Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=101",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=101",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-118-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"},{id:"issue-118-1",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"주의"}]},{id:"row-119",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=102",pageType:"SHOP",title:"삼성 갤럭시 A16",checkedAt:"2026-02-24T16:58:34.139Z",issueCount:2,level:"주의",access:"PUBLIC",issueSummary:"canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=102",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=102",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-119-0",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"주의"},{id:"issue-119-1",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"주의"}]},{id:"row-120",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=103",pageType:"SHOP",title:"삼성 갤럭시 A16",checkedAt:"2026-02-24T17:05:17.671Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=103",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=103",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-120-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-120-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-120-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-121",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=104",pageType:"SHOP",title:"삼성 갤럭시 A16",checkedAt:"2026-02-24T17:05:17.672Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=104",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=104",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-121-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-121-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-121-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-122",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=105",pageType:"SHOP",title:"삼성 갤럭시 A16",checkedAt:"2026-02-24T17:05:17.673Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=105",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=105",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-122-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-122-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-122-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-123",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=106",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:17.674Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=106",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=106",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-123-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-123-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-123-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-124",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=107",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:17.674Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=107",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=107",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-124-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-124-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-124-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-125",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=108",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:17.675Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=108",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=108",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-125-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-125-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-125-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-126",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=109",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:17.676Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=109",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=109",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-126-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-126-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-126-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-127",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=11",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:05:17.676Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=11",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=11",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-127-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-127-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-127-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-128",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=110",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:17.677Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=110",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=110",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-128-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-128-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-128-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-129",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=111",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:17.678Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=111",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=111",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-129-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-129-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-129-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-130",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=112",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:23.722Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=112",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=112",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-130-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-130-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-130-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-131",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=113",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:23.722Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=113",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=113",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-131-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-131-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-131-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-132",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=114",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:23.723Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=114",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=114",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-132-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-132-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-132-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-133",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=115",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:23.723Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=115",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=115",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-133-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-133-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-133-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-134",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=116",pageType:"SHOP",title:"삼성 갤럭시 A36",checkedAt:"2026-02-24T17:05:23.724Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=116",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=116",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-134-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-134-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-134-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-135",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=117",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:23.724Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=117",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=117",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-135-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-135-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-135-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-136",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=118",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:23.725Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=118",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=118",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-136-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-136-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-136-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-137",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=119",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:23.725Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=119",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=119",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-137-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-137-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-137-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-138",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=12",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:05:23.726Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=12",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=12",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-138-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-138-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-138-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-139",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=120",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:23.726Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=120",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=120",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-139-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-139-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-139-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-140",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=121",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.725Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=121",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=121",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-140-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-140-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-140-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-141",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=122",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.725Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=122",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=122",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-141-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-141-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-141-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-142",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=123",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.726Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=123",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=123",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-142-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-142-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-142-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-143",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=124",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.726Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=124",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=124",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-143-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-143-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-143-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-144",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=125",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.727Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=125",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=125",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-144-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-144-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-144-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-145",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=126",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.727Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=126",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=126",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-145-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-145-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-145-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-146",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=127",pageType:"SHOP",title:"베이직북 14 3세대",checkedAt:"2026-02-24T17:05:30.728Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=127",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=127",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-146-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-146-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-146-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-147",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=128",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:30.728Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=128",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=128",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-147-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-147-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-147-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-148",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=129",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:30.729Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=129",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=129",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-148-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-148-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-148-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-149",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=13",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:05:30.729Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=13",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=13",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-149-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-149-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-149-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-150",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=130",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.149Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=130",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=130",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-150-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-150-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-150-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-151",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=131",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.150Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=131",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=131",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-151-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-151-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-151-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-152",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=132",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.150Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=132",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=132",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-152-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-152-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-152-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-153",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=133",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.151Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=133",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=133",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-153-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-153-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-153-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-154",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=134",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.151Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=134",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=134",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-154-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-154-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-154-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-155",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=135",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.152Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=135",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=135",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-155-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-155-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-155-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-156",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=136",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.152Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=136",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=136",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-156-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-156-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-156-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-157",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=137",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.152Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=137",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=137",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-157-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-157-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-157-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-158",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=138",pageType:"SHOP",title:"삼성 50인치 UHD TV",checkedAt:"2026-02-24T17:05:38.153Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=138",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=138",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-158-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-158-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-158-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-159",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=139",pageType:"SHOP",title:"LG 울트라기어 32인치 게이밍모니터",checkedAt:"2026-02-24T17:05:38.153Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=139",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=139",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-159-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-159-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-159-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-160",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=14",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:05:45.561Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 ��음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=14",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=14",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-160-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-160-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-160-2",title:"JSON-LD 스키마 ��음",description:"JSON-LD 스키마 ��음",level:"개선 필요"}]},{id:"row-161",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=140",pageType:"SHOP",title:"LG 울트라기어 32인치 게이밍모니터",checkedAt:"2026-02-24T17:05:45.562Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=140",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=140",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-161-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-161-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-161-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-162",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=141",pageType:"SHOP",title:"LG 울트라기어 32인치 게이밍모니터",checkedAt:"2026-02-24T17:05:45.563Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=141",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=141",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-162-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-162-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-162-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-163",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=142",pageType:"SHOP",title:"LG 울트라기어 32인치 게이밍모니터",checkedAt:"2026-02-24T17:05:45.564Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=142",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=142",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-163-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-163-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-163-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-164",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=143",pageType:"SHOP",title:"LG 울트라기어 32인치 게이밍모니터",checkedAt:"2026-02-24T17:05:45.564Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=143",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=143",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-164-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-164-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-164-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-165",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=144",pageType:"SHOP",title:"스마트뷰 32인치 HD TV",checkedAt:"2026-02-24T17:05:45.565Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=144",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=144",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-165-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-165-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-165-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-166",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=145",pageType:"SHOP",title:"스마트뷰 32인치 HD TV",checkedAt:"2026-02-24T17:05:45.566Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=145",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=145",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-166-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-166-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-166-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-167",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=146",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:45.566Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=146",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=146",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-167-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-167-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-167-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-168",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=147",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:45.567Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=147",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=147",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-168-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-168-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-168-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-169",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=148",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:45.567Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=148",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=148",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-169-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-169-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-169-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-170",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=149",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.405Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=149",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=149",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-170-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-170-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-170-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-171",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=15",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:05:54.406Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=15",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=15",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-171-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-171-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-171-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-172",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=150",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.406Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=150",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=150",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-172-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-172-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-172-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-173",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=151",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.407Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=151",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=151",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-173-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-173-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-173-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-174",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=152",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.408Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=152",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=152",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-174-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-174-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-174-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-175",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=153",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.409Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=153",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=153",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-175-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-175-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-175-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-176",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=154",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.410Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=154",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=154",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-176-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-176-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-176-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-177",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=155",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.411Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=155",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=155",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-177-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-177-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-177-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-178",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=156",pageType:"SHOP",title:"LG 퓨리케어 360도 공기청정기(18평형)",checkedAt:"2026-02-24T17:05:54.411Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=156",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=156",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-178-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-178-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-178-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-179",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=157",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:05:54.411Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=157",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=157",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-179-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-179-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-179-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-180",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=158",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.580Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=158",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=158",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-180-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-180-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-180-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-181",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=159",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.581Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=159",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=159",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-181-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-181-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-181-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-182",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=16",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:06:45.582Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=16",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=16",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-182-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-182-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-182-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-183",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=160",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.582Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=160",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=160",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-183-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-183-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-183-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-184",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=161",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.583Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=161",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=161",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-184-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-184-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-184-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-185",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=162",pageType:"SHOP",title:"LG 휘센 제��기(20L)",checkedAt:"2026-02-24T17:06:45.583Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=162",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=162",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-185-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-185-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-185-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-186",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=163",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.584Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=163",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=163",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-186-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-186-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-186-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-187",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=164",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.584Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=164",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=164",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-187-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-187-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-187-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-188",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=165",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.585Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=165",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=165",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-188-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-188-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-188-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-189",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=166",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:45.585Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=166",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=166",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-189-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-189-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-189-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-190",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=167",pageType:"SHOP",title:"LG 휘센 제습기(20L)",checkedAt:"2026-02-24T17:06:52.518Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=167",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=167",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-190-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-190-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-190-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-191",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=17",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:06:52.519Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=17",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=17",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-191-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-191-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-191-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-192",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=173",pageType:"SHOP",title:"에어팟 4세대 액티브 노이즈 캔슬링",checkedAt:"2026-02-24T17:06:52.519Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=173",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=173",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-192-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-192-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-192-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-193",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=174",pageType:"SHOP",title:"에어팟 4세대 액티브 노이즈 캔슬링",checkedAt:"2026-02-24T17:06:52.520Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=174",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=174",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-193-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-193-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-193-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-194",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=175",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:52.521Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=175",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=175",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-194-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-194-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-194-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-195",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=176",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:52.521Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=176",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=176",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-195-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-195-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-195-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-196",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=177",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:52.522Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=177",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=177",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-196-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-196-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-196-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-197",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=178",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:52.522Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=178",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=178",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-197-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-197-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-197-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-198",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=179",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:52.523Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=179",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=179",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-198-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-198-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-198-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-199",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=18",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:06:52.523Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=18",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=18",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-199-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-199-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-199-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-200",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=180",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:59.192Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=180",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=180",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-200-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-200-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-200-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-201",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=181",pageType:"SHOP",title:"에어팟 프로 3세대",checkedAt:"2026-02-24T17:06:59.193Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=181",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=181",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-201-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-201-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-201-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-202",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=182",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.193Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=182",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=182",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-202-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-202-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-202-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-203",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=183",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.194Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=183",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=183",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-203-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-203-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-203-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-204",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=184",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.194Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=184",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=184",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-204-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-204-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-204-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-205",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=185",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.195Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=185",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=185",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-205-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-205-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-205-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-206",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=186",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.195Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=186",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=186",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-206-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-206-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-206-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-207",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=187",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.196Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=187",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=187",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-207-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-207-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-207-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-208",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=188",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.196Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=188",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=188",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-208-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-208-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-208-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-209",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=189",pageType:"SHOP",title:"LG 65인치 UHD TV",checkedAt:"2026-02-24T17:06:59.197Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=189",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=189",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-209-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-209-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-209-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-210",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=19",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:07:05.980Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=19",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=19",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-210-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-210-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-210-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-211",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=190",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.980Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=190",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=190",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-211-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-211-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-211-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-212",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=191",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.981Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=191",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=191",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-212-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-212-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-212-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-213",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=192",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.982Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=192",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=192",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-213-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-213-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-213-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-214",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=193",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.982Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=193",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=193",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-214-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-214-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-214-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-215",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=194",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.983Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=194",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=194",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-215-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-215-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-215-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-216",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=195",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.983Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=195",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=195",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-216-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-216-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-216-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-217",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=196",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.984Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=196",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=196",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-217-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-217-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-217-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-218",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=197",pageType:"SHOP",title:"삼성 65인치 UHD TV",checkedAt:"2026-02-24T17:07:05.985Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=197",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=197",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-218-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-218-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-218-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-219",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=198",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:05.986Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=198",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=198",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-219-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-219-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-219-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-220",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=199",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.732Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=199",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=199",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-220-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-220-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-220-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-221",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=2",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:07:12.733Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=2",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=2",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-221-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-221-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-221-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-222",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=20",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:07:12.734Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=20",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=20",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-222-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-222-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-222-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-223",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=200",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.737Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=200",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=200",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-223-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-223-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-223-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-224",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=201",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.738Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=201",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=201",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-224-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-224-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-224-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-225",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=202",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.739Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=202",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=202",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-225-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-225-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-225-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-226",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=203",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.739Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=203",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=203",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-226-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-226-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-226-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-227",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=204",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.740Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=204",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=204",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-227-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-227-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-227-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-228",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=205",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.741Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=205",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=205",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-228-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-228-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-228-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-229",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=206",pageType:"SHOP",title:"초소형 직수 냉온정수기",checkedAt:"2026-02-24T17:07:12.742Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=206",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=206",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-229-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-229-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-229-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-230",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=207",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.180Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=207",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=207",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-230-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-230-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-230-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-231",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=208",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.181Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=208",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=208",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-231-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-231-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-231-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-232",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=209",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.181Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=209",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=209",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-232-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-232-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-232-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-233",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=21",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:07:21.182Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=21",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=21",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-233-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-233-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-233-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-234",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=210",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.182Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=210",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=210",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-234-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-234-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-234-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-235",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=211",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.184Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=211",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=211",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-235-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-235-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-235-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-236",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=212",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.184Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=212",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=212",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-236-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-236-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-236-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-237",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=213",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.185Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=213",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=213",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-237-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-237-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-237-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-238",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=214",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.185Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=214",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=214",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-238-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-238-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-238-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-239",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=215",pageType:"SHOP",title:"초소형 플러스 직수 냉온정수기",checkedAt:"2026-02-24T17:07:21.186Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=215",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=215",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-239-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-239-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-239-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-240",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=216",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.464Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=216",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=216",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-240-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-240-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-240-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-241",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=217",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.466Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=217",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=217",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-241-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-241-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-241-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-242",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=218",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.466Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=218",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=218",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-242-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-242-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-242-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-243",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=219",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.467Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=219",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=219",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-243-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-243-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-243-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-244",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=22",pageType:"SHOP",title:"삼성 55인치 UHD TV",checkedAt:"2026-02-24T17:08:13.467Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=22",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=22",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-244-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-244-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-244-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-245",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=220",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.468Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=220",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=220",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-245-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-245-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-245-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-246",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=221",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.468Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=221",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=221",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-246-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-246-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-246-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-247",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=222",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.469Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=222",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=222",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-247-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-247-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-247-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-248",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=223",pageType:"SHOP",title:"다이슨 에어랩 i.d.™ 멀티 스타일러 앤 드라이어",checkedAt:"2026-02-24T17:08:13.470Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=223",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=223",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-248-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-248-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-248-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-249",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=224",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:13.470Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=224",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=224",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-249-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-249-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-249-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-250",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=225",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.959Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=225",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=225",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-250-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-250-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-250-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-251",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=226",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.960Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=226",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=226",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-251-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-251-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-251-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-252",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=227",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.960Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=227",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=227",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-252-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-252-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-252-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-253",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=228",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.961Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=228",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=228",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-253-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-253-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-253-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-254",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=229",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.961Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=229",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=229",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-254-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-254-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-254-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-255",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=23",pageType:"SHOP",title:"삼성 무빙스타일 M7 라이트(B tv 무빙)",checkedAt:"2026-02-24T17:08:19.962Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=23",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=23",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-255-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-255-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-255-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-256",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=230",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.962Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=230",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=230",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-256-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-256-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-256-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-257",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=231",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 R5",checkedAt:"2026-02-24T17:08:19.963Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=231",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=231",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-257-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-257-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-257-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-258",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=232",pageType:"SHOP",title:"아이폰 17 Pro(256GB/자급제)",checkedAt:"2026-02-24T17:08:19.963Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=232",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=232",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-258-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-258-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-258-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-259",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=233",pageType:"SHOP",title:"아이폰 17 Pro(256GB/자급제)",checkedAt:"2026-02-24T17:08:19.964Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=233",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=233",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-259-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-259-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-259-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-260",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=234",pageType:"SHOP",title:"아이폰 17 Pro(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.555Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=234",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=234",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-260-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-260-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-260-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-261",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=235",pageType:"SHOP",title:"아이폰 17 Pro(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.556Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=235",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=235",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-261-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-261-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-261-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-262",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=236",pageType:"SHOP",title:"아이폰 17 Pro(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.557Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=236",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=236",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-262-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-262-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-262-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-263",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=237",pageType:"SHOP",title:"아이폰 17 Pro(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.557Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=237",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=237",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-263-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-263-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-263-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-264",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=238",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.558Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=238",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=238",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-264-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-264-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-264-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-265",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=239",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.558Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=239",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=239",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-265-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-265-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-265-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-266",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=24",pageType:"SHOP",title:"삼성 무빙스타일 M7 라이트(B tv 무빙)",checkedAt:"2026-02-24T17:08:26.561Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=24",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=24",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-266-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-266-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-266-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-267",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=240",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.562Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=240",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=240",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-267-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-267-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-267-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-268",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=241",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.562Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=241",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=241",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-268-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-268-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-268-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-269",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=242",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:26.563Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=242",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=242",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-269-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-269-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-269-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-270",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=243",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:33.134Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=243",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=243",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-270-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-270-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-270-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-271",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=244",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:33.135Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=244",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=244",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-271-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-271-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-271-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-272",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=245",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:33.135Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=245",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=245",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-272-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-272-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-272-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-273",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=246",pageType:"SHOP",title:"삼성 갤럭시 S25(256GB/자급제)",checkedAt:"2026-02-24T17:08:33.136Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=246",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=246",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-273-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-273-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-273-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-274",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=247",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:33.137Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=247",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=247",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-274-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-274-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-274-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-275",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=248",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:33.137Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=248",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=248",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-275-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-275-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-275-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-276",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=249",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:33.138Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=249",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=249",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-276-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-276-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-276-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-277",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=25",pageType:"SHOP",title:"삼성 무빙스타일 M7 라이트(B tv 무빙)",checkedAt:"2026-02-24T17:08:33.138Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=25",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=25",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-277-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-277-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-277-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-278",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=250",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:33.139Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=250",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=250",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-278-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-278-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-278-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-279",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=251",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:33.139Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=251",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=251",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-279-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-279-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-279-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-280",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=252",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:39.935Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=252",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=252",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-280-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-280-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-280-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-281",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=253",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:39.936Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=253",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=253",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-281-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-281-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-281-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-282",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=254",pageType:"SHOP",title:"LG 75인치 UHD TV",checkedAt:"2026-02-24T17:08:39.937Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=254",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=254",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-282-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-282-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-282-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-283",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=255",pageType:"SHOP",title:"삼성 75인치 QLED TV",checkedAt:"2026-02-24T17:08:39.938Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=255",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=255",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-283-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-283-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-283-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-284",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=256",pageType:"SHOP",title:"삼성 75인치 QLED TV",checkedAt:"2026-02-24T17:08:39.939Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=256",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=256",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-284-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-284-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-284-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-285",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=257",pageType:"SHOP",title:"삼성 75인치 QLED TV",checkedAt:"2026-02-24T17:08:39.940Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=257",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=257",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-285-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-285-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-285-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-286",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=258",pageType:"SHOP",title:"삼성 75인치 QLED TV",checkedAt:"2026-02-24T17:08:39.940Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=258",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=258",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-286-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-286-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-286-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-287",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=259",pageType:"SHOP",title:"삼성 75인치 QLED TV",checkedAt:"2026-02-24T17:08:39.941Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=259",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=259",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-287-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-287-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-287-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-288",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=26",pageType:"SHOP",title:"삼성 무빙스타일 M7 라이트(B tv 무빙)",checkedAt:"2026-02-24T17:08:39.942Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=26",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=26",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-288-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-288-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-288-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-289",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=260",pageType:"SHOP",title:"삼성 75인치 QLED TV",checkedAt:"2026-02-24T17:08:39.942Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=260",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=260",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-289-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-289-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-289-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-290",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=261",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.922Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=261",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=261",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-290-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-290-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-290-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-291",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=262",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.922Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=262",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=262",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-291-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-291-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-291-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-292",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=263",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.923Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=263",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=263",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-292-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-292-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-292-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-293",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=264",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.924Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=264",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=264",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-293-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-293-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-293-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-294",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=265",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.924Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=265",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=265",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-294-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-294-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-294-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-295",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=266",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.926Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=266",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=266",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-295-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-295-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-295-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-296",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=267",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.926Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=267",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=267",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-296-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-296-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-296-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-297",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=268",pageType:"SHOP",title:"LG 스탠바이미",checkedAt:"2026-02-24T17:08:47.927Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=268",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=268",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-297-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-297-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-297-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-298",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=269",pageType:"SHOP",title:"LG 스탠���이미 Go",checkedAt:"2026-02-24T17:08:47.928Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=269",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=269",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-298-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-298-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-298-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-299",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=27",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:08:47.928Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=27",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=27",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-299-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-299-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-299-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-300",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=270",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.900Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=270",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=270",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-300-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-300-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-300-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-301",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=271",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.901Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=271",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=271",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-301-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-301-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-301-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-302",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=272",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.902Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=272",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=272",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-302-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-302-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-302-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-303",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=273",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.902Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=273",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=273",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-303-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-303-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-303-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-304",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=274",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.903Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=274",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=274",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-304-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-304-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-304-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-305",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=275",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.904Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=275",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=275",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-305-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-305-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-305-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-306",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=276",pageType:"SHOP",title:"LG 스탠바이미 Go",checkedAt:"2026-02-24T17:09:31.904Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=276",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=276",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-306-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-306-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-306-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-307",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=277",pageType:"SHOP",title:"LG 시네빔 쇼츠",checkedAt:"2026-02-24T17:09:31.905Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=277",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=277",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-307-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-307-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-307-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-308",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=278",pageType:"SHOP",title:"LG 시네빔 쇼츠",checkedAt:"2026-02-24T17:09:31.905Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=278",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=278",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-308-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-308-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-308-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-309",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=279",pageType:"SHOP",title:"LG 시네빔 쇼츠",checkedAt:"2026-02-24T17:09:31.906Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=279",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=279",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-309-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-309-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-309-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-310",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=28",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:09:38.336Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=28",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=28",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-310-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-310-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-310-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-311",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=280",pageType:"SHOP",title:"LG 시네빔 쇼츠",checkedAt:"2026-02-24T17:09:38.337Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=280",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=280",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-311-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-311-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-311-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-312",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=281",pageType:"SHOP",title:"LG 시네빔 쇼츠",checkedAt:"2026-02-24T17:09:38.337Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=281",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=281",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-312-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-312-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-312-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-313",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=282",pageType:"SHOP",title:"LG 시네빔 쇼츠",checkedAt:"2026-02-24T17:09:38.338Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=282",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=282",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-313-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-313-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-313-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-314",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=283",pageType:"SHOP",title:"LG 오브제컬렉션 스타일러(5벌)",checkedAt:"2026-02-24T17:09:38.338Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=283",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=283",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-314-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-314-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-314-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-315",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=284",pageType:"SHOP",title:"LG 오브제컬렉션 스타일러(5벌)",checkedAt:"2026-02-24T17:09:38.339Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=284",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=284",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-315-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-315-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-315-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-316",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=285",pageType:"SHOP",title:"LG 오브제컬렉션 스타일러(5벌)",checkedAt:"2026-02-24T17:09:38.339Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=285",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=285",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-316-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-316-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-316-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-317",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=286",pageType:"SHOP",title:"LG 오브제컬렉션 스타일러(5벌)",checkedAt:"2026-02-24T17:09:38.340Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=286",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=286",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-317-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-317-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-317-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-318",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=287",pageType:"SHOP",title:"LG 오브제컬렉션 스타일러(5벌)",checkedAt:"2026-02-24T17:09:38.340Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=287",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=287",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-318-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-318-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-318-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-319",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=288",pageType:"SHOP",title:"LG 오브제컬렉션 스타일러(5벌)",checkedAt:"2026-02-24T17:09:38.340Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=288",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=288",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-319-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-319-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-319-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-320",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=289",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.849Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=289",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=289",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-320-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-320-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-320-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-321",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=29",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:09:44.850Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=29",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=29",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-321-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-321-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-321-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-322",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=290",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.850Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=290",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=290",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-322-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-322-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-322-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-323",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=291",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.851Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=291",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=291",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-323-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-323-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-323-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-324",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=292",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.853Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=292",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=292",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-324-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-324-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-324-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-325",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=293",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.854Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=293",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=293",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-325-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-325-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-325-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-326",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=294",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.855Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=294",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=294",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-326-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-326-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-326-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-327",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=295",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.856Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=295",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=295",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-327-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-327-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-327-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-328",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=296",pageType:"SHOP",title:"LG 일반냉장고 오브제컬렉션(335L)",checkedAt:"2026-02-24T17:09:44.861Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=296",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=296",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-328-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-328-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-328-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-329",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=297",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:44.862Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=297",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=297",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-329-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-329-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-329-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-330",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=298",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.006Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=298",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=298",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-330-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-330-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-330-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-331",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=299",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.007Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=299",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=299",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-331-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-331-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-331-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-332",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=3",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:09:51.007Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누��� | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=3",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=3",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-332-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-332-1",title:"canonical 누���",description:"canonical 누���",level:"개선 필요"},{id:"issue-332-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-333",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=30",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:09:51.008Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=30",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=30",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-333-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-333-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-333-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-334",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=300",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.008Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=300",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=300",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-334-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-334-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-334-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-335",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=301",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.009Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=301",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=301",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-335-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-335-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-335-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-336",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=302",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.009Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=302",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=302",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-336-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-336-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-336-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-337",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=303",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.010Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=303",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=303",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-337-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-337-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-337-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-338",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=304",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.010Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=304",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=304",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-338-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-338-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-338-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-339",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=305",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:51.011Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=305",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=305",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-339-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-339-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-339-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-340",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=306",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.317Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=306",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=306",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-340-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-340-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-340-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-341",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=307",pageType:"SHOP",title:"아이패드 A16 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.318Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=307",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=307",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-341-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-341-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-341-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-342",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=308",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.319Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=308",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=308",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-342-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-342-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-342-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-343",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=309",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.319Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=309",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=309",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-343-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-343-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-343-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-344",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=31",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:09:57.320Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=31",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=31",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-344-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-344-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-344-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-345",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=310",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.320Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=310",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=310",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-345-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-345-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-345-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-346",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=311",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.321Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=311",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=311",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-346-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-346-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-346-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-347",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=312",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.321Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=312",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=312",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-347-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-347-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-347-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-348",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=313",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.322Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 ���음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=313",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=313",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-348-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-348-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-348-2",title:"JSON-LD 스키마 ���음",description:"JSON-LD 스키마 ���음",level:"개선 필요"}]},{id:"row-349",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=314",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:09:57.322Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=314",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=314",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-349-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-349-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-349-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-350",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=315",pageType:"SHOP",title:"아이패드 에어 11 M3 Wi-Fi(128GB)",checkedAt:"2026-02-24T17:10:04.399Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=315",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=315",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-350-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-350-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-350-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-351",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=316",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.400Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=316",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=316",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-351-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-351-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-351-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-351-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-352",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=317",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.401Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=317",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=317",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-352-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-352-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-352-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-352-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-353",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=318",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.401Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=318",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=318",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-353-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-353-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-353-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-353-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-354",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=319",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.402Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=319",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=319",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-354-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-354-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-354-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-354-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-355",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=32",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:10:04.402Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=32",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=32",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-355-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-355-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-355-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-356",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=320",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.403Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=320",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=320",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-356-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-356-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-356-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-356-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-357",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=321",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.403Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=321",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=321",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-357-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-357-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-357-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-357-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-358",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=322",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.404Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=322",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=322",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-358-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-358-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-358-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-358-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-359",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=323",pageType:"SHOP",title:"에어팟 맥스",checkedAt:"2026-02-24T17:10:04.405Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=323",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=323",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-359-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-359-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-359-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-359-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-360",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=33",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:10:50.661Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=33",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=33",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-360-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-360-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-360-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-361",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=34",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:10:50.662Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=34",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=34",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-361-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-361-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-361-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-362",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=35",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:10:50.662Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=35",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=35",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-362-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-362-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-362-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-363",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=357",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:50.663Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=357",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=357",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-363-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-363-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-363-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-363-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-363-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-364",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=358",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:50.663Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=358",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=358",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-364-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-364-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-364-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-364-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-364-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-365",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=359",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:50.664Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=359",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=359",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-365-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-365-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-365-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-365-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-365-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-366",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=36",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:10:50.664Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=36",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=36",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-366-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-366-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-366-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-367",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=360",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:50.665Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=360",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=360",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-367-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-367-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-367-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-367-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-367-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-368",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=361",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:50.665Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=361",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=361",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-368-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-368-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-368-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-368-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-368-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-369",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=362",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:50.667Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=362",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=362",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-369-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-369-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-369-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-369-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-369-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-370",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=363",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:57.132Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=363",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=363",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-370-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-370-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-370-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-370-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-370-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-371",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=364",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:57.132Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=364",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=364",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-371-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-371-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-371-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-371-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-371-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-372",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=365",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:57.133Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=365",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=365",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-372-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-372-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-372-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-372-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-372-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-373",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=366",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:57.133Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=366",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=366",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-373-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-373-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-373-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-373-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-373-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-374",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=367",pageType:"SHOP",title:"네이버페이 상품권",checkedAt:"2026-02-24T17:10:57.134Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=367",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=367",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-374-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-374-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-374-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-374-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-374-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-375",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=368",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:10:57.134Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=368",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=368",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-375-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-375-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-375-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-375-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-375-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-376",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=369",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:10:57.135Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=369",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=369",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-376-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-376-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-376-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-376-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-376-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-377",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=37",pageType:"SHOP",title:"뉴미니 직수 정수기",checkedAt:"2026-02-24T17:10:57.135Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=37",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=37",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-377-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-377-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-377-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-378",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=370",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:10:57.136Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=370",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=370",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-378-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-378-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-378-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-378-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-378-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-379",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=371",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:10:57.136Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=371",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=371",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-379-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-379-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-379-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-379-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-379-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-380",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=372",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.261Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=372",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=372",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-380-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-380-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-380-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-380-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-380-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-381",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=373",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.262Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=373",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=373",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-381-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-381-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-381-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-381-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-381-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-382",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=374",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.262Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=374",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=374",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-382-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-382-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-382-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-382-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-382-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-383",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=375",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.263Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=375",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=375",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-383-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-383-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-383-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-383-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-383-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-384",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=376",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.263Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=376",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=376",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-384-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-384-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-384-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-384-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-384-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-385",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=377",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.264Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=377",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=377",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-385-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-385-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-385-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-385-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-385-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-386",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=378",pageType:"SHOP",title:"롯데 모바일 상품권",checkedAt:"2026-02-24T17:11:04.264Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=378",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=378",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-386-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-386-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-386-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-386-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-386-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-387",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=379",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:04.266Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=379",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=379",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-387-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-387-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-387-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-387-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-387-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-388",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=38",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:04.266Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=38",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=38",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-388-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-388-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-388-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-389",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=380",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:04.267Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=380",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=380",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-389-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-389-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-389-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-389-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-389-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-390",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=381",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.936Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=381",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=381",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-390-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-390-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-390-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-390-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-390-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-391",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=382",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.937Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=382",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=382",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-391-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-391-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-391-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-391-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-391-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-392",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=383",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.945Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=383",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=383",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-392-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-392-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-392-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-392-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-392-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-393",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=384",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.946Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=384",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=384",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-393-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-393-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-393-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-393-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-393-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-394",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=385",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.947Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=385",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=385",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-394-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-394-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-394-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-394-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-394-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-395",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=386",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.948Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=386",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=386",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-395-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-395-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-395-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-395-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-395-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-396",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=387",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.948Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=387",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=387",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-396-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-396-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-396-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-396-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-396-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-397",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=388",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.949Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=388",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=388",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-397-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-397-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-397-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-397-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-397-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-398",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=389",pageType:"SHOP",title:"신세계 모바일 상품권",checkedAt:"2026-02-24T17:11:10.950Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=389",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=389",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-398-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-398-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-398-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-398-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-398-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-399",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=39",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:10.951Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=39",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=39",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-399-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-399-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-399-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-400",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=390",pageType:"SHOP",title:"LG 퓨리케어 자연기화식 가습기(11평형)",checkedAt:"2026-02-24T17:11:17.236Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=390",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=390",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-400-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-400-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-400-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-401",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=391",pageType:"SHOP",title:"LG 퓨리케어 자연기화식 가습기(11평형)",checkedAt:"2026-02-24T17:11:17.237Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=391",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=391",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-401-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-401-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-401-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-402",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=392",pageType:"SHOP",title:"LG 퓨리케어 자연기화식 가습기(11평형)",checkedAt:"2026-02-24T17:11:17.237Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=392",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=392",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-402-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-402-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-402-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-403",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=393",pageType:"SHOP",title:"LG 퓨리케어 자연기화식 가습기(11평형)",checkedAt:"2026-02-24T17:11:17.238Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=393",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=393",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-403-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-403-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-403-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-404",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=394",pageType:"SHOP",title:"LG 퓨리케어 자연기화식 가습기(11평형)",checkedAt:"2026-02-24T17:11:17.238Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=394",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=394",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-404-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-404-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-404-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-405",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=4",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:11:17.239Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=4",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=4",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-405-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-405-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-405-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-406",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=40",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:17.239Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=40",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=40",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-406-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-406-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-406-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-407",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=41",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:17.240Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=41",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=41",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-407-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-407-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-407-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-408",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=42",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:17.240Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=42",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=42",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-408-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-408-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-408-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-409",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=43",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:17.241Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=43",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=43",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-409-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-409-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-409-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-410",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=44",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:24.255Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=44",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=44",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-410-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-410-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-410-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-411",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=45",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:24.256Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=45",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=45",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-411-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-411-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-411-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-412",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=46",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:24.257Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=46",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=46",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-412-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-412-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-412-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-413",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=47",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:24.258Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=47",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=47",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-413-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-413-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-413-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-414",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=48",pageType:"SHOP",title:"풀스텐 살균 비데",checkedAt:"2026-02-24T17:11:24.259Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=48",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=48",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-414-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-414-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-414-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-415",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=49",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:11:24.259Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=49",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=49",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-415-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-415-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-415-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-416",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=5",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:11:24.263Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=5",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=5",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-416-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-416-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-416-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-417",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=50",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:11:24.264Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=50",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=50",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-417-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-417-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-417-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-418",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=51",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:11:24.266Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=51",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=51",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-418-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-418-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-418-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-419",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=52",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:11:24.268Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=52",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=52",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-419-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-419-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-419-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-420",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=53",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.172Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=53",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=53",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-420-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-420-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-420-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-421",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=54",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.173Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=54",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=54",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-421-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-421-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-421-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-422",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=55",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.174Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=55",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=55",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-422-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-422-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-422-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-423",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=56",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.175Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=56",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=56",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-423-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-423-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-423-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-424",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=57",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.175Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=57",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=57",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-424-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-424-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-424-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-425",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=58",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.176Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=58",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=58",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-425-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-425-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-425-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-426",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=59",pageType:"SHOP",title:"LG 퓨리케어 오브제컬렉션 에어로퍼니처",checkedAt:"2026-02-24T17:12:16.176Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=59",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=59",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-426-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-426-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-426-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-427",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=6",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:12:16.177Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=6",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=6",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-427-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-427-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-427-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-428",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=60",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:16.177Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=60",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=60",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-428-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-428-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-428-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-429",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=61",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:16.179Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=61",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=61",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-429-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-429-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-429-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-430",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=62",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.562Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=62",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=62",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-430-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-430-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-430-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-431",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=63",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.563Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=63",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=63",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-431-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-431-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-431-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-432",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=64",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.564Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=64",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=64",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-432-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-432-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-432-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-433",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=65",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.565Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=65",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=65",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-433-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-433-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-433-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-434",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=66",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.566Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=66",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=66",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-434-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-434-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-434-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-435",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=67",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.566Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=67",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=67",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-435-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-435-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-435-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-436",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=68",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.567Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=68",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=68",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-436-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-436-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-436-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-437",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=69",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.568Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=69",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=69",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-437-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-437-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-437-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-438",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=7",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:12:22.568Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=7",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=7",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-438-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-438-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-438-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-439",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=70",pageType:"SHOP",title:"LG 코드제로 오브제컬렉션 A7 청소기",checkedAt:"2026-02-24T17:12:22.569Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=70",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=70",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-439-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-439-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-439-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-440",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=71",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.376Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=71",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=71",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-440-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-440-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-440-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-441",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=72",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.377Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=72",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=72",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-441-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-441-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-441-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-442",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=73",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.377Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=73",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=73",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-442-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-442-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-442-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-443",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=74",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.378Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=74",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=74",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-443-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-443-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-443-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-444",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=75",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.379Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=75",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=75",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-444-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-444-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-444-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-445",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=76",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.379Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=76",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=76",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-445-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-445-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-445-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-446",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=77",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.380Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=77",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=77",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-446-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-446-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-446-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-447",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=78",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.380Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=78",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=78",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-447-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-447-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-447-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-448",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=79",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:29.381Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=79",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=79",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-448-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-448-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-448-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-449",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=8",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:12:29.382Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=8",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=8",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-449-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-449-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-449-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-450",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=80",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:36.025Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=80",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=80",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-450-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-450-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-450-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-451",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=81",pageType:"SHOP",title:"다이슨 슈퍼소닉 니켈코퍼(HD15)",checkedAt:"2026-02-24T17:12:36.026Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=81",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=81",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-451-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-451-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-451-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-452",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=82",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.026Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=82",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=82",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-452-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-452-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-452-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-453",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=83",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.027Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=83",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=83",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-453-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-453-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-453-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-454",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=84",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.027Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=84",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=84",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-454-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-454-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-454-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-455",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=85",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.028Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=85",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=85",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-455-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-455-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-455-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-456",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=86",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.028Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=86",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=86",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-456-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-456-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-456-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-457",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=87",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.029Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=87",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=87",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-457-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-457-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-457-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-458",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=88",pageType:"SHOP",title:"다이슨 싸이클론 V8 무선청소기",checkedAt:"2026-02-24T17:12:36.029Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=88",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=88",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-458-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-458-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-458-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-459",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=89",pageType:"SHOP",title:"샤크 플렉스타일 에어 스타일러",checkedAt:"2026-02-24T17:12:36.030Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=89",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=89",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-459-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-459-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-459-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-460",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=9",pageType:"SHOP",title:"LG 50인치 UHD TV",checkedAt:"2026-02-24T17:12:42.917Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=9",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=9",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-460-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-460-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-460-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-461",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=90",pageType:"SHOP",title:"샤크 플렉스타일 에어 스타일러",checkedAt:"2026-02-24T17:12:42.918Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=90",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=90",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-461-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-461-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-461-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-462",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=91",pageType:"SHOP",title:"샤크 플렉스타일 에어 스타일러",checkedAt:"2026-02-24T17:12:42.919Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=91",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=91",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-462-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-462-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-462-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-463",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=92",pageType:"SHOP",title:"샤크 플렉스타일 에어 스타일러",checkedAt:"2026-02-24T17:12:42.919Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=92",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=92",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-463-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-463-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-463-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-464",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=93",pageType:"SHOP",title:"샤크 플렉스타일 에어 스타일러",checkedAt:"2026-02-24T17:12:42.920Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없��",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=93",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=93",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-464-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-464-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-464-2",title:"JSON-LD 스키마 없��",description:"JSON-LD 스키마 없��",level:"개선 필요"}]},{id:"row-465",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=94",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T17:12:42.920Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=94",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=94",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-465-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-465-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-465-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-466",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=95",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T17:12:42.921Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=95",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=95",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-466-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-466-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-466-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-467",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=96",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T17:12:42.922Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=96",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=96",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-467-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-467-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-467-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-468",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=97",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T17:12:42.923Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=97",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=97",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-468-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-468-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-468-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-469",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=98",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T17:12:42.923Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=98",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=98",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-469-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-469-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-469-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-470",url:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=99",pageType:"SHOP",title:"샤크 하이드로백 물걸레 청소기",checkedAt:"2026-02-24T17:12:50.005Z",issueCount:3,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=99",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift_detail.do?comboSeq=99",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-470-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-470-1",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-470-2",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-471",url:"https://www.bworld.co.kr/shop/gift/gift.do",pageType:"SHOP",title:"가입 사은품 < B 다이렉트샵 | B world",checkedAt:"2026-02-24T17:12:50.006Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/gift/gift.do",redirectChainFinal:"https://www.bworld.co.kr/shop/gift/gift.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-471-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-471-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-471-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-471-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-471-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-472",url:"https://www.bworld.co.kr/shop/hp/usim_index.do",pageType:"SHOP",title:"휴대폰 유심 변경하면 추가 사���품 35만원과 결합 할인 혜택까지",checkedAt:"2026-02-24T17:12:50.007Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/hp/usim_index.do",redirectChainFinal:"https://www.bworld.co.kr/shop/hp/usim_index.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-472-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-472-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-472-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-472-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-473",url:"https://www.bworld.co.kr/shop/join/add/authinfo.do",pageType:"SHOP",title:"본인확인 < 바로가입 < B 다이렉트샵 | B world",checkedAt:"2026-02-24T17:12:50.007Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/join/add/authinfo.do",redirectChainFinal:"https://www.bworld.co.kr/shop/join/add/authinfo.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-473-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-473-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-473-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-473-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-474",url:"https://www.bworld.co.kr/shop/join/new/prd.do",pageType:"SHOP",title:"SK브로드밴드 공식 온라인샵",checkedAt:"2026-02-24T17:12:50.008Z",issueCount:4,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 50자 미만 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"SHOP",pageTypeHint:"shop",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/join/new/prd.do",redirectChainFinal:"https://www.bworld.co.kr/shop/join/new/prd.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-474-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-474-1",title:"meta_description 50자 미만",description:"meta_description 50자 미만",level:"개선 필요"},{id:"issue-474-2",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-474-3",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]},{id:"row-475",url:"https://www.bworld.co.kr/shop/join/product/prd_list.do",pageType:"PRODUCT",title:"바로가입 상품 < B 다이렉트샵 | B world",checkedAt:"2026-02-24T17:12:50.008Z",issueCount:5,level:"개선 필요",access:"PUBLIC",issueSummary:"H1 누락 | meta_description 누락 | og:description 누락 | canonical 누락 | JSON-LD 스키마 없음",httpStatus:"HTTP 200",indexing:'{"meta_robots":"not_set","x_robots_tag":"missing"}',ruleProfile:"PRODUCT",pageTypeHint:"product",notes:"-",finalUrl:"https://www.bworld.co.kr/shop/join/product/prd_list.do",redirectChainFinal:"https://www.bworld.co.kr/shop/join/product/prd_list.do",httpStatusNote:"OK",contentType:"text/html",schemaPresent:!1,schemaTypes:"-",sccIssues:'{"violations":["schema_missing: no ld+json"],"missing_fields":["JSON-LD missing"],"warnings":[]}',jsonLdSample:"-",issues:[{id:"issue-475-0",title:"H1 누락",description:`💡 [왜 수정해야 할까요?]
H1 태그는 책의 "제목"과 같습니다. 구글이나 네이버 같은 검색엔진은 H1 태그를 보고 이 페이지가 어떤 내용을 다루는지 가장 먼저 파악합니다. H1 태그가 없으면 검색엔진이 페이지의 핵심 주제를 이해하기 어려워 검색 결과에 잘 노출되지 않을 수 있습니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <body> 태그 안에서, 페이지의 가장 중요한 제목 부분에 <h1>페이지의 핵심 주제</h1> 형식으로 태그를 추가해 주세요. (예: <h1>SK브로드밴드 인터넷 요금제 안내</h1>)`,level:"개선 필요"},{id:"issue-475-1",title:"meta_description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-475-2",title:"og:description 누락",description:`💡 [왜 수정해야 할까요?]
메타 디스크립션은 검색 결과에서 파란색 제목 아래에 나오는 "회색 설명글"입니다. 사용자가 페이지에 방문하기 전, 어떤 내용을 볼 수 있는지 미리 알려주어 클릭을 유도하는 중요한 홍보 문구 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래 코드를 추가해 주세요.
<meta name="description" content="페이지의 핵심 내용을 요약한 설명글 (공백 포함 80~120자 내외 권장)">`,level:"개선 필요"},{id:"issue-475-3",title:"canonical 누락",description:`💡 [왜 수정해야 할까요?]
때로는 하나의 페이지가 여러 개의 주소(URL)로 접속될 수 있습니다. (예: www.bworld.co.kr 와 bworld.co.kr) 이럴 경우 검색엔진은 "어떤 주소가 진짜 원본이지?" 하고 혼란스러워하며, 검색 점수가 분산될 수 있습니다. Canonical(캐노니컬) 태그는 "이 주소가 진짜 원본이야!"라고 검색엔진에게 명확히 알려주는 역할을 합니다.

🛠️ [이렇게 수정해 보세요!]
HTML 코드의 <head> 태그 안에 아래와 같이 원본 URL을 지정하는 코드를 한 줄 추가해 주세요.
<link rel="canonical" href="현재 페이지의 진짜 원본 URL">`,level:"개선 필요"},{id:"issue-475-4",title:"JSON-LD 스키마 없음",description:"JSON-LD 스키마 없음",level:"개선 필요"}]}],Eo=v=>{switch(v){case"개선 필요":return"bg-red-50 text-red-600 border-red-100";case"주의":return"bg-amber-50 text-amber-600 border-amber-100";case"정상":return"bg-emerald-50 text-emerald-600 border-emerald-100";case"점검 제외":return"bg-zinc-100 text-zinc-500 border-zinc-200";case"정보":return"bg-blue-50 text-blue-600 border-blue-100";default:return"bg-zinc-50 text-zinc-600 border-zinc-200"}},Ru=v=>{switch(v){case"개선 필요":return"bg-red-500";case"주의":return"bg-amber-500";case"정상":return"bg-emerald-500";case"점검 제외":return"bg-zinc-400";case"정보":return"bg-blue-500";default:return"bg-zinc-400"}},zo=v=>v.schemaPresent?v.issues.some(P=>P.title.includes("스키마"))?{text:"보완 필요",color:"text-amber-500",bg:"bg-amber-50 text-amber-600 border-amber-200"}:{text:"정상",color:"text-emerald-500",bg:"bg-emerald-50 text-emerald-600 border-emerald-200"}:{text:"누락",color:"text-red-500",bg:"bg-red-50 text-red-600 border-red-200"};function Em(){const[v,I]=Ne.useState("Overview"),[P,m]=Ne.useState(null),[j,E]=Ne.useState("Summary"),[ne,ve]=Ne.useState(""),[x,y]=Ne.useState("이슈 전체"),[F,M]=Ne.useState("접근분류 전체"),[te,ze]=Ne.useState("우선순위 높은순"),[we,be]=Ne.useState(1),it=20,[xe,kt]=Ne.useState(!1),[De,Ge]=Ne.useState("2026-02-24 09:18"),wt=()=>{kt(!0),setTimeout(()=>{const T=new Date,B=`${T.getFullYear()}-${String(T.getMonth()+1).padStart(2,"0")}-${String(T.getDate()).padStart(2,"0")} ${String(T.getHours()).padStart(2,"0")}:${String(T.getMinutes()).padStart(2,"0")}`;Ge(B),kt(!1)},1500)},Ae=Ne.useMemo(()=>Du.slice(0,12),[]),Z=Ne.useMemo(()=>{let T=[...Du];if(ne){const B=ne.toLowerCase();T=T.filter(pe=>pe.url.toLowerCase().includes(B)||pe.title.toLowerCase().includes(B)||pe.ruleProfile.toLowerCase().includes(B)||pe.issueSummary.toLowerCase().includes(B))}return x==="이슈 있음"?T=T.filter(B=>B.issueCount>0):x==="이슈 없음"&&(T=T.filter(B=>B.issueCount===0)),F!=="접근분류 전체"&&(T=T.filter(B=>B.access===F)),te==="우선순위 높은순"?T.sort((B,pe)=>pe.issueCount-B.issueCount):te==="최신 점검순"?T.sort((B,pe)=>new Date(pe.checkedAt).getTime()-new Date(B.checkedAt).getTime()):te==="제목 가나다순"&&T.sort((B,pe)=>B.title.localeCompare(pe.title)),T},[ne,x,F,te]),_e=Math.ceil(Z.length/it),st=Ne.useMemo(()=>{const T=(we-1)*it;return Z.slice(T,T+it)},[Z,we]),Wt=()=>{const pe=(Math.ceil(we/5)-1)*5+1,S=Math.min(pe+5-1,_e),k=[];for(let R=pe;R<=S;R++)k.push(R);return k};Ne.useEffect(()=>{be(1)},[ne,x,F,te]);const mt=T=>{m(T),I("URL Audit List"),E("Summary")},Ke=()=>{if(!P)return null;switch(j){case"Summary":return u.jsxs("section",{className:"animate-in fade-in duration-300",children:[u.jsxs("div",{className:"flex justify-between items-end mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-[15px] font-bold text-zinc-900 uppercase tracking-wider",children:"Issue Breakdown"}),u.jsxs("p",{className:"text-[15px] text-zinc-500 mt-1.5",children:["총 ",u.jsx("strong",{className:"text-zinc-900 text-[15px] font-bold",children:P.issueCount}),"개 이슈를 항목별로 표시합니다."]})]}),P.issueCount>0&&u.jsxs("span",{className:`inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-bold border ${Eo(P.level)}`,children:[P.issueCount," - ",P.level]})]}),P.issues.length>0?u.jsx("div",{className:"space-y-4",children:P.issues.map((T,B)=>u.jsx("div",{className:`p-5 rounded-2xl border ${Eo(T.level)} bg-opacity-30 transition-all hover:bg-opacity-50`,children:u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("div",{className:`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold text-white shadow-sm ${Ru(T.level)}`,children:B+1}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-[15px] mb-3 text-zinc-900",children:T.title}),u.jsxs("div",{className:"bg-white/60 rounded-xl p-4 border border-zinc-200/60",children:[u.jsxs("div",{className:"text-[13px] font-bold text-zinc-800 mb-2 flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"수정 가이드"]}),u.jsx("p",{className:"text-[14px] leading-relaxed text-zinc-700 whitespace-pre-wrap",children:T.description})]})]})]})},T.id))}):u.jsxs("div",{className:"p-12 text-center border border-zinc-200 rounded-2xl bg-white shadow-sm",children:[u.jsx(Cu,{className:"w-12 h-12 text-emerald-400 mx-auto mb-4"}),u.jsx("p",{className:"text-zinc-800 font-bold text-lg",children:"발견된 이슈가 없습니다."}),u.jsx("p",{className:"text-[15px] text-zinc-500 mt-2",children:"이 페이지는 SEO/GEO 기준을 모두 충족합니다."})]})]});case"Technical":return u.jsx("div",{className:"grid grid-cols-2 gap-4 animate-in fade-in duration-300",children:[{label:"FINAL URL",value:P.finalUrl},{label:"REDIRECT CHAIN FINAL",value:P.redirectChainFinal},{label:"CHECKED AT",value:P.checkedAt},{label:"PAGE TYPE HINT",value:P.pageTypeHint},{label:"RULE PROFILE",value:P.ruleProfile},{label:"NOTES",value:P.notes},{label:"HTTP STATUS NOTE",value:P.httpStatusNote},{label:"CONTENT TYPE",value:P.contentType}].map((T,B)=>u.jsxs("div",{className:"p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-sm hover:border-zinc-300 transition-colors",children:[u.jsx("div",{className:"text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5",children:T.label}),T.label.includes("URL")?u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[15px] font-medium text-zinc-800 break-all leading-relaxed",children:T.value}),u.jsx("a",{href:T.value,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",title:"새창으로 열기",children:u.jsx(mc,{className:"w-3.5 h-3.5"})})]}):u.jsx("div",{className:"text-[15px] font-medium text-zinc-800 break-all leading-relaxed",children:T.value})]},B))});case"Schema(JSON-LD)":return u.jsxs("div",{className:"space-y-4 animate-in fade-in duration-300",children:[u.jsxs("div",{className:"p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-sm flex gap-3 items-center",children:[u.jsxs("span",{className:`px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide border ${zo(P).bg}`,children:["schema_status: ",zo(P).text]}),u.jsxs("span",{className:"px-3 py-1.5 rounded-full text-xs font-bold tracking-wide bg-zinc-100 text-zinc-600 border border-zinc-200",children:["schema_types: ",P.schemaTypes]})]}),u.jsxs("div",{className:"p-6 rounded-2xl border border-zinc-200/80 bg-white shadow-sm",children:[u.jsx("div",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3",children:"SCC ISSUES"}),u.jsx("div",{className:"bg-zinc-50 rounded-xl p-4 text-sm text-zinc-700 font-mono border border-zinc-100",children:P.sccIssues})]}),u.jsxs("div",{className:"p-6 rounded-2xl border border-zinc-200/80 bg-white shadow-sm",children:[u.jsx("div",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3",children:"JSON-LD SAMPLE"}),u.jsx("div",{className:"bg-zinc-50 rounded-xl p-4 text-sm text-zinc-700 font-mono whitespace-pre-wrap border border-zinc-100 overflow-x-auto",children:P.jsonLdSample})]})]});default:return null}};return u.jsxs("div",{className:"min-h-screen bg-[#fafafa] font-sans text-zinc-900 pb-16 selection:bg-zinc-200",children:[u.jsx("header",{className:"bg-white border-b border-zinc-200/80 px-8 py-5 sticky top-0 z-20 shadow-sm",children:u.jsxs("div",{className:"max-w-[1500px] mx-auto flex justify-between items-start",children:[u.jsxs("div",{className:"flex items-center gap-5",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/hakhoonkim/mcp-test/99e7e2df21c81d50cc59d993bf2247d8b0d6c1de/logo.png",alt:"B world Logo",className:"h-8 w-auto object-contain",onError:T=>{T.target.src="https://www.bworld.co.kr/img/common/logo.png"}}),u.jsx("div",{className:"w-px h-6 bg-zinc-300"})]}),u.jsx("h1",{className:"text-[25px] font-bold tracking-tight text-zinc-900",children:"B world SEO/GEO 검사 대시보드"})]}),u.jsx("div",{className:"flex flex-col items-end gap-3",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"text-[15px] font-medium text-zinc-500",children:["업데이트 조회 날짜: ",u.jsx("span",{className:"text-zinc-900 font-bold ml-1",children:De})]}),u.jsxs("button",{onClick:wt,disabled:xe,className:"flex items-center gap-2 px-4 py-2.5 text-[15px] font-semibold text-white bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-700 hover:border-zinc-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer",children:[u.jsx(Im,{className:`w-4 h-4 ${xe?"animate-spin":""}`}),xe?"동기화 중...":"데이터 새로고침"]})]})})]})}),u.jsxs("main",{className:"max-w-[1500px] mx-auto px-8 mt-4 space-y-5",children:[u.jsxs("div",{className:"flex items-center gap-3 px-1",children:[u.jsx("div",{className:`w-2 h-2 rounded-full ${xe?"bg-amber-500 animate-pulse":"bg-emerald-500 animate-pulse"}`}),u.jsx("span",{className:"text-[15px] font-bold text-zinc-700",children:xe?"Google Sheet 데이터 동기화 중...":"Sitemap 전체 URL 검사 결과"})]}),u.jsx("section",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[{label:"전체 URL",value:Tn.totalUrls,icon:Mm},{label:"정상",value:Tn.normal,icon:Cu},{label:"주의",value:Tn.warning,icon:xu},{label:"# 개선 필요",value:Tn.needsImprovement,icon:xu,highlight:!0},{label:"점검 제외",value:Tn.excluded,icon:jm}].map((T,B)=>u.jsxs("div",{className:"bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-sm flex flex-col hover:border-zinc-300 transition-colors h-[140px]",children:[u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-zinc-400 mb-auto w-full",children:[u.jsx(T.icon,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[12px] font-bold tracking-widest uppercase",children:T.label})]}),u.jsx("div",{className:"flex flex-col items-center justify-center w-full mt-2",children:u.jsx("div",{className:`text-[37px] font-bold tracking-tight ${T.highlight?"text-red-500":"text-zinc-900"}`,children:T.value})})]},B))}),u.jsx("div",{className:"flex gap-10 px-1",children:["Overview","URL Audit List"].map(T=>u.jsx("button",{onClick:()=>I(T),className:`pb-3 text-[15px] font-bold tracking-wide border-b-2 transition-colors cursor-pointer ${v===T?"border-zinc-900 text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-700 hover:border-zinc-300"}`,children:T},T))}),u.jsxs("div",{className:"min-h-[800px]",children:[v==="Overview"&&u.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[u.jsx("div",{className:"flex items-center justify-between mb-6",children:u.jsxs("div",{children:[u.jsx("h2",{className:"text-[21px] font-bold text-zinc-900 tracking-tight",children:"우선 개선 대상 TOP 12"}),u.jsx("p",{className:"text-[15px] text-zinc-500 mt-1.5 font-medium",children:"엑셀 시트 기준 상위 12개의 가장 시급한 개선 대상입니다."})]})}),u.jsx("div",{className:"grid grid-cols-1 gap-4",children:Ae.map((T,B)=>u.jsxs("div",{onClick:()=>mt(T),className:"group flex items-center justify-between p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer",children:[u.jsxs("div",{className:"flex items-center gap-6",children:[u.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shadow-sm ${B===0?"bg-red-50 text-red-600 border border-red-100":B===1?"bg-orange-50 text-orange-600 border border-orange-100":B===2?"bg-amber-50 text-amber-600 border border-amber-100":"bg-zinc-50 text-zinc-600 border border-zinc-200"}`,children:B+1}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-[17px] font-bold text-zinc-900 group-hover:text-blue-600 transition-colors",children:T.title}),u.jsxs("div",{className:"flex items-center gap-2 mt-1.5",children:[u.jsx("p",{className:"text-[15px] text-zinc-500 font-medium",children:T.url}),u.jsx("a",{href:T.url,target:"_blank",rel:"noopener noreferrer",onClick:pe=>pe.stopPropagation(),className:"p-1 text-zinc-400 hover:text-blue-500 hover:bg-blue-50 rounded transition-all",title:"새창으로 열기",children:u.jsx(mc,{className:"w-3.5 h-3.5"})})]})]})]}),u.jsxs("div",{className:"flex items-center gap-10",children:[u.jsxs("div",{className:"flex gap-6",children:[u.jsxs("div",{className:"flex flex-col items-end",children:[u.jsx("span",{className:"text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5",children:"Issues"}),u.jsxs("span",{className:`text-[15px] font-bold ${T.issueCount>0?"text-red-500":"text-zinc-600"}`,children:[T.issueCount,"건"]})]}),u.jsx("div",{className:"w-px h-10 bg-zinc-100"}),u.jsxs("div",{className:"flex flex-col items-end",children:[u.jsx("span",{className:"text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5",children:"Schema"}),u.jsx("span",{className:`text-sm font-bold ${zo(T).color}`,children:zo(T).text})]})]}),u.jsx("div",{className:"w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shadow-sm",children:u.jsx(Uu,{className:"w-5 h-5"})})]})]},T.id))})]}),v==="URL Audit List"&&u.jsx("div",{className:"animate-in fade-in duration-300",children:P?u.jsxs("div",{className:"flex flex-col bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden animate-in slide-in-from-right duration-500",children:[u.jsxs("div",{className:"p-8 border-b border-zinc-100 bg-white relative",children:[u.jsxs("div",{className:"flex justify-between items-start mb-8",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("h2",{className:"text-[25px] font-bold text-zinc-900 tracking-tight",children:P.title}),u.jsx("div",{className:"text-[13px] font-bold text-zinc-400 tracking-widest uppercase",children:"(Detail View)"})]}),u.jsxs("button",{onClick:()=>m(null),className:"flex items-center gap-2 text-[14px] font-bold text-zinc-500 hover:text-zinc-900 transition-colors bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-200 cursor-pointer shadow-sm hover:bg-zinc-100",children:[u.jsx(Nu,{className:"w-4 h-4"}),"목록으로 돌아가기"]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"flex gap-2 bg-zinc-100/80 p-1.5 rounded-xl w-fit",children:["Summary","Technical","Schema(JSON-LD)"].map(T=>u.jsx("button",{onClick:()=>E(T),className:`px-5 py-2.5 text-[15px] font-bold rounded-lg transition-all cursor-pointer ${j===T?"bg-white text-zinc-900 shadow-sm":"text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/50"}`,children:T},T))}),u.jsxs("div",{className:"flex flex-wrap gap-2.5 justify-end",children:[u.jsxs("span",{className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold border ${Eo(P.level)}`,children:["issue_count ",P.issueCount]}),u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[13px] font-bold border border-zinc-200 bg-white text-zinc-600 uppercase tracking-wider shadow-sm",children:P.access}),u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[13px] font-bold border border-zinc-200 bg-white text-zinc-600 shadow-sm",children:P.httpStatus}),u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[13px] font-bold border border-zinc-200 bg-white text-zinc-600 shadow-sm",children:P.indexing})]})]})]}),u.jsx("div",{className:"flex-1 p-8 bg-zinc-50/30 min-h-[600px]",children:Ke()})]}):u.jsxs("div",{className:"flex flex-col bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-zinc-100 space-y-4 bg-zinc-50/50",children:[u.jsxs("div",{className:"flex gap-3",children:[u.jsxs("div",{className:"relative flex-1",children:[u.jsx(Km,{className:"w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"}),u.jsx("input",{type:"text",value:ne,onChange:T=>ve(T.target.value),placeholder:"URL / Title / Issue / Rule Profile 검색",className:"w-full pl-11 pr-4 py-3 text-[15px] font-medium border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white shadow-sm"})]}),u.jsxs("button",{className:"px-5 py-3 border border-zinc-200 rounded-xl text-zinc-700 hover:bg-zinc-50 flex items-center gap-2 text-[15px] font-bold transition-all bg-white shadow-sm cursor-pointer",children:[u.jsx(Rm,{className:"w-4 h-4"}),"필터"]})]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsxs("select",{value:x,onChange:T=>y(T.target.value),className:"flex-1 border border-zinc-200 rounded-xl px-4 py-2.5 text-[15px] font-medium outline-none bg-white cursor-pointer shadow-sm appearance-none",children:[u.jsx("option",{children:"이슈 전체"}),u.jsx("option",{children:"이슈 있음"}),u.jsx("option",{children:"이슈 없음"})]}),u.jsxs("select",{value:F,onChange:T=>M(T.target.value),className:"flex-1 border border-zinc-200 rounded-xl px-4 py-2.5 text-[15px] font-medium outline-none bg-white cursor-pointer shadow-sm appearance-none",children:[u.jsx("option",{children:"접근분류 전체"}),u.jsx("option",{children:"PUBLIC"}),u.jsx("option",{children:"NOT_REQUIRED"})]}),u.jsxs("select",{value:te,onChange:T=>ze(T.target.value),className:"flex-1 border border-zinc-200 rounded-xl px-4 py-2.5 text-[15px] font-medium outline-none bg-white cursor-pointer shadow-sm appearance-none",children:[u.jsx("option",{children:"우선순위 높은순"}),u.jsx("option",{children:"최신 점검순"}),u.jsx("option",{children:"제목 가나다순"})]})]}),u.jsx("div",{className:"pt-2 px-1 flex items-center justify-between",children:u.jsxs("span",{className:"text-[13px] font-bold text-zinc-500 tracking-wide",children:["조회된 URL ",u.jsx("strong",{className:"text-zinc-900 text-[15px] font-bold ml-1",children:Z.length}),"건"]})})]}),u.jsxs("div",{className:"grid grid-cols-[minmax(0,1fr)_120px_180px_minmax(0,1fr)] gap-4 px-6 py-3.5 bg-zinc-50 border-b border-zinc-200/80 text-[12px] font-bold tracking-widest text-zinc-400 uppercase",children:[u.jsx("div",{children:"URL (전체)"}),u.jsx("div",{children:"Title"}),u.jsxs("div",{className:"flex items-center gap-1 cursor-pointer hover:text-zinc-800 transition-colors",children:["Issue Count ",u.jsx(Hm,{className:"w-3 h-3"})]}),u.jsx("div",{children:"Issue Details"})]}),u.jsx("div",{className:"flex flex-col",children:st.length>0?u.jsxs(u.Fragment,{children:[st.map(T=>u.jsxs("div",{onClick:()=>m(T),className:"grid grid-cols-[minmax(0,1fr)_120px_180px_minmax(0,1fr)] gap-4 px-6 py-5 border-b border-zinc-100 cursor-pointer transition-all hover:bg-zinc-50/50",children:[u.jsxs("div",{className:"truncate",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-sm truncate font-medium text-zinc-700",title:T.url,children:T.url}),u.jsx("a",{href:T.url,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"p-1 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all flex-shrink-0",title:"새창으로 열기",children:u.jsx(mc,{className:"w-3.5 h-3.5"})})]}),u.jsx("div",{className:"text-[11px] text-zinc-400 font-bold uppercase tracking-widest mt-2",children:T.pageType})]}),u.jsxs("div",{className:"truncate",children:[u.jsx("div",{className:"text-[15px] truncate font-medium text-zinc-700",title:T.title,children:T.title}),u.jsx("div",{className:"text-[11px] text-zinc-400 font-bold mt-2",children:T.checkedAt.split(" ")[1]})]}),u.jsxs("div",{children:[u.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[13px] font-bold border ${Eo(T.level)}`,children:[u.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${Ru(T.level)}`}),T.issueCount," - ",T.level]}),u.jsx("div",{className:"text-[11px] text-zinc-400 font-bold mt-2.5 uppercase tracking-widest",children:T.access})]}),u.jsxs("div",{className:"flex items-center justify-between gap-4",children:[u.jsx("div",{className:"text-[13px] text-zinc-500 font-medium line-clamp-2 leading-relaxed flex-1",children:T.issueSummary}),u.jsx("div",{className:"w-8 h-8 rounded-full border border-zinc-100 bg-zinc-50 flex items-center justify-center text-zinc-400 shadow-sm",children:u.jsx(Uu,{className:"w-4 h-4"})})]})]},T.id)),_e>1&&u.jsxs("div",{className:"flex items-center justify-center gap-2 p-6 bg-zinc-50/30 border-t border-zinc-100",children:[u.jsx("button",{onClick:()=>{const B=(Math.ceil(we/5)-1)*5;be(Math.max(1,B))},disabled:Math.ceil(we/5)===1,className:"w-10 h-10 flex items-center justify-center text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer",title:"이전 5페이지",children:u.jsx(Om,{className:"w-4 h-4"})}),u.jsx("button",{onClick:()=>be(T=>Math.max(1,T-1)),disabled:we===1,className:"w-10 h-10 flex items-center justify-center text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer",title:"이전 페이지",children:u.jsx(Nu,{className:"w-4 h-4"})}),u.jsx("div",{className:"flex items-center gap-1 px-2",children:Wt().map(T=>u.jsx("button",{onClick:()=>be(T),className:`w-10 h-10 flex items-center justify-center rounded-lg text-[15px] font-bold transition-all cursor-pointer shadow-sm border ${we===T?"bg-zinc-800 text-white border-zinc-800":"bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"}`,children:T},T))}),u.jsx("button",{onClick:()=>be(T=>Math.min(_e,T+1)),disabled:we===_e,className:"w-10 h-10 flex items-center justify-center text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer",title:"다음 페이지",children:u.jsx(vm,{className:"w-4 h-4"})}),u.jsx("button",{onClick:()=>{const B=Math.ceil(we/5)*5+1;be(Math.min(_e,B))},disabled:Math.ceil(we/5)===Math.ceil(_e/5),className:"w-10 h-10 flex items-center justify-center text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer",title:"다음 5페이지",children:u.jsx(Um,{className:"w-4 h-4"})})]})]}):u.jsx("div",{className:"p-12 text-center text-zinc-500 text-sm font-medium",children:"조건에 맞는 데이터가 없습니다."})})]})})]})]})]})}wm.createRoot(document.getElementById("root")).render(u.jsx(Ne.StrictMode,{children:u.jsx(Em,{})}));
