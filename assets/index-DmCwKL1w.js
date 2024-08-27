(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var rp={};/**
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
 */const Cg=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},xy=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),n.push(e[h],e[f],e[d],e[p])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Cg(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):xy(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const c=r<i.length?e[i.charAt(r)]:64;++r;const f=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new Ey;const d=s<<2|a>>4;if(n.push(d),c!==64){const p=a<<4&240|c>>2;if(n.push(p),f!==64){const x=c<<6&192|f;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sy=function(i){const t=Cg(i);return Pg.encodeByteArray(t,!0)},lc=function(i){return Sy(i).replace(/\./g,"")},Ty=function(i){try{return Pg.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function My(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ay=()=>My().__FIREBASE_DEFAULTS__,wy=()=>{if(typeof process>"u"||typeof rp>"u")return;const i=rp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},by=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Ty(i[1]);return t&&JSON.parse(t)},Sf=()=>{try{return Ay()||wy()||by()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ry=i=>{var t,e;return(e=(t=Sf())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},Cy=i=>{const t=Ry(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ig=()=>{var i;return(i=Sf())===null||i===void 0?void 0:i.config};/**
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
 */class Py{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function Iy(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[lc(JSON.stringify(e)),lc(JSON.stringify(o)),""].join(".")}/**
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
 */function Dy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ly(){var i;const t=(i=Sf())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ny(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Oy(){return!Ly()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dg(){try{return typeof indexedDB=="object"}catch{return!1}}function Lg(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}function Uy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Fy="FirebaseError";class Ur extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Fy,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fc.prototype.create)}}class Fc{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?Vy(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ur(r,a,n)}}function Vy(i,t){return i.replace(ky,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const ky=/\{\$([^}]+)}/g;function cc(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(sp(s)&&sp(o)){if(!cc(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function sp(i){return i!==null&&typeof i=="object"}/**
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
 */const By=1e3,zy=2,Hy=4*60*60*1e3,Gy=.5;function op(i,t=By,e=zy){const n=t*Math.pow(e,i),r=Math.round(Gy*n*(Math.random()-.5)*2);return Math.min(Hy,n+r)}/**
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
 */function ys(i){return i&&i._delegate?i._delegate:i}class tr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class Wy{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Py;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($y(t))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Jr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jr){return this.instances.has(t)}getOptions(t=Jr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Xy(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Jr){return this.component?this.component.multipleInstances?t:Jr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xy(i){return i===Jr?void 0:i}function $y(i){return i.instantiationMode==="EAGER"}/**
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
 */class qy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wy(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const jy={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Yy=ue.INFO,Ky={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Jy=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=Ky[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tf{constructor(t){this.name=t,this._logLevel=Yy,this._logHandler=Jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const Zy=(i,t)=>t.some(e=>i instanceof e);let ap,lp;function Qy(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tx(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ng=new WeakMap,lh=new WeakMap,Og=new WeakMap,au=new WeakMap,Mf=new WeakMap;function ex(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(yr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Ng.set(e,i)}).catch(()=>{}),Mf.set(t,i),t}function nx(i){if(lh.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});lh.set(i,t)}let ch={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return lh.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Og.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return yr(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function ix(i){ch=i(ch)}function rx(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(lu(this),t,...e);return Og.set(n,t.sort?t.sort():[t]),yr(n)}:tx().includes(i)?function(...t){return i.apply(lu(this),t),yr(Ng.get(this))}:function(...t){return yr(i.apply(lu(this),t))}}function sx(i){return typeof i=="function"?rx(i):(i instanceof IDBTransaction&&nx(i),Zy(i,Qy())?new Proxy(i,ch):i)}function yr(i){if(i instanceof IDBRequest)return ex(i);if(au.has(i))return au.get(i);const t=sx(i);return t!==i&&(au.set(i,t),Mf.set(t,i)),t}const lu=i=>Mf.get(i);function Ug(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=yr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ox=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],cu=new Map;function cp(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(cu.get(t))return cu.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=ax.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||ox.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),r&&l.done]))[0]};return cu.set(t,s),s}ix(i=>({...i,get:(t,e,n)=>cp(t,e)||i.get(t,e,n),has:(t,e)=>!!cp(t,e)||i.has(t,e)}));/**
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
 */class lx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(cx(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function cx(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const uh="@firebase/app",up="0.10.8";/**
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
 */const xs=new Tf("@firebase/app"),ux="@firebase/app-compat",hx="@firebase/analytics-compat",fx="@firebase/analytics",dx="@firebase/app-check-compat",px="@firebase/app-check",mx="@firebase/auth",gx="@firebase/auth-compat",_x="@firebase/database",vx="@firebase/database-compat",yx="@firebase/functions",xx="@firebase/functions-compat",Ex="@firebase/installations",Sx="@firebase/installations-compat",Tx="@firebase/messaging",Mx="@firebase/messaging-compat",Ax="@firebase/performance",wx="@firebase/performance-compat",bx="@firebase/remote-config",Rx="@firebase/remote-config-compat",Cx="@firebase/storage",Px="@firebase/storage-compat",Ix="@firebase/firestore",Dx="@firebase/vertexai-preview",Lx="@firebase/firestore-compat",Nx="firebase",Ox="10.12.5";/**
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
 */const hh="[DEFAULT]",Ux={[uh]:"fire-core",[ux]:"fire-core-compat",[fx]:"fire-analytics",[hx]:"fire-analytics-compat",[px]:"fire-app-check",[dx]:"fire-app-check-compat",[mx]:"fire-auth",[gx]:"fire-auth-compat",[_x]:"fire-rtdb",[vx]:"fire-rtdb-compat",[yx]:"fire-fn",[xx]:"fire-fn-compat",[Ex]:"fire-iid",[Sx]:"fire-iid-compat",[Tx]:"fire-fcm",[Mx]:"fire-fcm-compat",[Ax]:"fire-perf",[wx]:"fire-perf-compat",[bx]:"fire-rc",[Rx]:"fire-rc-compat",[Cx]:"fire-gcs",[Px]:"fire-gcs-compat",[Ix]:"fire-fst",[Lx]:"fire-fst-compat",[Dx]:"fire-vertex","fire-js":"fire-js",[Nx]:"fire-js-all"};/**
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
 */const uc=new Map,Fx=new Map,fh=new Map;function hp(i,t){try{i.container.addComponent(t)}catch(e){xs.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Rr(i){const t=i.name;if(fh.has(t))return xs.debug(`There were multiple attempts to register component ${t}.`),!1;fh.set(t,i);for(const e of uc.values())hp(e,i);for(const e of Fx.values())hp(e,i);return!0}function Za(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
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
 */const Vx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Fc("app","Firebase",Vx);/**
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
 */class kx{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Bx=Ox;function Fg(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:hh,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw xr.create("bad-app-name",{appName:String(r)});if(e||(e=Ig()),!e)throw xr.create("no-options");const s=uc.get(r);if(s){if(cc(e,s.options)&&cc(n,s.config))return s;throw xr.create("duplicate-app",{appName:r})}const o=new qy(r);for(const l of fh.values())o.addComponent(l);const a=new kx(e,n,o);return uc.set(r,a),a}function Vg(i=hh){const t=uc.get(i);if(!t&&i===hh&&Ig())return Fg();if(!t)throw xr.create("no-app",{appName:i});return t}function wi(i,t,e){var n;let r=(n=Ux[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Rr(new tr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const zx="firebase-heartbeat-database",Hx=1,Ia="firebase-heartbeat-store";let uu=null;function kg(){return uu||(uu=Ug(zx,Hx,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Ia)}catch(e){console.warn(e)}}}}).catch(i=>{throw xr.create("idb-open",{originalErrorMessage:i.message})})),uu}async function Gx(i){try{const e=(await kg()).transaction(Ia),n=await e.objectStore(Ia).get(Bg(i));return await e.done,n}catch(t){if(t instanceof Ur)xs.warn(t.message);else{const e=xr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xs.warn(e.message)}}}async function fp(i,t){try{const n=(await kg()).transaction(Ia,"readwrite");await n.objectStore(Ia).put(t,Bg(i)),await n.done}catch(e){if(e instanceof Ur)xs.warn(e.message);else{const n=xr.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}function Bg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Wx=1024,Xx=30*24*60*60*1e3;class $x{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jx(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Xx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dp(),{heartbeatsToSend:n,unsentEntries:r}=qx(this._heartbeatsCache.heartbeats),s=lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dp(){return new Date().toISOString().substring(0,10)}function qx(i,t=Wx){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),pp(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),pp(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class jx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dg()?Lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Gx(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return fp(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return fp(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function pp(i){return lc(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Yx(i){Rr(new tr("platform-logger",t=>new lx(t),"PRIVATE")),Rr(new tr("heartbeat",t=>new $x(t),"PRIVATE")),wi(uh,up,i),wi(uh,up,"esm2017"),wi("fire-js","")}Yx("");var Kx="firebase",Jx="10.12.5";/**
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
 */wi(Kx,Jx,"app");const zg="@firebase/installations",Af="0.6.8";/**
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
 */const Hg=1e4,Gg=`w:${Af}`,Wg="FIS_v2",Zx="https://firebaseinstallations.googleapis.com/v1",Qx=60*60*1e3,tE="installations",eE="Installations";/**
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
 */const nE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new Fc(tE,eE,nE);function Xg(i){return i instanceof Ur&&i.code.includes("request-failed")}/**
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
 */function $g({projectId:i}){return`${Zx}/projects/${i}/installations`}function qg(i){return{token:i.token,requestStatus:2,expiresIn:rE(i.expiresIn),creationTime:Date.now()}}async function jg(i,t){const n=(await t.json()).error;return Es.create("request-failed",{requestName:i,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Yg({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function iE(i,{refreshToken:t}){const e=Yg(i);return e.append("Authorization",sE(t)),e}async function Kg(i){const t=await i();return t.status>=500&&t.status<600?i():t}function rE(i){return Number(i.replace("s","000"))}function sE(i){return`${Wg} ${i}`}/**
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
 */async function oE({appConfig:i,heartbeatServiceProvider:t},{fid:e}){const n=$g(i),r=Yg(i),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:e,authVersion:Wg,appId:i.appId,sdkVersion:Gg},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Kg(()=>fetch(n,a));if(l.ok){const c=await l.json();return{fid:c.fid||e,registrationStatus:2,refreshToken:c.refreshToken,authToken:qg(c.authToken)}}else throw await jg("Create Installation",l)}/**
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
 */function Jg(i){return new Promise(t=>{setTimeout(t,i)})}/**
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
 */function aE(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lE=/^[cdef][\w-]{21}$/,dh="";function cE(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const e=uE(i);return lE.test(e)?e:dh}catch{return dh}}function uE(i){return aE(i).substr(0,22)}/**
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
 */function Vc(i){return`${i.appName}!${i.appId}`}/**
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
 */const Zg=new Map;function Qg(i,t){const e=Vc(i);t_(e,t),hE(e,t)}function t_(i,t){const e=Zg.get(i);if(e)for(const n of e)n(t)}function hE(i,t){const e=fE();e&&e.postMessage({key:i,fid:t}),dE()}let ss=null;function fE(){return!ss&&"BroadcastChannel"in self&&(ss=new BroadcastChannel("[Firebase] FID Change"),ss.onmessage=i=>{t_(i.data.key,i.data.fid)}),ss}function dE(){Zg.size===0&&ss&&(ss.close(),ss=null)}/**
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
 */const pE="firebase-installations-database",mE=1,Ss="firebase-installations-store";let hu=null;function wf(){return hu||(hu=Ug(pE,mE,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(Ss)}}})),hu}async function hc(i,t){const e=Vc(i),r=(await wf()).transaction(Ss,"readwrite"),s=r.objectStore(Ss),o=await s.get(e);return await s.put(t,e),await r.done,(!o||o.fid!==t.fid)&&Qg(i,t.fid),t}async function e_(i){const t=Vc(i),n=(await wf()).transaction(Ss,"readwrite");await n.objectStore(Ss).delete(t),await n.done}async function kc(i,t){const e=Vc(i),r=(await wf()).transaction(Ss,"readwrite"),s=r.objectStore(Ss),o=await s.get(e),a=t(o);return a===void 0?await s.delete(e):await s.put(a,e),await r.done,a&&(!o||o.fid!==a.fid)&&Qg(i,a.fid),a}/**
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
 */async function bf(i){let t;const e=await kc(i.appConfig,n=>{const r=gE(n),s=_E(i,r);return t=s.registrationPromise,s.installationEntry});return e.fid===dh?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function gE(i){const t=i||{fid:cE(),registrationStatus:0};return n_(t)}function _E(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Es.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=vE(i,e);return{installationEntry:e,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yE(i)}:{installationEntry:t}}async function vE(i,t){try{const e=await oE(i,t);return hc(i.appConfig,e)}catch(e){throw Xg(e)&&e.customData.serverCode===409?await e_(i.appConfig):await hc(i.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function yE(i){let t=await mp(i.appConfig);for(;t.registrationStatus===1;)await Jg(100),t=await mp(i.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:n}=await bf(i);return n||e}return t}function mp(i){return kc(i,t=>{if(!t)throw Es.create("installation-not-found");return n_(t)})}function n_(i){return xE(i)?{fid:i.fid,registrationStatus:0}:i}function xE(i){return i.registrationStatus===1&&i.registrationTime+Hg<Date.now()}/**
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
 */async function EE({appConfig:i,heartbeatServiceProvider:t},e){const n=SE(i,e),r=iE(i,e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:Gg,appId:i.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Kg(()=>fetch(n,a));if(l.ok){const c=await l.json();return qg(c)}else throw await jg("Generate Auth Token",l)}function SE(i,{fid:t}){return`${$g(i)}/${t}/authTokens:generate`}/**
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
 */async function Rf(i,t=!1){let e;const n=await kc(i.appConfig,s=>{if(!i_(s))throw Es.create("not-registered");const o=s.authToken;if(!t&&AE(o))return s;if(o.requestStatus===1)return e=TE(i,t),s;{if(!navigator.onLine)throw Es.create("app-offline");const a=bE(s);return e=ME(i,a),a}});return e?await e:n.authToken}async function TE(i,t){let e=await gp(i.appConfig);for(;e.authToken.requestStatus===1;)await Jg(100),e=await gp(i.appConfig);const n=e.authToken;return n.requestStatus===0?Rf(i,t):n}function gp(i){return kc(i,t=>{if(!i_(t))throw Es.create("not-registered");const e=t.authToken;return RE(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ME(i,t){try{const e=await EE(i,t),n=Object.assign(Object.assign({},t),{authToken:e});return await hc(i.appConfig,n),e}catch(e){if(Xg(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await e_(i.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await hc(i.appConfig,n)}throw e}}function i_(i){return i!==void 0&&i.registrationStatus===2}function AE(i){return i.requestStatus===2&&!wE(i)}function wE(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+Qx}function bE(i){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:t})}function RE(i){return i.requestStatus===1&&i.requestTime+Hg<Date.now()}/**
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
 */async function CE(i){const t=i,{installationEntry:e,registrationPromise:n}=await bf(t);return n?n.catch(console.error):Rf(t).catch(console.error),e.fid}/**
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
 */async function PE(i,t=!1){const e=i;return await IE(e),(await Rf(e,t)).token}async function IE(i){const{registrationPromise:t}=await bf(i);t&&await t}/**
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
 */function DE(i){if(!i||!i.options)throw fu("App Configuration");if(!i.name)throw fu("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!i.options[e])throw fu(e);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function fu(i){return Es.create("missing-app-config-values",{valueName:i})}/**
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
 */const r_="installations",LE="installations-internal",NE=i=>{const t=i.getProvider("app").getImmediate(),e=DE(t),n=Za(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},OE=i=>{const t=i.getProvider("app").getImmediate(),e=Za(t,r_).getImmediate();return{getId:()=>CE(e),getToken:r=>PE(e,r)}};function UE(){Rr(new tr(r_,NE,"PUBLIC")),Rr(new tr(LE,OE,"PRIVATE"))}UE();wi(zg,Af);wi(zg,Af,"esm2017");/**
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
 */const fc="analytics",FE="firebase_id",VE="origin",kE=60*1e3,BE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Nn=new Tf("@firebase/analytics");/**
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
 */const zE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Kn=new Fc("analytics","Analytics",zE);/**
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
 */function HE(i){if(!i.startsWith(Cf)){const t=Kn.create("invalid-gtag-resource",{gtagURL:i});return Nn.warn(t.message),""}return i}function s_(i){return Promise.all(i.map(t=>t.catch(e=>e)))}function GE(i,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(i,t)),e}function WE(i,t){const e=GE("firebase-js-sdk-policy",{createScriptURL:HE}),n=document.createElement("script"),r=`${Cf}?l=${i}&id=${t}`;n.src=e?e==null?void 0:e.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function XE(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function $E(i,t,e,n,r,s){const o=n[r];try{if(o)await t[o];else{const l=(await s_(e)).find(c=>c.measurementId===r);l&&await t[l.appId]}}catch(a){Nn.error(a)}i("config",r,s)}async function qE(i,t,e,n,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await s_(e);for(const l of o){const c=a.find(f=>f.measurementId===l),h=c&&t[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),i("event",n,r||{})}catch(s){Nn.error(s)}}function jE(i,t,e,n){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await qE(i,t,e,a,l)}else if(s==="config"){const[a,l]=o;await $E(i,t,e,n,a,l)}else if(s==="consent"){const[a,l]=o;i("consent",a,l)}else if(s==="get"){const[a,l,c]=o;i("get",a,l,c)}else if(s==="set"){const[a]=o;i("set",a)}else i(s,...o)}catch(a){Nn.error(a)}}return r}function YE(i,t,e,n,r){let s=function(...o){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=jE(s,i,t,e),{gtagCore:s,wrappedGtag:window[r]}}function KE(i){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Cf)&&e.src.includes(i))return e;return null}/**
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
 */const JE=30,ZE=1e3;class QE{constructor(t={},e=ZE){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const o_=new QE;function tS(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function eS(i){var t;const{appId:e,apiKey:n}=i,r={method:"GET",headers:tS(n)},s=BE.replace("{app-id}",e),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Kn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function nS(i,t=o_,e){const{appId:n,apiKey:r,measurementId:s}=i.options;if(!n)throw Kn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw Kn.create("no-api-key")}const o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sS;return setTimeout(async()=>{a.abort()},kE),a_({appId:n,apiKey:r,measurementId:s},o,a,t)}async function a_(i,{throttleEndTimeMillis:t,backoffCount:e},n,r=o_){var s;const{appId:o,measurementId:a}=i;try{await iS(n,t)}catch(l){if(a)return Nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await eS(i);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!rS(c)){if(r.deleteThrottleMetadata(o),a)return Nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?op(e,r.intervalMillis,JE):op(e,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:e+1};return r.setThrottleMetadata(o,f),Nn.debug(`Calling attemptFetch again in ${h} millis`),a_(i,f,n,r)}}function iS(i,t){return new Promise((e,n)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(e,r);i.addEventListener(()=>{clearTimeout(s),n(Kn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function rS(i){if(!(i instanceof Ur)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class sS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function oS(i,t,e,n,r){if(r&&r.global){i("event",e,n);return}else{const s=await t,o=Object.assign(Object.assign({},n),{send_to:s});i("event",e,o)}}/**
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
 */async function aS(){if(Dg())try{await Lg()}catch(i){return Nn.warn(Kn.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return Nn.warn(Kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lS(i,t,e,n,r,s,o){var a;const l=nS(i);l.then(p=>{e[p.measurementId]=p.appId,i.options.measurementId&&p.measurementId!==i.options.measurementId&&Nn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Nn.error(p)),t.push(l);const c=aS().then(p=>{if(p)return n.getId()}),[h,f]=await Promise.all([l,c]);KE(s)||WE(s,h.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[VE]="firebase",d.update=!0,f!=null&&(d[FE]=f),r("config",h.measurementId,d),h.measurementId}/**
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
 */class cS{constructor(t){this.app=t}_delete(){return delete ya[this.app.options.appId],Promise.resolve()}}let ya={},_p=[];const vp={};let du="dataLayer",uS="gtag",yp,l_,xp=!1;function hS(){const i=[];if(Ny()&&i.push("This is a browser extension environment."),Uy()||i.push("Cookies are not available."),i.length>0){const t=i.map((n,r)=>`(${r+1}) ${n}`).join(" "),e=Kn.create("invalid-analytics-context",{errorInfo:t});Nn.warn(e.message)}}function fS(i,t,e){hS();const n=i.options.appId;if(!n)throw Kn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kn.create("no-api-key");if(ya[n]!=null)throw Kn.create("already-exists",{id:n});if(!xp){XE(du);const{wrappedGtag:s,gtagCore:o}=YE(ya,_p,vp,du,uS);l_=s,yp=o,xp=!0}return ya[n]=lS(i,_p,vp,t,yp,du,e),new cS(i)}function dS(i=Vg()){i=ys(i);const t=Za(i,fc);return t.isInitialized()?t.getImmediate():pS(i)}function pS(i,t={}){const e=Za(i,fc);if(e.isInitialized()){const r=e.getImmediate();if(cc(t,e.getOptions()))return r;throw Kn.create("already-initialized")}return e.initialize({options:t})}function mS(i,t,e,n){i=ys(i),oS(l_,ya[i.app.options.appId],t,e,n).catch(r=>Nn.error(r))}const Ep="@firebase/analytics",Sp="0.10.7";function gS(){Rr(new tr(fc,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return fS(n,r,e)},"PUBLIC")),Rr(new tr("analytics-internal",i,"PRIVATE")),wi(Ep,Sp),wi(Ep,Sp,"esm2017");function i(t){try{const e=t.getProvider(fc).getImmediate();return{logEvent:(n,r,s)=>mS(e,n,r,s)}}catch(e){throw Kn.create("interop-component-reg-failed",{reason:e})}}}gS();var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,T){function y(){}y.prototype=T.prototype,S.D=T.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(E,b,L){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return T.prototype[b].apply(E,C)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,T,y){y||(y=0);var E=Array(16);if(typeof T=="string")for(var b=0;16>b;++b)E[b]=T.charCodeAt(y++)|T.charCodeAt(y++)<<8|T.charCodeAt(y++)<<16|T.charCodeAt(y++)<<24;else for(b=0;16>b;++b)E[b]=T[y++]|T[y++]<<8|T[y++]<<16|T[y++]<<24;T=S.g[0],y=S.g[1],b=S.g[2];var L=S.g[3],C=T+(L^y&(b^L))+E[0]+3614090360&4294967295;T=y+(C<<7&4294967295|C>>>25),C=L+(b^T&(y^b))+E[1]+3905402710&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(y^L&(T^y))+E[2]+606105819&4294967295,b=L+(C<<17&4294967295|C>>>15),C=y+(T^b&(L^T))+E[3]+3250441966&4294967295,y=b+(C<<22&4294967295|C>>>10),C=T+(L^y&(b^L))+E[4]+4118548399&4294967295,T=y+(C<<7&4294967295|C>>>25),C=L+(b^T&(y^b))+E[5]+1200080426&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(y^L&(T^y))+E[6]+2821735955&4294967295,b=L+(C<<17&4294967295|C>>>15),C=y+(T^b&(L^T))+E[7]+4249261313&4294967295,y=b+(C<<22&4294967295|C>>>10),C=T+(L^y&(b^L))+E[8]+1770035416&4294967295,T=y+(C<<7&4294967295|C>>>25),C=L+(b^T&(y^b))+E[9]+2336552879&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(y^L&(T^y))+E[10]+4294925233&4294967295,b=L+(C<<17&4294967295|C>>>15),C=y+(T^b&(L^T))+E[11]+2304563134&4294967295,y=b+(C<<22&4294967295|C>>>10),C=T+(L^y&(b^L))+E[12]+1804603682&4294967295,T=y+(C<<7&4294967295|C>>>25),C=L+(b^T&(y^b))+E[13]+4254626195&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(y^L&(T^y))+E[14]+2792965006&4294967295,b=L+(C<<17&4294967295|C>>>15),C=y+(T^b&(L^T))+E[15]+1236535329&4294967295,y=b+(C<<22&4294967295|C>>>10),C=T+(b^L&(y^b))+E[1]+4129170786&4294967295,T=y+(C<<5&4294967295|C>>>27),C=L+(y^b&(T^y))+E[6]+3225465664&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^y&(L^T))+E[11]+643717713&4294967295,b=L+(C<<14&4294967295|C>>>18),C=y+(L^T&(b^L))+E[0]+3921069994&4294967295,y=b+(C<<20&4294967295|C>>>12),C=T+(b^L&(y^b))+E[5]+3593408605&4294967295,T=y+(C<<5&4294967295|C>>>27),C=L+(y^b&(T^y))+E[10]+38016083&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^y&(L^T))+E[15]+3634488961&4294967295,b=L+(C<<14&4294967295|C>>>18),C=y+(L^T&(b^L))+E[4]+3889429448&4294967295,y=b+(C<<20&4294967295|C>>>12),C=T+(b^L&(y^b))+E[9]+568446438&4294967295,T=y+(C<<5&4294967295|C>>>27),C=L+(y^b&(T^y))+E[14]+3275163606&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^y&(L^T))+E[3]+4107603335&4294967295,b=L+(C<<14&4294967295|C>>>18),C=y+(L^T&(b^L))+E[8]+1163531501&4294967295,y=b+(C<<20&4294967295|C>>>12),C=T+(b^L&(y^b))+E[13]+2850285829&4294967295,T=y+(C<<5&4294967295|C>>>27),C=L+(y^b&(T^y))+E[2]+4243563512&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^y&(L^T))+E[7]+1735328473&4294967295,b=L+(C<<14&4294967295|C>>>18),C=y+(L^T&(b^L))+E[12]+2368359562&4294967295,y=b+(C<<20&4294967295|C>>>12),C=T+(y^b^L)+E[5]+4294588738&4294967295,T=y+(C<<4&4294967295|C>>>28),C=L+(T^y^b)+E[8]+2272392833&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^y)+E[11]+1839030562&4294967295,b=L+(C<<16&4294967295|C>>>16),C=y+(b^L^T)+E[14]+4259657740&4294967295,y=b+(C<<23&4294967295|C>>>9),C=T+(y^b^L)+E[1]+2763975236&4294967295,T=y+(C<<4&4294967295|C>>>28),C=L+(T^y^b)+E[4]+1272893353&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^y)+E[7]+4139469664&4294967295,b=L+(C<<16&4294967295|C>>>16),C=y+(b^L^T)+E[10]+3200236656&4294967295,y=b+(C<<23&4294967295|C>>>9),C=T+(y^b^L)+E[13]+681279174&4294967295,T=y+(C<<4&4294967295|C>>>28),C=L+(T^y^b)+E[0]+3936430074&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^y)+E[3]+3572445317&4294967295,b=L+(C<<16&4294967295|C>>>16),C=y+(b^L^T)+E[6]+76029189&4294967295,y=b+(C<<23&4294967295|C>>>9),C=T+(y^b^L)+E[9]+3654602809&4294967295,T=y+(C<<4&4294967295|C>>>28),C=L+(T^y^b)+E[12]+3873151461&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^y)+E[15]+530742520&4294967295,b=L+(C<<16&4294967295|C>>>16),C=y+(b^L^T)+E[2]+3299628645&4294967295,y=b+(C<<23&4294967295|C>>>9),C=T+(b^(y|~L))+E[0]+4096336452&4294967295,T=y+(C<<6&4294967295|C>>>26),C=L+(y^(T|~b))+E[7]+1126891415&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~y))+E[14]+2878612391&4294967295,b=L+(C<<15&4294967295|C>>>17),C=y+(L^(b|~T))+E[5]+4237533241&4294967295,y=b+(C<<21&4294967295|C>>>11),C=T+(b^(y|~L))+E[12]+1700485571&4294967295,T=y+(C<<6&4294967295|C>>>26),C=L+(y^(T|~b))+E[3]+2399980690&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~y))+E[10]+4293915773&4294967295,b=L+(C<<15&4294967295|C>>>17),C=y+(L^(b|~T))+E[1]+2240044497&4294967295,y=b+(C<<21&4294967295|C>>>11),C=T+(b^(y|~L))+E[8]+1873313359&4294967295,T=y+(C<<6&4294967295|C>>>26),C=L+(y^(T|~b))+E[15]+4264355552&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~y))+E[6]+2734768916&4294967295,b=L+(C<<15&4294967295|C>>>17),C=y+(L^(b|~T))+E[13]+1309151649&4294967295,y=b+(C<<21&4294967295|C>>>11),C=T+(b^(y|~L))+E[4]+4149444226&4294967295,T=y+(C<<6&4294967295|C>>>26),C=L+(y^(T|~b))+E[11]+3174756917&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~y))+E[2]+718787259&4294967295,b=L+(C<<15&4294967295|C>>>17),C=y+(L^(b|~T))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+T&4294967295,S.g[1]=S.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,S.g[2]=S.g[2]+b&4294967295,S.g[3]=S.g[3]+L&4294967295}n.prototype.u=function(S,T){T===void 0&&(T=S.length);for(var y=T-this.blockSize,E=this.B,b=this.h,L=0;L<T;){if(b==0)for(;L<=y;)r(this,S,L),L+=this.blockSize;if(typeof S=="string"){for(;L<T;)if(E[b++]=S.charCodeAt(L++),b==this.blockSize){r(this,E),b=0;break}}else for(;L<T;)if(E[b++]=S[L++],b==this.blockSize){r(this,E),b=0;break}}this.h=b,this.o+=T},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var T=1;T<S.length-8;++T)S[T]=0;var y=8*this.o;for(T=S.length-8;T<S.length;++T)S[T]=y&255,y/=256;for(this.u(S),S=Array(16),T=y=0;4>T;++T)for(var E=0;32>E;E+=8)S[y++]=this.g[T]>>>E&255;return S};function s(S,T){var y=a;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=T(S)}function o(S,T){this.h=T;for(var y=[],E=!0,b=S.length-1;0<=b;b--){var L=S[b]|0;E&&L==T||(y[b]=L,E=!1)}this.g=y}var a={};function l(S){return-128<=S&&128>S?s(S,function(T){return new o([T|0],0>T?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return g(c(-S));for(var T=[],y=1,E=0;S>=y;E++)T[E]=S/y|0,y*=4294967296;return new o(T,0)}function h(S,T){if(S.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S.charAt(0)=="-")return g(h(S.substring(1),T));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=c(Math.pow(T,8)),E=f,b=0;b<S.length;b+=8){var L=Math.min(8,S.length-b),C=parseInt(S.substring(b,b+L),T);8>L?(L=c(Math.pow(T,L)),E=E.j(L).add(c(C))):(E=E.j(y),E=E.add(c(C)))}return E}var f=l(0),d=l(1),p=l(16777216);i=o.prototype,i.m=function(){if(v(this))return-g(this).m();for(var S=0,T=1,y=0;y<this.g.length;y++){var E=this.i(y);S+=(0<=E?E:4294967296+E)*T,T*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(v(this))return"-"+g(this).toString(S);for(var T=c(Math.pow(S,6)),y=this,E="";;){var b=R(y,T).g;y=m(y,b.j(T));var L=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=b,x(y))return L+E;for(;6>L.length;)L="0"+L;E=L+E}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var T=0;T<S.g.length;T++)if(S.g[T]!=0)return!1;return!0}function v(S){return S.h==-1}i.l=function(S){return S=m(this,S),v(S)?-1:x(S)?0:1};function g(S){for(var T=S.g.length,y=[],E=0;E<T;E++)y[E]=~S.g[E];return new o(y,~S.h).add(d)}i.abs=function(){return v(this)?g(this):this},i.add=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],E=0,b=0;b<=T;b++){var L=E+(this.i(b)&65535)+(S.i(b)&65535),C=(L>>>16)+(this.i(b)>>>16)+(S.i(b)>>>16);E=C>>>16,L&=65535,C&=65535,y[b]=C<<16|L}return new o(y,y[y.length-1]&-2147483648?-1:0)};function m(S,T){return S.add(g(T))}i.j=function(S){if(x(this)||x(S))return f;if(v(this))return v(S)?g(this).j(g(S)):g(g(this).j(S));if(v(S))return g(this.j(g(S)));if(0>this.l(p)&&0>S.l(p))return c(this.m()*S.m());for(var T=this.g.length+S.g.length,y=[],E=0;E<2*T;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<S.g.length;b++){var L=this.i(E)>>>16,C=this.i(E)&65535,W=S.i(b)>>>16,K=S.i(b)&65535;y[2*E+2*b]+=C*K,w(y,2*E+2*b),y[2*E+2*b+1]+=L*K,w(y,2*E+2*b+1),y[2*E+2*b+1]+=C*W,w(y,2*E+2*b+1),y[2*E+2*b+2]+=L*W,w(y,2*E+2*b+2)}for(E=0;E<T;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=T;E<2*T;E++)y[E]=0;return new o(y,0)};function w(S,T){for(;(S[T]&65535)!=S[T];)S[T+1]+=S[T]>>>16,S[T]&=65535,T++}function A(S,T){this.g=S,this.h=T}function R(S,T){if(x(T))throw Error("division by zero");if(x(S))return new A(f,f);if(v(S))return T=R(g(S),T),new A(g(T.g),g(T.h));if(v(T))return T=R(S,g(T)),new A(g(T.g),T.h);if(30<S.g.length){if(v(S)||v(T))throw Error("slowDivide_ only works with positive integers.");for(var y=d,E=T;0>=E.l(S);)y=F(y),E=F(E);var b=D(y,1),L=D(E,1);for(E=D(E,2),y=D(y,2);!x(E);){var C=L.add(E);0>=C.l(S)&&(b=b.add(y),L=C),E=D(E,1),y=D(y,1)}return T=m(S,b.j(T)),new A(b,T)}for(b=f;0<=S.l(T);){for(y=Math.max(1,Math.floor(S.m()/T.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),L=c(y),C=L.j(T);v(C)||0<C.l(S);)y-=E,L=c(y),C=L.j(T);x(L)&&(L=d),b=b.add(L),S=m(S,C)}return new A(b,S)}i.A=function(S){return R(this,S).h},i.and=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],E=0;E<T;E++)y[E]=this.i(E)&S.i(E);return new o(y,this.h&S.h)},i.or=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],E=0;E<T;E++)y[E]=this.i(E)|S.i(E);return new o(y,this.h|S.h)},i.xor=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],E=0;E<T;E++)y[E]=this.i(E)^S.i(E);return new o(y,this.h^S.h)};function F(S){for(var T=S.g.length+1,y=[],E=0;E<T;E++)y[E]=S.i(E)<<1|S.i(E-1)>>>31;return new o(y,S.h)}function D(S,T){var y=T>>5;T%=32;for(var E=S.g.length-y,b=[],L=0;L<E;L++)b[L]=0<T?S.i(L+y)>>>T|S.i(L+y+1)<<32-T:S.i(L+y);return new o(b,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,c_=o}).apply(typeof Tp<"u"?Tp:typeof self<"u"?self:typeof window<"u"?window:{});var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u_,h_,pa,f_,Yl,ph,d_,p_,m_;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,_,M){return u==Array.prototype||u==Object.prototype||(u[_]=M.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof _l=="object"&&_l];for(var _=0;_<u.length;++_){var M=u[_];if(M&&M.Math==Math)return M}throw Error("Cannot find global object")}var n=e(this);function r(u,_){if(_)t:{var M=n;u=u.split(".");for(var O=0;O<u.length-1;O++){var H=u[O];if(!(H in M))break t;M=M[H]}u=u[u.length-1],O=M[u],_=_(O),_!=O&&_!=null&&t(M,u,{configurable:!0,writable:!0,value:_})}}function s(u,_){u instanceof String&&(u+="");var M=0,O=!1,H={next:function(){if(!O&&M<u.length){var Q=M++;return{value:_(Q,u[Q]),done:!1}}return O=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}r("Array.prototype.values",function(u){return u||function(){return s(this,function(_,M){return M})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var _=typeof u;return _=_!="object"?_:u?Array.isArray(u)?"array":_:"null",_=="array"||_=="object"&&typeof u.length=="number"}function c(u){var _=typeof u;return _=="object"&&u!=null||_=="function"}function h(u,_,M){return u.call.apply(u.bind,arguments)}function f(u,_,M){if(!u)throw Error();if(2<arguments.length){var O=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,O),u.apply(_,H)}}return function(){return u.apply(_,arguments)}}function d(u,_,M){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,d.apply(null,arguments)}function p(u,_){var M=Array.prototype.slice.call(arguments,1);return function(){var O=M.slice();return O.push.apply(O,arguments),u.apply(this,O)}}function x(u,_){function M(){}M.prototype=_.prototype,u.aa=_.prototype,u.prototype=new M,u.prototype.constructor=u,u.Qb=function(O,H,Q){for(var vt=Array(arguments.length-2),de=2;de<arguments.length;de++)vt[de-2]=arguments[de];return _.prototype[H].apply(O,vt)}}function v(u){const _=u.length;if(0<_){const M=Array(_);for(let O=0;O<_;O++)M[O]=u[O];return M}return[]}function g(u,_){for(let M=1;M<arguments.length;M++){const O=arguments[M];if(l(O)){const H=u.length||0,Q=O.length||0;u.length=H+Q;for(let vt=0;vt<Q;vt++)u[H+vt]=O[vt]}else u.push(O)}}class m{constructor(_,M){this.i=_,this.j=M,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function w(u){return/^[\s\xa0]*$/.test(u)}function A(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function R(u){return R[" "](u),u}R[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function D(u,_,M){for(const O in u)_.call(M,u[O],O,u)}function S(u,_){for(const M in u)_.call(void 0,u[M],M,u)}function T(u){const _={};for(const M in u)_[M]=u[M];return _}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(u,_){let M,O;for(let H=1;H<arguments.length;H++){O=arguments[H];for(M in O)u[M]=O[M];for(let Q=0;Q<y.length;Q++)M=y[Q],Object.prototype.hasOwnProperty.call(O,M)&&(u[M]=O[M])}}function b(u){var _=1;u=u.split(":");const M=[];for(;0<_&&u.length;)M.push(u.shift()),_--;return u.length&&M.push(u.join(":")),M}function L(u){a.setTimeout(()=>{throw u},0)}function C(){var u=gt;let _=null;return u.g&&(_=u.g,u.g=u.g.next,u.g||(u.h=null),_.next=null),_}class W{constructor(){this.h=this.g=null}add(_,M){const O=K.get();O.set(_,M),this.h?this.h.next=O:this.g=O,this.h=O}}var K=new m(()=>new G,u=>u.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,M){this.h=_,this.g=M,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,J=!1,gt=new W,St=()=>{const u=a.Promise.resolve(void 0);tt=()=>{u.then(xt)}};var xt=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(M){L(M)}var _=K;_.j(u),100>_.h&&(_.h++,u.next=_.g,_.g=u)}J=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function kt(u,_){this.type=u,this.g=this.target=_,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var et=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,_=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const M=()=>{};a.addEventListener("test",M,_),a.removeEventListener("test",M,_)}catch{}return u}();function ot(u,_){if(kt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var M=this.type=u.type,O=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=_,_=u.relatedTarget){if(F){t:{try{R(_.nodeName);var H=!0;break t}catch{}H=!1}H||(_=null)}}else M=="mouseover"?_=u.fromElement:M=="mouseout"&&(_=u.toElement);this.relatedTarget=_,O?(this.clientX=O.clientX!==void 0?O.clientX:O.pageX,this.clientY=O.clientY!==void 0?O.clientY:O.pageY,this.screenX=O.screenX||0,this.screenY=O.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ct[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ot.aa.h.call(this)}}x(ot,kt);var Ct={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function Kt(u,_,M,O,H){this.listener=u,this.proxy=null,this.src=_,this.type=M,this.capture=!!O,this.ha=H,this.key=++Ht,this.da=this.fa=!1}function Bt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Zt(u){this.src=u,this.g={},this.h=0}Zt.prototype.add=function(u,_,M,O,H){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var vt=dt(u,_,O,H);return-1<vt?(_=u[vt],M||(_.fa=!1)):(_=new Kt(_,this.src,Q,!!O,H),_.fa=M,u.push(_)),_};function U(u,_){var M=_.type;if(M in u.g){var O=u.g[M],H=Array.prototype.indexOf.call(O,_,void 0),Q;(Q=0<=H)&&Array.prototype.splice.call(O,H,1),Q&&(Bt(_),u.g[M].length==0&&(delete u.g[M],u.h--))}}function dt(u,_,M,O){for(var H=0;H<u.length;++H){var Q=u[H];if(!Q.da&&Q.listener==_&&Q.capture==!!M&&Q.ha==O)return H}return-1}var at="closure_lm_"+(1e6*Math.random()|0),yt={};function nt(u,_,M,O,H){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)nt(u,_[Q],M,O,H);return null}return M=rt(M),u&&u[_t]?u.K(_,M,c(O)?!!O.capture:!!O,H):Ft(u,_,M,!1,O,H)}function Ft(u,_,M,O,H,Q){if(!_)throw Error("Invalid event type");var vt=c(H)?!!H.capture:!!H,de=st(u);if(de||(u[at]=de=new Zt(u)),M=de.add(_,M,O,vt,Q),M.proxy)return M;if(O=Et(),M.proxy=O,O.src=u,O.listener=M,u.addEventListener)et||(H=vt),H===void 0&&(H=!1),u.addEventListener(_.toString(),O,H);else if(u.attachEvent)u.attachEvent(I(_.toString()),O);else if(u.addListener&&u.removeListener)u.addListener(O);else throw Error("addEventListener and attachEvent are unavailable.");return M}function Et(){function u(M){return _.call(u.src,u.listener,M)}const _=q;return u}function Rt(u,_,M,O,H){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Rt(u,_[Q],M,O,H);else O=c(O)?!!O.capture:!!O,M=rt(M),u&&u[_t]?(u=u.i,_=String(_).toString(),_ in u.g&&(Q=u.g[_],M=dt(Q,M,O,H),-1<M&&(Bt(Q[M]),Array.prototype.splice.call(Q,M,1),Q.length==0&&(delete u.g[_],u.h--)))):u&&(u=st(u))&&(_=u.g[_.toString()],u=-1,_&&(u=dt(_,M,O,H)),(M=-1<u?_[u]:null)&&V(M))}function V(u){if(typeof u!="number"&&u&&!u.da){var _=u.src;if(_&&_[_t])U(_.i,u);else{var M=u.type,O=u.proxy;_.removeEventListener?_.removeEventListener(M,O,u.capture):_.detachEvent?_.detachEvent(I(M),O):_.addListener&&_.removeListener&&_.removeListener(O),(M=st(_))?(U(M,u),M.h==0&&(M.src=null,_[at]=null)):Bt(u)}}}function I(u){return u in yt?yt[u]:yt[u]="on"+u}function q(u,_){if(u.da)u=!0;else{_=new ot(_,this);var M=u.listener,O=u.ha||u.src;u.fa&&V(u),u=M.call(O,_)}return u}function st(u){return u=u[at],u instanceof Zt?u:null}var it="__closure_events_fn_"+(1e9*Math.random()>>>0);function rt(u){return typeof u=="function"?u:(u[it]||(u[it]=function(_){return u.handleEvent(_)}),u[it])}function At(){Nt.call(this),this.i=new Zt(this),this.M=this,this.F=null}x(At,Nt),At.prototype[_t]=!0,At.prototype.removeEventListener=function(u,_,M,O){Rt(this,u,_,M,O)};function ut(u,_){var M,O=u.F;if(O)for(M=[];O;O=O.F)M.push(O);if(u=u.M,O=_.type||_,typeof _=="string")_=new kt(_,u);else if(_ instanceof kt)_.target=_.target||u;else{var H=_;_=new kt(O,u),E(_,H)}if(H=!0,M)for(var Q=M.length-1;0<=Q;Q--){var vt=_.g=M[Q];H=Tt(vt,O,!0,_)&&H}if(vt=_.g=u,H=Tt(vt,O,!0,_)&&H,H=Tt(vt,O,!1,_)&&H,M)for(Q=0;Q<M.length;Q++)vt=_.g=M[Q],H=Tt(vt,O,!1,_)&&H}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var u=this.i,_;for(_ in u.g){for(var M=u.g[_],O=0;O<M.length;O++)Bt(M[O]);delete u.g[_],u.h--}}this.F=null},At.prototype.K=function(u,_,M,O){return this.i.add(String(u),_,!1,M,O)},At.prototype.L=function(u,_,M,O){return this.i.add(String(u),_,!0,M,O)};function Tt(u,_,M,O){if(_=u.i.g[String(_)],!_)return!0;_=_.concat();for(var H=!0,Q=0;Q<_.length;++Q){var vt=_[Q];if(vt&&!vt.da&&vt.capture==M){var de=vt.listener,ln=vt.ha||vt.src;vt.fa&&U(u.i,vt),H=de.call(ln,O)!==!1&&H}}return H&&!O.defaultPrevented}function qt(u,_,M){if(typeof u=="function")M&&(u=d(u,M));else if(u&&typeof u.handleEvent=="function")u=d(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:a.setTimeout(u,_||0)}function ht(u){u.g=qt(()=>{u.g=null,u.i&&(u.i=!1,ht(u))},u.l);const _=u.h;u.h=null,u.m.apply(null,_)}class wt extends Nt{constructor(_,M){super(),this.m=_,this.l=M,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(u){Nt.call(this),this.h=u,this.g={}}x(Jt,Nt);var Gt=[];function Pt(u){D(u.g,function(_,M){this.g.hasOwnProperty(M)&&V(_)},u),u.g={}}Jt.prototype.N=function(){Jt.aa.N.call(this),Pt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wt=a.JSON.stringify,Yt=a.JSON.parse,me=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function P(){}P.prototype.h=null;function X(u){return u.h||(u.h=u.i())}function $(){}var Z={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lt(){kt.call(this,"d")}x(lt,kt);function Lt(){kt.call(this,"c")}x(Lt,kt);var zt={},Me=null;function Ae(){return Me=Me||new At}zt.La="serverreachability";function ie(u){kt.call(this,zt.La,u)}x(ie,kt);function xe(u){const _=Ae();ut(_,new ie(_))}zt.STAT_EVENT="statevent";function Ce(u,_){kt.call(this,zt.STAT_EVENT,u),this.stat=_}x(Ce,kt);function we(u){const _=Ae();ut(_,new Ce(_,u))}zt.Ma="timingevent";function Ge(u,_){kt.call(this,zt.Ma,u),this.size=_}x(Ge,kt);function wn(u,_){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},_)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function kr(u,_,M,O,H,Q){u.info(function(){if(u.g)if(Q)for(var vt="",de=Q.split("&"),ln=0;ln<de.length;ln++){var he=de[ln].split("=");if(1<he.length){var pn=he[0];he=he[1];var mn=pn.split("_");vt=2<=mn.length&&mn[1]=="type"?vt+(pn+"="+he+"&"):vt+(pn+"=redacted&")}}else vt=null;else vt=Q;return"XMLHTTP REQ ("+O+") [attempt "+H+"]: "+_+`
`+M+`
`+vt})}function ks(u,_,M,O,H,Q,vt){u.info(function(){return"XMLHTTP RESP ("+O+") [ attempt "+H+"]: "+_+`
`+M+`
`+Q+" "+vt})}function Ui(u,_,M,O){u.info(function(){return"XMLHTTP TEXT ("+_+"): "+al(u,M)+(O?" "+O:"")})}function Bs(u,_){u.info(function(){return"TIMEOUT: "+_})}Hn.prototype.info=function(){};function al(u,_){if(!u.g)return _;if(!_)return null;try{var M=JSON.parse(_);if(M){for(u=0;u<M.length;u++)if(Array.isArray(M[u])){var O=M[u];if(!(2>O.length)){var H=O[1];if(Array.isArray(H)&&!(1>H.length)){var Q=H[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var vt=1;vt<H.length;vt++)H[vt]=""}}}}return Wt(M)}catch{return _}}var Br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ll={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ko;function zs(){}x(zs,P),zs.prototype.g=function(){return new XMLHttpRequest},zs.prototype.i=function(){return{}},Ko=new zs;function N(u,_,M,O){this.j=u,this.i=_,this.l=M,this.R=O||1,this.U=new Jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new B}function B(){this.i=null,this.g="",this.h=!1}var j={},Y={};function z(u,_,M){u.L=1,u.v=cl(Gn(_)),u.m=M,u.P=!0,mt(u,null)}function mt(u,_){u.F=Date.now(),It(u),u.A=Gn(u.v);var M=u.A,O=u.R;Array.isArray(O)||(O=[String(O)]),Ud(M.i,"t",O),u.C=0,M=u.j.J,u.h=new B,u.g=tp(u.j,M?_:null,!u.m),0<u.O&&(u.M=new wt(d(u.Y,u,u.g),u.O)),_=u.U,M=u.g,O=u.ca;var H="readystatechange";Array.isArray(H)||(H&&(Gt[0]=H.toString()),H=Gt);for(var Q=0;Q<H.length;Q++){var vt=nt(M,H[Q],O||_.handleEvent,!1,_.h||_);if(!vt)break;_.g[vt.key]=vt}_=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,_)):(u.u="GET",u.g.ea(u.A,u.u,null,_)),xe(),kr(u.i,u.u,u.A,u.l,u.R,u.m)}N.prototype.ca=function(u){u=u.target;const _=this.M;_&&Vi(u)==3?_.j():this.Y(u)},N.prototype.Y=function(u){try{if(u==this.g)t:{const mn=Vi(this.g);var _=this.g.Ba();const Xs=this.g.Z();if(!(3>mn)&&(mn!=3||this.g&&(this.h.h||this.g.oa()||Gd(this.g)))){this.J||mn!=4||_==7||(_==8||0>=Xs?xe(3):xe(2)),$t(this);var M=this.g.Z();this.X=M;e:if(bt(this)){var O=Gd(this.g);u="";var H=O.length,Q=Vi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),Ut(this);var vt="";break e}this.h.i=new a.TextDecoder}for(_=0;_<H;_++)this.h.h=!0,u+=this.h.i.decode(O[_],{stream:!(Q&&_==H-1)});O.length=0,this.h.g+=u,this.C=0,vt=this.h.g}else vt=this.g.oa();if(this.o=M==200,ks(this.i,this.u,this.A,this.l,this.R,mn,M),this.o){if(this.T&&!this.K){e:{if(this.g){var de,ln=this.g;if((de=ln.g?ln.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(de)){var he=de;break e}}he=null}if(M=he)Ui(this.i,this.l,M,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ge(this,M);else{this.o=!1,this.s=3,we(12),ne(this),Ut(this);break t}}if(this.P){M=!0;let li;for(;!this.J&&this.C<vt.length;)if(li=Dt(this,vt),li==Y){mn==4&&(this.s=4,we(14),M=!1),Ui(this.i,this.l,null,"[Incomplete Response]");break}else if(li==j){this.s=4,we(15),Ui(this.i,this.l,vt,"[Invalid Chunk]"),M=!1;break}else Ui(this.i,this.l,li,null),ge(this,li);if(bt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mn!=4||vt.length!=0||this.h.h||(this.s=1,we(16),M=!1),this.o=this.o&&M,!M)Ui(this.i,this.l,vt,"[Invalid Chunked Response]"),ne(this),Ut(this);else if(0<vt.length&&!this.W){this.W=!0;var pn=this.j;pn.g==this&&pn.ba&&!pn.M&&(pn.j.info("Great, no buffering proxy detected. Bytes received: "+vt.length),su(pn),pn.M=!0,we(11))}}else Ui(this.i,this.l,vt,null),ge(this,vt);mn==4&&ne(this),this.o&&!this.J&&(mn==4?Kd(this.j,this):(this.o=!1,It(this)))}else vy(this.g),M==400&&0<vt.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),ne(this),Ut(this)}}}catch{}finally{}};function bt(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Dt(u,_){var M=u.C,O=_.indexOf(`
`,M);return O==-1?Y:(M=Number(_.substring(M,O)),isNaN(M)?j:(O+=1,O+M>_.length?Y:(_=_.slice(O,O+M),u.C=O+M,_)))}N.prototype.cancel=function(){this.J=!0,ne(this)};function It(u){u.S=Date.now()+u.I,Xt(u,u.I)}function Xt(u,_){if(u.B!=null)throw Error("WatchDog timer not null");u.B=wn(d(u.ba,u),_)}function $t(u){u.B&&(a.clearTimeout(u.B),u.B=null)}N.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Bs(this.i,this.A),this.L!=2&&(xe(),we(17)),ne(this),this.s=2,Ut(this)):Xt(this,this.S-u)};function Ut(u){u.j.G==0||u.J||Kd(u.j,u)}function ne(u){$t(u);var _=u.M;_&&typeof _.ma=="function"&&_.ma(),u.M=null,Pt(u.U),u.g&&(_=u.g,u.g=null,_.abort(),_.ma())}function ge(u,_){try{var M=u.j;if(M.G!=0&&(M.g==u||ze(M.h,u))){if(!u.K&&ze(M.h,u)&&M.G==3){try{var O=M.Da.g.parse(_)}catch{O=null}if(Array.isArray(O)&&O.length==3){var H=O;if(H[0]==0){t:if(!M.u){if(M.g)if(M.g.F+3e3<u.F)pl(M),fl(M);else break t;ru(M),we(18)}}else M.za=H[1],0<M.za-M.T&&37500>H[2]&&M.F&&M.v==0&&!M.C&&(M.C=wn(d(M.Za,M),6e3));if(1>=Ot(M.h)&&M.ca){try{M.ca()}catch{}M.ca=void 0}}else Hr(M,11)}else if((u.K||M.g==u)&&pl(M),!w(_))for(H=M.Da.g.parse(_),_=0;_<H.length;_++){let he=H[_];if(M.T=he[0],he=he[1],M.G==2)if(he[0]=="c"){M.K=he[1],M.ia=he[2];const pn=he[3];pn!=null&&(M.la=pn,M.j.info("VER="+M.la));const mn=he[4];mn!=null&&(M.Aa=mn,M.j.info("SVER="+M.Aa));const Xs=he[5];Xs!=null&&typeof Xs=="number"&&0<Xs&&(O=1.5*Xs,M.L=O,M.j.info("backChannelRequestTimeoutMs_="+O)),O=M;const li=u.g;if(li){const gl=li.g?li.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gl){var Q=O.h;Q.g||gl.indexOf("spdy")==-1&&gl.indexOf("quic")==-1&&gl.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ae(Q,Q.h),Q.h=null))}if(O.D){const ou=li.g?li.g.getResponseHeader("X-HTTP-Session-Id"):null;ou&&(O.ya=ou,Ee(O.I,O.D,ou))}}M.G=3,M.l&&M.l.ua(),M.ba&&(M.R=Date.now()-u.F,M.j.info("Handshake RTT: "+M.R+"ms")),O=M;var vt=u;if(O.qa=Qd(O,O.J?O.ia:null,O.W),vt.K){Dn(O.h,vt);var de=vt,ln=O.L;ln&&(de.I=ln),de.B&&($t(de),It(de)),O.g=vt}else jd(O);0<M.i.length&&dl(M)}else he[0]!="stop"&&he[0]!="close"||Hr(M,7);else M.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Hr(M,7):iu(M):he[0]!="noop"&&M.l&&M.l.ta(he),M.v=0)}}xe(4)}catch{}}var be=class{constructor(u,_){this.g=u,this.map=_}};function dn(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ce(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ot(u){return u.h?1:u.g?u.g.size:0}function ze(u,_){return u.h?u.h==_:u.g?u.g.has(_):!1}function ae(u,_){u.g?u.g.add(_):u.h=_}function Dn(u,_){u.h&&u.h==_?u.h=null:u.g&&u.g.has(_)&&u.g.delete(_)}dn.prototype.cancel=function(){if(this.i=Fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fi(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let _=u.i;for(const M of u.g.values())_=_.concat(M.D);return _}return v(u.i)}function bn(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var _=[],M=u.length,O=0;O<M;O++)_.push(u[O]);return _}_=[],M=0;for(O in u)_[M++]=u[O];return _}function Jo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var _=[];u=u.length;for(var M=0;M<u;M++)_.push(M);return _}_=[],M=0;for(const O in u)_[M++]=O;return _}}}function Pe(u,_){if(u.forEach&&typeof u.forEach=="function")u.forEach(_,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,_,void 0);else for(var M=Jo(u),O=bn(u),H=O.length,Q=0;Q<H;Q++)_.call(void 0,O[Q],M&&M[Q],u)}var ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zo(u,_){if(u){u=u.split("&");for(var M=0;M<u.length;M++){var O=u[M].indexOf("="),H=null;if(0<=O){var Q=u[M].substring(0,O);H=u[M].substring(O+1)}else Q=u[M];_(Q,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function We(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof We){this.h=u.h,Hs(this,u.j),this.o=u.o,this.g=u.g,zr(this,u.s),this.l=u.l;var _=u.i,M=new ea;M.i=_.i,_.g&&(M.g=new Map(_.g),M.h=_.h),Dd(this,M),this.m=u.m}else u&&(_=String(u).match(ai))?(this.h=!1,Hs(this,_[1]||"",!0),this.o=Qo(_[2]||""),this.g=Qo(_[3]||"",!0),zr(this,_[4]),this.l=Qo(_[5]||"",!0),Dd(this,_[6]||"",!0),this.m=Qo(_[7]||"")):(this.h=!1,this.i=new ea(null,this.h))}We.prototype.toString=function(){var u=[],_=this.j;_&&u.push(ta(_,Ld,!0),":");var M=this.g;return(M||_=="file")&&(u.push("//"),(_=this.o)&&u.push(ta(_,Ld,!0),"@"),u.push(encodeURIComponent(String(M)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),M=this.s,M!=null&&u.push(":",String(M))),(M=this.l)&&(this.g&&M.charAt(0)!="/"&&u.push("/"),u.push(ta(M,M.charAt(0)=="/"?ly:ay,!0))),(M=this.i.toString())&&u.push("?",M),(M=this.m)&&u.push("#",ta(M,uy)),u.join("")};function Gn(u){return new We(u)}function Hs(u,_,M){u.j=M?Qo(_,!0):_,u.j&&(u.j=u.j.replace(/:$/,""))}function zr(u,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);u.s=_}else u.s=null}function Dd(u,_,M){_ instanceof ea?(u.i=_,hy(u.i,u.h)):(M||(_=ta(_,cy)),u.i=new ea(_,u.h))}function Ee(u,_,M){u.i.set(_,M)}function cl(u){return Ee(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Qo(u,_){return u?_?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ta(u,_,M){return typeof u=="string"?(u=encodeURI(u).replace(_,oy),M&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function oy(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ld=/[#\/\?@]/g,ay=/[#\?:]/g,ly=/[#\?]/g,cy=/[#\?@]/g,uy=/#/g;function ea(u,_){this.h=this.g=null,this.i=u||null,this.j=!!_}function rr(u){u.g||(u.g=new Map,u.h=0,u.i&&Zo(u.i,function(_,M){u.add(decodeURIComponent(_.replace(/\+/g," ")),M)}))}i=ea.prototype,i.add=function(u,_){rr(this),this.i=null,u=Gs(this,u);var M=this.g.get(u);return M||this.g.set(u,M=[]),M.push(_),this.h+=1,this};function Nd(u,_){rr(u),_=Gs(u,_),u.g.has(_)&&(u.i=null,u.h-=u.g.get(_).length,u.g.delete(_))}function Od(u,_){return rr(u),_=Gs(u,_),u.g.has(_)}i.forEach=function(u,_){rr(this),this.g.forEach(function(M,O){M.forEach(function(H){u.call(_,H,O,this)},this)},this)},i.na=function(){rr(this);const u=Array.from(this.g.values()),_=Array.from(this.g.keys()),M=[];for(let O=0;O<_.length;O++){const H=u[O];for(let Q=0;Q<H.length;Q++)M.push(_[O])}return M},i.V=function(u){rr(this);let _=[];if(typeof u=="string")Od(this,u)&&(_=_.concat(this.g.get(Gs(this,u))));else{u=Array.from(this.g.values());for(let M=0;M<u.length;M++)_=_.concat(u[M])}return _},i.set=function(u,_){return rr(this),this.i=null,u=Gs(this,u),Od(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[_]),this.h+=1,this},i.get=function(u,_){return u?(u=this.V(u),0<u.length?String(u[0]):_):_};function Ud(u,_,M){Nd(u,_),0<M.length&&(u.i=null,u.g.set(Gs(u,_),v(M)),u.h+=M.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],_=Array.from(this.g.keys());for(var M=0;M<_.length;M++){var O=_[M];const Q=encodeURIComponent(String(O)),vt=this.V(O);for(O=0;O<vt.length;O++){var H=Q;vt[O]!==""&&(H+="="+encodeURIComponent(String(vt[O]))),u.push(H)}}return this.i=u.join("&")};function Gs(u,_){return _=String(_),u.j&&(_=_.toLowerCase()),_}function hy(u,_){_&&!u.j&&(rr(u),u.i=null,u.g.forEach(function(M,O){var H=O.toLowerCase();O!=H&&(Nd(this,O),Ud(this,H,M))},u)),u.j=_}function fy(u,_){const M=new Hn;if(a.Image){const O=new Image;O.onload=p(sr,M,"TestLoadImage: loaded",!0,_,O),O.onerror=p(sr,M,"TestLoadImage: error",!1,_,O),O.onabort=p(sr,M,"TestLoadImage: abort",!1,_,O),O.ontimeout=p(sr,M,"TestLoadImage: timeout",!1,_,O),a.setTimeout(function(){O.ontimeout&&O.ontimeout()},1e4),O.src=u}else _(!1)}function dy(u,_){const M=new Hn,O=new AbortController,H=setTimeout(()=>{O.abort(),sr(M,"TestPingServer: timeout",!1,_)},1e4);fetch(u,{signal:O.signal}).then(Q=>{clearTimeout(H),Q.ok?sr(M,"TestPingServer: ok",!0,_):sr(M,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(H),sr(M,"TestPingServer: error",!1,_)})}function sr(u,_,M,O,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),O(M)}catch{}}function py(){this.g=new me}function my(u,_,M){const O=M||"";try{Pe(u,function(H,Q){let vt=H;c(H)&&(vt=Wt(H)),_.push(O+Q+"="+encodeURIComponent(vt))})}catch(H){throw _.push(O+"type="+encodeURIComponent("_badmap")),H}}function na(u){this.l=u.Ub||null,this.j=u.eb||!1}x(na,P),na.prototype.g=function(){return new ul(this.l,this.j)},na.prototype.i=function(u){return function(){return u}}({});function ul(u,_){At.call(this),this.D=u,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ul,At),i=ul.prototype,i.open=function(u,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=_,this.readyState=1,ra(this)},i.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(_.body=u),(this.D||a).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ia(this)),this.readyState=0},i.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fd(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fd(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}i.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var _=u.value?u.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!u.done}))&&(this.response=this.responseText+=_)}u.done?ia(this):ra(this),this.readyState==3&&Fd(this)}},i.Ra=function(u){this.g&&(this.response=this.responseText=u,ia(this))},i.Qa=function(u){this.g&&(this.response=u,ia(this))},i.ga=function(){this.g&&ia(this)};function ia(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ra(u)}i.setRequestHeader=function(u,_){this.u.append(u,_)},i.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],_=this.h.entries();for(var M=_.next();!M.done;)M=M.value,u.push(M[0]+": "+M[1]),M=_.next();return u.join(`\r
`)};function ra(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Vd(u){let _="";return D(u,function(M,O){_+=O,_+=":",_+=M,_+=`\r
`}),_}function nu(u,_,M){t:{for(O in M){var O=!1;break t}O=!0}O||(M=Vd(M),typeof u=="string"?M!=null&&encodeURIComponent(String(M)):Ee(u,_,M))}function Fe(u){At.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Fe,At);var gy=/^https?$/i,_y=["POST","PUT"];i=Fe.prototype,i.Ha=function(u){this.J=u},i.ea=function(u,_,M,O){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);_=_?_.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ko.g(),this.v=this.o?X(this.o):X(Ko),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(_,String(u),!0),this.B=!1}catch(Q){kd(this,Q);return}if(u=M||"",M=new Map(this.headers),O)if(Object.getPrototypeOf(O)===Object.prototype)for(var H in O)M.set(H,O[H]);else if(typeof O.keys=="function"&&typeof O.get=="function")for(const Q of O.keys())M.set(Q,O.get(Q));else throw Error("Unknown input type for opt_headers: "+String(O));O=Array.from(M.keys()).find(Q=>Q.toLowerCase()=="content-type"),H=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_y,_,void 0))||O||H||M.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,vt]of M)this.g.setRequestHeader(Q,vt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hd(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){kd(this,Q)}};function kd(u,_){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=_,u.m=5,Bd(u),hl(u)}function Bd(u){u.A||(u.A=!0,ut(u,"complete"),ut(u,"error"))}i.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ut(this,"complete"),ut(this,"abort"),hl(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hl(this,!0)),Fe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?zd(this):this.bb())},i.bb=function(){zd(this)};function zd(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Vi(u)!=4||u.Z()!=2)){if(u.u&&Vi(u)==4)qt(u.Ea,0,u);else if(ut(u,"readystatechange"),Vi(u)==4){u.h=!1;try{const vt=u.Z();t:switch(vt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break t;default:_=!1}var M;if(!(M=_)){var O;if(O=vt===0){var H=String(u.D).match(ai)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),O=!gy.test(H?H.toLowerCase():"")}M=O}if(M)ut(u,"complete"),ut(u,"success");else{u.m=6;try{var Q=2<Vi(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",Bd(u)}}finally{hl(u)}}}}function hl(u,_){if(u.g){Hd(u);const M=u.g,O=u.v[0]?()=>{}:null;u.g=null,u.v=null,_||ut(u,"ready");try{M.onreadystatechange=O}catch{}}}function Hd(u){u.I&&(a.clearTimeout(u.I),u.I=null)}i.isActive=function(){return!!this.g};function Vi(u){return u.g?u.g.readyState:0}i.Z=function(){try{return 2<Vi(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(u){if(this.g){var _=this.g.responseText;return u&&_.indexOf(u)==0&&(_=_.substring(u.length)),Yt(_)}};function Gd(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function vy(u){const _={};u=(u.g&&2<=Vi(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let O=0;O<u.length;O++){if(w(u[O]))continue;var M=b(u[O]);const H=M[0];if(M=M[1],typeof M!="string")continue;M=M.trim();const Q=_[H]||[];_[H]=Q,Q.push(M)}S(_,function(O){return O.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sa(u,_,M){return M&&M.internalChannelParams&&M.internalChannelParams[u]||_}function Wd(u){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sa("baseRetryDelayMs",5e3,u),this.cb=sa("retryDelaySeedMs",1e4,u),this.Wa=sa("forwardChannelMaxRetries",2,u),this.wa=sa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new dn(u&&u.concurrentRequestLimit),this.Da=new py,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wd.prototype,i.la=8,i.G=1,i.connect=function(u,_,M,O){we(0),this.W=u,this.H=_||{},M&&O!==void 0&&(this.H.OSID=M,this.H.OAID=O),this.F=this.X,this.I=Qd(this,null,this.W),dl(this)};function iu(u){if(Xd(u),u.G==3){var _=u.U++,M=Gn(u.I);if(Ee(M,"SID",u.K),Ee(M,"RID",_),Ee(M,"TYPE","terminate"),oa(u,M),_=new N(u,u.j,_),_.L=2,_.v=cl(Gn(M)),M=!1,a.navigator&&a.navigator.sendBeacon)try{M=a.navigator.sendBeacon(_.v.toString(),"")}catch{}!M&&a.Image&&(new Image().src=_.v,M=!0),M||(_.g=tp(_.j,null),_.g.ea(_.v)),_.F=Date.now(),It(_)}Zd(u)}function fl(u){u.g&&(su(u),u.g.cancel(),u.g=null)}function Xd(u){fl(u),u.u&&(a.clearTimeout(u.u),u.u=null),pl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function dl(u){if(!ce(u.h)&&!u.s){u.s=!0;var _=u.Ga;tt||St(),J||(tt(),J=!0),gt.add(_,u),u.B=0}}function yy(u,_){return Ot(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=_.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=wn(d(u.Ga,u,_),Jd(u,u.B)),u.B++,!0)}i.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const H=new N(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=T(Q),E(Q,this.S)):Q=this.S),this.m!==null||this.O||(H.H=Q,Q=null),this.P)t:{for(var _=0,M=0;M<this.i.length;M++){e:{var O=this.i[M];if("__data__"in O.map&&(O=O.map.__data__,typeof O=="string")){O=O.length;break e}O=void 0}if(O===void 0)break;if(_+=O,4096<_){_=M;break t}if(_===4096||M===this.i.length-1){_=M+1;break t}}_=1e3}else _=1e3;_=qd(this,H,_),M=Gn(this.I),Ee(M,"RID",u),Ee(M,"CVER",22),this.D&&Ee(M,"X-HTTP-Session-Id",this.D),oa(this,M),Q&&(this.O?_="headers="+encodeURIComponent(String(Vd(Q)))+"&"+_:this.m&&nu(M,this.m,Q)),ae(this.h,H),this.Ua&&Ee(M,"TYPE","init"),this.P?(Ee(M,"$req",_),Ee(M,"SID","null"),H.T=!0,z(H,M,null)):z(H,M,_),this.G=2}}else this.G==3&&(u?$d(this,u):this.i.length==0||ce(this.h)||$d(this))};function $d(u,_){var M;_?M=_.l:M=u.U++;const O=Gn(u.I);Ee(O,"SID",u.K),Ee(O,"RID",M),Ee(O,"AID",u.T),oa(u,O),u.m&&u.o&&nu(O,u.m,u.o),M=new N(u,u.j,M,u.B+1),u.m===null&&(M.H=u.o),_&&(u.i=_.D.concat(u.i)),_=qd(u,M,1e3),M.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ae(u.h,M),z(M,O,_)}function oa(u,_){u.H&&D(u.H,function(M,O){Ee(_,O,M)}),u.l&&Pe({},function(M,O){Ee(_,O,M)})}function qd(u,_,M){M=Math.min(u.i.length,M);var O=u.l?d(u.l.Na,u.l,u):null;t:{var H=u.i;let Q=-1;for(;;){const vt=["count="+M];Q==-1?0<M?(Q=H[0].g,vt.push("ofs="+Q)):Q=0:vt.push("ofs="+Q);let de=!0;for(let ln=0;ln<M;ln++){let he=H[ln].g;const pn=H[ln].map;if(he-=Q,0>he)Q=Math.max(0,H[ln].g-100),de=!1;else try{my(pn,vt,"req"+he+"_")}catch{O&&O(pn)}}if(de){O=vt.join("&");break t}}}return u=u.i.splice(0,M),_.D=u,O}function jd(u){if(!u.g&&!u.u){u.Y=1;var _=u.Fa;tt||St(),J||(tt(),J=!0),gt.add(_,u),u.v=0}}function ru(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=wn(d(u.Fa,u),Jd(u,u.v)),u.v++,!0)}i.Fa=function(){if(this.u=null,Yd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=wn(d(this.ab,this),u)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),fl(this),Yd(this))};function su(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Yd(u){u.g=new N(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var _=Gn(u.qa);Ee(_,"RID","rpc"),Ee(_,"SID",u.K),Ee(_,"AID",u.T),Ee(_,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ee(_,"TO",u.ja),Ee(_,"TYPE","xmlhttp"),oa(u,_),u.m&&u.o&&nu(_,u.m,u.o),u.L&&(u.g.I=u.L);var M=u.g;u=u.ia,M.L=1,M.v=cl(Gn(_)),M.m=null,M.P=!0,mt(M,u)}i.Za=function(){this.C!=null&&(this.C=null,fl(this),ru(this),we(19))};function pl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Kd(u,_){var M=null;if(u.g==_){pl(u),su(u),u.g=null;var O=2}else if(ze(u.h,_))M=_.D,Dn(u.h,_),O=1;else return;if(u.G!=0){if(_.o)if(O==1){M=_.m?_.m.length:0,_=Date.now()-_.F;var H=u.B;O=Ae(),ut(O,new Ge(O,M)),dl(u)}else jd(u);else if(H=_.s,H==3||H==0&&0<_.X||!(O==1&&yy(u,_)||O==2&&ru(u)))switch(M&&0<M.length&&(_=u.h,_.i=_.i.concat(M)),H){case 1:Hr(u,5);break;case 4:Hr(u,10);break;case 3:Hr(u,6);break;default:Hr(u,2)}}}function Jd(u,_){let M=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(M*=2),M*_}function Hr(u,_){if(u.j.info("Error code "+_),_==2){var M=d(u.fb,u),O=u.Xa;const H=!O;O=new We(O||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hs(O,"https"),cl(O),H?fy(O.toString(),M):dy(O.toString(),M)}else we(2);u.G=0,u.l&&u.l.sa(_),Zd(u),Xd(u)}i.fb=function(u){u?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Zd(u){if(u.G=0,u.ka=[],u.l){const _=Fi(u.h);(_.length!=0||u.i.length!=0)&&(g(u.ka,_),g(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function Qd(u,_,M){var O=M instanceof We?Gn(M):new We(M);if(O.g!="")_&&(O.g=_+"."+O.g),zr(O,O.s);else{var H=a.location;O=H.protocol,_=_?_+"."+H.hostname:H.hostname,H=+H.port;var Q=new We(null);O&&Hs(Q,O),_&&(Q.g=_),H&&zr(Q,H),M&&(Q.l=M),O=Q}return M=u.D,_=u.ya,M&&_&&Ee(O,M,_),Ee(O,"VER",u.la),oa(u,O),O}function tp(u,_,M){if(_&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=u.Ca&&!u.pa?new Fe(new na({eb:M})):new Fe(u.pa),_.Ha(u.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ep(){}i=ep.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ml(){}ml.prototype.g=function(u,_){return new Wn(u,_)};function Wn(u,_){At.call(this),this.g=new Wd(_),this.l=u,this.h=_&&_.messageUrlParams||null,u=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(u?u["X-WebChannel-Content-Type"]=_.messageContentType:u={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(u?u["X-WebChannel-Client-Profile"]=_.va:u={"X-WebChannel-Client-Profile":_.va}),this.g.S=u,(u=_&&_.Sb)&&!w(u)&&(this.g.m=u),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!w(_)&&(this.g.D=_,u=this.h,u!==null&&_ in u&&(u=this.h,_ in u&&delete u[_])),this.j=new Ws(this)}x(Wn,At),Wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wn.prototype.close=function(){iu(this.g)},Wn.prototype.o=function(u){var _=this.g;if(typeof u=="string"){var M={};M.__data__=u,u=M}else this.u&&(M={},M.__data__=Wt(u),u=M);_.i.push(new be(_.Ya++,u)),_.G==3&&dl(_)},Wn.prototype.N=function(){this.g.l=null,delete this.j,iu(this.g),delete this.g,Wn.aa.N.call(this)};function np(u){lt.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var _=u.__sm__;if(_){t:{for(const M in _){u=M;break t}u=void 0}(this.i=u)&&(u=this.i,_=_!==null&&u in _?_[u]:void 0),this.data=_}else this.data=u}x(np,lt);function ip(){Lt.call(this),this.status=1}x(ip,Lt);function Ws(u){this.g=u}x(Ws,ep),Ws.prototype.ua=function(){ut(this.g,"a")},Ws.prototype.ta=function(u){ut(this.g,new np(u))},Ws.prototype.sa=function(u){ut(this.g,new ip)},Ws.prototype.ra=function(){ut(this.g,"b")},ml.prototype.createWebChannel=ml.prototype.g,Wn.prototype.send=Wn.prototype.o,Wn.prototype.open=Wn.prototype.m,Wn.prototype.close=Wn.prototype.close,m_=function(){return new ml},p_=function(){return Ae()},d_=zt,ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,Yl=Br,ll.COMPLETE="complete",f_=ll,$.EventType=Z,Z.OPEN="a",Z.CLOSE="b",Z.ERROR="c",Z.MESSAGE="d",At.prototype.listen=At.prototype.K,pa=$,h_=na,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,u_=Fe}).apply(typeof _l<"u"?_l:typeof self<"u"?self:typeof window<"u"?window:{});const Mp="@firebase/firestore";/**
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
 */class yn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yn.UNAUTHENTICATED=new yn(null),yn.GOOGLE_CREDENTIALS=new yn("google-credentials-uid"),yn.FIRST_PARTY=new yn("first-party-uid"),yn.MOCK_USER=new yn("mock-user");/**
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
 */let Xo="10.12.5";/**
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
 */const Ts=new Tf("@firebase/firestore");function aa(){return Ts.logLevel}function Vt(i,...t){if(Ts.logLevel<=ue.DEBUG){const e=t.map(Pf);Ts.debug(`Firestore (${Xo}): ${i}`,...e)}}function Ms(i,...t){if(Ts.logLevel<=ue.ERROR){const e=t.map(Pf);Ts.error(`Firestore (${Xo}): ${i}`,...e)}}function dc(i,...t){if(Ts.logLevel<=ue.WARN){const e=t.map(Pf);Ts.warn(`Firestore (${Xo}): ${i}`,...e)}}function Pf(i){if(typeof i=="string")return i;try{/**
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
 */function se(i="Unexpected state"){const t=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: `+i;throw Ms(t),new Error(t)}function Ke(i,t){i||se()}function ye(i,t){return i}/**
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
 */const pt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jt extends Ur{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ds{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class g_{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yn.UNAUTHENTICATED))}shutdown(){}}class vS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class yS{constructor(t){this.t=t,this.currentUser=yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let s=new ds;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ds,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ds)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(Vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ke(typeof n.accessToken=="string"),new g_(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ke(t===null||typeof t=="string"),new yn(t)}}class xS{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=yn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ES{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new xS(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SS{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TS{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=s=>{s.error!=null&&Vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Vt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{Vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Ke(typeof e.token=="string"),this.R=e.token,new SS(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function MS(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class __{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=MS(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function _e(i,t){return i<t?-1:i>t?1:0}function Co(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
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
 */class sn{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jt(pt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jt(pt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new jt(pt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jt(pt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return sn.fromMillis(Date.now())}static fromDate(t){return sn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new sn(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_e(this.nanoseconds,t.nanoseconds):_e(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ie{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ie(t)}static min(){return new Ie(new sn(0,0))}static max(){return new Ie(new sn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Da{constructor(t,e,n){e===void 0?e=0:e>t.length&&se(),n===void 0?n=t.length-e:n>t.length-e&&se(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Da.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Da?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ve extends Da{construct(t,e,n){return new Ve(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new jt(pt.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Ve(e)}static emptyPath(){return new Ve([])}}const AS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fn extends Da{construct(t,e,n){return new fn(t,e,n)}static isValidIdentifier(t){return AS.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fn(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new jt(pt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new jt(pt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new jt(pt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new jt(pt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new fn(e)}static emptyPath(){return new fn([])}}/**
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
 */class ee{constructor(t){this.path=t}static fromPath(t){return new ee(Ve.fromString(t))}static fromName(t){return new ee(Ve.fromString(t).popFirst(5))}static empty(){return new ee(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ve.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ve.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ee(new Ve(t.slice()))}}function wS(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Ie.fromTimestamp(n===1e9?new sn(e+1,0):new sn(e,n));return new Cr(r,ee.empty(),t)}function bS(i){return new Cr(i.readTime,i.key,-1)}class Cr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Cr(Ie.min(),ee.empty(),-1)}static max(){return new Cr(Ie.max(),ee.empty(),-1)}}function RS(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=ee.comparator(i.documentKey,t.documentKey),e!==0?e:_e(i.largestBatchId,t.largestBatchId))}/**
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
 */const CS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function v_(i){if(i.code!==pt.FAILED_PRECONDITION||i.message!==CS)throw i;Vt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ct{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ct((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ct?e:ct.resolve(e)}catch(e){return ct.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ct.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ct.reject(e)}static resolve(t){return new ct((e,n)=>{e(t)})}static reject(t){return new ct((e,n)=>{n(t)})}static waitFor(t){return new ct((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},l=>n(l))}),o=!0,s===r&&e()})}static or(t){let e=ct.resolve(!1);for(const n of t)e=e.next(r=>r?ct.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new ct((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;e(t[c]).next(h=>{o[c]=h,++a,a===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new ct((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function IS(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Bc(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class y_{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}y_.oe=-1;function If(i){return i==null}function pc(i){return i===0&&1/i==-1/0}function DS(i){return typeof i=="number"&&Number.isInteger(i)&&!pc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ap(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function Qa(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function x_(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class Bn{constructor(t,e){this.comparator=t,this.root=e||cn.EMPTY}insert(t,e){return new Bn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,cn.BLACK,null,null))}remove(t){return new Bn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,cn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vl(this.root,t,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vl(this.root,t,this.comparator,!0)}}class vl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class cn{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??cn.RED,this.left=r??cn.EMPTY,this.right=s??cn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new cn(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return cn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return cn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const t=this.left.check();if(t!==this.right.check())throw se();return t+(this.isRed()?0:1)}}cn.EMPTY=null,cn.RED=!0,cn.BLACK=!1;cn.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new cn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Sn{constructor(t){this.comparator=t,this.data=new Bn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wp(this.data.getIterator())}getIteratorFrom(t){return new wp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Sn)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Sn(this.comparator);return e.data=t,e}}class wp{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mi{constructor(t){this.fields=t,t.sort(fn.comparator)}static empty(){return new mi([])}unionWith(t){let e=new Sn(fn.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new mi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Co(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class LS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LS("Invalid base64 string: "+s):s}}(t);return new Pi(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Pi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _e(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pi.EMPTY_BYTE_STRING=new Pi("");const NS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(i){if(Ke(!!i),typeof i=="string"){let t=0;const e=NS.exec(i);if(Ke(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:un(i.seconds),nanos:un(i.nanos)}}function un(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function La(i){return typeof i=="string"?Pi.fromBase64String(i):Pi.fromUint8Array(i)}/**
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
 */function Df(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function E_(i){const t=i.mapValue.fields.__previous_value__;return Df(t)?E_(t):t}function mc(i){const t=As(i.mapValue.fields.__local_write_time__.timestampValue);return new sn(t.seconds,t.nanos)}/**
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
 */class OS{constructor(t,e,n,r,s,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class gc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Po(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Df(i)?4:US(i)?9007199254740991:10:se()}function Ii(i,t){if(i===t)return!0;const e=Po(i);if(e!==Po(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return mc(i).isEqual(mc(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=As(r.timestampValue),a=As(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return La(r.bytesValue).isEqual(La(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return un(r.geoPointValue.latitude)===un(s.geoPointValue.latitude)&&un(r.geoPointValue.longitude)===un(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return un(r.integerValue)===un(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=un(r.doubleValue),a=un(s.doubleValue);return o===a?pc(o)===pc(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return Co(i.arrayValue.values||[],t.arrayValue.values||[],Ii);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Ap(o)!==Ap(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ii(o[l],a[l])))return!1;return!0}(i,t);default:return se()}}function Na(i,t){return(i.values||[]).find(e=>Ii(e,t))!==void 0}function Io(i,t){if(i===t)return 0;const e=Po(i),n=Po(t);if(e!==n)return _e(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return _e(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=un(s.integerValue||s.doubleValue),l=un(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(i,t);case 3:return bp(i.timestampValue,t.timestampValue);case 4:return bp(mc(i),mc(t));case 5:return _e(i.stringValue,t.stringValue);case 6:return function(s,o){const a=La(s),l=La(o);return a.compareTo(l)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=_e(a[c],l[c]);if(h!==0)return h}return _e(a.length,l.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=_e(un(s.latitude),un(o.latitude));return a!==0?a:_e(un(s.longitude),un(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=Io(a[c],l[c]);if(h)return h}return _e(a.length,l.length)}(i.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===yl.mapValue&&o===yl.mapValue)return 0;if(s===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const d=_e(l[f],h[f]);if(d!==0)return d;const p=Io(a[l[f]],c[h[f]]);if(p!==0)return p}return _e(l.length,h.length)}(i.mapValue,t.mapValue);default:throw se()}}function bp(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return _e(i,t);const e=As(i),n=As(t),r=_e(e.seconds,n.seconds);return r!==0?r:_e(e.nanos,n.nanos)}function Do(i){return mh(i)}function mh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=As(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return La(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return ee.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=mh(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${mh(e.fields[o])}`;return r+"}"}(i.mapValue):se()}function gh(i){return!!i&&"integerValue"in i}function Lf(i){return!!i&&"arrayValue"in i}function Kl(i){return!!i&&"mapValue"in i}function xa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return Qa(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=xa(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xa(i.arrayValue.values[e]);return t}return Object.assign({},i)}function US(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class di{constructor(t){this.value=t}static empty(){return new di({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Kl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xa(e)}setAll(t){let e=fn.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=xa(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Kl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ii(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Kl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Qa(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new di(xa(this.value))}}function S_(i){const t=[];return Qa(i.fields,(e,n)=>{const r=new fn([e]);if(Kl(n)){const s=S_(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new mi(t)}/**
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
 */class fi{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new fi(t,0,Ie.min(),Ie.min(),Ie.min(),di.empty(),0)}static newFoundDocument(t,e,n,r){return new fi(t,1,e,Ie.min(),n,r,0)}static newNoDocument(t,e){return new fi(t,2,e,Ie.min(),Ie.min(),di.empty(),0)}static newUnknownDocument(t,e){return new fi(t,3,e,Ie.min(),Ie.min(),di.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=di.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=di.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof fi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new fi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _c{constructor(t,e){this.position=t,this.inclusive=e}}function Rp(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=ee.comparator(ee.fromName(o.referenceValue),e.key):n=Io(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Cp(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Ii(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class vc{constructor(t,e="asc"){this.field=t,this.dir=e}}function FS(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class T_{}class rn extends T_{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new kS(t,e,n):e==="array-contains"?new HS(t,n):e==="in"?new GS(t,n):e==="not-in"?new WS(t,n):e==="array-contains-any"?new XS(t,n):new rn(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new BS(t,n):new zS(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Io(e,this.value)):e!==null&&Po(this.value)===Po(e)&&this.matchesComparison(Io(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pr extends T_{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Pr(t,e)}matches(t){return M_(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function M_(i){return i.op==="and"}function A_(i){return VS(i)&&M_(i)}function VS(i){for(const t of i.filters)if(t instanceof Pr)return!1;return!0}function _h(i){if(i instanceof rn)return i.field.canonicalString()+i.op.toString()+Do(i.value);if(A_(i))return i.filters.map(t=>_h(t)).join(",");{const t=i.filters.map(e=>_h(e)).join(",");return`${i.op}(${t})`}}function w_(i,t){return i instanceof rn?function(n,r){return r instanceof rn&&n.op===r.op&&n.field.isEqual(r.field)&&Ii(n.value,r.value)}(i,t):i instanceof Pr?function(n,r){return r instanceof Pr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&w_(o,r.filters[a]),!0):!1}(i,t):void se()}function b_(i){return i instanceof rn?function(e){return`${e.field.canonicalString()} ${e.op} ${Do(e.value)}`}(i):i instanceof Pr?function(e){return e.op.toString()+" {"+e.getFilters().map(b_).join(" ,")+"}"}(i):"Filter"}class kS extends rn{constructor(t,e,n){super(t,e,n),this.key=ee.fromName(n.referenceValue)}matches(t){const e=ee.comparator(t.key,this.key);return this.matchesComparison(e)}}class BS extends rn{constructor(t,e){super(t,"in",e),this.keys=R_("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class zS extends rn{constructor(t,e){super(t,"not-in",e),this.keys=R_("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function R_(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>ee.fromName(n.referenceValue))}class HS extends rn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lf(e)&&Na(e.arrayValue,this.value)}}class GS extends rn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Na(this.value.arrayValue,e)}}class WS extends rn{constructor(t,e){super(t,"not-in",e)}matches(t){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Na(this.value.arrayValue,e)}}class XS extends rn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lf(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Na(this.value.arrayValue,n))}}/**
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
 */class $S{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Pp(i,t=null,e=[],n=[],r=null,s=null,o=null){return new $S(i,t,e,n,r,s,o)}function Nf(i){const t=ye(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>_h(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),If(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Do(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Do(n)).join(",")),t.ue=e}return t.ue}function Of(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!FS(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!w_(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Cp(i.startAt,t.startAt)&&Cp(i.endAt,t.endAt)}/**
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
 */class zc{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qS(i,t,e,n,r,s,o,a){return new zc(i,t,e,n,r,s,o,a)}function jS(i){return new zc(i)}function Ip(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function YS(i){return i.collectionGroup!==null}function Ea(i){const t=ye(i);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Sn(fn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new vc(s,n))}),e.has(fn.keyField().canonicalString())||t.ce.push(new vc(fn.keyField(),n))}return t.ce}function ps(i){const t=ye(i);return t.le||(t.le=KS(t,Ea(i))),t.le}function KS(i,t){if(i.limitType==="F")return Pp(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new vc(r.field,s)});const e=i.endAt?new _c(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new _c(i.startAt.position,i.startAt.inclusive):null;return Pp(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function vh(i,t,e){return new zc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function C_(i,t){return Of(ps(i),ps(t))&&i.limitType===t.limitType}function P_(i){return`${Nf(ps(i))}|lt:${i.limitType}`}function la(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>b_(r)).join(", ")}]`),If(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),`Target(${n})`}(ps(i))}; limitType=${i.limitType})`}function Uf(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ee.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Ea(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,l){const c=Rp(o,a,l);return o.inclusive?c<=0:c<0}(n.startAt,Ea(n),r)||n.endAt&&!function(o,a,l){const c=Rp(o,a,l);return o.inclusive?c>=0:c>0}(n.endAt,Ea(n),r))}(i,t)}function JS(i){return(t,e)=>{let n=!1;for(const r of Ea(i)){const s=ZS(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function ZS(i,t,e){const n=i.field.isKeyField()?ee.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Io(l,c):se()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return se()}}/**
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
 */class $o{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Qa(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return x_(this.inner)}size(){return this.innerSize}}/**
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
 */const QS=new Bn(ee.comparator);function yc(){return QS}const I_=new Bn(ee.comparator);function xl(...i){let t=I_;for(const e of i)t=t.insert(e.key,e);return t}function D_(i){let t=I_;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function os(){return Sa()}function L_(){return Sa()}function Sa(){return new $o(i=>i.toString(),(i,t)=>i.isEqual(t))}const tT=new Bn(ee.comparator),eT=new Sn(ee.comparator);function xn(...i){let t=eT;for(const e of i)t=t.add(e);return t}const nT=new Sn(_e);function iT(){return nT}/**
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
 */function N_(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(t)?"-0":t}}function O_(i){return{integerValue:""+i}}function rT(i,t){return DS(t)?O_(t):N_(i,t)}/**
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
 */class Hc{constructor(){this._=void 0}}function sT(i,t,e){return i instanceof xc?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Df(s)&&(s=E_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof Oa?F_(i,t):i instanceof Ua?V_(i,t):function(r,s){const o=U_(r,s),a=Dp(o)+Dp(r.Pe);return gh(o)&&gh(r.Pe)?O_(a):N_(r.serializer,a)}(i,t)}function oT(i,t,e){return i instanceof Oa?F_(i,t):i instanceof Ua?V_(i,t):e}function U_(i,t){return i instanceof Ec?function(n){return gh(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class xc extends Hc{}class Oa extends Hc{constructor(t){super(),this.elements=t}}function F_(i,t){const e=k_(t);for(const n of i.elements)e.some(r=>Ii(r,n))||e.push(n);return{arrayValue:{values:e}}}class Ua extends Hc{constructor(t){super(),this.elements=t}}function V_(i,t){let e=k_(t);for(const n of i.elements)e=e.filter(r=>!Ii(r,n));return{arrayValue:{values:e}}}class Ec extends Hc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Dp(i){return un(i.integerValue||i.doubleValue)}function k_(i){return Lf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function aT(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof Oa&&r instanceof Oa||n instanceof Ua&&r instanceof Ua?Co(n.elements,r.elements,Ii):n instanceof Ec&&r instanceof Ec?Ii(n.Pe,r.Pe):n instanceof xc&&r instanceof xc}(i.transform,t.transform)}class lT{constructor(t,e){this.version=t,this.transformResults=e}}class Zi{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zi}static exists(t){return new Zi(void 0,t)}static updateTime(t){return new Zi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jl(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Gc{}function B_(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new H_(i.key,Zi.none()):new tl(i.key,i.data,Zi.none());{const e=i.data,n=di.empty();let r=new Sn(fn.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new Os(i.key,n,new mi(r.toArray()),Zi.none())}}function cT(i,t,e){i instanceof tl?function(r,s,o){const a=r.value.clone(),l=Np(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof Os?function(r,s,o){if(!Jl(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Np(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(z_(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ta(i,t,e,n){return i instanceof tl?function(s,o,a,l){if(!Jl(s.precondition,o))return a;const c=s.value.clone(),h=Op(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(i,t,e,n):i instanceof Os?function(s,o,a,l){if(!Jl(s.precondition,o))return a;const c=Op(s.fieldTransforms,l,o),h=o.data;return h.setAll(z_(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(i,t,e,n):function(s,o,a){return Jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function uT(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=U_(n.transform,r||null);s!=null&&(e===null&&(e=di.empty()),e.set(n.field,s))}return e||null}function Lp(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Co(n,r,(s,o)=>aT(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class tl extends Gc{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Os extends Gc{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function z_(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Np(i,t,e){const n=new Map;Ke(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,oT(o,a,e[r]))}return n}function Op(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,sT(s,o,t))}return n}class H_ extends Gc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hT extends Gc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fT{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&cT(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ta(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ta(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=L_();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const l=B_(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Ie.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),xn())}isEqual(t){return this.batchId===t.batchId&&Co(this.mutations,t.mutations,(e,n)=>Lp(e,n))&&Co(this.baseMutations,t.baseMutations,(e,n)=>Lp(e,n))}}class Ff{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ke(t.mutations.length===n.length);let r=function(){return tT}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new Ff(t,e,n,r)}}/**
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
 */class dT{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var $e,le;function pT(i){switch(i){default:return se();case pt.CANCELLED:case pt.UNKNOWN:case pt.DEADLINE_EXCEEDED:case pt.RESOURCE_EXHAUSTED:case pt.INTERNAL:case pt.UNAVAILABLE:case pt.UNAUTHENTICATED:return!1;case pt.INVALID_ARGUMENT:case pt.NOT_FOUND:case pt.ALREADY_EXISTS:case pt.PERMISSION_DENIED:case pt.FAILED_PRECONDITION:case pt.ABORTED:case pt.OUT_OF_RANGE:case pt.UNIMPLEMENTED:case pt.DATA_LOSS:return!0}}function mT(i){if(i===void 0)return Ms("GRPC error has no .code"),pt.UNKNOWN;switch(i){case $e.OK:return pt.OK;case $e.CANCELLED:return pt.CANCELLED;case $e.UNKNOWN:return pt.UNKNOWN;case $e.DEADLINE_EXCEEDED:return pt.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return pt.RESOURCE_EXHAUSTED;case $e.INTERNAL:return pt.INTERNAL;case $e.UNAVAILABLE:return pt.UNAVAILABLE;case $e.UNAUTHENTICATED:return pt.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return pt.INVALID_ARGUMENT;case $e.NOT_FOUND:return pt.NOT_FOUND;case $e.ALREADY_EXISTS:return pt.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return pt.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return pt.FAILED_PRECONDITION;case $e.ABORTED:return pt.ABORTED;case $e.OUT_OF_RANGE:return pt.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return pt.UNIMPLEMENTED;case $e.DATA_LOSS:return pt.DATA_LOSS;default:return se()}}(le=$e||($e={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new c_([4294967295,4294967295],0);class gT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yh(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _T(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function vT(i,t){return yh(i,t.toTimestamp())}function Eo(i){return Ke(!!i),Ie.fromTimestamp(function(e){const n=As(e);return new sn(n.seconds,n.nanos)}(i))}function G_(i,t){return xh(i,t).canonicalString()}function xh(i,t){const e=function(r){return new Ve(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function yT(i){const t=Ve.fromString(i);return Ke(bT(t)),t}function Eh(i,t){return G_(i.databaseId,t.path)}function xT(i){const t=yT(i);return t.length===4?Ve.emptyPath():ST(t)}function ET(i){return new Ve(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function ST(i){return Ke(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Up(i,t,e){return{name:Eh(i,t),fields:e.value.mapValue.fields}}function TT(i,t){let e;if(t instanceof tl)e={update:Up(i,t.key,t.value)};else if(t instanceof H_)e={delete:Eh(i,t.key)};else if(t instanceof Os)e={update:Up(i,t.key,t.data),updateMask:wT(t.fieldMask)};else{if(!(t instanceof hT))return se();e={verify:Eh(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof xc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ec)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw se()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:vT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(i,t.precondition)),e}function MT(i,t){return i&&i.length>0?(Ke(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?Eo(r.updateTime):Eo(s);return o.isEqual(Ie.min())&&(o=Eo(s)),new lT(o,r.transformResults||[])}(e,t))):[]}function AT(i){let t=xT(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){Ke(n===1);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(f){const d=W_(f);return d instanceof Pr&&A_(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(d=>function(x){return new vc(fo(x.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,If(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new _c(p,d)}(e.startAt));let c=null;return e.endAt&&(c=function(f){const d=!f.before,p=f.values||[];return new _c(p,d)}(e.endAt)),qS(t,r,o,s,a,"F",l,c)}function W_(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fo(e.unaryFilter.field);return rn.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=fo(e.unaryFilter.field);return rn.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fo(e.unaryFilter.field);return rn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fo(e.unaryFilter.field);return rn.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(i):i.fieldFilter!==void 0?function(e){return rn.create(fo(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Pr.create(e.compositeFilter.filters.map(n=>W_(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return se()}}(e.compositeFilter.op))}(i):se()}function fo(i){return fn.fromServerFormat(i.fieldPath)}function wT(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function bT(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class RT{constructor(t){this.ct=t}}function CT(i){const t=AT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?vh(t,t.limit,"L"):t}/**
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
 */class PT{constructor(){this.an=new IT}addToCollectionParentIndex(t,e){return this.an.add(e),ct.resolve()}getCollectionParents(t,e){return ct.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return ct.resolve()}deleteFieldIndex(t,e){return ct.resolve()}deleteAllFieldIndexes(t){return ct.resolve()}createTargetIndexes(t,e){return ct.resolve()}getDocumentsMatchingTarget(t,e){return ct.resolve(null)}getIndexType(t,e){return ct.resolve(0)}getFieldIndexes(t,e){return ct.resolve([])}getNextCollectionGroupToUpdate(t){return ct.resolve(null)}getMinOffset(t,e){return ct.resolve(Cr.min())}getMinOffsetFromCollectionGroup(t,e){return ct.resolve(Cr.min())}updateCollectionGroup(t,e,n){return ct.resolve()}updateIndexEntries(t,e){return ct.resolve()}}class IT{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Sn(Ve.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Sn(Ve.comparator)).toArray()}}/**
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
 */class Lo{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new Lo(0)}static Bn(){return new Lo(-1)}}/**
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
 */class DT{constructor(){this.changes=new $o(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,fi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?ct.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class LT{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class NT{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Ta(n.mutation,r,mi.empty(),sn.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,xn()).next(()=>n))}getLocalViewOfDocuments(t,e,n=xn()){const r=os();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=xl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=os();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,xn()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=yc();const o=Sa(),a=function(){return Sa()}();return e.forEach((l,c)=>{const h=n.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Os)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ta(h.mutation,c,h.mutation.getFieldMask(),sn.now())):o.set(c.key,mi.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),e.forEach((c,h)=>{var f;return a.set(c,new LT(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,e){const n=Sa();let r=new Bn((o,a)=>o-a),s=xn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let h=n.get(l)||mi.empty();h=a.applyToLocalView(c,h),n.set(l,h);const f=(r.get(a.batchId)||xn()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=L_();h.forEach(d=>{if(!s.has(d)){const p=B_(e.get(d),n.get(d));p!==null&&f.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,f))}return ct.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):YS(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ct.resolve(os());let a=-1,l=s;return o.next(c=>ct.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?ct.resolve():this.remoteDocumentCache.getEntry(t,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,xn())).next(h=>({batchId:a,changes:D_(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ee(e)).next(n=>{let r=xl();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=xl();return this.indexManager.getCollectionParents(t,s).next(a=>ct.forEach(a,l=>{const c=function(f,d){return new zc(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,n,r).next(h=>{h.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,fi.newInvalidDocument(h)))});let a=xl();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ta(h.mutation,c,mi.empty(),sn.now()),Uf(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class OT{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return ct.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Eo(r.createTime)}}(e)),ct.resolve()}getNamedQuery(t,e){return ct.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(r){return{name:r.name,query:CT(r.bundledQuery),readTime:Eo(r.readTime)}}(e)),ct.resolve()}}/**
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
 */class UT{constructor(){this.overlays=new Bn(ee.comparator),this.Pr=new Map}getOverlay(t,e){return ct.resolve(this.overlays.get(e))}getOverlays(t,e){const n=os();return ct.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.ht(t,e,s)}),ct.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Pr.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(n)),ct.resolve()}getOverlaysForCollection(t,e,n){const r=os(),s=e.length+1,o=new ee(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return ct.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Bn((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>n){let h=s.get(c.largestBatchId);h===null&&(h=os(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=os(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return ct.resolve(a)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new dT(e,n));let s=this.Pr.get(e);s===void 0&&(s=xn(),this.Pr.set(e,s)),this.Pr.set(e,s.add(n.key))}}/**
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
 */class FT{constructor(){this.sessionToken=Pi.EMPTY_BYTE_STRING}getSessionToken(t){return ct.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ct.resolve()}}/**
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
 */class Vf{constructor(){this.Ir=new Sn(en.Tr),this.Er=new Sn(en.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new en(t,e);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Rr(new en(t,e))}Vr(t,e){t.forEach(n=>this.removeReference(n,e))}mr(t){const e=new ee(new Ve([])),n=new en(e,t),r=new en(e,t+1),s=[];return this.Er.forEachInRange([n,r],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new ee(new Ve([])),n=new en(e,t),r=new en(e,t+1);let s=xn();return this.Er.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new en(t,0),n=this.Ir.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class en{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return ee.comparator(t.key,e.key)||_e(t.yr,e.yr)}static dr(t,e){return _e(t.yr,e.yr)||ee.comparator(t.key,e.key)}}/**
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
 */class VT{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Sn(en.Tr)}checkEmpty(t){return ct.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fT(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.Sr=this.Sr.add(new en(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return ct.resolve(o)}lookupMutationBatch(t,e){return ct.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Dr(n),s=r<0?0:r;return ct.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ct.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return ct.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new en(e,0),r=new en(e,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,r],o=>{const a=this.br(o.yr);s.push(a)}),ct.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Sn(_e);return e.forEach(r=>{const s=new en(r,0),o=new en(r,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{n=n.add(a.yr)})}),ct.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ee.isDocumentKey(s)||(s=s.child(""));const o=new en(new ee(s),0);let a=new Sn(_e);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.yr)),!0)},o),ct.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(n=>{const r=this.br(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Ke(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Sr;return ct.forEach(e.mutations,r=>{const s=new en(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Sr=n})}xn(t){}containsKey(t,e){const n=new en(e,0),r=this.Sr.firstAfterOrEqual(n);return ct.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ct.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class kT{constructor(t){this.Fr=t,this.docs=function(){return new Bn(ee.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ct.resolve(n?n.document.mutableCopy():fi.newInvalidDocument(e))}getEntries(t,e){let n=yc();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():fi.newInvalidDocument(r))}),ct.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=yc();const o=e.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RS(bS(h),n)<=0||(r.has(h.key)||Uf(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return ct.resolve(s)}getAllFromCollectionGroup(t,e,n,r){se()}Mr(t,e){return ct.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new BT(this)}getSize(t){return ct.resolve(this.size)}}class BT extends DT{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.ur.addEntry(t,r)):this.ur.removeEntry(n)}),ct.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
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
 */class zT{constructor(t){this.persistence=t,this.Or=new $o(e=>Nf(e),Of),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Vf,this.targetCount=0,this.Br=Lo.Ln()}forEachTarget(t,e){return this.Or.forEach((n,r)=>e(r)),ct.resolve()}getLastRemoteSnapshotVersion(t){return ct.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ct.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ct.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),ct.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Lo(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,ct.resolve()}updateTargetData(t,e){return this.Qn(e),ct.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,ct.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),ct.waitFor(s).next(()=>r)}getTargetCount(t){return ct.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return ct.resolve(n)}addMatchingKeys(t,e,n){return this.Lr.Ar(e,n),ct.resolve()}removeMatchingKeys(t,e,n){this.Lr.Vr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),ct.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),ct.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Lr.pr(e);return ct.resolve(n)}containsKey(t,e){return ct.resolve(this.Lr.containsKey(e))}}/**
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
 */class HT{constructor(t,e){this.kr={},this.overlays={},this.qr=new y_(0),this.Qr=!1,this.Qr=!0,this.Kr=new FT,this.referenceDelegate=t(this),this.$r=new zT(this),this.indexManager=new PT,this.remoteDocumentCache=function(r){return new kT(r)}(n=>this.referenceDelegate.Ur(n)),this.serializer=new RT(e),this.Wr=new OT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new UT,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new VT(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,n){Vt("MemoryPersistence","Starting transaction:",t);const r=new GT(this.qr.next());return this.referenceDelegate.Gr(),n(r).next(s=>this.referenceDelegate.zr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}jr(t,e){return ct.or(Object.values(this.kr).map(n=>()=>n.containsKey(t,e)))}}class GT extends PS{constructor(t){super(),this.currentSequenceNumber=t}}class kf{constructor(t){this.persistence=t,this.Hr=new Vf,this.Jr=null}static Yr(t){return new kf(t)}get Zr(){if(this.Jr)return this.Jr;throw se()}addReference(t,e,n){return this.Hr.addReference(n,e),this.Zr.delete(n.toString()),ct.resolve()}removeReference(t,e,n){return this.Hr.removeReference(n,e),this.Zr.add(n.toString()),ct.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),ct.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(r=>this.Zr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Zr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ct.forEach(this.Zr,n=>{const r=ee.fromPath(n);return this.Xr(t,r).next(s=>{s||e.removeEntry(r,Ie.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(n=>{n?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return ct.or([()=>ct.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
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
 */class Bf{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ki=n,this.$i=r}static Ui(t,e){let n=xn(),r=xn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Bf(t,e.fromCache,n,r)}}/**
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
 */class WT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class XT{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Oy()?8:IS(Dy())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WT;return this.Zi(t,e,o).next(a=>{if(s.result=a,this.Gi)return this.Xi(t,e,o,a.size)})}).next(()=>s.result)}Xi(t,e,n,r){return n.documentReadCount<this.zi?(aa()<=ue.DEBUG&&Vt("QueryEngine","SDK will not create cache indexes for query:",la(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),ct.resolve()):(aa()<=ue.DEBUG&&Vt("QueryEngine","Query:",la(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ji*r?(aa()<=ue.DEBUG&&Vt("QueryEngine","The SDK decides to create cache indexes for query:",la(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ps(e))):ct.resolve())}Ji(t,e){if(Ip(e))return ct.resolve(null);let n=ps(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=vh(e,null,"F"),n=ps(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=xn(...s);return this.Hi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(l=>{const c=this.es(e,a);return this.ts(e,c,o,l.readTime)?this.Ji(t,vh(e,null,"F")):this.ns(t,c,e,l)}))})))}Yi(t,e,n,r){return Ip(e)||r.isEqual(Ie.min())?ct.resolve(null):this.Hi.getDocuments(t,n).next(s=>{const o=this.es(e,s);return this.ts(e,o,n,r)?ct.resolve(null):(aa()<=ue.DEBUG&&Vt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),la(e)),this.ns(t,o,e,wS(r,-1)).next(a=>a))})}es(t,e){let n=new Sn(JS(t));return e.forEach((r,s)=>{Uf(t,s)&&(n=n.add(s))}),n}ts(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Zi(t,e,n){return aa()<=ue.DEBUG&&Vt("QueryEngine","Using full collection scan to execute query:",la(e)),this.Hi.getDocumentsMatchingQuery(t,e,Cr.min(),n)}ns(t,e,n,r){return this.Hi.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class $T{constructor(t,e,n,r){this.persistence=t,this.rs=e,this.serializer=r,this.ss=new Bn(_e),this.os=new $o(s=>Nf(s),Of),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(n)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new NT(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function qT(i,t,e,n){return new $T(i,t,e,n)}async function X_(i,t){const e=ye(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.cs(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let l=xn();for(const c of r){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(n,l).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function jT(i,t){const e=ye(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.us.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,d=f.keys();let p=ct.resolve();return d.forEach(x=>{p=p.next(()=>h.getEntry(l,x)).next(v=>{const g=c.docVersions.get(x);Ke(g!==null),v.version.compareTo(g)<0&&(f.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),h.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=xn();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function YT(i){const t=ye(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function KT(i,t){const e=ye(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}class Fp{constructor(){this.activeTargetIds=iT()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class JT{constructor(){this.io=new Fp,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,n){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new Fp,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ZT{oo(t){}shutdown(){}}/**
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
 */class Vp{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){Vt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){Vt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let El=null;function pu(){return El===null?El=function(){return 268435456+Math.round(2147483648*Math.random())}():El++,"0x"+El.toString(16)}/**
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
 */const QT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tM{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
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
 */const gn="WebChannelConnection";class eM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=n+"://"+e.host,this.Do=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get vo(){return!1}Fo(e,n,r,s,o){const a=pu(),l=this.Mo(e,n.toUriEncodedString());Vt("RestConnection",`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(e,l,c,r).then(h=>(Vt("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw dc("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}No(e,n,r,s,o,a){return this.Fo(e,n,r,s,o)}xo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}Mo(e,n){const r=QT[e];return`${this.bo}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,n,r){const s=pu();return new Promise((o,a)=>{const l=new u_;l.setWithCredentials(!0),l.listenOnce(f_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yl.NO_ERROR:const h=l.getResponseJson();Vt(gn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Yl.TIMEOUT:Vt(gn,`RPC '${t}' ${s} timed out`),a(new jt(pt.DEADLINE_EXCEEDED,"Request time out"));break;case Yl.HTTP_ERROR:const f=l.getStatus();if(Vt(gn,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const x=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(pt).indexOf(m)>=0?m:pt.UNKNOWN}(p.status);a(new jt(x,p.message))}else a(new jt(pt.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new jt(pt.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{Vt(gn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);Vt(gn,`RPC '${t}' ${s} sending request:`,r),l.send(e,"POST",c,n,15)})}Lo(t,e,n){const r=pu(),s=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=m_(),a=p_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new h_({})),this.xo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const h=s.join("");Vt(gn,`Creating RPC '${t}' stream ${r}: ${h}`,l);const f=o.createWebChannel(h,l);let d=!1,p=!1;const x=new tM({Po:g=>{p?Vt(gn,`Not sending because RPC '${t}' stream ${r} is closed:`,g):(d||(Vt(gn,`Opening RPC '${t}' stream ${r} transport.`),f.open(),d=!0),Vt(gn,`RPC '${t}' stream ${r} sending:`,g),f.send(g))},Io:()=>f.close()}),v=(g,m,w)=>{g.listen(m,A=>{try{w(A)}catch(R){setTimeout(()=>{throw R},0)}})};return v(f,pa.EventType.OPEN,()=>{p||(Vt(gn,`RPC '${t}' stream ${r} transport opened.`),x.po())}),v(f,pa.EventType.CLOSE,()=>{p||(p=!0,Vt(gn,`RPC '${t}' stream ${r} transport closed`),x.wo())}),v(f,pa.EventType.ERROR,g=>{p||(p=!0,dc(gn,`RPC '${t}' stream ${r} transport errored:`,g),x.wo(new jt(pt.UNAVAILABLE,"The operation could not be completed")))}),v(f,pa.EventType.MESSAGE,g=>{var m;if(!p){const w=g.data[0];Ke(!!w);const A=w,R=A.error||((m=A[0])===null||m===void 0?void 0:m.error);if(R){Vt(gn,`RPC '${t}' stream ${r} received error:`,R);const F=R.status;let D=function(y){const E=$e[y];if(E!==void 0)return mT(E)}(F),S=R.message;D===void 0&&(D=pt.INTERNAL,S="Unknown error status: "+F+" with message "+R.message),p=!0,x.wo(new jt(D,S)),f.close()}else Vt(gn,`RPC '${t}' stream ${r} received:`,w),x.So(w)}}),v(a,d_.STAT_EVENT,g=>{g.stat===ph.PROXY?Vt(gn,`RPC '${t}' stream ${r} detected buffering proxy`):g.stat===ph.NOPROXY&&Vt(gn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.yo()},0),x}}function mu(){return typeof document<"u"?document:null}/**
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
 */function Wc(i){return new gT(i,!0)}/**
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
 */class $_{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ai=t,this.timerId=e,this.Bo=n,this.ko=r,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),r=Math.max(0,e-n);r>0&&Vt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,r,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class nM{constructor(t,e,n,r,s,o,a,l){this.ai=t,this.jo=n,this.Ho=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new $_(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===pt.RESOURCE_EXHAUSTED?(Ms(e.toString()),Ms("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===pt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Jo===e&&this.h_(n,r)},n=>{t(()=>{const r=new jt(pt.UNKNOWN,"Fetching auth token failed: "+n.message);return this.P_(r)})})}h_(t,e){const n=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(r=>{n(()=>this.P_(r))}),this.stream.onMessage(r=>{n(()=>++this.Xo==1?this.T_(r):this.onNext(r))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return Vt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(Vt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iM extends nM{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(t,e){return this.connection.Lo("Write",t,e)}T_(t){return Ke(!!t.streamToken),this.lastStreamToken=t.streamToken,Ke(!t.writeResults||t.writeResults.length===0),this.listener.m_()}onNext(t){Ke(!!t.streamToken),this.lastStreamToken=t.streamToken,this.e_.reset();const e=MT(t.writeResults,t.commitTime),n=Eo(t.commitTime);return this.listener.f_(n,e)}g_(){const t={};t.database=ET(this.serializer),this.__(t)}V_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>TT(this.serializer,n))};this.__(e)}}/**
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
 */class rM extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.p_=!1}y_(){if(this.p_)throw new jt(pt.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,n,r){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,xh(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===pt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new jt(pt.UNKNOWN,s.toString())})}No(t,e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(t,xh(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===pt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new jt(pt.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class sM{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Ms(e),this.b_=!1):Vt("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class oM{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{n.enqueueAndForget(async()=>{nl(this)&&(Vt("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ye(l);c.N_.add(4),await el(c),c.k_.set("Unknown"),c.N_.delete(4),await Xc(c)}(this))})}),this.k_=new sM(n,r)}}async function Xc(i){if(nl(i))for(const t of i.L_)await t(!0)}async function el(i){for(const t of i.L_)await t(!1)}function nl(i){return ye(i).N_.size===0}async function q_(i,t,e){if(!Bc(t))throw t;i.N_.add(1),await el(i),i.k_.set("Offline"),e||(e=()=>YT(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Vt("RemoteStore","Retrying IndexedDB access"),await e(),i.N_.delete(1),await Xc(i)})}function j_(i,t){return t().catch(e=>q_(i,e,t))}async function $c(i){const t=ye(i),e=Ir(t);let n=t.x_.length>0?t.x_[t.x_.length-1].batchId:-1;for(;aM(t);)try{const r=await KT(t.localStore,n);if(r===null){t.x_.length===0&&e.s_();break}n=r.batchId,lM(t,r)}catch(r){await q_(t,r)}Y_(t)&&K_(t)}function aM(i){return nl(i)&&i.x_.length<10}function lM(i,t){i.x_.push(t);const e=Ir(i);e.n_()&&e.R_&&e.V_(t.mutations)}function Y_(i){return nl(i)&&!Ir(i).t_()&&i.x_.length>0}function K_(i){Ir(i).start()}async function cM(i){Ir(i).g_()}async function uM(i){const t=Ir(i);for(const e of i.x_)t.V_(e.mutations)}async function hM(i,t,e){const n=i.x_.shift(),r=Ff.from(n,t,e);await j_(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await $c(i)}async function fM(i,t){t&&Ir(i).R_&&await async function(n,r){if(function(o){return pT(o)&&o!==pt.ABORTED}(r.code)){const s=n.x_.shift();Ir(n).i_(),await j_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $c(n)}}(i,t),Y_(i)&&K_(i)}async function kp(i,t){const e=ye(i);e.asyncQueue.verifyOperationInProgress(),Vt("RemoteStore","RemoteStore received new credentials");const n=nl(e);e.N_.add(3),await el(e),n&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await Xc(e)}async function dM(i,t){const e=ye(i);t?(e.N_.delete(2),await Xc(e)):t||(e.N_.add(2),await el(e),e.k_.set("Unknown"))}function Ir(i){return i.K_||(i.K_=function(e,n,r){const s=ye(e);return s.y_(),new iM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{To:()=>Promise.resolve(),Ao:cM.bind(null,i),Vo:fM.bind(null,i),m_:uM.bind(null,i),f_:hM.bind(null,i)}),i.L_.push(async t=>{t?(i.K_.i_(),await $c(i)):(await i.K_.stop(),i.x_.length>0&&(Vt("RemoteStore",`Stopping write stream with ${i.x_.length} pending writes`),i.x_=[]))})),i.K_}/**
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
 */class zf{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new zf(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new jt(pt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function J_(i,t){if(Ms("AsyncQueue",`${t}: ${i}`),Bc(i))return new jt(pt.UNAVAILABLE,`${t}: ${i}`);throw i}class pM{constructor(){this.queries=Bp(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,n){const r=ye(e),s=r.queries;r.queries=Bp(),s.forEach((o,a)=>{for(const l of a.z_)l.onError(n)})})(this,new jt(pt.ABORTED,"Firestore shutting down"))}}function Bp(){return new $o(i=>P_(i),C_)}function mM(i){i.J_.forEach(t=>{t.next()})}var zp,Hp;(Hp=zp||(zp={})).X_="default",Hp.Cache="cache";class gM{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new $o(a=>P_(a),C_),this.Fa=new Map,this.Ma=new Set,this.xa=new Bn(ee.comparator),this.Oa=new Map,this.Na=new Vf,this.La={},this.Ba=new Map,this.ka=Lo.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function _M(i,t,e){const n=EM(i);try{const r=await function(o,a){const l=ye(o),c=sn.now(),h=a.reduce((p,x)=>p.add(x.key),xn());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let x=yc(),v=xn();return l.us.getEntries(p,h).next(g=>{x=g,x.forEach((m,w)=>{w.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,x)).next(g=>{f=g;const m=[];for(const w of a){const A=uT(w,f.get(w.key).overlayedDocument);A!=null&&m.push(new Os(w.key,A,S_(A.value.mapValue),Zi.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,m,a)}).next(g=>{d=g;const m=g.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(p,g.batchId,m)})}).then(()=>({batchId:d.batchId,changes:D_(f)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.La[o.currentUser.toKey()];c||(c=new Bn(_e)),c=c.insert(a,l),o.La[o.currentUser.toKey()]=c}(n,r.batchId,e),await qc(n,r.changes),await $c(n.remoteStore)}catch(r){const s=J_(r,"Failed to persist write");e.reject(s)}}function Gp(i,t,e){const n=ye(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.va.forEach((s,o)=>{const a=o.view.Y_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const d of f.z_)d.Y_(a)&&(c=!0)}),c&&mM(l)}(n.eventManager,t),r.length&&n.Ca.E_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function vM(i,t){const e=ye(i),n=t.batch.batchId;try{const r=await jT(e.localStore,t);Q_(e,n,null),Z_(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await qc(e,r)}catch(r){await v_(r)}}async function yM(i,t,e){const n=ye(i);try{const r=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ke(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(n.localStore,t);Q_(n,t,e),Z_(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await qc(n,r)}catch(r){await v_(r)}}function Z_(i,t){(i.Ba.get(t)||[]).forEach(e=>{e.resolve()}),i.Ba.delete(t)}function Q_(i,t,e){const n=ye(i);let r=n.La[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.La[n.currentUser.toKey()]=r}}async function qc(i,t,e){const n=ye(i),r=[],s=[],o=[];n.va.isEmpty()||(n.va.forEach((a,l)=>{o.push(n.Qa(l,t,e).then(c=>{var h;if((c||e)&&n.isPrimaryClient){const f=c?!c.fromCache:(h=void 0)===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){r.push(c);const f=Bf.Ui(l.targetId,c);s.push(f)}}))}),await Promise.all(o),n.Ca.E_(r),await async function(l,c){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>ct.forEach(c,d=>ct.forEach(d.Ki,p=>h.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>ct.forEach(d.$i,p=>h.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!Bc(f))throw f;Vt("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const d=f.targetId;if(!f.fromCache){const p=h.ss.get(d),x=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(x);h.ss=h.ss.insert(d,v)}}}(n.localStore,s))}async function xM(i,t){const e=ye(i);if(!e.currentUser.isEqual(t)){Vt("SyncEngine","User change. New user:",t.toKey());const n=await X_(e.localStore,t);e.currentUser=t,function(s,o){s.Ba.forEach(a=>{a.forEach(l=>{l.reject(new jt(pt.CANCELLED,o))})}),s.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await qc(e,n.ls)}}function EM(i){const t=ye(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yM.bind(null,t),t}class Wp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Wc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return qT(this.persistence,new XT,t.initialUser,this.serializer)}createPersistence(t){return new HT(kf.Yr,this.serializer)}createSharedClientState(t){return new JT}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SM{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Gp(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=xM.bind(null,this.syncEngine),await dM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pM}()}createDatastore(t){const e=Wc(t.databaseInfo.databaseId),n=function(s){return new eM(s)}(t.databaseInfo);return function(s,o,a,l){return new rM(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new oM(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Gp(this.syncEngine,e,0),function(){return Vp.D()?new Vp:new ZT}())}createSyncEngine(t,e){return function(r,s,o,a,l,c,h){const f=new gM(r,s,o,a,l,c);return h&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=ye(r);Vt("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await el(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class TM{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=yn.UNAUTHENTICATED,this.clientId=__.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{Vt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(Vt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jt(pt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=J_(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function gu(i,t){i.asyncQueue.verifyOperationInProgress(),Vt("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await X_(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Xp(i,t){i.asyncQueue.verifyOperationInProgress();const e=await AM(i);Vt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>kp(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>kp(t.remoteStore,r)),i._onlineComponents=t}function MM(i){return i.name==="FirebaseError"?i.code===pt.FAILED_PRECONDITION||i.code===pt.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}async function AM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Vt("FirestoreClient","Using user provided OfflineComponentProvider");try{await gu(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!MM(e))throw e;dc("Error using user provided cache. Falling back to memory cache: "+e),await gu(i,new Wp)}}else Vt("FirestoreClient","Using default OfflineComponentProvider"),await gu(i,new Wp);return i._offlineComponents}async function wM(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Vt("FirestoreClient","Using user provided OnlineComponentProvider"),await Xp(i,i._uninitializedComponentsProvider._online)):(Vt("FirestoreClient","Using default OnlineComponentProvider"),await Xp(i,new SM))),i._onlineComponents}function bM(i){return wM(i).then(t=>t.syncEngine)}/**
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
 */function tv(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const $p=new Map;/**
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
 */function ev(i,t,e){if(!e)throw new jt(pt.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function RM(i,t,e,n){if(t===!0&&n===!0)throw new jt(pt.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function qp(i){if(!ee.isDocumentKey(i))throw new jt(pt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function jp(i){if(ee.isDocumentKey(i))throw new jt(pt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Hf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":se()}function nv(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new jt(pt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Hf(i);throw new jt(pt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */class Yp{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new jt(pt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new jt(pt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}RM("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tv((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new jt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new jt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new jt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jt(pt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new jt(pt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yp(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _S;switch(n.type){case"firstParty":return new ES(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new jt(pt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$p.get(e);n&&(Vt("ComponentProvider","Removing Datastore"),$p.delete(e),n.terminate())}(this),Promise.resolve()}}function CM(i,t,e,n={}){var r;const s=(i=nv(i,jc))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let a,l;if(typeof n.mockUserToken=="string")a=n.mockUserToken,l=yn.MOCK_USER;else{a=Iy(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new jt(pt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yn(c)}i._authCredentials=new vS(new g_(a,l))}}/**
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
 */class Gf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Gf(this.firestore,t,this._query)}}class Qi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qi(this.firestore,t,this._key)}}class Er extends Gf{constructor(t,e,n){super(t,e,jS(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qi(this.firestore,null,new ee(t))}withConverter(t){return new Er(this.firestore,t,this._path)}}function PM(i,t,...e){if(i=ys(i),ev("collection","path",t),i instanceof jc){const n=Ve.fromString(t,...e);return jp(n),new Er(i,null,n)}{if(!(i instanceof Qi||i instanceof Er))throw new jt(pt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ve.fromString(t,...e));return jp(n),new Er(i.firestore,null,n)}}function IM(i,t,...e){if(i=ys(i),arguments.length===1&&(t=__.newId()),ev("doc","path",t),i instanceof jc){const n=Ve.fromString(t,...e);return qp(n),new Qi(i,null,new ee(n))}{if(!(i instanceof Qi||i instanceof Er))throw new jt(pt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ve.fromString(t,...e));return qp(n),new Qi(i.firestore,i instanceof Er?i.converter:null,new ee(n))}}/**
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
 */class DM{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new $_(this,"async_queue_retry"),this.Tu=()=>{const e=mu();e&&Vt("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=mu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=mu();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new ds;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!Bc(t))throw t;Vt("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(n=>{this.lu=n,this.hu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw Ms("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.hu=!1,n))));return this._u=e,e}enqueueAfterDelay(t,e,n){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const r=zf.createAndSchedule(this,t,e,n,s=>this.Ru(s));return this.cu.push(r),r}Eu(){this.lu&&se()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class iv extends jc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new DM}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rv(this),this._firestoreClient.terminate()}}function LM(i,t){const e=typeof i=="object"?i:Vg(),n=typeof i=="string"?i:"(default)",r=Za(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=Cy("firestore");s&&CM(r,...s)}return r}function NM(i){return i._firestoreClient||rv(i),i._firestoreClient.verifyNotTerminated(),i._firestoreClient}function rv(i){var t,e,n;const r=i._freezeSettings(),s=function(a,l,c,h){return new OS(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,tv(h.experimentalLongPollingOptions),h.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._firestoreClient=new TM(i._authCredentials,i._appCheckCredentials,i._queue,s),!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class Fa{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fa(Pi.fromBase64String(t))}catch(e){throw new jt(pt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fa(Pi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class sv{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new jt(pt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ov{constructor(t){this._methodName=t}}/**
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
 */class av{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jt(pt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jt(pt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _e(this._lat,t._lat)||_e(this._long,t._long)}}/**
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
 */const OM=/^__.*__$/;class UM{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Os(t,this.data,this.fieldMask,e,this.fieldTransforms):new tl(t,this.data,e,this.fieldTransforms)}}function lv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Wf{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(t){return new Wf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.wu({path:n,bu:!1});return r.Du(t),r}Cu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.wu({path:n,bu:!1});return r.pu(),r}vu(t){return this.wu({path:void 0,bu:!0})}Fu(t){return Sc(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Du(this.path.get(t))}Du(t){if(t.length===0)throw this.Fu("Document fields must not be empty");if(lv(this.yu)&&OM.test(t))throw this.Fu('Document fields cannot begin and end with "__"')}}class FM{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Wc(t)}Ou(t,e,n,r=!1){return new Wf({yu:t,methodName:e,xu:n,path:fn.emptyPath(),bu:!1,Mu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VM(i){const t=i._freezeSettings(),e=Wc(i._databaseId);return new FM(i._databaseId,!!t.ignoreUndefinedProperties,e)}function kM(i,t,e,n,r,s={}){const o=i.Ou(s.merge||s.mergeFields?2:0,t,e,r);fv("Data must be an object, but it was:",o,n);const a=uv(n,o);let l,c;if(s.merge)l=new mi(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=BM(t,f,e);if(!o.contains(d))throw new jt(pt.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);GM(h,d)||h.push(d)}l=new mi(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new UM(new di(a),l,c)}function cv(i,t){if(hv(i=ys(i)))return fv("Unsupported field value:",t,i),uv(i,t);if(i instanceof ov)return function(n,r){if(!lv(r.yu))throw r.Fu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.bu&&t.yu!==4)throw t.Fu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let l=cv(a,r.vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=ys(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=sn.fromDate(n);return{timestampValue:yh(r.serializer,s)}}if(n instanceof sn){const s=new sn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yh(r.serializer,s)}}if(n instanceof av)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fa)return{bytesValue:_T(r.serializer,n._byteString)};if(n instanceof Qi){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:G_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fu(`Unsupported field value: ${Hf(n)}`)}(i,t)}function uv(i,t){const e={};return x_(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qa(i,(n,r)=>{const s=cv(r,t.Su(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function hv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof sn||i instanceof av||i instanceof Fa||i instanceof Qi||i instanceof ov)}function fv(i,t,e){if(!hv(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=Hf(e);throw n==="an object"?t.Fu(i+" a custom object"):t.Fu(i+" "+n)}}function BM(i,t,e){if((t=ys(t))instanceof sv)return t._internalPath;if(typeof t=="string")return HM(i,t);throw Sc("Field path arguments must be of type string or ",i,!1,void 0,e)}const zM=new RegExp("[~\\*/\\[\\]]");function HM(i,t,e){if(t.search(zM)>=0)throw Sc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new sv(...t.split("."))._internalPath}catch{throw Sc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Sc(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new jt(pt.INVALID_ARGUMENT,a+i+l)}function GM(i,t){return i.some(e=>e.isEqual(t))}/**
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
 */function WM(i,t,e){let n;return n=i?i.toFirestore(t):t,n}function XM(i,t){const e=nv(i.firestore,iv),n=IM(i),r=WM(i.converter,t);return $M(e,[kM(VM(i.firestore),"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,Zi.exists(!1))]).then(()=>n)}function $M(i,t){return function(n,r){const s=new ds;return n.asyncQueue.enqueueAndForget(async()=>_M(await bM(n),r,s)),s.promise}(NM(i),t)}(function(t,e=!0){(function(r){Xo=r})(Bx),Rr(new tr("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new iv(new yS(n.getProvider("auth-internal")),new TS(n.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new jt(pt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gc(c.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),wi(Mp,"4.6.5",t),wi(Mp,"4.6.5","esm2017")})();const qM={apiKey:"AIzaSyANFcqVV70xABq37nC2Tp_sNbJdaSZ0Efs",authDomain:"votecats.firebaseapp.com",projectId:"votecats",storageBucket:"votecats.appspot.com",messagingSenderId:"564792623026",appId:"1:564792623026:web:41fb67ea13bfe0a306eeab",measurementId:"G-F7M0XWB52M"},dv=Fg(qM);dS(dv);const jM=LM(dv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="166",$s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YM=0,Kp=1,KM=2,pv=1,JM=2,Xi=3,Dr=0,On=1,ji=2,Sr=0,So=1,Jp=2,Zp=3,Qp=4,ZM=5,ns=100,QM=101,tA=102,eA=103,nA=104,iA=200,rA=201,sA=202,oA=203,Sh=204,Th=205,aA=206,lA=207,cA=208,uA=209,hA=210,fA=211,dA=212,pA=213,mA=214,gA=0,_A=1,vA=2,Tc=3,yA=4,xA=5,EA=6,SA=7,$f=0,TA=1,MA=2,Tr=0,AA=1,wA=2,bA=3,RA=4,CA=5,PA=6,IA=7,mv=300,No=301,Oo=302,Mh=303,Ah=304,Yc=306,wh=1e3,as=1001,bh=1002,ii=1003,DA=1004,Sl=1005,pi=1006,_u=1007,ls=1008,er=1009,gv=1010,_v=1011,Va=1012,qf=1013,ws=1014,Yi=1015,il=1016,jf=1017,Yf=1018,Uo=1020,vv=35902,yv=1021,xv=1022,gi=1023,Ev=1024,Sv=1025,To=1026,Fo=1027,Tv=1028,Kf=1029,Mv=1030,Jf=1031,Zf=1033,Zl=33776,Ql=33777,tc=33778,ec=33779,Rh=35840,Ch=35841,Ph=35842,Ih=35843,Dh=36196,Lh=37492,Nh=37496,Oh=37808,Uh=37809,Fh=37810,Vh=37811,kh=37812,Bh=37813,zh=37814,Hh=37815,Gh=37816,Wh=37817,Xh=37818,$h=37819,qh=37820,jh=37821,nc=36492,Yh=36494,Kh=36495,Av=36283,Jh=36284,Zh=36285,Qh=36286,LA=3200,NA=3201,Qf=0,OA=1,pr="",ei="srgb",Fr="srgb-linear",td="display-p3",Kc="display-p3-linear",Mc="linear",Se="srgb",Ac="rec709",wc="p3",js=7680,tm=519,UA=512,FA=513,VA=514,wv=515,kA=516,BA=517,zA=518,HA=519,em=35044,nm="300 es",Ki=2e3,bc=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const Ma=Math.PI/180,ka=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function ed(i,t){return(i%t+t)%t}function GA(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function WA(i,t,e){return i!==t?(e-i)/(t-i):0}function Aa(i,t,e){return(1-e)*i+e*t}function XA(i,t,e,n){return Aa(i,t,1-Math.exp(-e*n))}function $A(i,t=1){return t-Math.abs(ed(i,t*2)-t)}function qA(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jA(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function YA(i,t){return i+Math.floor(Math.random()*(t-i+1))}function KA(i,t){return i+Math.random()*(t-i)}function JA(i){return i*(.5-Math.random())}function ZA(i){i!==void 0&&(im=i);let t=im+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function QA(i){return i*Ma}function tw(i){return i*ka}function ew(i){return(i&i-1)===0&&i!==0}function nw(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function iw(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rw(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function po(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sw={DEG2RAD:Ma,RAD2DEG:ka,generateUUID:Fs,clamp:je,euclideanModulo:ed,mapLinear:GA,inverseLerp:WA,lerp:Aa,damp:XA,pingpong:$A,smoothstep:qA,smootherstep:jA,randInt:YA,randFloat:KA,randFloatSpread:JA,seededRandom:ZA,degToRad:QA,radToDeg:tw,isPowerOfTwo:ew,ceilPowerOfTwo:nw,floorPowerOfTwo:iw,setQuaternionFromProperEuler:rw,normalize:Rn,denormalize:po};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,r,s,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],v=r[0],g=r[3],m=r[6],w=r[1],A=r[4],R=r[7],F=r[2],D=r[5],S=r[8];return s[0]=o*v+a*w+l*F,s[3]=o*g+a*A+l*D,s[6]=o*m+a*R+l*S,s[1]=c*v+h*w+f*F,s[4]=c*g+h*A+f*D,s[7]=c*m+h*R+f*S,s[2]=d*v+p*w+x*F,s[5]=d*g+p*A+x*D,s[8]=d*m+p*R+x*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,x=e*f+n*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=f*v,t[1]=(r*c-h*n)*v,t[2]=(a*n-r*o)*v,t[3]=d*v,t[4]=(h*e-r*l)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vu.makeScale(t,e)),this}rotate(t){return this.premultiply(vu.makeRotation(-t)),this}translate(t,e){return this.premultiply(vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new te;function bv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ow(){const i=Ba("canvas");return i.style.display="block",i}const rm={};function Rv(i){i in rm||(rm[i]=!0,console.warn(i))}function aw(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const sm=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),om=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tl={[Fr]:{transfer:Mc,primaries:Ac,toReference:i=>i,fromReference:i=>i},[ei]:{transfer:Se,primaries:Ac,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Kc]:{transfer:Mc,primaries:wc,toReference:i=>i.applyMatrix3(om),fromReference:i=>i.applyMatrix3(sm)},[td]:{transfer:Se,primaries:wc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(om),fromReference:i=>i.applyMatrix3(sm).convertLinearToSRGB()}},lw=new Set([Fr,Kc]),fe={enabled:!0,_workingColorSpace:Fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lw.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Tl[t].toReference,r=Tl[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Tl[i].primaries},getTransfer:function(i){return i===pr?Mc:Tl[i].transfer}};function Mo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ys;class cw{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ys===void 0&&(Ys=Ba("canvas")),Ys.width=t.width,Ys.height=t.height;const n=Ys.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ba("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mo(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mo(e[n]/255)*255):e[n]=Mo(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uw=0;class Cv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xu(r[o].image)):s.push(xu(r[o]))}else s=xu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function xu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hw=0;class In extends Us{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,n=as,r=as,s=pi,o=ls,a=gi,l=er,c=In.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Fs(),this.name="",this.source=new Cv(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wh:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wh:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=mv;In.DEFAULT_ANISOTROPY=1;class Ye{constructor(t=0,e=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],x=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,R=(p+1)/2,F=(m+1)/2,D=(h+d)/4,S=(f+v)/4,T=(x+g)/4;return A>R&&A>F?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=D/n,s=S/n):R>F?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=D/r,s=T/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=S/s,r=T/s),this.set(n,r,s,e),this}let w=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(f-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fw extends Us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new In(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cv(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends fw{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pv extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dw extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=v;return}if(f!==v||l!==d||c!==p||h!==x){let g=1-a;const m=l*d+c*p+h*x+f*v,w=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const F=Math.sqrt(A),D=Math.atan2(F,m*w);g=Math.sin(g*D)/F,a=Math.sin(a*D)/F}const R=a*w;if(l=l*g+d*R,c=c*g+p*R,h=h*g+x*R,f=f*g+v*R,g===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=F,c*=F,h*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return t[e]=a*x+h*f+l*p-c*d,t[e+1]=l*x+h*d+c*f-a*p,t[e+2]=c*x+h*p+a*d-l*f,t[e+3]=h*x-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),f=a(s/2),d=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"YZX":this._x=d*h*f+c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f-d*p*x;break;case"XZY":this._x=d*h*f-c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(am.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(am.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eu.copy(this).projectOnVector(t),this.sub(Eu)}reflect(t){return this.sub(Eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new k,am=new Rs;class qo{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ml.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ml.copy(n.boundingBox)),Ml.applyMatrix4(t.matrixWorld),this.union(Ml)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),Al.subVectors(this.max,ca),Ks.subVectors(t.a,ca),Js.subVectors(t.b,ca),Zs.subVectors(t.c,ca),or.subVectors(Js,Ks),ar.subVectors(Zs,Js),Gr.subVectors(Ks,Zs);let e=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Gr.z,Gr.y,or.z,0,-or.x,ar.z,0,-ar.x,Gr.z,0,-Gr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Gr.y,Gr.x,0];return!Su(e,Ks,Js,Zs,Al)||(e=[1,0,0,0,1,0,0,0,1],!Su(e,Ks,Js,Zs,Al))?!1:(wl.crossVectors(or,ar),e=[wl.x,wl.y,wl.z],Su(e,Ks,Js,Zs,Al))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ki=[new k,new k,new k,new k,new k,new k,new k,new k],ci=new k,Ml=new qo,Ks=new k,Js=new k,Zs=new k,or=new k,ar=new k,Gr=new k,ca=new k,Al=new k,wl=new k,Wr=new k;function Su(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wr.fromArray(i,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=t.dot(Wr),c=e.dot(Wr),h=n.dot(Wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pw=new qo,ua=new k,Tu=new k;class nd{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pw.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);const e=ua.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ua,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(Tu)),this.expandByPoint(ua.copy(t.center).sub(Tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new k,Mu=new k,bl=new k,lr=new k,Au=new k,Rl=new k,wu=new k;class id{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Mu.copy(t).add(e).multiplyScalar(.5),bl.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(Mu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(bl),a=lr.dot(this.direction),l=-lr.dot(bl),c=lr.lengthSq(),h=Math.abs(1-o*o);let f,d,p,x;if(h>0)if(f=o*l-a,d=o*a-l,x=s*h,f>=0)if(d>=-x)if(d<=x){const v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mu).addScaledVector(bl,d),p}intersectSphere(t,e){Bi.subVectors(t.center,this.origin);const n=Bi.dot(this.direction),r=Bi.dot(Bi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,r,s){Au.subVectors(e,t),Rl.subVectors(n,t),wu.crossVectors(Au,Rl);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,t);const l=a*this.direction.dot(Rl.crossVectors(lr,Rl));if(l<0)return null;const c=a*this.direction.dot(Au.cross(lr));if(c<0||l+c>o)return null;const h=-a*lr.dot(wu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,e,n,r,s,o,a,l,c,h,f,d,p,x,v,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,f,d,p,x,v,g)}set(t,e,n,r,s,o,a,l,c,h,f,d,p,x,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Qs.setFromMatrixColumn(t,0).length(),s=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*f,x=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+x*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*f,x=c*h,v=c*f;e[0]=d+v*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*f,x=c*h,v=c*f;e[0]=d-v*a,e[4]=-o*f,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*f,x=a*h,v=a*f;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,x=a*l,v=a*c;e[0]=l*h,e[4]=v-d*f,e[8]=x*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+x,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*l,p=o*c,x=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=o*h,e[9]=p*f-x,e[2]=x*f-p,e[6]=a*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mw,t,gw)}lookAt(t,e,n){const r=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),cr.crossVectors(n,Xn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),cr.crossVectors(n,Xn)),cr.normalize(),Cl.crossVectors(Xn,cr),r[0]=cr.x,r[4]=Cl.x,r[8]=Xn.x,r[1]=cr.y,r[5]=Cl.y,r[9]=Xn.y,r[2]=cr.z,r[6]=Cl.z,r[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],v=n[6],g=n[10],m=n[14],w=n[3],A=n[7],R=n[11],F=n[15],D=r[0],S=r[4],T=r[8],y=r[12],E=r[1],b=r[5],L=r[9],C=r[13],W=r[2],K=r[6],G=r[10],tt=r[14],J=r[3],gt=r[7],St=r[11],xt=r[15];return s[0]=o*D+a*E+l*W+c*J,s[4]=o*S+a*b+l*K+c*gt,s[8]=o*T+a*L+l*G+c*St,s[12]=o*y+a*C+l*tt+c*xt,s[1]=h*D+f*E+d*W+p*J,s[5]=h*S+f*b+d*K+p*gt,s[9]=h*T+f*L+d*G+p*St,s[13]=h*y+f*C+d*tt+p*xt,s[2]=x*D+v*E+g*W+m*J,s[6]=x*S+v*b+g*K+m*gt,s[10]=x*T+v*L+g*G+m*St,s[14]=x*y+v*C+g*tt+m*xt,s[3]=w*D+A*E+R*W+F*J,s[7]=w*S+A*b+R*K+F*gt,s[11]=w*T+A*L+R*G+F*St,s[15]=w*y+A*C+R*tt+F*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],x=t[3],v=t[7],g=t[11],m=t[15];return x*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*p-n*l*p)+v*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+g*(+e*c*f-e*a*p-s*o*f+n*o*p+s*a*h-n*c*h)+m*(-r*a*h-e*l*f+e*a*d+r*o*f-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],x=t[12],v=t[13],g=t[14],m=t[15],w=f*g*c-v*d*c+v*l*p-a*g*p-f*l*m+a*d*m,A=x*d*c-h*g*c-x*l*p+o*g*p+h*l*m-o*d*m,R=h*v*c-x*f*c+x*a*p-o*v*p-h*a*m+o*f*m,F=x*f*l-h*v*l-x*a*d+o*v*d+h*a*g-o*f*g,D=e*w+n*A+r*R+s*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/D;return t[0]=w*S,t[1]=(v*d*s-f*g*s-v*r*p+n*g*p+f*r*m-n*d*m)*S,t[2]=(a*g*s-v*l*s+v*r*c-n*g*c-a*r*m+n*l*m)*S,t[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*p-n*l*p)*S,t[4]=A*S,t[5]=(h*g*s-x*d*s+x*r*p-e*g*p-h*r*m+e*d*m)*S,t[6]=(x*l*s-o*g*s-x*r*c+e*g*c+o*r*m-e*l*m)*S,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*p+e*l*p)*S,t[8]=R*S,t[9]=(x*f*s-h*v*s-x*n*p+e*v*p+h*n*m-e*f*m)*S,t[10]=(o*v*s-x*a*s+x*n*c-e*v*c-o*n*m+e*a*m)*S,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*p-e*a*p)*S,t[12]=F*S,t[13]=(h*v*r-x*f*r+x*n*d-e*v*d-h*n*g+e*f*g)*S,t[14]=(x*a*r-o*v*r-x*n*l+e*v*l+o*n*g-e*a*g)*S,t[15]=(o*f*r-h*a*r+h*n*l-e*f*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,x=s*f,v=o*h,g=o*f,m=a*f,w=l*c,A=l*h,R=l*f,F=n.x,D=n.y,S=n.z;return r[0]=(1-(v+m))*F,r[1]=(p+R)*F,r[2]=(x-A)*F,r[3]=0,r[4]=(p-R)*D,r[5]=(1-(d+m))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(x+A)*S,r[9]=(g-w)*S,r[10]=(1-(d+v))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Qs.set(r[0],r[1],r[2]).length();const o=Qs.set(r[4],r[5],r[6]).length(),a=Qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ui.copy(this);const c=1/s,h=1/o,f=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,e.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Ki){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,x;if(a===Ki)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===bc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ki){const l=this.elements,c=1/(e-t),h=1/(n-r),f=1/(o-s),d=(e+t)*c,p=(n+r)*h;let x,v;if(a===Ki)x=(o+s)*f,v=-2*f;else if(a===bc)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new k,ui=new Ue,mw=new k(0,0,0),gw=new k(1,1,1),cr=new k,Cl=new k,Xn=new k,lm=new Ue,cm=new Rs;class vi{constructor(t=0,e=0,n=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cm.setFromEuler(this),this.setFromQuaternion(cm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _w=0;const um=new k,to=new Rs,zi=new Ue,Pl=new k,ha=new k,vw=new k,yw=new Rs,hm=new k(1,0,0),fm=new k(0,1,0),dm=new k(0,0,1),pm={type:"added"},xw={type:"removed"},eo={type:"childadded",child:null},bu={type:"childremoved",child:null};class Tn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new k,e=new vi,n=new Rs,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new te}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.multiply(to),this}rotateOnWorldAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.premultiply(to),this}rotateX(t){return this.rotateOnAxis(hm,t)}rotateY(t){return this.rotateOnAxis(fm,t)}rotateZ(t){return this.rotateOnAxis(dm,t)}translateOnAxis(t,e){return um.copy(t).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hm,t)}translateY(t){return this.translateOnAxis(fm,t)}translateZ(t){return this.translateOnAxis(dm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pl.copy(t):Pl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ha,Pl,this.up):zi.lookAt(Pl,ha,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),to.setFromRotationMatrix(zi),this.quaternion.premultiply(to.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pm),eo.child=t,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xw),bu.child=t,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pm),eo.child=t,this.dispatchEvent(eo),eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,vw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,yw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new k(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new k,Hi=new k,Ru=new k,Gi=new k,no=new k,io=new k,mm=new k,Cu=new k,Pu=new k,Iu=new k;class Ti{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),hi.subVectors(t,e),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){hi.subVectors(r,e),Hi.subVectors(n,e),Ru.subVectors(t,e);const o=hi.dot(hi),a=hi.dot(Hi),l=hi.dot(Ru),c=Hi.dot(Hi),h=Hi.dot(Ru),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static isFrontFacing(t,e,n,r){return hi.subVectors(n,e),Hi.subVectors(t,e),hi.cross(Hi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ti.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;no.subVectors(r,n),io.subVectors(s,n),Cu.subVectors(t,n);const l=no.dot(Cu),c=io.dot(Cu);if(l<=0&&c<=0)return e.copy(n);Pu.subVectors(t,r);const h=no.dot(Pu),f=io.dot(Pu);if(h>=0&&f<=h)return e.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(no,o);Iu.subVectors(t,s);const p=no.dot(Iu),x=io.dot(Iu);if(x>=0&&p<=x)return e.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(io,a);const g=h*x-p*f;if(g<=0&&f-h>=0&&p-x>=0)return mm.subVectors(s,r),a=(f-h)/(f-h+(p-x)),e.copy(r).addScaledVector(mm,a);const m=1/(g+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(no,o).addScaledVector(io,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Du(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=ed(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Du(o,s,t+1/3),this.g=Du(o,s,t),this.b=Du(o,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=ei){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){const n=Iv[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}copyLinearToSRGB(t){return this.r=yu(t.r),this.g=yu(t.g),this.b=yu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return fe.fromWorkingColorSpace(vn.copy(this),t),Math.round(je(vn.r*255,0,255))*65536+Math.round(je(vn.g*255,0,255))*256+Math.round(je(vn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,s=vn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ei){fe.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,r=vn.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+e,ur.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ur),t.getHSL(Il);const n=Aa(ur.h,Il.h,e),r=Aa(ur.s,Il.s,e),s=Aa(ur.l,Il.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new re;re.NAMES=Iv;let Ew=0;class jo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=So,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=Th,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sh&&(n.blendSrc=this.blendSrc),this.blendDst!==Th&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Cs extends jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new k,Dl=new ft;class bi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=em,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Rv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dl.fromBufferAttribute(this,e),Dl.applyMatrix3(t),this.setXY(e,Dl.x,Dl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=po(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=po(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=po(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=po(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=po(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array),r=Rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==em&&(t.usage=this.usage),t}}class Dv extends bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lv extends bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class on extends bi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sw=0;const Qn=new Ue,Lu=new Tn,ro=new k,$n=new qo,fa=new qo,Qe=new k;class yi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bv(t)?Lv:Dv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return Lu.lookAt(t),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors($n.min,fa.min),$n.expandByPoint(Qe),Qe.addVectors($n.max,fa.max),$n.expandByPoint(Qe)):($n.expandByPoint(fa.min),$n.expandByPoint(fa.max))}$n.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(t,c),Qe.add(ro)),r=Math.max(r,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new k,l[T]=new k;const c=new k,h=new k,f=new k,d=new ft,p=new ft,x=new ft,v=new k,g=new k;function m(T,y,E){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,E),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),x.fromBufferAttribute(s,E),h.sub(c),f.sub(c),p.sub(d),x.sub(d);const b=1/(p.x*x.y-x.x*p.y);isFinite(b)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(b),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(b),a[T].add(v),a[y].add(v),a[E].add(v),l[T].add(g),l[y].add(g),l[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,y=w.length;T<y;++T){const E=w[T],b=E.start,L=E.count;for(let C=b,W=b+L;C<W;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const A=new k,R=new k,F=new k,D=new k;function S(T){F.fromBufferAttribute(r,T),D.copy(F);const y=a[T];A.copy(y),A.sub(F.multiplyScalar(F.dot(y))).normalize(),R.crossVectors(D,y);const b=R.dot(l[T])<0?-1:1;o.setXYZW(T,A.x,A.y,A.z,b)}for(let T=0,y=w.length;T<y;++T){const E=w[T],b=E.start,L=E.count;for(let C=b,W=b+L;C<W;C+=3)S(t.getX(C+0)),S(t.getX(C+1)),S(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,f=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)d[x++]=c[p++]}return new bi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Ue,Xr=new id,Ll=new nd,_m=new k,so=new k,oo=new k,ao=new k,Nu=new k,Nl=new k,Ol=new ft,Ul=new ft,Fl=new ft,vm=new k,ym=new k,xm=new k,Vl=new k,kl=new k;class Te extends Tn{constructor(t=new yi,e=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Nu.fromBufferAttribute(f,t),o?Nl.addScaledVector(Nu,h):Nl.addScaledVector(Nu.sub(e),h))}e.add(Nl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(s),Xr.copy(t.ray).recast(t.near),!(Ll.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ll,_m)===null||Xr.origin.distanceToSquared(_m)>(t.far-t.near)**2))&&(gm.copy(s).invert(),Xr.copy(t.ray).applyMatrix4(gm),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const g=d[x],m=o[g.materialIndex],w=Math.max(g.start,p.start),A=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let R=w,F=A;R<F;R+=3){const D=a.getX(R),S=a.getX(R+1),T=a.getX(R+2);r=Bl(this,m,t,n,c,h,f,D,S,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=x,m=v;g<m;g+=3){const w=a.getX(g),A=a.getX(g+1),R=a.getX(g+2);r=Bl(this,o,t,n,c,h,f,w,A,R),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const g=d[x],m=o[g.materialIndex],w=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let R=w,F=A;R<F;R+=3){const D=R,S=R+1,T=R+2;r=Bl(this,m,t,n,c,h,f,D,S,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=x,m=v;g<m;g+=3){const w=g,A=g+1,R=g+2;r=Bl(this,o,t,n,c,h,f,w,A,R),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Tw(i,t,e,n,r,s,o,a){let l;if(t.side===On?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Dr,a),l===null)return null;kl.copy(a),kl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(kl);return c<e.near||c>e.far?null:{distance:c,point:kl.clone(),object:i}}function Bl(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,so),i.getVertexPosition(l,oo),i.getVertexPosition(c,ao);const h=Tw(i,t,e,n,so,oo,ao,Vl);if(h){r&&(Ol.fromBufferAttribute(r,a),Ul.fromBufferAttribute(r,l),Fl.fromBufferAttribute(r,c),h.uv=Ti.getInterpolation(Vl,so,oo,ao,Ol,Ul,Fl,new ft)),s&&(Ol.fromBufferAttribute(s,a),Ul.fromBufferAttribute(s,l),Fl.fromBufferAttribute(s,c),h.uv1=Ti.getInterpolation(Vl,so,oo,ao,Ol,Ul,Fl,new ft)),o&&(vm.fromBufferAttribute(o,a),ym.fromBufferAttribute(o,l),xm.fromBufferAttribute(o,c),h.normal=Ti.getInterpolation(Vl,so,oo,ao,vm,ym,xm,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Ti.getNormal(so,oo,ao,f.normal),h.face=f}return h}class Ps extends yi{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(f,2));function x(v,g,m,w,A,R,F,D,S,T,y){const E=R/S,b=F/T,L=R/2,C=F/2,W=D/2,K=S+1,G=T+1;let tt=0,J=0;const gt=new k;for(let St=0;St<G;St++){const xt=St*b-C;for(let Nt=0;Nt<K;Nt++){const kt=Nt*E-L;gt[v]=kt*w,gt[g]=xt*A,gt[m]=W,c.push(gt.x,gt.y,gt.z),gt[v]=0,gt[g]=0,gt[m]=D>0?1:-1,h.push(gt.x,gt.y,gt.z),f.push(Nt/S),f.push(1-St/T),tt+=1}}for(let St=0;St<T;St++)for(let xt=0;xt<S;xt++){const Nt=d+xt+K*St,kt=d+xt+K*(St+1),et=d+(xt+1)+K*(St+1),ot=d+(xt+1)+K*St;l.push(Nt,kt,ot),l.push(kt,et,ot),J+=6}a.addGroup(p,J,y),p+=J,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=Vo(i[e]);for(const r in n)t[r]=n[r]}return t}function Mw(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nv(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Aw={clone:Vo,merge:Cn};var ww=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ww,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vo(t.uniforms),this.uniformsGroups=Mw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ov extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new k,Em=new ft,Sm=new ft;class ni extends Ov{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,e){return this.getViewBounds(t,Em,Sm),e.subVectors(Sm,Em)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lo=-90,co=1;class Rw extends Tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(lo,co,t,e);r.layers=this.layers,this.add(r);const s=new ni(lo,co,t,e);s.layers=this.layers,this.add(s);const o=new ni(lo,co,t,e);o.layers=this.layers,this.add(o);const a=new ni(lo,co,t,e);a.layers=this.layers,this.add(a);const l=new ni(lo,co,t,e);l.layers=this.layers,this.add(l);const c=new ni(lo,co,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Uv extends In{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:No,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cw extends bs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Uv(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:Vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Sr});s.uniforms.tEquirect.value=e;const o=new Te(r,s),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=pi),new Rw(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ou=new k,Pw=new k,Iw=new te;class fr{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ou.subVectors(n,e).cross(Pw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ou),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Iw.getNormalMatrix(t),r=this.coplanarPoint(Ou).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new nd,zl=new k;class sd{constructor(t=new fr,e=new fr,n=new fr,r=new fr,s=new fr,o=new fr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ki){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],x=r[9],v=r[10],g=r[11],m=r[12],w=r[13],A=r[14],R=r[15];if(n[0].setComponents(l-s,d-c,g-p,R-m).normalize(),n[1].setComponents(l+s,d+c,g+p,R+m).normalize(),n[2].setComponents(l+o,d+h,g+x,R+w).normalize(),n[3].setComponents(l-o,d-h,g-x,R-w).normalize(),n[4].setComponents(l-a,d-f,g-v,R-A).normalize(),e===Ki)n[5].setComponents(l+a,d+f,g+v,R+A).normalize();else if(e===bc)n[5].setComponents(a,f,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(zl.x=r.normal.x>0?t.max.x:t.min.x,zl.y=r.normal.y>0?t.max.y:t.min.y,zl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fv(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Dw(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,x=d.length;p<x;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Mr extends yi{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,f=t/a,d=e/l,p=[],x=[],v=[],g=[];for(let m=0;m<h;m++){const w=m*d-o;for(let A=0;A<c;A++){const R=A*f-s;x.push(R,-w,0),v.push(0,0,1),g.push(A/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const A=w+c*m,R=w+c*(m+1),F=w+1+c*(m+1),D=w+1+c*m;p.push(A,R,D),p.push(R,F,D)}this.setIndex(p),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nw=`#ifdef USE_ALPHAHASH
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
#endif`,Ow=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kw=`#ifdef USE_AOMAP
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
#endif`,Bw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zw=`#ifdef USE_BATCHING
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
#endif`,Hw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ww=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$w=`#ifdef USE_IRIDESCENCE
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
#endif`,qw=`#ifdef USE_BUMPMAP
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
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nb=`#define PI 3.141592653589793
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
} // validated`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rb=`vec3 transformedNormal = objectNormal;
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
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ub=`
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
}`,hb=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
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
}`,Eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
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
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,Ib=`struct PhysicalMaterial {
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
}`,Db=`
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ub=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hb=`#if defined( USE_POINTS_UV )
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
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,x1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,S1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,B1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
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
}`,X1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,q1=`uniform vec3 diffuse;
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
}`,j1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,K1=`#define MATCAP
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
}`,J1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,tR=`#define PHONG
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
}`,eR=`#define PHONG
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
}`,nR=`#define STANDARD
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
}`,iR=`#define STANDARD
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
}`,rR=`#define TOON
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
}`,sR=`#define TOON
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
}`,oR=`uniform float size;
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
}`,aR=`uniform vec3 diffuse;
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
}`,lR=`#include <common>
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
}`,cR=`uniform vec3 color;
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
}`,uR=`uniform float rotation;
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
}`,hR=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Lw,alphahash_pars_fragment:Nw,alphamap_fragment:Ow,alphamap_pars_fragment:Uw,alphatest_fragment:Fw,alphatest_pars_fragment:Vw,aomap_fragment:kw,aomap_pars_fragment:Bw,batching_pars_vertex:zw,batching_vertex:Hw,begin_vertex:Gw,beginnormal_vertex:Ww,bsdfs:Xw,iridescence_fragment:$w,bumpmap_pars_fragment:qw,clipping_planes_fragment:jw,clipping_planes_pars_fragment:Yw,clipping_planes_pars_vertex:Kw,clipping_planes_vertex:Jw,color_fragment:Zw,color_pars_fragment:Qw,color_pars_vertex:tb,color_vertex:eb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:rb,displacementmap_pars_vertex:sb,displacementmap_vertex:ob,emissivemap_fragment:ab,emissivemap_pars_fragment:lb,colorspace_fragment:cb,colorspace_pars_fragment:ub,envmap_fragment:hb,envmap_common_pars_fragment:fb,envmap_pars_fragment:db,envmap_pars_vertex:pb,envmap_physical_pars_fragment:Ab,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:_b,fog_fragment:vb,fog_pars_fragment:yb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:Eb,lights_lambert_fragment:Sb,lights_lambert_pars_fragment:Tb,lights_pars_begin:Mb,lights_toon_fragment:wb,lights_toon_pars_fragment:bb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Cb,lights_physical_fragment:Pb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Db,lights_fragment_maps:Lb,lights_fragment_end:Nb,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:Ub,logdepthbuf_pars_vertex:Fb,logdepthbuf_vertex:Vb,map_fragment:kb,map_pars_fragment:Bb,map_particle_fragment:zb,map_particle_pars_fragment:Hb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Wb,morphinstance_vertex:Xb,morphcolor_vertex:$b,morphnormal_vertex:qb,morphtarget_pars_vertex:jb,morphtarget_vertex:Yb,normal_fragment_begin:Kb,normal_fragment_maps:Jb,normal_pars_fragment:Zb,normal_pars_vertex:Qb,normal_vertex:t1,normalmap_pars_fragment:e1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:r1,iridescence_pars_fragment:s1,opaque_fragment:o1,packing:a1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:h1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:d1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:_1,skinbase_vertex:v1,skinning_pars_vertex:y1,skinning_vertex:x1,skinnormal_vertex:E1,specularmap_fragment:S1,specularmap_pars_fragment:T1,tonemapping_fragment:M1,tonemapping_pars_fragment:A1,transmission_fragment:w1,transmission_pars_fragment:b1,uv_pars_fragment:R1,uv_pars_vertex:C1,uv_vertex:P1,worldpos_vertex:I1,background_vert:D1,background_frag:L1,backgroundCube_vert:N1,backgroundCube_frag:O1,cube_vert:U1,cube_frag:F1,depth_vert:V1,depth_frag:k1,distanceRGBA_vert:B1,distanceRGBA_frag:z1,equirect_vert:H1,equirect_frag:G1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:$1,meshbasic_frag:q1,meshlambert_vert:j1,meshlambert_frag:Y1,meshmatcap_vert:K1,meshmatcap_frag:J1,meshnormal_vert:Z1,meshnormal_frag:Q1,meshphong_vert:tR,meshphong_frag:eR,meshphysical_vert:nR,meshphysical_frag:iR,meshtoon_vert:rR,meshtoon_frag:sR,points_vert:oR,points_frag:aR,shadow_vert:lR,shadow_frag:cR,sprite_vert:uR,sprite_frag:hR},Mt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Cn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Cn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Cn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Cn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Cn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Cn([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Cn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Cn([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Cn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Cn([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Cn([Mt.common,Mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Cn([Mt.lights,Mt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Hl={r:0,b:0,g:0},qr=new vi,fR=new Ue;function dR(i,t,e,n,r,s,o){const a=new re(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function x(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function v(w){let A=!1;const R=x(w);R===null?m(a,l):R&&R.isColor&&(m(R,1),A=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,A){const R=x(A);R&&(R.isCubeTexture||R.mapping===Yc)?(h===void 0&&(h=new Te(new Ps(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Vo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),qr.copy(A.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fR.makeRotationFromEuler(qr)),h.material.toneMapped=fe.getTransfer(R.colorSpace)!==Se,(f!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Te(new Mr(2,2),new Lr({name:"BackgroundMaterial",uniforms:Vo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=fe.getTransfer(R.colorSpace)!==Se,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,A){w.getRGB(Hl,Nv(i)),n.buffers.color.setClear(Hl.r,Hl.g,Hl.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:v,addToRenderList:g}}function pR(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(E,b,L,C,W){let K=!1;const G=f(C,L,b);s!==G&&(s=G,c(s.object)),K=p(E,C,L,W),K&&x(E,C,L,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,R(E,b,L,C),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,b,L){const C=L.wireframe===!0;let W=n[E.id];W===void 0&&(W={},n[E.id]=W);let K=W[b.id];K===void 0&&(K={},W[b.id]=K);let G=K[C];return G===void 0&&(G=d(l()),K[C]=G),G}function d(E){const b=[],L=[],C=[];for(let W=0;W<e;W++)b[W]=0,L[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:L,attributeDivisors:C,object:E,attributes:{},index:null}}function p(E,b,L,C){const W=s.attributes,K=b.attributes;let G=0;const tt=L.getAttributes();for(const J in tt)if(tt[J].location>=0){const St=W[J];let xt=K[J];if(xt===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor)),St===void 0||St.attribute!==xt||xt&&St.data!==xt.data)return!0;G++}return s.attributesNum!==G||s.index!==C}function x(E,b,L,C){const W={},K=b.attributes;let G=0;const tt=L.getAttributes();for(const J in tt)if(tt[J].location>=0){let St=K[J];St===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(St=E.instanceColor));const xt={};xt.attribute=St,St&&St.data&&(xt.data=St.data),W[J]=xt,G++}s.attributes=W,s.attributesNum=G,s.index=C}function v(){const E=s.newAttributes;for(let b=0,L=E.length;b<L;b++)E[b]=0}function g(E){m(E,0)}function m(E,b){const L=s.newAttributes,C=s.enabledAttributes,W=s.attributeDivisors;L[E]=1,C[E]===0&&(i.enableVertexAttribArray(E),C[E]=1),W[E]!==b&&(i.vertexAttribDivisor(E,b),W[E]=b)}function w(){const E=s.newAttributes,b=s.enabledAttributes;for(let L=0,C=b.length;L<C;L++)b[L]!==E[L]&&(i.disableVertexAttribArray(L),b[L]=0)}function A(E,b,L,C,W,K,G){G===!0?i.vertexAttribIPointer(E,b,L,W,K):i.vertexAttribPointer(E,b,L,C,W,K)}function R(E,b,L,C){v();const W=C.attributes,K=L.getAttributes(),G=b.defaultAttributeValues;for(const tt in K){const J=K[tt];if(J.location>=0){let gt=W[tt];if(gt===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const St=gt.normalized,xt=gt.itemSize,Nt=t.get(gt);if(Nt===void 0)continue;const kt=Nt.buffer,et=Nt.type,ot=Nt.bytesPerElement,Ct=et===i.INT||et===i.UNSIGNED_INT||gt.gpuType===qf;if(gt.isInterleavedBufferAttribute){const _t=gt.data,Ht=_t.stride,Kt=gt.offset;if(_t.isInstancedInterleavedBuffer){for(let Bt=0;Bt<J.locationSize;Bt++)m(J.location+Bt,_t.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<J.locationSize;Bt++)g(J.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Bt=0;Bt<J.locationSize;Bt++)A(J.location+Bt,xt/J.locationSize,et,St,Ht*ot,(Kt+xt/J.locationSize*Bt)*ot,Ct)}else{if(gt.isInstancedBufferAttribute){for(let _t=0;_t<J.locationSize;_t++)m(J.location+_t,gt.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let _t=0;_t<J.locationSize;_t++)g(J.location+_t);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let _t=0;_t<J.locationSize;_t++)A(J.location+_t,xt/J.locationSize,et,St,xt*ot,xt/J.locationSize*_t*ot,Ct)}}else if(G!==void 0){const St=G[tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(J.location,St);break;case 3:i.vertexAttrib3fv(J.location,St);break;case 4:i.vertexAttrib4fv(J.location,St);break;default:i.vertexAttrib1fv(J.location,St)}}}}w()}function F(){T();for(const E in n){const b=n[E];for(const L in b){const C=b[L];for(const W in C)h(C[W].object),delete C[W];delete b[L]}delete n[E]}}function D(E){if(n[E.id]===void 0)return;const b=n[E.id];for(const L in b){const C=b[L];for(const W in C)h(C[W].object),delete C[W];delete b[L]}delete n[E.id]}function S(E){for(const b in n){const L=n[b];if(L[E.id]===void 0)continue;const C=L[E.id];for(const W in C)h(C[W].object),delete C[W];delete L[E.id]}}function T(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function mR(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let x=0;x<f;x++)p+=h[x];e.update(p,n,1)}function l(c,h,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let x=0;for(let v=0;v<f;v++)x+=h[v];for(let v=0;v<d.length;v++)e.update(x,n,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gR(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==gi&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const S=D===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==er&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yi&&!S)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:R,maxSamples:F}}function _R(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new fr,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!r||x===null||x.length===0||s&&!g)s?h(null):c();else{const w=s?0:n,A=w*4;let R=m.clippingState||null;l.value=R,R=h(x,d,A,p);for(let F=0;F!==A;++F)R[F]=e[F];m.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,x){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const m=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,R=p;A!==v;++A,R+=4)o.copy(f[A]).applyMatrix4(w,a),o.normal.toArray(g,R),g[R+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function vR(i){let t=new WeakMap;function e(o,a){return a===Mh?o.mapping=No:a===Ah&&(o.mapping=Oo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mh||a===Ah)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cw(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Vv extends Ov{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mo=4,Tm=[.125,.215,.35,.446,.526,.582],is=20,Uu=new Vv,Mm=new re;let Fu=null,Vu=0,ku=0,Bu=!1;const Zr=(1+Math.sqrt(5))/2,uo=1/Zr,Am=[new k(-Zr,uo,0),new k(Zr,uo,0),new k(-uo,0,Zr),new k(uo,0,Zr),new k(0,Zr,-uo),new k(0,Zr,uo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class wm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Fu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fu,Vu,ku),this._renderer.xr.enabled=Bu,t.scissorTest=!1,Gl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===No||t.mapping===Oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:il,format:gi,colorSpace:Fr,depthBuffer:!1},r=bm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yR(s)),this._blurMaterial=xR(s,t,e)}return r}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,Uu)}_sceneToCubeUV(t,e,n,r){const a=new ni(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Mm),h.toneMapping=Tr,h.autoClear=!1;const p=new Cs({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),x=new Te(new Ps,p);let v=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(Mm),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const A=this._cubeSize;Gl(r,w*A,m>2?A:0,A,A),h.setRenderTarget(r),v&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===No||t.mapping===Oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Gl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Uu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Am[(r-s-1)%Am.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Te(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),v=s/x,g=isFinite(s)?1+Math.floor(h*v):is;g>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);const m=[];let w=0;for(let S=0;S<is;++S){const T=S/v,y=Math.exp(-T*T/2);m.push(y),S===0?w+=y:S<g&&(w+=2*y)}for(let S=0;S<m.length;S++)m[S]=m[S]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=x,d.mipInt.value=A-n;const R=this._sizeLods[r],F=3*R*(r>A-mo?r-A+mo:0),D=4*(this._cubeSize-R);Gl(e,F,D,3*R,2*R),l.setRenderTarget(e),l.render(f,Uu)}}function yR(i){const t=[],e=[],n=[];let r=i;const s=i-mo+1+Tm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-mo?l=Tm[o-i+mo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,v=3,g=2,m=1,w=new Float32Array(v*x*p),A=new Float32Array(g*x*p),R=new Float32Array(m*x*p);for(let D=0;D<p;D++){const S=D%3*2/3-1,T=D>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];w.set(y,v*x*D),A.set(d,g*x*D);const E=[D,D,D,D,D,D];R.set(E,m*x*D)}const F=new yi;F.setAttribute("position",new bi(w,v)),F.setAttribute("uv",new bi(A,g)),F.setAttribute("faceIndex",new bi(R,m)),t.push(F),r>mo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bm(i,t,e){const n=new bs(i,t,e);return n.texture.mapping=Yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function xR(i,t,e){const n=new Float32Array(is),r=new k(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:od(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rm(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Cm(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function od(){return`

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
	`}function ER(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mh||l===Ah,h=l===No||l===Oo;if(c||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wm(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new wm(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function SR(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Rv("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function TR(i,t,e,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)t.update(d[x],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const v=p[x];for(let g=0,m=v.length;g<m;g++)t.update(v[g],i.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,x=f.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let A=0,R=w.length;A<R;A+=3){const F=w[A+0],D=w[A+1],S=w[A+2];d.push(F,D,D,S,S,F)}}else if(x!==void 0){const w=x.array;v=x.version;for(let A=0,R=w.length/3-1;A<R;A+=3){const F=A+0,D=A+1,S=A+2;d.push(F,D,D,S,S,F)}}else return;const g=new(bv(d)?Lv:Dv)(d,1);g.version=v;const m=s.get(f);m&&t.remove(m),s.set(f,g)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function MR(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,d*o,x),e.update(p,n,x))}function h(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let g=0;for(let m=0;m<x;m++)g+=p[m];e.update(g,n,1)}function f(d,p,x,v){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,x);let m=0;for(let w=0;w<x;w++)m+=p[w];for(let w=0;w<v.length;w++)e.update(m,n,v[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function AR(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function wR(i,t,e){const n=new WeakMap,r=new Ye;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let R=0;x===!0&&(R=1),v===!0&&(R=2),g===!0&&(R=3);let F=a.attributes.position.count*R,D=1;F>t.maxTextureSize&&(D=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const S=new Float32Array(F*D*4*f),T=new Pv(S,F,D,f);T.type=Yi,T.needsUpdate=!0;const y=R*4;for(let b=0;b<f;b++){const L=m[b],C=w[b],W=A[b],K=F*D*4*b;for(let G=0;G<L.count;G++){const tt=G*y;x===!0&&(r.fromBufferAttribute(L,G),S[K+tt+0]=r.x,S[K+tt+1]=r.y,S[K+tt+2]=r.z,S[K+tt+3]=0),v===!0&&(r.fromBufferAttribute(C,G),S[K+tt+4]=r.x,S[K+tt+5]=r.y,S[K+tt+6]=r.z,S[K+tt+7]=0),g===!0&&(r.fromBufferAttribute(W,G),S[K+tt+8]=r.x,S[K+tt+9]=r.y,S[K+tt+10]=r.z,S[K+tt+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new ft(F,D)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function bR(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class kv extends In{constructor(t,e,n,r,s,o,a,l,c,h=To){if(h!==To&&h!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===To&&(n=ws),n===void 0&&h===Fo&&(n=Uo),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bv=new In,Pm=new kv(1,1),zv=new Pv,Hv=new dw,Gv=new Uv,Im=[],Dm=[],Lm=new Float32Array(16),Nm=new Float32Array(9),Om=new Float32Array(4);function Yo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Im[r];if(s===void 0&&(s=new Float32Array(r),Im[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jc(i,t){let e=Dm[t];e===void 0&&(e=new Int32Array(t),Dm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function RR(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function CR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function PR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function IR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function DR(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,n))return;Om.set(n),i.uniformMatrix2fv(this.addr,!1,Om),Ze(e,n)}}function LR(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,n))return;Nm.set(n),i.uniformMatrix3fv(this.addr,!1,Nm),Ze(e,n)}}function NR(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,n))return;Lm.set(n),i.uniformMatrix4fv(this.addr,!1,Lm),Ze(e,n)}}function OR(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function UR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function FR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function VR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function kR(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function BR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function zR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function HR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function GR(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Pm.compareFunction=wv,s=Pm):s=Bv,e.setTexture2D(t||s,r)}function WR(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Hv,r)}function XR(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Gv,r)}function $R(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||zv,r)}function qR(i){switch(i){case 5126:return RR;case 35664:return CR;case 35665:return PR;case 35666:return IR;case 35674:return DR;case 35675:return LR;case 35676:return NR;case 5124:case 35670:return OR;case 35667:case 35671:return UR;case 35668:case 35672:return FR;case 35669:case 35673:return VR;case 5125:return kR;case 36294:return BR;case 36295:return zR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return GR;case 35679:case 36299:case 36307:return WR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return $R}}function jR(i,t){i.uniform1fv(this.addr,t)}function YR(i,t){const e=Yo(t,this.size,2);i.uniform2fv(this.addr,e)}function KR(i,t){const e=Yo(t,this.size,3);i.uniform3fv(this.addr,e)}function JR(i,t){const e=Yo(t,this.size,4);i.uniform4fv(this.addr,e)}function ZR(i,t){const e=Yo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function QR(i,t){const e=Yo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tC(i,t){const e=Yo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eC(i,t){i.uniform1iv(this.addr,t)}function nC(i,t){i.uniform2iv(this.addr,t)}function iC(i,t){i.uniform3iv(this.addr,t)}function rC(i,t){i.uniform4iv(this.addr,t)}function sC(i,t){i.uniform1uiv(this.addr,t)}function oC(i,t){i.uniform2uiv(this.addr,t)}function aC(i,t){i.uniform3uiv(this.addr,t)}function lC(i,t){i.uniform4uiv(this.addr,t)}function cC(i,t,e){const n=this.cache,r=t.length,s=Jc(e,r);Je(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Bv,s[o])}function uC(i,t,e){const n=this.cache,r=t.length,s=Jc(e,r);Je(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Hv,s[o])}function hC(i,t,e){const n=this.cache,r=t.length,s=Jc(e,r);Je(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gv,s[o])}function fC(i,t,e){const n=this.cache,r=t.length,s=Jc(e,r);Je(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||zv,s[o])}function dC(i){switch(i){case 5126:return jR;case 35664:return YR;case 35665:return KR;case 35666:return JR;case 35674:return ZR;case 35675:return QR;case 35676:return tC;case 5124:case 35670:return eC;case 35667:case 35671:return nC;case 35668:case 35672:return iC;case 35669:case 35673:return rC;case 5125:return sC;case 36294:return oC;case 36295:return aC;case 36296:return lC;case 35678:case 36198:case 36298:case 36306:case 35682:return cC;case 35679:case 36299:case 36307:return uC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return fC}}class pC{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qR(e.type)}}class mC{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dC(e.type)}}class gC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Um(i,t){i.seq.push(t),i.map[t.id]=t}function _C(i,t,e){const n=i.name,r=n.length;for(zu.lastIndex=0;;){const s=zu.exec(n),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Um(e,c===void 0?new pC(a,i,t):new mC(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new gC(a),Um(e,f)),e=f}}}class ic{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);_C(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Fm(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vC=37297;let yC=0;function xC(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function EC(i){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i);let n;switch(t===e?n="":t===wc&&e===Ac?n="LinearDisplayP3ToLinearSRGB":t===Ac&&e===wc&&(n="LinearSRGBToLinearDisplayP3"),i){case Fr:case Kc:return[n,"LinearTransferOETF"];case ei:case td:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vm(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+xC(i.getShaderSource(t),o)}else return r}function SC(i,t){const e=EC(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function TC(i,t){let e;switch(t){case AA:e="Linear";break;case wA:e="Reinhard";break;case bA:e="OptimizedCineon";break;case RA:e="ACESFilmic";break;case PA:e="AgX";break;case IA:e="Neutral";break;case CA:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function MC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function AC(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wC(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ma(i){return i!==""}function km(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bC=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(i){return i.replace(bC,CC)}const RC=new Map;function CC(i,t){let e=Qt[t];if(e===void 0){const n=RC.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tf(e)}const PC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(i){return i.replace(PC,IC)}function IC(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function DC(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pv?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===JM?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function LC(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case No:case Oo:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NC(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oo:t="ENVMAP_MODE_REFRACTION";break}return t}function OC(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $f:t="ENVMAP_BLENDING_MULTIPLY";break;case TA:t="ENVMAP_BLENDING_MIX";break;case MA:t="ENVMAP_BLENDING_ADD";break}return t}function UC(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function FC(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=DC(e),c=LC(e),h=NC(e),f=OC(e),d=UC(e),p=MC(e),x=AC(s),v=r.createProgram();let g,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ma).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(g=[Hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[Hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tr?"#define TONE_MAPPING":"",e.toneMapping!==Tr?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Tr?TC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,SC("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),o=tf(o),o=km(o,e),o=Bm(o,e),a=tf(a),a=km(a,e),a=Bm(a,e),o=zm(o),a=zm(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=w+g+o,R=w+m+a,F=Fm(r,r.VERTEX_SHADER,A),D=Fm(r,r.FRAGMENT_SHADER,R);r.attachShader(v,F),r.attachShader(v,D),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function S(b){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(v).trim(),C=r.getShaderInfoLog(F).trim(),W=r.getShaderInfoLog(D).trim();let K=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,F,D);else{const tt=Vm(r,F,"vertex"),J=Vm(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+L+`
`+tt+`
`+J)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(C===""||W==="")&&(G=!1);G&&(b.diagnostics={runnable:K,programLog:L,vertexShader:{log:C,prefix:g},fragmentShader:{log:W,prefix:m}})}r.deleteShader(F),r.deleteShader(D),T=new ic(r,v),y=wC(r,v)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,vC)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yC++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=D,this}let VC=0;class kC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new BC(t),e.set(t,n)),n}}class BC{constructor(t){this.id=VC++,this.code=t,this.usedTimes=0}}function zC(i,t,e,n,r,s,o){const a=new rd,l=new kC,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,E,b,L,C){const W=L.fog,K=C.geometry,G=y.isMeshStandardMaterial?L.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),J=tt&&tt.mapping===Yc?tt.image.height:null,gt=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const St=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=St!==void 0?St.length:0;let Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let kt,et,ot,Ct;if(gt){const ie=Ei[gt];kt=ie.vertexShader,et=ie.fragmentShader}else kt=y.vertexShader,et=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),Ct=l.getFragmentShaderID(y);const _t=i.getRenderTarget(),Ht=C.isInstancedMesh===!0,Kt=C.isBatchedMesh===!0,Bt=!!y.map,Zt=!!y.matcap,U=!!tt,dt=!!y.aoMap,at=!!y.lightMap,yt=!!y.bumpMap,nt=!!y.normalMap,Ft=!!y.displacementMap,Et=!!y.emissiveMap,Rt=!!y.metalnessMap,V=!!y.roughnessMap,I=y.anisotropy>0,q=y.clearcoat>0,st=y.dispersion>0,it=y.iridescence>0,rt=y.sheen>0,At=y.transmission>0,ut=I&&!!y.anisotropyMap,Tt=q&&!!y.clearcoatMap,qt=q&&!!y.clearcoatNormalMap,ht=q&&!!y.clearcoatRoughnessMap,wt=it&&!!y.iridescenceMap,Jt=it&&!!y.iridescenceThicknessMap,Gt=rt&&!!y.sheenColorMap,Pt=rt&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,Yt=!!y.specularColorMap,me=!!y.specularIntensityMap,P=At&&!!y.transmissionMap,X=At&&!!y.thicknessMap,$=!!y.gradientMap,Z=!!y.alphaMap,lt=y.alphaTest>0,Lt=!!y.alphaHash,zt=!!y.extensions;let Me=Tr;y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ae={shaderID:gt,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:et,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:Ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Kt,batchingColor:Kt&&C._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&C.instanceColor!==null,instancingMorph:Ht&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Fr,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:Zt,envMap:U,envMapMode:U&&tt.mapping,envMapCubeUVHeight:J,aoMap:dt,lightMap:at,bumpMap:yt,normalMap:nt,displacementMap:d&&Ft,emissiveMap:Et,normalMapObjectSpace:nt&&y.normalMapType===OA,normalMapTangentSpace:nt&&y.normalMapType===Qf,metalnessMap:Rt,roughnessMap:V,anisotropy:I,anisotropyMap:ut,clearcoat:q,clearcoatMap:Tt,clearcoatNormalMap:qt,clearcoatRoughnessMap:ht,dispersion:st,iridescence:it,iridescenceMap:wt,iridescenceThicknessMap:Jt,sheen:rt,sheenColorMap:Gt,sheenRoughnessMap:Pt,specularMap:Wt,specularColorMap:Yt,specularIntensityMap:me,transmission:At,transmissionMap:P,thicknessMap:X,gradientMap:$,opaque:y.transparent===!1&&y.blending===So&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:Lt,combine:y.combine,mapUv:Bt&&v(y.map.channel),aoMapUv:dt&&v(y.aoMap.channel),lightMapUv:at&&v(y.lightMap.channel),bumpMapUv:yt&&v(y.bumpMap.channel),normalMapUv:nt&&v(y.normalMap.channel),displacementMapUv:Ft&&v(y.displacementMap.channel),emissiveMapUv:Et&&v(y.emissiveMap.channel),metalnessMapUv:Rt&&v(y.metalnessMap.channel),roughnessMapUv:V&&v(y.roughnessMap.channel),anisotropyMapUv:ut&&v(y.anisotropyMap.channel),clearcoatMapUv:Tt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&v(y.sheenRoughnessMap.channel),specularMapUv:Wt&&v(y.specularMap.channel),specularColorMapUv:Yt&&v(y.specularColorMap.channel),specularIntensityMapUv:me&&v(y.specularIntensityMap.channel),transmissionMapUv:P&&v(y.transmissionMap.channel),thicknessMapUv:X&&v(y.thicknessMap.channel),alphaMapUv:Z&&v(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(nt||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!K.attributes.uv&&(Bt||Z),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:C.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ji,flipSided:y.side===On,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:zt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&y.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)E.push(b),E.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(w(E,y),A(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function w(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function A(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),y.push(a.mask)}function R(y){const E=x[y.type];let b;if(E){const L=Ei[E];b=Aw.clone(L.uniforms)}else b=y.uniforms;return b}function F(y,E){let b;for(let L=0,C=h.length;L<C;L++){const W=h[L];if(W.cacheKey===E){b=W,++b.usedTimes;break}}return b===void 0&&(b=new FC(i,E,y,s),h.push(b)),b}function D(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function S(y){l.remove(y)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:R,acquireProgram:F,releaseProgram:D,releaseShaderCache:S,programs:h,dispose:T}}function HC(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function GC(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wm(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,d,p,x,v,g){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:g},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=v,m.group=g),t++,m}function a(f,d,p,x,v,g){const m=o(f,d,p,x,v,g);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function l(f,d,p,x,v,g){const m=o(f,d,p,x,v,g);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||GC),n.length>1&&n.sort(d||Gm),r.length>1&&r.sort(d||Gm)}function h(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function WC(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Wm,i.set(n,[o])):r>=s.length?(o=new Wm,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function XC(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new re};break;case"SpotLight":e={position:new k,direction:new k,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function $C(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let qC=0;function jC(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function YC(i){const t=new XC,e=$C(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const r=new k,s=new Ue,o=new Ue;function a(c){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,x=0,v=0,g=0,m=0,w=0,A=0,R=0,F=0,D=0,S=0;c.sort(jC);for(let y=0,E=c.length;y<E;y++){const b=c[y],L=b.color,C=b.intensity,W=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=L.r*C,f+=L.g*C,d+=L.b*C;else if(b.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(b.sh.coefficients[G],C);S++}else if(b.isDirectionalLight){const G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const tt=b.shadow,J=e.get(b);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=b.shadow.matrix,w++}n.directional[p]=G,p++}else if(b.isSpotLight){const G=t.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(L).multiplyScalar(C),G.distance=W,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,n.spot[v]=G;const tt=b.shadow;if(b.map&&(n.spotLightMap[F]=b.map,F++,tt.updateMatrices(b),b.castShadow&&D++),n.spotLightMatrix[v]=tt.matrix,b.castShadow){const J=e.get(b);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=K,R++}v++}else if(b.isRectAreaLight){const G=t.get(b);G.color.copy(L).multiplyScalar(C),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=G,g++}else if(b.isPointLight){const G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const tt=b.shadow,J=e.get(b);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,J.shadowCameraNear=tt.camera.near,J.shadowCameraFar=tt.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=b.shadow.matrix,A++}n.point[x]=G,x++}else if(b.isHemisphereLight){const G=t.get(b);G.skyColor.copy(b.color).multiplyScalar(C),G.groundColor.copy(b.groundColor).multiplyScalar(C),n.hemi[m]=G,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==p||T.pointLength!==x||T.spotLength!==v||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==w||T.numPointShadows!==A||T.numSpotShadows!==R||T.numSpotMaps!==F||T.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=R+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=S,T.directionalLength=p,T.pointLength=x,T.spotLength=v,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=w,T.numPointShadows=A,T.numSpotShadows=R,T.numSpotMaps=F,T.numLightProbes=S,n.version=qC++)}function l(c,h){let f=0,d=0,p=0,x=0,v=0;const g=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const A=c[m];if(A.isDirectionalLight){const R=n.directional[f];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),f++}else if(A.isSpotLight){const R=n.spot[p];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),p++}else if(A.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),o.identity(),s.copy(A.matrixWorld),s.premultiply(g),o.extractRotation(s),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){const R=n.point[d];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){const R=n.hemi[v];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Xm(i){const t=new YC(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KC(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Xm(i),t.set(r,[a])):s>=o.length?(a=new Xm(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class JC extends jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZC extends jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const QC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tP=`uniform sampler2D shadow_pass;
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
}`;function eP(i,t,e){let n=new sd;const r=new ft,s=new ft,o=new Ye,a=new JC({depthPacking:NA}),l=new ZC,c={},h=e.maxTextureSize,f={[Dr]:On,[On]:Dr,[ji]:ji},d=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:QC,fragmentShader:tP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new yi;x.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Te(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let m=this.type;this.render=function(D,S,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Sr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const C=m!==Xi&&this.type===Xi,W=m===Xi&&this.type!==Xi;for(let K=0,G=D.length;K<G;K++){const tt=D[K],J=tt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const gt=J.getFrameExtents();if(r.multiply(gt),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/gt.x),r.x=s.x*gt.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/gt.y),r.y=s.y*gt.y,J.mapSize.y=s.y)),J.map===null||C===!0||W===!0){const xt=this.type!==Xi?{minFilter:ii,magFilter:ii}:{};J.map!==null&&J.map.dispose(),J.map=new bs(r.x,r.y,xt),J.map.texture.name=tt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const St=J.getViewportCount();for(let xt=0;xt<St;xt++){const Nt=J.getViewport(xt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),L.viewport(o),J.updateMatrices(tt,xt),n=J.getFrustum(),R(S,T,J.camera,tt,this.type)}J.isPointLightShadow!==!0&&this.type===Xi&&w(J,T),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,E,b)};function w(D,S){const T=t.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new bs(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(S,null,T,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(S,null,T,p,v,null)}function A(D,S,T,y){let E=null;const b=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(b!==void 0)E=b;else if(E=T.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const L=E.uuid,C=S.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let K=W[C];K===void 0&&(K=E.clone(),W[C]=K,S.addEventListener("dispose",F)),E=K}if(E.visible=S.visible,E.wireframe=S.wireframe,y===Xi?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:f[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=i.properties.get(E);L.light=T}return E}function R(D,S,T,y,E){if(D.visible===!1)return;if(D.layers.test(S.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Xi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const C=t.update(D),W=D.material;if(Array.isArray(W)){const K=C.groups;for(let G=0,tt=K.length;G<tt;G++){const J=K[G],gt=W[J.materialIndex];if(gt&&gt.visible){const St=A(D,gt,y,E);D.onBeforeShadow(i,D,S,T,C,St,J),i.renderBufferDirect(T,null,C,St,D,J),D.onAfterShadow(i,D,S,T,C,St,J)}}}else if(W.visible){const K=A(D,W,y,E);D.onBeforeShadow(i,D,S,T,C,K,null),i.renderBufferDirect(T,null,C,K,D,null),D.onAfterShadow(i,D,S,T,C,K,null)}}const L=D.children;for(let C=0,W=L.length;C<W;C++)R(L[C],S,T,y,E)}function F(D){D.target.removeEventListener("dispose",F);for(const T in c){const y=c[T],E=D.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function nP(i){function t(){let P=!1;const X=new Ye;let $=null;const Z=new Ye(0,0,0,0);return{setMask:function(lt){$!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){P=lt},setClear:function(lt,Lt,zt,Me,Ae){Ae===!0&&(lt*=Me,Lt*=Me,zt*=Me),X.set(lt,Lt,zt,Me),Z.equals(X)===!1&&(i.clearColor(lt,Lt,zt,Me),Z.copy(X))},reset:function(){P=!1,$=null,Z.set(-1,0,0,0)}}}function e(){let P=!1,X=null,$=null,Z=null;return{setTest:function(lt){lt?Ct(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(lt){X!==lt&&!P&&(i.depthMask(lt),X=lt)},setFunc:function(lt){if($!==lt){switch(lt){case gA:i.depthFunc(i.NEVER);break;case _A:i.depthFunc(i.ALWAYS);break;case vA:i.depthFunc(i.LESS);break;case Tc:i.depthFunc(i.LEQUAL);break;case yA:i.depthFunc(i.EQUAL);break;case xA:i.depthFunc(i.GEQUAL);break;case EA:i.depthFunc(i.GREATER);break;case SA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=lt}},setLocked:function(lt){P=lt},setClear:function(lt){Z!==lt&&(i.clearDepth(lt),Z=lt)},reset:function(){P=!1,X=null,$=null,Z=null}}}function n(){let P=!1,X=null,$=null,Z=null,lt=null,Lt=null,zt=null,Me=null,Ae=null;return{setTest:function(ie){P||(ie?Ct(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ie){X!==ie&&!P&&(i.stencilMask(ie),X=ie)},setFunc:function(ie,xe,Ce){($!==ie||Z!==xe||lt!==Ce)&&(i.stencilFunc(ie,xe,Ce),$=ie,Z=xe,lt=Ce)},setOp:function(ie,xe,Ce){(Lt!==ie||zt!==xe||Me!==Ce)&&(i.stencilOp(ie,xe,Ce),Lt=ie,zt=xe,Me=Ce)},setLocked:function(ie){P=ie},setClear:function(ie){Ae!==ie&&(i.clearStencil(ie),Ae=ie)},reset:function(){P=!1,X=null,$=null,Z=null,lt=null,Lt=null,zt=null,Me=null,Ae=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,x=!1,v=null,g=null,m=null,w=null,A=null,R=null,F=null,D=new re(0,0,0),S=0,T=!1,y=null,E=null,b=null,L=null,C=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=G>=2);let J=null,gt={};const St=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Nt=new Ye().fromArray(St),kt=new Ye().fromArray(xt);function et(P,X,$,Z){const lt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(P,Lt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<$;zt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(X+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Lt}const ot={};ot[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ct(i.DEPTH_TEST),s.setFunc(Tc),yt(!1),nt(Kp),Ct(i.CULL_FACE),dt(Sr);function Ct(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function _t(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Ht(P,X){return h[P]!==X?(i.bindFramebuffer(P,X),h[P]=X,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=X),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Kt(P,X){let $=d,Z=!1;if(P){$=f.get(X),$===void 0&&($=[],f.set(X,$));const lt=P.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,zt=lt.length;Lt<zt;Lt++)$[Lt]=i.COLOR_ATTACHMENT0+Lt;$.length=lt.length,Z=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Z=!0);Z&&i.drawBuffers($)}function Bt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Zt={[ns]:i.FUNC_ADD,[QM]:i.FUNC_SUBTRACT,[tA]:i.FUNC_REVERSE_SUBTRACT};Zt[eA]=i.MIN,Zt[nA]=i.MAX;const U={[iA]:i.ZERO,[rA]:i.ONE,[sA]:i.SRC_COLOR,[Sh]:i.SRC_ALPHA,[hA]:i.SRC_ALPHA_SATURATE,[cA]:i.DST_COLOR,[aA]:i.DST_ALPHA,[oA]:i.ONE_MINUS_SRC_COLOR,[Th]:i.ONE_MINUS_SRC_ALPHA,[uA]:i.ONE_MINUS_DST_COLOR,[lA]:i.ONE_MINUS_DST_ALPHA,[fA]:i.CONSTANT_COLOR,[dA]:i.ONE_MINUS_CONSTANT_COLOR,[pA]:i.CONSTANT_ALPHA,[mA]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(P,X,$,Z,lt,Lt,zt,Me,Ae,ie){if(P===Sr){x===!0&&(_t(i.BLEND),x=!1);return}if(x===!1&&(Ct(i.BLEND),x=!0),P!==ZM){if(P!==v||ie!==T){if((g!==ns||A!==ns)&&(i.blendEquation(i.FUNC_ADD),g=ns,A=ns),ie)switch(P){case So:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jp:i.blendFunc(i.ONE,i.ONE);break;case Zp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case So:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,w=null,R=null,F=null,D.set(0,0,0),S=0,v=P,T=ie}return}lt=lt||X,Lt=Lt||$,zt=zt||Z,(X!==g||lt!==A)&&(i.blendEquationSeparate(Zt[X],Zt[lt]),g=X,A=lt),($!==m||Z!==w||Lt!==R||zt!==F)&&(i.blendFuncSeparate(U[$],U[Z],U[Lt],U[zt]),m=$,w=Z,R=Lt,F=zt),(Me.equals(D)===!1||Ae!==S)&&(i.blendColor(Me.r,Me.g,Me.b,Ae),D.copy(Me),S=Ae),v=P,T=!1}function at(P,X){P.side===ji?_t(i.CULL_FACE):Ct(i.CULL_FACE);let $=P.side===On;X&&($=!$),yt($),P.blending===So&&P.transparent===!1?dt(Sr):dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function nt(P){P!==YM?(Ct(i.CULL_FACE),P!==E&&(P===Kp?i.cullFace(i.BACK):P===KM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),E=P}function Ft(P){P!==b&&(K&&i.lineWidth(P),b=P)}function Et(P,X,$){P?(Ct(i.POLYGON_OFFSET_FILL),(L!==X||C!==$)&&(i.polygonOffset(X,$),L=X,C=$)):_t(i.POLYGON_OFFSET_FILL)}function Rt(P){P?Ct(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function V(P){P===void 0&&(P=i.TEXTURE0+W-1),J!==P&&(i.activeTexture(P),J=P)}function I(P,X,$){$===void 0&&(J===null?$=i.TEXTURE0+W-1:$=J);let Z=gt[$];Z===void 0&&(Z={type:void 0,texture:void 0},gt[$]=Z),(Z.type!==P||Z.texture!==X)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(P,X||ot[P]),Z.type=P,Z.texture=X)}function q(){const P=gt[J];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(P){Nt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Nt.copy(P))}function Pt(P){kt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),kt.copy(P))}function Wt(P,X){let $=l.get(X);$===void 0&&($=new WeakMap,l.set(X,$));let Z=$.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(X,P.name),$.set(P,Z))}function Yt(P,X){const Z=l.get(X).get(P);a.get(X)!==Z&&(i.uniformBlockBinding(X,Z,P.__bindingPointIndex),a.set(X,Z))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},J=null,gt={},h={},f=new WeakMap,d=[],p=null,x=!1,v=null,g=null,m=null,w=null,A=null,R=null,F=null,D=new re(0,0,0),S=0,T=!1,y=null,E=null,b=null,L=null,C=null,Nt.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ct,disable:_t,bindFramebuffer:Ht,drawBuffers:Kt,useProgram:Bt,setBlending:dt,setMaterial:at,setFlipSided:yt,setCullFace:nt,setLineWidth:Ft,setPolygonOffset:Et,setScissorTest:Rt,activeTexture:V,bindTexture:I,unbindTexture:q,compressedTexImage2D:st,compressedTexImage3D:it,texImage2D:wt,texImage3D:Jt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:qt,texStorage3D:ht,texSubImage2D:rt,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:Tt,scissor:Gt,viewport:Pt,reset:me}}function $m(i,t,e,n){const r=iP(n);switch(e){case yv:return i*t;case Ev:return i*t;case Sv:return i*t*2;case Tv:return i*t/r.components*r.byteLength;case Kf:return i*t/r.components*r.byteLength;case Mv:return i*t*2/r.components*r.byteLength;case Jf:return i*t*2/r.components*r.byteLength;case xv:return i*t*3/r.components*r.byteLength;case gi:return i*t*4/r.components*r.byteLength;case Zf:return i*t*4/r.components*r.byteLength;case Zl:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ch:case Ih:return Math.max(i,16)*Math.max(t,8)/4;case Rh:case Ph:return Math.max(i,8)*Math.max(t,8)/2;case Dh:case Lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $h:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nc:case Yh:case Kh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Av:case Jh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zh:case Qh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function iP(i){switch(i){case er:case gv:return{byteLength:1,components:1};case Va:case _v:case il:return{byteLength:2,components:1};case jf:case Yf:return{byteLength:2,components:4};case ws:case qf:case Yi:return{byteLength:4,components:1};case vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rP(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(V,I){return p?new OffscreenCanvas(V,I):Ba("canvas")}function v(V,I,q){let st=1;const it=Rt(V);if((it.width>q||it.height>q)&&(st=q/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const rt=Math.floor(st*it.width),At=Math.floor(st*it.height);f===void 0&&(f=x(rt,At));const ut=I?x(rt,At):f;return ut.width=rt,ut.height=At,ut.getContext("2d").drawImage(V,0,0,rt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+rt+"x"+At+")."),ut}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),V;return V}function g(V){return V.generateMipmaps&&V.minFilter!==ii&&V.minFilter!==pi}function m(V){i.generateMipmap(V)}function w(V,I,q,st,it=!1){if(V!==null){if(i[V]!==void 0)return i[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let rt=I;if(I===i.RED&&(q===i.FLOAT&&(rt=i.R32F),q===i.HALF_FLOAT&&(rt=i.R16F),q===i.UNSIGNED_BYTE&&(rt=i.R8)),I===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.R8UI),q===i.UNSIGNED_SHORT&&(rt=i.R16UI),q===i.UNSIGNED_INT&&(rt=i.R32UI),q===i.BYTE&&(rt=i.R8I),q===i.SHORT&&(rt=i.R16I),q===i.INT&&(rt=i.R32I)),I===i.RG&&(q===i.FLOAT&&(rt=i.RG32F),q===i.HALF_FLOAT&&(rt=i.RG16F),q===i.UNSIGNED_BYTE&&(rt=i.RG8)),I===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),q===i.UNSIGNED_INT&&(rt=i.RG32UI),q===i.BYTE&&(rt=i.RG8I),q===i.SHORT&&(rt=i.RG16I),q===i.INT&&(rt=i.RG32I)),I===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),I===i.RGBA){const At=it?Mc:fe.getTransfer(st);q===i.FLOAT&&(rt=i.RGBA32F),q===i.HALF_FLOAT&&(rt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(rt=At===Se?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(V,I){let q;return V?I===null||I===ws||I===Uo?q=i.DEPTH24_STENCIL8:I===Yi?q=i.DEPTH32F_STENCIL8:I===Va&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ws||I===Uo?q=i.DEPTH_COMPONENT24:I===Yi?q=i.DEPTH_COMPONENT32F:I===Va&&(q=i.DEPTH_COMPONENT16),q}function R(V,I){return g(V)===!0||V.isFramebufferTexture&&V.minFilter!==ii&&V.minFilter!==pi?Math.log2(Math.max(I.width,I.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?I.mipmaps.length:1}function F(V){const I=V.target;I.removeEventListener("dispose",F),S(I),I.isVideoTexture&&h.delete(I)}function D(V){const I=V.target;I.removeEventListener("dispose",D),y(I)}function S(V){const I=n.get(V);if(I.__webglInit===void 0)return;const q=V.source,st=d.get(q);if(st){const it=st[I.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(V),Object.keys(st).length===0&&d.delete(q)}n.remove(V)}function T(V){const I=n.get(V);i.deleteTexture(I.__webglTexture);const q=V.source,st=d.get(q);delete st[I.__cacheKey],o.memory.textures--}function y(V){const I=n.get(V);if(V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(I.__webglFramebuffer[st]))for(let it=0;it<I.__webglFramebuffer[st].length;it++)i.deleteFramebuffer(I.__webglFramebuffer[st][it]);else i.deleteFramebuffer(I.__webglFramebuffer[st]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[st])}else{if(Array.isArray(I.__webglFramebuffer))for(let st=0;st<I.__webglFramebuffer.length;st++)i.deleteFramebuffer(I.__webglFramebuffer[st]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let st=0;st<I.__webglColorRenderbuffer.length;st++)I.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[st]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const q=V.textures;for(let st=0,it=q.length;st<it;st++){const rt=n.get(q[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(q[st])}n.remove(V)}let E=0;function b(){E=0}function L(){const V=E;return V>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),E+=1,V}function C(V){const I=[];return I.push(V.wrapS),I.push(V.wrapT),I.push(V.wrapR||0),I.push(V.magFilter),I.push(V.minFilter),I.push(V.anisotropy),I.push(V.internalFormat),I.push(V.format),I.push(V.type),I.push(V.generateMipmaps),I.push(V.premultiplyAlpha),I.push(V.flipY),I.push(V.unpackAlignment),I.push(V.colorSpace),I.join()}function W(V,I){const q=n.get(V);if(V.isVideoTexture&&Ft(V),V.isRenderTargetTexture===!1&&V.version>0&&q.__version!==V.version){const st=V.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(q,V,I);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+I)}function K(V,I){const q=n.get(V);if(V.version>0&&q.__version!==V.version){kt(q,V,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+I)}function G(V,I){const q=n.get(V);if(V.version>0&&q.__version!==V.version){kt(q,V,I);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+I)}function tt(V,I){const q=n.get(V);if(V.version>0&&q.__version!==V.version){et(q,V,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+I)}const J={[wh]:i.REPEAT,[as]:i.CLAMP_TO_EDGE,[bh]:i.MIRRORED_REPEAT},gt={[ii]:i.NEAREST,[DA]:i.NEAREST_MIPMAP_NEAREST,[Sl]:i.NEAREST_MIPMAP_LINEAR,[pi]:i.LINEAR,[_u]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},St={[UA]:i.NEVER,[HA]:i.ALWAYS,[FA]:i.LESS,[wv]:i.LEQUAL,[VA]:i.EQUAL,[zA]:i.GEQUAL,[kA]:i.GREATER,[BA]:i.NOTEQUAL};function xt(V,I){if(I.type===Yi&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===pi||I.magFilter===_u||I.magFilter===Sl||I.magFilter===ls||I.minFilter===pi||I.minFilter===_u||I.minFilter===Sl||I.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,J[I.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,J[I.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,J[I.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,gt[I.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,gt[I.minFilter]),I.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,St[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ii||I.minFilter!==Sl&&I.minFilter!==ls||I.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Nt(V,I){let q=!1;V.__webglInit===void 0&&(V.__webglInit=!0,I.addEventListener("dispose",F));const st=I.source;let it=d.get(st);it===void 0&&(it={},d.set(st,it));const rt=C(I);if(rt!==V.__cacheKey){it[rt]===void 0&&(it[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[rt].usedTimes++;const At=it[V.__cacheKey];At!==void 0&&(it[V.__cacheKey].usedTimes--,At.usedTimes===0&&T(I)),V.__cacheKey=rt,V.__webglTexture=it[rt].texture}return q}function kt(V,I,q){let st=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(st=i.TEXTURE_3D);const it=Nt(V,I),rt=I.source;e.bindTexture(st,V.__webglTexture,i.TEXTURE0+q);const At=n.get(rt);if(rt.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const ut=fe.getPrimaries(fe.workingColorSpace),Tt=I.colorSpace===pr?null:fe.getPrimaries(I.colorSpace),qt=I.colorSpace===pr||ut===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let ht=v(I.image,!1,r.maxTextureSize);ht=Et(I,ht);const wt=s.convert(I.format,I.colorSpace),Jt=s.convert(I.type);let Gt=w(I.internalFormat,wt,Jt,I.colorSpace,I.isVideoTexture);xt(st,I);let Pt;const Wt=I.mipmaps,Yt=I.isVideoTexture!==!0,me=At.__version===void 0||it===!0,P=rt.dataReady,X=R(I,ht);if(I.isDepthTexture)Gt=A(I.format===Fo,I.type),me&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ht.width,ht.height,0,wt,Jt,null));else if(I.isDataTexture)if(Wt.length>0){Yt&&me&&e.texStorage2D(i.TEXTURE_2D,X,Gt,Wt[0].width,Wt[0].height);for(let $=0,Z=Wt.length;$<Z;$++)Pt=Wt[$],Yt?P&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Jt,Pt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,Pt.width,Pt.height,0,wt,Jt,Pt.data);I.generateMipmaps=!1}else Yt?(me&&e.texStorage2D(i.TEXTURE_2D,X,Gt,ht.width,ht.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,wt,Jt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ht.width,ht.height,0,wt,Jt,ht.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Yt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,X,Gt,Wt[0].width,Wt[0].height,ht.depth);for(let $=0,Z=Wt.length;$<Z;$++)if(Pt=Wt[$],I.format!==gi)if(wt!==null)if(Yt){if(P)if(I.layerUpdates.size>0){const lt=$m(Pt.width,Pt.height,I.format,I.type);for(const Lt of I.layerUpdates){const zt=Pt.data.subarray(Lt*lt/Pt.data.BYTES_PER_ELEMENT,(Lt+1)*lt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Lt,Pt.width,Pt.height,1,wt,zt,0,0)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Pt.width,Pt.height,ht.depth,wt,Pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Gt,Pt.width,Pt.height,ht.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Pt.width,Pt.height,ht.depth,wt,Jt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Gt,Pt.width,Pt.height,ht.depth,0,wt,Jt,Pt.data)}else{Yt&&me&&e.texStorage2D(i.TEXTURE_2D,X,Gt,Wt[0].width,Wt[0].height);for(let $=0,Z=Wt.length;$<Z;$++)Pt=Wt[$],I.format!==gi?wt!==null?Yt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Gt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?P&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Jt,Pt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,Pt.width,Pt.height,0,wt,Jt,Pt.data)}else if(I.isDataArrayTexture)if(Yt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,X,Gt,ht.width,ht.height,ht.depth),P)if(I.layerUpdates.size>0){const $=$m(ht.width,ht.height,I.format,I.type);for(const Z of I.layerUpdates){const lt=ht.data.subarray(Z*$/ht.data.BYTES_PER_ELEMENT,(Z+1)*$/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ht.width,ht.height,1,wt,Jt,lt)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Jt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ht.width,ht.height,ht.depth,0,wt,Jt,ht.data);else if(I.isData3DTexture)Yt?(me&&e.texStorage3D(i.TEXTURE_3D,X,Gt,ht.width,ht.height,ht.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Jt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ht.width,ht.height,ht.depth,0,wt,Jt,ht.data);else if(I.isFramebufferTexture){if(me)if(Yt)e.texStorage2D(i.TEXTURE_2D,X,Gt,ht.width,ht.height);else{let $=ht.width,Z=ht.height;for(let lt=0;lt<X;lt++)e.texImage2D(i.TEXTURE_2D,lt,Gt,$,Z,0,wt,Jt,null),$>>=1,Z>>=1}}else if(Wt.length>0){if(Yt&&me){const $=Rt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,X,Gt,$.width,$.height)}for(let $=0,Z=Wt.length;$<Z;$++)Pt=Wt[$],Yt?P&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Jt,Pt):e.texImage2D(i.TEXTURE_2D,$,Gt,wt,Jt,Pt);I.generateMipmaps=!1}else if(Yt){if(me){const $=Rt(ht);e.texStorage2D(i.TEXTURE_2D,X,Gt,$.width,$.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Jt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,Jt,ht);g(I)&&m(st),At.__version=rt.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function et(V,I,q){if(I.image.length!==6)return;const st=Nt(V,I),it=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+q);const rt=n.get(it);if(it.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);const At=fe.getPrimaries(fe.workingColorSpace),ut=I.colorSpace===pr?null:fe.getPrimaries(I.colorSpace),Tt=I.colorSpace===pr||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const qt=I.isCompressedTexture||I.image[0].isCompressedTexture,ht=I.image[0]&&I.image[0].isDataTexture,wt=[];for(let Z=0;Z<6;Z++)!qt&&!ht?wt[Z]=v(I.image[Z],!0,r.maxCubemapSize):wt[Z]=ht?I.image[Z].image:I.image[Z],wt[Z]=Et(I,wt[Z]);const Jt=wt[0],Gt=s.convert(I.format,I.colorSpace),Pt=s.convert(I.type),Wt=w(I.internalFormat,Gt,Pt,I.colorSpace),Yt=I.isVideoTexture!==!0,me=rt.__version===void 0||st===!0,P=it.dataReady;let X=R(I,Jt);xt(i.TEXTURE_CUBE_MAP,I);let $;if(qt){Yt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Wt,Jt.width,Jt.height);for(let Z=0;Z<6;Z++){$=wt[Z].mipmaps;for(let lt=0;lt<$.length;lt++){const Lt=$[lt];I.format!==gi?Gt!==null?Yt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Lt.width,Lt.height,Gt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Lt.width,Lt.height,Gt,Pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,Lt.width,Lt.height,0,Gt,Pt,Lt.data)}}}else{if($=I.mipmaps,Yt&&me){$.length>0&&X++;const Z=Rt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ht){Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt[Z].width,wt[Z].height,Gt,Pt,wt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,wt[Z].width,wt[Z].height,0,Gt,Pt,wt[Z].data);for(let lt=0;lt<$.length;lt++){const zt=$[lt].image[Z].image;Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,zt.width,zt.height,Gt,Pt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,zt.width,zt.height,0,Gt,Pt,zt.data)}}else{Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Gt,Pt,wt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Gt,Pt,wt[Z]);for(let lt=0;lt<$.length;lt++){const Lt=$[lt];Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Gt,Pt,Lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,Gt,Pt,Lt.image[Z])}}}g(I)&&m(i.TEXTURE_CUBE_MAP),rt.__version=it.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function ot(V,I,q,st,it,rt){const At=s.convert(q.format,q.colorSpace),ut=s.convert(q.type),Tt=w(q.internalFormat,At,ut,q.colorSpace);if(!n.get(I).__hasExternalTextures){const ht=Math.max(1,I.width>>rt),wt=Math.max(1,I.height>>rt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,Tt,ht,wt,I.depth,0,At,ut,null):e.texImage2D(it,rt,Tt,ht,wt,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,it,n.get(q).__webglTexture,0,yt(I)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,it,n.get(q).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(V,I,q){if(i.bindRenderbuffer(i.RENDERBUFFER,V),I.depthBuffer){const st=I.depthTexture,it=st&&st.isDepthTexture?st.type:null,rt=A(I.stencilBuffer,it),At=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=yt(I);nt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,rt,I.width,I.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,rt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,V)}else{const st=I.textures;for(let it=0;it<st.length;it++){const rt=st[it],At=s.convert(rt.format,rt.colorSpace),ut=s.convert(rt.type),Tt=w(rt.internalFormat,At,ut,rt.colorSpace),qt=yt(I);q&&nt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Tt,I.width,I.height):nt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,Tt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(V,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),W(I.depthTexture,0);const st=n.get(I.depthTexture).__webglTexture,it=yt(I);if(I.depthTexture.format===To)nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(I.depthTexture.format===Fo)nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ht(V){const I=n.get(V),q=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture&&!I.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_t(I.__webglFramebuffer,V)}else if(q){I.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[st]),I.__webglDepthbuffer[st]=i.createRenderbuffer(),Ct(I.__webglDepthbuffer[st],V,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=i.createRenderbuffer(),Ct(I.__webglDepthbuffer,V,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(V,I,q){const st=n.get(V);I!==void 0&&ot(st.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ht(V)}function Bt(V){const I=V.texture,q=n.get(V),st=n.get(I);V.addEventListener("dispose",D);const it=V.textures,rt=V.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=I.version,o.memory.textures++),rt){q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0){q.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<I.mipmaps.length;Tt++)q.__webglFramebuffer[ut][Tt]=i.createFramebuffer()}else q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){q.__webglFramebuffer=[];for(let ut=0;ut<I.mipmaps.length;ut++)q.__webglFramebuffer[ut]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,Tt=it.length;ut<Tt;ut++){const qt=n.get(it[ut]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(V.samples>0&&nt(V)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const Tt=it[ut];q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ut]);const qt=s.convert(Tt.format,Tt.colorSpace),ht=s.convert(Tt.type),wt=w(Tt.internalFormat,qt,ht,Tt.colorSpace,V.isXRRenderTarget===!0),Jt=yt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,wt,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(q.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),xt(i.TEXTURE_CUBE_MAP,I);for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)ot(q.__webglFramebuffer[ut][Tt],V,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else ot(q.__webglFramebuffer[ut],V,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(I)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,Tt=it.length;ut<Tt;ut++){const qt=it[ut],ht=n.get(qt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),xt(i.TEXTURE_2D,qt),ot(q.__webglFramebuffer,V,qt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),g(qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ut=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),xt(ut,I),I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)ot(q.__webglFramebuffer[Tt],V,I,i.COLOR_ATTACHMENT0,ut,Tt);else ot(q.__webglFramebuffer,V,I,i.COLOR_ATTACHMENT0,ut,0);g(I)&&m(ut),e.unbindTexture()}V.depthBuffer&&Ht(V)}function Zt(V){const I=V.textures;for(let q=0,st=I.length;q<st;q++){const it=I[q];if(g(it)){const rt=V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(it).__webglTexture;e.bindTexture(rt,At),m(rt),e.unbindTexture()}}}const U=[],dt=[];function at(V){if(V.samples>0){if(nt(V)===!1){const I=V.textures,q=V.width,st=V.height;let it=i.COLOR_BUFFER_BIT;const rt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(V),ut=I.length>1;if(ut)for(let Tt=0;Tt<I.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<I.length;Tt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const qt=n.get(I[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,it,i.NEAREST),l===!0&&(U.length=0,dt.length=0,U.push(i.COLOR_ATTACHMENT0+Tt),V.depthBuffer&&V.resolveDepthBuffer===!1&&(U.push(rt),dt.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<I.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const qt=n.get(I[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&l){const I=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function yt(V){return Math.min(r.maxSamples,V.samples)}function nt(V){const I=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Ft(V){const I=o.render.frame;h.get(V)!==I&&(h.set(V,I),V.update())}function Et(V,I){const q=V.colorSpace,st=V.format,it=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||q!==Fr&&q!==pr&&(fe.getTransfer(q)===Se?(st!==gi||it!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),I}function Rt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Kt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=nt}function sP(i,t){function e(n,r=pr){let s;const o=fe.getTransfer(r);if(n===er)return i.UNSIGNED_BYTE;if(n===jf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gv)return i.BYTE;if(n===_v)return i.SHORT;if(n===Va)return i.UNSIGNED_SHORT;if(n===qf)return i.INT;if(n===ws)return i.UNSIGNED_INT;if(n===Yi)return i.FLOAT;if(n===il)return i.HALF_FLOAT;if(n===yv)return i.ALPHA;if(n===xv)return i.RGB;if(n===gi)return i.RGBA;if(n===Ev)return i.LUMINANCE;if(n===Sv)return i.LUMINANCE_ALPHA;if(n===To)return i.DEPTH_COMPONENT;if(n===Fo)return i.DEPTH_STENCIL;if(n===Tv)return i.RED;if(n===Kf)return i.RED_INTEGER;if(n===Mv)return i.RG;if(n===Jf)return i.RG_INTEGER;if(n===Zf)return i.RGBA_INTEGER;if(n===Zl||n===Ql||n===tc||n===ec)if(o===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rh||n===Ch||n===Ph||n===Ih)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh||n===Lh||n===Nh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dh||n===Lh)return o===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oh||n===Uh||n===Fh||n===Vh||n===kh||n===Bh||n===zh||n===Hh||n===Gh||n===Wh||n===Xh||n===$h||n===qh||n===jh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$h)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===Yh||n===Kh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===nc)return o===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Av||n===Jh||n===Zh||n===Qh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Uo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class oP extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ji extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aP={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cP=`
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

}`;class uP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new In,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Lr({vertexShader:lP,fragmentShader:cP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hP extends Us{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,x=null;const v=new uP,g=e.getContextAttributes();let m=null,w=null;const A=[],R=[],F=new ft;let D=null;const S=new ni;S.layers.enable(1),S.viewport=new Ye;const T=new ni;T.layers.enable(2),T.viewport=new Ye;const y=[S,T],E=new oP;E.layers.enable(1),E.layers.enable(2);let b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=A[et];return ot===void 0&&(ot=new Hu,A[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=A[et];return ot===void 0&&(ot=new Hu,A[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=A[et];return ot===void 0&&(ot=new Hu,A[et]=ot),ot.getHandSpace()};function C(et){const ot=R.indexOf(et.inputSource);if(ot===-1)return;const Ct=A[ot];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,c||o),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function W(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let et=0;et<A.length;et++){const ot=R[et];ot!==null&&(R[et]=null,A[et].disconnect(ot))}b=null,L=null,v.reset(),t.setRenderTarget(m),p=null,d=null,f=null,r=null,w=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new bs(p.framebufferWidth,p.framebufferHeight,{format:gi,type:er,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,Ct=null,_t=null;g.depth&&(_t=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Fo:To,Ct=g.stencil?Uo:ws);const Ht={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Ht),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new bs(d.textureWidth,d.textureHeight,{format:gi,type:er,depthTexture:new kv(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),kt.setContext(r),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(et){for(let ot=0;ot<et.removed.length;ot++){const Ct=et.removed[ot],_t=R.indexOf(Ct);_t>=0&&(R[_t]=null,A[_t].disconnect(Ct))}for(let ot=0;ot<et.added.length;ot++){const Ct=et.added[ot];let _t=R.indexOf(Ct);if(_t===-1){for(let Kt=0;Kt<A.length;Kt++)if(Kt>=R.length){R.push(Ct),_t=Kt;break}else if(R[Kt]===null){R[Kt]=Ct,_t=Kt;break}if(_t===-1)break}const Ht=A[_t];Ht&&Ht.connect(Ct)}}const G=new k,tt=new k;function J(et,ot,Ct){G.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(Ct.matrixWorld);const _t=G.distanceTo(tt),Ht=ot.projectionMatrix.elements,Kt=Ct.projectionMatrix.elements,Bt=Ht[14]/(Ht[10]-1),Zt=Ht[14]/(Ht[10]+1),U=(Ht[9]+1)/Ht[5],dt=(Ht[9]-1)/Ht[5],at=(Ht[8]-1)/Ht[0],yt=(Kt[8]+1)/Kt[0],nt=Bt*at,Ft=Bt*yt,Et=_t/(-at+yt),Rt=Et*-at;ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Rt),et.translateZ(Et),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const V=Bt+Et,I=Zt+Et,q=nt-Rt,st=Ft+(_t-Rt),it=U*Zt/I*V,rt=dt*Zt/I*V;et.projectionMatrix.makePerspective(q,st,it,rt,V,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function gt(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;v.texture!==null&&(et.near=v.depthNear,et.far=v.depthFar),E.near=T.near=S.near=et.near,E.far=T.far=S.far=et.far,(b!==E.near||L!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,L=E.far,S.near=b,S.far=L,T.near=b,T.far=L,S.updateProjectionMatrix(),T.updateProjectionMatrix(),et.updateProjectionMatrix());const ot=et.parent,Ct=E.cameras;gt(E,ot);for(let _t=0;_t<Ct.length;_t++)gt(Ct[_t],ot);Ct.length===2?J(E,S,T):E.projectionMatrix.copy(S.projectionMatrix),St(et,E,ot)};function St(et,ot,Ct){Ct===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ka*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let xt=null;function Nt(et,ot){if(h=ot.getViewerPose(c||o),x=ot,h!==null){const Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let _t=!1;Ct.length!==E.cameras.length&&(E.cameras.length=0,_t=!0);for(let Kt=0;Kt<Ct.length;Kt++){const Bt=Ct[Kt];let Zt=null;if(p!==null)Zt=p.getViewport(Bt);else{const dt=f.getViewSubImage(d,Bt);Zt=dt.viewport,Kt===0&&(t.setRenderTargetTextures(w,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(w))}let U=y[Kt];U===void 0&&(U=new ni,U.layers.enable(Kt),U.viewport=new Ye,y[Kt]=U),U.matrix.fromArray(Bt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Bt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Kt===0&&(E.matrix.copy(U.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_t===!0&&E.cameras.push(U)}const Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Kt=f.getDepthInformation(Ct[0]);Kt&&Kt.isValid&&Kt.texture&&v.init(t,Kt,r.renderState)}}for(let Ct=0;Ct<A.length;Ct++){const _t=R[Ct],Ht=A[Ct];_t!==null&&Ht!==void 0&&Ht.update(_t,ot,c||o)}xt&&xt(et,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}const kt=new Fv;kt.setAnimationLoop(Nt),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}}const jr=new vi,fP=new Ue;function dP(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Nv(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,w,A,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,R)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,A):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===On&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===On&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=t.get(m),A=w.envMap,R=w.envMapRotation;A&&(g.envMap.value=A,jr.copy(R),jr.x*=-1,jr.y*=-1,jr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.envMapRotation.value.setFromMatrix4(fP.makeRotationFromEuler(jr)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=A*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pP(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const R=A.program;n.uniformBlockBinding(w,R)}function c(w,A){let R=r[w.id];R===void 0&&(x(w),R=h(w),r[w.id]=R,w.addEventListener("dispose",g));const F=A.program;n.updateUBOMapping(w,F);const D=t.render.frame;s[w.id]!==D&&(d(w),s[w.id]=D)}function h(w){const A=f();w.__bindingPointIndex=A;const R=i.createBuffer(),F=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,R),R}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const A=r[w.id],R=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let D=0,S=R.length;D<S;D++){const T=Array.isArray(R[D])?R[D]:[R[D]];for(let y=0,E=T.length;y<E;y++){const b=T[y];if(p(b,D,y,F)===!0){const L=b.__offset,C=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let K=0;K<C.length;K++){const G=C[K],tt=v(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,L+W,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,A,R,F){const D=w.value,S=A+"_"+R;if(F[S]===void 0)return typeof D=="number"||typeof D=="boolean"?F[S]=D:F[S]=D.clone(),!0;{const T=F[S];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return F[S]=D,!0}else if(T.equals(D)===!1)return T.copy(D),!0}return!1}function x(w){const A=w.uniforms;let R=0;const F=16;for(let S=0,T=A.length;S<T;S++){const y=Array.isArray(A[S])?A[S]:[A[S]];for(let E=0,b=y.length;E<b;E++){const L=y[E],C=Array.isArray(L.value)?L.value:[L.value];for(let W=0,K=C.length;W<K;W++){const G=C[W],tt=v(G),J=R%F;J!==0&&F-J<tt.boundary&&(R+=F-J),L.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=R,R+=tt.storage}}}const D=R%F;return D>0&&(R+=F-D),w.__size=R,w.__cache={},this}function v(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function g(w){const A=w.target;A.removeEventListener("dispose",g);const R=o.indexOf(A.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class mP{constructor(t={}){const{canvas:e=ow(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),x=new Int32Array(4);let v=null,g=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Tr,this.toneMappingExposure=1;const A=this;let R=!1,F=0,D=0,S=null,T=-1,y=null;const E=new Ye,b=new Ye;let L=null;const C=new re(0);let W=0,K=e.width,G=e.height,tt=1,J=null,gt=null;const St=new Ye(0,0,K,G),xt=new Ye(0,0,K,G);let Nt=!1;const kt=new sd;let et=!1,ot=!1;const Ct=new Ue,_t=new k,Ht=new Ye,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Zt(){return S===null?tt:1}let U=n;function dt(N,B){return e.getContext(N,B)}try{const N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xf}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){const B="webgl2";if(U=dt(B,N),U===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let at,yt,nt,Ft,Et,Rt,V,I,q,st,it,rt,At,ut,Tt,qt,ht,wt,Jt,Gt,Pt,Wt,Yt,me;function P(){at=new SR(U),at.init(),Wt=new sP(U,at),yt=new gR(U,at,t,Wt),nt=new nP(U),Ft=new AR(U),Et=new HC,Rt=new rP(U,at,nt,Et,yt,Wt,Ft),V=new vR(A),I=new ER(A),q=new Dw(U),Yt=new pR(U,q),st=new TR(U,q,Ft,Yt),it=new bR(U,st,q,Ft),Jt=new wR(U,yt,Rt),qt=new _R(Et),rt=new zC(A,V,I,at,yt,Yt,qt),At=new dP(A,Et),ut=new WC,Tt=new KC(at),wt=new dR(A,V,I,nt,it,d,l),ht=new eP(A,it,yt),me=new pP(U,Ft,yt,nt),Gt=new mR(U,at,Ft),Pt=new MR(U,at,Ft),Ft.programs=rt.programs,A.capabilities=yt,A.extensions=at,A.properties=Et,A.renderLists=ut,A.shadowMap=ht,A.state=nt,A.info=Ft}P();const X=new hP(A,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=at.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=at.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(N){N!==void 0&&(tt=N,this.setSize(K,G,!1))},this.getSize=function(N){return N.set(K,G)},this.setSize=function(N,B,j=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,G=B,e.width=Math.floor(N*tt),e.height=Math.floor(B*tt),j===!0&&(e.style.width=N+"px",e.style.height=B+"px"),this.setViewport(0,0,N,B)},this.getDrawingBufferSize=function(N){return N.set(K*tt,G*tt).floor()},this.setDrawingBufferSize=function(N,B,j){K=N,G=B,tt=j,e.width=Math.floor(N*j),e.height=Math.floor(B*j),this.setViewport(0,0,N,B)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(St)},this.setViewport=function(N,B,j,Y){N.isVector4?St.set(N.x,N.y,N.z,N.w):St.set(N,B,j,Y),nt.viewport(E.copy(St).multiplyScalar(tt).round())},this.getScissor=function(N){return N.copy(xt)},this.setScissor=function(N,B,j,Y){N.isVector4?xt.set(N.x,N.y,N.z,N.w):xt.set(N,B,j,Y),nt.scissor(b.copy(xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(N){nt.setScissorTest(Nt=N)},this.setOpaqueSort=function(N){J=N},this.setTransparentSort=function(N){gt=N},this.getClearColor=function(N){return N.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(N=!0,B=!0,j=!0){let Y=0;if(N){let z=!1;if(S!==null){const mt=S.texture.format;z=mt===Zf||mt===Jf||mt===Kf}if(z){const mt=S.texture.type,bt=mt===er||mt===ws||mt===Va||mt===Uo||mt===jf||mt===Yf,Dt=wt.getClearColor(),It=wt.getClearAlpha(),Xt=Dt.r,$t=Dt.g,Ut=Dt.b;bt?(p[0]=Xt,p[1]=$t,p[2]=Ut,p[3]=It,U.clearBufferuiv(U.COLOR,0,p)):(x[0]=Xt,x[1]=$t,x[2]=Ut,x[3]=It,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT),j&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Tt.dispose(),Et.dispose(),V.dispose(),I.dispose(),it.dispose(),Yt.dispose(),me.dispose(),rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ce),X.removeEventListener("sessionend",we),Ge.stop()};function $(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const N=Ft.autoReset,B=ht.enabled,j=ht.autoUpdate,Y=ht.needsUpdate,z=ht.type;P(),Ft.autoReset=N,ht.enabled=B,ht.autoUpdate=j,ht.needsUpdate=Y,ht.type=z}function lt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Lt(N){const B=N.target;B.removeEventListener("dispose",Lt),zt(B)}function zt(N){Me(N),Et.remove(N)}function Me(N){const B=Et.get(N).programs;B!==void 0&&(B.forEach(function(j){rt.releaseProgram(j)}),N.isShaderMaterial&&rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,B,j,Y,z,mt){B===null&&(B=Kt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Dt=ll(N,B,j,Y,z);nt.setMaterial(Y,bt);let It=j.index,Xt=1;if(Y.wireframe===!0){if(It=st.getWireframeAttribute(j),It===void 0)return;Xt=2}const $t=j.drawRange,Ut=j.attributes.position;let ne=$t.start*Xt,ge=($t.start+$t.count)*Xt;mt!==null&&(ne=Math.max(ne,mt.start*Xt),ge=Math.min(ge,(mt.start+mt.count)*Xt)),It!==null?(ne=Math.max(ne,0),ge=Math.min(ge,It.count)):Ut!=null&&(ne=Math.max(ne,0),ge=Math.min(ge,Ut.count));const be=ge-ne;if(be<0||be===1/0)return;Yt.setup(z,Y,Dt,j,It);let dn,ce=Gt;if(It!==null&&(dn=q.get(It),ce=Pt,ce.setIndex(dn)),z.isMesh)Y.wireframe===!0?(nt.setLineWidth(Y.wireframeLinewidth*Zt()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(z.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),nt.setLineWidth(Ot*Zt()),z.isLineSegments?ce.setMode(U.LINES):z.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else z.isPoints?ce.setMode(U.POINTS):z.isSprite&&ce.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ce.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,ze=z._multiDrawCounts,ae=z._multiDrawCount,Dn=It?q.get(It).bytesPerElement:1,Fi=Et.get(Y).currentProgram.getUniforms();for(let bn=0;bn<ae;bn++)Fi.setValue(U,"_gl_DrawID",bn),ce.render(Ot[bn]/Dn,ze[bn])}else if(z.isInstancedMesh)ce.renderInstances(ne,be,z.count);else if(j.isInstancedBufferGeometry){const Ot=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ze=Math.min(j.instanceCount,Ot);ce.renderInstances(ne,be,ze)}else ce.render(ne,be)};function Ae(N,B,j){N.transparent===!0&&N.side===ji&&N.forceSinglePass===!1?(N.side=On,N.needsUpdate=!0,Bs(N,B,j),N.side=Dr,N.needsUpdate=!0,Bs(N,B,j),N.side=ji):Bs(N,B,j)}this.compile=function(N,B,j=null){j===null&&(j=N),g=Tt.get(j),g.init(B),w.push(g),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),N!==j&&N.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const Y=new Set;return N.traverse(function(z){const mt=z.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const Dt=mt[bt];Ae(Dt,j,z),Y.add(Dt)}else Ae(mt,j,z),Y.add(mt)}),w.pop(),g=null,Y},this.compileAsync=function(N,B,j=null){const Y=this.compile(N,B,j);return new Promise(z=>{function mt(){if(Y.forEach(function(bt){Et.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){z(N);return}setTimeout(mt,10)}at.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ie=null;function xe(N){ie&&ie(N)}function Ce(){Ge.stop()}function we(){Ge.start()}const Ge=new Fv;Ge.setAnimationLoop(xe),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(N){ie=N,X.setAnimationLoop(N),N===null?Ge.stop():Ge.start()},X.addEventListener("sessionstart",Ce),X.addEventListener("sessionend",we),this.render=function(N,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,B,S),g=Tt.get(N,w.length),g.init(B),w.push(g),Ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),kt.setFromProjectionMatrix(Ct),ot=this.localClippingEnabled,et=qt.init(this.clippingPlanes,ot),v=ut.get(N,m.length),v.init(),m.push(v),X.enabled===!0&&X.isPresenting===!0){const mt=A.xr.getDepthSensingMesh();mt!==null&&wn(mt,B,-1/0,A.sortObjects)}wn(N,B,0,A.sortObjects),v.finish(),A.sortObjects===!0&&v.sort(J,gt),Bt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Bt&&wt.addToRenderList(v,N),this.info.render.frame++,et===!0&&qt.beginShadows();const j=g.state.shadowsArray;ht.render(j,N,B),et===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,z=v.transmissive;if(g.setupLights(),B.isArrayCamera){const mt=B.cameras;if(z.length>0)for(let bt=0,Dt=mt.length;bt<Dt;bt++){const It=mt[bt];kr(Y,z,N,It)}Bt&&wt.render(N);for(let bt=0,Dt=mt.length;bt<Dt;bt++){const It=mt[bt];Hn(v,N,It,It.viewport)}}else z.length>0&&kr(Y,z,N,B),Bt&&wt.render(N),Hn(v,N,B);S!==null&&(Rt.updateMultisampleRenderTarget(S),Rt.updateRenderTargetMipmap(S)),N.isScene===!0&&N.onAfterRender(A,N,B),Yt.resetDefaultState(),T=-1,y=null,w.pop(),w.length>0?(g=w[w.length-1],et===!0&&qt.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function wn(N,B,j,Y){if(N.visible===!1)return;if(N.layers.test(B.layers)){if(N.isGroup)j=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(B);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||kt.intersectsSprite(N)){Y&&Ht.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ct);const bt=it.update(N),Dt=N.material;Dt.visible&&v.push(N,bt,Dt,j,Ht.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||kt.intersectsObject(N))){const bt=it.update(N),Dt=N.material;if(Y&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ht.copy(N.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ht.copy(bt.boundingSphere.center)),Ht.applyMatrix4(N.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const It=bt.groups;for(let Xt=0,$t=It.length;Xt<$t;Xt++){const Ut=It[Xt],ne=Dt[Ut.materialIndex];ne&&ne.visible&&v.push(N,bt,ne,j,Ht.z,Ut)}}else Dt.visible&&v.push(N,bt,Dt,j,Ht.z,null)}}const mt=N.children;for(let bt=0,Dt=mt.length;bt<Dt;bt++)wn(mt[bt],B,j,Y)}function Hn(N,B,j,Y){const z=N.opaque,mt=N.transmissive,bt=N.transparent;g.setupLightsView(j),et===!0&&qt.setGlobalState(A.clippingPlanes,j),Y&&nt.viewport(E.copy(Y)),z.length>0&&ks(z,B,j),mt.length>0&&ks(mt,B,j),bt.length>0&&ks(bt,B,j),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function kr(N,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new bs(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?il:er,minFilter:ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const mt=g.state.transmissionRenderTarget[Y.id],bt=Y.viewport||E;mt.setSize(bt.z,bt.w);const Dt=A.getRenderTarget();A.setRenderTarget(mt),A.getClearColor(C),W=A.getClearAlpha(),W<1&&A.setClearColor(16777215,.5),Bt?wt.render(j):A.clear();const It=A.toneMapping;A.toneMapping=Tr;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),et===!0&&qt.setGlobalState(A.clippingPlanes,Y),ks(N,j,Y),Rt.updateMultisampleRenderTarget(mt),Rt.updateRenderTargetMipmap(mt),at.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,ne=B.length;Ut<ne;Ut++){const ge=B[Ut],be=ge.object,dn=ge.geometry,ce=ge.material,Ot=ge.group;if(ce.side===ji&&be.layers.test(Y.layers)){const ze=ce.side;ce.side=On,ce.needsUpdate=!0,Ui(be,j,Y,dn,ce,Ot),ce.side=ze,ce.needsUpdate=!0,$t=!0}}$t===!0&&(Rt.updateMultisampleRenderTarget(mt),Rt.updateRenderTargetMipmap(mt))}A.setRenderTarget(Dt),A.setClearColor(C,W),Xt!==void 0&&(Y.viewport=Xt),A.toneMapping=It}function ks(N,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,mt=N.length;z<mt;z++){const bt=N[z],Dt=bt.object,It=bt.geometry,Xt=Y===null?bt.material:Y,$t=bt.group;Dt.layers.test(j.layers)&&Ui(Dt,B,j,It,Xt,$t)}}function Ui(N,B,j,Y,z,mt){N.onBeforeRender(A,B,j,Y,z,mt),N.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),z.transparent===!0&&z.side===ji&&z.forceSinglePass===!1?(z.side=On,z.needsUpdate=!0,A.renderBufferDirect(j,B,Y,z,N,mt),z.side=Dr,z.needsUpdate=!0,A.renderBufferDirect(j,B,Y,z,N,mt),z.side=ji):A.renderBufferDirect(j,B,Y,z,N,mt),N.onAfterRender(A,B,j,Y,z,mt)}function Bs(N,B,j){B.isScene!==!0&&(B=Kt);const Y=Et.get(N),z=g.state.lights,mt=g.state.shadowsArray,bt=z.state.version,Dt=rt.getParameters(N,z.state,mt,B,j),It=rt.getProgramCacheKey(Dt);let Xt=Y.programs;Y.environment=N.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(N.isMeshStandardMaterial?I:V).get(N.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&N.envMap===null?B.environmentRotation:N.envMapRotation,Xt===void 0&&(N.addEventListener("dispose",Lt),Xt=new Map,Y.programs=Xt);let $t=Xt.get(It);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===bt)return Br(N,Dt),$t}else Dt.uniforms=rt.getUniforms(N),N.onBeforeCompile(Dt,A),$t=rt.acquireProgram(Dt,It),Xt.set(It,$t),Y.uniforms=Dt.uniforms;const Ut=Y.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ut.clippingPlanes=qt.uniform),Br(N,Dt),Y.needsLights=zs(N),Y.lightsStateVersion=bt,Y.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function al(N){if(N.uniformsList===null){const B=N.currentProgram.getUniforms();N.uniformsList=ic.seqWithValue(B.seq,N.uniforms)}return N.uniformsList}function Br(N,B){const j=Et.get(N);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function ll(N,B,j,Y,z){B.isScene!==!0&&(B=Kt),Rt.resetTextureUnits();const mt=B.fog,bt=Y.isMeshStandardMaterial?B.environment:null,Dt=S===null?A.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Fr,It=(Y.isMeshStandardMaterial?I:V).get(Y.envMap||bt),Xt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$t=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!j.morphAttributes.position,ne=!!j.morphAttributes.normal,ge=!!j.morphAttributes.color;let be=Tr;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(be=A.toneMapping);const dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ce=dn!==void 0?dn.length:0,Ot=Et.get(Y),ze=g.state.lights;if(et===!0&&(ot===!0||N!==y)){const We=N===y&&Y.id===T;qt.setState(Y,N,We)}let ae=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ze.state.version||Ot.outputColorSpace!==Dt||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==It||Y.fog===!0&&Ot.fog!==mt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==qt.numPlanes||Ot.numIntersection!==qt.numIntersection)||Ot.vertexAlphas!==Xt||Ot.vertexTangents!==$t||Ot.morphTargets!==Ut||Ot.morphNormals!==ne||Ot.morphColors!==ge||Ot.toneMapping!==be||Ot.morphTargetsCount!==ce)&&(ae=!0):(ae=!0,Ot.__version=Y.version);let Dn=Ot.currentProgram;ae===!0&&(Dn=Bs(Y,B,z));let Fi=!1,bn=!1,Jo=!1;const Pe=Dn.getUniforms(),ai=Ot.uniforms;if(nt.useProgram(Dn.program)&&(Fi=!0,bn=!0,Jo=!0),Y.id!==T&&(T=Y.id,bn=!0),Fi||y!==N){Pe.setValue(U,"projectionMatrix",N.projectionMatrix),Pe.setValue(U,"viewMatrix",N.matrixWorldInverse);const We=Pe.map.cameraPosition;We!==void 0&&We.setValue(U,_t.setFromMatrixPosition(N.matrixWorld)),yt.logarithmicDepthBuffer&&Pe.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pe.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),y!==N&&(y=N,bn=!0,Jo=!0)}if(z.isSkinnedMesh){Pe.setOptional(U,z,"bindMatrix"),Pe.setOptional(U,z,"bindMatrixInverse");const We=z.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Pe.setValue(U,"boneTexture",We.boneTexture,Rt))}z.isBatchedMesh&&(Pe.setOptional(U,z,"batchingTexture"),Pe.setValue(U,"batchingTexture",z._matricesTexture,Rt),Pe.setOptional(U,z,"batchingIdTexture"),Pe.setValue(U,"batchingIdTexture",z._indirectTexture,Rt),Pe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Pe.setValue(U,"batchingColorTexture",z._colorsTexture,Rt));const Zo=j.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0)&&Jt.update(z,j,Dn),(bn||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,Pe.setValue(U,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ai.envMap.value=It,ai.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(ai.envMapIntensity.value=B.environmentIntensity),bn&&(Pe.setValue(U,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&Ko(ai,Jo),mt&&Y.fog===!0&&At.refreshFogUniforms(ai,mt),At.refreshMaterialUniforms(ai,Y,tt,G,g.state.transmissionRenderTarget[N.id]),ic.upload(U,al(Ot),ai,Rt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ic.upload(U,al(Ot),ai,Rt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pe.setValue(U,"center",z.center),Pe.setValue(U,"modelViewMatrix",z.modelViewMatrix),Pe.setValue(U,"normalMatrix",z.normalMatrix),Pe.setValue(U,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const We=Y.uniformsGroups;for(let Gn=0,Hs=We.length;Gn<Hs;Gn++){const zr=We[Gn];me.update(zr,Dn),me.bind(zr,Dn)}}return Dn}function Ko(N,B){N.ambientLightColor.needsUpdate=B,N.lightProbe.needsUpdate=B,N.directionalLights.needsUpdate=B,N.directionalLightShadows.needsUpdate=B,N.pointLights.needsUpdate=B,N.pointLightShadows.needsUpdate=B,N.spotLights.needsUpdate=B,N.spotLightShadows.needsUpdate=B,N.rectAreaLights.needsUpdate=B,N.hemisphereLights.needsUpdate=B}function zs(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(N,B,j){Et.get(N.texture).__webglTexture=B,Et.get(N.depthTexture).__webglTexture=j;const Y=Et.get(N);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,B){const j=Et.get(N);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(N,B=0,j=0){S=N,F=B,D=j;let Y=!0,z=null,mt=!1,bt=!1;if(N){const It=Et.get(N);It.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):It.__webglFramebuffer===void 0?Rt.setupRenderTarget(N):It.__hasExternalTextures&&Rt.rebindTextures(N,Et.get(N.texture).__webglTexture,Et.get(N.depthTexture).__webglTexture);const Xt=N.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);const $t=Et.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray($t[B])?z=$t[B][j]:z=$t[B],mt=!0):N.samples>0&&Rt.useMultisampledRTT(N)===!1?z=Et.get(N).__webglMultisampledFramebuffer:Array.isArray($t)?z=$t[j]:z=$t,E.copy(N.viewport),b.copy(N.scissor),L=N.scissorTest}else E.copy(St).multiplyScalar(tt).floor(),b.copy(xt).multiplyScalar(tt).floor(),L=Nt;if(nt.bindFramebuffer(U.FRAMEBUFFER,z)&&Y&&nt.drawBuffers(N,z),nt.viewport(E),nt.scissor(b),nt.setScissorTest(L),mt){const It=Et.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,j)}else if(bt){const It=Et.get(N.texture),Xt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.__webglTexture,j||0,Xt)}T=-1},this.readRenderTargetPixels=function(N,B,j,Y,z,mt,bt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){nt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const It=N.texture,Xt=It.format,$t=It.type;if(!yt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=N.width-Y&&j>=0&&j<=N.height-z&&U.readPixels(B,j,Y,z,Wt.convert(Xt),Wt.convert($t),mt)}finally{const It=S!==null?Et.get(S).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(N,B,j,Y,z,mt,bt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){nt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const It=N.texture,Xt=It.format,$t=It.type;if(!yt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=N.width-Y&&j>=0&&j<=N.height-z){const Ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ut),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(B,j,Y,z,Wt.convert(Xt),Wt.convert($t),0),U.flush();const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await aw(U,ne,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt)}finally{U.deleteBuffer(Ut),U.deleteSync(ne)}return mt}}finally{const It=S!==null?Et.get(S).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(N,B=null,j=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,N=arguments[1]);const Y=Math.pow(2,-j),z=Math.floor(N.image.width*Y),mt=Math.floor(N.image.height*Y),bt=B!==null?B.x:0,Dt=B!==null?B.y:0;Rt.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,bt,Dt,z,mt),nt.unbindTexture()},this.copyTextureToTexture=function(N,B,j=null,Y=null,z=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1],B=arguments[2],z=arguments[3]||0,j=null);let mt,bt,Dt,It,Xt,$t;j!==null?(mt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Dt=j.min.x,It=j.min.y):(mt=N.image.width,bt=N.image.height,Dt=0,It=0),Y!==null?(Xt=Y.x,$t=Y.y):(Xt=0,$t=0);const Ut=Wt.convert(B.format),ne=Wt.convert(B.type);Rt.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ge=U.getParameter(U.UNPACK_ROW_LENGTH),be=U.getParameter(U.UNPACK_IMAGE_HEIGHT),dn=U.getParameter(U.UNPACK_SKIP_PIXELS),ce=U.getParameter(U.UNPACK_SKIP_ROWS),Ot=U.getParameter(U.UNPACK_SKIP_IMAGES),ze=N.isCompressedTexture?N.mipmaps[z]:N.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ze.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ze.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Xt,$t,mt,bt,Ut,ne,ze.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Xt,$t,ze.width,ze.height,Ut,ze.data):U.texSubImage2D(U.TEXTURE_2D,z,Xt,$t,mt,bt,Ut,ne,ze),U.pixelStorei(U.UNPACK_ROW_LENGTH,ge),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be),U.pixelStorei(U.UNPACK_SKIP_PIXELS,dn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(N,B,j=null,Y=null,z=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,N=arguments[2],B=arguments[3],z=arguments[4]||0);let mt,bt,Dt,It,Xt,$t,Ut,ne,ge;const be=N.isCompressedTexture?N.mipmaps[z]:N.image;j!==null?(mt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Dt=j.max.z-j.min.z,It=j.min.x,Xt=j.min.y,$t=j.min.z):(mt=be.width,bt=be.height,Dt=be.depth,It=0,Xt=0,$t=0),Y!==null?(Ut=Y.x,ne=Y.y,ge=Y.z):(Ut=0,ne=0,ge=0);const dn=Wt.convert(B.format),ce=Wt.convert(B.type);let Ot;if(B.isData3DTexture)Rt.setTexture3D(B,0),Ot=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Rt.setTexture2DArray(B,0),Ot=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ze=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Dn=U.getParameter(U.UNPACK_SKIP_PIXELS),Fi=U.getParameter(U.UNPACK_SKIP_ROWS),bn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,It),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t),N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Ot,z,Ut,ne,ge,mt,bt,Dt,dn,ce,be.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,z,Ut,ne,ge,mt,bt,Dt,dn,be.data):U.texSubImage3D(Ot,z,Ut,ne,ge,mt,bt,Dt,dn,ce,be),U.pixelStorei(U.UNPACK_ROW_LENGTH,ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bn),z===0&&B.generateMipmaps&&U.generateMipmap(Ot),nt.unbindTexture()},this.initRenderTarget=function(N){Et.get(N).__webglFramebuffer===void 0&&Rt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Rt.setTextureCube(N,0):N.isData3DTexture?Rt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Rt.setTexture2DArray(N,0):Rt.setTexture2D(N,0),nt.unbindTexture()},this.resetState=function(){F=0,D=0,S=null,nt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===td?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Kc?"display-p3":"srgb"}}class gP extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ft:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,r=[],s=[],o=[],a=new k,l=new Ue;for(let p=0;p<=t;p++){const x=p/t;r[p]=this.getTangentAt(x,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(je(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ad extends Ni{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _P extends ad{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ld(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Wl=new k,Gu=new ld,Wu=new ld,Xu=new ld;class vP extends Ni{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new k){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Wl.subVectors(r[0],r[1]).add(r[0]),c=Wl);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Wl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),Gu.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,x,v,g),Wu.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,x,v,g),Xu.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(Gu.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Wu.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Xu.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Gu.calc(l),Wu.calc(l),Xu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qm(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function yP(i,t){const e=1-i;return e*e*t}function xP(i,t){return 2*(1-i)*i*t}function EP(i,t){return i*i*t}function wa(i,t,e,n){return yP(i,t)+xP(i,e)+EP(i,n)}function SP(i,t){const e=1-i;return e*e*e*t}function TP(i,t){const e=1-i;return 3*e*e*i*t}function MP(i,t){return 3*(1-i)*i*i*t}function AP(i,t){return i*i*i*t}function ba(i,t,e,n,r){return SP(i,t)+TP(i,e)+MP(i,n)+AP(i,r)}class Wv extends Ni{constructor(t=new ft,e=new ft,n=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ba(t,r.x,s.x,o.x,a.x),ba(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wP extends Ni{constructor(t=new k,e=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new k){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ba(t,r.x,s.x,o.x,a.x),ba(t,r.y,s.y,o.y,a.y),ba(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xv extends Ni{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bP extends Ni{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $v extends Ni{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(wa(t,r.x,s.x,o.x),wa(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RP extends Ni{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(wa(t,r.x,s.x,o.x),wa(t,r.y,s.y,o.y),wa(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qv extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(qm(a,l.x,c.x,h.x,f.x),qm(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var ef=Object.freeze({__proto__:null,ArcCurve:_P,CatmullRomCurve3:vP,CubicBezierCurve:Wv,CubicBezierCurve3:wP,EllipseCurve:ad,LineCurve:Xv,LineCurve3:bP,QuadraticBezierCurve:$v,QuadraticBezierCurve3:RP,SplineCurve:qv});class CP extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ef[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ef[r.type]().fromJSON(r))}return this}}class Rc extends CP{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Xv(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new $v(this.currentPoint.clone(),new ft(t,e),new ft(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Wv(this.currentPoint.clone(),new ft(t,e),new ft(n,r),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qv(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new ad(t,e,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cd extends yi{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=je(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,f=new k,d=new ft,p=new k,x=new k,v=new k;let g=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-g,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(x)}for(let w=0;w<=e;w++){const A=n+w*h*r,R=Math.sin(A),F=Math.cos(A);for(let D=0;D<=t.length-1;D++){f.x=t[D].x*R,f.y=t[D].y,f.z=t[D].x*F,o.push(f.x,f.y,f.z),d.x=w/e,d.y=D/(t.length-1),a.push(d.x,d.y);const S=l[3*D+0]*R,T=l[3*D+1],y=l[3*D+0]*F;c.push(S,T,y)}}for(let w=0;w<e;w++)for(let A=0;A<t.length-1;A++){const R=A+w*t.length,F=R,D=R+t.length,S=R+t.length+1,T=R+1;s.push(F,D,T),s.push(S,T,D)}this.setIndex(s),this.setAttribute("position",new on(o,3)),this.setAttribute("uv",new on(a,2)),this.setAttribute("normal",new on(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cd(t.points,t.segments,t.phiStart,t.phiLength)}}class ud extends cd{constructor(t=1,e=1,n=4,r=8){const s=new Rc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new ud(t.radius,t.length,t.capSegments,t.radialSegments)}}class cs extends yi{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let x=0;const v=[],g=n/2;let m=0;w(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new on(f,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(p,2));function w(){const R=new k,F=new k;let D=0;const S=(e-t)/n;for(let T=0;T<=s;T++){const y=[],E=T/s,b=E*(e-t)+t;for(let L=0;L<=r;L++){const C=L/r,W=C*l+a,K=Math.sin(W),G=Math.cos(W);F.x=b*K,F.y=-E*n+g,F.z=b*G,f.push(F.x,F.y,F.z),R.set(K,S,G).normalize(),d.push(R.x,R.y,R.z),p.push(C,1-E),y.push(x++)}v.push(y)}for(let T=0;T<r;T++)for(let y=0;y<s;y++){const E=v[y][T],b=v[y+1][T],L=v[y+1][T+1],C=v[y][T+1];h.push(E,b,C),h.push(b,L,C),D+=6}c.addGroup(m,D,0),m+=D}function A(R){const F=x,D=new ft,S=new k;let T=0;const y=R===!0?t:e,E=R===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,g*E,0),d.push(0,E,0),p.push(.5,.5),x++;const b=x;for(let L=0;L<=r;L++){const W=L/r*l+a,K=Math.cos(W),G=Math.sin(W);S.x=y*G,S.y=g*E,S.z=y*K,f.push(S.x,S.y,S.z),d.push(0,E,0),D.x=K*.5+.5,D.y=G*.5*E+.5,p.push(D.x,D.y),x++}for(let L=0;L<r;L++){const C=F+L,W=b+L;R===!0?h.push(W,W+1,C):h.push(W+1,W,C),T+=3}c.addGroup(m,T,R===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hd extends cs{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rc extends Rc{constructor(t){super(t),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Rc().fromJSON(r))}return this}}const PP={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=jv(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,p;if(n&&(s=OP(i,t,s,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let x=e;x<r;x+=e)f=i[x],d=i[x+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return za(s,o,e,a,l,p,0),o}};function jv(i,t,e,n,r){let s,o;if(r===$P(i,t,e,n)>0)for(s=t;s<e;s+=n)o=jm(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=jm(s,i[s],i[s+1],o);return o&&Zc(o,o.next)&&(Ga(o),o=o.next),o}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zc(e,e.next)||Le(e.prev,e,e.next)===0)){if(Ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function za(i,t,e,n,r,s,o){if(!i)return;!o&&s&&BP(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?DP(i,n,r,s):IP(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ga(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=LP(Is(i),t,e),za(i,t,e,n,r,s,2)):o===2&&NP(i,t,e,n,r,s):za(Is(i),t,e,n,r,s,1);break}}}function IP(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=p&&go(r,a,s,l,o,c,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function DP(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Le(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,x=h<f?h<d?h:d:f<d?f:d,v=a>l?a>c?a:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,m=nf(p,x,t,e,n),w=nf(v,g,t,e,n);let A=i.prevZ,R=i.nextZ;for(;A&&A.z>=m&&R&&R.z<=w;){if(A.x>=p&&A.x<=v&&A.y>=x&&A.y<=g&&A!==r&&A!==o&&go(a,h,l,f,c,d,A.x,A.y)&&Le(A.prev,A,A.next)>=0||(A=A.prevZ,R.x>=p&&R.x<=v&&R.y>=x&&R.y<=g&&R!==r&&R!==o&&go(a,h,l,f,c,d,R.x,R.y)&&Le(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;A&&A.z>=m;){if(A.x>=p&&A.x<=v&&A.y>=x&&A.y<=g&&A!==r&&A!==o&&go(a,h,l,f,c,d,A.x,A.y)&&Le(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;R&&R.z<=w;){if(R.x>=p&&R.x<=v&&R.y>=x&&R.y<=g&&R!==r&&R!==o&&go(a,h,l,f,c,d,R.x,R.y)&&Le(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function LP(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Zc(r,s)&&Yv(r,n,n.next,s)&&Ha(r,s)&&Ha(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ga(n),Ga(n.next),n=i=s),n=n.next}while(n!==i);return Is(n)}function NP(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&GP(o,a)){let l=Kv(o,a);o=Is(o,o.next),l=Is(l,l.next),za(o,t,e,n,r,s,0),za(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function OP(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=jv(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(HP(c));for(r.sort(UP),s=0;s<r.length;s++)e=FP(r[s],e);return e}function UP(i,t){return i.x-t.x}function FP(i,t){const e=VP(i,t);if(!e)return t;const n=Kv(e,i);return Is(n,n.next),Is(e,e.next)}function VP(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,f;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&go(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),Ha(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&kP(r,e)))&&(r=e,h=f)),e=e.next;while(e!==a);return r}function kP(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function BP(i,t,e,n){let r=i;do r.z===0&&(r.z=nf(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,zP(r)}function zP(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function nf(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function HP(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function go(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function GP(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!WP(i,t)&&(Ha(i,t)&&Ha(t,i)&&XP(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||Zc(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zc(i,t){return i.x===t.x&&i.y===t.y}function Yv(i,t,e,n){const r=$l(Le(i,t,e)),s=$l(Le(i,t,n)),o=$l(Le(e,n,i)),a=$l(Le(e,n,t));return!!(r!==s&&o!==a||r===0&&Xl(i,e,t)||s===0&&Xl(i,n,t)||o===0&&Xl(e,i,n)||a===0&&Xl(e,t,n))}function Xl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $l(i){return i>0?1:i<0?-1:0}function WP(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yv(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ha(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function XP(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kv(i,t){const e=new rf(i.i,i.x,i.y),n=new rf(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function jm(i,t,e,n){const r=new rf(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rf(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $P(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ao{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Ao.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ym(t),Km(n,t);let o=t.length;e.forEach(Ym);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Km(n,e[l]);const a=PP.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ym(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Km(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fd extends yi{constructor(t=new rc([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new on(r,3)),this.setAttribute("uv",new on(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:qP;let A,R=!1,F,D,S,T;m&&(A=m.getSpacedPoints(h),R=!0,d=!1,F=m.computeFrenetFrames(h,!1),D=new k,S=new k,T=new k),d||(g=0,p=0,x=0,v=0);const y=a.extractPoints(c);let E=y.shape;const b=y.holes;if(!Ao.isClockWise(E)){E=E.reverse();for(let U=0,dt=b.length;U<dt;U++){const at=b[U];Ao.isClockWise(at)&&(b[U]=at.reverse())}}const C=Ao.triangulateShape(E,b),W=E;for(let U=0,dt=b.length;U<dt;U++){const at=b[U];E=E.concat(at)}function K(U,dt,at){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(dt,at)}const G=E.length,tt=C.length;function J(U,dt,at){let yt,nt,Ft;const Et=U.x-dt.x,Rt=U.y-dt.y,V=at.x-U.x,I=at.y-U.y,q=Et*Et+Rt*Rt,st=Et*I-Rt*V;if(Math.abs(st)>Number.EPSILON){const it=Math.sqrt(q),rt=Math.sqrt(V*V+I*I),At=dt.x-Rt/it,ut=dt.y+Et/it,Tt=at.x-I/rt,qt=at.y+V/rt,ht=((Tt-At)*I-(qt-ut)*V)/(Et*I-Rt*V);yt=At+Et*ht-U.x,nt=ut+Rt*ht-U.y;const wt=yt*yt+nt*nt;if(wt<=2)return new ft(yt,nt);Ft=Math.sqrt(wt/2)}else{let it=!1;Et>Number.EPSILON?V>Number.EPSILON&&(it=!0):Et<-Number.EPSILON?V<-Number.EPSILON&&(it=!0):Math.sign(Rt)===Math.sign(I)&&(it=!0),it?(yt=-Rt,nt=Et,Ft=Math.sqrt(q)):(yt=Et,nt=Rt,Ft=Math.sqrt(q/2))}return new ft(yt/Ft,nt/Ft)}const gt=[];for(let U=0,dt=W.length,at=dt-1,yt=U+1;U<dt;U++,at++,yt++)at===dt&&(at=0),yt===dt&&(yt=0),gt[U]=J(W[U],W[at],W[yt]);const St=[];let xt,Nt=gt.concat();for(let U=0,dt=b.length;U<dt;U++){const at=b[U];xt=[];for(let yt=0,nt=at.length,Ft=nt-1,Et=yt+1;yt<nt;yt++,Ft++,Et++)Ft===nt&&(Ft=0),Et===nt&&(Et=0),xt[yt]=J(at[yt],at[Ft],at[Et]);St.push(xt),Nt=Nt.concat(xt)}for(let U=0;U<g;U++){const dt=U/g,at=p*Math.cos(dt*Math.PI/2),yt=x*Math.sin(dt*Math.PI/2)+v;for(let nt=0,Ft=W.length;nt<Ft;nt++){const Et=K(W[nt],gt[nt],yt);_t(Et.x,Et.y,-at)}for(let nt=0,Ft=b.length;nt<Ft;nt++){const Et=b[nt];xt=St[nt];for(let Rt=0,V=Et.length;Rt<V;Rt++){const I=K(Et[Rt],xt[Rt],yt);_t(I.x,I.y,-at)}}}const kt=x+v;for(let U=0;U<G;U++){const dt=d?K(E[U],Nt[U],kt):E[U];R?(S.copy(F.normals[0]).multiplyScalar(dt.x),D.copy(F.binormals[0]).multiplyScalar(dt.y),T.copy(A[0]).add(S).add(D),_t(T.x,T.y,T.z)):_t(dt.x,dt.y,0)}for(let U=1;U<=h;U++)for(let dt=0;dt<G;dt++){const at=d?K(E[dt],Nt[dt],kt):E[dt];R?(S.copy(F.normals[U]).multiplyScalar(at.x),D.copy(F.binormals[U]).multiplyScalar(at.y),T.copy(A[U]).add(S).add(D),_t(T.x,T.y,T.z)):_t(at.x,at.y,f/h*U)}for(let U=g-1;U>=0;U--){const dt=U/g,at=p*Math.cos(dt*Math.PI/2),yt=x*Math.sin(dt*Math.PI/2)+v;for(let nt=0,Ft=W.length;nt<Ft;nt++){const Et=K(W[nt],gt[nt],yt);_t(Et.x,Et.y,f+at)}for(let nt=0,Ft=b.length;nt<Ft;nt++){const Et=b[nt];xt=St[nt];for(let Rt=0,V=Et.length;Rt<V;Rt++){const I=K(Et[Rt],xt[Rt],yt);R?_t(I.x,I.y+A[h-1].y,A[h-1].x+at):_t(I.x,I.y,f+at)}}}et(),ot();function et(){const U=r.length/3;if(d){let dt=0,at=G*dt;for(let yt=0;yt<tt;yt++){const nt=C[yt];Ht(nt[2]+at,nt[1]+at,nt[0]+at)}dt=h+g*2,at=G*dt;for(let yt=0;yt<tt;yt++){const nt=C[yt];Ht(nt[0]+at,nt[1]+at,nt[2]+at)}}else{for(let dt=0;dt<tt;dt++){const at=C[dt];Ht(at[2],at[1],at[0])}for(let dt=0;dt<tt;dt++){const at=C[dt];Ht(at[0]+G*h,at[1]+G*h,at[2]+G*h)}}n.addGroup(U,r.length/3-U,0)}function ot(){const U=r.length/3;let dt=0;Ct(W,dt),dt+=W.length;for(let at=0,yt=b.length;at<yt;at++){const nt=b[at];Ct(nt,dt),dt+=nt.length}n.addGroup(U,r.length/3-U,1)}function Ct(U,dt){let at=U.length;for(;--at>=0;){const yt=at;let nt=at-1;nt<0&&(nt=U.length-1);for(let Ft=0,Et=h+g*2;Ft<Et;Ft++){const Rt=G*Ft,V=G*(Ft+1),I=dt+yt+Rt,q=dt+nt+Rt,st=dt+nt+V,it=dt+yt+V;Kt(I,q,st,it)}}}function _t(U,dt,at){l.push(U),l.push(dt),l.push(at)}function Ht(U,dt,at){Bt(U),Bt(dt),Bt(at);const yt=r.length/3,nt=w.generateTopUV(n,r,yt-3,yt-2,yt-1);Zt(nt[0]),Zt(nt[1]),Zt(nt[2])}function Kt(U,dt,at,yt){Bt(U),Bt(dt),Bt(yt),Bt(dt),Bt(at),Bt(yt);const nt=r.length/3,Ft=w.generateSideWallUV(n,r,nt-6,nt-3,nt-2,nt-1);Zt(Ft[0]),Zt(Ft[1]),Zt(Ft[3]),Zt(Ft[1]),Zt(Ft[2]),Zt(Ft[3])}function Bt(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function Zt(U){s.push(U.x),s.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jP(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ef[r.type]().fromJSON(r)),new fd(n,t.options)}}const qP={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ft(s,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[r*3],p=t[r*3+1],x=t[r*3+2],v=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-f),new ft(d,1-x),new ft(v,1-m)]:[new ft(a,1-l),new ft(h,1-f),new ft(p,1-x),new ft(g,1-m)]}};function jP(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class dd extends yi{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new k,d=new k,p=[],x=[],v=[],g=[];for(let m=0;m<=n;m++){const w=[],A=m/n;let R=0;m===0&&o===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let F=0;F<=e;F++){const D=F/e;f.x=-t*Math.cos(r+D*s)*Math.sin(o+A*a),f.y=t*Math.cos(o+A*a),f.z=t*Math.sin(r+D*s)*Math.sin(o+A*a),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(D+R,1-A),w.push(c++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const A=h[m][w+1],R=h[m][w],F=h[m+1][w],D=h[m+1][w+1];(m!==0||o>0)&&p.push(A,R,D),(m!==n-1||l<Math.PI)&&p.push(R,F,D)}this.setIndex(p),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rs extends jo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class YP extends jo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Cc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class KP{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}}const JP=new KP;class rl{constructor(t){this.manager=t!==void 0?t:JP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}rl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class ZP extends Error{constructor(t,e){super(t),this.response=e}}class QP extends rl{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Cc.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Wi[t]!==void 0){Wi[t].push({onLoad:e,onProgress:n,onError:r});return}Wi[t]=[],Wi[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wi[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,x=p!==0;let v=0;const g=new ReadableStream({start(m){w();function w(){f.read().then(({done:A,value:R})=>{if(A)m.close();else{v+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:p});for(let D=0,S=h.length;D<S;D++){const T=h[D];T.onProgress&&T.onProgress(F)}m.enqueue(R),w()}},A=>{m.error(A)})}}});return new Response(g)}else throw new ZP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{Cc.add(t,c);const h=Wi[t];delete Wi[t];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Wi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Wi[t];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class tI extends rl{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Cc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ba("img");function l(){h(),Cc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){h(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class eI extends rl{constructor(t){super(t)}load(t,e,n,r){const s=new In,o=new tI(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Jv extends Tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const $u=new Ue,Jm=new k,Zm=new k;class nI{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sd,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jm),Zm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zm),e.updateMatrixWorld(),$u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($u)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iI extends nI{constructor(){super(new Vv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zv extends Jv{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new iI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rI extends Jv{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sI{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qm(){return(typeof performance>"u"?Date:performance).now()}const tg=new Ue;class oI{constructor(t,e,n=0,r=1/0){this.ray=new id(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new rd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(t,e=!0,n=[]){return sf(t,this,n,e),n.sort(eg),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)sf(t[r],this,n,e);return n.sort(eg),n}}function eg(i,t){return i.distance-t.distance}function sf(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)sf(s[o],t,e,!0)}}class ng{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aI{constructor(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Rc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,o){return this.currentPath.bezierCurveTo(t,e,n,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const w=[];for(let A=0,R=m.length;A<R;A++){const F=m[A],D=new rc;D.curves=F.curves,w.push(D)}return w}function n(m,w){const A=w.length;let R=!1;for(let F=A-1,D=0;D<A;F=D++){let S=w[F],T=w[D],y=T.x-S.x,E=T.y-S.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(S=w[D],y=-y,T=w[F],E=-E),m.y<S.y||m.y>T.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{const b=E*(m.x-S.x)-y*(m.y-S.y);if(b===0)return!0;if(b<0)continue;R=!R}}else{if(m.y!==S.y)continue;if(T.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=T.x)return!0}}return R}const r=Ao.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new rc,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=t?!h:h;const f=[],d=[];let p=[],x=0,v;d[x]=void 0,p[x]=[];for(let m=0,w=s.length;m<w;m++)a=s[m],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!h&&d[x]&&x++,d[x]={s:new rc,p:v},d[x].s.curves=a.curves,h&&x++,p[x]=[]):p[x].push({h:a,p:v[0]});if(!d[0])return e(s);if(d.length>1){let m=!1,w=0;for(let A=0,R=d.length;A<R;A++)f[A]=[];for(let A=0,R=d.length;A<R;A++){const F=p[A];for(let D=0;D<F.length;D++){const S=F[D];let T=!0;for(let y=0;y<d.length;y++)n(S.p,d[y].p)&&(A!==y&&w++,T?(T=!1,f[y].push(S)):m=!0);T&&f[A].push(S)}}w>0&&m===!1&&(p=f)}let g;for(let m=0,w=d.length;m<w;m++){l=d[m].s,c.push(l),g=p[m];for(let A=0,R=g.length;A<R;A++)l.holes.push(g[A].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);class lI extends rl{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new QP(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,r)}parse(t){return new cI(t)}}class cI{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=uI(t,e,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function uI(i,t,e){const n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const f=hI(h,r,a,l,e);a+=f.offsetX,o.push(f.path)}}return o}function hI(i,t,e,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new aI;let a,l,c,h,f,d,p,x;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,m=v.length;g<m;)switch(v[g++]){case"m":a=v[g++]*t+e,l=v[g++]*t+n,o.moveTo(a,l);break;case"l":a=v[g++]*t+e,l=v[g++]*t+n,o.lineTo(a,l);break;case"q":c=v[g++]*t+e,h=v[g++]*t+n,f=v[g++]*t+e,d=v[g++]*t+n,o.quadraticCurveTo(f,d,c,h);break;case"b":c=v[g++]*t+e,h=v[g++]*t+n,f=v[g++]*t+e,d=v[g++]*t+n,p=v[g++]*t+e,x=v[g++]*t+n,o.bezierCurveTo(f,d,p,x,c,h);break}}return{offsetX:s.ha*t,path:o}}class qu extends fd{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Ri{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ri.nextNameID=Ri.nextNameID||0,this.$name.id=`lil-gui-name-${++Ri.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class fI extends Ri{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function of(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const dI={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:of,toHexString:of},Wa={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},pI={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Wa.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return Wa.toHexString(r)}},mI={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Wa.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return Wa.toHexString(r)}},gI=[dI,Wa,pI,mI];function _I(i){return gI.find(t=>t.match(i))}class vI extends Ri{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=_I(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=of(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ju extends Ri{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class yI extends Ri{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},n=w=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+w),this.$input.value=this.getValue())},r=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w)*-1))},s=w=>{this._inputFocused&&(w.preventDefault(),n(this._step*this._normalizeMouseWheel(w)))};let o=!1,a,l,c,h,f;const d=5,p=w=>{a=w.clientX,l=c=w.clientY,o=!0,h=this.getValue(),f=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",v)},x=w=>{if(o){const A=w.clientX-a,R=w.clientY-l;Math.abs(R)>d?(w.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>d&&v()}if(!o){const A=w.clientY-c;f-=A*this._step*this._arrowKeyMultiplier(w),h+f>this._max?f=this._max-h:h+f<this._min&&(f=this._min-h),this._snapClampSetValue(h+f)}c=w.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",v)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,w,A,R,F)=>(m-w)/(A-w)*(F-R)+R,e=m=>{const w=this.$slider.getBoundingClientRect();let A=t(m,w.left,w.right,this._min,this._max);this._snapClampSetValue(A)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=m=>{e(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",d))},f=m=>{if(o){const w=m.touches[0].clientX-a,A=m.touches[0].clientY-l;Math.abs(w)>Math.abs(A)?c(m):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),x=400;let v;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const A=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+A),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class xI extends Ri{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class EI extends Ri{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const SI=`.lil-gui {
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
}`;function TI(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ig=!1;class pd{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!ig&&a&&(TI(SI),ig=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(t,e,n,r,s){if(Object(n)===n)return new xI(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new yI(this,t,e,n,r,s);case"boolean":return new fI(this,t,e);case"string":return new EI(this,t,e);case"function":return new ju(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new vI(this,t,e,n)}addFolder(t){const e=new pd({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ju||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ju)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function $i(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Qv(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ko={duration:.5,overwrite:!1,delay:0},md,Mn,Re,ri=1e8,ve=1/ri,af=Math.PI*2,MI=af/4,AI=0,t0=Math.sqrt,wI=Math.cos,bI=Math.sin,an=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},nr=function(t){return typeof t=="number"},gd=function(t){return typeof t>"u"},Di=function(t){return typeof t=="object"},Un=function(t){return t!==!1},_d=function(){return typeof window<"u"},ql=function(t){return ke(t)||an(t)},e0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,lf=/(?:-?\.?\d|\.)+/gi,n0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,i0=/[+-]=-?[.\d]+/,r0=/[^,'"\[\]\s]+/gi,RI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,xi,cf,vd,Zn={},Pc={},s0,o0=function(t){return(Pc=Ds(t,Zn))&&zn},yd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xa=function(t,e){return!e&&console.warn(t)},a0=function(t,e){return t&&(Zn[t]=e)&&Pc&&(Pc[t]=e)||Zn},$a=function(){return 0},CI={suppressEvents:!0,isStart:!0,kill:!1},sc={suppressEvents:!0,kill:!1},PI={suppressEvents:!0},xd={},Ar=[],uf={},l0,qn={},Ku={},rg=30,oc=[],Ed="",Sd=function(t){var e=t[0],n,r;if(Di(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=oc.length;r--&&!oc[r].targetTest(e););n=oc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new D0(t[r],n)))||t.splice(r,1);return t},ms=function(t){return t._gsap||Sd(si(t))[0]._gsap},c0=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():gd(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},nn=function(t){return Math.round(t*1e7)/1e7||0},wo=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},II=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ic=function(){var t=Ar.length,e=Ar.slice(0),n,r;for(uf={},Ar.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},u0=function(t,e,n,r){Ar.length&&!Mn&&Ic(),t.render(e,n,Mn&&e<0&&(t._initted||t._startAt)),Ar.length&&!Mn&&Ic()},h0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(r0).length<2?e:an(t)?t.trim():t},f0=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},DI=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Ds=function(t,e){for(var n in e)t[n]=e[n];return t},sg=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Di(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Dc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Ra=function(t){var e=t.parent||De,n=t.keyframes?DI(An(t.keyframes)):oi;if(Un(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},LI=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},d0=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Qc=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Nr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},NI=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},hf=function(t,e,n,r){return t._startAt&&(Mn?t._startAt.revert(sc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},OI=function i(t){return!t||t._ts&&i(t.parent)},og=function(t){return t._repeat?Bo(t._tTime,t=t.duration()+t._rDelay)*t:0},Bo=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Lc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},tu=function(t){return t._end=nn(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},eu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=nn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),tu(t),n._dirty||gs(n,t)),t},p0=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Lc(t.rawTime(),e),(!e._dur||sl(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),gs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},Mi=function(t,e,n,r){return e.parent&&Nr(e),e._start=nn((nr(n)?n:n||t!==De?ti(t,n,e):t._time)+e._delay),e._end=nn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),d0(t,e,"_first","_last",t._sort?"_start":0),ff(e)||(t._recent=e),r||p0(t,e),t._ts<0&&eu(t,t._tTime),t},m0=function(t,e){return(Zn.ScrollTrigger||yd("scrollTrigger",e))&&Zn.ScrollTrigger.create(e,t)},g0=function(t,e,n,r,s){if(Md(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&l0!==jn.frame)return Ar.push(t),t._lazy=[s,r],1},UI=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},ff=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},FI=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&UI(t)&&!(!t._initted&&ff(t))||(t._ts<0||t._dp._ts<0)&&!ff(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=sl(0,t._tDur,e),h=Bo(l,a),t._yoyo&&h&1&&(o=1-o),h!==Bo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Mn||r||t._zTime===ve||!e&&t._zTime){if(!t._initted&&g0(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&hf(t,e,n,!0),t._onUpdate&&!n&&Yn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Yn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Nr(t,1),!n&&!Mn&&(Yn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},VI=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},zo=function(t,e,n,r){var s=t._repeat,o=nn(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:nn(o*(s+1)+t._rDelay*s):o,a>0&&!r&&eu(t,t._tTime=t._tDur*a),t.parent&&tu(t),n||gs(t.parent,t),t},ag=function(t){return t instanceof Pn?gs(t):zo(t,t._dur)},kI={_start:0,endTime:$a,totalDuration:$a},ti=function i(t,e,n){var r=t.labels,s=t._recent||kI,o=t.duration()>=ri?s.endTime(!1):t._dur,a,l,c;return an(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ca=function(t,e,n){var r=nr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;o.immediateRender=Un(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},Vr=function(t,e){return t||t===0?e(t):e},sl=function(t,e,n){return n<t?t:n>e?e:n},En=function(t,e){return!an(t)||!(e=RI.exec(t))?"":e[1]},BI=function(t,e,n){return Vr(n,function(r){return sl(t,e,r)})},df=[].slice,_0=function(t,e){return t&&Di(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Di(t[0]))&&!t.nodeType&&t!==xi},zI=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return an(r)&&!e||_0(r,1)?(s=n).push.apply(s,si(r)):n.push(r)})||n},si=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):an(t)&&!n&&(cf||!Ho())?df.call((e||vd).querySelectorAll(t),0):An(t)?zI(t,n):_0(t)?df.call(t,0):t?[t]:[]},pf=function(t){return t=si(t)[0]||Xa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return si(e,n.querySelectorAll?n:n===t?Xa("Invalid scope")||vd.createElement("div"):t)}},v0=function(t){return t.sort(function(){return .5-Math.random()})},y0=function(t){if(ke(t))return t;var e=Di(t)?t:{each:t},n=_s(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,h=r,f=r;return an(r)?h=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],f=r[1]),function(d,p,x){var v=(x||e).length,g=o[v],m,w,A,R,F,D,S,T,y;if(!g){if(y=e.grid==="auto"?0:(e.grid||[1,ri])[1],!y){for(S=-ri;S<(S=x[y++].getBoundingClientRect().left)&&y<v;);y<v&&y--}for(g=o[v]=[],m=l?Math.min(y,v)*h-.5:r%y,w=y===ri?0:l?v*f/y-.5:r/y|0,S=0,T=ri,D=0;D<v;D++)A=D%y-m,R=w-(D/y|0),g[D]=F=c?Math.abs(c==="y"?R:A):t0(A*A+R*R),F>S&&(S=F),F<T&&(T=F);r==="random"&&v0(g),g.max=S-T,g.min=T,g.v=v=(parseFloat(e.amount)||parseFloat(e.each)*(y>v?v-1:c?c==="y"?v/y:y:Math.max(y,v/y))||0)*(r==="edges"?-1:1),g.b=v<0?s-v:s,g.u=En(e.amount||e.each)||0,n=n&&v<0?C0(n):n}return v=(g[d]-g.min)/g.max||0,nn(g.b+(n?n(v):v)*g.v)+g.u}},mf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=nn(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(nr(n)?0:En(n))}},x0=function(t,e){var n=An(t),r,s;return!n&&Di(t)&&(r=n=t.radius||ri,t.values?(t=si(t.values),(s=!nr(t[0]))&&(r*=r)):t=mf(t.increment)),Vr(e,n?ke(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ri,h=0,f=t.length,d,p;f--;)s?(d=t[f].x-a,p=t[f].y-l,d=d*d+p*p):d=Math.abs(t[f]-a),d<c&&(c=d,h=f);return h=!r||c<=r?t[h]:o,s||h===o||nr(o)?h:h+En(o)}:mf(t))},E0=function(t,e,n,r){return Vr(An(t)?!e:n===!0?!!(n=0):!r,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},HI=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},GI=function(t,e){return function(n){return t(parseFloat(n))+(e||En(n))}},WI=function(t,e,n){return T0(t,e,0,1,n)},S0=function(t,e,n){return Vr(n,function(r){return t[~~e(r)]})},XI=function i(t,e,n){var r=e-t;return An(t)?S0(t,i(0,t.length),e):Vr(n,function(s){return(r+(s-t)%r)%r+t})},$I=function i(t,e,n){var r=e-t,s=r*2;return An(t)?S0(t,i(0,t.length-1),e):Vr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},qa=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?r0:lf),n+=t.substr(e,r-e)+E0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},T0=function(t,e,n,r,s){var o=e-t,a=r-n;return Vr(s,function(l){return n+((l-t)/o*a||0)})},qI=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=an(t),a={},l,c,h,f,d;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(i(t[c-1],t[c]));f--,s=function(x){x*=f;var v=Math.min(d,~~x);return h[v](x-v)},n=e}else r||(t=Ds(An(t)?[]:{},t));if(!h){for(l in e)Td.call(a,t,l,"get",e[l]);s=function(x){return bd(x,a)||(o?t.p:t)}}}return Vr(n,s)},lg=function(t,e,n){var r=t.labels,s=ri,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Yn=function(t,e,n){var r=t.vars,s=r[e],o=Re,a=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ar.length&&Ic(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},ga=function(t){return Nr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&Yn(t,"onInterrupt"),t},vo,M0=[],A0=function(t){if(t)if(t=!t.name&&t.default||t,_d()||t.headless){var e=t.name,n=ke(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$a,render:bd,add:Td,kill:c2,modifier:l2,rawVars:0},o={targetTest:0,get:0,getSetter:wd,aliases:{},register:0};if(Ho(),t!==r){if(qn[e])return;oi(r,oi(Dc(t,s),o)),Ds(r.prototype,Ds(s,Dc(t,o))),qn[r.prop=e]=r,t.targetTest&&(oc.push(r),xd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}a0(e,r),t.register&&t.register(zn,r,Vn)}else M0.push(t)},pe=255,_a={aqua:[0,pe,pe],lime:[0,pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pe],navy:[0,0,128],white:[pe,pe,pe],olive:[128,128,0],yellow:[pe,pe,0],orange:[pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pe,0,0],pink:[pe,192,203],cyan:[0,pe,pe],transparent:[pe,pe,pe,0]},Ju=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*pe+.5|0},w0=function(t,e,n){var r=t?nr(t)?[t>>16,t>>8&pe,t&pe]:0:_a.black,s,o,a,l,c,h,f,d,p,x;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),_a[t])r=_a[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&pe,r&pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&pe,t&pe]}else if(t.substr(0,3)==="hsl"){if(r=x=t.match(lf),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Ju(l+1/3,s,o),r[1]=Ju(l,s,o),r[2]=Ju(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(n0),n&&r.length<4&&(r[3]=1),r}else r=t.match(lf)||_a.transparent;r=r.map(Number)}return e&&!x&&(s=r[0]/pe,o=r[1]/pe,a=r[2]/pe,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(p=f-d,c=h>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},b0=function(t){var e=[],n=[],r=-1;return t.split(wr).forEach(function(s){var o=s.match(_o)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},cg=function(t,e,n){var r="",s=(t+r).match(wr),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(d){return(d=w0(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=b0(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(wr,"1").split(_o),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(wr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},wr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in _a)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),jI=/hsl[a]?\(/,R0=function(t){var e=t.join(" "),n;if(wr.lastIndex=0,wr.test(e))return n=jI.test(e),t[1]=cg(t[1],n),t[0]=cg(t[0],n,b0(t[1])),!0},ja,jn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,f,d,p,x=function v(g){var m=i()-r,w=g===!0,A,R,F,D;if((m>t||m<0)&&(n+=m-e),r+=m,F=r-n,A=F-o,(A>0||w)&&(D=++f.frame,d=F-f.time*1e3,f.time=F=F/1e3,o+=A+(A>=s?4:s-A),R=1),w||(l=c(v)),R)for(p=0;p<a.length;p++)a[p](F,d,D,g)};return f={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){s0&&(!cf&&_d()&&(xi=cf=window,vd=xi.document||{},Zn.gsap=zn,(xi.gsapVersions||(xi.gsapVersions=[])).push(zn.version),o0(Pc||xi.GreenSockGlobals||!xi.gsap&&xi||{}),M0.forEach(A0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(g){return setTimeout(g,o-f.time*1e3+1|0)},ja=1,x(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ja=0,c=$a},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,m,w){var A=m?function(R,F,D,S){g(R,F,D,S),f.remove(A)}:g;return f.remove(g),a[w?"unshift":"push"](A),Ho(),A},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},f}(),Ho=function(){return!ja&&jn.wake()},oe={},YI=/^[\d.\-M][\d.\-,\s]/,KI=/["']/g,JI=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(KI,"").trim():+c,r=l.substr(a+1).trim();return e},ZI=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},QI=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[JI(e[1])]:ZI(t).split(",").map(h0)):oe._CE&&YI.test(t)?oe._CE("",t):n},C0=function(t){return function(e){return 1-t(1-e)}},P0=function i(t,e){for(var n=t._first,r;n;)n instanceof Pn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},_s=function(t,e){return t&&(ke(t)?t:oe[t]||QI(t))||e},Vs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Fn(t,function(a){oe[a]=Zn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},I0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Zu=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/af*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*bI((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:I0(a);return s=af/s,l.config=function(c,h){return i(t,c,h)},l},Qu=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:I0(n);return r.config=function(s){return i(t,s)},r};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Vs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Vs("Elastic",Zu("in"),Zu("out"),Zu());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Vs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Vs("Circ",function(i){return-(t0(1-i*i)-1)});Vs("Sine",function(i){return i===1?1:-wI(i*MI)+1});Vs("Back",Qu("in"),Qu("out"),Qu());oe.SteppedEase=oe.steps=Zn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-ve;return function(a){return((r*sl(0,o,a)|0)+s)*n}}};ko.ease=oe["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ed+=i+","+i+"Params,"});var D0=function(t,e){this.id=AI++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:c0,this.set=e?e.getSetter:wd},Ya=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zo(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),ja||jn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Ho(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(eu(this,n),!s._dp||s.parent||p0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ve||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),u0(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+og(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+og(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Bo(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts,this.totalTime(sl(-Math.abs(this._delay),this._tDur,s),r!==!1),tu(this),NI(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mi(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=PI);var r=Mn;return Mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ag(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,ag(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(ti(this,n),Un(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Un(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ve)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=ke(n)?n:f0,a=function(){var c=r.then;r.then=null,ke(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){ga(this)},i}();oi(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var Pn=function(i){Qv(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),De&&Mi(n.parent||De,$i(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&m0($i(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Ca(0,arguments,this),this},e.from=function(r,s,o){return Ca(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Ca(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(r,s,ti(this,o),1),this},e.call=function(r,s,o){return Mi(this,qe.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(r,o,ti(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,Ra(o).immediateRender=Un(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},e.staggerFromTo=function(r,s,o,a,l,c,h,f){return a.startAt=o,Ra(a).immediateRender=Un(a.immediateRender),this.staggerTo(r,s,a,l,c,h,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:nn(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,p,x,v,g,m,w,A,R,F,D,S;if(this!==De&&h>l&&r>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),d=h,R=this._start,A=this._ts,m=!A,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(D=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=nn(h%g),h===l?(v=this._repeat,d=c):(v=~~(h/g),v&&v===h/g&&(d=c,v--),d>c&&(d=c)),F=Bo(this._tTime,g),!a&&this._tTime&&F!==v&&this._tTime-F*g-this._dur<=0&&(F=v),D&&v&1&&(d=c-d,S=1),v!==F&&!this._lock){var T=D&&F&1,y=T===(D&&v&1);if(v<F&&(T=!T),a=T?0:h%c?c:h,this._lock=1,this.render(a||(S?0:nn(v*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=T?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;P0(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=VI(this,nn(a),nn(d)),w&&(h-=d-(d=w._start))),this._tTime=h,this._time=d,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!v&&(Yn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||d>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!m){w=0,x&&(h+=this._zTime=-ve);break}}p=x}else{p=this._last;for(var E=r<0?r:d;p;){if(x=p._prev,(p._act||E<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||Mn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!m){w=0,x&&(h+=this._zTime=E?-ve:ve);break}}p=x}}if(w&&!s&&(this.pause(),w.render(d>=a?0:-ve)._zTime=d>=a?1:-1,this._ts))return this._start=R,tu(this),this.render(r,s,o);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(R===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Nr(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(Yn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(nr(s)||(s=ti(this,s,r)),!(r instanceof Ya)){if(An(r))return r.forEach(function(a){return o.add(a,s)}),this;if(an(r))return this.addLabel(r,s);if(ke(r))r=qe.delayedCall(0,r);else return this}return this!==r?Mi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return an(r)?this.removeLabel(r):ke(r)?this.killTweensOf(r):(Qc(this,r),r===this._recent&&(this._recent=this._last),gs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nn(jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=ti(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=qe.delayedCall(0,s||$a,o);return a.data="isPause",this._hasPause=1,Mi(this,a,ti(this,r))},e.removePause=function(r){var s=this._first;for(r=ti(this,r);s;)s._start===r&&s.data==="isPause"&&Nr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)mr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=si(r),l=this._first,c=nr(s),h;l;)l instanceof qe?II(l._targets,a)&&(c?(!mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=ti(o,r),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,p,x=qe.to(o,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());x._dur!==g&&zo(x,g,0,1).render(x._time,!0,!0),p=1}h&&h.apply(x,f||[])}},s));return d?x.render(0):x},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,oi({startAt:{time:ti(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),lg(this,ti(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),lg(this,ti(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return gs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),gs(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=ri,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;zo(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(De._ts&&(u0(De,Lc(r,De)),l0=jn.frame),jn.frame>=rg){rg+=Jn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Jn.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},t}(Ya);oi(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var t2=function(t,e,n,r,s,o,a){var l=new Vn(this._pt,t,e,0,1,V0,null,s),c=0,h=0,f,d,p,x,v,g,m,w;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=qa(r)),o&&(w=[n,r],o(w,t,e),n=w[0],r=w[1]),d=n.match(Yu)||[];f=Yu.exec(r);)x=f[0],v=r.substring(c,f.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),x!==d[h++]&&(g=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:g,c:x.charAt(1)==="="?wo(g,x)-g:parseFloat(x)-g,m:p&&p<4?Math.round:0},c=Yu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(i0.test(r)||m)&&(l.e=0),this._pt=l,l},Td=function(t,e,n,r,s,o,a,l,c,h){ke(r)&&(r=r(s||0,t,o));var f=t[e],d=n!=="get"?n:ke(f)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,p=ke(f)?c?s2:U0:Ad,x;if(an(r)&&(~r.indexOf("random(")&&(r=qa(r)),r.charAt(1)==="="&&(x=wo(d,r)+(En(d)||0),(x||x===0)&&(r=x))),!h||d!==r||gf)return!isNaN(d*r)&&r!==""?(x=new Vn(this._pt,t,e,+d||0,r-(d||0),typeof f=="boolean"?a2:F0,0,p),c&&(x.fp=c),a&&x.modifier(a,this,t),this._pt=x):(!f&&!(e in t)&&yd(e,r),t2.call(this,t,e,d,r,p,l||Jn.stringFilter,c))},e2=function(t,e,n,r,s){if(ke(t)&&(t=Pa(t,s,e,n,r)),!Di(t)||t.style&&t.nodeType||An(t)||e0(t))return an(t)?Pa(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=Pa(t[a],s,e,n,r);return o},L0=function(t,e,n,r,s,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(s,a.rawVars?e[t]:e2(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==vo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},mr,gf,Md=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,x=t._dur,v=t._startAt,g=t._targets,m=t.parent,w=m&&m.data==="nested"?m.vars.targets:g,A=t._overwrite==="auto"&&!md,R=t.timeline,F,D,S,T,y,E,b,L,C,W,K,G,tt;if(R&&(!d||!s)&&(s="none"),t._ease=_s(s,ko.ease),t._yEase=f?C0(_s(f===!0?s:f,ko.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!R&&!!r.runBackwards,!R||d&&!r.stagger){if(L=g[0]?ms(g[0]).harness:0,G=L&&r[L.prop],F=Dc(r,xd),v&&(v._zTime<0&&v.progress(1),e<0&&h&&a&&!p?v.render(-1,!0):v.revert(h&&x?sc:CI),v._lazy=0),o){if(Nr(t._startAt=qe.set(g,oi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!p)&&t._startAt.revert(sc),a&&x&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&x&&!v){if(e&&(a=!1),S=oi({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Un(l),immediateRender:a,stagger:0,parent:m},F),G&&(S[L.prop]=G),Nr(t._startAt=qe.set(g,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(sc):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=x&&Un(l)||l&&!x,D=0;D<g.length;D++){if(y=g[D],b=y._gsap||Sd(g)[D]._gsap,t._ptLookup[D]=W={},uf[b.id]&&Ar.length&&Ic(),K=w===g?D:w.indexOf(y),L&&(C=new L).init(y,G||F,t,K,w)!==!1&&(t._pt=T=new Vn(t._pt,y,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(J){W[J]=T}),C.priority&&(E=1)),!L||G)for(S in F)qn[S]&&(C=L0(S,F,t,K,y,w))?C.priority&&(E=1):W[S]=T=Td.call(t,y,S,"get",F[S],K,w,0,r.stringFilter);t._op&&t._op[D]&&t.kill(y,t._op[D]),A&&t._pt&&(mr=t,De.killTweensOf(y,W,t.globalTime(e)),tt=!t.parent,mr=0),t._pt&&l&&(uf[b.id]=1)}E&&k0(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,d&&e<=0&&R.render(ri,!0,!0)},n2=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return gf=1,t.vars[e]="+=0",Md(t,a),gf=0,l?Xa(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)f=c[p],h=f._pt||f,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=He(n)+En(f.e)),f.b&&(f.b=h.s+En(f.b))},i2=function(t,e){var n=t[0]?ms(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=Ds({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},r2=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Pa=function(t,e,n,r,s){return ke(t)?t.call(e,n,r,s):an(t)&&~t.indexOf("random(")?qa(t):t},N0=Ed+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",O0={};Fn(N0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return O0[i]=1});var qe=function(i){Qv(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ra(r))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,x=l.keyframes,v=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,w=r.parent||De,A=(An(n)||e0(n)?nr(n[0]):"length"in r)?[n]:si(n),R,F,D,S,T,y,E,b;if(a._targets=A.length?Sd(A):Xa("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||d||ql(c)||ql(h)){if(r=a.vars,R=a.timeline=new Pn({data:"nested",defaults:v||{},targets:w&&w.data==="nested"?w.vars.targets:A}),R.kill(),R.parent=R._dp=$i(a),R._start=0,d||ql(c)||ql(h)){if(S=A.length,E=d&&y0(d),Di(d))for(T in d)~N0.indexOf(T)&&(b||(b={}),b[T]=d[T]);for(F=0;F<S;F++)D=Dc(r,O0),D.stagger=0,m&&(D.yoyoEase=m),b&&Ds(D,b),y=A[F],D.duration=+Pa(c,$i(a),F,y,A),D.delay=(+Pa(h,$i(a),F,y,A)||0)-a._delay,!d&&S===1&&D.delay&&(a._delay=h=D.delay,a._start+=h,D.delay=0),R.to(y,D,E?E(F,y,A):0),R._ease=oe.none;R.duration()?c=h=0:a.timeline=0}else if(x){Ra(oi(R.vars.defaults,{ease:"none"})),R._ease=_s(x.ease||r.ease||"none");var L=0,C,W,K;if(An(x))x.forEach(function(G){return R.to(A,G,">")}),R.duration();else{D={};for(T in x)T==="ease"||T==="easeEach"||r2(T,x[T],D,x.easeEach);for(T in D)for(C=D[T].sort(function(G,tt){return G.t-tt.t}),L=0,F=0;F<C.length;F++)W=C[F],K={ease:W.e,duration:(W.t-(F?C[F-1].t:0))/100*c},K[T]=W.v,R.to(A,K,L),L+=K.duration;R.duration()<c&&R.to({},{duration:c-R.duration()})}}c||a.duration(c=R.duration())}else a.timeline=0;return p===!0&&!md&&(mr=$i(a),De.killTweensOf(A),mr=0),Mi(w,$i(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!x&&a._start===nn(w._time)&&Un(f)&&OI($i(a))&&w.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-h)||0)),g&&m0($i(a),g),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,f=r>l-ve&&!h?l:r<ve?0:r,d,p,x,v,g,m,w,A,R;if(!c)FI(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,A=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+r,s,o);if(d=nn(f%v),f===l?(x=this._repeat,d=c):(x=~~(f/v),x&&x===nn(f/v)&&(d=c,x--),d>c&&(d=c)),m=this._yoyo&&x&1,m&&(R=this._yEase,d=c-d),g=Bo(this._tTime,v),d===a&&!o&&this._initted&&x===g)return this._tTime=f,this;x!==g&&(A&&this._yEase&&P0(A,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==v&&this._initted&&(this._lock=o=1,this.render(nn(v*x),!0).invalidate()._lock=0))}if(!this._initted){if(g0(this,h?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(R||this._ease)(d/c),this._from&&(this.ratio=w=1-w),d&&!a&&!s&&!x&&(Yn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;A&&A.render(r<0?r:A._dur*A._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&hf(this,r,s,o),Yn(this,"onUpdate")),this._repeat&&x!==g&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&hf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Nr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Yn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){ja||jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Md(this,c),h=this._ease(c/this._dur),n2(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(eu(this,0),this.parent||d0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ga(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,mr&&mr.vars.overwrite!==!0)._first||ga(this),this.parent&&o!==this.timeline.totalDuration()&&zo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?si(r):a,c=this._ptLookup,h=this._pt,f,d,p,x,v,g,m;if((!s||s==="all")&&LI(a,l))return s==="all"&&(this._pt=0),ga(this);for(f=this._op=this._op||[],s!=="all"&&(an(s)&&(v={},Fn(s,function(w){return v[w]=1}),s=v),s=i2(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,x=d,p={}):(p=f[m]=f[m]||{},x=s);for(v in x)g=d&&d[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&Qc(this,g,"_pt"),delete d[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&h&&ga(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ca(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Ca(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return De.killTweensOf(r,s,o)},t}(Ya);oi(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(i){qe[i]=function(){var t=new Pn,e=df.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Ad=function(t,e,n){return t[e]=n},U0=function(t,e,n){return t[e](n)},s2=function(t,e,n,r){return t[e](r.fp,n)},o2=function(t,e,n){return t.setAttribute(e,n)},wd=function(t,e){return ke(t[e])?U0:gd(t[e])&&t.setAttribute?o2:Ad},F0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},a2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},V0=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},bd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},l2=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},c2=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Qc(this,e,"_pt"):e.dep||(n=1),e=r;return!n},u2=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},k0=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Vn=function(){function i(e,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||F0,this.d=l||this,this.set=c||Ad,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=u2,this.m=n,this.mt=s,this.tween=r},i}();Fn(Ed+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return xd[i]=1});Zn.TweenMax=Zn.TweenLite=qe;Zn.TimelineLite=Zn.TimelineMax=Pn;De=new Pn({sortChildren:!1,defaults:ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=R0;var vs=[],ac={},h2=[],ug=0,f2=0,th=function(t){return(ac[t]||h2).map(function(e){return e()})},_f=function(){var t=Date.now(),e=[];t-ug>2&&(th("matchMediaInit"),vs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=xi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),th("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ug=t,th("matchMedia"))},B0=function(){function i(e,n){this.selector=n&&pf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=f2++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ke(n)&&(s=r,r=n,n=ke);var o=this,a=function(){var c=Re,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=pf(s)),Re=o,f=r.apply(o,arguments),ke(f)&&o._r.push(f),Re=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=Re;Re=null,n(this),Re=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof qe&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=vs.length;o--;)vs[o].id===this.id&&vs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),d2=function(){function i(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Di(n)||(n={matches:n});var o=new B0(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=xi.matchMedia(n[c]),l&&(vs.indexOf(o)<0&&vs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(_f):l.addEventListener("change",_f)));return h&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Nc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return A0(r)})},timeline:function(t){return new Pn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,r){an(t)&&(t=si(t)[0]);var s=ms(t||{}).get,o=n?f0:h0;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||s)(t,e,n,r)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=si(t),t.length>1){var r=t.map(function(h){return zn.quickSetter(h,e,n)}),s=r.length;return function(h){for(var f=s;f--;)r[f](h)}}t=t[0]||{};var o=qn[e],a=ms(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;vo._pt=0,f.init(t,n?h+n:h,vo,0,[t]),f.render(1,f),vo._pt&&bd(1,vo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var r,s=zn.to(t,Ds((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_s(t.ease,ko.ease)),sg(ko,t||{})},config:function(t){return sg(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!qn[a]&&!Zn[a]&&Xa(e+" effect requires "+a+" plugin.")}),Ku[e]=function(a,l,c){return n(si(a),oi(l||{},s),c)},o&&(Pn.prototype[e]=function(a,l,c){return this.add(Ku[e](a,Di(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=_s(e)},parseEase:function(t,e){return arguments.length?_s(t,e):oe},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Pn(t),r,s;for(n.smoothChildTiming=Un(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,r=De._first;r;)s=r._next,(e||!(!r._dur&&r instanceof qe&&r.vars.onComplete===r._targets[0]))&&Mi(n,r,r._start-r._delay),r=s;return Mi(De,n,0),n},context:function(t,e){return t?new B0(t,e):Re},matchMedia:function(t){return new d2(t)},matchMediaRefresh:function(){return vs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||_f()},addEventListener:function(t,e){var n=ac[t]||(ac[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ac[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:XI,wrapYoyo:$I,distribute:y0,random:E0,snap:x0,normalize:WI,getUnit:En,clamp:BI,splitColor:w0,toArray:si,selector:pf,mapRange:T0,pipe:HI,unitize:GI,interpolate:qI,shuffle:v0},install:o0,effects:Ku,ticker:jn,updateRoot:Pn.updateRoot,plugins:qn,globalTimeline:De,core:{PropTween:Vn,globals:a0,Tween:qe,Timeline:Pn,Animation:Ya,getCache:ms,_removeLinkedListItem:Qc,reverting:function(){return Mn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return md=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Nc[i]=qe[i]});jn.add(Pn.updateRoot);vo=Nc.to({},{duration:0});var p2=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},m2=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=p2(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},eh=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}m2(a,s)}}}},zn=Nc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eh("roundProps",mf),eh("modifiers"),eh("snap",x0))||Nc;qe.version=Pn.version=zn.version="3.12.5";s0=1;_d()&&Ho();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hg,gr,bo,Rd,us,fg,Cd,g2=function(){return typeof window<"u"},ir={},Qr=180/Math.PI,Ro=Math.PI/180,ho=Math.atan2,dg=1e8,Pd=/([A-Z])/g,_2=/(left|right|width|margin|padding|x)/i,v2=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},y2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},E2=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},z0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},H0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},S2=function(t,e,n){return t.style[e]=n},T2=function(t,e,n){return t.style.setProperty(e,n)},M2=function(t,e,n){return t._gsap[e]=n},A2=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},w2=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},b2=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",kn=Ne+"Origin",R2=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in ir&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=qi(r,a)}):this.tfm[t]=o.x?o[t]:qi(r,t),t===kn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},G0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},C2=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Pd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cd(),(!s||!s.isStart)&&!n[Ne]&&(G0(n),r.zOrigin&&n[kn]&&(n[kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},W0=function(t,e){var n={target:t,props:[],revert:C2,save:R2};return t._gsap||zn.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},X0,yf=function(t,e){var n=gr.createElementNS?gr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):gr.createElement(t);return n&&n.style?n:gr.createElement(t)},Ci=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Pd,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Go(e)||e,1)||""},pg="O,Moz,ms,Ms,Webkit".split(","),Go=function(t,e,n){var r=e||us,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(pg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?pg[o]:"")+t},xf=function(){g2()&&window.document&&(hg=window,gr=hg.document,bo=gr.documentElement,us=yf("div")||{style:{}},yf("div"),Ne=Go(Ne),kn=Ne+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",X0=!!Go("perspective"),Cd=zn.core.reverting,Rd=1)},nh=function i(t){var e=yf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(bo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),bo.removeChild(e),this.style.cssText=s,o},mg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$0=function(t){var e;try{e=t.getBBox()}catch{e=nh.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===nh||(e=nh.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+mg(t,["x","cx","x1"])||0,y:+mg(t,["y","cy","y1"])||0,width:0,height:0}:e},q0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$0(t))},Ls=function(t,e){if(e){var n=t.style,r;e in ir&&e!==kn&&(e=Ne),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Pd,"-$1").toLowerCase())):n.removeAttribute(e)}},_r=function(t,e,n,r,s,o){var a=new Vn(t._pt,e,n,0,1,o?H0:z0);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},gg={deg:1,rad:1,turn:1},P2={grid:1,flex:1},Or=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=us.style,l=_2.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",x,v,g,m;if(r===o||!s||gg[r]||gg[o])return s;if(o!=="px"&&!d&&(s=i(t,e,n,"px")),m=t.getCTM&&q0(t),(p||o==="%")&&(ir[e]||~e.indexOf("adius")))return x=m?t.getBBox()[l?"width":"height"]:t[h],He(p?s/x*f:s/100*x);if(a[l?"width":"height"]=f+(d?o:r),v=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(v=(t.ownerSVGElement||{}).parentNode),(!v||v===gr||!v.appendChild)&&(v=gr.body),g=v._gsap,g&&p&&g.width&&l&&g.time===jn.time&&!g.uncache)return He(s/g.width*f);if(p&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=f+r,x=t[h],w?t.style[e]=w:Ls(t,e)}else(p||o==="%")&&!P2[Ci(v,"display")]&&(a.position=Ci(t,"position")),v===t&&(a.position="static"),v.appendChild(us),x=us[h],v.removeChild(us),a.position="absolute";return l&&p&&(g=ms(v),g.time=jn.time,g.width=v[h]),He(d?x*s/f:x&&s?f/x*s:0)},qi=function(t,e,n,r){var s;return Rd||xf(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),ir[e]&&e!=="transform"?(s=Ja(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Uc(Ci(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Oc[e]&&Oc[e](t,e,n)||Ci(t,e)||c0(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(t,e,s,n)+n:s},I2=function(t,e,n,r){if(!n||n==="none"){var s=Go(e,t,1),o=s&&Ci(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Ci(t,"borderTopColor"))}var a=new Vn(this._pt,t.style,e,0,1,V0),l=0,c=0,h,f,d,p,x,v,g,m,w,A,R,F;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(v=t.style[e],t.style[e]=r,r=Ci(t,e)||r,v?t.style[e]=v:Ls(t,e)),h=[n,r],R0(h),n=h[0],r=h[1],d=n.match(_o)||[],F=r.match(_o)||[],F.length){for(;f=_o.exec(r);)g=f[0],w=r.substring(l,f.index),x?x=(x+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(x=1),g!==(v=d[c++]||"")&&(p=parseFloat(v)||0,R=v.substr((p+"").length),g.charAt(1)==="="&&(g=wo(p,g)+R),m=parseFloat(g),A=g.substr((m+"").length),l=_o.lastIndex-A.length,A||(A=A||Jn.units[e]||R,l===r.length&&(r+=A,a.e+=A)),R!==A&&(p=Or(t,e,v,A)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:p,c:m-p,m:x&&x<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?H0:z0;return i0.test(r)&&(a.e=0),this._pt=a,a},_g={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},D2=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=_g[n]||n,e[1]=_g[r]||r,e.join(" ")},L2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ir[a]&&(l=1,a=a==="transformOrigin"?kn:Ne),Ls(n,a);l&&(Ls(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),Ja(n,1),o.uncache=1,G0(r)))}},Oc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Vn(t._pt,e,n,0,0,L2);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ka=[1,0,0,1,0,0],j0={},Y0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},vg=function(t){var e=Ci(t,Ne);return Y0(e)?Ka:e.substr(7).match(n0).map(He)},Id=function(t,e){var n=t._gsap||ms(t),r=t.style,s=vg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!t.offsetParent&&t!==bo&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,bo.appendChild(t)),s=vg(t),l?r.display=l:Ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):bo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ef=function(t,e,n,r,s,o){var a=t._gsap,l=s||Id(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],x=l[1],v=l[2],g=l[3],m=l[4],w=l[5],A=e.split(" "),R=parseFloat(A[0])||0,F=parseFloat(A[1])||0,D,S,T,y;n?l!==Ka&&(S=p*g-x*v)&&(T=R*(g/S)+F*(-v/S)+(v*w-g*m)/S,y=R*(-x/S)+F*(p/S)-(p*w-x*m)/S,R=T,F=y):(D=$0(t),R=D.x+(~A[0].indexOf("%")?R/100*D.width:R),F=D.y+(~(A[1]||A[0]).indexOf("%")?F/100*D.height:F)),r||r!==!1&&a.smooth?(m=R-c,w=F-h,a.xOffset=f+(m*p+w*v)-m,a.yOffset=d+(m*x+w*g)-w):a.xOffset=a.yOffset=0,a.xOrigin=R,a.yOrigin=F,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[kn]="0px 0px",o&&(_r(o,a,"xOrigin",c,R),_r(o,a,"yOrigin",h,F),_r(o,a,"xOffset",f,a.xOffset),_r(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",R+" "+F)},Ja=function(t,e){var n=t._gsap||new D0(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ci(t,kn)||"0",h,f,d,p,x,v,g,m,w,A,R,F,D,S,T,y,E,b,L,C,W,K,G,tt,J,gt,St,xt,Nt,kt,et,ot;return h=f=d=v=g=m=w=A=R=0,p=x=1,n.svg=!!(t.getCTM&&q0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),r.scale=r.rotate=r.translate="none"),S=Id(t,n.svg),n.svg&&(n.uncache?(J=t.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",tt=""):tt=!e&&t.getAttribute("data-svg-origin"),Ef(t,tt||c,!!tt||n.originIsAbsolute,n.smooth!==!1,S)),F=n.xOrigin||0,D=n.yOrigin||0,S!==Ka&&(b=S[0],L=S[1],C=S[2],W=S[3],h=K=S[4],f=G=S[5],S.length===6?(p=Math.sqrt(b*b+L*L),x=Math.sqrt(W*W+C*C),v=b||L?ho(L,b)*Qr:0,w=C||W?ho(C,W)*Qr+v:0,w&&(x*=Math.abs(Math.cos(w*Ro))),n.svg&&(h-=F-(F*b+D*C),f-=D-(F*L+D*W))):(ot=S[6],kt=S[7],St=S[8],xt=S[9],Nt=S[10],et=S[11],h=S[12],f=S[13],d=S[14],T=ho(ot,Nt),g=T*Qr,T&&(y=Math.cos(-T),E=Math.sin(-T),tt=K*y+St*E,J=G*y+xt*E,gt=ot*y+Nt*E,St=K*-E+St*y,xt=G*-E+xt*y,Nt=ot*-E+Nt*y,et=kt*-E+et*y,K=tt,G=J,ot=gt),T=ho(-C,Nt),m=T*Qr,T&&(y=Math.cos(-T),E=Math.sin(-T),tt=b*y-St*E,J=L*y-xt*E,gt=C*y-Nt*E,et=W*E+et*y,b=tt,L=J,C=gt),T=ho(L,b),v=T*Qr,T&&(y=Math.cos(T),E=Math.sin(T),tt=b*y+L*E,J=K*y+G*E,L=L*y-b*E,G=G*y-K*E,b=tt,K=J),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,m=180-m),p=He(Math.sqrt(b*b+L*L+C*C)),x=He(Math.sqrt(G*G+ot*ot)),T=ho(K,G),w=Math.abs(T)>2e-4?T*Qr:0,R=et?1/(et<0?-et:et):0),n.svg&&(tt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Y0(Ci(t,Ne)),tt&&t.setAttribute("transform",tt))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(p*=-1,w+=v<=0?180:-180,v+=v<=0?180:-180):(x*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=He(p),n.scaleY=He(x),n.rotation=He(v)+a,n.rotationX=He(g)+a,n.rotationY=He(m)+a,n.skewX=w+a,n.skewY=A+a,n.transformPerspective=R+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[kn]=Uc(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?O2:X0?K0:N2,n.uncache=0,n},Uc=function(t){return(t=t.split(" "))[0]+" "+t[1]},ih=function(t,e,n){var r=En(e);return He(parseFloat(e)+parseFloat(Or(t,"x",n+"px",r)))+r},N2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,K0(t,e)},Yr="0deg",da="0px",Kr=") ",K0=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,p=n.skewY,x=n.scaleX,v=n.scaleY,g=n.transformPerspective,m=n.force3D,w=n.target,A=n.zOrigin,R="",F=m==="auto"&&t&&t!==1||m===!0;if(A&&(f!==Yr||h!==Yr)){var D=parseFloat(h)*Ro,S=Math.sin(D),T=Math.cos(D),y;D=parseFloat(f)*Ro,y=Math.cos(D),o=ih(w,o,S*y*-A),a=ih(w,a,-Math.sin(D)*-A),l=ih(w,l,T*y*-A+A)}g!==da&&(R+="perspective("+g+Kr),(r||s)&&(R+="translate("+r+"%, "+s+"%) "),(F||o!==da||a!==da||l!==da)&&(R+=l!==da||F?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Kr),c!==Yr&&(R+="rotate("+c+Kr),h!==Yr&&(R+="rotateY("+h+Kr),f!==Yr&&(R+="rotateX("+f+Kr),(d!==Yr||p!==Yr)&&(R+="skew("+d+", "+p+Kr),(x!==1||v!==1)&&(R+="scale("+x+", "+v+Kr),w.style[Ne]=R||"translate(0, 0)"},O2=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,p=n.target,x=n.xOrigin,v=n.yOrigin,g=n.xOffset,m=n.yOffset,w=n.forceCSS,A=parseFloat(o),R=parseFloat(a),F,D,S,T,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ro,c*=Ro,F=Math.cos(l)*f,D=Math.sin(l)*f,S=Math.sin(l-c)*-d,T=Math.cos(l-c)*d,c&&(h*=Ro,y=Math.tan(c-h),y=Math.sqrt(1+y*y),S*=y,T*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),F*=y,D*=y)),F=He(F),D=He(D),S=He(S),T=He(T)):(F=f,T=d,D=S=0),(A&&!~(o+"").indexOf("px")||R&&!~(a+"").indexOf("px"))&&(A=Or(p,"x",o,"px"),R=Or(p,"y",a,"px")),(x||v||g||m)&&(A=He(A+x-(x*F+v*S)+g),R=He(R+v-(x*D+v*T)+m)),(r||s)&&(y=p.getBBox(),A=He(A+r/100*y.width),R=He(R+s/100*y.height)),y="matrix("+F+","+D+","+S+","+T+","+A+","+R+")",p.setAttribute("transform",y),w&&(p.style[Ne]=y)},U2=function(t,e,n,r,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),c=l-r,h=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*dg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*dg)%o-~~(c/o)*o)),t._pt=d=new Vn(t._pt,e,n,r,c,y2),d.e=h,d.u="deg",t._props.push(n),d},yg=function(t,e){for(var n in e)t[n]=e[n];return t},F2=function(t,e,n){var r=yg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,p,x;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=Ja(n,1),Ls(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=Ja(n,1),o[Ne]=c);for(l in ir)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=En(c),x=En(h),f=p!==x?Or(n,l,c,x):parseFloat(c),d=parseFloat(h),t._pt=new Vn(t._pt,a,l,f,d-f,vf),t._pt.u=x||0,t._props.push(l));yg(a,r)};Fn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});Oc[t>1?"border"+i:i]=function(a,l,c,h,f){var d,p;if(arguments.length<4)return d=o.map(function(x){return qi(a,x,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(x,v){return p[x]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,p,f)}});var J0={name:"css",register:xf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,d,p,x,v,g,m,w,A,R,F,D,S,T;Rd||xf(),this.styles=this.styles||W0(t),T=this.styles.props,this.tween=n;for(v in e)if(v!=="autoRound"&&(h=e[v],!(qn[v]&&L0(v,e,n,r,t,s)))){if(p=typeof h,x=Oc[v],p==="function"&&(h=h.call(n,r,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=qa(h)),x)x(this,t,v,h,n)&&(S=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(v)+"").trim(),h+="",wr.lastIndex=0,wr.test(c)||(g=En(c),m=En(h)),m?g!==m&&(c=Or(t,v,c,m)+m):g&&(h+=g),this.add(a,"setProperty",c,h,r,s,0,0,v),o.push(v),T.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,r,t,s):l[v],an(c)&&~c.indexOf("random(")&&(c=qa(c)),En(c+"")||c==="auto"||(c+=Jn.units[v]||En(qi(t,v))||""),(c+"").charAt(1)==="="&&(c=qi(t,v))):c=qi(t,v),d=parseFloat(c),w=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),f=parseFloat(h),v in Ai&&(v==="autoAlpha"&&(d===1&&qi(t,"visibility")==="hidden"&&f&&(d=0),T.push("visibility",0,a.visibility),_r(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Ai[v],~v.indexOf(",")&&(v=v.split(",")[0]))),A=v in ir,A){if(this.styles.save(v),R||(F=t._gsap,F.renderTransform&&!e.parseTransform||Ja(t,e.parseTransform),D=e.smoothOrigin!==!1&&F.smooth,R=this._pt=new Vn(this._pt,a,Ne,0,1,F.renderTransform,F,0,-1),R.dep=1),v==="scale")this._pt=new Vn(this._pt,F,"scaleY",F.scaleY,(w?wo(F.scaleY,w+f):f)-F.scaleY||0,vf),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){T.push(kn,0,a[kn]),h=D2(h),F.svg?Ef(t,h,0,D,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==F.zOrigin&&_r(this,F,"zOrigin",F.zOrigin,m),_r(this,a,v,Uc(c),Uc(h)));continue}else if(v==="svgOrigin"){Ef(t,h,1,D,0,this);continue}else if(v in j0){U2(this,F,v,d,w?wo(d,w+h):h);continue}else if(v==="smoothOrigin"){_r(this,F,"smooth",F.smooth,h);continue}else if(v==="force3D"){F[v]=h;continue}else if(v==="transform"){F2(this,h,t);continue}}else v in a||(v=Go(v)||v);if(A||(f||f===0)&&(d||d===0)&&!v2.test(h)&&v in a)g=(c+"").substr((d+"").length),f||(f=0),m=En(h)||(v in Jn.units?Jn.units[v]:g),g!==m&&(d=Or(t,v,c,m)),this._pt=new Vn(this._pt,A?F:a,v,d,(w?wo(d,w+f):f)-d,!A&&(m==="px"||v==="zIndex")&&e.autoRound!==!1?E2:vf),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=x2);else if(v in a)I2.call(this,t,v,c,w?w+h:h);else if(v in t)this.add(t,v,c||t[v],w?w+h:h,r,s);else if(v!=="parseTransform"){yd(v,h);continue}A||(v in a?T.push(v,0,a[v]):T.push(v,1,c||t[v])),o.push(v)}}S&&k0(this)},render:function(t,e){if(e.tween._time||!Cd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:qi,aliases:Ai,getSetter:function(t,e,n){var r=Ai[e];return r&&r.indexOf(",")<0&&(e=r),e in ir&&e!==kn&&(t._gsap.x||qi(t,"x"))?n&&fg===n?e==="scale"?A2:M2:(fg=n||{})&&(e==="scale"?w2:b2):t.style&&!gd(t.style[e])?S2:~e.indexOf("-")?T2:wd(t,e)},core:{_removeProperty:Ls,_getMatrix:Id}};zn.utils.checkPrefix=Go;zn.core.getStyleSaver=W0;(function(i,t,e,n){var r=Fn(i+","+t+","+e,function(s){ir[s]=1});Fn(t,function(s){Jn.units[s]="deg",j0[s]=1}),Ai[r[13]]=i+","+t,Fn(n,function(s){var o=s.split(":");Ai[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Jn.units[i]="px"});zn.registerPlugin(J0);var Be=zn.registerPlugin(J0)||zn;Be.core.Tween;const Li={NONE:"none",SQUIRTLE:"squirtle",CHARMANDER:"charmander"},xg={type:"change"},rh={type:"start"},Eg={type:"end"},jl=new id,Sg=new fr,V2=Math.cos(70*sw.DEG2RAD);class k2 extends Us{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Tt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xg),n.update(),s=r.NONE},this.update=function(){const P=new k,X=new Rs().setFromUnitVectors(t.up,new k(0,1,0)),$=X.clone().invert(),Z=new k,lt=new Rs,Lt=new k,zt=2*Math.PI;return function(Ae=null){const ie=n.object.position;P.copy(ie).sub(n.target),P.applyQuaternion(X),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&L(E(Ae)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xe=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;isFinite(xe)&&isFinite(Ce)&&(xe<-Math.PI?xe+=zt:xe>Math.PI&&(xe-=zt),Ce<-Math.PI?Ce+=zt:Ce>Math.PI&&(Ce-=zt),xe<=Ce?a.theta=Math.max(xe,Math.min(Ce,a.theta)):a.theta=a.theta>(xe+Ce)/2?Math.max(xe,a.theta):Math.min(Ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let we=!1;if(n.zoomToCursor&&D||n.object.isOrthographicCamera)a.radius=St(a.radius);else{const Ge=a.radius;a.radius=St(a.radius*c),we=Ge!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion($),ie.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&D){let Ge=null;if(n.object.isPerspectiveCamera){const wn=P.length();Ge=St(wn*c);const Hn=wn-Ge;n.object.position.addScaledVector(R,Hn),n.object.updateMatrixWorld(),we=!!Hn}else if(n.object.isOrthographicCamera){const wn=new k(F.x,F.y,0);wn.unproject(n.object);const Hn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),we=Hn!==n.object.zoom;const kr=new k(F.x,F.y,0);kr.unproject(n.object),n.object.position.sub(kr).add(wn),n.object.updateMatrixWorld(),Ge=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(jl.origin.copy(n.object.position),jl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(jl.direction))<V2?t.lookAt(n.target):(Sg.setFromNormalAndCoplanarPoint(n.object.up,n.target),jl.intersectPlane(Sg,n.target))))}else if(n.object.isOrthographicCamera){const Ge=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ge!==n.object.zoom&&(n.object.updateProjectionMatrix(),we=!0)}return c=1,D=!1,we||Z.distanceToSquared(n.object.position)>o||8*(1-lt.dot(n.object.quaternion))>o||Lt.distanceToSquared(n.target)>o?(n.dispatchEvent(xg),Z.copy(n.object.position),lt.copy(n.object.quaternion),Lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",wt),n.domElement.removeEventListener("pointerdown",Rt),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",I),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ng,l=new ng;let c=1;const h=new k,f=new ft,d=new ft,p=new ft,x=new ft,v=new ft,g=new ft,m=new ft,w=new ft,A=new ft,R=new k,F=new ft;let D=!1;const S=[],T={};let y=!1;function E(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function b(P){const X=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*X)}function L(P){l.theta-=P}function C(P){l.phi-=P}const W=function(){const P=new k;return function($,Z){P.setFromMatrixColumn(Z,0),P.multiplyScalar(-$),h.add(P)}}(),K=function(){const P=new k;return function($,Z){n.screenSpacePanning===!0?P.setFromMatrixColumn(Z,1):(P.setFromMatrixColumn(Z,0),P.crossVectors(n.object.up,P)),P.multiplyScalar($),h.add(P)}}(),G=function(){const P=new k;return function($,Z){const lt=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;P.copy(Lt).sub(n.target);let zt=P.length();zt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*$*zt/lt.clientHeight,n.object.matrix),K(2*Z*zt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W($*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),K(Z*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function gt(P,X){if(!n.zoomToCursor)return;D=!0;const $=n.domElement.getBoundingClientRect(),Z=P-$.left,lt=X-$.top,Lt=$.width,zt=$.height;F.x=Z/Lt*2-1,F.y=-(lt/zt)*2+1,R.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function St(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function xt(P){f.set(P.clientX,P.clientY)}function Nt(P){gt(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function kt(P){x.set(P.clientX,P.clientY)}function et(P){d.set(P.clientX,P.clientY),p.subVectors(d,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;L(2*Math.PI*p.x/X.clientHeight),C(2*Math.PI*p.y/X.clientHeight),f.copy(d),n.update()}function ot(P){w.set(P.clientX,P.clientY),A.subVectors(w,m),A.y>0?tt(b(A.y)):A.y<0&&J(b(A.y)),m.copy(w),n.update()}function Ct(P){v.set(P.clientX,P.clientY),g.subVectors(v,x).multiplyScalar(n.panSpeed),G(g.x,g.y),x.copy(v),n.update()}function _t(P){gt(P.clientX,P.clientY),P.deltaY<0?J(b(P.deltaY)):P.deltaY>0&&tt(b(P.deltaY)),n.update()}function Ht(P){let X=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),X=!0;break}X&&(P.preventDefault(),n.update())}function Kt(P){if(S.length===1)f.set(P.pageX,P.pageY);else{const X=Yt(P),$=.5*(P.pageX+X.x),Z=.5*(P.pageY+X.y);f.set($,Z)}}function Bt(P){if(S.length===1)x.set(P.pageX,P.pageY);else{const X=Yt(P),$=.5*(P.pageX+X.x),Z=.5*(P.pageY+X.y);x.set($,Z)}}function Zt(P){const X=Yt(P),$=P.pageX-X.x,Z=P.pageY-X.y,lt=Math.sqrt($*$+Z*Z);m.set(0,lt)}function U(P){n.enableZoom&&Zt(P),n.enablePan&&Bt(P)}function dt(P){n.enableZoom&&Zt(P),n.enableRotate&&Kt(P)}function at(P){if(S.length==1)d.set(P.pageX,P.pageY);else{const $=Yt(P),Z=.5*(P.pageX+$.x),lt=.5*(P.pageY+$.y);d.set(Z,lt)}p.subVectors(d,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;L(2*Math.PI*p.x/X.clientHeight),C(2*Math.PI*p.y/X.clientHeight),f.copy(d)}function yt(P){if(S.length===1)v.set(P.pageX,P.pageY);else{const X=Yt(P),$=.5*(P.pageX+X.x),Z=.5*(P.pageY+X.y);v.set($,Z)}g.subVectors(v,x).multiplyScalar(n.panSpeed),G(g.x,g.y),x.copy(v)}function nt(P){const X=Yt(P),$=P.pageX-X.x,Z=P.pageY-X.y,lt=Math.sqrt($*$+Z*Z);w.set(0,lt),A.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),tt(A.y),m.copy(w);const Lt=(P.pageX+X.x)*.5,zt=(P.pageY+X.y)*.5;gt(Lt,zt)}function Ft(P){n.enableZoom&&nt(P),n.enablePan&&yt(P)}function Et(P){n.enableZoom&&nt(P),n.enableRotate&&at(P)}function Rt(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",V),n.domElement.addEventListener("pointerup",I)),!Pt(P)&&(Jt(P),P.pointerType==="touch"?qt(P):q(P)))}function V(P){n.enabled!==!1&&(P.pointerType==="touch"?ht(P):st(P))}function I(P){switch(Gt(P),S.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",I),n.dispatchEvent(Eg),s=r.NONE;break;case 1:const X=S[0],$=T[X];qt({pointerId:X,pageX:$.x,pageY:$.y});break}}function q(P){let X;switch(P.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case $s.DOLLY:if(n.enableZoom===!1)return;Nt(P),s=r.DOLLY;break;case $s.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;kt(P),s=r.PAN}else{if(n.enableRotate===!1)return;xt(P),s=r.ROTATE}break;case $s.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;xt(P),s=r.ROTATE}else{if(n.enablePan===!1)return;kt(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(rh)}function st(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;et(P);break;case r.DOLLY:if(n.enableZoom===!1)return;ot(P);break;case r.PAN:if(n.enablePan===!1)return;Ct(P);break}}function it(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(rh),_t(rt(P)),n.dispatchEvent(Eg))}function rt(P){const X=P.deltaMode,$={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(X){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return P.ctrlKey&&!y&&($.deltaY*=10),$}function At(P){P.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(P){P.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function Tt(P){n.enabled===!1||n.enablePan===!1||Ht(P)}function qt(P){switch(Wt(P),S.length){case 1:switch(n.touches.ONE){case qs.ROTATE:if(n.enableRotate===!1)return;Kt(P),s=r.TOUCH_ROTATE;break;case qs.PAN:if(n.enablePan===!1)return;Bt(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case qs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),s=r.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(rh)}function ht(P){switch(Wt(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;at(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;yt(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Et(P),n.update();break;default:s=r.NONE}}function wt(P){n.enabled!==!1&&P.preventDefault()}function Jt(P){S.push(P.pointerId)}function Gt(P){delete T[P.pointerId];for(let X=0;X<S.length;X++)if(S[X]==P.pointerId){S.splice(X,1);return}}function Pt(P){for(let X=0;X<S.length;X++)if(S[X]==P.pointerId)return!0;return!1}function Wt(P){let X=T[P.pointerId];X===void 0&&(X=new ft,T[P.pointerId]=X),X.set(P.pageX,P.pageY)}function Yt(P){const X=P.pointerId===S[0]?S[1]:S[0];return T[X]}n.domElement.addEventListener("contextmenu",wt),n.domElement.addEventListener("pointerdown",Rt),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",it,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}class B2 extends YP{constructor(t,e){super(),this.customUniforms=t,this.setValues(e),this.onBeforeCompile=n=>{n.uniforms.uGlitterSize=this.customUniforms.uGlitterSize,n.uniforms.uGlitterDensity=this.customUniforms.uGlitterDensity,n.vertexShader=n.vertexShader.replace("#include <common>",`
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
          `)}}}const ol=new pd;ol.hide();const ts=2.5,tn=1/6,vr=1.15;let br=Li.NONE,Z0=!1,va,yo,Tg,_i,hs,fs,xo,es,dr;const Q0=document.querySelector("canvas.webgl"),Mg=new oI,sh=new ft,hn=new gP;hn.background=new re(13808780);const Ag=new lI,z2=new rI("#fff",3.5);hn.add(z2);const ty=new Zv("#fff",.5);ty.position.set(0,4,9.5);hn.add(ty);const ey=new Zv("#fff",.5);ey.position.set(0,-4.5,9.5);hn.add(ey);const Oi=new eI,ny=Oi.load("./textures/wall/painted_plaster_wall_diff_1k.jpg");ny.colorSpace=ei;const iy=Oi.load("./textures/box/green_metal_rust_diff_1k.jpg"),H2=Oi.load("./textures/box/green_metal_rust_arm_1k.jpg"),G2=Oi.load("./textures/box/green_metal_rust_nor_gl_1k.jpg");iy.colorSpace=ei;const W2=Oi.load("./textures/shelf/wood_peeling_paint_weathered_diff_1k.jpg"),oh=Oi.load("./textures/shelf/wood_peeling_paint_weathered_arm_1k.jpg"),X2=Oi.load("./textures/shelf/wood_peeling_paint_weathered_nor_gl_1k.jpg");Oi.load("./textures/posters/PosterAlpha.jpg");const $2=Oi.load("./textures/posters/CharmanderPosterColor.jpg"),q2=Oi.load("./textures/posters/CharmanderPosterMetal.jpg"),j2=new rs({transparent:!0,map:$2,metalnessMap:q2,metalness:1,roughness:.35}),Y2=new Cs({color:"#019",transparent:!0});function K2(){const i=new Te(new Mr(12,12,30,30),new rs({color:16777200,map:ny}));hn.add(i),Ag.load("./fonts/helvetiker_bold.typeface.json",s=>{const o={uGlitterSize:{value:20},uGlitterDensity:{value:1.2}},a=new B2(o,{color:"#643b9f"});es=new Ji,hn.add(es);const l="PICK YOUR",c="PRESIDENT";l.split("").forEach((h,f)=>{const d=new qu(h,{font:s,size:.5,depth:.02,curveSegments:8});d.center();const p=new Te(d,a);p.position.x=l[f-1]==="I"?f*.42:f*.5,p.position.x+=.25,p.rotation.z=(Math.random()-.5)*Math.PI/16,es.add(p)}),c.split("").forEach((h,f)=>{const d=new qu(h,{font:s,size:.5,depth:.02,curveSegments:12});d.center();const p=new Te(d,a);p.position.x=c[f-1]==="I"?f*.49:f*.51,p.position.x+=.25,p.position.y=-1.25,p.rotation.z=(Math.random()-.5)*Math.PI/16,es.add(p)}),es.position.y=3.5,es.position.x=-2.25}),dr=new Ji,hn.add(dr);const t=new Te(new ud(.25,1.5,3,2),new Cs({color:"#000"}));t.rotation.z=Math.PI/2,t.position.y=1;const e=new Te(new Ps(3,2,1),new rs({map:iy,aoMap:H2,displacementMap:G2,displacementScale:.3,displacementBias:-.15}));dr.add(t,e),Ag.load("./fonts/optimer_bold.typeface.json",s=>{const o=new rs({color:"#B87333",metalness:1,roughness:.25}),a=new qu("VOTE",{font:s,size:.5,depth:.02,curveSegments:8});a.center();const l=new Te(a,o);l.position.z=.501,dr.add(l)});const n=new Te(new Ps(10,.3,2),new rs({map:W2,aoMap:oh,roughnessMap:oh,metalnessMap:oh,normalMap:X2}));hn.add(n),_i=new Te(new Mr(.8*ts,1.15*ts,12,12),j2),hs=new Te(new Mr(.8*ts,1.15*ts,12,12),Y2),hn.add(hs),hn.add(_i);function r(s){const o=new Ji,a=new Cs({color:8421504}),l=new hd(.1*tn,.2*tn,16),c=new Te(l,a);c.position.y=-.75*tn,c.rotation.z=Math.PI,o.add(c);const h=new cs(.1*tn,.1*tn,.8*tn,16),f=new Te(h,a);f.position.y=-.25*tn,o.add(f);const d=new rs({color:s,metalness:.4,roughness:.3}),p=new Te(new cs(.2*tn,.5*tn,.1*tn,16),d);p.position.y=0,o.add(p);const x=new Te(new cs(.2*tn,.2*tn,.6*tn,16),d);x.position.y=.3*tn,o.add(x);const v=new Te(new cs(.4*tn,.2*tn,.1*tn,16),d);return v.position.y=.6*tn,o.add(v),o}fs=r(16711680),hn.add(fs),xo=r(255),hn.add(xo),xo.rotation.set(Math.PI/2,Math.random()*-.6,Math.random()*-.3),xo.position.set(vr,1.15*ts*.5-.09,.1),fs.rotation.set(Math.PI/2,Math.random()*.6,Math.random()*.3),fs.position.set(-vr,1.15*ts*.5-.1,.1),_i.position.x=0-vr,hs.position.x=0+vr,_i.position.z=.025,hs.position.z=.025,dr.position.y=-2.75,dr.position.z=1,n.position.y=-3.75,n.position.z=1}function J2(i){const t=new Ji;hn.add(t),new rs({color:8421504});const e=new dd(1.4,32,32,void 0,void 0,0,Oe.buttonSize),n=new Cs({color:i===Li.SQUIRTLE?255:16711680}),r=new Te(e,n);r.rotation.x=Math.PI/2,t.add(r),t.position.y=0,t.position.z=4;const s=new qo().setFromObject(t),o=new Te(new Mr(10,4,2,2),new Cs({color:i===Li.CHARMANDER?"#F8C8DC":"#A7C7E7"})),a=new k(s.x,s.y,(s.min.z+s.max.z)/2);t.position.sub(a);const l=new Ji;return l.add(t),l.position.add(a),l.position.y=12,hn.add(l),l.add(o),l}const Si={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Si.width=window.innerWidth,Si.height=window.innerHeight,Ns.aspect=Si.width/Si.height,Ns.updateProjectionMatrix(),Wo.setSize(Si.width,Si.height),Wo.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Ns=new ni(75,Si.width/Si.height,.1,15);Ns.position.z=7;hn.add(Ns);const Ln=new k2(Ns,Q0);Ln.maxAzimuthAngle=Math.PI/8;Ln.minAzimuthAngle=-Math.PI/8;Ln.minPolarAngle=Math.PI/2+-Math.PI/8;Ln.maxPolarAngle=Math.PI/2+Math.PI/8;Ln.maxDistance=7;Ln.minDistance=6.5;Ln.enablePan=!1;const Wo=new mP({canvas:Q0});Wo.setSize(Si.width,Si.height);Wo.setPixelRatio(Math.min(window.devicePixelRatio,2));Wo.shadowMap.enabled=!0;const Z2=new sI,ry=()=>{Z2.getElapsedTime(),Ln.update(),Wo.render(hn,Ns),window.requestAnimationFrame(ry)};function wg(i){const t=nD(i);if(br==t){aD(i===_i?fs:xo),sD(i),br=Li.NONE;return}br=t,oD(i===_i?fs:xo),rD(i)}async function Q2(){try{return lD(ah()),(await XM(PM(jM,"votes"),{vote:br})).id?tD(br):setTimeout(()=>bg(ah()),500)}catch(i){setTimeout(()=>bg(ah()),500),console.error("Error casting vote:",i)}}function tD(i){document.cookie=`vote=${i}; path=/; max-age=31536000`,sy(i)}function eD(){es.children.forEach((i,t)=>{setTimeout(()=>{uD(i)},t*50)})}function sy(i,t=!0){Z0=!0,Tg=J2(i),cD(Tg,t),document.getElementById("hud-top").classList.add("animate-down"),document.getElementById("hud-bottom").classList.add("animate-up"),document.getElementById("voting").classList.add(i===Li.CHARMANDER?"red":"blue")}function nD(i){return i==_i?Li.CHARMANDER:Li.SQUIRTLE}function ah(){return br===Li.CHARMANDER?_i:hs}function iD(i){var e,n;sh.x=i.clientX/window.innerWidth*2-1,sh.y=-(i.clientY/window.innerHeight)*2+1,Mg.setFromCamera(sh,Ns);const t=Mg.intersectObjects(hn.children);t.length>0&&(Z0||(t[0].object==_i?wg(_i):t[0].object==hs?wg(hs):((e=t[0].object)==null?void 0:e.parent)==dr&&br==Li.NONE?eD():((n=t[0].object)==null?void 0:n.parent)==dr&&br!=Li.NONE&&Q2()))}function rD(i){va=new k(i===_i?-vr:vr,0,.025),Be.to(i.position,{delay:.2,duration:Oe.easeDuration,x:0,y:Oe.posterSelectionHeight,z:Oe.posterSelectionZ,ease:Oe.resetEase})}function sD(i){Be.to(i.position,{duration:Oe.easeDuration+.2,x:va.x,y:va.y,z:va.z,ease:Oe.resetEase}),va=void 0}function oD(i){yo=new k(i===fs?-vr:vr,1.15*ts*.5-.09,.1),Be.to(i.rotation,{duration:.2,x:Math.PI/4}),Be.to(i.rotation,{delay:.1,duration:.2,x:Math.PI/2}),Be.to(i.position,{duration:.3,y:i.position.y+.5,z:i.position.z+.3,ease:"power1.out"}),Be.to(i.position,{delay:.15,duration:.2,z:yo.z,ease:"power1.out"})}function aD(i){Be.to(i.position,{duration:.2,z:i.position.z+.3,ease:"power1.in"}),Be.to(i.rotation,{duration:.2,x:Math.PI/4}),Be.to(i.position,{delay:.2,duration:.3,x:yo.x,y:yo.y,z:yo.z,ease:"power1.out"}),Be.to(i.rotation,{delay:.2,duration:.3,x:Math.PI/2,y:Math.random()*-.6,z:Math.random()*-.3}),yo=void 0}function lD(i){Be.to(i.position,{duration:.5,z:1,ease:"power1.out"}),Be.to(i.position,{delay:.3,duration:.5,y:-6,ease:"power1.out"}),Be.to(i.material,{delay:.4,duration:.1,opacity:0,ease:"power1.out"})}function bg(i){Be.to(i.material,{duration:.2,opacity:1,ease:"power1.in"}),Be.to(i.position,{duration:.3,y:Oe.posterSelectionHeight,ease:"power1.out"}),Be.to(i.position,{delay:.3,duration:.5,z:Oe.posterSelectionZ,ease:"power1.out"})}function cD(i,t){t?Be.to(i.position,{duration:1.5,y:0,ease:"power4.out"}):i.position.y=0,Be.timeline({repeat:-1,yoyo:!0}).to(i.rotation,{duration:4,y:Math.PI/12,ease:"power2.inOut"}).to(i.rotation,{duration:4,y:-Math.PI/12,ease:"power2.inOut"})}function uD(i){let t=Be.timeline({yoyo:!0});return t.to(i.scale,{x:1.1,y:1.1,z:1.1,duration:.2,ease:"power1.inOut"}),t.to(i.rotation,{z:"+=0.1",duration:.1,ease:"power1.inOut",yoyo:!0,repeat:3}),t.to(i.scale,{x:1,y:1,z:1,duration:.2,ease:"power1.inOut"}),t}function hD(){Be.to(Ln.object.rotation,{duration:Oe.easeDuration,x:0,y:0,z:0,ease:Oe.resetEase}),Be.to(Ln.object.position,{duration:Oe.easeDuration,x:Ln.position0.x,y:Ln.position0.y,z:Ln.position0.z,ease:Oe.resetEase})}const Oe={};Oe.resetEase="elastic.out(1,2)";Oe.easeDuration=.3;Oe.spawnDistance=16;Oe.posterSelectionHeight=.75;Oe.posterSelectionZ=4;Oe.buttonSize=.3;ol.add(Oe,"posterSelectionHeight");ol.add(Oe,"posterSelectionZ");ol.add(Oe,"resetEase");ol.add(Oe,"easeDuration");function Rg(i){const t=document.cookie.split(";");for(let e of t)if(e=e.trim(),e.startsWith(i+"="))return e.substring(i.length+1);return null}Ln.addEventListener("end",()=>hD());window.addEventListener("click",iD,!1);Rg("vote")?sy(Rg("vote"),!1):K2();ry();
//# sourceMappingURL=index-DmCwKL1w.js.map
