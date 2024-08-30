(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var up={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},Uy=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),n.push(e[h],e[d],e[f],e[p])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Ng(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Uy(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const c=r<i.length?e[i.charAt(r)]:64;++r;const d=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new Fy;const f=s<<2|a>>4;if(n.push(f),c!==64){const p=a<<4&240|c>>2;if(n.push(p),d!==64){const y=c<<6&192|d;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Fy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(i){const t=Ng(i);return Og.encodeByteArray(t,!0)},hc=function(i){return ky(i).replace(/\./g,"")},Vy=function(i){try{return Og.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=()=>By().__FIREBASE_DEFAULTS__,Hy=()=>{if(typeof process>"u"||typeof up>"u")return;const i=up.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Gy=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Vy(i[1]);return t&&JSON.parse(t)},wd=()=>{try{return zy()||Hy()||Gy()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Wy=i=>{var t,e;return(e=(t=wd())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},Xy=i=>{const t=Wy(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ug=()=>{var i;return(i=wd())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[hc(JSON.stringify(e)),hc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yy(){var i;const t=(i=wd())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ky(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Jy(){return!Yy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fg(){try{return typeof indexedDB=="object"}catch{return!1}}function kg(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}function Zy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="FirebaseError";class kr extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Qy,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bc.prototype.create)}}class Bc{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?tx(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new kr(r,a,n)}}function tx(i,t){return i.replace(ex,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const ex=/\{\$([^}]+)}/g;function dc(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(hp(s)&&hp(o)){if(!dc(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function hp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=1e3,ix=2,rx=4*60*60*1e3,sx=.5;function dp(i,t=nx,e=ix){const n=t*Math.pow(e,i),r=Math.round(sx*n*(Math.random()-.5)*2);return Math.min(rx,n+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(i){return i&&i._delegate?i._delegate:i}class nr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new $y;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lx(t))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Qr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qr){return this.instances.has(t)}getOptions(t=Qr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ax(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Qr){return this.component?this.component.multipleInstances?t:Qr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ax(i){return i===Qr?void 0:i}function lx(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ox(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const ux={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},hx=ue.INFO,dx={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},fx=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=dx[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bd{constructor(t){this.name=t,this._logLevel=hx,this._logHandler=fx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ux[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const px=(i,t)=>t.some(e=>i instanceof e);let fp,pp;function mx(){return fp||(fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gx(){return pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vg=new WeakMap,fh=new WeakMap,Bg=new WeakMap,fu=new WeakMap,Rd=new WeakMap;function _x(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Sr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Vg.set(e,i)}).catch(()=>{}),Rd.set(t,i),t}function vx(i){if(fh.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});fh.set(i,t)}let ph={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return fh.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Bg.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Sr(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function yx(i){ph=i(ph)}function xx(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(pu(this),t,...e);return Bg.set(n,t.sort?t.sort():[t]),Sr(n)}:gx().includes(i)?function(...t){return i.apply(pu(this),t),Sr(Vg.get(this))}:function(...t){return Sr(i.apply(pu(this),t))}}function Ex(i){return typeof i=="function"?xx(i):(i instanceof IDBTransaction&&vx(i),px(i,mx())?new Proxy(i,ph):i)}function Sr(i){if(i instanceof IDBRequest)return _x(i);if(fu.has(i))return fu.get(i);const t=Ex(i);return t!==i&&(fu.set(i,t),Rd.set(t,i)),t}const pu=i=>Rd.get(i);function zg(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=Sr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sx=["get","getKey","getAll","getAllKeys","count"],Tx=["put","add","delete","clear"],mu=new Map;function mp(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(mu.get(t))return mu.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=Tx.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Sx.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),r&&l.done]))[0]};return mu.set(t,s),s}yx(i=>({...i,get:(t,e,n)=>mp(t,e)||i.get(t,e,n),has:(t,e)=>!!mp(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ax(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Ax(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mh="@firebase/app",gp="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new bd("@firebase/app"),wx="@firebase/app-compat",bx="@firebase/analytics-compat",Rx="@firebase/analytics",Cx="@firebase/app-check-compat",Px="@firebase/app-check",Ix="@firebase/auth",Dx="@firebase/auth-compat",Lx="@firebase/database",Nx="@firebase/database-compat",Ox="@firebase/functions",Ux="@firebase/functions-compat",Fx="@firebase/installations",kx="@firebase/installations-compat",Vx="@firebase/messaging",Bx="@firebase/messaging-compat",zx="@firebase/performance",Hx="@firebase/performance-compat",Gx="@firebase/remote-config",Wx="@firebase/remote-config-compat",Xx="@firebase/storage",$x="@firebase/storage-compat",qx="@firebase/firestore",jx="@firebase/vertexai-preview",Yx="@firebase/firestore-compat",Kx="firebase",Jx="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="[DEFAULT]",Zx={[mh]:"fire-core",[wx]:"fire-core-compat",[Rx]:"fire-analytics",[bx]:"fire-analytics-compat",[Px]:"fire-app-check",[Cx]:"fire-app-check-compat",[Ix]:"fire-auth",[Dx]:"fire-auth-compat",[Lx]:"fire-rtdb",[Nx]:"fire-rtdb-compat",[Ox]:"fire-fn",[Ux]:"fire-fn-compat",[Fx]:"fire-iid",[kx]:"fire-iid-compat",[Vx]:"fire-fcm",[Bx]:"fire-fcm-compat",[zx]:"fire-perf",[Hx]:"fire-perf-compat",[Gx]:"fire-rc",[Wx]:"fire-rc-compat",[Xx]:"fire-gcs",[$x]:"fire-gcs-compat",[qx]:"fire-fst",[Yx]:"fire-fst-compat",[jx]:"fire-vertex","fire-js":"fire-js",[Kx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map,Qx=new Map,_h=new Map;function _p(i,t){try{i.container.addComponent(t)}catch(e){xs.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Pr(i){const t=i.name;if(_h.has(t))return xs.debug(`There were multiple attempts to register component ${t}.`),!1;_h.set(t,i);for(const e of fc.values())_p(e,i);for(const e of Qx.values())_p(e,i);return!0}function Qa(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Bc("app","Firebase",tE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=Jx;function Hg(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:gh,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Tr.create("bad-app-name",{appName:String(r)});if(e||(e=Ug()),!e)throw Tr.create("no-options");const s=fc.get(r);if(s){if(dc(e,s.options)&&dc(n,s.config))return s;throw Tr.create("duplicate-app",{appName:r})}const o=new cx(r);for(const l of _h.values())o.addComponent(l);const a=new eE(e,n,o);return fc.set(r,a),a}function Gg(i=gh){const t=fc.get(i);if(!t&&i===gh&&Ug())return Hg();if(!t)throw Tr.create("no-app",{appName:i});return t}function Pi(i,t,e){var n;let r=(n=Zx[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Pr(new nr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-heartbeat-database",rE=1,Ia="firebase-heartbeat-store";let gu=null;function Wg(){return gu||(gu=zg(iE,rE,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Ia)}catch(e){console.warn(e)}}}}).catch(i=>{throw Tr.create("idb-open",{originalErrorMessage:i.message})})),gu}async function sE(i){try{const e=(await Wg()).transaction(Ia),n=await e.objectStore(Ia).get(Xg(i));return await e.done,n}catch(t){if(t instanceof kr)xs.warn(t.message);else{const e=Tr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xs.warn(e.message)}}}async function vp(i,t){try{const n=(await Wg()).transaction(Ia,"readwrite");await n.objectStore(Ia).put(t,Xg(i)),await n.done}catch(e){if(e instanceof kr)xs.warn(e.message);else{const n=Tr.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}function Xg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=1024,aE=30*24*60*60*1e3;class lE{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new uE(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=aE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yp(),{heartbeatsToSend:n,unsentEntries:r}=cE(this._heartbeatsCache.heartbeats),s=hc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yp(){return new Date().toISOString().substring(0,10)}function cE(i,t=oE){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),xp(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),xp(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class uE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fg()?kg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await sE(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return vp(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return vp(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function xp(i){return hc(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(i){Pr(new nr("platform-logger",t=>new Mx(t),"PRIVATE")),Pr(new nr("heartbeat",t=>new lE(t),"PRIVATE")),Pi(mh,gp,i),Pi(mh,gp,"esm2017"),Pi("fire-js","")}hE("");var dE="firebase",fE="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pi(dE,fE,"app");const $g="@firebase/installations",Cd="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1e4,jg=`w:${Cd}`,Yg="FIS_v2",pE="https://firebaseinstallations.googleapis.com/v1",mE=60*60*1e3,gE="installations",_E="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new Bc(gE,_E,vE);function Kg(i){return i instanceof kr&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg({projectId:i}){return`${pE}/projects/${i}/installations`}function Zg(i){return{token:i.token,requestStatus:2,expiresIn:xE(i.expiresIn),creationTime:Date.now()}}async function Qg(i,t){const n=(await t.json()).error;return Es.create("request-failed",{requestName:i,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function t_({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function yE(i,{refreshToken:t}){const e=t_(i);return e.append("Authorization",EE(t)),e}async function e_(i){const t=await i();return t.status>=500&&t.status<600?i():t}function xE(i){return Number(i.replace("s","000"))}function EE(i){return`${Yg} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE({appConfig:i,heartbeatServiceProvider:t},{fid:e}){const n=Jg(i),r=t_(i),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:e,authVersion:Yg,appId:i.appId,sdkVersion:jg},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await e_(()=>fetch(n,a));if(l.ok){const c=await l.json();return{fid:c.fid||e,registrationStatus:2,refreshToken:c.refreshToken,authToken:Zg(c.authToken)}}else throw await Qg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(i){return new Promise(t=>{setTimeout(t,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=/^[cdef][\w-]{21}$/,vh="";function AE(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const e=wE(i);return ME.test(e)?e:vh}catch{return vh}}function wE(i){return TE(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function r_(i,t){const e=zc(i);s_(e,t),bE(e,t)}function s_(i,t){const e=i_.get(i);if(e)for(const n of e)n(t)}function bE(i,t){const e=RE();e&&e.postMessage({key:i,fid:t}),CE()}let os=null;function RE(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=i=>{s_(i.data.key,i.data.fid)}),os}function CE(){i_.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firebase-installations-database",IE=1,Ss="firebase-installations-store";let _u=null;function Pd(){return _u||(_u=zg(PE,IE,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(Ss)}}})),_u}async function pc(i,t){const e=zc(i),r=(await Pd()).transaction(Ss,"readwrite"),s=r.objectStore(Ss),o=await s.get(e);return await s.put(t,e),await r.done,(!o||o.fid!==t.fid)&&r_(i,t.fid),t}async function o_(i){const t=zc(i),n=(await Pd()).transaction(Ss,"readwrite");await n.objectStore(Ss).delete(t),await n.done}async function Hc(i,t){const e=zc(i),r=(await Pd()).transaction(Ss,"readwrite"),s=r.objectStore(Ss),o=await s.get(e),a=t(o);return a===void 0?await s.delete(e):await s.put(a,e),await r.done,a&&(!o||o.fid!==a.fid)&&r_(i,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(i){let t;const e=await Hc(i.appConfig,n=>{const r=DE(n),s=LE(i,r);return t=s.registrationPromise,s.installationEntry});return e.fid===vh?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function DE(i){const t=i||{fid:AE(),registrationStatus:0};return a_(t)}function LE(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Es.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=NE(i,e);return{installationEntry:e,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:OE(i)}:{installationEntry:t}}async function NE(i,t){try{const e=await SE(i,t);return pc(i.appConfig,e)}catch(e){throw Kg(e)&&e.customData.serverCode===409?await o_(i.appConfig):await pc(i.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function OE(i){let t=await Ep(i.appConfig);for(;t.registrationStatus===1;)await n_(100),t=await Ep(i.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:n}=await Id(i);return n||e}return t}function Ep(i){return Hc(i,t=>{if(!t)throw Es.create("installation-not-found");return a_(t)})}function a_(i){return UE(i)?{fid:i.fid,registrationStatus:0}:i}function UE(i){return i.registrationStatus===1&&i.registrationTime+qg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE({appConfig:i,heartbeatServiceProvider:t},e){const n=kE(i,e),r=yE(i,e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:jg,appId:i.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await e_(()=>fetch(n,a));if(l.ok){const c=await l.json();return Zg(c)}else throw await Qg("Generate Auth Token",l)}function kE(i,{fid:t}){return`${Jg(i)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(i,t=!1){let e;const n=await Hc(i.appConfig,s=>{if(!l_(s))throw Es.create("not-registered");const o=s.authToken;if(!t&&zE(o))return s;if(o.requestStatus===1)return e=VE(i,t),s;{if(!navigator.onLine)throw Es.create("app-offline");const a=GE(s);return e=BE(i,a),a}});return e?await e:n.authToken}async function VE(i,t){let e=await Sp(i.appConfig);for(;e.authToken.requestStatus===1;)await n_(100),e=await Sp(i.appConfig);const n=e.authToken;return n.requestStatus===0?Dd(i,t):n}function Sp(i){return Hc(i,t=>{if(!l_(t))throw Es.create("not-registered");const e=t.authToken;return WE(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function BE(i,t){try{const e=await FE(i,t),n=Object.assign(Object.assign({},t),{authToken:e});return await pc(i.appConfig,n),e}catch(e){if(Kg(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await o_(i.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pc(i.appConfig,n)}throw e}}function l_(i){return i!==void 0&&i.registrationStatus===2}function zE(i){return i.requestStatus===2&&!HE(i)}function HE(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+mE}function GE(i){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:t})}function WE(i){return i.requestStatus===1&&i.requestTime+qg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(i){const t=i,{installationEntry:e,registrationPromise:n}=await Id(t);return n?n.catch(console.error):Dd(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(i,t=!1){const e=i;return await qE(e),(await Dd(e,t)).token}async function qE(i){const{registrationPromise:t}=await Id(i);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(i){if(!i||!i.options)throw vu("App Configuration");if(!i.name)throw vu("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!i.options[e])throw vu(e);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function vu(i){return Es.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="installations",YE="installations-internal",KE=i=>{const t=i.getProvider("app").getImmediate(),e=jE(t),n=Qa(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},JE=i=>{const t=i.getProvider("app").getImmediate(),e=Qa(t,c_).getImmediate();return{getId:()=>XE(e),getToken:r=>$E(e,r)}};function ZE(){Pr(new nr(c_,KE,"PUBLIC")),Pr(new nr(YE,JE,"PRIVATE"))}ZE();Pi($g,Cd);Pi($g,Cd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",QE="firebase_id",tS="origin",eS=60*1e3,nS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ld="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new bd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Zn=new Bc("analytics","Analytics",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(i){if(!i.startsWith(Ld)){const t=Zn.create("invalid-gtag-resource",{gtagURL:i});return Un.warn(t.message),""}return i}function u_(i){return Promise.all(i.map(t=>t.catch(e=>e)))}function sS(i,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(i,t)),e}function oS(i,t){const e=sS("firebase-js-sdk-policy",{createScriptURL:rS}),n=document.createElement("script"),r=`${Ld}?l=${i}&id=${t}`;n.src=e?e==null?void 0:e.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function aS(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function lS(i,t,e,n,r,s){const o=n[r];try{if(o)await t[o];else{const l=(await u_(e)).find(c=>c.measurementId===r);l&&await t[l.appId]}}catch(a){Un.error(a)}i("config",r,s)}async function cS(i,t,e,n,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await u_(e);for(const l of o){const c=a.find(d=>d.measurementId===l),h=c&&t[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),i("event",n,r||{})}catch(s){Un.error(s)}}function uS(i,t,e,n){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await cS(i,t,e,a,l)}else if(s==="config"){const[a,l]=o;await lS(i,t,e,n,a,l)}else if(s==="consent"){const[a,l]=o;i("consent",a,l)}else if(s==="get"){const[a,l,c]=o;i("get",a,l,c)}else if(s==="set"){const[a]=o;i("set",a)}else i(s,...o)}catch(a){Un.error(a)}}return r}function hS(i,t,e,n,r){let s=function(...o){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=uS(s,i,t,e),{gtagCore:s,wrappedGtag:window[r]}}function dS(i){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ld)&&e.src.includes(i))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=30,pS=1e3;class mS{constructor(t={},e=pS){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const h_=new mS;function gS(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function _S(i){var t;const{appId:e,apiKey:n}=i,r={method:"GET",headers:gS(n)},s=nS.replace("{app-id}",e),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Zn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function vS(i,t=h_,e){const{appId:n,apiKey:r,measurementId:s}=i.options;if(!n)throw Zn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw Zn.create("no-api-key")}const o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ES;return setTimeout(async()=>{a.abort()},eS),d_({appId:n,apiKey:r,measurementId:s},o,a,t)}async function d_(i,{throttleEndTimeMillis:t,backoffCount:e},n,r=h_){var s;const{appId:o,measurementId:a}=i;try{await yS(n,t)}catch(l){if(a)return Un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await _S(i);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!xS(c)){if(r.deleteThrottleMetadata(o),a)return Un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?dp(e,r.intervalMillis,fS):dp(e,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:e+1};return r.setThrottleMetadata(o,d),Un.debug(`Calling attemptFetch again in ${h} millis`),d_(i,d,n,r)}}function yS(i,t){return new Promise((e,n)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(e,r);i.addEventListener(()=>{clearTimeout(s),n(Zn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function xS(i){if(!(i instanceof kr)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class ES{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function SS(i,t,e,n,r){if(r&&r.global){i("event",e,n);return}else{const s=await t,o=Object.assign(Object.assign({},n),{send_to:s});i("event",e,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(){if(Fg())try{await kg()}catch(i){return Un.warn(Zn.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return Un.warn(Zn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MS(i,t,e,n,r,s,o){var a;const l=vS(i);l.then(p=>{e[p.measurementId]=p.appId,i.options.measurementId&&p.measurementId!==i.options.measurementId&&Un.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Un.error(p)),t.push(l);const c=TS().then(p=>{if(p)return n.getId()}),[h,d]=await Promise.all([l,c]);dS(s)||oS(s,h.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[tS]="firebase",f.update=!0,d!=null&&(f[QE]=d),r("config",h.measurementId,f),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(t){this.app=t}_delete(){return delete ya[this.app.options.appId],Promise.resolve()}}let ya={},Tp=[];const Mp={};let yu="dataLayer",wS="gtag",Ap,f_,wp=!1;function bS(){const i=[];if(Ky()&&i.push("This is a browser extension environment."),Zy()||i.push("Cookies are not available."),i.length>0){const t=i.map((n,r)=>`(${r+1}) ${n}`).join(" "),e=Zn.create("invalid-analytics-context",{errorInfo:t});Un.warn(e.message)}}function RS(i,t,e){bS();const n=i.options.appId;if(!n)throw Zn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Zn.create("no-api-key");if(ya[n]!=null)throw Zn.create("already-exists",{id:n});if(!wp){aS(yu);const{wrappedGtag:s,gtagCore:o}=hS(ya,Tp,Mp,yu,wS);f_=s,Ap=o,wp=!0}return ya[n]=MS(i,Tp,Mp,t,Ap,yu,e),new AS(i)}function CS(i=Gg()){i=ys(i);const t=Qa(i,mc);return t.isInitialized()?t.getImmediate():PS(i)}function PS(i,t={}){const e=Qa(i,mc);if(e.isInitialized()){const r=e.getImmediate();if(dc(t,e.getOptions()))return r;throw Zn.create("already-initialized")}return e.initialize({options:t})}function IS(i,t,e,n){i=ys(i),SS(f_,ya[i.app.options.appId],t,e,n).catch(r=>Un.error(r))}const bp="@firebase/analytics",Rp="0.10.7";function DS(){Pr(new nr(mc,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return RS(n,r,e)},"PUBLIC")),Pr(new nr("analytics-internal",i,"PRIVATE")),Pi(bp,Rp),Pi(bp,Rp,"esm2017");function i(t){try{const e=t.getProvider(mc).getImmediate();return{logEvent:(n,r,s)=>IS(e,n,r,s)}}catch(e){throw Zn.create("interop-component-reg-failed",{reason:e})}}}DS();var Cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,T){function x(){}x.prototype=T.prototype,S.D=T.prototype,S.prototype=new x,S.prototype.constructor=S,S.C=function(E,b,D){for(var R=Array(arguments.length-2),W=2;W<arguments.length;W++)R[W-2]=arguments[W];return T.prototype[b].apply(E,R)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,T,x){x||(x=0);var E=Array(16);if(typeof T=="string")for(var b=0;16>b;++b)E[b]=T.charCodeAt(x++)|T.charCodeAt(x++)<<8|T.charCodeAt(x++)<<16|T.charCodeAt(x++)<<24;else for(b=0;16>b;++b)E[b]=T[x++]|T[x++]<<8|T[x++]<<16|T[x++]<<24;T=S.g[0],x=S.g[1],b=S.g[2];var D=S.g[3],R=T+(D^x&(b^D))+E[0]+3614090360&4294967295;T=x+(R<<7&4294967295|R>>>25),R=D+(b^T&(x^b))+E[1]+3905402710&4294967295,D=T+(R<<12&4294967295|R>>>20),R=b+(x^D&(T^x))+E[2]+606105819&4294967295,b=D+(R<<17&4294967295|R>>>15),R=x+(T^b&(D^T))+E[3]+3250441966&4294967295,x=b+(R<<22&4294967295|R>>>10),R=T+(D^x&(b^D))+E[4]+4118548399&4294967295,T=x+(R<<7&4294967295|R>>>25),R=D+(b^T&(x^b))+E[5]+1200080426&4294967295,D=T+(R<<12&4294967295|R>>>20),R=b+(x^D&(T^x))+E[6]+2821735955&4294967295,b=D+(R<<17&4294967295|R>>>15),R=x+(T^b&(D^T))+E[7]+4249261313&4294967295,x=b+(R<<22&4294967295|R>>>10),R=T+(D^x&(b^D))+E[8]+1770035416&4294967295,T=x+(R<<7&4294967295|R>>>25),R=D+(b^T&(x^b))+E[9]+2336552879&4294967295,D=T+(R<<12&4294967295|R>>>20),R=b+(x^D&(T^x))+E[10]+4294925233&4294967295,b=D+(R<<17&4294967295|R>>>15),R=x+(T^b&(D^T))+E[11]+2304563134&4294967295,x=b+(R<<22&4294967295|R>>>10),R=T+(D^x&(b^D))+E[12]+1804603682&4294967295,T=x+(R<<7&4294967295|R>>>25),R=D+(b^T&(x^b))+E[13]+4254626195&4294967295,D=T+(R<<12&4294967295|R>>>20),R=b+(x^D&(T^x))+E[14]+2792965006&4294967295,b=D+(R<<17&4294967295|R>>>15),R=x+(T^b&(D^T))+E[15]+1236535329&4294967295,x=b+(R<<22&4294967295|R>>>10),R=T+(b^D&(x^b))+E[1]+4129170786&4294967295,T=x+(R<<5&4294967295|R>>>27),R=D+(x^b&(T^x))+E[6]+3225465664&4294967295,D=T+(R<<9&4294967295|R>>>23),R=b+(T^x&(D^T))+E[11]+643717713&4294967295,b=D+(R<<14&4294967295|R>>>18),R=x+(D^T&(b^D))+E[0]+3921069994&4294967295,x=b+(R<<20&4294967295|R>>>12),R=T+(b^D&(x^b))+E[5]+3593408605&4294967295,T=x+(R<<5&4294967295|R>>>27),R=D+(x^b&(T^x))+E[10]+38016083&4294967295,D=T+(R<<9&4294967295|R>>>23),R=b+(T^x&(D^T))+E[15]+3634488961&4294967295,b=D+(R<<14&4294967295|R>>>18),R=x+(D^T&(b^D))+E[4]+3889429448&4294967295,x=b+(R<<20&4294967295|R>>>12),R=T+(b^D&(x^b))+E[9]+568446438&4294967295,T=x+(R<<5&4294967295|R>>>27),R=D+(x^b&(T^x))+E[14]+3275163606&4294967295,D=T+(R<<9&4294967295|R>>>23),R=b+(T^x&(D^T))+E[3]+4107603335&4294967295,b=D+(R<<14&4294967295|R>>>18),R=x+(D^T&(b^D))+E[8]+1163531501&4294967295,x=b+(R<<20&4294967295|R>>>12),R=T+(b^D&(x^b))+E[13]+2850285829&4294967295,T=x+(R<<5&4294967295|R>>>27),R=D+(x^b&(T^x))+E[2]+4243563512&4294967295,D=T+(R<<9&4294967295|R>>>23),R=b+(T^x&(D^T))+E[7]+1735328473&4294967295,b=D+(R<<14&4294967295|R>>>18),R=x+(D^T&(b^D))+E[12]+2368359562&4294967295,x=b+(R<<20&4294967295|R>>>12),R=T+(x^b^D)+E[5]+4294588738&4294967295,T=x+(R<<4&4294967295|R>>>28),R=D+(T^x^b)+E[8]+2272392833&4294967295,D=T+(R<<11&4294967295|R>>>21),R=b+(D^T^x)+E[11]+1839030562&4294967295,b=D+(R<<16&4294967295|R>>>16),R=x+(b^D^T)+E[14]+4259657740&4294967295,x=b+(R<<23&4294967295|R>>>9),R=T+(x^b^D)+E[1]+2763975236&4294967295,T=x+(R<<4&4294967295|R>>>28),R=D+(T^x^b)+E[4]+1272893353&4294967295,D=T+(R<<11&4294967295|R>>>21),R=b+(D^T^x)+E[7]+4139469664&4294967295,b=D+(R<<16&4294967295|R>>>16),R=x+(b^D^T)+E[10]+3200236656&4294967295,x=b+(R<<23&4294967295|R>>>9),R=T+(x^b^D)+E[13]+681279174&4294967295,T=x+(R<<4&4294967295|R>>>28),R=D+(T^x^b)+E[0]+3936430074&4294967295,D=T+(R<<11&4294967295|R>>>21),R=b+(D^T^x)+E[3]+3572445317&4294967295,b=D+(R<<16&4294967295|R>>>16),R=x+(b^D^T)+E[6]+76029189&4294967295,x=b+(R<<23&4294967295|R>>>9),R=T+(x^b^D)+E[9]+3654602809&4294967295,T=x+(R<<4&4294967295|R>>>28),R=D+(T^x^b)+E[12]+3873151461&4294967295,D=T+(R<<11&4294967295|R>>>21),R=b+(D^T^x)+E[15]+530742520&4294967295,b=D+(R<<16&4294967295|R>>>16),R=x+(b^D^T)+E[2]+3299628645&4294967295,x=b+(R<<23&4294967295|R>>>9),R=T+(b^(x|~D))+E[0]+4096336452&4294967295,T=x+(R<<6&4294967295|R>>>26),R=D+(x^(T|~b))+E[7]+1126891415&4294967295,D=T+(R<<10&4294967295|R>>>22),R=b+(T^(D|~x))+E[14]+2878612391&4294967295,b=D+(R<<15&4294967295|R>>>17),R=x+(D^(b|~T))+E[5]+4237533241&4294967295,x=b+(R<<21&4294967295|R>>>11),R=T+(b^(x|~D))+E[12]+1700485571&4294967295,T=x+(R<<6&4294967295|R>>>26),R=D+(x^(T|~b))+E[3]+2399980690&4294967295,D=T+(R<<10&4294967295|R>>>22),R=b+(T^(D|~x))+E[10]+4293915773&4294967295,b=D+(R<<15&4294967295|R>>>17),R=x+(D^(b|~T))+E[1]+2240044497&4294967295,x=b+(R<<21&4294967295|R>>>11),R=T+(b^(x|~D))+E[8]+1873313359&4294967295,T=x+(R<<6&4294967295|R>>>26),R=D+(x^(T|~b))+E[15]+4264355552&4294967295,D=T+(R<<10&4294967295|R>>>22),R=b+(T^(D|~x))+E[6]+2734768916&4294967295,b=D+(R<<15&4294967295|R>>>17),R=x+(D^(b|~T))+E[13]+1309151649&4294967295,x=b+(R<<21&4294967295|R>>>11),R=T+(b^(x|~D))+E[4]+4149444226&4294967295,T=x+(R<<6&4294967295|R>>>26),R=D+(x^(T|~b))+E[11]+3174756917&4294967295,D=T+(R<<10&4294967295|R>>>22),R=b+(T^(D|~x))+E[2]+718787259&4294967295,b=D+(R<<15&4294967295|R>>>17),R=x+(D^(b|~T))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+T&4294967295,S.g[1]=S.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+b&4294967295,S.g[3]=S.g[3]+D&4294967295}n.prototype.u=function(S,T){T===void 0&&(T=S.length);for(var x=T-this.blockSize,E=this.B,b=this.h,D=0;D<T;){if(b==0)for(;D<=x;)r(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<T;)if(E[b++]=S.charCodeAt(D++),b==this.blockSize){r(this,E),b=0;break}}else for(;D<T;)if(E[b++]=S[D++],b==this.blockSize){r(this,E),b=0;break}}this.h=b,this.o+=T},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var T=1;T<S.length-8;++T)S[T]=0;var x=8*this.o;for(T=S.length-8;T<S.length;++T)S[T]=x&255,x/=256;for(this.u(S),S=Array(16),T=x=0;4>T;++T)for(var E=0;32>E;E+=8)S[x++]=this.g[T]>>>E&255;return S};function s(S,T){var x=a;return Object.prototype.hasOwnProperty.call(x,S)?x[S]:x[S]=T(S)}function o(S,T){this.h=T;for(var x=[],E=!0,b=S.length-1;0<=b;b--){var D=S[b]|0;E&&D==T||(x[b]=D,E=!1)}this.g=x}var a={};function l(S){return-128<=S&&128>S?s(S,function(T){return new o([T|0],0>T?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return m(c(-S));for(var T=[],x=1,E=0;S>=x;E++)T[E]=S/x|0,x*=4294967296;return new o(T,0)}function h(S,T){if(S.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S.charAt(0)=="-")return m(h(S.substring(1),T));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(T,8)),E=d,b=0;b<S.length;b+=8){var D=Math.min(8,S.length-b),R=parseInt(S.substring(b,b+D),T);8>D?(D=c(Math.pow(T,D)),E=E.j(D).add(c(R))):(E=E.j(x),E=E.add(c(R)))}return E}var d=l(0),f=l(1),p=l(16777216);i=o.prototype,i.m=function(){if(v(this))return-m(this).m();for(var S=0,T=1,x=0;x<this.g.length;x++){var E=this.i(x);S+=(0<=E?E:4294967296+E)*T,T*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(v(this))return"-"+m(this).toString(S);for(var T=c(Math.pow(S,6)),x=this,E="";;){var b=C(x,T).g;x=g(x,b.j(T));var D=((0<x.g.length?x.g[0]:x.h)>>>0).toString(S);if(x=b,y(x))return D+E;for(;6>D.length;)D="0"+D;E=D+E}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var T=0;T<S.g.length;T++)if(S.g[T]!=0)return!1;return!0}function v(S){return S.h==-1}i.l=function(S){return S=g(this,S),v(S)?-1:y(S)?0:1};function m(S){for(var T=S.g.length,x=[],E=0;E<T;E++)x[E]=~S.g[E];return new o(x,~S.h).add(f)}i.abs=function(){return v(this)?m(this):this},i.add=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0,b=0;b<=T;b++){var D=E+(this.i(b)&65535)+(S.i(b)&65535),R=(D>>>16)+(this.i(b)>>>16)+(S.i(b)>>>16);E=R>>>16,D&=65535,R&=65535,x[b]=R<<16|D}return new o(x,x[x.length-1]&-2147483648?-1:0)};function g(S,T){return S.add(m(T))}i.j=function(S){if(y(this)||y(S))return d;if(v(this))return v(S)?m(this).j(m(S)):m(m(this).j(S));if(v(S))return m(this.j(m(S)));if(0>this.l(p)&&0>S.l(p))return c(this.m()*S.m());for(var T=this.g.length+S.g.length,x=[],E=0;E<2*T;E++)x[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<S.g.length;b++){var D=this.i(E)>>>16,R=this.i(E)&65535,W=S.i(b)>>>16,K=S.i(b)&65535;x[2*E+2*b]+=R*K,w(x,2*E+2*b),x[2*E+2*b+1]+=D*K,w(x,2*E+2*b+1),x[2*E+2*b+1]+=R*W,w(x,2*E+2*b+1),x[2*E+2*b+2]+=D*W,w(x,2*E+2*b+2)}for(E=0;E<T;E++)x[E]=x[2*E+1]<<16|x[2*E];for(E=T;E<2*T;E++)x[E]=0;return new o(x,0)};function w(S,T){for(;(S[T]&65535)!=S[T];)S[T+1]+=S[T]>>>16,S[T]&=65535,T++}function A(S,T){this.g=S,this.h=T}function C(S,T){if(y(T))throw Error("division by zero");if(y(S))return new A(d,d);if(v(S))return T=C(m(S),T),new A(m(T.g),m(T.h));if(v(T))return T=C(S,m(T)),new A(m(T.g),T.h);if(30<S.g.length){if(v(S)||v(T))throw Error("slowDivide_ only works with positive integers.");for(var x=f,E=T;0>=E.l(S);)x=F(x),E=F(E);var b=L(x,1),D=L(E,1);for(E=L(E,2),x=L(x,2);!y(E);){var R=D.add(E);0>=R.l(S)&&(b=b.add(x),D=R),E=L(E,1),x=L(x,1)}return T=g(S,b.j(T)),new A(b,T)}for(b=d;0<=S.l(T);){for(x=Math.max(1,Math.floor(S.m()/T.m())),E=Math.ceil(Math.log(x)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),D=c(x),R=D.j(T);v(R)||0<R.l(S);)x-=E,D=c(x),R=D.j(T);y(D)&&(D=f),b=b.add(D),S=g(S,R)}return new A(b,S)}i.A=function(S){return C(this,S).h},i.and=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0;E<T;E++)x[E]=this.i(E)&S.i(E);return new o(x,this.h&S.h)},i.or=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0;E<T;E++)x[E]=this.i(E)|S.i(E);return new o(x,this.h|S.h)},i.xor=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0;E<T;E++)x[E]=this.i(E)^S.i(E);return new o(x,this.h^S.h)};function F(S){for(var T=S.g.length+1,x=[],E=0;E<T;E++)x[E]=S.i(E)<<1|S.i(E-1)>>>31;return new o(x,S.h)}function L(S,T){var x=T>>5;T%=32;for(var E=S.g.length-x,b=[],D=0;D<E;D++)b[D]=0<T?S.i(D+x)>>>T|S.i(D+x+1)<<32-T:S.i(D+x);return new o(b,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,p_=o}).apply(typeof Cp<"u"?Cp:typeof self<"u"?self:typeof window<"u"?window:{});var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_,g_,pa,__,Jl,yh,v_,y_,x_;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,_,M){return u==Array.prototype||u==Object.prototype||(u[_]=M.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof vl=="object"&&vl];for(var _=0;_<u.length;++_){var M=u[_];if(M&&M.Math==Math)return M}throw Error("Cannot find global object")}var n=e(this);function r(u,_){if(_)t:{var M=n;u=u.split(".");for(var O=0;O<u.length-1;O++){var H=u[O];if(!(H in M))break t;M=M[H]}u=u[u.length-1],O=M[u],_=_(O),_!=O&&_!=null&&t(M,u,{configurable:!0,writable:!0,value:_})}}function s(u,_){u instanceof String&&(u+="");var M=0,O=!1,H={next:function(){if(!O&&M<u.length){var Q=M++;return{value:_(Q,u[Q]),done:!1}}return O=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}r("Array.prototype.values",function(u){return u||function(){return s(this,function(_,M){return M})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var _=typeof u;return _=_!="object"?_:u?Array.isArray(u)?"array":_:"null",_=="array"||_=="object"&&typeof u.length=="number"}function c(u){var _=typeof u;return _=="object"&&u!=null||_=="function"}function h(u,_,M){return u.call.apply(u.bind,arguments)}function d(u,_,M){if(!u)throw Error();if(2<arguments.length){var O=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,O),u.apply(_,H)}}return function(){return u.apply(_,arguments)}}function f(u,_,M){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,f.apply(null,arguments)}function p(u,_){var M=Array.prototype.slice.call(arguments,1);return function(){var O=M.slice();return O.push.apply(O,arguments),u.apply(this,O)}}function y(u,_){function M(){}M.prototype=_.prototype,u.aa=_.prototype,u.prototype=new M,u.prototype.constructor=u,u.Qb=function(O,H,Q){for(var vt=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)vt[fe-2]=arguments[fe];return _.prototype[H].apply(O,vt)}}function v(u){const _=u.length;if(0<_){const M=Array(_);for(let O=0;O<_;O++)M[O]=u[O];return M}return[]}function m(u,_){for(let M=1;M<arguments.length;M++){const O=arguments[M];if(l(O)){const H=u.length||0,Q=O.length||0;u.length=H+Q;for(let vt=0;vt<Q;vt++)u[H+vt]=O[vt]}else u.push(O)}}class g{constructor(_,M){this.i=_,this.j=M,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function w(u){return/^[\s\xa0]*$/.test(u)}function A(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function C(u){return C[" "](u),u}C[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function L(u,_,M){for(const O in u)_.call(M,u[O],O,u)}function S(u,_){for(const M in u)_.call(void 0,u[M],M,u)}function T(u){const _={};for(const M in u)_[M]=u[M];return _}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(u,_){let M,O;for(let H=1;H<arguments.length;H++){O=arguments[H];for(M in O)u[M]=O[M];for(let Q=0;Q<x.length;Q++)M=x[Q],Object.prototype.hasOwnProperty.call(O,M)&&(u[M]=O[M])}}function b(u){var _=1;u=u.split(":");const M=[];for(;0<_&&u.length;)M.push(u.shift()),_--;return u.length&&M.push(u.join(":")),M}function D(u){a.setTimeout(()=>{throw u},0)}function R(){var u=gt;let _=null;return u.g&&(_=u.g,u.g=u.g.next,u.g||(u.h=null),_.next=null),_}class W{constructor(){this.h=this.g=null}add(_,M){const O=K.get();O.set(_,M),this.h?this.h.next=O:this.g=O,this.h=O}}var K=new g(()=>new G,u=>u.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,M){this.h=_,this.g=M,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,J=!1,gt=new W,St=()=>{const u=a.Promise.resolve(void 0);tt=()=>{u.then(xt)}};var xt=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(M){D(M)}var _=K;_.j(u),100>_.h&&(_.h++,u.next=_.g,_.g=u)}J=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Vt(u,_){this.type=u,this.g=this.target=_,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var et=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,_=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const M=()=>{};a.addEventListener("test",M,_),a.removeEventListener("test",M,_)}catch{}return u}();function ot(u,_){if(Vt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var M=this.type=u.type,O=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=_,_=u.relatedTarget){if(F){t:{try{C(_.nodeName);var H=!0;break t}catch{}H=!1}H||(_=null)}}else M=="mouseover"?_=u.fromElement:M=="mouseout"&&(_=u.toElement);this.relatedTarget=_,O?(this.clientX=O.clientX!==void 0?O.clientX:O.pageX,this.clientY=O.clientY!==void 0?O.clientY:O.pageY,this.screenX=O.screenX||0,this.screenY=O.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ct[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ot.aa.h.call(this)}}y(ot,Vt);var Ct={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function Kt(u,_,M,O,H){this.listener=u,this.proxy=null,this.src=_,this.type=M,this.capture=!!O,this.ha=H,this.key=++Ht,this.da=this.fa=!1}function Bt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Zt(u){this.src=u,this.g={},this.h=0}Zt.prototype.add=function(u,_,M,O,H){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var vt=ft(u,_,O,H);return-1<vt?(_=u[vt],M||(_.fa=!1)):(_=new Kt(_,this.src,Q,!!O,H),_.fa=M,u.push(_)),_};function U(u,_){var M=_.type;if(M in u.g){var O=u.g[M],H=Array.prototype.indexOf.call(O,_,void 0),Q;(Q=0<=H)&&Array.prototype.splice.call(O,H,1),Q&&(Bt(_),u.g[M].length==0&&(delete u.g[M],u.h--))}}function ft(u,_,M,O){for(var H=0;H<u.length;++H){var Q=u[H];if(!Q.da&&Q.listener==_&&Q.capture==!!M&&Q.ha==O)return H}return-1}var at="closure_lm_"+(1e6*Math.random()|0),yt={};function nt(u,_,M,O,H){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)nt(u,_[Q],M,O,H);return null}return M=rt(M),u&&u[_t]?u.K(_,M,c(O)?!!O.capture:!!O,H):Ft(u,_,M,!1,O,H)}function Ft(u,_,M,O,H,Q){if(!_)throw Error("Invalid event type");var vt=c(H)?!!H.capture:!!H,fe=st(u);if(fe||(u[at]=fe=new Zt(u)),M=fe.add(_,M,O,vt,Q),M.proxy)return M;if(O=Et(),M.proxy=O,O.src=u,O.listener=M,u.addEventListener)et||(H=vt),H===void 0&&(H=!1),u.addEventListener(_.toString(),O,H);else if(u.attachEvent)u.attachEvent(I(_.toString()),O);else if(u.addListener&&u.removeListener)u.addListener(O);else throw Error("addEventListener and attachEvent are unavailable.");return M}function Et(){function u(M){return _.call(u.src,u.listener,M)}const _=q;return u}function Rt(u,_,M,O,H){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Rt(u,_[Q],M,O,H);else O=c(O)?!!O.capture:!!O,M=rt(M),u&&u[_t]?(u=u.i,_=String(_).toString(),_ in u.g&&(Q=u.g[_],M=ft(Q,M,O,H),-1<M&&(Bt(Q[M]),Array.prototype.splice.call(Q,M,1),Q.length==0&&(delete u.g[_],u.h--)))):u&&(u=st(u))&&(_=u.g[_.toString()],u=-1,_&&(u=ft(_,M,O,H)),(M=-1<u?_[u]:null)&&k(M))}function k(u){if(typeof u!="number"&&u&&!u.da){var _=u.src;if(_&&_[_t])U(_.i,u);else{var M=u.type,O=u.proxy;_.removeEventListener?_.removeEventListener(M,O,u.capture):_.detachEvent?_.detachEvent(I(M),O):_.addListener&&_.removeListener&&_.removeListener(O),(M=st(_))?(U(M,u),M.h==0&&(M.src=null,_[at]=null)):Bt(u)}}}function I(u){return u in yt?yt[u]:yt[u]="on"+u}function q(u,_){if(u.da)u=!0;else{_=new ot(_,this);var M=u.listener,O=u.ha||u.src;u.fa&&k(u),u=M.call(O,_)}return u}function st(u){return u=u[at],u instanceof Zt?u:null}var it="__closure_events_fn_"+(1e9*Math.random()>>>0);function rt(u){return typeof u=="function"?u:(u[it]||(u[it]=function(_){return u.handleEvent(_)}),u[it])}function At(){Nt.call(this),this.i=new Zt(this),this.M=this,this.F=null}y(At,Nt),At.prototype[_t]=!0,At.prototype.removeEventListener=function(u,_,M,O){Rt(this,u,_,M,O)};function ut(u,_){var M,O=u.F;if(O)for(M=[];O;O=O.F)M.push(O);if(u=u.M,O=_.type||_,typeof _=="string")_=new Vt(_,u);else if(_ instanceof Vt)_.target=_.target||u;else{var H=_;_=new Vt(O,u),E(_,H)}if(H=!0,M)for(var Q=M.length-1;0<=Q;Q--){var vt=_.g=M[Q];H=Tt(vt,O,!0,_)&&H}if(vt=_.g=u,H=Tt(vt,O,!0,_)&&H,H=Tt(vt,O,!1,_)&&H,M)for(Q=0;Q<M.length;Q++)vt=_.g=M[Q],H=Tt(vt,O,!1,_)&&H}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var u=this.i,_;for(_ in u.g){for(var M=u.g[_],O=0;O<M.length;O++)Bt(M[O]);delete u.g[_],u.h--}}this.F=null},At.prototype.K=function(u,_,M,O){return this.i.add(String(u),_,!1,M,O)},At.prototype.L=function(u,_,M,O){return this.i.add(String(u),_,!0,M,O)};function Tt(u,_,M,O){if(_=u.i.g[String(_)],!_)return!0;_=_.concat();for(var H=!0,Q=0;Q<_.length;++Q){var vt=_[Q];if(vt&&!vt.da&&vt.capture==M){var fe=vt.listener,un=vt.ha||vt.src;vt.fa&&U(u.i,vt),H=fe.call(un,O)!==!1&&H}}return H&&!O.defaultPrevented}function qt(u,_,M){if(typeof u=="function")M&&(u=f(u,M));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:a.setTimeout(u,_||0)}function dt(u){u.g=qt(()=>{u.g=null,u.i&&(u.i=!1,dt(u))},u.l);const _=u.h;u.h=null,u.m.apply(null,_)}class wt extends Nt{constructor(_,M){super(),this.m=_,this.l=M,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(u){Nt.call(this),this.h=u,this.g={}}y(Jt,Nt);var Gt=[];function Pt(u){L(u.g,function(_,M){this.g.hasOwnProperty(M)&&k(_)},u),u.g={}}Jt.prototype.N=function(){Jt.aa.N.call(this),Pt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wt=a.JSON.stringify,Yt=a.JSON.parse,ge=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function P(){}P.prototype.h=null;function X(u){return u.h||(u.h=u.i())}function $(){}var Z={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lt(){Vt.call(this,"d")}y(lt,Vt);function Lt(){Vt.call(this,"c")}y(Lt,Vt);var zt={},Me=null;function Ae(){return Me=Me||new At}zt.La="serverreachability";function re(u){Vt.call(this,zt.La,u)}y(re,Vt);function Ee(u){const _=Ae();ut(_,new re(_))}zt.STAT_EVENT="statevent";function Ce(u,_){Vt.call(this,zt.STAT_EVENT,u),this.stat=_}y(Ce,Vt);function we(u){const _=Ae();ut(_,new Ce(_,u))}zt.Ma="timingevent";function Ge(u,_){Vt.call(this,zt.Ma,u),this.size=_}y(Ge,Vt);function Cn(u,_){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},_)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function zr(u,_,M,O,H,Q){u.info(function(){if(u.g)if(Q)for(var vt="",fe=Q.split("&"),un=0;un<fe.length;un++){var he=fe[un].split("=");if(1<he.length){var gn=he[0];he=he[1];var _n=gn.split("_");vt=2<=_n.length&&_n[1]=="type"?vt+(gn+"="+he+"&"):vt+(gn+"=redacted&")}}else vt=null;else vt=Q;return"XMLHTTP REQ ("+O+") [attempt "+H+"]: "+_+`
`+M+`
`+vt})}function ks(u,_,M,O,H,Q,vt){u.info(function(){return"XMLHTTP RESP ("+O+") [ attempt "+H+"]: "+_+`
`+M+`
`+Q+" "+vt})}function Vi(u,_,M,O){u.info(function(){return"XMLHTTP TEXT ("+_+"): "+ll(u,M)+(O?" "+O:"")})}function Vs(u,_){u.info(function(){return"TIMEOUT: "+_})}Wn.prototype.info=function(){};function ll(u,_){if(!u.g)return _;if(!_)return null;try{var M=JSON.parse(_);if(M){for(u=0;u<M.length;u++)if(Array.isArray(M[u])){var O=M[u];if(!(2>O.length)){var H=O[1];if(Array.isArray(H)&&!(1>H.length)){var Q=H[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var vt=1;vt<H.length;vt++)H[vt]=""}}}}return Wt(M)}catch{return _}}var Hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yo;function Bs(){}y(Bs,P),Bs.prototype.g=function(){return new XMLHttpRequest},Bs.prototype.i=function(){return{}},Yo=new Bs;function N(u,_,M,O){this.j=u,this.i=_,this.l=M,this.R=O||1,this.U=new Jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new B}function B(){this.i=null,this.g="",this.h=!1}var j={},Y={};function z(u,_,M){u.L=1,u.v=ul(Xn(_)),u.m=M,u.P=!0,mt(u,null)}function mt(u,_){u.F=Date.now(),It(u),u.A=Xn(u.v);var M=u.A,O=u.R;Array.isArray(O)||(O=[String(O)]),Hf(M.i,"t",O),u.C=0,M=u.j.J,u.h=new B,u.g=op(u.j,M?_:null,!u.m),0<u.O&&(u.M=new wt(f(u.Y,u,u.g),u.O)),_=u.U,M=u.g,O=u.ca;var H="readystatechange";Array.isArray(H)||(H&&(Gt[0]=H.toString()),H=Gt);for(var Q=0;Q<H.length;Q++){var vt=nt(M,H[Q],O||_.handleEvent,!1,_.h||_);if(!vt)break;_.g[vt.key]=vt}_=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,_)):(u.u="GET",u.g.ea(u.A,u.u,null,_)),Ee(),zr(u.i,u.u,u.A,u.l,u.R,u.m)}N.prototype.ca=function(u){u=u.target;const _=this.M;_&&zi(u)==3?_.j():this.Y(u)},N.prototype.Y=function(u){try{if(u==this.g)t:{const _n=zi(this.g);var _=this.g.Ba();const Ws=this.g.Z();if(!(3>_n)&&(_n!=3||this.g&&(this.h.h||this.g.oa()||Yf(this.g)))){this.J||_n!=4||_==7||(_==8||0>=Ws?Ee(3):Ee(2)),$t(this);var M=this.g.Z();this.X=M;e:if(bt(this)){var O=Yf(this.g);u="";var H=O.length,Q=zi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Ut(this);var vt="";break e}this.h.i=new a.TextDecoder}for(_=0;_<H;_++)this.h.h=!0,u+=this.h.i.decode(O[_],{stream:!(Q&&_==H-1)});O.length=0,this.h.g+=u,this.C=0,vt=this.h.g}else vt=this.g.oa();if(this.o=M==200,ks(this.i,this.u,this.A,this.l,this.R,_n,M),this.o){if(this.T&&!this.K){e:{if(this.g){var fe,un=this.g;if((fe=un.g?un.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(fe)){var he=fe;break e}}he=null}if(M=he)Vi(this.i,this.l,M,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_e(this,M);else{this.o=!1,this.s=3,we(12),ie(this),Ut(this);break t}}if(this.P){M=!0;let ui;for(;!this.J&&this.C<vt.length;)if(ui=Dt(this,vt),ui==Y){_n==4&&(this.s=4,we(14),M=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(ui==j){this.s=4,we(15),Vi(this.i,this.l,vt,"[Invalid Chunk]"),M=!1;break}else Vi(this.i,this.l,ui,null),_e(this,ui);if(bt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_n!=4||vt.length!=0||this.h.h||(this.s=1,we(16),M=!1),this.o=this.o&&M,!M)Vi(this.i,this.l,vt,"[Invalid Chunked Response]"),ie(this),Ut(this);else if(0<vt.length&&!this.W){this.W=!0;var gn=this.j;gn.g==this&&gn.ba&&!gn.M&&(gn.j.info("Great, no buffering proxy detected. Bytes received: "+vt.length),hu(gn),gn.M=!0,we(11))}}else Vi(this.i,this.l,vt,null),_e(this,vt);_n==4&&ie(this),this.o&&!this.J&&(_n==4?np(this.j,this):(this.o=!1,It(this)))}else Ny(this.g),M==400&&0<vt.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),ie(this),Ut(this)}}}catch{}finally{}};function bt(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Dt(u,_){var M=u.C,O=_.indexOf(`
`,M);return O==-1?Y:(M=Number(_.substring(M,O)),isNaN(M)?j:(O+=1,O+M>_.length?Y:(_=_.slice(O,O+M),u.C=O+M,_)))}N.prototype.cancel=function(){this.J=!0,ie(this)};function It(u){u.S=Date.now()+u.I,Xt(u,u.I)}function Xt(u,_){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(f(u.ba,u),_)}function $t(u){u.B&&(a.clearTimeout(u.B),u.B=null)}N.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Vs(this.i,this.A),this.L!=2&&(Ee(),we(17)),ie(this),this.s=2,Ut(this)):Xt(this,this.S-u)};function Ut(u){u.j.G==0||u.J||np(u.j,u)}function ie(u){$t(u);var _=u.M;_&&typeof _.ma=="function"&&_.ma(),u.M=null,Pt(u.U),u.g&&(_=u.g,u.g=null,_.abort(),_.ma())}function _e(u,_){try{var M=u.j;if(M.G!=0&&(M.g==u||ze(M.h,u))){if(!u.K&&ze(M.h,u)&&M.G==3){try{var O=M.Da.g.parse(_)}catch{O=null}if(Array.isArray(O)&&O.length==3){var H=O;if(H[0]==0){t:if(!M.u){if(M.g)if(M.g.F+3e3<u.F)ml(M),fl(M);else break t;uu(M),we(18)}}else M.za=H[1],0<M.za-M.T&&37500>H[2]&&M.F&&M.v==0&&!M.C&&(M.C=Cn(f(M.Za,M),6e3));if(1>=Ot(M.h)&&M.ca){try{M.ca()}catch{}M.ca=void 0}}else Wr(M,11)}else if((u.K||M.g==u)&&ml(M),!w(_))for(H=M.Da.g.parse(_),_=0;_<H.length;_++){let he=H[_];if(M.T=he[0],he=he[1],M.G==2)if(he[0]=="c"){M.K=he[1],M.ia=he[2];const gn=he[3];gn!=null&&(M.la=gn,M.j.info("VER="+M.la));const _n=he[4];_n!=null&&(M.Aa=_n,M.j.info("SVER="+M.Aa));const Ws=he[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(O=1.5*Ws,M.L=O,M.j.info("backChannelRequestTimeoutMs_="+O)),O=M;const ui=u.g;if(ui){const _l=ui.g?ui.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_l){var Q=O.h;Q.g||_l.indexOf("spdy")==-1&&_l.indexOf("quic")==-1&&_l.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ae(Q,Q.h),Q.h=null))}if(O.D){const du=ui.g?ui.g.getResponseHeader("X-HTTP-Session-Id"):null;du&&(O.ya=du,Se(O.I,O.D,du))}}M.G=3,M.l&&M.l.ua(),M.ba&&(M.R=Date.now()-u.F,M.j.info("Handshake RTT: "+M.R+"ms")),O=M;var vt=u;if(O.qa=sp(O,O.J?O.ia:null,O.W),vt.K){On(O.h,vt);var fe=vt,un=O.L;un&&(fe.I=un),fe.B&&($t(fe),It(fe)),O.g=vt}else tp(O);0<M.i.length&&pl(M)}else he[0]!="stop"&&he[0]!="close"||Wr(M,7);else M.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Wr(M,7):cu(M):he[0]!="noop"&&M.l&&M.l.ta(he),M.v=0)}}Ee(4)}catch{}}var be=class{constructor(u,_){this.g=u,this.map=_}};function mn(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ce(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ot(u){return u.h?1:u.g?u.g.size:0}function ze(u,_){return u.h?u.h==_:u.g?u.g.has(_):!1}function ae(u,_){u.g?u.g.add(_):u.h=_}function On(u,_){u.h&&u.h==_?u.h=null:u.g&&u.g.has(_)&&u.g.delete(_)}mn.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Bi(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let _=u.i;for(const M of u.g.values())_=_.concat(M.D);return _}return v(u.i)}function Pn(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var _=[],M=u.length,O=0;O<M;O++)_.push(u[O]);return _}_=[],M=0;for(O in u)_[M++]=u[O];return _}function Ko(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var _=[];u=u.length;for(var M=0;M<u;M++)_.push(M);return _}_=[],M=0;for(const O in u)_[M++]=O;return _}}}function Pe(u,_){if(u.forEach&&typeof u.forEach=="function")u.forEach(_,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,_,void 0);else for(var M=Ko(u),O=Pn(u),H=O.length,Q=0;Q<H;Q++)_.call(void 0,O[Q],M&&M[Q],u)}var ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jo(u,_){if(u){u=u.split("&");for(var M=0;M<u.length;M++){var O=u[M].indexOf("="),H=null;if(0<=O){var Q=u[M].substring(0,O);H=u[M].substring(O+1)}else Q=u[M];_(Q,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function We(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof We){this.h=u.h,zs(this,u.j),this.o=u.o,this.g=u.g,Gr(this,u.s),this.l=u.l;var _=u.i,M=new ta;M.i=_.i,_.g&&(M.g=new Map(_.g),M.h=_.h),kf(this,M),this.m=u.m}else u&&(_=String(u).match(ci))?(this.h=!1,zs(this,_[1]||"",!0),this.o=Zo(_[2]||""),this.g=Zo(_[3]||"",!0),Gr(this,_[4]),this.l=Zo(_[5]||"",!0),kf(this,_[6]||"",!0),this.m=Zo(_[7]||"")):(this.h=!1,this.i=new ta(null,this.h))}We.prototype.toString=function(){var u=[],_=this.j;_&&u.push(Qo(_,Vf,!0),":");var M=this.g;return(M||_=="file")&&(u.push("//"),(_=this.o)&&u.push(Qo(_,Vf,!0),"@"),u.push(encodeURIComponent(String(M)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),M=this.s,M!=null&&u.push(":",String(M))),(M=this.l)&&(this.g&&M.charAt(0)!="/"&&u.push("/"),u.push(Qo(M,M.charAt(0)=="/"?My:Ty,!0))),(M=this.i.toString())&&u.push("?",M),(M=this.m)&&u.push("#",Qo(M,wy)),u.join("")};function Xn(u){return new We(u)}function zs(u,_,M){u.j=M?Zo(_,!0):_,u.j&&(u.j=u.j.replace(/:$/,""))}function Gr(u,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);u.s=_}else u.s=null}function kf(u,_,M){_ instanceof ta?(u.i=_,by(u.i,u.h)):(M||(_=Qo(_,Ay)),u.i=new ta(_,u.h))}function Se(u,_,M){u.i.set(_,M)}function ul(u){return Se(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Zo(u,_){return u?_?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qo(u,_,M){return typeof u=="string"?(u=encodeURI(u).replace(_,Sy),M&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sy(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Vf=/[#\/\?@]/g,Ty=/[#\?:]/g,My=/[#\?]/g,Ay=/[#\?@]/g,wy=/#/g;function ta(u,_){this.h=this.g=null,this.i=u||null,this.j=!!_}function or(u){u.g||(u.g=new Map,u.h=0,u.i&&Jo(u.i,function(_,M){u.add(decodeURIComponent(_.replace(/\+/g," ")),M)}))}i=ta.prototype,i.add=function(u,_){or(this),this.i=null,u=Hs(this,u);var M=this.g.get(u);return M||this.g.set(u,M=[]),M.push(_),this.h+=1,this};function Bf(u,_){or(u),_=Hs(u,_),u.g.has(_)&&(u.i=null,u.h-=u.g.get(_).length,u.g.delete(_))}function zf(u,_){return or(u),_=Hs(u,_),u.g.has(_)}i.forEach=function(u,_){or(this),this.g.forEach(function(M,O){M.forEach(function(H){u.call(_,H,O,this)},this)},this)},i.na=function(){or(this);const u=Array.from(this.g.values()),_=Array.from(this.g.keys()),M=[];for(let O=0;O<_.length;O++){const H=u[O];for(let Q=0;Q<H.length;Q++)M.push(_[O])}return M},i.V=function(u){or(this);let _=[];if(typeof u=="string")zf(this,u)&&(_=_.concat(this.g.get(Hs(this,u))));else{u=Array.from(this.g.values());for(let M=0;M<u.length;M++)_=_.concat(u[M])}return _},i.set=function(u,_){return or(this),this.i=null,u=Hs(this,u),zf(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[_]),this.h+=1,this},i.get=function(u,_){return u?(u=this.V(u),0<u.length?String(u[0]):_):_};function Hf(u,_,M){Bf(u,_),0<M.length&&(u.i=null,u.g.set(Hs(u,_),v(M)),u.h+=M.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],_=Array.from(this.g.keys());for(var M=0;M<_.length;M++){var O=_[M];const Q=encodeURIComponent(String(O)),vt=this.V(O);for(O=0;O<vt.length;O++){var H=Q;vt[O]!==""&&(H+="="+encodeURIComponent(String(vt[O]))),u.push(H)}}return this.i=u.join("&")};function Hs(u,_){return _=String(_),u.j&&(_=_.toLowerCase()),_}function by(u,_){_&&!u.j&&(or(u),u.i=null,u.g.forEach(function(M,O){var H=O.toLowerCase();O!=H&&(Bf(this,O),Hf(this,H,M))},u)),u.j=_}function Ry(u,_){const M=new Wn;if(a.Image){const O=new Image;O.onload=p(ar,M,"TestLoadImage: loaded",!0,_,O),O.onerror=p(ar,M,"TestLoadImage: error",!1,_,O),O.onabort=p(ar,M,"TestLoadImage: abort",!1,_,O),O.ontimeout=p(ar,M,"TestLoadImage: timeout",!1,_,O),a.setTimeout(function(){O.ontimeout&&O.ontimeout()},1e4),O.src=u}else _(!1)}function Cy(u,_){const M=new Wn,O=new AbortController,H=setTimeout(()=>{O.abort(),ar(M,"TestPingServer: timeout",!1,_)},1e4);fetch(u,{signal:O.signal}).then(Q=>{clearTimeout(H),Q.ok?ar(M,"TestPingServer: ok",!0,_):ar(M,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(H),ar(M,"TestPingServer: error",!1,_)})}function ar(u,_,M,O,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),O(M)}catch{}}function Py(){this.g=new ge}function Iy(u,_,M){const O=M||"";try{Pe(u,function(H,Q){let vt=H;c(H)&&(vt=Wt(H)),_.push(O+Q+"="+encodeURIComponent(vt))})}catch(H){throw _.push(O+"type="+encodeURIComponent("_badmap")),H}}function ea(u){this.l=u.Ub||null,this.j=u.eb||!1}y(ea,P),ea.prototype.g=function(){return new hl(this.l,this.j)},ea.prototype.i=function(u){return function(){return u}}({});function hl(u,_){At.call(this),this.D=u,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(hl,At),i=hl.prototype,i.open=function(u,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=_,this.readyState=1,ia(this)},i.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(_.body=u),(this.D||a).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=0},i.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ia(this)),this.g&&(this.readyState=3,ia(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gf(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gf(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}i.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var _=u.value?u.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!u.done}))&&(this.response=this.responseText+=_)}u.done?na(this):ia(this),this.readyState==3&&Gf(this)}},i.Ra=function(u){this.g&&(this.response=this.responseText=u,na(this))},i.Qa=function(u){this.g&&(this.response=u,na(this))},i.ga=function(){this.g&&na(this)};function na(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ia(u)}i.setRequestHeader=function(u,_){this.u.append(u,_)},i.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],_=this.h.entries();for(var M=_.next();!M.done;)M=M.value,u.push(M[0]+": "+M[1]),M=_.next();return u.join(`\r
`)};function ia(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Wf(u){let _="";return L(u,function(M,O){_+=O,_+=":",_+=M,_+=`\r
`}),_}function lu(u,_,M){t:{for(O in M){var O=!1;break t}O=!0}O||(M=Wf(M),typeof u=="string"?M!=null&&encodeURIComponent(String(M)):Se(u,_,M))}function Ue(u){At.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Ue,At);var Dy=/^https?$/i,Ly=["POST","PUT"];i=Ue.prototype,i.Ha=function(u){this.J=u},i.ea=function(u,_,M,O){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);_=_?_.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yo.g(),this.v=this.o?X(this.o):X(Yo),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(_,String(u),!0),this.B=!1}catch(Q){Xf(this,Q);return}if(u=M||"",M=new Map(this.headers),O)if(Object.getPrototypeOf(O)===Object.prototype)for(var H in O)M.set(H,O[H]);else if(typeof O.keys=="function"&&typeof O.get=="function")for(const Q of O.keys())M.set(Q,O.get(Q));else throw Error("Unknown input type for opt_headers: "+String(O));O=Array.from(M.keys()).find(Q=>Q.toLowerCase()=="content-type"),H=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ly,_,void 0))||O||H||M.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,vt]of M)this.g.setRequestHeader(Q,vt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jf(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){Xf(this,Q)}};function Xf(u,_){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=_,u.m=5,$f(u),dl(u)}function $f(u){u.A||(u.A=!0,ut(u,"complete"),ut(u,"error"))}i.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ut(this,"complete"),ut(this,"abort"),dl(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dl(this,!0)),Ue.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?qf(this):this.bb())},i.bb=function(){qf(this)};function qf(u){if(u.h&&typeof o<"u"&&(!u.v[1]||zi(u)!=4||u.Z()!=2)){if(u.u&&zi(u)==4)qt(u.Ea,0,u);else if(ut(u,"readystatechange"),zi(u)==4){u.h=!1;try{const vt=u.Z();t:switch(vt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break t;default:_=!1}var M;if(!(M=_)){var O;if(O=vt===0){var H=String(u.D).match(ci)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),O=!Dy.test(H?H.toLowerCase():"")}M=O}if(M)ut(u,"complete"),ut(u,"success");else{u.m=6;try{var Q=2<zi(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",$f(u)}}finally{dl(u)}}}}function dl(u,_){if(u.g){jf(u);const M=u.g,O=u.v[0]?()=>{}:null;u.g=null,u.v=null,_||ut(u,"ready");try{M.onreadystatechange=O}catch{}}}function jf(u){u.I&&(a.clearTimeout(u.I),u.I=null)}i.isActive=function(){return!!this.g};function zi(u){return u.g?u.g.readyState:0}i.Z=function(){try{return 2<zi(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(u){if(this.g){var _=this.g.responseText;return u&&_.indexOf(u)==0&&(_=_.substring(u.length)),Yt(_)}};function Yf(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ny(u){const _={};u=(u.g&&2<=zi(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let O=0;O<u.length;O++){if(w(u[O]))continue;var M=b(u[O]);const H=M[0];if(M=M[1],typeof M!="string")continue;M=M.trim();const Q=_[H]||[];_[H]=Q,Q.push(M)}S(_,function(O){return O.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ra(u,_,M){return M&&M.internalChannelParams&&M.internalChannelParams[u]||_}function Kf(u){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ra("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ra("baseRetryDelayMs",5e3,u),this.cb=ra("retryDelaySeedMs",1e4,u),this.Wa=ra("forwardChannelMaxRetries",2,u),this.wa=ra("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new mn(u&&u.concurrentRequestLimit),this.Da=new Py,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Kf.prototype,i.la=8,i.G=1,i.connect=function(u,_,M,O){we(0),this.W=u,this.H=_||{},M&&O!==void 0&&(this.H.OSID=M,this.H.OAID=O),this.F=this.X,this.I=sp(this,null,this.W),pl(this)};function cu(u){if(Jf(u),u.G==3){var _=u.U++,M=Xn(u.I);if(Se(M,"SID",u.K),Se(M,"RID",_),Se(M,"TYPE","terminate"),sa(u,M),_=new N(u,u.j,_),_.L=2,_.v=ul(Xn(M)),M=!1,a.navigator&&a.navigator.sendBeacon)try{M=a.navigator.sendBeacon(_.v.toString(),"")}catch{}!M&&a.Image&&(new Image().src=_.v,M=!0),M||(_.g=op(_.j,null),_.g.ea(_.v)),_.F=Date.now(),It(_)}rp(u)}function fl(u){u.g&&(hu(u),u.g.cancel(),u.g=null)}function Jf(u){fl(u),u.u&&(a.clearTimeout(u.u),u.u=null),ml(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function pl(u){if(!ce(u.h)&&!u.s){u.s=!0;var _=u.Ga;tt||St(),J||(tt(),J=!0),gt.add(_,u),u.B=0}}function Oy(u,_){return Ot(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=_.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(f(u.Ga,u,_),ip(u,u.B)),u.B++,!0)}i.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const H=new N(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=T(Q),E(Q,this.S)):Q=this.S),this.m!==null||this.O||(H.H=Q,Q=null),this.P)t:{for(var _=0,M=0;M<this.i.length;M++){e:{var O=this.i[M];if("__data__"in O.map&&(O=O.map.__data__,typeof O=="string")){O=O.length;break e}O=void 0}if(O===void 0)break;if(_+=O,4096<_){_=M;break t}if(_===4096||M===this.i.length-1){_=M+1;break t}}_=1e3}else _=1e3;_=Qf(this,H,_),M=Xn(this.I),Se(M,"RID",u),Se(M,"CVER",22),this.D&&Se(M,"X-HTTP-Session-Id",this.D),sa(this,M),Q&&(this.O?_="headers="+encodeURIComponent(String(Wf(Q)))+"&"+_:this.m&&lu(M,this.m,Q)),ae(this.h,H),this.Ua&&Se(M,"TYPE","init"),this.P?(Se(M,"$req",_),Se(M,"SID","null"),H.T=!0,z(H,M,null)):z(H,M,_),this.G=2}}else this.G==3&&(u?Zf(this,u):this.i.length==0||ce(this.h)||Zf(this))};function Zf(u,_){var M;_?M=_.l:M=u.U++;const O=Xn(u.I);Se(O,"SID",u.K),Se(O,"RID",M),Se(O,"AID",u.T),sa(u,O),u.m&&u.o&&lu(O,u.m,u.o),M=new N(u,u.j,M,u.B+1),u.m===null&&(M.H=u.o),_&&(u.i=_.D.concat(u.i)),_=Qf(u,M,1e3),M.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ae(u.h,M),z(M,O,_)}function sa(u,_){u.H&&L(u.H,function(M,O){Se(_,O,M)}),u.l&&Pe({},function(M,O){Se(_,O,M)})}function Qf(u,_,M){M=Math.min(u.i.length,M);var O=u.l?f(u.l.Na,u.l,u):null;t:{var H=u.i;let Q=-1;for(;;){const vt=["count="+M];Q==-1?0<M?(Q=H[0].g,vt.push("ofs="+Q)):Q=0:vt.push("ofs="+Q);let fe=!0;for(let un=0;un<M;un++){let he=H[un].g;const gn=H[un].map;if(he-=Q,0>he)Q=Math.max(0,H[un].g-100),fe=!1;else try{Iy(gn,vt,"req"+he+"_")}catch{O&&O(gn)}}if(fe){O=vt.join("&");break t}}}return u=u.i.splice(0,M),_.D=u,O}function tp(u){if(!u.g&&!u.u){u.Y=1;var _=u.Fa;tt||St(),J||(tt(),J=!0),gt.add(_,u),u.v=0}}function uu(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(f(u.Fa,u),ip(u,u.v)),u.v++,!0)}i.Fa=function(){if(this.u=null,ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(f(this.ab,this),u)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),fl(this),ep(this))};function hu(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function ep(u){u.g=new N(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var _=Xn(u.qa);Se(_,"RID","rpc"),Se(_,"SID",u.K),Se(_,"AID",u.T),Se(_,"CI",u.F?"0":"1"),!u.F&&u.ja&&Se(_,"TO",u.ja),Se(_,"TYPE","xmlhttp"),sa(u,_),u.m&&u.o&&lu(_,u.m,u.o),u.L&&(u.g.I=u.L);var M=u.g;u=u.ia,M.L=1,M.v=ul(Xn(_)),M.m=null,M.P=!0,mt(M,u)}i.Za=function(){this.C!=null&&(this.C=null,fl(this),uu(this),we(19))};function ml(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function np(u,_){var M=null;if(u.g==_){ml(u),hu(u),u.g=null;var O=2}else if(ze(u.h,_))M=_.D,On(u.h,_),O=1;else return;if(u.G!=0){if(_.o)if(O==1){M=_.m?_.m.length:0,_=Date.now()-_.F;var H=u.B;O=Ae(),ut(O,new Ge(O,M)),pl(u)}else tp(u);else if(H=_.s,H==3||H==0&&0<_.X||!(O==1&&Oy(u,_)||O==2&&uu(u)))switch(M&&0<M.length&&(_=u.h,_.i=_.i.concat(M)),H){case 1:Wr(u,5);break;case 4:Wr(u,10);break;case 3:Wr(u,6);break;default:Wr(u,2)}}}function ip(u,_){let M=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(M*=2),M*_}function Wr(u,_){if(u.j.info("Error code "+_),_==2){var M=f(u.fb,u),O=u.Xa;const H=!O;O=new We(O||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||zs(O,"https"),ul(O),H?Ry(O.toString(),M):Cy(O.toString(),M)}else we(2);u.G=0,u.l&&u.l.sa(_),rp(u),Jf(u)}i.fb=function(u){u?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function rp(u){if(u.G=0,u.ka=[],u.l){const _=Bi(u.h);(_.length!=0||u.i.length!=0)&&(m(u.ka,_),m(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function sp(u,_,M){var O=M instanceof We?Xn(M):new We(M);if(O.g!="")_&&(O.g=_+"."+O.g),Gr(O,O.s);else{var H=a.location;O=H.protocol,_=_?_+"."+H.hostname:H.hostname,H=+H.port;var Q=new We(null);O&&zs(Q,O),_&&(Q.g=_),H&&Gr(Q,H),M&&(Q.l=M),O=Q}return M=u.D,_=u.ya,M&&_&&Se(O,M,_),Se(O,"VER",u.la),sa(u,O),O}function op(u,_,M){if(_&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=u.Ca&&!u.pa?new Ue(new ea({eb:M})):new Ue(u.pa),_.Ha(u.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ap(){}i=ap.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function gl(){}gl.prototype.g=function(u,_){return new $n(u,_)};function $n(u,_){At.call(this),this.g=new Kf(_),this.l=u,this.h=_&&_.messageUrlParams||null,u=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(u?u["X-WebChannel-Content-Type"]=_.messageContentType:u={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(u?u["X-WebChannel-Client-Profile"]=_.va:u={"X-WebChannel-Client-Profile":_.va}),this.g.S=u,(u=_&&_.Sb)&&!w(u)&&(this.g.m=u),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!w(_)&&(this.g.D=_,u=this.h,u!==null&&_ in u&&(u=this.h,_ in u&&delete u[_])),this.j=new Gs(this)}y($n,At),$n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$n.prototype.close=function(){cu(this.g)},$n.prototype.o=function(u){var _=this.g;if(typeof u=="string"){var M={};M.__data__=u,u=M}else this.u&&(M={},M.__data__=Wt(u),u=M);_.i.push(new be(_.Ya++,u)),_.G==3&&pl(_)},$n.prototype.N=function(){this.g.l=null,delete this.j,cu(this.g),delete this.g,$n.aa.N.call(this)};function lp(u){lt.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var _=u.__sm__;if(_){t:{for(const M in _){u=M;break t}u=void 0}(this.i=u)&&(u=this.i,_=_!==null&&u in _?_[u]:void 0),this.data=_}else this.data=u}y(lp,lt);function cp(){Lt.call(this),this.status=1}y(cp,Lt);function Gs(u){this.g=u}y(Gs,ap),Gs.prototype.ua=function(){ut(this.g,"a")},Gs.prototype.ta=function(u){ut(this.g,new lp(u))},Gs.prototype.sa=function(u){ut(this.g,new cp)},Gs.prototype.ra=function(){ut(this.g,"b")},gl.prototype.createWebChannel=gl.prototype.g,$n.prototype.send=$n.prototype.o,$n.prototype.open=$n.prototype.m,$n.prototype.close=$n.prototype.close,x_=function(){return new gl},y_=function(){return Ae()},v_=zt,yh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hr.NO_ERROR=0,Hr.TIMEOUT=8,Hr.HTTP_ERROR=6,Jl=Hr,cl.COMPLETE="complete",__=cl,$.EventType=Z,Z.OPEN="a",Z.CLOSE="b",Z.ERROR="c",Z.MESSAGE="d",At.prototype.listen=At.prototype.K,pa=$,g_=ea,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,m_=Ue}).apply(typeof vl<"u"?vl:typeof self<"u"?self:typeof window<"u"?window:{});const Pp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}En.UNAUTHENTICATED=new En(null),En.GOOGLE_CREDENTIALS=new En("google-credentials-uid"),En.FIRST_PARTY=new En("first-party-uid"),En.MOCK_USER=new En("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new bd("@firebase/firestore");function oa(){return Ts.logLevel}function kt(i,...t){if(Ts.logLevel<=ue.DEBUG){const e=t.map(Nd);Ts.debug(`Firestore (${Wo}): ${i}`,...e)}}function Ms(i,...t){if(Ts.logLevel<=ue.ERROR){const e=t.map(Nd);Ts.error(`Firestore (${Wo}): ${i}`,...e)}}function gc(i,...t){if(Ts.logLevel<=ue.WARN){const e=t.map(Nd);Ts.warn(`Firestore (${Wo}): ${i}`,...e)}}function Nd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(i="Unexpected state"){const t=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+i;throw Ms(t),new Error(t)}function Ze(i,t){i||se()}function xe(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jt extends kr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class LS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(En.UNAUTHENTICATED))}shutdown(){}}class NS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class OS{constructor(t){this.t=t,this.currentUser=En.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let s=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fs,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{kt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(kt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fs)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(kt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ze(typeof n.accessToken=="string"),new E_(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ze(t===null||typeof t=="string"),new En(t)}}class US{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=En.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FS{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new US(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(En.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kS{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VS{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=s=>{s.error!=null&&kt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,kt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{kt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):kt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Ze(typeof e.token=="string"),this.R=e.token,new kS(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=BS(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function ve(i,t){return i<t?-1:i>t?1:0}function Ro(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jt(pt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jt(pt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new jt(pt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jt(pt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return an.fromMillis(Date.now())}static fromDate(t){return an.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new an(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ve(this.nanoseconds,t.nanoseconds):ve(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ie(t)}static min(){return new Ie(new an(0,0))}static max(){return new Ie(new an(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n){e===void 0?e=0:e>t.length&&se(),n===void 0?n=t.length-e:n>t.length-e&&se(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Da.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Da?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Fe extends Da{construct(t,e,n){return new Fe(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new jt(pt.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Fe(e)}static emptyPath(){return new Fe([])}}const zS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pn extends Da{construct(t,e,n){return new pn(t,e,n)}static isValidIdentifier(t){return zS.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pn(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new jt(pt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new jt(pt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new jt(pt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new jt(pt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pn(e)}static emptyPath(){return new pn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.path=t}static fromPath(t){return new ee(Fe.fromString(t))}static fromName(t){return new ee(Fe.fromString(t).popFirst(5))}static empty(){return new ee(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Fe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Fe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ee(new Fe(t.slice()))}}function HS(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Ie.fromTimestamp(n===1e9?new an(e+1,0):new an(e,n));return new Ir(r,ee.empty(),t)}function GS(i){return new Ir(i.readTime,i.key,-1)}class Ir{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ir(Ie.min(),ee.empty(),-1)}static max(){return new Ir(Ie.max(),ee.empty(),-1)}}function WS(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=ee.comparator(i.documentKey,t.documentKey),e!==0?e:ve(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(i){if(i.code!==pt.FAILED_PRECONDITION||i.message!==XS)throw i;kt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ct((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ct?e:ct.resolve(e)}catch(e){return ct.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ct.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ct.reject(e)}static resolve(t){return new ct((e,n)=>{e(t)})}static reject(t){return new ct((e,n)=>{n(t)})}static waitFor(t){return new ct((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},l=>n(l))}),o=!0,s===r&&e()})}static or(t){let e=ct.resolve(!1);for(const n of t)e=e.next(r=>r?ct.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new ct((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;e(t[c]).next(h=>{o[c]=h,++a,a===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new ct((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function qS(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Gc(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}M_.oe=-1;function Od(i){return i==null}function _c(i){return i===0&&1/i==-1/0}function jS(i){return typeof i=="number"&&Number.isInteger(i)&&!_c(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function tl(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function A_(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.comparator=t,this.root=e||hn.EMPTY}insert(t,e){return new Hn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,hn.BLACK,null,null))}remove(t){return new Hn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,hn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yl(this.root,t,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yl(this.root,t,this.comparator,!0)}}class yl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class hn{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??hn.RED,this.left=r??hn.EMPTY,this.right=s??hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new hn(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return hn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return hn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const t=this.left.check();if(t!==this.right.check())throw se();return t+(this.isRed()?0:1)}}hn.EMPTY=null,hn.RED=!0,hn.BLACK=!1;hn.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new hn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.comparator=t,this.data=new Hn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Dp(this.data.getIterator())}getIteratorFrom(t){return new Dp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Mn)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Mn(this.comparator);return e.data=t,e}}class Dp{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.fields=t,t.sort(pn.comparator)}static empty(){return new _i([])}unionWith(t){let e=new Mn(pn.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new _i(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ro(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YS("Invalid base64 string: "+s):s}}(t);return new Oi(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Oi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ve(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Oi.EMPTY_BYTE_STRING=new Oi("");const KS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(i){if(Ze(!!i),typeof i=="string"){let t=0;const e=KS.exec(i);if(Ze(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:dn(i.seconds),nanos:dn(i.nanos)}}function dn(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function La(i){return typeof i=="string"?Oi.fromBase64String(i):Oi.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function w_(i){const t=i.mapValue.fields.__previous_value__;return Ud(t)?w_(t):t}function vc(i){const t=As(i.mapValue.fields.__local_write_time__.timestampValue);return new an(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(t,e,n,r,s,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class yc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Co(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ud(i)?4:ZS(i)?9007199254740991:10:se()}function Ui(i,t){if(i===t)return!0;const e=Co(i);if(e!==Co(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return vc(i).isEqual(vc(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=As(r.timestampValue),a=As(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return La(r.bytesValue).isEqual(La(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return dn(r.geoPointValue.latitude)===dn(s.geoPointValue.latitude)&&dn(r.geoPointValue.longitude)===dn(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return dn(r.integerValue)===dn(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=dn(r.doubleValue),a=dn(s.doubleValue);return o===a?_c(o)===_c(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return Ro(i.arrayValue.values||[],t.arrayValue.values||[],Ui);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Ip(o)!==Ip(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ui(o[l],a[l])))return!1;return!0}(i,t);default:return se()}}function Na(i,t){return(i.values||[]).find(e=>Ui(e,t))!==void 0}function Po(i,t){if(i===t)return 0;const e=Co(i),n=Co(t);if(e!==n)return ve(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return ve(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=dn(s.integerValue||s.doubleValue),l=dn(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(i,t);case 3:return Lp(i.timestampValue,t.timestampValue);case 4:return Lp(vc(i),vc(t));case 5:return ve(i.stringValue,t.stringValue);case 6:return function(s,o){const a=La(s),l=La(o);return a.compareTo(l)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ve(a[c],l[c]);if(h!==0)return h}return ve(a.length,l.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ve(dn(s.latitude),dn(o.latitude));return a!==0?a:ve(dn(s.longitude),dn(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=Po(a[c],l[c]);if(h)return h}return ve(a.length,l.length)}(i.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===xl.mapValue&&o===xl.mapValue)return 0;if(s===xl.mapValue)return 1;if(o===xl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const f=ve(l[d],h[d]);if(f!==0)return f;const p=Po(a[l[d]],c[h[d]]);if(p!==0)return p}return ve(l.length,h.length)}(i.mapValue,t.mapValue);default:throw se()}}function Lp(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ve(i,t);const e=As(i),n=As(t),r=ve(e.seconds,n.seconds);return r!==0?r:ve(e.nanos,n.nanos)}function Io(i){return xh(i)}function xh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=As(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return La(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return ee.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=xh(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${xh(e.fields[o])}`;return r+"}"}(i.mapValue):se()}function Eh(i){return!!i&&"integerValue"in i}function Fd(i){return!!i&&"arrayValue"in i}function Zl(i){return!!i&&"mapValue"in i}function xa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return tl(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=xa(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xa(i.arrayValue.values[e]);return t}return Object.assign({},i)}function ZS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.value=t}static empty(){return new mi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xa(e)}setAll(t){let e=pn.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=xa(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Zl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ui(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Zl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){tl(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new mi(xa(this.value))}}function b_(i){const t=[];return tl(i.fields,(e,n)=>{const r=new pn([e]);if(Zl(n)){const s=b_(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new _i(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new pi(t,0,Ie.min(),Ie.min(),Ie.min(),mi.empty(),0)}static newFoundDocument(t,e,n,r){return new pi(t,1,e,Ie.min(),n,r,0)}static newNoDocument(t,e){return new pi(t,2,e,Ie.min(),Ie.min(),mi.empty(),0)}static newUnknownDocument(t,e){return new pi(t,3,e,Ie.min(),Ie.min(),mi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e){this.position=t,this.inclusive=e}}function Np(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=ee.comparator(ee.fromName(o.referenceValue),e.key):n=Po(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Op(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Ui(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e="asc"){this.field=t,this.dir=e}}function QS(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{}class on extends R_{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new eT(t,e,n):e==="array-contains"?new rT(t,n):e==="in"?new sT(t,n):e==="not-in"?new oT(t,n):e==="array-contains-any"?new aT(t,n):new on(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new nT(t,n):new iT(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Po(e,this.value)):e!==null&&Co(this.value)===Co(e)&&this.matchesComparison(Po(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dr extends R_{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dr(t,e)}matches(t){return C_(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function C_(i){return i.op==="and"}function P_(i){return tT(i)&&C_(i)}function tT(i){for(const t of i.filters)if(t instanceof Dr)return!1;return!0}function Sh(i){if(i instanceof on)return i.field.canonicalString()+i.op.toString()+Io(i.value);if(P_(i))return i.filters.map(t=>Sh(t)).join(",");{const t=i.filters.map(e=>Sh(e)).join(",");return`${i.op}(${t})`}}function I_(i,t){return i instanceof on?function(n,r){return r instanceof on&&n.op===r.op&&n.field.isEqual(r.field)&&Ui(n.value,r.value)}(i,t):i instanceof Dr?function(n,r){return r instanceof Dr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&I_(o,r.filters[a]),!0):!1}(i,t):void se()}function D_(i){return i instanceof on?function(e){return`${e.field.canonicalString()} ${e.op} ${Io(e.value)}`}(i):i instanceof Dr?function(e){return e.op.toString()+" {"+e.getFilters().map(D_).join(" ,")+"}"}(i):"Filter"}class eT extends on{constructor(t,e,n){super(t,e,n),this.key=ee.fromName(n.referenceValue)}matches(t){const e=ee.comparator(t.key,this.key);return this.matchesComparison(e)}}class nT extends on{constructor(t,e){super(t,"in",e),this.keys=L_("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class iT extends on{constructor(t,e){super(t,"not-in",e),this.keys=L_("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function L_(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>ee.fromName(n.referenceValue))}class rT extends on{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fd(e)&&Na(e.arrayValue,this.value)}}class sT extends on{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Na(this.value.arrayValue,e)}}class oT extends on{constructor(t,e){super(t,"not-in",e)}matches(t){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Na(this.value.arrayValue,e)}}class aT extends on{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fd(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Na(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Up(i,t=null,e=[],n=[],r=null,s=null,o=null){return new lT(i,t,e,n,r,s,o)}function kd(i){const t=xe(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Sh(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Od(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Io(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Io(n)).join(",")),t.ue=e}return t.ue}function Vd(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!QS(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!I_(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Op(i.startAt,t.startAt)&&Op(i.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cT(i,t,e,n,r,s,o,a){return new Wc(i,t,e,n,r,s,o,a)}function uT(i){return new Wc(i)}function Fp(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function hT(i){return i.collectionGroup!==null}function Ea(i){const t=xe(i);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mn(pn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Ec(s,n))}),e.has(pn.keyField().canonicalString())||t.ce.push(new Ec(pn.keyField(),n))}return t.ce}function ps(i){const t=xe(i);return t.le||(t.le=dT(t,Ea(i))),t.le}function dT(i,t){if(i.limitType==="F")return Up(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ec(r.field,s)});const e=i.endAt?new xc(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new xc(i.startAt.position,i.startAt.inclusive):null;return Up(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Th(i,t,e){return new Wc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function N_(i,t){return Vd(ps(i),ps(t))&&i.limitType===t.limitType}function O_(i){return`${kd(ps(i))}|lt:${i.limitType}`}function aa(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>D_(r)).join(", ")}]`),Od(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),`Target(${n})`}(ps(i))}; limitType=${i.limitType})`}function Bd(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ee.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Ea(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,l){const c=Np(o,a,l);return o.inclusive?c<=0:c<0}(n.startAt,Ea(n),r)||n.endAt&&!function(o,a,l){const c=Np(o,a,l);return o.inclusive?c>=0:c>0}(n.endAt,Ea(n),r))}(i,t)}function fT(i){return(t,e)=>{let n=!1;for(const r of Ea(i)){const s=pT(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function pT(i,t,e){const n=i.field.isKeyField()?ee.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Po(l,c):se()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){tl(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return A_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Hn(ee.comparator);function Sc(){return mT}const U_=new Hn(ee.comparator);function El(...i){let t=U_;for(const e of i)t=t.insert(e.key,e);return t}function F_(i){let t=U_;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function as(){return Sa()}function k_(){return Sa()}function Sa(){return new Xo(i=>i.toString(),(i,t)=>i.isEqual(t))}const gT=new Hn(ee.comparator),_T=new Mn(ee.comparator);function Sn(...i){let t=_T;for(const e of i)t=t.add(e);return t}const vT=new Mn(ve);function yT(){return vT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(t)?"-0":t}}function B_(i){return{integerValue:""+i}}function xT(i,t){return jS(t)?B_(t):V_(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this._=void 0}}function ET(i,t,e){return i instanceof Tc?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Ud(s)&&(s=w_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof Oa?H_(i,t):i instanceof Ua?G_(i,t):function(r,s){const o=z_(r,s),a=kp(o)+kp(r.Pe);return Eh(o)&&Eh(r.Pe)?B_(a):V_(r.serializer,a)}(i,t)}function ST(i,t,e){return i instanceof Oa?H_(i,t):i instanceof Ua?G_(i,t):e}function z_(i,t){return i instanceof Mc?function(n){return Eh(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class Tc extends Xc{}class Oa extends Xc{constructor(t){super(),this.elements=t}}function H_(i,t){const e=W_(t);for(const n of i.elements)e.some(r=>Ui(r,n))||e.push(n);return{arrayValue:{values:e}}}class Ua extends Xc{constructor(t){super(),this.elements=t}}function G_(i,t){let e=W_(t);for(const n of i.elements)e=e.filter(r=>!Ui(r,n));return{arrayValue:{values:e}}}class Mc extends Xc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function kp(i){return dn(i.integerValue||i.doubleValue)}function W_(i){return Fd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function TT(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof Oa&&r instanceof Oa||n instanceof Ua&&r instanceof Ua?Ro(n.elements,r.elements,Ui):n instanceof Mc&&r instanceof Mc?Ui(n.Pe,r.Pe):n instanceof Tc&&r instanceof Tc}(i.transform,t.transform)}class MT{constructor(t,e){this.version=t,this.transformResults=e}}class tr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new tr}static exists(t){return new tr(void 0,t)}static updateTime(t){return new tr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ql(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class $c{}function X_(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new q_(i.key,tr.none()):new el(i.key,i.data,tr.none());{const e=i.data,n=mi.empty();let r=new Mn(pn.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new Ns(i.key,n,new _i(r.toArray()),tr.none())}}function AT(i,t,e){i instanceof el?function(r,s,o){const a=r.value.clone(),l=Bp(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof Ns?function(r,s,o){if(!Ql(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Bp(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll($_(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ta(i,t,e,n){return i instanceof el?function(s,o,a,l){if(!Ql(s.precondition,o))return a;const c=s.value.clone(),h=zp(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(i,t,e,n):i instanceof Ns?function(s,o,a,l){if(!Ql(s.precondition,o))return a;const c=zp(s.fieldTransforms,l,o),h=o.data;return h.setAll($_(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(i,t,e,n):function(s,o,a){return Ql(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function wT(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=z_(n.transform,r||null);s!=null&&(e===null&&(e=mi.empty()),e.set(n.field,s))}return e||null}function Vp(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ro(n,r,(s,o)=>TT(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class el extends $c{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ns extends $c{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $_(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Bp(i,t,e){const n=new Map;Ze(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,ST(o,a,e[r]))}return n}function zp(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,ET(s,o,t))}return n}class q_ extends $c{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bT extends $c{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&AT(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ta(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ta(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=k_();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const l=X_(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Ie.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Sn())}isEqual(t){return this.batchId===t.batchId&&Ro(this.mutations,t.mutations,(e,n)=>Vp(e,n))&&Ro(this.baseMutations,t.baseMutations,(e,n)=>Vp(e,n))}}class zd{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ze(t.mutations.length===n.length);let r=function(){return gT}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new zd(t,e,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,le;function PT(i){switch(i){default:return se();case pt.CANCELLED:case pt.UNKNOWN:case pt.DEADLINE_EXCEEDED:case pt.RESOURCE_EXHAUSTED:case pt.INTERNAL:case pt.UNAVAILABLE:case pt.UNAUTHENTICATED:return!1;case pt.INVALID_ARGUMENT:case pt.NOT_FOUND:case pt.ALREADY_EXISTS:case pt.PERMISSION_DENIED:case pt.FAILED_PRECONDITION:case pt.ABORTED:case pt.OUT_OF_RANGE:case pt.UNIMPLEMENTED:case pt.DATA_LOSS:return!0}}function IT(i){if(i===void 0)return Ms("GRPC error has no .code"),pt.UNKNOWN;switch(i){case $e.OK:return pt.OK;case $e.CANCELLED:return pt.CANCELLED;case $e.UNKNOWN:return pt.UNKNOWN;case $e.DEADLINE_EXCEEDED:return pt.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return pt.RESOURCE_EXHAUSTED;case $e.INTERNAL:return pt.INTERNAL;case $e.UNAVAILABLE:return pt.UNAVAILABLE;case $e.UNAUTHENTICATED:return pt.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return pt.INVALID_ARGUMENT;case $e.NOT_FOUND:return pt.NOT_FOUND;case $e.ALREADY_EXISTS:return pt.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return pt.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return pt.FAILED_PRECONDITION;case $e.ABORTED:return pt.ABORTED;case $e.OUT_OF_RANGE:return pt.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return pt.UNIMPLEMENTED;case $e.DATA_LOSS:return pt.DATA_LOSS;default:return se()}}(le=$e||($e={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new p_([4294967295,4294967295],0);class DT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mh(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function LT(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function NT(i,t){return Mh(i,t.toTimestamp())}function xo(i){return Ze(!!i),Ie.fromTimestamp(function(e){const n=As(e);return new an(n.seconds,n.nanos)}(i))}function j_(i,t){return Ah(i,t).canonicalString()}function Ah(i,t){const e=function(r){return new Fe(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function OT(i){const t=Fe.fromString(i);return Ze(GT(t)),t}function wh(i,t){return j_(i.databaseId,t.path)}function UT(i){const t=OT(i);return t.length===4?Fe.emptyPath():kT(t)}function FT(i){return new Fe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function kT(i){return Ze(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Hp(i,t,e){return{name:wh(i,t),fields:e.value.mapValue.fields}}function VT(i,t){let e;if(t instanceof el)e={update:Hp(i,t.key,t.value)};else if(t instanceof q_)e={delete:wh(i,t.key)};else if(t instanceof Ns)e={update:Hp(i,t.key,t.data),updateMask:HT(t.fieldMask)};else{if(!(t instanceof bT))return se();e={verify:wh(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof Tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw se()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:NT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(i,t.precondition)),e}function BT(i,t){return i&&i.length>0?(Ze(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?xo(r.updateTime):xo(s);return o.isEqual(Ie.min())&&(o=xo(s)),new MT(o,r.transformResults||[])}(e,t))):[]}function zT(i){let t=UT(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){Ze(n===1);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(d){const f=Y_(d);return f instanceof Dr&&P_(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(f=>function(y){return new Ec(ho(y.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,Od(f)?null:f}(e.limit));let l=null;e.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new xc(p,f)}(e.startAt));let c=null;return e.endAt&&(c=function(d){const f=!d.before,p=d.values||[];return new xc(p,f)}(e.endAt)),cT(t,r,o,s,a,"F",l,c)}function Y_(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ho(e.unaryFilter.field);return on.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ho(e.unaryFilter.field);return on.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ho(e.unaryFilter.field);return on.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ho(e.unaryFilter.field);return on.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(i):i.fieldFilter!==void 0?function(e){return on.create(ho(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Dr.create(e.compositeFilter.filters.map(n=>Y_(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return se()}}(e.compositeFilter.op))}(i):se()}function ho(i){return pn.fromServerFormat(i.fieldPath)}function HT(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function GT(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(t){this.ct=t}}function XT(i){const t=zT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Th(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.an=new qT}addToCollectionParentIndex(t,e){return this.an.add(e),ct.resolve()}getCollectionParents(t,e){return ct.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return ct.resolve()}deleteFieldIndex(t,e){return ct.resolve()}deleteAllFieldIndexes(t){return ct.resolve()}createTargetIndexes(t,e){return ct.resolve()}getDocumentsMatchingTarget(t,e){return ct.resolve(null)}getIndexType(t,e){return ct.resolve(0)}getFieldIndexes(t,e){return ct.resolve([])}getNextCollectionGroupToUpdate(t){return ct.resolve(null)}getMinOffset(t,e){return ct.resolve(Ir.min())}getMinOffsetFromCollectionGroup(t,e){return ct.resolve(Ir.min())}updateCollectionGroup(t,e,n){return ct.resolve()}updateIndexEntries(t,e){return ct.resolve()}}class qT{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Mn(Fe.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Mn(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new Do(0)}static Bn(){return new Do(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.changes=new Xo(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?ct.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Ta(n.mutation,r,_i.empty(),an.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Sn()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Sn()){const r=as();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=El();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=as();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Sn()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=Sc();const o=Sa(),a=function(){return Sa()}();return e.forEach((l,c)=>{const h=n.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Ns)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ta(h.mutation,c,h.mutation.getFieldMask(),an.now())):o.set(c.key,_i.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),e.forEach((c,h)=>{var d;return a.set(c,new YT(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,e){const n=Sa();let r=new Hn((o,a)=>o-a),s=Sn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let h=n.get(l)||_i.empty();h=a.applyToLocalView(c,h),n.set(l,h);const d=(r.get(a.batchId)||Sn()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=k_();h.forEach(f=>{if(!s.has(f)){const p=X_(e.get(f),n.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,d))}return ct.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hT(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ct.resolve(as());let a=-1,l=s;return o.next(c=>ct.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?ct.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,Sn())).next(h=>({batchId:a,changes:F_(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ee(e)).next(n=>{let r=El();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=El();return this.indexManager.getCollectionParents(t,s).next(a=>ct.forEach(a,l=>{const c=function(d,f){return new Wc(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,n,r).next(h=>{h.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,pi.newInvalidDocument(h)))});let a=El();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ta(h.mutation,c,_i.empty(),an.now()),Bd(e,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return ct.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:xo(r.createTime)}}(e)),ct.resolve()}getNamedQuery(t,e){return ct.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(r){return{name:r.name,query:XT(r.bundledQuery),readTime:xo(r.readTime)}}(e)),ct.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.overlays=new Hn(ee.comparator),this.Pr=new Map}getOverlay(t,e){return ct.resolve(this.overlays.get(e))}getOverlays(t,e){const n=as();return ct.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.ht(t,e,s)}),ct.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Pr.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(n)),ct.resolve()}getOverlaysForCollection(t,e,n){const r=as(),s=e.length+1,o=new ee(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return ct.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Hn((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>n){let h=s.get(c.largestBatchId);h===null&&(h=as(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=as(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return ct.resolve(a)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new CT(e,n));let s=this.Pr.get(e);s===void 0&&(s=Sn(),this.Pr.set(e,s)),this.Pr.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.sessionToken=Oi.EMPTY_BYTE_STRING}getSessionToken(t){return ct.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ct.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.Ir=new Mn(rn.Tr),this.Er=new Mn(rn.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new rn(t,e);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Rr(new rn(t,e))}Vr(t,e){t.forEach(n=>this.removeReference(n,e))}mr(t){const e=new ee(new Fe([])),n=new rn(e,t),r=new rn(e,t+1),s=[];return this.Er.forEachInRange([n,r],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new ee(new Fe([])),n=new rn(e,t),r=new rn(e,t+1);let s=Sn();return this.Er.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new rn(t,0),n=this.Ir.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class rn{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return ee.comparator(t.key,e.key)||ve(t.yr,e.yr)}static dr(t,e){return ve(t.yr,e.yr)||ee.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Mn(rn.Tr)}checkEmpty(t){return ct.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RT(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.Sr=this.Sr.add(new rn(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return ct.resolve(o)}lookupMutationBatch(t,e){return ct.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Dr(n),s=r<0?0:r;return ct.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ct.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return ct.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rn(e,0),r=new rn(e,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,r],o=>{const a=this.br(o.yr);s.push(a)}),ct.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Mn(ve);return e.forEach(r=>{const s=new rn(r,0),o=new rn(r,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{n=n.add(a.yr)})}),ct.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ee.isDocumentKey(s)||(s=s.child(""));const o=new rn(new ee(s),0);let a=new Mn(ve);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.yr)),!0)},o),ct.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(n=>{const r=this.br(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Ze(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Sr;return ct.forEach(e.mutations,r=>{const s=new rn(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Sr=n})}xn(t){}containsKey(t,e){const n=new rn(e,0),r=this.Sr.firstAfterOrEqual(n);return ct.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ct.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(t){this.Fr=t,this.docs=function(){return new Hn(ee.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ct.resolve(n?n.document.mutableCopy():pi.newInvalidDocument(e))}getEntries(t,e){let n=Sc();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():pi.newInvalidDocument(r))}),ct.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=Sc();const o=e.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||WS(GS(h),n)<=0||(r.has(h.key)||Bd(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return ct.resolve(s)}getAllFromCollectionGroup(t,e,n,r){se()}Mr(t,e){return ct.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new nM(this)}getSize(t){return ct.resolve(this.size)}}class nM extends jT{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.ur.addEntry(t,r)):this.ur.removeEntry(n)}),ct.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(t){this.persistence=t,this.Or=new Xo(e=>kd(e),Vd),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Hd,this.targetCount=0,this.Br=Do.Ln()}forEachTarget(t,e){return this.Or.forEach((n,r)=>e(r)),ct.resolve()}getLastRemoteSnapshotVersion(t){return ct.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ct.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ct.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),ct.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Do(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,ct.resolve()}updateTargetData(t,e){return this.Qn(e),ct.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,ct.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),ct.waitFor(s).next(()=>r)}getTargetCount(t){return ct.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return ct.resolve(n)}addMatchingKeys(t,e,n){return this.Lr.Ar(e,n),ct.resolve()}removeMatchingKeys(t,e,n){this.Lr.Vr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),ct.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),ct.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Lr.pr(e);return ct.resolve(n)}containsKey(t,e){return ct.resolve(this.Lr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(t,e){this.kr={},this.overlays={},this.qr=new M_(0),this.Qr=!1,this.Qr=!0,this.Kr=new QT,this.referenceDelegate=t(this),this.$r=new iM(this),this.indexManager=new $T,this.remoteDocumentCache=function(r){return new eM(r)}(n=>this.referenceDelegate.Ur(n)),this.serializer=new WT(e),this.Wr=new JT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ZT,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new tM(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,n){kt("MemoryPersistence","Starting transaction:",t);const r=new sM(this.qr.next());return this.referenceDelegate.Gr(),n(r).next(s=>this.referenceDelegate.zr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}jr(t,e){return ct.or(Object.values(this.kr).map(n=>()=>n.containsKey(t,e)))}}class sM extends $S{constructor(t){super(),this.currentSequenceNumber=t}}class Gd{constructor(t){this.persistence=t,this.Hr=new Hd,this.Jr=null}static Yr(t){return new Gd(t)}get Zr(){if(this.Jr)return this.Jr;throw se()}addReference(t,e,n){return this.Hr.addReference(n,e),this.Zr.delete(n.toString()),ct.resolve()}removeReference(t,e,n){return this.Hr.removeReference(n,e),this.Zr.add(n.toString()),ct.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),ct.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(r=>this.Zr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Zr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ct.forEach(this.Zr,n=>{const r=ee.fromPath(n);return this.Xr(t,r).next(s=>{s||e.removeEntry(r,Ie.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(n=>{n?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return ct.or([()=>ct.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ki=n,this.$i=r}static Ui(t,e){let n=Sn(),r=Sn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Wd(t,e.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Jy()?8:qS(jy())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new oM;return this.Zi(t,e,o).next(a=>{if(s.result=a,this.Gi)return this.Xi(t,e,o,a.size)})}).next(()=>s.result)}Xi(t,e,n,r){return n.documentReadCount<this.zi?(oa()<=ue.DEBUG&&kt("QueryEngine","SDK will not create cache indexes for query:",aa(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),ct.resolve()):(oa()<=ue.DEBUG&&kt("QueryEngine","Query:",aa(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ji*r?(oa()<=ue.DEBUG&&kt("QueryEngine","The SDK decides to create cache indexes for query:",aa(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ps(e))):ct.resolve())}Ji(t,e){if(Fp(e))return ct.resolve(null);let n=ps(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Th(e,null,"F"),n=ps(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=Sn(...s);return this.Hi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(l=>{const c=this.es(e,a);return this.ts(e,c,o,l.readTime)?this.Ji(t,Th(e,null,"F")):this.ns(t,c,e,l)}))})))}Yi(t,e,n,r){return Fp(e)||r.isEqual(Ie.min())?ct.resolve(null):this.Hi.getDocuments(t,n).next(s=>{const o=this.es(e,s);return this.ts(e,o,n,r)?ct.resolve(null):(oa()<=ue.DEBUG&&kt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),aa(e)),this.ns(t,o,e,HS(r,-1)).next(a=>a))})}es(t,e){let n=new Mn(fT(t));return e.forEach((r,s)=>{Bd(t,s)&&(n=n.add(s))}),n}ts(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Zi(t,e,n){return oa()<=ue.DEBUG&&kt("QueryEngine","Using full collection scan to execute query:",aa(e)),this.Hi.getDocumentsMatchingQuery(t,e,Ir.min(),n)}ns(t,e,n,r){return this.Hi.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(t,e,n,r){this.persistence=t,this.rs=e,this.serializer=r,this.ss=new Hn(ve),this.os=new Xo(s=>kd(s),Vd),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(n)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new KT(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function cM(i,t,e,n){return new lM(i,t,e,n)}async function K_(i,t){const e=xe(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.cs(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let l=Sn();for(const c of r){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(n,l).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function uM(i,t){const e=xe(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.us.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,f=d.keys();let p=ct.resolve();return f.forEach(y=>{p=p.next(()=>h.getEntry(l,y)).next(v=>{const m=c.docVersions.get(y);Ze(m!==null),v.version.compareTo(m)<0&&(d.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),h.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=Sn();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function hM(i){const t=xe(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function dM(i,t){const e=xe(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}class Gp{constructor(){this.activeTargetIds=yT()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fM{constructor(){this.io=new Gp,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,n){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new Gp,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){kt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){kt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl=null;function xu(){return Sl===null?Sl=function(){return 268435456+Math.round(2147483648*Math.random())}():Sl++,"0x"+Sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="WebChannelConnection";class _M extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=n+"://"+e.host,this.Do=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get vo(){return!1}Fo(e,n,r,s,o){const a=xu(),l=this.Mo(e,n.toUriEncodedString());kt("RestConnection",`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(e,l,c,r).then(h=>(kt("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw gc("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}No(e,n,r,s,o,a){return this.Fo(e,n,r,s,o)}xo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}Mo(e,n){const r=mM[e];return`${this.bo}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,n,r){const s=xu();return new Promise((o,a)=>{const l=new m_;l.setWithCredentials(!0),l.listenOnce(__.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Jl.NO_ERROR:const h=l.getResponseJson();kt(vn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Jl.TIMEOUT:kt(vn,`RPC '${t}' ${s} timed out`),a(new jt(pt.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const d=l.getStatus();if(kt(vn,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(pt).indexOf(g)>=0?g:pt.UNKNOWN}(p.status);a(new jt(y,p.message))}else a(new jt(pt.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new jt(pt.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{kt(vn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);kt(vn,`RPC '${t}' ${s} sending request:`,r),l.send(e,"POST",c,n,15)})}Lo(t,e,n){const r=xu(),s=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=x_(),a=y_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new g_({})),this.xo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const h=s.join("");kt(vn,`Creating RPC '${t}' stream ${r}: ${h}`,l);const d=o.createWebChannel(h,l);let f=!1,p=!1;const y=new gM({Po:m=>{p?kt(vn,`Not sending because RPC '${t}' stream ${r} is closed:`,m):(f||(kt(vn,`Opening RPC '${t}' stream ${r} transport.`),d.open(),f=!0),kt(vn,`RPC '${t}' stream ${r} sending:`,m),d.send(m))},Io:()=>d.close()}),v=(m,g,w)=>{m.listen(g,A=>{try{w(A)}catch(C){setTimeout(()=>{throw C},0)}})};return v(d,pa.EventType.OPEN,()=>{p||(kt(vn,`RPC '${t}' stream ${r} transport opened.`),y.po())}),v(d,pa.EventType.CLOSE,()=>{p||(p=!0,kt(vn,`RPC '${t}' stream ${r} transport closed`),y.wo())}),v(d,pa.EventType.ERROR,m=>{p||(p=!0,gc(vn,`RPC '${t}' stream ${r} transport errored:`,m),y.wo(new jt(pt.UNAVAILABLE,"The operation could not be completed")))}),v(d,pa.EventType.MESSAGE,m=>{var g;if(!p){const w=m.data[0];Ze(!!w);const A=w,C=A.error||((g=A[0])===null||g===void 0?void 0:g.error);if(C){kt(vn,`RPC '${t}' stream ${r} received error:`,C);const F=C.status;let L=function(x){const E=$e[x];if(E!==void 0)return IT(E)}(F),S=C.message;L===void 0&&(L=pt.INTERNAL,S="Unknown error status: "+F+" with message "+C.message),p=!0,y.wo(new jt(L,S)),d.close()}else kt(vn,`RPC '${t}' stream ${r} received:`,w),y.So(w)}}),v(a,v_.STAT_EVENT,m=>{m.stat===yh.PROXY?kt(vn,`RPC '${t}' stream ${r} detected buffering proxy`):m.stat===yh.NOPROXY&&kt(vn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.yo()},0),y}}function Eu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(i){return new DT(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ai=t,this.timerId=e,this.Bo=n,this.ko=r,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),r=Math.max(0,e-n);r>0&&kt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,r,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(t,e,n,r,s,o,a,l){this.ai=t,this.jo=n,this.Ho=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new J_(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===pt.RESOURCE_EXHAUSTED?(Ms(e.toString()),Ms("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===pt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Jo===e&&this.h_(n,r)},n=>{t(()=>{const r=new jt(pt.UNKNOWN,"Fetching auth token failed: "+n.message);return this.P_(r)})})}h_(t,e){const n=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(r=>{n(()=>this.P_(r))}),this.stream.onMessage(r=>{n(()=>++this.Xo==1?this.T_(r):this.onNext(r))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return kt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(kt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yM extends vM{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(t,e){return this.connection.Lo("Write",t,e)}T_(t){return Ze(!!t.streamToken),this.lastStreamToken=t.streamToken,Ze(!t.writeResults||t.writeResults.length===0),this.listener.m_()}onNext(t){Ze(!!t.streamToken),this.lastStreamToken=t.streamToken,this.e_.reset();const e=BT(t.writeResults,t.commitTime),n=xo(t.commitTime);return this.listener.f_(n,e)}g_(){const t={};t.database=FT(this.serializer),this.__(t)}V_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>VT(this.serializer,n))};this.__(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.p_=!1}y_(){if(this.p_)throw new jt(pt.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,n,r){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,Ah(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===pt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new jt(pt.UNKNOWN,s.toString())})}No(t,e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(t,Ah(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===pt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new jt(pt.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class EM{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Ms(e),this.b_=!1):kt("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{n.enqueueAndForget(async()=>{il(this)&&(kt("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=xe(l);c.N_.add(4),await nl(c),c.k_.set("Unknown"),c.N_.delete(4),await jc(c)}(this))})}),this.k_=new EM(n,r)}}async function jc(i){if(il(i))for(const t of i.L_)await t(!0)}async function nl(i){for(const t of i.L_)await t(!1)}function il(i){return xe(i).N_.size===0}async function Z_(i,t,e){if(!Gc(t))throw t;i.N_.add(1),await nl(i),i.k_.set("Offline"),e||(e=()=>hM(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{kt("RemoteStore","Retrying IndexedDB access"),await e(),i.N_.delete(1),await jc(i)})}function Q_(i,t){return t().catch(e=>Z_(i,e,t))}async function Yc(i){const t=xe(i),e=Lr(t);let n=t.x_.length>0?t.x_[t.x_.length-1].batchId:-1;for(;TM(t);)try{const r=await dM(t.localStore,n);if(r===null){t.x_.length===0&&e.s_();break}n=r.batchId,MM(t,r)}catch(r){await Z_(t,r)}t0(t)&&e0(t)}function TM(i){return il(i)&&i.x_.length<10}function MM(i,t){i.x_.push(t);const e=Lr(i);e.n_()&&e.R_&&e.V_(t.mutations)}function t0(i){return il(i)&&!Lr(i).t_()&&i.x_.length>0}function e0(i){Lr(i).start()}async function AM(i){Lr(i).g_()}async function wM(i){const t=Lr(i);for(const e of i.x_)t.V_(e.mutations)}async function bM(i,t,e){const n=i.x_.shift(),r=zd.from(n,t,e);await Q_(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await Yc(i)}async function RM(i,t){t&&Lr(i).R_&&await async function(n,r){if(function(o){return PT(o)&&o!==pt.ABORTED}(r.code)){const s=n.x_.shift();Lr(n).i_(),await Q_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Yc(n)}}(i,t),t0(i)&&e0(i)}async function Xp(i,t){const e=xe(i);e.asyncQueue.verifyOperationInProgress(),kt("RemoteStore","RemoteStore received new credentials");const n=il(e);e.N_.add(3),await nl(e),n&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await jc(e)}async function CM(i,t){const e=xe(i);t?(e.N_.delete(2),await jc(e)):t||(e.N_.add(2),await nl(e),e.k_.set("Unknown"))}function Lr(i){return i.K_||(i.K_=function(e,n,r){const s=xe(e);return s.y_(),new yM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{To:()=>Promise.resolve(),Ao:AM.bind(null,i),Vo:RM.bind(null,i),m_:wM.bind(null,i),f_:bM.bind(null,i)}),i.L_.push(async t=>{t?(i.K_.i_(),await Yc(i)):(await i.K_.stop(),i.x_.length>0&&(kt("RemoteStore",`Stopping write stream with ${i.x_.length} pending writes`),i.x_=[]))})),i.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new Xd(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new jt(pt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function n0(i,t){if(Ms("AsyncQueue",`${t}: ${i}`),Gc(i))return new jt(pt.UNAVAILABLE,`${t}: ${i}`);throw i}class PM{constructor(){this.queries=$p(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,n){const r=xe(e),s=r.queries;r.queries=$p(),s.forEach((o,a)=>{for(const l of a.z_)l.onError(n)})})(this,new jt(pt.ABORTED,"Firestore shutting down"))}}function $p(){return new Xo(i=>O_(i),N_)}function IM(i){i.J_.forEach(t=>{t.next()})}var qp,jp;(jp=qp||(qp={})).X_="default",jp.Cache="cache";class DM{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Xo(a=>O_(a),N_),this.Fa=new Map,this.Ma=new Set,this.xa=new Hn(ee.comparator),this.Oa=new Map,this.Na=new Hd,this.La={},this.Ba=new Map,this.ka=Do.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function LM(i,t,e){const n=FM(i);try{const r=await function(o,a){const l=xe(o),c=an.now(),h=a.reduce((p,y)=>p.add(y.key),Sn());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Sc(),v=Sn();return l.us.getEntries(p,h).next(m=>{y=m,y.forEach((g,w)=>{w.isValidDocument()||(v=v.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(m=>{d=m;const g=[];for(const w of a){const A=wT(w,d.get(w.key).overlayedDocument);A!=null&&g.push(new Ns(w.key,A,b_(A.value.mapValue),tr.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,g,a)}).next(m=>{f=m;const g=m.applyToLocalDocumentSet(d,v);return l.documentOverlayCache.saveOverlays(p,m.batchId,g)})}).then(()=>({batchId:f.batchId,changes:F_(d)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.La[o.currentUser.toKey()];c||(c=new Hn(ve)),c=c.insert(a,l),o.La[o.currentUser.toKey()]=c}(n,r.batchId,e),await Kc(n,r.changes),await Yc(n.remoteStore)}catch(r){const s=n0(r,"Failed to persist write");e.reject(s)}}function Yp(i,t,e){const n=xe(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.va.forEach((s,o)=>{const a=o.view.Y_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=xe(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const f of d.z_)f.Y_(a)&&(c=!0)}),c&&IM(l)}(n.eventManager,t),r.length&&n.Ca.E_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function NM(i,t){const e=xe(i),n=t.batch.batchId;try{const r=await uM(e.localStore,t);r0(e,n,null),i0(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Kc(e,r)}catch(r){await T_(r)}}async function OM(i,t,e){const n=xe(i);try{const r=await function(o,a){const l=xe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(Ze(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(n.localStore,t);r0(n,t,e),i0(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Kc(n,r)}catch(r){await T_(r)}}function i0(i,t){(i.Ba.get(t)||[]).forEach(e=>{e.resolve()}),i.Ba.delete(t)}function r0(i,t,e){const n=xe(i);let r=n.La[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.La[n.currentUser.toKey()]=r}}async function Kc(i,t,e){const n=xe(i),r=[],s=[],o=[];n.va.isEmpty()||(n.va.forEach((a,l)=>{o.push(n.Qa(l,t,e).then(c=>{var h;if((c||e)&&n.isPrimaryClient){const d=c?!c.fromCache:(h=void 0)===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){r.push(c);const d=Wd.Ui(l.targetId,c);s.push(d)}}))}),await Promise.all(o),n.Ca.E_(r),await async function(l,c){const h=xe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>ct.forEach(c,f=>ct.forEach(f.Ki,p=>h.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>ct.forEach(f.$i,p=>h.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!Gc(d))throw d;kt("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const f=d.targetId;if(!d.fromCache){const p=h.ss.get(f),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);h.ss=h.ss.insert(f,v)}}}(n.localStore,s))}async function UM(i,t){const e=xe(i);if(!e.currentUser.isEqual(t)){kt("SyncEngine","User change. New user:",t.toKey());const n=await K_(e.localStore,t);e.currentUser=t,function(s,o){s.Ba.forEach(a=>{a.forEach(l=>{l.reject(new jt(pt.CANCELLED,o))})}),s.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Kc(e,n.ls)}}function FM(i){const t=xe(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=NM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=OM.bind(null,t),t}class Kp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return cM(this.persistence,new aM,t.initialUser,this.serializer)}createPersistence(t){return new rM(Gd.Yr,this.serializer)}createSharedClientState(t){return new fM}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kM{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Yp(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=UM.bind(null,this.syncEngine),await CM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new PM}()}createDatastore(t){const e=qc(t.databaseInfo.databaseId),n=function(s){return new _M(s)}(t.databaseInfo);return function(s,o,a,l){return new xM(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new SM(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Yp(this.syncEngine,e,0),function(){return Wp.D()?new Wp:new pM}())}createSyncEngine(t,e){return function(r,s,o,a,l,c,h){const d=new DM(r,s,o,a,l,c);return h&&(d.qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=xe(r);kt("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await nl(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=En.UNAUTHENTICATED,this.clientId=S_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{kt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(kt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jt(pt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=n0(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Su(i,t){i.asyncQueue.verifyOperationInProgress(),kt("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await K_(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Jp(i,t){i.asyncQueue.verifyOperationInProgress();const e=await zM(i);kt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>Xp(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>Xp(t.remoteStore,r)),i._onlineComponents=t}function BM(i){return i.name==="FirebaseError"?i.code===pt.FAILED_PRECONDITION||i.code===pt.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}async function zM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){kt("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!BM(e))throw e;gc("Error using user provided cache. Falling back to memory cache: "+e),await Su(i,new Kp)}}else kt("FirestoreClient","Using default OfflineComponentProvider"),await Su(i,new Kp);return i._offlineComponents}async function HM(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(kt("FirestoreClient","Using user provided OnlineComponentProvider"),await Jp(i,i._uninitializedComponentsProvider._online)):(kt("FirestoreClient","Using default OnlineComponentProvider"),await Jp(i,new kM))),i._onlineComponents}function GM(i){return HM(i).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(i,t,e){if(!e)throw new jt(pt.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function WM(i,t,e,n){if(t===!0&&n===!0)throw new jt(pt.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Qp(i){if(!ee.isDocumentKey(i))throw new jt(pt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function tm(i){if(ee.isDocumentKey(i))throw new jt(pt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function $d(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":se()}function a0(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new jt(pt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=$d(i);throw new jt(pt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new jt(pt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new jt(pt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}WM("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new jt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new jt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new jt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new em({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jt(pt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new jt(pt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new em(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new LS;switch(n.type){case"firstParty":return new FS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new jt(pt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zp.get(e);n&&(kt("ComponentProvider","Removing Datastore"),Zp.delete(e),n.terminate())}(this),Promise.resolve()}}function XM(i,t,e,n={}){var r;const s=(i=a0(i,Jc))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let a,l;if(typeof n.mockUserToken=="string")a=n.mockUserToken,l=En.MOCK_USER;else{a=qy(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new jt(pt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new En(c)}i._authCredentials=new NS(new E_(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qd(this.firestore,t,this._query)}}class er{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new er(this.firestore,t,this._key)}}class Mr extends qd{constructor(t,e,n){super(t,e,uT(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new er(this.firestore,null,new ee(t))}withConverter(t){return new Mr(this.firestore,t,this._path)}}function $M(i,t,...e){if(i=ys(i),o0("collection","path",t),i instanceof Jc){const n=Fe.fromString(t,...e);return tm(n),new Mr(i,null,n)}{if(!(i instanceof er||i instanceof Mr))throw new jt(pt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Fe.fromString(t,...e));return tm(n),new Mr(i.firestore,null,n)}}function qM(i,t,...e){if(i=ys(i),arguments.length===1&&(t=S_.newId()),o0("doc","path",t),i instanceof Jc){const n=Fe.fromString(t,...e);return Qp(n),new er(i,null,new ee(n))}{if(!(i instanceof er||i instanceof Mr))throw new jt(pt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Fe.fromString(t,...e));return Qp(n),new er(i.firestore,i instanceof Mr?i.converter:null,new ee(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new J_(this,"async_queue_retry"),this.Tu=()=>{const e=Eu();e&&kt("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=Eu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=Eu();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new fs;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!Gc(t))throw t;kt("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(n=>{this.lu=n,this.hu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw Ms("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.hu=!1,n))));return this._u=e,e}enqueueAfterDelay(t,e,n){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const r=Xd.createAndSchedule(this,t,e,n,s=>this.Ru(s));return this.cu.push(r),r}Eu(){this.lu&&se()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class l0 extends Jc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new jM}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||c0(this),this._firestoreClient.terminate()}}function YM(i,t){const e=typeof i=="object"?i:Gg(),n=typeof i=="string"?i:"(default)",r=Qa(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=Xy("firestore");s&&XM(r,...s)}return r}function KM(i){return i._firestoreClient||c0(i),i._firestoreClient.verifyNotTerminated(),i._firestoreClient}function c0(i){var t,e,n;const r=i._freezeSettings(),s=function(a,l,c,h){return new JS(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,s0(h.experimentalLongPollingOptions),h.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._firestoreClient=new VM(i._authCredentials,i._appCheckCredentials,i._queue,s),!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fa(Oi.fromBase64String(t))}catch(e){throw new jt(pt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fa(Oi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new jt(pt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jt(pt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jt(pt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ve(this._lat,t._lat)||ve(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=/^__.*__$/;class ZM{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Ns(t,this.data,this.fieldMask,e,this.fieldTransforms):new el(t,this.data,e,this.fieldTransforms)}}function f0(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class jd{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(t){return new jd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.wu({path:n,bu:!1});return r.Du(t),r}Cu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.wu({path:n,bu:!1});return r.pu(),r}vu(t){return this.wu({path:void 0,bu:!0})}Fu(t){return Ac(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Du(this.path.get(t))}Du(t){if(t.length===0)throw this.Fu("Document fields must not be empty");if(f0(this.yu)&&JM.test(t))throw this.Fu('Document fields cannot begin and end with "__"')}}class QM{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||qc(t)}Ou(t,e,n,r=!1){return new jd({yu:t,methodName:e,xu:n,path:pn.emptyPath(),bu:!1,Mu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tA(i){const t=i._freezeSettings(),e=qc(i._databaseId);return new QM(i._databaseId,!!t.ignoreUndefinedProperties,e)}function eA(i,t,e,n,r,s={}){const o=i.Ou(s.merge||s.mergeFields?2:0,t,e,r);_0("Data must be an object, but it was:",o,n);const a=m0(n,o);let l,c;if(s.merge)l=new _i(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=nA(t,d,e);if(!o.contains(f))throw new jt(pt.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);sA(h,f)||h.push(f)}l=new _i(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new ZM(new mi(a),l,c)}function p0(i,t){if(g0(i=ys(i)))return _0("Unsupported field value:",t,i),m0(i,t);if(i instanceof h0)return function(n,r){if(!f0(r.yu))throw r.Fu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.bu&&t.yu!==4)throw t.Fu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let l=p0(a,r.vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=ys(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=an.fromDate(n);return{timestampValue:Mh(r.serializer,s)}}if(n instanceof an){const s=new an(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mh(r.serializer,s)}}if(n instanceof d0)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fa)return{bytesValue:LT(r.serializer,n._byteString)};if(n instanceof er){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:j_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fu(`Unsupported field value: ${$d(n)}`)}(i,t)}function m0(i,t){const e={};return A_(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tl(i,(n,r)=>{const s=p0(r,t.Su(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function g0(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof an||i instanceof d0||i instanceof Fa||i instanceof er||i instanceof h0)}function _0(i,t,e){if(!g0(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=$d(e);throw n==="an object"?t.Fu(i+" a custom object"):t.Fu(i+" "+n)}}function nA(i,t,e){if((t=ys(t))instanceof u0)return t._internalPath;if(typeof t=="string")return rA(i,t);throw Ac("Field path arguments must be of type string or ",i,!1,void 0,e)}const iA=new RegExp("[~\\*/\\[\\]]");function rA(i,t,e){if(t.search(iA)>=0)throw Ac(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new u0(...t.split("."))._internalPath}catch{throw Ac(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Ac(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new jt(pt.INVALID_ARGUMENT,a+i+l)}function sA(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(i,t,e){let n;return n=i?i.toFirestore(t):t,n}function aA(i,t){const e=a0(i.firestore,l0),n=qM(i),r=oA(i.converter,t);return lA(e,[eA(tA(i.firestore),"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,tr.exists(!1))]).then(()=>n)}function lA(i,t){return function(n,r){const s=new fs;return n.asyncQueue.enqueueAndForget(async()=>LM(await GM(n),r,s)),s.promise}(KM(i),t)}(function(t,e=!0){(function(r){Wo=r})(nE),Pr(new nr("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new l0(new OS(n.getProvider("auth-internal")),new VS(n.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new jt(pt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yc(c.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Pi(Pp,"4.6.5",t),Pi(Pp,"4.6.5","esm2017")})();const cA={apiKey:"AIzaSyANFcqVV70xABq37nC2Tp_sNbJdaSZ0Efs",authDomain:"votecats.firebaseapp.com",projectId:"votecats",storageBucket:"votecats.appspot.com",messagingSenderId:"564792623026",appId:"1:564792623026:web:41fb67ea13bfe0a306eeab",measurementId:"G-F7M0XWB52M"},v0=Hg(cA);CS(v0);const uA=YM(v0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="166",Xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hA=0,nm=1,dA=2,y0=1,fA=2,ji=3,Nr=0,Fn=1,Ji=2,Ar=0,Eo=1,im=2,rm=3,sm=4,pA=5,rs=100,mA=101,gA=102,_A=103,vA=104,yA=200,xA=201,EA=202,SA=203,bh=204,Rh=205,TA=206,MA=207,AA=208,wA=209,bA=210,RA=211,CA=212,PA=213,IA=214,DA=0,LA=1,NA=2,wc=3,OA=4,UA=5,FA=6,kA=7,Kd=0,VA=1,BA=2,wr=0,zA=1,HA=2,GA=3,WA=4,XA=5,$A=6,qA=7,x0=300,Lo=301,No=302,Ch=303,Ph=304,Zc=306,Ih=1e3,ls=1001,Dh=1002,ri=1003,jA=1004,Tl=1005,gi=1006,Tu=1007,cs=1008,ir=1009,E0=1010,S0=1011,ka=1012,Jd=1013,ws=1014,Zi=1015,rl=1016,Zd=1017,Qd=1018,Oo=1020,T0=35902,M0=1021,A0=1022,vi=1023,w0=1024,b0=1025,So=1026,Uo=1027,R0=1028,tf=1029,C0=1030,ef=1031,nf=1033,tc=33776,ec=33777,nc=33778,ic=33779,Lh=35840,Nh=35841,Oh=35842,Uh=35843,Fh=36196,kh=37492,Vh=37496,Bh=37808,zh=37809,Hh=37810,Gh=37811,Wh=37812,Xh=37813,$h=37814,qh=37815,jh=37816,Yh=37817,Kh=37818,Jh=37819,Zh=37820,Qh=37821,rc=36492,td=36494,ed=36495,P0=36283,nd=36284,id=36285,rd=36286,YA=3200,KA=3201,rf=0,JA=1,gr="",fn="srgb",Vr="srgb-linear",sf="display-p3",Qc="display-p3-linear",bc="linear",Te="srgb",Rc="rec709",Cc="p3",qs=7680,om=519,ZA=512,QA=513,tw=514,I0=515,ew=516,nw=517,iw=518,rw=519,am=35044,lm="300 es",Qi=2e3,Pc=2001;class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cm=1234567;const Ma=Math.PI/180,Va=180/Math.PI;function Us(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function of(i,t){return(i%t+t)%t}function sw(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ow(i,t,e){return i!==t?(e-i)/(t-i):0}function Aa(i,t,e){return(1-e)*i+e*t}function aw(i,t,e,n){return Aa(i,t,1-Math.exp(-e*n))}function lw(i,t=1){return t-Math.abs(of(i,t*2)-t)}function cw(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uw(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hw(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dw(i,t){return i+Math.random()*(t-i)}function fw(i){return i*(.5-Math.random())}function pw(i){i!==void 0&&(cm=i);let t=cm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mw(i){return i*Ma}function gw(i){return i*Va}function _w(i){return(i&i-1)===0&&i!==0}function vw(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yw(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xw(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),f=o((t-n)/2),p=s((n-t)/2),y=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*y,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*y,a*c);break;case"ZYZ":i.set(l*y,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ew={DEG2RAD:Ma,RAD2DEG:Va,generateUUID:Us,clamp:je,euclideanModulo:of,mapLinear:sw,inverseLerp:ow,lerp:Aa,damp:aw,pingpong:lw,smoothstep:cw,smootherstep:uw,randInt:hw,randFloat:dw,randFloatSpread:fw,seededRandom:pw,degToRad:mw,radToDeg:gw,isPowerOfTwo:_w,ceilPowerOfTwo:vw,floorPowerOfTwo:yw,setQuaternionFromProperEuler:xw,normalize:In,denormalize:fo};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,r,s,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],y=n[8],v=r[0],m=r[3],g=r[6],w=r[1],A=r[4],C=r[7],F=r[2],L=r[5],S=r[8];return s[0]=o*v+a*w+l*F,s[3]=o*m+a*A+l*L,s[6]=o*g+a*C+l*S,s[1]=c*v+h*w+d*F,s[4]=c*m+h*A+d*L,s[7]=c*g+h*C+d*S,s[2]=f*v+p*w+y*F,s[5]=f*m+p*A+y*L,s[8]=f*g+p*C+y*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,y=e*d+n*f+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return t[0]=d*v,t[1]=(r*c-h*n)*v,t[2]=(a*n-r*o)*v,t[3]=f*v,t[4]=(h*e-r*l)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mu.makeScale(t,e)),this}rotate(t){return this.premultiply(Mu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new te;function D0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sw(){const i=Ba("canvas");return i.style.display="block",i}const um={};function L0(i){i in um||(um[i]=!0,console.warn(i))}function Tw(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const hm=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ml={[Vr]:{transfer:bc,primaries:Rc,toReference:i=>i,fromReference:i=>i},[fn]:{transfer:Te,primaries:Rc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qc]:{transfer:bc,primaries:Cc,toReference:i=>i.applyMatrix3(dm),fromReference:i=>i.applyMatrix3(hm)},[sf]:{transfer:Te,primaries:Cc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dm),fromReference:i=>i.applyMatrix3(hm).convertLinearToSRGB()}},Mw=new Set([Vr,Qc]),de={enabled:!0,_workingColorSpace:Vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mw.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ml[t].toReference,r=Ml[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ml[i].primaries},getTransfer:function(i){return i===gr?bc:Ml[i].transfer}};function To(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Au(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let js;class Aw{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=Ba("canvas")),js.width=t.width,js.height=t.height;const n=js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ba("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=To(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(To(e[n]/255)*255):e[n]=To(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ww=0;class N0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wu(r[o].image)):s.push(wu(r[o]))}else s=wu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function wu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Aw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bw=0;class Nn extends Os{constructor(t=Nn.DEFAULT_IMAGE,e=Nn.DEFAULT_MAPPING,n=ls,r=ls,s=gi,o=cs,a=vi,l=ir,c=Nn.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Us(),this.name="",this.source=new N0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==x0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ih:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case Dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ih:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case Dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=x0;Nn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,e=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],y=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,C=(p+1)/2,F=(g+1)/2,L=(h+f)/4,S=(d+v)/4,T=(y+m)/4;return A>C&&A>F?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=L/n,s=S/n):C>F?C<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),n=L/r,s=T/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=S/s,r=T/s),this.set(n,r,s,e),this}let w=Math.sqrt((m-y)*(m-y)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-y)/w,this.y=(d-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rw extends Os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new N0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends Rw{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class O0 extends Nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cw extends Nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],y=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=y,t[e+3]=v;return}if(d!==v||l!==f||c!==p||h!==y){let m=1-a;const g=l*f+c*p+h*y+d*v,w=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const F=Math.sqrt(A),L=Math.atan2(F,g*w);m=Math.sin(m*L)/F,a=Math.sin(a*L)/F}const C=a*w;if(l=l*m+f*C,c=c*m+p*C,h=h*m+y*C,d=d*m+v*C,m===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=F,c*=F,h*=F,d*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],y=s[o+3];return t[e]=a*y+h*d+l*p-c*f,t[e+1]=l*y+h*f+c*d-a*p,t[e+2]=c*y+h*p+a*f-l*d,t[e+3]=h*y-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d-f*p*y;break;case"YXZ":this._x=f*h*d+c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d+f*p*y;break;case"ZXY":this._x=f*h*d-c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d-f*p*y;break;case"ZYX":this._x=f*h*d-c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d+f*p*y;break;case"YZX":this._x=f*h*d+c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d-f*p*y;break;case"XZY":this._x=f*h*d-c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fm.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bu.copy(this).projectOnVector(t),this.sub(bu)}reflect(t){return this.sub(bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new V,fm=new Rs;class $o{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Al.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(t.matrixWorld),this.union(Al)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),wl.subVectors(this.max,la),Ys.subVectors(t.a,la),Ks.subVectors(t.b,la),Js.subVectors(t.c,la),lr.subVectors(Ks,Ys),cr.subVectors(Js,Ks),Xr.subVectors(Ys,Js);let e=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Xr.z,Xr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Xr.z,0,-Xr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Xr.y,Xr.x,0];return!Ru(e,Ys,Ks,Js,wl)||(e=[1,0,0,0,1,0,0,0,1],!Ru(e,Ys,Ks,Js,wl))?!1:(bl.crossVectors(lr,cr),e=[bl.x,bl.y,bl.z],Ru(e,Ys,Ks,Js,wl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hi=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,Al=new $o,Ys=new V,Ks=new V,Js=new V,lr=new V,cr=new V,Xr=new V,la=new V,wl=new V,bl=new V,$r=new V;function Ru(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){$r.fromArray(i,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=t.dot($r),c=e.dot($r),h=n.dot($r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pw=new $o,ca=new V,Cu=new V;class af{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pw.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ca.subVectors(t,this.center);const e=ca.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ca,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ca.copy(t.center).add(Cu)),this.expandByPoint(ca.copy(t.center).sub(Cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new V,Pu=new V,Rl=new V,ur=new V,Iu=new V,Cl=new V,Du=new V;class lf{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Pu.copy(t).add(e).multiplyScalar(.5),Rl.copy(e).sub(t).normalize(),ur.copy(this.origin).sub(Pu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Rl),a=ur.dot(this.direction),l=-ur.dot(Rl),c=ur.lengthSq(),h=Math.abs(1-o*o);let d,f,p,y;if(h>0)if(d=o*l-a,f=o*a-l,y=s*h,d>=0)if(f>=-y)if(f<=y){const v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pu).addScaledVector(Rl,f),p}intersectSphere(t,e){Gi.subVectors(t.center,this.origin);const n=Gi.dot(this.direction),r=Gi.dot(Gi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,n,r,s){Iu.subVectors(e,t),Cl.subVectors(n,t),Du.crossVectors(Iu,Cl);let o=this.direction.dot(Du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,t);const l=a*this.direction.dot(Cl.crossVectors(ur,Cl));if(l<0)return null;const c=a*this.direction.dot(Iu.cross(ur));if(c<0||l+c>o)return null;const h=-a*ur.dot(Du);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(t,e,n,r,s,o,a,l,c,h,d,f,p,y,v,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,d,f,p,y,v,m)}set(t,e,n,r,s,o,a,l,c,h,d,f,p,y,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=p,g[7]=y,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Zs.setFromMatrixColumn(t,0).length(),s=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,p=o*d,y=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+y*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=y+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,y=c*h,v=c*d;e[0]=f+v*a,e[4]=y*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-y,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,y=c*h,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=y+p*a,e[1]=p+y*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,y=a*h,v=a*d;e[0]=l*h,e[4]=y*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-y,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,y=a*l,v=a*c;e[0]=l*h,e[4]=v-f*d,e[8]=y*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+y,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,p=o*c,y=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=o*h,e[9]=p*d-y,e[2]=y*d-p,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iw,t,Dw)}lookAt(t,e,n){const r=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),hr.crossVectors(n,qn),hr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),hr.crossVectors(n,qn)),hr.normalize(),Pl.crossVectors(qn,hr),r[0]=hr.x,r[4]=Pl.x,r[8]=qn.x,r[1]=hr.y,r[5]=Pl.y,r[9]=qn.y,r[2]=hr.z,r[6]=Pl.z,r[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],y=n[2],v=n[6],m=n[10],g=n[14],w=n[3],A=n[7],C=n[11],F=n[15],L=r[0],S=r[4],T=r[8],x=r[12],E=r[1],b=r[5],D=r[9],R=r[13],W=r[2],K=r[6],G=r[10],tt=r[14],J=r[3],gt=r[7],St=r[11],xt=r[15];return s[0]=o*L+a*E+l*W+c*J,s[4]=o*S+a*b+l*K+c*gt,s[8]=o*T+a*D+l*G+c*St,s[12]=o*x+a*R+l*tt+c*xt,s[1]=h*L+d*E+f*W+p*J,s[5]=h*S+d*b+f*K+p*gt,s[9]=h*T+d*D+f*G+p*St,s[13]=h*x+d*R+f*tt+p*xt,s[2]=y*L+v*E+m*W+g*J,s[6]=y*S+v*b+m*K+g*gt,s[10]=y*T+v*D+m*G+g*St,s[14]=y*x+v*R+m*tt+g*xt,s[3]=w*L+A*E+C*W+F*J,s[7]=w*S+A*b+C*K+F*gt,s[11]=w*T+A*D+C*G+F*St,s[15]=w*x+A*R+C*tt+F*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],y=t[3],v=t[7],m=t[11],g=t[15];return y*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*p-n*l*p)+v*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+e*c*d-e*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+g*(-r*a*h-e*l*d+e*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],y=t[12],v=t[13],m=t[14],g=t[15],w=d*m*c-v*f*c+v*l*p-a*m*p-d*l*g+a*f*g,A=y*f*c-h*m*c-y*l*p+o*m*p+h*l*g-o*f*g,C=h*v*c-y*d*c+y*a*p-o*v*p-h*a*g+o*d*g,F=y*d*l-h*v*l-y*a*f+o*v*f+h*a*m-o*d*m,L=e*w+n*A+r*C+s*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/L;return t[0]=w*S,t[1]=(v*f*s-d*m*s-v*r*p+n*m*p+d*r*g-n*f*g)*S,t[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*g+n*l*g)*S,t[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*S,t[4]=A*S,t[5]=(h*m*s-y*f*s+y*r*p-e*m*p-h*r*g+e*f*g)*S,t[6]=(y*l*s-o*m*s-y*r*c+e*m*c+o*r*g-e*l*g)*S,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*p+e*l*p)*S,t[8]=C*S,t[9]=(y*d*s-h*v*s-y*n*p+e*v*p+h*n*g-e*d*g)*S,t[10]=(o*v*s-y*a*s+y*n*c-e*v*c-o*n*g+e*a*g)*S,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*p-e*a*p)*S,t[12]=F*S,t[13]=(h*v*r-y*d*r+y*n*f-e*v*f-h*n*m+e*d*m)*S,t[14]=(y*a*r-o*v*r-y*n*l+e*v*l+o*n*m-e*a*m)*S,t[15]=(o*d*r-h*a*r+h*n*l-e*d*l-o*n*f+e*a*f)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,y=s*d,v=o*h,m=o*d,g=a*d,w=l*c,A=l*h,C=l*d,F=n.x,L=n.y,S=n.z;return r[0]=(1-(v+g))*F,r[1]=(p+C)*F,r[2]=(y-A)*F,r[3]=0,r[4]=(p-C)*L,r[5]=(1-(f+g))*L,r[6]=(m+w)*L,r[7]=0,r[8]=(y+A)*S,r[9]=(m-w)*S,r[10]=(1-(f+v))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Zs.set(r[0],r[1],r[2]).length();const o=Zs.set(r[4],r[5],r[6]).length(),a=Zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],di.copy(this);const c=1/s,h=1/o,d=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,e.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Qi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let p,y;if(a===Qi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Pc)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Qi){const l=this.elements,c=1/(e-t),h=1/(n-r),d=1/(o-s),f=(e+t)*c,p=(n+r)*h;let y,v;if(a===Qi)y=(o+s)*d,v=-2*d;else if(a===Pc)y=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zs=new V,di=new Oe,Iw=new V(0,0,0),Dw=new V(1,1,1),hr=new V,Pl=new V,qn=new V,pm=new Oe,mm=new Rs;class xi{constructor(t=0,e=0,n=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mm.setFromEuler(this),this.setFromQuaternion(mm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lw=0;const gm=new V,Qs=new Rs,Wi=new Oe,Il=new V,ua=new V,Nw=new V,Ow=new Rs,_m=new V(1,0,0),vm=new V(0,1,0),ym=new V(0,0,1),xm={type:"added"},Uw={type:"removed"},to={type:"childadded",child:null},Lu={type:"childremoved",child:null};class An extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new V,e=new xi,n=new Rs,r=new V(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new te}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(_m,t)}rotateY(t){return this.rotateOnAxis(vm,t)}rotateZ(t){return this.rotateOnAxis(ym,t)}translateOnAxis(t,e){return gm.copy(t).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_m,t)}translateY(t){return this.translateOnAxis(vm,t)}translateZ(t){return this.translateOnAxis(ym,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Il.copy(t):Il.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ua,Il,this.up):Wi.lookAt(Il,ua,this.up),this.quaternion.setFromRotationMatrix(Wi),r&&(Wi.extractRotation(r.matrixWorld),Qs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xm),to.child=t,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uw),Lu.child=t,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xm),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,Nw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Ow,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}An.DEFAULT_UP=new V(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new V,Xi=new V,Nu=new V,$i=new V,eo=new V,no=new V,Em=new V,Ou=new V,Uu=new V,Fu=new V;class wi{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),fi.subVectors(t,e),r.cross(fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){fi.subVectors(r,e),Xi.subVectors(n,e),Nu.subVectors(t,e);const o=fi.dot(fi),a=fi.dot(Xi),l=fi.dot(Nu),c=Xi.dot(Xi),h=Xi.dot(Nu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,y=(o*h-a*l)*f;return s.set(1-p-y,y,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static isFrontFacing(t,e,n,r){return fi.subVectors(n,e),Xi.subVectors(t,e),fi.cross(Xi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),fi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return wi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;eo.subVectors(r,n),no.subVectors(s,n),Ou.subVectors(t,n);const l=eo.dot(Ou),c=no.dot(Ou);if(l<=0&&c<=0)return e.copy(n);Uu.subVectors(t,r);const h=eo.dot(Uu),d=no.dot(Uu);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(eo,o);Fu.subVectors(t,s);const p=eo.dot(Fu),y=no.dot(Fu);if(y>=0&&p<=y)return e.copy(s);const v=p*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),e.copy(n).addScaledVector(no,a);const m=h*y-p*d;if(m<=0&&d-h>=0&&p-y>=0)return Em.subVectors(s,r),a=(d-h)/(d-h+(p-y)),e.copy(r).addScaledVector(Em,a);const g=1/(m+v+f);return o=v*g,a=f*g,e.copy(n).addScaledVector(eo,o).addScaledVector(no,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function ku(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=of(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ku(o,s,t+1/3),this.g=ku(o,s,t),this.b=ku(o,s,t-1/3)}return de.toWorkingColorSpace(this,r),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=U0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}copyLinearToSRGB(t){return this.r=Au(t.r),this.g=Au(t.g),this.b=Au(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return de.fromWorkingColorSpace(xn.copy(this),t),Math.round(je(xn.r*255,0,255))*65536+Math.round(je(xn.g*255,0,255))*256+Math.round(je(xn.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,s=xn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=fn){de.fromWorkingColorSpace(xn.copy(this),t);const e=xn.r,n=xn.g,r=xn.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(dr),this.setHSL(dr.h+t,dr.s+e,dr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dr),t.getHSL(Dl);const n=Aa(dr.h,Dl.h,e),r=Aa(dr.s,Dl.s,e),s=Aa(dr.l,Dl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ne;ne.NAMES=U0;let Fw=0;class qo extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Eo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Rh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(n.blending=this.blending),this.side!==Nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bh&&(n.blendSrc=this.blendSrc),this.blendDst!==Rh&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class za extends qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new V,Ll=new ht;class Ii{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=am,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return L0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ll.fromBufferAttribute(this,e),Ll.applyMatrix3(t),this.setXY(e,Ll.x,Ll.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fo(e,this.array)),e}setX(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fo(e,this.array)),e}setY(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fo(e,this.array)),e}setW(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),r=In(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),r=In(r,this.array),s=In(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==am&&(t.usage=this.usage),t}}class F0 extends Ii{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class k0 extends Ii{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ln extends Ii{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kw=0;const ei=new Oe,Vu=new An,io=new V,jn=new $o,ha=new $o,en=new V;class Ei extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D0(t)?k0:F0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return Vu.lookAt(t),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new af);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(jn.min,ha.min),jn.expandByPoint(en),en.addVectors(jn.max,ha.max),jn.expandByPoint(en)):(jn.expandByPoint(ha.min),jn.expandByPoint(ha.max))}jn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(t,c),en.add(io)),r=Math.max(r,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new V,l[T]=new V;const c=new V,h=new V,d=new V,f=new ht,p=new ht,y=new ht,v=new V,m=new V;function g(T,x,E){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,x),y.fromBufferAttribute(s,E),h.sub(c),d.sub(c),p.sub(f),y.sub(f);const b=1/(p.x*y.y-y.x*p.y);isFinite(b)&&(v.copy(h).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(b),a[T].add(v),a[x].add(v),a[E].add(v),l[T].add(m),l[x].add(m),l[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,x=w.length;T<x;++T){const E=w[T],b=E.start,D=E.count;for(let R=b,W=b+D;R<W;R+=3)g(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const A=new V,C=new V,F=new V,L=new V;function S(T){F.fromBufferAttribute(r,T),L.copy(F);const x=a[T];A.copy(x),A.sub(F.multiplyScalar(F.dot(x))).normalize(),C.crossVectors(L,x);const b=C.dot(l[T])<0?-1:1;o.setXYZW(T,A.x,A.y,A.z,b)}for(let T=0,x=w.length;T<x;++T){const E=w[T],b=E.start,D=E.count;for(let R=b,W=b+D;R<W;R+=3)S(t.getX(R+0)),S(t.getX(R+1)),S(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ii(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){const y=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let g=0;g<h;g++)f[y++]=c[p++]}return new Ii(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ei,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new Oe,qr=new lf,Nl=new af,Tm=new V,ro=new V,so=new V,oo=new V,Bu=new V,Ol=new V,Ul=new ht,Fl=new ht,kl=new ht,Mm=new V,Am=new V,wm=new V,Vl=new V,Bl=new V;class me extends An{constructor(t=new Ei,e=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Bu.fromBufferAttribute(d,t),o?Ol.addScaledVector(Bu,h):Ol.addScaledVector(Bu.sub(e),h))}e.add(Ol)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),qr.copy(t.ray).recast(t.near),!(Nl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Nl,Tm)===null||qr.origin.distanceToSquared(Tm)>(t.far-t.near)**2))&&(Sm.copy(s).invert(),qr.copy(t.ray).applyMatrix4(Sm),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=f.length;y<v;y++){const m=f[y],g=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let C=w,F=A;C<F;C+=3){const L=a.getX(C),S=a.getX(C+1),T=a.getX(C+2);r=zl(this,g,t,n,c,h,d,L,S,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=y,g=v;m<g;m+=3){const w=a.getX(m),A=a.getX(m+1),C=a.getX(m+2);r=zl(this,o,t,n,c,h,d,w,A,C),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=f.length;y<v;y++){const m=f[y],g=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let C=w,F=A;C<F;C+=3){const L=C,S=C+1,T=C+2;r=zl(this,g,t,n,c,h,d,L,S,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,g=v;m<g;m+=3){const w=m,A=m+1,C=m+2;r=zl(this,o,t,n,c,h,d,w,A,C),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Vw(i,t,e,n,r,s,o,a){let l;if(t.side===Fn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Nr,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Bl);return c<e.near||c>e.far?null:{distance:c,point:Bl.clone(),object:i}}function zl(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ro),i.getVertexPosition(l,so),i.getVertexPosition(c,oo);const h=Vw(i,t,e,n,ro,so,oo,Vl);if(h){r&&(Ul.fromBufferAttribute(r,a),Fl.fromBufferAttribute(r,l),kl.fromBufferAttribute(r,c),h.uv=wi.getInterpolation(Vl,ro,so,oo,Ul,Fl,kl,new ht)),s&&(Ul.fromBufferAttribute(s,a),Fl.fromBufferAttribute(s,l),kl.fromBufferAttribute(s,c),h.uv1=wi.getInterpolation(Vl,ro,so,oo,Ul,Fl,kl,new ht)),o&&(Mm.fromBufferAttribute(o,a),Am.fromBufferAttribute(o,l),wm.fromBufferAttribute(o,c),h.normal=wi.getInterpolation(Vl,ro,so,oo,Mm,Am,wm,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};wi.getNormal(ro,so,oo,d.normal),h.face=d}return h}class Cs extends Ei{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;y("z","y","x",-1,-1,n,e,t,o,s,0),y("z","y","x",1,-1,n,e,-t,o,s,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2));function y(v,m,g,w,A,C,F,L,S,T,x){const E=C/S,b=F/T,D=C/2,R=F/2,W=L/2,K=S+1,G=T+1;let tt=0,J=0;const gt=new V;for(let St=0;St<G;St++){const xt=St*b-R;for(let Nt=0;Nt<K;Nt++){const Vt=Nt*E-D;gt[v]=Vt*w,gt[m]=xt*A,gt[g]=W,c.push(gt.x,gt.y,gt.z),gt[v]=0,gt[m]=0,gt[g]=L>0?1:-1,h.push(gt.x,gt.y,gt.z),d.push(Nt/S),d.push(1-St/T),tt+=1}}for(let St=0;St<T;St++)for(let xt=0;xt<S;xt++){const Nt=f+xt+K*St,Vt=f+xt+K*(St+1),et=f+(xt+1)+K*(St+1),ot=f+(xt+1)+K*St;l.push(Nt,Vt,ot),l.push(Vt,et,ot),J+=6}a.addGroup(p,J,x),p+=J,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Dn(i){const t={};for(let e=0;e<i.length;e++){const n=Fo(i[e]);for(const r in n)t[r]=n[r]}return t}function Bw(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function V0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const zw={clone:Fo,merge:Dn};var Hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hw,this.fragmentShader=Gw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fo(t.uniforms),this.uniformsGroups=Bw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class B0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new V,bm=new ht,Rm=new ht;class ii extends B0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,e){return this.getViewBounds(t,bm,Rm),e.subVectors(Rm,bm)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ao=-90,lo=1;class Ww extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(ao,lo,t,e);r.layers=this.layers,this.add(r);const s=new ii(ao,lo,t,e);s.layers=this.layers,this.add(s);const o=new ii(ao,lo,t,e);o.layers=this.layers,this.add(o);const a=new ii(ao,lo,t,e);a.layers=this.layers,this.add(a);const l=new ii(ao,lo,t,e);l.layers=this.layers,this.add(l);const c=new ii(ao,lo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class z0 extends Nn{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Lo,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xw extends bs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new z0(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new Or({name:"CubemapFromEquirect",uniforms:Fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Ar});s.uniforms.tEquirect.value=e;const o=new me(r,s),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=gi),new Ww(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const zu=new V,$w=new V,qw=new te;class pr{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=zu.subVectors(n,e).cross($w.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qw.getNormalMatrix(t),r=this.coplanarPoint(zu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new af,Hl=new V;class uf{constructor(t=new pr,e=new pr,n=new pr,r=new pr,s=new pr,o=new pr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qi){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],y=r[9],v=r[10],m=r[11],g=r[12],w=r[13],A=r[14],C=r[15];if(n[0].setComponents(l-s,f-c,m-p,C-g).normalize(),n[1].setComponents(l+s,f+c,m+p,C+g).normalize(),n[2].setComponents(l+o,f+h,m+y,C+w).normalize(),n[3].setComponents(l-o,f-h,m-y,C-w).normalize(),n[4].setComponents(l-a,f-d,m-v,C-A).normalize(),e===Qi)n[5].setComponents(l+a,f+d,m+v,C+A).normalize();else if(e===Pc)n[5].setComponents(a,d,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(t){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(t.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Hl.x=r.normal.x>0?t.max.x:t.min.x,Hl.y=r.normal.y>0?t.max.y:t.min.y,Hl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function jw(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let p=0,y=f.length;p<y;p++){const v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class br extends Ei{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=t/a,f=e/l,p=[],y=[],v=[],m=[];for(let g=0;g<h;g++){const w=g*f-o;for(let A=0;A<c;A++){const C=A*d-s;y.push(C,-w,0),v.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<a;w++){const A=w+c*g,C=w+c*(g+1),F=w+1+c*(g+1),L=w+1+c*g;p.push(A,C,L),p.push(C,F,L)}this.setIndex(p),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kw=`#ifdef USE_ALPHAHASH
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
#endif`,Jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
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
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vb=`#define PI 3.141592653589793
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
} // validated`,yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`
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
}`,bb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bb=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,qb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,jb=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
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
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
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
}`,eR=`#if DEPTH_PACKING == 3200
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
}`,nR=`#define DISTANCE
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
}`,iR=`#define DISTANCE
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
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`uniform float scale;
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
}`,aR=`uniform vec3 diffuse;
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
}`,lR=`#include <common>
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
}`,cR=`uniform vec3 diffuse;
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
}`,uR=`#define LAMBERT
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
}`,hR=`#define LAMBERT
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
}`,dR=`#define MATCAP
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
}`,fR=`#define MATCAP
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
}`,pR=`#define NORMAL
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
}`,mR=`#define NORMAL
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
}`,gR=`#define PHONG
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
}`,_R=`#define PHONG
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
}`,vR=`#define STANDARD
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
}`,yR=`#define STANDARD
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
}`,xR=`#define TOON
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
}`,ER=`#define TOON
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
}`,SR=`uniform float size;
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
}`,TR=`uniform vec3 diffuse;
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
}`,MR=`#include <common>
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
}`,AR=`uniform vec3 color;
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
}`,wR=`uniform float rotation;
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
}`,bR=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Yw,alphahash_pars_fragment:Kw,alphamap_fragment:Jw,alphamap_pars_fragment:Zw,alphatest_fragment:Qw,alphatest_pars_fragment:tb,aomap_fragment:eb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:rb,begin_vertex:sb,beginnormal_vertex:ob,bsdfs:ab,iridescence_fragment:lb,bumpmap_pars_fragment:cb,clipping_planes_fragment:ub,clipping_planes_pars_fragment:hb,clipping_planes_pars_vertex:db,clipping_planes_vertex:fb,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:_b,common:vb,cube_uv_reflection_fragment:yb,defaultnormal_vertex:xb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Sb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Mb,colorspace_fragment:Ab,colorspace_pars_fragment:wb,envmap_fragment:bb,envmap_common_pars_fragment:Rb,envmap_pars_fragment:Cb,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:zb,envmap_vertex:Ib,fog_vertex:Db,fog_pars_vertex:Lb,fog_fragment:Nb,fog_pars_fragment:Ob,gradientmap_pars_fragment:Ub,lightmap_pars_fragment:Fb,lights_lambert_fragment:kb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Bb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Wb,lights_phong_pars_fragment:Xb,lights_physical_fragment:$b,lights_physical_pars_fragment:qb,lights_fragment_begin:jb,lights_fragment_maps:Yb,lights_fragment_end:Kb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:Zb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:t1,map_fragment:e1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:o1,morphinstance_vertex:a1,morphcolor_vertex:l1,morphnormal_vertex:c1,morphtarget_pars_vertex:u1,morphtarget_vertex:h1,normal_fragment_begin:d1,normal_fragment_maps:f1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:y1,clearcoat_pars_fragment:x1,iridescence_pars_fragment:E1,opaque_fragment:S1,packing:T1,premultiplied_alpha_fragment:M1,project_vertex:A1,dithering_fragment:w1,dithering_pars_fragment:b1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:C1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:I1,shadowmap_vertex:D1,shadowmask_pars_fragment:L1,skinbase_vertex:N1,skinning_pars_vertex:O1,skinning_vertex:U1,skinnormal_vertex:F1,specularmap_fragment:k1,specularmap_pars_fragment:V1,tonemapping_fragment:B1,tonemapping_pars_fragment:z1,transmission_fragment:H1,transmission_pars_fragment:G1,uv_pars_fragment:W1,uv_pars_vertex:X1,uv_vertex:$1,worldpos_vertex:q1,background_vert:j1,background_frag:Y1,backgroundCube_vert:K1,backgroundCube_frag:J1,cube_vert:Z1,cube_frag:Q1,depth_vert:tR,depth_frag:eR,distanceRGBA_vert:nR,distanceRGBA_frag:iR,equirect_vert:rR,equirect_frag:sR,linedashed_vert:oR,linedashed_frag:aR,meshbasic_vert:lR,meshbasic_frag:cR,meshlambert_vert:uR,meshlambert_frag:hR,meshmatcap_vert:dR,meshmatcap_frag:fR,meshnormal_vert:pR,meshnormal_frag:mR,meshphong_vert:gR,meshphong_frag:_R,meshphysical_vert:vR,meshphysical_frag:yR,meshtoon_vert:xR,meshtoon_frag:ER,points_vert:SR,points_frag:TR,shadow_vert:MR,shadow_frag:AR,sprite_vert:wR,sprite_frag:bR},Mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Mi={basic:{uniforms:Dn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Dn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Dn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Dn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Dn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Dn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Dn([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Dn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Dn([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Dn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Dn([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Dn([Mt.common,Mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Dn([Mt.lights,Mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Mi.physical={uniforms:Dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Gl={r:0,b:0,g:0},Yr=new xi,RR=new Oe;function CR(i,t,e,n,r,s,o){const a=new ne(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function y(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function v(w){let A=!1;const C=y(w);C===null?g(a,l):C&&C.isColor&&(g(C,1),A=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,A){const C=y(A);C&&(C.isCubeTexture||C.mapping===Zc)?(h===void 0&&(h=new me(new Cs(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:Fo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yr.copy(A.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(Yr)),h.material.toneMapped=de.getTransfer(C.colorSpace)!==Te,(d!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new me(new br(2,2),new Or({name:"BackgroundMaterial",uniforms:Fo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=de.getTransfer(C.colorSpace)!==Te,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,A){w.getRGB(Gl,V0(i)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),l=A,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:v,addToRenderList:m}}function PR(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,b,D,R,W){let K=!1;const G=d(R,D,b);s!==G&&(s=G,c(s.object)),K=p(E,R,D,W),K&&y(E,R,D,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,C(E,b,D,R),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,b,D){const R=D.wireframe===!0;let W=n[E.id];W===void 0&&(W={},n[E.id]=W);let K=W[b.id];K===void 0&&(K={},W[b.id]=K);let G=K[R];return G===void 0&&(G=f(l()),K[R]=G),G}function f(E){const b=[],D=[],R=[];for(let W=0;W<e;W++)b[W]=0,D[W]=0,R[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:R,object:E,attributes:{},index:null}}function p(E,b,D,R){const W=s.attributes,K=b.attributes;let G=0;const tt=D.getAttributes();for(const J in tt)if(tt[J].location>=0){const St=W[J];let xt=K[J];if(xt===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor)),St===void 0||St.attribute!==xt||xt&&St.data!==xt.data)return!0;G++}return s.attributesNum!==G||s.index!==R}function y(E,b,D,R){const W={},K=b.attributes;let G=0;const tt=D.getAttributes();for(const J in tt)if(tt[J].location>=0){let St=K[J];St===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(St=E.instanceColor));const xt={};xt.attribute=St,St&&St.data&&(xt.data=St.data),W[J]=xt,G++}s.attributes=W,s.attributesNum=G,s.index=R}function v(){const E=s.newAttributes;for(let b=0,D=E.length;b<D;b++)E[b]=0}function m(E){g(E,0)}function g(E,b){const D=s.newAttributes,R=s.enabledAttributes,W=s.attributeDivisors;D[E]=1,R[E]===0&&(i.enableVertexAttribArray(E),R[E]=1),W[E]!==b&&(i.vertexAttribDivisor(E,b),W[E]=b)}function w(){const E=s.newAttributes,b=s.enabledAttributes;for(let D=0,R=b.length;D<R;D++)b[D]!==E[D]&&(i.disableVertexAttribArray(D),b[D]=0)}function A(E,b,D,R,W,K,G){G===!0?i.vertexAttribIPointer(E,b,D,W,K):i.vertexAttribPointer(E,b,D,R,W,K)}function C(E,b,D,R){v();const W=R.attributes,K=D.getAttributes(),G=b.defaultAttributeValues;for(const tt in K){const J=K[tt];if(J.location>=0){let gt=W[tt];if(gt===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const St=gt.normalized,xt=gt.itemSize,Nt=t.get(gt);if(Nt===void 0)continue;const Vt=Nt.buffer,et=Nt.type,ot=Nt.bytesPerElement,Ct=et===i.INT||et===i.UNSIGNED_INT||gt.gpuType===Jd;if(gt.isInterleavedBufferAttribute){const _t=gt.data,Ht=_t.stride,Kt=gt.offset;if(_t.isInstancedInterleavedBuffer){for(let Bt=0;Bt<J.locationSize;Bt++)g(J.location+Bt,_t.meshPerAttribute);E.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<J.locationSize;Bt++)m(J.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Bt=0;Bt<J.locationSize;Bt++)A(J.location+Bt,xt/J.locationSize,et,St,Ht*ot,(Kt+xt/J.locationSize*Bt)*ot,Ct)}else{if(gt.isInstancedBufferAttribute){for(let _t=0;_t<J.locationSize;_t++)g(J.location+_t,gt.meshPerAttribute);E.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let _t=0;_t<J.locationSize;_t++)m(J.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let _t=0;_t<J.locationSize;_t++)A(J.location+_t,xt/J.locationSize,et,St,xt*ot,xt/J.locationSize*_t*ot,Ct)}}else if(G!==void 0){const St=G[tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(J.location,St);break;case 3:i.vertexAttrib3fv(J.location,St);break;case 4:i.vertexAttrib4fv(J.location,St);break;default:i.vertexAttrib1fv(J.location,St)}}}}w()}function F(){T();for(const E in n){const b=n[E];for(const D in b){const R=b[D];for(const W in R)h(R[W].object),delete R[W];delete b[D]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const b=n[E.id];for(const D in b){const R=b[D];for(const W in R)h(R[W].object),delete R[W];delete b[D]}delete n[E.id]}function S(E){for(const b in n){const D=n[b];if(D[E.id]===void 0)continue;const R=D[E.id];for(const W in R)h(R[W].object),delete R[W];delete D[E.id]}}function T(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:x,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function IR(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],h[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=h[v];for(let v=0;v<f.length;v++)e.update(y,n,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DR(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==vi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const S=L===rl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ir&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Zi&&!S)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:g,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:C,maxSamples:F}}function LR(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new pr,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const y=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||y===null||y.length===0||s&&!m)s?h(null):c();else{const w=s?0:n,A=w*4;let C=g.clippingState||null;l.value=C,C=h(y,f,A,p);for(let F=0;F!==A;++F)C[F]=e[F];g.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,y){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const g=p+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,C=p;A!==v;++A,C+=4)o.copy(d[A]).applyMatrix4(w,a),o.normal.toArray(m,C),m[C+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function NR(i){let t=new WeakMap;function e(o,a){return a===Ch?o.mapping=Lo:a===Ph&&(o.mapping=No),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ch||a===Ph)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xw(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class G0 extends B0{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const po=4,Cm=[.125,.215,.35,.446,.526,.582],ss=20,Hu=new G0,Pm=new ne;let Gu=null,Wu=0,Xu=0,$u=!1;const ts=(1+Math.sqrt(5))/2,co=1/ts,Im=[new V(-ts,co,0),new V(ts,co,0),new V(-co,0,ts),new V(co,0,ts),new V(0,ts,-co),new V(0,ts,co),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Dm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=$u,t.scissorTest=!1,Wl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Lo||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:rl,format:vi,colorSpace:Vr,depthBuffer:!1},r=Lm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OR(s)),this._blurMaterial=UR(s,t,e)}return r}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Hu)}_sceneToCubeUV(t,e,n,r){const a=new ii(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Pm),h.toneMapping=wr,h.autoClear=!1;const p=new za({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new me(new Cs,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Pm),v=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):w===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const A=this._cubeSize;Wl(r,w*A,g>2?A:0,A,A),h.setRenderTarget(r),v&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Lo||t.mapping===No;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Wl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Hu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Im[(r-s-1)%Im.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new me(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),v=s/y,m=isFinite(s)?1+Math.floor(h*v):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const g=[];let w=0;for(let S=0;S<ss;++S){const T=S/v,x=Math.exp(-T*T/2);g.push(x),S===0?w+=x:S<m&&(w+=2*x)}for(let S=0;S<g.length;S++)g[S]=g[S]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=y,f.mipInt.value=A-n;const C=this._sizeLods[r],F=3*C*(r>A-po?r-A+po:0),L=4*(this._cubeSize-C);Wl(e,F,L,3*C,2*C),l.setRenderTarget(e),l.render(d,Hu)}}function OR(i){const t=[],e=[],n=[];let r=i;const s=i-po+1+Cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-po?l=Cm[o-i+po-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,y=6,v=3,m=2,g=1,w=new Float32Array(v*y*p),A=new Float32Array(m*y*p),C=new Float32Array(g*y*p);for(let L=0;L<p;L++){const S=L%3*2/3-1,T=L>2?0:-1,x=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];w.set(x,v*y*L),A.set(f,m*y*L);const E=[L,L,L,L,L,L];C.set(E,g*y*L)}const F=new Ei;F.setAttribute("position",new Ii(w,v)),F.setAttribute("uv",new Ii(A,m)),F.setAttribute("faceIndex",new Ii(C,g)),t.push(F),r>po&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lm(i,t,e){const n=new bs(i,t,e);return n.texture.mapping=Zc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function UR(i,t,e){const n=new Float32Array(ss),r=new V(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Nm(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Om(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function hf(){return`

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
	`}function FR(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ch||l===Ph,h=l===Lo||l===No;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dm(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Dm(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kR(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&L0("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function VR(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const y in f.attributes)t.remove(f.attributes[y]);for(const y in f.morphAttributes){const v=f.morphAttributes[y];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)t.update(f[y],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const v=p[y];for(let m=0,g=v.length;m<g;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,y=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let A=0,C=w.length;A<C;A+=3){const F=w[A+0],L=w[A+1],S=w[A+2];f.push(F,L,L,S,S,F)}}else if(y!==void 0){const w=y.array;v=y.version;for(let A=0,C=w.length/3-1;A<C;A+=3){const F=A+0,L=A+1,S=A+2;f.push(F,L,L,S,S,F)}}else return;const m=new(D0(f)?k0:F0)(f,1);m.version=v;const g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function BR(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),e.update(p,n,1)}function c(f,p,y){y!==0&&(i.drawElementsInstanced(n,p,s,f*o,y),e.update(p,n,y))}function h(f,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,y);let m=0;for(let g=0;g<y;g++)m+=p[g];e.update(m,n,1)}function d(f,p,y,v){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,p[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,y);let g=0;for(let w=0;w<y;w++)g+=p[w];for(let w=0;w<v.length;w++)e.update(g,n,v[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zR(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function HR(i,t,e){const n=new WeakMap,r=new Je;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const y=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let C=0;y===!0&&(C=1),v===!0&&(C=2),m===!0&&(C=3);let F=a.attributes.position.count*C,L=1;F>t.maxTextureSize&&(L=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const S=new Float32Array(F*L*4*d),T=new O0(S,F,L,d);T.type=Zi,T.needsUpdate=!0;const x=C*4;for(let b=0;b<d;b++){const D=g[b],R=w[b],W=A[b],K=F*L*4*b;for(let G=0;G<D.count;G++){const tt=G*x;y===!0&&(r.fromBufferAttribute(D,G),S[K+tt+0]=r.x,S[K+tt+1]=r.y,S[K+tt+2]=r.z,S[K+tt+3]=0),v===!0&&(r.fromBufferAttribute(R,G),S[K+tt+4]=r.x,S[K+tt+5]=r.y,S[K+tt+6]=r.z,S[K+tt+7]=0),m===!0&&(r.fromBufferAttribute(W,G),S[K+tt+8]=r.x,S[K+tt+9]=r.y,S[K+tt+10]=r.z,S[K+tt+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:T,size:new ht(F,L)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const v=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function GR(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class W0 extends Nn{constructor(t,e,n,r,s,o,a,l,c,h=So){if(h!==So&&h!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===So&&(n=ws),n===void 0&&h===Uo&&(n=Oo),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const X0=new Nn,Um=new W0(1,1),$0=new O0,q0=new Cw,j0=new z0,Fm=[],km=[],Vm=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function jo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Fm[r];if(s===void 0&&(s=new Float32Array(r),Fm[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tu(i,t){let e=km[t];e===void 0&&(e=new Int32Array(t),km[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function WR(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function XR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function $R(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function qR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function jR(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;zm.set(n),i.uniformMatrix2fv(this.addr,!1,zm),tn(e,n)}}function YR(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Bm.set(n),i.uniformMatrix3fv(this.addr,!1,Bm),tn(e,n)}}function KR(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Vm.set(n),i.uniformMatrix4fv(this.addr,!1,Vm),tn(e,n)}}function JR(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ZR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function QR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function tC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function eC(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function iC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function rC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function sC(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Um.compareFunction=I0,s=Um):s=X0,e.setTexture2D(t||s,r)}function oC(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||q0,r)}function aC(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||j0,r)}function lC(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||$0,r)}function cC(i){switch(i){case 5126:return WR;case 35664:return XR;case 35665:return $R;case 35666:return qR;case 35674:return jR;case 35675:return YR;case 35676:return KR;case 5124:case 35670:return JR;case 35667:case 35671:return ZR;case 35668:case 35672:return QR;case 35669:case 35673:return tC;case 5125:return eC;case 36294:return nC;case 36295:return iC;case 36296:return rC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return aC;case 36289:case 36303:case 36311:case 36292:return lC}}function uC(i,t){i.uniform1fv(this.addr,t)}function hC(i,t){const e=jo(t,this.size,2);i.uniform2fv(this.addr,e)}function dC(i,t){const e=jo(t,this.size,3);i.uniform3fv(this.addr,e)}function fC(i,t){const e=jo(t,this.size,4);i.uniform4fv(this.addr,e)}function pC(i,t){const e=jo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mC(i,t){const e=jo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gC(i,t){const e=jo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _C(i,t){i.uniform1iv(this.addr,t)}function vC(i,t){i.uniform2iv(this.addr,t)}function yC(i,t){i.uniform3iv(this.addr,t)}function xC(i,t){i.uniform4iv(this.addr,t)}function EC(i,t){i.uniform1uiv(this.addr,t)}function SC(i,t){i.uniform2uiv(this.addr,t)}function TC(i,t){i.uniform3uiv(this.addr,t)}function MC(i,t){i.uniform4uiv(this.addr,t)}function AC(i,t,e){const n=this.cache,r=t.length,s=tu(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||X0,s[o])}function wC(i,t,e){const n=this.cache,r=t.length,s=tu(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||q0,s[o])}function bC(i,t,e){const n=this.cache,r=t.length,s=tu(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||j0,s[o])}function RC(i,t,e){const n=this.cache,r=t.length,s=tu(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||$0,s[o])}function CC(i){switch(i){case 5126:return uC;case 35664:return hC;case 35665:return dC;case 35666:return fC;case 35674:return pC;case 35675:return mC;case 35676:return gC;case 5124:case 35670:return _C;case 35667:case 35671:return vC;case 35668:case 35672:return yC;case 35669:case 35673:return xC;case 5125:return EC;case 36294:return SC;case 36295:return TC;case 36296:return MC;case 35678:case 36198:case 36298:case 36306:case 35682:return AC;case 35679:case 36299:case 36307:return wC;case 35680:case 36300:case 36308:case 36293:return bC;case 36289:case 36303:case 36311:case 36292:return RC}}class PC{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cC(e.type)}}class IC{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CC(e.type)}}class DC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function Hm(i,t){i.seq.push(t),i.map[t.id]=t}function LC(i,t,e){const n=i.name,r=n.length;for(qu.lastIndex=0;;){const s=qu.exec(n),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hm(e,c===void 0?new PC(a,i,t):new IC(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new DC(a),Hm(e,d)),e=d}}}class sc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);LC(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Gm(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const NC=37297;let OC=0;function UC(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function FC(i){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i);let n;switch(t===e?n="":t===Cc&&e===Rc?n="LinearDisplayP3ToLinearSRGB":t===Rc&&e===Cc&&(n="LinearSRGBToLinearDisplayP3"),i){case Vr:case Qc:return[n,"LinearTransferOETF"];case fn:case sf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wm(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+UC(i.getShaderSource(t),o)}else return r}function kC(i,t){const e=FC(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function VC(i,t){let e;switch(t){case zA:e="Linear";break;case HA:e="Reinhard";break;case GA:e="OptimizedCineon";break;case WA:e="ACESFilmic";break;case $A:e="AgX";break;case qA:e="Neutral";break;case XA:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function BC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function zC(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function HC(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ma(i){return i!==""}function Xm(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $m(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(i){return i.replace(GC,XC)}const WC=new Map;function XC(i,t){let e=Qt[t];if(e===void 0){const n=WC.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sd(e)}const $C=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(i){return i.replace($C,qC)}function qC(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jm(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jC(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===y0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fA?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function YC(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lo:case No:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KC(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function JC(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kd:t="ENVMAP_BLENDING_MULTIPLY";break;case VA:t="ENVMAP_BLENDING_MIX";break;case BA:t="ENVMAP_BLENDING_ADD";break}return t}function ZC(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function QC(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=jC(e),c=YC(e),h=KC(e),d=JC(e),f=ZC(e),p=BC(e),y=zC(s),v=r.createProgram();let m,g,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ma).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ma).join(`
`),g.length>0&&(g+=`
`)):(m=[jm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),g=[jm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wr?"#define TONE_MAPPING":"",e.toneMapping!==wr?Qt.tonemapping_pars_fragment:"",e.toneMapping!==wr?VC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,kC("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),o=sd(o),o=Xm(o,e),o=$m(o,e),a=sd(a),a=Xm(a,e),a=$m(a,e),o=qm(o),a=qm(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=w+m+o,C=w+g+a,F=Gm(r,r.VERTEX_SHADER,A),L=Gm(r,r.FRAGMENT_SHADER,C);r.attachShader(v,F),r.attachShader(v,L),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function S(b){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(F).trim(),W=r.getShaderInfoLog(L).trim();let K=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,F,L);else{const tt=Wm(r,F,"vertex"),J=Wm(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+tt+`
`+J)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(R===""||W==="")&&(G=!1);G&&(b.diagnostics={runnable:K,programLog:D,vertexShader:{log:R,prefix:m},fragmentShader:{log:W,prefix:g}})}r.deleteShader(F),r.deleteShader(L),T=new sc(r,v),x=HC(r,v)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let x;this.getAttributes=function(){return x===void 0&&S(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,NC)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OC++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=L,this}let tP=0;class eP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nP(t),e.set(t,n)),n}}class nP{constructor(t){this.id=tP++,this.code=t,this.usedTimes=0}}function iP(i,t,e,n,r,s,o){const a=new cf,l=new eP,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,b,D,R){const W=D.fog,K=R.geometry,G=x.isMeshStandardMaterial?D.environment:null,tt=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),J=tt&&tt.mapping===Zc?tt.image.height:null,gt=y[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const St=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=St!==void 0?St.length:0;let Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let Vt,et,ot,Ct;if(gt){const re=Mi[gt];Vt=re.vertexShader,et=re.fragmentShader}else Vt=x.vertexShader,et=x.fragmentShader,l.update(x),ot=l.getVertexShaderID(x),Ct=l.getFragmentShaderID(x);const _t=i.getRenderTarget(),Ht=R.isInstancedMesh===!0,Kt=R.isBatchedMesh===!0,Bt=!!x.map,Zt=!!x.matcap,U=!!tt,ft=!!x.aoMap,at=!!x.lightMap,yt=!!x.bumpMap,nt=!!x.normalMap,Ft=!!x.displacementMap,Et=!!x.emissiveMap,Rt=!!x.metalnessMap,k=!!x.roughnessMap,I=x.anisotropy>0,q=x.clearcoat>0,st=x.dispersion>0,it=x.iridescence>0,rt=x.sheen>0,At=x.transmission>0,ut=I&&!!x.anisotropyMap,Tt=q&&!!x.clearcoatMap,qt=q&&!!x.clearcoatNormalMap,dt=q&&!!x.clearcoatRoughnessMap,wt=it&&!!x.iridescenceMap,Jt=it&&!!x.iridescenceThicknessMap,Gt=rt&&!!x.sheenColorMap,Pt=rt&&!!x.sheenRoughnessMap,Wt=!!x.specularMap,Yt=!!x.specularColorMap,ge=!!x.specularIntensityMap,P=At&&!!x.transmissionMap,X=At&&!!x.thicknessMap,$=!!x.gradientMap,Z=!!x.alphaMap,lt=x.alphaTest>0,Lt=!!x.alphaHash,zt=!!x.extensions;let Me=wr;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ae={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:et,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:Ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Kt,batchingColor:Kt&&R._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&R.instanceColor!==null,instancingMorph:Ht&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Vr,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:Zt,envMap:U,envMapMode:U&&tt.mapping,envMapCubeUVHeight:J,aoMap:ft,lightMap:at,bumpMap:yt,normalMap:nt,displacementMap:f&&Ft,emissiveMap:Et,normalMapObjectSpace:nt&&x.normalMapType===JA,normalMapTangentSpace:nt&&x.normalMapType===rf,metalnessMap:Rt,roughnessMap:k,anisotropy:I,anisotropyMap:ut,clearcoat:q,clearcoatMap:Tt,clearcoatNormalMap:qt,clearcoatRoughnessMap:dt,dispersion:st,iridescence:it,iridescenceMap:wt,iridescenceThicknessMap:Jt,sheen:rt,sheenColorMap:Gt,sheenRoughnessMap:Pt,specularMap:Wt,specularColorMap:Yt,specularIntensityMap:ge,transmission:At,transmissionMap:P,thicknessMap:X,gradientMap:$,opaque:x.transparent===!1&&x.blending===Eo&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:Lt,combine:x.combine,mapUv:Bt&&v(x.map.channel),aoMapUv:ft&&v(x.aoMap.channel),lightMapUv:at&&v(x.lightMap.channel),bumpMapUv:yt&&v(x.bumpMap.channel),normalMapUv:nt&&v(x.normalMap.channel),displacementMapUv:Ft&&v(x.displacementMap.channel),emissiveMapUv:Et&&v(x.emissiveMap.channel),metalnessMapUv:Rt&&v(x.metalnessMap.channel),roughnessMapUv:k&&v(x.roughnessMap.channel),anisotropyMapUv:ut&&v(x.anisotropyMap.channel),clearcoatMapUv:Tt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&v(x.sheenRoughnessMap.channel),specularMapUv:Wt&&v(x.specularMap.channel),specularColorMapUv:Yt&&v(x.specularColorMap.channel),specularIntensityMapUv:ge&&v(x.specularIntensityMap.channel),transmissionMapUv:P&&v(x.transmissionMap.channel),thicknessMapUv:X&&v(x.thicknessMap.channel),alphaMapUv:Z&&v(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(nt||I),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!K.attributes.uv&&(Bt||Z),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===Te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ji,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:zt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&x.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)E.push(b),E.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(w(E,x),A(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function w(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function A(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),x.push(a.mask)}function C(x){const E=y[x.type];let b;if(E){const D=Mi[E];b=zw.clone(D.uniforms)}else b=x.uniforms;return b}function F(x,E){let b;for(let D=0,R=h.length;D<R;D++){const W=h[D];if(W.cacheKey===E){b=W,++b.usedTimes;break}}return b===void 0&&(b=new QC(i,E,x,s),h.push(b)),b}function L(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function S(x){l.remove(x)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:C,acquireProgram:F,releaseProgram:L,releaseShaderCache:S,programs:h,dispose:T}}function rP(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function sP(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ym(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Km(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,p,y,v,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:v,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=v,g.group=m),t++,g}function a(d,f,p,y,v,m){const g=o(d,f,p,y,v,m);p.transmission>0?n.push(g):p.transparent===!0?r.push(g):e.push(g)}function l(d,f,p,y,v,m){const g=o(d,f,p,y,v,m);p.transmission>0?n.unshift(g):p.transparent===!0?r.unshift(g):e.unshift(g)}function c(d,f){e.length>1&&e.sort(d||sP),n.length>1&&n.sort(f||Ym),r.length>1&&r.sort(f||Ym)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function oP(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Km,i.set(n,[o])):r>=s.length?(o=new Km,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function aP(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ne};break;case"SpotLight":e={position:new V,direction:new V,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function lP(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cP=0;function uP(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hP(i){const t=new aP,e=lP(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const r=new V,s=new Oe,o=new Oe;function a(c){let h=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,y=0,v=0,m=0,g=0,w=0,A=0,C=0,F=0,L=0,S=0;c.sort(uP);for(let x=0,E=c.length;x<E;x++){const b=c[x],D=b.color,R=b.intensity,W=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=D.r*R,d+=D.g*R,f+=D.b*R;else if(b.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(b.sh.coefficients[G],R);S++}else if(b.isDirectionalLight){const G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const tt=b.shadow,J=e.get(b);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=b.shadow.matrix,w++}n.directional[p]=G,p++}else if(b.isSpotLight){const G=t.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(D).multiplyScalar(R),G.distance=W,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,n.spot[v]=G;const tt=b.shadow;if(b.map&&(n.spotLightMap[F]=b.map,F++,tt.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[v]=tt.matrix,b.castShadow){const J=e.get(b);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=K,C++}v++}else if(b.isRectAreaLight){const G=t.get(b);G.color.copy(D).multiplyScalar(R),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=G,m++}else if(b.isPointLight){const G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const tt=b.shadow,J=e.get(b);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,J.shadowCameraNear=tt.camera.near,J.shadowCameraFar=tt.camera.far,n.pointShadow[y]=J,n.pointShadowMap[y]=K,n.pointShadowMatrix[y]=b.shadow.matrix,A++}n.point[y]=G,y++}else if(b.isHemisphereLight){const G=t.get(b);G.skyColor.copy(b.color).multiplyScalar(R),G.groundColor.copy(b.groundColor).multiplyScalar(R),n.hemi[g]=G,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==p||T.pointLength!==y||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==g||T.numDirectionalShadows!==w||T.numPointShadows!==A||T.numSpotShadows!==C||T.numSpotMaps!==F||T.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=y,n.hemi.length=g,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=C+F-L,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=S,T.directionalLength=p,T.pointLength=y,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=g,T.numDirectionalShadows=w,T.numPointShadows=A,T.numSpotShadows=C,T.numSpotMaps=F,T.numLightProbes=S,n.version=cP++)}function l(c,h){let d=0,f=0,p=0,y=0,v=0;const m=h.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){const A=c[g];if(A.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),d++}else if(A.isSpotLight){const C=n.spot[p];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const C=n.rectArea[y];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const C=n.hemi[v];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Jm(i){const t=new hP(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dP(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Jm(i),t.set(r,[a])):s>=o.length?(a=new Jm(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fP extends qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pP extends qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gP=`uniform sampler2D shadow_pass;
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
}`;function _P(i,t,e){let n=new uf;const r=new ht,s=new ht,o=new Je,a=new fP({depthPacking:KA}),l=new pP,c={},h=e.maxTextureSize,d={[Nr]:Fn,[Fn]:Nr,[Ji]:Ji},f=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:mP,fragmentShader:gP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const y=new Ei;y.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new me(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let g=this.type;this.render=function(L,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const x=i.getRenderTarget(),E=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ar),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const R=g!==ji&&this.type===ji,W=g===ji&&this.type!==ji;for(let K=0,G=L.length;K<G;K++){const tt=L[K],J=tt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const gt=J.getFrameExtents();if(r.multiply(gt),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/gt.x),r.x=s.x*gt.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/gt.y),r.y=s.y*gt.y,J.mapSize.y=s.y)),J.map===null||R===!0||W===!0){const xt=this.type!==ji?{minFilter:ri,magFilter:ri}:{};J.map!==null&&J.map.dispose(),J.map=new bs(r.x,r.y,xt),J.map.texture.name=tt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const St=J.getViewportCount();for(let xt=0;xt<St;xt++){const Nt=J.getViewport(xt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),D.viewport(o),J.updateMatrices(tt,xt),n=J.getFrustum(),C(S,T,J.camera,tt,this.type)}J.isPointLightShadow!==!0&&this.type===ji&&w(J,T),J.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(x,E,b)};function w(L,S){const T=t.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bs(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(S,null,T,f,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(S,null,T,p,v,null)}function A(L,S,T,x){let E=null;const b=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)E=b;else if(E=T.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=E.uuid,R=S.uuid;let W=c[D];W===void 0&&(W={},c[D]=W);let K=W[R];K===void 0&&(K=E.clone(),W[R]=K,S.addEventListener("dispose",F)),E=K}if(E.visible=S.visible,E.wireframe=S.wireframe,x===ji?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:d[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=i.properties.get(E);D.light=T}return E}function C(L,S,T,x,E){if(L.visible===!1)return;if(L.layers.test(S.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===ji)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const R=t.update(L),W=L.material;if(Array.isArray(W)){const K=R.groups;for(let G=0,tt=K.length;G<tt;G++){const J=K[G],gt=W[J.materialIndex];if(gt&&gt.visible){const St=A(L,gt,x,E);L.onBeforeShadow(i,L,S,T,R,St,J),i.renderBufferDirect(T,null,R,St,L,J),L.onAfterShadow(i,L,S,T,R,St,J)}}}else if(W.visible){const K=A(L,W,x,E);L.onBeforeShadow(i,L,S,T,R,K,null),i.renderBufferDirect(T,null,R,K,L,null),L.onAfterShadow(i,L,S,T,R,K,null)}}const D=L.children;for(let R=0,W=D.length;R<W;R++)C(D[R],S,T,x,E)}function F(L){L.target.removeEventListener("dispose",F);for(const T in c){const x=c[T],E=L.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function vP(i){function t(){let P=!1;const X=new Je;let $=null;const Z=new Je(0,0,0,0);return{setMask:function(lt){$!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){P=lt},setClear:function(lt,Lt,zt,Me,Ae){Ae===!0&&(lt*=Me,Lt*=Me,zt*=Me),X.set(lt,Lt,zt,Me),Z.equals(X)===!1&&(i.clearColor(lt,Lt,zt,Me),Z.copy(X))},reset:function(){P=!1,$=null,Z.set(-1,0,0,0)}}}function e(){let P=!1,X=null,$=null,Z=null;return{setTest:function(lt){lt?Ct(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(lt){X!==lt&&!P&&(i.depthMask(lt),X=lt)},setFunc:function(lt){if($!==lt){switch(lt){case DA:i.depthFunc(i.NEVER);break;case LA:i.depthFunc(i.ALWAYS);break;case NA:i.depthFunc(i.LESS);break;case wc:i.depthFunc(i.LEQUAL);break;case OA:i.depthFunc(i.EQUAL);break;case UA:i.depthFunc(i.GEQUAL);break;case FA:i.depthFunc(i.GREATER);break;case kA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=lt}},setLocked:function(lt){P=lt},setClear:function(lt){Z!==lt&&(i.clearDepth(lt),Z=lt)},reset:function(){P=!1,X=null,$=null,Z=null}}}function n(){let P=!1,X=null,$=null,Z=null,lt=null,Lt=null,zt=null,Me=null,Ae=null;return{setTest:function(re){P||(re?Ct(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(re){X!==re&&!P&&(i.stencilMask(re),X=re)},setFunc:function(re,Ee,Ce){($!==re||Z!==Ee||lt!==Ce)&&(i.stencilFunc(re,Ee,Ce),$=re,Z=Ee,lt=Ce)},setOp:function(re,Ee,Ce){(Lt!==re||zt!==Ee||Me!==Ce)&&(i.stencilOp(re,Ee,Ce),Lt=re,zt=Ee,Me=Ce)},setLocked:function(re){P=re},setClear:function(re){Ae!==re&&(i.clearStencil(re),Ae=re)},reset:function(){P=!1,X=null,$=null,Z=null,lt=null,Lt=null,zt=null,Me=null,Ae=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,y=!1,v=null,m=null,g=null,w=null,A=null,C=null,F=null,L=new ne(0,0,0),S=0,T=!1,x=null,E=null,b=null,D=null,R=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=G>=2);let J=null,gt={};const St=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Nt=new Je().fromArray(St),Vt=new Je().fromArray(xt);function et(P,X,$,Z){const lt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(P,Lt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<$;zt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(X+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Lt}const ot={};ot[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ct(i.DEPTH_TEST),s.setFunc(wc),yt(!1),nt(nm),Ct(i.CULL_FACE),ft(Ar);function Ct(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function _t(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Ht(P,X){return h[P]!==X?(i.bindFramebuffer(P,X),h[P]=X,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=X),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Kt(P,X){let $=f,Z=!1;if(P){$=d.get(X),$===void 0&&($=[],d.set(X,$));const lt=P.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,zt=lt.length;Lt<zt;Lt++)$[Lt]=i.COLOR_ATTACHMENT0+Lt;$.length=lt.length,Z=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Z=!0);Z&&i.drawBuffers($)}function Bt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Zt={[rs]:i.FUNC_ADD,[mA]:i.FUNC_SUBTRACT,[gA]:i.FUNC_REVERSE_SUBTRACT};Zt[_A]=i.MIN,Zt[vA]=i.MAX;const U={[yA]:i.ZERO,[xA]:i.ONE,[EA]:i.SRC_COLOR,[bh]:i.SRC_ALPHA,[bA]:i.SRC_ALPHA_SATURATE,[AA]:i.DST_COLOR,[TA]:i.DST_ALPHA,[SA]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[wA]:i.ONE_MINUS_DST_COLOR,[MA]:i.ONE_MINUS_DST_ALPHA,[RA]:i.CONSTANT_COLOR,[CA]:i.ONE_MINUS_CONSTANT_COLOR,[PA]:i.CONSTANT_ALPHA,[IA]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(P,X,$,Z,lt,Lt,zt,Me,Ae,re){if(P===Ar){y===!0&&(_t(i.BLEND),y=!1);return}if(y===!1&&(Ct(i.BLEND),y=!0),P!==pA){if(P!==v||re!==T){if((m!==rs||A!==rs)&&(i.blendEquation(i.FUNC_ADD),m=rs,A=rs),re)switch(P){case Eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case im:i.blendFunc(i.ONE,i.ONE);break;case rm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case im:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,w=null,C=null,F=null,L.set(0,0,0),S=0,v=P,T=re}return}lt=lt||X,Lt=Lt||$,zt=zt||Z,(X!==m||lt!==A)&&(i.blendEquationSeparate(Zt[X],Zt[lt]),m=X,A=lt),($!==g||Z!==w||Lt!==C||zt!==F)&&(i.blendFuncSeparate(U[$],U[Z],U[Lt],U[zt]),g=$,w=Z,C=Lt,F=zt),(Me.equals(L)===!1||Ae!==S)&&(i.blendColor(Me.r,Me.g,Me.b,Ae),L.copy(Me),S=Ae),v=P,T=!1}function at(P,X){P.side===Ji?_t(i.CULL_FACE):Ct(i.CULL_FACE);let $=P.side===Fn;X&&($=!$),yt($),P.blending===Eo&&P.transparent===!1?ft(Ar):ft(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function nt(P){P!==hA?(Ct(i.CULL_FACE),P!==E&&(P===nm?i.cullFace(i.BACK):P===dA?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),E=P}function Ft(P){P!==b&&(K&&i.lineWidth(P),b=P)}function Et(P,X,$){P?(Ct(i.POLYGON_OFFSET_FILL),(D!==X||R!==$)&&(i.polygonOffset(X,$),D=X,R=$)):_t(i.POLYGON_OFFSET_FILL)}function Rt(P){P?Ct(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function k(P){P===void 0&&(P=i.TEXTURE0+W-1),J!==P&&(i.activeTexture(P),J=P)}function I(P,X,$){$===void 0&&(J===null?$=i.TEXTURE0+W-1:$=J);let Z=gt[$];Z===void 0&&(Z={type:void 0,texture:void 0},gt[$]=Z),(Z.type!==P||Z.texture!==X)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(P,X||ot[P]),Z.type=P,Z.texture=X)}function q(){const P=gt[J];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(P){Nt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Nt.copy(P))}function Pt(P){Vt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Vt.copy(P))}function Wt(P,X){let $=l.get(X);$===void 0&&($=new WeakMap,l.set(X,$));let Z=$.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(X,P.name),$.set(P,Z))}function Yt(P,X){const Z=l.get(X).get(P);a.get(X)!==Z&&(i.uniformBlockBinding(X,Z,P.__bindingPointIndex),a.set(X,Z))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},J=null,gt={},h={},d=new WeakMap,f=[],p=null,y=!1,v=null,m=null,g=null,w=null,A=null,C=null,F=null,L=new ne(0,0,0),S=0,T=!1,x=null,E=null,b=null,D=null,R=null,Nt.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ct,disable:_t,bindFramebuffer:Ht,drawBuffers:Kt,useProgram:Bt,setBlending:ft,setMaterial:at,setFlipSided:yt,setCullFace:nt,setLineWidth:Ft,setPolygonOffset:Et,setScissorTest:Rt,activeTexture:k,bindTexture:I,unbindTexture:q,compressedTexImage2D:st,compressedTexImage3D:it,texImage2D:wt,texImage3D:Jt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:qt,texStorage3D:dt,texSubImage2D:rt,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:Tt,scissor:Gt,viewport:Pt,reset:ge}}function Zm(i,t,e,n){const r=yP(n);switch(e){case M0:return i*t;case w0:return i*t;case b0:return i*t*2;case R0:return i*t/r.components*r.byteLength;case tf:return i*t/r.components*r.byteLength;case C0:return i*t*2/r.components*r.byteLength;case ef:return i*t*2/r.components*r.byteLength;case A0:return i*t*3/r.components*r.byteLength;case vi:return i*t*4/r.components*r.byteLength;case nf:return i*t*4/r.components*r.byteLength;case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Uh:return Math.max(i,16)*Math.max(t,8)/4;case Lh:case Oh:return Math.max(i,8)*Math.max(t,8)/2;case Fh:case kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rc:case td:case ed:return Math.ceil(i/4)*Math.ceil(t/4)*16;case P0:case nd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case id:case rd:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yP(i){switch(i){case ir:case E0:return{byteLength:1,components:1};case ka:case S0:case rl:return{byteLength:2,components:1};case Zd:case Qd:return{byteLength:2,components:4};case ws:case Jd:case Zi:return{byteLength:4,components:1};case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xP(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,I){return p?new OffscreenCanvas(k,I):Ba("canvas")}function v(k,I,q){let st=1;const it=Rt(k);if((it.width>q||it.height>q)&&(st=q/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const rt=Math.floor(st*it.width),At=Math.floor(st*it.height);d===void 0&&(d=y(rt,At));const ut=I?y(rt,At):d;return ut.width=rt,ut.height=At,ut.getContext("2d").drawImage(k,0,0,rt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+rt+"x"+At+")."),ut}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),k;return k}function m(k){return k.generateMipmaps&&k.minFilter!==ri&&k.minFilter!==gi}function g(k){i.generateMipmap(k)}function w(k,I,q,st,it=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let rt=I;if(I===i.RED&&(q===i.FLOAT&&(rt=i.R32F),q===i.HALF_FLOAT&&(rt=i.R16F),q===i.UNSIGNED_BYTE&&(rt=i.R8)),I===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.R8UI),q===i.UNSIGNED_SHORT&&(rt=i.R16UI),q===i.UNSIGNED_INT&&(rt=i.R32UI),q===i.BYTE&&(rt=i.R8I),q===i.SHORT&&(rt=i.R16I),q===i.INT&&(rt=i.R32I)),I===i.RG&&(q===i.FLOAT&&(rt=i.RG32F),q===i.HALF_FLOAT&&(rt=i.RG16F),q===i.UNSIGNED_BYTE&&(rt=i.RG8)),I===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),q===i.UNSIGNED_INT&&(rt=i.RG32UI),q===i.BYTE&&(rt=i.RG8I),q===i.SHORT&&(rt=i.RG16I),q===i.INT&&(rt=i.RG32I)),I===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),I===i.RGBA){const At=it?bc:de.getTransfer(st);q===i.FLOAT&&(rt=i.RGBA32F),q===i.HALF_FLOAT&&(rt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(rt=At===Te?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(k,I){let q;return k?I===null||I===ws||I===Oo?q=i.DEPTH24_STENCIL8:I===Zi?q=i.DEPTH32F_STENCIL8:I===ka&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ws||I===Oo?q=i.DEPTH_COMPONENT24:I===Zi?q=i.DEPTH_COMPONENT32F:I===ka&&(q=i.DEPTH_COMPONENT16),q}function C(k,I){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==ri&&k.minFilter!==gi?Math.log2(Math.max(I.width,I.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?I.mipmaps.length:1}function F(k){const I=k.target;I.removeEventListener("dispose",F),S(I),I.isVideoTexture&&h.delete(I)}function L(k){const I=k.target;I.removeEventListener("dispose",L),x(I)}function S(k){const I=n.get(k);if(I.__webglInit===void 0)return;const q=k.source,st=f.get(q);if(st){const it=st[I.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(k),Object.keys(st).length===0&&f.delete(q)}n.remove(k)}function T(k){const I=n.get(k);i.deleteTexture(I.__webglTexture);const q=k.source,st=f.get(q);delete st[I.__cacheKey],o.memory.textures--}function x(k){const I=n.get(k);if(k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(I.__webglFramebuffer[st]))for(let it=0;it<I.__webglFramebuffer[st].length;it++)i.deleteFramebuffer(I.__webglFramebuffer[st][it]);else i.deleteFramebuffer(I.__webglFramebuffer[st]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[st])}else{if(Array.isArray(I.__webglFramebuffer))for(let st=0;st<I.__webglFramebuffer.length;st++)i.deleteFramebuffer(I.__webglFramebuffer[st]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let st=0;st<I.__webglColorRenderbuffer.length;st++)I.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[st]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const q=k.textures;for(let st=0,it=q.length;st<it;st++){const rt=n.get(q[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(q[st])}n.remove(k)}let E=0;function b(){E=0}function D(){const k=E;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),E+=1,k}function R(k){const I=[];return I.push(k.wrapS),I.push(k.wrapT),I.push(k.wrapR||0),I.push(k.magFilter),I.push(k.minFilter),I.push(k.anisotropy),I.push(k.internalFormat),I.push(k.format),I.push(k.type),I.push(k.generateMipmaps),I.push(k.premultiplyAlpha),I.push(k.flipY),I.push(k.unpackAlignment),I.push(k.colorSpace),I.join()}function W(k,I){const q=n.get(k);if(k.isVideoTexture&&Ft(k),k.isRenderTargetTexture===!1&&k.version>0&&q.__version!==k.version){const st=k.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(q,k,I);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+I)}function K(k,I){const q=n.get(k);if(k.version>0&&q.__version!==k.version){Vt(q,k,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+I)}function G(k,I){const q=n.get(k);if(k.version>0&&q.__version!==k.version){Vt(q,k,I);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+I)}function tt(k,I){const q=n.get(k);if(k.version>0&&q.__version!==k.version){et(q,k,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+I)}const J={[Ih]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[Dh]:i.MIRRORED_REPEAT},gt={[ri]:i.NEAREST,[jA]:i.NEAREST_MIPMAP_NEAREST,[Tl]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[Tu]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},St={[ZA]:i.NEVER,[rw]:i.ALWAYS,[QA]:i.LESS,[I0]:i.LEQUAL,[tw]:i.EQUAL,[iw]:i.GEQUAL,[ew]:i.GREATER,[nw]:i.NOTEQUAL};function xt(k,I){if(I.type===Zi&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===gi||I.magFilter===Tu||I.magFilter===Tl||I.magFilter===cs||I.minFilter===gi||I.minFilter===Tu||I.minFilter===Tl||I.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,J[I.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,J[I.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,J[I.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,gt[I.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,gt[I.minFilter]),I.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,St[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ri||I.minFilter!==Tl&&I.minFilter!==cs||I.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Nt(k,I){let q=!1;k.__webglInit===void 0&&(k.__webglInit=!0,I.addEventListener("dispose",F));const st=I.source;let it=f.get(st);it===void 0&&(it={},f.set(st,it));const rt=R(I);if(rt!==k.__cacheKey){it[rt]===void 0&&(it[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[rt].usedTimes++;const At=it[k.__cacheKey];At!==void 0&&(it[k.__cacheKey].usedTimes--,At.usedTimes===0&&T(I)),k.__cacheKey=rt,k.__webglTexture=it[rt].texture}return q}function Vt(k,I,q){let st=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(st=i.TEXTURE_3D);const it=Nt(k,I),rt=I.source;e.bindTexture(st,k.__webglTexture,i.TEXTURE0+q);const At=n.get(rt);if(rt.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const ut=de.getPrimaries(de.workingColorSpace),Tt=I.colorSpace===gr?null:de.getPrimaries(I.colorSpace),qt=I.colorSpace===gr||ut===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let dt=v(I.image,!1,r.maxTextureSize);dt=Et(I,dt);const wt=s.convert(I.format,I.colorSpace),Jt=s.convert(I.type);let Gt=w(I.internalFormat,wt,Jt,I.colorSpace,I.isVideoTexture);xt(st,I);let Pt;const Wt=I.mipmaps,Yt=I.isVideoTexture!==!0,ge=At.__version===void 0||it===!0,P=rt.dataReady,X=C(I,dt);if(I.isDepthTexture)Gt=A(I.format===Uo,I.type),ge&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,wt,Jt,null));else if(I.isDataTexture)if(Wt.length>0){Yt&&ge&&e.texStorage2D(i.TEXTURE_2D,X,Gt,Wt[0].width,Wt[0].height);for(let $=0,Z=Wt.length;$<Z;$++)Pt=Wt[$],Yt?P&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Jt,Pt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,Pt.width,Pt.height,0,wt,Jt,Pt.data);I.generateMipmaps=!1}else Yt?(ge&&e.texStorage2D(i.TEXTURE_2D,X,Gt,dt.width,dt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,wt,Jt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,wt,Jt,dt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Yt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,X,Gt,Wt[0].width,Wt[0].height,dt.depth);for(let $=0,Z=Wt.length;$<Z;$++)if(Pt=Wt[$],I.format!==vi)if(wt!==null)if(Yt){if(P)if(I.layerUpdates.size>0){const lt=Zm(Pt.width,Pt.height,I.format,I.type);for(const Lt of I.layerUpdates){const zt=Pt.data.subarray(Lt*lt/Pt.data.BYTES_PER_ELEMENT,(Lt+1)*lt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Lt,Pt.width,Pt.height,1,wt,zt,0,0)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Pt.width,Pt.height,dt.depth,wt,Pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Gt,Pt.width,Pt.height,dt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Pt.width,Pt.height,dt.depth,wt,Jt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Gt,Pt.width,Pt.height,dt.depth,0,wt,Jt,Pt.data)}else{Yt&&ge&&e.texStorage2D(i.TEXTURE_2D,X,Gt,Wt[0].width,Wt[0].height);for(let $=0,Z=Wt.length;$<Z;$++)Pt=Wt[$],I.format!==vi?wt!==null?Yt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Gt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?P&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Jt,Pt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,Pt.width,Pt.height,0,wt,Jt,Pt.data)}else if(I.isDataArrayTexture)if(Yt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,X,Gt,dt.width,dt.height,dt.depth),P)if(I.layerUpdates.size>0){const $=Zm(dt.width,dt.height,I.format,I.type);for(const Z of I.layerUpdates){const lt=dt.data.subarray(Z*$/dt.data.BYTES_PER_ELEMENT,(Z+1)*$/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,dt.width,dt.height,1,wt,Jt,lt)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,wt,Jt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,wt,Jt,dt.data);else if(I.isData3DTexture)Yt?(ge&&e.texStorage3D(i.TEXTURE_3D,X,Gt,dt.width,dt.height,dt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,wt,Jt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,wt,Jt,dt.data);else if(I.isFramebufferTexture){if(ge)if(Yt)e.texStorage2D(i.TEXTURE_2D,X,Gt,dt.width,dt.height);else{let $=dt.width,Z=dt.height;for(let lt=0;lt<X;lt++)e.texImage2D(i.TEXTURE_2D,lt,Gt,$,Z,0,wt,Jt,null),$>>=1,Z>>=1}}else if(Wt.length>0){if(Yt&&ge){const $=Rt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,X,Gt,$.width,$.height)}for(let $=0,Z=Wt.length;$<Z;$++)Pt=Wt[$],Yt?P&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Jt,Pt):e.texImage2D(i.TEXTURE_2D,$,Gt,wt,Jt,Pt);I.generateMipmaps=!1}else if(Yt){if(ge){const $=Rt(dt);e.texStorage2D(i.TEXTURE_2D,X,Gt,$.width,$.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Jt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,Jt,dt);m(I)&&g(st),At.__version=rt.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function et(k,I,q){if(I.image.length!==6)return;const st=Nt(k,I),it=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+q);const rt=n.get(it);if(it.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);const At=de.getPrimaries(de.workingColorSpace),ut=I.colorSpace===gr?null:de.getPrimaries(I.colorSpace),Tt=I.colorSpace===gr||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const qt=I.isCompressedTexture||I.image[0].isCompressedTexture,dt=I.image[0]&&I.image[0].isDataTexture,wt=[];for(let Z=0;Z<6;Z++)!qt&&!dt?wt[Z]=v(I.image[Z],!0,r.maxCubemapSize):wt[Z]=dt?I.image[Z].image:I.image[Z],wt[Z]=Et(I,wt[Z]);const Jt=wt[0],Gt=s.convert(I.format,I.colorSpace),Pt=s.convert(I.type),Wt=w(I.internalFormat,Gt,Pt,I.colorSpace),Yt=I.isVideoTexture!==!0,ge=rt.__version===void 0||st===!0,P=it.dataReady;let X=C(I,Jt);xt(i.TEXTURE_CUBE_MAP,I);let $;if(qt){Yt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Wt,Jt.width,Jt.height);for(let Z=0;Z<6;Z++){$=wt[Z].mipmaps;for(let lt=0;lt<$.length;lt++){const Lt=$[lt];I.format!==vi?Gt!==null?Yt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Lt.width,Lt.height,Gt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Lt.width,Lt.height,Gt,Pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,Lt.width,Lt.height,0,Gt,Pt,Lt.data)}}}else{if($=I.mipmaps,Yt&&ge){$.length>0&&X++;const Z=Rt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(dt){Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt[Z].width,wt[Z].height,Gt,Pt,wt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,wt[Z].width,wt[Z].height,0,Gt,Pt,wt[Z].data);for(let lt=0;lt<$.length;lt++){const zt=$[lt].image[Z].image;Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,zt.width,zt.height,Gt,Pt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,zt.width,zt.height,0,Gt,Pt,zt.data)}}else{Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Gt,Pt,wt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Gt,Pt,wt[Z]);for(let lt=0;lt<$.length;lt++){const Lt=$[lt];Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Gt,Pt,Lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,Gt,Pt,Lt.image[Z])}}}m(I)&&g(i.TEXTURE_CUBE_MAP),rt.__version=it.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function ot(k,I,q,st,it,rt){const At=s.convert(q.format,q.colorSpace),ut=s.convert(q.type),Tt=w(q.internalFormat,At,ut,q.colorSpace);if(!n.get(I).__hasExternalTextures){const dt=Math.max(1,I.width>>rt),wt=Math.max(1,I.height>>rt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,Tt,dt,wt,I.depth,0,At,ut,null):e.texImage2D(it,rt,Tt,dt,wt,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,it,n.get(q).__webglTexture,0,yt(I)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,it,n.get(q).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(k,I,q){if(i.bindRenderbuffer(i.RENDERBUFFER,k),I.depthBuffer){const st=I.depthTexture,it=st&&st.isDepthTexture?st.type:null,rt=A(I.stencilBuffer,it),At=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=yt(I);nt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,rt,I.width,I.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,rt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,k)}else{const st=I.textures;for(let it=0;it<st.length;it++){const rt=st[it],At=s.convert(rt.format,rt.colorSpace),ut=s.convert(rt.type),Tt=w(rt.internalFormat,At,ut,rt.colorSpace),qt=yt(I);q&&nt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Tt,I.width,I.height):nt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,Tt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(k,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),W(I.depthTexture,0);const st=n.get(I.depthTexture).__webglTexture,it=yt(I);if(I.depthTexture.format===So)nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(I.depthTexture.format===Uo)nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ht(k){const I=n.get(k),q=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!I.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_t(I.__webglFramebuffer,k)}else if(q){I.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[st]),I.__webglDepthbuffer[st]=i.createRenderbuffer(),Ct(I.__webglDepthbuffer[st],k,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=i.createRenderbuffer(),Ct(I.__webglDepthbuffer,k,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(k,I,q){const st=n.get(k);I!==void 0&&ot(st.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ht(k)}function Bt(k){const I=k.texture,q=n.get(k),st=n.get(I);k.addEventListener("dispose",L);const it=k.textures,rt=k.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=I.version,o.memory.textures++),rt){q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0){q.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<I.mipmaps.length;Tt++)q.__webglFramebuffer[ut][Tt]=i.createFramebuffer()}else q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){q.__webglFramebuffer=[];for(let ut=0;ut<I.mipmaps.length;ut++)q.__webglFramebuffer[ut]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,Tt=it.length;ut<Tt;ut++){const qt=n.get(it[ut]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(k.samples>0&&nt(k)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const Tt=it[ut];q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ut]);const qt=s.convert(Tt.format,Tt.colorSpace),dt=s.convert(Tt.type),wt=w(Tt.internalFormat,qt,dt,Tt.colorSpace,k.isXRRenderTarget===!0),Jt=yt(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,wt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(q.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),xt(i.TEXTURE_CUBE_MAP,I);for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)ot(q.__webglFramebuffer[ut][Tt],k,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else ot(q.__webglFramebuffer[ut],k,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(I)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,Tt=it.length;ut<Tt;ut++){const qt=it[ut],dt=n.get(qt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),xt(i.TEXTURE_2D,qt),ot(q.__webglFramebuffer,k,qt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(qt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ut=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),xt(ut,I),I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)ot(q.__webglFramebuffer[Tt],k,I,i.COLOR_ATTACHMENT0,ut,Tt);else ot(q.__webglFramebuffer,k,I,i.COLOR_ATTACHMENT0,ut,0);m(I)&&g(ut),e.unbindTexture()}k.depthBuffer&&Ht(k)}function Zt(k){const I=k.textures;for(let q=0,st=I.length;q<st;q++){const it=I[q];if(m(it)){const rt=k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(it).__webglTexture;e.bindTexture(rt,At),g(rt),e.unbindTexture()}}}const U=[],ft=[];function at(k){if(k.samples>0){if(nt(k)===!1){const I=k.textures,q=k.width,st=k.height;let it=i.COLOR_BUFFER_BIT;const rt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(k),ut=I.length>1;if(ut)for(let Tt=0;Tt<I.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<I.length;Tt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const qt=n.get(I[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,it,i.NEAREST),l===!0&&(U.length=0,ft.length=0,U.push(i.COLOR_ATTACHMENT0+Tt),k.depthBuffer&&k.resolveDepthBuffer===!1&&(U.push(rt),ft.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<I.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const qt=n.get(I[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){const I=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function yt(k){return Math.min(r.maxSamples,k.samples)}function nt(k){const I=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Ft(k){const I=o.render.frame;h.get(k)!==I&&(h.set(k,I),k.update())}function Et(k,I){const q=k.colorSpace,st=k.format,it=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||q!==Vr&&q!==gr&&(de.getTransfer(q)===Te?(st!==vi||it!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),I}function Rt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Kt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=nt}function EP(i,t){function e(n,r=gr){let s;const o=de.getTransfer(r);if(n===ir)return i.UNSIGNED_BYTE;if(n===Zd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===T0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===E0)return i.BYTE;if(n===S0)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Jd)return i.INT;if(n===ws)return i.UNSIGNED_INT;if(n===Zi)return i.FLOAT;if(n===rl)return i.HALF_FLOAT;if(n===M0)return i.ALPHA;if(n===A0)return i.RGB;if(n===vi)return i.RGBA;if(n===w0)return i.LUMINANCE;if(n===b0)return i.LUMINANCE_ALPHA;if(n===So)return i.DEPTH_COMPONENT;if(n===Uo)return i.DEPTH_STENCIL;if(n===R0)return i.RED;if(n===tf)return i.RED_INTEGER;if(n===C0)return i.RG;if(n===ef)return i.RG_INTEGER;if(n===nf)return i.RGBA_INTEGER;if(n===tc||n===ec||n===nc||n===ic)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Nh||n===Oh||n===Uh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fh||n===kh||n===Vh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fh||n===kh)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bh||n===zh||n===Hh||n===Gh||n===Wh||n===Xh||n===$h||n===qh||n===jh||n===Yh||n===Kh||n===Jh||n===Zh||n===Qh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===td||n===ed)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rc)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ed)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===P0||n===nd||n===id||n===rd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class SP extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ri extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TP={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&f>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const MP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AP=`
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

}`;class wP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Nn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Or({vertexShader:MP,fragmentShader:AP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bP extends Os{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,y=null;const v=new wP,m=e.getContextAttributes();let g=null,w=null;const A=[],C=[],F=new ht;let L=null;const S=new ii;S.layers.enable(1),S.viewport=new Je;const T=new ii;T.layers.enable(2),T.viewport=new Je;const x=[S,T],E=new SP;E.layers.enable(1),E.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=A[et];return ot===void 0&&(ot=new ju,A[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=A[et];return ot===void 0&&(ot=new ju,A[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=A[et];return ot===void 0&&(ot=new ju,A[et]=ot),ot.getHandSpace()};function R(et){const ot=C.indexOf(et.inputSource);if(ot===-1)return;const Ct=A[ot];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,c||o),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function W(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let et=0;et<A.length;et++){const ot=C[et];ot!==null&&(C[et]=null,A[et].disconnect(ot))}b=null,D=null,v.reset(),t.setRenderTarget(g),p=null,f=null,d=null,r=null,w=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new bs(p.framebufferWidth,p.framebufferHeight,{format:vi,type:ir,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Ct=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Uo:So,Ct=m.stencil?Oo:ws);const Ht={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(Ht),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new bs(f.textureWidth,f.textureHeight,{format:vi,type:ir,depthTexture:new W0(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Vt.setContext(r),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(et){for(let ot=0;ot<et.removed.length;ot++){const Ct=et.removed[ot],_t=C.indexOf(Ct);_t>=0&&(C[_t]=null,A[_t].disconnect(Ct))}for(let ot=0;ot<et.added.length;ot++){const Ct=et.added[ot];let _t=C.indexOf(Ct);if(_t===-1){for(let Kt=0;Kt<A.length;Kt++)if(Kt>=C.length){C.push(Ct),_t=Kt;break}else if(C[Kt]===null){C[Kt]=Ct,_t=Kt;break}if(_t===-1)break}const Ht=A[_t];Ht&&Ht.connect(Ct)}}const G=new V,tt=new V;function J(et,ot,Ct){G.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(Ct.matrixWorld);const _t=G.distanceTo(tt),Ht=ot.projectionMatrix.elements,Kt=Ct.projectionMatrix.elements,Bt=Ht[14]/(Ht[10]-1),Zt=Ht[14]/(Ht[10]+1),U=(Ht[9]+1)/Ht[5],ft=(Ht[9]-1)/Ht[5],at=(Ht[8]-1)/Ht[0],yt=(Kt[8]+1)/Kt[0],nt=Bt*at,Ft=Bt*yt,Et=_t/(-at+yt),Rt=Et*-at;ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Rt),et.translateZ(Et),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const k=Bt+Et,I=Zt+Et,q=nt-Rt,st=Ft+(_t-Rt),it=U*Zt/I*k,rt=ft*Zt/I*k;et.projectionMatrix.makePerspective(q,st,it,rt,k,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function gt(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;v.texture!==null&&(et.near=v.depthNear,et.far=v.depthFar),E.near=T.near=S.near=et.near,E.far=T.far=S.far=et.far,(b!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,D=E.far,S.near=b,S.far=D,T.near=b,T.far=D,S.updateProjectionMatrix(),T.updateProjectionMatrix(),et.updateProjectionMatrix());const ot=et.parent,Ct=E.cameras;gt(E,ot);for(let _t=0;_t<Ct.length;_t++)gt(Ct[_t],ot);Ct.length===2?J(E,S,T):E.projectionMatrix.copy(S.projectionMatrix),St(et,E,ot)};function St(et,ot,Ct){Ct===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Va*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let xt=null;function Nt(et,ot){if(h=ot.getViewerPose(c||o),y=ot,h!==null){const Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let _t=!1;Ct.length!==E.cameras.length&&(E.cameras.length=0,_t=!0);for(let Kt=0;Kt<Ct.length;Kt++){const Bt=Ct[Kt];let Zt=null;if(p!==null)Zt=p.getViewport(Bt);else{const ft=d.getViewSubImage(f,Bt);Zt=ft.viewport,Kt===0&&(t.setRenderTargetTextures(w,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(w))}let U=x[Kt];U===void 0&&(U=new ii,U.layers.enable(Kt),U.viewport=new Je,x[Kt]=U),U.matrix.fromArray(Bt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Bt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Kt===0&&(E.matrix.copy(U.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_t===!0&&E.cameras.push(U)}const Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Kt=d.getDepthInformation(Ct[0]);Kt&&Kt.isValid&&Kt.texture&&v.init(t,Kt,r.renderState)}}for(let Ct=0;Ct<A.length;Ct++){const _t=C[Ct],Ht=A[Ct];_t!==null&&Ht!==void 0&&Ht.update(_t,ot,c||o)}xt&&xt(et,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),y=null}const Vt=new H0;Vt.setAnimationLoop(Nt),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}}const Kr=new xi,RP=new Oe;function CP(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,V0(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,w,A,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,C)):g.isMeshMatcapMaterial?(s(m,g),y(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,w,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const w=t.get(g),A=w.envMap,C=w.envMapRotation;A&&(m.envMap.value=A,Kr.copy(C),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(RP.makeRotationFromEuler(Kr)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,w,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*w,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,w){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const w=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function PP(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const C=A.program;n.uniformBlockBinding(w,C)}function c(w,A){let C=r[w.id];C===void 0&&(y(w),C=h(w),r[w.id]=C,w.addEventListener("dispose",m));const F=A.program;n.updateUBOMapping(w,F);const L=t.render.frame;s[w.id]!==L&&(f(w),s[w.id]=L)}function h(w){const A=d();w.__bindingPointIndex=A;const C=i.createBuffer(),F=w.__size,L=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,F,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,C),C}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const A=r[w.id],C=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let L=0,S=C.length;L<S;L++){const T=Array.isArray(C[L])?C[L]:[C[L]];for(let x=0,E=T.length;x<E;x++){const b=T[x];if(p(b,L,x,F)===!0){const D=b.__offset,R=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let K=0;K<R.length;K++){const G=R[K],tt=v(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+W,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,A,C,F){const L=w.value,S=A+"_"+C;if(F[S]===void 0)return typeof L=="number"||typeof L=="boolean"?F[S]=L:F[S]=L.clone(),!0;{const T=F[S];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return F[S]=L,!0}else if(T.equals(L)===!1)return T.copy(L),!0}return!1}function y(w){const A=w.uniforms;let C=0;const F=16;for(let S=0,T=A.length;S<T;S++){const x=Array.isArray(A[S])?A[S]:[A[S]];for(let E=0,b=x.length;E<b;E++){const D=x[E],R=Array.isArray(D.value)?D.value:[D.value];for(let W=0,K=R.length;W<K;W++){const G=R[W],tt=v(G),J=C%F;J!==0&&F-J<tt.boundary&&(C+=F-J),D.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=C,C+=tt.storage}}}const L=C%F;return L>0&&(C+=F-L),w.__size=C,w.__cache={},this}function v(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){const A=w.target;A.removeEventListener("dispose",m);const C=o.indexOf(A.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function g(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}class IP{constructor(t={}){const{canvas:e=Sw(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const g=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=wr,this.toneMappingExposure=1;const A=this;let C=!1,F=0,L=0,S=null,T=-1,x=null;const E=new Je,b=new Je;let D=null;const R=new ne(0);let W=0,K=e.width,G=e.height,tt=1,J=null,gt=null;const St=new Je(0,0,K,G),xt=new Je(0,0,K,G);let Nt=!1;const Vt=new uf;let et=!1,ot=!1;const Ct=new Oe,_t=new V,Ht=new Je,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Zt(){return S===null?tt:1}let U=n;function ft(N,B){return e.getContext(N,B)}try{const N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yd}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){const B="webgl2";if(U=ft(B,N),U===null)throw ft(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let at,yt,nt,Ft,Et,Rt,k,I,q,st,it,rt,At,ut,Tt,qt,dt,wt,Jt,Gt,Pt,Wt,Yt,ge;function P(){at=new kR(U),at.init(),Wt=new EP(U,at),yt=new DR(U,at,t,Wt),nt=new vP(U),Ft=new zR(U),Et=new rP,Rt=new xP(U,at,nt,Et,yt,Wt,Ft),k=new NR(A),I=new FR(A),q=new jw(U),Yt=new PR(U,q),st=new VR(U,q,Ft,Yt),it=new GR(U,st,q,Ft),Jt=new HR(U,yt,Rt),qt=new LR(Et),rt=new iP(A,k,I,at,yt,Yt,qt),At=new CP(A,Et),ut=new oP,Tt=new dP(at),wt=new CR(A,k,I,nt,it,f,l),dt=new _P(A,it,yt),ge=new PP(U,Ft,yt,nt),Gt=new IR(U,at,Ft),Pt=new BR(U,at,Ft),Ft.programs=rt.programs,A.capabilities=yt,A.extensions=at,A.properties=Et,A.renderLists=ut,A.shadowMap=dt,A.state=nt,A.info=Ft}P();const X=new bP(A,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=at.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=at.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(N){N!==void 0&&(tt=N,this.setSize(K,G,!1))},this.getSize=function(N){return N.set(K,G)},this.setSize=function(N,B,j=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,G=B,e.width=Math.floor(N*tt),e.height=Math.floor(B*tt),j===!0&&(e.style.width=N+"px",e.style.height=B+"px"),this.setViewport(0,0,N,B)},this.getDrawingBufferSize=function(N){return N.set(K*tt,G*tt).floor()},this.setDrawingBufferSize=function(N,B,j){K=N,G=B,tt=j,e.width=Math.floor(N*j),e.height=Math.floor(B*j),this.setViewport(0,0,N,B)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(St)},this.setViewport=function(N,B,j,Y){N.isVector4?St.set(N.x,N.y,N.z,N.w):St.set(N,B,j,Y),nt.viewport(E.copy(St).multiplyScalar(tt).round())},this.getScissor=function(N){return N.copy(xt)},this.setScissor=function(N,B,j,Y){N.isVector4?xt.set(N.x,N.y,N.z,N.w):xt.set(N,B,j,Y),nt.scissor(b.copy(xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(N){nt.setScissorTest(Nt=N)},this.setOpaqueSort=function(N){J=N},this.setTransparentSort=function(N){gt=N},this.getClearColor=function(N){return N.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(N=!0,B=!0,j=!0){let Y=0;if(N){let z=!1;if(S!==null){const mt=S.texture.format;z=mt===nf||mt===ef||mt===tf}if(z){const mt=S.texture.type,bt=mt===ir||mt===ws||mt===ka||mt===Oo||mt===Zd||mt===Qd,Dt=wt.getClearColor(),It=wt.getClearAlpha(),Xt=Dt.r,$t=Dt.g,Ut=Dt.b;bt?(p[0]=Xt,p[1]=$t,p[2]=Ut,p[3]=It,U.clearBufferuiv(U.COLOR,0,p)):(y[0]=Xt,y[1]=$t,y[2]=Ut,y[3]=It,U.clearBufferiv(U.COLOR,0,y))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT),j&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Tt.dispose(),Et.dispose(),k.dispose(),I.dispose(),it.dispose(),Yt.dispose(),ge.dispose(),rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ce),X.removeEventListener("sessionend",we),Ge.stop()};function $(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const N=Ft.autoReset,B=dt.enabled,j=dt.autoUpdate,Y=dt.needsUpdate,z=dt.type;P(),Ft.autoReset=N,dt.enabled=B,dt.autoUpdate=j,dt.needsUpdate=Y,dt.type=z}function lt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Lt(N){const B=N.target;B.removeEventListener("dispose",Lt),zt(B)}function zt(N){Me(N),Et.remove(N)}function Me(N){const B=Et.get(N).programs;B!==void 0&&(B.forEach(function(j){rt.releaseProgram(j)}),N.isShaderMaterial&&rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,B,j,Y,z,mt){B===null&&(B=Kt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Dt=cl(N,B,j,Y,z);nt.setMaterial(Y,bt);let It=j.index,Xt=1;if(Y.wireframe===!0){if(It=st.getWireframeAttribute(j),It===void 0)return;Xt=2}const $t=j.drawRange,Ut=j.attributes.position;let ie=$t.start*Xt,_e=($t.start+$t.count)*Xt;mt!==null&&(ie=Math.max(ie,mt.start*Xt),_e=Math.min(_e,(mt.start+mt.count)*Xt)),It!==null?(ie=Math.max(ie,0),_e=Math.min(_e,It.count)):Ut!=null&&(ie=Math.max(ie,0),_e=Math.min(_e,Ut.count));const be=_e-ie;if(be<0||be===1/0)return;Yt.setup(z,Y,Dt,j,It);let mn,ce=Gt;if(It!==null&&(mn=q.get(It),ce=Pt,ce.setIndex(mn)),z.isMesh)Y.wireframe===!0?(nt.setLineWidth(Y.wireframeLinewidth*Zt()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(z.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),nt.setLineWidth(Ot*Zt()),z.isLineSegments?ce.setMode(U.LINES):z.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else z.isPoints?ce.setMode(U.POINTS):z.isSprite&&ce.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ce.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,ze=z._multiDrawCounts,ae=z._multiDrawCount,On=It?q.get(It).bytesPerElement:1,Bi=Et.get(Y).currentProgram.getUniforms();for(let Pn=0;Pn<ae;Pn++)Bi.setValue(U,"_gl_DrawID",Pn),ce.render(Ot[Pn]/On,ze[Pn])}else if(z.isInstancedMesh)ce.renderInstances(ie,be,z.count);else if(j.isInstancedBufferGeometry){const Ot=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ze=Math.min(j.instanceCount,Ot);ce.renderInstances(ie,be,ze)}else ce.render(ie,be)};function Ae(N,B,j){N.transparent===!0&&N.side===Ji&&N.forceSinglePass===!1?(N.side=Fn,N.needsUpdate=!0,Vs(N,B,j),N.side=Nr,N.needsUpdate=!0,Vs(N,B,j),N.side=Ji):Vs(N,B,j)}this.compile=function(N,B,j=null){j===null&&(j=N),m=Tt.get(j),m.init(B),w.push(m),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),N!==j&&N.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const Y=new Set;return N.traverse(function(z){const mt=z.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const Dt=mt[bt];Ae(Dt,j,z),Y.add(Dt)}else Ae(mt,j,z),Y.add(mt)}),w.pop(),m=null,Y},this.compileAsync=function(N,B,j=null){const Y=this.compile(N,B,j);return new Promise(z=>{function mt(){if(Y.forEach(function(bt){Et.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){z(N);return}setTimeout(mt,10)}at.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let re=null;function Ee(N){re&&re(N)}function Ce(){Ge.stop()}function we(){Ge.start()}const Ge=new H0;Ge.setAnimationLoop(Ee),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(N){re=N,X.setAnimationLoop(N),N===null?Ge.stop():Ge.start()},X.addEventListener("sessionstart",Ce),X.addEventListener("sessionend",we),this.render=function(N,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,B,S),m=Tt.get(N,w.length),m.init(B),w.push(m),Ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Vt.setFromProjectionMatrix(Ct),ot=this.localClippingEnabled,et=qt.init(this.clippingPlanes,ot),v=ut.get(N,g.length),v.init(),g.push(v),X.enabled===!0&&X.isPresenting===!0){const mt=A.xr.getDepthSensingMesh();mt!==null&&Cn(mt,B,-1/0,A.sortObjects)}Cn(N,B,0,A.sortObjects),v.finish(),A.sortObjects===!0&&v.sort(J,gt),Bt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Bt&&wt.addToRenderList(v,N),this.info.render.frame++,et===!0&&qt.beginShadows();const j=m.state.shadowsArray;dt.render(j,N,B),et===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,z=v.transmissive;if(m.setupLights(),B.isArrayCamera){const mt=B.cameras;if(z.length>0)for(let bt=0,Dt=mt.length;bt<Dt;bt++){const It=mt[bt];zr(Y,z,N,It)}Bt&&wt.render(N);for(let bt=0,Dt=mt.length;bt<Dt;bt++){const It=mt[bt];Wn(v,N,It,It.viewport)}}else z.length>0&&zr(Y,z,N,B),Bt&&wt.render(N),Wn(v,N,B);S!==null&&(Rt.updateMultisampleRenderTarget(S),Rt.updateRenderTargetMipmap(S)),N.isScene===!0&&N.onAfterRender(A,N,B),Yt.resetDefaultState(),T=-1,x=null,w.pop(),w.length>0?(m=w[w.length-1],et===!0&&qt.setGlobalState(A.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Cn(N,B,j,Y){if(N.visible===!1)return;if(N.layers.test(B.layers)){if(N.isGroup)j=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(B);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Vt.intersectsSprite(N)){Y&&Ht.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ct);const bt=it.update(N),Dt=N.material;Dt.visible&&v.push(N,bt,Dt,j,Ht.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Vt.intersectsObject(N))){const bt=it.update(N),Dt=N.material;if(Y&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ht.copy(N.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ht.copy(bt.boundingSphere.center)),Ht.applyMatrix4(N.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const It=bt.groups;for(let Xt=0,$t=It.length;Xt<$t;Xt++){const Ut=It[Xt],ie=Dt[Ut.materialIndex];ie&&ie.visible&&v.push(N,bt,ie,j,Ht.z,Ut)}}else Dt.visible&&v.push(N,bt,Dt,j,Ht.z,null)}}const mt=N.children;for(let bt=0,Dt=mt.length;bt<Dt;bt++)Cn(mt[bt],B,j,Y)}function Wn(N,B,j,Y){const z=N.opaque,mt=N.transmissive,bt=N.transparent;m.setupLightsView(j),et===!0&&qt.setGlobalState(A.clippingPlanes,j),Y&&nt.viewport(E.copy(Y)),z.length>0&&ks(z,B,j),mt.length>0&&ks(mt,B,j),bt.length>0&&ks(bt,B,j),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function zr(N,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new bs(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?rl:ir,minFilter:cs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const mt=m.state.transmissionRenderTarget[Y.id],bt=Y.viewport||E;mt.setSize(bt.z,bt.w);const Dt=A.getRenderTarget();A.setRenderTarget(mt),A.getClearColor(R),W=A.getClearAlpha(),W<1&&A.setClearColor(16777215,.5),Bt?wt.render(j):A.clear();const It=A.toneMapping;A.toneMapping=wr;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),et===!0&&qt.setGlobalState(A.clippingPlanes,Y),ks(N,j,Y),Rt.updateMultisampleRenderTarget(mt),Rt.updateRenderTargetMipmap(mt),at.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,ie=B.length;Ut<ie;Ut++){const _e=B[Ut],be=_e.object,mn=_e.geometry,ce=_e.material,Ot=_e.group;if(ce.side===Ji&&be.layers.test(Y.layers)){const ze=ce.side;ce.side=Fn,ce.needsUpdate=!0,Vi(be,j,Y,mn,ce,Ot),ce.side=ze,ce.needsUpdate=!0,$t=!0}}$t===!0&&(Rt.updateMultisampleRenderTarget(mt),Rt.updateRenderTargetMipmap(mt))}A.setRenderTarget(Dt),A.setClearColor(R,W),Xt!==void 0&&(Y.viewport=Xt),A.toneMapping=It}function ks(N,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,mt=N.length;z<mt;z++){const bt=N[z],Dt=bt.object,It=bt.geometry,Xt=Y===null?bt.material:Y,$t=bt.group;Dt.layers.test(j.layers)&&Vi(Dt,B,j,It,Xt,$t)}}function Vi(N,B,j,Y,z,mt){N.onBeforeRender(A,B,j,Y,z,mt),N.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),z.transparent===!0&&z.side===Ji&&z.forceSinglePass===!1?(z.side=Fn,z.needsUpdate=!0,A.renderBufferDirect(j,B,Y,z,N,mt),z.side=Nr,z.needsUpdate=!0,A.renderBufferDirect(j,B,Y,z,N,mt),z.side=Ji):A.renderBufferDirect(j,B,Y,z,N,mt),N.onAfterRender(A,B,j,Y,z,mt)}function Vs(N,B,j){B.isScene!==!0&&(B=Kt);const Y=Et.get(N),z=m.state.lights,mt=m.state.shadowsArray,bt=z.state.version,Dt=rt.getParameters(N,z.state,mt,B,j),It=rt.getProgramCacheKey(Dt);let Xt=Y.programs;Y.environment=N.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(N.isMeshStandardMaterial?I:k).get(N.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&N.envMap===null?B.environmentRotation:N.envMapRotation,Xt===void 0&&(N.addEventListener("dispose",Lt),Xt=new Map,Y.programs=Xt);let $t=Xt.get(It);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===bt)return Hr(N,Dt),$t}else Dt.uniforms=rt.getUniforms(N),N.onBeforeCompile(Dt,A),$t=rt.acquireProgram(Dt,It),Xt.set(It,$t),Y.uniforms=Dt.uniforms;const Ut=Y.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ut.clippingPlanes=qt.uniform),Hr(N,Dt),Y.needsLights=Bs(N),Y.lightsStateVersion=bt,Y.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function ll(N){if(N.uniformsList===null){const B=N.currentProgram.getUniforms();N.uniformsList=sc.seqWithValue(B.seq,N.uniforms)}return N.uniformsList}function Hr(N,B){const j=Et.get(N);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function cl(N,B,j,Y,z){B.isScene!==!0&&(B=Kt),Rt.resetTextureUnits();const mt=B.fog,bt=Y.isMeshStandardMaterial?B.environment:null,Dt=S===null?A.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Vr,It=(Y.isMeshStandardMaterial?I:k).get(Y.envMap||bt),Xt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$t=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!j.morphAttributes.position,ie=!!j.morphAttributes.normal,_e=!!j.morphAttributes.color;let be=wr;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(be=A.toneMapping);const mn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ce=mn!==void 0?mn.length:0,Ot=Et.get(Y),ze=m.state.lights;if(et===!0&&(ot===!0||N!==x)){const We=N===x&&Y.id===T;qt.setState(Y,N,We)}let ae=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ze.state.version||Ot.outputColorSpace!==Dt||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==It||Y.fog===!0&&Ot.fog!==mt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==qt.numPlanes||Ot.numIntersection!==qt.numIntersection)||Ot.vertexAlphas!==Xt||Ot.vertexTangents!==$t||Ot.morphTargets!==Ut||Ot.morphNormals!==ie||Ot.morphColors!==_e||Ot.toneMapping!==be||Ot.morphTargetsCount!==ce)&&(ae=!0):(ae=!0,Ot.__version=Y.version);let On=Ot.currentProgram;ae===!0&&(On=Vs(Y,B,z));let Bi=!1,Pn=!1,Ko=!1;const Pe=On.getUniforms(),ci=Ot.uniforms;if(nt.useProgram(On.program)&&(Bi=!0,Pn=!0,Ko=!0),Y.id!==T&&(T=Y.id,Pn=!0),Bi||x!==N){Pe.setValue(U,"projectionMatrix",N.projectionMatrix),Pe.setValue(U,"viewMatrix",N.matrixWorldInverse);const We=Pe.map.cameraPosition;We!==void 0&&We.setValue(U,_t.setFromMatrixPosition(N.matrixWorld)),yt.logarithmicDepthBuffer&&Pe.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pe.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),x!==N&&(x=N,Pn=!0,Ko=!0)}if(z.isSkinnedMesh){Pe.setOptional(U,z,"bindMatrix"),Pe.setOptional(U,z,"bindMatrixInverse");const We=z.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Pe.setValue(U,"boneTexture",We.boneTexture,Rt))}z.isBatchedMesh&&(Pe.setOptional(U,z,"batchingTexture"),Pe.setValue(U,"batchingTexture",z._matricesTexture,Rt),Pe.setOptional(U,z,"batchingIdTexture"),Pe.setValue(U,"batchingIdTexture",z._indirectTexture,Rt),Pe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Pe.setValue(U,"batchingColorTexture",z._colorsTexture,Rt));const Jo=j.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0)&&Jt.update(z,j,On),(Pn||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,Pe.setValue(U,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ci.envMap.value=It,ci.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(ci.envMapIntensity.value=B.environmentIntensity),Pn&&(Pe.setValue(U,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&Yo(ci,Ko),mt&&Y.fog===!0&&At.refreshFogUniforms(ci,mt),At.refreshMaterialUniforms(ci,Y,tt,G,m.state.transmissionRenderTarget[N.id]),sc.upload(U,ll(Ot),ci,Rt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(sc.upload(U,ll(Ot),ci,Rt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pe.setValue(U,"center",z.center),Pe.setValue(U,"modelViewMatrix",z.modelViewMatrix),Pe.setValue(U,"normalMatrix",z.normalMatrix),Pe.setValue(U,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const We=Y.uniformsGroups;for(let Xn=0,zs=We.length;Xn<zs;Xn++){const Gr=We[Xn];ge.update(Gr,On),ge.bind(Gr,On)}}return On}function Yo(N,B){N.ambientLightColor.needsUpdate=B,N.lightProbe.needsUpdate=B,N.directionalLights.needsUpdate=B,N.directionalLightShadows.needsUpdate=B,N.pointLights.needsUpdate=B,N.pointLightShadows.needsUpdate=B,N.spotLights.needsUpdate=B,N.spotLightShadows.needsUpdate=B,N.rectAreaLights.needsUpdate=B,N.hemisphereLights.needsUpdate=B}function Bs(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(N,B,j){Et.get(N.texture).__webglTexture=B,Et.get(N.depthTexture).__webglTexture=j;const Y=Et.get(N);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,B){const j=Et.get(N);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(N,B=0,j=0){S=N,F=B,L=j;let Y=!0,z=null,mt=!1,bt=!1;if(N){const It=Et.get(N);It.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):It.__webglFramebuffer===void 0?Rt.setupRenderTarget(N):It.__hasExternalTextures&&Rt.rebindTextures(N,Et.get(N.texture).__webglTexture,Et.get(N.depthTexture).__webglTexture);const Xt=N.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);const $t=Et.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray($t[B])?z=$t[B][j]:z=$t[B],mt=!0):N.samples>0&&Rt.useMultisampledRTT(N)===!1?z=Et.get(N).__webglMultisampledFramebuffer:Array.isArray($t)?z=$t[j]:z=$t,E.copy(N.viewport),b.copy(N.scissor),D=N.scissorTest}else E.copy(St).multiplyScalar(tt).floor(),b.copy(xt).multiplyScalar(tt).floor(),D=Nt;if(nt.bindFramebuffer(U.FRAMEBUFFER,z)&&Y&&nt.drawBuffers(N,z),nt.viewport(E),nt.scissor(b),nt.setScissorTest(D),mt){const It=Et.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,j)}else if(bt){const It=Et.get(N.texture),Xt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.__webglTexture,j||0,Xt)}T=-1},this.readRenderTargetPixels=function(N,B,j,Y,z,mt,bt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){nt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const It=N.texture,Xt=It.format,$t=It.type;if(!yt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=N.width-Y&&j>=0&&j<=N.height-z&&U.readPixels(B,j,Y,z,Wt.convert(Xt),Wt.convert($t),mt)}finally{const It=S!==null?Et.get(S).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(N,B,j,Y,z,mt,bt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){nt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const It=N.texture,Xt=It.format,$t=It.type;if(!yt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=N.width-Y&&j>=0&&j<=N.height-z){const Ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ut),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(B,j,Y,z,Wt.convert(Xt),Wt.convert($t),0),U.flush();const ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Tw(U,ie,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt)}finally{U.deleteBuffer(Ut),U.deleteSync(ie)}return mt}}finally{const It=S!==null?Et.get(S).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(N,B=null,j=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,N=arguments[1]);const Y=Math.pow(2,-j),z=Math.floor(N.image.width*Y),mt=Math.floor(N.image.height*Y),bt=B!==null?B.x:0,Dt=B!==null?B.y:0;Rt.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,bt,Dt,z,mt),nt.unbindTexture()},this.copyTextureToTexture=function(N,B,j=null,Y=null,z=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1],B=arguments[2],z=arguments[3]||0,j=null);let mt,bt,Dt,It,Xt,$t;j!==null?(mt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Dt=j.min.x,It=j.min.y):(mt=N.image.width,bt=N.image.height,Dt=0,It=0),Y!==null?(Xt=Y.x,$t=Y.y):(Xt=0,$t=0);const Ut=Wt.convert(B.format),ie=Wt.convert(B.type);Rt.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const _e=U.getParameter(U.UNPACK_ROW_LENGTH),be=U.getParameter(U.UNPACK_IMAGE_HEIGHT),mn=U.getParameter(U.UNPACK_SKIP_PIXELS),ce=U.getParameter(U.UNPACK_SKIP_ROWS),Ot=U.getParameter(U.UNPACK_SKIP_IMAGES),ze=N.isCompressedTexture?N.mipmaps[z]:N.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ze.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ze.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Xt,$t,mt,bt,Ut,ie,ze.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Xt,$t,ze.width,ze.height,Ut,ze.data):U.texSubImage2D(U.TEXTURE_2D,z,Xt,$t,mt,bt,Ut,ie,ze),U.pixelStorei(U.UNPACK_ROW_LENGTH,_e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(N,B,j=null,Y=null,z=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,N=arguments[2],B=arguments[3],z=arguments[4]||0);let mt,bt,Dt,It,Xt,$t,Ut,ie,_e;const be=N.isCompressedTexture?N.mipmaps[z]:N.image;j!==null?(mt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Dt=j.max.z-j.min.z,It=j.min.x,Xt=j.min.y,$t=j.min.z):(mt=be.width,bt=be.height,Dt=be.depth,It=0,Xt=0,$t=0),Y!==null?(Ut=Y.x,ie=Y.y,_e=Y.z):(Ut=0,ie=0,_e=0);const mn=Wt.convert(B.format),ce=Wt.convert(B.type);let Ot;if(B.isData3DTexture)Rt.setTexture3D(B,0),Ot=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Rt.setTexture2DArray(B,0),Ot=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ze=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),On=U.getParameter(U.UNPACK_SKIP_PIXELS),Bi=U.getParameter(U.UNPACK_SKIP_ROWS),Pn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,It),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t),N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Ot,z,Ut,ie,_e,mt,bt,Dt,mn,ce,be.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,z,Ut,ie,_e,mt,bt,Dt,mn,be.data):U.texSubImage3D(Ot,z,Ut,ie,_e,mt,bt,Dt,mn,ce,be),U.pixelStorei(U.UNPACK_ROW_LENGTH,ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,On),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pn),z===0&&B.generateMipmaps&&U.generateMipmap(Ot),nt.unbindTexture()},this.initRenderTarget=function(N){Et.get(N).__webglFramebuffer===void 0&&Rt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Rt.setTextureCube(N,0):N.isData3DTexture?Rt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Rt.setTexture2DArray(N,0):Rt.setTexture2D(N,0),nt.unbindTexture()},this.resetState=function(){F=0,L=0,S=null,nt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===sf?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Qc?"display-p3":"srgb"}}class DP extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ht:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new V,r=[],s=[],o=[],a=new V,l=new Oe;for(let p=0;p<=t;p++){const y=p/t;r[p]=this.getTangentAt(y,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(je(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let y=1;y<=t;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class df extends ki{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class LP extends df{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ff(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Xl=new V,Yu=new ff,Ku=new ff,Ju=new ff;class NP extends ki{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new V){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Xl.subVectors(r[0],r[1]).add(r[0]),c=Xl);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Xl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Xl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),y<1e-4&&(y=v),m<1e-4&&(m=v),Yu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,y,v,m),Ku.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,y,v,m),Ju.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,y,v,m)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ku.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ju.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Yu.calc(l),Ku.calc(l),Ju.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new V().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qm(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function OP(i,t){const e=1-i;return e*e*t}function UP(i,t){return 2*(1-i)*i*t}function FP(i,t){return i*i*t}function wa(i,t,e,n){return OP(i,t)+UP(i,e)+FP(i,n)}function kP(i,t){const e=1-i;return e*e*e*t}function VP(i,t){const e=1-i;return 3*e*e*i*t}function BP(i,t){return 3*(1-i)*i*i*t}function zP(i,t){return i*i*i*t}function ba(i,t,e,n,r){return kP(i,t)+VP(i,e)+BP(i,n)+zP(i,r)}class Y0 extends ki{constructor(t=new ht,e=new ht,n=new ht,r=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ba(t,r.x,s.x,o.x,a.x),ba(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class HP extends ki{constructor(t=new V,e=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new V){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ba(t,r.x,s.x,o.x,a.x),ba(t,r.y,s.y,o.y,a.y),ba(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class K0 extends ki{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class GP extends ki{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J0 extends ki{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(wa(t,r.x,s.x,o.x),wa(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class WP extends ki{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(wa(t,r.x,s.x,o.x),wa(t,r.y,s.y,o.y),wa(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z0 extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Qm(a,l.x,c.x,h.x,d.x),Qm(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ht().fromArray(r))}return this}}var od=Object.freeze({__proto__:null,ArcCurve:LP,CatmullRomCurve3:NP,CubicBezierCurve:Y0,CubicBezierCurve3:HP,EllipseCurve:df,LineCurve:K0,LineCurve3:GP,QuadraticBezierCurve:J0,QuadraticBezierCurve3:WP,SplineCurve:Z0});class XP extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new od[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new od[r.type]().fromJSON(r))}return this}}class Ic extends XP{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new K0(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new J0(this.currentPoint.clone(),new ht(t,e),new ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Y0(this.currentPoint.clone(),new ht(t,e),new ht(n,r),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Z0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new df(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pf extends Ei{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=je(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,d=new V,f=new ht,p=new V,y=new V,v=new V;let m=0,g=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,g=t[w+1].y-t[w].y,p.x=g*1,p.y=-m,p.z=g*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[w+1].x-t[w].x,g=t[w+1].y-t[w].y,p.x=g*1,p.y=-m,p.z=g*0,y.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(y)}for(let w=0;w<=e;w++){const A=n+w*h*r,C=Math.sin(A),F=Math.cos(A);for(let L=0;L<=t.length-1;L++){d.x=t[L].x*C,d.y=t[L].y,d.z=t[L].x*F,o.push(d.x,d.y,d.z),f.x=w/e,f.y=L/(t.length-1),a.push(f.x,f.y);const S=l[3*L+0]*C,T=l[3*L+1],x=l[3*L+0]*F;c.push(S,T,x)}}for(let w=0;w<e;w++)for(let A=0;A<t.length-1;A++){const C=A+w*t.length,F=C,L=C+t.length,S=C+t.length+1,T=C+1;s.push(F,L,T),s.push(S,T,L)}this.setIndex(s),this.setAttribute("position",new ln(o,3)),this.setAttribute("uv",new ln(a,2)),this.setAttribute("normal",new ln(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pf(t.points,t.segments,t.phiStart,t.phiLength)}}class mf extends pf{constructor(t=1,e=1,n=4,r=8){const s=new Ic;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new mf(t.radius,t.length,t.capSegments,t.radialSegments)}}class gf extends Ei{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new V,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(a,3)),this.setAttribute("uv",new ln(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _r extends Ei{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let y=0;const v=[],m=n/2;let g=0;w(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(p,2));function w(){const C=new V,F=new V;let L=0;const S=(e-t)/n;for(let T=0;T<=s;T++){const x=[],E=T/s,b=E*(e-t)+t;for(let D=0;D<=r;D++){const R=D/r,W=R*l+a,K=Math.sin(W),G=Math.cos(W);F.x=b*K,F.y=-E*n+m,F.z=b*G,d.push(F.x,F.y,F.z),C.set(K,S,G).normalize(),f.push(C.x,C.y,C.z),p.push(R,1-E),x.push(y++)}v.push(x)}for(let T=0;T<r;T++)for(let x=0;x<s;x++){const E=v[x][T],b=v[x+1][T],D=v[x+1][T+1],R=v[x][T+1];h.push(E,b,R),h.push(b,D,R),L+=6}c.addGroup(g,L,0),g+=L}function A(C){const F=y,L=new ht,S=new V;let T=0;const x=C===!0?t:e,E=C===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),y++;const b=y;for(let D=0;D<=r;D++){const W=D/r*l+a,K=Math.cos(W),G=Math.sin(W);S.x=x*G,S.y=m*E,S.z=x*K,d.push(S.x,S.y,S.z),f.push(0,E,0),L.x=K*.5+.5,L.y=G*.5*E+.5,p.push(L.x,L.y),y++}for(let D=0;D<r;D++){const R=F+D,W=b+D;C===!0?h.push(W,W+1,R):h.push(W+1,W,R),T+=3}c.addGroup(g,T,C===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _f extends _r{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _f(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oc extends Ic{constructor(t){super(t),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Ic().fromJSON(r))}return this}}const $P={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Q0(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,f,p;if(n&&(s=JP(i,t,s,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let y=e;y<r;y+=e)d=i[y],f=i[y+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ha(s,o,e,a,l,p,0),o}};function Q0(i,t,e,n,r){let s,o;if(r===lI(i,t,e,n)>0)for(s=t;s<e;s+=n)o=tg(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=tg(s,i[s],i[s+1],o);return o&&eu(o,o.next)&&(Wa(o),o=o.next),o}function Ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(eu(e,e.next)||Le(e.prev,e,e.next)===0)){if(Wa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ha(i,t,e,n,r,s,o){if(!i)return;!o&&s&&nI(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?jP(i,n,r,s):qP(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Wa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=YP(Ps(i),t,e),Ha(i,t,e,n,r,s,2)):o===2&&KP(i,t,e,n,r,s):Ha(Ps(i),t,e,n,r,s,1);break}}}function qP(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=n.next;for(;y!==t;){if(y.x>=h&&y.x<=f&&y.y>=d&&y.y<=p&&mo(r,a,s,l,o,c,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function jP(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Le(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,y=h<d?h<f?h:f:d<f?d:f,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>f?h:f:d>f?d:f,g=ad(p,y,t,e,n),w=ad(v,m,t,e,n);let A=i.prevZ,C=i.nextZ;for(;A&&A.z>=g&&C&&C.z<=w;){if(A.x>=p&&A.x<=v&&A.y>=y&&A.y<=m&&A!==r&&A!==o&&mo(a,h,l,d,c,f,A.x,A.y)&&Le(A.prev,A,A.next)>=0||(A=A.prevZ,C.x>=p&&C.x<=v&&C.y>=y&&C.y<=m&&C!==r&&C!==o&&mo(a,h,l,d,c,f,C.x,C.y)&&Le(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;A&&A.z>=g;){if(A.x>=p&&A.x<=v&&A.y>=y&&A.y<=m&&A!==r&&A!==o&&mo(a,h,l,d,c,f,A.x,A.y)&&Le(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;C&&C.z<=w;){if(C.x>=p&&C.x<=v&&C.y>=y&&C.y<=m&&C!==r&&C!==o&&mo(a,h,l,d,c,f,C.x,C.y)&&Le(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function YP(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!eu(r,s)&&tv(r,n,n.next,s)&&Ga(r,s)&&Ga(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Wa(n),Wa(n.next),n=i=s),n=n.next}while(n!==i);return Ps(n)}function KP(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sI(o,a)){let l=ev(o,a);o=Ps(o,o.next),l=Ps(l,l.next),Ha(o,t,e,n,r,s,0),Ha(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function JP(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Q0(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(rI(c));for(r.sort(ZP),s=0;s<r.length;s++)e=QP(r[s],e);return e}function ZP(i,t){return i.x-t.x}function QP(i,t){const e=tI(i,t);if(!e)return t;const n=ev(e,i);return Ps(n,n.next),Ps(e,e.next)}function tI(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,d;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&mo(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),Ga(e,i)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&eI(r,e)))&&(r=e,h=d)),e=e.next;while(e!==a);return r}function eI(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function nI(i,t,e,n){let r=i;do r.z===0&&(r.z=ad(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,iI(r)}function iI(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function ad(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rI(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mo(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function sI(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!oI(i,t)&&(Ga(i,t)&&Ga(t,i)&&aI(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||eu(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function eu(i,t){return i.x===t.x&&i.y===t.y}function tv(i,t,e,n){const r=ql(Le(i,t,e)),s=ql(Le(i,t,n)),o=ql(Le(e,n,i)),a=ql(Le(e,n,t));return!!(r!==s&&o!==a||r===0&&$l(i,e,t)||s===0&&$l(i,n,t)||o===0&&$l(e,i,n)||a===0&&$l(e,t,n))}function $l(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ql(i){return i>0?1:i<0?-1:0}function oI(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tv(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ga(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function aI(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ev(i,t){const e=new ld(i.i,i.x,i.y),n=new ld(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function tg(i,t,e,n){const r=new ld(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ld(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lI(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Mo{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Mo.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];eg(t),ng(n,t);let o=t.length;e.forEach(eg);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,ng(n,e[l]);const a=$P.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function eg(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ng(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class vf extends Ei{constructor(t=new oc([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ln(r,3)),this.setAttribute("uv",new ln(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:cI;let A,C=!1,F,L,S,T;g&&(A=g.getSpacedPoints(h),C=!0,f=!1,F=g.computeFrenetFrames(h,!1),L=new V,S=new V,T=new V),f||(m=0,p=0,y=0,v=0);const x=a.extractPoints(c);let E=x.shape;const b=x.holes;if(!Mo.isClockWise(E)){E=E.reverse();for(let U=0,ft=b.length;U<ft;U++){const at=b[U];Mo.isClockWise(at)&&(b[U]=at.reverse())}}const R=Mo.triangulateShape(E,b),W=E;for(let U=0,ft=b.length;U<ft;U++){const at=b[U];E=E.concat(at)}function K(U,ft,at){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ft,at)}const G=E.length,tt=R.length;function J(U,ft,at){let yt,nt,Ft;const Et=U.x-ft.x,Rt=U.y-ft.y,k=at.x-U.x,I=at.y-U.y,q=Et*Et+Rt*Rt,st=Et*I-Rt*k;if(Math.abs(st)>Number.EPSILON){const it=Math.sqrt(q),rt=Math.sqrt(k*k+I*I),At=ft.x-Rt/it,ut=ft.y+Et/it,Tt=at.x-I/rt,qt=at.y+k/rt,dt=((Tt-At)*I-(qt-ut)*k)/(Et*I-Rt*k);yt=At+Et*dt-U.x,nt=ut+Rt*dt-U.y;const wt=yt*yt+nt*nt;if(wt<=2)return new ht(yt,nt);Ft=Math.sqrt(wt/2)}else{let it=!1;Et>Number.EPSILON?k>Number.EPSILON&&(it=!0):Et<-Number.EPSILON?k<-Number.EPSILON&&(it=!0):Math.sign(Rt)===Math.sign(I)&&(it=!0),it?(yt=-Rt,nt=Et,Ft=Math.sqrt(q)):(yt=Et,nt=Rt,Ft=Math.sqrt(q/2))}return new ht(yt/Ft,nt/Ft)}const gt=[];for(let U=0,ft=W.length,at=ft-1,yt=U+1;U<ft;U++,at++,yt++)at===ft&&(at=0),yt===ft&&(yt=0),gt[U]=J(W[U],W[at],W[yt]);const St=[];let xt,Nt=gt.concat();for(let U=0,ft=b.length;U<ft;U++){const at=b[U];xt=[];for(let yt=0,nt=at.length,Ft=nt-1,Et=yt+1;yt<nt;yt++,Ft++,Et++)Ft===nt&&(Ft=0),Et===nt&&(Et=0),xt[yt]=J(at[yt],at[Ft],at[Et]);St.push(xt),Nt=Nt.concat(xt)}for(let U=0;U<m;U++){const ft=U/m,at=p*Math.cos(ft*Math.PI/2),yt=y*Math.sin(ft*Math.PI/2)+v;for(let nt=0,Ft=W.length;nt<Ft;nt++){const Et=K(W[nt],gt[nt],yt);_t(Et.x,Et.y,-at)}for(let nt=0,Ft=b.length;nt<Ft;nt++){const Et=b[nt];xt=St[nt];for(let Rt=0,k=Et.length;Rt<k;Rt++){const I=K(Et[Rt],xt[Rt],yt);_t(I.x,I.y,-at)}}}const Vt=y+v;for(let U=0;U<G;U++){const ft=f?K(E[U],Nt[U],Vt):E[U];C?(S.copy(F.normals[0]).multiplyScalar(ft.x),L.copy(F.binormals[0]).multiplyScalar(ft.y),T.copy(A[0]).add(S).add(L),_t(T.x,T.y,T.z)):_t(ft.x,ft.y,0)}for(let U=1;U<=h;U++)for(let ft=0;ft<G;ft++){const at=f?K(E[ft],Nt[ft],Vt):E[ft];C?(S.copy(F.normals[U]).multiplyScalar(at.x),L.copy(F.binormals[U]).multiplyScalar(at.y),T.copy(A[U]).add(S).add(L),_t(T.x,T.y,T.z)):_t(at.x,at.y,d/h*U)}for(let U=m-1;U>=0;U--){const ft=U/m,at=p*Math.cos(ft*Math.PI/2),yt=y*Math.sin(ft*Math.PI/2)+v;for(let nt=0,Ft=W.length;nt<Ft;nt++){const Et=K(W[nt],gt[nt],yt);_t(Et.x,Et.y,d+at)}for(let nt=0,Ft=b.length;nt<Ft;nt++){const Et=b[nt];xt=St[nt];for(let Rt=0,k=Et.length;Rt<k;Rt++){const I=K(Et[Rt],xt[Rt],yt);C?_t(I.x,I.y+A[h-1].y,A[h-1].x+at):_t(I.x,I.y,d+at)}}}et(),ot();function et(){const U=r.length/3;if(f){let ft=0,at=G*ft;for(let yt=0;yt<tt;yt++){const nt=R[yt];Ht(nt[2]+at,nt[1]+at,nt[0]+at)}ft=h+m*2,at=G*ft;for(let yt=0;yt<tt;yt++){const nt=R[yt];Ht(nt[0]+at,nt[1]+at,nt[2]+at)}}else{for(let ft=0;ft<tt;ft++){const at=R[ft];Ht(at[2],at[1],at[0])}for(let ft=0;ft<tt;ft++){const at=R[ft];Ht(at[0]+G*h,at[1]+G*h,at[2]+G*h)}}n.addGroup(U,r.length/3-U,0)}function ot(){const U=r.length/3;let ft=0;Ct(W,ft),ft+=W.length;for(let at=0,yt=b.length;at<yt;at++){const nt=b[at];Ct(nt,ft),ft+=nt.length}n.addGroup(U,r.length/3-U,1)}function Ct(U,ft){let at=U.length;for(;--at>=0;){const yt=at;let nt=at-1;nt<0&&(nt=U.length-1);for(let Ft=0,Et=h+m*2;Ft<Et;Ft++){const Rt=G*Ft,k=G*(Ft+1),I=ft+yt+Rt,q=ft+nt+Rt,st=ft+nt+k,it=ft+yt+k;Kt(I,q,st,it)}}}function _t(U,ft,at){l.push(U),l.push(ft),l.push(at)}function Ht(U,ft,at){Bt(U),Bt(ft),Bt(at);const yt=r.length/3,nt=w.generateTopUV(n,r,yt-3,yt-2,yt-1);Zt(nt[0]),Zt(nt[1]),Zt(nt[2])}function Kt(U,ft,at,yt){Bt(U),Bt(ft),Bt(yt),Bt(ft),Bt(at),Bt(yt);const nt=r.length/3,Ft=w.generateSideWallUV(n,r,nt-6,nt-3,nt-2,nt-1);Zt(Ft[0]),Zt(Ft[1]),Zt(Ft[3]),Zt(Ft[1]),Zt(Ft[2]),Zt(Ft[3])}function Bt(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function Zt(U){s.push(U.x),s.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uI(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new od[r.type]().fromJSON(r)),new vf(n,t.options)}}const cI={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ht(s,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[r*3],p=t[r*3+1],y=t[r*3+2],v=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-d),new ht(f,1-y),new ht(v,1-g)]:[new ht(a,1-l),new ht(h,1-d),new ht(p,1-y),new ht(m,1-g)]}};function uI(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Si extends qo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hI extends Si{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class dI extends qo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ne(16777215),this.specular=new ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Dc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fI{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}}const pI=new fI;class sl{constructor(t){this.manager=t!==void 0?t:pI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class mI extends Error{constructor(t,e){super(t),this.response=e}}class gI extends sl{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Dc.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qi[t]!==void 0){qi[t].push({onLoad:e,onProgress:n,onError:r});return}qi[t]=[],qi[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qi[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,y=p!==0;let v=0;const m=new ReadableStream({start(g){w();function w(){d.read().then(({done:A,value:C})=>{if(A)g.close();else{v+=C.byteLength;const F=new ProgressEvent("progress",{lengthComputable:y,loaded:v,total:p});for(let L=0,S=h.length;L<S;L++){const T=h[L];T.onProgress&&T.onProgress(F)}g.enqueue(C),w()}},A=>{g.error(A)})}}});return new Response(m)}else throw new mI(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{Dc.add(t,c);const h=qi[t];delete qi[t];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=qi[t];if(h===void 0)throw this.manager.itemError(t),c;delete qi[t];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class _I extends sl{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Dc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ba("img");function l(){h(),Dc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class vI extends sl{constructor(t){super(t)}load(t,e,n,r){const s=new Nn,o=new _I(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class nv extends An{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Zu=new Oe,ig=new V,rg=new V;class yI{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ig.setFromMatrixPosition(t.matrixWorld),e.position.copy(ig),rg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rg),e.updateMatrixWorld(),Zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xI extends yI{constructor(){super(new G0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yf extends nv{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new xI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class EI extends nv{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class SI{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sg();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sg(){return(typeof performance>"u"?Date:performance).now()}const og=new Oe;class TI{constructor(t,e,n=0,r=1/0){this.ray=new lf(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return og.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(og),this}intersectObject(t,e=!0,n=[]){return cd(t,this,n,e),n.sort(ag),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)cd(t[r],this,n,e);return n.sort(ag),n}}function ag(i,t){return i.distance-t.distance}function cd(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)cd(s[o],t,e,!0)}}class lg{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class MI{constructor(){this.type="ShapePath",this.color=new ne,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ic,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,o){return this.currentPath.bezierCurveTo(t,e,n,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const w=[];for(let A=0,C=g.length;A<C;A++){const F=g[A],L=new oc;L.curves=F.curves,w.push(L)}return w}function n(g,w){const A=w.length;let C=!1;for(let F=A-1,L=0;L<A;F=L++){let S=w[F],T=w[L],x=T.x-S.x,E=T.y-S.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(S=w[L],x=-x,T=w[F],E=-E),g.y<S.y||g.y>T.y)continue;if(g.y===S.y){if(g.x===S.x)return!0}else{const b=E*(g.x-S.x)-x*(g.y-S.y);if(b===0)return!0;if(b<0)continue;C=!C}}else{if(g.y!==S.y)continue;if(T.x<=g.x&&g.x<=S.x||S.x<=g.x&&g.x<=T.x)return!0}}return C}const r=Mo.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new oc,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=t?!h:h;const d=[],f=[];let p=[],y=0,v;f[y]=void 0,p[y]=[];for(let g=0,w=s.length;g<w;g++)a=s[g],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!h&&f[y]&&y++,f[y]={s:new oc,p:v},f[y].s.curves=a.curves,h&&y++,p[y]=[]):p[y].push({h:a,p:v[0]});if(!f[0])return e(s);if(f.length>1){let g=!1,w=0;for(let A=0,C=f.length;A<C;A++)d[A]=[];for(let A=0,C=f.length;A<C;A++){const F=p[A];for(let L=0;L<F.length;L++){const S=F[L];let T=!0;for(let x=0;x<f.length;x++)n(S.p,f[x].p)&&(A!==x&&w++,T?(T=!1,d[x].push(S)):g=!0);T&&d[A].push(S)}}w>0&&g===!1&&(p=d)}let m;for(let g=0,w=f.length;g<w;g++){l=f[g].s,c.push(l),m=p[g];for(let A=0,C=m.length;A<C;A++)l.holes.push(m[A].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);class AI extends sl{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new gI(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,r)}parse(t){return new wI(t)}}class wI{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=bI(t,e,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function bI(i,t,e){const n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const d=RI(h,r,a,l,e);a+=d.offsetX,o.push(d.path)}}return o}function RI(i,t,e,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new MI;let a,l,c,h,d,f,p,y;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,g=v.length;m<g;)switch(v[m++]){case"m":a=v[m++]*t+e,l=v[m++]*t+n,o.moveTo(a,l);break;case"l":a=v[m++]*t+e,l=v[m++]*t+n,o.lineTo(a,l);break;case"q":c=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,f=v[m++]*t+n,o.quadraticCurveTo(d,f,c,h);break;case"b":c=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,f=v[m++]*t+n,p=v[m++]*t+e,y=v[m++]*t+n,o.bezierCurveTo(d,f,p,y,c,h);break}}return{offsetX:s.ha*t,path:o}}class jl extends vf{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Di{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Di.nextNameID=Di.nextNameID||0,this.$name.id=`lil-gui-name-${++Di.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class CI extends Di{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ud(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const PI={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ud,toHexString:ud},Xa={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},II={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Xa.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return Xa.toHexString(r)}},DI={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Xa.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return Xa.toHexString(r)}},LI=[PI,Xa,II,DI];function NI(i){return LI.find(t=>t.match(i))}class OI extends Di{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=NI(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ud(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qu extends Di{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class UI extends Di{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},n=w=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+w),this.$input.value=this.getValue())},r=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w)*-1))},s=w=>{this._inputFocused&&(w.preventDefault(),n(this._step*this._normalizeMouseWheel(w)))};let o=!1,a,l,c,h,d;const f=5,p=w=>{a=w.clientX,l=c=w.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",y),window.addEventListener("mouseup",v)},y=w=>{if(o){const A=w.clientX-a,C=w.clientY-l;Math.abs(C)>f?(w.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>f&&v()}if(!o){const A=w.clientY-c;d-=A*this._step*this._arrowKeyMultiplier(w),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=w.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,w,A,C,F)=>(g-w)/(A-w)*(F-C)+C,e=g=>{const w=this.$slider.getBoundingClientRect();let A=t(g,w.left,w.right,this._min,this._max);this._snapClampSetValue(A)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=g=>{e(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=g=>{if(o){const w=g.touches[0].clientX-a,A=g.touches[0].clientY-l;Math.abs(w)>Math.abs(A)?c(g):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else g.preventDefault(),e(g.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),y=400;let v;const m=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const A=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+A),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,y)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class FI extends Di{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class kI extends Di{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const VI=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function BI(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let cg=!1;class xf{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!cg&&a&&(BI(VI),cg=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(t,e,n,r,s){if(Object(n)===n)return new FI(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new UI(this,t,e,n,r,s);case"boolean":return new CI(this,t,e);case"string":return new kI(this,t,e);case"function":return new Qu(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new OI(this,t,e,n)}addFolder(t){const e=new xf({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Qu||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Qu)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function Yi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function iv(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ko={duration:.5,overwrite:!1,delay:0},Ef,wn,Re,si=1e8,ye=1/si,hd=Math.PI*2,zI=hd/4,HI=0,rv=Math.sqrt,GI=Math.cos,WI=Math.sin,cn=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},Sf=function(t){return typeof t>"u"},Fi=function(t){return typeof t=="object"},kn=function(t){return t!==!1},Tf=function(){return typeof window<"u"},Yl=function(t){return ke(t)||cn(t)},sv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,dd=/(?:-?\.?\d|\.)+/gi,ov=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,th=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,av=/[+-]=-?[.\d]+/,lv=/[^,'"\[\]\s]+/gi,XI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Ti,fd,Mf,ti={},Lc={},cv,uv=function(t){return(Lc=Is(t,ti))&&Gn},Af=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$a=function(t,e){return!e&&console.warn(t)},hv=function(t,e){return t&&(ti[t]=e)&&Lc&&(Lc[t]=e)||ti},qa=function(){return 0},$I={suppressEvents:!0,isStart:!0,kill:!1},ac={suppressEvents:!0,kill:!1},qI={suppressEvents:!0},wf={},Rr=[],pd={},dv,Yn={},eh={},ug=30,lc=[],bf="",Rf=function(t){var e=t[0],n,r;if(Fi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=lc.length;r--&&!lc[r].targetTest(e););n=lc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Uv(t[r],n)))||t.splice(r,1);return t},ms=function(t){return t._gsap||Rf(oi(t))[0]._gsap},fv=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():Sf(n)&&t.getAttribute&&t.getAttribute(e)||n},Vn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},sn=function(t){return Math.round(t*1e7)/1e7||0},Ao=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},jI=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Nc=function(){var t=Rr.length,e=Rr.slice(0),n,r;for(pd={},Rr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},pv=function(t,e,n,r){Rr.length&&!wn&&Nc(),t.render(e,n,wn&&e<0&&(t._initted||t._startAt)),Rr.length&&!wn&&Nc()},mv=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(lv).length<2?e:cn(t)?t.trim():t},gv=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},YI=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Is=function(t,e){for(var n in e)t[n]=e[n];return t},hg=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Oc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Ra=function(t){var e=t.parent||De,n=t.keyframes?YI(bn(t.keyframes)):ai;if(kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},KI=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},_v=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},nu=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},JI=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},md=function(t,e,n,r){return t._startAt&&(wn?t._startAt.revert(ac):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ZI=function i(t){return!t||t._ts&&i(t.parent)},dg=function(t){return t._repeat?Vo(t._tTime,t=t.duration()+t._rDelay)*t:0},Vo=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Uc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},iu=function(t){return t._end=sn(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},ru=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=sn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),iu(t),n._dirty||gs(n,t)),t},vv=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Uc(t.rawTime(),e),(!e._dur||ol(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),gs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},bi=function(t,e,n,r){return e.parent&&Ur(e),e._start=sn((rr(n)?n:n||t!==De?ni(t,n,e):t._time)+e._delay),e._end=sn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_v(t,e,"_first","_last",t._sort?"_start":0),gd(e)||(t._recent=e),r||vv(t,e),t._ts<0&&ru(t,t._tTime),t},yv=function(t,e){return(ti.ScrollTrigger||Af("scrollTrigger",e))&&ti.ScrollTrigger.create(e,t)},xv=function(t,e,n,r,s){if(Pf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!wn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&dv!==Kn.frame)return Rr.push(t),t._lazy=[s,r],1},QI=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},gd=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},t2=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&QI(t)&&!(!t._initted&&gd(t))||(t._ts<0||t._dp._ts<0)&&!gd(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ol(0,t._tDur,e),h=Vo(l,a),t._yoyo&&h&1&&(o=1-o),h!==Vo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||wn||r||t._zTime===ye||!e&&t._zTime){if(!t._initted&&xv(t,e,r,n,l))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&md(t,e,n,!0),t._onUpdate&&!n&&Jn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Jn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ur(t,1),!n&&!wn&&(Jn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},e2=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Bo=function(t,e,n,r){var s=t._repeat,o=sn(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:sn(o*(s+1)+t._rDelay*s):o,a>0&&!r&&ru(t,t._tTime=t._tDur*a),t.parent&&iu(t),n||gs(t.parent,t),t},fg=function(t){return t instanceof Ln?gs(t):Bo(t,t._dur)},n2={_start:0,endTime:qa,totalDuration:qa},ni=function i(t,e,n){var r=t.labels,s=t._recent||n2,o=t.duration()>=si?s.endTime(!1):t._dur,a,l,c;return cn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ca=function(t,e,n){var r=rr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},Br=function(t,e){return t||t===0?e(t):e},ol=function(t,e,n){return n<t?t:n>e?e:n},Tn=function(t,e){return!cn(t)||!(e=XI.exec(t))?"":e[1]},i2=function(t,e,n){return Br(n,function(r){return ol(t,e,r)})},_d=[].slice,Ev=function(t,e){return t&&Fi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fi(t[0]))&&!t.nodeType&&t!==Ti},r2=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return cn(r)&&!e||Ev(r,1)?(s=n).push.apply(s,oi(r)):n.push(r)})||n},oi=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):cn(t)&&!n&&(fd||!zo())?_d.call((e||Mf).querySelectorAll(t),0):bn(t)?r2(t,n):Ev(t)?_d.call(t,0):t?[t]:[]},vd=function(t){return t=oi(t)[0]||$a("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return oi(e,n.querySelectorAll?n:n===t?$a("Invalid scope")||Mf.createElement("div"):t)}},Sv=function(t){return t.sort(function(){return .5-Math.random()})},Tv=function(t){if(ke(t))return t;var e=Fi(t)?t:{each:t},n=_s(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,h=r,d=r;return cn(r)?h=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],d=r[1]),function(f,p,y){var v=(y||e).length,m=o[v],g,w,A,C,F,L,S,T,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,si])[1],!x){for(S=-si;S<(S=y[x++].getBoundingClientRect().left)&&x<v;);x<v&&x--}for(m=o[v]=[],g=l?Math.min(x,v)*h-.5:r%x,w=x===si?0:l?v*d/x-.5:r/x|0,S=0,T=si,L=0;L<v;L++)A=L%x-g,C=w-(L/x|0),m[L]=F=c?Math.abs(c==="y"?C:A):rv(A*A+C*C),F>S&&(S=F),F<T&&(T=F);r==="random"&&Sv(m),m.max=S-T,m.min=T,m.v=v=(parseFloat(e.amount)||parseFloat(e.each)*(x>v?v-1:c?c==="y"?v/x:x:Math.max(x,v/x))||0)*(r==="edges"?-1:1),m.b=v<0?s-v:s,m.u=Tn(e.amount||e.each)||0,n=n&&v<0?Lv(n):n}return v=(m[f]-m.min)/m.max||0,sn(m.b+(n?n(v):v)*m.v)+m.u}},yd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=sn(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(rr(n)?0:Tn(n))}},Mv=function(t,e){var n=bn(t),r,s;return!n&&Fi(t)&&(r=n=t.radius||si,t.values?(t=oi(t.values),(s=!rr(t[0]))&&(r*=r)):t=yd(t.increment)),Br(e,n?ke(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=si,h=0,d=t.length,f,p;d--;)s?(f=t[d].x-a,p=t[d].y-l,f=f*f+p*p):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!r||c<=r?t[h]:o,s||h===o||rr(o)?h:h+Tn(o)}:yd(t))},Av=function(t,e,n,r){return Br(bn(t)?!e:n===!0?!!(n=0):!r,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},s2=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},o2=function(t,e){return function(n){return t(parseFloat(n))+(e||Tn(n))}},a2=function(t,e,n){return bv(t,e,0,1,n)},wv=function(t,e,n){return Br(n,function(r){return t[~~e(r)]})},l2=function i(t,e,n){var r=e-t;return bn(t)?wv(t,i(0,t.length),e):Br(n,function(s){return(r+(s-t)%r)%r+t})},c2=function i(t,e,n){var r=e-t,s=r*2;return bn(t)?wv(t,i(0,t.length-1),e):Br(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},ja=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?lv:dd),n+=t.substr(e,r-e)+Av(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},bv=function(t,e,n,r,s){var o=e-t,a=r-n;return Br(s,function(l){return n+((l-t)/o*a||0)})},u2=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=cn(t),a={},l,c,h,d,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(i(t[c-1],t[c]));d--,s=function(y){y*=d;var v=Math.min(f,~~y);return h[v](y-v)},n=e}else r||(t=Is(bn(t)?[]:{},t));if(!h){for(l in e)Cf.call(a,t,l,"get",e[l]);s=function(y){return Lf(y,a)||(o?t.p:t)}}}return Br(n,s)},pg=function(t,e,n){var r=t.labels,s=si,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Jn=function(t,e,n){var r=t.vars,s=r[e],o=Re,a=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Rr.length&&Nc(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},ga=function(t){return Ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!wn),t.progress()<1&&Jn(t,"onInterrupt"),t},_o,Rv=[],Cv=function(t){if(t)if(t=!t.name&&t.default||t,Tf()||t.headless){var e=t.name,n=ke(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:qa,render:Lf,add:Cf,kill:w2,modifier:A2,rawVars:0},o={targetTest:0,get:0,getSetter:Df,aliases:{},register:0};if(zo(),t!==r){if(Yn[e])return;ai(r,ai(Oc(t,s),o)),Is(r.prototype,Is(s,Oc(t,o))),Yn[r.prop=e]=r,t.targetTest&&(lc.push(r),wf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}hv(e,r),t.register&&t.register(Gn,r,Bn)}else Rv.push(t)},pe=255,_a={aqua:[0,pe,pe],lime:[0,pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pe],navy:[0,0,128],white:[pe,pe,pe],olive:[128,128,0],yellow:[pe,pe,0],orange:[pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pe,0,0],pink:[pe,192,203],cyan:[0,pe,pe],transparent:[pe,pe,pe,0]},nh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*pe+.5|0},Pv=function(t,e,n){var r=t?rr(t)?[t>>16,t>>8&pe,t&pe]:0:_a.black,s,o,a,l,c,h,d,f,p,y;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),_a[t])r=_a[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&pe,r&pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&pe,t&pe]}else if(t.substr(0,3)==="hsl"){if(r=y=t.match(dd),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=nh(l+1/3,s,o),r[1]=nh(l,s,o),r[2]=nh(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(ov),n&&r.length<4&&(r[3]=1),r}else r=t.match(dd)||_a.transparent;r=r.map(Number)}return e&&!y&&(s=r[0]/pe,o=r[1]/pe,a=r[2]/pe,d=Math.max(s,o,a),f=Math.min(s,o,a),h=(d+f)/2,d===f?l=c=0:(p=d-f,c=h>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Iv=function(t){var e=[],n=[],r=-1;return t.split(Cr).forEach(function(s){var o=s.match(go)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},mg=function(t,e,n){var r="",s=(t+r).match(Cr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(f){return(f=Pv(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Iv(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(Cr,"1").split(go),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Cr),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Cr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in _a)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),h2=/hsl[a]?\(/,Dv=function(t){var e=t.join(" "),n;if(Cr.lastIndex=0,Cr.test(e))return n=h2.test(e),t[1]=mg(t[1],n),t[0]=mg(t[0],n,Iv(t[1])),!0},Ya,Kn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,d,f,p,y=function v(m){var g=i()-r,w=m===!0,A,C,F,L;if((g>t||g<0)&&(n+=g-e),r+=g,F=r-n,A=F-o,(A>0||w)&&(L=++d.frame,f=F-d.time*1e3,d.time=F=F/1e3,o+=A+(A>=s?4:s-A),C=1),w||(l=c(v)),C)for(p=0;p<a.length;p++)a[p](F,f,L,m)};return d={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){cv&&(!fd&&Tf()&&(Ti=fd=window,Mf=Ti.document||{},ti.gsap=Gn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Gn.version),uv(Lc||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),Rv.forEach(Cv)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ya=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ya=0,c=qa},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,w){var A=g?function(C,F,L,S){m(C,F,L,S),d.remove(A)}:m;return d.remove(m),a[w?"unshift":"push"](A),zo(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&p>=g&&p--},_listeners:a},d}(),zo=function(){return!Ya&&Kn.wake()},oe={},d2=/^[\d.\-M][\d.\-,\s]/,f2=/["']/g,p2=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(f2,"").trim():+c,r=l.substr(a+1).trim();return e},m2=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},g2=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[p2(e[1])]:m2(t).split(",").map(mv)):oe._CE&&d2.test(t)?oe._CE("",t):n},Lv=function(t){return function(e){return 1-t(1-e)}},Nv=function i(t,e){for(var n=t._first,r;n;)n instanceof Ln?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},_s=function(t,e){return t&&(ke(t)?t:oe[t]||g2(t))||e},Fs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Vn(t,function(a){oe[a]=ti[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},Ov=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ih=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/hd*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*WI((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ov(a);return s=hd/s,l.config=function(c,h){return i(t,c,h)},l},rh=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ov(n);return r.config=function(s){return i(t,s)},r};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Fs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Fs("Elastic",ih("in"),ih("out"),ih());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Fs("Circ",function(i){return-(rv(1-i*i)-1)});Fs("Sine",function(i){return i===1?1:-GI(i*zI)+1});Fs("Back",rh("in"),rh("out"),rh());oe.SteppedEase=oe.steps=ti.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-ye;return function(a){return((r*ol(0,o,a)|0)+s)*n}}};ko.ease=oe["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return bf+=i+","+i+"Params,"});var Uv=function(t,e){this.id=HI++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:fv,this.set=e?e.getSetter:Df},Ka=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bo(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Ya||Kn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(zo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ru(this,n),!s._dp||s.parent||vv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pv(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dg(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Vo(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Uc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(ol(-Math.abs(this._delay),this._tDur,s),r!==!1),iu(this),JI(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&bi(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=qI);var r=wn;return wn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fg(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,fg(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(ni(this,n),kn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,kn(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=ke(n)?n:gv,a=function(){var c=r.then;r.then=null,ke(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){ga(this)},i}();ai(Ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Ln=function(i){iv(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),De&&bi(n.parent||De,Yi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yv(Yi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Ca(0,arguments,this),this},e.from=function(r,s,o){return Ca(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Ca(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(r,s,ni(this,o),1),this},e.call=function(r,s,o){return bi(this,qe.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(r,o,ni(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,Ra(o).immediateRender=kn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},e.staggerFromTo=function(r,s,o,a,l,c,h,d){return a.startAt=o,Ra(a).immediateRender=kn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,d)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:sn(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,p,y,v,m,g,w,A,C,F,L,S;if(this!==De&&h>l&&r>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),f=h,C=this._start,A=this._ts,g=!A,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(L=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=sn(h%m),h===l?(v=this._repeat,f=c):(v=~~(h/m),v&&v===h/m&&(f=c,v--),f>c&&(f=c)),F=Vo(this._tTime,m),!a&&this._tTime&&F!==v&&this._tTime-F*m-this._dur<=0&&(F=v),L&&v&1&&(f=c-f,S=1),v!==F&&!this._lock){var T=L&&F&1,x=T===(L&&v&1);if(v<F&&(T=!T),a=T?0:h%c?c:h,this._lock=1,this.render(a||(S?0:sn(v*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=T?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Nv(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=e2(this,sn(a),sn(f)),w&&(h-=f-(f=w._start))),this._tTime=h,this._time=f,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!v&&(Jn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(y=p._next,(p._act||f>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!g){w=0,y&&(h+=this._zTime=-ye);break}}p=y}else{p=this._last;for(var E=r<0?r:f;p;){if(y=p._prev,(p._act||E<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||wn&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!g){w=0,y&&(h+=this._zTime=E?-ye:ye);break}}p=y}}if(w&&!s&&(this.pause(),w.render(f>=a?0:-ye)._zTime=f>=a?1:-1,this._ts))return this._start=C,iu(this),this.render(r,s,o);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(C===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ur(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(Jn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(rr(s)||(s=ni(this,s,r)),!(r instanceof Ka)){if(bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(cn(r))return this.addLabel(r,s);if(ke(r))r=qe.delayedCall(0,r);else return this}return this!==r?bi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return cn(r)?this.removeLabel(r):ke(r)?this.killTweensOf(r):(nu(this,r),r===this._recent&&(this._recent=this._last),gs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(Kn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=ni(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=qe.delayedCall(0,s||qa,o);return a.data="isPause",this._hasPause=1,bi(this,a,ni(this,r))},e.removePause=function(r){var s=this._first;for(r=ni(this,r);s;)s._start===r&&s.data==="isPause"&&Ur(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)vr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=oi(r),l=this._first,c=rr(s),h;l;)l instanceof qe?jI(l._targets,a)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=ni(o,r),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,p,y=qe.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());y._dur!==m&&Bo(y,m,0,1).render(y._time,!0,!0),p=1}h&&h.apply(y,d||[])}},s));return f?y.render(0):y},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,ai({startAt:{time:ni(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),pg(this,ni(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),pg(this,ni(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return gs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),gs(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=si,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Bo(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(De._ts&&(pv(De,Uc(r,De)),dv=Kn.frame),Kn.frame>=ug){ug+=Qn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Qn.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},t}(Ka);ai(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var _2=function(t,e,n,r,s,o,a){var l=new Bn(this._pt,t,e,0,1,Hv,null,s),c=0,h=0,d,f,p,y,v,m,g,w;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=ja(r)),o&&(w=[n,r],o(w,t,e),n=w[0],r=w[1]),f=n.match(th)||[];d=th.exec(r);)y=d[0],v=r.substring(c,d.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),y!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:m,c:y.charAt(1)==="="?Ao(m,y)-m:parseFloat(y)-m,m:p&&p<4?Math.round:0},c=th.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(av.test(r)||g)&&(l.e=0),this._pt=l,l},Cf=function(t,e,n,r,s,o,a,l,c,h){ke(r)&&(r=r(s||0,t,o));var d=t[e],f=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,p=ke(d)?c?S2:Bv:If,y;if(cn(r)&&(~r.indexOf("random(")&&(r=ja(r)),r.charAt(1)==="="&&(y=Ao(f,r)+(Tn(f)||0),(y||y===0)&&(r=y))),!h||f!==r||xd)return!isNaN(f*r)&&r!==""?(y=new Bn(this._pt,t,e,+f||0,r-(f||0),typeof d=="boolean"?M2:zv,0,p),c&&(y.fp=c),a&&y.modifier(a,this,t),this._pt=y):(!d&&!(e in t)&&Af(e,r),_2.call(this,t,e,f,r,p,l||Qn.stringFilter,c))},v2=function(t,e,n,r,s){if(ke(t)&&(t=Pa(t,s,e,n,r)),!Fi(t)||t.style&&t.nodeType||bn(t)||sv(t))return cn(t)?Pa(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=Pa(t[a],s,e,n,r);return o},Fv=function(t,e,n,r,s,o){var a,l,c,h;if(Yn[t]&&(a=new Yn[t]).init(s,a.rawVars?e[t]:v2(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==_o))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},vr,xd,Pf=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,y=t._dur,v=t._startAt,m=t._targets,g=t.parent,w=g&&g.data==="nested"?g.vars.targets:m,A=t._overwrite==="auto"&&!Ef,C=t.timeline,F,L,S,T,x,E,b,D,R,W,K,G,tt;if(C&&(!f||!s)&&(s="none"),t._ease=_s(s,ko.ease),t._yEase=d?Lv(_s(d===!0?s:d,ko.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!C&&!!r.runBackwards,!C||f&&!r.stagger){if(D=m[0]?ms(m[0]).harness:0,G=D&&r[D.prop],F=Oc(r,wf),v&&(v._zTime<0&&v.progress(1),e<0&&h&&a&&!p?v.render(-1,!0):v.revert(h&&y?ac:$I),v._lazy=0),o){if(Ur(t._startAt=qe.set(m,ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!v&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn||!a&&!p)&&t._startAt.revert(ac),a&&y&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&y&&!v){if(e&&(a=!1),S=ai({overwrite:!1,data:"isFromStart",lazy:a&&!v&&kn(l),immediateRender:a,stagger:0,parent:g},F),G&&(S[D.prop]=G),Ur(t._startAt=qe.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn?t._startAt.revert(ac):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=y&&kn(l)||l&&!y,L=0;L<m.length;L++){if(x=m[L],b=x._gsap||Rf(m)[L]._gsap,t._ptLookup[L]=W={},pd[b.id]&&Rr.length&&Nc(),K=w===m?L:w.indexOf(x),D&&(R=new D).init(x,G||F,t,K,w)!==!1&&(t._pt=T=new Bn(t._pt,x,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(J){W[J]=T}),R.priority&&(E=1)),!D||G)for(S in F)Yn[S]&&(R=Fv(S,F,t,K,x,w))?R.priority&&(E=1):W[S]=T=Cf.call(t,x,S,"get",F[S],K,w,0,r.stringFilter);t._op&&t._op[L]&&t.kill(x,t._op[L]),A&&t._pt&&(vr=t,De.killTweensOf(x,W,t.globalTime(e)),tt=!t.parent,vr=0),t._pt&&l&&(pd[b.id]=1)}E&&Gv(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,f&&e<=0&&C.render(si,!0,!0)},y2=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(h=f[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return xd=1,t.vars[e]="+=0",Pf(t,a),xd=0,l?$a(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)d=c[p],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+Tn(d.e)),d.b&&(d.b=h.s+Tn(d.b))},x2=function(t,e){var n=t[0]?ms(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=Is({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},E2=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(bn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Pa=function(t,e,n,r,s){return ke(t)?t.call(e,n,r,s):cn(t)&&~t.indexOf("random(")?ja(t):t},kv=bf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vv={};Vn(kv+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Vv[i]=1});var qe=function(i){iv(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ra(r))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,y=l.keyframes,v=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,w=r.parent||De,A=(bn(n)||sv(n)?rr(n[0]):"length"in r)?[n]:oi(n),C,F,L,S,T,x,E,b;if(a._targets=A.length?Rf(A):$a("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,y||f||Yl(c)||Yl(h)){if(r=a.vars,C=a.timeline=new Ln({data:"nested",defaults:v||{},targets:w&&w.data==="nested"?w.vars.targets:A}),C.kill(),C.parent=C._dp=Yi(a),C._start=0,f||Yl(c)||Yl(h)){if(S=A.length,E=f&&Tv(f),Fi(f))for(T in f)~kv.indexOf(T)&&(b||(b={}),b[T]=f[T]);for(F=0;F<S;F++)L=Oc(r,Vv),L.stagger=0,g&&(L.yoyoEase=g),b&&Is(L,b),x=A[F],L.duration=+Pa(c,Yi(a),F,x,A),L.delay=(+Pa(h,Yi(a),F,x,A)||0)-a._delay,!f&&S===1&&L.delay&&(a._delay=h=L.delay,a._start+=h,L.delay=0),C.to(x,L,E?E(F,x,A):0),C._ease=oe.none;C.duration()?c=h=0:a.timeline=0}else if(y){Ra(ai(C.vars.defaults,{ease:"none"})),C._ease=_s(y.ease||r.ease||"none");var D=0,R,W,K;if(bn(y))y.forEach(function(G){return C.to(A,G,">")}),C.duration();else{L={};for(T in y)T==="ease"||T==="easeEach"||E2(T,y[T],L,y.easeEach);for(T in L)for(R=L[T].sort(function(G,tt){return G.t-tt.t}),D=0,F=0;F<R.length;F++)W=R[F],K={ease:W.e,duration:(W.t-(F?R[F-1].t:0))/100*c},K[T]=W.v,C.to(A,K,D),D+=K.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||a.duration(c=C.duration())}else a.timeline=0;return p===!0&&!Ef&&(vr=Yi(a),De.killTweensOf(A),vr=0),bi(w,Yi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!y&&a._start===sn(w._time)&&kn(d)&&ZI(Yi(a))&&w.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-h)||0)),m&&yv(Yi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,d=r>l-ye&&!h?l:r<ye?0:r,f,p,y,v,m,g,w,A,C;if(!c)t2(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=d,A=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+r,s,o);if(f=sn(d%v),d===l?(y=this._repeat,f=c):(y=~~(d/v),y&&y===sn(d/v)&&(f=c,y--),f>c&&(f=c)),g=this._yoyo&&y&1,g&&(C=this._yEase,f=c-f),m=Vo(this._tTime,v),f===a&&!o&&this._initted&&y===m)return this._tTime=d,this;y!==m&&(A&&this._yEase&&Nv(A,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==v&&this._initted&&(this._lock=o=1,this.render(sn(v*y),!0).invalidate()._lock=0))}if(!this._initted){if(xv(this,h?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(C||this._ease)(f/c),this._from&&(this.ratio=w=1-w),f&&!a&&!s&&!y&&(Jn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;A&&A.render(r<0?r:A._dur*A._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&md(this,r,s,o),Jn(this,"onUpdate")),this._repeat&&y!==m&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&md(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ur(this,1),!s&&!(h&&!a)&&(d||a||g)&&(Jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Ya||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Pf(this,c),h=this._ease(c/this._dur),y2(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(ru(this,0),this.parent||_v(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ga(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,vr&&vr.vars.overwrite!==!0)._first||ga(this),this.parent&&o!==this.timeline.totalDuration()&&Bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?oi(r):a,c=this._ptLookup,h=this._pt,d,f,p,y,v,m,g;if((!s||s==="all")&&KI(a,l))return s==="all"&&(this._pt=0),ga(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(v={},Vn(s,function(w){return v[w]=1}),s=v),s=x2(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(d[g]=s,y=f,p={}):(p=d[g]=d[g]||{},y=s);for(v in y)m=f&&f[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&nu(this,m,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&h&&ga(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ca(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Ca(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return De.killTweensOf(r,s,o)},t}(Ka);ai(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(i){qe[i]=function(){var t=new Ln,e=_d.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var If=function(t,e,n){return t[e]=n},Bv=function(t,e,n){return t[e](n)},S2=function(t,e,n,r){return t[e](r.fp,n)},T2=function(t,e,n){return t.setAttribute(e,n)},Df=function(t,e){return ke(t[e])?Bv:Sf(t[e])&&t.setAttribute?T2:If},zv=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},M2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hv=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Lf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},A2=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},w2=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?nu(this,e,"_pt"):e.dep||(n=1),e=r;return!n},b2=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Gv=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Bn=function(){function i(e,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||zv,this.d=l||this,this.set=c||If,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=b2,this.m=n,this.mt=s,this.tween=r},i}();Vn(bf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return wf[i]=1});ti.TweenMax=ti.TweenLite=qe;ti.TimelineLite=ti.TimelineMax=Ln;De=new Ln({sortChildren:!1,defaults:ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Dv;var vs=[],cc={},R2=[],gg=0,C2=0,sh=function(t){return(cc[t]||R2).map(function(e){return e()})},Ed=function(){var t=Date.now(),e=[];t-gg>2&&(sh("matchMediaInit"),vs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ti.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),sh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),gg=t,sh("matchMedia"))},Wv=function(){function i(e,n){this.selector=n&&vd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=C2++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ke(n)&&(s=r,r=n,n=ke);var o=this,a=function(){var c=Re,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=vd(s)),Re=o,d=r.apply(o,arguments),ke(d)&&o._r.push(d),Re=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=Re;Re=null,n(this),Re=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof qe&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=vs.length;o--;)vs[o].id===this.id&&vs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),P2=function(){function i(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Fi(n)||(n={matches:n});var o=new Wv(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Ti.matchMedia(n[c]),l&&(vs.indexOf(o)<0&&vs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ed):l.addEventListener("change",Ed)));return h&&r(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Fc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Cv(r)})},timeline:function(t){return new Ln(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,r){cn(t)&&(t=oi(t)[0]);var s=ms(t||{}).get,o=n?gv:mv;return n==="native"&&(n=""),t&&(e?o((Yn[e]&&Yn[e].get||s)(t,e,n,r)):function(a,l,c){return o((Yn[a]&&Yn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=oi(t),t.length>1){var r=t.map(function(h){return Gn.quickSetter(h,e,n)}),s=r.length;return function(h){for(var d=s;d--;)r[d](h)}}t=t[0]||{};var o=Yn[e],a=ms(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;_o._pt=0,d.init(t,n?h+n:h,_o,0,[t]),d.render(1,d),_o._pt&&Lf(1,_o)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var r,s=Gn.to(t,Is((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_s(t.ease,ko.ease)),hg(ko,t||{})},config:function(t){return hg(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Yn[a]&&!ti[a]&&$a(e+" effect requires "+a+" plugin.")}),eh[e]=function(a,l,c){return n(oi(a),ai(l||{},s),c)},o&&(Ln.prototype[e]=function(a,l,c){return this.add(eh[e](a,Fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=_s(e)},parseEase:function(t,e){return arguments.length?_s(t,e):oe},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ln(t),r,s;for(n.smoothChildTiming=kn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,r=De._first;r;)s=r._next,(e||!(!r._dur&&r instanceof qe&&r.vars.onComplete===r._targets[0]))&&bi(n,r,r._start-r._delay),r=s;return bi(De,n,0),n},context:function(t,e){return t?new Wv(t,e):Re},matchMedia:function(t){return new P2(t)},matchMediaRefresh:function(){return vs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Ed()},addEventListener:function(t,e){var n=cc[t]||(cc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=cc[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:l2,wrapYoyo:c2,distribute:Tv,random:Av,snap:Mv,normalize:a2,getUnit:Tn,clamp:i2,splitColor:Pv,toArray:oi,selector:vd,mapRange:bv,pipe:s2,unitize:o2,interpolate:u2,shuffle:Sv},install:uv,effects:eh,ticker:Kn,updateRoot:Ln.updateRoot,plugins:Yn,globalTimeline:De,core:{PropTween:Bn,globals:hv,Tween:qe,Timeline:Ln,Animation:Ka,getCache:ms,_removeLinkedListItem:nu,reverting:function(){return wn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return Ef=t}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Fc[i]=qe[i]});Kn.add(Ln.updateRoot);_o=Fc.to({},{duration:0});var I2=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},D2=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=I2(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},oh=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(cn(s)&&(l={},Vn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}D2(a,s)}}}},Gn=Fc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oh("roundProps",yd),oh("modifiers"),oh("snap",Mv))||Fc;qe.version=Ln.version=Gn.version="3.12.5";cv=1;Tf()&&zo();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _g,yr,wo,Nf,us,vg,Of,L2=function(){return typeof window<"u"},sr={},es=180/Math.PI,bo=Math.PI/180,uo=Math.atan2,yg=1e8,Uf=/([A-Z])/g,N2=/(left|right|width|margin|padding|x)/i,O2=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},U2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},F2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},k2=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xv=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$v=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},V2=function(t,e,n){return t.style[e]=n},B2=function(t,e,n){return t.style.setProperty(e,n)},z2=function(t,e,n){return t._gsap[e]=n},H2=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},G2=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},W2=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",zn=Ne+"Origin",X2=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in sr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ki(r,a)}):this.tfm[t]=o.x?o[t]:Ki(r,t),t===zn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(zn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},qv=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$2=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Uf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Of(),(!s||!s.isStart)&&!n[Ne]&&(qv(n),r.zOrigin&&n[zn]&&(n[zn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},jv=function(t,e){var n={target:t,props:[],revert:$2,save:X2};return t._gsap||Gn.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},Yv,Td=function(t,e){var n=yr.createElementNS?yr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):yr.createElement(t);return n&&n.style?n:yr.createElement(t)},Li=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Uf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Ho(e)||e,1)||""},xg="O,Moz,ms,Ms,Webkit".split(","),Ho=function(t,e,n){var r=e||us,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(xg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?xg[o]:"")+t},Md=function(){L2()&&window.document&&(_g=window,yr=_g.document,wo=yr.documentElement,us=Td("div")||{style:{}},Td("div"),Ne=Ho(Ne),zn=Ne+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yv=!!Ho("perspective"),Of=Gn.core.reverting,Nf=1)},ah=function i(t){var e=Td("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(wo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),wo.removeChild(e),this.style.cssText=s,o},Eg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Kv=function(t){var e;try{e=t.getBBox()}catch{e=ah.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ah||(e=ah.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Eg(t,["x","cx","x1"])||0,y:+Eg(t,["y","cy","y1"])||0,width:0,height:0}:e},Jv=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Kv(t))},Ds=function(t,e){if(e){var n=t.style,r;e in sr&&e!==zn&&(e=Ne),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Uf,"-$1").toLowerCase())):n.removeAttribute(e)}},xr=function(t,e,n,r,s,o){var a=new Bn(t._pt,e,n,0,1,o?$v:Xv);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},Sg={deg:1,rad:1,turn:1},q2={grid:1,flex:1},Fr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=us.style,l=N2.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",y,v,m,g;if(r===o||!s||Sg[r]||Sg[o])return s;if(o!=="px"&&!f&&(s=i(t,e,n,"px")),g=t.getCTM&&Jv(t),(p||o==="%")&&(sr[e]||~e.indexOf("adius")))return y=g?t.getBBox()[l?"width":"height"]:t[h],He(p?s/y*d:s/100*y);if(a[l?"width":"height"]=d+(f?o:r),v=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(v=(t.ownerSVGElement||{}).parentNode),(!v||v===yr||!v.appendChild)&&(v=yr.body),m=v._gsap,m&&p&&m.width&&l&&m.time===Kn.time&&!m.uncache)return He(s/m.width*d);if(p&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=d+r,y=t[h],w?t.style[e]=w:Ds(t,e)}else(p||o==="%")&&!q2[Li(v,"display")]&&(a.position=Li(t,"position")),v===t&&(a.position="static"),v.appendChild(us),y=us[h],v.removeChild(us),a.position="absolute";return l&&p&&(m=ms(v),m.time=Kn.time,m.width=v[h]),He(f?y*s/d:y&&s?d/y*s:0)},Ki=function(t,e,n,r){var s;return Nf||Md(),e in Ci&&e!=="transform"&&(e=Ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),sr[e]&&e!=="transform"?(s=Za(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Vc(Li(t,zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=kc[e]&&kc[e](t,e,n)||Li(t,e)||fv(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fr(t,e,s,n)+n:s},j2=function(t,e,n,r){if(!n||n==="none"){var s=Ho(e,t,1),o=s&&Li(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Li(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,Hv),l=0,c=0,h,d,f,p,y,v,m,g,w,A,C,F;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(v=t.style[e],t.style[e]=r,r=Li(t,e)||r,v?t.style[e]=v:Ds(t,e)),h=[n,r],Dv(h),n=h[0],r=h[1],f=n.match(go)||[],F=r.match(go)||[],F.length){for(;d=go.exec(r);)m=d[0],w=r.substring(l,d.index),y?y=(y+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(y=1),m!==(v=f[c++]||"")&&(p=parseFloat(v)||0,C=v.substr((p+"").length),m.charAt(1)==="="&&(m=Ao(p,m)+C),g=parseFloat(m),A=m.substr((g+"").length),l=go.lastIndex-A.length,A||(A=A||Qn.units[e]||C,l===r.length&&(r+=A,a.e+=A)),C!==A&&(p=Fr(t,e,v,A)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:p,c:g-p,m:y&&y<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?$v:Xv;return av.test(r)&&(a.e=0),this._pt=a,a},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Y2=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Tg[n]||n,e[1]=Tg[r]||r,e.join(" ")},K2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],sr[a]&&(l=1,a=a==="transformOrigin"?zn:Ne),Ds(n,a);l&&(Ds(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),Za(n,1),o.uncache=1,qv(r)))}},kc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,K2);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ja=[1,0,0,1,0,0],Zv={},Qv=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Mg=function(t){var e=Li(t,Ne);return Qv(e)?Ja:e.substr(7).match(ov).map(He)},Ff=function(t,e){var n=t._gsap||ms(t),r=t.style,s=Mg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ja:s):(s===Ja&&!t.offsetParent&&t!==wo&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,wo.appendChild(t)),s=Mg(t),l?r.display=l:Ds(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):wo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ad=function(t,e,n,r,s,o){var a=t._gsap,l=s||Ff(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],y=l[1],v=l[2],m=l[3],g=l[4],w=l[5],A=e.split(" "),C=parseFloat(A[0])||0,F=parseFloat(A[1])||0,L,S,T,x;n?l!==Ja&&(S=p*m-y*v)&&(T=C*(m/S)+F*(-v/S)+(v*w-m*g)/S,x=C*(-y/S)+F*(p/S)-(p*w-y*g)/S,C=T,F=x):(L=Kv(t),C=L.x+(~A[0].indexOf("%")?C/100*L.width:C),F=L.y+(~(A[1]||A[0]).indexOf("%")?F/100*L.height:F)),r||r!==!1&&a.smooth?(g=C-c,w=F-h,a.xOffset=d+(g*p+w*v)-g,a.yOffset=f+(g*y+w*m)-w):a.xOffset=a.yOffset=0,a.xOrigin=C,a.yOrigin=F,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[zn]="0px 0px",o&&(xr(o,a,"xOrigin",c,C),xr(o,a,"yOrigin",h,F),xr(o,a,"xOffset",d,a.xOffset),xr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",C+" "+F)},Za=function(t,e){var n=t._gsap||new Uv(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Li(t,zn)||"0",h,d,f,p,y,v,m,g,w,A,C,F,L,S,T,x,E,b,D,R,W,K,G,tt,J,gt,St,xt,Nt,Vt,et,ot;return h=d=f=v=m=g=w=A=C=0,p=y=1,n.svg=!!(t.getCTM&&Jv(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),r.scale=r.rotate=r.translate="none"),S=Ff(t,n.svg),n.svg&&(n.uncache?(J=t.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",tt=""):tt=!e&&t.getAttribute("data-svg-origin"),Ad(t,tt||c,!!tt||n.originIsAbsolute,n.smooth!==!1,S)),F=n.xOrigin||0,L=n.yOrigin||0,S!==Ja&&(b=S[0],D=S[1],R=S[2],W=S[3],h=K=S[4],d=G=S[5],S.length===6?(p=Math.sqrt(b*b+D*D),y=Math.sqrt(W*W+R*R),v=b||D?uo(D,b)*es:0,w=R||W?uo(R,W)*es+v:0,w&&(y*=Math.abs(Math.cos(w*bo))),n.svg&&(h-=F-(F*b+L*R),d-=L-(F*D+L*W))):(ot=S[6],Vt=S[7],St=S[8],xt=S[9],Nt=S[10],et=S[11],h=S[12],d=S[13],f=S[14],T=uo(ot,Nt),m=T*es,T&&(x=Math.cos(-T),E=Math.sin(-T),tt=K*x+St*E,J=G*x+xt*E,gt=ot*x+Nt*E,St=K*-E+St*x,xt=G*-E+xt*x,Nt=ot*-E+Nt*x,et=Vt*-E+et*x,K=tt,G=J,ot=gt),T=uo(-R,Nt),g=T*es,T&&(x=Math.cos(-T),E=Math.sin(-T),tt=b*x-St*E,J=D*x-xt*E,gt=R*x-Nt*E,et=W*E+et*x,b=tt,D=J,R=gt),T=uo(D,b),v=T*es,T&&(x=Math.cos(T),E=Math.sin(T),tt=b*x+D*E,J=K*x+G*E,D=D*x-b*E,G=G*x-K*E,b=tt,K=J),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,g=180-g),p=He(Math.sqrt(b*b+D*D+R*R)),y=He(Math.sqrt(G*G+ot*ot)),T=uo(K,G),w=Math.abs(T)>2e-4?T*es:0,C=et?1/(et<0?-et:et):0),n.svg&&(tt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qv(Li(t,Ne)),tt&&t.setAttribute("transform",tt))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(p*=-1,w+=v<=0?180:-180,v+=v<=0?180:-180):(y*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=He(p),n.scaleY=He(y),n.rotation=He(v)+a,n.rotationX=He(m)+a,n.rotationY=He(g)+a,n.skewX=w+a,n.skewY=A+a,n.transformPerspective=C+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[zn]=Vc(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?Z2:Yv?ty:J2,n.uncache=0,n},Vc=function(t){return(t=t.split(" "))[0]+" "+t[1]},lh=function(t,e,n){var r=Tn(e);return He(parseFloat(e)+parseFloat(Fr(t,"x",n+"px",r)))+r},J2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ty(t,e)},Jr="0deg",da="0px",Zr=") ",ty=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,p=n.skewY,y=n.scaleX,v=n.scaleY,m=n.transformPerspective,g=n.force3D,w=n.target,A=n.zOrigin,C="",F=g==="auto"&&t&&t!==1||g===!0;if(A&&(d!==Jr||h!==Jr)){var L=parseFloat(h)*bo,S=Math.sin(L),T=Math.cos(L),x;L=parseFloat(d)*bo,x=Math.cos(L),o=lh(w,o,S*x*-A),a=lh(w,a,-Math.sin(L)*-A),l=lh(w,l,T*x*-A+A)}m!==da&&(C+="perspective("+m+Zr),(r||s)&&(C+="translate("+r+"%, "+s+"%) "),(F||o!==da||a!==da||l!==da)&&(C+=l!==da||F?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),c!==Jr&&(C+="rotate("+c+Zr),h!==Jr&&(C+="rotateY("+h+Zr),d!==Jr&&(C+="rotateX("+d+Zr),(f!==Jr||p!==Jr)&&(C+="skew("+f+", "+p+Zr),(y!==1||v!==1)&&(C+="scale("+y+", "+v+Zr),w.style[Ne]=C||"translate(0, 0)"},Z2=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,p=n.target,y=n.xOrigin,v=n.yOrigin,m=n.xOffset,g=n.yOffset,w=n.forceCSS,A=parseFloat(o),C=parseFloat(a),F,L,S,T,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=bo,c*=bo,F=Math.cos(l)*d,L=Math.sin(l)*d,S=Math.sin(l-c)*-f,T=Math.cos(l-c)*f,c&&(h*=bo,x=Math.tan(c-h),x=Math.sqrt(1+x*x),S*=x,T*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),F*=x,L*=x)),F=He(F),L=He(L),S=He(S),T=He(T)):(F=d,T=f,L=S=0),(A&&!~(o+"").indexOf("px")||C&&!~(a+"").indexOf("px"))&&(A=Fr(p,"x",o,"px"),C=Fr(p,"y",a,"px")),(y||v||m||g)&&(A=He(A+y-(y*F+v*S)+m),C=He(C+v-(y*L+v*T)+g)),(r||s)&&(x=p.getBBox(),A=He(A+r/100*x.width),C=He(C+s/100*x.height)),x="matrix("+F+","+L+","+S+","+T+","+A+","+C+")",p.setAttribute("transform",x),w&&(p.style[Ne]=x)},Q2=function(t,e,n,r,s){var o=360,a=cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?es:1),c=l-r,h=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*yg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*yg)%o-~~(c/o)*o)),t._pt=f=new Bn(t._pt,e,n,r,c,U2),f.e=h,f.u="deg",t._props.push(n),f},Ag=function(t,e){for(var n in e)t[n]=e[n];return t},tD=function(t,e,n){var r=Ag({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,p,y;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=Za(n,1),Ds(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=Za(n,1),o[Ne]=c);for(l in sr)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=Tn(c),y=Tn(h),d=p!==y?Fr(n,l,c,y):parseFloat(c),f=parseFloat(h),t._pt=new Bn(t._pt,a,l,d,f-d,Sd),t._pt.u=y||0,t._props.push(l));Ag(a,r)};Vn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});kc[t>1?"border"+i:i]=function(a,l,c,h,d){var f,p;if(arguments.length<4)return f=o.map(function(y){return Ki(a,y,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},o.forEach(function(y,v){return p[y]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,p,d)}});var ey={name:"css",register:Md,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,p,y,v,m,g,w,A,C,F,L,S,T;Nf||Md(),this.styles=this.styles||jv(t),T=this.styles.props,this.tween=n;for(v in e)if(v!=="autoRound"&&(h=e[v],!(Yn[v]&&Fv(v,e,n,r,t,s)))){if(p=typeof h,y=kc[v],p==="function"&&(h=h.call(n,r,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=ja(h)),y)y(this,t,v,h,n)&&(S=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(v)+"").trim(),h+="",Cr.lastIndex=0,Cr.test(c)||(m=Tn(c),g=Tn(h)),g?m!==g&&(c=Fr(t,v,c,g)+g):m&&(h+=m),this.add(a,"setProperty",c,h,r,s,0,0,v),o.push(v),T.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,r,t,s):l[v],cn(c)&&~c.indexOf("random(")&&(c=ja(c)),Tn(c+"")||c==="auto"||(c+=Qn.units[v]||Tn(Ki(t,v))||""),(c+"").charAt(1)==="="&&(c=Ki(t,v))):c=Ki(t,v),f=parseFloat(c),w=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),v in Ci&&(v==="autoAlpha"&&(f===1&&Ki(t,"visibility")==="hidden"&&d&&(f=0),T.push("visibility",0,a.visibility),xr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Ci[v],~v.indexOf(",")&&(v=v.split(",")[0]))),A=v in sr,A){if(this.styles.save(v),C||(F=t._gsap,F.renderTransform&&!e.parseTransform||Za(t,e.parseTransform),L=e.smoothOrigin!==!1&&F.smooth,C=this._pt=new Bn(this._pt,a,Ne,0,1,F.renderTransform,F,0,-1),C.dep=1),v==="scale")this._pt=new Bn(this._pt,F,"scaleY",F.scaleY,(w?Ao(F.scaleY,w+d):d)-F.scaleY||0,Sd),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){T.push(zn,0,a[zn]),h=Y2(h),F.svg?Ad(t,h,0,L,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==F.zOrigin&&xr(this,F,"zOrigin",F.zOrigin,g),xr(this,a,v,Vc(c),Vc(h)));continue}else if(v==="svgOrigin"){Ad(t,h,1,L,0,this);continue}else if(v in Zv){Q2(this,F,v,f,w?Ao(f,w+h):h);continue}else if(v==="smoothOrigin"){xr(this,F,"smooth",F.smooth,h);continue}else if(v==="force3D"){F[v]=h;continue}else if(v==="transform"){tD(this,h,t);continue}}else v in a||(v=Ho(v)||v);if(A||(d||d===0)&&(f||f===0)&&!O2.test(h)&&v in a)m=(c+"").substr((f+"").length),d||(d=0),g=Tn(h)||(v in Qn.units?Qn.units[v]:m),m!==g&&(f=Fr(t,v,c,g)),this._pt=new Bn(this._pt,A?F:a,v,f,(w?Ao(f,w+d):d)-f,!A&&(g==="px"||v==="zIndex")&&e.autoRound!==!1?k2:Sd),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=F2);else if(v in a)j2.call(this,t,v,c,w?w+h:h);else if(v in t)this.add(t,v,c||t[v],w?w+h:h,r,s);else if(v!=="parseTransform"){Af(v,h);continue}A||(v in a?T.push(v,0,a[v]):T.push(v,1,c||t[v])),o.push(v)}}S&&Gv(this)},render:function(t,e){if(e.tween._time||!Of())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ki,aliases:Ci,getSetter:function(t,e,n){var r=Ci[e];return r&&r.indexOf(",")<0&&(e=r),e in sr&&e!==zn&&(t._gsap.x||Ki(t,"x"))?n&&vg===n?e==="scale"?H2:z2:(vg=n||{})&&(e==="scale"?G2:W2):t.style&&!Sf(t.style[e])?V2:~e.indexOf("-")?B2:Df(t,e)},core:{_removeProperty:Ds,_getMatrix:Ff}};Gn.utils.checkPrefix=Ho;Gn.core.getStyleSaver=jv;(function(i,t,e,n){var r=Vn(i+","+t+","+e,function(s){sr[s]=1});Vn(t,function(s){Qn.units[s]="deg",Zv[s]=1}),Ci[r[13]]=i+","+t,Vn(n,function(s){var o=s.split(":");Ci[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Qn.units[i]="px"});Gn.registerPlugin(ey);var Ve=Gn.registerPlugin(ey)||Gn;Ve.core.Tween;const li={NONE:"none",SQUIRTLE:"squirtle",CHARMANDER:"charmander"},wg={type:"change"},ch={type:"start"},bg={type:"end"},Kl=new lf,Rg=new pr,eD=Math.cos(70*Ew.DEG2RAD);class nD extends Os{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Tt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wg),n.update(),s=r.NONE},this.update=function(){const P=new V,X=new Rs().setFromUnitVectors(t.up,new V(0,1,0)),$=X.clone().invert(),Z=new V,lt=new Rs,Lt=new V,zt=2*Math.PI;return function(Ae=null){const re=n.object.position;P.copy(re).sub(n.target),P.applyQuaternion(X),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&D(E(Ae)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ee=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(Ce)&&(Ee<-Math.PI?Ee+=zt:Ee>Math.PI&&(Ee-=zt),Ce<-Math.PI?Ce+=zt:Ce>Math.PI&&(Ce-=zt),Ee<=Ce?a.theta=Math.max(Ee,Math.min(Ce,a.theta)):a.theta=a.theta>(Ee+Ce)/2?Math.max(Ee,a.theta):Math.min(Ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let we=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)a.radius=St(a.radius);else{const Ge=a.radius;a.radius=St(a.radius*c),we=Ge!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion($),re.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&L){let Ge=null;if(n.object.isPerspectiveCamera){const Cn=P.length();Ge=St(Cn*c);const Wn=Cn-Ge;n.object.position.addScaledVector(C,Wn),n.object.updateMatrixWorld(),we=!!Wn}else if(n.object.isOrthographicCamera){const Cn=new V(F.x,F.y,0);Cn.unproject(n.object);const Wn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),we=Wn!==n.object.zoom;const zr=new V(F.x,F.y,0);zr.unproject(n.object),n.object.position.sub(zr).add(Cn),n.object.updateMatrixWorld(),Ge=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(Kl.origin.copy(n.object.position),Kl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Kl.direction))<eD?t.lookAt(n.target):(Rg.setFromNormalAndCoplanarPoint(n.object.up,n.target),Kl.intersectPlane(Rg,n.target))))}else if(n.object.isOrthographicCamera){const Ge=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ge!==n.object.zoom&&(n.object.updateProjectionMatrix(),we=!0)}return c=1,L=!1,we||Z.distanceToSquared(n.object.position)>o||8*(1-lt.dot(n.object.quaternion))>o||Lt.distanceToSquared(n.target)>o?(n.dispatchEvent(wg),Z.copy(n.object.position),lt.copy(n.object.quaternion),Lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",wt),n.domElement.removeEventListener("pointerdown",Rt),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",I),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new lg,l=new lg;let c=1;const h=new V,d=new ht,f=new ht,p=new ht,y=new ht,v=new ht,m=new ht,g=new ht,w=new ht,A=new ht,C=new V,F=new ht;let L=!1;const S=[],T={};let x=!1;function E(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function b(P){const X=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*X)}function D(P){l.theta-=P}function R(P){l.phi-=P}const W=function(){const P=new V;return function($,Z){P.setFromMatrixColumn(Z,0),P.multiplyScalar(-$),h.add(P)}}(),K=function(){const P=new V;return function($,Z){n.screenSpacePanning===!0?P.setFromMatrixColumn(Z,1):(P.setFromMatrixColumn(Z,0),P.crossVectors(n.object.up,P)),P.multiplyScalar($),h.add(P)}}(),G=function(){const P=new V;return function($,Z){const lt=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;P.copy(Lt).sub(n.target);let zt=P.length();zt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*$*zt/lt.clientHeight,n.object.matrix),K(2*Z*zt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W($*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),K(Z*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function gt(P,X){if(!n.zoomToCursor)return;L=!0;const $=n.domElement.getBoundingClientRect(),Z=P-$.left,lt=X-$.top,Lt=$.width,zt=$.height;F.x=Z/Lt*2-1,F.y=-(lt/zt)*2+1,C.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function St(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function xt(P){d.set(P.clientX,P.clientY)}function Nt(P){gt(P.clientX,P.clientX),g.set(P.clientX,P.clientY)}function Vt(P){y.set(P.clientX,P.clientY)}function et(P){f.set(P.clientX,P.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const X=n.domElement;D(2*Math.PI*p.x/X.clientHeight),R(2*Math.PI*p.y/X.clientHeight),d.copy(f),n.update()}function ot(P){w.set(P.clientX,P.clientY),A.subVectors(w,g),A.y>0?tt(b(A.y)):A.y<0&&J(b(A.y)),g.copy(w),n.update()}function Ct(P){v.set(P.clientX,P.clientY),m.subVectors(v,y).multiplyScalar(n.panSpeed),G(m.x,m.y),y.copy(v),n.update()}function _t(P){gt(P.clientX,P.clientY),P.deltaY<0?J(b(P.deltaY)):P.deltaY>0&&tt(b(P.deltaY)),n.update()}function Ht(P){let X=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),X=!0;break}X&&(P.preventDefault(),n.update())}function Kt(P){if(S.length===1)d.set(P.pageX,P.pageY);else{const X=Yt(P),$=.5*(P.pageX+X.x),Z=.5*(P.pageY+X.y);d.set($,Z)}}function Bt(P){if(S.length===1)y.set(P.pageX,P.pageY);else{const X=Yt(P),$=.5*(P.pageX+X.x),Z=.5*(P.pageY+X.y);y.set($,Z)}}function Zt(P){const X=Yt(P),$=P.pageX-X.x,Z=P.pageY-X.y,lt=Math.sqrt($*$+Z*Z);g.set(0,lt)}function U(P){n.enableZoom&&Zt(P),n.enablePan&&Bt(P)}function ft(P){n.enableZoom&&Zt(P),n.enableRotate&&Kt(P)}function at(P){if(S.length==1)f.set(P.pageX,P.pageY);else{const $=Yt(P),Z=.5*(P.pageX+$.x),lt=.5*(P.pageY+$.y);f.set(Z,lt)}p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const X=n.domElement;D(2*Math.PI*p.x/X.clientHeight),R(2*Math.PI*p.y/X.clientHeight),d.copy(f)}function yt(P){if(S.length===1)v.set(P.pageX,P.pageY);else{const X=Yt(P),$=.5*(P.pageX+X.x),Z=.5*(P.pageY+X.y);v.set($,Z)}m.subVectors(v,y).multiplyScalar(n.panSpeed),G(m.x,m.y),y.copy(v)}function nt(P){const X=Yt(P),$=P.pageX-X.x,Z=P.pageY-X.y,lt=Math.sqrt($*$+Z*Z);w.set(0,lt),A.set(0,Math.pow(w.y/g.y,n.zoomSpeed)),tt(A.y),g.copy(w);const Lt=(P.pageX+X.x)*.5,zt=(P.pageY+X.y)*.5;gt(Lt,zt)}function Ft(P){n.enableZoom&&nt(P),n.enablePan&&yt(P)}function Et(P){n.enableZoom&&nt(P),n.enableRotate&&at(P)}function Rt(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",k),n.domElement.addEventListener("pointerup",I)),!Pt(P)&&(Jt(P),P.pointerType==="touch"?qt(P):q(P)))}function k(P){n.enabled!==!1&&(P.pointerType==="touch"?dt(P):st(P))}function I(P){switch(Gt(P),S.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",I),n.dispatchEvent(bg),s=r.NONE;break;case 1:const X=S[0],$=T[X];qt({pointerId:X,pageX:$.x,pageY:$.y});break}}function q(P){let X;switch(P.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Xs.DOLLY:if(n.enableZoom===!1)return;Nt(P),s=r.DOLLY;break;case Xs.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Vt(P),s=r.PAN}else{if(n.enableRotate===!1)return;xt(P),s=r.ROTATE}break;case Xs.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;xt(P),s=r.ROTATE}else{if(n.enablePan===!1)return;Vt(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ch)}function st(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;et(P);break;case r.DOLLY:if(n.enableZoom===!1)return;ot(P);break;case r.PAN:if(n.enablePan===!1)return;Ct(P);break}}function it(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(ch),_t(rt(P)),n.dispatchEvent(bg))}function rt(P){const X=P.deltaMode,$={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(X){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return P.ctrlKey&&!x&&($.deltaY*=10),$}function At(P){P.key==="Control"&&(x=!0,n.domElement.getRootNode().addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(P){P.key==="Control"&&(x=!1,n.domElement.getRootNode().removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function Tt(P){n.enabled===!1||n.enablePan===!1||Ht(P)}function qt(P){switch(Wt(P),S.length){case 1:switch(n.touches.ONE){case $s.ROTATE:if(n.enableRotate===!1)return;Kt(P),s=r.TOUCH_ROTATE;break;case $s.PAN:if(n.enablePan===!1)return;Bt(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case $s.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),s=r.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ch)}function dt(P){switch(Wt(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;at(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;yt(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Et(P),n.update();break;default:s=r.NONE}}function wt(P){n.enabled!==!1&&P.preventDefault()}function Jt(P){S.push(P.pointerId)}function Gt(P){delete T[P.pointerId];for(let X=0;X<S.length;X++)if(S[X]==P.pointerId){S.splice(X,1);return}}function Pt(P){for(let X=0;X<S.length;X++)if(S[X]==P.pointerId)return!0;return!1}function Wt(P){let X=T[P.pointerId];X===void 0&&(X=new ht,T[P.pointerId]=X),X.set(P.pageX,P.pageY)}function Yt(P){const X=P.pointerId===S[0]?S[1]:S[0];return T[X]}n.domElement.addEventListener("contextmenu",wt),n.domElement.addEventListener("pointerdown",Rt),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",it,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}class iD extends dI{constructor(t,e){super(),this.customUniforms=t,this.setValues(e),this.onBeforeCompile=n=>{n.uniforms.uGlitterSize=this.customUniforms.uGlitterSize,n.uniforms.uGlitterDensity=this.customUniforms.uGlitterDensity,n.vertexShader=n.vertexShader.replace("#include <common>",`
              #include <common>
              uniform float uGlitterSize;
              uniform float uGlitterDensity;
              varying vec2 vUv;
              varying vec3 vPosition;


          `),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
          #include <begin_vertex>
          vUv = uv;

      `),n.fragmentShader=n.fragmentShader.replace("#include <common>",`
    // Created by Inigo Quilez - iq/2014
    // Modified by Leanne Werner - 2022

      #include <common>
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uGlitterSize;
      uniform float uGlitterDensity;
    

      vec3 hash3( vec2 p ){
          vec3 q = vec3( dot(p,vec2(127.1,311.7)),
                        dot(p,vec2(269.5,183.3)),
                        dot(p,vec2(419.2,371.9)) );
        return fract(sin(q)*43758.5453);
      }

      vec3 findSpecLight (vec3 vnormal, vec3 diffuseColor) {
         vec3 specLight = vec3(0.0,0.0,0.0);
      
          vec3 pointLightPosition = vec3(vPosition) + vec3(.0,.0,1.0);
          vec3 pointLightColor = vec3(0,0,0);
          vec3 lightDirection = normalize(vPosition - pointLightPosition);
                  
          specLight.rgb += clamp(dot(-lightDirection, vnormal), 0., .9) * pointLightColor;
          specLight.rgb *= vec3(diffuseColor.rgb);

          return specLight;
      }

      float iqnoise( in vec2 x, float u, float v, vec3 vnormal ) {
       
        vec2 p = floor(x);
        vec2 f = fract(x);

        float k = 1.0+63.0*pow(1.0-v,4.0);

        float va = 0.0;
        float wt = 0.0;
          for( int j=-2; j<=2; j++ )
          for( int i=-2; i<=2; i++ ) {
            vec2 g = vec2( float(i),float(j) );
            vec3 o = hash3( p + g ) ;
            vec2 r = g - f + o.xy;
            float d = dot(r,r);
            float ww = pow( 1.0-smoothstep(0.04,.140,sqrt(d)),  k );
            va += o.z*ww;
            wt += ww ;
          }

          return va / wt;
      }

      `),n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_begin>",`
        #include <normal_fragment_begin>

         vec3 specLighting = findSpecLight(normal, diffuseColor.rgb);
         float f = iqnoise( uGlitterSize*(vUv.xy)*vec2(2,2), .1, 1.0, normal );
          
          vec3 c = vec3(f);
          vec3 col = mix( vec3(1.0), specLighting.rgb, smoothstep(0.25 + uGlitterDensity, .25, c.x ) );
          diffuseColor.rgb /= mix(vec3(col), vec3(c), vec3(0.0));
          `)}}}const al=new xf;al.hide();const ns=2.5,nn=1/6,Er=1.15;let Ni=li.NONE,ny=!1,va,vo,Cg,yi,hs,ds,yo,is,mr,su,ou,au,uc,iy;const ry=document.querySelector("canvas.webgl"),Pg=new TI,fa=new ht,Ye=new DP;Ye.background=new ne(13808780);const uh=new AI,rD=new EI("#fff",2.75);Ye.add(rD);const sy=new yf("#fff",.5);sy.position.set(0,4,9.5);Ye.add(sy);const oy=new yf("#fff",.5);oy.position.set(0,-4.5,9.5);Ye.add(oy);const Rn=new vI,ay=Rn.load("./textures/wall/painted_plaster_wall_diff_1k.jpg");ay.colorSpace=fn;const ly=Rn.load("./textures/box/green_metal_rust_diff_1k.jpg"),sD=Rn.load("./textures/box/green_metal_rust_arm_1k.jpg"),oD=Rn.load("./textures/box/green_metal_rust_nor_gl_1k.jpg");ly.colorSpace=fn;const aD=Rn.load("./textures/shelf/wood_peeling_paint_weathered_diff_1k.jpg"),hh=Rn.load("./textures/shelf/wood_peeling_paint_weathered_arm_1k.jpg"),lD=Rn.load("./textures/shelf/wood_peeling_paint_weathered_nor_gl_1k.jpg"),cy=Rn.load("./textures/posters/CardAlphaTexture.jpg"),uy=Rn.load("./textures/posters/CharmanderPosterColor.jpg"),cD=Rn.load("./textures/posters/CharmanderPosterMetal.jpg");uy.colorSpace=fn;const hy=Rn.load("./textures/posters/SquirtlePosterColor.jpg"),uD=Rn.load("./textures/posters/SquirtlePosterMetal.jpg");hy.colorSpace=fn;const hD=Rn.load("./textures/stickers/StickerAlpha.jpg"),dy=Rn.load("./textures/stickers/StickerColor.jpg");dy.colorSpace=fn;const fy=Rn.load("./textures/pins/charmanderPinColor.jpg"),py=Rn.load("./textures/pins/squirtlePinColor.jpg");py.colorSpace=fn;fy.colorSpace=fn;const dD=new Si({alphaMap:cy,transparent:!0,map:uy,metalnessMap:cD,metalness:1,roughness:.35}),fD=new Si({alphaMap:cy,transparent:!0,map:hy,metalnessMap:uD,metalness:1,roughness:.35});function pD(){const i=new me(new br(12,12,30,30),new Si({color:16777200,map:ay}));Ye.add(i),uh.load("./3dfonts/helvetiker_bold.typeface.json",o=>{const a={uGlitterSize:{value:20},uGlitterDensity:{value:1.2}},l=new iD(a,{color:"#643b9f"});is=new Ri,Ye.add(is);const c="PICK YOUR",h="PRESIDENT";c.split("").forEach((d,f)=>{const p=new jl(d,{font:o,size:.5,depth:.02,curveSegments:8});p.center();const y=new me(p,l);y.position.x=c[f-1]==="I"?f*.42:f*.5,y.position.x+=.25,y.rotation.z=(Math.random()-.5)*Math.PI/16,is.add(y)}),h.split("").forEach((d,f)=>{const p=new jl(d,{font:o,size:.5,depth:.02,curveSegments:12});p.center();const y=new me(p,l);y.position.x=h[f-1]==="I"?f*.49:f*.51,y.position.x+=.25,y.position.y=-1.25,y.rotation.z=(Math.random()-.5)*Math.PI/16,is.add(y)}),is.position.y=3.5,is.position.x=-2.25}),mr=new Ri,Ye.add(mr);const t=new me(new mf(.25,1.5,3,2),new za({color:"#000"}));t.rotation.z=Math.PI/2,t.position.y=1;const e=new me(new Cs(3,2,1),new Si({map:ly,aoMap:sD,displacementMap:oD,displacementScale:.3,displacementBias:-.15}));mr.add(t,e),uh.load("./3dfonts/optimer_bold.typeface.json",o=>{const a=new Si({color:"#B87333",metalness:1,roughness:.25}),l=new jl("VOTE",{font:o,size:.5,depth:.02,curveSegments:8});l.center();const c=new me(l,a);c.position.z=.501,mr.add(c),iy=c});function n(o,a,l){uh.load("./3dfonts/optimer_bold.typeface.json",c=>{const h=new Ri,d=new me(new gf(1*l,10),new Si({transparent:!0,alphaMap:hD,map:dy,metalness:.6,roughness:.3})),f=new me(new jl(o,{font:c,size:.6*l,height:.01,curveSegments:8}),new Si({color:"#000",metalness:1,roughness:.25}));f.geometry.center(),o==="1"&&(f.position.x+=-.05),f.position.z=.01,h.add(d,f),h.rotation.z=Math.PI/24,Ye.add(h),h.position.copy(a)})}n("1",new V(-1.85,4.4,.1),.8),n("2",new V(-.75,-2.15,1.51),.425);const r=new me(new Cs(10,.3,2),new Si({map:aD,aoMap:hh,roughnessMap:hh,metalnessMap:hh,normalMap:lD}));Ye.add(r),yi=new me(new br(.8*ns,1.15*ns,12,12),dD),hs=new me(new br(.8*ns,1.15*ns,12,12),fD),Ye.add(hs),Ye.add(yi);function s(o){const a=new Ri,l=new za({color:8421504}),c=new _f(.1*nn,.2*nn,16),h=new me(c,l);h.position.y=-.75*nn,h.rotation.z=Math.PI,a.add(h);const d=new _r(.1*nn,.1*nn,.8*nn,16),f=new me(d,l);f.position.y=-.25*nn,a.add(f);const p=new Si({color:o,metalness:.4,roughness:.3}),y=new me(new _r(.2*nn,.5*nn,.1*nn,16),p);y.position.y=0,a.add(y);const v=new me(new _r(.2*nn,.2*nn,.6*nn,16),p);v.position.y=.3*nn,a.add(v);const m=new me(new _r(.4*nn,.2*nn,.1*nn,16),p);return m.position.y=.6*nn,a.add(m),a}ds=s(16711680),Ye.add(ds),yo=s(255),Ye.add(yo),yo.rotation.set(Math.PI/2,Math.random()*-.6,Math.random()*-.3),yo.position.set(Er+.05,1.15*ns*.5-.09,.1),ds.rotation.set(Math.PI/2,Math.random()*.6,Math.random()*.3),ds.position.set(-Er,1.15*ns*.5-.1,.1),yi.position.x=0-Er,hs.position.x=0+Er,yi.position.z=.025,hs.position.z=.025,mr.position.y=-2.75,mr.position.z=1,r.position.y=-3.75,r.position.z=1}function mD(i){const t=new Ri;Ye.add(t);const e=new _r(.35,.35,.05,32,5),n=new hI({map:i===li.CHARMANDER?fy:py,clearcoat:.6,metalness:.4,roughness:.25,clearcoatRoughness:.2}),r=new me(e,n);r.position.z=1.5,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2,t.add(r);const s=new yf("#fff",.25);s.position.set(-.5,0,2),Ye.add(s),t.position.y=-.1,t.position.z=4;const o=new $o().setFromObject(t),a=new me(new br(10,4,2,2),new za({color:i===li.CHARMANDER?"#F8C8DC":"#A7C7E7"})),l=new V(o.x,o.y,(o.min.z+o.max.z)/2);t.position.sub(l);const c=new Ri;return c.add(t),c.position.add(l),c.position.y=12,r.position.z=1.75,Ye.add(c),c.add(a),c}const Ai={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ai.width=window.innerWidth,Ai.height=window.innerHeight,Ls.aspect=Ai.width/Ai.height,Ls.updateProjectionMatrix(),Go.setSize(Ai.width,Ai.height),Go.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Ls=new ii(75,Ai.width/Ai.height,.1,15);Ls.position.z=7;Ye.add(Ls);const Ke=new nD(Ls,ry);Ke.enablePan=!1;function my(){Ke.enableRotate=!0,Ke.maxAzimuthAngle=Math.PI/8,Ke.minAzimuthAngle=-Math.PI/8,Ke.minPolarAngle=Math.PI/2+-Math.PI/8,Ke.maxPolarAngle=Math.PI/2+Math.PI/8,Ke.maxDistance=7,Ke.minDistance=4}function gD(){Ke.enableRotate=!1,Ke.maxDistance=7,Ke.minDistance=6}my();const Go=new IP({canvas:ry});Go.setSize(Ai.width,Ai.height);Go.setPixelRatio(Math.min(window.devicePixelRatio,2));Go.shadowMap.enabled=!0;const _D=new SI,gy=()=>{_D.getElapsedTime(),Ke.update(),Go.render(Ye,Ls),window.requestAnimationFrame(gy)};function Ig(i){const t=ED(i);if(Ni==t){my(),AD(i===yi?ds:yo),TD(i),Ni=li.NONE,vy();return}gD(),_y(),Ni=t,MD(i===yi?ds:yo),SD(i)}async function vD(){try{return vy(),wD(dh()),(await aA($M(uA,"votes"),{vote:Ni})).id?yD(Ni):setTimeout(()=>Dg(dh()),500)}catch(i){setTimeout(()=>Dg(dh()),500),_y(),console.error("Error casting vote:",i)}}function yD(i){document.cookie=`vote=${i}; path=/; max-age=31536000`,yy(i)}function _y(){uc&&clearInterval(uc),uc=setInterval(()=>{Ey(iy,3)},5e3)}function vy(){clearInterval(uc)}function xD(){is.children.forEach((i,t)=>{setTimeout(()=>{Ey(i)},t*50)})}function yy(i,t=!0){ny=!0,Ke.enabled=!1,Cg=mD(i),bD(Cg,t),document.getElementById("hud-top").classList.add("animate-down"),document.getElementById("hud-bottom").classList.add("animate-up"),document.getElementById("voting").classList.add(i===li.CHARMANDER?"red":"blue")}function ED(i){return i==yi?li.CHARMANDER:li.SQUIRTLE}function dh(){return Ni===li.CHARMANDER?yi:hs}function xy(i){var e,n;i.type==="touchend"?(fa.x=i.changedTouches[0].clientX/window.innerWidth*2-1,fa.y=-(i.changedTouches[0].clientY/window.innerHeight)*2+1):(fa.x=i.clientX/window.innerWidth*2-1,fa.y=-(i.clientY/window.innerHeight)*2+1),Pg.setFromCamera(fa,Ls);const t=Pg.intersectObjects(Ye.children);t.length>0&&(ny||(t[0].object==yi?Ig(yi):t[0].object==hs?Ig(hs):((e=t[0].object)==null?void 0:e.parent)==mr&&Ni==li.NONE?xD():((n=t[0].object)==null?void 0:n.parent)==mr&&Ni!=li.NONE&&vD()))}function SD(i){va=new V(i===yi?-Er:Er,0,.025),Ve.to(i.position,{delay:.2,duration:Be.easeDuration,x:0,y:Be.posterSelectionHeight,z:Be.posterSelectionZ,ease:Be.resetEase})}function TD(i){Ve.to(i.position,{duration:Be.easeDuration+.2,x:va.x,y:va.y,z:va.z,ease:Be.resetEase}),va=void 0}function MD(i){vo=new V(i===ds?-Er:Er+.05,1.15*ns*.5-.09,.1),Ve.to(i.rotation,{duration:.2,x:Math.PI/4}),Ve.to(i.rotation,{delay:.1,duration:.2,x:Math.PI/2}),Ve.to(i.position,{duration:.3,y:i.position.y+.5,z:i.position.z+.3,ease:"power1.out"}),Ve.to(i.position,{delay:.15,duration:.2,z:vo.z,ease:"power1.out"})}function AD(i){Ve.to(i.position,{duration:.2,z:i.position.z+.3,ease:"power1.in"}),Ve.to(i.rotation,{duration:.2,x:Math.PI/4}),Ve.to(i.position,{delay:.2,duration:.3,x:vo.x,y:vo.y,z:vo.z,ease:"power1.out"}),Ve.to(i.rotation,{delay:.2,duration:.3,x:Math.PI/2,y:Math.random()*-.6,z:Math.random()*-.3}),vo=void 0}function wD(i){Ve.to(i.position,{duration:.5,z:1,ease:"power1.out"}),Ve.to(i.position,{delay:.3,duration:.5,y:-6,ease:"power1.out"}),Ve.to(i.material,{delay:.4,duration:.1,opacity:0,ease:"power1.out"})}function Dg(i){Ve.to(i.material,{duration:.2,opacity:1,ease:"power1.in"}),Ve.to(i.position,{duration:.3,y:Be.posterSelectionHeight,ease:"power1.out"}),Ve.to(i.position,{delay:.3,duration:.5,z:Be.posterSelectionZ,ease:"power1.out"})}function bD(i,t){t?Ve.to(i.position,{duration:1.5,y:0,ease:"power4.out"}):i.position.y=0,Ve.timeline({repeat:-1}).to(i.rotation,{duration:4,y:Math.PI/12,ease:"power2.inOut"}).to(i.rotation,{duration:4,y:-Math.PI/12,ease:"power2.inOut"}).to(i.rotation,{duration:2,y:0,ease:"power2.inOut"}).to(i.rotation,{duration:2,y:0,ease:"power2.inOut"})}function Ey(i,t=0){let e=Ve.timeline({yoyo:!0});return e.to(i.scale,{x:1.1,y:1.1,z:1.1,duration:.2,delay:t,ease:"power1.inOut"}),e.to(i.rotation,{z:"+=0.1",duration:.1,ease:"power1.inOut",yoyo:!0,repeat:3}),e.to(i.scale,{x:1,y:1,z:1,duration:.2,ease:"power1.inOut"}),e}function RD(){Ve.to(Ke.object.rotation,{duration:Be.easeDuration,x:0,y:0,z:0,ease:Be.resetEase}),Ve.to(Ke.object.position,{duration:Be.easeDuration,x:Ke.position0.x,y:Ke.position0.y,z:Ke.position0.z,ease:Be.resetEase})}const Be={};Be.resetEase="elastic.out(1,2)";Be.easeDuration=.3;Be.spawnDistance=16;Be.posterSelectionHeight=.75;Be.posterSelectionZ=4;Be.buttonSize=.3;al.add(Be,"posterSelectionHeight");al.add(Be,"posterSelectionZ");al.add(Be,"resetEase");al.add(Be,"easeDuration");function Lg(i){const t=document.cookie.split(";");for(let e of t)if(e=e.trim(),e.startsWith(i+"="))return e.substring(i.length+1);return null}function CD(i){au=Date.now(),su=i.touches[0].clientX,ou=i.touches[0].clientY}function PD(i){const t=i.changedTouches[0].clientX,e=i.changedTouches[0].clientY,n=t-su,r=e-ou,s=Date.now()-au,o=Math.sqrt(n*n+r*r);(s<300||o<2||Ni!=li.NONE&&o>50)&&xy(i)}function ID(i){au=Date.now(),su=i.clientX,ou=i.clientY}function DD(i){const t=i.clientX,e=i.clientY,n=t-su,r=e-ou,s=Math.sqrt(n*n+r*r);(Date.now()-au<300||s<2||Ni!=li.NONE)&&xy(i)}Ke.addEventListener("end",()=>RD());/Mobi|Android/i.test(navigator.userAgent)?(window.addEventListener("touchstart",CD,!1),window.addEventListener("touchend",PD,!1)):(window.addEventListener("mousedown",ID,!1),window.addEventListener("mouseup",DD,!1));Lg("vote")?yy(Lg("vote"),!1):pD();gy();
//# sourceMappingURL=index-DQE_TzAp.js.map
