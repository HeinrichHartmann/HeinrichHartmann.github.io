(self["webpackChunkstats_calc"]=self["webpackChunkstats_calc"]||[]).push([[998],{19662:function(e,t,n){var r=n(60614),i=n(66330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},96077:function(e,t,n){var r=n(60614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},51223:function(e,t,n){var r=n(5112),i=n(70030),o=n(3070).f,a=r("unscopables"),s=Array.prototype;void 0==s[a]&&o(s,a,{configurable:!0,value:i(null)}),e.exports=function(e){s[a][e]=!0}},19670:function(e,t,n){var r=n(70111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},24019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(e,t,n){"use strict";var r,i,o,a=n(24019),s=n(19781),u=n(17854),l=n(60614),c=n(70111),f=n(92597),p=n(70648),d=n(66330),y=n(68880),m=n(98052),T=n(3070).f,v=n(47976),b=n(79518),S=n(27674),g=n(5112),E=n(69711),h=u.Int8Array,x=h&&h.prototype,P=u.Uint8ClampedArray,A=P&&P.prototype,O=h&&b(h),w=x&&b(x),_=Object.prototype,I=u.TypeError,N=g("toStringTag"),j=E("TYPED_ARRAY_TAG"),D=E("TYPED_ARRAY_CONSTRUCTOR"),L=a&&!!S&&"Opera"!==p(u.opera),C=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},R=function(e){if(!c(e))return!1;var t=p(e);return"DataView"===t||f(M,t)||f(B,t)},F=function(e){if(!c(e))return!1;var t=p(e);return f(M,t)||f(B,t)},k=function(e){if(F(e))return e;throw I("Target is not a typed array")},V=function(e){if(l(e)&&(!S||v(O,e)))return e;throw I(d(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(s){if(n)for(var i in M){var o=u[i];if(o&&f(o.prototype,e))try{delete o.prototype[e]}catch(a){try{o.prototype[e]=t}catch(l){}}}w[e]&&!n||m(w,e,n?t:L&&x[e]||t,r)}},Y=function(e,t,n){var r,i;if(s){if(S){if(n)for(r in M)if(i=u[r],i&&f(i,e))try{delete i[e]}catch(o){}if(O[e]&&!n)return;try{return m(O,e,n?t:L&&O[e]||t)}catch(o){}}for(r in M)i=u[r],!i||i[e]&&!n||m(i,e,t)}};for(r in M)i=u[r],o=i&&i.prototype,o?y(o,D,i):L=!1;for(r in B)i=u[r],o=i&&i.prototype,o&&y(o,D,i);if((!L||!l(O)||O===Function.prototype)&&(O=function(){throw I("Incorrect invocation")},L))for(r in M)u[r]&&S(u[r],O);if((!L||!w||w===_)&&(w=O.prototype,L))for(r in M)u[r]&&S(u[r].prototype,w);if(L&&b(A)!==w&&S(A,w),s&&!f(w,N))for(r in C=!0,T(w,N,{get:function(){return c(this)?this[j]:void 0}}),M)u[r]&&y(u[r],j,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_CONSTRUCTOR:D,TYPED_ARRAY_TAG:C&&j,aTypedArray:k,aTypedArrayConstructor:V,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:Y,isView:R,isTypedArray:F,TypedArray:O,TypedArrayPrototype:w}},41318:function(e,t,n){var r=n(45656),i=n(51400),o=n(26244),a=function(e){return function(t,n,a){var s,u=r(t),l=o(u),c=i(a,l);if(e&&n!=n){while(l>c)if(s=u[c++],s!=s)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},84326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},70648:function(e,t,n){var r=n(51694),i=n(60614),o=n(84326),a=n(5112),s=a("toStringTag"),u=Object,l="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=u(e),s))?n:l?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},77741:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),a=function(e){return String(i(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,u=s.test(a);e.exports=function(e,t){if(u&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,s,"");return e}},99920:function(e,t,n){var r=n(92597),i=n(53887),o=n(31236),a=n(3070);e.exports=function(e,t,n){for(var s=i(t),u=a.f,l=o.f,c=0;c<s.length;c++){var f=s[c];r(e,f)||n&&r(n,f)||u(e,f,l(t,f))}}},49920:function(e,t,n){var r=n(47293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},68880:function(e,t,n){var r=n(19781),i=n(3070),o=n(79114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},79114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},98052:function(e,t,n){var r=n(60614),i=n(68880),o=n(56339),a=n(13072);e.exports=function(e,t,n,s){s||(s={});var u=s.enumerable,l=void 0!==s.name?s.name:t;return r(n)&&o(n,l,s),s.global?u?e[t]=n:a(t,n):(s.unsafe?e[t]&&(u=!0):delete e[t],u?e[t]=n:i(e,t,n)),e}},13072:function(e,t,n){var r=n(17854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},19781:function(e,t,n){var r=n(47293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},80317:function(e,t,n){var r=n(17854),i=n(70111),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},88113:function(e,t,n){var r=n(35005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(17854),a=n(88113),s=o.process,u=o.Deno,l=s&&s.versions||u&&u.version,c=l&&l.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},80748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},22914:function(e,t,n){var r=n(47293),i=n(79114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},82109:function(e,t,n){var r=n(17854),i=n(31236).f,o=n(68880),a=n(98052),s=n(13072),u=n(99920),l=n(54705);e.exports=function(e,t){var n,c,f,p,d,y,m=e.target,T=e.global,v=e.stat;if(c=T?r:v?r[m]||s(m,{}):(r[m]||{}).prototype,c)for(f in t){if(d=t[f],e.dontCallGetSet?(y=i(c,f),p=y&&y.value):p=c[f],n=l(T?f:m+(v?".":"#")+f,e.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;u(d,p)}(e.sham||p&&p.sham)&&o(d,"sham",!0),a(c,f,d,e)}}},47293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},22104:function(e,t,n){var r=n(34374),i=Function.prototype,o=i.apply,a=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?a.bind(o):function(){return a.apply(o,arguments)})},34374:function(e,t,n){var r=n(47293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},46916:function(e,t,n){var r=n(34374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},76530:function(e,t,n){var r=n(19781),i=n(92597),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=i(o,"name"),u=s&&"something"===function(){}.name,l=s&&(!r||r&&a(o,"name").configurable);e.exports={EXISTS:s,PROPER:u,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(34374),i=Function.prototype,o=i.bind,a=i.call,s=r&&o.bind(a,a);e.exports=r?function(e){return e&&s(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},35005:function(e,t,n){var r=n(17854),i=n(60614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},58173:function(e,t,n){var r=n(19662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},17854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},92597:function(e,t,n){var r=n(1702),i=n(47908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},64664:function(e,t,n){var r=n(19781),i=n(47293),o=n(80317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},68361:function(e,t,n){var r=n(1702),i=n(47293),o=n(84326),a=Object,s=r("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?s(e,""):a(e)}:a},79587:function(e,t,n){var r=n(60614),i=n(70111),o=n(27674);e.exports=function(e,t,n){var a,s;return o&&r(a=t.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&o(e,s),e}},42788:function(e,t,n){var r=n(1702),i=n(60614),o=n(5465),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return a(e)}),e.exports=o.inspectSource},58340:function(e,t,n){var r=n(70111),i=n(68880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},29909:function(e,t,n){var r,i,o,a=n(68536),s=n(17854),u=n(1702),l=n(70111),c=n(68880),f=n(92597),p=n(5465),d=n(6200),y=n(3501),m="Object already initialized",T=s.TypeError,v=s.WeakMap,b=function(e){return o(e)?i(e):r(e,{})},S=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw T("Incompatible receiver, "+e+" required");return n}};if(a||p.state){var g=p.state||(p.state=new v),E=u(g.get),h=u(g.has),x=u(g.set);r=function(e,t){if(h(g,e))throw new T(m);return t.facade=e,x(g,e,t),t},i=function(e){return E(g,e)||{}},o=function(e){return h(g,e)}}else{var P=d("state");y[P]=!0,r=function(e,t){if(f(e,P))throw new T(m);return t.facade=e,c(e,P,t),t},i=function(e){return f(e,P)?e[P]:{}},o=function(e){return f(e,P)}}e.exports={set:r,get:i,has:o,enforce:b,getterFor:S}},60614:function(e){e.exports=function(e){return"function"==typeof e}},54705:function(e,t,n){var r=n(47293),i=n(60614),o=/#|\.prototype\./,a=function(e,t){var n=u[s(e)];return n==c||n!=l&&(i(t)?r(t):!!t)},s=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},u=a.data={},l=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},70111:function(e,t,n){var r=n(60614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},31913:function(e){e.exports=!1},52190:function(e,t,n){var r=n(35005),i=n(60614),o=n(47976),a=n(43307),s=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,s(e))}},26244:function(e,t,n){var r=n(17466);e.exports=function(e){return r(e.length)}},56339:function(e,t,n){var r=n(47293),i=n(60614),o=n(92597),a=n(19781),s=n(76530).CONFIGURABLE,u=n(42788),l=n(29909),c=l.enforce,f=l.get,p=Object.defineProperty,d=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||s&&e.name!==t)&&p(e,"name",{value:t,configurable:!0}),d&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=c(e);return o(r,"source")||(r.source=y.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&f(this).source||u(this)}),"toString")},74758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},30133:function(e,t,n){var r=n(7392),i=n(47293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},68536:function(e,t,n){var r=n(17854),i=n(60614),o=n(42788),a=r.WeakMap;e.exports=i(a)&&/native code/.test(o(a))},56277:function(e,t,n){var r=n(41340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},70030:function(e,t,n){var r,i=n(19670),o=n(36048),a=n(80748),s=n(3501),u=n(60490),l=n(80317),c=n(6200),f=">",p="<",d="prototype",y="script",m=c("IE_PROTO"),T=function(){},v=function(e){return p+y+f+e+p+"/"+y+f},b=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},S=function(){var e,t=l("iframe"),n="java"+y+":";return t.style.display="none",u.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},g=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}g="undefined"!=typeof document?document.domain&&r?b(r):S():b(r);var e=a.length;while(e--)delete g[d][a[e]];return g()};s[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(T[d]=i(e),n=new T,T[d]=null,n[m]=e):n=g(),void 0===t?n:o.f(n,t)}},36048:function(e,t,n){var r=n(19781),i=n(3353),o=n(3070),a=n(19670),s=n(45656),u=n(81956);t.f=r&&!i?Object.defineProperties:function(e,t){a(e);var n,r=s(t),i=u(t),l=i.length,c=0;while(l>c)o.f(e,n=i[c++],r[n]);return e}},3070:function(e,t,n){var r=n(19781),i=n(64664),o=n(3353),a=n(19670),s=n(34948),u=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";t.f=r?o?function(e,t,n){if(a(e),t=s(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=c(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=s(t),a(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},31236:function(e,t,n){var r=n(19781),i=n(46916),o=n(55296),a=n(79114),s=n(45656),u=n(34948),l=n(92597),c=n(64664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=s(e),t=u(t),c)try{return f(e,t)}catch(n){}if(l(e,t))return a(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(16324),i=n(80748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},25181:function(e,t){t.f=Object.getOwnPropertySymbols},79518:function(e,t,n){var r=n(92597),i=n(60614),o=n(47908),a=n(6200),s=n(49920),u=a("IE_PROTO"),l=Object,c=l.prototype;e.exports=s?l.getPrototypeOf:function(e){var t=o(e);if(r(t,u))return t[u];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?c:null}},47976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},16324:function(e,t,n){var r=n(1702),i=n(92597),o=n(45656),a=n(41318).indexOf,s=n(3501),u=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,c=[];for(n in r)!i(s,n)&&i(r,n)&&u(c,n);while(t.length>l)i(r,n=t[l++])&&(~a(c,n)||u(c,n));return c}},81956:function(e,t,n){var r=n(16324),i=n(80748);e.exports=Object.keys||function(e){return r(e,i)}},55296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},27674:function(e,t,n){var r=n(1702),i=n(19670),o=n(96077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},92140:function(e,t,n){var r=n(46916),i=n(60614),o=n(70111),a=TypeError;e.exports=function(e,t){var n,s;if("string"===t&&i(n=e.toString)&&!o(s=r(n,e)))return s;if(i(n=e.valueOf)&&!o(s=r(n,e)))return s;if("string"!==t&&i(n=e.toString)&&!o(s=r(n,e)))return s;throw a("Can't convert object to primitive value")}},53887:function(e,t,n){var r=n(35005),i=n(1702),o=n(8006),a=n(25181),s=n(19670),u=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(s(e)),n=a.f;return n?u(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},84488:function(e){var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(72309),i=n(69711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(17854),i=n(13072),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},72309:function(e,t,n){var r=n(31913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.8",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},51400:function(e,t,n){var r=n(19303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},45656:function(e,t,n){var r=n(68361),i=n(84488);e.exports=function(e){return r(i(e))}},19303:function(e,t,n){var r=n(74758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},17466:function(e,t,n){var r=n(19303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},47908:function(e,t,n){var r=n(84488),i=Object;e.exports=function(e){return i(r(e))}},84590:function(e,t,n){var r=n(73002),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},73002:function(e,t,n){var r=n(19303),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},57593:function(e,t,n){var r=n(46916),i=n(70111),o=n(52190),a=n(58173),s=n(92140),u=n(5112),l=TypeError,c=u("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,u=a(e,c);if(u){if(void 0===t&&(t="default"),n=r(u,e,t),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},34948:function(e,t,n){var r=n(57593),i=n(52190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},51694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},41340:function(e,t,n){var r=n(70648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},66330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},69711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++i+o,36)}},43307:function(e,t,n){var r=n(30133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(19781),i=n(47293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(17854),i=n(72309),o=n(92597),a=n(69711),s=n(30133),u=n(43307),l=i("wks"),c=r.Symbol,f=c&&c["for"],p=u?c:c&&c.withoutSetter||a;e.exports=function(e){if(!o(l,e)||!s&&"string"!=typeof l[e]){var t="Symbol."+e;s&&o(c,e)?l[e]=c[e]:l[e]=u&&f?f(t):p(t)}return l[e]}},89191:function(e,t,n){"use strict";var r=n(35005),i=n(92597),o=n(68880),a=n(47976),s=n(27674),u=n(99920),l=n(2626),c=n(79587),f=n(56277),p=n(58340),d=n(77741),y=n(22914),m=n(19781),T=n(31913);e.exports=function(e,t,n,v){var b="stackTraceLimit",S=v?2:1,g=e.split("."),E=g[g.length-1],h=r.apply(null,g);if(h){var x=h.prototype;if(!T&&i(x,"cause")&&delete x.cause,!n)return h;var P=r("Error"),A=t((function(e,t){var n=f(v?t:e,void 0),r=v?new h(e):new h;return void 0!==n&&o(r,"message",n),y&&o(r,"stack",d(r.stack,2)),this&&a(x,this)&&c(r,this,A),arguments.length>S&&p(r,arguments[S]),r}));if(A.prototype=x,"Error"!==E?s?s(A,P):u(A,P,{name:!0}):m&&b in h&&(l(A,h,b),l(A,h,"prepareStackTrace")),u(A,h),!T)try{x.name!==E&&o(x,"name",E),x.constructor=A}catch(O){}return A}}},26699:function(e,t,n){"use strict";var r=n(82109),i=n(41318).includes,o=n(47293),a=n(51223),s=o((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:s},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},21703:function(e,t,n){var r=n(82109),i=n(17854),o=n(22104),a=n(89191),s="WebAssembly",u=i[s],l=7!==Error("e",{cause:7}).cause,c=function(e,t){var n={};n[e]=a(e,t,l),r({global:!0,constructor:!0,arity:1,forced:l},n)},f=function(e,t){if(u&&u[e]){var n={};n[e]=a(s+"."+e,t,l),r({target:s,stat:!0,constructor:!0,arity:1,forced:l},n)}};c("Error",(function(e){return function(t){return o(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),c("URIError",(function(e){return function(t){return o(e,this,arguments)}})),f("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),f("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),f("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},48675:function(e,t,n){"use strict";var r=n(90260),i=n(26244),o=n(19303),a=r.aTypedArray,s=r.exportTypedArrayMethod;s("at",(function(e){var t=a(this),n=i(t),r=o(e),s=r>=0?r:n+r;return s<0||s>=n?void 0:t[s]}))},3462:function(e,t,n){"use strict";var r=n(17854),i=n(46916),o=n(90260),a=n(26244),s=n(84590),u=n(47908),l=n(47293),c=r.RangeError,f=r.Int8Array,p=f&&f.prototype,d=p&&p.set,y=o.aTypedArray,m=o.exportTypedArrayMethod,T=!l((function(){var e=new Uint8ClampedArray(2);return i(d,e,{length:1,0:3},1),3!==e[1]})),v=T&&o.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var e=new f(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){y(this);var t=s(arguments.length>1?arguments[1]:void 0,1),n=u(e);if(T)return i(d,this,n,t);var r=this.length,o=a(n),l=0;if(o+t>r)throw c("Wrong length");while(l<o)this[t+l]=n[l++]}),!T||v)},37743:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierChar=c,t.isIdentifierName=f,t.isIdentifierStart=l;let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",r="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+n+"]"),o=new RegExp("["+n+r+"]");n=r=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],s=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function u(e,t){let n=65536;for(let r=0,i=t.length;r<i;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function l(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):u(e,a)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):u(e,a)||u(e,s))))}function f(e){let t=!0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(55296===(64512&r)&&n+1<e.length){const t=e.charCodeAt(++n);56320===(64512&t)&&(r=65536+((1023&r)<<10)+(1023&t))}if(t){if(t=!1,!l(r))return!1}else if(!c(r))return!1}return!t}},65502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}});var r=n(37743),i=n(67640)},67640:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isKeyword=c,t.isReservedWord=a,t.isStrictBindOnlyReservedWord=u,t.isStrictBindReservedWord=l,t.isStrictReservedWord=s;const n={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]},r=new Set(n.keyword),i=new Set(n.strict),o=new Set(n.strictBind);function a(e,t){return t&&"await"===e||"enum"===e}function s(e,t){return a(e,t)||i.has(e)}function u(e){return o.has(e)}function l(e,t){return s(e,t)||u(e)}function c(e){return r.has(e)}},87450:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(86663);function i(e){if(!(0,r.default)(e)){var t;const n=null!=(t=null==e?void 0:e.type)?t:JSON.stringify(e);throw new TypeError(`Not a valid node of type "${n}"`)}}},75318:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.assertAccessor=bi,t.assertAnyTypeAnnotation=Fe,t.assertArgumentPlaceholder=yn,t.assertArrayExpression=o,t.assertArrayPattern=re,t.assertArrayTypeAnnotation=ke,t.assertArrowFunctionExpression=ie,t.assertAssignmentExpression=a,t.assertAssignmentPattern=ne,t.assertAwaitExpression=Oe,t.assertBigIntLiteral=_e,t.assertBinary=Vr,t.assertBinaryExpression=s,t.assertBindExpression=mn,t.assertBlock=Ur,t.assertBlockParent=Yr,t.assertBlockStatement=f,t.assertBooleanLiteral=D,t.assertBooleanLiteralTypeAnnotation=Ke,t.assertBooleanTypeAnnotation=Ve,t.assertBreakStatement=p,t.assertCallExpression=d,t.assertCatchClause=y,t.assertClass=yi,t.assertClassAccessorProperty=Le,t.assertClassBody=oe,t.assertClassDeclaration=se,t.assertClassExpression=ae,t.assertClassImplements=Ue,t.assertClassMethod=be,t.assertClassPrivateMethod=Me,t.assertClassPrivateProperty=Ce,t.assertClassProperty=De,t.assertCompletionStatement=qr,t.assertConditional=Wr,t.assertConditionalExpression=m,t.assertContinueStatement=T,t.assertDebuggerStatement=v,t.assertDecimalLiteral=hn,t.assertDeclaration=ni,t.assertDeclareClass=Je,t.assertDeclareExportAllDeclaration=Ze,t.assertDeclareExportDeclaration=Qe,t.assertDeclareFunction=Xe,t.assertDeclareInterface=qe,t.assertDeclareModule=We,t.assertDeclareModuleExports=Ge,t.assertDeclareOpaqueType=ze,t.assertDeclareTypeAlias=$e,t.assertDeclareVariable=He,t.assertDeclaredPredicate=et,t.assertDecorator=vn,t.assertDirective=l,t.assertDirectiveLiteral=c,t.assertDoExpression=bn,t.assertDoWhileStatement=b,t.assertEmptyStatement=S,t.assertEmptyTypeAnnotation=ft,t.assertEnumBody=Ai,t.assertEnumBooleanBody=kt,t.assertEnumBooleanMember=Ut,t.assertEnumDeclaration=Ft,t.assertEnumDefaultedMember=qt,t.assertEnumMember=Oi,t.assertEnumNumberBody=Vt,t.assertEnumNumberMember=Jt,t.assertEnumStringBody=Kt,t.assertEnumStringMember=Xt,t.assertEnumSymbolBody=Yt,t.assertExistsTypeAnnotation=tt,t.assertExportAllDeclaration=ue,t.assertExportDeclaration=Ti,t.assertExportDefaultDeclaration=le,t.assertExportDefaultSpecifier=Sn,t.assertExportNamedDeclaration=ce,t.assertExportNamespaceSpecifier=Ie,t.assertExportSpecifier=fe,t.assertExpression=kr,t.assertExpressionStatement=g,t.assertExpressionWrapper=zr,t.assertFile=E,t.assertFlow=gi,t.assertFlowBaseAnnotation=hi,t.assertFlowDeclaration=xi,t.assertFlowPredicate=Pi,t.assertFlowType=Ei,t.assertFor=Hr,t.assertForInStatement=h,t.assertForOfStatement=pe,t.assertForStatement=x,t.assertForXStatement=Qr,t.assertFunction=Zr,t.assertFunctionDeclaration=P,t.assertFunctionExpression=A,t.assertFunctionParent=ei,t.assertFunctionTypeAnnotation=nt,t.assertFunctionTypeParam=rt,t.assertGenericTypeAnnotation=it,t.assertIdentifier=O,t.assertIfStatement=w,t.assertImmutable=si,t.assertImport=we,t.assertImportAttribute=Tn,t.assertImportDeclaration=de,t.assertImportDefaultSpecifier=ye,t.assertImportNamespaceSpecifier=me,t.assertImportSpecifier=Te,t.assertIndexedAccessType=Wt,t.assertInferredPredicate=ot,t.assertInterfaceDeclaration=st,t.assertInterfaceExtends=at,t.assertInterfaceTypeAnnotation=ut,t.assertInterpreterDirective=u,t.assertIntersectionTypeAnnotation=lt,t.assertJSX=wi,t.assertJSXAttribute=$t,t.assertJSXClosingElement=zt,t.assertJSXClosingFragment=cn,t.assertJSXElement=Ht,t.assertJSXEmptyExpression=Qt,t.assertJSXExpressionContainer=Zt,t.assertJSXFragment=un,t.assertJSXIdentifier=tn,t.assertJSXMemberExpression=nn,t.assertJSXNamespacedName=rn,t.assertJSXOpeningElement=on,t.assertJSXOpeningFragment=ln,t.assertJSXSpreadAttribute=an,t.assertJSXSpreadChild=en,t.assertJSXText=sn,t.assertLVal=ii,t.assertLabeledStatement=_,t.assertLiteral=ai,t.assertLogicalExpression=C,t.assertLoop=Gr,t.assertMemberExpression=M,t.assertMetaProperty=ve,t.assertMethod=li,t.assertMiscellaneous=_i,t.assertMixedTypeAnnotation=ct,t.assertModuleDeclaration=mi,t.assertModuleExpression=xn,t.assertModuleSpecifier=vi,t.assertNewExpression=B,t.assertNoop=fn,t.assertNullLiteral=j,t.assertNullLiteralTypeAnnotation=Ye,t.assertNullableTypeAnnotation=pt,t.assertNumberLiteral=Li,t.assertNumberLiteralTypeAnnotation=dt,t.assertNumberTypeAnnotation=yt,t.assertNumericLiteral=N,t.assertObjectExpression=F,t.assertObjectMember=ci,t.assertObjectMethod=k,t.assertObjectPattern=Se,t.assertObjectProperty=V,t.assertObjectTypeAnnotation=mt,t.assertObjectTypeCallProperty=vt,t.assertObjectTypeIndexer=bt,t.assertObjectTypeInternalSlot=Tt,t.assertObjectTypeProperty=St,t.assertObjectTypeSpreadProperty=gt,t.assertOpaqueType=Et,t.assertOptionalCallExpression=je,t.assertOptionalIndexedAccessType=Gt,t.assertOptionalMemberExpression=Ne,t.assertParenthesizedExpression=J,t.assertPattern=di,t.assertPatternLike=ri,t.assertPipelineBareFunction=On,t.assertPipelinePrimaryTopicReference=wn,t.assertPipelineTopicExpression=An,t.assertPlaceholder=pn,t.assertPrivate=Si,t.assertPrivateName=Be,t.assertProgram=R,t.assertProperty=fi,t.assertPureish=ti,t.assertQualifiedTypeIdentifier=ht,t.assertRecordExpression=gn,t.assertRegExpLiteral=L,t.assertRegexLiteral=Ci,t.assertRestElement=K,t.assertRestProperty=Mi,t.assertReturnStatement=Y,t.assertScopable=Kr,t.assertSequenceExpression=U,t.assertSpreadElement=ge,t.assertSpreadProperty=Bi,t.assertStandardized=Fr,t.assertStatement=Jr,t.assertStaticBlock=Re,t.assertStringLiteral=I,t.assertStringLiteralTypeAnnotation=xt,t.assertStringTypeAnnotation=Pt,t.assertSuper=Ee,t.assertSwitchCase=X,t.assertSwitchStatement=q,t.assertSymbolTypeAnnotation=At,t.assertTSAnyKeyword=Rn,t.assertTSArrayType=rr,t.assertTSAsExpression=hr,t.assertTSBaseType=Di,t.assertTSBigIntKeyword=kn,t.assertTSBooleanKeyword=Fn,t.assertTSCallSignatureDeclaration=Dn,t.assertTSConditionalType=cr,t.assertTSConstructSignatureDeclaration=Ln,t.assertTSConstructorType=Qn,t.assertTSDeclareFunction=In,t.assertTSDeclareMethod=Nn,t.assertTSEntityName=oi,t.assertTSEnumDeclaration=Pr,t.assertTSEnumMember=Ar,t.assertTSExportAssignment=Dr,t.assertTSExpressionWithTypeArguments=vr,t.assertTSExternalModuleReference=Nr,t.assertTSFunctionType=Hn,t.assertTSImportEqualsDeclaration=Ir,t.assertTSImportType=_r,t.assertTSIndexSignature=Bn,t.assertTSIndexedAccessType=yr,t.assertTSInferType=fr,t.assertTSInstantiationExpression=Er,t.assertTSInterfaceBody=Sr,t.assertTSInterfaceDeclaration=br,t.assertTSIntersectionType=lr,t.assertTSIntrinsicKeyword=Vn,t.assertTSLiteralType=Tr,t.assertTSMappedType=mr,t.assertTSMethodSignature=Mn,t.assertTSModuleBlock=wr,t.assertTSModuleDeclaration=Or,t.assertTSNamedTupleMember=sr,t.assertTSNamespaceExportDeclaration=Lr,t.assertTSNeverKeyword=Kn,t.assertTSNonNullExpression=jr,t.assertTSNullKeyword=Yn,t.assertTSNumberKeyword=Un,t.assertTSObjectKeyword=Jn,t.assertTSOptionalType=or,t.assertTSParameterProperty=_n,t.assertTSParenthesizedType=pr,t.assertTSPropertySignature=Cn,t.assertTSQualifiedName=jn,t.assertTSRestType=ar,t.assertTSStringKeyword=Xn,t.assertTSSymbolKeyword=qn,t.assertTSThisType=zn,t.assertTSTupleType=ir,t.assertTSType=ji,t.assertTSTypeAliasDeclaration=gr,t.assertTSTypeAnnotation=Cr,t.assertTSTypeAssertion=xr,t.assertTSTypeElement=Ni,t.assertTSTypeLiteral=nr,t.assertTSTypeOperator=dr,t.assertTSTypeParameter=Rr,t.assertTSTypeParameterDeclaration=Br,t.assertTSTypeParameterInstantiation=Mr,t.assertTSTypePredicate=er,t.assertTSTypeQuery=tr,t.assertTSTypeReference=Zn,t.assertTSUndefinedKeyword=Wn,t.assertTSUnionType=ur,t.assertTSUnknownKeyword=Gn,t.assertTSVoidKeyword=$n,t.assertTaggedTemplateExpression=he,t.assertTemplateElement=xe,t.assertTemplateLiteral=Pe,t.assertTerminatorless=Xr,t.assertThisExpression=W,t.assertThisTypeAnnotation=Ot,t.assertThrowStatement=G,t.assertTopicReference=Pn,t.assertTryStatement=$,t.assertTupleExpression=En,t.assertTupleTypeAnnotation=wt,t.assertTypeAlias=It,t.assertTypeAnnotation=Nt,t.assertTypeCastExpression=jt,t.assertTypeParameter=Dt,t.assertTypeParameterDeclaration=Lt,t.assertTypeParameterInstantiation=Ct,t.assertTypeScript=Ii,t.assertTypeofTypeAnnotation=_t,t.assertUnaryExpression=z,t.assertUnaryLike=pi,t.assertUnionTypeAnnotation=Mt,t.assertUpdateExpression=H,t.assertUserWhitespacable=ui,t.assertV8IntrinsicIdentifier=dn,t.assertVariableDeclaration=Q,t.assertVariableDeclarator=Z,t.assertVariance=Bt,t.assertVoidTypeAnnotation=Rt,t.assertWhile=$r,t.assertWhileStatement=ee,t.assertWithStatement=te,t.assertYieldExpression=Ae;var r=n(90053);function i(e,t,n){if(!(0,r.default)(e,t,n))throw new Error(`Expected type "${e}" with option ${JSON.stringify(n)}, but instead got "${t.type}".`)}function o(e,t){i("ArrayExpression",e,t)}function a(e,t){i("AssignmentExpression",e,t)}function s(e,t){i("BinaryExpression",e,t)}function u(e,t){i("InterpreterDirective",e,t)}function l(e,t){i("Directive",e,t)}function c(e,t){i("DirectiveLiteral",e,t)}function f(e,t){i("BlockStatement",e,t)}function p(e,t){i("BreakStatement",e,t)}function d(e,t){i("CallExpression",e,t)}function y(e,t){i("CatchClause",e,t)}function m(e,t){i("ConditionalExpression",e,t)}function T(e,t){i("ContinueStatement",e,t)}function v(e,t){i("DebuggerStatement",e,t)}function b(e,t){i("DoWhileStatement",e,t)}function S(e,t){i("EmptyStatement",e,t)}function g(e,t){i("ExpressionStatement",e,t)}function E(e,t){i("File",e,t)}function h(e,t){i("ForInStatement",e,t)}function x(e,t){i("ForStatement",e,t)}function P(e,t){i("FunctionDeclaration",e,t)}function A(e,t){i("FunctionExpression",e,t)}function O(e,t){i("Identifier",e,t)}function w(e,t){i("IfStatement",e,t)}function _(e,t){i("LabeledStatement",e,t)}function I(e,t){i("StringLiteral",e,t)}function N(e,t){i("NumericLiteral",e,t)}function j(e,t){i("NullLiteral",e,t)}function D(e,t){i("BooleanLiteral",e,t)}function L(e,t){i("RegExpLiteral",e,t)}function C(e,t){i("LogicalExpression",e,t)}function M(e,t){i("MemberExpression",e,t)}function B(e,t){i("NewExpression",e,t)}function R(e,t){i("Program",e,t)}function F(e,t){i("ObjectExpression",e,t)}function k(e,t){i("ObjectMethod",e,t)}function V(e,t){i("ObjectProperty",e,t)}function K(e,t){i("RestElement",e,t)}function Y(e,t){i("ReturnStatement",e,t)}function U(e,t){i("SequenceExpression",e,t)}function J(e,t){i("ParenthesizedExpression",e,t)}function X(e,t){i("SwitchCase",e,t)}function q(e,t){i("SwitchStatement",e,t)}function W(e,t){i("ThisExpression",e,t)}function G(e,t){i("ThrowStatement",e,t)}function $(e,t){i("TryStatement",e,t)}function z(e,t){i("UnaryExpression",e,t)}function H(e,t){i("UpdateExpression",e,t)}function Q(e,t){i("VariableDeclaration",e,t)}function Z(e,t){i("VariableDeclarator",e,t)}function ee(e,t){i("WhileStatement",e,t)}function te(e,t){i("WithStatement",e,t)}function ne(e,t){i("AssignmentPattern",e,t)}function re(e,t){i("ArrayPattern",e,t)}function ie(e,t){i("ArrowFunctionExpression",e,t)}function oe(e,t){i("ClassBody",e,t)}function ae(e,t){i("ClassExpression",e,t)}function se(e,t){i("ClassDeclaration",e,t)}function ue(e,t){i("ExportAllDeclaration",e,t)}function le(e,t){i("ExportDefaultDeclaration",e,t)}function ce(e,t){i("ExportNamedDeclaration",e,t)}function fe(e,t){i("ExportSpecifier",e,t)}function pe(e,t){i("ForOfStatement",e,t)}function de(e,t){i("ImportDeclaration",e,t)}function ye(e,t){i("ImportDefaultSpecifier",e,t)}function me(e,t){i("ImportNamespaceSpecifier",e,t)}function Te(e,t){i("ImportSpecifier",e,t)}function ve(e,t){i("MetaProperty",e,t)}function be(e,t){i("ClassMethod",e,t)}function Se(e,t){i("ObjectPattern",e,t)}function ge(e,t){i("SpreadElement",e,t)}function Ee(e,t){i("Super",e,t)}function he(e,t){i("TaggedTemplateExpression",e,t)}function xe(e,t){i("TemplateElement",e,t)}function Pe(e,t){i("TemplateLiteral",e,t)}function Ae(e,t){i("YieldExpression",e,t)}function Oe(e,t){i("AwaitExpression",e,t)}function we(e,t){i("Import",e,t)}function _e(e,t){i("BigIntLiteral",e,t)}function Ie(e,t){i("ExportNamespaceSpecifier",e,t)}function Ne(e,t){i("OptionalMemberExpression",e,t)}function je(e,t){i("OptionalCallExpression",e,t)}function De(e,t){i("ClassProperty",e,t)}function Le(e,t){i("ClassAccessorProperty",e,t)}function Ce(e,t){i("ClassPrivateProperty",e,t)}function Me(e,t){i("ClassPrivateMethod",e,t)}function Be(e,t){i("PrivateName",e,t)}function Re(e,t){i("StaticBlock",e,t)}function Fe(e,t){i("AnyTypeAnnotation",e,t)}function ke(e,t){i("ArrayTypeAnnotation",e,t)}function Ve(e,t){i("BooleanTypeAnnotation",e,t)}function Ke(e,t){i("BooleanLiteralTypeAnnotation",e,t)}function Ye(e,t){i("NullLiteralTypeAnnotation",e,t)}function Ue(e,t){i("ClassImplements",e,t)}function Je(e,t){i("DeclareClass",e,t)}function Xe(e,t){i("DeclareFunction",e,t)}function qe(e,t){i("DeclareInterface",e,t)}function We(e,t){i("DeclareModule",e,t)}function Ge(e,t){i("DeclareModuleExports",e,t)}function $e(e,t){i("DeclareTypeAlias",e,t)}function ze(e,t){i("DeclareOpaqueType",e,t)}function He(e,t){i("DeclareVariable",e,t)}function Qe(e,t){i("DeclareExportDeclaration",e,t)}function Ze(e,t){i("DeclareExportAllDeclaration",e,t)}function et(e,t){i("DeclaredPredicate",e,t)}function tt(e,t){i("ExistsTypeAnnotation",e,t)}function nt(e,t){i("FunctionTypeAnnotation",e,t)}function rt(e,t){i("FunctionTypeParam",e,t)}function it(e,t){i("GenericTypeAnnotation",e,t)}function ot(e,t){i("InferredPredicate",e,t)}function at(e,t){i("InterfaceExtends",e,t)}function st(e,t){i("InterfaceDeclaration",e,t)}function ut(e,t){i("InterfaceTypeAnnotation",e,t)}function lt(e,t){i("IntersectionTypeAnnotation",e,t)}function ct(e,t){i("MixedTypeAnnotation",e,t)}function ft(e,t){i("EmptyTypeAnnotation",e,t)}function pt(e,t){i("NullableTypeAnnotation",e,t)}function dt(e,t){i("NumberLiteralTypeAnnotation",e,t)}function yt(e,t){i("NumberTypeAnnotation",e,t)}function mt(e,t){i("ObjectTypeAnnotation",e,t)}function Tt(e,t){i("ObjectTypeInternalSlot",e,t)}function vt(e,t){i("ObjectTypeCallProperty",e,t)}function bt(e,t){i("ObjectTypeIndexer",e,t)}function St(e,t){i("ObjectTypeProperty",e,t)}function gt(e,t){i("ObjectTypeSpreadProperty",e,t)}function Et(e,t){i("OpaqueType",e,t)}function ht(e,t){i("QualifiedTypeIdentifier",e,t)}function xt(e,t){i("StringLiteralTypeAnnotation",e,t)}function Pt(e,t){i("StringTypeAnnotation",e,t)}function At(e,t){i("SymbolTypeAnnotation",e,t)}function Ot(e,t){i("ThisTypeAnnotation",e,t)}function wt(e,t){i("TupleTypeAnnotation",e,t)}function _t(e,t){i("TypeofTypeAnnotation",e,t)}function It(e,t){i("TypeAlias",e,t)}function Nt(e,t){i("TypeAnnotation",e,t)}function jt(e,t){i("TypeCastExpression",e,t)}function Dt(e,t){i("TypeParameter",e,t)}function Lt(e,t){i("TypeParameterDeclaration",e,t)}function Ct(e,t){i("TypeParameterInstantiation",e,t)}function Mt(e,t){i("UnionTypeAnnotation",e,t)}function Bt(e,t){i("Variance",e,t)}function Rt(e,t){i("VoidTypeAnnotation",e,t)}function Ft(e,t){i("EnumDeclaration",e,t)}function kt(e,t){i("EnumBooleanBody",e,t)}function Vt(e,t){i("EnumNumberBody",e,t)}function Kt(e,t){i("EnumStringBody",e,t)}function Yt(e,t){i("EnumSymbolBody",e,t)}function Ut(e,t){i("EnumBooleanMember",e,t)}function Jt(e,t){i("EnumNumberMember",e,t)}function Xt(e,t){i("EnumStringMember",e,t)}function qt(e,t){i("EnumDefaultedMember",e,t)}function Wt(e,t){i("IndexedAccessType",e,t)}function Gt(e,t){i("OptionalIndexedAccessType",e,t)}function $t(e,t){i("JSXAttribute",e,t)}function zt(e,t){i("JSXClosingElement",e,t)}function Ht(e,t){i("JSXElement",e,t)}function Qt(e,t){i("JSXEmptyExpression",e,t)}function Zt(e,t){i("JSXExpressionContainer",e,t)}function en(e,t){i("JSXSpreadChild",e,t)}function tn(e,t){i("JSXIdentifier",e,t)}function nn(e,t){i("JSXMemberExpression",e,t)}function rn(e,t){i("JSXNamespacedName",e,t)}function on(e,t){i("JSXOpeningElement",e,t)}function an(e,t){i("JSXSpreadAttribute",e,t)}function sn(e,t){i("JSXText",e,t)}function un(e,t){i("JSXFragment",e,t)}function ln(e,t){i("JSXOpeningFragment",e,t)}function cn(e,t){i("JSXClosingFragment",e,t)}function fn(e,t){i("Noop",e,t)}function pn(e,t){i("Placeholder",e,t)}function dn(e,t){i("V8IntrinsicIdentifier",e,t)}function yn(e,t){i("ArgumentPlaceholder",e,t)}function mn(e,t){i("BindExpression",e,t)}function Tn(e,t){i("ImportAttribute",e,t)}function vn(e,t){i("Decorator",e,t)}function bn(e,t){i("DoExpression",e,t)}function Sn(e,t){i("ExportDefaultSpecifier",e,t)}function gn(e,t){i("RecordExpression",e,t)}function En(e,t){i("TupleExpression",e,t)}function hn(e,t){i("DecimalLiteral",e,t)}function xn(e,t){i("ModuleExpression",e,t)}function Pn(e,t){i("TopicReference",e,t)}function An(e,t){i("PipelineTopicExpression",e,t)}function On(e,t){i("PipelineBareFunction",e,t)}function wn(e,t){i("PipelinePrimaryTopicReference",e,t)}function _n(e,t){i("TSParameterProperty",e,t)}function In(e,t){i("TSDeclareFunction",e,t)}function Nn(e,t){i("TSDeclareMethod",e,t)}function jn(e,t){i("TSQualifiedName",e,t)}function Dn(e,t){i("TSCallSignatureDeclaration",e,t)}function Ln(e,t){i("TSConstructSignatureDeclaration",e,t)}function Cn(e,t){i("TSPropertySignature",e,t)}function Mn(e,t){i("TSMethodSignature",e,t)}function Bn(e,t){i("TSIndexSignature",e,t)}function Rn(e,t){i("TSAnyKeyword",e,t)}function Fn(e,t){i("TSBooleanKeyword",e,t)}function kn(e,t){i("TSBigIntKeyword",e,t)}function Vn(e,t){i("TSIntrinsicKeyword",e,t)}function Kn(e,t){i("TSNeverKeyword",e,t)}function Yn(e,t){i("TSNullKeyword",e,t)}function Un(e,t){i("TSNumberKeyword",e,t)}function Jn(e,t){i("TSObjectKeyword",e,t)}function Xn(e,t){i("TSStringKeyword",e,t)}function qn(e,t){i("TSSymbolKeyword",e,t)}function Wn(e,t){i("TSUndefinedKeyword",e,t)}function Gn(e,t){i("TSUnknownKeyword",e,t)}function $n(e,t){i("TSVoidKeyword",e,t)}function zn(e,t){i("TSThisType",e,t)}function Hn(e,t){i("TSFunctionType",e,t)}function Qn(e,t){i("TSConstructorType",e,t)}function Zn(e,t){i("TSTypeReference",e,t)}function er(e,t){i("TSTypePredicate",e,t)}function tr(e,t){i("TSTypeQuery",e,t)}function nr(e,t){i("TSTypeLiteral",e,t)}function rr(e,t){i("TSArrayType",e,t)}function ir(e,t){i("TSTupleType",e,t)}function or(e,t){i("TSOptionalType",e,t)}function ar(e,t){i("TSRestType",e,t)}function sr(e,t){i("TSNamedTupleMember",e,t)}function ur(e,t){i("TSUnionType",e,t)}function lr(e,t){i("TSIntersectionType",e,t)}function cr(e,t){i("TSConditionalType",e,t)}function fr(e,t){i("TSInferType",e,t)}function pr(e,t){i("TSParenthesizedType",e,t)}function dr(e,t){i("TSTypeOperator",e,t)}function yr(e,t){i("TSIndexedAccessType",e,t)}function mr(e,t){i("TSMappedType",e,t)}function Tr(e,t){i("TSLiteralType",e,t)}function vr(e,t){i("TSExpressionWithTypeArguments",e,t)}function br(e,t){i("TSInterfaceDeclaration",e,t)}function Sr(e,t){i("TSInterfaceBody",e,t)}function gr(e,t){i("TSTypeAliasDeclaration",e,t)}function Er(e,t){i("TSInstantiationExpression",e,t)}function hr(e,t){i("TSAsExpression",e,t)}function xr(e,t){i("TSTypeAssertion",e,t)}function Pr(e,t){i("TSEnumDeclaration",e,t)}function Ar(e,t){i("TSEnumMember",e,t)}function Or(e,t){i("TSModuleDeclaration",e,t)}function wr(e,t){i("TSModuleBlock",e,t)}function _r(e,t){i("TSImportType",e,t)}function Ir(e,t){i("TSImportEqualsDeclaration",e,t)}function Nr(e,t){i("TSExternalModuleReference",e,t)}function jr(e,t){i("TSNonNullExpression",e,t)}function Dr(e,t){i("TSExportAssignment",e,t)}function Lr(e,t){i("TSNamespaceExportDeclaration",e,t)}function Cr(e,t){i("TSTypeAnnotation",e,t)}function Mr(e,t){i("TSTypeParameterInstantiation",e,t)}function Br(e,t){i("TSTypeParameterDeclaration",e,t)}function Rr(e,t){i("TSTypeParameter",e,t)}function Fr(e,t){i("Standardized",e,t)}function kr(e,t){i("Expression",e,t)}function Vr(e,t){i("Binary",e,t)}function Kr(e,t){i("Scopable",e,t)}function Yr(e,t){i("BlockParent",e,t)}function Ur(e,t){i("Block",e,t)}function Jr(e,t){i("Statement",e,t)}function Xr(e,t){i("Terminatorless",e,t)}function qr(e,t){i("CompletionStatement",e,t)}function Wr(e,t){i("Conditional",e,t)}function Gr(e,t){i("Loop",e,t)}function $r(e,t){i("While",e,t)}function zr(e,t){i("ExpressionWrapper",e,t)}function Hr(e,t){i("For",e,t)}function Qr(e,t){i("ForXStatement",e,t)}function Zr(e,t){i("Function",e,t)}function ei(e,t){i("FunctionParent",e,t)}function ti(e,t){i("Pureish",e,t)}function ni(e,t){i("Declaration",e,t)}function ri(e,t){i("PatternLike",e,t)}function ii(e,t){i("LVal",e,t)}function oi(e,t){i("TSEntityName",e,t)}function ai(e,t){i("Literal",e,t)}function si(e,t){i("Immutable",e,t)}function ui(e,t){i("UserWhitespacable",e,t)}function li(e,t){i("Method",e,t)}function ci(e,t){i("ObjectMember",e,t)}function fi(e,t){i("Property",e,t)}function pi(e,t){i("UnaryLike",e,t)}function di(e,t){i("Pattern",e,t)}function yi(e,t){i("Class",e,t)}function mi(e,t){i("ModuleDeclaration",e,t)}function Ti(e,t){i("ExportDeclaration",e,t)}function vi(e,t){i("ModuleSpecifier",e,t)}function bi(e,t){i("Accessor",e,t)}function Si(e,t){i("Private",e,t)}function gi(e,t){i("Flow",e,t)}function Ei(e,t){i("FlowType",e,t)}function hi(e,t){i("FlowBaseAnnotation",e,t)}function xi(e,t){i("FlowDeclaration",e,t)}function Pi(e,t){i("FlowPredicate",e,t)}function Ai(e,t){i("EnumBody",e,t)}function Oi(e,t){i("EnumMember",e,t)}function wi(e,t){i("JSX",e,t)}function _i(e,t){i("Miscellaneous",e,t)}function Ii(e,t){i("TypeScript",e,t)}function Ni(e,t){i("TSTypeElement",e,t)}function ji(e,t){i("TSType",e,t)}function Di(e,t){i("TSBaseType",e,t)}function Li(e,t){console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),i("NumberLiteral",e,t)}function Ci(e,t){console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),i("RegexLiteral",e,t)}function Mi(e,t){console.trace("The node type RestProperty has been renamed to RestElement"),i("RestProperty",e,t)}function Bi(e,t){console.trace("The node type SpreadProperty has been renamed to SpreadElement"),i("SpreadProperty",e,t)}},99606:function(){},43576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(18771),i=n(32802);function o(e){const t=(0,i.default)(e);return 1===t.length?t[0]:(0,r.unionTypeAnnotation)(t)}},3270:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(18771),i=o;function o(e){switch(e){case"string":return(0,r.stringTypeAnnotation)();case"number":return(0,r.numberTypeAnnotation)();case"undefined":return(0,r.voidTypeAnnotation)();case"boolean":return(0,r.booleanTypeAnnotation)();case"function":return(0,r.genericTypeAnnotation)((0,r.identifier)("Function"));case"object":return(0,r.genericTypeAnnotation)((0,r.identifier)("Object"));case"symbol":return(0,r.genericTypeAnnotation)((0,r.identifier)("Symbol"));case"bigint":return(0,r.anyTypeAnnotation)()}throw new Error("Invalid typeof value: "+e)}t["default"]=i},18771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anyTypeAnnotation=Re,t.argumentPlaceholder=dn,t.arrayExpression=i,t.arrayPattern=ne,t.arrayTypeAnnotation=Fe,t.arrowFunctionExpression=re,t.assignmentExpression=o,t.assignmentPattern=te,t.awaitExpression=Ae,t.bigIntLiteral=we,t.binaryExpression=a,t.bindExpression=yn,t.blockStatement=c,t.booleanLiteral=j,t.booleanLiteralTypeAnnotation=Ve,t.booleanTypeAnnotation=ke,t.breakStatement=f,t.callExpression=p,t.catchClause=d,t.classAccessorProperty=De,t.classBody=ie,t.classDeclaration=ae,t.classExpression=oe,t.classImplements=Ye,t.classMethod=ve,t.classPrivateMethod=Ce,t.classPrivateProperty=Le,t.classProperty=je,t.conditionalExpression=y,t.continueStatement=m,t.debuggerStatement=T,t.decimalLiteral=En,t.declareClass=Ue,t.declareExportAllDeclaration=Qe,t.declareExportDeclaration=He,t.declareFunction=Je,t.declareInterface=Xe,t.declareModule=qe,t.declareModuleExports=We,t.declareOpaqueType=$e,t.declareTypeAlias=Ge,t.declareVariable=ze,t.declaredPredicate=Ze,t.decorator=Tn,t.directive=u,t.directiveLiteral=l,t.doExpression=vn,t.doWhileStatement=v,t.emptyStatement=b,t.emptyTypeAnnotation=ct,t.enumBooleanBody=Ft,t.enumBooleanMember=Yt,t.enumDeclaration=Rt,t.enumDefaultedMember=Xt,t.enumNumberBody=kt,t.enumNumberMember=Ut,t.enumStringBody=Vt,t.enumStringMember=Jt,t.enumSymbolBody=Kt,t.existsTypeAnnotation=et,t.exportAllDeclaration=se,t.exportDefaultDeclaration=ue,t.exportDefaultSpecifier=bn,t.exportNamedDeclaration=le,t.exportNamespaceSpecifier=_e,t.exportSpecifier=ce,t.expressionStatement=S,t.file=g,t.forInStatement=E,t.forOfStatement=fe,t.forStatement=h,t.functionDeclaration=x,t.functionExpression=P,t.functionTypeAnnotation=tt,t.functionTypeParam=nt,t.genericTypeAnnotation=rt,t.identifier=A,t.ifStatement=O,t["import"]=Oe,t.importAttribute=mn,t.importDeclaration=pe,t.importDefaultSpecifier=de,t.importNamespaceSpecifier=ye,t.importSpecifier=me,t.indexedAccessType=qt,t.inferredPredicate=it,t.interfaceDeclaration=at,t.interfaceExtends=ot,t.interfaceTypeAnnotation=st,t.interpreterDirective=s,t.intersectionTypeAnnotation=ut,t.jSXAttribute=t.jsxAttribute=Gt,t.jSXClosingElement=t.jsxClosingElement=$t,t.jSXClosingFragment=t.jsxClosingFragment=ln,t.jSXElement=t.jsxElement=zt,t.jSXEmptyExpression=t.jsxEmptyExpression=Ht,t.jSXExpressionContainer=t.jsxExpressionContainer=Qt,t.jSXFragment=t.jsxFragment=sn,t.jSXIdentifier=t.jsxIdentifier=en,t.jSXMemberExpression=t.jsxMemberExpression=tn,t.jSXNamespacedName=t.jsxNamespacedName=nn,t.jSXOpeningElement=t.jsxOpeningElement=rn,t.jSXOpeningFragment=t.jsxOpeningFragment=un,t.jSXSpreadAttribute=t.jsxSpreadAttribute=on,t.jSXSpreadChild=t.jsxSpreadChild=Zt,t.jSXText=t.jsxText=an,t.labeledStatement=w,t.logicalExpression=L,t.memberExpression=C,t.metaProperty=Te,t.mixedTypeAnnotation=lt,t.moduleExpression=hn,t.newExpression=M,t.noop=cn,t.nullLiteral=N,t.nullLiteralTypeAnnotation=Ke,t.nullableTypeAnnotation=ft,t.numberLiteral=Rr,t.numberLiteralTypeAnnotation=pt,t.numberTypeAnnotation=dt,t.numericLiteral=I,t.objectExpression=R,t.objectMethod=F,t.objectPattern=be,t.objectProperty=k,t.objectTypeAnnotation=yt,t.objectTypeCallProperty=Tt,t.objectTypeIndexer=vt,t.objectTypeInternalSlot=mt,t.objectTypeProperty=bt,t.objectTypeSpreadProperty=St,t.opaqueType=gt,t.optionalCallExpression=Ne,t.optionalIndexedAccessType=Wt,t.optionalMemberExpression=Ie,t.parenthesizedExpression=U,t.pipelineBareFunction=An,t.pipelinePrimaryTopicReference=On,t.pipelineTopicExpression=Pn,t.placeholder=fn,t.privateName=Me,t.program=B,t.qualifiedTypeIdentifier=Et,t.recordExpression=Sn,t.regExpLiteral=D,t.regexLiteral=Fr,t.restElement=V,t.restProperty=kr,t.returnStatement=K,t.sequenceExpression=Y,t.spreadElement=Se,t.spreadProperty=Vr,t.staticBlock=Be,t.stringLiteral=_,t.stringLiteralTypeAnnotation=ht,t.stringTypeAnnotation=xt,t["super"]=ge,t.switchCase=J,t.switchStatement=X,t.symbolTypeAnnotation=Pt,t.taggedTemplateExpression=Ee,t.templateElement=he,t.templateLiteral=xe,t.thisExpression=q,t.thisTypeAnnotation=At,t.throwStatement=W,t.topicReference=xn,t.tryStatement=G,t.tSAnyKeyword=t.tsAnyKeyword=Bn,t.tSArrayType=t.tsArrayType=nr,t.tSAsExpression=t.tsAsExpression=Er,t.tSBigIntKeyword=t.tsBigIntKeyword=Fn,t.tSBooleanKeyword=t.tsBooleanKeyword=Rn,t.tSCallSignatureDeclaration=t.tsCallSignatureDeclaration=jn,t.tSConditionalType=t.tsConditionalType=lr,t.tSConstructSignatureDeclaration=t.tsConstructSignatureDeclaration=Dn,t.tSConstructorType=t.tsConstructorType=Hn,t.tSDeclareFunction=t.tsDeclareFunction=_n,t.tSDeclareMethod=t.tsDeclareMethod=In,t.tSEnumDeclaration=t.tsEnumDeclaration=xr,t.tSEnumMember=t.tsEnumMember=Pr,t.tSExportAssignment=t.tsExportAssignment=jr,t.tSExpressionWithTypeArguments=t.tsExpressionWithTypeArguments=Tr,t.tSExternalModuleReference=t.tsExternalModuleReference=Ir,t.tSFunctionType=t.tsFunctionType=zn,t.tSImportEqualsDeclaration=t.tsImportEqualsDeclaration=_r,t.tSImportType=t.tsImportType=wr,t.tSIndexSignature=t.tsIndexSignature=Mn,t.tSIndexedAccessType=t.tsIndexedAccessType=dr,t.tSInferType=t.tsInferType=cr,t.tSInstantiationExpression=t.tsInstantiationExpression=gr,t.tSInterfaceBody=t.tsInterfaceBody=br,t.tSInterfaceDeclaration=t.tsInterfaceDeclaration=vr,t.tSIntersectionType=t.tsIntersectionType=ur,t.tSIntrinsicKeyword=t.tsIntrinsicKeyword=kn,t.tSLiteralType=t.tsLiteralType=mr,t.tSMappedType=t.tsMappedType=yr,t.tSMethodSignature=t.tsMethodSignature=Cn,t.tSModuleBlock=t.tsModuleBlock=Or,t.tSModuleDeclaration=t.tsModuleDeclaration=Ar,t.tSNamedTupleMember=t.tsNamedTupleMember=ar,t.tSNamespaceExportDeclaration=t.tsNamespaceExportDeclaration=Dr,t.tSNeverKeyword=t.tsNeverKeyword=Vn,t.tSNonNullExpression=t.tsNonNullExpression=Nr,t.tSNullKeyword=t.tsNullKeyword=Kn,t.tSNumberKeyword=t.tsNumberKeyword=Yn,t.tSObjectKeyword=t.tsObjectKeyword=Un,t.tSOptionalType=t.tsOptionalType=ir,t.tSParameterProperty=t.tsParameterProperty=wn,t.tSParenthesizedType=t.tsParenthesizedType=fr,t.tSPropertySignature=t.tsPropertySignature=Ln,t.tSQualifiedName=t.tsQualifiedName=Nn,t.tSRestType=t.tsRestType=or,t.tSStringKeyword=t.tsStringKeyword=Jn,t.tSSymbolKeyword=t.tsSymbolKeyword=Xn,t.tSThisType=t.tsThisType=$n,t.tSTupleType=t.tsTupleType=rr,t.tSTypeAliasDeclaration=t.tsTypeAliasDeclaration=Sr,t.tSTypeAnnotation=t.tsTypeAnnotation=Lr,t.tSTypeAssertion=t.tsTypeAssertion=hr,t.tSTypeLiteral=t.tsTypeLiteral=tr,t.tSTypeOperator=t.tsTypeOperator=pr,t.tSTypeParameter=t.tsTypeParameter=Br,t.tSTypeParameterDeclaration=t.tsTypeParameterDeclaration=Mr,t.tSTypeParameterInstantiation=t.tsTypeParameterInstantiation=Cr,t.tSTypePredicate=t.tsTypePredicate=Zn,t.tSTypeQuery=t.tsTypeQuery=er,t.tSTypeReference=t.tsTypeReference=Qn,t.tSUndefinedKeyword=t.tsUndefinedKeyword=qn,t.tSUnionType=t.tsUnionType=sr,t.tSUnknownKeyword=t.tsUnknownKeyword=Wn,t.tSVoidKeyword=t.tsVoidKeyword=Gn,t.tupleExpression=gn,t.tupleTypeAnnotation=Ot,t.typeAlias=_t,t.typeAnnotation=It,t.typeCastExpression=Nt,t.typeParameter=jt,t.typeParameterDeclaration=Dt,t.typeParameterInstantiation=Lt,t.typeofTypeAnnotation=wt,t.unaryExpression=$,t.unionTypeAnnotation=Ct,t.updateExpression=z,t.v8IntrinsicIdentifier=pn,t.variableDeclaration=H,t.variableDeclarator=Q,t.variance=Mt,t.voidTypeAnnotation=Bt,t.whileStatement=Z,t.withStatement=ee,t.yieldExpression=Pe;var r=n(35890);function i(e=[]){return(0,r.default)({type:"ArrayExpression",elements:e})}function o(e,t,n){return(0,r.default)({type:"AssignmentExpression",operator:e,left:t,right:n})}function a(e,t,n){return(0,r.default)({type:"BinaryExpression",operator:e,left:t,right:n})}function s(e){return(0,r.default)({type:"InterpreterDirective",value:e})}function u(e){return(0,r.default)({type:"Directive",value:e})}function l(e){return(0,r.default)({type:"DirectiveLiteral",value:e})}function c(e,t=[]){return(0,r.default)({type:"BlockStatement",body:e,directives:t})}function f(e=null){return(0,r.default)({type:"BreakStatement",label:e})}function p(e,t){return(0,r.default)({type:"CallExpression",callee:e,arguments:t})}function d(e=null,t){return(0,r.default)({type:"CatchClause",param:e,body:t})}function y(e,t,n){return(0,r.default)({type:"ConditionalExpression",test:e,consequent:t,alternate:n})}function m(e=null){return(0,r.default)({type:"ContinueStatement",label:e})}function T(){return{type:"DebuggerStatement"}}function v(e,t){return(0,r.default)({type:"DoWhileStatement",test:e,body:t})}function b(){return{type:"EmptyStatement"}}function S(e){return(0,r.default)({type:"ExpressionStatement",expression:e})}function g(e,t=null,n=null){return(0,r.default)({type:"File",program:e,comments:t,tokens:n})}function E(e,t,n){return(0,r.default)({type:"ForInStatement",left:e,right:t,body:n})}function h(e=null,t=null,n=null,i){return(0,r.default)({type:"ForStatement",init:e,test:t,update:n,body:i})}function x(e=null,t,n,i=!1,o=!1){return(0,r.default)({type:"FunctionDeclaration",id:e,params:t,body:n,generator:i,async:o})}function P(e=null,t,n,i=!1,o=!1){return(0,r.default)({type:"FunctionExpression",id:e,params:t,body:n,generator:i,async:o})}function A(e){return(0,r.default)({type:"Identifier",name:e})}function O(e,t,n=null){return(0,r.default)({type:"IfStatement",test:e,consequent:t,alternate:n})}function w(e,t){return(0,r.default)({type:"LabeledStatement",label:e,body:t})}function _(e){return(0,r.default)({type:"StringLiteral",value:e})}function I(e){return(0,r.default)({type:"NumericLiteral",value:e})}function N(){return{type:"NullLiteral"}}function j(e){return(0,r.default)({type:"BooleanLiteral",value:e})}function D(e,t=""){return(0,r.default)({type:"RegExpLiteral",pattern:e,flags:t})}function L(e,t,n){return(0,r.default)({type:"LogicalExpression",operator:e,left:t,right:n})}function C(e,t,n=!1,i=null){return(0,r.default)({type:"MemberExpression",object:e,property:t,computed:n,optional:i})}function M(e,t){return(0,r.default)({type:"NewExpression",callee:e,arguments:t})}function B(e,t=[],n="script",i=null){return(0,r.default)({type:"Program",body:e,directives:t,sourceType:n,interpreter:i,sourceFile:null})}function R(e){return(0,r.default)({type:"ObjectExpression",properties:e})}function F(e="method",t,n,i,o=!1,a=!1,s=!1){return(0,r.default)({type:"ObjectMethod",kind:e,key:t,params:n,body:i,computed:o,generator:a,async:s})}function k(e,t,n=!1,i=!1,o=null){return(0,r.default)({type:"ObjectProperty",key:e,value:t,computed:n,shorthand:i,decorators:o})}function V(e){return(0,r.default)({type:"RestElement",argument:e})}function K(e=null){return(0,r.default)({type:"ReturnStatement",argument:e})}function Y(e){return(0,r.default)({type:"SequenceExpression",expressions:e})}function U(e){return(0,r.default)({type:"ParenthesizedExpression",expression:e})}function J(e=null,t){return(0,r.default)({type:"SwitchCase",test:e,consequent:t})}function X(e,t){return(0,r.default)({type:"SwitchStatement",discriminant:e,cases:t})}function q(){return{type:"ThisExpression"}}function W(e){return(0,r.default)({type:"ThrowStatement",argument:e})}function G(e,t=null,n=null){return(0,r.default)({type:"TryStatement",block:e,handler:t,finalizer:n})}function $(e,t,n=!0){return(0,r.default)({type:"UnaryExpression",operator:e,argument:t,prefix:n})}function z(e,t,n=!1){return(0,r.default)({type:"UpdateExpression",operator:e,argument:t,prefix:n})}function H(e,t){return(0,r.default)({type:"VariableDeclaration",kind:e,declarations:t})}function Q(e,t=null){return(0,r.default)({type:"VariableDeclarator",id:e,init:t})}function Z(e,t){return(0,r.default)({type:"WhileStatement",test:e,body:t})}function ee(e,t){return(0,r.default)({type:"WithStatement",object:e,body:t})}function te(e,t){return(0,r.default)({type:"AssignmentPattern",left:e,right:t})}function ne(e){return(0,r.default)({type:"ArrayPattern",elements:e})}function re(e,t,n=!1){return(0,r.default)({type:"ArrowFunctionExpression",params:e,body:t,async:n,expression:null})}function ie(e){return(0,r.default)({type:"ClassBody",body:e})}function oe(e=null,t=null,n,i=null){return(0,r.default)({type:"ClassExpression",id:e,superClass:t,body:n,decorators:i})}function ae(e,t=null,n,i=null){return(0,r.default)({type:"ClassDeclaration",id:e,superClass:t,body:n,decorators:i})}function se(e){return(0,r.default)({type:"ExportAllDeclaration",source:e})}function ue(e){return(0,r.default)({type:"ExportDefaultDeclaration",declaration:e})}function le(e=null,t=[],n=null){return(0,r.default)({type:"ExportNamedDeclaration",declaration:e,specifiers:t,source:n})}function ce(e,t){return(0,r.default)({type:"ExportSpecifier",local:e,exported:t})}function fe(e,t,n,i=!1){return(0,r.default)({type:"ForOfStatement",left:e,right:t,body:n,await:i})}function pe(e,t){return(0,r.default)({type:"ImportDeclaration",specifiers:e,source:t})}function de(e){return(0,r.default)({type:"ImportDefaultSpecifier",local:e})}function ye(e){return(0,r.default)({type:"ImportNamespaceSpecifier",local:e})}function me(e,t){return(0,r.default)({type:"ImportSpecifier",local:e,imported:t})}function Te(e,t){return(0,r.default)({type:"MetaProperty",meta:e,property:t})}function ve(e="method",t,n,i,o=!1,a=!1,s=!1,u=!1){return(0,r.default)({type:"ClassMethod",kind:e,key:t,params:n,body:i,computed:o,static:a,generator:s,async:u})}function be(e){return(0,r.default)({type:"ObjectPattern",properties:e})}function Se(e){return(0,r.default)({type:"SpreadElement",argument:e})}function ge(){return{type:"Super"}}function Ee(e,t){return(0,r.default)({type:"TaggedTemplateExpression",tag:e,quasi:t})}function he(e,t=!1){return(0,r.default)({type:"TemplateElement",value:e,tail:t})}function xe(e,t){return(0,r.default)({type:"TemplateLiteral",quasis:e,expressions:t})}function Pe(e=null,t=!1){return(0,r.default)({type:"YieldExpression",argument:e,delegate:t})}function Ae(e){return(0,r.default)({type:"AwaitExpression",argument:e})}function Oe(){return{type:"Import"}}function we(e){return(0,r.default)({type:"BigIntLiteral",value:e})}function _e(e){return(0,r.default)({type:"ExportNamespaceSpecifier",exported:e})}function Ie(e,t,n=!1,i){return(0,r.default)({type:"OptionalMemberExpression",object:e,property:t,computed:n,optional:i})}function Ne(e,t,n){return(0,r.default)({type:"OptionalCallExpression",callee:e,arguments:t,optional:n})}function je(e,t=null,n=null,i=null,o=!1,a=!1){return(0,r.default)({type:"ClassProperty",key:e,value:t,typeAnnotation:n,decorators:i,computed:o,static:a})}function De(e,t=null,n=null,i=null,o=!1,a=!1){return(0,r.default)({type:"ClassAccessorProperty",key:e,value:t,typeAnnotation:n,decorators:i,computed:o,static:a})}function Le(e,t=null,n=null,i){return(0,r.default)({type:"ClassPrivateProperty",key:e,value:t,decorators:n,static:i})}function Ce(e="method",t,n,i,o=!1){return(0,r.default)({type:"ClassPrivateMethod",kind:e,key:t,params:n,body:i,static:o})}function Me(e){return(0,r.default)({type:"PrivateName",id:e})}function Be(e){return(0,r.default)({type:"StaticBlock",body:e})}function Re(){return{type:"AnyTypeAnnotation"}}function Fe(e){return(0,r.default)({type:"ArrayTypeAnnotation",elementType:e})}function ke(){return{type:"BooleanTypeAnnotation"}}function Ve(e){return(0,r.default)({type:"BooleanLiteralTypeAnnotation",value:e})}function Ke(){return{type:"NullLiteralTypeAnnotation"}}function Ye(e,t=null){return(0,r.default)({type:"ClassImplements",id:e,typeParameters:t})}function Ue(e,t=null,n=null,i){return(0,r.default)({type:"DeclareClass",id:e,typeParameters:t,extends:n,body:i})}function Je(e){return(0,r.default)({type:"DeclareFunction",id:e})}function Xe(e,t=null,n=null,i){return(0,r.default)({type:"DeclareInterface",id:e,typeParameters:t,extends:n,body:i})}function qe(e,t,n=null){return(0,r.default)({type:"DeclareModule",id:e,body:t,kind:n})}function We(e){return(0,r.default)({type:"DeclareModuleExports",typeAnnotation:e})}function Ge(e,t=null,n){return(0,r.default)({type:"DeclareTypeAlias",id:e,typeParameters:t,right:n})}function $e(e,t=null,n=null){return(0,r.default)({type:"DeclareOpaqueType",id:e,typeParameters:t,supertype:n})}function ze(e){return(0,r.default)({type:"DeclareVariable",id:e})}function He(e=null,t=null,n=null){return(0,r.default)({type:"DeclareExportDeclaration",declaration:e,specifiers:t,source:n})}function Qe(e){return(0,r.default)({type:"DeclareExportAllDeclaration",source:e})}function Ze(e){return(0,r.default)({type:"DeclaredPredicate",value:e})}function et(){return{type:"ExistsTypeAnnotation"}}function tt(e=null,t,n=null,i){return(0,r.default)({type:"FunctionTypeAnnotation",typeParameters:e,params:t,rest:n,returnType:i})}function nt(e=null,t){return(0,r.default)({type:"FunctionTypeParam",name:e,typeAnnotation:t})}function rt(e,t=null){return(0,r.default)({type:"GenericTypeAnnotation",id:e,typeParameters:t})}function it(){return{type:"InferredPredicate"}}function ot(e,t=null){return(0,r.default)({type:"InterfaceExtends",id:e,typeParameters:t})}function at(e,t=null,n=null,i){return(0,r.default)({type:"InterfaceDeclaration",id:e,typeParameters:t,extends:n,body:i})}function st(e=null,t){return(0,r.default)({type:"InterfaceTypeAnnotation",extends:e,body:t})}function ut(e){return(0,r.default)({type:"IntersectionTypeAnnotation",types:e})}function lt(){return{type:"MixedTypeAnnotation"}}function ct(){return{type:"EmptyTypeAnnotation"}}function ft(e){return(0,r.default)({type:"NullableTypeAnnotation",typeAnnotation:e})}function pt(e){return(0,r.default)({type:"NumberLiteralTypeAnnotation",value:e})}function dt(){return{type:"NumberTypeAnnotation"}}function yt(e,t=[],n=[],i=[],o=!1){return(0,r.default)({type:"ObjectTypeAnnotation",properties:e,indexers:t,callProperties:n,internalSlots:i,exact:o})}function mt(e,t,n,i,o){return(0,r.default)({type:"ObjectTypeInternalSlot",id:e,value:t,optional:n,static:i,method:o})}function Tt(e){return(0,r.default)({type:"ObjectTypeCallProperty",value:e,static:null})}function vt(e=null,t,n,i=null){return(0,r.default)({type:"ObjectTypeIndexer",id:e,key:t,value:n,variance:i,static:null})}function bt(e,t,n=null){return(0,r.default)({type:"ObjectTypeProperty",key:e,value:t,variance:n,kind:null,method:null,optional:null,proto:null,static:null})}function St(e){return(0,r.default)({type:"ObjectTypeSpreadProperty",argument:e})}function gt(e,t=null,n=null,i){return(0,r.default)({type:"OpaqueType",id:e,typeParameters:t,supertype:n,impltype:i})}function Et(e,t){return(0,r.default)({type:"QualifiedTypeIdentifier",id:e,qualification:t})}function ht(e){return(0,r.default)({type:"StringLiteralTypeAnnotation",value:e})}function xt(){return{type:"StringTypeAnnotation"}}function Pt(){return{type:"SymbolTypeAnnotation"}}function At(){return{type:"ThisTypeAnnotation"}}function Ot(e){return(0,r.default)({type:"TupleTypeAnnotation",types:e})}function wt(e){return(0,r.default)({type:"TypeofTypeAnnotation",argument:e})}function _t(e,t=null,n){return(0,r.default)({type:"TypeAlias",id:e,typeParameters:t,right:n})}function It(e){return(0,r.default)({type:"TypeAnnotation",typeAnnotation:e})}function Nt(e,t){return(0,r.default)({type:"TypeCastExpression",expression:e,typeAnnotation:t})}function jt(e=null,t=null,n=null){return(0,r.default)({type:"TypeParameter",bound:e,default:t,variance:n,name:null})}function Dt(e){return(0,r.default)({type:"TypeParameterDeclaration",params:e})}function Lt(e){return(0,r.default)({type:"TypeParameterInstantiation",params:e})}function Ct(e){return(0,r.default)({type:"UnionTypeAnnotation",types:e})}function Mt(e){return(0,r.default)({type:"Variance",kind:e})}function Bt(){return{type:"VoidTypeAnnotation"}}function Rt(e,t){return(0,r.default)({type:"EnumDeclaration",id:e,body:t})}function Ft(e){return(0,r.default)({type:"EnumBooleanBody",members:e,explicitType:null,hasUnknownMembers:null})}function kt(e){return(0,r.default)({type:"EnumNumberBody",members:e,explicitType:null,hasUnknownMembers:null})}function Vt(e){return(0,r.default)({type:"EnumStringBody",members:e,explicitType:null,hasUnknownMembers:null})}function Kt(e){return(0,r.default)({type:"EnumSymbolBody",members:e,hasUnknownMembers:null})}function Yt(e){return(0,r.default)({type:"EnumBooleanMember",id:e,init:null})}function Ut(e,t){return(0,r.default)({type:"EnumNumberMember",id:e,init:t})}function Jt(e,t){return(0,r.default)({type:"EnumStringMember",id:e,init:t})}function Xt(e){return(0,r.default)({type:"EnumDefaultedMember",id:e})}function qt(e,t){return(0,r.default)({type:"IndexedAccessType",objectType:e,indexType:t})}function Wt(e,t){return(0,r.default)({type:"OptionalIndexedAccessType",objectType:e,indexType:t,optional:null})}function Gt(e,t=null){return(0,r.default)({type:"JSXAttribute",name:e,value:t})}function $t(e){return(0,r.default)({type:"JSXClosingElement",name:e})}function zt(e,t=null,n,i=null){return(0,r.default)({type:"JSXElement",openingElement:e,closingElement:t,children:n,selfClosing:i})}function Ht(){return{type:"JSXEmptyExpression"}}function Qt(e){return(0,r.default)({type:"JSXExpressionContainer",expression:e})}function Zt(e){return(0,r.default)({type:"JSXSpreadChild",expression:e})}function en(e){return(0,r.default)({type:"JSXIdentifier",name:e})}function tn(e,t){return(0,r.default)({type:"JSXMemberExpression",object:e,property:t})}function nn(e,t){return(0,r.default)({type:"JSXNamespacedName",namespace:e,name:t})}function rn(e,t,n=!1){return(0,r.default)({type:"JSXOpeningElement",name:e,attributes:t,selfClosing:n})}function on(e){return(0,r.default)({type:"JSXSpreadAttribute",argument:e})}function an(e){return(0,r.default)({type:"JSXText",value:e})}function sn(e,t,n){return(0,r.default)({type:"JSXFragment",openingFragment:e,closingFragment:t,children:n})}function un(){return{type:"JSXOpeningFragment"}}function ln(){return{type:"JSXClosingFragment"}}function cn(){return{type:"Noop"}}function fn(e,t){return(0,r.default)({type:"Placeholder",expectedNode:e,name:t})}function pn(e){return(0,r.default)({type:"V8IntrinsicIdentifier",name:e})}function dn(){return{type:"ArgumentPlaceholder"}}function yn(e,t){return(0,r.default)({type:"BindExpression",object:e,callee:t})}function mn(e,t){return(0,r.default)({type:"ImportAttribute",key:e,value:t})}function Tn(e){return(0,r.default)({type:"Decorator",expression:e})}function vn(e,t=!1){return(0,r.default)({type:"DoExpression",body:e,async:t})}function bn(e){return(0,r.default)({type:"ExportDefaultSpecifier",exported:e})}function Sn(e){return(0,r.default)({type:"RecordExpression",properties:e})}function gn(e=[]){return(0,r.default)({type:"TupleExpression",elements:e})}function En(e){return(0,r.default)({type:"DecimalLiteral",value:e})}function hn(e){return(0,r.default)({type:"ModuleExpression",body:e})}function xn(){return{type:"TopicReference"}}function Pn(e){return(0,r.default)({type:"PipelineTopicExpression",expression:e})}function An(e){return(0,r.default)({type:"PipelineBareFunction",callee:e})}function On(){return{type:"PipelinePrimaryTopicReference"}}function wn(e){return(0,r.default)({type:"TSParameterProperty",parameter:e})}function _n(e=null,t=null,n,i=null){return(0,r.default)({type:"TSDeclareFunction",id:e,typeParameters:t,params:n,returnType:i})}function In(e=null,t,n=null,i,o=null){return(0,r.default)({type:"TSDeclareMethod",decorators:e,key:t,typeParameters:n,params:i,returnType:o})}function Nn(e,t){return(0,r.default)({type:"TSQualifiedName",left:e,right:t})}function jn(e=null,t,n=null){return(0,r.default)({type:"TSCallSignatureDeclaration",typeParameters:e,parameters:t,typeAnnotation:n})}function Dn(e=null,t,n=null){return(0,r.default)({type:"TSConstructSignatureDeclaration",typeParameters:e,parameters:t,typeAnnotation:n})}function Ln(e,t=null,n=null){return(0,r.default)({type:"TSPropertySignature",key:e,typeAnnotation:t,initializer:n,kind:null})}function Cn(e,t=null,n,i=null){return(0,r.default)({type:"TSMethodSignature",key:e,typeParameters:t,parameters:n,typeAnnotation:i,kind:null})}function Mn(e,t=null){return(0,r.default)({type:"TSIndexSignature",parameters:e,typeAnnotation:t})}function Bn(){return{type:"TSAnyKeyword"}}function Rn(){return{type:"TSBooleanKeyword"}}function Fn(){return{type:"TSBigIntKeyword"}}function kn(){return{type:"TSIntrinsicKeyword"}}function Vn(){return{type:"TSNeverKeyword"}}function Kn(){return{type:"TSNullKeyword"}}function Yn(){return{type:"TSNumberKeyword"}}function Un(){return{type:"TSObjectKeyword"}}function Jn(){return{type:"TSStringKeyword"}}function Xn(){return{type:"TSSymbolKeyword"}}function qn(){return{type:"TSUndefinedKeyword"}}function Wn(){return{type:"TSUnknownKeyword"}}function Gn(){return{type:"TSVoidKeyword"}}function $n(){return{type:"TSThisType"}}function zn(e=null,t,n=null){return(0,r.default)({type:"TSFunctionType",typeParameters:e,parameters:t,typeAnnotation:n})}function Hn(e=null,t,n=null){return(0,r.default)({type:"TSConstructorType",typeParameters:e,parameters:t,typeAnnotation:n})}function Qn(e,t=null){return(0,r.default)({type:"TSTypeReference",typeName:e,typeParameters:t})}function Zn(e,t=null,n=null){return(0,r.default)({type:"TSTypePredicate",parameterName:e,typeAnnotation:t,asserts:n})}function er(e,t=null){return(0,r.default)({type:"TSTypeQuery",exprName:e,typeParameters:t})}function tr(e){return(0,r.default)({type:"TSTypeLiteral",members:e})}function nr(e){return(0,r.default)({type:"TSArrayType",elementType:e})}function rr(e){return(0,r.default)({type:"TSTupleType",elementTypes:e})}function ir(e){return(0,r.default)({type:"TSOptionalType",typeAnnotation:e})}function or(e){return(0,r.default)({type:"TSRestType",typeAnnotation:e})}function ar(e,t,n=!1){return(0,r.default)({type:"TSNamedTupleMember",label:e,elementType:t,optional:n})}function sr(e){return(0,r.default)({type:"TSUnionType",types:e})}function ur(e){return(0,r.default)({type:"TSIntersectionType",types:e})}function lr(e,t,n,i){return(0,r.default)({type:"TSConditionalType",checkType:e,extendsType:t,trueType:n,falseType:i})}function cr(e){return(0,r.default)({type:"TSInferType",typeParameter:e})}function fr(e){return(0,r.default)({type:"TSParenthesizedType",typeAnnotation:e})}function pr(e){return(0,r.default)({type:"TSTypeOperator",typeAnnotation:e,operator:null})}function dr(e,t){return(0,r.default)({type:"TSIndexedAccessType",objectType:e,indexType:t})}function yr(e,t=null,n=null){return(0,r.default)({type:"TSMappedType",typeParameter:e,typeAnnotation:t,nameType:n})}function mr(e){return(0,r.default)({type:"TSLiteralType",literal:e})}function Tr(e,t=null){return(0,r.default)({type:"TSExpressionWithTypeArguments",expression:e,typeParameters:t})}function vr(e,t=null,n=null,i){return(0,r.default)({type:"TSInterfaceDeclaration",id:e,typeParameters:t,extends:n,body:i})}function br(e){return(0,r.default)({type:"TSInterfaceBody",body:e})}function Sr(e,t=null,n){return(0,r.default)({type:"TSTypeAliasDeclaration",id:e,typeParameters:t,typeAnnotation:n})}function gr(e,t=null){return(0,r.default)({type:"TSInstantiationExpression",expression:e,typeParameters:t})}function Er(e,t){return(0,r.default)({type:"TSAsExpression",expression:e,typeAnnotation:t})}function hr(e,t){return(0,r.default)({type:"TSTypeAssertion",typeAnnotation:e,expression:t})}function xr(e,t){return(0,r.default)({type:"TSEnumDeclaration",id:e,members:t})}function Pr(e,t=null){return(0,r.default)({type:"TSEnumMember",id:e,initializer:t})}function Ar(e,t){return(0,r.default)({type:"TSModuleDeclaration",id:e,body:t})}function Or(e){return(0,r.default)({type:"TSModuleBlock",body:e})}function wr(e,t=null,n=null){return(0,r.default)({type:"TSImportType",argument:e,qualifier:t,typeParameters:n})}function _r(e,t){return(0,r.default)({type:"TSImportEqualsDeclaration",id:e,moduleReference:t,isExport:null})}function Ir(e){return(0,r.default)({type:"TSExternalModuleReference",expression:e})}function Nr(e){return(0,r.default)({type:"TSNonNullExpression",expression:e})}function jr(e){return(0,r.default)({type:"TSExportAssignment",expression:e})}function Dr(e){return(0,r.default)({type:"TSNamespaceExportDeclaration",id:e})}function Lr(e){return(0,r.default)({type:"TSTypeAnnotation",typeAnnotation:e})}function Cr(e){return(0,r.default)({type:"TSTypeParameterInstantiation",params:e})}function Mr(e){return(0,r.default)({type:"TSTypeParameterDeclaration",params:e})}function Br(e=null,t=null,n){return(0,r.default)({type:"TSTypeParameter",constraint:e,default:t,name:n})}function Rr(e){return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),I(e)}function Fr(e,t=""){return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),D(e,t)}function kr(e){return console.trace("The node type RestProperty has been renamed to RestElement"),V(e)}function Vr(e){return console.trace("The node type SpreadProperty has been renamed to SpreadElement"),Se(e)}},22792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnyTypeAnnotation",{enumerable:!0,get:function(){return r.anyTypeAnnotation}}),Object.defineProperty(t,"ArgumentPlaceholder",{enumerable:!0,get:function(){return r.argumentPlaceholder}}),Object.defineProperty(t,"ArrayExpression",{enumerable:!0,get:function(){return r.arrayExpression}}),Object.defineProperty(t,"ArrayPattern",{enumerable:!0,get:function(){return r.arrayPattern}}),Object.defineProperty(t,"ArrayTypeAnnotation",{enumerable:!0,get:function(){return r.arrayTypeAnnotation}}),Object.defineProperty(t,"ArrowFunctionExpression",{enumerable:!0,get:function(){return r.arrowFunctionExpression}}),Object.defineProperty(t,"AssignmentExpression",{enumerable:!0,get:function(){return r.assignmentExpression}}),Object.defineProperty(t,"AssignmentPattern",{enumerable:!0,get:function(){return r.assignmentPattern}}),Object.defineProperty(t,"AwaitExpression",{enumerable:!0,get:function(){return r.awaitExpression}}),Object.defineProperty(t,"BigIntLiteral",{enumerable:!0,get:function(){return r.bigIntLiteral}}),Object.defineProperty(t,"BinaryExpression",{enumerable:!0,get:function(){return r.binaryExpression}}),Object.defineProperty(t,"BindExpression",{enumerable:!0,get:function(){return r.bindExpression}}),Object.defineProperty(t,"BlockStatement",{enumerable:!0,get:function(){return r.blockStatement}}),Object.defineProperty(t,"BooleanLiteral",{enumerable:!0,get:function(){return r.booleanLiteral}}),Object.defineProperty(t,"BooleanLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.booleanLiteralTypeAnnotation}}),Object.defineProperty(t,"BooleanTypeAnnotation",{enumerable:!0,get:function(){return r.booleanTypeAnnotation}}),Object.defineProperty(t,"BreakStatement",{enumerable:!0,get:function(){return r.breakStatement}}),Object.defineProperty(t,"CallExpression",{enumerable:!0,get:function(){return r.callExpression}}),Object.defineProperty(t,"CatchClause",{enumerable:!0,get:function(){return r.catchClause}}),Object.defineProperty(t,"ClassAccessorProperty",{enumerable:!0,get:function(){return r.classAccessorProperty}}),Object.defineProperty(t,"ClassBody",{enumerable:!0,get:function(){return r.classBody}}),Object.defineProperty(t,"ClassDeclaration",{enumerable:!0,get:function(){return r.classDeclaration}}),Object.defineProperty(t,"ClassExpression",{enumerable:!0,get:function(){return r.classExpression}}),Object.defineProperty(t,"ClassImplements",{enumerable:!0,get:function(){return r.classImplements}}),Object.defineProperty(t,"ClassMethod",{enumerable:!0,get:function(){return r.classMethod}}),Object.defineProperty(t,"ClassPrivateMethod",{enumerable:!0,get:function(){return r.classPrivateMethod}}),Object.defineProperty(t,"ClassPrivateProperty",{enumerable:!0,get:function(){return r.classPrivateProperty}}),Object.defineProperty(t,"ClassProperty",{enumerable:!0,get:function(){return r.classProperty}}),Object.defineProperty(t,"ConditionalExpression",{enumerable:!0,get:function(){return r.conditionalExpression}}),Object.defineProperty(t,"ContinueStatement",{enumerable:!0,get:function(){return r.continueStatement}}),Object.defineProperty(t,"DebuggerStatement",{enumerable:!0,get:function(){return r.debuggerStatement}}),Object.defineProperty(t,"DecimalLiteral",{enumerable:!0,get:function(){return r.decimalLiteral}}),Object.defineProperty(t,"DeclareClass",{enumerable:!0,get:function(){return r.declareClass}}),Object.defineProperty(t,"DeclareExportAllDeclaration",{enumerable:!0,get:function(){return r.declareExportAllDeclaration}}),Object.defineProperty(t,"DeclareExportDeclaration",{enumerable:!0,get:function(){return r.declareExportDeclaration}}),Object.defineProperty(t,"DeclareFunction",{enumerable:!0,get:function(){return r.declareFunction}}),Object.defineProperty(t,"DeclareInterface",{enumerable:!0,get:function(){return r.declareInterface}}),Object.defineProperty(t,"DeclareModule",{enumerable:!0,get:function(){return r.declareModule}}),Object.defineProperty(t,"DeclareModuleExports",{enumerable:!0,get:function(){return r.declareModuleExports}}),Object.defineProperty(t,"DeclareOpaqueType",{enumerable:!0,get:function(){return r.declareOpaqueType}}),Object.defineProperty(t,"DeclareTypeAlias",{enumerable:!0,get:function(){return r.declareTypeAlias}}),Object.defineProperty(t,"DeclareVariable",{enumerable:!0,get:function(){return r.declareVariable}}),Object.defineProperty(t,"DeclaredPredicate",{enumerable:!0,get:function(){return r.declaredPredicate}}),Object.defineProperty(t,"Decorator",{enumerable:!0,get:function(){return r.decorator}}),Object.defineProperty(t,"Directive",{enumerable:!0,get:function(){return r.directive}}),Object.defineProperty(t,"DirectiveLiteral",{enumerable:!0,get:function(){return r.directiveLiteral}}),Object.defineProperty(t,"DoExpression",{enumerable:!0,get:function(){return r.doExpression}}),Object.defineProperty(t,"DoWhileStatement",{enumerable:!0,get:function(){return r.doWhileStatement}}),Object.defineProperty(t,"EmptyStatement",{enumerable:!0,get:function(){return r.emptyStatement}}),Object.defineProperty(t,"EmptyTypeAnnotation",{enumerable:!0,get:function(){return r.emptyTypeAnnotation}}),Object.defineProperty(t,"EnumBooleanBody",{enumerable:!0,get:function(){return r.enumBooleanBody}}),Object.defineProperty(t,"EnumBooleanMember",{enumerable:!0,get:function(){return r.enumBooleanMember}}),Object.defineProperty(t,"EnumDeclaration",{enumerable:!0,get:function(){return r.enumDeclaration}}),Object.defineProperty(t,"EnumDefaultedMember",{enumerable:!0,get:function(){return r.enumDefaultedMember}}),Object.defineProperty(t,"EnumNumberBody",{enumerable:!0,get:function(){return r.enumNumberBody}}),Object.defineProperty(t,"EnumNumberMember",{enumerable:!0,get:function(){return r.enumNumberMember}}),Object.defineProperty(t,"EnumStringBody",{enumerable:!0,get:function(){return r.enumStringBody}}),Object.defineProperty(t,"EnumStringMember",{enumerable:!0,get:function(){return r.enumStringMember}}),Object.defineProperty(t,"EnumSymbolBody",{enumerable:!0,get:function(){return r.enumSymbolBody}}),Object.defineProperty(t,"ExistsTypeAnnotation",{enumerable:!0,get:function(){return r.existsTypeAnnotation}}),Object.defineProperty(t,"ExportAllDeclaration",{enumerable:!0,get:function(){return r.exportAllDeclaration}}),Object.defineProperty(t,"ExportDefaultDeclaration",{enumerable:!0,get:function(){return r.exportDefaultDeclaration}}),Object.defineProperty(t,"ExportDefaultSpecifier",{enumerable:!0,get:function(){return r.exportDefaultSpecifier}}),Object.defineProperty(t,"ExportNamedDeclaration",{enumerable:!0,get:function(){return r.exportNamedDeclaration}}),Object.defineProperty(t,"ExportNamespaceSpecifier",{enumerable:!0,get:function(){return r.exportNamespaceSpecifier}}),Object.defineProperty(t,"ExportSpecifier",{enumerable:!0,get:function(){return r.exportSpecifier}}),Object.defineProperty(t,"ExpressionStatement",{enumerable:!0,get:function(){return r.expressionStatement}}),Object.defineProperty(t,"File",{enumerable:!0,get:function(){return r.file}}),Object.defineProperty(t,"ForInStatement",{enumerable:!0,get:function(){return r.forInStatement}}),Object.defineProperty(t,"ForOfStatement",{enumerable:!0,get:function(){return r.forOfStatement}}),Object.defineProperty(t,"ForStatement",{enumerable:!0,get:function(){return r.forStatement}}),Object.defineProperty(t,"FunctionDeclaration",{enumerable:!0,get:function(){return r.functionDeclaration}}),Object.defineProperty(t,"FunctionExpression",{enumerable:!0,get:function(){return r.functionExpression}}),Object.defineProperty(t,"FunctionTypeAnnotation",{enumerable:!0,get:function(){return r.functionTypeAnnotation}}),Object.defineProperty(t,"FunctionTypeParam",{enumerable:!0,get:function(){return r.functionTypeParam}}),Object.defineProperty(t,"GenericTypeAnnotation",{enumerable:!0,get:function(){return r.genericTypeAnnotation}}),Object.defineProperty(t,"Identifier",{enumerable:!0,get:function(){return r.identifier}}),Object.defineProperty(t,"IfStatement",{enumerable:!0,get:function(){return r.ifStatement}}),Object.defineProperty(t,"Import",{enumerable:!0,get:function(){return r.import}}),Object.defineProperty(t,"ImportAttribute",{enumerable:!0,get:function(){return r.importAttribute}}),Object.defineProperty(t,"ImportDeclaration",{enumerable:!0,get:function(){return r.importDeclaration}}),Object.defineProperty(t,"ImportDefaultSpecifier",{enumerable:!0,get:function(){return r.importDefaultSpecifier}}),Object.defineProperty(t,"ImportNamespaceSpecifier",{enumerable:!0,get:function(){return r.importNamespaceSpecifier}}),Object.defineProperty(t,"ImportSpecifier",{enumerable:!0,get:function(){return r.importSpecifier}}),Object.defineProperty(t,"IndexedAccessType",{enumerable:!0,get:function(){return r.indexedAccessType}}),Object.defineProperty(t,"InferredPredicate",{enumerable:!0,get:function(){return r.inferredPredicate}}),Object.defineProperty(t,"InterfaceDeclaration",{enumerable:!0,get:function(){return r.interfaceDeclaration}}),Object.defineProperty(t,"InterfaceExtends",{enumerable:!0,get:function(){return r.interfaceExtends}}),Object.defineProperty(t,"InterfaceTypeAnnotation",{enumerable:!0,get:function(){return r.interfaceTypeAnnotation}}),Object.defineProperty(t,"InterpreterDirective",{enumerable:!0,get:function(){return r.interpreterDirective}}),Object.defineProperty(t,"IntersectionTypeAnnotation",{enumerable:!0,get:function(){return r.intersectionTypeAnnotation}}),Object.defineProperty(t,"JSXAttribute",{enumerable:!0,get:function(){return r.jsxAttribute}}),Object.defineProperty(t,"JSXClosingElement",{enumerable:!0,get:function(){return r.jsxClosingElement}}),Object.defineProperty(t,"JSXClosingFragment",{enumerable:!0,get:function(){return r.jsxClosingFragment}}),Object.defineProperty(t,"JSXElement",{enumerable:!0,get:function(){return r.jsxElement}}),Object.defineProperty(t,"JSXEmptyExpression",{enumerable:!0,get:function(){return r.jsxEmptyExpression}}),Object.defineProperty(t,"JSXExpressionContainer",{enumerable:!0,get:function(){return r.jsxExpressionContainer}}),Object.defineProperty(t,"JSXFragment",{enumerable:!0,get:function(){return r.jsxFragment}}),Object.defineProperty(t,"JSXIdentifier",{enumerable:!0,get:function(){return r.jsxIdentifier}}),Object.defineProperty(t,"JSXMemberExpression",{enumerable:!0,get:function(){return r.jsxMemberExpression}}),Object.defineProperty(t,"JSXNamespacedName",{enumerable:!0,get:function(){return r.jsxNamespacedName}}),Object.defineProperty(t,"JSXOpeningElement",{enumerable:!0,get:function(){return r.jsxOpeningElement}}),Object.defineProperty(t,"JSXOpeningFragment",{enumerable:!0,get:function(){return r.jsxOpeningFragment}}),Object.defineProperty(t,"JSXSpreadAttribute",{enumerable:!0,get:function(){return r.jsxSpreadAttribute}}),Object.defineProperty(t,"JSXSpreadChild",{enumerable:!0,get:function(){return r.jsxSpreadChild}}),Object.defineProperty(t,"JSXText",{enumerable:!0,get:function(){return r.jsxText}}),Object.defineProperty(t,"LabeledStatement",{enumerable:!0,get:function(){return r.labeledStatement}}),Object.defineProperty(t,"LogicalExpression",{enumerable:!0,get:function(){return r.logicalExpression}}),Object.defineProperty(t,"MemberExpression",{enumerable:!0,get:function(){return r.memberExpression}}),Object.defineProperty(t,"MetaProperty",{enumerable:!0,get:function(){return r.metaProperty}}),Object.defineProperty(t,"MixedTypeAnnotation",{enumerable:!0,get:function(){return r.mixedTypeAnnotation}}),Object.defineProperty(t,"ModuleExpression",{enumerable:!0,get:function(){return r.moduleExpression}}),Object.defineProperty(t,"NewExpression",{enumerable:!0,get:function(){return r.newExpression}}),Object.defineProperty(t,"Noop",{enumerable:!0,get:function(){return r.noop}}),Object.defineProperty(t,"NullLiteral",{enumerable:!0,get:function(){return r.nullLiteral}}),Object.defineProperty(t,"NullLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.nullLiteralTypeAnnotation}}),Object.defineProperty(t,"NullableTypeAnnotation",{enumerable:!0,get:function(){return r.nullableTypeAnnotation}}),Object.defineProperty(t,"NumberLiteral",{enumerable:!0,get:function(){return r.numberLiteral}}),Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.numberLiteralTypeAnnotation}}),Object.defineProperty(t,"NumberTypeAnnotation",{enumerable:!0,get:function(){return r.numberTypeAnnotation}}),Object.defineProperty(t,"NumericLiteral",{enumerable:!0,get:function(){return r.numericLiteral}}),Object.defineProperty(t,"ObjectExpression",{enumerable:!0,get:function(){return r.objectExpression}}),Object.defineProperty(t,"ObjectMethod",{enumerable:!0,get:function(){return r.objectMethod}}),Object.defineProperty(t,"ObjectPattern",{enumerable:!0,get:function(){return r.objectPattern}}),Object.defineProperty(t,"ObjectProperty",{enumerable:!0,get:function(){return r.objectProperty}}),Object.defineProperty(t,"ObjectTypeAnnotation",{enumerable:!0,get:function(){return r.objectTypeAnnotation}}),Object.defineProperty(t,"ObjectTypeCallProperty",{enumerable:!0,get:function(){return r.objectTypeCallProperty}}),Object.defineProperty(t,"ObjectTypeIndexer",{enumerable:!0,get:function(){return r.objectTypeIndexer}}),Object.defineProperty(t,"ObjectTypeInternalSlot",{enumerable:!0,get:function(){return r.objectTypeInternalSlot}}),Object.defineProperty(t,"ObjectTypeProperty",{enumerable:!0,get:function(){return r.objectTypeProperty}}),Object.defineProperty(t,"ObjectTypeSpreadProperty",{enumerable:!0,get:function(){return r.objectTypeSpreadProperty}}),Object.defineProperty(t,"OpaqueType",{enumerable:!0,get:function(){return r.opaqueType}}),Object.defineProperty(t,"OptionalCallExpression",{enumerable:!0,get:function(){return r.optionalCallExpression}}),Object.defineProperty(t,"OptionalIndexedAccessType",{enumerable:!0,get:function(){return r.optionalIndexedAccessType}}),Object.defineProperty(t,"OptionalMemberExpression",{enumerable:!0,get:function(){return r.optionalMemberExpression}}),Object.defineProperty(t,"ParenthesizedExpression",{enumerable:!0,get:function(){return r.parenthesizedExpression}}),Object.defineProperty(t,"PipelineBareFunction",{enumerable:!0,get:function(){return r.pipelineBareFunction}}),Object.defineProperty(t,"PipelinePrimaryTopicReference",{enumerable:!0,get:function(){return r.pipelinePrimaryTopicReference}}),Object.defineProperty(t,"PipelineTopicExpression",{enumerable:!0,get:function(){return r.pipelineTopicExpression}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.placeholder}}),Object.defineProperty(t,"PrivateName",{enumerable:!0,get:function(){return r.privateName}}),Object.defineProperty(t,"Program",{enumerable:!0,get:function(){return r.program}}),Object.defineProperty(t,"QualifiedTypeIdentifier",{enumerable:!0,get:function(){return r.qualifiedTypeIdentifier}}),Object.defineProperty(t,"RecordExpression",{enumerable:!0,get:function(){return r.recordExpression}}),Object.defineProperty(t,"RegExpLiteral",{enumerable:!0,get:function(){return r.regExpLiteral}}),Object.defineProperty(t,"RegexLiteral",{enumerable:!0,get:function(){return r.regexLiteral}}),Object.defineProperty(t,"RestElement",{enumerable:!0,get:function(){return r.restElement}}),Object.defineProperty(t,"RestProperty",{enumerable:!0,get:function(){return r.restProperty}}),Object.defineProperty(t,"ReturnStatement",{enumerable:!0,get:function(){return r.returnStatement}}),Object.defineProperty(t,"SequenceExpression",{enumerable:!0,get:function(){return r.sequenceExpression}}),Object.defineProperty(t,"SpreadElement",{enumerable:!0,get:function(){return r.spreadElement}}),Object.defineProperty(t,"SpreadProperty",{enumerable:!0,get:function(){return r.spreadProperty}}),Object.defineProperty(t,"StaticBlock",{enumerable:!0,get:function(){return r.staticBlock}}),Object.defineProperty(t,"StringLiteral",{enumerable:!0,get:function(){return r.stringLiteral}}),Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.stringLiteralTypeAnnotation}}),Object.defineProperty(t,"StringTypeAnnotation",{enumerable:!0,get:function(){return r.stringTypeAnnotation}}),Object.defineProperty(t,"Super",{enumerable:!0,get:function(){return r.super}}),Object.defineProperty(t,"SwitchCase",{enumerable:!0,get:function(){return r.switchCase}}),Object.defineProperty(t,"SwitchStatement",{enumerable:!0,get:function(){return r.switchStatement}}),Object.defineProperty(t,"SymbolTypeAnnotation",{enumerable:!0,get:function(){return r.symbolTypeAnnotation}}),Object.defineProperty(t,"TSAnyKeyword",{enumerable:!0,get:function(){return r.tsAnyKeyword}}),Object.defineProperty(t,"TSArrayType",{enumerable:!0,get:function(){return r.tsArrayType}}),Object.defineProperty(t,"TSAsExpression",{enumerable:!0,get:function(){return r.tsAsExpression}}),Object.defineProperty(t,"TSBigIntKeyword",{enumerable:!0,get:function(){return r.tsBigIntKeyword}}),Object.defineProperty(t,"TSBooleanKeyword",{enumerable:!0,get:function(){return r.tsBooleanKeyword}}),Object.defineProperty(t,"TSCallSignatureDeclaration",{enumerable:!0,get:function(){return r.tsCallSignatureDeclaration}}),Object.defineProperty(t,"TSConditionalType",{enumerable:!0,get:function(){return r.tsConditionalType}}),Object.defineProperty(t,"TSConstructSignatureDeclaration",{enumerable:!0,get:function(){return r.tsConstructSignatureDeclaration}}),Object.defineProperty(t,"TSConstructorType",{enumerable:!0,get:function(){return r.tsConstructorType}}),Object.defineProperty(t,"TSDeclareFunction",{enumerable:!0,get:function(){return r.tsDeclareFunction}}),Object.defineProperty(t,"TSDeclareMethod",{enumerable:!0,get:function(){return r.tsDeclareMethod}}),Object.defineProperty(t,"TSEnumDeclaration",{enumerable:!0,get:function(){return r.tsEnumDeclaration}}),Object.defineProperty(t,"TSEnumMember",{enumerable:!0,get:function(){return r.tsEnumMember}}),Object.defineProperty(t,"TSExportAssignment",{enumerable:!0,get:function(){return r.tsExportAssignment}}),Object.defineProperty(t,"TSExpressionWithTypeArguments",{enumerable:!0,get:function(){return r.tsExpressionWithTypeArguments}}),Object.defineProperty(t,"TSExternalModuleReference",{enumerable:!0,get:function(){return r.tsExternalModuleReference}}),Object.defineProperty(t,"TSFunctionType",{enumerable:!0,get:function(){return r.tsFunctionType}}),Object.defineProperty(t,"TSImportEqualsDeclaration",{enumerable:!0,get:function(){return r.tsImportEqualsDeclaration}}),Object.defineProperty(t,"TSImportType",{enumerable:!0,get:function(){return r.tsImportType}}),Object.defineProperty(t,"TSIndexSignature",{enumerable:!0,get:function(){return r.tsIndexSignature}}),Object.defineProperty(t,"TSIndexedAccessType",{enumerable:!0,get:function(){return r.tsIndexedAccessType}}),Object.defineProperty(t,"TSInferType",{enumerable:!0,get:function(){return r.tsInferType}}),Object.defineProperty(t,"TSInstantiationExpression",{enumerable:!0,get:function(){return r.tsInstantiationExpression}}),Object.defineProperty(t,"TSInterfaceBody",{enumerable:!0,get:function(){return r.tsInterfaceBody}}),Object.defineProperty(t,"TSInterfaceDeclaration",{enumerable:!0,get:function(){return r.tsInterfaceDeclaration}}),Object.defineProperty(t,"TSIntersectionType",{enumerable:!0,get:function(){return r.tsIntersectionType}}),Object.defineProperty(t,"TSIntrinsicKeyword",{enumerable:!0,get:function(){return r.tsIntrinsicKeyword}}),Object.defineProperty(t,"TSLiteralType",{enumerable:!0,get:function(){return r.tsLiteralType}}),Object.defineProperty(t,"TSMappedType",{enumerable:!0,get:function(){return r.tsMappedType}}),Object.defineProperty(t,"TSMethodSignature",{enumerable:!0,get:function(){return r.tsMethodSignature}}),Object.defineProperty(t,"TSModuleBlock",{enumerable:!0,get:function(){return r.tsModuleBlock}}),Object.defineProperty(t,"TSModuleDeclaration",{enumerable:!0,get:function(){return r.tsModuleDeclaration}}),Object.defineProperty(t,"TSNamedTupleMember",{enumerable:!0,get:function(){return r.tsNamedTupleMember}}),Object.defineProperty(t,"TSNamespaceExportDeclaration",{enumerable:!0,get:function(){return r.tsNamespaceExportDeclaration}}),Object.defineProperty(t,"TSNeverKeyword",{enumerable:!0,get:function(){return r.tsNeverKeyword}}),Object.defineProperty(t,"TSNonNullExpression",{enumerable:!0,get:function(){return r.tsNonNullExpression}}),Object.defineProperty(t,"TSNullKeyword",{enumerable:!0,get:function(){return r.tsNullKeyword}}),Object.defineProperty(t,"TSNumberKeyword",{enumerable:!0,get:function(){return r.tsNumberKeyword}}),Object.defineProperty(t,"TSObjectKeyword",{enumerable:!0,get:function(){return r.tsObjectKeyword}}),Object.defineProperty(t,"TSOptionalType",{enumerable:!0,get:function(){return r.tsOptionalType}}),Object.defineProperty(t,"TSParameterProperty",{enumerable:!0,get:function(){return r.tsParameterProperty}}),Object.defineProperty(t,"TSParenthesizedType",{enumerable:!0,get:function(){return r.tsParenthesizedType}}),Object.defineProperty(t,"TSPropertySignature",{enumerable:!0,get:function(){return r.tsPropertySignature}}),Object.defineProperty(t,"TSQualifiedName",{enumerable:!0,get:function(){return r.tsQualifiedName}}),Object.defineProperty(t,"TSRestType",{enumerable:!0,get:function(){return r.tsRestType}}),Object.defineProperty(t,"TSStringKeyword",{enumerable:!0,get:function(){return r.tsStringKeyword}}),Object.defineProperty(t,"TSSymbolKeyword",{enumerable:!0,get:function(){return r.tsSymbolKeyword}}),Object.defineProperty(t,"TSThisType",{enumerable:!0,get:function(){return r.tsThisType}}),Object.defineProperty(t,"TSTupleType",{enumerable:!0,get:function(){return r.tsTupleType}}),Object.defineProperty(t,"TSTypeAliasDeclaration",{enumerable:!0,get:function(){return r.tsTypeAliasDeclaration}}),Object.defineProperty(t,"TSTypeAnnotation",{enumerable:!0,get:function(){return r.tsTypeAnnotation}}),Object.defineProperty(t,"TSTypeAssertion",{enumerable:!0,get:function(){return r.tsTypeAssertion}}),Object.defineProperty(t,"TSTypeLiteral",{enumerable:!0,get:function(){return r.tsTypeLiteral}}),Object.defineProperty(t,"TSTypeOperator",{enumerable:!0,get:function(){return r.tsTypeOperator}}),Object.defineProperty(t,"TSTypeParameter",{enumerable:!0,get:function(){return r.tsTypeParameter}}),Object.defineProperty(t,"TSTypeParameterDeclaration",{enumerable:!0,get:function(){return r.tsTypeParameterDeclaration}}),Object.defineProperty(t,"TSTypeParameterInstantiation",{enumerable:!0,get:function(){return r.tsTypeParameterInstantiation}}),Object.defineProperty(t,"TSTypePredicate",{enumerable:!0,get:function(){return r.tsTypePredicate}}),Object.defineProperty(t,"TSTypeQuery",{enumerable:!0,get:function(){return r.tsTypeQuery}}),Object.defineProperty(t,"TSTypeReference",{enumerable:!0,get:function(){return r.tsTypeReference}}),Object.defineProperty(t,"TSUndefinedKeyword",{enumerable:!0,get:function(){return r.tsUndefinedKeyword}}),Object.defineProperty(t,"TSUnionType",{enumerable:!0,get:function(){return r.tsUnionType}}),Object.defineProperty(t,"TSUnknownKeyword",{enumerable:!0,get:function(){return r.tsUnknownKeyword}}),Object.defineProperty(t,"TSVoidKeyword",{enumerable:!0,get:function(){return r.tsVoidKeyword}}),Object.defineProperty(t,"TaggedTemplateExpression",{enumerable:!0,get:function(){return r.taggedTemplateExpression}}),Object.defineProperty(t,"TemplateElement",{enumerable:!0,get:function(){return r.templateElement}}),Object.defineProperty(t,"TemplateLiteral",{enumerable:!0,get:function(){return r.templateLiteral}}),Object.defineProperty(t,"ThisExpression",{enumerable:!0,get:function(){return r.thisExpression}}),Object.defineProperty(t,"ThisTypeAnnotation",{enumerable:!0,get:function(){return r.thisTypeAnnotation}}),Object.defineProperty(t,"ThrowStatement",{enumerable:!0,get:function(){return r.throwStatement}}),Object.defineProperty(t,"TopicReference",{enumerable:!0,get:function(){return r.topicReference}}),Object.defineProperty(t,"TryStatement",{enumerable:!0,get:function(){return r.tryStatement}}),Object.defineProperty(t,"TupleExpression",{enumerable:!0,get:function(){return r.tupleExpression}}),Object.defineProperty(t,"TupleTypeAnnotation",{enumerable:!0,get:function(){return r.tupleTypeAnnotation}}),Object.defineProperty(t,"TypeAlias",{enumerable:!0,get:function(){return r.typeAlias}}),Object.defineProperty(t,"TypeAnnotation",{enumerable:!0,get:function(){return r.typeAnnotation}}),Object.defineProperty(t,"TypeCastExpression",{enumerable:!0,get:function(){return r.typeCastExpression}}),Object.defineProperty(t,"TypeParameter",{enumerable:!0,get:function(){return r.typeParameter}}),Object.defineProperty(t,"TypeParameterDeclaration",{enumerable:!0,get:function(){return r.typeParameterDeclaration}}),Object.defineProperty(t,"TypeParameterInstantiation",{enumerable:!0,get:function(){return r.typeParameterInstantiation}}),Object.defineProperty(t,"TypeofTypeAnnotation",{enumerable:!0,get:function(){return r.typeofTypeAnnotation}}),Object.defineProperty(t,"UnaryExpression",{enumerable:!0,get:function(){return r.unaryExpression}}),Object.defineProperty(t,"UnionTypeAnnotation",{enumerable:!0,get:function(){return r.unionTypeAnnotation}}),Object.defineProperty(t,"UpdateExpression",{enumerable:!0,get:function(){return r.updateExpression}}),Object.defineProperty(t,"V8IntrinsicIdentifier",{enumerable:!0,get:function(){return r.v8IntrinsicIdentifier}}),Object.defineProperty(t,"VariableDeclaration",{enumerable:!0,get:function(){return r.variableDeclaration}}),Object.defineProperty(t,"VariableDeclarator",{enumerable:!0,get:function(){return r.variableDeclarator}}),Object.defineProperty(t,"Variance",{enumerable:!0,get:function(){return r.variance}}),Object.defineProperty(t,"VoidTypeAnnotation",{enumerable:!0,get:function(){return r.voidTypeAnnotation}}),Object.defineProperty(t,"WhileStatement",{enumerable:!0,get:function(){return r.whileStatement}}),Object.defineProperty(t,"WithStatement",{enumerable:!0,get:function(){return r.withStatement}}),Object.defineProperty(t,"YieldExpression",{enumerable:!0,get:function(){return r.yieldExpression}});var r=n(18771)},87305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(98212);function o(e){const t=[];for(let n=0;n<e.children.length;n++){let o=e.children[n];(0,r.isJSXText)(o)?(0,i.default)(o,t):((0,r.isJSXExpressionContainer)(o)&&(o=o.expression),(0,r.isJSXEmptyExpression)(o)||t.push(o))}return t}},31096:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(18771),i=n(7419);function o(e){const t=e.map((e=>e.typeAnnotation)),n=(0,i.default)(t);return 1===n.length?n[0]:(0,r.tsUnionType)(n)}},35890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(93885),i=n(60428);function o(e){const t=i.BUILDER_KEYS[e.type];for(const n of t)(0,r.default)(e,n,e[n]);return e}},35440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e,!1)}},74042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e)}},58741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e,!0,!0)}},36774:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var r=n(92321),i=n(42748);const o=Function.call.bind(Object.prototype.hasOwnProperty);function a(e,t,n,r){return e&&"string"===typeof e.type?l(e,t,n,r):e}function s(e,t,n,r){return Array.isArray(e)?e.map((e=>a(e,t,n,r))):a(e,t,n,r)}function u(e,t=!0,n=!1){return l(e,t,n,new Map)}function l(e,t=!0,n=!1,a){if(!e)return e;const{type:u}=e,l={type:e.type};if((0,i.isIdentifier)(e))l.name=e.name,o(e,"optional")&&"boolean"===typeof e.optional&&(l.optional=e.optional),o(e,"typeAnnotation")&&(l.typeAnnotation=t?s(e.typeAnnotation,!0,n,a):e.typeAnnotation);else{if(!o(r.NODE_FIELDS,u))throw new Error(`Unknown node type: "${u}"`);for(const f of Object.keys(r.NODE_FIELDS[u]))o(e,f)&&(l[f]=t?(0,i.isFile)(e)&&"comments"===f?c(e.comments,t,n,a):s(e[f],!0,n,a):e[f])}return o(e,"loc")&&(l.loc=n?null:e.loc),o(e,"leadingComments")&&(l.leadingComments=c(e.leadingComments,t,n,a)),o(e,"innerComments")&&(l.innerComments=c(e.innerComments,t,n,a)),o(e,"trailingComments")&&(l.trailingComments=c(e.trailingComments,t,n,a)),o(e,"extra")&&(l.extra=Object.assign({},e.extra)),l}function c(e,t,n,r){return e&&t?e.map((e=>{const t=r.get(e);if(t)return t;const{type:i,value:o,loc:a}=e,s={type:i,value:o,loc:a};return n&&(s.loc=null),r.set(e,s),s})):e}},86801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e,!1,!0)}},34664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(83600);function i(e,t,n,i){return(0,r.default)(e,t,[{type:i?"CommentLine":"CommentBlock",value:n}])}},83600:function(e,t){"use strict";function n(e,t,n){if(!n||!e)return e;const r=`${t}Comments`;return e[r]?"leading"===t?e[r]=n.concat(e[r]):e[r].push(...n):e[r]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},4225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(33777);function i(e,t){(0,r.default)("innerComments",e,t)}},72761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(33777);function i(e,t){(0,r.default)("leadingComments",e,t)}},44927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(33777);function i(e,t){(0,r.default)("trailingComments",e,t)}},58268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(44927),i=n(72761),o=n(4225);function a(e,t){return(0,r.default)(e,t),(0,i.default)(e,t),(0,o.default)(e,t),e}},41142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(16591);function i(e){return r.COMMENT_KEYS.forEach((t=>{e[t]=null})),e}},15787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WHILE_TYPES=t.USERWHITESPACABLE_TYPES=t.UNARYLIKE_TYPES=t.TYPESCRIPT_TYPES=t.TSTYPE_TYPES=t.TSTYPEELEMENT_TYPES=t.TSENTITYNAME_TYPES=t.TSBASETYPE_TYPES=t.TERMINATORLESS_TYPES=t.STATEMENT_TYPES=t.STANDARDIZED_TYPES=t.SCOPABLE_TYPES=t.PUREISH_TYPES=t.PROPERTY_TYPES=t.PRIVATE_TYPES=t.PATTERN_TYPES=t.PATTERNLIKE_TYPES=t.OBJECTMEMBER_TYPES=t.MODULESPECIFIER_TYPES=t.MODULEDECLARATION_TYPES=t.MISCELLANEOUS_TYPES=t.METHOD_TYPES=t.LVAL_TYPES=t.LOOP_TYPES=t.LITERAL_TYPES=t.JSX_TYPES=t.IMMUTABLE_TYPES=t.FUNCTION_TYPES=t.FUNCTIONPARENT_TYPES=t.FOR_TYPES=t.FORXSTATEMENT_TYPES=t.FLOW_TYPES=t.FLOWTYPE_TYPES=t.FLOWPREDICATE_TYPES=t.FLOWDECLARATION_TYPES=t.FLOWBASEANNOTATION_TYPES=t.EXPRESSION_TYPES=t.EXPRESSIONWRAPPER_TYPES=t.EXPORTDECLARATION_TYPES=t.ENUMMEMBER_TYPES=t.ENUMBODY_TYPES=t.DECLARATION_TYPES=t.CONDITIONAL_TYPES=t.COMPLETIONSTATEMENT_TYPES=t.CLASS_TYPES=t.BLOCK_TYPES=t.BLOCKPARENT_TYPES=t.BINARY_TYPES=t.ACCESSOR_TYPES=void 0;var r=n(92321);const i=r.FLIPPED_ALIAS_KEYS["Standardized"];t.STANDARDIZED_TYPES=i;const o=r.FLIPPED_ALIAS_KEYS["Expression"];t.EXPRESSION_TYPES=o;const a=r.FLIPPED_ALIAS_KEYS["Binary"];t.BINARY_TYPES=a;const s=r.FLIPPED_ALIAS_KEYS["Scopable"];t.SCOPABLE_TYPES=s;const u=r.FLIPPED_ALIAS_KEYS["BlockParent"];t.BLOCKPARENT_TYPES=u;const l=r.FLIPPED_ALIAS_KEYS["Block"];t.BLOCK_TYPES=l;const c=r.FLIPPED_ALIAS_KEYS["Statement"];t.STATEMENT_TYPES=c;const f=r.FLIPPED_ALIAS_KEYS["Terminatorless"];t.TERMINATORLESS_TYPES=f;const p=r.FLIPPED_ALIAS_KEYS["CompletionStatement"];t.COMPLETIONSTATEMENT_TYPES=p;const d=r.FLIPPED_ALIAS_KEYS["Conditional"];t.CONDITIONAL_TYPES=d;const y=r.FLIPPED_ALIAS_KEYS["Loop"];t.LOOP_TYPES=y;const m=r.FLIPPED_ALIAS_KEYS["While"];t.WHILE_TYPES=m;const T=r.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];t.EXPRESSIONWRAPPER_TYPES=T;const v=r.FLIPPED_ALIAS_KEYS["For"];t.FOR_TYPES=v;const b=r.FLIPPED_ALIAS_KEYS["ForXStatement"];t.FORXSTATEMENT_TYPES=b;const S=r.FLIPPED_ALIAS_KEYS["Function"];t.FUNCTION_TYPES=S;const g=r.FLIPPED_ALIAS_KEYS["FunctionParent"];t.FUNCTIONPARENT_TYPES=g;const E=r.FLIPPED_ALIAS_KEYS["Pureish"];t.PUREISH_TYPES=E;const h=r.FLIPPED_ALIAS_KEYS["Declaration"];t.DECLARATION_TYPES=h;const x=r.FLIPPED_ALIAS_KEYS["PatternLike"];t.PATTERNLIKE_TYPES=x;const P=r.FLIPPED_ALIAS_KEYS["LVal"];t.LVAL_TYPES=P;const A=r.FLIPPED_ALIAS_KEYS["TSEntityName"];t.TSENTITYNAME_TYPES=A;const O=r.FLIPPED_ALIAS_KEYS["Literal"];t.LITERAL_TYPES=O;const w=r.FLIPPED_ALIAS_KEYS["Immutable"];t.IMMUTABLE_TYPES=w;const _=r.FLIPPED_ALIAS_KEYS["UserWhitespacable"];t.USERWHITESPACABLE_TYPES=_;const I=r.FLIPPED_ALIAS_KEYS["Method"];t.METHOD_TYPES=I;const N=r.FLIPPED_ALIAS_KEYS["ObjectMember"];t.OBJECTMEMBER_TYPES=N;const j=r.FLIPPED_ALIAS_KEYS["Property"];t.PROPERTY_TYPES=j;const D=r.FLIPPED_ALIAS_KEYS["UnaryLike"];t.UNARYLIKE_TYPES=D;const L=r.FLIPPED_ALIAS_KEYS["Pattern"];t.PATTERN_TYPES=L;const C=r.FLIPPED_ALIAS_KEYS["Class"];t.CLASS_TYPES=C;const M=r.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];t.MODULEDECLARATION_TYPES=M;const B=r.FLIPPED_ALIAS_KEYS["ExportDeclaration"];t.EXPORTDECLARATION_TYPES=B;const R=r.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];t.MODULESPECIFIER_TYPES=R;const F=r.FLIPPED_ALIAS_KEYS["Accessor"];t.ACCESSOR_TYPES=F;const k=r.FLIPPED_ALIAS_KEYS["Private"];t.PRIVATE_TYPES=k;const V=r.FLIPPED_ALIAS_KEYS["Flow"];t.FLOW_TYPES=V;const K=r.FLIPPED_ALIAS_KEYS["FlowType"];t.FLOWTYPE_TYPES=K;const Y=r.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];t.FLOWBASEANNOTATION_TYPES=Y;const U=r.FLIPPED_ALIAS_KEYS["FlowDeclaration"];t.FLOWDECLARATION_TYPES=U;const J=r.FLIPPED_ALIAS_KEYS["FlowPredicate"];t.FLOWPREDICATE_TYPES=J;const X=r.FLIPPED_ALIAS_KEYS["EnumBody"];t.ENUMBODY_TYPES=X;const q=r.FLIPPED_ALIAS_KEYS["EnumMember"];t.ENUMMEMBER_TYPES=q;const W=r.FLIPPED_ALIAS_KEYS["JSX"];t.JSX_TYPES=W;const G=r.FLIPPED_ALIAS_KEYS["Miscellaneous"];t.MISCELLANEOUS_TYPES=G;const $=r.FLIPPED_ALIAS_KEYS["TypeScript"];t.TYPESCRIPT_TYPES=$;const z=r.FLIPPED_ALIAS_KEYS["TSTypeElement"];t.TSTYPEELEMENT_TYPES=z;const H=r.FLIPPED_ALIAS_KEYS["TSType"];t.TSTYPE_TYPES=H;const Q=r.FLIPPED_ALIAS_KEYS["TSBaseType"];t.TSBASETYPE_TYPES=Q},16591:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UPDATE_OPERATORS=t.UNARY_OPERATORS=t.STRING_UNARY_OPERATORS=t.STATEMENT_OR_BLOCK_KEYS=t.NUMBER_UNARY_OPERATORS=t.NUMBER_BINARY_OPERATORS=t.NOT_LOCAL_BINDING=t.LOGICAL_OPERATORS=t.INHERIT_KEYS=t.FOR_INIT_KEYS=t.FLATTENABLE_KEYS=t.EQUALITY_BINARY_OPERATORS=t.COMPARISON_BINARY_OPERATORS=t.COMMENT_KEYS=t.BOOLEAN_UNARY_OPERATORS=t.BOOLEAN_NUMBER_BINARY_OPERATORS=t.BOOLEAN_BINARY_OPERATORS=t.BLOCK_SCOPED_SYMBOL=t.BINARY_OPERATORS=t.ASSIGNMENT_OPERATORS=void 0;const n=["consequent","body","alternate"];t.STATEMENT_OR_BLOCK_KEYS=n;const r=["body","expressions"];t.FLATTENABLE_KEYS=r;const i=["left","init"];t.FOR_INIT_KEYS=i;const o=["leadingComments","trailingComments","innerComments"];t.COMMENT_KEYS=o;const a=["||","&&","??"];t.LOGICAL_OPERATORS=a;const s=["++","--"];t.UPDATE_OPERATORS=s;const u=[">","<",">=","<="];t.BOOLEAN_NUMBER_BINARY_OPERATORS=u;const l=["==","===","!=","!=="];t.EQUALITY_BINARY_OPERATORS=l;const c=[...l,"in","instanceof"];t.COMPARISON_BINARY_OPERATORS=c;const f=[...c,...u];t.BOOLEAN_BINARY_OPERATORS=f;const p=["-","/","%","*","**","&","|",">>",">>>","<<","^"];t.NUMBER_BINARY_OPERATORS=p;const d=["+",...p,...f,"|>"];t.BINARY_OPERATORS=d;const y=["=","+=",...p.map((e=>e+"=")),...a.map((e=>e+"="))];t.ASSIGNMENT_OPERATORS=y;const m=["delete","!"];t.BOOLEAN_UNARY_OPERATORS=m;const T=["+","-","~"];t.NUMBER_UNARY_OPERATORS=T;const v=["typeof"];t.STRING_UNARY_OPERATORS=v;const b=["void","throw",...m,...T,...v];t.UNARY_OPERATORS=b;const S={optional:["typeAnnotation","typeParameters","returnType"],force:["start","loc","end"]};t.INHERIT_KEYS=S;const g=Symbol.for("var used to be block scoped");t.BLOCK_SCOPED_SYMBOL=g;const E=Symbol.for("should not be considered a local binding");t.NOT_LOCAL_BINDING=E},33623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(1829);function i(e,t="body"){return e[t]=(0,r.default)(e[t],e)}},15392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s;var r=n(97980),i=n(42748),o=n(18771),a=n(36774);function s(e,t,n){const u=[];let l=!0;for(const c of e)if((0,i.isEmptyStatement)(c)||(l=!1),(0,i.isExpression)(c))u.push(c);else if((0,i.isExpressionStatement)(c))u.push(c.expression);else if((0,i.isVariableDeclaration)(c)){if("var"!==c.kind)return;for(const e of c.declarations){const t=(0,r.default)(e);for(const e of Object.keys(t))n.push({kind:c.kind,id:(0,a.default)(t[e])});e.init&&u.push((0,o.assignmentExpression)("=",e.id,e.init))}l=!0}else if((0,i.isIfStatement)(c)){const e=c.consequent?s([c.consequent],t,n):t.buildUndefinedNode(),r=c.alternate?s([c.alternate],t,n):t.buildUndefinedNode();if(!e||!r)return;u.push((0,o.conditionalExpression)(c.test,e,r))}else if((0,i.isBlockStatement)(c)){const e=s(c.body,t,n);if(!e)return;u.push(e)}else{if(!(0,i.isEmptyStatement)(c))return;0===e.indexOf(c)&&(l=!0)}return l&&u.push(t.buildUndefinedNode()),1===u.length?u[0]:(0,o.sequenceExpression)(u)}},13026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(89374);function i(e){return e=(0,r.default)(e),"eval"!==e&&"arguments"!==e||(e="_"+e),e}},1829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(18771);function o(e,t){if((0,r.isBlockStatement)(e))return e;let n=[];return(0,r.isEmptyStatement)(e)?n=[]:((0,r.isStatement)(e)||(e=(0,r.isFunction)(t)?(0,i.returnStatement)(e):(0,i.expressionStatement)(e)),n=[e]),(0,i.blockStatement)(n)}},80019:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(18771);function o(e,t=e.key||e.property){return!e.computed&&(0,r.isIdentifier)(t)&&(t=(0,i.stringLiteral)(t.name)),t}},3447:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(42748),i=o;function o(e){if((0,r.isExpressionStatement)(e)&&(e=e.expression),(0,r.isExpression)(e))return e;if((0,r.isClass)(e)?e.type="ClassExpression":(0,r.isFunction)(e)&&(e.type="FunctionExpression"),!(0,r.isExpression)(e))throw new Error(`cannot turn ${e.type} to an expression`);return e}t["default"]=i},89374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(3994),i=n(65502);function o(e){e+="";let t="";for(const n of e)t+=(0,i.isIdentifierChar)(n.codePointAt(0))?n:"-";return t=t.replace(/^[-0-9]+/,""),t=t.replace(/[-\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""})),(0,r.default)(t)||(t=`_${t}`),t||"_"}},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(42748),i=n(36774),o=n(22183);function a(e,t=e.key){let n;return"method"===e.kind?a.increment()+"":(n=(0,r.isIdentifier)(t)?t.name:(0,r.isStringLiteral)(t)?JSON.stringify(t.value):JSON.stringify((0,o.default)((0,i.default)(t))),e.computed&&(n=`[${n}]`),e.static&&(n=`static:${n}`),n)}a.uid=0,a.increment=function(){return a.uid>=Number.MAX_SAFE_INTEGER?a.uid=0:a.uid++}},89023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(15392);function i(e,t){if(null==e||!e.length)return;const n=[],i=(0,r.default)(e,t,n);if(i){for(const e of n)t.push(e);return i}}},28626:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(42748),i=n(18771),o=a;function a(e,t){if((0,r.isStatement)(e))return e;let n,o=!1;if((0,r.isClass)(e))o=!0,n="ClassDeclaration";else if((0,r.isFunction)(e))o=!0,n="FunctionDeclaration";else if((0,r.isAssignmentExpression)(e))return(0,i.expressionStatement)(e);if(o&&!e.id&&(n=!1),!n){if(t)return!1;throw new Error(`cannot turn ${e.type} to a statement`)}return e.type=n,e}t["default"]=o},36161:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(3994),i=n(18771),o=l;t["default"]=o;const a=Function.call.bind(Object.prototype.toString);function s(e){return"[object RegExp]"===a(e)}function u(e){if("object"!==typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;const t=Object.getPrototypeOf(e);return null===t||null===Object.getPrototypeOf(t)}function l(e){if(void 0===e)return(0,i.identifier)("undefined");if(!0===e||!1===e)return(0,i.booleanLiteral)(e);if(null===e)return(0,i.nullLiteral)();if("string"===typeof e)return(0,i.stringLiteral)(e);if("number"===typeof e){let t;if(Number.isFinite(e))t=(0,i.numericLiteral)(Math.abs(e));else{let n;n=Number.isNaN(e)?(0,i.numericLiteral)(0):(0,i.numericLiteral)(1),t=(0,i.binaryExpression)("/",n,(0,i.numericLiteral)(0))}return(e<0||Object.is(e,-0))&&(t=(0,i.unaryExpression)("-",t)),t}if(s(e)){const t=e.source,n=e.toString().match(/\/([a-z]+|)$/)[1];return(0,i.regExpLiteral)(t,n)}if(Array.isArray(e))return(0,i.arrayExpression)(e.map(l));if(u(e)){const t=[];for(const n of Object.keys(e)){let o;o=(0,r.default)(n)?(0,i.identifier)(n):(0,i.stringLiteral)(n),t.push((0,i.objectProperty)(o,l(e[n])))}return(0,i.objectExpression)(t)}throw new Error("don't know how to turn this value into a node")}},63442:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.patternLikeCommon=t.functionTypeAnnotationCommon=t.functionDeclarationCommon=t.functionCommon=t.classMethodOrPropertyCommon=t.classMethodOrDeclareMethodCommon=void 0;var r=n(90053),i=n(3994),o=n(65502),a=n(16591),s=n(47376);const u=(0,s.defineAliasedType)("Standardized");u("ArrayExpression",{fields:{elements:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeOrValueType)("null","Expression","SpreadElement"))),default:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?void 0:[]}},visitor:["elements"],aliases:["Expression"]}),u("AssignmentExpression",{fields:{operator:{validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return(0,s.assertValueType)("string");const e=(0,s.assertOneOf)(...a.ASSIGNMENT_OPERATORS),t=(0,s.assertOneOf)("=");return function(n,i,o){const a=(0,r.default)("Pattern",n.left)?t:e;a(n,i,o)}}()},left:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.assertNodeType)("Identifier","MemberExpression","ArrayPattern","ObjectPattern","TSAsExpression","TSTypeAssertion","TSNonNullExpression"):(0,s.assertNodeType)("LVal")},right:{validate:(0,s.assertNodeType)("Expression")}},builder:["operator","left","right"],visitor:["left","right"],aliases:["Expression"]}),u("BinaryExpression",{builder:["operator","left","right"],fields:{operator:{validate:(0,s.assertOneOf)(...a.BINARY_OPERATORS)},left:{validate:function(){const e=(0,s.assertNodeType)("Expression"),t=(0,s.assertNodeType)("Expression","PrivateName"),n=function(n,r,i){const o="in"===n.operator?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","PrivateName"],n}()},right:{validate:(0,s.assertNodeType)("Expression")}},visitor:["left","right"],aliases:["Binary","Expression"]}),u("InterpreterDirective",{builder:["value"],fields:{value:{validate:(0,s.assertValueType)("string")}}}),u("Directive",{visitor:["value"],fields:{value:{validate:(0,s.assertNodeType)("DirectiveLiteral")}}}),u("DirectiveLiteral",{builder:["value"],fields:{value:{validate:(0,s.assertValueType)("string")}}}),u("BlockStatement",{builder:["body","directives"],visitor:["directives","body"],fields:{directives:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Directive"))),default:[]},body:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","Statement"]}),u("BreakStatement",{visitor:["label"],fields:{label:{validate:(0,s.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),u("CallExpression",{visitor:["callee","arguments","typeParameters","typeArguments"],builder:["callee","arguments"],aliases:["Expression"],fields:Object.assign({callee:{validate:(0,s.assertNodeType)("Expression","V8IntrinsicIdentifier")},arguments:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder")))}},{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{}:{optional:{validate:(0,s.assertOneOf)(!0,!1),optional:!0}},{typeArguments:{validate:(0,s.assertNodeType)("TypeParameterInstantiation"),optional:!0},typeParameters:{validate:(0,s.assertNodeType)("TSTypeParameterInstantiation"),optional:!0}})}),u("CatchClause",{visitor:["param","body"],fields:{param:{validate:(0,s.assertNodeType)("Identifier","ArrayPattern","ObjectPattern"),optional:!0},body:{validate:(0,s.assertNodeType)("BlockStatement")}},aliases:["Scopable","BlockParent"]}),u("ConditionalExpression",{visitor:["test","consequent","alternate"],fields:{test:{validate:(0,s.assertNodeType)("Expression")},consequent:{validate:(0,s.assertNodeType)("Expression")},alternate:{validate:(0,s.assertNodeType)("Expression")}},aliases:["Expression","Conditional"]}),u("ContinueStatement",{visitor:["label"],fields:{label:{validate:(0,s.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),u("DebuggerStatement",{aliases:["Statement"]}),u("DoWhileStatement",{visitor:["test","body"],fields:{test:{validate:(0,s.assertNodeType)("Expression")},body:{validate:(0,s.assertNodeType)("Statement")}},aliases:["Statement","BlockParent","Loop","While","Scopable"]}),u("EmptyStatement",{aliases:["Statement"]}),u("ExpressionStatement",{visitor:["expression"],fields:{expression:{validate:(0,s.assertNodeType)("Expression")}},aliases:["Statement","ExpressionWrapper"]}),u("File",{builder:["program","comments","tokens"],visitor:["program"],fields:{program:{validate:(0,s.assertNodeType)("Program")},comments:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.assertEach)((0,s.assertNodeType)("CommentBlock","CommentLine")):Object.assign((()=>{}),{each:{oneOfNodeTypes:["CommentBlock","CommentLine"]}}),optional:!0},tokens:{validate:(0,s.assertEach)(Object.assign((()=>{}),{type:"any"})),optional:!0}}}),u("ForInStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.assertNodeType)("VariableDeclaration","Identifier","MemberExpression","ArrayPattern","ObjectPattern","TSAsExpression","TSTypeAssertion","TSNonNullExpression"):(0,s.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,s.assertNodeType)("Expression")},body:{validate:(0,s.assertNodeType)("Statement")}}}),u("ForStatement",{visitor:["init","test","update","body"],aliases:["Scopable","Statement","For","BlockParent","Loop"],fields:{init:{validate:(0,s.assertNodeType)("VariableDeclaration","Expression"),optional:!0},test:{validate:(0,s.assertNodeType)("Expression"),optional:!0},update:{validate:(0,s.assertNodeType)("Expression"),optional:!0},body:{validate:(0,s.assertNodeType)("Statement")}}});const l={params:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Identifier","Pattern","RestElement")))},generator:{default:!1},async:{default:!1}};t.functionCommon=l;const c={returnType:{validate:(0,s.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},typeParameters:{validate:(0,s.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:!0}};t.functionTypeAnnotationCommon=c;const f=Object.assign({},l,{declare:{validate:(0,s.assertValueType)("boolean"),optional:!0},id:{validate:(0,s.assertNodeType)("Identifier"),optional:!0}});t.functionDeclarationCommon=f,u("FunctionDeclaration",{builder:["id","params","body","generator","async"],visitor:["id","params","body","returnType","typeParameters"],fields:Object.assign({},f,c,{body:{validate:(0,s.assertNodeType)("BlockStatement")},predicate:{validate:(0,s.assertNodeType)("DeclaredPredicate","InferredPredicate"),optional:!0}}),aliases:["Scopable","Function","BlockParent","FunctionParent","Statement","Pureish","Declaration"],validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return()=>{};const e=(0,s.assertNodeType)("Identifier");return function(t,n,i){(0,r.default)("ExportDefaultDeclaration",t)||e(i,"id",i.id)}}()}),u("FunctionExpression",{inherits:"FunctionDeclaration",aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:Object.assign({},l,c,{id:{validate:(0,s.assertNodeType)("Identifier"),optional:!0},body:{validate:(0,s.assertNodeType)("BlockStatement")},predicate:{validate:(0,s.assertNodeType)("DeclaredPredicate","InferredPredicate"),optional:!0}})});const p={typeAnnotation:{validate:(0,s.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator")))}};t.patternLikeCommon=p,u("Identifier",{builder:["name"],visitor:["typeAnnotation","decorators"],aliases:["Expression","PatternLike","LVal","TSEntityName"],fields:Object.assign({},p,{name:{validate:(0,s.chain)((0,s.assertValueType)("string"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&!(0,i.default)(n,!1))throw new TypeError(`"${n}" is not a valid identifier name`)}),{type:"string"}))},optional:{validate:(0,s.assertValueType)("boolean"),optional:!0}}),validate(e,t,n){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const i=/\.(\w+)$/.exec(t);if(!i)return;const[,a]=i,s={computed:!1};if("property"===a){if((0,r.default)("MemberExpression",e,s))return;if((0,r.default)("OptionalMemberExpression",e,s))return}else if("key"===a){if((0,r.default)("Property",e,s))return;if((0,r.default)("Method",e,s))return}else if("exported"===a){if((0,r.default)("ExportSpecifier",e))return}else if("imported"===a){if((0,r.default)("ImportSpecifier",e,{imported:n}))return}else if("meta"===a&&(0,r.default)("MetaProperty",e,{meta:n}))return;if(((0,o.isKeyword)(n.name)||(0,o.isReservedWord)(n.name,!1))&&"this"!==n.name)throw new TypeError(`"${n.name}" is not a valid identifier`)}}),u("IfStatement",{visitor:["test","consequent","alternate"],aliases:["Statement","Conditional"],fields:{test:{validate:(0,s.assertNodeType)("Expression")},consequent:{validate:(0,s.assertNodeType)("Statement")},alternate:{optional:!0,validate:(0,s.assertNodeType)("Statement")}}}),u("LabeledStatement",{visitor:["label","body"],aliases:["Statement"],fields:{label:{validate:(0,s.assertNodeType)("Identifier")},body:{validate:(0,s.assertNodeType)("Statement")}}}),u("StringLiteral",{builder:["value"],fields:{value:{validate:(0,s.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),u("NumericLiteral",{builder:["value"],deprecatedAlias:"NumberLiteral",fields:{value:{validate:(0,s.assertValueType)("number")}},aliases:["Expression","Pureish","Literal","Immutable"]}),u("NullLiteral",{aliases:["Expression","Pureish","Literal","Immutable"]}),u("BooleanLiteral",{builder:["value"],fields:{value:{validate:(0,s.assertValueType)("boolean")}},aliases:["Expression","Pureish","Literal","Immutable"]}),u("RegExpLiteral",{builder:["pattern","flags"],deprecatedAlias:"RegexLiteral",aliases:["Expression","Pureish","Literal"],fields:{pattern:{validate:(0,s.assertValueType)("string")},flags:{validate:(0,s.chain)((0,s.assertValueType)("string"),Object.assign((function(e,t,n){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const r=/[^gimsuy]/.exec(n);if(r)throw new TypeError(`"${r[0]}" is not a valid RegExp flag`)}),{type:"string"})),default:""}}}),u("LogicalExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"],fields:{operator:{validate:(0,s.assertOneOf)(...a.LOGICAL_OPERATORS)},left:{validate:(0,s.assertNodeType)("Expression")},right:{validate:(0,s.assertNodeType)("Expression")}}}),u("MemberExpression",{builder:["object","property","computed",...{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?[]:["optional"]],visitor:["object","property"],aliases:["Expression","LVal"],fields:Object.assign({object:{validate:(0,s.assertNodeType)("Expression")},property:{validate:function(){const e=(0,s.assertNodeType)("Identifier","PrivateName"),t=(0,s.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier","PrivateName"],n}()},computed:{default:!1}},{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{}:{optional:{validate:(0,s.assertOneOf)(!0,!1),optional:!0}})}),u("NewExpression",{inherits:"CallExpression"}),u("Program",{visitor:["directives","body"],builder:["body","directives","sourceType","interpreter"],fields:{sourceFile:{validate:(0,s.assertValueType)("string")},sourceType:{validate:(0,s.assertOneOf)("script","module"),default:"script"},interpreter:{validate:(0,s.assertNodeType)("InterpreterDirective"),default:null,optional:!0},directives:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Directive"))),default:[]},body:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block"]}),u("ObjectExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("ObjectMethod","ObjectProperty","SpreadElement")))}}}),u("ObjectMethod",{builder:["kind","key","params","body","computed","generator","async"],fields:Object.assign({},l,c,{kind:Object.assign({validate:(0,s.assertOneOf)("method","get","set")},{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{}:{default:"method"}),computed:{default:!1},key:{validate:function(){const e=(0,s.assertNodeType)("Identifier","StringLiteral","NumericLiteral"),t=(0,s.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier","StringLiteral","NumericLiteral"],n}()},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},body:{validate:(0,s.assertNodeType)("BlockStatement")}}),visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["UserWhitespacable","Function","Scopable","BlockParent","FunctionParent","Method","ObjectMember"]}),u("ObjectProperty",{builder:["key","value","computed","shorthand",...{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?[]:["decorators"]],fields:{computed:{default:!1},key:{validate:function(){const e=(0,s.assertNodeType)("Identifier","StringLiteral","NumericLiteral","BigIntLiteral","DecimalLiteral","PrivateName"),t=(0,s.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier","StringLiteral","NumericLiteral","BigIntLiteral","DecimalLiteral","PrivateName"],n}()},value:{validate:(0,s.assertNodeType)("Expression","PatternLike")},shorthand:{validate:(0,s.chain)((0,s.assertValueType)("boolean"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&e.computed)throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true")}),{type:"boolean"}),(function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&!(0,r.default)("Identifier",e.key))throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier")})),default:!1},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0}},visitor:["key","value","decorators"],aliases:["UserWhitespacable","Property","ObjectMember"],validate:function(){const e=(0,s.assertNodeType)("Identifier","Pattern","TSAsExpression","TSNonNullExpression","TSTypeAssertion"),t=(0,s.assertNodeType)("Expression");return function(n,i,o){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const a=(0,r.default)("ObjectPattern",n)?e:t;a(o,"value",o.value)}}()}),u("RestElement",{visitor:["argument","typeAnnotation"],builder:["argument"],aliases:["LVal","PatternLike"],deprecatedAlias:"RestProperty",fields:Object.assign({},p,{argument:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.assertNodeType)("Identifier","ArrayPattern","ObjectPattern","MemberExpression","TSAsExpression","TSTypeAssertion","TSNonNullExpression"):(0,s.assertNodeType)("LVal")},optional:{validate:(0,s.assertValueType)("boolean"),optional:!0}}),validate(e,t){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const n=/(\w+)\[(\d+)\]/.exec(t);if(!n)throw new Error("Internal Babel error: malformed key.");const[,r,i]=n;if(e[r].length>i+1)throw new TypeError(`RestElement must be last element of ${r}`)}}),u("ReturnStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,s.assertNodeType)("Expression"),optional:!0}}}),u("SequenceExpression",{visitor:["expressions"],fields:{expressions:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Expression")))}},aliases:["Expression"]}),u("ParenthesizedExpression",{visitor:["expression"],aliases:["Expression","ExpressionWrapper"],fields:{expression:{validate:(0,s.assertNodeType)("Expression")}}}),u("SwitchCase",{visitor:["test","consequent"],fields:{test:{validate:(0,s.assertNodeType)("Expression"),optional:!0},consequent:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Statement")))}}}),u("SwitchStatement",{visitor:["discriminant","cases"],aliases:["Statement","BlockParent","Scopable"],fields:{discriminant:{validate:(0,s.assertNodeType)("Expression")},cases:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("SwitchCase")))}}}),u("ThisExpression",{aliases:["Expression"]}),u("ThrowStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,s.assertNodeType)("Expression")}}}),u("TryStatement",{visitor:["block","handler","finalizer"],aliases:["Statement"],fields:{block:{validate:(0,s.chain)((0,s.assertNodeType)("BlockStatement"),Object.assign((function(e){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&!e.handler&&!e.finalizer)throw new TypeError("TryStatement expects either a handler or finalizer, or both")}),{oneOfNodeTypes:["BlockStatement"]}))},handler:{optional:!0,validate:(0,s.assertNodeType)("CatchClause")},finalizer:{optional:!0,validate:(0,s.assertNodeType)("BlockStatement")}}}),u("UnaryExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:!0},argument:{validate:(0,s.assertNodeType)("Expression")},operator:{validate:(0,s.assertOneOf)(...a.UNARY_OPERATORS)}},visitor:["argument"],aliases:["UnaryLike","Expression"]}),u("UpdateExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:!1},argument:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.assertNodeType)("Identifier","MemberExpression"):(0,s.assertNodeType)("Expression")},operator:{validate:(0,s.assertOneOf)(...a.UPDATE_OPERATORS)}},visitor:["argument"],aliases:["Expression"]}),u("VariableDeclaration",{builder:["kind","declarations"],visitor:["declarations"],aliases:["Statement","Declaration"],fields:{declare:{validate:(0,s.assertValueType)("boolean"),optional:!0},kind:{validate:(0,s.assertOneOf)("var","let","const")},declarations:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("VariableDeclarator")))}},validate(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&(0,r.default)("ForXStatement",e,{left:n})&&1!==n.declarations.length)throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${e.type}`)}}),u("VariableDeclarator",{visitor:["id","init"],fields:{id:{validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return(0,s.assertNodeType)("LVal");const e=(0,s.assertNodeType)("Identifier","ArrayPattern","ObjectPattern"),t=(0,s.assertNodeType)("Identifier");return function(n,r,i){const o=n.init?e:t;o(n,r,i)}}()},definite:{optional:!0,validate:(0,s.assertValueType)("boolean")},init:{optional:!0,validate:(0,s.assertNodeType)("Expression")}}}),u("WhileStatement",{visitor:["test","body"],aliases:["Statement","BlockParent","Loop","While","Scopable"],fields:{test:{validate:(0,s.assertNodeType)("Expression")},body:{validate:(0,s.assertNodeType)("Statement")}}}),u("WithStatement",{visitor:["object","body"],aliases:["Statement"],fields:{object:{validate:(0,s.assertNodeType)("Expression")},body:{validate:(0,s.assertNodeType)("Statement")}}}),u("AssignmentPattern",{visitor:["left","right","decorators"],builder:["left","right"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},p,{left:{validate:(0,s.assertNodeType)("Identifier","ObjectPattern","ArrayPattern","MemberExpression","TSAsExpression","TSTypeAssertion","TSNonNullExpression")},right:{validate:(0,s.assertNodeType)("Expression")},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0}})}),u("ArrayPattern",{visitor:["elements","typeAnnotation"],builder:["elements"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},p,{elements:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeOrValueType)("null","PatternLike")))},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},optional:{validate:(0,s.assertValueType)("boolean"),optional:!0}})}),u("ArrowFunctionExpression",{builder:["params","body","async"],visitor:["params","body","returnType","typeParameters"],aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:Object.assign({},l,c,{expression:{validate:(0,s.assertValueType)("boolean")},body:{validate:(0,s.assertNodeType)("BlockStatement","Expression")},predicate:{validate:(0,s.assertNodeType)("DeclaredPredicate","InferredPredicate"),optional:!0}})}),u("ClassBody",{visitor:["body"],fields:{body:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("ClassMethod","ClassPrivateMethod","ClassProperty","ClassPrivateProperty","ClassAccessorProperty","TSDeclareMethod","TSIndexSignature","StaticBlock")))}}}),u("ClassExpression",{builder:["id","superClass","body","decorators"],visitor:["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],aliases:["Scopable","Class","Expression"],fields:{id:{validate:(0,s.assertNodeType)("Identifier"),optional:!0},typeParameters:{validate:(0,s.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:!0},body:{validate:(0,s.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,s.assertNodeType)("Expression")},superTypeParameters:{validate:(0,s.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0},implements:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("TSExpressionWithTypeArguments","ClassImplements"))),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},mixins:{validate:(0,s.assertNodeType)("InterfaceExtends"),optional:!0}}}),u("ClassDeclaration",{inherits:"ClassExpression",aliases:["Scopable","Class","Statement","Declaration"],fields:{id:{validate:(0,s.assertNodeType)("Identifier")},typeParameters:{validate:(0,s.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:!0},body:{validate:(0,s.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,s.assertNodeType)("Expression")},superTypeParameters:{validate:(0,s.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0},implements:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("TSExpressionWithTypeArguments","ClassImplements"))),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},mixins:{validate:(0,s.assertNodeType)("InterfaceExtends"),optional:!0},declare:{validate:(0,s.assertValueType)("boolean"),optional:!0},abstract:{validate:(0,s.assertValueType)("boolean"),optional:!0}},validate:function(){const e=(0,s.assertNodeType)("Identifier");return function(t,n,i){({NODE_ENV:"production",BASE_URL:""}).BABEL_TYPES_8_BREAKING&&((0,r.default)("ExportDefaultDeclaration",t)||e(i,"id",i.id))}}()}),u("ExportAllDeclaration",{visitor:["source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{source:{validate:(0,s.assertNodeType)("StringLiteral")},exportKind:(0,s.validateOptional)((0,s.assertOneOf)("type","value")),assertions:{optional:!0,validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("ImportAttribute")))}}}),u("ExportDefaultDeclaration",{visitor:["declaration"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,s.assertNodeType)("FunctionDeclaration","ClassDeclaration","Expression")},exportKind:(0,s.validateOptional)((0,s.assertOneOf)("value"))}}),u("ExportNamedDeclaration",{visitor:["declaration","specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{optional:!0,validate:(0,s.chain)((0,s.assertNodeType)("Declaration"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&e.specifiers.length)throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration")}),{oneOfNodeTypes:["Declaration"]}),(function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&e.source)throw new TypeError("Cannot export a declaration from a source")}))},assertions:{optional:!0,validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("ImportAttribute")))},specifiers:{default:[],validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)(function(){const e=(0,s.assertNodeType)("ExportSpecifier","ExportDefaultSpecifier","ExportNamespaceSpecifier"),t=(0,s.assertNodeType)("ExportSpecifier");return{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?function(n,r,i){const o=n.source?e:t;o(n,r,i)}:e}()))},source:{validate:(0,s.assertNodeType)("StringLiteral"),optional:!0},exportKind:(0,s.validateOptional)((0,s.assertOneOf)("type","value"))}}),u("ExportSpecifier",{visitor:["local","exported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,s.assertNodeType)("Identifier")},exported:{validate:(0,s.assertNodeType)("Identifier","StringLiteral")},exportKind:{validate:(0,s.assertOneOf)("type","value"),optional:!0}}}),u("ForOfStatement",{visitor:["left","right","body"],builder:["left","right","body","await"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return(0,s.assertNodeType)("VariableDeclaration","LVal");const e=(0,s.assertNodeType)("VariableDeclaration"),t=(0,s.assertNodeType)("Identifier","MemberExpression","ArrayPattern","ObjectPattern","TSAsExpression","TSTypeAssertion","TSNonNullExpression");return function(n,i,o){(0,r.default)("VariableDeclaration",o)?e(n,i,o):t(n,i,o)}}()},right:{validate:(0,s.assertNodeType)("Expression")},body:{validate:(0,s.assertNodeType)("Statement")},await:{default:!1}}}),u("ImportDeclaration",{visitor:["specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration"],fields:{assertions:{optional:!0,validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("ImportAttribute")))},specifiers:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("ImportSpecifier","ImportDefaultSpecifier","ImportNamespaceSpecifier")))},source:{validate:(0,s.assertNodeType)("StringLiteral")},importKind:{validate:(0,s.assertOneOf)("type","typeof","value"),optional:!0}}}),u("ImportDefaultSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,s.assertNodeType)("Identifier")}}}),u("ImportNamespaceSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,s.assertNodeType)("Identifier")}}}),u("ImportSpecifier",{visitor:["local","imported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,s.assertNodeType)("Identifier")},imported:{validate:(0,s.assertNodeType)("Identifier","StringLiteral")},importKind:{validate:(0,s.assertOneOf)("type","typeof","value"),optional:!0}}}),u("MetaProperty",{visitor:["meta","property"],aliases:["Expression"],fields:{meta:{validate:(0,s.chain)((0,s.assertNodeType)("Identifier"),Object.assign((function(e,t,n){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;let i;switch(n.name){case"function":i="sent";break;case"new":i="target";break;case"import":i="meta";break}if(!(0,r.default)("Identifier",e.property,{name:i}))throw new TypeError("Unrecognised MetaProperty")}),{oneOfNodeTypes:["Identifier"]}))},property:{validate:(0,s.assertNodeType)("Identifier")}}});const d={abstract:{validate:(0,s.assertValueType)("boolean"),optional:!0},accessibility:{validate:(0,s.assertOneOf)("public","private","protected"),optional:!0},static:{default:!1},override:{default:!1},computed:{default:!1},optional:{validate:(0,s.assertValueType)("boolean"),optional:!0},key:{validate:(0,s.chain)(function(){const e=(0,s.assertNodeType)("Identifier","StringLiteral","NumericLiteral"),t=(0,s.assertNodeType)("Expression");return function(n,r,i){const o=n.computed?t:e;o(n,r,i)}}(),(0,s.assertNodeType)("Identifier","StringLiteral","NumericLiteral","Expression"))}};t.classMethodOrPropertyCommon=d;const y=Object.assign({},l,d,{params:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Identifier","Pattern","RestElement","TSParameterProperty")))},kind:{validate:(0,s.assertOneOf)("get","set","method","constructor"),default:"method"},access:{validate:(0,s.chain)((0,s.assertValueType)("string"),(0,s.assertOneOf)("public","private","protected")),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0}});t.classMethodOrDeclareMethodCommon=y,u("ClassMethod",{aliases:["Function","Scopable","BlockParent","FunctionParent","Method"],builder:["kind","key","params","body","computed","static","generator","async"],visitor:["key","params","body","decorators","returnType","typeParameters"],fields:Object.assign({},y,c,{body:{validate:(0,s.assertNodeType)("BlockStatement")}})}),u("ObjectPattern",{visitor:["properties","typeAnnotation","decorators"],builder:["properties"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},p,{properties:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("RestElement","ObjectProperty")))}})}),u("SpreadElement",{visitor:["argument"],aliases:["UnaryLike"],deprecatedAlias:"SpreadProperty",fields:{argument:{validate:(0,s.assertNodeType)("Expression")}}}),u("Super",{aliases:["Expression"]}),u("TaggedTemplateExpression",{visitor:["tag","quasi","typeParameters"],builder:["tag","quasi"],aliases:["Expression"],fields:{tag:{validate:(0,s.assertNodeType)("Expression")},quasi:{validate:(0,s.assertNodeType)("TemplateLiteral")},typeParameters:{validate:(0,s.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0}}}),u("TemplateElement",{builder:["value","tail"],fields:{value:{validate:(0,s.assertShape)({raw:{validate:(0,s.assertValueType)("string")},cooked:{validate:(0,s.assertValueType)("string"),optional:!0}})},tail:{default:!1}}}),u("TemplateLiteral",{visitor:["quasis","expressions"],aliases:["Expression","Literal"],fields:{quasis:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("TemplateElement")))},expressions:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Expression","TSType")),(function(e,t,n){if(e.quasis.length!==n.length+1)throw new TypeError(`Number of ${e.type} quasis should be exactly one more than the number of expressions.\nExpected ${n.length+1} quasis but got ${e.quasis.length}`)}))}}}),u("YieldExpression",{builder:["argument","delegate"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{delegate:{validate:(0,s.chain)((0,s.assertValueType)("boolean"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&!e.argument)throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument")}),{type:"boolean"})),default:!1},argument:{optional:!0,validate:(0,s.assertNodeType)("Expression")}}}),u("AwaitExpression",{builder:["argument"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{argument:{validate:(0,s.assertNodeType)("Expression")}}}),u("Import",{aliases:["Expression"]}),u("BigIntLiteral",{builder:["value"],fields:{value:{validate:(0,s.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),u("ExportNamespaceSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,s.assertNodeType)("Identifier")}}}),u("OptionalMemberExpression",{builder:["object","property","computed","optional"],visitor:["object","property"],aliases:["Expression"],fields:{object:{validate:(0,s.assertNodeType)("Expression")},property:{validate:function(){const e=(0,s.assertNodeType)("Identifier"),t=(0,s.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier"],n}()},computed:{default:!1},optional:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.chain)((0,s.assertValueType)("boolean"),(0,s.assertOptionalChainStart)()):(0,s.assertValueType)("boolean")}}}),u("OptionalCallExpression",{visitor:["callee","arguments","typeParameters","typeArguments"],builder:["callee","arguments","optional"],aliases:["Expression"],fields:{callee:{validate:(0,s.assertNodeType)("Expression")},arguments:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder")))},optional:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,s.chain)((0,s.assertValueType)("boolean"),(0,s.assertOptionalChainStart)()):(0,s.assertValueType)("boolean")},typeArguments:{validate:(0,s.assertNodeType)("TypeParameterInstantiation"),optional:!0},typeParameters:{validate:(0,s.assertNodeType)("TSTypeParameterInstantiation"),optional:!0}}}),u("ClassProperty",{visitor:["key","value","typeAnnotation","decorators"],builder:["key","value","typeAnnotation","decorators","computed","static"],aliases:["Property"],fields:Object.assign({},d,{value:{validate:(0,s.assertNodeType)("Expression"),optional:!0},definite:{validate:(0,s.assertValueType)("boolean"),optional:!0},typeAnnotation:{validate:(0,s.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},readonly:{validate:(0,s.assertValueType)("boolean"),optional:!0},declare:{validate:(0,s.assertValueType)("boolean"),optional:!0},variance:{validate:(0,s.assertNodeType)("Variance"),optional:!0}})}),u("ClassAccessorProperty",{visitor:["key","value","typeAnnotation","decorators"],builder:["key","value","typeAnnotation","decorators","computed","static"],aliases:["Property","Accessor"],fields:Object.assign({},d,{key:{validate:(0,s.chain)(function(){const e=(0,s.assertNodeType)("Identifier","StringLiteral","NumericLiteral","PrivateName"),t=(0,s.assertNodeType)("Expression");return function(n,r,i){const o=n.computed?t:e;o(n,r,i)}}(),(0,s.assertNodeType)("Identifier","StringLiteral","NumericLiteral","Expression","PrivateName"))},value:{validate:(0,s.assertNodeType)("Expression"),optional:!0},definite:{validate:(0,s.assertValueType)("boolean"),optional:!0},typeAnnotation:{validate:(0,s.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},readonly:{validate:(0,s.assertValueType)("boolean"),optional:!0},declare:{validate:(0,s.assertValueType)("boolean"),optional:!0},variance:{validate:(0,s.assertNodeType)("Variance"),optional:!0}})}),u("ClassPrivateProperty",{visitor:["key","value","decorators","typeAnnotation"],builder:["key","value","decorators","static"],aliases:["Property","Private"],fields:{key:{validate:(0,s.assertNodeType)("PrivateName")},value:{validate:(0,s.assertNodeType)("Expression"),optional:!0},typeAnnotation:{validate:(0,s.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Decorator"))),optional:!0},readonly:{validate:(0,s.assertValueType)("boolean"),optional:!0},definite:{validate:(0,s.assertValueType)("boolean"),optional:!0},variance:{validate:(0,s.assertNodeType)("Variance"),optional:!0}}}),u("ClassPrivateMethod",{builder:["kind","key","params","body","static"],visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["Function","Scopable","BlockParent","FunctionParent","Method","Private"],fields:Object.assign({},y,c,{key:{validate:(0,s.assertNodeType)("PrivateName")},body:{validate:(0,s.assertNodeType)("BlockStatement")}})}),u("PrivateName",{visitor:["id"],aliases:["Private"],fields:{id:{validate:(0,s.assertNodeType)("Identifier")}}}),u("StaticBlock",{visitor:["body"],fields:{body:{validate:(0,s.chain)((0,s.assertValueType)("array"),(0,s.assertEach)((0,s.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","FunctionParent"]})},91985:function(e,t,n){"use strict";var r=n(47376);(0,r.default)("ArgumentPlaceholder",{}),(0,r.default)("BindExpression",{visitor:["object","callee"],aliases:["Expression"],fields:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{object:{validate:(0,r.assertNodeType)("Expression")},callee:{validate:(0,r.assertNodeType)("Expression")}}:{object:{validate:Object.assign((()=>{}),{oneOfNodeTypes:["Expression"]})},callee:{validate:Object.assign((()=>{}),{oneOfNodeTypes:["Expression"]})}}}),(0,r.default)("ImportAttribute",{visitor:["key","value"],fields:{key:{validate:(0,r.assertNodeType)("Identifier","StringLiteral")},value:{validate:(0,r.assertNodeType)("StringLiteral")}}}),(0,r.default)("Decorator",{visitor:["expression"],fields:{expression:{validate:(0,r.assertNodeType)("Expression")}}}),(0,r.default)("DoExpression",{visitor:["body"],builder:["body","async"],aliases:["Expression"],fields:{body:{validate:(0,r.assertNodeType)("BlockStatement")},async:{validate:(0,r.assertValueType)("boolean"),default:!1}}}),(0,r.default)("ExportDefaultSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,r.assertNodeType)("Identifier")}}}),(0,r.default)("RecordExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("ObjectProperty","SpreadElement")))}}}),(0,r.default)("TupleExpression",{fields:{elements:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("Expression","SpreadElement"))),default:[]}},visitor:["elements"],aliases:["Expression"]}),(0,r.default)("DecimalLiteral",{builder:["value"],fields:{value:{validate:(0,r.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,r.default)("ModuleExpression",{visitor:["body"],fields:{body:{validate:(0,r.assertNodeType)("Program")}},aliases:["Expression"]}),(0,r.default)("TopicReference",{aliases:["Expression"]}),(0,r.default)("PipelineTopicExpression",{builder:["expression"],visitor:["expression"],fields:{expression:{validate:(0,r.assertNodeType)("Expression")}},aliases:["Expression"]}),(0,r.default)("PipelineBareFunction",{builder:["callee"],visitor:["callee"],fields:{callee:{validate:(0,r.assertNodeType)("Expression")}},aliases:["Expression"]}),(0,r.default)("PipelinePrimaryTopicReference",{aliases:["Expression"]})},37460:function(e,t,n){"use strict";var r=n(47376);const i=(0,r.defineAliasedType)("Flow"),o=(e,t="TypeParameterDeclaration")=>{i(e,{builder:["id","typeParameters","extends","body"],visitor:["id","typeParameters","extends","mixins","implements","body"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)(t),extends:(0,r.validateOptional)((0,r.arrayOfType)("InterfaceExtends")),mixins:(0,r.validateOptional)((0,r.arrayOfType)("InterfaceExtends")),implements:(0,r.validateOptional)((0,r.arrayOfType)("ClassImplements")),body:(0,r.validateType)("ObjectTypeAnnotation")}})};i("AnyTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ArrayTypeAnnotation",{visitor:["elementType"],aliases:["FlowType"],fields:{elementType:(0,r.validateType)("FlowType")}}),i("BooleanTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("BooleanLiteralTypeAnnotation",{builder:["value"],aliases:["FlowType"],fields:{value:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("NullLiteralTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ClassImplements",{visitor:["id","typeParameters"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterInstantiation")}}),o("DeclareClass"),i("DeclareFunction",{visitor:["id"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),predicate:(0,r.validateOptionalType)("DeclaredPredicate")}}),o("DeclareInterface"),i("DeclareModule",{builder:["id","body","kind"],visitor:["id","body"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)(["Identifier","StringLiteral"]),body:(0,r.validateType)("BlockStatement"),kind:(0,r.validateOptional)((0,r.assertOneOf)("CommonJS","ES"))}}),i("DeclareModuleExports",{visitor:["typeAnnotation"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{typeAnnotation:(0,r.validateType)("TypeAnnotation")}}),i("DeclareTypeAlias",{visitor:["id","typeParameters","right"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),right:(0,r.validateType)("FlowType")}}),i("DeclareOpaqueType",{visitor:["id","typeParameters","supertype"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),supertype:(0,r.validateOptionalType)("FlowType"),impltype:(0,r.validateOptionalType)("FlowType")}}),i("DeclareVariable",{visitor:["id"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier")}}),i("DeclareExportDeclaration",{visitor:["declaration","specifiers","source"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{declaration:(0,r.validateOptionalType)("Flow"),specifiers:(0,r.validateOptional)((0,r.arrayOfType)(["ExportSpecifier","ExportNamespaceSpecifier"])),source:(0,r.validateOptionalType)("StringLiteral"),default:(0,r.validateOptional)((0,r.assertValueType)("boolean"))}}),i("DeclareExportAllDeclaration",{visitor:["source"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{source:(0,r.validateType)("StringLiteral"),exportKind:(0,r.validateOptional)((0,r.assertOneOf)("type","value"))}}),i("DeclaredPredicate",{visitor:["value"],aliases:["FlowPredicate"],fields:{value:(0,r.validateType)("Flow")}}),i("ExistsTypeAnnotation",{aliases:["FlowType"]}),i("FunctionTypeAnnotation",{visitor:["typeParameters","params","rest","returnType"],aliases:["FlowType"],fields:{typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),params:(0,r.validate)((0,r.arrayOfType)("FunctionTypeParam")),rest:(0,r.validateOptionalType)("FunctionTypeParam"),this:(0,r.validateOptionalType)("FunctionTypeParam"),returnType:(0,r.validateType)("FlowType")}}),i("FunctionTypeParam",{visitor:["name","typeAnnotation"],fields:{name:(0,r.validateOptionalType)("Identifier"),typeAnnotation:(0,r.validateType)("FlowType"),optional:(0,r.validateOptional)((0,r.assertValueType)("boolean"))}}),i("GenericTypeAnnotation",{visitor:["id","typeParameters"],aliases:["FlowType"],fields:{id:(0,r.validateType)(["Identifier","QualifiedTypeIdentifier"]),typeParameters:(0,r.validateOptionalType)("TypeParameterInstantiation")}}),i("InferredPredicate",{aliases:["FlowPredicate"]}),i("InterfaceExtends",{visitor:["id","typeParameters"],fields:{id:(0,r.validateType)(["Identifier","QualifiedTypeIdentifier"]),typeParameters:(0,r.validateOptionalType)("TypeParameterInstantiation")}}),o("InterfaceDeclaration"),i("InterfaceTypeAnnotation",{visitor:["extends","body"],aliases:["FlowType"],fields:{extends:(0,r.validateOptional)((0,r.arrayOfType)("InterfaceExtends")),body:(0,r.validateType)("ObjectTypeAnnotation")}}),i("IntersectionTypeAnnotation",{visitor:["types"],aliases:["FlowType"],fields:{types:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("MixedTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("EmptyTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("NullableTypeAnnotation",{visitor:["typeAnnotation"],aliases:["FlowType"],fields:{typeAnnotation:(0,r.validateType)("FlowType")}}),i("NumberLiteralTypeAnnotation",{builder:["value"],aliases:["FlowType"],fields:{value:(0,r.validate)((0,r.assertValueType)("number"))}}),i("NumberTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ObjectTypeAnnotation",{visitor:["properties","indexers","callProperties","internalSlots"],aliases:["FlowType"],builder:["properties","indexers","callProperties","internalSlots","exact"],fields:{properties:(0,r.validate)((0,r.arrayOfType)(["ObjectTypeProperty","ObjectTypeSpreadProperty"])),indexers:{validate:(0,r.arrayOfType)("ObjectTypeIndexer"),optional:!0,default:[]},callProperties:{validate:(0,r.arrayOfType)("ObjectTypeCallProperty"),optional:!0,default:[]},internalSlots:{validate:(0,r.arrayOfType)("ObjectTypeInternalSlot"),optional:!0,default:[]},exact:{validate:(0,r.assertValueType)("boolean"),default:!1},inexact:(0,r.validateOptional)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeInternalSlot",{visitor:["id","value","optional","static","method"],aliases:["UserWhitespacable"],fields:{id:(0,r.validateType)("Identifier"),value:(0,r.validateType)("FlowType"),optional:(0,r.validate)((0,r.assertValueType)("boolean")),static:(0,r.validate)((0,r.assertValueType)("boolean")),method:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeCallProperty",{visitor:["value"],aliases:["UserWhitespacable"],fields:{value:(0,r.validateType)("FlowType"),static:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeIndexer",{visitor:["id","key","value","variance"],aliases:["UserWhitespacable"],fields:{id:(0,r.validateOptionalType)("Identifier"),key:(0,r.validateType)("FlowType"),value:(0,r.validateType)("FlowType"),static:(0,r.validate)((0,r.assertValueType)("boolean")),variance:(0,r.validateOptionalType)("Variance")}}),i("ObjectTypeProperty",{visitor:["key","value","variance"],aliases:["UserWhitespacable"],fields:{key:(0,r.validateType)(["Identifier","StringLiteral"]),value:(0,r.validateType)("FlowType"),kind:(0,r.validate)((0,r.assertOneOf)("init","get","set")),static:(0,r.validate)((0,r.assertValueType)("boolean")),proto:(0,r.validate)((0,r.assertValueType)("boolean")),optional:(0,r.validate)((0,r.assertValueType)("boolean")),variance:(0,r.validateOptionalType)("Variance"),method:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeSpreadProperty",{visitor:["argument"],aliases:["UserWhitespacable"],fields:{argument:(0,r.validateType)("FlowType")}}),i("OpaqueType",{visitor:["id","typeParameters","supertype","impltype"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),supertype:(0,r.validateOptionalType)("FlowType"),impltype:(0,r.validateType)("FlowType")}}),i("QualifiedTypeIdentifier",{visitor:["id","qualification"],fields:{id:(0,r.validateType)("Identifier"),qualification:(0,r.validateType)(["Identifier","QualifiedTypeIdentifier"])}}),i("StringLiteralTypeAnnotation",{builder:["value"],aliases:["FlowType"],fields:{value:(0,r.validate)((0,r.assertValueType)("string"))}}),i("StringTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("SymbolTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ThisTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("TupleTypeAnnotation",{visitor:["types"],aliases:["FlowType"],fields:{types:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("TypeofTypeAnnotation",{visitor:["argument"],aliases:["FlowType"],fields:{argument:(0,r.validateType)("FlowType")}}),i("TypeAlias",{visitor:["id","typeParameters","right"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),right:(0,r.validateType)("FlowType")}}),i("TypeAnnotation",{visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("FlowType")}}),i("TypeCastExpression",{visitor:["expression","typeAnnotation"],aliases:["ExpressionWrapper","Expression"],fields:{expression:(0,r.validateType)("Expression"),typeAnnotation:(0,r.validateType)("TypeAnnotation")}}),i("TypeParameter",{visitor:["bound","default","variance"],fields:{name:(0,r.validate)((0,r.assertValueType)("string")),bound:(0,r.validateOptionalType)("TypeAnnotation"),default:(0,r.validateOptionalType)("FlowType"),variance:(0,r.validateOptionalType)("Variance")}}),i("TypeParameterDeclaration",{visitor:["params"],fields:{params:(0,r.validate)((0,r.arrayOfType)("TypeParameter"))}}),i("TypeParameterInstantiation",{visitor:["params"],fields:{params:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("UnionTypeAnnotation",{visitor:["types"],aliases:["FlowType"],fields:{types:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("Variance",{builder:["kind"],fields:{kind:(0,r.validate)((0,r.assertOneOf)("minus","plus"))}}),i("VoidTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("EnumDeclaration",{aliases:["Statement","Declaration"],visitor:["id","body"],fields:{id:(0,r.validateType)("Identifier"),body:(0,r.validateType)(["EnumBooleanBody","EnumNumberBody","EnumStringBody","EnumSymbolBody"])}}),i("EnumBooleanBody",{aliases:["EnumBody"],visitor:["members"],fields:{explicitType:(0,r.validate)((0,r.assertValueType)("boolean")),members:(0,r.validateArrayOfType)("EnumBooleanMember"),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumNumberBody",{aliases:["EnumBody"],visitor:["members"],fields:{explicitType:(0,r.validate)((0,r.assertValueType)("boolean")),members:(0,r.validateArrayOfType)("EnumNumberMember"),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumStringBody",{aliases:["EnumBody"],visitor:["members"],fields:{explicitType:(0,r.validate)((0,r.assertValueType)("boolean")),members:(0,r.validateArrayOfType)(["EnumStringMember","EnumDefaultedMember"]),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumSymbolBody",{aliases:["EnumBody"],visitor:["members"],fields:{members:(0,r.validateArrayOfType)("EnumDefaultedMember"),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumBooleanMember",{aliases:["EnumMember"],visitor:["id"],fields:{id:(0,r.validateType)("Identifier"),init:(0,r.validateType)("BooleanLiteral")}}),i("EnumNumberMember",{aliases:["EnumMember"],visitor:["id","init"],fields:{id:(0,r.validateType)("Identifier"),init:(0,r.validateType)("NumericLiteral")}}),i("EnumStringMember",{aliases:["EnumMember"],visitor:["id","init"],fields:{id:(0,r.validateType)("Identifier"),init:(0,r.validateType)("StringLiteral")}}),i("EnumDefaultedMember",{aliases:["EnumMember"],visitor:["id"],fields:{id:(0,r.validateType)("Identifier")}}),i("IndexedAccessType",{visitor:["objectType","indexType"],aliases:["FlowType"],fields:{objectType:(0,r.validateType)("FlowType"),indexType:(0,r.validateType)("FlowType")}}),i("OptionalIndexedAccessType",{visitor:["objectType","indexType"],aliases:["FlowType"],fields:{objectType:(0,r.validateType)("FlowType"),indexType:(0,r.validateType)("FlowType"),optional:(0,r.validate)((0,r.assertValueType)("boolean"))}})},92321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ALIAS_KEYS",{enumerable:!0,get:function(){return i.ALIAS_KEYS}}),Object.defineProperty(t,"BUILDER_KEYS",{enumerable:!0,get:function(){return i.BUILDER_KEYS}}),Object.defineProperty(t,"DEPRECATED_KEYS",{enumerable:!0,get:function(){return i.DEPRECATED_KEYS}}),Object.defineProperty(t,"FLIPPED_ALIAS_KEYS",{enumerable:!0,get:function(){return i.FLIPPED_ALIAS_KEYS}}),Object.defineProperty(t,"NODE_FIELDS",{enumerable:!0,get:function(){return i.NODE_FIELDS}}),Object.defineProperty(t,"NODE_PARENT_VALIDATIONS",{enumerable:!0,get:function(){return i.NODE_PARENT_VALIDATIONS}}),Object.defineProperty(t,"PLACEHOLDERS",{enumerable:!0,get:function(){return o.PLACEHOLDERS}}),Object.defineProperty(t,"PLACEHOLDERS_ALIAS",{enumerable:!0,get:function(){return o.PLACEHOLDERS_ALIAS}}),Object.defineProperty(t,"PLACEHOLDERS_FLIPPED_ALIAS",{enumerable:!0,get:function(){return o.PLACEHOLDERS_FLIPPED_ALIAS}}),t.TYPES=void 0,Object.defineProperty(t,"VISITOR_KEYS",{enumerable:!0,get:function(){return i.VISITOR_KEYS}});var r=n(9699);n(63442),n(37460),n(75236),n(70353),n(91985),n(84839);var i=n(47376),o=n(45606);r(i.VISITOR_KEYS),r(i.ALIAS_KEYS),r(i.FLIPPED_ALIAS_KEYS),r(i.NODE_FIELDS),r(i.BUILDER_KEYS),r(i.DEPRECATED_KEYS),r(o.PLACEHOLDERS_ALIAS),r(o.PLACEHOLDERS_FLIPPED_ALIAS);const a=[].concat(Object.keys(i.VISITOR_KEYS),Object.keys(i.FLIPPED_ALIAS_KEYS),Object.keys(i.DEPRECATED_KEYS));t.TYPES=a},75236:function(e,t,n){"use strict";var r=n(47376);const i=(0,r.defineAliasedType)("JSX");i("JSXAttribute",{visitor:["name","value"],aliases:["Immutable"],fields:{name:{validate:(0,r.assertNodeType)("JSXIdentifier","JSXNamespacedName")},value:{optional:!0,validate:(0,r.assertNodeType)("JSXElement","JSXFragment","StringLiteral","JSXExpressionContainer")}}}),i("JSXClosingElement",{visitor:["name"],aliases:["Immutable"],fields:{name:{validate:(0,r.assertNodeType)("JSXIdentifier","JSXMemberExpression","JSXNamespacedName")}}}),i("JSXElement",{builder:["openingElement","closingElement","children","selfClosing"],visitor:["openingElement","children","closingElement"],aliases:["Immutable","Expression"],fields:Object.assign({openingElement:{validate:(0,r.assertNodeType)("JSXOpeningElement")},closingElement:{optional:!0,validate:(0,r.assertNodeType)("JSXClosingElement")},children:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement","JSXFragment")))}},{selfClosing:{validate:(0,r.assertValueType)("boolean"),optional:!0}})}),i("JSXEmptyExpression",{}),i("JSXExpressionContainer",{visitor:["expression"],aliases:["Immutable"],fields:{expression:{validate:(0,r.assertNodeType)("Expression","JSXEmptyExpression")}}}),i("JSXSpreadChild",{visitor:["expression"],aliases:["Immutable"],fields:{expression:{validate:(0,r.assertNodeType)("Expression")}}}),i("JSXIdentifier",{builder:["name"],fields:{name:{validate:(0,r.assertValueType)("string")}}}),i("JSXMemberExpression",{visitor:["object","property"],fields:{object:{validate:(0,r.assertNodeType)("JSXMemberExpression","JSXIdentifier")},property:{validate:(0,r.assertNodeType)("JSXIdentifier")}}}),i("JSXNamespacedName",{visitor:["namespace","name"],fields:{namespace:{validate:(0,r.assertNodeType)("JSXIdentifier")},name:{validate:(0,r.assertNodeType)("JSXIdentifier")}}}),i("JSXOpeningElement",{builder:["name","attributes","selfClosing"],visitor:["name","attributes"],aliases:["Immutable"],fields:{name:{validate:(0,r.assertNodeType)("JSXIdentifier","JSXMemberExpression","JSXNamespacedName")},selfClosing:{default:!1},attributes:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("JSXAttribute","JSXSpreadAttribute")))},typeParameters:{validate:(0,r.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0}}}),i("JSXSpreadAttribute",{visitor:["argument"],fields:{argument:{validate:(0,r.assertNodeType)("Expression")}}}),i("JSXText",{aliases:["Immutable"],builder:["value"],fields:{value:{validate:(0,r.assertValueType)("string")}}}),i("JSXFragment",{builder:["openingFragment","closingFragment","children"],visitor:["openingFragment","children","closingFragment"],aliases:["Immutable","Expression"],fields:{openingFragment:{validate:(0,r.assertNodeType)("JSXOpeningFragment")},closingFragment:{validate:(0,r.assertNodeType)("JSXClosingFragment")},children:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement","JSXFragment")))}}}),i("JSXOpeningFragment",{aliases:["Immutable"]}),i("JSXClosingFragment",{aliases:["Immutable"]})},70353:function(e,t,n){"use strict";var r=n(47376),i=n(45606);const o=(0,r.defineAliasedType)("Miscellaneous");o("Noop",{visitor:[]}),o("Placeholder",{visitor:[],builder:["expectedNode","name"],fields:{name:{validate:(0,r.assertNodeType)("Identifier")},expectedNode:{validate:(0,r.assertOneOf)(...i.PLACEHOLDERS)}}}),o("V8IntrinsicIdentifier",{builder:["name"],fields:{name:{validate:(0,r.assertValueType)("string")}}})},45606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PLACEHOLDERS_FLIPPED_ALIAS=t.PLACEHOLDERS_ALIAS=t.PLACEHOLDERS=void 0;var r=n(47376);const i=["Identifier","StringLiteral","Expression","Statement","Declaration","BlockStatement","ClassBody","Pattern"];t.PLACEHOLDERS=i;const o={Declaration:["Statement"],Pattern:["PatternLike","LVal"]};t.PLACEHOLDERS_ALIAS=o;for(const s of i){const e=r.ALIAS_KEYS[s];null!=e&&e.length&&(o[s]=e)}const a={};t.PLACEHOLDERS_FLIPPED_ALIAS=a,Object.keys(o).forEach((e=>{o[e].forEach((t=>{Object.hasOwnProperty.call(a,t)||(a[t]=[]),a[t].push(e)}))}))},84839:function(e,t,n){"use strict";var r=n(47376),i=n(63442),o=n(90053);const a=(0,r.defineAliasedType)("TypeScript"),s=(0,r.assertValueType)("boolean"),u={returnType:{validate:(0,r.assertNodeType)("TSTypeAnnotation","Noop"),optional:!0},typeParameters:{validate:(0,r.assertNodeType)("TSTypeParameterDeclaration","Noop"),optional:!0}};a("TSParameterProperty",{aliases:["LVal"],visitor:["parameter"],fields:{accessibility:{validate:(0,r.assertOneOf)("public","private","protected"),optional:!0},readonly:{validate:(0,r.assertValueType)("boolean"),optional:!0},parameter:{validate:(0,r.assertNodeType)("Identifier","AssignmentPattern")},override:{validate:(0,r.assertValueType)("boolean"),optional:!0},decorators:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("Decorator"))),optional:!0}}}),a("TSDeclareFunction",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","params","returnType"],fields:Object.assign({},i.functionDeclarationCommon,u)}),a("TSDeclareMethod",{visitor:["decorators","key","typeParameters","params","returnType"],fields:Object.assign({},i.classMethodOrDeclareMethodCommon,u)}),a("TSQualifiedName",{aliases:["TSEntityName"],visitor:["left","right"],fields:{left:(0,r.validateType)("TSEntityName"),right:(0,r.validateType)("Identifier")}});const l={typeParameters:(0,r.validateOptionalType)("TSTypeParameterDeclaration"),["parameters"]:(0,r.validateArrayOfType)(["Identifier","RestElement"]),["typeAnnotation"]:(0,r.validateOptionalType)("TSTypeAnnotation")},c={aliases:["TSTypeElement"],visitor:["typeParameters","parameters","typeAnnotation"],fields:l};a("TSCallSignatureDeclaration",c),a("TSConstructSignatureDeclaration",c);const f={key:(0,r.validateType)("Expression"),computed:(0,r.validate)(s),optional:(0,r.validateOptional)(s)};a("TSPropertySignature",{aliases:["TSTypeElement"],visitor:["key","typeAnnotation","initializer"],fields:Object.assign({},f,{readonly:(0,r.validateOptional)(s),typeAnnotation:(0,r.validateOptionalType)("TSTypeAnnotation"),initializer:(0,r.validateOptionalType)("Expression"),kind:{validate:(0,r.assertOneOf)("get","set")}})}),a("TSMethodSignature",{aliases:["TSTypeElement"],visitor:["key","typeParameters","parameters","typeAnnotation"],fields:Object.assign({},l,f,{kind:{validate:(0,r.assertOneOf)("method","get","set")}})}),a("TSIndexSignature",{aliases:["TSTypeElement"],visitor:["parameters","typeAnnotation"],fields:{readonly:(0,r.validateOptional)(s),static:(0,r.validateOptional)(s),parameters:(0,r.validateArrayOfType)("Identifier"),typeAnnotation:(0,r.validateOptionalType)("TSTypeAnnotation")}});const p=["TSAnyKeyword","TSBooleanKeyword","TSBigIntKeyword","TSIntrinsicKeyword","TSNeverKeyword","TSNullKeyword","TSNumberKeyword","TSObjectKeyword","TSStringKeyword","TSSymbolKeyword","TSUndefinedKeyword","TSUnknownKeyword","TSVoidKeyword"];for(const m of p)a(m,{aliases:["TSType","TSBaseType"],visitor:[],fields:{}});a("TSThisType",{aliases:["TSType","TSBaseType"],visitor:[],fields:{}});const d={aliases:["TSType"],visitor:["typeParameters","parameters","typeAnnotation"]};a("TSFunctionType",Object.assign({},d,{fields:l})),a("TSConstructorType",Object.assign({},d,{fields:Object.assign({},l,{abstract:(0,r.validateOptional)(s)})})),a("TSTypeReference",{aliases:["TSType"],visitor:["typeName","typeParameters"],fields:{typeName:(0,r.validateType)("TSEntityName"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSTypePredicate",{aliases:["TSType"],visitor:["parameterName","typeAnnotation"],builder:["parameterName","typeAnnotation","asserts"],fields:{parameterName:(0,r.validateType)(["Identifier","TSThisType"]),typeAnnotation:(0,r.validateOptionalType)("TSTypeAnnotation"),asserts:(0,r.validateOptional)(s)}}),a("TSTypeQuery",{aliases:["TSType"],visitor:["exprName","typeParameters"],fields:{exprName:(0,r.validateType)(["TSEntityName","TSImportType"]),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSTypeLiteral",{aliases:["TSType"],visitor:["members"],fields:{members:(0,r.validateArrayOfType)("TSTypeElement")}}),a("TSArrayType",{aliases:["TSType"],visitor:["elementType"],fields:{elementType:(0,r.validateType)("TSType")}}),a("TSTupleType",{aliases:["TSType"],visitor:["elementTypes"],fields:{elementTypes:(0,r.validateArrayOfType)(["TSType","TSNamedTupleMember"])}}),a("TSOptionalType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("TSType")}}),a("TSRestType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("TSType")}}),a("TSNamedTupleMember",{visitor:["label","elementType"],builder:["label","elementType","optional"],fields:{label:(0,r.validateType)("Identifier"),optional:{validate:s,default:!1},elementType:(0,r.validateType)("TSType")}});const y={aliases:["TSType"],visitor:["types"],fields:{types:(0,r.validateArrayOfType)("TSType")}};a("TSUnionType",y),a("TSIntersectionType",y),a("TSConditionalType",{aliases:["TSType"],visitor:["checkType","extendsType","trueType","falseType"],fields:{checkType:(0,r.validateType)("TSType"),extendsType:(0,r.validateType)("TSType"),trueType:(0,r.validateType)("TSType"),falseType:(0,r.validateType)("TSType")}}),a("TSInferType",{aliases:["TSType"],visitor:["typeParameter"],fields:{typeParameter:(0,r.validateType)("TSTypeParameter")}}),a("TSParenthesizedType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("TSType")}}),a("TSTypeOperator",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{operator:(0,r.validate)((0,r.assertValueType)("string")),typeAnnotation:(0,r.validateType)("TSType")}}),a("TSIndexedAccessType",{aliases:["TSType"],visitor:["objectType","indexType"],fields:{objectType:(0,r.validateType)("TSType"),indexType:(0,r.validateType)("TSType")}}),a("TSMappedType",{aliases:["TSType"],visitor:["typeParameter","typeAnnotation","nameType"],fields:{readonly:(0,r.validateOptional)(s),typeParameter:(0,r.validateType)("TSTypeParameter"),optional:(0,r.validateOptional)(s),typeAnnotation:(0,r.validateOptionalType)("TSType"),nameType:(0,r.validateOptionalType)("TSType")}}),a("TSLiteralType",{aliases:["TSType","TSBaseType"],visitor:["literal"],fields:{literal:{validate:function(){const e=(0,r.assertNodeType)("NumericLiteral","BigIntLiteral"),t=(0,r.assertOneOf)("-"),n=(0,r.assertNodeType)("NumericLiteral","StringLiteral","BooleanLiteral","BigIntLiteral");function i(r,i,a){(0,o.default)("UnaryExpression",a)?(t(a,"operator",a.operator),e(a,"argument",a.argument)):n(r,i,a)}return i.oneOfNodeTypes=["NumericLiteral","StringLiteral","BooleanLiteral","BigIntLiteral","UnaryExpression"],i}()}}}),a("TSExpressionWithTypeArguments",{aliases:["TSType"],visitor:["expression","typeParameters"],fields:{expression:(0,r.validateType)("TSEntityName"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSInterfaceDeclaration",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","extends","body"],fields:{declare:(0,r.validateOptional)(s),id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterDeclaration"),extends:(0,r.validateOptional)((0,r.arrayOfType)("TSExpressionWithTypeArguments")),body:(0,r.validateType)("TSInterfaceBody")}}),a("TSInterfaceBody",{visitor:["body"],fields:{body:(0,r.validateArrayOfType)("TSTypeElement")}}),a("TSTypeAliasDeclaration",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","typeAnnotation"],fields:{declare:(0,r.validateOptional)(s),id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterDeclaration"),typeAnnotation:(0,r.validateType)("TSType")}}),a("TSInstantiationExpression",{aliases:["Expression"],visitor:["expression","typeParameters"],fields:{expression:(0,r.validateType)("Expression"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSAsExpression",{aliases:["Expression","LVal","PatternLike"],visitor:["expression","typeAnnotation"],fields:{expression:(0,r.validateType)("Expression"),typeAnnotation:(0,r.validateType)("TSType")}}),a("TSTypeAssertion",{aliases:["Expression","LVal","PatternLike"],visitor:["typeAnnotation","expression"],fields:{typeAnnotation:(0,r.validateType)("TSType"),expression:(0,r.validateType)("Expression")}}),a("TSEnumDeclaration",{aliases:["Statement","Declaration"],visitor:["id","members"],fields:{declare:(0,r.validateOptional)(s),const:(0,r.validateOptional)(s),id:(0,r.validateType)("Identifier"),members:(0,r.validateArrayOfType)("TSEnumMember"),initializer:(0,r.validateOptionalType)("Expression")}}),a("TSEnumMember",{visitor:["id","initializer"],fields:{id:(0,r.validateType)(["Identifier","StringLiteral"]),initializer:(0,r.validateOptionalType)("Expression")}}),a("TSModuleDeclaration",{aliases:["Statement","Declaration"],visitor:["id","body"],fields:{declare:(0,r.validateOptional)(s),global:(0,r.validateOptional)(s),id:(0,r.validateType)(["Identifier","StringLiteral"]),body:(0,r.validateType)(["TSModuleBlock","TSModuleDeclaration"])}}),a("TSModuleBlock",{aliases:["Scopable","Block","BlockParent"],visitor:["body"],fields:{body:(0,r.validateArrayOfType)("Statement")}}),a("TSImportType",{aliases:["TSType"],visitor:["argument","qualifier","typeParameters"],fields:{argument:(0,r.validateType)("StringLiteral"),qualifier:(0,r.validateOptionalType)("TSEntityName"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSImportEqualsDeclaration",{aliases:["Statement"],visitor:["id","moduleReference"],fields:{isExport:(0,r.validate)(s),id:(0,r.validateType)("Identifier"),moduleReference:(0,r.validateType)(["TSEntityName","TSExternalModuleReference"]),importKind:{validate:(0,r.assertOneOf)("type","value"),optional:!0}}}),a("TSExternalModuleReference",{visitor:["expression"],fields:{expression:(0,r.validateType)("StringLiteral")}}),a("TSNonNullExpression",{aliases:["Expression","LVal","PatternLike"],visitor:["expression"],fields:{expression:(0,r.validateType)("Expression")}}),a("TSExportAssignment",{aliases:["Statement"],visitor:["expression"],fields:{expression:(0,r.validateType)("Expression")}}),a("TSNamespaceExportDeclaration",{aliases:["Statement"],visitor:["id"],fields:{id:(0,r.validateType)("Identifier")}}),a("TSTypeAnnotation",{visitor:["typeAnnotation"],fields:{typeAnnotation:{validate:(0,r.assertNodeType)("TSType")}}}),a("TSTypeParameterInstantiation",{visitor:["params"],fields:{params:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("TSType")))}}}),a("TSTypeParameterDeclaration",{visitor:["params"],fields:{params:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("TSTypeParameter")))}}}),a("TSTypeParameter",{builder:["constraint","default","name"],visitor:["constraint","default"],fields:{name:{validate:(0,r.assertValueType)("string")},in:{validate:(0,r.assertValueType)("boolean"),optional:!0},out:{validate:(0,r.assertValueType)("boolean"),optional:!0},constraint:{validate:(0,r.assertNodeType)("TSType"),optional:!0},default:{validate:(0,r.assertNodeType)("TSType"),optional:!0}}})},47376:function(e,t,n){"use strict";n(21703),n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t.VISITOR_KEYS=t.NODE_PARENT_VALIDATIONS=t.NODE_FIELDS=t.FLIPPED_ALIAS_KEYS=t.DEPRECATED_KEYS=t.BUILDER_KEYS=t.ALIAS_KEYS=void 0,t.arrayOf=b,t.arrayOfType=S,t.assertEach=E,t.assertNodeOrValueType=P,t.assertNodeType=x,t.assertOneOf=h,t.assertOptionalChainStart=w,t.assertShape=O,t.assertValueType=A,t.chain=_,t["default"]=D,t.defineAliasedType=j,t.typeIs=y,t.validate=d,t.validateArrayOfType=g,t.validateOptional=T,t.validateOptionalType=v,t.validateType=m;var r=n(90053),i=n(93885);const o={};t.VISITOR_KEYS=o;const a={};t.ALIAS_KEYS=a;const s={};t.FLIPPED_ALIAS_KEYS=s;const u={};t.NODE_FIELDS=u;const l={};t.BUILDER_KEYS=l;const c={};t.DEPRECATED_KEYS=c;const f={};function p(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function d(e){return{validate:e}}function y(e){return"string"===typeof e?x(e):x(...e)}function m(e){return d(y(e))}function T(e){return{validate:e,optional:!0}}function v(e){return{validate:y(e),optional:!0}}function b(e){return _(A("array"),E(e))}function S(e){return b(y(e))}function g(e){return d(S(e))}function E(e){function t(t,n,r){if(Array.isArray(r))for(let o=0;o<r.length;o++){const a=`${n}[${o}]`,s=r[o];e(t,a,s),{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&(0,i.validateChild)(t,a,s)}}return t.each=e,t}function h(...e){function t(t,n,r){if(e.indexOf(r)<0)throw new TypeError(`Property ${n} expected value to be one of ${JSON.stringify(e)} but got ${JSON.stringify(r)}`)}return t.oneOf=e,t}function x(...e){function t(t,n,o){for(const a of e)if((0,r.default)(a,o))return void(0,i.validateChild)(t,n,o);throw new TypeError(`Property ${n} of ${t.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(null==o?void 0:o.type)}`)}return t.oneOfNodeTypes=e,t}function P(...e){function t(t,n,o){for(const a of e)if(p(o)===a||(0,r.default)(a,o))return void(0,i.validateChild)(t,n,o);throw new TypeError(`Property ${n} of ${t.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(null==o?void 0:o.type)}`)}return t.oneOfNodeOrValueTypes=e,t}function A(e){function t(t,n,r){const i=p(r)===e;if(!i)throw new TypeError(`Property ${n} expected type of ${e} but got ${p(r)}`)}return t.type=e,t}function O(e){function t(t,n,r){const o=[];for(const s of Object.keys(e))try{(0,i.validateField)(t,s,r[s],e[s])}catch(a){if(a instanceof TypeError){o.push(a.message);continue}throw a}if(o.length)throw new TypeError(`Property ${n} of ${t.type} expected to have the following:\n${o.join("\n")}`)}return t.shapeOf=e,t}function w(){function e(e){var t;let n=e;while(e){const{type:e}=n;if("OptionalCallExpression"!==e){if("OptionalMemberExpression"!==e)break;if(n.optional)return;n=n.object}else{if(n.optional)return;n=n.callee}}throw new TypeError(`Non-optional ${e.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${null==(t=n)?void 0:t.type}`)}return e}function _(...e){function t(...t){for(const n of e)n(...t)}if(t.chainOf=e,e.length>=2&&"type"in e[0]&&"array"===e[0].type&&!("each"in e[1]))throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');return t}t.NODE_PARENT_VALIDATIONS=f;const I=["aliases","builder","deprecatedAlias","fields","inherits","visitor","validate"],N=["default","optional","validate"];function j(...e){return(t,n={})=>{let r=n.aliases;var i;r||(n.inherits&&(r=null==(i=L[n.inherits].aliases)?void 0:i.slice()),null!=r||(r=[]),n.aliases=r);const o=e.filter((e=>!r.includes(e)));return r.unshift(...o),D(t,n)}}function D(e,t={}){const n=t.inherits&&L[t.inherits]||{};let r=t.fields;if(!r&&(r={},n.fields)){const e=Object.getOwnPropertyNames(n.fields);for(const t of e){const e=n.fields[t],i=e.default;if(Array.isArray(i)?i.length>0:i&&"object"===typeof i)throw new Error("field defaults can only be primitives or empty arrays currently");r[t]={default:Array.isArray(i)?[]:i,optional:e.optional,validate:e.validate}}}const i=t.visitor||n.visitor||[],d=t.aliases||n.aliases||[],y=t.builder||n.builder||t.visitor||[];for(const o of Object.keys(t))if(-1===I.indexOf(o))throw new Error(`Unknown type option "${o}" on ${e}`);t.deprecatedAlias&&(c[t.deprecatedAlias]=e);for(const o of i.concat(y))r[o]=r[o]||{};for(const o of Object.keys(r)){const t=r[o];void 0!==t.default&&-1===y.indexOf(o)&&(t.optional=!0),void 0===t.default?t.default=null:t.validate||null==t.default||(t.validate=A(p(t.default)));for(const n of Object.keys(t))if(-1===N.indexOf(n))throw new Error(`Unknown field key "${n}" on ${e}.${o}`)}o[e]=t.visitor=i,l[e]=t.builder=y,u[e]=t.fields=r,a[e]=t.aliases=d,d.forEach((t=>{s[t]=s[t]||[],s[t].push(e)})),t.validate&&(f[e]=t.validate),L[e]=t}const L={}},60428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={react:!0,assertNode:!0,createTypeAnnotationBasedOnTypeof:!0,createUnionTypeAnnotation:!0,createFlowUnionType:!0,createTSUnionType:!0,cloneNode:!0,clone:!0,cloneDeep:!0,cloneDeepWithoutLoc:!0,cloneWithoutLoc:!0,addComment:!0,addComments:!0,inheritInnerComments:!0,inheritLeadingComments:!0,inheritsComments:!0,inheritTrailingComments:!0,removeComments:!0,ensureBlock:!0,toBindingIdentifierName:!0,toBlock:!0,toComputedKey:!0,toExpression:!0,toIdentifier:!0,toKeyAlias:!0,toSequenceExpression:!0,toStatement:!0,valueToNode:!0,appendToMemberExpression:!0,inherits:!0,prependToMemberExpression:!0,removeProperties:!0,removePropertiesDeep:!0,removeTypeDuplicates:!0,getBindingIdentifiers:!0,getOuterBindingIdentifiers:!0,traverse:!0,traverseFast:!0,shallowEqual:!0,is:!0,isBinding:!0,isBlockScoped:!0,isImmutable:!0,isLet:!0,isNode:!0,isNodesEquivalent:!0,isPlaceholderType:!0,isReferenced:!0,isScope:!0,isSpecifierDefault:!0,isType:!0,isValidES3Identifier:!0,isValidIdentifier:!0,isVar:!0,matchesPattern:!0,validate:!0,buildMatchMemberExpression:!0};Object.defineProperty(t,"addComment",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"addComments",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"appendToMemberExpression",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"assertNode",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"buildMatchMemberExpression",{enumerable:!0,get:function(){return de.default}}),Object.defineProperty(t,"clone",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"cloneDeep",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(t,"cloneDeepWithoutLoc",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"cloneNode",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"cloneWithoutLoc",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"createFlowUnionType",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"createTSUnionType",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"createTypeAnnotationBasedOnTypeof",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"createUnionTypeAnnotation",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ensureBlock",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"getBindingIdentifiers",{enumerable:!0,get:function(){return X.default}}),Object.defineProperty(t,"getOuterBindingIdentifiers",{enumerable:!0,get:function(){return q.default}}),Object.defineProperty(t,"inheritInnerComments",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(t,"inheritLeadingComments",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"inheritTrailingComments",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"inherits",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(t,"inheritsComments",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"is",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"isBinding",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(t,"isBlockScoped",{enumerable:!0,get:function(){return Q.default}}),Object.defineProperty(t,"isImmutable",{enumerable:!0,get:function(){return Z.default}}),Object.defineProperty(t,"isLet",{enumerable:!0,get:function(){return ee.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return te.default}}),Object.defineProperty(t,"isNodesEquivalent",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(t,"isPlaceholderType",{enumerable:!0,get:function(){return re.default}}),Object.defineProperty(t,"isReferenced",{enumerable:!0,get:function(){return ie.default}}),Object.defineProperty(t,"isScope",{enumerable:!0,get:function(){return oe.default}}),Object.defineProperty(t,"isSpecifierDefault",{enumerable:!0,get:function(){return ae.default}}),Object.defineProperty(t,"isType",{enumerable:!0,get:function(){return se.default}}),Object.defineProperty(t,"isValidES3Identifier",{enumerable:!0,get:function(){return ue.default}}),Object.defineProperty(t,"isValidIdentifier",{enumerable:!0,get:function(){return le.default}}),Object.defineProperty(t,"isVar",{enumerable:!0,get:function(){return ce.default}}),Object.defineProperty(t,"matchesPattern",{enumerable:!0,get:function(){return fe.default}}),Object.defineProperty(t,"prependToMemberExpression",{enumerable:!0,get:function(){return K.default}}),t.react=void 0,Object.defineProperty(t,"removeComments",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"removeProperties",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(t,"removePropertiesDeep",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(t,"removeTypeDuplicates",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(t,"shallowEqual",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"toBindingIdentifierName",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(t,"toBlock",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(t,"toComputedKey",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"toExpression",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(t,"toIdentifier",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(t,"toKeyAlias",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"toSequenceExpression",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"toStatement",{enumerable:!0,get:function(){return B.default}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(t,"traverseFast",{enumerable:!0,get:function(){return G.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return pe.default}}),Object.defineProperty(t,"valueToNode",{enumerable:!0,get:function(){return R.default}});var i=n(95453),o=n(12849),a=n(87305),s=n(87450),u=n(75318);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var l=n(3270),c=n(43576),f=n(31096),p=n(18771);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var d=n(22792);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}));var y=n(36774),m=n(35440),T=n(74042),v=n(58741),b=n(86801),S=n(34664),g=n(83600),E=n(4225),h=n(72761),x=n(58268),P=n(44927),A=n(41142),O=n(15787);Object.keys(O).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===O[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return O[e]}}))}));var w=n(16591);Object.keys(w).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===w[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return w[e]}}))}));var _=n(33623),I=n(13026),N=n(1829),j=n(80019),D=n(3447),L=n(89374),C=n(914),M=n(89023),B=n(28626),R=n(36161),F=n(92321);Object.keys(F).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===F[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return F[e]}}))}));var k=n(55613),V=n(32083),K=n(99042),Y=n(7641),U=n(22183),J=n(32802),X=n(97980),q=n(53540),W=n(28894);Object.keys(W).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===W[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return W[e]}}))}));var G=n(98488),$=n(45113),z=n(90053),H=n(32957),Q=n(23980),Z=n(28476),ee=n(72552),te=n(86663),ne=n(51752),re=n(51015),ie=n(93504),oe=n(63948),ae=n(74956),se=n(11920),ue=n(87584),le=n(3994),ce=n(92027),fe=n(7639),pe=n(93885),de=n(82570),ye=n(42748);Object.keys(ye).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===ye[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return ye[e]}}))}));var me=n(99606);Object.keys(me).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===me[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return me[e]}}))}));const Te={isReactComponent:i.default,isCompatTag:o.default,buildChildren:a.default};t.react=Te},55613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(18771);function i(e,t,n=!1){return e.object=(0,r.memberExpression)(e.object,e.property,e.computed),e.property=t,e.computed=!!n,e}},32802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748);function i(e){return(0,r.isIdentifier)(e)?e.name:`${e.id.name}.${i(e.qualification)}`}function o(e){const t={},n={},a=new Set,s=[];for(let u=0;u<e.length;u++){const l=e[u];if(l&&!(s.indexOf(l)>=0)){if((0,r.isAnyTypeAnnotation)(l))return[l];if((0,r.isFlowBaseAnnotation)(l))n[l.type]=l;else if((0,r.isUnionTypeAnnotation)(l))a.has(l.types)||(e=e.concat(l.types),a.add(l.types));else if((0,r.isGenericTypeAnnotation)(l)){const e=i(l.id);if(t[e]){let n=t[e];n.typeParameters?l.typeParameters&&(n.typeParameters.params=o(n.typeParameters.params.concat(l.typeParameters.params))):n=l.typeParameters}else t[e]=l}else s.push(l)}}for(const r of Object.keys(n))s.push(n[r]);for(const r of Object.keys(t))s.push(t[r]);return s}},32083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(16591),i=n(58268);function o(e,t){if(!e||!t)return e;for(const n of r.INHERIT_KEYS.optional)null==e[n]&&(e[n]=t[n]);for(const n of Object.keys(t))"_"===n[0]&&"__clone"!==n&&(e[n]=t[n]);for(const n of r.INHERIT_KEYS.force)e[n]=t[n];return(0,i.default)(e,t),e}},99042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(18771);function i(e,t){return e.object=(0,r.memberExpression)(t,e.object),e}},7641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(16591);const i=["tokens","start","end","loc","raw","rawValue"],o=r.COMMENT_KEYS.concat(["comments"]).concat(i);function a(e,t={}){const n=t.preserveComments?i:o;for(const i of n)null!=e[i]&&(e[i]=void 0);for(const i of Object.keys(e))"_"===i[0]&&null!=e[i]&&(e[i]=void 0);const r=Object.getOwnPropertySymbols(e);for(const i of r)e[i]=null}},22183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(98488),i=n(7641);function o(e,t){return(0,r.default)(e,i.default,t),e}},7419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e){const t={},n={},i=new Set,o=[];for(let a=0;a<e.length;a++){const t=e[a];if(t&&!(o.indexOf(t)>=0)){if((0,r.isTSAnyKeyword)(t))return[t];(0,r.isTSBaseType)(t)?n[t.type]=t:(0,r.isTSUnionType)(t)?i.has(t.types)||(e.push(...t.types),i.add(t.types)):o.push(t)}}for(const r of Object.keys(n))o.push(n[r]);for(const r of Object.keys(t))o.push(t[r]);return o}},97980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e,t,n){let o=[].concat(e);const a=Object.create(null);while(o.length){const e=o.shift();if(!e)continue;const s=i.keys[e.type];if((0,r.isIdentifier)(e))if(t){const t=a[e.name]=a[e.name]||[];t.push(e)}else a[e.name]=e;else if(!(0,r.isExportDeclaration)(e)||(0,r.isExportAllDeclaration)(e)){if(n){if((0,r.isFunctionDeclaration)(e)){o.push(e.id);continue}if((0,r.isFunctionExpression)(e))continue}if(s)for(let t=0;t<s.length;t++){const n=s[t];e[n]&&(o=o.concat(e[n]))}}else(0,r.isDeclaration)(e.declaration)&&o.push(e.declaration)}return a}i.keys={DeclareClass:["id"],DeclareFunction:["id"],DeclareModule:["id"],DeclareVariable:["id"],DeclareInterface:["id"],DeclareTypeAlias:["id"],DeclareOpaqueType:["id"],InterfaceDeclaration:["id"],TypeAlias:["id"],OpaqueType:["id"],CatchClause:["param"],LabeledStatement:["label"],UnaryExpression:["argument"],AssignmentExpression:["left"],ImportSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportDefaultSpecifier:["local"],ImportDeclaration:["specifiers"],ExportSpecifier:["exported"],ExportNamespaceSpecifier:["exported"],ExportDefaultSpecifier:["exported"],FunctionDeclaration:["id","params"],FunctionExpression:["id","params"],ArrowFunctionExpression:["params"],ObjectMethod:["params"],ClassMethod:["params"],ClassPrivateMethod:["params"],ForInStatement:["left"],ForOfStatement:["left"],ClassDeclaration:["id"],ClassExpression:["id"],RestElement:["argument"],UpdateExpression:["argument"],ObjectProperty:["value"],AssignmentPattern:["left"],ArrayPattern:["elements"],ObjectPattern:["properties"],VariableDeclaration:["declarations"],VariableDeclarator:["id"]}},53540:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(97980),i=o;function o(e,t){return(0,r.default)(e,t,!0)}t["default"]=i},28894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t,n){"function"===typeof t&&(t={enter:t});const{enter:r,exit:i}=t;o(e,r,i,n,[])}function o(e,t,n,i,a){const s=r.VISITOR_KEYS[e.type];if(s){t&&t(e,a,i);for(const r of s){const s=e[r];if(Array.isArray(s))for(let u=0;u<s.length;u++){const l=s[u];l&&(a.push({node:e,key:r,index:u}),o(l,t,n,i,a),a.pop())}else s&&(a.push({node:e,key:r}),o(s,t,n,i,a),a.pop())}n&&n(e,a,i)}}},98488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t,n){if(!e)return;const o=r.VISITOR_KEYS[e.type];if(o){n=n||{},t(e,n);for(const r of o){const o=e[r];if(Array.isArray(o))for(const e of o)i(e,t,n);else i(o,t,n)}}}},33777:function(e,t){"use strict";function n(e,t,n){t&&n&&(t[e]=Array.from(new Set([].concat(t[e],n[e]).filter(Boolean))))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},98212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(18771);function i(e,t){const n=e.value.split(/\r\n|\n|\r/);let i=0;for(let r=0;r<n.length;r++)n[r].match(/[^ \t]/)&&(i=r);let o="";for(let r=0;r<n.length;r++){const e=n[r],t=0===r,a=r===n.length-1,s=r===i;let u=e.replace(/\t/g," ");t||(u=u.replace(/^[ ]+/,"")),a||(u=u.replace(/[ ]+$/,"")),u&&(s||(u+=" "),o+=u)}o&&t.push((0,r.stringLiteral)(o))}},45113:function(e,t){"use strict";function n(e,t){const n=Object.keys(t);for(const r of n)if(e[r]!==t[r])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},82570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(7639);function i(e,t){const n=e.split(".");return e=>(0,r.default)(e,n,t)}},42748:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAccessor=vi,t.isAnyTypeAnnotation=Re,t.isArgumentPlaceholder=dn,t.isArrayExpression=i,t.isArrayPattern=ne,t.isArrayTypeAnnotation=Fe,t.isArrowFunctionExpression=re,t.isAssignmentExpression=o,t.isAssignmentPattern=te,t.isAwaitExpression=Ae,t.isBigIntLiteral=we,t.isBinary=kr,t.isBinaryExpression=a,t.isBindExpression=yn,t.isBlock=Yr,t.isBlockParent=Kr,t.isBlockStatement=c,t.isBooleanLiteral=j,t.isBooleanLiteralTypeAnnotation=Ve,t.isBooleanTypeAnnotation=ke,t.isBreakStatement=f,t.isCallExpression=p,t.isCatchClause=d,t.isClass=di,t.isClassAccessorProperty=De,t.isClassBody=ie,t.isClassDeclaration=ae,t.isClassExpression=oe,t.isClassImplements=Ye,t.isClassMethod=ve,t.isClassPrivateMethod=Ce,t.isClassPrivateProperty=Le,t.isClassProperty=je,t.isCompletionStatement=Xr,t.isConditional=qr,t.isConditionalExpression=y,t.isContinueStatement=m,t.isDebuggerStatement=T,t.isDecimalLiteral=En,t.isDeclaration=ti,t.isDeclareClass=Ue,t.isDeclareExportAllDeclaration=Qe,t.isDeclareExportDeclaration=He,t.isDeclareFunction=Je,t.isDeclareInterface=Xe,t.isDeclareModule=qe,t.isDeclareModuleExports=We,t.isDeclareOpaqueType=$e,t.isDeclareTypeAlias=Ge,t.isDeclareVariable=ze,t.isDeclaredPredicate=Ze,t.isDecorator=Tn,t.isDirective=u,t.isDirectiveLiteral=l,t.isDoExpression=vn,t.isDoWhileStatement=v,t.isEmptyStatement=b,t.isEmptyTypeAnnotation=ct,t.isEnumBody=Pi,t.isEnumBooleanBody=Ft,t.isEnumBooleanMember=Yt,t.isEnumDeclaration=Rt,t.isEnumDefaultedMember=Xt,t.isEnumMember=Ai,t.isEnumNumberBody=kt,t.isEnumNumberMember=Ut,t.isEnumStringBody=Vt,t.isEnumStringMember=Jt,t.isEnumSymbolBody=Kt,t.isExistsTypeAnnotation=et,t.isExportAllDeclaration=se,t.isExportDeclaration=mi,t.isExportDefaultDeclaration=ue,t.isExportDefaultSpecifier=bn,t.isExportNamedDeclaration=le,t.isExportNamespaceSpecifier=_e,t.isExportSpecifier=ce,t.isExpression=Fr,t.isExpressionStatement=S,t.isExpressionWrapper=$r,t.isFile=g,t.isFlow=Si,t.isFlowBaseAnnotation=Ei,t.isFlowDeclaration=hi,t.isFlowPredicate=xi,t.isFlowType=gi,t.isFor=zr,t.isForInStatement=E,t.isForOfStatement=fe,t.isForStatement=h,t.isForXStatement=Hr,t.isFunction=Qr,t.isFunctionDeclaration=x,t.isFunctionExpression=P,t.isFunctionParent=Zr,t.isFunctionTypeAnnotation=tt,t.isFunctionTypeParam=nt,t.isGenericTypeAnnotation=rt,t.isIdentifier=A,t.isIfStatement=O,t.isImmutable=ai,t.isImport=Oe,t.isImportAttribute=mn,t.isImportDeclaration=pe,t.isImportDefaultSpecifier=de,t.isImportNamespaceSpecifier=ye,t.isImportSpecifier=me,t.isIndexedAccessType=qt,t.isInferredPredicate=it,t.isInterfaceDeclaration=at,t.isInterfaceExtends=ot,t.isInterfaceTypeAnnotation=st,t.isInterpreterDirective=s,t.isIntersectionTypeAnnotation=ut,t.isJSX=Oi,t.isJSXAttribute=Gt,t.isJSXClosingElement=$t,t.isJSXClosingFragment=ln,t.isJSXElement=zt,t.isJSXEmptyExpression=Ht,t.isJSXExpressionContainer=Qt,t.isJSXFragment=sn,t.isJSXIdentifier=en,t.isJSXMemberExpression=tn,t.isJSXNamespacedName=nn,t.isJSXOpeningElement=rn,t.isJSXOpeningFragment=un,t.isJSXSpreadAttribute=on,t.isJSXSpreadChild=Zt,t.isJSXText=an,t.isLVal=ri,t.isLabeledStatement=w,t.isLiteral=oi,t.isLogicalExpression=L,t.isLoop=Wr,t.isMemberExpression=C,t.isMetaProperty=Te,t.isMethod=ui,t.isMiscellaneous=wi,t.isMixedTypeAnnotation=lt,t.isModuleDeclaration=yi,t.isModuleExpression=hn,t.isModuleSpecifier=Ti,t.isNewExpression=M,t.isNoop=cn,t.isNullLiteral=N,t.isNullLiteralTypeAnnotation=Ke,t.isNullableTypeAnnotation=ft,t.isNumberLiteral=Di,t.isNumberLiteralTypeAnnotation=pt,t.isNumberTypeAnnotation=dt,t.isNumericLiteral=I,t.isObjectExpression=R,t.isObjectMember=li,t.isObjectMethod=F,t.isObjectPattern=be,t.isObjectProperty=k,t.isObjectTypeAnnotation=yt,t.isObjectTypeCallProperty=Tt,t.isObjectTypeIndexer=vt,t.isObjectTypeInternalSlot=mt,t.isObjectTypeProperty=bt,t.isObjectTypeSpreadProperty=St,t.isOpaqueType=gt,t.isOptionalCallExpression=Ne,t.isOptionalIndexedAccessType=Wt,t.isOptionalMemberExpression=Ie,t.isParenthesizedExpression=U,t.isPattern=pi,t.isPatternLike=ni,t.isPipelineBareFunction=An,t.isPipelinePrimaryTopicReference=On,t.isPipelineTopicExpression=Pn,t.isPlaceholder=fn,t.isPrivate=bi,t.isPrivateName=Me,t.isProgram=B,t.isProperty=ci,t.isPureish=ei,t.isQualifiedTypeIdentifier=Et,t.isRecordExpression=Sn,t.isRegExpLiteral=D,t.isRegexLiteral=Li,t.isRestElement=V,t.isRestProperty=Ci,t.isReturnStatement=K,t.isScopable=Vr,t.isSequenceExpression=Y,t.isSpreadElement=Se,t.isSpreadProperty=Mi,t.isStandardized=Rr,t.isStatement=Ur,t.isStaticBlock=Be,t.isStringLiteral=_,t.isStringLiteralTypeAnnotation=ht,t.isStringTypeAnnotation=xt,t.isSuper=ge,t.isSwitchCase=J,t.isSwitchStatement=X,t.isSymbolTypeAnnotation=Pt,t.isTSAnyKeyword=Bn,t.isTSArrayType=nr,t.isTSAsExpression=Er,t.isTSBaseType=ji,t.isTSBigIntKeyword=Fn,t.isTSBooleanKeyword=Rn,t.isTSCallSignatureDeclaration=jn,t.isTSConditionalType=lr,t.isTSConstructSignatureDeclaration=Dn,t.isTSConstructorType=Hn,t.isTSDeclareFunction=_n,t.isTSDeclareMethod=In,t.isTSEntityName=ii,t.isTSEnumDeclaration=xr,t.isTSEnumMember=Pr,t.isTSExportAssignment=jr,t.isTSExpressionWithTypeArguments=Tr,t.isTSExternalModuleReference=Ir,t.isTSFunctionType=zn,t.isTSImportEqualsDeclaration=_r,t.isTSImportType=wr,t.isTSIndexSignature=Mn,t.isTSIndexedAccessType=dr,t.isTSInferType=cr,t.isTSInstantiationExpression=gr,t.isTSInterfaceBody=br,t.isTSInterfaceDeclaration=vr,t.isTSIntersectionType=ur,t.isTSIntrinsicKeyword=kn,t.isTSLiteralType=mr,t.isTSMappedType=yr,t.isTSMethodSignature=Cn,t.isTSModuleBlock=Or,t.isTSModuleDeclaration=Ar,t.isTSNamedTupleMember=ar,t.isTSNamespaceExportDeclaration=Dr,t.isTSNeverKeyword=Vn,t.isTSNonNullExpression=Nr,t.isTSNullKeyword=Kn,t.isTSNumberKeyword=Yn,t.isTSObjectKeyword=Un,t.isTSOptionalType=ir,t.isTSParameterProperty=wn,t.isTSParenthesizedType=fr,t.isTSPropertySignature=Ln,t.isTSQualifiedName=Nn,t.isTSRestType=or,t.isTSStringKeyword=Jn,t.isTSSymbolKeyword=Xn,t.isTSThisType=$n,t.isTSTupleType=rr,t.isTSType=Ni,t.isTSTypeAliasDeclaration=Sr,t.isTSTypeAnnotation=Lr,t.isTSTypeAssertion=hr,t.isTSTypeElement=Ii,t.isTSTypeLiteral=tr,t.isTSTypeOperator=pr,t.isTSTypeParameter=Br,t.isTSTypeParameterDeclaration=Mr,t.isTSTypeParameterInstantiation=Cr,t.isTSTypePredicate=Zn,t.isTSTypeQuery=er,t.isTSTypeReference=Qn,t.isTSUndefinedKeyword=qn,t.isTSUnionType=sr,t.isTSUnknownKeyword=Wn,t.isTSVoidKeyword=Gn,t.isTaggedTemplateExpression=Ee,t.isTemplateElement=he,t.isTemplateLiteral=xe,t.isTerminatorless=Jr,t.isThisExpression=q,t.isThisTypeAnnotation=At,t.isThrowStatement=W,t.isTopicReference=xn,t.isTryStatement=G,t.isTupleExpression=gn,t.isTupleTypeAnnotation=Ot,t.isTypeAlias=_t,t.isTypeAnnotation=It,t.isTypeCastExpression=Nt,t.isTypeParameter=jt,t.isTypeParameterDeclaration=Dt,t.isTypeParameterInstantiation=Lt,t.isTypeScript=_i,t.isTypeofTypeAnnotation=wt,t.isUnaryExpression=$,t.isUnaryLike=fi,t.isUnionTypeAnnotation=Ct,t.isUpdateExpression=z,t.isUserWhitespacable=si,t.isV8IntrinsicIdentifier=pn,t.isVariableDeclaration=H,t.isVariableDeclarator=Q,t.isVariance=Mt,t.isVoidTypeAnnotation=Bt,t.isWhile=Gr,t.isWhileStatement=Z,t.isWithStatement=ee,t.isYieldExpression=Pe;var r=n(45113);function i(e,t){if(!e)return!1;const n=e.type;return"ArrayExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function o(e,t){if(!e)return!1;const n=e.type;return"AssignmentExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function a(e,t){if(!e)return!1;const n=e.type;return"BinaryExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function s(e,t){if(!e)return!1;const n=e.type;return"InterpreterDirective"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function u(e,t){if(!e)return!1;const n=e.type;return"Directive"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function l(e,t){if(!e)return!1;const n=e.type;return"DirectiveLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function c(e,t){if(!e)return!1;const n=e.type;return"BlockStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function f(e,t){if(!e)return!1;const n=e.type;return"BreakStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function p(e,t){if(!e)return!1;const n=e.type;return"CallExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function d(e,t){if(!e)return!1;const n=e.type;return"CatchClause"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function y(e,t){if(!e)return!1;const n=e.type;return"ConditionalExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function m(e,t){if(!e)return!1;const n=e.type;return"ContinueStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function T(e,t){if(!e)return!1;const n=e.type;return"DebuggerStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function v(e,t){if(!e)return!1;const n=e.type;return"DoWhileStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function b(e,t){if(!e)return!1;const n=e.type;return"EmptyStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function S(e,t){if(!e)return!1;const n=e.type;return"ExpressionStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function g(e,t){if(!e)return!1;const n=e.type;return"File"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function E(e,t){if(!e)return!1;const n=e.type;return"ForInStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function h(e,t){if(!e)return!1;const n=e.type;return"ForStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function x(e,t){if(!e)return!1;const n=e.type;return"FunctionDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function P(e,t){if(!e)return!1;const n=e.type;return"FunctionExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function A(e,t){if(!e)return!1;const n=e.type;return"Identifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function O(e,t){if(!e)return!1;const n=e.type;return"IfStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function w(e,t){if(!e)return!1;const n=e.type;return"LabeledStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _(e,t){if(!e)return!1;const n=e.type;return"StringLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function I(e,t){if(!e)return!1;const n=e.type;return"NumericLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function N(e,t){if(!e)return!1;const n=e.type;return"NullLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function j(e,t){if(!e)return!1;const n=e.type;return"BooleanLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function D(e,t){if(!e)return!1;const n=e.type;return"RegExpLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function L(e,t){if(!e)return!1;const n=e.type;return"LogicalExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function C(e,t){if(!e)return!1;const n=e.type;return"MemberExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function M(e,t){if(!e)return!1;const n=e.type;return"NewExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function B(e,t){if(!e)return!1;const n=e.type;return"Program"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function R(e,t){if(!e)return!1;const n=e.type;return"ObjectExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function F(e,t){if(!e)return!1;const n=e.type;return"ObjectMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function k(e,t){if(!e)return!1;const n=e.type;return"ObjectProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function V(e,t){if(!e)return!1;const n=e.type;return"RestElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function K(e,t){if(!e)return!1;const n=e.type;return"ReturnStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Y(e,t){if(!e)return!1;const n=e.type;return"SequenceExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function U(e,t){if(!e)return!1;const n=e.type;return"ParenthesizedExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function J(e,t){if(!e)return!1;const n=e.type;return"SwitchCase"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function X(e,t){if(!e)return!1;const n=e.type;return"SwitchStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function q(e,t){if(!e)return!1;const n=e.type;return"ThisExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function W(e,t){if(!e)return!1;const n=e.type;return"ThrowStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function G(e,t){if(!e)return!1;const n=e.type;return"TryStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $(e,t){if(!e)return!1;const n=e.type;return"UnaryExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function z(e,t){if(!e)return!1;const n=e.type;return"UpdateExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function H(e,t){if(!e)return!1;const n=e.type;return"VariableDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Q(e,t){if(!e)return!1;const n=e.type;return"VariableDeclarator"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Z(e,t){if(!e)return!1;const n=e.type;return"WhileStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ee(e,t){if(!e)return!1;const n=e.type;return"WithStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function te(e,t){if(!e)return!1;const n=e.type;return"AssignmentPattern"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ne(e,t){if(!e)return!1;const n=e.type;return"ArrayPattern"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function re(e,t){if(!e)return!1;const n=e.type;return"ArrowFunctionExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ie(e,t){if(!e)return!1;const n=e.type;return"ClassBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function oe(e,t){if(!e)return!1;const n=e.type;return"ClassExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ae(e,t){if(!e)return!1;const n=e.type;return"ClassDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function se(e,t){if(!e)return!1;const n=e.type;return"ExportAllDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ue(e,t){if(!e)return!1;const n=e.type;return"ExportDefaultDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function le(e,t){if(!e)return!1;const n=e.type;return"ExportNamedDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ce(e,t){if(!e)return!1;const n=e.type;return"ExportSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function fe(e,t){if(!e)return!1;const n=e.type;return"ForOfStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pe(e,t){if(!e)return!1;const n=e.type;return"ImportDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function de(e,t){if(!e)return!1;const n=e.type;return"ImportDefaultSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ye(e,t){if(!e)return!1;const n=e.type;return"ImportNamespaceSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function me(e,t){if(!e)return!1;const n=e.type;return"ImportSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Te(e,t){if(!e)return!1;const n=e.type;return"MetaProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ve(e,t){if(!e)return!1;const n=e.type;return"ClassMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function be(e,t){if(!e)return!1;const n=e.type;return"ObjectPattern"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Se(e,t){if(!e)return!1;const n=e.type;return"SpreadElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ge(e,t){if(!e)return!1;const n=e.type;return"Super"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ee(e,t){if(!e)return!1;const n=e.type;return"TaggedTemplateExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function he(e,t){if(!e)return!1;const n=e.type;return"TemplateElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xe(e,t){if(!e)return!1;const n=e.type;return"TemplateLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pe(e,t){if(!e)return!1;const n=e.type;return"YieldExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ae(e,t){if(!e)return!1;const n=e.type;return"AwaitExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Oe(e,t){if(!e)return!1;const n=e.type;return"Import"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function we(e,t){if(!e)return!1;const n=e.type;return"BigIntLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _e(e,t){if(!e)return!1;const n=e.type;return"ExportNamespaceSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ie(e,t){if(!e)return!1;const n=e.type;return"OptionalMemberExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ne(e,t){if(!e)return!1;const n=e.type;return"OptionalCallExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function je(e,t){if(!e)return!1;const n=e.type;return"ClassProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function De(e,t){if(!e)return!1;const n=e.type;return"ClassAccessorProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Le(e,t){if(!e)return!1;const n=e.type;return"ClassPrivateProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ce(e,t){if(!e)return!1;const n=e.type;return"ClassPrivateMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Me(e,t){if(!e)return!1;const n=e.type;return"PrivateName"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Be(e,t){if(!e)return!1;const n=e.type;return"StaticBlock"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Re(e,t){if(!e)return!1;const n=e.type;return"AnyTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Fe(e,t){if(!e)return!1;const n=e.type;return"ArrayTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ke(e,t){if(!e)return!1;const n=e.type;return"BooleanTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ve(e,t){if(!e)return!1;const n=e.type;return"BooleanLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ke(e,t){if(!e)return!1;const n=e.type;return"NullLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ye(e,t){if(!e)return!1;const n=e.type;return"ClassImplements"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ue(e,t){if(!e)return!1;const n=e.type;return"DeclareClass"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Je(e,t){if(!e)return!1;const n=e.type;return"DeclareFunction"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Xe(e,t){if(!e)return!1;const n=e.type;return"DeclareInterface"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function qe(e,t){if(!e)return!1;const n=e.type;return"DeclareModule"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function We(e,t){if(!e)return!1;const n=e.type;return"DeclareModuleExports"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ge(e,t){if(!e)return!1;const n=e.type;return"DeclareTypeAlias"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $e(e,t){if(!e)return!1;const n=e.type;return"DeclareOpaqueType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ze(e,t){if(!e)return!1;const n=e.type;return"DeclareVariable"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function He(e,t){if(!e)return!1;const n=e.type;return"DeclareExportDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Qe(e,t){if(!e)return!1;const n=e.type;return"DeclareExportAllDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ze(e,t){if(!e)return!1;const n=e.type;return"DeclaredPredicate"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function et(e,t){if(!e)return!1;const n=e.type;return"ExistsTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function tt(e,t){if(!e)return!1;const n=e.type;return"FunctionTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function nt(e,t){if(!e)return!1;const n=e.type;return"FunctionTypeParam"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function rt(e,t){if(!e)return!1;const n=e.type;return"GenericTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function it(e,t){if(!e)return!1;const n=e.type;return"InferredPredicate"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ot(e,t){if(!e)return!1;const n=e.type;return"InterfaceExtends"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function at(e,t){if(!e)return!1;const n=e.type;return"InterfaceDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function st(e,t){if(!e)return!1;const n=e.type;return"InterfaceTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ut(e,t){if(!e)return!1;const n=e.type;return"IntersectionTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function lt(e,t){if(!e)return!1;const n=e.type;return"MixedTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ct(e,t){if(!e)return!1;const n=e.type;return"EmptyTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ft(e,t){if(!e)return!1;const n=e.type;return"NullableTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pt(e,t){if(!e)return!1;const n=e.type;return"NumberLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function dt(e,t){if(!e)return!1;const n=e.type;return"NumberTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function yt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function mt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeInternalSlot"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Tt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeCallProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function vt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeIndexer"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function bt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function St(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeSpreadProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gt(e,t){if(!e)return!1;const n=e.type;return"OpaqueType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Et(e,t){if(!e)return!1;const n=e.type;return"QualifiedTypeIdentifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ht(e,t){if(!e)return!1;const n=e.type;return"StringLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xt(e,t){if(!e)return!1;const n=e.type;return"StringTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pt(e,t){if(!e)return!1;const n=e.type;return"SymbolTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function At(e,t){if(!e)return!1;const n=e.type;return"ThisTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ot(e,t){if(!e)return!1;const n=e.type;return"TupleTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function wt(e,t){if(!e)return!1;const n=e.type;return"TypeofTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _t(e,t){if(!e)return!1;const n=e.type;return"TypeAlias"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function It(e,t){if(!e)return!1;const n=e.type;return"TypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Nt(e,t){if(!e)return!1;const n=e.type;return"TypeCastExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function jt(e,t){if(!e)return!1;const n=e.type;return"TypeParameter"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Dt(e,t){if(!e)return!1;const n=e.type;return"TypeParameterDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Lt(e,t){if(!e)return!1;const n=e.type;return"TypeParameterInstantiation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ct(e,t){if(!e)return!1;const n=e.type;return"UnionTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mt(e,t){if(!e)return!1;const n=e.type;return"Variance"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Bt(e,t){if(!e)return!1;const n=e.type;return"VoidTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Rt(e,t){if(!e)return!1;const n=e.type;return"EnumDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ft(e,t){if(!e)return!1;const n=e.type;return"EnumBooleanBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function kt(e,t){if(!e)return!1;const n=e.type;return"EnumNumberBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Vt(e,t){if(!e)return!1;const n=e.type;return"EnumStringBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Kt(e,t){if(!e)return!1;const n=e.type;return"EnumSymbolBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Yt(e,t){if(!e)return!1;const n=e.type;return"EnumBooleanMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ut(e,t){if(!e)return!1;const n=e.type;return"EnumNumberMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Jt(e,t){if(!e)return!1;const n=e.type;return"EnumStringMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Xt(e,t){if(!e)return!1;const n=e.type;return"EnumDefaultedMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function qt(e,t){if(!e)return!1;const n=e.type;return"IndexedAccessType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Wt(e,t){if(!e)return!1;const n=e.type;return"OptionalIndexedAccessType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Gt(e,t){if(!e)return!1;const n=e.type;return"JSXAttribute"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $t(e,t){if(!e)return!1;const n=e.type;return"JSXClosingElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function zt(e,t){if(!e)return!1;const n=e.type;return"JSXElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ht(e,t){if(!e)return!1;const n=e.type;return"JSXEmptyExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Qt(e,t){if(!e)return!1;const n=e.type;return"JSXExpressionContainer"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Zt(e,t){if(!e)return!1;const n=e.type;return"JSXSpreadChild"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function en(e,t){if(!e)return!1;const n=e.type;return"JSXIdentifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function tn(e,t){if(!e)return!1;const n=e.type;return"JSXMemberExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function nn(e,t){if(!e)return!1;const n=e.type;return"JSXNamespacedName"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function rn(e,t){if(!e)return!1;const n=e.type;return"JSXOpeningElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function on(e,t){if(!e)return!1;const n=e.type;return"JSXSpreadAttribute"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function an(e,t){if(!e)return!1;const n=e.type;return"JSXText"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function sn(e,t){if(!e)return!1;const n=e.type;return"JSXFragment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function un(e,t){if(!e)return!1;const n=e.type;return"JSXOpeningFragment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ln(e,t){if(!e)return!1;const n=e.type;return"JSXClosingFragment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function cn(e,t){if(!e)return!1;const n=e.type;return"Noop"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function fn(e,t){if(!e)return!1;const n=e.type;return"Placeholder"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pn(e,t){if(!e)return!1;const n=e.type;return"V8IntrinsicIdentifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function dn(e,t){if(!e)return!1;const n=e.type;return"ArgumentPlaceholder"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function yn(e,t){if(!e)return!1;const n=e.type;return"BindExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function mn(e,t){if(!e)return!1;const n=e.type;return"ImportAttribute"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Tn(e,t){if(!e)return!1;const n=e.type;return"Decorator"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function vn(e,t){if(!e)return!1;const n=e.type;return"DoExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function bn(e,t){if(!e)return!1;const n=e.type;return"ExportDefaultSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Sn(e,t){if(!e)return!1;const n=e.type;return"RecordExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gn(e,t){if(!e)return!1;const n=e.type;return"TupleExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function En(e,t){if(!e)return!1;const n=e.type;return"DecimalLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function hn(e,t){if(!e)return!1;const n=e.type;return"ModuleExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xn(e,t){if(!e)return!1;const n=e.type;return"TopicReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pn(e,t){if(!e)return!1;const n=e.type;return"PipelineTopicExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function An(e,t){if(!e)return!1;const n=e.type;return"PipelineBareFunction"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function On(e,t){if(!e)return!1;const n=e.type;return"PipelinePrimaryTopicReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function wn(e,t){if(!e)return!1;const n=e.type;return"TSParameterProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _n(e,t){if(!e)return!1;const n=e.type;return"TSDeclareFunction"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function In(e,t){if(!e)return!1;const n=e.type;return"TSDeclareMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Nn(e,t){if(!e)return!1;const n=e.type;return"TSQualifiedName"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function jn(e,t){if(!e)return!1;const n=e.type;return"TSCallSignatureDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Dn(e,t){if(!e)return!1;const n=e.type;return"TSConstructSignatureDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ln(e,t){if(!e)return!1;const n=e.type;return"TSPropertySignature"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Cn(e,t){if(!e)return!1;const n=e.type;return"TSMethodSignature"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mn(e,t){if(!e)return!1;const n=e.type;return"TSIndexSignature"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Bn(e,t){if(!e)return!1;const n=e.type;return"TSAnyKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Rn(e,t){if(!e)return!1;const n=e.type;return"TSBooleanKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Fn(e,t){if(!e)return!1;const n=e.type;return"TSBigIntKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function kn(e,t){if(!e)return!1;const n=e.type;return"TSIntrinsicKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Vn(e,t){if(!e)return!1;const n=e.type;return"TSNeverKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Kn(e,t){if(!e)return!1;const n=e.type;return"TSNullKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Yn(e,t){if(!e)return!1;const n=e.type;return"TSNumberKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Un(e,t){if(!e)return!1;const n=e.type;return"TSObjectKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Jn(e,t){if(!e)return!1;const n=e.type;return"TSStringKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Xn(e,t){if(!e)return!1;const n=e.type;return"TSSymbolKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function qn(e,t){if(!e)return!1;const n=e.type;return"TSUndefinedKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Wn(e,t){if(!e)return!1;const n=e.type;return"TSUnknownKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Gn(e,t){if(!e)return!1;const n=e.type;return"TSVoidKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $n(e,t){if(!e)return!1;const n=e.type;return"TSThisType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function zn(e,t){if(!e)return!1;const n=e.type;return"TSFunctionType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Hn(e,t){if(!e)return!1;const n=e.type;return"TSConstructorType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Qn(e,t){if(!e)return!1;const n=e.type;return"TSTypeReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Zn(e,t){if(!e)return!1;const n=e.type;return"TSTypePredicate"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function er(e,t){if(!e)return!1;const n=e.type;return"TSTypeQuery"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function tr(e,t){if(!e)return!1;const n=e.type;return"TSTypeLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function nr(e,t){if(!e)return!1;const n=e.type;return"TSArrayType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function rr(e,t){if(!e)return!1;const n=e.type;return"TSTupleType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ir(e,t){if(!e)return!1;const n=e.type;return"TSOptionalType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function or(e,t){if(!e)return!1;const n=e.type;return"TSRestType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ar(e,t){if(!e)return!1;const n=e.type;return"TSNamedTupleMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function sr(e,t){if(!e)return!1;const n=e.type;return"TSUnionType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ur(e,t){if(!e)return!1;const n=e.type;return"TSIntersectionType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function lr(e,t){if(!e)return!1;const n=e.type;return"TSConditionalType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function cr(e,t){if(!e)return!1;const n=e.type;return"TSInferType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function fr(e,t){if(!e)return!1;const n=e.type;return"TSParenthesizedType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pr(e,t){if(!e)return!1;const n=e.type;return"TSTypeOperator"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function dr(e,t){if(!e)return!1;const n=e.type;return"TSIndexedAccessType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function yr(e,t){if(!e)return!1;const n=e.type;return"TSMappedType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function mr(e,t){if(!e)return!1;const n=e.type;return"TSLiteralType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Tr(e,t){if(!e)return!1;const n=e.type;return"TSExpressionWithTypeArguments"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function vr(e,t){if(!e)return!1;const n=e.type;return"TSInterfaceDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function br(e,t){if(!e)return!1;const n=e.type;return"TSInterfaceBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Sr(e,t){if(!e)return!1;const n=e.type;return"TSTypeAliasDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gr(e,t){if(!e)return!1;const n=e.type;return"TSInstantiationExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Er(e,t){if(!e)return!1;const n=e.type;return"TSAsExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function hr(e,t){if(!e)return!1;const n=e.type;return"TSTypeAssertion"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xr(e,t){if(!e)return!1;const n=e.type;return"TSEnumDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pr(e,t){if(!e)return!1;const n=e.type;return"TSEnumMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ar(e,t){if(!e)return!1;const n=e.type;return"TSModuleDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Or(e,t){if(!e)return!1;const n=e.type;return"TSModuleBlock"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function wr(e,t){if(!e)return!1;const n=e.type;return"TSImportType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _r(e,t){if(!e)return!1;const n=e.type;return"TSImportEqualsDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ir(e,t){if(!e)return!1;const n=e.type;return"TSExternalModuleReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Nr(e,t){if(!e)return!1;const n=e.type;return"TSNonNullExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function jr(e,t){if(!e)return!1;const n=e.type;return"TSExportAssignment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Dr(e,t){if(!e)return!1;const n=e.type;return"TSNamespaceExportDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Lr(e,t){if(!e)return!1;const n=e.type;return"TSTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Cr(e,t){if(!e)return!1;const n=e.type;return"TSTypeParameterInstantiation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mr(e,t){if(!e)return!1;const n=e.type;return"TSTypeParameterDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Br(e,t){if(!e)return!1;const n=e.type;return"TSTypeParameter"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Rr(e,t){if(!e)return!1;const n=e.type;return("ArrayExpression"===n||"AssignmentExpression"===n||"BinaryExpression"===n||"InterpreterDirective"===n||"Directive"===n||"DirectiveLiteral"===n||"BlockStatement"===n||"BreakStatement"===n||"CallExpression"===n||"CatchClause"===n||"ConditionalExpression"===n||"ContinueStatement"===n||"DebuggerStatement"===n||"DoWhileStatement"===n||"EmptyStatement"===n||"ExpressionStatement"===n||"File"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"FunctionExpression"===n||"Identifier"===n||"IfStatement"===n||"LabeledStatement"===n||"StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"LogicalExpression"===n||"MemberExpression"===n||"NewExpression"===n||"Program"===n||"ObjectExpression"===n||"ObjectMethod"===n||"ObjectProperty"===n||"RestElement"===n||"ReturnStatement"===n||"SequenceExpression"===n||"ParenthesizedExpression"===n||"SwitchCase"===n||"SwitchStatement"===n||"ThisExpression"===n||"ThrowStatement"===n||"TryStatement"===n||"UnaryExpression"===n||"UpdateExpression"===n||"VariableDeclaration"===n||"VariableDeclarator"===n||"WhileStatement"===n||"WithStatement"===n||"AssignmentPattern"===n||"ArrayPattern"===n||"ArrowFunctionExpression"===n||"ClassBody"===n||"ClassExpression"===n||"ClassDeclaration"===n||"ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ExportSpecifier"===n||"ForOfStatement"===n||"ImportDeclaration"===n||"ImportDefaultSpecifier"===n||"ImportNamespaceSpecifier"===n||"ImportSpecifier"===n||"MetaProperty"===n||"ClassMethod"===n||"ObjectPattern"===n||"SpreadElement"===n||"Super"===n||"TaggedTemplateExpression"===n||"TemplateElement"===n||"TemplateLiteral"===n||"YieldExpression"===n||"AwaitExpression"===n||"Import"===n||"BigIntLiteral"===n||"ExportNamespaceSpecifier"===n||"OptionalMemberExpression"===n||"OptionalCallExpression"===n||"ClassProperty"===n||"ClassAccessorProperty"===n||"ClassPrivateProperty"===n||"ClassPrivateMethod"===n||"PrivateName"===n||"StaticBlock"===n||"Placeholder"===n&&("Identifier"===e.expectedNode||"StringLiteral"===e.expectedNode||"BlockStatement"===e.expectedNode||"ClassBody"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function Fr(e,t){if(!e)return!1;const n=e.type;return("ArrayExpression"===n||"AssignmentExpression"===n||"BinaryExpression"===n||"CallExpression"===n||"ConditionalExpression"===n||"FunctionExpression"===n||"Identifier"===n||"StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"LogicalExpression"===n||"MemberExpression"===n||"NewExpression"===n||"ObjectExpression"===n||"SequenceExpression"===n||"ParenthesizedExpression"===n||"ThisExpression"===n||"UnaryExpression"===n||"UpdateExpression"===n||"ArrowFunctionExpression"===n||"ClassExpression"===n||"MetaProperty"===n||"Super"===n||"TaggedTemplateExpression"===n||"TemplateLiteral"===n||"YieldExpression"===n||"AwaitExpression"===n||"Import"===n||"BigIntLiteral"===n||"OptionalMemberExpression"===n||"OptionalCallExpression"===n||"TypeCastExpression"===n||"JSXElement"===n||"JSXFragment"===n||"BindExpression"===n||"DoExpression"===n||"RecordExpression"===n||"TupleExpression"===n||"DecimalLiteral"===n||"ModuleExpression"===n||"TopicReference"===n||"PipelineTopicExpression"===n||"PipelineBareFunction"===n||"PipelinePrimaryTopicReference"===n||"TSInstantiationExpression"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSNonNullExpression"===n||"Placeholder"===n&&("Expression"===e.expectedNode||"Identifier"===e.expectedNode||"StringLiteral"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function kr(e,t){if(!e)return!1;const n=e.type;return("BinaryExpression"===n||"LogicalExpression"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Vr(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"CatchClause"===n||"DoWhileStatement"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"FunctionExpression"===n||"Program"===n||"ObjectMethod"===n||"SwitchStatement"===n||"WhileStatement"===n||"ArrowFunctionExpression"===n||"ClassExpression"===n||"ClassDeclaration"===n||"ForOfStatement"===n||"ClassMethod"===n||"ClassPrivateMethod"===n||"StaticBlock"===n||"TSModuleBlock"===n||"Placeholder"===n&&"BlockStatement"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function Kr(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"CatchClause"===n||"DoWhileStatement"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"FunctionExpression"===n||"Program"===n||"ObjectMethod"===n||"SwitchStatement"===n||"WhileStatement"===n||"ArrowFunctionExpression"===n||"ForOfStatement"===n||"ClassMethod"===n||"ClassPrivateMethod"===n||"StaticBlock"===n||"TSModuleBlock"===n||"Placeholder"===n&&"BlockStatement"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function Yr(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"Program"===n||"TSModuleBlock"===n||"Placeholder"===n&&"BlockStatement"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ur(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"BreakStatement"===n||"ContinueStatement"===n||"DebuggerStatement"===n||"DoWhileStatement"===n||"EmptyStatement"===n||"ExpressionStatement"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"IfStatement"===n||"LabeledStatement"===n||"ReturnStatement"===n||"SwitchStatement"===n||"ThrowStatement"===n||"TryStatement"===n||"VariableDeclaration"===n||"WhileStatement"===n||"WithStatement"===n||"ClassDeclaration"===n||"ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ForOfStatement"===n||"ImportDeclaration"===n||"DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"InterfaceDeclaration"===n||"OpaqueType"===n||"TypeAlias"===n||"EnumDeclaration"===n||"TSDeclareFunction"===n||"TSInterfaceDeclaration"===n||"TSTypeAliasDeclaration"===n||"TSEnumDeclaration"===n||"TSModuleDeclaration"===n||"TSImportEqualsDeclaration"===n||"TSExportAssignment"===n||"TSNamespaceExportDeclaration"===n||"Placeholder"===n&&("Statement"===e.expectedNode||"Declaration"===e.expectedNode||"BlockStatement"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function Jr(e,t){if(!e)return!1;const n=e.type;return("BreakStatement"===n||"ContinueStatement"===n||"ReturnStatement"===n||"ThrowStatement"===n||"YieldExpression"===n||"AwaitExpression"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Xr(e,t){if(!e)return!1;const n=e.type;return("BreakStatement"===n||"ContinueStatement"===n||"ReturnStatement"===n||"ThrowStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function qr(e,t){if(!e)return!1;const n=e.type;return("ConditionalExpression"===n||"IfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Wr(e,t){if(!e)return!1;const n=e.type;return("DoWhileStatement"===n||"ForInStatement"===n||"ForStatement"===n||"WhileStatement"===n||"ForOfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Gr(e,t){if(!e)return!1;const n=e.type;return("DoWhileStatement"===n||"WhileStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function $r(e,t){if(!e)return!1;const n=e.type;return("ExpressionStatement"===n||"ParenthesizedExpression"===n||"TypeCastExpression"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function zr(e,t){if(!e)return!1;const n=e.type;return("ForInStatement"===n||"ForStatement"===n||"ForOfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Hr(e,t){if(!e)return!1;const n=e.type;return("ForInStatement"===n||"ForOfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Qr(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"FunctionExpression"===n||"ObjectMethod"===n||"ArrowFunctionExpression"===n||"ClassMethod"===n||"ClassPrivateMethod"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Zr(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"FunctionExpression"===n||"ObjectMethod"===n||"ArrowFunctionExpression"===n||"ClassMethod"===n||"ClassPrivateMethod"===n||"StaticBlock"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ei(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"FunctionExpression"===n||"StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"ArrowFunctionExpression"===n||"BigIntLiteral"===n||"DecimalLiteral"===n||"Placeholder"===n&&"StringLiteral"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ti(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"VariableDeclaration"===n||"ClassDeclaration"===n||"ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ImportDeclaration"===n||"DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"InterfaceDeclaration"===n||"OpaqueType"===n||"TypeAlias"===n||"EnumDeclaration"===n||"TSDeclareFunction"===n||"TSInterfaceDeclaration"===n||"TSTypeAliasDeclaration"===n||"TSEnumDeclaration"===n||"TSModuleDeclaration"===n||"Placeholder"===n&&"Declaration"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ni(e,t){if(!e)return!1;const n=e.type;return("Identifier"===n||"RestElement"===n||"AssignmentPattern"===n||"ArrayPattern"===n||"ObjectPattern"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSNonNullExpression"===n||"Placeholder"===n&&("Pattern"===e.expectedNode||"Identifier"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function ri(e,t){if(!e)return!1;const n=e.type;return("Identifier"===n||"MemberExpression"===n||"RestElement"===n||"AssignmentPattern"===n||"ArrayPattern"===n||"ObjectPattern"===n||"TSParameterProperty"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSNonNullExpression"===n||"Placeholder"===n&&("Pattern"===e.expectedNode||"Identifier"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function ii(e,t){if(!e)return!1;const n=e.type;return("Identifier"===n||"TSQualifiedName"===n||"Placeholder"===n&&"Identifier"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function oi(e,t){if(!e)return!1;const n=e.type;return("StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"TemplateLiteral"===n||"BigIntLiteral"===n||"DecimalLiteral"===n||"Placeholder"===n&&"StringLiteral"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ai(e,t){if(!e)return!1;const n=e.type;return("StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"BigIntLiteral"===n||"JSXAttribute"===n||"JSXClosingElement"===n||"JSXElement"===n||"JSXExpressionContainer"===n||"JSXSpreadChild"===n||"JSXOpeningElement"===n||"JSXText"===n||"JSXFragment"===n||"JSXOpeningFragment"===n||"JSXClosingFragment"===n||"DecimalLiteral"===n||"Placeholder"===n&&"StringLiteral"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function si(e,t){if(!e)return!1;const n=e.type;return("ObjectMethod"===n||"ObjectProperty"===n||"ObjectTypeInternalSlot"===n||"ObjectTypeCallProperty"===n||"ObjectTypeIndexer"===n||"ObjectTypeProperty"===n||"ObjectTypeSpreadProperty"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ui(e,t){if(!e)return!1;const n=e.type;return("ObjectMethod"===n||"ClassMethod"===n||"ClassPrivateMethod"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function li(e,t){if(!e)return!1;const n=e.type;return("ObjectMethod"===n||"ObjectProperty"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ci(e,t){if(!e)return!1;const n=e.type;return("ObjectProperty"===n||"ClassProperty"===n||"ClassAccessorProperty"===n||"ClassPrivateProperty"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function fi(e,t){if(!e)return!1;const n=e.type;return("UnaryExpression"===n||"SpreadElement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function pi(e,t){if(!e)return!1;const n=e.type;return("AssignmentPattern"===n||"ArrayPattern"===n||"ObjectPattern"===n||"Placeholder"===n&&"Pattern"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function di(e,t){if(!e)return!1;const n=e.type;return("ClassExpression"===n||"ClassDeclaration"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function yi(e,t){if(!e)return!1;const n=e.type;return("ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ImportDeclaration"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function mi(e,t){if(!e)return!1;const n=e.type;return("ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ti(e,t){if(!e)return!1;const n=e.type;return("ExportSpecifier"===n||"ImportDefaultSpecifier"===n||"ImportNamespaceSpecifier"===n||"ImportSpecifier"===n||"ExportNamespaceSpecifier"===n||"ExportDefaultSpecifier"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function vi(e,t){if(!e)return!1;const n=e.type;return"ClassAccessorProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function bi(e,t){if(!e)return!1;const n=e.type;return("ClassPrivateProperty"===n||"ClassPrivateMethod"===n||"PrivateName"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Si(e,t){if(!e)return!1;const n=e.type;return("AnyTypeAnnotation"===n||"ArrayTypeAnnotation"===n||"BooleanTypeAnnotation"===n||"BooleanLiteralTypeAnnotation"===n||"NullLiteralTypeAnnotation"===n||"ClassImplements"===n||"DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"DeclaredPredicate"===n||"ExistsTypeAnnotation"===n||"FunctionTypeAnnotation"===n||"FunctionTypeParam"===n||"GenericTypeAnnotation"===n||"InferredPredicate"===n||"InterfaceExtends"===n||"InterfaceDeclaration"===n||"InterfaceTypeAnnotation"===n||"IntersectionTypeAnnotation"===n||"MixedTypeAnnotation"===n||"EmptyTypeAnnotation"===n||"NullableTypeAnnotation"===n||"NumberLiteralTypeAnnotation"===n||"NumberTypeAnnotation"===n||"ObjectTypeAnnotation"===n||"ObjectTypeInternalSlot"===n||"ObjectTypeCallProperty"===n||"ObjectTypeIndexer"===n||"ObjectTypeProperty"===n||"ObjectTypeSpreadProperty"===n||"OpaqueType"===n||"QualifiedTypeIdentifier"===n||"StringLiteralTypeAnnotation"===n||"StringTypeAnnotation"===n||"SymbolTypeAnnotation"===n||"ThisTypeAnnotation"===n||"TupleTypeAnnotation"===n||"TypeofTypeAnnotation"===n||"TypeAlias"===n||"TypeAnnotation"===n||"TypeCastExpression"===n||"TypeParameter"===n||"TypeParameterDeclaration"===n||"TypeParameterInstantiation"===n||"UnionTypeAnnotation"===n||"Variance"===n||"VoidTypeAnnotation"===n||"EnumDeclaration"===n||"EnumBooleanBody"===n||"EnumNumberBody"===n||"EnumStringBody"===n||"EnumSymbolBody"===n||"EnumBooleanMember"===n||"EnumNumberMember"===n||"EnumStringMember"===n||"EnumDefaultedMember"===n||"IndexedAccessType"===n||"OptionalIndexedAccessType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function gi(e,t){if(!e)return!1;const n=e.type;return("AnyTypeAnnotation"===n||"ArrayTypeAnnotation"===n||"BooleanTypeAnnotation"===n||"BooleanLiteralTypeAnnotation"===n||"NullLiteralTypeAnnotation"===n||"ExistsTypeAnnotation"===n||"FunctionTypeAnnotation"===n||"GenericTypeAnnotation"===n||"InterfaceTypeAnnotation"===n||"IntersectionTypeAnnotation"===n||"MixedTypeAnnotation"===n||"EmptyTypeAnnotation"===n||"NullableTypeAnnotation"===n||"NumberLiteralTypeAnnotation"===n||"NumberTypeAnnotation"===n||"ObjectTypeAnnotation"===n||"StringLiteralTypeAnnotation"===n||"StringTypeAnnotation"===n||"SymbolTypeAnnotation"===n||"ThisTypeAnnotation"===n||"TupleTypeAnnotation"===n||"TypeofTypeAnnotation"===n||"UnionTypeAnnotation"===n||"VoidTypeAnnotation"===n||"IndexedAccessType"===n||"OptionalIndexedAccessType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ei(e,t){if(!e)return!1;const n=e.type;return("AnyTypeAnnotation"===n||"BooleanTypeAnnotation"===n||"NullLiteralTypeAnnotation"===n||"MixedTypeAnnotation"===n||"EmptyTypeAnnotation"===n||"NumberTypeAnnotation"===n||"StringTypeAnnotation"===n||"SymbolTypeAnnotation"===n||"ThisTypeAnnotation"===n||"VoidTypeAnnotation"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function hi(e,t){if(!e)return!1;const n=e.type;return("DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"InterfaceDeclaration"===n||"OpaqueType"===n||"TypeAlias"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function xi(e,t){if(!e)return!1;const n=e.type;return("DeclaredPredicate"===n||"InferredPredicate"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Pi(e,t){if(!e)return!1;const n=e.type;return("EnumBooleanBody"===n||"EnumNumberBody"===n||"EnumStringBody"===n||"EnumSymbolBody"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ai(e,t){if(!e)return!1;const n=e.type;return("EnumBooleanMember"===n||"EnumNumberMember"===n||"EnumStringMember"===n||"EnumDefaultedMember"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Oi(e,t){if(!e)return!1;const n=e.type;return("JSXAttribute"===n||"JSXClosingElement"===n||"JSXElement"===n||"JSXEmptyExpression"===n||"JSXExpressionContainer"===n||"JSXSpreadChild"===n||"JSXIdentifier"===n||"JSXMemberExpression"===n||"JSXNamespacedName"===n||"JSXOpeningElement"===n||"JSXSpreadAttribute"===n||"JSXText"===n||"JSXFragment"===n||"JSXOpeningFragment"===n||"JSXClosingFragment"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function wi(e,t){if(!e)return!1;const n=e.type;return("Noop"===n||"Placeholder"===n||"V8IntrinsicIdentifier"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function _i(e,t){if(!e)return!1;const n=e.type;return("TSParameterProperty"===n||"TSDeclareFunction"===n||"TSDeclareMethod"===n||"TSQualifiedName"===n||"TSCallSignatureDeclaration"===n||"TSConstructSignatureDeclaration"===n||"TSPropertySignature"===n||"TSMethodSignature"===n||"TSIndexSignature"===n||"TSAnyKeyword"===n||"TSBooleanKeyword"===n||"TSBigIntKeyword"===n||"TSIntrinsicKeyword"===n||"TSNeverKeyword"===n||"TSNullKeyword"===n||"TSNumberKeyword"===n||"TSObjectKeyword"===n||"TSStringKeyword"===n||"TSSymbolKeyword"===n||"TSUndefinedKeyword"===n||"TSUnknownKeyword"===n||"TSVoidKeyword"===n||"TSThisType"===n||"TSFunctionType"===n||"TSConstructorType"===n||"TSTypeReference"===n||"TSTypePredicate"===n||"TSTypeQuery"===n||"TSTypeLiteral"===n||"TSArrayType"===n||"TSTupleType"===n||"TSOptionalType"===n||"TSRestType"===n||"TSNamedTupleMember"===n||"TSUnionType"===n||"TSIntersectionType"===n||"TSConditionalType"===n||"TSInferType"===n||"TSParenthesizedType"===n||"TSTypeOperator"===n||"TSIndexedAccessType"===n||"TSMappedType"===n||"TSLiteralType"===n||"TSExpressionWithTypeArguments"===n||"TSInterfaceDeclaration"===n||"TSInterfaceBody"===n||"TSTypeAliasDeclaration"===n||"TSInstantiationExpression"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSEnumDeclaration"===n||"TSEnumMember"===n||"TSModuleDeclaration"===n||"TSModuleBlock"===n||"TSImportType"===n||"TSImportEqualsDeclaration"===n||"TSExternalModuleReference"===n||"TSNonNullExpression"===n||"TSExportAssignment"===n||"TSNamespaceExportDeclaration"===n||"TSTypeAnnotation"===n||"TSTypeParameterInstantiation"===n||"TSTypeParameterDeclaration"===n||"TSTypeParameter"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ii(e,t){if(!e)return!1;const n=e.type;return("TSCallSignatureDeclaration"===n||"TSConstructSignatureDeclaration"===n||"TSPropertySignature"===n||"TSMethodSignature"===n||"TSIndexSignature"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ni(e,t){if(!e)return!1;const n=e.type;return("TSAnyKeyword"===n||"TSBooleanKeyword"===n||"TSBigIntKeyword"===n||"TSIntrinsicKeyword"===n||"TSNeverKeyword"===n||"TSNullKeyword"===n||"TSNumberKeyword"===n||"TSObjectKeyword"===n||"TSStringKeyword"===n||"TSSymbolKeyword"===n||"TSUndefinedKeyword"===n||"TSUnknownKeyword"===n||"TSVoidKeyword"===n||"TSThisType"===n||"TSFunctionType"===n||"TSConstructorType"===n||"TSTypeReference"===n||"TSTypePredicate"===n||"TSTypeQuery"===n||"TSTypeLiteral"===n||"TSArrayType"===n||"TSTupleType"===n||"TSOptionalType"===n||"TSRestType"===n||"TSUnionType"===n||"TSIntersectionType"===n||"TSConditionalType"===n||"TSInferType"===n||"TSParenthesizedType"===n||"TSTypeOperator"===n||"TSIndexedAccessType"===n||"TSMappedType"===n||"TSLiteralType"===n||"TSExpressionWithTypeArguments"===n||"TSImportType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ji(e,t){if(!e)return!1;const n=e.type;return("TSAnyKeyword"===n||"TSBooleanKeyword"===n||"TSBigIntKeyword"===n||"TSIntrinsicKeyword"===n||"TSNeverKeyword"===n||"TSNullKeyword"===n||"TSNumberKeyword"===n||"TSObjectKeyword"===n||"TSStringKeyword"===n||"TSSymbolKeyword"===n||"TSUndefinedKeyword"===n||"TSUnknownKeyword"===n||"TSVoidKeyword"===n||"TSThisType"===n||"TSLiteralType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Di(e,t){if(console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),!e)return!1;const n=e.type;return"NumberLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Li(e,t){if(console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),!e)return!1;const n=e.type;return"RegexLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ci(e,t){if(console.trace("The node type RestProperty has been renamed to RestElement"),!e)return!1;const n=e.type;return"RestProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mi(e,t){if(console.trace("The node type SpreadProperty has been renamed to SpreadElement"),!e)return!1;const n=e.type;return"SpreadProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}},90053:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s;var r=n(45113),i=n(11920),o=n(51015),a=n(92321);function s(e,t,n){if(!t)return!1;const s=(0,i.default)(t.type,e);return s?"undefined"===typeof n||(0,r.default)(t,n):!n&&"Placeholder"===t.type&&e in a.FLIPPED_ALIAS_KEYS&&(0,o.default)(t.expectedNode,e)}},32957:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(97980);function i(e,t,n){if(n&&"Identifier"===e.type&&"ObjectProperty"===t.type&&"ObjectExpression"===n.type)return!1;const i=r.default.keys[t.type];if(i)for(let r=0;r<i.length;r++){const n=i[r],o=t[n];if(Array.isArray(o)){if(o.indexOf(e)>=0)return!0}else if(o===e)return!0}return!1}},23980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(72552);function o(e){return(0,r.isFunctionDeclaration)(e)||(0,r.isClassDeclaration)(e)||(0,i.default)(e)}},28476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(11920),i=n(42748);function o(e){return!!(0,r.default)(e.type,"Immutable")||!!(0,i.isIdentifier)(e)&&"undefined"===e.name}},72552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(16591);function o(e){return(0,r.isVariableDeclaration)(e)&&("var"!==e.kind||e[i.BLOCK_SCOPED_SYMBOL])}},86663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e){return!(!e||!r.VISITOR_KEYS[e.type])}},51752:function(e,t,n){"use strict";n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t){if("object"!==typeof e||"object"!==typeof t||null==e||null==t)return e===t;if(e.type!==t.type)return!1;const n=Object.keys(r.NODE_FIELDS[e.type]||e.type),o=r.VISITOR_KEYS[e.type];for(const r of n){if(typeof e[r]!==typeof t[r])return!1;if(null!=e[r]||null!=t[r]){if(null==e[r]||null==t[r])return!1;if(Array.isArray(e[r])){if(!Array.isArray(t[r]))return!1;if(e[r].length!==t[r].length)return!1;for(let n=0;n<e[r].length;n++)if(!i(e[r][n],t[r][n]))return!1}else if("object"!==typeof e[r]||null!=o&&o.includes(r)){if(!i(e[r],t[r]))return!1}else for(const n of Object.keys(e[r]))if(e[r][n]!==t[r][n])return!1}}return!0}},51015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t){if(e===t)return!0;const n=r.PLACEHOLDERS_ALIAS[e];if(n)for(const r of n)if(t===r)return!0;return!1}},93504:function(e,t){"use strict";function n(e,t,n){switch(t.type){case"MemberExpression":case"OptionalMemberExpression":return t.property===e?!!t.computed:t.object===e;case"JSXMemberExpression":return t.object===e;case"VariableDeclarator":return t.init===e;case"ArrowFunctionExpression":return t.body===e;case"PrivateName":return!1;case"ClassMethod":case"ClassPrivateMethod":case"ObjectMethod":return t.key===e&&!!t.computed;case"ObjectProperty":return t.key===e?!!t.computed:!n||"ObjectPattern"!==n.type;case"ClassProperty":case"ClassAccessorProperty":return t.key!==e||!!t.computed;case"ClassPrivateProperty":return t.key!==e;case"ClassDeclaration":case"ClassExpression":return t.superClass===e;case"AssignmentExpression":return t.right===e;case"AssignmentPattern":return t.right===e;case"LabeledStatement":return!1;case"CatchClause":return!1;case"RestElement":return!1;case"BreakStatement":case"ContinueStatement":return!1;case"FunctionDeclaration":case"FunctionExpression":return!1;case"ExportNamespaceSpecifier":case"ExportDefaultSpecifier":return!1;case"ExportSpecifier":return(null==n||!n.source)&&t.local===e;case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"ImportSpecifier":return!1;case"ImportAttribute":return!1;case"JSXAttribute":return!1;case"ObjectPattern":case"ArrayPattern":return!1;case"MetaProperty":return!1;case"ObjectTypeProperty":return t.key!==e;case"TSEnumMember":return t.id!==e;case"TSPropertySignature":return t.key!==e||!!t.computed}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},63948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e,t){return(!(0,r.isBlockStatement)(e)||!(0,r.isFunction)(t)&&!(0,r.isCatchClause)(t))&&(!(!(0,r.isPattern)(e)||!(0,r.isFunction)(t)&&!(0,r.isCatchClause)(t))||(0,r.isScopable)(e))}},74956:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e){return(0,r.isImportDefaultSpecifier)(e)||(0,r.isIdentifier)(e.imported||e.exported,{name:"default"})}},11920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t){if(e===t)return!0;if(r.ALIAS_KEYS[t])return!1;const n=r.FLIPPED_ALIAS_KEYS[t];if(n){if(n[0]===e)return!0;for(const t of n)if(e===t)return!0}return!1}},87584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(3994);const i=new Set(["abstract","boolean","byte","char","double","enum","final","float","goto","implements","int","interface","long","native","package","private","protected","public","short","static","synchronized","throws","transient","volatile"]);function o(e){return(0,r.default)(e)&&!i.has(e)}},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(65502);function i(e,t=!0){return"string"===typeof e&&((!t||!(0,r.isKeyword)(e)&&!(0,r.isStrictReservedWord)(e,!0))&&(0,r.isIdentifierName)(e))}},92027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(16591);function o(e){return(0,r.isVariableDeclaration)(e,{kind:"var"})&&!e[i.BLOCK_SCOPED_SYMBOL]}},7639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e,t,n){if(!(0,r.isMemberExpression)(e))return!1;const i=Array.isArray(t)?t:t.split("."),o=[];let a;for(a=e;(0,r.isMemberExpression)(a);a=a.object)o.push(a.property);if(o.push(a),o.length<i.length)return!1;if(!n&&o.length>i.length)return!1;for(let s=0,u=o.length-1;s<i.length;s++,u--){const e=o[u];let t;if((0,r.isIdentifier)(e))t=e.name;else if((0,r.isStringLiteral)(e))t=e.value;else{if(!(0,r.isThisExpression)(e))return!1;t="this"}if(i[s]!==t)return!1}return!0}},12849:function(e,t){"use strict";function n(e){return!!e&&/^[a-z]/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},95453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(82570);const i=(0,r.default)("React.Component");var o=i;t["default"]=o},93885:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i,t.validateChild=a,t.validateField=o;var r=n(92321);function i(e,t,n){if(!e)return;const i=r.NODE_FIELDS[e.type];if(!i)return;const s=i[t];o(e,t,n,s),a(e,t,n)}function o(e,t,n,r){null!=r&&r.validate&&(r.optional&&null==n||r.validate(e,t,n))}function a(e,t,n){if(null==n)return;const i=r.NODE_PARENT_VALIDATIONS[n.type];i&&i(e,t,n)}},44187:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e,t){return e.get(t)}e.exports=t},63226:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e,t){return e[t]}e.exports=t},84360:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(12681);e.exports=r},12681:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63226),i=n(44187),o=n(79804),a=n(86914);function s(e){var t=Boolean(e.get&&e.set);return{data:e,accessors:t,getter:t?i:r,setter:t?a:o}}e.exports=s},86914:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e,t,n){e.set(n,t)}e.exports=t},79804:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e,t,n){e[t]=n}e.exports=t},98922:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44079),i=n(72867),o=n(83033);function a(e,t){var n,a,s,u;for(n=t.length,u=0,s=0;s<n;s++){if(a=t[s],!r(a))return null;e[u]=i(a),e[u+1]=o(a),u+=2}return e}e.exports=a},91940:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(72867),a=n(83033);function s(e){var t,n,s;t=[];while(1){if(n=e.next(),n.done)break;if(s=n.value,r(s)&&s.length>=2)t.push(s[0],s[1]);else{if(!i(s))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+s+"`.");t.push(o(s),a(s))}}return t}e.exports=s},10002:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(72867),a=n(83033);function s(e,t,n){var s,u,l,c;s=[],c=-1;while(1){if(u=e.next(),u.done)break;if(c+=1,l=t.call(n,u.value,c),r(l)&&l.length>=2)s.push(l[0],l[1]);else{if(!i(l))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");s.push(o(l),a(l))}}return s}e.exports=s},19674:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(54621);e.exports=r},54621:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(8461).isPrimitive,i=n(77656),o=n(87247),a=n(63524),s=n(82354),u=n(46114),l=n(83608),c=n(44079),f=n(55688),p=n(65370),d=n(98713),y=n(579),m=n(44532),T=n(15249),v=n(8202),b=n(77075),S=n(72867),g=n(83033),E=n(99006),h=n(25693),x=n(84360),P=n(91940),A=n(10002),O=n(98922),w=2*v.BYTES_PER_ELEMENT,_=d();function I(e){return e instanceof L||"object"===typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"===typeof e._length&&"object"===typeof e._buffer}function N(e){return e===L||"Complex64Array"===e.name}function j(e){return"object"===typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===w/2}function D(e){return"object"===typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===w}function L(){var e,t,n,i;if(t=arguments.length,!(this instanceof L))return 0===t?new L:1===t?new L(arguments[0]):2===t?new L(arguments[0],arguments[1]):new L(arguments[0],arguments[1],arguments[2]);if(0===t)n=new v(0);else if(1===t)if(r(arguments[0]))n=new v(2*arguments[0]);else if(o(arguments[0]))if(n=arguments[0],i=n.length,i&&u(n)&&c(n[0])){if(n=O(new v(2*i),n),null===n){if(!f(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(arguments[0])}}else{if(j(n))n=E(n,0);else if(D(n))n=h(n,0);else if(!f(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(n)}else if(a(arguments[0])){if(n=arguments[0],!p(n.byteLength/w))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+w+". Byte length: `"+n.byteLength+"`.");n=new v(n)}else{if(!s(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(n=arguments[0],!1===_)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+n+"`.");if(!l(n[y]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+n+"`.");if(n=n[y](),!l(n.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(n=P(n),n instanceof Error)throw n;n=new v(n)}else{if(n=arguments[0],!a(n))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+n+"`.");if(e=arguments[1],!r(e))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!p(e/w))throw new RangeError("invalid argument. Byte offset must be a multiple of "+w+". Value: `"+e+"`.");if(2===t){if(i=n.byteLength-e,!p(i/w))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+w+". View byte length: `"+i+"`.");n=new v(n,e)}else{if(i=arguments[2],!r(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*w>n.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*w+"`.");n=new v(n,e,2*i)}}return m(this,"_buffer",n),m(this,"_length",n.length/2),this}m(L,"BYTES_PER_ELEMENT",w),m(L,"name","Complex128Array"),m(L,"from",(function(e){var t,n,r,a,u,p,d,m,T,v,b;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=arguments.length,n>1){if(r=arguments[1],!l(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");n>2&&(t=arguments[2])}if(I(e)){if(d=e.length,r){for(a=new this(d),u=a._buffer,b=0,v=0;v<d;v++){if(T=r.call(t,e.get(v),v),c(T))u[b]=S(T),u[b+1]=g(T);else{if(!(i(T)&&T.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+T+"`.");u[b]=T[0],u[b+1]=T[1]}b+=2}return a}return new this(e)}if(o(e)){if(r){for(d=e.length,p=x(e),v=0;v<d;v++)if(!c(p.getter(e,v))){m=!0;break}if(m){if(!f(d))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+d+"`.");for(a=new this(d/2),u=a._buffer,v=0;v<d;v++)u[v]=r.call(t,p.getter(e,v),v);return a}for(a=new this(d),u=a._buffer,b=0,v=0;v<d;v++){if(T=r.call(t,p.getter(e,v),v),c(T))u[b]=S(T),u[b+1]=g(T);else{if(!(i(T)&&T.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+T+"`.");u[b]=T[0],u[b+1]=T[1]}b+=2}return a}return new this(e)}if(s(e)&&_&&l(e[y])){if(u=e[y](),!l(u.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(p=r?A(u,r,t):P(u),p instanceof Error)throw p;for(d=p.length/2,a=new this(d),u=a._buffer,v=0;v<d;v++)u[v]=p[v];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),m(L,"of",(function(){var e,t;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)})),T(L.prototype,"buffer",(function(){return this._buffer.buffer})),T(L.prototype,"byteLength",(function(){return this._buffer.byteLength})),T(L.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),m(L.prototype,"BYTES_PER_ELEMENT",L.BYTES_PER_ELEMENT),m(L.prototype,"copyWithin",(function(e,t){if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*t):this._buffer.copyWithin(2*e,2*t,2*arguments[2]),this})),m(L.prototype,"entries",(function(){var e,t,n,r,i,o,a;if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,r=this._length,o=-1,a=-2,n={},m(n,"next",s),m(n,"return",u),y&&m(n,y,l),n;function s(){var t;return o+=1,i||o>=r?{done:!0}:(a+=2,t=new b(e[a],e[a+1]),{value:[o,t],done:!1})}function u(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return t.entries()}})),m(L.prototype,"get",(function(e){var t;if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new b(t[e],t[e+1])})),T(L.prototype,"length",(function(){return this._length})),m(L.prototype,"set",(function(e){var t,n,i,a,s,u,l,p,d;if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!r(n))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+n+"`.")}else n=0;if(c(e)){if(n>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+n+"`.");return n*=2,i[n]=S(e),void(i[n+1]=g(e))}if(I(e)){if(u=e._length,n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,d=i.byteOffset+n*w,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(t.length),p=0;p<t.length;p++)a[p]=t[p];t=a}for(n*=2,d=0,p=0;p<u;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2}else{if(!o(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(u=e.length,p=0;p<u;p++)if(!c(e[p])){s=!0;break}if(s){if(!f(u))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+u+"`.");if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,d=i.byteOffset+n*w,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(u),p=0;p<u;p++)a[p]=t[p];t=a}for(n*=2,u/=2,d=0,p=0;p<u;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,p=0;p<u;p++)l=e[p],i[n]=S(l),i[n+1]=g(l),n+=2}})),e.exports=L},18442:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44079),i=n(78154),o=n(72337);function a(e,t){var n,a,s,u;for(n=t.length,u=0,s=0;s<n;s++){if(a=t[s],!r(a))return null;e[u]=i(a),e[u+1]=o(a),u+=2}return e}e.exports=a},40308:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(78154),a=n(72337);function s(e){var t,n,s;t=[];while(1){if(n=e.next(),n.done)break;if(s=n.value,r(s)&&s.length>=2)t.push(s[0],s[1]);else{if(!i(s))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+s+"`.");t.push(o(s),a(s))}}return t}e.exports=s},90233:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(78154),a=n(72337);function s(e,t,n){var s,u,l,c;s=[],c=-1;while(1){if(u=e.next(),u.done)break;if(c+=1,l=t.call(n,u.value,c),r(l)&&l.length>=2)s.push(l[0],l[1]);else{if(!i(l))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");s.push(o(l),a(l))}}return s}e.exports=s},69428:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(706);e.exports=r},706:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(8461).isPrimitive,i=n(77656),o=n(87247),a=n(63524),s=n(82354),u=n(46114),l=n(83608),c=n(44079),f=n(55688),p=n(65370),d=n(98713),y=n(579),m=n(44532),T=n(15249),v=n(51211),b=n(27191),S=n(78154),g=n(72337),E=n(99006),h=n(25693),x=n(84360),P=n(40308),A=n(90233),O=n(18442),w=2*v.BYTES_PER_ELEMENT,_=d();function I(e){return e instanceof L||"object"===typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"===typeof e._length&&"object"===typeof e._buffer}function N(e){return e===L||"Complex128Array"===e.name}function j(e){return"object"===typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===w}function D(e){return"object"===typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*w}function L(){var e,t,n,i;if(t=arguments.length,!(this instanceof L))return 0===t?new L:1===t?new L(arguments[0]):2===t?new L(arguments[0],arguments[1]):new L(arguments[0],arguments[1],arguments[2]);if(0===t)n=new v(0);else if(1===t)if(r(arguments[0]))n=new v(2*arguments[0]);else if(o(arguments[0]))if(n=arguments[0],i=n.length,i&&u(n)&&c(n[0])){if(n=O(new v(2*i),n),null===n){if(!f(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(arguments[0])}}else{if(j(n))n=E(n,0);else if(D(n))n=h(n,0);else if(!f(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(n)}else if(a(arguments[0])){if(n=arguments[0],!p(n.byteLength/w))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+w+". Byte length: `"+n.byteLength+"`.");n=new v(n)}else{if(!s(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(n=arguments[0],!1===_)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+n+"`.");if(!l(n[y]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+n+"`.");if(n=n[y](),!l(n.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(n=P(n),n instanceof Error)throw n;n=new v(n)}else{if(n=arguments[0],!a(n))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+n+"`.");if(e=arguments[1],!r(e))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!p(e/w))throw new RangeError("invalid argument. Byte offset must be a multiple of "+w+". Value: `"+e+"`.");if(2===t){if(i=n.byteLength-e,!p(i/w))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+w+". View byte length: `"+i+"`.");n=new v(n,e)}else{if(i=arguments[2],!r(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*w>n.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*w+"`.");n=new v(n,e,2*i)}}return m(this,"_buffer",n),m(this,"_length",n.length/2),this}m(L,"BYTES_PER_ELEMENT",w),m(L,"name","Complex64Array"),m(L,"from",(function(e){var t,n,r,a,u,p,d,m,T,v,b;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=arguments.length,n>1){if(r=arguments[1],!l(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");n>2&&(t=arguments[2])}if(I(e)){if(d=e.length,r){for(a=new this(d),u=a._buffer,b=0,v=0;v<d;v++){if(T=r.call(t,e.get(v),v),c(T))u[b]=S(T),u[b+1]=g(T);else{if(!(i(T)&&T.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+T+"`.");u[b]=T[0],u[b+1]=T[1]}b+=2}return a}return new this(e)}if(o(e)){if(r){for(d=e.length,p=x(e),v=0;v<d;v++)if(!c(p.getter(e,v))){m=!0;break}if(m){if(!f(d))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+d+"`.");for(a=new this(d/2),u=a._buffer,v=0;v<d;v++)u[v]=r.call(t,p.getter(e,v),v);return a}for(a=new this(d),u=a._buffer,b=0,v=0;v<d;v++){if(T=r.call(t,p.getter(e,v),v),c(T))u[b]=S(T),u[b+1]=g(T);else{if(!(i(T)&&T.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+T+"`.");u[b]=T[0],u[b+1]=T[1]}b+=2}return a}return new this(e)}if(s(e)&&_&&l(e[y])){if(u=e[y](),!l(u.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(p=r?A(u,r,t):P(u),p instanceof Error)throw p;for(d=p.length/2,a=new this(d),u=a._buffer,v=0;v<d;v++)u[v]=p[v];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),m(L,"of",(function(){var e,t;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)})),T(L.prototype,"buffer",(function(){return this._buffer.buffer})),T(L.prototype,"byteLength",(function(){return this._buffer.byteLength})),T(L.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),m(L.prototype,"BYTES_PER_ELEMENT",L.BYTES_PER_ELEMENT),m(L.prototype,"copyWithin",(function(e,t){if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*t):this._buffer.copyWithin(2*e,2*t,2*arguments[2]),this})),m(L.prototype,"entries",(function(){var e,t,n,r,i,o,a;if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,r=this._length,o=-1,a=-2,n={},m(n,"next",s),m(n,"return",u),y&&m(n,y,l),n;function s(){var t;return o+=1,i||o>=r?{done:!0}:(a+=2,t=new b(e[a],e[a+1]),{value:[o,t],done:!1})}function u(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return t.entries()}})),m(L.prototype,"get",(function(e){var t;if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new b(t[e],t[e+1])})),T(L.prototype,"length",(function(){return this._length})),m(L.prototype,"set",(function(e){var t,n,i,a,s,u,l,p,d;if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!r(n))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+n+"`.")}else n=0;if(c(e)){if(n>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+n+"`.");return n*=2,i[n]=S(e),void(i[n+1]=g(e))}if(I(e)){if(u=e._length,n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,d=i.byteOffset+n*w,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(t.length),p=0;p<t.length;p++)a[p]=t[p];t=a}for(n*=2,d=0,p=0;p<u;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2}else{if(!o(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(u=e.length,p=0;p<u;p++)if(!c(e[p])){s=!0;break}if(s){if(!f(u))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+u+"`.");if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,d=i.byteOffset+n*w,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(u),p=0;p<u;p++)a[p]=t[p];t=a}for(n*=2,u/=2,d=0,p=0;p<u;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,p=0;p<u;p++)l=e[p],i[n]=S(l),i[n+1]=g(l),n+=2}})),e.exports=L},92082:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Float32Array?Float32Array:void 0;e.exports=r},51211:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(73902),o=n(92082),a=n(20086);r=i()?o:a,e.exports=r},20086:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},52323:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Float64Array?Float64Array:void 0;e.exports=r},8202:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(96290),o=n(52323),a=n(78336);r=i()?o:a,e.exports=r},78336:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},77217:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(94509),o=n(83128),a=n(72742);r=i()?o:a,e.exports=r},83128:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Int16Array?Int16Array:void 0;e.exports=r},72742:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},24726:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(51895),o=n(73062),a=n(95260);r=i()?o:a,e.exports=r},73062:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Int32Array?Int32Array:void 0;e.exports=r},95260:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},91329:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(4019),o=n(45762),a=n(27314);r=i()?o:a,e.exports=r},45762:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Int8Array?Int8Array:void 0;e.exports=r},27314:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},18005:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(91329),i=n(78658),o=n(62110),a=n(77217),s=n(26863),u=n(24726),l=n(11235),c=n(51211),f=n(8202),p=n(69428),d=n(19674),y=[[f,"Float64Array"],[c,"Float32Array"],[u,"Int32Array"],[l,"Uint32Array"],[a,"Int16Array"],[s,"Uint16Array"],[r,"Int8Array"],[i,"Uint8Array"],[o,"Uint8ClampedArray"],[p,"Complex64Array"],[d,"Complex128Array"]];e.exports=y},40060:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(33970);e.exports=r},33970:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(94941),i=n(83834),o=n(99006),a=n(25693),s=n(14219);function u(e){var t,n,u;if(r(e))t=e;else{if(!i(e))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+e+"`.");t=8===e.BYTES_PER_ELEMENT?o(e,0):a(e,0)}for(n={type:s(e),data:[]},u=0;u<t.length;u++)n.data.push(t[u]);return n}e.exports=u},14219:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(43406),i=n(69276),o=n(19034),a=n(18005);function s(e){var t,n;for(n=0;n<a.length;n++)if(r(e,a[n][0]))return a[n][1];while(e){for(t=i(e),n=0;n<a.length;n++)if(t===a[n][1])return a[n][1];e=o(e)}}e.exports=s},26863:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(82134),o=n(41624),a=n(53783);r=i()?o:a,e.exports=r},53783:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},41624:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint16Array?Uint16Array:void 0;e.exports=r},11235:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(4428),o=n(81800),a=n(65177);r=i()?o:a,e.exports=r},65177:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},81800:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint32Array?Uint32Array:void 0;e.exports=r},78658:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(83063),o=n(31322),a=n(2747);r=i()?o:a,e.exports=r},2747:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},31322:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint8Array?Uint8Array:void 0;e.exports=r},62110:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(78074),o=n(46426),a=n(91729);r=i()?o:a,e.exports=r},91729:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw new Error("not implemented")}n(21703),e.exports=r},46426:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint8ClampedArray?Uint8ClampedArray:void 0;e.exports=r},93237:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Float32Array?Float32Array:null;e.exports=r},73902:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(33747);e.exports=r},33747:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(51001),i=n(20982),o=n(93237);function a(){var e,t;if("function"!==typeof o)return!1;try{t=new o([1,3.14,-3.14,5e40]),e=r(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===i}catch(n){e=!1}return e}e.exports=a},24259:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Float64Array?Float64Array:null;e.exports=r},96290:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(42413);e.exports=r},42413:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69672),i=n(24259);function o(){var e,t;if("function"!==typeof i)return!1;try{t=new i([1,3.14,-3.14,NaN]),e=r(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!==t[3]}catch(n){e=!1}return e}e.exports=o},45258:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){}e.exports=t},3262:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(68842);e.exports=r},68842:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(45258);function i(){return"foo"===r.name}e.exports=i},94509:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11598);e.exports=r},4990:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Int16Array?Int16Array:null;e.exports=r},11598:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(40070),i=n(11081),o=n(90399),a=n(4990);function s(){var e,t;if("function"!==typeof a)return!1;try{t=new a([1,3.14,-3.14,i+1]),e=r(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&t[3]===o}catch(n){e=!1}return e}e.exports=s},51895:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(70421);e.exports=r},26652:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Int32Array?Int32Array:null;e.exports=r},70421:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(29441),i=n(52619),o=n(86387),a=n(26652);function s(){var e,t;if("function"!==typeof a)return!1;try{t=new a([1,3.14,-3.14,i+1]),e=r(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&t[3]===o}catch(n){e=!1}return e}e.exports=s},4019:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(9978);e.exports=r},57535:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Int8Array?Int8Array:null;e.exports=r},9978:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(51652),i=n(2883),o=n(44073),a=n(57535);function s(){var e,t;if("function"!==typeof a)return!1;try{t=new a([1,3.14,-3.14,i+1]),e=r(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&t[3]===o}catch(n){e=!1}return e}e.exports=s},98713:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(76571);e.exports=r},76571:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(92043);function i(){return"function"===typeof Symbol&&"symbol"===typeof Symbol("foo")&&r(Symbol,"iterator")&&"symbol"===typeof Symbol.iterator}e.exports=i},92043:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(10285);e.exports=r},10285:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Object.prototype.hasOwnProperty;function n(e,n){return void 0!==e&&null!==e&&t.call(e,n)}e.exports=n},76635:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(34226);e.exports=r},34226:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){return"function"===typeof Symbol&&"symbol"===typeof Symbol("foo")}e.exports=t},75259:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(39173);e.exports=r},39173:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(76635),i=r();function o(){return i&&"symbol"===typeof Symbol.toStringTag}e.exports=o},82134:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(86734);e.exports=r},86734:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(8451),i=n(60979),o=n(51685);function a(){var e,t;if("function"!==typeof o)return!1;try{t=[1,3.14,-3.14,i+1,i+2],t=new o(t),e=r(t)&&1===t[0]&&3===t[1]&&t[2]===i-2&&0===t[3]&&1===t[4]}catch(n){e=!1}return e}e.exports=a},51685:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint16Array?Uint16Array:null;e.exports=r},4428:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(45748);e.exports=r},45748:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11327),i=n(74201),o=n(37126);function a(){var e,t;if("function"!==typeof o)return!1;try{t=[1,3.14,-3.14,i+1,i+2],t=new o(t),e=r(t)&&1===t[0]&&3===t[1]&&t[2]===i-2&&0===t[3]&&1===t[4]}catch(n){e=!1}return e}e.exports=a},37126:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint32Array?Uint32Array:null;e.exports=r},83063:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(1512);e.exports=r},1512:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(82299),i=n(71640),o=n(49599);function a(){var e,t;if("function"!==typeof o)return!1;try{t=[1,3.14,-3.14,i+1,i+2],t=new o(t),e=r(t)&&1===t[0]&&3===t[1]&&t[2]===i-2&&0===t[3]&&1===t[4]}catch(n){e=!1}return e}e.exports=a},49599:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint8Array?Uint8Array:null;e.exports=r},78074:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(81245);e.exports=r},81245:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(75585),i=n(89928);function o(){var e,t;if("function"!==typeof i)return!1;try{t=new i([-1,0,1,3.14,4.99,255,256]),e=r(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(n){e=!1}return e}e.exports=o},89928:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r="function"===typeof Uint8ClampedArray?Uint8ClampedArray:null;e.exports=r},43406:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63476);e.exports=r},63476:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(e,t){if("function"!==typeof t)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+t+"`.");return e instanceof t}n(21703),e.exports=r},77656:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(744);e.exports=r},744:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(65370),i=n(68946);function o(e){return"object"===typeof e&&null!==e&&"number"===typeof e.length&&r(e.length)&&e.length>=0&&e.length<=i}e.exports=o},46114:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(24996);e.exports=r},24996:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(63762);function o(e){return"[object Array]"===i(e)}r=Array.isArray?Array.isArray:o,e.exports=r},63524:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(29856);e.exports=r},29856:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63762),i="function"===typeof ArrayBuffer;function o(e){return i&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===r(e)}e.exports=o},80248:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(93188),o=n(18518),a=n(18454);r(i,"isPrimitive",o),r(i,"isObject",a),e.exports=i},93188:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(18518),i=n(18454);function o(e){return r(e)||i(e)}e.exports=o},18454:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(75259),i=n(63762),o=n(87175),a=r();function s(e){return"object"===typeof e&&(e instanceof Boolean||(a?o(e):"[object Boolean]"===i(e)))}e.exports=s},18518:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return"boolean"===typeof e}e.exports=t},27962:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Boolean.prototype.toString;e.exports=t},87175:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(27962);function i(e){try{return r.call(e),!0}catch(t){return!1}}e.exports=i},46829:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(19392);e.exports=r},19392:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(84262);function i(e){return r(e)&&(e._isBuffer||e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}e.exports=i},87247:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(24028);e.exports=r},24028:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(65370),i=n(28496);function o(e){return"object"===typeof e&&null!==e&&"number"===typeof e.length&&r(e.length)&&e.length>=0&&e.length<=i}e.exports=o},44079:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(35508);e.exports=r},35508:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(77075),i=n(27191);function o(e){return e instanceof r||e instanceof i||"object"===typeof e&&null!==e&&"number"===typeof e.re&&"number"===typeof e.im}e.exports=o},73513:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69428),i=n(19674),o=[i,r];e.exports=o},83834:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(25545);e.exports=r},25545:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69276),i=n(19034),o=n(73513),a=n(11713);function s(e){var t,n;if("object"!==typeof e||null===e)return!1;for(n=0;n<o.length;n++)if(e instanceof o[n])return!0;while(e){for(t=r(e),n=0;n<a.length;n++)if(a[n]===t)return!0;e=i(e)}return!1}e.exports=s},51001:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(9012);e.exports=r},9012:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Float32Array;function o(e){return i&&e instanceof Float32Array||"[object Float32Array]"===r(e)}e.exports=o},69672:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(28726);e.exports=r},28726:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Float64Array;function o(e){return i&&e instanceof Float64Array||"[object Float64Array]"===r(e)}e.exports=o},83608:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(14475);e.exports=r},14475:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(58508);function i(e){return"function"===r(e)}e.exports=i},40070:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(9308);e.exports=r},9308:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Int16Array;function o(e){return i&&e instanceof Int16Array||"[object Int16Array]"===r(e)}e.exports=o},29441:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(17834);e.exports=r},17834:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Int32Array;function o(e){return i&&e instanceof Int32Array||"[object Int32Array]"===r(e)}e.exports=o},51652:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(23465);e.exports=r},23465:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Int8Array;function o(e){return i&&e instanceof Int8Array||"[object Int8Array]"===r(e)}e.exports=o},16932:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(27464),o=n(90553),a=n(71610);r(i,"isPrimitive",o),r(i,"isObject",a),e.exports=i},61095:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(20982),i=n(59306),o=n(65370);function a(e){return e<r&&e>i&&o(e)}e.exports=a},27464:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(90553),i=n(71610);function o(e){return r(e)||i(e)}e.exports=o},71610:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63157).isObject,i=n(61095);function o(e){return r(e)&&i(e.valueOf())}e.exports=o},90553:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63157).isPrimitive,i=n(61095);function o(e){return r(e)&&i(e)}e.exports=o},32168:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(78658),i=n(26863),o={uint16:i,uint8:r};e.exports=o},49460:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(61192);e.exports=r},61192:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(32168);function o(){var e,t;return e=new i["uint16"](1),e[0]=4660,t=new i["uint8"](e.buffer),52===t[0]}r=o(),e.exports=r},8461:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(85458),o=n(46084),a=n(76653);r(i,"isPrimitive",o),r(i,"isObject",a),e.exports=i},85458:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(46084),i=n(76653);function o(e){return r(e)||i(e)}e.exports=o},76653:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(16932).isObject;function i(e){return r(e)&&e.valueOf()>=0}e.exports=i},46084:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(16932).isPrimitive;function i(e){return r(e)&&e>=0}e.exports=i},63157:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(91742),o=n(48998),a=n(19056);r(i,"isPrimitive",o),r(i,"isObject",a),e.exports=i},91742:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(48998),i=n(19056);function o(e){return r(e)||i(e)}e.exports=o},19056:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(75259),i=n(63762),o=n(82747),a=n(8759),s=r();function u(e){return"object"===typeof e&&(e instanceof o||(s?a(e):"[object Number]"===i(e)))}e.exports=u},48998:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return"number"===typeof e}e.exports=t},12222:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(82747),i=r.prototype.toString;e.exports=i},8759:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(12222);function i(e){try{return r.call(e),!0}catch(t){return!1}}e.exports=i},84262:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(99637),o=n(55804);r(o,"isObjectLikeArray",i(o)),e.exports=o},55804:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return null!==e&&"object"===typeof e}e.exports=t},82354:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(1272);e.exports=r},1272:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(46114);function i(e){return"object"===typeof e&&null!==e&&!r(e)}e.exports=i},20906:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(24199);e.exports=r},24199:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(82354),i=n(83608),o=n(19034),a=n(92043),s=n(63762),u=Object.prototype;function l(e){var t;for(t in e)if(!a(e,t))return!1;return!0}function c(e){var t;return!!r(e)&&(t=o(e),!t||!a(e,"constructor")&&a(t,"constructor")&&i(t.constructor)&&"[object Function]"===s(t.constructor)&&a(t,"isPrototypeOf")&&i(t.isPrototypeOf)&&(t===u||l(e)))}e.exports=c},21736:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(77952),o=n(41183),a=n(60597);r(i,"isPrimitive",o),r(i,"isObject",a),e.exports=i},77952:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(41183),i=n(60597);function o(e){return r(e)||i(e)}e.exports=o},60597:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(16932).isObject;function i(e){return r(e)&&e.valueOf()>0}e.exports=i},41183:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(16932).isPrimitive;function i(e){return r(e)&&e>0}e.exports=i},2671:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(42908),o=n(83228),a=n(30325);r(i,"isPrimitive",o),r(i,"isObject",a),e.exports=i},42908:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(83228),i=n(30325);function o(e){return r(e)||i(e)}e.exports=o},30325:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63157).isObject;function i(e){return r(e)&&e.valueOf()>=0&&e.valueOf()<=1}e.exports=i},83228:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63157).isPrimitive;function i(e){return r(e)&&e>=0&&e<=1}e.exports=i},75514:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(91329),i=n(78658),o=n(62110),a=n(77217),s=n(26863),u=n(24726),l=n(11235),c=n(51211),f=n(8202),p=[f,c,u,l,a,s,r,i,o];e.exports=p},94941:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(53439);e.exports=r},53439:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69276),i=n(52546),o=n(19034),a=n(96290),s=n(8202),u=n(75514),l=n(68114),c=a()?o(s):f;function f(){}function p(e){var t,n;if("object"!==typeof e||null===e)return!1;if(e instanceof c)return!0;for(n=0;n<u.length;n++)if(e instanceof u[n])return!0;while(e){for(t=r(e),n=0;n<l.length;n++)if(l[n]===t)return!0;e=o(e)}return!1}c="TypedArray"===i(c)?c:f,e.exports=p},8451:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(95207);e.exports=r},95207:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Uint16Array;function o(e){return i&&e instanceof Uint16Array||"[object Uint16Array]"===r(e)}e.exports=o},11327:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(77307);e.exports=r},77307:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Uint32Array;function o(e){return i&&e instanceof Uint32Array||"[object Uint32Array]"===r(e)}e.exports=o},82299:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(62851);e.exports=r},62851:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Uint8Array;function o(e){return i&&e instanceof Uint8Array||"[object Uint8Array]"===r(e)}e.exports=o},75585:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(78951);e.exports=r},78951:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=n(63762),i="function"===typeof Uint8ClampedArray;function o(e){return i&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===r(e)}e.exports=o},40786:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(46114);function i(e){if("function"!==typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return t;function t(t){var n,i;if(!r(t))return!1;if(n=t.length,0===n)return!1;for(i=0;i<n;i++)if(!1===e(t[i]))return!1;return!0}}e.exports=i},99637:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(40786);e.exports=r},57472:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e,t,n,r,i,o,a){var s,u,l,c,f,p,d;for(s=t.data,u=i.data,c=t.getter,l=i.setter,f=r,p=a,d=0;d<e;d++)l(u,p,c(s,f)),f+=n,p+=o;return t}e.exports=t},31851:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(11),o=n(28434);r(i,"ndarray",o),e.exports=i},11:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(84360),i=n(57472),o=8;function a(e,t,n,a,s){var u,l,c,f,p,d;if(e<=0)return a;if(c=r(t),f=r(a),c.accessors||f.accessors)return u=n<0?(1-e)*n:0,l=s<0?(1-e)*s:0,i(e,c,n,u,f,s,l),f.data;if(1===n&&1===s){if(p=e%o,p>0)for(d=0;d<p;d++)a[d]=t[d];if(e<o)return a;for(d=p;d<e;d+=o)a[d]=t[d],a[d+1]=t[d+1],a[d+2]=t[d+2],a[d+3]=t[d+3],a[d+4]=t[d+4],a[d+5]=t[d+5],a[d+6]=t[d+6],a[d+7]=t[d+7];return a}for(u=n<0?(1-e)*n:0,l=s<0?(1-e)*s:0,d=0;d<e;d++)a[l]=t[u],u+=n,l+=s;return a}e.exports=a},28434:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(84360),i=n(57472),o=8;function a(e,t,n,a,s,u,l){var c,f,p,d,y,m;if(e<=0)return s;if(p=r(t),d=r(s),p.accessors||d.accessors)return i(e,p,n,a,d,u,l),d.data;if(c=a,f=l,1===n&&1===u){if(y=e%o,y>0)for(m=0;m<y;m++)s[f]=t[c],c+=n,f+=u;if(e<o)return s;for(m=y;m<e;m+=o)s[f]=t[c],s[f+1]=t[c+1],s[f+2]=t[c+2],s[f+3]=t[c+3],s[f+4]=t[c+4],s[f+5]=t[c+5],s[f+6]=t[c+6],s[f+7]=t[c+7],c+=o,f+=o;return s}for(m=0;m<e;m++)s[f]=t[c],c+=n,f+=u;return s}e.exports=a},27191:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(68871);e.exports=r},68871:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(63157).isPrimitive,i=n(31265),o=n(44532),a=n(15112),s=n(73406),u=n(69847);function l(e,t){if(!(this instanceof l))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!r(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return i(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:a(e)}),i(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:a(t)}),this}o(l,"BYTES_PER_ELEMENT",4),o(l.prototype,"BYTES_PER_ELEMENT",4),o(l.prototype,"byteLength",8),o(l.prototype,"toString",s),o(l.prototype,"toJSON",u),e.exports=l},69847:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}e.exports=t},73406:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}e.exports=t},77075:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(95502);e.exports=r},95502:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(63157).isPrimitive,i=n(31265),o=n(44532),a=n(15260),s=n(14418);function u(e,t){if(!(this instanceof u))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!r(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return i(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),i(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}o(u,"BYTES_PER_ELEMENT",8),o(u.prototype,"BYTES_PER_ELEMENT",8),o(u.prototype,"byteLength",16),o(u.prototype,"toString",a),o(u.prototype,"toJSON",s),e.exports=u},14418:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}e.exports=t},15260:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}e.exports=t},83033:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(73931);e.exports=r},73931:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e.im}e.exports=t},72337:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(73546);e.exports=r},73546:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e.im}e.exports=t},72867:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(87624);e.exports=r},87624:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e.re}e.exports=t},78154:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(41844);e.exports=r},41844:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e.re}e.exports=t},68946:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=4294967295;e.exports=t},28496:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=9007199254740991;e.exports=t},27311:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=1023;e.exports=t},74503:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=2146435072;e.exports=t},43856:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=.6931471805599453;e.exports=t},69194:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=-1023;e.exports=t},95374:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=1023;e.exports=t},90366:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=9007199254740991;e.exports=t},11088:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=-1074;e.exports=t},59306:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(82747),i=r.NEGATIVE_INFINITY;e.exports=i},20982:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Number.POSITIVE_INFINITY;e.exports=t},94856:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=22250738585072014e-324;e.exports=t},11081:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=32767;e.exports=t},90399:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=-32768;e.exports=t},52619:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=2147483647;e.exports=t},86387:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=-2147483648;e.exports=t},2883:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=127;e.exports=t},44073:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=-128;e.exports=t},60979:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=65535;e.exports=t},74201:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=4294967295;e.exports=t},71640:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=255;e.exports=t},55688:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(56955);e.exports=r},56955:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(65370);function i(e){return r(e/2)}e.exports=i},48181:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(24587);e.exports=r},24587:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(20982),i=n(59306);function o(e){return e===r||e===i}e.exports=o},65370:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(8545);e.exports=r},8545:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(36196);function i(e){return r(e)===e}e.exports=i},53112:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(46178);e.exports=r},46178:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e!==e}e.exports=t},41579:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(40827);e.exports=r},40827:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(55688);function i(e){return r(e>0?e-1:e+1)}e.exports=i},35004:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(52507);e.exports=r},52507:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(36196);function i(e){return r(e)===e&&e>0}e.exports=i},64613:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(1159);e.exports=r},1159:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(20982);function i(e){return 0===e&&1/e===r}e.exports=i},15430:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(57180);e.exports=r},57180:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e>=0&&e<=1}e.exports=t},28922:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(64304);e.exports=r},64304:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=65535;function n(e,n){var r,i,o,a,s,u;return e>>>=0,n>>>=0,o=e>>>16>>>0,a=n>>>16>>>0,s=(e&t)>>>0,u=(n&t)>>>0,r=s*u>>>0,i=o*u+s*a<<16>>>0,r+i>>>0}e.exports=n},74401:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(54208);e.exports=r},54208:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return Math.abs(e)}e.exports=t},72279:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(16123);e.exports=r},16123:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(32895),i=n(88329),o=n(76486),a=2147483648,s=2147483647,u=[0,0];function l(e,t){var n,l;return r(u,e),n=u[0],n&=s,l=i(t),l&=a,n|=l,o(n,u[1])}e.exports=l},36196:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(8388);e.exports=r},8388:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Math.floor;e.exports=t},33035:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(18343);e.exports=r},18343:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(20982),i=n(59306),o=n(27311),a=n(95374),s=n(69194),u=n(11088),l=n(53112),c=n(48181),f=n(72279),p=n(62549),d=n(32238),y=n(32895),m=n(76486),T=2220446049250313e-31,v=2148532223,b=[0,0],S=[0,0];function g(e,t){var n,g;return 0===t||0===e||l(e)||c(e)?e:(p(b,e),e=b[0],t+=b[1],t+=d(e),t<u?f(0,e):t>a?e<0?i:r:(t<=s?(t+=52,g=T):g=1,y(S,e),n=S[0],n&=v,n|=t+o<<20,g*m(n,S[1])))}e.exports=g},7454:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(58868);e.exports=r},58868:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(88329),i=n(1287),o=n(53112),a=n(27311),s=n(59306),u=n(27915),l=n(99165),c=.6931471803691238,f=1.9082149292705877e-10,p=0x40000000000000,d=.3333333333333333,y=1048575,m=2146435072,T=1048576,v=1072693248;function b(e){var t,n,b,S,g,E,h,x,P,A,O,w;return 0===e?s:o(e)||e<0?NaN:(n=r(e),g=0,n<T&&(g-=54,e*=p,n=r(e)),n>=m?e+e:(g+=(n>>20)-a|0,n&=y,x=n+614244&1048576|0,e=i(e,n|x^v),g+=x>>20|0,h=e-1,(y&2+n)<3?0===h?0===g?0:g*c+g*f:(E=h*h*(.5-d*h),0===g?h-E:g*c-(E-g*f-h)):(A=h/(2+h),w=A*A,x=n-398458|0,O=w*w,P=440401-n|0,S=O*u(O),b=w*l(O),x|=P,E=b+S,x>0?(t=.5*h*h,0===g?h-(t-A*(t+E)):g*c-(t-(A*(t+E)+g*f)-h)):0===g?h-A*(h-E):g*c-(A*(h-E)-g*f-h))))}e.exports=b},27915:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}e.exports=t},99165:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}e.exports=t},3516:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(22791);e.exports=r},22791:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(64613),i=n(53112),o=n(59306),a=n(20982);function s(e,t){var n,s,u,l;if(n=arguments.length,2===n)return i(e)||i(t)?NaN:e===a||t===a?a:e===t&&0===e?r(e)?e:t:e>t?e:t;for(s=o,l=0;l<n;l++){if(u=arguments[l],i(u)||u===a)return u;(u>s||u===s&&0===u&&r(u))&&(s=u)}return s}e.exports=s},93991:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(45958);e.exports=r},82453:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(88329),i=n(2442),o=n(1287),a=n(27311),s=n(87655),u=1048575,l=1048576,c=1072693248,f=536870912,p=524288,d=20,y=9007199254740992,m=.9617966939259756,T=.9617967009544373,v=-7.028461650952758e-9,b=[1,1.5],S=[0,.5849624872207642],g=[0,1.350039202129749e-8];function E(e,t,n){var E,h,x,P,A,O,w,_,I,N,j,D,L,C,M,B,R,F,k,V,K,Y;return V=0,n<l&&(t*=y,V-=53,n=r(t)),V+=(n>>d)-a|0,K=n&u|0,n=K|c|0,K<=235662?Y=0:K<767610?Y=1:(Y=0,V+=1,n-=l),t=o(t,n),_=b[Y],F=t-_,k=1/(t+_),h=F*k,P=i(h,0),E=(n>>1|f)+p,E+=Y<<18,O=o(0,E),w=t-(O-_),A=k*(F-P*O-P*w),x=h*h,R=x*x*s(x),R+=A*(P+h),x=P*P,O=3+x+R,O=i(O,0),w=R-(O-3-x),F=P*O,k=A*O+w*h,N=F+k,N=i(N,0),j=k-(N-F),D=T*N,L=v*N+j*m+g[Y],I=S[Y],B=V,C=D+L+I+B,C=i(C,0),M=L-(C-B-I-D),e[0]=C,e[1]=M,e}e.exports=E},3117:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(2442),i=n(38942),o=1.4426950408889634,a=1.4426950216293335,s=1.9259629911266175e-8;function u(e,t){var n,u,l,c,f,p;return l=t-1,c=l*l*i(l),f=a*l,p=l*s-c*o,u=f+p,u=r(u,0),n=p-(u-f),e[0]=u,e[1]=n,e}e.exports=u},87655:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return 0===e?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+.20697501780033842*e))))}e.exports=t},7190:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return 0===e?.16666666666666602:.16666666666666602+e*(e*(6613756321437934e-20+e*(4.1381367970572385e-8*e-16533902205465252e-22))-.0027777777777015593)}e.exports=t},38942:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return 0===e?.5:.5+e*(.25*e-.3333333333333333)}e.exports=t},45958:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(53112),i=n(41579),o=n(48181),a=n(65370),s=n(37372),u=n(74401),l=n(32895),c=n(2442),f=n(83213),p=n(59306),d=n(20982),y=n(17209),m=n(88035),T=n(86129),v=n(82453),b=n(3117),S=n(84534),g=2147483647,E=1072693247,h=1105199104,x=1139802112,P=1083179008,A=1072693248,O=1083231232,w=3230714880,_=31,I=1e300,N=1e-300,j=8008566259537294e-32,D=[0,0],L=[0,0];function C(e,t){var n,M,B,R,F,k,V,K,Y,U,J,X,q,W,G,$;if(r(e)||r(t))return NaN;if(l(D,t),k=D[0],V=D[1],0===V){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return s(e);if(-.5===t)return 1/s(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return e*=e,e*e;if(o(t))return T(e,t)}if(l(D,e),R=D[0],F=D[1],0===F){if(0===R)return y(e,t);if(1===e)return 1;if(-1===e&&i(t))return-1;if(o(e))return e===p?C(-0,-t):t<0?0:d}if(e<0&&!1===a(t))return(e-e)/(e-e);if(B=u(e),n=R&g|0,M=k&g|0,K=R>>>_|0,Y=k>>>_|0,K=K&&i(t)?-1:1,M>h){if(M>x)return m(e,t);if(n<E)return 1===Y?K*I*I:K*N*N;if(n>A)return 0===Y?K*I*I:K*N*N;q=b(L,B)}else q=v(L,B,n);if(U=c(t,0),X=(t-U)*q[0]+t*q[1],J=U*q[0],W=X+J,l(D,W),G=f(D[0]),$=f(D[1]),G>=P){if(0!==(G-P|$))return K*I*I;if(X+j>W-J)return K*I*I}else if((G&g)>=O){if(0!==(G-w|$))return K*N*N;if(X<=W-J)return K*N*N}return W=S(G,J,X),K*W}e.exports=C},84534:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(88329),i=n(1287),o=n(2442),a=n(83213),s=n(33035),u=n(43856),l=n(27311),c=n(7190),f=2147483647,p=1048575,d=1048576,y=1071644672,m=20,T=.6931471824645996,v=-1.904654299957768e-9;function b(e,t,n){var b,S,g,E,h,x,P,A,O,w,_;return w=e&f|0,_=(w>>m)-l|0,O=0,w>y&&(O=e+(d>>_+1)>>>0,_=((O&f)>>m)-l|0,b=(O&~(p>>_))>>>0,g=i(0,b),O=(O&p|d)>>m-_>>>0,e<0&&(O=-O),t-=g),g=n+t,g=o(g,0),h=g*T,x=(n-(g-t))*u+g*v,A=h+x,P=x-(A-h),g=A*A,S=A-g*c(g),E=A*S/(S-2)-(P+A*P),A=1-(E-A),e=r(A),e=a(e),e+=O<<m>>>0,A=e>>m<=0?s(A,O):i(A,e),A}e.exports=b},17209:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(41579),i=n(72279),o=n(59306),a=n(20982);function s(e,t){return t===o?a:t===a?0:t>0?r(t)?e:0:r(t)?i(a,e):a}e.exports=s},88035:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=n(88329),i=2147483647,o=1072693247,a=1e300,s=1e-300;function u(e,t){var n,u;return u=r(e),n=u&i,n<=o?t<0?a*a:s*s:t>0?a*a:s*s}e.exports=u},86129:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(74401),i=n(20982);function o(e,t){return-1===e?(e-e)/(e-e):1===e?1:r(e)<1===(t===i)?0:i}e.exports=o},78770:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(61578);e.exports=r},61578:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(53112);function i(e){return 0===e||r(e)?e:e<0?-1:1}e.exports=i},37372:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(8927);e.exports=r},8927:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Math.sqrt;e.exports=t},82747:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(34692);e.exports=r},34692:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/e.exports=Number},32238:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(83541);e.exports=r},83541:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(88329),i=n(74503),o=n(27311);function a(e){var t=r(e);return t=(t&i)>>>20,t-o|0}e.exports=a},76486:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(87877);e.exports=r},47681:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i,o,a=n(49460);!0===a?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},e.exports=r},87877:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11235),i=n(8202),o=n(47681),a=new i(1),s=new r(a.buffer),u=o.HIGH,l=o.LOW;function c(e,t){return s[u]=e,s[l]=t,a[0]}e.exports=c},67473:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(49460);r=!0===i?1:0,e.exports=r},88329:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(68663);e.exports=r},68663:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11235),i=n(8202),o=n(67473),a=new i(1),s=new r(a.buffer);function u(e){return a[0]=e,s[o]}e.exports=u},62549:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(54749);e.exports=r},54749:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(67778);function i(e,t){return 1===arguments.length?r([0,0],e):r(e,t)}e.exports=i},67778:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(94856),i=n(48181),o=n(53112),a=n(74401),s=4503599627370496;function u(e,t){return o(t)||i(t)?(e[0]=t,e[1]=0,e):0!==t&&a(t)<r?(e[0]=t*s,e[1]=-52,e):(e[0]=t,e[1]=0,e)}e.exports=u},88789:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(49460);r=!0===i?1:0,e.exports=r},1287:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(48343);e.exports=r},48343:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11235),i=n(8202),o=n(88789),a=new i(1),s=new r(a.buffer);function u(e,t){return a[0]=e,s[o]=t>>>0,a[0]}e.exports=u},2442:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(28277);e.exports=r},47773:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(49460);r=!0===i?0:1,e.exports=r},28277:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11235),i=n(8202),o=n(47773),a=new i(1),s=new r(a.buffer);function u(e,t){return a[0]=e,s[o]=t>>>0,a[0]}e.exports=u},15112:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(84735),i=n(15133);"function"!==typeof r&&(r=i),e.exports=r},84735:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t="function"===typeof Math.fround?Math.fround:null;e.exports=t},15133:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(51211),i=new r(1);function o(e){return i[0]=e,i[0]}e.exports=o},32895:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(31711);e.exports=r},74256:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i,o,a=n(49460);!0===a?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},e.exports=r},31711:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(18375);function i(e,t){return 1===arguments.length?r([0,0],e):r(e,t)}e.exports=i},18375:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11235),i=n(8202),o=n(74256),a=new i(1),s=new r(a.buffer),u=o.HIGH,l=o.LOW;function c(e,t){return a[0]=t,e[0]=s[u],e[1]=s[l],e}e.exports=c},83213:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(84674);e.exports=r},84674:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return 0|e}e.exports=t},27389:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(14294),i=n(80497);function o(e,t,n){return n>.5?t-o(e,t,1-n):t*n<10?r(e,t,n):i(e,t,n)}e.exports=o},1671:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(93991),i=1/12,o=1/360,a=1/1260;function s(e){var t;switch(e){case 0:return.08106146679532726;case 1:return.04134069595540929;case 2:return.02767792568499834;case 3:return.02079067210376509;case 4:return.01664469118982119;case 5:return.01387612882307075;case 6:return.01189670994589177;case 7:return.01041126526197209;case 8:return.009255462182712733;case 9:return.00833056343336287;default:return e+=1,t=r(e,2),(i-(o-a/t)/t)/e}}e.exports=s},28593:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(44532),i=n(15249),o=n(62287),a=n(20906),s=n(83608),u=n(92043),l=n(14978),c=n(73962),f=n(53112),p=n(35004),d=n(15430),y=n(26376).factory,m=n(40060),T=n(54138),v=n(27389);function b(){var e,t,n,b,S,g;if(0===arguments.length)t=y();else if(1===arguments.length){if(e=arguments[0],!a(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(u(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y(e)}else{if(S=arguments[0],g=arguments[1],b=T(S,g),b)throw b;if(arguments.length>2){if(e=arguments[2],!a(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(u(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y(e)}else t=y()}return n=void 0===S?I:_,r(n,"NAME","binomial"),e&&e.prng?(r(n,"seed",null),r(n,"seedLength",null),o(n,"state",l(null),c),r(n,"stateLength",null),r(n,"byteLength",null),r(n,"toJSON",l(null)),r(n,"PRNG",t)):(i(n,"seed",E),i(n,"seedLength",h),o(n,"state",A,O),i(n,"stateLength",x),i(n,"byteLength",P),r(n,"toJSON",w),r(n,"PRNG",t),t=t.normalized),n;function E(){return t.seed}function h(){return t.seedLength}function x(){return t.stateLength}function P(){return t.byteLength}function A(){return t.state}function O(e){t.state=e}function w(){var e={type:"PRNG"};return e.name=n.NAME,e.state=m(t.state),e.params=void 0===S?[]:[S,g],e}function _(){return v(t,S,g)}function I(e,n){return f(e)||f(n)||!p(e)||!d(n)?NaN:v(t,e,n)}}e.exports=b},38242:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(35801),o=n(28593);r(i,"factory",o),e.exports=i},35801:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(28593),i=r();e.exports=i},14294:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e,t,n){var r,i=0;for(r=0;r<t;r++)e()<=n&&(i+=1);return i}e.exports=t},80497:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(36196),i=n(78770),o=n(37372),a=n(74401),s=n(7454),u=n(1671),l=1/6;function c(e,t,n){var c,f,p,d,y,m,T,v,b,S,g,E,h,x,P,A,O,w,_,I,N,j,D,L,C,M;I=r((t+1)*n),T=t-I+1,N=1-n,j=n/N,v=(t+1)*j,d=t*n*N,p=o(d),x=1.15+2.53*p,h=.0248*x-.0873+.01*n,P=t*n+.5,c=(2.83+5.1/x)*p,E=.92-4.2/x,f=.86*E,O=(I+.5)*s((I+1)/(j*T)),O+=u(I)+u(t-I);while(1){if(C=e(),C<=f)return L=C/E-.43,j=L*(2*h/(.5-a(L))+x)+P,r(j);if(C>=E?L=e()-.5:(L=C/E-.93,L=.5*i(L)-L,C=E*e()),b=.5-a(L),_=r(L*(2*h/b+x)+P),!(_<0||_>t))if(C=C*c/(h/(b*b)+x),S=a(_-I),S>15){if(C=s(C),y=S/d,m=(S/3+.625)*S,m+=l,m/=d,y*=m+.5,D=-S*S/(2*d),C<D-y)return _;if(C<=D+y&&(g=t-_+1,M=O+(t+1)*s(T/g),M+=(_+.5)*s(g*j/(_+1)),M+=-(u(_)+u(t-_)),C<=M))return _}else{if(A=1,I<_)for(w=I;w<=_;w++)A*=v/w-j;else if(I>_)for(w=_;w<=I;w++)C*=v/w-j;if(C<=A)return _}}}e.exports=c},54138:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(21736).isPrimitive,i=n(2671).isPrimitive;function o(e,t){return r(e)?i(t)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+t+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+t+"`.")}e.exports=o},24081:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code and copyright notice are from the [source implementation]{@link http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
*
*   1. Redistributions of source code must retain the above copyright
*      notice, this list of conditions and the following disclaimer.
*
*   2. Redistributions in binary form must reproduce the above copyright
*      notice, this list of conditions and the following disclaimer in the
*      documentation and/or other materials provided with the distribution.
*
*   3. The names of its contributors may not be used to endorse or promote
*      products derived from this software without specific prior written
*      permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/n(21703);var r=n(44532),i=n(15249),o=n(62287),a=n(92043),s=n(20906),u=n(87247),l=n(11327),c=n(80248).isPrimitive,f=n(21736).isPrimitive,p=n(90366),d=n(74201),y=n(11235),m=n(3516),T=n(28922),v=n(31851),b=n(40060),S=n(16770),g=624,E=397,h=d>>>0,x=19650218,P=2147483648,A=2147483647,O=1812433253,w=1664525,_=1566083941,I=2636928640,N=4022730752,j=2567483615,D=[0,j>>>0],L=1/(p+1),C=67108864,M=2147483648,B=1,R=p*L,F=1,k=3,V=2,K=g+3,Y=g+5,U=g+6;function J(e,t){var n;return n=t?"option":"argument",e.length<U+1?new RangeError("invalid "+n+". `state` array has insufficient length."):e[0]!==F?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: "+F+". Actual: "+e[0]+"."):e[1]!==k?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: "+k+". Actual: "+e[1]+"."):e[V]!==g?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+g+". Actual: "+e[V]+"."):1!==e[K]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+e[K]+"."):e[Y]!==e.length-U?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(e.length-U)+". Actual: "+e[Y]+"."):null}function X(e,t,n){var r;for(e[0]=n>>>0,r=1;r<t;r++)n=e[r-1]>>>0,n=(n^n>>>30)>>>0,e[r]=T(n,O)+r>>>0;return e}function q(e,t,n,r){var i,o,a,s;for(o=1,a=0,s=m(t,r);s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=T(i,w)>>>0,e[o]=(e[o]>>>0^i)+n[a]+a>>>0,o+=1,a+=1,o>=t&&(e[0]=e[t-1],o=1),a>=r&&(a=0);for(s=t-1;s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=T(i,_)>>>0,e[o]=(e[o]>>>0^i)-o>>>0,o+=1,o>=t&&(e[0]=e[t-1],o=1);return e[0]=M,e}function W(e){var t,n,r,i;for(i=g-E,n=0;n<i;n++)t=e[n]&P|e[n+1]&A,e[n]=e[n+E]^t>>>1^D[t&B];for(r=g-1;n<r;n++)t=e[n]&P|e[n+1]&A,e[n]=e[n-i]^t>>>1^D[t&B];return t=e[r]&P|e[0]&A,e[r]=e[E-1]^t>>>1^D[t&B],e}function G(e){var t,n,p,m,T,E;if(p={},arguments.length){if(!s(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(a(e,"copy")&&(p.copy=e.copy,!c(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.");if(a(e,"state")){if(n=e.state,p.state=!0,!l(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(E=J(n,!0),E)throw E;!1===p.copy?t=n:(t=new y(n.length),v(n.length,n,1,t,1)),n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,g),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,n[Y])}if(void 0===m)if(a(e,"seed"))if(m=e.seed,p.seed=!0,f(m)){if(m>h)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");m>>>=0}else{if(!1===u(m)||m.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");if(1===m.length){if(m=m[0],!f(m))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");if(m>h)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");m>>>=0}else T=m.length,t=new y(U+T),t[0]=F,t[1]=k,t[V]=g,t[K]=1,t[K+1]=g,t[Y]=T,v.ndarray(T,m,1,0,t,1,Y+1),n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,g),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,T),n=X(n,g,x),n=q(n,g,m,T)}else m=S()>>>0}else m=S()>>>0;return void 0===n&&(t=new y(U+1),t[0]=F,t[1]=k,t[V]=g,t[K]=1,t[K+1]=g,t[Y]=1,t[Y+1]=m,n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,g),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,1),n=X(n,g,m)),r(M,"NAME","mt19937"),i(M,"seed",P),i(M,"seedLength",A),o(M,"state",_,j),i(M,"stateLength",O),i(M,"byteLength",w),r(M,"toJSON",D),r(M,"MIN",1),r(M,"MAX",d),r(M,"normalized",B),r(B,"NAME",M.NAME),i(B,"seed",P),i(B,"seedLength",A),o(B,"state",_,j),i(B,"stateLength",O),i(B,"byteLength",w),r(B,"toJSON",D),r(B,"MIN",0),r(B,"MAX",R),M;function P(){var e=t[Y];return v(e,m,1,new y(e),1)}function A(){return t[Y]}function O(){return t.length}function w(){return t.byteLength}function _(){var e=t.length;return v(e,t,1,new y(e),1)}function j(e){var r;if(!l(e))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+e+"`.");if(r=J(e,!1),r)throw r;!1===p.copy?p.state&&e.length===t.length?v(e.length,e,1,t,1):(t=e,p.state=!0):(e.length!==t.length&&(t=new y(e.length)),v(e.length,e,1,t,1)),n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,g),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,t[Y])}function D(){var e={type:"PRNG"};return e.name=M.NAME,e.state=b(t),e.params=[],e}function M(){var e,r;return r=t[K+1],r>=g&&(n=W(n),r=0),e=n[r],t[K+1]=r+1,e^=e>>>11,e^=e<<7&I,e^=e<<15&N,e^=e>>>18,e>>>0}function B(){var e=M()>>>5,t=M()>>>6;return(e*C+t)*L}}e.exports=G},26376:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(17062),o=n(24081);r(i,"factory",o),e.exports=i},17062:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(24081),i=n(16770),o=r({seed:i()});e.exports=o},16770:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(74201),i=n(36196),o=r-1;function a(){var e=i(1+o*Math.random());return e>>>0}e.exports=a},9635:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44532),i=n(58751),o=n(21236);r(i,"REGEXP",o),e.exports=i},58751:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){return/^\s*function\s*([^(]*)/i}e.exports=t},21236:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(58751),i=r();e.exports=i},25693:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(72161);e.exports=r},72161:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(8202);function i(e,t){return new r(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}e.exports=i},99006:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(91816);e.exports=r},91816:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(51211);function i(e,t){return new r(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}e.exports=i},579:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(74224);e.exports=r},74224:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(98713),i=r()?Symbol.iterator:null;e.exports=i},61901:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return t;function t(){return e}}e.exports=t},14978:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(61901);e.exports=r},69276:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(36395);e.exports=r},36395:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63762),i=n(9635).REGEXP,o=n(46829);function a(e){var t,n,a;if(n=r(e).slice(8,-1),("Object"===n||"Error"===n)&&e.constructor){if(a=e.constructor,"string"===typeof a.name)return a.name;if(t=i.exec(a.toString()),t)return t[1]}return o(e)?"Buffer":n}e.exports=a},15249:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(73147);e.exports=r},73147:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(31265);function i(e,t,n){r(e,t,{configurable:!1,enumerable:!1,get:n})}e.exports=i},44532:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(15507);e.exports=r},15507:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(31265);function i(e,t,n){r(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}e.exports=i},62287:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(19181);e.exports=r},19181:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(31265);function i(e,t,n,i){r(e,t,{configurable:!1,enumerable:!1,get:n,set:i})}e.exports=i},7866:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Object.defineProperty;e.exports=t},77237:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t="function"===typeof Object.defineProperty?Object.defineProperty:null;e.exports=t},99408:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(77237);function i(){try{return r({},"x",{}),!0}catch(e){return!1}}e.exports=i},31265:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(99408),o=n(7866),a=n(96773);r=i()?o:a,e.exports=r},96773:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=Object.prototype,i=r.toString,o=r.__defineGetter__,a=r.__defineSetter__,s=r.__lookupGetter__,u=r.__lookupSetter__;function l(e,t,n){var l,c,f,p;if("object"!==typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!==typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if(c="value"in n,c&&(s.call(e,t)||u.call(e,t)?(l=e.__proto__,e.__proto__=r,delete e[t],e[t]=n.value,e.__proto__=l):e[t]=n.value),f="get"in n,p="set"in n,c&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,t,n.get),p&&a&&a.call(e,t,n.set),e}e.exports=l},21019:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(83608),i=n(3262),o=n(9635).REGEXP,a=i();function s(e){if(!1===r(e))throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return a?e.name:o.exec(e.toString())[1]}e.exports=s},52546:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(21019);e.exports=r},66646:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(83608),o=n(38858),a=n(47656);r=i(Object.getPrototypeOf)?o:a,e.exports=r},2488:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(66646);function i(e){return null===e||void 0===e?null:(e=Object(e),r(e))}e.exports=i},19034:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(2488);e.exports=r},38858:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Object.getPrototypeOf;e.exports=t},47656:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(63762),i=n(71260);function o(e){var t=i(e);return t||null===t?t:"[object Function]"===r(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null}e.exports=o},71260:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(e){return e.__proto__}e.exports=t},89493:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){return new Function("return this;")()}e.exports=t},39262:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="object"===typeof n.g?n.g:null;e.exports=r},1752:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(91343);e.exports=r},91343:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(80248).isPrimitive,i=n(89493),o=n(54590),a=n(21698),s=n(39262);function u(e){if(arguments.length){if(!r(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return i()}if(o)return o;if(a)return a;if(s)return s;throw new Error("unexpected error. Unable to resolve global object.")}e.exports=u},54590:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t="object"===typeof self?self:null;e.exports=t},21698:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t="object"===typeof window?window:null;e.exports=t},63762:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=n(75259),o=n(45524),a=n(95831);r=i()?a:o,e.exports=r},45524:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(9256);function i(e){return r.call(e)}e.exports=i},95831:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(92043),i=n(67467),o=n(9256);function a(e){var t,n,a;if(null===e||void 0===e)return o.call(e);n=e[i],t=r(e,i);try{e[i]=void 0}catch(s){return o.call(e)}return a=o.call(e),t?e[i]=n:delete e[i],a}e.exports=a},9256:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=Object.prototype.toString;e.exports=t},67467:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t="function"===typeof Symbol?Symbol.toStringTag:"";e.exports=t},73962:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(11979);e.exports=r},11979:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t(){}e.exports=t},82845:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69141),i=n(78069),o=n(69478);function a(){return"function"===typeof r||"object"===typeof o||"function"===typeof i}e.exports=a},78069:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(1752),i=r(),o=i.document&&i.document.childNodes;e.exports=o},69141:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t=/./;e.exports=t},69478:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(48675),n(3462);var r=Int8Array;e.exports=r},58508:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(82845),i=n(89494),o=n(66171),a=r()?o:i;e.exports=a},66171:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69276);function i(e){return r(e).toLowerCase()}e.exports=i},89494:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(69276);function i(e){var t;return null===e?"null":(t=typeof e,"object"===t?r(e).toLowerCase():t)}e.exports=i},44870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return o},Fl:function(){return Ye},IU:function(){return _e},Jd:function(){return x},PG:function(){return Pe},Um:function(){return Ee},WL:function(){return Ve},X$:function(){return w},X3:function(){return we},Xl:function(){return Ie},dq:function(){return Ce},iH:function(){return Me},j:function(){return A},lk:function(){return P},qj:function(){return ge},qq:function(){return S},yT:function(){return Oe}});var r=n(87139);let i;class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}const s=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&y)>0,l=e=>(e.n&y)>0,c=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=y},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~y,i.n&=~y}t.length=n}},p=new WeakMap;let d=0,y=1;const m=30;let T;const v=Symbol(""),b=Symbol("");class S{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=T,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=T,T=this,E=!0,y=1<<++d,d<=m?c(this):g(this),this.fn()}finally{d<=m&&f(this),y=1<<--d,T=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){T===this?this.deferStop=!0:this.active&&(g(this),this.onStop&&this.onStop(),this.active=!1)}}function g(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const h=[];function x(){h.push(E),E=!1}function P(){const e=h.pop();E=void 0===e||e}function A(e,t,n){if(E&&T){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=s());const i=void 0;O(r,i)}}function O(e,t){let n=!1;d<=m?l(e)||(e.n|=y,n=!u(e)):n=!e.has(T),n&&(e.add(T),T.deps.push(e))}function w(e,t,n,i,o,a){const u=p.get(e);if(!u)return;let l=[];if("clear"===t)l=[...u.values()];else if("length"===n&&(0,r.kJ)(e))u.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(u.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(u.get("length")):(l.push(u.get(v)),(0,r._N)(e)&&l.push(u.get(b)));break;case"delete":(0,r.kJ)(e)||(l.push(u.get(v)),(0,r._N)(e)&&l.push(u.get(b)));break;case"set":(0,r._N)(e)&&l.push(u.get(v));break}if(1===l.length)l[0]&&_(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);_(s(e))}}function _(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&I(r,t);for(const r of n)r.computed||I(r,t)}function I(e,t){(e!==T||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),j=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=R(),L=R(!1,!0),C=R(!0),M=B();function B(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=_e(this);for(let t=0,i=this.length;t<i;t++)A(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(_e)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){x();const n=_e(this)[t].apply(this,e);return P(),n}})),e}function R(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:Te:t?me:ye).get(n))return n;const a=(0,r.kJ)(n);if(!e&&a&&(0,r.RI)(M,i))return Reflect.get(M,i,o);const s=Reflect.get(n,i,o);return((0,r.yk)(i)?j.has(i):N(i))?s:(e||A(n,"get",i),t?s:Ce(s)?a&&(0,r.S0)(i)?s:s.value:(0,r.Kn)(s)?e?he(s):ge(s):s)}}const F=V(),k=V(!0);function V(e=!1){return function(t,n,i,o){let a=t[n];if(Ae(a)&&Ce(a)&&!Ce(i))return!1;if(!e&&!Ae(i)&&(Oe(i)||(i=_e(i),a=_e(a)),!(0,r.kJ)(t)&&Ce(a)&&!Ce(i)))return a.value=i,!0;const s=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),u=Reflect.set(t,n,i,o);return t===_e(o)&&(s?(0,r.aU)(i,a)&&w(t,"set",n,i,a):w(t,"add",n,i)),u}}function K(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&w(e,"delete",t,void 0,i),o}function Y(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&j.has(t)||A(e,"has",t),n}function U(e){return A(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const J={get:D,set:F,deleteProperty:K,has:Y,ownKeys:U},X={get:C,set(e,t){return!0},deleteProperty(e,t){return!0}},q=(0,r.l7)({},J,{get:L,set:k}),W=e=>e,G=e=>Reflect.getPrototypeOf(e);function $(e,t,n=!1,r=!1){e=e["__v_raw"];const i=_e(e),o=_e(t);n||(t!==o&&A(i,"get",t),A(i,"get",o));const{has:a}=G(i),s=r?W:n?je:Ne;return a.call(i,t)?s(e.get(t)):a.call(i,o)?s(e.get(o)):void(e!==i&&e.get(t))}function z(e,t=!1){const n=this["__v_raw"],r=_e(n),i=_e(e);return t||(e!==i&&A(r,"has",e),A(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function H(e,t=!1){return e=e["__v_raw"],!t&&A(_e(e),"iterate",v),Reflect.get(e,"size",e)}function Q(e){e=_e(e);const t=_e(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),w(t,"add",e,e)),this}function Z(e,t){t=_e(t);const n=_e(this),{has:i,get:o}=G(n);let a=i.call(n,e);a||(e=_e(e),a=i.call(n,e));const s=o.call(n,e);return n.set(e,t),a?(0,r.aU)(t,s)&&w(n,"set",e,t,s):w(n,"add",e,t),this}function ee(e){const t=_e(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=_e(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,a=t.delete(e);return i&&w(t,"delete",e,void 0,o),a}function te(){const e=_e(this),t=0!==e.size,n=void 0,r=e.clear();return t&&w(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],a=_e(o),s=t?W:e?je:Ne;return!e&&A(a,"iterate",v),o.forEach(((e,t)=>n.call(r,s(e),s(t),i)))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],a=_e(o),s=(0,r._N)(a),u="entries"===e||e===Symbol.iterator&&s,l="keys"===e&&s,c=o[e](...i),f=n?W:t?je:Ne;return!t&&A(a,"iterate",l?b:v),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:u?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return $(this,e)},get size(){return H(this)},has:z,add:Q,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return $(this,e,!1,!0)},get size(){return H(this)},has:z,add:Q,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return $(this,e,!0)},get size(){return H(this,!0)},has(e){return z.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return $(this,e,!0,!0)},get size(){return H(this,!0)},has(e){return z.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[ae,se,ue,le]=oe();function ce(e,t){const n=t?e?le:ue:e?se:ae;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const fe={get:ce(!1,!1)},pe={get:ce(!1,!0)},de={get:ce(!0,!1)};const ye=new WeakMap,me=new WeakMap,Te=new WeakMap,ve=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Se(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be((0,r.W7)(e))}function ge(e){return Ae(e)?e:xe(e,!1,J,fe,ye)}function Ee(e){return xe(e,!1,q,pe,me)}function he(e){return xe(e,!0,X,de,Te)}function xe(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=o.get(e);if(a)return a;const s=Se(e);if(0===s)return e;const u=new Proxy(e,2===s?i:n);return o.set(e,u),u}function Pe(e){return Ae(e)?Pe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Oe(e){return!(!e||!e["__v_isShallow"])}function we(e){return Pe(e)||Ae(e)}function _e(e){const t=e&&e["__v_raw"];return t?_e(t):e}function Ie(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?ge(e):e,je=e=>(0,r.Kn)(e)?he(e):e;function De(e){E&&T&&(e=_e(e),O(e.dep||(e.dep=s())))}function Le(e,t){e=_e(e),e.dep&&_(e.dep)}function Ce(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Be(e,!1)}function Be(e,t){return Ce(e)?e:new Re(e,t)}class Re{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:_e(e),this._value=t?e:Ne(e)}get value(){return De(this),this._value}set value(e){e=this.__v_isShallow?e:_e(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ne(e),Le(this,e))}}function Fe(e){return Ce(e)?e.value:e}const ke={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ce(i)&&!Ce(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return Pe(e)?e:new Proxy(e,ke)}class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new S(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=_e(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ye(e,t,n=!1){let i,o;const a=(0,r.mf)(e);a?(i=e,o=r.dG):(i=e.get,o=e.set);const s=new Ke(i,o,a||!o,n);return s}},73396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},Ah:function(){return Ie},FN:function(){return sn},HY:function(){return _t},P$:function(){return ae},Q6:function(){return pe},U2:function(){return ue},Us:function(){return ht},Wm:function(){return qt},Y8:function(){return re},YP:function(){return Q},_:function(){return Xt},bv:function(){return Ae},h:function(){return Pn},iD:function(){return kt},ic:function(){return we},nK:function(){return fe},wg:function(){return Ct},wy:function(){return Ce}});n(26699),n(21703);var r=n(44870),i=n(87139);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){s(o,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const a=o(e,t,n,r);return a&&(0,i.tI)(a)&&a.catch((e=>{s(e,t,n)})),a}const u=[];for(let i=0;i<e.length;i++)u.push(a(e[i],t,n,r));return u}function s(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,a=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,a))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void o(s,null,10,[e,i,a])}u(e,n,i,r)}function u(e,t,n,r=!0){console.error(e)}let l=!1,c=!1;const f=[];let p=0;const d=[];let y=null,m=0;const T=[];let v=null,b=0;const S=Promise.resolve();let g=null,E=null;function h(e){const t=g||S;return e?t.then(this?e.bind(this):e):t}function x(e){let t=p+1,n=f.length;while(t<n){const r=t+n>>>1,i=D(f[r]);i<e?t=r+1:n=r}return t}function P(e){f.length&&f.includes(e,l&&e.allowRecurse?p+1:p)||e===E||(null==e.id?f.push(e):f.splice(x(e.id),0,e),A())}function A(){l||c||(c=!0,g=S.then(L))}function O(e){const t=f.indexOf(e);t>p&&f.splice(t,1)}function w(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),A()}function _(e){w(e,y,d,m)}function I(e){w(e,v,T,b)}function N(e,t=null){if(d.length){for(E=t,y=[...new Set(d)],d.length=0,m=0;m<y.length;m++)y[m]();y=null,m=0,E=null,N(e,t)}}function j(e){if(N(),T.length){const e=[...new Set(T)];if(T.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>D(e)-D(t))),b=0;b<v.length;b++)v[b]();v=null,b=0}}const D=e=>null==e.id?1/0:e.id;function L(e){c=!1,l=!0,N(e),f.sort(((e,t)=>D(e)-D(t)));i.dG;try{for(p=0;p<f.length;p++){const e=f[p];e&&!1!==e.active&&o(e,null,14)}}finally{p=0,f.length=0,j(e),l=!1,g=null,(f.length||d.length||T.length)&&L(e)}}new Set;new Map;function C(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const s=t.startsWith("update:"),u=s&&t.slice(7);if(u&&u in r){const e=`${"modelValue"===u?"model":u}Modifiers`,{number:t,trim:a}=r[e]||i.kT;a&&(o=n.map((e=>e.trim()))),t&&(o=n.map(i.He))}let l;let c=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!c&&s&&(c=r[l=(0,i.hR)((0,i.rs)(t))]),c&&a(c,e,6,o);const f=r[l+"Once"];if(f){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,a(f,e,6,o)}}function M(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const a=e.emits;let s={},u=!1;if(!(0,i.mf)(e)){const r=e=>{const n=M(e,t,!0);n&&(u=!0,(0,i.l7)(s,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||u?((0,i.kJ)(a)?a.forEach((e=>s[e]=null)):(0,i.l7)(s,a),r.set(e,s),s):(r.set(e,null),null)}function B(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let R=null,F=null;function k(e){const t=R;return R=e,F=e&&e.type.__scopeId||null,t}function V(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Rt(-1);const i=k(t),o=e(...n);return k(i),r._d&&Rt(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function K(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:a,propsOptions:[u],slots:l,attrs:c,emit:f,render:p,renderCache:d,data:y,setupState:m,ctx:T,inheritAttrs:v}=e;let b,S;const g=k(e);try{if(4&n.shapeFlag){const e=o||r;b=Ht(p.call(e,e,d,a,m,y,T)),S=c}else{const e=t;0,b=Ht(e.length>1?e(a,{attrs:c,slots:l,emit:f}):e(a,null)),S=t.props?c:Y(c)}}catch(h){Dt.length=0,s(h,e,1),b=qt(Nt)}let E=b;if(S&&!1!==v){const e=Object.keys(S),{shapeFlag:t}=E;e.length&&7&t&&(u&&e.some(i.tR)&&(S=U(S,u)),E=$t(E,S))}return n.dirs&&(E=$t(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,k(g),b}const Y=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function J(e,t,n){const{props:r,children:i,component:o}=e,{props:a,children:s,patchFlag:u}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&u>=0))return!(!i&&!s||s&&s.$stable)||r!==a&&(r?!a||X(r,a,l):!!a);if(1024&u)return!0;if(16&u)return r?X(r,a,l):!!a;if(8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(a[n]!==r[n]&&!B(l,n))return!0}}return!1}function X(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!B(n,o))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const W=e=>e.__isSuspense;function G(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):I(e)}function $(e,t){if(an){let n=an.provides;const r=an.parent&&an.parent.provides;r===n&&(n=an.provides=Object.create(r)),n[e]=t}else 0}function z(e,t,n=!1){const r=an||R;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const H={};function Q(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:s,flush:u,onTrack:l,onTrigger:c}=i.kT){const f=an;let p,d,y=!1,m=!1;if((0,r.dq)(e)?(p=()=>e.value,y=(0,r.yT)(e)):(0,r.PG)(e)?(p=()=>e,s=!0):(0,i.kJ)(e)?(m=!0,y=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),p=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?o(e,f,2):void 0))):p=(0,i.mf)(e)?t?()=>o(e,f,2):()=>{if(!f||!f.isUnmounted)return d&&d(),a(e,f,3,[T])}:i.dG,t&&s){const e=p;p=()=>ne(e())}let T=e=>{d=g.onStop=()=>{o(e,f,4)}};if(dn)return T=i.dG,t?n&&a(t,f,3,[p(),m?[]:void 0,T]):p(),i.dG;let v=m?[]:H;const b=()=>{if(g.active)if(t){const e=g.run();(s||y||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(d&&d(),a(t,f,3,[e,v===H?void 0:v,T]),v=e)}else g.run()};let S;b.allowRecurse=!!t,S="sync"===u?b:"post"===u?()=>Et(b,f&&f.suspense):()=>_(b);const g=new r.qq(p,S);return t?n?b():v=g.run():"post"===u?Et(g.run.bind(g),f&&f.suspense):g.run(),()=>{g.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,g)}}function ee(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let a;(0,i.mf)(t)?a=t:(a=t.handler,n=t);const s=an;un(this);const u=Z(o,a.bind(r),n);return s?un(s):ln(),u}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ae((()=>{e.isMounted=!0})),_e((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],oe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=sn(),i=re();let o;return()=>{const a=t.default&&pe(t.default(),!0);if(!a||!a.length)return;let s=a[0];if(a.length>1){let e=!1;for(const t of a)if(t.type!==Nt){0,s=t,e=!0;break}}const u=(0,r.IU)(e),{mode:l}=u;if(i.isLeaving)return le(s);const c=ce(s);if(!c)return le(s);const f=ue(c,u,i,n);fe(c,f);const p=n.subTree,d=p&&ce(p);let y=!1;const{getTransitionKey:m}=c.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,y=!0)}if(d&&d.type!==Nt&&(!Kt(c,d)||y)){const e=ue(d,u,i,n);if(fe(d,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},le(s);"in-out"===l&&c.type!==Nt&&(e.delayLeave=(e,t,n)=>{const r=se(i,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=n})}return s}}},ae=oe;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ue(e,t,n,r){const{appear:o,mode:s,persisted:u=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:d,onLeave:y,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:v,onAppear:b,onAfterAppear:S,onAppearCancelled:g}=t,E=String(e.key),h=se(n,e),x=(e,t)=>{e&&a(e,r,9,t)},P=(e,t)=>{const n=t[1];x(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},A={mode:s,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=v||l}t._leaveCb&&t._leaveCb(!0);const i=h[E];i&&Kt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),x(r,[t])},enter(e){let t=c,r=f,i=p;if(!n.isMounted){if(!o)return;t=b||c,r=S||f,i=g||p}let a=!1;const s=e._enterCb=t=>{a||(a=!0,x(t?i:r,[e]),A.delayedLeave&&A.delayedLeave(),e._enterCb=void 0)};t?P(t,[e,s]):s()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();x(d,[t]);let o=!1;const a=t._leaveCb=n=>{o||(o=!0,r(),x(n?T:m,[t]),t._leaveCb=void 0,h[i]===e&&delete h[i])};h[i]=e,y?P(y,[t,a]):a()},clone(e){return ue(e,t,n,r)}};return A}function le(e){if(ye(e))return e=$t(e),e.children=null,e}function ce(e){return ye(e)?e.children?e.children[0]:void 0:e}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let a=e[o];const s=null==n?a.key:String(n)+String(null!=a.key?a.key:o);a.type===_t?(128&a.patchFlag&&i++,r=r.concat(pe(a.children,t,s))):(t||a.type!==Nt)&&r.push(null!=s?$t(a,{key:s}):a)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const de=e=>!!e.type.__asyncLoader;const ye=e=>e.type.__isKeepAlive;RegExp,RegExp;function me(e,t){return(0,i.kJ)(e)?e.some((e=>me(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Te(e,t){be(e,"a",t)}function ve(e,t){be(e,"da",t)}function be(e,t,n=an){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(he(t,r,n),n){let e=n.parent;while(e&&e.parent)ye(e.parent.vnode)&&Se(r,t,n,e),e=e.parent}}function Se(e,t,n,r){const o=he(t,e,r,!0);Ie((()=>{(0,i.Od)(r[t],o)}),n)}function ge(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ee(e){return 128&e.shapeFlag?e.ssContent:e}function he(e,t,n=an,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),un(n);const o=a(t,n,e,i);return ln(),(0,r.lk)(),o});return i?o.unshift(s):o.push(s),s}}const xe=e=>(t,n=an)=>(!dn||"sp"===e)&&he(e,t,n),Pe=xe("bm"),Ae=xe("m"),Oe=xe("bu"),we=xe("u"),_e=xe("bum"),Ie=xe("um"),Ne=xe("sp"),je=xe("rtg"),De=xe("rtc");function Le(e,t=an){he("ec",e,t)}function Ce(e,t){const n=R;if(null===n)return e;const r=gn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[e,n,s,u=i.kT]=t[a];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:s,modifiers:u})}return e}function Me(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let u=0;u<o.length;u++){const l=o[u];s&&(l.oldValue=s[u].value);let c=l.dir[i];c&&((0,r.Jd)(),a(c,n,8,[e.el,l,e,t]),(0,r.lk)())}}const Be=Symbol();const Re=e=>e?cn(e)?gn(e)||e.proxy:Re(e.parent):null,Fe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Re(e.parent),$root:e=>Re(e.root),$emit:e=>e.emit,$options:e=>Xe(e),$forceUpdate:e=>e.f||(e.f=()=>P(e.update)),$nextTick:e=>e.n||(e.n=h.bind(e.proxy)),$watch:e=>ee.bind(e)}),ke={get({_:e},t){const{ctx:n,setupState:o,data:a,props:s,accessCache:u,type:l,appContext:c}=e;let f;if("$"!==t[0]){const r=u[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return a[t];case 4:return n[t];case 3:return s[t]}else{if(o!==i.kT&&(0,i.RI)(o,t))return u[t]=1,o[t];if(a!==i.kT&&(0,i.RI)(a,t))return u[t]=2,a[t];if((f=e.propsOptions[0])&&(0,i.RI)(f,t))return u[t]=3,s[t];if(n!==i.kT&&(0,i.RI)(n,t))return u[t]=4,n[t];Ve&&(u[t]=0)}}const p=Fe[t];let d,y;return p?("$attrs"===t&&(0,r.j)(e,"get",t),p(e)):(d=l.__cssModules)&&(d=d[t])?d:n!==i.kT&&(0,i.RI)(n,t)?(u[t]=4,n[t]):(y=c.config.globalProperties,(0,i.RI)(y,t)?y[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:a}=e;return o!==i.kT&&(0,i.RI)(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:a}},s){let u;return!!n[s]||e!==i.kT&&(0,i.RI)(e,s)||t!==i.kT&&(0,i.RI)(t,s)||(u=a[0])&&(0,i.RI)(u,s)||(0,i.RI)(r,s)||(0,i.RI)(Fe,s)||(0,i.RI)(o.config.globalProperties,s)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ve=!0;function Ke(e){const t=Xe(e),n=e.proxy,o=e.ctx;Ve=!1,t.beforeCreate&&Ue(t.beforeCreate,e,"bc");const{data:a,computed:s,methods:u,watch:l,provide:c,inject:f,created:p,beforeMount:d,mounted:y,beforeUpdate:m,updated:T,activated:v,deactivated:b,beforeDestroy:S,beforeUnmount:g,destroyed:E,unmounted:h,render:x,renderTracked:P,renderTriggered:A,errorCaptured:O,serverPrefetch:w,expose:_,inheritAttrs:I,components:N,directives:j,filters:D}=t,L=null;if(f&&Ye(f,o,L,e.appContext.config.unwrapInjectedRef),u)for(const r in u){const e=u[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(a){0;const t=a.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ve=!0,s)for(const r in s){const e=s[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const a=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,u=xn({get:t,set:a});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:e=>u.value=e})}if(l)for(const r in l)Je(l[r],o,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{$(t,e[t])}))}function C(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(p&&Ue(p,e,"c"),C(Pe,d),C(Ae,y),C(Oe,m),C(we,T),C(Te,v),C(ve,b),C(Le,O),C(De,P),C(je,A),C(_e,g),C(Ie,h),C(Ne,w),(0,i.kJ)(_))if(_.length){const t=e.exposed||(e.exposed={});_.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});x&&e.render===i.dG&&(e.render=x),null!=I&&(e.inheritAttrs=I),N&&(e.components=N),j&&(e.directives=j)}function Ye(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=ze(e));for(const a in e){const n=e[a];let s;s=(0,i.Kn)(n)?"default"in n?z(n.from||a,n.default,!0):z(n.from||a):z(n),(0,r.dq)(s)&&o?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[a]=s}}function Ue(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,r){const o=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Q(o,n)}else if((0,i.mf)(e))Q(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Je(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Q(o,r,e)}else 0}function Xe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,s=o.get(t);let u;return s?u=s:i.length||n||r?(u={},i.length&&i.forEach((e=>qe(u,e,a,!0))),qe(u,t,a)):u=t,o.set(t,u),u}function qe(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&qe(e,o,n,!0),i&&i.forEach((t=>qe(e,t,n,!0)));for(const a in t)if(r&&"expose"===a);else{const r=We[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const We={data:Ge,props:Qe,emits:Qe,methods:Qe,computed:Qe,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Qe,directives:Qe,watch:Ze,provide:Ge,inject:$e};function Ge(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function $e(e,t){return Qe(ze(e),ze(t))}function ze(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function He(e,t){return e?[...new Set([].concat(e,t))]:t}function Qe(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Ze(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=He(e[r],t[r]);return n}function et(e,t,n,o=!1){const a={},s={};(0,i.Nj)(s,Yt,1),e.propsDefaults=Object.create(null),nt(e,t,a,s);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);n?e.props=o?a:(0,r.Um)(a):e.type.props?e.props=a:e.props=s,e.attrs=s}function tt(e,t,n,o){const{props:a,attrs:s,vnode:{patchFlag:u}}=e,l=(0,r.IU)(a),[c]=e.propsOptions;let f=!1;if(!(o||u>0)||16&u){let r;nt(e,t,a,s)&&(f=!0);for(const o in l)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(a[o]=rt(c,l,o,void 0,e,!0)):delete a[o]);if(s!==l)for(const e in s)t&&(0,i.RI)(t,e)||(delete s[e],f=!0)}else if(8&u){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(B(e.emitsOptions,o))continue;const u=t[o];if(c)if((0,i.RI)(s,o))u!==s[o]&&(s[o]=u,f=!0);else{const t=(0,i._A)(o);a[t]=rt(c,l,t,u,e,!1)}else u!==s[o]&&(s[o]=u,f=!0)}}f&&(0,r.X$)(e,"set","$attrs")}function nt(e,t,n,o){const[a,s]=e.propsOptions;let u,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let f;a&&(0,i.RI)(a,f=(0,i._A)(r))?s&&s.includes(f)?(u||(u={}))[f]=c:n[f]=c:B(e.emitsOptions,r)||r in o&&c===o[r]||(o[r]=c,l=!0)}if(s){const t=(0,r.IU)(n),o=u||i.kT;for(let r=0;r<s.length;r++){const u=s[r];n[u]=rt(a,t,u,o[u],e,!(0,i.RI)(o,u))}}return l}function rt(e,t,n,r,o,a){const s=e[n];if(null!=s){const e=(0,i.RI)(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(un(o),r=i[n]=e.call(null,t),ln())}else r=e}s[0]&&(a&&!e?r=!1:!s[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function it(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const a=e.props,s={},u=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=it(e,t,!0);(0,i.l7)(s,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(a))for(let f=0;f<a.length;f++){0;const e=(0,i._A)(a[f]);ot(e)&&(s[e]=i.kT)}else if(a){0;for(const e in a){const t=(0,i._A)(e);if(ot(t)){const n=a[e],r=s[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=ut(Boolean,r.type),n=ut(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&u.push(t)}}}}const c=[s,u];return r.set(e,c),c}function ot(e){return"$"!==e[0]}function at(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function st(e,t){return at(e)===at(t)}function ut(e,t){return(0,i.kJ)(t)?t.findIndex((t=>st(t,e))):(0,i.mf)(t)&&st(t,e)?0:-1}const lt=e=>"_"===e[0]||"$stable"===e,ct=e=>(0,i.kJ)(e)?e.map(Ht):[Ht(e)],ft=(e,t,n)=>{if(t._n)return t;const r=V(((...e)=>ct(t(...e))),n);return r._c=!1,r},pt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(lt(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=ft(o,n,r);else if(null!=n){0;const e=ct(n);t[o]=()=>e}}},dt=(e,t)=>{const n=ct(t);e.slots.default=()=>n},yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):pt(t,e.slots={})}else e.slots={},t&&dt(e,t);(0,i.Nj)(e.slots,Yt,1)},mt=(e,t,n)=>{const{vnode:r,slots:o}=e;let a=!0,s=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?a=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(a=!t.$stable,pt(t,o)),s=t}else t&&(dt(e,t),s={default:1});if(a)for(const i in o)lt(i)||i in s||delete o[i]};function Tt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vt=0;function bt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=Tt(),a=new Set;let s=!1;const u=o.app={_uid:vt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:An,get config(){return o.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.mf)(e.install)?(a.add(e),e.install(u,...t)):(0,i.mf)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),u},component(e,t){return t?(o.components[e]=t,u):o.components[e]},directive(e,t){return t?(o.directives[e]=t,u):o.directives[e]},mount(i,a,l){if(!s){0;const c=qt(n,r);return c.appContext=o,a&&t?t(c,i):e(c,i,l),s=!0,u._container=i,i.__vue_app__=u,gn(c.component)||c.component.proxy}},unmount(){s&&(e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return o.provides[e]=t,u}};return u}}function St(e,t,n,a,s=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>St(e,t&&((0,i.kJ)(t)?t[r]:t),n,a,s)));if(de(a)&&!s)return;const u=4&a.shapeFlag?gn(a.component)||a.component.proxy:a.el,l=s?null:u,{i:c,r:f}=e;const p=t&&t.r,d=c.refs===i.kT?c.refs={}:c.refs,y=c.setupState;if(null!=p&&p!==f&&((0,i.HD)(p)?(d[p]=null,(0,i.RI)(y,p)&&(y[p]=null)):(0,r.dq)(p)&&(p.value=null)),(0,i.mf)(f))o(f,c,12,[l,d]);else{const t=(0,i.HD)(f),o=(0,r.dq)(f);if(t||o){const r=()=>{if(e.f){const n=t?d[f]:f.value;s?(0,i.kJ)(n)&&(0,i.Od)(n,u):(0,i.kJ)(n)?n.includes(u)||n.push(u):t?(d[f]=[u],(0,i.RI)(y,f)&&(y[f]=d[f])):(f.value=[u],e.k&&(d[e.k]=f.value))}else t?(d[f]=l,(0,i.RI)(y,f)&&(y[f]=l)):o&&(f.value=l,e.k&&(d[e.k]=l))};l?(r.id=-1,Et(r,n)):r()}else 0}}function gt(){}const Et=G;function ht(e){return xt(e)}function xt(e,t){gt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:a,patchProp:s,createElement:u,createText:l,createComment:c,setText:f,setElementText:p,parentNode:d,nextSibling:y,setScopeId:m=i.dG,cloneNode:T,insertStaticContent:v}=e,b=(e,t,n,r=null,i=null,o=null,a=!1,s=null,u=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),G(e,i,o,!0),e=null),-2===t.patchFlag&&(u=!1,t.dynamicChildren=null);const{type:l,ref:c,shapeFlag:f}=t;switch(l){case It:S(e,t,n,r);break;case Nt:g(e,t,n,r);break;case jt:null==e&&E(t,n,r,a);break;case _t:M(e,t,n,r,i,o,a,s,u);break;default:1&f?A(e,t,n,r,i,o,a,s,u):6&f?B(e,t,n,r,i,o,a,s,u):(64&f||128&f)&&l.process(e,t,n,r,i,o,a,s,u,te)}null!=c&&i&&St(c,e&&e.ref,o,t||e,!t)},S=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},g=(e,t,n,r)=>{null==e?o(t.el=c(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},h=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=y(e),o(e,n,r),e=i;o(t,n,r)},x=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=y(e),a(e),e=n;a(t)},A=(e,t,n,r,i,o,a,s,u)=>{a=a||"svg"===t.type,null==e?w(t,n,r,i,o,a,s,u):D(e,t,i,o,a,s,u)},w=(e,t,n,r,a,l,c,f)=>{let d,y;const{type:m,props:v,shapeFlag:b,transition:S,patchFlag:g,dirs:E}=e;if(e.el&&void 0!==T&&-1===g)d=e.el=T(e.el);else{if(d=e.el=u(e.type,l,v&&v.is,v),8&b?p(d,e.children):16&b&&I(e.children,d,null,r,a,l&&"foreignObject"!==m,c,f),E&&Me(e,null,r,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||s(d,t,null,v[t],l,e.children,r,a,Q);"value"in v&&s(d,"value",null,v.value),(y=v.onVnodeBeforeMount)&&tn(y,r,e)}_(d,e,e.scopeId,c,r)}E&&Me(e,null,r,"beforeMount");const h=(!a||a&&!a.pendingBranch)&&S&&!S.persisted;h&&S.beforeEnter(d),o(d,t,n),((y=v&&v.onVnodeMounted)||h||E)&&Et((()=>{y&&tn(y,r,e),h&&S.enter(d),E&&Me(e,null,r,"mounted")}),a)},_=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;_(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},I=(e,t,n,r,i,o,a,s,u=0)=>{for(let l=u;l<e.length;l++){const u=e[l]=s?Qt(e[l]):Ht(e[l]);b(null,u,t,n,r,i,o,a,s)}},D=(e,t,n,r,o,a,u)=>{const l=t.el=e.el;let{patchFlag:c,dynamicChildren:f,dirs:d}=t;c|=16&e.patchFlag;const y=e.props||i.kT,m=t.props||i.kT;let T;n&&Pt(n,!1),(T=m.onVnodeBeforeUpdate)&&tn(T,n,t,e),d&&Me(t,e,n,"beforeUpdate"),n&&Pt(n,!0);const v=o&&"foreignObject"!==t.type;if(f?L(e.dynamicChildren,f,l,n,r,v,a):u||Y(e,t,l,null,n,r,v,a,!1),c>0){if(16&c)C(l,t,y,m,n,r,o);else if(2&c&&y.class!==m.class&&s(l,"class",null,m.class,o),4&c&&s(l,"style",y.style,m.style,o),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],u=y[a],c=m[a];c===u&&"value"!==a||s(l,a,u,c,o,e.children,n,r,Q)}}1&c&&e.children!==t.children&&p(l,t.children)}else u||null!=f||C(l,t,y,m,n,r,o);((T=m.onVnodeUpdated)||d)&&Et((()=>{T&&tn(T,n,t,e),d&&Me(t,e,n,"updated")}),r)},L=(e,t,n,r,i,o,a)=>{for(let s=0;s<t.length;s++){const u=e[s],l=t[s],c=u.el&&(u.type===_t||!Kt(u,l)||70&u.shapeFlag)?d(u.el):n;b(u,l,c,null,r,i,o,a,!0)}},C=(e,t,n,r,o,a,u)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const c=r[l],f=n[l];c!==f&&"value"!==l&&s(e,l,f,c,u,t.children,o,a,Q)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||s(e,l,n[l],null,u,t.children,o,a,Q);"value"in r&&s(e,"value",n.value,r.value)}},M=(e,t,n,r,i,a,s,u,c)=>{const f=t.el=e?e.el:l(""),p=t.anchor=e?e.anchor:l("");let{patchFlag:d,dynamicChildren:y,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(o(f,n,r),o(p,n,r),I(t.children,n,p,i,a,s,u,c)):d>0&&64&d&&y&&e.dynamicChildren?(L(e.dynamicChildren,y,n,i,a,s,u),(null!=t.key||i&&t===i.subTree)&&At(e,t,!0)):Y(e,t,n,p,i,a,s,u,c)},B=(e,t,n,r,i,o,a,s,u)=>{t.slotScopeIds=s,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,a,u):R(t,n,r,i,o,a,u):F(e,t,u)},R=(e,t,n,r,i,o,a)=>{const s=e.component=on(e,r,i);if(ye(e)&&(s.ctx.renderer=te),yn(s),s.asyncDep){if(i&&i.registerDep(s,k),!e.el){const e=s.subTree=qt(Nt);g(null,e,t,n)}}else k(s,e,t,n,i,o,a)},F=(e,t,n)=>{const r=t.component=e.component;if(J(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,O(r.update),r.update()}else t.el=e.el,r.vnode=t},k=(e,t,n,o,a,s,u)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:l,vnode:c}=e,f=n;0,Pt(e,!1),n?(n.el=c.el,V(e,n,u)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&tn(t,l,n,c),Pt(e,!0);const p=K(e);0;const y=e.subTree;e.subTree=p,b(y,p,d(y.el),Z(y),e,a,s),n.el=p.el,null===f&&q(e,p.el),o&&Et(o,a),(t=n.props&&n.props.onVnodeUpdated)&&Et((()=>tn(t,l,n,c)),a)}else{let r;const{el:u,props:l}=t,{bm:c,m:f,parent:p}=e,d=de(t);if(Pt(e,!1),c&&(0,i.ir)(c),!d&&(r=l&&l.onVnodeBeforeMount)&&tn(r,p,t),Pt(e,!0),u&&re){const n=()=>{e.subTree=K(e),re(u,e.subTree,e,a,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=K(e);0,b(null,r,n,o,e,a,s),t.el=r.el}if(f&&Et(f,a),!d&&(r=l&&l.onVnodeMounted)){const e=t;Et((()=>tn(r,p,e)),a)}(256&t.shapeFlag||p&&de(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&Et(e.a,a),e.isMounted=!0,t=n=o=null}},c=e.effect=new r.qq(l,(()=>P(f)),e.scope),f=e.update=()=>c.run();f.id=e.uid,Pt(e,!0),f()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,tt(e,t.props,i,n),mt(e,t.children,n),(0,r.Jd)(),N(void 0,e.update),(0,r.lk)()},Y=(e,t,n,r,i,o,a,s,u=!1)=>{const l=e&&e.children,c=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:y}=t;if(d>0){if(128&d)return void X(l,f,n,r,i,o,a,s,u);if(256&d)return void U(l,f,n,r,i,o,a,s,u)}8&y?(16&c&&Q(l,i,o),f!==l&&p(n,f)):16&c?16&y?X(l,f,n,r,i,o,a,s,u):Q(l,i,o,!0):(8&c&&p(n,""),16&y&&I(f,n,r,i,o,a,s,u))},U=(e,t,n,r,o,a,s,u,l)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,f=t.length,p=Math.min(c,f);let d;for(d=0;d<p;d++){const r=t[d]=l?Qt(t[d]):Ht(t[d]);b(e[d],r,n,null,o,a,s,u,l)}c>f?Q(e,o,a,!0,!1,p):I(t,n,r,o,a,s,u,l,p)},X=(e,t,n,r,o,a,s,u,l)=>{let c=0;const f=t.length;let p=e.length-1,d=f-1;while(c<=p&&c<=d){const r=e[c],i=t[c]=l?Qt(t[c]):Ht(t[c]);if(!Kt(r,i))break;b(r,i,n,null,o,a,s,u,l),c++}while(c<=p&&c<=d){const r=e[p],i=t[d]=l?Qt(t[d]):Ht(t[d]);if(!Kt(r,i))break;b(r,i,n,null,o,a,s,u,l),p--,d--}if(c>p){if(c<=d){const e=d+1,i=e<f?t[e].el:r;while(c<=d)b(null,t[c]=l?Qt(t[c]):Ht(t[c]),n,i,o,a,s,u,l),c++}}else if(c>d)while(c<=p)G(e[c],o,a,!0),c++;else{const y=c,m=c,T=new Map;for(c=m;c<=d;c++){const e=t[c]=l?Qt(t[c]):Ht(t[c]);null!=e.key&&T.set(e.key,c)}let v,S=0;const g=d-m+1;let E=!1,h=0;const x=new Array(g);for(c=0;c<g;c++)x[c]=0;for(c=y;c<=p;c++){const r=e[c];if(S>=g){G(r,o,a,!0);continue}let i;if(null!=r.key)i=T.get(r.key);else for(v=m;v<=d;v++)if(0===x[v-m]&&Kt(r,t[v])){i=v;break}void 0===i?G(r,o,a,!0):(x[i-m]=c+1,i>=h?h=i:E=!0,b(r,t[i],n,null,o,a,s,u,l),S++)}const P=E?Ot(x):i.Z6;for(v=P.length-1,c=g-1;c>=0;c--){const e=m+c,i=t[e],p=e+1<f?t[e+1].el:r;0===x[c]?b(null,i,n,p,o,a,s,u,l):E&&(v<0||c!==P[v]?W(i,n,p,2):v--)}}},W=(e,t,n,r,i=null)=>{const{el:a,type:s,transition:u,children:l,shapeFlag:c}=e;if(6&c)return void W(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void s.move(e,t,n,te);if(s===_t){o(a,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,r);return void o(e.anchor,t,n)}if(s===jt)return void h(e,t,n);const f=2!==r&&1&c&&u;if(f)if(0===r)u.beforeEnter(a),o(a,t,n),Et((()=>u.enter(a)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=u,s=()=>o(a,t,n),l=()=>{e(a,(()=>{s(),i&&i()}))};r?r(a,s,l):l()}else o(a,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:o,props:a,ref:s,children:u,dynamicChildren:l,shapeFlag:c,patchFlag:f,dirs:p}=e;if(null!=s&&St(s,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const d=1&c&&p,y=!de(e);let m;if(y&&(m=a&&a.onVnodeBeforeUnmount)&&tn(m,t,e),6&c)H(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);d&&Me(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,te,r):l&&(o!==_t||f>0&&64&f)?Q(l,t,n,!1,!0):(o===_t&&384&f||!i&&16&c)&&Q(u,t,n),r&&$(e)}(y&&(m=a&&a.onVnodeUnmounted)||d)&&Et((()=>{m&&tn(m,t,e),d&&Me(e,null,t,"unmounted")}),n)},$=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===_t)return void z(n,r);if(t===jt)return void x(e);const o=()=>{a(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,a=()=>t(n,o);r?r(e.el,o,a):a()}else o()},z=(e,t)=>{let n;while(e!==t)n=y(e),a(e),e=n;a(t)},H=(e,t,n)=>{const{bum:r,scope:o,update:a,subTree:s,um:u}=e;r&&(0,i.ir)(r),o.stop(),a&&(a.active=!1,G(s,e,t,n)),u&&Et(u,t),Et((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let a=o;a<e.length;a++)G(e[a],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():y(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),j(),t._vnode=e},te={p:b,um:G,m:W,r:$,mt:R,mc:I,pc:Y,pbc:L,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:bt(ee,ne)}}function Pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=Qt(o[i]),t.el=e.el),n||At(e,t))}}function Ot(e){const t=e.slice(),n=[0];let r,i,o,a,s;const u=e.length;for(r=0;r<u;r++){const u=e[r];if(0!==u){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}o=0,a=n.length-1;while(o<a)s=o+a>>1,e[n[s]]<u?o=s+1:a=s;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,a=n[o-1];while(o-- >0)n[o]=a,a=t[a];return n}const wt=e=>e.__isTeleport;const _t=Symbol(void 0),It=Symbol(void 0),Nt=Symbol(void 0),jt=Symbol(void 0),Dt=[];let Lt=null;function Ct(e=!1){Dt.push(Lt=e?null:[])}function Mt(){Dt.pop(),Lt=Dt[Dt.length-1]||null}let Bt=1;function Rt(e){Bt+=e}function Ft(e){return e.dynamicChildren=Bt>0?Lt||i.Z6:null,Mt(),Bt>0&&Lt&&Lt.push(e),e}function kt(e,t,n,r,i,o){return Ft(Xt(e,t,n,r,i,o,!0))}function Vt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Ut=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:R,r:e,k:t,f:!!n}:e:null;function Xt(e,t=null,n=null,r=0,o=null,a=(e===_t?0:1),s=!1,u=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ut(t),ref:t&&Jt(t),scopeId:F,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return u?(Zt(l,n),128&a&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),Bt>0&&!s&&Lt&&(l.patchFlag>0||6&a)&&32!==l.patchFlag&&Lt.push(l),l}const qt=Wt;function Wt(e,t=null,n=null,o=0,a=null,s=!1){if(e&&e!==Be||(e=Nt),Vt(e)){const r=$t(e,t,!0);return n&&Zt(r,n),Bt>0&&!s&&Lt&&(6&r.shapeFlag?Lt[Lt.indexOf(e)]=r:Lt.push(r)),r.patchFlag|=-2,r}if(hn(e)&&(e=e.__vccOpts),t){t=Gt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const u=(0,i.HD)(e)?1:W(e)?128:wt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Xt(e,t,n,o,a,u,s,!0)}function Gt(e){return e?(0,r.X3)(e)||Yt in e?(0,i.l7)({},e):e:null}function $t(e,t,n=!1){const{props:r,ref:o,patchFlag:a,children:s}=e,u=t?en(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ut(u),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Jt(t)):[o,Jt(t)]:Jt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_t?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),el:e.el,anchor:e.anchor};return l}function zt(e=" ",t=0){return qt(It,null,e,t)}function Ht(e){return null==e||"boolean"===typeof e?qt(Nt):(0,i.kJ)(e)?qt(_t,null,e.slice()):"object"===typeof e?Qt(e):qt(It,null,String(e))}function Qt(e){return null===e.el||e.memo?e:$t(e)}function Zt(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Zt(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Yt in t?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.mf)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function en(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function tn(e,t,n,r=null){a(e,t,7,[n,r])}const nn=Tt();let rn=0;function on(e,t,n){const o=e.type,a=(t?t.appContext:e.appContext)||nn,s={uid:rn++,vnode:e,type:o,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:it(o,a),emitsOptions:M(o,a),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=C.bind(null,s),e.ce&&e.ce(s),s}let an=null;const sn=()=>an||R,un=e=>{an=e,e.scope.on()},ln=()=>{an&&an.scope.off(),an=null};function cn(e){return 4&e.vnode.shapeFlag}let fn,pn,dn=!1;function yn(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,i=cn(e);et(e,n,i,t),yt(e,r);const o=i?mn(e,t):void 0;return dn=!1,o}function mn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ke));const{setup:a}=n;if(a){const n=e.setupContext=a.length>1?Sn(e):null;un(e),(0,r.Jd)();const u=o(a,e,0,[e.props,n]);if((0,r.lk)(),ln(),(0,i.tI)(u)){if(u.then(ln,ln),t)return u.then((n=>{Tn(e,n,t)})).catch((t=>{s(t,e,0)}));e.asyncDep=u}else Tn(e,u,t)}else vn(e,t)}function Tn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),vn(e,n)}function vn(e,t,n){const o=e.type;if(!e.render){if(!t&&fn&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:s}=o,u=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:a},r),s);o.render=fn(t,u)}}e.render=o.render||i.dG,pn&&pn(e)}un(e),(0,r.Jd)(),Ke(e),(0,r.lk)(),ln()}function bn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Sn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=bn(e))},slots:e.slots,emit:e.emit,expose:t}}function gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Fe?Fe[n](e):void 0}}))}function En(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function hn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const xn=(e,t)=>(0,r.Fl)(e,t,dn);function Pn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Vt(t)?qt(e,null,[t]):qt(e,t):qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Vt(n)&&(n=[n]),qt(e,t,n))}Symbol("");const An="3.2.37"},49242:function(e,t,n){"use strict";n.d(t,{nr:function(){return ne},ri:function(){return ae}});n(26699);var r=n(87139),i=n(73396);n(44870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,s=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const a=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{s.innerHTML=r?`<svg>${e}</svg>`:e;const i=s.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function c(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)p(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&p(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const f=/\s*!important$/;function p(e,t,n){if((0,r.kJ)(n))n.forEach((n=>p(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);f.test(n)?e.setProperty((0,r.rs)(i),n.replace(f,""),"important"):e[i]=n}}const d=["Webkit","Moz","ms"],y={};function m(e,t){const n=y[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return y[t]=i;i=(0,r.kC)(i);for(let r=0;r<d.length;r++){const n=d[r]+i;if(n in e)return y[t]=n}return t}const T="http://www.w3.org/1999/xlink";function v(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(T,t.slice(6,t.length)):e.setAttributeNS(T,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function b(e,t,n,i,o,a,s){if("innerHTML"===t||"textContent"===t)return i&&s(i,o,a),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}const[S,g]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let E=0;const h=Promise.resolve(),x=()=>{E=0},P=()=>E||(h.then(x),E=S());function A(e,t,n,r){e.addEventListener(t,n,r)}function O(e,t,n,r){e.removeEventListener(t,n,r)}function w(e,t,n,r,i=null){const o=e._vei||(e._vei={}),a=o[t];if(r&&a)a.value=r;else{const[n,s]=I(t);if(r){const a=o[t]=N(r,i);A(e,n,a,s)}else a&&(O(e,n,a,s),o[t]=void 0)}}const _=/(?:Once|Passive|Capture)$/;function I(e){let t;if(_.test(e)){let n;t={};while(n=e.match(_))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function N(e,t){const n=e=>{const r=e.timeStamp||S();(g||r>=n.attached-1)&&(0,i.$d)(j(e,n.value),t,5,[e])};return n.value=e,n.attached=P(),n}function j(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const D=/^on[a-z]/,L=(e,t,n,i,o=!1,a,s,u,f)=>{"class"===t?l(e,i,o):"style"===t?c(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||w(e,t,n,i,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):C(e,t,i,o))?b(e,t,i,a,s,u,f):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,o))};function C(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&D.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!D.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",B="animation",R=(e,{slots:t})=>(0,i.h)(i.P$,K(e),t);R.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k=(R.props=(0,r.l7)({},i.P$.props,F),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),V=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function K(e){const t={};for(const r in e)r in F||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:u=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=s,appearToClass:f=u,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,m=Y(o),T=m&&m[0],v=m&&m[1],{onBeforeEnter:b,onEnter:S,onEnterCancelled:g,onLeave:E,onLeaveCancelled:h,onBeforeAppear:x=b,onAppear:P=S,onAppearCancelled:A=g}=t,O=(e,t,n)=>{X(e,t?f:u),X(e,t?c:s),n&&n()},w=(e,t)=>{e._isLeaving=!1,X(e,p),X(e,y),X(e,d),t&&t()},_=e=>(t,n)=>{const r=e?P:S,o=()=>O(t,e,n);k(r,[t,o]),q((()=>{X(t,e?l:a),J(t,e?f:u),V(r)||G(t,i,T,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){k(b,[e]),J(e,a),J(e,s)},onBeforeAppear(e){k(x,[e]),J(e,l),J(e,c)},onEnter:_(!1),onAppear:_(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>w(e,t);J(e,p),Q(),J(e,d),q((()=>{e._isLeaving&&(X(e,p),J(e,y),V(E)||G(e,i,v,n))})),k(E,[e,n])},onEnterCancelled(e){O(e,!1),k(g,[e])},onAppearCancelled(e){O(e,!0),k(A,[e])},onLeaveCancelled(e){w(e),k(h,[e])}})}function Y(e){if(null==e)return null;if((0,r.Kn)(e))return[U(e.enter),U(e.leave)];{const t=U(e);return[t,t]}}function U(e){const t=(0,r.He)(e);return t}function J(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function X(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function q(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function G(e,t,n,r){const i=e._endId=++W,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:a,timeout:s,propCount:u}=$(e,t);if(!a)return r();const l=a+"end";let c=0;const f=()=>{e.removeEventListener(l,p),o()},p=t=>{t.target===e&&++c>=u&&f()};setTimeout((()=>{c<u&&f()}),s+1),e.addEventListener(l,p)}function $(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(M+"Delay"),o=r(M+"Duration"),a=z(i,o),s=r(B+"Delay"),u=r(B+"Duration"),l=z(s,u);let c=null,f=0,p=0;t===M?a>0&&(c=M,f=a,p=o.length):t===B?l>0&&(c=B,f=l,p=u.length):(f=Math.max(a,l),c=f>0?a>l?M:B:null,p=c?c===M?o.length:u.length:0);const d=c===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:c,timeout:f,propCount:p,hasTransform:d}}function z(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>H(t)+H(e[n]))))}function H(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ne={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=Z(o);const a=i||o.props&&"number"===o.props.type;A(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),a&&(i=(0,r.He)(i)),e._assign(i)})),n&&A(e,"change",(()=>{e.value=e.value.trim()})),t||(A(e,"compositionstart",ee),A(e,"compositionend",te),A(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},a){if(e._assign=Z(a),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}};const re=(0,r.l7)({patchProp:L},u);let ie;function oe(){return ie||(ie=(0,i.Us)(re))}const ae=(...e)=>{const t=oe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=se(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function se(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},87139:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return d},DM:function(){return D},E9:function(){return re},F7:function(){return P},Gg:function(){return J},HD:function(){return M},He:function(){return te},Kn:function(){return R},NO:function(){return h},Nj:function(){return ee},Od:function(){return w},PO:function(){return Y},Pq:function(){return s},RI:function(){return I},S0:function(){return U},W7:function(){return K},WV:function(){return m},Z6:function(){return g},_A:function(){return W},_N:function(){return j},aU:function(){return Q},dG:function(){return E},e1:function(){return o},fY:function(){return r},hR:function(){return H},hq:function(){return T},ir:function(){return Z},j5:function(){return l},kC:function(){return z},kJ:function(){return N},kT:function(){return S},l7:function(){return O},mf:function(){return C},rs:function(){return $},tI:function(){return F},tR:function(){return A},yA:function(){return u},yk:function(){return B},zw:function(){return v}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s=r(a);function u(e){return!!e||""===e}function l(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=M(r)?p(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return M(e)||R(e)?e:void 0}const c=/;(?![^(]*\))/g,f=/:(.+)/;function p(e){const t={};return e.split(c).forEach((e=>{if(e){const n=e.split(f);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(M(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(R(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=B(e),r=B(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return!(!n||!r)&&y(e,t);if(n=R(e),r=R(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function T(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>M(e)?e:null==e?"":N(e)||R(e)&&(e.toString===k||!C(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):j(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!R(t)||N(t)||Y(t)?t:String(t),S={},g=[],E=()=>{},h=()=>!1,x=/^on[^a-z]/,P=e=>x.test(e),A=e=>e.startsWith("onUpdate:"),O=Object.assign,w=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_=Object.prototype.hasOwnProperty,I=(e,t)=>_.call(e,t),N=Array.isArray,j=e=>"[object Map]"===V(e),D=e=>"[object Set]"===V(e),L=e=>"[object Date]"===V(e),C=e=>"function"===typeof e,M=e=>"string"===typeof e,B=e=>"symbol"===typeof e,R=e=>null!==e&&"object"===typeof e,F=e=>R(e)&&C(e.then)&&C(e.catch),k=Object.prototype.toString,V=e=>k.call(e),K=e=>V(e).slice(8,-1),Y=e=>"[object Object]"===V(e),U=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,J=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},q=/-(\w)/g,W=X((e=>e.replace(q,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,$=X((e=>e.replace(G,"-$1").toLowerCase())),z=X((e=>e.charAt(0).toUpperCase()+e.slice(1))),H=X((e=>e?`on${z(e)}`:"")),Q=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9951:function(e,t,n){n(21703),function(t,n){e.exports=n()}(0,(function(){var e=function(e,t){var n=Array.prototype.concat,r=Array.prototype.slice,i=Object.prototype.toString;function o(t,n){var r=t>n?t:n;return e.pow(10,17-~~(e.log(r>0?r:-r)*e.LOG10E))}var a=Array.isArray||function(e){return"[object Array]"===i.call(e)};function s(e){return"[object Function]"===i.call(e)}function u(e){return"number"===typeof e&&e-e===0}function l(e){return n.apply([],e)}function c(){return new c._init(arguments)}function f(){return 0}function p(){return 1}function d(e,t){return e===t?1:0}c.fn=c.prototype,c._init=function(e){if(a(e[0]))if(a(e[0][0])){s(e[1])&&(e[0]=c.map(e[0],e[1]));for(var t=0;t<e[0].length;t++)this[t]=e[0][t];this.length=e[0].length}else this[0]=s(e[1])?c.map(e[0],e[1]):e[0],this.length=1;else if(u(e[0]))this[0]=c.seq.apply(null,e),this.length=1;else{if(e[0]instanceof c)return c(e[0].toArray());this[0]=[],this.length=1}return this},c._init.prototype=c.prototype,c._init.constructor=c,c.utils={calcRdx:o,isArray:a,isFunction:s,isNumber:u,toVector:l},c._random_fn=e.random,c.setRandom=function(e){if("function"!==typeof e)throw new TypeError("fn is not a function");c._random_fn=e},c.extend=function(e){var t,n;if(1===arguments.length){for(n in e)c[n]=e[n];return this}for(t=1;t<arguments.length;t++)for(n in arguments[t])e[n]=arguments[t][n];return e},c.rows=function(e){return e.length||1},c.cols=function(e){return e[0].length||1},c.dimensions=function(e){return{rows:c.rows(e),cols:c.cols(e)}},c.row=function(e,t){return a(t)?t.map((function(t){return c.row(e,t)})):e[t]},c.rowa=function(e,t){return c.row(e,t)},c.col=function(e,t){if(a(t)){var n=c.arange(e.length).map((function(){return new Array(t.length)}));return t.forEach((function(t,r){c.arange(e.length).forEach((function(i){n[i][r]=e[i][t]}))})),n}for(var r=new Array(e.length),i=0;i<e.length;i++)r[i]=[e[i][t]];return r},c.cola=function(e,t){return c.col(e,t).map((function(e){return e[0]}))},c.diag=function(e){for(var t=c.rows(e),n=new Array(t),r=0;r<t;r++)n[r]=[e[r][r]];return n},c.antidiag=function(e){for(var t=c.rows(e)-1,n=new Array(t),r=0;t>=0;t--,r++)n[r]=[e[r][t]];return n},c.transpose=function(e){var t,n,r,i,o,s=[];for(a(e[0])||(e=[e]),n=e.length,r=e[0].length,o=0;o<r;o++){for(t=new Array(n),i=0;i<n;i++)t[i]=e[i][o];s.push(t)}return 1===s.length?s[0]:s},c.map=function(e,t,n){var r,i,o,s,u;for(a(e[0])||(e=[e]),i=e.length,o=e[0].length,s=n?e:new Array(i),r=0;r<i;r++)for(s[r]||(s[r]=new Array(o)),u=0;u<o;u++)s[r][u]=t(e[r][u],r,u);return 1===s.length?s[0]:s},c.cumreduce=function(e,t,n){var r,i,o,s,u;for(a(e[0])||(e=[e]),i=e.length,o=e[0].length,s=n?e:new Array(i),r=0;r<i;r++)for(s[r]||(s[r]=new Array(o)),o>0&&(s[r][0]=e[r][0]),u=1;u<o;u++)s[r][u]=t(s[r][u-1],e[r][u]);return 1===s.length?s[0]:s},c.alter=function(e,t){return c.map(e,t,!0)},c.create=function(e,t,n){var r,i,o=new Array(e);for(s(t)&&(n=t,t=e),r=0;r<e;r++)for(o[r]=new Array(t),i=0;i<t;i++)o[r][i]=n(r,i);return o},c.zeros=function(e,t){return u(t)||(t=e),c.create(e,t,f)},c.ones=function(e,t){return u(t)||(t=e),c.create(e,t,p)},c.rand=function(e,t){return u(t)||(t=e),c.create(e,t,c._random_fn)},c.identity=function(e,t){return u(t)||(t=e),c.create(e,t,d)},c.symmetric=function(e){var t,n,r=e.length;if(e.length!==e[0].length)return!1;for(t=0;t<r;t++)for(n=0;n<r;n++)if(e[n][t]!==e[t][n])return!1;return!0},c.clear=function(e){return c.alter(e,f)},c.seq=function(e,t,n,r){s(r)||(r=!1);var i,a=[],u=o(e,t),l=(t*u-e*u)/((n-1)*u),c=e;for(i=0;c<=t&&i<n;i++,c=(e*u+l*u*i)/u)a.push(r?r(c,i):c);return a},c.arange=function(e,n,r){var i,o=[];if(r=r||1,n===t&&(n=e,e=0),e===n||0===r)return[];if(e<n&&r<0)return[];if(e>n&&r>0)return[];if(r>0)for(i=e;i<n;i+=r)o.push(i);else for(i=e;i>n;i+=r)o.push(i);return o},c.slice=function(){function e(e,n,r,i){var o,a=[],s=e.length;if(n===t&&r===t&&i===t)return c.copy(e);if(n=n||0,r=r||e.length,n=n>=0?n:s+n,r=r>=0?r:s+r,i=i||1,n===r||0===i)return[];if(n<r&&i<0)return[];if(n>r&&i>0)return[];if(i>0)for(o=n;o<r;o+=i)a.push(e[o]);else for(o=n;o>r;o+=i)a.push(e[o]);return a}function n(t,n){var r,i;if(n=n||{},u(n.row)){if(u(n.col))return t[n.row][n.col];var o=c.rowa(t,n.row);return r=n.col||{},e(o,r.start,r.end,r.step)}if(u(n.col)){var a=c.cola(t,n.col);return i=n.row||{},e(a,i.start,i.end,i.step)}i=n.row||{},r=n.col||{};var s=e(t,i.start,i.end,i.step);return s.map((function(t){return e(t,r.start,r.end,r.step)}))}return n}(),c.sliceAssign=function(n,r,i){var o,a;if(u(r.row)){if(u(r.col))return n[r.row][r.col]=i;r.col=r.col||{},r.col.start=r.col.start||0,r.col.end=r.col.end||n[0].length,r.col.step=r.col.step||1,o=c.arange(r.col.start,e.min(n.length,r.col.end),r.col.step);var s=r.row;return o.forEach((function(e,t){n[s][e]=i[t]})),n}if(u(r.col)){r.row=r.row||{},r.row.start=r.row.start||0,r.row.end=r.row.end||n.length,r.row.step=r.row.step||1,a=c.arange(r.row.start,e.min(n[0].length,r.row.end),r.row.step);var l=r.col;return a.forEach((function(e,t){n[e][l]=i[t]})),n}return i[0].length===t&&(i=[i]),r.row.start=r.row.start||0,r.row.end=r.row.end||n.length,r.row.step=r.row.step||1,r.col.start=r.col.start||0,r.col.end=r.col.end||n[0].length,r.col.step=r.col.step||1,a=c.arange(r.row.start,e.min(n.length,r.row.end),r.row.step),o=c.arange(r.col.start,e.min(n[0].length,r.col.end),r.col.step),a.forEach((function(e,t){o.forEach((function(r,o){n[e][r]=i[t][o]}))})),n},c.diagonal=function(e){var t=c.zeros(e.length,e.length);return e.forEach((function(e,n){t[n][n]=e})),t},c.copy=function(e){return e.map((function(e){return u(e)?e:e.map((function(e){return e}))}))};var y=c.prototype;return y.length=0,y.push=Array.prototype.push,y.sort=Array.prototype.sort,y.splice=Array.prototype.splice,y.slice=Array.prototype.slice,y.toArray=function(){return this.length>1?r.call(this):r.call(this)[0]},y.map=function(e,t){return c(c.map(this,e,t))},y.cumreduce=function(e,t){return c(c.cumreduce(this,e,t))},y.alter=function(e){return c.alter(this,e),this},function(e){for(var t=0;t<e.length;t++)(function(e){y[e]=function(t){var n,r=this;return t?(setTimeout((function(){t.call(r,y[e].call(r))})),this):(n=c[e](this),a(n)?c(n):n)}})(e[t])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(e){for(var t=0;t<e.length;t++)(function(e){y[e]=function(t,n){var r=this;return n?(setTimeout((function(){n.call(r,y[e].call(r,t))})),this):c(c[e](this,t))}})(e[t])}("row col".split(" ")),function(e){for(var t=0;t<e.length;t++)(function(e){y[e]=function(){return c(c[e].apply(null,arguments))}})(e[t])}("create zeros ones rand identity".split(" ")),c}(Math);return function(e,t){var n=e.utils.isFunction;function r(e,t){return e-t}function i(e,n,r){return t.max(n,t.min(e,r))}e.sum=function(e){var t=0,n=e.length;while(--n>=0)t+=e[n];return t},e.sumsqrd=function(e){var t=0,n=e.length;while(--n>=0)t+=e[n]*e[n];return t},e.sumsqerr=function(t){var n,r=e.mean(t),i=0,o=t.length;while(--o>=0)n=t[o]-r,i+=n*n;return i},e.sumrow=function(e){var t=0,n=e.length;while(--n>=0)t+=e[n];return t},e.product=function(e){var t=1,n=e.length;while(--n>=0)t*=e[n];return t},e.min=function(e){var t=e[0],n=0;while(++n<e.length)e[n]<t&&(t=e[n]);return t},e.max=function(e){var t=e[0],n=0;while(++n<e.length)e[n]>t&&(t=e[n]);return t},e.unique=function(e){for(var t={},n=[],r=0;r<e.length;r++)t[e[r]]||(t[e[r]]=!0,n.push(e[r]));return n},e.mean=function(t){return e.sum(t)/t.length},e.meansqerr=function(t){return e.sumsqerr(t)/t.length},e.geomean=function(n){return t.pow(e.product(n),1/n.length)},e.median=function(e){var t=e.length,n=e.slice().sort(r);return 1&t?n[t/2|0]:(n[t/2-1]+n[t/2])/2},e.cumsum=function(t){return e.cumreduce(t,(function(e,t){return e+t}))},e.cumprod=function(t){return e.cumreduce(t,(function(e,t){return e*t}))},e.diff=function(e){var t,n=[],r=e.length;for(t=1;t<r;t++)n.push(e[t]-e[t-1]);return n},e.rank=function(e){var t,n=[],i={};for(t=0;t<e.length;t++){var o=e[t];i[o]?i[o]++:(i[o]=1,n.push(o))}var a=n.sort(r),s={},u=1;for(t=0;t<a.length;t++){o=a[t];var l=i[o],c=u,f=u+l-1,p=(c+f)/2;s[o]=p,u+=l}return e.map((function(e){return s[e]}))},e.mode=function(e){var t,n=e.length,i=e.slice().sort(r),o=1,a=0,s=0,u=[];for(t=0;t<n;t++)i[t]===i[t+1]?o++:(o>a?(u=[i[t]],a=o,s=0):o===a&&(u.push(i[t]),s++),o=1);return 0===s?u[0]:u},e.range=function(t){return e.max(t)-e.min(t)},e.variance=function(t,n){return e.sumsqerr(t)/(t.length-(n?1:0))},e.pooledvariance=function(t){var n=t.reduce((function(t,n){return t+e.sumsqerr(n)}),0),r=t.reduce((function(e,t){return e+t.length}),0);return n/(r-t.length)},e.deviation=function(t){for(var n=e.mean(t),r=t.length,i=new Array(r),o=0;o<r;o++)i[o]=t[o]-n;return i},e.stdev=function(n,r){return t.sqrt(e.variance(n,r))},e.pooledstdev=function(n){return t.sqrt(e.pooledvariance(n))},e.meandev=function(n){for(var r=e.mean(n),i=[],o=n.length-1;o>=0;o--)i.push(t.abs(n[o]-r));return e.mean(i)},e.meddev=function(n){for(var r=e.median(n),i=[],o=n.length-1;o>=0;o--)i.push(t.abs(n[o]-r));return e.median(i)},e.coeffvar=function(t){return e.stdev(t)/e.mean(t)},e.quartiles=function(e){var n=e.length,i=e.slice().sort(r);return[i[t.round(n/4)-1],i[t.round(n/2)-1],i[t.round(3*n/4)-1]]},e.quantiles=function(e,n,o,a){var s,u,l,c,f,p,d=e.slice().sort(r),y=[n.length],m=e.length;for("undefined"===typeof o&&(o=3/8),"undefined"===typeof a&&(a=3/8),s=0;s<n.length;s++)u=n[s],l=o+u*(1-o-a),c=m*u+l,f=t.floor(i(c,1,m-1)),p=i(c-f,0,1),y[s]=(1-p)*d[f-1]+p*d[f];return y},e.percentile=function(e,t,n){var i=e.slice().sort(r),o=t*(i.length+(n?1:-1))+(n?0:1),a=parseInt(o),s=o-a;return a+1<i.length?i[a-1]+s*(i[a]-i[a-1]):i[a-1]},e.percentileOfScore=function(e,t,n){var r,i,o=0,a=e.length,s=!1;for("strict"===n&&(s=!0),i=0;i<a;i++)r=e[i],(s&&r<t||!s&&r<=t)&&o++;return o/a},e.histogram=function(n,r){r=r||4;var i,o=e.min(n),a=(e.max(n)-o)/r,s=n.length,u=[];for(i=0;i<r;i++)u[i]=0;for(i=0;i<s;i++)u[t.min(t.floor((n[i]-o)/a),r-1)]+=1;return u},e.covariance=function(t,n){var r,i=e.mean(t),o=e.mean(n),a=t.length,s=new Array(a);for(r=0;r<a;r++)s[r]=(t[r]-i)*(n[r]-o);return e.sum(s)/(a-1)},e.corrcoeff=function(t,n){return e.covariance(t,n)/e.stdev(t,1)/e.stdev(n,1)},e.spearmancoeff=function(t,n){return t=e.rank(t),n=e.rank(n),e.corrcoeff(t,n)},e.stanMoment=function(n,r){for(var i=e.mean(n),o=e.stdev(n),a=n.length,s=0,u=0;u<a;u++)s+=t.pow((n[u]-i)/o,r);return s/n.length},e.skewness=function(t){return e.stanMoment(t,3)},e.kurtosis=function(t){return e.stanMoment(t,4)-3};var o=e.prototype;(function(t){for(var r=0;r<t.length;r++)(function(t){o[t]=function(r,i){var a=[],s=0,u=this;if(n(r)&&(i=r,r=!1),i)return setTimeout((function(){i.call(u,o[t].call(u,r))})),this;if(this.length>1){for(u=!0===r?this:this.transpose();s<u.length;s++)a[s]=e[t](u[s]);return a}return e[t](this[0],r)}})(t[r])})("cumsum cumprod".split(" ")),function(t){for(var r=0;r<t.length;r++)(function(t){o[t]=function(r,i){var a=[],s=0,u=this;if(n(r)&&(i=r,r=!1),i)return setTimeout((function(){i.call(u,o[t].call(u,r))})),this;if(this.length>1){for("sumrow"!==t&&(u=!0===r?this:this.transpose());s<u.length;s++)a[s]=e[t](u[s]);return!0===r?e[t](e.utils.toVector(a)):a}return e[t](this[0],r)}})(t[r])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(t){for(var r=0;r<t.length;r++)(function(t){o[t]=function(){var r,i=[],a=0,s=this,u=Array.prototype.slice.call(arguments);if(n(u[u.length-1])){r=u[u.length-1];var l=u.slice(0,u.length-1);return setTimeout((function(){r.call(s,o[t].apply(s,l))})),this}r=void 0;var c=function(n){return e[t].apply(s,[n].concat(u))};if(this.length>1){for(s=s.transpose();a<s.length;a++)i[a]=c(s[a]);return i}return c(this[0])}})(t[r])}("quantiles percentileOfScore".split(" "))}(e,Math),function(e,t){e.gammaln=function(e){var n,r,i,o=0,a=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015;for(i=(r=n=e)+5.5,i-=(n+.5)*t.log(i);o<6;o++)s+=a[o]/++r;return t.log(2.5066282746310007*s/n)-i},e.loggam=function(e){var n,r,i,o,a,s,u,l=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(n=e,u=0,1==e||2==e)return 0;for(e<=7&&(u=t.floor(7-e),n=e+u),r=1/(n*n),i=2*t.PI,a=l[9],s=8;s>=0;s--)a*=r,a+=l[s];if(o=a/n+.5*t.log(i)+(n-.5)*t.log(n)-n,e<=7)for(s=1;s<=u;s++)o-=t.log(n-1),n-=1;return o},e.gammafn=function(e){var n,r,i,o,a=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],s=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],u=!1,l=0,c=0,f=0,p=e;if(e>171.6243769536076)return 1/0;if(p<=0){if(o=p%1+36e-17,!o)return 1/0;u=(1&p?-1:1)*t.PI/t.sin(t.PI*o),p=1-p}for(i=p,r=p<1?p++:(p-=l=(0|p)-1)-1,n=0;n<8;++n)f=(f+a[n])*r,c=c*r+s[n];if(o=f/c+1,i<p)o/=i;else if(i>p)for(n=0;n<l;++n)o*=p,p++;return u&&(o=u/o),o},e.gammap=function(t,n){return e.lowRegGamma(t,n)*e.gammafn(t)},e.lowRegGamma=function(n,r){var i,o=e.gammaln(n),a=n,s=1/n,u=s,l=r+1-n,c=1/1e-30,f=1/l,p=f,d=1,y=-~(8.5*t.log(n>=1?n:1/n)+.4*n+17);if(r<0||n<=0)return NaN;if(r<n+1){for(;d<=y;d++)s+=u*=r/++a;return s*t.exp(-r+n*t.log(r)-o)}for(;d<=y;d++)i=-d*(d-n),l+=2,f=i*f+l,c=l+i/c,f=1/f,p*=f*c;return 1-p*t.exp(-r+n*t.log(r)-o)},e.factorialln=function(t){return t<0?NaN:e.gammaln(t+1)},e.factorial=function(t){return t<0?NaN:e.gammafn(t+1)},e.combination=function(n,r){return n>170||r>170?t.exp(e.combinationln(n,r)):e.factorial(n)/e.factorial(r)/e.factorial(n-r)},e.combinationln=function(t,n){return e.factorialln(t)-e.factorialln(n)-e.factorialln(t-n)},e.permutation=function(t,n){return e.factorial(t)/e.factorial(t-n)},e.betafn=function(n,r){if(!(n<=0||r<=0))return n+r>170?t.exp(e.betaln(n,r)):e.gammafn(n)*e.gammafn(r)/e.gammafn(n+r)},e.betaln=function(t,n){return e.gammaln(t)+e.gammaln(n)-e.gammaln(t+n)},e.betacf=function(e,n,r){var i,o,a,s,u=1e-30,l=1,c=n+r,f=n+1,p=n-1,d=1,y=1-c*e/f;for(t.abs(y)<u&&(y=u),y=1/y,s=y;l<=100;l++)if(i=2*l,o=l*(r-l)*e/((p+i)*(n+i)),y=1+o*y,t.abs(y)<u&&(y=u),d=1+o/d,t.abs(d)<u&&(d=u),y=1/y,s*=y*d,o=-(n+l)*(c+l)*e/((n+i)*(f+i)),y=1+o*y,t.abs(y)<u&&(y=u),d=1+o/d,t.abs(d)<u&&(d=u),y=1/y,a=y*d,s*=a,t.abs(a-1)<3e-7)break;return s},e.gammapinv=function(n,r){var i,o,a,s,u,l,c,f=0,p=r-1,d=1e-8,y=e.gammaln(r);if(n>=1)return t.max(100,r+100*t.sqrt(r));if(n<=0)return 0;for(r>1?(l=t.log(p),c=t.exp(p*(l-1)-y),u=n<.5?n:1-n,a=t.sqrt(-2*t.log(u)),i=(2.30753+.27061*a)/(1+a*(.99229+.04481*a))-a,n<.5&&(i=-i),i=t.max(.001,r*t.pow(1-1/(9*r)-i/(3*t.sqrt(r)),3))):(a=1-r*(.253+.12*r),i=n<a?t.pow(n/a,1/r):1-t.log(1-(n-a)/(1-a)));f<12;f++){if(i<=0)return 0;if(o=e.lowRegGamma(r,i)-n,a=r>1?c*t.exp(-(i-p)+p*(t.log(i)-l)):t.exp(-i+p*t.log(i)-y),s=o/a,i-=a=s/(1-.5*t.min(1,s*((r-1)/i-1))),i<=0&&(i=.5*(i+a)),t.abs(a)<d*i)break}return i},e.erf=function(e){var n,r,i,o,a=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],s=a.length-1,u=!1,l=0,c=0;for(e<0&&(e=-e,u=!0),n=2/(2+e),r=4*n-2;s>0;s--)i=l,l=r*l-c+a[s],c=i;return o=n*t.exp(-e*e+.5*(a[0]+r*l)-c),u?o-1:1-o},e.erfc=function(t){return 1-e.erf(t)},e.erfcinv=function(n){var r,i,o,a,s=0;if(n>=2)return-100;if(n<=0)return 100;for(a=n<1?n:2-n,o=t.sqrt(-2*t.log(a/2)),r=-.70711*((2.30753+.27061*o)/(1+o*(.99229+.04481*o))-o);s<2;s++)i=e.erfc(r)-a,r+=i/(1.1283791670955126*t.exp(-r*r)-r*i);return n<1?r:-r},e.ibetainv=function(n,r,i){var o,a,s,u,l,c,f,p,d,y,m,T=1e-8,v=r-1,b=i-1,S=0;if(n<=0)return 0;if(n>=1)return 1;for(r>=1&&i>=1?(s=n<.5?n:1-n,u=t.sqrt(-2*t.log(s)),f=(2.30753+.27061*u)/(1+u*(.99229+.04481*u))-u,n<.5&&(f=-f),p=(f*f-3)/6,d=2/(1/(2*r-1)+1/(2*i-1)),y=f*t.sqrt(p+d)/d-(1/(2*i-1)-1/(2*r-1))*(p+5/6-2/(3*d)),f=r/(r+i*t.exp(2*y))):(o=t.log(r/(r+i)),a=t.log(i/(r+i)),u=t.exp(r*o)/r,l=t.exp(i*a)/i,y=u+l,f=n<u/y?t.pow(r*y*n,1/r):1-t.pow(i*y*(1-n),1/i)),m=-e.gammaln(r)-e.gammaln(i)+e.gammaln(r+i);S<10;S++){if(0===f||1===f)return f;if(c=e.ibeta(f,r,i)-n,u=t.exp(v*t.log(f)+b*t.log(1-f)+m),l=c/u,f-=u=l/(1-.5*t.min(1,l*(v/f-b/(1-f)))),f<=0&&(f=.5*(f+u)),f>=1&&(f=.5*(f+u+1)),t.abs(u)<T*f&&S>0)break}return f},e.ibeta=function(n,r,i){var o=0===n||1===n?0:t.exp(e.gammaln(r+i)-e.gammaln(r)-e.gammaln(i)+r*t.log(n)+i*t.log(1-n));return!(n<0||n>1)&&(n<(r+1)/(r+i+2)?o*e.betacf(n,r,i)/r:1-o*e.betacf(1-n,i,r)/i)},e.randn=function(n,r){var i,o,a,s,u;if(r||(r=n),n)return e.create(n,r,(function(){return e.randn()}));do{i=e._random_fn(),o=1.7156*(e._random_fn()-.5),a=i-.449871,s=t.abs(o)+.386595,u=a*a+s*(.196*s-.25472*a)}while(u>.27597&&(u>.27846||o*o>-4*t.log(i)*i*i));return o/i},e.randg=function(n,r,i){var o,a,s,u,l,c,f=n;if(i||(i=r),n||(n=1),r)return c=e.zeros(r,i),c.alter((function(){return e.randg(n)})),c;n<1&&(n+=1),o=n-1/3,a=1/t.sqrt(9*o);do{do{l=e.randn(),u=1+a*l}while(u<=0);u*=u*u,s=e._random_fn()}while(s>1-.331*t.pow(l,4)&&t.log(s)>.5*l*l+o*(1-u+t.log(u)));if(n==f)return o*u;do{s=e._random_fn()}while(0===s);return t.pow(s,1/f)*o*u},function(t){for(var n=0;n<t.length;n++)(function(t){e.fn[t]=function(){return e(e.map(this,(function(n){return e[t](n)})))}})(t[n])}("gammaln gammafn factorial factorialln".split(" ")),function(t){for(var n=0;n<t.length;n++)(function(t){e.fn[t]=function(){return e(e[t].apply(null,arguments))}})(t[n])}("randn".split(" "))}(e,Math),function(e,t){function n(e,n,r,i){var o,a=0,s=1,u=1,l=1,c=0,f=0;while(t.abs((u-f)/u)>i)f=u,o=-(n+c)*(n+r+c)*e/(n+2*c)/(n+2*c+1),a=u+o*a,s=l+o*s,c+=1,o=c*(r-c)*e/(n+2*c-1)/(n+2*c),u=a+o*u,l=s+o*l,a/=l,s/=l,u/=l,l=1;return u/n}function r(e){return e/t.abs(e)}function i(n,r,i){var o=12,a=6,s=-30,u=-50,l=60,c=8,f=3,p=2,d=3,y=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],m=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],T=.5*n;if(T>=c)return 1;var v,b=2*e.normal.cdf(T,0,1,1,0)-1;b=b>=t.exp(u/i)?t.pow(b,i):0,v=n>f?p:d;for(var S=T,g=(c-T)/v,E=S+g,h=0,x=i-1,P=1;P<=v;P++){for(var A=0,O=.5*(E+S),w=.5*(E-S),_=1;_<=o;_++){var I,N;a<_?(I=o-_+1,N=y[I-1]):(I=_,N=-y[I-1]);var j=w*N,D=O+j,L=D*D;if(L>l)break;var C=2*e.normal.cdf(D,0,1,1,0),M=2*e.normal.cdf(D,n,1,1,0),B=.5*C-.5*M;B>=t.exp(s/x)&&(B=m[I-1]*t.exp(-.5*L)*t.pow(B,x),A+=B)}A*=2*w*i/t.sqrt(2*t.PI),h+=A,S=E,E+=g}return b+=h,b<=t.exp(s/r)?0:(b=t.pow(b,r),b>=1?1:b)}function o(e,n,r){var i=.322232421088,o=.099348462606,a=-1,s=.588581570495,u=-.342242088547,l=.531103462366,c=-.204231210125,f=.10353775285,p=-453642210148e-16,d=.0038560700634,y=.8832,m=.2368,T=1.214,v=1.208,b=1.4142,S=120,g=.5-.5*e,E=t.sqrt(t.log(1/(g*g))),h=E+((((E*p+c)*E+u)*E+a)*E+i)/((((E*d+f)*E+l)*E+s)*E+o);r<S&&(h+=(h*h*h+h)/r/4);var x=y-m*h;return r<S&&(x+=-T/r+v*h/r),h*(x*t.log(n-1)+b)}(function(t){for(var n=0;n<t.length;n++)(function(t){e[t]=function e(t,n,r){return this instanceof e?(this._a=t,this._b=n,this._c=r,this):new e(t,n,r)},e.fn[t]=function(n,r,i){var o=e[t](n,r,i);return o.data=this,o},e[t].prototype.sample=function(n){var r=this._a,i=this._b,o=this._c;return n?e.alter(n,(function(){return e[t].sample(r,i,o)})):e[t].sample(r,i,o)},function(n){for(var r=0;r<n.length;r++)(function(n){e[t].prototype[n]=function(r){var i=this._a,o=this._b,a=this._c;return r||0===r||(r=this.data),"number"!==typeof r?e.fn.map.call(r,(function(r){return e[t][n](r,i,o,a)})):e[t][n](r,i,o,a)}})(n[r])}("pdf cdf inv".split(" ")),function(n){for(var r=0;r<n.length;r++)(function(n){e[t].prototype[n]=function(){return e[t][n](this._a,this._b,this._c)}})(n[r])}("mean median mode variance".split(" "))})(t[n])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),e.extend(e.beta,{pdf:function(n,r,i){return n>1||n<0?0:1==r&&1==i?1:r<512&&i<512?t.pow(n,r-1)*t.pow(1-n,i-1)/e.betafn(r,i):t.exp((r-1)*t.log(n)+(i-1)*t.log(1-n)-e.betaln(r,i))},cdf:function(t,n,r){return t>1||t<0?1*(t>1):e.ibeta(t,n,r)},inv:function(t,n,r){return e.ibetainv(t,n,r)},mean:function(e,t){return e/(e+t)},median:function(t,n){return e.ibetainv(.5,t,n)},mode:function(e,t){return(e-1)/(e+t-2)},sample:function(t,n){var r=e.randg(t);return r/(r+e.randg(n))},variance:function(e,n){return e*n/(t.pow(e+n,2)*(e+n+1))}}),e.extend(e.centralF,{pdf:function(n,r,i){var o,a,s;return n<0?0:r<=2?0===n&&r<2?1/0:0===n&&2===r?1:1/e.betafn(r/2,i/2)*t.pow(r/i,r/2)*t.pow(n,r/2-1)*t.pow(1+r/i*n,-(r+i)/2):(o=r*n/(i+n*r),a=i/(i+n*r),s=r*a/2,s*e.binomial.pdf((r-2)/2,(r+i-2)/2,o))},cdf:function(t,n,r){return t<0?0:e.ibeta(n*t/(n*t+r),n/2,r/2)},inv:function(t,n,r){return r/(n*(1/e.ibetainv(t,n/2,r/2)-1))},mean:function(e,t){return t>2?t/(t-2):void 0},mode:function(e,t){return e>2?t*(e-2)/(e*(t+2)):void 0},sample:function(t,n){var r=2*e.randg(t/2),i=2*e.randg(n/2);return r/t/(i/n)},variance:function(e,t){if(!(t<=4))return 2*t*t*(e+t-2)/(e*(t-2)*(t-2)*(t-4))}}),e.extend(e.cauchy,{pdf:function(e,n,r){return r<0?0:r/(t.pow(e-n,2)+t.pow(r,2))/t.PI},cdf:function(e,n,r){return t.atan((e-n)/r)/t.PI+.5},inv:function(e,n,r){return n+r*t.tan(t.PI*(e-.5))},median:function(e){return e},mode:function(e){return e},sample:function(n,r){return e.randn()*t.sqrt(1/(2*e.randg(.5)))*r+n}}),e.extend(e.chisquare,{pdf:function(n,r){return n<0?0:0===n&&2===r?.5:t.exp((r/2-1)*t.log(n)-n/2-r/2*t.log(2)-e.gammaln(r/2))},cdf:function(t,n){return t<0?0:e.lowRegGamma(n/2,t/2)},inv:function(t,n){return 2*e.gammapinv(t,.5*n)},mean:function(e){return e},median:function(e){return e*t.pow(1-2/(9*e),3)},mode:function(e){return e-2>0?e-2:0},sample:function(t){return 2*e.randg(t/2)},variance:function(e){return 2*e}}),e.extend(e.exponential,{pdf:function(e,n){return e<0?0:n*t.exp(-n*e)},cdf:function(e,n){return e<0?0:1-t.exp(-n*e)},inv:function(e,n){return-t.log(1-e)/n},mean:function(e){return 1/e},median:function(e){return 1/e*t.log(2)},mode:function(){return 0},sample:function(n){return-1/n*t.log(e._random_fn())},variance:function(e){return t.pow(e,-2)}}),e.extend(e.gamma,{pdf:function(n,r,i){return n<0?0:0===n&&1===r?1/i:t.exp((r-1)*t.log(n)-n/i-e.gammaln(r)-r*t.log(i))},cdf:function(t,n,r){return t<0?0:e.lowRegGamma(n,t/r)},inv:function(t,n,r){return e.gammapinv(t,n)*r},mean:function(e,t){return e*t},mode:function(e,t){if(e>1)return(e-1)*t},sample:function(t,n){return e.randg(t)*n},variance:function(e,t){return e*t*t}}),e.extend(e.invgamma,{pdf:function(n,r,i){return n<=0?0:t.exp(-(r+1)*t.log(n)-i/n-e.gammaln(r)+r*t.log(i))},cdf:function(t,n,r){return t<=0?0:1-e.lowRegGamma(n,r/t)},inv:function(t,n,r){return r/e.gammapinv(1-t,n)},mean:function(e,t){return e>1?t/(e-1):void 0},mode:function(e,t){return t/(e+1)},sample:function(t,n){return n/e.randg(t)},variance:function(e,t){if(!(e<=2))return t*t/((e-1)*(e-1)*(e-2))}}),e.extend(e.kumaraswamy,{pdf:function(e,n,r){return 0===e&&1===n?r:1===e&&1===r?n:t.exp(t.log(n)+t.log(r)+(n-1)*t.log(e)+(r-1)*t.log(1-t.pow(e,n)))},cdf:function(e,n,r){return e<0?0:e>1?1:1-t.pow(1-t.pow(e,n),r)},inv:function(e,n,r){return t.pow(1-t.pow(1-e,1/r),1/n)},mean:function(t,n){return n*e.gammafn(1+1/t)*e.gammafn(n)/e.gammafn(1+1/t+n)},median:function(e,n){return t.pow(1-t.pow(2,-1/n),1/e)},mode:function(e,n){if(e>=1&&n>=1&&1!==e&&1!==n)return t.pow((e-1)/(e*n-1),1/e)},variance:function(){throw new Error("variance not yet implemented")}}),e.extend(e.lognormal,{pdf:function(e,n,r){return e<=0?0:t.exp(-t.log(e)-.5*t.log(2*t.PI)-t.log(r)-t.pow(t.log(e)-n,2)/(2*r*r))},cdf:function(n,r,i){return n<0?0:.5+.5*e.erf((t.log(n)-r)/t.sqrt(2*i*i))},inv:function(n,r,i){return t.exp(-1.4142135623730951*i*e.erfcinv(2*n)+r)},mean:function(e,n){return t.exp(e+n*n/2)},median:function(e){return t.exp(e)},mode:function(e,n){return t.exp(e-n*n)},sample:function(n,r){return t.exp(e.randn()*r+n)},variance:function(e,n){return(t.exp(n*n)-1)*t.exp(2*e+n*n)}}),e.extend(e.noncentralt,{pdf:function(n,r,i){var o=1e-14;return t.abs(i)<o?e.studentt.pdf(n,r):t.abs(n)<o?t.exp(e.gammaln((r+1)/2)-i*i/2-.5*t.log(t.PI*r)-e.gammaln(r/2)):r/n*(e.noncentralt.cdf(n*t.sqrt(1+2/r),r+2,i)-e.noncentralt.cdf(n,r,i))},cdf:function(n,r,i){var o=1e-14,a=200;if(t.abs(i)<o)return e.studentt.cdf(n,r);var s=!1;n<0&&(s=!0,i=-i);var u=e.normal.cdf(-i,0,1),l=o+1,c=l,f=n*n/(n*n+r),p=0,d=t.exp(-i*i/2),y=t.exp(-i*i/2-.5*t.log(2)-e.gammaln(1.5))*i;while(p<a||c>o||l>o)c=l,p>0&&(d*=i*i/(2*p),y*=i*i/(2*(p+.5))),l=d*e.beta.cdf(f,p+.5,r/2)+y*e.beta.cdf(f,p+1,r/2),u+=.5*l,p++;return s?1-u:u}}),e.extend(e.normal,{pdf:function(e,n,r){return t.exp(-.5*t.log(2*t.PI)-t.log(r)-t.pow(e-n,2)/(2*r*r))},cdf:function(n,r,i){return.5*(1+e.erf((n-r)/t.sqrt(2*i*i)))},inv:function(t,n,r){return-1.4142135623730951*r*e.erfcinv(2*t)+n},mean:function(e){return e},median:function(e){return e},mode:function(e){return e},sample:function(t,n){return e.randn()*n+t},variance:function(e,t){return t*t}}),e.extend(e.pareto,{pdf:function(e,n,r){return e<n?0:r*t.pow(n,r)/t.pow(e,r+1)},cdf:function(e,n,r){return e<n?0:1-t.pow(n/e,r)},inv:function(e,n,r){return n/t.pow(1-e,1/r)},mean:function(e,n){if(!(n<=1))return n*t.pow(e,n)/(n-1)},median:function(e,n){return e*(n*t.SQRT2)},mode:function(e){return e},variance:function(e,n){if(!(n<=2))return e*e*n/(t.pow(n-1,2)*(n-2))}}),e.extend(e.studentt,{pdf:function(n,r){return r=r>1e100?1e100:r,1/(t.sqrt(r)*e.betafn(.5,r/2))*t.pow(1+n*n/r,-(r+1)/2)},cdf:function(n,r){var i=r/2;return e.ibeta((n+t.sqrt(n*n+r))/(2*t.sqrt(n*n+r)),i,i)},inv:function(n,r){var i=e.ibetainv(2*t.min(n,1-n),.5*r,.5);return i=t.sqrt(r*(1-i)/i),n>.5?i:-i},mean:function(e){return e>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(n){return e.randn()*t.sqrt(n/(2*e.randg(n/2)))},variance:function(e){return e>2?e/(e-2):e>1?1/0:void 0}}),e.extend(e.weibull,{pdf:function(e,n,r){return e<0||n<0||r<0?0:r/n*t.pow(e/n,r-1)*t.exp(-t.pow(e/n,r))},cdf:function(e,n,r){return e<0?0:1-t.exp(-t.pow(e/n,r))},inv:function(e,n,r){return n*t.pow(-t.log(1-e),1/r)},mean:function(t,n){return t*e.gammafn(1+1/n)},median:function(e,n){return e*t.pow(t.log(2),1/n)},mode:function(e,n){return n<=1?0:e*t.pow((n-1)/n,1/n)},sample:function(n,r){return n*t.pow(-t.log(e._random_fn()),1/r)},variance:function(n,r){return n*n*e.gammafn(1+2/r)-t.pow(e.weibull.mean(n,r),2)}}),e.extend(e.uniform,{pdf:function(e,t,n){return e<t||e>n?0:1/(n-t)},cdf:function(e,t,n){return e<t?0:e<n?(e-t)/(n-t):1},inv:function(e,t,n){return t+e*(n-t)},mean:function(e,t){return.5*(e+t)},median:function(t,n){return e.mean(t,n)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(t,n){return t/2+n/2+(n/2-t/2)*(2*e._random_fn()-1)},variance:function(e,n){return t.pow(n-e,2)/12}}),e.extend(e.binomial,{pdf:function(n,r,i){return 0===i||1===i?r*i===n?1:0:e.combination(r,n)*t.pow(i,n)*t.pow(1-i,r-n)},cdf:function(r,i,o){var a,s=1e-10;if(r<0)return 0;if(r>=i)return 1;if(o<0||o>1||i<=0)return NaN;r=t.floor(r);var u=o,l=r+1,c=i-r,f=l+c,p=t.exp(e.gammaln(f)-e.gammaln(c)-e.gammaln(l)+l*t.log(u)+c*t.log(1-u));return a=u<(l+1)/(f+2)?p*n(u,l,c,s):1-p*n(1-u,c,l,s),t.round(1/s*(1-a))/(1/s)}}),e.extend(e.negbin,{pdf:function(n,r,i){return n===n>>>0&&(n<0?0:e.combination(n+r-1,r-1)*t.pow(1-i,n)*t.pow(i,r))},cdf:function(t,n,r){var i=0,o=0;if(t<0)return 0;for(;o<=t;o++)i+=e.negbin.pdf(o,n,r);return i}}),e.extend(e.hypgeom,{pdf:function(n,r,i,o){if(n!==n|0)return!1;if(n<0||n<i-(r-o))return 0;if(n>o||n>i)return 0;if(2*i>r)return 2*o>r?e.hypgeom.pdf(r-i-o+n,r,r-i,r-o):e.hypgeom.pdf(o-n,r,r-i,o);if(2*o>r)return e.hypgeom.pdf(i-n,r,i,r-o);if(i<o)return e.hypgeom.pdf(n,r,o,i);for(var a=1,s=0,u=0;u<n;u++){while(a>1&&s<o)a*=1-i/(r-s),s++;a*=(o-u)*(i-u)/((u+1)*(r-i-o+u+1))}for(;s<o;s++)a*=1-i/(r-s);return t.min(1,t.max(0,a))},cdf:function(n,r,i,o){if(n<0||n<i-(r-o))return 0;if(n>=o||n>=i)return 1;if(2*i>r)return 2*o>r?e.hypgeom.cdf(r-i-o+n,r,r-i,r-o):1-e.hypgeom.cdf(o-n-1,r,r-i,o);if(2*o>r)return 1-e.hypgeom.cdf(i-n-1,r,i,r-o);if(i<o)return e.hypgeom.cdf(n,r,o,i);for(var a=1,s=1,u=0,l=0;l<n;l++){while(a>1&&u<o){var c=1-i/(r-u);s*=c,a*=c,u++}s*=(o-l)*(i-l)/((l+1)*(r-i-o+l+1)),a+=s}for(;u<o;u++)a*=1-i/(r-u);return t.min(1,t.max(0,a))}}),e.extend(e.poisson,{pdf:function(n,r){return r<0||n%1!==0||n<0?0:t.pow(r,n)*t.exp(-r)/e.factorial(n)},cdf:function(t,n){var r=[],i=0;if(t<0)return 0;for(;i<=t;i++)r.push(e.poisson.pdf(i,n));return e.sum(r)},mean:function(e){return e},variance:function(e){return e},sampleSmall:function(n){var r=1,i=0,o=t.exp(-n);do{i++,r*=e._random_fn()}while(r>o);return i-1},sampleLarge:function(n){var r,i,o,a,s,u,l,c,f,p,d=n;a=t.sqrt(d),s=t.log(d),l=.931+2.53*a,u=.02483*l-.059,c=1.1239+1.1328/(l-3.4),f=.9277-3.6224/(l-2);while(1){if(i=t.random()-.5,o=t.random(),p=.5-t.abs(i),r=t.floor((2*u/p+l)*i+d+.43),p>=.07&&o<=f)return r;if(!(r<0||p<.013&&o>p)&&t.log(o)+t.log(c)-t.log(u/(p*p)+l)<=r*s-d-e.loggam(r+1))return r}},sample:function(e){return e<10?this.sampleSmall(e):this.sampleLarge(e)}}),e.extend(e.triangular,{pdf:function(e,t,n,r){return n<=t||r<t||r>n?NaN:e<t||e>n?0:e<r?2*(e-t)/((n-t)*(r-t)):e===r?2/(n-t):2*(n-e)/((n-t)*(n-r))},cdf:function(e,n,r,i){return r<=n||i<n||i>r?NaN:e<=n?0:e>=r?1:e<=i?t.pow(e-n,2)/((r-n)*(i-n)):1-t.pow(r-e,2)/((r-n)*(r-i))},inv:function(e,n,r,i){return r<=n||i<n||i>r?NaN:e<=(i-n)/(r-n)?n+(r-n)*t.sqrt(e*((i-n)/(r-n))):n+(r-n)*(1-t.sqrt((1-e)*(1-(i-n)/(r-n))))},mean:function(e,t,n){return(e+t+n)/3},median:function(e,n,r){return r<=(e+n)/2?n-t.sqrt((n-e)*(n-r))/t.sqrt(2):r>(e+n)/2?e+t.sqrt((n-e)*(r-e))/t.sqrt(2):void 0},mode:function(e,t,n){return n},sample:function(n,r,i){var o=e._random_fn();return o<(i-n)/(r-n)?n+t.sqrt(o*(r-n)*(i-n)):r-t.sqrt((1-o)*(r-n)*(r-i))},variance:function(e,t,n){return(e*e+t*t+n*n-e*t-e*n-t*n)/18}}),e.extend(e.arcsine,{pdf:function(e,n,r){return r<=n?NaN:e<=n||e>=r?0:2/t.PI*t.pow(t.pow(r-n,2)-t.pow(2*e-n-r,2),-.5)},cdf:function(e,n,r){return e<n?0:e<r?2/t.PI*t.asin(t.sqrt((e-n)/(r-n))):1},inv:function(e,n,r){return n+(.5-.5*t.cos(t.PI*e))*(r-n)},mean:function(e,t){return t<=e?NaN:(e+t)/2},median:function(e,t){return t<=e?NaN:(e+t)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(n,r){return(n+r)/2+(r-n)/2*t.sin(2*t.PI*e.uniform.sample(0,1))},variance:function(e,n){return n<=e?NaN:t.pow(n-e,2)/8}}),e.extend(e.laplace,{pdf:function(e,n,r){return r<=0?0:t.exp(-t.abs(e-n)/r)/(2*r)},cdf:function(e,n,r){return r<=0?0:e<n?.5*t.exp((e-n)/r):1-.5*t.exp(-(e-n)/r)},mean:function(e){return e},median:function(e){return e},mode:function(e){return e},variance:function(e,t){return 2*t*t},sample:function(n,i){var o=e._random_fn()-.5;return n-i*r(o)*t.log(1-2*t.abs(o))}}),e.extend(e.tukey,{cdf:function(n,r,o){var a=1,s=r,u=16,l=8,c=-30,f=1e-14,p=100,d=800,y=5e3,m=25e3,T=1,v=.5,b=.25,S=.125,g=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],E=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(n<=0)return 0;if(o<2||a<1||s<2)return NaN;if(!Number.isFinite(n))return 1;if(o>m)return i(n,a,s);var h,x=.5*o,P=x*t.log(o)-o*t.log(2)-e.gammaln(x),A=x-1,O=.25*o;h=o<=p?T:o<=d?v:o<=y?b:S,P+=t.log(h);for(var w=0,_=1;_<=50;_++){for(var I=0,N=(2*_-1)*h,j=1;j<=u;j++){var D,L,C;if(l<j?(D=j-l-1,L=P+A*t.log(N+g[D]*h)-(g[D]*h+N)*O):(D=j-1,L=P+A*t.log(N-g[D]*h)+(g[D]*h-N)*O),L>=c){C=l<j?n*t.sqrt(.5*(g[D]*h+N)):n*t.sqrt(.5*(-g[D]*h+N));var M=i(C,a,s),B=M*E[D]*t.exp(L);I+=B}}if(_*h>=1&&I<=f)break;w+=I}if(I>f)throw new Error("tukey.cdf failed to converge");return w>1&&(w=1),w},inv:function(n,r,i){var a=1,s=r,u=1e-4,l=50;if(i<2||a<1||s<2)return NaN;if(n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return 1/0;var c,f=o(n,s,i),p=e.tukey.cdf(f,r,i)-n;c=p>0?t.max(0,f-1):f+1;for(var d,y=e.tukey.cdf(c,r,i)-n,m=1;m<l;m++){d=c-y*(c-f)/(y-p),p=y,f=c,d<0&&(d=0,y=-n),y=e.tukey.cdf(d,r,i)-n,c=d;var T=t.abs(c-f);if(T<u)return d}throw new Error("tukey.inv failed to converge")}})}(e,Math),function(e,t){var n=Array.prototype.push,r=e.utils.isArray;function i(t){return r(t)||t instanceof e}e.extend({add:function(t,n){return i(n)?(i(n[0])||(n=[n]),e.map(t,(function(e,t,r){return e+n[t][r]}))):e.map(t,(function(e){return e+n}))},subtract:function(t,n){return i(n)?(i(n[0])||(n=[n]),e.map(t,(function(e,t,r){return e-n[t][r]||0}))):e.map(t,(function(e){return e-n}))},divide:function(t,n){return i(n)?(i(n[0])||(n=[n]),e.multiply(t,e.inv(n))):e.map(t,(function(e){return e/n}))},multiply:function(t,n){var r,o,a,s,u,l,c,f;if(void 0===t.length&&void 0===n.length)return t*n;if(u=t.length,l=t[0].length,c=e.zeros(u,a=i(n)?n[0].length:l),f=0,i(n)){for(;f<a;f++)for(r=0;r<u;r++){for(s=0,o=0;o<l;o++)s+=t[r][o]*n[o][f];c[r][f]=s}return 1===u&&1===f?c[0][0]:c}return e.map(t,(function(e){return e*n}))},outer:function(t,n){return e.multiply(t.map((function(e){return[e]})),[n])},dot:function(t,n){i(t[0])||(t=[t]),i(n[0])||(n=[n]);for(var r,o,a=1===t[0].length&&1!==t.length?e.transpose(t):t,s=1===n[0].length&&1!==n.length?e.transpose(n):n,u=[],l=0,c=a.length,f=a[0].length;l<c;l++){for(u[l]=[],r=0,o=0;o<f;o++)r+=a[l][o]*s[l][o];u[l]=r}return 1===u.length?u[0]:u},pow:function(n,r){return e.map(n,(function(e){return t.pow(e,r)}))},exp:function(n){return e.map(n,(function(e){return t.exp(e)}))},log:function(n){return e.map(n,(function(e){return t.log(e)}))},abs:function(n){return e.map(n,(function(e){return t.abs(e)}))},norm:function(e,n){var r=0,o=0;for(isNaN(n)&&(n=2),i(e[0])&&(e=e[0]);o<e.length;o++)r+=t.pow(t.abs(e[o]),n);return t.pow(r,1/n)},angle:function(n,r){return t.acos(e.dot(n,r)/(e.norm(n)*e.norm(r)))},aug:function(e,t){var r,i=[];for(r=0;r<e.length;r++)i.push(e[r].slice());for(r=0;r<i.length;r++)n.apply(i[r],t[r]);return i},inv:function(t){for(var n,r=t.length,i=t[0].length,o=e.identity(r,i),a=e.gauss_jordan(t,o),s=[],u=0;u<r;u++)for(s[u]=[],n=i;n<a[0].length;n++)s[u][n-i]=a[u][n];return s},det:function(e){var t,n=e.length,r=2*n,i=new Array(r),o=n-1,a=r-1,s=o-n+1,u=a,l=0,c=0;if(2===n)return e[0][0]*e[1][1]-e[0][1]*e[1][0];for(;l<r;l++)i[l]=1;for(l=0;l<n;l++){for(t=0;t<n;t++)i[s<0?s+n:s]*=e[l][t],i[u<n?u+n:u]*=e[l][t],s++,u--;s=--o-n+1,u=--a}for(l=0;l<n;l++)c+=i[l];for(;l<r;l++)c-=i[l];return c},gauss_elimination:function(n,r){var i,o,a,s,u=0,l=0,c=n.length,f=n[0].length,p=1,d=0,y=[];for(n=e.aug(n,r),i=n[0].length,u=0;u<c;u++){for(o=n[u][u],l=u,s=u+1;s<f;s++)o<t.abs(n[s][u])&&(o=n[s][u],l=s);if(l!=u)for(s=0;s<i;s++)a=n[u][s],n[u][s]=n[l][s],n[l][s]=a;for(l=u+1;l<c;l++)for(p=n[l][u]/n[u][u],s=u;s<i;s++)n[l][s]=n[l][s]-p*n[u][s]}for(u=c-1;u>=0;u--){for(d=0,l=u+1;l<=c-1;l++)d+=y[l]*n[u][l];y[u]=(n[u][i-1]-d)/n[u][u]}return y},gauss_jordan:function(n,r){var i,o,a,s=e.aug(n,r),u=s.length,l=s[0].length,c=0;for(o=0;o<u;o++){var f=o;for(a=o+1;a<u;a++)t.abs(s[a][o])>t.abs(s[f][o])&&(f=a);var p=s[o];for(s[o]=s[f],s[f]=p,a=o+1;a<u;a++)for(c=s[a][o]/s[o][o],i=o;i<l;i++)s[a][i]-=s[o][i]*c}for(o=u-1;o>=0;o--){for(c=s[o][o],a=0;a<o;a++)for(i=l-1;i>o-1;i--)s[a][i]-=s[o][i]*s[a][o]/c;for(s[o][o]/=c,i=u;i<l;i++)s[o][i]/=c}return s},triaUpSolve:function(t,n){var r,i=t[0].length,o=e.zeros(1,i)[0],a=!1;return void 0!=n[0].length&&(n=n.map((function(e){return e[0]})),a=!0),e.arange(i-1,-1,-1).forEach((function(a){r=e.arange(a+1,i).map((function(e){return o[e]*t[a][e]})),o[a]=(n[a]-e.sum(r))/t[a][a]})),a?o.map((function(e){return[e]})):o},triaLowSolve:function(t,n){var r,i=t[0].length,o=e.zeros(1,i)[0],a=!1;return void 0!=n[0].length&&(n=n.map((function(e){return e[0]})),a=!0),e.arange(i).forEach((function(i){r=e.arange(i).map((function(e){return t[i][e]*o[e]})),o[i]=(n[i]-e.sum(r))/t[i][i]})),a?o.map((function(e){return[e]})):o},lu:function(t){var n,r=t.length,i=e.identity(r),o=e.zeros(t.length,t[0].length);return e.arange(r).forEach((function(e){o[0][e]=t[0][e]})),e.arange(1,r).forEach((function(a){e.arange(a).forEach((function(r){n=e.arange(r).map((function(e){return i[a][e]*o[e][r]})),i[a][r]=(t[a][r]-e.sum(n))/o[r][r]})),e.arange(a,r).forEach((function(r){n=e.arange(a).map((function(e){return i[a][e]*o[e][r]})),o[a][r]=t[n.length][r]-e.sum(n)}))})),[i,o]},cholesky:function(n){var r,i=n.length,o=e.zeros(n.length,n[0].length);return e.arange(i).forEach((function(a){r=e.arange(a).map((function(e){return t.pow(o[a][e],2)})),o[a][a]=t.sqrt(n[a][a]-e.sum(r)),e.arange(a+1,i).forEach((function(t){r=e.arange(a).map((function(e){return o[a][e]*o[t][e]})),o[t][a]=(n[a][t]-e.sum(r))/o[a][a]}))})),o},gauss_jacobi:function(n,r,i,o){for(var a,s,u,l,c=0,f=0,p=n.length,d=[],y=[],m=[];c<p;c++)for(d[c]=[],y[c]=[],m[c]=[],f=0;f<p;f++)c>f?(d[c][f]=n[c][f],y[c][f]=m[c][f]=0):c<f?(y[c][f]=n[c][f],d[c][f]=m[c][f]=0):(m[c][f]=n[c][f],d[c][f]=y[c][f]=0);u=e.multiply(e.multiply(e.inv(m),e.add(d,y)),-1),s=e.multiply(e.inv(m),r),a=i,l=e.add(e.multiply(u,i),s),c=2;while(t.abs(e.norm(e.subtract(l,a)))>o)a=l,l=e.add(e.multiply(u,a),s),c++;return l},gauss_seidel:function(n,r,i,o){for(var a,s,u,l,c,f=0,p=n.length,d=[],y=[],m=[];f<p;f++)for(d[f]=[],y[f]=[],m[f]=[],a=0;a<p;a++)f>a?(d[f][a]=n[f][a],y[f][a]=m[f][a]=0):f<a?(y[f][a]=n[f][a],d[f][a]=m[f][a]=0):(m[f][a]=n[f][a],d[f][a]=y[f][a]=0);l=e.multiply(e.multiply(e.inv(e.add(m,d)),y),-1),u=e.multiply(e.inv(e.add(m,d)),r),s=i,c=e.add(e.multiply(l,i),u),f=2;while(t.abs(e.norm(e.subtract(c,s)))>o)s=c,c=e.add(e.multiply(l,s),u),f+=1;return c},SOR:function(n,r,i,o,a){for(var s,u,l,c,f,p=0,d=n.length,y=[],m=[],T=[];p<d;p++)for(y[p]=[],m[p]=[],T[p]=[],s=0;s<d;s++)p>s?(y[p][s]=n[p][s],m[p][s]=T[p][s]=0):p<s?(m[p][s]=n[p][s],y[p][s]=T[p][s]=0):(T[p][s]=n[p][s],y[p][s]=m[p][s]=0);c=e.multiply(e.inv(e.add(T,e.multiply(y,a))),e.subtract(e.multiply(T,1-a),e.multiply(m,a))),l=e.multiply(e.multiply(e.inv(e.add(T,e.multiply(y,a))),r),a),u=i,f=e.add(e.multiply(c,i),l),p=2;while(t.abs(e.norm(e.subtract(f,u)))>o)u=f,f=e.add(e.multiply(c,u),l),p++;return f},householder:function(n){for(var r,i,o,a,s,u=n.length,l=n[0].length,c=0,f=[],p=[];c<u-1;c++){for(r=0,a=c+1;a<l;a++)r+=n[a][c]*n[a][c];for(s=n[c+1][c]>0?-1:1,r=s*t.sqrt(r),i=t.sqrt((r*r-n[c+1][c]*r)/2),f=e.zeros(u,1),f[c+1][0]=(n[c+1][c]-r)/(2*i),o=c+2;o<u;o++)f[o][0]=n[o][c]/(2*i);p=e.subtract(e.identity(u,l),e.multiply(e.multiply(f,e.transpose(f)),2)),n=e.multiply(p,e.multiply(n,p))}return n},QR:function(){var n=e.sum,r=e.arange;function i(i){var o,a,s,u=i.length,l=i[0].length,c=e.zeros(l,l);for(i=e.copy(i),a=0;a<l;a++){for(c[a][a]=t.sqrt(n(r(u).map((function(e){return i[e][a]*i[e][a]})))),o=0;o<u;o++)i[o][a]=i[o][a]/c[a][a];for(s=a+1;s<l;s++)for(c[a][s]=n(r(u).map((function(e){return i[e][a]*i[e][s]}))),o=0;o<u;o++)i[o][s]=i[o][s]-i[o][a]*c[a][s]}return[i,c]}return i}(),lstsq:function(){function t(t){t=e.copy(t);var n=t.length,r=e.identity(n);return e.arange(n-1,-1,-1).forEach((function(n){e.sliceAssign(r,{row:n},e.divide(e.slice(r,{row:n}),t[n][n])),e.sliceAssign(t,{row:n},e.divide(e.slice(t,{row:n}),t[n][n])),e.arange(n).forEach((function(i){var o=e.multiply(t[i][n],-1),a=e.slice(t,{row:i}),s=e.multiply(e.slice(t,{row:n}),o);e.sliceAssign(t,{row:i},e.add(a,s));var u=e.slice(r,{row:i}),l=e.multiply(e.slice(r,{row:n}),o);e.sliceAssign(r,{row:i},e.add(u,l))}))})),r}function n(n,r){var i=!1;void 0===r[0].length&&(r=r.map((function(e){return[e]})),i=!0);var o=e.QR(n),a=o[0],s=o[1],u=n[0].length,l=e.slice(a,{col:{end:u}}),c=e.slice(s,{row:{end:u}}),f=t(c),p=e.transpose(l);void 0===p[0].length&&(p=[p]);var d=e.multiply(e.multiply(f,p),r);return void 0===d.length&&(d=[[d]]),i?d.map((function(e){return e[0]})):d}return n}(),jacobi:function(n){var r,i,o,a,s,u,l,c,f=1,p=n.length,d=e.identity(p,p),y=[];while(1===f){for(u=n[0][1],a=0,s=1,i=0;i<p;i++)for(o=0;o<p;o++)i!=o&&u<t.abs(n[i][o])&&(u=t.abs(n[i][o]),a=i,s=o);for(l=n[a][a]===n[s][s]?n[a][s]>0?t.PI/4:-t.PI/4:t.atan(2*n[a][s]/(n[a][a]-n[s][s]))/2,c=e.identity(p,p),c[a][a]=t.cos(l),c[a][s]=-t.sin(l),c[s][a]=t.sin(l),c[s][s]=t.cos(l),d=e.multiply(d,c),r=e.multiply(e.multiply(e.inv(c),n),c),n=r,f=0,i=1;i<p;i++)for(o=1;o<p;o++)i!=o&&t.abs(n[i][o])>.001&&(f=1)}for(i=0;i<p;i++)y.push(n[i][i]);return[d,y]},rungekutta:function(e,t,n,r,i,o){var a,s,u,l,c;if(2===o)while(r<=n)a=t*e(r,i),s=t*e(r+t,i+a),u=i+(a+s)/2,i=u,r+=t;if(4===o)while(r<=n)a=t*e(r,i),s=t*e(r+t/2,i+a/2),l=t*e(r+t/2,i+s/2),c=t*e(r+t,i+l),u=i+(a+2*s+2*l+c)/6,i=u,r+=t;return i},romberg:function(e,n,r,i){var o,a,s,u,l,c=0,f=(r-n)/2,p=[],d=[],y=[];while(c<i/2){for(l=e(n),s=n,u=0;s<=r;s+=f,u++)p[u]=s;for(o=p.length,s=1;s<o-1;s++)l+=(s%2!==0?4:2)*e(p[s]);l=f/3*(l+e(r)),y[c]=l,f/=2,c++}a=y.length,o=1;while(1!==a){for(s=0;s<a-1;s++)d[s]=(t.pow(4,o)*y[s+1]-y[s])/(t.pow(4,o)-1);a=d.length,y=d,d=[],o++}return y},richardson:function(e,n,r,i){function o(e,t){for(var n,r=0,i=e.length;r<i;r++)e[r]===t&&(n=r);return n}var a,s,u,l,c,f=t.abs(r-e[o(e,r)+1]),p=0,d=[],y=[];while(i>=f)a=o(e,r+i),s=o(e,r),d[p]=(n[a]-2*n[s]+n[2*s-a])/(i*i),i/=2,p++;l=d.length,u=1;while(1!=l){for(c=0;c<l-1;c++)y[c]=(t.pow(4,u)*d[c+1]-d[c])/(t.pow(4,u)-1);l=y.length,d=y,y=[],u++}return d},simpson:function(e,t,n,r){for(var i,o=(n-t)/r,a=e(t),s=[],u=t,l=0,c=1;u<=n;u+=o,l++)s[l]=u;for(i=s.length;c<i-1;c++)a+=(c%2!==0?4:2)*e(s[c]);return o/3*(a+e(n))},hermite:function(e,t,n,r){for(var i,o=e.length,a=0,s=0,u=[],l=[],c=[],f=[];s<o;s++){for(u[s]=1,i=0;i<o;i++)s!=i&&(u[s]*=(r-e[i])/(e[s]-e[i]));for(l[s]=0,i=0;i<o;i++)s!=i&&(l[s]+=1/(e[s]-e[i]));c[s]=(1-2*(r-e[s])*l[s])*(u[s]*u[s]),f[s]=(r-e[s])*(u[s]*u[s]),a+=c[s]*t[s]+f[s]*n[s]}return a},lagrange:function(e,t,n){for(var r,i,o=0,a=0,s=e.length;a<s;a++){for(i=t[a],r=0;r<s;r++)a!=r&&(i*=(n-e[r])/(e[a]-e[r]));o+=i}return o},cubic_spline:function(t,n,r){for(var i,o=t.length,a=0,s=[],u=[],l=[],c=[],f=[],p=[],d=[];a<o-1;a++)f[a]=t[a+1]-t[a];for(l[0]=0,a=1;a<o-1;a++)l[a]=3/f[a]*(n[a+1]-n[a])-3/f[a-1]*(n[a]-n[a-1]);for(a=1;a<o-1;a++)s[a]=[],u[a]=[],s[a][a-1]=f[a-1],s[a][a]=2*(f[a-1]+f[a]),s[a][a+1]=f[a],u[a][0]=l[a];for(c=e.multiply(e.inv(s),u),i=0;i<o-1;i++)p[i]=(n[i+1]-n[i])/f[i]-f[i]*(c[i+1][0]+2*c[i][0])/3,d[i]=(c[i+1][0]-c[i][0])/(3*f[i]);for(i=0;i<o;i++)if(t[i]>r)break;return i-=1,n[i]+(r-t[i])*p[i]+e.sq(r-t[i])*c[i]+(r-t[i])*e.sq(r-t[i])*d[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(t){var n,r,i=t.length,o=t[0].length,a=0,s=[],u=[],l=[],c=[],f=[],p=[],d=[],y=[],m=[],T=[];for(a=0;a<i;a++)s[a]=e.sum(t[a])/o;for(a=0;a<o;a++)for(d[a]=[],n=0;n<i;n++)d[a][n]=t[n][a]-s[n];for(d=e.transpose(d),a=0;a<i;a++)for(y[a]=[],n=0;n<i;n++)y[a][n]=e.dot([d[a]],[d[n]])/(o-1);for(l=e.jacobi(y),m=l[0],u=l[1],T=e.transpose(m),a=0;a<u.length;a++)for(n=a;n<u.length;n++)u[a]<u[n]&&(r=u[a],u[a]=u[n],u[n]=r,c=T[a],T[a]=T[n],T[n]=c);for(p=e.transpose(d),a=0;a<i;a++)for(f[a]=[],n=0;n<p.length;n++)f[a][n]=e.dot([T[a]],[p[n]]);return[t,u,T,f]}}),function(t){for(var n=0;n<t.length;n++)(function(t){e.fn[t]=function(n,r){var i=this;return r?(setTimeout((function(){r.call(i,e.fn[t].call(i,n))}),15),this):"number"===typeof e[t](this,n)?e[t](this,n):e(e[t](this,n))}})(t[n])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(e,Math),function(e,t){var n=[].slice,r=e.utils.isNumber,i=e.utils.isArray;function o(e,n,r,i){if(e>1||r>1||e<=0||r<=0)throw new Error("Proportions should be greater than 0 and less than 1");var o=(e*n+r*i)/(n+i),a=t.sqrt(o*(1-o)*(1/n+1/i));return(e-r)/a}e.extend({zscore:function(){var t=n.call(arguments);return r(t[1])?(t[0]-t[1])/t[2]:(t[0]-e.mean(t[1]))/e.stdev(t[1],t[2])},ztest:function(){var r,o=n.call(arguments);return i(o[1])?(r=e.zscore(o[0],o[1],o[3]),1===o[2]?e.normal.cdf(-t.abs(r),0,1):2*e.normal.cdf(-t.abs(r),0,1)):o.length>2?(r=e.zscore(o[0],o[1],o[2]),1===o[3]?e.normal.cdf(-t.abs(r),0,1):2*e.normal.cdf(-t.abs(r),0,1)):(r=o[0],1===o[1]?e.normal.cdf(-t.abs(r),0,1):2*e.normal.cdf(-t.abs(r),0,1))}}),e.extend(e.fn,{zscore:function(e,t){return(e-this.mean())/this.stdev(t)},ztest:function(n,r,i){var o=t.abs(this.zscore(n,i));return 1===r?e.normal.cdf(-o,0,1):2*e.normal.cdf(-o,0,1)}}),e.extend({tscore:function(){var r=n.call(arguments);return 4===r.length?(r[0]-r[1])/(r[2]/t.sqrt(r[3])):(r[0]-e.mean(r[1]))/(e.stdev(r[1],!0)/t.sqrt(r[1].length))},ttest:function(){var i,o=n.call(arguments);return 5===o.length?(i=t.abs(e.tscore(o[0],o[1],o[2],o[3])),1===o[4]?e.studentt.cdf(-i,o[3]-1):2*e.studentt.cdf(-i,o[3]-1)):r(o[1])?(i=t.abs(o[0]),1==o[2]?e.studentt.cdf(-i,o[1]-1):2*e.studentt.cdf(-i,o[1]-1)):(i=t.abs(e.tscore(o[0],o[1])),1==o[2]?e.studentt.cdf(-i,o[1].length-1):2*e.studentt.cdf(-i,o[1].length-1))}}),e.extend(e.fn,{tscore:function(e){return(e-this.mean())/(this.stdev(!0)/t.sqrt(this.cols()))},ttest:function(n,r){return 1===r?1-e.studentt.cdf(t.abs(this.tscore(n)),this.cols()-1):2*e.studentt.cdf(-t.abs(this.tscore(n)),this.cols()-1)}}),e.extend({anovafscore:function(){var r,i,o,a,s,u,l,c,f=n.call(arguments);if(1===f.length){for(s=new Array(f[0].length),l=0;l<f[0].length;l++)s[l]=f[0][l];f=s}for(i=new Array,l=0;l<f.length;l++)i=i.concat(f[l]);for(o=e.mean(i),r=0,l=0;l<f.length;l++)r+=f[l].length*t.pow(e.mean(f[l])-o,2);for(r/=f.length-1,u=0,l=0;l<f.length;l++)for(a=e.mean(f[l]),c=0;c<f[l].length;c++)u+=t.pow(f[l][c]-a,2);return u/=i.length-f.length,r/u},anovaftest:function(){var t,i,o,a,s=n.call(arguments);if(r(s[0]))return 1-e.centralF.cdf(s[0],s[1],s[2]);var u=e.anovafscore(s);for(t=s.length-1,o=0,a=0;a<s.length;a++)o+=s[a].length;return i=o-t-1,1-e.centralF.cdf(u,t,i)},ftest:function(t,n,r){return 1-e.centralF.cdf(t,n,r)}}),e.extend(e.fn,{anovafscore:function(){return e.anovafscore(this.toArray())},anovaftes:function(){var t,n=0;for(t=0;t<this.length;t++)n+=this[t].length;return e.ftest(this.anovafscore(),this.length-1,n-this.length)}}),e.extend({qscore:function(){var i,o,a,s,u,l=n.call(arguments);return r(l[0])?(i=l[0],o=l[1],a=l[2],s=l[3],u=l[4]):(i=e.mean(l[0]),o=e.mean(l[1]),a=l[0].length,s=l[1].length,u=l[2]),t.abs(i-o)/(u*t.sqrt((1/a+1/s)/2))},qtest:function(){var t,r=n.call(arguments);3===r.length?(t=r[0],r=r.slice(1)):7===r.length?(t=e.qscore(r[0],r[1],r[2],r[3],r[4]),r=r.slice(5)):(t=e.qscore(r[0],r[1],r[2]),r=r.slice(3));var i=r[0],o=r[1];return 1-e.tukey.cdf(t,o,i-o)},tukeyhsd:function(t){for(var n=e.pooledstdev(t),r=t.map((function(t){return e.mean(t)})),i=t.reduce((function(e,t){return e+t.length}),0),o=[],a=0;a<t.length;++a)for(var s=a+1;s<t.length;++s){var u=e.qtest(r[a],r[s],t[a].length,t[s].length,n,i,t.length);o.push([[a,s],u])}return o}}),e.extend({normalci:function(){var r,i=n.call(arguments),o=new Array(2);return r=4===i.length?t.abs(e.normal.inv(i[1]/2,0,1)*i[2]/t.sqrt(i[3])):t.abs(e.normal.inv(i[1]/2,0,1)*e.stdev(i[2])/t.sqrt(i[2].length)),o[0]=i[0]-r,o[1]=i[0]+r,o},tci:function(){var r,i=n.call(arguments),o=new Array(2);return r=4===i.length?t.abs(e.studentt.inv(i[1]/2,i[3]-1)*i[2]/t.sqrt(i[3])):t.abs(e.studentt.inv(i[1]/2,i[2].length-1)*e.stdev(i[2],!0)/t.sqrt(i[2].length)),o[0]=i[0]-r,o[1]=i[0]+r,o},significant:function(e,t){return e<t}}),e.extend(e.fn,{normalci:function(t,n){return e.normalci(t,n,this.toArray())},tci:function(t,n){return e.tci(t,n,this.toArray())}}),e.extend(e.fn,{oneSidedDifferenceOfProportions:function(t,n,r,i){var a=o(t,n,r,i);return e.ztest(a,1)},twoSidedDifferenceOfProportions:function(t,n,r,i){var a=o(t,n,r,i);return e.ztest(a,2)}})}(e,Math),e.models=function(){function t(t){var r=t[0].length,i=e.arange(r).map((function(i){var o=e.arange(r).filter((function(e){return e!==i}));return n(e.col(t,i).map((function(e){return e[0]})),e.col(t,o))}));return i}function n(t,n){var r=t.length,i=n[0].length-1,o=r-i-1,a=e.lstsq(n,t),s=e.multiply(n,a.map((function(e){return[e]}))).map((function(e){return e[0]})),u=e.subtract(t,s),l=e.mean(t),c=e.sum(s.map((function(e){return Math.pow(e-l,2)}))),f=e.sum(t.map((function(e,t){return Math.pow(e-s[t],2)}))),p=c+f,d=c/p;return{exog:n,endog:t,nobs:r,df_model:i,df_resid:o,coef:a,predict:s,resid:u,ybar:l,SST:p,SSE:c,SSR:f,R2:d}}function r(n){var r=t(n.exog),i=Math.sqrt(n.SSR/n.df_resid),o=r.map((function(e){var t=e.SST,n=e.R2;return i/Math.sqrt(t*(1-n))})),a=n.coef.map((function(e,t){return(e-0)/o[t]})),s=a.map((function(t){var r=e.studentt.cdf(t,n.df_resid);return 2*(r>.5?1-r:r)})),u=e.studentt.inv(.975,n.df_resid),l=n.coef.map((function(e,t){var n=u*o[t];return[e-n,e+n]}));return{se:o,t:a,p:s,sigmaHat:i,interval95:l}}function i(t){var n=t.R2/t.df_model/((1-t.R2)/t.df_resid),r=function(t,n,r){return e.beta.cdf(t/(r/n+t),n/2,r/2)},i=1-r(n,t.df_model,t.df_resid);return{F_statistic:n,pvalue:i}}function o(e,t){var o=n(e,t),a=r(o),s=i(o),u=1-(1-o.R2)*((o.nobs-1)/o.df_resid);return o.t=a,o.f=s,o.adjust_R2=u,o}return{ols:o}}(),e.extend({buildxmatrix:function(){for(var t=new Array(arguments.length),n=0;n<arguments.length;n++){var r=[1];t[n]=r.concat(arguments[n])}return e(t)},builddxmatrix:function(){for(var t=new Array(arguments[0].length),n=0;n<arguments[0].length;n++){var r=[1];t[n]=r.concat(arguments[0][n])}return e(t)},buildjxmatrix:function(t){for(var n=new Array(t.length),r=0;r<t.length;r++)n[r]=t[r];return e.builddxmatrix(n)},buildymatrix:function(t){return e(t).transpose()},buildjymatrix:function(e){return e.transpose()},matrixmult:function(t,n){var r,i,o,a,s;if(t.cols()==n.rows()){if(n.rows()>1){for(a=[],r=0;r<t.rows();r++)for(a[r]=[],i=0;i<n.cols();i++){for(s=0,o=0;o<t.cols();o++)s+=t.toArray()[r][o]*n.toArray()[o][i];a[r][i]=s}return e(a)}for(a=[],r=0;r<t.rows();r++)for(a[r]=[],i=0;i<n.cols();i++){for(s=0,o=0;o<t.cols();o++)s+=t.toArray()[r][o]*n.toArray()[i];a[r][i]=s}return e(a)}},regress:function(t,n){var r=e.xtranspxinv(t),i=t.transpose(),o=e.matrixmult(e(r),i);return e.matrixmult(o,n)},regresst:function(t,n,r){var i=e.regress(t,n),o={anova:{}},a=e.jMatYBar(t,i);o.yBar=a;var s=n.mean();o.anova.residuals=e.residuals(n,a),o.anova.ssr=e.ssr(a,s),o.anova.msr=o.anova.ssr/(t[0].length-1),o.anova.sse=e.sse(n,a),o.anova.mse=o.anova.sse/(n.length-(t[0].length-1)-1),o.anova.sst=e.sst(n,s),o.anova.mst=o.anova.sst/(n.length-1),o.anova.r2=1-o.anova.sse/o.anova.sst,o.anova.r2<0&&(o.anova.r2=0),o.anova.fratio=o.anova.msr/o.anova.mse,o.anova.pvalue=e.anovaftest(o.anova.fratio,t[0].length-1,n.length-(t[0].length-1)-1),o.anova.rmse=Math.sqrt(o.anova.mse),o.anova.r2adj=1-o.anova.mse/o.anova.mst,o.anova.r2adj<0&&(o.anova.r2adj=0),o.stats=new Array(t[0].length);for(var u,l,c,f=e.xtranspxinv(t),p=0;p<i.length;p++)u=Math.sqrt(o.anova.mse*Math.abs(f[p][p])),l=Math.abs(i[p]/u),c=e.ttest(l,n.length-t[0].length-1,r),o.stats[p]=[i[p],u,l,c];return o.regress=i,o},xtranspx:function(t){return e.matrixmult(t.transpose(),t)},xtranspxinv:function(t){var n=e.matrixmult(t.transpose(),t),r=e.inv(n);return r},jMatYBar:function(t,n){var r=e.matrixmult(t,n);return new e(r)},residuals:function(t,n){return e.matrixsubtract(t,n)},ssr:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=Math.pow(e[r]-t,2);return n},sse:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=Math.pow(e[r]-t[r],2);return n},sst:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=Math.pow(e[r]-t,2);return n},matrixsubtract:function(t,n){for(var r=new Array(t.length),i=0;i<t.length;i++){r[i]=new Array(t[i].length);for(var o=0;o<t[i].length;o++)r[i][o]=t[i][o]-n[i][o]}return e(r)}}),e.jStat=e,e}))},9699:function(e){"use strict";let t=null;function n(e){if(null!==t&&(t.property,1)){const e=t;return t=n.prototype=null,e}return t=n.prototype=null==e?Object.create(null):e,new n}n(),e.exports=function(e){return n(e)}},45197:function(e,t,n){"use strict";n(21703),n(26699);var r=n(44870),i=n(73396),o="undefined"!==typeof window,a=function(e,t){var n;return function(){var r=this,i=arguments,o=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(o,t)}},s=410,u=730,l="portrait",c=!0,f=100,p=function(e,t){void 0===e&&(e={}),void 0===t&&(t=f);var n=e.width||s,p=e.height||u,d=e.orientation||l,y=void 0===e.touch?c:e.touch,m=(0,r.qj)({resolution:n+"x"+p,width:n,height:p,orientation:d,portrait:"portrait"===d,landscape:"portrait"!==d,touch:y}),T=function(){m.width=window.innerWidth,m.height=window.innerHeight,m.resolution=m.width+"x"+m.height},v=function(e){m.portrait=e.matches,m.landscape=!e.matches,m.orientation=e.matches?"portrait":"landscape"};if(o){var b=a(T,t);window.addEventListener("resize",b),T();var S=window.matchMedia("(orientation: portrait)");"addEventListener"in S?S.addEventListener("change",v):S.addListener(v),v(S),m.touch="ontouchstart"in window,(0,i.FN)()&&(0,i.Ah)((function(){window.removeEventListener("resize",b),"removeEventListener"in S?S.removeEventListener("change",v):S.removeListener(v)}))}return m},d={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":1536},y={xs:"0px",sm:"480px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},m={mobile:0,tablet:769,desktop:1024,widescreen:1216,fullhd:1408},T={s:0,m:601,l:993,xl:1201},v={small:0,medium:640,large:1024},b={mobile:0,tablet:768,computer:992,large:1201},S={tailwind:d,bootstrap:y,bulma:m,materialize:T,foundation:v,semanticUi:b},g="tailwind",E=function(e){return Object.keys(e).reduce((function(e,t){return e[t]=!1,e}),{breakpoint:""})},h=function(e){if(!S[e])throw new Error('Invalid grid type "'+e+'"');return S[e]},x=function(e,t){var n=Object.keys(t).filter((function(t){return!["breakpoint"].includes(t)&&"function"!==typeof e[t]})).reverse().find((function(e){return t[e]}));return n||""},P=function(e,t){Object.keys(e).filter((function(t){return"function"===typeof e[t]})).forEach((function(n){var r=e[n];t[n]=r.call(null,t)}))},A=a(P,100),O=function(e,t){Object.keys(e).filter((function(t){return"function"!==typeof e[t]})).forEach((function(n){var r=e[n];"number"===typeof r?r+="px":r=r.toString();var o=function(r){t[n]=r.matches,t.breakpoint=x(e,t),A(e,t)},a=window.matchMedia("(min-width: "+r+")");"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),t[n]=a.matches,t.breakpoint=x(e,t),(0,i.FN)()&&(0,i.Ah)((function(){"removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o)}))})),P(e,t)};function w(e){var t;void 0===e&&(e=g),t="string"===typeof e?h(e):Object.assign(e);var n=(0,r.qj)(E(t));return o&&O(t,n),n}var _=function(e,t){var n,r;"string"===typeof t?(n=p(),r=w(t)):(t=t||{grid:void 0,ssr:void 0,debounceDelay:void 0},n=p(t.ssr,t.debounceDelay),r=w(t.grid)),e.config.globalProperties.$screen=n,e.config.globalProperties.$grid=r},I={install:_};t["ZP"]=I},11713:function(e){"use strict";e.exports=JSON.parse('["Complex64Array","Complex128Array"]')},68114:function(e){"use strict";e.exports=JSON.parse('["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]')}}]);
//# sourceMappingURL=chunk-vendors.c02c424f.js.map