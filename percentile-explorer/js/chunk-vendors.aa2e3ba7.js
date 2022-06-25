(self["webpackChunkpercentile_explorer"]=self["webpackChunkpercentile_explorer"]||[]).push([[998],{19662:function(e,t,n){var r=n(60614),i=n(66330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},96077:function(e,t,n){var r=n(60614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},51223:function(e,t,n){var r=n(5112),i=n(70030),o=n(3070).f,a=r("unscopables"),u=Array.prototype;void 0==u[a]&&o(u,a,{configurable:!0,value:i(null)}),e.exports=function(e){u[a][e]=!0}},19670:function(e,t,n){var r=n(70111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},24019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(e,t,n){"use strict";var r,i,o,a=n(24019),u=n(19781),s=n(17854),l=n(60614),c=n(70111),f=n(92597),p=n(70648),d=n(66330),y=n(68880),m=n(98052),h=n(3070).f,v=n(47976),g=n(79518),T=n(27674),b=n(5112),S=n(69711),E=s.Int8Array,x=E&&E.prototype,_=s.Uint8ClampedArray,w=_&&_.prototype,A=E&&g(E),P=x&&g(x),O=Object.prototype,N=s.TypeError,I=b("toStringTag"),j=S("TYPED_ARRAY_TAG"),D=S("TYPED_ARRAY_CONSTRUCTOR"),L=a&&!!T&&"Opera"!==p(s.opera),M=!1,C={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},k={BigInt64Array:8,BigUint64Array:8},R=function(e){if(!c(e))return!1;var t=p(e);return"DataView"===t||f(C,t)||f(k,t)},B=function(e){if(!c(e))return!1;var t=p(e);return f(C,t)||f(k,t)},F=function(e){if(B(e))return e;throw N("Target is not a typed array")},V=function(e){if(l(e)&&(!T||v(A,e)))return e;throw N(d(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(u){if(n)for(var i in C){var o=s[i];if(o&&f(o.prototype,e))try{delete o.prototype[e]}catch(a){try{o.prototype[e]=t}catch(l){}}}P[e]&&!n||m(P,e,n?t:L&&x[e]||t,r)}},Y=function(e,t,n){var r,i;if(u){if(T){if(n)for(r in C)if(i=s[r],i&&f(i,e))try{delete i[e]}catch(o){}if(A[e]&&!n)return;try{return m(A,e,n?t:L&&A[e]||t)}catch(o){}}for(r in C)i=s[r],!i||i[e]&&!n||m(i,e,t)}};for(r in C)i=s[r],o=i&&i.prototype,o?y(o,D,i):L=!1;for(r in k)i=s[r],o=i&&i.prototype,o&&y(o,D,i);if((!L||!l(A)||A===Function.prototype)&&(A=function(){throw N("Incorrect invocation")},L))for(r in C)s[r]&&T(s[r],A);if((!L||!P||P===O)&&(P=A.prototype,L))for(r in C)s[r]&&T(s[r].prototype,P);if(L&&g(w)!==P&&T(w,P),u&&!f(P,I))for(r in M=!0,h(P,I,{get:function(){return c(this)?this[j]:void 0}}),C)s[r]&&y(s[r],j,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_CONSTRUCTOR:D,TYPED_ARRAY_TAG:M&&j,aTypedArray:F,aTypedArrayConstructor:V,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:Y,isView:R,isTypedArray:B,TypedArray:A,TypedArrayPrototype:P}},41318:function(e,t,n){var r=n(45656),i=n(51400),o=n(26244),a=function(e){return function(t,n,a){var u,s=r(t),l=o(s),c=i(a,l);if(e&&n!=n){while(l>c)if(u=s[c++],u!=u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},84326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},70648:function(e,t,n){var r=n(51694),i=n(60614),o=n(84326),a=n(5112),u=a("toStringTag"),s=Object,l="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=s(e),u))?n:l?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},77741:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),a=function(e){return String(i(e).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,s=u.test(a);e.exports=function(e,t){if(s&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,u,"");return e}},99920:function(e,t,n){var r=n(92597),i=n(53887),o=n(31236),a=n(3070);e.exports=function(e,t,n){for(var u=i(t),s=a.f,l=o.f,c=0;c<u.length;c++){var f=u[c];r(e,f)||n&&r(n,f)||s(e,f,l(t,f))}}},49920:function(e,t,n){var r=n(47293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},68880:function(e,t,n){var r=n(19781),i=n(3070),o=n(79114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},79114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},98052:function(e,t,n){var r=n(60614),i=n(68880),o=n(56339),a=n(13072);e.exports=function(e,t,n,u){u||(u={});var s=u.enumerable,l=void 0!==u.name?u.name:t;return r(n)&&o(n,l,u),u.global?s?e[t]=n:a(t,n):(u.unsafe?e[t]&&(s=!0):delete e[t],s?e[t]=n:i(e,t,n)),e}},13072:function(e,t,n){var r=n(17854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},19781:function(e,t,n){var r=n(47293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},80317:function(e,t,n){var r=n(17854),i=n(70111),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},88113:function(e,t,n){var r=n(35005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(17854),a=n(88113),u=o.process,s=o.Deno,l=u&&u.versions||s&&s.version,c=l&&l.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},80748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},22914:function(e,t,n){var r=n(47293),i=n(79114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},82109:function(e,t,n){var r=n(17854),i=n(31236).f,o=n(68880),a=n(98052),u=n(13072),s=n(99920),l=n(54705);e.exports=function(e,t){var n,c,f,p,d,y,m=e.target,h=e.global,v=e.stat;if(c=h?r:v?r[m]||u(m,{}):(r[m]||{}).prototype,c)for(f in t){if(d=t[f],e.dontCallGetSet?(y=i(c,f),p=y&&y.value):p=c[f],n=l(h?f:m+(v?".":"#")+f,e.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;s(d,p)}(e.sham||p&&p.sham)&&o(d,"sham",!0),a(c,f,d,e)}}},47293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},22104:function(e,t,n){var r=n(34374),i=Function.prototype,o=i.apply,a=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?a.bind(o):function(){return a.apply(o,arguments)})},34374:function(e,t,n){var r=n(47293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},46916:function(e,t,n){var r=n(34374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},76530:function(e,t,n){var r=n(19781),i=n(92597),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=i(o,"name"),s=u&&"something"===function(){}.name,l=u&&(!r||r&&a(o,"name").configurable);e.exports={EXISTS:u,PROPER:s,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(34374),i=Function.prototype,o=i.bind,a=i.call,u=r&&o.bind(a,a);e.exports=r?function(e){return e&&u(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},35005:function(e,t,n){var r=n(17854),i=n(60614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},58173:function(e,t,n){var r=n(19662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},17854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},92597:function(e,t,n){var r=n(1702),i=n(47908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},64664:function(e,t,n){var r=n(19781),i=n(47293),o=n(80317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},68361:function(e,t,n){var r=n(1702),i=n(47293),o=n(84326),a=Object,u=r("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?u(e,""):a(e)}:a},79587:function(e,t,n){var r=n(60614),i=n(70111),o=n(27674);e.exports=function(e,t,n){var a,u;return o&&r(a=t.constructor)&&a!==n&&i(u=a.prototype)&&u!==n.prototype&&o(e,u),e}},42788:function(e,t,n){var r=n(1702),i=n(60614),o=n(5465),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return a(e)}),e.exports=o.inspectSource},58340:function(e,t,n){var r=n(70111),i=n(68880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},29909:function(e,t,n){var r,i,o,a=n(68536),u=n(17854),s=n(1702),l=n(70111),c=n(68880),f=n(92597),p=n(5465),d=n(6200),y=n(3501),m="Object already initialized",h=u.TypeError,v=u.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},T=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw h("Incompatible receiver, "+e+" required");return n}};if(a||p.state){var b=p.state||(p.state=new v),S=s(b.get),E=s(b.has),x=s(b.set);r=function(e,t){if(E(b,e))throw new h(m);return t.facade=e,x(b,e,t),t},i=function(e){return S(b,e)||{}},o=function(e){return E(b,e)}}else{var _=d("state");y[_]=!0,r=function(e,t){if(f(e,_))throw new h(m);return t.facade=e,c(e,_,t),t},i=function(e){return f(e,_)?e[_]:{}},o=function(e){return f(e,_)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:T}},60614:function(e){e.exports=function(e){return"function"==typeof e}},54705:function(e,t,n){var r=n(47293),i=n(60614),o=/#|\.prototype\./,a=function(e,t){var n=s[u(e)];return n==c||n!=l&&(i(t)?r(t):!!t)},u=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=a.data={},l=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},70111:function(e,t,n){var r=n(60614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},31913:function(e){e.exports=!1},52190:function(e,t,n){var r=n(35005),i=n(60614),o=n(47976),a=n(43307),u=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,u(e))}},26244:function(e,t,n){var r=n(17466);e.exports=function(e){return r(e.length)}},56339:function(e,t,n){var r=n(47293),i=n(60614),o=n(92597),a=n(19781),u=n(76530).CONFIGURABLE,s=n(42788),l=n(29909),c=l.enforce,f=l.get,p=Object.defineProperty,d=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||u&&e.name!==t)&&p(e,"name",{value:t,configurable:!0}),d&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=c(e);return o(r,"source")||(r.source=y.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&f(this).source||s(this)}),"toString")},74758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},30133:function(e,t,n){var r=n(7392),i=n(47293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},68536:function(e,t,n){var r=n(17854),i=n(60614),o=n(42788),a=r.WeakMap;e.exports=i(a)&&/native code/.test(o(a))},56277:function(e,t,n){var r=n(41340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},70030:function(e,t,n){var r,i=n(19670),o=n(36048),a=n(80748),u=n(3501),s=n(60490),l=n(80317),c=n(6200),f=">",p="<",d="prototype",y="script",m=c("IE_PROTO"),h=function(){},v=function(e){return p+y+f+e+p+"/"+y+f},g=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},T=function(){var e,t=l("iframe"),n="java"+y+":";return t.style.display="none",s.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?g(r):T():g(r);var e=a.length;while(e--)delete b[d][a[e]];return b()};u[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(h[d]=i(e),n=new h,h[d]=null,n[m]=e):n=b(),void 0===t?n:o.f(n,t)}},36048:function(e,t,n){var r=n(19781),i=n(3353),o=n(3070),a=n(19670),u=n(45656),s=n(81956);t.f=r&&!i?Object.defineProperties:function(e,t){a(e);var n,r=u(t),i=s(t),l=i.length,c=0;while(l>c)o.f(e,n=i[c++],r[n]);return e}},3070:function(e,t,n){var r=n(19781),i=n(64664),o=n(3353),a=n(19670),u=n(34948),s=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";t.f=r?o?function(e,t,n){if(a(e),t=u(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=c(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=u(t),a(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw s("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},31236:function(e,t,n){var r=n(19781),i=n(46916),o=n(55296),a=n(79114),u=n(45656),s=n(34948),l=n(92597),c=n(64664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=u(e),t=s(t),c)try{return f(e,t)}catch(n){}if(l(e,t))return a(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(16324),i=n(80748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},25181:function(e,t){t.f=Object.getOwnPropertySymbols},79518:function(e,t,n){var r=n(92597),i=n(60614),o=n(47908),a=n(6200),u=n(49920),s=a("IE_PROTO"),l=Object,c=l.prototype;e.exports=u?l.getPrototypeOf:function(e){var t=o(e);if(r(t,s))return t[s];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?c:null}},47976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},16324:function(e,t,n){var r=n(1702),i=n(92597),o=n(45656),a=n(41318).indexOf,u=n(3501),s=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,c=[];for(n in r)!i(u,n)&&i(r,n)&&s(c,n);while(t.length>l)i(r,n=t[l++])&&(~a(c,n)||s(c,n));return c}},81956:function(e,t,n){var r=n(16324),i=n(80748);e.exports=Object.keys||function(e){return r(e,i)}},55296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},27674:function(e,t,n){var r=n(1702),i=n(19670),o=n(96077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},92140:function(e,t,n){var r=n(46916),i=n(60614),o=n(70111),a=TypeError;e.exports=function(e,t){var n,u;if("string"===t&&i(n=e.toString)&&!o(u=r(n,e)))return u;if(i(n=e.valueOf)&&!o(u=r(n,e)))return u;if("string"!==t&&i(n=e.toString)&&!o(u=r(n,e)))return u;throw a("Can't convert object to primitive value")}},53887:function(e,t,n){var r=n(35005),i=n(1702),o=n(8006),a=n(25181),u=n(19670),s=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(u(e)),n=a.f;return n?s(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},84488:function(e){var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(72309),i=n(69711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(17854),i=n(13072),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},72309:function(e,t,n){var r=n(31913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.8",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},51400:function(e,t,n){var r=n(19303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},45656:function(e,t,n){var r=n(68361),i=n(84488);e.exports=function(e){return r(i(e))}},19303:function(e,t,n){var r=n(74758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},17466:function(e,t,n){var r=n(19303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},47908:function(e,t,n){var r=n(84488),i=Object;e.exports=function(e){return i(r(e))}},84590:function(e,t,n){var r=n(73002),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},73002:function(e,t,n){var r=n(19303),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},57593:function(e,t,n){var r=n(46916),i=n(70111),o=n(52190),a=n(58173),u=n(92140),s=n(5112),l=TypeError,c=s("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,s=a(e,c);if(s){if(void 0===t&&(t="default"),n=r(s,e,t),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},34948:function(e,t,n){var r=n(57593),i=n(52190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},51694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},41340:function(e,t,n){var r=n(70648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},66330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},69711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++i+o,36)}},43307:function(e,t,n){var r=n(30133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(19781),i=n(47293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(17854),i=n(72309),o=n(92597),a=n(69711),u=n(30133),s=n(43307),l=i("wks"),c=r.Symbol,f=c&&c["for"],p=s?c:c&&c.withoutSetter||a;e.exports=function(e){if(!o(l,e)||!u&&"string"!=typeof l[e]){var t="Symbol."+e;u&&o(c,e)?l[e]=c[e]:l[e]=s&&f?f(t):p(t)}return l[e]}},89191:function(e,t,n){"use strict";var r=n(35005),i=n(92597),o=n(68880),a=n(47976),u=n(27674),s=n(99920),l=n(2626),c=n(79587),f=n(56277),p=n(58340),d=n(77741),y=n(22914),m=n(19781),h=n(31913);e.exports=function(e,t,n,v){var g="stackTraceLimit",T=v?2:1,b=e.split("."),S=b[b.length-1],E=r.apply(null,b);if(E){var x=E.prototype;if(!h&&i(x,"cause")&&delete x.cause,!n)return E;var _=r("Error"),w=t((function(e,t){var n=f(v?t:e,void 0),r=v?new E(e):new E;return void 0!==n&&o(r,"message",n),y&&o(r,"stack",d(r.stack,2)),this&&a(x,this)&&c(r,this,w),arguments.length>T&&p(r,arguments[T]),r}));if(w.prototype=x,"Error"!==S?u?u(w,_):s(w,_,{name:!0}):m&&g in E&&(l(w,E,g),l(w,E,"prepareStackTrace")),s(w,E),!h)try{x.name!==S&&o(x,"name",S),x.constructor=w}catch(A){}return w}}},52262:function(e,t,n){"use strict";var r=n(82109),i=n(47908),o=n(26244),a=n(19303),u=n(51223);r({target:"Array",proto:!0},{at:function(e){var t=i(this),n=o(t),r=a(e),u=r>=0?r:n+r;return u<0||u>=n?void 0:t[u]}}),u("at")},26699:function(e,t,n){"use strict";var r=n(82109),i=n(41318).includes,o=n(47293),a=n(51223),u=o((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:u},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},21703:function(e,t,n){var r=n(82109),i=n(17854),o=n(22104),a=n(89191),u="WebAssembly",s=i[u],l=7!==Error("e",{cause:7}).cause,c=function(e,t){var n={};n[e]=a(e,t,l),r({global:!0,constructor:!0,arity:1,forced:l},n)},f=function(e,t){if(s&&s[e]){var n={};n[e]=a(u+"."+e,t,l),r({target:u,stat:!0,constructor:!0,arity:1,forced:l},n)}};c("Error",(function(e){return function(t){return o(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),c("URIError",(function(e){return function(t){return o(e,this,arguments)}})),f("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),f("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),f("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},24506:function(e,t,n){"use strict";var r=n(82109),i=n(1702),o=n(84488),a=n(19303),u=n(41340),s=n(47293),l=i("".charAt),c=s((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:c},{at:function(e){var t=u(o(this)),n=t.length,r=a(e),i=r>=0?r:n+r;return i<0||i>=n?void 0:l(t,i)}})},48675:function(e,t,n){"use strict";var r=n(90260),i=n(26244),o=n(19303),a=r.aTypedArray,u=r.exportTypedArrayMethod;u("at",(function(e){var t=a(this),n=i(t),r=o(e),u=r>=0?r:n+r;return u<0||u>=n?void 0:t[u]}))},3462:function(e,t,n){"use strict";var r=n(17854),i=n(46916),o=n(90260),a=n(26244),u=n(84590),s=n(47908),l=n(47293),c=r.RangeError,f=r.Int8Array,p=f&&f.prototype,d=p&&p.set,y=o.aTypedArray,m=o.exportTypedArrayMethod,h=!l((function(){var e=new Uint8ClampedArray(2);return i(d,e,{length:1,0:3},1),3!==e[1]})),v=h&&o.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var e=new f(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){y(this);var t=u(arguments.length>1?arguments[1]:void 0,1),n=s(e);if(h)return i(d,this,n,t);var r=this.length,o=a(n),l=0;if(o+t>r)throw c("Wrong length");while(l<o)this[t+l]=n[l++]}),!h||v)},37743:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierChar=c,t.isIdentifierName=f,t.isIdentifierStart=l;let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",r="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+n+"]"),o=new RegExp("["+n+r+"]");n=r=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],u=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function s(e,t){let n=65536;for(let r=0,i=t.length;r<i;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function l(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):s(e,a)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):s(e,a)||s(e,u))))}function f(e){let t=!0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(55296===(64512&r)&&n+1<e.length){const t=e.charCodeAt(++n);56320===(64512&t)&&(r=65536+((1023&r)<<10)+(1023&t))}if(t){if(t=!1,!l(r))return!1}else if(!c(r))return!1}return!t}},65502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}});var r=n(37743),i=n(67640)},67640:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isKeyword=c,t.isReservedWord=a,t.isStrictBindOnlyReservedWord=s,t.isStrictBindReservedWord=l,t.isStrictReservedWord=u;const n={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]},r=new Set(n.keyword),i=new Set(n.strict),o=new Set(n.strictBind);function a(e,t){return t&&"await"===e||"enum"===e}function u(e,t){return a(e,t)||i.has(e)}function s(e){return o.has(e)}function l(e,t){return u(e,t)||s(e)}function c(e){return r.has(e)}},87450:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(86663);function i(e){if(!(0,r.default)(e)){var t;const n=null!=(t=null==e?void 0:e.type)?t:JSON.stringify(e);throw new TypeError(`Not a valid node of type "${n}"`)}}},75318:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.assertAccessor=gi,t.assertAnyTypeAnnotation=Be,t.assertArgumentPlaceholder=yn,t.assertArrayExpression=o,t.assertArrayPattern=re,t.assertArrayTypeAnnotation=Fe,t.assertArrowFunctionExpression=ie,t.assertAssignmentExpression=a,t.assertAssignmentPattern=ne,t.assertAwaitExpression=Ae,t.assertBigIntLiteral=Oe,t.assertBinary=Vr,t.assertBinaryExpression=u,t.assertBindExpression=mn,t.assertBlock=Ur,t.assertBlockParent=Yr,t.assertBlockStatement=f,t.assertBooleanLiteral=D,t.assertBooleanLiteralTypeAnnotation=Ke,t.assertBooleanTypeAnnotation=Ve,t.assertBreakStatement=p,t.assertCallExpression=d,t.assertCatchClause=y,t.assertClass=yi,t.assertClassAccessorProperty=Le,t.assertClassBody=oe,t.assertClassDeclaration=ue,t.assertClassExpression=ae,t.assertClassImplements=Ue,t.assertClassMethod=ge,t.assertClassPrivateMethod=Ce,t.assertClassPrivateProperty=Me,t.assertClassProperty=De,t.assertCompletionStatement=Xr,t.assertConditional=Wr,t.assertConditionalExpression=m,t.assertContinueStatement=h,t.assertDebuggerStatement=v,t.assertDecimalLiteral=En,t.assertDeclaration=ni,t.assertDeclareClass=Je,t.assertDeclareExportAllDeclaration=Ze,t.assertDeclareExportDeclaration=Qe,t.assertDeclareFunction=qe,t.assertDeclareInterface=Xe,t.assertDeclareModule=We,t.assertDeclareModuleExports=$e,t.assertDeclareOpaqueType=Ge,t.assertDeclareTypeAlias=ze,t.assertDeclareVariable=He,t.assertDeclaredPredicate=et,t.assertDecorator=vn,t.assertDirective=l,t.assertDirectiveLiteral=c,t.assertDoExpression=gn,t.assertDoWhileStatement=g,t.assertEmptyStatement=T,t.assertEmptyTypeAnnotation=ft,t.assertEnumBody=wi,t.assertEnumBooleanBody=Ft,t.assertEnumBooleanMember=Ut,t.assertEnumDeclaration=Bt,t.assertEnumDefaultedMember=Xt,t.assertEnumMember=Ai,t.assertEnumNumberBody=Vt,t.assertEnumNumberMember=Jt,t.assertEnumStringBody=Kt,t.assertEnumStringMember=qt,t.assertEnumSymbolBody=Yt,t.assertExistsTypeAnnotation=tt,t.assertExportAllDeclaration=se,t.assertExportDeclaration=hi,t.assertExportDefaultDeclaration=le,t.assertExportDefaultSpecifier=Tn,t.assertExportNamedDeclaration=ce,t.assertExportNamespaceSpecifier=Ne,t.assertExportSpecifier=fe,t.assertExpression=Fr,t.assertExpressionStatement=b,t.assertExpressionWrapper=Gr,t.assertFile=S,t.assertFlow=bi,t.assertFlowBaseAnnotation=Ei,t.assertFlowDeclaration=xi,t.assertFlowPredicate=_i,t.assertFlowType=Si,t.assertFor=Hr,t.assertForInStatement=E,t.assertForOfStatement=pe,t.assertForStatement=x,t.assertForXStatement=Qr,t.assertFunction=Zr,t.assertFunctionDeclaration=_,t.assertFunctionExpression=w,t.assertFunctionParent=ei,t.assertFunctionTypeAnnotation=nt,t.assertFunctionTypeParam=rt,t.assertGenericTypeAnnotation=it,t.assertIdentifier=A,t.assertIfStatement=P,t.assertImmutable=ui,t.assertImport=Pe,t.assertImportAttribute=hn,t.assertImportDeclaration=de,t.assertImportDefaultSpecifier=ye,t.assertImportNamespaceSpecifier=me,t.assertImportSpecifier=he,t.assertIndexedAccessType=Wt,t.assertInferredPredicate=ot,t.assertInterfaceDeclaration=ut,t.assertInterfaceExtends=at,t.assertInterfaceTypeAnnotation=st,t.assertInterpreterDirective=s,t.assertIntersectionTypeAnnotation=lt,t.assertJSX=Pi,t.assertJSXAttribute=zt,t.assertJSXClosingElement=Gt,t.assertJSXClosingFragment=cn,t.assertJSXElement=Ht,t.assertJSXEmptyExpression=Qt,t.assertJSXExpressionContainer=Zt,t.assertJSXFragment=sn,t.assertJSXIdentifier=tn,t.assertJSXMemberExpression=nn,t.assertJSXNamespacedName=rn,t.assertJSXOpeningElement=on,t.assertJSXOpeningFragment=ln,t.assertJSXSpreadAttribute=an,t.assertJSXSpreadChild=en,t.assertJSXText=un,t.assertLVal=ii,t.assertLabeledStatement=O,t.assertLiteral=ai,t.assertLogicalExpression=M,t.assertLoop=$r,t.assertMemberExpression=C,t.assertMetaProperty=ve,t.assertMethod=li,t.assertMiscellaneous=Oi,t.assertMixedTypeAnnotation=ct,t.assertModuleDeclaration=mi,t.assertModuleExpression=xn,t.assertModuleSpecifier=vi,t.assertNewExpression=k,t.assertNoop=fn,t.assertNullLiteral=j,t.assertNullLiteralTypeAnnotation=Ye,t.assertNullableTypeAnnotation=pt,t.assertNumberLiteral=Li,t.assertNumberLiteralTypeAnnotation=dt,t.assertNumberTypeAnnotation=yt,t.assertNumericLiteral=I,t.assertObjectExpression=B,t.assertObjectMember=ci,t.assertObjectMethod=F,t.assertObjectPattern=Te,t.assertObjectProperty=V,t.assertObjectTypeAnnotation=mt,t.assertObjectTypeCallProperty=vt,t.assertObjectTypeIndexer=gt,t.assertObjectTypeInternalSlot=ht,t.assertObjectTypeProperty=Tt,t.assertObjectTypeSpreadProperty=bt,t.assertOpaqueType=St,t.assertOptionalCallExpression=je,t.assertOptionalIndexedAccessType=$t,t.assertOptionalMemberExpression=Ie,t.assertParenthesizedExpression=J,t.assertPattern=di,t.assertPatternLike=ri,t.assertPipelineBareFunction=An,t.assertPipelinePrimaryTopicReference=Pn,t.assertPipelineTopicExpression=wn,t.assertPlaceholder=pn,t.assertPrivate=Ti,t.assertPrivateName=ke,t.assertProgram=R,t.assertProperty=fi,t.assertPureish=ti,t.assertQualifiedTypeIdentifier=Et,t.assertRecordExpression=bn,t.assertRegExpLiteral=L,t.assertRegexLiteral=Mi,t.assertRestElement=K,t.assertRestProperty=Ci,t.assertReturnStatement=Y,t.assertScopable=Kr,t.assertSequenceExpression=U,t.assertSpreadElement=be,t.assertSpreadProperty=ki,t.assertStandardized=Br,t.assertStatement=Jr,t.assertStaticBlock=Re,t.assertStringLiteral=N,t.assertStringLiteralTypeAnnotation=xt,t.assertStringTypeAnnotation=_t,t.assertSuper=Se,t.assertSwitchCase=q,t.assertSwitchStatement=X,t.assertSymbolTypeAnnotation=wt,t.assertTSAnyKeyword=Rn,t.assertTSArrayType=rr,t.assertTSAsExpression=Er,t.assertTSBaseType=Di,t.assertTSBigIntKeyword=Fn,t.assertTSBooleanKeyword=Bn,t.assertTSCallSignatureDeclaration=Dn,t.assertTSConditionalType=cr,t.assertTSConstructSignatureDeclaration=Ln,t.assertTSConstructorType=Qn,t.assertTSDeclareFunction=Nn,t.assertTSDeclareMethod=In,t.assertTSEntityName=oi,t.assertTSEnumDeclaration=_r,t.assertTSEnumMember=wr,t.assertTSExportAssignment=Dr,t.assertTSExpressionWithTypeArguments=vr,t.assertTSExternalModuleReference=Ir,t.assertTSFunctionType=Hn,t.assertTSImportEqualsDeclaration=Nr,t.assertTSImportType=Or,t.assertTSIndexSignature=kn,t.assertTSIndexedAccessType=yr,t.assertTSInferType=fr,t.assertTSInstantiationExpression=Sr,t.assertTSInterfaceBody=Tr,t.assertTSInterfaceDeclaration=gr,t.assertTSIntersectionType=lr,t.assertTSIntrinsicKeyword=Vn,t.assertTSLiteralType=hr,t.assertTSMappedType=mr,t.assertTSMethodSignature=Cn,t.assertTSModuleBlock=Pr,t.assertTSModuleDeclaration=Ar,t.assertTSNamedTupleMember=ur,t.assertTSNamespaceExportDeclaration=Lr,t.assertTSNeverKeyword=Kn,t.assertTSNonNullExpression=jr,t.assertTSNullKeyword=Yn,t.assertTSNumberKeyword=Un,t.assertTSObjectKeyword=Jn,t.assertTSOptionalType=or,t.assertTSParameterProperty=On,t.assertTSParenthesizedType=pr,t.assertTSPropertySignature=Mn,t.assertTSQualifiedName=jn,t.assertTSRestType=ar,t.assertTSStringKeyword=qn,t.assertTSSymbolKeyword=Xn,t.assertTSThisType=Gn,t.assertTSTupleType=ir,t.assertTSType=ji,t.assertTSTypeAliasDeclaration=br,t.assertTSTypeAnnotation=Mr,t.assertTSTypeAssertion=xr,t.assertTSTypeElement=Ii,t.assertTSTypeLiteral=nr,t.assertTSTypeOperator=dr,t.assertTSTypeParameter=Rr,t.assertTSTypeParameterDeclaration=kr,t.assertTSTypeParameterInstantiation=Cr,t.assertTSTypePredicate=er,t.assertTSTypeQuery=tr,t.assertTSTypeReference=Zn,t.assertTSUndefinedKeyword=Wn,t.assertTSUnionType=sr,t.assertTSUnknownKeyword=$n,t.assertTSVoidKeyword=zn,t.assertTaggedTemplateExpression=Ee,t.assertTemplateElement=xe,t.assertTemplateLiteral=_e,t.assertTerminatorless=qr,t.assertThisExpression=W,t.assertThisTypeAnnotation=At,t.assertThrowStatement=$,t.assertTopicReference=_n,t.assertTryStatement=z,t.assertTupleExpression=Sn,t.assertTupleTypeAnnotation=Pt,t.assertTypeAlias=Nt,t.assertTypeAnnotation=It,t.assertTypeCastExpression=jt,t.assertTypeParameter=Dt,t.assertTypeParameterDeclaration=Lt,t.assertTypeParameterInstantiation=Mt,t.assertTypeScript=Ni,t.assertTypeofTypeAnnotation=Ot,t.assertUnaryExpression=G,t.assertUnaryLike=pi,t.assertUnionTypeAnnotation=Ct,t.assertUpdateExpression=H,t.assertUserWhitespacable=si,t.assertV8IntrinsicIdentifier=dn,t.assertVariableDeclaration=Q,t.assertVariableDeclarator=Z,t.assertVariance=kt,t.assertVoidTypeAnnotation=Rt,t.assertWhile=zr,t.assertWhileStatement=ee,t.assertWithStatement=te,t.assertYieldExpression=we;var r=n(90053);function i(e,t,n){if(!(0,r.default)(e,t,n))throw new Error(`Expected type "${e}" with option ${JSON.stringify(n)}, but instead got "${t.type}".`)}function o(e,t){i("ArrayExpression",e,t)}function a(e,t){i("AssignmentExpression",e,t)}function u(e,t){i("BinaryExpression",e,t)}function s(e,t){i("InterpreterDirective",e,t)}function l(e,t){i("Directive",e,t)}function c(e,t){i("DirectiveLiteral",e,t)}function f(e,t){i("BlockStatement",e,t)}function p(e,t){i("BreakStatement",e,t)}function d(e,t){i("CallExpression",e,t)}function y(e,t){i("CatchClause",e,t)}function m(e,t){i("ConditionalExpression",e,t)}function h(e,t){i("ContinueStatement",e,t)}function v(e,t){i("DebuggerStatement",e,t)}function g(e,t){i("DoWhileStatement",e,t)}function T(e,t){i("EmptyStatement",e,t)}function b(e,t){i("ExpressionStatement",e,t)}function S(e,t){i("File",e,t)}function E(e,t){i("ForInStatement",e,t)}function x(e,t){i("ForStatement",e,t)}function _(e,t){i("FunctionDeclaration",e,t)}function w(e,t){i("FunctionExpression",e,t)}function A(e,t){i("Identifier",e,t)}function P(e,t){i("IfStatement",e,t)}function O(e,t){i("LabeledStatement",e,t)}function N(e,t){i("StringLiteral",e,t)}function I(e,t){i("NumericLiteral",e,t)}function j(e,t){i("NullLiteral",e,t)}function D(e,t){i("BooleanLiteral",e,t)}function L(e,t){i("RegExpLiteral",e,t)}function M(e,t){i("LogicalExpression",e,t)}function C(e,t){i("MemberExpression",e,t)}function k(e,t){i("NewExpression",e,t)}function R(e,t){i("Program",e,t)}function B(e,t){i("ObjectExpression",e,t)}function F(e,t){i("ObjectMethod",e,t)}function V(e,t){i("ObjectProperty",e,t)}function K(e,t){i("RestElement",e,t)}function Y(e,t){i("ReturnStatement",e,t)}function U(e,t){i("SequenceExpression",e,t)}function J(e,t){i("ParenthesizedExpression",e,t)}function q(e,t){i("SwitchCase",e,t)}function X(e,t){i("SwitchStatement",e,t)}function W(e,t){i("ThisExpression",e,t)}function $(e,t){i("ThrowStatement",e,t)}function z(e,t){i("TryStatement",e,t)}function G(e,t){i("UnaryExpression",e,t)}function H(e,t){i("UpdateExpression",e,t)}function Q(e,t){i("VariableDeclaration",e,t)}function Z(e,t){i("VariableDeclarator",e,t)}function ee(e,t){i("WhileStatement",e,t)}function te(e,t){i("WithStatement",e,t)}function ne(e,t){i("AssignmentPattern",e,t)}function re(e,t){i("ArrayPattern",e,t)}function ie(e,t){i("ArrowFunctionExpression",e,t)}function oe(e,t){i("ClassBody",e,t)}function ae(e,t){i("ClassExpression",e,t)}function ue(e,t){i("ClassDeclaration",e,t)}function se(e,t){i("ExportAllDeclaration",e,t)}function le(e,t){i("ExportDefaultDeclaration",e,t)}function ce(e,t){i("ExportNamedDeclaration",e,t)}function fe(e,t){i("ExportSpecifier",e,t)}function pe(e,t){i("ForOfStatement",e,t)}function de(e,t){i("ImportDeclaration",e,t)}function ye(e,t){i("ImportDefaultSpecifier",e,t)}function me(e,t){i("ImportNamespaceSpecifier",e,t)}function he(e,t){i("ImportSpecifier",e,t)}function ve(e,t){i("MetaProperty",e,t)}function ge(e,t){i("ClassMethod",e,t)}function Te(e,t){i("ObjectPattern",e,t)}function be(e,t){i("SpreadElement",e,t)}function Se(e,t){i("Super",e,t)}function Ee(e,t){i("TaggedTemplateExpression",e,t)}function xe(e,t){i("TemplateElement",e,t)}function _e(e,t){i("TemplateLiteral",e,t)}function we(e,t){i("YieldExpression",e,t)}function Ae(e,t){i("AwaitExpression",e,t)}function Pe(e,t){i("Import",e,t)}function Oe(e,t){i("BigIntLiteral",e,t)}function Ne(e,t){i("ExportNamespaceSpecifier",e,t)}function Ie(e,t){i("OptionalMemberExpression",e,t)}function je(e,t){i("OptionalCallExpression",e,t)}function De(e,t){i("ClassProperty",e,t)}function Le(e,t){i("ClassAccessorProperty",e,t)}function Me(e,t){i("ClassPrivateProperty",e,t)}function Ce(e,t){i("ClassPrivateMethod",e,t)}function ke(e,t){i("PrivateName",e,t)}function Re(e,t){i("StaticBlock",e,t)}function Be(e,t){i("AnyTypeAnnotation",e,t)}function Fe(e,t){i("ArrayTypeAnnotation",e,t)}function Ve(e,t){i("BooleanTypeAnnotation",e,t)}function Ke(e,t){i("BooleanLiteralTypeAnnotation",e,t)}function Ye(e,t){i("NullLiteralTypeAnnotation",e,t)}function Ue(e,t){i("ClassImplements",e,t)}function Je(e,t){i("DeclareClass",e,t)}function qe(e,t){i("DeclareFunction",e,t)}function Xe(e,t){i("DeclareInterface",e,t)}function We(e,t){i("DeclareModule",e,t)}function $e(e,t){i("DeclareModuleExports",e,t)}function ze(e,t){i("DeclareTypeAlias",e,t)}function Ge(e,t){i("DeclareOpaqueType",e,t)}function He(e,t){i("DeclareVariable",e,t)}function Qe(e,t){i("DeclareExportDeclaration",e,t)}function Ze(e,t){i("DeclareExportAllDeclaration",e,t)}function et(e,t){i("DeclaredPredicate",e,t)}function tt(e,t){i("ExistsTypeAnnotation",e,t)}function nt(e,t){i("FunctionTypeAnnotation",e,t)}function rt(e,t){i("FunctionTypeParam",e,t)}function it(e,t){i("GenericTypeAnnotation",e,t)}function ot(e,t){i("InferredPredicate",e,t)}function at(e,t){i("InterfaceExtends",e,t)}function ut(e,t){i("InterfaceDeclaration",e,t)}function st(e,t){i("InterfaceTypeAnnotation",e,t)}function lt(e,t){i("IntersectionTypeAnnotation",e,t)}function ct(e,t){i("MixedTypeAnnotation",e,t)}function ft(e,t){i("EmptyTypeAnnotation",e,t)}function pt(e,t){i("NullableTypeAnnotation",e,t)}function dt(e,t){i("NumberLiteralTypeAnnotation",e,t)}function yt(e,t){i("NumberTypeAnnotation",e,t)}function mt(e,t){i("ObjectTypeAnnotation",e,t)}function ht(e,t){i("ObjectTypeInternalSlot",e,t)}function vt(e,t){i("ObjectTypeCallProperty",e,t)}function gt(e,t){i("ObjectTypeIndexer",e,t)}function Tt(e,t){i("ObjectTypeProperty",e,t)}function bt(e,t){i("ObjectTypeSpreadProperty",e,t)}function St(e,t){i("OpaqueType",e,t)}function Et(e,t){i("QualifiedTypeIdentifier",e,t)}function xt(e,t){i("StringLiteralTypeAnnotation",e,t)}function _t(e,t){i("StringTypeAnnotation",e,t)}function wt(e,t){i("SymbolTypeAnnotation",e,t)}function At(e,t){i("ThisTypeAnnotation",e,t)}function Pt(e,t){i("TupleTypeAnnotation",e,t)}function Ot(e,t){i("TypeofTypeAnnotation",e,t)}function Nt(e,t){i("TypeAlias",e,t)}function It(e,t){i("TypeAnnotation",e,t)}function jt(e,t){i("TypeCastExpression",e,t)}function Dt(e,t){i("TypeParameter",e,t)}function Lt(e,t){i("TypeParameterDeclaration",e,t)}function Mt(e,t){i("TypeParameterInstantiation",e,t)}function Ct(e,t){i("UnionTypeAnnotation",e,t)}function kt(e,t){i("Variance",e,t)}function Rt(e,t){i("VoidTypeAnnotation",e,t)}function Bt(e,t){i("EnumDeclaration",e,t)}function Ft(e,t){i("EnumBooleanBody",e,t)}function Vt(e,t){i("EnumNumberBody",e,t)}function Kt(e,t){i("EnumStringBody",e,t)}function Yt(e,t){i("EnumSymbolBody",e,t)}function Ut(e,t){i("EnumBooleanMember",e,t)}function Jt(e,t){i("EnumNumberMember",e,t)}function qt(e,t){i("EnumStringMember",e,t)}function Xt(e,t){i("EnumDefaultedMember",e,t)}function Wt(e,t){i("IndexedAccessType",e,t)}function $t(e,t){i("OptionalIndexedAccessType",e,t)}function zt(e,t){i("JSXAttribute",e,t)}function Gt(e,t){i("JSXClosingElement",e,t)}function Ht(e,t){i("JSXElement",e,t)}function Qt(e,t){i("JSXEmptyExpression",e,t)}function Zt(e,t){i("JSXExpressionContainer",e,t)}function en(e,t){i("JSXSpreadChild",e,t)}function tn(e,t){i("JSXIdentifier",e,t)}function nn(e,t){i("JSXMemberExpression",e,t)}function rn(e,t){i("JSXNamespacedName",e,t)}function on(e,t){i("JSXOpeningElement",e,t)}function an(e,t){i("JSXSpreadAttribute",e,t)}function un(e,t){i("JSXText",e,t)}function sn(e,t){i("JSXFragment",e,t)}function ln(e,t){i("JSXOpeningFragment",e,t)}function cn(e,t){i("JSXClosingFragment",e,t)}function fn(e,t){i("Noop",e,t)}function pn(e,t){i("Placeholder",e,t)}function dn(e,t){i("V8IntrinsicIdentifier",e,t)}function yn(e,t){i("ArgumentPlaceholder",e,t)}function mn(e,t){i("BindExpression",e,t)}function hn(e,t){i("ImportAttribute",e,t)}function vn(e,t){i("Decorator",e,t)}function gn(e,t){i("DoExpression",e,t)}function Tn(e,t){i("ExportDefaultSpecifier",e,t)}function bn(e,t){i("RecordExpression",e,t)}function Sn(e,t){i("TupleExpression",e,t)}function En(e,t){i("DecimalLiteral",e,t)}function xn(e,t){i("ModuleExpression",e,t)}function _n(e,t){i("TopicReference",e,t)}function wn(e,t){i("PipelineTopicExpression",e,t)}function An(e,t){i("PipelineBareFunction",e,t)}function Pn(e,t){i("PipelinePrimaryTopicReference",e,t)}function On(e,t){i("TSParameterProperty",e,t)}function Nn(e,t){i("TSDeclareFunction",e,t)}function In(e,t){i("TSDeclareMethod",e,t)}function jn(e,t){i("TSQualifiedName",e,t)}function Dn(e,t){i("TSCallSignatureDeclaration",e,t)}function Ln(e,t){i("TSConstructSignatureDeclaration",e,t)}function Mn(e,t){i("TSPropertySignature",e,t)}function Cn(e,t){i("TSMethodSignature",e,t)}function kn(e,t){i("TSIndexSignature",e,t)}function Rn(e,t){i("TSAnyKeyword",e,t)}function Bn(e,t){i("TSBooleanKeyword",e,t)}function Fn(e,t){i("TSBigIntKeyword",e,t)}function Vn(e,t){i("TSIntrinsicKeyword",e,t)}function Kn(e,t){i("TSNeverKeyword",e,t)}function Yn(e,t){i("TSNullKeyword",e,t)}function Un(e,t){i("TSNumberKeyword",e,t)}function Jn(e,t){i("TSObjectKeyword",e,t)}function qn(e,t){i("TSStringKeyword",e,t)}function Xn(e,t){i("TSSymbolKeyword",e,t)}function Wn(e,t){i("TSUndefinedKeyword",e,t)}function $n(e,t){i("TSUnknownKeyword",e,t)}function zn(e,t){i("TSVoidKeyword",e,t)}function Gn(e,t){i("TSThisType",e,t)}function Hn(e,t){i("TSFunctionType",e,t)}function Qn(e,t){i("TSConstructorType",e,t)}function Zn(e,t){i("TSTypeReference",e,t)}function er(e,t){i("TSTypePredicate",e,t)}function tr(e,t){i("TSTypeQuery",e,t)}function nr(e,t){i("TSTypeLiteral",e,t)}function rr(e,t){i("TSArrayType",e,t)}function ir(e,t){i("TSTupleType",e,t)}function or(e,t){i("TSOptionalType",e,t)}function ar(e,t){i("TSRestType",e,t)}function ur(e,t){i("TSNamedTupleMember",e,t)}function sr(e,t){i("TSUnionType",e,t)}function lr(e,t){i("TSIntersectionType",e,t)}function cr(e,t){i("TSConditionalType",e,t)}function fr(e,t){i("TSInferType",e,t)}function pr(e,t){i("TSParenthesizedType",e,t)}function dr(e,t){i("TSTypeOperator",e,t)}function yr(e,t){i("TSIndexedAccessType",e,t)}function mr(e,t){i("TSMappedType",e,t)}function hr(e,t){i("TSLiteralType",e,t)}function vr(e,t){i("TSExpressionWithTypeArguments",e,t)}function gr(e,t){i("TSInterfaceDeclaration",e,t)}function Tr(e,t){i("TSInterfaceBody",e,t)}function br(e,t){i("TSTypeAliasDeclaration",e,t)}function Sr(e,t){i("TSInstantiationExpression",e,t)}function Er(e,t){i("TSAsExpression",e,t)}function xr(e,t){i("TSTypeAssertion",e,t)}function _r(e,t){i("TSEnumDeclaration",e,t)}function wr(e,t){i("TSEnumMember",e,t)}function Ar(e,t){i("TSModuleDeclaration",e,t)}function Pr(e,t){i("TSModuleBlock",e,t)}function Or(e,t){i("TSImportType",e,t)}function Nr(e,t){i("TSImportEqualsDeclaration",e,t)}function Ir(e,t){i("TSExternalModuleReference",e,t)}function jr(e,t){i("TSNonNullExpression",e,t)}function Dr(e,t){i("TSExportAssignment",e,t)}function Lr(e,t){i("TSNamespaceExportDeclaration",e,t)}function Mr(e,t){i("TSTypeAnnotation",e,t)}function Cr(e,t){i("TSTypeParameterInstantiation",e,t)}function kr(e,t){i("TSTypeParameterDeclaration",e,t)}function Rr(e,t){i("TSTypeParameter",e,t)}function Br(e,t){i("Standardized",e,t)}function Fr(e,t){i("Expression",e,t)}function Vr(e,t){i("Binary",e,t)}function Kr(e,t){i("Scopable",e,t)}function Yr(e,t){i("BlockParent",e,t)}function Ur(e,t){i("Block",e,t)}function Jr(e,t){i("Statement",e,t)}function qr(e,t){i("Terminatorless",e,t)}function Xr(e,t){i("CompletionStatement",e,t)}function Wr(e,t){i("Conditional",e,t)}function $r(e,t){i("Loop",e,t)}function zr(e,t){i("While",e,t)}function Gr(e,t){i("ExpressionWrapper",e,t)}function Hr(e,t){i("For",e,t)}function Qr(e,t){i("ForXStatement",e,t)}function Zr(e,t){i("Function",e,t)}function ei(e,t){i("FunctionParent",e,t)}function ti(e,t){i("Pureish",e,t)}function ni(e,t){i("Declaration",e,t)}function ri(e,t){i("PatternLike",e,t)}function ii(e,t){i("LVal",e,t)}function oi(e,t){i("TSEntityName",e,t)}function ai(e,t){i("Literal",e,t)}function ui(e,t){i("Immutable",e,t)}function si(e,t){i("UserWhitespacable",e,t)}function li(e,t){i("Method",e,t)}function ci(e,t){i("ObjectMember",e,t)}function fi(e,t){i("Property",e,t)}function pi(e,t){i("UnaryLike",e,t)}function di(e,t){i("Pattern",e,t)}function yi(e,t){i("Class",e,t)}function mi(e,t){i("ModuleDeclaration",e,t)}function hi(e,t){i("ExportDeclaration",e,t)}function vi(e,t){i("ModuleSpecifier",e,t)}function gi(e,t){i("Accessor",e,t)}function Ti(e,t){i("Private",e,t)}function bi(e,t){i("Flow",e,t)}function Si(e,t){i("FlowType",e,t)}function Ei(e,t){i("FlowBaseAnnotation",e,t)}function xi(e,t){i("FlowDeclaration",e,t)}function _i(e,t){i("FlowPredicate",e,t)}function wi(e,t){i("EnumBody",e,t)}function Ai(e,t){i("EnumMember",e,t)}function Pi(e,t){i("JSX",e,t)}function Oi(e,t){i("Miscellaneous",e,t)}function Ni(e,t){i("TypeScript",e,t)}function Ii(e,t){i("TSTypeElement",e,t)}function ji(e,t){i("TSType",e,t)}function Di(e,t){i("TSBaseType",e,t)}function Li(e,t){console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),i("NumberLiteral",e,t)}function Mi(e,t){console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),i("RegexLiteral",e,t)}function Ci(e,t){console.trace("The node type RestProperty has been renamed to RestElement"),i("RestProperty",e,t)}function ki(e,t){console.trace("The node type SpreadProperty has been renamed to SpreadElement"),i("SpreadProperty",e,t)}},99606:function(){},43576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(18771),i=n(32802);function o(e){const t=(0,i.default)(e);return 1===t.length?t[0]:(0,r.unionTypeAnnotation)(t)}},3270:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(18771),i=o;function o(e){switch(e){case"string":return(0,r.stringTypeAnnotation)();case"number":return(0,r.numberTypeAnnotation)();case"undefined":return(0,r.voidTypeAnnotation)();case"boolean":return(0,r.booleanTypeAnnotation)();case"function":return(0,r.genericTypeAnnotation)((0,r.identifier)("Function"));case"object":return(0,r.genericTypeAnnotation)((0,r.identifier)("Object"));case"symbol":return(0,r.genericTypeAnnotation)((0,r.identifier)("Symbol"));case"bigint":return(0,r.anyTypeAnnotation)()}throw new Error("Invalid typeof value: "+e)}t["default"]=i},18771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anyTypeAnnotation=Re,t.argumentPlaceholder=dn,t.arrayExpression=i,t.arrayPattern=ne,t.arrayTypeAnnotation=Be,t.arrowFunctionExpression=re,t.assignmentExpression=o,t.assignmentPattern=te,t.awaitExpression=we,t.bigIntLiteral=Pe,t.binaryExpression=a,t.bindExpression=yn,t.blockStatement=c,t.booleanLiteral=j,t.booleanLiteralTypeAnnotation=Ve,t.booleanTypeAnnotation=Fe,t.breakStatement=f,t.callExpression=p,t.catchClause=d,t.classAccessorProperty=De,t.classBody=ie,t.classDeclaration=ae,t.classExpression=oe,t.classImplements=Ye,t.classMethod=ve,t.classPrivateMethod=Me,t.classPrivateProperty=Le,t.classProperty=je,t.conditionalExpression=y,t.continueStatement=m,t.debuggerStatement=h,t.decimalLiteral=Sn,t.declareClass=Ue,t.declareExportAllDeclaration=Qe,t.declareExportDeclaration=He,t.declareFunction=Je,t.declareInterface=qe,t.declareModule=Xe,t.declareModuleExports=We,t.declareOpaqueType=ze,t.declareTypeAlias=$e,t.declareVariable=Ge,t.declaredPredicate=Ze,t.decorator=hn,t.directive=s,t.directiveLiteral=l,t.doExpression=vn,t.doWhileStatement=v,t.emptyStatement=g,t.emptyTypeAnnotation=ct,t.enumBooleanBody=Bt,t.enumBooleanMember=Yt,t.enumDeclaration=Rt,t.enumDefaultedMember=qt,t.enumNumberBody=Ft,t.enumNumberMember=Ut,t.enumStringBody=Vt,t.enumStringMember=Jt,t.enumSymbolBody=Kt,t.existsTypeAnnotation=et,t.exportAllDeclaration=ue,t.exportDefaultDeclaration=se,t.exportDefaultSpecifier=gn,t.exportNamedDeclaration=le,t.exportNamespaceSpecifier=Oe,t.exportSpecifier=ce,t.expressionStatement=T,t.file=b,t.forInStatement=S,t.forOfStatement=fe,t.forStatement=E,t.functionDeclaration=x,t.functionExpression=_,t.functionTypeAnnotation=tt,t.functionTypeParam=nt,t.genericTypeAnnotation=rt,t.identifier=w,t.ifStatement=A,t["import"]=Ae,t.importAttribute=mn,t.importDeclaration=pe,t.importDefaultSpecifier=de,t.importNamespaceSpecifier=ye,t.importSpecifier=me,t.indexedAccessType=Xt,t.inferredPredicate=it,t.interfaceDeclaration=at,t.interfaceExtends=ot,t.interfaceTypeAnnotation=ut,t.interpreterDirective=u,t.intersectionTypeAnnotation=st,t.jSXAttribute=t.jsxAttribute=$t,t.jSXClosingElement=t.jsxClosingElement=zt,t.jSXClosingFragment=t.jsxClosingFragment=ln,t.jSXElement=t.jsxElement=Gt,t.jSXEmptyExpression=t.jsxEmptyExpression=Ht,t.jSXExpressionContainer=t.jsxExpressionContainer=Qt,t.jSXFragment=t.jsxFragment=un,t.jSXIdentifier=t.jsxIdentifier=en,t.jSXMemberExpression=t.jsxMemberExpression=tn,t.jSXNamespacedName=t.jsxNamespacedName=nn,t.jSXOpeningElement=t.jsxOpeningElement=rn,t.jSXOpeningFragment=t.jsxOpeningFragment=sn,t.jSXSpreadAttribute=t.jsxSpreadAttribute=on,t.jSXSpreadChild=t.jsxSpreadChild=Zt,t.jSXText=t.jsxText=an,t.labeledStatement=P,t.logicalExpression=L,t.memberExpression=M,t.metaProperty=he,t.mixedTypeAnnotation=lt,t.moduleExpression=En,t.newExpression=C,t.noop=cn,t.nullLiteral=I,t.nullLiteralTypeAnnotation=Ke,t.nullableTypeAnnotation=ft,t.numberLiteral=Rr,t.numberLiteralTypeAnnotation=pt,t.numberTypeAnnotation=dt,t.numericLiteral=N,t.objectExpression=R,t.objectMethod=B,t.objectPattern=ge,t.objectProperty=F,t.objectTypeAnnotation=yt,t.objectTypeCallProperty=ht,t.objectTypeIndexer=vt,t.objectTypeInternalSlot=mt,t.objectTypeProperty=gt,t.objectTypeSpreadProperty=Tt,t.opaqueType=bt,t.optionalCallExpression=Ie,t.optionalIndexedAccessType=Wt,t.optionalMemberExpression=Ne,t.parenthesizedExpression=U,t.pipelineBareFunction=wn,t.pipelinePrimaryTopicReference=An,t.pipelineTopicExpression=_n,t.placeholder=fn,t.privateName=Ce,t.program=k,t.qualifiedTypeIdentifier=St,t.recordExpression=Tn,t.regExpLiteral=D,t.regexLiteral=Br,t.restElement=V,t.restProperty=Fr,t.returnStatement=K,t.sequenceExpression=Y,t.spreadElement=Te,t.spreadProperty=Vr,t.staticBlock=ke,t.stringLiteral=O,t.stringLiteralTypeAnnotation=Et,t.stringTypeAnnotation=xt,t["super"]=be,t.switchCase=J,t.switchStatement=q,t.symbolTypeAnnotation=_t,t.taggedTemplateExpression=Se,t.templateElement=Ee,t.templateLiteral=xe,t.thisExpression=X,t.thisTypeAnnotation=wt,t.throwStatement=W,t.topicReference=xn,t.tryStatement=$,t.tSAnyKeyword=t.tsAnyKeyword=kn,t.tSArrayType=t.tsArrayType=nr,t.tSAsExpression=t.tsAsExpression=Sr,t.tSBigIntKeyword=t.tsBigIntKeyword=Bn,t.tSBooleanKeyword=t.tsBooleanKeyword=Rn,t.tSCallSignatureDeclaration=t.tsCallSignatureDeclaration=jn,t.tSConditionalType=t.tsConditionalType=lr,t.tSConstructSignatureDeclaration=t.tsConstructSignatureDeclaration=Dn,t.tSConstructorType=t.tsConstructorType=Hn,t.tSDeclareFunction=t.tsDeclareFunction=On,t.tSDeclareMethod=t.tsDeclareMethod=Nn,t.tSEnumDeclaration=t.tsEnumDeclaration=xr,t.tSEnumMember=t.tsEnumMember=_r,t.tSExportAssignment=t.tsExportAssignment=jr,t.tSExpressionWithTypeArguments=t.tsExpressionWithTypeArguments=hr,t.tSExternalModuleReference=t.tsExternalModuleReference=Nr,t.tSFunctionType=t.tsFunctionType=Gn,t.tSImportEqualsDeclaration=t.tsImportEqualsDeclaration=Or,t.tSImportType=t.tsImportType=Pr,t.tSIndexSignature=t.tsIndexSignature=Cn,t.tSIndexedAccessType=t.tsIndexedAccessType=dr,t.tSInferType=t.tsInferType=cr,t.tSInstantiationExpression=t.tsInstantiationExpression=br,t.tSInterfaceBody=t.tsInterfaceBody=gr,t.tSInterfaceDeclaration=t.tsInterfaceDeclaration=vr,t.tSIntersectionType=t.tsIntersectionType=sr,t.tSIntrinsicKeyword=t.tsIntrinsicKeyword=Fn,t.tSLiteralType=t.tsLiteralType=mr,t.tSMappedType=t.tsMappedType=yr,t.tSMethodSignature=t.tsMethodSignature=Mn,t.tSModuleBlock=t.tsModuleBlock=Ar,t.tSModuleDeclaration=t.tsModuleDeclaration=wr,t.tSNamedTupleMember=t.tsNamedTupleMember=ar,t.tSNamespaceExportDeclaration=t.tsNamespaceExportDeclaration=Dr,t.tSNeverKeyword=t.tsNeverKeyword=Vn,t.tSNonNullExpression=t.tsNonNullExpression=Ir,t.tSNullKeyword=t.tsNullKeyword=Kn,t.tSNumberKeyword=t.tsNumberKeyword=Yn,t.tSObjectKeyword=t.tsObjectKeyword=Un,t.tSOptionalType=t.tsOptionalType=ir,t.tSParameterProperty=t.tsParameterProperty=Pn,t.tSParenthesizedType=t.tsParenthesizedType=fr,t.tSPropertySignature=t.tsPropertySignature=Ln,t.tSQualifiedName=t.tsQualifiedName=In,t.tSRestType=t.tsRestType=or,t.tSStringKeyword=t.tsStringKeyword=Jn,t.tSSymbolKeyword=t.tsSymbolKeyword=qn,t.tSThisType=t.tsThisType=zn,t.tSTupleType=t.tsTupleType=rr,t.tSTypeAliasDeclaration=t.tsTypeAliasDeclaration=Tr,t.tSTypeAnnotation=t.tsTypeAnnotation=Lr,t.tSTypeAssertion=t.tsTypeAssertion=Er,t.tSTypeLiteral=t.tsTypeLiteral=tr,t.tSTypeOperator=t.tsTypeOperator=pr,t.tSTypeParameter=t.tsTypeParameter=kr,t.tSTypeParameterDeclaration=t.tsTypeParameterDeclaration=Cr,t.tSTypeParameterInstantiation=t.tsTypeParameterInstantiation=Mr,t.tSTypePredicate=t.tsTypePredicate=Zn,t.tSTypeQuery=t.tsTypeQuery=er,t.tSTypeReference=t.tsTypeReference=Qn,t.tSUndefinedKeyword=t.tsUndefinedKeyword=Xn,t.tSUnionType=t.tsUnionType=ur,t.tSUnknownKeyword=t.tsUnknownKeyword=Wn,t.tSVoidKeyword=t.tsVoidKeyword=$n,t.tupleExpression=bn,t.tupleTypeAnnotation=At,t.typeAlias=Ot,t.typeAnnotation=Nt,t.typeCastExpression=It,t.typeParameter=jt,t.typeParameterDeclaration=Dt,t.typeParameterInstantiation=Lt,t.typeofTypeAnnotation=Pt,t.unaryExpression=z,t.unionTypeAnnotation=Mt,t.updateExpression=G,t.v8IntrinsicIdentifier=pn,t.variableDeclaration=H,t.variableDeclarator=Q,t.variance=Ct,t.voidTypeAnnotation=kt,t.whileStatement=Z,t.withStatement=ee,t.yieldExpression=_e;var r=n(35890);function i(e=[]){return(0,r.default)({type:"ArrayExpression",elements:e})}function o(e,t,n){return(0,r.default)({type:"AssignmentExpression",operator:e,left:t,right:n})}function a(e,t,n){return(0,r.default)({type:"BinaryExpression",operator:e,left:t,right:n})}function u(e){return(0,r.default)({type:"InterpreterDirective",value:e})}function s(e){return(0,r.default)({type:"Directive",value:e})}function l(e){return(0,r.default)({type:"DirectiveLiteral",value:e})}function c(e,t=[]){return(0,r.default)({type:"BlockStatement",body:e,directives:t})}function f(e=null){return(0,r.default)({type:"BreakStatement",label:e})}function p(e,t){return(0,r.default)({type:"CallExpression",callee:e,arguments:t})}function d(e=null,t){return(0,r.default)({type:"CatchClause",param:e,body:t})}function y(e,t,n){return(0,r.default)({type:"ConditionalExpression",test:e,consequent:t,alternate:n})}function m(e=null){return(0,r.default)({type:"ContinueStatement",label:e})}function h(){return{type:"DebuggerStatement"}}function v(e,t){return(0,r.default)({type:"DoWhileStatement",test:e,body:t})}function g(){return{type:"EmptyStatement"}}function T(e){return(0,r.default)({type:"ExpressionStatement",expression:e})}function b(e,t=null,n=null){return(0,r.default)({type:"File",program:e,comments:t,tokens:n})}function S(e,t,n){return(0,r.default)({type:"ForInStatement",left:e,right:t,body:n})}function E(e=null,t=null,n=null,i){return(0,r.default)({type:"ForStatement",init:e,test:t,update:n,body:i})}function x(e=null,t,n,i=!1,o=!1){return(0,r.default)({type:"FunctionDeclaration",id:e,params:t,body:n,generator:i,async:o})}function _(e=null,t,n,i=!1,o=!1){return(0,r.default)({type:"FunctionExpression",id:e,params:t,body:n,generator:i,async:o})}function w(e){return(0,r.default)({type:"Identifier",name:e})}function A(e,t,n=null){return(0,r.default)({type:"IfStatement",test:e,consequent:t,alternate:n})}function P(e,t){return(0,r.default)({type:"LabeledStatement",label:e,body:t})}function O(e){return(0,r.default)({type:"StringLiteral",value:e})}function N(e){return(0,r.default)({type:"NumericLiteral",value:e})}function I(){return{type:"NullLiteral"}}function j(e){return(0,r.default)({type:"BooleanLiteral",value:e})}function D(e,t=""){return(0,r.default)({type:"RegExpLiteral",pattern:e,flags:t})}function L(e,t,n){return(0,r.default)({type:"LogicalExpression",operator:e,left:t,right:n})}function M(e,t,n=!1,i=null){return(0,r.default)({type:"MemberExpression",object:e,property:t,computed:n,optional:i})}function C(e,t){return(0,r.default)({type:"NewExpression",callee:e,arguments:t})}function k(e,t=[],n="script",i=null){return(0,r.default)({type:"Program",body:e,directives:t,sourceType:n,interpreter:i,sourceFile:null})}function R(e){return(0,r.default)({type:"ObjectExpression",properties:e})}function B(e="method",t,n,i,o=!1,a=!1,u=!1){return(0,r.default)({type:"ObjectMethod",kind:e,key:t,params:n,body:i,computed:o,generator:a,async:u})}function F(e,t,n=!1,i=!1,o=null){return(0,r.default)({type:"ObjectProperty",key:e,value:t,computed:n,shorthand:i,decorators:o})}function V(e){return(0,r.default)({type:"RestElement",argument:e})}function K(e=null){return(0,r.default)({type:"ReturnStatement",argument:e})}function Y(e){return(0,r.default)({type:"SequenceExpression",expressions:e})}function U(e){return(0,r.default)({type:"ParenthesizedExpression",expression:e})}function J(e=null,t){return(0,r.default)({type:"SwitchCase",test:e,consequent:t})}function q(e,t){return(0,r.default)({type:"SwitchStatement",discriminant:e,cases:t})}function X(){return{type:"ThisExpression"}}function W(e){return(0,r.default)({type:"ThrowStatement",argument:e})}function $(e,t=null,n=null){return(0,r.default)({type:"TryStatement",block:e,handler:t,finalizer:n})}function z(e,t,n=!0){return(0,r.default)({type:"UnaryExpression",operator:e,argument:t,prefix:n})}function G(e,t,n=!1){return(0,r.default)({type:"UpdateExpression",operator:e,argument:t,prefix:n})}function H(e,t){return(0,r.default)({type:"VariableDeclaration",kind:e,declarations:t})}function Q(e,t=null){return(0,r.default)({type:"VariableDeclarator",id:e,init:t})}function Z(e,t){return(0,r.default)({type:"WhileStatement",test:e,body:t})}function ee(e,t){return(0,r.default)({type:"WithStatement",object:e,body:t})}function te(e,t){return(0,r.default)({type:"AssignmentPattern",left:e,right:t})}function ne(e){return(0,r.default)({type:"ArrayPattern",elements:e})}function re(e,t,n=!1){return(0,r.default)({type:"ArrowFunctionExpression",params:e,body:t,async:n,expression:null})}function ie(e){return(0,r.default)({type:"ClassBody",body:e})}function oe(e=null,t=null,n,i=null){return(0,r.default)({type:"ClassExpression",id:e,superClass:t,body:n,decorators:i})}function ae(e,t=null,n,i=null){return(0,r.default)({type:"ClassDeclaration",id:e,superClass:t,body:n,decorators:i})}function ue(e){return(0,r.default)({type:"ExportAllDeclaration",source:e})}function se(e){return(0,r.default)({type:"ExportDefaultDeclaration",declaration:e})}function le(e=null,t=[],n=null){return(0,r.default)({type:"ExportNamedDeclaration",declaration:e,specifiers:t,source:n})}function ce(e,t){return(0,r.default)({type:"ExportSpecifier",local:e,exported:t})}function fe(e,t,n,i=!1){return(0,r.default)({type:"ForOfStatement",left:e,right:t,body:n,await:i})}function pe(e,t){return(0,r.default)({type:"ImportDeclaration",specifiers:e,source:t})}function de(e){return(0,r.default)({type:"ImportDefaultSpecifier",local:e})}function ye(e){return(0,r.default)({type:"ImportNamespaceSpecifier",local:e})}function me(e,t){return(0,r.default)({type:"ImportSpecifier",local:e,imported:t})}function he(e,t){return(0,r.default)({type:"MetaProperty",meta:e,property:t})}function ve(e="method",t,n,i,o=!1,a=!1,u=!1,s=!1){return(0,r.default)({type:"ClassMethod",kind:e,key:t,params:n,body:i,computed:o,static:a,generator:u,async:s})}function ge(e){return(0,r.default)({type:"ObjectPattern",properties:e})}function Te(e){return(0,r.default)({type:"SpreadElement",argument:e})}function be(){return{type:"Super"}}function Se(e,t){return(0,r.default)({type:"TaggedTemplateExpression",tag:e,quasi:t})}function Ee(e,t=!1){return(0,r.default)({type:"TemplateElement",value:e,tail:t})}function xe(e,t){return(0,r.default)({type:"TemplateLiteral",quasis:e,expressions:t})}function _e(e=null,t=!1){return(0,r.default)({type:"YieldExpression",argument:e,delegate:t})}function we(e){return(0,r.default)({type:"AwaitExpression",argument:e})}function Ae(){return{type:"Import"}}function Pe(e){return(0,r.default)({type:"BigIntLiteral",value:e})}function Oe(e){return(0,r.default)({type:"ExportNamespaceSpecifier",exported:e})}function Ne(e,t,n=!1,i){return(0,r.default)({type:"OptionalMemberExpression",object:e,property:t,computed:n,optional:i})}function Ie(e,t,n){return(0,r.default)({type:"OptionalCallExpression",callee:e,arguments:t,optional:n})}function je(e,t=null,n=null,i=null,o=!1,a=!1){return(0,r.default)({type:"ClassProperty",key:e,value:t,typeAnnotation:n,decorators:i,computed:o,static:a})}function De(e,t=null,n=null,i=null,o=!1,a=!1){return(0,r.default)({type:"ClassAccessorProperty",key:e,value:t,typeAnnotation:n,decorators:i,computed:o,static:a})}function Le(e,t=null,n=null,i){return(0,r.default)({type:"ClassPrivateProperty",key:e,value:t,decorators:n,static:i})}function Me(e="method",t,n,i,o=!1){return(0,r.default)({type:"ClassPrivateMethod",kind:e,key:t,params:n,body:i,static:o})}function Ce(e){return(0,r.default)({type:"PrivateName",id:e})}function ke(e){return(0,r.default)({type:"StaticBlock",body:e})}function Re(){return{type:"AnyTypeAnnotation"}}function Be(e){return(0,r.default)({type:"ArrayTypeAnnotation",elementType:e})}function Fe(){return{type:"BooleanTypeAnnotation"}}function Ve(e){return(0,r.default)({type:"BooleanLiteralTypeAnnotation",value:e})}function Ke(){return{type:"NullLiteralTypeAnnotation"}}function Ye(e,t=null){return(0,r.default)({type:"ClassImplements",id:e,typeParameters:t})}function Ue(e,t=null,n=null,i){return(0,r.default)({type:"DeclareClass",id:e,typeParameters:t,extends:n,body:i})}function Je(e){return(0,r.default)({type:"DeclareFunction",id:e})}function qe(e,t=null,n=null,i){return(0,r.default)({type:"DeclareInterface",id:e,typeParameters:t,extends:n,body:i})}function Xe(e,t,n=null){return(0,r.default)({type:"DeclareModule",id:e,body:t,kind:n})}function We(e){return(0,r.default)({type:"DeclareModuleExports",typeAnnotation:e})}function $e(e,t=null,n){return(0,r.default)({type:"DeclareTypeAlias",id:e,typeParameters:t,right:n})}function ze(e,t=null,n=null){return(0,r.default)({type:"DeclareOpaqueType",id:e,typeParameters:t,supertype:n})}function Ge(e){return(0,r.default)({type:"DeclareVariable",id:e})}function He(e=null,t=null,n=null){return(0,r.default)({type:"DeclareExportDeclaration",declaration:e,specifiers:t,source:n})}function Qe(e){return(0,r.default)({type:"DeclareExportAllDeclaration",source:e})}function Ze(e){return(0,r.default)({type:"DeclaredPredicate",value:e})}function et(){return{type:"ExistsTypeAnnotation"}}function tt(e=null,t,n=null,i){return(0,r.default)({type:"FunctionTypeAnnotation",typeParameters:e,params:t,rest:n,returnType:i})}function nt(e=null,t){return(0,r.default)({type:"FunctionTypeParam",name:e,typeAnnotation:t})}function rt(e,t=null){return(0,r.default)({type:"GenericTypeAnnotation",id:e,typeParameters:t})}function it(){return{type:"InferredPredicate"}}function ot(e,t=null){return(0,r.default)({type:"InterfaceExtends",id:e,typeParameters:t})}function at(e,t=null,n=null,i){return(0,r.default)({type:"InterfaceDeclaration",id:e,typeParameters:t,extends:n,body:i})}function ut(e=null,t){return(0,r.default)({type:"InterfaceTypeAnnotation",extends:e,body:t})}function st(e){return(0,r.default)({type:"IntersectionTypeAnnotation",types:e})}function lt(){return{type:"MixedTypeAnnotation"}}function ct(){return{type:"EmptyTypeAnnotation"}}function ft(e){return(0,r.default)({type:"NullableTypeAnnotation",typeAnnotation:e})}function pt(e){return(0,r.default)({type:"NumberLiteralTypeAnnotation",value:e})}function dt(){return{type:"NumberTypeAnnotation"}}function yt(e,t=[],n=[],i=[],o=!1){return(0,r.default)({type:"ObjectTypeAnnotation",properties:e,indexers:t,callProperties:n,internalSlots:i,exact:o})}function mt(e,t,n,i,o){return(0,r.default)({type:"ObjectTypeInternalSlot",id:e,value:t,optional:n,static:i,method:o})}function ht(e){return(0,r.default)({type:"ObjectTypeCallProperty",value:e,static:null})}function vt(e=null,t,n,i=null){return(0,r.default)({type:"ObjectTypeIndexer",id:e,key:t,value:n,variance:i,static:null})}function gt(e,t,n=null){return(0,r.default)({type:"ObjectTypeProperty",key:e,value:t,variance:n,kind:null,method:null,optional:null,proto:null,static:null})}function Tt(e){return(0,r.default)({type:"ObjectTypeSpreadProperty",argument:e})}function bt(e,t=null,n=null,i){return(0,r.default)({type:"OpaqueType",id:e,typeParameters:t,supertype:n,impltype:i})}function St(e,t){return(0,r.default)({type:"QualifiedTypeIdentifier",id:e,qualification:t})}function Et(e){return(0,r.default)({type:"StringLiteralTypeAnnotation",value:e})}function xt(){return{type:"StringTypeAnnotation"}}function _t(){return{type:"SymbolTypeAnnotation"}}function wt(){return{type:"ThisTypeAnnotation"}}function At(e){return(0,r.default)({type:"TupleTypeAnnotation",types:e})}function Pt(e){return(0,r.default)({type:"TypeofTypeAnnotation",argument:e})}function Ot(e,t=null,n){return(0,r.default)({type:"TypeAlias",id:e,typeParameters:t,right:n})}function Nt(e){return(0,r.default)({type:"TypeAnnotation",typeAnnotation:e})}function It(e,t){return(0,r.default)({type:"TypeCastExpression",expression:e,typeAnnotation:t})}function jt(e=null,t=null,n=null){return(0,r.default)({type:"TypeParameter",bound:e,default:t,variance:n,name:null})}function Dt(e){return(0,r.default)({type:"TypeParameterDeclaration",params:e})}function Lt(e){return(0,r.default)({type:"TypeParameterInstantiation",params:e})}function Mt(e){return(0,r.default)({type:"UnionTypeAnnotation",types:e})}function Ct(e){return(0,r.default)({type:"Variance",kind:e})}function kt(){return{type:"VoidTypeAnnotation"}}function Rt(e,t){return(0,r.default)({type:"EnumDeclaration",id:e,body:t})}function Bt(e){return(0,r.default)({type:"EnumBooleanBody",members:e,explicitType:null,hasUnknownMembers:null})}function Ft(e){return(0,r.default)({type:"EnumNumberBody",members:e,explicitType:null,hasUnknownMembers:null})}function Vt(e){return(0,r.default)({type:"EnumStringBody",members:e,explicitType:null,hasUnknownMembers:null})}function Kt(e){return(0,r.default)({type:"EnumSymbolBody",members:e,hasUnknownMembers:null})}function Yt(e){return(0,r.default)({type:"EnumBooleanMember",id:e,init:null})}function Ut(e,t){return(0,r.default)({type:"EnumNumberMember",id:e,init:t})}function Jt(e,t){return(0,r.default)({type:"EnumStringMember",id:e,init:t})}function qt(e){return(0,r.default)({type:"EnumDefaultedMember",id:e})}function Xt(e,t){return(0,r.default)({type:"IndexedAccessType",objectType:e,indexType:t})}function Wt(e,t){return(0,r.default)({type:"OptionalIndexedAccessType",objectType:e,indexType:t,optional:null})}function $t(e,t=null){return(0,r.default)({type:"JSXAttribute",name:e,value:t})}function zt(e){return(0,r.default)({type:"JSXClosingElement",name:e})}function Gt(e,t=null,n,i=null){return(0,r.default)({type:"JSXElement",openingElement:e,closingElement:t,children:n,selfClosing:i})}function Ht(){return{type:"JSXEmptyExpression"}}function Qt(e){return(0,r.default)({type:"JSXExpressionContainer",expression:e})}function Zt(e){return(0,r.default)({type:"JSXSpreadChild",expression:e})}function en(e){return(0,r.default)({type:"JSXIdentifier",name:e})}function tn(e,t){return(0,r.default)({type:"JSXMemberExpression",object:e,property:t})}function nn(e,t){return(0,r.default)({type:"JSXNamespacedName",namespace:e,name:t})}function rn(e,t,n=!1){return(0,r.default)({type:"JSXOpeningElement",name:e,attributes:t,selfClosing:n})}function on(e){return(0,r.default)({type:"JSXSpreadAttribute",argument:e})}function an(e){return(0,r.default)({type:"JSXText",value:e})}function un(e,t,n){return(0,r.default)({type:"JSXFragment",openingFragment:e,closingFragment:t,children:n})}function sn(){return{type:"JSXOpeningFragment"}}function ln(){return{type:"JSXClosingFragment"}}function cn(){return{type:"Noop"}}function fn(e,t){return(0,r.default)({type:"Placeholder",expectedNode:e,name:t})}function pn(e){return(0,r.default)({type:"V8IntrinsicIdentifier",name:e})}function dn(){return{type:"ArgumentPlaceholder"}}function yn(e,t){return(0,r.default)({type:"BindExpression",object:e,callee:t})}function mn(e,t){return(0,r.default)({type:"ImportAttribute",key:e,value:t})}function hn(e){return(0,r.default)({type:"Decorator",expression:e})}function vn(e,t=!1){return(0,r.default)({type:"DoExpression",body:e,async:t})}function gn(e){return(0,r.default)({type:"ExportDefaultSpecifier",exported:e})}function Tn(e){return(0,r.default)({type:"RecordExpression",properties:e})}function bn(e=[]){return(0,r.default)({type:"TupleExpression",elements:e})}function Sn(e){return(0,r.default)({type:"DecimalLiteral",value:e})}function En(e){return(0,r.default)({type:"ModuleExpression",body:e})}function xn(){return{type:"TopicReference"}}function _n(e){return(0,r.default)({type:"PipelineTopicExpression",expression:e})}function wn(e){return(0,r.default)({type:"PipelineBareFunction",callee:e})}function An(){return{type:"PipelinePrimaryTopicReference"}}function Pn(e){return(0,r.default)({type:"TSParameterProperty",parameter:e})}function On(e=null,t=null,n,i=null){return(0,r.default)({type:"TSDeclareFunction",id:e,typeParameters:t,params:n,returnType:i})}function Nn(e=null,t,n=null,i,o=null){return(0,r.default)({type:"TSDeclareMethod",decorators:e,key:t,typeParameters:n,params:i,returnType:o})}function In(e,t){return(0,r.default)({type:"TSQualifiedName",left:e,right:t})}function jn(e=null,t,n=null){return(0,r.default)({type:"TSCallSignatureDeclaration",typeParameters:e,parameters:t,typeAnnotation:n})}function Dn(e=null,t,n=null){return(0,r.default)({type:"TSConstructSignatureDeclaration",typeParameters:e,parameters:t,typeAnnotation:n})}function Ln(e,t=null,n=null){return(0,r.default)({type:"TSPropertySignature",key:e,typeAnnotation:t,initializer:n,kind:null})}function Mn(e,t=null,n,i=null){return(0,r.default)({type:"TSMethodSignature",key:e,typeParameters:t,parameters:n,typeAnnotation:i,kind:null})}function Cn(e,t=null){return(0,r.default)({type:"TSIndexSignature",parameters:e,typeAnnotation:t})}function kn(){return{type:"TSAnyKeyword"}}function Rn(){return{type:"TSBooleanKeyword"}}function Bn(){return{type:"TSBigIntKeyword"}}function Fn(){return{type:"TSIntrinsicKeyword"}}function Vn(){return{type:"TSNeverKeyword"}}function Kn(){return{type:"TSNullKeyword"}}function Yn(){return{type:"TSNumberKeyword"}}function Un(){return{type:"TSObjectKeyword"}}function Jn(){return{type:"TSStringKeyword"}}function qn(){return{type:"TSSymbolKeyword"}}function Xn(){return{type:"TSUndefinedKeyword"}}function Wn(){return{type:"TSUnknownKeyword"}}function $n(){return{type:"TSVoidKeyword"}}function zn(){return{type:"TSThisType"}}function Gn(e=null,t,n=null){return(0,r.default)({type:"TSFunctionType",typeParameters:e,parameters:t,typeAnnotation:n})}function Hn(e=null,t,n=null){return(0,r.default)({type:"TSConstructorType",typeParameters:e,parameters:t,typeAnnotation:n})}function Qn(e,t=null){return(0,r.default)({type:"TSTypeReference",typeName:e,typeParameters:t})}function Zn(e,t=null,n=null){return(0,r.default)({type:"TSTypePredicate",parameterName:e,typeAnnotation:t,asserts:n})}function er(e,t=null){return(0,r.default)({type:"TSTypeQuery",exprName:e,typeParameters:t})}function tr(e){return(0,r.default)({type:"TSTypeLiteral",members:e})}function nr(e){return(0,r.default)({type:"TSArrayType",elementType:e})}function rr(e){return(0,r.default)({type:"TSTupleType",elementTypes:e})}function ir(e){return(0,r.default)({type:"TSOptionalType",typeAnnotation:e})}function or(e){return(0,r.default)({type:"TSRestType",typeAnnotation:e})}function ar(e,t,n=!1){return(0,r.default)({type:"TSNamedTupleMember",label:e,elementType:t,optional:n})}function ur(e){return(0,r.default)({type:"TSUnionType",types:e})}function sr(e){return(0,r.default)({type:"TSIntersectionType",types:e})}function lr(e,t,n,i){return(0,r.default)({type:"TSConditionalType",checkType:e,extendsType:t,trueType:n,falseType:i})}function cr(e){return(0,r.default)({type:"TSInferType",typeParameter:e})}function fr(e){return(0,r.default)({type:"TSParenthesizedType",typeAnnotation:e})}function pr(e){return(0,r.default)({type:"TSTypeOperator",typeAnnotation:e,operator:null})}function dr(e,t){return(0,r.default)({type:"TSIndexedAccessType",objectType:e,indexType:t})}function yr(e,t=null,n=null){return(0,r.default)({type:"TSMappedType",typeParameter:e,typeAnnotation:t,nameType:n})}function mr(e){return(0,r.default)({type:"TSLiteralType",literal:e})}function hr(e,t=null){return(0,r.default)({type:"TSExpressionWithTypeArguments",expression:e,typeParameters:t})}function vr(e,t=null,n=null,i){return(0,r.default)({type:"TSInterfaceDeclaration",id:e,typeParameters:t,extends:n,body:i})}function gr(e){return(0,r.default)({type:"TSInterfaceBody",body:e})}function Tr(e,t=null,n){return(0,r.default)({type:"TSTypeAliasDeclaration",id:e,typeParameters:t,typeAnnotation:n})}function br(e,t=null){return(0,r.default)({type:"TSInstantiationExpression",expression:e,typeParameters:t})}function Sr(e,t){return(0,r.default)({type:"TSAsExpression",expression:e,typeAnnotation:t})}function Er(e,t){return(0,r.default)({type:"TSTypeAssertion",typeAnnotation:e,expression:t})}function xr(e,t){return(0,r.default)({type:"TSEnumDeclaration",id:e,members:t})}function _r(e,t=null){return(0,r.default)({type:"TSEnumMember",id:e,initializer:t})}function wr(e,t){return(0,r.default)({type:"TSModuleDeclaration",id:e,body:t})}function Ar(e){return(0,r.default)({type:"TSModuleBlock",body:e})}function Pr(e,t=null,n=null){return(0,r.default)({type:"TSImportType",argument:e,qualifier:t,typeParameters:n})}function Or(e,t){return(0,r.default)({type:"TSImportEqualsDeclaration",id:e,moduleReference:t,isExport:null})}function Nr(e){return(0,r.default)({type:"TSExternalModuleReference",expression:e})}function Ir(e){return(0,r.default)({type:"TSNonNullExpression",expression:e})}function jr(e){return(0,r.default)({type:"TSExportAssignment",expression:e})}function Dr(e){return(0,r.default)({type:"TSNamespaceExportDeclaration",id:e})}function Lr(e){return(0,r.default)({type:"TSTypeAnnotation",typeAnnotation:e})}function Mr(e){return(0,r.default)({type:"TSTypeParameterInstantiation",params:e})}function Cr(e){return(0,r.default)({type:"TSTypeParameterDeclaration",params:e})}function kr(e=null,t=null,n){return(0,r.default)({type:"TSTypeParameter",constraint:e,default:t,name:n})}function Rr(e){return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),N(e)}function Br(e,t=""){return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),D(e,t)}function Fr(e){return console.trace("The node type RestProperty has been renamed to RestElement"),V(e)}function Vr(e){return console.trace("The node type SpreadProperty has been renamed to SpreadElement"),Te(e)}},22792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnyTypeAnnotation",{enumerable:!0,get:function(){return r.anyTypeAnnotation}}),Object.defineProperty(t,"ArgumentPlaceholder",{enumerable:!0,get:function(){return r.argumentPlaceholder}}),Object.defineProperty(t,"ArrayExpression",{enumerable:!0,get:function(){return r.arrayExpression}}),Object.defineProperty(t,"ArrayPattern",{enumerable:!0,get:function(){return r.arrayPattern}}),Object.defineProperty(t,"ArrayTypeAnnotation",{enumerable:!0,get:function(){return r.arrayTypeAnnotation}}),Object.defineProperty(t,"ArrowFunctionExpression",{enumerable:!0,get:function(){return r.arrowFunctionExpression}}),Object.defineProperty(t,"AssignmentExpression",{enumerable:!0,get:function(){return r.assignmentExpression}}),Object.defineProperty(t,"AssignmentPattern",{enumerable:!0,get:function(){return r.assignmentPattern}}),Object.defineProperty(t,"AwaitExpression",{enumerable:!0,get:function(){return r.awaitExpression}}),Object.defineProperty(t,"BigIntLiteral",{enumerable:!0,get:function(){return r.bigIntLiteral}}),Object.defineProperty(t,"BinaryExpression",{enumerable:!0,get:function(){return r.binaryExpression}}),Object.defineProperty(t,"BindExpression",{enumerable:!0,get:function(){return r.bindExpression}}),Object.defineProperty(t,"BlockStatement",{enumerable:!0,get:function(){return r.blockStatement}}),Object.defineProperty(t,"BooleanLiteral",{enumerable:!0,get:function(){return r.booleanLiteral}}),Object.defineProperty(t,"BooleanLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.booleanLiteralTypeAnnotation}}),Object.defineProperty(t,"BooleanTypeAnnotation",{enumerable:!0,get:function(){return r.booleanTypeAnnotation}}),Object.defineProperty(t,"BreakStatement",{enumerable:!0,get:function(){return r.breakStatement}}),Object.defineProperty(t,"CallExpression",{enumerable:!0,get:function(){return r.callExpression}}),Object.defineProperty(t,"CatchClause",{enumerable:!0,get:function(){return r.catchClause}}),Object.defineProperty(t,"ClassAccessorProperty",{enumerable:!0,get:function(){return r.classAccessorProperty}}),Object.defineProperty(t,"ClassBody",{enumerable:!0,get:function(){return r.classBody}}),Object.defineProperty(t,"ClassDeclaration",{enumerable:!0,get:function(){return r.classDeclaration}}),Object.defineProperty(t,"ClassExpression",{enumerable:!0,get:function(){return r.classExpression}}),Object.defineProperty(t,"ClassImplements",{enumerable:!0,get:function(){return r.classImplements}}),Object.defineProperty(t,"ClassMethod",{enumerable:!0,get:function(){return r.classMethod}}),Object.defineProperty(t,"ClassPrivateMethod",{enumerable:!0,get:function(){return r.classPrivateMethod}}),Object.defineProperty(t,"ClassPrivateProperty",{enumerable:!0,get:function(){return r.classPrivateProperty}}),Object.defineProperty(t,"ClassProperty",{enumerable:!0,get:function(){return r.classProperty}}),Object.defineProperty(t,"ConditionalExpression",{enumerable:!0,get:function(){return r.conditionalExpression}}),Object.defineProperty(t,"ContinueStatement",{enumerable:!0,get:function(){return r.continueStatement}}),Object.defineProperty(t,"DebuggerStatement",{enumerable:!0,get:function(){return r.debuggerStatement}}),Object.defineProperty(t,"DecimalLiteral",{enumerable:!0,get:function(){return r.decimalLiteral}}),Object.defineProperty(t,"DeclareClass",{enumerable:!0,get:function(){return r.declareClass}}),Object.defineProperty(t,"DeclareExportAllDeclaration",{enumerable:!0,get:function(){return r.declareExportAllDeclaration}}),Object.defineProperty(t,"DeclareExportDeclaration",{enumerable:!0,get:function(){return r.declareExportDeclaration}}),Object.defineProperty(t,"DeclareFunction",{enumerable:!0,get:function(){return r.declareFunction}}),Object.defineProperty(t,"DeclareInterface",{enumerable:!0,get:function(){return r.declareInterface}}),Object.defineProperty(t,"DeclareModule",{enumerable:!0,get:function(){return r.declareModule}}),Object.defineProperty(t,"DeclareModuleExports",{enumerable:!0,get:function(){return r.declareModuleExports}}),Object.defineProperty(t,"DeclareOpaqueType",{enumerable:!0,get:function(){return r.declareOpaqueType}}),Object.defineProperty(t,"DeclareTypeAlias",{enumerable:!0,get:function(){return r.declareTypeAlias}}),Object.defineProperty(t,"DeclareVariable",{enumerable:!0,get:function(){return r.declareVariable}}),Object.defineProperty(t,"DeclaredPredicate",{enumerable:!0,get:function(){return r.declaredPredicate}}),Object.defineProperty(t,"Decorator",{enumerable:!0,get:function(){return r.decorator}}),Object.defineProperty(t,"Directive",{enumerable:!0,get:function(){return r.directive}}),Object.defineProperty(t,"DirectiveLiteral",{enumerable:!0,get:function(){return r.directiveLiteral}}),Object.defineProperty(t,"DoExpression",{enumerable:!0,get:function(){return r.doExpression}}),Object.defineProperty(t,"DoWhileStatement",{enumerable:!0,get:function(){return r.doWhileStatement}}),Object.defineProperty(t,"EmptyStatement",{enumerable:!0,get:function(){return r.emptyStatement}}),Object.defineProperty(t,"EmptyTypeAnnotation",{enumerable:!0,get:function(){return r.emptyTypeAnnotation}}),Object.defineProperty(t,"EnumBooleanBody",{enumerable:!0,get:function(){return r.enumBooleanBody}}),Object.defineProperty(t,"EnumBooleanMember",{enumerable:!0,get:function(){return r.enumBooleanMember}}),Object.defineProperty(t,"EnumDeclaration",{enumerable:!0,get:function(){return r.enumDeclaration}}),Object.defineProperty(t,"EnumDefaultedMember",{enumerable:!0,get:function(){return r.enumDefaultedMember}}),Object.defineProperty(t,"EnumNumberBody",{enumerable:!0,get:function(){return r.enumNumberBody}}),Object.defineProperty(t,"EnumNumberMember",{enumerable:!0,get:function(){return r.enumNumberMember}}),Object.defineProperty(t,"EnumStringBody",{enumerable:!0,get:function(){return r.enumStringBody}}),Object.defineProperty(t,"EnumStringMember",{enumerable:!0,get:function(){return r.enumStringMember}}),Object.defineProperty(t,"EnumSymbolBody",{enumerable:!0,get:function(){return r.enumSymbolBody}}),Object.defineProperty(t,"ExistsTypeAnnotation",{enumerable:!0,get:function(){return r.existsTypeAnnotation}}),Object.defineProperty(t,"ExportAllDeclaration",{enumerable:!0,get:function(){return r.exportAllDeclaration}}),Object.defineProperty(t,"ExportDefaultDeclaration",{enumerable:!0,get:function(){return r.exportDefaultDeclaration}}),Object.defineProperty(t,"ExportDefaultSpecifier",{enumerable:!0,get:function(){return r.exportDefaultSpecifier}}),Object.defineProperty(t,"ExportNamedDeclaration",{enumerable:!0,get:function(){return r.exportNamedDeclaration}}),Object.defineProperty(t,"ExportNamespaceSpecifier",{enumerable:!0,get:function(){return r.exportNamespaceSpecifier}}),Object.defineProperty(t,"ExportSpecifier",{enumerable:!0,get:function(){return r.exportSpecifier}}),Object.defineProperty(t,"ExpressionStatement",{enumerable:!0,get:function(){return r.expressionStatement}}),Object.defineProperty(t,"File",{enumerable:!0,get:function(){return r.file}}),Object.defineProperty(t,"ForInStatement",{enumerable:!0,get:function(){return r.forInStatement}}),Object.defineProperty(t,"ForOfStatement",{enumerable:!0,get:function(){return r.forOfStatement}}),Object.defineProperty(t,"ForStatement",{enumerable:!0,get:function(){return r.forStatement}}),Object.defineProperty(t,"FunctionDeclaration",{enumerable:!0,get:function(){return r.functionDeclaration}}),Object.defineProperty(t,"FunctionExpression",{enumerable:!0,get:function(){return r.functionExpression}}),Object.defineProperty(t,"FunctionTypeAnnotation",{enumerable:!0,get:function(){return r.functionTypeAnnotation}}),Object.defineProperty(t,"FunctionTypeParam",{enumerable:!0,get:function(){return r.functionTypeParam}}),Object.defineProperty(t,"GenericTypeAnnotation",{enumerable:!0,get:function(){return r.genericTypeAnnotation}}),Object.defineProperty(t,"Identifier",{enumerable:!0,get:function(){return r.identifier}}),Object.defineProperty(t,"IfStatement",{enumerable:!0,get:function(){return r.ifStatement}}),Object.defineProperty(t,"Import",{enumerable:!0,get:function(){return r.import}}),Object.defineProperty(t,"ImportAttribute",{enumerable:!0,get:function(){return r.importAttribute}}),Object.defineProperty(t,"ImportDeclaration",{enumerable:!0,get:function(){return r.importDeclaration}}),Object.defineProperty(t,"ImportDefaultSpecifier",{enumerable:!0,get:function(){return r.importDefaultSpecifier}}),Object.defineProperty(t,"ImportNamespaceSpecifier",{enumerable:!0,get:function(){return r.importNamespaceSpecifier}}),Object.defineProperty(t,"ImportSpecifier",{enumerable:!0,get:function(){return r.importSpecifier}}),Object.defineProperty(t,"IndexedAccessType",{enumerable:!0,get:function(){return r.indexedAccessType}}),Object.defineProperty(t,"InferredPredicate",{enumerable:!0,get:function(){return r.inferredPredicate}}),Object.defineProperty(t,"InterfaceDeclaration",{enumerable:!0,get:function(){return r.interfaceDeclaration}}),Object.defineProperty(t,"InterfaceExtends",{enumerable:!0,get:function(){return r.interfaceExtends}}),Object.defineProperty(t,"InterfaceTypeAnnotation",{enumerable:!0,get:function(){return r.interfaceTypeAnnotation}}),Object.defineProperty(t,"InterpreterDirective",{enumerable:!0,get:function(){return r.interpreterDirective}}),Object.defineProperty(t,"IntersectionTypeAnnotation",{enumerable:!0,get:function(){return r.intersectionTypeAnnotation}}),Object.defineProperty(t,"JSXAttribute",{enumerable:!0,get:function(){return r.jsxAttribute}}),Object.defineProperty(t,"JSXClosingElement",{enumerable:!0,get:function(){return r.jsxClosingElement}}),Object.defineProperty(t,"JSXClosingFragment",{enumerable:!0,get:function(){return r.jsxClosingFragment}}),Object.defineProperty(t,"JSXElement",{enumerable:!0,get:function(){return r.jsxElement}}),Object.defineProperty(t,"JSXEmptyExpression",{enumerable:!0,get:function(){return r.jsxEmptyExpression}}),Object.defineProperty(t,"JSXExpressionContainer",{enumerable:!0,get:function(){return r.jsxExpressionContainer}}),Object.defineProperty(t,"JSXFragment",{enumerable:!0,get:function(){return r.jsxFragment}}),Object.defineProperty(t,"JSXIdentifier",{enumerable:!0,get:function(){return r.jsxIdentifier}}),Object.defineProperty(t,"JSXMemberExpression",{enumerable:!0,get:function(){return r.jsxMemberExpression}}),Object.defineProperty(t,"JSXNamespacedName",{enumerable:!0,get:function(){return r.jsxNamespacedName}}),Object.defineProperty(t,"JSXOpeningElement",{enumerable:!0,get:function(){return r.jsxOpeningElement}}),Object.defineProperty(t,"JSXOpeningFragment",{enumerable:!0,get:function(){return r.jsxOpeningFragment}}),Object.defineProperty(t,"JSXSpreadAttribute",{enumerable:!0,get:function(){return r.jsxSpreadAttribute}}),Object.defineProperty(t,"JSXSpreadChild",{enumerable:!0,get:function(){return r.jsxSpreadChild}}),Object.defineProperty(t,"JSXText",{enumerable:!0,get:function(){return r.jsxText}}),Object.defineProperty(t,"LabeledStatement",{enumerable:!0,get:function(){return r.labeledStatement}}),Object.defineProperty(t,"LogicalExpression",{enumerable:!0,get:function(){return r.logicalExpression}}),Object.defineProperty(t,"MemberExpression",{enumerable:!0,get:function(){return r.memberExpression}}),Object.defineProperty(t,"MetaProperty",{enumerable:!0,get:function(){return r.metaProperty}}),Object.defineProperty(t,"MixedTypeAnnotation",{enumerable:!0,get:function(){return r.mixedTypeAnnotation}}),Object.defineProperty(t,"ModuleExpression",{enumerable:!0,get:function(){return r.moduleExpression}}),Object.defineProperty(t,"NewExpression",{enumerable:!0,get:function(){return r.newExpression}}),Object.defineProperty(t,"Noop",{enumerable:!0,get:function(){return r.noop}}),Object.defineProperty(t,"NullLiteral",{enumerable:!0,get:function(){return r.nullLiteral}}),Object.defineProperty(t,"NullLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.nullLiteralTypeAnnotation}}),Object.defineProperty(t,"NullableTypeAnnotation",{enumerable:!0,get:function(){return r.nullableTypeAnnotation}}),Object.defineProperty(t,"NumberLiteral",{enumerable:!0,get:function(){return r.numberLiteral}}),Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.numberLiteralTypeAnnotation}}),Object.defineProperty(t,"NumberTypeAnnotation",{enumerable:!0,get:function(){return r.numberTypeAnnotation}}),Object.defineProperty(t,"NumericLiteral",{enumerable:!0,get:function(){return r.numericLiteral}}),Object.defineProperty(t,"ObjectExpression",{enumerable:!0,get:function(){return r.objectExpression}}),Object.defineProperty(t,"ObjectMethod",{enumerable:!0,get:function(){return r.objectMethod}}),Object.defineProperty(t,"ObjectPattern",{enumerable:!0,get:function(){return r.objectPattern}}),Object.defineProperty(t,"ObjectProperty",{enumerable:!0,get:function(){return r.objectProperty}}),Object.defineProperty(t,"ObjectTypeAnnotation",{enumerable:!0,get:function(){return r.objectTypeAnnotation}}),Object.defineProperty(t,"ObjectTypeCallProperty",{enumerable:!0,get:function(){return r.objectTypeCallProperty}}),Object.defineProperty(t,"ObjectTypeIndexer",{enumerable:!0,get:function(){return r.objectTypeIndexer}}),Object.defineProperty(t,"ObjectTypeInternalSlot",{enumerable:!0,get:function(){return r.objectTypeInternalSlot}}),Object.defineProperty(t,"ObjectTypeProperty",{enumerable:!0,get:function(){return r.objectTypeProperty}}),Object.defineProperty(t,"ObjectTypeSpreadProperty",{enumerable:!0,get:function(){return r.objectTypeSpreadProperty}}),Object.defineProperty(t,"OpaqueType",{enumerable:!0,get:function(){return r.opaqueType}}),Object.defineProperty(t,"OptionalCallExpression",{enumerable:!0,get:function(){return r.optionalCallExpression}}),Object.defineProperty(t,"OptionalIndexedAccessType",{enumerable:!0,get:function(){return r.optionalIndexedAccessType}}),Object.defineProperty(t,"OptionalMemberExpression",{enumerable:!0,get:function(){return r.optionalMemberExpression}}),Object.defineProperty(t,"ParenthesizedExpression",{enumerable:!0,get:function(){return r.parenthesizedExpression}}),Object.defineProperty(t,"PipelineBareFunction",{enumerable:!0,get:function(){return r.pipelineBareFunction}}),Object.defineProperty(t,"PipelinePrimaryTopicReference",{enumerable:!0,get:function(){return r.pipelinePrimaryTopicReference}}),Object.defineProperty(t,"PipelineTopicExpression",{enumerable:!0,get:function(){return r.pipelineTopicExpression}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.placeholder}}),Object.defineProperty(t,"PrivateName",{enumerable:!0,get:function(){return r.privateName}}),Object.defineProperty(t,"Program",{enumerable:!0,get:function(){return r.program}}),Object.defineProperty(t,"QualifiedTypeIdentifier",{enumerable:!0,get:function(){return r.qualifiedTypeIdentifier}}),Object.defineProperty(t,"RecordExpression",{enumerable:!0,get:function(){return r.recordExpression}}),Object.defineProperty(t,"RegExpLiteral",{enumerable:!0,get:function(){return r.regExpLiteral}}),Object.defineProperty(t,"RegexLiteral",{enumerable:!0,get:function(){return r.regexLiteral}}),Object.defineProperty(t,"RestElement",{enumerable:!0,get:function(){return r.restElement}}),Object.defineProperty(t,"RestProperty",{enumerable:!0,get:function(){return r.restProperty}}),Object.defineProperty(t,"ReturnStatement",{enumerable:!0,get:function(){return r.returnStatement}}),Object.defineProperty(t,"SequenceExpression",{enumerable:!0,get:function(){return r.sequenceExpression}}),Object.defineProperty(t,"SpreadElement",{enumerable:!0,get:function(){return r.spreadElement}}),Object.defineProperty(t,"SpreadProperty",{enumerable:!0,get:function(){return r.spreadProperty}}),Object.defineProperty(t,"StaticBlock",{enumerable:!0,get:function(){return r.staticBlock}}),Object.defineProperty(t,"StringLiteral",{enumerable:!0,get:function(){return r.stringLiteral}}),Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return r.stringLiteralTypeAnnotation}}),Object.defineProperty(t,"StringTypeAnnotation",{enumerable:!0,get:function(){return r.stringTypeAnnotation}}),Object.defineProperty(t,"Super",{enumerable:!0,get:function(){return r.super}}),Object.defineProperty(t,"SwitchCase",{enumerable:!0,get:function(){return r.switchCase}}),Object.defineProperty(t,"SwitchStatement",{enumerable:!0,get:function(){return r.switchStatement}}),Object.defineProperty(t,"SymbolTypeAnnotation",{enumerable:!0,get:function(){return r.symbolTypeAnnotation}}),Object.defineProperty(t,"TSAnyKeyword",{enumerable:!0,get:function(){return r.tsAnyKeyword}}),Object.defineProperty(t,"TSArrayType",{enumerable:!0,get:function(){return r.tsArrayType}}),Object.defineProperty(t,"TSAsExpression",{enumerable:!0,get:function(){return r.tsAsExpression}}),Object.defineProperty(t,"TSBigIntKeyword",{enumerable:!0,get:function(){return r.tsBigIntKeyword}}),Object.defineProperty(t,"TSBooleanKeyword",{enumerable:!0,get:function(){return r.tsBooleanKeyword}}),Object.defineProperty(t,"TSCallSignatureDeclaration",{enumerable:!0,get:function(){return r.tsCallSignatureDeclaration}}),Object.defineProperty(t,"TSConditionalType",{enumerable:!0,get:function(){return r.tsConditionalType}}),Object.defineProperty(t,"TSConstructSignatureDeclaration",{enumerable:!0,get:function(){return r.tsConstructSignatureDeclaration}}),Object.defineProperty(t,"TSConstructorType",{enumerable:!0,get:function(){return r.tsConstructorType}}),Object.defineProperty(t,"TSDeclareFunction",{enumerable:!0,get:function(){return r.tsDeclareFunction}}),Object.defineProperty(t,"TSDeclareMethod",{enumerable:!0,get:function(){return r.tsDeclareMethod}}),Object.defineProperty(t,"TSEnumDeclaration",{enumerable:!0,get:function(){return r.tsEnumDeclaration}}),Object.defineProperty(t,"TSEnumMember",{enumerable:!0,get:function(){return r.tsEnumMember}}),Object.defineProperty(t,"TSExportAssignment",{enumerable:!0,get:function(){return r.tsExportAssignment}}),Object.defineProperty(t,"TSExpressionWithTypeArguments",{enumerable:!0,get:function(){return r.tsExpressionWithTypeArguments}}),Object.defineProperty(t,"TSExternalModuleReference",{enumerable:!0,get:function(){return r.tsExternalModuleReference}}),Object.defineProperty(t,"TSFunctionType",{enumerable:!0,get:function(){return r.tsFunctionType}}),Object.defineProperty(t,"TSImportEqualsDeclaration",{enumerable:!0,get:function(){return r.tsImportEqualsDeclaration}}),Object.defineProperty(t,"TSImportType",{enumerable:!0,get:function(){return r.tsImportType}}),Object.defineProperty(t,"TSIndexSignature",{enumerable:!0,get:function(){return r.tsIndexSignature}}),Object.defineProperty(t,"TSIndexedAccessType",{enumerable:!0,get:function(){return r.tsIndexedAccessType}}),Object.defineProperty(t,"TSInferType",{enumerable:!0,get:function(){return r.tsInferType}}),Object.defineProperty(t,"TSInstantiationExpression",{enumerable:!0,get:function(){return r.tsInstantiationExpression}}),Object.defineProperty(t,"TSInterfaceBody",{enumerable:!0,get:function(){return r.tsInterfaceBody}}),Object.defineProperty(t,"TSInterfaceDeclaration",{enumerable:!0,get:function(){return r.tsInterfaceDeclaration}}),Object.defineProperty(t,"TSIntersectionType",{enumerable:!0,get:function(){return r.tsIntersectionType}}),Object.defineProperty(t,"TSIntrinsicKeyword",{enumerable:!0,get:function(){return r.tsIntrinsicKeyword}}),Object.defineProperty(t,"TSLiteralType",{enumerable:!0,get:function(){return r.tsLiteralType}}),Object.defineProperty(t,"TSMappedType",{enumerable:!0,get:function(){return r.tsMappedType}}),Object.defineProperty(t,"TSMethodSignature",{enumerable:!0,get:function(){return r.tsMethodSignature}}),Object.defineProperty(t,"TSModuleBlock",{enumerable:!0,get:function(){return r.tsModuleBlock}}),Object.defineProperty(t,"TSModuleDeclaration",{enumerable:!0,get:function(){return r.tsModuleDeclaration}}),Object.defineProperty(t,"TSNamedTupleMember",{enumerable:!0,get:function(){return r.tsNamedTupleMember}}),Object.defineProperty(t,"TSNamespaceExportDeclaration",{enumerable:!0,get:function(){return r.tsNamespaceExportDeclaration}}),Object.defineProperty(t,"TSNeverKeyword",{enumerable:!0,get:function(){return r.tsNeverKeyword}}),Object.defineProperty(t,"TSNonNullExpression",{enumerable:!0,get:function(){return r.tsNonNullExpression}}),Object.defineProperty(t,"TSNullKeyword",{enumerable:!0,get:function(){return r.tsNullKeyword}}),Object.defineProperty(t,"TSNumberKeyword",{enumerable:!0,get:function(){return r.tsNumberKeyword}}),Object.defineProperty(t,"TSObjectKeyword",{enumerable:!0,get:function(){return r.tsObjectKeyword}}),Object.defineProperty(t,"TSOptionalType",{enumerable:!0,get:function(){return r.tsOptionalType}}),Object.defineProperty(t,"TSParameterProperty",{enumerable:!0,get:function(){return r.tsParameterProperty}}),Object.defineProperty(t,"TSParenthesizedType",{enumerable:!0,get:function(){return r.tsParenthesizedType}}),Object.defineProperty(t,"TSPropertySignature",{enumerable:!0,get:function(){return r.tsPropertySignature}}),Object.defineProperty(t,"TSQualifiedName",{enumerable:!0,get:function(){return r.tsQualifiedName}}),Object.defineProperty(t,"TSRestType",{enumerable:!0,get:function(){return r.tsRestType}}),Object.defineProperty(t,"TSStringKeyword",{enumerable:!0,get:function(){return r.tsStringKeyword}}),Object.defineProperty(t,"TSSymbolKeyword",{enumerable:!0,get:function(){return r.tsSymbolKeyword}}),Object.defineProperty(t,"TSThisType",{enumerable:!0,get:function(){return r.tsThisType}}),Object.defineProperty(t,"TSTupleType",{enumerable:!0,get:function(){return r.tsTupleType}}),Object.defineProperty(t,"TSTypeAliasDeclaration",{enumerable:!0,get:function(){return r.tsTypeAliasDeclaration}}),Object.defineProperty(t,"TSTypeAnnotation",{enumerable:!0,get:function(){return r.tsTypeAnnotation}}),Object.defineProperty(t,"TSTypeAssertion",{enumerable:!0,get:function(){return r.tsTypeAssertion}}),Object.defineProperty(t,"TSTypeLiteral",{enumerable:!0,get:function(){return r.tsTypeLiteral}}),Object.defineProperty(t,"TSTypeOperator",{enumerable:!0,get:function(){return r.tsTypeOperator}}),Object.defineProperty(t,"TSTypeParameter",{enumerable:!0,get:function(){return r.tsTypeParameter}}),Object.defineProperty(t,"TSTypeParameterDeclaration",{enumerable:!0,get:function(){return r.tsTypeParameterDeclaration}}),Object.defineProperty(t,"TSTypeParameterInstantiation",{enumerable:!0,get:function(){return r.tsTypeParameterInstantiation}}),Object.defineProperty(t,"TSTypePredicate",{enumerable:!0,get:function(){return r.tsTypePredicate}}),Object.defineProperty(t,"TSTypeQuery",{enumerable:!0,get:function(){return r.tsTypeQuery}}),Object.defineProperty(t,"TSTypeReference",{enumerable:!0,get:function(){return r.tsTypeReference}}),Object.defineProperty(t,"TSUndefinedKeyword",{enumerable:!0,get:function(){return r.tsUndefinedKeyword}}),Object.defineProperty(t,"TSUnionType",{enumerable:!0,get:function(){return r.tsUnionType}}),Object.defineProperty(t,"TSUnknownKeyword",{enumerable:!0,get:function(){return r.tsUnknownKeyword}}),Object.defineProperty(t,"TSVoidKeyword",{enumerable:!0,get:function(){return r.tsVoidKeyword}}),Object.defineProperty(t,"TaggedTemplateExpression",{enumerable:!0,get:function(){return r.taggedTemplateExpression}}),Object.defineProperty(t,"TemplateElement",{enumerable:!0,get:function(){return r.templateElement}}),Object.defineProperty(t,"TemplateLiteral",{enumerable:!0,get:function(){return r.templateLiteral}}),Object.defineProperty(t,"ThisExpression",{enumerable:!0,get:function(){return r.thisExpression}}),Object.defineProperty(t,"ThisTypeAnnotation",{enumerable:!0,get:function(){return r.thisTypeAnnotation}}),Object.defineProperty(t,"ThrowStatement",{enumerable:!0,get:function(){return r.throwStatement}}),Object.defineProperty(t,"TopicReference",{enumerable:!0,get:function(){return r.topicReference}}),Object.defineProperty(t,"TryStatement",{enumerable:!0,get:function(){return r.tryStatement}}),Object.defineProperty(t,"TupleExpression",{enumerable:!0,get:function(){return r.tupleExpression}}),Object.defineProperty(t,"TupleTypeAnnotation",{enumerable:!0,get:function(){return r.tupleTypeAnnotation}}),Object.defineProperty(t,"TypeAlias",{enumerable:!0,get:function(){return r.typeAlias}}),Object.defineProperty(t,"TypeAnnotation",{enumerable:!0,get:function(){return r.typeAnnotation}}),Object.defineProperty(t,"TypeCastExpression",{enumerable:!0,get:function(){return r.typeCastExpression}}),Object.defineProperty(t,"TypeParameter",{enumerable:!0,get:function(){return r.typeParameter}}),Object.defineProperty(t,"TypeParameterDeclaration",{enumerable:!0,get:function(){return r.typeParameterDeclaration}}),Object.defineProperty(t,"TypeParameterInstantiation",{enumerable:!0,get:function(){return r.typeParameterInstantiation}}),Object.defineProperty(t,"TypeofTypeAnnotation",{enumerable:!0,get:function(){return r.typeofTypeAnnotation}}),Object.defineProperty(t,"UnaryExpression",{enumerable:!0,get:function(){return r.unaryExpression}}),Object.defineProperty(t,"UnionTypeAnnotation",{enumerable:!0,get:function(){return r.unionTypeAnnotation}}),Object.defineProperty(t,"UpdateExpression",{enumerable:!0,get:function(){return r.updateExpression}}),Object.defineProperty(t,"V8IntrinsicIdentifier",{enumerable:!0,get:function(){return r.v8IntrinsicIdentifier}}),Object.defineProperty(t,"VariableDeclaration",{enumerable:!0,get:function(){return r.variableDeclaration}}),Object.defineProperty(t,"VariableDeclarator",{enumerable:!0,get:function(){return r.variableDeclarator}}),Object.defineProperty(t,"Variance",{enumerable:!0,get:function(){return r.variance}}),Object.defineProperty(t,"VoidTypeAnnotation",{enumerable:!0,get:function(){return r.voidTypeAnnotation}}),Object.defineProperty(t,"WhileStatement",{enumerable:!0,get:function(){return r.whileStatement}}),Object.defineProperty(t,"WithStatement",{enumerable:!0,get:function(){return r.withStatement}}),Object.defineProperty(t,"YieldExpression",{enumerable:!0,get:function(){return r.yieldExpression}});var r=n(18771)},87305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(98212);function o(e){const t=[];for(let n=0;n<e.children.length;n++){let o=e.children[n];(0,r.isJSXText)(o)?(0,i.default)(o,t):((0,r.isJSXExpressionContainer)(o)&&(o=o.expression),(0,r.isJSXEmptyExpression)(o)||t.push(o))}return t}},31096:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(18771),i=n(7419);function o(e){const t=e.map((e=>e.typeAnnotation)),n=(0,i.default)(t);return 1===n.length?n[0]:(0,r.tsUnionType)(n)}},35890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(93885),i=n(60428);function o(e){const t=i.BUILDER_KEYS[e.type];for(const n of t)(0,r.default)(e,n,e[n]);return e}},35440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e,!1)}},74042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e)}},58741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e,!0,!0)}},36774:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s;var r=n(92321),i=n(42748);const o=Function.call.bind(Object.prototype.hasOwnProperty);function a(e,t,n,r){return e&&"string"===typeof e.type?l(e,t,n,r):e}function u(e,t,n,r){return Array.isArray(e)?e.map((e=>a(e,t,n,r))):a(e,t,n,r)}function s(e,t=!0,n=!1){return l(e,t,n,new Map)}function l(e,t=!0,n=!1,a){if(!e)return e;const{type:s}=e,l={type:e.type};if((0,i.isIdentifier)(e))l.name=e.name,o(e,"optional")&&"boolean"===typeof e.optional&&(l.optional=e.optional),o(e,"typeAnnotation")&&(l.typeAnnotation=t?u(e.typeAnnotation,!0,n,a):e.typeAnnotation);else{if(!o(r.NODE_FIELDS,s))throw new Error(`Unknown node type: "${s}"`);for(const f of Object.keys(r.NODE_FIELDS[s]))o(e,f)&&(l[f]=t?(0,i.isFile)(e)&&"comments"===f?c(e.comments,t,n,a):u(e[f],!0,n,a):e[f])}return o(e,"loc")&&(l.loc=n?null:e.loc),o(e,"leadingComments")&&(l.leadingComments=c(e.leadingComments,t,n,a)),o(e,"innerComments")&&(l.innerComments=c(e.innerComments,t,n,a)),o(e,"trailingComments")&&(l.trailingComments=c(e.trailingComments,t,n,a)),o(e,"extra")&&(l.extra=Object.assign({},e.extra)),l}function c(e,t,n,r){return e&&t?e.map((e=>{const t=r.get(e);if(t)return t;const{type:i,value:o,loc:a}=e,u={type:i,value:o,loc:a};return n&&(u.loc=null),r.set(e,u),u})):e}},86801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(36774);function i(e){return(0,r.default)(e,!1,!0)}},34664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(83600);function i(e,t,n,i){return(0,r.default)(e,t,[{type:i?"CommentLine":"CommentBlock",value:n}])}},83600:function(e,t){"use strict";function n(e,t,n){if(!n||!e)return e;const r=`${t}Comments`;return e[r]?"leading"===t?e[r]=n.concat(e[r]):e[r].push(...n):e[r]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},4225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(33777);function i(e,t){(0,r.default)("innerComments",e,t)}},72761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(33777);function i(e,t){(0,r.default)("leadingComments",e,t)}},44927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(33777);function i(e,t){(0,r.default)("trailingComments",e,t)}},58268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(44927),i=n(72761),o=n(4225);function a(e,t){return(0,r.default)(e,t),(0,i.default)(e,t),(0,o.default)(e,t),e}},41142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(16591);function i(e){return r.COMMENT_KEYS.forEach((t=>{e[t]=null})),e}},15787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WHILE_TYPES=t.USERWHITESPACABLE_TYPES=t.UNARYLIKE_TYPES=t.TYPESCRIPT_TYPES=t.TSTYPE_TYPES=t.TSTYPEELEMENT_TYPES=t.TSENTITYNAME_TYPES=t.TSBASETYPE_TYPES=t.TERMINATORLESS_TYPES=t.STATEMENT_TYPES=t.STANDARDIZED_TYPES=t.SCOPABLE_TYPES=t.PUREISH_TYPES=t.PROPERTY_TYPES=t.PRIVATE_TYPES=t.PATTERN_TYPES=t.PATTERNLIKE_TYPES=t.OBJECTMEMBER_TYPES=t.MODULESPECIFIER_TYPES=t.MODULEDECLARATION_TYPES=t.MISCELLANEOUS_TYPES=t.METHOD_TYPES=t.LVAL_TYPES=t.LOOP_TYPES=t.LITERAL_TYPES=t.JSX_TYPES=t.IMMUTABLE_TYPES=t.FUNCTION_TYPES=t.FUNCTIONPARENT_TYPES=t.FOR_TYPES=t.FORXSTATEMENT_TYPES=t.FLOW_TYPES=t.FLOWTYPE_TYPES=t.FLOWPREDICATE_TYPES=t.FLOWDECLARATION_TYPES=t.FLOWBASEANNOTATION_TYPES=t.EXPRESSION_TYPES=t.EXPRESSIONWRAPPER_TYPES=t.EXPORTDECLARATION_TYPES=t.ENUMMEMBER_TYPES=t.ENUMBODY_TYPES=t.DECLARATION_TYPES=t.CONDITIONAL_TYPES=t.COMPLETIONSTATEMENT_TYPES=t.CLASS_TYPES=t.BLOCK_TYPES=t.BLOCKPARENT_TYPES=t.BINARY_TYPES=t.ACCESSOR_TYPES=void 0;var r=n(92321);const i=r.FLIPPED_ALIAS_KEYS["Standardized"];t.STANDARDIZED_TYPES=i;const o=r.FLIPPED_ALIAS_KEYS["Expression"];t.EXPRESSION_TYPES=o;const a=r.FLIPPED_ALIAS_KEYS["Binary"];t.BINARY_TYPES=a;const u=r.FLIPPED_ALIAS_KEYS["Scopable"];t.SCOPABLE_TYPES=u;const s=r.FLIPPED_ALIAS_KEYS["BlockParent"];t.BLOCKPARENT_TYPES=s;const l=r.FLIPPED_ALIAS_KEYS["Block"];t.BLOCK_TYPES=l;const c=r.FLIPPED_ALIAS_KEYS["Statement"];t.STATEMENT_TYPES=c;const f=r.FLIPPED_ALIAS_KEYS["Terminatorless"];t.TERMINATORLESS_TYPES=f;const p=r.FLIPPED_ALIAS_KEYS["CompletionStatement"];t.COMPLETIONSTATEMENT_TYPES=p;const d=r.FLIPPED_ALIAS_KEYS["Conditional"];t.CONDITIONAL_TYPES=d;const y=r.FLIPPED_ALIAS_KEYS["Loop"];t.LOOP_TYPES=y;const m=r.FLIPPED_ALIAS_KEYS["While"];t.WHILE_TYPES=m;const h=r.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];t.EXPRESSIONWRAPPER_TYPES=h;const v=r.FLIPPED_ALIAS_KEYS["For"];t.FOR_TYPES=v;const g=r.FLIPPED_ALIAS_KEYS["ForXStatement"];t.FORXSTATEMENT_TYPES=g;const T=r.FLIPPED_ALIAS_KEYS["Function"];t.FUNCTION_TYPES=T;const b=r.FLIPPED_ALIAS_KEYS["FunctionParent"];t.FUNCTIONPARENT_TYPES=b;const S=r.FLIPPED_ALIAS_KEYS["Pureish"];t.PUREISH_TYPES=S;const E=r.FLIPPED_ALIAS_KEYS["Declaration"];t.DECLARATION_TYPES=E;const x=r.FLIPPED_ALIAS_KEYS["PatternLike"];t.PATTERNLIKE_TYPES=x;const _=r.FLIPPED_ALIAS_KEYS["LVal"];t.LVAL_TYPES=_;const w=r.FLIPPED_ALIAS_KEYS["TSEntityName"];t.TSENTITYNAME_TYPES=w;const A=r.FLIPPED_ALIAS_KEYS["Literal"];t.LITERAL_TYPES=A;const P=r.FLIPPED_ALIAS_KEYS["Immutable"];t.IMMUTABLE_TYPES=P;const O=r.FLIPPED_ALIAS_KEYS["UserWhitespacable"];t.USERWHITESPACABLE_TYPES=O;const N=r.FLIPPED_ALIAS_KEYS["Method"];t.METHOD_TYPES=N;const I=r.FLIPPED_ALIAS_KEYS["ObjectMember"];t.OBJECTMEMBER_TYPES=I;const j=r.FLIPPED_ALIAS_KEYS["Property"];t.PROPERTY_TYPES=j;const D=r.FLIPPED_ALIAS_KEYS["UnaryLike"];t.UNARYLIKE_TYPES=D;const L=r.FLIPPED_ALIAS_KEYS["Pattern"];t.PATTERN_TYPES=L;const M=r.FLIPPED_ALIAS_KEYS["Class"];t.CLASS_TYPES=M;const C=r.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];t.MODULEDECLARATION_TYPES=C;const k=r.FLIPPED_ALIAS_KEYS["ExportDeclaration"];t.EXPORTDECLARATION_TYPES=k;const R=r.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];t.MODULESPECIFIER_TYPES=R;const B=r.FLIPPED_ALIAS_KEYS["Accessor"];t.ACCESSOR_TYPES=B;const F=r.FLIPPED_ALIAS_KEYS["Private"];t.PRIVATE_TYPES=F;const V=r.FLIPPED_ALIAS_KEYS["Flow"];t.FLOW_TYPES=V;const K=r.FLIPPED_ALIAS_KEYS["FlowType"];t.FLOWTYPE_TYPES=K;const Y=r.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];t.FLOWBASEANNOTATION_TYPES=Y;const U=r.FLIPPED_ALIAS_KEYS["FlowDeclaration"];t.FLOWDECLARATION_TYPES=U;const J=r.FLIPPED_ALIAS_KEYS["FlowPredicate"];t.FLOWPREDICATE_TYPES=J;const q=r.FLIPPED_ALIAS_KEYS["EnumBody"];t.ENUMBODY_TYPES=q;const X=r.FLIPPED_ALIAS_KEYS["EnumMember"];t.ENUMMEMBER_TYPES=X;const W=r.FLIPPED_ALIAS_KEYS["JSX"];t.JSX_TYPES=W;const $=r.FLIPPED_ALIAS_KEYS["Miscellaneous"];t.MISCELLANEOUS_TYPES=$;const z=r.FLIPPED_ALIAS_KEYS["TypeScript"];t.TYPESCRIPT_TYPES=z;const G=r.FLIPPED_ALIAS_KEYS["TSTypeElement"];t.TSTYPEELEMENT_TYPES=G;const H=r.FLIPPED_ALIAS_KEYS["TSType"];t.TSTYPE_TYPES=H;const Q=r.FLIPPED_ALIAS_KEYS["TSBaseType"];t.TSBASETYPE_TYPES=Q},16591:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UPDATE_OPERATORS=t.UNARY_OPERATORS=t.STRING_UNARY_OPERATORS=t.STATEMENT_OR_BLOCK_KEYS=t.NUMBER_UNARY_OPERATORS=t.NUMBER_BINARY_OPERATORS=t.NOT_LOCAL_BINDING=t.LOGICAL_OPERATORS=t.INHERIT_KEYS=t.FOR_INIT_KEYS=t.FLATTENABLE_KEYS=t.EQUALITY_BINARY_OPERATORS=t.COMPARISON_BINARY_OPERATORS=t.COMMENT_KEYS=t.BOOLEAN_UNARY_OPERATORS=t.BOOLEAN_NUMBER_BINARY_OPERATORS=t.BOOLEAN_BINARY_OPERATORS=t.BLOCK_SCOPED_SYMBOL=t.BINARY_OPERATORS=t.ASSIGNMENT_OPERATORS=void 0;const n=["consequent","body","alternate"];t.STATEMENT_OR_BLOCK_KEYS=n;const r=["body","expressions"];t.FLATTENABLE_KEYS=r;const i=["left","init"];t.FOR_INIT_KEYS=i;const o=["leadingComments","trailingComments","innerComments"];t.COMMENT_KEYS=o;const a=["||","&&","??"];t.LOGICAL_OPERATORS=a;const u=["++","--"];t.UPDATE_OPERATORS=u;const s=[">","<",">=","<="];t.BOOLEAN_NUMBER_BINARY_OPERATORS=s;const l=["==","===","!=","!=="];t.EQUALITY_BINARY_OPERATORS=l;const c=[...l,"in","instanceof"];t.COMPARISON_BINARY_OPERATORS=c;const f=[...c,...s];t.BOOLEAN_BINARY_OPERATORS=f;const p=["-","/","%","*","**","&","|",">>",">>>","<<","^"];t.NUMBER_BINARY_OPERATORS=p;const d=["+",...p,...f,"|>"];t.BINARY_OPERATORS=d;const y=["=","+=",...p.map((e=>e+"=")),...a.map((e=>e+"="))];t.ASSIGNMENT_OPERATORS=y;const m=["delete","!"];t.BOOLEAN_UNARY_OPERATORS=m;const h=["+","-","~"];t.NUMBER_UNARY_OPERATORS=h;const v=["typeof"];t.STRING_UNARY_OPERATORS=v;const g=["void","throw",...m,...h,...v];t.UNARY_OPERATORS=g;const T={optional:["typeAnnotation","typeParameters","returnType"],force:["start","loc","end"]};t.INHERIT_KEYS=T;const b=Symbol.for("var used to be block scoped");t.BLOCK_SCOPED_SYMBOL=b;const S=Symbol.for("should not be considered a local binding");t.NOT_LOCAL_BINDING=S},33623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(1829);function i(e,t="body"){return e[t]=(0,r.default)(e[t],e)}},15392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var r=n(97980),i=n(42748),o=n(18771),a=n(36774);function u(e,t,n){const s=[];let l=!0;for(const c of e)if((0,i.isEmptyStatement)(c)||(l=!1),(0,i.isExpression)(c))s.push(c);else if((0,i.isExpressionStatement)(c))s.push(c.expression);else if((0,i.isVariableDeclaration)(c)){if("var"!==c.kind)return;for(const e of c.declarations){const t=(0,r.default)(e);for(const e of Object.keys(t))n.push({kind:c.kind,id:(0,a.default)(t[e])});e.init&&s.push((0,o.assignmentExpression)("=",e.id,e.init))}l=!0}else if((0,i.isIfStatement)(c)){const e=c.consequent?u([c.consequent],t,n):t.buildUndefinedNode(),r=c.alternate?u([c.alternate],t,n):t.buildUndefinedNode();if(!e||!r)return;s.push((0,o.conditionalExpression)(c.test,e,r))}else if((0,i.isBlockStatement)(c)){const e=u(c.body,t,n);if(!e)return;s.push(e)}else{if(!(0,i.isEmptyStatement)(c))return;0===e.indexOf(c)&&(l=!0)}return l&&s.push(t.buildUndefinedNode()),1===s.length?s[0]:(0,o.sequenceExpression)(s)}},13026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(89374);function i(e){return e=(0,r.default)(e),"eval"!==e&&"arguments"!==e||(e="_"+e),e}},1829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(18771);function o(e,t){if((0,r.isBlockStatement)(e))return e;let n=[];return(0,r.isEmptyStatement)(e)?n=[]:((0,r.isStatement)(e)||(e=(0,r.isFunction)(t)?(0,i.returnStatement)(e):(0,i.expressionStatement)(e)),n=[e]),(0,i.blockStatement)(n)}},80019:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(18771);function o(e,t=e.key||e.property){return!e.computed&&(0,r.isIdentifier)(t)&&(t=(0,i.stringLiteral)(t.name)),t}},3447:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(42748),i=o;function o(e){if((0,r.isExpressionStatement)(e)&&(e=e.expression),(0,r.isExpression)(e))return e;if((0,r.isClass)(e)?e.type="ClassExpression":(0,r.isFunction)(e)&&(e.type="FunctionExpression"),!(0,r.isExpression)(e))throw new Error(`cannot turn ${e.type} to an expression`);return e}t["default"]=i},89374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(3994),i=n(65502);function o(e){e+="";let t="";for(const n of e)t+=(0,i.isIdentifierChar)(n.codePointAt(0))?n:"-";return t=t.replace(/^[-0-9]+/,""),t=t.replace(/[-\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""})),(0,r.default)(t)||(t=`_${t}`),t||"_"}},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(42748),i=n(36774),o=n(22183);function a(e,t=e.key){let n;return"method"===e.kind?a.increment()+"":(n=(0,r.isIdentifier)(t)?t.name:(0,r.isStringLiteral)(t)?JSON.stringify(t.value):JSON.stringify((0,o.default)((0,i.default)(t))),e.computed&&(n=`[${n}]`),e.static&&(n=`static:${n}`),n)}a.uid=0,a.increment=function(){return a.uid>=Number.MAX_SAFE_INTEGER?a.uid=0:a.uid++}},89023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(15392);function i(e,t){if(null==e||!e.length)return;const n=[],i=(0,r.default)(e,t,n);if(i){for(const e of n)t.push(e);return i}}},28626:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(42748),i=n(18771),o=a;function a(e,t){if((0,r.isStatement)(e))return e;let n,o=!1;if((0,r.isClass)(e))o=!0,n="ClassDeclaration";else if((0,r.isFunction)(e))o=!0,n="FunctionDeclaration";else if((0,r.isAssignmentExpression)(e))return(0,i.expressionStatement)(e);if(o&&!e.id&&(n=!1),!n){if(t)return!1;throw new Error(`cannot turn ${e.type} to a statement`)}return e.type=n,e}t["default"]=o},36161:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(3994),i=n(18771),o=l;t["default"]=o;const a=Function.call.bind(Object.prototype.toString);function u(e){return"[object RegExp]"===a(e)}function s(e){if("object"!==typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;const t=Object.getPrototypeOf(e);return null===t||null===Object.getPrototypeOf(t)}function l(e){if(void 0===e)return(0,i.identifier)("undefined");if(!0===e||!1===e)return(0,i.booleanLiteral)(e);if(null===e)return(0,i.nullLiteral)();if("string"===typeof e)return(0,i.stringLiteral)(e);if("number"===typeof e){let t;if(Number.isFinite(e))t=(0,i.numericLiteral)(Math.abs(e));else{let n;n=Number.isNaN(e)?(0,i.numericLiteral)(0):(0,i.numericLiteral)(1),t=(0,i.binaryExpression)("/",n,(0,i.numericLiteral)(0))}return(e<0||Object.is(e,-0))&&(t=(0,i.unaryExpression)("-",t)),t}if(u(e)){const t=e.source,n=e.toString().match(/\/([a-z]+|)$/)[1];return(0,i.regExpLiteral)(t,n)}if(Array.isArray(e))return(0,i.arrayExpression)(e.map(l));if(s(e)){const t=[];for(const n of Object.keys(e)){let o;o=(0,r.default)(n)?(0,i.identifier)(n):(0,i.stringLiteral)(n),t.push((0,i.objectProperty)(o,l(e[n])))}return(0,i.objectExpression)(t)}throw new Error("don't know how to turn this value into a node")}},63442:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.patternLikeCommon=t.functionTypeAnnotationCommon=t.functionDeclarationCommon=t.functionCommon=t.classMethodOrPropertyCommon=t.classMethodOrDeclareMethodCommon=void 0;var r=n(90053),i=n(3994),o=n(65502),a=n(16591),u=n(47376);const s=(0,u.defineAliasedType)("Standardized");s("ArrayExpression",{fields:{elements:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeOrValueType)("null","Expression","SpreadElement"))),default:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?void 0:[]}},visitor:["elements"],aliases:["Expression"]}),s("AssignmentExpression",{fields:{operator:{validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return(0,u.assertValueType)("string");const e=(0,u.assertOneOf)(...a.ASSIGNMENT_OPERATORS),t=(0,u.assertOneOf)("=");return function(n,i,o){const a=(0,r.default)("Pattern",n.left)?t:e;a(n,i,o)}}()},left:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.assertNodeType)("Identifier","MemberExpression","ArrayPattern","ObjectPattern","TSAsExpression","TSTypeAssertion","TSNonNullExpression"):(0,u.assertNodeType)("LVal")},right:{validate:(0,u.assertNodeType)("Expression")}},builder:["operator","left","right"],visitor:["left","right"],aliases:["Expression"]}),s("BinaryExpression",{builder:["operator","left","right"],fields:{operator:{validate:(0,u.assertOneOf)(...a.BINARY_OPERATORS)},left:{validate:function(){const e=(0,u.assertNodeType)("Expression"),t=(0,u.assertNodeType)("Expression","PrivateName"),n=function(n,r,i){const o="in"===n.operator?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","PrivateName"],n}()},right:{validate:(0,u.assertNodeType)("Expression")}},visitor:["left","right"],aliases:["Binary","Expression"]}),s("InterpreterDirective",{builder:["value"],fields:{value:{validate:(0,u.assertValueType)("string")}}}),s("Directive",{visitor:["value"],fields:{value:{validate:(0,u.assertNodeType)("DirectiveLiteral")}}}),s("DirectiveLiteral",{builder:["value"],fields:{value:{validate:(0,u.assertValueType)("string")}}}),s("BlockStatement",{builder:["body","directives"],visitor:["directives","body"],fields:{directives:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Directive"))),default:[]},body:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","Statement"]}),s("BreakStatement",{visitor:["label"],fields:{label:{validate:(0,u.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),s("CallExpression",{visitor:["callee","arguments","typeParameters","typeArguments"],builder:["callee","arguments"],aliases:["Expression"],fields:Object.assign({callee:{validate:(0,u.assertNodeType)("Expression","V8IntrinsicIdentifier")},arguments:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder")))}},{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{}:{optional:{validate:(0,u.assertOneOf)(!0,!1),optional:!0}},{typeArguments:{validate:(0,u.assertNodeType)("TypeParameterInstantiation"),optional:!0},typeParameters:{validate:(0,u.assertNodeType)("TSTypeParameterInstantiation"),optional:!0}})}),s("CatchClause",{visitor:["param","body"],fields:{param:{validate:(0,u.assertNodeType)("Identifier","ArrayPattern","ObjectPattern"),optional:!0},body:{validate:(0,u.assertNodeType)("BlockStatement")}},aliases:["Scopable","BlockParent"]}),s("ConditionalExpression",{visitor:["test","consequent","alternate"],fields:{test:{validate:(0,u.assertNodeType)("Expression")},consequent:{validate:(0,u.assertNodeType)("Expression")},alternate:{validate:(0,u.assertNodeType)("Expression")}},aliases:["Expression","Conditional"]}),s("ContinueStatement",{visitor:["label"],fields:{label:{validate:(0,u.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),s("DebuggerStatement",{aliases:["Statement"]}),s("DoWhileStatement",{visitor:["test","body"],fields:{test:{validate:(0,u.assertNodeType)("Expression")},body:{validate:(0,u.assertNodeType)("Statement")}},aliases:["Statement","BlockParent","Loop","While","Scopable"]}),s("EmptyStatement",{aliases:["Statement"]}),s("ExpressionStatement",{visitor:["expression"],fields:{expression:{validate:(0,u.assertNodeType)("Expression")}},aliases:["Statement","ExpressionWrapper"]}),s("File",{builder:["program","comments","tokens"],visitor:["program"],fields:{program:{validate:(0,u.assertNodeType)("Program")},comments:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.assertEach)((0,u.assertNodeType)("CommentBlock","CommentLine")):Object.assign((()=>{}),{each:{oneOfNodeTypes:["CommentBlock","CommentLine"]}}),optional:!0},tokens:{validate:(0,u.assertEach)(Object.assign((()=>{}),{type:"any"})),optional:!0}}}),s("ForInStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.assertNodeType)("VariableDeclaration","Identifier","MemberExpression","ArrayPattern","ObjectPattern","TSAsExpression","TSTypeAssertion","TSNonNullExpression"):(0,u.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,u.assertNodeType)("Expression")},body:{validate:(0,u.assertNodeType)("Statement")}}}),s("ForStatement",{visitor:["init","test","update","body"],aliases:["Scopable","Statement","For","BlockParent","Loop"],fields:{init:{validate:(0,u.assertNodeType)("VariableDeclaration","Expression"),optional:!0},test:{validate:(0,u.assertNodeType)("Expression"),optional:!0},update:{validate:(0,u.assertNodeType)("Expression"),optional:!0},body:{validate:(0,u.assertNodeType)("Statement")}}});const l={params:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Identifier","Pattern","RestElement")))},generator:{default:!1},async:{default:!1}};t.functionCommon=l;const c={returnType:{validate:(0,u.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},typeParameters:{validate:(0,u.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:!0}};t.functionTypeAnnotationCommon=c;const f=Object.assign({},l,{declare:{validate:(0,u.assertValueType)("boolean"),optional:!0},id:{validate:(0,u.assertNodeType)("Identifier"),optional:!0}});t.functionDeclarationCommon=f,s("FunctionDeclaration",{builder:["id","params","body","generator","async"],visitor:["id","params","body","returnType","typeParameters"],fields:Object.assign({},f,c,{body:{validate:(0,u.assertNodeType)("BlockStatement")},predicate:{validate:(0,u.assertNodeType)("DeclaredPredicate","InferredPredicate"),optional:!0}}),aliases:["Scopable","Function","BlockParent","FunctionParent","Statement","Pureish","Declaration"],validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return()=>{};const e=(0,u.assertNodeType)("Identifier");return function(t,n,i){(0,r.default)("ExportDefaultDeclaration",t)||e(i,"id",i.id)}}()}),s("FunctionExpression",{inherits:"FunctionDeclaration",aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:Object.assign({},l,c,{id:{validate:(0,u.assertNodeType)("Identifier"),optional:!0},body:{validate:(0,u.assertNodeType)("BlockStatement")},predicate:{validate:(0,u.assertNodeType)("DeclaredPredicate","InferredPredicate"),optional:!0}})});const p={typeAnnotation:{validate:(0,u.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator")))}};t.patternLikeCommon=p,s("Identifier",{builder:["name"],visitor:["typeAnnotation","decorators"],aliases:["Expression","PatternLike","LVal","TSEntityName"],fields:Object.assign({},p,{name:{validate:(0,u.chain)((0,u.assertValueType)("string"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&!(0,i.default)(n,!1))throw new TypeError(`"${n}" is not a valid identifier name`)}),{type:"string"}))},optional:{validate:(0,u.assertValueType)("boolean"),optional:!0}}),validate(e,t,n){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const i=/\.(\w+)$/.exec(t);if(!i)return;const[,a]=i,u={computed:!1};if("property"===a){if((0,r.default)("MemberExpression",e,u))return;if((0,r.default)("OptionalMemberExpression",e,u))return}else if("key"===a){if((0,r.default)("Property",e,u))return;if((0,r.default)("Method",e,u))return}else if("exported"===a){if((0,r.default)("ExportSpecifier",e))return}else if("imported"===a){if((0,r.default)("ImportSpecifier",e,{imported:n}))return}else if("meta"===a&&(0,r.default)("MetaProperty",e,{meta:n}))return;if(((0,o.isKeyword)(n.name)||(0,o.isReservedWord)(n.name,!1))&&"this"!==n.name)throw new TypeError(`"${n.name}" is not a valid identifier`)}}),s("IfStatement",{visitor:["test","consequent","alternate"],aliases:["Statement","Conditional"],fields:{test:{validate:(0,u.assertNodeType)("Expression")},consequent:{validate:(0,u.assertNodeType)("Statement")},alternate:{optional:!0,validate:(0,u.assertNodeType)("Statement")}}}),s("LabeledStatement",{visitor:["label","body"],aliases:["Statement"],fields:{label:{validate:(0,u.assertNodeType)("Identifier")},body:{validate:(0,u.assertNodeType)("Statement")}}}),s("StringLiteral",{builder:["value"],fields:{value:{validate:(0,u.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),s("NumericLiteral",{builder:["value"],deprecatedAlias:"NumberLiteral",fields:{value:{validate:(0,u.assertValueType)("number")}},aliases:["Expression","Pureish","Literal","Immutable"]}),s("NullLiteral",{aliases:["Expression","Pureish","Literal","Immutable"]}),s("BooleanLiteral",{builder:["value"],fields:{value:{validate:(0,u.assertValueType)("boolean")}},aliases:["Expression","Pureish","Literal","Immutable"]}),s("RegExpLiteral",{builder:["pattern","flags"],deprecatedAlias:"RegexLiteral",aliases:["Expression","Pureish","Literal"],fields:{pattern:{validate:(0,u.assertValueType)("string")},flags:{validate:(0,u.chain)((0,u.assertValueType)("string"),Object.assign((function(e,t,n){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const r=/[^gimsuy]/.exec(n);if(r)throw new TypeError(`"${r[0]}" is not a valid RegExp flag`)}),{type:"string"})),default:""}}}),s("LogicalExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"],fields:{operator:{validate:(0,u.assertOneOf)(...a.LOGICAL_OPERATORS)},left:{validate:(0,u.assertNodeType)("Expression")},right:{validate:(0,u.assertNodeType)("Expression")}}}),s("MemberExpression",{builder:["object","property","computed",...{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?[]:["optional"]],visitor:["object","property"],aliases:["Expression","LVal"],fields:Object.assign({object:{validate:(0,u.assertNodeType)("Expression")},property:{validate:function(){const e=(0,u.assertNodeType)("Identifier","PrivateName"),t=(0,u.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier","PrivateName"],n}()},computed:{default:!1}},{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{}:{optional:{validate:(0,u.assertOneOf)(!0,!1),optional:!0}})}),s("NewExpression",{inherits:"CallExpression"}),s("Program",{visitor:["directives","body"],builder:["body","directives","sourceType","interpreter"],fields:{sourceFile:{validate:(0,u.assertValueType)("string")},sourceType:{validate:(0,u.assertOneOf)("script","module"),default:"script"},interpreter:{validate:(0,u.assertNodeType)("InterpreterDirective"),default:null,optional:!0},directives:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Directive"))),default:[]},body:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block"]}),s("ObjectExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("ObjectMethod","ObjectProperty","SpreadElement")))}}}),s("ObjectMethod",{builder:["kind","key","params","body","computed","generator","async"],fields:Object.assign({},l,c,{kind:Object.assign({validate:(0,u.assertOneOf)("method","get","set")},{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{}:{default:"method"}),computed:{default:!1},key:{validate:function(){const e=(0,u.assertNodeType)("Identifier","StringLiteral","NumericLiteral"),t=(0,u.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier","StringLiteral","NumericLiteral"],n}()},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},body:{validate:(0,u.assertNodeType)("BlockStatement")}}),visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["UserWhitespacable","Function","Scopable","BlockParent","FunctionParent","Method","ObjectMember"]}),s("ObjectProperty",{builder:["key","value","computed","shorthand",...{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?[]:["decorators"]],fields:{computed:{default:!1},key:{validate:function(){const e=(0,u.assertNodeType)("Identifier","StringLiteral","NumericLiteral","BigIntLiteral","DecimalLiteral","PrivateName"),t=(0,u.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier","StringLiteral","NumericLiteral","BigIntLiteral","DecimalLiteral","PrivateName"],n}()},value:{validate:(0,u.assertNodeType)("Expression","PatternLike")},shorthand:{validate:(0,u.chain)((0,u.assertValueType)("boolean"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&e.computed)throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true")}),{type:"boolean"}),(function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&!(0,r.default)("Identifier",e.key))throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier")})),default:!1},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0}},visitor:["key","value","decorators"],aliases:["UserWhitespacable","Property","ObjectMember"],validate:function(){const e=(0,u.assertNodeType)("Identifier","Pattern","TSAsExpression","TSNonNullExpression","TSTypeAssertion"),t=(0,u.assertNodeType)("Expression");return function(n,i,o){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const a=(0,r.default)("ObjectPattern",n)?e:t;a(o,"value",o.value)}}()}),s("RestElement",{visitor:["argument","typeAnnotation"],builder:["argument"],aliases:["LVal","PatternLike"],deprecatedAlias:"RestProperty",fields:Object.assign({},p,{argument:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.assertNodeType)("Identifier","ArrayPattern","ObjectPattern","MemberExpression","TSAsExpression","TSTypeAssertion","TSNonNullExpression"):(0,u.assertNodeType)("LVal")},optional:{validate:(0,u.assertValueType)("boolean"),optional:!0}}),validate(e,t){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;const n=/(\w+)\[(\d+)\]/.exec(t);if(!n)throw new Error("Internal Babel error: malformed key.");const[,r,i]=n;if(e[r].length>i+1)throw new TypeError(`RestElement must be last element of ${r}`)}}),s("ReturnStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,u.assertNodeType)("Expression"),optional:!0}}}),s("SequenceExpression",{visitor:["expressions"],fields:{expressions:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Expression")))}},aliases:["Expression"]}),s("ParenthesizedExpression",{visitor:["expression"],aliases:["Expression","ExpressionWrapper"],fields:{expression:{validate:(0,u.assertNodeType)("Expression")}}}),s("SwitchCase",{visitor:["test","consequent"],fields:{test:{validate:(0,u.assertNodeType)("Expression"),optional:!0},consequent:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Statement")))}}}),s("SwitchStatement",{visitor:["discriminant","cases"],aliases:["Statement","BlockParent","Scopable"],fields:{discriminant:{validate:(0,u.assertNodeType)("Expression")},cases:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("SwitchCase")))}}}),s("ThisExpression",{aliases:["Expression"]}),s("ThrowStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,u.assertNodeType)("Expression")}}}),s("TryStatement",{visitor:["block","handler","finalizer"],aliases:["Statement"],fields:{block:{validate:(0,u.chain)((0,u.assertNodeType)("BlockStatement"),Object.assign((function(e){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&!e.handler&&!e.finalizer)throw new TypeError("TryStatement expects either a handler or finalizer, or both")}),{oneOfNodeTypes:["BlockStatement"]}))},handler:{optional:!0,validate:(0,u.assertNodeType)("CatchClause")},finalizer:{optional:!0,validate:(0,u.assertNodeType)("BlockStatement")}}}),s("UnaryExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:!0},argument:{validate:(0,u.assertNodeType)("Expression")},operator:{validate:(0,u.assertOneOf)(...a.UNARY_OPERATORS)}},visitor:["argument"],aliases:["UnaryLike","Expression"]}),s("UpdateExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:!1},argument:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.assertNodeType)("Identifier","MemberExpression"):(0,u.assertNodeType)("Expression")},operator:{validate:(0,u.assertOneOf)(...a.UPDATE_OPERATORS)}},visitor:["argument"],aliases:["Expression"]}),s("VariableDeclaration",{builder:["kind","declarations"],visitor:["declarations"],aliases:["Statement","Declaration"],fields:{declare:{validate:(0,u.assertValueType)("boolean"),optional:!0},kind:{validate:(0,u.assertOneOf)("var","let","const")},declarations:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("VariableDeclarator")))}},validate(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&(0,r.default)("ForXStatement",e,{left:n})&&1!==n.declarations.length)throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${e.type}`)}}),s("VariableDeclarator",{visitor:["id","init"],fields:{id:{validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return(0,u.assertNodeType)("LVal");const e=(0,u.assertNodeType)("Identifier","ArrayPattern","ObjectPattern"),t=(0,u.assertNodeType)("Identifier");return function(n,r,i){const o=n.init?e:t;o(n,r,i)}}()},definite:{optional:!0,validate:(0,u.assertValueType)("boolean")},init:{optional:!0,validate:(0,u.assertNodeType)("Expression")}}}),s("WhileStatement",{visitor:["test","body"],aliases:["Statement","BlockParent","Loop","While","Scopable"],fields:{test:{validate:(0,u.assertNodeType)("Expression")},body:{validate:(0,u.assertNodeType)("Statement")}}}),s("WithStatement",{visitor:["object","body"],aliases:["Statement"],fields:{object:{validate:(0,u.assertNodeType)("Expression")},body:{validate:(0,u.assertNodeType)("Statement")}}}),s("AssignmentPattern",{visitor:["left","right","decorators"],builder:["left","right"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},p,{left:{validate:(0,u.assertNodeType)("Identifier","ObjectPattern","ArrayPattern","MemberExpression","TSAsExpression","TSTypeAssertion","TSNonNullExpression")},right:{validate:(0,u.assertNodeType)("Expression")},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0}})}),s("ArrayPattern",{visitor:["elements","typeAnnotation"],builder:["elements"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},p,{elements:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeOrValueType)("null","PatternLike")))},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},optional:{validate:(0,u.assertValueType)("boolean"),optional:!0}})}),s("ArrowFunctionExpression",{builder:["params","body","async"],visitor:["params","body","returnType","typeParameters"],aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:Object.assign({},l,c,{expression:{validate:(0,u.assertValueType)("boolean")},body:{validate:(0,u.assertNodeType)("BlockStatement","Expression")},predicate:{validate:(0,u.assertNodeType)("DeclaredPredicate","InferredPredicate"),optional:!0}})}),s("ClassBody",{visitor:["body"],fields:{body:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("ClassMethod","ClassPrivateMethod","ClassProperty","ClassPrivateProperty","ClassAccessorProperty","TSDeclareMethod","TSIndexSignature","StaticBlock")))}}}),s("ClassExpression",{builder:["id","superClass","body","decorators"],visitor:["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],aliases:["Scopable","Class","Expression"],fields:{id:{validate:(0,u.assertNodeType)("Identifier"),optional:!0},typeParameters:{validate:(0,u.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:!0},body:{validate:(0,u.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,u.assertNodeType)("Expression")},superTypeParameters:{validate:(0,u.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0},implements:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("TSExpressionWithTypeArguments","ClassImplements"))),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},mixins:{validate:(0,u.assertNodeType)("InterfaceExtends"),optional:!0}}}),s("ClassDeclaration",{inherits:"ClassExpression",aliases:["Scopable","Class","Statement","Declaration"],fields:{id:{validate:(0,u.assertNodeType)("Identifier")},typeParameters:{validate:(0,u.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:!0},body:{validate:(0,u.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,u.assertNodeType)("Expression")},superTypeParameters:{validate:(0,u.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0},implements:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("TSExpressionWithTypeArguments","ClassImplements"))),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},mixins:{validate:(0,u.assertNodeType)("InterfaceExtends"),optional:!0},declare:{validate:(0,u.assertValueType)("boolean"),optional:!0},abstract:{validate:(0,u.assertValueType)("boolean"),optional:!0}},validate:function(){const e=(0,u.assertNodeType)("Identifier");return function(t,n,i){({NODE_ENV:"production",BASE_URL:""}).BABEL_TYPES_8_BREAKING&&((0,r.default)("ExportDefaultDeclaration",t)||e(i,"id",i.id))}}()}),s("ExportAllDeclaration",{visitor:["source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{source:{validate:(0,u.assertNodeType)("StringLiteral")},exportKind:(0,u.validateOptional)((0,u.assertOneOf)("type","value")),assertions:{optional:!0,validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("ImportAttribute")))}}}),s("ExportDefaultDeclaration",{visitor:["declaration"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,u.assertNodeType)("FunctionDeclaration","ClassDeclaration","Expression")},exportKind:(0,u.validateOptional)((0,u.assertOneOf)("value"))}}),s("ExportNamedDeclaration",{visitor:["declaration","specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{optional:!0,validate:(0,u.chain)((0,u.assertNodeType)("Declaration"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&e.specifiers.length)throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration")}),{oneOfNodeTypes:["Declaration"]}),(function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&e.source)throw new TypeError("Cannot export a declaration from a source")}))},assertions:{optional:!0,validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("ImportAttribute")))},specifiers:{default:[],validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)(function(){const e=(0,u.assertNodeType)("ExportSpecifier","ExportDefaultSpecifier","ExportNamespaceSpecifier"),t=(0,u.assertNodeType)("ExportSpecifier");return{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?function(n,r,i){const o=n.source?e:t;o(n,r,i)}:e}()))},source:{validate:(0,u.assertNodeType)("StringLiteral"),optional:!0},exportKind:(0,u.validateOptional)((0,u.assertOneOf)("type","value"))}}),s("ExportSpecifier",{visitor:["local","exported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,u.assertNodeType)("Identifier")},exported:{validate:(0,u.assertNodeType)("Identifier","StringLiteral")},exportKind:{validate:(0,u.assertOneOf)("type","value"),optional:!0}}}),s("ForOfStatement",{visitor:["left","right","body"],builder:["left","right","body","await"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:function(){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return(0,u.assertNodeType)("VariableDeclaration","LVal");const e=(0,u.assertNodeType)("VariableDeclaration"),t=(0,u.assertNodeType)("Identifier","MemberExpression","ArrayPattern","ObjectPattern","TSAsExpression","TSTypeAssertion","TSNonNullExpression");return function(n,i,o){(0,r.default)("VariableDeclaration",o)?e(n,i,o):t(n,i,o)}}()},right:{validate:(0,u.assertNodeType)("Expression")},body:{validate:(0,u.assertNodeType)("Statement")},await:{default:!1}}}),s("ImportDeclaration",{visitor:["specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration"],fields:{assertions:{optional:!0,validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("ImportAttribute")))},specifiers:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("ImportSpecifier","ImportDefaultSpecifier","ImportNamespaceSpecifier")))},source:{validate:(0,u.assertNodeType)("StringLiteral")},importKind:{validate:(0,u.assertOneOf)("type","typeof","value"),optional:!0}}}),s("ImportDefaultSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,u.assertNodeType)("Identifier")}}}),s("ImportNamespaceSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,u.assertNodeType)("Identifier")}}}),s("ImportSpecifier",{visitor:["local","imported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,u.assertNodeType)("Identifier")},imported:{validate:(0,u.assertNodeType)("Identifier","StringLiteral")},importKind:{validate:(0,u.assertOneOf)("type","typeof","value"),optional:!0}}}),s("MetaProperty",{visitor:["meta","property"],aliases:["Expression"],fields:{meta:{validate:(0,u.chain)((0,u.assertNodeType)("Identifier"),Object.assign((function(e,t,n){if(!{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING)return;let i;switch(n.name){case"function":i="sent";break;case"new":i="target";break;case"import":i="meta";break}if(!(0,r.default)("Identifier",e.property,{name:i}))throw new TypeError("Unrecognised MetaProperty")}),{oneOfNodeTypes:["Identifier"]}))},property:{validate:(0,u.assertNodeType)("Identifier")}}});const d={abstract:{validate:(0,u.assertValueType)("boolean"),optional:!0},accessibility:{validate:(0,u.assertOneOf)("public","private","protected"),optional:!0},static:{default:!1},override:{default:!1},computed:{default:!1},optional:{validate:(0,u.assertValueType)("boolean"),optional:!0},key:{validate:(0,u.chain)(function(){const e=(0,u.assertNodeType)("Identifier","StringLiteral","NumericLiteral"),t=(0,u.assertNodeType)("Expression");return function(n,r,i){const o=n.computed?t:e;o(n,r,i)}}(),(0,u.assertNodeType)("Identifier","StringLiteral","NumericLiteral","Expression"))}};t.classMethodOrPropertyCommon=d;const y=Object.assign({},l,d,{params:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Identifier","Pattern","RestElement","TSParameterProperty")))},kind:{validate:(0,u.assertOneOf)("get","set","method","constructor"),default:"method"},access:{validate:(0,u.chain)((0,u.assertValueType)("string"),(0,u.assertOneOf)("public","private","protected")),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0}});t.classMethodOrDeclareMethodCommon=y,s("ClassMethod",{aliases:["Function","Scopable","BlockParent","FunctionParent","Method"],builder:["kind","key","params","body","computed","static","generator","async"],visitor:["key","params","body","decorators","returnType","typeParameters"],fields:Object.assign({},y,c,{body:{validate:(0,u.assertNodeType)("BlockStatement")}})}),s("ObjectPattern",{visitor:["properties","typeAnnotation","decorators"],builder:["properties"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},p,{properties:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("RestElement","ObjectProperty")))}})}),s("SpreadElement",{visitor:["argument"],aliases:["UnaryLike"],deprecatedAlias:"SpreadProperty",fields:{argument:{validate:(0,u.assertNodeType)("Expression")}}}),s("Super",{aliases:["Expression"]}),s("TaggedTemplateExpression",{visitor:["tag","quasi","typeParameters"],builder:["tag","quasi"],aliases:["Expression"],fields:{tag:{validate:(0,u.assertNodeType)("Expression")},quasi:{validate:(0,u.assertNodeType)("TemplateLiteral")},typeParameters:{validate:(0,u.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0}}}),s("TemplateElement",{builder:["value","tail"],fields:{value:{validate:(0,u.assertShape)({raw:{validate:(0,u.assertValueType)("string")},cooked:{validate:(0,u.assertValueType)("string"),optional:!0}})},tail:{default:!1}}}),s("TemplateLiteral",{visitor:["quasis","expressions"],aliases:["Expression","Literal"],fields:{quasis:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("TemplateElement")))},expressions:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Expression","TSType")),(function(e,t,n){if(e.quasis.length!==n.length+1)throw new TypeError(`Number of ${e.type} quasis should be exactly one more than the number of expressions.\nExpected ${n.length+1} quasis but got ${e.quasis.length}`)}))}}}),s("YieldExpression",{builder:["argument","delegate"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{delegate:{validate:(0,u.chain)((0,u.assertValueType)("boolean"),Object.assign((function(e,t,n){if({NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&n&&!e.argument)throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument")}),{type:"boolean"})),default:!1},argument:{optional:!0,validate:(0,u.assertNodeType)("Expression")}}}),s("AwaitExpression",{builder:["argument"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{argument:{validate:(0,u.assertNodeType)("Expression")}}}),s("Import",{aliases:["Expression"]}),s("BigIntLiteral",{builder:["value"],fields:{value:{validate:(0,u.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),s("ExportNamespaceSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,u.assertNodeType)("Identifier")}}}),s("OptionalMemberExpression",{builder:["object","property","computed","optional"],visitor:["object","property"],aliases:["Expression"],fields:{object:{validate:(0,u.assertNodeType)("Expression")},property:{validate:function(){const e=(0,u.assertNodeType)("Identifier"),t=(0,u.assertNodeType)("Expression"),n=function(n,r,i){const o=n.computed?t:e;o(n,r,i)};return n.oneOfNodeTypes=["Expression","Identifier"],n}()},computed:{default:!1},optional:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.chain)((0,u.assertValueType)("boolean"),(0,u.assertOptionalChainStart)()):(0,u.assertValueType)("boolean")}}}),s("OptionalCallExpression",{visitor:["callee","arguments","typeParameters","typeArguments"],builder:["callee","arguments","optional"],aliases:["Expression"],fields:{callee:{validate:(0,u.assertNodeType)("Expression")},arguments:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder")))},optional:{validate:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?(0,u.chain)((0,u.assertValueType)("boolean"),(0,u.assertOptionalChainStart)()):(0,u.assertValueType)("boolean")},typeArguments:{validate:(0,u.assertNodeType)("TypeParameterInstantiation"),optional:!0},typeParameters:{validate:(0,u.assertNodeType)("TSTypeParameterInstantiation"),optional:!0}}}),s("ClassProperty",{visitor:["key","value","typeAnnotation","decorators"],builder:["key","value","typeAnnotation","decorators","computed","static"],aliases:["Property"],fields:Object.assign({},d,{value:{validate:(0,u.assertNodeType)("Expression"),optional:!0},definite:{validate:(0,u.assertValueType)("boolean"),optional:!0},typeAnnotation:{validate:(0,u.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},readonly:{validate:(0,u.assertValueType)("boolean"),optional:!0},declare:{validate:(0,u.assertValueType)("boolean"),optional:!0},variance:{validate:(0,u.assertNodeType)("Variance"),optional:!0}})}),s("ClassAccessorProperty",{visitor:["key","value","typeAnnotation","decorators"],builder:["key","value","typeAnnotation","decorators","computed","static"],aliases:["Property","Accessor"],fields:Object.assign({},d,{key:{validate:(0,u.chain)(function(){const e=(0,u.assertNodeType)("Identifier","StringLiteral","NumericLiteral","PrivateName"),t=(0,u.assertNodeType)("Expression");return function(n,r,i){const o=n.computed?t:e;o(n,r,i)}}(),(0,u.assertNodeType)("Identifier","StringLiteral","NumericLiteral","Expression","PrivateName"))},value:{validate:(0,u.assertNodeType)("Expression"),optional:!0},definite:{validate:(0,u.assertValueType)("boolean"),optional:!0},typeAnnotation:{validate:(0,u.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},readonly:{validate:(0,u.assertValueType)("boolean"),optional:!0},declare:{validate:(0,u.assertValueType)("boolean"),optional:!0},variance:{validate:(0,u.assertNodeType)("Variance"),optional:!0}})}),s("ClassPrivateProperty",{visitor:["key","value","decorators","typeAnnotation"],builder:["key","value","decorators","static"],aliases:["Property","Private"],fields:{key:{validate:(0,u.assertNodeType)("PrivateName")},value:{validate:(0,u.assertNodeType)("Expression"),optional:!0},typeAnnotation:{validate:(0,u.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:!0},decorators:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Decorator"))),optional:!0},readonly:{validate:(0,u.assertValueType)("boolean"),optional:!0},definite:{validate:(0,u.assertValueType)("boolean"),optional:!0},variance:{validate:(0,u.assertNodeType)("Variance"),optional:!0}}}),s("ClassPrivateMethod",{builder:["kind","key","params","body","static"],visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["Function","Scopable","BlockParent","FunctionParent","Method","Private"],fields:Object.assign({},y,c,{key:{validate:(0,u.assertNodeType)("PrivateName")},body:{validate:(0,u.assertNodeType)("BlockStatement")}})}),s("PrivateName",{visitor:["id"],aliases:["Private"],fields:{id:{validate:(0,u.assertNodeType)("Identifier")}}}),s("StaticBlock",{visitor:["body"],fields:{body:{validate:(0,u.chain)((0,u.assertValueType)("array"),(0,u.assertEach)((0,u.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","FunctionParent"]})},91985:function(e,t,n){"use strict";var r=n(47376);(0,r.default)("ArgumentPlaceholder",{}),(0,r.default)("BindExpression",{visitor:["object","callee"],aliases:["Expression"],fields:{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING?{object:{validate:(0,r.assertNodeType)("Expression")},callee:{validate:(0,r.assertNodeType)("Expression")}}:{object:{validate:Object.assign((()=>{}),{oneOfNodeTypes:["Expression"]})},callee:{validate:Object.assign((()=>{}),{oneOfNodeTypes:["Expression"]})}}}),(0,r.default)("ImportAttribute",{visitor:["key","value"],fields:{key:{validate:(0,r.assertNodeType)("Identifier","StringLiteral")},value:{validate:(0,r.assertNodeType)("StringLiteral")}}}),(0,r.default)("Decorator",{visitor:["expression"],fields:{expression:{validate:(0,r.assertNodeType)("Expression")}}}),(0,r.default)("DoExpression",{visitor:["body"],builder:["body","async"],aliases:["Expression"],fields:{body:{validate:(0,r.assertNodeType)("BlockStatement")},async:{validate:(0,r.assertValueType)("boolean"),default:!1}}}),(0,r.default)("ExportDefaultSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,r.assertNodeType)("Identifier")}}}),(0,r.default)("RecordExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("ObjectProperty","SpreadElement")))}}}),(0,r.default)("TupleExpression",{fields:{elements:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("Expression","SpreadElement"))),default:[]}},visitor:["elements"],aliases:["Expression"]}),(0,r.default)("DecimalLiteral",{builder:["value"],fields:{value:{validate:(0,r.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,r.default)("ModuleExpression",{visitor:["body"],fields:{body:{validate:(0,r.assertNodeType)("Program")}},aliases:["Expression"]}),(0,r.default)("TopicReference",{aliases:["Expression"]}),(0,r.default)("PipelineTopicExpression",{builder:["expression"],visitor:["expression"],fields:{expression:{validate:(0,r.assertNodeType)("Expression")}},aliases:["Expression"]}),(0,r.default)("PipelineBareFunction",{builder:["callee"],visitor:["callee"],fields:{callee:{validate:(0,r.assertNodeType)("Expression")}},aliases:["Expression"]}),(0,r.default)("PipelinePrimaryTopicReference",{aliases:["Expression"]})},37460:function(e,t,n){"use strict";var r=n(47376);const i=(0,r.defineAliasedType)("Flow"),o=(e,t="TypeParameterDeclaration")=>{i(e,{builder:["id","typeParameters","extends","body"],visitor:["id","typeParameters","extends","mixins","implements","body"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)(t),extends:(0,r.validateOptional)((0,r.arrayOfType)("InterfaceExtends")),mixins:(0,r.validateOptional)((0,r.arrayOfType)("InterfaceExtends")),implements:(0,r.validateOptional)((0,r.arrayOfType)("ClassImplements")),body:(0,r.validateType)("ObjectTypeAnnotation")}})};i("AnyTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ArrayTypeAnnotation",{visitor:["elementType"],aliases:["FlowType"],fields:{elementType:(0,r.validateType)("FlowType")}}),i("BooleanTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("BooleanLiteralTypeAnnotation",{builder:["value"],aliases:["FlowType"],fields:{value:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("NullLiteralTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ClassImplements",{visitor:["id","typeParameters"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterInstantiation")}}),o("DeclareClass"),i("DeclareFunction",{visitor:["id"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),predicate:(0,r.validateOptionalType)("DeclaredPredicate")}}),o("DeclareInterface"),i("DeclareModule",{builder:["id","body","kind"],visitor:["id","body"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)(["Identifier","StringLiteral"]),body:(0,r.validateType)("BlockStatement"),kind:(0,r.validateOptional)((0,r.assertOneOf)("CommonJS","ES"))}}),i("DeclareModuleExports",{visitor:["typeAnnotation"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{typeAnnotation:(0,r.validateType)("TypeAnnotation")}}),i("DeclareTypeAlias",{visitor:["id","typeParameters","right"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),right:(0,r.validateType)("FlowType")}}),i("DeclareOpaqueType",{visitor:["id","typeParameters","supertype"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),supertype:(0,r.validateOptionalType)("FlowType"),impltype:(0,r.validateOptionalType)("FlowType")}}),i("DeclareVariable",{visitor:["id"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier")}}),i("DeclareExportDeclaration",{visitor:["declaration","specifiers","source"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{declaration:(0,r.validateOptionalType)("Flow"),specifiers:(0,r.validateOptional)((0,r.arrayOfType)(["ExportSpecifier","ExportNamespaceSpecifier"])),source:(0,r.validateOptionalType)("StringLiteral"),default:(0,r.validateOptional)((0,r.assertValueType)("boolean"))}}),i("DeclareExportAllDeclaration",{visitor:["source"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{source:(0,r.validateType)("StringLiteral"),exportKind:(0,r.validateOptional)((0,r.assertOneOf)("type","value"))}}),i("DeclaredPredicate",{visitor:["value"],aliases:["FlowPredicate"],fields:{value:(0,r.validateType)("Flow")}}),i("ExistsTypeAnnotation",{aliases:["FlowType"]}),i("FunctionTypeAnnotation",{visitor:["typeParameters","params","rest","returnType"],aliases:["FlowType"],fields:{typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),params:(0,r.validate)((0,r.arrayOfType)("FunctionTypeParam")),rest:(0,r.validateOptionalType)("FunctionTypeParam"),this:(0,r.validateOptionalType)("FunctionTypeParam"),returnType:(0,r.validateType)("FlowType")}}),i("FunctionTypeParam",{visitor:["name","typeAnnotation"],fields:{name:(0,r.validateOptionalType)("Identifier"),typeAnnotation:(0,r.validateType)("FlowType"),optional:(0,r.validateOptional)((0,r.assertValueType)("boolean"))}}),i("GenericTypeAnnotation",{visitor:["id","typeParameters"],aliases:["FlowType"],fields:{id:(0,r.validateType)(["Identifier","QualifiedTypeIdentifier"]),typeParameters:(0,r.validateOptionalType)("TypeParameterInstantiation")}}),i("InferredPredicate",{aliases:["FlowPredicate"]}),i("InterfaceExtends",{visitor:["id","typeParameters"],fields:{id:(0,r.validateType)(["Identifier","QualifiedTypeIdentifier"]),typeParameters:(0,r.validateOptionalType)("TypeParameterInstantiation")}}),o("InterfaceDeclaration"),i("InterfaceTypeAnnotation",{visitor:["extends","body"],aliases:["FlowType"],fields:{extends:(0,r.validateOptional)((0,r.arrayOfType)("InterfaceExtends")),body:(0,r.validateType)("ObjectTypeAnnotation")}}),i("IntersectionTypeAnnotation",{visitor:["types"],aliases:["FlowType"],fields:{types:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("MixedTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("EmptyTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("NullableTypeAnnotation",{visitor:["typeAnnotation"],aliases:["FlowType"],fields:{typeAnnotation:(0,r.validateType)("FlowType")}}),i("NumberLiteralTypeAnnotation",{builder:["value"],aliases:["FlowType"],fields:{value:(0,r.validate)((0,r.assertValueType)("number"))}}),i("NumberTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ObjectTypeAnnotation",{visitor:["properties","indexers","callProperties","internalSlots"],aliases:["FlowType"],builder:["properties","indexers","callProperties","internalSlots","exact"],fields:{properties:(0,r.validate)((0,r.arrayOfType)(["ObjectTypeProperty","ObjectTypeSpreadProperty"])),indexers:{validate:(0,r.arrayOfType)("ObjectTypeIndexer"),optional:!0,default:[]},callProperties:{validate:(0,r.arrayOfType)("ObjectTypeCallProperty"),optional:!0,default:[]},internalSlots:{validate:(0,r.arrayOfType)("ObjectTypeInternalSlot"),optional:!0,default:[]},exact:{validate:(0,r.assertValueType)("boolean"),default:!1},inexact:(0,r.validateOptional)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeInternalSlot",{visitor:["id","value","optional","static","method"],aliases:["UserWhitespacable"],fields:{id:(0,r.validateType)("Identifier"),value:(0,r.validateType)("FlowType"),optional:(0,r.validate)((0,r.assertValueType)("boolean")),static:(0,r.validate)((0,r.assertValueType)("boolean")),method:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeCallProperty",{visitor:["value"],aliases:["UserWhitespacable"],fields:{value:(0,r.validateType)("FlowType"),static:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeIndexer",{visitor:["id","key","value","variance"],aliases:["UserWhitespacable"],fields:{id:(0,r.validateOptionalType)("Identifier"),key:(0,r.validateType)("FlowType"),value:(0,r.validateType)("FlowType"),static:(0,r.validate)((0,r.assertValueType)("boolean")),variance:(0,r.validateOptionalType)("Variance")}}),i("ObjectTypeProperty",{visitor:["key","value","variance"],aliases:["UserWhitespacable"],fields:{key:(0,r.validateType)(["Identifier","StringLiteral"]),value:(0,r.validateType)("FlowType"),kind:(0,r.validate)((0,r.assertOneOf)("init","get","set")),static:(0,r.validate)((0,r.assertValueType)("boolean")),proto:(0,r.validate)((0,r.assertValueType)("boolean")),optional:(0,r.validate)((0,r.assertValueType)("boolean")),variance:(0,r.validateOptionalType)("Variance"),method:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("ObjectTypeSpreadProperty",{visitor:["argument"],aliases:["UserWhitespacable"],fields:{argument:(0,r.validateType)("FlowType")}}),i("OpaqueType",{visitor:["id","typeParameters","supertype","impltype"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),supertype:(0,r.validateOptionalType)("FlowType"),impltype:(0,r.validateType)("FlowType")}}),i("QualifiedTypeIdentifier",{visitor:["id","qualification"],fields:{id:(0,r.validateType)("Identifier"),qualification:(0,r.validateType)(["Identifier","QualifiedTypeIdentifier"])}}),i("StringLiteralTypeAnnotation",{builder:["value"],aliases:["FlowType"],fields:{value:(0,r.validate)((0,r.assertValueType)("string"))}}),i("StringTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("SymbolTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("ThisTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("TupleTypeAnnotation",{visitor:["types"],aliases:["FlowType"],fields:{types:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("TypeofTypeAnnotation",{visitor:["argument"],aliases:["FlowType"],fields:{argument:(0,r.validateType)("FlowType")}}),i("TypeAlias",{visitor:["id","typeParameters","right"],aliases:["FlowDeclaration","Statement","Declaration"],fields:{id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TypeParameterDeclaration"),right:(0,r.validateType)("FlowType")}}),i("TypeAnnotation",{visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("FlowType")}}),i("TypeCastExpression",{visitor:["expression","typeAnnotation"],aliases:["ExpressionWrapper","Expression"],fields:{expression:(0,r.validateType)("Expression"),typeAnnotation:(0,r.validateType)("TypeAnnotation")}}),i("TypeParameter",{visitor:["bound","default","variance"],fields:{name:(0,r.validate)((0,r.assertValueType)("string")),bound:(0,r.validateOptionalType)("TypeAnnotation"),default:(0,r.validateOptionalType)("FlowType"),variance:(0,r.validateOptionalType)("Variance")}}),i("TypeParameterDeclaration",{visitor:["params"],fields:{params:(0,r.validate)((0,r.arrayOfType)("TypeParameter"))}}),i("TypeParameterInstantiation",{visitor:["params"],fields:{params:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("UnionTypeAnnotation",{visitor:["types"],aliases:["FlowType"],fields:{types:(0,r.validate)((0,r.arrayOfType)("FlowType"))}}),i("Variance",{builder:["kind"],fields:{kind:(0,r.validate)((0,r.assertOneOf)("minus","plus"))}}),i("VoidTypeAnnotation",{aliases:["FlowType","FlowBaseAnnotation"]}),i("EnumDeclaration",{aliases:["Statement","Declaration"],visitor:["id","body"],fields:{id:(0,r.validateType)("Identifier"),body:(0,r.validateType)(["EnumBooleanBody","EnumNumberBody","EnumStringBody","EnumSymbolBody"])}}),i("EnumBooleanBody",{aliases:["EnumBody"],visitor:["members"],fields:{explicitType:(0,r.validate)((0,r.assertValueType)("boolean")),members:(0,r.validateArrayOfType)("EnumBooleanMember"),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumNumberBody",{aliases:["EnumBody"],visitor:["members"],fields:{explicitType:(0,r.validate)((0,r.assertValueType)("boolean")),members:(0,r.validateArrayOfType)("EnumNumberMember"),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumStringBody",{aliases:["EnumBody"],visitor:["members"],fields:{explicitType:(0,r.validate)((0,r.assertValueType)("boolean")),members:(0,r.validateArrayOfType)(["EnumStringMember","EnumDefaultedMember"]),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumSymbolBody",{aliases:["EnumBody"],visitor:["members"],fields:{members:(0,r.validateArrayOfType)("EnumDefaultedMember"),hasUnknownMembers:(0,r.validate)((0,r.assertValueType)("boolean"))}}),i("EnumBooleanMember",{aliases:["EnumMember"],visitor:["id"],fields:{id:(0,r.validateType)("Identifier"),init:(0,r.validateType)("BooleanLiteral")}}),i("EnumNumberMember",{aliases:["EnumMember"],visitor:["id","init"],fields:{id:(0,r.validateType)("Identifier"),init:(0,r.validateType)("NumericLiteral")}}),i("EnumStringMember",{aliases:["EnumMember"],visitor:["id","init"],fields:{id:(0,r.validateType)("Identifier"),init:(0,r.validateType)("StringLiteral")}}),i("EnumDefaultedMember",{aliases:["EnumMember"],visitor:["id"],fields:{id:(0,r.validateType)("Identifier")}}),i("IndexedAccessType",{visitor:["objectType","indexType"],aliases:["FlowType"],fields:{objectType:(0,r.validateType)("FlowType"),indexType:(0,r.validateType)("FlowType")}}),i("OptionalIndexedAccessType",{visitor:["objectType","indexType"],aliases:["FlowType"],fields:{objectType:(0,r.validateType)("FlowType"),indexType:(0,r.validateType)("FlowType"),optional:(0,r.validate)((0,r.assertValueType)("boolean"))}})},92321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ALIAS_KEYS",{enumerable:!0,get:function(){return i.ALIAS_KEYS}}),Object.defineProperty(t,"BUILDER_KEYS",{enumerable:!0,get:function(){return i.BUILDER_KEYS}}),Object.defineProperty(t,"DEPRECATED_KEYS",{enumerable:!0,get:function(){return i.DEPRECATED_KEYS}}),Object.defineProperty(t,"FLIPPED_ALIAS_KEYS",{enumerable:!0,get:function(){return i.FLIPPED_ALIAS_KEYS}}),Object.defineProperty(t,"NODE_FIELDS",{enumerable:!0,get:function(){return i.NODE_FIELDS}}),Object.defineProperty(t,"NODE_PARENT_VALIDATIONS",{enumerable:!0,get:function(){return i.NODE_PARENT_VALIDATIONS}}),Object.defineProperty(t,"PLACEHOLDERS",{enumerable:!0,get:function(){return o.PLACEHOLDERS}}),Object.defineProperty(t,"PLACEHOLDERS_ALIAS",{enumerable:!0,get:function(){return o.PLACEHOLDERS_ALIAS}}),Object.defineProperty(t,"PLACEHOLDERS_FLIPPED_ALIAS",{enumerable:!0,get:function(){return o.PLACEHOLDERS_FLIPPED_ALIAS}}),t.TYPES=void 0,Object.defineProperty(t,"VISITOR_KEYS",{enumerable:!0,get:function(){return i.VISITOR_KEYS}});var r=n(9699);n(63442),n(37460),n(75236),n(70353),n(91985),n(84839);var i=n(47376),o=n(45606);r(i.VISITOR_KEYS),r(i.ALIAS_KEYS),r(i.FLIPPED_ALIAS_KEYS),r(i.NODE_FIELDS),r(i.BUILDER_KEYS),r(i.DEPRECATED_KEYS),r(o.PLACEHOLDERS_ALIAS),r(o.PLACEHOLDERS_FLIPPED_ALIAS);const a=[].concat(Object.keys(i.VISITOR_KEYS),Object.keys(i.FLIPPED_ALIAS_KEYS),Object.keys(i.DEPRECATED_KEYS));t.TYPES=a},75236:function(e,t,n){"use strict";var r=n(47376);const i=(0,r.defineAliasedType)("JSX");i("JSXAttribute",{visitor:["name","value"],aliases:["Immutable"],fields:{name:{validate:(0,r.assertNodeType)("JSXIdentifier","JSXNamespacedName")},value:{optional:!0,validate:(0,r.assertNodeType)("JSXElement","JSXFragment","StringLiteral","JSXExpressionContainer")}}}),i("JSXClosingElement",{visitor:["name"],aliases:["Immutable"],fields:{name:{validate:(0,r.assertNodeType)("JSXIdentifier","JSXMemberExpression","JSXNamespacedName")}}}),i("JSXElement",{builder:["openingElement","closingElement","children","selfClosing"],visitor:["openingElement","children","closingElement"],aliases:["Immutable","Expression"],fields:Object.assign({openingElement:{validate:(0,r.assertNodeType)("JSXOpeningElement")},closingElement:{optional:!0,validate:(0,r.assertNodeType)("JSXClosingElement")},children:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement","JSXFragment")))}},{selfClosing:{validate:(0,r.assertValueType)("boolean"),optional:!0}})}),i("JSXEmptyExpression",{}),i("JSXExpressionContainer",{visitor:["expression"],aliases:["Immutable"],fields:{expression:{validate:(0,r.assertNodeType)("Expression","JSXEmptyExpression")}}}),i("JSXSpreadChild",{visitor:["expression"],aliases:["Immutable"],fields:{expression:{validate:(0,r.assertNodeType)("Expression")}}}),i("JSXIdentifier",{builder:["name"],fields:{name:{validate:(0,r.assertValueType)("string")}}}),i("JSXMemberExpression",{visitor:["object","property"],fields:{object:{validate:(0,r.assertNodeType)("JSXMemberExpression","JSXIdentifier")},property:{validate:(0,r.assertNodeType)("JSXIdentifier")}}}),i("JSXNamespacedName",{visitor:["namespace","name"],fields:{namespace:{validate:(0,r.assertNodeType)("JSXIdentifier")},name:{validate:(0,r.assertNodeType)("JSXIdentifier")}}}),i("JSXOpeningElement",{builder:["name","attributes","selfClosing"],visitor:["name","attributes"],aliases:["Immutable"],fields:{name:{validate:(0,r.assertNodeType)("JSXIdentifier","JSXMemberExpression","JSXNamespacedName")},selfClosing:{default:!1},attributes:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("JSXAttribute","JSXSpreadAttribute")))},typeParameters:{validate:(0,r.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:!0}}}),i("JSXSpreadAttribute",{visitor:["argument"],fields:{argument:{validate:(0,r.assertNodeType)("Expression")}}}),i("JSXText",{aliases:["Immutable"],builder:["value"],fields:{value:{validate:(0,r.assertValueType)("string")}}}),i("JSXFragment",{builder:["openingFragment","closingFragment","children"],visitor:["openingFragment","children","closingFragment"],aliases:["Immutable","Expression"],fields:{openingFragment:{validate:(0,r.assertNodeType)("JSXOpeningFragment")},closingFragment:{validate:(0,r.assertNodeType)("JSXClosingFragment")},children:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement","JSXFragment")))}}}),i("JSXOpeningFragment",{aliases:["Immutable"]}),i("JSXClosingFragment",{aliases:["Immutable"]})},70353:function(e,t,n){"use strict";var r=n(47376),i=n(45606);const o=(0,r.defineAliasedType)("Miscellaneous");o("Noop",{visitor:[]}),o("Placeholder",{visitor:[],builder:["expectedNode","name"],fields:{name:{validate:(0,r.assertNodeType)("Identifier")},expectedNode:{validate:(0,r.assertOneOf)(...i.PLACEHOLDERS)}}}),o("V8IntrinsicIdentifier",{builder:["name"],fields:{name:{validate:(0,r.assertValueType)("string")}}})},45606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PLACEHOLDERS_FLIPPED_ALIAS=t.PLACEHOLDERS_ALIAS=t.PLACEHOLDERS=void 0;var r=n(47376);const i=["Identifier","StringLiteral","Expression","Statement","Declaration","BlockStatement","ClassBody","Pattern"];t.PLACEHOLDERS=i;const o={Declaration:["Statement"],Pattern:["PatternLike","LVal"]};t.PLACEHOLDERS_ALIAS=o;for(const u of i){const e=r.ALIAS_KEYS[u];null!=e&&e.length&&(o[u]=e)}const a={};t.PLACEHOLDERS_FLIPPED_ALIAS=a,Object.keys(o).forEach((e=>{o[e].forEach((t=>{Object.hasOwnProperty.call(a,t)||(a[t]=[]),a[t].push(e)}))}))},84839:function(e,t,n){"use strict";var r=n(47376),i=n(63442),o=n(90053);const a=(0,r.defineAliasedType)("TypeScript"),u=(0,r.assertValueType)("boolean"),s={returnType:{validate:(0,r.assertNodeType)("TSTypeAnnotation","Noop"),optional:!0},typeParameters:{validate:(0,r.assertNodeType)("TSTypeParameterDeclaration","Noop"),optional:!0}};a("TSParameterProperty",{aliases:["LVal"],visitor:["parameter"],fields:{accessibility:{validate:(0,r.assertOneOf)("public","private","protected"),optional:!0},readonly:{validate:(0,r.assertValueType)("boolean"),optional:!0},parameter:{validate:(0,r.assertNodeType)("Identifier","AssignmentPattern")},override:{validate:(0,r.assertValueType)("boolean"),optional:!0},decorators:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("Decorator"))),optional:!0}}}),a("TSDeclareFunction",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","params","returnType"],fields:Object.assign({},i.functionDeclarationCommon,s)}),a("TSDeclareMethod",{visitor:["decorators","key","typeParameters","params","returnType"],fields:Object.assign({},i.classMethodOrDeclareMethodCommon,s)}),a("TSQualifiedName",{aliases:["TSEntityName"],visitor:["left","right"],fields:{left:(0,r.validateType)("TSEntityName"),right:(0,r.validateType)("Identifier")}});const l={typeParameters:(0,r.validateOptionalType)("TSTypeParameterDeclaration"),["parameters"]:(0,r.validateArrayOfType)(["Identifier","RestElement"]),["typeAnnotation"]:(0,r.validateOptionalType)("TSTypeAnnotation")},c={aliases:["TSTypeElement"],visitor:["typeParameters","parameters","typeAnnotation"],fields:l};a("TSCallSignatureDeclaration",c),a("TSConstructSignatureDeclaration",c);const f={key:(0,r.validateType)("Expression"),computed:(0,r.validate)(u),optional:(0,r.validateOptional)(u)};a("TSPropertySignature",{aliases:["TSTypeElement"],visitor:["key","typeAnnotation","initializer"],fields:Object.assign({},f,{readonly:(0,r.validateOptional)(u),typeAnnotation:(0,r.validateOptionalType)("TSTypeAnnotation"),initializer:(0,r.validateOptionalType)("Expression"),kind:{validate:(0,r.assertOneOf)("get","set")}})}),a("TSMethodSignature",{aliases:["TSTypeElement"],visitor:["key","typeParameters","parameters","typeAnnotation"],fields:Object.assign({},l,f,{kind:{validate:(0,r.assertOneOf)("method","get","set")}})}),a("TSIndexSignature",{aliases:["TSTypeElement"],visitor:["parameters","typeAnnotation"],fields:{readonly:(0,r.validateOptional)(u),static:(0,r.validateOptional)(u),parameters:(0,r.validateArrayOfType)("Identifier"),typeAnnotation:(0,r.validateOptionalType)("TSTypeAnnotation")}});const p=["TSAnyKeyword","TSBooleanKeyword","TSBigIntKeyword","TSIntrinsicKeyword","TSNeverKeyword","TSNullKeyword","TSNumberKeyword","TSObjectKeyword","TSStringKeyword","TSSymbolKeyword","TSUndefinedKeyword","TSUnknownKeyword","TSVoidKeyword"];for(const m of p)a(m,{aliases:["TSType","TSBaseType"],visitor:[],fields:{}});a("TSThisType",{aliases:["TSType","TSBaseType"],visitor:[],fields:{}});const d={aliases:["TSType"],visitor:["typeParameters","parameters","typeAnnotation"]};a("TSFunctionType",Object.assign({},d,{fields:l})),a("TSConstructorType",Object.assign({},d,{fields:Object.assign({},l,{abstract:(0,r.validateOptional)(u)})})),a("TSTypeReference",{aliases:["TSType"],visitor:["typeName","typeParameters"],fields:{typeName:(0,r.validateType)("TSEntityName"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSTypePredicate",{aliases:["TSType"],visitor:["parameterName","typeAnnotation"],builder:["parameterName","typeAnnotation","asserts"],fields:{parameterName:(0,r.validateType)(["Identifier","TSThisType"]),typeAnnotation:(0,r.validateOptionalType)("TSTypeAnnotation"),asserts:(0,r.validateOptional)(u)}}),a("TSTypeQuery",{aliases:["TSType"],visitor:["exprName","typeParameters"],fields:{exprName:(0,r.validateType)(["TSEntityName","TSImportType"]),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSTypeLiteral",{aliases:["TSType"],visitor:["members"],fields:{members:(0,r.validateArrayOfType)("TSTypeElement")}}),a("TSArrayType",{aliases:["TSType"],visitor:["elementType"],fields:{elementType:(0,r.validateType)("TSType")}}),a("TSTupleType",{aliases:["TSType"],visitor:["elementTypes"],fields:{elementTypes:(0,r.validateArrayOfType)(["TSType","TSNamedTupleMember"])}}),a("TSOptionalType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("TSType")}}),a("TSRestType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("TSType")}}),a("TSNamedTupleMember",{visitor:["label","elementType"],builder:["label","elementType","optional"],fields:{label:(0,r.validateType)("Identifier"),optional:{validate:u,default:!1},elementType:(0,r.validateType)("TSType")}});const y={aliases:["TSType"],visitor:["types"],fields:{types:(0,r.validateArrayOfType)("TSType")}};a("TSUnionType",y),a("TSIntersectionType",y),a("TSConditionalType",{aliases:["TSType"],visitor:["checkType","extendsType","trueType","falseType"],fields:{checkType:(0,r.validateType)("TSType"),extendsType:(0,r.validateType)("TSType"),trueType:(0,r.validateType)("TSType"),falseType:(0,r.validateType)("TSType")}}),a("TSInferType",{aliases:["TSType"],visitor:["typeParameter"],fields:{typeParameter:(0,r.validateType)("TSTypeParameter")}}),a("TSParenthesizedType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,r.validateType)("TSType")}}),a("TSTypeOperator",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{operator:(0,r.validate)((0,r.assertValueType)("string")),typeAnnotation:(0,r.validateType)("TSType")}}),a("TSIndexedAccessType",{aliases:["TSType"],visitor:["objectType","indexType"],fields:{objectType:(0,r.validateType)("TSType"),indexType:(0,r.validateType)("TSType")}}),a("TSMappedType",{aliases:["TSType"],visitor:["typeParameter","typeAnnotation","nameType"],fields:{readonly:(0,r.validateOptional)(u),typeParameter:(0,r.validateType)("TSTypeParameter"),optional:(0,r.validateOptional)(u),typeAnnotation:(0,r.validateOptionalType)("TSType"),nameType:(0,r.validateOptionalType)("TSType")}}),a("TSLiteralType",{aliases:["TSType","TSBaseType"],visitor:["literal"],fields:{literal:{validate:function(){const e=(0,r.assertNodeType)("NumericLiteral","BigIntLiteral"),t=(0,r.assertOneOf)("-"),n=(0,r.assertNodeType)("NumericLiteral","StringLiteral","BooleanLiteral","BigIntLiteral");function i(r,i,a){(0,o.default)("UnaryExpression",a)?(t(a,"operator",a.operator),e(a,"argument",a.argument)):n(r,i,a)}return i.oneOfNodeTypes=["NumericLiteral","StringLiteral","BooleanLiteral","BigIntLiteral","UnaryExpression"],i}()}}}),a("TSExpressionWithTypeArguments",{aliases:["TSType"],visitor:["expression","typeParameters"],fields:{expression:(0,r.validateType)("TSEntityName"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSInterfaceDeclaration",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","extends","body"],fields:{declare:(0,r.validateOptional)(u),id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterDeclaration"),extends:(0,r.validateOptional)((0,r.arrayOfType)("TSExpressionWithTypeArguments")),body:(0,r.validateType)("TSInterfaceBody")}}),a("TSInterfaceBody",{visitor:["body"],fields:{body:(0,r.validateArrayOfType)("TSTypeElement")}}),a("TSTypeAliasDeclaration",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","typeAnnotation"],fields:{declare:(0,r.validateOptional)(u),id:(0,r.validateType)("Identifier"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterDeclaration"),typeAnnotation:(0,r.validateType)("TSType")}}),a("TSInstantiationExpression",{aliases:["Expression"],visitor:["expression","typeParameters"],fields:{expression:(0,r.validateType)("Expression"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSAsExpression",{aliases:["Expression","LVal","PatternLike"],visitor:["expression","typeAnnotation"],fields:{expression:(0,r.validateType)("Expression"),typeAnnotation:(0,r.validateType)("TSType")}}),a("TSTypeAssertion",{aliases:["Expression","LVal","PatternLike"],visitor:["typeAnnotation","expression"],fields:{typeAnnotation:(0,r.validateType)("TSType"),expression:(0,r.validateType)("Expression")}}),a("TSEnumDeclaration",{aliases:["Statement","Declaration"],visitor:["id","members"],fields:{declare:(0,r.validateOptional)(u),const:(0,r.validateOptional)(u),id:(0,r.validateType)("Identifier"),members:(0,r.validateArrayOfType)("TSEnumMember"),initializer:(0,r.validateOptionalType)("Expression")}}),a("TSEnumMember",{visitor:["id","initializer"],fields:{id:(0,r.validateType)(["Identifier","StringLiteral"]),initializer:(0,r.validateOptionalType)("Expression")}}),a("TSModuleDeclaration",{aliases:["Statement","Declaration"],visitor:["id","body"],fields:{declare:(0,r.validateOptional)(u),global:(0,r.validateOptional)(u),id:(0,r.validateType)(["Identifier","StringLiteral"]),body:(0,r.validateType)(["TSModuleBlock","TSModuleDeclaration"])}}),a("TSModuleBlock",{aliases:["Scopable","Block","BlockParent"],visitor:["body"],fields:{body:(0,r.validateArrayOfType)("Statement")}}),a("TSImportType",{aliases:["TSType"],visitor:["argument","qualifier","typeParameters"],fields:{argument:(0,r.validateType)("StringLiteral"),qualifier:(0,r.validateOptionalType)("TSEntityName"),typeParameters:(0,r.validateOptionalType)("TSTypeParameterInstantiation")}}),a("TSImportEqualsDeclaration",{aliases:["Statement"],visitor:["id","moduleReference"],fields:{isExport:(0,r.validate)(u),id:(0,r.validateType)("Identifier"),moduleReference:(0,r.validateType)(["TSEntityName","TSExternalModuleReference"]),importKind:{validate:(0,r.assertOneOf)("type","value"),optional:!0}}}),a("TSExternalModuleReference",{visitor:["expression"],fields:{expression:(0,r.validateType)("StringLiteral")}}),a("TSNonNullExpression",{aliases:["Expression","LVal","PatternLike"],visitor:["expression"],fields:{expression:(0,r.validateType)("Expression")}}),a("TSExportAssignment",{aliases:["Statement"],visitor:["expression"],fields:{expression:(0,r.validateType)("Expression")}}),a("TSNamespaceExportDeclaration",{aliases:["Statement"],visitor:["id"],fields:{id:(0,r.validateType)("Identifier")}}),a("TSTypeAnnotation",{visitor:["typeAnnotation"],fields:{typeAnnotation:{validate:(0,r.assertNodeType)("TSType")}}}),a("TSTypeParameterInstantiation",{visitor:["params"],fields:{params:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("TSType")))}}}),a("TSTypeParameterDeclaration",{visitor:["params"],fields:{params:{validate:(0,r.chain)((0,r.assertValueType)("array"),(0,r.assertEach)((0,r.assertNodeType)("TSTypeParameter")))}}}),a("TSTypeParameter",{builder:["constraint","default","name"],visitor:["constraint","default"],fields:{name:{validate:(0,r.assertValueType)("string")},in:{validate:(0,r.assertValueType)("boolean"),optional:!0},out:{validate:(0,r.assertValueType)("boolean"),optional:!0},constraint:{validate:(0,r.assertNodeType)("TSType"),optional:!0},default:{validate:(0,r.assertNodeType)("TSType"),optional:!0}}})},47376:function(e,t,n){"use strict";n(21703),n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t.VISITOR_KEYS=t.NODE_PARENT_VALIDATIONS=t.NODE_FIELDS=t.FLIPPED_ALIAS_KEYS=t.DEPRECATED_KEYS=t.BUILDER_KEYS=t.ALIAS_KEYS=void 0,t.arrayOf=g,t.arrayOfType=T,t.assertEach=S,t.assertNodeOrValueType=_,t.assertNodeType=x,t.assertOneOf=E,t.assertOptionalChainStart=P,t.assertShape=A,t.assertValueType=w,t.chain=O,t["default"]=D,t.defineAliasedType=j,t.typeIs=y,t.validate=d,t.validateArrayOfType=b,t.validateOptional=h,t.validateOptionalType=v,t.validateType=m;var r=n(90053),i=n(93885);const o={};t.VISITOR_KEYS=o;const a={};t.ALIAS_KEYS=a;const u={};t.FLIPPED_ALIAS_KEYS=u;const s={};t.NODE_FIELDS=s;const l={};t.BUILDER_KEYS=l;const c={};t.DEPRECATED_KEYS=c;const f={};function p(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function d(e){return{validate:e}}function y(e){return"string"===typeof e?x(e):x(...e)}function m(e){return d(y(e))}function h(e){return{validate:e,optional:!0}}function v(e){return{validate:y(e),optional:!0}}function g(e){return O(w("array"),S(e))}function T(e){return g(y(e))}function b(e){return d(T(e))}function S(e){function t(t,n,r){if(Array.isArray(r))for(let o=0;o<r.length;o++){const a=`${n}[${o}]`,u=r[o];e(t,a,u),{NODE_ENV:"production",BASE_URL:""}.BABEL_TYPES_8_BREAKING&&(0,i.validateChild)(t,a,u)}}return t.each=e,t}function E(...e){function t(t,n,r){if(e.indexOf(r)<0)throw new TypeError(`Property ${n} expected value to be one of ${JSON.stringify(e)} but got ${JSON.stringify(r)}`)}return t.oneOf=e,t}function x(...e){function t(t,n,o){for(const a of e)if((0,r.default)(a,o))return void(0,i.validateChild)(t,n,o);throw new TypeError(`Property ${n} of ${t.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(null==o?void 0:o.type)}`)}return t.oneOfNodeTypes=e,t}function _(...e){function t(t,n,o){for(const a of e)if(p(o)===a||(0,r.default)(a,o))return void(0,i.validateChild)(t,n,o);throw new TypeError(`Property ${n} of ${t.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(null==o?void 0:o.type)}`)}return t.oneOfNodeOrValueTypes=e,t}function w(e){function t(t,n,r){const i=p(r)===e;if(!i)throw new TypeError(`Property ${n} expected type of ${e} but got ${p(r)}`)}return t.type=e,t}function A(e){function t(t,n,r){const o=[];for(const u of Object.keys(e))try{(0,i.validateField)(t,u,r[u],e[u])}catch(a){if(a instanceof TypeError){o.push(a.message);continue}throw a}if(o.length)throw new TypeError(`Property ${n} of ${t.type} expected to have the following:\n${o.join("\n")}`)}return t.shapeOf=e,t}function P(){function e(e){var t;let n=e;while(e){const{type:e}=n;if("OptionalCallExpression"!==e){if("OptionalMemberExpression"!==e)break;if(n.optional)return;n=n.object}else{if(n.optional)return;n=n.callee}}throw new TypeError(`Non-optional ${e.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${null==(t=n)?void 0:t.type}`)}return e}function O(...e){function t(...t){for(const n of e)n(...t)}if(t.chainOf=e,e.length>=2&&"type"in e[0]&&"array"===e[0].type&&!("each"in e[1]))throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');return t}t.NODE_PARENT_VALIDATIONS=f;const N=["aliases","builder","deprecatedAlias","fields","inherits","visitor","validate"],I=["default","optional","validate"];function j(...e){return(t,n={})=>{let r=n.aliases;var i;r||(n.inherits&&(r=null==(i=L[n.inherits].aliases)?void 0:i.slice()),null!=r||(r=[]),n.aliases=r);const o=e.filter((e=>!r.includes(e)));return r.unshift(...o),D(t,n)}}function D(e,t={}){const n=t.inherits&&L[t.inherits]||{};let r=t.fields;if(!r&&(r={},n.fields)){const e=Object.getOwnPropertyNames(n.fields);for(const t of e){const e=n.fields[t],i=e.default;if(Array.isArray(i)?i.length>0:i&&"object"===typeof i)throw new Error("field defaults can only be primitives or empty arrays currently");r[t]={default:Array.isArray(i)?[]:i,optional:e.optional,validate:e.validate}}}const i=t.visitor||n.visitor||[],d=t.aliases||n.aliases||[],y=t.builder||n.builder||t.visitor||[];for(const o of Object.keys(t))if(-1===N.indexOf(o))throw new Error(`Unknown type option "${o}" on ${e}`);t.deprecatedAlias&&(c[t.deprecatedAlias]=e);for(const o of i.concat(y))r[o]=r[o]||{};for(const o of Object.keys(r)){const t=r[o];void 0!==t.default&&-1===y.indexOf(o)&&(t.optional=!0),void 0===t.default?t.default=null:t.validate||null==t.default||(t.validate=w(p(t.default)));for(const n of Object.keys(t))if(-1===I.indexOf(n))throw new Error(`Unknown field key "${n}" on ${e}.${o}`)}o[e]=t.visitor=i,l[e]=t.builder=y,s[e]=t.fields=r,a[e]=t.aliases=d,d.forEach((t=>{u[t]=u[t]||[],u[t].push(e)})),t.validate&&(f[e]=t.validate),L[e]=t}const L={}},60428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={react:!0,assertNode:!0,createTypeAnnotationBasedOnTypeof:!0,createUnionTypeAnnotation:!0,createFlowUnionType:!0,createTSUnionType:!0,cloneNode:!0,clone:!0,cloneDeep:!0,cloneDeepWithoutLoc:!0,cloneWithoutLoc:!0,addComment:!0,addComments:!0,inheritInnerComments:!0,inheritLeadingComments:!0,inheritsComments:!0,inheritTrailingComments:!0,removeComments:!0,ensureBlock:!0,toBindingIdentifierName:!0,toBlock:!0,toComputedKey:!0,toExpression:!0,toIdentifier:!0,toKeyAlias:!0,toSequenceExpression:!0,toStatement:!0,valueToNode:!0,appendToMemberExpression:!0,inherits:!0,prependToMemberExpression:!0,removeProperties:!0,removePropertiesDeep:!0,removeTypeDuplicates:!0,getBindingIdentifiers:!0,getOuterBindingIdentifiers:!0,traverse:!0,traverseFast:!0,shallowEqual:!0,is:!0,isBinding:!0,isBlockScoped:!0,isImmutable:!0,isLet:!0,isNode:!0,isNodesEquivalent:!0,isPlaceholderType:!0,isReferenced:!0,isScope:!0,isSpecifierDefault:!0,isType:!0,isValidES3Identifier:!0,isValidIdentifier:!0,isVar:!0,matchesPattern:!0,validate:!0,buildMatchMemberExpression:!0};Object.defineProperty(t,"addComment",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(t,"addComments",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"appendToMemberExpression",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(t,"assertNode",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"buildMatchMemberExpression",{enumerable:!0,get:function(){return de.default}}),Object.defineProperty(t,"clone",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"cloneDeep",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"cloneDeepWithoutLoc",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"cloneNode",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"cloneWithoutLoc",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"createFlowUnionType",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"createTSUnionType",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"createTypeAnnotationBasedOnTypeof",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"createUnionTypeAnnotation",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ensureBlock",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"getBindingIdentifiers",{enumerable:!0,get:function(){return q.default}}),Object.defineProperty(t,"getOuterBindingIdentifiers",{enumerable:!0,get:function(){return X.default}}),Object.defineProperty(t,"inheritInnerComments",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"inheritLeadingComments",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(t,"inheritTrailingComments",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"inherits",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(t,"inheritsComments",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"is",{enumerable:!0,get:function(){return G.default}}),Object.defineProperty(t,"isBinding",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(t,"isBlockScoped",{enumerable:!0,get:function(){return Q.default}}),Object.defineProperty(t,"isImmutable",{enumerable:!0,get:function(){return Z.default}}),Object.defineProperty(t,"isLet",{enumerable:!0,get:function(){return ee.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return te.default}}),Object.defineProperty(t,"isNodesEquivalent",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(t,"isPlaceholderType",{enumerable:!0,get:function(){return re.default}}),Object.defineProperty(t,"isReferenced",{enumerable:!0,get:function(){return ie.default}}),Object.defineProperty(t,"isScope",{enumerable:!0,get:function(){return oe.default}}),Object.defineProperty(t,"isSpecifierDefault",{enumerable:!0,get:function(){return ae.default}}),Object.defineProperty(t,"isType",{enumerable:!0,get:function(){return ue.default}}),Object.defineProperty(t,"isValidES3Identifier",{enumerable:!0,get:function(){return se.default}}),Object.defineProperty(t,"isValidIdentifier",{enumerable:!0,get:function(){return le.default}}),Object.defineProperty(t,"isVar",{enumerable:!0,get:function(){return ce.default}}),Object.defineProperty(t,"matchesPattern",{enumerable:!0,get:function(){return fe.default}}),Object.defineProperty(t,"prependToMemberExpression",{enumerable:!0,get:function(){return K.default}}),t.react=void 0,Object.defineProperty(t,"removeComments",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"removeProperties",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(t,"removePropertiesDeep",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(t,"removeTypeDuplicates",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(t,"shallowEqual",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"toBindingIdentifierName",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(t,"toBlock",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(t,"toComputedKey",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"toExpression",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(t,"toIdentifier",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(t,"toKeyAlias",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"toSequenceExpression",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"toStatement",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(t,"traverseFast",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return pe.default}}),Object.defineProperty(t,"valueToNode",{enumerable:!0,get:function(){return R.default}});var i=n(95453),o=n(12849),a=n(87305),u=n(87450),s=n(75318);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var l=n(3270),c=n(43576),f=n(31096),p=n(18771);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var d=n(22792);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}));var y=n(36774),m=n(35440),h=n(74042),v=n(58741),g=n(86801),T=n(34664),b=n(83600),S=n(4225),E=n(72761),x=n(58268),_=n(44927),w=n(41142),A=n(15787);Object.keys(A).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===A[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return A[e]}}))}));var P=n(16591);Object.keys(P).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===P[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return P[e]}}))}));var O=n(33623),N=n(13026),I=n(1829),j=n(80019),D=n(3447),L=n(89374),M=n(914),C=n(89023),k=n(28626),R=n(36161),B=n(92321);Object.keys(B).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===B[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return B[e]}}))}));var F=n(55613),V=n(32083),K=n(99042),Y=n(7641),U=n(22183),J=n(32802),q=n(97980),X=n(53540),W=n(28894);Object.keys(W).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===W[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return W[e]}}))}));var $=n(98488),z=n(45113),G=n(90053),H=n(32957),Q=n(23980),Z=n(28476),ee=n(72552),te=n(86663),ne=n(51752),re=n(51015),ie=n(93504),oe=n(63948),ae=n(74956),ue=n(11920),se=n(87584),le=n(3994),ce=n(92027),fe=n(7639),pe=n(93885),de=n(82570),ye=n(42748);Object.keys(ye).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===ye[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return ye[e]}}))}));var me=n(99606);Object.keys(me).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===me[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return me[e]}}))}));const he={isReactComponent:i.default,isCompatTag:o.default,buildChildren:a.default};t.react=he},55613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(18771);function i(e,t,n=!1){return e.object=(0,r.memberExpression)(e.object,e.property,e.computed),e.property=t,e.computed=!!n,e}},32802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748);function i(e){return(0,r.isIdentifier)(e)?e.name:`${e.id.name}.${i(e.qualification)}`}function o(e){const t={},n={},a=new Set,u=[];for(let s=0;s<e.length;s++){const l=e[s];if(l&&!(u.indexOf(l)>=0)){if((0,r.isAnyTypeAnnotation)(l))return[l];if((0,r.isFlowBaseAnnotation)(l))n[l.type]=l;else if((0,r.isUnionTypeAnnotation)(l))a.has(l.types)||(e=e.concat(l.types),a.add(l.types));else if((0,r.isGenericTypeAnnotation)(l)){const e=i(l.id);if(t[e]){let n=t[e];n.typeParameters?l.typeParameters&&(n.typeParameters.params=o(n.typeParameters.params.concat(l.typeParameters.params))):n=l.typeParameters}else t[e]=l}else u.push(l)}}for(const r of Object.keys(n))u.push(n[r]);for(const r of Object.keys(t))u.push(t[r]);return u}},32083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(16591),i=n(58268);function o(e,t){if(!e||!t)return e;for(const n of r.INHERIT_KEYS.optional)null==e[n]&&(e[n]=t[n]);for(const n of Object.keys(t))"_"===n[0]&&"__clone"!==n&&(e[n]=t[n]);for(const n of r.INHERIT_KEYS.force)e[n]=t[n];return(0,i.default)(e,t),e}},99042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(18771);function i(e,t){return e.object=(0,r.memberExpression)(t,e.object),e}},7641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(16591);const i=["tokens","start","end","loc","raw","rawValue"],o=r.COMMENT_KEYS.concat(["comments"]).concat(i);function a(e,t={}){const n=t.preserveComments?i:o;for(const i of n)null!=e[i]&&(e[i]=void 0);for(const i of Object.keys(e))"_"===i[0]&&null!=e[i]&&(e[i]=void 0);const r=Object.getOwnPropertySymbols(e);for(const i of r)e[i]=null}},22183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(98488),i=n(7641);function o(e,t){return(0,r.default)(e,i.default,t),e}},7419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e){const t={},n={},i=new Set,o=[];for(let a=0;a<e.length;a++){const t=e[a];if(t&&!(o.indexOf(t)>=0)){if((0,r.isTSAnyKeyword)(t))return[t];(0,r.isTSBaseType)(t)?n[t.type]=t:(0,r.isTSUnionType)(t)?i.has(t.types)||(e.push(...t.types),i.add(t.types)):o.push(t)}}for(const r of Object.keys(n))o.push(n[r]);for(const r of Object.keys(t))o.push(t[r]);return o}},97980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e,t,n){let o=[].concat(e);const a=Object.create(null);while(o.length){const e=o.shift();if(!e)continue;const u=i.keys[e.type];if((0,r.isIdentifier)(e))if(t){const t=a[e.name]=a[e.name]||[];t.push(e)}else a[e.name]=e;else if(!(0,r.isExportDeclaration)(e)||(0,r.isExportAllDeclaration)(e)){if(n){if((0,r.isFunctionDeclaration)(e)){o.push(e.id);continue}if((0,r.isFunctionExpression)(e))continue}if(u)for(let t=0;t<u.length;t++){const n=u[t];e[n]&&(o=o.concat(e[n]))}}else(0,r.isDeclaration)(e.declaration)&&o.push(e.declaration)}return a}i.keys={DeclareClass:["id"],DeclareFunction:["id"],DeclareModule:["id"],DeclareVariable:["id"],DeclareInterface:["id"],DeclareTypeAlias:["id"],DeclareOpaqueType:["id"],InterfaceDeclaration:["id"],TypeAlias:["id"],OpaqueType:["id"],CatchClause:["param"],LabeledStatement:["label"],UnaryExpression:["argument"],AssignmentExpression:["left"],ImportSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportDefaultSpecifier:["local"],ImportDeclaration:["specifiers"],ExportSpecifier:["exported"],ExportNamespaceSpecifier:["exported"],ExportDefaultSpecifier:["exported"],FunctionDeclaration:["id","params"],FunctionExpression:["id","params"],ArrowFunctionExpression:["params"],ObjectMethod:["params"],ClassMethod:["params"],ClassPrivateMethod:["params"],ForInStatement:["left"],ForOfStatement:["left"],ClassDeclaration:["id"],ClassExpression:["id"],RestElement:["argument"],UpdateExpression:["argument"],ObjectProperty:["value"],AssignmentPattern:["left"],ArrayPattern:["elements"],ObjectPattern:["properties"],VariableDeclaration:["declarations"],VariableDeclarator:["id"]}},53540:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(97980),i=o;function o(e,t){return(0,r.default)(e,t,!0)}t["default"]=i},28894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t,n){"function"===typeof t&&(t={enter:t});const{enter:r,exit:i}=t;o(e,r,i,n,[])}function o(e,t,n,i,a){const u=r.VISITOR_KEYS[e.type];if(u){t&&t(e,a,i);for(const r of u){const u=e[r];if(Array.isArray(u))for(let s=0;s<u.length;s++){const l=u[s];l&&(a.push({node:e,key:r,index:s}),o(l,t,n,i,a),a.pop())}else u&&(a.push({node:e,key:r}),o(u,t,n,i,a),a.pop())}n&&n(e,a,i)}}},98488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t,n){if(!e)return;const o=r.VISITOR_KEYS[e.type];if(o){n=n||{},t(e,n);for(const r of o){const o=e[r];if(Array.isArray(o))for(const e of o)i(e,t,n);else i(o,t,n)}}}},33777:function(e,t){"use strict";function n(e,t,n){t&&n&&(t[e]=Array.from(new Set([].concat(t[e],n[e]).filter(Boolean))))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},98212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(18771);function i(e,t){const n=e.value.split(/\r\n|\n|\r/);let i=0;for(let r=0;r<n.length;r++)n[r].match(/[^ \t]/)&&(i=r);let o="";for(let r=0;r<n.length;r++){const e=n[r],t=0===r,a=r===n.length-1,u=r===i;let s=e.replace(/\t/g," ");t||(s=s.replace(/^[ ]+/,"")),a||(s=s.replace(/[ ]+$/,"")),s&&(u||(s+=" "),o+=s)}o&&t.push((0,r.stringLiteral)(o))}},45113:function(e,t){"use strict";function n(e,t){const n=Object.keys(t);for(const r of n)if(e[r]!==t[r])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},82570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(7639);function i(e,t){const n=e.split(".");return e=>(0,r.default)(e,n,t)}},42748:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAccessor=vi,t.isAnyTypeAnnotation=Re,t.isArgumentPlaceholder=dn,t.isArrayExpression=i,t.isArrayPattern=ne,t.isArrayTypeAnnotation=Be,t.isArrowFunctionExpression=re,t.isAssignmentExpression=o,t.isAssignmentPattern=te,t.isAwaitExpression=we,t.isBigIntLiteral=Pe,t.isBinary=Fr,t.isBinaryExpression=a,t.isBindExpression=yn,t.isBlock=Yr,t.isBlockParent=Kr,t.isBlockStatement=c,t.isBooleanLiteral=j,t.isBooleanLiteralTypeAnnotation=Ve,t.isBooleanTypeAnnotation=Fe,t.isBreakStatement=f,t.isCallExpression=p,t.isCatchClause=d,t.isClass=di,t.isClassAccessorProperty=De,t.isClassBody=ie,t.isClassDeclaration=ae,t.isClassExpression=oe,t.isClassImplements=Ye,t.isClassMethod=ve,t.isClassPrivateMethod=Me,t.isClassPrivateProperty=Le,t.isClassProperty=je,t.isCompletionStatement=qr,t.isConditional=Xr,t.isConditionalExpression=y,t.isContinueStatement=m,t.isDebuggerStatement=h,t.isDecimalLiteral=Sn,t.isDeclaration=ti,t.isDeclareClass=Ue,t.isDeclareExportAllDeclaration=Qe,t.isDeclareExportDeclaration=He,t.isDeclareFunction=Je,t.isDeclareInterface=qe,t.isDeclareModule=Xe,t.isDeclareModuleExports=We,t.isDeclareOpaqueType=ze,t.isDeclareTypeAlias=$e,t.isDeclareVariable=Ge,t.isDeclaredPredicate=Ze,t.isDecorator=hn,t.isDirective=s,t.isDirectiveLiteral=l,t.isDoExpression=vn,t.isDoWhileStatement=v,t.isEmptyStatement=g,t.isEmptyTypeAnnotation=ct,t.isEnumBody=_i,t.isEnumBooleanBody=Bt,t.isEnumBooleanMember=Yt,t.isEnumDeclaration=Rt,t.isEnumDefaultedMember=qt,t.isEnumMember=wi,t.isEnumNumberBody=Ft,t.isEnumNumberMember=Ut,t.isEnumStringBody=Vt,t.isEnumStringMember=Jt,t.isEnumSymbolBody=Kt,t.isExistsTypeAnnotation=et,t.isExportAllDeclaration=ue,t.isExportDeclaration=mi,t.isExportDefaultDeclaration=se,t.isExportDefaultSpecifier=gn,t.isExportNamedDeclaration=le,t.isExportNamespaceSpecifier=Oe,t.isExportSpecifier=ce,t.isExpression=Br,t.isExpressionStatement=T,t.isExpressionWrapper=zr,t.isFile=b,t.isFlow=Ti,t.isFlowBaseAnnotation=Si,t.isFlowDeclaration=Ei,t.isFlowPredicate=xi,t.isFlowType=bi,t.isFor=Gr,t.isForInStatement=S,t.isForOfStatement=fe,t.isForStatement=E,t.isForXStatement=Hr,t.isFunction=Qr,t.isFunctionDeclaration=x,t.isFunctionExpression=_,t.isFunctionParent=Zr,t.isFunctionTypeAnnotation=tt,t.isFunctionTypeParam=nt,t.isGenericTypeAnnotation=rt,t.isIdentifier=w,t.isIfStatement=A,t.isImmutable=ai,t.isImport=Ae,t.isImportAttribute=mn,t.isImportDeclaration=pe,t.isImportDefaultSpecifier=de,t.isImportNamespaceSpecifier=ye,t.isImportSpecifier=me,t.isIndexedAccessType=Xt,t.isInferredPredicate=it,t.isInterfaceDeclaration=at,t.isInterfaceExtends=ot,t.isInterfaceTypeAnnotation=ut,t.isInterpreterDirective=u,t.isIntersectionTypeAnnotation=st,t.isJSX=Ai,t.isJSXAttribute=$t,t.isJSXClosingElement=zt,t.isJSXClosingFragment=ln,t.isJSXElement=Gt,t.isJSXEmptyExpression=Ht,t.isJSXExpressionContainer=Qt,t.isJSXFragment=un,t.isJSXIdentifier=en,t.isJSXMemberExpression=tn,t.isJSXNamespacedName=nn,t.isJSXOpeningElement=rn,t.isJSXOpeningFragment=sn,t.isJSXSpreadAttribute=on,t.isJSXSpreadChild=Zt,t.isJSXText=an,t.isLVal=ri,t.isLabeledStatement=P,t.isLiteral=oi,t.isLogicalExpression=L,t.isLoop=Wr,t.isMemberExpression=M,t.isMetaProperty=he,t.isMethod=si,t.isMiscellaneous=Pi,t.isMixedTypeAnnotation=lt,t.isModuleDeclaration=yi,t.isModuleExpression=En,t.isModuleSpecifier=hi,t.isNewExpression=C,t.isNoop=cn,t.isNullLiteral=I,t.isNullLiteralTypeAnnotation=Ke,t.isNullableTypeAnnotation=ft,t.isNumberLiteral=Di,t.isNumberLiteralTypeAnnotation=pt,t.isNumberTypeAnnotation=dt,t.isNumericLiteral=N,t.isObjectExpression=R,t.isObjectMember=li,t.isObjectMethod=B,t.isObjectPattern=ge,t.isObjectProperty=F,t.isObjectTypeAnnotation=yt,t.isObjectTypeCallProperty=ht,t.isObjectTypeIndexer=vt,t.isObjectTypeInternalSlot=mt,t.isObjectTypeProperty=gt,t.isObjectTypeSpreadProperty=Tt,t.isOpaqueType=bt,t.isOptionalCallExpression=Ie,t.isOptionalIndexedAccessType=Wt,t.isOptionalMemberExpression=Ne,t.isParenthesizedExpression=U,t.isPattern=pi,t.isPatternLike=ni,t.isPipelineBareFunction=wn,t.isPipelinePrimaryTopicReference=An,t.isPipelineTopicExpression=_n,t.isPlaceholder=fn,t.isPrivate=gi,t.isPrivateName=Ce,t.isProgram=k,t.isProperty=ci,t.isPureish=ei,t.isQualifiedTypeIdentifier=St,t.isRecordExpression=Tn,t.isRegExpLiteral=D,t.isRegexLiteral=Li,t.isRestElement=V,t.isRestProperty=Mi,t.isReturnStatement=K,t.isScopable=Vr,t.isSequenceExpression=Y,t.isSpreadElement=Te,t.isSpreadProperty=Ci,t.isStandardized=Rr,t.isStatement=Ur,t.isStaticBlock=ke,t.isStringLiteral=O,t.isStringLiteralTypeAnnotation=Et,t.isStringTypeAnnotation=xt,t.isSuper=be,t.isSwitchCase=J,t.isSwitchStatement=q,t.isSymbolTypeAnnotation=_t,t.isTSAnyKeyword=kn,t.isTSArrayType=nr,t.isTSAsExpression=Sr,t.isTSBaseType=ji,t.isTSBigIntKeyword=Bn,t.isTSBooleanKeyword=Rn,t.isTSCallSignatureDeclaration=jn,t.isTSConditionalType=lr,t.isTSConstructSignatureDeclaration=Dn,t.isTSConstructorType=Hn,t.isTSDeclareFunction=On,t.isTSDeclareMethod=Nn,t.isTSEntityName=ii,t.isTSEnumDeclaration=xr,t.isTSEnumMember=_r,t.isTSExportAssignment=jr,t.isTSExpressionWithTypeArguments=hr,t.isTSExternalModuleReference=Nr,t.isTSFunctionType=Gn,t.isTSImportEqualsDeclaration=Or,t.isTSImportType=Pr,t.isTSIndexSignature=Cn,t.isTSIndexedAccessType=dr,t.isTSInferType=cr,t.isTSInstantiationExpression=br,t.isTSInterfaceBody=gr,t.isTSInterfaceDeclaration=vr,t.isTSIntersectionType=sr,t.isTSIntrinsicKeyword=Fn,t.isTSLiteralType=mr,t.isTSMappedType=yr,t.isTSMethodSignature=Mn,t.isTSModuleBlock=Ar,t.isTSModuleDeclaration=wr,t.isTSNamedTupleMember=ar,t.isTSNamespaceExportDeclaration=Dr,t.isTSNeverKeyword=Vn,t.isTSNonNullExpression=Ir,t.isTSNullKeyword=Kn,t.isTSNumberKeyword=Yn,t.isTSObjectKeyword=Un,t.isTSOptionalType=ir,t.isTSParameterProperty=Pn,t.isTSParenthesizedType=fr,t.isTSPropertySignature=Ln,t.isTSQualifiedName=In,t.isTSRestType=or,t.isTSStringKeyword=Jn,t.isTSSymbolKeyword=qn,t.isTSThisType=zn,t.isTSTupleType=rr,t.isTSType=Ii,t.isTSTypeAliasDeclaration=Tr,t.isTSTypeAnnotation=Lr,t.isTSTypeAssertion=Er,t.isTSTypeElement=Ni,t.isTSTypeLiteral=tr,t.isTSTypeOperator=pr,t.isTSTypeParameter=kr,t.isTSTypeParameterDeclaration=Cr,t.isTSTypeParameterInstantiation=Mr,t.isTSTypePredicate=Zn,t.isTSTypeQuery=er,t.isTSTypeReference=Qn,t.isTSUndefinedKeyword=Xn,t.isTSUnionType=ur,t.isTSUnknownKeyword=Wn,t.isTSVoidKeyword=$n,t.isTaggedTemplateExpression=Se,t.isTemplateElement=Ee,t.isTemplateLiteral=xe,t.isTerminatorless=Jr,t.isThisExpression=X,t.isThisTypeAnnotation=wt,t.isThrowStatement=W,t.isTopicReference=xn,t.isTryStatement=$,t.isTupleExpression=bn,t.isTupleTypeAnnotation=At,t.isTypeAlias=Ot,t.isTypeAnnotation=Nt,t.isTypeCastExpression=It,t.isTypeParameter=jt,t.isTypeParameterDeclaration=Dt,t.isTypeParameterInstantiation=Lt,t.isTypeScript=Oi,t.isTypeofTypeAnnotation=Pt,t.isUnaryExpression=z,t.isUnaryLike=fi,t.isUnionTypeAnnotation=Mt,t.isUpdateExpression=G,t.isUserWhitespacable=ui,t.isV8IntrinsicIdentifier=pn,t.isVariableDeclaration=H,t.isVariableDeclarator=Q,t.isVariance=Ct,t.isVoidTypeAnnotation=kt,t.isWhile=$r,t.isWhileStatement=Z,t.isWithStatement=ee,t.isYieldExpression=_e;var r=n(45113);function i(e,t){if(!e)return!1;const n=e.type;return"ArrayExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function o(e,t){if(!e)return!1;const n=e.type;return"AssignmentExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function a(e,t){if(!e)return!1;const n=e.type;return"BinaryExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function u(e,t){if(!e)return!1;const n=e.type;return"InterpreterDirective"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function s(e,t){if(!e)return!1;const n=e.type;return"Directive"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function l(e,t){if(!e)return!1;const n=e.type;return"DirectiveLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function c(e,t){if(!e)return!1;const n=e.type;return"BlockStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function f(e,t){if(!e)return!1;const n=e.type;return"BreakStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function p(e,t){if(!e)return!1;const n=e.type;return"CallExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function d(e,t){if(!e)return!1;const n=e.type;return"CatchClause"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function y(e,t){if(!e)return!1;const n=e.type;return"ConditionalExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function m(e,t){if(!e)return!1;const n=e.type;return"ContinueStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function h(e,t){if(!e)return!1;const n=e.type;return"DebuggerStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function v(e,t){if(!e)return!1;const n=e.type;return"DoWhileStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function g(e,t){if(!e)return!1;const n=e.type;return"EmptyStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function T(e,t){if(!e)return!1;const n=e.type;return"ExpressionStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function b(e,t){if(!e)return!1;const n=e.type;return"File"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function S(e,t){if(!e)return!1;const n=e.type;return"ForInStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function E(e,t){if(!e)return!1;const n=e.type;return"ForStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function x(e,t){if(!e)return!1;const n=e.type;return"FunctionDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _(e,t){if(!e)return!1;const n=e.type;return"FunctionExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function w(e,t){if(!e)return!1;const n=e.type;return"Identifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function A(e,t){if(!e)return!1;const n=e.type;return"IfStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function P(e,t){if(!e)return!1;const n=e.type;return"LabeledStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function O(e,t){if(!e)return!1;const n=e.type;return"StringLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function N(e,t){if(!e)return!1;const n=e.type;return"NumericLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function I(e,t){if(!e)return!1;const n=e.type;return"NullLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function j(e,t){if(!e)return!1;const n=e.type;return"BooleanLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function D(e,t){if(!e)return!1;const n=e.type;return"RegExpLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function L(e,t){if(!e)return!1;const n=e.type;return"LogicalExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function M(e,t){if(!e)return!1;const n=e.type;return"MemberExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function C(e,t){if(!e)return!1;const n=e.type;return"NewExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function k(e,t){if(!e)return!1;const n=e.type;return"Program"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function R(e,t){if(!e)return!1;const n=e.type;return"ObjectExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function B(e,t){if(!e)return!1;const n=e.type;return"ObjectMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function F(e,t){if(!e)return!1;const n=e.type;return"ObjectProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function V(e,t){if(!e)return!1;const n=e.type;return"RestElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function K(e,t){if(!e)return!1;const n=e.type;return"ReturnStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Y(e,t){if(!e)return!1;const n=e.type;return"SequenceExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function U(e,t){if(!e)return!1;const n=e.type;return"ParenthesizedExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function J(e,t){if(!e)return!1;const n=e.type;return"SwitchCase"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function q(e,t){if(!e)return!1;const n=e.type;return"SwitchStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function X(e,t){if(!e)return!1;const n=e.type;return"ThisExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function W(e,t){if(!e)return!1;const n=e.type;return"ThrowStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $(e,t){if(!e)return!1;const n=e.type;return"TryStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function z(e,t){if(!e)return!1;const n=e.type;return"UnaryExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function G(e,t){if(!e)return!1;const n=e.type;return"UpdateExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function H(e,t){if(!e)return!1;const n=e.type;return"VariableDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Q(e,t){if(!e)return!1;const n=e.type;return"VariableDeclarator"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Z(e,t){if(!e)return!1;const n=e.type;return"WhileStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ee(e,t){if(!e)return!1;const n=e.type;return"WithStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function te(e,t){if(!e)return!1;const n=e.type;return"AssignmentPattern"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ne(e,t){if(!e)return!1;const n=e.type;return"ArrayPattern"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function re(e,t){if(!e)return!1;const n=e.type;return"ArrowFunctionExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ie(e,t){if(!e)return!1;const n=e.type;return"ClassBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function oe(e,t){if(!e)return!1;const n=e.type;return"ClassExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ae(e,t){if(!e)return!1;const n=e.type;return"ClassDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ue(e,t){if(!e)return!1;const n=e.type;return"ExportAllDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function se(e,t){if(!e)return!1;const n=e.type;return"ExportDefaultDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function le(e,t){if(!e)return!1;const n=e.type;return"ExportNamedDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ce(e,t){if(!e)return!1;const n=e.type;return"ExportSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function fe(e,t){if(!e)return!1;const n=e.type;return"ForOfStatement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pe(e,t){if(!e)return!1;const n=e.type;return"ImportDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function de(e,t){if(!e)return!1;const n=e.type;return"ImportDefaultSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ye(e,t){if(!e)return!1;const n=e.type;return"ImportNamespaceSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function me(e,t){if(!e)return!1;const n=e.type;return"ImportSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function he(e,t){if(!e)return!1;const n=e.type;return"MetaProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ve(e,t){if(!e)return!1;const n=e.type;return"ClassMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ge(e,t){if(!e)return!1;const n=e.type;return"ObjectPattern"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Te(e,t){if(!e)return!1;const n=e.type;return"SpreadElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function be(e,t){if(!e)return!1;const n=e.type;return"Super"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Se(e,t){if(!e)return!1;const n=e.type;return"TaggedTemplateExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ee(e,t){if(!e)return!1;const n=e.type;return"TemplateElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xe(e,t){if(!e)return!1;const n=e.type;return"TemplateLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _e(e,t){if(!e)return!1;const n=e.type;return"YieldExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function we(e,t){if(!e)return!1;const n=e.type;return"AwaitExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ae(e,t){if(!e)return!1;const n=e.type;return"Import"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pe(e,t){if(!e)return!1;const n=e.type;return"BigIntLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Oe(e,t){if(!e)return!1;const n=e.type;return"ExportNamespaceSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ne(e,t){if(!e)return!1;const n=e.type;return"OptionalMemberExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ie(e,t){if(!e)return!1;const n=e.type;return"OptionalCallExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function je(e,t){if(!e)return!1;const n=e.type;return"ClassProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function De(e,t){if(!e)return!1;const n=e.type;return"ClassAccessorProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Le(e,t){if(!e)return!1;const n=e.type;return"ClassPrivateProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Me(e,t){if(!e)return!1;const n=e.type;return"ClassPrivateMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ce(e,t){if(!e)return!1;const n=e.type;return"PrivateName"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ke(e,t){if(!e)return!1;const n=e.type;return"StaticBlock"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Re(e,t){if(!e)return!1;const n=e.type;return"AnyTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Be(e,t){if(!e)return!1;const n=e.type;return"ArrayTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Fe(e,t){if(!e)return!1;const n=e.type;return"BooleanTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ve(e,t){if(!e)return!1;const n=e.type;return"BooleanLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ke(e,t){if(!e)return!1;const n=e.type;return"NullLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ye(e,t){if(!e)return!1;const n=e.type;return"ClassImplements"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ue(e,t){if(!e)return!1;const n=e.type;return"DeclareClass"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Je(e,t){if(!e)return!1;const n=e.type;return"DeclareFunction"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function qe(e,t){if(!e)return!1;const n=e.type;return"DeclareInterface"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Xe(e,t){if(!e)return!1;const n=e.type;return"DeclareModule"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function We(e,t){if(!e)return!1;const n=e.type;return"DeclareModuleExports"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $e(e,t){if(!e)return!1;const n=e.type;return"DeclareTypeAlias"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ze(e,t){if(!e)return!1;const n=e.type;return"DeclareOpaqueType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ge(e,t){if(!e)return!1;const n=e.type;return"DeclareVariable"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function He(e,t){if(!e)return!1;const n=e.type;return"DeclareExportDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Qe(e,t){if(!e)return!1;const n=e.type;return"DeclareExportAllDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ze(e,t){if(!e)return!1;const n=e.type;return"DeclaredPredicate"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function et(e,t){if(!e)return!1;const n=e.type;return"ExistsTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function tt(e,t){if(!e)return!1;const n=e.type;return"FunctionTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function nt(e,t){if(!e)return!1;const n=e.type;return"FunctionTypeParam"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function rt(e,t){if(!e)return!1;const n=e.type;return"GenericTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function it(e,t){if(!e)return!1;const n=e.type;return"InferredPredicate"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ot(e,t){if(!e)return!1;const n=e.type;return"InterfaceExtends"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function at(e,t){if(!e)return!1;const n=e.type;return"InterfaceDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ut(e,t){if(!e)return!1;const n=e.type;return"InterfaceTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function st(e,t){if(!e)return!1;const n=e.type;return"IntersectionTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function lt(e,t){if(!e)return!1;const n=e.type;return"MixedTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ct(e,t){if(!e)return!1;const n=e.type;return"EmptyTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ft(e,t){if(!e)return!1;const n=e.type;return"NullableTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pt(e,t){if(!e)return!1;const n=e.type;return"NumberLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function dt(e,t){if(!e)return!1;const n=e.type;return"NumberTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function yt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function mt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeInternalSlot"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ht(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeCallProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function vt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeIndexer"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Tt(e,t){if(!e)return!1;const n=e.type;return"ObjectTypeSpreadProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function bt(e,t){if(!e)return!1;const n=e.type;return"OpaqueType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function St(e,t){if(!e)return!1;const n=e.type;return"QualifiedTypeIdentifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Et(e,t){if(!e)return!1;const n=e.type;return"StringLiteralTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xt(e,t){if(!e)return!1;const n=e.type;return"StringTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _t(e,t){if(!e)return!1;const n=e.type;return"SymbolTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function wt(e,t){if(!e)return!1;const n=e.type;return"ThisTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function At(e,t){if(!e)return!1;const n=e.type;return"TupleTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pt(e,t){if(!e)return!1;const n=e.type;return"TypeofTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ot(e,t){if(!e)return!1;const n=e.type;return"TypeAlias"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Nt(e,t){if(!e)return!1;const n=e.type;return"TypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function It(e,t){if(!e)return!1;const n=e.type;return"TypeCastExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function jt(e,t){if(!e)return!1;const n=e.type;return"TypeParameter"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Dt(e,t){if(!e)return!1;const n=e.type;return"TypeParameterDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Lt(e,t){if(!e)return!1;const n=e.type;return"TypeParameterInstantiation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mt(e,t){if(!e)return!1;const n=e.type;return"UnionTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ct(e,t){if(!e)return!1;const n=e.type;return"Variance"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function kt(e,t){if(!e)return!1;const n=e.type;return"VoidTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Rt(e,t){if(!e)return!1;const n=e.type;return"EnumDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Bt(e,t){if(!e)return!1;const n=e.type;return"EnumBooleanBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ft(e,t){if(!e)return!1;const n=e.type;return"EnumNumberBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Vt(e,t){if(!e)return!1;const n=e.type;return"EnumStringBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Kt(e,t){if(!e)return!1;const n=e.type;return"EnumSymbolBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Yt(e,t){if(!e)return!1;const n=e.type;return"EnumBooleanMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ut(e,t){if(!e)return!1;const n=e.type;return"EnumNumberMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Jt(e,t){if(!e)return!1;const n=e.type;return"EnumStringMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function qt(e,t){if(!e)return!1;const n=e.type;return"EnumDefaultedMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Xt(e,t){if(!e)return!1;const n=e.type;return"IndexedAccessType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Wt(e,t){if(!e)return!1;const n=e.type;return"OptionalIndexedAccessType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $t(e,t){if(!e)return!1;const n=e.type;return"JSXAttribute"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function zt(e,t){if(!e)return!1;const n=e.type;return"JSXClosingElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Gt(e,t){if(!e)return!1;const n=e.type;return"JSXElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ht(e,t){if(!e)return!1;const n=e.type;return"JSXEmptyExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Qt(e,t){if(!e)return!1;const n=e.type;return"JSXExpressionContainer"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Zt(e,t){if(!e)return!1;const n=e.type;return"JSXSpreadChild"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function en(e,t){if(!e)return!1;const n=e.type;return"JSXIdentifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function tn(e,t){if(!e)return!1;const n=e.type;return"JSXMemberExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function nn(e,t){if(!e)return!1;const n=e.type;return"JSXNamespacedName"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function rn(e,t){if(!e)return!1;const n=e.type;return"JSXOpeningElement"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function on(e,t){if(!e)return!1;const n=e.type;return"JSXSpreadAttribute"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function an(e,t){if(!e)return!1;const n=e.type;return"JSXText"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function un(e,t){if(!e)return!1;const n=e.type;return"JSXFragment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function sn(e,t){if(!e)return!1;const n=e.type;return"JSXOpeningFragment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ln(e,t){if(!e)return!1;const n=e.type;return"JSXClosingFragment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function cn(e,t){if(!e)return!1;const n=e.type;return"Noop"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function fn(e,t){if(!e)return!1;const n=e.type;return"Placeholder"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pn(e,t){if(!e)return!1;const n=e.type;return"V8IntrinsicIdentifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function dn(e,t){if(!e)return!1;const n=e.type;return"ArgumentPlaceholder"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function yn(e,t){if(!e)return!1;const n=e.type;return"BindExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function mn(e,t){if(!e)return!1;const n=e.type;return"ImportAttribute"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function hn(e,t){if(!e)return!1;const n=e.type;return"Decorator"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function vn(e,t){if(!e)return!1;const n=e.type;return"DoExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gn(e,t){if(!e)return!1;const n=e.type;return"ExportDefaultSpecifier"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Tn(e,t){if(!e)return!1;const n=e.type;return"RecordExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function bn(e,t){if(!e)return!1;const n=e.type;return"TupleExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Sn(e,t){if(!e)return!1;const n=e.type;return"DecimalLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function En(e,t){if(!e)return!1;const n=e.type;return"ModuleExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xn(e,t){if(!e)return!1;const n=e.type;return"TopicReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _n(e,t){if(!e)return!1;const n=e.type;return"PipelineTopicExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function wn(e,t){if(!e)return!1;const n=e.type;return"PipelineBareFunction"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function An(e,t){if(!e)return!1;const n=e.type;return"PipelinePrimaryTopicReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pn(e,t){if(!e)return!1;const n=e.type;return"TSParameterProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function On(e,t){if(!e)return!1;const n=e.type;return"TSDeclareFunction"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Nn(e,t){if(!e)return!1;const n=e.type;return"TSDeclareMethod"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function In(e,t){if(!e)return!1;const n=e.type;return"TSQualifiedName"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function jn(e,t){if(!e)return!1;const n=e.type;return"TSCallSignatureDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Dn(e,t){if(!e)return!1;const n=e.type;return"TSConstructSignatureDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ln(e,t){if(!e)return!1;const n=e.type;return"TSPropertySignature"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mn(e,t){if(!e)return!1;const n=e.type;return"TSMethodSignature"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Cn(e,t){if(!e)return!1;const n=e.type;return"TSIndexSignature"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function kn(e,t){if(!e)return!1;const n=e.type;return"TSAnyKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Rn(e,t){if(!e)return!1;const n=e.type;return"TSBooleanKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Bn(e,t){if(!e)return!1;const n=e.type;return"TSBigIntKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Fn(e,t){if(!e)return!1;const n=e.type;return"TSIntrinsicKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Vn(e,t){if(!e)return!1;const n=e.type;return"TSNeverKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Kn(e,t){if(!e)return!1;const n=e.type;return"TSNullKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Yn(e,t){if(!e)return!1;const n=e.type;return"TSNumberKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Un(e,t){if(!e)return!1;const n=e.type;return"TSObjectKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Jn(e,t){if(!e)return!1;const n=e.type;return"TSStringKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function qn(e,t){if(!e)return!1;const n=e.type;return"TSSymbolKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Xn(e,t){if(!e)return!1;const n=e.type;return"TSUndefinedKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Wn(e,t){if(!e)return!1;const n=e.type;return"TSUnknownKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function $n(e,t){if(!e)return!1;const n=e.type;return"TSVoidKeyword"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function zn(e,t){if(!e)return!1;const n=e.type;return"TSThisType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Gn(e,t){if(!e)return!1;const n=e.type;return"TSFunctionType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Hn(e,t){if(!e)return!1;const n=e.type;return"TSConstructorType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Qn(e,t){if(!e)return!1;const n=e.type;return"TSTypeReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Zn(e,t){if(!e)return!1;const n=e.type;return"TSTypePredicate"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function er(e,t){if(!e)return!1;const n=e.type;return"TSTypeQuery"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function tr(e,t){if(!e)return!1;const n=e.type;return"TSTypeLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function nr(e,t){if(!e)return!1;const n=e.type;return"TSArrayType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function rr(e,t){if(!e)return!1;const n=e.type;return"TSTupleType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ir(e,t){if(!e)return!1;const n=e.type;return"TSOptionalType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function or(e,t){if(!e)return!1;const n=e.type;return"TSRestType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ar(e,t){if(!e)return!1;const n=e.type;return"TSNamedTupleMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function ur(e,t){if(!e)return!1;const n=e.type;return"TSUnionType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function sr(e,t){if(!e)return!1;const n=e.type;return"TSIntersectionType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function lr(e,t){if(!e)return!1;const n=e.type;return"TSConditionalType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function cr(e,t){if(!e)return!1;const n=e.type;return"TSInferType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function fr(e,t){if(!e)return!1;const n=e.type;return"TSParenthesizedType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function pr(e,t){if(!e)return!1;const n=e.type;return"TSTypeOperator"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function dr(e,t){if(!e)return!1;const n=e.type;return"TSIndexedAccessType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function yr(e,t){if(!e)return!1;const n=e.type;return"TSMappedType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function mr(e,t){if(!e)return!1;const n=e.type;return"TSLiteralType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function hr(e,t){if(!e)return!1;const n=e.type;return"TSExpressionWithTypeArguments"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function vr(e,t){if(!e)return!1;const n=e.type;return"TSInterfaceDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gr(e,t){if(!e)return!1;const n=e.type;return"TSInterfaceBody"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Tr(e,t){if(!e)return!1;const n=e.type;return"TSTypeAliasDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function br(e,t){if(!e)return!1;const n=e.type;return"TSInstantiationExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Sr(e,t){if(!e)return!1;const n=e.type;return"TSAsExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Er(e,t){if(!e)return!1;const n=e.type;return"TSTypeAssertion"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function xr(e,t){if(!e)return!1;const n=e.type;return"TSEnumDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function _r(e,t){if(!e)return!1;const n=e.type;return"TSEnumMember"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function wr(e,t){if(!e)return!1;const n=e.type;return"TSModuleDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ar(e,t){if(!e)return!1;const n=e.type;return"TSModuleBlock"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Pr(e,t){if(!e)return!1;const n=e.type;return"TSImportType"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Or(e,t){if(!e)return!1;const n=e.type;return"TSImportEqualsDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Nr(e,t){if(!e)return!1;const n=e.type;return"TSExternalModuleReference"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ir(e,t){if(!e)return!1;const n=e.type;return"TSNonNullExpression"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function jr(e,t){if(!e)return!1;const n=e.type;return"TSExportAssignment"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Dr(e,t){if(!e)return!1;const n=e.type;return"TSNamespaceExportDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Lr(e,t){if(!e)return!1;const n=e.type;return"TSTypeAnnotation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mr(e,t){if(!e)return!1;const n=e.type;return"TSTypeParameterInstantiation"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Cr(e,t){if(!e)return!1;const n=e.type;return"TSTypeParameterDeclaration"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function kr(e,t){if(!e)return!1;const n=e.type;return"TSTypeParameter"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Rr(e,t){if(!e)return!1;const n=e.type;return("ArrayExpression"===n||"AssignmentExpression"===n||"BinaryExpression"===n||"InterpreterDirective"===n||"Directive"===n||"DirectiveLiteral"===n||"BlockStatement"===n||"BreakStatement"===n||"CallExpression"===n||"CatchClause"===n||"ConditionalExpression"===n||"ContinueStatement"===n||"DebuggerStatement"===n||"DoWhileStatement"===n||"EmptyStatement"===n||"ExpressionStatement"===n||"File"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"FunctionExpression"===n||"Identifier"===n||"IfStatement"===n||"LabeledStatement"===n||"StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"LogicalExpression"===n||"MemberExpression"===n||"NewExpression"===n||"Program"===n||"ObjectExpression"===n||"ObjectMethod"===n||"ObjectProperty"===n||"RestElement"===n||"ReturnStatement"===n||"SequenceExpression"===n||"ParenthesizedExpression"===n||"SwitchCase"===n||"SwitchStatement"===n||"ThisExpression"===n||"ThrowStatement"===n||"TryStatement"===n||"UnaryExpression"===n||"UpdateExpression"===n||"VariableDeclaration"===n||"VariableDeclarator"===n||"WhileStatement"===n||"WithStatement"===n||"AssignmentPattern"===n||"ArrayPattern"===n||"ArrowFunctionExpression"===n||"ClassBody"===n||"ClassExpression"===n||"ClassDeclaration"===n||"ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ExportSpecifier"===n||"ForOfStatement"===n||"ImportDeclaration"===n||"ImportDefaultSpecifier"===n||"ImportNamespaceSpecifier"===n||"ImportSpecifier"===n||"MetaProperty"===n||"ClassMethod"===n||"ObjectPattern"===n||"SpreadElement"===n||"Super"===n||"TaggedTemplateExpression"===n||"TemplateElement"===n||"TemplateLiteral"===n||"YieldExpression"===n||"AwaitExpression"===n||"Import"===n||"BigIntLiteral"===n||"ExportNamespaceSpecifier"===n||"OptionalMemberExpression"===n||"OptionalCallExpression"===n||"ClassProperty"===n||"ClassAccessorProperty"===n||"ClassPrivateProperty"===n||"ClassPrivateMethod"===n||"PrivateName"===n||"StaticBlock"===n||"Placeholder"===n&&("Identifier"===e.expectedNode||"StringLiteral"===e.expectedNode||"BlockStatement"===e.expectedNode||"ClassBody"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function Br(e,t){if(!e)return!1;const n=e.type;return("ArrayExpression"===n||"AssignmentExpression"===n||"BinaryExpression"===n||"CallExpression"===n||"ConditionalExpression"===n||"FunctionExpression"===n||"Identifier"===n||"StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"LogicalExpression"===n||"MemberExpression"===n||"NewExpression"===n||"ObjectExpression"===n||"SequenceExpression"===n||"ParenthesizedExpression"===n||"ThisExpression"===n||"UnaryExpression"===n||"UpdateExpression"===n||"ArrowFunctionExpression"===n||"ClassExpression"===n||"MetaProperty"===n||"Super"===n||"TaggedTemplateExpression"===n||"TemplateLiteral"===n||"YieldExpression"===n||"AwaitExpression"===n||"Import"===n||"BigIntLiteral"===n||"OptionalMemberExpression"===n||"OptionalCallExpression"===n||"TypeCastExpression"===n||"JSXElement"===n||"JSXFragment"===n||"BindExpression"===n||"DoExpression"===n||"RecordExpression"===n||"TupleExpression"===n||"DecimalLiteral"===n||"ModuleExpression"===n||"TopicReference"===n||"PipelineTopicExpression"===n||"PipelineBareFunction"===n||"PipelinePrimaryTopicReference"===n||"TSInstantiationExpression"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSNonNullExpression"===n||"Placeholder"===n&&("Expression"===e.expectedNode||"Identifier"===e.expectedNode||"StringLiteral"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function Fr(e,t){if(!e)return!1;const n=e.type;return("BinaryExpression"===n||"LogicalExpression"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Vr(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"CatchClause"===n||"DoWhileStatement"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"FunctionExpression"===n||"Program"===n||"ObjectMethod"===n||"SwitchStatement"===n||"WhileStatement"===n||"ArrowFunctionExpression"===n||"ClassExpression"===n||"ClassDeclaration"===n||"ForOfStatement"===n||"ClassMethod"===n||"ClassPrivateMethod"===n||"StaticBlock"===n||"TSModuleBlock"===n||"Placeholder"===n&&"BlockStatement"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function Kr(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"CatchClause"===n||"DoWhileStatement"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"FunctionExpression"===n||"Program"===n||"ObjectMethod"===n||"SwitchStatement"===n||"WhileStatement"===n||"ArrowFunctionExpression"===n||"ForOfStatement"===n||"ClassMethod"===n||"ClassPrivateMethod"===n||"StaticBlock"===n||"TSModuleBlock"===n||"Placeholder"===n&&"BlockStatement"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function Yr(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"Program"===n||"TSModuleBlock"===n||"Placeholder"===n&&"BlockStatement"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ur(e,t){if(!e)return!1;const n=e.type;return("BlockStatement"===n||"BreakStatement"===n||"ContinueStatement"===n||"DebuggerStatement"===n||"DoWhileStatement"===n||"EmptyStatement"===n||"ExpressionStatement"===n||"ForInStatement"===n||"ForStatement"===n||"FunctionDeclaration"===n||"IfStatement"===n||"LabeledStatement"===n||"ReturnStatement"===n||"SwitchStatement"===n||"ThrowStatement"===n||"TryStatement"===n||"VariableDeclaration"===n||"WhileStatement"===n||"WithStatement"===n||"ClassDeclaration"===n||"ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ForOfStatement"===n||"ImportDeclaration"===n||"DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"InterfaceDeclaration"===n||"OpaqueType"===n||"TypeAlias"===n||"EnumDeclaration"===n||"TSDeclareFunction"===n||"TSInterfaceDeclaration"===n||"TSTypeAliasDeclaration"===n||"TSEnumDeclaration"===n||"TSModuleDeclaration"===n||"TSImportEqualsDeclaration"===n||"TSExportAssignment"===n||"TSNamespaceExportDeclaration"===n||"Placeholder"===n&&("Statement"===e.expectedNode||"Declaration"===e.expectedNode||"BlockStatement"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function Jr(e,t){if(!e)return!1;const n=e.type;return("BreakStatement"===n||"ContinueStatement"===n||"ReturnStatement"===n||"ThrowStatement"===n||"YieldExpression"===n||"AwaitExpression"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function qr(e,t){if(!e)return!1;const n=e.type;return("BreakStatement"===n||"ContinueStatement"===n||"ReturnStatement"===n||"ThrowStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Xr(e,t){if(!e)return!1;const n=e.type;return("ConditionalExpression"===n||"IfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Wr(e,t){if(!e)return!1;const n=e.type;return("DoWhileStatement"===n||"ForInStatement"===n||"ForStatement"===n||"WhileStatement"===n||"ForOfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function $r(e,t){if(!e)return!1;const n=e.type;return("DoWhileStatement"===n||"WhileStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function zr(e,t){if(!e)return!1;const n=e.type;return("ExpressionStatement"===n||"ParenthesizedExpression"===n||"TypeCastExpression"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Gr(e,t){if(!e)return!1;const n=e.type;return("ForInStatement"===n||"ForStatement"===n||"ForOfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Hr(e,t){if(!e)return!1;const n=e.type;return("ForInStatement"===n||"ForOfStatement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Qr(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"FunctionExpression"===n||"ObjectMethod"===n||"ArrowFunctionExpression"===n||"ClassMethod"===n||"ClassPrivateMethod"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Zr(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"FunctionExpression"===n||"ObjectMethod"===n||"ArrowFunctionExpression"===n||"ClassMethod"===n||"ClassPrivateMethod"===n||"StaticBlock"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ei(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"FunctionExpression"===n||"StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"ArrowFunctionExpression"===n||"BigIntLiteral"===n||"DecimalLiteral"===n||"Placeholder"===n&&"StringLiteral"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ti(e,t){if(!e)return!1;const n=e.type;return("FunctionDeclaration"===n||"VariableDeclaration"===n||"ClassDeclaration"===n||"ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ImportDeclaration"===n||"DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"InterfaceDeclaration"===n||"OpaqueType"===n||"TypeAlias"===n||"EnumDeclaration"===n||"TSDeclareFunction"===n||"TSInterfaceDeclaration"===n||"TSTypeAliasDeclaration"===n||"TSEnumDeclaration"===n||"TSModuleDeclaration"===n||"Placeholder"===n&&"Declaration"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ni(e,t){if(!e)return!1;const n=e.type;return("Identifier"===n||"RestElement"===n||"AssignmentPattern"===n||"ArrayPattern"===n||"ObjectPattern"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSNonNullExpression"===n||"Placeholder"===n&&("Pattern"===e.expectedNode||"Identifier"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function ri(e,t){if(!e)return!1;const n=e.type;return("Identifier"===n||"MemberExpression"===n||"RestElement"===n||"AssignmentPattern"===n||"ArrayPattern"===n||"ObjectPattern"===n||"TSParameterProperty"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSNonNullExpression"===n||"Placeholder"===n&&("Pattern"===e.expectedNode||"Identifier"===e.expectedNode))&&("undefined"===typeof t||(0,r.default)(e,t))}function ii(e,t){if(!e)return!1;const n=e.type;return("Identifier"===n||"TSQualifiedName"===n||"Placeholder"===n&&"Identifier"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function oi(e,t){if(!e)return!1;const n=e.type;return("StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"RegExpLiteral"===n||"TemplateLiteral"===n||"BigIntLiteral"===n||"DecimalLiteral"===n||"Placeholder"===n&&"StringLiteral"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ai(e,t){if(!e)return!1;const n=e.type;return("StringLiteral"===n||"NumericLiteral"===n||"NullLiteral"===n||"BooleanLiteral"===n||"BigIntLiteral"===n||"JSXAttribute"===n||"JSXClosingElement"===n||"JSXElement"===n||"JSXExpressionContainer"===n||"JSXSpreadChild"===n||"JSXOpeningElement"===n||"JSXText"===n||"JSXFragment"===n||"JSXOpeningFragment"===n||"JSXClosingFragment"===n||"DecimalLiteral"===n||"Placeholder"===n&&"StringLiteral"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function ui(e,t){if(!e)return!1;const n=e.type;return("ObjectMethod"===n||"ObjectProperty"===n||"ObjectTypeInternalSlot"===n||"ObjectTypeCallProperty"===n||"ObjectTypeIndexer"===n||"ObjectTypeProperty"===n||"ObjectTypeSpreadProperty"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function si(e,t){if(!e)return!1;const n=e.type;return("ObjectMethod"===n||"ClassMethod"===n||"ClassPrivateMethod"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function li(e,t){if(!e)return!1;const n=e.type;return("ObjectMethod"===n||"ObjectProperty"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ci(e,t){if(!e)return!1;const n=e.type;return("ObjectProperty"===n||"ClassProperty"===n||"ClassAccessorProperty"===n||"ClassPrivateProperty"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function fi(e,t){if(!e)return!1;const n=e.type;return("UnaryExpression"===n||"SpreadElement"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function pi(e,t){if(!e)return!1;const n=e.type;return("AssignmentPattern"===n||"ArrayPattern"===n||"ObjectPattern"===n||"Placeholder"===n&&"Pattern"===e.expectedNode)&&("undefined"===typeof t||(0,r.default)(e,t))}function di(e,t){if(!e)return!1;const n=e.type;return("ClassExpression"===n||"ClassDeclaration"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function yi(e,t){if(!e)return!1;const n=e.type;return("ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n||"ImportDeclaration"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function mi(e,t){if(!e)return!1;const n=e.type;return("ExportAllDeclaration"===n||"ExportDefaultDeclaration"===n||"ExportNamedDeclaration"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function hi(e,t){if(!e)return!1;const n=e.type;return("ExportSpecifier"===n||"ImportDefaultSpecifier"===n||"ImportNamespaceSpecifier"===n||"ImportSpecifier"===n||"ExportNamespaceSpecifier"===n||"ExportDefaultSpecifier"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function vi(e,t){if(!e)return!1;const n=e.type;return"ClassAccessorProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function gi(e,t){if(!e)return!1;const n=e.type;return("ClassPrivateProperty"===n||"ClassPrivateMethod"===n||"PrivateName"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ti(e,t){if(!e)return!1;const n=e.type;return("AnyTypeAnnotation"===n||"ArrayTypeAnnotation"===n||"BooleanTypeAnnotation"===n||"BooleanLiteralTypeAnnotation"===n||"NullLiteralTypeAnnotation"===n||"ClassImplements"===n||"DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"DeclaredPredicate"===n||"ExistsTypeAnnotation"===n||"FunctionTypeAnnotation"===n||"FunctionTypeParam"===n||"GenericTypeAnnotation"===n||"InferredPredicate"===n||"InterfaceExtends"===n||"InterfaceDeclaration"===n||"InterfaceTypeAnnotation"===n||"IntersectionTypeAnnotation"===n||"MixedTypeAnnotation"===n||"EmptyTypeAnnotation"===n||"NullableTypeAnnotation"===n||"NumberLiteralTypeAnnotation"===n||"NumberTypeAnnotation"===n||"ObjectTypeAnnotation"===n||"ObjectTypeInternalSlot"===n||"ObjectTypeCallProperty"===n||"ObjectTypeIndexer"===n||"ObjectTypeProperty"===n||"ObjectTypeSpreadProperty"===n||"OpaqueType"===n||"QualifiedTypeIdentifier"===n||"StringLiteralTypeAnnotation"===n||"StringTypeAnnotation"===n||"SymbolTypeAnnotation"===n||"ThisTypeAnnotation"===n||"TupleTypeAnnotation"===n||"TypeofTypeAnnotation"===n||"TypeAlias"===n||"TypeAnnotation"===n||"TypeCastExpression"===n||"TypeParameter"===n||"TypeParameterDeclaration"===n||"TypeParameterInstantiation"===n||"UnionTypeAnnotation"===n||"Variance"===n||"VoidTypeAnnotation"===n||"EnumDeclaration"===n||"EnumBooleanBody"===n||"EnumNumberBody"===n||"EnumStringBody"===n||"EnumSymbolBody"===n||"EnumBooleanMember"===n||"EnumNumberMember"===n||"EnumStringMember"===n||"EnumDefaultedMember"===n||"IndexedAccessType"===n||"OptionalIndexedAccessType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function bi(e,t){if(!e)return!1;const n=e.type;return("AnyTypeAnnotation"===n||"ArrayTypeAnnotation"===n||"BooleanTypeAnnotation"===n||"BooleanLiteralTypeAnnotation"===n||"NullLiteralTypeAnnotation"===n||"ExistsTypeAnnotation"===n||"FunctionTypeAnnotation"===n||"GenericTypeAnnotation"===n||"InterfaceTypeAnnotation"===n||"IntersectionTypeAnnotation"===n||"MixedTypeAnnotation"===n||"EmptyTypeAnnotation"===n||"NullableTypeAnnotation"===n||"NumberLiteralTypeAnnotation"===n||"NumberTypeAnnotation"===n||"ObjectTypeAnnotation"===n||"StringLiteralTypeAnnotation"===n||"StringTypeAnnotation"===n||"SymbolTypeAnnotation"===n||"ThisTypeAnnotation"===n||"TupleTypeAnnotation"===n||"TypeofTypeAnnotation"===n||"UnionTypeAnnotation"===n||"VoidTypeAnnotation"===n||"IndexedAccessType"===n||"OptionalIndexedAccessType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Si(e,t){if(!e)return!1;const n=e.type;return("AnyTypeAnnotation"===n||"BooleanTypeAnnotation"===n||"NullLiteralTypeAnnotation"===n||"MixedTypeAnnotation"===n||"EmptyTypeAnnotation"===n||"NumberTypeAnnotation"===n||"StringTypeAnnotation"===n||"SymbolTypeAnnotation"===n||"ThisTypeAnnotation"===n||"VoidTypeAnnotation"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ei(e,t){if(!e)return!1;const n=e.type;return("DeclareClass"===n||"DeclareFunction"===n||"DeclareInterface"===n||"DeclareModule"===n||"DeclareModuleExports"===n||"DeclareTypeAlias"===n||"DeclareOpaqueType"===n||"DeclareVariable"===n||"DeclareExportDeclaration"===n||"DeclareExportAllDeclaration"===n||"InterfaceDeclaration"===n||"OpaqueType"===n||"TypeAlias"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function xi(e,t){if(!e)return!1;const n=e.type;return("DeclaredPredicate"===n||"InferredPredicate"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function _i(e,t){if(!e)return!1;const n=e.type;return("EnumBooleanBody"===n||"EnumNumberBody"===n||"EnumStringBody"===n||"EnumSymbolBody"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function wi(e,t){if(!e)return!1;const n=e.type;return("EnumBooleanMember"===n||"EnumNumberMember"===n||"EnumStringMember"===n||"EnumDefaultedMember"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ai(e,t){if(!e)return!1;const n=e.type;return("JSXAttribute"===n||"JSXClosingElement"===n||"JSXElement"===n||"JSXEmptyExpression"===n||"JSXExpressionContainer"===n||"JSXSpreadChild"===n||"JSXIdentifier"===n||"JSXMemberExpression"===n||"JSXNamespacedName"===n||"JSXOpeningElement"===n||"JSXSpreadAttribute"===n||"JSXText"===n||"JSXFragment"===n||"JSXOpeningFragment"===n||"JSXClosingFragment"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Pi(e,t){if(!e)return!1;const n=e.type;return("Noop"===n||"Placeholder"===n||"V8IntrinsicIdentifier"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Oi(e,t){if(!e)return!1;const n=e.type;return("TSParameterProperty"===n||"TSDeclareFunction"===n||"TSDeclareMethod"===n||"TSQualifiedName"===n||"TSCallSignatureDeclaration"===n||"TSConstructSignatureDeclaration"===n||"TSPropertySignature"===n||"TSMethodSignature"===n||"TSIndexSignature"===n||"TSAnyKeyword"===n||"TSBooleanKeyword"===n||"TSBigIntKeyword"===n||"TSIntrinsicKeyword"===n||"TSNeverKeyword"===n||"TSNullKeyword"===n||"TSNumberKeyword"===n||"TSObjectKeyword"===n||"TSStringKeyword"===n||"TSSymbolKeyword"===n||"TSUndefinedKeyword"===n||"TSUnknownKeyword"===n||"TSVoidKeyword"===n||"TSThisType"===n||"TSFunctionType"===n||"TSConstructorType"===n||"TSTypeReference"===n||"TSTypePredicate"===n||"TSTypeQuery"===n||"TSTypeLiteral"===n||"TSArrayType"===n||"TSTupleType"===n||"TSOptionalType"===n||"TSRestType"===n||"TSNamedTupleMember"===n||"TSUnionType"===n||"TSIntersectionType"===n||"TSConditionalType"===n||"TSInferType"===n||"TSParenthesizedType"===n||"TSTypeOperator"===n||"TSIndexedAccessType"===n||"TSMappedType"===n||"TSLiteralType"===n||"TSExpressionWithTypeArguments"===n||"TSInterfaceDeclaration"===n||"TSInterfaceBody"===n||"TSTypeAliasDeclaration"===n||"TSInstantiationExpression"===n||"TSAsExpression"===n||"TSTypeAssertion"===n||"TSEnumDeclaration"===n||"TSEnumMember"===n||"TSModuleDeclaration"===n||"TSModuleBlock"===n||"TSImportType"===n||"TSImportEqualsDeclaration"===n||"TSExternalModuleReference"===n||"TSNonNullExpression"===n||"TSExportAssignment"===n||"TSNamespaceExportDeclaration"===n||"TSTypeAnnotation"===n||"TSTypeParameterInstantiation"===n||"TSTypeParameterDeclaration"===n||"TSTypeParameter"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ni(e,t){if(!e)return!1;const n=e.type;return("TSCallSignatureDeclaration"===n||"TSConstructSignatureDeclaration"===n||"TSPropertySignature"===n||"TSMethodSignature"===n||"TSIndexSignature"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Ii(e,t){if(!e)return!1;const n=e.type;return("TSAnyKeyword"===n||"TSBooleanKeyword"===n||"TSBigIntKeyword"===n||"TSIntrinsicKeyword"===n||"TSNeverKeyword"===n||"TSNullKeyword"===n||"TSNumberKeyword"===n||"TSObjectKeyword"===n||"TSStringKeyword"===n||"TSSymbolKeyword"===n||"TSUndefinedKeyword"===n||"TSUnknownKeyword"===n||"TSVoidKeyword"===n||"TSThisType"===n||"TSFunctionType"===n||"TSConstructorType"===n||"TSTypeReference"===n||"TSTypePredicate"===n||"TSTypeQuery"===n||"TSTypeLiteral"===n||"TSArrayType"===n||"TSTupleType"===n||"TSOptionalType"===n||"TSRestType"===n||"TSUnionType"===n||"TSIntersectionType"===n||"TSConditionalType"===n||"TSInferType"===n||"TSParenthesizedType"===n||"TSTypeOperator"===n||"TSIndexedAccessType"===n||"TSMappedType"===n||"TSLiteralType"===n||"TSExpressionWithTypeArguments"===n||"TSImportType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function ji(e,t){if(!e)return!1;const n=e.type;return("TSAnyKeyword"===n||"TSBooleanKeyword"===n||"TSBigIntKeyword"===n||"TSIntrinsicKeyword"===n||"TSNeverKeyword"===n||"TSNullKeyword"===n||"TSNumberKeyword"===n||"TSObjectKeyword"===n||"TSStringKeyword"===n||"TSSymbolKeyword"===n||"TSUndefinedKeyword"===n||"TSUnknownKeyword"===n||"TSVoidKeyword"===n||"TSThisType"===n||"TSLiteralType"===n)&&("undefined"===typeof t||(0,r.default)(e,t))}function Di(e,t){if(console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),!e)return!1;const n=e.type;return"NumberLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Li(e,t){if(console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),!e)return!1;const n=e.type;return"RegexLiteral"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Mi(e,t){if(console.trace("The node type RestProperty has been renamed to RestElement"),!e)return!1;const n=e.type;return"RestProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}function Ci(e,t){if(console.trace("The node type SpreadProperty has been renamed to SpreadElement"),!e)return!1;const n=e.type;return"SpreadProperty"===n&&("undefined"===typeof t||(0,r.default)(e,t))}},90053:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var r=n(45113),i=n(11920),o=n(51015),a=n(92321);function u(e,t,n){if(!t)return!1;const u=(0,i.default)(t.type,e);return u?"undefined"===typeof n||(0,r.default)(t,n):!n&&"Placeholder"===t.type&&e in a.FLIPPED_ALIAS_KEYS&&(0,o.default)(t.expectedNode,e)}},32957:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(97980);function i(e,t,n){if(n&&"Identifier"===e.type&&"ObjectProperty"===t.type&&"ObjectExpression"===n.type)return!1;const i=r.default.keys[t.type];if(i)for(let r=0;r<i.length;r++){const n=i[r],o=t[n];if(Array.isArray(o)){if(o.indexOf(e)>=0)return!0}else if(o===e)return!0}return!1}},23980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(72552);function o(e){return(0,r.isFunctionDeclaration)(e)||(0,r.isClassDeclaration)(e)||(0,i.default)(e)}},28476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(11920),i=n(42748);function o(e){return!!(0,r.default)(e.type,"Immutable")||!!(0,i.isIdentifier)(e)&&"undefined"===e.name}},72552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(16591);function o(e){return(0,r.isVariableDeclaration)(e)&&("var"!==e.kind||e[i.BLOCK_SCOPED_SYMBOL])}},86663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e){return!(!e||!r.VISITOR_KEYS[e.type])}},51752:function(e,t,n){"use strict";n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t){if("object"!==typeof e||"object"!==typeof t||null==e||null==t)return e===t;if(e.type!==t.type)return!1;const n=Object.keys(r.NODE_FIELDS[e.type]||e.type),o=r.VISITOR_KEYS[e.type];for(const r of n){if(typeof e[r]!==typeof t[r])return!1;if(null!=e[r]||null!=t[r]){if(null==e[r]||null==t[r])return!1;if(Array.isArray(e[r])){if(!Array.isArray(t[r]))return!1;if(e[r].length!==t[r].length)return!1;for(let n=0;n<e[r].length;n++)if(!i(e[r][n],t[r][n]))return!1}else if("object"!==typeof e[r]||null!=o&&o.includes(r)){if(!i(e[r],t[r]))return!1}else for(const n of Object.keys(e[r]))if(e[r][n]!==t[r][n])return!1}}return!0}},51015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t){if(e===t)return!0;const n=r.PLACEHOLDERS_ALIAS[e];if(n)for(const r of n)if(t===r)return!0;return!1}},93504:function(e,t){"use strict";function n(e,t,n){switch(t.type){case"MemberExpression":case"OptionalMemberExpression":return t.property===e?!!t.computed:t.object===e;case"JSXMemberExpression":return t.object===e;case"VariableDeclarator":return t.init===e;case"ArrowFunctionExpression":return t.body===e;case"PrivateName":return!1;case"ClassMethod":case"ClassPrivateMethod":case"ObjectMethod":return t.key===e&&!!t.computed;case"ObjectProperty":return t.key===e?!!t.computed:!n||"ObjectPattern"!==n.type;case"ClassProperty":case"ClassAccessorProperty":return t.key!==e||!!t.computed;case"ClassPrivateProperty":return t.key!==e;case"ClassDeclaration":case"ClassExpression":return t.superClass===e;case"AssignmentExpression":return t.right===e;case"AssignmentPattern":return t.right===e;case"LabeledStatement":return!1;case"CatchClause":return!1;case"RestElement":return!1;case"BreakStatement":case"ContinueStatement":return!1;case"FunctionDeclaration":case"FunctionExpression":return!1;case"ExportNamespaceSpecifier":case"ExportDefaultSpecifier":return!1;case"ExportSpecifier":return(null==n||!n.source)&&t.local===e;case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"ImportSpecifier":return!1;case"ImportAttribute":return!1;case"JSXAttribute":return!1;case"ObjectPattern":case"ArrayPattern":return!1;case"MetaProperty":return!1;case"ObjectTypeProperty":return t.key!==e;case"TSEnumMember":return t.id!==e;case"TSPropertySignature":return t.key!==e||!!t.computed}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},63948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e,t){return(!(0,r.isBlockStatement)(e)||!(0,r.isFunction)(t)&&!(0,r.isCatchClause)(t))&&(!(!(0,r.isPattern)(e)||!(0,r.isFunction)(t)&&!(0,r.isCatchClause)(t))||(0,r.isScopable)(e))}},74956:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e){return(0,r.isImportDefaultSpecifier)(e)||(0,r.isIdentifier)(e.imported||e.exported,{name:"default"})}},11920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(92321);function i(e,t){if(e===t)return!0;if(r.ALIAS_KEYS[t])return!1;const n=r.FLIPPED_ALIAS_KEYS[t];if(n){if(n[0]===e)return!0;for(const t of n)if(e===t)return!0}return!1}},87584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(3994);const i=new Set(["abstract","boolean","byte","char","double","enum","final","float","goto","implements","int","interface","long","native","package","private","protected","public","short","static","synchronized","throws","transient","volatile"]);function o(e){return(0,r.default)(e)&&!i.has(e)}},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(65502);function i(e,t=!0){return"string"===typeof e&&((!t||!(0,r.isKeyword)(e)&&!(0,r.isStrictReservedWord)(e,!0))&&(0,r.isIdentifierName)(e))}},92027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(42748),i=n(16591);function o(e){return(0,r.isVariableDeclaration)(e,{kind:"var"})&&!e[i.BLOCK_SCOPED_SYMBOL]}},7639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var r=n(42748);function i(e,t,n){if(!(0,r.isMemberExpression)(e))return!1;const i=Array.isArray(t)?t:t.split("."),o=[];let a;for(a=e;(0,r.isMemberExpression)(a);a=a.object)o.push(a.property);if(o.push(a),o.length<i.length)return!1;if(!n&&o.length>i.length)return!1;for(let u=0,s=o.length-1;u<i.length;u++,s--){const e=o[s];let t;if((0,r.isIdentifier)(e))t=e.name;else if((0,r.isStringLiteral)(e))t=e.value;else{if(!(0,r.isThisExpression)(e))return!1;t="this"}if(i[u]!==t)return!1}return!0}},12849:function(e,t){"use strict";function n(e){return!!e&&/^[a-z]/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},95453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(82570);const i=(0,r.default)("React.Component");var o=i;t["default"]=o},93885:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i,t.validateChild=a,t.validateField=o;var r=n(92321);function i(e,t,n){if(!e)return;const i=r.NODE_FIELDS[e.type];if(!i)return;const u=i[t];o(e,t,n,u),a(e,t,n)}function o(e,t,n,r){null!=r&&r.validate&&(r.optional&&null==n||r.validate(e,t,n))}function a(e,t,n){if(null==n)return;const i=r.NODE_PARENT_VALIDATIONS[n.type];i&&i(e,t,n)}},44187:function(e){"use strict";
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
*/var r=n(63226),i=n(44187),o=n(79804),a=n(86914);function u(e){var t=Boolean(e.get&&e.set);return{data:e,accessors:t,getter:t?i:r,setter:t?a:o}}e.exports=u},86914:function(e){"use strict";
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
*/var r=n(44079),i=n(72867),o=n(83033);function a(e,t){var n,a,u,s;for(n=t.length,s=0,u=0;u<n;u++){if(a=t[u],!r(a))return null;e[s]=i(a),e[s+1]=o(a),s+=2}return e}e.exports=a},91940:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(72867),a=n(83033);function u(e){var t,n,u;t=[];while(1){if(n=e.next(),n.done)break;if(u=n.value,r(u)&&u.length>=2)t.push(u[0],u[1]);else{if(!i(u))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+u+"`.");t.push(o(u),a(u))}}return t}e.exports=u},10002:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(72867),a=n(83033);function u(e,t,n){var u,s,l,c;u=[],c=-1;while(1){if(s=e.next(),s.done)break;if(c+=1,l=t.call(n,s.value,c),r(l)&&l.length>=2)u.push(l[0],l[1]);else{if(!i(l))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");u.push(o(l),a(l))}}return u}e.exports=u},19674:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(8461).isPrimitive,i=n(77656),o=n(87247),a=n(63524),u=n(82354),s=n(46114),l=n(83608),c=n(44079),f=n(55688),p=n(65370),d=n(98713),y=n(579),m=n(44532),h=n(15249),v=n(8202),g=n(77075),T=n(72867),b=n(83033),S=n(99006),E=n(25693),x=n(84360),_=n(91940),w=n(10002),A=n(98922),P=2*v.BYTES_PER_ELEMENT,O=d();function N(e){return e instanceof L||"object"===typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"===typeof e._length&&"object"===typeof e._buffer}function I(e){return e===L||"Complex64Array"===e.name}function j(e){return"object"===typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===P/2}function D(e){return"object"===typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===P}function L(){var e,t,n,i;if(t=arguments.length,!(this instanceof L))return 0===t?new L:1===t?new L(arguments[0]):2===t?new L(arguments[0],arguments[1]):new L(arguments[0],arguments[1],arguments[2]);if(0===t)n=new v(0);else if(1===t)if(r(arguments[0]))n=new v(2*arguments[0]);else if(o(arguments[0]))if(n=arguments[0],i=n.length,i&&s(n)&&c(n[0])){if(n=A(new v(2*i),n),null===n){if(!f(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(arguments[0])}}else{if(j(n))n=S(n,0);else if(D(n))n=E(n,0);else if(!f(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(n)}else if(a(arguments[0])){if(n=arguments[0],!p(n.byteLength/P))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+P+". Byte length: `"+n.byteLength+"`.");n=new v(n)}else{if(!u(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(n=arguments[0],!1===O)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+n+"`.");if(!l(n[y]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+n+"`.");if(n=n[y](),!l(n.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(n=_(n),n instanceof Error)throw n;n=new v(n)}else{if(n=arguments[0],!a(n))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+n+"`.");if(e=arguments[1],!r(e))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!p(e/P))throw new RangeError("invalid argument. Byte offset must be a multiple of "+P+". Value: `"+e+"`.");if(2===t){if(i=n.byteLength-e,!p(i/P))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+P+". View byte length: `"+i+"`.");n=new v(n,e)}else{if(i=arguments[2],!r(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*P>n.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*P+"`.");n=new v(n,e,2*i)}}return m(this,"_buffer",n),m(this,"_length",n.length/2),this}m(L,"BYTES_PER_ELEMENT",P),m(L,"name","Complex128Array"),m(L,"from",(function(e){var t,n,r,a,s,p,d,m,h,v,g;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=arguments.length,n>1){if(r=arguments[1],!l(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");n>2&&(t=arguments[2])}if(N(e)){if(d=e.length,r){for(a=new this(d),s=a._buffer,g=0,v=0;v<d;v++){if(h=r.call(t,e.get(v),v),c(h))s[g]=T(h),s[g+1]=b(h);else{if(!(i(h)&&h.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+h+"`.");s[g]=h[0],s[g+1]=h[1]}g+=2}return a}return new this(e)}if(o(e)){if(r){for(d=e.length,p=x(e),v=0;v<d;v++)if(!c(p.getter(e,v))){m=!0;break}if(m){if(!f(d))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+d+"`.");for(a=new this(d/2),s=a._buffer,v=0;v<d;v++)s[v]=r.call(t,p.getter(e,v),v);return a}for(a=new this(d),s=a._buffer,g=0,v=0;v<d;v++){if(h=r.call(t,p.getter(e,v),v),c(h))s[g]=T(h),s[g+1]=b(h);else{if(!(i(h)&&h.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+h+"`.");s[g]=h[0],s[g+1]=h[1]}g+=2}return a}return new this(e)}if(u(e)&&O&&l(e[y])){if(s=e[y](),!l(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(p=r?w(s,r,t):_(s),p instanceof Error)throw p;for(d=p.length/2,a=new this(d),s=a._buffer,v=0;v<d;v++)s[v]=p[v];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),m(L,"of",(function(){var e,t;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)})),h(L.prototype,"buffer",(function(){return this._buffer.buffer})),h(L.prototype,"byteLength",(function(){return this._buffer.byteLength})),h(L.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),m(L.prototype,"BYTES_PER_ELEMENT",L.BYTES_PER_ELEMENT),m(L.prototype,"copyWithin",(function(e,t){if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*t):this._buffer.copyWithin(2*e,2*t,2*arguments[2]),this})),m(L.prototype,"entries",(function(){var e,t,n,r,i,o,a;if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,r=this._length,o=-1,a=-2,n={},m(n,"next",u),m(n,"return",s),y&&m(n,y,l),n;function u(){var t;return o+=1,i||o>=r?{done:!0}:(a+=2,t=new g(e[a],e[a+1]),{value:[o,t],done:!1})}function s(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return t.entries()}})),m(L.prototype,"get",(function(e){var t;if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new g(t[e],t[e+1])})),h(L.prototype,"length",(function(){return this._length})),m(L.prototype,"set",(function(e){var t,n,i,a,u,s,l,p,d;if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!r(n))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+n+"`.")}else n=0;if(c(e)){if(n>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+n+"`.");return n*=2,i[n]=T(e),void(i[n+1]=b(e))}if(N(e)){if(s=e._length,n+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,d=i.byteOffset+n*P,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(t.length),p=0;p<t.length;p++)a[p]=t[p];t=a}for(n*=2,d=0,p=0;p<s;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2}else{if(!o(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(s=e.length,p=0;p<s;p++)if(!c(e[p])){u=!0;break}if(u){if(!f(s))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+s+"`.");if(n+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,d=i.byteOffset+n*P,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(s),p=0;p<s;p++)a[p]=t[p];t=a}for(n*=2,s/=2,d=0,p=0;p<s;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2;return}if(n+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,p=0;p<s;p++)l=e[p],i[n]=T(l),i[n+1]=b(l),n+=2}})),e.exports=L},18442:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(44079),i=n(78154),o=n(72337);function a(e,t){var n,a,u,s;for(n=t.length,s=0,u=0;u<n;u++){if(a=t[u],!r(a))return null;e[s]=i(a),e[s+1]=o(a),s+=2}return e}e.exports=a},40308:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(78154),a=n(72337);function u(e){var t,n,u;t=[];while(1){if(n=e.next(),n.done)break;if(u=n.value,r(u)&&u.length>=2)t.push(u[0],u[1]);else{if(!i(u))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+u+"`.");t.push(o(u),a(u))}}return t}e.exports=u},90233:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(77656),i=n(44079),o=n(78154),a=n(72337);function u(e,t,n){var u,s,l,c;u=[],c=-1;while(1){if(s=e.next(),s.done)break;if(c+=1,l=t.call(n,s.value,c),r(l)&&l.length>=2)u.push(l[0],l[1]);else{if(!i(l))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");u.push(o(l),a(l))}}return u}e.exports=u},69428:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(8461).isPrimitive,i=n(77656),o=n(87247),a=n(63524),u=n(82354),s=n(46114),l=n(83608),c=n(44079),f=n(55688),p=n(65370),d=n(98713),y=n(579),m=n(44532),h=n(15249),v=n(51211),g=n(27191),T=n(78154),b=n(72337),S=n(99006),E=n(25693),x=n(84360),_=n(40308),w=n(90233),A=n(18442),P=2*v.BYTES_PER_ELEMENT,O=d();function N(e){return e instanceof L||"object"===typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"===typeof e._length&&"object"===typeof e._buffer}function I(e){return e===L||"Complex128Array"===e.name}function j(e){return"object"===typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===P}function D(e){return"object"===typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*P}function L(){var e,t,n,i;if(t=arguments.length,!(this instanceof L))return 0===t?new L:1===t?new L(arguments[0]):2===t?new L(arguments[0],arguments[1]):new L(arguments[0],arguments[1],arguments[2]);if(0===t)n=new v(0);else if(1===t)if(r(arguments[0]))n=new v(2*arguments[0]);else if(o(arguments[0]))if(n=arguments[0],i=n.length,i&&s(n)&&c(n[0])){if(n=A(new v(2*i),n),null===n){if(!f(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(arguments[0])}}else{if(j(n))n=S(n,0);else if(D(n))n=E(n,0);else if(!f(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");n=new v(n)}else if(a(arguments[0])){if(n=arguments[0],!p(n.byteLength/P))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+P+". Byte length: `"+n.byteLength+"`.");n=new v(n)}else{if(!u(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(n=arguments[0],!1===O)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+n+"`.");if(!l(n[y]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+n+"`.");if(n=n[y](),!l(n.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(n=_(n),n instanceof Error)throw n;n=new v(n)}else{if(n=arguments[0],!a(n))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+n+"`.");if(e=arguments[1],!r(e))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!p(e/P))throw new RangeError("invalid argument. Byte offset must be a multiple of "+P+". Value: `"+e+"`.");if(2===t){if(i=n.byteLength-e,!p(i/P))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+P+". View byte length: `"+i+"`.");n=new v(n,e)}else{if(i=arguments[2],!r(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*P>n.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*P+"`.");n=new v(n,e,2*i)}}return m(this,"_buffer",n),m(this,"_length",n.length/2),this}m(L,"BYTES_PER_ELEMENT",P),m(L,"name","Complex64Array"),m(L,"from",(function(e){var t,n,r,a,s,p,d,m,h,v,g;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=arguments.length,n>1){if(r=arguments[1],!l(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");n>2&&(t=arguments[2])}if(N(e)){if(d=e.length,r){for(a=new this(d),s=a._buffer,g=0,v=0;v<d;v++){if(h=r.call(t,e.get(v),v),c(h))s[g]=T(h),s[g+1]=b(h);else{if(!(i(h)&&h.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+h+"`.");s[g]=h[0],s[g+1]=h[1]}g+=2}return a}return new this(e)}if(o(e)){if(r){for(d=e.length,p=x(e),v=0;v<d;v++)if(!c(p.getter(e,v))){m=!0;break}if(m){if(!f(d))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+d+"`.");for(a=new this(d/2),s=a._buffer,v=0;v<d;v++)s[v]=r.call(t,p.getter(e,v),v);return a}for(a=new this(d),s=a._buffer,g=0,v=0;v<d;v++){if(h=r.call(t,p.getter(e,v),v),c(h))s[g]=T(h),s[g+1]=b(h);else{if(!(i(h)&&h.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+h+"`.");s[g]=h[0],s[g+1]=h[1]}g+=2}return a}return new this(e)}if(u(e)&&O&&l(e[y])){if(s=e[y](),!l(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(p=r?w(s,r,t):_(s),p instanceof Error)throw p;for(d=p.length/2,a=new this(d),s=a._buffer,v=0;v<d;v++)s[v]=p[v];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),m(L,"of",(function(){var e,t;if(!l(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!I(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)})),h(L.prototype,"buffer",(function(){return this._buffer.buffer})),h(L.prototype,"byteLength",(function(){return this._buffer.byteLength})),h(L.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),m(L.prototype,"BYTES_PER_ELEMENT",L.BYTES_PER_ELEMENT),m(L.prototype,"copyWithin",(function(e,t){if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*t):this._buffer.copyWithin(2*e,2*t,2*arguments[2]),this})),m(L.prototype,"entries",(function(){var e,t,n,r,i,o,a;if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,r=this._length,o=-1,a=-2,n={},m(n,"next",u),m(n,"return",s),y&&m(n,y,l),n;function u(){var t;return o+=1,i||o>=r?{done:!0}:(a+=2,t=new g(e[a],e[a+1]),{value:[o,t],done:!1})}function s(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return t.entries()}})),m(L.prototype,"get",(function(e){var t;if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new g(t[e],t[e+1])})),h(L.prototype,"length",(function(){return this._length})),m(L.prototype,"set",(function(e){var t,n,i,a,u,s,l,p,d;if(!N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!r(n))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+n+"`.")}else n=0;if(c(e)){if(n>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+n+"`.");return n*=2,i[n]=T(e),void(i[n+1]=b(e))}if(N(e)){if(s=e._length,n+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,d=i.byteOffset+n*P,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(t.length),p=0;p<t.length;p++)a[p]=t[p];t=a}for(n*=2,d=0,p=0;p<s;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2}else{if(!o(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(s=e.length,p=0;p<s;p++)if(!c(e[p])){u=!0;break}if(u){if(!f(s))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+s+"`.");if(n+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,d=i.byteOffset+n*P,t.buffer===i.buffer&&t.byteOffset<d&&t.byteOffset+t.byteLength>d){for(a=new v(s),p=0;p<s;p++)a[p]=t[p];t=a}for(n*=2,s/=2,d=0,p=0;p<s;p++)i[n]=t[d],i[n+1]=t[d+1],n+=2,d+=2;return}if(n+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,p=0;p<s;p++)l=e[p],i[n]=T(l),i[n+1]=b(l),n+=2}})),e.exports=L},92082:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(91329),i=n(78658),o=n(62110),a=n(77217),u=n(26863),s=n(24726),l=n(11235),c=n(51211),f=n(8202),p=n(69428),d=n(19674),y=[[f,"Float64Array"],[c,"Float32Array"],[s,"Int32Array"],[l,"Uint32Array"],[a,"Int16Array"],[u,"Uint16Array"],[r,"Int8Array"],[i,"Uint8Array"],[o,"Uint8ClampedArray"],[p,"Complex64Array"],[d,"Complex128Array"]];e.exports=y},40060:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(94941),i=n(83834),o=n(99006),a=n(25693),u=n(14219);function s(e){var t,n,s;if(r(e))t=e;else{if(!i(e))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+e+"`.");t=8===e.BYTES_PER_ELEMENT?o(e,0):a(e,0)}for(n={type:u(e),data:[]},s=0;s<t.length;s++)n.data.push(t[s]);return n}e.exports=s},14219:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(43406),i=n(69276),o=n(19034),a=n(18005);function u(e){var t,n;for(n=0;n<a.length;n++)if(r(e,a[n][0]))return a[n][1];while(e){for(t=i(e),n=0;n<a.length;n++)if(t===a[n][1])return a[n][1];e=o(e)}}e.exports=u},26863:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(40070),i=n(11081),o=n(90399),a=n(4990);function u(){var e,t;if("function"!==typeof a)return!1;try{t=new a([1,3.14,-3.14,i+1]),e=r(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&t[3]===o}catch(n){e=!1}return e}e.exports=u},51895:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(29441),i=n(52619),o=n(86387),a=n(26652);function u(){var e,t;if("function"!==typeof a)return!1;try{t=new a([1,3.14,-3.14,i+1]),e=r(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&t[3]===o}catch(n){e=!1}return e}e.exports=u},4019:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(51652),i=n(2883),o=n(44073),a=n(57535);function u(){var e,t;if("function"!==typeof a)return!1;try{t=new a([1,3.14,-3.14,i+1]),e=r(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&t[3]===o}catch(n){e=!1}return e}e.exports=u},98713:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(75259),i=n(63762),o=n(87175),a=r();function u(e){return"object"===typeof e&&(e instanceof Boolean||(a?o(e):"[object Boolean]"===i(e)))}e.exports=u},18518:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(69276),i=n(19034),o=n(73513),a=n(11713);function u(e){var t,n;if("object"!==typeof e||null===e)return!1;for(n=0;n<o.length;n++)if(e instanceof o[n])return!0;while(e){for(t=r(e),n=0;n<a.length;n++)if(a[n]===t)return!0;e=i(e)}return!1}e.exports=u},51001:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(75259),i=n(63762),o=n(82747),a=n(8759),u=r();function s(e){return"object"===typeof e&&(e instanceof o||(u?a(e):"[object Number]"===i(e)))}e.exports=s},48998:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(82354),i=n(83608),o=n(19034),a=n(92043),u=n(63762),s=Object.prototype;function l(e){var t;for(t in e)if(!a(e,t))return!1;return!0}function c(e){var t;return!!r(e)&&(t=o(e),!t||!a(e,"constructor")&&a(t,"constructor")&&i(t.constructor)&&"[object Function]"===u(t.constructor)&&a(t,"isPrototypeOf")&&i(t.isPrototypeOf)&&(t===s||l(e)))}e.exports=c},21736:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(91329),i=n(78658),o=n(62110),a=n(77217),u=n(26863),s=n(24726),l=n(11235),c=n(51211),f=n(8202),p=[f,c,s,l,a,u,r,i,o];e.exports=p},94941:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(69276),i=n(52546),o=n(19034),a=n(96290),u=n(8202),s=n(75514),l=n(68114),c=a()?o(u):f;function f(){}function p(e){var t,n;if("object"!==typeof e||null===e)return!1;if(e instanceof c)return!0;for(n=0;n<s.length;n++)if(e instanceof s[n])return!0;while(e){for(t=r(e),n=0;n<l.length;n++)if(l[n]===t)return!0;e=o(e)}return!1}c="TypedArray"===i(c)?c:f,e.exports=p},8451:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function t(e,t,n,r,i,o,a){var u,s,l,c,f,p,d;for(u=t.data,s=i.data,c=t.getter,l=i.setter,f=r,p=a,d=0;d<e;d++)l(s,p,c(u,f)),f+=n,p+=o;return t}e.exports=t},31851:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(84360),i=n(57472),o=8;function a(e,t,n,a,u){var s,l,c,f,p,d;if(e<=0)return a;if(c=r(t),f=r(a),c.accessors||f.accessors)return s=n<0?(1-e)*n:0,l=u<0?(1-e)*u:0,i(e,c,n,s,f,u,l),f.data;if(1===n&&1===u){if(p=e%o,p>0)for(d=0;d<p;d++)a[d]=t[d];if(e<o)return a;for(d=p;d<e;d+=o)a[d]=t[d],a[d+1]=t[d+1],a[d+2]=t[d+2],a[d+3]=t[d+3],a[d+4]=t[d+4],a[d+5]=t[d+5],a[d+6]=t[d+6],a[d+7]=t[d+7];return a}for(s=n<0?(1-e)*n:0,l=u<0?(1-e)*u:0,d=0;d<e;d++)a[l]=t[s],s+=n,l+=u;return a}e.exports=a},28434:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=n(84360),i=n(57472),o=8;function a(e,t,n,a,u,s,l){var c,f,p,d,y,m;if(e<=0)return u;if(p=r(t),d=r(u),p.accessors||d.accessors)return i(e,p,n,a,d,s,l),d.data;if(c=a,f=l,1===n&&1===s){if(y=e%o,y>0)for(m=0;m<y;m++)u[f]=t[c],c+=n,f+=s;if(e<o)return u;for(m=y;m<e;m+=o)u[f]=t[c],u[f+1]=t[c+1],u[f+2]=t[c+2],u[f+3]=t[c+3],u[f+4]=t[c+4],u[f+5]=t[c+5],u[f+6]=t[c+6],u[f+7]=t[c+7],c+=o,f+=o;return u}for(m=0;m<e;m++)u[f]=t[c],c+=n,f+=s;return u}e.exports=a},27191:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(63157).isPrimitive,i=n(31265),o=n(44532),a=n(15112),u=n(73406),s=n(69847);function l(e,t){if(!(this instanceof l))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!r(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return i(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:a(e)}),i(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:a(t)}),this}o(l,"BYTES_PER_ELEMENT",4),o(l.prototype,"BYTES_PER_ELEMENT",4),o(l.prototype,"byteLength",8),o(l.prototype,"toString",u),o(l.prototype,"toJSON",s),e.exports=l},69847:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(63157).isPrimitive,i=n(31265),o=n(44532),a=n(15260),u=n(14418);function s(e,t){if(!(this instanceof s))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!r(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return i(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),i(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}o(s,"BYTES_PER_ELEMENT",8),o(s.prototype,"BYTES_PER_ELEMENT",8),o(s.prototype,"byteLength",16),o(s.prototype,"toString",a),o(s.prototype,"toJSON",u),e.exports=s},14418:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var t=65535;function n(e,n){var r,i,o,a,u,s;return e>>>=0,n>>>=0,o=e>>>16>>>0,a=n>>>16>>>0,u=(e&t)>>>0,s=(n&t)>>>0,r=u*s>>>0,i=o*s+u*a<<16>>>0,r+i>>>0}e.exports=n},74401:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(32895),i=n(88329),o=n(76486),a=2147483648,u=2147483647,s=[0,0];function l(e,t){var n,l;return r(s,e),n=s[0],n&=u,l=i(t),l&=a,n|=l,o(n,s[1])}e.exports=l},36196:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(20982),i=n(59306),o=n(27311),a=n(95374),u=n(69194),s=n(11088),l=n(53112),c=n(48181),f=n(72279),p=n(62549),d=n(32238),y=n(32895),m=n(76486),h=2220446049250313e-31,v=2148532223,g=[0,0],T=[0,0];function b(e,t){var n,b;return 0===t||0===e||l(e)||c(e)?e:(p(g,e),e=g[0],t+=g[1],t+=d(e),t<s?f(0,e):t>a?e<0?i:r:(t<=u?(t+=52,b=h):b=1,y(T,e),n=T[0],n&=v,n|=t+o<<20,b*m(n,T[1])))}e.exports=b},7454:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(88329),i=n(1287),o=n(53112),a=n(27311),u=n(59306),s=n(27915),l=n(99165),c=.6931471803691238,f=1.9082149292705877e-10,p=0x40000000000000,d=.3333333333333333,y=1048575,m=2146435072,h=1048576,v=1072693248;function g(e){var t,n,g,T,b,S,E,x,_,w,A,P;return 0===e?u:o(e)||e<0?NaN:(n=r(e),b=0,n<h&&(b-=54,e*=p,n=r(e)),n>=m?e+e:(b+=(n>>20)-a|0,n&=y,x=n+614244&1048576|0,e=i(e,n|x^v),b+=x>>20|0,E=e-1,(y&2+n)<3?0===E?0===b?0:b*c+b*f:(S=E*E*(.5-d*E),0===b?E-S:b*c-(S-b*f-E)):(w=E/(2+E),P=w*w,x=n-398458|0,A=P*P,_=440401-n|0,T=A*s(A),g=P*l(A),x|=_,S=g+T,x>0?(t=.5*E*E,0===b?E-(t-w*(t+S)):b*c-(t-(w*(t+S)+b*f)-E)):0===b?E-w*(E-S):b*c-(w*(E-S)-b*f-E))))}e.exports=g},27915:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(64613),i=n(53112),o=n(59306),a=n(20982);function u(e,t){var n,u,s,l;if(n=arguments.length,2===n)return i(e)||i(t)?NaN:e===a||t===a?a:e===t&&0===e?r(e)?e:t:e>t?e:t;for(u=o,l=0;l<n;l++){if(s=arguments[l],i(s)||s===a)return s;(s>u||s===u&&0===s&&r(s))&&(u=s)}return u}e.exports=u},93991:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(88329),i=n(2442),o=n(1287),a=n(27311),u=n(87655),s=1048575,l=1048576,c=1072693248,f=536870912,p=524288,d=20,y=9007199254740992,m=.9617966939259756,h=.9617967009544373,v=-7.028461650952758e-9,g=[1,1.5],T=[0,.5849624872207642],b=[0,1.350039202129749e-8];function S(e,t,n){var S,E,x,_,w,A,P,O,N,I,j,D,L,M,C,k,R,B,F,V,K,Y;return V=0,n<l&&(t*=y,V-=53,n=r(t)),V+=(n>>d)-a|0,K=n&s|0,n=K|c|0,K<=235662?Y=0:K<767610?Y=1:(Y=0,V+=1,n-=l),t=o(t,n),O=g[Y],B=t-O,F=1/(t+O),E=B*F,_=i(E,0),S=(n>>1|f)+p,S+=Y<<18,A=o(0,S),P=t-(A-O),w=F*(B-_*A-_*P),x=E*E,R=x*x*u(x),R+=w*(_+E),x=_*_,A=3+x+R,A=i(A,0),P=R-(A-3-x),B=_*A,F=w*A+P*E,I=B+F,I=i(I,0),j=F-(I-B),D=h*I,L=v*I+j*m+b[Y],N=T[Y],k=V,M=D+L+N+k,M=i(M,0),C=L-(M-k-N-D),e[0]=M,e[1]=C,e}e.exports=S},3117:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(2442),i=n(38942),o=1.4426950408889634,a=1.4426950216293335,u=1.9259629911266175e-8;function s(e,t){var n,s,l,c,f,p;return l=t-1,c=l*l*i(l),f=a*l,p=l*u-c*o,s=f+p,s=r(s,0),n=p-(s-f),e[0]=s,e[1]=n,e}e.exports=s},87655:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(53112),i=n(41579),o=n(48181),a=n(65370),u=n(37372),s=n(74401),l=n(32895),c=n(2442),f=n(83213),p=n(59306),d=n(20982),y=n(17209),m=n(88035),h=n(86129),v=n(82453),g=n(3117),T=n(84534),b=2147483647,S=1072693247,E=1105199104,x=1139802112,_=1083179008,w=1072693248,A=1083231232,P=3230714880,O=31,N=1e300,I=1e-300,j=8008566259537294e-32,D=[0,0],L=[0,0];function M(e,t){var n,C,k,R,B,F,V,K,Y,U,J,q,X,W,$,z;if(r(e)||r(t))return NaN;if(l(D,t),F=D[0],V=D[1],0===V){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return u(e);if(-.5===t)return 1/u(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return e*=e,e*e;if(o(t))return h(e,t)}if(l(D,e),R=D[0],B=D[1],0===B){if(0===R)return y(e,t);if(1===e)return 1;if(-1===e&&i(t))return-1;if(o(e))return e===p?M(-0,-t):t<0?0:d}if(e<0&&!1===a(t))return(e-e)/(e-e);if(k=s(e),n=R&b|0,C=F&b|0,K=R>>>O|0,Y=F>>>O|0,K=K&&i(t)?-1:1,C>E){if(C>x)return m(e,t);if(n<S)return 1===Y?K*N*N:K*I*I;if(n>w)return 0===Y?K*N*N:K*I*I;X=g(L,k)}else X=v(L,k,n);if(U=c(t,0),q=(t-U)*X[0]+t*X[1],J=U*X[0],W=q+J,l(D,W),$=f(D[0]),z=f(D[1]),$>=_){if(0!==($-_|z))return K*N*N;if(q+j>W-J)return K*N*N}else if(($&b)>=A){if(0!==($-P|z))return K*I*I;if(q<=W-J)return K*I*I}return W=T($,J,q),K*W}e.exports=M},84534:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(88329),i=n(1287),o=n(2442),a=n(83213),u=n(33035),s=n(43856),l=n(27311),c=n(7190),f=2147483647,p=1048575,d=1048576,y=1071644672,m=20,h=.6931471824645996,v=-1.904654299957768e-9;function g(e,t,n){var g,T,b,S,E,x,_,w,A,P,O;return P=e&f|0,O=(P>>m)-l|0,A=0,P>y&&(A=e+(d>>O+1)>>>0,O=((A&f)>>m)-l|0,g=(A&~(p>>O))>>>0,b=i(0,g),A=(A&p|d)>>m-O>>>0,e<0&&(A=-A),t-=b),b=n+t,b=o(b,0),E=b*h,x=(n-(b-t))*s+b*v,w=E+x,_=x-(w-E),b=w*w,T=w-b*c(b),S=w*T/(T-2)-(_+w*_),w=1-(S-w),e=r(w),e=a(e),e+=A<<m>>>0,w=e>>m<=0?u(w,A):i(w,e),w}e.exports=g},17209:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(41579),i=n(72279),o=n(59306),a=n(20982);function u(e,t){return t===o?a:t===a?0:t>0?r(t)?e:0:r(t)?i(a,e):a}e.exports=u},88035:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(88329),i=2147483647,o=1072693247,a=1e300,u=1e-300;function s(e,t){var n,s;return s=r(e),n=s&i,n<=o?t<0?a*a:u*u:t>0?a*a:u*u}e.exports=s},86129:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(11235),i=n(8202),o=n(47681),a=new i(1),u=new r(a.buffer),s=o.HIGH,l=o.LOW;function c(e,t){return u[s]=e,u[l]=t,a[0]}e.exports=c},67473:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(11235),i=n(8202),o=n(67473),a=new i(1),u=new r(a.buffer);function s(e){return a[0]=e,u[o]}e.exports=s},62549:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(94856),i=n(48181),o=n(53112),a=n(74401),u=4503599627370496;function s(e,t){return o(t)||i(t)?(e[0]=t,e[1]=0,e):0!==t&&a(t)<r?(e[0]=t*u,e[1]=-52,e):(e[0]=t,e[1]=0,e)}e.exports=s},88789:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(11235),i=n(8202),o=n(88789),a=new i(1),u=new r(a.buffer);function s(e,t){return a[0]=e,u[o]=t>>>0,a[0]}e.exports=s},2442:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(11235),i=n(8202),o=n(47773),a=new i(1),u=new r(a.buffer);function s(e,t){return a[0]=e,u[o]=t>>>0,a[0]}e.exports=s},15112:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(11235),i=n(8202),o=n(74256),a=new i(1),u=new r(a.buffer),s=o.HIGH,l=o.LOW;function c(e,t){return a[0]=t,e[0]=u[s],e[1]=u[l],e}e.exports=c},83213:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(93991),i=1/12,o=1/360,a=1/1260;function u(e){var t;switch(e){case 0:return.08106146679532726;case 1:return.04134069595540929;case 2:return.02767792568499834;case 3:return.02079067210376509;case 4:return.01664469118982119;case 5:return.01387612882307075;case 6:return.01189670994589177;case 7:return.01041126526197209;case 8:return.009255462182712733;case 9:return.00833056343336287;default:return e+=1,t=r(e,2),(i-(o-a/t)/t)/e}}e.exports=u},28593:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(44532),i=n(15249),o=n(62287),a=n(20906),u=n(83608),s=n(92043),l=n(14978),c=n(73962),f=n(53112),p=n(35004),d=n(15430),y=n(26376).factory,m=n(40060),h=n(54138),v=n(27389);function g(){var e,t,n,g,T,b;if(0===arguments.length)t=y();else if(1===arguments.length){if(e=arguments[0],!a(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!u(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y(e)}else{if(T=arguments[0],b=arguments[1],g=h(T,b),g)throw g;if(arguments.length>2){if(e=arguments[2],!a(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!u(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y(e)}else t=y()}return n=void 0===T?N:O,r(n,"NAME","binomial"),e&&e.prng?(r(n,"seed",null),r(n,"seedLength",null),o(n,"state",l(null),c),r(n,"stateLength",null),r(n,"byteLength",null),r(n,"toJSON",l(null)),r(n,"PRNG",t)):(i(n,"seed",S),i(n,"seedLength",E),o(n,"state",w,A),i(n,"stateLength",x),i(n,"byteLength",_),r(n,"toJSON",P),r(n,"PRNG",t),t=t.normalized),n;function S(){return t.seed}function E(){return t.seedLength}function x(){return t.stateLength}function _(){return t.byteLength}function w(){return t.state}function A(e){t.state=e}function P(){var e={type:"PRNG"};return e.name=n.NAME,e.state=m(t.state),e.params=void 0===T?[]:[T,b],e}function O(){return v(t,T,b)}function N(e,n){return f(e)||f(n)||!p(e)||!d(n)?NaN:v(t,e,n)}}e.exports=g},38242:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(36196),i=n(78770),o=n(37372),a=n(74401),u=n(7454),s=n(1671),l=1/6;function c(e,t,n){var c,f,p,d,y,m,h,v,g,T,b,S,E,x,_,w,A,P,O,N,I,j,D,L,M,C;N=r((t+1)*n),h=t-N+1,I=1-n,j=n/I,v=(t+1)*j,d=t*n*I,p=o(d),x=1.15+2.53*p,E=.0248*x-.0873+.01*n,_=t*n+.5,c=(2.83+5.1/x)*p,S=.92-4.2/x,f=.86*S,A=(N+.5)*u((N+1)/(j*h)),A+=s(N)+s(t-N);while(1){if(M=e(),M<=f)return L=M/S-.43,j=L*(2*E/(.5-a(L))+x)+_,r(j);if(M>=S?L=e()-.5:(L=M/S-.93,L=.5*i(L)-L,M=S*e()),g=.5-a(L),O=r(L*(2*E/g+x)+_),!(O<0||O>t))if(M=M*c/(E/(g*g)+x),T=a(O-N),T>15){if(M=u(M),y=T/d,m=(T/3+.625)*T,m+=l,m/=d,y*=m+.5,D=-T*T/(2*d),M<D-y)return O;if(M<=D+y&&(b=t-O+1,C=A+(t+1)*u(h/b),C+=(O+.5)*u(b*j/(O+1)),C+=-(s(O)+s(t-O)),M<=C))return O}else{if(w=1,N<O)for(P=N;P<=O;P++)w*=v/P-j;else if(N>O)for(P=O;P<=N;P++)M*=v/P-j;if(M<=w)return O}}}e.exports=c},54138:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(44532),i=n(15249),o=n(62287),a=n(92043),u=n(20906),s=n(87247),l=n(11327),c=n(80248).isPrimitive,f=n(21736).isPrimitive,p=n(90366),d=n(74201),y=n(11235),m=n(3516),h=n(28922),v=n(31851),g=n(40060),T=n(16770),b=624,S=397,E=d>>>0,x=19650218,_=2147483648,w=2147483647,A=1812433253,P=1664525,O=1566083941,N=2636928640,I=4022730752,j=2567483615,D=[0,j>>>0],L=1/(p+1),M=67108864,C=2147483648,k=1,R=p*L,B=1,F=3,V=2,K=b+3,Y=b+5,U=b+6;function J(e,t){var n;return n=t?"option":"argument",e.length<U+1?new RangeError("invalid "+n+". `state` array has insufficient length."):e[0]!==B?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: "+B+". Actual: "+e[0]+"."):e[1]!==F?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: "+F+". Actual: "+e[1]+"."):e[V]!==b?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+b+". Actual: "+e[V]+"."):1!==e[K]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+e[K]+"."):e[Y]!==e.length-U?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(e.length-U)+". Actual: "+e[Y]+"."):null}function q(e,t,n){var r;for(e[0]=n>>>0,r=1;r<t;r++)n=e[r-1]>>>0,n=(n^n>>>30)>>>0,e[r]=h(n,A)+r>>>0;return e}function X(e,t,n,r){var i,o,a,u;for(o=1,a=0,u=m(t,r);u>0;u--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=h(i,P)>>>0,e[o]=(e[o]>>>0^i)+n[a]+a>>>0,o+=1,a+=1,o>=t&&(e[0]=e[t-1],o=1),a>=r&&(a=0);for(u=t-1;u>0;u--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=h(i,O)>>>0,e[o]=(e[o]>>>0^i)-o>>>0,o+=1,o>=t&&(e[0]=e[t-1],o=1);return e[0]=C,e}function W(e){var t,n,r,i;for(i=b-S,n=0;n<i;n++)t=e[n]&_|e[n+1]&w,e[n]=e[n+S]^t>>>1^D[t&k];for(r=b-1;n<r;n++)t=e[n]&_|e[n+1]&w,e[n]=e[n-i]^t>>>1^D[t&k];return t=e[r]&_|e[0]&w,e[r]=e[S-1]^t>>>1^D[t&k],e}function $(e){var t,n,p,m,h,S;if(p={},arguments.length){if(!u(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(a(e,"copy")&&(p.copy=e.copy,!c(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.");if(a(e,"state")){if(n=e.state,p.state=!0,!l(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(S=J(n,!0),S)throw S;!1===p.copy?t=n:(t=new y(n.length),v(n.length,n,1,t,1)),n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,b),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,n[Y])}if(void 0===m)if(a(e,"seed"))if(m=e.seed,p.seed=!0,f(m)){if(m>E)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");m>>>=0}else{if(!1===s(m)||m.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");if(1===m.length){if(m=m[0],!f(m))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");if(m>E)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+m+"`.");m>>>=0}else h=m.length,t=new y(U+h),t[0]=B,t[1]=F,t[V]=b,t[K]=1,t[K+1]=b,t[Y]=h,v.ndarray(h,m,1,0,t,1,Y+1),n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,b),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,h),n=q(n,b,x),n=X(n,b,m,h)}else m=T()>>>0}else m=T()>>>0;return void 0===n&&(t=new y(U+1),t[0]=B,t[1]=F,t[V]=b,t[K]=1,t[K+1]=b,t[Y]=1,t[Y+1]=m,n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,b),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,1),n=q(n,b,m)),r(C,"NAME","mt19937"),i(C,"seed",_),i(C,"seedLength",w),o(C,"state",O,j),i(C,"stateLength",A),i(C,"byteLength",P),r(C,"toJSON",D),r(C,"MIN",1),r(C,"MAX",d),r(C,"normalized",k),r(k,"NAME",C.NAME),i(k,"seed",_),i(k,"seedLength",w),o(k,"state",O,j),i(k,"stateLength",A),i(k,"byteLength",P),r(k,"toJSON",D),r(k,"MIN",0),r(k,"MAX",R),C;function _(){var e=t[Y];return v(e,m,1,new y(e),1)}function w(){return t[Y]}function A(){return t.length}function P(){return t.byteLength}function O(){var e=t.length;return v(e,t,1,new y(e),1)}function j(e){var r;if(!l(e))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+e+"`.");if(r=J(e,!1),r)throw r;!1===p.copy?p.state&&e.length===t.length?v(e.length,e,1,t,1):(t=e,p.state=!0):(e.length!==t.length&&(t=new y(e.length)),v(e.length,e,1,t,1)),n=new y(t.buffer,t.byteOffset+(V+1)*t.BYTES_PER_ELEMENT,b),m=new y(t.buffer,t.byteOffset+(Y+1)*t.BYTES_PER_ELEMENT,t[Y])}function D(){var e={type:"PRNG"};return e.name=C.NAME,e.state=g(t),e.params=[],e}function C(){var e,r;return r=t[K+1],r>=b&&(n=W(n),r=0),e=n[r],t[K+1]=r+1,e^=e>>>11,e^=e<<7&N,e^=e<<15&I,e^=e>>>18,e>>>0}function k(){var e=C()>>>5,t=C()>>>6;return(e*M+t)*L}}e.exports=$},26376:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=Object.prototype,i=r.toString,o=r.__defineGetter__,a=r.__defineSetter__,u=r.__lookupGetter__,s=r.__lookupSetter__;function l(e,t,n){var l,c,f,p;if("object"!==typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!==typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if(c="value"in n,c&&(u.call(e,t)||s.call(e,t)?(l=e.__proto__,e.__proto__=r,delete e[t],e[t]=n.value,e.__proto__=l):e[t]=n.value),f="get"in n,p="set"in n,c&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,t,n.get),p&&a&&a.call(e,t,n.set),e}e.exports=l},21019:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/n(21703);var r=n(83608),i=n(3262),o=n(9635).REGEXP,a=i();function u(e){if(!1===r(e))throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return a?e.name:o.exec(e.toString())[1]}e.exports=u},52546:function(e,t,n){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/n(21703);var r=n(80248).isPrimitive,i=n(89493),o=n(54590),a=n(21698),u=n(39262);function s(e){if(arguments.length){if(!r(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return i()}if(o)return o;if(a)return a;if(u)return u;throw new Error("unexpected error. Unable to resolve global object.")}e.exports=s},54590:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(92043),i=n(67467),o=n(9256);function a(e){var t,n,a;if(null===e||void 0===e)return o.call(e);n=e[i],t=r(e,i);try{e[i]=void 0}catch(u){return o.call(e)}return a=o.call(e),t?e[i]=n:delete e[i],a}e.exports=a},9256:function(e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r=n(69276);function i(e){var t;return null===e?"null":(t=typeof e,"object"===t?r(e).toLowerCase():t)}e.exports=i},44870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return o},Fl:function(){return Ye},IU:function(){return Oe},Jd:function(){return x},PG:function(){return _e},SU:function(){return Be},Um:function(){return Se},WL:function(){return Ve},X$:function(){return P},X3:function(){return Pe},Xl:function(){return Ne},dq:function(){return Me},iH:function(){return Ce},j:function(){return w},lk:function(){return _},qj:function(){return be},qq:function(){return T},yT:function(){return Ae}});var r=n(87139);let i;class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},s=e=>(e.w&y)>0,l=e=>(e.n&y)>0,c=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=y},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];s(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~y,i.n&=~y}t.length=n}},p=new WeakMap;let d=0,y=1;const m=30;let h;const v=Symbol(""),g=Symbol("");class T{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=h,t=S;while(e){if(e===this)return;e=e.parent}try{return this.parent=h,h=this,S=!0,y=1<<++d,d<=m?c(this):b(this),this.fn()}finally{d<=m&&f(this),y=1<<--d,h=this.parent,S=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){h===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let S=!0;const E=[];function x(){E.push(S),S=!1}function _(){const e=E.pop();S=void 0===e||e}function w(e,t,n){if(S&&h){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const i=void 0;A(r,i)}}function A(e,t){let n=!1;d<=m?l(e)||(e.n|=y,n=!s(e)):n=!e.has(h),n&&(e.add(h),h.deps.push(e))}function P(e,t,n,i,o,a){const s=p.get(e);if(!s)return;let l=[];if("clear"===t)l=[...s.values()];else if("length"===n&&(0,r.kJ)(e))s.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(s.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(s.get("length")):(l.push(s.get(v)),(0,r._N)(e)&&l.push(s.get(g)));break;case"delete":(0,r.kJ)(e)||(l.push(s.get(v)),(0,r._N)(e)&&l.push(s.get(g)));break;case"set":(0,r._N)(e)&&l.push(s.get(v));break}if(1===l.length)l[0]&&O(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);O(u(e))}}function O(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&N(r,t);for(const r of n)r.computed||N(r,t)}function N(e,t){(e!==h||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const I=(0,r.fY)("__proto__,__v_isRef,__isVue"),j=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=R(),L=R(!1,!0),M=R(!0),C=k();function k(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Oe(this);for(let t=0,i=this.length;t<i;t++)w(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Oe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){x();const n=Oe(this)[t].apply(this,e);return _(),n}})),e}function R(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:he:t?me:ye).get(n))return n;const a=(0,r.kJ)(n);if(!e&&a&&(0,r.RI)(C,i))return Reflect.get(C,i,o);const u=Reflect.get(n,i,o);return((0,r.yk)(i)?j.has(i):I(i))?u:(e||w(n,"get",i),t?u:Me(u)?a&&(0,r.S0)(i)?u:u.value:(0,r.Kn)(u)?e?Ee(u):be(u):u)}}const B=V(),F=V(!0);function V(e=!1){return function(t,n,i,o){let a=t[n];if(we(a)&&Me(a)&&!Me(i))return!1;if(!e&&!we(i)&&(Ae(i)||(i=Oe(i),a=Oe(a)),!(0,r.kJ)(t)&&Me(a)&&!Me(i)))return a.value=i,!0;const u=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),s=Reflect.set(t,n,i,o);return t===Oe(o)&&(u?(0,r.aU)(i,a)&&P(t,"set",n,i,a):P(t,"add",n,i)),s}}function K(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&P(e,"delete",t,void 0,i),o}function Y(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&j.has(t)||w(e,"has",t),n}function U(e){return w(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const J={get:D,set:B,deleteProperty:K,has:Y,ownKeys:U},q={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},X=(0,r.l7)({},J,{get:L,set:F}),W=e=>e,$=e=>Reflect.getPrototypeOf(e);function z(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Oe(e),o=Oe(t);n||(t!==o&&w(i,"get",t),w(i,"get",o));const{has:a}=$(i),u=r?W:n?je:Ie;return a.call(i,t)?u(e.get(t)):a.call(i,o)?u(e.get(o)):void(e!==i&&e.get(t))}function G(e,t=!1){const n=this["__v_raw"],r=Oe(n),i=Oe(e);return t||(e!==i&&w(r,"has",e),w(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function H(e,t=!1){return e=e["__v_raw"],!t&&w(Oe(e),"iterate",v),Reflect.get(e,"size",e)}function Q(e){e=Oe(e);const t=Oe(this),n=$(t),r=n.has.call(t,e);return r||(t.add(e),P(t,"add",e,e)),this}function Z(e,t){t=Oe(t);const n=Oe(this),{has:i,get:o}=$(n);let a=i.call(n,e);a||(e=Oe(e),a=i.call(n,e));const u=o.call(n,e);return n.set(e,t),a?(0,r.aU)(t,u)&&P(n,"set",e,t,u):P(n,"add",e,t),this}function ee(e){const t=Oe(this),{has:n,get:r}=$(t);let i=n.call(t,e);i||(e=Oe(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,a=t.delete(e);return i&&P(t,"delete",e,void 0,o),a}function te(){const e=Oe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&P(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],a=Oe(o),u=t?W:e?je:Ie;return!e&&w(a,"iterate",v),o.forEach(((e,t)=>n.call(r,u(e),u(t),i)))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],a=Oe(o),u=(0,r._N)(a),s="entries"===e||e===Symbol.iterator&&u,l="keys"===e&&u,c=o[e](...i),f=n?W:t?je:Ie;return!t&&w(a,"iterate",l?g:v),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:s?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return z(this,e)},get size(){return H(this)},has:G,add:Q,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return z(this,e,!1,!0)},get size(){return H(this)},has:G,add:Q,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return z(this,e,!0)},get size(){return H(this,!0)},has(e){return G.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return z(this,e,!0,!0)},get size(){return H(this,!0)},has(e){return G.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[ae,ue,se,le]=oe();function ce(e,t){const n=t?e?le:se:e?ue:ae;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const fe={get:ce(!1,!1)},pe={get:ce(!1,!0)},de={get:ce(!0,!1)};const ye=new WeakMap,me=new WeakMap,he=new WeakMap,ve=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Te(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge((0,r.W7)(e))}function be(e){return we(e)?e:xe(e,!1,J,fe,ye)}function Se(e){return xe(e,!1,X,pe,me)}function Ee(e){return xe(e,!0,q,de,he)}function xe(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=o.get(e);if(a)return a;const u=Te(e);if(0===u)return e;const s=new Proxy(e,2===u?i:n);return o.set(e,s),s}function _e(e){return we(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function Pe(e){return _e(e)||we(e)}function Oe(e){const t=e&&e["__v_raw"];return t?Oe(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ie=e=>(0,r.Kn)(e)?be(e):e,je=e=>(0,r.Kn)(e)?Ee(e):e;function De(e){S&&h&&(e=Oe(e),A(e.dep||(e.dep=u())))}function Le(e,t){e=Oe(e),e.dep&&O(e.dep)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Ce(e){return ke(e,!1)}function ke(e,t){return Me(e)?e:new Re(e,t)}class Re{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Oe(e),this._value=t?e:Ie(e)}get value(){return De(this),this._value}set value(e){e=this.__v_isShallow?e:Oe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ie(e),Le(this,e))}}function Be(e){return Me(e)?e.value:e}const Fe={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return _e(e)?e:new Proxy(e,Fe)}class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new T(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Oe(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ye(e,t,n=!1){let i,o;const a=(0,r.mf)(e);a?(i=e,o=r.dG):(i=e.get,o=e.set);const u=new Ke(i,o,a||!o,n);return u}},73396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},Ah:function(){return Ne},FN:function(){return un},HY:function(){return Ot},P$:function(){return ae},Q6:function(){return pe},U2:function(){return se},Uk:function(){return Gt},Us:function(){return Et},Wm:function(){return Xt},Y8:function(){return re},YP:function(){return Q},_:function(){return qt},bv:function(){return we},h:function(){return _n},iD:function(){return Ft},ic:function(){return Pe},nK:function(){return fe},wg:function(){return Mt},wy:function(){return Me}});n(26699),n(21703);var r=n(44870),i=n(87139);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){u(o,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const a=o(e,t,n,r);return a&&(0,i.tI)(a)&&a.catch((e=>{u(e,t,n)})),a}const s=[];for(let i=0;i<e.length;i++)s.push(a(e[i],t,n,r));return s}function u(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,a=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,a))return;r=r.parent}const u=t.appContext.config.errorHandler;if(u)return void o(u,null,10,[e,i,a])}s(e,n,i,r)}function s(e,t,n,r=!0){console.error(e)}let l=!1,c=!1;const f=[];let p=0;const d=[];let y=null,m=0;const h=[];let v=null,g=0;const T=Promise.resolve();let b=null,S=null;function E(e){const t=b||T;return e?t.then(this?e.bind(this):e):t}function x(e){let t=p+1,n=f.length;while(t<n){const r=t+n>>>1,i=D(f[r]);i<e?t=r+1:n=r}return t}function _(e){f.length&&f.includes(e,l&&e.allowRecurse?p+1:p)||e===S||(null==e.id?f.push(e):f.splice(x(e.id),0,e),w())}function w(){l||c||(c=!0,b=T.then(L))}function A(e){const t=f.indexOf(e);t>p&&f.splice(t,1)}function P(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),w()}function O(e){P(e,y,d,m)}function N(e){P(e,v,h,g)}function I(e,t=null){if(d.length){for(S=t,y=[...new Set(d)],d.length=0,m=0;m<y.length;m++)y[m]();y=null,m=0,S=null,I(e,t)}}function j(e){if(I(),h.length){const e=[...new Set(h)];if(h.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>D(e)-D(t))),g=0;g<v.length;g++)v[g]();v=null,g=0}}const D=e=>null==e.id?1/0:e.id;function L(e){c=!1,l=!0,I(e),f.sort(((e,t)=>D(e)-D(t)));i.dG;try{for(p=0;p<f.length;p++){const e=f[p];e&&!1!==e.active&&o(e,null,14)}}finally{p=0,f.length=0,j(e),l=!1,b=null,(f.length||d.length||h.length)&&L(e)}}new Set;new Map;function M(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const u=t.startsWith("update:"),s=u&&t.slice(7);if(s&&s in r){const e=`${"modelValue"===s?"model":s}Modifiers`,{number:t,trim:a}=r[e]||i.kT;a&&(o=n.map((e=>e.trim()))),t&&(o=n.map(i.He))}let l;let c=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!c&&u&&(c=r[l=(0,i.hR)((0,i.rs)(t))]),c&&a(c,e,6,o);const f=r[l+"Once"];if(f){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,a(f,e,6,o)}}function C(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const a=e.emits;let u={},s=!1;if(!(0,i.mf)(e)){const r=e=>{const n=C(e,t,!0);n&&(s=!0,(0,i.l7)(u,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||s?((0,i.kJ)(a)?a.forEach((e=>u[e]=null)):(0,i.l7)(u,a),r.set(e,u),u):(r.set(e,null),null)}function k(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let R=null,B=null;function F(e){const t=R;return R=e,B=e&&e.type.__scopeId||null,t}function V(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Rt(-1);const i=F(t),o=e(...n);return F(i),r._d&&Rt(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function K(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:a,propsOptions:[s],slots:l,attrs:c,emit:f,render:p,renderCache:d,data:y,setupState:m,ctx:h,inheritAttrs:v}=e;let g,T;const b=F(e);try{if(4&n.shapeFlag){const e=o||r;g=Ht(p.call(e,e,d,a,m,y,h)),T=c}else{const e=t;0,g=Ht(e.length>1?e(a,{attrs:c,slots:l,emit:f}):e(a,null)),T=t.props?c:Y(c)}}catch(E){Dt.length=0,u(E,e,1),g=Xt(It)}let S=g;if(T&&!1!==v){const e=Object.keys(T),{shapeFlag:t}=S;e.length&&7&t&&(s&&e.some(i.tR)&&(T=U(T,s)),S=zt(S,T))}return n.dirs&&(S=zt(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),g=S,F(b),g}const Y=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function J(e,t,n){const{props:r,children:i,component:o}=e,{props:a,children:u,patchFlag:s}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&s>=0))return!(!i&&!u||u&&u.$stable)||r!==a&&(r?!a||q(r,a,l):!!a);if(1024&s)return!0;if(16&s)return r?q(r,a,l):!!a;if(8&s){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(a[n]!==r[n]&&!k(l,n))return!0}}return!1}function q(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!k(n,o))return!0}return!1}function X({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const W=e=>e.__isSuspense;function $(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function z(e,t){if(an){let n=an.provides;const r=an.parent&&an.parent.provides;r===n&&(n=an.provides=Object.create(r)),n[e]=t}else 0}function G(e,t,n=!1){const r=an||R;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const H={};function Q(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:u,flush:s,onTrack:l,onTrigger:c}=i.kT){const f=an;let p,d,y=!1,m=!1;if((0,r.dq)(e)?(p=()=>e.value,y=(0,r.yT)(e)):(0,r.PG)(e)?(p=()=>e,u=!0):(0,i.kJ)(e)?(m=!0,y=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),p=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?o(e,f,2):void 0))):p=(0,i.mf)(e)?t?()=>o(e,f,2):()=>{if(!f||!f.isUnmounted)return d&&d(),a(e,f,3,[h])}:i.dG,t&&u){const e=p;p=()=>ne(e())}let h=e=>{d=b.onStop=()=>{o(e,f,4)}};if(dn)return h=i.dG,t?n&&a(t,f,3,[p(),m?[]:void 0,h]):p(),i.dG;let v=m?[]:H;const g=()=>{if(b.active)if(t){const e=b.run();(u||y||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(d&&d(),a(t,f,3,[e,v===H?void 0:v,h]),v=e)}else b.run()};let T;g.allowRecurse=!!t,T="sync"===s?g:"post"===s?()=>St(g,f&&f.suspense):()=>O(g);const b=new r.qq(p,T);return t?n?g():v=b.run():"post"===s?St(b.run.bind(b),f&&f.suspense):b.run(),()=>{b.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,b)}}function ee(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let a;(0,i.mf)(t)?a=t:(a=t.handler,n=t);const u=an;sn(this);const s=Z(o,a.bind(r),n);return u?sn(u):ln(),s}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we((()=>{e.isMounted=!0})),Oe((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],oe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=un(),i=re();let o;return()=>{const a=t.default&&pe(t.default(),!0);if(!a||!a.length)return;let u=a[0];if(a.length>1){let e=!1;for(const t of a)if(t.type!==It){0,u=t,e=!0;break}}const s=(0,r.IU)(e),{mode:l}=s;if(i.isLeaving)return le(u);const c=ce(u);if(!c)return le(u);const f=se(c,s,i,n);fe(c,f);const p=n.subTree,d=p&&ce(p);let y=!1;const{getTransitionKey:m}=c.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,y=!0)}if(d&&d.type!==It&&(!Kt(c,d)||y)){const e=se(d,s,i,n);if(fe(d,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},le(u);"in-out"===l&&c.type!==It&&(e.delayLeave=(e,t,n)=>{const r=ue(i,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=n})}return u}}},ae=oe;function ue(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function se(e,t,n,r){const{appear:o,mode:u,persisted:s=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:d,onLeave:y,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:v,onAppear:g,onAfterAppear:T,onAppearCancelled:b}=t,S=String(e.key),E=ue(n,e),x=(e,t)=>{e&&a(e,r,9,t)},_=(e,t)=>{const n=t[1];x(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},w={mode:u,persisted:s,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=v||l}t._leaveCb&&t._leaveCb(!0);const i=E[S];i&&Kt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),x(r,[t])},enter(e){let t=c,r=f,i=p;if(!n.isMounted){if(!o)return;t=g||c,r=T||f,i=b||p}let a=!1;const u=e._enterCb=t=>{a||(a=!0,x(t?i:r,[e]),w.delayedLeave&&w.delayedLeave(),e._enterCb=void 0)};t?_(t,[e,u]):u()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();x(d,[t]);let o=!1;const a=t._leaveCb=n=>{o||(o=!0,r(),x(n?h:m,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,y?_(y,[t,a]):a()},clone(e){return se(e,t,n,r)}};return w}function le(e){if(ye(e))return e=zt(e),e.children=null,e}function ce(e){return ye(e)?e.children?e.children[0]:void 0:e}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let a=e[o];const u=null==n?a.key:String(n)+String(null!=a.key?a.key:o);a.type===Ot?(128&a.patchFlag&&i++,r=r.concat(pe(a.children,t,u))):(t||a.type!==It)&&r.push(null!=u?zt(a,{key:u}):a)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const de=e=>!!e.type.__asyncLoader;const ye=e=>e.type.__isKeepAlive;RegExp,RegExp;function me(e,t){return(0,i.kJ)(e)?e.some((e=>me(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function he(e,t){ge(e,"a",t)}function ve(e,t){ge(e,"da",t)}function ge(e,t,n=an){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,r,n),n){let e=n.parent;while(e&&e.parent)ye(e.parent.vnode)&&Te(r,t,n,e),e=e.parent}}function Te(e,t,n,r){const o=Ee(t,e,r,!0);Ne((()=>{(0,i.Od)(r[t],o)}),n)}function be(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Se(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=an,i=!1){if(n){const o=n[e]||(n[e]=[]),u=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),sn(n);const o=a(t,n,e,i);return ln(),(0,r.lk)(),o});return i?o.unshift(u):o.push(u),u}}const xe=e=>(t,n=an)=>(!dn||"sp"===e)&&Ee(e,t,n),_e=xe("bm"),we=xe("m"),Ae=xe("bu"),Pe=xe("u"),Oe=xe("bum"),Ne=xe("um"),Ie=xe("sp"),je=xe("rtg"),De=xe("rtc");function Le(e,t=an){Ee("ec",e,t)}function Me(e,t){const n=R;if(null===n)return e;const r=bn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[e,n,u,s=i.kT]=t[a];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:u,modifiers:s})}return e}function Ce(e,t,n,i){const o=e.dirs,u=t&&t.dirs;for(let s=0;s<o.length;s++){const l=o[s];u&&(l.oldValue=u[s].value);let c=l.dir[i];c&&((0,r.Jd)(),a(c,n,8,[e.el,l,e,t]),(0,r.lk)())}}const ke=Symbol();const Re=e=>e?cn(e)?bn(e)||e.proxy:Re(e.parent):null,Be=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Re(e.parent),$root:e=>Re(e.root),$emit:e=>e.emit,$options:e=>qe(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=E.bind(e.proxy)),$watch:e=>ee.bind(e)}),Fe={get({_:e},t){const{ctx:n,setupState:o,data:a,props:u,accessCache:s,type:l,appContext:c}=e;let f;if("$"!==t[0]){const r=s[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return a[t];case 4:return n[t];case 3:return u[t]}else{if(o!==i.kT&&(0,i.RI)(o,t))return s[t]=1,o[t];if(a!==i.kT&&(0,i.RI)(a,t))return s[t]=2,a[t];if((f=e.propsOptions[0])&&(0,i.RI)(f,t))return s[t]=3,u[t];if(n!==i.kT&&(0,i.RI)(n,t))return s[t]=4,n[t];Ve&&(s[t]=0)}}const p=Be[t];let d,y;return p?("$attrs"===t&&(0,r.j)(e,"get",t),p(e)):(d=l.__cssModules)&&(d=d[t])?d:n!==i.kT&&(0,i.RI)(n,t)?(s[t]=4,n[t]):(y=c.config.globalProperties,(0,i.RI)(y,t)?y[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:a}=e;return o!==i.kT&&(0,i.RI)(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:a}},u){let s;return!!n[u]||e!==i.kT&&(0,i.RI)(e,u)||t!==i.kT&&(0,i.RI)(t,u)||(s=a[0])&&(0,i.RI)(s,u)||(0,i.RI)(r,u)||(0,i.RI)(Be,u)||(0,i.RI)(o.config.globalProperties,u)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ve=!0;function Ke(e){const t=qe(e),n=e.proxy,o=e.ctx;Ve=!1,t.beforeCreate&&Ue(t.beforeCreate,e,"bc");const{data:a,computed:u,methods:s,watch:l,provide:c,inject:f,created:p,beforeMount:d,mounted:y,beforeUpdate:m,updated:h,activated:v,deactivated:g,beforeDestroy:T,beforeUnmount:b,destroyed:S,unmounted:E,render:x,renderTracked:_,renderTriggered:w,errorCaptured:A,serverPrefetch:P,expose:O,inheritAttrs:N,components:I,directives:j,filters:D}=t,L=null;if(f&&Ye(f,o,L,e.appContext.config.unwrapInjectedRef),s)for(const r in s){const e=s[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(a){0;const t=a.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ve=!0,u)for(const r in u){const e=u[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const a=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,s=xn({get:t,set:a});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e})}if(l)for(const r in l)Je(l[r],o,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{z(t,e[t])}))}function M(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(p&&Ue(p,e,"c"),M(_e,d),M(we,y),M(Ae,m),M(Pe,h),M(he,v),M(ve,g),M(Le,A),M(De,_),M(je,w),M(Oe,b),M(Ne,E),M(Ie,P),(0,i.kJ)(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});x&&e.render===i.dG&&(e.render=x),null!=N&&(e.inheritAttrs=N),I&&(e.components=I),j&&(e.directives=j)}function Ye(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=Ge(e));for(const a in e){const n=e[a];let u;u=(0,i.Kn)(n)?"default"in n?G(n.from||a,n.default,!0):G(n.from||a):G(n),(0,r.dq)(u)&&o?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>u.value,set:e=>u.value=e}):t[a]=u}}function Ue(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,r){const o=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Q(o,n)}else if((0,i.mf)(e))Q(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Je(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Q(o,r,e)}else 0}function qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,u=o.get(t);let s;return u?s=u:i.length||n||r?(s={},i.length&&i.forEach((e=>Xe(s,e,a,!0))),Xe(s,t,a)):s=t,o.set(t,s),s}function Xe(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Xe(e,o,n,!0),i&&i.forEach((t=>Xe(e,t,n,!0)));for(const a in t)if(r&&"expose"===a);else{const r=We[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const We={data:$e,props:Qe,emits:Qe,methods:Qe,computed:Qe,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Qe,directives:Qe,watch:Ze,provide:$e,inject:ze};function $e(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function ze(e,t){return Qe(Ge(e),Ge(t))}function Ge(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function He(e,t){return e?[...new Set([].concat(e,t))]:t}function Qe(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Ze(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=He(e[r],t[r]);return n}function et(e,t,n,o=!1){const a={},u={};(0,i.Nj)(u,Yt,1),e.propsDefaults=Object.create(null),nt(e,t,a,u);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);n?e.props=o?a:(0,r.Um)(a):e.type.props?e.props=a:e.props=u,e.attrs=u}function tt(e,t,n,o){const{props:a,attrs:u,vnode:{patchFlag:s}}=e,l=(0,r.IU)(a),[c]=e.propsOptions;let f=!1;if(!(o||s>0)||16&s){let r;nt(e,t,a,u)&&(f=!0);for(const o in l)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(a[o]=rt(c,l,o,void 0,e,!0)):delete a[o]);if(u!==l)for(const e in u)t&&(0,i.RI)(t,e)||(delete u[e],f=!0)}else if(8&s){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(k(e.emitsOptions,o))continue;const s=t[o];if(c)if((0,i.RI)(u,o))s!==u[o]&&(u[o]=s,f=!0);else{const t=(0,i._A)(o);a[t]=rt(c,l,t,s,e,!1)}else s!==u[o]&&(u[o]=s,f=!0)}}f&&(0,r.X$)(e,"set","$attrs")}function nt(e,t,n,o){const[a,u]=e.propsOptions;let s,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let f;a&&(0,i.RI)(a,f=(0,i._A)(r))?u&&u.includes(f)?(s||(s={}))[f]=c:n[f]=c:k(e.emitsOptions,r)||r in o&&c===o[r]||(o[r]=c,l=!0)}if(u){const t=(0,r.IU)(n),o=s||i.kT;for(let r=0;r<u.length;r++){const s=u[r];n[s]=rt(a,t,s,o[s],e,!(0,i.RI)(o,s))}}return l}function rt(e,t,n,r,o,a){const u=e[n];if(null!=u){const e=(0,i.RI)(u,"default");if(e&&void 0===r){const e=u.default;if(u.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(sn(o),r=i[n]=e.call(null,t),ln())}else r=e}u[0]&&(a&&!e?r=!1:!u[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function it(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const a=e.props,u={},s=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=it(e,t,!0);(0,i.l7)(u,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(a))for(let f=0;f<a.length;f++){0;const e=(0,i._A)(a[f]);ot(e)&&(u[e]=i.kT)}else if(a){0;for(const e in a){const t=(0,i._A)(e);if(ot(t)){const n=a[e],r=u[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=st(Boolean,r.type),n=st(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&s.push(t)}}}}const c=[u,s];return r.set(e,c),c}function ot(e){return"$"!==e[0]}function at(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function ut(e,t){return at(e)===at(t)}function st(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ut(t,e))):(0,i.mf)(t)&&ut(t,e)?0:-1}const lt=e=>"_"===e[0]||"$stable"===e,ct=e=>(0,i.kJ)(e)?e.map(Ht):[Ht(e)],ft=(e,t,n)=>{if(t._n)return t;const r=V(((...e)=>ct(t(...e))),n);return r._c=!1,r},pt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(lt(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=ft(o,n,r);else if(null!=n){0;const e=ct(n);t[o]=()=>e}}},dt=(e,t)=>{const n=ct(t);e.slots.default=()=>n},yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):pt(t,e.slots={})}else e.slots={},t&&dt(e,t);(0,i.Nj)(e.slots,Yt,1)},mt=(e,t,n)=>{const{vnode:r,slots:o}=e;let a=!0,u=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?a=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(a=!t.$stable,pt(t,o)),u=t}else t&&(dt(e,t),u={default:1});if(a)for(const i in o)lt(i)||i in u||delete o[i]};function ht(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vt=0;function gt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=ht(),a=new Set;let u=!1;const s=o.app={_uid:vt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:wn,get config(){return o.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.mf)(e.install)?(a.add(e),e.install(s,...t)):(0,i.mf)(e)&&(a.add(e),e(s,...t))),s},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),s},component(e,t){return t?(o.components[e]=t,s):o.components[e]},directive(e,t){return t?(o.directives[e]=t,s):o.directives[e]},mount(i,a,l){if(!u){0;const c=Xt(n,r);return c.appContext=o,a&&t?t(c,i):e(c,i,l),u=!0,s._container=i,i.__vue_app__=s,bn(c.component)||c.component.proxy}},unmount(){u&&(e(null,s._container),delete s._container.__vue_app__)},provide(e,t){return o.provides[e]=t,s}};return s}}function Tt(e,t,n,a,u=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Tt(e,t&&((0,i.kJ)(t)?t[r]:t),n,a,u)));if(de(a)&&!u)return;const s=4&a.shapeFlag?bn(a.component)||a.component.proxy:a.el,l=u?null:s,{i:c,r:f}=e;const p=t&&t.r,d=c.refs===i.kT?c.refs={}:c.refs,y=c.setupState;if(null!=p&&p!==f&&((0,i.HD)(p)?(d[p]=null,(0,i.RI)(y,p)&&(y[p]=null)):(0,r.dq)(p)&&(p.value=null)),(0,i.mf)(f))o(f,c,12,[l,d]);else{const t=(0,i.HD)(f),o=(0,r.dq)(f);if(t||o){const r=()=>{if(e.f){const n=t?d[f]:f.value;u?(0,i.kJ)(n)&&(0,i.Od)(n,s):(0,i.kJ)(n)?n.includes(s)||n.push(s):t?(d[f]=[s],(0,i.RI)(y,f)&&(y[f]=d[f])):(f.value=[s],e.k&&(d[e.k]=f.value))}else t?(d[f]=l,(0,i.RI)(y,f)&&(y[f]=l)):o&&(f.value=l,e.k&&(d[e.k]=l))};l?(r.id=-1,St(r,n)):r()}else 0}}function bt(){}const St=$;function Et(e){return xt(e)}function xt(e,t){bt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:a,patchProp:u,createElement:s,createText:l,createComment:c,setText:f,setElementText:p,parentNode:d,nextSibling:y,setScopeId:m=i.dG,cloneNode:h,insertStaticContent:v}=e,g=(e,t,n,r=null,i=null,o=null,a=!1,u=null,s=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),$(e,i,o,!0),e=null),-2===t.patchFlag&&(s=!1,t.dynamicChildren=null);const{type:l,ref:c,shapeFlag:f}=t;switch(l){case Nt:T(e,t,n,r);break;case It:b(e,t,n,r);break;case jt:null==e&&S(t,n,r,a);break;case Ot:C(e,t,n,r,i,o,a,u,s);break;default:1&f?w(e,t,n,r,i,o,a,u,s):6&f?k(e,t,n,r,i,o,a,u,s):(64&f||128&f)&&l.process(e,t,n,r,i,o,a,u,s,te)}null!=c&&i&&Tt(c,e&&e.ref,o,t||e,!t)},T=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=c(t.children||""),n,r):t.el=e.el},S=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=y(e),o(e,n,r),e=i;o(t,n,r)},x=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=y(e),a(e),e=n;a(t)},w=(e,t,n,r,i,o,a,u,s)=>{a=a||"svg"===t.type,null==e?P(t,n,r,i,o,a,u,s):D(e,t,i,o,a,u,s)},P=(e,t,n,r,a,l,c,f)=>{let d,y;const{type:m,props:v,shapeFlag:g,transition:T,patchFlag:b,dirs:S}=e;if(e.el&&void 0!==h&&-1===b)d=e.el=h(e.el);else{if(d=e.el=s(e.type,l,v&&v.is,v),8&g?p(d,e.children):16&g&&N(e.children,d,null,r,a,l&&"foreignObject"!==m,c,f),S&&Ce(e,null,r,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||u(d,t,null,v[t],l,e.children,r,a,Q);"value"in v&&u(d,"value",null,v.value),(y=v.onVnodeBeforeMount)&&tn(y,r,e)}O(d,e,e.scopeId,c,r)}S&&Ce(e,null,r,"beforeMount");const E=(!a||a&&!a.pendingBranch)&&T&&!T.persisted;E&&T.beforeEnter(d),o(d,t,n),((y=v&&v.onVnodeMounted)||E||S)&&St((()=>{y&&tn(y,r,e),E&&T.enter(d),S&&Ce(e,null,r,"mounted")}),a)},O=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,o,a,u,s=0)=>{for(let l=s;l<e.length;l++){const s=e[l]=u?Qt(e[l]):Ht(e[l]);g(null,s,t,n,r,i,o,a,u)}},D=(e,t,n,r,o,a,s)=>{const l=t.el=e.el;let{patchFlag:c,dynamicChildren:f,dirs:d}=t;c|=16&e.patchFlag;const y=e.props||i.kT,m=t.props||i.kT;let h;n&&_t(n,!1),(h=m.onVnodeBeforeUpdate)&&tn(h,n,t,e),d&&Ce(t,e,n,"beforeUpdate"),n&&_t(n,!0);const v=o&&"foreignObject"!==t.type;if(f?L(e.dynamicChildren,f,l,n,r,v,a):s||Y(e,t,l,null,n,r,v,a,!1),c>0){if(16&c)M(l,t,y,m,n,r,o);else if(2&c&&y.class!==m.class&&u(l,"class",null,m.class,o),4&c&&u(l,"style",y.style,m.style,o),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],s=y[a],c=m[a];c===s&&"value"!==a||u(l,a,s,c,o,e.children,n,r,Q)}}1&c&&e.children!==t.children&&p(l,t.children)}else s||null!=f||M(l,t,y,m,n,r,o);((h=m.onVnodeUpdated)||d)&&St((()=>{h&&tn(h,n,t,e),d&&Ce(t,e,n,"updated")}),r)},L=(e,t,n,r,i,o,a)=>{for(let u=0;u<t.length;u++){const s=e[u],l=t[u],c=s.el&&(s.type===Ot||!Kt(s,l)||70&s.shapeFlag)?d(s.el):n;g(s,l,c,null,r,i,o,a,!0)}},M=(e,t,n,r,o,a,s)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const c=r[l],f=n[l];c!==f&&"value"!==l&&u(e,l,f,c,s,t.children,o,a,Q)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||u(e,l,n[l],null,s,t.children,o,a,Q);"value"in r&&u(e,"value",n.value,r.value)}},C=(e,t,n,r,i,a,u,s,c)=>{const f=t.el=e?e.el:l(""),p=t.anchor=e?e.anchor:l("");let{patchFlag:d,dynamicChildren:y,slotScopeIds:m}=t;m&&(s=s?s.concat(m):m),null==e?(o(f,n,r),o(p,n,r),N(t.children,n,p,i,a,u,s,c)):d>0&&64&d&&y&&e.dynamicChildren?(L(e.dynamicChildren,y,n,i,a,u,s),(null!=t.key||i&&t===i.subTree)&&wt(e,t,!0)):Y(e,t,n,p,i,a,u,s,c)},k=(e,t,n,r,i,o,a,u,s)=>{t.slotScopeIds=u,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,a,s):R(t,n,r,i,o,a,s):B(e,t,s)},R=(e,t,n,r,i,o,a)=>{const u=e.component=on(e,r,i);if(ye(e)&&(u.ctx.renderer=te),yn(u),u.asyncDep){if(i&&i.registerDep(u,F),!e.el){const e=u.subTree=Xt(It);b(null,e,t,n)}}else F(u,e,t,n,i,o,a)},B=(e,t,n)=>{const r=t.component=e.component;if(J(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,A(r.update),r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,o,a,u,s)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:l,vnode:c}=e,f=n;0,_t(e,!1),n?(n.el=c.el,V(e,n,s)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&tn(t,l,n,c),_t(e,!0);const p=K(e);0;const y=e.subTree;e.subTree=p,g(y,p,d(y.el),Z(y),e,a,u),n.el=p.el,null===f&&X(e,p.el),o&&St(o,a),(t=n.props&&n.props.onVnodeUpdated)&&St((()=>tn(t,l,n,c)),a)}else{let r;const{el:s,props:l}=t,{bm:c,m:f,parent:p}=e,d=de(t);if(_t(e,!1),c&&(0,i.ir)(c),!d&&(r=l&&l.onVnodeBeforeMount)&&tn(r,p,t),_t(e,!0),s&&re){const n=()=>{e.subTree=K(e),re(s,e.subTree,e,a,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=K(e);0,g(null,r,n,o,e,a,u),t.el=r.el}if(f&&St(f,a),!d&&(r=l&&l.onVnodeMounted)){const e=t;St((()=>tn(r,p,e)),a)}(256&t.shapeFlag||p&&de(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&St(e.a,a),e.isMounted=!0,t=n=o=null}},c=e.effect=new r.qq(l,(()=>_(f)),e.scope),f=e.update=()=>c.run();f.id=e.uid,_t(e,!0),f()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,tt(e,t.props,i,n),mt(e,t.children,n),(0,r.Jd)(),I(void 0,e.update),(0,r.lk)()},Y=(e,t,n,r,i,o,a,u,s=!1)=>{const l=e&&e.children,c=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:y}=t;if(d>0){if(128&d)return void q(l,f,n,r,i,o,a,u,s);if(256&d)return void U(l,f,n,r,i,o,a,u,s)}8&y?(16&c&&Q(l,i,o),f!==l&&p(n,f)):16&c?16&y?q(l,f,n,r,i,o,a,u,s):Q(l,i,o,!0):(8&c&&p(n,""),16&y&&N(f,n,r,i,o,a,u,s))},U=(e,t,n,r,o,a,u,s,l)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,f=t.length,p=Math.min(c,f);let d;for(d=0;d<p;d++){const r=t[d]=l?Qt(t[d]):Ht(t[d]);g(e[d],r,n,null,o,a,u,s,l)}c>f?Q(e,o,a,!0,!1,p):N(t,n,r,o,a,u,s,l,p)},q=(e,t,n,r,o,a,u,s,l)=>{let c=0;const f=t.length;let p=e.length-1,d=f-1;while(c<=p&&c<=d){const r=e[c],i=t[c]=l?Qt(t[c]):Ht(t[c]);if(!Kt(r,i))break;g(r,i,n,null,o,a,u,s,l),c++}while(c<=p&&c<=d){const r=e[p],i=t[d]=l?Qt(t[d]):Ht(t[d]);if(!Kt(r,i))break;g(r,i,n,null,o,a,u,s,l),p--,d--}if(c>p){if(c<=d){const e=d+1,i=e<f?t[e].el:r;while(c<=d)g(null,t[c]=l?Qt(t[c]):Ht(t[c]),n,i,o,a,u,s,l),c++}}else if(c>d)while(c<=p)$(e[c],o,a,!0),c++;else{const y=c,m=c,h=new Map;for(c=m;c<=d;c++){const e=t[c]=l?Qt(t[c]):Ht(t[c]);null!=e.key&&h.set(e.key,c)}let v,T=0;const b=d-m+1;let S=!1,E=0;const x=new Array(b);for(c=0;c<b;c++)x[c]=0;for(c=y;c<=p;c++){const r=e[c];if(T>=b){$(r,o,a,!0);continue}let i;if(null!=r.key)i=h.get(r.key);else for(v=m;v<=d;v++)if(0===x[v-m]&&Kt(r,t[v])){i=v;break}void 0===i?$(r,o,a,!0):(x[i-m]=c+1,i>=E?E=i:S=!0,g(r,t[i],n,null,o,a,u,s,l),T++)}const _=S?At(x):i.Z6;for(v=_.length-1,c=b-1;c>=0;c--){const e=m+c,i=t[e],p=e+1<f?t[e+1].el:r;0===x[c]?g(null,i,n,p,o,a,u,s,l):S&&(v<0||c!==_[v]?W(i,n,p,2):v--)}}},W=(e,t,n,r,i=null)=>{const{el:a,type:u,transition:s,children:l,shapeFlag:c}=e;if(6&c)return void W(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void u.move(e,t,n,te);if(u===Ot){o(a,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,r);return void o(e.anchor,t,n)}if(u===jt)return void E(e,t,n);const f=2!==r&&1&c&&s;if(f)if(0===r)s.beforeEnter(a),o(a,t,n),St((()=>s.enter(a)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=s,u=()=>o(a,t,n),l=()=>{e(a,(()=>{u(),i&&i()}))};r?r(a,u,l):l()}else o(a,t,n)},$=(e,t,n,r=!1,i=!1)=>{const{type:o,props:a,ref:u,children:s,dynamicChildren:l,shapeFlag:c,patchFlag:f,dirs:p}=e;if(null!=u&&Tt(u,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const d=1&c&&p,y=!de(e);let m;if(y&&(m=a&&a.onVnodeBeforeUnmount)&&tn(m,t,e),6&c)H(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);d&&Ce(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,te,r):l&&(o!==Ot||f>0&&64&f)?Q(l,t,n,!1,!0):(o===Ot&&384&f||!i&&16&c)&&Q(s,t,n),r&&z(e)}(y&&(m=a&&a.onVnodeUnmounted)||d)&&St((()=>{m&&tn(m,t,e),d&&Ce(e,null,t,"unmounted")}),n)},z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ot)return void G(n,r);if(t===jt)return void x(e);const o=()=>{a(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,a=()=>t(n,o);r?r(e.el,o,a):a()}else o()},G=(e,t)=>{let n;while(e!==t)n=y(e),a(e),e=n;a(t)},H=(e,t,n)=>{const{bum:r,scope:o,update:a,subTree:u,um:s}=e;r&&(0,i.ir)(r),o.stop(),a&&(a.active=!1,$(u,e,t,n)),s&&St(s,t),St((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let a=o;a<e.length;a++)$(e[a],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():y(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&$(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),j(),t._vnode=e},te={p:g,um:$,m:W,r:z,mt:R,mc:N,pc:Y,pbc:L,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:gt(ee,ne)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=Qt(o[i]),t.el=e.el),n||wt(e,t))}}function At(e){const t=e.slice(),n=[0];let r,i,o,a,u;const s=e.length;for(r=0;r<s;r++){const s=e[r];if(0!==s){if(i=n[n.length-1],e[i]<s){t[r]=i,n.push(r);continue}o=0,a=n.length-1;while(o<a)u=o+a>>1,e[n[u]]<s?o=u+1:a=u;s<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,a=n[o-1];while(o-- >0)n[o]=a,a=t[a];return n}const Pt=e=>e.__isTeleport;const Ot=Symbol(void 0),Nt=Symbol(void 0),It=Symbol(void 0),jt=Symbol(void 0),Dt=[];let Lt=null;function Mt(e=!1){Dt.push(Lt=e?null:[])}function Ct(){Dt.pop(),Lt=Dt[Dt.length-1]||null}let kt=1;function Rt(e){kt+=e}function Bt(e){return e.dynamicChildren=kt>0?Lt||i.Z6:null,Ct(),kt>0&&Lt&&Lt.push(e),e}function Ft(e,t,n,r,i,o){return Bt(qt(e,t,n,r,i,o,!0))}function Vt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Ut=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:R,r:e,k:t,f:!!n}:e:null;function qt(e,t=null,n=null,r=0,o=null,a=(e===Ot?0:1),u=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ut(t),ref:t&&Jt(t),scopeId:B,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return s?(Zt(l,n),128&a&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),kt>0&&!u&&Lt&&(l.patchFlag>0||6&a)&&32!==l.patchFlag&&Lt.push(l),l}const Xt=Wt;function Wt(e,t=null,n=null,o=0,a=null,u=!1){if(e&&e!==ke||(e=It),Vt(e)){const r=zt(e,t,!0);return n&&Zt(r,n),kt>0&&!u&&Lt&&(6&r.shapeFlag?Lt[Lt.indexOf(e)]=r:Lt.push(r)),r.patchFlag|=-2,r}if(En(e)&&(e=e.__vccOpts),t){t=$t(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const s=(0,i.HD)(e)?1:W(e)?128:Pt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return qt(e,t,n,o,a,s,u,!0)}function $t(e){return e?(0,r.X3)(e)||Yt in e?(0,i.l7)({},e):e:null}function zt(e,t,n=!1){const{props:r,ref:o,patchFlag:a,children:u}=e,s=t?en(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ut(s),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Jt(t)):[o,Jt(t)]:Jt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:u,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ot?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),el:e.el,anchor:e.anchor};return l}function Gt(e=" ",t=0){return Xt(Nt,null,e,t)}function Ht(e){return null==e||"boolean"===typeof e?Xt(It):(0,i.kJ)(e)?Xt(Ot,null,e.slice()):"object"===typeof e?Qt(e):Xt(Nt,null,String(e))}function Qt(e){return null===e.el||e.memo?e:zt(e)}function Zt(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Zt(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Yt in t?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.mf)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[Gt(t)]):n=8);e.children=t,e.shapeFlag|=n}function en(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function tn(e,t,n,r=null){a(e,t,7,[n,r])}const nn=ht();let rn=0;function on(e,t,n){const o=e.type,a=(t?t.appContext:e.appContext)||nn,u={uid:rn++,vnode:e,type:o,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:it(o,a),emitsOptions:C(o,a),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=t?t.root:u,u.emit=M.bind(null,u),e.ce&&e.ce(u),u}let an=null;const un=()=>an||R,sn=e=>{an=e,e.scope.on()},ln=()=>{an&&an.scope.off(),an=null};function cn(e){return 4&e.vnode.shapeFlag}let fn,pn,dn=!1;function yn(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,i=cn(e);et(e,n,i,t),yt(e,r);const o=i?mn(e,t):void 0;return dn=!1,o}function mn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Fe));const{setup:a}=n;if(a){const n=e.setupContext=a.length>1?Tn(e):null;sn(e),(0,r.Jd)();const s=o(a,e,0,[e.props,n]);if((0,r.lk)(),ln(),(0,i.tI)(s)){if(s.then(ln,ln),t)return s.then((n=>{hn(e,n,t)})).catch((t=>{u(t,e,0)}));e.asyncDep=s}else hn(e,s,t)}else vn(e,t)}function hn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),vn(e,n)}function vn(e,t,n){const o=e.type;if(!e.render){if(!t&&fn&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:u}=o,s=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:a},r),u);o.render=fn(t,s)}}e.render=o.render||i.dG,pn&&pn(e)}sn(e),(0,r.Jd)(),Ke(e),(0,r.lk)(),ln()}function gn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Tn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=gn(e))},slots:e.slots,emit:e.emit,expose:t}}function bn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Be?Be[n](e):void 0}}))}function Sn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function En(e){return(0,i.mf)(e)&&"__vccOpts"in e}const xn=(e,t)=>(0,r.Fl)(e,t,dn);function _n(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Vt(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Vt(n)&&(n=[n]),Xt(e,t,n))}Symbol("");const wn="3.2.37"},49242:function(e,t,n){"use strict";n.d(t,{bM:function(){return re},nr:function(){return ne},ri:function(){return le}});n(26699);var r=n(87139),i=n(73396);n(44870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,u=a&&a.createElement("template"),s={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const a=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{u.innerHTML=r?`<svg>${e}</svg>`:e;const i=u.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function c(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)p(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&p(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const f=/\s*!important$/;function p(e,t,n){if((0,r.kJ)(n))n.forEach((n=>p(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);f.test(n)?e.setProperty((0,r.rs)(i),n.replace(f,""),"important"):e[i]=n}}const d=["Webkit","Moz","ms"],y={};function m(e,t){const n=y[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return y[t]=i;i=(0,r.kC)(i);for(let r=0;r<d.length;r++){const n=d[r]+i;if(n in e)return y[t]=n}return t}const h="http://www.w3.org/1999/xlink";function v(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(h,t.slice(6,t.length)):e.setAttributeNS(h,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function g(e,t,n,i,o,a,u){if("innerHTML"===t||"textContent"===t)return i&&u(i,o,a),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let s=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",s=!0):"number"===i&&(n=0,s=!0)}try{e[t]=n}catch(l){0}s&&e.removeAttribute(t)}const[T,b]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let S=0;const E=Promise.resolve(),x=()=>{S=0},_=()=>S||(E.then(x),S=T());function w(e,t,n,r){e.addEventListener(t,n,r)}function A(e,t,n,r){e.removeEventListener(t,n,r)}function P(e,t,n,r,i=null){const o=e._vei||(e._vei={}),a=o[t];if(r&&a)a.value=r;else{const[n,u]=N(t);if(r){const a=o[t]=I(r,i);w(e,n,a,u)}else a&&(A(e,n,a,u),o[t]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function N(e){let t;if(O.test(e)){let n;t={};while(n=e.match(O))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function I(e,t){const n=e=>{const r=e.timeStamp||T();(b||r>=n.attached-1)&&(0,i.$d)(j(e,n.value),t,5,[e])};return n.value=e,n.attached=_(),n}function j(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const D=/^on[a-z]/,L=(e,t,n,i,o=!1,a,u,s,f)=>{"class"===t?l(e,i,o):"style"===t?c(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||P(e,t,n,i,u):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):M(e,t,i,o))?g(e,t,i,a,u,s,f):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,o))};function M(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&D.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!D.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const C="transition",k="animation",R=(e,{slots:t})=>(0,i.h)(i.P$,K(e),t);R.displayName="Transition";const B={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(R.props=(0,r.l7)({},i.P$.props,B),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),V=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function K(e){const t={};for(const r in e)r in B||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:u=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=u,appearToClass:f=s,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,m=Y(o),h=m&&m[0],v=m&&m[1],{onBeforeEnter:g,onEnter:T,onEnterCancelled:b,onLeave:S,onLeaveCancelled:E,onBeforeAppear:x=g,onAppear:_=T,onAppearCancelled:w=b}=t,A=(e,t,n)=>{q(e,t?f:s),q(e,t?c:u),n&&n()},P=(e,t)=>{e._isLeaving=!1,q(e,p),q(e,y),q(e,d),t&&t()},O=e=>(t,n)=>{const r=e?_:T,o=()=>A(t,e,n);F(r,[t,o]),X((()=>{q(t,e?l:a),J(t,e?f:s),V(r)||$(t,i,h,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(g,[e]),J(e,a),J(e,u)},onBeforeAppear(e){F(x,[e]),J(e,l),J(e,c)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>P(e,t);J(e,p),Q(),J(e,d),X((()=>{e._isLeaving&&(q(e,p),J(e,y),V(S)||$(e,i,v,n))})),F(S,[e,n])},onEnterCancelled(e){A(e,!1),F(b,[e])},onAppearCancelled(e){A(e,!0),F(w,[e])},onLeaveCancelled(e){P(e),F(E,[e])}})}function Y(e){if(null==e)return null;if((0,r.Kn)(e))return[U(e.enter),U(e.leave)];{const t=U(e);return[t,t]}}function U(e){const t=(0,r.He)(e);return t}function J(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function X(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function $(e,t,n,r){const i=e._endId=++W,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:a,timeout:u,propCount:s}=z(e,t);if(!a)return r();const l=a+"end";let c=0;const f=()=>{e.removeEventListener(l,p),o()},p=t=>{t.target===e&&++c>=s&&f()};setTimeout((()=>{c<s&&f()}),u+1),e.addEventListener(l,p)}function z(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(C+"Delay"),o=r(C+"Duration"),a=G(i,o),u=r(k+"Delay"),s=r(k+"Duration"),l=G(u,s);let c=null,f=0,p=0;t===C?a>0&&(c=C,f=a,p=o.length):t===k?l>0&&(c=k,f=l,p=s.length):(f=Math.max(a,l),c=f>0?a>l?C:k:null,p=c?c===C?o.length:s.length:0);const d=c===C&&/\b(transform|all)(,|$)/.test(n[C+"Property"]);return{type:c,timeout:f,propCount:p,hasTransform:d}}function G(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>H(t)+H(e[n]))))}function H(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ne={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=Z(o);const a=i||o.props&&"number"===o.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),a&&(i=(0,r.He)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",ee),w(e,"compositionend",te),w(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},a){if(e._assign=Z(a),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const u=null==t?"":t;e.value!==u&&(e.value=u)}};const re={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=(0,r.DM)(t);w(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(oe(e)):oe(e)));e._assign(e.multiple?o?new Set(t):t:t[0])})),e._assign=Z(i)},mounted(e,{value:t}){ie(e,t)},beforeUpdate(e,t,n){e._assign=Z(n)},updated(e,{value:t}){ie(e,t)}};function ie(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],a=oe(o);if(n)(0,r.kJ)(t)?o.selected=(0,r.hq)(t,a)>-1:o.selected=t.has(a);else if((0,r.WV)(oe(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function oe(e){return"_value"in e?e._value:e.value}const ae=(0,r.l7)({patchProp:L},s);let ue;function se(){return ue||(ue=(0,i.Us)(ae))}const le=(...e)=>{const t=se().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ce(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function ce(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},87139:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return d},DM:function(){return D},E9:function(){return re},F7:function(){return _},Gg:function(){return J},HD:function(){return C},He:function(){return te},Kn:function(){return R},NO:function(){return E},Nj:function(){return ee},Od:function(){return P},PO:function(){return Y},Pq:function(){return u},RI:function(){return N},S0:function(){return U},W7:function(){return K},WV:function(){return m},Z6:function(){return b},_A:function(){return W},_N:function(){return j},aU:function(){return Q},dG:function(){return S},e1:function(){return o},fY:function(){return r},hR:function(){return H},hq:function(){return h},ir:function(){return Z},j5:function(){return l},kC:function(){return G},kJ:function(){return I},kT:function(){return T},l7:function(){return A},mf:function(){return M},rs:function(){return z},tI:function(){return B},tR:function(){return w},yA:function(){return s},yk:function(){return k},zw:function(){return v}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u=r(a);function s(e){return!!e||""===e}function l(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=C(r)?p(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return C(e)||R(e)?e:void 0}const c=/;(?![^(]*\))/g,f=/:(.+)/;function p(e){const t={};return e.split(c).forEach((e=>{if(e){const n=e.split(f);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(C(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(R(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=k(e),r=k(t),n||r)return e===t;if(n=I(e),r=I(t),n||r)return!(!n||!r)&&y(e,t);if(n=R(e),r=R(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function h(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>C(e)?e:null==e?"":I(e)||R(e)&&(e.toString===F||!M(e.toString))?JSON.stringify(e,g,2):String(e),g=(e,t)=>t&&t.__v_isRef?g(e,t.value):j(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!R(t)||I(t)||Y(t)?t:String(t),T={},b=[],S=()=>{},E=()=>!1,x=/^on[^a-z]/,_=e=>x.test(e),w=e=>e.startsWith("onUpdate:"),A=Object.assign,P=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},O=Object.prototype.hasOwnProperty,N=(e,t)=>O.call(e,t),I=Array.isArray,j=e=>"[object Map]"===V(e),D=e=>"[object Set]"===V(e),L=e=>"[object Date]"===V(e),M=e=>"function"===typeof e,C=e=>"string"===typeof e,k=e=>"symbol"===typeof e,R=e=>null!==e&&"object"===typeof e,B=e=>R(e)&&M(e.then)&&M(e.catch),F=Object.prototype.toString,V=e=>F.call(e),K=e=>V(e).slice(8,-1),Y=e=>"[object Object]"===V(e),U=e=>C(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,J=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,W=q((e=>e.replace(X,((e,t)=>t?t.toUpperCase():"")))),$=/\B([A-Z])/g,z=q((e=>e.replace($,"-$1").toLowerCase())),G=q((e=>e.charAt(0).toUpperCase()+e.slice(1))),H=q((e=>e?`on${G(e)}`:"")),Q=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9951:function(e,t,n){n(21703),function(t,n){e.exports=n()}(0,(function(){var e=function(e,t){var n=Array.prototype.concat,r=Array.prototype.slice,i=Object.prototype.toString;function o(t,n){var r=t>n?t:n;return e.pow(10,17-~~(e.log(r>0?r:-r)*e.LOG10E))}var a=Array.isArray||function(e){return"[object Array]"===i.call(e)};function u(e){return"[object Function]"===i.call(e)}function s(e){return"number"===typeof e&&e-e===0}function l(e){return n.apply([],e)}function c(){return new c._init(arguments)}function f(){return 0}function p(){return 1}function d(e,t){return e===t?1:0}c.fn=c.prototype,c._init=function(e){if(a(e[0]))if(a(e[0][0])){u(e[1])&&(e[0]=c.map(e[0],e[1]));for(var t=0;t<e[0].length;t++)this[t]=e[0][t];this.length=e[0].length}else this[0]=u(e[1])?c.map(e[0],e[1]):e[0],this.length=1;else if(s(e[0]))this[0]=c.seq.apply(null,e),this.length=1;else{if(e[0]instanceof c)return c(e[0].toArray());this[0]=[],this.length=1}return this},c._init.prototype=c.prototype,c._init.constructor=c,c.utils={calcRdx:o,isArray:a,isFunction:u,isNumber:s,toVector:l},c._random_fn=e.random,c.setRandom=function(e){if("function"!==typeof e)throw new TypeError("fn is not a function");c._random_fn=e},c.extend=function(e){var t,n;if(1===arguments.length){for(n in e)c[n]=e[n];return this}for(t=1;t<arguments.length;t++)for(n in arguments[t])e[n]=arguments[t][n];return e},c.rows=function(e){return e.length||1},c.cols=function(e){return e[0].length||1},c.dimensions=function(e){return{rows:c.rows(e),cols:c.cols(e)}},c.row=function(e,t){return a(t)?t.map((function(t){return c.row(e,t)})):e[t]},c.rowa=function(e,t){return c.row(e,t)},c.col=function(e,t){if(a(t)){var n=c.arange(e.length).map((function(){return new Array(t.length)}));return t.forEach((function(t,r){c.arange(e.length).forEach((function(i){n[i][r]=e[i][t]}))})),n}for(var r=new Array(e.length),i=0;i<e.length;i++)r[i]=[e[i][t]];return r},c.cola=function(e,t){return c.col(e,t).map((function(e){return e[0]}))},c.diag=function(e){for(var t=c.rows(e),n=new Array(t),r=0;r<t;r++)n[r]=[e[r][r]];return n},c.antidiag=function(e){for(var t=c.rows(e)-1,n=new Array(t),r=0;t>=0;t--,r++)n[r]=[e[r][t]];return n},c.transpose=function(e){var t,n,r,i,o,u=[];for(a(e[0])||(e=[e]),n=e.length,r=e[0].length,o=0;o<r;o++){for(t=new Array(n),i=0;i<n;i++)t[i]=e[i][o];u.push(t)}return 1===u.length?u[0]:u},c.map=function(e,t,n){var r,i,o,u,s;for(a(e[0])||(e=[e]),i=e.length,o=e[0].length,u=n?e:new Array(i),r=0;r<i;r++)for(u[r]||(u[r]=new Array(o)),s=0;s<o;s++)u[r][s]=t(e[r][s],r,s);return 1===u.length?u[0]:u},c.cumreduce=function(e,t,n){var r,i,o,u,s;for(a(e[0])||(e=[e]),i=e.length,o=e[0].length,u=n?e:new Array(i),r=0;r<i;r++)for(u[r]||(u[r]=new Array(o)),o>0&&(u[r][0]=e[r][0]),s=1;s<o;s++)u[r][s]=t(u[r][s-1],e[r][s]);return 1===u.length?u[0]:u},c.alter=function(e,t){return c.map(e,t,!0)},c.create=function(e,t,n){var r,i,o=new Array(e);for(u(t)&&(n=t,t=e),r=0;r<e;r++)for(o[r]=new Array(t),i=0;i<t;i++)o[r][i]=n(r,i);return o},c.zeros=function(e,t){return s(t)||(t=e),c.create(e,t,f)},c.ones=function(e,t){return s(t)||(t=e),c.create(e,t,p)},c.rand=function(e,t){return s(t)||(t=e),c.create(e,t,c._random_fn)},c.identity=function(e,t){return s(t)||(t=e),c.create(e,t,d)},c.symmetric=function(e){var t,n,r=e.length;if(e.length!==e[0].length)return!1;for(t=0;t<r;t++)for(n=0;n<r;n++)if(e[n][t]!==e[t][n])return!1;return!0},c.clear=function(e){return c.alter(e,f)},c.seq=function(e,t,n,r){u(r)||(r=!1);var i,a=[],s=o(e,t),l=(t*s-e*s)/((n-1)*s),c=e;for(i=0;c<=t&&i<n;i++,c=(e*s+l*s*i)/s)a.push(r?r(c,i):c);return a},c.arange=function(e,n,r){var i,o=[];if(r=r||1,n===t&&(n=e,e=0),e===n||0===r)return[];if(e<n&&r<0)return[];if(e>n&&r>0)return[];if(r>0)for(i=e;i<n;i+=r)o.push(i);else for(i=e;i>n;i+=r)o.push(i);return o},c.slice=function(){function e(e,n,r,i){var o,a=[],u=e.length;if(n===t&&r===t&&i===t)return c.copy(e);if(n=n||0,r=r||e.length,n=n>=0?n:u+n,r=r>=0?r:u+r,i=i||1,n===r||0===i)return[];if(n<r&&i<0)return[];if(n>r&&i>0)return[];if(i>0)for(o=n;o<r;o+=i)a.push(e[o]);else for(o=n;o>r;o+=i)a.push(e[o]);return a}function n(t,n){var r,i;if(n=n||{},s(n.row)){if(s(n.col))return t[n.row][n.col];var o=c.rowa(t,n.row);return r=n.col||{},e(o,r.start,r.end,r.step)}if(s(n.col)){var a=c.cola(t,n.col);return i=n.row||{},e(a,i.start,i.end,i.step)}i=n.row||{},r=n.col||{};var u=e(t,i.start,i.end,i.step);return u.map((function(t){return e(t,r.start,r.end,r.step)}))}return n}(),c.sliceAssign=function(n,r,i){var o,a;if(s(r.row)){if(s(r.col))return n[r.row][r.col]=i;r.col=r.col||{},r.col.start=r.col.start||0,r.col.end=r.col.end||n[0].length,r.col.step=r.col.step||1,o=c.arange(r.col.start,e.min(n.length,r.col.end),r.col.step);var u=r.row;return o.forEach((function(e,t){n[u][e]=i[t]})),n}if(s(r.col)){r.row=r.row||{},r.row.start=r.row.start||0,r.row.end=r.row.end||n.length,r.row.step=r.row.step||1,a=c.arange(r.row.start,e.min(n[0].length,r.row.end),r.row.step);var l=r.col;return a.forEach((function(e,t){n[e][l]=i[t]})),n}return i[0].length===t&&(i=[i]),r.row.start=r.row.start||0,r.row.end=r.row.end||n.length,r.row.step=r.row.step||1,r.col.start=r.col.start||0,r.col.end=r.col.end||n[0].length,r.col.step=r.col.step||1,a=c.arange(r.row.start,e.min(n.length,r.row.end),r.row.step),o=c.arange(r.col.start,e.min(n[0].length,r.col.end),r.col.step),a.forEach((function(e,t){o.forEach((function(r,o){n[e][r]=i[t][o]}))})),n},c.diagonal=function(e){var t=c.zeros(e.length,e.length);return e.forEach((function(e,n){t[n][n]=e})),t},c.copy=function(e){return e.map((function(e){return s(e)?e:e.map((function(e){return e}))}))};var y=c.prototype;return y.length=0,y.push=Array.prototype.push,y.sort=Array.prototype.sort,y.splice=Array.prototype.splice,y.slice=Array.prototype.slice,y.toArray=function(){return this.length>1?r.call(this):r.call(this)[0]},y.map=function(e,t){return c(c.map(this,e,t))},y.cumreduce=function(e,t){return c(c.cumreduce(this,e,t))},y.alter=function(e){return c.alter(this,e),this},function(e){for(var t=0;t<e.length;t++)(function(e){y[e]=function(t){var n,r=this;return t?(setTimeout((function(){t.call(r,y[e].call(r))})),this):(n=c[e](this),a(n)?c(n):n)}})(e[t])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(e){for(var t=0;t<e.length;t++)(function(e){y[e]=function(t,n){var r=this;return n?(setTimeout((function(){n.call(r,y[e].call(r,t))})),this):c(c[e](this,t))}})(e[t])}("row col".split(" ")),function(e){for(var t=0;t<e.length;t++)(function(e){y[e]=function(){return c(c[e].apply(null,arguments))}})(e[t])}("create zeros ones rand identity".split(" ")),c}(Math);return function(e,t){var n=e.utils.isFunction;function r(e,t){return e-t}function i(e,n,r){return t.max(n,t.min(e,r))}e.sum=function(e){var t=0,n=e.length;while(--n>=0)t+=e[n];return t},e.sumsqrd=function(e){var t=0,n=e.length;while(--n>=0)t+=e[n]*e[n];return t},e.sumsqerr=function(t){var n,r=e.mean(t),i=0,o=t.length;while(--o>=0)n=t[o]-r,i+=n*n;return i},e.sumrow=function(e){var t=0,n=e.length;while(--n>=0)t+=e[n];return t},e.product=function(e){var t=1,n=e.length;while(--n>=0)t*=e[n];return t},e.min=function(e){var t=e[0],n=0;while(++n<e.length)e[n]<t&&(t=e[n]);return t},e.max=function(e){var t=e[0],n=0;while(++n<e.length)e[n]>t&&(t=e[n]);return t},e.unique=function(e){for(var t={},n=[],r=0;r<e.length;r++)t[e[r]]||(t[e[r]]=!0,n.push(e[r]));return n},e.mean=function(t){return e.sum(t)/t.length},e.meansqerr=function(t){return e.sumsqerr(t)/t.length},e.geomean=function(n){return t.pow(e.product(n),1/n.length)},e.median=function(e){var t=e.length,n=e.slice().sort(r);return 1&t?n[t/2|0]:(n[t/2-1]+n[t/2])/2},e.cumsum=function(t){return e.cumreduce(t,(function(e,t){return e+t}))},e.cumprod=function(t){return e.cumreduce(t,(function(e,t){return e*t}))},e.diff=function(e){var t,n=[],r=e.length;for(t=1;t<r;t++)n.push(e[t]-e[t-1]);return n},e.rank=function(e){var t,n=[],i={};for(t=0;t<e.length;t++){var o=e[t];i[o]?i[o]++:(i[o]=1,n.push(o))}var a=n.sort(r),u={},s=1;for(t=0;t<a.length;t++){o=a[t];var l=i[o],c=s,f=s+l-1,p=(c+f)/2;u[o]=p,s+=l}return e.map((function(e){return u[e]}))},e.mode=function(e){var t,n=e.length,i=e.slice().sort(r),o=1,a=0,u=0,s=[];for(t=0;t<n;t++)i[t]===i[t+1]?o++:(o>a?(s=[i[t]],a=o,u=0):o===a&&(s.push(i[t]),u++),o=1);return 0===u?s[0]:s},e.range=function(t){return e.max(t)-e.min(t)},e.variance=function(t,n){return e.sumsqerr(t)/(t.length-(n?1:0))},e.pooledvariance=function(t){var n=t.reduce((function(t,n){return t+e.sumsqerr(n)}),0),r=t.reduce((function(e,t){return e+t.length}),0);return n/(r-t.length)},e.deviation=function(t){for(var n=e.mean(t),r=t.length,i=new Array(r),o=0;o<r;o++)i[o]=t[o]-n;return i},e.stdev=function(n,r){return t.sqrt(e.variance(n,r))},e.pooledstdev=function(n){return t.sqrt(e.pooledvariance(n))},e.meandev=function(n){for(var r=e.mean(n),i=[],o=n.length-1;o>=0;o--)i.push(t.abs(n[o]-r));return e.mean(i)},e.meddev=function(n){for(var r=e.median(n),i=[],o=n.length-1;o>=0;o--)i.push(t.abs(n[o]-r));return e.median(i)},e.coeffvar=function(t){return e.stdev(t)/e.mean(t)},e.quartiles=function(e){var n=e.length,i=e.slice().sort(r);return[i[t.round(n/4)-1],i[t.round(n/2)-1],i[t.round(3*n/4)-1]]},e.quantiles=function(e,n,o,a){var u,s,l,c,f,p,d=e.slice().sort(r),y=[n.length],m=e.length;for("undefined"===typeof o&&(o=3/8),"undefined"===typeof a&&(a=3/8),u=0;u<n.length;u++)s=n[u],l=o+s*(1-o-a),c=m*s+l,f=t.floor(i(c,1,m-1)),p=i(c-f,0,1),y[u]=(1-p)*d[f-1]+p*d[f];return y},e.percentile=function(e,t,n){var i=e.slice().sort(r),o=t*(i.length+(n?1:-1))+(n?0:1),a=parseInt(o),u=o-a;return a+1<i.length?i[a-1]+u*(i[a]-i[a-1]):i[a-1]},e.percentileOfScore=function(e,t,n){var r,i,o=0,a=e.length,u=!1;for("strict"===n&&(u=!0),i=0;i<a;i++)r=e[i],(u&&r<t||!u&&r<=t)&&o++;return o/a},e.histogram=function(n,r){r=r||4;var i,o=e.min(n),a=(e.max(n)-o)/r,u=n.length,s=[];for(i=0;i<r;i++)s[i]=0;for(i=0;i<u;i++)s[t.min(t.floor((n[i]-o)/a),r-1)]+=1;return s},e.covariance=function(t,n){var r,i=e.mean(t),o=e.mean(n),a=t.length,u=new Array(a);for(r=0;r<a;r++)u[r]=(t[r]-i)*(n[r]-o);return e.sum(u)/(a-1)},e.corrcoeff=function(t,n){return e.covariance(t,n)/e.stdev(t,1)/e.stdev(n,1)},e.spearmancoeff=function(t,n){return t=e.rank(t),n=e.rank(n),e.corrcoeff(t,n)},e.stanMoment=function(n,r){for(var i=e.mean(n),o=e.stdev(n),a=n.length,u=0,s=0;s<a;s++)u+=t.pow((n[s]-i)/o,r);return u/n.length},e.skewness=function(t){return e.stanMoment(t,3)},e.kurtosis=function(t){return e.stanMoment(t,4)-3};var o=e.prototype;(function(t){for(var r=0;r<t.length;r++)(function(t){o[t]=function(r,i){var a=[],u=0,s=this;if(n(r)&&(i=r,r=!1),i)return setTimeout((function(){i.call(s,o[t].call(s,r))})),this;if(this.length>1){for(s=!0===r?this:this.transpose();u<s.length;u++)a[u]=e[t](s[u]);return a}return e[t](this[0],r)}})(t[r])})("cumsum cumprod".split(" ")),function(t){for(var r=0;r<t.length;r++)(function(t){o[t]=function(r,i){var a=[],u=0,s=this;if(n(r)&&(i=r,r=!1),i)return setTimeout((function(){i.call(s,o[t].call(s,r))})),this;if(this.length>1){for("sumrow"!==t&&(s=!0===r?this:this.transpose());u<s.length;u++)a[u]=e[t](s[u]);return!0===r?e[t](e.utils.toVector(a)):a}return e[t](this[0],r)}})(t[r])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(t){for(var r=0;r<t.length;r++)(function(t){o[t]=function(){var r,i=[],a=0,u=this,s=Array.prototype.slice.call(arguments);if(n(s[s.length-1])){r=s[s.length-1];var l=s.slice(0,s.length-1);return setTimeout((function(){r.call(u,o[t].apply(u,l))})),this}r=void 0;var c=function(n){return e[t].apply(u,[n].concat(s))};if(this.length>1){for(u=u.transpose();a<u.length;a++)i[a]=c(u[a]);return i}return c(this[0])}})(t[r])}("quantiles percentileOfScore".split(" "))}(e,Math),function(e,t){e.gammaln=function(e){var n,r,i,o=0,a=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],u=1.000000000190015;for(i=(r=n=e)+5.5,i-=(n+.5)*t.log(i);o<6;o++)u+=a[o]/++r;return t.log(2.5066282746310007*u/n)-i},e.loggam=function(e){var n,r,i,o,a,u,s,l=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(n=e,s=0,1==e||2==e)return 0;for(e<=7&&(s=t.floor(7-e),n=e+s),r=1/(n*n),i=2*t.PI,a=l[9],u=8;u>=0;u--)a*=r,a+=l[u];if(o=a/n+.5*t.log(i)+(n-.5)*t.log(n)-n,e<=7)for(u=1;u<=s;u++)o-=t.log(n-1),n-=1;return o},e.gammafn=function(e){var n,r,i,o,a=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],u=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],s=!1,l=0,c=0,f=0,p=e;if(e>171.6243769536076)return 1/0;if(p<=0){if(o=p%1+36e-17,!o)return 1/0;s=(1&p?-1:1)*t.PI/t.sin(t.PI*o),p=1-p}for(i=p,r=p<1?p++:(p-=l=(0|p)-1)-1,n=0;n<8;++n)f=(f+a[n])*r,c=c*r+u[n];if(o=f/c+1,i<p)o/=i;else if(i>p)for(n=0;n<l;++n)o*=p,p++;return s&&(o=s/o),o},e.gammap=function(t,n){return e.lowRegGamma(t,n)*e.gammafn(t)},e.lowRegGamma=function(n,r){var i,o=e.gammaln(n),a=n,u=1/n,s=u,l=r+1-n,c=1/1e-30,f=1/l,p=f,d=1,y=-~(8.5*t.log(n>=1?n:1/n)+.4*n+17);if(r<0||n<=0)return NaN;if(r<n+1){for(;d<=y;d++)u+=s*=r/++a;return u*t.exp(-r+n*t.log(r)-o)}for(;d<=y;d++)i=-d*(d-n),l+=2,f=i*f+l,c=l+i/c,f=1/f,p*=f*c;return 1-p*t.exp(-r+n*t.log(r)-o)},e.factorialln=function(t){return t<0?NaN:e.gammaln(t+1)},e.factorial=function(t){return t<0?NaN:e.gammafn(t+1)},e.combination=function(n,r){return n>170||r>170?t.exp(e.combinationln(n,r)):e.factorial(n)/e.factorial(r)/e.factorial(n-r)},e.combinationln=function(t,n){return e.factorialln(t)-e.factorialln(n)-e.factorialln(t-n)},e.permutation=function(t,n){return e.factorial(t)/e.factorial(t-n)},e.betafn=function(n,r){if(!(n<=0||r<=0))return n+r>170?t.exp(e.betaln(n,r)):e.gammafn(n)*e.gammafn(r)/e.gammafn(n+r)},e.betaln=function(t,n){return e.gammaln(t)+e.gammaln(n)-e.gammaln(t+n)},e.betacf=function(e,n,r){var i,o,a,u,s=1e-30,l=1,c=n+r,f=n+1,p=n-1,d=1,y=1-c*e/f;for(t.abs(y)<s&&(y=s),y=1/y,u=y;l<=100;l++)if(i=2*l,o=l*(r-l)*e/((p+i)*(n+i)),y=1+o*y,t.abs(y)<s&&(y=s),d=1+o/d,t.abs(d)<s&&(d=s),y=1/y,u*=y*d,o=-(n+l)*(c+l)*e/((n+i)*(f+i)),y=1+o*y,t.abs(y)<s&&(y=s),d=1+o/d,t.abs(d)<s&&(d=s),y=1/y,a=y*d,u*=a,t.abs(a-1)<3e-7)break;return u},e.gammapinv=function(n,r){var i,o,a,u,s,l,c,f=0,p=r-1,d=1e-8,y=e.gammaln(r);if(n>=1)return t.max(100,r+100*t.sqrt(r));if(n<=0)return 0;for(r>1?(l=t.log(p),c=t.exp(p*(l-1)-y),s=n<.5?n:1-n,a=t.sqrt(-2*t.log(s)),i=(2.30753+.27061*a)/(1+a*(.99229+.04481*a))-a,n<.5&&(i=-i),i=t.max(.001,r*t.pow(1-1/(9*r)-i/(3*t.sqrt(r)),3))):(a=1-r*(.253+.12*r),i=n<a?t.pow(n/a,1/r):1-t.log(1-(n-a)/(1-a)));f<12;f++){if(i<=0)return 0;if(o=e.lowRegGamma(r,i)-n,a=r>1?c*t.exp(-(i-p)+p*(t.log(i)-l)):t.exp(-i+p*t.log(i)-y),u=o/a,i-=a=u/(1-.5*t.min(1,u*((r-1)/i-1))),i<=0&&(i=.5*(i+a)),t.abs(a)<d*i)break}return i},e.erf=function(e){var n,r,i,o,a=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],u=a.length-1,s=!1,l=0,c=0;for(e<0&&(e=-e,s=!0),n=2/(2+e),r=4*n-2;u>0;u--)i=l,l=r*l-c+a[u],c=i;return o=n*t.exp(-e*e+.5*(a[0]+r*l)-c),s?o-1:1-o},e.erfc=function(t){return 1-e.erf(t)},e.erfcinv=function(n){var r,i,o,a,u=0;if(n>=2)return-100;if(n<=0)return 100;for(a=n<1?n:2-n,o=t.sqrt(-2*t.log(a/2)),r=-.70711*((2.30753+.27061*o)/(1+o*(.99229+.04481*o))-o);u<2;u++)i=e.erfc(r)-a,r+=i/(1.1283791670955126*t.exp(-r*r)-r*i);return n<1?r:-r},e.ibetainv=function(n,r,i){var o,a,u,s,l,c,f,p,d,y,m,h=1e-8,v=r-1,g=i-1,T=0;if(n<=0)return 0;if(n>=1)return 1;for(r>=1&&i>=1?(u=n<.5?n:1-n,s=t.sqrt(-2*t.log(u)),f=(2.30753+.27061*s)/(1+s*(.99229+.04481*s))-s,n<.5&&(f=-f),p=(f*f-3)/6,d=2/(1/(2*r-1)+1/(2*i-1)),y=f*t.sqrt(p+d)/d-(1/(2*i-1)-1/(2*r-1))*(p+5/6-2/(3*d)),f=r/(r+i*t.exp(2*y))):(o=t.log(r/(r+i)),a=t.log(i/(r+i)),s=t.exp(r*o)/r,l=t.exp(i*a)/i,y=s+l,f=n<s/y?t.pow(r*y*n,1/r):1-t.pow(i*y*(1-n),1/i)),m=-e.gammaln(r)-e.gammaln(i)+e.gammaln(r+i);T<10;T++){if(0===f||1===f)return f;if(c=e.ibeta(f,r,i)-n,s=t.exp(v*t.log(f)+g*t.log(1-f)+m),l=c/s,f-=s=l/(1-.5*t.min(1,l*(v/f-g/(1-f)))),f<=0&&(f=.5*(f+s)),f>=1&&(f=.5*(f+s+1)),t.abs(s)<h*f&&T>0)break}return f},e.ibeta=function(n,r,i){var o=0===n||1===n?0:t.exp(e.gammaln(r+i)-e.gammaln(r)-e.gammaln(i)+r*t.log(n)+i*t.log(1-n));return!(n<0||n>1)&&(n<(r+1)/(r+i+2)?o*e.betacf(n,r,i)/r:1-o*e.betacf(1-n,i,r)/i)},e.randn=function(n,r){var i,o,a,u,s;if(r||(r=n),n)return e.create(n,r,(function(){return e.randn()}));do{i=e._random_fn(),o=1.7156*(e._random_fn()-.5),a=i-.449871,u=t.abs(o)+.386595,s=a*a+u*(.196*u-.25472*a)}while(s>.27597&&(s>.27846||o*o>-4*t.log(i)*i*i));return o/i},e.randg=function(n,r,i){var o,a,u,s,l,c,f=n;if(i||(i=r),n||(n=1),r)return c=e.zeros(r,i),c.alter((function(){return e.randg(n)})),c;n<1&&(n+=1),o=n-1/3,a=1/t.sqrt(9*o);do{do{l=e.randn(),s=1+a*l}while(s<=0);s*=s*s,u=e._random_fn()}while(u>1-.331*t.pow(l,4)&&t.log(u)>.5*l*l+o*(1-s+t.log(s)));if(n==f)return o*s;do{u=e._random_fn()}while(0===u);return t.pow(u,1/f)*o*s},function(t){for(var n=0;n<t.length;n++)(function(t){e.fn[t]=function(){return e(e.map(this,(function(n){return e[t](n)})))}})(t[n])}("gammaln gammafn factorial factorialln".split(" ")),function(t){for(var n=0;n<t.length;n++)(function(t){e.fn[t]=function(){return e(e[t].apply(null,arguments))}})(t[n])}("randn".split(" "))}(e,Math),function(e,t){function n(e,n,r,i){var o,a=0,u=1,s=1,l=1,c=0,f=0;while(t.abs((s-f)/s)>i)f=s,o=-(n+c)*(n+r+c)*e/(n+2*c)/(n+2*c+1),a=s+o*a,u=l+o*u,c+=1,o=c*(r-c)*e/(n+2*c-1)/(n+2*c),s=a+o*s,l=u+o*l,a/=l,u/=l,s/=l,l=1;return s/n}function r(e){return e/t.abs(e)}function i(n,r,i){var o=12,a=6,u=-30,s=-50,l=60,c=8,f=3,p=2,d=3,y=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],m=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],h=.5*n;if(h>=c)return 1;var v,g=2*e.normal.cdf(h,0,1,1,0)-1;g=g>=t.exp(s/i)?t.pow(g,i):0,v=n>f?p:d;for(var T=h,b=(c-h)/v,S=T+b,E=0,x=i-1,_=1;_<=v;_++){for(var w=0,A=.5*(S+T),P=.5*(S-T),O=1;O<=o;O++){var N,I;a<O?(N=o-O+1,I=y[N-1]):(N=O,I=-y[N-1]);var j=P*I,D=A+j,L=D*D;if(L>l)break;var M=2*e.normal.cdf(D,0,1,1,0),C=2*e.normal.cdf(D,n,1,1,0),k=.5*M-.5*C;k>=t.exp(u/x)&&(k=m[N-1]*t.exp(-.5*L)*t.pow(k,x),w+=k)}w*=2*P*i/t.sqrt(2*t.PI),E+=w,T=S,S+=b}return g+=E,g<=t.exp(u/r)?0:(g=t.pow(g,r),g>=1?1:g)}function o(e,n,r){var i=.322232421088,o=.099348462606,a=-1,u=.588581570495,s=-.342242088547,l=.531103462366,c=-.204231210125,f=.10353775285,p=-453642210148e-16,d=.0038560700634,y=.8832,m=.2368,h=1.214,v=1.208,g=1.4142,T=120,b=.5-.5*e,S=t.sqrt(t.log(1/(b*b))),E=S+((((S*p+c)*S+s)*S+a)*S+i)/((((S*d+f)*S+l)*S+u)*S+o);r<T&&(E+=(E*E*E+E)/r/4);var x=y-m*E;return r<T&&(x+=-h/r+v*E/r),E*(x*t.log(n-1)+g)}(function(t){for(var n=0;n<t.length;n++)(function(t){e[t]=function e(t,n,r){return this instanceof e?(this._a=t,this._b=n,this._c=r,this):new e(t,n,r)},e.fn[t]=function(n,r,i){var o=e[t](n,r,i);return o.data=this,o},e[t].prototype.sample=function(n){var r=this._a,i=this._b,o=this._c;return n?e.alter(n,(function(){return e[t].sample(r,i,o)})):e[t].sample(r,i,o)},function(n){for(var r=0;r<n.length;r++)(function(n){e[t].prototype[n]=function(r){var i=this._a,o=this._b,a=this._c;return r||0===r||(r=this.data),"number"!==typeof r?e.fn.map.call(r,(function(r){return e[t][n](r,i,o,a)})):e[t][n](r,i,o,a)}})(n[r])}("pdf cdf inv".split(" ")),function(n){for(var r=0;r<n.length;r++)(function(n){e[t].prototype[n]=function(){return e[t][n](this._a,this._b,this._c)}})(n[r])}("mean median mode variance".split(" "))})(t[n])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),e.extend(e.beta,{pdf:function(n,r,i){return n>1||n<0?0:1==r&&1==i?1:r<512&&i<512?t.pow(n,r-1)*t.pow(1-n,i-1)/e.betafn(r,i):t.exp((r-1)*t.log(n)+(i-1)*t.log(1-n)-e.betaln(r,i))},cdf:function(t,n,r){return t>1||t<0?1*(t>1):e.ibeta(t,n,r)},inv:function(t,n,r){return e.ibetainv(t,n,r)},mean:function(e,t){return e/(e+t)},median:function(t,n){return e.ibetainv(.5,t,n)},mode:function(e,t){return(e-1)/(e+t-2)},sample:function(t,n){var r=e.randg(t);return r/(r+e.randg(n))},variance:function(e,n){return e*n/(t.pow(e+n,2)*(e+n+1))}}),e.extend(e.centralF,{pdf:function(n,r,i){var o,a,u;return n<0?0:r<=2?0===n&&r<2?1/0:0===n&&2===r?1:1/e.betafn(r/2,i/2)*t.pow(r/i,r/2)*t.pow(n,r/2-1)*t.pow(1+r/i*n,-(r+i)/2):(o=r*n/(i+n*r),a=i/(i+n*r),u=r*a/2,u*e.binomial.pdf((r-2)/2,(r+i-2)/2,o))},cdf:function(t,n,r){return t<0?0:e.ibeta(n*t/(n*t+r),n/2,r/2)},inv:function(t,n,r){return r/(n*(1/e.ibetainv(t,n/2,r/2)-1))},mean:function(e,t){return t>2?t/(t-2):void 0},mode:function(e,t){return e>2?t*(e-2)/(e*(t+2)):void 0},sample:function(t,n){var r=2*e.randg(t/2),i=2*e.randg(n/2);return r/t/(i/n)},variance:function(e,t){if(!(t<=4))return 2*t*t*(e+t-2)/(e*(t-2)*(t-2)*(t-4))}}),e.extend(e.cauchy,{pdf:function(e,n,r){return r<0?0:r/(t.pow(e-n,2)+t.pow(r,2))/t.PI},cdf:function(e,n,r){return t.atan((e-n)/r)/t.PI+.5},inv:function(e,n,r){return n+r*t.tan(t.PI*(e-.5))},median:function(e){return e},mode:function(e){return e},sample:function(n,r){return e.randn()*t.sqrt(1/(2*e.randg(.5)))*r+n}}),e.extend(e.chisquare,{pdf:function(n,r){return n<0?0:0===n&&2===r?.5:t.exp((r/2-1)*t.log(n)-n/2-r/2*t.log(2)-e.gammaln(r/2))},cdf:function(t,n){return t<0?0:e.lowRegGamma(n/2,t/2)},inv:function(t,n){return 2*e.gammapinv(t,.5*n)},mean:function(e){return e},median:function(e){return e*t.pow(1-2/(9*e),3)},mode:function(e){return e-2>0?e-2:0},sample:function(t){return 2*e.randg(t/2)},variance:function(e){return 2*e}}),e.extend(e.exponential,{pdf:function(e,n){return e<0?0:n*t.exp(-n*e)},cdf:function(e,n){return e<0?0:1-t.exp(-n*e)},inv:function(e,n){return-t.log(1-e)/n},mean:function(e){return 1/e},median:function(e){return 1/e*t.log(2)},mode:function(){return 0},sample:function(n){return-1/n*t.log(e._random_fn())},variance:function(e){return t.pow(e,-2)}}),e.extend(e.gamma,{pdf:function(n,r,i){return n<0?0:0===n&&1===r?1/i:t.exp((r-1)*t.log(n)-n/i-e.gammaln(r)-r*t.log(i))},cdf:function(t,n,r){return t<0?0:e.lowRegGamma(n,t/r)},inv:function(t,n,r){return e.gammapinv(t,n)*r},mean:function(e,t){return e*t},mode:function(e,t){if(e>1)return(e-1)*t},sample:function(t,n){return e.randg(t)*n},variance:function(e,t){return e*t*t}}),e.extend(e.invgamma,{pdf:function(n,r,i){return n<=0?0:t.exp(-(r+1)*t.log(n)-i/n-e.gammaln(r)+r*t.log(i))},cdf:function(t,n,r){return t<=0?0:1-e.lowRegGamma(n,r/t)},inv:function(t,n,r){return r/e.gammapinv(1-t,n)},mean:function(e,t){return e>1?t/(e-1):void 0},mode:function(e,t){return t/(e+1)},sample:function(t,n){return n/e.randg(t)},variance:function(e,t){if(!(e<=2))return t*t/((e-1)*(e-1)*(e-2))}}),e.extend(e.kumaraswamy,{pdf:function(e,n,r){return 0===e&&1===n?r:1===e&&1===r?n:t.exp(t.log(n)+t.log(r)+(n-1)*t.log(e)+(r-1)*t.log(1-t.pow(e,n)))},cdf:function(e,n,r){return e<0?0:e>1?1:1-t.pow(1-t.pow(e,n),r)},inv:function(e,n,r){return t.pow(1-t.pow(1-e,1/r),1/n)},mean:function(t,n){return n*e.gammafn(1+1/t)*e.gammafn(n)/e.gammafn(1+1/t+n)},median:function(e,n){return t.pow(1-t.pow(2,-1/n),1/e)},mode:function(e,n){if(e>=1&&n>=1&&1!==e&&1!==n)return t.pow((e-1)/(e*n-1),1/e)},variance:function(){throw new Error("variance not yet implemented")}}),e.extend(e.lognormal,{pdf:function(e,n,r){return e<=0?0:t.exp(-t.log(e)-.5*t.log(2*t.PI)-t.log(r)-t.pow(t.log(e)-n,2)/(2*r*r))},cdf:function(n,r,i){return n<0?0:.5+.5*e.erf((t.log(n)-r)/t.sqrt(2*i*i))},inv:function(n,r,i){return t.exp(-1.4142135623730951*i*e.erfcinv(2*n)+r)},mean:function(e,n){return t.exp(e+n*n/2)},median:function(e){return t.exp(e)},mode:function(e,n){return t.exp(e-n*n)},sample:function(n,r){return t.exp(e.randn()*r+n)},variance:function(e,n){return(t.exp(n*n)-1)*t.exp(2*e+n*n)}}),e.extend(e.noncentralt,{pdf:function(n,r,i){var o=1e-14;return t.abs(i)<o?e.studentt.pdf(n,r):t.abs(n)<o?t.exp(e.gammaln((r+1)/2)-i*i/2-.5*t.log(t.PI*r)-e.gammaln(r/2)):r/n*(e.noncentralt.cdf(n*t.sqrt(1+2/r),r+2,i)-e.noncentralt.cdf(n,r,i))},cdf:function(n,r,i){var o=1e-14,a=200;if(t.abs(i)<o)return e.studentt.cdf(n,r);var u=!1;n<0&&(u=!0,i=-i);var s=e.normal.cdf(-i,0,1),l=o+1,c=l,f=n*n/(n*n+r),p=0,d=t.exp(-i*i/2),y=t.exp(-i*i/2-.5*t.log(2)-e.gammaln(1.5))*i;while(p<a||c>o||l>o)c=l,p>0&&(d*=i*i/(2*p),y*=i*i/(2*(p+.5))),l=d*e.beta.cdf(f,p+.5,r/2)+y*e.beta.cdf(f,p+1,r/2),s+=.5*l,p++;return u?1-s:s}}),e.extend(e.normal,{pdf:function(e,n,r){return t.exp(-.5*t.log(2*t.PI)-t.log(r)-t.pow(e-n,2)/(2*r*r))},cdf:function(n,r,i){return.5*(1+e.erf((n-r)/t.sqrt(2*i*i)))},inv:function(t,n,r){return-1.4142135623730951*r*e.erfcinv(2*t)+n},mean:function(e){return e},median:function(e){return e},mode:function(e){return e},sample:function(t,n){return e.randn()*n+t},variance:function(e,t){return t*t}}),e.extend(e.pareto,{pdf:function(e,n,r){return e<n?0:r*t.pow(n,r)/t.pow(e,r+1)},cdf:function(e,n,r){return e<n?0:1-t.pow(n/e,r)},inv:function(e,n,r){return n/t.pow(1-e,1/r)},mean:function(e,n){if(!(n<=1))return n*t.pow(e,n)/(n-1)},median:function(e,n){return e*(n*t.SQRT2)},mode:function(e){return e},variance:function(e,n){if(!(n<=2))return e*e*n/(t.pow(n-1,2)*(n-2))}}),e.extend(e.studentt,{pdf:function(n,r){return r=r>1e100?1e100:r,1/(t.sqrt(r)*e.betafn(.5,r/2))*t.pow(1+n*n/r,-(r+1)/2)},cdf:function(n,r){var i=r/2;return e.ibeta((n+t.sqrt(n*n+r))/(2*t.sqrt(n*n+r)),i,i)},inv:function(n,r){var i=e.ibetainv(2*t.min(n,1-n),.5*r,.5);return i=t.sqrt(r*(1-i)/i),n>.5?i:-i},mean:function(e){return e>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(n){return e.randn()*t.sqrt(n/(2*e.randg(n/2)))},variance:function(e){return e>2?e/(e-2):e>1?1/0:void 0}}),e.extend(e.weibull,{pdf:function(e,n,r){return e<0||n<0||r<0?0:r/n*t.pow(e/n,r-1)*t.exp(-t.pow(e/n,r))},cdf:function(e,n,r){return e<0?0:1-t.exp(-t.pow(e/n,r))},inv:function(e,n,r){return n*t.pow(-t.log(1-e),1/r)},mean:function(t,n){return t*e.gammafn(1+1/n)},median:function(e,n){return e*t.pow(t.log(2),1/n)},mode:function(e,n){return n<=1?0:e*t.pow((n-1)/n,1/n)},sample:function(n,r){return n*t.pow(-t.log(e._random_fn()),1/r)},variance:function(n,r){return n*n*e.gammafn(1+2/r)-t.pow(e.weibull.mean(n,r),2)}}),e.extend(e.uniform,{pdf:function(e,t,n){return e<t||e>n?0:1/(n-t)},cdf:function(e,t,n){return e<t?0:e<n?(e-t)/(n-t):1},inv:function(e,t,n){return t+e*(n-t)},mean:function(e,t){return.5*(e+t)},median:function(t,n){return e.mean(t,n)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(t,n){return t/2+n/2+(n/2-t/2)*(2*e._random_fn()-1)},variance:function(e,n){return t.pow(n-e,2)/12}}),e.extend(e.binomial,{pdf:function(n,r,i){return 0===i||1===i?r*i===n?1:0:e.combination(r,n)*t.pow(i,n)*t.pow(1-i,r-n)},cdf:function(r,i,o){var a,u=1e-10;if(r<0)return 0;if(r>=i)return 1;if(o<0||o>1||i<=0)return NaN;r=t.floor(r);var s=o,l=r+1,c=i-r,f=l+c,p=t.exp(e.gammaln(f)-e.gammaln(c)-e.gammaln(l)+l*t.log(s)+c*t.log(1-s));return a=s<(l+1)/(f+2)?p*n(s,l,c,u):1-p*n(1-s,c,l,u),t.round(1/u*(1-a))/(1/u)}}),e.extend(e.negbin,{pdf:function(n,r,i){return n===n>>>0&&(n<0?0:e.combination(n+r-1,r-1)*t.pow(1-i,n)*t.pow(i,r))},cdf:function(t,n,r){var i=0,o=0;if(t<0)return 0;for(;o<=t;o++)i+=e.negbin.pdf(o,n,r);return i}}),e.extend(e.hypgeom,{pdf:function(n,r,i,o){if(n!==n|0)return!1;if(n<0||n<i-(r-o))return 0;if(n>o||n>i)return 0;if(2*i>r)return 2*o>r?e.hypgeom.pdf(r-i-o+n,r,r-i,r-o):e.hypgeom.pdf(o-n,r,r-i,o);if(2*o>r)return e.hypgeom.pdf(i-n,r,i,r-o);if(i<o)return e.hypgeom.pdf(n,r,o,i);for(var a=1,u=0,s=0;s<n;s++){while(a>1&&u<o)a*=1-i/(r-u),u++;a*=(o-s)*(i-s)/((s+1)*(r-i-o+s+1))}for(;u<o;u++)a*=1-i/(r-u);return t.min(1,t.max(0,a))},cdf:function(n,r,i,o){if(n<0||n<i-(r-o))return 0;if(n>=o||n>=i)return 1;if(2*i>r)return 2*o>r?e.hypgeom.cdf(r-i-o+n,r,r-i,r-o):1-e.hypgeom.cdf(o-n-1,r,r-i,o);if(2*o>r)return 1-e.hypgeom.cdf(i-n-1,r,i,r-o);if(i<o)return e.hypgeom.cdf(n,r,o,i);for(var a=1,u=1,s=0,l=0;l<n;l++){while(a>1&&s<o){var c=1-i/(r-s);u*=c,a*=c,s++}u*=(o-l)*(i-l)/((l+1)*(r-i-o+l+1)),a+=u}for(;s<o;s++)a*=1-i/(r-s);return t.min(1,t.max(0,a))}}),e.extend(e.poisson,{pdf:function(n,r){return r<0||n%1!==0||n<0?0:t.pow(r,n)*t.exp(-r)/e.factorial(n)},cdf:function(t,n){var r=[],i=0;if(t<0)return 0;for(;i<=t;i++)r.push(e.poisson.pdf(i,n));return e.sum(r)},mean:function(e){return e},variance:function(e){return e},sampleSmall:function(n){var r=1,i=0,o=t.exp(-n);do{i++,r*=e._random_fn()}while(r>o);return i-1},sampleLarge:function(n){var r,i,o,a,u,s,l,c,f,p,d=n;a=t.sqrt(d),u=t.log(d),l=.931+2.53*a,s=.02483*l-.059,c=1.1239+1.1328/(l-3.4),f=.9277-3.6224/(l-2);while(1){if(i=t.random()-.5,o=t.random(),p=.5-t.abs(i),r=t.floor((2*s/p+l)*i+d+.43),p>=.07&&o<=f)return r;if(!(r<0||p<.013&&o>p)&&t.log(o)+t.log(c)-t.log(s/(p*p)+l)<=r*u-d-e.loggam(r+1))return r}},sample:function(e){return e<10?this.sampleSmall(e):this.sampleLarge(e)}}),e.extend(e.triangular,{pdf:function(e,t,n,r){return n<=t||r<t||r>n?NaN:e<t||e>n?0:e<r?2*(e-t)/((n-t)*(r-t)):e===r?2/(n-t):2*(n-e)/((n-t)*(n-r))},cdf:function(e,n,r,i){return r<=n||i<n||i>r?NaN:e<=n?0:e>=r?1:e<=i?t.pow(e-n,2)/((r-n)*(i-n)):1-t.pow(r-e,2)/((r-n)*(r-i))},inv:function(e,n,r,i){return r<=n||i<n||i>r?NaN:e<=(i-n)/(r-n)?n+(r-n)*t.sqrt(e*((i-n)/(r-n))):n+(r-n)*(1-t.sqrt((1-e)*(1-(i-n)/(r-n))))},mean:function(e,t,n){return(e+t+n)/3},median:function(e,n,r){return r<=(e+n)/2?n-t.sqrt((n-e)*(n-r))/t.sqrt(2):r>(e+n)/2?e+t.sqrt((n-e)*(r-e))/t.sqrt(2):void 0},mode:function(e,t,n){return n},sample:function(n,r,i){var o=e._random_fn();return o<(i-n)/(r-n)?n+t.sqrt(o*(r-n)*(i-n)):r-t.sqrt((1-o)*(r-n)*(r-i))},variance:function(e,t,n){return(e*e+t*t+n*n-e*t-e*n-t*n)/18}}),e.extend(e.arcsine,{pdf:function(e,n,r){return r<=n?NaN:e<=n||e>=r?0:2/t.PI*t.pow(t.pow(r-n,2)-t.pow(2*e-n-r,2),-.5)},cdf:function(e,n,r){return e<n?0:e<r?2/t.PI*t.asin(t.sqrt((e-n)/(r-n))):1},inv:function(e,n,r){return n+(.5-.5*t.cos(t.PI*e))*(r-n)},mean:function(e,t){return t<=e?NaN:(e+t)/2},median:function(e,t){return t<=e?NaN:(e+t)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(n,r){return(n+r)/2+(r-n)/2*t.sin(2*t.PI*e.uniform.sample(0,1))},variance:function(e,n){return n<=e?NaN:t.pow(n-e,2)/8}}),e.extend(e.laplace,{pdf:function(e,n,r){return r<=0?0:t.exp(-t.abs(e-n)/r)/(2*r)},cdf:function(e,n,r){return r<=0?0:e<n?.5*t.exp((e-n)/r):1-.5*t.exp(-(e-n)/r)},mean:function(e){return e},median:function(e){return e},mode:function(e){return e},variance:function(e,t){return 2*t*t},sample:function(n,i){var o=e._random_fn()-.5;return n-i*r(o)*t.log(1-2*t.abs(o))}}),e.extend(e.tukey,{cdf:function(n,r,o){var a=1,u=r,s=16,l=8,c=-30,f=1e-14,p=100,d=800,y=5e3,m=25e3,h=1,v=.5,g=.25,T=.125,b=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],S=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(n<=0)return 0;if(o<2||a<1||u<2)return NaN;if(!Number.isFinite(n))return 1;if(o>m)return i(n,a,u);var E,x=.5*o,_=x*t.log(o)-o*t.log(2)-e.gammaln(x),w=x-1,A=.25*o;E=o<=p?h:o<=d?v:o<=y?g:T,_+=t.log(E);for(var P=0,O=1;O<=50;O++){for(var N=0,I=(2*O-1)*E,j=1;j<=s;j++){var D,L,M;if(l<j?(D=j-l-1,L=_+w*t.log(I+b[D]*E)-(b[D]*E+I)*A):(D=j-1,L=_+w*t.log(I-b[D]*E)+(b[D]*E-I)*A),L>=c){M=l<j?n*t.sqrt(.5*(b[D]*E+I)):n*t.sqrt(.5*(-b[D]*E+I));var C=i(M,a,u),k=C*S[D]*t.exp(L);N+=k}}if(O*E>=1&&N<=f)break;P+=N}if(N>f)throw new Error("tukey.cdf failed to converge");return P>1&&(P=1),P},inv:function(n,r,i){var a=1,u=r,s=1e-4,l=50;if(i<2||a<1||u<2)return NaN;if(n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return 1/0;var c,f=o(n,u,i),p=e.tukey.cdf(f,r,i)-n;c=p>0?t.max(0,f-1):f+1;for(var d,y=e.tukey.cdf(c,r,i)-n,m=1;m<l;m++){d=c-y*(c-f)/(y-p),p=y,f=c,d<0&&(d=0,y=-n),y=e.tukey.cdf(d,r,i)-n,c=d;var h=t.abs(c-f);if(h<s)return d}throw new Error("tukey.inv failed to converge")}})}(e,Math),function(e,t){var n=Array.prototype.push,r=e.utils.isArray;function i(t){return r(t)||t instanceof e}e.extend({add:function(t,n){return i(n)?(i(n[0])||(n=[n]),e.map(t,(function(e,t,r){return e+n[t][r]}))):e.map(t,(function(e){return e+n}))},subtract:function(t,n){return i(n)?(i(n[0])||(n=[n]),e.map(t,(function(e,t,r){return e-n[t][r]||0}))):e.map(t,(function(e){return e-n}))},divide:function(t,n){return i(n)?(i(n[0])||(n=[n]),e.multiply(t,e.inv(n))):e.map(t,(function(e){return e/n}))},multiply:function(t,n){var r,o,a,u,s,l,c,f;if(void 0===t.length&&void 0===n.length)return t*n;if(s=t.length,l=t[0].length,c=e.zeros(s,a=i(n)?n[0].length:l),f=0,i(n)){for(;f<a;f++)for(r=0;r<s;r++){for(u=0,o=0;o<l;o++)u+=t[r][o]*n[o][f];c[r][f]=u}return 1===s&&1===f?c[0][0]:c}return e.map(t,(function(e){return e*n}))},outer:function(t,n){return e.multiply(t.map((function(e){return[e]})),[n])},dot:function(t,n){i(t[0])||(t=[t]),i(n[0])||(n=[n]);for(var r,o,a=1===t[0].length&&1!==t.length?e.transpose(t):t,u=1===n[0].length&&1!==n.length?e.transpose(n):n,s=[],l=0,c=a.length,f=a[0].length;l<c;l++){for(s[l]=[],r=0,o=0;o<f;o++)r+=a[l][o]*u[l][o];s[l]=r}return 1===s.length?s[0]:s},pow:function(n,r){return e.map(n,(function(e){return t.pow(e,r)}))},exp:function(n){return e.map(n,(function(e){return t.exp(e)}))},log:function(n){return e.map(n,(function(e){return t.log(e)}))},abs:function(n){return e.map(n,(function(e){return t.abs(e)}))},norm:function(e,n){var r=0,o=0;for(isNaN(n)&&(n=2),i(e[0])&&(e=e[0]);o<e.length;o++)r+=t.pow(t.abs(e[o]),n);return t.pow(r,1/n)},angle:function(n,r){return t.acos(e.dot(n,r)/(e.norm(n)*e.norm(r)))},aug:function(e,t){var r,i=[];for(r=0;r<e.length;r++)i.push(e[r].slice());for(r=0;r<i.length;r++)n.apply(i[r],t[r]);return i},inv:function(t){for(var n,r=t.length,i=t[0].length,o=e.identity(r,i),a=e.gauss_jordan(t,o),u=[],s=0;s<r;s++)for(u[s]=[],n=i;n<a[0].length;n++)u[s][n-i]=a[s][n];return u},det:function(e){var t,n=e.length,r=2*n,i=new Array(r),o=n-1,a=r-1,u=o-n+1,s=a,l=0,c=0;if(2===n)return e[0][0]*e[1][1]-e[0][1]*e[1][0];for(;l<r;l++)i[l]=1;for(l=0;l<n;l++){for(t=0;t<n;t++)i[u<0?u+n:u]*=e[l][t],i[s<n?s+n:s]*=e[l][t],u++,s--;u=--o-n+1,s=--a}for(l=0;l<n;l++)c+=i[l];for(;l<r;l++)c-=i[l];return c},gauss_elimination:function(n,r){var i,o,a,u,s=0,l=0,c=n.length,f=n[0].length,p=1,d=0,y=[];for(n=e.aug(n,r),i=n[0].length,s=0;s<c;s++){for(o=n[s][s],l=s,u=s+1;u<f;u++)o<t.abs(n[u][s])&&(o=n[u][s],l=u);if(l!=s)for(u=0;u<i;u++)a=n[s][u],n[s][u]=n[l][u],n[l][u]=a;for(l=s+1;l<c;l++)for(p=n[l][s]/n[s][s],u=s;u<i;u++)n[l][u]=n[l][u]-p*n[s][u]}for(s=c-1;s>=0;s--){for(d=0,l=s+1;l<=c-1;l++)d+=y[l]*n[s][l];y[s]=(n[s][i-1]-d)/n[s][s]}return y},gauss_jordan:function(n,r){var i,o,a,u=e.aug(n,r),s=u.length,l=u[0].length,c=0;for(o=0;o<s;o++){var f=o;for(a=o+1;a<s;a++)t.abs(u[a][o])>t.abs(u[f][o])&&(f=a);var p=u[o];for(u[o]=u[f],u[f]=p,a=o+1;a<s;a++)for(c=u[a][o]/u[o][o],i=o;i<l;i++)u[a][i]-=u[o][i]*c}for(o=s-1;o>=0;o--){for(c=u[o][o],a=0;a<o;a++)for(i=l-1;i>o-1;i--)u[a][i]-=u[o][i]*u[a][o]/c;for(u[o][o]/=c,i=s;i<l;i++)u[o][i]/=c}return u},triaUpSolve:function(t,n){var r,i=t[0].length,o=e.zeros(1,i)[0],a=!1;return void 0!=n[0].length&&(n=n.map((function(e){return e[0]})),a=!0),e.arange(i-1,-1,-1).forEach((function(a){r=e.arange(a+1,i).map((function(e){return o[e]*t[a][e]})),o[a]=(n[a]-e.sum(r))/t[a][a]})),a?o.map((function(e){return[e]})):o},triaLowSolve:function(t,n){var r,i=t[0].length,o=e.zeros(1,i)[0],a=!1;return void 0!=n[0].length&&(n=n.map((function(e){return e[0]})),a=!0),e.arange(i).forEach((function(i){r=e.arange(i).map((function(e){return t[i][e]*o[e]})),o[i]=(n[i]-e.sum(r))/t[i][i]})),a?o.map((function(e){return[e]})):o},lu:function(t){var n,r=t.length,i=e.identity(r),o=e.zeros(t.length,t[0].length);return e.arange(r).forEach((function(e){o[0][e]=t[0][e]})),e.arange(1,r).forEach((function(a){e.arange(a).forEach((function(r){n=e.arange(r).map((function(e){return i[a][e]*o[e][r]})),i[a][r]=(t[a][r]-e.sum(n))/o[r][r]})),e.arange(a,r).forEach((function(r){n=e.arange(a).map((function(e){return i[a][e]*o[e][r]})),o[a][r]=t[n.length][r]-e.sum(n)}))})),[i,o]},cholesky:function(n){var r,i=n.length,o=e.zeros(n.length,n[0].length);return e.arange(i).forEach((function(a){r=e.arange(a).map((function(e){return t.pow(o[a][e],2)})),o[a][a]=t.sqrt(n[a][a]-e.sum(r)),e.arange(a+1,i).forEach((function(t){r=e.arange(a).map((function(e){return o[a][e]*o[t][e]})),o[t][a]=(n[a][t]-e.sum(r))/o[a][a]}))})),o},gauss_jacobi:function(n,r,i,o){for(var a,u,s,l,c=0,f=0,p=n.length,d=[],y=[],m=[];c<p;c++)for(d[c]=[],y[c]=[],m[c]=[],f=0;f<p;f++)c>f?(d[c][f]=n[c][f],y[c][f]=m[c][f]=0):c<f?(y[c][f]=n[c][f],d[c][f]=m[c][f]=0):(m[c][f]=n[c][f],d[c][f]=y[c][f]=0);s=e.multiply(e.multiply(e.inv(m),e.add(d,y)),-1),u=e.multiply(e.inv(m),r),a=i,l=e.add(e.multiply(s,i),u),c=2;while(t.abs(e.norm(e.subtract(l,a)))>o)a=l,l=e.add(e.multiply(s,a),u),c++;return l},gauss_seidel:function(n,r,i,o){for(var a,u,s,l,c,f=0,p=n.length,d=[],y=[],m=[];f<p;f++)for(d[f]=[],y[f]=[],m[f]=[],a=0;a<p;a++)f>a?(d[f][a]=n[f][a],y[f][a]=m[f][a]=0):f<a?(y[f][a]=n[f][a],d[f][a]=m[f][a]=0):(m[f][a]=n[f][a],d[f][a]=y[f][a]=0);l=e.multiply(e.multiply(e.inv(e.add(m,d)),y),-1),s=e.multiply(e.inv(e.add(m,d)),r),u=i,c=e.add(e.multiply(l,i),s),f=2;while(t.abs(e.norm(e.subtract(c,u)))>o)u=c,c=e.add(e.multiply(l,u),s),f+=1;return c},SOR:function(n,r,i,o,a){for(var u,s,l,c,f,p=0,d=n.length,y=[],m=[],h=[];p<d;p++)for(y[p]=[],m[p]=[],h[p]=[],u=0;u<d;u++)p>u?(y[p][u]=n[p][u],m[p][u]=h[p][u]=0):p<u?(m[p][u]=n[p][u],y[p][u]=h[p][u]=0):(h[p][u]=n[p][u],y[p][u]=m[p][u]=0);c=e.multiply(e.inv(e.add(h,e.multiply(y,a))),e.subtract(e.multiply(h,1-a),e.multiply(m,a))),l=e.multiply(e.multiply(e.inv(e.add(h,e.multiply(y,a))),r),a),s=i,f=e.add(e.multiply(c,i),l),p=2;while(t.abs(e.norm(e.subtract(f,s)))>o)s=f,f=e.add(e.multiply(c,s),l),p++;return f},householder:function(n){for(var r,i,o,a,u,s=n.length,l=n[0].length,c=0,f=[],p=[];c<s-1;c++){for(r=0,a=c+1;a<l;a++)r+=n[a][c]*n[a][c];for(u=n[c+1][c]>0?-1:1,r=u*t.sqrt(r),i=t.sqrt((r*r-n[c+1][c]*r)/2),f=e.zeros(s,1),f[c+1][0]=(n[c+1][c]-r)/(2*i),o=c+2;o<s;o++)f[o][0]=n[o][c]/(2*i);p=e.subtract(e.identity(s,l),e.multiply(e.multiply(f,e.transpose(f)),2)),n=e.multiply(p,e.multiply(n,p))}return n},QR:function(){var n=e.sum,r=e.arange;function i(i){var o,a,u,s=i.length,l=i[0].length,c=e.zeros(l,l);for(i=e.copy(i),a=0;a<l;a++){for(c[a][a]=t.sqrt(n(r(s).map((function(e){return i[e][a]*i[e][a]})))),o=0;o<s;o++)i[o][a]=i[o][a]/c[a][a];for(u=a+1;u<l;u++)for(c[a][u]=n(r(s).map((function(e){return i[e][a]*i[e][u]}))),o=0;o<s;o++)i[o][u]=i[o][u]-i[o][a]*c[a][u]}return[i,c]}return i}(),lstsq:function(){function t(t){t=e.copy(t);var n=t.length,r=e.identity(n);return e.arange(n-1,-1,-1).forEach((function(n){e.sliceAssign(r,{row:n},e.divide(e.slice(r,{row:n}),t[n][n])),e.sliceAssign(t,{row:n},e.divide(e.slice(t,{row:n}),t[n][n])),e.arange(n).forEach((function(i){var o=e.multiply(t[i][n],-1),a=e.slice(t,{row:i}),u=e.multiply(e.slice(t,{row:n}),o);e.sliceAssign(t,{row:i},e.add(a,u));var s=e.slice(r,{row:i}),l=e.multiply(e.slice(r,{row:n}),o);e.sliceAssign(r,{row:i},e.add(s,l))}))})),r}function n(n,r){var i=!1;void 0===r[0].length&&(r=r.map((function(e){return[e]})),i=!0);var o=e.QR(n),a=o[0],u=o[1],s=n[0].length,l=e.slice(a,{col:{end:s}}),c=e.slice(u,{row:{end:s}}),f=t(c),p=e.transpose(l);void 0===p[0].length&&(p=[p]);var d=e.multiply(e.multiply(f,p),r);return void 0===d.length&&(d=[[d]]),i?d.map((function(e){return e[0]})):d}return n}(),jacobi:function(n){var r,i,o,a,u,s,l,c,f=1,p=n.length,d=e.identity(p,p),y=[];while(1===f){for(s=n[0][1],a=0,u=1,i=0;i<p;i++)for(o=0;o<p;o++)i!=o&&s<t.abs(n[i][o])&&(s=t.abs(n[i][o]),a=i,u=o);for(l=n[a][a]===n[u][u]?n[a][u]>0?t.PI/4:-t.PI/4:t.atan(2*n[a][u]/(n[a][a]-n[u][u]))/2,c=e.identity(p,p),c[a][a]=t.cos(l),c[a][u]=-t.sin(l),c[u][a]=t.sin(l),c[u][u]=t.cos(l),d=e.multiply(d,c),r=e.multiply(e.multiply(e.inv(c),n),c),n=r,f=0,i=1;i<p;i++)for(o=1;o<p;o++)i!=o&&t.abs(n[i][o])>.001&&(f=1)}for(i=0;i<p;i++)y.push(n[i][i]);return[d,y]},rungekutta:function(e,t,n,r,i,o){var a,u,s,l,c;if(2===o)while(r<=n)a=t*e(r,i),u=t*e(r+t,i+a),s=i+(a+u)/2,i=s,r+=t;if(4===o)while(r<=n)a=t*e(r,i),u=t*e(r+t/2,i+a/2),l=t*e(r+t/2,i+u/2),c=t*e(r+t,i+l),s=i+(a+2*u+2*l+c)/6,i=s,r+=t;return i},romberg:function(e,n,r,i){var o,a,u,s,l,c=0,f=(r-n)/2,p=[],d=[],y=[];while(c<i/2){for(l=e(n),u=n,s=0;u<=r;u+=f,s++)p[s]=u;for(o=p.length,u=1;u<o-1;u++)l+=(u%2!==0?4:2)*e(p[u]);l=f/3*(l+e(r)),y[c]=l,f/=2,c++}a=y.length,o=1;while(1!==a){for(u=0;u<a-1;u++)d[u]=(t.pow(4,o)*y[u+1]-y[u])/(t.pow(4,o)-1);a=d.length,y=d,d=[],o++}return y},richardson:function(e,n,r,i){function o(e,t){for(var n,r=0,i=e.length;r<i;r++)e[r]===t&&(n=r);return n}var a,u,s,l,c,f=t.abs(r-e[o(e,r)+1]),p=0,d=[],y=[];while(i>=f)a=o(e,r+i),u=o(e,r),d[p]=(n[a]-2*n[u]+n[2*u-a])/(i*i),i/=2,p++;l=d.length,s=1;while(1!=l){for(c=0;c<l-1;c++)y[c]=(t.pow(4,s)*d[c+1]-d[c])/(t.pow(4,s)-1);l=y.length,d=y,y=[],s++}return d},simpson:function(e,t,n,r){for(var i,o=(n-t)/r,a=e(t),u=[],s=t,l=0,c=1;s<=n;s+=o,l++)u[l]=s;for(i=u.length;c<i-1;c++)a+=(c%2!==0?4:2)*e(u[c]);return o/3*(a+e(n))},hermite:function(e,t,n,r){for(var i,o=e.length,a=0,u=0,s=[],l=[],c=[],f=[];u<o;u++){for(s[u]=1,i=0;i<o;i++)u!=i&&(s[u]*=(r-e[i])/(e[u]-e[i]));for(l[u]=0,i=0;i<o;i++)u!=i&&(l[u]+=1/(e[u]-e[i]));c[u]=(1-2*(r-e[u])*l[u])*(s[u]*s[u]),f[u]=(r-e[u])*(s[u]*s[u]),a+=c[u]*t[u]+f[u]*n[u]}return a},lagrange:function(e,t,n){for(var r,i,o=0,a=0,u=e.length;a<u;a++){for(i=t[a],r=0;r<u;r++)a!=r&&(i*=(n-e[r])/(e[a]-e[r]));o+=i}return o},cubic_spline:function(t,n,r){for(var i,o=t.length,a=0,u=[],s=[],l=[],c=[],f=[],p=[],d=[];a<o-1;a++)f[a]=t[a+1]-t[a];for(l[0]=0,a=1;a<o-1;a++)l[a]=3/f[a]*(n[a+1]-n[a])-3/f[a-1]*(n[a]-n[a-1]);for(a=1;a<o-1;a++)u[a]=[],s[a]=[],u[a][a-1]=f[a-1],u[a][a]=2*(f[a-1]+f[a]),u[a][a+1]=f[a],s[a][0]=l[a];for(c=e.multiply(e.inv(u),s),i=0;i<o-1;i++)p[i]=(n[i+1]-n[i])/f[i]-f[i]*(c[i+1][0]+2*c[i][0])/3,d[i]=(c[i+1][0]-c[i][0])/(3*f[i]);for(i=0;i<o;i++)if(t[i]>r)break;return i-=1,n[i]+(r-t[i])*p[i]+e.sq(r-t[i])*c[i]+(r-t[i])*e.sq(r-t[i])*d[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(t){var n,r,i=t.length,o=t[0].length,a=0,u=[],s=[],l=[],c=[],f=[],p=[],d=[],y=[],m=[],h=[];for(a=0;a<i;a++)u[a]=e.sum(t[a])/o;for(a=0;a<o;a++)for(d[a]=[],n=0;n<i;n++)d[a][n]=t[n][a]-u[n];for(d=e.transpose(d),a=0;a<i;a++)for(y[a]=[],n=0;n<i;n++)y[a][n]=e.dot([d[a]],[d[n]])/(o-1);for(l=e.jacobi(y),m=l[0],s=l[1],h=e.transpose(m),a=0;a<s.length;a++)for(n=a;n<s.length;n++)s[a]<s[n]&&(r=s[a],s[a]=s[n],s[n]=r,c=h[a],h[a]=h[n],h[n]=c);for(p=e.transpose(d),a=0;a<i;a++)for(f[a]=[],n=0;n<p.length;n++)f[a][n]=e.dot([h[a]],[p[n]]);return[t,s,h,f]}}),function(t){for(var n=0;n<t.length;n++)(function(t){e.fn[t]=function(n,r){var i=this;return r?(setTimeout((function(){r.call(i,e.fn[t].call(i,n))}),15),this):"number"===typeof e[t](this,n)?e[t](this,n):e(e[t](this,n))}})(t[n])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(e,Math),function(e,t){var n=[].slice,r=e.utils.isNumber,i=e.utils.isArray;function o(e,n,r,i){if(e>1||r>1||e<=0||r<=0)throw new Error("Proportions should be greater than 0 and less than 1");var o=(e*n+r*i)/(n+i),a=t.sqrt(o*(1-o)*(1/n+1/i));return(e-r)/a}e.extend({zscore:function(){var t=n.call(arguments);return r(t[1])?(t[0]-t[1])/t[2]:(t[0]-e.mean(t[1]))/e.stdev(t[1],t[2])},ztest:function(){var r,o=n.call(arguments);return i(o[1])?(r=e.zscore(o[0],o[1],o[3]),1===o[2]?e.normal.cdf(-t.abs(r),0,1):2*e.normal.cdf(-t.abs(r),0,1)):o.length>2?(r=e.zscore(o[0],o[1],o[2]),1===o[3]?e.normal.cdf(-t.abs(r),0,1):2*e.normal.cdf(-t.abs(r),0,1)):(r=o[0],1===o[1]?e.normal.cdf(-t.abs(r),0,1):2*e.normal.cdf(-t.abs(r),0,1))}}),e.extend(e.fn,{zscore:function(e,t){return(e-this.mean())/this.stdev(t)},ztest:function(n,r,i){var o=t.abs(this.zscore(n,i));return 1===r?e.normal.cdf(-o,0,1):2*e.normal.cdf(-o,0,1)}}),e.extend({tscore:function(){var r=n.call(arguments);return 4===r.length?(r[0]-r[1])/(r[2]/t.sqrt(r[3])):(r[0]-e.mean(r[1]))/(e.stdev(r[1],!0)/t.sqrt(r[1].length))},ttest:function(){var i,o=n.call(arguments);return 5===o.length?(i=t.abs(e.tscore(o[0],o[1],o[2],o[3])),1===o[4]?e.studentt.cdf(-i,o[3]-1):2*e.studentt.cdf(-i,o[3]-1)):r(o[1])?(i=t.abs(o[0]),1==o[2]?e.studentt.cdf(-i,o[1]-1):2*e.studentt.cdf(-i,o[1]-1)):(i=t.abs(e.tscore(o[0],o[1])),1==o[2]?e.studentt.cdf(-i,o[1].length-1):2*e.studentt.cdf(-i,o[1].length-1))}}),e.extend(e.fn,{tscore:function(e){return(e-this.mean())/(this.stdev(!0)/t.sqrt(this.cols()))},ttest:function(n,r){return 1===r?1-e.studentt.cdf(t.abs(this.tscore(n)),this.cols()-1):2*e.studentt.cdf(-t.abs(this.tscore(n)),this.cols()-1)}}),e.extend({anovafscore:function(){var r,i,o,a,u,s,l,c,f=n.call(arguments);if(1===f.length){for(u=new Array(f[0].length),l=0;l<f[0].length;l++)u[l]=f[0][l];f=u}for(i=new Array,l=0;l<f.length;l++)i=i.concat(f[l]);for(o=e.mean(i),r=0,l=0;l<f.length;l++)r+=f[l].length*t.pow(e.mean(f[l])-o,2);for(r/=f.length-1,s=0,l=0;l<f.length;l++)for(a=e.mean(f[l]),c=0;c<f[l].length;c++)s+=t.pow(f[l][c]-a,2);return s/=i.length-f.length,r/s},anovaftest:function(){var t,i,o,a,u=n.call(arguments);if(r(u[0]))return 1-e.centralF.cdf(u[0],u[1],u[2]);var s=e.anovafscore(u);for(t=u.length-1,o=0,a=0;a<u.length;a++)o+=u[a].length;return i=o-t-1,1-e.centralF.cdf(s,t,i)},ftest:function(t,n,r){return 1-e.centralF.cdf(t,n,r)}}),e.extend(e.fn,{anovafscore:function(){return e.anovafscore(this.toArray())},anovaftes:function(){var t,n=0;for(t=0;t<this.length;t++)n+=this[t].length;return e.ftest(this.anovafscore(),this.length-1,n-this.length)}}),e.extend({qscore:function(){var i,o,a,u,s,l=n.call(arguments);return r(l[0])?(i=l[0],o=l[1],a=l[2],u=l[3],s=l[4]):(i=e.mean(l[0]),o=e.mean(l[1]),a=l[0].length,u=l[1].length,s=l[2]),t.abs(i-o)/(s*t.sqrt((1/a+1/u)/2))},qtest:function(){var t,r=n.call(arguments);3===r.length?(t=r[0],r=r.slice(1)):7===r.length?(t=e.qscore(r[0],r[1],r[2],r[3],r[4]),r=r.slice(5)):(t=e.qscore(r[0],r[1],r[2]),r=r.slice(3));var i=r[0],o=r[1];return 1-e.tukey.cdf(t,o,i-o)},tukeyhsd:function(t){for(var n=e.pooledstdev(t),r=t.map((function(t){return e.mean(t)})),i=t.reduce((function(e,t){return e+t.length}),0),o=[],a=0;a<t.length;++a)for(var u=a+1;u<t.length;++u){var s=e.qtest(r[a],r[u],t[a].length,t[u].length,n,i,t.length);o.push([[a,u],s])}return o}}),e.extend({normalci:function(){var r,i=n.call(arguments),o=new Array(2);return r=4===i.length?t.abs(e.normal.inv(i[1]/2,0,1)*i[2]/t.sqrt(i[3])):t.abs(e.normal.inv(i[1]/2,0,1)*e.stdev(i[2])/t.sqrt(i[2].length)),o[0]=i[0]-r,o[1]=i[0]+r,o},tci:function(){var r,i=n.call(arguments),o=new Array(2);return r=4===i.length?t.abs(e.studentt.inv(i[1]/2,i[3]-1)*i[2]/t.sqrt(i[3])):t.abs(e.studentt.inv(i[1]/2,i[2].length-1)*e.stdev(i[2],!0)/t.sqrt(i[2].length)),o[0]=i[0]-r,o[1]=i[0]+r,o},significant:function(e,t){return e<t}}),e.extend(e.fn,{normalci:function(t,n){return e.normalci(t,n,this.toArray())},tci:function(t,n){return e.tci(t,n,this.toArray())}}),e.extend(e.fn,{oneSidedDifferenceOfProportions:function(t,n,r,i){var a=o(t,n,r,i);return e.ztest(a,1)},twoSidedDifferenceOfProportions:function(t,n,r,i){var a=o(t,n,r,i);return e.ztest(a,2)}})}(e,Math),e.models=function(){function t(t){var r=t[0].length,i=e.arange(r).map((function(i){var o=e.arange(r).filter((function(e){return e!==i}));return n(e.col(t,i).map((function(e){return e[0]})),e.col(t,o))}));return i}function n(t,n){var r=t.length,i=n[0].length-1,o=r-i-1,a=e.lstsq(n,t),u=e.multiply(n,a.map((function(e){return[e]}))).map((function(e){return e[0]})),s=e.subtract(t,u),l=e.mean(t),c=e.sum(u.map((function(e){return Math.pow(e-l,2)}))),f=e.sum(t.map((function(e,t){return Math.pow(e-u[t],2)}))),p=c+f,d=c/p;return{exog:n,endog:t,nobs:r,df_model:i,df_resid:o,coef:a,predict:u,resid:s,ybar:l,SST:p,SSE:c,SSR:f,R2:d}}function r(n){var r=t(n.exog),i=Math.sqrt(n.SSR/n.df_resid),o=r.map((function(e){var t=e.SST,n=e.R2;return i/Math.sqrt(t*(1-n))})),a=n.coef.map((function(e,t){return(e-0)/o[t]})),u=a.map((function(t){var r=e.studentt.cdf(t,n.df_resid);return 2*(r>.5?1-r:r)})),s=e.studentt.inv(.975,n.df_resid),l=n.coef.map((function(e,t){var n=s*o[t];return[e-n,e+n]}));return{se:o,t:a,p:u,sigmaHat:i,interval95:l}}function i(t){var n=t.R2/t.df_model/((1-t.R2)/t.df_resid),r=function(t,n,r){return e.beta.cdf(t/(r/n+t),n/2,r/2)},i=1-r(n,t.df_model,t.df_resid);return{F_statistic:n,pvalue:i}}function o(e,t){var o=n(e,t),a=r(o),u=i(o),s=1-(1-o.R2)*((o.nobs-1)/o.df_resid);return o.t=a,o.f=u,o.adjust_R2=s,o}return{ols:o}}(),e.extend({buildxmatrix:function(){for(var t=new Array(arguments.length),n=0;n<arguments.length;n++){var r=[1];t[n]=r.concat(arguments[n])}return e(t)},builddxmatrix:function(){for(var t=new Array(arguments[0].length),n=0;n<arguments[0].length;n++){var r=[1];t[n]=r.concat(arguments[0][n])}return e(t)},buildjxmatrix:function(t){for(var n=new Array(t.length),r=0;r<t.length;r++)n[r]=t[r];return e.builddxmatrix(n)},buildymatrix:function(t){return e(t).transpose()},buildjymatrix:function(e){return e.transpose()},matrixmult:function(t,n){var r,i,o,a,u;if(t.cols()==n.rows()){if(n.rows()>1){for(a=[],r=0;r<t.rows();r++)for(a[r]=[],i=0;i<n.cols();i++){for(u=0,o=0;o<t.cols();o++)u+=t.toArray()[r][o]*n.toArray()[o][i];a[r][i]=u}return e(a)}for(a=[],r=0;r<t.rows();r++)for(a[r]=[],i=0;i<n.cols();i++){for(u=0,o=0;o<t.cols();o++)u+=t.toArray()[r][o]*n.toArray()[i];a[r][i]=u}return e(a)}},regress:function(t,n){var r=e.xtranspxinv(t),i=t.transpose(),o=e.matrixmult(e(r),i);return e.matrixmult(o,n)},regresst:function(t,n,r){var i=e.regress(t,n),o={anova:{}},a=e.jMatYBar(t,i);o.yBar=a;var u=n.mean();o.anova.residuals=e.residuals(n,a),o.anova.ssr=e.ssr(a,u),o.anova.msr=o.anova.ssr/(t[0].length-1),o.anova.sse=e.sse(n,a),o.anova.mse=o.anova.sse/(n.length-(t[0].length-1)-1),o.anova.sst=e.sst(n,u),o.anova.mst=o.anova.sst/(n.length-1),o.anova.r2=1-o.anova.sse/o.anova.sst,o.anova.r2<0&&(o.anova.r2=0),o.anova.fratio=o.anova.msr/o.anova.mse,o.anova.pvalue=e.anovaftest(o.anova.fratio,t[0].length-1,n.length-(t[0].length-1)-1),o.anova.rmse=Math.sqrt(o.anova.mse),o.anova.r2adj=1-o.anova.mse/o.anova.mst,o.anova.r2adj<0&&(o.anova.r2adj=0),o.stats=new Array(t[0].length);for(var s,l,c,f=e.xtranspxinv(t),p=0;p<i.length;p++)s=Math.sqrt(o.anova.mse*Math.abs(f[p][p])),l=Math.abs(i[p]/s),c=e.ttest(l,n.length-t[0].length-1,r),o.stats[p]=[i[p],s,l,c];return o.regress=i,o},xtranspx:function(t){return e.matrixmult(t.transpose(),t)},xtranspxinv:function(t){var n=e.matrixmult(t.transpose(),t),r=e.inv(n);return r},jMatYBar:function(t,n){var r=e.matrixmult(t,n);return new e(r)},residuals:function(t,n){return e.matrixsubtract(t,n)},ssr:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=Math.pow(e[r]-t,2);return n},sse:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=Math.pow(e[r]-t[r],2);return n},sst:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=Math.pow(e[r]-t,2);return n},matrixsubtract:function(t,n){for(var r=new Array(t.length),i=0;i<t.length;i++){r[i]=new Array(t[i].length);for(var o=0;o<t[i].length;o++)r[i][o]=t[i][o]-n[i][o]}return e(r)}}),e.jStat=e,e}))},74806:function(e,t,n){var r;e=n.nmd(e),n(52262),n(24506),n(26699),function(){var i,o="4.17.21",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",l="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",d=1,y=2,m=4,h=1,v=2,g=1,T=2,b=4,S=8,E=16,x=32,_=64,w=128,A=256,P=512,O=30,N="...",I=800,j=16,D=1,L=2,M=3,C=1/0,k=9007199254740991,R=17976931348623157e292,B=NaN,F=4294967295,V=F-1,K=F>>>1,Y=[["ary",w],["bind",g],["bindKey",T],["curry",S],["curryRight",E],["flip",P],["partial",x],["partialRight",_],["rearg",A]],U="[object Arguments]",J="[object Array]",q="[object AsyncFunction]",X="[object Boolean]",W="[object Date]",$="[object DOMException]",z="[object Error]",G="[object Function]",H="[object GeneratorFunction]",Q="[object Map]",Z="[object Number]",ee="[object Null]",te="[object Object]",ne="[object Promise]",re="[object Proxy]",ie="[object RegExp]",oe="[object Set]",ae="[object String]",ue="[object Symbol]",se="[object Undefined]",le="[object WeakMap]",ce="[object WeakSet]",fe="[object ArrayBuffer]",pe="[object DataView]",de="[object Float32Array]",ye="[object Float64Array]",me="[object Int8Array]",he="[object Int16Array]",ve="[object Int32Array]",ge="[object Uint8Array]",Te="[object Uint8ClampedArray]",be="[object Uint16Array]",Se="[object Uint32Array]",Ee=/\b__p \+= '';/g,xe=/\b(__p \+=) '' \+/g,_e=/(__e\(.*?\)|\b__t\)) \+\n'';/g,we=/&(?:amp|lt|gt|quot|#39);/g,Ae=/[&<>"']/g,Pe=RegExp(we.source),Oe=RegExp(Ae.source),Ne=/<%-([\s\S]+?)%>/g,Ie=/<%([\s\S]+?)%>/g,je=/<%=([\s\S]+?)%>/g,De=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Le=/^\w*$/,Me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ce=/[\\^$.*+?()[\]{}|]/g,ke=RegExp(Ce.source),Re=/^\s+/,Be=/\s/,Fe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ve=/\{\n\/\* \[wrapped with (.+)\] \*/,Ke=/,? & /,Ye=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ue=/[()=,{}\[\]\/\s]/,Je=/\\(\\)?/g,qe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Xe=/\w*$/,We=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,ze=/^\[object .+?Constructor\]$/,Ge=/^0o[0-7]+$/i,He=/^(?:0|[1-9]\d*)$/,Qe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ze=/($^)/,et=/['\n\r\u2028\u2029\\]/g,tt="\\ud800-\\udfff",nt="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",it="\\u20d0-\\u20ff",ot=nt+rt+it,at="\\u2700-\\u27bf",ut="a-z\\xdf-\\xf6\\xf8-\\xff",st="\\xac\\xb1\\xd7\\xf7",lt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ct="\\u2000-\\u206f",ft=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pt="A-Z\\xc0-\\xd6\\xd8-\\xde",dt="\\ufe0e\\ufe0f",yt=st+lt+ct+ft,mt="['’]",ht="["+tt+"]",vt="["+yt+"]",gt="["+ot+"]",Tt="\\d+",bt="["+at+"]",St="["+ut+"]",Et="[^"+tt+yt+Tt+at+ut+pt+"]",xt="\\ud83c[\\udffb-\\udfff]",_t="(?:"+gt+"|"+xt+")",wt="[^"+tt+"]",At="(?:\\ud83c[\\udde6-\\uddff]){2}",Pt="[\\ud800-\\udbff][\\udc00-\\udfff]",Ot="["+pt+"]",Nt="\\u200d",It="(?:"+St+"|"+Et+")",jt="(?:"+Ot+"|"+Et+")",Dt="(?:"+mt+"(?:d|ll|m|re|s|t|ve))?",Lt="(?:"+mt+"(?:D|LL|M|RE|S|T|VE))?",Mt=_t+"?",Ct="["+dt+"]?",kt="(?:"+Nt+"(?:"+[wt,At,Pt].join("|")+")"+Ct+Mt+")*",Rt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Bt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ft=Ct+Mt+kt,Vt="(?:"+[bt,At,Pt].join("|")+")"+Ft,Kt="(?:"+[wt+gt+"?",gt,At,Pt,ht].join("|")+")",Yt=RegExp(mt,"g"),Ut=RegExp(gt,"g"),Jt=RegExp(xt+"(?="+xt+")|"+Kt+Ft,"g"),qt=RegExp([Ot+"?"+St+"+"+Dt+"(?="+[vt,Ot,"$"].join("|")+")",jt+"+"+Lt+"(?="+[vt,Ot+It,"$"].join("|")+")",Ot+"?"+It+"+"+Dt,Ot+"+"+Lt,Bt,Rt,Tt,Vt].join("|"),"g"),Xt=RegExp("["+Nt+tt+ot+dt+"]"),Wt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$t=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zt=-1,Gt={};Gt[de]=Gt[ye]=Gt[me]=Gt[he]=Gt[ve]=Gt[ge]=Gt[Te]=Gt[be]=Gt[Se]=!0,Gt[U]=Gt[J]=Gt[fe]=Gt[X]=Gt[pe]=Gt[W]=Gt[z]=Gt[G]=Gt[Q]=Gt[Z]=Gt[te]=Gt[ie]=Gt[oe]=Gt[ae]=Gt[le]=!1;var Ht={};Ht[U]=Ht[J]=Ht[fe]=Ht[pe]=Ht[X]=Ht[W]=Ht[de]=Ht[ye]=Ht[me]=Ht[he]=Ht[ve]=Ht[Q]=Ht[Z]=Ht[te]=Ht[ie]=Ht[oe]=Ht[ae]=Ht[ue]=Ht[ge]=Ht[Te]=Ht[be]=Ht[Se]=!0,Ht[z]=Ht[G]=Ht[le]=!1;var Qt={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Zt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},tn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nn=parseFloat,rn=parseInt,on="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,an="object"==typeof self&&self&&self.Object===Object&&self,un=on||an||Function("return this")(),sn=t&&!t.nodeType&&t,ln=sn&&e&&!e.nodeType&&e,cn=ln&&ln.exports===sn,fn=cn&&on.process,pn=function(){try{var e=ln&&ln.require&&ln.require("util").types;return e||fn&&fn.binding&&fn.binding("util")}catch(t){}}(),dn=pn&&pn.isArrayBuffer,yn=pn&&pn.isDate,mn=pn&&pn.isMap,hn=pn&&pn.isRegExp,vn=pn&&pn.isSet,gn=pn&&pn.isTypedArray;function Tn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function bn(e,t,n,r){var i=-1,o=null==e?0:e.length;while(++i<o){var a=e[i];t(r,a,n(a),e)}return r}function Sn(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(!1===t(e[n],n,e))break;return e}function En(e,t){var n=null==e?0:e.length;while(n--)if(!1===t(e[n],n,e))break;return e}function xn(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(!t(e[n],n,e))return!1;return!0}function _n(e,t){var n=-1,r=null==e?0:e.length,i=0,o=[];while(++n<r){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function wn(e,t){var n=null==e?0:e.length;return!!n&&Rn(e,t,0)>-1}function An(e,t,n){var r=-1,i=null==e?0:e.length;while(++r<i)if(n(t,e[r]))return!0;return!1}function Pn(e,t){var n=-1,r=null==e?0:e.length,i=Array(r);while(++n<r)i[n]=t(e[n],n,e);return i}function On(e,t){var n=-1,r=t.length,i=e.length;while(++n<r)e[i+n]=t[n];return e}function Nn(e,t,n,r){var i=-1,o=null==e?0:e.length;r&&o&&(n=e[++i]);while(++i<o)n=t(n,e[i],i,e);return n}function In(e,t,n,r){var i=null==e?0:e.length;r&&i&&(n=e[--i]);while(i--)n=t(n,e[i],i,e);return n}function jn(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(t(e[n],n,e))return!0;return!1}var Dn=Kn("length");function Ln(e){return e.split("")}function Mn(e){return e.match(Ye)||[]}function Cn(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function kn(e,t,n,r){var i=e.length,o=n+(r?1:-1);while(r?o--:++o<i)if(t(e[o],o,e))return o;return-1}function Rn(e,t,n){return t===t?dr(e,t,n):kn(e,Fn,n)}function Bn(e,t,n,r){var i=n-1,o=e.length;while(++i<o)if(r(e[i],t))return i;return-1}function Fn(e){return e!==e}function Vn(e,t){var n=null==e?0:e.length;return n?qn(e,t)/n:B}function Kn(e){return function(t){return null==t?i:t[e]}}function Yn(e){return function(t){return null==e?i:e[t]}}function Un(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Jn(e,t){var n=e.length;e.sort(t);while(n--)e[n]=e[n].value;return e}function qn(e,t){var n,r=-1,o=e.length;while(++r<o){var a=t(e[r]);a!==i&&(n=n===i?a:n+a)}return n}function Xn(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}function Wn(e,t){return Pn(t,(function(t){return[t,e[t]]}))}function $n(e){return e?e.slice(0,vr(e)+1).replace(Re,""):e}function zn(e){return function(t){return e(t)}}function Gn(e,t){return Pn(t,(function(t){return e[t]}))}function Hn(e,t){return e.has(t)}function Qn(e,t){var n=-1,r=e.length;while(++n<r&&Rn(t,e[n],0)>-1);return n}function Zn(e,t){var n=e.length;while(n--&&Rn(t,e[n],0)>-1);return n}function er(e,t){var n=e.length,r=0;while(n--)e[n]===t&&++r;return r}var tr=Yn(Qt),nr=Yn(Zt);function rr(e){return"\\"+tn[e]}function ir(e,t){return null==e?i:e[t]}function or(e){return Xt.test(e)}function ar(e){return Wt.test(e)}function ur(e){var t,n=[];while(!(t=e.next()).done)n.push(t.value);return n}function sr(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function lr(e,t){return function(n){return e(t(n))}}function cr(e,t){var n=-1,r=e.length,i=0,o=[];while(++n<r){var a=e[n];a!==t&&a!==p||(e[n]=p,o[i++]=n)}return o}function fr(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function pr(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dr(e,t,n){var r=n-1,i=e.length;while(++r<i)if(e[r]===t)return r;return-1}function yr(e,t,n){var r=n+1;while(r--)if(e[r]===t)return r;return r}function mr(e){return or(e)?Tr(e):Dn(e)}function hr(e){return or(e)?br(e):Ln(e)}function vr(e){var t=e.length;while(t--&&Be.test(e.charAt(t)));return t}var gr=Yn(en);function Tr(e){var t=Jt.lastIndex=0;while(Jt.test(e))++t;return t}function br(e){return e.match(Jt)||[]}function Sr(e){return e.match(qt)||[]}var Er=function e(t){t=null==t?un:xr.defaults(un.Object(),t,xr.pick(un,$t));var n=t.Array,r=t.Date,Be=t.Error,Ye=t.Function,tt=t.Math,nt=t.Object,rt=t.RegExp,it=t.String,ot=t.TypeError,at=n.prototype,ut=Ye.prototype,st=nt.prototype,lt=t["__core-js_shared__"],ct=ut.toString,ft=st.hasOwnProperty,pt=0,dt=function(){var e=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),yt=st.toString,mt=ct.call(nt),ht=un._,vt=rt("^"+ct.call(ft).replace(Ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gt=cn?t.Buffer:i,Tt=t.Symbol,bt=t.Uint8Array,St=gt?gt.allocUnsafe:i,Et=lr(nt.getPrototypeOf,nt),xt=nt.create,_t=st.propertyIsEnumerable,wt=at.splice,At=Tt?Tt.isConcatSpreadable:i,Pt=Tt?Tt.iterator:i,Ot=Tt?Tt.toStringTag:i,Nt=function(){try{var e=Wa(nt,"defineProperty");return e({},"",{}),e}catch(t){}}(),It=t.clearTimeout!==un.clearTimeout&&t.clearTimeout,jt=r&&r.now!==un.Date.now&&r.now,Dt=t.setTimeout!==un.setTimeout&&t.setTimeout,Lt=tt.ceil,Mt=tt.floor,Ct=nt.getOwnPropertySymbols,kt=gt?gt.isBuffer:i,Rt=t.isFinite,Bt=at.join,Ft=lr(nt.keys,nt),Vt=tt.max,Kt=tt.min,Jt=r.now,qt=t.parseInt,Xt=tt.random,Wt=at.reverse,Qt=Wa(t,"DataView"),Zt=Wa(t,"Map"),en=Wa(t,"Promise"),tn=Wa(t,"Set"),on=Wa(t,"WeakMap"),an=Wa(nt,"create"),sn=on&&new on,ln={},fn=Du(Qt),pn=Du(Zt),Dn=Du(en),Ln=Du(tn),Yn=Du(on),dr=Tt?Tt.prototype:i,Tr=dr?dr.valueOf:i,br=dr?dr.toString:i;function Er(e){if(wc(e)&&!sc(e)&&!(e instanceof Pr)){if(e instanceof Ar)return e;if(ft.call(e,"__wrapped__"))return Mu(e)}return new Ar(e)}var _r=function(){function e(){}return function(t){if(!_c(t))return{};if(xt)return xt(t);e.prototype=t;var n=new e;return e.prototype=i,n}}();function wr(){}function Ar(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Pr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function Or(){var e=new Pr(this.__wrapped__);return e.__actions__=ia(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ia(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ia(this.__views__),e}function Nr(){if(this.__filtered__){var e=new Pr(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Ir(){var e=this.__wrapped__.value(),t=this.__dir__,n=sc(e),r=t<0,i=n?e.length:0,o=Qa(0,i,this.__views__),a=o.start,u=o.end,s=u-a,l=r?u:a-1,c=this.__iteratees__,f=c.length,p=0,d=Kt(s,this.__takeCount__);if(!n||!r&&i==s&&d==s)return Fo(e,this.__actions__);var y=[];e:while(s--&&p<d){l+=t;var m=-1,h=e[l];while(++m<f){var v=c[m],g=v.iteratee,T=v.type,b=g(h);if(T==L)h=b;else if(!b){if(T==D)continue e;break e}}y[p++]=h}return y}function jr(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Dr(){this.__data__=an?an(null):{},this.size=0}function Lr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Mr(e){var t=this.__data__;if(an){var n=t[e];return n===c?i:n}return ft.call(t,e)?t[e]:i}function Cr(e){var t=this.__data__;return an?t[e]!==i:ft.call(t,e)}function kr(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=an&&t===i?c:t,this}function Rr(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Br(){this.__data__=[],this.size=0}function Fr(e){var t=this.__data__,n=ci(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():wt.call(t,n,1),--this.size,!0}function Vr(e){var t=this.__data__,n=ci(t,e);return n<0?i:t[n][1]}function Kr(e){return ci(this.__data__,e)>-1}function Yr(e,t){var n=this.__data__,r=ci(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Ur(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Jr(){this.size=0,this.__data__={hash:new jr,map:new(Zt||Rr),string:new jr}}function qr(e){var t=qa(this,e)["delete"](e);return this.size-=t?1:0,t}function Xr(e){return qa(this,e).get(e)}function Wr(e){return qa(this,e).has(e)}function $r(e,t){var n=qa(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function zr(e){var t=-1,n=null==e?0:e.length;this.__data__=new Ur;while(++t<n)this.add(e[t])}function Gr(e){return this.__data__.set(e,c),this}function Hr(e){return this.__data__.has(e)}function Qr(e){var t=this.__data__=new Rr(e);this.size=t.size}function Zr(){this.__data__=new Rr,this.size=0}function ei(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n}function ti(e){return this.__data__.get(e)}function ni(e){return this.__data__.has(e)}function ri(e,t){var n=this.__data__;if(n instanceof Rr){var r=n.__data__;if(!Zt||r.length<a-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ur(r)}return n.set(e,t),this.size=n.size,this}function ii(e,t){var n=sc(e),r=!n&&uc(e),i=!n&&!r&&dc(e),o=!n&&!r&&!i&&Vc(e),a=n||r||i||o,u=a?Xn(e.length,it):[],s=u.length;for(var l in e)!t&&!ft.call(e,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||au(l,s))||u.push(l);return u}function oi(e){var t=e.length;return t?e[go(0,t-1)]:i}function ai(e,t){return Nu(ia(e),hi(t,0,e.length))}function ui(e){return Nu(ia(e))}function si(e,t,n){(n!==i&&!ic(e[t],n)||n===i&&!(t in e))&&yi(e,t,n)}function li(e,t,n){var r=e[t];ft.call(e,t)&&ic(r,n)&&(n!==i||t in e)||yi(e,t,n)}function ci(e,t){var n=e.length;while(n--)if(ic(e[n][0],t))return n;return-1}function fi(e,t,n,r){return Ei(e,(function(e,i,o){t(r,e,n(e),o)})),r}function pi(e,t){return e&&oa(t,xf(t),e)}function di(e,t){return e&&oa(t,_f(t),e)}function yi(e,t,n){"__proto__"==t&&Nt?Nt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function mi(e,t){var r=-1,o=t.length,a=n(o),u=null==e;while(++r<o)a[r]=u?i:vf(e,t[r]);return a}function hi(e,t,n){return e===e&&(n!==i&&(e=e<=n?e:n),t!==i&&(e=e>=t?e:t)),e}function vi(e,t,n,r,o,a){var u,s=t&d,l=t&y,c=t&m;if(n&&(u=o?n(e,r,o,a):n(e)),u!==i)return u;if(!_c(e))return e;var f=sc(e);if(f){if(u=tu(e),!s)return ia(e,u)}else{var p=Ha(e),h=p==G||p==H;if(dc(e))return $o(e,s);if(p==te||p==U||h&&!o){if(u=l||h?{}:nu(e),!s)return l?ua(e,di(u,e)):aa(e,pi(u,e))}else{if(!Ht[p])return o?e:{};u=ru(e,p,s)}}a||(a=new Qr);var v=a.get(e);if(v)return v;a.set(e,u),Rc(e)?e.forEach((function(r){u.add(vi(r,t,n,r,e,a))})):Ac(e)&&e.forEach((function(r,i){u.set(i,vi(r,t,n,i,e,a))}));var g=c?l?Va:Fa:l?_f:xf,T=f?i:g(e);return Sn(T||e,(function(r,i){T&&(i=r,r=e[i]),li(u,i,vi(r,t,n,i,e,a))})),u}function gi(e){var t=xf(e);return function(n){return Ti(n,e,t)}}function Ti(e,t,n){var r=n.length;if(null==e)return!r;e=nt(e);while(r--){var o=n[r],a=t[o],u=e[o];if(u===i&&!(o in e)||!a(u))return!1}return!0}function bi(e,t,n){if("function"!=typeof e)throw new ot(s);return wu((function(){e.apply(i,n)}),t)}function Si(e,t,n,r){var i=-1,o=wn,u=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=Pn(t,zn(n))),r?(o=An,u=!1):t.length>=a&&(o=Hn,u=!1,t=new zr(t));e:while(++i<s){var f=e[i],p=null==n?f:n(f);if(f=r||0!==f?f:0,u&&p===p){var d=c;while(d--)if(t[d]===p)continue e;l.push(f)}else o(t,p,r)||l.push(f)}return l}Er.templateSettings={escape:Ne,evaluate:Ie,interpolate:je,variable:"",imports:{_:Er}},Er.prototype=wr.prototype,Er.prototype.constructor=Er,Ar.prototype=_r(wr.prototype),Ar.prototype.constructor=Ar,Pr.prototype=_r(wr.prototype),Pr.prototype.constructor=Pr,jr.prototype.clear=Dr,jr.prototype["delete"]=Lr,jr.prototype.get=Mr,jr.prototype.has=Cr,jr.prototype.set=kr,Rr.prototype.clear=Br,Rr.prototype["delete"]=Fr,Rr.prototype.get=Vr,Rr.prototype.has=Kr,Rr.prototype.set=Yr,Ur.prototype.clear=Jr,Ur.prototype["delete"]=qr,Ur.prototype.get=Xr,Ur.prototype.has=Wr,Ur.prototype.set=$r,zr.prototype.add=zr.prototype.push=Gr,zr.prototype.has=Hr,Qr.prototype.clear=Zr,Qr.prototype["delete"]=ei,Qr.prototype.get=ti,Qr.prototype.has=ni,Qr.prototype.set=ri;var Ei=ca(ji),xi=ca(Di,!0);function _i(e,t){var n=!0;return Ei(e,(function(e,r,i){return n=!!t(e,r,i),n})),n}function wi(e,t,n){var r=-1,o=e.length;while(++r<o){var a=e[r],u=t(a);if(null!=u&&(s===i?u===u&&!Fc(u):n(u,s)))var s=u,l=a}return l}function Ai(e,t,n,r){var o=e.length;n=$c(n),n<0&&(n=-n>o?0:o+n),r=r===i||r>o?o:$c(r),r<0&&(r+=o),r=n>r?0:zc(r);while(n<r)e[n++]=t;return e}function Pi(e,t){var n=[];return Ei(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function Oi(e,t,n,r,i){var o=-1,a=e.length;n||(n=ou),i||(i=[]);while(++o<a){var u=e[o];t>0&&n(u)?t>1?Oi(u,t-1,n,r,i):On(i,u):r||(i[i.length]=u)}return i}var Ni=fa(),Ii=fa(!0);function ji(e,t){return e&&Ni(e,t,xf)}function Di(e,t){return e&&Ii(e,t,xf)}function Li(e,t){return _n(t,(function(t){return Sc(e[t])}))}function Mi(e,t){t=Jo(t,e);var n=0,r=t.length;while(null!=e&&n<r)e=e[ju(t[n++])];return n&&n==r?e:i}function Ci(e,t,n){var r=t(e);return sc(e)?r:On(r,n(e))}function ki(e){return null==e?e===i?se:ee:Ot&&Ot in nt(e)?$a(e):Tu(e)}function Ri(e,t){return e>t}function Bi(e,t){return null!=e&&ft.call(e,t)}function Fi(e,t){return null!=e&&t in nt(e)}function Vi(e,t,n){return e>=Kt(t,n)&&e<Vt(t,n)}function Ki(e,t,r){var o=r?An:wn,a=e[0].length,u=e.length,s=u,l=n(u),c=1/0,f=[];while(s--){var p=e[s];s&&t&&(p=Pn(p,zn(t))),c=Kt(p.length,c),l[s]=!r&&(t||a>=120&&p.length>=120)?new zr(s&&p):i}p=e[0];var d=-1,y=l[0];e:while(++d<a&&f.length<c){var m=p[d],h=t?t(m):m;if(m=r||0!==m?m:0,!(y?Hn(y,h):o(f,h,r))){s=u;while(--s){var v=l[s];if(!(v?Hn(v,h):o(e[s],h,r)))continue e}y&&y.push(h),f.push(m)}}return f}function Yi(e,t,n,r){return ji(e,(function(e,i,o){t(r,n(e),i,o)})),r}function Ui(e,t,n){t=Jo(t,e),e=Su(e,t);var r=null==e?e:e[ju(os(t))];return null==r?i:Tn(r,e,n)}function Ji(e){return wc(e)&&ki(e)==U}function qi(e){return wc(e)&&ki(e)==fe}function Xi(e){return wc(e)&&ki(e)==W}function Wi(e,t,n,r,i){return e===t||(null==e||null==t||!wc(e)&&!wc(t)?e!==e&&t!==t:$i(e,t,n,r,Wi,i))}function $i(e,t,n,r,i,o){var a=sc(e),u=sc(t),s=a?J:Ha(e),l=u?J:Ha(t);s=s==U?te:s,l=l==U?te:l;var c=s==te,f=l==te,p=s==l;if(p&&dc(e)){if(!dc(t))return!1;a=!0,c=!1}if(p&&!c)return o||(o=new Qr),a||Vc(e)?Ca(e,t,n,r,i,o):ka(e,t,s,n,r,i,o);if(!(n&h)){var d=c&&ft.call(e,"__wrapped__"),y=f&&ft.call(t,"__wrapped__");if(d||y){var m=d?e.value():e,v=y?t.value():t;return o||(o=new Qr),i(m,v,n,r,o)}}return!!p&&(o||(o=new Qr),Ra(e,t,n,r,i,o))}function zi(e){return wc(e)&&Ha(e)==Q}function Gi(e,t,n,r){var o=n.length,a=o,u=!r;if(null==e)return!a;e=nt(e);while(o--){var s=n[o];if(u&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}while(++o<a){s=n[o];var l=s[0],c=e[l],f=s[1];if(u&&s[2]){if(c===i&&!(l in e))return!1}else{var p=new Qr;if(r)var d=r(c,f,l,e,t,p);if(!(d===i?Wi(f,c,h|v,r,p):d))return!1}}return!0}function Hi(e){if(!_c(e)||fu(e))return!1;var t=Sc(e)?vt:ze;return t.test(Du(e))}function Qi(e){return wc(e)&&ki(e)==ie}function Zi(e){return wc(e)&&Ha(e)==oe}function eo(e){return wc(e)&&xc(e.length)&&!!Gt[ki(e)]}function to(e){return"function"==typeof e?e:null==e?jp:"object"==typeof e?sc(e)?uo(e[0],e[1]):ao(e):Jp(e)}function no(e){if(!du(e))return Ft(e);var t=[];for(var n in nt(e))ft.call(e,n)&&"constructor"!=n&&t.push(n);return t}function ro(e){if(!_c(e))return gu(e);var t=du(e),n=[];for(var r in e)("constructor"!=r||!t&&ft.call(e,r))&&n.push(r);return n}function io(e,t){return e<t}function oo(e,t){var r=-1,i=cc(e)?n(e.length):[];return Ei(e,(function(e,n,o){i[++r]=t(e,n,o)})),i}function ao(e){var t=Xa(e);return 1==t.length&&t[0][2]?mu(t[0][0],t[0][1]):function(n){return n===e||Gi(n,e,t)}}function uo(e,t){return su(e)&&yu(t)?mu(ju(e),t):function(n){var r=vf(n,e);return r===i&&r===t?Tf(n,e):Wi(t,r,h|v)}}function so(e,t,n,r,o){e!==t&&Ni(t,(function(a,u){if(o||(o=new Qr),_c(a))lo(e,t,u,n,so,r,o);else{var s=r?r(xu(e,u),a,u+"",e,t,o):i;s===i&&(s=a),si(e,u,s)}}),_f)}function lo(e,t,n,r,o,a,u){var s=xu(e,n),l=xu(t,n),c=u.get(l);if(c)si(e,n,c);else{var f=a?a(s,l,n+"",e,t,u):i,p=f===i;if(p){var d=sc(l),y=!d&&dc(l),m=!d&&!y&&Vc(l);f=l,d||y||m?sc(s)?f=s:fc(s)?f=ia(s):y?(p=!1,f=$o(l,!0)):m?(p=!1,f=Zo(l,!0)):f=[]:Mc(l)||uc(l)?(f=s,uc(s)?f=Hc(s):_c(s)&&!Sc(s)||(f=nu(l))):p=!1}p&&(u.set(l,f),o(f,l,r,a,u),u["delete"](l)),si(e,n,f)}}function co(e,t){var n=e.length;if(n)return t+=t<0?n:0,au(t,n)?e[t]:i}function fo(e,t,n){t=t.length?Pn(t,(function(e){return sc(e)?function(t){return Mi(t,1===e.length?e[0]:e)}:e})):[jp];var r=-1;t=Pn(t,zn(Ja()));var i=oo(e,(function(e,n,i){var o=Pn(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return Jn(i,(function(e,t){return ta(e,t,n)}))}function po(e,t){return yo(e,t,(function(t,n){return Tf(e,n)}))}function yo(e,t,n){var r=-1,i=t.length,o={};while(++r<i){var a=t[r],u=Mi(e,a);n(u,a)&&_o(o,Jo(a,e),u)}return o}function mo(e){return function(t){return Mi(t,e)}}function ho(e,t,n,r){var i=r?Bn:Rn,o=-1,a=t.length,u=e;e===t&&(t=ia(t)),n&&(u=Pn(e,zn(n)));while(++o<a){var s=0,l=t[o],c=n?n(l):l;while((s=i(u,c,s,r))>-1)u!==e&&wt.call(u,s,1),wt.call(e,s,1)}return e}function vo(e,t){var n=e?t.length:0,r=n-1;while(n--){var i=t[n];if(n==r||i!==o){var o=i;au(i)?wt.call(e,i,1):ko(e,i)}}return e}function go(e,t){return e+Mt(Xt()*(t-e+1))}function To(e,t,r,i){var o=-1,a=Vt(Lt((t-e)/(r||1)),0),u=n(a);while(a--)u[i?a:++o]=e,e+=r;return u}function bo(e,t){var n="";if(!e||t<1||t>k)return n;do{t%2&&(n+=e),t=Mt(t/2),t&&(e+=e)}while(t);return n}function So(e,t){return Au(bu(e,t,jp),e+"")}function Eo(e){return oi(Yf(e))}function xo(e,t){var n=Yf(e);return Nu(n,hi(t,0,n.length))}function _o(e,t,n,r){if(!_c(e))return e;t=Jo(t,e);var o=-1,a=t.length,u=a-1,s=e;while(null!=s&&++o<a){var l=ju(t[o]),c=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=u){var f=s[l];c=r?r(f,l,s):i,c===i&&(c=_c(f)?f:au(t[o+1])?[]:{})}li(s,l,c),s=s[l]}return e}var wo=sn?function(e,t){return sn.set(e,t),e}:jp,Ao=Nt?function(e,t){return Nt(e,"toString",{configurable:!0,enumerable:!1,value:Pp(t),writable:!0})}:jp;function Po(e){return Nu(Yf(e))}function Oo(e,t,r){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;var a=n(o);while(++i<o)a[i]=e[i+t];return a}function No(e,t){var n;return Ei(e,(function(e,r,i){return n=t(e,r,i),!n})),!!n}function Io(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t===t&&i<=K){while(r<i){var o=r+i>>>1,a=e[o];null!==a&&!Fc(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return jo(e,t,jp,n)}function jo(e,t,n,r){var o=0,a=null==e?0:e.length;if(0===a)return 0;t=n(t);var u=t!==t,s=null===t,l=Fc(t),c=t===i;while(o<a){var f=Mt((o+a)/2),p=n(e[f]),d=p!==i,y=null===p,m=p===p,h=Fc(p);if(u)var v=r||m;else v=c?m&&(r||d):s?m&&d&&(r||!y):l?m&&d&&!y&&(r||!h):!y&&!h&&(r?p<=t:p<t);v?o=f+1:a=f}return Kt(a,V)}function Do(e,t){var n=-1,r=e.length,i=0,o=[];while(++n<r){var a=e[n],u=t?t(a):a;if(!n||!ic(u,s)){var s=u;o[i++]=0===a?0:a}}return o}function Lo(e){return"number"==typeof e?e:Fc(e)?B:+e}function Mo(e){if("string"==typeof e)return e;if(sc(e))return Pn(e,Mo)+"";if(Fc(e))return br?br.call(e):"";var t=e+"";return"0"==t&&1/e==-C?"-0":t}function Co(e,t,n){var r=-1,i=wn,o=e.length,u=!0,s=[],l=s;if(n)u=!1,i=An;else if(o>=a){var c=t?null:Na(e);if(c)return fr(c);u=!1,i=Hn,l=new zr}else l=t?[]:s;e:while(++r<o){var f=e[r],p=t?t(f):f;if(f=n||0!==f?f:0,u&&p===p){var d=l.length;while(d--)if(l[d]===p)continue e;t&&l.push(p),s.push(f)}else i(l,p,n)||(l!==s&&l.push(p),s.push(f))}return s}function ko(e,t){return t=Jo(t,e),e=Su(e,t),null==e||delete e[ju(os(t))]}function Ro(e,t,n,r){return _o(e,t,n(Mi(e,t)),r)}function Bo(e,t,n,r){var i=e.length,o=r?i:-1;while((r?o--:++o<i)&&t(e[o],o,e));return n?Oo(e,r?0:o,r?o+1:i):Oo(e,r?o+1:0,r?i:o)}function Fo(e,t){var n=e;return n instanceof Pr&&(n=n.value()),Nn(t,(function(e,t){return t.func.apply(t.thisArg,On([e],t.args))}),n)}function Vo(e,t,r){var i=e.length;if(i<2)return i?Co(e[0]):[];var o=-1,a=n(i);while(++o<i){var u=e[o],s=-1;while(++s<i)s!=o&&(a[o]=Si(a[o]||u,e[s],t,r))}return Co(Oi(a,1),t,r)}function Ko(e,t,n){var r=-1,o=e.length,a=t.length,u={};while(++r<o){var s=r<a?t[r]:i;n(u,e[r],s)}return u}function Yo(e){return fc(e)?e:[]}function Uo(e){return"function"==typeof e?e:jp}function Jo(e,t){return sc(e)?e:su(e,t)?[e]:Iu(Zc(e))}var qo=So;function Xo(e,t,n){var r=e.length;return n=n===i?r:n,!t&&n>=r?e:Oo(e,t,n)}var Wo=It||function(e){return un.clearTimeout(e)};function $o(e,t){if(t)return e.slice();var n=e.length,r=St?St(n):new e.constructor(n);return e.copy(r),r}function zo(e){var t=new e.constructor(e.byteLength);return new bt(t).set(new bt(e)),t}function Go(e,t){var n=t?zo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function Ho(e){var t=new e.constructor(e.source,Xe.exec(e));return t.lastIndex=e.lastIndex,t}function Qo(e){return Tr?nt(Tr.call(e)):{}}function Zo(e,t){var n=t?zo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function ea(e,t){if(e!==t){var n=e!==i,r=null===e,o=e===e,a=Fc(e),u=t!==i,s=null===t,l=t===t,c=Fc(t);if(!s&&!c&&!a&&e>t||a&&u&&l&&!s&&!c||r&&u&&l||!n&&l||!o)return 1;if(!r&&!a&&!c&&e<t||c&&n&&o&&!r&&!a||s&&n&&o||!u&&o||!l)return-1}return 0}function ta(e,t,n){var r=-1,i=e.criteria,o=t.criteria,a=i.length,u=n.length;while(++r<a){var s=ea(i[r],o[r]);if(s){if(r>=u)return s;var l=n[r];return s*("desc"==l?-1:1)}}return e.index-t.index}function na(e,t,r,i){var o=-1,a=e.length,u=r.length,s=-1,l=t.length,c=Vt(a-u,0),f=n(l+c),p=!i;while(++s<l)f[s]=t[s];while(++o<u)(p||o<a)&&(f[r[o]]=e[o]);while(c--)f[s++]=e[o++];return f}function ra(e,t,r,i){var o=-1,a=e.length,u=-1,s=r.length,l=-1,c=t.length,f=Vt(a-s,0),p=n(f+c),d=!i;while(++o<f)p[o]=e[o];var y=o;while(++l<c)p[y+l]=t[l];while(++u<s)(d||o<a)&&(p[y+r[u]]=e[o++]);return p}function ia(e,t){var r=-1,i=e.length;t||(t=n(i));while(++r<i)t[r]=e[r];return t}function oa(e,t,n,r){var o=!n;n||(n={});var a=-1,u=t.length;while(++a<u){var s=t[a],l=r?r(n[s],e[s],s,n,e):i;l===i&&(l=e[s]),o?yi(n,s,l):li(n,s,l)}return n}function aa(e,t){return oa(e,za(e),t)}function ua(e,t){return oa(e,Ga(e),t)}function sa(e,t){return function(n,r){var i=sc(n)?bn:fi,o=t?t():{};return i(n,e,Ja(r,2),o)}}function la(e){return So((function(t,n){var r=-1,o=n.length,a=o>1?n[o-1]:i,u=o>2?n[2]:i;a=e.length>3&&"function"==typeof a?(o--,a):i,u&&uu(n[0],n[1],u)&&(a=o<3?i:a,o=1),t=nt(t);while(++r<o){var s=n[r];s&&e(t,s,r,a)}return t}))}function ca(e,t){return function(n,r){if(null==n)return n;if(!cc(n))return e(n,r);var i=n.length,o=t?i:-1,a=nt(n);while(t?o--:++o<i)if(!1===r(a[o],o,a))break;return n}}function fa(e){return function(t,n,r){var i=-1,o=nt(t),a=r(t),u=a.length;while(u--){var s=a[e?u:++i];if(!1===n(o[s],s,o))break}return t}}function pa(e,t,n){var r=t&g,i=ma(e);function o(){var t=this&&this!==un&&this instanceof o?i:e;return t.apply(r?n:this,arguments)}return o}function da(e){return function(t){t=Zc(t);var n=or(t)?hr(t):i,r=n?n[0]:t.charAt(0),o=n?Xo(n,1).join(""):t.slice(1);return r[e]()+o}}function ya(e){return function(t){return Nn(Ep(zf(t).replace(Yt,"")),e,"")}}function ma(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=_r(e.prototype),r=e.apply(n,t);return _c(r)?r:n}}function ha(e,t,r){var o=ma(e);function a(){var u=arguments.length,s=n(u),l=u,c=Ua(a);while(l--)s[l]=arguments[l];var f=u<3&&s[0]!==c&&s[u-1]!==c?[]:cr(s,c);if(u-=f.length,u<r)return Pa(e,t,Ta,a.placeholder,i,s,f,i,i,r-u);var p=this&&this!==un&&this instanceof a?o:e;return Tn(p,this,s)}return a}function va(e){return function(t,n,r){var o=nt(t);if(!cc(t)){var a=Ja(n,3);t=xf(t),n=function(e){return a(o[e],e,o)}}var u=e(t,n,r);return u>-1?o[a?t[u]:u]:i}}function ga(e){return Ba((function(t){var n=t.length,r=n,o=Ar.prototype.thru;e&&t.reverse();while(r--){var a=t[r];if("function"!=typeof a)throw new ot(s);if(o&&!u&&"wrapper"==Ya(a))var u=new Ar([],!0)}r=u?r:n;while(++r<n){a=t[r];var l=Ya(a),c="wrapper"==l?Ka(a):i;u=c&&cu(c[0])&&c[1]==(w|S|x|A)&&!c[4].length&&1==c[9]?u[Ya(c[0])].apply(u,c[3]):1==a.length&&cu(a)?u[l]():u.thru(a)}return function(){var e=arguments,r=e[0];if(u&&1==e.length&&sc(r))return u.plant(r).value();var i=0,o=n?t[i].apply(this,e):r;while(++i<n)o=t[i].call(this,o);return o}}))}function Ta(e,t,r,o,a,u,s,l,c,f){var p=t&w,d=t&g,y=t&T,m=t&(S|E),h=t&P,v=y?i:ma(e);function b(){var i=arguments.length,g=n(i),T=i;while(T--)g[T]=arguments[T];if(m)var S=Ua(b),E=er(g,S);if(o&&(g=na(g,o,a,m)),u&&(g=ra(g,u,s,m)),i-=E,m&&i<f){var x=cr(g,S);return Pa(e,t,Ta,b.placeholder,r,g,x,l,c,f-i)}var _=d?r:this,w=y?_[e]:e;return i=g.length,l?g=Eu(g,l):h&&i>1&&g.reverse(),p&&c<i&&(g.length=c),this&&this!==un&&this instanceof b&&(w=v||ma(w)),w.apply(_,g)}return b}function ba(e,t){return function(n,r){return Yi(n,e,t(r),{})}}function Sa(e,t){return function(n,r){var o;if(n===i&&r===i)return t;if(n!==i&&(o=n),r!==i){if(o===i)return r;"string"==typeof n||"string"==typeof r?(n=Mo(n),r=Mo(r)):(n=Lo(n),r=Lo(r)),o=e(n,r)}return o}}function Ea(e){return Ba((function(t){return t=Pn(t,zn(Ja())),So((function(n){var r=this;return e(t,(function(e){return Tn(e,r,n)}))}))}))}function xa(e,t){t=t===i?" ":Mo(t);var n=t.length;if(n<2)return n?bo(t,e):t;var r=bo(t,Lt(e/mr(t)));return or(t)?Xo(hr(r),0,e).join(""):r.slice(0,e)}function _a(e,t,r,i){var o=t&g,a=ma(e);function u(){var t=-1,s=arguments.length,l=-1,c=i.length,f=n(c+s),p=this&&this!==un&&this instanceof u?a:e;while(++l<c)f[l]=i[l];while(s--)f[l++]=arguments[++t];return Tn(p,o?r:this,f)}return u}function wa(e){return function(t,n,r){return r&&"number"!=typeof r&&uu(t,n,r)&&(n=r=i),t=Wc(t),n===i?(n=t,t=0):n=Wc(n),r=r===i?t<n?1:-1:Wc(r),To(t,n,r,e)}}function Aa(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Gc(t),n=Gc(n)),e(t,n)}}function Pa(e,t,n,r,o,a,u,s,l,c){var f=t&S,p=f?u:i,d=f?i:u,y=f?a:i,m=f?i:a;t|=f?x:_,t&=~(f?_:x),t&b||(t&=~(g|T));var h=[e,t,o,y,p,m,d,s,l,c],v=n.apply(i,h);return cu(e)&&_u(v,h),v.placeholder=r,Pu(v,e,t)}function Oa(e){var t=tt[e];return function(e,n){if(e=Gc(e),n=null==n?0:Kt($c(n),292),n&&Rt(e)){var r=(Zc(e)+"e").split("e"),i=t(r[0]+"e"+(+r[1]+n));return r=(Zc(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}var Na=tn&&1/fr(new tn([,-0]))[1]==C?function(e){return new tn(e)}:Fp;function Ia(e){return function(t){var n=Ha(t);return n==Q?sr(t):n==oe?pr(t):Wn(t,e(t))}}function ja(e,t,n,r,o,a,u,l){var c=t&T;if(!c&&"function"!=typeof e)throw new ot(s);var f=r?r.length:0;if(f||(t&=~(x|_),r=o=i),u=u===i?u:Vt($c(u),0),l=l===i?l:$c(l),f-=o?o.length:0,t&_){var p=r,d=o;r=o=i}var y=c?i:Ka(e),m=[e,t,n,r,o,p,d,a,u,l];if(y&&vu(m,y),e=m[0],t=m[1],n=m[2],r=m[3],o=m[4],l=m[9]=m[9]===i?c?0:e.length:Vt(m[9]-f,0),!l&&t&(S|E)&&(t&=~(S|E)),t&&t!=g)h=t==S||t==E?ha(e,t,l):t!=x&&t!=(g|x)||o.length?Ta.apply(i,m):_a(e,t,n,r);else var h=pa(e,t,n);var v=y?wo:_u;return Pu(v(h,m),e,t)}function Da(e,t,n,r){return e===i||ic(e,st[n])&&!ft.call(r,n)?t:e}function La(e,t,n,r,o,a){return _c(e)&&_c(t)&&(a.set(t,e),so(e,t,i,La,a),a["delete"](t)),e}function Ma(e){return Mc(e)?i:e}function Ca(e,t,n,r,o,a){var u=n&h,s=e.length,l=t.length;if(s!=l&&!(u&&l>s))return!1;var c=a.get(e),f=a.get(t);if(c&&f)return c==t&&f==e;var p=-1,d=!0,y=n&v?new zr:i;a.set(e,t),a.set(t,e);while(++p<s){var m=e[p],g=t[p];if(r)var T=u?r(g,m,p,t,e,a):r(m,g,p,e,t,a);if(T!==i){if(T)continue;d=!1;break}if(y){if(!jn(t,(function(e,t){if(!Hn(y,t)&&(m===e||o(m,e,n,r,a)))return y.push(t)}))){d=!1;break}}else if(m!==g&&!o(m,g,n,r,a)){d=!1;break}}return a["delete"](e),a["delete"](t),d}function ka(e,t,n,r,i,o,a){switch(n){case pe:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case fe:return!(e.byteLength!=t.byteLength||!o(new bt(e),new bt(t)));case X:case W:case Z:return ic(+e,+t);case z:return e.name==t.name&&e.message==t.message;case ie:case ae:return e==t+"";case Q:var u=sr;case oe:var s=r&h;if(u||(u=fr),e.size!=t.size&&!s)return!1;var l=a.get(e);if(l)return l==t;r|=v,a.set(e,t);var c=Ca(u(e),u(t),r,i,o,a);return a["delete"](e),c;case ue:if(Tr)return Tr.call(e)==Tr.call(t)}return!1}function Ra(e,t,n,r,o,a){var u=n&h,s=Fa(e),l=s.length,c=Fa(t),f=c.length;if(l!=f&&!u)return!1;var p=l;while(p--){var d=s[p];if(!(u?d in t:ft.call(t,d)))return!1}var y=a.get(e),m=a.get(t);if(y&&m)return y==t&&m==e;var v=!0;a.set(e,t),a.set(t,e);var g=u;while(++p<l){d=s[p];var T=e[d],b=t[d];if(r)var S=u?r(b,T,d,t,e,a):r(T,b,d,e,t,a);if(!(S===i?T===b||o(T,b,n,r,a):S)){v=!1;break}g||(g="constructor"==d)}if(v&&!g){var E=e.constructor,x=t.constructor;E==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof E&&E instanceof E&&"function"==typeof x&&x instanceof x||(v=!1)}return a["delete"](e),a["delete"](t),v}function Ba(e){return Au(bu(e,i,$u),e+"")}function Fa(e){return Ci(e,xf,za)}function Va(e){return Ci(e,_f,Ga)}var Ka=sn?function(e){return sn.get(e)}:Fp;function Ya(e){var t=e.name+"",n=ln[t],r=ft.call(ln,t)?n.length:0;while(r--){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function Ua(e){var t=ft.call(Er,"placeholder")?Er:e;return t.placeholder}function Ja(){var e=Er.iteratee||Dp;return e=e===Dp?to:e,arguments.length?e(arguments[0],arguments[1]):e}function qa(e,t){var n=e.__data__;return lu(t)?n["string"==typeof t?"string":"hash"]:n.map}function Xa(e){var t=xf(e),n=t.length;while(n--){var r=t[n],i=e[r];t[n]=[r,i,yu(i)]}return t}function Wa(e,t){var n=ir(e,t);return Hi(n)?n:i}function $a(e){var t=ft.call(e,Ot),n=e[Ot];try{e[Ot]=i;var r=!0}catch(a){}var o=yt.call(e);return r&&(t?e[Ot]=n:delete e[Ot]),o}var za=Ct?function(e){return null==e?[]:(e=nt(e),_n(Ct(e),(function(t){return _t.call(e,t)})))}:$p,Ga=Ct?function(e){var t=[];while(e)On(t,za(e)),e=Et(e);return t}:$p,Ha=ki;function Qa(e,t,n){var r=-1,i=n.length;while(++r<i){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=Kt(t,e+a);break;case"takeRight":e=Vt(e,t-a);break}}return{start:e,end:t}}function Za(e){var t=e.match(Ve);return t?t[1].split(Ke):[]}function eu(e,t,n){t=Jo(t,e);var r=-1,i=t.length,o=!1;while(++r<i){var a=ju(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:(i=null==e?0:e.length,!!i&&xc(i)&&au(a,i)&&(sc(e)||uc(e)))}function tu(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&ft.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function nu(e){return"function"!=typeof e.constructor||du(e)?{}:_r(Et(e))}function ru(e,t,n){var r=e.constructor;switch(t){case fe:return zo(e);case X:case W:return new r(+e);case pe:return Go(e,n);case de:case ye:case me:case he:case ve:case ge:case Te:case be:case Se:return Zo(e,n);case Q:return new r;case Z:case ae:return new r(e);case ie:return Ho(e);case oe:return new r;case ue:return Qo(e)}}function iu(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(Fe,"{\n/* [wrapped with "+t+"] */\n")}function ou(e){return sc(e)||uc(e)||!!(At&&e&&e[At])}function au(e,t){var n=typeof e;return t=null==t?k:t,!!t&&("number"==n||"symbol"!=n&&He.test(e))&&e>-1&&e%1==0&&e<t}function uu(e,t,n){if(!_c(n))return!1;var r=typeof t;return!!("number"==r?cc(n)&&au(t,n.length):"string"==r&&t in n)&&ic(n[t],e)}function su(e,t){if(sc(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Fc(e))||(Le.test(e)||!De.test(e)||null!=t&&e in nt(t))}function lu(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function cu(e){var t=Ya(e),n=Er[t];if("function"!=typeof n||!(t in Pr.prototype))return!1;if(e===n)return!0;var r=Ka(n);return!!r&&e===r[0]}function fu(e){return!!dt&&dt in e}(Qt&&Ha(new Qt(new ArrayBuffer(1)))!=pe||Zt&&Ha(new Zt)!=Q||en&&Ha(en.resolve())!=ne||tn&&Ha(new tn)!=oe||on&&Ha(new on)!=le)&&(Ha=function(e){var t=ki(e),n=t==te?e.constructor:i,r=n?Du(n):"";if(r)switch(r){case fn:return pe;case pn:return Q;case Dn:return ne;case Ln:return oe;case Yn:return le}return t});var pu=lt?Sc:zp;function du(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||st;return e===n}function yu(e){return e===e&&!_c(e)}function mu(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==i||e in nt(n)))}}function hu(e){var t=Vl(e,(function(e){return n.size===f&&n.clear(),e})),n=t.cache;return t}function vu(e,t){var n=e[1],r=t[1],i=n|r,o=i<(g|T|w),a=r==w&&n==S||r==w&&n==A&&e[7].length<=t[8]||r==(w|A)&&t[7].length<=t[8]&&n==S;if(!o&&!a)return e;r&g&&(e[2]=t[2],i|=n&g?0:b);var u=t[3];if(u){var s=e[3];e[3]=s?na(s,u,t[4]):u,e[4]=s?cr(e[3],p):t[4]}return u=t[5],u&&(s=e[5],e[5]=s?ra(s,u,t[6]):u,e[6]=s?cr(e[5],p):t[6]),u=t[7],u&&(e[7]=u),r&w&&(e[8]=null==e[8]?t[8]:Kt(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i,e}function gu(e){var t=[];if(null!=e)for(var n in nt(e))t.push(n);return t}function Tu(e){return yt.call(e)}function bu(e,t,r){return t=Vt(t===i?e.length-1:t,0),function(){var i=arguments,o=-1,a=Vt(i.length-t,0),u=n(a);while(++o<a)u[o]=i[t+o];o=-1;var s=n(t+1);while(++o<t)s[o]=i[o];return s[t]=r(u),Tn(e,this,s)}}function Su(e,t){return t.length<2?e:Mi(e,Oo(t,0,-1))}function Eu(e,t){var n=e.length,r=Kt(t.length,n),o=ia(e);while(r--){var a=t[r];e[r]=au(a,n)?o[a]:i}return e}function xu(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}var _u=Ou(wo),wu=Dt||function(e,t){return un.setTimeout(e,t)},Au=Ou(Ao);function Pu(e,t,n){var r=t+"";return Au(e,iu(r,Lu(Za(r),n)))}function Ou(e){var t=0,n=0;return function(){var r=Jt(),o=j-(r-n);if(n=r,o>0){if(++t>=I)return arguments[0]}else t=0;return e.apply(i,arguments)}}function Nu(e,t){var n=-1,r=e.length,o=r-1;t=t===i?r:t;while(++n<t){var a=go(n,o),u=e[a];e[a]=e[n],e[n]=u}return e.length=t,e}var Iu=hu((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Me,(function(e,n,r,i){t.push(r?i.replace(Je,"$1"):n||e)})),t}));function ju(e){if("string"==typeof e||Fc(e))return e;var t=e+"";return"0"==t&&1/e==-C?"-0":t}function Du(e){if(null!=e){try{return ct.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Lu(e,t){return Sn(Y,(function(n){var r="_."+n[0];t&n[1]&&!wn(e,r)&&e.push(r)})),e.sort()}function Mu(e){if(e instanceof Pr)return e.clone();var t=new Ar(e.__wrapped__,e.__chain__);return t.__actions__=ia(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Cu(e,t,r){t=(r?uu(e,t,r):t===i)?1:Vt($c(t),0);var o=null==e?0:e.length;if(!o||t<1)return[];var a=0,u=0,s=n(Lt(o/t));while(a<o)s[u++]=Oo(e,a,a+=t);return s}function ku(e){var t=-1,n=null==e?0:e.length,r=0,i=[];while(++t<n){var o=e[t];o&&(i[r++]=o)}return i}function Ru(){var e=arguments.length;if(!e)return[];var t=n(e-1),r=arguments[0],i=e;while(i--)t[i-1]=arguments[i];return On(sc(r)?ia(r):[r],Oi(t,1))}var Bu=So((function(e,t){return fc(e)?Si(e,Oi(t,1,fc,!0)):[]})),Fu=So((function(e,t){var n=os(t);return fc(n)&&(n=i),fc(e)?Si(e,Oi(t,1,fc,!0),Ja(n,2)):[]})),Vu=So((function(e,t){var n=os(t);return fc(n)&&(n=i),fc(e)?Si(e,Oi(t,1,fc,!0),i,n):[]}));function Ku(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===i?1:$c(t),Oo(e,t<0?0:t,r)):[]}function Yu(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===i?1:$c(t),t=r-t,Oo(e,0,t<0?0:t)):[]}function Uu(e,t){return e&&e.length?Bo(e,Ja(t,3),!0,!0):[]}function Ju(e,t){return e&&e.length?Bo(e,Ja(t,3),!0):[]}function qu(e,t,n,r){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&uu(e,t,n)&&(n=0,r=i),Ai(e,t,n,r)):[]}function Xu(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:$c(n);return i<0&&(i=Vt(r+i,0)),kn(e,Ja(t,3),i)}function Wu(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return n!==i&&(o=$c(n),o=n<0?Vt(r+o,0):Kt(o,r-1)),kn(e,Ja(t,3),o,!0)}function $u(e){var t=null==e?0:e.length;return t?Oi(e,1):[]}function zu(e){var t=null==e?0:e.length;return t?Oi(e,C):[]}function Gu(e,t){var n=null==e?0:e.length;return n?(t=t===i?1:$c(t),Oi(e,t)):[]}function Hu(e){var t=-1,n=null==e?0:e.length,r={};while(++t<n){var i=e[t];r[i[0]]=i[1]}return r}function Qu(e){return e&&e.length?e[0]:i}function Zu(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:$c(n);return i<0&&(i=Vt(r+i,0)),Rn(e,t,i)}function es(e){var t=null==e?0:e.length;return t?Oo(e,0,-1):[]}var ts=So((function(e){var t=Pn(e,Yo);return t.length&&t[0]===e[0]?Ki(t):[]})),ns=So((function(e){var t=os(e),n=Pn(e,Yo);return t===os(n)?t=i:n.pop(),n.length&&n[0]===e[0]?Ki(n,Ja(t,2)):[]})),rs=So((function(e){var t=os(e),n=Pn(e,Yo);return t="function"==typeof t?t:i,t&&n.pop(),n.length&&n[0]===e[0]?Ki(n,i,t):[]}));function is(e,t){return null==e?"":Bt.call(e,t)}function os(e){var t=null==e?0:e.length;return t?e[t-1]:i}function as(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r;return n!==i&&(o=$c(n),o=o<0?Vt(r+o,0):Kt(o,r-1)),t===t?yr(e,t,o):kn(e,Fn,o,!0)}function us(e,t){return e&&e.length?co(e,$c(t)):i}var ss=So(ls);function ls(e,t){return e&&e.length&&t&&t.length?ho(e,t):e}function cs(e,t,n){return e&&e.length&&t&&t.length?ho(e,t,Ja(n,2)):e}function fs(e,t,n){return e&&e.length&&t&&t.length?ho(e,t,i,n):e}var ps=Ba((function(e,t){var n=null==e?0:e.length,r=mi(e,t);return vo(e,Pn(t,(function(e){return au(e,n)?+e:e})).sort(ea)),r}));function ds(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;t=Ja(t,3);while(++r<o){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return vo(e,i),n}function ys(e){return null==e?e:Wt.call(e)}function ms(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&uu(e,t,n)?(t=0,n=r):(t=null==t?0:$c(t),n=n===i?r:$c(n)),Oo(e,t,n)):[]}function hs(e,t){return Io(e,t)}function vs(e,t,n){return jo(e,t,Ja(n,2))}function gs(e,t){var n=null==e?0:e.length;if(n){var r=Io(e,t);if(r<n&&ic(e[r],t))return r}return-1}function Ts(e,t){return Io(e,t,!0)}function bs(e,t,n){return jo(e,t,Ja(n,2),!0)}function Ss(e,t){var n=null==e?0:e.length;if(n){var r=Io(e,t,!0)-1;if(ic(e[r],t))return r}return-1}function Es(e){return e&&e.length?Do(e):[]}function xs(e,t){return e&&e.length?Do(e,Ja(t,2)):[]}function _s(e){var t=null==e?0:e.length;return t?Oo(e,1,t):[]}function ws(e,t,n){return e&&e.length?(t=n||t===i?1:$c(t),Oo(e,0,t<0?0:t)):[]}function As(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===i?1:$c(t),t=r-t,Oo(e,t<0?0:t,r)):[]}function Ps(e,t){return e&&e.length?Bo(e,Ja(t,3),!1,!0):[]}function Os(e,t){return e&&e.length?Bo(e,Ja(t,3)):[]}var Ns=So((function(e){return Co(Oi(e,1,fc,!0))})),Is=So((function(e){var t=os(e);return fc(t)&&(t=i),Co(Oi(e,1,fc,!0),Ja(t,2))})),js=So((function(e){var t=os(e);return t="function"==typeof t?t:i,Co(Oi(e,1,fc,!0),i,t)}));function Ds(e){return e&&e.length?Co(e):[]}function Ls(e,t){return e&&e.length?Co(e,Ja(t,2)):[]}function Ms(e,t){return t="function"==typeof t?t:i,e&&e.length?Co(e,i,t):[]}function Cs(e){if(!e||!e.length)return[];var t=0;return e=_n(e,(function(e){if(fc(e))return t=Vt(e.length,t),!0})),Xn(t,(function(t){return Pn(e,Kn(t))}))}function ks(e,t){if(!e||!e.length)return[];var n=Cs(e);return null==t?n:Pn(n,(function(e){return Tn(t,i,e)}))}var Rs=So((function(e,t){return fc(e)?Si(e,t):[]})),Bs=So((function(e){return Vo(_n(e,fc))})),Fs=So((function(e){var t=os(e);return fc(t)&&(t=i),Vo(_n(e,fc),Ja(t,2))})),Vs=So((function(e){var t=os(e);return t="function"==typeof t?t:i,Vo(_n(e,fc),i,t)})),Ks=So(Cs);function Ys(e,t){return Ko(e||[],t||[],li)}function Us(e,t){return Ko(e||[],t||[],_o)}var Js=So((function(e){var t=e.length,n=t>1?e[t-1]:i;return n="function"==typeof n?(e.pop(),n):i,ks(e,n)}));function qs(e){var t=Er(e);return t.__chain__=!0,t}function Xs(e,t){return t(e),e}function Ws(e,t){return t(e)}var $s=Ba((function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return mi(t,e)};return!(t>1||this.__actions__.length)&&r instanceof Pr&&au(n)?(r=r.slice(n,+n+(t?1:0)),r.__actions__.push({func:Ws,args:[o],thisArg:i}),new Ar(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)}));function zs(){return qs(this)}function Gs(){return new Ar(this.value(),this.__chain__)}function Hs(){this.__values__===i&&(this.__values__=Xc(this.value()));var e=this.__index__>=this.__values__.length,t=e?i:this.__values__[this.__index__++];return{done:e,value:t}}function Qs(){return this}function Zs(e){var t,n=this;while(n instanceof wr){var r=Mu(n);r.__index__=0,r.__values__=i,t?o.__wrapped__=r:t=r;var o=r;n=n.__wrapped__}return o.__wrapped__=e,t}function el(){var e=this.__wrapped__;if(e instanceof Pr){var t=e;return this.__actions__.length&&(t=new Pr(this)),t=t.reverse(),t.__actions__.push({func:Ws,args:[ys],thisArg:i}),new Ar(t,this.__chain__)}return this.thru(ys)}function tl(){return Fo(this.__wrapped__,this.__actions__)}var nl=sa((function(e,t,n){ft.call(e,n)?++e[n]:yi(e,n,1)}));function rl(e,t,n){var r=sc(e)?xn:_i;return n&&uu(e,t,n)&&(t=i),r(e,Ja(t,3))}function il(e,t){var n=sc(e)?_n:Pi;return n(e,Ja(t,3))}var ol=va(Xu),al=va(Wu);function ul(e,t){return Oi(hl(e,t),1)}function sl(e,t){return Oi(hl(e,t),C)}function ll(e,t,n){return n=n===i?1:$c(n),Oi(hl(e,t),n)}function cl(e,t){var n=sc(e)?Sn:Ei;return n(e,Ja(t,3))}function fl(e,t){var n=sc(e)?En:xi;return n(e,Ja(t,3))}var pl=sa((function(e,t,n){ft.call(e,n)?e[n].push(t):yi(e,n,[t])}));function dl(e,t,n,r){e=cc(e)?e:Yf(e),n=n&&!r?$c(n):0;var i=e.length;return n<0&&(n=Vt(i+n,0)),Bc(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Rn(e,t,n)>-1}var yl=So((function(e,t,r){var i=-1,o="function"==typeof t,a=cc(e)?n(e.length):[];return Ei(e,(function(e){a[++i]=o?Tn(t,e,r):Ui(e,t,r)})),a})),ml=sa((function(e,t,n){yi(e,n,t)}));function hl(e,t){var n=sc(e)?Pn:oo;return n(e,Ja(t,3))}function vl(e,t,n,r){return null==e?[]:(sc(t)||(t=null==t?[]:[t]),n=r?i:n,sc(n)||(n=null==n?[]:[n]),fo(e,t,n))}var gl=sa((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));function Tl(e,t,n){var r=sc(e)?Nn:Un,i=arguments.length<3;return r(e,Ja(t,4),n,i,Ei)}function bl(e,t,n){var r=sc(e)?In:Un,i=arguments.length<3;return r(e,Ja(t,4),n,i,xi)}function Sl(e,t){var n=sc(e)?_n:Pi;return n(e,Kl(Ja(t,3)))}function El(e){var t=sc(e)?oi:Eo;return t(e)}function xl(e,t,n){t=(n?uu(e,t,n):t===i)?1:$c(t);var r=sc(e)?ai:xo;return r(e,t)}function _l(e){var t=sc(e)?ui:Po;return t(e)}function wl(e){if(null==e)return 0;if(cc(e))return Bc(e)?mr(e):e.length;var t=Ha(e);return t==Q||t==oe?e.size:no(e).length}function Al(e,t,n){var r=sc(e)?jn:No;return n&&uu(e,t,n)&&(t=i),r(e,Ja(t,3))}var Pl=So((function(e,t){if(null==e)return[];var n=t.length;return n>1&&uu(e,t[0],t[1])?t=[]:n>2&&uu(t[0],t[1],t[2])&&(t=[t[0]]),fo(e,Oi(t,1),[])})),Ol=jt||function(){return un.Date.now()};function Nl(e,t){if("function"!=typeof t)throw new ot(s);return e=$c(e),function(){if(--e<1)return t.apply(this,arguments)}}function Il(e,t,n){return t=n?i:t,t=e&&null==t?e.length:t,ja(e,w,i,i,i,i,t)}function jl(e,t){var n;if("function"!=typeof t)throw new ot(s);return e=$c(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=i),n}}var Dl=So((function(e,t,n){var r=g;if(n.length){var i=cr(n,Ua(Dl));r|=x}return ja(e,r,t,n,i)})),Ll=So((function(e,t,n){var r=g|T;if(n.length){var i=cr(n,Ua(Ll));r|=x}return ja(t,r,e,n,i)}));function Ml(e,t,n){t=n?i:t;var r=ja(e,S,i,i,i,i,i,t);return r.placeholder=Ml.placeholder,r}function Cl(e,t,n){t=n?i:t;var r=ja(e,E,i,i,i,i,i,t);return r.placeholder=Cl.placeholder,r}function kl(e,t,n){var r,o,a,u,l,c,f=0,p=!1,d=!1,y=!0;if("function"!=typeof e)throw new ot(s);function m(t){var n=r,a=o;return r=o=i,f=t,u=e.apply(a,n),u}function h(e){return f=e,l=wu(T,t),p?m(e):u}function v(e){var n=e-c,r=e-f,i=t-n;return d?Kt(i,a-r):i}function g(e){var n=e-c,r=e-f;return c===i||n>=t||n<0||d&&r>=a}function T(){var e=Ol();if(g(e))return b(e);l=wu(T,v(e))}function b(e){return l=i,y&&r?m(e):(r=o=i,u)}function S(){l!==i&&Wo(l),f=0,r=c=o=l=i}function E(){return l===i?u:b(Ol())}function x(){var e=Ol(),n=g(e);if(r=arguments,o=this,c=e,n){if(l===i)return h(c);if(d)return Wo(l),l=wu(T,t),m(c)}return l===i&&(l=wu(T,t)),u}return t=Gc(t)||0,_c(n)&&(p=!!n.leading,d="maxWait"in n,a=d?Vt(Gc(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),x.cancel=S,x.flush=E,x}var Rl=So((function(e,t){return bi(e,1,t)})),Bl=So((function(e,t,n){return bi(e,Gc(t)||0,n)}));function Fl(e){return ja(e,P)}function Vl(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new ot(s);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Vl.Cache||Ur),n}function Kl(e){if("function"!=typeof e)throw new ot(s);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Yl(e){return jl(2,e)}Vl.Cache=Ur;var Ul=qo((function(e,t){t=1==t.length&&sc(t[0])?Pn(t[0],zn(Ja())):Pn(Oi(t,1),zn(Ja()));var n=t.length;return So((function(r){var i=-1,o=Kt(r.length,n);while(++i<o)r[i]=t[i].call(this,r[i]);return Tn(e,this,r)}))})),Jl=So((function(e,t){var n=cr(t,Ua(Jl));return ja(e,x,i,t,n)})),ql=So((function(e,t){var n=cr(t,Ua(ql));return ja(e,_,i,t,n)})),Xl=Ba((function(e,t){return ja(e,A,i,i,i,t)}));function Wl(e,t){if("function"!=typeof e)throw new ot(s);return t=t===i?t:$c(t),So(e,t)}function $l(e,t){if("function"!=typeof e)throw new ot(s);return t=null==t?0:Vt($c(t),0),So((function(n){var r=n[t],i=Xo(n,0,t);return r&&On(i,r),Tn(e,this,i)}))}function zl(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new ot(s);return _c(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),kl(e,t,{leading:r,maxWait:t,trailing:i})}function Gl(e){return Il(e,1)}function Hl(e,t){return Jl(Uo(t),e)}function Ql(){if(!arguments.length)return[];var e=arguments[0];return sc(e)?e:[e]}function Zl(e){return vi(e,m)}function ec(e,t){return t="function"==typeof t?t:i,vi(e,m,t)}function tc(e){return vi(e,d|m)}function nc(e,t){return t="function"==typeof t?t:i,vi(e,d|m,t)}function rc(e,t){return null==t||Ti(e,t,xf(t))}function ic(e,t){return e===t||e!==e&&t!==t}var oc=Aa(Ri),ac=Aa((function(e,t){return e>=t})),uc=Ji(function(){return arguments}())?Ji:function(e){return wc(e)&&ft.call(e,"callee")&&!_t.call(e,"callee")},sc=n.isArray,lc=dn?zn(dn):qi;function cc(e){return null!=e&&xc(e.length)&&!Sc(e)}function fc(e){return wc(e)&&cc(e)}function pc(e){return!0===e||!1===e||wc(e)&&ki(e)==X}var dc=kt||zp,yc=yn?zn(yn):Xi;function mc(e){return wc(e)&&1===e.nodeType&&!Mc(e)}function hc(e){if(null==e)return!0;if(cc(e)&&(sc(e)||"string"==typeof e||"function"==typeof e.splice||dc(e)||Vc(e)||uc(e)))return!e.length;var t=Ha(e);if(t==Q||t==oe)return!e.size;if(du(e))return!no(e).length;for(var n in e)if(ft.call(e,n))return!1;return!0}function vc(e,t){return Wi(e,t)}function gc(e,t,n){n="function"==typeof n?n:i;var r=n?n(e,t):i;return r===i?Wi(e,t,i,n):!!r}function Tc(e){if(!wc(e))return!1;var t=ki(e);return t==z||t==$||"string"==typeof e.message&&"string"==typeof e.name&&!Mc(e)}function bc(e){return"number"==typeof e&&Rt(e)}function Sc(e){if(!_c(e))return!1;var t=ki(e);return t==G||t==H||t==q||t==re}function Ec(e){return"number"==typeof e&&e==$c(e)}function xc(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=k}function _c(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function wc(e){return null!=e&&"object"==typeof e}var Ac=mn?zn(mn):zi;function Pc(e,t){return e===t||Gi(e,t,Xa(t))}function Oc(e,t,n){return n="function"==typeof n?n:i,Gi(e,t,Xa(t),n)}function Nc(e){return Lc(e)&&e!=+e}function Ic(e){if(pu(e))throw new Be(u);return Hi(e)}function jc(e){return null===e}function Dc(e){return null==e}function Lc(e){return"number"==typeof e||wc(e)&&ki(e)==Z}function Mc(e){if(!wc(e)||ki(e)!=te)return!1;var t=Et(e);if(null===t)return!0;var n=ft.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&ct.call(n)==mt}var Cc=hn?zn(hn):Qi;function kc(e){return Ec(e)&&e>=-k&&e<=k}var Rc=vn?zn(vn):Zi;function Bc(e){return"string"==typeof e||!sc(e)&&wc(e)&&ki(e)==ae}function Fc(e){return"symbol"==typeof e||wc(e)&&ki(e)==ue}var Vc=gn?zn(gn):eo;function Kc(e){return e===i}function Yc(e){return wc(e)&&Ha(e)==le}function Uc(e){return wc(e)&&ki(e)==ce}var Jc=Aa(io),qc=Aa((function(e,t){return e<=t}));function Xc(e){if(!e)return[];if(cc(e))return Bc(e)?hr(e):ia(e);if(Pt&&e[Pt])return ur(e[Pt]());var t=Ha(e),n=t==Q?sr:t==oe?fr:Yf;return n(e)}function Wc(e){if(!e)return 0===e?e:0;if(e=Gc(e),e===C||e===-C){var t=e<0?-1:1;return t*R}return e===e?e:0}function $c(e){var t=Wc(e),n=t%1;return t===t?n?t-n:t:0}function zc(e){return e?hi($c(e),0,F):0}function Gc(e){if("number"==typeof e)return e;if(Fc(e))return B;if(_c(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_c(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=$n(e);var n=$e.test(e);return n||Ge.test(e)?rn(e.slice(2),n?2:8):We.test(e)?B:+e}function Hc(e){return oa(e,_f(e))}function Qc(e){return e?hi($c(e),-k,k):0===e?e:0}function Zc(e){return null==e?"":Mo(e)}var ef=la((function(e,t){if(du(t)||cc(t))oa(t,xf(t),e);else for(var n in t)ft.call(t,n)&&li(e,n,t[n])})),tf=la((function(e,t){oa(t,_f(t),e)})),nf=la((function(e,t,n,r){oa(t,_f(t),e,r)})),rf=la((function(e,t,n,r){oa(t,xf(t),e,r)})),of=Ba(mi);function af(e,t){var n=_r(e);return null==t?n:pi(n,t)}var uf=So((function(e,t){e=nt(e);var n=-1,r=t.length,o=r>2?t[2]:i;o&&uu(t[0],t[1],o)&&(r=1);while(++n<r){var a=t[n],u=_f(a),s=-1,l=u.length;while(++s<l){var c=u[s],f=e[c];(f===i||ic(f,st[c])&&!ft.call(e,c))&&(e[c]=a[c])}}return e})),sf=So((function(e){return e.push(i,La),Tn(Of,i,e)}));function lf(e,t){return Cn(e,Ja(t,3),ji)}function cf(e,t){return Cn(e,Ja(t,3),Di)}function ff(e,t){return null==e?e:Ni(e,Ja(t,3),_f)}function pf(e,t){return null==e?e:Ii(e,Ja(t,3),_f)}function df(e,t){return e&&ji(e,Ja(t,3))}function yf(e,t){return e&&Di(e,Ja(t,3))}function mf(e){return null==e?[]:Li(e,xf(e))}function hf(e){return null==e?[]:Li(e,_f(e))}function vf(e,t,n){var r=null==e?i:Mi(e,t);return r===i?n:r}function gf(e,t){return null!=e&&eu(e,t,Bi)}function Tf(e,t){return null!=e&&eu(e,t,Fi)}var bf=ba((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=yt.call(t)),e[t]=n}),Pp(jp)),Sf=ba((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=yt.call(t)),ft.call(e,t)?e[t].push(n):e[t]=[n]}),Ja),Ef=So(Ui);function xf(e){return cc(e)?ii(e):no(e)}function _f(e){return cc(e)?ii(e,!0):ro(e)}function wf(e,t){var n={};return t=Ja(t,3),ji(e,(function(e,r,i){yi(n,t(e,r,i),e)})),n}function Af(e,t){var n={};return t=Ja(t,3),ji(e,(function(e,r,i){yi(n,r,t(e,r,i))})),n}var Pf=la((function(e,t,n){so(e,t,n)})),Of=la((function(e,t,n,r){so(e,t,n,r)})),Nf=Ba((function(e,t){var n={};if(null==e)return n;var r=!1;t=Pn(t,(function(t){return t=Jo(t,e),r||(r=t.length>1),t})),oa(e,Va(e),n),r&&(n=vi(n,d|y|m,Ma));var i=t.length;while(i--)ko(n,t[i]);return n}));function If(e,t){return Df(e,Kl(Ja(t)))}var jf=Ba((function(e,t){return null==e?{}:po(e,t)}));function Df(e,t){if(null==e)return{};var n=Pn(Va(e),(function(e){return[e]}));return t=Ja(t),yo(e,n,(function(e,n){return t(e,n[0])}))}function Lf(e,t,n){t=Jo(t,e);var r=-1,o=t.length;o||(o=1,e=i);while(++r<o){var a=null==e?i:e[ju(t[r])];a===i&&(r=o,a=n),e=Sc(a)?a.call(e):a}return e}function Mf(e,t,n){return null==e?e:_o(e,t,n)}function Cf(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:_o(e,t,n,r)}var kf=Ia(xf),Rf=Ia(_f);function Bf(e,t,n){var r=sc(e),i=r||dc(e)||Vc(e);if(t=Ja(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:_c(e)&&Sc(o)?_r(Et(e)):{}}return(i?Sn:ji)(e,(function(e,r,i){return t(n,e,r,i)})),n}function Ff(e,t){return null==e||ko(e,t)}function Vf(e,t,n){return null==e?e:Ro(e,t,Uo(n))}function Kf(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:Ro(e,t,Uo(n),r)}function Yf(e){return null==e?[]:Gn(e,xf(e))}function Uf(e){return null==e?[]:Gn(e,_f(e))}function Jf(e,t,n){return n===i&&(n=t,t=i),n!==i&&(n=Gc(n),n=n===n?n:0),t!==i&&(t=Gc(t),t=t===t?t:0),hi(Gc(e),t,n)}function qf(e,t,n){return t=Wc(t),n===i?(n=t,t=0):n=Wc(n),e=Gc(e),Vi(e,t,n)}function Xf(e,t,n){if(n&&"boolean"!=typeof n&&uu(e,t,n)&&(t=n=i),n===i&&("boolean"==typeof t?(n=t,t=i):"boolean"==typeof e&&(n=e,e=i)),e===i&&t===i?(e=0,t=1):(e=Wc(e),t===i?(t=e,e=0):t=Wc(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var o=Xt();return Kt(e+o*(t-e+nn("1e-"+((o+"").length-1))),t)}return go(e,t)}var Wf=ya((function(e,t,n){return t=t.toLowerCase(),e+(n?$f(t):t)}));function $f(e){return Sp(Zc(e).toLowerCase())}function zf(e){return e=Zc(e),e&&e.replace(Qe,tr).replace(Ut,"")}function Gf(e,t,n){e=Zc(e),t=Mo(t);var r=e.length;n=n===i?r:hi($c(n),0,r);var o=n;return n-=t.length,n>=0&&e.slice(n,o)==t}function Hf(e){return e=Zc(e),e&&Oe.test(e)?e.replace(Ae,nr):e}function Qf(e){return e=Zc(e),e&&ke.test(e)?e.replace(Ce,"\\$&"):e}var Zf=ya((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),ep=ya((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),tp=da("toLowerCase");function np(e,t,n){e=Zc(e),t=$c(t);var r=t?mr(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return xa(Mt(i),n)+e+xa(Lt(i),n)}function rp(e,t,n){e=Zc(e),t=$c(t);var r=t?mr(e):0;return t&&r<t?e+xa(t-r,n):e}function ip(e,t,n){e=Zc(e),t=$c(t);var r=t?mr(e):0;return t&&r<t?xa(t-r,n)+e:e}function op(e,t,n){return n||null==t?t=0:t&&(t=+t),qt(Zc(e).replace(Re,""),t||0)}function ap(e,t,n){return t=(n?uu(e,t,n):t===i)?1:$c(t),bo(Zc(e),t)}function up(){var e=arguments,t=Zc(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var sp=ya((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));function lp(e,t,n){return n&&"number"!=typeof n&&uu(e,t,n)&&(t=n=i),n=n===i?F:n>>>0,n?(e=Zc(e),e&&("string"==typeof t||null!=t&&!Cc(t))&&(t=Mo(t),!t&&or(e))?Xo(hr(e),0,n):e.split(t,n)):[]}var cp=ya((function(e,t,n){return e+(n?" ":"")+Sp(t)}));function fp(e,t,n){return e=Zc(e),n=null==n?0:hi($c(n),0,e.length),t=Mo(t),e.slice(n,n+t.length)==t}function pp(e,t,n){var r=Er.templateSettings;n&&uu(e,t,n)&&(t=i),e=Zc(e),t=nf({},t,r,Da);var o,a,u=nf({},t.imports,r.imports,Da),s=xf(u),c=Gn(u,s),f=0,p=t.interpolate||Ze,d="__p += '",y=rt((t.escape||Ze).source+"|"+p.source+"|"+(p===je?qe:Ze).source+"|"+(t.evaluate||Ze).source+"|$","g"),m="//# sourceURL="+(ft.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zt+"]")+"\n";e.replace(y,(function(t,n,r,i,u,s){return r||(r=i),d+=e.slice(f,s).replace(et,rr),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),u&&(a=!0,d+="';\n"+u+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),f=s+t.length,t})),d+="';\n";var h=ft.call(t,"variable")&&t.variable;if(h){if(Ue.test(h))throw new Be(l)}else d="with (obj) {\n"+d+"\n}\n";d=(a?d.replace(Ee,""):d).replace(xe,"$1").replace(_e,"$1;"),d="function("+(h||"obj")+") {\n"+(h?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=xp((function(){return Ye(s,m+"return "+d).apply(i,c)}));if(v.source=d,Tc(v))throw v;return v}function dp(e){return Zc(e).toLowerCase()}function yp(e){return Zc(e).toUpperCase()}function mp(e,t,n){if(e=Zc(e),e&&(n||t===i))return $n(e);if(!e||!(t=Mo(t)))return e;var r=hr(e),o=hr(t),a=Qn(r,o),u=Zn(r,o)+1;return Xo(r,a,u).join("")}function hp(e,t,n){if(e=Zc(e),e&&(n||t===i))return e.slice(0,vr(e)+1);if(!e||!(t=Mo(t)))return e;var r=hr(e),o=Zn(r,hr(t))+1;return Xo(r,0,o).join("")}function vp(e,t,n){if(e=Zc(e),e&&(n||t===i))return e.replace(Re,"");if(!e||!(t=Mo(t)))return e;var r=hr(e),o=Qn(r,hr(t));return Xo(r,o).join("")}function gp(e,t){var n=O,r=N;if(_c(t)){var o="separator"in t?t.separator:o;n="length"in t?$c(t.length):n,r="omission"in t?Mo(t.omission):r}e=Zc(e);var a=e.length;if(or(e)){var u=hr(e);a=u.length}if(n>=a)return e;var s=n-mr(r);if(s<1)return r;var l=u?Xo(u,0,s).join(""):e.slice(0,s);if(o===i)return l+r;if(u&&(s+=l.length-s),Cc(o)){if(e.slice(s).search(o)){var c,f=l;o.global||(o=rt(o.source,Zc(Xe.exec(o))+"g")),o.lastIndex=0;while(c=o.exec(f))var p=c.index;l=l.slice(0,p===i?s:p)}}else if(e.indexOf(Mo(o),s)!=s){var d=l.lastIndexOf(o);d>-1&&(l=l.slice(0,d))}return l+r}function Tp(e){return e=Zc(e),e&&Pe.test(e)?e.replace(we,gr):e}var bp=ya((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Sp=da("toUpperCase");function Ep(e,t,n){return e=Zc(e),t=n?i:t,t===i?ar(e)?Sr(e):Mn(e):e.match(t)||[]}var xp=So((function(e,t){try{return Tn(e,i,t)}catch(n){return Tc(n)?n:new Be(n)}})),_p=Ba((function(e,t){return Sn(t,(function(t){t=ju(t),yi(e,t,Dl(e[t],e))})),e}));function wp(e){var t=null==e?0:e.length,n=Ja();return e=t?Pn(e,(function(e){if("function"!=typeof e[1])throw new ot(s);return[n(e[0]),e[1]]})):[],So((function(n){var r=-1;while(++r<t){var i=e[r];if(Tn(i[0],this,n))return Tn(i[1],this,n)}}))}function Ap(e){return gi(vi(e,d))}function Pp(e){return function(){return e}}function Op(e,t){return null==e||e!==e?t:e}var Np=ga(),Ip=ga(!0);function jp(e){return e}function Dp(e){return to("function"==typeof e?e:vi(e,d))}function Lp(e){return ao(vi(e,d))}function Mp(e,t){return uo(e,vi(t,d))}var Cp=So((function(e,t){return function(n){return Ui(n,e,t)}})),kp=So((function(e,t){return function(n){return Ui(e,n,t)}}));function Rp(e,t,n){var r=xf(t),i=Li(t,r);null!=n||_c(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Li(t,xf(t)));var o=!(_c(n)&&"chain"in n)||!!n.chain,a=Sc(e);return Sn(i,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=ia(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,On([this.value()],arguments))})})),e}function Bp(){return un._===this&&(un._=ht),this}function Fp(){}function Vp(e){return e=$c(e),So((function(t){return co(t,e)}))}var Kp=Ea(Pn),Yp=Ea(xn),Up=Ea(jn);function Jp(e){return su(e)?Kn(ju(e)):mo(e)}function qp(e){return function(t){return null==e?i:Mi(e,t)}}var Xp=wa(),Wp=wa(!0);function $p(){return[]}function zp(){return!1}function Gp(){return{}}function Hp(){return""}function Qp(){return!0}function Zp(e,t){if(e=$c(e),e<1||e>k)return[];var n=F,r=Kt(e,F);t=Ja(t),e-=F;var i=Xn(r,t);while(++n<e)t(n);return i}function ed(e){return sc(e)?Pn(e,ju):Fc(e)?[e]:ia(Iu(Zc(e)))}function td(e){var t=++pt;return Zc(e)+t}var nd=Sa((function(e,t){return e+t}),0),rd=Oa("ceil"),id=Sa((function(e,t){return e/t}),1),od=Oa("floor");function ad(e){return e&&e.length?wi(e,jp,Ri):i}function ud(e,t){return e&&e.length?wi(e,Ja(t,2),Ri):i}function sd(e){return Vn(e,jp)}function ld(e,t){return Vn(e,Ja(t,2))}function cd(e){return e&&e.length?wi(e,jp,io):i}function fd(e,t){return e&&e.length?wi(e,Ja(t,2),io):i}var pd=Sa((function(e,t){return e*t}),1),dd=Oa("round"),yd=Sa((function(e,t){return e-t}),0);function md(e){return e&&e.length?qn(e,jp):0}function hd(e,t){return e&&e.length?qn(e,Ja(t,2)):0}return Er.after=Nl,Er.ary=Il,Er.assign=ef,Er.assignIn=tf,Er.assignInWith=nf,Er.assignWith=rf,Er.at=of,Er.before=jl,Er.bind=Dl,Er.bindAll=_p,Er.bindKey=Ll,Er.castArray=Ql,Er.chain=qs,Er.chunk=Cu,Er.compact=ku,Er.concat=Ru,Er.cond=wp,Er.conforms=Ap,Er.constant=Pp,Er.countBy=nl,Er.create=af,Er.curry=Ml,Er.curryRight=Cl,Er.debounce=kl,Er.defaults=uf,Er.defaultsDeep=sf,Er.defer=Rl,Er.delay=Bl,Er.difference=Bu,Er.differenceBy=Fu,Er.differenceWith=Vu,Er.drop=Ku,Er.dropRight=Yu,Er.dropRightWhile=Uu,Er.dropWhile=Ju,Er.fill=qu,Er.filter=il,Er.flatMap=ul,Er.flatMapDeep=sl,Er.flatMapDepth=ll,Er.flatten=$u,Er.flattenDeep=zu,Er.flattenDepth=Gu,Er.flip=Fl,Er.flow=Np,Er.flowRight=Ip,Er.fromPairs=Hu,Er.functions=mf,Er.functionsIn=hf,Er.groupBy=pl,Er.initial=es,Er.intersection=ts,Er.intersectionBy=ns,Er.intersectionWith=rs,Er.invert=bf,Er.invertBy=Sf,Er.invokeMap=yl,Er.iteratee=Dp,Er.keyBy=ml,Er.keys=xf,Er.keysIn=_f,Er.map=hl,Er.mapKeys=wf,Er.mapValues=Af,Er.matches=Lp,Er.matchesProperty=Mp,Er.memoize=Vl,Er.merge=Pf,Er.mergeWith=Of,Er.method=Cp,Er.methodOf=kp,Er.mixin=Rp,Er.negate=Kl,Er.nthArg=Vp,Er.omit=Nf,Er.omitBy=If,Er.once=Yl,Er.orderBy=vl,Er.over=Kp,Er.overArgs=Ul,Er.overEvery=Yp,Er.overSome=Up,Er.partial=Jl,Er.partialRight=ql,Er.partition=gl,Er.pick=jf,Er.pickBy=Df,Er.property=Jp,Er.propertyOf=qp,Er.pull=ss,Er.pullAll=ls,Er.pullAllBy=cs,Er.pullAllWith=fs,Er.pullAt=ps,Er.range=Xp,Er.rangeRight=Wp,Er.rearg=Xl,Er.reject=Sl,Er.remove=ds,Er.rest=Wl,Er.reverse=ys,Er.sampleSize=xl,Er.set=Mf,Er.setWith=Cf,Er.shuffle=_l,Er.slice=ms,Er.sortBy=Pl,Er.sortedUniq=Es,Er.sortedUniqBy=xs,Er.split=lp,Er.spread=$l,Er.tail=_s,Er.take=ws,Er.takeRight=As,Er.takeRightWhile=Ps,Er.takeWhile=Os,Er.tap=Xs,Er.throttle=zl,Er.thru=Ws,Er.toArray=Xc,Er.toPairs=kf,Er.toPairsIn=Rf,Er.toPath=ed,Er.toPlainObject=Hc,Er.transform=Bf,Er.unary=Gl,Er.union=Ns,Er.unionBy=Is,Er.unionWith=js,Er.uniq=Ds,Er.uniqBy=Ls,Er.uniqWith=Ms,Er.unset=Ff,Er.unzip=Cs,Er.unzipWith=ks,Er.update=Vf,Er.updateWith=Kf,Er.values=Yf,Er.valuesIn=Uf,Er.without=Rs,Er.words=Ep,Er.wrap=Hl,Er.xor=Bs,Er.xorBy=Fs,Er.xorWith=Vs,Er.zip=Ks,Er.zipObject=Ys,Er.zipObjectDeep=Us,Er.zipWith=Js,Er.entries=kf,Er.entriesIn=Rf,Er.extend=tf,Er.extendWith=nf,Rp(Er,Er),Er.add=nd,Er.attempt=xp,Er.camelCase=Wf,Er.capitalize=$f,Er.ceil=rd,Er.clamp=Jf,Er.clone=Zl,Er.cloneDeep=tc,Er.cloneDeepWith=nc,Er.cloneWith=ec,Er.conformsTo=rc,Er.deburr=zf,Er.defaultTo=Op,Er.divide=id,Er.endsWith=Gf,Er.eq=ic,Er.escape=Hf,Er.escapeRegExp=Qf,Er.every=rl,Er.find=ol,Er.findIndex=Xu,Er.findKey=lf,Er.findLast=al,Er.findLastIndex=Wu,Er.findLastKey=cf,Er.floor=od,Er.forEach=cl,Er.forEachRight=fl,Er.forIn=ff,Er.forInRight=pf,Er.forOwn=df,Er.forOwnRight=yf,Er.get=vf,Er.gt=oc,Er.gte=ac,Er.has=gf,Er.hasIn=Tf,Er.head=Qu,Er.identity=jp,Er.includes=dl,Er.indexOf=Zu,Er.inRange=qf,Er.invoke=Ef,Er.isArguments=uc,Er.isArray=sc,Er.isArrayBuffer=lc,Er.isArrayLike=cc,Er.isArrayLikeObject=fc,Er.isBoolean=pc,Er.isBuffer=dc,Er.isDate=yc,Er.isElement=mc,Er.isEmpty=hc,Er.isEqual=vc,Er.isEqualWith=gc,Er.isError=Tc,Er.isFinite=bc,Er.isFunction=Sc,Er.isInteger=Ec,Er.isLength=xc,Er.isMap=Ac,Er.isMatch=Pc,Er.isMatchWith=Oc,Er.isNaN=Nc,Er.isNative=Ic,Er.isNil=Dc,Er.isNull=jc,Er.isNumber=Lc,Er.isObject=_c,Er.isObjectLike=wc,Er.isPlainObject=Mc,Er.isRegExp=Cc,Er.isSafeInteger=kc,Er.isSet=Rc,Er.isString=Bc,Er.isSymbol=Fc,Er.isTypedArray=Vc,Er.isUndefined=Kc,Er.isWeakMap=Yc,Er.isWeakSet=Uc,Er.join=is,Er.kebabCase=Zf,Er.last=os,Er.lastIndexOf=as,Er.lowerCase=ep,Er.lowerFirst=tp,Er.lt=Jc,Er.lte=qc,Er.max=ad,Er.maxBy=ud,Er.mean=sd,Er.meanBy=ld,Er.min=cd,Er.minBy=fd,Er.stubArray=$p,Er.stubFalse=zp,Er.stubObject=Gp,Er.stubString=Hp,Er.stubTrue=Qp,Er.multiply=pd,Er.nth=us,Er.noConflict=Bp,Er.noop=Fp,Er.now=Ol,Er.pad=np,Er.padEnd=rp,Er.padStart=ip,Er.parseInt=op,Er.random=Xf,Er.reduce=Tl,Er.reduceRight=bl,Er.repeat=ap,Er.replace=up,Er.result=Lf,Er.round=dd,Er.runInContext=e,Er.sample=El,Er.size=wl,Er.snakeCase=sp,Er.some=Al,Er.sortedIndex=hs,Er.sortedIndexBy=vs,Er.sortedIndexOf=gs,Er.sortedLastIndex=Ts,Er.sortedLastIndexBy=bs,Er.sortedLastIndexOf=Ss,Er.startCase=cp,Er.startsWith=fp,Er.subtract=yd,Er.sum=md,Er.sumBy=hd,Er.template=pp,Er.times=Zp,Er.toFinite=Wc,Er.toInteger=$c,Er.toLength=zc,Er.toLower=dp,Er.toNumber=Gc,Er.toSafeInteger=Qc,Er.toString=Zc,Er.toUpper=yp,Er.trim=mp,Er.trimEnd=hp,Er.trimStart=vp,Er.truncate=gp,Er.unescape=Tp,Er.uniqueId=td,Er.upperCase=bp,Er.upperFirst=Sp,Er.each=cl,Er.eachRight=fl,Er.first=Qu,Rp(Er,function(){var e={};return ji(Er,(function(t,n){ft.call(Er.prototype,n)||(e[n]=t)})),e}(),{chain:!1}),Er.VERSION=o,Sn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Er[e].placeholder=Er})),Sn(["drop","take"],(function(e,t){Pr.prototype[e]=function(n){n=n===i?1:Vt($c(n),0);var r=this.__filtered__&&!t?new Pr(this):this.clone();return r.__filtered__?r.__takeCount__=Kt(n,r.__takeCount__):r.__views__.push({size:Kt(n,F),type:e+(r.__dir__<0?"Right":"")}),r},Pr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Sn(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=n==D||n==M;Pr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:Ja(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Sn(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Pr.prototype[e]=function(){return this[n](1).value()[0]}})),Sn(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Pr.prototype[e]=function(){return this.__filtered__?new Pr(this):this[n](1)}})),Pr.prototype.compact=function(){return this.filter(jp)},Pr.prototype.find=function(e){return this.filter(e).head()},Pr.prototype.findLast=function(e){return this.reverse().find(e)},Pr.prototype.invokeMap=So((function(e,t){return"function"==typeof e?new Pr(this):this.map((function(n){return Ui(n,e,t)}))})),Pr.prototype.reject=function(e){return this.filter(Kl(Ja(e)))},Pr.prototype.slice=function(e,t){e=$c(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Pr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==i&&(t=$c(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},Pr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Pr.prototype.toArray=function(){return this.take(F)},ji(Pr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),o=Er[r?"take"+("last"==t?"Right":""):t],a=r||/^find/.test(t);o&&(Er.prototype[t]=function(){var t=this.__wrapped__,u=r?[1]:arguments,s=t instanceof Pr,l=u[0],c=s||sc(t),f=function(e){var t=o.apply(Er,On([e],u));return r&&p?t[0]:t};c&&n&&"function"==typeof l&&1!=l.length&&(s=c=!1);var p=this.__chain__,d=!!this.__actions__.length,y=a&&!p,m=s&&!d;if(!a&&c){t=m?t:new Pr(this);var h=e.apply(t,u);return h.__actions__.push({func:Ws,args:[f],thisArg:i}),new Ar(h,p)}return y&&m?e.apply(this,u):(h=this.thru(f),y?r?h.value()[0]:h.value():h)})})),Sn(["pop","push","shift","sort","splice","unshift"],(function(e){var t=at[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Er.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(sc(i)?i:[],e)}return this[n]((function(n){return t.apply(sc(n)?n:[],e)}))}})),ji(Pr.prototype,(function(e,t){var n=Er[t];if(n){var r=n.name+"";ft.call(ln,r)||(ln[r]=[]),ln[r].push({name:t,func:n})}})),ln[Ta(i,T).name]=[{name:"wrapper",func:i}],Pr.prototype.clone=Or,Pr.prototype.reverse=Nr,Pr.prototype.value=Ir,Er.prototype.at=$s,Er.prototype.chain=zs,Er.prototype.commit=Gs,Er.prototype.next=Hs,Er.prototype.plant=Zs,Er.prototype.reverse=el,Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=tl,Er.prototype.first=Er.prototype.head,Pt&&(Er.prototype[Pt]=Qs),Er},xr=Er();un._=xr,r=function(){return xr}.call(t,n,t,e),r===i||(e.exports=r)}.call(this)},9699:function(e){"use strict";let t=null;function n(e){if(null!==t&&(t.property,1)){const e=t;return t=n.prototype=null,e}return t=n.prototype=null==e?Object.create(null):e,new n}n(),e.exports=function(e){return n(e)}},45197:function(e,t,n){"use strict";n(21703),n(26699);var r=n(44870),i=n(73396),o="undefined"!==typeof window,a=function(e,t){var n;return function(){var r=this,i=arguments,o=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(o,t)}},u=410,s=730,l="portrait",c=!0,f=100,p=function(e,t){void 0===e&&(e={}),void 0===t&&(t=f);var n=e.width||u,p=e.height||s,d=e.orientation||l,y=void 0===e.touch?c:e.touch,m=(0,r.qj)({resolution:n+"x"+p,width:n,height:p,orientation:d,portrait:"portrait"===d,landscape:"portrait"!==d,touch:y}),h=function(){m.width=window.innerWidth,m.height=window.innerHeight,m.resolution=m.width+"x"+m.height},v=function(e){m.portrait=e.matches,m.landscape=!e.matches,m.orientation=e.matches?"portrait":"landscape"};if(o){var g=a(h,t);window.addEventListener("resize",g),h();var T=window.matchMedia("(orientation: portrait)");"addEventListener"in T?T.addEventListener("change",v):T.addListener(v),v(T),m.touch="ontouchstart"in window,(0,i.FN)()&&(0,i.Ah)((function(){window.removeEventListener("resize",g),"removeEventListener"in T?T.removeEventListener("change",v):T.removeListener(v)}))}return m},d={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":1536},y={xs:"0px",sm:"480px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},m={mobile:0,tablet:769,desktop:1024,widescreen:1216,fullhd:1408},h={s:0,m:601,l:993,xl:1201},v={small:0,medium:640,large:1024},g={mobile:0,tablet:768,computer:992,large:1201},T={tailwind:d,bootstrap:y,bulma:m,materialize:h,foundation:v,semanticUi:g},b="tailwind",S=function(e){return Object.keys(e).reduce((function(e,t){return e[t]=!1,e}),{breakpoint:""})},E=function(e){if(!T[e])throw new Error('Invalid grid type "'+e+'"');return T[e]},x=function(e,t){var n=Object.keys(t).filter((function(t){return!["breakpoint"].includes(t)&&"function"!==typeof e[t]})).reverse().find((function(e){return t[e]}));return n||""},_=function(e,t){Object.keys(e).filter((function(t){return"function"===typeof e[t]})).forEach((function(n){var r=e[n];t[n]=r.call(null,t)}))},w=a(_,100),A=function(e,t){Object.keys(e).filter((function(t){return"function"!==typeof e[t]})).forEach((function(n){var r=e[n];"number"===typeof r?r+="px":r=r.toString();var o=function(r){t[n]=r.matches,t.breakpoint=x(e,t),w(e,t)},a=window.matchMedia("(min-width: "+r+")");"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),t[n]=a.matches,t.breakpoint=x(e,t),(0,i.FN)()&&(0,i.Ah)((function(){"removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o)}))})),_(e,t)};function P(e){var t;void 0===e&&(e=b),t="string"===typeof e?E(e):Object.assign(e);var n=(0,r.qj)(S(t));return o&&A(t,n),n}var O=function(e,t){var n,r;"string"===typeof t?(n=p(),r=P(t)):(t=t||{grid:void 0,ssr:void 0,debounceDelay:void 0},n=p(t.ssr,t.debounceDelay),r=P(t.grid)),e.config.globalProperties.$screen=n,e.config.globalProperties.$grid=r},N={install:O};t["ZP"]=N},74652:function(e,t,n){"use strict";n.d(t,{LLu:function(){return V},KXr:function(){return w},Fp7:function(){return A},VV$:function(){return P},cx$:function(){return Ga},BYU:function(){return $a},Ys:function(){return Ha}});var r=Array.prototype,i=r.slice;r.map;function o(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function a(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function u(e){let t,n,r;function i(e,r,i=0,o=e.length){if(i<o){if(0!==t(r,r))return o;do{const t=i+o>>>1;n(e[t],r)<0?i=t+1:o=t}while(i<o)}return i}function u(e,r,i=0,o=e.length){if(i<o){if(0!==t(r,r))return o;do{const t=i+o>>>1;n(e[t],r)<=0?i=t+1:o=t}while(i<o)}return i}function l(e,t,n=0,o=e.length){const a=i(e,t,n,o-1);return a>n&&r(e[a-1],t)>-r(e[a],t)?a-1:a}return 2!==e.length?(t=o,n=(t,n)=>o(e(t),n),r=(t,n)=>e(t)-n):(t=e===o||e===a?e:s,n=e,r=e),{left:i,center:l,right:u}}function s(){return 0}function l(e){return null===e?NaN:+e}const c=u(o),f=c.right;c.left,u(l).center;var p=f;function d(e){return()=>e}function y(e,t){let n,r;if(void 0===t)for(const i of e)null!=i&&(void 0===n?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)));else{let i=-1;for(let o of e)null!=(o=t(o,++i,e))&&(void 0===n?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)))}return[n,r]}function m(e){return e}var h=Math.sqrt(50),v=Math.sqrt(10),g=Math.sqrt(2);function T(e,t,n){var r,i,o,a,u=-1;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(i=e,e=t,t=i),0===(a=b(e,t,n))||!isFinite(a))return[];if(a>0){let n=Math.round(e/a),r=Math.round(t/a);n*a<e&&++n,r*a>t&&--r,o=new Array(i=r-n+1);while(++u<i)o[u]=(n+u)*a}else{a=-a;let n=Math.round(e*a),r=Math.round(t*a);n/a<e&&++n,r/a>t&&--r,o=new Array(i=r-n+1);while(++u<i)o[u]=(n+u)/a}return r&&o.reverse(),o}function b(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=h?10:o>=v?5:o>=g?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=h?10:o>=v?5:o>=g?2:1)}function S(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=h?i*=10:o>=v?i*=5:o>=g&&(i*=2),t<e?-i:i}function E(e,t,n){let r;while(1){const i=b(e,t,n);if(i===r||0===i||!isFinite(i))return[e,t];i>0?(e=Math.floor(e/i)*i,t=Math.ceil(t/i)*i):i<0&&(e=Math.ceil(e*i)/i,t=Math.floor(t*i)/i),r=i}}function x(e,t){let n=0;if(void 0===t)for(let r of e)null!=r&&(r=+r)>=r&&++n;else{let r=-1;for(let i of e)null!=(i=t(i,++r,e))&&(i=+i)>=i&&++n}return n}function _(e){return Math.ceil(Math.log(x(e))/Math.LN2)+1}function w(){var e=m,t=y,n=_;function r(r){Array.isArray(r)||(r=Array.from(r));var i,o,a,u=r.length,s=new Array(u);for(i=0;i<u;++i)s[i]=e(r[i],i,r);var l=t(s),c=l[0],f=l[1],d=n(s,c,f);if(!Array.isArray(d)){const e=f,n=+d;if(t===y&&([c,f]=E(c,f,n)),d=T(c,f,n),d[0]<=c&&(a=b(c,f,n)),d[d.length-1]>=f)if(e>=f&&t===y){const e=b(c,f,n);isFinite(e)&&(e>0?f=(Math.floor(f/e)+1)*e:e<0&&(f=(Math.ceil(f*-e)+1)/-e))}else d.pop()}var m=d.length;while(d[0]<=c)d.shift(),--m;while(d[m-1]>f)d.pop(),--m;var h,v=new Array(m+1);for(i=0;i<=m;++i)h=v[i]=[],h.x0=i>0?d[i-1]:c,h.x1=i<m?d[i]:f;if(isFinite(a)){if(a>0)for(i=0;i<u;++i)null!=(o=s[i])&&c<=o&&o<=f&&v[Math.min(m,Math.floor((o-c)/a))].push(r[i]);else if(a<0)for(i=0;i<u;++i)if(null!=(o=s[i])&&c<=o&&o<=f){const e=Math.floor((c-o)*a);v[Math.min(m,e+(d[e]<=o))].push(r[i])}}else for(i=0;i<u;++i)null!=(o=s[i])&&c<=o&&o<=f&&v[p(d,o,0,m)].push(r[i]);return v}return r.value=function(t){return arguments.length?(e="function"===typeof t?t:d(t),r):e},r.domain=function(e){return arguments.length?(t="function"===typeof e?e:d([e[0],e[1]]),r):t},r.thresholds=function(e){return arguments.length?(n="function"===typeof e?e:Array.isArray(e)?d(i.call(e)):d(e),r):n},r}function A(e,t){let n;if(void 0===t)for(const r of e)null!=r&&(n<r||void 0===n&&r>=r)&&(n=r);else{let r=-1;for(let i of e)null!=(i=t(i,++r,e))&&(n<i||void 0===n&&i>=i)&&(n=i)}return n}function P(e,t){let n;if(void 0===t)for(const r of e)null!=r&&(n>r||void 0===n&&r>=r)&&(n=r);else{let r=-1;for(let i of e)null!=(i=t(i,++r,e))&&(n>i||void 0===n&&i>=i)&&(n=i)}return n}function O(e){return e}var N=1,I=2,j=3,D=4,L=1e-6;function M(e){return"translate("+e+",0)"}function C(e){return"translate(0,"+e+")"}function k(e){return t=>+e(t)}function R(e,t){return t=Math.max(0,e.bandwidth()-2*t)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function B(){return!this.__axis}function F(e,t){var n=[],r=null,i=null,o=6,a=6,u=3,s="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,l=e===N||e===D?-1:1,c=e===D||e===I?"x":"y",f=e===N||e===j?M:C;function p(p){var d=null==r?t.ticks?t.ticks.apply(t,n):t.domain():r,y=null==i?t.tickFormat?t.tickFormat.apply(t,n):O:i,m=Math.max(o,0)+u,h=t.range(),v=+h[0]+s,g=+h[h.length-1]+s,T=(t.bandwidth?R:k)(t.copy(),s),b=p.selection?p.selection():p,S=b.selectAll(".domain").data([null]),E=b.selectAll(".tick").data(d,t).order(),x=E.exit(),_=E.enter().append("g").attr("class","tick"),w=E.select("line"),A=E.select("text");S=S.merge(S.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(_),w=w.merge(_.append("line").attr("stroke","currentColor").attr(c+"2",l*o)),A=A.merge(_.append("text").attr("fill","currentColor").attr(c,l*m).attr("dy",e===N?"0em":e===j?"0.71em":"0.32em")),p!==b&&(S=S.transition(p),E=E.transition(p),w=w.transition(p),A=A.transition(p),x=x.transition(p).attr("opacity",L).attr("transform",(function(e){return isFinite(e=T(e))?f(e+s):this.getAttribute("transform")})),_.attr("opacity",L).attr("transform",(function(e){var t=this.parentNode.__axis;return f((t&&isFinite(t=t(e))?t:T(e))+s)}))),x.remove(),S.attr("d",e===D||e===I?a?"M"+l*a+","+v+"H"+s+"V"+g+"H"+l*a:"M"+s+","+v+"V"+g:a?"M"+v+","+l*a+"V"+s+"H"+g+"V"+l*a:"M"+v+","+s+"H"+g),E.attr("opacity",1).attr("transform",(function(e){return f(T(e)+s)})),w.attr(c+"2",l*o),A.attr(c,l*m).text(y),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===I?"start":e===D?"end":"middle"),b.each((function(){this.__axis=T}))}return p.scale=function(e){return arguments.length?(t=e,p):t},p.ticks=function(){return n=Array.from(arguments),p},p.tickArguments=function(e){return arguments.length?(n=null==e?[]:Array.from(e),p):n.slice()},p.tickValues=function(e){return arguments.length?(r=null==e?null:Array.from(e),p):r&&r.slice()},p.tickFormat=function(e){return arguments.length?(i=e,p):i},p.tickSize=function(e){return arguments.length?(o=a=+e,p):o},p.tickSizeInner=function(e){return arguments.length?(o=+e,p):o},p.tickSizeOuter=function(e){return arguments.length?(a=+e,p):a},p.tickPadding=function(e){return arguments.length?(u=+e,p):u},p.offset=function(e){return arguments.length?(s=+e,p):s},p}function V(e){return F(j,e)}function K(){}function Y(e){return null==e?K:function(){return this.querySelector(e)}}function U(e){"function"!==typeof e&&(e=Y(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o,a,u=t[i],s=u.length,l=r[i]=new Array(s),c=0;c<s;++c)(o=u[c])&&(a=e.call(o,o.__data__,c,u))&&("__data__"in o&&(a.__data__=o.__data__),l[c]=a);return new Rt(r,this._parents)}function J(e){return null==e?[]:Array.isArray(e)?e:Array.from(e)}function q(){return[]}function X(e){return null==e?q:function(){return this.querySelectorAll(e)}}function W(e){return function(){return J(e.apply(this,arguments))}}function $(e){e="function"===typeof e?W(e):X(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var a,u=t[o],s=u.length,l=0;l<s;++l)(a=u[l])&&(r.push(e.call(a,a.__data__,l,u)),i.push(a));return new Rt(r,i)}function z(e){return function(){return this.matches(e)}}function G(e){return function(t){return t.matches(e)}}var H=Array.prototype.find;function Q(e){return function(){return H.call(this.children,e)}}function Z(){return this.firstElementChild}function ee(e){return this.select(null==e?Z:Q("function"===typeof e?e:G(e)))}var te=Array.prototype.filter;function ne(){return Array.from(this.children)}function re(e){return function(){return te.call(this.children,e)}}function ie(e){return this.selectAll(null==e?ne:re("function"===typeof e?e:G(e)))}function oe(e){"function"!==typeof e&&(e=z(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o,a=t[i],u=a.length,s=r[i]=[],l=0;l<u;++l)(o=a[l])&&e.call(o,o.__data__,l,a)&&s.push(o);return new Rt(r,this._parents)}function ae(e){return new Array(e.length)}function ue(){return new Rt(this._enter||this._groups.map(ae),this._parents)}function se(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}function le(e){return function(){return e}}function ce(e,t,n,r,i,o){for(var a,u=0,s=t.length,l=o.length;u<l;++u)(a=t[u])?(a.__data__=o[u],r[u]=a):n[u]=new se(e,o[u]);for(;u<s;++u)(a=t[u])&&(i[u]=a)}function fe(e,t,n,r,i,o,a){var u,s,l,c=new Map,f=t.length,p=o.length,d=new Array(f);for(u=0;u<f;++u)(s=t[u])&&(d[u]=l=a.call(s,s.__data__,u,t)+"",c.has(l)?i[u]=s:c.set(l,s));for(u=0;u<p;++u)l=a.call(e,o[u],u,o)+"",(s=c.get(l))?(r[u]=s,s.__data__=o[u],c.delete(l)):n[u]=new se(e,o[u]);for(u=0;u<f;++u)(s=t[u])&&c.get(d[u])===s&&(i[u]=s)}function pe(e){return e.__data__}function de(e,t){if(!arguments.length)return Array.from(this,pe);var n=t?fe:ce,r=this._parents,i=this._groups;"function"!==typeof e&&(e=le(e));for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),l=0;l<o;++l){var c=r[l],f=i[l],p=f.length,d=ye(e.call(c,c&&c.__data__,l,r)),y=d.length,m=u[l]=new Array(y),h=a[l]=new Array(y),v=s[l]=new Array(p);n(c,f,m,h,v,d,t);for(var g,T,b=0,S=0;b<y;++b)if(g=m[b]){b>=S&&(S=b+1);while(!(T=h[S])&&++S<y);g._next=T||null}}return a=new Rt(a,r),a._enter=u,a._exit=s,a}function ye(e){return"object"===typeof e&&"length"in e?e:Array.from(e)}function me(){return new Rt(this._exit||this._groups.map(ae),this._parents)}function he(e,t,n){var r=this.enter(),i=this,o=this.exit();return"function"===typeof e?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),null!=t&&(i=t(i),i&&(i=i.selection())),null==n?o.remove():n(o),r&&i?r.merge(i).order():i}function ve(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,o=r.length,a=Math.min(i,o),u=new Array(i),s=0;s<a;++s)for(var l,c=n[s],f=r[s],p=c.length,d=u[s]=new Array(p),y=0;y<p;++y)(l=c[y]||f[y])&&(d[y]=l);for(;s<i;++s)u[s]=n[s];return new Rt(u,this._parents)}function ge(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r,i=e[t],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this}function Te(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=be);for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a,u=n[o],s=u.length,l=i[o]=new Array(s),c=0;c<s;++c)(a=u[c])&&(l[c]=a);l.sort(t)}return new Rt(i,this._parents).order()}function be(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Se(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Ee(){return Array.from(this)}function xe(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function _e(){let e=0;for(const t of this)++e;return e}function we(){return!this.node()}function Ae(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i,o=t[n],a=0,u=o.length;a<u;++a)(i=o[a])&&e.call(i,i.__data__,a,o);return this}se.prototype={constructor:se,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var Pe="http://www.w3.org/1999/xhtml",Oe={svg:"http://www.w3.org/2000/svg",xhtml:Pe,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ne(e){var t=e+="",n=t.indexOf(":");return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),Oe.hasOwnProperty(t)?{space:Oe[t],local:e}:e}function Ie(e){return function(){this.removeAttribute(e)}}function je(e){return function(){this.removeAttributeNS(e.space,e.local)}}function De(e,t){return function(){this.setAttribute(e,t)}}function Le(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Me(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function Ce(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function ke(e,t){var n=Ne(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==t?n.local?je:Ie:"function"===typeof t?n.local?Ce:Me:n.local?Le:De)(n,t))}function Re(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Be(e){return function(){this.style.removeProperty(e)}}function Fe(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ve(e,t,n){return function(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Ke(e,t,n){return arguments.length>1?this.each((null==t?Be:"function"===typeof t?Ve:Fe)(e,t,null==n?"":n)):Ye(this.node(),e)}function Ye(e,t){return e.style.getPropertyValue(t)||Re(e).getComputedStyle(e,null).getPropertyValue(t)}function Ue(e){return function(){delete this[e]}}function Je(e,t){return function(){this[e]=t}}function qe(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}function Xe(e,t){return arguments.length>1?this.each((null==t?Ue:"function"===typeof t?qe:Je)(e,t)):this.node()[e]}function We(e){return e.trim().split(/^|\s+/)}function $e(e){return e.classList||new ze(e)}function ze(e){this._node=e,this._names=We(e.getAttribute("class")||"")}function Ge(e,t){var n=$e(e),r=-1,i=t.length;while(++r<i)n.add(t[r])}function He(e,t){var n=$e(e),r=-1,i=t.length;while(++r<i)n.remove(t[r])}function Qe(e){return function(){Ge(this,e)}}function Ze(e){return function(){He(this,e)}}function et(e,t){return function(){(t.apply(this,arguments)?Ge:He)(this,e)}}function tt(e,t){var n=We(e+"");if(arguments.length<2){var r=$e(this.node()),i=-1,o=n.length;while(++i<o)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"===typeof t?et:t?Qe:Ze)(n,t))}function nt(){this.textContent=""}function rt(e){return function(){this.textContent=e}}function it(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}function ot(e){return arguments.length?this.each(null==e?nt:("function"===typeof e?it:rt)(e)):this.node().textContent}function at(){this.innerHTML=""}function ut(e){return function(){this.innerHTML=e}}function st(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}function lt(e){return arguments.length?this.each(null==e?at:("function"===typeof e?st:ut)(e)):this.node().innerHTML}function ct(){this.nextSibling&&this.parentNode.appendChild(this)}function ft(){return this.each(ct)}function pt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dt(){return this.each(pt)}function yt(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Pe&&t.documentElement.namespaceURI===Pe?t.createElement(e):t.createElementNS(n,e)}}function mt(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function ht(e){var t=Ne(e);return(t.local?mt:yt)(t)}function vt(e){var t="function"===typeof e?e:ht(e);return this.select((function(){return this.appendChild(t.apply(this,arguments))}))}function gt(){return null}function Tt(e,t){var n="function"===typeof e?e:ht(e),r=null==t?gt:"function"===typeof t?t:Y(t);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))}function bt(){var e=this.parentNode;e&&e.removeChild(this)}function St(){return this.each(bt)}function Et(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xt(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function _t(e){return this.select(e?xt:Et)}function wt(e){return arguments.length?this.property("__data__",e):this.node().__data__}function At(e){return function(t){e.call(this,t,this.__data__)}}function Pt(e){return e.trim().split(/^|\s+/).map((function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}}))}function Ot(e){return function(){var t=this.__on;if(t){for(var n,r=0,i=-1,o=t.length;r<o;++r)n=t[r],e.type&&n.type!==e.type||n.name!==e.name?t[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?t.length=i:delete this.__on}}}function Nt(e,t,n){return function(){var r,i=this.__on,o=At(t);if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===e.type&&r.name===e.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),void(r.value=t);this.addEventListener(e.type,o,n),r={type:e.type,name:e.name,value:t,listener:o,options:n},i?i.push(r):this.__on=[r]}}function It(e,t,n){var r,i,o=Pt(e+""),a=o.length;if(!(arguments.length<2)){for(u=t?Nt:Ot,r=0;r<a;++r)this.each(u(o[r],t,n));return this}var u=this.node().__on;if(u)for(var s,l=0,c=u.length;l<c;++l)for(r=0,s=u[l];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value}function jt(e,t,n){var r=Re(e),i=r.CustomEvent;"function"===typeof i?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Dt(e,t){return function(){return jt(this,e,t)}}function Lt(e,t){return function(){return jt(this,e,t.apply(this,arguments))}}function Mt(e,t){return this.each(("function"===typeof t?Lt:Dt)(e,t))}function*Ct(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r,i=e[t],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}ze.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};var kt=[null];function Rt(e,t){this._groups=e,this._parents=t}function Bt(){return new Rt([[document.documentElement]],kt)}function Ft(){return this}Rt.prototype=Bt.prototype={constructor:Rt,select:U,selectAll:$,selectChild:ee,selectChildren:ie,filter:oe,data:de,enter:ue,exit:me,join:he,merge:ve,selection:Ft,order:ge,sort:Te,call:Se,nodes:Ee,node:xe,size:_e,empty:we,each:Ae,attr:ke,style:Ke,property:Xe,classed:tt,text:ot,html:lt,raise:ft,lower:dt,append:vt,insert:Tt,remove:St,clone:_t,datum:wt,on:It,dispatch:Mt,[Symbol.iterator]:Ct};var Vt=Bt,Kt=(n(21703),{value:()=>{}});function Yt(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r||/[\s.]/.test(e))throw new Error("illegal type: "+e);r[e]=[]}return new Ut(r)}function Ut(e){this._=e}function Jt(e,t){return e.trim().split(/^|\s+/).map((function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}}))}function qt(e,t){for(var n,r=0,i=e.length;r<i;++r)if((n=e[r]).name===t)return n.value}function Xt(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Kt,e=e.slice(0,r).concat(e.slice(r+1));break}return null!=n&&e.push({name:t,value:n}),e}Ut.prototype=Yt.prototype={constructor:Ut,on:function(e,t){var n,r=this._,i=Jt(e+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=t&&"function"!==typeof t)throw new Error("invalid callback: "+t);while(++o<a)if(n=(e=i[o]).type)r[n]=Xt(r[n],e.name,t);else if(null==t)for(n in r)r[n]=Xt(r[n],e.name,null);return this}while(++o<a)if((n=(e=i[o]).type)&&(n=qt(r[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ut(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,i)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};var Wt,$t,zt=Yt,Gt=0,Ht=0,Qt=0,Zt=1e3,en=0,tn=0,nn=0,rn="object"===typeof performance&&performance.now?performance:Date,on="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function an(){return tn||(on(un),tn=rn.now()+nn)}function un(){tn=0}function sn(){this._call=this._time=this._next=null}function ln(e,t,n){var r=new sn;return r.restart(e,t,n),r}function cn(){an(),++Gt;var e,t=Wt;while(t)(e=tn-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Gt}function fn(){tn=(en=rn.now())+nn,Gt=Ht=0;try{cn()}finally{Gt=0,dn(),tn=0}}function pn(){var e=rn.now(),t=e-en;t>Zt&&(nn-=t,en=e)}function dn(){var e,t,n=Wt,r=1/0;while(n)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:Wt=t);$t=e,yn(r)}function yn(e){if(!Gt){Ht&&(Ht=clearTimeout(Ht));var t=e-tn;t>24?(e<1/0&&(Ht=setTimeout(fn,e-rn.now()-nn)),Qt&&(Qt=clearInterval(Qt))):(Qt||(en=rn.now(),Qt=setInterval(pn,Zt)),Gt=1,on(fn))}}function mn(e,t,n){var r=new sn;return t=null==t?0:+t,r.restart((n=>{r.stop(),e(n+t)}),t,n),r}sn.prototype=ln.prototype={constructor:sn,restart:function(e,t,n){if("function"!==typeof e)throw new TypeError("callback is not a function");n=(null==n?an():+n)+(null==t?0:+t),this._next||$t===this||($t?$t._next=this:Wt=this,$t=this),this._call=e,this._time=n,yn()},stop:function(){this._call&&(this._call=null,this._time=1/0,yn())}};var hn=zt("start","end","cancel","interrupt"),vn=[],gn=0,Tn=1,bn=2,Sn=3,En=4,xn=5,_n=6;function wn(e,t,n,r,i,o){var a=e.__transition;if(a){if(n in a)return}else e.__transition={};Nn(e,n,{name:t,index:r,group:i,on:hn,tween:vn,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:gn})}function An(e,t){var n=On(e,t);if(n.state>gn)throw new Error("too late; already scheduled");return n}function Pn(e,t){var n=On(e,t);if(n.state>Sn)throw new Error("too late; already running");return n}function On(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Nn(e,t,n){var r,i=e.__transition;function o(e){n.state=Tn,n.timer.restart(a,n.delay,n.time),n.delay<=e&&a(e-n.delay)}function a(o){var l,c,f,p;if(n.state!==Tn)return s();for(l in i)if(p=i[l],p.name===n.name){if(p.state===Sn)return mn(a);p.state===En?(p.state=_n,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete i[l]):+l<t&&(p.state=_n,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete i[l])}if(mn((function(){n.state===Sn&&(n.state=En,n.timer.restart(u,n.delay,n.time),u(o))})),n.state=bn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===bn){for(n.state=Sn,r=new Array(f=n.tween.length),l=0,c=-1;l<f;++l)(p=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(r[++c]=p);r.length=c+1}}function u(t){var i=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(s),n.state=xn,1),o=-1,a=r.length;while(++o<a)r[o].call(e,i);n.state===xn&&(n.on.call("end",e,e.__data__,n.index,n.group),s())}function s(){for(var r in n.state=_n,n.timer.stop(),delete i[t],i)return;delete e.__transition}i[t]=n,n.timer=ln(o,0,n.time)}function In(e,t){var n,r,i,o=e.__transition,a=!0;if(o){for(i in t=null==t?null:t+"",o)(n=o[i]).name===t?(r=n.state>bn&&n.state<xn,n.state=_n,n.timer.stop(),n.on.call(r?"interrupt":"cancel",e,e.__data__,n.index,n.group),delete o[i]):a=!1;a&&delete e.__transition}}function jn(e){return this.each((function(){In(this,e)}))}function Dn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Ln,Mn,Cn,kn,Rn=180/Math.PI,Bn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Fn(e,t,n,r,i,o){var a,u,s;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(s=e*n+t*r)&&(n-=e*s,r-=t*s),(u=Math.sqrt(n*n+r*r))&&(n/=u,r/=u,s/=u),e*r<t*n&&(e=-e,t=-t,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*Rn,skewX:Math.atan(s)*Rn,scaleX:a,scaleY:u}}function Vn(e){return"none"===e?Bn:(Ln||(Ln=document.createElement("DIV"),Mn=document.documentElement,Cn=document.defaultView),Ln.style.transform=e,e=Cn.getComputedStyle(Mn.appendChild(Ln),null).getPropertyValue("transform"),Mn.removeChild(Ln),e=e.slice(7,-1).split(","),Fn(+e[0],+e[1],+e[2],+e[3],+e[4],+e[5]))}function Kn(e){return null==e?Bn:(kn||(kn=document.createElementNS("http://www.w3.org/2000/svg","g")),kn.setAttribute("transform",e),(e=kn.transform.baseVal.consolidate())?(e=e.matrix,Fn(e.a,e.b,e.c,e.d,e.e,e.f)):Bn)}function Yn(e,t,n,r){function i(e){return e.length?e.pop()+" ":""}function o(e,r,i,o,a,u){if(e!==i||r!==o){var s=a.push("translate(",null,t,null,n);u.push({i:s-4,x:Dn(e,i)},{i:s-2,x:Dn(r,o)})}else(i||o)&&a.push("translate("+i+t+o+n)}function a(e,t,n,o){e!==t?(e-t>180?t+=360:t-e>180&&(e+=360),o.push({i:n.push(i(n)+"rotate(",null,r)-2,x:Dn(e,t)})):t&&n.push(i(n)+"rotate("+t+r)}function u(e,t,n,o){e!==t?o.push({i:n.push(i(n)+"skewX(",null,r)-2,x:Dn(e,t)}):t&&n.push(i(n)+"skewX("+t+r)}function s(e,t,n,r,o,a){if(e!==n||t!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:Dn(e,n)},{i:u-2,x:Dn(t,r)})}else 1===n&&1===r||o.push(i(o)+"scale("+n+","+r+")")}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),o(t.translateX,t.translateY,n.translateX,n.translateY,r,i),a(t.rotate,n.rotate,r,i),u(t.skewX,n.skewX,r,i),s(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){var t,n=-1,o=i.length;while(++n<o)r[(t=i[n]).i]=t.x(e);return r.join("")}}}var Un=Yn(Vn,"px, ","px)","deg)"),Jn=Yn(Kn,", ",")",")");function qn(e,t){var n,r;return function(){var i=Pn(this,e),o=i.tween;if(o!==n){r=n=o;for(var a=0,u=r.length;a<u;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Xn(e,t,n){var r,i;if("function"!==typeof n)throw new Error;return function(){var o=Pn(this,e),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:t,value:n},s=0,l=i.length;s<l;++s)if(i[s].name===t){i[s]=u;break}s===l&&i.push(u)}o.tween=i}}function Wn(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r,i=On(this.node(),n).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===e)return r.value;return null}return this.each((null==t?qn:Xn)(n,e,t))}function $n(e,t,n){var r=e._id;return e.each((function(){var e=Pn(this,r);(e.value||(e.value={}))[t]=n.apply(this,arguments)})),function(e){return On(e,r).value[t]}}function zn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Gn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Hn(){}var Qn=.7,Zn=1/Qn,er="\\s*([+-]?\\d+)\\s*",tr="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",nr="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rr=/^#([0-9a-f]{3,8})$/,ir=new RegExp("^rgb\\("+[er,er,er]+"\\)$"),or=new RegExp("^rgb\\("+[nr,nr,nr]+"\\)$"),ar=new RegExp("^rgba\\("+[er,er,er,tr]+"\\)$"),ur=new RegExp("^rgba\\("+[nr,nr,nr,tr]+"\\)$"),sr=new RegExp("^hsl\\("+[tr,nr,nr]+"\\)$"),lr=new RegExp("^hsla\\("+[tr,nr,nr,tr]+"\\)$"),cr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function fr(){return this.rgb().formatHex()}function pr(){return _r(this).formatHsl()}function dr(){return this.rgb().formatRgb()}function yr(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=rr.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?mr(t):3===n?new Tr(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?hr(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?hr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=ir.exec(e))?new Tr(t[1],t[2],t[3],1):(t=or.exec(e))?new Tr(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=ar.exec(e))?hr(t[1],t[2],t[3],t[4]):(t=ur.exec(e))?hr(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=sr.exec(e))?xr(t[1],t[2]/100,t[3]/100,1):(t=lr.exec(e))?xr(t[1],t[2]/100,t[3]/100,t[4]):cr.hasOwnProperty(e)?mr(cr[e]):"transparent"===e?new Tr(NaN,NaN,NaN,0):null}function mr(e){return new Tr(e>>16&255,e>>8&255,255&e,1)}function hr(e,t,n,r){return r<=0&&(e=t=n=NaN),new Tr(e,t,n,r)}function vr(e){return e instanceof Hn||(e=yr(e)),e?(e=e.rgb(),new Tr(e.r,e.g,e.b,e.opacity)):new Tr}function gr(e,t,n,r){return 1===arguments.length?vr(e):new Tr(e,t,n,null==r?1:r)}function Tr(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function br(){return"#"+Er(this.r)+Er(this.g)+Er(this.b)}function Sr(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(1===e?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===e?")":", "+e+")")}function Er(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function xr(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Ar(e,t,n,r)}function _r(e){if(e instanceof Ar)return new Ar(e.h,e.s,e.l,e.opacity);if(e instanceof Hn||(e=yr(e)),!e)return new Ar;if(e instanceof Ar)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=t===o?(n-r)/u+6*(n<r):n===o?(r-t)/u+2:(t-n)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new Ar(a,u,s,e.opacity)}function wr(e,t,n,r){return 1===arguments.length?_r(e):new Ar(e,t,n,null==r?1:r)}function Ar(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function Pr(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}function Or(e,t,n,r,i){var o=e*e,a=o*e;return((1-3*e+3*o-a)*t+(4-6*o+3*a)*n+(1+3*e+3*o-3*a)*r+a*i)/6}function Nr(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],o=e[r+1],a=r>0?e[r-1]:2*i-o,u=r<t-1?e[r+2]:2*o-i;return Or((n-r/t)*t,a,i,o,u)}}function Ir(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),i=e[(r+t-1)%t],o=e[r%t],a=e[(r+1)%t],u=e[(r+2)%t];return Or((n-r/t)*t,i,o,a,u)}}function jr(e){return function(){return e}}function Dr(e,t){return function(n){return e+n*t}}function Lr(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Mr(e){return 1===(e=+e)?Cr:function(t,n){return n-t?Lr(t,n,e):jr(isNaN(t)?n:t)}}function Cr(e,t){var n=t-e;return n?Dr(e,n):jr(isNaN(e)?t:e)}zn(Hn,yr,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:fr,formatHex:fr,formatHsl:pr,formatRgb:dr,toString:dr}),zn(Tr,gr,Gn(Hn,{brighter:function(e){return e=null==e?Zn:Math.pow(Zn,e),new Tr(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=null==e?Qn:Math.pow(Qn,e),new Tr(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:br,formatHex:br,formatRgb:Sr,toString:Sr})),zn(Ar,wr,Gn(Hn,{brighter:function(e){return e=null==e?Zn:Math.pow(Zn,e),new Ar(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=null==e?Qn:Math.pow(Qn,e),new Ar(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Tr(Pr(e>=240?e-240:e+120,i,r),Pr(e,i,r),Pr(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(1===e?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===e?")":", "+e+")")}}));var kr=function e(t){var n=Mr(t);function r(e,t){var r=n((e=gr(e)).r,(t=gr(t)).r),i=n(e.g,t.g),o=n(e.b,t.b),a=Cr(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=o(t),e.opacity=a(t),e+""}}return r.gamma=e,r}(1);function Rr(e){return function(t){var n,r,i=t.length,o=new Array(i),a=new Array(i),u=new Array(i);for(n=0;n<i;++n)r=gr(t[n]),o[n]=r.r||0,a[n]=r.g||0,u[n]=r.b||0;return o=e(o),a=e(a),u=e(u),r.opacity=1,function(e){return r.r=o(e),r.g=a(e),r.b=u(e),r+""}}}Rr(Nr),Rr(Ir);var Br=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Fr=new RegExp(Br.source,"g");function Vr(e){return function(){return e}}function Kr(e){return function(t){return e(t)+""}}function Yr(e,t){var n,r,i,o=Br.lastIndex=Fr.lastIndex=0,a=-1,u=[],s=[];e+="",t+="";while((n=Br.exec(e))&&(r=Fr.exec(t)))(i=r.index)>o&&(i=t.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(n=n[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:Dn(n,r)})),o=Fr.lastIndex;return o<t.length&&(i=t.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?Kr(s[0].x):Vr(t):(t=s.length,function(e){for(var n,r=0;r<t;++r)u[(n=s[r]).i]=n.x(e);return u.join("")})}function Ur(e,t){var n;return("number"===typeof t?Dn:t instanceof yr?kr:(n=yr(t))?(t=n,kr):Yr)(e,t)}function Jr(e){return function(){this.removeAttribute(e)}}function qr(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Xr(e,t,n){var r,i,o=n+"";return function(){var a=this.getAttribute(e);return a===o?null:a===r?i:i=t(r=a,n)}}function Wr(e,t,n){var r,i,o=n+"";return function(){var a=this.getAttributeNS(e.space,e.local);return a===o?null:a===r?i:i=t(r=a,n)}}function $r(e,t,n){var r,i,o;return function(){var a,u,s=n(this);if(null!=s)return a=this.getAttribute(e),u=s+"",a===u?null:a===r&&u===i?o:(i=u,o=t(r=a,s));this.removeAttribute(e)}}function zr(e,t,n){var r,i,o;return function(){var a,u,s=n(this);if(null!=s)return a=this.getAttributeNS(e.space,e.local),u=s+"",a===u?null:a===r&&u===i?o:(i=u,o=t(r=a,s));this.removeAttributeNS(e.space,e.local)}}function Gr(e,t){var n=Ne(e),r="transform"===n?Jn:Ur;return this.attrTween(e,"function"===typeof t?(n.local?zr:$r)(n,r,$n(this,"attr."+e,t)):null==t?(n.local?qr:Jr)(n):(n.local?Wr:Xr)(n,r,t))}function Hr(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Qr(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Zr(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Qr(e,i)),n}return i._value=t,i}function ei(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Hr(e,i)),n}return i._value=t,i}function ti(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!==typeof t)throw new Error;var r=Ne(e);return this.tween(n,(r.local?Zr:ei)(r,t))}function ni(e,t){return function(){An(this,e).delay=+t.apply(this,arguments)}}function ri(e,t){return t=+t,function(){An(this,e).delay=t}}function ii(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?ni:ri)(t,e)):On(this.node(),t).delay}function oi(e,t){return function(){Pn(this,e).duration=+t.apply(this,arguments)}}function ai(e,t){return t=+t,function(){Pn(this,e).duration=t}}function ui(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?oi:ai)(t,e)):On(this.node(),t).duration}function si(e,t){if("function"!==typeof t)throw new Error;return function(){Pn(this,e).ease=t}}function li(e){var t=this._id;return arguments.length?this.each(si(t,e)):On(this.node(),t).ease}function ci(e,t){return function(){var n=t.apply(this,arguments);if("function"!==typeof n)throw new Error;Pn(this,e).ease=n}}function fi(e){if("function"!==typeof e)throw new Error;return this.each(ci(this._id,e))}function pi(e){"function"!==typeof e&&(e=z(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o,a=t[i],u=a.length,s=r[i]=[],l=0;l<u;++l)(o=a[l])&&e.call(o,o.__data__,l,a)&&s.push(o);return new Ki(r,this._parents,this._name,this._id)}function di(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,l=t[u],c=n[u],f=l.length,p=a[u]=new Array(f),d=0;d<f;++d)(s=l[d]||c[d])&&(p[d]=s);for(;u<r;++u)a[u]=t[u];return new Ki(a,this._parents,this._name,this._id)}function yi(e){return(e+"").trim().split(/^|\s+/).every((function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||"start"===e}))}function mi(e,t,n){var r,i,o=yi(t)?An:Pn;return function(){var a=o(this,e),u=a.on;u!==r&&(i=(r=u).copy()).on(t,n),a.on=i}}function hi(e,t){var n=this._id;return arguments.length<2?On(this.node(),n).on.on(e):this.each(mi(n,e,t))}function vi(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function gi(){return this.on("end.remove",vi(this._id))}function Ti(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=Y(e));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,l=r[a],c=l.length,f=o[a]=new Array(c),p=0;p<c;++p)(u=l[p])&&(s=e.call(u,u.__data__,p,l))&&("__data__"in u&&(s.__data__=u.__data__),f[p]=s,wn(f[p],t,n,p,f,On(u,n)));return new Ki(o,this._parents,t,n)}function bi(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=X(e));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,l=r[u],c=l.length,f=0;f<c;++f)if(s=l[f]){for(var p,d=e.call(s,s.__data__,f,l),y=On(s,n),m=0,h=d.length;m<h;++m)(p=d[m])&&wn(p,t,n,m,d,y);o.push(d),a.push(s)}return new Ki(o,a,t,n)}var Si=Vt.prototype.constructor;function Ei(){return new Si(this._groups,this._parents)}function xi(e,t){var n,r,i;return function(){var o=Ye(this,e),a=(this.style.removeProperty(e),Ye(this,e));return o===a?null:o===n&&a===r?i:i=t(n=o,r=a)}}function _i(e){return function(){this.style.removeProperty(e)}}function wi(e,t,n){var r,i,o=n+"";return function(){var a=Ye(this,e);return a===o?null:a===r?i:i=t(r=a,n)}}function Ai(e,t,n){var r,i,o;return function(){var a=Ye(this,e),u=n(this),s=u+"";return null==u&&(this.style.removeProperty(e),s=u=Ye(this,e)),a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,u))}}function Pi(e,t){var n,r,i,o,a="style."+t,u="end."+a;return function(){var s=Pn(this,e),l=s.on,c=null==s.value[a]?o||(o=_i(t)):void 0;l===n&&i===c||(r=(n=l).copy()).on(u,i=c),s.on=r}}function Oi(e,t,n){var r="transform"===(e+="")?Un:Ur;return null==t?this.styleTween(e,xi(e,r)).on("end.style."+e,_i(e)):"function"===typeof t?this.styleTween(e,Ai(e,r,$n(this,"style."+e,t))).each(Pi(this._id,e)):this.styleTween(e,wi(e,r,t),n).on("end.style."+e,null)}function Ni(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Ii(e,t,n){var r,i;function o(){var o=t.apply(this,arguments);return o!==i&&(r=(i=o)&&Ni(e,o,n)),r}return o._value=t,o}function ji(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==t)return this.tween(r,null);if("function"!==typeof t)throw new Error;return this.tween(r,Ii(e,t,null==n?"":n))}function Di(e){return function(){this.textContent=e}}function Li(e){return function(){var t=e(this);this.textContent=null==t?"":t}}function Mi(e){return this.tween("text","function"===typeof e?Li($n(this,"text",e)):Di(null==e?"":e+""))}function Ci(e){return function(t){this.textContent=e.call(this,t)}}function ki(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Ci(r)),t}return r._value=e,r}function Ri(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(null==e)return this.tween(t,null);if("function"!==typeof e)throw new Error;return this.tween(t,ki(e))}function Bi(){for(var e=this._name,t=this._id,n=Ui(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)if(a=u[l]){var c=On(a,t);wn(a,e,n,l,u,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Ki(r,this._parents,e,n)}function Fi(){var e,t,n=this,r=n._id,i=n.size();return new Promise((function(o,a){var u={value:a},s={value:function(){0===--i&&o()}};n.each((function(){var n=Pn(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(u),t._.interrupt.push(u),t._.end.push(s)),n.on=t})),0===i&&o()}))}var Vi=0;function Ki(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Yi(e){return Vt().transition(e)}function Ui(){return++Vi}var Ji=Vt.prototype;function qi(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}Ki.prototype=Yi.prototype={constructor:Ki,select:Ti,selectAll:bi,selectChild:Ji.selectChild,selectChildren:Ji.selectChildren,filter:pi,merge:di,selection:Ei,transition:Bi,call:Ji.call,nodes:Ji.nodes,node:Ji.node,size:Ji.size,empty:Ji.empty,each:Ji.each,on:hi,attr:Gr,attrTween:ti,style:Oi,styleTween:ji,text:Mi,textTween:Ri,remove:gi,tween:Wn,delay:ii,duration:ui,ease:li,easeVarying:fi,end:Fi,[Symbol.iterator]:Ji[Symbol.iterator]};var Xi={time:null,delay:0,duration:250,ease:qi};function Wi(e,t){var n;while(!(n=e.__transition)||!(n=n[t]))if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function $i(e){var t,n;e instanceof Ki?(t=e._id,e=e._name):(t=Ui(),(n=Xi).time=an(),e=null==e?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)(a=u[l])&&wn(a,e,t,l,u,n||Wi(a,t));return new Ki(r,this._parents,e,t)}Vt.prototype.interrupt=jn,Vt.prototype.transition=$i;const{abs:zi,max:Gi,min:Hi}=Math;function Qi(e){return[+e[0],+e[1]]}function Zi(e){return[Qi(e[0]),Qi(e[1])]}["w","e"].map(eo),["n","s"].map(eo),["n","w","e","s","nw","ne","sw","se"].map(eo);function eo(e){return{type:e}}function to(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function no(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ro(){}var io=.7,oo=1/io,ao="\\s*([+-]?\\d+)\\s*",uo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",so="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lo=/^#([0-9a-f]{3,8})$/,co=new RegExp(`^rgb\\(${ao},${ao},${ao}\\)$`),fo=new RegExp(`^rgb\\(${so},${so},${so}\\)$`),po=new RegExp(`^rgba\\(${ao},${ao},${ao},${uo}\\)$`),yo=new RegExp(`^rgba\\(${so},${so},${so},${uo}\\)$`),mo=new RegExp(`^hsl\\(${uo},${so},${so}\\)$`),ho=new RegExp(`^hsla\\(${uo},${so},${so},${uo}\\)$`),vo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function go(){return this.rgb().formatHex()}function To(){return this.rgb().formatHex8()}function bo(){return Co(this).formatHsl()}function So(){return this.rgb().formatRgb()}function Eo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=lo.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?xo(t):3===n?new Po(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?_o(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?_o(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=co.exec(e))?new Po(t[1],t[2],t[3],1):(t=fo.exec(e))?new Po(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=po.exec(e))?_o(t[1],t[2],t[3],t[4]):(t=yo.exec(e))?_o(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=mo.exec(e))?Mo(t[1],t[2]/100,t[3]/100,1):(t=ho.exec(e))?Mo(t[1],t[2]/100,t[3]/100,t[4]):vo.hasOwnProperty(e)?xo(vo[e]):"transparent"===e?new Po(NaN,NaN,NaN,0):null}function xo(e){return new Po(e>>16&255,e>>8&255,255&e,1)}function _o(e,t,n,r){return r<=0&&(e=t=n=NaN),new Po(e,t,n,r)}function wo(e){return e instanceof ro||(e=Eo(e)),e?(e=e.rgb(),new Po(e.r,e.g,e.b,e.opacity)):new Po}function Ao(e,t,n,r){return 1===arguments.length?wo(e):new Po(e,t,n,null==r?1:r)}function Po(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function Oo(){return`#${Lo(this.r)}${Lo(this.g)}${Lo(this.b)}`}function No(){return`#${Lo(this.r)}${Lo(this.g)}${Lo(this.b)}${Lo(255*(isNaN(this.opacity)?1:this.opacity))}`}function Io(){const e=jo(this.opacity);return`${1===e?"rgb(":"rgba("}${Do(this.r)}, ${Do(this.g)}, ${Do(this.b)}${1===e?")":`, ${e})`}`}function jo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Do(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Lo(e){return e=Do(e),(e<16?"0":"")+e.toString(16)}function Mo(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Ro(e,t,n,r)}function Co(e){if(e instanceof Ro)return new Ro(e.h,e.s,e.l,e.opacity);if(e instanceof ro||(e=Eo(e)),!e)return new Ro;if(e instanceof Ro)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=t===o?(n-r)/u+6*(n<r):n===o?(r-t)/u+2:(t-n)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new Ro(a,u,s,e.opacity)}function ko(e,t,n,r){return 1===arguments.length?Co(e):new Ro(e,t,n,null==r?1:r)}function Ro(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function Bo(e){return e=(e||0)%360,e<0?e+360:e}function Fo(e){return Math.max(0,Math.min(1,e||0))}function Vo(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}function Ko(e,t,n,r,i){var o=e*e,a=o*e;return((1-3*e+3*o-a)*t+(4-6*o+3*a)*n+(1+3*e+3*o-3*a)*r+a*i)/6}function Yo(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],o=e[r+1],a=r>0?e[r-1]:2*i-o,u=r<t-1?e[r+2]:2*o-i;return Ko((n-r/t)*t,a,i,o,u)}}function Uo(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),i=e[(r+t-1)%t],o=e[r%t],a=e[(r+1)%t],u=e[(r+2)%t];return Ko((n-r/t)*t,i,o,a,u)}}to(ro,Eo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:go,formatHex:go,formatHex8:To,formatHsl:bo,formatRgb:So,toString:So}),to(Po,Ao,no(ro,{brighter(e){return e=null==e?oo:Math.pow(oo,e),new Po(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?io:Math.pow(io,e),new Po(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Po(Do(this.r),Do(this.g),Do(this.b),jo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Oo,formatHex:Oo,formatHex8:No,formatRgb:Io,toString:Io})),to(Ro,ko,no(ro,{brighter(e){return e=null==e?oo:Math.pow(oo,e),new Ro(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?io:Math.pow(io,e),new Ro(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Po(Vo(e>=240?e-240:e+120,i,r),Vo(e,i,r),Vo(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Ro(Bo(this.h),Fo(this.s),Fo(this.l),jo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=jo(this.opacity);return`${1===e?"hsl(":"hsla("}${Bo(this.h)}, ${100*Fo(this.s)}%, ${100*Fo(this.l)}%${1===e?")":`, ${e})`}`}}));var Jo=e=>()=>e;function qo(e,t){return function(n){return e+n*t}}function Xo(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Wo(e){return 1===(e=+e)?$o:function(t,n){return n-t?Xo(t,n,e):Jo(isNaN(t)?n:t)}}function $o(e,t){var n=t-e;return n?qo(e,n):Jo(isNaN(e)?t:e)}var zo=function e(t){var n=Wo(t);function r(e,t){var r=n((e=Ao(e)).r,(t=Ao(t)).r),i=n(e.g,t.g),o=n(e.b,t.b),a=$o(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=o(t),e.opacity=a(t),e+""}}return r.gamma=e,r}(1);function Go(e){return function(t){var n,r,i=t.length,o=new Array(i),a=new Array(i),u=new Array(i);for(n=0;n<i;++n)r=Ao(t[n]),o[n]=r.r||0,a[n]=r.g||0,u[n]=r.b||0;return o=e(o),a=e(a),u=e(u),r.opacity=1,function(e){return r.r=o(e),r.g=a(e),r.b=u(e),r+""}}}Go(Yo),Go(Uo);function Ho(e,t){var n,r=t?t.length:0,i=e?Math.min(r,e.length):0,o=new Array(i),a=new Array(r);for(n=0;n<i;++n)o[n]=sa(e[n],t[n]);for(;n<r;++n)a[n]=t[n];return function(e){for(n=0;n<i;++n)a[n]=o[n](e);return a}}function Qo(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Zo(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function ea(e,t){var n,r={},i={};for(n in null!==e&&"object"===typeof e||(e={}),null!==t&&"object"===typeof t||(t={}),t)n in e?r[n]=sa(e[n],t[n]):i[n]=t[n];return function(e){for(n in r)i[n]=r[n](e);return i}}var ta=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,na=new RegExp(ta.source,"g");function ra(e){return function(){return e}}function ia(e){return function(t){return e(t)+""}}function oa(e,t){var n,r,i,o=ta.lastIndex=na.lastIndex=0,a=-1,u=[],s=[];e+="",t+="";while((n=ta.exec(e))&&(r=na.exec(t)))(i=r.index)>o&&(i=t.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(n=n[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:Zo(n,r)})),o=na.lastIndex;return o<t.length&&(i=t.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?ia(s[0].x):ra(t):(t=s.length,function(e){for(var n,r=0;r<t;++r)u[(n=s[r]).i]=n.x(e);return u.join("")})}function aa(e,t){t||(t=[]);var n,r=e?Math.min(t.length,e.length):0,i=t.slice();return function(o){for(n=0;n<r;++n)i[n]=e[n]*(1-o)+t[n]*o;return i}}function ua(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function sa(e,t){var n,r=typeof t;return null==t||"boolean"===r?Jo(t):("number"===r?Zo:"string"===r?(n=Eo(t))?(t=n,zo):oa:t instanceof Eo?zo:t instanceof Date?Qo:ua(t)?aa:Array.isArray(t)?Ho:"function"!==typeof t.valueOf&&"function"!==typeof t.toString||isNaN(t)?ea:Zo)(e,t)}function la(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ca(e){return function(){return e}}function fa(e){return+e}var pa=[0,1];function da(e){return e}function ya(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:ca(isNaN(t)?NaN:.5)}function ma(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function ha(e,t,n){var r=e[0],i=e[1],o=t[0],a=t[1];return i<r?(r=ya(i,r),o=n(a,o)):(r=ya(r,i),o=n(o,a)),function(e){return o(r(e))}}function va(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),o=new Array(r),a=-1;e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());while(++a<r)i[a]=ya(e[a],e[a+1]),o[a]=n(t[a],t[a+1]);return function(t){var n=p(e,t,1,r)-1;return o[n](i[n](t))}}function ga(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Ta(){var e,t,n,r,i,o,a=pa,u=pa,s=sa,l=da;function c(){var e=Math.min(a.length,u.length);return l!==da&&(l=ma(a[0],a[e-1])),r=e>2?va:ha,i=o=null,f}function f(t){return null==t||isNaN(t=+t)?n:(i||(i=r(a.map(e),u,s)))(e(l(t)))}return f.invert=function(n){return l(t((o||(o=r(u,a.map(e),Zo)))(n)))},f.domain=function(e){return arguments.length?(a=Array.from(e,fa),c()):a.slice()},f.range=function(e){return arguments.length?(u=Array.from(e),c()):u.slice()},f.rangeRound=function(e){return u=Array.from(e),s=la,c()},f.clamp=function(e){return arguments.length?(l=!!e||da,c()):l!==da},f.interpolate=function(e){return arguments.length?(s=e,c()):s},f.unknown=function(e){return arguments.length?(n=e,f):n},function(n,r){return e=n,t=r,c()}}function ba(){return Ta()(da,da)}function Sa(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}var Ea,xa=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function _a(e){if(!(t=xa.exec(e)))throw new Error("invalid format: "+e);var t;return new wa({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function wa(e){this.fill=void 0===e.fill?" ":e.fill+"",this.align=void 0===e.align?">":e.align+"",this.sign=void 0===e.sign?"-":e.sign+"",this.symbol=void 0===e.symbol?"":e.symbol+"",this.zero=!!e.zero,this.width=void 0===e.width?void 0:+e.width,this.comma=!!e.comma,this.precision=void 0===e.precision?void 0:+e.precision,this.trim=!!e.trim,this.type=void 0===e.type?"":e.type+""}function Aa(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Pa(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Oa(e){return e=Pa(Math.abs(e)),e?e[1]:NaN}function Na(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Oa(t)/3)))-Oa(Math.abs(e)))}function Ia(e,t){return function(n,r){var i=n.length,o=[],a=0,u=e[0],s=0;while(i>0&&u>0){if(s+u+1>r&&(u=Math.max(1,r-s)),o.push(n.substring(i-=u,i+u)),(s+=u+1)>r)break;u=e[a=(a+1)%e.length]}return o.reverse().join(t)}}function ja(e){return function(t){return t.replace(/[0-9]/g,(function(t){return e[+t]}))}}function Da(e){e:for(var t,n=e.length,r=1,i=-1;r<n;++r)switch(e[r]){case".":i=t=r;break;case"0":0===i&&(i=r),t=r;break;default:if(!+e[r])break e;i>0&&(i=0);break}return i>0?e.slice(0,i)+e.slice(t+1):e}function La(e,t){var n=Pa(e,t);if(!n)return e+"";var r=n[0],i=n[1],o=i-(Ea=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Pa(e,Math.max(0,t+o-1))[0]}function Ma(e,t){var n=Pa(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}_a.prototype=wa.prototype,wa.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Ca={"%":(e,t)=>(100*e).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Aa,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Ma(100*e,t),r:Ma,s:La,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function ka(e){return e}var Ra,Ba,Fa,Va=Array.prototype.map,Ka=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ya(e){var t=void 0===e.grouping||void 0===e.thousands?ka:Ia(Va.call(e.grouping,Number),e.thousands+""),n=void 0===e.currency?"":e.currency[0]+"",r=void 0===e.currency?"":e.currency[1]+"",i=void 0===e.decimal?".":e.decimal+"",o=void 0===e.numerals?ka:ja(Va.call(e.numerals,String)),a=void 0===e.percent?"%":e.percent+"",u=void 0===e.minus?"−":e.minus+"",s=void 0===e.nan?"NaN":e.nan+"";function l(e){e=_a(e);var l=e.fill,c=e.align,f=e.sign,p=e.symbol,d=e.zero,y=e.width,m=e.comma,h=e.precision,v=e.trim,g=e.type;"n"===g?(m=!0,g="g"):Ca[g]||(void 0===h&&(h=12),v=!0,g="g"),(d||"0"===l&&"="===c)&&(d=!0,l="0",c="=");var T="$"===p?n:"#"===p&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",b="$"===p?r:/[%p]/.test(g)?a:"",S=Ca[g],E=/[defgprs%]/.test(g);function x(e){var n,r,a,p=T,x=b;if("c"===g)x=S(e)+x,e="";else{e=+e;var _=e<0||1/e<0;if(e=isNaN(e)?s:S(Math.abs(e),h),v&&(e=Da(e)),_&&0===+e&&"+"!==f&&(_=!1),p=(_?"("===f?f:u:"-"===f||"("===f?"":f)+p,x=("s"===g?Ka[8+Ea/3]:"")+x+(_&&"("===f?")":""),E){n=-1,r=e.length;while(++n<r)if(a=e.charCodeAt(n),48>a||a>57){x=(46===a?i+e.slice(n+1):e.slice(n))+x,e=e.slice(0,n);break}}}m&&!d&&(e=t(e,1/0));var w=p.length+e.length+x.length,A=w<y?new Array(y-w+1).join(l):"";switch(m&&d&&(e=t(A+e,A.length?y-x.length:1/0),A=""),c){case"<":e=p+e+x+A;break;case"=":e=p+A+e+x;break;case"^":e=A.slice(0,w=A.length>>1)+p+e+x+A.slice(w);break;default:e=A+p+e+x;break}return o(e)}return h=void 0===h?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,h)):Math.max(0,Math.min(20,h)),x.toString=function(){return e+""},x}function c(e,t){var n=l((e=_a(e),e.type="f",e)),r=3*Math.max(-8,Math.min(8,Math.floor(Oa(t)/3))),i=Math.pow(10,-r),o=Ka[8+r/3];return function(e){return n(i*e)+o}}return{format:l,formatPrefix:c}}function Ua(e){return Ra=Ya(e),Ba=Ra.format,Fa=Ra.formatPrefix,Ra}function Ja(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Oa(t)-Oa(e))+1}function qa(e){return Math.max(0,-Oa(Math.abs(e)))}function Xa(e,t,n,r){var i,o=S(e,t,n);switch(r=_a(null==r?",f":r),r.type){case"s":var a=Math.max(Math.abs(e),Math.abs(t));return null!=r.precision||isNaN(i=Na(o,a))||(r.precision=i),Fa(r,a);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=Ja(o,Math.max(Math.abs(e),Math.abs(t))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=qa(o))||(r.precision=i-2*("%"===r.type));break}return Ba(r)}function Wa(e){var t=e.domain;return e.ticks=function(e){var n=t();return T(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t();return Xa(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var r,i,o=t(),a=0,u=o.length-1,s=o[a],l=o[u],c=10;l<s&&(i=s,s=l,l=i,i=a,a=u,u=i);while(c-- >0){if(i=b(s,l,n),i===r)return o[a]=s,o[u]=l,t(o);if(i>0)s=Math.floor(s/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;s=Math.ceil(s*i)/i,l=Math.floor(l*i)/i}r=i}return e},e}function $a(){var e=ba();return e.copy=function(){return ga(e,$a())},Sa.apply(e,arguments),Wa(e)}function za(e){let t;while(t=e.sourceEvent)e=t;return e}function Ga(e,t){if(e=za(e),void 0===t&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}function Ha(e){return"string"===typeof e?new Rt([[document.querySelector(e)]],[document.documentElement]):new Rt([[e]],kt)}function Qa(e,t,n){this.k=e,this.x=t,this.y=n}Ua({thousands:",",grouping:[3],currency:["$",""]}),Qa.prototype={constructor:Qa,scale:function(e){return 1===e?this:new Qa(this.k*e,this.x,this.y)},translate:function(e,t){return 0===e&0===t?this:new Qa(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Za=new Qa(1,0,0);function eu(e){while(!e.__zoom)if(!(e=e.parentNode))return Za;return e.__zoom}eu.prototype=Qa.prototype},11713:function(e){"use strict";e.exports=JSON.parse('["Complex64Array","Complex128Array"]')},68114:function(e){"use strict";e.exports=JSON.parse('["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]')}}]);
//# sourceMappingURL=chunk-vendors.aa2e3ba7.js.map